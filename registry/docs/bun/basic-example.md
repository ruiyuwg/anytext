## Basic example

Let's build our first bundle. You have the following two files, which implement a simple client-side rendered React app.

```tsx index.tsx icon="https://mintcdn.com/bun-1dd33a4e/nIz6GtMH5K-dfXeV/icons/typescript.svg?fit=max&auto=format&n=nIz6GtMH5K-dfXeV&q=85&s=5d73d76daf7eb7b158469d8c30d349b0" theme={"theme":{"light":"github-light","dark":"dracula"}}
import * as ReactDOM from "react-dom/client";
import { Component } from "./Component";

const root = ReactDOM.createRoot(document.getElementById("root")!);
root.render();
```

```tsx Component.tsx icon="https://mintcdn.com/bun-1dd33a4e/nIz6GtMH5K-dfXeV/icons/typescript.svg?fit=max&auto=format&n=nIz6GtMH5K-dfXeV&q=85&s=5d73d76daf7eb7b158469d8c30d349b0" theme={"theme":{"light":"github-light","dark":"dracula"}}
export function Component(props: { message: string }) {
  return {props.message};
}
```

Here, `index.tsx` is the "entrypoint" to our application. Commonly, this will be a script that performs some side effect, like starting a server or—in this case—initializing a React root. Because we're using TypeScript & JSX, we need to bundle our code before it can be sent to the browser.

To create our bundle:

```ts build.ts icon="https://mintcdn.com/bun-1dd33a4e/nIz6GtMH5K-dfXeV/icons/typescript.svg?fit=max&auto=format&n=nIz6GtMH5K-dfXeV&q=85&s=5d73d76daf7eb7b158469d8c30d349b0" theme={"theme":{"light":"github-light","dark":"dracula"}}
await Bun.build({
  entrypoints: ["./index.tsx"],
  outdir: "./out",
});
```

```bash terminal icon="terminal" theme={"theme":{"light":"github-light","dark":"dracula"}}
bun build ./index.tsx --outdir ./out
```

For each file specified in `entrypoints`, Bun will generate a new bundle. This bundle will be written to disk in the `./out` directory (as resolved from the current working directory). After running the build, the file system looks like this:

```text title="file system" icon="folder-tree" theme={"theme":{"light":"github-light","dark":"dracula"}}
.
├── index.tsx
├── Component.tsx
└── out
    └── index.js
```

The contents of `out/index.js` will look something like this:

```js title="out/index.js" icon="https://mintcdn.com/bun-1dd33a4e/nIz6GtMH5K-dfXeV/icons/javascript.svg?fit=max&auto=format&n=nIz6GtMH5K-dfXeV&q=85&s=dd7b5268d2e9410910a69804de702737" theme={"theme":{"light":"github-light","dark":"dracula"}}
// out/index.js
// ...
// ~20k lines of code
// including the contents of `react-dom/client` and all its dependencies
// this is where the $jsxDEV and $createRoot functions are defined

// Component.tsx
function Component(props) {
  return $jsxDEV(
    "p",
    {
      children: props.message,
    },
    undefined,
    false,
    undefined,
    this,
  );
}

// index.tsx
var rootNode = document.getElementById("root");
var root = $createRoot(rootNode);
root.render(
  $jsxDEV(
    Component,
    {
      message: "Sup!",
    },
    undefined,
    false,
    undefined,
    this,
  ),
);
```

## Watch mode

Like the runtime and test runner, the bundler supports watch mode natively.

```bash terminal icon="terminal" theme={"theme":{"light":"github-light","dark":"dracula"}}
bun build ./index.tsx --outdir ./out --watch
```
