On this page

Playwright Test supports running multiple test projects at the same time. This is useful for running tests in multiple configurations. For example, consider running tests against multiple browsers. This type describes format of a project in the configuration file, to access resolved configuration parameters at run time use [FullProject](/docs/api/class-fullproject "FullProject").

`TestProject` encapsulates configuration specific to a single project. Projects are configured in [testConfig.projects](/docs/api/class-testconfig#test-config-projects) specified in the [configuration file](/docs/test-configuration). Note that all properties of [TestProject](/docs/api/class-testproject "TestProject") are available in the top-level [TestConfig](/docs/api/class-testconfig "TestConfig"), in which case they are shared between all projects.

Here is an example configuration that runs every test in Chromium, Firefox and WebKit, both Desktop and Mobile versions.

playwright.config.ts

```
import { defineConfig, devices } from '@playwright/test';export default defineConfig({  // Options shared for all projects.  timeout: 30000,  use: {    ignoreHTTPSErrors: true,  },  // Options specific to each project.  projects: [    {      name: 'chromium',      use: devices['Desktop Chrome'],    },    {      name: 'firefox',      use: devices['Desktop Firefox'],    },    {      name: 'webkit',      use: devices['Desktop Safari'],    },    {      name: 'Mobile Chrome',      use: devices['Pixel 5'],    },    {      name: 'Mobile Safari',      use: devices['iPhone 12'],    },  ],});
```

* * *

## Properties[​](#properties "Direct link to Properties")

### dependencies[​](#test-project-dependencies "Direct link to dependencies")

Added in: v1.31 testProject.dependencies

List of projects that need to run before any test in this project runs. Dependencies can be useful for configuring the global setup actions in a way that every action is in a form of a test. Passing `--no-deps` argument ignores the dependencies and behaves as if they were not specified.

Using dependencies allows global setup to produce traces and other artifacts, see the setup steps in the test report, etc.

**Usage**

playwright.config.ts

```
import { defineConfig } from '@playwright/test';export default defineConfig({  projects: [    {      name: 'setup',      testMatch: /global.setup\.ts/,    },    {      name: 'chromium',      use: devices['Desktop Chrome'],      dependencies: ['setup'],    },    {      name: 'firefox',      use: devices['Desktop Firefox'],      dependencies: ['setup'],    },    {      name: 'webkit',      use: devices['Desktop Safari'],      dependencies: ['setup'],    },  ],});
```

**Type**

-   [Array](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array "Array")<[string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type "string")\>

* * *

### expect[​](#test-project-expect "Direct link to expect")

Added in: v1.10 testProject.expect

Configuration for the `expect` assertion library.

Use [testConfig.expect](/docs/api/class-testconfig#test-config-expect) to change this option for all projects.

**Usage**

```
testProject.expect
```

**Type**

-   [Object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object "Object")
    -   `timeout` [number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type "Number") _(optional)_
        
        Default timeout for async expect matchers in milliseconds, defaults to 5000ms.
        
    -   `toHaveScreenshot` [Object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object "Object") _(optional)_
        
        -   `threshold` [number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type "Number") _(optional)_
            
            an acceptable perceived color difference between the same pixel in compared images, ranging from `0` (strict) and `1` (lax). `"pixelmatch"` comparator computes color difference in [YIQ color space](https://en.wikipedia.org/wiki/YIQ) and defaults `threshold` value to `0.2`.
            
        -   `maxDiffPixels` [number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type "Number") _(optional)_
            
            an acceptable amount of pixels that could be different, unset by default.
            
        -   `maxDiffPixelRatio` [number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type "Number") _(optional)_
            
            an acceptable ratio of pixels that are different to the total amount of pixels, between `0` and `1` , unset by default.
            
        -   `animations` "allow" | "disabled" _(optional)_
            
            See [animations](/docs/api/class-page#page-screenshot-option-animations) in [page.screenshot()](/docs/api/class-page#page-screenshot). Defaults to `"disabled"`.
            
        -   `caret` "hide" | "initial" _(optional)_
            
            See [caret](/docs/api/class-page#page-screenshot-option-caret) in [page.screenshot()](/docs/api/class-page#page-screenshot). Defaults to `"hide"`.
            
        -   `scale` "css" | "device" _(optional)_
            
            See [scale](/docs/api/class-page#page-screenshot-option-scale) in [page.screenshot()](/docs/api/class-page#page-screenshot). Defaults to `"css"`.
            
        -   `stylePath` [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type "string") | [Array](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array "Array")<[string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type "string")\> _(optional)_
            
            See [style](/docs/api/class-page#page-screenshot-option-style) in [page.screenshot()](/docs/api/class-page#page-screenshot).
            
        -   `pathTemplate` [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type "string") _(optional)_
            
            A template controlling location of the screenshots. See [testProject.snapshotPathTemplate](/docs/api/class-testproject#test-project-snapshot-path-template) for details.
            
        
        Configuration for the [expect(page).toHaveScreenshot()](/docs/api/class-pageassertions#page-assertions-to-have-screenshot-1) method.
        
    -   `toMatchAriaSnapshot` [Object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object "Object") _(optional)_
        
        -   `pathTemplate` [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type "string") _(optional)_
            
            A template controlling location of the aria snapshots. See [testProject.snapshotPathTemplate](/docs/api/class-testproject#test-project-snapshot-path-template) for details.
            
        
        Configuration for the [expect(locator).toMatchAriaSnapshot()](/docs/api/class-locatorassertions#locator-assertions-to-match-aria-snapshot-2) method.
        
    -   `toMatchSnapshot` [Object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object "Object") _(optional)_
        
        -   `threshold` [number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type "Number") _(optional)_
            
            an acceptable perceived color difference between the same pixel in compared images, ranging from `0` (strict) and `1` (lax). `"pixelmatch"` comparator computes color difference in [YIQ color space](https://en.wikipedia.org/wiki/YIQ) and defaults `threshold` value to `0.2`.
            
        -   `maxDiffPixels` [number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type "Number") _(optional)_
            
            an acceptable amount of pixels that could be different, unset by default.
            
        -   `maxDiffPixelRatio` [number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type "Number") _(optional)_
            
            an acceptable ratio of pixels that are different to the total amount of pixels, between `0` and `1` , unset by default.
            
        
        Configuration for the [expect(value).toMatchSnapshot()](/docs/api/class-snapshotassertions#snapshot-assertions-to-match-snapshot-1) method.
        
    -   `toPass` [Object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object "Object") _(optional)_
        
        -   `timeout` [number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type "Number") _(optional)_
            
            timeout for toPass method in milliseconds.
            
        -   `intervals` [Array](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array "Array")<[number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type "Number")\> _(optional)_
            
            probe intervals for toPass method in milliseconds.
            
        
        Configuration for the [expect(value).toPass()](/docs/test-assertions) method.
        

* * *

### fullyParallel[​](#test-project-fully-parallel "Direct link to fullyParallel")

Added in: v1.10 testProject.fullyParallel

Playwright Test runs tests in parallel. In order to achieve that, it runs several worker processes that run at the same time. By default, **test files** are run in parallel. Tests in a single file are run in order, in the same worker process.

You can configure entire test project to concurrently run all tests in all files using this option.

**Usage**

```
testProject.fullyParallel
```

**Type**

-   [boolean](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Boolean_type "Boolean")

* * *

### grep[​](#test-project-grep "Direct link to grep")

Added in: v1.10 testProject.grep

Filter to only run tests with a title matching one of the patterns. For example, passing `grep: /cart/` should only run tests with "cart" in the title. Also available globally and in the [command line](/docs/test-cli) with the `-g` option. The regular expression will be tested against the string that consists of the project name, the test file name, the `test.describe` name (if any), the test name and the test tags divided by spaces, e.g. `chromium my-test.spec.ts my-suite my-test`.

`grep` option is also useful for [tagging tests](/docs/test-annotations#tag-tests).

**Usage**

```
testProject.grep
```

**Type**

-   [RegExp](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp "RegExp") | [Array](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array "Array")<[RegExp](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp "RegExp")\>

* * *

### grepInvert[​](#test-project-grep-invert "Direct link to grepInvert")

Added in: v1.10 testProject.grepInvert

Filter to only run tests with a title **not** matching any of the patterns. This is the opposite of [testProject.grep](/docs/api/class-testproject#test-project-grep). Also available globally and in the [command line](/docs/test-cli) with the `--grep-invert` option.

`grepInvert` option is also useful for [tagging tests](/docs/test-annotations#tag-tests).

**Usage**

```
testProject.grepInvert
```

**Type**

-   [RegExp](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp "RegExp") | [Array](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array "Array")<[RegExp](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp "RegExp")\>

* * *

### ignoreSnapshots[​](#test-project-ignore-snapshots "Direct link to ignoreSnapshots")

Added in: v1.44 testProject.ignoreSnapshots

Whether to skip snapshot expectations, such as `expect(value).toMatchSnapshot()` and `await expect(page).toHaveScreenshot()`.

**Usage**

The following example will only perform screenshot assertions on Chromium.

playwright.config.ts

```
import { defineConfig } from '@playwright/test';export default defineConfig({  projects: [    {      name: 'chromium',      use: devices['Desktop Chrome'],    },    {      name: 'firefox',      use: devices['Desktop Firefox'],      ignoreSnapshots: true,    },    {      name: 'webkit',      use: devices['Desktop Safari'],      ignoreSnapshots: true,    },  ],});
```

**Type**

-   [boolean](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Boolean_type "Boolean")

* * *

### metadata[​](#test-project-metadata "Direct link to metadata")

Added in: v1.10 testProject.metadata

Metadata that will be put directly to the test report serialized as JSON.

**Usage**

```
testProject.metadata
```

**Type**

-   [Metadata](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object "Object<string, any>")

* * *

### name[​](#test-project-name "Direct link to name")

Added in: v1.10 testProject.name

Project name is visible in the report and during test execution.

warning

Playwright executes the configuration file multiple times. Do not dynamically produce non-stable values in your configuration.

**Usage**

```
testProject.name
```

**Type**

-   [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type "string")

* * *

### outputDir[​](#test-project-output-dir "Direct link to outputDir")

Added in: v1.10 testProject.outputDir

The output directory for files created during test execution. Defaults to `<package.json-directory>/test-results`.

This directory is cleaned at the start. When running a test, a unique subdirectory inside the [testProject.outputDir](/docs/api/class-testproject#test-project-output-dir) is created, guaranteeing that test running in parallel do not conflict. This directory can be accessed by [testInfo.outputDir](/docs/api/class-testinfo#test-info-output-dir) and [testInfo.outputPath()](/docs/api/class-testinfo#test-info-output-path).

Here is an example that uses [testInfo.outputPath()](/docs/api/class-testinfo#test-info-output-path) to create a temporary file.

```
import { test, expect } from '@playwright/test';import fs from 'fs';test('example test', async ({}, testInfo) => {  const file = testInfo.outputPath('temporary-file.txt');  await fs.promises.writeFile(file, 'Put some data to the file', 'utf8');});
```

Use [testConfig.outputDir](/docs/api/class-testconfig#test-config-output-dir) to change this option for all projects.

**Usage**

```
testProject.outputDir
```

**Type**

-   [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type "string")

* * *

### repeatEach[​](#test-project-repeat-each "Direct link to repeatEach")

Added in: v1.10 testProject.repeatEach

The number of times to repeat each test, useful for debugging flaky tests.

Use [testConfig.repeatEach](/docs/api/class-testconfig#test-config-repeat-each) to change this option for all projects.

**Usage**

```
testProject.repeatEach
```

**Type**

-   [number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type "Number")

* * *

### respectGitIgnore[​](#test-project-respect-git-ignore "Direct link to respectGitIgnore")

Added in: v1.45 testProject.respectGitIgnore

Whether to skip entries from `.gitignore` when searching for test files. By default, if neither [testConfig.testDir](/docs/api/class-testconfig#test-config-test-dir) nor [testProject.testDir](/docs/api/class-testproject#test-project-test-dir) are explicitly specified, Playwright will ignore any test files matching `.gitignore` entries. This option allows to override that behavior.

**Usage**

```
testProject.respectGitIgnore
```

**Type**

-   [boolean](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Boolean_type "Boolean")

* * *

### retries[​](#test-project-retries "Direct link to retries")

Added in: v1.10 testProject.retries

The maximum number of retry attempts given to failed tests. Learn more about [test retries](/docs/test-retries#retries).

Use [test.describe.configure()](/docs/api/class-test#test-describe-configure) to change the number of retries for a specific file or a group of tests.

Use [testConfig.retries](/docs/api/class-testconfig#test-config-retries) to change this option for all projects.

**Usage**

```
testProject.retries
```

**Type**

-   [number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type "Number")

* * *

### snapshotDir[​](#test-project-snapshot-dir "Direct link to snapshotDir")

Added in: v1.10 testProject.snapshotDir

The base directory, relative to the config file, for snapshot files created with `toMatchSnapshot`. Defaults to [testProject.testDir](/docs/api/class-testproject#test-project-test-dir).

The directory for each test can be accessed by [testInfo.snapshotDir](/docs/api/class-testinfo#test-info-snapshot-dir) and [testInfo.snapshotPath()](/docs/api/class-testinfo#test-info-snapshot-path).

This path will serve as the base directory for each test file snapshot directory. Setting `snapshotDir` to `'snapshots'`, the [testInfo.snapshotDir](/docs/api/class-testinfo#test-info-snapshot-dir) would resolve to `snapshots/a.spec.js-snapshots`.

**Usage**

```
testProject.snapshotDir
```

**Type**

-   [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type "string")

* * *

### snapshotPathTemplate[​](#test-project-snapshot-path-template "Direct link to snapshotPathTemplate")

Added in: v1.28 testProject.snapshotPathTemplate

This option configures a template controlling location of snapshots generated by [expect(page).toHaveScreenshot()](/docs/api/class-pageassertions#page-assertions-to-have-screenshot-1), [expect(locator).toMatchAriaSnapshot()](/docs/api/class-locatorassertions#locator-assertions-to-match-aria-snapshot-2) and [expect(value).toMatchSnapshot()](/docs/api/class-snapshotassertions#snapshot-assertions-to-match-snapshot-1).

You can configure templates for each assertion separately in [testConfig.expect](/docs/api/class-testconfig#test-config-expect).

**Usage**

playwright.config.ts

```
import { defineConfig } from '@playwright/test';export default defineConfig({  testDir: './tests',  // Single template for all assertions  snapshotPathTemplate: '{testDir}/__screenshots__/{testFilePath}/{arg}{ext}',  // Assertion-specific templates  expect: {    toHaveScreenshot: {      pathTemplate: '{testDir}/__screenshots__{/projectName}/{testFilePath}/{arg}{ext}',    },    toMatchAriaSnapshot: {      pathTemplate: '{testDir}/__snapshots__/{testFilePath}/{arg}{ext}',    },  },});
```

**Type**

-   [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type "string")

**Details**

The value might include some "tokens" that will be replaced with actual values during test execution.

Consider the following file structure:

```
playwright.config.tstests/└── page/    └── page-click.spec.ts
```

And the following `page-click.spec.ts` that uses `toHaveScreenshot()` call:

page-click.spec.ts

```
import { test, expect } from '@playwright/test';test.describe('suite', () => {  test('test should work', async ({ page }) => {    await expect(page).toHaveScreenshot(['foo', 'bar', 'baz.png']);  });});
```

The list of supported tokens:

-   `{arg}` - Relative snapshot path **without extension**. This comes from the arguments passed to `toHaveScreenshot()`, `toMatchAriaSnapshot()` or `toMatchSnapshot()`; if called without arguments, this will be an auto-generated snapshot name.
    -   Value: `foo/bar/baz`
-   `{ext}` - Snapshot extension (with the leading dot).
    -   Value: `.png`
-   `{platform}` - The value of `process.platform`.
-   `{projectName}` - Project's file-system-sanitized name, if any.
    -   Value: `''` (empty string).
-   `{snapshotDir}` - Project's [testProject.snapshotDir](/docs/api/class-testproject#test-project-snapshot-dir).
    -   Value: `/home/playwright/tests` (since `snapshotDir` is not provided in config, it defaults to `testDir`)
-   `{testDir}` - Project's [testProject.testDir](/docs/api/class-testproject#test-project-test-dir).
    -   Value: `/home/playwright/tests` (absolute path since `testDir` is resolved relative to directory with config)
-   `{testFileDir}` - Directories in relative path from `testDir` to **test file**.
    -   Value: `page`
-   `{testFileName}` - Test file name with extension.
    -   Value: `page-click.spec.ts`
-   `{testFilePath}` - Relative path from `testDir` to **test file**.
    -   Value: `page/page-click.spec.ts`
-   `{testName}` - File-system-sanitized test title, including parent describes but excluding file name.
    -   Value: `suite-test-should-work`

Each token can be preceded with a single character that will be used **only if** this token has non-empty value.

Consider the following config:

playwright.config.ts

```
import { defineConfig } from '@playwright/test';export default defineConfig({  snapshotPathTemplate: '__screenshots__{/projectName}/{testFilePath}/{arg}{ext}',  testMatch: 'example.spec.ts',  projects: [    { use: { browserName: 'firefox' } },    { name: 'chromium', use: { browserName: 'chromium' } },  ],});
```

In this config:

1.  First project **does not** have a name, so its snapshots will be stored in `<configDir>/__screenshots__/example.spec.ts/...`.
2.  Second project **does** have a name, so its snapshots will be stored in `<configDir>/__screenshots__/chromium/example.spec.ts/..`.
3.  Since `snapshotPathTemplate` resolves to relative path, it will be resolved relative to `configDir`.
4.  Forward slashes `"/"` can be used as path separators on any platform.

* * *

### teardown[​](#test-project-teardown "Direct link to teardown")

Added in: v1.34 testProject.teardown

Name of a project that needs to run after this and all dependent projects have finished. Teardown is useful to cleanup any resources acquired by this project.

Passing `--no-deps` argument ignores [testProject.teardown](/docs/api/class-testproject#test-project-teardown) and behaves as if it was not specified.

**Usage**

A common pattern is a "setup" dependency that has a corresponding "teardown":

playwright.config.ts

```
import { defineConfig } from '@playwright/test';export default defineConfig({  projects: [    {      name: 'setup',      testMatch: /global.setup\.ts/,      teardown: 'teardown',    },    {      name: 'teardown',      testMatch: /global.teardown\.ts/,    },    {      name: 'chromium',      use: devices['Desktop Chrome'],      dependencies: ['setup'],    },    {      name: 'firefox',      use: devices['Desktop Firefox'],      dependencies: ['setup'],    },    {      name: 'webkit',      use: devices['Desktop Safari'],      dependencies: ['setup'],    },  ],});
```

**Type**

-   [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type "string")

* * *

### testDir[​](#test-project-test-dir "Direct link to testDir")

Added in: v1.10 testProject.testDir

Directory that will be recursively scanned for test files. Defaults to the directory of the configuration file.

Each project can use a different directory. Here is an example that runs smoke tests in three browsers and all other tests in stable Chrome browser.

playwright.config.ts

```
import { defineConfig } from '@playwright/test';export default defineConfig({  projects: [    {      name: 'Smoke Chromium',      testDir: './smoke-tests',      use: {        browserName: 'chromium',      }    },    {      name: 'Smoke WebKit',      testDir: './smoke-tests',      use: {        browserName: 'webkit',      }    },    {      name: 'Smoke Firefox',      testDir: './smoke-tests',      use: {        browserName: 'firefox',      }    },    {      name: 'Chrome Stable',      testDir: './',      use: {        browserName: 'chromium',        channel: 'chrome',      }    },  ],});
```

Use [testConfig.testDir](/docs/api/class-testconfig#test-config-test-dir) to change this option for all projects.

**Usage**

```
testProject.testDir
```

**Type**

-   [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type "string")

* * *

### testIgnore[​](#test-project-test-ignore "Direct link to testIgnore")

Added in: v1.10 testProject.testIgnore

Files matching one of these patterns are not executed as test files. Matching is performed against the absolute file path. Strings are treated as glob patterns.

For example, `'**/test-assets/**'` will ignore any files in the `test-assets` directory.

Use [testConfig.testIgnore](/docs/api/class-testconfig#test-config-test-ignore) to change this option for all projects.

**Usage**

```
testProject.testIgnore
```

**Type**

-   [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type "string") | [RegExp](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp "RegExp") | [Array](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array "Array")<[string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type "string") | [RegExp](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp "RegExp")\>

* * *

### testMatch[​](#test-project-test-match "Direct link to testMatch")

Added in: v1.10 testProject.testMatch

Only the files matching one of these patterns are executed as test files. Matching is performed against the absolute file path. Strings are treated as glob patterns.

By default, Playwright looks for files matching the following glob pattern: `**/*.@(spec|test).?(c|m)[jt]s?(x)`. This means JavaScript or TypeScript files with `".test"` or `".spec"` suffix, for example `login-screen.wrong-credentials.spec.ts`.

Use [testConfig.testMatch](/docs/api/class-testconfig#test-config-test-match) to change this option for all projects.

**Usage**

```
testProject.testMatch
```

**Type**

-   [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type "string") | [RegExp](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp "RegExp") | [Array](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array "Array")<[string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type "string") | [RegExp](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp "RegExp")\>

* * *

### timeout[​](#test-project-timeout "Direct link to timeout")

Added in: v1.10 testProject.timeout

Timeout for each test in milliseconds. Defaults to 30 seconds.

This is a base timeout for all tests. Each test can configure its own timeout with [test.setTimeout()](/docs/api/class-test#test-set-timeout). Each file or a group of tests can configure the timeout with [test.describe.configure()](/docs/api/class-test#test-describe-configure).

Use [testConfig.timeout](/docs/api/class-testconfig#test-config-timeout) to change this option for all projects.

**Usage**

```
testProject.timeout
```

**Type**

-   [number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type "Number")

* * *

### use[​](#test-project-use "Direct link to use")

Added in: v1.10 testProject.use

Options for all tests in this project, for example [testOptions.browserName](/docs/api/class-testoptions#test-options-browser-name). Learn more about [configuration](/docs/test-configuration) and see [available options](/docs/api/class-testoptions "TestOptions").

playwright.config.ts

```
import { defineConfig } from '@playwright/test';export default defineConfig({  projects: [    {      name: 'Chromium',      use: {        browserName: 'chromium',      },    },  ],});
```

Use [testConfig.use](/docs/api/class-testconfig#test-config-use) to change this option for all projects.

**Usage**

```
testProject.use
```

**Type**

-   [TestOptions](/docs/api/class-testoptions "TestOptions")

* * *

### workers[​](#test-project-workers "Direct link to workers")

Added in: v1.52 testProject.workers

The maximum number of concurrent worker processes to use for parallelizing tests from this project. Can also be set as percentage of logical CPU cores, e.g. `'50%'.`

This could be useful, for example, when all tests from a project share a single resource like a test account, and therefore cannot be executed in parallel. Limiting workers to one for such a project will prevent simultaneous use of the shared resource.

Note that the global [testConfig.workers](/docs/api/class-testconfig#test-config-workers) limit applies to the total number of worker processes. However, Playwright will limit the number of workers used for this project by the value of [testProject.workers](/docs/api/class-testproject#test-project-workers).

By default, there is no limit per project. See [testConfig.workers](/docs/api/class-testconfig#test-config-workers) for the default of the total worker limit.

**Usage**

playwright.config.ts

```
import { defineConfig } from '@playwright/test';export default defineConfig({  workers: 10,  // total workers limit  projects: [    {      name: 'runs in parallel',    },    {      name: 'one at a time',      workers: 1,  // workers limit for this project    },  ],});
```

**Type**

-   [number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type "Number") | [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type "string")
