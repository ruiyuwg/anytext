On this page

`TestInfo` contains information about currently running test. It is available to test functions, [test.beforeEach()](/docs/api/class-test#test-before-each), [test.afterEach()](/docs/api/class-test#test-after-each), [test.beforeAll()](/docs/api/class-test#test-before-all) and [test.afterAll()](/docs/api/class-test#test-after-all) hooks, and test-scoped fixtures. `TestInfo` provides utilities to control test execution: attach files, update test timeout, determine which test is currently running and whether it was retried, etc.

```
import { test, expect } from '@playwright/test';test('basic test', async ({ page }, testInfo) => {  expect(testInfo.title).toBe('basic test');  await page.screenshot(testInfo.outputPath('screenshot.png'));});
```

* * *

## Methods[​](#methods "Direct link to Methods")

### attach[​](#test-info-attach "Direct link to attach")

Added in: v1.10 testInfo.attach

Attach a value or a file from disk to the current test. Some reporters show test attachments. Either [path](/docs/api/class-testinfo#test-info-attach-option-path) or [body](/docs/api/class-testinfo#test-info-attach-option-body) must be specified, but not both.

For example, you can attach a screenshot to the test:

```
import { test, expect } from '@playwright/test';test('basic test', async ({ page }, testInfo) => {  await page.goto('https://playwright.dev');  const screenshot = await page.screenshot();  await testInfo.attach('screenshot', { body: screenshot, contentType: 'image/png' });});
```

Or you can attach files returned by your APIs:

```
import { test, expect } from '@playwright/test';import { download } from './my-custom-helpers';test('basic test', async ({}, testInfo) => {  const tmpPath = await download('a');  await testInfo.attach('downloaded', { path: tmpPath });});
```

note

[testInfo.attach()](/docs/api/class-testinfo#test-info-attach) automatically takes care of copying attached files to a location that is accessible to reporters. You can safely remove the attachment after awaiting the attach call.

**Usage**

```
await testInfo.attach(name);await testInfo.attach(name, options);
```

**Arguments**

-   `name` [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type "string")[#](#test-info-attach-option-name)
    
    Attachment name. The name will also be sanitized and used as the prefix of file name when saving to disk.
    
-   `options` [Object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object "Object") _(optional)_
    
    -   `body` [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type "string") | [Buffer](https://nodejs.org/api/buffer.html#buffer_class_buffer "Buffer") _(optional)_[#](#test-info-attach-option-body)
        
        Attachment body. Mutually exclusive with [path](/docs/api/class-testinfo#test-info-attach-option-path).
        
    -   `contentType` [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type "string") _(optional)_[#](#test-info-attach-option-content-type)
        
        Content type of this attachment to properly present in the report, for example `'application/json'` or `'image/png'`. If omitted, content type is inferred based on the [path](/docs/api/class-testinfo#test-info-attach-option-path), or defaults to `text/plain` for [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type "string") attachments and `application/octet-stream` for [Buffer](https://nodejs.org/api/buffer.html#buffer_class_buffer "Buffer") attachments.
        
    -   `path` [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type "string") _(optional)_[#](#test-info-attach-option-path)
        
        Path on the filesystem to the attached file. Mutually exclusive with [body](/docs/api/class-testinfo#test-info-attach-option-body).
        

**Returns**

-   [Promise](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise "Promise")<[void](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/undefined "void")\>[#](#test-info-attach-return)

* * *

### fail()[​](#test-info-fail-1 "Direct link to fail()")

Added in: v1.10 testInfo.fail()

Marks the currently running test as "should fail". Playwright Test runs this test and ensures that it is actually failing. This is useful for documentation purposes to acknowledge that some functionality is broken until it is fixed. This is similar to [test.fail()](/docs/api/class-test#test-fail).

**Usage**

```
testInfo.fail();
```

* * *

### fail(condition)[​](#test-info-fail-2 "Direct link to fail(condition)")

Added in: v1.10 testInfo.fail(condition)

Conditionally mark the currently running test as "should fail" with an optional description. This is similar to [test.fail()](/docs/api/class-test#test-fail).

**Usage**

```
testInfo.fail(condition);testInfo.fail(condition, description);
```

**Arguments**

-   `condition` [boolean](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Boolean_type "Boolean")[#](#test-info-fail-2-option-condition)
    
    Test is marked as "should fail" when the condition is `true`.
    
-   `description` [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type "string") _(optional)_[#](#test-info-fail-2-option-description)
    
    Optional description that will be reflected in a test report.
    

* * *

### fixme()[​](#test-info-fixme-1 "Direct link to fixme()")

Added in: v1.10 testInfo.fixme()

Mark a test as "fixme", with the intention to fix it. Test is immediately aborted. This is similar to [test.fixme()](/docs/api/class-test#test-fixme).

**Usage**

```
testInfo.fixme();
```

* * *

### fixme(condition)[​](#test-info-fixme-2 "Direct link to fixme(condition)")

Added in: v1.10 testInfo.fixme(condition)

Conditionally mark the currently running test as "fixme" with an optional description. This is similar to [test.fixme()](/docs/api/class-test#test-fixme).

**Usage**

```
testInfo.fixme(condition);testInfo.fixme(condition, description);
```

**Arguments**

-   `condition` [boolean](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Boolean_type "Boolean")[#](#test-info-fixme-2-option-condition)
    
    Test is marked as "fixme" when the condition is `true`.
    
-   `description` [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type "string") _(optional)_[#](#test-info-fixme-2-option-description)
    
    Optional description that will be reflected in a test report.
    

* * *

### outputPath[​](#test-info-output-path "Direct link to outputPath")

Added in: v1.10 testInfo.outputPath

Returns a path inside the [testInfo.outputDir](/docs/api/class-testinfo#test-info-output-dir) where the test can safely put a temporary file. Guarantees that tests running in parallel will not interfere with each other.

```
import { test, expect } from '@playwright/test';import fs from 'fs';test('example test', async ({}, testInfo) => {  const file = testInfo.outputPath('dir', 'temporary-file.txt');  await fs.promises.writeFile(file, 'Put some data to the dir/temporary-file.txt', 'utf8');});
```

> Note that `pathSegments` accepts path segments to the test output directory such as `testInfo.outputPath('relative', 'path', 'to', 'output')`. However, this path must stay within the [testInfo.outputDir](/docs/api/class-testinfo#test-info-output-dir) directory for each test (i.e. `test-results/a-test-title`), otherwise it will throw.

**Usage**

```
testInfo.outputPath(...pathSegments);
```

**Arguments**

-   `...pathSegments` [Array](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array "Array")<[string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type "string")\>[#](#test-info-output-path-option-path-segments)
    
    Path segments to append at the end of the resulting path.
    

**Returns**

-   [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type "string")[#](#test-info-output-path-return)

* * *

### setTimeout[​](#test-info-set-timeout "Direct link to setTimeout")

Added in: v1.10 testInfo.setTimeout

Changes the timeout for the currently running test. Zero means no timeout. Learn more about [various timeouts](/docs/test-timeouts).

Timeout is usually specified in the [configuration file](/docs/test-configuration), but it could be useful to change the timeout in certain scenarios:

```
import { test, expect } from '@playwright/test';test.beforeEach(async ({ page }, testInfo) => {  // Extend timeout for all tests running this hook by 30 seconds.  testInfo.setTimeout(testInfo.timeout + 30000);});
```

**Usage**

```
testInfo.setTimeout(timeout);
```

**Arguments**

-   `timeout` [number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type "Number")[#](#test-info-set-timeout-option-timeout)
    
    Timeout in milliseconds.
    

* * *

### skip()[​](#test-info-skip-1 "Direct link to skip()")

Added in: v1.10 testInfo.skip()

Unconditionally skip the currently running test. Test is immediately aborted. This is similar to [test.skip()](/docs/api/class-test#test-skip).

**Usage**

```
testInfo.skip();
```

* * *

### skip(condition)[​](#test-info-skip-2 "Direct link to skip(condition)")

Added in: v1.10 testInfo.skip(condition)

Conditionally skips the currently running test with an optional description. This is similar to [test.skip()](/docs/api/class-test#test-skip).

**Usage**

```
testInfo.skip(condition);testInfo.skip(condition, description);
```

**Arguments**

-   `condition` [boolean](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Boolean_type "Boolean")[#](#test-info-skip-2-option-condition)
    
    A skip condition. Test is skipped when the condition is `true`.
    
-   `description` [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type "string") _(optional)_[#](#test-info-skip-2-option-description)
    
    Optional description that will be reflected in a test report.
    

* * *

### slow()[​](#test-info-slow-1 "Direct link to slow()")

Added in: v1.10 testInfo.slow()

Marks the currently running test as "slow", giving it triple the default timeout. This is similar to [test.slow()](/docs/api/class-test#test-slow).

**Usage**

```
testInfo.slow();
```

* * *

### slow(condition)[​](#test-info-slow-2 "Direct link to slow(condition)")

Added in: v1.10 testInfo.slow(condition)

Conditionally mark the currently running test as "slow" with an optional description, giving it triple the default timeout. This is similar to [test.slow()](/docs/api/class-test#test-slow).

**Usage**

```
testInfo.slow(condition);testInfo.slow(condition, description);
```

**Arguments**

-   `condition` [boolean](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Boolean_type "Boolean")[#](#test-info-slow-2-option-condition)
    
    Test is marked as "slow" when the condition is `true`.
    
-   `description` [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type "string") _(optional)_[#](#test-info-slow-2-option-description)
    
    Optional description that will be reflected in a test report.
    

* * *

### snapshotPath[​](#test-info-snapshot-path "Direct link to snapshotPath")

Added in: v1.10 testInfo.snapshotPath

Returns a path to a snapshot file with the given `name`. Pass [kind](/docs/api/class-testinfo#test-info-snapshot-path-option-kind) to obtain a specific path:

-   `kind: 'screenshot'` for [expect(page).toHaveScreenshot()](/docs/api/class-pageassertions#page-assertions-to-have-screenshot-1);
-   `kind: 'aria'` for [expect(locator).toMatchAriaSnapshot()](/docs/api/class-locatorassertions#locator-assertions-to-match-aria-snapshot);
-   `kind: 'snapshot'` for [expect(value).toMatchSnapshot()](/docs/api/class-snapshotassertions#snapshot-assertions-to-match-snapshot-1).

**Usage**

```
await expect(page).toHaveScreenshot('header.png');// Screenshot assertion above expects screenshot at this path:const screenshotPath = test.info().snapshotPath('header.png', { kind: 'screenshot' });await expect(page.getByRole('main')).toMatchAriaSnapshot({ name: 'main.aria.yml' });// Aria snapshot assertion above expects snapshot at this path:const ariaSnapshotPath = test.info().snapshotPath('main.aria.yml', { kind: 'aria' });expect('some text').toMatchSnapshot('snapshot.txt');// Snapshot assertion above expects snapshot at this path:const snapshotPath = test.info().snapshotPath('snapshot.txt');expect('some text').toMatchSnapshot(['dir', 'subdir', 'snapshot.txt']);// Snapshot assertion above expects snapshot at this path:const nestedPath = test.info().snapshotPath('dir', 'subdir', 'snapshot.txt');
```

**Arguments**

-   `...name` [Array](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array "Array")<[string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type "string")\>[#](#test-info-snapshot-path-option-name)
    
    The name of the snapshot or the path segments to define the snapshot file path. Snapshots with the same name in the same test file are expected to be the same.
    
    When passing [kind](/docs/api/class-testinfo#test-info-snapshot-path-option-kind), multiple name segments are not supported.
    
-   `options` [Object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object "Object") _(optional)_
    
    -   `kind` "snapshot" | "screenshot" | "aria" _(optional)_ Added in: v1.53[#](#test-info-snapshot-path-option-kind)
        
        The snapshot kind controls which snapshot path template is used. See [testConfig.snapshotPathTemplate](/docs/api/class-testconfig#test-config-snapshot-path-template) for more details. Defaults to `'snapshot'`.
        

**Returns**

-   [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type "string")[#](#test-info-snapshot-path-return)

* * *

## Properties[​](#properties "Direct link to Properties")

### annotations[​](#test-info-annotations "Direct link to annotations")

Added in: v1.10 testInfo.annotations

The list of annotations applicable to the current test. Includes annotations from the test, annotations from all [test.describe()](/docs/api/class-test#test-describe) groups the test belongs to and file-level annotations for the test file.

Learn more about [test annotations](/docs/test-annotations).

**Usage**

```
testInfo.annotations
```

**Type**

-   [Array](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array "Array")<[Object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object "Object")\>
    -   `type` [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type "string")
        
        Annotation type, for example `'skip'` or `'fail'`.
        
    -   `description` [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type "string") _(optional)_
        
        Optional description.
        
    -   `location` [Location](/docs/api/class-location "Location") _(optional)_
        
        Optional location in the source where the annotation is added.
        

* * *

### attachments[​](#test-info-attachments "Direct link to attachments")

Added in: v1.10 testInfo.attachments

The list of files or buffers attached to the current test. Some reporters show test attachments.

To add an attachment, use [testInfo.attach()](/docs/api/class-testinfo#test-info-attach) instead of directly pushing onto this array.

**Usage**

```
testInfo.attachments
```

**Type**

-   [Array](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array "Array")<[Object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object "Object")\>
    -   `name` [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type "string")
        
        Attachment name.
        
    -   `contentType` [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type "string")
        
        Content type of this attachment to properly present in the report, for example `'application/json'` or `'image/png'`.
        
    -   `path` [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type "string") _(optional)_
        
        Optional path on the filesystem to the attached file.
        
    -   `body` [Buffer](https://nodejs.org/api/buffer.html#buffer_class_buffer "Buffer") _(optional)_
        
        Optional attachment body used instead of a file.
        

* * *

### column[​](#test-info-column "Direct link to column")

Added in: v1.10 testInfo.column

Column number where the currently running test is declared.

**Usage**

```
testInfo.column
```

**Type**

-   [number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type "Number")

* * *

### config[​](#test-info-config "Direct link to config")

Added in: v1.10 testInfo.config

Processed configuration from the [configuration file](/docs/test-configuration).

**Usage**

```
testInfo.config
```

**Type**

-   [FullConfig](/docs/api/class-fullconfig "FullConfig")

* * *

### duration[​](#test-info-duration "Direct link to duration")

Added in: v1.10 testInfo.duration

The number of milliseconds the test took to finish. Always zero before the test finishes, either successfully or not. Can be used in [test.afterEach()](/docs/api/class-test#test-after-each) hook.

**Usage**

```
testInfo.duration
```

**Type**

-   [number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type "Number")

* * *

### error[​](#test-info-error "Direct link to error")

Added in: v1.10 testInfo.error

First error thrown during test execution, if any. This is equal to the first element in [testInfo.errors](/docs/api/class-testinfo#test-info-errors).

**Usage**

```
testInfo.error
```

**Type**

-   [TestInfoError](/docs/api/class-testinfoerror "TestInfoError")

* * *

### errors[​](#test-info-errors "Direct link to errors")

Added in: v1.10 testInfo.errors

Errors thrown during test execution, if any.

**Usage**

```
testInfo.errors
```

**Type**

-   [Array](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array "Array")<[TestInfoError](/docs/api/class-testinfoerror "TestInfoError")\>

* * *

### expectedStatus[​](#test-info-expected-status "Direct link to expectedStatus")

Added in: v1.10 testInfo.expectedStatus

Expected status for the currently running test. This is usually `'passed'`, except for a few cases:

-   `'skipped'` for skipped tests, e.g. with [test.skip()](/docs/api/class-test#test-skip);
-   `'failed'` for tests marked as failed with [test.fail()](/docs/api/class-test#test-fail).

Expected status is usually compared with the actual [testInfo.status](/docs/api/class-testinfo#test-info-status):

```
import { test, expect } from '@playwright/test';test.afterEach(async ({}, testInfo) => {  if (testInfo.status !== testInfo.expectedStatus)    console.log(`${testInfo.title} did not run as expected!`);});
```

**Usage**

```
testInfo.expectedStatus
```

**Type**

-   "passed" | "failed" | "timedOut" | "skipped" | "interrupted"

* * *

### file[​](#test-info-file "Direct link to file")

Added in: v1.10 testInfo.file

Absolute path to a file where the currently running test is declared.

**Usage**

```
testInfo.file
```

**Type**

-   [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type "string")

* * *

### fn[​](#test-info-fn "Direct link to fn")

Added in: v1.10 testInfo.fn

Test function as passed to `test(title, testFunction)`.

**Usage**

```
testInfo.fn
```

**Type**

-   [function](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function "Function")

* * *

### line[​](#test-info-line "Direct link to line")

Added in: v1.10 testInfo.line

Line number where the currently running test is declared.

**Usage**

```
testInfo.line
```

**Type**

-   [number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type "Number")

* * *

### outputDir[​](#test-info-output-dir "Direct link to outputDir")

Added in: v1.10 testInfo.outputDir

Absolute path to the output directory for this specific test run. Each test run gets its own directory so they cannot conflict.

**Usage**

```
testInfo.outputDir
```

**Type**

-   [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type "string")

* * *

### parallelIndex[​](#test-info-parallel-index "Direct link to parallelIndex")

Added in: v1.10 testInfo.parallelIndex

The index of the worker between `0` and `workers - 1`. It is guaranteed that workers running at the same time have a different `parallelIndex`. When a worker is restarted, for example after a failure, the new worker process has the same `parallelIndex`.

Also available as `process.env.TEST_PARALLEL_INDEX`. Learn more about [parallelism and sharding](/docs/test-parallel) with Playwright Test.

**Usage**

```
testInfo.parallelIndex
```

**Type**

-   [number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type "Number")

* * *

### project[​](#test-info-project "Direct link to project")

Added in: v1.10 testInfo.project

Processed project configuration from the [configuration file](/docs/test-configuration).

**Usage**

```
testInfo.project
```

**Type**

-   [FullProject](/docs/api/class-fullproject "FullProject")

* * *

### repeatEachIndex[​](#test-info-repeat-each-index "Direct link to repeatEachIndex")

Added in: v1.10 testInfo.repeatEachIndex

Specifies a unique repeat index when running in "repeat each" mode. This mode is enabled by passing `--repeat-each` to the [command line](/docs/test-cli).

**Usage**

```
testInfo.repeatEachIndex
```

**Type**

-   [number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type "Number")

* * *

### retry[​](#test-info-retry "Direct link to retry")

Added in: v1.10 testInfo.retry

Specifies the retry number when the test is retried after a failure. The first test run has [testInfo.retry](/docs/api/class-testinfo#test-info-retry) equal to zero, the first retry has it equal to one, and so on. Learn more about [retries](/docs/test-retries#retries).

```
import { test, expect } from '@playwright/test';test.beforeEach(async ({}, testInfo) => {  // You can access testInfo.retry in any hook or fixture.  if (testInfo.retry > 0)    console.log(`Retrying!`);});test('my test', async ({ page }, testInfo) => {  // Here we clear some server-side state when retrying.  if (testInfo.retry)    await cleanSomeCachesOnTheServer();  // ...});
```

**Usage**

```
testInfo.retry
```

**Type**

-   [number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type "Number")

* * *

### snapshotDir[​](#test-info-snapshot-dir "Direct link to snapshotDir")

Added in: v1.10 testInfo.snapshotDir

Absolute path to the snapshot output directory for this specific test. Each test suite gets its own directory so they cannot conflict.

This property does not account for the [testProject.snapshotPathTemplate](/docs/api/class-testproject#test-project-snapshot-path-template) configuration.

**Usage**

```
testInfo.snapshotDir
```

**Type**

-   [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type "string")

* * *

### snapshotSuffix[​](#test-info-snapshot-suffix "Direct link to snapshotSuffix")

Added in: v1.10 testInfo.snapshotSuffix

note

Use of [testInfo.snapshotSuffix](/docs/api/class-testinfo#test-info-snapshot-suffix) is discouraged. Please use [testConfig.snapshotPathTemplate](/docs/api/class-testconfig#test-config-snapshot-path-template) to configure snapshot paths.

Suffix used to differentiate snapshots between multiple test configurations. For example, if snapshots depend on the platform, you can set `testInfo.snapshotSuffix` equal to `process.platform`. In this case `expect(value).toMatchSnapshot(snapshotName)` will use different snapshots depending on the platform. Learn more about [snapshots](/docs/test-snapshots).

**Usage**

```
testInfo.snapshotSuffix
```

**Type**

-   [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type "string")

* * *

### status[​](#test-info-status "Direct link to status")

Added in: v1.10 testInfo.status

Actual status for the currently running test. Available after the test has finished in [test.afterEach()](/docs/api/class-test#test-after-each) hook and fixtures.

Status is usually compared with the [testInfo.expectedStatus](/docs/api/class-testinfo#test-info-expected-status):

```
import { test, expect } from '@playwright/test';test.afterEach(async ({}, testInfo) => {  if (testInfo.status !== testInfo.expectedStatus)    console.log(`${testInfo.title} did not run as expected!`);});
```

**Usage**

```
testInfo.status
```

**Type**

-   "passed" | "failed" | "timedOut" | "skipped" | "interrupted"

* * *

### tags[​](#test-info-tags "Direct link to tags")

Added in: v1.43 testInfo.tags

Tags that apply to the test. Learn more about [tags](/docs/test-annotations#tag-tests).

note

Any changes made to this list while the test is running will not be visible to test reporters.

**Usage**

```
testInfo.tags
```

**Type**

-   [Array](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array "Array")<[string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type "string")\>

* * *

### testId[​](#test-info-test-id "Direct link to testId")

Added in: v1.32 testInfo.testId

Test id matching the test case id in the reporter API.

**Usage**

```
testInfo.testId
```

**Type**

-   [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type "string")

* * *

### timeout[​](#test-info-timeout "Direct link to timeout")

Added in: v1.10 testInfo.timeout

Timeout in milliseconds for the currently running test. Zero means no timeout. Learn more about [various timeouts](/docs/test-timeouts).

Timeout is usually specified in the [configuration file](/docs/test-configuration)

```
import { test, expect } from '@playwright/test';test.beforeEach(async ({ page }, testInfo) => {  // Extend timeout for all tests running this hook by 30 seconds.  testInfo.setTimeout(testInfo.timeout + 30000);});
```

**Usage**

```
testInfo.timeout
```

**Type**

-   [number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type "Number")

* * *

### title[​](#test-info-title "Direct link to title")

Added in: v1.10 testInfo.title

The title of the currently running test as passed to `test(title, testFunction)`.

**Usage**

```
testInfo.title
```

**Type**

-   [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type "string")

* * *

### titlePath[​](#test-info-title-path "Direct link to titlePath")

Added in: v1.10 testInfo.titlePath

The full title path starting with the test file name.

**Usage**

```
testInfo.titlePath
```

**Type**

-   [Array](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array "Array")<[string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type "string")\>

* * *

### workerIndex[​](#test-info-worker-index "Direct link to workerIndex")

Added in: v1.10 testInfo.workerIndex

The unique index of the worker process that is running the test. When a worker is restarted, for example after a failure, the new worker process gets a new unique `workerIndex`.

Also available as `process.env.TEST_WORKER_INDEX`. Learn more about [parallelism and sharding](/docs/test-parallel) with Playwright Test.

**Usage**

```
testInfo.workerIndex
```

**Type**

-   [number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type "Number")
