class CardPopup extends Popup {
  constructor(popupElem, eventAggregator) {
    super(popupElem);

    this.formNewName = this.popupElem.querySelector('.popup__input_type_name');
    this.formErrorCardName = this.popupElem.querySelector("#error-card-name");
    this.formNewLink = this.popupElem.querySelector('.popup__input_type_link-url');
    this.formErrorCardLink = this.popupElem.querySelector("#error-card-link");
    this.crossButton = this.popupElem.querySelector(".popup__close");

    this.eventAggregator = eventAggregator;

    this.submitFormAdd = this.submitFormAdd.bind(this);
    this.validateLenghtStr = this.validateLenghtStr.bind(this);
    this.validateForm = this.validateForm.bind(this);
    this.validURL = this.validURL.bind(this);

    this.addEventListeners();
  }

  addEventListeners() {
    // закрытие формы добавления нового элемента
    this.crossButton.addEventListener("click", this.close);

    // сабмит формы добавления карточки.
    this.popupElem.addEventListener("submit", this.submitFormAdd);

    //валидация добавления новой карточки
    this.formNewName.addEventListener("input", this.validateForm);
    this.formNewLink.addEventListener("input", this.validateForm);
  }

  submitFormAdd(event) {
    event.preventDefault();
    if (!this.popupElem.querySelector(".popup__button").classList.contains("popup__button_enable")) {
      return;
    }
    this.eventAggregator.publish('addNewCard', { name: this.formNewName.value, link: this.formNewLink.value });
    this.formNewName.value = '';
    this.formNewLink.value = '';
    this.close();
  }

  validateForm() {
    let isOk = true;

    switch (this.validateLenghtStr(this.formNewName.value, 2, 30)) {
      case 0: this.formErrorCardName.textContent = "Это обязательное поле"; isOk = false; break;
      case 1: this.formErrorCardName.textContent = ""; break;
      case 2: this.formErrorCardName.textContent = "Должно быть от 2 до 30 символов"; isOk = false; break;
    }

    if (this.validURL(this.formNewLink.value)) {
      this.formErrorCardLink.textContent = "";
    } else {
      this.formErrorCardLink.textContent = "Здесь должна быть ссылка";
      isOk = false;
    }

    if (isOk) {
      this.popupElem.querySelector(".popup__button").classList.add("popup__button_enable");
    } else {
      this.popupElem.querySelector(".popup__button").classList.remove("popup__button_enable");
    }
  }

  validURL(str) {
    const pattern = new RegExp('^(https?:\\/\\/)?' + // protocol
      '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|' + // domain name
      '((\\d{1,3}\\.){3}\\d{1,3}))' + // OR ip (v4) address
      '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*' + // port and path
      '(\\?[;&a-z\\d%_.~+=-]*)?' + // query string
      '(\\#[-a-z\\d_]*)?$', 'i'); // fragment locator
    return !!pattern.test(str);
  }

  validateLenghtStr(str, min, max) {
    if (str.length === 0)
      return 0;
    if (str.length >= min && str.length <= max)
      return 1;
    return 2;
  }
}