class CardList {
  constructor(container, initialCardList, eventAggregator) {
    this.container = container;
    this.eventAggregator = eventAggregator;
    this.cardList = initialCardList.map(item => new Card(item, this.eventAggregator));

    this.addCard = this.addCard.bind(this);
    this.render = this.render.bind(this);

    this.eventAggregator.subscribe('addNewCard', this.addCard);
  }

  addCard(card) {
    this.container.appendChild(new Card(card, this.eventAggregator).create());
  }

  render() {
    for (let i = 0; i < this.cardList.length; i++) {
      this.container.appendChild(this.cardList[i].create());
    }
  }
}