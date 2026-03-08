On this page

`DOM Testing Library` exposes many of the helper functions that are used to implement the default queries. You can use the helpers to build custom queries. For example, the code below shows a way to override the default `testId` queries to use a different data-attribute. (Note: test files would import `test-utils.js` instead of using `DOM Testing Library` directly).

> **Note**
> 
> Custom queries can be added to `React Testing Library`'s `render` method by adding `queries` to the options config object. See the render [options](/docs/react-testing-library/api#render-options).

> Custom queries are different than [custom render](/docs/react-testing-library/setup#custom-render) methods.

test-utils.js

```
const domTestingLib = require('@testing-library/dom')const {queryHelpers} = domTestingLibexport const queryByTestId = queryHelpers.queryByAttribute.bind(  null,  'data-test-id',)export const queryAllByTestId = queryHelpers.queryAllByAttribute.bind(  null,  'data-test-id',)export function getAllByTestId(container, id, ...rest) {  const els = queryAllByTestId(container, id, ...rest)  if (!els.length) {    throw queryHelpers.getElementError(      `Unable to find an element by: [data-test-id="${id}"]`,      container,    )  }  return els}export function getByTestId(container, id, ...rest) {  // result >= 1  const result = getAllByTestId(container, id, ...rest)  if (result.length > 1) {    throw queryHelpers.getElementError(      `Found multiple elements with the [data-test-id="${id}"]`,      container,    )  }  return result[0]}// re-export with overridesmodule.exports = {  ...domTestingLib,  getByTestId,  getAllByTestId,  queryByTestId,  queryAllByTestId,}
```

## `buildQueries`[​](#buildqueries "Direct link to heading")

The `buildQueries` helper allows you to create custom queries with all the [standard queries](/docs/queries/about) in testing-library.

See the [Add custom queries](/docs/react-testing-library/setup#add-custom-queries) section of the custom render guide for example usage.

### Using other assertion libraries[​](#using-other-assertion-libraries "Direct link to heading")

If you're not using jest, you may be able to find a similar set of custom assertions for your library of choice. Here's a list of alternatives to jest-dom for other popular assertion libraries:

-   [chai-dom](https://github.com/nathanboktae/chai-dom)

If you're aware of some other alternatives, please [make a pull request](https://github.com/testing-library/testing-library-docs/pulls) and add it here!

## `getNodeText`[​](#getnodetext "Direct link to heading")

```
getNodeText(node: HTMLElement)
```

Returns the complete text content of an HTML element, removing any extra whitespace. The intention is to treat text in nodes exactly as how it is perceived by users in a browser, where any extra whitespace within words in the html code is not meaningful when the text is rendered.

```
// <div>//   Hello//     World  !// </div>const text = getNodeText(container.querySelector('div')) // "Hello World !"
```

This function is also used internally when querying nodes by their text content. This enables functions like `getByText` and `queryByText` to work as expected, finding elements in the DOM similarly to how users would do.

The function has a special behavior for some input elements:

```
// <input type="submit" value="Send data" />// <input type="button" value="Push me" />const submitText = getNodeText(container.querySelector('input[type=submit]')) // "Send data"const buttonText = getNodeText(container.querySelector('input[type=button]')) // "Push me"These elements use the attribute `value` and display its value to the user.
```
