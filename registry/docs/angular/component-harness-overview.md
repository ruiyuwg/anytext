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

A **component harness** is a class that allows tests to interact with components the way an end user does via a supported API. You can create test harnesses for any component, ranging from small reusable widgets to full pages.

Harnesses offer several benefits:

- They make tests less brittle by insulating themselves against implementation details of a component, such as its DOM structure
- They make tests become more readable and easier to maintain
- They can be used across multiple testing environments

```
// Example of test with a harness for a component called MyButtonComponentit('should load button with exact text', async () => {  const button = await loader.getHarness(MyButtonComponentHarness);  expect(await button.getText()).toBe('Confirm');});
```

Component harnesses are especially useful for shared UI widgets. Developers often write tests that depend on private implementation details of widgets, such as DOM structure and CSS classes. Those dependencies make tests brittle and hard to maintain. Harnesses offer an alternative— a supported API that interacts with the widget the same way an end-user does. Widget implementation changes now become less likely to break user tests. For example, [Angular Material](https://material.angular.dev/components/categories) provides a test harness for each component in the library.

Component harnesses support multiple testing environments. You can use the same harness implementation in both unit and end-to-end tests. Test authors only need to learn one API and component authors don't have to maintain separate unit and end-to-end test implementations.

Many developers can be categorized by one of the following developer type categories: test authors, component harness authors, and harness environment authors. Use the table below to find the most relevant section in this guide based on these categories:

Developer Type

Description

Relevant Section

Test Authors

Developers that use component harnesses written by someone else to test their application. For example, this could be an app developer who uses a third-party menu component and needs to interact with the menu in a unit test.

[Using component harnesses in tests](guide/testing/using-component-harnesses)

Component harness authors

Developers who maintain some reusable Angular components and want to create a test harness for its users to use in their tests. For example, an author of a third party Angular component library or a developer who maintains a set of common components for a large Angular application.

[Creating component harnesses for your components](guide/testing/creating-component-harnesses)

Harness environment authors

Developers who want to add support for using component harnesses in additional testing environments. For information on supported testing environments out-of-the-box, see the [test harness environments and loaders](guide/testing/using-component-harnesses#test-harness-environments-and-loaders).

[Adding support for additional testing environments](guide/testing/component-harnesses-testing-environments)

For the full API reference, please see the [Angular CDK's component harness API reference page](/api#angular_cdk_testing).
