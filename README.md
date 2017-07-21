# react-free-carousel [![npm](https://img.shields.io/npm/v/react-free-carousel.svg?style=flat-square)](https://www.npmjs.com/package/react-free-carousel)

[![Gitter](https://img.shields.io/gitter/room/pvoznyuk/help.svg?style=flat-square)](https://gitter.im/pvoznyuk/help)

[![CircleCI](https://img.shields.io/circleci/project/pvoznyuk/react-free-carousel.svg?style=flat-square&label=nix-build)](https://circleci.com/gh/pvoznyuk/react-free-carousel)
[![AppVeyor](https://img.shields.io/appveyor/ci/pvoznyuk/react-free-carousel.svg?style=flat-square&label=win-build)](https://ci.appveyor.com/project/pvoznyuk/react-free-carousel)
[![Coverage](https://img.shields.io/codecov/c/github/pvoznyuk/react-free-carousel.svg?style=flat-square)](https://codecov.io/github/pvoznyuk/react-free-carousel?branch=master)
[![Dependencies](https://img.shields.io/david/pvoznyuk/react-free-carousel.svg?style=flat-square)](https://david-dm.org/pvoznyuk/react-free-carousel)
[![Dev Dependencies](https://img.shields.io/david/dev/pvoznyuk/react-free-carousel.svg?style=flat-square)](https://david-dm.org/pvoznyuk/react-free-carousel#info=devDependencies)

Carousel component for free flex-box tile layout built with React.

## Installation

### NPM
```sh
npm install --save react react-free-carousel
```

Don't forget to manually install peer dependencies (`react`) if you use npm@3.


### Bower:
```sh
bower install --save https://unpkg.com/react-free-carousel/bower.zip
```


### 1998 Script Tag:
```html
<script src="https://unpkg.com/react/dist/react.js"></script>
<script src="https://unpkg.com/react-free-carousel/build/react-free-carousel.js"></script>
(Module exposed as `ReactFreeCarousel`)
```


## Demo

[http://pvoznyuk.github.io/react-free-carousel](http://pvoznyuk.github.io/react-free-carousel)

## Codepen demo

```js
// TODO
```

## Usage
```js
import React from 'react';
import ReactDOM from 'react-dom';
import {ReactFreeCarousel} from 'react-free-carousel';

const App = () => (
  <div>
    <ReactFreeCarousel />
  </div>
);

const appRoot = document.createElement('div');
document.body.appendChild(appRoot);
ReactDOM.render(<App />, appRoot);
```

## Options

```js
// TODO
```

## Development and testing

Currently is being developed and tested with the latest stable `Node 5` on `OSX` and `Windows`.

To run example covering all `ReactFreeCarousel` features, use `npm start dev`, which will compile `src/example/Example.js`

```bash
git clone git@github.com:pvoznyuk/react-free-carousel.git
cd react-free-carousel
npm install
npm start dev

# then
open http://localhost:8080
```

## Tests

```bash
# to run tests
npm start test

# to generate test coverage (./reports/coverage)
npm start test.cov

# to run end-to-end tests
npm start test.e2e
```

## License

MIT
