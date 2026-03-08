On this page

Playwright Test has multiple configurable timeouts for various tasks.

Timeout

Default

Description

Test timeout

30\_000 ms

Timeout for each test  
Set in config  
`{ timeout: 60_000 }`  
Override in test  
`test.setTimeout(120_000)`

Expect timeout

5\_000 ms

Timeout for each assertion  
Set in config  
`{ expect: { timeout: 10_000 } }`  
Override in test  
`expect(locator).toBeVisible({ timeout: 10_000 })`

## Test timeout[​](#test-timeout "Direct link to Test timeout")

Playwright Test enforces a timeout for each test, 30 seconds by default. Time spent by the test function, fixture setups, and `beforeEach` hooks is included in the test timeout.

Timed out test produces the following error:

```
example.spec.ts:3:1 › basic test ===========================Timeout of 30000ms exceeded.
```

Additional separate timeout, of the same value, is shared between fixture teardowns and `afterEach` hooks, after the test function has finished.

The same timeout value also applies to `beforeAll` and `afterAll` hooks, but they do not share time with any test.

### Set test timeout in the config[​](#set-test-timeout-in-the-config "Direct link to Set test timeout in the config")

playwright.config.ts

```
import { defineConfig } from '@playwright/test';export default defineConfig({  timeout: 120_000,});
```

API reference: [testConfig.timeout](/docs/api/class-testconfig#test-config-timeout).

### Set timeout for a single test[​](#set-timeout-for-a-single-test "Direct link to Set timeout for a single test")

example.spec.ts

```
import { test, expect } from '@playwright/test';test('slow test', async ({ page }) => {  test.slow(); // Easy way to triple the default timeout  // ...});test('very slow test', async ({ page }) => {  test.setTimeout(120_000);  // ...});
```

API reference: [test.setTimeout()](/docs/api/class-test#test-set-timeout) and [test.slow()](/docs/api/class-test#test-slow).

### Change timeout from a `beforeEach` hook[​](#change-timeout-from-a-beforeeach-hook "Direct link to change-timeout-from-a-beforeeach-hook")

example.spec.ts

```
import { test, expect } from '@playwright/test';test.beforeEach(async ({ page }, testInfo) => {  // Extend timeout for all tests running this hook by 30 seconds.  testInfo.setTimeout(testInfo.timeout + 30_000);});
```

API reference: [testInfo.setTimeout()](/docs/api/class-testinfo#test-info-set-timeout).

### Change timeout for `beforeAll`/`afterAll` hook[​](#change-timeout-for-beforeallafterall-hook "Direct link to change-timeout-for-beforeallafterall-hook")

`beforeAll` and `afterAll` hooks have a separate timeout, by default equal to test timeout. You can change it separately for each hook by calling [testInfo.setTimeout()](/docs/api/class-testinfo#test-info-set-timeout) inside the hook.

example.spec.ts

```
import { test, expect } from '@playwright/test';test.beforeAll(async () => {  // Set timeout for this hook.  test.setTimeout(60000);});
```

API reference: [testInfo.setTimeout()](/docs/api/class-testinfo#test-info-set-timeout).

## Expect timeout[​](#expect-timeout "Direct link to Expect timeout")

Auto-retrying assertions like [expect(locator).toHaveText()](/docs/api/class-locatorassertions#locator-assertions-to-have-text) have a separate timeout, 5 seconds by default. Assertion timeout is unrelated to the test timeout. It produces the following error:

```
example.spec.ts:3:1 › basic test ===========================Error: expect(received).toHaveText(expected)Expected string: "my text"Received string: ""Call log:  - expect.toHaveText with timeout 5000ms  - waiting for "locator('button')"
```

### Set expect timeout in the config[​](#set-expect-timeout-in-the-config "Direct link to Set expect timeout in the config")

playwright.config.ts

```
import { defineConfig } from '@playwright/test';export default defineConfig({  expect: {    timeout: 10_000,  },});
```

API reference: [testConfig.expect](/docs/api/class-testconfig#test-config-expect).

### Specify expect timeout for a single assertion[​](#specify-expect-timeout-for-a-single-assertion "Direct link to Specify expect timeout for a single assertion")

example.spec.ts

```
import { test, expect } from '@playwright/test';test('example', async ({ page }) => {  await expect(locator).toHaveText('hello', { timeout: 10_000 });});
```

## Global timeout[​](#global-timeout "Direct link to Global timeout")

Playwright Test supports a timeout for the whole test run. This prevents excess resource usage when everything went wrong. There is no default global timeout, but you can set a reasonable one in the config, for example one hour. Global timeout produces the following error:

```
Running 1000 tests using 10 workers  514 skipped  486 passed  Timed out waiting 3600s for the entire test run
```

You can set global timeout in the config.

playwright.config.ts

```
import { defineConfig } from '@playwright/test';export default defineConfig({  globalTimeout: 3_600_000,});
```

API reference: [testConfig.globalTimeout](/docs/api/class-testconfig#test-config-global-timeout).

## Advanced: low level timeouts[​](#advanced-low-level-timeouts "Direct link to Advanced: low level timeouts")

These are the low-level timeouts that are pre-configured by the test runner, you should not need to change these. If you happen to be in this section because your test are flaky, it is very likely that you should be looking for the solution elsewhere.

Timeout

Default

Description

Action timeout

no timeout

Timeout for each action  
Set in config  
`{ use: { actionTimeout: 10_000 } }`  
Override in test  
`locator.click({ timeout: 10_000 })`

Navigation timeout

no timeout

Timeout for each navigation action  
Set in config  
`{ use: { navigationTimeout: 30_000 } }`  
Override in test  
`page.goto('/', { timeout: 30_000 })`

Global timeout

no timeout

Global timeout for the whole test run  
Set in config  
`{ globalTimeout: 3_600_000 }`  

`beforeAll`/`afterAll` timeout

30\_000 ms

Timeout for the hook  
Set in hook  
`test.setTimeout(60_000)`  

Fixture timeout

no timeout

Timeout for an individual fixture  
Set in fixture  
`{ scope: 'test', timeout: 30_000 }`  

### Set action and navigation timeouts in the config[​](#set-action-and-navigation-timeouts-in-the-config "Direct link to Set action and navigation timeouts in the config")

playwright.config.ts

```
import { defineConfig } from '@playwright/test';export default defineConfig({  use: {    actionTimeout: 10 * 1000,    navigationTimeout: 30 * 1000,  },});
```

API reference: [testOptions.actionTimeout](/docs/api/class-testoptions#test-options-action-timeout) and [testOptions.navigationTimeout](/docs/api/class-testoptions#test-options-navigation-timeout).

### Set timeout for a single action[​](#set-timeout-for-a-single-action "Direct link to Set timeout for a single action")

example.spec.ts

```
import { test, expect } from '@playwright/test';test('basic test', async ({ page }) => {  await page.goto('https://playwright.dev', { timeout: 30000 });  await page.getByText('Get Started').click({ timeout: 10000 });});
```

## Fixture timeout[​](#fixture-timeout "Direct link to Fixture timeout")

By default, [fixture](/docs/test-fixtures) shares timeout with the test. However, for slow fixtures, especially [worker-scoped](/docs/test-fixtures#worker-scoped-fixtures) ones, it is convenient to have a separate timeout. This way you can keep the overall test timeout small, and give the slow fixture more time.

example.spec.ts

```
import { test as base, expect } from '@playwright/test';const test = base.extend<{ slowFixture: string }>({  slowFixture: [async ({}, use) => {    // ... perform a slow operation ...    await use('hello');  }, { timeout: 60_000 }]});test('example test', async ({ slowFixture }) => {  // ...});
```

API reference: [test.extend()](/docs/api/class-test#test-extend).
