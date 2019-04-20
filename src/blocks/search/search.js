/* global document */

const ready = require('../../js/utils/documentReady.js');

ready(function(){
  var searchList = document.querySelectorAll( '.search' );
  var windowWidth = document.documentElement.clientWidth;
  var gutterWidth = 40;
  Array.prototype.forEach.call( searchList, function( search )
  {
    var searchIcons = search.querySelectorAll( '.search__icon' );
    var searchInner = search.querySelector( '.search__inner' );

    Array.prototype.forEach.call( searchIcons, function( searchIcon )
    {
      searchIcon.addEventListener( 'click', function() {
        searchInner.style.width = windowWidth - gutterWidth + 'px';
        search.classList.toggle( 'search--open' );
      });
    });
  });
});
