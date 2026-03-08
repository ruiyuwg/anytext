On this page

> getByPlaceholderText, queryByPlaceholderText, getAllByPlaceholderText, queryAllByPlaceholderText, findByPlaceholderText, findAllByPlaceholderText

## API[​](#api "Direct link to heading")

```
getByPlaceholderText(  // If you're using `screen`, then skip the container argument:  container: HTMLElement,  text: TextMatch,  options?: {    exact?: boolean = true,    normalizer?: NormalizerFn,  }): HTMLElement
```

This will search for all elements with a placeholder attribute and find one that matches the given [`TextMatch`](/docs/queries/about#textmatch).

```
<input placeholder="Username" />
```

-   Native
-   React
-   Angular
-   Cypress

```
import {screen} from '@testing-library/dom'const inputNode = screen.getByPlaceholderText('Username')
```

```
import {render, screen} from '@testing-library/react'render(<MyComponent />)const inputNode = screen.getByPlaceholderText('Username')
```

```
import {render, screen} from '@testing-library/angular'await render(MyComponent)const inputNode = screen.getByPlaceholderText('Username')
```

```
cy.findByPlaceholderText('Username').should('exist')
```

> **Note**
> 
> A placeholder is not a good substitute for a label so you should generally use `getByLabelText` instead.

## Options[​](#options "Direct link to heading")

[TextMatch](/docs/queries/about#textmatch) options
