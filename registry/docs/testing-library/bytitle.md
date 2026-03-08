On this page

> getByTitle, queryByTitle, getAllByTitle, queryAllByTitle, findByTitle, findAllByTitle

## API[​](#api "Direct link to heading")

```
getByTitle(  // If you're using `screen`, then skip the container argument:  container: HTMLElement,  title: TextMatch,  options?: {    exact?: boolean = true,    normalizer?: NormalizerFn,  }): HTMLElement
```

Returns the element that has the matching `title` attribute.

Will also find a `title` element within an SVG.

```
<span title="Delete" id="2"></span><svg>  <title>Close</title>  <g><path /></g></svg>
```

-   Native
-   React
-   Angular
-   Cypress

```
import {screen} from '@testing-library/dom'const deleteElement = screen.getByTitle('Delete')const closeElement = screen.getByTitle('Close')
```

```
import {render, screen} from '@testing-library/react'render(<MyComponent />)const deleteElement = screen.getByTitle('Delete')const closeElement = screen.getByTitle('Close')
```

```
import {render, screen} from '@testing-library/angular'await render(MyComponent)const deleteElement = screen.getByTitle('Delete')const closeElement = screen.getByTitle('Close')
```

```
cy.findByTitle('Delete').should('exist')cy.findByTitle('Close').should('exist')
```

## Options[​](#options "Direct link to heading")

[TextMatch](/docs/queries/about#textmatch) options
