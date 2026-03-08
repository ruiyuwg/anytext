## Horizontal slider with styles

#### Example: customSlider

```tsx
// Demo.tsx
import { useState } from 'react';
import { IconGripVertical } from '@tabler/icons-react';
import { clamp, useMove } from '@mantine/hooks';
import classes from './Demo.module.css';

function Demo() {
  const [value, setValue] = useState(0.3);
  const { ref } = useMove(({ x }) => setValue(clamp(x, 0.1, 0.9)));
  const labelFloating = value < 0.2 || value > 0.8;

  return (
    <div className={classes.root}>
      <div className={classes.track} ref={ref}>
        <div
          className={classes.filled}
          style={{
            width: `calc(${value * 100}% - var(--thumb-width) / 2 - var(--thumb-offset) / 2)`,
          }}
        >
          <span className={classes.label} data-floating={labelFloating || undefined} data-filled>
            {(value * 100).toFixed(0)}
          </span>
        </div>

        <div
          className={classes.empty}
          style={{
            width: `calc(${(1 - value) * 100}% - var(--thumb-width) / 2 - var(--thumb-offset) / 2)`,
          }}
        >
          <span className={classes.label} data-floating={labelFloating || undefined}>
            {((1 - value) * 100).toFixed(0)}
          </span>
        </div>

        <div
          className={classes.thumb}
          style={{ left: `calc(${value * 100}% - var(--thumb-width) / 2)` }}
        >
          <IconGripVertical stroke={1.5} />
        </div>
      </div>
    </div>
  );
}

// Demo.module.css
.root {
  padding-top: 20px;
}

.track {
  --thumb-width: 20px;
  --thumb-offset: 10px;

  position: relative;
  height: 60px;
  display: flex;
}

.filled {
  height: 100%;
  margin-right: calc(var(--thumb-offset) / 2 + var(--thumb-width) / 2);
  border-radius: var(--mantine-radius-md);
  background-color: var(--mantine-color-blue-filled);
  display: flex;
  align-items: center;
  padding-inline: 10px;
}

.empty {
  height: 100%;
  margin-left: calc(var(--thumb-offset) / 2 + var(--thumb-width) / 2);
  border-radius: var(--mantine-radius-md);
  background-color: var(--mantine-color-gray-1);
  display: flex;
  align-items: center;
  padding-inline: 10px;
  justify-content: flex-end;

  @mixin dark {
    background-color: var(--mantine-color-dark-6);
  }
}

.thumb {
  position: absolute;
  background-color: var(--mantine-color-white);
  border: 1px solid var(--mantine-color-gray-2);
  border-radius: var(--mantine-radius-md);
  height: 100%;
  width: var(--thumb-width);
  top: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--mantine-color-gray-5);

  @mixin dark {
    background-color: var(--mantine-color-dark-6);
    border-color: var(--mantine-color-dark-4);
    color: var(--mantine-color-dark-0);
  }
}

.label {
  font-size: var(--mantine-font-size-xl);
  font-weight: 700;
  transition:
    transform 100ms ease,
    color 100ms ease;

  &[data-filled] {
    color: var(--mantine-color-white);
  }

  &[data-floating] {
    transform: translateY(-44px) translateX(-10px);
    color: var(--mantine-color-black);

    &:not([data-filled]) {
      transform: translateY(-44px) translateX(10px);
    }

    @mixin dark {
      color: var(--mantine-color-white);
    }
  }
}
```

## Vertical slider

Moving the slider down increases the value, to reverse that set value to `1 - y` in your `setValue` function:

## Color picker

## clampUseMovePosition

`clampUseMovePosition` function can be used to clamp `x` and `y` values to `0-1` range.
It is useful when you want to use external events to change the value, for example changing value with keyboard arrows:

```tsx
import { clampUseMovePosition } from '@mantine/hooks';

clampUseMovePosition({ x: 0.5, y: 0.5 }); // -> { x: 0.5, y: 0.5 }
clampUseMovePosition({ x: 1.5, y: 0.5 }); // -> { x: 1, y: 0.5 }
clampUseMovePosition({ x: -0.5, y: 0.5 }); // -> { x: 0, y: 0.5 }
```

## UseMovePosition

`@mantine/hooks` exports `UseMovePosition` type, it can be used as a type parameter for `useState`:

```tsx
import { useState } from 'react';
import { UseMovePosition } from '@mantine/hooks';

const [value, setValue] = useState<UseMovePosition>({
  x: 0.5,
  y: 0.5,
});
```

## Definition

```tsx
interface UseMovePosition {
  x: number;
  y: number;
}

interface UseMoveHandlers {
  onScrubStart?: () => void;
  onScrubEnd?: () => void;
}

interface UseMoveReturnValue<T extends HTMLElement = any> {
  ref: React.RefCallback<T | null>;
  active: boolean;
}

function useMove<T extends HTMLElement = any>(
  onChange: (value: UseMovePosition) => void,
  handlers?: UseMoveHandlers,
  dir?: "ltr" | "rtl",
): UseMoveReturnValue<T>
```

## Exported types

`UseMovePosition`, `UseMoveReturnValue` and `UseMoveHandlers` types are exported from `@mantine/hooks` package,
you can import them in your application:

```tsx
import type { UseMovePosition, UseMoveHandlers, UseMoveReturnValue } from '@mantine/hooks';
```

### useMutationObserver

Package: @mantine/hooks
Import: import { UseMutationObserver } from '@mantine/hooks';

## Usage

`use-mutation-observer` is a wrapper for the [MutationObserver](https://developer.mozilla.org/en-US/docs/Web/API/MutationObserver).
It allows subscribing changes being made to the DOM tree.

## Target element

If you cannot pass `ref` to the target element, you can pass a function to resolve
the target element as a third argument.

## Definition

```tsx
function useMutationObserver<Element extends HTMLElement>(
  callback: MutationCallback,
  options: MutationObserverInit,
  target?: HTMLElement | (() => HTMLElement) | null
): RefObject<Element>;
```

### useNetwork

Package: @mantine/hooks
Import: import { UseNetwork } from '@mantine/hooks';

## Usage

`use-network` hook returns an object with current connection status:

## Browser support

`use-network` uses experimental `navigator.connection`, see [browser compatibility table](https://developer.mozilla.org/en-US/docs/Web/API/Navigator/connection#browser_compatibility).

## Definition

```tsx

interface UserNetworkReturnValue {
  online: boolean;
  downlink?: number;
  downlinkMax?: number;
  effectiveType?: 'slow-2g' | '2g' | '3g' | '4g';
  rtt?: number;
  saveData?: boolean;
  type?: 'bluetooth' | 'cellular' | 'ethernet' | 'wifi' | 'wimax' | 'none' | 'other' | 'unknown';
}

function useNetwork(): UserNetworkReturnValue;
```

## Exported types

`UserNetworkReturnValue` type is exported from `@mantine/hooks` package,
you can import it in your application:

```tsx
import type { UserNetworkReturnValue } from '@mantine/hooks';
```

### useOrientation

Package: @mantine/hooks
Import: import { UseOrientation } from '@mantine/hooks';

## Usage

`useOrientation` returns an object with the current orientation of the device:

## Definition

```tsx
interface UseOrientationOptions {
  /** Default angle value, used until the real can be retrieved
   * (during server side rendering and before js executes on the page)
   * If not provided, the default value is `0`
   * */
  defaultAngle?: number;

  /** Default angle value, used until the real can be retrieved
   * (during server side rendering and before js executes on the page)
   * If not provided, the default value is `'landscape-primary'`
   * */
  defaultType?: OrientationType;

  /** If true, the initial value will be resolved in useEffect (ssr safe)
   *  If false, the initial value will be resolved in useLayoutEffect (ssr unsafe)
   *  True by default.
   */
  getInitialValueInEffect?: boolean;
}

interface UseOrientationReturnType {
  angle: number;
  type: OrientationType;
}

function useOrientation(options?: UseOrientationOptions): UseOrientationReturnType;
```

## Exported types

`UseOrientationOptions` and `UseOrientationReturnType` types are exported from `@mantine/hooks` package,
you can import them in your application:

```tsx
import type { UseOrientationOptions, UseOrientationReturnType } from '@mantine/hooks';
```

### useOs

Package: @mantine/hooks
Import: import { UseOs } from '@mantine/hooks';

## Usage

`use-os` returns user's os. Possible values are: `undetermined`, `macos`, `ios`, `windows`, `android`, `linux`, `chromeos`.
If the OS cannot be identified, for example, during server side rendering `undetermined` will be returned.

## Definition

```tsx
type UseOSReturnValue =
  | 'undetermined'
  | 'macos'
  | 'ios'
  | 'windows'
  | 'android'
  | 'linux'
  | 'chromeos';

interface UseOsOptions {
  getValueInEffect: boolean;
}

function getOS(options?: UseOsOptions): UseOSReturnValue;
```

## Exported types

`UseOsOptions` and `UseOSReturnValue` types are exported from `@mantine/hooks` package,
you can import them in your application:

```tsx
import type { UseOsOptions, UseOSReturnValue } from '@mantine/hooks';
```

### usePageLeave

Package: @mantine/hooks
Import: import { UsePageLeave } from '@mantine/hooks';

## Usage

`use-page-leave` calls given function when mouse leaves the page:

## Definition

```tsx
function usePageLeave(onPageLeave: () => void): void;
```

### usePagination

Package: @mantine/hooks
Import: import { UsePagination } from '@mantine/hooks';

## Usage

`use-pagination` is a state management hook for [Pagination](https://mantine.dev/core/pagination/) component,
it manages pagination with controlled and uncontrolled state:

#### Example: usage

```tsx
function Demo() {
  return <Pagination total={10} />;
}
```

```tsx
import { usePagination } from '@mantine/hooks';

const pagination = usePagination({ total: 10, initialPage: 1 });

pagination.range; // -> [1, 2, 3, 4, 5, 'dots', 10];

pagination.setPage(5);
pagination.range; // -> [1, 'dots', 4, 5, 6, 'dots', 10];

pagination.next();
pagination.range; // -> [1, 'dots', 5, 6, 7, 'dots', 10];

pagination.previous();
pagination.range; // -> [1, 'dots', 4, 5, 6, 'dots', 10];

pagination.last();
pagination.range; // -> [1, 'dots', 6, 7, 8, 9, 10];

pagination.first();
pagination.range; // -> [1, 2, 3, 4, 5, 'dots', 10];
```

## Controlled

The hook supports controlled mode, provide `page` and `onChange` props to manage state from outside:

```tsx
import { useState } from 'react';
import { usePagination } from '@mantine/hooks';

const [page, onChange] = useState(1);
const pagination = usePagination({ total: 10, page, onChange });

// Will call onChange with 5
pagination.setPage(5);
pagination.range; // -> [1, 'dots', 4, 5, 6, 'dots', 10];

// ... All other examples work the same
```

## Siblings

Control number of active item siblings with `siblings`:

```tsx
import { usePagination } from '@mantine/hooks';

const pagination = usePagination({ total: 20, siblings: 3 });
```

#### Example: siblings

```tsx
import { Text, Pagination } from '@mantine/core';

function Demo() {
  return (
    <>
      <Text mb="xs">1 sibling (default)</Text>
      <Pagination total={20} siblings={1} defaultValue={10} />

      <Text mb="xs" mt="xl">2 siblings</Text>
      <Pagination total={20} siblings={2} defaultValue={10} />

      <Text mb="xs" mt="xl">3 siblings</Text>
      <Pagination total={20} siblings={3} defaultValue={10} />
    </>
  );
}
```

## Boundaries

Control number of items on each boundary with `boundaries`:

```tsx
import { usePagination } from '@mantine/hooks';

const pagination = usePagination({ total: 20, boundaries: 3 });
```

#### Example: boundaries

```tsx
import { Text, Pagination } from '@mantine/core';

function Demo() {
  return (
    <>
      <Text mb="xs">1 boundary (default)</Text>
      <Pagination total={20} boundaries={1} defaultValue={10} />

      <Text mt="xl" mb="xs">2 boundaries</Text>
      <Pagination total={20} boundaries={2} defaultValue={10} />

      <Text mt="xl" mb="xs">3 boundaries</Text>
      <Pagination total={20} boundaries={3} defaultValue={10} />
    </>
  );
}
```

## Definition

```tsx
export interface UsePaginationOptions {
  /** Page selected on initial render, defaults to 1 */
  initialPage?: number;

  /** Controlled active page number */
  page?: number;

  /** Total amount of pages */
  total: number;

  /** Siblings amount on left/right side of selected page, defaults to 1 */
  siblings?: number;

  /** Amount of elements visible on left/right edges, defaults to 1  */
  boundaries?: number;

  /** Callback fired after change of each page */
  onChange?: (page: number) => void;
}

export interface UsePaginationReturnValue {
  /** Array of page numbers and dots */
  range: (number | 'dots')[];

  /** Active page number */
  active: number;

  /** Function to set active page */
  setPage: (page: number) => void;

  /** Function to go to next page */
  next: () => void;

  /** Function to go to previous page */
  previous: () => void;

  /** Function to go to first page */
  first: () => void;

  /** Function to go to last page */
  last: () => void;
}

function usePagination(settings: UsePaginationOptions): UsePaginationReturnValue;
```

## Exported types

`UsePaginationOptions` and `UsePaginationReturnValue` types are exported from `@mantine/hooks` package,
you can import them in your application:

```tsx
import type { UsePaginationOptions, UsePaginationReturnValue } from '@mantine/hooks';
```

### usePrevious

Package: @mantine/hooks
Import: import { UsePrevious } from '@mantine/hooks';

## Usage

`use-previous` stores the previous value of a state in a ref.
It returns `undefined` on initial render and the previous value of a state after rerender:

## Definition

```tsx
function usePrevious<T>(value: T): T | undefined;
```

### useQueue

Package: @mantine/hooks
Import: import { UseQueue } from '@mantine/hooks';

## Usage

`use-queue` limits the number of data in current state and places the rest of it in a queue.
For example, in [@mantine/notifications](https://mantine.dev/x/notifications/) package number of
notifications that is currently displayed is limited and other new notifications are added to the queue and displayed once
available space appears.

```tsx
import { useQueue } from '@mantine/hooks';

const { state, queue, add, update, cleanQueue } = useQueue({
  initialValues: [1],
  limit: 2,
});

// state -> [1], queue -> []

// When state.length is less that limit, new items are added to state
add(2);
// state -> [1,2], queue -> []

// When state.length is equal to limit, new items are added to queue
add(3, 4, 5, 6);
// state -> [1,2], queue -> [3,4,5,6]

// Use update function to modify items
update((values) => values.map((item) => item * 3));
// state -> [3,6], queue -> [9,12,15,18]

// If you add or remove items in update function,
// they will be divided between queue and state according to limit
// order is always preserved
update((values) => values.filter((item) => item % 2));
// state -> [3,9], queue -> [15]

// Remove all items from queue
cleanQueue();
// state -> [3,9], queue -> []

// Remove all items from queue and state
update(() => []);
// state -> [], queue -> []
```

## API

The hook accepts one argument – a configuration object with keys:

- `initialValues` – optional initial values (divided between state and queue according to limit), defaults to empty array
- `limit` – maximum number of items that state can include, every next item after the limit is exceeded is put in queue

Return value:

- `state` – current state
- `queue` – current queue
- `add` – add any number of items to state or queue
- `update` – apply given function to all items in state and queue, use it to filter, modify or add items
- `cleanQueue` – remove all items from the queue

## Set item type

By default, the hook will get types information from `initialValues` automatically:

```tsx
import { useQueue } from '@mantine/hooks';

const q = useQueue({
  limit: 2,
  initialValues: [
    { name: 'Bob', id: 1 },
    { name: 'Alice', id: 2 },
  ],
});

typeof q.state[number]; // -> { name: string; id: number; }
```

If you do not provide `initialValues`, pass in type for state item:

```tsx
import { useQueue } from '@mantine/hooks';

const q = useQueue<{ name: string; id: number }>({
  limit: 2,
  initialValues: [],
});

q.add({ name: 'Bob', id: 1 });
```

## Definition

```tsx
export interface UseQueueOptions<T> {
  /** Initial values to be added to the queue */
  initialValues?: T[];

  /** Maximum number of items in the state */
  limit: number;
}

export interface UseQueueReturnValue<T> {
  /** Array of items in the queue */
  queue: T[];

  /** Array of items in the state */
  state: T[];

  /** Function to add items to state or queue */
  add: (...items: T[]) => void;

  /** Function to apply updates to current items */
  update: (fn: (state: T[]) => T[]) => void;

  /** Function to clear the queue */
  cleanQueue: () => void;
}

function useQueue<T>(options: UseQueueOptions<T>): UseQueueReturnValue<T>
```

## Exported types

`UseQueueOptions` and `UseQueueReturnValue` types are exported from `@mantine/hooks` package,
you can import them in your application:

```tsx
import type { UseQueueOptions, UseQueueReturnValue } from '@mantine/hooks';
```

### useRadialMove

Package: @mantine/hooks
Import: import { UseRadialMove } from '@mantine/hooks';

## Usage

`use-radial-move` hook can be used to create custom radial sliders, for example [AngleSlider](https://mantine.dev/core/angle-slider)
component is based on this hook. It works similar to [use-move](https://mantine.dev/hooks/use-move) hook.

Example of creating custom radial slider:

## Definition

```tsx
interface UseRadialMoveOptions {
  /** Number by which value is incremented/decremented with mouse and touch events, `0.01` by default */
  step?: number;

  /** Called in `onMouseUp` and `onTouchEnd` events with the current value */
  onChangeEnd?: (value: number) => void;

  /** Called in `onMouseDown` and `onTouchStart` events */
  onScrubStart?: () => void;

  /** Called in `onMouseUp` and `onTouchEnd` events */
  onScrubEnd?: () => void;
}

interface UseRadialMoveReturnValue<T extends HTMLElement = any> {
  /** Ref to be passed to the element that should be used for radial move */
  ref: React.RefCallback<T | null>;

  /** Indicates whether the radial move is active */
  active: boolean;
}

function useRadialMove<T extends HTMLElement = HTMLDivElement>(
  onChange: (value: number) => void,
  options?: UseRadialMoveOptions,
): UseRadialMoveReturnValue<T>;
```

## Exported types

`UseRadialMoveOptions` and `UseRadialMoveReturnValue` types are exported from `@mantine/hooks` package,
you can import them in your application:

```tsx
import type { UseRadialMoveOptions, UseRadialMoveReturnValue } from '@mantine/hooks';
```

### useReducedMotion

Package: @mantine/hooks
Import: import { UseReducedMotion } from '@mantine/hooks';

## Usage

`use-reduced-motion` detects if user [prefers to reduce motion](https://developer.mozilla.org/en-US/docs/Web/CSS/@media/prefers-reduced-motion).
It uses [use-media-query](https://mantine.dev/hooks/use-media-query/) hook under the hood.
Hook relies on `window.matchMedia()` [API](https://developer.mozilla.org/en-US/docs/Web/API/Window/matchMedia)
and will always return `false` if api is not available (for example, during server side rendering), unless the initial value is provided in the first argument.

Use hook to detect if user prefers to reduce motion (`(prefers-reduced-motion: reduce)` media query) and set animations duration based on this value.

## Definition

```tsx
interface UseMediaQueryOptions {
  getInitialValueInEffect: boolean;
}

function useReducedMotion(initialValue?: boolean, options?: UseMediaQueryOptions): boolean;
```

### useResizeObserver

Package: @mantine/hooks
Import: import { UseResizeObserver } from '@mantine/hooks';

## Usage

## API

`use-resize-observer` returns a `ref` object that should be passed to the observed element, and the current element content rect, as returned by `ResizeObserver`'s callback `entry.contentRect`.
See [Resize Observer API](https://developer.mozilla.org/en-US/docs/Web/API/ResizeObserver) documentation to learn more.
On the first render (as well as during SSR), or when no element is being observed, all of the properties are equal to `0`.

```tsx
import { useResizeObserver } from '@mantine/hooks';

function Demo() {
  const [ref, rect] = useResizeObserver();
  return <div ref={ref}>Observed</div>;
}
```

See also [use-element-size](https://mantine.dev/hooks/use-element-size/) hook in case you need to subscribe only to `width` and `height`.

## Definition

```tsx
type ObserverRect = Omit<DOMRectReadOnly, 'toJSON'>;

function useResizeObserver<T extends HTMLElement = any>(
  options?: ResizeObserverOptions
): readonly [React.RefObject<T>, ObserverRect];
```

### useScrollIntoView

Package: @mantine/hooks
Import: import { UseScrollIntoView } from '@mantine/hooks';

## Usage

`use-scroll-into-view` handles scroll behavior for any scrollable element. Basic usage works the same way as `element.scrollIntoView()`.
Hook adjusts scrolling animation with respect to the `reduced-motion` user preference.

## API

The hook is configured with settings object:

- `onScrollFinish` – function that will be called after scroll animation
- `easing` – custom math easing function
- `duration` - duration of scroll animation in milliseconds
- `axis` - axis of scroll
- `cancelable` - indicator if animation may be interrupted by user scrolling
- `offset` - additional distance between the nearest edge and element
- `isList` - indicator that prevents content jumping in scrolling lists with multiple targets, for example Select, Carousel

Hook returns an object with:

- `scrollIntoView` – function that starts scroll animation
- `cancel` – function that stops scroll animation
- `targetRef` - ref of target HTML node
- `scrollableRef` - ref of scrollable parent HTML element, if not used document element will be used

Returned `scrollIntoView` function accepts single optional argument `alignment` - optional target element alignment relatively to parent based on current axis.

```tsx
import { useScrollIntoView } from '@mantine/hooks';

const { scrollIntoView } = useScrollIntoView();

scrollIntoView({ alignment: 'center' });
```

## Easing

The hook accept custom `easing` math function to control the flow of animation.
It takes `t` argument, which is a number between `0` and `1`.

Default easing is `easeInOutQuad` - more info [here](https://easings.net/#easeInOutQuad).
You can find other popular examples on [easings.net](https://easings.net/)

```tsx
import { useScrollIntoView } from '@mantine/hooks';

useScrollIntoView({
  easing: (t) => (t < 0.5 ? 16 * t ** 5 : 1 - (-2 * t + 2) ** 5 / 2), // easeInOutQuint
});
```

## Parent node

## Scroll X axis

## Definition

```tsx
interface UseScrollIntoViewAnimation {
  /** Target element alignment relatively to parent based on current axis */
  alignment?: 'start' | 'end' | 'center';
}

interface UseScrollIntoViewOptions {
  /** Callback fired after scroll */
  onScrollFinish?: () => void;

  /** Duration of scroll in milliseconds */
  duration?: number;

  /** Axis of scroll */
  axis?: 'x' | 'y';

  /** Custom mathematical easing function */
  easing?: (t: number) => number;

  /** Additional distance between nearest edge and element */
  offset?: number;

  /** Indicator if animation may be interrupted by user scrolling */
  cancelable?: boolean;

  /** Prevents content jumping in scrolling lists with multiple targets */
  isList?: boolean;
}

export interface UseScrollIntoViewReturnValue<
  Target extends HTMLElement = any,
  Parent extends HTMLElement | null = null,
> {
  scrollableRef: React.RefObject<Parent | null>;
  targetRef: React.RefObject<Target | null>;
  scrollIntoView: (params?: UseScrollIntoViewAnimation) => void;
  cancel: () => void;
}

function useScrollIntoView<
  Target extends HTMLElement = any,
  Parent extends HTMLElement | null = null
>(
  options?: UseScrollIntoViewOptions,
): UseScrollIntoViewReturnValue<Target, Parent>
```

## Exported types

`UseScrollIntoViewOptions` and `UseScrollIntoViewReturnValue` types are exported from `@mantine/hooks` package,
you can import them in your application:

```tsx
import type { UseScrollIntoViewOptions, UseScrollIntoViewReturnValue } from '@mantine/hooks';
```

### useScrollSpy

Package: @mantine/hooks
Import: import { UseScrollSpy } from '@mantine/hooks';

## Usage

`use-scroll-spy` hook tracks scroll position and returns index of the
element that is currently in the viewport. It is useful for creating
table of contents components (like in mantine.dev sidebar on the right side)
and similar features.

## Hook options

`use-scroll-spy` accepts an object with options:

- `selector` - selector to get headings, by default it is `'h1, h2, h3, h4, h5, h6'`
- `getDepth` - a function to retrieve depth of heading, by default depth is calculated based on tag name
- `getValue` - a function to retrieve heading value, by default `element.textContent` is used
- `scrollHost` - host element to attach scroll event listener, if not provided, `window` is used
- `offset` - offset from the top of the viewport to use when determining the active heading, by default `0` is used

Example of using custom options to get headings with `data-heading` attribute:

## Reinitializing hook data

By default, `use-scroll-spy` does not track changes in the DOM. If you want
to update headings data after the parent component has mounted, you can use
`reinitialize` function:

```tsx
import { useEffect } from 'react';
import { useScrollSpy } from '@mantine/hooks';

function Demo({ dependency }) {
  const { reinitialize } = useScrollSpy();

  useEffect(() => {
    reinitialize();
  }, [dependency]);

  return null;
}
```

## Definition

All types used in the definition are exported from `@mantine/hooks` package.

```tsx
interface UseScrollSpyHeadingData {
  /** Heading depth, 1-6 */
  depth: number;

  /** Heading text content value */
  value: string;

  /** Heading id */
  id: string;

  /** Function to get heading node */
  getNode: () => HTMLElement;
}

interface UseScrollSpyOptions {
  /** Selector to get headings, `'h1, h2, h3, h4, h5, h6'` by default */
  selector?: string;

  /** A function to retrieve depth of heading, by default depth is calculated based on tag name */
  getDepth?: (element: HTMLElement) => number;

  /** A function to retrieve heading value, by default `element.textContent` is used */
  getValue?: (element: HTMLElement) => string;

  /** Host element to attach scroll event listener, if not provided, `window` is used */
  scrollHost?: HTMLElement;

  /** Offset from the top of the viewport to use when determining the active heading, `0` by default */
  offset?: number;
}

interface UseScrollSpyReturnType {
  /** Index of the active heading in the `data` array */
  active: number;

  /** Headings data. If not initialize, data is represented by an empty array. */
  data: UseScrollSpyHeadingData[];

  /** True if headings value have been retrieved from the DOM. */
  initialized: boolean;

  /** Function to update headings values after the parent component has mounted. */
  reinitialize: () => void;
}

function useScrollSpy(options?: UseScrollSpyOptions): UseScrollSpyReturnType
```

## Exported types

`UseScrollSpyOptions` and `UseScrollSpyReturnType` types are exported from `@mantine/hooks` package,
you can import them in your application:

```tsx
import type { UseScrollSpyOptions, UseScrollSpyReturnType } from '@mantine/hooks';
```

### useSelection

Package: @mantine/hooks
Import: import { UseSelection } from '@mantine/hooks';

## Usage

## Definition

```tsx
export interface UseSelectionInput<T> {
  /** The array of items to select from */
  data: T[];

  /** The initial selection, empty array by default */
  defaultSelection?: T[];

  /** If true, selection is reset when data changes */
  resetSelectionOnDataChange?: boolean;
}

export interface UseSelectionHandlers<T> {
  /** Add an item to the selection */
  select: (selected: T) => void;

  /** Remove an item from the selection */
  deselect: (deselected: T) => void;

  /** Toggle an item's selection state */
  toggle: (toggled: T) => void;

  /** Returns true if all items from the `data` are selected */
  isAllSelected: () => boolean;

  /** Returns true if at least one item from the `data` is selected */
  isSomeSelected: () => boolean;

  /** Set the selection to a specific array of items */
  setSelection: (selection: T[]) => void;

  /** Clear all selections */
  resetSelection: () => void;
}

export type UseSelectionReturnValue<T> = readonly [T[], UseSelectionHandlers<T>];

function useSelection<T>(input: UseSelectionInput<T>): UseSelectionReturnValue<T>
```

## Exported types

`UseSelectionInput`, `UseSelectionReturnValue` and `UseSelectionHandlers` types are exported from `@mantine/hooks` package,
you can import them in your application:

```tsx
import type { UseSelectionInput, UseSelectionReturnValue, UseSelectionHandlers } from '@mantine/hooks';
```

### useSetState

Package: @mantine/hooks
Import: import { UseSetState } from '@mantine/hooks';

## Usage

`use-set-state` works similar to how `this.setState` works in class components – it shallow merges state partial
into current state.

```tsx
import { useSetState } from '@mantine/hooks';

const [state, setState] = useSetState({
  name: 'John',
  age: 35,
  job: 'Engineer',
});

state; // -> { name: 'John', age: 35, job: 'Engineer' }

setState({ name: 'Jane' }); // -> { name: 'Jane', age: 35, job: 'Engineer' }
setState({ age: 25, job: 'Manager' }); // -> { name: 'Jane', age: 25, job: 'Manager' }
setState((current) => ({ age: current.age + 7 })); // -> { name: 'Jane', age: 32, job: 'Manager' }
```

Note that it can work only with objects: primitive values and arrays are not supported:

```tsx
import { useSetState } from '@mantine/hooks';

useSetState([1, 2, 3]); // -> will not work
useSetState(1); // -> will not work
useSetState({ skills: ['JavaScript', 'TypeScript'] }); // -> works fine
```

## Definition

```tsx
type UseSetStateCallback<T> = (
  state: Partial<T> | ((currentState: T) => Partial<T>)
) => void;

type UseSetStateReturnValue<T> = [T, UseSetStateCallback<T>];

function useSetState<T extends Record<string, any>>(initialState: T): UseSetStateReturnValue<T>
```

## Exported types

`UseSetStateCallback` and `UseSetStateReturnValue` types are exported from `@mantine/hooks` package,
you can import them in your application:

```tsx
import type { UseSetStateCallback, UseSetStateReturnValue } from '@mantine/hooks';
```

### useSet

Package: @mantine/hooks
Import: import { UseSet } from '@mantine/hooks';

## Usage

`useSet` return [Set](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set)
object that can be used as React state: `add`, `clear` and `delete` methods trigger state updates.

## Definition

```tsx
function useSet<T>(values?: T[]): Set<T>;
```

### useShallowEffect

Package: @mantine/hooks
Import: import { UseShallowEffect } from '@mantine/hooks';

## Usage

`use-shallow-effect` works exactly like `useEffect`, but performs shallow dependencies comparison instead of referential comparison:

```tsx
import { useEffect } from 'react';
import { useShallowEffect } from '@mantine/hooks';

// Will be called on each render
useEffect(() => {}, [{ a: 1 }]);

// Will be called only once
useShallowEffect(() => {}, [{ a: 1 }]);
```

Hook works with primitive values, arrays and objects:

```tsx
import { useShallowEffect } from '@mantine/hooks';

// Primitive values are handled like in useEffect
useShallowEffect(() => {}, [1, 2, 3]);

// Arrays with primitive values will not trigger callback
useShallowEffect(() => {}, [[1], [2], [3]]);

// Objects with primitive values will not trigger callback
useShallowEffect(() => {}, [{ a: 1 }, { b: 2 }]);

// Arrays with objects will trigger callback since values are not shallow equal
useShallowEffect(() => {}, [[{ a: 1 }], [{ b: 2 }]]);
```

## Definition

```tsx
function useShallowEffect(
  cb: () => void,
  dependencies?: React.DependencyList
): void;
```

### useStateHistory

Package: @mantine/hooks
Import: import { UseStateHistory } from '@mantine/hooks';

## Usage

`useStateHistory` hook is used to create a state with history, it returns current value, handlers to
go back/forward and a history object with all previous values and current index.

## Definition

`UseStateHistoryHandlers` and `StateHistory` interfaces are exported from `@mantine/hooks`
package.

```tsx
interface UseStateHistoryHandlers<T> {
  set: (value: T) => void;
  back: (steps?: number) => void;
  forward: (steps?: number) => void;
  reset: () => void;
}

interface UseStateHistoryValue<T> {
  history: T[];
  current: number;
}

type UseStateHistoryReturnValue<T> = [
  T,
  UseStateHistoryHandlers<T>,
  UseStateHistoryValue<T>,
];

function useStateHistory<T>(initialValue: T): UseStateHistoryReturnValue<T>;
```

## Exported types

`UseStateHistoryHandlers`, `UseStateHistoryReturnValue` and `UseStateHistoryValue` types are exported from `@mantine/hooks` package,
you can import them in your application:

```tsx
import type { UseStateHistoryHandlers, UseStateHistoryReturnValue, UseStateHistoryValue } from '@mantine/hooks';
```

### useTextSelection

Package: @mantine/hooks
Import: import { UseTextSelection } from '@mantine/hooks';

## Usage

`use-text-selection` returns current text selection:

## Definition

```tsx
function useTextSelection(): Selection | null;
```

### useThrottledCallback

Package: @mantine/hooks
Import: import { UseThrottledCallback } from '@mantine/hooks';

## Usage

`useThrottledCallback` accepts a function and a wait time in milliseconds.
It returns a throttled version of the function that will only be called at most once every `wait` milliseconds.

## Definition

```tsx
function useThrottledCallback<T extends (...args: any[]) => any>(
  callback: T,
  wait: number
): (...args: Parameters<T>) => void;
```

### useThrottledState

Package: @mantine/hooks
Import: import { UseThrottledState } from '@mantine/hooks';

## Usage

`useThrottledState` works similar to `useState` but throttles the state updates.
`setThrottledState` handler in the example below will be called at most once every 1000ms.

## Definition

```tsx
function useThrottledState<T = any>(
  defaultValue: T,
  wait: number
): readonly [T, (newValue: React.SetStateAction<T>) => void];
```

### useThrottledValue

Package: @mantine/hooks
Import: import { UseThrottledValue } from '@mantine/hooks';

## Usage

`useThrottledValue` accepts a value and a wait time in milliseconds.
It returns a throttled value that cannot change more than once every `wait` milliseconds.

## Definition

```tsx
function useThrottledValue<T>(value: T, wait: number): T;
```

### useTimeout

Package: @mantine/hooks
Import: import { UseTimeout } from '@mantine/hooks';

## Usage

## API

```tsx
import { useTimeout } from '@mantine/hooks';

const { start, clear } = useTimeout(callback, delay, {
  autoInvoke: true,
});
```

Arguments:

- `callback` – function that will be called after the timer elapses
- `delay` – number of milliseconds the timer should wait before the specified function is executed
- `options: { autoInvoke }` - determines whether the timer should be started on mount, defaults to false

Return object:

- `start` - starts the timer
- `clear` – cancels the timer

## Definition

```tsx
interface UseTimeoutOptions {
  autoInvoke: boolean;
}

interface UseTimeoutReturnValue {
  start: (...args: any[]) => void;
  clear: () => void;
}

function useTimeout(
  callback: (...args: any[]) => void,
  delay: number,
  options?: UseTimeoutOptions,
): UseTimeoutReturnValue
```

## Exported types

`UseTimeoutOptions` and `UseTimeoutReturnValue` types are exported from `@mantine/hooks` package,
you can import them in your application:

```tsx
import type { UseTimeoutOptions, UseTimeoutReturnValue } from '@mantine/hooks';
```

### useToggle

Package: @mantine/hooks
Import: import { UseToggle } from '@mantine/hooks';

## Usage

`use-toggle` implements a common state pattern – it switches state between given values:

## API

The hook accepts an array as single argument, the first option will be used as the default value.

The hook returns an array with state value and toggle function:

```tsx
import { useToggle } from '@mantine/hooks';

const [value, toggle] = useToggle(['light', 'dark'] as const);

toggle(); // -> value == 'light'
toggle(); // -> value == 'dark'

// You can force specific value, in this case state will be set to given value
toggle('dark'); // -> value == 'dark'
```

If you do not provide an array with options, then `use-toggle` will use boolean values with `false` as default:

```tsx
import { useToggle } from '@mantine/hooks';

const [value, toggle] = useToggle();
// -> value === false
toggle(); // -> value === true
```

## Set type

By default, TypeScript will guess your type, but in most cases it's better to use const assertion to prevent type widening:

```tsx
import { useToggle } from '@mantine/hooks';

useToggle(['light', 'dark']); // value is string
useToggle(['light', 'dark'] as const); // value is 'dark' | 'light'
useToggle<'dark' | 'light'>(['light', 'dark']); // same as above
```

## Definition

```tsx
type UseToggleAction<T> = (value?: React.SetStateAction<T>) => void;
type UseToggleReturnValue<T> = [T, UseToggleAction<T>];

function useToggle<T = boolean>(options?: T[]): UseToggleReturnValue<T>;
```

## Exported types

`UseToggleReturnValue` type is exported from `@mantine/hooks` package,
you can import it in your application:

```tsx
import type { UseToggleReturnValue } from '@mantine/hooks';
```

### useUncontrolled

Package: @mantine/hooks
Import: import { UseUncontrolled } from '@mantine/hooks';

## Usage

`use-uncontrolled` manages state for both controlled and uncontrolled components:

```tsx
import { useUncontrolled } from '@mantine/hooks';

interface CustomInputProps {
  value?: string;
  defaultValue?: string;
  onChange?: (value: string) => void;
}

function CustomInput({
  value,
  defaultValue,
  onChange,
}: CustomInputProps) {
  const [_value, handleChange] = useUncontrolled({
    value,
    defaultValue,
    finalValue: 'Final',
    onChange,
  });

  return (
    <input
      type="text"
      value={_value}
      onChange={(event) => handleChange(event.currentTarget.value)}
    />
  );
}
```

## Set value type

By default, the hook will set type automatically, but you can provide your own type:

```tsx
import { useUncontrolled } from '@mantine/hooks';

function Demo() {
  const [_value, handleChange] = useUncontrolled<number>({
    value: 10,
    defaultValue: 5,
    finalValue: 20,
    onChange: (val) => console.log(val > 10),
  });
}
```

## Definition

```tsx
interface UseUncontrolledOptions<T> {
  /** Value for controlled state */
  value?: T;

  /** Initial value for uncontrolled state */
  defaultValue?: T;

  /** Final value for uncontrolled state when value and defaultValue are not provided */
  finalValue?: T;

  /** Controlled state onChange handler */
  onChange?: (value: T) => void;
}

type UseUncontrolledReturnValue<T> = [
  /** Current value */
  T,

  /** Handler to update the state, passes `value` and `payload` to `onChange` */
  (value: T, ...payload: any[]) => void,

  /** True if the state is controlled, false if uncontrolled */
  boolean,
];

function useUncontrolled<T>(input: UseUncontrolledOptions<T>): UseUncontrolledReturnValue<T>;
```

## Exported types

`UseUncontrolledOptions` and `UseUncontrolledReturnValue` types are exported from `@mantine/hooks` package,
you can import them in your application:

```tsx
import type { UseUncontrolledOptions, UseUncontrolledReturnValue } from '@mantine/hooks';
```

### useValidatedState

Package: @mantine/hooks
Import: import { UseValidatedState } from '@mantine/hooks';

## Usage

`use-validated-state` validates state with a given rule each time state is set.
It returns an object with current validation state, last valid value and current value:

```tsx
import { useValidatedState } from '@mantine/hooks';

const [{ lastValidValue, value, valid }, setValue] =
  useValidatedState('valid', (state) => state === 'valid');

lastValidValue; // -> valid
value; // -> valid
valid; // -> true

setValue('invalid');

lastValidValue; // -> valid
value; // -> invalid
valid; // -> false
```

## Example

## Definition

```tsx
interface UseValidatedStateValue<T> {
  /** Current value */
  value: T;

  /** Last valid value */
  lastValidValue: T | undefined;

  /** True if the current value is valid, false otherwise */
  valid: boolean;
}

type UseValidatedStateReturnValue<T> = [
  /** Current value */
  UseValidatedStateValue<T>,
  /** Handler to update the state, passes `value` and `payload` to `onChange` */
  (value: T) => void,
];

function useValidatedState<T>(
  initialValue: T,
  validate: (value: T) => boolean,
  initialValidationState?: boolean,
): UseValidatedStateReturnValue<T>
```

## Exported types

`UseValidatedStateValue` and `UseValidatedStateReturnValue` types are exported from `@mantine/hooks` package,
you can import them in your application:

```tsx
import type { UseValidatedStateValue, UseValidatedStateReturnValue } from '@mantine/hooks';
```

### useViewportSize

Package: @mantine/hooks
Import: import { UseViewportSize } from '@mantine/hooks';

## Usage

`use-viewport-size` returns current viewport's `width` and `height`, it subscribes to `resize` and `orientationchange` events,
during ssr hook will return `{ width: 0, height: 0 }`:

## Definition

```tsx
function useViewportSize(): {
  height: number;
  width: number;
};
```

### useWindowEvent

Package: @mantine/hooks
Import: import { UseWindowEvent } from '@mantine/hooks';

## Usage

`use-window-event` adds event listener to `window` object on component mount and removes it on unmount:

```tsx
import { useEffect } from 'react';
import { useWindowEvent } from '@mantine/hooks';

const handler = (event: KeyboardEvent) => console.log(event);

// regular way
useEffect(() => {
  window.addEventListener('keydown', handler);
  return () => window.removeEventListener('keydown', handler);
}, []);

// with use-window-event hook
useWindowEvent('keydown', handler);
```

## Example

Search focus with `⌘ + K` on mac or `Ctrl + K` on windows and linux on Mantine docs website:

```tsx
import { useRef } from 'react';
import { useWindowEvent } from '@mantine/hooks';

function Demo() {
  const inputRef = useRef<HTMLInputElement>(null);

  useWindowEvent('keydown', (event) => {
    if (event.code === 'KeyK' && (event.ctrlKey || event.metaKey)) {
      event.preventDefault();
      inputRef.current?.focus();
    }
  });

  return <input ref={inputRef} />;
}
```

## Definition

The hook has the same definition as `window.addEventListener` function:

```tsx
function useWindowEvent<K extends keyof WindowEventMap>(
  type: K,
  listener: (this: Window, ev: WindowEventMap[K]) => any,
  options?: boolean | AddEventListenerOptions
): void;
```

### useWindowScroll

Package: @mantine/hooks
Import: import { UseWindowScroll } from '@mantine/hooks';

## Usage

`use-window-scroll` returns current scroll position and a function to scroll smoothly to given position:

## Definition

```tsx
interface UseWindowScrollPosition {
  x: number;
  y: number;
}

type UseWindowScrollTo = (position: Partial<UseWindowScrollPosition>) => void;
type UseWindowScrollReturnValue = [UseWindowScrollPosition, UseWindowScrollTo];

function useWindowScroll(): UseWindowScrollReturnValue;
```

## Exported types

`UseWindowScrollTo`, `UseWindowScrollPosition` and `UseWindowScrollReturnValue` types are exported from `@mantine/hooks` package,
you can import them in your application:

```tsx
import type { UseWindowScrollTo, UseWindowScrollPosition, UseWindowScrollReturnValue } from '@mantine/hooks';
```

## DATES COMPONENTS AND FEATURES

Primary Package: @mantine/dates

### Calendar

Package: @mantine/dates
Import: import { Calendar } from '@mantine/dates';
Description: Base component for custom date pickers

## Usage

Use `Calendar` component to create custom date pickers if [DatePicker](https://mantine.dev/dates/date-picker/)
component does not meet your requirements. `Calendar` supports all [DatePicker](https://mantine.dev/dates/date-picker/)
props and some other props that are listed in props table – check it out to learn about all component features.

By default, `Calendar` works the same way as [DatePicker](https://mantine.dev/dates/date-picker/) component but does not
include any logic of dates selection:

#### Example: usage

```tsx
import { Calendar } from '@mantine/dates';

function Demo() {
  return <Calendar />;
}
```
