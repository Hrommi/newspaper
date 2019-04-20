/* global document */

const ready = require('../../js/utils/documentReady.js');

ready(function(){
  jQuery('.owl-carousel').owlCarousel({
    items: 1,
    nav: false,
    dots: true,
    loop:true,
    autoplay:true,
    autoplayTimeout:7000,
    autoplayHoverPause:true
  });
});
