/* global module */

let config = {
  'notGetBlocks': [],
  'ignoredBlocks': [
    'no-js',
  ],
  'alwaysAddBlocks': [
    'sprite-svg',
    // 'sprite-png',
    // 'object-fit-polyfill',
  ],
  'addStyleBefore': [
    'src/scss/variables.scss',
    'src/scss/mixins.scss',
    '../../node_modules/owl.carousel2/dist/assets/owl.carousel.min.css',
    '../../node_modules/malihu-custom-scrollbar-plugin/jquery.mCustomScrollbar.css',
    // 'somePackage/dist/somePackage.css', // для 'node_modules/somePackage/dist/somePackage.css',
  ],
  'addStyleAfter': [
    // 'src/scss/print.scss',
  ],
  'addJsBefore': [
    '../../node_modules/jquery/src/jquery.js',
    '../../node_modules/owl.carousel2/dist/owl.carousel.min.js',
    // '../../node_modules/malihu-custom-scrollbar-plugin/jquery.mCustomScrollbar.concat.min.js'
  ],
  'addJsAfter': [
    './script.js',
  ],
  'addAssets': {
    'src/img/*.{png,svg,jpg,jpeg}': 'img/',
    // 'src/favicon/*.{png,ico,svg,xml,webmanifest}': 'img/favicon',
    // 'node_modules/somePackage/images/*.{png,svg,jpg,jpeg}': 'img/',
  },
  'dir': {
    'src': 'src/',
    'build': 'build/',
    'blocks': 'src/blocks/'
  }
};

module.exports = config;
