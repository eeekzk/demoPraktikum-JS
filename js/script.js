window.onload = () => {
  const cards = document.querySelector('.places-list');
  const userInfoName = document.querySelector('.user-info__name');
  const userInfoJob = document.querySelector('.user-info__job');
  const formPopupAddCard = document.querySelector("#add-card");
  const formPopupProfile = document.querySelector("#profile");
  const bigSizeImage = document.querySelector("#big-size-image");

  const initialCards = [
    {
      name: 'Архыз',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
    },
    {
      name: 'Челябинская область',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
    },
    {
      name: 'Иваново',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
    },
    {
      name: 'Камчатка',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
    },
    {
      name: 'Холмогорский район',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
    },
    {
      name: 'Байкал',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
    },
    {
      name: 'Нургуш',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/khrebet-nurgush.jpg'
    },
    {
      name: 'Тулиновка',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/tulinovka.jpg'
    },
    {
      name: 'Остров Желтухина',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/zheltukhin-island.jpg'
    },
    {
      name: 'Владивосток',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/vladivostok.jpg'
    }
  ];
  const eventAggregator = new EventAggregator();
  const cardList = new CardList(cards, initialCards, eventAggregator);
  const cardPopup = new CardPopup(formPopupAddCard, eventAggregator);
  const editPopup = new EditPopup(formPopupProfile, userInfoName, userInfoJob);
  new ImagePopup(bigSizeImage, eventAggregator);

  cardList.render();

  // нажатие на кнопку +
  const button = document.querySelector(".user-info__button");
  button.addEventListener("click", cardPopup.open);


  // нажатие на кнопку Edit
  const buttonEdit = document.querySelector(".button.user-info__edit");
  buttonEdit.addEventListener("click", editPopup.openProfile);

}
