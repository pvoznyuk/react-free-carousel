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

<img src="https://github.com/pvoznyuk/react-free-carousel/blob/master/src/example/example.gif?raw=true" alt="demo" />


## Usage

### Carousel with custom tiles
```js
import React from 'react';
import ReactDOM from 'react-dom';
import ReactFreeCarousel from 'react-free-carousel';

const App = () => (
  <div>
    <ReactFreeCarousel width={'600px'} height={'400px'}>
      <div className={css.smallTileClass}>1</div>
      <div className={css.smallTileClass}>2</div>
      <div className={css.mediumTileClass}>3</div>
      <div className={css.mediumTileClass}>4</div>
      <div className={css.bigTileClass}>5</div>
      <div className={css.bigTileClass}>6</div>
    </ReactFreeCarousel>
  </div>
);

const appRoot = document.createElement('div');
document.body.appendChild(appRoot);
ReactDOM.render(<App />, appRoot);
```

### Carousel with ReactFreeCarouselTile
```js
import React from 'react';
import ReactDOM from 'react-dom';
import ReactFreeCarousel, { ReactFreeCarouselTile } from 'react-free-carousel';

const App = () => (
  <div style={{width: '70vw', height: '30vh'}}>
    <ReactFreeCarousel
      arrows={true}
      autoplay={false}
      tileMargin={10}>
      <ReactFreeCarouselTile width={140} height={'100%'}>Tile 1</ReactFreeCarouselTile>
      <ReactFreeCarouselTile width={280} height={'50%'}>Tile 2</ReactFreeCarouselTile>
      <ReactFreeCarouselTile width={280} height={'50%'}>Tile 3</ReactFreeCarouselTile>
      <ReactFreeCarouselTile width={'50%'} height={'100%'}>Tile 4</ReactFreeCarouselTile>
      <ReactFreeCarouselTile width={'25%'} height={`${100/3}%`}>Tile 5</ReactFreeCarouselTile>
      <ReactFreeCarouselTile width={'25%'} height={`${100/3}%`}>Tile 6</ReactFreeCarouselTile>
      <ReactFreeCarouselTile width={'25%'} height={`${100/3}%`}>Tile 7</ReactFreeCarouselTile>
      <ReactFreeCarouselTile width={'25%'} height="50%">Tile 8</ReactFreeCarouselTile>
      <ReactFreeCarouselTile width={'25%'} height="50%">Tile 9</ReactFreeCarouselTile>
    </ReactFreeCarousel>
  </div>
);

const appRoot = document.createElement('div');
document.body.appendChild(appRoot);
ReactDOM.render(<App />, appRoot);
```

### Properties

#### ReactFreeCarousel

| Propertie                  | Type                | Default Value | Description |
|----------------------------|---------------------|---------------|-------------|
| `className`                | string              | null          | Just className.
| `interval`                 | number              | 5000          | Slide changing interval.
| `transitionSpeed`          | number              | 500           | Slide changing speed.
| `height`                   | string or number    | '100%'        | Carousel height.
| `width`                    | string or number    | '100%'        | Carousel width.
| `tileMargin`               | string or number    | 0             | Margin between `ReactFreeCarouselTile` tiles.
| `autoplay`                 | boolean             | true          | Autostart carousel.
| `page`                     | number              | 0             | Page to show (0-indexed).
| `slide`                    | number              | null          | Slide to scroll to (0-indexed).
| `showPagination`           | boolean             | true          | Show pagination.
| `minPagesToShowPagination` | number              | 2             | Min number of page to show the pagination.
| `paginationClass`          | string              | ''            | Pagination className.
| `paginationDotClass`       | string              | ''            | Pagination dot className.
| `paginationDotActiveClass` | string              | ''            | Pagination active dot className.
| `arrows`                   | boolean             | false         | Show/hide the prev/next arrows.
| `arrowPrevClass`           | string              | ''            | Previous button className.
| `arrowNextClass`           | string              | ''            | Next button className.

#### ReactFreeCarouselTile

| Propertie                  | Type                | Default Value | Description |
|----------------------------|---------------------|---------------|-------------|
| `className`                | string              | null          | Tile custom className.
| `height`                   | string or number    | '100%'        | Tile height.
| `width`                    | string or number    | '100%'        | Tile width.


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
