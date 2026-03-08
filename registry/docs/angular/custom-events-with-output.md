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

Angular components can define custom events by assigning a property to the [`output`](/api/core/output) function:

```
@Component({  /*...*/})export class ExpandablePanel {  panelClosed = output<void>();}
```

```
<expandable-panel (panelClosed)="savePanelState()" />
```

The [`output`](/api/core/output) function returns an [`OutputEmitterRef`](/api/core/OutputEmitterRef). You can emit an event by calling the `emit` method on the [`OutputEmitterRef`](/api/core/OutputEmitterRef):

```
this.panelClosed.emit();
```

Angular refers to properties initialized with the [`output`](/api/core/output) function as **outputs**. You can use outputs to raise custom events, similar to native browser events like `click`.

**Angular custom events do not bubble up the DOM**.

**Output names are case-sensitive.**

When extending a component class, **outputs are inherited by the child class.**

The [`output`](/api/core/output) function has special meaning to the Angular compiler. **You can exclusively call [`output`](/api/core/output) in component and directive property initializers.**

arrow\_upward\_alt Back to the top

## [Emitting event data](#emitting-event-data)

You can pass event data when calling `emit`:

```
// You can emit primitive values.this.valueChanged.emit(7);// You can emit custom event objectsthis.thumbDropped.emit({  pointerX: 123,  pointerY: 456,});
```

When defining an event listener in a template, you can access the event data from the `$event` variable:

```
<custom-slider (valueChanged)="logValue($event)" />
```

Receive the event data in the parent component:

```
@Component({ /*...*/})export class App {  logValue(value: number) {    ...  }}
```

## [Customizing output names](#customizing-output-names)

The [`output`](/api/core/output) function accepts a parameter that lets you specify a different name for the event in a template:

```
@Component({  /*...*/})export class CustomSlider {  changed = output({alias: 'valueChanged'});}
```

```
<custom-slider (valueChanged)="saveVolume()" />
```

This alias does not affect usage of the property in TypeScript code.

While you should generally avoid aliasing outputs for components, this feature can be useful for renaming properties while preserving an alias for the original name or for avoiding collisions with the name of native DOM events.

## [Subscribing to outputs programmatically](#subscribing-to-outputs-programmatically)

When creating a component dynamically, you can programmatically subscribe to output events from the component instance. The [`OutputRef`](/api/core/OutputRef) type includes a `subscribe` method:

```
const someComponentRef: ComponentRef<SomeComponent> = viewContainerRef.createComponent(/*...*/);someComponentRef.instance.someEventProperty.subscribe((eventData) => {  console.log(eventData);});
```

Angular automatically cleans up event subscriptions when it destroys components with subscribers. Alternatively, you can manually unsubscribe from an event. The `subscribe` function returns an [`OutputRefSubscription`](/api/core/OutputRefSubscription) with an `unsubscribe` method:

```
const eventSubscription = someComponent.someEventProperty.subscribe((eventData) => {  console.log(eventData);});// ...eventSubscription.unsubscribe();
```

## [Choosing event names](#choosing-event-names)

Avoid choosing output names that collide with events on DOM elements like HTMLElement. Name collisions introduce confusion about whether the bound property belongs to the component or the DOM element.

Avoid adding prefixes for component outputs like you would with component selectors. Since a given element can only host one component, any custom properties can be assumed to belong to the component.

Always use [camelCase](https://en.wikipedia.org/wiki/Camel_case) output names. Avoid prefixing output names with "on".

## [Using outputs with RxJS](#using-outputs-with-rxjs)

See [RxJS interop with component and directive outputs](ecosystem/rxjs-interop/output-interop) for details on interoperability between outputs and RxJS.

## [Declaring outputs with the `@Output` decorator](#declaring-outputs-with-the-output-decorator)

**TIP:** While the Angular team recommends using the [`output`](/api/core/output) function for new projects, the original decorator-based [`@Output`](/api/core/Output) API remains fully supported.

You can alternatively define custom events by assigning a property to a new [`EventEmitter`](/api/core/EventEmitter) and adding the [`@Output`](/api/core/Output) decorator:

```
@Component({  /*...*/})export class ExpandablePanel {  @Output() panelClosed = new EventEmitter<void>();}
```

You can emit an event by calling the `emit` method on the [`EventEmitter`](/api/core/EventEmitter).

### [Aliases with the `@Output` decorator](#aliases-with-the-output-decorator)

The [`@Output`](/api/core/Output) decorator accepts a parameter that lets you specify a different name for the event in a template:

```
@Component({  /*...*/})export class CustomSlider {  @Output('valueChanged') changed = new EventEmitter<number>();}
```

```
<custom-slider (valueChanged)="saveVolume()" />
```

This alias does not affect usage of the property in TypeScript code.

## [Specify outputs in the `@Component` decorator](#specify-outputs-in-the-component-decorator)

In addition to the [`@Output`](/api/core/Output) decorator, you can also specify a component's outputs with the `outputs` property in the [`@Component`](/api/core/Component) decorator. This can be useful when a component inherits a property from a base class:

```
// `CustomSlider` inherits the `valueChanged` property from `BaseSlider`.@Component({  /*...*/  outputs: ['valueChanged'],})export class CustomSlider extends BaseSlider {}
```

You can additionally specify an output alias in the `outputs` list by putting the alias after a colon in the string:

```
// `CustomSlider` inherits the `valueChanged` property from `BaseSlider`.@Component({  /*...*/  outputs: ['valueChanged: volumeChanged'],})export class CustomSlider extends BaseSlider {}
```
