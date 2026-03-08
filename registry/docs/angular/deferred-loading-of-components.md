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

- arrow\_back Templates
  - [Overview](/guide/templates)
  - [Binding dynamic text, properties and attributes](/guide/templates/binding)
  - [Adding event listeners](/guide/templates/event-listeners)
  - [Two-way binding](/guide/templates/two-way-binding)
  - [Control flow](/guide/templates/control-flow)
  - [Pipes](/guide/templates/pipes)
  - [Slotting child content with ng-content](/guide/templates/ng-content)
  - [Create template fragments with ng-template](/guide/templates/ng-template)
  - [Grouping elements with ng-container](/guide/templates/ng-container)
  - [Variables in templates](/guide/templates/variables)
  - [Deferred loading with @defer](/guide/templates/defer)
  - [Expression syntax](/guide/templates/expression-syntax)
  - [Whitespace in templates](/guide/templates/whitespace)

Deferrable views, also known as `@defer` blocks, reduce the initial bundle size of your application by deferring the loading of code that is not strictly necessary for the initial rendering of a page. This often results in a faster initial load and improvement in Core Web Vitals (CWV), primarily Largest Contentful Paint (LCP) and Time to First Byte (TTFB).

To use this feature, you can declaratively wrap a section of your template in a @defer block:

```
@defer {  <large-component />}
```

The code for any components, directives, and pipes inside the `@defer` block is split into a separate JavaScript file and loaded only when necessary, after the rest of the template has been rendered.

Deferrable views support a variety of triggers, prefetching options, and sub-blocks for placeholder, loading, and error state management.

arrow\_upward\_alt Back to the top

## [Which dependencies are deferred?](#which-dependencies-are-deferred)

Components, directives, pipes, and any component CSS styles can be deferred when loading an application.

In order for the dependencies within a `@defer` block to be deferred, they need to meet two conditions:

1. **They must be standalone.** Non-standalone dependencies cannot be deferred and are still eagerly loaded, even if they are inside of `@defer` blocks.
2. **They cannot be referenced outside of `@defer` blocks within the same file.** If they are referenced outside the `@defer` block or referenced within ViewChild queries, the dependencies will be eagerly loaded.

The *transitive* dependencies of the components, directives and pipes used in the `@defer` block do not strictly need to be standalone; transitive dependencies can still be declared in an [`NgModule`](/api/core/NgModule) and participate in deferred loading.

Angular's compiler produces a [dynamic import](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/import) statement for each component, directive, and pipe used in the `@defer` block. The main content of the block renders after all the imports resolve. Angular does not guarantee any particular order for these imports.

## [How to manage different stages of deferred loading](#how-to-manage-different-stages-of-deferred-loading)

`@defer` blocks have several sub blocks to allow you to gracefully handle different stages in the deferred loading process.

### [`@defer`](#defer)

This is the primary block that defines the section of content that is lazily loaded. It is not rendered initially– deferred content loads and renders once the specified [trigger](#controlling-deferred-content-loading-with-triggers) occurs or the `when` condition is met.

By default, a `@defer` block is triggered when the browser state becomes [idle](/guide/templates/defer#idle).

```
@defer {  <large-component />}
```

### [Show placeholder content with `@placeholder`](#show-placeholder-content-with-placeholder)

By default, defer blocks do not render any content before they are triggered.

The `@placeholder` is an optional block that declares what content to show before the `@defer` block is triggered.

```
@defer {  <large-component />} @placeholder {  <p>Placeholder content</p>}
```

While optional, certain triggers may require the presence of either a `@placeholder` or a [template reference variable](/guide/templates/variables#template-reference-variables) to function. See the [Triggers](#controlling-deferred-content-loading-with-triggers) section for more details.

Angular replaces placeholder content with the main content once loading is complete. You can use any content in the placeholder section including plain HTML, components, directives, and pipes. Keep in mind the *dependencies of the placeholder block are eagerly loaded*.

The `@placeholder` block accepts an optional parameter to specify the `minimum` amount of time that this placeholder should be shown after the placeholder content initially renders.

```
@defer {  <large-component />} @placeholder (minimum 500ms) {  <p>Placeholder content</p>}
```

This `minimum` parameter is specified in time increments of milliseconds (ms) or seconds (s). You can use this parameter to prevent fast flickering of placeholder content in the case that the deferred dependencies are fetched quickly.

### [Show loading content with `@loading`](#show-loading-content-with-loading)

The `@loading` block is an optional block that allows you to declare content that is shown while deferred dependencies are loading. It replaces the `@placeholder` block once loading is triggered.

```
@defer {  <large-component />} @loading {  <img alt="loading..." src="loading.gif" />} @placeholder {  <p>Placeholder content</p>}
```

Its dependencies are eagerly loaded (similar to `@placeholder`).

The `@loading` block accepts two optional parameters to help prevent fast flickering of content that may occur when deferred dependencies are fetched quickly,:

- `minimum` - the minimum amount of time that this placeholder should be shown
- `after` - the amount of time to wait after loading begins before showing the loading template

```
@defer {  <large-component />} @loading (after 100ms; minimum 1s) {  <img alt="loading..." src="loading.gif" />}
```

Both parameters are specified in time increments of milliseconds (ms) or seconds (s). In addition, the timers for both parameters begin immediately after the loading has been triggered.

### [Show error state when deferred loading fails with `@error`](#show-error-state-when-deferred-loading-fails-with-error)

The `@error` block is an optional block that displays if deferred loading fails. Similar to `@placeholder` and `@loading`, the dependencies of the @error block are eagerly loaded.

```
@defer {  <large-component />} @error {  <p>Failed to load large component.</p>}
```

## [Controlling deferred content loading with triggers](#controlling-deferred-content-loading-with-triggers)

You can specify **triggers** that control when Angular loads and displays deferred content.

When a `@defer` block is triggered, it replaces placeholder content with lazily loaded content.

Multiple event triggers can be defined by separating them with a semicolon, `;` and will be evaluated as OR conditions.

There are two types of triggers: `on` and `when`.

### [`on`](#on)

`on` specifies a condition for when the `@defer` block is triggered.

The available triggers are as follows:

Trigger

Description

[`idle`](#idle)

Triggers when the browser is idle.

[`viewport`](#viewport)

Triggers when specified content enters the viewport

[`interaction`](#interaction)

Triggers when the user interacts with specified element

[`hover`](#hover)

Triggers when the mouse hovers over specified area

[`immediate`](#immediate)

Triggers immediately after non-deferred content has finished rendering

[`timer`](#timer)

Triggers after a specific duration

#### [`idle`](#idle)

The `idle` trigger loads the deferred content once the browser has reached an idle state, based on requestIdleCallback. This is the default behavior with a defer block.

```
<!-- @defer (on idle) -->@defer {  <large-cmp />} @placeholder {  <div>Large component placeholder</div>}
```

#### [`viewport`](#viewport)

The `viewport` trigger loads the deferred content when the specified content enters the viewport using the [Intersection Observer API](https://developer.mozilla.org/docs/Web/API/Intersection_Observer_API). Observed content may be `@placeholder` content or an explicit element reference.

By default, the `@defer` watches for the placeholder entering the viewport. Placeholders used this way must have a single root element.

```
@defer (on viewport) {  <large-cmp />} @placeholder {  <div>Large component placeholder</div>}
```

Alternatively, you can specify a [template reference variable](/guide/templates/variables) in the same template as the `@defer` block as the element that is watched to enter the viewport. This variable is passed in as a parameter on the viewport trigger.

```
<div #greeting>Hello!</div>@defer (on viewport(greeting)) {  <greetings-cmp />}
```

If you want to customize the options of the `IntersectionObserver`, the `viewport` trigger supports passing in an object literal. The literal supports all properties from the second parameter of `IntersectionObserver`, except for `root`. When using the object literal notation, you have to pass your trigger using the `trigger` property.

```
<div #greeting>Hello!</div><!-- With options and a trigger -->@defer (on viewport({trigger: greeting, rootMargin: '100px', threshold: 0.5})) {  <greetings-cmp />}<!-- With options and an implied trigger -->@defer (on viewport({rootMargin: '100px', threshold: 0.5})) {  <greetings-cmp />} @placeholder {  <div>Implied trigger</div>}
```

#### [`interaction`](#interaction)

The `interaction` trigger loads the deferred content when the user interacts with the specified element through `click` or `keydown` events.

By default, the placeholder acts as the interaction element. Placeholders used this way must have a single root element.

```
@defer (on interaction) {  <large-cmp />} @placeholder {  <div>Large component placeholder</div>}
```

Alternatively, you can specify a [template reference variable](/guide/templates/variables) in the same template as the `@defer` block as the element that is watched for interactions. This variable is passed in as a parameter on the viewport trigger.

```
<div #greeting>Hello!</div>@defer (on interaction(greeting)) {  <greetings-cmp />}
```

#### [`hover`](#hover)

The `hover` trigger loads the deferred content when the mouse has hovered over the triggered area through the `mouseover` and `focusin` events.

By default, the placeholder acts as the interaction element. Placeholders used this way must have a single root element.

```
@defer (on hover) {  <large-cmp />} @placeholder {  <div>Large component placeholder</div>}
```

Alternatively, you can specify a [template reference variable](/guide/templates/variables) in the same template as the `@defer` block as the element that is watched to enter the viewport. This variable is passed in as a parameter on the viewport trigger.

```
<div #greeting>Hello!</div>@defer (on hover(greeting)) {  <greetings-cmp />}
```

#### [`immediate`](#immediate)

The `immediate` trigger loads the deferred content immediately. This means that the deferred block loads as soon as all other non-deferred content has finished rendering.

```
@defer (on immediate) {  <large-cmp />} @placeholder {  <div>Large component placeholder</div>}
```

#### [`timer`](#timer)

The `timer` trigger loads the deferred content after a specified duration.

```
@defer (on timer(500ms)) {  <large-cmp />} @placeholder {  <div>Large component placeholder</div>}
```

The duration parameter must be specified in milliseconds (`ms`) or seconds (`s`).

### [`when`](#when)

The `when` trigger accepts a custom conditional expression and loads the deferred content when the condition becomes truthy.

```
@defer (when condition) {  <large-cmp />} @placeholder {  <div>Large component placeholder</div>}
```

This is a one-time operation– the `@defer` block does not revert back to the placeholder if the condition changes to a falsy value after becoming truthy.

## [Prefetching data with `prefetch`](#prefetching-data-with-prefetch)

In addition to specifying a condition that determines when deferred content is shown, you can optionally specify a **prefetch trigger**. This trigger lets you load the JavaScript associated with the `@defer` block before the deferred content is shown.

Prefetching enables more advanced behaviors, such as letting you start to prefetch resources before a user has actually seen or interacted with a defer block, but might interact with it soon, making the resources available faster.

You can specify a prefetch trigger similarly to the block's main trigger, but prefixed with the `prefetch` keyword. The block's main trigger and prefetch trigger are separated with a semi-colon character (`;`).

In the example below, the prefetching starts when a browser becomes idle and the contents of the block is rendered only once the user interacts with the placeholder.

```
@defer (on interaction; prefetch on idle) {  <large-cmp />} @placeholder {  <div>Large component placeholder</div>}
```

## [Testing `@defer` blocks](#testing-defer-blocks)

Angular provides TestBed APIs to simplify the process of testing `@defer` blocks and triggering different states during testing. By default, `@defer` blocks in tests play through like a defer block would behave in a real application. If you want to manually step through states, you can switch the defer block behavior to `Manual` in the TestBed configuration.

```
it('should render a defer block in different states', async () => {  // configures the defer block behavior to start in "paused" state for manual control.  TestBed.configureTestingModule({deferBlockBehavior: DeferBlockBehavior.Manual});  @Component({    // ...    template: `      @defer {        <large-component />      } @placeholder {        Placeholder      } @loading {        Loading...      }    `,  })  class ExampleA {}  // Create component fixture.  const componentFixture = TestBed.createComponent(ExampleA);  // Retrieve the list of all defer block fixtures and get the first block.  const deferBlockFixture = (await componentFixture.getDeferBlocks())[0];  // Renders placeholder state by default.  expect(componentFixture.nativeElement.innerHTML).toContain('Placeholder');  // Render loading state and verify rendered output.  await deferBlockFixture.render(DeferBlockState.Loading);  expect(componentFixture.nativeElement.innerHTML).toContain('Loading');  // Render final state and verify the output.  await deferBlockFixture.render(DeferBlockState.Complete);  expect(componentFixture.nativeElement.innerHTML).toContain('large works!');});
```

## [Does `@defer` work with `NgModule`?](#does-defer-work-with-ngmodule)

`@defer` blocks are compatible with both standalone and NgModule-based components, directives and pipes. However, **only standalone components, directives and pipes can be deferred**. NgModule-based dependencies are not deferred and are included in the eagerly loaded bundle.

## [Compatibility between `@defer` blocks and Hot Module Reload (HMR)](#compatibility-between-defer-blocks-and-hot-module-reload-hmr)

When Hot Module Replacement (HMR) is active, all `@defer` block chunks are fetched eagerly, overriding any configured triggers. To restore the standard trigger behavior, you must disable HMR by serving your application with the `--no-hmr` flag.

## [How does `@defer` work with server-side rendering (SSR) and static-site generation (SSG)?](#how-does-defer-work-with-server-side-rendering-ssr-and-static-site-generation-ssg)

By default, when rendering an application on the server (either using SSR or SSG), defer blocks always render their `@placeholder` (or nothing if a placeholder is not specified) and triggers are not invoked. On the client, the content of the `@placeholder` is hydrated and triggers are activated.

To render the main content of `@defer` blocks on the server (both SSR and SSG), you can enable [the Incremental Hydration feature](/guide/incremental-hydration) and configure `hydrate` triggers for the necessary blocks.

## [Best practices for deferring views](#best-practices-for-deferring-views)

### [Avoid cascading loads with nested `@defer` blocks](#avoid-cascading-loads-with-nested-defer-blocks)

When you have nested `@defer` blocks, they should have different triggers in order to avoid loading simultaneously, which causes cascading requests and may negatively impact page load performance.

### [Avoid layout shifts](#avoid-layout-shifts)

Avoid deferring components that are visible in the user’s viewport on initial load. Doing this may negatively affect Core Web Vitals by causing an increase in cumulative layout shift (CLS).

In the event this is necessary, avoid `immediate`, `timer`, `viewport`, and custom `when` triggers that cause the content to load during the initial page render.

### [Keep accessibility in mind](#keep-accessibility-in-mind)

When using `@defer` blocks, consider the impact on users with assistive technologies like screen readers. Screen readers that focus on a deferred section will initially read the placeholder or loading content, but may not announce changes when the deferred content loads.

To ensure deferred content changes are announced to screen readers, you can wrap your `@defer` block in an element with a live region:

```
<div aria-live="polite" aria-atomic="true">  @defer (on timer(2000)) {    <user-profile [user]="currentUser" />  } @placeholder {    Loading user profile...  } @loading {    Please wait...  } @error {    Failed to load profile  }</div>
```

This ensures that changes are announced to the user when transitions (placeholder → loading → content/error) occur.
