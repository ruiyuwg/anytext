On this page

## Introduction[​](#introduction "Direct link to Introduction")

The Playwright VS Code extension brings the power of Playwright Test directly into your editor, allowing you to run, debug, and generate tests with a seamless UI-driven experience. This guide will walk you through setting up the extension and using its core features to supercharge your end-to-end testing workflow.

## Prerequisites[​](#prerequisites "Direct link to Prerequisites")

Before you begin, make sure you have the following installed:

-   [Node.js](https://nodejs.org/) (LTS version recommended)
-   [Visual Studio Code](https://code.visualstudio.com/)

## Getting Started[​](#getting-started "Direct link to Getting Started")

### Installation & Setup[​](#installation--setup "Direct link to Installation & Setup")

1.  **Install the Extension**: Open the Extensions view in VS Code (`Ctrl+Shift+X` or `Cmd+Shift+X`) and search for "Playwright". [Install the official extension from Microsoft](https://marketplace.visualstudio.com/items?itemName=ms-playwright.playwright).

![install playwright extension](/assets/images/vscode-extension-ce873e1c0d856b8c255e9de0781eb8d9.png)

1.  **Install Playwright**: Once the extension is installed, open the Command Palette (`Ctrl+Shift+P` or `Cmd+Shift+P`) and run the **Test: Install Playwright** command.

![install playwright](/assets/images/install-playwright-f211fc1079a8b3a01bcbd28e711c4eec.png)

3.  **Select Browsers**: Choose the browsers you want for your tests (e.g., Chromium, Firefox, WebKit). You can also add a GitHub Actions workflow to run tests in CI. These settings can be changed later in your `playwright.config.ts` file.

![install browsers](/assets/images/install-browsers-f8158381ce036e1299547aed66a4ccf0.png)

### Opening the Testing Sidebar[​](#opening-the-testing-sidebar "Direct link to Opening the Testing Sidebar")

Click the **Testing icon** in the VS Code Activity Bar to open the Test Explorer. Here, you'll find your tests, as well as the Playwright sidebar for managing projects, tools, and settings.

![Testing Sidebar](/assets/images/testing-sidebar-25b968f725bc3c175a12a4aa8b662c81.png)

## Core Features[​](#core-features "Direct link to Core Features")

### Running Your Tests[​](#running-your-tests "Direct link to Running Your Tests")

-   **Run a Single Test**: Click the green "play" icon next to any test to run it. The play button will change to a green checkmark if the test passes or a red X if the test fails. You'll be able to see how long the test took to run displayed next to the test name. Additionally, the Test Results panel will automatically open at the bottom of VS Code, showing a summary of the test execution including how many tests ran, how many passed, failed, or were skipped, along with the total execution time.

![run a single test](/assets/images/run-single-test-a2c8b8cee4b02a198e11fcc0db4503a8.png)

-   **Run All Tests**: You can run all tests at different levels. Click the play icon next to a specific test file to run all tests within that file, or click the play icon at the very top of the Test Explorer to run all tests across your entire project.

![run all tests](/assets/images/run-all-tests-e16ffc6a8477c16b38b84dea676d671b.png)

-   **Run on Multiple Browsers**: In the Playwright sidebar, check the boxes for the projects (browsers) you want to test against. Projects in Playwright represent different browser configurations - each project typically corresponds to a specific browser (like Chromium, Firefox, or WebKit) with its own settings such as viewport size, device emulation, or other browser-specific options. When you run a test, it will execute across all selected projects, allowing you to verify your application works consistently across different browsers and configurations.

![Selecting projects to run tests on](/assets/images/select-projects-a66b52a5cc75100faef51e14e495d460.png)

-   **Show Browser**: To watch your tests execute in a live browser window, enable the **Show Browser** option in the sidebar. Disable it to run in headless mode (where tests run in the background without opening a visible browser window).

![show browsers while running tests](/assets/images/show-browser-b091435ade8f511a64a9f75c54b52f43.png)

### Debugging Your Tests[​](#debugging-your-tests "Direct link to Debugging Your Tests")

The VS Code extension provides powerful debugging tools to help you identify and fix issues in your tests. You can set breakpoints, inspect variables, view detailed error messages, get AI-powered suggestions to resolve test failures, and use the comprehensive trace viewer to analyze test execution step-by-step.

-   **Using Breakpoints**: Set a breakpoint by clicking in the gutter next to a line number. Right-click the test and select **Debug Test**. The test will pause at your breakpoint, allowing you to inspect variables and step through the code.

![setting debug mode](/assets/images/debug-mode-e145cba936d960900fc79b646016a9ba.png)

-   **Live Debugging**: With **Show Browsers** enabled, click on a locator in your code. Playwright will highlight the corresponding element in the browser, making it easy to verify locators.

![live debugging in vs code](/assets/images/live-debugging-73579e1b53e40d1e0169fd2254e4336a.png)

-   **Viewing Error Messages**: If a test fails, the extension displays detailed error messages, including the expected vs. received values and a full call log, directly in the editor.

![error messaging in vs code](/assets/images/error-messaging-74058e7f1bc8b8f8b477b726fa623493.png)

-   **Fix with AI**: When a test fails, click the sparkle icon next to the error to get an AI-powered fix suggestion from Copilot. Copilot analyzes the error and suggests a code change to resolve the issue.

![fix with ai in vs code](/assets/images/fix-with-ai-011728a352c48c0083ac472fe739815d.png)

-   **Debugging with Trace Viewer**: For comprehensive debugging, enable the **Show Trace Viewer** option in the Playwright sidebar. When your test finishes, a detailed trace will automatically open, providing you with a complete timeline of your test execution. The trace viewer is particularly useful for:
-   **Step-by-step analysis**: Navigate through each action your test performed with precise timestamps
-   **DOM inspection**: View DOM snapshots at any point during test execution to see exactly what the page looked like
-   **Network monitoring**: Examine all network requests and responses that occurred during the test
-   **Console logs**: Access all console messages and errors from the browser
-   **Source mapping**: Jump directly to the source code that executed each action
-   **Visual debugging**: See screenshots and understand what the user would have seen at each step

The trace viewer is especially valuable when debugging flaky tests or understanding complex user interactions.

![trace viewer debugging](/assets/images/trace-viewer-debug-1386da3466791b55394091f252ec2ca9.png)

To learn more, see our [Trace Viewer guide](/docs/trace-viewer).

### Generating Tests with CodeGen[​](#generating-tests-with-codegen "Direct link to Generating Tests with CodeGen")

CodeGen is Playwright's powerful test generation tool that automatically creates test code by recording your interactions with a web page. Instead of writing tests from scratch, you can simply navigate through your application while CodeGen captures your actions and converts them into reliable test code with proper locators and assertions.

-   **Record a New Test**: Click **Record new** in the sidebar. A browser window will open. As you interact with the page, Playwright will automatically generate the test code. You can also generate assertions from the recording toolbar.

![record a new test](/assets/images/record-new-test-cafcc94d48bf8ee82af0bc4e90a100ef.png)

-   **Record at Cursor**: Place your cursor inside an existing test and click **Record at cursor** to add new actions at that specific point. ![record at cursor](/assets/images/record-at-cursor-cc902be640e0c7789eee76efa37fbb53.png)
-   **Pick a Locator**: Use the **Pick locator** tool to click on any element in the opened browser. Playwright will determine the best locator and copy it to your clipboard, ready to be pasted into your code.

![pick locators](/assets/images/pick-locator-21752d14dc07a83f5fb1bd67b6c0e0c0.png)

To learn more, see our [CodeGen guide](/docs/codegen).

## Advanced Features[​](#advanced-features "Direct link to Advanced Features")

### Project Dependencies[​](#project-dependencies "Direct link to Project Dependencies")

Use [project dependencies](/docs/test-projects) to define setup tests that run before other tests. For example, you can create a login test that runs first, then reuse that authenticated state across multiple tests without having to log in again for each test. In VS Code, you can see these setup tests in the Test Explorer and run them independently when needed.

![setup tests in vscode](/assets/images/setup-tests-8c128d60e165d9cbf13e0bdd3eb5c411.png)

To learn more, see our [Project Dependencies guide](/docs/test-projects).

### Global Setup[​](#global-setup "Direct link to Global Setup")

For tasks that need to run only once before all tests (like seeding a database), use **Global Setup**. You can trigger the global setup and teardown manually from the Playwright sidebar.

![running global setup](/assets/images/global-setup-c169662b46ac06131aa560fdf11e4deb.png)

### Multiple Configurations[​](#multiple-configurations "Direct link to Multiple Configurations")

If you have multiple `playwright.config.ts` files, you can switch between them using the gear icon in the Playwright sidebar. This allows you to easily work with different test suites or environments.

![Selecting a configuration file](/assets/images/selecting-configuration-8f3a095d5f89449532d3cc0276c29ba7.png)

## Quick Reference[​](#quick-reference "Direct link to Quick Reference")

Action

How to do it in VS Code

**Install Playwright**

Command Palette → `Test: Install Playwright`

**Run a Test**

Click the "play" icon next to the test

**Debug a Test**

Set a breakpoint, right-click the test → `Debug Test`

**Show Live Browser**

Enable `Show Browsers` in the Playwright sidebar

**Record a New Test**

Click `Record new` in the Playwright sidebar

**Pick a Locator**

Click `Pick locator` in the Playwright sidebar

**View Test Trace**

Enable `Show Trace Viewer` in the Playwright sidebar

## What's Next[​](#whats-next "Direct link to What's Next")

-   [Write tests using web-first assertions, page fixtures, and locators](/docs/writing-tests)
-   [Run your tests on CI](/docs/ci-intro)
-   [Learn more about the Trace Viewer](/docs/trace-viewer)
