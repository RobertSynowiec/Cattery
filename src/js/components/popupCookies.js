import { idFor, classNames } from '../settings.js';

class PopupCookies {
  constructor() {

    this.init();

  }
  init() {
    document.addEventListener('DOMContentLoaded', function () {
      const cookies = document.getElementById(idFor.popupCookies.cookies);
      const buttonAccept = document.getElementById(idFor.popupCookies.buttonAccept);
      const buttonReject = document.getElementById(idFor.popupCookies.buttonReject);

      window.stop();

      // Check if the user has already accepted cookies
      if (!localStorage.getItem('cookiesAccepted')) {
        // If not, display the popup
        cookies.classList.remove(classNames.pages.dNone);

      }

      // If button accept was pressed
      buttonAccept.addEventListener('click', function () {
        localStorage.setItem('cookiesAccepted', 'true');
        cookies.classList.add(classNames.pages.dNone);
      });

      // If the reject button was pressed
      buttonReject.addEventListener('click', function () {
        // View alert
        const confirmation = confirm('You have rejected cookies. Do you want to leave the page');

        if (confirmation) {
          //link to redirect the page
          window.location.href = 'https://www.google.pl/';
        }
      });
    });
  }
}
export default PopupCookies;