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

**NOTE:** While this guide is being updated for Vitest, some descriptions and examples of utility APIs are currently presented within the context of Karma/Jasmine. We are actively working to provide Vitest equivalents and updated guidance where applicable.

This page describes the most useful Angular testing features.

The Angular testing utilities include the [`TestBed`](/api/core/testing/TestBed), the [`ComponentFixture`](/api/core/testing/ComponentFixture), and a handful of functions that control the test environment. The [](#testbed-class-summary)[`TestBed`](/api/core/testing/TestBed) and [](#the-componentfixture)[`ComponentFixture`](/api/core/testing/ComponentFixture) classes are covered separately.

Here's a summary of the stand-alone functions, in order of likely utility:

Function

Details

\[`inject`]

Injects one or more services from the current [`TestBed`](/api/core/testing/TestBed) injector into a test function. It cannot inject a service provided by the component itself. See discussion of the [debugElement.injector](guide/testing/components-scenarios#get-injected-services).

[`getTestBed`](/api/core/testing/getTestBed)

Gets the current instance of the [`TestBed`](/api/core/testing/TestBed). Usually unnecessary because the static class methods of the [`TestBed`](/api/core/testing/TestBed) class are typically sufficient. The [`TestBed`](/api/core/testing/TestBed) instance exposes a few rarely used members that are not available as static methods.

For handling complex asynchronous scenarios or testing legacy Zone.js-based applications, see the [Zone.js Testing Utilities](guide/testing/zone-js-testing-utilities) guide.

arrow\_upward\_alt Back to the top

## [`TestBed` class summary](#testbed-class-summary)

The [`TestBed`](/api/core/testing/TestBed) class is one of the principal Angular testing utilities. Its API is quite large and can be overwhelming until you've explored it, a little at a time. Read the early part of this guide first to get the basics before trying to absorb the full API.

The module definition passed to `configureTestingModule` is a subset of the [`@NgModule`](/api/core/NgModule) metadata properties.

```
type TestModuleMetadata = {  providers?: any[];  declarations?: any[];  imports?: any[];  schemas?: Array<SchemaMetadata | any[]>;};
```

Each override method takes a `MetadataOverride<T>` where `T` is the kind of metadata appropriate to the method, that is, the parameter of an [`@NgModule`](/api/core/NgModule), [`@Component`](/api/core/Component), [`@Directive`](/api/core/Directive), or [`@Pipe`](/api/core/Pipe).

```
type MetadataOverride<T> = {  add?: Partial<T>;  remove?: Partial<T>;  set?: Partial<T>;};
```

The [`TestBed`](/api/core/testing/TestBed) API consists of static class methods that either update or reference a *global* instance of the [`TestBed`](/api/core/testing/TestBed).

Internally, all static methods cover methods of the current runtime [`TestBed`](/api/core/testing/TestBed) instance, which is also returned by the [`getTestBed()`](/api/core/testing/getTestBed) function.

Call [`TestBed`](/api/core/testing/TestBed) methods *within* a `beforeEach()` to ensure a fresh start before each individual test.

Here are the most important static methods, in order of likely utility.

Methods

Details

`configureTestingModule`

The testing shims establish the [initial test environment](guide/testing) and a default testing module. The default testing module is configured with basic declaratives and some Angular service substitutes that every tester needs.\
Call `configureTestingModule` to refine the testing module configuration for a particular set of tests by adding and removing imports, declarations (of components, directives, and pipes), and providers.

`compileComponents`

Compile the testing module asynchronously after you've finished configuring it. You **must** call this method if *any* of the testing module components have asynchronously loaded resources (like @defer blocks).\
After calling `compileComponents`, the [`TestBed`](/api/core/testing/TestBed) configuration is frozen for the duration of the current spec.

`createComponent<T>`

Create an instance of a component of type `T` based on the current [`TestBed`](/api/core/testing/TestBed) configuration. After calling [`createComponent`](/api/core/createComponent), the [`TestBed`](/api/core/testing/TestBed) configuration is frozen for the duration of the current spec.

`overrideComponent`

Replace metadata for the given component class, which could be nested deeply within an inner module.

`overrideDirective`

Replace metadata for the given directive class, which could be nested deeply within an inner module.

`overridePipe`

Replace metadata for the given pipe class, which could be nested deeply within an inner module.

`overrideModule`

Replace metadata for the given [`NgModule`](/api/core/NgModule). Recall that modules can import other modules. The `overrideModule` method can reach deeply into the current testing module to modify one of these inner modules.

| `inject` | Retrieve a service from the current [`TestBed`](/api/core/testing/TestBed) injector. The `inject` function is often adequate for this purpose. But `inject` throws an error if it can't provide the service.\
What if the service is optional?\
The [`TestBed.inject()`](/api/core/testing/TestBed#inject) method takes an optional second parameter, the object to return if Angular can't find the provider (`null` in this example): `expect(TestBed.inject(NotProvided, null)).toBeNull();` After calling [`TestBed.inject`](/api/core/testing/TestBed#inject), the [`TestBed`](/api/core/testing/TestBed) configuration is frozen for the duration of the current spec. | | `initTestEnvironment` | Initialize the testing environment for the entire test run.\
The testing shims call it for you so there is rarely a reason for you to call it yourself.\
Call this method *exactly once*. To change this default in the middle of a test run, call `resetTestEnvironment` first.\
Specify the Angular compiler factory, a [`PlatformRef`](/api/core/PlatformRef), and a default Angular testing module. Alternatives for non-browser platforms are available in the general form `@angular/platform-<platform_name>/testing/<platform_name>`. | | `resetTestEnvironment` | Reset the initial test environment, including the default testing module. |

A few of the [`TestBed`](/api/core/testing/TestBed) instance methods are not covered by static [`TestBed`](/api/core/testing/TestBed) *class* methods. These are rarely needed.

## [The `ComponentFixture`](#the-componentfixture)

The [`TestBed.createComponent<T>`](/api/core/testing/TestBed#createComponent) creates an instance of the component `T` and returns a strongly typed [`ComponentFixture`](/api/core/testing/ComponentFixture) for that component.

The [`ComponentFixture`](/api/core/testing/ComponentFixture) properties and methods provide access to the component, its DOM representation, and aspects of its Angular environment.

### [`ComponentFixture` properties](#componentfixture-properties)

Here are the most important properties for testers, in order of likely utility.

Properties

Details

`componentInstance`

The instance of the component class created by [`TestBed.createComponent`](/api/core/testing/TestBed#createComponent).

`debugElement`

The [`DebugElement`](/api/core/DebugElement) associated with the root element of the component.\
The `debugElement` provides insight into the component and its DOM element during test and debugging. It's a critical property for testers. The most interesting members are covered [below](#debugelement).

`nativeElement`

The native DOM element at the root of the component.

`changeDetectorRef`

The [`ChangeDetectorRef`](/api/core/ChangeDetectorRef) for the component.\
The [`ChangeDetectorRef`](/api/core/ChangeDetectorRef) is most valuable when testing a component that has the [`ChangeDetectionStrategy.OnPush`](/api/core/ChangeDetectionStrategy#OnPush) method or the component's change detection is under your programmatic control.

### [`ComponentFixture` methods](#componentfixture-methods)

The *fixture* methods cause Angular to perform certain tasks on the component tree. Call these method to trigger Angular behavior in response to simulated user action.

Here are the most useful methods for testers.

Methods

Details

`detectChanges`

Trigger a change detection cycle for the component.\
Call it to initialize the component (it calls `ngOnInit`) and after your test code, change the component's data bound property values. Angular can't see that you've changed `personComponent.name` and won't update the `name` binding until you call `detectChanges`.\
Runs `checkNoChanges` afterwards to confirm that there are no circular updates unless called as `detectChanges(false)`;

`autoDetectChanges`

Set this to `true` when you want the fixture to detect changes automatically.\
When autodetect is `true`, the test fixture calls `detectChanges` immediately after creating the component. Then it listens for pertinent zone events and calls `detectChanges` accordingly. When your test code modifies component property values directly, you probably still have to call `fixture.detectChanges` to trigger data binding updates.\
The default is `false`. Testers who prefer fine control over test behavior tend to keep it `false`.

`checkNoChanges`

Do a change detection run to make sure there are no pending changes. Throws an exceptions if there are.

`isStable`

If the fixture is currently *stable*, returns `true`. If there are async tasks that have not completed, returns `false`.

`whenStable`

Returns a promise that resolves when the fixture is stable.\
To resume testing after completion of asynchronous activity or asynchronous change detection, hook that promise. See [whenStable](guide/testing/components-scenarios#whenstable).

`destroy`

Trigger component destruction.

#### [`DebugElement`](#debugelement)

The [`DebugElement`](/api/core/DebugElement) provides crucial insights into the component's DOM representation.

From the test root component's [`DebugElement`](/api/core/DebugElement) returned by `fixture.debugElement`, you can walk (and query) the fixture's entire element and component subtrees.

Here are the most useful [`DebugElement`](/api/core/DebugElement) members for testers, in approximate order of utility:

Members

Details

`nativeElement`

The corresponding DOM element in the browser

[`query`](/api/animations/query)

Calling `query(predicate: Predicate<DebugElement>)` returns the first [`DebugElement`](/api/core/DebugElement) that matches the predicate at any depth in the subtree.

`queryAll`

Calling `queryAll(predicate: Predicate<DebugElement>)` returns all `DebugElements` that matches the predicate at any depth in subtree.

`injector`

The host dependency injector. For example, the root element's component instance injector.

`componentInstance`

The element's own component instance, if it has one.

`context`

An object that provides parent context for this element. Often an ancestor component instance that governs this element.\
When an element is repeated within `@for` block, the context is an `RepeaterContext` whose `$implicit` property is the value of the row instance value. For example, the `hero` in `@for(hero of heroes; ...)`.

`children`

The immediate [`DebugElement`](/api/core/DebugElement) children. Walk the tree by descending through `children`. [`DebugElement`](/api/core/DebugElement) also has `childNodes`, a list of [`DebugNode`](/api/core/DebugNode) objects. [`DebugElement`](/api/core/DebugElement) derives from [`DebugNode`](/api/core/DebugNode) objects and there are often more nodes than elements. Testers can usually ignore plain nodes.

`parent`

The [`DebugElement`](/api/core/DebugElement) parent. Null if this is the root element.

`name`

The element tag name, if it is an element.

`triggerEventHandler`

Triggers the event by its name if there is a corresponding listener in the element's `listeners` collection. The second parameter is the *event object* expected by the handler.\
If the event lacks a listener or there's some other problem, consider calling `nativeElement.dispatchEvent(eventObject)`.

`listeners`

The callbacks attached to the component's [`@Output`](/api/core/Output) properties and/or the element's event properties.

`providerTokens`

This component's injector lookup tokens. Includes the component itself plus the tokens that the component lists in its `providers` metadata.

`source`

Where to find this element in the source component template.

`references`

Dictionary of objects associated with template local variables (for example, `#foo`), keyed by the local variable name.

The [`DebugElement.query(predicate)`](/api/core/DebugElement#query\(predicate\)) and [`DebugElement.queryAll(predicate)`](/api/core/DebugElement#queryAll\(predicate\)) methods take a predicate that filters the source element's subtree for matching [`DebugElement`](/api/core/DebugElement).

The predicate is any method that takes a [`DebugElement`](/api/core/DebugElement) and returns a *truthy* value. The following example finds all `DebugElements` with a reference to a template local variable named "content":

```
// Filter for DebugElements with a #content referenceconst contentRefs = el.queryAll((de) => de.references['content']);
```

The Angular [`By`](/api/platform-browser/By) class has three static methods for common predicates:

Static method

Details

[`By.all`](/api/platform-browser/By#all)

Return all elements

[`By.css(selector)`](/api/platform-browser/By#css\(selector\))

Return elements with matching CSS selectors

[`By.directive(directive)`](/api/platform-browser/By#directive\(directive\))

Return elements that Angular matched to an instance of the directive class

```
// Can find DebugElement either by css selector or by directiveconst h2 = fixture.debugElement.query(By.css('h2'));const directive = fixture.debugElement.query(By.directive(Highlight));
```
