class EditPopup extends Popup {
  constructor(popupElem, userInfoName, userInfoJob) {
    super(popupElem);
    this.userInfoName = userInfoName;
    this.userInfoJob = userInfoJob;

    this.formProfileName = this.popupElem.querySelectorAll('.popup__input')[0];
    this.formProfileJob = this.popupElem.querySelectorAll('.popup__input')[1];
    this.formErrorProfileName = this.popupElem.querySelector("#error-profile-name");
    this.formErrorProfileJob = this.popupElem.querySelector("#error-profile-job");
    this.crossButtonEdit = this.popupElem.querySelector("#profile .popup__close");

    this.submitFormAdd = this.submitFormAdd.bind(this);
    this.validateLenghtStr = this.validateLenghtStr.bind(this);
    this.validateForm = this.validateForm.bind(this);
    this.openProfile = this.openProfile.bind(this);

    this.addEventListeners();
  }

  addEventListeners() {
    // закрытие формы редактирования профиля
    this.crossButtonEdit.addEventListener("click", this.close);

    // сабмит формы редактирования профиля
    this.popupElem.addEventListener("submit", this.submitFormAdd);

    //валидация редактирования профиля
    this.formProfileName.addEventListener("input", this.validateForm);
    this.formProfileJob.addEventListener("input", this.validateForm);
  }

  openProfile() {
    this.formProfileName.value = this.userInfoName.textContent;
    this.formProfileJob.value = this.userInfoJob.textContent;
    this.open();
  }

  submitFormAdd(event) {
    event.preventDefault();
    if (!this.popupElem.querySelector(".popup__button").classList.contains("popup__button_enable")) {
      return;
    }
    this.userInfoName.textContent = this.formProfileName.value;
    this.userInfoJob.textContent = this.formProfileJob.value;
    this.close();
  }

  validateForm() {
    let isOk = true;

    switch (this.validateLenghtStr(this.formProfileName.value, 2, 30)) {
      case 0: this.formErrorProfileName.textContent = "Это обязательное поле"; isOk = false; break;
      case 1: this.formErrorProfileName.textContent = ""; break;
      case 2: this.formErrorProfileName.textContent = "Должно быть от 2 до 30 символов"; isOk = false; break;
    }

    switch (this.validateLenghtStr(this.formProfileJob.value, 2, 30)) {
      case 0: this.formErrorProfileJob.textContent = "Это обязательное поле"; isOk = false; break;
      case 1: this.formErrorProfileJob.textContent = ""; break;
      case 2: this.formErrorProfileJob.textContent = "Должно быть от 2 до 30 символов"; isOk = false; break;
    }

    if (isOk) {
      this.popupElem.querySelector(".popup__button").classList.add("popup__button_enable");
    } else {
      this.popupElem.querySelector(".popup__button").classList.remove("popup__button_enable");
    }
  }

  validateLenghtStr(str, min, max) {
    if (str.length === 0)
      return 0;
    if (str.length >= min && str.length <= max)
      return 1;
    return 2;
  }
}