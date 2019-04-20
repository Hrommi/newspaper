/* global document */

const ready = require('../../js/utils/documentReady.js');

ready(function(){
  var selects = document.querySelectorAll( '.select-list' );
  Array.prototype.forEach.call( selects, function( select )
  {
    var selectHeader  = select.querySelector( '.select-list__header' );

    selectHeader.addEventListener( 'click', function() {
      select.classList.toggle( 'select-list--open' );
    });
  });
});
