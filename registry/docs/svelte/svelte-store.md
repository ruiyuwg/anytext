# svelte/store

```js
// @noErrors
import {
	derived,
	fromStore,
	get,
	readable,
	readonly,
	toStore,
	writable
} from 'svelte/store';
```

## derived

Derived value store by synchronizing one or more readable stores and
applying an aggregation function over its input values.

```dts
function derived<S extends Stores, T>(
	stores: S,
	fn: (
		values: StoresValues<S>,
		set: (value: T) => void,
		update: (fn: Updater<T>) => void
	) => Unsubscriber | void,
	initial_value?: T | undefined
): Readable<T>;
```

```dts
function derived<S extends Stores, T>(
	stores: S,
	fn: (values: StoresValues<S>) => T,
	initial_value?: T | undefined
): Readable<T>;
```

## fromStore

```dts
function fromStore<V>(store: Writable<V>): {
	current: V;
};
```

```dts
function fromStore<V>(store: Readable<V>): {
	readonly current: V;
};
```

## get

Get the current value from a store by subscribing and immediately unsubscribing.

```dts
function get<T>(store: Readable<T>): T;
```

## readable

Creates a `Readable` store that allows reading by subscription.

```dts
function readable<T>(
	value?: T | undefined,
	start?: StartStopNotifier<T> | undefined
): Readable<T>;
```

## readonly

Takes a store and returns a new one derived from the old one that is readable.

```dts
function readonly<T>(store: Readable<T>): Readable<T>;
```

## toStore

```dts
function toStore<V>(
	get: () => V,
	set: (v: V) => void
): Writable<V>;
```

```dts
function toStore<V>(get: () => V): Readable<V>;
```

## writable

Create a `Writable` store that allows both updating and reading by subscription.

```dts
function writable<T>(
	value?: T | undefined,
	start?: StartStopNotifier<T> | undefined
): Writable<T>;
```

## Readable

Readable interface for subscribing.

```dts
interface Readable<T> {/*…*/}
```

```dts
subscribe(this: void, run: Subscriber<T>, invalidate?: () => void): Unsubscriber;
```

- `run` subscription callback
- `invalidate` cleanup callback

Subscribe on value changes.

## StartStopNotifier

Start and stop notification callbacks.
This function is called when the first subscriber subscribes.

```dts
type StartStopNotifier<T> = (
	set: (value: T) => void,
	update: (fn: Updater<T>) => void
) => void | (() => void);
```

## Subscriber

Callback to inform of a value updates.

```dts
type Subscriber<T> = (value: T) => void;
```

## Unsubscriber

Unsubscribes from value updates.

```dts
type Unsubscriber = () => void;
```

## Updater

Callback to update a value.

```dts
type Updater<T> = (value: T) => T;
```

## Writable

Writable interface for both updating and subscribing.

```dts
interface Writable<T> extends Readable<T> {/*…*/}
```

```dts
set(this: void, value: T): void;
```

- `value` to set

Set value and inform subscribers.

```dts
update(this: void, updater: Updater<T>): void;
```

- `updater` callback

Update value using callback and inform subscribers.
