Client

# clientOnly

[Edit this page](https://github.com/solidjs/solid-docs/edit/main/src/routes/solid-start/reference/client/client-only.mdx)

The `clientOnly` function allows components or pages to render exclusively on the client side, bypassing server-side rendering (*SSR*). This is useful for code that relies on the browser-specific APIs, such as `window` or `document`.

***

## [How to Use `clientOnly` in Components](/solid-start/reference/client/client-only#how-to-use-clientonly-in-components)

1. **Isolate Client-Only Logic**: Create a separate file for the component that depends on browser-specific features, such as DOM or browser APIs.

   ```
   export default function ClientOnlyComponent() {  const location = document.location.href;  return Current URL: {location};}
   ```

2. **Import with `clientOnly`**: Use `clientOnly` to dynamically import the isolated component in your parent component or page.

   ```
   import { clientOnly } from "@solidjs/start";
   const ClientOnlyComp = clientOnly(() => import("./ClientOnlyComponent"));
   export default function IsomorphicComponent() {  return ;}
   ```

3. **Add a Fallback (Optional)**: Provide a `fallback` prop to display content while the client-only component is loading.

   ```
   Loading...} />
   ```

***

## [Disabling SSR for Entire Pages](/solid-start/reference/client/client-only#disabling-ssr-for-entire-pages)

To disable SSR for an entire page, apply `clientOnly` at the page level. This ensures the page renders only on the client.

```
import { clientOnly } from "@solidjs/start";
export default clientOnly(async () => ({ default: Page }), { lazy: true });
function Page() {  // This code runs only on the client  return <div>Client-only page content</div>;}
```

***

## [Parameters](/solid-start/reference/client/client-only#parameters)

Argument

Type

Description

`fn`

`() => Promise<{ default: () => JSX.Element }>`

A function that dynamically imports a component to be rendered only on the client side.

`options`

`{ lazy?: boolean }`

An optional object to configure loading behavior. Set `lazy: false` for eager loading

`props`

`Record<string, any> & { fallback?: JSX.Element }`

Props passed to the component, including an optional `fallback` for rendering while the component loads.

[Report an issue with this page](https://github.com/solidjs/solid-docs-next/issues/new?assignees=ladybluenotes\&labels=improve+documentation%2Cpending+review\&projects=\&template=CONTENT.yml\&title=[Content]:\&subject=/solid-start/reference/client/client-only.mdx\&page=https://docs.solidjs.com/solid-start/reference/client/client-only)

On this page

1. [Overview](#_top)
2. [How to Use clientOnly in Components](#how-to-use-clientonly-in-components)
3. [Disabling SSR for Entire Pages](#disabling-ssr-for-entire-pages)
4. [Parameters](#parameters)

Contribute

1. [Edit this page](https://github.com/solidjs/solid-docs/edit/main/src/routes/solid-start/reference/client/client-only.mdx)
2. [Report an issue with this page](https://github.com/solidjs/solid-docs-next/issues/new?assignees=ladybluenotes\&labels=improve+documentation%2Cpending+review\&projects=\&template=CONTENT.yml\&title=[Content]:\&subject=/solid-start/reference/client/client-only.mdx\&page=https://docs.solidjs.com/solid-start/reference/client/client-only)
