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

### [CDK Installation](#cdk-installation)

The [Component Dev Kit (CDK)](https://material.angular.dev/cdk/categories) is a set of behavior primitives for building components. To use the component harnesses, first install `@angular/cdk` from npm. You can do this from your terminal using the Angular CLI:

```
ng add @angular/cdk
```

## [Test harness environments and loaders](#test-harness-environments-and-loaders)

You can use component test harnesses in different test environments. Angular CDK supports two built-in environments:

- Unit tests with Angular's [`TestBed`](/api/core/testing/TestBed)
- End-to-end tests with [WebDriver](https://developer.mozilla.org/en-US/docs/Web/WebDriver)

Each environment provides a **harness loader**. The loader creates the harness instances you use throughout your tests. See below for more specific guidance on supported testing environments.

Additional testing environments require custom bindings. See the [adding harness support for additional testing environments guide](guide/testing/component-harnesses-testing-environments) for more information.

### [Using the loader from `TestbedHarnessEnvironment` for unit tests](#using-the-loader-from-testbedharnessenvironment-for-unit-tests)

For unit tests you can create a harness loader from [TestbedHarnessEnvironment](/api/cdk/testing/TestbedHarnessEnvironment). This environment uses a [component fixture](api/core/testing/ComponentFixture) created by Angular's [`TestBed`](/api/core/testing/TestBed).

To create a harness loader rooted at the fixture's root element, use the `loader()` method:

```
const fixture = TestBed.createComponent(MyComponent);// Create a harness loader from the fixtureconst loader = TestbedHarnessEnvironment.loader(fixture);...// Use the loader to get harness instancesconst myComponentHarness = await loader.getHarness(MyComponent);
```

To create a harness loader for harnesses for elements that fall outside the fixture, use the `documentRootLoader()` method. For example, code that displays a floating element or pop-up often attaches DOM elements directly to the document body, such as the `Overlay` service in Angular CDK.

You can also create a harness loader directly with `harnessForFixture()` for a harness at that fixture's root element directly.

### [Using the loader from `SeleniumWebDriverHarnessEnvironment` for end-to-end tests](#using-the-loader-from-seleniumwebdriverharnessenvironment-for-end-to-end-tests)

For WebDriver-based end-to-end tests you can create a harness loader with [`SeleniumWebDriverHarnessEnvironment`](/api/cdk/testing/selenium-webdriver/SeleniumWebDriverHarnessEnvironment).

Use the `loader()` method to get the harness loader instance for the current HTML document, rooted at the document's root element. This environment uses a WebDriver client.

```
let wd: webdriver.WebDriver = getMyWebDriverClient();const loader = SeleniumWebDriverHarnessEnvironment.loader(wd);...const myComponentHarness = await loader.getHarness(MyComponent);
```

## [Using a harness loader](#using-a-harness-loader)

Harness loader instances correspond to a specific DOM element and are used to create component harness instances for elements under that specific element.

To get [`ComponentHarness`](/api/cdk/testing/ComponentHarness) for the first instance of the element, use the `getHarness()` method. To get all [`ComponentHarness`](/api/cdk/testing/ComponentHarness) instances, use the `getAllHarnesses()` method.

```
// Get harness for first instance of the elementconst myComponentHarness = await loader.getHarness(MyComponent);// Get harnesses for all instances of the elementconst myComponentHarnesses = await loader.getHarnesses(MyComponent);
```

In addition to `getHarness` and `getAllHarnesses`, [`HarnessLoader`](/api/cdk/testing/HarnessLoader) has several other useful methods for querying for harnesses:

- `getHarnessAtIndex(...)`: Gets the harness for a component that matches the given criteria at a specific index.
- `countHarnesses(...)`: Counts the number of component instances that match the given criteria.
- `hasHarness(...)`: Checks if at least one component instance matches the given criteria.

As an example, consider a reusable dialog-button component that opens a dialog on click. It contains the following components, each with a corresponding harness:

- `MyDialogButton` (composes the `MyButton` and `MyDialog` with a convenient API)
- `MyButton` (a standard button component)
- `MyDialog` (a dialog appended to `document.body` by `MyDialogButton` upon click)

The following test loads harnesses for each of these components:

```
let fixture: ComponentFixture<MyDialogButton>;let loader: HarnessLoader;let rootLoader: HarnessLoader;beforeEach(() => {  fixture = TestBed.createComponent(MyDialogButton);  loader = TestbedHarnessEnvironment.loader(fixture);  rootLoader = TestbedHarnessEnvironment.documentRootLoader(fixture);});it('loads harnesses', async () => {  // Load a harness for the bootstrapped component with `harnessForFixture`  dialogButtonHarness = await TestbedHarnessEnvironment.harnessForFixture(    fixture,    MyDialogButtonHarness,  );  // The button element is inside the fixture's root element, so we use `loader`.  const buttonHarness = await loader.getHarness(MyButtonHarness);  // Click the button to open the dialog  await buttonHarness.click();  // The dialog is appended to `document.body`, outside of the fixture's root element,  // so we use `rootLoader` in this case.  const dialogHarness = await rootLoader.getHarness(MyDialogHarness);  // ... make some assertions});
```

### [Harness behavior in different environments](#harness-behavior-in-different-environments)

Harnesses may not behave exactly the same in all environments. Some differences are unavoidable between the real user interaction versus the simulated events generated in unit tests. Angular CDK makes a best effort to normalize the behavior to the extent possible.

### [Interacting with child elements](#interacting-with-child-elements)

To interact with elements below the root element of this harness loader, use the [`HarnessLoader`](/api/cdk/testing/HarnessLoader) instance of a child element. For the first instance of the child element, use the `getChildLoader()` method. For all instances of the child element, use the `getAllChildLoaders()` method.

```
const myComponentHarness = await loader.getHarness(MyComponent);// Get loader for first instance of child element with '.child' selectorconst childLoader = await myComponentHarness.getLoader('.child');// Get loaders for all instances of child elements with '.child' selectorconst allChildLoaders = await myComponentHarness.getAllChildLoaders('.child');
```

### [Filtering harnesses](#filtering-harnesses)

When a page contains multiple instances of a particular component, you may want to filter based on some property of the component to get a particular component instance. You can use a **harness predicate**, a class used to associate a [`ComponentHarness`](/api/cdk/testing/ComponentHarness) class with predicates functions that can be used to filter component instances, to do so.

When you ask a [`HarnessLoader`](/api/cdk/testing/HarnessLoader) for a harness, you're actually providing a HarnessQuery. A query can be one of two things:

- A harness constructor. This just gets that harness
- A [`HarnessPredicate`](/api/cdk/testing/HarnessPredicate), which gets harnesses that are filtered based on one or more conditions

[`HarnessPredicate`](/api/cdk/testing/HarnessPredicate) does support some base filters (selector, ancestor) that work on anything that extends [`ComponentHarness`](/api/cdk/testing/ComponentHarness).

```
// Example of loading a MyButtonComponentHarness with a harness predicateconst disabledButtonPredicate = new HarnessPredicate(MyButtonComponentHarness, {  selector: '[disabled]',});const disabledButton = await loader.getHarness(disabledButtonPredicate);
```

However it's common for harnesses to implement a static `with()` method that accepts component-specific filtering options and returns a [`HarnessPredicate`](/api/cdk/testing/HarnessPredicate).

```
// Example of loading a MyButtonComponentHarness with a specific selectorconst button = await loader.getHarness(MyButtonComponentHarness.with({selector: 'btn'}));
```

For more details refer to the specific harness documentation since additional filtering options are specific to each harness implementation.

## [Using test harness APIs](#using-test-harness-apis)

While every harness defines an API specific to its corresponding component, they all share a common base class, [ComponentHarness](/api/cdk/testing/ComponentHarness). This base class defines a static property, `hostSelector`, that matches the harness class to instances of the component in the DOM.

Beyond that, the API of any given harness is specific to its corresponding component; refer to the component's documentation to learn how to use a specific harness.

As an example, the following is a test for a component that uses the [Angular Material slider component harness](https://material.angular.dev/components/slider/api#MatSliderHarness):

```
it('should get value of slider thumb', async () => {  const slider = await loader.getHarness(MatSliderHarness);  const thumb = await slider.getEndThumb();  expect(await thumb.getValue()).toBe(50);});
```

## [Interop with Angular change detection](#interop-with-angular-change-detection)

By default, test harnesses runs Angular's [change detection](/best-practices/runtime-performance) before reading the state of a DOM element and after interacting with a DOM element.

There may be times that you need finer-grained control over change detection in your tests. such as checking the state of a component while an async operation is pending. In these cases use the [`manualChangeDetection`](/api/cdk/testing/manualChangeDetection) function to disable automatic handling of change detection for a block of code.

```
it('checks state while async action is in progress', async () => {  const buttonHarness = loader.getHarness(MyButtonHarness);  await manualChangeDetection(async () => {    await buttonHarness.click();    fixture.detectChanges();    // Check expectations while async click operation is in progress.    expect(isProgressSpinnerVisible()).toBe(true);    await fixture.whenStable();    // Check expectations after async click operation complete.    expect(isProgressSpinnerVisible()).toBe(false);  });});
```

Almost all harness methods are asynchronous and return a `Promise` to support the following:

- Support for unit tests
- Support for end-to-end tests
- Insulate tests against changes in asynchronous behavior

The Angular team recommends using [await](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/async_function) to improve the test readability. Calling `await` blocks the execution of your test until the associated `Promise` resolves.

Occasionally, you may want to perform multiple actions simultaneously and wait until they're all done rather than performing each action sequentially. For example, read multiple properties of a single component. In these situations use the [`parallel`](/api/cdk/testing/parallel) function to parallelize the operations. The parallel function works similarly to `Promise.all`, while also optimizing change detection checks.

```
it('reads properties in parallel', async () => {  const checkboxHarness = loader.getHarness(MyCheckboxHarness);  // Read the checked and intermediate properties simultaneously.  const [checked, indeterminate] = await parallel(() => [    checkboxHarness.isChecked(),    checkboxHarness.isIndeterminate(),  ]);  expect(checked).toBe(false);  expect(indeterminate).toBe(true);});
```
