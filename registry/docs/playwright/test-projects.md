On this page

## Introduction[​](#introduction "Direct link to Introduction")

A project is logical group of tests running with the same configuration. We use projects so we can run tests on different browsers and devices. Projects are configured in the `playwright.config.ts` file and once configured you can then run your tests on all projects or only on a specific project. You can also use projects to run the same tests in different configurations. For example, you can run the same tests in a logged-in and logged-out state.

By setting up projects you can also run a group of tests with different timeouts or retries or a group of tests against different environments such as staging and production, splitting tests per package/functionality and more.

## Configure projects for multiple browsers[​](#configure-projects-for-multiple-browsers "Direct link to Configure projects for multiple browsers")

By using **projects** you can run your tests in multiple browsers such as chromium, webkit and firefox as well as branded browsers such as Google Chrome and Microsoft Edge. Playwright can also run on emulated tablet and mobile devices. See the [registry of device parameters](https://github.com/microsoft/playwright/blob/main/packages/playwright-core/src/server/deviceDescriptorsSource.json) for a complete list of selected desktop, tablet and mobile devices.

```
import { defineConfig, devices } from '@playwright/test';export default defineConfig({  projects: [    {      name: 'chromium',      use: { ...devices['Desktop Chrome'] },    },    {      name: 'firefox',      use: { ...devices['Desktop Firefox'] },    },    {      name: 'webkit',      use: { ...devices['Desktop Safari'] },    },    /* Test against mobile viewports. */    {      name: 'Mobile Chrome',      use: { ...devices['Pixel 5'] },    },    {      name: 'Mobile Safari',      use: { ...devices['iPhone 12'] },    },    /* Test against branded browsers. */    {      name: 'Microsoft Edge',      use: {        ...devices['Desktop Edge'],        channel: 'msedge'      },    },    {      name: 'Google Chrome',      use: {        ...devices['Desktop Chrome'],        channel: 'chrome'      },    },  ],});
```

## Run projects[​](#run-projects "Direct link to Run projects")

Playwright will run all projects by default.

```
npx playwright testRunning 7 tests using 5 workers  ✓ [chromium] › example.spec.ts:3:1 › basic test (2s)  ✓ [firefox] › example.spec.ts:3:1 › basic test (2s)  ✓ [webkit] › example.spec.ts:3:1 › basic test (2s)  ✓ [Mobile Chrome] › example.spec.ts:3:1 › basic test (2s)  ✓ [Mobile Safari] › example.spec.ts:3:1 › basic test (2s)  ✓ [Microsoft Edge] › example.spec.ts:3:1 › basic test (2s)  ✓ [Google Chrome] › example.spec.ts:3:1 › basic test (2s)
```

Use the `--project` command line option to run a single project.

```
npx playwright test --project=firefoxRunning 1 test using 1 worker  ✓ [firefox] › example.spec.ts:3:1 › basic test (2s)
```

The VS Code test runner runs your tests on the default browser of Chrome. To run on other/multiple browsers click the play button's dropdown from the testing sidebar and choose another profile or modify the default profile by clicking **Select Default Profile** and select the browsers you wish to run your tests on.

![selecting browsers](https://user-images.githubusercontent.com/13063165/221136731-9d4bc18f-38a4-4adb-997b-5b98c98aec7f.png)

Choose a specific profile, various profiles or all profiles to run tests on.

![choosing default profiles](https://user-images.githubusercontent.com/13063165/221669537-e5df8672-f50d-4ff1-96f9-141cd67e12f8.png)

## Configure projects for multiple environments[​](#configure-projects-for-multiple-environments "Direct link to Configure projects for multiple environments")

By setting up projects we can also run a group of tests with different timeouts or retries or run a group of tests against different environments. For example we can run our tests against a staging environment with 2 retries as well as against a production environment with 0 retries.

playwright.config.ts

```
import { defineConfig } from '@playwright/test';export default defineConfig({  timeout: 60000, // Timeout is shared between all tests.  projects: [    {      name: 'staging',      use: {        baseURL: 'staging.example.com',      },      retries: 2,    },    {      name: 'production',      use: {        baseURL: 'production.example.com',      },      retries: 0,    },  ],});
```

## Splitting tests into projects[​](#splitting-tests-into-projects "Direct link to Splitting tests into projects")

We can split tests into projects and use filters to run a subset of tests. For example, we can create a project that runs tests using a filter matching all tests with a specific file name. We can then have another group of tests that ignore specific test files.

Here is an example that defines a common timeout and two projects. The "Smoke" project runs a small subset of tests without retries, and "Default" project runs all other tests with retries.

playwright.config.ts

```
import { defineConfig } from '@playwright/test';export default defineConfig({  timeout: 60000, // Timeout is shared between all tests.  projects: [    {      name: 'Smoke',      testMatch: /.*smoke.spec.ts/,      retries: 0,    },    {      name: 'Default',      testIgnore: /.*smoke.spec.ts/,      retries: 2,    },  ],});
```

## Dependencies[​](#dependencies "Direct link to Dependencies")

Dependencies are a list of projects that need to run before the tests in another project run. They can be useful for configuring the global setup actions so that one project depends on this running first. When using project dependencies, [test reporters](/docs/test-reporters) will show the setup tests and the [trace viewer](/docs/trace-viewer) will record traces of the setup. You can use the inspector to inspect the DOM snapshot of the trace of your setup tests and you can also use [fixtures](/docs/test-fixtures) inside your setup.

In this example the chromium, firefox and webkit projects depend on the setup project.

playwright.config.ts

```
import { defineConfig, devices } from '@playwright/test';export default defineConfig({  projects: [    {      name: 'setup',      testMatch: '**/*.setup.ts',    },    {      name: 'chromium',      use: { ...devices['Desktop Chrome'] },      dependencies: ['setup'],    },    {      name: 'firefox',      use: { ...devices['Desktop Firefox'] },      dependencies: ['setup'],    },    {      name: 'webkit',      use: { ...devices['Desktop Safari'] },      dependencies: ['setup'],    },  ],});
```

### Running Sequence[​](#running-sequence "Direct link to Running Sequence")

When working with tests that have a dependency, the dependency will always run first and once all tests from this project have passed, then the other projects will run in parallel.

Running order:

1.  Tests in the 'setup' project run. Once all tests from this project have passed, then the tests from the dependent projects will start running.
    
2.  Tests in the 'chromium', 'webkit' and 'firefox' projects run together. By default, these projects will [run in parallel](/docs/test-parallel), subject to the maximum workers limit.
    

![chromium, webkit and firefox projects depend on setup project](https://user-images.githubusercontent.com/13063165/225937080-327b1e63-431f-40e0-90d7-35f21d7a92cb.jpg)

If there are more than one dependency then these project dependencies will be run first and in parallel. If the tests from a dependency fails then the tests that rely on this project will not be run.

Running order:

1.  Tests in the 'Browser Login' and 'DataBase' projects run in parallel:
    -   'Browser Login' passes
    -   ❌ 'DataBase' fails!
2.  The 'e2e tests' project is not run!

![Browser login project is blue, database is red and e2e tests relies on both](https://user-images.githubusercontent.com/13063165/225938262-33c1b78f-f092-4762-a478-7f8cbc1e3b21.jpg)

### Teardown[​](#teardown "Direct link to Teardown")

You can also teardown your setup by adding a [testProject.teardown](/docs/api/class-testproject#test-project-teardown) property to your setup project. Teardown will run after all dependent projects have run. See the [teardown guide](/docs/test-global-setup-teardown#teardown) for more information.

![global setup and teardown](https://github.com/microsoft/playwright/assets/13063165/dfcf10a9-f601-4d0c-bd8d-9490e6efbf7a)

### Test filtering[​](#test-filtering "Direct link to Test filtering")

All test filtering options, such as `--grep`/`--grep-invert`, `--shard`, filtering directly by location in the command line, or using [`test.only()`](/docs/api/class-test#test-only), directly select the primary tests to be run. If those tests belong to a project with dependencies, all tests from those dependencies will also run.

You can pass `--no-deps` command line option to ignore all dependencies and teardowns. Only your directly selected projects will run.

## Custom project parameters[​](#custom-project-parameters "Direct link to Custom project parameters")

Projects can be also used to parametrize tests with your custom configuration - take a look at [this separate guide](/docs/test-parameterize#parameterized-projects).
