import PopupEmail from './components/popupEmail.js';
import PopupCookies from './components/popupCookies.js';
import HeaderEffect from './components/headerEffect.js'

export const app = {

    initPopupEmail: function () {
        new PopupEmail();
    },
    initPopupCookies: function () {
        new PopupCookies();
    },
    initHeaderEffect: function () {
        new HeaderEffect();
    },
    init: function () {
        this.initPopupEmail();
        this.initPopupCookies();
        this.initHeaderEffect();
    }
};
app.init();