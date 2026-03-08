Skip to main content

menu

menuDocs

- Introduction

  - [What is Angular?](/overview)
  - [Installation](/installation)
  - Essentials
  - [Start coding! 🚀](/tutorials/learn-angular)

- In-depth Guides

  - Signals Updated
  - Components
  - Templates
  - Directives
  - Dependency Injection Updated
  - Routing Updated
  - Forms Updated
  - HTTP Client
  - Server-side & hybrid-rendering
  - Testing
  - Angular Aria New
  - Internationalization
  - Animations Updated
  - [Drag and drop](/guide/drag-drop)

- Build with AI New

  - [Get Started](/ai)
  - [LLM prompts and AI IDE setup](/ai/develop-with-ai)
  - [Design Patterns](/ai/design-patterns)
  - [Angular CLI MCP Server setup](/ai/mcp)
  - [Angular AI Tutor](/ai/ai-tutor)

- Developer Tools

  - Angular CLI
  - Libraries
  - DevTools
  - [Language Service](/tools/language-service)

- Best Practices

  - [Style Guide Updated](/style-guide)
  - [Security](/best-practices/security)
  - [Accessibility](/best-practices/a11y)
  - [Unhandled errors in Angular](/best-practices/error-handling)
  - Performance
  - [Keeping up-to-date](/update)

- Developer Events

  - [Angular v21 Release New](/events/v21)

- Extended Ecosystem

  - [NgModules](/guide/ngmodules/overview)
  - Legacy Animations
  - Using RxJS with Angular
  - Service Workers & PWAs
  - [Web workers](/ecosystem/web-workers)
  - [Custom build pipeline](/ecosystem/custom-build-pipeline)
  - [Tailwind New](/guide/tailwind)
  - [Angular Fire](https://github.com/angular/angularfire#readme)
  - [Google Maps](https://github.com/angular/components/tree/main/src/google-maps#readme)
  - [Google Pay](https://github.com/google-pay/google-pay-button#angular)
  - [YouTube player](https://github.com/angular/components/blob/main/src/youtube-player/README.md)
  - [Angular CDK](https://material.angular.dev/cdk/categories)
  - [Angular Material](https://material.angular.dev/)

- arrow\_back Signals Updated
  - [Overview](/guide/signals)
  - [Dependent state with linkedSignal](/guide/signals/linked-signal)
  - [Async reactivity with resources](/guide/signals/resource)
  - [Side effects for non-reactives APIs New](/guide/signals/effect)

**IMPORTANT:** [`resource`](/api/core/resource) is [experimental](reference/releases#experimental). It's ready for you to try, but it might change before it is stable.

All signal APIs are synchronous— [`signal`](/api/core/signal), [`computed`](/api/core/computed), `input`, etc. However, applications often need to deal with data that is available asynchronously. A [`Resource`](/api/core/Resource) gives you a way to incorporate async data into your application's signal-based code and still allow you to access its data synchronously.

You can use a [`Resource`](/api/core/Resource) to perform any kind of async operation, but the most common use-case for [`Resource`](/api/core/Resource) is fetching data from a server. The following example creates a resource to fetch some user data.

The easiest way to create a [`Resource`](/api/core/Resource) is the [`resource`](/api/core/resource) function.

```
import {resource, Signal} from '@angular/core';const userId: Signal<string> = getUserId();const userResource = resource({  // Define a reactive computation.  // The params value recomputes whenever any read signals change.  params: () => ({id: userId()}),  // Define an async loader that retrieves data.  // The resource calls this function every time the `params` value changes.  loader: ({params}) => fetchUser(params),});// Create a computed signal based on the result of the resource's loader function.const firstName = computed(() => {  if (userResource.hasValue()) {    // `hasValue` serves 2 purposes:    // - It acts as type guard to strip `undefined` from the type    // - If protects against reading a throwing `value` when the resource is in error state    return userResource.value().firstName;  }  // fallback in case the resource value is `undefined` or if the resource is in error state  return undefined;});
```

The [`resource`](/api/core/resource) function accepts a [`ResourceOptions`](/api/core/ResourceOptions) object with two main properties: `params` and `loader`.

The `params` property defines a reactive computation that produces a parameter value. Whenever signals read in this computation change, the resource produces a new parameter value, similar to [`computed`](/api/core/computed).

The `loader` property defines a [`ResourceLoader`](/api/core/ResourceLoader)— an async function that retrieves some state. The resource calls the loader every time the `params` computation produces a new value, passing that value to the loader. See [Resource loaders](#resource-loaders) below for more details.

[`Resource`](/api/core/Resource) has a `value` signal that contains the results of the loader.

arrow\_upward\_alt Back to the top

## [Resource loaders](#resource-loaders)

When creating a resource, you specify a [`ResourceLoader`](/api/core/ResourceLoader). This loader is an async function that accepts a single parameter— a [`ResourceLoaderParams`](/api/core/ResourceLoaderParams) object— and returns a value.

The [`ResourceLoaderParams`](/api/core/ResourceLoaderParams) object contains three properties: `params`, `previous`, and `abortSignal`.

Property

Description

`params`

The value of the resource's `params` computation.

`previous`

An object with a `status` property, containing the previous [`ResourceStatus`](/api/core/ResourceStatus).

`abortSignal`

An [`AbortSignal`](https://developer.mozilla.org/en-US/docs/Web/API/AbortSignal). See [Aborting requests](#aborting-requests) below for details.

If the `params` computation returns `undefined`, the loader function does not run and the resource status becomes `'idle'`.

### [Aborting requests](#aborting-requests)

A resource aborts an outstanding loading operation if the `params` computation changes while the resource is loading.

You can use the `abortSignal` in [`ResourceLoaderParams`](/api/core/ResourceLoaderParams) to respond to aborted requests. For example, the native `fetch` function accepts an `AbortSignal`:

```
const userId: Signal<string> = getUserId();const userResource = resource({  params: () => ({id: userId()}),  loader: ({params, abortSignal}): Promise<User> => {    // fetch cancels any outstanding HTTP requests when the given `AbortSignal`    // indicates that the request has been aborted.    return fetch(`users/${params.id}`, {signal: abortSignal});  },});
```

See [`AbortSignal` on MDN](https://developer.mozilla.org/en-US/docs/Web/API/AbortSignal) for more details on request cancellation with `AbortSignal`.

### [Reloading](#reloading)

You can programmatically trigger a resource's `loader` by calling the `reload` method.

```
const userId: Signal<string> = getUserId();const userResource = resource({  params: () => ({id: userId()}),  loader: ({params}) => fetchUser(params),});// ...userResource.reload();
```

## [Resource status](#resource-status)

The resource object has several signal properties for reading the status of the asynchronous loader.

Property

Description

`value`

The most recent value of the resource, or `undefined` if no value has been received.

`hasValue`

Whether the resource has a value.

`error`

The most recent error encountered while running the resource's loader, or `undefined` if no error has occurred.

`isLoading`

Whether the resource loader is currently running.

`status`

The resource's specific [`ResourceStatus`](/api/core/ResourceStatus), as described below.

The `status` signal provides a specific [`ResourceStatus`](/api/core/ResourceStatus) that describes the state of the resource using a string constant.

Status

`value()`

Description

`'idle'`

`undefined`

The resource has no valid request and the loader has not run.

`'error'`

`undefined`

The loader has encountered an error.

`'loading'`

`undefined`

The loader is running as a result of the `params` value changing.

`'reloading'`

Previous value

The loader is running as a result calling of the resource's `reload` method.

`'resolved'`

Resolved value

The loader has completed.

`'local'`

Locally set value

The resource's value has been set locally via `.set()` or `.update()`

You can use this status information to conditionally display user interface elements, such loading indicators and error messages.

## [Reactive data fetching with `httpResource`](#reactive-data-fetching-with-httpresource)

[](/guide/http/http-resource)[`httpResource`](/api/common/http/httpResource) is a wrapper around [`HttpClient`](/api/common/http/HttpClient) that gives you the request status and response as signals. It makes HTTP requests through the Angular HTTP stack, including interceptors.

## [Resource composition with snapshots](#resource-composition-with-snapshots)

A [`ResourceSnapshot`](/api/core/ResourceSnapshot) is a structured representation of a resource's current state. Every resource has a `snapshot` property that provides a signal of its current state.

```
const userId: Signal<string> = getUserId();const userResource = resource({  params: () => ({id: userId()}),  loader: ({params}) => fetchUser(params),});const userSnapshot = userResource.snapshot;
```

Each snapshot contains a `status` and either a `value` or an `error`.

### [Composing resources with snapshots](#composing-resources-with-snapshots)

You can create new resources from snapshots using [`resourceFromSnapshots`](/api/core/resourceFromSnapshots). This enables composition with signal APIs like [`computed`](/api/core/computed) and [`linkedSignal`](/api/core/linkedSignal) to transform resource behavior.

```
import {linkedSignal, resourceFromSnapshots, Resource, ResourceSnapshot} from '@angular/core';function withPreviousValue<T>(input: Resource<T>): Resource<T> {  const derived = linkedSignal<ResourceSnapshot<T>, ResourceSnapshot<T>>({    source: input.snapshot,    computation: (snap, previous) => {      if (snap.status === 'loading' && previous && previous.value.status !== 'error') {        // When the input resource enters loading state, we keep the value        // from its previous state, if any.        return {status: 'loading' as const, value: previous.value.value};      }      // Otherwise we simply forward the state of the input resource.      return snap;    },  });  return resourceFromSnapshots(derived);}@Component({  /*... */})export class AwesomeProfile {  userId = input.required<number>();  user = withPreviousValue(httpResource(() => `/user/${this.userId()}`));  // When userId changes, user.value() keeps the old user data until the new one loads}
```
