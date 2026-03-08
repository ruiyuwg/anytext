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

The [`RouterOutlet`](/api/router/RouterOutlet) directive is a placeholder that marks the location where the router should render the component for the current URL.

```
<app-header /><!-- Angular inserts your route content here --><router-outlet /><app-footer />
```

```
import {Component} from '@angular/core';import {RouterOutlet} from '@angular/router';@Component({  selector: 'app-root',  imports: [RouterOutlet],  templateUrl: './app.html',  styleUrl: './app.css',})export class App {}
```

In this example, if an application has the following routes defined:

```
import {Routes} from '@angular/router';import {Home} from './home';import {Products} from './products';const routes: Routes = [  {    path: '',    component: Home,    title: 'Home Page',  },  {    path: 'products',    component: Products,    title: 'Our Products',  },];
```

When a user visits `/products`, Angular renders the following:

```
<app-header /><app-products /><app-footer />
```

If the user goes back to the home page, then Angular renders:

```
<app-header /><app-home /><app-footer />
```

When displaying a route, the `<router-outlet>` element remains present in the DOM as a reference point for future navigations. Angular inserts routed content just after the outlet element as a sibling.

```
<!-- Contents of the component's template --><app-header /><router-outlet /><app-footer />
```

```
<!-- Content rendered on the page when the user visits /admin --><app-header /><router-outlet /><app-admin-page /><app-footer />
```

arrow\_upward\_alt Back to the top

## [Nesting routes with child routes](#nesting-routes-with-child-routes)

As your application grows more complex, you might want to create routes that are relative to a component other than your root component. This enables you to create experiences where only part of the application changes when the URL changes, as opposed to the users feeling like the entire page is refreshed.

These types of nested routes are called child routes. This means you're adding a second `<router-outlet>` to your app, because it is in addition to the `<router-outlet>` in AppComponent.

In this example, the `Settings` component will display the desired panel based on what the user selects. One of the unique things you’ll notice about child routes is that the component often has its own `<nav>` and `<router-outlet>`.

```
<h1>Settings</h1><nav>  <ul>    <li><a routerLink="profile">Profile</a></li>    <li><a routerLink="security">Security</a></li>  </ul></nav><router-outlet />
```

A child route is like any other route, in that it needs both a `path` and a `component`. The one difference is that you place child routes in a children array within the parent route.

```
const routes: Routes = [  {    path: 'settings',    component: Settings, // this is the component with the <router-outlet> in the template    children: [      {        path: 'profile', // child route path        component: Profile, // child route component that the router renders      },      {        path: 'security',        component: Security, // another child route component that the router renders      },    ],  },];
```

Once both the `routes` and `<router-outlet>` are configured correctly, your application is now using nested routes!

## [Secondary routes with named outlets](#secondary-routes-with-named-outlets)

Pages may have multiple outlets— you can assign a name to each outlet to specify which content belongs to which outlet.

```
<app-header /><router-outlet /><router-outlet name="read-more" /><router-outlet name="additional-actions" /><app-footer />
```

Each outlet must have a unique name. The name cannot be set or changed dynamically. By default, the name is `'primary'`.

Angular matches the outlet's name to the `outlet` property defined on each route:

```
{  path: 'user/:id',  component: UserDetails,  outlet: 'additional-actions'}
```

## [Outlet lifecycle events](#outlet-lifecycle-events)

There are four lifecycle events that a router outlet can emit:

Event

Description

`activate`

When a new component is instantiated

`deactivate`

When a component is destroyed

`attach`

When the [`RouteReuseStrategy`](/api/router/RouteReuseStrategy) instructs the outlet to attach the subtree

`detach`

When the [`RouteReuseStrategy`](/api/router/RouteReuseStrategy) instructs the outlet to detach the subtree

You can add event listeners with the standard event binding syntax:

```
<router-outlet  (activate)="onActivate($event)"  (deactivate)="onDeactivate($event)"  (attach)="onAttach($event)"  (detach)="onDetach($event)"/>
```

Check out the [API docs for RouterOutlet](/api/router/RouterOutlet?tab=api) if you’d like to learn more.

## [Passing contextual data to routed components](#passing-contextual-data-to-routed-components)

Passing contextual data to routed components often requires global state or complicated route configurations. To make this easier, each [`RouterOutlet`](/api/router/RouterOutlet) supports a `routerOutletData` input. Routed components and their children can read this data as a signal using the [`ROUTER_OUTLET_DATA`](/api/router/ROUTER_OUTLET_DATA) injection token, allowing outlet-specific configuration without modifying route definitions.

```
import {Component} from '@angular/core';import {RouterOutlet} from '@angular/router';@Component({  selector: 'app-dashboard',  imports: [RouterOutlet],  template: `    <h2>Dashboard</h2>    <router-outlet [routerOutletData]="{layout: 'sidebar'}" />  `,})export class Dashboard {}
```

The routed component can inject the provided outlet data using [`ROUTER_OUTLET_DATA`](/api/router/ROUTER_OUTLET_DATA):

```
import {Component, inject} from '@angular/core';import {ROUTER_OUTLET_DATA} from '@angular/router';@Component({  selector: 'app-stats',  template: `<p>Stats view (layout: {{ outletData().layout }})</p>`,})export class Stats {  outletData = inject(ROUTER_OUTLET_DATA) as Signal<{layout: string}>;}
```

When Angular activates the `Stats` in that outlet, it receives `{ layout: 'sidebar' }` as injected data.

**NOTE:** When the `routerOutletData` input is unset, the injected value is null by default.

***

## [Next steps](#next-steps)

Learn how to [navigate to routes](/guide/routing/navigate-to-routes) with Angular Router.
