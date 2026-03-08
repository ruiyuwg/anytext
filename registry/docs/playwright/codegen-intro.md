On this page

## Introduction[​](#introduction "Direct link to Introduction")

Playwright can generate tests automatically, providing a quick way to get started with testing. Codegen opens a browser window for interaction and the Playwright Inspector for recording, copying, and managing your generated tests.

**You will learn**

-   [How to record a test](/docs/codegen#recording-a-test)
-   [How to generate locators](/docs/codegen#generating-locators)

## Running Codegen[​](#running-codegen "Direct link to Running Codegen")

Use the `codegen` command to run the test generator followed by the URL of the website you want to generate tests for. The URL is optional and can be added directly in the browser window if omitted.

```
npx playwright codegen demo.playwright.dev/todomvc
```

### Recording a test[​](#recording-a-test "Direct link to Recording a test")

Run `codegen` and perform actions in the browser. Playwright generates code for your interactions automatically. Codegen analyzes the rendered page and recommends the best locator, prioritizing role, text, and test id locators. When multiple elements match a locator, the generator improves it to uniquely identify the target element, reducing test failures and flakiness.

With the test generator you can record:

-   Actions like click or fill by interacting with the page
-   Assertions by clicking a toolbar icon, then clicking a page element to assert against. You can choose:
    -   `'assert visibility'` to assert that an element is visible
    -   `'assert text'` to assert that an element contains specific text
    -   `'assert value'` to assert that an element has a specific value

![Recording a test](/assets/images/record-test-js-648272d0798f11b3f4b97eb2b9ff5dd6.png)

###### [​](#-1 "Direct link to -1")

When you finish interacting with the page, press the `'record'` button to stop recording and use the `'copy'` button to copy the generated code to your editor.

Use the `'clear'` button to clear the code and start recording again. Once finished, close the Playwright Inspector window or stop the terminal command.

To learn more about generating tests, check out our detailed guide on [Codegen](/docs/codegen).

### Generating locators[​](#generating-locators "Direct link to Generating locators")

You can generate [locators](/docs/locators) with the test generator.

-   Press the `'Record'` button to stop recording and the `'Pick Locator'` button will appear
-   Click the `'Pick Locator'` button and hover over elements in the browser window to see the locator highlighted underneath each element
-   Click the element you want to locate and the code for that locator will appear in the locator playground next to the Pick Locator button
-   Edit the locator in the locator playground to fine-tune it and see the matching element highlighted in the browser window
-   Use the copy button to copy the locator and paste it into your code

###### [​](#-2 "Direct link to -2")

![picking a locator](/assets/images/pick-locator-js-7a89c3d033ccf3f1cf20d9548ad7b475.png)

### Emulation[​](#emulation "Direct link to Emulation")

You can generate tests using emulation for specific viewports, devices, color schemes, geolocation, language, or timezone. The test generator can also preserve authenticated state. Check out the [Test Generator](/docs/codegen#emulation) guide to learn more.

## What's Next[​](#whats-next "Direct link to What's Next")

-   [See a trace of your tests](/docs/trace-viewer-intro)
