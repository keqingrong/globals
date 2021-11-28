# @keqingrong/globals

[![npm version](https://img.shields.io/npm/v/@keqingrong/globals.svg)](https://www.npmjs.com/package/@keqingrong/globals)

Global identifiers for rollup's [`output.globals`](https://rollupjs.org/guide/en/#outputglobals) and webpack's [`externals`](https://webpack.js.org/configuration/externals/)

## Installation

```sh
# npm
npm install -D @keqingrong/globals

# yarn
yarn add -D @keqingrong/globals
```

## Usage

### rollup

```js
// rollup.config.js
import globals from '@keqingrong/globals';
import pkg from './package.json';

export default {
  // ...
  external: Object.keys(pkg.dependencies),
  output: {
    globals,
  },
};
```

### webpack

```js
// webpack.config.js
const globals = require('@keqingrong/globals');
const pkg = require('./package.json');

module.exports = {
  // ...
  externals: globals,
};
```

or

```js
// webpack.config.js
const globals = require('@keqingrong/globals');
const pkg = require('./package.json');

const externals = {};
Object.keys(pkg.dependencies).forEach(name => {
  if (globals[name]) {
    externals[name] = {
      commonjs: name,
      amd: name,
      root: globals[name],
    };
  }
});

module.exports = {
  // ...
  externals,
};
```

## License

MIT © Qingrong Ke
