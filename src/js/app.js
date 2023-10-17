import PopupEmail from './components/popupEmail.js';
import PopupCookies from './components/popupCookies.js';
import HeaderEffect from './components/headerEffect.js';
import ScrollBar from './components/scrollBar.js';
import Blog from './components/blog.js';
import { dataSource } from './data.js';

export const app = {

  initData: function () {
    this.loadData(function (dataSource) {
      this.data = dataSource;
      setTimeout(function () {
        this.initBlog();
      }.bind(this), 0);
    }.bind(this));
  },

  loadData: function (callback) {
    const data = dataSource;

    setTimeout(function () {
      const dataSource = data;
      callback(dataSource);
    }, 500);
  },

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
  initBlog: function () {
    new Blog(this.data);
  },
  init: function () {
    this.initPopupEmail();
    this.initPopupCookies();
    this.initHeaderEffect();
    this.initScrollBar();
    this.initData();
  }
};
app.init();