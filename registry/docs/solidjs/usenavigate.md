Primitives

# useNavigate

[Edit this page](https://github.com/solidjs/solid-docs/edit/main/src/routes/solid-router/reference/primitives/use-navigate.mdx)

The `useNavigate` function provides a function for programmatically navigating to a new route.

***

## [Import](/solid-router/reference/primitives/use-navigate#import)

```
import { useNavigate } from "@solidjs/router";
```

***

## [Type](/solid-router/reference/primitives/use-navigate#type)

```
interface NavigateOptions<S = unknown> {  resolve: boolean;  replace: boolean;  scroll: boolean;  state: S;}
function useNavigate(): (  to: string,  options?: Partial<NavigateOptions>) => void;function useNavigate(delta: number): void;
```

***

## [Parameters](/solid-router/reference/primitives/use-navigate#parameters)

`useNavigate` takes no arguments.

***

## [Return value](/solid-router/reference/primitives/use-navigate#return-value)

- **Type:** `(to: string | number, options?: NavigateOptions) => void | (delta: number) => void`

Returns a function that accepts two arguments:

### [`to`](/solid-router/reference/primitives/use-navigate#to)

- **Type:** `string | number`
- **Required:** Yes

The target destination.

- `string`: A path to navigate to.
- `number`: A history delta (e.g., `-1` for back, `1` for forward). If provided, the `options` argument is ignored.

### [`options`](/solid-router/reference/primitives/use-navigate#options)

- **Type:** `NavigateOptions`
- **Required:** No

Configuration object for the navigation.

#### [`resolve`](/solid-router/reference/primitives/use-navigate#resolve)

- **Type:** `boolean`
- **Default:** `true`

Resolves the path relative to the current route. If `false`, the path is resolved against the root (`/`).

If `to` is a query-only string (e.g., `?sort=asc`), this defaults to `false` to preserve the current pathname.

#### [`replace`](/solid-router/reference/primitives/use-navigate#replace)

- **Type**: `boolean`
- **Default**: `false`

Replaces the current history entry instead of adding a new one. Used for redirects or state updates to prevent the user from navigating back to the previous state.

#### [`scroll`](/solid-router/reference/primitives/use-navigate#scroll)

- **Type**: `boolean`
- **Default**: `true`

Scrolls the window to the top after navigation.

- `true`: Scrolls to the top or to the element matching the hash.
- `false`: Maintains the current scroll position (unless a hash matches).

#### [`state`](/solid-router/reference/primitives/use-navigate#state)

- **Type**: `any`
- **Default**: `undefined`

Arbitrary state stored in `history.state`. This value is accessible via `useLocation().state`.

State is serialized using the [structured clone algorithm](https://developer.mozilla.org/en-US/docs/Web/API/Web_Workers_API/Structured_clone_algorithm), which supports most built-in types but not functions or DOM nodes.

***

## [Examples](/solid-router/reference/primitives/use-navigate#examples)

### [Basic usage](/solid-router/reference/primitives/use-navigate#basic-usage)

```
import { useNavigate } from "@solidjs/router";
const navigate = useNavigate();
navigate("/users/123");
```

### [With `replace`](/solid-router/reference/primitives/use-navigate#with-replace)

```
import { useNavigate } from "@solidjs/router";
const navigate = useNavigate();
// Redirect (replace history)function login() {  navigate("/dashboard", { replace: true });}
```

### [With `delta`](/solid-router/reference/primitives/use-navigate#with-delta)

```
import { useNavigate } from "@solidjs/router";
const navigate = useNavigate();
// Go back one pagefunction goBack() {  navigate(-1);}
```

### [With `state`](/solid-router/reference/primitives/use-navigate#with-state)

```
import { useNavigate } from "@solidjs/router";
const navigate = useNavigate();
// Pass custom statenavigate("/checkout", {  state: { from: "cart", total: 100 },});
```

***

## [Related](/solid-router/reference/primitives/use-navigate#related)

- [useLocation](/solid-router/reference/primitives/use-location)
- [redirect](/solid-router/reference/response-helpers/redirect)

[Report an issue with this page](https://github.com/solidjs/solid-docs-next/issues/new?assignees=ladybluenotes\&labels=improve+documentation%2Cpending+review\&projects=\&template=CONTENT.yml\&title=[Content]:\&subject=/solid-router/reference/primitives/use-navigate.mdx\&page=https://docs.solidjs.com/solid-router/reference/primitives/use-navigate)

On this page

1. [Overview](#_top)
2. [Import](#import)
3. [Type](#type)
4. [Parameters](#parameters)
5. [Return value](#return-value)
   1. [to](#to)
   2. [options](#options)
6. [Examples](#examples)
   1. [Basic usage](#basic-usage)
   2. [With replace](#with-replace)
   3. [With delta](#with-delta)
   4. [With state](#with-state)
7. [Related](#related)

Contribute

1. [Edit this page](https://github.com/solidjs/solid-docs/edit/main/src/routes/solid-router/reference/primitives/use-navigate.mdx)
2. [Report an issue with this page](https://github.com/solidjs/solid-docs-next/issues/new?assignees=ladybluenotes\&labels=improve+documentation%2Cpending+review\&projects=\&template=CONTENT.yml\&title=[Content]:\&subject=/solid-router/reference/primitives/use-navigate.mdx\&page=https://docs.solidjs.com/solid-router/reference/primitives/use-navigate)
