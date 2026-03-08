On this page

Locators are the central piece of Playwright's auto-waiting and retry-ability. In a nutshell, locators represent a way to find element(s) on the page at any moment. A locator can be created with the [page.locator()](/docs/api/class-page#page-locator) method.

[Learn more about locators](/docs/locators).

* * *

## Methods[​](#methods "Direct link to Methods")

### all[​](#locator-all "Direct link to all")

Added in: v1.29 locator.all

When the locator points to a list of elements, this returns an array of locators, pointing to their respective elements.

note

[locator.all()](/docs/api/class-locator#locator-all) does not wait for elements to match the locator, and instead immediately returns whatever is present in the page.

When the list of elements changes dynamically, [locator.all()](/docs/api/class-locator#locator-all) will produce unpredictable and flaky results.

When the list of elements is stable, but loaded dynamically, wait for the full list to finish loading before calling [locator.all()](/docs/api/class-locator#locator-all).

**Usage**

```
for (const li of await page.getByRole('listitem').all())  await li.click();
```

**Returns**

-   [Promise](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise "Promise")<[Array](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array "Array")<[Locator](/docs/api/class-locator "Locator")\>>[#](#locator-all-return)

* * *

### allInnerTexts[​](#locator-all-inner-texts "Direct link to allInnerTexts")

Added in: v1.14 locator.allInnerTexts

Returns an array of `node.innerText` values for all matching nodes.

Asserting text

If you need to assert text on the page, prefer [expect(locator).toHaveText()](/docs/api/class-locatorassertions#locator-assertions-to-have-text) with [useInnerText](/docs/api/class-locatorassertions#locator-assertions-to-have-text-option-use-inner-text) option to avoid flakiness. See [assertions guide](/docs/test-assertions) for more details.

**Usage**

```
const texts = await page.getByRole('link').allInnerTexts();
```

**Returns**

-   [Promise](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise "Promise")<[Array](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array "Array")<[string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type "string")\>>[#](#locator-all-inner-texts-return)

* * *

### allTextContents[​](#locator-all-text-contents "Direct link to allTextContents")

Added in: v1.14 locator.allTextContents

Returns an array of `node.textContent` values for all matching nodes.

Asserting text

If you need to assert text on the page, prefer [expect(locator).toHaveText()](/docs/api/class-locatorassertions#locator-assertions-to-have-text) to avoid flakiness. See [assertions guide](/docs/test-assertions) for more details.

**Usage**

```
const texts = await page.getByRole('link').allTextContents();
```

**Returns**

-   [Promise](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise "Promise")<[Array](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array "Array")<[string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type "string")\>>[#](#locator-all-text-contents-return)

* * *

### and[​](#locator-and "Direct link to and")

Added in: v1.34 locator.and

Creates a locator that matches both this locator and the argument locator.

**Usage**

The following example finds a button with a specific title.

```
const button = page.getByRole('button').and(page.getByTitle('Subscribe'));
```

**Arguments**

-   `locator` [Locator](/docs/api/class-locator "Locator")[#](#locator-and-option-locator)
    
    Additional locator to match.
    

**Returns**

-   [Locator](/docs/api/class-locator "Locator")[#](#locator-and-return)

* * *

### ariaSnapshot[​](#locator-aria-snapshot "Direct link to ariaSnapshot")

Added in: v1.49 locator.ariaSnapshot

Captures the aria snapshot of the given element. Read more about [aria snapshots](/docs/aria-snapshots) and [expect(locator).toMatchAriaSnapshot()](/docs/api/class-locatorassertions#locator-assertions-to-match-aria-snapshot) for the corresponding assertion.

**Usage**

```
await page.getByRole('link').ariaSnapshot();
```

**Arguments**

-   `options` [Object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object "Object") _(optional)_
    -   `timeout` [number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type "Number") _(optional)_[#](#locator-aria-snapshot-option-timeout)
        
        Maximum time in milliseconds. Defaults to `0` - no timeout. The default value can be changed via `actionTimeout` option in the config, or by using the [browserContext.setDefaultTimeout()](/docs/api/class-browsercontext#browser-context-set-default-timeout) or [page.setDefaultTimeout()](/docs/api/class-page#page-set-default-timeout) methods.
        

**Returns**

-   [Promise](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise "Promise")<[string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type "string")\>[#](#locator-aria-snapshot-return)

**Details**

This method captures the aria snapshot of the given element. The snapshot is a string that represents the state of the element and its children. The snapshot can be used to assert the state of the element in the test, or to compare it to state in the future.

The ARIA snapshot is represented using [YAML](https://yaml.org/spec/1.2.2/) markup language:

-   The keys of the objects are the roles and optional accessible names of the elements.
-   The values are either text content or an array of child elements.
-   Generic static text can be represented with the `text` key.

Below is the HTML markup and the respective ARIA snapshot:

```
<ul aria-label="Links">  <li><a href="/">Home</a></li>  <li><a href="/about">About</a></li><ul>
```

```
- list "Links":  - listitem:    - link "Home"  - listitem:    - link "About"
```

* * *

### blur[​](#locator-blur "Direct link to blur")

Added in: v1.28 locator.blur

Calls [blur](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/blur) on the element.

**Usage**

```
await locator.blur();await locator.blur(options);
```

**Arguments**

-   `options` [Object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object "Object") _(optional)_
    -   `timeout` [number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type "Number") _(optional)_[#](#locator-blur-option-timeout)
        
        Maximum time in milliseconds. Defaults to `0` - no timeout. The default value can be changed via `actionTimeout` option in the config, or by using the [browserContext.setDefaultTimeout()](/docs/api/class-browsercontext#browser-context-set-default-timeout) or [page.setDefaultTimeout()](/docs/api/class-page#page-set-default-timeout) methods.
        

**Returns**

-   [Promise](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise "Promise")<[void](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/undefined "void")\>[#](#locator-blur-return)

* * *

### boundingBox[​](#locator-bounding-box "Direct link to boundingBox")

Added in: v1.14 locator.boundingBox

This method returns the bounding box of the element matching the locator, or `null` if the element is not visible. The bounding box is calculated relative to the main frame viewport - which is usually the same as the browser window.

**Usage**

```
const box = await page.getByRole('button').boundingBox();await page.mouse.click(box.x + box.width / 2, box.y + box.height / 2);
```

**Arguments**

-   `options` [Object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object "Object") _(optional)_
    -   `timeout` [number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type "Number") _(optional)_[#](#locator-bounding-box-option-timeout)
        
        Maximum time in milliseconds. Defaults to `0` - no timeout. The default value can be changed via `actionTimeout` option in the config, or by using the [browserContext.setDefaultTimeout()](/docs/api/class-browsercontext#browser-context-set-default-timeout) or [page.setDefaultTimeout()](/docs/api/class-page#page-set-default-timeout) methods.
        

**Returns**

-   [Promise](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise "Promise")<[null](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/null "null") | [Object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object "Object")\>[#](#locator-bounding-box-return)
    -   `x` [number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type "Number")
        
        the x coordinate of the element in pixels.
        
    -   `y` [number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type "Number")
        
        the y coordinate of the element in pixels.
        
    -   `width` [number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type "Number")
        
        the width of the element in pixels.
        
    -   `height` [number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type "Number")
        
        the height of the element in pixels.
        

**Details**

Scrolling affects the returned bounding box, similarly to [Element.getBoundingClientRect](https://developer.mozilla.org/en-US/docs/Web/API/Element/getBoundingClientRect). That means `x` and/or `y` may be negative.

Elements from child frames return the bounding box relative to the main frame, unlike the [Element.getBoundingClientRect](https://developer.mozilla.org/en-US/docs/Web/API/Element/getBoundingClientRect).

Assuming the page is static, it is safe to use bounding box coordinates to perform input. For example, the following snippet should click the center of the element.

* * *

### check[​](#locator-check "Direct link to check")

Added in: v1.14 locator.check

Ensure that checkbox or radio element is checked.

**Usage**

```
await page.getByRole('checkbox').check();
```

**Arguments**

-   `options` [Object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object "Object") _(optional)_
    -   `force` [boolean](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Boolean_type "Boolean") _(optional)_[#](#locator-check-option-force)
        
        Whether to bypass the [actionability](/docs/actionability) checks. Defaults to `false`.
        
    -   `noWaitAfter` [boolean](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Boolean_type "Boolean") _(optional)_[#](#locator-check-option-no-wait-after)
        
        Deprecated
        
        This option has no effect.
        
        This option has no effect.
        
    -   `position` [Object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object "Object") _(optional)_[#](#locator-check-option-position)
        
        -   `x` [number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type "Number")
            
        -   `y` [number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type "Number")
            
        
        A point to use relative to the top-left corner of element padding box. If not specified, uses some visible point of the element.
        
    -   `timeout` [number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type "Number") _(optional)_[#](#locator-check-option-timeout)
        
        Maximum time in milliseconds. Defaults to `0` - no timeout. The default value can be changed via `actionTimeout` option in the config, or by using the [browserContext.setDefaultTimeout()](/docs/api/class-browsercontext#browser-context-set-default-timeout) or [page.setDefaultTimeout()](/docs/api/class-page#page-set-default-timeout) methods.
        
    -   `trial` [boolean](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Boolean_type "Boolean") _(optional)_[#](#locator-check-option-trial)
        
        When set, this method only performs the [actionability](/docs/actionability) checks and skips the action. Defaults to `false`. Useful to wait until the element is ready for the action without performing it.
        

**Returns**

-   [Promise](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise "Promise")<[void](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/undefined "void")\>[#](#locator-check-return)

**Details**

Performs the following steps:

1.  Ensure that element is a checkbox or a radio input. If not, this method throws. If the element is already checked, this method returns immediately.
2.  Wait for [actionability](/docs/actionability) checks on the element, unless [force](/docs/api/class-locator#locator-check-option-force) option is set.
3.  Scroll the element into view if needed.
4.  Use [page.mouse](/docs/api/class-page#page-mouse) to click in the center of the element.
5.  Ensure that the element is now checked. If not, this method throws.

If the element is detached from the DOM at any moment during the action, this method throws.

When all steps combined have not finished during the specified [timeout](/docs/api/class-locator#locator-check-option-timeout), this method throws a [TimeoutError](/docs/api/class-timeouterror "TimeoutError"). Passing zero timeout disables this.

* * *

### clear[​](#locator-clear "Direct link to clear")

Added in: v1.28 locator.clear

Clear the input field.

**Usage**

```
await page.getByRole('textbox').clear();
```

**Arguments**

-   `options` [Object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object "Object") _(optional)_
    -   `force` [boolean](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Boolean_type "Boolean") _(optional)_[#](#locator-clear-option-force)
        
        Whether to bypass the [actionability](/docs/actionability) checks. Defaults to `false`.
        
    -   `noWaitAfter` [boolean](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Boolean_type "Boolean") _(optional)_[#](#locator-clear-option-no-wait-after)
        
        Deprecated
        
        This option has no effect.
        
        This option has no effect.
        
    -   `timeout` [number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type "Number") _(optional)_[#](#locator-clear-option-timeout)
        
        Maximum time in milliseconds. Defaults to `0` - no timeout. The default value can be changed via `actionTimeout` option in the config, or by using the [browserContext.setDefaultTimeout()](/docs/api/class-browsercontext#browser-context-set-default-timeout) or [page.setDefaultTimeout()](/docs/api/class-page#page-set-default-timeout) methods.
        

**Returns**

-   [Promise](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise "Promise")<[void](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/undefined "void")\>[#](#locator-clear-return)

**Details**

This method waits for [actionability](/docs/actionability) checks, focuses the element, clears it and triggers an `input` event after clearing.

If the target element is not an `<input>`, `<textarea>` or `[contenteditable]` element, this method throws an error. However, if the element is inside the `<label>` element that has an associated [control](https://developer.mozilla.org/en-US/docs/Web/API/HTMLLabelElement/control), the control will be cleared instead.

* * *

### click[​](#locator-click "Direct link to click")

Added in: v1.14 locator.click

Click an element.

**Usage**

Click a button:

```
await page.getByRole('button').click();
```

Shift-right-click at a specific position on a canvas:

```
await page.locator('canvas').click({  button: 'right',  modifiers: ['Shift'],  position: { x: 23, y: 32 },});
```

**Arguments**

-   `options` [Object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object "Object") _(optional)_
    -   `button` "left" | "right" | "middle" _(optional)_[#](#locator-click-option-button)
        
        Defaults to `left`.
        
    -   `clickCount` [number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type "Number") _(optional)_[#](#locator-click-option-click-count)
        
        defaults to 1. See [UIEvent.detail](https://developer.mozilla.org/en-US/docs/Web/API/UIEvent/detail "UIEvent.detail").
        
    -   `delay` [number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type "Number") _(optional)_[#](#locator-click-option-delay)
        
        Time to wait between `mousedown` and `mouseup` in milliseconds. Defaults to 0.
        
    -   `force` [boolean](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Boolean_type "Boolean") _(optional)_[#](#locator-click-option-force)
        
        Whether to bypass the [actionability](/docs/actionability) checks. Defaults to `false`.
        
    -   `modifiers` [Array](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array "Array")<"Alt" | "Control" | "ControlOrMeta" | "Meta" | "Shift"> _(optional)_[#](#locator-click-option-modifiers)
        
        Modifier keys to press. Ensures that only these modifiers are pressed during the operation, and then restores current modifiers back. If not specified, currently pressed modifiers are used. "ControlOrMeta" resolves to "Control" on Windows and Linux and to "Meta" on macOS.
        
    -   `noWaitAfter` [boolean](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Boolean_type "Boolean") _(optional)_[#](#locator-click-option-no-wait-after)
        
        Deprecated
        
        This option will default to `true` in the future.
        
        Actions that initiate navigations are waiting for these navigations to happen and for pages to start loading. You can opt out of waiting via setting this flag. You would only need this option in the exceptional cases such as navigating to inaccessible pages. Defaults to `false`.
        
    -   `position` [Object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object "Object") _(optional)_[#](#locator-click-option-position)
        
        -   `x` [number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type "Number")
            
        -   `y` [number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type "Number")
            
        
        A point to use relative to the top-left corner of element padding box. If not specified, uses some visible point of the element.
        
    -   `steps` [number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type "Number") _(optional)_ Added in: v1.57[#](#locator-click-option-steps)
        
        Defaults to 1. Sends `n` interpolated `mousemove` events to represent travel between Playwright's current cursor position and the provided destination. When set to 1, emits a single `mousemove` event at the destination location.
        
    -   `timeout` [number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type "Number") _(optional)_[#](#locator-click-option-timeout)
        
        Maximum time in milliseconds. Defaults to `0` - no timeout. The default value can be changed via `actionTimeout` option in the config, or by using the [browserContext.setDefaultTimeout()](/docs/api/class-browsercontext#browser-context-set-default-timeout) or [page.setDefaultTimeout()](/docs/api/class-page#page-set-default-timeout) methods.
        
    -   `trial` [boolean](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Boolean_type "Boolean") _(optional)_[#](#locator-click-option-trial)
        
        When set, this method only performs the [actionability](/docs/actionability) checks and skips the action. Defaults to `false`. Useful to wait until the element is ready for the action without performing it. Note that keyboard `modifiers` will be pressed regardless of `trial` to allow testing elements which are only visible when those keys are pressed.
        

**Returns**

-   [Promise](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise "Promise")<[void](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/undefined "void")\>[#](#locator-click-return)

**Details**

This method clicks the element by performing the following steps:

1.  Wait for [actionability](/docs/actionability) checks on the element, unless [force](/docs/api/class-locator#locator-click-option-force) option is set.
2.  Scroll the element into view if needed.
3.  Use [page.mouse](/docs/api/class-page#page-mouse) to click in the center of the element, or the specified [position](/docs/api/class-locator#locator-click-option-position).
4.  Wait for initiated navigations to either succeed or fail, unless [noWaitAfter](/docs/api/class-locator#locator-click-option-no-wait-after) option is set.

If the element is detached from the DOM at any moment during the action, this method throws.

When all steps combined have not finished during the specified [timeout](/docs/api/class-locator#locator-click-option-timeout), this method throws a [TimeoutError](/docs/api/class-timeouterror "TimeoutError"). Passing zero timeout disables this.

* * *

### contentFrame[​](#locator-content-frame "Direct link to contentFrame")

Added in: v1.43 locator.contentFrame

Returns a [FrameLocator](/docs/api/class-framelocator "FrameLocator") object pointing to the same `iframe` as this locator.

Useful when you have a [Locator](/docs/api/class-locator "Locator") object obtained somewhere, and later on would like to interact with the content inside the frame.

For a reverse operation, use [frameLocator.owner()](/docs/api/class-framelocator#frame-locator-owner).

**Usage**

```
const locator = page.locator('iframe[name="embedded"]');// ...const frameLocator = locator.contentFrame();await frameLocator.getByRole('button').click();
```

**Returns**

-   [FrameLocator](/docs/api/class-framelocator "FrameLocator")[#](#locator-content-frame-return)

* * *

### count[​](#locator-count "Direct link to count")

Added in: v1.14 locator.count

Returns the number of elements matching the locator.

Asserting count

If you need to assert the number of elements on the page, prefer [expect(locator).toHaveCount()](/docs/api/class-locatorassertions#locator-assertions-to-have-count) to avoid flakiness. See [assertions guide](/docs/test-assertions) for more details.

**Usage**

```
const count = await page.getByRole('listitem').count();
```

**Returns**

-   [Promise](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise "Promise")<[number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type "Number")\>[#](#locator-count-return)

* * *

### dblclick[​](#locator-dblclick "Direct link to dblclick")

Added in: v1.14 locator.dblclick

Double-click an element.

**Usage**

```
await locator.dblclick();await locator.dblclick(options);
```

**Arguments**

-   `options` [Object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object "Object") _(optional)_
    -   `button` "left" | "right" | "middle" _(optional)_[#](#locator-dblclick-option-button)
        
        Defaults to `left`.
        
    -   `delay` [number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type "Number") _(optional)_[#](#locator-dblclick-option-delay)
        
        Time to wait between `mousedown` and `mouseup` in milliseconds. Defaults to 0.
        
    -   `force` [boolean](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Boolean_type "Boolean") _(optional)_[#](#locator-dblclick-option-force)
        
        Whether to bypass the [actionability](/docs/actionability) checks. Defaults to `false`.
        
    -   `modifiers` [Array](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array "Array")<"Alt" | "Control" | "ControlOrMeta" | "Meta" | "Shift"> _(optional)_[#](#locator-dblclick-option-modifiers)
        
        Modifier keys to press. Ensures that only these modifiers are pressed during the operation, and then restores current modifiers back. If not specified, currently pressed modifiers are used. "ControlOrMeta" resolves to "Control" on Windows and Linux and to "Meta" on macOS.
        
    -   `noWaitAfter` [boolean](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Boolean_type "Boolean") _(optional)_[#](#locator-dblclick-option-no-wait-after)
        
        Deprecated
        
        This option has no effect.
        
        This option has no effect.
        
    -   `position` [Object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object "Object") _(optional)_[#](#locator-dblclick-option-position)
        
        -   `x` [number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type "Number")
            
        -   `y` [number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type "Number")
            
        
        A point to use relative to the top-left corner of element padding box. If not specified, uses some visible point of the element.
        
    -   `steps` [number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type "Number") _(optional)_ Added in: v1.57[#](#locator-dblclick-option-steps)
        
        Defaults to 1. Sends `n` interpolated `mousemove` events to represent travel between Playwright's current cursor position and the provided destination. When set to 1, emits a single `mousemove` event at the destination location.
        
    -   `timeout` [number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type "Number") _(optional)_[#](#locator-dblclick-option-timeout)
        
        Maximum time in milliseconds. Defaults to `0` - no timeout. The default value can be changed via `actionTimeout` option in the config, or by using the [browserContext.setDefaultTimeout()](/docs/api/class-browsercontext#browser-context-set-default-timeout) or [page.setDefaultTimeout()](/docs/api/class-page#page-set-default-timeout) methods.
        
    -   `trial` [boolean](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Boolean_type "Boolean") _(optional)_[#](#locator-dblclick-option-trial)
        
        When set, this method only performs the [actionability](/docs/actionability) checks and skips the action. Defaults to `false`. Useful to wait until the element is ready for the action without performing it. Note that keyboard `modifiers` will be pressed regardless of `trial` to allow testing elements which are only visible when those keys are pressed.
        

**Returns**

-   [Promise](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise "Promise")<[void](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/undefined "void")\>[#](#locator-dblclick-return)

**Details**

This method double clicks the element by performing the following steps:

1.  Wait for [actionability](/docs/actionability) checks on the element, unless [force](/docs/api/class-locator#locator-dblclick-option-force) option is set.
2.  Scroll the element into view if needed.
3.  Use [page.mouse](/docs/api/class-page#page-mouse) to double click in the center of the element, or the specified [position](/docs/api/class-locator#locator-dblclick-option-position).

If the element is detached from the DOM at any moment during the action, this method throws.

When all steps combined have not finished during the specified [timeout](/docs/api/class-locator#locator-dblclick-option-timeout), this method throws a [TimeoutError](/docs/api/class-timeouterror "TimeoutError"). Passing zero timeout disables this.

note

`element.dblclick()` dispatches two `click` events and a single `dblclick` event.

* * *

### describe[​](#locator-describe "Direct link to describe")

Added in: v1.53 locator.describe

Describes the locator, description is used in the trace viewer and reports. Returns the locator pointing to the same element.

**Usage**

```
const button = page.getByTestId('btn-sub').describe('Subscribe button');await button.click();
```

**Arguments**

-   `description` [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type "string")[#](#locator-describe-option-description)
    
    Locator description.
    

**Returns**

-   [Locator](/docs/api/class-locator "Locator")[#](#locator-describe-return)

* * *

### description[​](#locator-description "Direct link to description")

Added in: v1.57 locator.description

Returns locator description previously set with [locator.describe()](/docs/api/class-locator#locator-describe). Returns `null` if no custom description has been set. Prefer [locator.toString()](/docs/api/class-locator#locator-to-string) for a human-readable representation, as it uses the description when available.

**Usage**

```
const button = page.getByRole('button').describe('Subscribe button');console.log(button.description()); // "Subscribe button"const input = page.getByRole('textbox');console.log(input.description()); // null
```

**Returns**

-   [null](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/null "null") | [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type "string")[#](#locator-description-return)

* * *

### dispatchEvent[​](#locator-dispatch-event "Direct link to dispatchEvent")

Added in: v1.14 locator.dispatchEvent

Programmatically dispatch an event on the matching element.

**Usage**

```
await locator.dispatchEvent('click');
```

**Arguments**

-   `type` [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type "string")[#](#locator-dispatch-event-option-type)
    
    DOM event type: `"click"`, `"dragstart"`, etc.
    
-   `eventInit` [EvaluationArgument](/docs/evaluating#evaluation-argument "EvaluationArgument") _(optional)_[#](#locator-dispatch-event-option-event-init)
    
    Optional event-specific initialization properties.
    
-   `options` [Object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object "Object") _(optional)_
    
    -   `timeout` [number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type "Number") _(optional)_[#](#locator-dispatch-event-option-timeout)
        
        Maximum time in milliseconds. Defaults to `0` - no timeout. The default value can be changed via `actionTimeout` option in the config, or by using the [browserContext.setDefaultTimeout()](/docs/api/class-browsercontext#browser-context-set-default-timeout) or [page.setDefaultTimeout()](/docs/api/class-page#page-set-default-timeout) methods.
        

**Returns**

-   [Promise](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise "Promise")<[void](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/undefined "void")\>[#](#locator-dispatch-event-return)

**Details**

The snippet above dispatches the `click` event on the element. Regardless of the visibility state of the element, `click` is dispatched. This is equivalent to calling [element.click()](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/click).

Under the hood, it creates an instance of an event based on the given [type](/docs/api/class-locator#locator-dispatch-event-option-type), initializes it with [eventInit](/docs/api/class-locator#locator-dispatch-event-option-event-init) properties and dispatches it on the element. Events are `composed`, `cancelable` and bubble by default.

Since [eventInit](/docs/api/class-locator#locator-dispatch-event-option-event-init) is event-specific, please refer to the events documentation for the lists of initial properties:

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

You can also specify [JSHandle](/docs/api/class-jshandle "JSHandle") as the property value if you want live objects to be passed into the event:

```
const dataTransfer = await page.evaluateHandle(() => new DataTransfer());await locator.dispatchEvent('dragstart', { dataTransfer });
```

* * *

### dragTo[​](#locator-drag-to "Direct link to dragTo")

Added in: v1.18 locator.dragTo

Drag the source element towards the target element and drop it.

**Usage**

```
const source = page.locator('#source');const target = page.locator('#target');await source.dragTo(target);// or specify exact positions relative to the top-left corners of the elements:await source.dragTo(target, {  sourcePosition: { x: 34, y: 7 },  targetPosition: { x: 10, y: 20 },});
```

**Arguments**

-   `target` [Locator](/docs/api/class-locator "Locator")[#](#locator-drag-to-option-target)
    
    Locator of the element to drag to.
    
-   `options` [Object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object "Object") _(optional)_
    
    -   `force` [boolean](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Boolean_type "Boolean") _(optional)_[#](#locator-drag-to-option-force)
        
        Whether to bypass the [actionability](/docs/actionability) checks. Defaults to `false`.
        
    -   `noWaitAfter` [boolean](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Boolean_type "Boolean") _(optional)_[#](#locator-drag-to-option-no-wait-after)
        
        Deprecated
        
        This option has no effect.
        
        This option has no effect.
        
    -   `sourcePosition` [Object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object "Object") _(optional)_[#](#locator-drag-to-option-source-position)
        
        -   `x` [number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type "Number")
            
        -   `y` [number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type "Number")
            
        
        Clicks on the source element at this point relative to the top-left corner of the element's padding box. If not specified, some visible point of the element is used.
        
    -   `steps` [number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type "Number") _(optional)_ Added in: v1.57[#](#locator-drag-to-option-steps)
        
        Defaults to 1. Sends `n` interpolated `mousemove` events to represent travel between the `mousedown` and `mouseup` of the drag. When set to 1, emits a single `mousemove` event at the destination location.
        
    -   `targetPosition` [Object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object "Object") _(optional)_[#](#locator-drag-to-option-target-position)
        
        -   `x` [number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type "Number")
            
        -   `y` [number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type "Number")
            
        
        Drops on the target element at this point relative to the top-left corner of the element's padding box. If not specified, some visible point of the element is used.
        
    -   `timeout` [number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type "Number") _(optional)_[#](#locator-drag-to-option-timeout)
        
        Maximum time in milliseconds. Defaults to `0` - no timeout. The default value can be changed via `actionTimeout` option in the config, or by using the [browserContext.setDefaultTimeout()](/docs/api/class-browsercontext#browser-context-set-default-timeout) or [page.setDefaultTimeout()](/docs/api/class-page#page-set-default-timeout) methods.
        
    -   `trial` [boolean](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Boolean_type "Boolean") _(optional)_[#](#locator-drag-to-option-trial)
        
        When set, this method only performs the [actionability](/docs/actionability) checks and skips the action. Defaults to `false`. Useful to wait until the element is ready for the action without performing it.
        

**Returns**

-   [Promise](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise "Promise")<[void](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/undefined "void")\>[#](#locator-drag-to-return)

**Details**

This method drags the locator to another target locator or target position. It will first move to the source element, perform a `mousedown`, then move to the target element or position and perform a `mouseup`.

* * *

### evaluate[​](#locator-evaluate "Direct link to evaluate")

Added in: v1.14 locator.evaluate

Execute JavaScript code in the page, taking the matching element as an argument.

**Usage**

Passing argument to [pageFunction](/docs/api/class-locator#locator-evaluate-option-expression):

```
const result = await page.getByTestId('myId').evaluate((element, [x, y]) => {  return element.textContent + ' ' + x * y;}, [7, 8]);console.log(result); // prints "myId text 56"
```

**Arguments**

-   `pageFunction` [function](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function "Function") | [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type "string")[#](#locator-evaluate-option-expression)
    
    Function to be evaluated in the page context.
    
-   `arg` [EvaluationArgument](/docs/evaluating#evaluation-argument "EvaluationArgument") _(optional)_[#](#locator-evaluate-option-arg)
    
    Optional argument to pass to [pageFunction](/docs/api/class-locator#locator-evaluate-option-expression).
    
-   `options` [Object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object "Object") _(optional)_
    
    -   `timeout` [number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type "Number") _(optional)_[#](#locator-evaluate-option-timeout)
        
        Maximum time in milliseconds to wait for the locator before evaluating. Note that after locator is resolved, evaluation itself is not limited by the timeout. Defaults to `0` - no timeout.
        

**Returns**

-   [Promise](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise "Promise")<[Serializable](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify#Description "Serializable")\>[#](#locator-evaluate-return)

**Details**

Returns the return value of [pageFunction](/docs/api/class-locator#locator-evaluate-option-expression), called with the matching element as a first argument, and [arg](/docs/api/class-locator#locator-evaluate-option-arg) as a second argument.

If [pageFunction](/docs/api/class-locator#locator-evaluate-option-expression) returns a [Promise](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise "Promise"), this method will wait for the promise to resolve and return its value.

If [pageFunction](/docs/api/class-locator#locator-evaluate-option-expression) throws or rejects, this method throws.

* * *

### evaluateAll[​](#locator-evaluate-all "Direct link to evaluateAll")

Added in: v1.14 locator.evaluateAll

Execute JavaScript code in the page, taking all matching elements as an argument.

**Usage**

```
const locator = page.locator('div');const moreThanTen = await locator.evaluateAll((divs, min) => divs.length > min, 10);
```

**Arguments**

-   `pageFunction` [function](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function "Function") | [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type "string")[#](#locator-evaluate-all-option-expression)
    
    Function to be evaluated in the page context.
    
-   `arg` [EvaluationArgument](/docs/evaluating#evaluation-argument "EvaluationArgument") _(optional)_[#](#locator-evaluate-all-option-arg)
    
    Optional argument to pass to [pageFunction](/docs/api/class-locator#locator-evaluate-all-option-expression).
    

**Returns**

-   [Promise](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise "Promise")<[Serializable](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify#Description "Serializable")\>[#](#locator-evaluate-all-return)

**Details**

Returns the return value of [pageFunction](/docs/api/class-locator#locator-evaluate-all-option-expression), called with an array of all matching elements as a first argument, and [arg](/docs/api/class-locator#locator-evaluate-all-option-arg) as a second argument.

If [pageFunction](/docs/api/class-locator#locator-evaluate-all-option-expression) returns a [Promise](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise "Promise"), this method will wait for the promise to resolve and return its value.

If [pageFunction](/docs/api/class-locator#locator-evaluate-all-option-expression) throws or rejects, this method throws.

* * *

### evaluateHandle[​](#locator-evaluate-handle "Direct link to evaluateHandle")

Added in: v1.14 locator.evaluateHandle

Execute JavaScript code in the page, taking the matching element as an argument, and return a [JSHandle](/docs/api/class-jshandle "JSHandle") with the result.

**Usage**

```
await locator.evaluateHandle(pageFunction);await locator.evaluateHandle(pageFunction, arg, options);
```

**Arguments**

-   `pageFunction` [function](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function "Function") | [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type "string")[#](#locator-evaluate-handle-option-expression)
    
    Function to be evaluated in the page context.
    
-   `arg` [EvaluationArgument](/docs/evaluating#evaluation-argument "EvaluationArgument") _(optional)_[#](#locator-evaluate-handle-option-arg)
    
    Optional argument to pass to [pageFunction](/docs/api/class-locator#locator-evaluate-handle-option-expression).
    
-   `options` [Object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object "Object") _(optional)_
    
    -   `timeout` [number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type "Number") _(optional)_[#](#locator-evaluate-handle-option-timeout)
        
        Maximum time in milliseconds to wait for the locator before evaluating. Note that after locator is resolved, evaluation itself is not limited by the timeout. Defaults to `0` - no timeout.
        

**Returns**

-   [Promise](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise "Promise")<[JSHandle](/docs/api/class-jshandle "JSHandle")\>[#](#locator-evaluate-handle-return)

**Details**

Returns the return value of [pageFunction](/docs/api/class-locator#locator-evaluate-handle-option-expression) as a[JSHandle](/docs/api/class-jshandle "JSHandle"), called with the matching element as a first argument, and [arg](/docs/api/class-locator#locator-evaluate-handle-option-arg) as a second argument.

The only difference between [locator.evaluate()](/docs/api/class-locator#locator-evaluate) and [locator.evaluateHandle()](/docs/api/class-locator#locator-evaluate-handle) is that [locator.evaluateHandle()](/docs/api/class-locator#locator-evaluate-handle) returns [JSHandle](/docs/api/class-jshandle "JSHandle").

If [pageFunction](/docs/api/class-locator#locator-evaluate-handle-option-expression) returns a [Promise](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise "Promise"), this method will wait for the promise to resolve and return its value.

If [pageFunction](/docs/api/class-locator#locator-evaluate-handle-option-expression) throws or rejects, this method throws.

See [page.evaluateHandle()](/docs/api/class-page#page-evaluate-handle) for more details.

* * *

### fill[​](#locator-fill "Direct link to fill")

Added in: v1.14 locator.fill

Set a value to the input field.

**Usage**

```
await page.getByRole('textbox').fill('example value');
```

**Arguments**

-   `value` [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type "string")[#](#locator-fill-option-value)
    
    Value to set for the `<input>`, `<textarea>` or `[contenteditable]` element.
    
-   `options` [Object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object "Object") _(optional)_
    
    -   `force` [boolean](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Boolean_type "Boolean") _(optional)_[#](#locator-fill-option-force)
        
        Whether to bypass the [actionability](/docs/actionability) checks. Defaults to `false`.
        
    -   `noWaitAfter` [boolean](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Boolean_type "Boolean") _(optional)_[#](#locator-fill-option-no-wait-after)
        
        Deprecated
        
        This option has no effect.
        
        This option has no effect.
        
    -   `timeout` [number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type "Number") _(optional)_[#](#locator-fill-option-timeout)
        
        Maximum time in milliseconds. Defaults to `0` - no timeout. The default value can be changed via `actionTimeout` option in the config, or by using the [browserContext.setDefaultTimeout()](/docs/api/class-browsercontext#browser-context-set-default-timeout) or [page.setDefaultTimeout()](/docs/api/class-page#page-set-default-timeout) methods.
        

**Returns**

-   [Promise](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise "Promise")<[void](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/undefined "void")\>[#](#locator-fill-return)

**Details**

This method waits for [actionability](/docs/actionability) checks, focuses the element, fills it and triggers an `input` event after filling. Note that you can pass an empty string to clear the input field.

If the target element is not an `<input>`, `<textarea>` or `[contenteditable]` element, this method throws an error. However, if the element is inside the `<label>` element that has an associated [control](https://developer.mozilla.org/en-US/docs/Web/API/HTMLLabelElement/control), the control will be filled instead.

To send fine-grained keyboard events, use [locator.pressSequentially()](/docs/api/class-locator#locator-press-sequentially).

* * *

### filter[​](#locator-filter "Direct link to filter")

Added in: v1.22 locator.filter

This method narrows existing locator according to the options, for example filters by text. It can be chained to filter multiple times.

**Usage**

```
const rowLocator = page.locator('tr');// ...await rowLocator    .filter({ hasText: 'text in column 1' })    .filter({ has: page.getByRole('button', { name: 'column 2 button' }) })    .screenshot();
```

**Arguments**

-   `options` [Object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object "Object") _(optional)_
    -   `has` [Locator](/docs/api/class-locator "Locator") _(optional)_[#](#locator-filter-option-has)
        
        Narrows down the results of the method to those which contain elements matching this relative locator. For example, `article` that has `text=Playwright` matches `<article><div>Playwright</div></article>`.
        
        Inner locator **must be relative** to the outer locator and is queried starting with the outer locator match, not the document root. For example, you can find `content` that has `div` in `<article><content><div>Playwright</div></content></article>`. However, looking for `content` that has `article div` will fail, because the inner locator must be relative and should not use any elements outside the `content`.
        
        Note that outer and inner locators must belong to the same frame. Inner locator must not contain [FrameLocator](/docs/api/class-framelocator "FrameLocator")s.
        
    -   `hasNot` [Locator](/docs/api/class-locator "Locator") _(optional)_ Added in: v1.33[#](#locator-filter-option-has-not)
        
        Matches elements that do not contain an element that matches an inner locator. Inner locator is queried against the outer one. For example, `article` that does not have `div` matches `<article><span>Playwright</span></article>`.
        
        Note that outer and inner locators must belong to the same frame. Inner locator must not contain [FrameLocator](/docs/api/class-framelocator "FrameLocator")s.
        
    -   `hasNotText` [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type "string") | [RegExp](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp "RegExp") _(optional)_ Added in: v1.33[#](#locator-filter-option-has-not-text)
        
        Matches elements that do not contain specified text somewhere inside, possibly in a child or a descendant element. When passed a [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type "string"), matching is case-insensitive and searches for a substring.
        
    -   `hasText` [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type "string") | [RegExp](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp "RegExp") _(optional)_[#](#locator-filter-option-has-text)
        
        Matches elements containing specified text somewhere inside, possibly in a child or a descendant element. When passed a [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type "string"), matching is case-insensitive and searches for a substring. For example, `"Playwright"` matches `<article><div>Playwright</div></article>`.
        
    -   `visible` [boolean](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Boolean_type "Boolean") _(optional)_ Added in: v1.51[#](#locator-filter-option-visible)
        
        Only matches visible or invisible elements.
        

**Returns**

-   [Locator](/docs/api/class-locator "Locator")[#](#locator-filter-return)

* * *

### first[​](#locator-first "Direct link to first")

Added in: v1.14 locator.first

Returns locator to the first matching element.

**Usage**

```
locator.first();
```

**Returns**

-   [Locator](/docs/api/class-locator "Locator")[#](#locator-first-return)

* * *

### focus[​](#locator-focus "Direct link to focus")

Added in: v1.14 locator.focus

Calls [focus](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/focus) on the matching element.

**Usage**

```
await locator.focus();await locator.focus(options);
```

**Arguments**

-   `options` [Object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object "Object") _(optional)_
    -   `timeout` [number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type "Number") _(optional)_[#](#locator-focus-option-timeout)
        
        Maximum time in milliseconds. Defaults to `0` - no timeout. The default value can be changed via `actionTimeout` option in the config, or by using the [browserContext.setDefaultTimeout()](/docs/api/class-browsercontext#browser-context-set-default-timeout) or [page.setDefaultTimeout()](/docs/api/class-page#page-set-default-timeout) methods.
        

**Returns**

-   [Promise](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise "Promise")<[void](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/undefined "void")\>[#](#locator-focus-return)

* * *

### frameLocator[​](#locator-frame-locator "Direct link to frameLocator")

Added in: v1.17 locator.frameLocator

When working with iframes, you can create a frame locator that will enter the iframe and allow locating elements in that iframe:

**Usage**

```
const locator = page.frameLocator('iframe').getByText('Submit');await locator.click();
```

**Arguments**

-   `selector` [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type "string")[#](#locator-frame-locator-option-selector)
    
    A selector to use when resolving DOM element.
    

**Returns**

-   [FrameLocator](/docs/api/class-framelocator "FrameLocator")[#](#locator-frame-locator-return)

* * *

### getAttribute[​](#locator-get-attribute "Direct link to getAttribute")

Added in: v1.14 locator.getAttribute

Returns the matching element's attribute value.

Asserting attributes

If you need to assert an element's attribute, prefer [expect(locator).toHaveAttribute()](/docs/api/class-locatorassertions#locator-assertions-to-have-attribute) to avoid flakiness. See [assertions guide](/docs/test-assertions) for more details.

**Usage**

```
await locator.getAttribute(name);await locator.getAttribute(name, options);
```

**Arguments**

-   `name` [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type "string")[#](#locator-get-attribute-option-name)
    
    Attribute name to get the value for.
    
-   `options` [Object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object "Object") _(optional)_
    
    -   `timeout` [number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type "Number") _(optional)_[#](#locator-get-attribute-option-timeout)
        
        Maximum time in milliseconds. Defaults to `0` - no timeout. The default value can be changed via `actionTimeout` option in the config, or by using the [browserContext.setDefaultTimeout()](/docs/api/class-browsercontext#browser-context-set-default-timeout) or [page.setDefaultTimeout()](/docs/api/class-page#page-set-default-timeout) methods.
        

**Returns**

-   [Promise](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise "Promise")<[null](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/null "null") | [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type "string")\>[#](#locator-get-attribute-return)

* * *

### getByAltText[​](#locator-get-by-alt-text "Direct link to getByAltText")

Added in: v1.27 locator.getByAltText

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

-   `text` [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type "string") | [RegExp](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp "RegExp")[#](#locator-get-by-alt-text-option-text)
    
    Text to locate the element for.
    
-   `options` [Object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object "Object") _(optional)_
    
    -   `exact` [boolean](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Boolean_type "Boolean") _(optional)_[#](#locator-get-by-alt-text-option-exact)
        
        Whether to find an exact match: case-sensitive and whole-string. Default to false. Ignored when locating by a regular expression. Note that exact match still trims whitespace.
        

**Returns**

-   [Locator](/docs/api/class-locator "Locator")[#](#locator-get-by-alt-text-return)

* * *

### getByLabel[​](#locator-get-by-label "Direct link to getByLabel")

Added in: v1.27 locator.getByLabel

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

-   `text` [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type "string") | [RegExp](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp "RegExp")[#](#locator-get-by-label-option-text)
    
    Text to locate the element for.
    
-   `options` [Object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object "Object") _(optional)_
    
    -   `exact` [boolean](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Boolean_type "Boolean") _(optional)_[#](#locator-get-by-label-option-exact)
        
        Whether to find an exact match: case-sensitive and whole-string. Default to false. Ignored when locating by a regular expression. Note that exact match still trims whitespace.
        

**Returns**

-   [Locator](/docs/api/class-locator "Locator")[#](#locator-get-by-label-return)

* * *

### getByPlaceholder[​](#locator-get-by-placeholder "Direct link to getByPlaceholder")

Added in: v1.27 locator.getByPlaceholder

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

-   `text` [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type "string") | [RegExp](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp "RegExp")[#](#locator-get-by-placeholder-option-text)
    
    Text to locate the element for.
    
-   `options` [Object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object "Object") _(optional)_
    
    -   `exact` [boolean](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Boolean_type "Boolean") _(optional)_[#](#locator-get-by-placeholder-option-exact)
        
        Whether to find an exact match: case-sensitive and whole-string. Default to false. Ignored when locating by a regular expression. Note that exact match still trims whitespace.
        

**Returns**

-   [Locator](/docs/api/class-locator "Locator")[#](#locator-get-by-placeholder-return)

* * *

### getByRole[​](#locator-get-by-role "Direct link to getByRole")

Added in: v1.27 locator.getByRole

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

-   `role` "alert" | "alertdialog" | "application" | "article" | "banner" | "blockquote" | "button" | "caption" | "cell" | "checkbox" | "code" | "columnheader" | "combobox" | "complementary" | "contentinfo" | "definition" | "deletion" | "dialog" | "directory" | "document" | "emphasis" | "feed" | "figure" | "form" | "generic" | "grid" | "gridcell" | "group" | "heading" | "img" | "insertion" | "link" | "list" | "listbox" | "listitem" | "log" | "main" | "marquee" | "math" | "meter" | "menu" | "menubar" | "menuitem" | "menuitemcheckbox" | "menuitemradio" | "navigation" | "none" | "note" | "option" | "paragraph" | "presentation" | "progressbar" | "radio" | "radiogroup" | "region" | "row" | "rowgroup" | "rowheader" | "scrollbar" | "search" | "searchbox" | "separator" | "slider" | "spinbutton" | "status" | "strong" | "subscript" | "superscript" | "switch" | "tab" | "table" | "tablist" | "tabpanel" | "term" | "textbox" | "time" | "timer" | "toolbar" | "tooltip" | "tree" | "treegrid" | "treeitem"[#](#locator-get-by-role-option-role)
    
    Required aria role.
    
-   `options` [Object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object "Object") _(optional)_
    
    -   `checked` [boolean](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Boolean_type "Boolean") _(optional)_[#](#locator-get-by-role-option-checked)
        
        An attribute that is usually set by `aria-checked` or native `<input type=checkbox>` controls.
        
        Learn more about [`aria-checked`](https://www.w3.org/TR/wai-aria-1.2/#aria-checked).
        
    -   `disabled` [boolean](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Boolean_type "Boolean") _(optional)_[#](#locator-get-by-role-option-disabled)
        
        An attribute that is usually set by `aria-disabled` or `disabled`.
        
        note
        
        Unlike most other attributes, `disabled` is inherited through the DOM hierarchy. Learn more about [`aria-disabled`](https://www.w3.org/TR/wai-aria-1.2/#aria-disabled).
        
    -   `exact` [boolean](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Boolean_type "Boolean") _(optional)_ Added in: v1.28[#](#locator-get-by-role-option-exact)
        
        Whether [name](/docs/api/class-locator#locator-get-by-role-option-name) is matched exactly: case-sensitive and whole-string. Defaults to false. Ignored when [name](/docs/api/class-locator#locator-get-by-role-option-name) is a regular expression. Note that exact match still trims whitespace.
        
    -   `expanded` [boolean](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Boolean_type "Boolean") _(optional)_[#](#locator-get-by-role-option-expanded)
        
        An attribute that is usually set by `aria-expanded`.
        
        Learn more about [`aria-expanded`](https://www.w3.org/TR/wai-aria-1.2/#aria-expanded).
        
    -   `includeHidden` [boolean](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Boolean_type "Boolean") _(optional)_[#](#locator-get-by-role-option-include-hidden)
        
        Option that controls whether hidden elements are matched. By default, only non-hidden elements, as [defined by ARIA](https://www.w3.org/TR/wai-aria-1.2/#tree_exclusion), are matched by role selector.
        
        Learn more about [`aria-hidden`](https://www.w3.org/TR/wai-aria-1.2/#aria-hidden).
        
    -   `level` [number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type "Number") _(optional)_[#](#locator-get-by-role-option-level)
        
        A number attribute that is usually present for roles `heading`, `listitem`, `row`, `treeitem`, with default values for `<h1>-<h6>` elements.
        
        Learn more about [`aria-level`](https://www.w3.org/TR/wai-aria-1.2/#aria-level).
        
    -   `name` [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type "string") | [RegExp](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp "RegExp") _(optional)_[#](#locator-get-by-role-option-name)
        
        Option to match the [accessible name](https://w3c.github.io/accname/#dfn-accessible-name). By default, matching is case-insensitive and searches for a substring, use [exact](/docs/api/class-locator#locator-get-by-role-option-exact) to control this behavior.
        
        Learn more about [accessible name](https://w3c.github.io/accname/#dfn-accessible-name).
        
    -   `pressed` [boolean](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Boolean_type "Boolean") _(optional)_[#](#locator-get-by-role-option-pressed)
        
        An attribute that is usually set by `aria-pressed`.
        
        Learn more about [`aria-pressed`](https://www.w3.org/TR/wai-aria-1.2/#aria-pressed).
        
    -   `selected` [boolean](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Boolean_type "Boolean") _(optional)_[#](#locator-get-by-role-option-selected)
        
        An attribute that is usually set by `aria-selected`.
        
        Learn more about [`aria-selected`](https://www.w3.org/TR/wai-aria-1.2/#aria-selected).
        

**Returns**

-   [Locator](/docs/api/class-locator "Locator")[#](#locator-get-by-role-return)

**Details**

Role selector **does not replace** accessibility audits and conformance tests, but rather gives early feedback about the ARIA guidelines.

Many html elements have an implicitly [defined role](https://w3c.github.io/html-aam/#html-element-role-mappings) that is recognized by the role selector. You can find all the [supported roles here](https://www.w3.org/TR/wai-aria-1.2/#role_definitions). ARIA guidelines **do not recommend** duplicating implicit roles and attributes by setting `role` and/or `aria-*` attributes to default values.

* * *

### getByTestId[​](#locator-get-by-test-id "Direct link to getByTestId")

Added in: v1.27 locator.getByTestId

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

-   `testId` [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type "string") | [RegExp](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp "RegExp")[#](#locator-get-by-test-id-option-test-id)
    
    Id to locate the element by.
    

**Returns**

-   [Locator](/docs/api/class-locator "Locator")[#](#locator-get-by-test-id-return)

**Details**

By default, the `data-testid` attribute is used as a test id. Use [selectors.setTestIdAttribute()](/docs/api/class-selectors#selectors-set-test-id-attribute) to configure a different test id attribute if necessary.

```
// Set custom test id attribute from @playwright/test config:import { defineConfig } from '@playwright/test';export default defineConfig({  use: {    testIdAttribute: 'data-pw'  },});
```

* * *

### getByText[​](#locator-get-by-text "Direct link to getByText")

Added in: v1.27 locator.getByText

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

-   `text` [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type "string") | [RegExp](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp "RegExp")[#](#locator-get-by-text-option-text)
    
    Text to locate the element for.
    
-   `options` [Object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object "Object") _(optional)_
    
    -   `exact` [boolean](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Boolean_type "Boolean") _(optional)_[#](#locator-get-by-text-option-exact)
        
        Whether to find an exact match: case-sensitive and whole-string. Default to false. Ignored when locating by a regular expression. Note that exact match still trims whitespace.
        

**Returns**

-   [Locator](/docs/api/class-locator "Locator")[#](#locator-get-by-text-return)

**Details**

Matching by text always normalizes whitespace, even with exact match. For example, it turns multiple spaces into one, turns line breaks into spaces and ignores leading and trailing whitespace.

Input elements of the type `button` and `submit` are matched by their `value` instead of the text content. For example, locating by text `"Log in"` matches `<input type=button value="Log in">`.

* * *

### getByTitle[​](#locator-get-by-title "Direct link to getByTitle")

Added in: v1.27 locator.getByTitle

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

-   `text` [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type "string") | [RegExp](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp "RegExp")[#](#locator-get-by-title-option-text)
    
    Text to locate the element for.
    
-   `options` [Object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object "Object") _(optional)_
    
    -   `exact` [boolean](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Boolean_type "Boolean") _(optional)_[#](#locator-get-by-title-option-exact)
        
        Whether to find an exact match: case-sensitive and whole-string. Default to false. Ignored when locating by a regular expression. Note that exact match still trims whitespace.
        

**Returns**

-   [Locator](/docs/api/class-locator "Locator")[#](#locator-get-by-title-return)

* * *

### highlight[​](#locator-highlight "Direct link to highlight")

Added in: v1.20 locator.highlight

Highlight the corresponding element(s) on the screen. Useful for debugging, don't commit the code that uses [locator.highlight()](/docs/api/class-locator#locator-highlight).

**Usage**

```
await locator.highlight();
```

**Returns**

-   [Promise](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise "Promise")<[void](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/undefined "void")\>[#](#locator-highlight-return)

* * *

### hover[​](#locator-hover "Direct link to hover")

Added in: v1.14 locator.hover

Hover over the matching element.

**Usage**

```
await page.getByRole('link').hover();
```

**Arguments**

-   `options` [Object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object "Object") _(optional)_
    -   `force` [boolean](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Boolean_type "Boolean") _(optional)_[#](#locator-hover-option-force)
        
        Whether to bypass the [actionability](/docs/actionability) checks. Defaults to `false`.
        
    -   `modifiers` [Array](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array "Array")<"Alt" | "Control" | "ControlOrMeta" | "Meta" | "Shift"> _(optional)_[#](#locator-hover-option-modifiers)
        
        Modifier keys to press. Ensures that only these modifiers are pressed during the operation, and then restores current modifiers back. If not specified, currently pressed modifiers are used. "ControlOrMeta" resolves to "Control" on Windows and Linux and to "Meta" on macOS.
        
    -   `noWaitAfter` [boolean](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Boolean_type "Boolean") _(optional)_ Added in: v1.28[#](#locator-hover-option-no-wait-after)
        
        Deprecated
        
        This option has no effect.
        
        This option has no effect.
        
    -   `position` [Object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object "Object") _(optional)_[#](#locator-hover-option-position)
        
        -   `x` [number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type "Number")
            
        -   `y` [number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type "Number")
            
        
        A point to use relative to the top-left corner of element padding box. If not specified, uses some visible point of the element.
        
    -   `timeout` [number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type "Number") _(optional)_[#](#locator-hover-option-timeout)
        
        Maximum time in milliseconds. Defaults to `0` - no timeout. The default value can be changed via `actionTimeout` option in the config, or by using the [browserContext.setDefaultTimeout()](/docs/api/class-browsercontext#browser-context-set-default-timeout) or [page.setDefaultTimeout()](/docs/api/class-page#page-set-default-timeout) methods.
        
    -   `trial` [boolean](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Boolean_type "Boolean") _(optional)_[#](#locator-hover-option-trial)
        
        When set, this method only performs the [actionability](/docs/actionability) checks and skips the action. Defaults to `false`. Useful to wait until the element is ready for the action without performing it. Note that keyboard `modifiers` will be pressed regardless of `trial` to allow testing elements which are only visible when those keys are pressed.
        

**Returns**

-   [Promise](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise "Promise")<[void](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/undefined "void")\>[#](#locator-hover-return)

**Details**

This method hovers over the element by performing the following steps:

1.  Wait for [actionability](/docs/actionability) checks on the element, unless [force](/docs/api/class-locator#locator-hover-option-force) option is set.
2.  Scroll the element into view if needed.
3.  Use [page.mouse](/docs/api/class-page#page-mouse) to hover over the center of the element, or the specified [position](/docs/api/class-locator#locator-hover-option-position).

If the element is detached from the DOM at any moment during the action, this method throws.

When all steps combined have not finished during the specified [timeout](/docs/api/class-locator#locator-hover-option-timeout), this method throws a [TimeoutError](/docs/api/class-timeouterror "TimeoutError"). Passing zero timeout disables this.

* * *

### innerHTML[​](#locator-inner-html "Direct link to innerHTML")

Added in: v1.14 locator.innerHTML

Returns the [`element.innerHTML`](https://developer.mozilla.org/en-US/docs/Web/API/Element/innerHTML).

**Usage**

```
await locator.innerHTML();await locator.innerHTML(options);
```

**Arguments**

-   `options` [Object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object "Object") _(optional)_
    -   `timeout` [number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type "Number") _(optional)_[#](#locator-inner-html-option-timeout)
        
        Maximum time in milliseconds. Defaults to `0` - no timeout. The default value can be changed via `actionTimeout` option in the config, or by using the [browserContext.setDefaultTimeout()](/docs/api/class-browsercontext#browser-context-set-default-timeout) or [page.setDefaultTimeout()](/docs/api/class-page#page-set-default-timeout) methods.
        

**Returns**

-   [Promise](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise "Promise")<[string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type "string")\>[#](#locator-inner-html-return)

* * *

### innerText[​](#locator-inner-text "Direct link to innerText")

Added in: v1.14 locator.innerText

Returns the [`element.innerText`](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/innerText).

Asserting text

If you need to assert text on the page, prefer [expect(locator).toHaveText()](/docs/api/class-locatorassertions#locator-assertions-to-have-text) with [useInnerText](/docs/api/class-locatorassertions#locator-assertions-to-have-text-option-use-inner-text) option to avoid flakiness. See [assertions guide](/docs/test-assertions) for more details.

**Usage**

```
await locator.innerText();await locator.innerText(options);
```

**Arguments**

-   `options` [Object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object "Object") _(optional)_
    -   `timeout` [number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type "Number") _(optional)_[#](#locator-inner-text-option-timeout)
        
        Maximum time in milliseconds. Defaults to `0` - no timeout. The default value can be changed via `actionTimeout` option in the config, or by using the [browserContext.setDefaultTimeout()](/docs/api/class-browsercontext#browser-context-set-default-timeout) or [page.setDefaultTimeout()](/docs/api/class-page#page-set-default-timeout) methods.
        

**Returns**

-   [Promise](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise "Promise")<[string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type "string")\>[#](#locator-inner-text-return)

* * *

### inputValue[​](#locator-input-value "Direct link to inputValue")

Added in: v1.14 locator.inputValue

Returns the value for the matching `<input>` or `<textarea>` or `<select>` element.

Asserting value

If you need to assert input value, prefer [expect(locator).toHaveValue()](/docs/api/class-locatorassertions#locator-assertions-to-have-value) to avoid flakiness. See [assertions guide](/docs/test-assertions) for more details.

**Usage**

```
const value = await page.getByRole('textbox').inputValue();
```

**Arguments**

-   `options` [Object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object "Object") _(optional)_
    -   `timeout` [number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type "Number") _(optional)_[#](#locator-input-value-option-timeout)
        
        Maximum time in milliseconds. Defaults to `0` - no timeout. The default value can be changed via `actionTimeout` option in the config, or by using the [browserContext.setDefaultTimeout()](/docs/api/class-browsercontext#browser-context-set-default-timeout) or [page.setDefaultTimeout()](/docs/api/class-page#page-set-default-timeout) methods.
        

**Returns**

-   [Promise](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise "Promise")<[string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type "string")\>[#](#locator-input-value-return)

**Details**

Throws elements that are not an input, textarea or a select. However, if the element is inside the `<label>` element that has an associated [control](https://developer.mozilla.org/en-US/docs/Web/API/HTMLLabelElement/control), returns the value of the control.

* * *

### isChecked[​](#locator-is-checked "Direct link to isChecked")

Added in: v1.14 locator.isChecked

Returns whether the element is checked. Throws if the element is not a checkbox or radio input.

Asserting checked state

If you need to assert that checkbox is checked, prefer [expect(locator).toBeChecked()](/docs/api/class-locatorassertions#locator-assertions-to-be-checked) to avoid flakiness. See [assertions guide](/docs/test-assertions) for more details.

**Usage**

```
const checked = await page.getByRole('checkbox').isChecked();
```

**Arguments**

-   `options` [Object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object "Object") _(optional)_
    -   `timeout` [number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type "Number") _(optional)_[#](#locator-is-checked-option-timeout)
        
        Maximum time in milliseconds. Defaults to `0` - no timeout. The default value can be changed via `actionTimeout` option in the config, or by using the [browserContext.setDefaultTimeout()](/docs/api/class-browsercontext#browser-context-set-default-timeout) or [page.setDefaultTimeout()](/docs/api/class-page#page-set-default-timeout) methods.
        

**Returns**

-   [Promise](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise "Promise")<[boolean](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Boolean_type "Boolean")\>[#](#locator-is-checked-return)

* * *

### isDisabled[​](#locator-is-disabled "Direct link to isDisabled")

Added in: v1.14 locator.isDisabled

Returns whether the element is disabled, the opposite of [enabled](/docs/actionability#enabled).

Asserting disabled state

If you need to assert that an element is disabled, prefer [expect(locator).toBeDisabled()](/docs/api/class-locatorassertions#locator-assertions-to-be-disabled) to avoid flakiness. See [assertions guide](/docs/test-assertions) for more details.

**Usage**

```
const disabled = await page.getByRole('button').isDisabled();
```

**Arguments**

-   `options` [Object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object "Object") _(optional)_
    -   `timeout` [number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type "Number") _(optional)_[#](#locator-is-disabled-option-timeout)
        
        Maximum time in milliseconds. Defaults to `0` - no timeout. The default value can be changed via `actionTimeout` option in the config, or by using the [browserContext.setDefaultTimeout()](/docs/api/class-browsercontext#browser-context-set-default-timeout) or [page.setDefaultTimeout()](/docs/api/class-page#page-set-default-timeout) methods.
        

**Returns**

-   [Promise](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise "Promise")<[boolean](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Boolean_type "Boolean")\>[#](#locator-is-disabled-return)

* * *

### isEditable[​](#locator-is-editable "Direct link to isEditable")

Added in: v1.14 locator.isEditable

Returns whether the element is [editable](/docs/actionability#editable). If the target element is not an `<input>`, `<textarea>`, `<select>`, `[contenteditable]` and does not have a role allowing `[aria-readonly]`, this method throws an error.

Asserting editable state

If you need to assert that an element is editable, prefer [expect(locator).toBeEditable()](/docs/api/class-locatorassertions#locator-assertions-to-be-editable) to avoid flakiness. See [assertions guide](/docs/test-assertions) for more details.

**Usage**

```
const editable = await page.getByRole('textbox').isEditable();
```

**Arguments**

-   `options` [Object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object "Object") _(optional)_
    -   `timeout` [number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type "Number") _(optional)_[#](#locator-is-editable-option-timeout)
        
        Maximum time in milliseconds. Defaults to `0` - no timeout. The default value can be changed via `actionTimeout` option in the config, or by using the [browserContext.setDefaultTimeout()](/docs/api/class-browsercontext#browser-context-set-default-timeout) or [page.setDefaultTimeout()](/docs/api/class-page#page-set-default-timeout) methods.
        

**Returns**

-   [Promise](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise "Promise")<[boolean](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Boolean_type "Boolean")\>[#](#locator-is-editable-return)

* * *

### isEnabled[​](#locator-is-enabled "Direct link to isEnabled")

Added in: v1.14 locator.isEnabled

Returns whether the element is [enabled](/docs/actionability#enabled).

Asserting enabled state

If you need to assert that an element is enabled, prefer [expect(locator).toBeEnabled()](/docs/api/class-locatorassertions#locator-assertions-to-be-enabled) to avoid flakiness. See [assertions guide](/docs/test-assertions) for more details.

**Usage**

```
const enabled = await page.getByRole('button').isEnabled();
```

**Arguments**

-   `options` [Object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object "Object") _(optional)_
    -   `timeout` [number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type "Number") _(optional)_[#](#locator-is-enabled-option-timeout)
        
        Maximum time in milliseconds. Defaults to `0` - no timeout. The default value can be changed via `actionTimeout` option in the config, or by using the [browserContext.setDefaultTimeout()](/docs/api/class-browsercontext#browser-context-set-default-timeout) or [page.setDefaultTimeout()](/docs/api/class-page#page-set-default-timeout) methods.
        

**Returns**

-   [Promise](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise "Promise")<[boolean](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Boolean_type "Boolean")\>[#](#locator-is-enabled-return)

* * *

### isHidden[​](#locator-is-hidden "Direct link to isHidden")

Added in: v1.14 locator.isHidden

Returns whether the element is hidden, the opposite of [visible](/docs/actionability#visible).

Asserting visibility

If you need to assert that element is hidden, prefer [expect(locator).toBeHidden()](/docs/api/class-locatorassertions#locator-assertions-to-be-hidden) to avoid flakiness. See [assertions guide](/docs/test-assertions) for more details.

**Usage**

```
const hidden = await page.getByRole('button').isHidden();
```

**Arguments**

-   `options` [Object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object "Object") _(optional)_
    -   `timeout` [number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type "Number") _(optional)_[#](#locator-is-hidden-option-timeout)
        
        Deprecated
        
        This option is ignored. [locator.isHidden()](/docs/api/class-locator#locator-is-hidden) does not wait for the element to become hidden and returns immediately.
        

**Returns**

-   [Promise](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise "Promise")<[boolean](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Boolean_type "Boolean")\>[#](#locator-is-hidden-return)

* * *

### isVisible[​](#locator-is-visible "Direct link to isVisible")

Added in: v1.14 locator.isVisible

Returns whether the element is [visible](/docs/actionability#visible).

Asserting visibility

If you need to assert that element is visible, prefer [expect(locator).toBeVisible()](/docs/api/class-locatorassertions#locator-assertions-to-be-visible) to avoid flakiness. See [assertions guide](/docs/test-assertions) for more details.

**Usage**

```
const visible = await page.getByRole('button').isVisible();
```

**Arguments**

-   `options` [Object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object "Object") _(optional)_
    -   `timeout` [number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type "Number") _(optional)_[#](#locator-is-visible-option-timeout)
        
        Deprecated
        
        This option is ignored. [locator.isVisible()](/docs/api/class-locator#locator-is-visible) does not wait for the element to become visible and returns immediately.
        

**Returns**

-   [Promise](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise "Promise")<[boolean](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Boolean_type "Boolean")\>[#](#locator-is-visible-return)

* * *

### last[​](#locator-last "Direct link to last")

Added in: v1.14 locator.last

Returns locator to the last matching element.

**Usage**

```
const banana = await page.getByRole('listitem').last();
```

**Returns**

-   [Locator](/docs/api/class-locator "Locator")[#](#locator-last-return)

* * *

### locator[​](#locator-locator "Direct link to locator")

Added in: v1.14 locator.locator

The method finds an element matching the specified selector in the locator's subtree. It also accepts filter options, similar to [locator.filter()](/docs/api/class-locator#locator-filter) method.

[Learn more about locators](/docs/locators).

**Usage**

```
locator.locator(selectorOrLocator);locator.locator(selectorOrLocator, options);
```

**Arguments**

-   `selectorOrLocator` [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type "string") | [Locator](/docs/api/class-locator "Locator")[#](#locator-locator-option-selector-or-locator)
    
    A selector or locator to use when resolving DOM element.
    
-   `options` [Object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object "Object") _(optional)_
    
    -   `has` [Locator](/docs/api/class-locator "Locator") _(optional)_[#](#locator-locator-option-has)
        
        Narrows down the results of the method to those which contain elements matching this relative locator. For example, `article` that has `text=Playwright` matches `<article><div>Playwright</div></article>`.
        
        Inner locator **must be relative** to the outer locator and is queried starting with the outer locator match, not the document root. For example, you can find `content` that has `div` in `<article><content><div>Playwright</div></content></article>`. However, looking for `content` that has `article div` will fail, because the inner locator must be relative and should not use any elements outside the `content`.
        
        Note that outer and inner locators must belong to the same frame. Inner locator must not contain [FrameLocator](/docs/api/class-framelocator "FrameLocator")s.
        
    -   `hasNot` [Locator](/docs/api/class-locator "Locator") _(optional)_ Added in: v1.33[#](#locator-locator-option-has-not)
        
        Matches elements that do not contain an element that matches an inner locator. Inner locator is queried against the outer one. For example, `article` that does not have `div` matches `<article><span>Playwright</span></article>`.
        
        Note that outer and inner locators must belong to the same frame. Inner locator must not contain [FrameLocator](/docs/api/class-framelocator "FrameLocator")s.
        
    -   `hasNotText` [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type "string") | [RegExp](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp "RegExp") _(optional)_ Added in: v1.33[#](#locator-locator-option-has-not-text)
        
        Matches elements that do not contain specified text somewhere inside, possibly in a child or a descendant element. When passed a [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type "string"), matching is case-insensitive and searches for a substring.
        
    -   `hasText` [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type "string") | [RegExp](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp "RegExp") _(optional)_[#](#locator-locator-option-has-text)
        
        Matches elements containing specified text somewhere inside, possibly in a child or a descendant element. When passed a [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type "string"), matching is case-insensitive and searches for a substring. For example, `"Playwright"` matches `<article><div>Playwright</div></article>`.
        

**Returns**

-   [Locator](/docs/api/class-locator "Locator")[#](#locator-locator-return)

* * *

### nth[​](#locator-nth "Direct link to nth")

Added in: v1.14 locator.nth

Returns locator to the n-th matching element. It's zero based, `nth(0)` selects the first element.

**Usage**

```
const banana = await page.getByRole('listitem').nth(2);
```

**Arguments**

-   `index` [number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type "Number")[#](#locator-nth-option-index)

**Returns**

-   [Locator](/docs/api/class-locator "Locator")[#](#locator-nth-return)

* * *

### or[​](#locator-or "Direct link to or")

Added in: v1.33 locator.or

Creates a locator matching all elements that match one or both of the two locators.

Note that when both locators match something, the resulting locator will have multiple matches, potentially causing a [locator strictness](/docs/locators#strictness) violation.

**Usage**

Consider a scenario where you'd like to click on a "New email" button, but sometimes a security settings dialog shows up instead. In this case, you can wait for either a "New email" button, or a dialog and act accordingly.

note

If both "New email" button and security dialog appear on screen, the "or" locator will match both of them, possibly throwing the ["strict mode violation" error](/docs/locators#strictness). In this case, you can use [locator.first()](/docs/api/class-locator#locator-first) to only match one of them.

```
const newEmail = page.getByRole('button', { name: 'New' });const dialog = page.getByText('Confirm security settings');await expect(newEmail.or(dialog).first()).toBeVisible();if (await dialog.isVisible())  await page.getByRole('button', { name: 'Dismiss' }).click();await newEmail.click();
```

**Arguments**

-   `locator` [Locator](/docs/api/class-locator "Locator")[#](#locator-or-option-locator)
    
    Alternative locator to match.
    

**Returns**

-   [Locator](/docs/api/class-locator "Locator")[#](#locator-or-return)

* * *

### page[​](#locator-page "Direct link to page")

Added in: v1.19 locator.page

A page this locator belongs to.

**Usage**

```
locator.page();
```

**Returns**

-   [Page](/docs/api/class-page "Page")[#](#locator-page-return)

* * *

### press[​](#locator-press "Direct link to press")

Added in: v1.14 locator.press

Focuses the matching element and presses a combination of the keys.

**Usage**

```
await page.getByRole('textbox').press('Backspace');
```

**Arguments**

-   `key` [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type "string")[#](#locator-press-option-key)
    
    Name of the key to press or a character to generate, such as `ArrowLeft` or `a`.
    
-   `options` [Object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object "Object") _(optional)_
    
    -   `delay` [number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type "Number") _(optional)_[#](#locator-press-option-delay)
        
        Time to wait between `keydown` and `keyup` in milliseconds. Defaults to 0.
        
    -   `noWaitAfter` [boolean](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Boolean_type "Boolean") _(optional)_[#](#locator-press-option-no-wait-after)
        
        Deprecated
        
        This option will default to `true` in the future.
        
        Actions that initiate navigations are waiting for these navigations to happen and for pages to start loading. You can opt out of waiting via setting this flag. You would only need this option in the exceptional cases such as navigating to inaccessible pages. Defaults to `false`.
        
    -   `timeout` [number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type "Number") _(optional)_[#](#locator-press-option-timeout)
        
        Maximum time in milliseconds. Defaults to `0` - no timeout. The default value can be changed via `actionTimeout` option in the config, or by using the [browserContext.setDefaultTimeout()](/docs/api/class-browsercontext#browser-context-set-default-timeout) or [page.setDefaultTimeout()](/docs/api/class-page#page-set-default-timeout) methods.
        

**Returns**

-   [Promise](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise "Promise")<[void](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/undefined "void")\>[#](#locator-press-return)

**Details**

Focuses the element, and then uses [keyboard.down()](/docs/api/class-keyboard#keyboard-down) and [keyboard.up()](/docs/api/class-keyboard#keyboard-up).

[key](/docs/api/class-locator#locator-press-option-key) can specify the intended [keyboardEvent.key](https://developer.mozilla.org/en-US/docs/Web/API/KeyboardEvent/key) value or a single character to generate the text for. A superset of the [key](/docs/api/class-locator#locator-press-option-key) values can be found [here](https://developer.mozilla.org/en-US/docs/Web/API/KeyboardEvent/key/Key_Values). Examples of the keys are:

`F1` - `F12`, `Digit0`\- `Digit9`, `KeyA`\- `KeyZ`, `Backquote`, `Minus`, `Equal`, `Backslash`, `Backspace`, `Tab`, `Delete`, `Escape`, `ArrowDown`, `End`, `Enter`, `Home`, `Insert`, `PageDown`, `PageUp`, `ArrowRight`, `ArrowUp`, etc.

Following modification shortcuts are also supported: `Shift`, `Control`, `Alt`, `Meta`, `ShiftLeft`, `ControlOrMeta`. `ControlOrMeta` resolves to `Control` on Windows and Linux and to `Meta` on macOS.

Holding down `Shift` will type the text that corresponds to the [key](/docs/api/class-locator#locator-press-option-key) in the upper case.

If [key](/docs/api/class-locator#locator-press-option-key) is a single character, it is case-sensitive, so the values `a` and `A` will generate different respective texts.

Shortcuts such as `key: "Control+o"`, `key: "Control++` or `key: "Control+Shift+T"` are supported as well. When specified with the modifier, modifier is pressed and being held while the subsequent key is being pressed.

* * *

### pressSequentially[​](#locator-press-sequentially "Direct link to pressSequentially")

Added in: v1.38 locator.pressSequentially

tip

In most cases, you should use [locator.fill()](/docs/api/class-locator#locator-fill) instead. You only need to press keys one by one if there is special keyboard handling on the page.

Focuses the element, and then sends a `keydown`, `keypress`/`input`, and `keyup` event for each character in the text.

To press a special key, like `Control` or `ArrowDown`, use [locator.press()](/docs/api/class-locator#locator-press).

**Usage**

```
await locator.pressSequentially('Hello'); // Types instantlyawait locator.pressSequentially('World', { delay: 100 }); // Types slower, like a user
```

An example of typing into a text field and then submitting the form:

```
const locator = page.getByLabel('Password');await locator.pressSequentially('my password');await locator.press('Enter');
```

**Arguments**

-   `text` [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type "string")[#](#locator-press-sequentially-option-text)
    
    String of characters to sequentially press into a focused element.
    
-   `options` [Object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object "Object") _(optional)_
    
    -   `delay` [number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type "Number") _(optional)_[#](#locator-press-sequentially-option-delay)
        
        Time to wait between key presses in milliseconds. Defaults to 0.
        
    -   `noWaitAfter` [boolean](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Boolean_type "Boolean") _(optional)_[#](#locator-press-sequentially-option-no-wait-after)
        
        Deprecated
        
        This option has no effect.
        
        This option has no effect.
        
    -   `timeout` [number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type "Number") _(optional)_[#](#locator-press-sequentially-option-timeout)
        
        Maximum time in milliseconds. Defaults to `0` - no timeout. The default value can be changed via `actionTimeout` option in the config, or by using the [browserContext.setDefaultTimeout()](/docs/api/class-browsercontext#browser-context-set-default-timeout) or [page.setDefaultTimeout()](/docs/api/class-page#page-set-default-timeout) methods.
        

**Returns**

-   [Promise](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise "Promise")<[void](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/undefined "void")\>[#](#locator-press-sequentially-return)

* * *

### screenshot[​](#locator-screenshot "Direct link to screenshot")

Added in: v1.14 locator.screenshot

Take a screenshot of the element matching the locator.

**Usage**

```
await page.getByRole('link').screenshot();
```

Disable animations and save screenshot to a file:

```
await page.getByRole('link').screenshot({ animations: 'disabled', path: 'link.png' });
```

**Arguments**

-   `options` [Object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object "Object") _(optional)_
    -   `animations` "disabled" | "allow" _(optional)_[#](#locator-screenshot-option-animations)
        
        When set to `"disabled"`, stops CSS animations, CSS transitions and Web Animations. Animations get different treatment depending on their duration:
        
        -   finite animations are fast-forwarded to completion, so they'll fire `transitionend` event.
        -   infinite animations are canceled to initial state, and then played over after the screenshot.
        
        Defaults to `"allow"` that leaves animations untouched.
        
    -   `caret` "hide" | "initial" _(optional)_[#](#locator-screenshot-option-caret)
        
        When set to `"hide"`, screenshot will hide text caret. When set to `"initial"`, text caret behavior will not be changed. Defaults to `"hide"`.
        
    -   `mask` [Array](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array "Array")<[Locator](/docs/api/class-locator "Locator")\> _(optional)_[#](#locator-screenshot-option-mask)
        
        Specify locators that should be masked when the screenshot is taken. Masked elements will be overlaid with a pink box `#FF00FF` (customized by [maskColor](/docs/api/class-locator#locator-screenshot-option-mask-color)) that completely covers its bounding box. The mask is also applied to invisible elements, see [Matching only visible elements](/docs/locators#matching-only-visible-elements) to disable that.
        
    -   `maskColor` [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type "string") _(optional)_ Added in: v1.35[#](#locator-screenshot-option-mask-color)
        
        Specify the color of the overlay box for masked elements, in [CSS color format](https://developer.mozilla.org/en-US/docs/Web/CSS/color_value). Default color is pink `#FF00FF`.
        
    -   `omitBackground` [boolean](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Boolean_type "Boolean") _(optional)_[#](#locator-screenshot-option-omit-background)
        
        Hides default white background and allows capturing screenshots with transparency. Not applicable to `jpeg` images. Defaults to `false`.
        
    -   `path` [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type "string") _(optional)_[#](#locator-screenshot-option-path)
        
        The file path to save the image to. The screenshot type will be inferred from file extension. If [path](/docs/api/class-locator#locator-screenshot-option-path) is a relative path, then it is resolved relative to the current working directory. If no path is provided, the image won't be saved to the disk.
        
    -   `quality` [number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type "Number") _(optional)_[#](#locator-screenshot-option-quality)
        
        The quality of the image, between 0-100. Not applicable to `png` images.
        
    -   `scale` "css" | "device" _(optional)_[#](#locator-screenshot-option-scale)
        
        When set to `"css"`, screenshot will have a single pixel per each css pixel on the page. For high-dpi devices, this will keep screenshots small. Using `"device"` option will produce a single pixel per each device pixel, so screenshots of high-dpi devices will be twice as large or even larger.
        
        Defaults to `"device"`.
        
    -   `style` [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type "string") _(optional)_ Added in: v1.41[#](#locator-screenshot-option-style)
        
        Text of the stylesheet to apply while making the screenshot. This is where you can hide dynamic elements, make elements invisible or change their properties to help you creating repeatable screenshots. This stylesheet pierces the Shadow DOM and applies to the inner frames.
        
    -   `timeout` [number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type "Number") _(optional)_[#](#locator-screenshot-option-timeout)
        
        Maximum time in milliseconds. Defaults to `0` - no timeout. The default value can be changed via `actionTimeout` option in the config, or by using the [browserContext.setDefaultTimeout()](/docs/api/class-browsercontext#browser-context-set-default-timeout) or [page.setDefaultTimeout()](/docs/api/class-page#page-set-default-timeout) methods.
        
    -   `type` "png" | "jpeg" _(optional)_[#](#locator-screenshot-option-type)
        
        Specify screenshot type, defaults to `png`.
        

**Returns**

-   [Promise](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise "Promise")<[Buffer](https://nodejs.org/api/buffer.html#buffer_class_buffer "Buffer")\>[#](#locator-screenshot-return)

**Details**

This method captures a screenshot of the page, clipped to the size and position of a particular element matching the locator. If the element is covered by other elements, it will not be actually visible on the screenshot. If the element is a scrollable container, only the currently scrolled content will be visible on the screenshot.

This method waits for the [actionability](/docs/actionability) checks, then scrolls element into view before taking a screenshot. If the element is detached from DOM, the method throws an error.

Returns the buffer with the captured screenshot.

* * *

### scrollIntoViewIfNeeded[​](#locator-scroll-into-view-if-needed "Direct link to scrollIntoViewIfNeeded")

Added in: v1.14 locator.scrollIntoViewIfNeeded

This method waits for [actionability](/docs/actionability) checks, then tries to scroll element into view, unless it is completely visible as defined by [IntersectionObserver](https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API)'s `ratio`.

See [scrolling](/docs/input#scrolling) for alternative ways to scroll.

**Usage**

```
await locator.scrollIntoViewIfNeeded();await locator.scrollIntoViewIfNeeded(options);
```

**Arguments**

-   `options` [Object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object "Object") _(optional)_
    -   `timeout` [number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type "Number") _(optional)_[#](#locator-scroll-into-view-if-needed-option-timeout)
        
        Maximum time in milliseconds. Defaults to `0` - no timeout. The default value can be changed via `actionTimeout` option in the config, or by using the [browserContext.setDefaultTimeout()](/docs/api/class-browsercontext#browser-context-set-default-timeout) or [page.setDefaultTimeout()](/docs/api/class-page#page-set-default-timeout) methods.
        

**Returns**

-   [Promise](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise "Promise")<[void](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/undefined "void")\>[#](#locator-scroll-into-view-if-needed-return)

* * *

### selectOption[​](#locator-select-option "Direct link to selectOption")

Added in: v1.14 locator.selectOption

Selects option or options in `<select>`.

**Usage**

```
<select multiple>  <option value="red">Red</option>  <option value="green">Green</option>  <option value="blue">Blue</option></select>
```

```
// single selection matching the value or labelelement.selectOption('blue');// single selection matching the labelelement.selectOption({ label: 'Blue' });// multiple selection for red, green and blue optionselement.selectOption(['red', 'green', 'blue']);
```

**Arguments**

-   `values` [null](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/null "null") | [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type "string") | [ElementHandle](/docs/api/class-elementhandle "ElementHandle") | [Array](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array "Array")<[string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type "string")\> | [Object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object "Object") | [Array](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array "Array")<[ElementHandle](/docs/api/class-elementhandle "ElementHandle")\> | [Array](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array "Array")<[Object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object "Object")\>[#](#locator-select-option-option-values)
    
    -   `value` [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type "string") _(optional)_
        
        Matches by `option.value`. Optional.
        
    -   `label` [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type "string") _(optional)_
        
        Matches by `option.label`. Optional.
        
    -   `index` [number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type "Number") _(optional)_
        
        Matches by the index. Optional.
        
    
    Options to select. If the `<select>` has the `multiple` attribute, all matching options are selected, otherwise only the first option matching one of the passed options is selected. String values are matching both values and labels. Option is considered matching if all specified properties match.
    
-   `options` [Object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object "Object") _(optional)_
    
    -   `force` [boolean](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Boolean_type "Boolean") _(optional)_[#](#locator-select-option-option-force)
        
        Whether to bypass the [actionability](/docs/actionability) checks. Defaults to `false`.
        
    -   `noWaitAfter` [boolean](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Boolean_type "Boolean") _(optional)_[#](#locator-select-option-option-no-wait-after)
        
        Deprecated
        
        This option has no effect.
        
        This option has no effect.
        
    -   `timeout` [number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type "Number") _(optional)_[#](#locator-select-option-option-timeout)
        
        Maximum time in milliseconds. Defaults to `0` - no timeout. The default value can be changed via `actionTimeout` option in the config, or by using the [browserContext.setDefaultTimeout()](/docs/api/class-browsercontext#browser-context-set-default-timeout) or [page.setDefaultTimeout()](/docs/api/class-page#page-set-default-timeout) methods.
        

**Returns**

-   [Promise](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise "Promise")<[Array](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array "Array")<[string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type "string")\>>[#](#locator-select-option-return)

**Details**

This method waits for [actionability](/docs/actionability) checks, waits until all specified options are present in the `<select>` element and selects these options.

If the target element is not a `<select>` element, this method throws an error. However, if the element is inside the `<label>` element that has an associated [control](https://developer.mozilla.org/en-US/docs/Web/API/HTMLLabelElement/control), the control will be used instead.

Returns the array of option values that have been successfully selected.

Triggers a `change` and `input` event once all the provided options have been selected.

* * *

### selectText[​](#locator-select-text "Direct link to selectText")

Added in: v1.14 locator.selectText

This method waits for [actionability](/docs/actionability) checks, then focuses the element and selects all its text content.

If the element is inside the `<label>` element that has an associated [control](https://developer.mozilla.org/en-US/docs/Web/API/HTMLLabelElement/control), focuses and selects text in the control instead.

**Usage**

```
await locator.selectText();await locator.selectText(options);
```

**Arguments**

-   `options` [Object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object "Object") _(optional)_
    -   `force` [boolean](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Boolean_type "Boolean") _(optional)_[#](#locator-select-text-option-force)
        
        Whether to bypass the [actionability](/docs/actionability) checks. Defaults to `false`.
        
    -   `timeout` [number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type "Number") _(optional)_[#](#locator-select-text-option-timeout)
        
        Maximum time in milliseconds. Defaults to `0` - no timeout. The default value can be changed via `actionTimeout` option in the config, or by using the [browserContext.setDefaultTimeout()](/docs/api/class-browsercontext#browser-context-set-default-timeout) or [page.setDefaultTimeout()](/docs/api/class-page#page-set-default-timeout) methods.
        

**Returns**

-   [Promise](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise "Promise")<[void](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/undefined "void")\>[#](#locator-select-text-return)

* * *

### setChecked[​](#locator-set-checked "Direct link to setChecked")

Added in: v1.15 locator.setChecked

Set the state of a checkbox or a radio element.

**Usage**

```
await page.getByRole('checkbox').setChecked(true);
```

**Arguments**

-   `checked` [boolean](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Boolean_type "Boolean")[#](#locator-set-checked-option-checked)
    
    Whether to check or uncheck the checkbox.
    
-   `options` [Object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object "Object") _(optional)_
    
    -   `force` [boolean](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Boolean_type "Boolean") _(optional)_[#](#locator-set-checked-option-force)
        
        Whether to bypass the [actionability](/docs/actionability) checks. Defaults to `false`.
        
    -   `noWaitAfter` [boolean](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Boolean_type "Boolean") _(optional)_[#](#locator-set-checked-option-no-wait-after)
        
        Deprecated
        
        This option has no effect.
        
        This option has no effect.
        
    -   `position` [Object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object "Object") _(optional)_[#](#locator-set-checked-option-position)
        
        -   `x` [number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type "Number")
            
        -   `y` [number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type "Number")
            
        
        A point to use relative to the top-left corner of element padding box. If not specified, uses some visible point of the element.
        
    -   `timeout` [number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type "Number") _(optional)_[#](#locator-set-checked-option-timeout)
        
        Maximum time in milliseconds. Defaults to `0` - no timeout. The default value can be changed via `actionTimeout` option in the config, or by using the [browserContext.setDefaultTimeout()](/docs/api/class-browsercontext#browser-context-set-default-timeout) or [page.setDefaultTimeout()](/docs/api/class-page#page-set-default-timeout) methods.
        
    -   `trial` [boolean](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Boolean_type "Boolean") _(optional)_[#](#locator-set-checked-option-trial)
        
        When set, this method only performs the [actionability](/docs/actionability) checks and skips the action. Defaults to `false`. Useful to wait until the element is ready for the action without performing it.
        

**Returns**

-   [Promise](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise "Promise")<[void](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/undefined "void")\>[#](#locator-set-checked-return)

**Details**

This method checks or unchecks an element by performing the following steps:

1.  Ensure that matched element is a checkbox or a radio input. If not, this method throws.
2.  If the element already has the right checked state, this method returns immediately.
3.  Wait for [actionability](/docs/actionability) checks on the matched element, unless [force](/docs/api/class-locator#locator-set-checked-option-force) option is set. If the element is detached during the checks, the whole action is retried.
4.  Scroll the element into view if needed.
5.  Use [page.mouse](/docs/api/class-page#page-mouse) to click in the center of the element.
6.  Ensure that the element is now checked or unchecked. If not, this method throws.

When all steps combined have not finished during the specified [timeout](/docs/api/class-locator#locator-set-checked-option-timeout), this method throws a [TimeoutError](/docs/api/class-timeouterror "TimeoutError"). Passing zero timeout disables this.

* * *

### setInputFiles[​](#locator-set-input-files "Direct link to setInputFiles")

Added in: v1.14 locator.setInputFiles

Upload file or multiple files into `<input type=file>`. For inputs with a `[webkitdirectory]` attribute, only a single directory path is supported.

**Usage**

```
// Select one fileawait page.getByLabel('Upload file').setInputFiles(path.join(__dirname, 'myfile.pdf'));// Select multiple filesawait page.getByLabel('Upload files').setInputFiles([  path.join(__dirname, 'file1.txt'),  path.join(__dirname, 'file2.txt'),]);// Select a directoryawait page.getByLabel('Upload directory').setInputFiles(path.join(__dirname, 'mydir'));// Remove all the selected filesawait page.getByLabel('Upload file').setInputFiles([]);// Upload buffer from memoryawait page.getByLabel('Upload file').setInputFiles({  name: 'file.txt',  mimeType: 'text/plain',  buffer: Buffer.from('this is test')});
```

**Arguments**

-   `files` [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type "string") | [Array](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array "Array")<[string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type "string")\> | [Object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object "Object") | [Array](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array "Array")<[Object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object "Object")\>[#](#locator-set-input-files-option-files)
    -   `name` [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type "string")
        
        File name
        
    -   `mimeType` [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type "string")
        
        File type
        
    -   `buffer` [Buffer](https://nodejs.org/api/buffer.html#buffer_class_buffer "Buffer")
        
        File content
        
-   `options` [Object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object "Object") _(optional)_
    -   `noWaitAfter` [boolean](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Boolean_type "Boolean") _(optional)_[#](#locator-set-input-files-option-no-wait-after)
        
        Deprecated
        
        This option has no effect.
        
        This option has no effect.
        
    -   `timeout` [number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type "Number") _(optional)_[#](#locator-set-input-files-option-timeout)
        
        Maximum time in milliseconds. Defaults to `0` - no timeout. The default value can be changed via `actionTimeout` option in the config, or by using the [browserContext.setDefaultTimeout()](/docs/api/class-browsercontext#browser-context-set-default-timeout) or [page.setDefaultTimeout()](/docs/api/class-page#page-set-default-timeout) methods.
        

**Returns**

-   [Promise](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise "Promise")<[void](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/undefined "void")\>[#](#locator-set-input-files-return)

**Details**

Sets the value of the file input to these file paths or files. If some of the `filePaths` are relative paths, then they are resolved relative to the current working directory. For empty array, clears the selected files.

This method expects [Locator](/docs/api/class-locator "Locator") to point to an [input element](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input). However, if the element is inside the `<label>` element that has an associated [control](https://developer.mozilla.org/en-US/docs/Web/API/HTMLLabelElement/control), targets the control instead.

* * *

### tap[​](#locator-tap "Direct link to tap")

Added in: v1.14 locator.tap

Perform a tap gesture on the element matching the locator. For examples of emulating other gestures by manually dispatching touch events, see the [emulating legacy touch events](/docs/touch-events) page.

**Usage**

```
await locator.tap();await locator.tap(options);
```

**Arguments**

-   `options` [Object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object "Object") _(optional)_
    -   `force` [boolean](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Boolean_type "Boolean") _(optional)_[#](#locator-tap-option-force)
        
        Whether to bypass the [actionability](/docs/actionability) checks. Defaults to `false`.
        
    -   `modifiers` [Array](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array "Array")<"Alt" | "Control" | "ControlOrMeta" | "Meta" | "Shift"> _(optional)_[#](#locator-tap-option-modifiers)
        
        Modifier keys to press. Ensures that only these modifiers are pressed during the operation, and then restores current modifiers back. If not specified, currently pressed modifiers are used. "ControlOrMeta" resolves to "Control" on Windows and Linux and to "Meta" on macOS.
        
    -   `noWaitAfter` [boolean](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Boolean_type "Boolean") _(optional)_[#](#locator-tap-option-no-wait-after)
        
        Deprecated
        
        This option has no effect.
        
        This option has no effect.
        
    -   `position` [Object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object "Object") _(optional)_[#](#locator-tap-option-position)
        
        -   `x` [number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type "Number")
            
        -   `y` [number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type "Number")
            
        
        A point to use relative to the top-left corner of element padding box. If not specified, uses some visible point of the element.
        
    -   `timeout` [number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type "Number") _(optional)_[#](#locator-tap-option-timeout)
        
        Maximum time in milliseconds. Defaults to `0` - no timeout. The default value can be changed via `actionTimeout` option in the config, or by using the [browserContext.setDefaultTimeout()](/docs/api/class-browsercontext#browser-context-set-default-timeout) or [page.setDefaultTimeout()](/docs/api/class-page#page-set-default-timeout) methods.
        
    -   `trial` [boolean](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Boolean_type "Boolean") _(optional)_[#](#locator-tap-option-trial)
        
        When set, this method only performs the [actionability](/docs/actionability) checks and skips the action. Defaults to `false`. Useful to wait until the element is ready for the action without performing it. Note that keyboard `modifiers` will be pressed regardless of `trial` to allow testing elements which are only visible when those keys are pressed.
        

**Returns**

-   [Promise](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise "Promise")<[void](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/undefined "void")\>[#](#locator-tap-return)

**Details**

This method taps the element by performing the following steps:

1.  Wait for [actionability](/docs/actionability) checks on the element, unless [force](/docs/api/class-locator#locator-tap-option-force) option is set.
2.  Scroll the element into view if needed.
3.  Use [page.touchscreen](/docs/api/class-page#page-touchscreen) to tap the center of the element, or the specified [position](/docs/api/class-locator#locator-tap-option-position).

If the element is detached from the DOM at any moment during the action, this method throws.

When all steps combined have not finished during the specified [timeout](/docs/api/class-locator#locator-tap-option-timeout), this method throws a [TimeoutError](/docs/api/class-timeouterror "TimeoutError"). Passing zero timeout disables this.

note

`element.tap()` requires that the `hasTouch` option of the browser context be set to true.

* * *

### textContent[​](#locator-text-content "Direct link to textContent")

Added in: v1.14 locator.textContent

Returns the [`node.textContent`](https://developer.mozilla.org/en-US/docs/Web/API/Node/textContent).

Asserting text

If you need to assert text on the page, prefer [expect(locator).toHaveText()](/docs/api/class-locatorassertions#locator-assertions-to-have-text) to avoid flakiness. See [assertions guide](/docs/test-assertions) for more details.

**Usage**

```
await locator.textContent();await locator.textContent(options);
```

**Arguments**

-   `options` [Object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object "Object") _(optional)_
    -   `timeout` [number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type "Number") _(optional)_[#](#locator-text-content-option-timeout)
        
        Maximum time in milliseconds. Defaults to `0` - no timeout. The default value can be changed via `actionTimeout` option in the config, or by using the [browserContext.setDefaultTimeout()](/docs/api/class-browsercontext#browser-context-set-default-timeout) or [page.setDefaultTimeout()](/docs/api/class-page#page-set-default-timeout) methods.
        

**Returns**

-   [Promise](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise "Promise")<[null](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/null "null") | [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type "string")\>[#](#locator-text-content-return)

* * *

### toString[​](#locator-to-string "Direct link to toString")

Added in: v1.57 locator.toString

Returns a human-readable representation of the locator, using the [locator.description()](/docs/api/class-locator#locator-description) if one exists; otherwise, it generates a string based on the locator's selector.

**Usage**

```
locator.toString();
```

**Returns**

-   [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type "string")[#](#locator-to-string-return)

* * *

### uncheck[​](#locator-uncheck "Direct link to uncheck")

Added in: v1.14 locator.uncheck

Ensure that checkbox or radio element is unchecked.

**Usage**

```
await page.getByRole('checkbox').uncheck();
```

**Arguments**

-   `options` [Object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object "Object") _(optional)_
    -   `force` [boolean](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Boolean_type "Boolean") _(optional)_[#](#locator-uncheck-option-force)
        
        Whether to bypass the [actionability](/docs/actionability) checks. Defaults to `false`.
        
    -   `noWaitAfter` [boolean](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Boolean_type "Boolean") _(optional)_[#](#locator-uncheck-option-no-wait-after)
        
        Deprecated
        
        This option has no effect.
        
        This option has no effect.
        
    -   `position` [Object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object "Object") _(optional)_[#](#locator-uncheck-option-position)
        
        -   `x` [number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type "Number")
            
        -   `y` [number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type "Number")
            
        
        A point to use relative to the top-left corner of element padding box. If not specified, uses some visible point of the element.
        
    -   `timeout` [number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type "Number") _(optional)_[#](#locator-uncheck-option-timeout)
        
        Maximum time in milliseconds. Defaults to `0` - no timeout. The default value can be changed via `actionTimeout` option in the config, or by using the [browserContext.setDefaultTimeout()](/docs/api/class-browsercontext#browser-context-set-default-timeout) or [page.setDefaultTimeout()](/docs/api/class-page#page-set-default-timeout) methods.
        
    -   `trial` [boolean](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Boolean_type "Boolean") _(optional)_[#](#locator-uncheck-option-trial)
        
        When set, this method only performs the [actionability](/docs/actionability) checks and skips the action. Defaults to `false`. Useful to wait until the element is ready for the action without performing it.
        

**Returns**

-   [Promise](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise "Promise")<[void](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/undefined "void")\>[#](#locator-uncheck-return)

**Details**

This method unchecks the element by performing the following steps:

1.  Ensure that element is a checkbox or a radio input. If not, this method throws. If the element is already unchecked, this method returns immediately.
2.  Wait for [actionability](/docs/actionability) checks on the element, unless [force](/docs/api/class-locator#locator-uncheck-option-force) option is set.
3.  Scroll the element into view if needed.
4.  Use [page.mouse](/docs/api/class-page#page-mouse) to click in the center of the element.
5.  Ensure that the element is now unchecked. If not, this method throws.

If the element is detached from the DOM at any moment during the action, this method throws.

When all steps combined have not finished during the specified [timeout](/docs/api/class-locator#locator-uncheck-option-timeout), this method throws a [TimeoutError](/docs/api/class-timeouterror "TimeoutError"). Passing zero timeout disables this.

* * *

### waitFor[​](#locator-wait-for "Direct link to waitFor")

Added in: v1.16 locator.waitFor

Returns when element specified by locator satisfies the [state](/docs/api/class-locator#locator-wait-for-option-state) option.

If target element already satisfies the condition, the method returns immediately. Otherwise, waits for up to [timeout](/docs/api/class-locator#locator-wait-for-option-timeout) milliseconds until the condition is met.

**Usage**

```
const orderSent = page.locator('#order-sent');await orderSent.waitFor();
```

**Arguments**

-   `options` [Object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object "Object") _(optional)_
    -   `state` "attached" | "detached" | "visible" | "hidden" _(optional)_[#](#locator-wait-for-option-state)
        
        Defaults to `'visible'`. Can be either:
        
        -   `'attached'` - wait for element to be present in DOM.
        -   `'detached'` - wait for element to not be present in DOM.
        -   `'visible'` - wait for element to have non-empty bounding box and no `visibility:hidden`. Note that element without any content or with `display:none` has an empty bounding box and is not considered visible.
        -   `'hidden'` - wait for element to be either detached from DOM, or have an empty bounding box or `visibility:hidden`. This is opposite to the `'visible'` option.
    -   `timeout` [number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type "Number") _(optional)_[#](#locator-wait-for-option-timeout)
        
        Maximum time in milliseconds. Defaults to `0` - no timeout. The default value can be changed via `actionTimeout` option in the config, or by using the [browserContext.setDefaultTimeout()](/docs/api/class-browsercontext#browser-context-set-default-timeout) or [page.setDefaultTimeout()](/docs/api/class-page#page-set-default-timeout) methods.
        

**Returns**

-   [Promise](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise "Promise")<[void](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/undefined "void")\>[#](#locator-wait-for-return)

* * *

## Deprecated[​](#deprecated "Direct link to Deprecated")

### elementHandle[​](#locator-element-handle "Direct link to elementHandle")

Added in: v1.14 locator.elementHandle

Discouraged

Always prefer using [Locator](/docs/api/class-locator "Locator")s and web assertions over [ElementHandle](/docs/api/class-elementhandle "ElementHandle")s because latter are inherently racy.

Resolves given locator to the first matching DOM element. If there are no matching elements, waits for one. If multiple elements match the locator, throws.

**Usage**

```
await locator.elementHandle();await locator.elementHandle(options);
```

**Arguments**

-   `options` [Object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object "Object") _(optional)_
    -   `timeout` [number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type "Number") _(optional)_[#](#locator-element-handle-option-timeout)
        
        Maximum time in milliseconds. Defaults to `0` - no timeout. The default value can be changed via `actionTimeout` option in the config, or by using the [browserContext.setDefaultTimeout()](/docs/api/class-browsercontext#browser-context-set-default-timeout) or [page.setDefaultTimeout()](/docs/api/class-page#page-set-default-timeout) methods.
        

**Returns**

-   [Promise](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise "Promise")<[ElementHandle](/docs/api/class-elementhandle "ElementHandle")\>[#](#locator-element-handle-return)

* * *

### elementHandles[​](#locator-element-handles "Direct link to elementHandles")

Added in: v1.14 locator.elementHandles

Discouraged

Always prefer using [Locator](/docs/api/class-locator "Locator")s and web assertions over [ElementHandle](/docs/api/class-elementhandle "ElementHandle")s because latter are inherently racy.

Resolves given locator to all matching DOM elements. If there are no matching elements, returns an empty list.

**Usage**

```
await locator.elementHandles();
```

**Returns**

-   [Promise](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise "Promise")<[Array](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array "Array")<[ElementHandle](/docs/api/class-elementhandle "ElementHandle")\>>[#](#locator-element-handles-return)

* * *

### type[​](#locator-type "Direct link to type")

Added in: v1.14 locator.type

Deprecated

In most cases, you should use [locator.fill()](/docs/api/class-locator#locator-fill) instead. You only need to press keys one by one if there is special keyboard handling on the page - in this case use [locator.pressSequentially()](/docs/api/class-locator#locator-press-sequentially).

Focuses the element, and then sends a `keydown`, `keypress`/`input`, and `keyup` event for each character in the text.

To press a special key, like `Control` or `ArrowDown`, use [locator.press()](/docs/api/class-locator#locator-press).

**Usage**

**Arguments**

-   `text` [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type "string")[#](#locator-type-option-text)
    
    A text to type into a focused element.
    
-   `options` [Object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object "Object") _(optional)_
    
    -   `delay` [number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type "Number") _(optional)_[#](#locator-type-option-delay)
        
        Time to wait between key presses in milliseconds. Defaults to 0.
        
    -   `noWaitAfter` [boolean](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Boolean_type "Boolean") _(optional)_[#](#locator-type-option-no-wait-after)
        
        Deprecated
        
        This option has no effect.
        
        This option has no effect.
        
    -   `timeout` [number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type "Number") _(optional)_[#](#locator-type-option-timeout)
        
        Maximum time in milliseconds. Defaults to `0` - no timeout. The default value can be changed via `actionTimeout` option in the config, or by using the [browserContext.setDefaultTimeout()](/docs/api/class-browsercontext#browser-context-set-default-timeout) or [page.setDefaultTimeout()](/docs/api/class-page#page-set-default-timeout) methods.
        

**Returns**

-   [Promise](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise "Promise")<[void](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/undefined "void")\>[#](#locator-type-return)
