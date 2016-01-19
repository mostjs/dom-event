/** @license MIT License (c) copyright 2015-2016 original author or authors */
/** @author Brian Cavalier */

import { describe, it } from 'mocha';
import assert from 'assert';
import FakeEventTarget from './helper/FakeEventTarget';
import { domEvent } from '../src/dom-event';

describe('domEvent', () => {
    it('should call addEventListener with expected parameters', () => {
        const t = new FakeEventTarget();
        const s = domEvent('test', t, true);

        s.drain();

        assert.strictEqual('test', t.event);
        assert.strictEqual(true, t.capture);
    });

    it('should call addEventListener with expected parameters', () => {
        const t = new FakeEventTarget();
        const s = domEvent('test', t, false);

        s.drain();

        assert.strictEqual('test', t.event);
        assert.strictEqual(false, t.capture);
    });

    it('should call addEventListener with expected parameters', () => {
        const t = new FakeEventTarget();
        const s = domEvent('test', t);

        s.drain();

        assert.strictEqual('test', t.event);
        assert.strictEqual(false, t.capture);
    });

    it('should propagate events', () => {
        const t = new FakeEventTarget();
        const s = domEvent('test', t);

        setTimeout(() => {
            t.emit(1);
            t.emit(2);
            t.emit(3);
        }, 0);

        return s.take(3).reduce((a, x) => a.concat(x), [])
            .then(result => assert.deepEqual([1, 2, 3], result));
    });

    it('should call removeEventListener with expected parameters', () => {
        const t = new FakeEventTarget();
        const s = domEvent('test', t, true);

        setTimeout(() => t.emit(1), 0);

        return s.take(1).drain().then(() => {
            assert.strictEqual('test', t.removedEvent);
            assert.strictEqual(true, t.removedCapture);
        });
    });

    it('should call removeEventListener with expected parameters', () => {
        const t = new FakeEventTarget();
        const s = domEvent('test', t, false);

        setTimeout(() => t.emit(1), 0);

        return s.take(1).drain().then(() => {
            assert.strictEqual('test', t.removedEvent);
            assert.strictEqual(false, t.removedCapture);
        });
    });

    it('should call removeEventListener with expected parameters', () => {
        const t = new FakeEventTarget();
        const s = domEvent('test', t);

        setTimeout(() => t.emit(1), 0);

        return s.take(1).drain().then(() => {
            assert.strictEqual('test', t.removedEvent);
            assert.strictEqual(false, t.removedCapture);
        });
    });
});
