'use strict';

(function () {
  var PHONE_INPUT_TAG = 'form__input--phone input';
  var INVALID_PHONE_MESSAGE = 'Пожалуйста, введите номер телефона в формате 8-xxx-xxx-xx-xx';
  var mask = require('imask');
  var MaskOptions = {
    mask: '+{7}(000)000-00-00'
  };
  var checkInputPhone = function (inputPhone) {
    if (inputPhone.validity.patternMismatch) {
      inputPhone.setCustomValidity(INVALID_PHONE_MESSAGE);
    } else {
      inputPhone.setCustomValidity('');
    }
  };
  var forms = document.querySelectorAll('.form');
  if (forms) {
    forms.forEach(function (form) {
      var inputPhone = form.querySelector('.' + PHONE_INPUT_TAG);
      if (inputPhone) {
        new mask.InputMask(inputPhone, MaskOptions);
        inputPhone.addEventListener('input', function (evt) {
          checkInputPhone(evt.target);
        });
      }
      form.addEventListener('submit', function (evt) {
        evt.preventDefault();
        window.localStorageData.set(evt);
        form.reset();
      });
    });
  }
})();
