Control flow

# Error boundary

[Edit this page](https://github.com/solidjs/solid-docs/edit/main/src/routes/concepts/control-flow/error-boundary.mdx)

By default, if part of an application throws an error during rendering, the entire application can crash, resulting in Solid removing its UI from the screen. Error boundaries provide a way to catch these errors and prevent the entire app from crashing.

The [`<ErrorBoundary>`](/reference/components/error-boundary) component is used to create an error boundary. It catches any error that occurs during the rendering or updating of its children. However, an important note is that errors occurring outside the rendering process, such as in event handlers or after a `setTimeout`, are *not* caught by error boundaries.

The `fallback` prop can be used to display a user-friendly error message or notification when an error occurs. If a function is passed to `fallback`, it will receive the error object as well as a `reset` function. The `reset` function forces the `<ErrorBoundary>` to re-render its children and reset the error state, providing users with a way to recover from the error.

```
import { ErrorBoundary } from "solid-js";import { Header, ErrorProne } from "./components";
function App() {  return (    <div>      <Header />      <ErrorBoundary        fallback={(error, reset) => (          <div>            <p>Something went wrong: {error.message}</p>            <button onClick={reset}>Try Again</button>          </div>        )}      >        <ErrorProne />      </ErrorBoundary>    </div>  );}
```

In this example, when the `ErrorProne` component throws an error, the `<ErrorBoundary>` catches it, preventing it from affecting the rest of the application. Instead, it displays the error message passed to the fallback prop.

[Report an issue with this page](https://github.com/solidjs/solid-docs-next/issues/new?assignees=ladybluenotes\&labels=improve+documentation%2Cpending+review\&projects=\&template=CONTENT.yml\&title=[Content]:\&subject=/concepts/control-flow/error-boundary.mdx\&page=https://docs.solidjs.com/concepts/control-flow/error-boundary)

On this page

1. [Overview](#_top)

Contribute

1. [Edit this page](https://github.com/solidjs/solid-docs/edit/main/src/routes/concepts/control-flow/error-boundary.mdx)
2. [Report an issue with this page](https://github.com/solidjs/solid-docs-next/issues/new?assignees=ladybluenotes\&labels=improve+documentation%2Cpending+review\&projects=\&template=CONTENT.yml\&title=[Content]:\&subject=/concepts/control-flow/error-boundary.mdx\&page=https://docs.solidjs.com/concepts/control-flow/error-boundary)
