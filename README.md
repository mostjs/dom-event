# most dom-event

Streamlined DOM events for [most](https://github.com/cujojs/most).  Now you can write:

```js
import { click } from '@most/dom-event';

const clickStream = click(el);

clickStream.observe(event => console.log(event));
```

## API

### Events

`<eventName> :: (EventTarget t, Event e) => t -> boolean=false -> Stream e`

See [the source](src/dom-event.js) for all the supported event names.  Each has the general signature:

```js
const stream = eventName(domNode, useCapture = false)
```

### domEvent

`domEvent :: (EventTarget t, Event e) => String -> t -> boolean=false -> Stream e`

If there's an event type that isn't supported, you can use the general `domEvent` API:

```js
const stream = domEvent(eventName, domNode, useCapture = false);
```
