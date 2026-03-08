Advanced

# Request events

[Edit this page](https://github.com/solidjs/solid-docs/edit/main/src/routes/solid-start/advanced/request-events.mdx)

Request events in SolidStart are retrieved using the [`getRequestEvent`](/reference/server-utilities/get-request-event) from `@solidjs/web`. These requests happen anywhere on the server.

***

## [Locals](/solid-start/advanced/request-events#locals)

SolidStart uses `event.locals` to pass around a local context where needed.

When adding fields to `event.locals`, the fields can be typed:

```
/// <reference types="@solidjs/start/env" />declare module App {  interface RequestEventLocals {    /**     * Declare your getRequestEvent().locals here     */  }}
```

***

## [nativeEvent](/solid-start/advanced/request-events#nativeevent)

Sometimes access is still needed to the underlying event from [Vinxi](https://vinxi.vercel.app/). This can be accessed that using the `.nativeEvent` property, which is the underlying H3Event used, and can be passed to the helpers available in the ecosystem. Note that Vinxi HTTP helpers *do not* treeshake so you can only import them in files that do not contain client or isomorphic code.

Many of these events support Async Local Storage so this may not be needed.

[Report an issue with this page](https://github.com/solidjs/solid-docs-next/issues/new?assignees=ladybluenotes\&labels=improve+documentation%2Cpending+review\&projects=\&template=CONTENT.yml\&title=[Content]:\&subject=/solid-start/advanced/request-events.mdx\&page=https://docs.solidjs.com/solid-start/advanced/request-events)

On this page

1. [Overview](#_top)
2. [Locals](#locals)
3. [nativeEvent](#nativeevent)

Contribute

1. [Edit this page](https://github.com/solidjs/solid-docs/edit/main/src/routes/solid-start/advanced/request-events.mdx)
2. [Report an issue with this page](https://github.com/solidjs/solid-docs-next/issues/new?assignees=ladybluenotes\&labels=improve+documentation%2Cpending+review\&projects=\&template=CONTENT.yml\&title=[Content]:\&subject=/solid-start/advanced/request-events.mdx\&page=https://docs.solidjs.com/solid-start/advanced/request-events)
