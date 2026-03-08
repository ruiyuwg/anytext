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

Angular Router allows you to read and use information associated with a route to create responsive and context-aware components.

arrow\_upward\_alt Back to the top

## [Get information about the current route with ActivatedRoute](#get-information-about-the-current-route-with-activatedroute)

[`ActivatedRoute`](/api/router/ActivatedRoute) is a service from `@angular/router` that provides all the information associated with the current route.

```
import {Component} from '@angular/core';import {ActivatedRoute} from '@angular/router';@Component({  selector: 'app-product',})export class Product {  private activatedRoute = inject(ActivatedRoute);  constructor() {    console.log(this.activatedRoute);  }}
```

The [`ActivatedRoute`](/api/router/ActivatedRoute) can provide different information about the route. Some common properties include:

Property

Details

`url`

An `Observable` of the route paths, represented as an array of strings for each part of the route path.

`data`

An `Observable` that contains the `data` object provided for the route. Also contains any resolved values from the resolve guard.

`params`

An `Observable` that contains the required and optional parameters specific to the route.

`queryParams`

An `Observable` that contains the query parameters available to all routes.

Check out the [](/api/router/ActivatedRoute)[`ActivatedRoute`](/api/router/ActivatedRoute) API docs for a complete list of what you can access with in the route.

## [Understanding route snapshots](#understanding-route-snapshots)

Page navigations are events over time, and you can access the router state at a given time by retrieving a route snapshot.

Route snapshots contain essential information about the route, including its parameters, data, and child routes. In addition, snapshots are static and will not reflect future changes.

Here’s an example of how you’d access a route snapshot:

```
import {ActivatedRoute, ActivatedRouteSnapshot} from '@angular/router';@Component({  /*...*/})export class UserProfile {  readonly userId: string;  private route = inject(ActivatedRoute);  constructor() {    // Example URL: https://www.angular.dev/users/123?role=admin&status=active#contact    // Access route parameters from snapshot    this.userId = this.route.snapshot.paramMap.get('id');    // Access multiple route elements    const snapshot = this.route.snapshot;    console.log({      url: snapshot.url, // https://www.angular.dev      // Route parameters object: {id: '123'}      params: snapshot.params,      // Query parameters object: {role: 'admin', status: 'active'}      queryParams: snapshot.queryParams, // Query parameters    });  }}
```

Check out the [](/api/router/ActivatedRoute)[`ActivatedRoute`](/api/router/ActivatedRoute) API docs and [](/api/router/ActivatedRouteSnapshot)[`ActivatedRouteSnapshot`](/api/router/ActivatedRouteSnapshot) API docs for a complete list of all properties you can access.

## [Reading parameters on a route](#reading-parameters-on-a-route)

There are two types of parameters that developers can utilize from a route: route and query parameters.

### [Route Parameters](#route-parameters)

Route parameters allow you to pass data to a component through the URL. This is useful when you want to display specific content based on an identifier in the URL, like a user ID or a product ID.

You can [define route parameters](/guide/routing/define-routes#define-url-paths-with-route-parameters) by prefixing the parameter name with a colon (`:`).

```
import {Routes} from '@angular/router';import {Product} from './product';const routes: Routes = [{path: 'product/:id', component: Product}];
```

You can access parameters by subscribing to `route.params`.

```
import {Component, inject, signal} from '@angular/core';import {ActivatedRoute} from '@angular/router';@Component({  selector: 'app-product-detail',  template: `<h1>Product Details: {{ productId() }}</h1>`,})export class ProductDetail {  productId = signal('');  private activatedRoute = inject(ActivatedRoute);  constructor() {    // Access route parameters    this.activatedRoute.params.subscribe((params) => {      this.productId.set(params['id']);    });  }}
```

### [Query Parameters](#query-parameters)

[Query parameters](https://developer.mozilla.org/en-US/docs/Web/API/URLSearchParams) provide a flexible way to pass optional data through URLs without affecting the route structure. Unlike route parameters, query parameters can persist across navigation events and are perfect for handling filtering, sorting, pagination, and other stateful UI elements.

```
// Single parameter structure// /products?category=electronicsrouter.navigate(['/products'], {  queryParams: {category: 'electronics'},});// Multiple parameters// /products?category=electronics&sort=price&page=1router.navigate(['/products'], {  queryParams: {    category: 'electronics',    sort: 'price',    page: 1,  },});
```

You can access query parameters with `route.queryParams`.

Here is an example of a `ProductList` that updates the query parameters that affect how it displays a list of products:

```
import {ActivatedRoute, Router} from '@angular/router';@Component({  selector: 'app-product-list',  template: `    <div>      <select (change)="updateSort($event)">        <option value="price">Price</option>        <option value="name">Name</option>      </select>      <!-- Products list -->    </div>  `,})export class ProductList {  private route = inject(ActivatedRoute);  private router = inject(Router);  constructor() {    // Access query parameters reactively    this.route.queryParams.subscribe((params) => {      const sort = params['sort'] || 'price';      const page = Number(params['page']) || 1;      this.loadProducts(sort, page);    });  }  updateSort(event: Event) {    const sort = (event.target as HTMLSelectElement).value;    // Update URL with new query parameter    this.router.navigate([], {      queryParams: {sort},      queryParamsHandling: 'merge', // Preserve other query parameters    });  }}
```

In this example, users can use a select element to sort the product list by name or price. The associated change handler updates the URL’s query parameters, which in turn triggers a change event that can read the updated query parameters and update the product list.

For more information, check out the [official docs on QueryParamsHandling](/api/router/QueryParamsHandling).

### [Matrix Parameters](#matrix-parameters)

Matrix parameters are optional parameters that belong to a specific URL segment, rather than applying to the entire route. Unlike query parameters which appear after a `?` and apply globally, matrix parameters use semicolons (`;`) and are scoped to individual path segments.

Matrix parameters are useful when you need to pass auxiliary data to a specific route segment without affecting the route definition or matching behavior. Like query parameters, they don't need to be defined in your route configuration.

```
// URL format: /path;key=value// Multiple parameters: /path;key1=value1;key2=value2// Navigate with matrix parametersthis.router.navigate(['/awesome-products', {view: 'grid', filter: 'new'}]);// Results in URL: /awesome-products;view=grid;filter=new
```

**Using ActivatedRoute**

```
import {Component, inject} from '@angular/core';import {ActivatedRoute} from '@angular/router';@Component(/* ... */)export class AwesomeProducts {  private route = inject(ActivatedRoute);  constructor() {    // Access matrix parameters via params    this.route.params.subscribe((params) => {      const view = params['view']; // e.g., 'grid'      const filter = params['filter']; // e.g., 'new'    });  }}
```

**NOTE:** As an alternative to using [`ActivatedRoute`](/api/router/ActivatedRoute), matrix parameters are also bound to component inputs when using the [`withComponentInputBinding`](/api/router/withComponentInputBinding).

## [Detect active current route with RouterLinkActive](#detect-active-current-route-with-routerlinkactive)

You can use the [`RouterLinkActive`](/api/router/RouterLinkActive) directive to dynamically style navigation elements based on the current active route. This is common in navigation elements to inform users what the active route is.

```
<nav>  <a    class="button"    routerLink="/about"    routerLinkActive="active-button"    ariaCurrentWhenActive="page"  >    About  </a>  |  <a    class="button"    routerLink="/settings"    routerLinkActive="active-button"    ariaCurrentWhenActive="page"  >    Settings  </a></nav>
```

In this example, Angular Router will apply the `active-button` class to the correct anchor link and `ariaCurrentWhenActive` to `page` when the URL matches the corresponding [`routerLink`](/api/router/RouterLinkWithHref).

If you need to add multiple classes onto the element, you can use either a space-separated string or an array:

```
<!-- Space-separated string syntax --><a routerLink="/user/bob" routerLinkActive="class1 class2">Bob</a><!-- Array syntax --><a routerLink="/user/bob" [routerLinkActive]="['class1', 'class2']">Bob</a>
```

When you specify a value for routerLinkActive, you are also defining the same value for `ariaCurrentWhenActive`. This makes sure that visually impaired users (which may not perceive the different styling being applied) can also identify the active button.

If you want to define a different value for aria, you’ll need to explicitly set the value using the `ariaCurrentWhenActive` directive.

### [Route matching strategy](#route-matching-strategy)

By default, [`RouterLinkActive`](/api/router/RouterLinkActive) considers any ancestors in the route a match.

```
<a [routerLink]="['/user/jane']" routerLinkActive="active-link"> User </a><a [routerLink]="['/user/jane/role/admin']" routerLinkActive="active-link"> Role </a>
```

When the user visits `/user/jane/role/admin`, both links would have the `active-link` class.

### [Only apply RouterLinkActive on exact route matches](#only-apply-routerlinkactive-on-exact-route-matches)

If you only want to apply the class on an exact match, you need to provide the `routerLinkActiveOptions` directive with a configuration object that contains the value `exact: true`.

```
<a  [routerLink]="['/user/jane']"  routerLinkActive="active-link"  [routerLinkActiveOptions]="{exact: true}">  User</a><a  [routerLink]="['/user/jane/role/admin']"  routerLinkActive="active-link"  [routerLinkActiveOptions]="{exact: true}">  Role</a>
```

If you want to be more precise in how a route is matched, it’s worth noting that `exact: true` is actually syntactic sugar for the full set of matching options:

```
// `exact: true` is equivalent to{  paths: 'exact',  fragment: 'ignored',  matrixParams: 'ignored',  queryParams: 'exact',}// `exact: false` is equivalent{  paths: 'subset',  fragment: 'ignored',  matrixParams: 'ignored',  queryParams: 'subset',}
```

For more information, check out the official docs for [isActiveMatchOptions](/api/router/IsActiveMatchOptions).

### [Apply RouterLinkActive to an ancestor](#apply-routerlinkactive-to-an-ancestor)

The RouterLinkActive directive can also be applied to an ancestor element in order to allow developers to style the elements as desired.

```
<div routerLinkActive="active-link" [routerLinkActiveOptions]="{exact: true}">  <a routerLink="/user/jim">Jim</a>  <a routerLink="/user/bob">Bob</a></div>
```

For more information, check out the [API docs for RouterLinkActive](/api/router/RouterLinkActive).

## [Check if a URL is active](#check-if-a-url-is-active)

The [`isActive`](/api/router/isActive) function returns a computed signal that tracks whether a given URL is currently active in the router. The signal automatically updates as the router state changes.

```
import {Component, inject} from '@angular/core';import {isActive, Router} from '@angular/router';@Component({  template: `    <div [class.active]="isSettingsActive()">      <h2>Settings</h2>    </div>  `,})export class Panel {  private router = inject(Router);  isSettingsActive = isActive('/settings', this.router, {    paths: 'subset',    queryParams: 'ignored',    fragment: 'ignored',    matrixParams: 'ignored',  });}
```
