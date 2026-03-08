On this page

Page provides methods to interact with a single tab in a [Browser](/docs/api/class-browser "Browser"), or an [extension background page](https://developer.chrome.com/extensions/background_pages) in Chromium. One [Browser](/docs/api/class-browser "Browser") instance might have multiple [Page](/docs/api/class-page "Page") instances.

This example creates a page, navigates it to a URL, and then saves a screenshot:

```
const { webkit } = require('playwright');  // Or 'chromium' or 'firefox'.(async () => {  const browser = await webkit.launch();  const context = await browser.newContext();  const page = await context.newPage();  await page.goto('https://example.com');  await page.screenshot({ path: 'screenshot.png' });  await browser.close();})();
```

The Page class emits various events (described below) which can be handled using any of Node's native [`EventEmitter`](https://nodejs.org/api/events.html#events_class_eventemitter) methods, such as `on`, `once` or `removeListener`.

This example logs a message for a single page `load` event:

```
page.once('load', () => console.log('Page loaded!'));
```

To unsubscribe from events use the `removeListener` method:

```
function logRequest(interceptedRequest) {  console.log('A request was made:', interceptedRequest.url());}page.on('request', logRequest);// Sometime later...page.removeListener('request', logRequest);
```

* * *

## Methods[​](#methods "Direct link to Methods")

### addInitScript[​](#page-add-init-script "Direct link to addInitScript")

Added before v1.9 page.addInitScript

Adds a script which would be evaluated in one of the following scenarios:

-   Whenever the page is navigated.
-   Whenever the child frame is attached or navigated. In this case, the script is evaluated in the context of the newly attached frame.

The script is evaluated after the document was created but before any of its scripts were run. This is useful to amend the JavaScript environment, e.g. to seed `Math.random`.

**Usage**

An example of overriding `Math.random` before the page loads:

```
// preload.jsMath.random = () => 42;
```

```
// In your playwright script, assuming the preload.js file is in same directoryawait page.addInitScript({ path: './preload.js' });
```

```
await page.addInitScript(mock => {  window.mock = mock;}, mock);
```

note

The order of evaluation of multiple scripts installed via [browserContext.addInitScript()](/docs/api/class-browsercontext#browser-context-add-init-script) and [page.addInitScript()](/docs/api/class-page#page-add-init-script) is not defined.

**Arguments**

-   `script` [function](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function "Function") | [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type "string") | [Object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object "Object")[#](#page-add-init-script-option-script)
    
    -   `path` [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type "string") _(optional)_
        
        Path to the JavaScript file. If `path` is a relative path, then it is resolved relative to the current working directory. Optional.
        
    -   `content` [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type "string") _(optional)_
        
        Raw script content. Optional.
        
    
    Script to be evaluated in the page.
    
-   `arg` [Serializable](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify#Description "Serializable") _(optional)_[#](#page-add-init-script-option-arg)
    
    Optional argument to pass to [script](/docs/api/class-page#page-add-init-script-option-script) (only supported when passing a function).
    

**Returns**

-   [Promise](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise "Promise")<[void](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/undefined "void")\>[#](#page-add-init-script-return)

* * *

### addLocatorHandler[​](#page-add-locator-handler "Direct link to addLocatorHandler")

Added in: v1.42 page.addLocatorHandler

When testing a web page, sometimes unexpected overlays like a "Sign up" dialog appear and block actions you want to automate, e.g. clicking a button. These overlays don't always show up in the same way or at the same time, making them tricky to handle in automated tests.

This method lets you set up a special function, called a handler, that activates when it detects that overlay is visible. The handler's job is to remove the overlay, allowing your test to continue as if the overlay wasn't there.

Things to keep in mind:

-   When an overlay is shown predictably, we recommend explicitly waiting for it in your test and dismissing it as a part of your normal test flow, instead of using [page.addLocatorHandler()](/docs/api/class-page#page-add-locator-handler).
-   Playwright checks for the overlay every time before executing or retrying an action that requires an [actionability check](/docs/actionability), or before performing an auto-waiting assertion check. When overlay is visible, Playwright calls the handler first, and then proceeds with the action/assertion. Note that the handler is only called when you perform an action/assertion - if the overlay becomes visible but you don't perform any actions, the handler will not be triggered.
-   After executing the handler, Playwright will ensure that overlay that triggered the handler is not visible anymore. You can opt-out of this behavior with [noWaitAfter](/docs/api/class-page#page-add-locator-handler-option-no-wait-after).
-   The execution time of the handler counts towards the timeout of the action/assertion that executed the handler. If your handler takes too long, it might cause timeouts.
-   You can register multiple handlers. However, only a single handler will be running at a time. Make sure the actions within a handler don't depend on another handler.

warning

Running the handler will alter your page state mid-test. For example it will change the currently focused element and move the mouse. Make sure that actions that run after the handler are self-contained and do not rely on the focus and mouse state being unchanged.

For example, consider a test that calls [locator.focus()](/docs/api/class-locator#locator-focus) followed by [keyboard.press()](/docs/api/class-keyboard#keyboard-press). If your handler clicks a button between these two actions, the focused element most likely will be wrong, and key press will happen on the unexpected element. Use [locator.press()](/docs/api/class-locator#locator-press) instead to avoid this problem.

Another example is a series of mouse actions, where [mouse.move()](/docs/api/class-mouse#mouse-move) is followed by [mouse.down()](/docs/api/class-mouse#mouse-down). Again, when the handler runs between these two actions, the mouse position will be wrong during the mouse down. Prefer self-contained actions like [locator.click()](/docs/api/class-locator#locator-click) that do not rely on the state being unchanged by a handler.

**Usage**

An example that closes a "Sign up to the newsletter" dialog when it appears:

```
// Setup the handler.await page.addLocatorHandler(page.getByText('Sign up to the newsletter'), async () => {  await page.getByRole('button', { name: 'No thanks' }).click();});// Write the test as usual.await page.goto('https://example.com');await page.getByRole('button', { name: 'Start here' }).click();
```

An example that skips the "Confirm your security details" page when it is shown:

```
// Setup the handler.await page.addLocatorHandler(page.getByText('Confirm your security details'), async () => {  await page.getByRole('button', { name: 'Remind me later' }).click();});// Write the test as usual.await page.goto('https://example.com');await page.getByRole('button', { name: 'Start here' }).click();
```

An example with a custom callback on every actionability check. It uses a `<body>` locator that is always visible, so the handler is called before every actionability check. It is important to specify [noWaitAfter](/docs/api/class-page#page-add-locator-handler-option-no-wait-after), because the handler does not hide the `<body>` element.

```
// Setup the handler.await page.addLocatorHandler(page.locator('body'), async () => {  await page.evaluate(() => window.removeObstructionsForTestIfNeeded());}, { noWaitAfter: true });// Write the test as usual.await page.goto('https://example.com');await page.getByRole('button', { name: 'Start here' }).click();
```

Handler takes the original locator as an argument. You can also automatically remove the handler after a number of invocations by setting [times](/docs/api/class-page#page-add-locator-handler-option-times):

```
await page.addLocatorHandler(page.getByLabel('Close'), async locator => {  await locator.click();}, { times: 1 });
```

**Arguments**

-   `locator` [Locator](/docs/api/class-locator "Locator")[#](#page-add-locator-handler-option-locator)
    
    Locator that triggers the handler.
    
-   `handler` [function](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function "Function")([Locator](/docs/api/class-locator "Locator")):[Promise](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise "Promise")<[Object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object "Object")\>[#](#page-add-locator-handler-option-handler)
    
    Function that should be run once [locator](/docs/api/class-page#page-add-locator-handler-option-locator) appears. This function should get rid of the element that blocks actions like click.
    
-   `options` [Object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object "Object") _(optional)_
    
    -   `noWaitAfter` [boolean](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Boolean_type "Boolean") _(optional)_ Added in: v1.44[#](#page-add-locator-handler-option-no-wait-after)
        
        By default, after calling the handler Playwright will wait until the overlay becomes hidden, and only then Playwright will continue with the action/assertion that triggered the handler. This option allows to opt-out of this behavior, so that overlay can stay visible after the handler has run.
        
    -   `times` [number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type "Number") _(optional)_ Added in: v1.44[#](#page-add-locator-handler-option-times)
        
        Specifies the maximum number of times this handler should be called. Unlimited by default.
        

**Returns**

-   [Promise](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise "Promise")<[void](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/undefined "void")\>[#](#page-add-locator-handler-return)

* * *

### addScriptTag[​](#page-add-script-tag "Direct link to addScriptTag")

Added before v1.9 page.addScriptTag

Adds a `<script>` tag into the page with the desired url or content. Returns the added tag when the script's onload fires or when the script content was injected into frame.

**Usage**

```
await page.addScriptTag();await page.addScriptTag(options);
```

**Arguments**

-   `options` [Object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object "Object") _(optional)_
    -   `content` [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type "string") _(optional)_[#](#page-add-script-tag-option-content)
        
        Raw JavaScript content to be injected into frame.
        
    -   `path` [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type "string") _(optional)_[#](#page-add-script-tag-option-path)
        
        Path to the JavaScript file to be injected into frame. If `path` is a relative path, then it is resolved relative to the current working directory.
        
    -   `type` [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type "string") _(optional)_[#](#page-add-script-tag-option-type)
        
        Script type. Use 'module' in order to load a JavaScript ES6 module. See [script](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/script) for more details.
        
    -   `url` [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type "string") _(optional)_[#](#page-add-script-tag-option-url)
        
        URL of a script to be added.
        

**Returns**

-   [Promise](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise "Promise")<[ElementHandle](/docs/api/class-elementhandle "ElementHandle")\>[#](#page-add-script-tag-return)

* * *

### addStyleTag[​](#page-add-style-tag "Direct link to addStyleTag")

Added before v1.9 page.addStyleTag

Adds a `<link rel="stylesheet">` tag into the page with the desired url or a `<style type="text/css">` tag with the content. Returns the added tag when the stylesheet's onload fires or when the CSS content was injected into frame.

**Usage**

```
await page.addStyleTag();await page.addStyleTag(options);
```

**Arguments**

-   `options` [Object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object "Object") _(optional)_
    -   `content` [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type "string") _(optional)_[#](#page-add-style-tag-option-content)
        
        Raw CSS content to be injected into frame.
        
    -   `path` [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type "string") _(optional)_[#](#page-add-style-tag-option-path)
        
        Path to the CSS file to be injected into frame. If `path` is a relative path, then it is resolved relative to the current working directory.
        
    -   `url` [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type "string") _(optional)_[#](#page-add-style-tag-option-url)
        
        URL of the `<link>` tag.
        

**Returns**

-   [Promise](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise "Promise")<[ElementHandle](/docs/api/class-elementhandle "ElementHandle")\>[#](#page-add-style-tag-return)

* * *

### bringToFront[​](#page-bring-to-front "Direct link to bringToFront")

Added before v1.9 page.bringToFront

Brings page to front (activates tab).

**Usage**

```
await page.bringToFront();
```

**Returns**

-   [Promise](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise "Promise")<[void](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/undefined "void")\>[#](#page-bring-to-front-return)

* * *

### close[​](#page-close "Direct link to close")

Added before v1.9 page.close

If [runBeforeUnload](/docs/api/class-page#page-close-option-run-before-unload) is `false`, does not run any unload handlers and waits for the page to be closed. If [runBeforeUnload](/docs/api/class-page#page-close-option-run-before-unload) is `true` the method will run unload handlers, but will **not** wait for the page to close.

By default, `page.close()` **does not** run `beforeunload` handlers.

note

if [runBeforeUnload](/docs/api/class-page#page-close-option-run-before-unload) is passed as true, a `beforeunload` dialog might be summoned and should be handled manually via [page.on('dialog')](/docs/api/class-page#page-event-dialog) event.

**Usage**

```
await page.close();await page.close(options);
```

**Arguments**

-   `options` [Object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object "Object") _(optional)_
    -   `reason` [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type "string") _(optional)_ Added in: v1.40[#](#page-close-option-reason)
        
        The reason to be reported to the operations interrupted by the page closure.
        
    -   `runBeforeUnload` [boolean](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Boolean_type "Boolean") _(optional)_[#](#page-close-option-run-before-unload)
        
        Defaults to `false`. Whether to run the [before unload](https://developer.mozilla.org/en-US/docs/Web/Events/beforeunload) page handlers.
        

**Returns**

-   [Promise](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise "Promise")<[void](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/undefined "void")\>[#](#page-close-return)

* * *

### consoleMessages[​](#page-console-messages "Direct link to consoleMessages")

Added in: v1.56 page.consoleMessages

Returns up to (currently) 200 last console messages from this page. See [page.on('console')](/docs/api/class-page#page-event-console) for more details.

**Usage**

```
await page.consoleMessages();
```

**Returns**

-   [Promise](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise "Promise")<[Array](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array "Array")<[ConsoleMessage](/docs/api/class-consolemessage "ConsoleMessage")\>>[#](#page-console-messages-return)

* * *

### content[​](#page-content "Direct link to content")

Added before v1.9 page.content

Gets the full HTML contents of the page, including the doctype.

**Usage**

```
await page.content();
```

**Returns**

-   [Promise](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise "Promise")<[string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type "string")\>[#](#page-content-return)

* * *

### context[​](#page-context "Direct link to context")

Added before v1.9 page.context

Get the browser context that the page belongs to.

**Usage**

```
page.context();
```

**Returns**

-   [BrowserContext](/docs/api/class-browsercontext "BrowserContext")[#](#page-context-return)

* * *

### dragAndDrop[​](#page-drag-and-drop "Direct link to dragAndDrop")

Added in: v1.13 page.dragAndDrop

This method drags the source element to the target element. It will first move to the source element, perform a `mousedown`, then move to the target element and perform a `mouseup`.

**Usage**

```
await page.dragAndDrop('#source', '#target');// or specify exact positions relative to the top-left corners of the elements:await page.dragAndDrop('#source', '#target', {  sourcePosition: { x: 34, y: 7 },  targetPosition: { x: 10, y: 20 },});
```

**Arguments**

-   `source` [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type "string")[#](#page-drag-and-drop-option-source)
    
    A selector to search for an element to drag. If there are multiple elements satisfying the selector, the first will be used.
    
-   `target` [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type "string")[#](#page-drag-and-drop-option-target)
    
    A selector to search for an element to drop onto. If there are multiple elements satisfying the selector, the first will be used.
    
-   `options` [Object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object "Object") _(optional)_
    
    -   `force` [boolean](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Boolean_type "Boolean") _(optional)_[#](#page-drag-and-drop-option-force)
        
        Whether to bypass the [actionability](/docs/actionability) checks. Defaults to `false`.
        
    -   `noWaitAfter` [boolean](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Boolean_type "Boolean") _(optional)_[#](#page-drag-and-drop-option-no-wait-after)
        
        Deprecated
        
        This option has no effect.
        
        This option has no effect.
        
    -   `sourcePosition` [Object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object "Object") _(optional)_ Added in: v1.14[#](#page-drag-and-drop-option-source-position)
        
        -   `x` [number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type "Number")
            
        -   `y` [number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type "Number")
            
        
        Clicks on the source element at this point relative to the top-left corner of the element's padding box. If not specified, some visible point of the element is used.
        
    -   `steps` [number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type "Number") _(optional)_ Added in: v1.57[#](#page-drag-and-drop-option-steps)
        
        Defaults to 1. Sends `n` interpolated `mousemove` events to represent travel between the `mousedown` and `mouseup` of the drag. When set to 1, emits a single `mousemove` event at the destination location.
        
    -   `strict` [boolean](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Boolean_type "Boolean") _(optional)_ Added in: v1.14[#](#page-drag-and-drop-option-strict)
        
        When true, the call requires selector to resolve to a single element. If given selector resolves to more than one element, the call throws an exception.
        
    -   `targetPosition` [Object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object "Object") _(optional)_ Added in: v1.14[#](#page-drag-and-drop-option-target-position)
        
        -   `x` [number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type "Number")
            
        -   `y` [number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type "Number")
            
        
        Drops on the target element at this point relative to the top-left corner of the element's padding box. If not specified, some visible point of the element is used.
        
    -   `timeout` [number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type "Number") _(optional)_[#](#page-drag-and-drop-option-timeout)
        
        Maximum time in milliseconds. Defaults to `0` - no timeout. The default value can be changed via `actionTimeout` option in the config, or by using the [browserContext.setDefaultTimeout()](/docs/api/class-browsercontext#browser-context-set-default-timeout) or [page.setDefaultTimeout()](/docs/api/class-page#page-set-default-timeout) methods.
        
    -   `trial` [boolean](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Boolean_type "Boolean") _(optional)_[#](#page-drag-and-drop-option-trial)
        
        When set, this method only performs the [actionability](/docs/actionability) checks and skips the action. Defaults to `false`. Useful to wait until the element is ready for the action without performing it.
        

**Returns**

-   [Promise](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise "Promise")<[void](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/undefined "void")\>[#](#page-drag-and-drop-return)

* * *

### emulateMedia[​](#page-emulate-media "Direct link to emulateMedia")

Added before v1.9 page.emulateMedia

This method changes the `CSS media type` through the `media` argument, and/or the `'prefers-colors-scheme'` media feature, using the `colorScheme` argument.

**Usage**

```
await page.evaluate(() => matchMedia('screen').matches);// → trueawait page.evaluate(() => matchMedia('print').matches);// → falseawait page.emulateMedia({ media: 'print' });await page.evaluate(() => matchMedia('screen').matches);// → falseawait page.evaluate(() => matchMedia('print').matches);// → trueawait page.emulateMedia({});await page.evaluate(() => matchMedia('screen').matches);// → trueawait page.evaluate(() => matchMedia('print').matches);// → false
```

```
await page.emulateMedia({ colorScheme: 'dark' });await page.evaluate(() => matchMedia('(prefers-color-scheme: dark)').matches);// → trueawait page.evaluate(() => matchMedia('(prefers-color-scheme: light)').matches);// → false
```

**Arguments**

-   `options` [Object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object "Object") _(optional)_
    -   `colorScheme` [null](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/null "null") | "light" | "dark" | "no-preference" _(optional)_ Added in: v1.9[#](#page-emulate-media-option-color-scheme)
        
        Emulates [prefers-colors-scheme](https://developer.mozilla.org/en-US/docs/Web/CSS/@media/prefers-color-scheme) media feature, supported values are `'light'` and `'dark'`. Passing `null` disables color scheme emulation. `'no-preference'` is deprecated.
        
    -   `contrast` [null](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/null "null") | "no-preference" | "more" _(optional)_ Added in: v1.51[#](#page-emulate-media-option-contrast)
        
        Emulates `'prefers-contrast'` media feature, supported values are `'no-preference'`, `'more'`. Passing `null` disables contrast emulation.
        
    -   `forcedColors` [null](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/null "null") | "active" | "none" _(optional)_ Added in: v1.15[#](#page-emulate-media-option-forced-colors)
        
        Emulates `'forced-colors'` media feature, supported values are `'active'` and `'none'`. Passing `null` disables forced colors emulation.
        
    -   `media` [null](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/null "null") | "screen" | "print" _(optional)_ Added in: v1.9[#](#page-emulate-media-option-media)
        
        Changes the CSS media type of the page. The only allowed values are `'screen'`, `'print'` and `null`. Passing `null` disables CSS media emulation.
        
    -   `reducedMotion` [null](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/null "null") | "reduce" | "no-preference" _(optional)_ Added in: v1.12[#](#page-emulate-media-option-reduced-motion)
        
        Emulates `'prefers-reduced-motion'` media feature, supported values are `'reduce'`, `'no-preference'`. Passing `null` disables reduced motion emulation.
        

**Returns**

-   [Promise](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise "Promise")<[void](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/undefined "void")\>[#](#page-emulate-media-return)

* * *

### evaluate[​](#page-evaluate "Direct link to evaluate")

Added before v1.9 page.evaluate

Returns the value of the [pageFunction](/docs/api/class-page#page-evaluate-option-expression) invocation.

If the function passed to the [page.evaluate()](/docs/api/class-page#page-evaluate) returns a [Promise](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise "Promise"), then [page.evaluate()](/docs/api/class-page#page-evaluate) would wait for the promise to resolve and return its value.

If the function passed to the [page.evaluate()](/docs/api/class-page#page-evaluate) returns a non-[Serializable](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify#Description "Serializable") value, then [page.evaluate()](/docs/api/class-page#page-evaluate) resolves to `undefined`. Playwright also supports transferring some additional values that are not serializable by `JSON`: `-0`, `NaN`, `Infinity`, `-Infinity`.

**Usage**

Passing argument to [pageFunction](/docs/api/class-page#page-evaluate-option-expression):

```
const result = await page.evaluate(([x, y]) => {  return Promise.resolve(x * y);}, [7, 8]);console.log(result); // prints "56"
```

A string can also be passed in instead of a function:

```
console.log(await page.evaluate('1 + 2')); // prints "3"const x = 10;console.log(await page.evaluate(`1 + ${x}`)); // prints "11"
```

[ElementHandle](/docs/api/class-elementhandle "ElementHandle") instances can be passed as an argument to the [page.evaluate()](/docs/api/class-page#page-evaluate):

```
const bodyHandle = await page.evaluate('document.body');const html = await page.evaluate<string, HTMLElement>(([body, suffix]) =>  body.innerHTML + suffix, [bodyHandle, 'hello']);await bodyHandle.dispose();
```

**Arguments**

-   `pageFunction` [function](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function "Function") | [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type "string")[#](#page-evaluate-option-expression)
    
    Function to be evaluated in the page context.
    
-   `arg` [EvaluationArgument](/docs/evaluating#evaluation-argument "EvaluationArgument") _(optional)_[#](#page-evaluate-option-arg)
    
    Optional argument to pass to [pageFunction](/docs/api/class-page#page-evaluate-option-expression).
    

**Returns**

-   [Promise](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise "Promise")<[Serializable](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify#Description "Serializable")\>[#](#page-evaluate-return)

* * *

### evaluateHandle[​](#page-evaluate-handle "Direct link to evaluateHandle")

Added before v1.9 page.evaluateHandle

Returns the value of the [pageFunction](/docs/api/class-page#page-evaluate-handle-option-expression) invocation as a [JSHandle](/docs/api/class-jshandle "JSHandle").

The only difference between [page.evaluate()](/docs/api/class-page#page-evaluate) and [page.evaluateHandle()](/docs/api/class-page#page-evaluate-handle) is that [page.evaluateHandle()](/docs/api/class-page#page-evaluate-handle) returns [JSHandle](/docs/api/class-jshandle "JSHandle").

If the function passed to the [page.evaluateHandle()](/docs/api/class-page#page-evaluate-handle) returns a [Promise](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise "Promise"), then [page.evaluateHandle()](/docs/api/class-page#page-evaluate-handle) would wait for the promise to resolve and return its value.

**Usage**

```
// Handle for the window object.const aWindowHandle = await page.evaluateHandle(() => Promise.resolve(window));
```

A string can also be passed in instead of a function:

```
const aHandle = await page.evaluateHandle('document'); // Handle for the 'document'
```

[JSHandle](/docs/api/class-jshandle "JSHandle") instances can be passed as an argument to the [page.evaluateHandle()](/docs/api/class-page#page-evaluate-handle):

```
const aHandle = await page.evaluateHandle(() => document.body);const resultHandle = await page.evaluateHandle(body => body.innerHTML, aHandle);console.log(await resultHandle.jsonValue());await resultHandle.dispose();
```

**Arguments**

-   `pageFunction` [function](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function "Function") | [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type "string")[#](#page-evaluate-handle-option-expression)
    
    Function to be evaluated in the page context.
    
-   `arg` [EvaluationArgument](/docs/evaluating#evaluation-argument "EvaluationArgument") _(optional)_[#](#page-evaluate-handle-option-arg)
    
    Optional argument to pass to [pageFunction](/docs/api/class-page#page-evaluate-handle-option-expression).
    

**Returns**

-   [Promise](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise "Promise")<[JSHandle](/docs/api/class-jshandle "JSHandle")\>[#](#page-evaluate-handle-return)

* * *

### exposeBinding[​](#page-expose-binding "Direct link to exposeBinding")

Added before v1.9 page.exposeBinding

The method adds a function called [name](/docs/api/class-page#page-expose-binding-option-name) on the `window` object of every frame in this page. When called, the function executes [callback](/docs/api/class-page#page-expose-binding-option-callback) and returns a [Promise](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise "Promise") which resolves to the return value of [callback](/docs/api/class-page#page-expose-binding-option-callback). If the [callback](/docs/api/class-page#page-expose-binding-option-callback) returns a [Promise](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise "Promise"), it will be awaited.

The first argument of the [callback](/docs/api/class-page#page-expose-binding-option-callback) function contains information about the caller: `{ browserContext: BrowserContext, page: Page, frame: Frame }`.

See [browserContext.exposeBinding()](/docs/api/class-browsercontext#browser-context-expose-binding) for the context-wide version.

note

Functions installed via [page.exposeBinding()](/docs/api/class-page#page-expose-binding) survive navigations.

**Usage**

An example of exposing page URL to all frames in a page:

```
const { webkit } = require('playwright');  // Or 'chromium' or 'firefox'.(async () => {  const browser = await webkit.launch({ headless: false });  const context = await browser.newContext();  const page = await context.newPage();  await page.exposeBinding('pageURL', ({ page }) => page.url());  await page.setContent(`    <script>      async function onClick() {        document.querySelector('div').textContent = await window.pageURL();      }    </script>    <button onclick="onClick()">Click me</button>    <div></div>  `);  await page.click('button');})();
```

**Arguments**

-   `name` [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type "string")[#](#page-expose-binding-option-name)
    
    Name of the function on the window object.
    
-   `callback` [function](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function "Function")[#](#page-expose-binding-option-callback)
    
    Callback function that will be called in the Playwright's context.
    
-   `options` [Object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object "Object") _(optional)_
    
    -   `handle` [boolean](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Boolean_type "Boolean") _(optional)_[#](#page-expose-binding-option-handle)
        
        Deprecated
        
        This option will be removed in the future.
        
        Whether to pass the argument as a handle, instead of passing by value. When passing a handle, only one argument is supported. When passing by value, multiple arguments are supported.
        

**Returns**

-   [Promise](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise "Promise")<[void](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/undefined "void")\>[#](#page-expose-binding-return)

* * *

### exposeFunction[​](#page-expose-function "Direct link to exposeFunction")

Added before v1.9 page.exposeFunction

The method adds a function called [name](/docs/api/class-page#page-expose-function-option-name) on the `window` object of every frame in the page. When called, the function executes [callback](/docs/api/class-page#page-expose-function-option-callback) and returns a [Promise](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise "Promise") which resolves to the return value of [callback](/docs/api/class-page#page-expose-function-option-callback).

If the [callback](/docs/api/class-page#page-expose-function-option-callback) returns a [Promise](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise "Promise"), it will be awaited.

See [browserContext.exposeFunction()](/docs/api/class-browsercontext#browser-context-expose-function) for context-wide exposed function.

note

Functions installed via [page.exposeFunction()](/docs/api/class-page#page-expose-function) survive navigations.

**Usage**

An example of adding a `sha256` function to the page:

```
const { webkit } = require('playwright');  // Or 'chromium' or 'firefox'.const crypto = require('crypto');(async () => {  const browser = await webkit.launch({ headless: false });  const page = await browser.newPage();  await page.exposeFunction('sha256', text =>    crypto.createHash('sha256').update(text).digest('hex'),  );  await page.setContent(`    <script>      async function onClick() {        document.querySelector('div').textContent = await window.sha256('PLAYWRIGHT');      }    </script>    <button onclick="onClick()">Click me</button>    <div></div>  `);  await page.click('button');})();
```

**Arguments**

-   `name` [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type "string")[#](#page-expose-function-option-name)
    
    Name of the function on the window object
    
-   `callback` [function](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function "Function")[#](#page-expose-function-option-callback)
    
    Callback function which will be called in Playwright's context.
    

**Returns**

-   [Promise](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise "Promise")<[void](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/undefined "void")\>[#](#page-expose-function-return)

* * *

### frame[​](#page-frame "Direct link to frame")

Added before v1.9 page.frame

Returns frame matching the specified criteria. Either `name` or `url` must be specified.

**Usage**

```
const frame = page.frame('frame-name');
```

```
const frame = page.frame({ url: /.*domain.*/ });
```

**Arguments**

-   `frameSelector` [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type "string") | [Object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object "Object")[#](#page-frame-option-frame-selector)
    
    -   `name` [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type "string") _(optional)_
        
        Frame name specified in the `iframe`'s `name` attribute. Optional.
        
    -   `url` [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type "string") | [RegExp](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp "RegExp") | [function](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function "Function")([URL](https://nodejs.org/api/url.html "URL")):[boolean](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Boolean_type "Boolean") _(optional)_
        
        A glob pattern, regex pattern or predicate receiving frame's `url` as a [URL](https://nodejs.org/api/url.html "URL") object. Optional.
        
    
    Frame name or other frame lookup options.
    

**Returns**

-   [null](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/null "null") | [Frame](/docs/api/class-frame "Frame")[#](#page-frame-return)

* * *

### frameLocator[​](#page-frame-locator "Direct link to frameLocator")

Added in: v1.17 page.frameLocator

When working with iframes, you can create a frame locator that will enter the iframe and allow selecting elements in that iframe.

**Usage**

Following snippet locates element with text "Submit" in the iframe with id `my-frame`, like `<iframe id="my-frame">`:

```
const locator = page.frameLocator('#my-iframe').getByText('Submit');await locator.click();
```

**Arguments**

-   `selector` [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type "string")[#](#page-frame-locator-option-selector)
    
    A selector to use when resolving DOM element.
    

**Returns**

-   [FrameLocator](/docs/api/class-framelocator "FrameLocator")[#](#page-frame-locator-return)

* * *

### frames[​](#page-frames "Direct link to frames")

Added before v1.9 page.frames

An array of all frames attached to the page.

**Usage**

```
page.frames();
```

**Returns**

-   [Array](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array "Array")<[Frame](/docs/api/class-frame "Frame")\>[#](#page-frames-return)

* * *

### getByAltText[​](#page-get-by-alt-text "Direct link to getByAltText")

Added in: v1.27 page.getByAltText

Allows locating elements by their alt text.

**Usage**

For example, this method will find the image by alt text "Playwright logo":

```
<img alt='Playwright logo'>
```

```
await page.getByAltText('Playwright logo').click();
```

**Arguments**

-   `text` [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type "string") | [RegExp](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp "RegExp")[#](#page-get-by-alt-text-option-text)
    
    Text to locate the element for.
    
-   `options` [Object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object "Object") _(optional)_
    
    -   `exact` [boolean](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Boolean_type "Boolean") _(optional)_[#](#page-get-by-alt-text-option-exact)
        
        Whether to find an exact match: case-sensitive and whole-string. Default to false. Ignored when locating by a regular expression. Note that exact match still trims whitespace.
        

**Returns**

-   [Locator](/docs/api/class-locator "Locator")[#](#page-get-by-alt-text-return)

* * *

### getByLabel[​](#page-get-by-label "Direct link to getByLabel")

Added in: v1.27 page.getByLabel

Allows locating input elements by the text of the associated `<label>` or `aria-labelledby` element, or by the `aria-label` attribute.

**Usage**

For example, this method will find inputs by label "Username" and "Password" in the following DOM:

```
<input aria-label="Username"><label for="password-input">Password:</label><input id="password-input">
```

```
await page.getByLabel('Username').fill('john');await page.getByLabel('Password').fill('secret');
```

**Arguments**

-   `text` [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type "string") | [RegExp](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp "RegExp")[#](#page-get-by-label-option-text)
    
    Text to locate the element for.
    
-   `options` [Object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object "Object") _(optional)_
    
    -   `exact` [boolean](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Boolean_type "Boolean") _(optional)_[#](#page-get-by-label-option-exact)
        
        Whether to find an exact match: case-sensitive and whole-string. Default to false. Ignored when locating by a regular expression. Note that exact match still trims whitespace.
        

**Returns**

-   [Locator](/docs/api/class-locator "Locator")[#](#page-get-by-label-return)

* * *

### getByPlaceholder[​](#page-get-by-placeholder "Direct link to getByPlaceholder")

Added in: v1.27 page.getByPlaceholder

Allows locating input elements by the placeholder text.

**Usage**

For example, consider the following DOM structure.

```
<input type="email" placeholder="name@example.com" />
```

You can fill the input after locating it by the placeholder text:

```
await page    .getByPlaceholder('name@example.com')    .fill('playwright@microsoft.com');
```

**Arguments**

-   `text` [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type "string") | [RegExp](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp "RegExp")[#](#page-get-by-placeholder-option-text)
    
    Text to locate the element for.
    
-   `options` [Object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object "Object") _(optional)_
    
    -   `exact` [boolean](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Boolean_type "Boolean") _(optional)_[#](#page-get-by-placeholder-option-exact)
        
        Whether to find an exact match: case-sensitive and whole-string. Default to false. Ignored when locating by a regular expression. Note that exact match still trims whitespace.
        

**Returns**

-   [Locator](/docs/api/class-locator "Locator")[#](#page-get-by-placeholder-return)

* * *

### getByRole[​](#page-get-by-role "Direct link to getByRole")

Added in: v1.27 page.getByRole

Allows locating elements by their [ARIA role](https://www.w3.org/TR/wai-aria-1.2/#roles), [ARIA attributes](https://www.w3.org/TR/wai-aria-1.2/#aria-attributes) and [accessible name](https://w3c.github.io/accname/#dfn-accessible-name).

**Usage**

Consider the following DOM structure.

```
<h3>Sign up</h3><label>  <input type="checkbox" /> Subscribe</label><br/><button>Submit</button>
```

You can locate each element by it's implicit role:

```
await expect(page.getByRole('heading', { name: 'Sign up' })).toBeVisible();await page.getByRole('checkbox', { name: 'Subscribe' }).check();await page.getByRole('button', { name: /submit/i }).click();
```

**Arguments**

-   `role` "alert" | "alertdialog" | "application" | "article" | "banner" | "blockquote" | "button" | "caption" | "cell" | "checkbox" | "code" | "columnheader" | "combobox" | "complementary" | "contentinfo" | "definition" | "deletion" | "dialog" | "directory" | "document" | "emphasis" | "feed" | "figure" | "form" | "generic" | "grid" | "gridcell" | "group" | "heading" | "img" | "insertion" | "link" | "list" | "listbox" | "listitem" | "log" | "main" | "marquee" | "math" | "meter" | "menu" | "menubar" | "menuitem" | "menuitemcheckbox" | "menuitemradio" | "navigation" | "none" | "note" | "option" | "paragraph" | "presentation" | "progressbar" | "radio" | "radiogroup" | "region" | "row" | "rowgroup" | "rowheader" | "scrollbar" | "search" | "searchbox" | "separator" | "slider" | "spinbutton" | "status" | "strong" | "subscript" | "superscript" | "switch" | "tab" | "table" | "tablist" | "tabpanel" | "term" | "textbox" | "time" | "timer" | "toolbar" | "tooltip" | "tree" | "treegrid" | "treeitem"[#](#page-get-by-role-option-role)
    
    Required aria role.
    
-   `options` [Object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object "Object") _(optional)_
    
    -   `checked` [boolean](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Boolean_type "Boolean") _(optional)_[#](#page-get-by-role-option-checked)
        
        An attribute that is usually set by `aria-checked` or native `<input type=checkbox>` controls.
        
        Learn more about [`aria-checked`](https://www.w3.org/TR/wai-aria-1.2/#aria-checked).
        
    -   `disabled` [boolean](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Boolean_type "Boolean") _(optional)_[#](#page-get-by-role-option-disabled)
        
        An attribute that is usually set by `aria-disabled` or `disabled`.
        
        note
        
        Unlike most other attributes, `disabled` is inherited through the DOM hierarchy. Learn more about [`aria-disabled`](https://www.w3.org/TR/wai-aria-1.2/#aria-disabled).
        
    -   `exact` [boolean](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Boolean_type "Boolean") _(optional)_ Added in: v1.28[#](#page-get-by-role-option-exact)
        
        Whether [name](/docs/api/class-page#page-get-by-role-option-name) is matched exactly: case-sensitive and whole-string. Defaults to false. Ignored when [name](/docs/api/class-page#page-get-by-role-option-name) is a regular expression. Note that exact match still trims whitespace.
        
    -   `expanded` [boolean](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Boolean_type "Boolean") _(optional)_[#](#page-get-by-role-option-expanded)
        
        An attribute that is usually set by `aria-expanded`.
        
        Learn more about [`aria-expanded`](https://www.w3.org/TR/wai-aria-1.2/#aria-expanded).
        
    -   `includeHidden` [boolean](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Boolean_type "Boolean") _(optional)_[#](#page-get-by-role-option-include-hidden)
        
        Option that controls whether hidden elements are matched. By default, only non-hidden elements, as [defined by ARIA](https://www.w3.org/TR/wai-aria-1.2/#tree_exclusion), are matched by role selector.
        
        Learn more about [`aria-hidden`](https://www.w3.org/TR/wai-aria-1.2/#aria-hidden).
        
    -   `level` [number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type "Number") _(optional)_[#](#page-get-by-role-option-level)
        
        A number attribute that is usually present for roles `heading`, `listitem`, `row`, `treeitem`, with default values for `<h1>-<h6>` elements.
        
        Learn more about [`aria-level`](https://www.w3.org/TR/wai-aria-1.2/#aria-level).
        
    -   `name` [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type "string") | [RegExp](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp "RegExp") _(optional)_[#](#page-get-by-role-option-name)
        
        Option to match the [accessible name](https://w3c.github.io/accname/#dfn-accessible-name). By default, matching is case-insensitive and searches for a substring, use [exact](/docs/api/class-page#page-get-by-role-option-exact) to control this behavior.
        
        Learn more about [accessible name](https://w3c.github.io/accname/#dfn-accessible-name).
        
    -   `pressed` [boolean](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Boolean_type "Boolean") _(optional)_[#](#page-get-by-role-option-pressed)
        
        An attribute that is usually set by `aria-pressed`.
        
        Learn more about [`aria-pressed`](https://www.w3.org/TR/wai-aria-1.2/#aria-pressed).
        
    -   `selected` [boolean](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Boolean_type "Boolean") _(optional)_[#](#page-get-by-role-option-selected)
        
        An attribute that is usually set by `aria-selected`.
        
        Learn more about [`aria-selected`](https://www.w3.org/TR/wai-aria-1.2/#aria-selected).
        

**Returns**

-   [Locator](/docs/api/class-locator "Locator")[#](#page-get-by-role-return)

**Details**

Role selector **does not replace** accessibility audits and conformance tests, but rather gives early feedback about the ARIA guidelines.

Many html elements have an implicitly [defined role](https://w3c.github.io/html-aam/#html-element-role-mappings) that is recognized by the role selector. You can find all the [supported roles here](https://www.w3.org/TR/wai-aria-1.2/#role_definitions). ARIA guidelines **do not recommend** duplicating implicit roles and attributes by setting `role` and/or `aria-*` attributes to default values.

* * *

### getByTestId[​](#page-get-by-test-id "Direct link to getByTestId")

Added in: v1.27 page.getByTestId

Locate element by the test id.

**Usage**

Consider the following DOM structure.

```
<button data-testid="directions">Itinéraire</button>
```

You can locate the element by it's test id:

```
await page.getByTestId('directions').click();
```

**Arguments**

-   `testId` [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type "string") | [RegExp](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp "RegExp")[#](#page-get-by-test-id-option-test-id)
    
    Id to locate the element by.
    

**Returns**

-   [Locator](/docs/api/class-locator "Locator")[#](#page-get-by-test-id-return)

**Details**

By default, the `data-testid` attribute is used as a test id. Use [selectors.setTestIdAttribute()](/docs/api/class-selectors#selectors-set-test-id-attribute) to configure a different test id attribute if necessary.

```
// Set custom test id attribute from @playwright/test config:import { defineConfig } from '@playwright/test';export default defineConfig({  use: {    testIdAttribute: 'data-pw'  },});
```

* * *

### getByText[​](#page-get-by-text "Direct link to getByText")

Added in: v1.27 page.getByText

Allows locating elements that contain given text.

See also [locator.filter()](/docs/api/class-locator#locator-filter) that allows to match by another criteria, like an accessible role, and then filter by the text content.

**Usage**

Consider the following DOM structure:

```
<div>Hello <span>world</span></div><div>Hello</div>
```

You can locate by text substring, exact string, or a regular expression:

```
// Matches <span>page.getByText('world');// Matches first <div>page.getByText('Hello world');// Matches second <div>page.getByText('Hello', { exact: true });// Matches both <div>spage.getByText(/Hello/);// Matches second <div>page.getByText(/^hello$/i);
```

**Arguments**

-   `text` [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type "string") | [RegExp](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp "RegExp")[#](#page-get-by-text-option-text)
    
    Text to locate the element for.
    
-   `options` [Object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object "Object") _(optional)_
    
    -   `exact` [boolean](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Boolean_type "Boolean") _(optional)_[#](#page-get-by-text-option-exact)
        
        Whether to find an exact match: case-sensitive and whole-string. Default to false. Ignored when locating by a regular expression. Note that exact match still trims whitespace.
        

**Returns**

-   [Locator](/docs/api/class-locator "Locator")[#](#page-get-by-text-return)

**Details**

Matching by text always normalizes whitespace, even with exact match. For example, it turns multiple spaces into one, turns line breaks into spaces and ignores leading and trailing whitespace.

Input elements of the type `button` and `submit` are matched by their `value` instead of the text content. For example, locating by text `"Log in"` matches `<input type=button value="Log in">`.

* * *

### getByTitle[​](#page-get-by-title "Direct link to getByTitle")

Added in: v1.27 page.getByTitle

Allows locating elements by their title attribute.

**Usage**

Consider the following DOM structure.

```
<span title='Issues count'>25 issues</span>
```

You can check the issues count after locating it by the title text:

```
await expect(page.getByTitle('Issues count')).toHaveText('25 issues');
```

**Arguments**

-   `text` [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type "string") | [RegExp](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp "RegExp")[#](#page-get-by-title-option-text)
    
    Text to locate the element for.
    
-   `options` [Object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object "Object") _(optional)_
    
    -   `exact` [boolean](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Boolean_type "Boolean") _(optional)_[#](#page-get-by-title-option-exact)
        
        Whether to find an exact match: case-sensitive and whole-string. Default to false. Ignored when locating by a regular expression. Note that exact match still trims whitespace.
        

**Returns**

-   [Locator](/docs/api/class-locator "Locator")[#](#page-get-by-title-return)

* * *

### goBack[​](#page-go-back "Direct link to goBack")

Added before v1.9 page.goBack

Returns the main resource response. In case of multiple redirects, the navigation will resolve with the response of the last redirect. If cannot go back, returns `null`.

Navigate to the previous page in history.

**Usage**

```
await page.goBack();await page.goBack(options);
```

**Arguments**

-   `options` [Object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object "Object") _(optional)_
    -   `timeout` [number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type "Number") _(optional)_[#](#page-go-back-option-timeout)
        
        Maximum operation time in milliseconds. Defaults to `0` - no timeout. The default value can be changed via `navigationTimeout` option in the config, or by using the [browserContext.setDefaultNavigationTimeout()](/docs/api/class-browsercontext#browser-context-set-default-navigation-timeout), [browserContext.setDefaultTimeout()](/docs/api/class-browsercontext#browser-context-set-default-timeout), [page.setDefaultNavigationTimeout()](/docs/api/class-page#page-set-default-navigation-timeout) or [page.setDefaultTimeout()](/docs/api/class-page#page-set-default-timeout) methods.
        
    -   `waitUntil` "load" | "domcontentloaded" | "networkidle" | "commit" _(optional)_[#](#page-go-back-option-wait-until)
        
        When to consider operation succeeded, defaults to `load`. Events can be either:
        
        -   `'domcontentloaded'` - consider operation to be finished when the `DOMContentLoaded` event is fired.
        -   `'load'` - consider operation to be finished when the `load` event is fired.
        -   `'networkidle'` - **DISCOURAGED** consider operation to be finished when there are no network connections for at least `500` ms. Don't use this method for testing, rely on web assertions to assess readiness instead.
        -   `'commit'` - consider operation to be finished when network response is received and the document started loading.

**Returns**

-   [Promise](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise "Promise")<[null](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/null "null") | [Response](/docs/api/class-response "Response")\>[#](#page-go-back-return)

* * *

### goForward[​](#page-go-forward "Direct link to goForward")

Added before v1.9 page.goForward

Returns the main resource response. In case of multiple redirects, the navigation will resolve with the response of the last redirect. If cannot go forward, returns `null`.

Navigate to the next page in history.

**Usage**

```
await page.goForward();await page.goForward(options);
```

**Arguments**

-   `options` [Object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object "Object") _(optional)_
    -   `timeout` [number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type "Number") _(optional)_[#](#page-go-forward-option-timeout)
        
        Maximum operation time in milliseconds. Defaults to `0` - no timeout. The default value can be changed via `navigationTimeout` option in the config, or by using the [browserContext.setDefaultNavigationTimeout()](/docs/api/class-browsercontext#browser-context-set-default-navigation-timeout), [browserContext.setDefaultTimeout()](/docs/api/class-browsercontext#browser-context-set-default-timeout), [page.setDefaultNavigationTimeout()](/docs/api/class-page#page-set-default-navigation-timeout) or [page.setDefaultTimeout()](/docs/api/class-page#page-set-default-timeout) methods.
        
    -   `waitUntil` "load" | "domcontentloaded" | "networkidle" | "commit" _(optional)_[#](#page-go-forward-option-wait-until)
        
        When to consider operation succeeded, defaults to `load`. Events can be either:
        
        -   `'domcontentloaded'` - consider operation to be finished when the `DOMContentLoaded` event is fired.
        -   `'load'` - consider operation to be finished when the `load` event is fired.
        -   `'networkidle'` - **DISCOURAGED** consider operation to be finished when there are no network connections for at least `500` ms. Don't use this method for testing, rely on web assertions to assess readiness instead.
        -   `'commit'` - consider operation to be finished when network response is received and the document started loading.

**Returns**

-   [Promise](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise "Promise")<[null](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/null "null") | [Response](/docs/api/class-response "Response")\>[#](#page-go-forward-return)

* * *

### goto[​](#page-goto "Direct link to goto")

Added before v1.9 page.goto

Returns the main resource response. In case of multiple redirects, the navigation will resolve with the first non-redirect response.

The method will throw an error if:

-   there's an SSL error (e.g. in case of self-signed certificates).
-   target URL is invalid.
-   the [timeout](/docs/api/class-page#page-goto-option-timeout) is exceeded during navigation.
-   the remote server does not respond or is unreachable.
-   the main resource failed to load.

The method will not throw an error when any valid HTTP status code is returned by the remote server, including 404 "Not Found" and 500 "Internal Server Error". The status code for such responses can be retrieved by calling [response.status()](/docs/api/class-response#response-status).

note

The method either throws an error or returns a main resource response. The only exceptions are navigation to `about:blank` or navigation to the same URL with a different hash, which would succeed and return `null`.

note

Headless mode doesn't support navigation to a PDF document. See the [upstream issue](https://bugs.chromium.org/p/chromium/issues/detail?id=761295).

**Usage**

```
await page.goto(url);await page.goto(url, options);
```

**Arguments**

-   `url` [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type "string")[#](#page-goto-option-url)
    
    URL to navigate page to. The url should include scheme, e.g. `https://`. When a [baseURL](/docs/api/class-browser#browser-new-context-option-base-url) via the context options was provided and the passed URL is a path, it gets merged via the [`new URL()`](https://developer.mozilla.org/en-US/docs/Web/API/URL/URL) constructor.
    
-   `options` [Object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object "Object") _(optional)_
    
    -   `referer` [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type "string") _(optional)_[#](#page-goto-option-referer)
        
        Referer header value. If provided it will take preference over the referer header value set by [page.setExtraHTTPHeaders()](/docs/api/class-page#page-set-extra-http-headers).
        
    -   `timeout` [number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type "Number") _(optional)_[#](#page-goto-option-timeout)
        
        Maximum operation time in milliseconds. Defaults to `0` - no timeout. The default value can be changed via `navigationTimeout` option in the config, or by using the [browserContext.setDefaultNavigationTimeout()](/docs/api/class-browsercontext#browser-context-set-default-navigation-timeout), [browserContext.setDefaultTimeout()](/docs/api/class-browsercontext#browser-context-set-default-timeout), [page.setDefaultNavigationTimeout()](/docs/api/class-page#page-set-default-navigation-timeout) or [page.setDefaultTimeout()](/docs/api/class-page#page-set-default-timeout) methods.
        
    -   `waitUntil` "load" | "domcontentloaded" | "networkidle" | "commit" _(optional)_[#](#page-goto-option-wait-until)
        
        When to consider operation succeeded, defaults to `load`. Events can be either:
        
        -   `'domcontentloaded'` - consider operation to be finished when the `DOMContentLoaded` event is fired.
        -   `'load'` - consider operation to be finished when the `load` event is fired.
        -   `'networkidle'` - **DISCOURAGED** consider operation to be finished when there are no network connections for at least `500` ms. Don't use this method for testing, rely on web assertions to assess readiness instead.
        -   `'commit'` - consider operation to be finished when network response is received and the document started loading.

**Returns**

-   [Promise](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise "Promise")<[null](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/null "null") | [Response](/docs/api/class-response "Response")\>[#](#page-goto-return)

* * *

### isClosed[​](#page-is-closed "Direct link to isClosed")

Added before v1.9 page.isClosed

Indicates that the page has been closed.

**Usage**

```
page.isClosed();
```

**Returns**

-   [boolean](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Boolean_type "Boolean")[#](#page-is-closed-return)

* * *

### locator[​](#page-locator "Direct link to locator")

Added in: v1.14 page.locator

The method returns an element locator that can be used to perform actions on this page / frame. Locator is resolved to the element immediately before performing an action, so a series of actions on the same locator can in fact be performed on different DOM elements. That would happen if the DOM structure between those actions has changed.

[Learn more about locators](/docs/locators).

**Usage**

```
page.locator(selector);page.locator(selector, options);
```

**Arguments**

-   `selector` [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type "string")[#](#page-locator-option-selector)
    
    A selector to use when resolving DOM element.
    
-   `options` [Object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object "Object") _(optional)_
    
    -   `has` [Locator](/docs/api/class-locator "Locator") _(optional)_[#](#page-locator-option-has)
        
        Narrows down the results of the method to those which contain elements matching this relative locator. For example, `article` that has `text=Playwright` matches `<article><div>Playwright</div></article>`.
        
        Inner locator **must be relative** to the outer locator and is queried starting with the outer locator match, not the document root. For example, you can find `content` that has `div` in `<article><content><div>Playwright</div></content></article>`. However, looking for `content` that has `article div` will fail, because the inner locator must be relative and should not use any elements outside the `content`.
        
        Note that outer and inner locators must belong to the same frame. Inner locator must not contain [FrameLocator](/docs/api/class-framelocator "FrameLocator")s.
        
    -   `hasNot` [Locator](/docs/api/class-locator "Locator") _(optional)_ Added in: v1.33[#](#page-locator-option-has-not)
        
        Matches elements that do not contain an element that matches an inner locator. Inner locator is queried against the outer one. For example, `article` that does not have `div` matches `<article><span>Playwright</span></article>`.
        
        Note that outer and inner locators must belong to the same frame. Inner locator must not contain [FrameLocator](/docs/api/class-framelocator "FrameLocator")s.
        
    -   `hasNotText` [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type "string") | [RegExp](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp "RegExp") _(optional)_ Added in: v1.33[#](#page-locator-option-has-not-text)
        
        Matches elements that do not contain specified text somewhere inside, possibly in a child or a descendant element. When passed a [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type "string"), matching is case-insensitive and searches for a substring.
        
    -   `hasText` [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type "string") | [RegExp](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp "RegExp") _(optional)_[#](#page-locator-option-has-text)
        
        Matches elements containing specified text somewhere inside, possibly in a child or a descendant element. When passed a [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type "string"), matching is case-insensitive and searches for a substring. For example, `"Playwright"` matches `<article><div>Playwright</div></article>`.
        

**Returns**

-   [Locator](/docs/api/class-locator "Locator")[#](#page-locator-return)

* * *

### mainFrame[​](#page-main-frame "Direct link to mainFrame")

Added before v1.9 page.mainFrame

The page's main frame. Page is guaranteed to have a main frame which persists during navigations.

**Usage**

```
page.mainFrame();
```

**Returns**

-   [Frame](/docs/api/class-frame "Frame")[#](#page-main-frame-return)

* * *

### opener[​](#page-opener "Direct link to opener")

Added before v1.9 page.opener

Returns the opener for popup pages and `null` for others. If the opener has been closed already the returns `null`.

**Usage**

```
await page.opener();
```

**Returns**

-   [Promise](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise "Promise")<[null](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/null "null") | [Page](/docs/api/class-page "Page")\>[#](#page-opener-return)

* * *

### pageErrors[​](#page-page-errors "Direct link to pageErrors")

Added in: v1.56 page.pageErrors

Returns up to (currently) 200 last page errors from this page. See [page.on('pageerror')](/docs/api/class-page#page-event-page-error) for more details.

**Usage**

```
await page.pageErrors();
```

**Returns**

-   [Promise](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise "Promise")<[Array](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array "Array")<[Error](https://nodejs.org/api/errors.html#errors_class_error "Error")\>>[#](#page-page-errors-return)

* * *

### pause[​](#page-pause "Direct link to pause")

Added in: v1.9 page.pause

Pauses script execution. Playwright will stop executing the script and wait for the user to either press the 'Resume' button in the page overlay or to call `playwright.resume()` in the DevTools console.

User can inspect selectors or perform manual steps while paused. Resume will continue running the original script from the place it was paused.

note

This method requires Playwright to be started in a headed mode, with a falsy [headless](/docs/api/class-browsertype#browser-type-launch-option-headless) option.

**Usage**

```
await page.pause();
```

**Returns**

-   [Promise](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise "Promise")<[void](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/undefined "void")\>[#](#page-pause-return)

* * *

### pdf[​](#page-pdf "Direct link to pdf")

Added before v1.9 page.pdf

Returns the PDF buffer.

`page.pdf()` generates a pdf of the page with `print` css media. To generate a pdf with `screen` media, call [page.emulateMedia()](/docs/api/class-page#page-emulate-media) before calling `page.pdf()`:

note

By default, `page.pdf()` generates a pdf with modified colors for printing. Use the [`-webkit-print-color-adjust`](https://developer.mozilla.org/en-US/docs/Web/CSS/-webkit-print-color-adjust) property to force rendering of exact colors.

**Usage**

```
// Generates a PDF with 'screen' media type.await page.emulateMedia({ media: 'screen' });await page.pdf({ path: 'page.pdf' });
```

The [width](/docs/api/class-page#page-pdf-option-width), [height](/docs/api/class-page#page-pdf-option-height), and [margin](/docs/api/class-page#page-pdf-option-margin) options accept values labeled with units. Unlabeled values are treated as pixels.

A few examples:

-   `page.pdf({width: 100})` - prints with width set to 100 pixels
-   `page.pdf({width: '100px'})` - prints with width set to 100 pixels
-   `page.pdf({width: '10cm'})` - prints with width set to 10 centimeters.

All possible units are:

-   `px` - pixel
-   `in` - inch
-   `cm` - centimeter
-   `mm` - millimeter

The [format](/docs/api/class-page#page-pdf-option-format) options are:

-   `Letter`: 8.5in x 11in
-   `Legal`: 8.5in x 14in
-   `Tabloid`: 11in x 17in
-   `Ledger`: 17in x 11in
-   `A0`: 33.1in x 46.8in
-   `A1`: 23.4in x 33.1in
-   `A2`: 16.54in x 23.4in
-   `A3`: 11.7in x 16.54in
-   `A4`: 8.27in x 11.7in
-   `A5`: 5.83in x 8.27in
-   `A6`: 4.13in x 5.83in

note

[headerTemplate](/docs/api/class-page#page-pdf-option-header-template) and [footerTemplate](/docs/api/class-page#page-pdf-option-footer-template) markup have the following limitations: > 1. Script tags inside templates are not evaluated. > 2. Page styles are not visible inside templates.

**Arguments**

-   `options` [Object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object "Object") _(optional)_
    -   `displayHeaderFooter` [boolean](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Boolean_type "Boolean") _(optional)_[#](#page-pdf-option-display-header-footer)
        
        Display header and footer. Defaults to `false`.
        
    -   `footerTemplate` [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type "string") _(optional)_[#](#page-pdf-option-footer-template)
        
        HTML template for the print footer. Should use the same format as the [headerTemplate](/docs/api/class-page#page-pdf-option-header-template).
        
    -   `format` [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type "string") _(optional)_[#](#page-pdf-option-format)
        
        Paper format. If set, takes priority over [width](/docs/api/class-page#page-pdf-option-width) or [height](/docs/api/class-page#page-pdf-option-height) options. Defaults to 'Letter'.
        
    -   `headerTemplate` [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type "string") _(optional)_[#](#page-pdf-option-header-template)
        
        HTML template for the print header. Should be valid HTML markup with following classes used to inject printing values into them:
        
        -   `'date'` formatted print date
        -   `'title'` document title
        -   `'url'` document location
        -   `'pageNumber'` current page number
        -   `'totalPages'` total pages in the document
    -   `height` [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type "string") | [number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type "Number") _(optional)_[#](#page-pdf-option-height)
        
        Paper height, accepts values labeled with units.
        
    -   `landscape` [boolean](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Boolean_type "Boolean") _(optional)_[#](#page-pdf-option-landscape)
        
        Paper orientation. Defaults to `false`.
        
    -   `margin` [Object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object "Object") _(optional)_[#](#page-pdf-option-margin)
        
        -   `top` [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type "string") | [number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type "Number") _(optional)_
            
            Top margin, accepts values labeled with units. Defaults to `0`.
            
        -   `right` [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type "string") | [number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type "Number") _(optional)_
            
            Right margin, accepts values labeled with units. Defaults to `0`.
            
        -   `bottom` [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type "string") | [number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type "Number") _(optional)_
            
            Bottom margin, accepts values labeled with units. Defaults to `0`.
            
        -   `left` [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type "string") | [number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type "Number") _(optional)_
            
            Left margin, accepts values labeled with units. Defaults to `0`.
            
        
        Paper margins, defaults to none.
        
    -   `outline` [boolean](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Boolean_type "Boolean") _(optional)_ Added in: v1.42[#](#page-pdf-option-outline)
        
        Whether or not to embed the document outline into the PDF. Defaults to `false`.
        
    -   `pageRanges` [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type "string") _(optional)_[#](#page-pdf-option-page-ranges)
        
        Paper ranges to print, e.g., '1-5, 8, 11-13'. Defaults to the empty string, which means print all pages.
        
    -   `path` [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type "string") _(optional)_[#](#page-pdf-option-path)
        
        The file path to save the PDF to. If [path](/docs/api/class-page#page-pdf-option-path) is a relative path, then it is resolved relative to the current working directory. If no path is provided, the PDF won't be saved to the disk.
        
    -   `preferCSSPageSize` [boolean](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Boolean_type "Boolean") _(optional)_[#](#page-pdf-option-prefer-css-page-size)
        
        Give any CSS `@page` size declared in the page priority over what is declared in [width](/docs/api/class-page#page-pdf-option-width) and [height](/docs/api/class-page#page-pdf-option-height) or [format](/docs/api/class-page#page-pdf-option-format) options. Defaults to `false`, which will scale the content to fit the paper size.
        
    -   `printBackground` [boolean](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Boolean_type "Boolean") _(optional)_[#](#page-pdf-option-print-background)
        
        Print background graphics. Defaults to `false`.
        
    -   `scale` [number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type "Number") _(optional)_[#](#page-pdf-option-scale)
        
        Scale of the webpage rendering. Defaults to `1`. Scale amount must be between 0.1 and 2.
        
    -   `tagged` [boolean](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Boolean_type "Boolean") _(optional)_ Added in: v1.42[#](#page-pdf-option-tagged)
        
        Whether or not to generate tagged (accessible) PDF. Defaults to `false`.
        
    -   `width` [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type "string") | [number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type "Number") _(optional)_[#](#page-pdf-option-width)
        
        Paper width, accepts values labeled with units.
        

**Returns**

-   [Promise](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise "Promise")<[Buffer](https://nodejs.org/api/buffer.html#buffer_class_buffer "Buffer")\>[#](#page-pdf-return)

* * *

### reload[​](#page-reload "Direct link to reload")

Added before v1.9 page.reload

This method reloads the current page, in the same way as if the user had triggered a browser refresh. Returns the main resource response. In case of multiple redirects, the navigation will resolve with the response of the last redirect.

**Usage**

```
await page.reload();await page.reload(options);
```

**Arguments**

-   `options` [Object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object "Object") _(optional)_
    -   `timeout` [number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type "Number") _(optional)_[#](#page-reload-option-timeout)
        
        Maximum operation time in milliseconds. Defaults to `0` - no timeout. The default value can be changed via `navigationTimeout` option in the config, or by using the [browserContext.setDefaultNavigationTimeout()](/docs/api/class-browsercontext#browser-context-set-default-navigation-timeout), [browserContext.setDefaultTimeout()](/docs/api/class-browsercontext#browser-context-set-default-timeout), [page.setDefaultNavigationTimeout()](/docs/api/class-page#page-set-default-navigation-timeout) or [page.setDefaultTimeout()](/docs/api/class-page#page-set-default-timeout) methods.
        
    -   `waitUntil` "load" | "domcontentloaded" | "networkidle" | "commit" _(optional)_[#](#page-reload-option-wait-until)
        
        When to consider operation succeeded, defaults to `load`. Events can be either:
        
        -   `'domcontentloaded'` - consider operation to be finished when the `DOMContentLoaded` event is fired.
        -   `'load'` - consider operation to be finished when the `load` event is fired.
        -   `'networkidle'` - **DISCOURAGED** consider operation to be finished when there are no network connections for at least `500` ms. Don't use this method for testing, rely on web assertions to assess readiness instead.
        -   `'commit'` - consider operation to be finished when network response is received and the document started loading.

**Returns**

-   [Promise](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise "Promise")<[null](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/null "null") | [Response](/docs/api/class-response "Response")\>[#](#page-reload-return)

* * *

### removeAllListeners[​](#page-remove-all-listeners "Direct link to removeAllListeners")

Added in: v1.47 page.removeAllListeners

Removes all the listeners of the given type (or all registered listeners if no type given). Allows to wait for async listeners to complete or to ignore subsequent errors from these listeners.

**Usage**

```
page.on('request', async request => {  const response = await request.response();  const body = await response.body();  console.log(body.byteLength);});await page.goto('https://playwright.dev', { waitUntil: 'domcontentloaded' });// Waits for all the reported 'request' events to resolve.await page.removeAllListeners('request', { behavior: 'wait' });
```

**Arguments**

-   `type` [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type "string") _(optional)_[#](#page-remove-all-listeners-option-type)
-   `options` [Object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object "Object") _(optional)_
    -   `behavior` "wait" | "ignoreErrors" | "default" _(optional)_[#](#page-remove-all-listeners-option-behavior)
        
        Specifies whether to wait for already running listeners and what to do if they throw errors:
        
        -   `'default'` - do not wait for current listener calls (if any) to finish, if the listener throws, it may result in unhandled error
        -   `'wait'` - wait for current listener calls (if any) to finish
        -   `'ignoreErrors'` - do not wait for current listener calls (if any) to finish, all errors thrown by the listeners after removal are silently caught

**Returns**

-   [Promise](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise "Promise")<[void](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/undefined "void")\>[#](#page-remove-all-listeners-return)

* * *

### removeLocatorHandler[​](#page-remove-locator-handler "Direct link to removeLocatorHandler")

Added in: v1.44 page.removeLocatorHandler

Removes all locator handlers added by [page.addLocatorHandler()](/docs/api/class-page#page-add-locator-handler) for a specific locator.

**Usage**

```
await page.removeLocatorHandler(locator);
```

**Arguments**

-   `locator` [Locator](/docs/api/class-locator "Locator")[#](#page-remove-locator-handler-option-locator)
    
    Locator passed to [page.addLocatorHandler()](/docs/api/class-page#page-add-locator-handler).
    

**Returns**

-   [Promise](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise "Promise")<[void](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/undefined "void")\>[#](#page-remove-locator-handler-return)

* * *

### requestGC[​](#page-request-gc "Direct link to requestGC")

Added in: v1.48 page.requestGC

Request the page to perform garbage collection. Note that there is no guarantee that all unreachable objects will be collected.

This is useful to help detect memory leaks. For example, if your page has a large object `'suspect'` that might be leaked, you can check that it does not leak by using a [`WeakRef`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/WeakRef).

```
// 1. In your page, save a WeakRef for the "suspect".await page.evaluate(() => globalThis.suspectWeakRef = new WeakRef(suspect));// 2. Request garbage collection.await page.requestGC();// 3. Check that weak ref does not deref to the original object.expect(await page.evaluate(() => !globalThis.suspectWeakRef.deref())).toBe(true);
```

**Usage**

```
await page.requestGC();
```

**Returns**

-   [Promise](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise "Promise")<[void](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/undefined "void")\>[#](#page-request-gc-return)

* * *

### requests[​](#page-requests "Direct link to requests")

Added in: v1.56 page.requests

Returns up to (currently) 100 last network request from this page. See [page.on('request')](/docs/api/class-page#page-event-request) for more details.

Returned requests should be accessed immediately, otherwise they might be collected to prevent unbounded memory growth as new requests come in. Once collected, retrieving most information about the request is impossible.

Note that requests reported through the [page.on('request')](/docs/api/class-page#page-event-request) request are not collected, so there is a trade off between efficient memory usage with [page.requests()](/docs/api/class-page#page-requests) and the amount of available information reported through [page.on('request')](/docs/api/class-page#page-event-request).

**Usage**

```
await page.requests();
```

**Returns**

-   [Promise](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise "Promise")<[Array](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array "Array")<[Request](/docs/api/class-request "Request")\>>[#](#page-requests-return)

* * *

### route[​](#page-route "Direct link to route")

Added before v1.9 page.route

Routing provides the capability to modify network requests that are made by a page.

Once routing is enabled, every request matching the url pattern will stall unless it's continued, fulfilled or aborted.

note

The handler will only be called for the first url if the response is a redirect.

note

[page.route()](/docs/api/class-page#page-route) will not intercept requests intercepted by Service Worker. See [this](https://github.com/microsoft/playwright/issues/1090) issue. We recommend disabling Service Workers when using request interception by setting [serviceWorkers](/docs/api/class-browser#browser-new-context-option-service-workers) to `'block'`.

note

[page.route()](/docs/api/class-page#page-route) will not intercept the first request of a popup page. Use [browserContext.route()](/docs/api/class-browsercontext#browser-context-route) instead.

**Usage**

An example of a naive handler that aborts all image requests:

```
const page = await browser.newPage();await page.route('**/*.{png,jpg,jpeg}', route => route.abort());await page.goto('https://example.com');await browser.close();
```

or the same snippet using a regex pattern instead:

```
const page = await browser.newPage();await page.route(/(\.png$)|(\.jpg$)/, route => route.abort());await page.goto('https://example.com');await browser.close();
```

It is possible to examine the request to decide the route action. For example, mocking all requests that contain some post data, and leaving all other requests as is:

```
await page.route('/api/**', async route => {  if (route.request().postData().includes('my-string'))    await route.fulfill({ body: 'mocked-data' });  else    await route.continue();});
```

Page routes take precedence over browser context routes (set up with [browserContext.route()](/docs/api/class-browsercontext#browser-context-route)) when request matches both handlers.

To remove a route with its handler you can use [page.unroute()](/docs/api/class-page#page-unroute).

note

Enabling routing disables http cache.

**Arguments**

-   `url` [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type "string") | [RegExp](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp "RegExp") | [function](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function "Function")([URL](https://nodejs.org/api/url.html "URL")):[boolean](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Boolean_type "Boolean")[#](#page-route-option-url)
    
    A glob pattern, regex pattern, or predicate that receives a [URL](https://nodejs.org/api/url.html "URL") to match during routing. If [baseURL](/docs/api/class-browser#browser-new-context-option-base-url) is set in the context options and the provided URL is a string that does not start with `*`, it is resolved using the [`new URL()`](https://developer.mozilla.org/en-US/docs/Web/API/URL/URL) constructor.
    
-   `handler` [function](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function "Function")([Route](/docs/api/class-route "Route"), [Request](/docs/api/class-request "Request")):[Promise](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise "Promise")<[Object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object "Object")\> | [Object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object "Object")[#](#page-route-option-handler)
    
    handler function to route the request.
    
-   `options` [Object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object "Object") _(optional)_
    
    -   `times` [number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type "Number") _(optional)_ Added in: v1.15[#](#page-route-option-times)
        
        How often a route should be used. By default it will be used every time.
        

**Returns**

-   [Promise](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise "Promise")<[void](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/undefined "void")\>[#](#page-route-return)

* * *

### routeFromHAR[​](#page-route-from-har "Direct link to routeFromHAR")

Added in: v1.23 page.routeFromHAR

If specified the network requests that are made in the page will be served from the HAR file. Read more about [Replaying from HAR](/docs/mock#replaying-from-har).

Playwright will not serve requests intercepted by Service Worker from the HAR file. See [this](https://github.com/microsoft/playwright/issues/1090) issue. We recommend disabling Service Workers when using request interception by setting [serviceWorkers](/docs/api/class-browser#browser-new-context-option-service-workers) to `'block'`.

**Usage**

```
await page.routeFromHAR(har);await page.routeFromHAR(har, options);
```

**Arguments**

-   `har` [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type "string")[#](#page-route-from-har-option-har)
    
    Path to a [HAR](http://www.softwareishard.com/blog/har-12-spec) file with prerecorded network data. If `path` is a relative path, then it is resolved relative to the current working directory.
    
-   `options` [Object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object "Object") _(optional)_
    
    -   `notFound` "abort" | "fallback" _(optional)_[#](#page-route-from-har-option-not-found)
        
        -   If set to 'abort' any request not found in the HAR file will be aborted.
        -   If set to 'fallback' missing requests will be sent to the network.
        
        Defaults to abort.
        
    -   `update` [boolean](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Boolean_type "Boolean") _(optional)_[#](#page-route-from-har-option-update)
        
        If specified, updates the given HAR with the actual network information instead of serving from file. The file is written to disk when [browserContext.close()](/docs/api/class-browsercontext#browser-context-close) is called.
        
    -   `updateContent` "embed" | "attach" _(optional)_ Added in: v1.32[#](#page-route-from-har-option-update-content)
        
        Optional setting to control resource content management. If `attach` is specified, resources are persisted as separate files or entries in the ZIP archive. If `embed` is specified, content is stored inline the HAR file.
        
    -   `updateMode` "full" | "minimal" _(optional)_ Added in: v1.32[#](#page-route-from-har-option-update-mode)
        
        When set to `minimal`, only record information necessary for routing from HAR. This omits sizes, timing, page, cookies, security and other types of HAR information that are not used when replaying from HAR. Defaults to `minimal`.
        
    -   `url` [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type "string") | [RegExp](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp "RegExp") _(optional)_[#](#page-route-from-har-option-url)
        
        A glob pattern, regular expression or predicate to match the request URL. Only requests with URL matching the pattern will be served from the HAR file. If not specified, all requests are served from the HAR file.
        

**Returns**

-   [Promise](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise "Promise")<[void](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/undefined "void")\>[#](#page-route-from-har-return)

* * *

### routeWebSocket[​](#page-route-web-socket "Direct link to routeWebSocket")

Added in: v1.48 page.routeWebSocket

This method allows to modify websocket connections that are made by the page.

Note that only `WebSocket`s created after this method was called will be routed. It is recommended to call this method before navigating the page.

**Usage**

Below is an example of a simple mock that responds to a single message. See [WebSocketRoute](/docs/api/class-websocketroute "WebSocketRoute") for more details and examples.

```
await page.routeWebSocket('/ws', ws => {  ws.onMessage(message => {    if (message === 'request')      ws.send('response');  });});
```

**Arguments**

-   `url` [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type "string") | [RegExp](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp "RegExp") | [function](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function "Function")([URL](https://nodejs.org/api/url.html "URL")):[boolean](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Boolean_type "Boolean")[#](#page-route-web-socket-option-url)
    
    Only WebSockets with the url matching this pattern will be routed. A string pattern can be relative to the [baseURL](/docs/api/class-browser#browser-new-context-option-base-url) context option.
    
-   `handler` [function](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function "Function")([WebSocketRoute](/docs/api/class-websocketroute "WebSocketRoute")):[Promise](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise "Promise")<[Object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object "Object")\> | [Object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object "Object")[#](#page-route-web-socket-option-handler)
    
    Handler function to route the WebSocket.
    

**Returns**

-   [Promise](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise "Promise")<[void](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/undefined "void")\>[#](#page-route-web-socket-return)

* * *

### screenshot[​](#page-screenshot "Direct link to screenshot")

Added before v1.9 page.screenshot

Returns the buffer with the captured screenshot.

**Usage**

```
await page.screenshot();await page.screenshot(options);
```

**Arguments**

-   `options` [Object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object "Object") _(optional)_
    -   `animations` "disabled" | "allow" _(optional)_[#](#page-screenshot-option-animations)
        
        When set to `"disabled"`, stops CSS animations, CSS transitions and Web Animations. Animations get different treatment depending on their duration:
        
        -   finite animations are fast-forwarded to completion, so they'll fire `transitionend` event.
        -   infinite animations are canceled to initial state, and then played over after the screenshot.
        
        Defaults to `"allow"` that leaves animations untouched.
        
    -   `caret` "hide" | "initial" _(optional)_[#](#page-screenshot-option-caret)
        
        When set to `"hide"`, screenshot will hide text caret. When set to `"initial"`, text caret behavior will not be changed. Defaults to `"hide"`.
        
    -   `clip` [Object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object "Object") _(optional)_[#](#page-screenshot-option-clip)
        
        -   `x` [number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type "Number")
            
            x-coordinate of top-left corner of clip area
            
        -   `y` [number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type "Number")
            
            y-coordinate of top-left corner of clip area
            
        -   `width` [number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type "Number")
            
            width of clipping area
            
        -   `height` [number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type "Number")
            
            height of clipping area
            
        
        An object which specifies clipping of the resulting image.
        
    -   `fullPage` [boolean](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Boolean_type "Boolean") _(optional)_[#](#page-screenshot-option-full-page)
        
        When true, takes a screenshot of the full scrollable page, instead of the currently visible viewport. Defaults to `false`.
        
    -   `mask` [Array](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array "Array")<[Locator](/docs/api/class-locator "Locator")\> _(optional)_[#](#page-screenshot-option-mask)
        
        Specify locators that should be masked when the screenshot is taken. Masked elements will be overlaid with a pink box `#FF00FF` (customized by [maskColor](/docs/api/class-page#page-screenshot-option-mask-color)) that completely covers its bounding box. The mask is also applied to invisible elements, see [Matching only visible elements](/docs/locators#matching-only-visible-elements) to disable that.
        
    -   `maskColor` [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type "string") _(optional)_ Added in: v1.35[#](#page-screenshot-option-mask-color)
        
        Specify the color of the overlay box for masked elements, in [CSS color format](https://developer.mozilla.org/en-US/docs/Web/CSS/color_value). Default color is pink `#FF00FF`.
        
    -   `omitBackground` [boolean](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Boolean_type "Boolean") _(optional)_[#](#page-screenshot-option-omit-background)
        
        Hides default white background and allows capturing screenshots with transparency. Not applicable to `jpeg` images. Defaults to `false`.
        
    -   `path` [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type "string") _(optional)_[#](#page-screenshot-option-path)
        
        The file path to save the image to. The screenshot type will be inferred from file extension. If [path](/docs/api/class-page#page-screenshot-option-path) is a relative path, then it is resolved relative to the current working directory. If no path is provided, the image won't be saved to the disk.
        
    -   `quality` [number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type "Number") _(optional)_[#](#page-screenshot-option-quality)
        
        The quality of the image, between 0-100. Not applicable to `png` images.
        
    -   `scale` "css" | "device" _(optional)_[#](#page-screenshot-option-scale)
        
        When set to `"css"`, screenshot will have a single pixel per each css pixel on the page. For high-dpi devices, this will keep screenshots small. Using `"device"` option will produce a single pixel per each device pixel, so screenshots of high-dpi devices will be twice as large or even larger.
        
        Defaults to `"device"`.
        
    -   `style` [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type "string") _(optional)_ Added in: v1.41[#](#page-screenshot-option-style)
        
        Text of the stylesheet to apply while making the screenshot. This is where you can hide dynamic elements, make elements invisible or change their properties to help you creating repeatable screenshots. This stylesheet pierces the Shadow DOM and applies to the inner frames.
        
    -   `timeout` [number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type "Number") _(optional)_[#](#page-screenshot-option-timeout)
        
        Maximum time in milliseconds. Defaults to `0` - no timeout. The default value can be changed via `actionTimeout` option in the config, or by using the [browserContext.setDefaultTimeout()](/docs/api/class-browsercontext#browser-context-set-default-timeout) or [page.setDefaultTimeout()](/docs/api/class-page#page-set-default-timeout) methods.
        
    -   `type` "png" | "jpeg" _(optional)_[#](#page-screenshot-option-type)
        
        Specify screenshot type, defaults to `png`.
        

**Returns**

-   [Promise](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise "Promise")<[Buffer](https://nodejs.org/api/buffer.html#buffer_class_buffer "Buffer")\>[#](#page-screenshot-return)

* * *

### setContent[​](#page-set-content "Direct link to setContent")

Added before v1.9 page.setContent

This method internally calls [document.write()](https://developer.mozilla.org/en-US/docs/Web/API/Document/write), inheriting all its specific characteristics and behaviors.

**Usage**

```
await page.setContent(html);await page.setContent(html, options);
```

**Arguments**

-   `html` [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type "string")[#](#page-set-content-option-html)
    
    HTML markup to assign to the page.
    
-   `options` [Object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object "Object") _(optional)_
    
    -   `timeout` [number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type "Number") _(optional)_[#](#page-set-content-option-timeout)
        
        Maximum operation time in milliseconds. Defaults to `0` - no timeout. The default value can be changed via `navigationTimeout` option in the config, or by using the [browserContext.setDefaultNavigationTimeout()](/docs/api/class-browsercontext#browser-context-set-default-navigation-timeout), [browserContext.setDefaultTimeout()](/docs/api/class-browsercontext#browser-context-set-default-timeout), [page.setDefaultNavigationTimeout()](/docs/api/class-page#page-set-default-navigation-timeout) or [page.setDefaultTimeout()](/docs/api/class-page#page-set-default-timeout) methods.
        
    -   `waitUntil` "load" | "domcontentloaded" | "networkidle" | "commit" _(optional)_[#](#page-set-content-option-wait-until)
        
        When to consider operation succeeded, defaults to `load`. Events can be either:
        
        -   `'domcontentloaded'` - consider operation to be finished when the `DOMContentLoaded` event is fired.
        -   `'load'` - consider operation to be finished when the `load` event is fired.
        -   `'networkidle'` - **DISCOURAGED** consider operation to be finished when there are no network connections for at least `500` ms. Don't use this method for testing, rely on web assertions to assess readiness instead.
        -   `'commit'` - consider operation to be finished when network response is received and the document started loading.

**Returns**

-   [Promise](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise "Promise")<[void](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/undefined "void")\>[#](#page-set-content-return)

* * *

### setDefaultNavigationTimeout[​](#page-set-default-navigation-timeout "Direct link to setDefaultNavigationTimeout")

Added before v1.9 page.setDefaultNavigationTimeout

This setting will change the default maximum navigation time for the following methods and related shortcuts:

-   [page.goBack()](/docs/api/class-page#page-go-back)
-   [page.goForward()](/docs/api/class-page#page-go-forward)
-   [page.goto()](/docs/api/class-page#page-goto)
-   [page.reload()](/docs/api/class-page#page-reload)
-   [page.setContent()](/docs/api/class-page#page-set-content)
-   [page.waitForNavigation()](/docs/api/class-page#page-wait-for-navigation)
-   [page.waitForURL()](/docs/api/class-page#page-wait-for-url)

note

[page.setDefaultNavigationTimeout()](/docs/api/class-page#page-set-default-navigation-timeout) takes priority over [page.setDefaultTimeout()](/docs/api/class-page#page-set-default-timeout), [browserContext.setDefaultTimeout()](/docs/api/class-browsercontext#browser-context-set-default-timeout) and [browserContext.setDefaultNavigationTimeout()](/docs/api/class-browsercontext#browser-context-set-default-navigation-timeout).

**Usage**

```
page.setDefaultNavigationTimeout(timeout);
```

**Arguments**

-   `timeout` [number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type "Number")[#](#page-set-default-navigation-timeout-option-timeout)
    
    Maximum navigation time in milliseconds
    

* * *

### setDefaultTimeout[​](#page-set-default-timeout "Direct link to setDefaultTimeout")

Added before v1.9 page.setDefaultTimeout

This setting will change the default maximum time for all the methods accepting [timeout](/docs/api/class-page#page-set-default-timeout-option-timeout) option.

note

[page.setDefaultNavigationTimeout()](/docs/api/class-page#page-set-default-navigation-timeout) takes priority over [page.setDefaultTimeout()](/docs/api/class-page#page-set-default-timeout).

**Usage**

```
page.setDefaultTimeout(timeout);
```

**Arguments**

-   `timeout` [number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type "Number")[#](#page-set-default-timeout-option-timeout)
    
    Maximum time in milliseconds. Pass `0` to disable timeout.
    

* * *

### setExtraHTTPHeaders[​](#page-set-extra-http-headers "Direct link to setExtraHTTPHeaders")

Added before v1.9 page.setExtraHTTPHeaders

The extra HTTP headers will be sent with every request the page initiates.

note

[page.setExtraHTTPHeaders()](/docs/api/class-page#page-set-extra-http-headers) does not guarantee the order of headers in the outgoing requests.

**Usage**

```
await page.setExtraHTTPHeaders(headers);
```

**Arguments**

-   `headers` [Object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object "Object")<[string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type "string"), [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type "string")\>[#](#page-set-extra-http-headers-option-headers)
    
    An object containing additional HTTP headers to be sent with every request. All header values must be strings.
    

**Returns**

-   [Promise](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise "Promise")<[void](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/undefined "void")\>[#](#page-set-extra-http-headers-return)

* * *

### setViewportSize[​](#page-set-viewport-size "Direct link to setViewportSize")

Added before v1.9 page.setViewportSize

In the case of multiple pages in a single browser, each page can have its own viewport size. However, [browser.newContext()](/docs/api/class-browser#browser-new-context) allows to set viewport size (and more) for all pages in the context at once.

[page.setViewportSize()](/docs/api/class-page#page-set-viewport-size) will resize the page. A lot of websites don't expect phones to change size, so you should set the viewport size before navigating to the page. [page.setViewportSize()](/docs/api/class-page#page-set-viewport-size) will also reset `screen` size, use [browser.newContext()](/docs/api/class-browser#browser-new-context) with `screen` and `viewport` parameters if you need better control of these properties.

**Usage**

```
const page = await browser.newPage();await page.setViewportSize({  width: 640,  height: 480,});await page.goto('https://example.com');
```

**Arguments**

-   `viewportSize` [Object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object "Object")[#](#page-set-viewport-size-option-viewport-size)
    -   `width` [number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type "Number")
        
        page width in pixels.
        
    -   `height` [number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type "Number")
        
        page height in pixels.
        

**Returns**

-   [Promise](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise "Promise")<[void](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/undefined "void")\>[#](#page-set-viewport-size-return)

* * *

### title[​](#page-title "Direct link to title")

Added before v1.9 page.title

Returns the page's title.

**Usage**

```
await page.title();
```

**Returns**

-   [Promise](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise "Promise")<[string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type "string")\>[#](#page-title-return)

* * *

### unroute[​](#page-unroute "Direct link to unroute")

Added before v1.9 page.unroute

Removes a route created with [page.route()](/docs/api/class-page#page-route). When [handler](/docs/api/class-page#page-unroute-option-handler) is not specified, removes all routes for the [url](/docs/api/class-page#page-unroute-option-url).

**Usage**

```
await page.unroute(url);await page.unroute(url, handler);
```

**Arguments**

-   `url` [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type "string") | [RegExp](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp "RegExp") | [function](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function "Function")([URL](https://nodejs.org/api/url.html "URL")):[boolean](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Boolean_type "Boolean")[#](#page-unroute-option-url)
    
    A glob pattern, regex pattern or predicate receiving [URL](https://nodejs.org/api/url.html "URL") to match while routing.
    
-   `handler` [function](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function "Function")([Route](/docs/api/class-route "Route"), [Request](/docs/api/class-request "Request")):[Promise](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise "Promise")<[Object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object "Object")\> | [Object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object "Object") _(optional)_[#](#page-unroute-option-handler)
    
    Optional handler function to route the request.
    

**Returns**

-   [Promise](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise "Promise")<[void](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/undefined "void")\>[#](#page-unroute-return)

* * *

### unrouteAll[​](#page-unroute-all "Direct link to unrouteAll")

Added in: v1.41 page.unrouteAll

Removes all routes created with [page.route()](/docs/api/class-page#page-route) and [page.routeFromHAR()](/docs/api/class-page#page-route-from-har).

**Usage**

```
await page.unrouteAll();await page.unrouteAll(options);
```

**Arguments**

-   `options` [Object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object "Object") _(optional)_
    -   `behavior` "wait" | "ignoreErrors" | "default" _(optional)_[#](#page-unroute-all-option-behavior)
        
        Specifies whether to wait for already running handlers and what to do if they throw errors:
        
        -   `'default'` - do not wait for current handler calls (if any) to finish, if unrouted handler throws, it may result in unhandled error
        -   `'wait'` - wait for current handler calls (if any) to finish
        -   `'ignoreErrors'` - do not wait for current handler calls (if any) to finish, all errors thrown by the handlers after unrouting are silently caught

**Returns**

-   [Promise](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise "Promise")<[void](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/undefined "void")\>[#](#page-unroute-all-return)

* * *

### url[​](#page-url "Direct link to url")

Added before v1.9 page.url

**Usage**

```
page.url();
```

**Returns**

-   [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type "string")[#](#page-url-return)

* * *

### video[​](#page-video "Direct link to video")

Added before v1.9 page.video

Video object associated with this page.

**Usage**

```
page.video();
```

**Returns**

-   [null](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/null "null") | [Video](/docs/api/class-video "Video")[#](#page-video-return)

* * *

### viewportSize[​](#page-viewport-size "Direct link to viewportSize")

Added before v1.9 page.viewportSize

**Usage**

```
page.viewportSize();
```

**Returns**

-   [null](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/null "null") | [Object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object "Object")[#](#page-viewport-size-return)
    -   `width` [number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type "Number")
        
        page width in pixels.
        
    -   `height` [number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type "Number")
        
        page height in pixels.
        

* * *

### waitForEvent[​](#page-wait-for-event "Direct link to waitForEvent")

Added before v1.9 page.waitForEvent

Waits for event to fire and passes its value into the predicate function. Returns when the predicate returns truthy value. Will throw an error if the page is closed before the event is fired. Returns the event data value.

**Usage**

```
// Start waiting for download before clicking. Note no await.const downloadPromise = page.waitForEvent('download');await page.getByText('Download file').click();const download = await downloadPromise;
```

**Arguments**

-   `event` [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type "string")[#](#page-wait-for-event-option-event)
    
    Event name, same one typically passed into `*.on(event)`.
    
-   `optionsOrPredicate` [function](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function "Function") | [Object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object "Object") _(optional)_[#](#page-wait-for-event-option-options-or-predicate)
    
    -   `predicate` [function](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function "Function")
        
        Receives the event data and resolves to truthy value when the waiting should resolve.
        
    -   `timeout` [number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type "Number") _(optional)_
        
        Maximum time to wait for in milliseconds. Defaults to `0` - no timeout. The default value can be changed via `actionTimeout` option in the config, or by using the [browserContext.setDefaultTimeout()](/docs/api/class-browsercontext#browser-context-set-default-timeout) or [page.setDefaultTimeout()](/docs/api/class-page#page-set-default-timeout) methods.
        
    
    Either a predicate that receives an event or an options object. Optional.
    
-   `options` [Object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object "Object") _(optional)_
    
    -   `predicate` [function](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function "Function") _(optional)_[#](#page-wait-for-event-option-predicate)
        
        Receives the event data and resolves to truthy value when the waiting should resolve.
        

**Returns**

-   [Promise](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise "Promise")<[Object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object "Object")\>[#](#page-wait-for-event-return)

* * *

### waitForFunction[​](#page-wait-for-function "Direct link to waitForFunction")

Added before v1.9 page.waitForFunction

Returns when the [pageFunction](/docs/api/class-page#page-wait-for-function-option-expression) returns a truthy value. It resolves to a JSHandle of the truthy value.

**Usage**

The [page.waitForFunction()](/docs/api/class-page#page-wait-for-function) can be used to observe viewport size change:

```
const { webkit } = require('playwright');  // Or 'chromium' or 'firefox'.(async () => {  const browser = await webkit.launch();  const page = await browser.newPage();  const watchDog = page.waitForFunction(() => window.innerWidth < 100);  await page.setViewportSize({ width: 50, height: 50 });  await watchDog;  await browser.close();})();
```

To pass an argument to the predicate of [page.waitForFunction()](/docs/api/class-page#page-wait-for-function) function:

```
const selector = '.foo';await page.waitForFunction(selector => !!document.querySelector(selector), selector);
```

**Arguments**

-   `pageFunction` [function](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function "Function") | [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type "string")[#](#page-wait-for-function-option-expression)
    
    Function to be evaluated in the page context.
    
-   `arg` [EvaluationArgument](/docs/evaluating#evaluation-argument "EvaluationArgument") _(optional)_[#](#page-wait-for-function-option-arg)
    
    Optional argument to pass to [pageFunction](/docs/api/class-page#page-wait-for-function-option-expression).
    
-   `options` [Object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object "Object") _(optional)_
    
    -   `polling` [number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type "Number") | "raf" _(optional)_[#](#page-wait-for-function-option-polling)
        
        If [polling](/docs/api/class-page#page-wait-for-function-option-polling) is `'raf'`, then [pageFunction](/docs/api/class-page#page-wait-for-function-option-expression) is constantly executed in `requestAnimationFrame` callback. If [polling](/docs/api/class-page#page-wait-for-function-option-polling) is a number, then it is treated as an interval in milliseconds at which the function would be executed. Defaults to `raf`.
        
    -   `timeout` [number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type "Number") _(optional)_[#](#page-wait-for-function-option-timeout)
        
        Maximum time to wait for in milliseconds. Defaults to `0` - no timeout. The default value can be changed via `actionTimeout` option in the config, or by using the [browserContext.setDefaultTimeout()](/docs/api/class-browsercontext#browser-context-set-default-timeout) or [page.setDefaultTimeout()](/docs/api/class-page#page-set-default-timeout) methods.
        

**Returns**

-   [Promise](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise "Promise")<[JSHandle](/docs/api/class-jshandle "JSHandle")\>[#](#page-wait-for-function-return)

* * *

### waitForLoadState[​](#page-wait-for-load-state "Direct link to waitForLoadState")

Added before v1.9 page.waitForLoadState

Returns when the required load state has been reached.

This resolves when the page reaches a required load state, `load` by default. The navigation must have been committed when this method is called. If current document has already reached the required state, resolves immediately.

note

Most of the time, this method is not needed because Playwright [auto-waits before every action](/docs/actionability).

**Usage**

```
await page.getByRole('button').click(); // Click triggers navigation.await page.waitForLoadState(); // The promise resolves after 'load' event.
```

```
const popupPromise = page.waitForEvent('popup');await page.getByRole('button').click(); // Click triggers a popup.const popup = await popupPromise;await popup.waitForLoadState('domcontentloaded'); // Wait for the 'DOMContentLoaded' event.console.log(await popup.title()); // Popup is ready to use.
```

**Arguments**

-   `state` "load" | "domcontentloaded" | "networkidle" _(optional)_[#](#page-wait-for-load-state-option-state)
    
    Optional load state to wait for, defaults to `load`. If the state has been already reached while loading current document, the method resolves immediately. Can be one of:
    
    -   `'load'` - wait for the `load` event to be fired.
    -   `'domcontentloaded'` - wait for the `DOMContentLoaded` event to be fired.
    -   `'networkidle'` - **DISCOURAGED** wait until there are no network connections for at least `500` ms. Don't use this method for testing, rely on web assertions to assess readiness instead.
-   `options` [Object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object "Object") _(optional)_
    
    -   `timeout` [number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type "Number") _(optional)_[#](#page-wait-for-load-state-option-timeout)
        
        Maximum operation time in milliseconds. Defaults to `0` - no timeout. The default value can be changed via `navigationTimeout` option in the config, or by using the [browserContext.setDefaultNavigationTimeout()](/docs/api/class-browsercontext#browser-context-set-default-navigation-timeout), [browserContext.setDefaultTimeout()](/docs/api/class-browsercontext#browser-context-set-default-timeout), [page.setDefaultNavigationTimeout()](/docs/api/class-page#page-set-default-navigation-timeout) or [page.setDefaultTimeout()](/docs/api/class-page#page-set-default-timeout) methods.
        

**Returns**

-   [Promise](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise "Promise")<[void](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/undefined "void")\>[#](#page-wait-for-load-state-return)

* * *

### waitForRequest[​](#page-wait-for-request "Direct link to waitForRequest")

Added before v1.9 page.waitForRequest

Waits for the matching request and returns it. See [waiting for event](/docs/events#waiting-for-event) for more details about events.

**Usage**

```
// Start waiting for request before clicking. Note no await.const requestPromise = page.waitForRequest('https://example.com/resource');await page.getByText('trigger request').click();const request = await requestPromise;// Alternative way with a predicate. Note no await.const requestPromise = page.waitForRequest(request =>  request.url() === 'https://example.com' && request.method() === 'GET',);await page.getByText('trigger request').click();const request = await requestPromise;
```

**Arguments**

-   `urlOrPredicate` [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type "string") | [RegExp](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp "RegExp") | [function](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function "Function")([Request](/docs/api/class-request "Request")):[boolean](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Boolean_type "Boolean") | [Promise](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise "Promise")<[boolean](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Boolean_type "Boolean")\>[#](#page-wait-for-request-option-url-or-predicate)
    
    Request URL string, regex or predicate receiving [Request](/docs/api/class-request "Request") object.
    
-   `options` [Object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object "Object") _(optional)_
    
    -   `timeout` [number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type "Number") _(optional)_[#](#page-wait-for-request-option-timeout)
        
        Maximum wait time in milliseconds, defaults to 30 seconds, pass `0` to disable the timeout. The default value can be changed by using the [page.setDefaultTimeout()](/docs/api/class-page#page-set-default-timeout) method.
        

**Returns**

-   [Promise](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise "Promise")<[Request](/docs/api/class-request "Request")\>[#](#page-wait-for-request-return)

* * *

### waitForResponse[​](#page-wait-for-response "Direct link to waitForResponse")

Added before v1.9 page.waitForResponse

Returns the matched response. See [waiting for event](/docs/events#waiting-for-event) for more details about events.

**Usage**

```
// Start waiting for response before clicking. Note no await.const responsePromise = page.waitForResponse('https://example.com/resource');await page.getByText('trigger response').click();const response = await responsePromise;// Alternative way with a predicate. Note no await.const responsePromise = page.waitForResponse(response =>  response.url() === 'https://example.com' && response.status() === 200      && response.request().method() === 'GET');await page.getByText('trigger response').click();const response = await responsePromise;
```

**Arguments**

-   `urlOrPredicate` [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type "string") | [RegExp](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp "RegExp") | [function](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function "Function")([Response](/docs/api/class-response "Response")):[boolean](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Boolean_type "Boolean") | [Promise](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise "Promise")<[boolean](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Boolean_type "Boolean")\>[#](#page-wait-for-response-option-url-or-predicate)
    
    Request URL string, regex or predicate receiving [Response](/docs/api/class-response "Response") object. When a [baseURL](/docs/api/class-browser#browser-new-context-option-base-url) via the context options was provided and the passed URL is a path, it gets merged via the [`new URL()`](https://developer.mozilla.org/en-US/docs/Web/API/URL/URL) constructor.
    
-   `options` [Object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object "Object") _(optional)_
    
    -   `timeout` [number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type "Number") _(optional)_[#](#page-wait-for-response-option-timeout)
        
        Maximum wait time in milliseconds, defaults to 30 seconds, pass `0` to disable the timeout. The default value can be changed by using the [browserContext.setDefaultTimeout()](/docs/api/class-browsercontext#browser-context-set-default-timeout) or [page.setDefaultTimeout()](/docs/api/class-page#page-set-default-timeout) methods.
        

**Returns**

-   [Promise](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise "Promise")<[Response](/docs/api/class-response "Response")\>[#](#page-wait-for-response-return)

* * *

### waitForURL[​](#page-wait-for-url "Direct link to waitForURL")

Added in: v1.11 page.waitForURL

Waits for the main frame to navigate to the given URL.

**Usage**

```
await page.click('a.delayed-navigation'); // Clicking the link will indirectly cause a navigationawait page.waitForURL('**/target.html');
```

**Arguments**

-   `url` [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type "string") | [RegExp](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp "RegExp") | [function](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function "Function")([URL](https://nodejs.org/api/url.html "URL")):[boolean](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Boolean_type "Boolean")[#](#page-wait-for-url-option-url)
    
    A glob pattern, regex pattern or predicate receiving [URL](https://nodejs.org/api/url.html "URL") to match while waiting for the navigation. Note that if the parameter is a string without wildcard characters, the method will wait for navigation to URL that is exactly equal to the string.
    
-   `options` [Object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object "Object") _(optional)_
    
    -   `timeout` [number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type "Number") _(optional)_[#](#page-wait-for-url-option-timeout)
        
        Maximum operation time in milliseconds. Defaults to `0` - no timeout. The default value can be changed via `navigationTimeout` option in the config, or by using the [browserContext.setDefaultNavigationTimeout()](/docs/api/class-browsercontext#browser-context-set-default-navigation-timeout), [browserContext.setDefaultTimeout()](/docs/api/class-browsercontext#browser-context-set-default-timeout), [page.setDefaultNavigationTimeout()](/docs/api/class-page#page-set-default-navigation-timeout) or [page.setDefaultTimeout()](/docs/api/class-page#page-set-default-timeout) methods.
        
    -   `waitUntil` "load" | "domcontentloaded" | "networkidle" | "commit" _(optional)_[#](#page-wait-for-url-option-wait-until)
        
        When to consider operation succeeded, defaults to `load`. Events can be either:
        
        -   `'domcontentloaded'` - consider operation to be finished when the `DOMContentLoaded` event is fired.
        -   `'load'` - consider operation to be finished when the `load` event is fired.
        -   `'networkidle'` - **DISCOURAGED** consider operation to be finished when there are no network connections for at least `500` ms. Don't use this method for testing, rely on web assertions to assess readiness instead.
        -   `'commit'` - consider operation to be finished when network response is received and the document started loading.

**Returns**

-   [Promise](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise "Promise")<[void](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/undefined "void")\>[#](#page-wait-for-url-return)

* * *

### workers[​](#page-workers "Direct link to workers")

Added before v1.9 page.workers

This method returns all of the dedicated [WebWorkers](https://developer.mozilla.org/en-US/docs/Web/API/Web_Workers_API) associated with the page.

note

This does not contain ServiceWorkers

**Usage**

```
page.workers();
```

**Returns**

-   [Array](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array "Array")<[Worker](/docs/api/class-worker "Worker")\>[#](#page-workers-return)

* * *

## Properties[​](#properties "Direct link to Properties")

### clock[​](#page-clock "Direct link to clock")

Added in: v1.45 page.clock

Playwright has ability to mock clock and passage of time.

**Usage**

```
page.clock
```

**Type**

-   [Clock](/docs/api/class-clock "Clock")

* * *

### coverage[​](#page-coverage "Direct link to coverage")

Added before v1.9 page.coverage

note

Only available for Chromium atm.

Browser-specific Coverage implementation. See [Coverage](/docs/api/class-coverage) for more details.

**Usage**

```
page.coverage
```

**Type**

-   [Coverage](/docs/api/class-coverage "Coverage")

* * *

### keyboard[​](#page-keyboard "Direct link to keyboard")

Added before v1.9 page.keyboard

**Usage**

```
page.keyboard
```

**Type**

-   [Keyboard](/docs/api/class-keyboard "Keyboard")

* * *

### mouse[​](#page-mouse "Direct link to mouse")

Added before v1.9 page.mouse

**Usage**

```
page.mouse
```

**Type**

-   [Mouse](/docs/api/class-mouse "Mouse")

* * *

### request[​](#page-request "Direct link to request")

Added in: v1.16 page.request

API testing helper associated with this page. This method returns the same instance as [browserContext.request](/docs/api/class-browsercontext#browser-context-request) on the page's context. See [browserContext.request](/docs/api/class-browsercontext#browser-context-request) for more details.

**Usage**

```
page.request
```

**Type**

-   [APIRequestContext](/docs/api/class-apirequestcontext "APIRequestContext")

* * *

### touchscreen[​](#page-touchscreen "Direct link to touchscreen")

Added before v1.9 page.touchscreen

**Usage**

```
page.touchscreen
```

**Type**

-   [Touchscreen](/docs/api/class-touchscreen "Touchscreen")

* * *

## Events[​](#events "Direct link to Events")

### on('close')[​](#page-event-close "Direct link to on('close')")

Added before v1.9 page.on('close')

Emitted when the page closes.

**Usage**

```
page.on('close', data => {});
```

**Event data**

-   [Page](/docs/api/class-page "Page")

* * *

### on('console')[​](#page-event-console "Direct link to on('console')")

Added before v1.9 page.on('console')

Emitted when JavaScript within the page calls one of console API methods, e.g. `console.log` or `console.dir`.

The arguments passed into `console.log` are available on the [ConsoleMessage](/docs/api/class-consolemessage "ConsoleMessage") event handler argument.

**Usage**

```
page.on('console', async msg => {  const values = [];  for (const arg of msg.args())    values.push(await arg.jsonValue());  console.log(...values);});await page.evaluate(() => console.log('hello', 5, { foo: 'bar' }));
```

**Event data**

-   [ConsoleMessage](/docs/api/class-consolemessage "ConsoleMessage")

* * *

### on('crash')[​](#page-event-crash "Direct link to on('crash')")

Added before v1.9 page.on('crash')

Emitted when the page crashes. Browser pages might crash if they try to allocate too much memory. When the page crashes, ongoing and subsequent operations will throw.

The most common way to deal with crashes is to catch an exception:

```
try {  // Crash might happen during a click.  await page.click('button');  // Or while waiting for an event.  await page.waitForEvent('popup');} catch (e) {  // When the page crashes, exception message contains 'crash'.}
```

**Usage**

```
page.on('crash', data => {});
```

**Event data**

-   [Page](/docs/api/class-page "Page")

* * *

### on('dialog')[​](#page-event-dialog "Direct link to on('dialog')")

Added before v1.9 page.on('dialog')

Emitted when a JavaScript dialog appears, such as `alert`, `prompt`, `confirm` or `beforeunload`. Listener **must** either [dialog.accept()](/docs/api/class-dialog#dialog-accept) or [dialog.dismiss()](/docs/api/class-dialog#dialog-dismiss) the dialog - otherwise the page will [freeze](https://developer.mozilla.org/en-US/docs/Web/JavaScript/EventLoop#never_blocking) waiting for the dialog, and actions like click will never finish.

**Usage**

```
page.on('dialog', dialog => dialog.accept());
```

note

When no [page.on('dialog')](/docs/api/class-page#page-event-dialog) or [browserContext.on('dialog')](/docs/api/class-browsercontext#browser-context-event-dialog) listeners are present, all dialogs are automatically dismissed.

**Event data**

-   [Dialog](/docs/api/class-dialog "Dialog")

* * *

### on('domcontentloaded')[​](#page-event-dom-content-loaded "Direct link to on('domcontentloaded')")

Added in: v1.9 page.on('domcontentloaded')

Emitted when the JavaScript [`DOMContentLoaded`](https://developer.mozilla.org/en-US/docs/Web/Events/DOMContentLoaded) event is dispatched.

**Usage**

```
page.on('domcontentloaded', data => {});
```

**Event data**

-   [Page](/docs/api/class-page "Page")

* * *

### on('download')[​](#page-event-download "Direct link to on('download')")

Added before v1.9 page.on('download')

Emitted when attachment download started. User can access basic file operations on downloaded content via the passed [Download](/docs/api/class-download "Download") instance.

**Usage**

```
page.on('download', data => {});
```

**Event data**

-   [Download](/docs/api/class-download "Download")

* * *

### on('filechooser')[​](#page-event-file-chooser "Direct link to on('filechooser')")

Added in: v1.9 page.on('filechooser')

Emitted when a file chooser is supposed to appear, such as after clicking the `<input type=file>`. Playwright can respond to it via setting the input files using [fileChooser.setFiles()](/docs/api/class-filechooser#file-chooser-set-files) that can be uploaded after that.

```
page.on('filechooser', async fileChooser => {  await fileChooser.setFiles(path.join(__dirname, '/tmp/myfile.pdf'));});
```

**Usage**

```
page.on('filechooser', data => {});
```

**Event data**

-   [FileChooser](/docs/api/class-filechooser "FileChooser")

* * *

### on('frameattached')[​](#page-event-frame-attached "Direct link to on('frameattached')")

Added in: v1.9 page.on('frameattached')

Emitted when a frame is attached.

**Usage**

```
page.on('frameattached', data => {});
```

**Event data**

-   [Frame](/docs/api/class-frame "Frame")

* * *

### on('framedetached')[​](#page-event-frame-detached "Direct link to on('framedetached')")

Added in: v1.9 page.on('framedetached')

Emitted when a frame is detached.

**Usage**

```
page.on('framedetached', data => {});
```

**Event data**

-   [Frame](/docs/api/class-frame "Frame")

* * *

### on('framenavigated')[​](#page-event-frame-navigated "Direct link to on('framenavigated')")

Added in: v1.9 page.on('framenavigated')

Emitted when a frame is navigated to a new url.

**Usage**

```
page.on('framenavigated', data => {});
```

**Event data**

-   [Frame](/docs/api/class-frame "Frame")

* * *

### on('load')[​](#page-event-load "Direct link to on('load')")

Added before v1.9 page.on('load')

Emitted when the JavaScript [`load`](https://developer.mozilla.org/en-US/docs/Web/Events/load) event is dispatched.

**Usage**

```
page.on('load', data => {});
```

**Event data**

-   [Page](/docs/api/class-page "Page")

* * *

### on('pageerror')[​](#page-event-page-error "Direct link to on('pageerror')")

Added in: v1.9 page.on('pageerror')

Emitted when an uncaught exception happens within the page.

```
// Log all uncaught errors to the terminalpage.on('pageerror', exception => {  console.log(`Uncaught exception: "${exception}"`);});// Navigate to a page with an exception.await page.goto('data:text/html,<script>throw new Error("Test")</script>');
```

**Usage**

```
page.on('pageerror', data => {});
```

**Event data**

-   [Error](https://nodejs.org/api/errors.html#errors_class_error "Error")

* * *

### on('popup')[​](#page-event-popup "Direct link to on('popup')")

Added before v1.9 page.on('popup')

Emitted when the page opens a new tab or window. This event is emitted in addition to the [browserContext.on('page')](/docs/api/class-browsercontext#browser-context-event-page), but only for popups relevant to this page.

The earliest moment that page is available is when it has navigated to the initial url. For example, when opening a popup with `window.open('http://example.com')`, this event will fire when the network request to "[http://example.com](http://example.com)" is done and its response has started loading in the popup. If you would like to route/listen to this network request, use [browserContext.route()](/docs/api/class-browsercontext#browser-context-route) and [browserContext.on('request')](/docs/api/class-browsercontext#browser-context-event-request) respectively instead of similar methods on the [Page](/docs/api/class-page "Page").

```
// Start waiting for popup before clicking. Note no await.const popupPromise = page.waitForEvent('popup');await page.getByText('open the popup').click();const popup = await popupPromise;console.log(await popup.evaluate('location.href'));
```

note

Use [page.waitForLoadState()](/docs/api/class-page#page-wait-for-load-state) to wait until the page gets to a particular state (you should not need it in most cases).

**Usage**

```
page.on('popup', data => {});
```

**Event data**

-   [Page](/docs/api/class-page "Page")

* * *

### on('request')[​](#page-event-request "Direct link to on('request')")

Added before v1.9 page.on('request')

Emitted when a page issues a request. The [request](/docs/api/class-request "Request") object is read-only. In order to intercept and mutate requests, see [page.route()](/docs/api/class-page#page-route) or [browserContext.route()](/docs/api/class-browsercontext#browser-context-route).

**Usage**

```
page.on('request', data => {});
```

**Event data**

-   [Request](/docs/api/class-request "Request")

* * *

### on('requestfailed')[​](#page-event-request-failed "Direct link to on('requestfailed')")

Added in: v1.9 page.on('requestfailed')

Emitted when a request fails, for example by timing out.

```
page.on('requestfailed', request => {  console.log(request.url() + ' ' + request.failure().errorText);});
```

note

HTTP Error responses, such as 404 or 503, are still successful responses from HTTP standpoint, so request will complete with [page.on('requestfinished')](/docs/api/class-page#page-event-request-finished) event and not with [page.on('requestfailed')](/docs/api/class-page#page-event-request-failed). A request will only be considered failed when the client cannot get an HTTP response from the server, e.g. due to network error net::ERR\_FAILED.

**Usage**

```
page.on('requestfailed', data => {});
```

**Event data**

-   [Request](/docs/api/class-request "Request")

* * *

### on('requestfinished')[​](#page-event-request-finished "Direct link to on('requestfinished')")

Added in: v1.9 page.on('requestfinished')

Emitted when a request finishes successfully after downloading the response body. For a successful response, the sequence of events is `request`, `response` and `requestfinished`.

**Usage**

```
page.on('requestfinished', data => {});
```

**Event data**

-   [Request](/docs/api/class-request "Request")

* * *

### on('response')[​](#page-event-response "Direct link to on('response')")

Added before v1.9 page.on('response')

Emitted when [response](/docs/api/class-response "Response") status and headers are received for a request. For a successful response, the sequence of events is `request`, `response` and `requestfinished`.

**Usage**

```
page.on('response', data => {});
```

**Event data**

-   [Response](/docs/api/class-response "Response")

* * *

### on('websocket')[​](#page-event-web-socket "Direct link to on('websocket')")

Added in: v1.9 page.on('websocket')

Emitted when [WebSocket](/docs/api/class-websocket "WebSocket") request is sent.

**Usage**

```
page.on('websocket', data => {});
```

**Event data**

-   [WebSocket](/docs/api/class-websocket "WebSocket")

* * *

### on('worker')[​](#page-event-worker "Direct link to on('worker')")

Added before v1.9 page.on('worker')

Emitted when a dedicated [WebWorker](https://developer.mozilla.org/en-US/docs/Web/API/Web_Workers_API) is spawned by the page.

**Usage**

```
page.on('worker', data => {});
```

**Event data**

-   [Worker](/docs/api/class-worker "Worker")

* * *

## Deprecated[​](#deprecated "Direct link to Deprecated")

### $[​](#page-query-selector "Direct link to $")

Added in: v1.9 page.$

Discouraged

Use locator-based [page.locator()](/docs/api/class-page#page-locator) instead. Read more about [locators](/docs/locators).

The method finds an element matching the specified selector within the page. If no elements match the selector, the return value resolves to `null`. To wait for an element on the page, use [locator.waitFor()](/docs/api/class-locator#locator-wait-for).

**Usage**

```
await page.$(selector);await page.$(selector, options);
```

**Arguments**

-   `selector` [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type "string")[#](#page-query-selector-option-selector)
    
    A selector to query for.
    
-   `options` [Object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object "Object") _(optional)_
    
    -   `strict` [boolean](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Boolean_type "Boolean") _(optional)_ Added in: v1.14[#](#page-query-selector-option-strict)
        
        When true, the call requires selector to resolve to a single element. If given selector resolves to more than one element, the call throws an exception.
        

**Returns**

-   [Promise](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise "Promise")<[null](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/null "null") | [ElementHandle](/docs/api/class-elementhandle "ElementHandle")\>[#](#page-query-selector-return)

* * *

### $$[​](#page-query-selector-all "Direct link to $$")

Added in: v1.9 page.$$

Discouraged

Use locator-based [page.locator()](/docs/api/class-page#page-locator) instead. Read more about [locators](/docs/locators).

The method finds all elements matching the specified selector within the page. If no elements match the selector, the return value resolves to `[]`.

**Usage**

```
await page.$$(selector);
```

**Arguments**

-   `selector` [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type "string")[#](#page-query-selector-all-option-selector)
    
    A selector to query for.
    

**Returns**

-   [Promise](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise "Promise")<[Array](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array "Array")<[ElementHandle](/docs/api/class-elementhandle "ElementHandle")\>>[#](#page-query-selector-all-return)

* * *

### $eval[​](#page-eval-on-selector "Direct link to $eval")

Added in: v1.9 page.$eval

Discouraged

This method does not wait for the element to pass actionability checks and therefore can lead to the flaky tests. Use [locator.evaluate()](/docs/api/class-locator#locator-evaluate), other [Locator](/docs/api/class-locator "Locator") helper methods or web-first assertions instead.

The method finds an element matching the specified selector within the page and passes it as a first argument to [pageFunction](/docs/api/class-page#page-eval-on-selector-option-expression). If no elements match the selector, the method throws an error. Returns the value of [pageFunction](/docs/api/class-page#page-eval-on-selector-option-expression).

If [pageFunction](/docs/api/class-page#page-eval-on-selector-option-expression) returns a [Promise](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise "Promise"), then [page.$eval()](/docs/api/class-page#page-eval-on-selector) would wait for the promise to resolve and return its value.

**Usage**

```
const searchValue = await page.$eval('#search', el => el.value);const preloadHref = await page.$eval('link[rel=preload]', el => el.href);const html = await page.$eval('.main-container', (e, suffix) => e.outerHTML + suffix, 'hello');// In TypeScript, this example requires an explicit type annotation (HTMLLinkElement) on el:const preloadHrefTS = await page.$eval('link[rel=preload]', (el: HTMLLinkElement) => el.href);
```

**Arguments**

-   `selector` [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type "string")[#](#page-eval-on-selector-option-selector)
    
    A selector to query for.
    
-   `pageFunction` [function](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function "Function")([Element](https://developer.mozilla.org/en-US/docs/Web/API/element "Element")) | [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type "string")[#](#page-eval-on-selector-option-expression)
    
    Function to be evaluated in the page context.
    
-   `arg` [EvaluationArgument](/docs/evaluating#evaluation-argument "EvaluationArgument") _(optional)_[#](#page-eval-on-selector-option-arg)
    
    Optional argument to pass to [pageFunction](/docs/api/class-page#page-eval-on-selector-option-expression).
    
-   `options` [Object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object "Object") _(optional)_
    
    -   `strict` [boolean](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Boolean_type "Boolean") _(optional)_ Added in: v1.14[#](#page-eval-on-selector-option-strict)
        
        When true, the call requires selector to resolve to a single element. If given selector resolves to more than one element, the call throws an exception.
        

**Returns**

-   [Promise](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise "Promise")<[Serializable](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify#Description "Serializable")\>[#](#page-eval-on-selector-return)

* * *

### $$eval[​](#page-eval-on-selector-all "Direct link to $$eval")

Added in: v1.9 page.$$eval

Discouraged

In most cases, [locator.evaluateAll()](/docs/api/class-locator#locator-evaluate-all), other [Locator](/docs/api/class-locator "Locator") helper methods and web-first assertions do a better job.

The method finds all elements matching the specified selector within the page and passes an array of matched elements as a first argument to [pageFunction](/docs/api/class-page#page-eval-on-selector-all-option-expression). Returns the result of [pageFunction](/docs/api/class-page#page-eval-on-selector-all-option-expression) invocation.

If [pageFunction](/docs/api/class-page#page-eval-on-selector-all-option-expression) returns a [Promise](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise "Promise"), then [page.$$eval()](/docs/api/class-page#page-eval-on-selector-all) would wait for the promise to resolve and return its value.

**Usage**

```
const divCounts = await page.$$eval('div', (divs, min) => divs.length >= min, 10);
```

**Arguments**

-   `selector` [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type "string")[#](#page-eval-on-selector-all-option-selector)
    
    A selector to query for.
    
-   `pageFunction` [function](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function "Function")([Array](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array "Array")<[Element](https://developer.mozilla.org/en-US/docs/Web/API/element "Element")\>) | [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type "string")[#](#page-eval-on-selector-all-option-expression)
    
    Function to be evaluated in the page context.
    
-   `arg` [EvaluationArgument](/docs/evaluating#evaluation-argument "EvaluationArgument") _(optional)_[#](#page-eval-on-selector-all-option-arg)
    
    Optional argument to pass to [pageFunction](/docs/api/class-page#page-eval-on-selector-all-option-expression).
    

**Returns**

-   [Promise](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise "Promise")<[Serializable](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify#Description "Serializable")\>[#](#page-eval-on-selector-all-return)

* * *

### check[​](#page-check "Direct link to check")

Added before v1.9 page.check

Discouraged

Use locator-based [locator.check()](/docs/api/class-locator#locator-check) instead. Read more about [locators](/docs/locators).

This method checks an element matching [selector](/docs/api/class-page#page-check-option-selector) by performing the following steps:

1.  Find an element matching [selector](/docs/api/class-page#page-check-option-selector). If there is none, wait until a matching element is attached to the DOM.
2.  Ensure that matched element is a checkbox or a radio input. If not, this method throws. If the element is already checked, this method returns immediately.
3.  Wait for [actionability](/docs/actionability) checks on the matched element, unless [force](/docs/api/class-page#page-check-option-force) option is set. If the element is detached during the checks, the whole action is retried.
4.  Scroll the element into view if needed.
5.  Use [page.mouse](/docs/api/class-page#page-mouse) to click in the center of the element.
6.  Ensure that the element is now checked. If not, this method throws.

When all steps combined have not finished during the specified [timeout](/docs/api/class-page#page-check-option-timeout), this method throws a [TimeoutError](/docs/api/class-timeouterror "TimeoutError"). Passing zero timeout disables this.

**Usage**

```
await page.check(selector);await page.check(selector, options);
```

**Arguments**

-   `selector` [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type "string")[#](#page-check-option-selector)
    
    A selector to search for an element. If there are multiple elements satisfying the selector, the first will be used.
    
-   `options` [Object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object "Object") _(optional)_
    
    -   `force` [boolean](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Boolean_type "Boolean") _(optional)_[#](#page-check-option-force)
        
        Whether to bypass the [actionability](/docs/actionability) checks. Defaults to `false`.
        
    -   `noWaitAfter` [boolean](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Boolean_type "Boolean") _(optional)_[#](#page-check-option-no-wait-after)
        
        Deprecated
        
        This option has no effect.
        
        This option has no effect.
        
    -   `position` [Object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object "Object") _(optional)_ Added in: v1.11[#](#page-check-option-position)
        
        -   `x` [number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type "Number")
            
        -   `y` [number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type "Number")
            
        
        A point to use relative to the top-left corner of element padding box. If not specified, uses some visible point of the element.
        
    -   `strict` [boolean](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Boolean_type "Boolean") _(optional)_ Added in: v1.14[#](#page-check-option-strict)
        
        When true, the call requires selector to resolve to a single element. If given selector resolves to more than one element, the call throws an exception.
        
    -   `timeout` [number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type "Number") _(optional)_[#](#page-check-option-timeout)
        
        Maximum time in milliseconds. Defaults to `0` - no timeout. The default value can be changed via `actionTimeout` option in the config, or by using the [browserContext.setDefaultTimeout()](/docs/api/class-browsercontext#browser-context-set-default-timeout) or [page.setDefaultTimeout()](/docs/api/class-page#page-set-default-timeout) methods.
        
    -   `trial` [boolean](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Boolean_type "Boolean") _(optional)_ Added in: v1.11[#](#page-check-option-trial)
        
        When set, this method only performs the [actionability](/docs/actionability) checks and skips the action. Defaults to `false`. Useful to wait until the element is ready for the action without performing it.
        

**Returns**

-   [Promise](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise "Promise")<[void](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/undefined "void")\>[#](#page-check-return)

* * *

### click[​](#page-click "Direct link to click")

Added before v1.9 page.click

Discouraged

Use locator-based [locator.click()](/docs/api/class-locator#locator-click) instead. Read more about [locators](/docs/locators).

This method clicks an element matching [selector](/docs/api/class-page#page-click-option-selector) by performing the following steps:

1.  Find an element matching [selector](/docs/api/class-page#page-click-option-selector). If there is none, wait until a matching element is attached to the DOM.
2.  Wait for [actionability](/docs/actionability) checks on the matched element, unless [force](/docs/api/class-page#page-click-option-force) option is set. If the element is detached during the checks, the whole action is retried.
3.  Scroll the element into view if needed.
4.  Use [page.mouse](/docs/api/class-page#page-mouse) to click in the center of the element, or the specified [position](/docs/api/class-page#page-click-option-position).
5.  Wait for initiated navigations to either succeed or fail, unless [noWaitAfter](/docs/api/class-page#page-click-option-no-wait-after) option is set.

When all steps combined have not finished during the specified [timeout](/docs/api/class-page#page-click-option-timeout), this method throws a [TimeoutError](/docs/api/class-timeouterror "TimeoutError"). Passing zero timeout disables this.

**Usage**

```
await page.click(selector);await page.click(selector, options);
```

**Arguments**

-   `selector` [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type "string")[#](#page-click-option-selector)
    
    A selector to search for an element. If there are multiple elements satisfying the selector, the first will be used.
    
-   `options` [Object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object "Object") _(optional)_
    
    -   `button` "left" | "right" | "middle" _(optional)_[#](#page-click-option-button)
        
        Defaults to `left`.
        
    -   `clickCount` [number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type "Number") _(optional)_[#](#page-click-option-click-count)
        
        defaults to 1. See [UIEvent.detail](https://developer.mozilla.org/en-US/docs/Web/API/UIEvent/detail "UIEvent.detail").
        
    -   `delay` [number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type "Number") _(optional)_[#](#page-click-option-delay)
        
        Time to wait between `mousedown` and `mouseup` in milliseconds. Defaults to 0.
        
    -   `force` [boolean](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Boolean_type "Boolean") _(optional)_[#](#page-click-option-force)
        
        Whether to bypass the [actionability](/docs/actionability) checks. Defaults to `false`.
        
    -   `modifiers` [Array](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array "Array")<"Alt" | "Control" | "ControlOrMeta" | "Meta" | "Shift"> _(optional)_[#](#page-click-option-modifiers)
        
        Modifier keys to press. Ensures that only these modifiers are pressed during the operation, and then restores current modifiers back. If not specified, currently pressed modifiers are used. "ControlOrMeta" resolves to "Control" on Windows and Linux and to "Meta" on macOS.
        
    -   `noWaitAfter` [boolean](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Boolean_type "Boolean") _(optional)_[#](#page-click-option-no-wait-after)
        
        Deprecated
        
        This option will default to `true` in the future.
        
        Actions that initiate navigations are waiting for these navigations to happen and for pages to start loading. You can opt out of waiting via setting this flag. You would only need this option in the exceptional cases such as navigating to inaccessible pages. Defaults to `false`.
        
    -   `position` [Object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object "Object") _(optional)_[#](#page-click-option-position)
        
        -   `x` [number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type "Number")
            
        -   `y` [number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type "Number")
            
        
        A point to use relative to the top-left corner of element padding box. If not specified, uses some visible point of the element.
        
    -   `strict` [boolean](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Boolean_type "Boolean") _(optional)_ Added in: v1.14[#](#page-click-option-strict)
        
        When true, the call requires selector to resolve to a single element. If given selector resolves to more than one element, the call throws an exception.
        
    -   `timeout` [number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type "Number") _(optional)_[#](#page-click-option-timeout)
        
        Maximum time in milliseconds. Defaults to `0` - no timeout. The default value can be changed via `actionTimeout` option in the config, or by using the [browserContext.setDefaultTimeout()](/docs/api/class-browsercontext#browser-context-set-default-timeout) or [page.setDefaultTimeout()](/docs/api/class-page#page-set-default-timeout) methods.
        
    -   `trial` [boolean](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Boolean_type "Boolean") _(optional)_ Added in: v1.11[#](#page-click-option-trial)
        
        When set, this method only performs the [actionability](/docs/actionability) checks and skips the action. Defaults to `false`. Useful to wait until the element is ready for the action without performing it. Note that keyboard `modifiers` will be pressed regardless of `trial` to allow testing elements which are only visible when those keys are pressed.
        

**Returns**

-   [Promise](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise "Promise")<[void](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/undefined "void")\>[#](#page-click-return)

* * *

### dblclick[​](#page-dblclick "Direct link to dblclick")

Added before v1.9 page.dblclick

Discouraged

Use locator-based [locator.dblclick()](/docs/api/class-locator#locator-dblclick) instead. Read more about [locators](/docs/locators).

This method double clicks an element matching [selector](/docs/api/class-page#page-dblclick-option-selector) by performing the following steps:

1.  Find an element matching [selector](/docs/api/class-page#page-dblclick-option-selector). If there is none, wait until a matching element is attached to the DOM.
2.  Wait for [actionability](/docs/actionability) checks on the matched element, unless [force](/docs/api/class-page#page-dblclick-option-force) option is set. If the element is detached during the checks, the whole action is retried.
3.  Scroll the element into view if needed.
4.  Use [page.mouse](/docs/api/class-page#page-mouse) to double click in the center of the element, or the specified [position](/docs/api/class-page#page-dblclick-option-position).

When all steps combined have not finished during the specified [timeout](/docs/api/class-page#page-dblclick-option-timeout), this method throws a [TimeoutError](/docs/api/class-timeouterror "TimeoutError"). Passing zero timeout disables this.

note

`page.dblclick()` dispatches two `click` events and a single `dblclick` event.

**Usage**

```
await page.dblclick(selector);await page.dblclick(selector, options);
```

**Arguments**

-   `selector` [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type "string")[#](#page-dblclick-option-selector)
    
    A selector to search for an element. If there are multiple elements satisfying the selector, the first will be used.
    
-   `options` [Object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object "Object") _(optional)_
    
    -   `button` "left" | "right" | "middle" _(optional)_[#](#page-dblclick-option-button)
        
        Defaults to `left`.
        
    -   `delay` [number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type "Number") _(optional)_[#](#page-dblclick-option-delay)
        
        Time to wait between `mousedown` and `mouseup` in milliseconds. Defaults to 0.
        
    -   `force` [boolean](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Boolean_type "Boolean") _(optional)_[#](#page-dblclick-option-force)
        
        Whether to bypass the [actionability](/docs/actionability) checks. Defaults to `false`.
        
    -   `modifiers` [Array](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array "Array")<"Alt" | "Control" | "ControlOrMeta" | "Meta" | "Shift"> _(optional)_[#](#page-dblclick-option-modifiers)
        
        Modifier keys to press. Ensures that only these modifiers are pressed during the operation, and then restores current modifiers back. If not specified, currently pressed modifiers are used. "ControlOrMeta" resolves to "Control" on Windows and Linux and to "Meta" on macOS.
        
    -   `noWaitAfter` [boolean](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Boolean_type "Boolean") _(optional)_[#](#page-dblclick-option-no-wait-after)
        
        Deprecated
        
        This option has no effect.
        
        This option has no effect.
        
    -   `position` [Object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object "Object") _(optional)_[#](#page-dblclick-option-position)
        
        -   `x` [number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type "Number")
            
        -   `y` [number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type "Number")
            
        
        A point to use relative to the top-left corner of element padding box. If not specified, uses some visible point of the element.
        
    -   `strict` [boolean](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Boolean_type "Boolean") _(optional)_ Added in: v1.14[#](#page-dblclick-option-strict)
        
        When true, the call requires selector to resolve to a single element. If given selector resolves to more than one element, the call throws an exception.
        
    -   `timeout` [number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type "Number") _(optional)_[#](#page-dblclick-option-timeout)
        
        Maximum time in milliseconds. Defaults to `0` - no timeout. The default value can be changed via `actionTimeout` option in the config, or by using the [browserContext.setDefaultTimeout()](/docs/api/class-browsercontext#browser-context-set-default-timeout) or [page.setDefaultTimeout()](/docs/api/class-page#page-set-default-timeout) methods.
        
    -   `trial` [boolean](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Boolean_type "Boolean") _(optional)_ Added in: v1.11[#](#page-dblclick-option-trial)
        
        When set, this method only performs the [actionability](/docs/actionability) checks and skips the action. Defaults to `false`. Useful to wait until the element is ready for the action without performing it. Note that keyboard `modifiers` will be pressed regardless of `trial` to allow testing elements which are only visible when those keys are pressed.
        

**Returns**

-   [Promise](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise "Promise")<[void](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/undefined "void")\>[#](#page-dblclick-return)

* * *

### dispatchEvent[​](#page-dispatch-event "Direct link to dispatchEvent")

Added before v1.9 page.dispatchEvent

Discouraged

Use locator-based [locator.dispatchEvent()](/docs/api/class-locator#locator-dispatch-event) instead. Read more about [locators](/docs/locators).

The snippet below dispatches the `click` event on the element. Regardless of the visibility state of the element, `click` is dispatched. This is equivalent to calling [element.click()](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/click).

**Usage**

```
await page.dispatchEvent('button#submit', 'click');
```

Under the hood, it creates an instance of an event based on the given [type](/docs/api/class-page#page-dispatch-event-option-type), initializes it with [eventInit](/docs/api/class-page#page-dispatch-event-option-event-init) properties and dispatches it on the element. Events are `composed`, `cancelable` and bubble by default.

Since [eventInit](/docs/api/class-page#page-dispatch-event-option-event-init) is event-specific, please refer to the events documentation for the lists of initial properties:

-   [DeviceMotionEvent](https://developer.mozilla.org/en-US/docs/Web/API/DeviceMotionEvent/DeviceMotionEvent)
-   [DeviceOrientationEvent](https://developer.mozilla.org/en-US/docs/Web/API/DeviceOrientationEvent/DeviceOrientationEvent)
-   [DragEvent](https://developer.mozilla.org/en-US/docs/Web/API/DragEvent/DragEvent)
-   [Event](https://developer.mozilla.org/en-US/docs/Web/API/Event/Event)
-   [FocusEvent](https://developer.mozilla.org/en-US/docs/Web/API/FocusEvent/FocusEvent)
-   [KeyboardEvent](https://developer.mozilla.org/en-US/docs/Web/API/KeyboardEvent/KeyboardEvent)
-   [MouseEvent](https://developer.mozilla.org/en-US/docs/Web/API/MouseEvent/MouseEvent)
-   [PointerEvent](https://developer.mozilla.org/en-US/docs/Web/API/PointerEvent/PointerEvent)
-   [TouchEvent](https://developer.mozilla.org/en-US/docs/Web/API/TouchEvent/TouchEvent)
-   [WheelEvent](https://developer.mozilla.org/en-US/docs/Web/API/WheelEvent/WheelEvent)

You can also specify `JSHandle` as the property value if you want live objects to be passed into the event:

```
// Note you can only create DataTransfer in Chromium and Firefoxconst dataTransfer = await page.evaluateHandle(() => new DataTransfer());await page.dispatchEvent('#source', 'dragstart', { dataTransfer });
```

**Arguments**

-   `selector` [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type "string")[#](#page-dispatch-event-option-selector)
    
    A selector to search for an element. If there are multiple elements satisfying the selector, the first will be used.
    
-   `type` [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type "string")[#](#page-dispatch-event-option-type)
    
    DOM event type: `"click"`, `"dragstart"`, etc.
    
-   `eventInit` [EvaluationArgument](/docs/evaluating#evaluation-argument "EvaluationArgument") _(optional)_[#](#page-dispatch-event-option-event-init)
    
    Optional event-specific initialization properties.
    
-   `options` [Object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object "Object") _(optional)_
    
    -   `strict` [boolean](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Boolean_type "Boolean") _(optional)_ Added in: v1.14[#](#page-dispatch-event-option-strict)
        
        When true, the call requires selector to resolve to a single element. If given selector resolves to more than one element, the call throws an exception.
        
    -   `timeout` [number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type "Number") _(optional)_[#](#page-dispatch-event-option-timeout)
        
        Maximum time in milliseconds. Defaults to `0` - no timeout. The default value can be changed via `actionTimeout` option in the config, or by using the [browserContext.setDefaultTimeout()](/docs/api/class-browsercontext#browser-context-set-default-timeout) or [page.setDefaultTimeout()](/docs/api/class-page#page-set-default-timeout) methods.
        

**Returns**

-   [Promise](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise "Promise")<[void](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/undefined "void")\>[#](#page-dispatch-event-return)

* * *

### fill[​](#page-fill "Direct link to fill")

Added before v1.9 page.fill

Discouraged

Use locator-based [locator.fill()](/docs/api/class-locator#locator-fill) instead. Read more about [locators](/docs/locators).

This method waits for an element matching [selector](/docs/api/class-page#page-fill-option-selector), waits for [actionability](/docs/actionability) checks, focuses the element, fills it and triggers an `input` event after filling. Note that you can pass an empty string to clear the input field.

If the target element is not an `<input>`, `<textarea>` or `[contenteditable]` element, this method throws an error. However, if the element is inside the `<label>` element that has an associated [control](https://developer.mozilla.org/en-US/docs/Web/API/HTMLLabelElement/control), the control will be filled instead.

To send fine-grained keyboard events, use [locator.pressSequentially()](/docs/api/class-locator#locator-press-sequentially).

**Usage**

```
await page.fill(selector, value);await page.fill(selector, value, options);
```

**Arguments**

-   `selector` [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type "string")[#](#page-fill-option-selector)
    
    A selector to search for an element. If there are multiple elements satisfying the selector, the first will be used.
    
-   `value` [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type "string")[#](#page-fill-option-value)
    
    Value to fill for the `<input>`, `<textarea>` or `[contenteditable]` element.
    
-   `options` [Object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object "Object") _(optional)_
    
    -   `force` [boolean](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Boolean_type "Boolean") _(optional)_ Added in: v1.13[#](#page-fill-option-force)
        
        Whether to bypass the [actionability](/docs/actionability) checks. Defaults to `false`.
        
    -   `noWaitAfter` [boolean](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Boolean_type "Boolean") _(optional)_[#](#page-fill-option-no-wait-after)
        
        Deprecated
        
        This option has no effect.
        
        This option has no effect.
        
    -   `strict` [boolean](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Boolean_type "Boolean") _(optional)_ Added in: v1.14[#](#page-fill-option-strict)
        
        When true, the call requires selector to resolve to a single element. If given selector resolves to more than one element, the call throws an exception.
        
    -   `timeout` [number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type "Number") _(optional)_[#](#page-fill-option-timeout)
        
        Maximum time in milliseconds. Defaults to `0` - no timeout. The default value can be changed via `actionTimeout` option in the config, or by using the [browserContext.setDefaultTimeout()](/docs/api/class-browsercontext#browser-context-set-default-timeout) or [page.setDefaultTimeout()](/docs/api/class-page#page-set-default-timeout) methods.
        

**Returns**

-   [Promise](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise "Promise")<[void](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/undefined "void")\>[#](#page-fill-return)

* * *

### focus[​](#page-focus "Direct link to focus")

Added before v1.9 page.focus

Discouraged

Use locator-based [locator.focus()](/docs/api/class-locator#locator-focus) instead. Read more about [locators](/docs/locators).

This method fetches an element with [selector](/docs/api/class-page#page-focus-option-selector) and focuses it. If there's no element matching [selector](/docs/api/class-page#page-focus-option-selector), the method waits until a matching element appears in the DOM.

**Usage**

```
await page.focus(selector);await page.focus(selector, options);
```

**Arguments**

-   `selector` [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type "string")[#](#page-focus-option-selector)
    
    A selector to search for an element. If there are multiple elements satisfying the selector, the first will be used.
    
-   `options` [Object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object "Object") _(optional)_
    
    -   `strict` [boolean](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Boolean_type "Boolean") _(optional)_ Added in: v1.14[#](#page-focus-option-strict)
        
        When true, the call requires selector to resolve to a single element. If given selector resolves to more than one element, the call throws an exception.
        
    -   `timeout` [number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type "Number") _(optional)_[#](#page-focus-option-timeout)
        
        Maximum time in milliseconds. Defaults to `0` - no timeout. The default value can be changed via `actionTimeout` option in the config, or by using the [browserContext.setDefaultTimeout()](/docs/api/class-browsercontext#browser-context-set-default-timeout) or [page.setDefaultTimeout()](/docs/api/class-page#page-set-default-timeout) methods.
        

**Returns**

-   [Promise](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise "Promise")<[void](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/undefined "void")\>[#](#page-focus-return)

* * *

### getAttribute[​](#page-get-attribute "Direct link to getAttribute")

Added before v1.9 page.getAttribute

Discouraged

Use locator-based [locator.getAttribute()](/docs/api/class-locator#locator-get-attribute) instead. Read more about [locators](/docs/locators).

Returns element attribute value.

**Usage**

```
await page.getAttribute(selector, name);await page.getAttribute(selector, name, options);
```

**Arguments**

-   `selector` [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type "string")[#](#page-get-attribute-option-selector)
    
    A selector to search for an element. If there are multiple elements satisfying the selector, the first will be used.
    
-   `name` [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type "string")[#](#page-get-attribute-option-name)
    
    Attribute name to get the value for.
    
-   `options` [Object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object "Object") _(optional)_
    
    -   `strict` [boolean](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Boolean_type "Boolean") _(optional)_ Added in: v1.14[#](#page-get-attribute-option-strict)
        
        When true, the call requires selector to resolve to a single element. If given selector resolves to more than one element, the call throws an exception.
        
    -   `timeout` [number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type "Number") _(optional)_[#](#page-get-attribute-option-timeout)
        
        Maximum time in milliseconds. Defaults to `0` - no timeout. The default value can be changed via `actionTimeout` option in the config, or by using the [browserContext.setDefaultTimeout()](/docs/api/class-browsercontext#browser-context-set-default-timeout) or [page.setDefaultTimeout()](/docs/api/class-page#page-set-default-timeout) methods.
        

**Returns**

-   [Promise](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise "Promise")<[null](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/null "null") | [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type "string")\>[#](#page-get-attribute-return)

* * *

### hover[​](#page-hover "Direct link to hover")

Added before v1.9 page.hover

Discouraged

Use locator-based [locator.hover()](/docs/api/class-locator#locator-hover) instead. Read more about [locators](/docs/locators).

This method hovers over an element matching [selector](/docs/api/class-page#page-hover-option-selector) by performing the following steps:

1.  Find an element matching [selector](/docs/api/class-page#page-hover-option-selector). If there is none, wait until a matching element is attached to the DOM.
2.  Wait for [actionability](/docs/actionability) checks on the matched element, unless [force](/docs/api/class-page#page-hover-option-force) option is set. If the element is detached during the checks, the whole action is retried.
3.  Scroll the element into view if needed.
4.  Use [page.mouse](/docs/api/class-page#page-mouse) to hover over the center of the element, or the specified [position](/docs/api/class-page#page-hover-option-position).

When all steps combined have not finished during the specified [timeout](/docs/api/class-page#page-hover-option-timeout), this method throws a [TimeoutError](/docs/api/class-timeouterror "TimeoutError"). Passing zero timeout disables this.

**Usage**

```
await page.hover(selector);await page.hover(selector, options);
```

**Arguments**

-   `selector` [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type "string")[#](#page-hover-option-selector)
    
    A selector to search for an element. If there are multiple elements satisfying the selector, the first will be used.
    
-   `options` [Object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object "Object") _(optional)_
    
    -   `force` [boolean](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Boolean_type "Boolean") _(optional)_[#](#page-hover-option-force)
        
        Whether to bypass the [actionability](/docs/actionability) checks. Defaults to `false`.
        
    -   `modifiers` [Array](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array "Array")<"Alt" | "Control" | "ControlOrMeta" | "Meta" | "Shift"> _(optional)_[#](#page-hover-option-modifiers)
        
        Modifier keys to press. Ensures that only these modifiers are pressed during the operation, and then restores current modifiers back. If not specified, currently pressed modifiers are used. "ControlOrMeta" resolves to "Control" on Windows and Linux and to "Meta" on macOS.
        
    -   `noWaitAfter` [boolean](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Boolean_type "Boolean") _(optional)_ Added in: v1.28[#](#page-hover-option-no-wait-after)
        
        Deprecated
        
        This option has no effect.
        
        This option has no effect.
        
    -   `position` [Object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object "Object") _(optional)_[#](#page-hover-option-position)
        
        -   `x` [number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type "Number")
            
        -   `y` [number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type "Number")
            
        
        A point to use relative to the top-left corner of element padding box. If not specified, uses some visible point of the element.
        
    -   `strict` [boolean](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Boolean_type "Boolean") _(optional)_ Added in: v1.14[#](#page-hover-option-strict)
        
        When true, the call requires selector to resolve to a single element. If given selector resolves to more than one element, the call throws an exception.
        
    -   `timeout` [number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type "Number") _(optional)_[#](#page-hover-option-timeout)
        
        Maximum time in milliseconds. Defaults to `0` - no timeout. The default value can be changed via `actionTimeout` option in the config, or by using the [browserContext.setDefaultTimeout()](/docs/api/class-browsercontext#browser-context-set-default-timeout) or [page.setDefaultTimeout()](/docs/api/class-page#page-set-default-timeout) methods.
        
    -   `trial` [boolean](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Boolean_type "Boolean") _(optional)_ Added in: v1.11[#](#page-hover-option-trial)
        
        When set, this method only performs the [actionability](/docs/actionability) checks and skips the action. Defaults to `false`. Useful to wait until the element is ready for the action without performing it. Note that keyboard `modifiers` will be pressed regardless of `trial` to allow testing elements which are only visible when those keys are pressed.
        

**Returns**

-   [Promise](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise "Promise")<[void](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/undefined "void")\>[#](#page-hover-return)

* * *

### innerHTML[​](#page-inner-html "Direct link to innerHTML")

Added before v1.9 page.innerHTML

Discouraged

Use locator-based [locator.innerHTML()](/docs/api/class-locator#locator-inner-html) instead. Read more about [locators](/docs/locators).

Returns `element.innerHTML`.

**Usage**

```
await page.innerHTML(selector);await page.innerHTML(selector, options);
```

**Arguments**

-   `selector` [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type "string")[#](#page-inner-html-option-selector)
    
    A selector to search for an element. If there are multiple elements satisfying the selector, the first will be used.
    
-   `options` [Object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object "Object") _(optional)_
    
    -   `strict` [boolean](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Boolean_type "Boolean") _(optional)_ Added in: v1.14[#](#page-inner-html-option-strict)
        
        When true, the call requires selector to resolve to a single element. If given selector resolves to more than one element, the call throws an exception.
        
    -   `timeout` [number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type "Number") _(optional)_[#](#page-inner-html-option-timeout)
        
        Maximum time in milliseconds. Defaults to `0` - no timeout. The default value can be changed via `actionTimeout` option in the config, or by using the [browserContext.setDefaultTimeout()](/docs/api/class-browsercontext#browser-context-set-default-timeout) or [page.setDefaultTimeout()](/docs/api/class-page#page-set-default-timeout) methods.
        

**Returns**

-   [Promise](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise "Promise")<[string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type "string")\>[#](#page-inner-html-return)

* * *

### innerText[​](#page-inner-text "Direct link to innerText")

Added before v1.9 page.innerText

Discouraged

Use locator-based [locator.innerText()](/docs/api/class-locator#locator-inner-text) instead. Read more about [locators](/docs/locators).

Returns `element.innerText`.

**Usage**

```
await page.innerText(selector);await page.innerText(selector, options);
```

**Arguments**

-   `selector` [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type "string")[#](#page-inner-text-option-selector)
    
    A selector to search for an element. If there are multiple elements satisfying the selector, the first will be used.
    
-   `options` [Object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object "Object") _(optional)_
    
    -   `strict` [boolean](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Boolean_type "Boolean") _(optional)_ Added in: v1.14[#](#page-inner-text-option-strict)
        
        When true, the call requires selector to resolve to a single element. If given selector resolves to more than one element, the call throws an exception.
        
    -   `timeout` [number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type "Number") _(optional)_[#](#page-inner-text-option-timeout)
        
        Maximum time in milliseconds. Defaults to `0` - no timeout. The default value can be changed via `actionTimeout` option in the config, or by using the [browserContext.setDefaultTimeout()](/docs/api/class-browsercontext#browser-context-set-default-timeout) or [page.setDefaultTimeout()](/docs/api/class-page#page-set-default-timeout) methods.
        

**Returns**

-   [Promise](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise "Promise")<[string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type "string")\>[#](#page-inner-text-return)

* * *

### inputValue[​](#page-input-value "Direct link to inputValue")

Added in: v1.13 page.inputValue

Discouraged

Use locator-based [locator.inputValue()](/docs/api/class-locator#locator-input-value) instead. Read more about [locators](/docs/locators).

Returns `input.value` for the selected `<input>` or `<textarea>` or `<select>` element.

Throws for non-input elements. However, if the element is inside the `<label>` element that has an associated [control](https://developer.mozilla.org/en-US/docs/Web/API/HTMLLabelElement/control), returns the value of the control.

**Usage**

```
await page.inputValue(selector);await page.inputValue(selector, options);
```

**Arguments**

-   `selector` [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type "string")[#](#page-input-value-option-selector)
    
    A selector to search for an element. If there are multiple elements satisfying the selector, the first will be used.
    
-   `options` [Object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object "Object") _(optional)_
    
    -   `strict` [boolean](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Boolean_type "Boolean") _(optional)_ Added in: v1.14[#](#page-input-value-option-strict)
        
        When true, the call requires selector to resolve to a single element. If given selector resolves to more than one element, the call throws an exception.
        
    -   `timeout` [number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type "Number") _(optional)_[#](#page-input-value-option-timeout)
        
        Maximum time in milliseconds. Defaults to `0` - no timeout. The default value can be changed via `actionTimeout` option in the config, or by using the [browserContext.setDefaultTimeout()](/docs/api/class-browsercontext#browser-context-set-default-timeout) or [page.setDefaultTimeout()](/docs/api/class-page#page-set-default-timeout) methods.
        

**Returns**

-   [Promise](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise "Promise")<[string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type "string")\>[#](#page-input-value-return)

* * *

### isChecked[​](#page-is-checked "Direct link to isChecked")

Added before v1.9 page.isChecked

Discouraged

Use locator-based [locator.isChecked()](/docs/api/class-locator#locator-is-checked) instead. Read more about [locators](/docs/locators).

Returns whether the element is checked. Throws if the element is not a checkbox or radio input.

**Usage**

```
await page.isChecked(selector);await page.isChecked(selector, options);
```

**Arguments**

-   `selector` [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type "string")[#](#page-is-checked-option-selector)
    
    A selector to search for an element. If there are multiple elements satisfying the selector, the first will be used.
    
-   `options` [Object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object "Object") _(optional)_
    
    -   `strict` [boolean](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Boolean_type "Boolean") _(optional)_ Added in: v1.14[#](#page-is-checked-option-strict)
        
        When true, the call requires selector to resolve to a single element. If given selector resolves to more than one element, the call throws an exception.
        
    -   `timeout` [number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type "Number") _(optional)_[#](#page-is-checked-option-timeout)
        
        Maximum time in milliseconds. Defaults to `0` - no timeout. The default value can be changed via `actionTimeout` option in the config, or by using the [browserContext.setDefaultTimeout()](/docs/api/class-browsercontext#browser-context-set-default-timeout) or [page.setDefaultTimeout()](/docs/api/class-page#page-set-default-timeout) methods.
        

**Returns**

-   [Promise](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise "Promise")<[boolean](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Boolean_type "Boolean")\>[#](#page-is-checked-return)

* * *

### isDisabled[​](#page-is-disabled "Direct link to isDisabled")

Added before v1.9 page.isDisabled

Discouraged

Use locator-based [locator.isDisabled()](/docs/api/class-locator#locator-is-disabled) instead. Read more about [locators](/docs/locators).

Returns whether the element is disabled, the opposite of [enabled](/docs/actionability#enabled).

**Usage**

```
await page.isDisabled(selector);await page.isDisabled(selector, options);
```

**Arguments**

-   `selector` [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type "string")[#](#page-is-disabled-option-selector)
    
    A selector to search for an element. If there are multiple elements satisfying the selector, the first will be used.
    
-   `options` [Object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object "Object") _(optional)_
    
    -   `strict` [boolean](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Boolean_type "Boolean") _(optional)_ Added in: v1.14[#](#page-is-disabled-option-strict)
        
        When true, the call requires selector to resolve to a single element. If given selector resolves to more than one element, the call throws an exception.
        
    -   `timeout` [number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type "Number") _(optional)_[#](#page-is-disabled-option-timeout)
        
        Maximum time in milliseconds. Defaults to `0` - no timeout. The default value can be changed via `actionTimeout` option in the config, or by using the [browserContext.setDefaultTimeout()](/docs/api/class-browsercontext#browser-context-set-default-timeout) or [page.setDefaultTimeout()](/docs/api/class-page#page-set-default-timeout) methods.
        

**Returns**

-   [Promise](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise "Promise")<[boolean](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Boolean_type "Boolean")\>[#](#page-is-disabled-return)

* * *

### isEditable[​](#page-is-editable "Direct link to isEditable")

Added before v1.9 page.isEditable

Discouraged

Use locator-based [locator.isEditable()](/docs/api/class-locator#locator-is-editable) instead. Read more about [locators](/docs/locators).

Returns whether the element is [editable](/docs/actionability#editable).

**Usage**

```
await page.isEditable(selector);await page.isEditable(selector, options);
```

**Arguments**

-   `selector` [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type "string")[#](#page-is-editable-option-selector)
    
    A selector to search for an element. If there are multiple elements satisfying the selector, the first will be used.
    
-   `options` [Object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object "Object") _(optional)_
    
    -   `strict` [boolean](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Boolean_type "Boolean") _(optional)_ Added in: v1.14[#](#page-is-editable-option-strict)
        
        When true, the call requires selector to resolve to a single element. If given selector resolves to more than one element, the call throws an exception.
        
    -   `timeout` [number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type "Number") _(optional)_[#](#page-is-editable-option-timeout)
        
        Maximum time in milliseconds. Defaults to `0` - no timeout. The default value can be changed via `actionTimeout` option in the config, or by using the [browserContext.setDefaultTimeout()](/docs/api/class-browsercontext#browser-context-set-default-timeout) or [page.setDefaultTimeout()](/docs/api/class-page#page-set-default-timeout) methods.
        

**Returns**

-   [Promise](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise "Promise")<[boolean](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Boolean_type "Boolean")\>[#](#page-is-editable-return)

* * *

### isEnabled[​](#page-is-enabled "Direct link to isEnabled")

Added before v1.9 page.isEnabled

Discouraged

Use locator-based [locator.isEnabled()](/docs/api/class-locator#locator-is-enabled) instead. Read more about [locators](/docs/locators).

Returns whether the element is [enabled](/docs/actionability#enabled).

**Usage**

```
await page.isEnabled(selector);await page.isEnabled(selector, options);
```

**Arguments**

-   `selector` [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type "string")[#](#page-is-enabled-option-selector)
    
    A selector to search for an element. If there are multiple elements satisfying the selector, the first will be used.
    
-   `options` [Object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object "Object") _(optional)_
    
    -   `strict` [boolean](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Boolean_type "Boolean") _(optional)_ Added in: v1.14[#](#page-is-enabled-option-strict)
        
        When true, the call requires selector to resolve to a single element. If given selector resolves to more than one element, the call throws an exception.
        
    -   `timeout` [number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type "Number") _(optional)_[#](#page-is-enabled-option-timeout)
        
        Maximum time in milliseconds. Defaults to `0` - no timeout. The default value can be changed via `actionTimeout` option in the config, or by using the [browserContext.setDefaultTimeout()](/docs/api/class-browsercontext#browser-context-set-default-timeout) or [page.setDefaultTimeout()](/docs/api/class-page#page-set-default-timeout) methods.
        

**Returns**

-   [Promise](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise "Promise")<[boolean](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Boolean_type "Boolean")\>[#](#page-is-enabled-return)

* * *

### isHidden[​](#page-is-hidden "Direct link to isHidden")

Added before v1.9 page.isHidden

Discouraged

Use locator-based [locator.isHidden()](/docs/api/class-locator#locator-is-hidden) instead. Read more about [locators](/docs/locators).

Returns whether the element is hidden, the opposite of [visible](/docs/actionability#visible). [selector](/docs/api/class-page#page-is-hidden-option-selector) that does not match any elements is considered hidden.

**Usage**

```
await page.isHidden(selector);await page.isHidden(selector, options);
```

**Arguments**

-   `selector` [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type "string")[#](#page-is-hidden-option-selector)
    
    A selector to search for an element. If there are multiple elements satisfying the selector, the first will be used.
    
-   `options` [Object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object "Object") _(optional)_
    
    -   `strict` [boolean](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Boolean_type "Boolean") _(optional)_ Added in: v1.14[#](#page-is-hidden-option-strict)
        
        When true, the call requires selector to resolve to a single element. If given selector resolves to more than one element, the call throws an exception.
        
    -   `timeout` [number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type "Number") _(optional)_[#](#page-is-hidden-option-timeout)
        
        Deprecated
        
        This option is ignored. [page.isHidden()](/docs/api/class-page#page-is-hidden) does not wait for the element to become hidden and returns immediately.
        

**Returns**

-   [Promise](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise "Promise")<[boolean](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Boolean_type "Boolean")\>[#](#page-is-hidden-return)

* * *

### isVisible[​](#page-is-visible "Direct link to isVisible")

Added before v1.9 page.isVisible

Discouraged

Use locator-based [locator.isVisible()](/docs/api/class-locator#locator-is-visible) instead. Read more about [locators](/docs/locators).

Returns whether the element is [visible](/docs/actionability#visible). [selector](/docs/api/class-page#page-is-visible-option-selector) that does not match any elements is considered not visible.

**Usage**

```
await page.isVisible(selector);await page.isVisible(selector, options);
```

**Arguments**

-   `selector` [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type "string")[#](#page-is-visible-option-selector)
    
    A selector to search for an element. If there are multiple elements satisfying the selector, the first will be used.
    
-   `options` [Object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object "Object") _(optional)_
    
    -   `strict` [boolean](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Boolean_type "Boolean") _(optional)_ Added in: v1.14[#](#page-is-visible-option-strict)
        
        When true, the call requires selector to resolve to a single element. If given selector resolves to more than one element, the call throws an exception.
        
    -   `timeout` [number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type "Number") _(optional)_[#](#page-is-visible-option-timeout)
        
        Deprecated
        
        This option is ignored. [page.isVisible()](/docs/api/class-page#page-is-visible) does not wait for the element to become visible and returns immediately.
        

**Returns**

-   [Promise](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise "Promise")<[boolean](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Boolean_type "Boolean")\>[#](#page-is-visible-return)

* * *

### press[​](#page-press "Direct link to press")

Added before v1.9 page.press

Discouraged

Use locator-based [locator.press()](/docs/api/class-locator#locator-press) instead. Read more about [locators](/docs/locators).

Focuses the element, and then uses [keyboard.down()](/docs/api/class-keyboard#keyboard-down) and [keyboard.up()](/docs/api/class-keyboard#keyboard-up).

[key](/docs/api/class-page#page-press-option-key) can specify the intended [keyboardEvent.key](https://developer.mozilla.org/en-US/docs/Web/API/KeyboardEvent/key) value or a single character to generate the text for. A superset of the [key](/docs/api/class-page#page-press-option-key) values can be found [here](https://developer.mozilla.org/en-US/docs/Web/API/KeyboardEvent/key/Key_Values). Examples of the keys are:

`F1` - `F12`, `Digit0`\- `Digit9`, `KeyA`\- `KeyZ`, `Backquote`, `Minus`, `Equal`, `Backslash`, `Backspace`, `Tab`, `Delete`, `Escape`, `ArrowDown`, `End`, `Enter`, `Home`, `Insert`, `PageDown`, `PageUp`, `ArrowRight`, `ArrowUp`, etc.

Following modification shortcuts are also supported: `Shift`, `Control`, `Alt`, `Meta`, `ShiftLeft`, `ControlOrMeta`. `ControlOrMeta` resolves to `Control` on Windows and Linux and to `Meta` on macOS.

Holding down `Shift` will type the text that corresponds to the [key](/docs/api/class-page#page-press-option-key) in the upper case.

If [key](/docs/api/class-page#page-press-option-key) is a single character, it is case-sensitive, so the values `a` and `A` will generate different respective texts.

Shortcuts such as `key: "Control+o"`, `key: "Control++` or `key: "Control+Shift+T"` are supported as well. When specified with the modifier, modifier is pressed and being held while the subsequent key is being pressed.

**Usage**

```
const page = await browser.newPage();await page.goto('https://keycode.info');await page.press('body', 'A');await page.screenshot({ path: 'A.png' });await page.press('body', 'ArrowLeft');await page.screenshot({ path: 'ArrowLeft.png' });await page.press('body', 'Shift+O');await page.screenshot({ path: 'O.png' });await browser.close();
```

**Arguments**

-   `selector` [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type "string")[#](#page-press-option-selector)
    
    A selector to search for an element. If there are multiple elements satisfying the selector, the first will be used.
    
-   `key` [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type "string")[#](#page-press-option-key)
    
    Name of the key to press or a character to generate, such as `ArrowLeft` or `a`.
    
-   `options` [Object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object "Object") _(optional)_
    
    -   `delay` [number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type "Number") _(optional)_[#](#page-press-option-delay)
        
        Time to wait between `keydown` and `keyup` in milliseconds. Defaults to 0.
        
    -   `noWaitAfter` [boolean](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Boolean_type "Boolean") _(optional)_[#](#page-press-option-no-wait-after)
        
        Deprecated
        
        This option will default to `true` in the future.
        
        Actions that initiate navigations are waiting for these navigations to happen and for pages to start loading. You can opt out of waiting via setting this flag. You would only need this option in the exceptional cases such as navigating to inaccessible pages. Defaults to `false`.
        
    -   `strict` [boolean](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Boolean_type "Boolean") _(optional)_ Added in: v1.14[#](#page-press-option-strict)
        
        When true, the call requires selector to resolve to a single element. If given selector resolves to more than one element, the call throws an exception.
        
    -   `timeout` [number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type "Number") _(optional)_[#](#page-press-option-timeout)
        
        Maximum time in milliseconds. Defaults to `0` - no timeout. The default value can be changed via `actionTimeout` option in the config, or by using the [browserContext.setDefaultTimeout()](/docs/api/class-browsercontext#browser-context-set-default-timeout) or [page.setDefaultTimeout()](/docs/api/class-page#page-set-default-timeout) methods.
        

**Returns**

-   [Promise](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise "Promise")<[void](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/undefined "void")\>[#](#page-press-return)

* * *

### selectOption[​](#page-select-option "Direct link to selectOption")

Added before v1.9 page.selectOption

Discouraged

Use locator-based [locator.selectOption()](/docs/api/class-locator#locator-select-option) instead. Read more about [locators](/docs/locators).

This method waits for an element matching [selector](/docs/api/class-page#page-select-option-option-selector), waits for [actionability](/docs/actionability) checks, waits until all specified options are present in the `<select>` element and selects these options.

If the target element is not a `<select>` element, this method throws an error. However, if the element is inside the `<label>` element that has an associated [control](https://developer.mozilla.org/en-US/docs/Web/API/HTMLLabelElement/control), the control will be used instead.

Returns the array of option values that have been successfully selected.

Triggers a `change` and `input` event once all the provided options have been selected.

**Usage**

```
// Single selection matching the value or labelpage.selectOption('select#colors', 'blue');// single selection matching the labelpage.selectOption('select#colors', { label: 'Blue' });// multiple selectionpage.selectOption('select#colors', ['red', 'green', 'blue']);
```

**Arguments**

-   `selector` [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type "string")[#](#page-select-option-option-selector)
    
    A selector to search for an element. If there are multiple elements satisfying the selector, the first will be used.
    
-   `values` [null](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/null "null") | [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type "string") | [ElementHandle](/docs/api/class-elementhandle "ElementHandle") | [Array](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array "Array")<[string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type "string")\> | [Object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object "Object") | [Array](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array "Array")<[ElementHandle](/docs/api/class-elementhandle "ElementHandle")\> | [Array](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array "Array")<[Object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object "Object")\>[#](#page-select-option-option-values)
    
    -   `value` [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type "string") _(optional)_
        
        Matches by `option.value`. Optional.
        
    -   `label` [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type "string") _(optional)_
        
        Matches by `option.label`. Optional.
        
    -   `index` [number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type "Number") _(optional)_
        
        Matches by the index. Optional.
        
    
    Options to select. If the `<select>` has the `multiple` attribute, all matching options are selected, otherwise only the first option matching one of the passed options is selected. String values are matching both values and labels. Option is considered matching if all specified properties match.
    
-   `options` [Object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object "Object") _(optional)_
    
    -   `force` [boolean](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Boolean_type "Boolean") _(optional)_ Added in: v1.13[#](#page-select-option-option-force)
        
        Whether to bypass the [actionability](/docs/actionability) checks. Defaults to `false`.
        
    -   `noWaitAfter` [boolean](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Boolean_type "Boolean") _(optional)_[#](#page-select-option-option-no-wait-after)
        
        Deprecated
        
        This option has no effect.
        
        This option has no effect.
        
    -   `strict` [boolean](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Boolean_type "Boolean") _(optional)_ Added in: v1.14[#](#page-select-option-option-strict)
        
        When true, the call requires selector to resolve to a single element. If given selector resolves to more than one element, the call throws an exception.
        
    -   `timeout` [number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type "Number") _(optional)_[#](#page-select-option-option-timeout)
        
        Maximum time in milliseconds. Defaults to `0` - no timeout. The default value can be changed via `actionTimeout` option in the config, or by using the [browserContext.setDefaultTimeout()](/docs/api/class-browsercontext#browser-context-set-default-timeout) or [page.setDefaultTimeout()](/docs/api/class-page#page-set-default-timeout) methods.
        

**Returns**

-   [Promise](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise "Promise")<[Array](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array "Array")<[string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type "string")\>>[#](#page-select-option-return)

* * *

### setChecked[​](#page-set-checked "Direct link to setChecked")

Added in: v1.15 page.setChecked

Discouraged

Use locator-based [locator.setChecked()](/docs/api/class-locator#locator-set-checked) instead. Read more about [locators](/docs/locators).

This method checks or unchecks an element matching [selector](/docs/api/class-page#page-set-checked-option-selector) by performing the following steps:

1.  Find an element matching [selector](/docs/api/class-page#page-set-checked-option-selector). If there is none, wait until a matching element is attached to the DOM.
2.  Ensure that matched element is a checkbox or a radio input. If not, this method throws.
3.  If the element already has the right checked state, this method returns immediately.
4.  Wait for [actionability](/docs/actionability) checks on the matched element, unless [force](/docs/api/class-page#page-set-checked-option-force) option is set. If the element is detached during the checks, the whole action is retried.
5.  Scroll the element into view if needed.
6.  Use [page.mouse](/docs/api/class-page#page-mouse) to click in the center of the element.
7.  Ensure that the element is now checked or unchecked. If not, this method throws.

When all steps combined have not finished during the specified [timeout](/docs/api/class-page#page-set-checked-option-timeout), this method throws a [TimeoutError](/docs/api/class-timeouterror "TimeoutError"). Passing zero timeout disables this.

**Usage**

```
await page.setChecked(selector, checked);await page.setChecked(selector, checked, options);
```

**Arguments**

-   `selector` [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type "string")[#](#page-set-checked-option-selector)
    
    A selector to search for an element. If there are multiple elements satisfying the selector, the first will be used.
    
-   `checked` [boolean](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Boolean_type "Boolean")[#](#page-set-checked-option-checked)
    
    Whether to check or uncheck the checkbox.
    
-   `options` [Object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object "Object") _(optional)_
    
    -   `force` [boolean](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Boolean_type "Boolean") _(optional)_[#](#page-set-checked-option-force)
        
        Whether to bypass the [actionability](/docs/actionability) checks. Defaults to `false`.
        
    -   `noWaitAfter` [boolean](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Boolean_type "Boolean") _(optional)_[#](#page-set-checked-option-no-wait-after)
        
        Deprecated
        
        This option has no effect.
        
        This option has no effect.
        
    -   `position` [Object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object "Object") _(optional)_[#](#page-set-checked-option-position)
        
        -   `x` [number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type "Number")
            
        -   `y` [number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type "Number")
            
        
        A point to use relative to the top-left corner of element padding box. If not specified, uses some visible point of the element.
        
    -   `strict` [boolean](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Boolean_type "Boolean") _(optional)_[#](#page-set-checked-option-strict)
        
        When true, the call requires selector to resolve to a single element. If given selector resolves to more than one element, the call throws an exception.
        
    -   `timeout` [number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type "Number") _(optional)_[#](#page-set-checked-option-timeout)
        
        Maximum time in milliseconds. Defaults to `0` - no timeout. The default value can be changed via `actionTimeout` option in the config, or by using the [browserContext.setDefaultTimeout()](/docs/api/class-browsercontext#browser-context-set-default-timeout) or [page.setDefaultTimeout()](/docs/api/class-page#page-set-default-timeout) methods.
        
    -   `trial` [boolean](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Boolean_type "Boolean") _(optional)_[#](#page-set-checked-option-trial)
        
        When set, this method only performs the [actionability](/docs/actionability) checks and skips the action. Defaults to `false`. Useful to wait until the element is ready for the action without performing it.
        

**Returns**

-   [Promise](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise "Promise")<[void](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/undefined "void")\>[#](#page-set-checked-return)

* * *

### setInputFiles[​](#page-set-input-files "Direct link to setInputFiles")

Added before v1.9 page.setInputFiles

Discouraged

Use locator-based [locator.setInputFiles()](/docs/api/class-locator#locator-set-input-files) instead. Read more about [locators](/docs/locators).

Sets the value of the file input to these file paths or files. If some of the `filePaths` are relative paths, then they are resolved relative to the current working directory. For empty array, clears the selected files. For inputs with a `[webkitdirectory]` attribute, only a single directory path is supported.

This method expects [selector](/docs/api/class-page#page-set-input-files-option-selector) to point to an [input element](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input). However, if the element is inside the `<label>` element that has an associated [control](https://developer.mozilla.org/en-US/docs/Web/API/HTMLLabelElement/control), targets the control instead.

**Usage**

```
await page.setInputFiles(selector, files);await page.setInputFiles(selector, files, options);
```

**Arguments**

-   `selector` [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type "string")[#](#page-set-input-files-option-selector)
    
    A selector to search for an element. If there are multiple elements satisfying the selector, the first will be used.
    
-   `files` [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type "string") | [Array](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array "Array")<[string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type "string")\> | [Object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object "Object") | [Array](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array "Array")<[Object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object "Object")\>[#](#page-set-input-files-option-files)
    
    -   `name` [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type "string")
        
        File name
        
    -   `mimeType` [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type "string")
        
        File type
        
    -   `buffer` [Buffer](https://nodejs.org/api/buffer.html#buffer_class_buffer "Buffer")
        
        File content
        
-   `options` [Object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object "Object") _(optional)_
    
    -   `noWaitAfter` [boolean](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Boolean_type "Boolean") _(optional)_[#](#page-set-input-files-option-no-wait-after)
        
        Deprecated
        
        This option has no effect.
        
        This option has no effect.
        
    -   `strict` [boolean](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Boolean_type "Boolean") _(optional)_ Added in: v1.14[#](#page-set-input-files-option-strict)
        
        When true, the call requires selector to resolve to a single element. If given selector resolves to more than one element, the call throws an exception.
        
    -   `timeout` [number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type "Number") _(optional)_[#](#page-set-input-files-option-timeout)
        
        Maximum time in milliseconds. Defaults to `0` - no timeout. The default value can be changed via `actionTimeout` option in the config, or by using the [browserContext.setDefaultTimeout()](/docs/api/class-browsercontext#browser-context-set-default-timeout) or [page.setDefaultTimeout()](/docs/api/class-page#page-set-default-timeout) methods.
        

**Returns**

-   [Promise](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise "Promise")<[void](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/undefined "void")\>[#](#page-set-input-files-return)

* * *

### tap[​](#page-tap "Direct link to tap")

Added before v1.9 page.tap

Discouraged

Use locator-based [locator.tap()](/docs/api/class-locator#locator-tap) instead. Read more about [locators](/docs/locators).

This method taps an element matching [selector](/docs/api/class-page#page-tap-option-selector) by performing the following steps:

1.  Find an element matching [selector](/docs/api/class-page#page-tap-option-selector). If there is none, wait until a matching element is attached to the DOM.
2.  Wait for [actionability](/docs/actionability) checks on the matched element, unless [force](/docs/api/class-page#page-tap-option-force) option is set. If the element is detached during the checks, the whole action is retried.
3.  Scroll the element into view if needed.
4.  Use [page.touchscreen](/docs/api/class-page#page-touchscreen) to tap the center of the element, or the specified [position](/docs/api/class-page#page-tap-option-position).

When all steps combined have not finished during the specified [timeout](/docs/api/class-page#page-tap-option-timeout), this method throws a [TimeoutError](/docs/api/class-timeouterror "TimeoutError"). Passing zero timeout disables this.

note

[page.tap()](/docs/api/class-page#page-tap) the method will throw if [hasTouch](/docs/api/class-browser#browser-new-context-option-has-touch) option of the browser context is false.

**Usage**

```
await page.tap(selector);await page.tap(selector, options);
```

**Arguments**

-   `selector` [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type "string")[#](#page-tap-option-selector)
    
    A selector to search for an element. If there are multiple elements satisfying the selector, the first will be used.
    
-   `options` [Object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object "Object") _(optional)_
    
    -   `force` [boolean](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Boolean_type "Boolean") _(optional)_[#](#page-tap-option-force)
        
        Whether to bypass the [actionability](/docs/actionability) checks. Defaults to `false`.
        
    -   `modifiers` [Array](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array "Array")<"Alt" | "Control" | "ControlOrMeta" | "Meta" | "Shift"> _(optional)_[#](#page-tap-option-modifiers)
        
        Modifier keys to press. Ensures that only these modifiers are pressed during the operation, and then restores current modifiers back. If not specified, currently pressed modifiers are used. "ControlOrMeta" resolves to "Control" on Windows and Linux and to "Meta" on macOS.
        
    -   `noWaitAfter` [boolean](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Boolean_type "Boolean") _(optional)_[#](#page-tap-option-no-wait-after)
        
        Deprecated
        
        This option has no effect.
        
        This option has no effect.
        
    -   `position` [Object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object "Object") _(optional)_[#](#page-tap-option-position)
        
        -   `x` [number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type "Number")
            
        -   `y` [number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type "Number")
            
        
        A point to use relative to the top-left corner of element padding box. If not specified, uses some visible point of the element.
        
    -   `strict` [boolean](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Boolean_type "Boolean") _(optional)_ Added in: v1.14[#](#page-tap-option-strict)
        
        When true, the call requires selector to resolve to a single element. If given selector resolves to more than one element, the call throws an exception.
        
    -   `timeout` [number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type "Number") _(optional)_[#](#page-tap-option-timeout)
        
        Maximum time in milliseconds. Defaults to `0` - no timeout. The default value can be changed via `actionTimeout` option in the config, or by using the [browserContext.setDefaultTimeout()](/docs/api/class-browsercontext#browser-context-set-default-timeout) or [page.setDefaultTimeout()](/docs/api/class-page#page-set-default-timeout) methods.
        
    -   `trial` [boolean](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Boolean_type "Boolean") _(optional)_ Added in: v1.11[#](#page-tap-option-trial)
        
        When set, this method only performs the [actionability](/docs/actionability) checks and skips the action. Defaults to `false`. Useful to wait until the element is ready for the action without performing it. Note that keyboard `modifiers` will be pressed regardless of `trial` to allow testing elements which are only visible when those keys are pressed.
        

**Returns**

-   [Promise](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise "Promise")<[void](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/undefined "void")\>[#](#page-tap-return)

* * *

### textContent[​](#page-text-content "Direct link to textContent")

Added before v1.9 page.textContent

Discouraged

Use locator-based [locator.textContent()](/docs/api/class-locator#locator-text-content) instead. Read more about [locators](/docs/locators).

Returns `element.textContent`.

**Usage**

```
await page.textContent(selector);await page.textContent(selector, options);
```

**Arguments**

-   `selector` [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type "string")[#](#page-text-content-option-selector)
    
    A selector to search for an element. If there are multiple elements satisfying the selector, the first will be used.
    
-   `options` [Object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object "Object") _(optional)_
    
    -   `strict` [boolean](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Boolean_type "Boolean") _(optional)_ Added in: v1.14[#](#page-text-content-option-strict)
        
        When true, the call requires selector to resolve to a single element. If given selector resolves to more than one element, the call throws an exception.
        
    -   `timeout` [number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type "Number") _(optional)_[#](#page-text-content-option-timeout)
        
        Maximum time in milliseconds. Defaults to `0` - no timeout. The default value can be changed via `actionTimeout` option in the config, or by using the [browserContext.setDefaultTimeout()](/docs/api/class-browsercontext#browser-context-set-default-timeout) or [page.setDefaultTimeout()](/docs/api/class-page#page-set-default-timeout) methods.
        

**Returns**

-   [Promise](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise "Promise")<[null](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/null "null") | [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type "string")\>[#](#page-text-content-return)

* * *

### type[​](#page-type "Direct link to type")

Added before v1.9 page.type

Deprecated

In most cases, you should use [locator.fill()](/docs/api/class-locator#locator-fill) instead. You only need to press keys one by one if there is special keyboard handling on the page - in this case use [locator.pressSequentially()](/docs/api/class-locator#locator-press-sequentially).

Sends a `keydown`, `keypress`/`input`, and `keyup` event for each character in the text. `page.type` can be used to send fine-grained keyboard events. To fill values in form fields, use [page.fill()](/docs/api/class-page#page-fill).

To press a special key, like `Control` or `ArrowDown`, use [keyboard.press()](/docs/api/class-keyboard#keyboard-press).

**Usage**

**Arguments**

-   `selector` [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type "string")[#](#page-type-option-selector)
    
    A selector to search for an element. If there are multiple elements satisfying the selector, the first will be used.
    
-   `text` [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type "string")[#](#page-type-option-text)
    
    A text to type into a focused element.
    
-   `options` [Object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object "Object") _(optional)_
    
    -   `delay` [number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type "Number") _(optional)_[#](#page-type-option-delay)
        
        Time to wait between key presses in milliseconds. Defaults to 0.
        
    -   `noWaitAfter` [boolean](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Boolean_type "Boolean") _(optional)_[#](#page-type-option-no-wait-after)
        
        Deprecated
        
        This option has no effect.
        
        This option has no effect.
        
    -   `strict` [boolean](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Boolean_type "Boolean") _(optional)_ Added in: v1.14[#](#page-type-option-strict)
        
        When true, the call requires selector to resolve to a single element. If given selector resolves to more than one element, the call throws an exception.
        
    -   `timeout` [number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type "Number") _(optional)_[#](#page-type-option-timeout)
        
        Maximum time in milliseconds. Defaults to `0` - no timeout. The default value can be changed via `actionTimeout` option in the config, or by using the [browserContext.setDefaultTimeout()](/docs/api/class-browsercontext#browser-context-set-default-timeout) or [page.setDefaultTimeout()](/docs/api/class-page#page-set-default-timeout) methods.
        

**Returns**

-   [Promise](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise "Promise")<[void](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/undefined "void")\>[#](#page-type-return)

* * *

### uncheck[​](#page-uncheck "Direct link to uncheck")

Added before v1.9 page.uncheck

Discouraged

Use locator-based [locator.uncheck()](/docs/api/class-locator#locator-uncheck) instead. Read more about [locators](/docs/locators).

This method unchecks an element matching [selector](/docs/api/class-page#page-uncheck-option-selector) by performing the following steps:

1.  Find an element matching [selector](/docs/api/class-page#page-uncheck-option-selector). If there is none, wait until a matching element is attached to the DOM.
2.  Ensure that matched element is a checkbox or a radio input. If not, this method throws. If the element is already unchecked, this method returns immediately.
3.  Wait for [actionability](/docs/actionability) checks on the matched element, unless [force](/docs/api/class-page#page-uncheck-option-force) option is set. If the element is detached during the checks, the whole action is retried.
4.  Scroll the element into view if needed.
5.  Use [page.mouse](/docs/api/class-page#page-mouse) to click in the center of the element.
6.  Ensure that the element is now unchecked. If not, this method throws.

When all steps combined have not finished during the specified [timeout](/docs/api/class-page#page-uncheck-option-timeout), this method throws a [TimeoutError](/docs/api/class-timeouterror "TimeoutError"). Passing zero timeout disables this.

**Usage**

```
await page.uncheck(selector);await page.uncheck(selector, options);
```

**Arguments**

-   `selector` [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type "string")[#](#page-uncheck-option-selector)
    
    A selector to search for an element. If there are multiple elements satisfying the selector, the first will be used.
    
-   `options` [Object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object "Object") _(optional)_
    
    -   `force` [boolean](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Boolean_type "Boolean") _(optional)_[#](#page-uncheck-option-force)
        
        Whether to bypass the [actionability](/docs/actionability) checks. Defaults to `false`.
        
    -   `noWaitAfter` [boolean](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Boolean_type "Boolean") _(optional)_[#](#page-uncheck-option-no-wait-after)
        
        Deprecated
        
        This option has no effect.
        
        This option has no effect.
        
    -   `position` [Object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object "Object") _(optional)_ Added in: v1.11[#](#page-uncheck-option-position)
        
        -   `x` [number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type "Number")
            
        -   `y` [number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type "Number")
            
        
        A point to use relative to the top-left corner of element padding box. If not specified, uses some visible point of the element.
        
    -   `strict` [boolean](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Boolean_type "Boolean") _(optional)_ Added in: v1.14[#](#page-uncheck-option-strict)
        
        When true, the call requires selector to resolve to a single element. If given selector resolves to more than one element, the call throws an exception.
        
    -   `timeout` [number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type "Number") _(optional)_[#](#page-uncheck-option-timeout)
        
        Maximum time in milliseconds. Defaults to `0` - no timeout. The default value can be changed via `actionTimeout` option in the config, or by using the [browserContext.setDefaultTimeout()](/docs/api/class-browsercontext#browser-context-set-default-timeout) or [page.setDefaultTimeout()](/docs/api/class-page#page-set-default-timeout) methods.
        
    -   `trial` [boolean](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Boolean_type "Boolean") _(optional)_ Added in: v1.11[#](#page-uncheck-option-trial)
        
        When set, this method only performs the [actionability](/docs/actionability) checks and skips the action. Defaults to `false`. Useful to wait until the element is ready for the action without performing it.
        

**Returns**

-   [Promise](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise "Promise")<[void](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/undefined "void")\>[#](#page-uncheck-return)

* * *

### waitForNavigation[​](#page-wait-for-navigation "Direct link to waitForNavigation")

Added before v1.9 page.waitForNavigation

Deprecated

This method is inherently racy, please use [page.waitForURL()](/docs/api/class-page#page-wait-for-url) instead.

Waits for the main frame navigation and returns the main resource response. In case of multiple redirects, the navigation will resolve with the response of the last redirect. In case of navigation to a different anchor or navigation due to History API usage, the navigation will resolve with `null`.

**Usage**

This resolves when the page navigates to a new URL or reloads. It is useful for when you run code which will indirectly cause the page to navigate. e.g. The click target has an `onclick` handler that triggers navigation from a `setTimeout`. Consider this example:

```
// Start waiting for navigation before clicking. Note no await.const navigationPromise = page.waitForNavigation();await page.getByText('Navigate after timeout').click();await navigationPromise;
```

note

Usage of the [History API](https://developer.mozilla.org/en-US/docs/Web/API/History_API) to change the URL is considered a navigation.

**Arguments**

-   `options` [Object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object "Object") _(optional)_
    -   `timeout` [number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type "Number") _(optional)_[#](#page-wait-for-navigation-option-timeout)
        
        Maximum operation time in milliseconds. Defaults to `0` - no timeout. The default value can be changed via `navigationTimeout` option in the config, or by using the [browserContext.setDefaultNavigationTimeout()](/docs/api/class-browsercontext#browser-context-set-default-navigation-timeout), [browserContext.setDefaultTimeout()](/docs/api/class-browsercontext#browser-context-set-default-timeout), [page.setDefaultNavigationTimeout()](/docs/api/class-page#page-set-default-navigation-timeout) or [page.setDefaultTimeout()](/docs/api/class-page#page-set-default-timeout) methods.
        
    -   `url` [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type "string") | [RegExp](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp "RegExp") | [function](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function "Function")([URL](https://nodejs.org/api/url.html "URL")):[boolean](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Boolean_type "Boolean") _(optional)_[#](#page-wait-for-navigation-option-url)
        
        A glob pattern, regex pattern or predicate receiving [URL](https://nodejs.org/api/url.html "URL") to match while waiting for the navigation. Note that if the parameter is a string without wildcard characters, the method will wait for navigation to URL that is exactly equal to the string.
        
    -   `waitUntil` "load" | "domcontentloaded" | "networkidle" | "commit" _(optional)_[#](#page-wait-for-navigation-option-wait-until)
        
        When to consider operation succeeded, defaults to `load`. Events can be either:
        
        -   `'domcontentloaded'` - consider operation to be finished when the `DOMContentLoaded` event is fired.
        -   `'load'` - consider operation to be finished when the `load` event is fired.
        -   `'networkidle'` - **DISCOURAGED** consider operation to be finished when there are no network connections for at least `500` ms. Don't use this method for testing, rely on web assertions to assess readiness instead.
        -   `'commit'` - consider operation to be finished when network response is received and the document started loading.

**Returns**

-   [Promise](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise "Promise")<[null](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/null "null") | [Response](/docs/api/class-response "Response")\>[#](#page-wait-for-navigation-return)

* * *

### waitForSelector[​](#page-wait-for-selector "Direct link to waitForSelector")

Added before v1.9 page.waitForSelector

Discouraged

Use web assertions that assert visibility or a locator-based [locator.waitFor()](/docs/api/class-locator#locator-wait-for) instead. Read more about [locators](/docs/locators).

Returns when element specified by selector satisfies [state](/docs/api/class-page#page-wait-for-selector-option-state) option. Returns `null` if waiting for `hidden` or `detached`.

note

Playwright automatically waits for element to be ready before performing an action. Using [Locator](/docs/api/class-locator "Locator") objects and web-first assertions makes the code wait-for-selector-free.

Wait for the [selector](/docs/api/class-page#page-wait-for-selector-option-selector) to satisfy [state](/docs/api/class-page#page-wait-for-selector-option-state) option (either appear/disappear from dom, or become visible/hidden). If at the moment of calling the method [selector](/docs/api/class-page#page-wait-for-selector-option-selector) already satisfies the condition, the method will return immediately. If the selector doesn't satisfy the condition for the [timeout](/docs/api/class-page#page-wait-for-selector-option-timeout) milliseconds, the function will throw.

**Usage**

This method works across navigations:

```
const { chromium } = require('playwright');  // Or 'firefox' or 'webkit'.(async () => {  const browser = await chromium.launch();  const page = await browser.newPage();  for (const currentURL of ['https://google.com', 'https://bbc.com']) {    await page.goto(currentURL);    const element = await page.waitForSelector('img');    console.log('Loaded image: ' + await element.getAttribute('src'));  }  await browser.close();})();
```

**Arguments**

-   `selector` [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type "string")[#](#page-wait-for-selector-option-selector)
    
    A selector to query for.
    
-   `options` [Object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object "Object") _(optional)_
    
    -   `state` "attached" | "detached" | "visible" | "hidden" _(optional)_[#](#page-wait-for-selector-option-state)
        
        Defaults to `'visible'`. Can be either:
        
        -   `'attached'` - wait for element to be present in DOM.
        -   `'detached'` - wait for element to not be present in DOM.
        -   `'visible'` - wait for element to have non-empty bounding box and no `visibility:hidden`. Note that element without any content or with `display:none` has an empty bounding box and is not considered visible.
        -   `'hidden'` - wait for element to be either detached from DOM, or have an empty bounding box or `visibility:hidden`. This is opposite to the `'visible'` option.
    -   `strict` [boolean](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Boolean_type "Boolean") _(optional)_ Added in: v1.14[#](#page-wait-for-selector-option-strict)
        
        When true, the call requires selector to resolve to a single element. If given selector resolves to more than one element, the call throws an exception.
        
    -   `timeout` [number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type "Number") _(optional)_[#](#page-wait-for-selector-option-timeout)
        
        Maximum time in milliseconds. Defaults to `0` - no timeout. The default value can be changed via `actionTimeout` option in the config, or by using the [browserContext.setDefaultTimeout()](/docs/api/class-browsercontext#browser-context-set-default-timeout) or [page.setDefaultTimeout()](/docs/api/class-page#page-set-default-timeout) methods.
        

**Returns**

-   [Promise](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise "Promise")<[null](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/null "null") | [ElementHandle](/docs/api/class-elementhandle "ElementHandle")\>[#](#page-wait-for-selector-return)

* * *

### waitForTimeout[​](#page-wait-for-timeout "Direct link to waitForTimeout")

Added before v1.9 page.waitForTimeout

Discouraged

Never wait for timeout in production. Tests that wait for time are inherently flaky. Use [Locator](/docs/api/class-locator "Locator") actions and web assertions that wait automatically.

Waits for the given [timeout](/docs/api/class-page#page-wait-for-timeout-option-timeout) in milliseconds.

Note that `page.waitForTimeout()` should only be used for debugging. Tests using the timer in production are going to be flaky. Use signals such as network events, selectors becoming visible and others instead.

**Usage**

```
// wait for 1 secondawait page.waitForTimeout(1000);
```

**Arguments**

-   `timeout` [number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type "Number")[#](#page-wait-for-timeout-option-timeout)
    
    A timeout to wait for
    

**Returns**

-   [Promise](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise "Promise")<[void](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/undefined "void")\>[#](#page-wait-for-timeout-return)
