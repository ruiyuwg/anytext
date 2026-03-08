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

**TIP:** This guide assumes you're familiar with [component and directive outputs](guide/components/outputs).

The `@angular/rxjs-interop` package offers two APIs related to component and directive outputs.

arrow\_upward\_alt Back to the top

## [Creating an output based on an RxJs Observable](#creating-an-output-based-on-an-rxjs-observable)

The [`outputFromObservable`](/api/core/rxjs-interop/outputFromObservable) lets you create a component or directive output that emits based on an RxJS observable:

```
import {Directive} from '@angular/core';import {outputFromObservable} from '@angular/core/rxjs-interop';@Directive({  /*...*/})class Draggable {  pointerMoves$: Observable<PointerMovements> = listenToPointerMoves();  // Whenever `pointerMoves$` emits, the `pointerMove` event fires.  pointerMove = outputFromObservable(this.pointerMoves$);}
```

The [`outputFromObservable`](/api/core/rxjs-interop/outputFromObservable) function has special meaning to the Angular compiler. **You may only call [`outputFromObservable`](/api/core/rxjs-interop/outputFromObservable) in component and directive property initializers.**

When you `subscribe` to the output, Angular automatically forwards the subscription to the underlying observable. Angular stops forwarding values when the component or directive is destroyed.

**HELPFUL:** Consider using [`output()`](/api/core/output) directly if you can emit values imperatively.

## [Creating an RxJS Observable from a component or directive output](#creating-an-rxjs-observable-from-a-component-or-directive-output)

The [`outputToObservable`](/api/core/rxjs-interop/outputToObservable) function lets you create an RxJS observable from a component output.

```
import {outputToObservable} from '@angular/core/rxjs-interop';@Component(/*...*/)    class CustomSlider {    valueChange = output<number>();}// Instance reference to `CustomSlider`.const slider: CustomSlider = createSlider();outputToObservable(slider.valueChange) // Observable<number>    .pipe(...)    .subscribe(...);
```

**HELPFUL:** Consider using the `subscribe` method on [`OutputRef`](/api/core/OutputRef) directly if it meets your needs.
