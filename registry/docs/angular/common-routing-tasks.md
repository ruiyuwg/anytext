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

This guide covers some other common tasks associated with using Angular router in your application.

arrow\_upward\_alt Back to the top

## [Getting route information](#getting-route-information)

Often, as a user navigates your application, you want to pass information from one component to another. For example, consider an application that displays a shopping list of grocery items. Each item in the list has a unique `id`. To edit an item, users click an Edit button, which opens an `EditGroceryItem` component. You want that component to retrieve the `id` for the grocery item so it can display the right information to the user.

Use a route to pass this type of information to your application components. To do so, you use the [`withComponentInputBinding`](/api/router/withComponentInputBinding) feature with [`provideRouter`](/api/router/provideRouter) or the `bindToComponentInputs` option of [`RouterModule.forRoot`](/api/router/RouterModule#forRoot).

To get information from a route:

1. ### [Add `withComponentInputBinding`](#add-withcomponentinputbinding)

   Add the [`withComponentInputBinding`](/api/router/withComponentInputBinding) feature to the [`provideRouter`](/api/router/provideRouter) method.

   ```
   providers: [provideRouter(appRoutes, withComponentInputBinding())];
   ```

2. ### [Add an `input` to the component](#add-an-input-to-the-component)

   Update the component to have an [`input()`](/api/core/input) property matching the name of the parameter.

   ```
   id = input.required();hero = computed(() => this.service.getHero(id()));
   ```

3. ### [Optional: Use a default value](#optional-use-a-default-value)

   The router assigns values to all inputs based on the current route when [`withComponentInputBinding`](/api/router/withComponentInputBinding) is enabled. The router assigns `undefined` if no route data matches the input key, such as when an optional query parameter is missing. You should include `undefined` in the `input`'s type when there's a possibility that an input might not be matched by the route.

   Provide a default value by either using the `transform` option on the input or managing a local state with a [`linkedSignal`](/api/core/linkedSignal).

   ```
   id = input.required({  transform: (maybeUndefined: string | undefined) => maybeUndefined ?? '0',});// orid = input();internalId = linkedSignal(() => this.id() ?? getDefaultId());
   ```

**NOTE:** You can bind all route data with key, value pairs to component inputs: static or resolved route data, path parameters, matrix parameters, and query parameters. If you want to use the parent components route info you will need to set the router `paramsInheritanceStrategy` option: `withRouterConfig({paramsInheritanceStrategy: 'always'})` . See [router configuration options](guide/routing/customizing-route-behavior#router-configuration-options) for details on other available settings.

## [Displaying a 404 page](#displaying-a-404-page)

To display a 404 page, set up a [wildcard route](guide/routing/define-routes#wildcards) with the `component` property set to the component you'd like to use for your 404 page as follows:

```
const routes: Routes = [  {path: 'first-component', component: First},  {path: 'second-component', component: Second},  {path: '**', component: PageNotFound}, // Wildcard route for a 404 page];
```

The last route with the `path` of `**` is a wildcard route. The router selects this route if the requested URL doesn't match any of the paths earlier in the list and sends the user to the `PageNotFound`.

## [Link parameters array](#link-parameters-array)

A link parameters array holds the following ingredients for router navigation:

- The path of the route to the destination component
- Required and optional route parameters that go into the route URL

Bind the [`RouterLink`](/api/router/RouterLink) directive to such an array like this:

```
<a [routerLink]="['/heroes']">Heroes</a>
```

The following is a two-element array when specifying a route parameter:

```
<a [routerLink]="['/hero', hero.id]">  <span class="badge">{{ hero.id }}</span  >{{ hero.name }}</a>
```

Provide optional route parameters in an object, as in `{ foo: 'foo' }`:

```
<a [routerLink]="['/crisis-center', {foo: 'foo'}]">Crisis Center</a>
```

This syntax passes matrix parameters, which are optional parameters associated with a specific URL segment. Learn more about [matrix parameters](/guide/routing/read-route-state#matrix-parameters).

These three examples cover the needs of an application with one level of routing. However, with a child router, such as in the crisis center, you create new link array possibilities.

The following minimal [`RouterLink`](/api/router/RouterLink) example builds upon a specified default child route for the crisis center.

```
<a [routerLink]="['/crisis-center']">Crisis Center</a>
```

Review the following:

- The first item in the array identifies the parent route (`/crisis-center`)
- There are no parameters for this parent route
- There is no default for the child route so you need to pick one
- You're navigating to the `CrisisList`, whose route path is `/`, but you don't need to explicitly add the slash

Consider the following router link that navigates from the root of the application down to the Dragon Crisis:

```
<a [routerLink]="['/crisis-center', 1]">Dragon Crisis</a>
```

- The first item in the array identifies the parent route (`/crisis-center`)
- There are no parameters for this parent route
- The second item identifies the child route details about a particular crisis (`/:id`)
- The details child route requires an `id` route parameter
- You added the `id` of the Dragon Crisis as the second item in the array (`1`)
- The resulting path is `/crisis-center/1`

You could also redefine the `App` template with Crisis Center routes exclusively:

```
@Component({  template: `    <h1 class="title">Angular Router</h1>    <nav>      <a [routerLink]="['/crisis-center']">Crisis Center</a>      <a [routerLink]="['/crisis-center/1', {foo: 'foo'}]">Dragon Crisis</a>      <a [routerLink]="['/crisis-center/2']">Shark Crisis</a>    </nav>    <router-outlet />  `,})export class App {}
```

In summary, you can write applications with one, two or more levels of routing. The link parameters array affords the flexibility to represent any routing depth and any legal sequence of route paths, (required) router parameters, and (optional) route parameter objects.

## [`LocationStrategy` and browser URL styles](#locationstrategy-and-browser-url-styles)

When the router navigates to a new component view, it updates the browser's location and history with a URL for that view.

Modern HTML5 browsers support [history.pushState](https://developer.mozilla.org/docs/Web/API/History_API/Working_with_the_History_API#adding_and_modifying_history_entries "HTML5 browser history push-state"), a technique that changes a browser's location and history without triggering a server page request. The router can compose a "natural" URL that is indistinguishable from one that would otherwise require a page load.

Here's the Crisis Center URL in this "HTML5 pushState" style:

```
localhost:3002/crisis-center
```

Older browsers send page requests to the server when the location URL changes unless the change occurs after a "#" (called the "hash"). Routers can take advantage of this exception by composing in-application route URLs with hashes. Here's a "hash URL" that routes to the Crisis Center.

```
localhost:3002/src/#/crisis-center
```

The router supports both styles with two [`LocationStrategy`](/api/common/LocationStrategy) providers:

Providers

Details

[`PathLocationStrategy`](/api/common/PathLocationStrategy)

The default "HTML5 pushState" style.

[`HashLocationStrategy`](/api/common/HashLocationStrategy)

The "hash URL" style.

The [`RouterModule.forRoot()`](/api/router/RouterModule#forRoot) function sets the [`LocationStrategy`](/api/common/LocationStrategy) to the [`PathLocationStrategy`](/api/common/PathLocationStrategy), which makes it the default strategy. You also have the option of switching to the [`HashLocationStrategy`](/api/common/HashLocationStrategy) with an override during the bootstrapping process.

**HELPFUL:** For more information on providers and the bootstrap process, see [Dependency Injection](guide/di/defining-dependency-providers).
