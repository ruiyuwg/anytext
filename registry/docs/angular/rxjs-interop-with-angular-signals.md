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

- arrow\_back Using RxJS with Angular
  - [Signals interop](/ecosystem/rxjs-interop)
  - [Component output interop](/ecosystem/rxjs-interop/output-interop)
  - [Unsubscribing with takeUntilDestroyed](/ecosystem/rxjs-interop/take-until-destroyed)

The `@angular/core/rxjs-interop` package offers APIs that help you integrate RxJS and Angular signals.

arrow\_upward\_alt Back to the top

## [Create a signal from an RxJs Observable with `toSignal`](#create-a-signal-from-an-rxjs-observable-with-tosignal)

Use the [`toSignal`](/api/core/rxjs-interop/toSignal) function to create a signal which tracks the value of an Observable. It behaves similarly to the `async` pipe in templates, but is more flexible and can be used anywhere in an application.

```
import {Component} from '@angular/core';import {AsyncPipe} from '@angular/common';import {interval} from 'rxjs';import {toSignal} from '@angular/core/rxjs-interop';@Component({  template: `{{ counter() }}`,})export class Ticker {  counterObservable = interval(1000);  // Get a `Signal` representing the `counterObservable`'s value.  counter = toSignal(this.counterObservable, {initialValue: 0});}
```

Like the `async` pipe, [`toSignal`](/api/core/rxjs-interop/toSignal) subscribes to the Observable immediately, which may trigger side effects. The subscription created by [`toSignal`](/api/core/rxjs-interop/toSignal) automatically unsubscribes from the given Observable when the component or service which calls [`toSignal`](/api/core/rxjs-interop/toSignal) is destroyed.

**IMPORTANT:** [`toSignal`](/api/core/rxjs-interop/toSignal) creates a subscription. You should avoid calling it repeatedly for the same Observable, and instead reuse the signal it returns.

### [Injection context](#injection-context)

[`toSignal`](/api/core/rxjs-interop/toSignal) by default needs to run in an [injection context](guide/di/dependency-injection-context), such as during construction of a component or service. If an injection context is not available, you can manually specify the [`Injector`](/api/core/Injector) to use instead.

### [Initial values](#initial-values)

Observables may not produce a value synchronously on subscription, but signals always require a current value. There are several ways to deal with this "initial" value of [`toSignal`](/api/core/rxjs-interop/toSignal) signals.

#### [The `initialValue` option](#the-initialvalue-option)

As in the example above, you can specify an `initialValue` option with the value the signal should return before the Observable emits for the first time.

#### [`undefined` initial values](#undefined-initial-values)

If you don't provide an `initialValue`, the resulting signal will return `undefined` until the Observable emits. This is similar to the `async` pipe's behavior of returning `null`.

#### [The `requireSync` option](#the-requiresync-option)

Some Observables are guaranteed to emit synchronously, such as `BehaviorSubject`. In those cases, you can specify the `requireSync: true` option.

When `requireSync` is `true`, [`toSignal`](/api/core/rxjs-interop/toSignal) enforces that the Observable emits synchronously on subscription. This guarantees that the signal always has a value, and no `undefined` type or initial value is required.

### [`manualCleanup`](#manualcleanup)

By default, [`toSignal`](/api/core/rxjs-interop/toSignal) automatically unsubscribes from the Observable when the component or service that creates it is destroyed.

To override this behavior, you can pass the `manualCleanup` option. You can use this setting for Observables that complete themselves naturally.

#### [Custom equality comparison](#custom-equality-comparison)

Some observables may emit values that are **equals** even though they differ by reference or minor detail. The `equal` option lets you define a **custom equal function** to determine when two consecutive values should be considered the same.

When two emitted values are considered equal, the resulting signal **does not update**. This prevents redundant computations, DOM updates, or effects from re-running unnecessarily.

```
import {Component} from '@angular/core';import {toSignal} from '@angular/core/rxjs-interop';import {interval, map} from 'rxjs';@Component(/* ... */)export class EqualExample {  temperature$ = interval(1000).pipe(    map(() => ({temperature: Math.floor(Math.random() * 3) + 20})), // 20, 21, or 22 randomly  );  // Only update if the temperature changes  temperature = toSignal(this.temperature$, {    initialValue: {temperature: 20},    equal: (prev, curr) => prev.temperature === curr.temperature,  });}
```

### [Error and Completion](#error-and-completion)

If an Observable used in [`toSignal`](/api/core/rxjs-interop/toSignal) produces an error, that error is thrown when the signal is read.

If an Observable used in [`toSignal`](/api/core/rxjs-interop/toSignal) completes, the signal continues to return the most recently emitted value before completion.

## [Create an RxJS Observable from a signal with `toObservable`](#create-an-rxjs-observable-from-a-signal-with-toobservable)

Use the [`toObservable`](/api/core/rxjs-interop/toObservable) utility to create an `Observable` which tracks the value of a signal. The signal's value is monitored with an [`effect`](/api/core/effect) which emits the value to the Observable when it changes.

```
import {Component, signal} from '@angular/core';import {toObservable} from '@angular/core/rxjs-interop';@Component(/* ... */)export class SearchResults {  query: Signal<string> = inject(QueryService).query;  query$ = toObservable(this.query);  results$ = this.query$.pipe(switchMap((query) => this.http.get('/search?q=' + query)));}
```

As the [`query`](/api/animations/query) signal changes, the `query$` Observable emits the latest query and triggers a new HTTP request.

### [Injection context](#injection-context)

[`toObservable`](/api/core/rxjs-interop/toObservable) by default needs to run in an [injection context](guide/di/dependency-injection-context), such as during construction of a component or service. If an injection context is not available, you can manually specify the [`Injector`](/api/core/Injector) to use instead.

### [Timing of `toObservable`](#timing-of-toobservable)

[`toObservable`](/api/core/rxjs-interop/toObservable) uses an effect to track the value of the signal in a `ReplaySubject`. On subscription, the first value (if available) may be emitted synchronously, and all subsequent values will be asynchronous.

Unlike Observables, signals never provide a synchronous notification of changes. Even if you update a signal's value multiple times, [`toObservable`](/api/core/rxjs-interop/toObservable) will only emit the value after the signal stabilizes.

```
const obs$ = toObservable(mySignal);obs$.subscribe((value) => console.log(value));mySignal.set(1);mySignal.set(2);mySignal.set(3);
```

Here, only the last value (3) will be logged.

## [Using `rxResource` for async data](#using-rxresource-for-async-data)

**IMPORTANT:** [`rxResource`](/api/core/rxjs-interop/rxResource) is [experimental](reference/releases#experimental). It's ready for you to try, but it might change before it is stable.

Angular's [](/guide/signals/resource)[`resource`](/api/core/resource) function gives you a way to incorporate async data into your application's signal-based code. Building on top of this pattern, [`rxResource`](/api/core/rxjs-interop/rxResource) lets you define a resource where the source of your data is defined in terms of an RxJS `Observable`. Instead of accepting a `loader` function, [`rxResource`](/api/core/rxjs-interop/rxResource) accepts a `stream` function that accepts an RxJS `Observable`.

```
import {Component, inject} from '@angular/core';import {rxResource} from '@angular/core/rxjs-interop';@Component(/* ... */)export class UserProfile {  // This component relies on a service that exposes data through an RxJS Observable.  private userData = inject(MyUserDataClient);  protected userId = input<string>();  private userResource = rxResource({    params: () => ({userId: this.userId()}),    // The `stream` property expects a factory function that returns    // a data stream as an RxJS Observable.    stream: ({params}) => this.userData.load(params.userId),  });}
```

The `stream` property accepts a factory function for an RxJS `Observable`. This factory function is passed the resource's `params` value and returns an `Observable`. The resource calls this factory function every time the `params` computation produces a new value. See [Resource loaders](/guide/signals/resource#resource-loaders) for more details on the parameters passed to the factory function.

In all other ways, [`rxResource`](/api/core/rxjs-interop/rxResource) behaves like and provides the same APIs as [`resource`](/api/core/resource) for specifying parameters, reading values, checking loading state, and examining errors.
