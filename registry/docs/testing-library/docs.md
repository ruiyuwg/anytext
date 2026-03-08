On this page

The [`@testing-library`](https://www.npmjs.com/org/testing-library) family of packages helps you test UI components in a user-centric way.

> [The more your tests resemble the way your software is used, the more confidence they can give you.](/docs/guiding-principles)

## The problem[​](#the-problem "Direct link to heading")

You want to write maintainable tests that give you high confidence that your components are working for your users. As a part of this goal, you want your tests to avoid including implementation details so refactors of your components (changes to implementation but not functionality) don't break your tests and slow you and your team down.

## The solution[​](#the-solution "Direct link to heading")

The core library, [`DOM Testing Library`](/docs/dom-testing-library/intro), is a light-weight solution for testing web pages by querying and interacting with DOM nodes (whether simulated with [`JSDOM`](https://github.com/jsdom/jsdom)/[Jest](https://jestjs.io) or in the browser). The main utilities it provides involve querying the DOM for nodes in a way that's similar to how the user finds elements on the page. In this way, the library helps ensure your tests give you confidence that your application will work when a real user uses it.

The core library has been wrapped to provide ergonomic APIs for several frameworks, including [React](/docs/react-testing-library/intro), [Angular](/docs/angular-testing-library/intro), and [Vue](/docs/vue-testing-library/intro). There is also a plugin to use testing-library queries for end-to-end tests in [Cypress](/docs/cypress-testing-library/intro) and an implementation for [React Native](/docs/react-native-testing-library/intro).

### What this library is not[​](#what-this-library-is-not "Direct link to heading")

1.  A test runner or framework
2.  Specific to a testing framework

`DOM Testing Library` works with any environment that provides DOM APIs, such as Jest, Mocha + JSDOM, or a real browser.

### What you should avoid with Testing Library[​](#what-you-should-avoid-with-testing-library "Direct link to heading")

Testing Library encourages you to avoid testing [implementation details](https://kentcdodds.com/blog/testing-implementation-details) like the internals of a component you're testing (though it's still possible). [The Guiding Principles](/docs/guiding-principles) of this library emphasize a focus on tests that closely resemble how users interact with your web pages.

You may want to avoid the following implementation details:

1.  Internal state of a component
2.  Internal methods of a component
3.  Lifecycle methods of a component
4.  Child components
