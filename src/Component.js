import React from 'react';
import PropTypes from 'prop-types';
import $ from 'jquery';
import debounce from 'lodash.debounce';
import capitalize from 'lodash.capitalize';

const RESIZE = 'resize orientationchange';
const toArray = item => item instanceof Array ? item : [item];

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
    setTimeout(() => {
      const totalPages = this.calculateTotalPages();

      this.setState({pages: totalPages});
      this.playCarousel();
      if (this.props.slide > 0) {
        this.gotoTile(this.props.slide);
      } else if (this.props.page > 0) {
        this.gotoPage(this.props.page);
      }
      $(window).on(RESIZE, debounce(this.reRender, 500));
    }, 100);
  }

  componentWillReceiveProps(nextProps) {
    if (toArray(nextProps.children).length !== toArray(this.props.children).length) {
      setTimeout(() => {
        this.reRender(false);
      }, 200);
    }

    this.playCarousel();
  }

  componentWillUnmount() {
    this.stopCarousel();
    $(window).off(RESIZE, this.reRender);
  }

  reRender(scrollToStart = true) {
    const totalPages = this.calculateTotalPages();
    let page = scrollToStart && this.state.pages !== totalPages ? 0 : this.state.page;

    if (page > totalPages) {
      page = totalPages;
    }

    this.stopCarousel();

    if (page === 0) {
      $(this.container).css('margin-left', '0px');
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

  playCarousel() {
    this.stopCarousel();
    if (this.state.pages > 0 && this.props.autoplay && this.props.interval) {
      this.slidingInterval = setInterval(() => {
        const page = this.state.page === this.state.pages ? 0 : this.state.page + 1;

        this.gotoPage(page);
      }, this.props.interval);
    }
  }

  stopCarousel() {
    if (this.slidingInterval) {
      clearInterval(this.slidingInterval);
    }
  }

  gotoPage(page) {
    const newPage = page > this.state.pages ? 0 : page;

    this.stopCarousel();
    this.setState({page: newPage}, () => {
      this.playCarousel();
    });
    $(this.container).css('margin-left', `-${this.pageToOffset(newPage)}px`);
  }

  gotoTile(index) {
    const $container = $(this.container);
    const $tile = $($container.children().get(index));

    if ($tile.length) {
      this.gotoPage(Number($tile.attr('data-page')));
    }
  }

  pageToOffset(page) {
    const $container = $(this.container);
    const $target = $container.children(`[data-page=${page}][data-first=true]`);

    if ($target.length) {
      return parseInt($($target.get(0)).attr('data-offset'), 10);
    }
    return 0;
  }

  renderTile(tile) {
    return tile;
  }

  calculateTotalPages() {
    const $container = $(this.container);
    const $children = $container.children();
    const wrapperWidth = this.wrapper.clientWidth;
    const offsetPage = new Map();
    const pageOffset = new Map();
    let pages = 0;

    $children.each((index, tile) => {
      const $tile = $(tile);
      const tileLeft = tile.offsetLeft - parseInt(window.getComputedStyle(tile).marginLeft, 10);
      const tileWidth = tile.clientWidth;

      if (offsetPage.has(tileLeft)) {
        $tile.attr('data-first', 'false');
        $tile.attr('data-page', offsetPage.get(tileLeft));
        $tile.attr('data-offset', tileLeft);
      } else {
        const currentPageOffset = pageOffset.get(pages) || 0;

        // check if the tile fully fit in the current page
        if (tileLeft >= currentPageOffset &&
            tileLeft + tileWidth <= currentPageOffset + wrapperWidth) {
          if (index === 0) {
            $tile.attr('data-first', 'true');
          }
        } else {
          pages = pages + 1;
          $tile.attr('data-first', 'true');
        }
        $tile.attr('data-page', pages);
        $tile.attr('data-offset', tileLeft);
        offsetPage.set(tileLeft, pages);
        if (!pageOffset.has(pages)) {
          pageOffset.set(pages, tileLeft);
        }
      }
    });

    return pages;
  }

  prepareParam(param) {
    if (typeof param === 'string') {
      return param;
    }

    if (typeof param === 'number') {
      return `${param}px`;
    }

    return '100%';
  }

  renderPagination() {
    return (
      <div
        className={this.props.paginationClass}
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

    return (
      <button
        className={this.props[`arrow${capitalize(kind)}Class`]}
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
           minPagesToShowPagination, arrows} = this.props;

    const childrenToRender = Array.isArray(children) ? children : [children];

    const wrapperStyling = {
      position: 'relative',
      width: this.prepareParam(width),
      height: this.prepareParam(height)
    };

    const viewportStyling = {
      position: 'relative',
      width: '100%',
      overflow: 'hidden',
      height: '100%'
    };

    const containerStyling = {
      overflow: 'hidden',
      position: 'relative',
      alignContent: 'flex-start',
      display: 'flex',
      flexDirection: 'column',
      flexWrap: 'wrap',
      height: '100%',
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
  slide: null,
  minPagesToShowPagination: 2,
  paginationClass: '',
  paginationDotClass: '',
  paginationDotActiveClass: '',
  arrows: false,
  arrowPrevClass: '',
  arrowNextClass: ''
};
