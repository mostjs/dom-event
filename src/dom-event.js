/** @license MIT License (c) copyright 2015-2016 original author or authors */
/** @author Brian Cavalier */
'use strict';

import { Stream } from 'most';

// domEvent :: (EventTarget t, Event e) => String -> t -> boolean=false -> Stream e
export const domEvent = (event, node, capture = false) =>
    new Stream(new DomEvent(event, node, capture));

export const blur         = (node, capture = false) => domEvent('blur', node, capture);
export const focus        = (node, capture = false) => domEvent('focus', node, capture);
export const focusin      = (node, capture = false) => domEvent('focusin', node, capture);
export const focusout     = (node, capture = false) => domEvent('focusout', node, capture);
export const click        = (node, capture = false) => domEvent('click', node, capture);
export const dblclick     = (node, capture = false) => domEvent('dblclick', node, capture);
export const mousedown    = (node, capture = false) => domEvent('mousedown', node, capture);
export const mouseup      = (node, capture = false) => domEvent('mouseup', node, capture);
export const mousemove    = (node, capture = false) => domEvent('mousemove', node, capture);
export const mouseover    = (node, capture = false) => domEvent('mouseover', node, capture);
export const mouseenter   = (node, capture = false) => domEvent('mouseenter', node, capture);
export const mouseout     = (node, capture = false) => domEvent('mouseout', node, capture);
export const mouseleave   = (node, capture = false) => domEvent('mouseleave', node, capture);
export const change       = (node, capture = false) => domEvent('change', node, capture);
export const select       = (node, capture = false) => domEvent('select', node, capture);
export const submit       = (node, capture = false) => domEvent('submit', node, capture);
export const keydown      = (node, capture = false) => domEvent('keydown', node, capture);
export const keypress     = (node, capture = false) => domEvent('keypress', node, capture);
export const keyup        = (node, capture = false) => domEvent('keyup', node, capture);
export const input        = (node, capture = false) => domEvent('input', node, capture);
export const contextmenu  = (node, capture = false) => domEvent('contextmenu', node, capture);
export const resize       = (node, capture = false) => domEvent('resize', node, capture);
export const scroll       = (node, capture = false) => domEvent('scroll', node, capture);
export const error        = (node, capture = false) => domEvent('error', node, capture);

export const hashchange   = (node, capture = false) => domEvent('hashchange', node, capture);
export const popstate     = (node, capture = false) => domEvent('popstate', node, capture);
export const load         = (node, capture = false) => domEvent('load', node, capture);
export const unload       = (node, capture = false) => domEvent('unload', node, capture);

export const pointerdown  = (node, capture = false) => domEvent('pointerdown', node, capture);
export const pointerup    = (node, capture = false) => domEvent('pointerup', node, capture);
export const pointermove  = (node, capture = false) => domEvent('pointermove', node, capture);
export const pointerover  = (node, capture = false) => domEvent('pointerover', node, capture);
export const pointerenter = (node, capture = false) => domEvent('pointerenter', node, capture);
export const pointerout   = (node, capture = false) => domEvent('pointerout', node, capture);
export const pointerleave = (node, capture = false) => domEvent('pointerleave', node, capture);

export const touchstart   = (node, capture = false) => domEvent('touchstart', node, capture);
export const touchend     = (node, capture = false) => domEvent('touchend', node, capture);
export const touchmove    = (node, capture = false) => domEvent('touchmove', node, capture);
export const touchcancel  = (node, capture = false) => domEvent('touchcancel', node, capture);

class DomEvent {
    constructor(event, node, capture) {
        this.event = event;
        this.node = node;
        this.capture = capture;
    }

    run(sink, scheduler) {
        const send = e => tryEvent(scheduler.now(), e, sink);
        const dispose = () => this.node.removeEventListener(this.event, send, this.capture);

        this.node.addEventListener(this.event, send, this.capture);

        return { dispose };
    }
}

function tryEvent(t, x, sink) {
    try {
        sink.event(t, x);
    } catch (e) {
        sink.error(t, e);
    }
}
