# svelte/transition

```js
// @noErrors
import {
	blur,
	crossfade,
	draw,
	fade,
	fly,
	scale,
	slide
} from 'svelte/transition';
```

## blur

Animates a `blur` filter alongside an element's opacity.

```dts
function blur(
	node: Element,
	{
		delay,
		duration,
		easing,
		amount,
		opacity
	}?: BlurParams | undefined
): TransitionConfig;
```

## crossfade

The `crossfade` function creates a pair of [transitions](/docs/svelte/transition) called `send` and `receive`. When an element is 'sent', it looks for a corresponding element being 'received', and generates a transition that transforms the element to its counterpart's position and fades it out. When an element is 'received', the reverse happens. If there is no counterpart, the `fallback` transition is used.

```dts
function crossfade({
	fallback,
	...defaults
}: CrossfadeParams & {
	fallback?: (
		node: Element,
		params: CrossfadeParams,
		intro: boolean
	) => TransitionConfig;
}): [
	(
		node: any,
		params: CrossfadeParams & {
			key: any;
		}
	) => () => TransitionConfig,
	(
		node: any,
		params: CrossfadeParams & {
			key: any;
		}
	) => () => TransitionConfig
];
```

## draw

Animates the stroke of an SVG element, like a snake in a tube. `in` transitions begin with the path invisible and draw the path to the screen over time. `out` transitions start in a visible state and gradually erase the path. `draw` only works with elements that have a `getTotalLength` method, like `<path>` and `<polyline>`.

```dts
function draw(
	node: SVGElement & {
		getTotalLength(): number;
	},
	{
		delay,
		speed,
		duration,
		easing
	}?: DrawParams | undefined
): TransitionConfig;
```

## fade

Animates the opacity of an element from 0 to the current opacity for `in` transitions and from the current opacity to 0 for `out` transitions.

```dts
function fade(
	node: Element,
	{ delay, duration, easing }?: FadeParams | undefined
): TransitionConfig;
```

## fly

Animates the x and y positions and the opacity of an element. `in` transitions animate from the provided values, passed as parameters to the element's default values. `out` transitions animate from the element's default values to the provided values.

```dts
function fly(
	node: Element,
	{
		delay,
		duration,
		easing,
		x,
		y,
		opacity
	}?: FlyParams | undefined
): TransitionConfig;
```

## scale

Animates the opacity and scale of an element. `in` transitions animate from the provided values, passed as parameters, to an element's current (default) values. `out` transitions animate from an element's default values to the provided values.

```dts
function scale(
	node: Element,
	{
		delay,
		duration,
		easing,
		start,
		opacity
	}?: ScaleParams | undefined
): TransitionConfig;
```

## slide

Slides an element in and out.

```dts
function slide(
	node: Element,
	{
		delay,
		duration,
		easing,
		axis
	}?: SlideParams | undefined
): TransitionConfig;
```

## BlurParams

```dts
interface BlurParams {/*…*/}
```

```dts
delay?: number;
```

```dts
duration?: number;
```

```dts
easing?: EasingFunction;
```

```dts
amount?: number | string;
```

```dts
opacity?: number;
```

## CrossfadeParams

```dts
interface CrossfadeParams {/*…*/}
```

```dts
delay?: number;
```

```dts
duration?: number | ((len: number) => number);
```

```dts
easing?: EasingFunction;
```

## DrawParams

```dts
interface DrawParams {/*…*/}
```

```dts
delay?: number;
```

```dts
speed?: number;
```

```dts
duration?: number | ((len: number) => number);
```

```dts
easing?: EasingFunction;
```

## EasingFunction

```dts
type EasingFunction = (t: number) => number;
```

## FadeParams

```dts
interface FadeParams {/*…*/}
```

```dts
delay?: number;
```

```dts
duration?: number;
```

```dts
easing?: EasingFunction;
```

## FlyParams

```dts
interface FlyParams {/*…*/}
```

```dts
delay?: number;
```

```dts
duration?: number;
```

```dts
easing?: EasingFunction;
```

```dts
x?: number | string;
```

```dts
y?: number | string;
```

```dts
opacity?: number;
```

## ScaleParams

```dts
interface ScaleParams {/*…*/}
```

```dts
delay?: number;
```

```dts
duration?: number;
```

```dts
easing?: EasingFunction;
```

```dts
start?: number;
```

```dts
opacity?: number;
```

## SlideParams

```dts
interface SlideParams {/*…*/}
```

```dts
delay?: number;
```

```dts
duration?: number;
```

```dts
easing?: EasingFunction;
```

```dts
axis?: 'x' | 'y';
```

## TransitionConfig

```dts
interface TransitionConfig {/*…*/}
```

```dts
delay?: number;
```

```dts
duration?: number;
```

```dts
easing?: EasingFunction;
```

```dts
css?: (t: number, u: number) => string;
```

```dts
tick?: (t: number, u: number) => void;
```
