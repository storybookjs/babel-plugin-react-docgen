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
  "plugins": ["react-docgen"]
}
```

### Via CLI

```sh
$ babel --plugins react-docgen script.js
```

### Via Node API

```javascript
require("babel-core").transform("code", {
  plugins: ["react-docgen"]
});
```

## Guide

* React class information is avalable via `<ClassName>.__docgenInfo` as a JSON parsabel string.
* This plugin uses `react-docgen` under the hood, so every [limitation](https://github.com/reactjs/react-docgen#guidelines-for-default-resolvers-and-handlers) it has applies.
* Only works classes extended from `React.Component` with a `render()` method. `React.createClass` is not supported yet.
