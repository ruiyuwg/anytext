On this page

## Version 1.58[​](#version-158 "Direct link to Version 1.58")

### Timeline[​](#timeline "Direct link to Timeline")

If you're using [merged reports](/docs/test-sharding#merging-reports-from-multiple-environments), the HTML report Speedboard tab now shows the Timeline:

![Timeline chart in the HTML report](/assets/images/timeline-c64690807d029b6c866269c319aa5b7b.png)

### UI Mode and Trace Viewer Improvements[​](#ui-mode-and-trace-viewer-improvements "Direct link to UI Mode and Trace Viewer Improvements")

-   New 'system' theme option follows your OS dark/light mode preference
-   Search functionality (Cmd/Ctrl+F) is now available in code editors
-   Network details panel has been reorganized for better usability
-   JSON responses are now automatically formatted for readability

Thanks to [@cpAdm](https://github.com/cpAdm) for contributing these improvements!

### Miscellaneous[​](#miscellaneous "Direct link to Miscellaneous")

[browserType.connectOverCDP()](/docs/api/class-browsertype#browser-type-connect-over-cdp) now accepts an `isLocal` option. When set to `true`, it tells Playwright that it runs on the same host as the CDP server, enabling file system optimizations.

### Breaking Changes ⚠️[​](#breaking-changes-️ "Direct link to Breaking Changes ⚠️")

-   Removed `_react` and `_vue` selectors. See [locators guide](/docs/locators) for alternatives.
-   Removed `:light` selector engine suffix. Use standard CSS selectors instead.
-   Option `devtools` from [browserType.launch()](/docs/api/class-browsertype#browser-type-launch) has been removed. Use `args: ['--auto-open-devtools-for-tabs']` instead.
-   Removed macOS 13 support for WebKit. We recommend to upgrade your macOS version, or keep using an older Playwright version.

### Browser Versions[​](#browser-versions "Direct link to Browser Versions")

-   Chromium 145.0.7632.6
-   Mozilla Firefox 146.0.1
-   WebKit 26.0

This version was also tested against the following stable channels:

-   Google Chrome 144
-   Microsoft Edge 144

## Version 1.57[​](#version-157 "Direct link to Version 1.57")

### Speedboard[​](#speedboard "Direct link to Speedboard")

In HTML reporter, there's a new tab we call "Speedboard":

![Speedboard](/assets/images/speedboard-a8fe4e48388f4075fdd70e83d2b53e7a.png)

It shows you all your executed tests sorted by slowness, and can help you understand where your test suite is taking longer than expected. Take a look at yours - maybe you'll find some tests that are spending a longer time waiting than they should!

### Chrome for Testing[​](#chrome-for-testing "Direct link to Chrome for Testing")

Playwright now runs on [Chrome for Testing](https://googlechromelabs.github.io/chrome-for-testing/) builds rather than Chromium. Headed mode uses `chrome`; headless mode uses `chrome-headless-shell`. Existing tests should continue to pass after upgrading to v1.57.

We're expecting no functional changes to come from this switch. The biggest change is the new icon and title in your toolbar.

![new and old logo](/assets/images/cft-logo-change-e6c83cd629c1cf92a7856fe6e42ab80a.png)

If you still see an unexpected behaviour change, please [file an issue](https://github.com/microsoft/playwright/issues/new).

On Arm64 Linux, Playwright continues to use Chromium.

### Waiting for webserver output[​](#waiting-for-webserver-output "Direct link to Waiting for webserver output")

[testConfig.webServer](/docs/api/class-testconfig#test-config-web-server) added a `wait` field. Pass a regular expression, and Playwright will wait until the webserver logs match it.

```
import { defineConfig } from '@playwright/test';export default defineConfig({  webServer: {    command: 'npm run start',    wait: {      stdout: /Listening on port (?<my_server_port>\d+)/    },  },});
```

If you include a named capture group into the expression, then Playwright will provide the capture group contents via environment variables:

```
import { test, expect } from '@playwright/test';test.use({ baseURL: `http://localhost:${process.env.MY_SERVER_PORT ?? 3000}` });test('homepage', async ({ page }) => {  await page.goto('/');});
```

This is not just useful for capturing varying ports of dev servers. You can also use it to wait for readiness of a service that doesn't expose an HTTP readiness check, but instead prints a readiness message to stdout or stderr.

### Breaking Change[​](#breaking-change "Direct link to Breaking Change")

After 3 years of being deprecated, we removed `page.accessibility` from our API. Please use other libraries such as [Axe](https://www.deque.com/axe/) if you need to test page accessibility. See our Node.js [guide](https://playwright.dev/docs/accessibility-testing) for integration with Axe.

### New APIs[​](#new-apis "Direct link to New APIs")

-   New property [testConfig.tag](/docs/api/class-testconfig#test-config-tag) adds a tag to all tests in this run. This is useful when using [merge-reports](/docs/test-sharding#merging-reports-from-multiple-shards).
-   [worker.on('console')](/docs/api/class-worker#worker-event-console) event is emitted when JavaScript within the worker calls one of console API methods, e.g. console.log or console.dir. [worker.waitForEvent()](/docs/api/class-worker#worker-wait-for-event) can be used to wait for it.
-   [locator.description()](/docs/api/class-locator#locator-description) returns locator description previously set with [locator.describe()](/docs/api/class-locator#locator-describe), and [locator.toString()](/docs/api/class-locator#locator-to-string) now uses the description when available.
-   New option [steps](/docs/api/class-locator#locator-click-option-steps) in [locator.click()](/docs/api/class-locator#locator-click) and [locator.dragTo()](/docs/api/class-locator#locator-drag-to) that configures the number of `mousemove` events emitted while moving the mouse pointer to the target element.
-   Network requests issued by [Service Workers](/docs/service-workers#network-events-and-routing) are now reported and can be routed through the [BrowserContext](/docs/api/class-browsercontext), only in Chromium. You can opt out using the `PLAYWRIGHT_DISABLE_SERVICE_WORKER_NETWORK` environment variable.
-   Console messages from Service Workers are dispatched through [worker.on('console')](/docs/api/class-worker#worker-event-console). You can opt out of this using the `PLAYWRIGHT_DISABLE_SERVICE_WORKER_CONSOLE` environment variable.

### Browser Versions[​](#browser-versions-1 "Direct link to Browser Versions")

-   Chromium 143.0.7499.4
-   Mozilla Firefox 144.0.2
-   WebKit 26.0

## Version 1.56[​](#version-156 "Direct link to Version 1.56")

### Playwright Test Agents[​](#playwright-test-agents "Direct link to Playwright Test Agents")

Introducing Playwright Test Agents, three custom agent definitions designed to guide LLMs through the core process of building a Playwright test:

-   **🎭 planner** explores the app and produces a Markdown test plan
-   **🎭 generator** transforms the Markdown plan into the Playwright Test files
-   **🎭 healer** executes the test suite and automatically repairs failing tests

Run `npx playwright init-agents` with your client of choice to generate the latest agent definitions:

```
# Generate agent files for each agentic loop# Visual Studio Codenpx playwright init-agents --loop=vscode# Claude Codenpx playwright init-agents --loop=claude# opencodenpx playwright init-agents --loop=opencode
```

[Learn more about Playwright Test Agents](/docs/test-agents)

### New APIs[​](#new-apis-1 "Direct link to New APIs")

-   New methods [page.consoleMessages()](/docs/api/class-page#page-console-messages) and [page.pageErrors()](/docs/api/class-page#page-page-errors) for retrieving the most recent console messages from the page
-   New method [page.requests()](/docs/api/class-page#page-requests) for retrieving the most recent network requests from the page
-   Added [`--test-list` and `--test-list-invert`](/docs/test-cli#test-list) to allow manual specification of specific tests from a file

### UI Mode and HTML Reporter[​](#ui-mode-and-html-reporter "Direct link to UI Mode and HTML Reporter")

-   Added option to `'html'` reporter to disable the "Copy prompt" button
-   Added option to `'html'` reporter and UI Mode to merge files, collapsing test and describe blocks into a single unified list
-   Added option to UI Mode mirroring the `--update-snapshots` options
-   Added option to UI Mode to run only a single worker at a time

### Breaking Changes[​](#breaking-changes "Direct link to Breaking Changes")

-   Event [browserContext.on('backgroundpage')](/docs/api/class-browsercontext#browser-context-event-background-page) has been deprecated and will not be emitted. Method [browserContext.backgroundPages()](/docs/api/class-browsercontext#browser-context-background-pages) will return an empty list

### Miscellaneous[​](#miscellaneous-1 "Direct link to Miscellaneous")

-   Aria snapshots render and compare `input` `placeholder`
-   Added environment variable `PLAYWRIGHT_TEST` to Playwright worker processes to allow discriminating on testing status

### Browser Versions[​](#browser-versions-2 "Direct link to Browser Versions")

-   Chromium 141.0.7390.37
-   Mozilla Firefox 142.0.1
-   WebKit 26.0

## Version 1.55[​](#version-155 "Direct link to Version 1.55")

### New APIs[​](#new-apis-2 "Direct link to New APIs")

-   New Property [testStepInfo.titlePath](/docs/api/class-teststepinfo#test-step-info-title-path) Returns the full title path starting from the test file, including test and step titles.

### Codegen[​](#codegen "Direct link to Codegen")

-   Automatic `toBeVisible()` assertions: Codegen can now generate automatic `toBeVisible()` assertions for common UI interactions. This feature can be enabled in the Codegen settings UI.

### Breaking Changes[​](#breaking-changes-1 "Direct link to Breaking Changes")

-   ⚠️ Dropped support for Chromium extension manifest v2.

### Miscellaneous[​](#miscellaneous-2 "Direct link to Miscellaneous")

-   Added support for Debian 13 "Trixie".

### Browser Versions[​](#browser-versions-3 "Direct link to Browser Versions")

-   Chromium 140.0.7339.16
-   Mozilla Firefox 141.0
-   WebKit 26.0

This version was also tested against the following stable channels:

-   Google Chrome 139
-   Microsoft Edge 139

## Version 1.54[​](#version-154 "Direct link to Version 1.54")

### Highlights[​](#highlights "Direct link to Highlights")

-   New cookie property `partitionKey` in [browserContext.cookies()](/docs/api/class-browsercontext#browser-context-cookies) and [browserContext.addCookies()](/docs/api/class-browsercontext#browser-context-add-cookies). This property allows to save and restore partitioned cookies. See [CHIPS MDN article](https://developer.mozilla.org/en-US/docs/Web/Privacy/Guides/Privacy_sandbox/Partitioned_cookies) for more information. Note that browsers have different support and defaults for cookie partitioning.
    
-   New option `noSnippets` to disable code snippets in the html report.
    
    ```
    import { defineConfig } from '@playwright/test';export default defineConfig({  reporter: [['html', { noSnippets: true }]]});
    ```
    
-   New property `location` in test annotations, for example in [testResult.annotations](/docs/api/class-testresult#test-result-annotations) and [testInfo.annotations](/docs/api/class-testinfo#test-info-annotations). It shows where the annotation like `test.skip` or `test.fixme` was added.
    

### Command Line[​](#command-line "Direct link to Command Line")

-   New option `--user-data-dir` in multiple commands. You can specify the same user data dir to reuse browsing state, like authentication, between sessions.
    
    ```
    npx playwright codegen --user-data-dir=./user-data
    ```
    
-   Option `-gv` has been removed from the `npx playwright test` command. Use `--grep-invert` instead.
    
-   `npx playwright open` does not open the test recorder anymore. Use `npx playwright codegen` instead.
    

### Miscellaneous[​](#miscellaneous-3 "Direct link to Miscellaneous")

-   Support for Node.js 16 has been removed.
-   Support for Node.js 18 has been deprecated, and will be removed in the future.

### Browser Versions[​](#browser-versions-4 "Direct link to Browser Versions")

-   Chromium 139.0.7258.5
-   Mozilla Firefox 140.0.2
-   WebKit 26.0

This version was also tested against the following stable channels:

-   Google Chrome 140
-   Microsoft Edge 140

## Version 1.53[​](#version-153 "Direct link to Version 1.53")

### Trace Viewer and HTML Reporter Updates[​](#trace-viewer-and-html-reporter-updates "Direct link to Trace Viewer and HTML Reporter Updates")

-   New Steps in Trace Viewer and HTML reporter: ![New Trace Viewer Steps](https://github.com/user-attachments/assets/1963ff7d-4070-41be-a79b-4333176921a2)
    
-   New option in `'html'` reporter to set the title of a specific test run:
    
    ```
    import { defineConfig } from '@playwright/test';export default defineConfig({  reporter: [['html', { title: 'Custom test run #1028' }]]});
    ```
    

### Miscellaneous[​](#miscellaneous-4 "Direct link to Miscellaneous")

-   New option [kind](/docs/api/class-testinfo#test-info-snapshot-path-option-kind) in [testInfo.snapshotPath()](/docs/api/class-testinfo#test-info-snapshot-path) controls which snapshot path template is used.
    
-   New method [locator.describe()](/docs/api/class-locator#locator-describe) to describe a locator. Used for trace viewer and reports.
    
    ```
    const button = page.getByTestId('btn-sub').describe('Subscribe button');await button.click();
    ```
    
-   `npx playwright install --list` will now list all installed browsers, versions and locations.
    

### Browser Versions[​](#browser-versions-5 "Direct link to Browser Versions")

-   Chromium 138.0.7204.4
-   Mozilla Firefox 139.0
-   WebKit 18.5

This version was also tested against the following stable channels:

-   Google Chrome 137
-   Microsoft Edge 137

## Version 1.52[​](#version-152 "Direct link to Version 1.52")

### Highlights[​](#highlights-1 "Direct link to Highlights")

-   New method [expect(locator).toContainClass()](/docs/api/class-locatorassertions#locator-assertions-to-contain-class) to ergonomically assert individual class names on the element.
    
    ```
    await expect(page.getByRole('listitem', { name: 'Ship v1.52' })).toContainClass('done');
    ```
    
-   [Aria Snapshots](/docs/aria-snapshots) got two new properties: [`/children`](/docs/aria-snapshots#strict-matching) for strict matching and `/url` for links.
    
    ```
    await expect(locator).toMatchAriaSnapshot(`  - list    - /children: equal    - listitem: Feature A    - listitem:      - link "Feature B":        - /url: "https://playwright.dev"`);
    ```
    

### Test Runner[​](#test-runner "Direct link to Test Runner")

-   New property [testProject.workers](/docs/api/class-testproject#test-project-workers) allows to specify the number of concurrent worker processes to use for a test project. The global limit of property [testConfig.workers](/docs/api/class-testconfig#test-config-workers) still applies.
-   New [testConfig.failOnFlakyTests](/docs/api/class-testconfig#test-config-fail-on-flaky-tests) option to fail the test run if any flaky tests are detected, similarly to `--fail-on-flaky-tests`. This is useful for CI/CD environments where you want to ensure that all tests are stable before deploying.
-   New property [testResult.annotations](/docs/api/class-testresult#test-result-annotations) contains annotations for each test retry.

### Miscellaneous[​](#miscellaneous-5 "Direct link to Miscellaneous")

-   New option [maxRedirects](/docs/api/class-apirequest#api-request-new-context-option-max-redirects) in [apiRequest.newContext()](/docs/api/class-apirequest#api-request-new-context) to control the maximum number of redirects.
-   HTML reporter now supports _NOT filtering_ via `!@my-tag` or `!my-file.spec.ts` or `!p:my-project`.

### Breaking Changes[​](#breaking-changes-2 "Direct link to Breaking Changes")

-   Glob URL patterns in methods like [page.route()](/docs/api/class-page#page-route) do not support `?` and `[]` anymore. We recommend using regular expressions instead.
-   Method [route.continue()](/docs/api/class-route#route-continue) does not allow to override the `Cookie` header anymore. If a `Cookie` header is provided, it will be ignored, and the cookie will be loaded from the browser's cookie store. To set custom cookies, use [browserContext.addCookies()](/docs/api/class-browsercontext#browser-context-add-cookies).
-   macOS 13 is now deprecated and will no longer receive WebKit updates. Please upgrade to a more recent macOS version to continue benefiting from the latest WebKit improvements.

### Browser Versions[​](#browser-versions-6 "Direct link to Browser Versions")

-   Chromium 136.0.7103.25
-   Mozilla Firefox 137.0
-   WebKit 18.4

This version was also tested against the following stable channels:

-   Google Chrome 135
-   Microsoft Edge 135

## Version 1.51[​](#version-151 "Direct link to Version 1.51")

### StorageState for indexedDB[​](#storagestate-for-indexeddb "Direct link to StorageState for indexedDB")

-   New option [indexedDB](/docs/api/class-browsercontext#browser-context-storage-state-option-indexed-db) for [browserContext.storageState()](/docs/api/class-browsercontext#browser-context-storage-state) allows to save and restore IndexedDB contents. Useful when your application uses [IndexedDB API](https://developer.mozilla.org/en-US/docs/Web/API/IndexedDB_API) to store authentication tokens, like Firebase Authentication.
    
    Here is an example following the [authentication guide](/docs/auth#basic-shared-account-in-all-tests):
    
    tests/auth.setup.ts
    
    ```
    import { test as setup, expect } from '@playwright/test';import path from 'path';const authFile = path.join(__dirname, '../playwright/.auth/user.json');setup('authenticate', async ({ page }) => {  await page.goto('/');  // ... perform authentication steps ...  // make sure to save indexedDB  await page.context().storageState({ path: authFile, indexedDB: true });});
    ```
    

### Copy as prompt[​](#copy-as-prompt "Direct link to Copy as prompt")

New "Copy prompt" button on errors in the HTML report, trace viewer and UI mode. Click to copy a pre-filled LLM prompt that contains the error message and useful context for fixing the error.

![Copy prompt](https://github.com/user-attachments/assets/f3654407-dd6d-4240-9845-0d96df2bf30a)

### Filter visible elements[​](#filter-visible-elements "Direct link to Filter visible elements")

New option [visible](/docs/api/class-locator#locator-filter-option-visible) for [locator.filter()](/docs/api/class-locator#locator-filter) allows matching only visible elements.

example.spec.ts

```
test('some test', async ({ page }) => {  // Ignore invisible todo items.  const todoItems = page.getByTestId('todo-item').filter({ visible: true });  // Check there are exactly 3 visible ones.  await expect(todoItems).toHaveCount(3);});
```

### Git information in HTML report[​](#git-information-in-html-report "Direct link to Git information in HTML report")

Set option [testConfig.captureGitInfo](/docs/api/class-testconfig#test-config-capture-git-info) to capture git information into [testConfig.metadata](/docs/api/class-testconfig#test-config-metadata).

playwright.config.ts

```
import { defineConfig } from '@playwright/test';export default defineConfig({  captureGitInfo: { commit: true, diff: true }});
```

HTML report will show this information when available:

![Git information in the report](https://github.com/user-attachments/assets/f5b3f6f4-aa08-4a24-816c-7edf33ef0c37)

### Test Step improvements[​](#test-step-improvements "Direct link to Test Step improvements")

A new [TestStepInfo](/docs/api/class-teststepinfo "TestStepInfo") object is now available in test steps. You can add step attachments or skip the step under some conditions.

```
test('some test', async ({ page, isMobile }) => {  // Note the new "step" argument:  await test.step('here is my step', async step => {    step.skip(isMobile, 'not relevant on mobile layouts');    // ...    await step.attach('my attachment', { body: 'some text' });    // ...  });});
```

### Miscellaneous[​](#miscellaneous-6 "Direct link to Miscellaneous")

-   New option `contrast` for methods [page.emulateMedia()](/docs/api/class-page#page-emulate-media) and [browser.newContext()](/docs/api/class-browser#browser-new-context) allows to emulate the `prefers-contrast` media feature.
-   New option [failOnStatusCode](/docs/api/class-apirequest#api-request-new-context-option-fail-on-status-code) makes all fetch requests made through the [APIRequestContext](/docs/api/class-apirequestcontext "APIRequestContext") throw on response codes other than 2xx and 3xx.
-   Assertion [expect(page).toHaveURL()](/docs/api/class-pageassertions#page-assertions-to-have-url) now supports a predicate.

### Browser Versions[​](#browser-versions-7 "Direct link to Browser Versions")

-   Chromium 134.0.6998.35
-   Mozilla Firefox 135.0
-   WebKit 18.4

This version was also tested against the following stable channels:

-   Google Chrome 133
-   Microsoft Edge 133

## Version 1.50[​](#version-150 "Direct link to Version 1.50")

### Test runner[​](#test-runner-1 "Direct link to Test runner")

-   New option [timeout](/docs/api/class-test#test-step-option-timeout) allows specifying a maximum run time for an individual test step. A timed-out step will fail the execution of the test.
    
    ```
    test('some test', async ({ page }) => {  await test.step('a step', async () => {    // This step can time out separately from the test  }, { timeout: 1000 });});
    ```
    
-   New method [test.step.skip()](/docs/api/class-test#test-step-skip) to disable execution of a test step.
    
    ```
    test('some test', async ({ page }) => {  await test.step('before running step', async () => {    // Normal step  });  await test.step.skip('not yet ready', async () => {    // This step is skipped  });  await test.step('after running step', async () => {    // This step still runs even though the previous one was skipped  });});
    ```
    
-   Expanded [expect(locator).toMatchAriaSnapshot()](/docs/api/class-locatorassertions#locator-assertions-to-match-aria-snapshot-2) to allow storing of aria snapshots in separate YAML files.
    
-   Added method [expect(locator).toHaveAccessibleErrorMessage()](/docs/api/class-locatorassertions#locator-assertions-to-have-accessible-error-message) to assert the Locator points to an element with a given [aria errormessage](https://w3c.github.io/aria/#aria-errormessage).
    
-   Option [testConfig.updateSnapshots](/docs/api/class-testconfig#test-config-update-snapshots) added the configuration enum `changed`. `changed` updates only the snapshots that have changed, whereas `all` now updates all snapshots, regardless of whether there are any differences.
    
-   New option [testConfig.updateSourceMethod](/docs/api/class-testconfig#test-config-update-source-method) defines the way source code is updated when [testConfig.updateSnapshots](/docs/api/class-testconfig#test-config-update-snapshots) is configured. Added `overwrite` and `3-way` modes that write the changes into source code, on top of existing `patch` mode that creates a patch file.
    
    ```
    npx playwright test --update-snapshots=changed --update-source-method=3way
    ```
    
-   Option [testConfig.webServer](/docs/api/class-testconfig#test-config-web-server) added a `gracefulShutdown` field for specifying a process kill signal other than the default `SIGKILL`.
    
-   Exposed [testStep.attachments](/docs/api/class-teststep#test-step-attachments) from the reporter API to allow retrieval of all attachments created by that step.
    
-   New option `pathTemplate` for `toHaveScreenshot` and `toMatchAriaSnapshot` assertions in the [testConfig.expect](/docs/api/class-testconfig#test-config-expect) configuration.
    

### UI updates[​](#ui-updates "Direct link to UI updates")

-   Updated default HTML reporter to improve display of attachments.
-   New button in Codegen for picking elements to produce aria snapshots.
-   Additional details (such as keys pressed) are now displayed alongside action API calls in traces.
-   Display of `canvas` content in traces is error-prone. Display is now disabled by default, and can be enabled via the `Display canvas content` UI setting.
-   `Call` and `Network` panels now display additional time information.

### Breaking[​](#breaking "Direct link to Breaking")

-   [expect(locator).toBeEditable()](/docs/api/class-locatorassertions#locator-assertions-to-be-editable) and [locator.isEditable()](/docs/api/class-locator#locator-is-editable) now throw if the target element is not `<input>`, `<select>`, or a number of other editable elements.
-   Option [testConfig.updateSnapshots](/docs/api/class-testconfig#test-config-update-snapshots) now updates all snapshots when set to `all`, rather than only the failed/changed snapshots. Use the new enum `changed` to keep the old functionality of only updating the changed snapshots.

### Browser Versions[​](#browser-versions-8 "Direct link to Browser Versions")

-   Chromium 133.0.6943.16
-   Mozilla Firefox 134.0
-   WebKit 18.2

This version was also tested against the following stable channels:

-   Google Chrome 132
-   Microsoft Edge 132

## Version 1.49[​](#version-149 "Direct link to Version 1.49")

### Aria snapshots[​](#aria-snapshots "Direct link to Aria snapshots")

New assertion [expect(locator).toMatchAriaSnapshot()](/docs/api/class-locatorassertions#locator-assertions-to-match-aria-snapshot) verifies page structure by comparing to an expected accessibility tree, represented as YAML.

```
await page.goto('https://playwright.dev');await expect(page.locator('body')).toMatchAriaSnapshot(`  - banner:    - heading /Playwright enables reliable/ [level=1]    - link "Get started"    - link "Star microsoft/playwright on GitHub"  - main:    - img "Browsers (Chromium, Firefox, WebKit)"    - heading "Any browser • Any platform • One API"`);
```

You can generate this assertion with [Test Generator](/docs/codegen) and update the expected snapshot with `--update-snapshots` command line flag.

Learn more in the [aria snapshots guide](/docs/aria-snapshots).

### Test runner[​](#test-runner-2 "Direct link to Test runner")

-   New option [testConfig.tsconfig](/docs/api/class-testconfig#test-config-tsconfig) allows to specify a single `tsconfig` to be used for all tests.
-   New method [test.fail.only()](/docs/api/class-test#test-fail-only) to focus on a failing test.
-   Options [testConfig.globalSetup](/docs/api/class-testconfig#test-config-global-setup) and [testConfig.globalTeardown](/docs/api/class-testconfig#test-config-global-teardown) now support multiple setups/teardowns.
-   New value `'on-first-failure'` for [testOptions.screenshot](/docs/api/class-testoptions#test-options-screenshot).
-   Added "previous" and "next" buttons to the HTML report to quickly switch between test cases.
-   New properties [testInfoError.cause](/docs/api/class-testinfoerror#test-info-error-cause) and [testError.cause](/docs/api/class-testerror#test-error-cause) mirroring [`Error.cause`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Error/cause).

### Breaking: `chrome` and `msedge` channels switch to new headless mode[​](#breaking-chrome-and-msedge-channels-switch-to-new-headless-mode "Direct link to breaking-chrome-and-msedge-channels-switch-to-new-headless-mode")

This change affects you if you're using one of the following channels in your `playwright.config.ts`:

-   `chrome`, `chrome-dev`, `chrome-beta`, or `chrome-canary`
-   `msedge`, `msedge-dev`, `msedge-beta`, or `msedge-canary`

#### What do I need to do?[​](#what-do-i-need-to-do "Direct link to What do I need to do?")

After updating to Playwright v1.49, run your test suite. If it still passes, you're good to go. If not, you will probably need to update your snapshots, and adapt some of your test code around PDF viewers and extensions. See [issue #33566](https://github.com/microsoft/playwright/issues/33566) for more details.

### Other breaking changes[​](#other-breaking-changes "Direct link to Other breaking changes")

-   There will be no more updates for WebKit on Ubuntu 20.04 and Debian 11. We recommend updating your OS to a later version.
-   Package `@playwright/experimental-ct-vue2` will no longer be updated.
-   Package `@playwright/experimental-ct-solid` will no longer be updated.

### Try new Chromium headless[​](#try-new-chromium-headless "Direct link to Try new Chromium headless")

You can opt into the new headless mode by using `'chromium'` channel. As [official Chrome documentation puts it](https://developer.chrome.com/blog/chrome-headless-shell):

> New Headless on the other hand is the real Chrome browser, and is thus more authentic, reliable, and offers more features. This makes it more suitable for high-accuracy end-to-end web app testing or browser extension testing.

See [issue #33566](https://github.com/microsoft/playwright/issues/33566) for the list of possible breakages you could encounter and more details on Chromium headless. Please file an issue if you see any problems after opting in.

```
import { defineConfig, devices } from '@playwright/test';export default defineConfig({  projects: [    {      name: 'chromium',      use: { ...devices['Desktop Chrome'], channel: 'chromium' },    },  ],});
```

### Miscellaneous[​](#miscellaneous-7 "Direct link to Miscellaneous")

-   `<canvas>` elements inside a snapshot now draw a preview.
-   New method [tracing.group()](/docs/api/class-tracing#tracing-group) to visually group actions in the trace.
-   Playwright docker images switched from Node.js v20 to Node.js v22 LTS.

### Browser Versions[​](#browser-versions-9 "Direct link to Browser Versions")

-   Chromium 131.0.6778.33
-   Mozilla Firefox 132.0
-   WebKit 18.2

This version was also tested against the following stable channels:

-   Google Chrome 130
-   Microsoft Edge 130

## Version 1.48[​](#version-148 "Direct link to Version 1.48")

### WebSocket routing[​](#websocket-routing "Direct link to WebSocket routing")

New methods [page.routeWebSocket()](/docs/api/class-page#page-route-web-socket) and [browserContext.routeWebSocket()](/docs/api/class-browsercontext#browser-context-route-web-socket) allow to intercept, modify and mock WebSocket connections initiated in the page. Below is a simple example that mocks WebSocket communication by responding to a `"request"` with a `"response"`.

```
await page.routeWebSocket('/ws', ws => {  ws.onMessage(message => {    if (message === 'request')      ws.send('response');  });});
```

See [WebSocketRoute](/docs/api/class-websocketroute "WebSocketRoute") for more details.

### UI updates[​](#ui-updates-1 "Direct link to UI updates")

-   New "copy" buttons for annotations and test location in the HTML report.
-   Route method calls like [route.fulfill()](/docs/api/class-route#route-fulfill) are not shown in the report and trace viewer anymore. You can see which network requests were routed in the network tab instead.
-   New "Copy as cURL" and "Copy as fetch" buttons for requests in the network tab.

### Miscellaneous[​](#miscellaneous-8 "Direct link to Miscellaneous")

-   Option [form](/docs/api/class-apirequestcontext#api-request-context-fetch-option-form) and similar ones now accept [FormData](https://developer.mozilla.org/en-US/docs/Web/API/FormData).
-   New method [page.requestGC()](/docs/api/class-page#page-request-gc) may help detect memory leaks.
-   New option [location](/docs/api/class-test#test-step-option-location) to pass custom step location.
-   Requests made by [APIRequestContext](/docs/api/class-apirequestcontext "APIRequestContext") now record detailed timing and security information in the HAR.

### Browser Versions[​](#browser-versions-10 "Direct link to Browser Versions")

-   Chromium 130.0.6723.19
-   Mozilla Firefox 130.0
-   WebKit 18.0

This version was also tested against the following stable channels:

-   Google Chrome 129
-   Microsoft Edge 129

## Version 1.47[​](#version-147 "Direct link to Version 1.47")

### Network Tab improvements[​](#network-tab-improvements "Direct link to Network Tab improvements")

The Network tab in the UI mode and trace viewer has several nice improvements:

-   filtering by asset type and URL
-   better display of query string parameters
-   preview of font assets

![Network tab now has filters](https://github.com/user-attachments/assets/4bd1b67d-90bd-438b-a227-00b9e86872e2)

### `--tsconfig` CLI option[​](#--tsconfig-cli-option "Direct link to --tsconfig-cli-option")

By default, Playwright will look up the closest tsconfig for each imported file using a heuristic. You can now specify a single tsconfig file in the command line, and Playwright will use it for all imported files, not only test files:

```
# Pass a specific tsconfignpx playwright test --tsconfig tsconfig.test.json
```

### [APIRequestContext](/docs/api/class-apirequestcontext "APIRequestContext") now accepts [`URLSearchParams`](https://developer.mozilla.org/en-US/docs/Web/API/URLSearchParams) and `string` as query parameters[​](#apirequestcontext-now-accepts-urlsearchparams-and-string-as-query-parameters "Direct link to apirequestcontext-now-accepts-urlsearchparams-and-string-as-query-parameters")

You can now pass [`URLSearchParams`](https://developer.mozilla.org/en-US/docs/Web/API/URLSearchParams) and `string` as query parameters to [APIRequestContext](/docs/api/class-apirequestcontext "APIRequestContext"):

```
test('query params', async ({ request }) => {  const searchParams = new URLSearchParams();  searchParams.set('userId', 1);  const response = await request.get(      'https://jsonplaceholder.typicode.com/posts',      {        params: searchParams // or as a string: 'userId=1'      }  );  // ...});
```

### Miscellaneous[​](#miscellaneous-9 "Direct link to Miscellaneous")

-   The `mcr.microsoft.com/playwright:v1.47.0` now serves a Playwright image based on Ubuntu 24.04 Noble. To use the 22.04 jammy-based image, please use `mcr.microsoft.com/playwright:v1.47.0-jammy` instead.
-   New options [behavior](/docs/api/class-page#page-remove-all-listeners-option-behavior), [behavior](/docs/api/class-browser#browser-remove-all-listeners-option-behavior) and [behavior](/docs/api/class-browsercontext#browser-context-remove-all-listeners-option-behavior) to wait for ongoing listeners to complete.
-   TLS client certificates can now be passed from memory by passing [clientCertificates.cert](/docs/api/class-browser#browser-new-context-option-client-certificates) and [clientCertificates.key](/docs/api/class-browser#browser-new-context-option-client-certificates) as buffers instead of file paths.
-   Attachments with a `text/html` content type can now be opened in a new tab in the HTML report. This is useful for including third-party reports or other HTML content in the Playwright test report and distributing it to your team.
-   [noWaitAfter](/docs/api/class-locator#locator-select-option-option-no-wait-after) option in [locator.selectOption()](/docs/api/class-locator#locator-select-option) was deprecated.
-   We've seen reports of WebGL in Webkit misbehaving on GitHub Actions `macos-13`. We recommend upgrading GitHub Actions to `macos-14`.

### Browser Versions[​](#browser-versions-11 "Direct link to Browser Versions")

-   Chromium 129.0.6668.29
-   Mozilla Firefox 130.0
-   WebKit 18.0

This version was also tested against the following stable channels:

-   Google Chrome 128
-   Microsoft Edge 128

## Version 1.46[​](#version-146 "Direct link to Version 1.46")

### TLS Client Certificates[​](#tls-client-certificates "Direct link to TLS Client Certificates")

Playwright now allows you to supply client-side certificates, so that server can verify them, as specified by TLS Client Authentication.

The following snippet sets up a client certificate for `https://example.com`:

```
import { defineConfig } from '@playwright/test';export default defineConfig({  // ...  use: {    clientCertificates: [{      origin: 'https://example.com',      certPath: './cert.pem',      keyPath: './key.pem',      passphrase: 'mysecretpassword',    }],  },  // ...});
```

You can also provide client certificates to a particular [test project](/docs/api/class-testproject#test-project-use) or as a parameter of [browser.newContext()](/docs/api/class-browser#browser-new-context) and [apiRequest.newContext()](/docs/api/class-apirequest#api-request-new-context).

### `--only-changed` cli option[​](#--only-changed-cli-option "Direct link to --only-changed-cli-option")

New CLI option `--only-changed` will only run test files that have been changed since the last git commit or from a specific git "ref". This will also run all test files that import any changed files.

```
# Only run test files with uncommitted changesnpx playwright test --only-changed# Only run test files changed relative to the "main" branchnpx playwright test --only-changed=main
```

### Component Testing: New `router` fixture[​](#component-testing-new-router-fixture "Direct link to component-testing-new-router-fixture")

This release introduces an experimental `router` fixture to intercept and handle network requests in component testing. There are two ways to use the router fixture:

-   Call `router.route(url, handler)` that behaves similarly to [page.route()](/docs/api/class-page#page-route).
-   Call `router.use(handlers)` and pass [MSW library](https://mswjs.io) request handlers to it.

Here is an example of reusing your existing MSW handlers in the test.

```
import { handlers } from '@src/mocks/handlers';test.beforeEach(async ({ router }) => {  // install common handlers before each test  await router.use(...handlers);});test('example test', async ({ mount }) => {  // test as usual, your handlers are active  // ...});
```

This fixture is only available in [component tests](/docs/test-components#handling-network-requests).

### UI Mode / Trace Viewer Updates[​](#ui-mode--trace-viewer-updates "Direct link to UI Mode / Trace Viewer Updates")

-   Test annotations are now shown in UI mode.
-   Content of text attachments is now rendered inline in the attachments pane.
-   New setting to show/hide routing actions like [route.continue()](/docs/api/class-route#route-continue).
-   Request method and status are shown in the network details tab.
-   New button to copy source file location to clipboard.
-   Metadata pane now displays the `baseURL`.

### Miscellaneous[​](#miscellaneous-10 "Direct link to Miscellaneous")

-   New `maxRetries` option in [apiRequestContext.fetch()](/docs/api/class-apirequestcontext#api-request-context-fetch) which retries on the `ECONNRESET` network error.
-   New option to [box a fixture](/docs/test-fixtures#box-fixtures) to minimize the fixture exposure in test reports and error messages.
-   New option to provide a [custom fixture title](/docs/test-fixtures#custom-fixture-title) to be used in test reports and error messages.

### Browser Versions[​](#browser-versions-12 "Direct link to Browser Versions")

-   Chromium 128.0.6613.18
-   Mozilla Firefox 128.0
-   WebKit 18.0

This version was also tested against the following stable channels:

-   Google Chrome 127
-   Microsoft Edge 127

## Version 1.45[​](#version-145 "Direct link to Version 1.45")

### Clock[​](#clock "Direct link to Clock")

Utilizing the new [Clock](/docs/api/class-clock "Clock") API allows to manipulate and control time within tests to verify time-related behavior. This API covers many common scenarios, including:

-   testing with predefined time;
-   keeping consistent time and timers;
-   monitoring inactivity;
-   ticking through time manually.

```
// Initialize clock and let the page load naturally.await page.clock.install({ time: new Date('2024-02-02T08:00:00') });await page.goto('http://localhost:3333');// Pretend that the user closed the laptop lid and opened it again at 10am,// Pause the time once reached that point.await page.clock.pauseAt(new Date('2024-02-02T10:00:00'));// Assert the page state.await expect(page.getByTestId('current-time')).toHaveText('2/2/2024, 10:00:00 AM');// Close the laptop lid again and open it at 10:30am.await page.clock.fastForward('30:00');await expect(page.getByTestId('current-time')).toHaveText('2/2/2024, 10:30:00 AM');
```

See [the clock guide](/docs/clock) for more details.

### Test runner[​](#test-runner-3 "Direct link to Test runner")

-   New CLI option `--fail-on-flaky-tests` that sets exit code to `1` upon any flaky tests. Note that by default, the test runner exits with code `0` when all failed tests recovered upon a retry. With this option, the test run will fail in such case.
    
-   New environment variable `PLAYWRIGHT_FORCE_TTY` controls whether built-in `list`, `line` and `dot` reporters assume a live terminal. For example, this could be useful to disable tty behavior when your CI environment does not handle ANSI control sequences well. Alternatively, you can enable tty behavior even when to live terminal is present, if you plan to post-process the output and handle control sequences.
    
    ```
    # Avoid TTY features that output ANSI control sequencesPLAYWRIGHT_FORCE_TTY=0 npx playwright test# Enable TTY features, assuming a terminal width 80PLAYWRIGHT_FORCE_TTY=80 npx playwright test
    ```
    
-   New options [testConfig.respectGitIgnore](/docs/api/class-testconfig#test-config-respect-git-ignore) and [testProject.respectGitIgnore](/docs/api/class-testproject#test-project-respect-git-ignore) control whether files matching `.gitignore` patterns are excluded when searching for tests.
    
-   New property `timeout` is now available for custom expect matchers. This property takes into account `playwright.config.ts` and `expect.configure()`.
    
    ```
    import { expect as baseExpect } from '@playwright/test';export const expect = baseExpect.extend({  async toHaveAmount(locator: Locator, expected: number, options?: { timeout?: number }) {    // When no timeout option is specified, use the config timeout.    const timeout = options?.timeout ?? this.timeout;    // ... implement the assertion ...  },});
    ```
    

### Miscellaneous[​](#miscellaneous-11 "Direct link to Miscellaneous")

-   Method [locator.setInputFiles()](/docs/api/class-locator#locator-set-input-files) now supports uploading a directory for `<input type=file webkitdirectory>` elements.
    
    ```
    await page.getByLabel('Upload directory').setInputFiles(path.join(__dirname, 'mydir'));
    ```
    
-   Multiple methods like [locator.click()](/docs/api/class-locator#locator-click) or [locator.press()](/docs/api/class-locator#locator-press) now support a `ControlOrMeta` modifier key. This key maps to `Meta` on macOS and maps to `Control` on Windows and Linux.
    
    ```
    // Press the common keyboard shortcut Control+S or Meta+S to trigger a "Save" operation.await page.keyboard.press('ControlOrMeta+S');
    ```
    
-   New property `httpCredentials.send` in [apiRequest.newContext()](/docs/api/class-apirequest#api-request-new-context) that allows to either always send the `Authorization` header or only send it in response to `401 Unauthorized`.
    
-   New option `reason` in [apiRequestContext.dispose()](/docs/api/class-apirequestcontext#api-request-context-dispose) that will be included in the error message of ongoing operations interrupted by the context disposal.
    
-   New option `host` in [browserType.launchServer()](/docs/api/class-browsertype#browser-type-launch-server) allows to accept websocket connections on a specific address instead of unspecified `0.0.0.0`.
    
-   Playwright now supports Chromium, Firefox and WebKit on Ubuntu 24.04.
    
-   v1.45 is the last release to receive WebKit update for macOS 12 Monterey. Please update macOS to keep using the latest WebKit.
    

### Browser Versions[​](#browser-versions-13 "Direct link to Browser Versions")

-   Chromium 127.0.6533.5
-   Mozilla Firefox 127.0
-   WebKit 17.4

This version was also tested against the following stable channels:

-   Google Chrome 126
-   Microsoft Edge 126

## Version 1.44[​](#version-144 "Direct link to Version 1.44")

### New APIs[​](#new-apis-3 "Direct link to New APIs")

**Accessibility assertions**

-   [expect(locator).toHaveAccessibleName()](/docs/api/class-locatorassertions#locator-assertions-to-have-accessible-name) checks if the element has the specified accessible name:
    
    ```
    const locator = page.getByRole('button');await expect(locator).toHaveAccessibleName('Submit');
    ```
    
-   [expect(locator).toHaveAccessibleDescription()](/docs/api/class-locatorassertions#locator-assertions-to-have-accessible-description) checks if the element has the specified accessible description:
    
    ```
    const locator = page.getByRole('button');await expect(locator).toHaveAccessibleDescription('Upload a photo');
    ```
    
-   [expect(locator).toHaveRole()](/docs/api/class-locatorassertions#locator-assertions-to-have-role) checks if the element has the specified ARIA role:
    
    ```
    const locator = page.getByTestId('save-button');await expect(locator).toHaveRole('button');
    ```
    

**Locator handler**

-   After executing the handler added with [page.addLocatorHandler()](/docs/api/class-page#page-add-locator-handler), Playwright will now wait until the overlay that triggered the handler is not visible anymore. You can opt-out of this behavior with the new `noWaitAfter` option.
-   You can use new `times` option in [page.addLocatorHandler()](/docs/api/class-page#page-add-locator-handler) to specify maximum number of times the handler should be run.
-   The handler in [page.addLocatorHandler()](/docs/api/class-page#page-add-locator-handler) now accepts the locator as argument.
-   New [page.removeLocatorHandler()](/docs/api/class-page#page-remove-locator-handler) method for removing previously added locator handlers.

```
const locator = page.getByText('This interstitial covers the button');await page.addLocatorHandler(locator, async overlay => {  await overlay.locator('#close').click();}, { times: 3, noWaitAfter: true });// Run your tests that can be interrupted by the overlay.// ...await page.removeLocatorHandler(locator);
```

**Miscellaneous options**

-   [`multipart`](/docs/api/class-apirequestcontext#api-request-context-fetch-option-multipart) option in `apiRequestContext.fetch()` now accepts [`FormData`](https://developer.mozilla.org/en-US/docs/Web/API/FormData) and supports repeating fields with the same name.
    
    ```
    const formData = new FormData();formData.append('file', new File(['let x = 2024;'], 'f1.js', { type: 'text/javascript' }));formData.append('file', new File(['hello'], 'f2.txt', { type: 'text/plain' }));context.request.post('https://example.com/uploadFiles', {  multipart: formData});
    ```
    
-   `expect(callback).toPass({ intervals })` can now be configured by `expect.toPass.intervals` option globally in [testConfig.expect](/docs/api/class-testconfig#test-config-expect) or per project in [testProject.expect](/docs/api/class-testproject#test-project-expect).
    
-   `expect(page).toHaveURL(url)` now supports `ignoreCase` [option](/docs/api/class-pageassertions#page-assertions-to-have-url-option-ignore-case).
    
-   [testProject.ignoreSnapshots](/docs/api/class-testproject#test-project-ignore-snapshots) allows to configure per project whether to skip screenshot expectations.
    

**Reporter API**

-   New method [suite.entries()](/docs/api/class-suite#suite-entries) returns child test suites and test cases in their declaration order. [suite.type](/docs/api/class-suite#suite-type) and [testCase.type](/docs/api/class-testcase#test-case-type) can be used to tell apart test cases and suites in the list.
-   [Blob](/docs/test-reporters#blob-reporter) reporter now allows overriding report file path with a single option `outputFile`. The same option can also be specified as `PLAYWRIGHT_BLOB_OUTPUT_FILE` environment variable that might be more convenient on CI/CD.
-   [JUnit](/docs/test-reporters#junit-reporter) reporter now supports `includeProjectInTestName` option.

**Command line**

-   `--last-failed` CLI option to for running only tests that failed in the previous run.
    
    First run all tests:
    
    ```
    $ npx playwright testRunning 103 tests using 5 workers...2 failed  [chromium] › my-test.spec.ts:8:5 › two ─────────────────────────────────────────────────────────  [chromium] › my-test.spec.ts:13:5 › three ──────────────────────────────────────────────────────101 passed (30.0s)
    ```
    
    Now fix the failing tests and run Playwright again with `--last-failed` option:
    
    ```
    $ npx playwright test --last-failedRunning 2 tests using 2 workers  2 passed (1.2s)
    ```
    

### Browser Versions[​](#browser-versions-14 "Direct link to Browser Versions")

-   Chromium 125.0.6422.14
-   Mozilla Firefox 125.0.1
-   WebKit 17.4

This version was also tested against the following stable channels:

-   Google Chrome 124
-   Microsoft Edge 124

## Version 1.43[​](#version-143 "Direct link to Version 1.43")

### New APIs[​](#new-apis-4 "Direct link to New APIs")

-   Method [browserContext.clearCookies()](/docs/api/class-browsercontext#browser-context-clear-cookies) now supports filters to remove only some cookies.
    
    ```
    // Clear all cookies.await context.clearCookies();// New: clear cookies with a particular name.await context.clearCookies({ name: 'session-id' });// New: clear cookies for a particular domain.await context.clearCookies({ domain: 'my-origin.com' });
    ```
    
-   New mode `retain-on-first-failure` for [testOptions.trace](/docs/api/class-testoptions#test-options-trace). In this mode, trace is recorded for the first run of each test, but not for retires. When test run fails, the trace file is retained, otherwise it is removed.
    
    ```
    import { defineConfig } from '@playwright/test';export default defineConfig({  use: {    trace: 'retain-on-first-failure',  },});
    ```
    
-   New property [testInfo.tags](/docs/api/class-testinfo#test-info-tags) exposes test tags during test execution.
    
    ```
    test('example', async ({ page }) => {  console.log(test.info().tags);});
    ```
    
-   New method [locator.contentFrame()](/docs/api/class-locator#locator-content-frame) converts a [Locator](/docs/api/class-locator "Locator") object to a [FrameLocator](/docs/api/class-framelocator "FrameLocator"). This can be useful when you have a [Locator](/docs/api/class-locator "Locator") object obtained somewhere, and later on would like to interact with the content inside the frame.
    
    ```
    const locator = page.locator('iframe[name="embedded"]');// ...const frameLocator = locator.contentFrame();await frameLocator.getByRole('button').click();
    ```
    
-   New method [frameLocator.owner()](/docs/api/class-framelocator#frame-locator-owner) converts a [FrameLocator](/docs/api/class-framelocator "FrameLocator") object to a [Locator](/docs/api/class-locator "Locator"). This can be useful when you have a [FrameLocator](/docs/api/class-framelocator "FrameLocator") object obtained somewhere, and later on would like to interact with the `iframe` element.
    
    ```
    const frameLocator = page.frameLocator('iframe[name="embedded"]');// ...const locator = frameLocator.owner();await expect(locator).toBeVisible();
    ```
    

### UI Mode Updates[​](#ui-mode-updates "Direct link to UI Mode Updates")

![Playwright UI Mode](https://github.com/microsoft/playwright/assets/9881434/61ca7cfc-eb7a-4305-8b62-b6c9f098f300)

-   See tags in the test list.
-   Filter by tags by typing `@fast` or clicking on the tag itself.
-   New shortcuts:
    -   "F5" to run tests.
    -   "Shift F5" to stop running tests.
    -   "Ctrl \`" to toggle test output.

### Browser Versions[​](#browser-versions-15 "Direct link to Browser Versions")

-   Chromium 124.0.6367.8
-   Mozilla Firefox 124.0
-   WebKit 17.4

This version was also tested against the following stable channels:

-   Google Chrome 123
-   Microsoft Edge 123

## Version 1.42[​](#version-142 "Direct link to Version 1.42")

### New APIs[​](#new-apis-5 "Direct link to New APIs")

-   New method [page.addLocatorHandler()](/docs/api/class-page#page-add-locator-handler) registers a callback that will be invoked when specified element becomes visible and may block Playwright actions. The callback can get rid of the overlay. Here is an example that closes a cookie dialog when it appears:

```
// Setup the handler.await page.addLocatorHandler(    page.getByRole('heading', { name: 'Hej! You are in control of your cookies.' }),    async () => {      await page.getByRole('button', { name: 'Accept all' }).click();    });// Write the test as usual.await page.goto('https://www.ikea.com/');await page.getByRole('link', { name: 'Collection of blue and white' }).click();await expect(page.getByRole('heading', { name: 'Light and easy' })).toBeVisible();
```

-   `expect(callback).toPass()` timeout can now be configured by `expect.toPass.timeout` option [globally](/docs/api/class-testconfig#test-config-expect) or in [project config](/docs/api/class-testproject#test-project-expect)
-   [electronApplication.on('console')](/docs/api/class-electronapplication#electron-application-event-console) event is emitted when Electron main process calls console API methods.

```
electronApp.on('console', async msg => {  const values = [];  for (const arg of msg.args())    values.push(await arg.jsonValue());  console.log(...values);});await electronApp.evaluate(() => console.log('hello', 5, { foo: 'bar' }));
```

-   [New syntax](/docs/test-annotations#tag-tests) for adding tags to the tests (@-tokens in the test title are still supported):

```
test('test customer login', {  tag: ['@fast', '@login'],}, async ({ page }) => {  // ...});
```

Use `--grep` command line option to run only tests with certain tags.

```
npx playwright test --grep @fast
```

-   `--project` command line [flag](/docs/test-cli#all-options) now supports '\*' wildcard:

```
npx playwright test --project='*mobile*'
```

-   [New syntax](/docs/test-annotations#annotate-tests) for test annotations:

```
test('test full report', {  annotation: [    { type: 'issue', description: 'https://github.com/microsoft/playwright/issues/23180' },    { type: 'docs', description: 'https://playwright.dev/docs/test-annotations#tag-tests' },  ],}, async ({ page }) => {  // ...});
```

-   [page.pdf()](/docs/api/class-page#page-pdf) accepts two new options [`tagged`](/docs/api/class-page#page-pdf-option-tagged) and [`outline`](/docs/api/class-page#page-pdf-option-outline).

### Announcements[​](#announcements "Direct link to Announcements")

-   ⚠️ Ubuntu 18 is not supported anymore.

### Browser Versions[​](#browser-versions-16 "Direct link to Browser Versions")

-   Chromium 123.0.6312.4
-   Mozilla Firefox 123.0
-   WebKit 17.4

This version was also tested against the following stable channels:

-   Google Chrome 122
-   Microsoft Edge 123

## Version 1.41[​](#version-141 "Direct link to Version 1.41")

### New APIs[​](#new-apis-6 "Direct link to New APIs")

-   New method [page.unrouteAll()](/docs/api/class-page#page-unroute-all) removes all routes registered by [page.route()](/docs/api/class-page#page-route) and [page.routeFromHAR()](/docs/api/class-page#page-route-from-har). Optionally allows to wait for ongoing routes to finish, or ignore any errors from them.
-   New method [browserContext.unrouteAll()](/docs/api/class-browsercontext#browser-context-unroute-all) removes all routes registered by [browserContext.route()](/docs/api/class-browsercontext#browser-context-route) and [browserContext.routeFromHAR()](/docs/api/class-browsercontext#browser-context-route-from-har). Optionally allows to wait for ongoing routes to finish, or ignore any errors from them.
-   New options [style](/docs/api/class-page#page-screenshot-option-style) in [page.screenshot()](/docs/api/class-page#page-screenshot) and [style](/docs/api/class-locator#locator-screenshot-option-style) in [locator.screenshot()](/docs/api/class-locator#locator-screenshot) to add custom CSS to the page before taking a screenshot.
-   New option `stylePath` for methods [expect(page).toHaveScreenshot()](/docs/api/class-pageassertions#page-assertions-to-have-screenshot-1) and [expect(locator).toHaveScreenshot()](/docs/api/class-locatorassertions#locator-assertions-to-have-screenshot-1) to apply a custom stylesheet while making the screenshot.
-   New `fileName` option for [Blob reporter](/docs/test-reporters#blob-reporter), to specify the name of the report to be created.

### Browser Versions[​](#browser-versions-17 "Direct link to Browser Versions")

-   Chromium 121.0.6167.57
-   Mozilla Firefox 121.0
-   WebKit 17.4

This version was also tested against the following stable channels:

-   Google Chrome 120
-   Microsoft Edge 120

## Version 1.40[​](#version-140 "Direct link to Version 1.40")

### Test Generator Update[​](#test-generator-update "Direct link to Test Generator Update")

![Playwright Test Generator](https://github.com/microsoft/playwright/assets/9881434/e8d67e2e-f36d-4301-8631-023948d3e190)

New tools to generate assertions:

-   "Assert visibility" tool generates [expect(locator).toBeVisible()](/docs/api/class-locatorassertions#locator-assertions-to-be-visible).
-   "Assert value" tool generates [expect(locator).toHaveValue()](/docs/api/class-locatorassertions#locator-assertions-to-have-value).
-   "Assert text" tool generates [expect(locator).toContainText()](/docs/api/class-locatorassertions#locator-assertions-to-contain-text).

Here is an example of a generated test with assertions:

```
import { test, expect } from '@playwright/test';test('test', async ({ page }) => {  await page.goto('https://playwright.dev/');  await page.getByRole('link', { name: 'Get started' }).click();  await expect(page.getByLabel('Breadcrumbs').getByRole('list')).toContainText('Installation');  await expect(page.getByLabel('Search')).toBeVisible();  await page.getByLabel('Search').click();  await page.getByPlaceholder('Search docs').fill('locator');  await expect(page.getByPlaceholder('Search docs')).toHaveValue('locator');});
```

### New APIs[​](#new-apis-7 "Direct link to New APIs")

-   Options [reason](/docs/api/class-page#page-close-option-reason) in [page.close()](/docs/api/class-page#page-close), [reason](/docs/api/class-browsercontext#browser-context-close-option-reason) in [browserContext.close()](/docs/api/class-browsercontext#browser-context-close) and [reason](/docs/api/class-browser#browser-close-option-reason) in [browser.close()](/docs/api/class-browser#browser-close). Close reason is reported for all operations interrupted by the closure.
-   Option [firefoxUserPrefs](/docs/api/class-browsertype#browser-type-launch-persistent-context-option-firefox-user-prefs) in [browserType.launchPersistentContext()](/docs/api/class-browsertype#browser-type-launch-persistent-context).

### Other Changes[​](#other-changes "Direct link to Other Changes")

-   Methods [download.path()](/docs/api/class-download#download-path) and [download.createReadStream()](/docs/api/class-download#download-create-read-stream) throw an error for failed and cancelled downloads.
-   Playwright [docker image](/docs/docker) now comes with Node.js v20.

### Browser Versions[​](#browser-versions-18 "Direct link to Browser Versions")

-   Chromium 120.0.6099.28
-   Mozilla Firefox 119.0
-   WebKit 17.4

This version was also tested against the following stable channels:

-   Google Chrome 119
-   Microsoft Edge 119

## Version 1.39[​](#version-139 "Direct link to Version 1.39")

### Add custom matchers to your expect[​](#add-custom-matchers-to-your-expect "Direct link to Add custom matchers to your expect")

You can extend Playwright assertions by providing custom matchers. These matchers will be available on the expect object.

test.spec.ts

```
import { expect as baseExpect } from '@playwright/test';export const expect = baseExpect.extend({  async toHaveAmount(locator: Locator, expected: number, options?: { timeout?: number }) {    // ... see documentation for how to write matchers.  },});test('pass', async ({ page }) => {  await expect(page.getByTestId('cart')).toHaveAmount(5);});
```

See the documentation [for a full example](/docs/test-assertions#add-custom-matchers-using-expectextend).

### Merge test fixtures[​](#merge-test-fixtures "Direct link to Merge test fixtures")

You can now merge test fixtures from multiple files or modules:

fixtures.ts

```
import { mergeTests } from '@playwright/test';import { test as dbTest } from 'database-test-utils';import { test as a11yTest } from 'a11y-test-utils';export const test = mergeTests(dbTest, a11yTest);
```

test.spec.ts

```
import { test } from './fixtures';test('passes', async ({ database, page, a11y }) => {  // use database and a11y fixtures.});
```

### Merge custom expect matchers[​](#merge-custom-expect-matchers "Direct link to Merge custom expect matchers")

You can now merge custom expect matchers from multiple files or modules:

fixtures.ts

```
import { mergeTests, mergeExpects } from '@playwright/test';import { test as dbTest, expect as dbExpect } from 'database-test-utils';import { test as a11yTest, expect as a11yExpect } from 'a11y-test-utils';export const test = mergeTests(dbTest, a11yTest);export const expect = mergeExpects(dbExpect, a11yExpect);
```

test.spec.ts

```
import { test, expect } from './fixtures';test('passes', async ({ page, database }) => {  await expect(database).toHaveDatabaseUser('admin');  await expect(page).toPassA11yAudit();});
```

### Hide implementation details: box test steps[​](#hide-implementation-details-box-test-steps "Direct link to Hide implementation details: box test steps")

You can mark a [test.step()](/docs/api/class-test#test-step) as "boxed" so that errors inside it point to the step call site.

```
async function login(page) {  await test.step('login', async () => {    // ...  }, { box: true });  // Note the "box" option here.}
```

```
Error: Timed out 5000ms waiting for expect(locator).toBeVisible()  ... error details omitted ...  14 |   await page.goto('https://github.com/login');> 15 |   await login(page);     |         ^  16 | });
```

See [test.step()](/docs/api/class-test#test-step) documentation for a full example.

### New APIs[​](#new-apis-8 "Direct link to New APIs")

-   [expect(locator).toHaveAttribute()](/docs/api/class-locatorassertions#locator-assertions-to-have-attribute-2)

### Browser Versions[​](#browser-versions-19 "Direct link to Browser Versions")

-   Chromium 119.0.6045.9
-   Mozilla Firefox 118.0.1
-   WebKit 17.4

This version was also tested against the following stable channels:

-   Google Chrome 118
-   Microsoft Edge 118

## Version 1.38[​](#version-138 "Direct link to Version 1.38")

### UI Mode Updates[​](#ui-mode-updates-1 "Direct link to UI Mode Updates")

![Playwright UI Mode](https://github.com/microsoft/playwright/assets/746130/8ba27be0-58fd-4f62-8561-950480610369)

1.  Zoom into time range.
2.  Network panel redesign.

### New APIs[​](#new-apis-9 "Direct link to New APIs")

-   [browserContext.on('weberror')](/docs/api/class-browsercontext#browser-context-event-web-error)
-   [locator.pressSequentially()](/docs/api/class-locator#locator-press-sequentially)
-   The [reporter.onEnd()](/docs/api/class-reporter#reporter-on-end) now reports `startTime` and total run `duration`.

### Deprecations[​](#deprecations "Direct link to Deprecations")

-   The following methods were deprecated: [page.type()](/docs/api/class-page#page-type), [frame.type()](/docs/api/class-frame#frame-type), [locator.type()](/docs/api/class-locator#locator-type) and [elementHandle.type()](/docs/api/class-elementhandle#element-handle-type). Please use [locator.fill()](/docs/api/class-locator#locator-fill) instead which is much faster. Use [locator.pressSequentially()](/docs/api/class-locator#locator-press-sequentially) only if there is a special keyboard handling on the page, and you need to press keys one-by-one.

### Breaking Changes: Playwright no longer downloads browsers automatically[​](#breaking-changes-playwright-no-longer-downloads-browsers-automatically "Direct link to Breaking Changes: Playwright no longer downloads browsers automatically")

> **Note**: If you are using `@playwright/test` package, this change does not affect you.

Playwright recommends to use `@playwright/test` package and download browsers via `npx playwright install` command. If you are following this recommendation, nothing has changed for you.

However, up to v1.38, installing the `playwright` package instead of `@playwright/test` did automatically download browsers. This is no longer the case, and we recommend to explicitly download browsers via `npx playwright install` command.

**v1.37 and earlier**

`playwright` package was downloading browsers during `npm install`, while `@playwright/test` was not.

**v1.38 and later**

`playwright` and `@playwright/test` packages do not download browsers during `npm install`.

**Recommended migration**

Run `npx playwright install` to download browsers after `npm install`. For example, in your CI configuration:

```
- run: npm ci- run: npx playwright install --with-deps
```

**Alternative migration option - not recommended**

Add `@playwright/browser-chromium`, `@playwright/browser-firefox` and `@playwright/browser-webkit` as a dependency. These packages download respective browsers during `npm install`. Make sure you keep the version of all playwright packages in sync:

```
// package.json{  "devDependencies": {    "playwright": "1.38.0",    "@playwright/browser-chromium": "1.38.0",    "@playwright/browser-firefox": "1.38.0",    "@playwright/browser-webkit": "1.38.0"  }}
```

### Browser Versions[​](#browser-versions-20 "Direct link to Browser Versions")

-   Chromium 117.0.5938.62
-   Mozilla Firefox 117.0
-   WebKit 17.0

This version was also tested against the following stable channels:

-   Google Chrome 116
-   Microsoft Edge 116

## Version 1.37[​](#version-137 "Direct link to Version 1.37")

### New `npx playwright merge-reports` tool[​](#new-npx-playwright-merge-reports-tool "Direct link to new-npx-playwright-merge-reports-tool")

If you run tests on multiple shards, you can now merge all reports in a single HTML report (or any other report) using the new `merge-reports` CLI tool.

Using `merge-reports` tool requires the following steps:

1.  Adding a new "blob" reporter to the config when running on CI:
    
    playwright.config.ts
    
    ```
    export default defineConfig({  testDir: './tests',  reporter: process.env.CI ? 'blob' : 'html',});
    ```
    
    The "blob" reporter will produce ".zip" files that contain all the information about the test run.
    
2.  Copying all "blob" reports in a single shared location and running `npx playwright merge-reports`:
    

```
npx playwright merge-reports --reporter html ./all-blob-reports
```

Read more in [our documentation](/docs/test-sharding).

### 📚 Debian 12 Bookworm Support[​](#-debian-12-bookworm-support "Direct link to 📚 Debian 12 Bookworm Support")

Playwright now supports Debian 12 Bookworm on both x86\_64 and arm64 for Chromium, Firefox and WebKit. Let us know if you encounter any issues!

Linux support looks like this:

Ubuntu 20.04

Ubuntu 22.04

Debian 11

Debian 12

Chromium

✅

✅

✅

✅

WebKit

✅

✅

✅

✅

Firefox

✅

✅

✅

✅

### UI Mode Updates[​](#ui-mode-updates-2 "Direct link to UI Mode Updates")

-   UI Mode now respects project dependencies. You can control which dependencies to respect by checking/unchecking them in a projects list.
-   Console logs from the test are now displayed in the Console tab.

### Browser Versions[​](#browser-versions-21 "Direct link to Browser Versions")

-   Chromium 116.0.5845.82
-   Mozilla Firefox 115.0
-   WebKit 17.0

This version was also tested against the following stable channels:

-   Google Chrome 115
-   Microsoft Edge 115

## Version 1.36[​](#version-136 "Direct link to Version 1.36")

🏝️ Summer maintenance release.

### Browser Versions[​](#browser-versions-22 "Direct link to Browser Versions")

-   Chromium 115.0.5790.75
-   Mozilla Firefox 115.0
-   WebKit 17.0

This version was also tested against the following stable channels:

-   Google Chrome 114
-   Microsoft Edge 114

## Version 1.35[​](#version-135 "Direct link to Version 1.35")

### Highlights[​](#highlights-2 "Direct link to Highlights")

-   UI mode is now available in VSCode Playwright extension via a new "Show trace viewer" button:
    
    ![Playwright UI Mode](https://github.com/microsoft/playwright/assets/746130/13094128-259b-477a-8bbb-c1181178e8a2)
    
-   UI mode and trace viewer mark network requests handled with [page.route()](/docs/api/class-page#page-route) and [browserContext.route()](/docs/api/class-browsercontext#browser-context-route) handlers, as well as those issued via the [API testing](/docs/api-testing):
    
    ![Trace Viewer](https://github.com/microsoft/playwright/assets/746130/0df2d4b6-faa3-465c-aff3-c435b430bfe1)
    
-   New option `maskColor` for methods [page.screenshot()](/docs/api/class-page#page-screenshot), [locator.screenshot()](/docs/api/class-locator#locator-screenshot), [expect(page).toHaveScreenshot()](/docs/api/class-pageassertions#page-assertions-to-have-screenshot-1) and [expect(locator).toHaveScreenshot()](/docs/api/class-locatorassertions#locator-assertions-to-have-screenshot-1) to change default masking color:
    
    ```
    await page.goto('https://playwright.dev');await expect(page).toHaveScreenshot({  mask: [page.locator('img')],  maskColor: '#00FF00', // green});
    ```
    
-   New `uninstall` CLI command to uninstall browser binaries:
    
    ```
    $ npx playwright uninstall # remove browsers installed by this installation$ npx playwright uninstall --all # remove all ever-install Playwright browsers
    ```
    
-   Both UI mode and trace viewer now could be opened in a browser tab:
    
    ```
    $ npx playwright test --ui-port 0 # open UI mode in a tab on a random port$ npx playwright show-trace --port 0 # open trace viewer in tab on a random port
    ```
    

### ⚠️ Breaking changes[​](#️-breaking-changes "Direct link to ⚠️ Breaking changes")

-   `playwright-core` binary got renamed from `playwright` to `playwright-core`. So if you use `playwright-core` CLI, make sure to update the name:
    
    ```
    $ npx playwright-core install # the new way to install browsers when using playwright-core
    ```
    
    This change **does not** affect `@playwright/test` and `playwright` package users.
    

### Browser Versions[​](#browser-versions-23 "Direct link to Browser Versions")

-   Chromium 115.0.5790.13
-   Mozilla Firefox 113.0
-   WebKit 16.4

This version was also tested against the following stable channels:

-   Google Chrome 114
-   Microsoft Edge 114

## Version 1.34[​](#version-134 "Direct link to Version 1.34")

### Highlights[​](#highlights-3 "Direct link to Highlights")

-   UI Mode now shows steps, fixtures and attachments: ![UI Mode attachments](https://github.com/microsoft/playwright/assets/746130/1d280419-d79a-4a56-b2dc-54d631281d56)
    
-   New property [testProject.teardown](/docs/api/class-testproject#test-project-teardown) to specify a project that needs to run after this and all dependent projects have finished. Teardown is useful to cleanup any resources acquired by this project.
    
    A common pattern would be a `setup` dependency with a corresponding `teardown`:
    
    playwright.config.ts
    
    ```
    import { defineConfig } from '@playwright/test';export default defineConfig({  projects: [    {      name: 'setup',      testMatch: /global.setup\.ts/,      teardown: 'teardown',    },    {      name: 'teardown',      testMatch: /global.teardown\.ts/,    },    {      name: 'chromium',      use: devices['Desktop Chrome'],      dependencies: ['setup'],    },    {      name: 'firefox',      use: devices['Desktop Firefox'],      dependencies: ['setup'],    },    {      name: 'webkit',      use: devices['Desktop Safari'],      dependencies: ['setup'],    },  ],});
    ```
    
-   New method [`expect.configure`](/docs/test-assertions#expectconfigure) to create pre-configured expect instance with its own defaults such as `timeout` and `soft`.
    
    ```
    const slowExpect = expect.configure({ timeout: 10000 });await slowExpect(locator).toHaveText('Submit');// Always do soft assertions.const softExpect = expect.configure({ soft: true });
    ```
    
-   New options `stderr` and `stdout` in [testConfig.webServer](/docs/api/class-testconfig#test-config-web-server) to configure output handling:
    
    playwright.config.ts
    
    ```
    import { defineConfig } from '@playwright/test';export default defineConfig({  // Run your local dev server before starting the tests  webServer: {    command: 'npm run start',    url: 'http://127.0.0.1:3000',    reuseExistingServer: !process.env.CI,    stdout: 'pipe',    stderr: 'pipe',  },});
    ```
    
-   New [locator.and()](/docs/api/class-locator#locator-and) to create a locator that matches both locators.
    
    ```
    const button = page.getByRole('button').and(page.getByTitle('Subscribe'));
    ```
    
-   New events [browserContext.on('console')](/docs/api/class-browsercontext#browser-context-event-console) and [browserContext.on('dialog')](/docs/api/class-browsercontext#browser-context-event-dialog) to subscribe to any dialogs and console messages from any page from the given browser context. Use the new methods [consoleMessage.page()](/docs/api/class-consolemessage#console-message-page) and [dialog.page()](/docs/api/class-dialog#dialog-page) to pin-point event source.
    

### ⚠️ Breaking changes[​](#️-breaking-changes-1 "Direct link to ⚠️ Breaking changes")

-   `npx playwright test` no longer works if you install both `playwright` and `@playwright/test`. There's no need to install both, since you can always import browser automation APIs from `@playwright/test` directly:
    
    automation.ts
    
    ```
    import { chromium, firefox, webkit } from '@playwright/test';/* ... */
    ```
    
-   Node.js 14 is no longer supported since it [reached its end-of-life](https://nodejs.dev/en/about/releases/) on April 30, 2023.
    

### Browser Versions[​](#browser-versions-24 "Direct link to Browser Versions")

-   Chromium 114.0.5735.26
-   Mozilla Firefox 113.0
-   WebKit 16.4

This version was also tested against the following stable channels:

-   Google Chrome 113
-   Microsoft Edge 113

## Version 1.33[​](#version-133 "Direct link to Version 1.33")

### Locators Update[​](#locators-update "Direct link to Locators Update")

-   Use [locator.or()](/docs/api/class-locator#locator-or) to create a locator that matches either of the two locators. Consider a scenario where you'd like to click on a "New email" button, but sometimes a security settings dialog shows up instead. In this case, you can wait for either a "New email" button, or a dialog and act accordingly:
    
    ```
    const newEmail = page.getByRole('button', { name: 'New email' });const dialog = page.getByText('Confirm security settings');await expect(newEmail.or(dialog)).toBeVisible();if (await dialog.isVisible())  await page.getByRole('button', { name: 'Dismiss' }).click();await newEmail.click();
    ```
    
-   Use new options [hasNot](/docs/api/class-locator#locator-filter-option-has-not) and [hasNotText](/docs/api/class-locator#locator-filter-option-has-not-text) in [locator.filter()](/docs/api/class-locator#locator-filter) to find elements that **do not match** certain conditions.
    
    ```
    const rowLocator = page.locator('tr');await rowLocator    .filter({ hasNotText: 'text in column 1' })    .filter({ hasNot: page.getByRole('button', { name: 'column 2 button' }) })    .screenshot();
    ```
    
-   Use new web-first assertion [expect(locator).toBeAttached()](/docs/api/class-locatorassertions#locator-assertions-to-be-attached) to ensure that the element is present in the page's DOM. Do not confuse with the [expect(locator).toBeVisible()](/docs/api/class-locatorassertions#locator-assertions-to-be-visible) that ensures that element is both attached & visible.
    

### New APIs[​](#new-apis-10 "Direct link to New APIs")

-   [locator.or()](/docs/api/class-locator#locator-or)
-   New option [hasNot](/docs/api/class-locator#locator-filter-option-has-not) in [locator.filter()](/docs/api/class-locator#locator-filter)
-   New option [hasNotText](/docs/api/class-locator#locator-filter-option-has-not-text) in [locator.filter()](/docs/api/class-locator#locator-filter)
-   [expect(locator).toBeAttached()](/docs/api/class-locatorassertions#locator-assertions-to-be-attached)
-   New option [timeout](/docs/api/class-route#route-fetch-option-timeout) in [route.fetch()](/docs/api/class-route#route-fetch)
-   [reporter.onExit()](/docs/api/class-reporter#reporter-on-exit)

### ⚠️ Breaking change[​](#️-breaking-change "Direct link to ⚠️ Breaking change")

-   The `mcr.microsoft.com/playwright:v1.33.0` now serves a Playwright image based on Ubuntu Jammy. To use the focal-based image, please use `mcr.microsoft.com/playwright:v1.33.0-focal` instead.

### Browser Versions[​](#browser-versions-25 "Direct link to Browser Versions")

-   Chromium 113.0.5672.53
-   Mozilla Firefox 112.0
-   WebKit 16.4

This version was also tested against the following stable channels:

-   Google Chrome 112
-   Microsoft Edge 112

## Version 1.32[​](#version-132 "Direct link to Version 1.32")

### Introducing UI Mode (preview)[​](#introducing-ui-mode-preview "Direct link to Introducing UI Mode (preview)")

New [UI Mode](/docs/test-ui-mode) lets you explore, run and debug tests. Comes with a built-in watch mode.

![Playwright UI Mode](https://user-images.githubusercontent.com/746130/227004851-3901a691-4f8e-43d6-8d6b-cbfeafaeb999.png)

Engage with a new flag `--ui`:

```
npx playwright test --ui
```

### New APIs[​](#new-apis-11 "Direct link to New APIs")

-   New options [updateMode](/docs/api/class-page#page-route-from-har-option-update-mode) and [updateContent](/docs/api/class-page#page-route-from-har-option-update-content) in [page.routeFromHAR()](/docs/api/class-page#page-route-from-har) and [browserContext.routeFromHAR()](/docs/api/class-browsercontext#browser-context-route-from-har).
-   Chaining existing locator objects, see [locator docs](/docs/locators#matching-inside-a-locator) for details.
-   New property [testInfo.testId](/docs/api/class-testinfo#test-info-test-id).
-   New option [name](/docs/api/class-tracing#tracing-start-chunk-option-name) in method [tracing.startChunk()](/docs/api/class-tracing#tracing-start-chunk).

### ⚠️ Breaking change in component tests[​](#️-breaking-change-in-component-tests "Direct link to ⚠️ Breaking change in component tests")

Note: **component tests only**, does not affect end-to-end tests.

-   `@playwright/experimental-ct-react` now supports **React 18 only**.
-   If you're running component tests with React 16 or 17, please replace `@playwright/experimental-ct-react` with `@playwright/experimental-ct-react17`.

### Browser Versions[​](#browser-versions-26 "Direct link to Browser Versions")

-   Chromium 112.0.5615.29
-   Mozilla Firefox 111.0
-   WebKit 16.4

This version was also tested against the following stable channels:

-   Google Chrome 111
-   Microsoft Edge 111

## Version 1.31[​](#version-131 "Direct link to Version 1.31")

### New APIs[​](#new-apis-12 "Direct link to New APIs")

-   New property [testProject.dependencies](/docs/api/class-testproject#test-project-dependencies) to configure dependencies between projects.
    
    Using dependencies allows global setup to produce traces and other artifacts, see the setup steps in the test report and more.
    
    playwright.config.ts
    
    ```
    import { defineConfig } from '@playwright/test';export default defineConfig({  projects: [    {      name: 'setup',      testMatch: /global.setup\.ts/,    },    {      name: 'chromium',      use: devices['Desktop Chrome'],      dependencies: ['setup'],    },    {      name: 'firefox',      use: devices['Desktop Firefox'],      dependencies: ['setup'],    },    {      name: 'webkit',      use: devices['Desktop Safari'],      dependencies: ['setup'],    },  ],});
    ```
    
-   New assertion [expect(locator).toBeInViewport()](/docs/api/class-locatorassertions#locator-assertions-to-be-in-viewport) ensures that locator points to an element that intersects viewport, according to the [intersection observer API](https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API).
    
    ```
    const button = page.getByRole('button');// Make sure at least some part of element intersects viewport.await expect(button).toBeInViewport();// Make sure element is fully outside of viewport.await expect(button).not.toBeInViewport();// Make sure that at least half of the element intersects viewport.await expect(button).toBeInViewport({ ratio: 0.5 });
    ```
    

### Miscellaneous[​](#miscellaneous-12 "Direct link to Miscellaneous")

-   DOM snapshots in trace viewer can be now opened in a separate window.
-   New method `defineConfig` to be used in `playwright.config`.
-   New option [maxRedirects](/docs/api/class-route#route-fetch-option-max-redirects) for method [route.fetch()](/docs/api/class-route#route-fetch).
-   Playwright now supports Debian 11 arm64.
-   Official [docker images](/docs/docker) now include Node 18 instead of Node 16.

### ⚠️ Breaking change in component tests[​](#️-breaking-change-in-component-tests-1 "Direct link to ⚠️ Breaking change in component tests")

Note: **component tests only**, does not affect end-to-end tests.

`playwright-ct.config` configuration file for [component testing](/docs/test-components) now requires calling `defineConfig`.

```
// Beforeimport { type PlaywrightTestConfig, devices } from '@playwright/experimental-ct-react';const config: PlaywrightTestConfig = {  // ... config goes here ...};export default config;
```

Replace `config` variable definition with `defineConfig` call:

```
// Afterimport { defineConfig, devices } from '@playwright/experimental-ct-react';export default defineConfig({  // ... config goes here ...});
```

### Browser Versions[​](#browser-versions-27 "Direct link to Browser Versions")

-   Chromium 111.0.5563.19
-   Mozilla Firefox 109.0
-   WebKit 16.4

This version was also tested against the following stable channels:

-   Google Chrome 110
-   Microsoft Edge 110

## Version 1.30[​](#version-130 "Direct link to Version 1.30")

### Browser Versions[​](#browser-versions-28 "Direct link to Browser Versions")

-   Chromium 110.0.5481.38
-   Mozilla Firefox 108.0.2
-   WebKit 16.4

This version was also tested against the following stable channels:

-   Google Chrome 109
-   Microsoft Edge 109

## Version 1.29[​](#version-129 "Direct link to Version 1.29")

### New APIs[​](#new-apis-13 "Direct link to New APIs")

-   New method [route.fetch()](/docs/api/class-route#route-fetch) and new option `json` for [route.fulfill()](/docs/api/class-route#route-fulfill):
    
    ```
    await page.route('**/api/settings', async route => {  // Fetch original settings.  const response = await route.fetch();  // Force settings theme to a predefined value.  const json = await response.json();  json.theme = 'Solorized';  // Fulfill with modified data.  await route.fulfill({ json });});
    ```
    
-   New method [locator.all()](/docs/api/class-locator#locator-all) to iterate over all matching elements:
    
    ```
    // Check all checkboxes!const checkboxes = page.getByRole('checkbox');for (const checkbox of await checkboxes.all())  await checkbox.check();
    ```
    
-   [locator.selectOption()](/docs/api/class-locator#locator-select-option) matches now by value or label:
    
    ```
    <select multiple>  <option value="red">Red</option>  <option value="green">Green</option>  <option value="blue">Blue</option></select>
    ```
    
    ```
    await element.selectOption('Red');
    ```
    
-   Retry blocks of code until all assertions pass:
    
    ```
    await expect(async () => {  const response = await page.request.get('https://api.example.com');  await expect(response).toBeOK();}).toPass();
    ```
    
    Read more in [our documentation](/docs/test-assertions#expecttopass).
    
-   Automatically capture **full page screenshot** on test failure:
    
    playwright.config.ts
    
    ```
    import { defineConfig } from '@playwright/test';export default defineConfig({  use: {    screenshot: {      mode: 'only-on-failure',      fullPage: true,    }  }});
    ```
    

### Miscellaneous[​](#miscellaneous-13 "Direct link to Miscellaneous")

-   Playwright Test now respects [`jsconfig.json`](https://code.visualstudio.com/docs/languages/jsconfig).
-   New options `args` and `proxy` for [androidDevice.launchBrowser()](/docs/api/class-androiddevice#android-device-launch-browser).
-   Option `postData` in method [route.continue()](/docs/api/class-route#route-continue) now supports [Serializable](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify#Description "Serializable") values.

### Browser Versions[​](#browser-versions-29 "Direct link to Browser Versions")

-   Chromium 109.0.5414.46
-   Mozilla Firefox 107.0
-   WebKit 16.4

This version was also tested against the following stable channels:

-   Google Chrome 108
-   Microsoft Edge 108

## Version 1.28[​](#version-128 "Direct link to Version 1.28")

### Playwright Tools[​](#playwright-tools "Direct link to Playwright Tools")

-   **Record at Cursor in VSCode.** You can run the test, position the cursor at the end of the test and continue generating the test.

![New VSCode Extension](https://user-images.githubusercontent.com/746130/202005839-aba2eeba-217b-424d-8496-8b4f5fa72f41.png)

-   **Live Locators in VSCode.** You can hover and edit locators in VSCode to get them highlighted in the opened browser.
-   **Live Locators in CodeGen.** Generate a locator for any element on the page using "Explore" tool.

![Locator Explorer](https://user-images.githubusercontent.com/746130/201796876-01567a0b-ca61-4a9d-b12b-04786c471671.png)

-   **Codegen and Trace Viewer Dark Theme.** Automatically picked up from operating system settings.

![Dark Theme](https://user-images.githubusercontent.com/746130/201797969-603f74df-d7cf-4c56-befd-798dbd269796.png)

### Test Runner[​](#test-runner-4 "Direct link to Test Runner")

-   Configure retries and test timeout for a file or a test with [test.describe.configure()](/docs/api/class-test#test-describe-configure).
    
    ```
    // Each test in the file will be retried twice and have a timeout of 20 seconds.test.describe.configure({ retries: 2, timeout: 20_000 });test('runs first', async ({ page }) => {});test('runs second', async ({ page }) => {});
    ```
    
-   Use [testProject.snapshotPathTemplate](/docs/api/class-testproject#test-project-snapshot-path-template) and [testConfig.snapshotPathTemplate](/docs/api/class-testconfig#test-config-snapshot-path-template) to configure a template controlling location of snapshots generated by [expect(page).toHaveScreenshot()](/docs/api/class-pageassertions#page-assertions-to-have-screenshot-1) and [expect(value).toMatchSnapshot()](/docs/api/class-snapshotassertions#snapshot-assertions-to-match-snapshot-1).
    
    playwright.config.ts
    
    ```
    import { defineConfig } from '@playwright/test';export default defineConfig({  testDir: './tests',  snapshotPathTemplate: '{testDir}/__screenshots__/{testFilePath}/{arg}{ext}',});
    ```
    

### New APIs[​](#new-apis-14 "Direct link to New APIs")

-   [locator.blur()](/docs/api/class-locator#locator-blur)
-   [locator.clear()](/docs/api/class-locator#locator-clear)
-   [android.launchServer()](/docs/api/class-android#android-launch-server) and [android.connect()](/docs/api/class-android#android-connect)
-   [androidDevice.on('close')](/docs/api/class-androiddevice#android-device-event-close)

### Browser Versions[​](#browser-versions-30 "Direct link to Browser Versions")

-   Chromium 108.0.5359.29
-   Mozilla Firefox 106.0
-   WebKit 16.4

This version was also tested against the following stable channels:

-   Google Chrome 107
-   Microsoft Edge 107

## Version 1.27[​](#version-127 "Direct link to Version 1.27")

### Locators[​](#locators "Direct link to Locators")

With these new APIs writing locators is a joy:

-   [page.getByText()](/docs/api/class-page#page-get-by-text) to locate by text content.
-   [page.getByRole()](/docs/api/class-page#page-get-by-role) to locate by [ARIA role](https://www.w3.org/TR/wai-aria-1.2/#roles), [ARIA attributes](https://www.w3.org/TR/wai-aria-1.2/#aria-attributes) and [accessible name](https://w3c.github.io/accname/#dfn-accessible-name).
-   [page.getByLabel()](/docs/api/class-page#page-get-by-label) to locate a form control by associated label's text.
-   [page.getByTestId()](/docs/api/class-page#page-get-by-test-id) to locate an element based on its `data-testid` attribute (other attribute can be configured).
-   [page.getByPlaceholder()](/docs/api/class-page#page-get-by-placeholder) to locate an input by placeholder.
-   [page.getByAltText()](/docs/api/class-page#page-get-by-alt-text) to locate an element, usually image, by its text alternative.
-   [page.getByTitle()](/docs/api/class-page#page-get-by-title) to locate an element by its title.

```
await page.getByLabel('User Name').fill('John');await page.getByLabel('Password').fill('secret-password');await page.getByRole('button', { name: 'Sign in' }).click();await expect(page.getByText('Welcome, John!')).toBeVisible();
```

All the same methods are also available on [Locator](/docs/api/class-locator "Locator"), [FrameLocator](/docs/api/class-framelocator "FrameLocator") and [Frame](/docs/api/class-frame "Frame") classes.

### Other highlights[​](#other-highlights "Direct link to Other highlights")

-   `workers` option in the `playwright.config.ts` now accepts a percentage string to use some of the available CPUs. You can also pass it in the command line:
    
    ```
    npx playwright test --workers=20%
    ```
    
-   New options `host` and `port` for the html reporter.
    
    ```
    import { defineConfig } from '@playwright/test';export default defineConfig({  reporter: [['html', { host: 'localhost', port: '9223' }]],});
    ```
    
-   New field `FullConfig.configFile` is available to test reporters, specifying the path to the config file if any.
    
-   As announced in v1.25, Ubuntu 18 will not be supported as of Dec 2022. In addition to that, there will be no WebKit updates on Ubuntu 18 starting from the next Playwright release.
    

### Behavior Changes[​](#behavior-changes "Direct link to Behavior Changes")

-   [expect(locator).toHaveAttribute()](/docs/api/class-locatorassertions#locator-assertions-to-have-attribute) with an empty value does not match missing attribute anymore. For example, the following snippet will succeed when `button` **does not** have a `disabled` attribute.
    
    ```
    await expect(page.getByRole('button')).toHaveAttribute('disabled', '');
    ```
    
-   Command line options `--grep` and `--grep-invert` previously incorrectly ignored `grep` and `grepInvert` options specified in the config. Now all of them are applied together.
    

### Browser Versions[​](#browser-versions-31 "Direct link to Browser Versions")

-   Chromium 107.0.5304.18
-   Mozilla Firefox 105.0.1
-   WebKit 16.0

This version was also tested against the following stable channels:

-   Google Chrome 106
-   Microsoft Edge 106

## Version 1.26[​](#version-126 "Direct link to Version 1.26")

### Assertions[​](#assertions "Direct link to Assertions")

-   New option `enabled` for [expect(locator).toBeEnabled()](/docs/api/class-locatorassertions#locator-assertions-to-be-enabled).
-   [expect(locator).toHaveText()](/docs/api/class-locatorassertions#locator-assertions-to-have-text) now pierces open shadow roots.
-   New option `editable` for [expect(locator).toBeEditable()](/docs/api/class-locatorassertions#locator-assertions-to-be-editable).
-   New option `visible` for [expect(locator).toBeVisible()](/docs/api/class-locatorassertions#locator-assertions-to-be-visible).

### Other highlights[​](#other-highlights-1 "Direct link to Other highlights")

-   New option `maxRedirects` for [apiRequestContext.get()](/docs/api/class-apirequestcontext#api-request-context-get) and others to limit redirect count.
-   New command-line flag `--pass-with-no-tests` that allows the test suite to pass when no files are found.
-   New command-line flag `--ignore-snapshots` to skip snapshot expectations, such as `expect(value).toMatchSnapshot()` and `expect(page).toHaveScreenshot()`.

### Behavior Change[​](#behavior-change "Direct link to Behavior Change")

A bunch of Playwright APIs already support the `waitUntil: 'domcontentloaded'` option. For example:

```
await page.goto('https://playwright.dev', {  waitUntil: 'domcontentloaded',});
```

Prior to 1.26, this would wait for all iframes to fire the `DOMContentLoaded` event.

To align with web specification, the `'domcontentloaded'` value only waits for the target frame to fire the `'DOMContentLoaded'` event. Use `waitUntil: 'load'` to wait for all iframes.

### Browser Versions[​](#browser-versions-32 "Direct link to Browser Versions")

-   Chromium 106.0.5249.30
-   Mozilla Firefox 104.0
-   WebKit 16.0

This version was also tested against the following stable channels:

-   Google Chrome 105
-   Microsoft Edge 105

## Version 1.25[​](#version-125 "Direct link to Version 1.25")

### VSCode Extension[​](#vscode-extension "Direct link to VSCode Extension")

-   Watch your tests running live & keep devtools open.
-   Pick selector.
-   Record new test from current page state.

![vscode extension screenshot](https://user-images.githubusercontent.com/746130/183781999-1b9fdbc5-cfae-47d6-b4f7-5d4ae89716a8.jpg)

### Test Runner[​](#test-runner-5 "Direct link to Test Runner")

-   [test.step()](/docs/api/class-test#test-step) now returns the value of the step function:
    
    ```
    test('should work', async ({ page }) => {  const pageTitle = await test.step('get title', async () => {    await page.goto('https://playwright.dev');    return await page.title();  });  console.log(pageTitle);});
    ```
    
-   Added [test.describe.fixme()](/docs/api/class-test#test-describe-fixme).
    
-   New `'interrupted'` test status.
    
-   Enable tracing via CLI flag: `npx playwright test --trace=on`.
    

### Announcements[​](#announcements-1 "Direct link to Announcements")

-   🎁 We now ship Ubuntu 22.04 Jammy Jellyfish docker image: `mcr.microsoft.com/playwright:v1.34.0-jammy`.
-   🪦 This is the last release with macOS 10.15 support (deprecated as of 1.21).
-   🪦 This is the last release with Node.js 12 support, we recommend upgrading to Node.js LTS (16).
-   ⚠️ Ubuntu 18 is now deprecated and will not be supported as of Dec 2022.

### Browser Versions[​](#browser-versions-33 "Direct link to Browser Versions")

-   Chromium 105.0.5195.19
-   Mozilla Firefox 103.0
-   WebKit 16.0

This version was also tested against the following stable channels:

-   Google Chrome 104
-   Microsoft Edge 104

## Version 1.24[​](#version-124 "Direct link to Version 1.24")

### 🌍 Multiple Web Servers in `playwright.config.ts`[​](#-multiple-web-servers-in-playwrightconfigts "Direct link to -multiple-web-servers-in-playwrightconfigts")

Launch multiple web servers, databases, or other processes by passing an array of configurations:

playwright.config.ts

```
import { defineConfig } from '@playwright/test';export default defineConfig({  webServer: [    {      command: 'npm run start',      url: 'http://127.0.0.1:3000',      timeout: 120 * 1000,      reuseExistingServer: !process.env.CI,    },    {      command: 'npm run backend',      url: 'http://127.0.0.1:3333',      timeout: 120 * 1000,      reuseExistingServer: !process.env.CI,    }  ],  use: {    baseURL: 'http://localhost:3000/',  },});
```

### 🐂 Debian 11 Bullseye Support[​](#-debian-11-bullseye-support "Direct link to 🐂 Debian 11 Bullseye Support")

Playwright now supports Debian 11 Bullseye on x86\_64 for Chromium, Firefox and WebKit. Let us know if you encounter any issues!

Linux support looks like this:

| | Ubuntu 20.04 | Ubuntu 22.04 | Debian 11 | :--- | :---: | :---: | :---: | :---: | | Chromium | ✅ | ✅ | ✅ | | WebKit | ✅ | ✅ | ✅ | | Firefox | ✅ | ✅ | ✅ |

### 🕵️ Anonymous Describe[​](#️-anonymous-describe "Direct link to 🕵️ Anonymous Describe")

It is now possible to call [test.describe()](/docs/api/class-test#test-describe) to create suites without a title. This is useful for giving a group of tests a common option with [test.use()](/docs/api/class-test#test-use).

```
test.describe(() => {  test.use({ colorScheme: 'dark' });  test('one', async ({ page }) => {    // ...  });  test('two', async ({ page }) => {    // ...  });});
```

### 🧩 Component Tests Update[​](#-component-tests-update "Direct link to 🧩 Component Tests Update")

Playwright 1.24 Component Tests introduce `beforeMount` and `afterMount` hooks. Use these to configure your app for tests.

For example, this could be used to setup App router in Vue.js:

src/component.spec.ts

```
import { test } from '@playwright/experimental-ct-vue';import { Component } from './mycomponent';test('should work', async ({ mount }) => {  const component = await mount(Component, {    hooksConfig: {      /* anything to configure your app */    }  });});
```

playwright/index.ts

```
import { router } from '../router';import { beforeMount } from '@playwright/experimental-ct-vue/hooks';beforeMount(async ({ app, hooksConfig }) => {  app.use(router);});
```

A similar configuration in Next.js would look like this:

src/component.spec.jsx

```
import { test } from '@playwright/experimental-ct-react';import { Component } from './mycomponent';test('should work', async ({ mount }) => {  const component = await mount(<Component></Component>, {    // Pass mock value from test into `beforeMount`.    hooksConfig: {      router: {        query: { page: 1, per_page: 10 },        asPath: '/posts'      }    }  });});
```

playwright/index.js

```
import router from 'next/router';import { beforeMount } from '@playwright/experimental-ct-react/hooks';beforeMount(async ({ hooksConfig }) => {  // Before mount, redefine useRouter to return mock value from test.  router.useRouter = () => hooksConfig.router;});
```

## Version 1.23[​](#version-123 "Direct link to Version 1.23")

### Network Replay[​](#network-replay "Direct link to Network Replay")

Now you can record network traffic into a HAR file and re-use this traffic in your tests.

To record network into HAR file:

```
npx playwright open --save-har=github.har.zip https://github.com/microsoft
```

Alternatively, you can record HAR programmatically:

```
const context = await browser.newContext({  recordHar: { path: 'github.har.zip' }});// ... do stuff ...await context.close();
```

Use the new methods [page.routeFromHAR()](/docs/api/class-page#page-route-from-har) or [browserContext.routeFromHAR()](/docs/api/class-browsercontext#browser-context-route-from-har) to serve matching responses from the [HAR](http://www.softwareishard.com/blog/har-12-spec/) file:

```
await context.routeFromHAR('github.har.zip');
```

Read more in [our documentation](/docs/mock#mocking-with-har-files).

### Advanced Routing[​](#advanced-routing "Direct link to Advanced Routing")

You can now use [route.fallback()](/docs/api/class-route#route-fallback) to defer routing to other handlers.

Consider the following example:

```
// Remove a header from all requests.test.beforeEach(async ({ page }) => {  await page.route('**/*', async route => {    const headers = await route.request().allHeaders();    delete headers['if-none-match'];    await route.fallback({ headers });  });});test('should work', async ({ page }) => {  await page.route('**/*', async route => {    if (route.request().resourceType() === 'image')      await route.abort();    else      await route.fallback();  });});
```

Note that the new methods [page.routeFromHAR()](/docs/api/class-page#page-route-from-har) and [browserContext.routeFromHAR()](/docs/api/class-browsercontext#browser-context-route-from-har) also participate in routing and could be deferred to.

### Web-First Assertions Update[​](#web-first-assertions-update "Direct link to Web-First Assertions Update")

-   New method [expect(locator).toHaveValues()](/docs/api/class-locatorassertions#locator-assertions-to-have-values) that asserts all selected values of `<select multiple>` element.
-   Methods [expect(locator).toContainText()](/docs/api/class-locatorassertions#locator-assertions-to-contain-text) and [expect(locator).toHaveText()](/docs/api/class-locatorassertions#locator-assertions-to-have-text) now accept `ignoreCase` option.

### Component Tests Update[​](#component-tests-update "Direct link to Component Tests Update")

-   Support for Vue2 via the [`@playwright/experimental-ct-vue2`](https://www.npmjs.com/package/@playwright/experimental-ct-vue2) package.
-   Support for component tests for [create-react-app](https://www.npmjs.com/package/create-react-app) with components in `.js` files.

Read more about [component testing with Playwright](/docs/test-components).

### Miscellaneous[​](#miscellaneous-14 "Direct link to Miscellaneous")

-   If there's a service worker that's in your way, you can now easily disable it with a new context option `serviceWorkers`:
    
    playwright.config.ts
    
    ```
    export default {  use: {    serviceWorkers: 'block',  }};
    ```
    
-   Using `.zip` path for `recordHar` context option automatically zips the resulting HAR:
    
    ```
    const context = await browser.newContext({  recordHar: {    path: 'github.har.zip',  }});
    ```
    
-   If you intend to edit HAR by hand, consider using the `"minimal"` HAR recording mode that only records information that is essential for replaying:
    
    ```
    const context = await browser.newContext({  recordHar: {    path: 'github.har',    mode: 'minimal',  }});
    ```
    
-   Playwright now runs on Ubuntu 22 amd64 and Ubuntu 22 arm64. We also publish new docker image `mcr.microsoft.com/playwright:v1.34.0-jammy`.
    

### ⚠️ Breaking Changes ⚠️[​](#️-breaking-changes-️ "Direct link to ⚠️ Breaking Changes ⚠️")

WebServer is now considered "ready" if request to the specified url has any of the following HTTP status codes:

-   `200-299`
-   `300-399` (new)
-   `400`, `401`, `402`, `403` (new)

## Version 1.22[​](#version-122 "Direct link to Version 1.22")

### Highlights[​](#highlights-4 "Direct link to Highlights")

-   Components Testing (preview)
    
    Playwright Test can now test your [React](https://reactjs.org/), [Vue.js](https://vuejs.org/) or [Svelte](https://svelte.dev/) components. You can use all the features of Playwright Test (such as parallelization, emulation & debugging) while running components in real browsers.
    
    Here is what a typical component test looks like:
    
    App.spec.tsx
    
    ```
    import { test, expect } from '@playwright/experimental-ct-react';import App from './App';// Let's test component in a dark scheme!test.use({ colorScheme: 'dark' });test('should render', async ({ mount }) => {  const component = await mount(<App></App>);  // As with any Playwright test, assert locator text.  await expect(component).toContainText('React');  // Or do a screenshot 🚀  await expect(component).toHaveScreenshot();  // Or use any Playwright method  await component.click();});
    ```
    
    Read more in [our documentation](/docs/test-components).
    
-   Role selectors that allow selecting elements by their [ARIA role](https://www.w3.org/TR/wai-aria-1.2/#roles), [ARIA attributes](https://www.w3.org/TR/wai-aria-1.2/#aria-attributes) and [accessible name](https://w3c.github.io/accname/#dfn-accessible-name).
    
    ```
    // Click a button with accessible name "log in"await page.locator('role=button[name="log in"]').click();
    ```
    
    Read more in [our documentation](/docs/locators#locate-by-role).
    
-   New [locator.filter()](/docs/api/class-locator#locator-filter) API to filter an existing locator
    
    ```
    const buttons = page.locator('role=button');// ...const submitButton = buttons.filter({ hasText: 'Submit' });await submitButton.click();
    ```
    
-   New web-first assertions [expect(page).toHaveScreenshot()](/docs/api/class-pageassertions#page-assertions-to-have-screenshot-1) and [expect(locator).toHaveScreenshot()](/docs/api/class-locatorassertions#locator-assertions-to-have-screenshot-1) that wait for screenshot stabilization and enhances test reliability.
    
    The new assertions has screenshot-specific defaults, such as:
    
    -   disables animations
    -   uses CSS scale option
    
    ```
    await page.goto('https://playwright.dev');await expect(page).toHaveScreenshot();
    ```
    
    The new [expect(page).toHaveScreenshot()](/docs/api/class-pageassertions#page-assertions-to-have-screenshot-1) saves screenshots at the same location as [expect(value).toMatchSnapshot()](/docs/api/class-snapshotassertions#snapshot-assertions-to-match-snapshot-1).
    

## Version 1.21[​](#version-121 "Direct link to Version 1.21")

### Highlights[​](#highlights-5 "Direct link to Highlights")

-   New role selectors that allow selecting elements by their [ARIA role](https://www.w3.org/TR/wai-aria-1.2/#roles), [ARIA attributes](https://www.w3.org/TR/wai-aria-1.2/#aria-attributes) and [accessible name](https://w3c.github.io/accname/#dfn-accessible-name).
    
    ```
    // Click a button with accessible name "log in"await page.locator('role=button[name="log in"]').click();
    ```
    
    Read more in [our documentation](/docs/locators#locate-by-role).
    
-   New `scale` option in [page.screenshot()](/docs/api/class-page#page-screenshot) for smaller sized screenshots.
    
-   New `caret` option in [page.screenshot()](/docs/api/class-page#page-screenshot) to control text caret. Defaults to `"hide"`.
    
-   New method `expect.poll` to wait for an arbitrary condition:
    
    ```
    // Poll the method until it returns an expected result.await expect.poll(async () => {  const response = await page.request.get('https://api.example.com');  return response.status();}).toBe(200);
    ```
    
    `expect.poll` supports most synchronous matchers, like `.toBe()`, `.toContain()`, etc. Read more in [our documentation](/docs/test-assertions#expectpoll).
    

### Behavior Changes[​](#behavior-changes-1 "Direct link to Behavior Changes")

-   ESM support when running TypeScript tests is now enabled by default. The `PLAYWRIGHT_EXPERIMENTAL_TS_ESM` env variable is no longer required.
-   The `mcr.microsoft.com/playwright` docker image no longer contains Python. Please use `mcr.microsoft.com/playwright/python` as a Playwright-ready docker image with pre-installed Python.
-   Playwright now supports large file uploads (100s of MBs) via [locator.setInputFiles()](/docs/api/class-locator#locator-set-input-files) API.

### Browser Versions[​](#browser-versions-34 "Direct link to Browser Versions")

-   Chromium 101.0.4951.26
-   Mozilla Firefox 98.0.2
-   WebKit 15.4

This version was also tested against the following stable channels:

-   Google Chrome 100
-   Microsoft Edge 100

## Version 1.20[​](#version-120 "Direct link to Version 1.20")

### Highlights[​](#highlights-6 "Direct link to Highlights")

-   New options for methods [page.screenshot()](/docs/api/class-page#page-screenshot), [locator.screenshot()](/docs/api/class-locator#locator-screenshot) and [elementHandle.screenshot()](/docs/api/class-elementhandle#element-handle-screenshot):
    
    -   Option `animations: "disabled"` rewinds all CSS animations and transitions to a consistent state
    -   Option `mask: Locator[]` masks given elements, overlaying them with pink `#FF00FF` boxes.
-   `expect().toMatchSnapshot()` now supports anonymous snapshots: when snapshot name is missing, Playwright Test will generate one automatically:
    
    ```
    expect('Web is Awesome <3').toMatchSnapshot();
    ```
    
-   New `maxDiffPixels` and `maxDiffPixelRatio` options for fine-grained screenshot comparison using `expect().toMatchSnapshot()`:
    
    ```
    expect(await page.screenshot()).toMatchSnapshot({  maxDiffPixels: 27, // allow no more than 27 different pixels.});
    ```
    
    It is most convenient to specify `maxDiffPixels` or `maxDiffPixelRatio` once in [testConfig.expect](/docs/api/class-testconfig#test-config-expect).
    
-   Playwright Test now adds [testConfig.fullyParallel](/docs/api/class-testconfig#test-config-fully-parallel) mode. By default, Playwright Test parallelizes between files. In fully parallel mode, tests inside a single file are also run in parallel. You can also use `--fully-parallel` command line flag.
    
    playwright.config.ts
    
    ```
    export default {  fullyParallel: true,};
    ```
    
-   [testProject.grep](/docs/api/class-testproject#test-project-grep) and [testProject.grepInvert](/docs/api/class-testproject#test-project-grep-invert) are now configurable per project. For example, you can now configure smoke tests project using `grep`:
    
    playwright.config.ts
    
    ```
    export default {  projects: [    {      name: 'smoke tests',      grep: /@smoke/,    },  ],};
    ```
    
-   [Trace Viewer](/docs/trace-viewer) now shows [API testing requests](/docs/api-testing).
    
-   [locator.highlight()](/docs/api/class-locator#locator-highlight) visually reveals element(s) for easier debugging.
    

### Announcements[​](#announcements-2 "Direct link to Announcements")

-   We now ship a designated Python docker image `mcr.microsoft.com/playwright/python`. Please switch over to it if you use Python. This is the last release that includes Python inside our javascript `mcr.microsoft.com/playwright` docker image.
-   v1.20 is the last release to receive WebKit update for macOS 10.15 Catalina. Please update macOS to keep using latest & greatest WebKit!

### Browser Versions[​](#browser-versions-35 "Direct link to Browser Versions")

-   Chromium 101.0.4921.0
-   Mozilla Firefox 97.0.1
-   WebKit 15.4

This version was also tested against the following stable channels:

-   Google Chrome 99
-   Microsoft Edge 99

## Version 1.19[​](#version-119 "Direct link to Version 1.19")

### Playwright Test Update[​](#playwright-test-update "Direct link to Playwright Test Update")

-   Playwright Test v1.19 now supports _soft assertions_. Failed soft assertions
    
    **do not** terminate test execution, but mark the test as failed.
    
    ```
    // Make a few checks that will not stop the test when failed...await expect.soft(page.locator('#status')).toHaveText('Success');await expect.soft(page.locator('#eta')).toHaveText('1 day');// ... and continue the test to check more things.await page.locator('#next-page').click();await expect.soft(page.locator('#title')).toHaveText('Make another order');
    ```
    
    Read more in [our documentation](/docs/test-assertions#soft-assertions)
    
-   You can now specify a **custom expect message** as a second argument to the `expect` and `expect.soft` functions, for example:
    
    ```
    await expect(page.locator('text=Name'), 'should be logged in').toBeVisible();
    ```
    
    The error would look like this:
    
    ```
        Error: should be logged in    Call log:      - expect.toBeVisible with timeout 5000ms      - waiting for "getByText('Name')"      2 |      3 | test('example test', async({ page }) => {    > 4 |   await expect(page.locator('text=Name'), 'should be logged in').toBeVisible();        |                                                                  ^      5 | });      6 |
    ```
    
    Read more in [our documentation](/docs/test-assertions#custom-expect-message)
    
-   By default, tests in a single file are run in order. If you have many independent tests in a single file, you can now run them in parallel with [test.describe.configure()](/docs/api/class-test#test-describe-configure).
    

### Other Updates[​](#other-updates "Direct link to Other Updates")

-   Locator now supports a `has` option that makes sure it contains another locator inside:
    
    ```
    await page.locator('article', {  has: page.locator('.highlight'),}).click();
    ```
    
    Read more in [locator documentation](/docs/api/class-locator#locator-locator)
    
-   New [locator.page()](/docs/api/class-locator#locator-page)
    
-   [page.screenshot()](/docs/api/class-page#page-screenshot) and [locator.screenshot()](/docs/api/class-locator#locator-screenshot) now automatically hide blinking caret
    
-   Playwright Codegen now generates locators and frame locators
    
-   New option `url` in [testConfig.webServer](/docs/api/class-testconfig#test-config-web-server) to ensure your web server is ready before running the tests
    
-   New [testInfo.errors](/docs/api/class-testinfo#test-info-errors) and [testResult.errors](/docs/api/class-testresult#test-result-errors) that contain all failed assertions and soft assertions.
    

### Potentially breaking change in Playwright Test Global Setup[​](#potentially-breaking-change-in-playwright-test-global-setup "Direct link to Potentially breaking change in Playwright Test Global Setup")

It is unlikely that this change will affect you, no action is required if your tests keep running as they did.

We've noticed that in rare cases, the set of tests to be executed was configured in the global setup by means of the environment variables. We also noticed some applications that were post processing the reporters' output in the global teardown. If you are doing one of the two, [learn more](https://github.com/microsoft/playwright/issues/12018)

### Browser Versions[​](#browser-versions-36 "Direct link to Browser Versions")

-   Chromium 100.0.4863.0
-   Mozilla Firefox 96.0.1
-   WebKit 15.4

This version was also tested against the following stable channels:

-   Google Chrome 98
-   Microsoft Edge 98

## Version 1.18[​](#version-118 "Direct link to Version 1.18")

### Locator Improvements[​](#locator-improvements "Direct link to Locator Improvements")

-   [locator.dragTo()](/docs/api/class-locator#locator-drag-to)
    
-   [`expect(locator).toBeChecked({ checked })`](/docs/api/class-locatorassertions#locator-assertions-to-be-checked)
    
-   Each locator can now be optionally filtered by the text it contains:
    
    ```
    await page.locator('li', { hasText: 'my item' }).locator('button').click();
    ```
    
    Read more in [locator documentation](/docs/api/class-locator#locator-locator)
    

### Testing API improvements[​](#testing-api-improvements "Direct link to Testing API improvements")

-   [`expect(response).toBeOK()`](/docs/test-assertions)
-   [`testInfo.attach()`](/docs/api/class-testinfo#test-info-attach)
-   [`test.info()`](/docs/api/class-test#test-info)

### Improved TypeScript Support[​](#improved-typescript-support "Direct link to Improved TypeScript Support")

1.  Playwright Test now respects `tsconfig.json`'s [`baseUrl`](https://www.typescriptlang.org/tsconfig#baseUrl) and [`paths`](https://www.typescriptlang.org/tsconfig#paths), so you can use aliases
2.  There is a new environment variable `PW_EXPERIMENTAL_TS_ESM` that allows importing ESM modules in your TS code, without the need for the compile step. Don't forget the `.js` suffix when you are importing your esm modules. Run your tests as follows:

```
npm i --save-dev @playwright/test@1.18.0-rc1PW_EXPERIMENTAL_TS_ESM=1 npx playwright test
```

### Create Playwright[​](#create-playwright "Direct link to Create Playwright")

The `npm init playwright` command is now generally available for your use:

```
# Run from your project's root directorynpm init playwright@latest# Or create a new projectnpm init playwright@latest new-project
```

This will create a Playwright Test configuration file, optionally add examples, a GitHub Action workflow and a first test `example.spec.ts`.

### New APIs & changes[​](#new-apis--changes "Direct link to New APIs & changes")

-   new [`testCase.repeatEachIndex`](/docs/api/class-testcase#test-case-repeat-each-index) API
-   [`acceptDownloads`](/docs/api/class-browser#browser-new-context-option-accept-downloads) option now defaults to `true`

### Breaking change: custom config options[​](#breaking-change-custom-config-options "Direct link to Breaking change: custom config options")

Custom config options are a convenient way to parametrize projects with different values. Learn more in [this guide](/docs/test-parameterize#parameterized-projects).

Previously, any fixture introduced through [test.extend()](/docs/api/class-test#test-extend) could be overridden in the [testProject.use](/docs/api/class-testproject#test-project-use) config section. For example,

```
// WRONG: THIS SNIPPET DOES NOT WORK SINCE v1.18.// fixtures.jsconst test = base.extend({  myParameter: 'default',});// playwright.config.jsmodule.exports = {  use: {    myParameter: 'value',  },};
```

The proper way to make a fixture parametrized in the config file is to specify `option: true` when defining the fixture. For example,

```
// CORRECT: THIS SNIPPET WORKS SINCE v1.18.// fixtures.jsconst test = base.extend({  // Fixtures marked as "option: true" will get a value specified in the config,  // or fallback to the default value.  myParameter: ['default', { option: true }],});// playwright.config.jsmodule.exports = {  use: {    myParameter: 'value',  },};
```

### Browser Versions[​](#browser-versions-37 "Direct link to Browser Versions")

-   Chromium 99.0.4812.0
-   Mozilla Firefox 95.0
-   WebKit 15.4

This version was also tested against the following stable channels:

-   Google Chrome 97
-   Microsoft Edge 97

## Version 1.17[​](#version-117 "Direct link to Version 1.17")

### Frame Locators[​](#frame-locators "Direct link to Frame Locators")

Playwright 1.17 introduces [frame locators](/docs/api/class-framelocator) - a locator to the iframe on the page. Frame locators capture the logic sufficient to retrieve the `iframe` and then locate elements in that iframe. Frame locators are strict by default, will wait for `iframe` to appear and can be used in Web-First assertions.

![Graphics](https://user-images.githubusercontent.com/746130/142082759-2170db38-370d-43ec-8d41-5f9941f57d83.png)

Frame locators can be created with either [page.frameLocator()](/docs/api/class-page#page-frame-locator) or [locator.frameLocator()](/docs/api/class-locator#locator-frame-locator) method.

```
const locator = page.frameLocator('#my-iframe').locator('text=Submit');await locator.click();
```

Read more at [our documentation](/docs/api/class-framelocator).

### Trace Viewer Update[​](#trace-viewer-update "Direct link to Trace Viewer Update")

Playwright Trace Viewer is now **available online** at [https://trace.playwright.dev](https://trace.playwright.dev)! Just drag-and-drop your `trace.zip` file to inspect its contents.

> **NOTE**: trace files are not uploaded anywhere; [trace.playwright.dev](https://trace.playwright.dev) is a [progressive web application](https://web.dev/progressive-web-apps/) that processes traces locally.

-   Playwright Test traces now include sources by default (these could be turned off with tracing option)
-   Trace Viewer now shows test name
-   New trace metadata tab with browser details
-   Snapshots now have URL bar

![image](https://user-images.githubusercontent.com/746130/141877831-29e37cd1-e574-4bd9-aab5-b13a463bb4ae.png)

### HTML Report Update[​](#html-report-update "Direct link to HTML Report Update")

-   HTML report now supports dynamic filtering
-   Report is now a **single static HTML file** that could be sent by e-mail or as a slack attachment.

![image](https://user-images.githubusercontent.com/746130/141877402-e486643d-72c7-4db3-8844-ed2072c5d676.png)

### Ubuntu ARM64 support + more[​](#ubuntu-arm64-support--more "Direct link to Ubuntu ARM64 support + more")

-   Playwright now supports **Ubuntu 20.04 ARM64**. You can now run Playwright tests inside Docker on Apple M1 and on Raspberry Pi.
    
-   You can now use Playwright to install stable version of Edge on Linux:
    
    ```
    npx playwright install msedge
    ```
    

### New APIs[​](#new-apis-15 "Direct link to New APIs")

-   Tracing now supports a [`'title'`](/docs/api/class-tracing#tracing-start-option-title) option
-   Page navigations support a new [`'commit'`](/docs/api/class-page#page-goto) waiting option
-   HTML reporter got [new configuration options](/docs/test-reporters#html-reporter)
-   [`testConfig.snapshotDir` option](/docs/api/class-testconfig#test-config-snapshot-dir)
-   [`testInfo.parallelIndex`](/docs/api/class-testinfo#test-info-parallel-index)
-   [`testInfo.titlePath`](/docs/api/class-testinfo#test-info-title-path)
-   [`testOptions.trace`](/docs/api/class-testoptions#test-options-trace) has new options
-   [`expect.toMatchSnapshot`](/docs/api/class-genericassertions) supports subdirectories
-   [`reporter.printsToStdio()`](/docs/api/class-reporter#reporter-prints-to-stdio)

## Version 1.16[​](#version-116 "Direct link to Version 1.16")

### 🎭 Playwright Test[​](#-playwright-test "Direct link to 🎭 Playwright Test")

#### API Testing[​](#api-testing "Direct link to API Testing")

Playwright 1.16 introduces new [API Testing](/docs/api/class-apirequestcontext) that lets you send requests to the server directly from Node.js! Now you can:

-   test your server API
-   prepare server side state before visiting the web application in a test
-   validate server side post-conditions after running some actions in the browser

To do a request on behalf of Playwright's Page, use **new [page.request](/docs/api/class-page#page-request) API**:

```
import { test, expect } from '@playwright/test';test('context fetch', async ({ page }) => {  // Do a GET request on behalf of page  const response = await page.request.get('http://example.com/foo.json');  // ...});
```

To do a stand-alone request from node.js to an API endpoint, use **new [`request` fixture](/docs/api/class-fixtures#fixtures-request)**:

```
import { test, expect } from '@playwright/test';test('context fetch', async ({ request }) => {  // Do a GET request on behalf of page  const response = await request.get('http://example.com/foo.json');  // ...});
```

Read more about it in our [API testing guide](/docs/api-testing).

#### Response Interception[​](#response-interception "Direct link to Response Interception")

It is now possible to do response interception by combining [API Testing](/docs/api-testing) with [request interception](/docs/network#modify-requests).

For example, we can blur all the images on the page:

```
import { test, expect } from '@playwright/test';import jimp from 'jimp'; // image processing librarytest('response interception', async ({ page }) => {  await page.route('**/*.jpeg', async route => {    const response = await page._request.fetch(route.request());    const image = await jimp.read(await response.body());    await image.blur(5);    await route.fulfill({      response,      body: await image.getBufferAsync('image/jpeg'),    });  });  const response = await page.goto('https://playwright.dev');  expect(response.status()).toBe(200);});
```

Read more about [response interception](/docs/network#modify-responses).

#### New HTML reporter[​](#new-html-reporter "Direct link to New HTML reporter")

Try it out new HTML reporter with either `--reporter=html` or a `reporter` entry in `playwright.config.ts` file:

```
$ npx playwright test --reporter=html
```

The HTML reporter has all the information about tests and their failures, including surfacing trace and image artifacts.

![html reporter](https://user-images.githubusercontent.com/746130/138324311-94e68b39-b51a-4776-a446-f60037a77f32.png)

Read more about [our reporters](/docs/test-reporters#html-reporter).

### 🎭 Playwright Library[​](#-playwright-library "Direct link to 🎭 Playwright Library")

#### locator.waitFor[​](#locatorwaitfor "Direct link to locator.waitFor")

Wait for a locator to resolve to a single element with a given state. Defaults to the `state: 'visible'`.

Comes especially handy when working with lists:

```
import { test, expect } from '@playwright/test';test('context fetch', async ({ page }) => {  const completeness = page.locator('text=Success');  await completeness.waitFor();  expect(await page.screenshot()).toMatchSnapshot('screen.png');});
```

Read more about [locator.waitFor()](/docs/api/class-locator#locator-wait-for).

### Docker support for Arm64[​](#docker-support-for-arm64 "Direct link to Docker support for Arm64")

Playwright Docker image is now published for Arm64 so it can be used on Apple Silicon.

Read more about [Docker integration](/docs/docker).

### 🎭 Playwright Trace Viewer[​](#-playwright-trace-viewer "Direct link to 🎭 Playwright Trace Viewer")

-   web-first assertions inside trace viewer
-   run trace viewer with `npx playwright show-trace` and drop trace files to the trace viewer PWA
-   API testing is integrated with trace viewer
-   better visual attribution of action targets

Read more about [Trace Viewer](/docs/trace-viewer).

### Browser Versions[​](#browser-versions-38 "Direct link to Browser Versions")

-   Chromium 97.0.4666.0
-   Mozilla Firefox 93.0
-   WebKit 15.4

This version of Playwright was also tested against the following stable channels:

-   Google Chrome 94
-   Microsoft Edge 94

## Version 1.15[​](#version-115 "Direct link to Version 1.15")

### 🎭 Playwright Library[​](#-playwright-library-1 "Direct link to 🎭 Playwright Library")

#### 🖱️ Mouse Wheel[​](#️-mouse-wheel "Direct link to 🖱️ Mouse Wheel")

By using [mouse.wheel()](/docs/api/class-mouse#mouse-wheel) you are now able to scroll vertically or horizontally.

#### 📜 New Headers API[​](#-new-headers-api "Direct link to 📜 New Headers API")

Previously it was not possible to get multiple header values of a response. This is now possible and additional helper functions are available:

-   [request.allHeaders()](/docs/api/class-request#request-all-headers)
-   [request.headersArray()](/docs/api/class-request#request-headers-array)
-   [request.headerValue()](/docs/api/class-request#request-header-value)
-   [response.allHeaders()](/docs/api/class-response#response-all-headers)
-   [response.headersArray()](/docs/api/class-response#response-headers-array)
-   [response.headerValue()](/docs/api/class-response#response-header-value)
-   [response.headerValues()](/docs/api/class-response#response-header-values)

#### 🌈 Forced-Colors emulation[​](#-forced-colors-emulation "Direct link to 🌈 Forced-Colors emulation")

Its now possible to emulate the `forced-colors` CSS media feature by passing it in the [browser.newContext()](/docs/api/class-browser#browser-new-context) or calling [page.emulateMedia()](/docs/api/class-page#page-emulate-media).

#### New APIs[​](#new-apis-16 "Direct link to New APIs")

-   [page.route()](/docs/api/class-page#page-route) accepts new `times` option to specify how many times this route should be matched.
-   [page.setChecked()](/docs/api/class-page#page-set-checked) and [locator.setChecked()](/docs/api/class-locator#locator-set-checked) were introduced to set the checked state of a checkbox.
-   [request.sizes()](/docs/api/class-request#request-sizes) Returns resource size information for given http request.
-   [tracing.startChunk()](/docs/api/class-tracing#tracing-start-chunk) - Start a new trace chunk.
-   [tracing.stopChunk()](/docs/api/class-tracing#tracing-stop-chunk) - Stops a new trace chunk.

### 🎭 Playwright Test[​](#-playwright-test-1 "Direct link to 🎭 Playwright Test")

#### 🤝 `test.parallel()` run tests in the same file in parallel[​](#-testparallel-run-tests-in-the-same-file-in-parallel "Direct link to -testparallel-run-tests-in-the-same-file-in-parallel")

```
test.describe.parallel('group', () => {  test('runs in parallel 1', async ({ page }) => {  });  test('runs in parallel 2', async ({ page }) => {  });});
```

By default, tests in a single file are run in order. If you have many independent tests in a single file, you can now run them in parallel with [test.describe.parallel(title, callback)](/docs/api/class-test#test-describe-parallel).

#### 🛠 Add `--debug` CLI flag[​](#-add---debug-cli-flag "Direct link to -add---debug-cli-flag")

By using `npx playwright test --debug` it will enable the [Playwright Inspector](/docs/debug#playwright-inspector) for you to debug your tests.

### Browser Versions[​](#browser-versions-39 "Direct link to Browser Versions")

-   Chromium 96.0.4641.0
-   Mozilla Firefox 92.0
-   WebKit 15.0

## Version 1.14[​](#version-114 "Direct link to Version 1.14")

### 🎭 Playwright Library[​](#-playwright-library-2 "Direct link to 🎭 Playwright Library")

#### ⚡️ New "strict" mode[​](#️-new-strict-mode "Direct link to ⚡️ New \"strict\" mode")

Selector ambiguity is a common problem in automation testing. **"strict" mode** ensures that your selector points to a single element and throws otherwise.

Pass `strict: true` into your action calls to opt in.

```
// This will throw if you have more than one button!await page.click('button', { strict: true });
```

#### 📍 New [**Locators API**](/docs/api/class-locator)[​](#-new-locators-api "Direct link to -new-locators-api")

Locator represents a view to the element(s) on the page. It captures the logic sufficient to retrieve the element at any given moment.

The difference between the [Locator](/docs/api/class-locator) and [ElementHandle](/docs/api/class-elementhandle) is that the latter points to a particular element, while [Locator](/docs/api/class-locator) captures the logic of how to retrieve that element.

Also, locators are **"strict" by default**!

```
const locator = page.locator('button');await locator.click();
```

Learn more in the [documentation](/docs/api/class-locator).

#### 🧩 Experimental [**React**](/docs/other-locators#react-locator) and [**Vue**](/docs/other-locators#vue-locator) selector engines[​](#-experimental-react-and-vue-selector-engines "Direct link to -experimental-react-and-vue-selector-engines")

React and Vue selectors allow selecting elements by its component name and/or property values. The syntax is very similar to [attribute selectors](https://developer.mozilla.org/en-US/docs/Web/CSS/Attribute_selectors) and supports all attribute selector operators.

```
await page.locator('_react=SubmitButton[enabled=true]').click();await page.locator('_vue=submit-button[enabled=true]').click();
```

Learn more in the [react selectors documentation](/docs/other-locators#react-locator) and the [vue selectors documentation](/docs/other-locators#vue-locator).

#### ✨ New [**`nth`**](/docs/other-locators#n-th-element-locator) and [**`visible`**](/docs/other-locators#css-matching-only-visible-elements) selector engines[​](#-new-nth-and-visible-selector-engines "Direct link to -new-nth-and-visible-selector-engines")

-   [`nth`](/docs/other-locators#n-th-element-locator) selector engine is equivalent to the `:nth-match` pseudo class, but could be combined with other selector engines.
-   [`visible`](/docs/other-locators#css-matching-only-visible-elements) selector engine is equivalent to the `:visible` pseudo class, but could be combined with other selector engines.

```
// select the first button among all buttonsawait button.click('button >> nth=0');// or if you are using locators, you can use first(), nth() and last()await page.locator('button').first().click();// click a visible buttonawait button.click('button >> visible=true');
```

### 🎭 Playwright Test[​](#-playwright-test-2 "Direct link to 🎭 Playwright Test")

#### ✅ Web-First Assertions[​](#-web-first-assertions "Direct link to ✅ Web-First Assertions")

`expect` now supports lots of new web-first assertions.

Consider the following example:

```
await expect(page.locator('.status')).toHaveText('Submitted');
```

Playwright Test will be re-testing the node with the selector `.status` until fetched Node has the `"Submitted"` text. It will be re-fetching the node and checking it over and over, until the condition is met or until the timeout is reached. You can either pass this timeout or configure it once via the [`testProject.expect`](/docs/api/class-testproject#test-project-expect) value in test config.

By default, the timeout for assertions is not set, so it'll wait forever, until the whole test times out.

List of all new assertions:

-   [`expect(locator).toBeChecked()`](/docs/api/class-locatorassertions#locator-assertions-to-be-checked)
-   [`expect(locator).toBeDisabled()`](/docs/api/class-locatorassertions#locator-assertions-to-be-disabled)
-   [`expect(locator).toBeEditable()`](/docs/api/class-locatorassertions#locator-assertions-to-be-editable)
-   [`expect(locator).toBeEmpty()`](/docs/api/class-locatorassertions#locator-assertions-to-be-empty)
-   [`expect(locator).toBeEnabled()`](/docs/api/class-locatorassertions#locator-assertions-to-be-enabled)
-   [`expect(locator).toBeFocused()`](/docs/api/class-locatorassertions#locator-assertions-to-be-focused)
-   [`expect(locator).toBeHidden()`](/docs/api/class-locatorassertions#locator-assertions-to-be-hidden)
-   [`expect(locator).toBeVisible()`](/docs/api/class-locatorassertions#locator-assertions-to-be-visible)
-   [`expect(locator).toContainText(text, options?)`](/docs/api/class-locatorassertions#locator-assertions-to-contain-text)
-   [`expect(locator).toHaveAttribute(name, value)`](/docs/api/class-locatorassertions#locator-assertions-to-have-attribute)
-   [`expect(locator).toHaveClass(expected)`](/docs/api/class-locatorassertions#locator-assertions-to-have-class)
-   [`expect(locator).toHaveCount(count)`](/docs/api/class-locatorassertions#locator-assertions-to-have-count)
-   [`expect(locator).toHaveCSS(name, value)`](/docs/api/class-locatorassertions#locator-assertions-to-have-css)
-   [`expect(locator).toHaveId(id)`](/docs/api/class-locatorassertions#locator-assertions-to-have-id)
-   [`expect(locator).toHaveJSProperty(name, value)`](/docs/api/class-locatorassertions#locator-assertions-to-have-js-property)
-   [`expect(locator).toHaveText(expected, options)`](/docs/api/class-locatorassertions#locator-assertions-to-have-text)
-   [`expect(page).toHaveTitle(title)`](/docs/api/class-pageassertions#page-assertions-to-have-title)
-   [`expect(page).toHaveURL(url)`](/docs/api/class-pageassertions#page-assertions-to-have-url)
-   [`expect(locator).toHaveValue(value)`](/docs/api/class-locatorassertions#locator-assertions-to-have-value)

#### ⛓ Serial mode with [`describe.serial`](/docs/api/class-test#test-describe-serial)[​](#-serial-mode-with-describeserial "Direct link to -serial-mode-with-describeserial")

Declares a group of tests that should always be run serially. If one of the tests fails, all subsequent tests are skipped. All tests in a group are retried together.

```
test.describe.serial('group', () => {  test('runs first', async ({ page }) => { /* ... */ });  test('runs second', async ({ page }) => { /* ... */ });});
```

Learn more in the [documentation](/docs/api/class-test#test-describe-serial).

#### 🐾 Steps API with [`test.step`](/docs/api/class-test#test-step)[​](#-steps-api-with-teststep "Direct link to -steps-api-with-teststep")

Split long tests into multiple steps using `test.step()` API:

```
import { test, expect } from '@playwright/test';test('test', async ({ page }) => {  await test.step('Log in', async () => {    // ...  });  await test.step('news feed', async () => {    // ...  });});
```

Step information is exposed in reporters API.

#### 🌎 Launch web server before running tests[​](#-launch-web-server-before-running-tests "Direct link to 🌎 Launch web server before running tests")

To launch a server during the tests, use the [`webServer`](/docs/test-webserver) option in the configuration file. The server will wait for a given url to be available before running the tests, and the url will be passed over to Playwright as a [`baseURL`](/docs/api/class-testoptions#test-options-base-url) when creating a context.

playwright.config.ts

```
import { defineConfig } from '@playwright/test';export default defineConfig({  webServer: {    command: 'npm run start', // command to launch    url: 'http://127.0.0.1:3000', // url to await for    timeout: 120 * 1000,    reuseExistingServer: !process.env.CI,  },});
```

Learn more in the [documentation](/docs/test-webserver).

### Browser Versions[​](#browser-versions-40 "Direct link to Browser Versions")

-   Chromium 94.0.4595.0
-   Mozilla Firefox 91.0
-   WebKit 15.0

## Version 1.13[​](#version-113 "Direct link to Version 1.13")

#### Playwright Test[​](#playwright-test "Direct link to Playwright Test")

-   **⚡️ Introducing [Reporter API](https://github.com/microsoft/playwright/blob/65a9037461ffc15d70cdc2055832a0c5512b227c/packages/playwright-test/types/testReporter.d.ts)** which is already used to create an [Allure Playwright reporter](https://github.com/allure-framework/allure-js/pull/297).
-   **⛺️ New [`baseURL` fixture](/docs/test-configuration#basic-configuration)** to support relative paths in tests.

#### Playwright[​](#playwright "Direct link to Playwright")

-   **🖖 Programmatic drag-and-drop support** via the [page.dragAndDrop()](/docs/api/class-page#page-drag-and-drop) API.
-   **🔎 Enhanced HAR** with body sizes for requests and responses. Use via `recordHar` option in [browser.newContext()](/docs/api/class-browser#browser-new-context).

#### Tools[​](#tools "Direct link to Tools")

-   Playwright Trace Viewer now shows parameters, returned values and `console.log()` calls.
-   Playwright Inspector can generate Playwright Test tests.

#### New and Overhauled Guides[​](#new-and-overhauled-guides "Direct link to New and Overhauled Guides")

-   [Intro](/docs/intro)
-   [Authentication](/docs/auth)
-   [Chrome Extensions](/docs/chrome-extensions)
-   [Playwright Test Annotations](/docs/test-annotations)
-   [Playwright Test Configuration](/docs/test-configuration)
-   [Playwright Test Fixtures](/docs/test-fixtures)

#### Browser Versions[​](#browser-versions-41 "Direct link to Browser Versions")

-   Chromium 93.0.4576.0
-   Mozilla Firefox 90.0
-   WebKit 14.2

#### New Playwright APIs[​](#new-playwright-apis "Direct link to New Playwright APIs")

-   new `baseURL` option in [browser.newContext()](/docs/api/class-browser#browser-new-context) and [browser.newPage()](/docs/api/class-browser#browser-new-page)
-   [response.securityDetails()](/docs/api/class-response#response-security-details) and [response.serverAddr()](/docs/api/class-response#response-server-addr)
-   [page.dragAndDrop()](/docs/api/class-page#page-drag-and-drop) and [frame.dragAndDrop()](/docs/api/class-frame#frame-drag-and-drop)
-   [download.cancel()](/docs/api/class-download#download-cancel)
-   [page.inputValue()](/docs/api/class-page#page-input-value), [frame.inputValue()](/docs/api/class-frame#frame-input-value) and [elementHandle.inputValue()](/docs/api/class-elementhandle#element-handle-input-value)
-   new `force` option in [page.fill()](/docs/api/class-page#page-fill), [frame.fill()](/docs/api/class-frame#frame-fill), and [elementHandle.fill()](/docs/api/class-elementhandle#element-handle-fill)
-   new `force` option in [page.selectOption()](/docs/api/class-page#page-select-option), [frame.selectOption()](/docs/api/class-frame#frame-select-option), and [elementHandle.selectOption()](/docs/api/class-elementhandle#element-handle-select-option)

## Version 1.12[​](#version-112 "Direct link to Version 1.12")

#### ⚡️ Introducing Playwright Test[​](#️-introducing-playwright-test "Direct link to ⚡️ Introducing Playwright Test")

[Playwright Test](/docs/intro) is a **new test runner** built from scratch by Playwright team specifically to accommodate end-to-end testing needs:

-   Run tests across all browsers.
-   Execute tests in parallel.
-   Enjoy context isolation and sensible defaults out of the box.
-   Capture videos, screenshots and other artifacts on failure.
-   Integrate your POMs as extensible fixtures.

Installation:

```
npm i -D @playwright/test
```

Simple test `tests/foo.spec.ts`:

```
import { test, expect } from '@playwright/test';test('basic test', async ({ page }) => {  await page.goto('https://playwright.dev/');  const name = await page.innerText('.navbar__title');  expect(name).toBe('Playwright');});
```

Running:

```
npx playwright test
```

👉 Read more in [Playwright Test documentation](/docs/intro).

#### 🧟‍♂️ Introducing Playwright Trace Viewer[​](#️-introducing-playwright-trace-viewer "Direct link to 🧟‍♂️ Introducing Playwright Trace Viewer")

[Playwright Trace Viewer](/docs/trace-viewer) is a new GUI tool that helps exploring recorded Playwright traces after the script ran. Playwright traces let you examine:

-   page DOM before and after each Playwright action
-   page rendering before and after each Playwright action
-   browser network during script execution

Traces are recorded using the new [browserContext.tracing](/docs/api/class-browsercontext#browser-context-tracing) API:

```
const browser = await chromium.launch();const context = await browser.newContext();// Start tracing before creating / navigating a page.await context.tracing.start({ screenshots: true, snapshots: true });const page = await context.newPage();await page.goto('https://playwright.dev');// Stop tracing and export it into a zip archive.await context.tracing.stop({ path: 'trace.zip' });
```

Traces are examined later with the Playwright CLI:

```
npx playwright show-trace trace.zip
```

That will open the following GUI:

![image](https://user-images.githubusercontent.com/746130/121109654-d66c4480-c7c0-11eb-8d4d-eb70d2b03811.png)

👉 Read more in [trace viewer documentation](/docs/trace-viewer).

#### Browser Versions[​](#browser-versions-42 "Direct link to Browser Versions")

-   Chromium 93.0.4530.0
-   Mozilla Firefox 89.0
-   WebKit 14.2

This version of Playwright was also tested against the following stable channels:

-   Google Chrome 91
-   Microsoft Edge 91

#### New APIs[​](#new-apis-17 "Direct link to New APIs")

-   `reducedMotion` option in [page.emulateMedia()](/docs/api/class-page#page-emulate-media), [browserType.launchPersistentContext()](/docs/api/class-browsertype#browser-type-launch-persistent-context), [browser.newContext()](/docs/api/class-browser#browser-new-context) and [browser.newPage()](/docs/api/class-browser#browser-new-page)
-   [browserContext.on('request')](/docs/api/class-browsercontext#browser-context-event-request)
-   [browserContext.on('requestfailed')](/docs/api/class-browsercontext#browser-context-event-request-failed)
-   [browserContext.on('requestfinished')](/docs/api/class-browsercontext#browser-context-event-request-finished)
-   [browserContext.on('response')](/docs/api/class-browsercontext#browser-context-event-response)
-   `tracesDir` option in [browserType.launch()](/docs/api/class-browsertype#browser-type-launch) and [browserType.launchPersistentContext()](/docs/api/class-browsertype#browser-type-launch-persistent-context)
-   new [browserContext.tracing](/docs/api/class-browsercontext#browser-context-tracing) API namespace
-   new [download.page()](/docs/api/class-download#download-page) method

## Version 1.11[​](#version-111 "Direct link to Version 1.11")

🎥 New video: [Playwright: A New Test Automation Framework for the Modern Web](https://youtu.be/_Jla6DyuEu4) ([slides](https://docs.google.com/presentation/d/1xFhZIJrdHkVe2CuMKOrni92HoG2SWslo0DhJJQMR1DI/edit?usp=sharing))

-   We talked about Playwright
-   Showed engineering work behind the scenes
-   Did live demos with new features ✨
-   **Special thanks** to [applitools](http://applitools.com/) for hosting the event and inviting us!

#### Browser Versions[​](#browser-versions-43 "Direct link to Browser Versions")

-   Chromium 92.0.4498.0
-   Mozilla Firefox 89.0b6
-   WebKit 14.2

#### New APIs[​](#new-apis-18 "Direct link to New APIs")

-   support for **async predicates** across the API in methods such as [page.waitForRequest()](/docs/api/class-page#page-wait-for-request) and others
-   new **emulation devices**: Galaxy S8, Galaxy S9+, Galaxy Tab S4, Pixel 3, Pixel 4
-   new methods:
    -   [page.waitForURL()](/docs/api/class-page#page-wait-for-url) to await navigations to URL
    -   [video.delete()](/docs/api/class-video#video-delete) and [video.saveAs()](/docs/api/class-video#video-save-as) to manage screen recording
-   new options:
    -   `screen` option in the [browser.newContext()](/docs/api/class-browser#browser-new-context) method to emulate `window.screen` dimensions
    -   `position` option in [page.check()](/docs/api/class-page#page-check) and [page.uncheck()](/docs/api/class-page#page-uncheck) methods
    -   `trial` option to dry-run actions in [page.check()](/docs/api/class-page#page-check), [page.uncheck()](/docs/api/class-page#page-uncheck), [page.click()](/docs/api/class-page#page-click), [page.dblclick()](/docs/api/class-page#page-dblclick), [page.hover()](/docs/api/class-page#page-hover) and [page.tap()](/docs/api/class-page#page-tap)

## Version 1.10[​](#version-110 "Direct link to Version 1.10")

-   [Playwright for Java v1.10](https://github.com/microsoft/playwright-java) is **now stable**!
-   Run Playwright against **Google Chrome** and **Microsoft Edge** stable channels with the [new channels API](/docs/browsers).
-   Chromium screenshots are **fast** on Mac & Windows.

#### Bundled Browser Versions[​](#bundled-browser-versions "Direct link to Bundled Browser Versions")

-   Chromium 90.0.4430.0
-   Mozilla Firefox 87.0b10
-   WebKit 14.2

This version of Playwright was also tested against the following stable channels:

-   Google Chrome 89
-   Microsoft Edge 89

#### New APIs[​](#new-apis-19 "Direct link to New APIs")

-   [browserType.launch()](/docs/api/class-browsertype#browser-type-launch) now accepts the new `'channel'` option. Read more in [our documentation](/docs/browsers).

## Version 1.9[​](#version-19 "Direct link to Version 1.9")

-   [Playwright Inspector](/docs/debug) is a **new GUI tool** to author and debug your tests.
    -   **Line-by-line debugging** of your Playwright scripts, with play, pause and step-through.
    -   Author new scripts by **recording user actions**.
    -   **Generate element selectors** for your script by hovering over elements.
    -   Set the `PWDEBUG=1` environment variable to launch the Inspector
-   **Pause script execution** with [page.pause()](/docs/api/class-page#page-pause) in headed mode. Pausing the page launches [Playwright Inspector](/docs/debug) for debugging.
-   **New has-text pseudo-class** for CSS selectors. `:has-text("example")` matches any element containing `"example"` somewhere inside, possibly in a child or a descendant element. See [more examples](/docs/other-locators#css-matching-by-text).
-   **Page dialogs are now auto-dismissed** during execution, unless a listener for `dialog` event is configured. [Learn more](/docs/dialogs) about this.
-   [Playwright for Python](https://github.com/microsoft/playwright-python) is **now stable** with an idiomatic snake case API and pre-built [Docker image](/docs/docker) to run tests in CI/CD.

#### Browser Versions[​](#browser-versions-44 "Direct link to Browser Versions")

-   Chromium 90.0.4421.0
-   Mozilla Firefox 86.0b10
-   WebKit 14.1

#### New APIs[​](#new-apis-20 "Direct link to New APIs")

-   [page.pause()](/docs/api/class-page#page-pause).

## Version 1.8[​](#version-18 "Direct link to Version 1.8")

-   [Selecting elements based on layout](/docs/other-locators#css-matching-elements-based-on-layout) with `:left-of()`, `:right-of()`, `:above()` and `:below()`.
    
-   Playwright now includes [command line interface](/docs/test-cli), former playwright-cli.
    
    ```
    npx playwright --help
    ```
    
-   [page.selectOption()](/docs/api/class-page#page-select-option) now waits for the options to be present.
    
-   New methods to [assert element state](/docs/actionability#assertions) like [page.isEditable()](/docs/api/class-page#page-is-editable).
    

#### New APIs[​](#new-apis-21 "Direct link to New APIs")

-   [elementHandle.isChecked()](/docs/api/class-elementhandle#element-handle-is-checked).
-   [elementHandle.isDisabled()](/docs/api/class-elementhandle#element-handle-is-disabled).
-   [elementHandle.isEditable()](/docs/api/class-elementhandle#element-handle-is-editable).
-   [elementHandle.isEnabled()](/docs/api/class-elementhandle#element-handle-is-enabled).
-   [elementHandle.isHidden()](/docs/api/class-elementhandle#element-handle-is-hidden).
-   [elementHandle.isVisible()](/docs/api/class-elementhandle#element-handle-is-visible).
-   [page.isChecked()](/docs/api/class-page#page-is-checked).
-   [page.isDisabled()](/docs/api/class-page#page-is-disabled).
-   [page.isEditable()](/docs/api/class-page#page-is-editable).
-   [page.isEnabled()](/docs/api/class-page#page-is-enabled).
-   [page.isHidden()](/docs/api/class-page#page-is-hidden).
-   [page.isVisible()](/docs/api/class-page#page-is-visible).
-   New option `'editable'` in [elementHandle.waitForElementState()](/docs/api/class-elementhandle#element-handle-wait-for-element-state).

#### Browser Versions[​](#browser-versions-45 "Direct link to Browser Versions")

-   Chromium 90.0.4392.0
-   Mozilla Firefox 85.0b5
-   WebKit 14.1

## Version 1.7[​](#version-17 "Direct link to Version 1.7")

-   **New Java SDK**: [Playwright for Java](https://github.com/microsoft/playwright-java) is now on par with [JavaScript](https://github.com/microsoft/playwright), [Python](https://github.com/microsoft/playwright-python) and [.NET bindings](https://github.com/microsoft/playwright-dotnet).
-   **Browser storage API**: New convenience APIs to save and load browser storage state (cookies, local storage) to simplify automation scenarios with authentication.
-   **New CSS selectors**: We heard your feedback for more flexible selectors and have revamped the selectors implementation. Playwright 1.7 introduces [new CSS extensions](/docs/other-locators#css-locator) and there's more coming soon.
-   **New website**: The docs website at [playwright.dev](https://playwright.dev/) has been updated and is now built with [Docusaurus](https://v2.docusaurus.io/).
-   **Support for Apple Silicon**: Playwright browser binaries for WebKit and Chromium are now built for Apple Silicon.

#### New APIs[​](#new-apis-22 "Direct link to New APIs")

-   [browserContext.storageState()](/docs/api/class-browsercontext#browser-context-storage-state) to get current state for later reuse.
-   `storageState` option in [browser.newContext()](/docs/api/class-browser#browser-new-context) and [browser.newPage()](/docs/api/class-browser#browser-new-page) to setup browser context state.

#### Browser Versions[​](#browser-versions-46 "Direct link to Browser Versions")

-   Chromium 89.0.4344.0
-   Mozilla Firefox 84.0b9
-   WebKit 14.1
