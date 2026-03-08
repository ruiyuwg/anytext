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

A component, unlike all other parts of an Angular application, combines an HTML template and a TypeScript class. The component truly is the template and the class *working together*. To adequately test a component, you should test that they work together as intended.

Such tests require creating the component's host element in the browser DOM, as Angular does, and investigating the component class's interaction with the DOM as described by its template.

The Angular [`TestBed`](/api/core/testing/TestBed) facilitates this kind of testing as you'll see in the following sections. But in many cases, *testing the component class alone*, without DOM involvement, can validate much of the component's behavior in a straightforward, more obvious way.

arrow\_upward\_alt Back to the top

## [Component DOM testing](#component-dom-testing)

A component is more than just its class. A component interacts with the DOM and with other components. Classes alone cannot tell you if the component is going to render properly, respond to user input and gestures, or integrate with its parent and child components.

- Is `Lightswitch.clicked()` bound to anything such that the user can invoke it?
- Is the `Lightswitch.message` displayed?
- Can the user actually select the hero displayed by the `DashboardHero` component?
- Is the hero name displayed as expected (such as uppercase)?
- Is the welcome message displayed by the template of the `Welcome` component?

These might not be troubling questions for the preceding simple components illustrated. But many components have complex interactions with the DOM elements described in their templates, causing HTML to appear and disappear as the component state changes.

To answer these kinds of questions, you have to create the DOM elements associated with the components, you must examine the DOM to confirm that component state displays properly at the appropriate times, and you must simulate user interaction with the screen to determine whether those interactions cause the component to behave as expected.

To write these kinds of test, you'll use additional features of the [`TestBed`](/api/core/testing/TestBed) as well as other testing helpers.

### [CLI-generated tests](#cli-generated-tests)

The CLI creates an initial test file for you by default when you ask it to generate a new component.

For example, the following CLI command generates a `Banner` component in the `app/banner` folder (with inline template and styles):

```
ng generate component banner --inline-template --inline-style
```

It also generates an initial test file for the component, `banner.spec.ts`, that looks like this:

```
import {ComponentFixture, TestBed} from '@angular/core/testing';import {Banner} from './banner';describe('Banner', () => {  let component: Banner;  let fixture: ComponentFixture<Banner>;  beforeEach(async () => {    await TestBed.configureTestingModule({      imports: [Banner],    }).compileComponents();    fixture = TestBed.createComponent(Banner);    component = fixture.componentInstance;    await fixture.whenStable();  });  it('should create', () => {    expect(component).toBeTruthy();  });});
```

### [Reduce the setup](#reduce-the-setup)

Only the last three lines of this file actually test the component and all they do is assert that Angular can create the component.

The rest of the file is boilerplate setup code anticipating more advanced tests that *might* become necessary if the component evolves into something substantial.

You'll learn about these advanced test features in the following sections. For now, you can radically reduce this test file to a more manageable size:

```
describe('Banner (minimal)', () => {  it('should create', () => {    const fixture = TestBed.createComponent(Banner);    const component = fixture.componentInstance;    expect(component).toBeDefined();  });});
```

Later you'll call [`TestBed.configureTestingModule()`](/api/core/testing/TestBed#configureTestingModule) with imports, providers, and more declarations to suit your testing needs. Optional `override` methods can further fine-tune aspects of the configuration.

**NOTE:** [`TestBed.compileComponents`](/api/core/testing/TestBed#compileComponents) is only required when `@defer` blocks are used in the tested components.

### [`createComponent()`](#createcomponent)

After configuring [`TestBed`](/api/core/testing/TestBed), you call its [`createComponent()`](/api/core/createComponent) method.

```
const fixture = TestBed.createComponent(Banner);
```

[`TestBed.createComponent()`](/api/core/testing/TestBed#createComponent) creates an instance of the `Banner` component, adds a corresponding element to the test-runner DOM, and returns a [](#componentfixture)[`ComponentFixture`](/api/core/testing/ComponentFixture).

**IMPORTANT:** Do not re-configure [`TestBed`](/api/core/testing/TestBed) after calling [`createComponent`](/api/core/createComponent).

The [`createComponent`](/api/core/createComponent) method freezes the current [`TestBed`](/api/core/testing/TestBed) definition, closing it to further configuration.

You cannot call any more [`TestBed`](/api/core/testing/TestBed) configuration methods, not `configureTestingModule()`, nor `get()`, nor any of the `override...` methods. If you try, [`TestBed`](/api/core/testing/TestBed) throws an error.

### [`ComponentFixture`](#componentfixture)

The [](api/core/testing/ComponentFixture)[`ComponentFixture`](/api/core/testing/ComponentFixture) is a test harness for interacting with the created component and its corresponding element.

Access the component instance through the fixture and confirm it exists with an expectation:

```
const component = fixture.componentInstance;expect(component).toBeDefined();
```

### [`beforeEach()`](#beforeeach)

You will add more tests as this component evolves. Rather than duplicate the [`TestBed`](/api/core/testing/TestBed) configuration for each test, you refactor to pull the setup into a `beforeEach()` and some supporting variables:

```
describe('Banner (with beforeEach)', () => {  let component: Banner;  let fixture: ComponentFixture<Banner>;  beforeEach(async () => {    fixture = TestBed.createComponent(Banner);    component = fixture.componentInstance;    await fixture.whenStable(); // necessary to wait for the initial rendering  });  it('should create', () => {    expect(component).toBeDefined();  });});
```

**HELPFUL:** By awaiting the initial rendering in the `beforeEach` with `await fixture.whenStable` the single tests synchronous.

Now add a test that gets the component's element from `fixture.nativeElement` and looks for the expected text.

```
it('should contain "banner works!"', () => {  const bannerElement: HTMLElement = fixture.nativeElement;  expect(bannerElement.textContent).toContain('banner works!');});
```

### [create a `setup` function](#create-a-setup-function)

As an alternative to `beforeEach`, you can also create a setup function that you will call in every test. A setup function has the advantage of being customizable via parameters.

Here is an example of what a setup function could look like:

```
function setup(providers?: StaticProviders[]): ComponentFixture<Banner> {  TestBed.configureTestingModule({providers});  return TestBed.createComponent(Banner);}
```

### [`nativeElement`](#nativeelement)

The value of [`ComponentFixture.nativeElement`](/api/core/testing/ComponentFixture#nativeElement) has the `any` type. Later you'll encounter the [`DebugElement.nativeElement`](/api/core/DebugElement#nativeElement) and it too has the `any` type.

Angular can't know at compile time what kind of HTML element the `nativeElement` is or if it even is an HTML element. The application might be running on a *non-browser platform*, such as the server or a node environment, where the element might have a diminished API or not exist at all.

The tests in this guide are designed to run in a browser so a `nativeElement` value will always be an `HTMLElement` or one of its derived classes.

Knowing that it is an `HTMLElement` of some sort, use the standard HTML `querySelector` to dive deeper into the element tree.

Here's another test that calls `HTMLElement.querySelector` to get the paragraph element and look for the banner text:

```
it('should have <p> with "banner works!"', () => {  const bannerElement: HTMLElement = fixture.nativeElement;  const p = bannerElement.querySelector('p')!;  expect(p.textContent).toEqual('banner works!');});
```

### [`DebugElement`](#debugelement)

The Angular *fixture* provides the component's element directly through the `fixture.nativeElement`.

```
const bannerElement: HTMLElement = fixture.nativeElement;
```

This is actually a convenience method, implemented as `fixture.debugElement.nativeElement`.

```
const bannerDe: DebugElement = fixture.debugElement;const bannerEl: HTMLElement = bannerDe.nativeElement;
```

There's a good reason for this circuitous path to the element.

The properties of the `nativeElement` depend upon the runtime environment. You could be running these tests on a *non-browser* platform that doesn't have a DOM or whose DOM-emulation doesn't support the full `HTMLElement` API.

Angular relies on the [`DebugElement`](/api/core/DebugElement) abstraction to work safely across *all supported platforms*. Instead of creating an HTML element tree, Angular creates a [`DebugElement`](/api/core/DebugElement) tree that wraps the *native elements* for the runtime platform. The `nativeElement` property unwraps the [`DebugElement`](/api/core/DebugElement) and returns the platform-specific element object.

Because the sample tests for this guide are designed to run only in a browser, a `nativeElement` in these tests is always an `HTMLElement` whose familiar methods and properties you can explore within a test.

Here's the previous test, re-implemented with `fixture.debugElement.nativeElement`:

```
it('should find the <p> with fixture.debugElement.nativeElement', () => {  const bannerDe: DebugElement = fixture.debugElement;  const bannerEl: HTMLElement = bannerDe.nativeElement;  const p = bannerEl.querySelector('p')!;  expect(p.textContent).toEqual('banner works!');});
```

The [`DebugElement`](/api/core/DebugElement) has other methods and properties that are useful in tests, as you'll see elsewhere in this guide.

You import the [`DebugElement`](/api/core/DebugElement) symbol from the Angular core library.

```
import {DebugElement} from '@angular/core';
```

### [`By.css()`](#bycss)

Although the tests in this guide all run in the browser, some applications might run on a different platform at least some of the time.

For example, the component might render first on the server as part of a strategy to make the application launch faster on poorly connected devices. The server-side renderer might not support the full HTML element API. If it doesn't support `querySelector`, the previous test could fail.

The [`DebugElement`](/api/core/DebugElement) offers query methods that work for all supported platforms. These query methods take a *predicate* function that returns `true` when a node in the [`DebugElement`](/api/core/DebugElement) tree matches the selection criteria.

You create a *predicate* with the help of a [`By`](/api/platform-browser/By) class imported from a library for the runtime platform. Here's the [`By`](/api/platform-browser/By) import for the browser platform:

```
import {By} from '@angular/platform-browser';
```

The following example re-implements the previous test with [`DebugElement.query()`](/api/core/DebugElement#query) and the browser's [`By.css`](/api/platform-browser/By#css) method.

```
it('should find the <p> with fixture.debugElement.query(By.css)', () => {  const bannerDe: DebugElement = fixture.debugElement;  const paragraphDe = bannerDe.query(By.css('p'));  const p: HTMLElement = paragraphDe.nativeElement;  expect(p.textContent).toEqual('banner works!');});
```

Some noteworthy observations:

- The [`By.css()`](/api/platform-browser/By#css) static method selects [`DebugElement`](/api/core/DebugElement) nodes with a [standard CSS selector](https://developer.mozilla.org/docs/Learn/CSS/Building_blocks/Selectors "CSS selectors").
- The query returns a [`DebugElement`](/api/core/DebugElement) for the paragraph.
- You must unwrap that result to get the paragraph element.

When you're filtering by CSS selector and only testing properties of a browser's *native element*, the [`By.css`](/api/platform-browser/By#css) approach might be overkill.

It's often more straightforward and clear to filter with a standard `HTMLElement` method such as `querySelector()` or `querySelectorAll()`.
