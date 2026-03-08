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

- arrow\_back Directives
  - [Overview](/guide/directives)
  - [Attribute directives](/guide/directives/attribute-directives)
  - [Structural directives](/guide/directives/structural-directives)
  - [Directive composition API](/guide/directives/directive-composition-api)
  - [Optimizing images with NgOptimizedImage](/guide/image-optimization)

Angular directives offer a great way to encapsulate reusable behaviors— directives can apply attributes, CSS classes, and event listeners to an element.

The *directive composition API* lets you apply directives to a component's host element from *within* the component TypeScript class.

arrow\_upward\_alt Back to the top

## [Adding directives to a component](#adding-directives-to-a-component)

You apply directives to a component by adding a `hostDirectives` property to a component's decorator. We call such directives *host directives*.

In this example, we apply the directive `MenuBehavior` to the host element of `AdminMenu`. This works similarly to applying the `MenuBehavior` to the `<admin-menu>` element in a template.

```
@Component({  selector: 'admin-menu',  template: 'admin-menu.html',  hostDirectives: [MenuBehavior],})export class AdminMenu {}
```

When the framework renders a component, Angular also creates an instance of each host directive. The directives' host bindings apply to the component's host element. By default, host directive inputs and outputs are not exposed as part of the component's public API. See [Including inputs and outputs](#including-inputs-and-outputs) below for more information.

**Angular applies host directives statically at compile time.** You cannot dynamically add directives at runtime.

**Directives used in `hostDirectives` may not specify `standalone: false`.**

**Angular ignores the `selector` of directives applied in the `hostDirectives` property.**

## [Including inputs and outputs](#including-inputs-and-outputs)

When you apply `hostDirectives` to your component, the inputs and outputs from the host directives are not included in your component's API by default. You can explicitly include inputs and outputs in your component's API by expanding the entry in `hostDirectives`:

```
@Component({  selector: 'admin-menu',  template: 'admin-menu.html',  hostDirectives: [    {      directive: MenuBehavior,      inputs: ['menuId'],      outputs: ['menuClosed'],    },  ],})export class AdminMenu {}
```

By explicitly specifying the inputs and outputs, consumers of the component with `hostDirective` can bind them in a template:

```
<admin-menu menuId="top-menu" (menuClosed)="logMenuClosed()"></admin-menu>
```

Furthermore, you can alias inputs and outputs from `hostDirective` to customize the API of your component:

```
@Component({  selector: 'admin-menu',  template: 'admin-menu.html',  hostDirectives: [    {      directive: MenuBehavior,      inputs: ['menuId: id'],      outputs: ['menuClosed: closed'],    },  ],})export class AdminMenu {}
```

```
<admin-menu id="top-menu" (closed)="logMenuClosed()"></admin-menu>
```

## [Adding directives to another directive](#adding-directives-to-another-directive)

You can also add `hostDirectives` to other directives, in addition to components. This enables the transitive aggregation of multiple behaviors.

In the following example, we define two directives, [`Menu`](/api/aria/menu/Menu) and `Tooltip`. We then compose the behavior of these two directives in `MenuWithTooltip`. Finally, we apply `MenuWithTooltip` to `SpecializedMenuWithTooltip`.

When `SpecializedMenuWithTooltip` is used in a template, it creates instances of all of [`Menu`](/api/aria/menu/Menu) , `Tooltip`, and `MenuWithTooltip`. Each of these directives' host bindings apply to the host element of `SpecializedMenuWithTooltip`.

```
@Directive({...})export class Menu { }@Directive({...})export class Tooltip { }// MenuWithTooltip can compose behaviors from multiple other directives@Directive({  hostDirectives: [Tooltip, Menu],})export class MenuWithTooltip { }// CustomWidget can apply the already-composed behaviors from MenuWithTooltip@Directive({  hostDirectives: [MenuWithTooltip],})export class SpecializedMenuWithTooltip { }
```

## [Host directive semantics](#host-directive-semantics)

### [Directive execution order](#directive-execution-order)

Host directives go through the same lifecycle as components and directives used directly in a template. However, host directives always execute their constructor, lifecycle hooks, and bindings *before* the component or directive on which they are applied.

The following example shows minimal use of a host directive:

```
@Component({  selector: 'admin-menu',  template: 'admin-menu.html',  hostDirectives: [MenuBehavior],})export class AdminMenu {}
```

The order of execution here is:

1. `MenuBehavior` instantiated
2. `AdminMenu` instantiated
3. `MenuBehavior` receives inputs (`ngOnInit`)
4. `AdminMenu` receives inputs (`ngOnInit`)
5. `MenuBehavior` applies host bindings
6. `AdminMenu` applies host bindings

This order of operations means that components with `hostDirectives` can override any host bindings specified by a host directive.

This order of operations extends to nested chains of host directives, as shown in the following example.

```
@Directive({...})export class Tooltip { }@Directive({  hostDirectives: [Tooltip],})export class CustomTooltip { }@Directive({  hostDirectives: [CustomTooltip],})export class EvenMoreCustomTooltip { }
```

In the example above, the order of execution is:

1. `Tooltip` instantiated
2. `CustomTooltip` instantiated
3. `EvenMoreCustomTooltip` instantiated
4. `Tooltip` receives inputs (`ngOnInit`)
5. `CustomTooltip` receives inputs (`ngOnInit`)
6. `EvenMoreCustomTooltip` receives inputs (`ngOnInit`)
7. `Tooltip` applies host bindings
8. `CustomTooltip` applies host bindings
9. `EvenMoreCustomTooltip` applies host bindings

### [Dependency injection](#dependency-injection)

A component or directive that specifies `hostDirectives` can inject the instances of those host directives and vice versa.

When applying host directives to a component, both the component and host directives can define providers.

If a component or directive with `hostDirectives` and those host directives both provide the same injection token, the providers defined by class with `hostDirectives` take precedence over providers defined by the host directives.
