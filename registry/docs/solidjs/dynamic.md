Control flow

# Dynamic

[Edit this page](https://github.com/solidjs/solid-docs/edit/main/src/routes/concepts/control-flow/dynamic.mdx)

`<Dynamic>` is a Solid component that allows you to render components dynamically based on data. By passing either a string representing a [native HTML element](https://developer.mozilla.org/en-US/docs/Web/HTML/Element) or a component function to the `component` prop, you can render the chosen component with the remaining props you provide.

```
import { createSignal, For } from "solid-js";import { Dynamic } from "solid-js/web";
const RedDiv = () => <div style="color: red">Red</div>;const GreenDiv = () => <div style="color: green">Green</div>;const BlueDiv = () => <div style="color: blue">Blue</div>;
const options = {  red: RedDiv,  green: GreenDiv,  blue: BlueDiv,};
function App() {  const [selected, setSelected] = createSignal("red");
  return (    <>      <select        value={selected()}        onInput={(e) => setSelected(e.currentTarget.value)}      >        <For each={Object.keys(options)}>          {(color) => <option value={color}>{color}</option>}        </For>      </select>      <Dynamic component={options[selected()]} />    </>  );}
```

This example renders a `<select>` element that allows you to choose between three colors. Once a color is selected, the `<Dynamic>` component will render the chosen color's corresponding component or element.

`<Dynamic>` creates more concise code than alternative conditional rendering options. For example, the following code renders the same result as the previous example:

```
import { createSignal, Switch, Match, For } from "solid-js";
const RedDiv = () => <div style="color: red">Red</div>;const GreenDiv = () => <div style="color: green">Green</div>;const BlueDiv = () => <div style="color: blue">Blue</div>;
const options = {  red: RedDiv,  green: GreenDiv,  blue: BlueDiv,};
function App() {  const [selected, setSelected] = createSignal("red");
  return (    <>      <select        value={selected()}        onInput={(e) => setSelected(e.currentTarget.value)}      >        <For each={Object.keys(options)}>          {(color) => <option value={color}>{color}</option>}        </For>      </select>      <Switch fallback={<BlueDiv />}>        <Match when={selected() === "red"}>          <RedDiv />        </Match>        <Match when={selected() === "green"}>          <GreenDiv />        </Match>      </Switch>    </>  );}
```

Instead of a more verbose [`<Switch>` and `<Match>`](/concepts/control-flow/conditional-rendering) statement, `<Dynamic>` offers a more concise way to render components dynamically.

***

## [Props](/concepts/control-flow/dynamic#props)

When working with these components, you can pass [props](/concepts/components/props) to the component you are rendering by passing them to the `<Dynamic>` component. This makes them available to the component you are rendering, similar to how you would pass props to components in JSX.

```
import { Dynamic } from "solid-js/web";
function App() {  return <Dynamic component={someComponent} someProp="someValue" />;}
```

[Report an issue with this page](https://github.com/solidjs/solid-docs-next/issues/new?assignees=ladybluenotes\&labels=improve+documentation%2Cpending+review\&projects=\&template=CONTENT.yml\&title=[Content]:\&subject=/concepts/control-flow/dynamic.mdx\&page=https://docs.solidjs.com/concepts/control-flow/dynamic)

On this page

1. [Overview](#_top)
2. [Props](#props)

Contribute

1. [Edit this page](https://github.com/solidjs/solid-docs/edit/main/src/routes/concepts/control-flow/dynamic.mdx)
2. [Report an issue with this page](https://github.com/solidjs/solid-docs-next/issues/new?assignees=ladybluenotes\&labels=improve+documentation%2Cpending+review\&projects=\&template=CONTENT.yml\&title=[Content]:\&subject=/concepts/control-flow/dynamic.mdx\&page=https://docs.solidjs.com/concepts/control-flow/dynamic)
