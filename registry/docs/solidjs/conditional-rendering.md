Control flow

# Conditional rendering

[Edit this page](https://github.com/solidjs/solid-docs/edit/main/src/routes/concepts/control-flow/conditional-rendering.mdx)

Conditional rendering is the process of displaying different UI elements based on certain conditions. This is a common pattern in UI development, and is often used to show or hide elements based on user input, data, or other conditions.

Solid offers dedicated components to handle conditional rendering in a more straightforward and readable way.

***

## [Show](/concepts/control-flow/conditional-rendering#show)

`<Show>` renders its children when a condition is evaluated to be true. Similar to the [ternary operator](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Conditional_Operator) in JavaScript, it uses control logic flow within JSX to determine what to render.

`<Show>` has a `when` property that is used to determine whether or not to render its children. When there is a change in the state or props it depends on, this property is re-evaluated. This property can be a boolean value, or a function that returns a boolean value.

```
import { Show } from "solid-js";
<Show when={data.loading}>  <div>Loading...</div></Show>;
```

`<Show>` has the `fallback` property that can be used to specify the content to be rendered when the condition evaluates to false. This property can return a JSX element.

```
import { Show } from "solid-js";
<Show when={!data.loading} fallback={<div>Loading...</div>}>  <h1>Hi, I am {data().name}.</h1></Show>;
```

If there are multiple conditions that need to be handled, `<Show>` can be nested to handle each condition.

```
import { Show } from "solid-js";
<Show when={data.loading}>  <div>Loading...</div>  <Show when={data.error}>    <div>Error: {data.error}</div>  </Show></Show>;
```

***

## [Switch and Match](/concepts/control-flow/conditional-rendering#switch-and-match)

When there are multiple conditions that need to be handled, it can be difficult to manage the logic flow with nested `<Show>` components. Solid has the `<Switch>` and `<Match>` components for this purpose.

Similar to JavaScript's [switch/case](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/switch) structure, `<Switch>` wraps multiple `<Match>` components so that each condition is evaluated *in sequence*. The first `<Match>` component that evaluates to true will have its children rendered, and the rest will be ignored.

```
import { Switch, Match } from "solid-js";
<Switch>  <Match when={condition1}>    <p>Outcome 1</p>  </Match>  <Match when={condition2}>    <p>Outcome 2</p>  </Match></Switch>;
```

Similar to `<Show>`, each `<Match>` component has a `when` property that is used to determine whether or not to render its children. An optional `fallback` property can also be passed to `<Switch>` to specify the content be rendered when none of the `<Match>` components evaluate to true.

```
import { Switch, Match } from "solid-js";
<Switch fallback={<p>Fallback content</p>}>  <Match when={condition1}>    <p>Outcome 1</p>  </Match>  <Match when={condition2}>    <p>Outcome 2</p>  </Match></Switch>;
```

[Report an issue with this page](https://github.com/solidjs/solid-docs-next/issues/new?assignees=ladybluenotes\&labels=improve+documentation%2Cpending+review\&projects=\&template=CONTENT.yml\&title=[Content]:\&subject=/concepts/control-flow/conditional-rendering.mdx\&page=https://docs.solidjs.com/concepts/control-flow/conditional-rendering)

On this page

1. [Overview](#_top)
2. [Show](#show)
3. [Switch and Match](#switch-and-match)

Contribute

1. [Edit this page](https://github.com/solidjs/solid-docs/edit/main/src/routes/concepts/control-flow/conditional-rendering.mdx)
2. [Report an issue with this page](https://github.com/solidjs/solid-docs-next/issues/new?assignees=ladybluenotes\&labels=improve+documentation%2Cpending+review\&projects=\&template=CONTENT.yml\&title=[Content]:\&subject=/concepts/control-flow/conditional-rendering.mdx\&page=https://docs.solidjs.com/concepts/control-flow/conditional-rendering)
