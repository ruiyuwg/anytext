On this page

[`bs-jest-dom`](https://github.com/wyze/bs-jest-dom) is a companion library for [`bs-react-testing-library`](/docs/bs-react-testing-library/intro) that provides custom DOM element matchers for Jest in [ReasonML](https://reasonml.github.io/) via [BuckleScript](https://bucklescript.github.io/).

-   npm
-   Yarn

```
npm install --save-dev bs-jest-dom
```

```
yarn add --dev bs-jest-dom
```

-   [bs-jest-dom on GitHub](https://github.com/wyze/bs-jest-dom)

Check out [jest-dom's documentation](https://github.com/testing-library/jest-dom) for a full list of available matchers.

## Setup[​](#setup "Direct link to heading")

```
{  "bs-dev-dependencies": ["bs-jest-dom"]}
```

## Example[​](#example "Direct link to heading")

A\_test.re

```
open Jest;open JestDom;open ReactTestingLibrary;module Heading = {  let component = ReasonReact.statelessComponent("Heading");  let make = (~text, _children) => {    ...component,    render: _self =>      <h1> {ReasonReact.string(text)} </h1>,  };};test("renders with text", () =>  <Heading text="Hello, World!" />  |> render  |> getByText(~matcher=`Str("Hello, World!"))  |> expect  |> toBeInTheDocument);
```

## More Examples[​](#more-examples "Direct link to heading")

You can find more bs-jest-dom examples at [wyze/bs-jest-dom/src/\_\_tests\_\_](https://github.com/wyze/bs-jest-dom/tree/master/src/__tests__).
