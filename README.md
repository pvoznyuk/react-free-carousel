# react-free-carousel [![npm](https://img.shields.io/npm/v/react-free-carousel.svg?style=flat-square)](https://www.npmjs.com/package/react-free-carousel)

[![Dependencies](https://img.shields.io/david/pvoznyuk/react-free-carousel.svg?style=flat-square)](https://david-dm.org/pvoznyuk/react-free-carousel)
[![Dev Dependencies](https://img.shields.io/david/dev/pvoznyuk/react-free-carousel.svg?style=flat-square)](https://david-dm.org/pvoznyuk/react-free-carousel#info=devDependencies)

Carousel component for free flex-box tile layout built with React.

## Installation

### NPM
```sh
npm install --save react react-free-carousel
```

Don't forget to manually install peer dependencies (`react`) if you use npm@3.

## Demo

[http://pvoznyuk.github.io/react-free-carousel](http://pvoznyuk.github.io/react-free-carousel)


## Usage
```js
import React from 'react';
import ReactDOM from 'react-dom';
import ReactFreeCarousel from 'react-free-carousel';

const App = () => (
  <div className={css.carousel}>
    <ReactFreeCarousel>
      <div className={css.tileBig}>1</div>
      <div className={css.tileBigTripple}>2</div>
      <div className={css.tileMedium}>3</div>
      <div className={css.tileMedium}>4</div>
      <div className={css.tileBigTripple}>5</div>
      <div className={css.tileBig}>6</div>
      <div className={css.tileBig}>7</div>
      <div className={css.tileSmall}>8</div>
      <div className={css.tileSmall}>9</div>
      <div className={css.tileBigDouble}>10</div>
    </ReactFreeCarousel>
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
