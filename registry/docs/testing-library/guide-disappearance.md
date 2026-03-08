On this page

Sometimes you need to test that an element is present and then disappears or vice versa.

## Waiting for appearance[​](#waiting-for-appearance "Direct link to heading")

If you need to wait for an element to appear, the [async wait utilities](/docs/dom-testing-library/api-async) allow you to wait for an assertion to be satisfied before proceeding. The wait utilities retry until the query passes or times out. _The async methods return a Promise, so you must always use `await` or `.then(done)` when calling them._

### 1\. Using `findBy` Queries[​](#1-using-findby-queries "Direct link to heading")

```
test('movie title appears', async () => {  // element is initially not present...  // wait for appearance and return the element  const movie = await findByText('the lion king')})
```

### 2\. Using `waitFor`[​](#2-using-waitfor "Direct link to heading")

```
test('movie title appears', async () => {  // element is initially not present...  // wait for appearance inside an assertion  await waitFor(() => {    expect(getByText('the lion king')).toBeInTheDocument()  })})
```

## Waiting for disappearance[​](#waiting-for-disappearance "Direct link to heading")

The `waitForElementToBeRemoved` [async helper](/docs/dom-testing-library/api-async) function uses a callback to query for the element on each DOM mutation and resolves to `true` when the element is removed.

```
test('movie title no longer present in DOM', async () => {  // element is removed  await waitForElementToBeRemoved(() => queryByText('the mummy'))})
```

Using [`MutationObserver`](https://developer.mozilla.org/en-US/docs/Web/API/MutationObserver) is more efficient than polling the DOM at regular intervals with `waitFor`.

The `waitFor` [async helper](/docs/dom-testing-library/api-async) function retries until the wrapped function stops throwing an error. This can be used to assert that an element disappears from the page.

```
test('movie title goes away', async () => {  // element is initially present...  // note use of queryBy instead of getBy to return null  // instead of throwing in the query itself  await waitFor(() => {    expect(queryByText('i, robot')).not.toBeInTheDocument()  })})
```

## Asserting elements are not present[​](#asserting-elements-are-not-present "Direct link to heading")

The standard `getBy` methods throw an error when they can't find an element, so if you want to make an assertion that an element is _not_ present in the DOM, you can use `queryBy` APIs instead:

```
const submitButton = screen.queryByText('submit')expect(submitButton).toBeNull() // it doesn't exist
```

The `queryAll` APIs version return an array of matching nodes. The length of the array can be useful for assertions after elements are added or removed from the DOM.

```
const submitButtons = screen.queryAllByText('submit')expect(submitButtons).toHaveLength(0) // expect no elements
```

### `not.toBeInTheDocument`[​](#nottobeinthedocument "Direct link to heading")

The [`jest-dom`](/docs/ecosystem-jest-dom) utility library provides the `.toBeInTheDocument()` matcher, which can be used to assert that an element is in the body of the document, or not. This can be more meaningful than asserting a query result is `null`.

```
import '@testing-library/jest-dom'// use `queryBy` to avoid throwing an error with `getBy`const submitButton = screen.queryByText('submit')expect(submitButton).not.toBeInTheDocument()
```
