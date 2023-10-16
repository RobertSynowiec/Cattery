import PopupEmail from './components/popupEmail.js';
import PopupCookies from './components/popupCookies.js';

export const app = {

    initPopupEmail: function () {
        new PopupEmail();
    },
    initPopupCookies: function () {
        new PopupCookies();
    },

    init: function () {
        this.initPopupEmail();
        this.initPopupCookies();
    }

};
app.init();