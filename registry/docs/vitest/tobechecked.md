## toBeChecked

```ts
function toBeChecked(): Promise<void>
```

This allows you to check whether the given element is checked. It accepts an
`input` of type `checkbox` or `radio` and elements with a `role` of `checkbox`,
`radio` or `switch` with a valid `aria-checked` attribute of `"true"` or
`"false"`.

```html
<input type="checkbox" checked data-testid="input-checkbox-checked" />
<input type="checkbox" data-testid="input-checkbox-unchecked" />
<div role="checkbox" aria-checked="true" data-testid="aria-checkbox-checked" />
<div
  role="checkbox"
  aria-checked="false"
  data-testid="aria-checkbox-unchecked"
/>

<input type="radio" checked value="foo" data-testid="input-radio-checked" />
<input type="radio" value="foo" data-testid="input-radio-unchecked" />
<div role="radio" aria-checked="true" data-testid="aria-radio-checked" />
<div role="radio" aria-checked="false" data-testid="aria-radio-unchecked" />
<div role="switch" aria-checked="true" data-testid="aria-switch-checked" />
<div role="switch" aria-checked="false" data-testid="aria-switch-unchecked" />
```

```ts
const inputCheckboxChecked = getByTestId('input-checkbox-checked')
const inputCheckboxUnchecked = getByTestId('input-checkbox-unchecked')
const ariaCheckboxChecked = getByTestId('aria-checkbox-checked')
const ariaCheckboxUnchecked = getByTestId('aria-checkbox-unchecked')
await expect.element(inputCheckboxChecked).toBeChecked()
await expect.element(inputCheckboxUnchecked).not.toBeChecked()
await expect.element(ariaCheckboxChecked).toBeChecked()
await expect.element(ariaCheckboxUnchecked).not.toBeChecked()

const inputRadioChecked = getByTestId('input-radio-checked')
const inputRadioUnchecked = getByTestId('input-radio-unchecked')
const ariaRadioChecked = getByTestId('aria-radio-checked')
const ariaRadioUnchecked = getByTestId('aria-radio-unchecked')
await expect.element(inputRadioChecked).toBeChecked()
await expect.element(inputRadioUnchecked).not.toBeChecked()
await expect.element(ariaRadioChecked).toBeChecked()
await expect.element(ariaRadioUnchecked).not.toBeChecked()

const ariaSwitchChecked = getByTestId('aria-switch-checked')
const ariaSwitchUnchecked = getByTestId('aria-switch-unchecked')
await expect.element(ariaSwitchChecked).toBeChecked()
await expect.element(ariaSwitchUnchecked).not.toBeChecked()
```

## toBePartiallyChecked

```typescript
function toBePartiallyChecked(): Promise<void>
```

This allows you to check whether the given element is partially checked. It
accepts an `input` of type `checkbox` and elements with a `role` of `checkbox`
with a `aria-checked="mixed"`, or `input` of type `checkbox` with
`indeterminate` set to `true`

```html
<input type="checkbox" aria-checked="mixed" data-testid="aria-checkbox-mixed" />
<input type="checkbox" checked data-testid="input-checkbox-checked" />
<input type="checkbox" data-testid="input-checkbox-unchecked" />
<div role="checkbox" aria-checked="true" data-testid="aria-checkbox-checked" />
<div
  role="checkbox"
  aria-checked="false"
  data-testid="aria-checkbox-unchecked"
/>
<input type="checkbox" data-testid="input-checkbox-indeterminate" />
```

```ts
const ariaCheckboxMixed = getByTestId('aria-checkbox-mixed')
const inputCheckboxChecked = getByTestId('input-checkbox-checked')
const inputCheckboxUnchecked = getByTestId('input-checkbox-unchecked')
const ariaCheckboxChecked = getByTestId('aria-checkbox-checked')
const ariaCheckboxUnchecked = getByTestId('aria-checkbox-unchecked')
const inputCheckboxIndeterminate = getByTestId('input-checkbox-indeterminate')

await expect.element(ariaCheckboxMixed).toBePartiallyChecked()
await expect.element(inputCheckboxChecked).not.toBePartiallyChecked()
await expect.element(inputCheckboxUnchecked).not.toBePartiallyChecked()
await expect.element(ariaCheckboxChecked).not.toBePartiallyChecked()
await expect.element(ariaCheckboxUnchecked).not.toBePartiallyChecked()

inputCheckboxIndeterminate.element().indeterminate = true
await expect.element(inputCheckboxIndeterminate).toBePartiallyChecked()
```

## toHaveRole

```ts
function toHaveRole(role: ARIARole): Promise<void>
```

This allows you to assert that an element has the expected [role](https://www.w3.org/TR/html-aria/#docconformance).

This is useful in cases where you already have access to an element via some query other than the role itself, and want to make additional assertions regarding its accessibility.

The role can match either an explicit role (via the `role` attribute), or an implicit one via the [implicit ARIA semantics](https://www.w3.org/TR/html-aria/#docconformance).

```html
<button data-testid="button">Continue</button>
<div role="button" data-testid="button-explicit">Continue</button>
<button role="switch button" data-testid="button-explicit-multiple">Continue</button>
<a href="/about" data-testid="link">About</a>
<a data-testid="link-invalid">Invalid link<a/>
```

```ts
await expect.element(getByTestId('button')).toHaveRole('button')
await expect.element(getByTestId('button-explicit')).toHaveRole('button')
await expect.element(getByTestId('button-explicit-multiple')).toHaveRole('button')
await expect.element(getByTestId('button-explicit-multiple')).toHaveRole('switch')
await expect.element(getByTestId('link')).toHaveRole('link')
await expect.element(getByTestId('link-invalid')).not.toHaveRole('link')
await expect.element(getByTestId('link-invalid')).toHaveRole('generic')
```

Roles are matched literally by string equality, without inheriting from the ARIA role hierarchy. As a result, querying a superclass role like `checkbox` will not include elements with a subclass role like `switch`.

Also note that unlike `testing-library`, Vitest ignores all custom roles except the first valid one, following Playwright's behaviour:

```jsx
<div data-testid="switch" role="switch alert"></div>

await expect.element(getByTestId('switch')).toHaveRole('switch') // ✅
await expect.element(getByTestId('switch')).toHaveRole('alert') // ❌
```
