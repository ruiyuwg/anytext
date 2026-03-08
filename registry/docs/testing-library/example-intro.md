On this page

## Quickstart[​](#quickstart "Direct link to heading")

This is a minimal setup to get you started. If you want to see a description of what each line does, scroll down to the [annotated version](#quickstart-annotated). Scroll down to [Full Example](#full-example) to see a more advanced test setup.

```
import {render, screen} from '@testing-library/react'import userEvent from '@testing-library/user-event'import '@testing-library/jest-dom'import Fetch from './fetch'test('loads and displays greeting', async () => {  // ARRANGE  render(<Fetch url="/greeting" />)  // ACT  await userEvent.click(screen.getByText('Load Greeting'))  await screen.findByRole('heading')  // ASSERT  expect(screen.getByRole('heading')).toHaveTextContent('hello there')  expect(screen.getByRole('button')).toBeDisabled()})
```

Quickstart (Annotated Example)

```
// import react-testing methodsimport {render, screen} from '@testing-library/react'// userEvent library simulates user interactions by dispatching the events that would happen if the interaction took place in a browser.import userEvent from '@testing-library/user-event'// add custom jest matchers from jest-domimport '@testing-library/jest-dom'// the component to testimport Fetch from './fetch'test('loads and displays greeting', async () => {  // Render a React element into the DOM  render(<Fetch url="/greeting" />)  await userEvent.click(screen.getByText('Load Greeting'))  // wait before throwing an error if it cannot find an element  await screen.findByRole('heading')  // assert that the alert message is correct using  // toHaveTextContent, a custom matcher from jest-dom.  expect(screen.getByRole('heading')).toHaveTextContent('hello there')  expect(screen.getByRole('button')).toBeDisabled()})
```

## Full Example[​](#full-example "Direct link to heading")

See the following sections for a detailed breakdown of the test

note

We recommend using the [Mock Service Worker (MSW)](https://github.com/mswjs/msw) library to declaratively mock API communication in your tests instead of stubbing `window.fetch`, or relying on third-party adapters.

note

Our example here uses axios to make its API calls. If your application uses [`fetch()`](https://developer.mozilla.org/en-US/docs/Web/API/Window/fetch) to make its API calls, then be aware that by default JSDOM does not include fetch. If you are using vitest as your test runner, it will be included for you. For jest you may wish to manually polyfill `fetch()` or use the [jest-fixed-jsdom](https://github.com/mswjs/jest-fixed-jsdom) environment which includes fetch.

\_\_tests\_\_/fetch.test.jsx

```
import React from 'react'import {http, HttpResponse} from 'msw'import {setupServer} from 'msw/node'import {render, fireEvent, screen} from '@testing-library/react'import '@testing-library/jest-dom'import Fetch from '../fetch'const server = setupServer(  http.get('/greeting', () => {    return HttpResponse.json({greeting: 'hello there'})  }),)beforeAll(() => server.listen())afterEach(() => server.resetHandlers())afterAll(() => server.close())test('loads and displays greeting', async () => {  render(<Fetch url="/greeting" />)  fireEvent.click(screen.getByText('Load Greeting'))  await screen.findByRole('heading')  expect(screen.getByRole('heading')).toHaveTextContent('hello there')  expect(screen.getByRole('button')).toBeDisabled()})test('handles server error', async () => {  server.use(    http.get('/greeting', () => {      return new HttpResponse(null, {status: 500})    }),  )  render(<Fetch url="/greeting" />)  fireEvent.click(screen.getByText('Load Greeting'))  await screen.findByRole('alert')  expect(screen.getByRole('alert')).toHaveTextContent('Oops, failed to fetch!')  expect(screen.getByRole('button')).not.toBeDisabled()})
```

* * *

## Step-By-Step[​](#step-by-step "Direct link to heading")

### Imports[​](#imports "Direct link to heading")

```
// import dependenciesimport React from 'react'// import API mocking utilities from Mock Service Workerimport {http, HttpResponse} from 'msw'import {setupServer} from 'msw/node'// import react-testing methodsimport {render, fireEvent, screen} from '@testing-library/react'// add custom jest matchers from jest-domimport '@testing-library/jest-dom'// the component to testimport Fetch from '../fetch'
```

```
test('loads and displays greeting', async () => {  // Arrange  // Act  // Assert})
```

### Mock[​](#mock "Direct link to heading")

Use the `setupServer` function from `msw` to mock an API request that our tested component makes.

```
// declare which API requests to mockconst server = setupServer(  // capture "GET /greeting" requests  http.get('/greeting', (req, res, ctx) => {    // respond using a mocked JSON body    return HttpResponse.json({greeting: 'hello there'})  }),)// establish API mocking before all testsbeforeAll(() => server.listen())// reset any request handlers that are declared as a part of our tests// (i.e. for testing one-time error scenarios)afterEach(() => server.resetHandlers())// clean up once the tests are doneafterAll(() => server.close())// ...test('handles server error', async () => {  server.use(    // override the initial "GET /greeting" request handler    // to return a 500 Server Error    http.get('/greeting', (req, res, ctx) => {      return new HttpResponse(null, {status: 500})    }),  )  // ...})
```

### Arrange[​](#arrange "Direct link to heading")

The [`render`](/docs/react-testing-library/api#render) method renders a React element into the DOM.

```
render(<Fetch url="/greeting" />)
```

### Act[​](#act "Direct link to heading")

The [`fireEvent`](/docs/dom-testing-library/api-events) method allows you to fire events to simulate user actions.

```
fireEvent.click(screen.getByText('Load Greeting'))// wait until the `get` request promise resolves and// the component calls setState and re-renders,// throwing an error if it cannot find an elementawait screen.findByRole('heading')
```

### Assert[​](#assert "Direct link to heading")

```
// assert that the alert message is correct using// toHaveTextContent, a custom matcher from jest-dom.expect(screen.getByRole('alert')).toHaveTextContent('Oops, failed to fetch!')// assert that the button is not disabled using// toBeDisabled, a custom matcher from jest-dom.expect(screen.getByRole('button')).not.toBeDisabled()
```

### System Under Test[​](#system-under-test "Direct link to heading")

fetch.jsx

```
import React, {useState, useReducer} from 'react'import axios from 'axios'const initialState = {  error: null,  greeting: null,}function greetingReducer(state, action) {  switch (action.type) {    case 'SUCCESS': {      return {        error: null,        greeting: action.greeting,      }    }    case 'ERROR': {      return {        error: action.error,        greeting: null,      }    }    default: {      return state    }  }}export default function Fetch({url}) {  const [{error, greeting}, dispatch] = useReducer(    greetingReducer,    initialState,  )  const [buttonClicked, setButtonClicked] = useState(false)  const fetchGreeting = async url =>    axios      .get(url)      .then(response => {        const {data} = response        const {greeting} = data        dispatch({type: 'SUCCESS', greeting})        setButtonClicked(true)      })      .catch(error => {        dispatch({type: 'ERROR', error})      })  const buttonText = buttonClicked ? 'Ok' : 'Load Greeting'  return (    <div>      <button onClick={() => fetchGreeting(url)} disabled={buttonClicked}>        {buttonText}      </button>      {greeting && <h1>{greeting}</h1>}      {error && <p role="alert">Oops, failed to fetch!</p>}    </div>  )}
```
