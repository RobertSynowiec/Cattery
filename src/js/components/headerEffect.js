import { classFor, classNames } from '../settings.js';

class HeaderEffect {
    constructor() {
        this.init();

    }
    init() {
        document.addEventListener('DOMContentLoaded', function () {
            console.log('scroll')
            const container = document.querySelector(classFor.headerEffect.sectionTitle);
            const containerMain = document.querySelector(classFor.headerEffect.headerWrapper);
            const windowHeight = window.innerHeight;
            let animationStarted = false;

            function checkScroll() {
                const containerTop = container.getBoundingClientRect().top;

                if (!animationStarted && containerTop < windowHeight) {
                    containerMain.classList.add(classNames.header.active);
                    animationStarted = true;
                } else if (animationStarted && containerTop > windowHeight) {
                    containerMain.classList.remove(classNames.header.active);
                    animationStarted = false;
                }
            }
            window.addEventListener('scroll', checkScroll);
        });
    }
}
export default HeaderEffect;