On this page

> getByDisplayValue, queryByDisplayValue, getAllByDisplayValue, queryAllByDisplayValue, findByDisplayValue, findAllByDisplayValue

## API[​](#api "Direct link to heading")

```
getByDisplayValue(  // If you're using `screen`, then skip the container argument:  container: HTMLElement,  value: TextMatch,  options?: {    exact?: boolean = true,    normalizer?: NormalizerFn,  }): HTMLElement
```

Returns the `input`, `textarea`, or `select` element that has the matching display value.

### `input` tags[​](#input-tags "Direct link to heading")

```
<input type="text" id="lastName" />
```

```
document.getElementById('lastName').value = 'Norris'
```

-   Native
-   React
-   Angular
-   Cypress

```
import {screen} from '@testing-library/dom'const lastNameInput = screen.getByDisplayValue('Norris')
```

```
import {render, screen} from '@testing-library/react'render(<MyComponent />)const lastNameInput = screen.getByDisplayValue('Norris')
```

```
import {render, screen} from '@testing-library/angular'await render(MyComponent)const lastNameInput = screen.getByDisplayValue('Norris')
```

```
cy.findByDisplayValue('Norris').should('exist')
```

### `textarea` tags[​](#textarea-tags "Direct link to heading")

```
<textarea id="messageTextArea" />
```

```
document.getElementById('messageTextArea').value = 'Hello World'
```

-   Native
-   React
-   Angular
-   Cypress

```
import {screen} from '@testing-library/dom'const messageTextArea = screen.getByDisplayValue('Hello World')
```

```
import {render, screen} from '@testing-library/react'render(<MyComponent />)const messageTextArea = screen.getByDisplayValue('Hello World')
```

```
import {render, screen} from '@testing-library/angular'await render(MyComponent)const messageTextArea = screen.getByDisplayValue('Hello World')
```

```
cy.findByDisplayValue('Hello World').should('exist')
```

### `select` tags[​](#select-tags "Direct link to heading")

In case of `select`, this will search for a `<select>` whose selected `<option>` matches the given [`TextMatch`](/docs/queries/about#textmatch).

```
<select>  <option value="">State</option>  <option value="AL">Alabama</option>  <option selected value="AK">Alaska</option>  <option value="AZ">Arizona</option></select>
```

-   Native
-   React
-   Angular
-   Cypress

```
import {screen} from '@testing-library/dom'const selectElement = screen.getByDisplayValue('Alaska')
```

```
import {render, screen} from '@testing-library/react'render(<MyComponent />)const selectElement = screen.getByDisplayValue('Alaska')
```

```
import {render, screen} from '@testing-library/angular'await render(MyComponent)const selectElement = screen.getByDisplayValue('Alaska')
```

```
cy.findByDisplayValue('Alaska').should('exist')
```

## Options[​](#options "Direct link to heading")

[TextMatch](/docs/queries/about#textmatch) options
