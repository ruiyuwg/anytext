On this page

Represents a step in the \[TestRun\].

* * *

## Methods[​](#methods "Direct link to Methods")

### titlePath[​](#test-step-title-path "Direct link to titlePath")

Added in: v1.10 testStep.titlePath

Returns a list of step titles from the root step down to this step.

**Usage**

```
testStep.titlePath();
```

**Returns**

-   [Array](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array "Array")<[string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type "string")\>[#](#test-step-title-path-return)

* * *

## Properties[​](#properties "Direct link to Properties")

### annotations[​](#test-step-annotations "Direct link to annotations")

Added in: v1.51 testStep.annotations

The list of annotations applicable to the current test step.

**Usage**

```
testStep.annotations
```

**Type**

-   [Array](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array "Array")<[Object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object "Object")\>
    -   `type` [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type "string")
        
        Annotation type, for example `'skip'`.
        
    -   `description` [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type "string") _(optional)_
        
        Optional description.
        
    -   `location` [Location](/docs/api/class-location "Location") _(optional)_
        
        Optional location in the source where the annotation is added.
        

* * *

### attachments[​](#test-step-attachments "Direct link to attachments")

Added in: v1.50 testStep.attachments

The list of files or buffers attached in the step execution through [testInfo.attach()](/docs/api/class-testinfo#test-info-attach).

**Usage**

```
testStep.attachments
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

### category[​](#test-step-category "Direct link to category")

Added in: v1.10 testStep.category

Step category to differentiate steps with different origin and verbosity. Built-in categories are:

-   `expect` for expect calls
-   `fixture` for fixtures setup and teardown
-   `hook` for hooks initialization and teardown
-   `pw:api` for Playwright API calls.
-   `test.step` for test.step API calls.
-   `test.attach` for testInfo.attach API calls.

**Usage**

```
testStep.category
```

**Type**

-   [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type "string")

* * *

### duration[​](#test-step-duration "Direct link to duration")

Added in: v1.10 testStep.duration

Running time in milliseconds.

**Usage**

```
testStep.duration
```

**Type**

-   [number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type "Number")

* * *

### error[​](#test-step-error "Direct link to error")

Added in: v1.10 testStep.error

Error thrown during the step execution, if any.

**Usage**

```
testStep.error
```

**Type**

-   [TestError](/docs/api/class-testerror "TestError")

* * *

### location[​](#test-step-location "Direct link to location")

Added in: v1.10 testStep.location

Optional location in the source where the step is defined.

**Usage**

```
testStep.location
```

**Type**

-   [Location](/docs/api/class-location "Location")

* * *

### parent[​](#test-step-parent "Direct link to parent")

Added in: v1.10 testStep.parent

Parent step, if any.

**Usage**

```
testStep.parent
```

**Type**

-   [TestStep](/docs/api/class-teststep "TestStep")

* * *

### startTime[​](#test-step-start-time "Direct link to startTime")

Added in: v1.10 testStep.startTime

Start time of this particular test step.

**Usage**

```
testStep.startTime
```

**Type**

-   [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date "Date")

* * *

### steps[​](#test-step-steps "Direct link to steps")

Added in: v1.10 testStep.steps

List of steps inside this step.

**Usage**

```
testStep.steps
```

**Type**

-   [Array](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array "Array")<[TestStep](/docs/api/class-teststep "TestStep")\>

* * *

### title[​](#test-step-title "Direct link to title")

Added in: v1.10 testStep.title

User-friendly test step title.

**Usage**

```
testStep.title
```

**Type**

-   [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type "string")
