# svelte/reactivity/window

This module exports reactive versions of various `window` values, each of which has a reactive `current` property that you can reference in reactive contexts (templates, [deriveds]($derived) and [effects]($effect)) without using [`<svelte:window>`](svelte-window) bindings or manually creating your own event listeners.

```svelte
<script>
	import { innerWidth, innerHeight } from 'svelte/reactivity/window';
</script>

<p>{innerWidth.current}x{innerHeight.current}</p>
```

```js
// @noErrors
import {
	devicePixelRatio,
	innerHeight,
	innerWidth,
	online,
	outerHeight,
	outerWidth,
	screenLeft,
	screenTop,
	scrollX,
	scrollY
} from 'svelte/reactivity/window';
```

## devicePixelRatio

Available since 5.11.0

`devicePixelRatio.current` is a reactive view of `window.devicePixelRatio`. On the server it is `undefined`.
Note that behaviour differs between browsers — on Chrome it will respond to the current zoom level,
on Firefox and Safari it won't.

```dts
const devicePixelRatio: {
	get current(): number | undefined;
};
```

## innerHeight

Available since 5.11.0

`innerHeight.current` is a reactive view of `window.innerHeight`. On the server it is `undefined`.

```dts
const innerHeight: ReactiveValue<number | undefined>;
```

## innerWidth

Available since 5.11.0

`innerWidth.current` is a reactive view of `window.innerWidth`. On the server it is `undefined`.

```dts
const innerWidth: ReactiveValue<number | undefined>;
```

## online

Available since 5.11.0

`online.current` is a reactive view of `navigator.onLine`. On the server it is `undefined`.

```dts
const online: ReactiveValue<boolean | undefined>;
```

## outerHeight

Available since 5.11.0

`outerHeight.current` is a reactive view of `window.outerHeight`. On the server it is `undefined`.

```dts
const outerHeight: ReactiveValue<number | undefined>;
```

## outerWidth

Available since 5.11.0

`outerWidth.current` is a reactive view of `window.outerWidth`. On the server it is `undefined`.

```dts
const outerWidth: ReactiveValue<number | undefined>;
```

## screenLeft

Available since 5.11.0

`screenLeft.current` is a reactive view of `window.screenLeft`. It is updated inside a `requestAnimationFrame` callback. On the server it is `undefined`.

```dts
const screenLeft: ReactiveValue<number | undefined>;
```

## screenTop

Available since 5.11.0

`screenTop.current` is a reactive view of `window.screenTop`. It is updated inside a `requestAnimationFrame` callback. On the server it is `undefined`.

```dts
const screenTop: ReactiveValue<number | undefined>;
```

## scrollX

Available since 5.11.0

`scrollX.current` is a reactive view of `window.scrollX`. On the server it is `undefined`.

```dts
const scrollX: ReactiveValue<number | undefined>;
```

## scrollY

Available since 5.11.0

`scrollY.current` is a reactive view of `window.scrollY`. On the server it is `undefined`.

```dts
const scrollY: ReactiveValue<number | undefined>;
```
