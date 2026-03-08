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

The RouterLink directive is Angular's declarative approach to navigation. It allows you to use standard anchor elements (`<a>`) that seamlessly integrate with Angular's routing system.

arrow\_upward\_alt Back to the top

## [How to use RouterLink](#how-to-use-routerlink)

Instead of using regular anchor elements `<a>` with an `href` attribute, you add a RouterLink directive with the appropriate path in order to leverage Angular routing.

```
import {RouterLink} from '@angular/router';@Component({  template: `    <nav>      <a routerLink="/user-profile">User profile</a>      <a routerLink="/settings">Settings</a>    </nav>  `,  imports: [RouterLink],  ...})export class App {}
```

### [Using absolute or relative links](#using-absolute-or-relative-links)

**Relative URLs** in Angular routing allow you to define navigation paths relative to the current route's location. This is in contrast to **absolute URLs** which contain the full path with the protocol (e.g., `http://`) and the **root domain** (e.g., `google.com`).

```
<!-- Absolute URL --><a href="https://www.angular.dev/essentials">Angular Essentials Guide</a><!-- Relative URL --><a href="/essentials">Angular Essentials Guide</a>
```

In this example, the first example contains the full path with the protocol (i.e., `https://`) and the root domain (i.e., `angular.dev`) explicitly defined for the essentials page. In contrast, the second example assumes the user is already on the correct root domain for `/essentials`.

Generally speaking, relative URLs are preferred as they are more maintainable across applications since they don’t need to know their absolute position within the routing hierarchy.

### [How relative URLs work](#how-relative-urls-work)

Angular routing has two syntaxes for defining relative URLs: strings and arrays.

```
<!-- Navigates user to /dashboard --><a routerLink="dashboard">Dashboard</a><a [routerLink]="['dashboard']">Dashboard</a>
```

**HELPFUL:** Passing a string is the most common way to define relative URLs.

When you need to define dynamic parameters in a relative URL, use the array syntax:

```
<a [routerLink]="['user', currentUserId]">Current User</a>
```

In addition, Angular routing allows you to specify whether you want the path to be relative to the current URL or to the root domain based on whether the relative path is prefixed with a forward slash (`/`) or not.

For example, if the user is on `example.com/settings`, here is how different relative paths can be defined for various scenarios:

```
<!-- Navigates to /settings/notifications --><a routerLink="notifications">Notifications</a><a routerLink="/settings/notifications">Notifications</a><!-- Navigates to /team/:teamId/user/:userId --><a routerLink="/team/123/user/456">User 456</a><a [routerLink]="['/team', teamId, 'user', userId]">Current User</a>
```

## [Programmatic navigation to routes](#programmatic-navigation-to-routes)

While [`RouterLink`](/api/router/RouterLink) handles declarative navigation in templates, Angular provides programmatic navigation for scenarios where you need to navigate based on logic, user actions, or application state. By injecting [`Router`](/api/router/Router), you can dynamically navigate to routes, pass parameters, and control navigation behavior in your TypeScript code.

### [`router.navigate()`](#routernavigate)

You can use the `router.navigate()` method to programmatically navigate between routes by specifying a URL path array.

```
import {Router} from '@angular/router';@Component({  selector: 'app-dashboard',  template: ` <button (click)="navigateToProfile()">View Profile</button> `,})export class AppDashboard {  private router = inject(Router);  navigateToProfile() {    // Standard navigation    this.router.navigate(['/profile']);    // With route parameters    this.router.navigate(['/users', userId]);    // With query parameters    this.router.navigate(['/search'], {      queryParams: {category: 'books', sort: 'price'},    });    // With matrix parameters    this.router.navigate(['/products', {featured: true, onSale: true}]);  }}
```

`router.navigate()` supports both simple and complex routing scenarios, allowing you to pass route parameters, [query parameters](/guide/routing/read-route-state#query-parameters), and control navigation behavior.

You can also build dynamic navigation paths relative to your component’s location in the routing tree using the `relativeTo` option.

```
import {Router, ActivatedRoute} from '@angular/router';@Component({  selector: 'app-user-detail',  template: `    <button (click)="navigateToEdit()">Edit User</button>    <button (click)="navigateToParent()">Back to List</button>  `,})export class UserDetail {  private route = inject(ActivatedRoute);  private router = inject(Router);  // Navigate to a sibling route  navigateToEdit() {    // From: /users/123    // To:   /users/123/edit    this.router.navigate(['edit'], {relativeTo: this.route});  }  // Navigate to parent  navigateToParent() {    // From: /users/123    // To:   /users    this.router.navigate(['..'], {relativeTo: this.route});  }  navigateToList() {    // Angular resolves the commands array as a single navigation path relative to the current route.    // From: /users/123    // Result: /users/list    this.router.navigate(['..', 'list'], {relativeTo: this.route});  }}
```

### [`router.navigateByUrl()`](#routernavigatebyurl)

The `router.navigateByUrl()` method provides a direct way to programmatically navigate using URL path strings rather than array segments. This method is ideal when you have a full URL path and need to perform absolute navigation, especially when working with externally provided URLs or deep linking scenarios.

```
// Standard route navigationrouter.navigateByUrl('/products');// Navigate to nested routerouter.navigateByUrl('/products/featured');// Complete URL with parameters and fragmentrouter.navigateByUrl('/products/123?view=details#reviews');// Navigate with query parametersrouter.navigateByUrl('/search?category=books&sortBy=price');// With matrix parametersrouter.navigateByUrl('/sales-awesome;isOffer=true;showModal=false');
```

In the event you need to replace the current URL in history, `navigateByUrl` also accepts a configuration object that has a `replaceUrl` option.

```
// Replace current URL in historyrouter.navigateByUrl('/checkout', {  replaceUrl: true,});
```

### [Display a different URL in the address bar](#display-a-different-url-in-the-address-bar)

You can pass a browserUrl option to navigateByUrl to display a different URL in the browser's address bar than the one used for route matching.

This is useful when you want to redirect a user to a different route—such as an error page—without changing the URL that the user originally tried to visit.

```
router.navigateByUrl('/not-found', {browserUrl: '/products/missing-item'});
```

Angular navigates to and renders the `/not-found` route, but the browser address bar shows `/products/missing-item`.

**NOTE:** `browserUrl` only affects what appears in the browser's address bar.

## [Customizing the browser URL with RouterLink](#customizing-the-browser-url-with-routerlink)

The [`RouterLink`](/api/router/RouterLink) directive also supports a `browserUrl` input, which lets you control the URL displayed in the browser's address bar when a link is clicked, independently of the route Angular navigates to.

```
<!-- Navigates to /dashboard, but the address bar shows /home --><a [routerLink]="['/dashboard']" [browserUrl]="'/home'">Go to Dashboard</a>
```

You can also bind a [`UrlTree`](/api/router/UrlTree) for more dynamic use cases:

```
import {Component, inject} from '@angular/core';import {Router, RouterLink, UrlTree} from '@angular/router';@Component({  template: `    <a [routerLink]="['/products', product.id]" [browserUrl]="displayUrl">      {{ product.name }}    </a>  `,  imports: [RouterLink],})export class ProductList {  private router = inject(Router);  product = {id: 42, name: 'Widget'};  // Create a UrlTree to display in the address bar  displayUrl: UrlTree = this.router.createUrlTree(['/products', 'widget']);}
```

## [Next steps](#next-steps)

Learn how to [read route state](/guide/routing/read-route-state) to create responsive and context-aware components.
