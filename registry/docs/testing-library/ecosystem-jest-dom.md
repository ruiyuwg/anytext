[`jest-dom`](https://github.com/testing-library/jest-dom) is a companion library for Testing Library that provides custom DOM element matchers for Jest

-   npm
-   Yarn

```
npm install --save-dev @testing-library/jest-dom
```

```
yarn add --dev @testing-library/jest-dom
```

Then follow [usage section](https://github.com/testing-library/jest-dom#usage) from jest-dom's documentation to add the matchers to Jest.

```
import {screen} from '@testing-library/dom'test('uses jest-dom', () => {  document.body.innerHTML = `    <span data-testid="not-empty"><span data-testid="empty"></span></span>    <div data-testid="visible">Visible Example</div>  `  expect(screen.queryByTestId('not-empty')).not.toBeEmptyDOMElement()  expect(screen.getByText('Visible Example')).toBeVisible()})
```

> Note: when using some of these matchers, you may need to make sure you use a query function (like `queryByTestId`) rather than a get function (like `getByTestId`). Otherwise the `get*` function could throw an error before your assertion.

Check out [jest-dom's documentation](https://github.com/testing-library/jest-dom) for a full list of available matchers.

-   [jest-dom on GitHub](https://github.com/testing-library/jest-dom)
