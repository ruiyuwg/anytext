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

An *attribute directive* modifies the behavior of an element, component or another directive. Its name reflects the way the directive is applied: as an attribute on a host element.

arrow\_upward\_alt Back to the top

## [Testing the `Highlight` directive](#testing-the-highlight-directive)

The sample application's `Highlight` directive sets the background color of an element based on either a data bound color or a default color (lightgray). It also sets a custom property of the element (`customProperty`) to `true` for no reason other than to show that it can.

```
import {Directive, inject, input} from '@angular/core';/** * Set backgroundColor for the attached element to highlight color * and set the element's customProperty attribute to true */@Directive({  selector: '[highlight]',  host: {    '[style.backgroundColor]': 'bgColor() || defaultColor',  },})export class Highlight {  readonly defaultColor = 'rgb(211, 211, 211)'; // lightgray  readonly bgColor = input('', {alias: 'highlight'});}
```

It's used throughout the application, perhaps most simply in the `About` component:

```
@Component({  imports: [Twain, Highlight],  template: `    <h2 highlight="skyblue">About</h2>    <h3>Quote of the day:</h3>    <twain-quote />  `,})export class About {}
```

Testing the specific use of the `Highlight` directive within the `About` component requires only the techniques explored in the ["Nested component tests"](guide/testing/components-scenarios#nested-component-tests) section of [Component testing scenarios](guide/testing/components-scenarios).

```
let fixture: ComponentFixture<About>;beforeEach(async () => {  TestBed.configureTestingModule({    providers: [TwainService, UserService],    schemas: [CUSTOM_ELEMENTS_SCHEMA],  });  fixture = TestBed.createComponent(About);  await fixture.whenStable();});it('should have skyblue <h2>', () => {  const h2: HTMLElement = fixture.nativeElement.querySelector('h2');  const bgColor = h2.style.backgroundColor;  expect(bgColor).toBe('skyblue');});
```

However, testing a single use case is unlikely to explore the full range of a directive's capabilities. Finding and testing all components that use the directive is tedious, brittle, and almost as unlikely to afford full coverage.

*Class-only tests* might be helpful, but attribute directives like this one tend to manipulate the DOM. Isolated unit tests don't touch the DOM and, therefore, do not inspire confidence in the directive's efficacy.

A better solution is to create an artificial test component that demonstrates all ways to apply the directive.

```
@Component({  imports: [Highlight],  template: `    <h2 highlight="yellow">Something Yellow</h2>    <h2 highlight>The Default (Gray)</h2>    <h2>No Highlight</h2>    <input #box [highlight]="box.value" value="cyan" />  `,})class Test {}
```

![HighlightDirective spec in action](assets/images/guide/testing/highlight-directive-spec.png)

**HELPFUL:** The `<input>` case binds the `Highlight` to the name of a color value in the input box. The initial value is the word "cyan" which should be the background color of the input box.

Here are some tests of this component:

```
let fixture: ComponentFixture<Test>;let des: DebugElement[]; // the three elements w/ the directivebeforeEach(async () => {  fixture = TestBed.createComponent(Test);  await fixture.whenStable();  // all elements with an attached Highlight  des = fixture.debugElement.queryAll(By.directive(Highlight));});// color testsit('should have three highlighted elements', () => {  expect(des.length).toBe(3);});it('should color 1st <h2> background "yellow"', () => {  const bgColor = des[0].nativeElement.style.backgroundColor;  expect(bgColor).toBe('yellow');});it('should color 2nd <h2> background w/ default color', () => {  const dir = des[1].injector.get(Highlight);  const bgColor = des[1].nativeElement.style.backgroundColor;  expect(bgColor).toBe(dir.defaultColor);});it('should bind <input> background to value color', async () => {  // easier to work with nativeElement  const input = des[2].nativeElement as HTMLInputElement;  expect(input.style.backgroundColor, 'initial backgroundColor').toBe('cyan');  input.value = 'green';  // Dispatch a DOM event so that Angular responds to the input value change.  input.dispatchEvent(new Event('input'));  await fixture.whenStable();  expect(input.style.backgroundColor, 'changed backgroundColor').toBe('green');});it('bare <h2> should not have a backgroundColor', () => {  // the h2 without the Highlight directive  const bareH2 = fixture.debugElement.query(By.css('h2:not([highlight])'));  expect(bareH2.styles.backgroundColor).toBeUndefined();});
```

A few techniques are noteworthy:

- The [`By.directive`](/api/platform-browser/By#directive) predicate is a great way to get the elements that have this directive *when their element types are unknown*

- The [`:not` pseudo-class](https://developer.mozilla.org/docs/Web/CSS/:not) in [`By.css('h2:not([highlight])')`](/api/platform-browser/By#css\('h2:not\([highlight]\)'\)) helps find `<h2>` elements that *do not* have the directive. [`By.css('*:not([highlight])')`](/api/platform-browser/By#css\('*:not\([highlight]\)'\)) finds *any* element that does not have the directive.

- [`DebugElement.styles`](/api/core/DebugElement#styles) affords access to element styles even in the absence of a real browser, thanks to the [`DebugElement`](/api/core/DebugElement) abstraction. But feel free to exploit the `nativeElement` when that seems easier or more clear than the abstraction.

- Angular adds a directive to the injector of the element to which it is applied. The test for the default color uses the injector of the second `<h2>` to get its `Highlight` instance and its `defaultColor`.

- [`DebugElement.properties`](/api/core/DebugElement#properties) affords access to the artificial custom property that is set by the directive
