'use strict';

// Babel6 does not hack the default behaviour of ES Modules anymore, so we should export
const ReactFreeCarousel = require('./Component').default;
const ReactFreeCarouselTile = require('./Component').ReactFreeCarouselTile;

module.exports = {ReactFreeCarouselTile};
module.exports.default = ReactFreeCarousel;
