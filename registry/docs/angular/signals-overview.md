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

In-depth Guides

Signals

# Angular Signals

Angular Signals is a system that granularly tracks how and where your state is used throughout an application, allowing the framework to optimize rendering updates.

**TIP:** Check out Angular's [Essentials](essentials/signals) before diving into this comprehensive guide.

arrow\_upward\_alt Back to the top

## [What are signals?](#what-are-signals)

A **signal** is a wrapper around a value that notifies interested consumers when that value changes. Signals can contain any value, from primitives to complex data structures.

You read a signal's value by calling its getter function, which allows Angular to track where the signal is used.

Signals may be either *writable* or *read-only*.

### [Writable signals](#writable-signals)

Writable signals provide an API for updating their values directly. You create writable signals by calling the [`signal`](/api/core/signal) function with the signal's initial value:

```
const count = signal(0);// Signals are getter functions - calling them reads their value.console.log('The count is: ' + count());
```

To change the value of a writable signal, either `.set()` it directly:

```
count.set(3);
```

or use the `.update()` operation to compute a new value from the previous one:

```
// Increment the count by 1.count.update((value) => value + 1);
```

Writable signals have the type [`WritableSignal`](/api/core/WritableSignal).

#### [Converting writable signals to readonly](#converting-writable-signals-to-readonly)

[`WritableSignal`](/api/core/WritableSignal) provide a `asReadonly()` method that returns a readonly version of the signal. This is useful when you want to expose a signal's value to consumers without allowing them to modify it directly:

```
@Injectable({providedIn: 'root'})export class CounterState {  // Private writable state  private readonly _count = signal(0);  readonly count = this._count.asReadonly(); // public readonly  increment() {    this._count.update((v) => v + 1);  }}@Component({  /* ... */})export class AwesomeCounter {  state = inject(CounterState);  count = this.state.count; // can read but not modify  increment() {    this.state.increment();  }}
```

The readonly signal reflects any changes made to the original writable signal, but cannot be modified using `set()` or `update()` methods.

**IMPORTANT:** The readonly signals do **not** have any built-in mechanism that would prevent deep-mutation of their value.

### [Computed signals](#computed-signals)

**Computed signal** are read-only signals that derive their value from other signals. You define computed signals using the [`computed`](/api/core/computed) function and specifying a derivation:

```
const count: WritableSignal<number> = signal(0);const doubleCount: Signal<number> = computed(() => count() * 2);
```

The `doubleCount` signal depends on the `count` signal. Whenever `count` updates, Angular knows that `doubleCount` needs to update as well.

#### [Computed signals are both lazily evaluated and memoized](#computed-signals-are-both-lazily-evaluated-and-memoized)

`doubleCount`'s derivation function does not run to calculate its value until the first time you read `doubleCount`. The calculated value is then cached, and if you read `doubleCount` again, it will return the cached value without recalculating.

If you then change `count`, Angular knows that `doubleCount`'s cached value is no longer valid, and the next time you read `doubleCount` its new value will be calculated.

As a result, you can safely perform computationally expensive derivations in computed signals, such as filtering arrays.

#### [Computed signals are not writable signals](#computed-signals-are-not-writable-signals)

You cannot directly assign values to a computed signal. That is,

```
doubleCount.set(3);
```

produces a compilation error, because `doubleCount` is not a [`WritableSignal`](/api/core/WritableSignal).

#### [Computed signal dependencies are dynamic](#computed-signal-dependencies-are-dynamic)

Only the signals actually read during the derivation are tracked. For example, in this [`computed`](/api/core/computed) the `count` signal is only read if the `showCount` signal is true:

```
const showCount = signal(false);const count = signal(0);const conditionalCount = computed(() => {  if (showCount()) {    return `The count is ${count()}.`;  } else {    return 'Nothing to see here!';  }});
```

When you read `conditionalCount`, if `showCount` is `false` the "Nothing to see here!" message is returned *without* reading the `count` signal. This means that if you later update `count` it will *not* result in a recomputation of `conditionalCount`.

If you set `showCount` to `true` and then read `conditionalCount` again, the derivation will re-execute and take the branch where `showCount` is `true`, returning the message which shows the value of `count`. Changing `count` will then invalidate `conditionalCount`'s cached value.

Note that dependencies can be removed during a derivation as well as added. If you later set `showCount` back to `false`, then `count` will no longer be considered a dependency of `conditionalCount`.

## [Reactive contexts](#reactive-contexts)

A **reactive context** is a runtime state where Angular monitors signal reads to establish a dependency. The code reading the signal is the *consumer*, and the signal being read is the *producer*.

Angular automatically enters a reactive context when:

- Executing an [`effect`](/api/core/effect), [`afterRenderEffect`](/api/core/afterRenderEffect) callback.
- Evaluating a [`computed`](/api/core/computed) signal.
- Evaluating a [`linkedSignal`](/api/core/linkedSignal).
- Evaluating a [`resource`](/api/core/resource)'s params or loader function.
- Rendering a component template (including bindings in the [host property](guide/components/host-elements#binding-to-the-host-element)).

During these operations, Angular creates a *live* connection. If a tracked signal changes, Angular will *eventually* re-run the consumer.

### [Asserts the reactive context](#asserts-the-reactive-context)

Angular provides the [`assertNotInReactiveContext`](/api/core/assertNotInReactiveContext) helper function to assert that code is not executing within a reactive context. Pass a reference to the calling function so the error message points to the correct API entry point if the assertion fails. This produces a clearer, more actionable error message than a generic reactive context error.

```
import {assertNotInReactiveContext} from '@angular/core';function subscribeToEvents() {  assertNotInReactiveContext(subscribeToEvents);  // Safe to proceed - subscription logic here}
```

### [Reading without tracking dependencies](#reading-without-tracking-dependencies)

Rarely, you may want to execute code which may read signals within a reactive function such as [`computed`](/api/core/computed) or [`effect`](/api/core/effect) *without* creating a dependency.

For example, suppose that when `currentUser` changes, the value of a `counter` should be logged. You could create an [`effect`](/api/core/effect) which reads both signals:

```
effect(() => {  console.log(`User set to ${currentUser()} and the counter is ${counter()}`);});
```

This example will log a message when *either* `currentUser` or `counter` changes. However, if the effect should only run when `currentUser` changes, then the read of `counter` is only incidental and changes to `counter` shouldn't log a new message.

You can prevent a signal read from being tracked by calling its getter with [`untracked`](/api/core/untracked):

```
effect(() => {  console.log(`User set to ${currentUser()} and the counter is ${untracked(counter)}`);});
```

[`untracked`](/api/core/untracked) is also useful when an effect needs to invoke some external code which shouldn't be treated as a dependency:

```
effect(() => {  const user = currentUser();  untracked(() => {    // If the `loggingService` reads signals, they won't be counted as    // dependencies of this effect.    this.loggingService.log(`User set to ${user}`);  });});
```

### [Reactive context and async operations](#reactive-context-and-async-operations)

The reactive context is only active for synchronous code. Any signal reads that occur after an asynchronous boundary will not be tracked as dependencies.

Avoid

```
effect(async () => {  const data = await fetchUserData();  // Reactive context is lost here - theme() won't be tracked  console.log(`User: ${data.name}, Theme: ${theme()}`);});
```

To ensure all signal reads are tracked, read signals before the `await`. This includes passing them as arguments to the awaited function, since arguments are evaluated synchronously:

Prefer

```
effect(async () => {  const currentTheme = theme(); // Read before await  const data = await fetchUserData();  console.log(`User: ${data.name}, Theme: ${currentTheme}`);});
```

Prefer

```
effect(async () => {  // Also works: signal is read before await (as function argument)  await renderContent(docContent());});
```

## [Advanced derivations](#advanced-derivations)

While [`computed`](/api/core/computed) handles simple readonly derivations, you might find yourself needing a writable state that is dependent on other signals. For more information see the [Dependent state with linkedSignal](/guide/signals/linked-signal) guide.

All signal APIs are synchronous— [`signal`](/api/core/signal), [`computed`](/api/core/computed), `input`, etc. However, applications often need to deal with data that is available asynchronously. A [`Resource`](/api/core/Resource) gives you a way to incorporate async data into your application's signal-based code and still allow you to access its data synchronously. For more information see the [Async reactivity with resources](/guide/signals/resource) guide.

## [Executing side effects on non-reactive APIs](#executing-side-effects-on-non-reactive-apis)

Synchronous or asynchronous derivations are recommended when we want to react to state changes. However, this doesn't cover all the possible use cases, and you'll sometimes find yourself in a situation where you need to react to signal changes on non-reactive apis. Use [`effect`](/api/core/effect) or [`afterRenderEffect`](/api/core/afterRenderEffect) for those specific usecases. For more information see [Side effects for non-reactive APIs](/guide/signals/effect) guide.

## [Reading signals in `OnPush` components](#reading-signals-in-onpush-components)

When you read a signal within an `OnPush` component's template, Angular tracks the signal as a dependency of that component. When the value of that signal changes, Angular automatically [marks](api/core/ChangeDetectorRef#markforcheck) the component to ensure it gets updated the next time change detection runs. Refer to the [Skipping component subtrees](best-practices/skipping-subtrees) guide for more information about `OnPush` components.

## [Advanced topics](#advanced-topics)

### [Signal equality functions](#signal-equality-functions)

When creating a signal, you can optionally provide an equality function, which will be used to check whether the new value is actually different than the previous one.

```
import isEqual from 'lodash/isEqual';const data = signal(['test'], {equal: isEqual});// Even though this is a different array instance, the deep equality// function will consider the values to be equal, and the signal won't// trigger any updates.data.set(['test']);
```

Equality functions can be provided to both writable and computed signals.

**HELPFUL:** By default, signals use referential equality ([`Object.is()`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Object/is) comparison).

### [Type checking signals](#type-checking-signals)

You can use [`isSignal`](/api/core/isSignal) to check if a value is a [`Signal`](/api/core/Signal):

```
const count = signal(0);const doubled = computed(() => count() * 2);isSignal(count); // trueisSignal(doubled); // trueisSignal(42); // false
```

To specifically check if a signal is writable, use [`isWritableSignal`](/api/core/isWritableSignal):

```
const count = signal(0);const doubled = computed(() => count() * 2);isWritableSignal(count); // trueisWritableSignal(doubled); // false
```

## [Using signals with RxJS](#using-signals-with-rxjs)

See [RxJS interop with Angular signals](ecosystem/rxjs-interop) for details on interoperability between signals and RxJS.
