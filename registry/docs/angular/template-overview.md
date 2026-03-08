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

In-depth Guides

Templates

# Template syntax

In Angular, a template is a chunk of HTML. Use special syntax within a template to leverage many of Angular's features.

**TIP:** Check out Angular's [Essentials](essentials/templates) before diving into this comprehensive guide.

Every Angular component has a **template** that defines the [DOM](https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model) that the component renders onto the page. By using templates, Angular is able to automatically keep your page up-to-date as data changes.

Templates are usually found within either the `template` property of a `*.ts` file or the `*.html` file. To learn more, check out the [in-depth components guide](/guide/components).

arrow\_upward\_alt Back to the top

## [How do templates work?](#how-do-templates-work)

Templates are based on [HTML](https://developer.mozilla.org/en-US/docs/Web/HTML) syntax, with additional features such as built-in template functions, data binding, event listening, variables, and more.

Angular compiles templates into JavaScript in order to build up an internal understanding of your application. One of the benefits of this are built-in rendering optimizations that Angular applies to your application automatically.

### [Differences from standard HTML](#differences-from-standard-html)

Some differences between templates and standard HTML syntax include:

- Comments in the template source code are not included in the rendered output
- Component and directive elements can be self-closed (e.g., `<UserProfile />`)
- Attributes with certain characters (i.e., `[]`, `()`, etc.) have special meaning to Angular. See [binding docs](guide/templates/binding) and [adding event listeners docs](guide/templates/event-listeners) for more information.
- The `@` character has a special meaning to Angular for adding dynamic behavior, such as [control flow](guide/templates/control-flow), to templates. You can include a literal `@` character by escaping it as an HTML entity code (`&commat;` or `&#64;`).
- Angular ignores and collapses unnecessary whitespace characters. See [whitespace in templates](guide/templates/whitespace) for more details.
- Angular may add comment nodes to a page as placeholders for dynamic content, but developers can ignore these.

In addition, while most HTML syntax is valid template syntax, Angular does not support `<script>` element in templates. For more information, see the [Security](best-practices/security) page.

## [What's next?](#whats-next)

You might also be interested in the following:

Topics

Details

[Binding dynamic text, properties, and attributes](guide/templates/binding)

Bind dynamic data to text, properties and attributes.

[Adding event listeners](guide/templates/event-listeners)

Respond to events in your templates.

[Two-way binding](guide/templates/two-way-binding)

Simultaneously binds a value and propagate changes.

[Control flow](guide/templates/control-flow)

Conditionally show, hide and repeat elements.

[Pipes](guide/templates/pipes)

Transform data declaratively.

[Slotting child content with ng-content](guide/templates/ng-content)

Control how components render content.

[Create template fragments with ng-template](guide/templates/ng-template)

Declare a template fragment.

[Grouping elements with ng-container](guide/templates/ng-container)

Group multiple elements together or mark a location for rendering.

[Variables in templates](guide/templates/variables)

Learn about variable declarations.

[Deferred loading with @defer](guide/templates/defer)

Create deferrable views with `@defer`.

[Expression syntax](guide/templates/expression-syntax)

Learn similarities and differences between Angular expressions and standard JavaScript.

[Whitespace in templates](guide/templates/whitespace)

Learn how Angular handles whitespace.
