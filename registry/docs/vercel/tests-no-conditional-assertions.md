# TESTS\_NO\_CONDITIONAL\_ASSERTIONS

> **🔒 Permissions Required**: Conformance

When possible, conditional test assertions should be avoided as they can lead
to false test passes if and when conditions are not evaluated as expected.

If you can't avoid using a condition in your test, you can satisfy this rule by
using an `expect.assertions` statement.

## Example

In this abstract example, there are two potential points of failure:

1. The button could throw a ButtonError during `render(Button)`, causing the
   first (`try`) assertion to be skipped.
2. The `throwError()` function could fail to throw, causing the second
   (`catch`) assertion to be skipped.

```ts filename="src/button/button.test.ts" {5,8}
describe('button', () => {
  it('should render', () => {
    try {
      const button = render(Button);
      expect(button).not.toBe(null);
      button.throwAnError();
    } catch (error) {
      expect(error).toBeInstanceOf(ButtonError);
    }
  });
});
```

## How to fix

There are two ways to resolve this error:

1. Refactor the test code to ensure that assertions are no longer conditional.
2. Use `expect.assertions` to inform the test runner that it should fail if the
   required number of assertions were not called during the test.

Taking our previous example, we can apply the second fix:

```ts filename="src/button/button.test.ts" {10}
describe('button', () => {
  it('should render', () => {
    try {
      const button = render(Button);
      expect(button).not.toBe(null);
      button.throwAnError();
    } catch (error) {
      expect(error).toBeInstanceOf(ButtonError);
    }
    expect.assertions(2);
  });
});
```

### Using `expect.assertions`

Most test frameworks and runners support `expect.assertions`, and this is the
preferred approach to resolving this error if you can't refactor your test
code.

To satisfy this rule, the test must not conditionally call `expect.assertions`.
This rule doesn't count or report on the number of assertions.

### What to do when you can't use `expect.assertions`

There may be cases where you can't use `expect.assertions` (i.e. your test
framework or runner doesn't support it), and refactoring the test code is not
a viable solution. In those cases, you have the following options:

1. You can use allowlists to allow individual violations (see: [Conformance
   Allowlists](/docs/conformance/allowlist)).
2. You can disable this test (see: [Customizing Conformance](/docs/conformance/customize)).

## Customization

The default pattern matches the default patterns for Jest and Vitest, however
you can provide your own patterns through the `paths` property.

The default configuration is:

```jsonc filename="conformance.config.jsonc" {2-4}
{
  "configuration": [
    "testPatterns": ["**/unit-tests/**/*.{js,jsx}"]
  ]
}
```

title: "TESTS\_NO\_ONLY"
description: "Requires that focused tests (i.e. it.only()) are unfocused."
last\_updated: "2026-03-23T09:40:07.863Z"
source: "https://vercel.com/docs/conformance/rules/TESTS\_NO\_ONLY"

# TESTS\_NO\_ONLY

> **🔒 Permissions Required**: Conformance

Focusing tests can help to write and debug test suites, but focused tests
should be unfocused before committing changes.

This rule disallows focused tests so that they can't be committed without an
allowlist entry.

## Example

```ts filename="src/button/button.test.ts" {2}
describe('button', () => {
  it.only('should render', () => {
    // ...
  });
});
```

Note that the following patterns (and variants of these patterns) will be
reported as errors by this test. These should cover popular test frameworks and
runners, including:

- [`jest`](https://jestjs.io/)
- [`node:test`](https://nodejs.org/api/test.html#test-runner)
- [`vitest`](https://vitest.dev/)
- [`cypress`](https://www.cypress.io/)
- [`@playwright/test`](https://playwright.dev/docs/api/class-test)

```ts
// Most test frameworks and runners
describe.only(/* ... */);
it.concurrent.only(/* ... */);
test.only.each([])(/* ... */);
// Jest - supported in addition to the above
fdescribe(/* ... */);
fit.each([])(/* ... */);
ftest(/* ... */);
```

## How to fix

This error will be resolved when debugging is complete and the test has been
unfocused.

## Customization

The default pattern matches the default patterns for Jest and Vitest, however
you can provide your own patterns through the `paths` property.

The default configuration is:

```jsonc filename="conformance.config.jsonc" {3-5}
{
  "configuration": [
    "testPatterns": ["**/unit-tests/**/*.{js,jsx}"]
  ]
}
```

title: "TYPESCRIPT\_CONFIGURATION"
description: "Requires that a workspace package that uses TypeScript files has configured TypeScript correctly for that workspace."
last\_updated: "2026-03-23T09:40:07.868Z"
source: "https://vercel.com/docs/conformance/rules/TYPESCRIPT\_CONFIGURATION"
