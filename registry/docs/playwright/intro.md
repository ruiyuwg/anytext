On this page

## Introduction[​](#introduction "Direct link to Introduction")

Playwright Test is an end-to-end test framework for modern web apps. It bundles test runner, assertions, isolation, parallelization and rich tooling. Playwright supports Chromium, WebKit and Firefox on Windows, Linux and macOS, locally or in CI, headless or headed, with native mobile emulation for Chrome (Android) and Mobile Safari.

**You will learn**

-   [How to install Playwright](/docs/intro#installing-playwright)
-   [What's installed](/docs/intro#whats-installed)
-   [How to run the example test](/docs/intro#running-the-example-test)
-   [How to open the HTML test report](/docs/intro#html-test-reports)

## Installing Playwright[​](#installing-playwright "Direct link to Installing Playwright")

Get started by installing Playwright using one of the following methods.

### Using npm, yarn or pnpm[​](#using-npm-yarn-or-pnpm "Direct link to Using npm, yarn or pnpm")

The command below either initializes a new project or adds Playwright to an existing one.

-   npm
-   yarn
-   pnpm

```
npm init playwright@latest
```

```
yarn create playwright
```

```
pnpm create playwright
```

When prompted, choose / confirm:

-   TypeScript or JavaScript (default: TypeScript)
-   Tests folder name (default: `tests`, or `e2e` if `tests` already exists)
-   Add a GitHub Actions workflow (recommended for CI)
-   Install Playwright browsers (default: yes)

You can re-run the command later; it does not overwrite existing tests.

### Using the VS Code Extension[​](#using-the-vs-code-extension "Direct link to Using the VS Code Extension")

You can also create and run tests with the [VS Code Extension](/docs/getting-started-vscode).

## What's Installed[​](#whats-installed "Direct link to What's Installed")

Playwright downloads required browser binaries and creates the scaffold below.

```
playwright.config.ts         # Test configurationpackage.jsonpackage-lock.json            # Or yarn.lock / pnpm-lock.yamltests/  example.spec.ts            # Minimal example test
```

The [playwright.config](/docs/test-configuration) centralizes configuration: target browsers, timeouts, retries, projects, reporters and more. In existing projects dependencies are added to your current `package.json`.

`tests/` contains a minimal starter test.

## Running the Example Test[​](#running-the-example-test "Direct link to Running the Example Test")

By default tests run headless in parallel across Chromium, Firefox and WebKit (configurable in [playwright.config](/docs/test-configuration)). Output and aggregated results display in the terminal.

-   npm
-   yarn
-   pnpm

```
npx playwright test
```

```
yarn playwright test
```

```
pnpm exec playwright test
```

![tests running in command line](/assets/images/run-tests-cli-6e7e3119a14239c9021b406d7109dc44.png)

Tips:

-   See the browser window: add `--headed`.
-   Run a single project/browser: `--project=chromium`.
-   Run one file: `npx playwright test tests/example.spec.ts`.
-   Open testing UI: `--ui`.

See [Running Tests](/docs/running-tests) for details on filtering, headed mode, sharding and retries.

## HTML Test Reports[​](#html-test-reports "Direct link to HTML Test Reports")

After a test run, the [HTML Reporter](/docs/test-reporters#html-reporter) provides a dashboard filterable by the browser, passed, failed, skipped, flaky and more. Click a test to inspect errors, attachments and steps. It auto-opens only when failures occur; open manually with the command below.

-   npm
-   yarn
-   pnpm

```
npx playwright show-report
```

```
yarn playwright show-report
```

```
pnpm exec playwright show-report
```

![HTML Report](/assets/images/html-report-basic-8a88e44830660bfd1da1d17a7241f035.png)

## Running the Example Test in UI Mode[​](#running-the-example-test-in-ui-mode "Direct link to Running the Example Test in UI Mode")

Run tests with [UI Mode](/docs/test-ui-mode) for watch mode, live step view, time travel debugging and more.

-   npm
-   yarn
-   pnpm

```
npx playwright test --ui
```

```
yarn playwright test --ui
```

```
pnpm exec playwright test --ui
```

![UI Mode](/assets/images/ui-mode-1958baf0398aef5e9c9b5c68c5d56f2d.png)

See the [detailed guide on UI Mode](/docs/test-ui-mode) for watch filters, step details and trace integration.

## Updating Playwright[​](#updating-playwright "Direct link to Updating Playwright")

Update Playwright and download new browser binaries and their dependencies:

-   npm
-   yarn
-   pnpm

```
npm install -D @playwright/test@latestnpx playwright install --with-deps
```

```
yarn add --dev @playwright/test@latestyarn playwright install --with-deps
```

```
pnpm install --save-dev @playwright/test@latestpnpm exec playwright install --with-deps
```

Check your installed version:

-   npm
-   yarn
-   pnpm

```
npx playwright --version
```

```
yarn playwright --version
```

```
pnpm exec playwright --version
```

## System requirements[​](#system-requirements "Direct link to System requirements")

-   Node.js: latest 20.x, 22.x or 24.x.
-   Windows 11+, Windows Server 2019+ or Windows Subsystem for Linux (WSL).
-   macOS 14 (Ventura) or later.
-   Debian 12 / 13, Ubuntu 22.04 / 24.04 (x86-64 or arm64).

## What's next[​](#whats-next "Direct link to What's next")

-   [Write tests using web-first assertions, fixtures and locators](/docs/writing-tests)
-   [Run single or multiple tests; headed mode](/docs/running-tests)
-   [Generate tests with Codegen](/docs/codegen-intro)
-   [View a trace of your tests](/docs/trace-viewer-intro)
