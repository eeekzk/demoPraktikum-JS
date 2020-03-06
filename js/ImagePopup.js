class ImagePopup extends Popup {
  constructor(popupElem, eventAggregator) {
    super(popupElem);
    this.eventAggregator = eventAggregator;

    this.popupImage = this.popupElem.querySelector('.popup__image');
    this.crossButtonBigImage = this.popupElem.querySelector(".popup__close");

    this.addEventListeners();
  }

  addEventListeners() {
    // закрытие закрытия попапа с большой картинкой
    this.crossButtonBigImage.addEventListener("click", this.close);

    this.eventAggregator.subscribe('imagePopupOpen', (e) => this.openImage(e));
  }

  openImage(event) {
    this.popupImage.src = event.target.style.backgroundImage.slice(5, -2);
    this.open();
  }
}