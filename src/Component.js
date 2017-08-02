import React from 'react';
import PropTypes from 'prop-types';
import debounce from 'lodash.debounce';
import capitalize from 'lodash.capitalize';

import styles from './example/defaultStyles.css';

const RENDER_DEBOUNCING_TIMEOUT = 600;
const toArray = item => item instanceof Array ? item : [item];

const prepareParam = (param, basis, decrement = 0) => {
  if (typeof param === 'string') {
    if (param.includes('%') && basis) {
      return `${Math.floor(parseInt(param, 10) / 100 * basis) - decrement}px`;
    } else if (!basis && decrement !== 0) {
      return `calc(${param} - ${decrement}px)`;
    }
    return param;
  }

  if (typeof param === 'number') {
    return `${param - decrement}px`;
  }

  return '100%';
};

export default class ReactFreeCarousel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      page: this.props.page || 0,
      pages: 0
    };
    this.gotoPage = this.gotoPage.bind(this);
    this.reRender = this.reRender.bind(this);
  }

  componentDidMount() {
    this.debouncingRender = debounce(this.reRender, RENDER_DEBOUNCING_TIMEOUT);

    setTimeout(() => {
      const totalPages = this.calculateTotalPages();

      this.setState({pages: totalPages});
      this.playCarousel();
      if (this.props.slide > 0) {
        this.gotoTile(this.props.slide);
      } else if (this.props.page > 0) {
        this.gotoPage(this.props.page);
      }
      window.addEventListener('resize', this.debouncingRender);
      window.addEventListener('orientationchange', this.debouncingRender);
    }, 100);
  }

  componentWillReceiveProps(nextProps) {
    if (toArray(nextProps.children).length !== toArray(this.props.children).length) {
      setTimeout(() => {
        this.reRender(false);
      }, 200);
    } else if (nextProps.autoplay !== this.props.autoplay) {
      setTimeout(() => {
        this.playCarousel();
      }, 210);
    }
  }

  componentWillUnmount() {
    this.stopCarousel();
    window.removeEventListener('resize', this.debouncingRender);
    window.removeEventListener('orientationchange', this.debouncingRender);
  }

  reRender(scrollToStart = true) {
    this.stopCarousel();

    const totalPages = this.calculateTotalPages();
    let page = scrollToStart && this.state.pages !== totalPages ? 0 : this.state.page;

    if (page > totalPages) {
      page = totalPages;
    }

    if (page === 0 && this.container) {
      this.container.style.transition = 'none';
      this.container.style.marginLeft = '0px';
      this.container.style.transition = `margin-left ${this.props.transitionSpeed}ms`;
    }

    setTimeout(() => {
      this.setState({
        page,
        pages: totalPages
      }, () => {
        this.gotoPage(page);
        this.playCarousel();
      });
    }, this.props.transitionSpeed + 50);
  }

  stopCarousel() {
    if (this.slidingInterval) {
      clearInterval(this.slidingInterval);
    }
  }

  playCarousel() {
    this.stopCarousel();
    if (this.state.pages > 0 && this.props.autoplay && this.props.interval) {
      this.slidingInterval = setInterval(() => {
        const page = this.state.page === this.state.pages ? 0 : this.state.page + 1;

        this.gotoPage(page);
      }, this.props.interval);
    }
  }

  gotoPage(page) {
    const newPage = page > this.state.pages ? 0 : page;

    this.stopCarousel();
    this.setState({page: newPage}, () => {
      this.playCarousel();
    });
    this.container.style.marginLeft = `-${this.pageToOffset(newPage)}px`;
  }

  gotoTile(index) {
    const tile = this.container.children[index];

    if (tile) {
      this.gotoPage(Number(tile.getAttribute('data-page')));
    }
  }

  pageToOffset(page) {
    const pageElement = this.container.querySelector(`[data-page="${page}"]`);

    if (pageElement && pageElement.getAttribute('data-first') === 'true') {
      return parseInt(pageElement.getAttribute('data-offset'), 10);
    }
    return 0;
  }

  renderTile(tile) {
    return tile;
  }

  calculateTotalPages() {
    const wrapperWidth = this.wrapper ? this.wrapper.clientWidth : 0;
    const offsetPage = new Map();
    const pageOffset = new Map();
    let pages = 0;

    if (this.container.children.length) {
      Array.from(this.container.children).forEach((tile, index) => {
        const tileLeft = tile.offsetLeft -
          this.container.offsetLeft -
          parseInt(window.getComputedStyle(tile).marginLeft, 10);
        const tileWidth = tile.clientWidth;

        if (offsetPage.has(tileLeft)) {
          tile.setAttribute('data-first', 'false');
          tile.setAttribute('data-page', `${offsetPage.get(tileLeft)}`);
          tile.setAttribute('data-offset', `${tileLeft}`);
        } else {
          const currentPageOffset = pageOffset.get(pages) || 0;

          // check if the tile fully fit in the current page
          if (tileLeft >= currentPageOffset &&
            tileLeft + tileWidth <= currentPageOffset + wrapperWidth) {
            if (index === 0) {
              tile.setAttribute('data-first', 'true');
            }
          } else {
            pages = pages + 1;
            tile.setAttribute('data-first', 'true');
          }
          tile.setAttribute('data-page', `${pages}`);
          tile.setAttribute('data-offset', `${tileLeft}`);
          offsetPage.set(tileLeft, pages);
          if (!pageOffset.has(pages)) {
            pageOffset.set(pages, tileLeft);
          }
        }
      });
    }

    return pages;
  }

  renderPagination() {
    return (
      <div
        className={this.props.paginationClass || styles.defaultPaginationClass}
        ref={node => {
          this.pagination = node;
        }}
        role="navigation">
        {
          [...Array(this.state.pages + 1)].map((e, i) =>
            <button
              aria-label={`Goto Page ${i + 1}`}
              className={`
                ${this.props.paginationDotClass}
                ${i === this.state.page ? this.props.paginationDotActiveClass : ''}`}
              data-active={i === this.state.page ? 'true' : 'false'}
              key={i}
              onClick={() => {
                this.gotoPage(i);
              }}>
              {i + 1}
            </button>
          )
        }
      </div>
    );
  }

  renderArrows(kind) {
    const calculateNextPage = direction => {
      if (direction === 'next' && this.state.page < this.state.pages) {
        return this.state.page + 1;
      }
      if (direction === 'prev' && this.state.page > 0) {
        return this.state.page - 1;
      }
      return null;
    };

    const nextPage = calculateNextPage(kind);
    const classPart = `${capitalize(kind)}Class`;

    return (
      <button
        className={this.props[`arrow${classPart}`] || styles[`defaultArrow${classPart}`]}
        disabled={nextPage === null}
        onClick={() => {
          this.gotoPage(nextPage);
        }}
        role="button"
        type="button" />
    );
  }

  render() {
    const {children, className, width, height, transitionSpeed, showPagination,
           minPagesToShowPagination, arrows, tileMargin} = this.props;

    const childrenToRender = React.Children.map(Array.from(toArray(children)), child => {
      if (child.type === ReactFreeCarouselTile) {
        return React.cloneElement(child, {
          parent: this,
          tileMargin,
          parentWidth: this.wrapper && this.wrapper.clientWidth + tileMargin,
          updateParent: this.reRender
        });
      }
      return child;
    });

    const wrapperStyling = {
      position: 'relative',
      width: prepareParam(width, null),
      height: prepareParam(height, null)
    };

    const viewportStyling = {
      position: 'relative',
      overflow: 'hidden',
      width: `calc(100% + ${prepareParam(tileMargin)})`,
      height: `calc(100% + ${prepareParam(tileMargin)})`
    };

    const containerStyling = {
      overflow: 'hidden',
      position: 'static',
      alignContent: 'flex-start',
      display: 'flex',
      flexDirection: 'column',
      flexWrap: 'wrap',
      height: '100%',
      transform: `translate(-${prepareParam(tileMargin)}, -${prepareParam(tileMargin)})`,
      transition: `margin-left ${transitionSpeed}ms`
    };

    return (
      <div
        className={className}
        ref={node => {
          this.wrapper = node;
        }}
        style={wrapperStyling} >

        <div style={viewportStyling}>
          <div
            ref={node => {
              this.container = node;
            }}
            style={containerStyling} >
            { childrenToRender &&
              childrenToRender.map(this.renderTile)
            }
          </div>
        </div>

        {arrows &&
          this.renderArrows('prev')
        }

        {showPagination && this.state.pages + 1 >= minPagesToShowPagination &&
          this.renderPagination()
        }

        {arrows &&
          this.renderArrows('next')
        }
      </div>
    );
  }
}

ReactFreeCarousel.propTypes = {
  children: React.PropTypes.oneOfType([
    React.PropTypes.arrayOf(React.PropTypes.node),
    React.PropTypes.node
  ]),
  className: PropTypes.string,
  height: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number
  ]),
  width: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number
  ]),
  tileMargin: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number
  ]),
  interval: PropTypes.number,
  autoplay: PropTypes.bool,
  showPagination: PropTypes.bool,
  transitionSpeed: PropTypes.number,
  page: PropTypes.number,
  slide: PropTypes.number,
  minPagesToShowPagination: PropTypes.number,
  paginationClass: PropTypes.string,
  paginationDotClass: PropTypes.string,
  paginationDotActiveClass: PropTypes.string,
  arrows: PropTypes.bool,
  arrowPrevClass: PropTypes.string,
  arrowNextClass: PropTypes.string
};

ReactFreeCarousel.defaultProps = {
  className: null,
  interval: 5000,
  transitionSpeed: 500,
  height: '100%',
  width: '100%',
  autoplay: true,
  showPagination: true,
  page: 0,
  tileMargin: 0,
  slide: null,
  minPagesToShowPagination: 2,
  paginationClass: '',
  paginationDotClass: '',
  paginationDotActiveClass: '',
  arrows: false,
  arrowPrevClass: '',
  arrowNextClass: ''
};


/* Tile*/

export class ReactFreeCarouselTile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      parentWidth: null
    };
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.parentWidth !== this.props.parentWidth) {
      setTimeout(() => {
        this.props.updateParent();
      }, 0);
    }
  }

  render() {
    const {parentWidth, height, width, tileMargin} = this.props;
    const style = {
      height: prepareParam(height, null, tileMargin),
      width: prepareParam(width, parentWidth, tileMargin),
      marginTop: `${prepareParam(tileMargin)}`,
      marginLeft: `${prepareParam(tileMargin)}`
    };

    return (
      <div
        className={this.props.className || styles.defaultTile}
        ref={node => {
          this.tile = node;
        }}
        style={style}>
        { this.props.children }
      </div>
    );
  }
}

ReactFreeCarouselTile.propTypes = {
  children: React.PropTypes.oneOfType([
    React.PropTypes.arrayOf(React.PropTypes.node),
    React.PropTypes.node
  ]),
  updateParent: PropTypes.func.isRequired,
  parentWidth: PropTypes.number,
  className: PropTypes.string,
  tileMargin: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number
  ]),
  height: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number
  ]),
  width: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number
  ])
};

ReactFreeCarouselTile.defaultProps = {
  className: null,
  tileMargin: 0,
  width: '100%',
  height: '100%'
};
