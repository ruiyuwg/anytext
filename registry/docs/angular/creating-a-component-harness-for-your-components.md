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

- arrow\_back Testing
  - [Overview](/guide/testing)
  - [Basics of testing components](/guide/testing/components-basics)
  - [Component testing scenarios](/guide/testing/components-scenarios)
  - [Testing services](/guide/testing/services)
  - [Testing attribute directives](/guide/testing/attribute-directives)
  - [Testing pipes](/guide/testing/pipes)
  - [Testing routing and navigation New](/guide/routing/testing)
  - [Debugging tests](/guide/testing/debugging)
  - [Code coverage](/guide/testing/code-coverage)
  - [Testing utility APIs](/guide/testing/utility-apis)
  - [Component harnesses overview](/guide/testing/component-harnesses-overview)
  - [Using component harnesses in tests](/guide/testing/using-component-harnesses)
  - [Creating harnesses for your components](/guide/testing/creating-component-harnesses)
  - [Adding harness support for additional testing environments](/guide/testing/component-harnesses-testing-environments)
  - [Migrating from Karma to Vitest](/guide/testing/migrating-to-vitest)
  - [Testing with Karma and Jasmine](/guide/testing/karma)
  - [Zone.js Testing Utilities](/guide/testing/zone-js-testing-utilities)

arrow\_upward\_alt Back to the top

## [Before you start](#before-you-start)

**TIP:** This guide assumes you've already read the [component harnesses overview guide](guide/testing/component-harnesses-overview). Read that first if you're new to using component harnesses.

### [When does creating a test harness make sense?](#when-does-creating-a-test-harness-make-sense)

The Angular team recommends creating component test harnesses for shared components that are used in many places and have some user interactivity. This most commonly applies to widget libraries and similar reusable components. Harnesses are valuable for these cases because they provide the consumers of these shared components a well- supported API for interacting with a component. Tests that use harnesses can avoid depending on unreliable implementation details of these shared components, such as DOM structure and specific event listeners.

For components that appear in only one place, such as a page in an application, harnesses don't provide as much benefit. In these situations, a component's tests can reasonably depend on the implementation details of this component, as the tests and components are updated at the same time. However, harnesses still provide some value if you would use the harness in both unit and end-to-end tests.

### [CDK Installation](#cdk-installation)

The [Component Dev Kit (CDK)](https://material.angular.dev/cdk/categories) is a set of behavior primitives for building components. To use the component harnesses, first install `@angular/cdk` from npm. You can do this from your terminal using the Angular CLI:

```
ng add @angular/cdk
```

## [Extending `ComponentHarness`](#extending-componentharness)

The abstract [`ComponentHarness`](/api/cdk/testing/ComponentHarness) class is the base class for all component harnesses. To create a custom component harness, extend [`ComponentHarness`](/api/cdk/testing/ComponentHarness) and implement the static property `hostSelector`.

The `hostSelector` property identifies elements in the DOM that match this harness subclass. In most cases, the `hostSelector` should be the same as the selector of the corresponding [`Component`](/api/core/Component) or [`Directive`](/api/core/Directive). For example, consider a simple popup component:

```
@Component({  selector: 'my-popup',  template: `    <button (click)="toggle()">{{ triggerText() }}</button>    @if (isOpen()) {      <div class="my-popup-content"><ng-content></ng-content></div>    }  `,})class MyPopup {  triggerText = input('');  isOpen = signal(false);  toggle() {    this.isOpen.update((value) => !value);  }}
```

In this case, a minimal harness for the component would look like the following:

```
class MyPopupHarness extends ComponentHarness {  static hostSelector = 'my-popup';}
```

While [`ComponentHarness`](/api/cdk/testing/ComponentHarness) subclasses require only the `hostSelector` property, most harnesses should also implement a static `with` method to generate [`HarnessPredicate`](/api/cdk/testing/HarnessPredicate) instances. The [filtering harnesses section](guide/testing/using-component-harnesses#filtering-harnesses) covers this in more detail.

## [Finding elements in the component's DOM](#finding-elements-in-the-components-dom)

Each instance of a [`ComponentHarness`](/api/cdk/testing/ComponentHarness) subclass represents a particular instance of the corresponding component. You can access the component's host element via the `host()` method from the [`ComponentHarness`](/api/cdk/testing/ComponentHarness) base class.

[`ComponentHarness`](/api/cdk/testing/ComponentHarness) also offers several methods for locating elements within the component's DOM. These methods are `locatorFor()`, `locatorForOptional()`, and `locatorForAll()`. These methods create functions that find elements, they do not directly find elements. This approach safeguards against caching references to out-of-date elements. For example, when an `@if` block hides and then shows an element, the result is a new DOM element; using functions ensures that tests always reference the current state of the DOM.

See the [ComponentHarness API reference page](/api/cdk/testing/ComponentHarness) for the full list details of the different `locatorFor` methods.

For example, the `MyPopupHarness` example discussed above could provide methods to get the trigger and content elements as follows:

```
class MyPopupHarness extends ComponentHarness {  static hostSelector = 'my-popup';  // Gets the trigger element  getTriggerElement = this.locatorFor('button');  // Gets the content element.  getContentElement = this.locatorForOptional('.my-popup-content');}
```

## [Working with `TestElement` instances](#working-with-testelement-instances)

[`TestElement`](/api/cdk/testing/TestElement) is an abstraction designed to work across different test environments (Unit tests, WebDriver, etc). When using harnesses, you should perform all DOM interaction via this interface. Other means of accessing DOM elements, such as `document.querySelector()`, do not work in all test environments.

[`TestElement`](/api/cdk/testing/TestElement) has a number of methods to interact with the underlying DOM, such as `blur()`, `click()`, `getAttribute()`, and more. See the [TestElement API reference page](/api/cdk/testing/TestElement) for the full list of methods.

Do not expose [`TestElement`](/api/cdk/testing/TestElement) instances to harness users unless it's an element the component consumer defines directly, such as the component's host element. Exposing [`TestElement`](/api/cdk/testing/TestElement) instances for internal elements leads users to depend on a component's internal DOM structure.

Instead, provide more narrow-focused methods for specific actions the end-user may take or particular state they may observe. For example, `MyPopupHarness` from previous sections could provide methods like `toggle` and `isOpen`:

```
class MyPopupHarness extends ComponentHarness {  static hostSelector = 'my-popup';  protected getTriggerElement = this.locatorFor('button');  protected getContentElement = this.locatorForOptional('.my-popup-content');  /** Toggles the open state of the popup. */  async toggle() {    const trigger = await this.getTriggerElement();    return trigger.click();  }  /** Checks if the popup us open. */  async isOpen() {    const content = await this.getContentElement();    return !!content;  }}
```

## [Loading harnesses for subcomponents](#loading-harnesses-for-subcomponents)

Larger components often compose sub-components. You can reflect this structure in a component's harness as well. Each of the `locatorFor` methods on [`ComponentHarness`](/api/cdk/testing/ComponentHarness) has an alternate signature that can be used for locating sub-harnesses rather than elements.

See the [ComponentHarness API reference page](/api/cdk/testing/ComponentHarness) for the full list of the different locatorFor methods.

For example, consider a menu build using the popup from above:

```
@Directive({  selector: 'my-menu-item',})class MyMenuItem {}@Component({  selector: 'my-menu',  template: `    <my-popup>      <ng-content />    </my-popup>  `,})class MyMenu {  triggerText = input('');  @ContentChildren(MyMenuItem) items: QueryList<MyMenuItem>;}
```

The harness for `MyMenu` can then take advantage of other harnesses for `MyPopup` and `MyMenuItem`:

```
class MyMenuHarness extends ComponentHarness {  static hostSelector = 'my-menu';  protected getPopupHarness = this.locatorFor(MyPopupHarness);  /** Gets the currently shown menu items (empty list if menu is closed). */  getItems = this.locatorForAll(MyMenuItemHarness);  /** Toggles open state of the menu. */  async toggle() {    const popupHarness = await this.getPopupHarness();    return popupHarness.toggle();  }}class MyMenuItemHarness extends ComponentHarness {  static hostSelector = 'my-menu-item';}
```

## [Filtering harness instances with `HarnessPredicate`](#filtering-harness-instances-with-harnesspredicate)

When a page contains multiple instances of a particular component, you may want to filter based on some property of the component to get a particular component instance. For example, you may want a button with some specific text, or a menu with a specific ID. The [`HarnessPredicate`](/api/cdk/testing/HarnessPredicate) class can capture criteria like this for a [`ComponentHarness`](/api/cdk/testing/ComponentHarness) subclass. While the test author is able to construct [`HarnessPredicate`](/api/cdk/testing/HarnessPredicate) instances manually, it's easier when the [`ComponentHarness`](/api/cdk/testing/ComponentHarness) subclass provides a helper method to construct predicates for common filters.

You should create a static `with()` method on each [`ComponentHarness`](/api/cdk/testing/ComponentHarness) subclass that returns a [`HarnessPredicate`](/api/cdk/testing/HarnessPredicate) for that class. This allows test authors to write easily understandable code, e.g. `loader.getHarness(MyMenuHarness.with({selector: '#menu1'}))`. In addition to the standard selector and ancestor options, the `with` method should add any other options that make sense for the particular subclass.

Harnesses that need to add additional options should extend the [`BaseHarnessFilters`](/api/cdk/testing/BaseHarnessFilters) interface and additional optional properties as needed. [`HarnessPredicate`](/api/cdk/testing/HarnessPredicate) provides several convenience methods for adding options: `stringMatches()`, `addOption()`, and `add()`. See the [HarnessPredicate API page](/api/cdk/testing/HarnessPredicate) for the full description.

For example, when working with a menu it is useful to filter based on trigger text and to filter menu items based on their text:

```
interface MyMenuHarnessFilters extends BaseHarnessFilters {  /** Filters based on the trigger text for the menu. */  triggerText?: string | RegExp;}interface MyMenuItemHarnessFilters extends BaseHarnessFilters {  /** Filters based on the text of the menu item. */  text?: string | RegExp;}class MyMenuHarness extends ComponentHarness {  static hostSelector = 'my-menu';  /** Creates a `HarnessPredicate` used to locate a particular `MyMenuHarness`. */  static with(options: MyMenuHarnessFilters): HarnessPredicate<MyMenuHarness> {    return new HarnessPredicate(MyMenuHarness, options).addOption(      'trigger text',      options.triggerText,      (harness, text) => HarnessPredicate.stringMatches(harness.getTriggerText(), text),    );  }  protected getPopupHarness = this.locatorFor(MyPopupHarness);  /** Gets the text of the menu trigger. */  async getTriggerText(): Promise<string> {    const popupHarness = await this.getPopupHarness();    return popupHarness.getTriggerText();  }}class MyMenuItemHarness extends ComponentHarness {  static hostSelector = 'my-menu-item';  /** Creates a `HarnessPredicate` used to locate a particular `MyMenuItemHarness`. */  static with(options: MyMenuItemHarnessFilters): HarnessPredicate<MyMenuItemHarness> {    return new HarnessPredicate(MyMenuItemHarness, options).addOption(      'text',      options.text,      (harness, text) => HarnessPredicate.stringMatches(harness.getText(), text),    );  }  /** Gets the text of the menu item. */  async getText(): Promise<string> {    const host = await this.host();    return host.text();  }}
```

You can pass a [`HarnessPredicate`](/api/cdk/testing/HarnessPredicate) instead of a [`ComponentHarness`](/api/cdk/testing/ComponentHarness) class to any of the APIs on [`HarnessLoader`](/api/cdk/testing/HarnessLoader), [`LocatorFactory`](/api/cdk/testing/LocatorFactory), or [`ComponentHarness`](/api/cdk/testing/ComponentHarness). This allows test authors to easily target a particular component instance when creating a harness instance. It also allows the harness author to leverage the same [`HarnessPredicate`](/api/cdk/testing/HarnessPredicate) to enable more powerful APIs on their harness class. For example, consider the `getItems` method on the `MyMenuHarness` shown above. Adding a filtering API allows users of the harness to search for particular menu items:

```
class MyMenuHarness extends ComponentHarness {  static hostSelector = 'my-menu';  /** Gets a list of items in the menu, optionally filtered based on the given criteria. */  async getItems(filters: MyMenuItemHarnessFilters = {}): Promise<MyMenuItemHarness[]> {    const getFilteredItems = this.locatorForAll(MyMenuItemHarness.with(filters));    return getFilteredItems();  }  ...}
```

## [Creating `HarnessLoader` for elements that use content projection](#creating-harnessloader-for-elements-that-use-content-projection)

Some components project additional content into the component's template. See the [content projection guide](guide/components/content-projection) for more information.

Add a [`HarnessLoader`](/api/cdk/testing/HarnessLoader) instance scoped to the element containing the `<ng-content>` when you create a harness for a component that uses content projection. This allows the user of the harness to load additional harnesses for whatever components were passed in as content. [`ComponentHarness`](/api/cdk/testing/ComponentHarness) has several methods that can be used to create HarnessLoader instances for cases like this: `harnessLoaderFor()`, `harnessLoaderForOptional()`, `harnessLoaderForAll()`. See the [HarnessLoader interface API reference page](/api/cdk/testing/HarnessLoader) for more details.

For example, the `MyPopupHarness` example from above can extend [`ContentContainerComponentHarness`](/api/cdk/testing/ContentContainerComponentHarness) to add support to load harnesses within the `<ng-content>` of the component.

```
class MyPopupHarness extends ContentContainerComponentHarness<string> {  static hostSelector = 'my-popup';}
```

## [Accessing elements outside of the component's host element](#accessing-elements-outside-of-the-components-host-element)

There are times when a component harness might need to access elements outside of its corresponding component's host element. For example, code that displays a floating element or pop-up often attaches DOM elements directly to the document body, such as the `Overlay` service in Angular CDK.

In this case, [`ComponentHarness`](/api/cdk/testing/ComponentHarness) provides a method that can be used to get a [`LocatorFactory`](/api/cdk/testing/LocatorFactory) for the root element of the document. The [`LocatorFactory`](/api/cdk/testing/LocatorFactory) supports most of the same APIs as the [`ComponentHarness`](/api/cdk/testing/ComponentHarness) base class, and can then be used to query relative to the document's root element.

Consider if the `MyPopup` component above used the CDK overlay for the popup content, rather than an element in its own template. In this case, `MyPopupHarness` would have to access the content element via `documentRootLocatorFactory()` method that gets a locator factory rooted at the document root.

```
class MyPopupHarness extends ComponentHarness {  static hostSelector = 'my-popup';  /** Gets a `HarnessLoader` whose root element is the popup's content element. */  async getHarnessLoaderForContent(): Promise<HarnessLoader> {    const rootLocator = this.documentRootLocatorFactory();    return rootLocator.harnessLoaderFor('my-popup-content');  }}
```

## [Waiting for asynchronous tasks](#waiting-for-asynchronous-tasks)

The methods on [`TestElement`](/api/cdk/testing/TestElement) automatically trigger Angular's change detection and wait for tasks inside the [`NgZone`](/api/core/NgZone). In most cases no special effort is required for harness authors to wait on asynchronous tasks. However, there are some edge cases where this may not be sufficient.

Under some circumstances, Angular animations may require a second cycle of change detection and subsequent [`NgZone`](/api/core/NgZone) stabilization before animation events are fully flushed. In cases where this is needed, the [`ComponentHarness`](/api/cdk/testing/ComponentHarness) offers a `forceStabilize()` method that can be called to do the second round.

You can use [`NgZone.runOutsideAngular()`](/api/core/NgZone#runOutsideAngular) to schedule tasks outside of NgZone. Call the `waitForTasksOutsideAngular()` method on the corresponding harness if you need to explicitly wait for tasks outside [`NgZone`](/api/core/NgZone) since this does not happen automatically.
