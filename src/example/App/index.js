import React from 'react';
import ReactFreeCarousel from '../../Component';
import css from './App.css';

const App = () =>
  <div className={css.app}>
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/latest/css/bootstrap.min.css" />
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/bootswatch/3.3.7/flatly/bootstrap.min.css" />
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/9.9.0/styles/atom-one-dark.min.css" />

    <h1>react-free-carousel</h1>

    <h2>No pagination</h2>
    <div className={css.carousel}>
      <ReactFreeCarousel
        showPagination={false}>
        <div className={css.tileBig}>1</div>
        <div className={css.tileMedium}>2</div>
        <div className={css.tileMedium}>3</div>
        <div className={css.tileBigDouble}>4</div>
        <div className={css.tileMedium}>5</div>
        <div className={css.tileSmall}>6</div>
        <div className={css.tileBig}>7</div>
        <div className={css.tileSmall}>8</div>
        <div className={css.tileSmall}>9</div>
        <div className={css.tileSmall}>10</div>
        <div className={css.tileBig}>11</div>
        <div className={css.tileBigDouble}>12</div>
        <div className={css.tileSmall}>13</div>
      </ReactFreeCarousel>
    </div>

    <h2>No autoplay</h2>
    <div className={css.carousel2}>
      <ReactFreeCarousel
        autoplay={false}
        height={200}
        width={470}>
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

    <h2>One page</h2>
    <div className={css.carousel}>
      <ReactFreeCarousel>
        <div className={css.tileBig}>1</div>
      </ReactFreeCarousel>
    </div>

    <h2>Fullwidth and custom classes</h2>
    <div className={css.carousel3}>
      <ReactFreeCarousel
        arrowNextClass={css.arrowNext}
        arrowPrevClass={css.arrowPrev}
        arrows={true}
        paginationClass={css.pagination}
        paginationDotActiveClass={css.active}
        paginationDotClass={css.dot}>
        <div className={css.tileBig}>1</div>
        <div className={css.tileMedium}>2</div>
        <div className={css.tileMedium}>3</div>
        <div className={css.tileBigDouble}>4</div>
        <div className={css.tileMedium}>5</div>
        <div className={css.tileSmall}>6</div>
        <div className={css.tileBig}>7</div>
        <div className={css.tileSmall}>8</div>
        <div className={css.tileSmall}>9</div>
        <div className={css.tileSmall}>10</div>
        <div className={css.tileBig}>11</div>
        <div className={css.tileBigDouble}>12</div>
        <div className={css.tileSmall}>13</div>
      </ReactFreeCarousel>
    </div>

  </div>;

export default App;
