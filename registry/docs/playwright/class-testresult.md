On this page

A result of a single [TestCase](/docs/api/class-testcase "TestCase") run.

* * *

## Properties[​](#properties "Direct link to Properties")

### annotations[​](#test-result-annotations "Direct link to annotations")

Added in: v1.52 testResult.annotations

The list of annotations applicable to the current test. Includes:

-   annotations defined on the test or suite via [test()](/docs/api/class-test#test-call) and [test.describe()](/docs/api/class-test#test-describe);
-   annotations implicitly added by methods [test.skip()](/docs/api/class-test#test-skip), [test.fixme()](/docs/api/class-test#test-fixme) and [test.fail()](/docs/api/class-test#test-fail);
-   annotations appended to [testInfo.annotations](/docs/api/class-testinfo#test-info-annotations) during the test execution.

Annotations are available during test execution through [testInfo.annotations](/docs/api/class-testinfo#test-info-annotations).

Learn more about [test annotations](/docs/test-annotations).

**Usage**

```
testResult.annotations
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

### attachments[​](#test-result-attachments "Direct link to attachments")

Added in: v1.10 testResult.attachments

The list of files or buffers attached during the test execution through [testInfo.attachments](/docs/api/class-testinfo#test-info-attachments).

**Usage**

```
testResult.attachments
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

### duration[​](#test-result-duration "Direct link to duration")

Added in: v1.10 testResult.duration

Running time in milliseconds.

**Usage**

```
testResult.duration
```

**Type**

-   [number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type "Number")

* * *

### error[​](#test-result-error "Direct link to error")

Added in: v1.10 testResult.error

First error thrown during test execution, if any. This is equal to the first element in [testResult.errors](/docs/api/class-testresult#test-result-errors).

**Usage**

```
testResult.error
```

**Type**

-   [TestError](/docs/api/class-testerror "TestError")

* * *

### errors[​](#test-result-errors "Direct link to errors")

Added in: v1.10 testResult.errors

Errors thrown during the test execution.

**Usage**

```
testResult.errors
```

**Type**

-   [Array](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array "Array")<[TestError](/docs/api/class-testerror "TestError")\>

* * *

### parallelIndex[​](#test-result-parallel-index "Direct link to parallelIndex")

Added in: v1.30 testResult.parallelIndex

The index of the worker between `0` and `workers - 1`. It is guaranteed that workers running at the same time have a different `parallelIndex`.

**Usage**

```
testResult.parallelIndex
```

**Type**

-   [number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type "Number")

* * *

### retry[​](#test-result-retry "Direct link to retry")

Added in: v1.10 testResult.retry

When test is retried multiple times, each retry attempt is given a sequential number.

Learn more about [test retries](/docs/test-retries#retries).

**Usage**

```
testResult.retry
```

**Type**

-   [number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type "Number")

* * *

### startTime[​](#test-result-start-time "Direct link to startTime")

Added in: v1.10 testResult.startTime

Start time of this particular test run.

**Usage**

```
testResult.startTime
```

**Type**

-   [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date "Date")

* * *

### status[​](#test-result-status "Direct link to status")

Added in: v1.10 testResult.status

The status of this test result. See also [testCase.expectedStatus](/docs/api/class-testcase#test-case-expected-status).

**Usage**

```
testResult.status
```

**Type**

-   "passed" | "failed" | "timedOut" | "skipped" | "interrupted"

* * *

### stderr[​](#test-result-stderr "Direct link to stderr")

Added in: v1.10 testResult.stderr

Anything written to the standard error during the test run.

**Usage**

```
testResult.stderr
```

**Type**

-   [Array](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array "Array")<[string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type "string") | [Buffer](https://nodejs.org/api/buffer.html#buffer_class_buffer "Buffer")\>

* * *

### stdout[​](#test-result-stdout "Direct link to stdout")

Added in: v1.10 testResult.stdout

Anything written to the standard output during the test run.

**Usage**

```
testResult.stdout
```

**Type**

-   [Array](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array "Array")<[string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type "string") | [Buffer](https://nodejs.org/api/buffer.html#buffer_class_buffer "Buffer")\>

* * *

### steps[​](#test-result-steps "Direct link to steps")

Added in: v1.10 testResult.steps

List of steps inside this test run.

**Usage**

```
testResult.steps
```

**Type**

-   [Array](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array "Array")<[TestStep](/docs/api/class-teststep "TestStep")\>

* * *

### workerIndex[​](#test-result-worker-index "Direct link to workerIndex")

Added in: v1.10 testResult.workerIndex

Index of the worker where the test was run. If the test was not run a single time, for example when the user interrupted testing, the only result will have a `workerIndex` equal to `-1`.

Learn more about [parallelism and sharding](/docs/test-parallel) with Playwright Test.

**Usage**

```
testResult.workerIndex
```

**Type**

-   [number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type "Number")
