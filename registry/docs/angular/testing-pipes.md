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

You can test [pipes](guide/templates/pipes) without the Angular testing utilities.

arrow\_upward\_alt Back to the top

## [Testing the `TitleCasePipe`](#testing-the-titlecasepipe)

A pipe class has one method, `transform`, that manipulates the input value into a transformed output value. The `transform` implementation rarely interacts with the DOM. Most pipes have no dependence on Angular other than the [`@Pipe`](/api/core/Pipe) metadata and an interface.

Consider a [`TitleCasePipe`](/api/common/TitleCasePipe) that capitalizes the first letter of each word. Here's an implementation with a regular expression.

```
import {Pipe, PipeTransform} from '@angular/core';@Pipe({name: 'titlecase', pure: true})/** Transform to Title Case: uppercase the first letter of the words in a string. */export class TitleCasePipe implements PipeTransform {  transform(input: string): string {    return input.length === 0      ? ''      : input.replace(/\w\S*/g, (txt) => txt[0].toUpperCase() + txt.slice(1).toLowerCase());  }}
```

Anything that uses a regular expression is worth testing thoroughly. You can use standard unit testing techniques to explore the expected cases and the edge cases.

```
describe('TitleCasePipe', () => {  // This pipe is a pure, stateless function so no need for BeforeEach  const pipe = new TitleCasePipe();  it('transforms "abc" to "Abc"', () => {    expect(pipe.transform('abc')).toBe('Abc');  });  it('transforms "abc def" to "Abc Def"', () => {    expect(pipe.transform('abc def')).toBe('Abc Def');  });  // ... more tests ...});
```

## [Writing DOM tests to support a pipe test](#writing-dom-tests-to-support-a-pipe-test)

These are tests of the pipe *in isolation*. They can't tell if the [`TitleCasePipe`](/api/common/TitleCasePipe) is working properly as applied in the application components.

Consider adding component tests such as this one:

```
it('should convert hero name to Title Case', async () => {  // get the name's input and display elements from the DOM  const hostElement: HTMLElement = harness.routeNativeElement!;  const nameInput: HTMLInputElement = hostElement.querySelector('input')!;  const nameDisplay: HTMLElement = hostElement.querySelector('span')!;  // simulate user entering a new name into the input box  nameInput.value = 'quick BROWN  fOx';  // Dispatch a DOM event so that Angular learns of input value change.  nameInput.dispatchEvent(new Event('input'));  // Wait for Angular to update the display binding through the title pipe  await harness.fixture.whenStable();  expect(nameDisplay.textContent).toBe('Quick Brown  Fox');});
```
