import PopupEmail from './components/popupEmail.js';

export const app = {

  initPopupEmail: function () {
    new PopupEmail();
  },

  init: function () {
    this.initPopupEmail();
  }

};
app.init();