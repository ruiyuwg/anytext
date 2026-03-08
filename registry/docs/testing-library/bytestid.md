On this page

> getByTestId, queryByTestId, getAllByTestId, queryAllByTestId, findByTestId, findAllByTestId

## API[​](#api "Direct link to heading")

```
getByTestId(  // If you're using `screen`, then skip the container argument:  container: HTMLElement,  text: TextMatch,  options?: {    exact?: boolean = true,    normalizer?: NormalizerFn,  }): HTMLElement
```

A shortcut to ``container.querySelector(`[data-testid="${yourId}"]`)`` (and it also accepts a [`TextMatch`](/docs/queries/about#textmatch)).

```
<div data-testid="custom-element" />
```

-   Native
-   React
-   Angular
-   Cypress

```
import {screen} from '@testing-library/dom'const element = screen.getByTestId('custom-element')
```

```
import {render, screen} from '@testing-library/react'render(<MyComponent />)const element = screen.getByTestId('custom-element')
```

```
import {render, screen} from '@testing-library/angular'await render(MyComponent)const element = screen.getByTestId('custom-element')
```

```
cy.findByTestId('custom-element').should('exist')
```

> In the spirit of [the guiding principles](/docs/guiding-principles), it is recommended to use this only after the other queries don't work for your use case. Using data-testid attributes do not resemble how your software is used and should be avoided if possible. That said, they are _way_ better than querying based on DOM structure or styling css class names. Learn more about `data-testid`s from the blog post ["Making your UI tests resilient to change"](https://kentcdodds.com/blog/making-your-ui-tests-resilient-to-change)

## Options[​](#options "Direct link to heading")

[TextMatch](/docs/queries/about#textmatch) options

## Overriding `data-testid`[​](#overriding-data-testid "Direct link to heading")

The `...ByTestId` functions in `DOM Testing Library` use the attribute `data-testid` by default, following the precedent set by [React Native Web](https://github.com/testing-library/react-testing-library/issues/1) which uses a `testID` prop to emit a `data-testid` attribute on the element, and we recommend you adopt that attribute where possible. But if you already have an existing codebase that uses a different attribute for this purpose, you can override this value via `configure({testIdAttribute: 'data-my-test-attribute'})`.
