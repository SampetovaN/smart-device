'use strict';

(function () {
  var TAB_CLOSE_TAG = 'tab--closed';
  var NO_JS_TAG = 'main-info--nojs';
  var BUTTON_TAG = 'tab__button';
  var TAB_TAG = 'tab';
  var mainInfo = document.querySelector('.main-info');
  var tabs = document.querySelectorAll('.tab');
  if (mainInfo && tabs) {
    mainInfo.classList.remove(NO_JS_TAG);
    var onClickTabButton = function (button) {
      button.closest('.' + TAB_TAG).classList.toggle(TAB_CLOSE_TAG);
    };

    [].slice.call(tabs).forEach(function (tab) {
      tab.classList.add(TAB_CLOSE_TAG);
      tab.addEventListener('click', function (evt) {
        if (evt.target.classList.contains(BUTTON_TAG)) {
          onClickTabButton(evt.target);
        }
      });
    });
  }
})();
