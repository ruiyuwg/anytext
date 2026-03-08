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

**TIP:** If you're familiar with other web frameworks, input properties are similar to *props*.

When you use a component, you commonly want to pass some data to it. A component specifies the data that it accepts by declaring **inputs**:

```
import {Component, input} from '@angular/core';@Component({  /*...*/})export class CustomSlider {  // Declare an input named 'value' with a default value of zero.  value = input(0);}
```

This lets you bind to the property in a template:

```
<custom-slider [value]="50" />
```

If an input has a default value, TypeScript infers the type from the default value:

```
@Component({  /*...*/})export class CustomSlider {  // TypeScript infers that this input is a number, returning InputSignal<number>.  value = input(0);}
```

You can explicitly declare a type for the input by specifying a generic parameter to the function.

If an input without a default value is not set, its value is `undefined`:

```
@Component({  /*...*/})export class CustomSlider {  // Produces an InputSignal<number | undefined> because `value` may not be set.  value = input<number>();}
```

**Angular records inputs statically at compile-time**. Inputs cannot be added or removed at run-time.

The `input` function has special meaning to the Angular compiler. **You can exclusively call `input` in component and directive property initializers.**

When extending a component class, **inputs are inherited by the child class.**

**Input names are case-sensitive.**

arrow\_upward\_alt Back to the top

## [Reading inputs](#reading-inputs)

The `input` function returns an [`InputSignal`](/api/core/InputSignal). You can read the value by calling the signal:

```
import {Component, input, computed} from '@angular/core';@Component({  /*...*/})export class CustomSlider {  // Declare an input named 'value' with a default value of zero.  value = input(0);  // Create a computed expression that reads the value input  label = computed(() => `The slider's value is ${this.value()}`);}
```

Signals created by the `input` function are read-only.

## [Required inputs](#required-inputs)

You can declare that an input is `required` by calling [`input.required`](/api/core/input#required) instead of `input`:

```
@Component({  /*...*/})export class CustomSlider {  // Declare a required input named value. Returns an `InputSignal<number>`.  value = input.required<number>();}
```

Angular enforces that required inputs *must* be set when the component is used in a template. If you try to use a component without specifying all of its required inputs, Angular reports an error at build-time.

Required inputs do not automatically include `undefined` in the generic parameter of the returned [`InputSignal`](/api/core/InputSignal).

## [Configuring inputs](#configuring-inputs)

The `input` function accepts a config object as a second parameter that lets you change the way that input works.

### [Input transforms](#input-transforms)

You can specify a `transform` function to change the value of an input when it's set by Angular.

```
@Component({  selector: 'custom-slider',  /*...*/})export class CustomSlider {  label = input('', {transform: trimString});}function trimString(value: string | undefined): string {  return value?.trim() ?? '';}
```

```
<custom-slider [label]="systemVolume" />
```

In the example above, whenever the value of `systemVolume` changes, Angular runs `trimString` and sets `label` to the result.

The most common use-case for input transforms is to accept a wider range of value types in templates, often including `null` and `undefined`.

**Input transform function must be statically analyzable at build-time.** You cannot set transform functions conditionally or as the result of an expression evaluation.

**Input transform functions should always be [pure functions](https://en.wikipedia.org/wiki/Pure_function).** Relying on state outside the transform function can lead to unpredictable behavior.

#### [Type checking](#type-checking)

When you specify an input transform, the type of the transform function's parameter determines the types of values that can be set to the input in a template.

```
@Component({  /*...*/})export class CustomSlider {  widthPx = input('', {transform: appendPx});}function appendPx(value: number): string {  return `${value}px`;}
```

In the example above, the `widthPx` input accepts a `number` while the [`InputSignal`](/api/core/InputSignal) property returns a `string`.

#### [Built-in transformations](#built-in-transformations)

Angular includes two built-in transform functions for the two most common scenarios: coercing values to boolean and numbers.

```
import {Component, input, booleanAttribute, numberAttribute} from '@angular/core';@Component({  /*...*/})export class CustomSlider {  disabled = input(false, {transform: booleanAttribute});  value = input(0, {transform: numberAttribute});}
```

[`booleanAttribute`](/api/core/booleanAttribute) imitates the behavior of standard HTML [boolean attributes](https://developer.mozilla.org/docs/Glossary/Boolean/HTML), where the *presence* of the attribute indicates a "true" value. However, Angular's [`booleanAttribute`](/api/core/booleanAttribute) treats the literal string `"false"` as the boolean `false`.

[`numberAttribute`](/api/core/numberAttribute) attempts to parse the given value to a number, producing `NaN` if parsing fails.

### [Input aliases](#input-aliases)

You can specify the `alias` option to change the name of an input in templates.

```
@Component({  /*...*/})export class CustomSlider {  value = input(0, {alias: 'sliderValue'});}
```

```
<custom-slider [sliderValue]="50" />
```

This alias does not affect usage of the property in TypeScript code.

While you should generally avoid aliasing inputs for components, this feature can be useful for renaming properties while preserving an alias for the original name or for avoiding collisions with the name of native DOM element properties.

## [Model inputs](#model-inputs)

**Model inputs** are a special type of input that enable a component to propagate new values back to its parent component.

When creating a component, you can define a model input similarly to how you create a standard input.

Both types of input allow someone to bind a value into the property. However, **model inputs allow the component author to write values into the property**. If the property is bound with a two-way binding, the new value propagates to that binding.

```
@Component({  /* ... */})export class CustomSlider {  // Define a model input named "value".  value = model(0);  increment() {    // Update the model input with a new value, propagating the value to any bindings.    this.value.update((oldValue) => oldValue + 10);  }}@Component({  /* ... */  // Using the two-way binding syntax means that any changes to the slider's  // value automatically propagate back to the `volume` signal.  // Note that this binding uses the signal *instance*, not the signal value.  template: `<custom-slider [(value)]="volume" />`,})export class MediaControls {  // Create a writable signal for the `volume` local state.  volume = signal(0);}
```

In the above example, the `CustomSlider` can write values into its `value` model input, which then propagates those values back to the `volume` signal in `MediaControls`. This binding keeps the values of `value` and `volume` in sync. Notice that the binding passes the `volume` signal instance, not the *value* of the signal.

In other respects, model inputs work similarly to standard inputs. You can read the value by calling the signal function, including in [reactive contexts](guide/signals#reactive-contexts) like [`computed`](/api/core/computed) and [`effect`](/api/core/effect).

See [Two-way binding](guide/templates/two-way-binding) for more details on two-way binding in templates.

### [Two-way binding with plain properties](#two-way-binding-with-plain-properties)

You can bind a plain JavaScript property to a model input.

```
@Component({  /* ... */  // `value` is a model input.  // The parenthesis-inside-square-brackets syntax (aka "banana-in-a-box") creates a two-way binding  template: '<custom-slider [(value)]="volume" />',})export class MediaControls {  protected volume = 0;}
```

In the example above, the `CustomSlider` can write values into its `value` model input, which then propagates those values back to the `volume` property in `MediaControls`. This binding keeps the values of `value` and `volume` in sync.

### [Implicit `change` events](#implicit-change-events)

When you declare a model input in a component or directive, Angular automatically creates a corresponding [output](guide/components/outputs) for that model. The output's name is the model input's name suffixed with "Change".

```
@Directive({  /* ... */})export class CustomCheckbox {  // This automatically creates an output named "checkedChange".  // Can be subscribed to using `(checkedChange)="handler()"` in the template.  checked = model(false);}
```

Angular emits this change event whenever you write a new value into the model input by calling its `set` or `update` methods.

See [Custom events with outputs](guide/components/outputs) for more details on outputs.

### [Customizing model inputs](#customizing-model-inputs)

You can mark a model input as required or provide an alias in the same way as a [standard input](guide/components/inputs).

Model inputs do not support input transforms.

### [When to use model inputs](#when-to-use-model-inputs)

Use model inputs when you want a component to support two-way binding. This is typically appropriate when a component exists to modify a value based on user interaction. Most commonly, custom form controls, such as a date picker or combobox, should use model inputs for their primary value.

## [Choosing input names](#choosing-input-names)

Avoid choosing input names that collide with properties on DOM elements like HTMLElement. Name collisions introduce confusion about whether the bound property belongs to the component or the DOM element.

Avoid adding prefixes for component inputs like you would with component selectors. Since a given element can only host one component, any custom properties can be assumed to belong to the component.

## [Declaring inputs with the `@Input` decorator](#declaring-inputs-with-the-input-decorator)

**TIP:** While the Angular team recommends using the signal-based `input` function for new projects, the original decorator-based [`@Input`](/api/core/Input) API remains fully supported.

You can alternatively declare component inputs by adding the [`@Input`](/api/core/Input) decorator to a property:

```
@Component({  /*...*/})export class CustomSlider {  @Input() value = 0;}
```

Binding to an input is the same in both signal-based and decorator-based inputs:

```
<custom-slider [value]="50" />
```

### [Customizing decorator-based inputs](#customizing-decorator-based-inputs)

The [`@Input`](/api/core/Input) decorator accepts a config object that lets you change the way that input works.

#### [Required inputs](#required-inputs)

You can specify the `required` option to enforce that a given input must always have a value.

```
@Component({  /*...*/})export class CustomSlider {  @Input({required: true}) value = 0;}
```

If you try to use a component without specifying all of its required inputs, Angular reports an error at build-time.

#### [Input transforms](#input-transforms)

You can specify a `transform` function to change the value of an input when it's set by Angular. This transform function works identically to transform functions for signal-based inputs described above.

```
@Component({  selector: 'custom-slider',  ...})export class CustomSlider {  @Input({transform: trimString}) label = '';}function trimString(value: string | undefined) {  return value?.trim() ?? '';}
```

#### [Input aliases](#input-aliases)

You can specify the `alias` option to change the name of an input in templates.

```
@Component({  /*...*/})export class CustomSlider {  @Input({alias: 'sliderValue'}) value = 0;}
```

```
<custom-slider [sliderValue]="50" />
```

The [`@Input`](/api/core/Input) decorator also accepts the alias as its first parameter in place of the config object.

Input aliases work the same way as for signal-based inputs described above.

### [Inputs with getters and setters](#inputs-with-getters-and-setters)

When using decorator-based inputs, a property implemented with a getter and setter can be an input:

```
export class CustomSlider {  @Input()  get value(): number {    return this.internalValue;  }  set value(newValue: number) {    this.internalValue = newValue;  }  private internalValue = 0;}
```

You can even create a *write-only* input by only defining a public setter:

```
export class CustomSlider {  @Input()  set value(newValue: number) {    this.internalValue = newValue;  }  private internalValue = 0;}
```

**Prefer using input transforms instead of getters and setters** if possible.

Avoid complex or costly getters and setters. Angular may invoke an input's setter multiple times, which may negatively impact application performance if the setter performs any costly behaviors, such as DOM manipulation.

## [Specify inputs in the `@Component` decorator](#specify-inputs-in-the-component-decorator)

In addition to the [`@Input`](/api/core/Input) decorator, you can also specify a component's inputs with the `inputs` property in the [`@Component`](/api/core/Component) decorator. This can be useful when a component inherits a property from a base class:

```
// `CustomSlider` inherits the `disabled` property from `BaseSlider`.@Component({  ...,  inputs: ['disabled'],})export class CustomSlider extends BaseSlider { }
```

You can additionally specify an input alias in the `inputs` list by putting the alias after a colon in the string:

```
// `CustomSlider` inherits the `disabled` property from `BaseSlider`.@Component({  ...,  inputs: ['disabled: sliderDisabled'],})export class CustomSlider extends BaseSlider { }
```
