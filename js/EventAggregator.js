class EventAggregator {

  constructor() {
    this.events = [];
    this._getEvent = this._getEvent.bind(this);
    this.publish = this.publish.bind(this);
    this.subscribe = this.subscribe.bind(this);
  }

  _getEvent(eventName) {
    return this.events.filter(item => item.name === eventName)[0];
  }

  publish(eventName, eventArgs) {
    let event = this._getEvent(eventName);

    if (!event) {
      event = new Event(eventName);
      this.events.push(event);
    }
    event.fire(eventArgs);
  }

  subscribe(eventName, handler) {
    let event = this._getEvent(eventName);

    if (!event) {
      event = new Event(eventName);
      this.events.push(event);
    }

    event.addHandler(handler);
  }
}