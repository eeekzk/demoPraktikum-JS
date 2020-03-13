class Popup {
  constructor(popupElem) {
    this.popupElem = popupElem;
    this.open = this.open.bind(this);
    this.close = this.close.bind(this);
  }

  close() {
    this.validateForm();
    this.popupElem.classList.toggle("popup_is-opened");
  }

  open() {
    this.validateForm();
    this.popupElem.classList.toggle("popup_is-opened");
  }

  validateForm() { }
}