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

- arrow\_back Server-side & hybrid-rendering
  - [Overview](/guide/performance)
  - [Server-side and hybrid-rendering](/guide/ssr)
  - [Hydration](/guide/hydration)
  - [Incremental Hydration](/guide/incremental-hydration)

**Incremental hydration** is an advanced type of [hydration](guide/hydration) that can leave sections of your application dehydrated and *incrementally* trigger hydration of those sections as they are needed.

arrow\_upward\_alt Back to the top

## [Why use incremental hydration?](#why-use-incremental-hydration)

Incremental hydration is a performance improvement that builds on top of full application hydration. It can produce smaller initial bundles while still providing an end-user experience that is comparable to a full application hydration experience. Smaller bundles improve initial load times, reducing [First Input Delay (FID)](https://web.dev/fid) and [Cumulative Layout Shift (CLS)](https://web.dev/cls).

Incremental hydration also lets you use deferrable views (`@defer`) for content that may not have been deferrable before. Specifically, you can now use deferrable views for content that is above the fold. Prior to incremental hydration, putting a `@defer` block above the fold would result in placeholder content rendering and then being replaced by the `@defer` block's main template content. This would result in a layout shift. Incremental hydration means the main template of the `@defer` block will render with no layout shift on hydration.

## [How do you enable incremental hydration in Angular?](#how-do-you-enable-incremental-hydration-in-angular)

You can enable incremental hydration for applications that already use server-side rendering (SSR) with hydration. Follow the [Angular SSR Guide](guide/ssr) to enable server-side rendering and the [Angular Hydration Guide](guide/hydration) to enable hydration first.

Enable incremental hydration by adding the [`withIncrementalHydration()`](/api/platform-browser/withIncrementalHydration) function to the [`provideClientHydration`](/api/platform-browser/provideClientHydration) provider.

```
import {  bootstrapApplication,  provideClientHydration,  withIncrementalHydration,} from '@angular/platform-browser';...bootstrapApplication(App, {  providers: [provideClientHydration(withIncrementalHydration())]});
```

Incremental Hydration depends on and enables [event replay](guide/hydration#capturing-and-replaying-events) automatically. If you already have [`withEventReplay()`](/api/platform-browser/withEventReplay) in your list, you can safely remove it after enabling incremental hydration.

## [How does incremental hydration work?](#how-does-incremental-hydration-work)

Incremental hydration builds on top of full-application [hydration](guide/hydration), [deferrable views](/guide/templates/defer), and [event replay](guide/hydration#capturing-and-replaying-events). With incremental hydration, you can add additional triggers to `@defer` blocks that define incremental hydration boundaries. Adding a `hydrate` trigger to a defer block tells Angular that it should load that defer block's dependencies during server-side rendering and render the main template rather than the `@placeholder`. When client-side rendering, the dependencies are still deferred, and the defer block content stays dehydrated until its `hydrate` trigger fires. That trigger tells the defer block to fetch its dependencies and hydrate the content. Any browser events, specifically those that match listeners registered in your component, that are triggered by the user prior to hydration are queued up and replayed once the hydration process is complete.

## [Controlling hydration of content with triggers](#controlling-hydration-of-content-with-triggers)

You can specify **hydrate triggers** that control when Angular loads and hydrates deferred content. These are additional triggers that can be used alongside regular `@defer` triggers.

Each `@defer` block may have multiple hydrate event triggers, separated with a semicolon (`;`). Angular triggers hydration when *any* of the triggers fire.

There are three types of hydrate triggers: `hydrate on`, `hydrate when`, and `hydrate never`.

### [`hydrate on`](#hydrate-on)

`hydrate on` specifies a condition for when hydration is triggered for the `@defer` block.

The available triggers are as follows:

Trigger

Description

[`hydrate on idle`](#hydrate-on-idle)

Triggers when the browser is idle.

[`hydrate on viewport`](#hydrate-on-viewport)

Triggers when specified content enters the viewport

[`hydrate on interaction`](#hydrate-on-interaction)

Triggers when the user interacts with specified element

[`hydrate on hover`](#hydrate-on-hover)

Triggers when the mouse hovers over specified area

[`hydrate on immediate`](#hydrate-on-immediate)

Triggers immediately after non-deferred content has finished rendering

[`hydrate on timer`](#hydrate-on-timer)

Triggers after a specific duration

#### [`hydrate on idle`](#hydrate-on-idle)

The `hydrate on idle` trigger loads the deferrable view's dependencies and hydrates the content once the browser has reached an idle state, based on `requestIdleCallback`.

```
@defer (hydrate on idle) {  <large-cmp />} @placeholder {  <div>Large component placeholder</div>}
```

#### [`hydrate on viewport`](#hydrate-on-viewport)

The `hydrate on viewport` trigger loads the deferrable view's dependencies and hydrates the corresponding page of the app when the specified content enters the viewport using the [Intersection Observer API](https://developer.mozilla.org/docs/Web/API/Intersection_Observer_API).

```
@defer (hydrate on viewport) {  <large-cmp />} @placeholder {  <div>Large component placeholder</div>}
```

#### [`hydrate on interaction`](#hydrate-on-interaction)

The `hydrate on interaction` trigger loads the deferrable view's dependencies and hydrates the content when the user interacts with the specified element through `click` or `keydown` events.

```
@defer (hydrate on interaction) {  <large-cmp />} @placeholder {  <div>Large component placeholder</div>}
```

#### [`hydrate on hover`](#hydrate-on-hover)

The `hydrate on hover` trigger loads the deferrable view's dependencies and hydrates the content when the mouse has hovered over the triggered area through the `mouseover` and `focusin` events.

```
@defer (hydrate on hover) {  <large-cmp />} @placeholder {  <div>Large component placeholder</div>}
```

#### [`hydrate on immediate`](#hydrate-on-immediate)

The `hydrate on immediate` trigger loads the deferrable view's dependencies and hydrates the content immediately. This means that the deferred block loads as soon as all other non-deferred content has finished rendering.

```
@defer (hydrate on immediate) {  <large-cmp />} @placeholder {  <div>Large component placeholder</div>}
```

#### [`hydrate on timer`](#hydrate-on-timer)

The `hydrate on timer` trigger loads the deferrable view's dependencies and hydrates the content after a specified duration.

```
@defer (hydrate on timer(500ms)) {  <large-cmp />} @placeholder {  <div>Large component placeholder</div>}
```

The duration parameter must be specified in milliseconds (`ms`) or seconds (`s`).

### [`hydrate when`](#hydrate-when)

The `hydrate when` trigger accepts a custom conditional expression and loads the deferrable view's dependencies and hydrates the content when the condition becomes truthy.

```
@defer (hydrate when condition) {  <large-cmp />} @placeholder {  <div>Large component placeholder</div>}
```

**NOTE:** `hydrate when` conditions only trigger when they are the top-most dehydrated `@defer` block. The condition provided for the trigger is specified in the parent component, which needs to exist before it can be triggered. If the parent block is dehydrated, that expression will not yet be resolvable by Angular.

### [`hydrate never`](#hydrate-never)

The `hydrate never` allows users to specify that the content in the defer block should remain dehydrated indefinitely, effectively becoming static content. Note that this applies to the initial render only. During a subsequent client-side render, a `@defer` block with `hydrate never` would still fetch dependencies, as hydration only applies to initial load of server-side rendered content. In the example below, subsequent client-side renders would load the `@defer` block dependencies on viewport.

```
@defer (on viewport; hydrate never) {  <large-cmp />} @placeholder {  <div>Large component placeholder</div>}
```

**NOTE:** Using `hydrate never` prevents hydration of the entire nested subtree of a given `@defer` block. No other `hydrate` triggers fire for content nested underneath that block.

## [Hydrate triggers alongside regular triggers](#hydrate-triggers-alongside-regular-triggers)

Hydrate triggers are additional triggers that are used alongside regular triggers on a `@defer` block. Hydration is an initial load optimization, and that means hydrate triggers only apply to that initial load. Any subsequent client side render will still use the regular trigger.

```
@defer (on idle; hydrate on interaction) {  <example-cmp />} @placeholder {  <div>Example Placeholder</div>}
```

In this example, on the initial load, the `hydrate on interaction` applies. Hydration will be triggered on interaction with the `<example-cmp />` component. On any subsequent page load that is client-side rendered, for example when a user clicks a routerLink that loads a page with this component, the `on idle` will apply.

## [How does incremental hydration work with nested `@defer` blocks?](#how-does-incremental-hydration-work-with-nested-defer-blocks)

Angular's component and dependency system is hierarchical, which means hydrating any component requires all of its parents also be hydrated. So if hydration is triggered for a child `@defer` block of a nested set of dehydrated `@defer` blocks, hydration is triggered from the top-most dehydrated `@defer` block down to the triggered child and fire in that order.

```
@defer (hydrate on interaction) {  <parent-block-cmp />  @defer (hydrate on hover) {    <child-block-cmp />  } @placeholder {    <div>Child placeholder</div>  }} @placeholder {  <div>Parent Placeholder</div>}
```

In the above example, hovering over the nested `@defer` block triggers hydration. The parent `@defer` block with the `<parent-block-cmp />` hydrates first, then the child `@defer` block with `<child-block-cmp />` hydrates after.

## [Constraints](#constraints)

Incremental hydration has the same constraints as full-application hydration, including limits on direct DOM manipulation and requiring valid HTML structure. Visit the [Hydration guide constraints](guide/hydration#constraints) section for more details.

## [Do I still need to specify `@placeholder` blocks?](#do-i-still-need-to-specify-placeholder-blocks)

Yes. `@placeholder` block content is not used for incremental hydration, but a `@placeholder` is still necessary for subsequent client-side rendering cases. If your content was not on the route that was part of the initial load, then any navigation to the route that has your `@defer` block content renders like a regular `@defer` block. So the `@placeholder` is rendered in those client-side rendering cases.
