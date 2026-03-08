On this page

The [LocatorAssertions](/docs/api/class-locatorassertions "LocatorAssertions") class provides assertion methods that can be used to make assertions about the [Locator](/docs/api/class-locator "Locator") state in the tests.

```
import { test, expect } from '@playwright/test';test('status becomes submitted', async ({ page }) => {  // ...  await page.getByRole('button').click();  await expect(page.locator('.status')).toHaveText('Submitted');});
```

* * *

## Methods[​](#methods "Direct link to Methods")

### toBeAttached[​](#locator-assertions-to-be-attached "Direct link to toBeAttached")

Added in: v1.33 locatorAssertions.toBeAttached

Ensures that [Locator](/docs/api/class-locator "Locator") points to an element that is [connected](https://developer.mozilla.org/en-US/docs/Web/API/Node/isConnected) to a Document or a ShadowRoot.

**Usage**

```
await expect(page.getByText('Hidden text')).toBeAttached();
```

**Arguments**

-   `options` [Object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object "Object") _(optional)_
    -   `attached` [boolean](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Boolean_type "Boolean") _(optional)_[#](#locator-assertions-to-be-attached-option-attached)
        
    -   `timeout` [number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type "Number") _(optional)_[#](#locator-assertions-to-be-attached-option-timeout)
        
        Time to retry the assertion for in milliseconds. Defaults to `timeout` in `TestConfig.expect`.
        

**Returns**

-   [Promise](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise "Promise")<[void](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/undefined "void")\>[#](#locator-assertions-to-be-attached-return)

* * *

### toBeChecked[​](#locator-assertions-to-be-checked "Direct link to toBeChecked")

Added in: v1.20 locatorAssertions.toBeChecked

Ensures the [Locator](/docs/api/class-locator "Locator") points to a checked input.

**Usage**

```
const locator = page.getByLabel('Subscribe to newsletter');await expect(locator).toBeChecked();
```

**Arguments**

-   `options` [Object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object "Object") _(optional)_
    -   `checked` [boolean](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Boolean_type "Boolean") _(optional)_ Added in: v1.18[#](#locator-assertions-to-be-checked-option-checked)
        
        Provides state to assert for. Asserts for input to be checked by default. This option can't be used when [indeterminate](/docs/api/class-locatorassertions#locator-assertions-to-be-checked-option-indeterminate) is set to true.
        
    -   `indeterminate` [boolean](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Boolean_type "Boolean") _(optional)_ Added in: v1.50[#](#locator-assertions-to-be-checked-option-indeterminate)
        
        Asserts that the element is in the indeterminate (mixed) state. Only supported for checkboxes and radio buttons. This option can't be true when [checked](/docs/api/class-locatorassertions#locator-assertions-to-be-checked-option-checked) is provided.
        
    -   `timeout` [number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type "Number") _(optional)_ Added in: v1.18[#](#locator-assertions-to-be-checked-option-timeout)
        
        Time to retry the assertion for in milliseconds. Defaults to `timeout` in `TestConfig.expect`.
        

**Returns**

-   [Promise](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise "Promise")<[void](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/undefined "void")\>[#](#locator-assertions-to-be-checked-return)

* * *

### toBeDisabled[​](#locator-assertions-to-be-disabled "Direct link to toBeDisabled")

Added in: v1.20 locatorAssertions.toBeDisabled

Ensures the [Locator](/docs/api/class-locator "Locator") points to a disabled element. Element is disabled if it has "disabled" attribute or is disabled via ['aria-disabled'](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-disabled). Note that only native control elements such as HTML `button`, `input`, `select`, `textarea`, `option`, `optgroup` can be disabled by setting "disabled" attribute. "disabled" attribute on other elements is ignored by the browser.

**Usage**

```
const locator = page.locator('button.submit');await expect(locator).toBeDisabled();
```

**Arguments**

-   `options` [Object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object "Object") _(optional)_
    -   `timeout` [number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type "Number") _(optional)_ Added in: v1.18[#](#locator-assertions-to-be-disabled-option-timeout)
        
        Time to retry the assertion for in milliseconds. Defaults to `timeout` in `TestConfig.expect`.
        

**Returns**

-   [Promise](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise "Promise")<[void](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/undefined "void")\>[#](#locator-assertions-to-be-disabled-return)

* * *

### toBeEditable[​](#locator-assertions-to-be-editable "Direct link to toBeEditable")

Added in: v1.20 locatorAssertions.toBeEditable

Ensures the [Locator](/docs/api/class-locator "Locator") points to an editable element.

**Usage**

```
const locator = page.getByRole('textbox');await expect(locator).toBeEditable();
```

**Arguments**

-   `options` [Object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object "Object") _(optional)_
    -   `editable` [boolean](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Boolean_type "Boolean") _(optional)_ Added in: v1.26[#](#locator-assertions-to-be-editable-option-editable)
        
    -   `timeout` [number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type "Number") _(optional)_ Added in: v1.18[#](#locator-assertions-to-be-editable-option-timeout)
        
        Time to retry the assertion for in milliseconds. Defaults to `timeout` in `TestConfig.expect`.
        

**Returns**

-   [Promise](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise "Promise")<[void](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/undefined "void")\>[#](#locator-assertions-to-be-editable-return)

* * *

### toBeEmpty[​](#locator-assertions-to-be-empty "Direct link to toBeEmpty")

Added in: v1.20 locatorAssertions.toBeEmpty

Ensures the [Locator](/docs/api/class-locator "Locator") points to an empty editable element or to a DOM node that has no text.

**Usage**

```
const locator = page.locator('div.warning');await expect(locator).toBeEmpty();
```

**Arguments**

-   `options` [Object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object "Object") _(optional)_
    -   `timeout` [number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type "Number") _(optional)_ Added in: v1.18[#](#locator-assertions-to-be-empty-option-timeout)
        
        Time to retry the assertion for in milliseconds. Defaults to `timeout` in `TestConfig.expect`.
        

**Returns**

-   [Promise](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise "Promise")<[void](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/undefined "void")\>[#](#locator-assertions-to-be-empty-return)

* * *

### toBeEnabled[​](#locator-assertions-to-be-enabled "Direct link to toBeEnabled")

Added in: v1.20 locatorAssertions.toBeEnabled

Ensures the [Locator](/docs/api/class-locator "Locator") points to an enabled element.

**Usage**

```
const locator = page.locator('button.submit');await expect(locator).toBeEnabled();
```

**Arguments**

-   `options` [Object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object "Object") _(optional)_
    -   `enabled` [boolean](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Boolean_type "Boolean") _(optional)_ Added in: v1.26[#](#locator-assertions-to-be-enabled-option-enabled)
        
    -   `timeout` [number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type "Number") _(optional)_ Added in: v1.18[#](#locator-assertions-to-be-enabled-option-timeout)
        
        Time to retry the assertion for in milliseconds. Defaults to `timeout` in `TestConfig.expect`.
        

**Returns**

-   [Promise](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise "Promise")<[void](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/undefined "void")\>[#](#locator-assertions-to-be-enabled-return)

* * *

### toBeFocused[​](#locator-assertions-to-be-focused "Direct link to toBeFocused")

Added in: v1.20 locatorAssertions.toBeFocused

Ensures the [Locator](/docs/api/class-locator "Locator") points to a focused DOM node.

**Usage**

```
const locator = page.getByRole('textbox');await expect(locator).toBeFocused();
```

**Arguments**

-   `options` [Object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object "Object") _(optional)_
    -   `timeout` [number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type "Number") _(optional)_ Added in: v1.18[#](#locator-assertions-to-be-focused-option-timeout)
        
        Time to retry the assertion for in milliseconds. Defaults to `timeout` in `TestConfig.expect`.
        

**Returns**

-   [Promise](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise "Promise")<[void](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/undefined "void")\>[#](#locator-assertions-to-be-focused-return)

* * *

### toBeHidden[​](#locator-assertions-to-be-hidden "Direct link to toBeHidden")

Added in: v1.20 locatorAssertions.toBeHidden

Ensures that [Locator](/docs/api/class-locator "Locator") either does not resolve to any DOM node, or resolves to a [non-visible](/docs/actionability#visible) one.

**Usage**

```
const locator = page.locator('.my-element');await expect(locator).toBeHidden();
```

**Arguments**

-   `options` [Object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object "Object") _(optional)_
    -   `timeout` [number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type "Number") _(optional)_ Added in: v1.18[#](#locator-assertions-to-be-hidden-option-timeout)
        
        Time to retry the assertion for in milliseconds. Defaults to `timeout` in `TestConfig.expect`.
        

**Returns**

-   [Promise](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise "Promise")<[void](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/undefined "void")\>[#](#locator-assertions-to-be-hidden-return)

* * *

### toBeInViewport[​](#locator-assertions-to-be-in-viewport "Direct link to toBeInViewport")

Added in: v1.31 locatorAssertions.toBeInViewport

Ensures the [Locator](/docs/api/class-locator "Locator") points to an element that intersects viewport, according to the [intersection observer API](https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API).

**Usage**

```
const locator = page.getByRole('button');// Make sure at least some part of element intersects viewport.await expect(locator).toBeInViewport();// Make sure element is fully outside of viewport.await expect(locator).not.toBeInViewport();// Make sure that at least half of the element intersects viewport.await expect(locator).toBeInViewport({ ratio: 0.5 });
```

**Arguments**

-   `options` [Object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object "Object") _(optional)_
    -   `ratio` [number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type "Number") _(optional)_[#](#locator-assertions-to-be-in-viewport-option-ratio)
        
        The minimal ratio of the element to intersect viewport. If equals to `0`, then element should intersect viewport at any positive ratio. Defaults to `0`.
        
    -   `timeout` [number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type "Number") _(optional)_[#](#locator-assertions-to-be-in-viewport-option-timeout)
        
        Time to retry the assertion for in milliseconds. Defaults to `timeout` in `TestConfig.expect`.
        

**Returns**

-   [Promise](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise "Promise")<[void](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/undefined "void")\>[#](#locator-assertions-to-be-in-viewport-return)

* * *

### toBeVisible[​](#locator-assertions-to-be-visible "Direct link to toBeVisible")

Added in: v1.20 locatorAssertions.toBeVisible

Ensures that [Locator](/docs/api/class-locator "Locator") points to an attached and [visible](/docs/actionability#visible) DOM node.

To check that at least one element from the list is visible, use [locator.first()](/docs/api/class-locator#locator-first).

**Usage**

```
// A specific element is visible.await expect(page.getByText('Welcome')).toBeVisible();// At least one item in the list is visible.await expect(page.getByTestId('todo-item').first()).toBeVisible();// At least one of the two elements is visible, possibly both.await expect(    page.getByRole('button', { name: 'Sign in' })        .or(page.getByRole('button', { name: 'Sign up' }))        .first()).toBeVisible();
```

**Arguments**

-   `options` [Object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object "Object") _(optional)_
    -   `timeout` [number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type "Number") _(optional)_ Added in: v1.18[#](#locator-assertions-to-be-visible-option-timeout)
        
        Time to retry the assertion for in milliseconds. Defaults to `timeout` in `TestConfig.expect`.
        
    -   `visible` [boolean](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Boolean_type "Boolean") _(optional)_ Added in: v1.26[#](#locator-assertions-to-be-visible-option-visible)
        

**Returns**

-   [Promise](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise "Promise")<[void](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/undefined "void")\>[#](#locator-assertions-to-be-visible-return)

* * *

### toContainClass[​](#locator-assertions-to-contain-class "Direct link to toContainClass")

Added in: v1.52 locatorAssertions.toContainClass

Ensures the [Locator](/docs/api/class-locator "Locator") points to an element with given CSS classes. All classes from the asserted value, separated by spaces, must be present in the [Element.classList](https://developer.mozilla.org/en-US/docs/Web/API/Element/classList) in any order.

**Usage**

```
<div class='middle selected row' id='component'></div>
```

```
const locator = page.locator('#component');await expect(locator).toContainClass('middle selected row');await expect(locator).toContainClass('selected');await expect(locator).toContainClass('row middle');
```

When an array is passed, the method asserts that the list of elements located matches the corresponding list of expected class lists. Each element's class attribute is matched against the corresponding class in the array:

```
<div class='list'>  <div class='component inactive'></div>  <div class='component active'></div>  <div class='component inactive'></div></div>
```

```
const locator = page.locator('.list > .component');await expect(locator).toContainClass(['inactive', 'active', 'inactive']);
```

**Arguments**

-   `expected` [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type "string") | [Array](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array "Array")<[string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type "string")\>[#](#locator-assertions-to-contain-class-option-expected)
    
    A string containing expected class names, separated by spaces, or a list of such strings to assert multiple elements.
    
-   `options` [Object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object "Object") _(optional)_
    
    -   `timeout` [number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type "Number") _(optional)_[#](#locator-assertions-to-contain-class-option-timeout)
        
        Time to retry the assertion for in milliseconds. Defaults to `timeout` in `TestConfig.expect`.
        

**Returns**

-   [Promise](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise "Promise")<[void](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/undefined "void")\>[#](#locator-assertions-to-contain-class-return)

* * *

### toContainText[​](#locator-assertions-to-contain-text "Direct link to toContainText")

Added in: v1.20 locatorAssertions.toContainText

Ensures the [Locator](/docs/api/class-locator "Locator") points to an element that contains the given text. All nested elements will be considered when computing the text content of the element. You can use regular expressions for the value as well.

**Usage**

```
const locator = page.locator('.title');await expect(locator).toContainText('substring');await expect(locator).toContainText(/\d messages/);
```

If you pass an array as an expected value, the expectations are:

1.  Locator resolves to a list of elements.
2.  Elements from a **subset** of this list contain text from the expected array, respectively.
3.  The matching subset of elements has the same order as the expected array.
4.  Each text value from the expected array is matched by some element from the list.

For example, consider the following list:

```
<ul>  <li>Item Text 1</li>  <li>Item Text 2</li>  <li>Item Text 3</li></ul>
```

Let's see how we can use the assertion:

```
// ✓ Contains the right items in the right orderawait expect(page.locator('ul > li')).toContainText(['Text 1', 'Text 3']);// ✖ Wrong orderawait expect(page.locator('ul > li')).toContainText(['Text 3', 'Text 2']);// ✖ No item contains this textawait expect(page.locator('ul > li')).toContainText(['Some 33']);// ✖ Locator points to the outer list element, not to the list itemsawait expect(page.locator('ul')).toContainText(['Text 3']);
```

**Arguments**

-   `expected` [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type "string") | [RegExp](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp "RegExp") | [Array](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array "Array")<[string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type "string") | [RegExp](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp "RegExp")\> Added in: v1.18[#](#locator-assertions-to-contain-text-option-expected)
    
    Expected substring or RegExp or a list of those.
    
-   `options` [Object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object "Object") _(optional)_
    
    -   `ignoreCase` [boolean](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Boolean_type "Boolean") _(optional)_ Added in: v1.23[#](#locator-assertions-to-contain-text-option-ignore-case)
        
        Whether to perform case-insensitive match. [ignoreCase](/docs/api/class-locatorassertions#locator-assertions-to-contain-text-option-ignore-case) option takes precedence over the corresponding regular expression flag if specified.
        
    -   `timeout` [number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type "Number") _(optional)_ Added in: v1.18[#](#locator-assertions-to-contain-text-option-timeout)
        
        Time to retry the assertion for in milliseconds. Defaults to `timeout` in `TestConfig.expect`.
        
    -   `useInnerText` [boolean](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Boolean_type "Boolean") _(optional)_ Added in: v1.18[#](#locator-assertions-to-contain-text-option-use-inner-text)
        
        Whether to use `element.innerText` instead of `element.textContent` when retrieving DOM node text.
        

**Returns**

-   [Promise](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise "Promise")<[void](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/undefined "void")\>[#](#locator-assertions-to-contain-text-return)

**Details**

When `expected` parameter is a string, Playwright will normalize whitespaces and line breaks both in the actual text and in the expected string before matching. When regular expression is used, the actual text is matched as is.

* * *

### toHaveAccessibleDescription[​](#locator-assertions-to-have-accessible-description "Direct link to toHaveAccessibleDescription")

Added in: v1.44 locatorAssertions.toHaveAccessibleDescription

Ensures the [Locator](/docs/api/class-locator "Locator") points to an element with a given [accessible description](https://w3c.github.io/accname/#dfn-accessible-description).

**Usage**

```
const locator = page.getByTestId('save-button');await expect(locator).toHaveAccessibleDescription('Save results to disk');
```

**Arguments**

-   `description` [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type "string") | [RegExp](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp "RegExp")[#](#locator-assertions-to-have-accessible-description-option-description)
    
    Expected accessible description.
    
-   `options` [Object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object "Object") _(optional)_
    
    -   `ignoreCase` [boolean](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Boolean_type "Boolean") _(optional)_[#](#locator-assertions-to-have-accessible-description-option-ignore-case)
        
        Whether to perform case-insensitive match. [ignoreCase](/docs/api/class-locatorassertions#locator-assertions-to-have-accessible-description-option-ignore-case) option takes precedence over the corresponding regular expression flag if specified.
        
    -   `timeout` [number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type "Number") _(optional)_[#](#locator-assertions-to-have-accessible-description-option-timeout)
        
        Time to retry the assertion for in milliseconds. Defaults to `timeout` in `TestConfig.expect`.
        

**Returns**

-   [Promise](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise "Promise")<[void](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/undefined "void")\>[#](#locator-assertions-to-have-accessible-description-return)

* * *

### toHaveAccessibleErrorMessage[​](#locator-assertions-to-have-accessible-error-message "Direct link to toHaveAccessibleErrorMessage")

Added in: v1.50 locatorAssertions.toHaveAccessibleErrorMessage

Ensures the [Locator](/docs/api/class-locator "Locator") points to an element with a given [aria errormessage](https://w3c.github.io/aria/#aria-errormessage).

**Usage**

```
const locator = page.getByTestId('username-input');await expect(locator).toHaveAccessibleErrorMessage('Username is required.');
```

**Arguments**

-   `errorMessage` [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type "string") | [RegExp](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp "RegExp")[#](#locator-assertions-to-have-accessible-error-message-option-error-message)
    
    Expected accessible error message.
    
-   `options` [Object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object "Object") _(optional)_
    
    -   `ignoreCase` [boolean](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Boolean_type "Boolean") _(optional)_[#](#locator-assertions-to-have-accessible-error-message-option-ignore-case)
        
        Whether to perform case-insensitive match. [ignoreCase](/docs/api/class-locatorassertions#locator-assertions-to-have-accessible-error-message-option-ignore-case) option takes precedence over the corresponding regular expression flag if specified.
        
    -   `timeout` [number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type "Number") _(optional)_[#](#locator-assertions-to-have-accessible-error-message-option-timeout)
        
        Time to retry the assertion for in milliseconds. Defaults to `timeout` in `TestConfig.expect`.
        

**Returns**

-   [Promise](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise "Promise")<[void](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/undefined "void")\>[#](#locator-assertions-to-have-accessible-error-message-return)

* * *

### toHaveAccessibleName[​](#locator-assertions-to-have-accessible-name "Direct link to toHaveAccessibleName")

Added in: v1.44 locatorAssertions.toHaveAccessibleName

Ensures the [Locator](/docs/api/class-locator "Locator") points to an element with a given [accessible name](https://w3c.github.io/accname/#dfn-accessible-name).

**Usage**

```
const locator = page.getByTestId('save-button');await expect(locator).toHaveAccessibleName('Save to disk');
```

**Arguments**

-   `name` [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type "string") | [RegExp](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp "RegExp")[#](#locator-assertions-to-have-accessible-name-option-name)
    
    Expected accessible name.
    
-   `options` [Object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object "Object") _(optional)_
    
    -   `ignoreCase` [boolean](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Boolean_type "Boolean") _(optional)_[#](#locator-assertions-to-have-accessible-name-option-ignore-case)
        
        Whether to perform case-insensitive match. [ignoreCase](/docs/api/class-locatorassertions#locator-assertions-to-have-accessible-name-option-ignore-case) option takes precedence over the corresponding regular expression flag if specified.
        
    -   `timeout` [number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type "Number") _(optional)_[#](#locator-assertions-to-have-accessible-name-option-timeout)
        
        Time to retry the assertion for in milliseconds. Defaults to `timeout` in `TestConfig.expect`.
        

**Returns**

-   [Promise](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise "Promise")<[void](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/undefined "void")\>[#](#locator-assertions-to-have-accessible-name-return)

* * *

### toHaveAttribute(name, value)[​](#locator-assertions-to-have-attribute "Direct link to toHaveAttribute(name, value)")

Added in: v1.20 locatorAssertions.toHaveAttribute(name, value)

Ensures the [Locator](/docs/api/class-locator "Locator") points to an element with given attribute.

**Usage**

```
const locator = page.locator('input');await expect(locator).toHaveAttribute('type', 'text');
```

**Arguments**

-   `name` [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type "string") Added in: v1.18[#](#locator-assertions-to-have-attribute-option-name)
    
    Attribute name.
    
-   `value` [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type "string") | [RegExp](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp "RegExp") Added in: v1.18[#](#locator-assertions-to-have-attribute-option-value)
    
    Expected attribute value.
    
-   `options` [Object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object "Object") _(optional)_
    
    -   `ignoreCase` [boolean](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Boolean_type "Boolean") _(optional)_ Added in: v1.40[#](#locator-assertions-to-have-attribute-option-ignore-case)
        
        Whether to perform case-insensitive match. [ignoreCase](/docs/api/class-locatorassertions#locator-assertions-to-have-attribute-option-ignore-case) option takes precedence over the corresponding regular expression flag if specified.
        
    -   `timeout` [number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type "Number") _(optional)_ Added in: v1.18[#](#locator-assertions-to-have-attribute-option-timeout)
        
        Time to retry the assertion for in milliseconds. Defaults to `timeout` in `TestConfig.expect`.
        

**Returns**

-   [Promise](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise "Promise")<[void](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/undefined "void")\>[#](#locator-assertions-to-have-attribute-return)

* * *

### toHaveAttribute(name)[​](#locator-assertions-to-have-attribute-2 "Direct link to toHaveAttribute(name)")

Added in: v1.39 locatorAssertions.toHaveAttribute(name)

Ensures the [Locator](/docs/api/class-locator "Locator") points to an element with given attribute. The method will assert attribute presence.

```
const locator = page.locator('input');// Assert attribute existence.await expect(locator).toHaveAttribute('disabled');await expect(locator).not.toHaveAttribute('open');
```

**Usage**

```
await expect(locator).toHaveAttribute(name);await expect(locator).toHaveAttribute(name, options);
```

**Arguments**

-   `name` [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type "string")[#](#locator-assertions-to-have-attribute-2-option-name)
    
    Attribute name.
    
-   `options` [Object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object "Object") _(optional)_
    
    -   `timeout` [number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type "Number") _(optional)_[#](#locator-assertions-to-have-attribute-2-option-timeout)
        
        Time to retry the assertion for in milliseconds. Defaults to `timeout` in `TestConfig.expect`.
        

**Returns**

-   [Promise](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise "Promise")<[void](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/undefined "void")\>[#](#locator-assertions-to-have-attribute-2-return)

* * *

### toHaveClass[​](#locator-assertions-to-have-class "Direct link to toHaveClass")

Added in: v1.20 locatorAssertions.toHaveClass

Ensures the [Locator](/docs/api/class-locator "Locator") points to an element with given CSS classes. When a string is provided, it must fully match the element's `class` attribute. To match individual classes use [expect(locator).toContainClass()](/docs/api/class-locatorassertions#locator-assertions-to-contain-class).

**Usage**

```
<div class='middle selected row' id='component'></div>
```

```
const locator = page.locator('#component');await expect(locator).toHaveClass('middle selected row');await expect(locator).toHaveClass(/(^|\s)selected(\s|$)/);
```

When an array is passed, the method asserts that the list of elements located matches the corresponding list of expected class values. Each element's class attribute is matched against the corresponding string or regular expression in the array:

```
const locator = page.locator('.list > .component');await expect(locator).toHaveClass(['component', 'component selected', 'component']);
```

**Arguments**

-   `expected` [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type "string") | [RegExp](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp "RegExp") | [Array](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array "Array")<[string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type "string") | [RegExp](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp "RegExp")\> Added in: v1.18[#](#locator-assertions-to-have-class-option-expected)
    
    Expected class or RegExp or a list of those.
    
-   `options` [Object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object "Object") _(optional)_
    
    -   `timeout` [number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type "Number") _(optional)_ Added in: v1.18[#](#locator-assertions-to-have-class-option-timeout)
        
        Time to retry the assertion for in milliseconds. Defaults to `timeout` in `TestConfig.expect`.
        

**Returns**

-   [Promise](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise "Promise")<[void](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/undefined "void")\>[#](#locator-assertions-to-have-class-return)

* * *

### toHaveCount[​](#locator-assertions-to-have-count "Direct link to toHaveCount")

Added in: v1.20 locatorAssertions.toHaveCount

Ensures the [Locator](/docs/api/class-locator "Locator") resolves to an exact number of DOM nodes.

**Usage**

```
const list = page.locator('list > .component');await expect(list).toHaveCount(3);
```

**Arguments**

-   `count` [number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type "Number") Added in: v1.18[#](#locator-assertions-to-have-count-option-count)
    
    Expected count.
    
-   `options` [Object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object "Object") _(optional)_
    
    -   `timeout` [number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type "Number") _(optional)_ Added in: v1.18[#](#locator-assertions-to-have-count-option-timeout)
        
        Time to retry the assertion for in milliseconds. Defaults to `timeout` in `TestConfig.expect`.
        

**Returns**

-   [Promise](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise "Promise")<[void](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/undefined "void")\>[#](#locator-assertions-to-have-count-return)

* * *

### toHaveCSS[​](#locator-assertions-to-have-css "Direct link to toHaveCSS")

Added in: v1.20 locatorAssertions.toHaveCSS

Ensures the [Locator](/docs/api/class-locator "Locator") resolves to an element with the given computed CSS style.

**Usage**

```
const locator = page.getByRole('button');await expect(locator).toHaveCSS('display', 'flex');
```

**Arguments**

-   `name` [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type "string") Added in: v1.18[#](#locator-assertions-to-have-css-option-name)
    
    CSS property name.
    
-   `value` [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type "string") | [RegExp](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp "RegExp") Added in: v1.18[#](#locator-assertions-to-have-css-option-value)
    
    CSS property value.
    
-   `options` [Object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object "Object") _(optional)_
    
    -   `timeout` [number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type "Number") _(optional)_ Added in: v1.18[#](#locator-assertions-to-have-css-option-timeout)
        
        Time to retry the assertion for in milliseconds. Defaults to `timeout` in `TestConfig.expect`.
        

**Returns**

-   [Promise](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise "Promise")<[void](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/undefined "void")\>[#](#locator-assertions-to-have-css-return)

* * *

### toHaveId[​](#locator-assertions-to-have-id "Direct link to toHaveId")

Added in: v1.20 locatorAssertions.toHaveId

Ensures the [Locator](/docs/api/class-locator "Locator") points to an element with the given DOM Node ID.

**Usage**

```
const locator = page.getByRole('textbox');await expect(locator).toHaveId('lastname');
```

**Arguments**

-   `id` [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type "string") | [RegExp](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp "RegExp") Added in: v1.18[#](#locator-assertions-to-have-id-option-id)
    
    Element id.
    
-   `options` [Object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object "Object") _(optional)_
    
    -   `timeout` [number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type "Number") _(optional)_ Added in: v1.18[#](#locator-assertions-to-have-id-option-timeout)
        
        Time to retry the assertion for in milliseconds. Defaults to `timeout` in `TestConfig.expect`.
        

**Returns**

-   [Promise](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise "Promise")<[void](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/undefined "void")\>[#](#locator-assertions-to-have-id-return)

* * *

### toHaveJSProperty[​](#locator-assertions-to-have-js-property "Direct link to toHaveJSProperty")

Added in: v1.20 locatorAssertions.toHaveJSProperty

Ensures the [Locator](/docs/api/class-locator "Locator") points to an element with given JavaScript property. Note that this property can be of a primitive type as well as a plain serializable JavaScript object.

**Usage**

```
const locator = page.locator('.component');await expect(locator).toHaveJSProperty('loaded', true);
```

**Arguments**

-   `name` [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type "string") Added in: v1.18[#](#locator-assertions-to-have-js-property-option-name)
    
    Property name.
    
-   `value` [Object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object "Object") Added in: v1.18[#](#locator-assertions-to-have-js-property-option-value)
    
    Property value.
    
-   `options` [Object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object "Object") _(optional)_
    
    -   `timeout` [number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type "Number") _(optional)_ Added in: v1.18[#](#locator-assertions-to-have-js-property-option-timeout)
        
        Time to retry the assertion for in milliseconds. Defaults to `timeout` in `TestConfig.expect`.
        

**Returns**

-   [Promise](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise "Promise")<[void](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/undefined "void")\>[#](#locator-assertions-to-have-js-property-return)

* * *

### toHaveRole[​](#locator-assertions-to-have-role "Direct link to toHaveRole")

Added in: v1.44 locatorAssertions.toHaveRole

Ensures the [Locator](/docs/api/class-locator "Locator") points to an element with a given [ARIA role](https://www.w3.org/TR/wai-aria-1.2/#roles).

Note that role is matched as a string, disregarding the ARIA role hierarchy. For example, asserting a superclass role `"checkbox"` on an element with a subclass role `"switch"` will fail.

**Usage**

```
const locator = page.getByTestId('save-button');await expect(locator).toHaveRole('button');
```

**Arguments**

-   `role` "alert" | "alertdialog" | "application" | "article" | "banner" | "blockquote" | "button" | "caption" | "cell" | "checkbox" | "code" | "columnheader" | "combobox" | "complementary" | "contentinfo" | "definition" | "deletion" | "dialog" | "directory" | "document" | "emphasis" | "feed" | "figure" | "form" | "generic" | "grid" | "gridcell" | "group" | "heading" | "img" | "insertion" | "link" | "list" | "listbox" | "listitem" | "log" | "main" | "marquee" | "math" | "meter" | "menu" | "menubar" | "menuitem" | "menuitemcheckbox" | "menuitemradio" | "navigation" | "none" | "note" | "option" | "paragraph" | "presentation" | "progressbar" | "radio" | "radiogroup" | "region" | "row" | "rowgroup" | "rowheader" | "scrollbar" | "search" | "searchbox" | "separator" | "slider" | "spinbutton" | "status" | "strong" | "subscript" | "superscript" | "switch" | "tab" | "table" | "tablist" | "tabpanel" | "term" | "textbox" | "time" | "timer" | "toolbar" | "tooltip" | "tree" | "treegrid" | "treeitem"[#](#locator-assertions-to-have-role-option-role)
    
    Required aria role.
    
-   `options` [Object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object "Object") _(optional)_
    
    -   `timeout` [number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type "Number") _(optional)_[#](#locator-assertions-to-have-role-option-timeout)
        
        Time to retry the assertion for in milliseconds. Defaults to `timeout` in `TestConfig.expect`.
        

**Returns**

-   [Promise](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise "Promise")<[void](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/undefined "void")\>[#](#locator-assertions-to-have-role-return)

* * *

### toHaveScreenshot(name)[​](#locator-assertions-to-have-screenshot-1 "Direct link to toHaveScreenshot(name)")

Added in: v1.23 locatorAssertions.toHaveScreenshot(name)

This function will wait until two consecutive locator screenshots yield the same result, and then compare the last screenshot with the expectation.

**Usage**

```
const locator = page.getByRole('button');await expect(locator).toHaveScreenshot('image.png');
```

Note that screenshot assertions only work with Playwright test runner.

**Arguments**

-   `name` [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type "string") | [Array](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array "Array")<[string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type "string")\>[#](#locator-assertions-to-have-screenshot-1-option-name)
    
    Snapshot name.
    
-   `options` [Object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object "Object") _(optional)_
    
    -   `animations` "disabled" | "allow" _(optional)_[#](#locator-assertions-to-have-screenshot-1-option-animations)
        
        When set to `"disabled"`, stops CSS animations, CSS transitions and Web Animations. Animations get different treatment depending on their duration:
        
        -   finite animations are fast-forwarded to completion, so they'll fire `transitionend` event.
        -   infinite animations are canceled to initial state, and then played over after the screenshot.
        
        Defaults to `"disabled"` that disables animations.
        
    -   `caret` "hide" | "initial" _(optional)_[#](#locator-assertions-to-have-screenshot-1-option-caret)
        
        When set to `"hide"`, screenshot will hide text caret. When set to `"initial"`, text caret behavior will not be changed. Defaults to `"hide"`.
        
    -   `mask` [Array](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array "Array")<[Locator](/docs/api/class-locator "Locator")\> _(optional)_[#](#locator-assertions-to-have-screenshot-1-option-mask)
        
        Specify locators that should be masked when the screenshot is taken. Masked elements will be overlaid with a pink box `#FF00FF` (customized by [maskColor](/docs/api/class-locatorassertions#locator-assertions-to-have-screenshot-1-option-mask-color)) that completely covers its bounding box. The mask is also applied to invisible elements, see [Matching only visible elements](/docs/locators#matching-only-visible-elements) to disable that.
        
    -   `maskColor` [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type "string") _(optional)_ Added in: v1.35[#](#locator-assertions-to-have-screenshot-1-option-mask-color)
        
        Specify the color of the overlay box for masked elements, in [CSS color format](https://developer.mozilla.org/en-US/docs/Web/CSS/color_value). Default color is pink `#FF00FF`.
        
    -   `maxDiffPixelRatio` [number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type "Number") _(optional)_[#](#locator-assertions-to-have-screenshot-1-option-max-diff-pixel-ratio)
        
        An acceptable ratio of pixels that are different to the total amount of pixels, between `0` and `1`. Default is configurable with `TestConfig.expect`. Unset by default.
        
    -   `maxDiffPixels` [number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type "Number") _(optional)_[#](#locator-assertions-to-have-screenshot-1-option-max-diff-pixels)
        
        An acceptable amount of pixels that could be different. Default is configurable with `TestConfig.expect`. Unset by default.
        
    -   `omitBackground` [boolean](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Boolean_type "Boolean") _(optional)_[#](#locator-assertions-to-have-screenshot-1-option-omit-background)
        
        Hides default white background and allows capturing screenshots with transparency. Not applicable to `jpeg` images. Defaults to `false`.
        
    -   `scale` "css" | "device" _(optional)_[#](#locator-assertions-to-have-screenshot-1-option-scale)
        
        When set to `"css"`, screenshot will have a single pixel per each css pixel on the page. For high-dpi devices, this will keep screenshots small. Using `"device"` option will produce a single pixel per each device pixel, so screenshots of high-dpi devices will be twice as large or even larger.
        
        Defaults to `"css"`.
        
    -   `stylePath` [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type "string") | [Array](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array "Array")<[string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type "string")\> _(optional)_ Added in: v1.41[#](#locator-assertions-to-have-screenshot-1-option-style-path)
        
        File name containing the stylesheet to apply while making the screenshot. This is where you can hide dynamic elements, make elements invisible or change their properties to help you creating repeatable screenshots. This stylesheet pierces the Shadow DOM and applies to the inner frames.
        
    -   `threshold` [number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type "Number") _(optional)_[#](#locator-assertions-to-have-screenshot-1-option-threshold)
        
        An acceptable perceived color difference in the [YIQ color space](https://en.wikipedia.org/wiki/YIQ) between the same pixel in compared images, between zero (strict) and one (lax), default is configurable with `TestConfig.expect`. Defaults to `0.2`.
        
    -   `timeout` [number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type "Number") _(optional)_[#](#locator-assertions-to-have-screenshot-1-option-timeout)
        
        Time to retry the assertion for in milliseconds. Defaults to `timeout` in `TestConfig.expect`.
        

**Returns**

-   [Promise](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise "Promise")<[void](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/undefined "void")\>[#](#locator-assertions-to-have-screenshot-1-return)

* * *

### toHaveScreenshot(options)[​](#locator-assertions-to-have-screenshot-2 "Direct link to toHaveScreenshot(options)")

Added in: v1.23 locatorAssertions.toHaveScreenshot(options)

This function will wait until two consecutive locator screenshots yield the same result, and then compare the last screenshot with the expectation.

**Usage**

```
const locator = page.getByRole('button');await expect(locator).toHaveScreenshot();
```

Note that screenshot assertions only work with Playwright test runner.

**Arguments**

-   `options` [Object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object "Object") _(optional)_
    -   `animations` "disabled" | "allow" _(optional)_[#](#locator-assertions-to-have-screenshot-2-option-animations)
        
        When set to `"disabled"`, stops CSS animations, CSS transitions and Web Animations. Animations get different treatment depending on their duration:
        
        -   finite animations are fast-forwarded to completion, so they'll fire `transitionend` event.
        -   infinite animations are canceled to initial state, and then played over after the screenshot.
        
        Defaults to `"disabled"` that disables animations.
        
    -   `caret` "hide" | "initial" _(optional)_[#](#locator-assertions-to-have-screenshot-2-option-caret)
        
        When set to `"hide"`, screenshot will hide text caret. When set to `"initial"`, text caret behavior will not be changed. Defaults to `"hide"`.
        
    -   `mask` [Array](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array "Array")<[Locator](/docs/api/class-locator "Locator")\> _(optional)_[#](#locator-assertions-to-have-screenshot-2-option-mask)
        
        Specify locators that should be masked when the screenshot is taken. Masked elements will be overlaid with a pink box `#FF00FF` (customized by [maskColor](/docs/api/class-locatorassertions#locator-assertions-to-have-screenshot-2-option-mask-color)) that completely covers its bounding box. The mask is also applied to invisible elements, see [Matching only visible elements](/docs/locators#matching-only-visible-elements) to disable that.
        
    -   `maskColor` [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type "string") _(optional)_ Added in: v1.35[#](#locator-assertions-to-have-screenshot-2-option-mask-color)
        
        Specify the color of the overlay box for masked elements, in [CSS color format](https://developer.mozilla.org/en-US/docs/Web/CSS/color_value). Default color is pink `#FF00FF`.
        
    -   `maxDiffPixelRatio` [number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type "Number") _(optional)_[#](#locator-assertions-to-have-screenshot-2-option-max-diff-pixel-ratio)
        
        An acceptable ratio of pixels that are different to the total amount of pixels, between `0` and `1`. Default is configurable with `TestConfig.expect`. Unset by default.
        
    -   `maxDiffPixels` [number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type "Number") _(optional)_[#](#locator-assertions-to-have-screenshot-2-option-max-diff-pixels)
        
        An acceptable amount of pixels that could be different. Default is configurable with `TestConfig.expect`. Unset by default.
        
    -   `omitBackground` [boolean](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Boolean_type "Boolean") _(optional)_[#](#locator-assertions-to-have-screenshot-2-option-omit-background)
        
        Hides default white background and allows capturing screenshots with transparency. Not applicable to `jpeg` images. Defaults to `false`.
        
    -   `scale` "css" | "device" _(optional)_[#](#locator-assertions-to-have-screenshot-2-option-scale)
        
        When set to `"css"`, screenshot will have a single pixel per each css pixel on the page. For high-dpi devices, this will keep screenshots small. Using `"device"` option will produce a single pixel per each device pixel, so screenshots of high-dpi devices will be twice as large or even larger.
        
        Defaults to `"css"`.
        
    -   `stylePath` [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type "string") | [Array](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array "Array")<[string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type "string")\> _(optional)_ Added in: v1.41[#](#locator-assertions-to-have-screenshot-2-option-style-path)
        
        File name containing the stylesheet to apply while making the screenshot. This is where you can hide dynamic elements, make elements invisible or change their properties to help you creating repeatable screenshots. This stylesheet pierces the Shadow DOM and applies to the inner frames.
        
    -   `threshold` [number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type "Number") _(optional)_[#](#locator-assertions-to-have-screenshot-2-option-threshold)
        
        An acceptable perceived color difference in the [YIQ color space](https://en.wikipedia.org/wiki/YIQ) between the same pixel in compared images, between zero (strict) and one (lax), default is configurable with `TestConfig.expect`. Defaults to `0.2`.
        
    -   `timeout` [number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type "Number") _(optional)_[#](#locator-assertions-to-have-screenshot-2-option-timeout)
        
        Time to retry the assertion for in milliseconds. Defaults to `timeout` in `TestConfig.expect`.
        

**Returns**

-   [Promise](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise "Promise")<[void](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/undefined "void")\>[#](#locator-assertions-to-have-screenshot-2-return)

* * *

### toHaveText[​](#locator-assertions-to-have-text "Direct link to toHaveText")

Added in: v1.20 locatorAssertions.toHaveText

Ensures the [Locator](/docs/api/class-locator "Locator") points to an element with the given text. All nested elements will be considered when computing the text content of the element. You can use regular expressions for the value as well.

**Usage**

```
const locator = page.locator('.title');await expect(locator).toHaveText(/Welcome, Test User/);await expect(locator).toHaveText(/Welcome, .*/);
```

If you pass an array as an expected value, the expectations are:

1.  Locator resolves to a list of elements.
2.  The number of elements equals the number of expected values in the array.
3.  Elements from the list have text matching expected array values, one by one, in order.

For example, consider the following list:

```
<ul>  <li>Text 1</li>  <li>Text 2</li>  <li>Text 3</li></ul>
```

Let's see how we can use the assertion:

```
// ✓ Has the right items in the right orderawait expect(page.locator('ul > li')).toHaveText(['Text 1', 'Text 2', 'Text 3']);// ✖ Wrong orderawait expect(page.locator('ul > li')).toHaveText(['Text 3', 'Text 2', 'Text 1']);// ✖ Last item does not matchawait expect(page.locator('ul > li')).toHaveText(['Text 1', 'Text 2', 'Text']);// ✖ Locator points to the outer list element, not to the list itemsawait expect(page.locator('ul')).toHaveText(['Text 1', 'Text 2', 'Text 3']);
```

**Arguments**

-   `expected` [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type "string") | [RegExp](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp "RegExp") | [Array](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array "Array")<[string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type "string") | [RegExp](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp "RegExp")\> Added in: v1.18[#](#locator-assertions-to-have-text-option-expected)
    
    Expected string or RegExp or a list of those.
    
-   `options` [Object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object "Object") _(optional)_
    
    -   `ignoreCase` [boolean](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Boolean_type "Boolean") _(optional)_ Added in: v1.23[#](#locator-assertions-to-have-text-option-ignore-case)
        
        Whether to perform case-insensitive match. [ignoreCase](/docs/api/class-locatorassertions#locator-assertions-to-have-text-option-ignore-case) option takes precedence over the corresponding regular expression flag if specified.
        
    -   `timeout` [number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type "Number") _(optional)_ Added in: v1.18[#](#locator-assertions-to-have-text-option-timeout)
        
        Time to retry the assertion for in milliseconds. Defaults to `timeout` in `TestConfig.expect`.
        
    -   `useInnerText` [boolean](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Boolean_type "Boolean") _(optional)_ Added in: v1.18[#](#locator-assertions-to-have-text-option-use-inner-text)
        
        Whether to use `element.innerText` instead of `element.textContent` when retrieving DOM node text.
        

**Returns**

-   [Promise](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise "Promise")<[void](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/undefined "void")\>[#](#locator-assertions-to-have-text-return)

**Details**

When `expected` parameter is a string, Playwright will normalize whitespaces and line breaks both in the actual text and in the expected string before matching. When regular expression is used, the actual text is matched as is.

* * *

### toHaveValue[​](#locator-assertions-to-have-value "Direct link to toHaveValue")

Added in: v1.20 locatorAssertions.toHaveValue

Ensures the [Locator](/docs/api/class-locator "Locator") points to an element with the given input value. You can use regular expressions for the value as well.

**Usage**

```
const locator = page.locator('input[type=number]');await expect(locator).toHaveValue(/[0-9]/);
```

**Arguments**

-   `value` [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type "string") | [RegExp](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp "RegExp") Added in: v1.18[#](#locator-assertions-to-have-value-option-value)
    
    Expected value.
    
-   `options` [Object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object "Object") _(optional)_
    
    -   `timeout` [number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type "Number") _(optional)_ Added in: v1.18[#](#locator-assertions-to-have-value-option-timeout)
        
        Time to retry the assertion for in milliseconds. Defaults to `timeout` in `TestConfig.expect`.
        

**Returns**

-   [Promise](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise "Promise")<[void](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/undefined "void")\>[#](#locator-assertions-to-have-value-return)

* * *

### toHaveValues[​](#locator-assertions-to-have-values "Direct link to toHaveValues")

Added in: v1.23 locatorAssertions.toHaveValues

Ensures the [Locator](/docs/api/class-locator "Locator") points to multi-select/combobox (i.e. a `select` with the `multiple` attribute) and the specified values are selected.

**Usage**

For example, given the following element:

```
<select id="favorite-colors" multiple>  <option value="R">Red</option>  <option value="G">Green</option>  <option value="B">Blue</option></select>
```

```
const locator = page.locator('id=favorite-colors');await locator.selectOption(['R', 'G']);await expect(locator).toHaveValues([/R/, /G/]);
```

**Arguments**

-   `values` [Array](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array "Array")<[string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type "string") | [RegExp](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp "RegExp")\>[#](#locator-assertions-to-have-values-option-values)
    
    Expected options currently selected.
    
-   `options` [Object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object "Object") _(optional)_
    
    -   `timeout` [number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type "Number") _(optional)_[#](#locator-assertions-to-have-values-option-timeout)
        
        Time to retry the assertion for in milliseconds. Defaults to `timeout` in `TestConfig.expect`.
        

**Returns**

-   [Promise](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise "Promise")<[void](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/undefined "void")\>[#](#locator-assertions-to-have-values-return)

* * *

### toMatchAriaSnapshot(expected)[​](#locator-assertions-to-match-aria-snapshot "Direct link to toMatchAriaSnapshot(expected)")

Added in: v1.49 locatorAssertions.toMatchAriaSnapshot(expected)

Asserts that the target element matches the given [accessibility snapshot](/docs/aria-snapshots).

**Usage**

```
await page.goto('https://demo.playwright.dev/todomvc/');await expect(page.locator('body')).toMatchAriaSnapshot(`  - heading "todos"  - textbox "What needs to be done?"`);
```

**Arguments**

-   `expected` [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type "string")[#](#locator-assertions-to-match-aria-snapshot-option-expected)
-   `options` [Object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object "Object") _(optional)_
    -   `timeout` [number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type "Number") _(optional)_[#](#locator-assertions-to-match-aria-snapshot-option-timeout)
        
        Time to retry the assertion for in milliseconds. Defaults to `timeout` in `TestConfig.expect`.
        

**Returns**

-   [Promise](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise "Promise")<[void](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/undefined "void")\>[#](#locator-assertions-to-match-aria-snapshot-return)

* * *

### toMatchAriaSnapshot(options)[​](#locator-assertions-to-match-aria-snapshot-2 "Direct link to toMatchAriaSnapshot(options)")

Added in: v1.50 locatorAssertions.toMatchAriaSnapshot(options)

Asserts that the target element matches the given [accessibility snapshot](/docs/aria-snapshots).

Snapshot is stored in a separate `.aria.yml` file in a location configured by `expect.toMatchAriaSnapshot.pathTemplate` and/or `snapshotPathTemplate` properties in the configuration file.

**Usage**

```
await expect(page.locator('body')).toMatchAriaSnapshot();await expect(page.locator('body')).toMatchAriaSnapshot({ name: 'body.aria.yml' });
```

**Arguments**

-   `options` [Object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object "Object") _(optional)_
    -   `name` [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type "string") _(optional)_[#](#locator-assertions-to-match-aria-snapshot-2-option-name)
        
        Name of the snapshot to store in the snapshot folder corresponding to this test. Generates sequential names if not specified.
        
    -   `timeout` [number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type "Number") _(optional)_[#](#locator-assertions-to-match-aria-snapshot-2-option-timeout)
        
        Time to retry the assertion for in milliseconds. Defaults to `timeout` in `TestConfig.expect`.
        

**Returns**

-   [Promise](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise "Promise")<[void](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/undefined "void")\>[#](#locator-assertions-to-match-aria-snapshot-2-return)

* * *

## Properties[​](#properties "Direct link to Properties")

### not[​](#locator-assertions-not "Direct link to not")

Added in: v1.20 locatorAssertions.not

Makes the assertion check for the opposite condition. For example, this code tests that the Locator doesn't contain text `"error"`:

```
await expect(locator).not.toContainText('error');
```

**Usage**

```
expect(locator).not
```

**Type**

-   [LocatorAssertions](/docs/api/class-locatorassertions "LocatorAssertions")
