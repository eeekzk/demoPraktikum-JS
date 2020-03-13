class Event {
  constructor(name) {
    this._handlers = [];
    this.name = name;
    this.addHandler = this.addHandler.bind(this);
    this.removeHandler = this.removeHandler.bind(this);
    this.fire = this.fire.bind(this);
  }

  addHandler(handler) {
    this._handlers.push(handler);
  }
  s
  removeHandler(handler) {
    for (let i = 0; i < handlers.length; i++) {
      if (this._handlers[i] == handler) {
        this._handlers.splice(i, 1);
        break;
      }
    }
  }

  fire(eventArgs) {
    this._handlers.forEach(function (h) {
      h(eventArgs);
    });
  }
}