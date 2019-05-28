import { Stream } from "@most/types";

export function domEvent<E extends keyof ElementEventMap, N extends Element = Element>(event: E, node: N, capture?: boolean | AddEventListenerOptions): Stream<ElementEventMap[E] & { currentTarget: N }>
export function domEvent<E extends keyof HTMLElementEventMap, N extends HTMLElement = HTMLElement>(event: E, node: HTMLElement, capture?: boolean | AddEventListenerOptions): Stream<HTMLElementEventMap[E] & { currentTarget: N }>
export function domEvent<E extends keyof SVGElementEventMap, N extends SVGElement = SVGElement>(event: E, node: SVGElement, capture?: boolean | AddEventListenerOptions): Stream<SVGElementEventMap[E] & { currentTarget: N }>
export function domEvent<N extends EventTarget>(event: string, node: N, capture?: boolean | AddEventListenerOptions): Stream<Event & { currentTarget: N }>

export function blur<N extends EventTarget>(node: EventTarget, capture?: boolean | AddEventListenerOptions): Stream<FocusEvent & { currentTarget: N }>;
export function focus<N extends EventTarget>(node: EventTarget, capture?: boolean | AddEventListenerOptions): Stream<FocusEvent & { currentTarget: N }>;
export function focusin<N extends EventTarget>(node: EventTarget, capture?: boolean | AddEventListenerOptions): Stream<FocusEvent & { currentTarget: N }>;
export function focusout<N extends EventTarget>(node: EventTarget, capture?: boolean | AddEventListenerOptions): Stream<FocusEvent & { currentTarget: N }>;
export function click<N extends EventTarget>(node: EventTarget, capture?: boolean | AddEventListenerOptions): Stream<MouseEvent & { currentTarget: N }>;
export function dblclick<N extends EventTarget>(node: EventTarget, capture?: boolean | AddEventListenerOptions): Stream<MouseEvent & { currentTarget: N }>;
export function mousedown<N extends EventTarget>(node: EventTarget, capture?: boolean | AddEventListenerOptions): Stream<MouseEvent & { currentTarget: N }>;
export function mouseup<N extends EventTarget>(node: EventTarget, capture?: boolean | AddEventListenerOptions): Stream<MouseEvent & { currentTarget: N }>;
export function mousemove<N extends EventTarget>(node: EventTarget, capture?: boolean | AddEventListenerOptions): Stream<MouseEvent & { currentTarget: N }>;
export function mouseover<N extends EventTarget>(node: EventTarget, capture?: boolean | AddEventListenerOptions): Stream<MouseEvent & { currentTarget: N }>;
export function mouseenter<N extends EventTarget>(node: EventTarget, capture?: boolean | AddEventListenerOptions): Stream<MouseEvent & { currentTarget: N }>;
export function mouseout<N extends EventTarget>(node: EventTarget, capture?: boolean | AddEventListenerOptions): Stream<MouseEvent & { currentTarget: N }>;
export function mouseleave<N extends EventTarget>(node: EventTarget, capture?: boolean | AddEventListenerOptions): Stream<MouseEvent & { currentTarget: N }>;
export function change<N extends EventTarget>(node: EventTarget, capture?: boolean | AddEventListenerOptions): Stream<Event & { currentTarget: N }>;
export function select<N extends EventTarget>(node: EventTarget, capture?: boolean | AddEventListenerOptions): Stream<UIEvent & { currentTarget: N }>;
export function submit<N extends EventTarget>(node: EventTarget, capture?: boolean | AddEventListenerOptions): Stream<Event & { currentTarget: N }>;
export function keydown<N extends EventTarget>(node: EventTarget, capture?: boolean | AddEventListenerOptions): Stream<KeyboardEvent & { currentTarget: N }>;
export function keypress<N extends EventTarget>(node: EventTarget, capture?: boolean | AddEventListenerOptions): Stream<KeyboardEvent & { currentTarget: N }>;
export function keyup<N extends EventTarget>(node: EventTarget, capture?: boolean | AddEventListenerOptions): Stream<KeyboardEvent & { currentTarget: N }>;
export function input<N extends EventTarget>(node: EventTarget, capture?: boolean | AddEventListenerOptions): Stream<Event & { currentTarget: N }>;
export function contextmenu<N extends EventTarget>(node: EventTarget, capture?: boolean | AddEventListenerOptions): Stream<PointerEvent & { currentTarget: N }>;
export function resize<N extends EventTarget>(node: EventTarget, capture?: boolean | AddEventListenerOptions): Stream<UIEvent & { currentTarget: N }>;
export function scroll<N extends EventTarget>(node: EventTarget, capture?: boolean | AddEventListenerOptions): Stream<UIEvent & { currentTarget: N }>;
export function error<N extends EventTarget>(node: EventTarget, capture?: boolean | AddEventListenerOptions): Stream<ErrorEvent & { currentTarget: N }>;

export function hashchange<N extends Window>(node: N, capture?: boolean | AddEventListenerOptions): Stream<HashChangeEvent & { currentTarget: N }>;
export function popstate<N extends Window>(node: N, capture?: boolean | AddEventListenerOptions): Stream<PopStateEvent & { currentTarget: N }>;
export function load<N extends Window>(node: N, capture?: boolean | AddEventListenerOptions): Stream<Event & { currentTarget: N }>;
export function unload<N extends Window>(node: N, capture?: boolean | AddEventListenerOptions): Stream<Event & { currentTarget: N }>;

export function pointerdown<N extends HTMLElement>(node: N, capture?: boolean | AddEventListenerOptions): Stream<Event & { currentTarget: N }>;
export function pointerup<N extends HTMLElement>(node: N, capture?: boolean | AddEventListenerOptions): Stream<Event & { currentTarget: N }>;
export function pointermove<N extends HTMLElement>(node: N, capture?: boolean | AddEventListenerOptions): Stream<Event & { currentTarget: N }>;
export function pointerover<N extends HTMLElement>(node: N, capture?: boolean | AddEventListenerOptions): Stream<Event & { currentTarget: N }>;
export function pointerenter<N extends HTMLElement>(node: N, capture?: boolean | AddEventListenerOptions): Stream<Event & { currentTarget: N }>;
export function pointerout<N extends HTMLElement>(node: N, capture?: boolean | AddEventListenerOptions): Stream<Event & { currentTarget: N }>;
export function pointerleave<N extends HTMLElement>(node: N, capture?: boolean | AddEventListenerOptions): Stream<Event & { currentTarget: N }>;

export function touchstart<N extends HTMLElement>(node: N, capture?: boolean | AddEventListenerOptions): Stream<TouchEvent & { currentTarget: N }>;
export function touchend<N extends HTMLElement>(node: N, capture?: boolean | AddEventListenerOptions): Stream<TouchEvent & { currentTarget: N }>;
export function touchmove<N extends HTMLElement>(node: N, capture?: boolean | AddEventListenerOptions): Stream<TouchEvent & { currentTarget: N }>;
export function touchcancel<N extends HTMLElement>(node: N, capture?: boolean | AddEventListenerOptions): Stream<TouchEvent & { currentTarget: N }>;
