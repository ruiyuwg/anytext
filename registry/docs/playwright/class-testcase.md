On this page

`TestCase` corresponds to every [test()](/docs/api/class-test#test-call) call in a test file. When a single [test()](/docs/api/class-test#test-call) is running in multiple projects or repeated multiple times, it will have multiple `TestCase` objects in corresponding projects' suites.

* * *

## Methods[​](#methods "Direct link to Methods")

### ok[​](#test-case-ok "Direct link to ok")

Added in: v1.10 testCase.ok

Whether the test is considered running fine. Non-ok tests fail the test run with non-zero exit code.

**Usage**

```
testCase.ok();
```

**Returns**

-   [boolean](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Boolean_type "Boolean")[#](#test-case-ok-return)

* * *

### outcome[​](#test-case-outcome "Direct link to outcome")

Added in: v1.10 testCase.outcome

Testing outcome for this test. Note that outcome is not the same as [testResult.status](/docs/api/class-testresult#test-result-status):

-   Test that is expected to fail and actually fails is `'expected'`.
-   Test that passes on a second retry is `'flaky'`.

**Usage**

```
testCase.outcome();
```

**Returns**

-   "skipped" | "expected" | "unexpected" | "flaky"[#](#test-case-outcome-return)

* * *

### titlePath[​](#test-case-title-path "Direct link to titlePath")

Added in: v1.10 testCase.titlePath

Returns a list of titles from the root down to this test.

**Usage**

```
testCase.titlePath();
```

**Returns**

-   [Array](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array "Array")<[string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type "string")\>[#](#test-case-title-path-return)

* * *

## Properties[​](#properties "Direct link to Properties")

### annotations[​](#test-case-annotations "Direct link to annotations")

Added in: v1.10 testCase.annotations

[testResult.annotations](/docs/api/class-testresult#test-result-annotations) of the last test run.

**Usage**

```
testCase.annotations
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

### expectedStatus[​](#test-case-expected-status "Direct link to expectedStatus")

Added in: v1.10 testCase.expectedStatus

Expected test status.

-   Tests marked as [test.skip()](/docs/api/class-test#test-skip) or [test.fixme()](/docs/api/class-test#test-fixme) are expected to be `'skipped'`.
-   Tests marked as [test.fail()](/docs/api/class-test#test-fail) are expected to be `'failed'`.
-   Other tests are expected to be `'passed'`.

See also [testResult.status](/docs/api/class-testresult#test-result-status) for the actual status.

**Usage**

```
testCase.expectedStatus
```

**Type**

-   "passed" | "failed" | "timedOut" | "skipped" | "interrupted"

* * *

### id[​](#test-case-id "Direct link to id")

Added in: v1.25 testCase.id

A test ID that is computed based on the test file name, test title and project name. The ID is unique within Playwright session.

**Usage**

```
testCase.id
```

**Type**

-   [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type "string")

* * *

### location[​](#test-case-location "Direct link to location")

Added in: v1.10 testCase.location

Location in the source where the test is defined.

**Usage**

```
testCase.location
```

**Type**

-   [Location](/docs/api/class-location "Location")

* * *

### parent[​](#test-case-parent "Direct link to parent")

Added in: v1.10 testCase.parent

Suite this test case belongs to.

**Usage**

```
testCase.parent
```

**Type**

-   [Suite](/docs/api/class-suite "Suite")

* * *

### repeatEachIndex[​](#test-case-repeat-each-index "Direct link to repeatEachIndex")

Added in: v1.10 testCase.repeatEachIndex

Contains the repeat index when running in "repeat each" mode. This mode is enabled by passing `--repeat-each` to the [command line](/docs/test-cli).

**Usage**

```
testCase.repeatEachIndex
```

**Type**

-   [number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type "Number")

* * *

### results[​](#test-case-results "Direct link to results")

Added in: v1.10 testCase.results

Results for each run of this test.

**Usage**

```
testCase.results
```

**Type**

-   [Array](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array "Array")<[TestResult](/docs/api/class-testresult "TestResult")\>

* * *

### retries[​](#test-case-retries "Direct link to retries")

Added in: v1.10 testCase.retries

The maximum number of retries given to this test in the configuration.

Learn more about [test retries](/docs/test-retries#retries).

**Usage**

```
testCase.retries
```

**Type**

-   [number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type "Number")

* * *

### tags[​](#test-case-tags "Direct link to tags")

Added in: v1.42 testCase.tags

The list of tags defined on the test or suite via [test()](/docs/api/class-test#test-call) or [test.describe()](/docs/api/class-test#test-describe), as well as `@`\-tokens extracted from test and suite titles.

Learn more about [test tags](/docs/test-annotations#tag-tests).

**Usage**

```
testCase.tags
```

**Type**

-   [Array](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array "Array")<[string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type "string")\>

* * *

### timeout[​](#test-case-timeout "Direct link to timeout")

Added in: v1.10 testCase.timeout

The timeout given to the test. Affected by [testConfig.timeout](/docs/api/class-testconfig#test-config-timeout), [testProject.timeout](/docs/api/class-testproject#test-project-timeout), [test.setTimeout()](/docs/api/class-test#test-set-timeout), [test.slow()](/docs/api/class-test#test-slow) and [testInfo.setTimeout()](/docs/api/class-testinfo#test-info-set-timeout).

**Usage**

```
testCase.timeout
```

**Type**

-   [number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type "Number")

* * *

### title[​](#test-case-title "Direct link to title")

Added in: v1.10 testCase.title

Test title as passed to the [test()](/docs/api/class-test#test-call) call.

**Usage**

```
testCase.title
```

**Type**

-   [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type "string")

* * *

### type[​](#test-case-type "Direct link to type")

Added in: v1.44 testCase.type

Returns "test". Useful for detecting test cases in [suite.entries()](/docs/api/class-suite#suite-entries).

**Usage**

```
testCase.type
```

**Type**

-   "test"
