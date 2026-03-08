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

- arrow\_back Routing Updated
  - [Overview](/guide/routing)
  - [Define routes](/guide/routing/define-routes)
  - [Route Loading Strategies](/guide/routing/loading-strategies)
  - [Show routes with Outlets](/guide/routing/show-routes-with-outlets)
  - [Navigate to routes](/guide/routing/navigate-to-routes)
  - [Read route state](/guide/routing/read-route-state)
  - [Redirecting routes](/guide/routing/redirecting-routes)
  - [Control route access with guards](/guide/routing/route-guards)
  - [Route data resolvers](/guide/routing/data-resolvers)
  - [Lifecycle and events](/guide/routing/lifecycle-and-events)
  - [Testing routing and navigation New](/guide/routing/testing)
  - [Other routing tasks](/guide/routing/common-router-tasks)
  - [Creating custom route matches](/guide/routing/routing-with-urlmatcher)
  - [Rendering strategies New](/guide/routing/rendering-strategies)
  - [Customizing route behavior New](/guide/routing/customizing-route-behavior)
  - [Router reference](/guide/routing/router-reference)
  - [Route transition animations](/guide/routing/route-transition-animations)

Understanding how and when routes and components load in Angular routing is crucial for building responsive web applications. Angular offers two primary strategies to control loading behavior:

1. **Eagerly loaded**: Routes and components that are loaded immediately
2. **Lazily loaded**: Routes and components loaded only when needed

Each approach offers distinct advantages for different scenarios.

arrow\_upward\_alt Back to the top

## [Eagerly loaded components](#eagerly-loaded-components)

When you define a route with the [`component`](api/router/Route#component) property, the referenced component is eagerly loaded as part of the same JavaScript bundle as the route configuration.

```
import {Routes} from '@angular/router';import {HomePage} from './components/home/home-page';import {LoginPage} from './components/auth/login-page';export const routes: Routes = [  // HomePage and LoginPage are both directly referenced in this config,  // so their code is eagerly included in the same JavaScript bundle as this file.  {    path: '',    component: HomePage,  },  {    path: 'login',    component: LoginPage,  },];
```

Eagerly loading route components like this means that the browser has to download and parse all of the JavaScript for these components as part of your initial page load, but the components are available to Angular immediately.

While including more JavaScript in your initial page load leads to slower initial load times, this can lead to more seamless transitions as the user navigates through an application.

## [Lazily loaded components and routes](#lazily-loaded-components-and-routes)

You can use the [`loadComponent`](api/router/Route#loadComponent) property to lazily load the JavaScript for a component at the point at which that route would become active. The [`loadChildren`](api/router/Route#loadChildren) property lazily loads child routes during route matching.

```
import {Routes} from '@angular/router';export const routes: Routes = [  {    path: 'login',    loadComponent: () => import('./components/auth/login-page'),  },  {    path: 'admin',    loadComponent: () => import('./admin/admin.component'),    loadChildren: () => import('./admin/admin.routes'),  },];
```

The [`loadComponent`](/api/router/Route#loadComponent) and [`loadChildren`](/api/router/Route#loadChildren) properties accept a loader function that returns a Promise that resolves to an Angular component or a set of routes respectively. In most cases, this function uses the standard [JavaScript dynamic import API](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/import). You can, however, use any arbitrary async loader function.

If the lazily loaded file uses a `default` export, you can return the `import()` promise directly without an additional `.then` call to select the exported class.

Lazily loading routes can significantly improve the load speed of your Angular application by removing large portions of JavaScript from the initial bundle. These portions of your code compile into separate JavaScript "chunks" that the router requests only when the user visits the corresponding route.

## [Injection context lazy loading](#injection-context-lazy-loading)

The Router executes [`loadComponent`](/api/router/Route#loadComponent) and [`loadChildren`](/api/router/Route#loadChildren) within the **injection context of the current route**, allowing you to call [`inject`](/api/core/inject)inside these loader functions to access providers declared on that route, inherited from parent routes through hierarchical dependency injection, or available globally. This enables context-aware lazy loading.

```
import {Routes} from '@angular/router';import {inject} from '@angular/core';import {FeatureFlags} from './feature-flags';export const routes: Routes = [  {    path: 'dashboard',    // Runs inside the route's injection context    loadComponent: () => {      const flags = inject(FeatureFlags);      return flags.isPremium        ? import('./dashboard/premium-dashboard')        : import('./dashboard/basic-dashboard');    },  },];
```

## [Should I use an eager or a lazy route?](#should-i-use-an-eager-or-a-lazy-route)

There are many factors to consider when deciding on whether a route should be eager or lazy.

In general, eager loading is recommended for primary landing page(s) while other pages would be lazy-loaded.

**NOTE:** While lazy routes have the upfront performance benefit of reducing the amount of initial data requested by the user, it adds future data requests that could be undesirable. This is particularly true when dealing with nested lazy loading at multiple levels, which can significantly impact performance.

## [Next steps](#next-steps)

Learn how to [display the contents of your routes with Outlets](/guide/routing/show-routes-with-outlets).
