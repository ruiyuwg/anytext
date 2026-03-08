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

- arrow\_back Dependency Injection Updated
  - [Overview Updated](/guide/di)
  - [Creating and using services Updated](/guide/di/creating-and-using-services)
  - [Defining dependency providers Updated](/guide/di/defining-dependency-providers)
  - [Injection context](/guide/di/dependency-injection-context)
  - [Hierarchical injectors](/guide/di/hierarchical-dependency-injection)
  - [Optimizing injection tokens](/guide/di/lightweight-injection-tokens)
  - [DI in action](/guide/di/di-in-action)
  - [Debugging and troubleshooting DI New](/guide/di/debugging-and-troubleshooting-di)

The dependency injection (DI) system relies internally on a runtime context where the current injector is available.

This means that injectors can only work when code is executed in such a context.

The injection context is available in these situations:

- During construction (via the `constructor`) of a class being instantiated by the DI system, such as an [`@Injectable`](/api/core/Injectable) or [`@Component`](/api/core/Component).
- In the initializer for fields of such classes.
- In the factory function specified for `useFactory` of a [`Provider`](/api/core/Provider) or an [`@Injectable`](/api/core/Injectable).
- In the `factory` function specified for an [`InjectionToken`](/api/core/InjectionToken).
- Within a stack frame that runs in an injection context.

Knowing when you are in an injection context will allow you to use the [`inject`](api/core/inject) function to inject instances.

**NOTE:** For basic examples of using `inject()` in class constructors and field initializers, see the [overview guide](/guide/di#where-can-inject-be-used).

arrow\_upward\_alt Back to the top

## [Stack frame in context](#stack-frame-in-context)

Some APIs are designed to be run in an injection context. This is the case, for example, with router guards. This allows the use of [`inject`](api/core/inject) within the guard function to access a service.

Here is an example for [`CanActivateFn`](/api/router/CanActivateFn)

```
const canActivateTeam: CanActivateFn = (  route: ActivatedRouteSnapshot,  state: RouterStateSnapshot,) => {  return inject(PermissionsService).canActivate(inject(UserToken), route.params.id);};
```

## [Run within an injection context](#run-within-an-injection-context)

When you want to run a given function in an injection context without already being in one, you can do so with [`runInInjectionContext`](/api/core/runInInjectionContext). This requires access to a given injector, like the [`EnvironmentInjector`](/api/core/EnvironmentInjector), for example:

```
@Injectable({  providedIn: 'root',})export class HeroService {  private environmentInjector = inject(EnvironmentInjector);  someMethod() {    runInInjectionContext(this.environmentInjector, () => {      inject(SomeService); // Do what you need with the injected service    });  }}
```

Note that [`inject`](/api/core/inject) will return an instance only if the injector can resolve the required token.

## [Asserts the context](#asserts-the-context)

Angular provides the [`assertInInjectionContext`](/api/core/assertInInjectionContext) helper function to assert that the current context is an injection context and throws a clear error if not. Pass a reference to the calling function so the error message points to the correct API entry point. This produces a clearer, more actionable message than the default generic injection error.

```
import {ElementRef, assertInInjectionContext, inject} from '@angular/core';export function injectNativeElement<T extends Element>(): T {  assertInInjectionContext(injectNativeElement);  return inject(ElementRef).nativeElement;}
```

You can then call this helper **from an injection context** (constructor, field initializer, provider factory, or code executed via [`runInInjectionContext`](/api/core/runInInjectionContext)):

```
import {Component, inject} from '@angular/core';import {injectNativeElement} from './dom-helpers';@Component({  /* … */})export class PreviewCard {  readonly hostEl = injectNativeElement<HTMLElement>(); // Field initializer runs in an injection context.  onAction() {    const anotherRef = injectNativeElement<HTMLElement>(); // Fails: runs outside an injection context.  }}
```

## [Using DI outside of a context](#using-di-outside-of-a-context)

Calling [`inject`](api/core/inject) or calling [`assertInInjectionContext`](/api/core/assertInInjectionContext) outside of an injection context will throw [error NG0203](/errors/NG0203).
