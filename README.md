# babel-plugin-react-doc-loader

Add propType doc to react classes

## Example

**In**

```js
// input code
```

**Out**

```js
"use strict";

// output code
```

## Installation

```sh
$ npm install babel-plugin-react-doc-loader
```

## Usage

### Via `.babelrc` (Recommended)

**.babelrc**

```json
{
  "plugins": ["react-doc-loader"]
}
```

### Via CLI

```sh
$ babel --plugins react-doc-loader script.js
```

### Via Node API

```javascript
require("babel-core").transform("code", {
  plugins: ["react-doc-loader"]
});
```
