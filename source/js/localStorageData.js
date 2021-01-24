'use strict';

(function () {
  var isStorageSupp = true;
  var storageNamePopup = '';
  var storagePhonePopup = '';
  var storageMessagePopup = '';
  var storageNameConsult = '';
  var storagePhoneConsult = '';
  var storagePhoneMessage = '';
  var FORM_POPUP = '.popup__form';
  var FORM_CONSULT = '.consult__form';
  var inputNamePopup = document.querySelector('#name');
  var inputPhonePopup = document.querySelector('#phone');
  var inputMessagePopup = document.querySelector('#question');
  var inputNameConsult = document.querySelector('#user-name');
  var inputPhoneConsult = document.querySelector('#user-phone');
  var inputMessageConsult = document.querySelector('#question-consult');
  try {
    storageNamePopup = localStorage.getItem('user-name');
    storagePhonePopup = localStorage.getItem('user-phone');
    storageMessagePopup = localStorage.getItem('question');
    storageNameConsult = localStorage.getItem('name');
    storagePhoneConsult = localStorage.getItem('phone');
    storagePhoneMessage = localStorage.getItem('question-consult');

  } catch (err) {
    isStorageSupp = false;
  }

  var getItemStorage = function () {
    if (isStorageSupp) {
      if (inputNamePopup) {
        inputNamePopup.value = storageNamePopup;
      }
      if (inputPhonePopup) {
        inputPhonePopup.value = storagePhonePopup;
      }
      if (inputMessagePopup) {
        inputMessagePopup.value = storageMessagePopup;
      }
      if (inputNameConsult) {
        inputNameConsult.value = storageNameConsult;
      }
      if (inputPhoneConsult) {
        inputPhoneConsult.value = storagePhoneConsult;
      }
      if (inputMessageConsult) {
        inputMessageConsult.value = storagePhoneMessage;
      }
    }
  };
  var setLocalStorage = function (evt) {
    if (evt.target.closest(FORM_POPUP)) {
      localStorage.setItem('user-name', inputNamePopup.value);
      localStorage.setItem('user-phone', inputPhonePopup.value);
      localStorage.setItem('question', inputMessagePopup.value);
    }
    if (evt.target.closest(FORM_CONSULT)) {
      localStorage.setItem('name', inputNameConsult.value);
      localStorage.setItem('phone', inputPhoneConsult.value);
      localStorage.setItem('question-consult', inputMessageConsult.value);
    }
  };
  getItemStorage();
  window.localStorageData = {
    set: setLocalStorage
  };
})();
