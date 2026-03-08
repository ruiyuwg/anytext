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

- arrow\_back Components
  - [Anatomy of components](/guide/components)
  - [Selectors](/guide/components/selectors)
  - [Styling](/guide/components/styling)
  - [Accepting data with input properties](/guide/components/inputs)
  - [Custom events with outputs](/guide/components/outputs)
  - [Content projection with ng-content](/guide/components/content-projection)
  - [Host elements](/guide/components/host-elements)
  - [Lifecycle](/guide/components/lifecycle)
  - [Referencing component children with queries](/guide/components/queries)
  - [Using DOM APIs](/guide/components/dom-apis)
  - [Inheritance](/guide/components/inheritance)
  - [Programmatically rendering components](/guide/components/programmatic-rendering)
  - [Advanced configuration](/guide/components/advanced-configuration)
  - [Custom Elements](/guide/elements)

**TIP:** This guide assumes you've already read the [Essentials Guide](essentials). Read that first if you're new to Angular.

You often need to create components that act as containers for different types of content. For example, you may want to create a custom card component:

```
@Component({  selector: 'custom-card',  template: '<div class="card-shadow"> <!-- card content goes here --> </div>',})export class CustomCard {  /* ... */}
```

**You can use the `<ng-content>` element as a placeholder to mark where content should go**:

```
@Component({  selector: 'custom-card',  template: '<div class="card-shadow"> <ng-content/> </div>',})export class CustomCard {  /* ... */}
```

**TIP:** `<ng-content>` works similarly to [the native `<slot>` element](https://developer.mozilla.org/docs/Web/HTML/Element/slot), but with some Angular-specific functionality.

When you use a component with `<ng-content>`, any children of the component host element are rendered, or **projected**, at the location of that `<ng-content>`:

```
// Component source@Component({  selector: 'custom-card',  template: `    <div class="card-shadow">      <ng-content />    </div>  `,})export class CustomCard {  /* ... */}
```

```
<!-- Using the component --><custom-card>  <p>This is the projected content</p></custom-card>
```

```
<!-- The rendered DOM --><custom-card>  <div class="card-shadow">    <p>This is the projected content</p>  </div></custom-card>
```

Angular refers to any children of a component passed this way as that component's **content**. This is distinct from the component's **view**, which refers to the elements defined in the component's template.

**The `<ng-content>` element is neither a component nor DOM element**. Instead, it is a special placeholder that tells Angular where to render content. Angular's compiler processes all `<ng-content>` elements at build-time. You cannot insert, remove, or modify `<ng-content>` at run time. You cannot add directives, styles, or arbitrary attributes to `<ng-content>`.

**IMPORTANT:** You should not conditionally include `<ng-content>` with `@if`, `@for`, or `@switch`. Angular always instantiates and creates DOM nodes for content rendered to a `<ng-content>` placeholder, even if that `<ng-content>` placeholder is hidden. For conditional rendering of component content, see [Template fragments](api/core/ng-template).

arrow\_upward\_alt Back to the top

## [Multiple content placeholders](#multiple-content-placeholders)

Angular supports projecting multiple different elements into different `<ng-content>` placeholders based on CSS selector. Expanding the card example from above, you could create two placeholders for a card title and a card body by using the `select` attribute:

```
@Component({  selector: 'card-title',  template: `<ng-content>card-title</ng-content>`,})export class CardTitle {}@Component({  selector: 'card-body',  template: `<ng-content>card-body</ng-content>`,})export class CardBody {}
```

```
<!-- Component template -->@Component({  selector: 'custom-card',  template: `  <div class="card-shadow">    <ng-content select="card-title"></ng-content>    <div class="card-divider"></div>    <ng-content select="card-body"></ng-content>  </div>  `,})export class CustomCard {}
```

```
<!-- Using the component -->@Component({  selector: 'app-root',  imports: [CustomCard, CardTitle, CardBody],  template: `    <custom-card>      <card-title>Hello</card-title>      <card-body>Welcome to the example</card-body>    </custom-card>`,})export class App {}
```

```
<!-- Rendered DOM --><custom-card>  <div class="card-shadow">    <card-title>Hello</card-title>    <div class="card-divider"></div>    <card-body>Welcome to the example</card-body>  </div></custom-card>
```

The `<ng-content>` placeholder supports the same CSS selectors as [component selectors](guide/components/selectors).

If you include one or more `<ng-content>` placeholders with a `select` attribute and one `<ng-content>` placeholder without a `select` attribute, the latter captures all elements that did not match a `select` attribute:

```
<!-- Component template --><div class="card-shadow">  <ng-content select="card-title"></ng-content>  <div class="card-divider"></div>  <!-- capture anything except "card-title" -->  <ng-content></ng-content></div>
```

```
<!-- Using the component --><custom-card>  <card-title>Hello</card-title>  <img src="..." />  <p>Welcome to the example</p></custom-card>
```

```
<!-- Rendered DOM --><custom-card>  <div class="card-shadow">    <card-title>Hello</card-title>    <div class="card-divider"></div>    <img src="..." />    <p>Welcome to the example</p>  </div></custom-card>
```

If a component does not include an `<ng-content>` placeholder without a `select` attribute, any elements that don't match one of the component's placeholders do not render into the DOM.

## [Fallback content](#fallback-content)

Angular can show *fallback content* for a component's `<ng-content>` placeholder if that component doesn't have any matching child content. You can specify fallback content by adding child content to the `<ng-content>` element itself.

```
<!-- Component template --><div class="card-shadow">  <ng-content select="card-title">Default Title</ng-content>  <div class="card-divider"></div>  <ng-content select="card-body">Default Body</ng-content></div>
```

```
<!-- Using the component --><custom-card>  <card-title>Hello</card-title>  <!-- No card-body provided --></custom-card>
```

```
<!-- Rendered DOM --><custom-card>  <div class="card-shadow">    <card-title>Hello</card-title>    <div class="card-divider"></div>    Default Body  </div></custom-card>
```

## [Aliasing content for projection](#aliasing-content-for-projection)

Angular supports a special attribute, `ngProjectAs`, that allows you to specify a CSS selector on any element. Whenever an element with `ngProjectAs` is checked against an `<ng-content>` placeholder, Angular compares against the `ngProjectAs` value instead of the element's identity:

```
<!-- Component template --><div class="card-shadow">  <ng-content select="card-title"></ng-content>  <div class="card-divider"></div>  <ng-content /></div>
```

```
<!-- Using the component --><custom-card>  <h3 ngProjectAs="card-title">Hello</h3>  <p>Welcome to the example</p></custom-card>
```

```
<!-- Rendered DOM --><custom-card>  <div class="card-shadow">    <h3>Hello</h3>    <div class="card-divider"></div>    <p>Welcome to the example</p>  </div></custom-card>
```

`ngProjectAs` supports only static values and cannot be bound to dynamic expressions.
