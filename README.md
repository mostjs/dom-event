# most dom-event

[![Join the chat at https://gitter.im/mostjs/dom-event](https://badges.gitter.im/mostjs/dom-event.svg)](https://gitter.im/mostjs/dom-event?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=badge)

Streamlined DOM events for [most](https://github.com/cujojs/most).  Now you can write:

```js
import { click } from '@most/dom-event';

const clickStream = click(el);

clickStream.observe(event => console.log(event));
```

## Install

`npm install --save @most/dom-event`

## API

### Events

#### &lt;eventName&gt; :: (EventTarget t, Event e) => t &rarr; boolean=false &rarr; Stream e

See [the source](src/dom-event.js) for all the supported event names.  Each has the general signature:

```js
const stream = eventName(domNode, useCapture = false)
```

### domEvent

#### domEvent :: (EventTarget t, Event e) => String &rarr; t &rarr; boolean=false &rarr; Stream e

If there's an event type that isn't supported, you can use the general `domEvent` API:

```js
const stream = domEvent(eventName, domNode, useCapture = false);
```
