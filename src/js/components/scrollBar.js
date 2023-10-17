import { classFor } from '../settings.js';

class ScrollBar {
  constructor() {
    this.getElement();

  }
  getElement() {
    this.bar = document.querySelector(classFor.scrollBar.slider);
    this.init();

  }
  init() {

    const scrollBar = () => {

      this.currentScroll = Math.round(window.scrollY / (document.documentElement.offsetHeight - window.innerHeight) * 100);
      this.bar.style.width = this.currentScroll + '%';
    };

    window.addEventListener('scroll', scrollBar);
  }
}
export default ScrollBar;