import PopupEmail from './components/popupEmail.js';
import PopupCookies from './components/popupCookies.js';
import HeaderEffect from './components/headerEffect.js';
import ScrollBar from './components/scrollBar.js';
import Blog from './components/blog.js';
import { dataSource } from './data.js';

export const app = {

  loadData: function () {
    return new Promise((resolve, reject) => {

      setTimeout(() => {
        this.data = dataSource;
        resolve(this.data);
      }, 500);
    });
  },


  initData: async function () {
    this.data = await this.loadData();
    this.initBlog();
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