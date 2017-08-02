import React from 'react';
import ReactFreeCarousel, { ReactFreeCarouselTile } from '../../Component';
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
      {code && (
        <h6>Code:</h6>
      )}
      {code && (
        <Highlight language={'html'}>
          {code}
        </Highlight>
      )}
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
        title="Tile components"
        code={`
<div>
  <ReactFreeCarousel
    arrows={true}
    autoplay={false}
    tileMargin={10}>
    <ReactFreeCarouselTile width={140} height={'100%'}>
      <div>140px / 100%</div>
    </ReactFreeCarouselTile>
    <ReactFreeCarouselTile width={280} height={'50%'}>
      <div>280px / 50%</div>
    </ReactFreeCarouselTile>
    <ReactFreeCarouselTile width={280} height={'50%'}>
      <div>280px / 50%</div>
    </ReactFreeCarouselTile>
    <ReactFreeCarouselTile width={'50%'} height={'100%'}>
      <div>50% / 100%</div>
    </ReactFreeCarouselTile>
    <ReactFreeCarouselTile width={'25%'} height={\`\${100/3}%\`}>
      <div>25% / 33.3%</div>
    </ReactFreeCarouselTile>
    <ReactFreeCarouselTile width={'25%'} height={\`\${100/3}%\`}>
      <div>25% / 33.3%</div>
    </ReactFreeCarouselTile>
    <ReactFreeCarouselTile width={'25%'} height={\`\${100/3}%\`}>
      <div>25% / 33.3%</div>
    </ReactFreeCarouselTile>
    <ReactFreeCarouselTile width={'25%'} height="50%">
      <div>25% / 50%</div>
    </ReactFreeCarouselTile>
    <ReactFreeCarouselTile width={'25%'} height="50%">
      <div>25% / 50%</div>
    </ReactFreeCarouselTile>
  </ReactFreeCarousel>
</div>`}>
        <div className={css.carousel4}>
          <ReactFreeCarousel
            arrows={true}
            autoplay={false}
            tileMargin={10}>
            <ReactFreeCarouselTile width={140} height={'100%'}>
              <div className={css.innerTile}>140px / 100%</div>
            </ReactFreeCarouselTile>
            <ReactFreeCarouselTile width={280} height={'50%'}>
              <div className={css.innerTile}>280px / 50%</div>
            </ReactFreeCarouselTile>
            <ReactFreeCarouselTile width={280} height={'50%'}>
              <div className={css.innerTile}>280px / 50%</div>
            </ReactFreeCarouselTile>
            <ReactFreeCarouselTile width={'50%'} height={'100%'}>
              <div className={css.innerTile}>50% / 100%</div>
            </ReactFreeCarouselTile>
            <ReactFreeCarouselTile width={'25%'} height={`${100/3}%`}>
              <div className={css.innerTile}>25% / 33.3%</div>
            </ReactFreeCarouselTile>
            <ReactFreeCarouselTile width={'25%'} height={`${100/3}%`}>
              <div className={css.innerTile}>25% / 33.3%</div>
            </ReactFreeCarouselTile>
            <ReactFreeCarouselTile width={'25%'} height={`${100/3}%`}>
              <div className={css.innerTile}>25% / 33.3%</div>
            </ReactFreeCarouselTile>
            <ReactFreeCarouselTile width={'25%'} height="50%">
              <div className={css.innerTile}>25% / 50%</div>
            </ReactFreeCarouselTile>
            <ReactFreeCarouselTile width={'25%'} height="50%">
              <div className={css.innerTile}>25% / 50%</div>
            </ReactFreeCarouselTile>
          </ReactFreeCarousel>
        </div>
      </Panel>

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
  width={'50vw'}
  height={'30vh'}
  arrows={true}>
  <ReactFreeCarouselTile width={'100%'} height={'100%'}>
    <div className={css.innerTile}>Slide 1</div>
  </ReactFreeCarouselTile>
  <ReactFreeCarouselTile width={'100%'} height={'100%'}>
    <div className={css.innerTile}>Slide 2</div>
  </ReactFreeCarouselTile>
  <ReactFreeCarouselTile width={'100%'} height={'100%'}>
    <div className={css.innerTile}>Slide 3</div>
  </ReactFreeCarouselTile>
</ReactFreeCarousel>`}>
      <ReactFreeCarousel
        width={'50vw'}
        height={'30vh'}
        arrows={true}>
        <ReactFreeCarouselTile width={'100%'} height={'100%'}>
          <div className={css.innerTile}>Slide 1</div>
        </ReactFreeCarouselTile>
        <ReactFreeCarouselTile width={'100%'} height={'100%'}>
          <div className={css.innerTile}>Slide 2</div>
        </ReactFreeCarouselTile>
        <ReactFreeCarouselTile width={'100%'} height={'100%'}>
          <div className={css.innerTile}>Slide 3</div>
        </ReactFreeCarouselTile>
      </ReactFreeCarousel>
    </Panel>

    <Panel
      title="Zoomed carousel"
      code={``}>
      <div className={css.carousel2} style={{transform: 'scale(0.67)', transformOrigin: '0px 0px 0px'}}>
        <ReactFreeCarousel slide={10} >
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
