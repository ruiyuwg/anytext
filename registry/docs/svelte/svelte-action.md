# svelte/action

This module provides types for [actions](use), which have been superseded by [attachments](@attach).

## Action

Actions are functions that are called when an element is created.
You can use this interface to type such actions.
The following example defines an action that only works on `<div>` elements
and optionally accepts a parameter which it has a default value for:

```ts
export const myAction: Action<HTMLDivElement, { someProperty: boolean } | undefined> = (node, param = { someProperty: true }) => {
	// ...
}
```

`Action<HTMLDivElement>` and `Action<HTMLDivElement, undefined>` both signal that the action accepts no parameters.

You can return an object with methods `update` and `destroy` from the function and type which additional attributes and events it has.
See interface `ActionReturn` for more details.

```dts
interface Action<
	Element = HTMLElement,
	Parameter = undefined,
	Attributes extends Record<string, any> = Record<
		never,
		any
	>
> {/*…*/}
```

```dts
<Node extends Element>(
	...args: undefined extends Parameter
		? [node: Node, parameter?: Parameter]
		: [node: Node, parameter: Parameter]
): void | ActionReturn<Parameter, Attributes>;
```

## ActionReturn

Actions can return an object containing the two properties defined in this interface. Both are optional.

- update: An action can have a parameter. This method will be called whenever that parameter changes,
  immediately after Svelte has applied updates to the markup. `ActionReturn` and `ActionReturn<undefined>` both
  mean that the action accepts no parameters.
- destroy: Method that is called after the element is unmounted

Additionally, you can specify which additional attributes and events the action enables on the applied element.
This applies to TypeScript typings only and has no effect at runtime.

Example usage:

```ts
interface Attributes {
	newprop?: string;
	'on:event': (e: CustomEvent<boolean>) => void;
}

export function myAction(node: HTMLElement, parameter: Parameter): ActionReturn<Parameter, Attributes> {
	// ...
	return {
		update: (updatedParameter) => {...},
		destroy: () => {...}
	};
}
```

```dts
interface ActionReturn<
	Parameter = undefined,
	Attributes extends Record<string, any> = Record<
		never,
		any
	>
> {/*…*/}
```

```dts
update?: (parameter: Parameter) => void;
```

```dts
destroy?: () => void;
```

# svelte/animate

```js
// @noErrors
import { flip } from 'svelte/animate';
```

## flip

The flip function calculates the start and end position of an element and animates between them, translating the x and y values.
`flip` stands for [First, Last, Invert, Play](https://aerotwist.com/blog/flip-your-animations/).

```dts
function flip(
	node: Element,
	{
		from,
		to
	}: {
		from: DOMRect;
		to: DOMRect;
	},
	params?: FlipParams
): AnimationConfig;
```

## AnimationConfig

```dts
interface AnimationConfig {/*…*/}
```

```dts
delay?: number;
```

```dts
duration?: number;
```

```dts
easing?: (t: number) => number;
```

```dts
css?: (t: number, u: number) => string;
```

```dts
tick?: (t: number, u: number) => void;
```

## FlipParams

```dts
interface FlipParams {/*…*/}
```

```dts
delay?: number;
```

```dts
duration?: number | ((len: number) => number);
```

```dts
easing?: (t: number) => number;
```
