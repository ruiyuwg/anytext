On this page

Playwright Test provides a `test` function to declare tests and `expect` function to write assertions.

```
import { test, expect } from '@playwright/test';test('basic test', async ({ page }) => {  await page.goto('https://playwright.dev/');  const name = await page.innerText('.navbar__title');  expect(name).toBe('Playwright');});
```

* * *

## Methods[​](#methods "Direct link to Methods")

### test[​](#test-call "Direct link to test")

Added in: v1.10 test.test

Declares a test.

-   `test(title, body)`
-   `test(title, details, body)`

**Usage**

```
import { test, expect } from '@playwright/test';test('basic test', async ({ page }) => {  await page.goto('https://playwright.dev/');  // ...});
```

**Tags**

You can tag tests by providing additional test details. Alternatively, you can include tags in the test title. Note that each tag must start with `@` symbol.

```
import { test, expect } from '@playwright/test';test('basic test', {  tag: '@smoke',}, async ({ page }) => {  await page.goto('https://playwright.dev/');  // ...});test('another test @smoke', async ({ page }) => {  await page.goto('https://playwright.dev/');  // ...});
```

Test tags are displayed in the test report, and are available to a custom reporter via `TestCase.tags` property.

You can also filter tests by their tags during test execution:

-   in the [command line](/docs/test-cli#all-options);
-   in the config with [testConfig.grep](/docs/api/class-testconfig#test-config-grep) and [testProject.grep](/docs/api/class-testproject#test-project-grep);

Learn more about [tagging](/docs/test-annotations#tag-tests).

**Annotations**

You can annotate tests by providing additional test details.

```
import { test, expect } from '@playwright/test';test('basic test', {  annotation: {    type: 'issue',    description: 'https://github.com/microsoft/playwright/issues/23180',  },}, async ({ page }) => {  await page.goto('https://playwright.dev/');  // ...});
```

Test annotations are displayed in the test report, and are available to a custom reporter via `TestCase.annotations` property.

You can also add annotations during runtime by manipulating [testInfo.annotations](/docs/api/class-testinfo#test-info-annotations).

Learn more about [test annotations](/docs/test-annotations).

**Arguments**

-   `title` [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type "string")[#](#test-call-option-title)
    
    Test title.
    
-   `details` [Object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object "Object") _(optional)_ Added in: v1.42[#](#test-call-option-details)
    
    -   `tag` [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type "string") | [Array](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array "Array")<[string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type "string")\> _(optional)_
        
    -   `annotation` [Object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object "Object") | [Array](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array "Array")<[Object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object "Object")\> _(optional)_
        
        -   `type` [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type "string")
            
            Annotation type, for example `'issue'`.
            
        -   `description` [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type "string") _(optional)_
            
            Optional annotation description, for example an issue url.
            
    
    Additional test details.
    
-   `body` [function](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function "Function")([Fixtures](/docs/api/class-fixtures "Fixtures"), [TestInfo](/docs/api/class-testinfo "TestInfo"))[#](#test-call-option-body)
    
    Test body that takes one or two arguments: an object with fixtures and optional [TestInfo](/docs/api/class-testinfo "TestInfo").
    

* * *

### test.afterAll[​](#test-after-all "Direct link to test.afterAll")

Added in: v1.10 test.test.afterAll

Declares an `afterAll` hook that is executed once per worker after all tests.

When called in the scope of a test file, runs after all tests in the file. When called inside a [test.describe()](/docs/api/class-test#test-describe) group, runs after all tests in the group.

**Usage**

```
test.afterAll(async () => {  console.log('Done with tests');  // ...});
```

Alternatively, you can declare a hook **with a title**.

```
test.afterAll('Teardown', async () => {  console.log('Done with tests');  // ...});
```

**Arguments**

-   `title` [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type "string") _(optional)_ Added in: v1.38[#](#test-after-all-option-title)
    
    Hook title.
    
-   `hookFunction` [function](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function "Function")([Fixtures](/docs/api/class-fixtures "Fixtures"), [TestInfo](/docs/api/class-testinfo "TestInfo"))[#](#test-after-all-option-hook-function)
    
    Hook function that takes one or two arguments: an object with worker fixtures and optional [TestInfo](/docs/api/class-testinfo "TestInfo").
    

**Details**

When multiple `afterAll` hooks are added, they will run in the order of their registration.

Note that worker process is restarted on test failures, and `afterAll` hook runs again in the new worker. Learn more about [workers and failures](/docs/test-retries).

Playwright will continue running all applicable hooks even if some of them have failed.

-   `test.afterAll(hookFunction)`
-   `test.afterAll(title, hookFunction)`

* * *

### test.afterEach[​](#test-after-each "Direct link to test.afterEach")

Added in: v1.10 test.test.afterEach

Declares an `afterEach` hook that is executed after each test.

When called in the scope of a test file, runs after each test in the file. When called inside a [test.describe()](/docs/api/class-test#test-describe) group, runs after each test in the group.

You can access all the same [Fixtures](/docs/api/class-fixtures "Fixtures") as the test body itself, and also the [TestInfo](/docs/api/class-testinfo "TestInfo") object that gives a lot of useful information. For example, you can check whether the test succeeded or failed.

-   `test.afterEach(hookFunction)`
-   `test.afterEach(title, hookFunction)`

**Usage**

example.spec.ts

```
import { test, expect } from '@playwright/test';test.afterEach(async ({ page }) => {  console.log(`Finished ${test.info().title} with status ${test.info().status}`);  if (test.info().status !== test.info().expectedStatus)    console.log(`Did not run as expected, ended up at ${page.url()}`);});test('my test', async ({ page }) => {  // ...});
```

Alternatively, you can declare a hook **with a title**.

example.spec.ts

```
test.afterEach('Status check', async ({ page }) => {  if (test.info().status !== test.info().expectedStatus)    console.log(`Did not run as expected, ended up at ${page.url()}`);});
```

**Arguments**

-   `title` [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type "string") _(optional)_ Added in: v1.38[#](#test-after-each-option-title)
    
    Hook title.
    
-   `hookFunction` [function](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function "Function")([Fixtures](/docs/api/class-fixtures "Fixtures"), [TestInfo](/docs/api/class-testinfo "TestInfo"))[#](#test-after-each-option-hook-function)
    
    Hook function that takes one or two arguments: an object with fixtures and optional [TestInfo](/docs/api/class-testinfo "TestInfo").
    

**Details**

When multiple `afterEach` hooks are added, they will run in the order of their registration.

Playwright will continue running all applicable hooks even if some of them have failed.

* * *

### test.beforeAll[​](#test-before-all "Direct link to test.beforeAll")

Added in: v1.10 test.test.beforeAll

Declares a `beforeAll` hook that is executed once per worker process before all tests.

When called in the scope of a test file, runs before all tests in the file. When called inside a [test.describe()](/docs/api/class-test#test-describe) group, runs before all tests in the group.

You can use [test.afterAll()](/docs/api/class-test#test-after-all) to teardown any resources set up in `beforeAll`.

-   `test.beforeAll(hookFunction)`
-   `test.beforeAll(title, hookFunction)`

**Usage**

example.spec.ts

```
import { test, expect } from '@playwright/test';test.beforeAll(async () => {  console.log('Before tests');});test.afterAll(async () => {  console.log('After tests');});test('my test', async ({ page }) => {  // ...});
```

Alternatively, you can declare a hook **with a title**.

example.spec.ts

```
test.beforeAll('Setup', async () => {  console.log('Before tests');});
```

**Arguments**

-   `title` [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type "string") _(optional)_ Added in: v1.38[#](#test-before-all-option-title)
    
    Hook title.
    
-   `hookFunction` [function](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function "Function")([Fixtures](/docs/api/class-fixtures "Fixtures"), [TestInfo](/docs/api/class-testinfo "TestInfo"))[#](#test-before-all-option-hook-function)
    
    Hook function that takes one or two arguments: an object with worker fixtures and optional [TestInfo](/docs/api/class-testinfo "TestInfo").
    

**Details**

When multiple `beforeAll` hooks are added, they will run in the order of their registration.

Note that worker process is restarted on test failures, and `beforeAll` hook runs again in the new worker. Learn more about [workers and failures](/docs/test-retries).

Playwright will continue running all applicable hooks even if some of them have failed.

* * *

### test.beforeEach[​](#test-before-each "Direct link to test.beforeEach")

Added in: v1.10 test.test.beforeEach

Declares a `beforeEach` hook that is executed before each test.

When called in the scope of a test file, runs before each test in the file. When called inside a [test.describe()](/docs/api/class-test#test-describe) group, runs before each test in the group.

You can access all the same [Fixtures](/docs/api/class-fixtures "Fixtures") as the test body itself, and also the [TestInfo](/docs/api/class-testinfo "TestInfo") object that gives a lot of useful information. For example, you can navigate the page before starting the test.

You can use [test.afterEach()](/docs/api/class-test#test-after-each) to teardown any resources set up in `beforeEach`.

-   `test.beforeEach(hookFunction)`
-   `test.beforeEach(title, hookFunction)`

**Usage**

example.spec.ts

```
import { test, expect } from '@playwright/test';test.beforeEach(async ({ page }) => {  console.log(`Running ${test.info().title}`);  await page.goto('https://my.start.url/');});test('my test', async ({ page }) => {  expect(page.url()).toBe('https://my.start.url/');});
```

Alternatively, you can declare a hook **with a title**.

example.spec.ts

```
test.beforeEach('Open start URL', async ({ page }) => {  console.log(`Running ${test.info().title}`);  await page.goto('https://my.start.url/');});
```

**Arguments**

-   `title` [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type "string") _(optional)_ Added in: v1.38[#](#test-before-each-option-title)
    
    Hook title.
    
-   `hookFunction` [function](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function "Function")([Fixtures](/docs/api/class-fixtures "Fixtures"), [TestInfo](/docs/api/class-testinfo "TestInfo"))[#](#test-before-each-option-hook-function)
    
    Hook function that takes one or two arguments: an object with fixtures and optional [TestInfo](/docs/api/class-testinfo "TestInfo").
    

**Details**

When multiple `beforeEach` hooks are added, they will run in the order of their registration.

Playwright will continue running all applicable hooks even if some of them have failed.

* * *

### test.describe[​](#test-describe "Direct link to test.describe")

Added in: v1.10 test.test.describe

Declares a group of tests.

-   `test.describe(title, callback)`
-   `test.describe(callback)`
-   `test.describe(title, details, callback)`

**Usage**

You can declare a group of tests with a title. The title will be visible in the test report as a part of each test's title.

```
test.describe('two tests', () => {  test('one', async ({ page }) => {    // ...  });  test('two', async ({ page }) => {    // ...  });});
```

**Anonymous group**

You can also declare a test group without a title. This is convenient to give a group of tests a common option with [test.use()](/docs/api/class-test#test-use).

```
test.describe(() => {  test.use({ colorScheme: 'dark' });  test('one', async ({ page }) => {    // ...  });  test('two', async ({ page }) => {    // ...  });});
```

**Tags**

You can tag all tests in a group by providing additional details. Note that each tag must start with `@` symbol.

```
import { test, expect } from '@playwright/test';test.describe('two tagged tests', {  tag: '@smoke',}, () => {  test('one', async ({ page }) => {    // ...  });  test('two', async ({ page }) => {    // ...  });});
```

Learn more about [tagging](/docs/test-annotations#tag-tests).

**Annotations**

You can annotate all tests in a group by providing additional details.

```
import { test, expect } from '@playwright/test';test.describe('two annotated tests', {  annotation: {    type: 'issue',    description: 'https://github.com/microsoft/playwright/issues/23180',  },}, () => {  test('one', async ({ page }) => {    // ...  });  test('two', async ({ page }) => {    // ...  });});
```

Learn more about [test annotations](/docs/test-annotations).

**Arguments**

-   `title` [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type "string") _(optional)_[#](#test-describe-option-title)
    
    Group title.
    
-   `details` [Object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object "Object") _(optional)_ Added in: v1.42[#](#test-describe-option-details)
    
    -   `tag` [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type "string") | [Array](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array "Array")<[string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type "string")\> _(optional)_
        
    -   `annotation` [Object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object "Object") | [Array](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array "Array")<[Object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object "Object")\> _(optional)_
        
        -   `type` [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type "string")
            
        -   `description` [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type "string") _(optional)_
            
    
    Additional details for all tests in the group.
    
-   `callback` [function](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function "Function")[#](#test-describe-option-callback)
    
    A callback that is run immediately when calling [test.describe()](/docs/api/class-test#test-describe). Any tests declared in this callback will belong to the group.
    

* * *

### test.describe.configure[​](#test-describe-configure "Direct link to test.describe.configure")

Added in: v1.10 test.test.describe.configure

Configures the enclosing scope. Can be executed either on the top level or inside a describe. Configuration applies to the entire scope, regardless of whether it run before or after the test declaration.

Learn more about the execution modes [here](/docs/test-parallel).

**Usage**

-   Running tests in parallel.
    
    ```
    // Run all the tests in the file concurrently using parallel workers.test.describe.configure({ mode: 'parallel' });test('runs in parallel 1', async ({ page }) => {});test('runs in parallel 2', async ({ page }) => {});
    ```
    
-   Running tests in order, retrying each failed test independently.
    
    This is the default mode. It can be useful to set it explicitly to override project configuration that uses `fullyParallel`.
    
    ```
    // Tests in this file run in order. Retries, if any, run independently.test.describe.configure({ mode: 'default' });test('runs first', async ({ page }) => {});test('runs second', async ({ page }) => {});
    ```
    
-   Running tests serially, retrying from the start. If one of the serial tests fails, all subsequent tests are skipped.
    
    note
    
    Running serially is not recommended. It is usually better to make your tests isolated, so they can be run independently.
    
    ```
    // Annotate tests as inter-dependent.test.describe.configure({ mode: 'serial' });test('runs first', async ({ page }) => {});test('runs second', async ({ page }) => {});
    ```
    
-   Configuring retries and timeout for each test.
    
    ```
    // Each test in the file will be retried twice and have a timeout of 20 seconds.test.describe.configure({ retries: 2, timeout: 20_000 });test('runs first', async ({ page }) => {});test('runs second', async ({ page }) => {});
    ```
    
-   Run multiple describes in parallel, but tests inside each describe in order.
    
    ```
    test.describe.configure({ mode: 'parallel' });test.describe('A, runs in parallel with B', () => {  test.describe.configure({ mode: 'default' });  test('in order A1', async ({ page }) => {});  test('in order A2', async ({ page }) => {});});test.describe('B, runs in parallel with A', () => {  test.describe.configure({ mode: 'default' });  test('in order B1', async ({ page }) => {});  test('in order B2', async ({ page }) => {});});
    ```
    

**Arguments**

-   `options` [Object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object "Object") _(optional)_
    -   `mode` "default" | "parallel" | "serial" _(optional)_[#](#test-describe-configure-option-mode)
        
        Execution mode. Learn more about the execution modes [here](/docs/test-parallel).
        
    -   `retries` [number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type "Number") _(optional)_ Added in: v1.28[#](#test-describe-configure-option-retries)
        
        The number of retries for each test.
        
    -   `timeout` [number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type "Number") _(optional)_ Added in: v1.28[#](#test-describe-configure-option-timeout)
        
        Timeout for each test in milliseconds. Overrides [testProject.timeout](/docs/api/class-testproject#test-project-timeout) and [testConfig.timeout](/docs/api/class-testconfig#test-config-timeout).
        

* * *

### test.describe.fixme[​](#test-describe-fixme "Direct link to test.describe.fixme")

Added in: v1.25 test.test.describe.fixme

Declares a test group similarly to [test.describe()](/docs/api/class-test#test-describe). Tests in this group are marked as "fixme" and will not be executed.

-   `test.describe.fixme(title, callback)`
-   `test.describe.fixme(callback)`
-   `test.describe.fixme(title, details, callback)`

**Usage**

```
test.describe.fixme('broken tests that should be fixed', () => {  test('example', async ({ page }) => {    // This test will not run  });});
```

You can also omit the title.

```
test.describe.fixme(() => {  // ...});
```

**Arguments**

-   `title` [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type "string") _(optional)_[#](#test-describe-fixme-option-title)
    
    Group title.
    
-   `details` [Object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object "Object") _(optional)_ Added in: v1.42[#](#test-describe-fixme-option-details)
    
    -   `tag` [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type "string") | [Array](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array "Array")<[string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type "string")\> _(optional)_
        
    -   `annotation` [Object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object "Object") | [Array](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array "Array")<[Object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object "Object")\> _(optional)_
        
        -   `type` [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type "string")
            
        -   `description` [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type "string") _(optional)_
            
    
    See [test.describe()](/docs/api/class-test#test-describe) for details description.
    
-   `callback` [function](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function "Function")[#](#test-describe-fixme-option-callback)
    
    A callback that is run immediately when calling [test.describe.fixme()](/docs/api/class-test#test-describe-fixme). Any tests added in this callback will belong to the group, and will not be run.
    

* * *

### test.describe.only[​](#test-describe-only "Direct link to test.describe.only")

Added in: v1.10 test.test.describe.only

Declares a focused group of tests. If there are some focused tests or suites, all of them will be run but nothing else.

-   `test.describe.only(title, callback)`
-   `test.describe.only(callback)`
-   `test.describe.only(title, details, callback)`

**Usage**

```
test.describe.only('focused group', () => {  test('in the focused group', async ({ page }) => {    // This test will run  });});test('not in the focused group', async ({ page }) => {  // This test will not run});
```

You can also omit the title.

```
test.describe.only(() => {  // ...});
```

**Arguments**

-   `title` [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type "string") _(optional)_[#](#test-describe-only-option-title)
    
    Group title.
    
-   `details` [Object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object "Object") _(optional)_ Added in: v1.42[#](#test-describe-only-option-details)
    
    -   `tag` [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type "string") | [Array](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array "Array")<[string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type "string")\> _(optional)_
        
    -   `annotation` [Object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object "Object") | [Array](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array "Array")<[Object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object "Object")\> _(optional)_
        
        -   `type` [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type "string")
            
        -   `description` [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type "string") _(optional)_
            
    
    See [test.describe()](/docs/api/class-test#test-describe) for details description.
    
-   `callback` [function](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function "Function")[#](#test-describe-only-option-callback)
    
    A callback that is run immediately when calling [test.describe.only()](/docs/api/class-test#test-describe-only). Any tests added in this callback will belong to the group.
    

* * *

### test.describe.skip[​](#test-describe-skip "Direct link to test.describe.skip")

Added in: v1.10 test.test.describe.skip

Declares a skipped test group, similarly to [test.describe()](/docs/api/class-test#test-describe). Tests in the skipped group are never run.

-   `test.describe.skip(title, callback)`
-   `test.describe.skip(title)`
-   `test.describe.skip(title, details, callback)`

**Usage**

```
test.describe.skip('skipped group', () => {  test('example', async ({ page }) => {    // This test will not run  });});
```

You can also omit the title.

```
test.describe.skip(() => {  // ...});
```

**Arguments**

-   `title` [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type "string")[#](#test-describe-skip-option-title)
    
    Group title.
    
-   `details` [Object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object "Object") _(optional)_ Added in: v1.42[#](#test-describe-skip-option-details)
    
    -   `tag` [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type "string") | [Array](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array "Array")<[string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type "string")\> _(optional)_
        
    -   `annotation` [Object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object "Object") | [Array](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array "Array")<[Object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object "Object")\> _(optional)_
        
        -   `type` [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type "string")
            
        -   `description` [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type "string") _(optional)_
            
    
    See [test.describe()](/docs/api/class-test#test-describe) for details description.
    
-   `callback` [function](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function "Function")[#](#test-describe-skip-option-callback)
    
    A callback that is run immediately when calling [test.describe.skip()](/docs/api/class-test#test-describe-skip). Any tests added in this callback will belong to the group, and will not be run.
    

* * *

### test.extend[​](#test-extend "Direct link to test.extend")

Added in: v1.10 test.test.extend

Extends the `test` object by defining fixtures and/or options that can be used in the tests.

**Usage**

First define a fixture and/or an option.

-   TypeScript
-   JavaScript

```
import { test as base } from '@playwright/test';import { TodoPage } from './todo-page';export type Options = { defaultItem: string };// Extend basic test by providing a "defaultItem" option and a "todoPage" fixture.export const test = base.extend<Options & { todoPage: TodoPage }>({  // Define an option and provide a default value.  // We can later override it in the config.  defaultItem: ['Do stuff', { option: true }],  // Define a fixture. Note that it can use built-in fixture "page"  // and a new option "defaultItem".  todoPage: async ({ page, defaultItem }, use) => {    const todoPage = new TodoPage(page);    await todoPage.goto();    await todoPage.addToDo(defaultItem);    await use(todoPage);    await todoPage.removeAll();  },});
```

my-test.js

```
const base = require('@playwright/test');const { TodoPage } = require('./todo-page');// Extend basic test by providing a "defaultItem" option and a "todoPage" fixture.exports.test = base.test.extend({  // Define an option and provide a default value.  // We can later override it in the config.  defaultItem: ['Do stuff', { option: true }],  // Define a fixture. Note that it can use built-in fixture "page"  // and a new option "defaultItem".  todoPage: async ({ page, defaultItem }, use) => {    const todoPage = new TodoPage(page);    await todoPage.goto();    await todoPage.addToDo(defaultItem);    await use(todoPage);    await todoPage.removeAll();  },});
```

Then use the fixture in the test.

example.spec.ts

```
import { test } from './my-test';test('test 1', async ({ todoPage }) => {  await todoPage.addToDo('my todo');  // ...});
```

Configure the option in config file.

-   TypeScript
-   JavaScript

playwright.config.ts

```
import { defineConfig } from '@playwright/test';import type { Options } from './my-test';export default defineConfig<Options>({  projects: [    {      name: 'shopping',      use: { defaultItem: 'Buy milk' },    },    {      name: 'wellbeing',      use: { defaultItem: 'Exercise!' },    },  ]});
```

playwright.config.ts

```
// @ts-checkmodule.exports = defineConfig({  projects: [    {      name: 'shopping',      use: { defaultItem: 'Buy milk' },    },    {      name: 'wellbeing',      use: { defaultItem: 'Exercise!' },    },  ]});
```

Learn more about [fixtures](/docs/test-fixtures) and [parametrizing tests](/docs/test-parameterize).

**Arguments**

-   `fixtures` [Object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object "Object")[#](#test-extend-option-fixtures)
    
    An object containing fixtures and/or options. Learn more about [fixtures format](/docs/test-fixtures).
    

**Returns**

-   [Test](/docs/api/class-test "Test")[#](#test-extend-return)

* * *

### test.fail[​](#test-fail "Direct link to test.fail")

Added in: v1.10 test.test.fail

Marks a test as "should fail". Playwright runs this test and ensures that it is actually failing. This is useful for documentation purposes to acknowledge that some functionality is broken until it is fixed.

To declare a "failing" test:

-   `test.fail(title, body)`
-   `test.fail(title, details, body)`

To annotate test as "failing" at runtime:

-   `test.fail(condition, description)`
-   `test.fail(callback, description)`
-   `test.fail()`

**Usage**

You can declare a test as failing, so that Playwright ensures it actually fails.

```
import { test, expect } from '@playwright/test';test.fail('not yet ready', async ({ page }) => {  // ...});
```

If your test fails in some configurations, but not all, you can mark the test as failing inside the test body based on some condition. We recommend passing a `description` argument in this case.

```
import { test, expect } from '@playwright/test';test('fail in WebKit', async ({ page, browserName }) => {  test.fail(browserName === 'webkit', 'This feature is not implemented for Mac yet');  // ...});
```

You can mark all tests in a file or [test.describe()](/docs/api/class-test#test-describe) group as "should fail" based on some condition with a single `test.fail(callback, description)` call.

```
import { test, expect } from '@playwright/test';test.fail(({ browserName }) => browserName === 'webkit', 'not implemented yet');test('fail in WebKit 1', async ({ page }) => {  // ...});test('fail in WebKit 2', async ({ page }) => {  // ...});
```

You can also call `test.fail()` without arguments inside the test body to always mark the test as failed. We recommend declaring a failing test with `test.fail(title, body)` instead.

```
import { test, expect } from '@playwright/test';test('less readable', async ({ page }) => {  test.fail();  // ...});
```

**Arguments**

-   `title` [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type "string") _(optional)_ Added in: v1.42[#](#test-fail-option-title)
    
    Test title.
    
-   `details` [Object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object "Object") _(optional)_ Added in: v1.42[#](#test-fail-option-details)
    
    -   `tag` [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type "string") | [Array](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array "Array")<[string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type "string")\> _(optional)_
        
    -   `annotation` [Object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object "Object") | [Array](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array "Array")<[Object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object "Object")\> _(optional)_
        
        -   `type` [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type "string")
            
        -   `description` [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type "string") _(optional)_
            
    
    See [test()](/docs/api/class-test#test-call) for test details description.
    
-   `body` [function](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function "Function")([Fixtures](/docs/api/class-fixtures "Fixtures"), [TestInfo](/docs/api/class-testinfo "TestInfo")) _(optional)_ Added in: v1.42[#](#test-fail-option-body)
    
    Test body that takes one or two arguments: an object with fixtures and optional [TestInfo](/docs/api/class-testinfo "TestInfo").
    
-   `condition` [boolean](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Boolean_type "Boolean") _(optional)_[#](#test-fail-option-condition)
    
    Test is marked as "should fail" when the condition is `true`.
    
-   `callback` [function](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function "Function")([Fixtures](/docs/api/class-fixtures "Fixtures")):[boolean](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Boolean_type "Boolean") _(optional)_[#](#test-fail-option-callback)
    
    A function that returns whether to mark as "should fail", based on test fixtures. Test or tests are marked as "should fail" when the return value is `true`.
    
-   `description` [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type "string") _(optional)_[#](#test-fail-option-description)
    
    Optional description that will be reflected in a test report.
    

* * *

### test.fail.only[​](#test-fail-only "Direct link to test.fail.only")

Added in: v1.49 test.test.fail.only

You can use `test.fail.only` to focus on a specific test that is expected to fail. This is particularly useful when debugging a failing test or working on a specific issue.

To declare a focused "failing" test:

-   `test.fail.only(title, body)`
-   `test.fail.only(title, details, body)`

**Usage**

You can declare a focused failing test, so that Playwright runs only this test and ensures it actually fails.

```
import { test, expect } from '@playwright/test';test.fail.only('focused failing test', async ({ page }) => {  // This test is expected to fail});test('not in the focused group', async ({ page }) => {  // This test will not run});
```

**Arguments**

-   `title` [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type "string") _(optional)_[#](#test-fail-only-option-title)
    
    Test title.
    
-   `details` [Object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object "Object") _(optional)_[#](#test-fail-only-option-details)
    
    -   `tag` [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type "string") | [Array](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array "Array")<[string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type "string")\> _(optional)_
        
    -   `annotation` [Object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object "Object") | [Array](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array "Array")<[Object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object "Object")\> _(optional)_
        
        -   `type` [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type "string")
            
        -   `description` [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type "string") _(optional)_
            
    
    See [test.describe()](/docs/api/class-test#test-describe) for test details description.
    
-   `body` [function](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function "Function")([Fixtures](/docs/api/class-fixtures "Fixtures"), [TestInfo](/docs/api/class-testinfo "TestInfo")) _(optional)_[#](#test-fail-only-option-body)
    
    Test body that takes one or two arguments: an object with fixtures and optional [TestInfo](/docs/api/class-testinfo "TestInfo").
    

* * *

### test.fixme[​](#test-fixme "Direct link to test.fixme")

Added in: v1.10 test.test.fixme

Mark a test as "fixme", with the intention to fix it. Playwright will not run the test past the `test.fixme()` call.

To declare a "fixme" test:

-   `test.fixme(title, body)`
-   `test.fixme(title, details, body)`

To annotate test as "fixme" at runtime:

-   `test.fixme(condition, description)`
-   `test.fixme(callback, description)`
-   `test.fixme()`

**Usage**

You can declare a test as to be fixed, and Playwright will not run it.

```
import { test, expect } from '@playwright/test';test.fixme('to be fixed', async ({ page }) => {  // ...});
```

If your test should be fixed in some configurations, but not all, you can mark the test as "fixme" inside the test body based on some condition. We recommend passing a `description` argument in this case. Playwright will run the test, but abort it immediately after the `test.fixme` call.

```
import { test, expect } from '@playwright/test';test('to be fixed in Safari', async ({ page, browserName }) => {  test.fixme(browserName === 'webkit', 'This feature breaks in Safari for some reason');  // ...});
```

You can mark all tests in a file or [test.describe()](/docs/api/class-test#test-describe) group as "fixme" based on some condition with a single `test.fixme(callback, description)` call.

```
import { test, expect } from '@playwright/test';test.fixme(({ browserName }) => browserName === 'webkit', 'Should figure out the issue');test('to be fixed in Safari 1', async ({ page }) => {  // ...});test('to be fixed in Safari 2', async ({ page }) => {  // ...});
```

You can also call `test.fixme()` without arguments inside the test body to always mark the test as failed. We recommend using `test.fixme(title, body)` instead.

```
import { test, expect } from '@playwright/test';test('less readable', async ({ page }) => {  test.fixme();  // ...});
```

**Arguments**

-   `title` [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type "string") _(optional)_[#](#test-fixme-option-title)
    
    Test title.
    
-   `details` [Object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object "Object") _(optional)_ Added in: v1.42[#](#test-fixme-option-details)
    
    -   `tag` [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type "string") | [Array](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array "Array")<[string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type "string")\> _(optional)_
        
    -   `annotation` [Object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object "Object") | [Array](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array "Array")<[Object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object "Object")\> _(optional)_
        
        -   `type` [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type "string")
            
        -   `description` [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type "string") _(optional)_
            
    
    See [test()](/docs/api/class-test#test-call) for test details description.
    
-   `body` [function](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function "Function")([Fixtures](/docs/api/class-fixtures "Fixtures"), [TestInfo](/docs/api/class-testinfo "TestInfo")) _(optional)_[#](#test-fixme-option-body)
    
    Test body that takes one or two arguments: an object with fixtures and optional [TestInfo](/docs/api/class-testinfo "TestInfo").
    
-   `condition` [boolean](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Boolean_type "Boolean") _(optional)_[#](#test-fixme-option-condition)
    
    Test is marked as "fixme" when the condition is `true`.
    
-   `callback` [function](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function "Function")([Fixtures](/docs/api/class-fixtures "Fixtures")):[boolean](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Boolean_type "Boolean") _(optional)_[#](#test-fixme-option-callback)
    
    A function that returns whether to mark as "fixme", based on test fixtures. Test or tests are marked as "fixme" when the return value is `true`.
    
-   `description` [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type "string") _(optional)_[#](#test-fixme-option-description)
    
    Optional description that will be reflected in a test report.
    

* * *

### test.info[​](#test-info "Direct link to test.info")

Added in: v1.10 test.test.info

Returns information about the currently running test. This method can only be called during the test execution, otherwise it throws.

**Usage**

```
test('example test', async ({ page }) => {  // ...  await test.info().attach('screenshot', {    body: await page.screenshot(),    contentType: 'image/png',  });});
```

**Returns**

-   [TestInfo](/docs/api/class-testinfo "TestInfo")[#](#test-info-return)

* * *

### test.only[​](#test-only "Direct link to test.only")

Added in: v1.10 test.test.only

Declares a focused test. If there are some focused tests or suites, all of them will be run but nothing else.

-   `test.only(title, body)`
-   `test.only(title, details, body)`

**Usage**

```
test.only('focus this test', async ({ page }) => {  // Run only focused tests in the entire project.});
```

**Arguments**

-   `title` [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type "string")[#](#test-only-option-title)
    
    Test title.
    
-   `details` [Object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object "Object") _(optional)_ Added in: v1.42[#](#test-only-option-details)
    
    -   `tag` [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type "string") | [Array](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array "Array")<[string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type "string")\> _(optional)_
        
    -   `annotation` [Object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object "Object") | [Array](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array "Array")<[Object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object "Object")\> _(optional)_
        
        -   `type` [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type "string")
            
        -   `description` [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type "string") _(optional)_
            
    
    See [test()](/docs/api/class-test#test-call) for test details description.
    
-   `body` [function](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function "Function")([Fixtures](/docs/api/class-fixtures "Fixtures"), [TestInfo](/docs/api/class-testinfo "TestInfo"))[#](#test-only-option-body)
    
    Test body that takes one or two arguments: an object with fixtures and optional [TestInfo](/docs/api/class-testinfo "TestInfo").
    

* * *

### test.setTimeout[​](#test-set-timeout "Direct link to test.setTimeout")

Added in: v1.10 test.test.setTimeout

Changes the timeout for the test. Zero means no timeout. Learn more about [various timeouts](/docs/test-timeouts).

Timeout for the currently running test is available through [testInfo.timeout](/docs/api/class-testinfo#test-info-timeout).

**Usage**

-   Changing test timeout.
    
    ```
    test('very slow test', async ({ page }) => {  test.setTimeout(120000);  // ...});
    ```
    
-   Changing timeout from a slow `beforeEach` hook. Note that this affects the test timeout that is shared with `beforeEach` hooks.
    
    ```
    test.beforeEach(async ({ page }, testInfo) => {  // Extend timeout for all tests running this hook by 30 seconds.  test.setTimeout(testInfo.timeout + 30000);});
    ```
    
-   Changing timeout for a `beforeAll` or `afterAll` hook. Note this affects the hook's timeout, not the test timeout.
    
    ```
    test.beforeAll(async () => {  // Set timeout for this hook.  test.setTimeout(60000);});
    ```
    
-   Changing timeout for all tests in a [test.describe()](/docs/api/class-test#test-describe) group.
    
    ```
    test.describe('group', () => {  // Applies to all tests in this group.  test.describe.configure({ timeout: 60000 });  test('test one', async () => { /* ... */ });  test('test two', async () => { /* ... */ });  test('test three', async () => { /* ... */ });});
    ```
    

**Arguments**

-   `timeout` [number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type "Number")[#](#test-set-timeout-option-timeout)
    
    Timeout in milliseconds.
    

* * *

### test.skip[​](#test-skip "Direct link to test.skip")

Added in: v1.10 test.test.skip

Skip a test. Playwright will not run the test past the `test.skip()` call.

Skipped tests are not supposed to be ever run. If you intend to fix the test, use [test.fixme()](/docs/api/class-test#test-fixme) instead.

To declare a skipped test:

-   `test.skip(title, body)`
-   `test.skip(title, details, body)`

To skip a test at runtime:

-   `test.skip(condition, description)`
-   `test.skip(callback, description)`
-   `test.skip()`

**Usage**

You can declare a skipped test, and Playwright will not run it.

```
import { test, expect } from '@playwright/test';test.skip('never run', async ({ page }) => {  // ...});
```

If your test should be skipped in some configurations, but not all, you can skip the test inside the test body based on some condition. We recommend passing a `description` argument in this case. Playwright will run the test, but abort it immediately after the `test.skip` call.

```
import { test, expect } from '@playwright/test';test('Safari-only test', async ({ page, browserName }) => {  test.skip(browserName !== 'webkit', 'This feature is Safari-only');  // ...});
```

You can skip all tests in a file or [test.describe()](/docs/api/class-test#test-describe) group based on some condition with a single `test.skip(callback, description)` call.

```
import { test, expect } from '@playwright/test';test.skip(({ browserName }) => browserName !== 'webkit', 'Safari-only');test('Safari-only test 1', async ({ page }) => {  // ...});test('Safari-only test 2', async ({ page }) => {  // ...});
```

You can also call `test.skip()` without arguments inside the test body to always skip the test. However, we recommend using `test.skip(title, body)` instead.

```
import { test, expect } from '@playwright/test';test('less readable', async ({ page }) => {  test.skip();  // ...});
```

**Arguments**

-   `title` [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type "string") _(optional)_[#](#test-skip-option-title)
    
    Test title.
    
-   `details` [Object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object "Object") _(optional)_ Added in: v1.42[#](#test-skip-option-details)
    
    -   `tag` [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type "string") | [Array](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array "Array")<[string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type "string")\> _(optional)_
        
    -   `annotation` [Object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object "Object") | [Array](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array "Array")<[Object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object "Object")\> _(optional)_
        
        -   `type` [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type "string")
            
        -   `description` [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type "string") _(optional)_
            
    
    See [test()](/docs/api/class-test#test-call) for test details description.
    
-   `body` [function](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function "Function")([Fixtures](/docs/api/class-fixtures "Fixtures"), [TestInfo](/docs/api/class-testinfo "TestInfo")) _(optional)_[#](#test-skip-option-body)
    
    Test body that takes one or two arguments: an object with fixtures and optional [TestInfo](/docs/api/class-testinfo "TestInfo").
    
-   `condition` [boolean](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Boolean_type "Boolean") _(optional)_[#](#test-skip-option-condition)
    
    Test is marked as "skipped" when the condition is `true`.
    
-   `callback` [function](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function "Function")([Fixtures](/docs/api/class-fixtures "Fixtures")):[boolean](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Boolean_type "Boolean") _(optional)_[#](#test-skip-option-callback)
    
    A function that returns whether to mark as "skipped", based on test fixtures. Test or tests are marked as "skipped" when the return value is `true`.
    
-   `description` [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type "string") _(optional)_[#](#test-skip-option-description)
    
    Optional description that will be reflected in a test report.
    

* * *

### test.slow[​](#test-slow "Direct link to test.slow")

Added in: v1.10 test.test.slow

Marks a test as "slow". Slow test will be given triple the default timeout.

Note that [test.slow()](/docs/api/class-test#test-slow) cannot be used in a `beforeAll` or `afterAll` hook. Use [test.setTimeout()](/docs/api/class-test#test-set-timeout) instead.

-   `test.slow()`
-   `test.slow(condition, description)`
-   `test.slow(callback, description)`

**Usage**

You can mark a test as slow by calling `test.slow()` inside the test body.

```
import { test, expect } from '@playwright/test';test('slow test', async ({ page }) => {  test.slow();  // ...});
```

If your test is slow in some configurations, but not all, you can mark it as slow based on a condition. We recommend passing a `description` argument in this case.

```
import { test, expect } from '@playwright/test';test('slow in Safari', async ({ page, browserName }) => {  test.slow(browserName === 'webkit', 'This feature is slow in Safari');  // ...});
```

You can mark all tests in a file or [test.describe()](/docs/api/class-test#test-describe) group as "slow" based on some condition by passing a callback.

```
import { test, expect } from '@playwright/test';test.slow(({ browserName }) => browserName === 'webkit', 'all tests are slow in Safari');test('slow in Safari 1', async ({ page }) => {  // ...});test('fail in Safari 2', async ({ page }) => {  // ...});
```

**Arguments**

-   `condition` [boolean](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Boolean_type "Boolean") _(optional)_[#](#test-slow-option-condition)
    
    Test is marked as "slow" when the condition is `true`.
    
-   `callback` [function](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function "Function")([Fixtures](/docs/api/class-fixtures "Fixtures")):[boolean](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Boolean_type "Boolean") _(optional)_[#](#test-slow-option-callback)
    
    A function that returns whether to mark as "slow", based on test fixtures. Test or tests are marked as "slow" when the return value is `true`.
    
-   `description` [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type "string") _(optional)_[#](#test-slow-option-description)
    
    Optional description that will be reflected in a test report.
    

* * *

### test.step[​](#test-step "Direct link to test.step")

Added in: v1.10 test.test.step

Declares a test step that is shown in the report.

**Usage**

```
import { test, expect } from '@playwright/test';test('test', async ({ page }) => {  await test.step('Log in', async () => {    // ...  });  await test.step('Outer step', async () => {    // ...    // You can nest steps inside each other.    await test.step('Inner step', async () => {      // ...    });  });});
```

**Arguments**

-   `title` [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type "string")[#](#test-step-option-title)
    
    Step name.
    
-   `body` [function](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function "Function")([TestStepInfo](/docs/api/class-teststepinfo "TestStepInfo")):[Promise](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise "Promise")<[Object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object "Object")\>[#](#test-step-option-body)
    
    Step body.
    
-   `options` [Object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object "Object") _(optional)_
    
    -   `box` [boolean](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Boolean_type "Boolean") _(optional)_ Added in: v1.39[#](#test-step-option-box)
        
        Whether to box the step in the report. Defaults to `false`. When the step is boxed, errors thrown from the step internals point to the step call site. See below for more details.
        
    -   `location` [Location](/docs/api/class-location "Location") _(optional)_ Added in: v1.48[#](#test-step-option-location)
        
        Specifies a custom location for the step to be shown in test reports and trace viewer. By default, location of the [test.step()](/docs/api/class-test#test-step) call is shown.
        
    -   `timeout` [number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type "Number") _(optional)_ Added in: v1.50[#](#test-step-option-timeout)
        
        The maximum time, in milliseconds, allowed for the step to complete. If the step does not complete within the specified timeout, the [test.step()](/docs/api/class-test#test-step) method will throw a [TimeoutError](/docs/api/class-timeouterror "TimeoutError"). Defaults to `0` (no timeout).
        

**Returns**

-   [Promise](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise "Promise")<[Object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object "Object")\>[#](#test-step-return)

**Details**

The method returns the value returned by the step callback.

```
import { test, expect } from '@playwright/test';test('test', async ({ page }) => {  const user = await test.step('Log in', async () => {    // ...    return 'john';  });  expect(user).toBe('john');});
```

**Decorator**

You can use TypeScript method decorators to turn a method into a step. Each call to the decorated method will show up as a step in the report.

```
function step(target: Function, context: ClassMethodDecoratorContext) {  return function replacementMethod(...args: any) {    const name = this.constructor.name + '.' + (context.name as string);    return test.step(name, async () => {      return await target.call(this, ...args);    }, { box: true });  };}class LoginPage {  constructor(readonly page: Page) {}  @step  async login() {    const account = { username: 'Alice', password: 's3cr3t' };    await this.page.getByLabel('Username or email address').fill(account.username);    await this.page.getByLabel('Password').fill(account.password);    await this.page.getByRole('button', { name: 'Sign in' }).click();    await expect(this.page.getByRole('button', { name: 'View profile and more' })).toBeVisible();  }}test('example', async ({ page }) => {  const loginPage = new LoginPage(page);  await loginPage.login();});
```

**Boxing**

When something inside a step fails, you would usually see the error pointing to the exact action that failed. For example, consider the following login step:

```
async function login(page) {  await test.step('login', async () => {    const account = { username: 'Alice', password: 's3cr3t' };    await page.getByLabel('Username or email address').fill(account.username);    await page.getByLabel('Password').fill(account.password);    await page.getByRole('button', { name: 'Sign in' }).click();    await expect(page.getByRole('button', { name: 'View profile and more' })).toBeVisible();  });}test('example', async ({ page }) => {  await page.goto('https://github.com/login');  await login(page);});
```

```
Error: Timed out 5000ms waiting for expect(locator).toBeVisible()  ... error details omitted ...   8 |     await page.getByRole('button', { name: 'Sign in' }).click();>  9 |     await expect(page.getByRole('button', { name: 'View profile and more' })).toBeVisible();     |                                                                               ^  10 |   });
```

As we see above, the test may fail with an error pointing inside the step. If you would like the error to highlight the "login" step instead of its internals, use the `box` option. An error inside a boxed step points to the step call site.

```
async function login(page) {  await test.step('login', async () => {    // ...  }, { box: true });  // Note the "box" option here.}
```

```
Error: Timed out 5000ms waiting for expect(locator).toBeVisible()  ... error details omitted ...  14 |   await page.goto('https://github.com/login');> 15 |   await login(page);     |         ^  16 | });
```

You can also create a TypeScript decorator for a boxed step, similar to a regular step decorator above:

```
function boxedStep(target: Function, context: ClassMethodDecoratorContext) {  return function replacementMethod(...args: any) {    const name = this.constructor.name + '.' + (context.name as string);    return test.step(name, async () => {      return await target.call(this, ...args);    }, { box: true });  // Note the "box" option here.  };}class LoginPage {  constructor(readonly page: Page) {}  @boxedStep  async login() {    // ....  }}test('example', async ({ page }) => {  const loginPage = new LoginPage(page);  await loginPage.login();  // <-- Error will be reported on this line.});
```

* * *

### test.step.skip[​](#test-step-skip "Direct link to test.step.skip")

Added in: v1.50 test.test.step.skip

Mark a test step as "skip" to temporarily disable its execution, useful for steps that are currently failing and planned for a near-term fix. Playwright will not run the step. See also [testStepInfo.skip()](/docs/api/class-teststepinfo#test-step-info-skip-2).

We recommend [testStepInfo.skip()](/docs/api/class-teststepinfo#test-step-info-skip-1) instead.

**Usage**

You can declare a skipped step, and Playwright will not run it.

```
import { test, expect } from '@playwright/test';test('my test', async ({ page }) => {  // ...  await test.step.skip('not yet ready', async () => {    // ...  });});
```

**Arguments**

-   `title` [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type "string")[#](#test-step-skip-option-title)
    
    Step name.
    
-   `body` [function](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function "Function")():[Promise](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise "Promise")<[Object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object "Object")\>[#](#test-step-skip-option-body)
    
    Step body.
    
-   `options` [Object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object "Object") _(optional)_
    
    -   `box` [boolean](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Boolean_type "Boolean") _(optional)_[#](#test-step-skip-option-box)
        
        Whether to box the step in the report. Defaults to `false`. When the step is boxed, errors thrown from the step internals point to the step call site. See below for more details.
        
    -   `location` [Location](/docs/api/class-location "Location") _(optional)_[#](#test-step-skip-option-location)
        
        Specifies a custom location for the step to be shown in test reports and trace viewer. By default, location of the [test.step()](/docs/api/class-test#test-step) call is shown.
        
    -   `timeout` [number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type "Number") _(optional)_[#](#test-step-skip-option-timeout)
        
        Maximum time in milliseconds for the step to finish. Defaults to `0` (no timeout).
        

**Returns**

-   [Promise](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise "Promise")<[void](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/undefined "void")\>[#](#test-step-skip-return)

* * *

### test.use[​](#test-use "Direct link to test.use")

Added in: v1.10 test.test.use

Specifies options or fixtures to use in a single test file or a [test.describe()](/docs/api/class-test#test-describe) group. Most useful to set an option, for example set `locale` to configure `context` fixture.

**Usage**

```
import { test, expect } from '@playwright/test';test.use({ locale: 'en-US' });test('test with locale', async ({ page }) => {  // Default context and page have locale as specified});
```

**Arguments**

-   `options` [TestOptions](/docs/api/class-testoptions "TestOptions")[#](#test-use-option-fixtures)
    
    An object with local options.
    

**Details**

`test.use` can be called either in the global scope or inside `test.describe`. It is an error to call it within `beforeEach` or `beforeAll`.

It is also possible to override a fixture by providing a function.

```
import { test, expect } from '@playwright/test';test.use({  locale: async ({}, use) => {    // Read locale from some configuration file.    const locale = await fs.promises.readFile('test-locale', 'utf-8');    await use(locale);  },});test('test with locale', async ({ page }) => {  // Default context and page have locale as specified});
```

* * *

## Properties[​](#properties "Direct link to Properties")

### test.expect[​](#test-expect "Direct link to test.expect")

Added in: v1.10 test.test.expect

`expect` function can be used to create test assertions. Read more about [test assertions](/docs/test-assertions).

**Usage**

```
test('example', async ({ page }) => {  await test.expect(page).toHaveTitle('Title');});
```

**Type**

-   [Object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object "Object")

* * *

## Deprecated[​](#deprecated "Direct link to Deprecated")

### test.describe.parallel[​](#test-describe-parallel "Direct link to test.describe.parallel")

Added in: v1.10 test.test.describe.parallel

Discouraged

See [test.describe.configure()](/docs/api/class-test#test-describe-configure) for the preferred way of configuring the execution mode.

Declares a group of tests that could be run in parallel. By default, tests in a single test file run one after another, but using [test.describe.parallel()](/docs/api/class-test#test-describe-parallel) allows them to run in parallel.

-   `test.describe.parallel(title, callback)`
-   `test.describe.parallel(callback)`
-   `test.describe.parallel(title, details, callback)`

**Usage**

```
test.describe.parallel('group', () => {  test('runs in parallel 1', async ({ page }) => {});  test('runs in parallel 2', async ({ page }) => {});});
```

Note that parallel tests are executed in separate processes and cannot share any state or global variables. Each of the parallel tests executes all relevant hooks.

You can also omit the title.

```
test.describe.parallel(() => {  // ...});
```

**Arguments**

-   `title` [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type "string") _(optional)_[#](#test-describe-parallel-option-title)
    
    Group title.
    
-   `details` [Object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object "Object") _(optional)_ Added in: v1.42[#](#test-describe-parallel-option-details)
    
    -   `tag` [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type "string") | [Array](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array "Array")<[string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type "string")\> _(optional)_
        
    -   `annotation` [Object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object "Object") | [Array](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array "Array")<[Object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object "Object")\> _(optional)_
        
        -   `type` [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type "string")
            
        -   `description` [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type "string") _(optional)_
            
    
    See [test.describe()](/docs/api/class-test#test-describe) for details description.
    
-   `callback` [function](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function "Function")[#](#test-describe-parallel-option-callback)
    
    A callback that is run immediately when calling [test.describe.parallel()](/docs/api/class-test#test-describe-parallel). Any tests added in this callback will belong to the group.
    

* * *

### test.describe.parallel.only[​](#test-describe-parallel-only "Direct link to test.describe.parallel.only")

Added in: v1.10 test.test.describe.parallel.only

Discouraged

See [test.describe.configure()](/docs/api/class-test#test-describe-configure) for the preferred way of configuring the execution mode.

Declares a focused group of tests that could be run in parallel. This is similar to [test.describe.parallel()](/docs/api/class-test#test-describe-parallel), but focuses the group. If there are some focused tests or suites, all of them will be run but nothing else.

-   `test.describe.parallel.only(title, callback)`
-   `test.describe.parallel.only(callback)`
-   `test.describe.parallel.only(title, details, callback)`

**Usage**

```
test.describe.parallel.only('group', () => {  test('runs in parallel 1', async ({ page }) => {});  test('runs in parallel 2', async ({ page }) => {});});
```

You can also omit the title.

```
test.describe.parallel.only(() => {  // ...});
```

**Arguments**

-   `title` [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type "string") _(optional)_[#](#test-describe-parallel-only-option-title)
    
    Group title.
    
-   `details` [Object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object "Object") _(optional)_ Added in: v1.42[#](#test-describe-parallel-only-option-details)
    
    -   `tag` [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type "string") | [Array](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array "Array")<[string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type "string")\> _(optional)_
        
    -   `annotation` [Object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object "Object") | [Array](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array "Array")<[Object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object "Object")\> _(optional)_
        
        -   `type` [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type "string")
            
        -   `description` [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type "string") _(optional)_
            
    
    See [test.describe()](/docs/api/class-test#test-describe) for details description.
    
-   `callback` [function](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function "Function")[#](#test-describe-parallel-only-option-callback)
    
    A callback that is run immediately when calling [test.describe.parallel.only()](/docs/api/class-test#test-describe-parallel-only). Any tests added in this callback will belong to the group.
    

* * *

### test.describe.serial[​](#test-describe-serial "Direct link to test.describe.serial")

Added in: v1.10 test.test.describe.serial

Discouraged

See [test.describe.configure()](/docs/api/class-test#test-describe-configure) for the preferred way of configuring the execution mode.

Declares a group of tests that should always be run serially. If one of the tests fails, all subsequent tests are skipped. All tests in a group are retried together.

note

Using serial is not recommended. It is usually better to make your tests isolated, so they can be run independently.

-   `test.describe.serial(title, callback)`
-   `test.describe.serial(title)`
-   `test.describe.serial(title, details, callback)`

**Usage**

```
test.describe.serial('group', () => {  test('runs first', async ({ page }) => {});  test('runs second', async ({ page }) => {});});
```

You can also omit the title.

```
test.describe.serial(() => {  // ...});
```

**Arguments**

-   `title` [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type "string") _(optional)_[#](#test-describe-serial-option-title)
    
    Group title.
    
-   `details` [Object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object "Object") _(optional)_ Added in: v1.42[#](#test-describe-serial-option-details)
    
    -   `tag` [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type "string") | [Array](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array "Array")<[string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type "string")\> _(optional)_
        
    -   `annotation` [Object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object "Object") | [Array](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array "Array")<[Object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object "Object")\> _(optional)_
        
        -   `type` [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type "string")
            
        -   `description` [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type "string") _(optional)_
            
    
    See [test.describe()](/docs/api/class-test#test-describe) for details description.
    
-   `callback` [function](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function "Function")[#](#test-describe-serial-option-callback)
    
    A callback that is run immediately when calling [test.describe.serial()](/docs/api/class-test#test-describe-serial). Any tests added in this callback will belong to the group.
    

* * *

### test.describe.serial.only[​](#test-describe-serial-only "Direct link to test.describe.serial.only")

Added in: v1.10 test.test.describe.serial.only

Discouraged

See [test.describe.configure()](/docs/api/class-test#test-describe-configure) for the preferred way of configuring the execution mode.

Declares a focused group of tests that should always be run serially. If one of the tests fails, all subsequent tests are skipped. All tests in a group are retried together. If there are some focused tests or suites, all of them will be run but nothing else.

note

Using serial is not recommended. It is usually better to make your tests isolated, so they can be run independently.

-   `test.describe.serial.only(title, callback)`
-   `test.describe.serial.only(title)`
-   `test.describe.serial.only(title, details, callback)`

**Usage**

```
test.describe.serial.only('group', () => {  test('runs first', async ({ page }) => {  });  test('runs second', async ({ page }) => {  });});
```

You can also omit the title.

```
test.describe.serial.only(() => {  // ...});
```

**Arguments**

-   `title` [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type "string")[#](#test-describe-serial-only-option-title)
    
    Group title.
    
-   `details` [Object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object "Object") _(optional)_ Added in: v1.42[#](#test-describe-serial-only-option-details)
    
    -   `tag` [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type "string") | [Array](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array "Array")<[string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type "string")\> _(optional)_
        
    -   `annotation` [Object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object "Object") | [Array](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array "Array")<[Object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object "Object")\> _(optional)_
        
        -   `type` [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type "string")
            
        -   `description` [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type "string") _(optional)_
            
    
    See [test.describe()](/docs/api/class-test#test-describe) for details description.
    
-   `callback` [function](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function "Function")[#](#test-describe-serial-only-option-callback)
    
    A callback that is run immediately when calling [test.describe.serial.only()](/docs/api/class-test#test-describe-serial-only). Any tests added in this callback will belong to the group.
