On this page

Information about an error thrown during test execution.

* * *

## Properties[​](#properties "Direct link to Properties")

### cause[​](#test-error-cause "Direct link to cause")

Added in: v1.49 testError.cause

Error cause. Set when there is a [cause](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Error/cause) for the error. Will be `undefined` if there is no cause or if the cause is not an instance of [Error](https://nodejs.org/api/errors.html#errors_class_error "Error").

**Usage**

```
testError.cause
```

**Type**

-   [TestError](/docs/api/class-testerror "TestError")

* * *

### location[​](#test-error-location "Direct link to location")

Added in: v1.30 testError.location

Error location in the source code.

**Usage**

```
testError.location
```

**Type**

-   [Location](/docs/api/class-location "Location")

* * *

### message[​](#test-error-message "Direct link to message")

Added in: v1.10 testError.message

Error message. Set when [Error](https://nodejs.org/api/errors.html#errors_class_error "Error") (or its subclass) has been thrown.

**Usage**

```
testError.message
```

**Type**

-   [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type "string")

* * *

### snippet[​](#test-error-snippet "Direct link to snippet")

Added in: v1.33 testError.snippet

Source code snippet with highlighted error.

**Usage**

```
testError.snippet
```

**Type**

-   [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type "string")

* * *

### stack[​](#test-error-stack "Direct link to stack")

Added in: v1.10 testError.stack

Error stack. Set when [Error](https://nodejs.org/api/errors.html#errors_class_error "Error") (or its subclass) has been thrown.

**Usage**

```
testError.stack
```

**Type**

-   [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type "string")

* * *

### value[​](#test-error-value "Direct link to value")

Added in: v1.10 testError.value

The value that was thrown. Set when anything except the [Error](https://nodejs.org/api/errors.html#errors_class_error "Error") (or its subclass) has been thrown.

**Usage**

```
testError.value
```

**Type**

-   [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type "string")
