`within` (an alias to `getQueriesForElement`) takes a DOM element and binds it to the raw query functions, allowing them to be used without specifying a container. It is the recommended approach for libraries built on this API and is used under the hood in React Testing Library and Vue Testing Library.

Example: To get the text 'hello' only within a section called 'messages', you could do:

-   Native
-   React
-   Angular
-   Cypress

```
import {within} from '@testing-library/dom'const messages = document.getElementById('messages')const helloMessage = within(messages).getByText('hello')
```

```
import {render, within} from '@testing-library/react'const {getByText} = render(<MyComponent />)const messages = getByText('messages')const helloMessage = within(messages).getByText('hello')
```

```
import {render, within} from '@testing-library/angular'const {getByText} = await render(MyComponent)const messages = getByText('messages')const helloMessage = within(messages).getByText('hello')
```

```
cy.findByText('messages').within(() => {  cy.findByText('hello')})
```
