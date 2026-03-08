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

In-depth Guides

Dependency Injection

# Dependency injection in Angular

Dependency Injection (DI) is a design pattern used to organize and share code across an application.

**TIP:** Check out Angular's [Essentials](essentials/dependency-injection) before diving into this comprehensive guide.

As an application grows, developers often need to reuse and share features across different parts of the codebase. [Dependency Injection (DI)](https://en.wikipedia.org/wiki/Dependency_injection) is a design pattern used to organize and share code across an application by allowing you to "inject" features into different parts.

Dependency injection is a popular pattern because it allows developers to address common challenges such as:

- **Improved code maintainability**: Dependency injection allows cleaner separation of concerns which enables easier refactoring and reducing code duplication.
- **Scalability**: Modular functionality can be reused across multiple contexts and allows for easier scaling.
- **Better testing**: DI allows unit tests to easily use [test doubles](https://en.wikipedia.org/wiki/Test_double) for situations when using a real implementation is not practical.

arrow\_upward\_alt Back to the top

## [How does dependency injection work in Angular?](#how-does-dependency-injection-work-in-angular)

A dependency is any object, value, function or service that a class needs to work but does not create itself. In other words, it creates a relationship between different parts of your application since it wouldn't work without the dependency.

There are two ways that code interacts with any dependency injection system:

- Code can *provide*, or make available, values.
- Code can *inject*, or ask for, those values as dependencies.

"Values," in this context, can be any JavaScript value, including objects and functions. Common types of injected dependencies include:

- **Configuration values**: Environment-specific constants, API URLs, feature flags, etc.
- **Factories**: Functions that create objects or values based on runtime conditions
- **Services**: Classes that provide common functionality, business logic, or state

Angular components and directives automatically participate in DI, meaning that they can inject dependencies *and* they are available to be injected.

## [What are services?](#what-are-services)

An Angular *service* is a TypeScript class decorated with [`@Injectable`](/api/core/Injectable), which makes an instance of the class available to be injected as a dependency. Services are the most common way of sharing data and functionality across an application.

Common types of services include:

- **Data clients:** Abstracts the details of making requests to a server for data retrieval and mutation
- **State management:** Defines state shared across multiple components or pages
- **Authentication and authorization:** Manages user authentication, token storage, and access control
- **Logging and error handling:** Establishes a common API for logging or communicating error states to the user
- **Event handling and dispatch:** Handles events or notifications that are not associated with a specific component, or for dispatching events and notifications to components, following the [observer pattern](https://en.wikipedia.org/wiki/Observer_pattern)
- **Utility functions:** Offers reusable utility functions like data formatting, validation, or calculations

The following example declares a service named `AnalyticsLogger`:

```
import {Injectable} from '@angular/core';@Injectable({providedIn: 'root'})export class AnalyticsLogger {  trackEvent(category: string, value: string) {    console.log('Analytics event logged:', {      category,      value,      timestamp: new Date().toISOString(),    });  }}
```

**NOTE:** The `providedIn: 'root'` option makes this service available throughout your entire application as a singleton. This is the recommended approach for most services.

## [Injecting dependencies with `inject()`](#injecting-dependencies-with-inject)

You can inject dependencies using Angular's `inject()` function.

Here is an example of a navigation bar that injects `AnalyticsLogger` and Angular [`Router`](/api/router/Router) service to allow users to navigate to a different page while tracking the event.

```
import {Component, inject} from '@angular/core';import {Router} from '@angular/router';import {AnalyticsLogger} from './analytics-logger';@Component({  selector: 'app-navbar',  template: `<a href="#" (click)="navigateToDetail($event)">Detail Page</a>`,})export class Navbar {  private router = inject(Router);  private analytics = inject(AnalyticsLogger);  navigateToDetail(event: Event) {    event.preventDefault();    this.analytics.trackEvent('navigation', '/details');    this.router.navigate(['/details']);  }}
```

### [Where can `inject()` be used?](#where-can-inject-be-used)

You can inject dependencies during construction of a component, directive, or service. The call to [`inject`](/api/core/inject) can appear in either the `constructor` or in a field initializer. Here are some common examples:

```
@Component({  /*...*/})export class MyComponent {  // ✅ In class field initializer  private service = inject(MyService);  // ✅ In constructor body  private anotherService: MyService;  constructor() {    this.anotherService = inject(MyService);  }}
```

```
@Directive({...})export class MyDirective {  // ✅ In class field initializer  private element = inject(ElementRef);}
```

```
import {Injectable, inject} from '@angular/core';import {HttpClient} from '@angular/common/http';@Injectable({providedIn: 'root'})export class MyService {  // ✅ In a service  private http = inject(HttpClient);}
```

```
export const authGuard = () => {  // ✅ In a route guard  const auth = inject(AuthService);  return auth.isAuthenticated();};
```

Angular uses the term "injection context" to describe any place in your code where you can call [`inject`](/api/core/inject). While component, directive, and service construction is the most common, see [injection contexts](/guide/di/dependency-injection-context) for more details.

For more information, see the [inject API docs](api/core/inject#usage-notes).

## [Next steps](#next-steps)

Now that you understand the fundamentals of dependency injection in Angular, you're ready to learn how to create your own services.

The next guide, [Creating and using services](guide/di/creating-and-using-services), will show you:

- How to create a service with the Angular CLI or manually
- How the `providedIn: 'root'` pattern works
- How to inject services into components and other services

This covers the most common use case for services in Angular applications.
