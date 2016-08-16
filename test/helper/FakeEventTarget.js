export default class FakeEventTarget {
  constructor () {
    this.handler = this.event = this.capture = void 0
    this.removedEvent = this.removedCapture = void 0
  }

  emit (x) {
    if (typeof this.handler !== 'function') {
      return
    }
    this.handler.call(void 0, x)
  }

  addEventListener (e, handler, capture) {
    this.event = e
    this.handler = handler
    this.capture = capture
  }

  removeEventListener (e, handler, capture) {
    if (handler !== this.handler) {
      throw new Error('unexpected handler passed to removeEventListener')
    }
    this.removedEvent = e
    this.removedCapture = capture
    this.handler = this.event = this.capture = void 0
  }
}
