import {Stream} from "most";

export function domEvent(event: string, node: EventTarget, capture: boolean): Stream<Event>

export function blur(node: EventTarget, capture: boolean): Stream<Event>;
export function focus(node: EventTarget, capture: boolean): Stream<Event>;
export function focusin(node: EventTarget, capture: boolean): Stream<Event>;
export function focusout(node: EventTarget, capture: boolean): Stream<Event>;
export function click(node: EventTarget, capture: boolean): Stream<Event>;
export function dblclick(node: EventTarget, capture: boolean): Stream<Event>;
export function mousedown(node: EventTarget, capture: boolean): Stream<Event>;
export function mouseup(node: EventTarget, capture: boolean): Stream<Event>;
export function mousemove(node: EventTarget, capture: boolean): Stream<Event>;
export function mouseover(node: EventTarget, capture: boolean): Stream<Event>;
export function mouseenter(node: EventTarget, capture: boolean): Stream<Event>;
export function mouseout(node: EventTarget, capture: boolean): Stream<Event>;
export function mouseleave(node: EventTarget, capture: boolean): Stream<Event>;
export function change(node: EventTarget, capture: boolean): Stream<Event>;
export function select(node: EventTarget, capture: boolean): Stream<Event>;
export function submit(node: EventTarget, capture: boolean): Stream<Event>;
export function keydown(node: EventTarget, capture: boolean): Stream<Event>;
export function keypress(node: EventTarget, capture: boolean): Stream<Event>;
export function keyup(node: EventTarget, capture: boolean): Stream<Event>;
export function input(node: EventTarget, capture: boolean): Stream<Event>;
export function contextmenu(node: EventTarget, capture: boolean): Stream<Event>;
export function resize(node: EventTarget, capture: boolean): Stream<Event>;
export function scroll(node: EventTarget, capture: boolean): Stream<Event>;
export function error(node: EventTarget, capture: boolean): Stream<Event>;

export function hashchange(node: EventTarget, capture: boolean): Stream<Event>;
export function popstate(node: EventTarget, capture: boolean): Stream<Event>;
export function load(node: EventTarget, capture: boolean): Stream<Event>;
export function unload(node: EventTarget, capture: boolean): Stream<Event>;

export function pointerdown(node: EventTarget, capture: boolean): Stream<Event>;
export function pointerup(node: EventTarget, capture: boolean): Stream<Event>;
export function pointermove(node: EventTarget, capture: boolean): Stream<Event>;
export function pointerover(node: EventTarget, capture: boolean): Stream<Event>;
export function pointerenter(node: EventTarget, capture: boolean): Stream<Event>;
export function pointerout(node: EventTarget, capture: boolean): Stream<Event>;
export function pointerleave(node: EventTarget, capture: boolean): Stream<Event>;

export function touchstart(node: EventTarget, capture: boolean): Stream<Event>;
export function touchend(node: EventTarget, capture: boolean): Stream<Event>;
export function touchmove(node: EventTarget, capture: boolean): Stream<Event>;
export function touchcancel(node: EventTarget, capture: boolean): Stream<Event>;
