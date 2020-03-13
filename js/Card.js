class Card {
  constructor(card, eventAggregator) {
    this.name = card.name
    this.link = card.link
    this.eventAggregator = eventAggregator;

    this.like = this.like.bind(this);
    this.remove = this.remove.bind(this);
    this.create = this.create.bind(this);
  }

  get template() {
    return `<div class="place-card">
                <div class="place-card__image" style="background-image: url(${this.link})">
                    <button class="place-card__delete-icon"></button>
                </div>
                <div class="place-card__description">
                    <h3 class="place-card__name">${this.name}</h3>
                    <button class="place-card__like-icon"></button>
                </div>
            </div>`
  }

  like() {
    this.likeElem.classList.toggle("place-card__like-icon_liked");
  }

  remove() {
    this.elem.remove();
    this.elem = null;
  }

  addEventListeners() {
    this.likeElem.addEventListener('click', this.like);
    this.bucket.addEventListener('click', (e) => {
      e.stopPropagation();
      this.remove();
    });
    this.image.addEventListener('click', (e) => this.eventAggregator.publish('imagePopupOpen', e));
  }

  create() {
    const createNewTag = document.createElement(`div`);
    createNewTag.innerHTML = this.template;
    this.elem = createNewTag.firstChild;

    this.likeElem = this.elem.querySelector('.place-card__like-icon');
    this.bucket = this.elem.querySelector('.place-card__delete-icon');
    this.image = this.elem.querySelector('.place-card__image');

    this.addEventListeners();

    return this.elem;
  }
}