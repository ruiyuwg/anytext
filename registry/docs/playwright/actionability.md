On this page

## Introduction[​](#introduction "Direct link to Introduction")

Playwright performs a range of actionability checks on the elements before making actions to ensure these actions behave as expected. It auto-waits for all the relevant checks to pass and only then performs the requested action. If the required checks do not pass within the given `timeout`, action fails with the `TimeoutError`.

For example, for [locator.click()](/docs/api/class-locator#locator-click), Playwright will ensure that:

-   locator resolves to exactly one element
-   element is [Visible](#visible "Visible")
-   element is [Stable](#stable "Stable"), as in not animating or completed animation
-   element [Receives Events](#receives-events "Receives Events"), as in not obscured by other elements
-   element is [Enabled](#enabled "Enabled")

Here is the complete list of actionability checks performed for each action:

Action

[Visible](#visible "Visible")

[Stable](#stable "Stable")

[Receives Events](#receives-events "Receives Events")

[Enabled](#enabled "Enabled")

[Editable](#editable "Editable")

[locator.check()](/docs/api/class-locator#locator-check)

Yes

Yes

Yes

Yes

\-

[locator.click()](/docs/api/class-locator#locator-click)

Yes

Yes

Yes

Yes

\-

[locator.dblclick()](/docs/api/class-locator#locator-dblclick)

Yes

Yes

Yes

Yes

\-

[locator.setChecked()](/docs/api/class-locator#locator-set-checked)

Yes

Yes

Yes

Yes

\-

[locator.tap()](/docs/api/class-locator#locator-tap)

Yes

Yes

Yes

Yes

\-

[locator.uncheck()](/docs/api/class-locator#locator-uncheck)

Yes

Yes

Yes

Yes

\-

[locator.hover()](/docs/api/class-locator#locator-hover)

Yes

Yes

Yes

\-

\-

[locator.dragTo()](/docs/api/class-locator#locator-drag-to)

Yes

Yes

Yes

\-

\-

[locator.screenshot()](/docs/api/class-locator#locator-screenshot)

Yes

Yes

\-

\-

\-

[locator.fill()](/docs/api/class-locator#locator-fill)

Yes

\-

\-

Yes

Yes

[locator.clear()](/docs/api/class-locator#locator-clear)

Yes

\-

\-

Yes

Yes

[locator.selectOption()](/docs/api/class-locator#locator-select-option)

Yes

\-

\-

Yes

\-

[locator.selectText()](/docs/api/class-locator#locator-select-text)

Yes

\-

\-

\-

\-

[locator.scrollIntoViewIfNeeded()](/docs/api/class-locator#locator-scroll-into-view-if-needed)

\-

Yes

\-

\-

\-

[locator.blur()](/docs/api/class-locator#locator-blur)

\-

\-

\-

\-

\-

[locator.dispatchEvent()](/docs/api/class-locator#locator-dispatch-event)

\-

\-

\-

\-

\-

[locator.focus()](/docs/api/class-locator#locator-focus)

\-

\-

\-

\-

\-

[locator.press()](/docs/api/class-locator#locator-press)

\-

\-

\-

\-

\-

[locator.pressSequentially()](/docs/api/class-locator#locator-press-sequentially)

\-

\-

\-

\-

\-

[locator.setInputFiles()](/docs/api/class-locator#locator-set-input-files)

\-

\-

\-

\-

\-

## Forcing actions[​](#forcing-actions "Direct link to Forcing actions")

Some actions like [locator.click()](/docs/api/class-locator#locator-click) support `force` option that disables non-essential actionability checks, for example passing truthy `force` to [locator.click()](/docs/api/class-locator#locator-click) method will not check that the target element actually receives click events.

## Assertions[​](#assertions "Direct link to Assertions")

Playwright includes auto-retrying assertions that remove flakiness by waiting until the condition is met, similarly to auto-waiting before actions.

Assertion

Description

[expect(locator).toBeAttached()](/docs/api/class-locatorassertions#locator-assertions-to-be-attached)

Element is attached

[expect(locator).toBeChecked()](/docs/api/class-locatorassertions#locator-assertions-to-be-checked)

Checkbox is checked

[expect(locator).toBeDisabled()](/docs/api/class-locatorassertions#locator-assertions-to-be-disabled)

Element is disabled

[expect(locator).toBeEditable()](/docs/api/class-locatorassertions#locator-assertions-to-be-editable)

Element is editable

[expect(locator).toBeEmpty()](/docs/api/class-locatorassertions#locator-assertions-to-be-empty)

Container is empty

[expect(locator).toBeEnabled()](/docs/api/class-locatorassertions#locator-assertions-to-be-enabled)

Element is enabled

[expect(locator).toBeFocused()](/docs/api/class-locatorassertions#locator-assertions-to-be-focused)

Element is focused

[expect(locator).toBeHidden()](/docs/api/class-locatorassertions#locator-assertions-to-be-hidden)

Element is not visible

[expect(locator).toBeInViewport()](/docs/api/class-locatorassertions#locator-assertions-to-be-in-viewport)

Element intersects viewport

[expect(locator).toBeVisible()](/docs/api/class-locatorassertions#locator-assertions-to-be-visible)

Element is visible

[expect(locator).toContainText()](/docs/api/class-locatorassertions#locator-assertions-to-contain-text)

Element contains text

[expect(locator).toHaveAttribute()](/docs/api/class-locatorassertions#locator-assertions-to-have-attribute)

Element has a DOM attribute

[expect(locator).toHaveClass()](/docs/api/class-locatorassertions#locator-assertions-to-have-class)

Element has a class property

[expect(locator).toHaveCount()](/docs/api/class-locatorassertions#locator-assertions-to-have-count)

List has exact number of children

[expect(locator).toHaveCSS()](/docs/api/class-locatorassertions#locator-assertions-to-have-css)

Element has CSS property

[expect(locator).toHaveId()](/docs/api/class-locatorassertions#locator-assertions-to-have-id)

Element has an ID

[expect(locator).toHaveJSProperty()](/docs/api/class-locatorassertions#locator-assertions-to-have-js-property)

Element has a JavaScript property

[expect(locator).toHaveText()](/docs/api/class-locatorassertions#locator-assertions-to-have-text)

Element matches text

[expect(locator).toHaveValue()](/docs/api/class-locatorassertions#locator-assertions-to-have-value)

Input has a value

[expect(locator).toHaveValues()](/docs/api/class-locatorassertions#locator-assertions-to-have-values)

Select has options selected

[expect(page).toHaveTitle()](/docs/api/class-pageassertions#page-assertions-to-have-title)

Page has a title

[expect(page).toHaveURL()](/docs/api/class-pageassertions#page-assertions-to-have-url)

Page has a URL

[expect(response).toBeOK()](/docs/api/class-apiresponseassertions#api-response-assertions-to-be-ok)

Response has an OK status

Learn more in the [assertions guide](/docs/test-assertions).

## Visible[​](#visible "Direct link to Visible")

Element is considered visible when it has non-empty bounding box and does not have `visibility:hidden` computed style.

Note that according to this definition:

-   Elements of zero size **are not** considered visible.
-   Elements with `display:none` **are not** considered visible.
-   Elements with `opacity:0` **are** considered visible.

## Stable[​](#stable "Direct link to Stable")

Element is considered stable when it has maintained the same bounding box for at least two consecutive animation frames.

## Enabled[​](#enabled "Direct link to Enabled")

Element is considered enabled when it is **not disabled**.

Element is **disabled** when:

-   it is a `<button>`, `<select>`, `<input>`, `<textarea>`, `<option>` or `<optgroup>` with a `[disabled]` attribute;
-   it is a `<button>`, `<select>`, `<input>`, `<textarea>`, `<option>` or `<optgroup>` that is a part of a `<fieldset>` with a `[disabled]` attribute;
-   it is a descendant of an element with `[aria-disabled=true]` attribute.

## Editable[​](#editable "Direct link to Editable")

Element is considered editable when it is [enabled](#enabled "Enabled") and is **not readonly**.

Element is **readonly** when:

-   it is a `<select>`, `<input>` or `<textarea>` with a `[readonly]` attribute;
-   it has an `[aria-readonly=true]` attribute and an aria role that [supports it](https://w3c.github.io/aria/#aria-readonly).

## Receives Events[​](#receives-events "Direct link to Receives Events")

Element is considered receiving pointer events when it is the hit target of the pointer event at the action point. For example, when clicking at the point `(10;10)`, Playwright checks whether some other element (usually an overlay) will instead capture the click at `(10;10)`.

For example, consider a scenario where Playwright will click `Sign Up` button regardless of when the [locator.click()](/docs/api/class-locator#locator-click) call was made:

-   page is checking that user name is unique and `Sign Up` button is disabled;
-   after checking with the server, the disabled `Sign Up` button is replaced with another one that is now enabled.
