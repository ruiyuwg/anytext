## Usage

`@mantine/hooks` package can be used in any web React application, state
management hooks (like [use-pagination](https://mantine.dev/hooks/use-pagination) or [use-queue](https://mantine.dev/hooks/use-queue))
are also compatible with React Native. The package can be used even if you
do not use Mantine components or other Mantine libraries – it is standalone
and does not have any dependencies except React.

Example of using [use-move](https://mantine.dev/hooks/use-move) hook to create a custom slider:

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

## License

MIT

### useClickOutside

Package: @mantine/hooks
Import: import { UseClickOutside } from '@mantine/hooks';

## Usage

## API

`use-click-outside` hook accepts 3 arguments:

- `handler` – function that is called on outside click
- `events` – optional list of events that trigger outside click, `['mousedown', 'touchstart']` by default
- `nodes` - optional list of nodes that should not trigger outside click event

The hook returns a `ref` object that must be passed to the element
based on which outside clicks should be captured.

```tsx
import { useClickOutside } from '@mantine/hooks';

function Example() {
  const handleClickOutside = () =>
    console.log('Clicked outside of div');
  const ref = useClickOutside(handleClickOutside);
  return <div ref={ref} />;
}
```

## Change events

By default, `use-click-outside` listens to `mousedown` and `touchstart` events,
you can change these events by passing an array of events as second argument:

## Multiple nodes

```tsx
// Will work only with useState, not useRef
import { useState } from 'react';
import { Portal } from '@mantine/core';
import { useClickOutside } from '@mantine/hooks';

function Demo() {
  const [dropdown, setDropdown] = useState<HTMLDivElement | null>(
    null
  );
  const [control, setControl] = useState<HTMLDivElement | null>(null);

  useClickOutside(() => console.log('outside'), null, [
    control,
    dropdown,
  ]);

  return (
    // We cannot use root element ref as it does not contain dropdown
    <div>
      <div ref={setControl}>Control</div>
      <Portal>
        <div ref={setDropdown}>Dropdown</div>
      </Portal>
    </div>
  );
}
```

## Set ref type

```tsx
import { useClickOutside } from '@mantine/hooks';

const ref = useClickOutside<HTMLDivElement>(() =>
  console.log('Click outside')
);
```

## Definition

```tsx
function useClickOutside<T extends HTMLElement = any>(
  handler: () => void,
  events?: string[] | null,
  nodes?: HTMLElement[]
): React.RefObject<T>;
```

### useClipboard

Package: @mantine/hooks
Import: import { UseClipboard } from '@mantine/hooks';

## Usage

`use-clipboard` hook provides a simple way to copy text to the clipboard,
track the copied state, handle errors, and reset the state after a given timeout.
It uses [navigator.clipboard.writeText](https://caniuse.com/mdn-api_clipboard_writetext) API under the hood.

## Limitations

Due to security reasons `use-clipboard` hook will not work in iframes and may not work with local files opened with `file://` protocol
(hook will work fine with local websites that are using `http://` protocol). You can learn more about `navigator.clipboard` [here](https://web.dev/async-clipboard/).

## Definition

```tsx
interface UseClipboardOptions {
  /** Time in ms after which the copied state will reset, `2000` by default */
  timeout?: number;
}

interface UseClipboardReturnValue {
  /** Function to copy value to clipboard */
  copy: (value: any) => void;

  /** Function to reset copied state and error */
  reset: () => void;

  /** Error if copying failed */
  error: Error | null;

  /** Boolean indicating if the value was copied successfully */
  copied: boolean;
}

function useClipboard(options?: UseClipboardOptions): UseClipboardReturnValue
```

## Exported types

`UseClipboardOptions` and `UseClipboardReturnValue` types are exported from `@mantine/hooks` package,
you can import them in your application:

```tsx
import type { UseClipboardOptions, UseClipboardReturnValue } from '@mantine/hooks';
```

### useColorScheme

Package: @mantine/hooks
Import: import { UseColorScheme } from '@mantine/hooks';

## Usage

`use-color-scheme` hook returns preferred OS color scheme value (`dark` or `light`)
and subscribes to changes:

## Limitations

`use-color-scheme` uses [use-media-query](https://mantine.dev/hooks/use-media-query/) under the hood.
It relies on `window.matchMedia()` [API](https://developer.mozilla.org/en-US/docs/Web/API/Window/matchMedia)
and always returns the specified initial value (first argument, `light` by default)
if the API is not available (for example, during the server-side rendering).

```tsx
// returns 'dark' on server side
// returns computed value on client side after mount
const colorScheme = useColorScheme('dark');
```

## Get initial value in effect

By default, to support server-side rendering, `use-color-scheme` does not
calculate the initial value on the first render during state initialization.
Instead, the value is calculated in `useEffect` and updated after the parent
component mounts.

If your application does not have server-side rendering, you can enable
immediate calculation of the initial value by changing `getInitialValueInEffect` option:

```tsx
const colorScheme = useColorScheme('light', { getInitialValueInEffect: true });
```

## Definition

```tsx
interface UseMediaQueryOptions {
  getInitialValueInEffect: boolean;
}

type UseColorSchemeValue = 'dark' | 'light';

function useColorScheme(
  initialValue?: UseColorSchemeValue,
  options?: UseMediaQueryOptions,
): UseColorSchemeValue
```

## Exported types

`UseColorSchemeValue` and `UseMediaQueryOptions` types are exported from `@mantine/hooks` package,
you can import them in your application:

```tsx
import type { UseColorSchemeValue, UseMediaQueryOptions } from '@mantine/hooks';
```

### useCounter

Package: @mantine/hooks
Import: import { UseCounter } from '@mantine/hooks';

## Usage

## Definition

```tsx
interface UseCounterOptions {
  min?: number;
  max?: number;
}

interface UseCounterOptions {
  min?: number;
  max?: number;
}

interface UseCounterHandlers {
  increment: () => void;
  decrement: () => void;
  set: (value: number) => void;
  reset: () => void;
}

type UseCounterReturnValue = [number, UseCounterHandlers];

function useCounter(
  initialValue?: number,
  options?: UseCounterOptions,
): UseCounterReturnValue
```

## Exported types

`UseCounterOptions`, `UseCounterHandlers` and `UseCounterReturnValue` types are exported from `@mantine/hooks` package,
you can import them in your application:

```tsx
import type { UseCounterOptions, UseCounterHandlers, UseCounterReturnValue } from '@mantine/hooks';
```

### useDebouncedCallback

Package: @mantine/hooks
Import: import { UseDebouncedCallback } from '@mantine/hooks';

## Usage

`use-debounced-callback` creates a debounced version of the given function,
delaying its execution until a specified time has elapsed since the last invocation.

## flushOnUnmount option

By default, the callback is not fired when the component unmounts.
If you want to execute the pending callback before the component unmounts,
set `flushOnUnmount: true`:

```tsx
import { useDebouncedCallback } from '@mantine/hooks';

const callback = useDebouncedCallback(
  () => console.log('Hello'),
  { delay: 1000, flushOnUnmount: true },
);
```

## Flush debounced callback

You can call the `flush` method to execute the debounced callback immediately:

```tsx
import { useDebouncedCallback } from '@mantine/hooks';

const callback = useDebouncedCallback(() => console.log('Hello'), 1000);

callback.flush(); // immediately executes the pending callback
```

## Definition

```tsx
interface UseDebouncedCallbackOptions {
  delay: number;
  flushOnUnmount?: boolean;
}

type UseDebouncedCallbackReturnValue<T extends (...args: any[]) => any> = ((
  ...args: Parameters<T>
) => void) & { flush: () => void };

function useDebouncedCallback<T extends (...args: any[]) => any>(
  callback: T,
  delayOrOptions: number | UseDebouncedCallbackOptions
): UseDebouncedCallbackReturnValue<T>
```

## Exported types

`UseDebouncedCallbackOptions` and `UseDebouncedCallbackReturnValue` types are exported from `@mantine/hooks` package,
you can import them in your application:

```tsx
import type { UseDebouncedCallbackOptions, UseDebouncedCallbackReturnValue } from '@mantine/hooks';
```

### useDebouncedState

Package: @mantine/hooks
Import: import { UseDebouncedState } from '@mantine/hooks';

## Usage

`use-debounced-state` hook debounces value changes.
This can be useful in case you want to perform a heavy operation based on react state,
for example, send search request. Unlike [use-debounced-value](https://mantine.dev/hooks/use-debounced-value/) it
is designed to work with uncontrolled components.

## Differences from use-debounce-value

- You do not have direct access to the non-debounced value.
- It is used for uncontrolled inputs (`defaultValue` prop instead of `value`), for example does not render with every state change like a character typed in an input.
- It does not work with custom state providers or props, and it uses `useState` internally.

## Leading update

You can immediately update value with first call with `{ leading: true }` options:

## Definition

```tsx
interface UseDebouncedStateOptions {
  leading?: boolean;
}

type UseDebouncedStateReturnValue<T> = [T, (newValue: SetStateAction<T>) => void];

function useDebouncedState<T = any>(
  defaultValue: T,
  wait: number,
  options?: UseDebouncedStateOptions,
): UseDebouncedStateReturnValue<T>
```

## Exported types

`UseDebouncedStateOptions` and `UseDebouncedStateReturnValue` types are exported from `@mantine/hooks` package,
you can import them in your application:

```tsx
import type { UseDebouncedStateOptions, UseDebouncedStateReturnValue } from '@mantine/hooks';
```

### useDebouncedValue

Package: @mantine/hooks
Import: import { UseDebouncedValue } from '@mantine/hooks';

## Usage

`use-debounced-value` hook debounces value changes.
This can be useful in case you want to perform a heavy operation based on react state,
for example, send search request. Unlike [use-debounced-state](https://mantine.dev/hooks/use-debounced-state/) it
is designed to work with controlled components.

## Differences from use-debounced-state

- You have direct access to the non-debounced value.
- It is used for controlled inputs (`value` prop instead of `defaultValue`), for example renders on every state change like a character typed in an input.
- It works with props or other state providers, and it does not force use of `useState`.

## Leading update

You can immediately update value with first call with `{ leading: true }` options:

## Cancel update

Hook provides `cancel` callback, you can use it to cancel update.
Update cancels automatically on component unmount.

In this example, type in some text and click the cancel button
within a second to cancel debounced value change:

## Definition

```tsx
interface UseDebouncedValueOptions {
  leading?: boolean;
}

type UseDebouncedValueReturnValue<T> = [T, () => void];

function useDebouncedValue<T = any>(
  value: T,
  wait: number,
  options?: UseDebouncedValueOptions,
): UseDebouncedValueReturnValue<T>
```

## Exported types

`UseDebouncedValueOptions` and `UseDebouncedValueReturnValue` types are exported from `@mantine/hooks` package,
you can import them in your application:

```tsx
import type { UseDebouncedValueOptions, UseDebouncedValueReturnValue } from '@mantine/hooks';
```

### useDidUpdate

Package: @mantine/hooks
Import: import { UseDidUpdate } from '@mantine/hooks';

## Usage

`use-did-update` hook works the same way as `useEffect` but it is not called when component is mounted:

```tsx
import { useDidUpdate } from '@mantine/hooks';

function Demo() {
  useDidUpdate(
    () => console.log("Will not be called when mounted"),
    [dependency1, dependency2]
  );
}
```

## Definition

```tsx
function useDidUpdate(fn: React.EffectCallback, dependencies?: any[]): void;
```

### useDisclosure

Package: @mantine/hooks
Import: import { UseDisclosure } from '@mantine/hooks';

## Usage

`use-disclosure` hook manages boolean state. It provides `open`, `close` and `toggle` handlers
and accepts optional `onOpen` and `onClose` callbacks. You can use it to manage controlled modals,
popovers and other similar components:

```tsx
import { useDisclosure } from '@mantine/hooks';

function Demo() {
  const [opened, handlers] = useDisclosure(false);

  // Sets opened to true
  handlers.open();

  // Sets opened to false
  handlers.close();

  // Sets opened to true if it was false and vice versa
  handlers.toggle();
}
```

## Callbacks

The `onOpen` and `onClose` callbacks execute when the opened state changes:

```tsx
import { useDisclosure } from '@mantine/hooks';

function Demo() {
  const [opened, handlers] = useDisclosure(false, {
    onOpen: () => console.log('Opened'),
    onClose: () => console.log('Closed'),
  });

  // Calls `onOpen` callback and sets opened to true
  handlers.open();

  // Does nothing, opened is already true
  handlers.open();

  // Calls `onClose` callback and sets opened to false
  handlers.close();

  // Does nothing, opened is already false
  handlers.close();

  // Calls `onOpen` or `onClose` depending on the current state
  handlers.toggle();
}
```

## Definition

```tsx
interface UseDisclosureOptions {
  onOpen?: () => void;
  onClose?: () => void;
}

interface UseDisclosureHandlers {
  open: () => void;
  close: () => void;
  toggle: () => void;
}

type UseDisclosureReturnValue = [boolean, UseDisclosureHandlers];

function useDisclosure(
  initialState?: boolean,
  options?: UseDisclosureOptions,
): UseDisclosureReturnValue
```

## Exported types

`UseDisclosureOptions`, `UseDisclosureHandlers` and `UseDisclosureReturnValue` types are exported from `@mantine/hooks` package,
you can import them in your application:

```tsx
import type { UseDisclosureOptions, UseDisclosureHandlers, UseDisclosureReturnValue } from '@mantine/hooks';
```

### useDocumentTitle

Package: @mantine/hooks
Import: import { UseDocumentTitle } from '@mantine/hooks';

## Usage

`use-document-title` sets `document.title` property with `React.useLayoutEffect` hook.
`use-document-title` is not called during server side rendering.
Use this hook with client only applications, for isomorphic use more advanced options
(for example, [react-helmet](https://github.com/nfl/react-helmet)).

Call hook with a string that should be set as document title in any component.
`use-document-title` triggers every time value changes
and the value is not an empty string (trailing whitespace is trimmed) or `null`.

## Definition

```tsx
function useDocumentTitle(title: string): void;
```

### useDocumentVisibility

Package: @mantine/hooks
Import: import { UseDocumentVisibility } from '@mantine/hooks';

## Usage

`use-document-visibility` hook returns current [document.visibilityState](https://developer.mozilla.org/en-US/docs/Web/API/Document/visibilityState)
– it allows detecting if the current tab is active:

## Definition

```tsx
// DocumentVisibilityState is 'visible' | 'hidden'
function useDocumentVisibility(): DocumentVisibilityState;
```

### use-element-size

Package: @mantine/hooks
Import: import { use-element-size } from '@mantine/hooks';
Description: Returns element width and height and observes changes with ResizeObserver

## Usage

## API

`use-element-size` is a simpler version of [use-resize-observer](https://mantine.dev/hooks/use-resize-observer/) hook.
Hook returns a `ref` object that should be passed to the observed element, and the element's `height` and `width`.
On the first render (as well as during SSR), or when no element is being observed, `width` and `height` properties are equal to `0`.

```tsx
import { useElementSize } from '@mantine/hooks';

const { ref, width, height } = useElementSize();
```

## Definition

```tsx
type ObserverRect = Omit<DOMRectReadOnly, 'toJSON'>;

function useResizeObserver<T extends HTMLElement = any>(
  options?: ResizeObserverOptions
): readonly [React.RefObject<T>, ObserverRect];
```

### useEventListener

Package: @mantine/hooks
Import: import { UseEventListener } from '@mantine/hooks';

## Usage

`use-event-listener` adds a given event listener to an element to which `ref` is assigned.
Hook supports the same options as `addEventListener` method.
After the component is unmounted, the listener is automatically removed.

## Definition

```tsx
function useEventListener<K extends keyof HTMLElementEventMap, T extends HTMLElement = any>(
  type: K,
  listener: (this: HTMLDivElement, ev: HTMLElementEventMap[K]) => any,
  options?: boolean | AddEventListenerOptions,
): React.RefCallback<T | null>
```

### useEyeDropper

Package: @mantine/hooks
Import: import { UseEyeDropper } from '@mantine/hooks';

## Usage

`use-eye-dropper` hook provides an interface to work with [EyeDropper API](https://developer.mozilla.org/en-US/docs/Web/API/EyeDropper_API).
Check [browser support](https://caniuse.com/mdn-api_eyedropper) to learn which browsers support the API.

## Definition

```tsx
interface EyeDropperOpenOptions {
  signal?: AbortSignal;
}

interface EyeDropperOpenReturnType {
  sRGBHex: string;
}

interface UseEyeDropperReturnValue {
  supported: boolean;
  open: (options?: EyeDropperOpenOptions) => Promise<EyeDropperOpenReturnType | undefined>;
}

function useEyeDropper(): UseEyeDropperReturnValue;
```

## Exported types

`EyeDropperOpenOptions`, `EyeDropperOpenReturnType` and `UseEyeDropperReturnValue` types are exported from `@mantine/hooks` package,
you can import them in your application:

```tsx
import type {
  EyeDropperOpenOptions,
  EyeDropperOpenReturnType,
  UseEyeDropperReturnValue,
} from '@mantine/hooks';
```

### useFavicon

Package: @mantine/hooks
Import: import { UseFavicon } from '@mantine/hooks';

## Usage

`use-favicon` appends `<link />` element to head component with given favicon in `useLayoutEffect`.
The hook is not called during server side rendering.

Call hook with a favicon URL (supported formats: `.ico`, `.png`, `.svg` and `.gif`) that should be set as favicon.
The hook is triggered every time the URL changes and the value is not an empty string (trailing whitespace is trimmed) or `null`.

## Definition

```tsx
function useFavicon(url: string): void;
```

### useFetch

Package: @mantine/hooks
Import: import { UseFetch } from '@mantine/hooks';

## Usage

`useFetch` hook sends a fetch request to the specified URL and returns the response data, loading state, error,
`refetch` and `abort` functions. You can pass other parameters that fetch takes like method, headers etc.

## Definition

```tsx
interface UseFetchOptions extends RequestInit {
  autoInvoke?: boolean;
}

interface UseFetchReturnValue<T> {
  data: T | null;
  loading: boolean;
  error: Error | null;
  refetch: () => Promise<any>;
  abort: () => void;
}

function useFetch<T>(
  url: string,
  options?: UseFetchOptions,
): UseFetchReturnValue<T>
```

## Exported types

`UseFetchOptions` and `UseFetchReturnValue` types are exported from `@mantine/hooks` package,
you can import them in your application:

```tsx
import type { UseFetchOptions, UseFetchReturnValue } from '@mantine/hooks';
```

### useFileDialog

Package: @mantine/hooks
Import: import { UseFileDialog } from '@mantine/hooks';

## Usage

`use-file-dialog` allows capturing one or more files from the user without file input element:

## Definition

```tsx
interface UseFileDialogOptions {
  /** Determines whether multiple files are allowed, `true` by default */
  multiple?: boolean;

  /** `accept` attribute of the file input, '*' by default */
  accept?: string;

  /** `capture` attribute of the file input */
  capture?: string;

  /** Determines whether the user can pick a directory instead of file, `false` by default */
  directory?: boolean;

  /** Determines whether the file input state should be reset when the file dialog is opened, `false` by default */
  resetOnOpen?: boolean;

  /** Initial selected files */
  initialFiles?: FileList | File[];

  /** Called when files are selected */
  onChange?: (files: FileList | null) => void;

  /** Called when file dialog is canceled */
  onCancel?: () => void;
}

interface UseFileDialogReturnValue {
  files: FileList | null;
  open: () => void;
  reset: () => void;
}

function useFileDialog(input?: UseFileDialogOptions): UseFileDialogReturnValue;
```

## Exported types

`UseFileDialogOptions` and `UseFileDialogReturnValue` types are exported from `@mantine/hooks` package,
you can import them in your application:

```tsx
import type { UseFileDialogOptions, UseFileDialogReturnValue } from '@mantine/hooks';
```

### useFocusReturn

Package: @mantine/hooks
Import: import { UseFocusReturn } from '@mantine/hooks';

## Usage

`use-focus-return` automatically returns focus to the last focused element when a given condition is met.
For example, it is used in [Modal](https://mantine.dev/core/modal/) component to restore focus after the modal was closed.

Close the modal with the `Escape` key and see how focus returns to the button after the modal closes:

#### Example: usage

```tsx
import { useDisclosure } from '@mantine/hooks';
import { Modal, Button } from '@mantine/core';

function Demo() {
  const [opened, { open, close }] = useDisclosure(false);

  return (
    <>
      <Modal opened={opened} onClose={close} title="Authentication">
        {/* Modal content */}
      </Modal>

      <Button variant="default" onClick={open}>
        Open modal
      </Button>
    </>
  );
}
```

In most cases, you should use this hook with [use-focus-trap](https://mantine.dev/hooks/use-focus-trap/).

```tsx
import { useFocusReturn } from '@mantine/hooks';

useFocusReturn({
  // Is region with focus trap active?
  // When it activates hook saves document.activeElement to the internal state
  // and focuses this element once focus trap is deactivated
  opened: false,

  // Determines whether focus should be returned automatically, true by default
  shouldReturnFocus: true,
});
```

If `shouldReturnFocus` option is set to `false` you can call returned function to focus last active element:

```tsx
import { useFocusReturn } from '@mantine/hooks';

const returnFocus = useFocusReturn({
  opened: false,
  shouldReturnFocus: false,
});

// ... later
returnFocus();
```

## Definition

```tsx
interface UseFocusReturnOptions {
  opened: boolean;
  shouldReturnFocus?: boolean;
}

type UseFocusReturnReturnValue = () => void;

function useFocusReturn(options: UseFocusReturnOptions): UseFocusReturnReturnValue
```

## Exported types

`UseFocusReturnOptions` and `UseFocusReturnReturnValue` types are exported from `@mantine/hooks` package,
you can import them in your application:

```tsx
import type { UseFocusReturnOptions, UseFocusReturnReturnValue } from '@mantine/hooks';
```

### useFocusTrap

Package: @mantine/hooks
Import: import { UseFocusTrap } from '@mantine/hooks';

## Usage

`use-focus-trap` traps focus at the given node, for example in modal, drawer or menu.
Node must include at least one focusable element. When the node unmounts, the focus trap is automatically released.

```tsx
import { useFocusTrap } from '@mantine/hooks';

function Demo() {
  const focusTrapRef = useFocusTrap();

  return (
    <div ref={focusTrapRef}>
      <input />
    </div>
  );
}
```

## API

The hook accepts focus trap active state as a single argument:

```tsx
import { useFocusTrap } from '@mantine/hooks';

useFocusTrap(); // -> focus trap inactive
useFocusTrap(true); // -> focus trap active

useFocusTrap(false); // -> focus trap disabled
```

The hook returns `ref` that should be passed to the element:

```tsx
import { Paper } from '@mantine/core';
import { useFocusTrap } from '@mantine/hooks';

function Demo() {
  const focusTrapRef = useFocusTrap();

  return (
    <>
      {/* With regular element: */}
      <div ref={focusTrapRef} />

      {/* With Mantine component: */}
      <Paper ref={focusTrapRef} />
    </>
  );
}
```

## Combine with other ref based hooks

To combine `use-focus-trap` with other ref based hooks, use [use-merged-ref](https://mantine.dev/hooks/use-merged-ref/) hook:

```tsx
import { useRef } from 'react';
import {
  useClickOutside,
  useFocusTrap,
  useMergedRef,
} from '@mantine/hooks';

function Demo() {
  const myRef = useRef();
  const useClickOutsideRef = useClickOutside(() => {});
  const focusTrapRef = useFocusTrap();
  const mergedRef = useMergedRef(
    myRef,
    useClickOutsideRef,
    focusTrapRef
  );

  return <div ref={mergedRef} />;
}
```

## Initial focus

By default, focus trap will move focus to the first interactive element.
To specify the element that should receive initial focus, add `data-autofocus` attribute:

```tsx
import { useFocusTrap } from '@mantine/hooks';

function Demo() {
  const focusTrapRef = useFocusTrap();

  return (
    <div ref={focusTrapRef}>
      <input />
      {/* Second input in modal will have initial focus */}
      <input data-autofocus />
      <input />
    </div>
  );
}
```

## Definition

```tsx
function useFocusTrap(active?: boolean): React.RefCallback<HTMLElement | null>
```

### useFocusWithin

Package: @mantine/hooks
Import: import { UseFocusWithin } from '@mantine/hooks';

## Usage

`use-focus-within` hook detects if any element within the other element has focus.
It works the same way as `:focus-within` CSS selector:

## Definition

```tsx
interface UseFocusWithinOptions {
  onFocus?: (event: FocusEvent) => void;
  onBlur?: (event: FocusEvent) => void;
}

interface UseFocusWithinReturnValue<T extends HTMLElement = any> {
  ref: React.RefCallback<T | null>;
  focused: boolean;
}

function useFocusWithin<T extends HTMLElement = any>(
  options?: UseFocusWithinOptions,
): UseFocusWithinReturnValue<T>
```

## Exported types

`UseFocusWithinOptions` and `UseFocusWithinReturnValue` types are exported from `@mantine/hooks` package,
you can import them in your application:

```tsx
import type { UseFocusWithinOptions, UseFocusWithinReturnValue } from '@mantine/hooks';
```

### useForceUpdate

Package: @mantine/hooks
Import: import { UseForceUpdate } from '@mantine/hooks';

## Usage

`use-force-update` returns a function, which when called rerenders the component:

## Definition

```tsx
function useForceUpdate(): () => void;
```

### useFullscreen

Package: @mantine/hooks
Import: import { UseFullscreen } from '@mantine/hooks';

## Usage

`use-fullscreen` allows to enter/exit fullscreen for given element using the [Fullscreen API](https://developer.mozilla.org/en-US/docs/Web/API/Fullscreen_API).
By default, if you don't provide `ref`, the hook will target `document.documentElement`:

## Custom target element

The hook returns an optional `ref` function that can be passed to an element to act as root.
Be sure to follow best practices to not [confuse or trap the end user](https://developer.mozilla.org/en-US/docs/Web/API/Fullscreen_API/Guide#things_your_users_want_to_know):

## Mobile Safari limitations

Mobile Safari (especially on iPhone) has limited Fullscreen API support. In many cases, fullscreen is only supported for `<video>` elements and may not work for arbitrary elements (including `document.documentElement`).

`use-fullscreen` includes Safari-specific fallbacks where possible, but it cannot bypass browser/platform restrictions.

Also note that entering fullscreen usually requires a direct user interaction (for example, a button click).

## Definition

```tsx
interface UseFullscreenReturnValue<T extends HTMLElement = any> {
  ref: React.RefCallback<T | null>;
  toggle: () => Promise<void>;
  fullscreen: boolean;
}

function useFullscreen<T extends HTMLElement = any>(): UseFullscreenReturnValue<T>
```

## Exported types

`UseFullscreenReturnValue` type is exported from `@mantine/hooks` package,
you can import it in your application:

```tsx
import type { UseFullscreenReturnValue } from '@mantine/hooks';
```

### useHash

Package: @mantine/hooks
Import: import { UseHash } from '@mantine/hooks';

## Usage

`use-hash` returns hash from URL, subscribes to its changes with [hashchange event](https://developer.mozilla.org/en-US/docs/Web/API/Window/hashchange_event)
and allows changing it with `setHash` function:

## Initial state value

By default, `use-hash` will retrieve value in `useEffect`. If you want to get initial value
as soon as hook is called, set `getInitialValueInEffect` to `false`. Note that this option is
not compatible with server side rendering – you can only use it if your app is client-side only.

```tsx
import { Button } from '@mantine/core';
import { useHash } from '@mantine/hooks';

function Demo() {
  const [hash, setHash] = useHash({ getInitialValueInEffect: false });
  return (
    <Button onClick={() => setHash('new-hash')}>Change hash</Button>
  );
}
```

## Definition

```tsx
interface UseHashOptions {
  getInitialValueInEffect?: boolean;
}

type UseHashReturnValue = [string, (value: string) => void];

function useHash(options?: UseHashOptions): UseHashReturnValue
```

## Exported types

`UseHashOptions` and `UseHashReturnValue` types are exported from `@mantine/hooks` package,
you can import them in your application:

```tsx
import { UseHashOptions, UseHashReturnValue } from '@mantine/hooks';
```

### useHeadroom

Package: @mantine/hooks
Import: import { UseHeadroom } from '@mantine/hooks';

## Usage

Use `use-headroom` hook to create headers that are hidden after user scrolls past the given distance in px.
The hook returns a boolean value that determines whether the element should be pinned or hidden.
Hook returns `true` when the current scroll position is less than the specified `fixedAt` value and
after user scrolled up.

## Definition

```tsx
interface UseHeadroomOptions {
  /** Number in px at which element should be fixed */
  fixedAt?: number;

  /** Called when element is pinned */
  onPin?: () => void;

  /** Called when element is at fixed position */
  onFix?: () => void;

  /** Called when element is unpinned */
  onRelease?: () => void;
}

function useHeadroom(input?: UseHeadroomOptions): boolean;
```

## Exported types

`UseHeadroomOptions` type is exported from `@mantine/hooks` package, you can import it in your application:

```tsx
import { UseHeadroomOptions } from '@mantine/hooks';
```

### useHotkeys

Package: @mantine/hooks
Import: import { UseHotkeys } from '@mantine/hooks';

## Usage

`use-hotkeys` accepts as its first argument an array of hotkeys and handler tuples:

- `hotkey` - hotkey string, for example `ctrl+E`, `shift+alt+L`, `mod+S`
- `handler` - event handler called when a given combination was pressed
- `options` - object with extra options for hotkey handler

The second argument is a list of HTML tags on which hotkeys should be ignored.
By default, hotkeys events are ignored if the focus is in `input`, `textarea` and `select` elements.

```tsx
import { useHotkeys } from '@mantine/hooks';

function Demo() {
  // Ignore hotkeys events only when focus is in input and textarea elements
  useHotkeys(
    [['ctrl+K', () => console.log('Trigger search')]],
    ['INPUT', 'TEXTAREA']
  );

  // Empty array – do not ignore hotkeys events on any element
  useHotkeys([['ctrl+K', () => console.log('Trigger search')]], []);
}
```

## Targeting elements

`use-hotkeys` hook can work only with document element, you will need to create your own event listener
if you need to support other elements. For this purpose, `@mantine/hooks` package exports `getHotkeyHandler` function
which should be used with `onKeyDown`:

With `getHotkeyHandler` you can also add events to any dom node using `.addEventListener`:

```tsx
import { getHotkeyHandler } from '@mantine/hooks';

document.body.addEventListener(
  'keydown',
  getHotkeyHandler([
    ['mod+Enter', () => console.log('Submit')],
    ['mod+S', () => console.log('Save')],
  ])
);
```

## Supported formats

- `mod+S` – detects `⌘+S` on macOS and `Ctrl+S` on Windows
- `ctrl+shift+X` – handles multiple modifiers
- `alt + shift + L` – you can use whitespace inside hotkey
- `ArrowLeft` – you can use special keys using [this format](https://developer.mozilla.org/en-US/docs/Web/API/KeyboardEvent/key/Key_Values)
- `shift + [plus]` – you can use `[plus]` to detect `+` key
- `Digit1` and `Hotkey1` - You can use physical key assignments [defined on MDN](https://developer.mozilla.org/en-US/docs/Web/API/UI_Events/Keyboard_event_code_values).

## Types

`@mantine/hooks` exports `HotkeyItemOptions` and `HotkeyItem` types:

```tsx
interface HotkeyItemOptions {
  preventDefault?: boolean;
  usePhysicalKeys?: boolean;
}

type HotkeyItem = [
  string,
  (event: KeyboardEvent) => void,
  HotkeyItemOptions?,
];
```

`HotkeyItemOptions` provides the `usePhysicalKeys` option to force the physical key assignment. Useful for non-QWERTY keyboard layouts.

`HotkeyItem` type can be used to create hotkey items outside of `use-hotkeys` hook:

```tsx
import { HotkeyItem, useHotkeys } from '@mantine/hooks';

const hotkeys: HotkeyItem[] = [
  [
    'mod+J',
    () => console.log('Toggle color scheme'),
    { preventDefault: false },
  ],
  ['ctrl+K', () => console.log('Trigger search')],
  ['alt+mod+shift+X', () => console.log('Rick roll')],
  [
    'D',
    () => console.log('Triggers when pressing "E" on Dvorak keyboards!'),
    { usePhysicalKeys: true }
  ],
];

useHotkeys(hotkeys);
```

## Definition

```tsx
interface HotkeyItemOptions {
  preventDefault?: boolean;
  usePhysicalKeys?: boolean;
}

type HotkeyItem = [string, (event: KeyboardEvent) => void, HotkeyItemOptions?]

function useHotkeys(
  hotkeys: HotkeyItem[],
  tagsToIgnore?: string[],
  triggerOnContentEditable?: boolean
): void;
```

## Exported types

`HotkeyItemOptions` and `HotkeyItem` types are exported from `@mantine/hooks` package,
you can import them in your application:

```tsx
import type { HotkeyItemOptions, HotkeyItem } from '@mantine/hooks';
```

### useHover

Package: @mantine/hooks
Import: import { UseHover } from '@mantine/hooks';

## Usage

## Definition

```tsx
interface UseHoverReturnValue<T extends HTMLElement = any> {
  hovered: boolean;
  ref: React.RefCallback<T | null>;
}

function useHover<T extends HTMLElement = any>(): UseHoverReturnValue<T>
```

## Exported types

`UseHoverReturnValue` type is exported from `@mantine/hooks` package,
you can import it in your application:

```tsx
import type { UseHoverReturnValue } from '@mantine/hooks';
```

### useId

Package: @mantine/hooks
Import: import { UseId } from '@mantine/hooks';

## Usage

`use-id` hook generates a random id that persists across renders.
The hook is usually used to bind input elements to labels.
The generated random id is saved to ref and will not change unless the component is unmounted.

```tsx
import { useId } from '@mantine/hooks';

function Input({ id }: { id?: string }) {
  const uuid = useId(id);

  return (
    <>
      <label htmlFor={uuid}>Input label</label>
      <input type="text" id={uuid} />
    </>
  );
}

// input and label will have id 'my-id'
const withId = <Input id="my-id" />;

// input and label will have random id 'mantine-fZMoF'
const withoutId = <Input />;
```

## Definition

```tsx
function useId(id: string): string;
```

### useIdle

Package: @mantine/hooks
Import: import { UseIdle } from '@mantine/hooks';

## Usage

`use-idle` detects if user does nothing for a given time in ms:

## Custom events

By default, the hook will listen to `keypress`, `mousemove`, `touchmove`, `wheel`, `click` and `scroll` events to set idle status.
To change that, provide a list of events in the `options` argument:

## Initial state

By default, the hook will return an idle state.
To change that, provide an initial state value in the `options` argument:

### Definition

```tsx
interface UseIdleOptions {
  events?: (keyof DocumentEventMap)[];
  initialState?: boolean;
}

function useIdle(timeout: number, options?: UseIdleOptions): boolean;
```

## Exported types

`UseIdleOptions` type is exported from `@mantine/hooks` package,
you can import it in your application:

```tsx
import type { UseIdleOptions } from '@mantine/hooks';
```

### useInViewport

Package: @mantine/hooks
Import: import { UseInViewport } from '@mantine/hooks';

## Usage

`use-in-viewport` is a simpler alternative to [use-intersection](https://mantine.dev/hooks/use-intersection) that only checks if the element
is visible in the viewport:

## Definition

```tsx
interface UseInViewportReturnValue<T extends HTMLElement = any> {
  inViewport: boolean;
  ref: React.RefCallback<T | null>;
}

function useInViewport<T extends HTMLElement = any>(): UseInViewportReturnValue<T>
```

## Exported types

`UseInViewportReturnValue` type is exported from `@mantine/hooks` package,
you can import it in your application:

```tsx
import type { UseInViewportReturnValue } from '@mantine/hooks';
```

### useInputState

Package: @mantine/hooks
Import: import { UseInputState } from '@mantine/hooks';

## Usage

`use-input-state` handles state of native inputs (with event in `onChange` handler) and custom inputs (with value in `onChange` handler).
Hook works with all Mantine and native inputs:

```tsx
import { useState } from 'react';
import { NumberInput, TextInput } from '@mantine/core';
import { useInputState } from '@mantine/hooks';

function WithUseInputState() {
  const [stringValue, setStringValue] = useInputState('');
  const [numberValue, setNumberValue] = useInputState<
    string | number
  >(0);

  return (
    <>
      <input
        type="text"
        value={stringValue}
        onChange={setStringValue}
      />
      <TextInput value={stringValue} onChange={setStringValue} />
      <NumberInput value={numberValue} onChange={setNumberValue} />
    </>
  );
}

function WithUseState() {
  const [stringValue, setStringValue] = useState('');
  const [numberValue, setNumberValue] = useState<string | number>(0);

  return (
    <>
      <input
        type="text"
        value={stringValue}
        onChange={(event) =>
          setStringValue(event.currentTarget.value)
        }
      />
      <TextInput
        value={stringValue}
        onChange={(event) =>
          setStringValue(event.currentTarget.value)
        }
      />
      <NumberInput value={numberValue} onChange={setNumberValue} />
    </>
  );
}
```

## Definition

```tsx
type UseInputStateReturnValue<T> = [
  T,
  (value: null | undefined | T | React.ChangeEvent<any>) => void,
];

function useInputState<T>(initialState: T): UseInputStateReturnValue<T>
```

## Exported types

`UseInputStateReturnValue` type is exported from `@mantine/hooks` package,
you can import it in your application:

```tsx
import type { UseInputStateReturnValue } from '@mantine/hooks';
```

### useIntersection

Package: @mantine/hooks
Import: import { UseIntersection } from '@mantine/hooks';

## Usage

`use-intersection` returns information about the intersection
of a given element with its scroll container or body element with [Intersection Observer API](https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API):

## API

The hook accepts `IntersectionObserver`'s options as its only optional argument:

```tsx
import { useIntersection } from '@mantine/hooks';

useIntersection({
  root: document.querySelector('#some-element'),
  rootMargin: '0rem',
  threshold: 1.0,
});
```

The hook returns a `ref` function that should be passed to the observed element, and the latest entry, as returned by `IntersectionObserver`'s callback.
See [Intersection Observer API](https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API) documentation to learn everything about options.

On the first render (as well as during SSR), or when no element is being observed, the entry is `null`.

```tsx
import { Paper } from '@mantine/core';
import { useIntersection } from '@mantine/hooks';

function Demo() {
  const { ref } = useIntersection();

  return (
    <>
      {/* With regular element: */}
      <div ref={ref} />

      {/* With Mantine component: */}
      <Paper ref={ref} />
    </>
  );
}
```

## Definition

```tsx
interface UseIntersectionReturnValue<T> {
  ref: React.RefCallback<T | null>;
  entry: IntersectionObserverEntry | null;
}

function useIntersection<T extends HTMLElement = any>(
  options?: IntersectionObserverInit,
): UseIntersectionReturnValue<T>
```

## Exported types

`UseIntersectionReturnValue` type is exported from `@mantine/hooks` package,
you can import it in your application:

```tsx
import type { UseIntersectionReturnValue } from '@mantine/hooks';
```

### useInterval

Package: @mantine/hooks
Import: import { UseInterval } from '@mantine/hooks';

## Usage

## Auto invoke interval

To automatically start interval when component is mounted, set `autoInvoke` option to `true`:

```tsx
import { useInterval } from '@mantine/hooks';

const interval = useInterval(
  () => console.log('Interval tick'),
  1000,
  { autoInvoke: true }
);
```

## API

```tsx
import { useInterval } from '@mantine/hooks';

const { start, stop, toggle, active } = useInterval(fn, interval);
```

Arguments:

- `fn` – function that is called at each interval tick
- `interval` – amount of milliseconds between each tick

Return object:

- `start` – start interval
- `stop` – stop interval
- `toggle` – toggle interval
- `active` – current interval status

## Definition

```tsx
interface UseIntervalOptions {
  /** If set, the interval will start automatically when the component is mounted, `false` by default */
  autoInvoke?: boolean;
}

interface UseIntervalReturnValue {
  /** Starts the interval */
  start: () => void;

  /** Stops the interval */
  stop: () => void;

  /** Toggles the interval */
  toggle: () => void;

  /** Indicates if the interval is active */
  active: boolean;
}

function useInterval(
  fn: () => void,
  interval: number,
  options?: UseIntervalOptions,
): UseIntervalReturnValue
```

## Exported types

`UseIntervalOptions` and `UseIntervalReturnValue` types are exported from `@mantine/hooks` package,
you can import them in your application:

```tsx
import type { UseIntervalOptions, UseIntervalReturnValue } from '@mantine/hooks';
```

### useIsFirstRender

Package: @mantine/hooks
Import: import { UseIsFirstRender } from '@mantine/hooks';

## Usage

`useIsFirstRender` returns true if the component is being rendered for the first time,
otherwise it returns false.

## Definition

```tsx
function useIsFirstRender(): boolean;
```

### useIsomorphicEffect

Package: @mantine/hooks
Import: import { UseIsomorphicEffect } from '@mantine/hooks';

## Usage

`use-isomorphic-effect` is a replacement for `useLayoutEffect` hook that works in both browser and server environments.

```tsx
import { useIsomorphicEffect } from '@mantine/hooks';

function Demo() {
  useIsomorphicEffect(() => {
    document.title = 'title';
  });

  return null;
}
```

### useListState

Package: @mantine/hooks
Import: import { UseListState } from '@mantine/hooks';

## Usage

`use-list-state` provides an API to work with list state:

```tsx
import { useListState } from '@mantine/hooks';

const [values, handlers] = useListState([{ a: 1 }]);

// add one or more items to the end of the list
const append = () => handlers.append({ a: 2 });
// values -> [{ a: 1 }, { a: 2 }]

// add one or more items to the start of the list
const prepend = () => handlers.prepend({ a: 3 }, { a: 4 });
// values -> [{ a: 3 }, { a: 4 }, { a: 1 }, { a: 2 }]

// remove items at given positions
const remove = () => handlers.remove(0, 2);
// values -> [{ a: 4 }, { a: 2 }]

// insert one or more items at given position
const insert = () => handlers.insert(1, { a: 5 });
// values -> [{ a: 4 }, { a: 5 }, { a: 2 }]

// apply function to each element of the list
const apply = () =>
  handlers.apply((item, index) => ({ a: item.a * index }));
// values -> [{ a: 0 }, { a: 5 }, { a: 4 }]

// move item from one position to another
const reorder = () => handlers.reorder({ from: 2, to: 0 });
// values -> [{ a: 4 }, { a: 0 }, { a: 5 }]

// swap items positions
const swap = () => handlers.swap({ from: 0, to: 2 });
// values -> [{ a: 5 }, { a: 0 }, { a: 4 }]

// apply function to each element that matches condition
const applyWhere = () =>
  handlers.applyWhere(
    (item) => item.a > 0,
    (item) => ({ a: item.a + 2 })
  );
// values -> [{ a: 7 }, { a: 0 }, { a: 6 }]

// set entirely new state
const setState = () => handlers.setState([{ a: 6 }, { a: 7 }]);
// values -> [{ a: 6 }, { a: 7 }]

// set individual item at given position
const setItem = () => handlers.setItem(0, { a: 8 });
// values -> [{ a: 8 }, { a: 7 }]

// set item property at given position
const setItemProp = () => handlers.setItemProp(1, 'a', 'new-prop');
// values -> [{ a: 8 }, { a: 'new-prop' }]

// filter objects that have a = 'new-prop'
const filter = () => handlers.filter((item) => item.a === 'new-prop');
// values -> [{ a: 'new-prop' }]
```

## API

`use-list-state` takes an array as a single argument and
returns a list of values and handlers to change them in a tuple, similar to `useState` hook.

The hook provides handlers to work with array data:

- `append` – add items to the end of the list
- `prepend` – add items to the start of the list
- `pop` – remove last item
- `shift` – remove first item
- `insert` – insert items at given index
- `remove` – remove items at given indices
- `reorder` – move item from one position to another
- `swap` – swap items positions
- `apply` – apply given function to all items in the list
- `applyWhere` - apply given function to selective items using condition
- `setItem` – replace item at given index
- `setItemProp` – set item property at given index
- `setState` – set list state with react action
- `filter` - filter values with callback function

## Indeterminate state checkbox example

#### Example: indeterminate

```tsx
import { useListState, randomId } from '@mantine/hooks';
import { Checkbox } from '@mantine/core';

const initialValues = [
  { label: 'Receive email notifications', checked: false, key: randomId() },
  { label: 'Receive sms notifications', checked: false, key: randomId() },
  { label: 'Receive push notifications', checked: false, key: randomId() },
];

export function IndeterminateCheckbox() {
  const [values, handlers] = useListState(initialValues);

  const allChecked = values.every((value) => value.checked);
  const indeterminate = values.some((value) => value.checked) && !allChecked;

  const items = values.map((value, index) => (
    <Checkbox
      mt="xs"
      ml={33}
      label={value.label}
      key={value.key}
      checked={value.checked}
      onChange={(event) => handlers.setItemProp(index, 'checked', event.currentTarget.checked)}
    />
  ));

  return (
    <>
      <Checkbox
        checked={allChecked}
        indeterminate={indeterminate}
        label="Receive all notifications"
        onChange={() =>
          handlers.setState((current) =>
            current.map((value) => ({ ...value, checked: !allChecked }))
          )
        }
      />
      {items}
    </>
  );
}
```

## UseListStateHandlers type

`@mantine/hooks` package exports `UseListStateHandlers`. It is a generic type
that contains all handlers from `useListState` hook. It can be used to type
handlers in your components.

`UseListStateHandlers` type:

```tsx
export interface UseListStateHandlers<T> {
  setState: React.Dispatch<React.SetStateAction<T[]>>;
  append: (...items: T[]) => void;
  prepend: (...items: T[]) => void;
  insert: (index: number, ...items: T[]) => void;
  pop: () => void;
  shift: () => void;
  apply: (fn: (item: T, index?: number) => T) => void;
  applyWhere: (
    condition: (item: T, index: number) => boolean,
    fn: (item: T, index?: number) => T
  ) => void;
  remove: (...indices: number[]) => void;
  reorder: ({ from, to }: { from: number; to: number }) => void;
  swap: ({ from, to }: { from: number; to: number }) => void;
  setItem: (index: number, item: T) => void;
  setItemProp: <K extends keyof T, U extends T[K]>(
    index: number,
    prop: K,
    value: U
  ) => void;
  filter: (fn: (item: T, i: number) => boolean) => void;
}
```

The type is useful when you want to pass `use-list-state` handlers to child components
as a prop:

```tsx
import { UseListStateHandlers } from '@mantine/hooks';

interface Props {
  handlers: UseListStateHandlers<string>;
}

function Demo({ handlers }: Props) {
  return (
    <button type="button" onClick={() => handlers.append('hello')}>
      Append hello
    </button>
  );
}
```

## Set item type

By default, `use-list-state` will use type from `initialValues`.
If you call the hook with an empty array, you must specify item type:

```tsx
import { useListState } from '@mantine/hooks';

useListState(['hello']); // ok, item type is string
useListState([]); // not ok, item type is any
useListState<string>([]); // ok, item type is string
```

## Definition

```tsx
function useListState<T>(
  initialValue?: T[]
): [T[], UseListStateHandlers<T>];
```

## Exported types

`UseListStateHandlers` type is exported from `@mantine/hooks` package,
you can import it in your application:

```tsx
import type { UseListStateHandlers } from '@mantine/hooks';
```

### useLocalStorage

Package: @mantine/hooks
Import: import { UseLocalStorage } from '@mantine/hooks';

## Usage

`use-local-storage` allows using value from the `localStorage` as react state.
The hook works the same way as `useState`, but also writes the value to the `localStorage`:

```tsx
import { useLocalStorage } from '@mantine/hooks';

// The hook will read value from localStorage.getItem('color-scheme')
// If localStorage is not available or value at a given key does not exist
// 'dark' will be assigned to value variable
const [value, setValue] = useLocalStorage({
  key: 'color-scheme',
  defaultValue: 'dark',
});

// Value is set both to state and localStorage at 'color-scheme'
setValue('light');

// You can also use callback like in useState hook to set value
setValue((current) => (current === 'dark' ? 'light' : 'dark'));
```

## Example

Example of a color scheme toggle button that uses `use-local-storage` hook
to store current color scheme in the `localStorage`:

```tsx
import { IconMoonStars, IconSun } from '@tabler/icons-react';
import { ActionIcon } from '@mantine/core';
import { useLocalStorage } from '@mantine/hooks';

function ColorSchemeToggle() {
  const [colorScheme, setColorScheme] = useLocalStorage<
    'light' | 'dark'
  >({
    key: 'color-scheme',
    defaultValue: 'light',
  });

  const toggleColorScheme = () =>
    setColorScheme((current) =>
      current === 'dark' ? 'light' : 'dark'
    );

  return (
    <ActionIcon onClick={toggleColorScheme}>
      {colorScheme === 'dark' ? <IconSun /> : <IconMoonStars />}
    </ActionIcon>
  );
}
```

## Remove value

Use `removeValue` callback to clean `localStorage`/`sessionStorage`.
When value is removed it is reset to `defaultValue`:

```tsx
import { useLocalStorage } from '@mantine/hooks';

const [value, setValue, removeValue] = useLocalStorage({
  key: 'color-scheme',
  defaultValue: 'light',
});
```

## Browser tabs synchronization

`use-local-storage` subscribes to [storage event](https://developer.mozilla.org/en-US/docs/Web/API/Window/storage_event).
When state changes in one tab, it automatically updates the value in all other opened browser tabs.
You can test this feature by opening 2 tabs with Mantine docs side by side and changing the color scheme
(button on the top right or `⌘ + J` on MacOS and `Ctrl + J` on Windows and Linux).

## Serialize/deserialize JSON

By default, the hook will serialize/deserialize data with `JSON.stringify`/`JSON.parse`.
If you need to store data in local storage that cannot be serialized with `JSON.stringify`
– provide your own serialization handlers:

```tsx
import { useLocalStorage } from '@mantine/hooks';

const [value, setValue] = useLocalStorage({
  key: 'color-scheme',
  serialize: (value) => {
    /* return value serialized to string */
  },
  deserialize: (localStorageValue) => {
    /* parse localStorage string value and return value */
  },
});
```

## Usage with superjson

[superjson](https://github.com/blitz-js/superjson) is compatible with `JSON.stringify`/`JSON.parse` but works for `Date`, `Map`, `Set` and `BigInt`:

```tsx
import superjson from 'superjson';
import { useLocalStorage } from '@mantine/hooks';

const defaultValue = { name: 'John', age: 25 };

const [value, setValue] = useLocalStorage({
  key: 'data',
  defaultValue,
  serialize: superjson.stringify,
  deserialize: (str) =>
    str === undefined ? defaultValue : superjson.parse(str),
});
```

## use-session-storage

`use-session-storage` hook works the same way as `use-local-storage` hook but uses `sessionStorage` instead of `window.localStorage`:

```tsx
import { useSessionStorage } from '@mantine/hooks';

const [value, setValue] = useSessionStorage({
  key: 'session-key',
  defaultValue: 'mantine',
});
```

## Set value type

You can specify value type same as in `useState` hook:

```tsx
import { useLocalStorage } from '@mantine/hooks';

const [value, setValue] = useLocalStorage<'dark' | 'light'>({
  key: 'color-scheme',
  defaultValue: 'light',
});
```

## Read storage value

To read value from storage without using hook, use `readLocalStorageValue`/`readSessionStorageValue` functions.
Functions accept the same arguments as `use-local-storage`/`use-session-storage` hooks:

```tsx
import { readLocalStorageValue } from '@mantine/hooks';

const value = readLocalStorageValue({ key: 'color-scheme' });
```

## Definition

```tsx
interface UseStorageOptions<T> {
  /** Local storage key */
  key: string;

  /** Default value that will be set if value is not found in local storage */
  defaultValue?: T;

  /** If set to true, value will be updated in useEffect after mount. Default value is true. */
  getInitialValueInEffect?: boolean;

  /** Determines whether the value must be synced between browser tabs, `true` by default */
  sync?: boolean;

  /** Function to serialize value into a string to be saved in local storage */
  serialize?: (value: T) => string;

  /** Function to deserialize string value from local storage to value */
  deserialize?: (value: string) => T;
}

type UseStorageReturnValue<T> = [
  T, // current value
  (val: T | ((prevState: T) => T)) => void, // callback to set value in storage
  () => void, // callback to remove value from storage
];

function useLocalStorage<T = string>(
  options: UseStorageOptions<T>,
): UseStorageReturnValue<T>;
```

## Exported types

`UseStorageOptions` and `UseStorageReturnValue` types are exported from `@mantine/hooks` package,
you can import them in your application:

```tsx
import type { UseStorageOptions, UseStorageReturnValue } from '@mantine/hooks';
```

### useLogger

Package: @mantine/hooks
Import: import { UseLogger } from '@mantine/hooks';

## Usage

`use-logger` logs given values to the console each time component renders.
Open devtools to see state changes in console:

## Definition

```tsx
function useLogger(componentName: string, props: any[]): any;
```

### useLongPress

Package: @mantine/hooks
Import: import { UseLongPress } from '@mantine/hooks';

## Usage

## Definition

```tsx
interface UseLongPressOptions {
  /** Time in milliseconds to trigger the long press, default is 400ms */
  threshold?: number;

  /** Callback triggered when the long press starts */
  onStart?: (event: React.MouseEvent | React.TouchEvent) => void;

  /** Callback triggered when the long press finishes */
  onFinish?: (event: React.MouseEvent | React.TouchEvent) => void;

  /** Callback triggered when the long press is canceled */
  onCancel?: (event: React.MouseEvent | React.TouchEvent) => void;
}

interface UseLongPressReturnValue {
  onMouseDown: (event: React.MouseEvent) => void;
  onMouseUp: (event: React.MouseEvent) => void;
  onMouseLeave: (event: React.MouseEvent) => void;
  onTouchStart: (event: React.TouchEvent) => void;
  onTouchEnd: (event: React.TouchEvent) => void;
}

function useLongPress(
  onLongPress: (event: React.MouseEvent | React.TouchEvent) => void,
  options?: UseLongPressOptions,
): UseLongPressReturnValue
```

## Exported types

`UseLongPressOptions` and `UseLongPressReturnValue` types are exported from `@mantine/hooks` package,
you can import them in your application:

```tsx
import type { UseLongPressOptions, UseLongPressReturnValue } from '@mantine/hooks';
```

### useMap

Package: @mantine/hooks
Import: import { UseMap } from '@mantine/hooks';

## Usage

`useMap` returns [Map](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map)
object that can be used as React state – `set`, `clear` and `delete` methods update state and trigger rerender.

## Definition

```tsx
function useMap<T, V>(initialState?: [T, V][]): Map<T, V>;
```

### useMediaQuery

Package: @mantine/hooks
Import: import { UseMediaQuery } from '@mantine/hooks';

## Usage

`use-media-query` subscribes to media queries.
It receives a media query as an argument and returns `true` if the given media query matches the current state.
The hook relies on `window.matchMedia()` [API](https://developer.mozilla.org/en-US/docs/Web/API/Window/matchMedia)
and will return `false` if the API is not available, unless an initial value is provided in the second argument.

Resize browser window to trigger `window.matchMedia` event:

## Server Side Rendering

During server side rendering the hook will always return `false` as `window.matchMedia` api is not available,
if that is not a desired behavior, you can override the initial value:

```tsx
import { useMediaQuery } from '@mantine/hooks';

function Demo() {
  // Set initial value in second argument and getInitialValueInEffect option to false
  const matches = useMediaQuery('(max-width: 40em)', true, {
    getInitialValueInEffect: false,
  });
}
```

## Definition

```tsx
interface UseMediaQueryOptions {
  getInitialValueInEffect: boolean;
}

function useMediaQuery(
  query: string,
  initialValue?: boolean,
  options?: UseMediaQueryOptions,
): boolean;
```

## Exported types

`UseMediaQueryOptions` type is exported from `@mantine/hooks` package,
you can import it in your application:

```tsx
import type { UseMediaQueryOptions } from '@mantine/hooks';
```

### useMergedRef

Package: @mantine/hooks
Import: import { UseMergedRef } from '@mantine/hooks';

## Usage

`use-merged-ref` accepts any number of refs and returns a function that should be passed to the `ref` prop.
Use this hook when you need to use more than one ref on a single dom node, for example,
when you want to use [use-click-outside](https://mantine.dev/hooks/use-click-outside/) and [use-focus-trap](https://mantine.dev/hooks/use-focus-trap/) hooks and also get a ref for yourself:

```tsx
import { useRef } from 'react';
import {
  useClickOutside,
  useFocusTrap,
  useMergedRef,
} from '@mantine/hooks';

function Demo() {
  const myRef = useRef();
  const useClickOutsideRef = useClickOutside(() => {});
  const focusTrapRef = useFocusTrap();
  const mergedRef = useMergedRef(
    myRef,
    useClickOutsideRef,
    focusTrapRef
  );

  return <div ref={mergedRef} />;
}
```

## mergeRefs function

`use-merged-ref` hooks memoizes refs with `useCallback` hook, but in some cases
memoizing is not a valid strategy, for example, when you are working with a list
of dynamic components React will complain that different number of hooks was called
across two renders. To fix that issue, use `mergeRefs` function instead:

```tsx
import { useRef } from 'react';
import { mergeRefs, useClickOutside } from '@mantine/hooks';

function Demo() {
  const myRef = useRef();
  const useClickOutsideRef = useClickOutside(() => {});
  const mergedRef = mergeRefs(myRef, useClickOutsideRef);
  return <div ref={mergedRef} />;
}
```

`mergeRefs` works the same way as `use-merged-ref`, but does not use hooks internally.
Use it only when you cannot use `use-merged-ref`. Note that `mergeRefs` will not work
correctly with [use-focus-trap](https://mantine.dev/hooks/use-focus-trap/) hook, you are required to
use `use-merged-ref` with it.

## assignRef function

`assignRef` function can be used to assign refs that are not memoized with `useCallback`.
It is usually used to assign refs that do not reference elements:

```tsx
import { useState } from 'react';
import { assignRef } from '@mantine/hooks';

interface NumberInputHandlers {
  increment: () => void;
  decrement: () => void;
}

interface DemoProps {
  handlersRef?: React.ForwardedRef<NumberInputHandlers | undefined>;
}

function Demo({ handlersRef }: DemoProps) {
  const [value, setValue] = useState(0);

  const increment = () => setValue((v) => v + 1);
  const decrement = () => setValue((v) => v - 1);

  assignRef(handlersRef, { increment, decrement });

  return (
    <>
      <button onClick={increment}>+</button>
      <button onClick={decrement}>-</button>
    </>
  );
}
```

## Set node type

```tsx
import { useMergedRef } from '@mantine/hooks';

const ref = useMergedRef<HTMLDivElement>();
```

## Definition

```tsx
function useMergedRef<T = any>(
  ...refs: React.ForwardedRef<T>[]
): (node: T) => void;
```

### useMounted

Package: @mantine/hooks
Import: import { UseMounted } from '@mantine/hooks';

## Usage

`useMounted` hook returns `true` if component is mounted and `false` if it's not.

```tsx
import { useMounted } from '@mantine/hooks';

function Demo() {
  const mounted = useMounted();
  return (
    <div>
      {mounted ? 'Component is mounted' : 'Component is not mounted'}
    </div>
  );
}
```

## Definition

```tsx
function useMounted(): boolean;
```

### useMouse

Package: @mantine/hooks
Import: import { UseMouse } from '@mantine/hooks';

## Usage

If you do not provide `ref`, mouse position is tracked relative to the document element:

## API

Set `resetOnExit` option to reset mouse position to `0, 0` when mouse leaves the element:

```tsx
import { useMouse } from '@mantine/hooks';

const { ref, x, y } = useMouse({ resetOnExit: true });
```

The hook returns an object with `ref` and `x`, `y` mouse coordinates:

```tsx
import { useMouse } from '@mantine/hooks';

const {
  ref, // -> pass ref to target element, if not used document element will be used as target element
  x, // -> mouse x position
  y, // -> mouse y position
} = useMouse();
```

On the first render (as well as during SSR), both `x` and `y` values are equal to `0`.

## Definition

```tsx
function useMouse<T extends HTMLElement = any>(options?: {
  resetOnExit?: boolean;
}): {
  x: number;
  y: number;
  ref: React.RefObject<T>;
};
```

### useMove

Package: @mantine/hooks
Import: import { UseMove } from '@mantine/hooks';

## Usage

`use-move` handles move behavior over any element:

## API

The hook accepts a callback that is called when user moves pressed mouse over the given element
and returns an object with `ref` and active state:

```tsx
import { useMove } from '@mantine/hooks';

const {
  ref, // -> pass ref to target element
  active, // -> is user changing something right now?
} = useMove(({ x, y }) => console.log({ x, y }));
```

`x` and `y` values are always between `0` and `1`, you can use them to calculate value in your boundaries.

## Horizontal slider

You can ignore changes for one of the axis:
