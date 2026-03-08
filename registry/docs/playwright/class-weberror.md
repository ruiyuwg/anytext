On this page

[WebError](/docs/api/class-weberror "WebError") class represents an unhandled exception thrown in the page. It is dispatched via the [browserContext.on('weberror')](/docs/api/class-browsercontext#browser-context-event-web-error) event.

```
// Log all uncaught errors to the terminalcontext.on('weberror', webError => {  console.log(`Uncaught exception: "${webError.error()}"`);});// Navigate to a page with an exception.await page.goto('data:text/html,<script>throw new Error("Test")</script>');
```

* * *

## Methods[​](#methods "Direct link to Methods")

### error[​](#web-error-error "Direct link to error")

Added in: v1.38 webError.error

Unhandled error that was thrown.

**Usage**

```
webError.error();
```

**Returns**

-   [Error](https://nodejs.org/api/errors.html#errors_class_error "Error")[#](#web-error-error-return)

* * *

### page[​](#web-error-page "Direct link to page")

Added in: v1.38 webError.page

The page that produced this unhandled exception, if any.

**Usage**

```
webError.page();
```

**Returns**

-   [null](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/null "null") | [Page](/docs/api/class-page "Page")[#](#web-error-page-return)
