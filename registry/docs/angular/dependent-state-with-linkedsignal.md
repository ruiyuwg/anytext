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

- arrow\_back Signals Updated
  - [Overview](/guide/signals)
  - [Dependent state with linkedSignal](/guide/signals/linked-signal)
  - [Async reactivity with resources](/guide/signals/resource)
  - [Side effects for non-reactives APIs New](/guide/signals/effect)

You can use the [`signal`](/api/core/signal) function to hold some state in your Angular code. Sometimes, this state depends on some *other* state. For example, imagine a component that lets the user select a shipping method for an order:

```
@Component({  /* ... */})export class ShippingMethodPicker {  shippingOptions: Signal<ShippingMethod[]> = getShippingOptions();  // Select the first shipping option by default.  selectedOption = signal(this.shippingOptions()[0]);  changeShipping(newOptionIndex: number) {    this.selectedOption.set(this.shippingOptions()[newOptionIndex]);  }}
```

In this example, the `selectedOption` defaults to the first option, but changes if the user selects another option. But `shippingOptions` is a signal— its value may change! If `shippingOptions` changes, `selectedOption` may contain a value that is no longer a valid option.

**The [`linkedSignal`](/api/core/linkedSignal) function lets you create a signal to hold some state that is intrinsically *linked* to some other state.** Revisiting the example above, [`linkedSignal`](/api/core/linkedSignal) can replace [`signal`](/api/core/signal):

```
@Component({  /* ... */})export class ShippingMethodPicker {  shippingOptions: Signal<ShippingMethod[]> = getShippingOptions();  // Initialize selectedOption to the first shipping option.  selectedOption = linkedSignal(() => this.shippingOptions()[0]);  changeShipping(index: number) {    this.selectedOption.set(this.shippingOptions()[index]);  }}
```

[`linkedSignal`](/api/core/linkedSignal) works similarly to [`signal`](/api/core/signal) with one key difference— instead of passing a default value, you pass a *computation function*, just like [`computed`](/api/core/computed). When the value of the computation changes, the value of the [`linkedSignal`](/api/core/linkedSignal) changes to the computation result. This helps ensure that the [`linkedSignal`](/api/core/linkedSignal) always has a valid value.

The following example shows how the value of a [`linkedSignal`](/api/core/linkedSignal) can change based on its linked state:

```
const shippingOptions = signal(['Ground', 'Air', 'Sea']);const selectedOption = linkedSignal(() => shippingOptions()[0]);console.log(selectedOption()); // 'Ground'selectedOption.set(shippingOptions()[2]);console.log(selectedOption()); // 'Sea'shippingOptions.set(['Email', 'Will Call', 'Postal service']);console.log(selectedOption()); // 'Email'
```

arrow\_upward\_alt Back to the top

## [Accounting for previous state](#accounting-for-previous-state)

In some cases, the computation for a [`linkedSignal`](/api/core/linkedSignal) needs to account for the previous value of the [`linkedSignal`](/api/core/linkedSignal).

In the example above, `selectedOption` always updates back to the first option when `shippingOptions` changes. You may, however, want to preserve the user's selection if their selected option is still somewhere in the list. To accomplish this, you can create a [`linkedSignal`](/api/core/linkedSignal) with a separate *source* and *computation*:

```
interface ShippingMethod {  id: number;  name: string;}@Component({  /* ... */})export class ShippingMethodPicker {  constructor() {    this.changeShipping(2);    this.changeShippingOptions();    console.log(this.selectedOption()); // {"id":2,"name":"Postal Service"}  }  shippingOptions = signal<ShippingMethod[]>([    {id: 0, name: 'Ground'},    {id: 1, name: 'Air'},    {id: 2, name: 'Sea'},  ]);  selectedOption = linkedSignal<ShippingMethod[], ShippingMethod>({    // `selectedOption` is set to the `computation` result whenever this `source` changes.    source: this.shippingOptions,    computation: (newOptions, previous) => {      // If the newOptions contain the previously selected option, preserve that selection.      // Otherwise, default to the first option.      return newOptions.find((opt) => opt.id === previous?.value.id) ?? newOptions[0];    },  });  changeShipping(index: number) {    this.selectedOption.set(this.shippingOptions()[index]);  }  changeShippingOptions() {    this.shippingOptions.set([      {id: 0, name: 'Email'},      {id: 1, name: 'Sea'},      {id: 2, name: 'Postal Service'},    ]);  }}
```

When you create a [`linkedSignal`](/api/core/linkedSignal), you can pass an object with separate `source` and `computation` properties instead of providing just a computation.

The `source` can be any signal, such as a [`computed`](/api/core/computed) or component `input`. The [`linkedSignal`](/api/core/linkedSignal) updates its value when the `source` changes or when any signal referenced in the `computation` changes, updating its value with the result of the provided `computation`.

The `computation` is a function that receives the new value of `source` and a `previous` object. The `previous` object has two properties— `previous.source` is the previous value of `source`, and `previous.value` is the previous value of the [`linkedSignal`](/api/core/linkedSignal). You can use these previous values to decide the new result of the computation.

**HELPFUL:** When using the `previous` parameter, it is necessary to provide the generic type arguments of [`linkedSignal`](/api/core/linkedSignal) explicitly. The first generic type corresponds with the type of `source` and the second generic type determines the output type of `computation`.

## [Custom equality comparison](#custom-equality-comparison)

[`linkedSignal`](/api/core/linkedSignal), as any other signal, can be configured with a custom equality function. This function is used by downstream dependencies to determine if that value of the [`linkedSignal`](/api/core/linkedSignal) (result of a computation) changed:

```
const activeUser = signal({id: 123, name: 'Morgan', isAdmin: true});const activeUserEditCopy = linkedSignal(() => activeUser(), {  // Consider the user as the same if it's the same `id`.  equal: (a, b) => a.id === b.id,});// Or, if separating `source` and `computation`const activeUserEditCopy = linkedSignal({  source: activeUser,  computation: (user) => user,  equal: (a, b) => a.id === b.id,});
```
