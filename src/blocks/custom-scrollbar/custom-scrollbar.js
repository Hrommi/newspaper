/* global document */

const ready = require('../../js/utils/documentReady.js');
var $ = require('jquery');
require('malihu-custom-scrollbar-plugin');
var hasScroll;
var needScroll;
var screenWidth = 992;

function createScroll () {
  hasScroll = true;
  $('.custom-scrollbar').mCustomScrollbar({
    axis: 'x'
  });
}

function destroyScroll () {
  hasScroll = false;
  $('.custom-scrollbar').mCustomScrollbar('destroy');
}

ready(function(){
  if (window.innerWidth < screenWidth) {
    createScroll();
    hasScroll = true;
    needScroll = true;
  }
});

window.onresize = function() {
  if (window.innerWidth < screenWidth) {
    needScroll = true;
  } else {
    needScroll = false;
  }
  if (needScroll !== hasScroll) {
    if (needScroll) {
      createScroll();
    } else {
      destroyScroll();
    }
  }
}
