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

The Angular Router supports a powerful matching strategy that you can use to help users navigate your application. This matching strategy supports static routes, variable routes with parameters, wildcard routes, and so on. Also, build your own custom pattern matching for situations in which the URLs are more complicated.

In this tutorial, you'll build a custom route matcher using Angular's [`UrlMatcher`](/api/router/UrlMatcher). This matcher looks for a Twitter handle in the URL.

arrow\_upward\_alt Back to the top

## [Objectives](#objectives)

Implement Angular's [`UrlMatcher`](/api/router/UrlMatcher) to create a custom route matcher.

## [Create a sample application](#create-a-sample-application)

Using the Angular CLI, create a new application, *angular-custom-route-match*. In addition to the default Angular application framework, you will also create a *profile* component.

1. Create a new Angular project, *angular-custom-route-match*.

   ```
   ng new angular-custom-route-match
   ```

   When prompted with `Would you like to add Angular routing?`, select `Y`.

   When prompted with `Which stylesheet format would you like to use?`, select `CSS`.

   After a few moments, a new project, `angular-custom-route-match`, is ready.

2. From your terminal, navigate to the `angular-custom-route-match` directory.

3. Create a component, *profile*.

   ```
   ng generate component profile
   ```

4. In your code editor, locate the file, `profile.html` and replace the placeholder content with the following HTML.

   ### profile.html

   ```
   Hello {{ username() }}!
   ```

5. In your code editor, locate the file, `app.html` and replace the placeholder content with the following HTML.

   ### app.html

   ```
   Routing with Custom MatchingNavigate to my profile
   ```

## [Configure your routes for your application](#configure-your-routes-for-your-application)

With your application framework in place, you next need to add routing capabilities to the `app.config.ts` file. As a part of this process, you will create a custom URL matcher that looks for a Twitter handle in the URL. This handle is identified by a preceding `@` symbol.

1. In your code editor, open your `app.config.ts` file.

2. Add an `import` statement for Angular's [`provideRouter`](/api/router/provideRouter) and [`withComponentInputBinding`](/api/router/withComponentInputBinding) as well as the application routes.

   ```
   import {provideRouter, withComponentInputBinding} from '@angular/router';import {routes} from './app.routes';
   ```

3. In the providers array, add a `provideRouter(routes, withComponentInputBinding())` statement.

4. Define the custom route matcher by adding the following code to the application routes.

   ### app.routes.ts

   ```
   {    matcher: (url) => {      if (url.length === 1 && url[0].path.match(/^@[\w]+$/gm)) {        return {consumed: url, posParams: {username: new UrlSegment(url[0].path.slice(1), {})}};      }      return null;    },    component: Profile,  },
   ```

This custom matcher is a function that performs the following tasks:

- The matcher verifies that the array contains only one segment
- The matcher employs a regular expression to ensure that the format of the username is a match
- If there is a match, the function returns the entire URL, defining a `username` route parameter as a substring of the path
- If there isn't a match, the function returns null and the router continues to look for other routes that match the URL

**HELPFUL:** A custom URL matcher behaves like any other route definition. Define child routes or lazy loaded routes as you would with any other route.

## [Reading the route parameters](#reading-the-route-parameters)

With the custom matcher in place, you can now bind the route parameter in the `profile` component.

In your code editor, open your `profile.ts` file and create an `input` matching the `username` parameter. We added the [`withComponentInputBinding`](/api/router/withComponentInputBinding) feature earlier in [`provideRouter`](/api/router/provideRouter). This allows the [`Router`](/api/router/Router) to bind information directly to the route components.

```
username = input.required<string>();
```

## [Test your custom URL matcher](#test-your-custom-url-matcher)

With your code in place, you can now test your custom URL matcher.

1. From a terminal window, run the `ng serve` command.

   ```
   ng serve
   ```

2. Open a browser to `http://localhost:4200`.

   You should see a single web page, consisting of a sentence that reads `Navigate to my profile`.

3. Click the **my profile** hyperlink.

   A new sentence, reading `Hello, Angular!` appears on the page.

## [Next steps](#next-steps)

Pattern matching with the Angular Router provides you with a lot of flexibility when you have dynamic URLs in your application. To learn more about the Angular Router, see the following topics:

**HELPFUL:** This content is based on [Custom Route Matching with the Angular Router](https://medium.com/@brandontroberts/custom-route-matching-with-the-angular-router-fbdd48665483), by [Brandon Roberts](https://twitter.com/brandontroberts).
