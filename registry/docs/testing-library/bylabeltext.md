On this page

> getByLabelText, queryByLabelText, getAllByLabelText, queryAllByLabelText, findByLabelText, findAllByLabelText

## API[​](#api "Direct link to heading")

```
getByLabelText(  // If you're using `screen`, then skip the container argument:  container: HTMLElement,  text: TextMatch,  options?: {    selector?: string = '*',    exact?: boolean = true,    normalizer?: NormalizerFn,  }): HTMLElement
```

This will search for the label that matches the given [`TextMatch`](/docs/queries/about#textmatch), then find the element associated with that label.

The example below will find the input node for the following DOM structures:

```
// for/htmlFor relationship between label and form element id<label for="username-input">Username</label><input id="username-input" />// The aria-labelledby attribute with form elements<label id="username-label">Username</label><input aria-labelledby="username-label" />// Wrapper labels<label>Username <input /></label>// Wrapper labels where the label text is in another child element<label>  <span>Username</span>  <input /></label>// aria-label attributes// Take care because this is not a label that users can see on the page,// so the purpose of your input must be obvious to visual users.<input aria-label="Username" />
```

-   Native
-   React
-   Angular
-   Cypress

```
import {screen} from '@testing-library/dom'const inputNode = screen.getByLabelText('Username')
```

```
import {render, screen} from '@testing-library/react'render(<Login />)const inputNode = screen.getByLabelText('Username')
```

```
import {render, screen} from '@testing-library/angular'await render(Login)const inputNode = screen.getByLabelText('Username')
```

```
cy.findByLabelText('Username').should('exist')
```

## Options[​](#options "Direct link to heading")

### `name`[​](#name "Direct link to heading")

The example above does NOT find the input node for label text broken up by elements. You can use `getByRole('textbox', { name: 'Username' })` instead which is robust against switching to `aria-label` or `aria-labelledby`.

### `selector`[​](#selector "Direct link to heading")

If it is important that you query a specific element (e.g. an `<input>`) you can provide a `selector` in the options:

```
// Multiple elements labelled via aria-labelledby<label id="username">Username</label><input aria-labelledby="username" /><span aria-labelledby="username">Please enter your username</span>// Multiple labels with the same text<label>  Username  <input /></label><label>  Username  <textarea></textarea></label>
```

```
const inputNode = screen.getByLabelText('Username', {selector: 'input'})
```

> **Note**
> 
> `getByLabelText` will not work in the case where a `for` attribute on a `<label>` element matches an `id` attribute on a non-form element.

```
// This case is not valid// for/htmlFor between label and an element that is not a form element<section id="photos-section">  <label for="photos-section">Photos</label></section>
```
