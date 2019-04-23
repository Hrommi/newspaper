/* global document */

const ready = require('../../js/utils/documentReady.js');

ready(function(){
  var formList = document.querySelectorAll( '.form--idea' );
  Array.prototype.forEach.call( formList, function( form )
  {
    var formInput = form.querySelector( '.field-text__input' );

    formInput.addEventListener( 'focus', function() {
      form.classList.add('form--idea-focused');
    });
    formInput.addEventListener( 'blur', function() {
      var value = formInput.value;
      if (value.length === 0) {
        form.classList.remove('form--idea-focused');
      }
    });
  });
});
