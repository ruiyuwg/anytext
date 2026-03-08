On this page

`Vue Testing Library` re-exports everything from `DOM Testing Library`.

It also exposes these methods:

-   [`render(Component, options)`](#rendercomponent-options)
    -   [Parameters](#parameters)
        -   [Component](#component)
        -   [Options](#options)
    -   [`render` result](#render-result)
        -   [`...queries`](#queries)
        -   [`container`](#container)
        -   [`baseElement`](#baseelement)
        -   [`debug`](#debugelement)
        -   [`unmount`](#unmount)
        -   [`html`](#html)
        -   [`emitted`](#emitted)
        -   [`rerender`](#rerenderprops)
-   [`fireEvent`](#fireevent)
    -   [`touch(elem)`](#touchelem)
    -   [`update(elem, value)`](#updateelem-value)
-   [`cleanup`](#cleanup)

* * *

## `render(Component, options)`[​](#rendercomponent-options "Direct link to heading")

The `render` function is the only way of rendering components in Vue Testing Library.

It takes up to 2 parameters and returns an object with some helper methods.

```
function render(Component, options) {  return {    ...DOMTestingLibraryQueries,    container,    baseElement,    debug(element),    unmount,    html,    emitted,    rerender(props),  }}
```

### Parameters[​](#parameters "Direct link to heading")

#### Component[​](#component "Direct link to heading")

The valid Vue Component to be tested.

#### Options[​](#options "Direct link to heading")

An object containing additional information to be passed to `@vue/test-utils` [mount](https://test-utils.vuejs.org/api/#mount).

Additionally, the following options can also be provided:

##### `store` (`Object` | `Store`)[​](#store-object--store "Direct link to heading")

The object definition of a [Vuex](https://vuex.vuejs.org/) store. If a `store` object is provided, `Vue Testing Library` will import and configure a Vuex store. If an instantiated Vuex store is passed, it will be used.

##### `routes` (`Array` | `VueRouter`)[​](#routes-array--vuerouter "Direct link to heading")

A set of routes for [Vue Router](https://router.vuejs.org/). If `routes` is provided, the library will import and configure Vue Router. If an instantiated Vue Router is passed, it will be used.

##### `props` (`Object`)[​](#props-object "Direct link to heading")

It will be merged with `propsData`.

##### `slots` (`Object`)[​](#slots-object "Direct link to heading")

Used to provide slot content when rendering the component. Keys are slot names, and values can be strings, template snippets, or components, similar to how [slots](https://test-utils.vuejs.org/api/#slots) are defined in Vue Test Utils.

For example:

```
render(MyComponent, {  slots: {    default: 'Default',    first: h('h1', {}, 'Named Slot'),    second: Bar,  },})
```

##### `container` (`HTMLElement`)[​](#container-htmlelement "Direct link to heading")

By default, `Vue Testing Library` will create a `div` and append it to the `baseElement`. This is where your component will be rendered. If you provide your own `HTMLElement` container via this option, it will not be appended to the `baseElement` automatically.

For example: If you are unit testing a `tablebody` element, it cannot be a child of a `div`. In this case, you can specify a `table` as the render `container`.

```
const table = document.createElement('table')const {container} = render(TableBody, {  props,  container: document.body.appendChild(table),})
```

##### `baseElement` (`HTMLElement`)[​](#baseelement-htmlelement "Direct link to heading")

If the `container` is specified, then this defaults to that, otherwise this defaults to `document.body`. `baseElement` is used as the base element for the queries as well as what is printed when you use `debug()`.

### `render` result[​](#render-result "Direct link to heading")

The `render` method returns an object that has a few properties:

#### `...queries`[​](#queries "Direct link to heading")

The most important feature of `render` is that the queries from [DOM Testing Library](/docs/queries/about) are automatically returned with their first argument bound to the [baseElement](#baseelement), which defaults to `document.body`.

See [Queries](/docs/queries/about) for a complete list.

```
const {getByLabelText, queryAllByTestId} = render(Component)
```

#### `container`[​](#container "Direct link to heading")

The containing DOM node of your rendered Vue Component. By default it's a `div`. This is a regular DOM node, so you can call `container.querySelector` etc. to inspect the children.

> Tip: To get the root element of your rendered element, use `container.firstChild`.

> 🚨 If you find yourself using `container` to query for rendered elements then you should reconsider! The other queries are designed to be more resilient to changes that will be made to the component you're testing. Avoid using `container` to query for elements!

#### `baseElement`[​](#baseelement "Direct link to heading")

The containing DOM node where your Vue Component is rendered in the `container`. If you don't specify the `baseElement` in the options of `render`, it will default to `document.body`.

This is useful when the component you want to test renders something outside the container `div`, e.g. when you want to snapshot test your portal component which renders its HTML directly in the body.

> Note: the queries returned by the `render` looks into `baseElement`, so you can use queries to test your portal component without the `baseElement`.

#### `debug(element)`[​](#debugelement "Direct link to heading")

This method is a shortcut for `console.log(prettyDOM(element))`.

```
import {render} from '@testing-library/vue'const HelloWorldComponent = {  template: `<h1>Hello World</h1>`,}const {debug} = render(HelloWorldComponent)debug()// <div>//   <h1>Hello World</h1>// </div>
```

This is a simple wrapper around `prettyDOM` which is also exposed and comes from [`DOM Testing Library`](/docs/dom-testing-library/api-debugging/#prettydom).

#### `unmount()`[​](#unmount "Direct link to heading")

An alias for `@vue/test-utils` [unmount](https://test-utils.vuejs.org/api/#unmount).

#### `html()`[​](#html "Direct link to heading")

An alias for `@vue/test-utils` [html](https://test-utils.vuejs.org/api/#html).

#### `emitted()`[​](#emitted "Direct link to heading")

An alias for `@vue/test-utils` [emitted](https://test-utils.vuejs.org/api/#emitted).

#### `rerender(props)`[​](#rerenderprops "Direct link to heading")

An alias for `@vue/test-utils` [setProps](https://test-utils.vuejs.org/api/#setProps).

It returns a Promise through so you can `await rerender(...)`.

* * *

## `fireEvent`[​](#fireevent "Direct link to heading")

Because Vue applies DOM updates asynchronously during re-renders, the [fireEvent](/docs/dom-testing-library/api-events) tools are re-exported as `async` functions. To ensure that the DOM is properly updated in response to an event in a test, it's recommended to always `await` `fireEvent`.

```
await fireEvent.click(getByText('Click me'))
```

Additionally, Vue Testing Library exposes two useful methods:

### `touch(elem)`[​](#touchelem "Direct link to heading")

It triggers both `focus()` and `blur()` events.

```
await fireEvent.touch(getByLabelText('username'))// Same as:await fireEvent.focus(getByLabelText('username'))await fireEvent.blur(getByLabelText('username'))
```

### `update(elem, value)`[​](#updateelem-value "Direct link to heading")

Properly handles inputs controlled by `v-model`. It updates the input/select/textarea inner value while emitting the appropriate native event.

See a working example of `update` in the [v-model example test](/docs/vue-testing-library/examples#example-using-v-model).

* * *

## `cleanup`[​](#cleanup "Direct link to heading")

Unmounts Vue trees that were mounted with [render](#rendercomponent-options-callback).

> This is called automatically if your testing framework (such as mocha, Jest or Jasmine) injects a global `afterEach()` function into the testing environment. If not, you will need to call `cleanup()` after each test.

Failing to call `cleanup` when you've called `render` could result in a memory leak and tests which are not idempotent (which can lead to difficult to debug errors in your tests).
