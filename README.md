# babel-plugin-react-docgen

Add propType doc to react classes

## Installation

```sh
$ npm install babel-plugin-react-docgen
```

## Usage

### Via `.babelrc` (Recommended)

**.babelrc**

```json
{
  "plugins": ["babel-plugin-react-docgen"]
}
```

### Via CLI

```sh
$ babel --plugins babel-plugin-react-docgen script.js
```

### Via Node API

```javascript
require("babel-core").transform("code", {
  plugins: ["babel-plugin-react-docgen"]
});
```

## Guide

* React class information is avalable via `<ClassName>.__docgenInfo` as a JSON parsabel string.
* This plugin uses `react-docgen` under the hood, so every [limitation](https://github.com/reactjs/react-docgen#guidelines-for-default-resolvers-and-handlers) it has, applies.
* If you need a global object with all the react component docs, set plugin options like this in `.babelrc` (replace <your global name> with variable name you want)
```
"plugins":[["babel-plugin-react-docgen", {"DOC_GEN_GLOBAL": "<your global name>"}]]
```
