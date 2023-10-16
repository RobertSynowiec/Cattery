import { idFor, classNames } from '../settings.js';

class PopupEmail {
  constructor() {
    this.init();
  }
  init() {
    const showPopupEmail = document.getElementById(idFor.popup.popupEmail);
    const closePopupEmail = document.getElementById(idFor.popup.closePopupEmail);
    const popup = document.getElementById(idFor.popup.popup);

    showPopupEmail.addEventListener('click', () => {
      popup.style.display = (classNames.popup.block);
    });

    closePopupEmail.addEventListener('click', () => {
      popup.style.display = (classNames.popup.none);

    });
  }
}
export default PopupEmail;