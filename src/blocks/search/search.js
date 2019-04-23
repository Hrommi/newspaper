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

    var searchInput = search.querySelector( '.search__input' );

    searchInput.addEventListener( 'focus', function() {
      search.classList.add('search--focused');
    });
    searchInput.addEventListener( 'blur', function() {
      var value = searchInput.value;
      if (value.length === 0) {
        search.classList.remove('search--focused');
      }
    });
  });
});
