On this page

## Introduction[​](#introduction "Direct link to Introduction")

Playwright tests are simple: they **perform actions** and **assert the state** against expectations.

Playwright automatically waits for [actionability](/docs/actionability) checks to pass before performing each action. You don't need to add manual waits or deal with race conditions. Playwright assertions are designed to describe expectations that will eventually be met, eliminating flaky timeouts and racy checks.

**You will learn**

-   [How to write the first test](/docs/writing-tests#first-test)
-   [How to perform actions](/docs/writing-tests#actions)
-   [How to use assertions](/docs/writing-tests#assertions)
-   [How tests run in isolation](/docs/writing-tests#test-isolation)
-   [How to use test hooks](/docs/writing-tests#using-test-hooks)

## First test[​](#first-test "Direct link to First test")

Take a look at the following example to see how to write a test.

tests/example.spec.ts

```
import { test, expect } from '@playwright/test';test('has title', async ({ page }) => {  await page.goto('https://playwright.dev/');  // Expect a title "to contain" a substring.  await expect(page).toHaveTitle(/Playwright/);});test('get started link', async ({ page }) => {  await page.goto('https://playwright.dev/');  // Click the get started link.  await page.getByRole('link', { name: 'Get started' }).click();  // Expects page to have a heading with the name of Installation.  await expect(page.getByRole('heading', { name: 'Installation' })).toBeVisible();});
```

note

Add `// @ts-check` at the start of each test file when using JavaScript in VS Code to get automatic type checking.

## Actions[​](#actions "Direct link to Actions")

### Navigation[​](#navigation "Direct link to Navigation")

Most tests start by navigating to a URL. After that, the test interacts with page elements.

```
await page.goto('https://playwright.dev/');
```

Playwright waits for the page to reach the load state before continuing. Learn more about [page.goto()](/docs/api/class-page#page-goto) options.

### Interactions[​](#interactions "Direct link to Interactions")

Performing actions starts with locating elements. Playwright uses [Locators API](/docs/locators) for that. Locators represent a way to find element(s) on the page at any moment. Learn more about the [different types](/docs/locators) of locators available.

Playwright waits for the element to be [actionable](/docs/actionability) before performing the action, so you don't need to wait for it to become available.

```
// Create a locator.const getStarted = page.getByRole('link', { name: 'Get started' });// Click it.await getStarted.click();
```

In most cases, it'll be written in one line:

```
await page.getByRole('link', { name: 'Get started' }).click();
```

### Basic actions[​](#basic-actions "Direct link to Basic actions")

Here are the most popular Playwright actions. For the complete list, check the [Locator API](/docs/api/class-locator) section.

Action

Description

[locator.check()](/docs/api/class-locator#locator-check)

Check the input checkbox

[locator.click()](/docs/api/class-locator#locator-click)

Click the element

[locator.uncheck()](/docs/api/class-locator#locator-uncheck)

Uncheck the input checkbox

[locator.hover()](/docs/api/class-locator#locator-hover)

Hover mouse over the element

[locator.fill()](/docs/api/class-locator#locator-fill)

Fill the form field, input text

[locator.focus()](/docs/api/class-locator#locator-focus)

Focus the element

[locator.press()](/docs/api/class-locator#locator-press)

Press single key

[locator.setInputFiles()](/docs/api/class-locator#locator-set-input-files)

Pick files to upload

[locator.selectOption()](/docs/api/class-locator#locator-select-option)

Select option in the drop down

## Assertions[​](#assertions "Direct link to Assertions")

Playwright includes [test assertions](/docs/test-assertions) in the form of `expect` function. To make an assertion, call `expect(value)` and choose a matcher that reflects the expectation.

Playwright includes async matchers that wait until the expected condition is met. Using these matchers makes tests non-flaky and resilient. For example, this code waits until the page gets the title containing "Playwright":

```
await expect(page).toHaveTitle(/Playwright/);
```

Here are the most popular async assertions. For the complete list, see [assertions guide](/docs/test-assertions):

Assertion

Description

[expect(locator).toBeChecked()](/docs/api/class-locatorassertions#locator-assertions-to-be-checked)

Checkbox is checked

[expect(locator).toBeEnabled()](/docs/api/class-locatorassertions#locator-assertions-to-be-enabled)

Control is enabled

[expect(locator).toBeVisible()](/docs/api/class-locatorassertions#locator-assertions-to-be-visible)

Element is visible

[expect(locator).toContainText()](/docs/api/class-locatorassertions#locator-assertions-to-contain-text)

Element contains text

[expect(locator).toHaveAttribute()](/docs/api/class-locatorassertions#locator-assertions-to-have-attribute)

Element has attribute

[expect(locator).toHaveCount()](/docs/api/class-locatorassertions#locator-assertions-to-have-count)

List of elements has given length

[expect(locator).toHaveText()](/docs/api/class-locatorassertions#locator-assertions-to-have-text)

Element matches text

[expect(locator).toHaveValue()](/docs/api/class-locatorassertions#locator-assertions-to-have-value)

Input element has value

[expect(page).toHaveTitle()](/docs/api/class-pageassertions#page-assertions-to-have-title)

Page has title

[expect(page).toHaveURL()](/docs/api/class-pageassertions#page-assertions-to-have-url)

Page has URL

Playwright also includes generic matchers like `toEqual`, `toContain`, `toBeTruthy` that can be used to assert any conditions. These assertions do not use the `await` keyword as they perform immediate synchronous checks on already available values.

```
expect(success).toBeTruthy();
```

### Test Isolation[​](#test-isolation "Direct link to Test Isolation")

Playwright Test is based on the concept of [test fixtures](/docs/test-fixtures) such as the [built in page fixture](/docs/test-fixtures#built-in-fixtures), which is passed into your test. Pages are [isolated between tests due to the Browser Context](/docs/browser-contexts), which is equivalent to a brand new browser profile. Every test gets a fresh environment, even when multiple tests run in a single browser.

tests/example.spec.ts

```
import { test } from '@playwright/test';test('example test', async ({ page }) => {  // "page" belongs to an isolated BrowserContext, created for this specific test.});test('another test', async ({ page }) => {  // "page" in this second test is completely isolated from the first test.});
```

### Using Test Hooks[​](#using-test-hooks "Direct link to Using Test Hooks")

You can use various [test hooks](/docs/api/class-test) such as `test.describe` to declare a group of tests and `test.beforeEach` and `test.afterEach` which are executed before/after each test. Other hooks include the `test.beforeAll` and `test.afterAll` which are executed once per worker before/after all tests.

tests/example.spec.ts

```
import { test, expect } from '@playwright/test';test.describe('navigation', () => {  test.beforeEach(async ({ page }) => {    // Go to the starting url before each test.    await page.goto('https://playwright.dev/');  });  test('main navigation', async ({ page }) => {    // Assertions use the expect API.    await expect(page).toHaveURL('https://playwright.dev/');  });});
```

## What's Next[​](#whats-next "Direct link to What's Next")

-   [Run single test, multiple tests, headed mode](/docs/running-tests)
-   [Generate tests with Codegen](/docs/codegen-intro)
-   [See a trace of your tests](/docs/trace-viewer-intro)
-   [Explore UI Mode](/docs/test-ui-mode)
-   [Run tests on CI with GitHub Actions](/docs/ci-intro)
