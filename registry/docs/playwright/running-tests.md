On this page

## Introduction[​](#introduction "Direct link to Introduction")

With Playwright you can run a single test, a set of tests, or all tests. Tests can be run on one browser or multiple browsers using the `--project` flag. Tests run in parallel by default and in headless mode, meaning no browser window opens while running the tests and results appear in the terminal. You can run tests in headed mode using the `--headed` CLI argument, or run your tests in [UI mode](/docs/test-ui-mode) using the `--ui` flag to see a full trace of your tests.

**You will learn**

-   [How to run tests from the command line](/docs/running-tests#command-line)
-   [How to debug tests](/docs/running-tests#debugging-tests)
-   [How to open the HTML test reporter](/docs/running-tests#test-reports)

## Running tests[​](#running-tests "Direct link to Running tests")

### Command line[​](#command-line "Direct link to Command line")

You can run your tests with the `playwright test` command. This runs your tests on all browsers as configured in the `playwright.config` file, and results appear in the terminal. Tests run in headless mode by default, meaning no browser window opens while running the tests.

```
npx playwright test
```

![tests running in command line](/assets/images/run-tests-cli-6e7e3119a14239c9021b406d7109dc44.png)

### Run tests in UI mode[​](#run-tests-in-ui-mode "Direct link to Run tests in UI mode")

We highly recommend running your tests with [UI Mode](/docs/test-ui-mode) for a better developer experience where you can easily walk through each step of the test and visually see what was happening before, during and after each step. UI mode also comes with many other features such as the locator picker, watch mode and more.

```
npx playwright test --ui
```

![UI Mode](/assets/images/ui-mode-1958baf0398aef5e9c9b5c68c5d56f2d.png)

Check out our [detailed guide on UI Mode](/docs/test-ui-mode) to learn more about its features.

### Run tests in headed mode[​](#run-tests-in-headed-mode "Direct link to Run tests in headed mode")

To run your tests in headed mode, use the `--headed` flag. This gives you the ability to visually see how Playwright interacts with the website.

```
npx playwright test --headed
```

### Run tests on different browsers[​](#run-tests-on-different-browsers "Direct link to Run tests on different browsers")

To specify which browser you would like to run your tests on, use the `--project` flag followed by the browser name.

```
npx playwright test --project webkit
```

To specify multiple browsers to run your tests on, use the `--project` flag multiple times followed by each browser name.

```
npx playwright test --project webkit --project firefox
```

### Run specific tests[​](#run-specific-tests "Direct link to Run specific tests")

To run a single test file, pass in the test file name that you want to run.

```
npx playwright test landing-page.spec.ts
```

To run a set of test files from different directories, pass in the directory names that you want to run the tests in.

```
npx playwright test tests/todo-page/ tests/landing-page/
```

To run files that have `landing` or `login` in the file name, simply pass in these keywords to the CLI.

```
npx playwright test landing login
```

To run a test with a specific title, use the `-g` flag followed by the title of the test.

```
npx playwright test -g "add a todo item"
```

### Run last failed tests[​](#run-last-failed-tests "Direct link to Run last failed tests")

To run only the tests that failed in the last test run, first run your tests and then run them again with the `--last-failed` flag.

```
npx playwright test --last-failed
```

### Run tests in VS Code[​](#run-tests-in-vs-code "Direct link to Run tests in VS Code")

Tests can be run right from VS Code using the [VS Code extension](https://marketplace.visualstudio.com/items?itemName=ms-playwright.playwright). Once installed you can simply click the green triangle next to the test you want to run or run all tests from the testing sidebar. Check out our [Getting Started with VS Code](/docs/getting-started-vscode) guide for more details.

![install playwright extension](/assets/images/vscode-extension-ce873e1c0d856b8c255e9de0781eb8d9.png)

## Debugging tests[​](#debugging-tests "Direct link to Debugging tests")

Since Playwright runs in Node.js, you can debug it with your debugger of choice, e.g. using `console.log`, inside your IDE, or directly in VS Code with the [VS Code Extension](/docs/getting-started-vscode). Playwright comes with [UI Mode](/docs/test-ui-mode), where you can easily walk through each step of the test, see logs, errors, network requests, inspect the DOM snapshot, and more. You can also use the [Playwright Inspector](/docs/debug#playwright-inspector), which allows you to step through Playwright API calls, see their debug logs, and explore [locators](/docs/locators).

### Debug tests in UI mode[​](#debug-tests-in-ui-mode "Direct link to Debug tests in UI mode")

We highly recommend debugging your tests with [UI Mode](/docs/test-ui-mode) for a better developer experience where you can easily walk through each step of the test and visually see what was happening before, during, and after each step. UI mode also comes with many other features such as the locator picker, watch mode, and more.

```
npx playwright test --ui
```

![showing errors in ui mode](/assets/images/ui-mode-error-ccd897a716874f5a9879220df24f1168.png)

While debugging you can use the Pick Locator button to select an element on the page and see the locator that Playwright would use to find that element. You can also edit the locator in the locator playground and see it highlighting live in the browser window. Use the Copy Locator button to copy the locator to your clipboard and then paste it into your test.

![pick locator in ui mode](/assets/images/ui-mode-pick-locator-91b71dca4af49fdfad305a57b9d657b8.png)

Check out our [detailed guide on UI Mode](/docs/test-ui-mode) to learn more about its features.

### Debug tests with the Playwright Inspector[​](#debug-tests-with-the-playwright-inspector "Direct link to Debug tests with the Playwright Inspector")

To debug all tests, run the Playwright test command followed by the `--debug` flag.

```
npx playwright test --debug
```

![Debugging Tests with the Playwright inspector](/assets/images/run-tests-debug-04d9391d458299856c76dee6394874e0.png)

This command opens a browser window as well as the Playwright Inspector. You can use the step over button at the top of the inspector to step through your test. Or, press the play button to run your test from start to finish. Once the test finishes, the browser window closes.

To debug one test file, run the Playwright test command with the test file name that you want to debug followed by the `--debug` flag.

```
npx playwright test example.spec.ts --debug
```

To debug a specific test from the line number where the `test(..` is defined, add a colon followed by the line number at the end of the test file name, followed by the `--debug` flag.

```
npx playwright test example.spec.ts:10 --debug
```

While debugging you can use the Pick Locator button to select an element on the page and see the locator that Playwright would use to find that element. You can also edit the locator and see it highlighting live in the browser window. Use the Copy Locator button to copy the locator to your clipboard and then paste it into your test.

![Locator picker in the Playwright Inspector](/assets/images/run-tests-pick-locator-e13f89473c64d6c7764de5cf97f7413a.png)

Check out our [debugging guide](/docs/debug) to learn more about debugging with the [VS Code debugger](/docs/debug#vs-code-debugger), UI Mode, and the [Playwright Inspector](/docs/debug#playwright-inspector) as well as debugging with [Browser Developer tools](/docs/debug#browser-developer-tools).

## Test reports[​](#test-reports "Direct link to Test reports")

The [HTML Reporter](/docs/test-reporters#html-reporter) shows you a full report of your tests allowing you to filter the report by browsers, passed tests, failed tests, skipped tests, and flaky tests. By default, the HTML report opens automatically if some tests failed, otherwise you can open it with the following command.

```
npx playwright show-report
```

![HTML Report](/assets/images/html-report-951cba1d9da23ab59e46459fe2e73036.png)

You can filter and search for tests as well as click on each test to see the test errors and explore each step of the test.

![HTML Reporter detail view](/assets/images/html-report-detail-2690519290492b327d5711d2eecddbb4.png)

## What's next[​](#whats-next "Direct link to What's next")

-   [Generate tests with Codegen](/docs/codegen-intro)
-   [See a trace of your tests](/docs/trace-viewer-intro)
-   [Explore all the features of UI Mode](/docs/test-ui-mode)
-   [Run your tests on CI with GitHub Actions](/docs/ci-intro)
