/** @license MIT License (c) copyright 2015-2016 original author or authors */
/** @author Brian Cavalier */

import { describe, it } from 'mocha'
import assert from 'assert'
import FakeEventTarget from './helper/FakeEventTarget'
import * as DOMEvent from '../src/index'

const verifyAddEventListener = (eventType, capture) => {
  const t = new FakeEventTarget()
  const s = DOMEvent.domEvent(eventType, t, capture)

  verifyAdd(eventType, capture, t, s)
}

const verifyAddEventListenerMethod = (eventType, capture) => {
  const t = new FakeEventTarget()
  const s = DOMEvent[eventType](t, capture)

  verifyAdd(eventType, capture, t, s)
}

const verifyAdd = (eventType, capture, t, s) => {
  s.drain()

  assert.strictEqual(eventType, t.event)
  assert.strictEqual(capture, t.capture)
}

const verifyRemoveEventListener = (eventType, capture) => {
  const t = new FakeEventTarget()
  const s = DOMEvent.domEvent(eventType, t, capture)

  return verifyRemove(eventType, capture, t, s)
}

const verifyRemoveEventListenerMethod = (eventType, capture) => {
  const t = new FakeEventTarget()
  const s = DOMEvent[eventType](t, capture)

  return verifyRemove(eventType, capture, t, s)
}

const verifyRemove = (eventType, capture, t, s) => {
  setTimeout(() => t.emit(1), 0)

  return s.take(1).drain().then(() => {
    assert.strictEqual(eventType, t.removedEvent)
    assert.strictEqual(capture, t.removedCapture)
  })
}

describe('domEvent', () => {
  it('should call addEventListener with expected parameters', () => {
    return verifyAddEventListener('test', true)
  })

  it('should call addEventListener with expected parameters', () => {
    return verifyAddEventListener('test', false)
  })

  it('should call addEventListener with expected parameters', () => {
    const t = new FakeEventTarget()
    const s = DOMEvent.domEvent('test', t)

    verifyAdd('test', false, t, s)
  })

  it('should propagate events', () => {
    const t = new FakeEventTarget()
    const s = DOMEvent.domEvent('test', t)

    setTimeout(() => {
      t.emit(1)
      t.emit(2)
      t.emit(3)
    }, 0)

    return s.take(3).reduce((a, x) => a.concat(x), [])
      .then(result => assert.deepEqual([1, 2, 3], result))
  })

  it('should propagate errors', () => {
    const t = new FakeEventTarget()
    const s = DOMEvent.domEvent('test', t)

    setTimeout(() => t.emit(1), 0)

    const expected = new Error()
    return s.tap(_ => { throw expected }).drain()
      .then(x => assert(false, `expected error, but got event ${x}`),
        e => assert.strictEqual(expected, e))
  })

  it('should call removeEventListener with expected parameters', () => {
    return verifyRemoveEventListener('test', true)
  })

  it('should call removeEventListener with expected parameters', () => {
    return verifyRemoveEventListener('test', false)
  })

  it('should call removeEventListener with expected parameters', () => {
    const t = new FakeEventTarget()
    const s = DOMEvent.domEvent('test', t)

    return verifyRemove('test', false, t, s)
  })

  Object.keys(DOMEvent)
    .filter(key => key !== 'domEvent')
    .forEach(eventType => {
      describe(`${eventType}()`, () => {
        it('should call addEventListener with expected parameters', () => {
          verifyAddEventListenerMethod(eventType, true)
        })

        it('should call addEventListener with expected parameters', () => {
          verifyAddEventListenerMethod(eventType, false)
        })

        it('should call addEventListener with expected parameters', () => {
          const t = new FakeEventTarget()
          const s = DOMEvent[eventType](t)

          verifyAdd(eventType, false, t, s)
        })

        it('should propagate events', () => {
          const t = new FakeEventTarget()
          const s = DOMEvent[eventType](t)

          setTimeout(() => {
            t.emit(1)
            t.emit(2)
            t.emit(3)
          }, 0)

          return s.take(3).reduce((a, x) => a.concat(x), [])
            .then(result => assert.deepEqual([1, 2, 3], result))
        })

        it('should call removeEventListener with expected parameters', () => {
          return verifyRemoveEventListenerMethod(eventType, true)
        })

        it('should call removeEventListener with expected parameters', () => {
          return verifyRemoveEventListenerMethod(eventType, false)
        })

        it('should call removeEventListener with expected parameters', () => {
          const t = new FakeEventTarget()
          const s = DOMEvent[eventType](t)

          return verifyRemove(eventType, false, t, s)
        })
      })
    })
})
