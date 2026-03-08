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

Route transition animations enhance user experience by providing smooth visual transitions when navigating between different views in your Angular application. [Angular Router](/guide/routing) includes built-in support for the browser's View Transitions API, enabling seamless animations between route changes in supported browsers.

**HELPFUL:** The Router's native View Transitions integration is currently in [developer preview](/reference/releases#developer-preview). Native View Transitions are a relatively new browser feature with limited support across all browsers.

arrow\_upward\_alt Back to the top

## [How View Transitions work](#how-view-transitions-work)

View transitions use the browser's native [`document.startViewTransition` API](https://developer.mozilla.org/en-US/docs/Web/API/Document/startViewTransition) to create smooth animations between different states of your application. The API works by:

1. **Capturing the current state** - The browser takes a screenshot of the current page
2. **Executing the DOM update** - Your callback function runs to update the DOM
3. **Capturing the new state** - The browser captures the updated page state
4. **Playing the transition** - The browser animates between the old and new states

Here's the basic structure of the `startViewTransition` API:

```
document.startViewTransition(async () => {  await updateTheDOMSomehow();});
```

For more details about the browser API, see the [Chrome Explainer](https://developer.chrome.com/docs/web-platform/view-transitions).

## [How the Router uses view transitions](#how-the-router-uses-view-transitions)

Angular Router integrates view transitions into the navigation lifecycle to create seamless route changes. During navigation, the Router:

1. **Completes navigation preparation** - Route matching, [lazy loading](guide/routing/loading-strategies#lazily-loaded-components-and-routes), [guards](/guide/routing/route-guards), and [resolvers](/guide/routing/data-resolvers) execute
2. **Initiates the view transition** - Router calls `startViewTransition` when routes are ready for activation
3. **Updates the DOM** - Router activates new routes and deactivates old ones within the transition callback
4. **Finalizes the transition** - The transition Promise resolves when Angular completes rendering

The Router's view transition integration acts as a [progressive enhancement](https://developer.mozilla.org/en-US/docs/Glossary/Progressive_Enhancement). When browsers don't support the View Transitions API, the Router performs normal DOM updates without animation, ensuring your application works across all browsers.

## [Enabling View Transitions in the Router](#enabling-view-transitions-in-the-router)

Enable view transitions by adding the [`withViewTransitions`](/api/router/withViewTransitions) feature to your [router configuration](/guide/routing/define-routes#adding-the-router-to-your-application). Angular supports both standalone and NgModule bootstrap approaches:

### [Standalone bootstrap](#standalone-bootstrap)

```
import {bootstrapApplication} from '@angular/platform-browser';import {provideRouter, withViewTransitions} from '@angular/router';import {routes} from './app.routes';bootstrapApplication(MyApp, {  providers: [provideRouter(routes, withViewTransitions())],});
```

### [NgModule bootstrap](#ngmodule-bootstrap)

```
import {NgModule} from '@angular/core';import {RouterModule} from '@angular/router';@NgModule({  imports: [RouterModule.forRoot(routes, {enableViewTransitions: true})],})export class AppRouting {}
```

[Try the "count" example on StackBlitz](https://stackblitz.com/edit/stackblitz-starters-2dnvtm?file=src%2Fmain.ts)

This example demonstrates how router navigation can replace direct `startViewTransition` calls for counter updates.

## [Customizing transitions with CSS](#customizing-transitions-with-css)

You can customize view transitions using CSS to create unique animation effects. The browser creates separate transition elements that you can target with CSS selectors.

To create custom transitions:

1. **Add view-transition-name** - Assign unique names to elements you want to animate
2. **Define global animations** - Create CSS animations in your global styles
3. **Target transition pseudo-elements** - Use `::view-transition-old()` and `::view-transition-new()` selectors

Here's an example that adds a rotation effect to a counter element:

```
/* Define keyframe animations */@keyframes rotate-out {  to {    transform: rotate(90deg);  }}@keyframes rotate-in {  from {    transform: rotate(-90deg);  }}/* Target view transition pseudo-elements */::view-transition-old(count),::view-transition-new(count) {  animation-duration: 200ms;  animation-name: -ua-view-transition-fade-in, rotate-in;}::view-transition-old(count) {  animation-name: -ua-view-transition-fade-out, rotate-out;}
```

**IMPORTANT:** Define view transition animations in your global styles file, not in component styles. Angular's [view encapsulation](/guide/components/styling#style-scoping) scopes component styles, which prevents them from targeting the transition pseudo-elements correctly.

[Try the updated “count” example on StackBlitz](https://stackblitz.com/edit/stackblitz-starters-fwn4i7?file=src%2Fmain.ts)

## [Advanced transition control with onViewTransitionCreated](#advanced-transition-control-with-onviewtransitioncreated)

The [`withViewTransitions`](/api/router/withViewTransitions) feature accepts an options object with an `onViewTransitionCreated` callback for advanced control over view transitions. This callback:

- Runs in an [injection context](/guide/di/dependency-injection-context#run-within-an-injection-context)
- Receives a [](/api/router/ViewTransitionInfo)[`ViewTransitionInfo`](/api/router/ViewTransitionInfo) object containing:
  - The `ViewTransition` instance from `startViewTransition`
  - The [](/api/router/ActivatedRouteSnapshot)[`ActivatedRouteSnapshot`](/api/router/ActivatedRouteSnapshot) for the route being navigated from
  - The [](/api/router/ActivatedRouteSnapshot)[`ActivatedRouteSnapshot`](/api/router/ActivatedRouteSnapshot) for the route being navigated to

Use this callback to customize transition behavior based on navigation context. For example, you can skip transitions for specific navigation types:

```
import {inject} from '@angular/core';import {Router, withViewTransitions, isActive} from '@angular/router';withViewTransitions({  onViewTransitionCreated: ({transition}) => {    const router = inject(Router);    const targetUrl = router.currentNavigation()!.finalUrl!;    // Skip transition if only fragment or query params change    const config = {      paths: 'exact',      matrixParams: 'exact',      fragment: 'ignored',      queryParams: 'ignored',    };    const isTargetRouteCurrent = isActive(targetUrl, router, config);    if (isTargetRouteCurrent()) {      transition.skipTransition();    }  },});
```

This example skips the view transition when navigation only changes the [URL fragment or query parameters](/guide/routing/read-route-state#query-parameters) (such as anchor links within the same page). The `skipTransition()` method prevents the animation while still allowing the navigation to complete.

## [Examples from the Chrome explainer adapted to Angular](#examples-from-the-chrome-explainer-adapted-to-angular)

The following examples demonstrate various view transition techniques adapted from the Chrome team's documentation for use with Angular Router:

### [Transitioning elements don't need to be the same DOM element](#transitioning-elements-dont-need-to-be-the-same-dom-element)

Elements can transition smoothly between different DOM elements as long as they share the same `view-transition-name`.

- [Chrome Explainer](https://developer.chrome.com/docs/web-platform/view-transitions/same-document#transitioning_elements_dont_need_to_be_the_same_dom_element)
- [Angular Example on StackBlitz](https://stackblitz.com/edit/stackblitz-starters-dh8npr?file=src%2Fmain.ts)

### [Custom entry and exit animations](#custom-entry-and-exit-animations)

Create unique animations for elements entering and leaving the viewport during route transitions.

- [Chrome Explainer](https://developer.chrome.com/docs/web-platform/view-transitions/same-document#custom_entry_and_exit_transitions)
- [Angular Example on StackBlitz](https://stackblitz.com/edit/stackblitz-starters-8kly3o)

### [Async DOM updates and waiting for content](#async-dom-updates-and-waiting-for-content)

Angular Router prioritizes immediate transitions over waiting for additional content to load.

- [Chrome Explainer](https://developer.chrome.com/docs/web-platform/view-transitions/same-document#async_dom_updates_and_waiting_for_content)

**NOTE:** Angular Router does not provide a way to delay view transitions. This design choice prevents pages from becoming non-interactive while waiting for additional content. As the Chrome documentation notes: "During this time, the page is frozen, so delays here should be kept to a minimum…in some cases it's better to avoid the delay altogether, and use the content you already have."

### [Handle multiple view transition styles with view transition types](#handle-multiple-view-transition-styles-with-view-transition-types)

Use view transition types to apply different animation styles based on navigation context.

- [Chrome Explainer](https://developer.chrome.com/docs/web-platform/view-transitions/same-document#view-transition-types)
- [Angular Example on StackBlitz](https://stackblitz.com/edit/stackblitz-starters-vxzcam)

### [Handle multiple view transition styles with a class name on the view transition root (deprecated)](#handle-multiple-view-transition-styles-with-a-class-name-on-the-view-transition-root-deprecated)

This approach uses CSS classes on the transition root element to control animation styles.

- [Chrome Explainer](https://developer.chrome.com/docs/web-platform/view-transitions/same-document#changing-on-navigation-type)
- [Angular Example on StackBlitz](https://stackblitz.com/edit/stackblitz-starters-nmnzzg?file=src%2Fmain.ts)

### [Transitioning without freezing other animations](#transitioning-without-freezing-other-animations)

Maintain other page animations during view transitions to create more dynamic user experiences.

- [Chrome Explainer](https://developer.chrome.com/docs/web-platform/view-transitions/same-document#transitioning-without-freezing)
- [Angular Example on StackBlitz](https://stackblitz.com/edit/stackblitz-starters-76kgww)

### [Animating with JavaScript](#animating-with-javascript)

Control view transitions programmatically using JavaScript APIs for complex animation scenarios.

- [Chrome Explainer](https://developer.chrome.com/docs/web-platform/view-transitions/same-document#animating-with-javascript)
- [Angular Example on StackBlitz](https://stackblitz.com/edit/stackblitz-starters-cklnkm)
