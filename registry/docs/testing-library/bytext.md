On this page

> getByText, queryByText, getAllByText, queryAllByText, findByText, findAllByText

## API[​](#api "Direct link to heading")

```
getByText(  // If you're using `screen`, then skip the container argument:  container: HTMLElement,  text: TextMatch,  options?: {    selector?: string = '*',    exact?: boolean = true,    ignore?: string|boolean = 'script, style',    normalizer?: NormalizerFn,  }): HTMLElement
```

This will search for all elements that have a text node with `textContent` matching the given [`TextMatch`](/docs/queries/about#textmatch).

```
<a href="/about">About ℹ️</a>
```

-   Native
-   React
-   Angular
-   Cypress

```
import {screen} from '@testing-library/dom'const aboutAnchorNode = screen.getByText(/about/i)
```

```
import {render, screen} from '@testing-library/react'render(<MyComponent />)const aboutAnchorNode = screen.getByText(/about/i)
```

```
import {render, screen} from '@testing-library/angular'await render(MyComponent)const aboutAnchorNode = screen.getByText(/about/i)
```

```
cy.findByText(/about/i).should('exist')
```

It also works with `input`s whose `type` attribute is either `submit` or `button`:

```
<input type="submit" value="Send data" />
```

## Options[​](#options "Direct link to heading")

[TextMatch](/docs/queries/about#textmatch) options, plus the following:

### `selector`[​](#selector "Direct link to heading")

> **Note**
> 
> See [`getByLabelText`](/docs/queries/bylabeltext#selector) for more details on how and when to use the `selector` option

### `ignore`[​](#ignore "Direct link to heading")

The `ignore` option accepts a query selector. If the [`node.matches`](https://developer.mozilla.org/en-US/docs/Web/API/Element/matches) returns true for that selector, the node will be ignored. This defaults to `'script, style'` because generally you don't want to select these tags, but if your content is in an inline script file, then the script tag could be returned.

If you'd rather disable this behavior, set `ignore` to `false`.
