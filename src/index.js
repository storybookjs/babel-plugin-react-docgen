import * as _ from 'lodash';
import * as ReactDocgen from 'react-docgen';
import actualNameHandler from './actualNameHandler';
import { relativePath } from './relativePath';

const defaultHandlers = Object.values(ReactDocgen.handlers).map(handler => handler);

export default function({ types: t }) {
  return {
    visitor: {
      Program: {
        exit(path, state) {
          injectReactDocgenInfo(path, state, this.file.code, t);
        },
      },
    },
  };
}

function injectReactDocgenInfo(path, state, code, t) {
  const { filename } = state.file.opts;
  const program = path.scope.getProgramParent().path;

  const {
    resolver: resolverOpt,
    handlers: handlersOpt,
    DOC_GEN_COLLECTION_NAME,
    ...opts
  } = state.opts;

  let docgenResults = [];
  try {
    let resolver = ReactDocgen.resolver.findAllExportedComponentDefinitions;
    if (typeof resolverOpt === 'string') {
      resolver = ReactDocgen.resolver[resolverOpt];
    } else if (typeof resolverOpt === 'function') {
      resolver = resolverOpt;
    }

    let customHandlers = [];
    if (handlersOpt) {
      handlersOpt.forEach(handler => {
        if (typeof handler === 'string') {
          customHandlers.push(require(handler));
        } else if (typeof handler === 'function') {
          customHandlers.push(handler);
        }
      });
    }

    const handlers = [...defaultHandlers, ...customHandlers, actualNameHandler];
    docgenResults = ReactDocgen.parse(code, resolver, handlers, {
      ...opts,
      importer: ReactDocgen.importers.makeFsImporter(),
      filename,
    });

    if (docgenResults && !Array.isArray(docgenResults)) {
      docgenResults = [docgenResults];
    }

    if (state.opts.removeMethods) {
      docgenResults.forEach(function(docgenResult) {
        delete docgenResult.methods;
      });
    }
  } catch (e) {
    // this is for debugging the error only, do not ship this console log or else it pollutes the webpack output
    // console.log(e);
    return;
  }

  docgenResults.forEach(function(docgenResult, index) {
    let exportName = docgenResult.actualName;

    // If the result doesn't have an actualName,
    // it's probably on arrow functions.
    if (!exportName) {
      return;
    }

    const docNode = buildObjectExpression(docgenResult, t);
    const docgenInfo = t.expressionStatement(
      t.assignmentExpression(
        '=',
        t.memberExpression(t.identifier(exportName), t.identifier('__docgenInfo')),
        docNode
      )
    );

    const exportPath = program.get('body').find(node => isExportCurrent(node, exportName, t));

    if (exportPath) {
      exportPath.insertBefore(docgenInfo);
    } else {
      program.pushContainer('body', docgenInfo);
    }

    injectDocgenGlobal(exportName, path, state, t);
  });
}

function injectDocgenGlobal(className, path, state, t) {
  const program = path.scope.getProgramParent().path;

  if (!state.opts.DOC_GEN_COLLECTION_NAME) {
    return;
  }

  const globalName = state.opts.DOC_GEN_COLLECTION_NAME;
  const filePath = relativePath(path.hub.file.opts.filename);
  const globalNode = t.ifStatement(
    t.binaryExpression(
      '!==',
      t.unaryExpression('typeof', t.identifier(globalName)),
      t.stringLiteral('undefined')
    ),
    t.blockStatement([
      t.expressionStatement(
        t.assignmentExpression(
          '=',
          t.memberExpression(t.identifier(globalName), t.stringLiteral(filePath), true),
          t.objectExpression([
            t.objectProperty(t.identifier('name'), t.stringLiteral(className)),
            t.objectProperty(
              t.identifier('docgenInfo'),
              t.memberExpression(t.identifier(className), t.identifier('__docgenInfo'))
            ),
            t.objectProperty(t.identifier('path'), t.stringLiteral(filePath)),
          ])
        )
      ),
    ])
  );
  program.pushContainer('body', globalNode);
}

function buildObjectExpression(obj, t) {
  if (_.isPlainObject(obj)) {
    const children = [];
    for (let key in obj) {
      if (key === 'actualName') continue;
      if (!obj.hasOwnProperty(key) || _.isUndefined(obj[key])) continue;
      children.push(t.objectProperty(t.stringLiteral(key), buildObjectExpression(obj[key], t)));
    }
    return t.objectExpression(children);
  } else if (_.isString(obj)) {
    return t.stringLiteral(obj);
  } else if (_.isBoolean(obj)) {
    return t.booleanLiteral(obj);
  } else if (_.isNumber(obj)) {
    return t.numericLiteral(obj);
  } else if (_.isArray(obj)) {
    const children = [];
    obj.forEach(function(val) {
      children.push(buildObjectExpression(val, t));
    });
    return t.ArrayExpression(children);
  } else if (_.isNull(obj)) {
    return t.nullLiteral();
  }
}

function getComponentFromHoC(path) {
  if (path.isCallExpression()) {
    return getComponentFromHoC(path.get('arguments.0'));
  }
  return path.isIdentifier() ? path.node.name : null;
}

function isExportCurrent(path, exportName, t) {
  if (t.isExportDefaultDeclaration(path)) {
    const decl = path.get('declaration');

    const identifier = decl.isIdentifier() // export default MyComp
      ? decl.node.name
      : getComponentFromHoC(decl); // export default withHoC(MyComp)

    if (identifier === exportName) {
      return true;
    }
  }

  if (t.isExportNamedDeclaration(path)) {
    return path.get('specifiers').find(sp => sp.node.exported.name === exportName);
  }

  return false;
}
