import PopupEmail from './components/popupEmail.js';
import PopupCookies from './components/popupCookies.js';
import HeaderEffect from './components/headerEffect.js'
import ScrollBar from './components/scrollBar.js';

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
    initScrollBar: function () {
        new ScrollBar();
    },
    init: function () {
        this.initPopupEmail();
        this.initPopupCookies();
        this.initHeaderEffect();
        this.initScrollBar();
    }
};
app.init();