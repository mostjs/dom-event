# most dom-event

Streamlined DOM events for [@most/core](https://github.com/mostjs/core). Now you can write:

```js
import { click } from '@most/dom-event';
import { tap runEffects } from "@most/core";
import { newDefaultScheduler } from "@most/scheduler";

const clickStream = click(el);

runEffects(tap(console.log, clickStream), newDefaultScheduler());
```

## Install

`npm install --save @most/dom-event`

## API

### Events

#### &lt;eventName&gt; :: (EventTarget t, Event e) => t &rarr; boolean=false &rarr; Stream e

See [the source](src/index.js) for all the supported event names. Each has the general signature:

```js
const stream = eventName(domNode, (useCapture = false));
```

### domEvent

#### domEvent :: (EventTarget t, Event e) => String &rarr; t &rarr; boolean=false &rarr; Stream e

If there's an event type that isn't supported, you can use the general `domEvent` API:

```js
const stream = domEvent(eventName, domNode, (useCapture = false));
```
