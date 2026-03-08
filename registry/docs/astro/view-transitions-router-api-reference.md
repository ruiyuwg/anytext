# View Transitions Router API Reference

**Added in:** `astro@3.0.0`

These modules provide functions to control and interact with the View Transitions API and client-side router.

Note

This API is compatible with the `<ClientRouter />` included in `astro:transitions`, but can’t be used with native browser MPA routing.

For features and usage examples, [see our View Transitions guide](/en/guides/view-transitions/).

## Imports from `astro:transitions`

[Section titled “Imports from astro:transitions”](#imports-from-astrotransitions)

```ts
import {
  ClientRouter,
  fade,
  slide,
} from 'astro:transitions';
```

### `<ClientRouter />`

[Section titled “\”](#clientrouter-)

**Added in:** `astro@5.0.0`

Opt in to using view transitions on individual pages by importing and adding the `<ClientRouter />` routing component to `<head>` on every desired page.

src/pages/index.astro

```diff
---
+import { ClientRouter } from 'astro:transitions';
---
<html lang="en">
  <head>
    <title>My Homepage</title>
    +<ClientRouter />
  </head>
  <body>
    <h1>Welcome to my website!</h1>
  </body>
</html>
```

See more about how to [control the router](/en/guides/view-transitions/#router-control) and [add transition directives](/en/guides/view-transitions/#transition-directives) to page elements and components.

The `<ClientRouter />` component accepts the following props:

#### `fallback`

**Type:** [`Fallback`](#fallback)\
**Default:** `animate`

Defines the fallback strategy to use for browsers that do not support the [View Transitions API](https://developer.mozilla.org/en-US/docs/Web/API/View_Transition_API).

### `fade`

[Section titled “fade”](#fade)

**Type:** `(opts: { duration?: string | number }) => TransitionDirectionalAnimations`

**Added in:** `astro@3.0.0`

Utility function to support customizing the duration of the built-in `fade` animation.

```astro
---
import { fade } from 'astro:transitions';
---


<!-- Fade transition with the default duration -->
<div transition:animate="fade" />


<!-- Fade transition with a duration of 400 milliseconds -->
<div transition:animate={fade({ duration: '0.4s' })} />
```

### `slide`

[Section titled “slide”](#slide)

**Type:** `(opts: { duration?: string | number }) => TransitionDirectionalAnimations`

**Added in:** `astro@3.0.0`

Utility function to support customizing the duration of the built-in `slide` animation.

```astro
---
import { slide } from 'astro:transitions';
---


<!-- Slide transition with the default duration -->
<div transition:animate="slide" />


<!-- Slide transition with a duration of 400 milliseconds -->
<div transition:animate={slide({ duration: '0.4s' })} />
```

## Imports from `astro:transitions/client`

[Section titled “Imports from astro:transitions/client”](#imports-from-astrotransitionsclient)

```ts
import {
  getFallback,
  navigate,
  supportsViewTransitions,
  swapFunctions,
  transitionEnabledOnThisPage,
  /* The following are scheduled for deprecation in v6: */
  isTransitionBeforePreparationEvent,
  isTransitionBeforeSwapEvent,
  TRANSITION_AFTER_PREPARATION,
  TRANSITION_AFTER_SWAP,
  TRANSITION_BEFORE_PREPARATION,
  TRANSITION_BEFORE_SWAP,
  TRANSITION_PAGE_LOAD,
} from 'astro:transitions/client';
```

### `navigate()`

[Section titled “navigate()”](#navigate)

**Type:** `(href: string, options?: Options) => void`

**Added in:** `astro@3.2.0`

Executes a navigation to the given `href` using the View Transitions API.

This function signature is based on the [`navigate` function from the browser Navigation API](https://developer.mozilla.org/en-US/docs/Web/API/Navigation/navigate). Although based on the Navigation API, this function is implemented on top of the [History API](https://developer.mozilla.org/en-US/docs/Web/API/History_API) to allow for navigation without reloading the page.

`navigate()` does not perform sanitization on the `href` parameter. [Sanitize user input](/en/guides/view-transitions/#navigating-with-user-input) if you use it to determine the URL to navigate to.

#### `history` option

[Section titled “history option”](#history-option)

**Type:** `'auto' | 'push' | 'replace'`\
**Default:** `'auto'`

**Added in:** `astro@3.2.0`

Defines how this navigation should be added to the browser history.

- `'push'`: the router will use `history.pushState` to create a new entry in the browser history.
- `'replace'`: the router will use `history.replaceState` to update the URL without adding a new entry into navigation.
- `'auto'` (default): the router will attempt `history.pushState`, but if the URL cannot be transitioned to, the current URL will remain with no changes to the browser history.

This option follows the [`history` option](https://developer.mozilla.org/en-US/docs/Web/API/Navigation/navigate#history) from the browser Navigation API but simplified for the cases that can happen on an Astro project.

#### `formData` option

[Section titled “formData option”](#formdata-option)

**Type:** `FormData`

**Added in:** `astro@3.5.0`

A `FormData` object for `POST` requests.

When this option is provided, the requests to the navigation target page will be sent as a `POST` request with the form data object as the content.

Submitting an HTML form with view transitions enabled will use this method instead of the default navigation with page reload. Calling this method allows triggering the same behavior programmatically.

#### `info` option

[Section titled “info option”](#info-option)

**Type:** `any`

**Added in:** `astro@3.6.0`

Arbitrary data to be included in the `astro:before-preparation` and `astro:before-swap` events caused by this navigation.

This option mimics the [`info` option](https://developer.mozilla.org/en-US/docs/Web/API/Navigation/navigate#info) from the browser Navigation API.

#### `state` option

[Section titled “state option”](#state-option)

**Type:** `any`

**Added in:** `astro@3.6.0`

Arbitrary data to be associated with the `NavigationHistoryEntry` object created by this navigation. This data can then be retrieved using the [`history.getState` function](https://developer.mozilla.org/en-US/docs/Web/API/NavigationHistoryEntry/getState) from the History API.

This option mimics the [`state` option](https://developer.mozilla.org/en-US/docs/Web/API/Navigation/navigate#state) from the browser Navigation API.

#### `sourceElement` option

[Section titled “sourceElement option”](#sourceelement-option)

**Type:** `Element`

**Added in:** `astro@3.6.0`

The element that triggered this navigation, if any. This element will be available in the following events:

- [`astro:before-preparation`](#astrobefore-preparation-event)
- [`astro:before-swap`](#astrobefore-swap-event)

### `supportsViewTransitions`

[Section titled “supportsViewTransitions”](#supportsviewtransitions)

**Type:** `boolean`

**Added in:** `astro@3.2.0`

Whether or not view transitions are supported and enabled in the current browser.

### `transitionEnabledOnThisPage()`

[Section titled “transitionEnabledOnThisPage()”](#transitionenabledonthispage)

**Type:** `() => boolean`

**Added in:** `astro@3.2.0`

Whether or not the current page has view transitions enabled for client-side navigation. This can be used to make components that behave differently when they are used on pages with view transitions.

### `getFallback()`

[Section titled “getFallback()”](#getfallback)

**Type:** `() => Fallback`\
**Default:** `animate`

**Added in:** `astro@3.6.0`

Returns the fallback strategy to use (`animate` by default) in browsers that do not support view transitions.

See the guide on [Fallback control](/en/guides/view-transitions/#fallback-control) for how to choose and configure the fallback behavior.

### `swapFunctions`

[Section titled “swapFunctions”](#swapfunctions)

**Type:** `object`

**Added in:** `astro@4.15.0`

An object containing the utility functions used to build Astro’s default swap function. These can be useful when [building a custom swap function](/en/guides/view-transitions/#building-a-custom-swap-function).

`swapFunctions` provides the following methods:

#### `deselectScripts()`

[Section titled “deselectScripts()”](#deselectscripts)

**Type:** `(newDocument: Document) => void`

Marks scripts in the new document that should not be executed. Those scripts are already in the current document and are not flagged for re-execution using [`data-astro-rerun`](/en/guides/view-transitions/#data-astro-rerun).

#### `swapRootAttributes()`

[Section titled “swapRootAttributes()”](#swaprootattributes)

**Type:** `(newDocument: Document) => void`

Swaps the attributes between the document roots, like the `lang` attribute. This also includes Astro-injected internal attributes like `data-astro-transition`, which makes the transition direction available to Astro-generated CSS rules.

When making a custom swap function, it is important to call this function so as not to break the view transition’s animations.

#### `swapHeadElements()`

[Section titled “swapHeadElements()”](#swapheadelements)

**Type:** `(newDocument: Document) => void`

Removes every element from the current document’s `<head>` that is not persisted to the new document. Then appends all new elements from the new document’s `<head>` to the current document’s `<head>`.

#### `saveFocus()`

[Section titled “saveFocus()”](#savefocus)

**Type:** `() => () => void`

Stores the element in focus on the current page and returns a function that when called, if the focused element was persisted, returns the focus to it.

#### `swapBodyElement()`

[Section titled “swapBodyElement()”](#swapbodyelement)

**Type:** `(newBody: Element, oldBody: Element) => void`

Replaces the old body with the new body. Then, goes through every element in the old body that should be persisted and have a matching element in the new body and swaps the old element back in place.

### Deprecated imports

[Section titled “Deprecated imports”](#deprecated-imports)

The following imports are scheduled for deprecation in v6. You can still use them in your project, but you may prefer to update your code now.

#### `isTransitionBeforePreparationEvent()`

**Type:** `(value: any) => boolean`

**Added in:** `astro@3.6.0`

Scheduled for deprecation

This function is scheduled for deprecation in v6. You can still use it in your project, but you may prefer to update your code now.

Determines whether the given value matches a [`TransitionBeforePreparationEvent`](#transitionbeforepreparationevent). This can be useful when you need to narrow the type of an event in an event listener.

src/pages/index.astro

```astro
---
---


<script>
  import {
    isTransitionBeforePreparationEvent,
    TRANSITION_BEFORE_PREPARATION,
  } from "astro:transitions/client";


  function listener(event: Event) {
    const setting = isTransitionBeforePreparationEvent(event) ? 1 : 2;
    /* do something with setting */
  }


  document.addEventListener(TRANSITION_BEFORE_PREPARATION, listener);
</script>
```

#### `isTransitionBeforeSwapEvent()`

**Type:** `(value: any) => boolean`

**Added in:** `astro@3.6.0`

Scheduled for deprecation

This function is scheduled for deprecation in v6. You can still use it in your project, but you may prefer to update your code now.

Determines whether the given value matches a [`TransitionBeforeSwapEvent`](#transitionbeforeswapevent). This can be useful when you need to narrow the type of an event in an event listener.

src/pages/index.astro

```astro
---
---


<script>
  import {
    isTransitionBeforeSwapEvent,
    TRANSITION_BEFORE_SWAP,
  } from "astro:transitions/client";


  function listener(event: Event) {
    const setting = isTransitionBeforeSwapEvent(event) ? 1 : 2;
    /* do something with setting */
  }


  document.addEventListener(TRANSITION_BEFORE_SWAP, listener);
</script>
```

#### `TRANSITION_BEFORE_PREPARATION`

**Type:** `'astro:before-preparation'`

**Added in:** `astro@3.6.0`

Scheduled for deprecation

This constant is scheduled for deprecation in v6. You can still use it in your project, but you may prefer to update your code now.

A constant to avoid writing the `astro:before-preparation` event name in plain text when you define an event.

src/pages/index.astro

```astro
---
---


<script>
  import { TRANSITION_BEFORE_PREPARATION } from "astro:transitions/client";


  document.addEventListener(TRANSITION_BEFORE_PREPARATION, () => {
    /* the listener logic */
  });
</script>
```

#### `TRANSITION_AFTER_PREPARATION`

**Type:** `'astro:after-preparation'`

**Added in:** `astro@3.6.0`

Scheduled for deprecation

This constant is scheduled for deprecation in v6. You can still use it in your project, but you may prefer to update your code now.

A constant to avoid writing the `astro:after-preparation` event name in plain text when you define an event.

src/pages/index.astro

```astro
---
---


<script>
  import { TRANSITION_AFTER_PREPARATION } from "astro:transitions/client";


  document.addEventListener(TRANSITION_AFTER_PREPARATION, () => {
    /* the listener logic */
  });
</script>
```

#### `TRANSITION_BEFORE_SWAP`

**Type:** `'astro:before-swap'`

**Added in:** `astro@3.6.0`

Scheduled for deprecation

This constant is scheduled for deprecation in v6. You can still use it in your project, but you may prefer to update your code now.

A constant to avoid writing the `astro:before-swap` event name in plain text when you define an event.

src/pages/index.astro

```astro
---
---


<script>
  import { TRANSITION_BEFORE_SWAP } from "astro:transitions/client";


  document.addEventListener(TRANSITION_BEFORE_SWAP, () => {
    /* the listener logic */
  });
</script>
```

#### `TRANSITION_AFTER_SWAP`

**Type:** `'astro:after-swap'`

**Added in:** `astro@3.6.0`

Scheduled for deprecation

This constant is scheduled for deprecation in v6. You can still use it in your project, but you may prefer to update your code now.

A constant to avoid writing the `astro:after-swap` event name in plain text when you define an event.

src/pages/index.astro

```astro
---
---


<script>
  import { TRANSITION_AFTER_SWAP } from "astro:transitions/client";


  document.addEventListener(TRANSITION_AFTER_SWAP, () => {
    /* the listener logic */
  });
</script>
```

#### `TRANSITION_PAGE_LOAD`

**Type:** `'astro:page-load'`

**Added in:** `astro@3.6.0`

Scheduled for deprecation

This constant is scheduled for deprecation in v6. You can still use it in your project, but you may prefer to update your code now.

A constant to avoid writing the `astro:page-load` event name in plain text when you define an event.

src/pages/index.astro

```astro
---
---


<script>
  import { TRANSITION_PAGE_LOAD } from "astro:transitions/client";


  document.addEventListener(TRANSITION_PAGE_LOAD, () => {
    /* the listener logic */
  });
</script>
```

## `astro:transitions/client` types

[Section titled “astro:transitions/client types”](#astrotransitionsclient-types)

```ts
import type {
  Direction,
  Fallback,
  NavigationTypeString,
  Options,
  TransitionBeforePreparationEvent,
  TransitionBeforeSwapEvent,
} from 'astro:transitions/client';
```

### `Direction`

[Section titled “Direction”](#direction)

**Type:** `'forward' | 'back'`

**Added in:** `astro@3.2.0`

A union of animation directions:

- `forward`: navigating to the next page in the history or to a new page.
- `back`: navigating to the previous page in the history.

### `Fallback`

[Section titled “Fallback”](#fallback)

**Type:** `'none' | 'animate' | 'swap'`

**Added in:** `astro@3.2.0`

A union of fallback strategies to use in browsers that do not support view transitions:

- `animate`: Astro will simulate view transitions using custom attributes before updating page content.
- `swap`: Astro will not attempt to animate the page. Instead, the old page will be immediately replaced by the new one.
- `none`: Astro will not do any animated page transitions at all. Instead, you will get full page navigation in non-supporting browsers.

Learn more about [controlling the fallback strategy](/en/guides/view-transitions/#fallback-control) with the `ClientRouter`.

### `NavigationTypeString`

[Section titled “NavigationTypeString”](#navigationtypestring)

**Type:** `'push' | 'replace' | 'traverse'`

**Added in:** `astro@3.6.0`

A union of supported history navigation events.

### `TransitionBeforePreparationEvent`

[Section titled “TransitionBeforePreparationEvent”](#transitionbeforepreparationevent)

**Type:** `Event`

**Added in:** `astro@3.6.0`

Represents an [`astro:before-preparation` event](#astrobefore-preparation-event). This can be useful to type the event received by a listener:

src/pages/index.astro

```astro
---
---


<script>
  import {
    TRANSITION_BEFORE_PREPARATION,
    type TransitionBeforePreparationEvent
  } from "astro:transitions/client";


  function listener(event: TransitionBeforePreparationEvent) {
    /* do something */
  }


  document.addEventListener(TRANSITION_BEFORE_PREPARATION, listener);
</script>
```

### `TransitionBeforeSwapEvent`

[Section titled “TransitionBeforeSwapEvent”](#transitionbeforeswapevent)

**Type:** `Event`

**Added in:** `astro@3.6.0`

Represents an [`astro:before-swap` event](#astrobefore-swap-event). This can be useful to type the event received by a listener:

src/pages/index.astro

```astro
---
---


<script>
  import {
    TRANSITION_BEFORE_SWAP,
    type TransitionBeforeSwapEvent
  } from "astro:transitions/client";


  function listener(event: TransitionBeforeSwapEvent) {
    /* do something */
  }


  document.addEventListener(TRANSITION_BEFORE_SWAP, listener);
</script>
```

## Lifecycle events

[Section titled “Lifecycle events”](#lifecycle-events)

### `astro:before-preparation` event

[Section titled “astro:before-preparation event”](#astrobefore-preparation-event)

**Type:** [`TransitionBeforePreparationEvent`](#transitionbeforepreparationevent)

**Added in:** `astro@3.6.0`

An event dispatched at the beginning of a navigation using the View Transitions router. This event happens before any request is made and any browser state is changed.

This event has the attributes:

- [`info`](#info)
- [`sourceElement`](#sourceelement)
- [`navigationType`](#navigationtype)
- [`direction`](#direction-1)
- [`from`](#from)
- [`to`](#to)
- [`formData`](#formdata)
- [`loader()`](#loader)

Read more about how to use this event on the [View Transitions guide](/en/guides/view-transitions/#astrobefore-preparation).

### `astro:after-preparation` event

[Section titled “astro:after-preparation event”](#astroafter-preparation-event)

**Type:** `Event`

**Added in:** `astro@3.6.0`

An event dispatched after the next page in a navigation using View Transitions router is loaded.

This event has no attributes.

Read more about how to use this event on the [View Transitions guide](/en/guides/view-transitions/#astroafter-preparation).

### `astro:before-swap` event

[Section titled “astro:before-swap event”](#astrobefore-swap-event)

**Type:** [`TransitionBeforeSwapEvent`](#transitionbeforeswapevent)

**Added in:** `astro@3.6.0`

An event dispatched after the next page is parsed, prepared, and linked into a document in preparation for the transition but before any content is swapped between the documents.

This event can’t be canceled. Calling `preventDefault()` is a no-op.

This event has the attributes:

- [`info`](#info)
- [`sourceElement`](#sourceelement)
- [`navigationType`](#navigationtype)
- [`direction`](#direction-1)
- [`from`](#from)
- [`to`](#to)
- [`viewTransition`](#viewtransition)
- [`swap()`](#swap)

Read more about how to use this event on the [View Transitions guide](/en/guides/view-transitions/#astrobefore-swap).

### `astro:after-swap` event

[Section titled “astro:after-swap event”](#astroafter-swap-event)

**Type:** `Event`

An event dispatched after the contents of the page have been swapped but before the view transition ends.

The history entry and scroll position have already been updated when this event is triggered.

### `astro:page-load` event

[Section titled “astro:page-load event”](#astropage-load-event)

**Type:** `Event`

An event dispatched after a page completes loading, whether from a navigation using view transitions or native to the browser.

When view transitions is enabled on the page, code that would normally execute on `DOMContentLoaded` should be changed to execute on this event.

### Lifecycle events attributes

[Section titled “Lifecycle events attributes”](#lifecycle-events-attributes)

**Added in:** `astro@3.6.0`

The following attributes are common to both the [`astro:before-preparation`](#astrobefore-preparation-event) and [`astro:before-swap`](#astrobefore-swap-event) events, except for some that are only available with one or the other.

#### `info`

[Section titled “info”](#info)

**Type:** `any`

Arbitrary data defined during navigation.

This is the literal value passed on the [`info` option](#info-option) of the [`navigate()` function](#navigate).

#### `sourceElement`

[Section titled “sourceElement”](#sourceelement)

**Type:** `Element | undefined`

The element that triggered the navigation. This can be, for example, an `<a>` element that was clicked.

When using the [`navigate()` function](#navigate), this will be the element specified in the call.

#### `newDocument`

[Section titled “newDocument”](#newdocument)

**Type:** `Document`

The document for the next page in the navigation. The contents of this document will be swapped in place of the contents of the current document.

#### `navigationType`

[Section titled “navigationType”](#navigationtype)

**Type:** [`NavigationTypeString`](#navigationtypestring)

Which kind of history navigation is happening.

- `push`: a new `NavigationHistoryEntry` is being created for the new page.
- `replace`: the current `NavigationHistoryEntry` is being replaced with an entry for the new page.
- `traverse`: no `NavigationHistoryEntry` is created. The position in the history is changing. The direction of the traversal is given on the [`direction` attribute](#direction-1).

#### `direction`

[Section titled “direction”](#direction-1)

**Type:** `string`

The direction of the transition:

- In an [`astro:before-preparation` event](#astrobefore-preparation-event), this can be used to define custom directions. The property is writable and accepts any string.
- In an [`astro:before-swap` event](#astrobefore-swap-event), this can be used to retrieve the transition direction. The property is readonly and its value can be a predefined [`Direction`](#direction) or any string that an `astro:before-preparation` event listener might have set.

#### `from`

[Section titled “from”](#from)

**Type:** `URL`

The URL of the page initiating the navigation.

#### `to`

[Section titled “to”](#to)

**Type:** `URL`

The URL of the page being navigated to. This property can be modified, the value at the end of the lifecycle will be used in the `NavigationHistoryEntry` for the next page.

#### `formData`

[Section titled “formData”](#formdata)

**Type:** `FormData | undefined`\
**Available in:** [`astro:before-preparation` event](#astrobefore-preparation-event)

When set, a `POST` request will be sent to the [`to` URL](#to) with the given `FormData` object as the content instead of the normal `GET` request.

When submitting an HTML form with view transitions enabled, this field is automatically set to the data in the form. When using the [`navigate()` function](#navigate), this value is the same as given in the options.

#### `loader()`

[Section titled “loader()”](#loader)

**Type:** `() => Promise<void>`\
**Available in:** [`astro:before-preparation` event](#astrobefore-preparation-event)

Implementation of the following phase in the navigation (loading the next page). This implementation can be overridden to add extra behavior.

#### `viewTransition`

[Section titled “viewTransition”](#viewtransition)

**Type:** [`ViewTransition`](https://developer.mozilla.org/en-US/docs/Web/API/ViewTransition)\
**Available in:** [`astro:before-swap` event](#astrobefore-swap-event)

The view transition object used in this navigation. On browsers that do not support the [View Transitions API](https://developer.mozilla.org/en-US/docs/Web/API/View_Transitions_API), this is an object implementing the same API for convenience but without the DOM integration.

#### `swap()`

[Section titled “swap()”](#swap)

**Type:** `() => void`\
**Available in:** [`astro:before-swap` event](#astrobefore-swap-event)

Calls the default document swap logic. By default, this implementation will call the following functions in order:

1. [`deselectScripts()`](#deselectscripts)
2. [`swapRootAttributes()`](#swaprootattributes)
3. [`swapHeadElements()`](#swapheadelements)
4. [`saveFocus()`](#savefocus)
5. [`swapBodyElement()`](#swapbodyelement)

Read more about [building a custom swap function](/en/guides/view-transitions/#building-a-custom-swap-function) in the View Transitions guide.
