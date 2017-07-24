import React from 'react';
import ReactFreeCarousel from '../../Component';
import css from './App.css';
import Highlight from 'react-highlight.js';

const Panel = ({title, code, children}) =>
  <div className="panel panel-default">
    <div className="panel-heading">
      <h3 className="panel-title" role="presentation">
        { title }
      </h3>
    </div>
    <div className="panel-body">
      <h6>Output:</h6>
      {children}
      <h6>Code:</h6>
      <Highlight language={'html'}>
        {code}
      </Highlight>
    </div>
  </div>
;

const App = () =>
  <div className={css.app}>
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/latest/css/bootstrap.min.css" />
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/bootswatch/3.3.7/flatly/bootstrap.min.css" />
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/9.9.0/styles/atom-one-dark.min.css" />

    <h1>React Free Carousel</h1>
    <p>Carousel component for free flex-box layout built with React.</p>
    <p><a href="https://github.com/pvoznyuk/react-free-carousel">
      https://github.com/pvoznyuk/react-free-carousel</a>
    </p>

    <h2>Examples:</h2>

    <Panel
      title="Autoplay, no pagination"
      code={`
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
  </ReactFreeCarousel>`}>
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
    </Panel>

    <Panel
      title="No autoplay, custom size"
      code={`
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
  </ReactFreeCarousel>`}>
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
    </Panel>

    <Panel
      title="Single page"
      code={`
  <ReactFreeCarousel>
    <div className={css.tileBig}>1</div>
  </ReactFreeCarousel>`}>
      <div className={css.carousel}>
        <ReactFreeCarousel>
          <div className={css.tileBig}>1</div>
        </ReactFreeCarousel>
      </div>
    </Panel>

    <Panel
      title="Fullwidth and custom classes"
      code={`
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
  </ReactFreeCarousel>`}>
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
    </Panel>

    <Panel
      title="One slide pre page mode"
      code={`
  <ReactFreeCarousel
    arrowNextClass={css.arrowNext}
    arrowPrevClass={css.arrowPrev}
    arrows={true}>
    <div className={css.tileFullwidth}>1</div>
    <div className={css.tileFullwidth}>2</div>
    <div className={css.tileFullwidth}>3</div>
  </ReactFreeCarousel>`}>
      <div className={css.carousel2}>
        <ReactFreeCarousel
          arrowNextClass={css.arrowNext}
          arrowPrevClass={css.arrowPrev}
          arrows={true}>
          <div className={css.tileFullwidth}>1</div>
          <div className={css.tileFullwidth}>2</div>
          <div className={css.tileFullwidth}>3</div>
        </ReactFreeCarousel>
      </div>
    </Panel>


    <Panel
      title="Zoomed carousel"
      code={``}>
      <div className={css.carousel2} style={{transform: 'scale(0.65)', transformOrigin: '0px 0px 0px'}}>
        <ReactFreeCarousel>
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
    </Panel>

  </div>

export default App;
