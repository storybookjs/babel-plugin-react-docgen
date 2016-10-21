# babel-plugin-react-docgen

React Docgen allows us to write propType descriptions, class descriptions and access propType metadata and use it anyway we like.
This babel plugin allow you to access those info automatically right inside your React class.

For an example, let's say you've a React class like this:

```js
/**
  This is an awesome looking button for React
*/
import React from 'react';

class Button extends React.Component {
  render() {
    const { label, onClick } = this.props;
    return (
      <button onClick={onClick}>{ label }</button>
    );
  }
}

Button.propTypes = {
  /**
    Label for the button
  */
  label: React.PropTypes.string,

  /**
    Triggered when clicked on the button
  */
  onClick: React.PropTypes.func,
};
```

You can access all these information right inside your app:

```js
console.log(Button.__docgenInfo);
```
<details>
  <summary>Click to see the output</summary>

  ```js
  {
    description: 'This is an awesome looking button for React',
    props: {
      label: {
        type: {
          name: 'string'
        },
        required: false,
        description: 'Label for the button'
      },
      onClick: {
        type: {
          name: 'func'
        },
        required: false,
        description: 'Triggered when clicked on the button'
      }
    }
  }
  ```
</details>

<br />
This will be pretty useful for documentations and some other React devtools.

## Usage

Install the plugin:

```sh
$ npm install -D babel-plugin-react-docgen
```

Use it inside your `.babelrc`

```json
{
  "plugins": ["react-docgen"]
}
```

## TODO:

* Change DOC_GEN_GLOBAL into something else into DOC_GEN_COLLECTION_NAME
* Add a guide for DOC_GEN_GLOBAL
* Add some notes (like the usage, performance, file size, devtime use)



* React class information is avalable via `<ClassName>.__docgenInfo` as a JSON parsabel string.
* This plugin uses `react-docgen` under the hood, so every [limitation](https://github.com/reactjs/react-docgen#guidelines-for-default-resolvers-and-handlers) it has, applies.
* If you need a global object with all the react component docs, set plugin options like this in `.babelrc` (replace <your global name> with variable name you want)
```
"plugins":[["babel-plugin-react-docgen", {"DOC_GEN_GLOBAL": "<your global name>"}]]
```
* And you should also insert following lines in `.storybook/config.js`
```
window.<your global name> = {};
```
* There is a sample code at (https://github.com/kadira-samples/react-docgen-sample)
