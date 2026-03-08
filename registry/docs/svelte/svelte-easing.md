# svelte/easing

```js
// @noErrors
import {
	backIn,
	backInOut,
	backOut,
	bounceIn,
	bounceInOut,
	bounceOut,
	circIn,
	circInOut,
	circOut,
	cubicIn,
	cubicInOut,
	cubicOut,
	elasticIn,
	elasticInOut,
	elasticOut,
	expoIn,
	expoInOut,
	expoOut,
	linear,
	quadIn,
	quadInOut,
	quadOut,
	quartIn,
	quartInOut,
	quartOut,
	quintIn,
	quintInOut,
	quintOut,
	sineIn,
	sineInOut,
	sineOut
} from 'svelte/easing';
```

## backIn

```dts
function backIn(t: number): number;
```

## backInOut

```dts
function backInOut(t: number): number;
```

## backOut

```dts
function backOut(t: number): number;
```

## bounceIn

```dts
function bounceIn(t: number): number;
```

## bounceInOut

```dts
function bounceInOut(t: number): number;
```

## bounceOut

```dts
function bounceOut(t: number): number;
```

## circIn

```dts
function circIn(t: number): number;
```

## circInOut

```dts
function circInOut(t: number): number;
```

## circOut

```dts
function circOut(t: number): number;
```

## cubicIn

```dts
function cubicIn(t: number): number;
```

## cubicInOut

```dts
function cubicInOut(t: number): number;
```

## cubicOut

```dts
function cubicOut(t: number): number;
```

## elasticIn

```dts
function elasticIn(t: number): number;
```

## elasticInOut

```dts
function elasticInOut(t: number): number;
```

## elasticOut

```dts
function elasticOut(t: number): number;
```

## expoIn

```dts
function expoIn(t: number): number;
```

## expoInOut

```dts
function expoInOut(t: number): number;
```

## expoOut

```dts
function expoOut(t: number): number;
```

## linear

```dts
function linear(t: number): number;
```

## quadIn

```dts
function quadIn(t: number): number;
```

## quadInOut

```dts
function quadInOut(t: number): number;
```

## quadOut

```dts
function quadOut(t: number): number;
```

## quartIn

```dts
function quartIn(t: number): number;
```

## quartInOut

```dts
function quartInOut(t: number): number;
```

## quartOut

```dts
function quartOut(t: number): number;
```

## quintIn

```dts
function quintIn(t: number): number;
```

## quintInOut

```dts
function quintInOut(t: number): number;
```

## quintOut

```dts
function quintOut(t: number): number;
```

## sineIn

```dts
function sineIn(t: number): number;
```

## sineInOut

```dts
function sineInOut(t: number): number;
```

## sineOut

```dts
function sineOut(t: number): number;
```

# svelte/events

```js
// @noErrors
import { on } from 'svelte/events';
```

## on

Attaches an event handler to the window and returns a function that removes the handler. Using this
rather than `addEventListener` will preserve the correct order relative to handlers added declaratively
(with attributes like `onclick`), which use event delegation for performance reasons

```dts
function on<Type extends keyof WindowEventMap>(
	window: Window,
	type: Type,
	handler: (
		this: Window,
		event: WindowEventMap[Type] & { currentTarget: Window }
	) => any,
	options?: AddEventListenerOptions | undefined
): () => void;
```

```dts
function on<Type extends keyof DocumentEventMap>(
	document: Document,
	type: Type,
	handler: (
		this: Document,
		event: DocumentEventMap[Type] & {
			currentTarget: Document;
		}
	) => any,
	options?: AddEventListenerOptions | undefined
): () => void;
```

```dts
function on<
	Element extends HTMLElement,
	Type extends keyof HTMLElementEventMap
>(
	element: Element,
	type: Type,
	handler: (
		this: Element,
		event: HTMLElementEventMap[Type] & {
			currentTarget: Element;
		}
	) => any,
	options?: AddEventListenerOptions | undefined
): () => void;
```

```dts
function on<
	Element extends MediaQueryList,
	Type extends keyof MediaQueryListEventMap
>(
	element: Element,
	type: Type,
	handler: (
		this: Element,
		event: MediaQueryListEventMap[Type] & {
			currentTarget: Element;
		}
	) => any,
	options?: AddEventListenerOptions | undefined
): () => void;
```

```dts
function on(
	element: EventTarget,
	type: string,
	handler: EventListener,
	options?: AddEventListenerOptions | undefined
): () => void;
```
