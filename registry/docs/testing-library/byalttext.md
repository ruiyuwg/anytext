On this page

> getByAltText, queryByAltText, getAllByAltText, queryAllByAltText, findByAltText, findAllByAltText

## API[​](#api "Direct link to heading")

```
getByAltText(  // If you're using `screen`, then skip the container argument:  container: HTMLElement,  text: TextMatch,  options?: {    exact?: boolean = true,    normalizer?: NormalizerFn,  }): HTMLElement
```

This will return the element (normally an `<img>`) that has the given `alt` text. Note that it only supports elements which accept an `alt` attribute or [custom elements](https://developer.mozilla.org/en-US/docs/Web/Web_Components/Using_custom_elements) (since we don't know if a custom element implements `alt` or not): [`<img>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/img), [`<input>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input), and [`<area>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/area) (intentionally excluding [`<applet>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/applet) as it's deprecated).

```
<img alt="Incredibles 2 Poster" src="/incredibles-2.png" />
```

-   Native
-   React
-   Angular
-   Cypress

```
import {screen} from '@testing-library/dom'const incrediblesPosterImg = screen.getByAltText(/incredibles.*? poster/i)
```

```
import {render, screen} from '@testing-library/react'render(<MyComponent />)const incrediblesPosterImg = screen.getByAltText(/incredibles.*? poster/i)
```

```
import {render, screen} from '@testing-library/angular'await render(MyComponent)const incrediblesPosterImg = screen.getByAltText(/incredibles.*? poster/i)
```

```
cy.findByAltText(/incredibles.*? poster/i).should('exist')
```

## Options[​](#options "Direct link to heading")

[TextMatch](/docs/queries/about#textmatch) options
