How to

# Handle pending and error states

[Edit this page](https://github.com/solidjs/solid-docs/edit/main/src/routes/solid-router/data-fetching/how-to/handle-error-and-loading-states.mdx)

The `createAsync` primitive is designed to work with Solid's native components for managing asynchronous states. It reports its pending state to the nearest [`<Suspense>` boundary](/reference/components/suspense) to display loading fallbacks, and propagate errors to an [`<ErrorBoundary>`](/reference/components/error-boundary) for handling and displaying error messages.

```
import { Suspense, ErrorBoundary, For } from "solid-js";import { query, createAsync } from "@solidjs/router";
const getNewsQuery = query(async () => {  // ... Fetches the latest news from an API.}, "news");
function NewsFeed() {  const news = createAsync(() => getNewsQuery());
  return (    <ErrorBoundary fallback={<p>Could not fetch news.</p>}>      <Suspense fallback={<p>Loading news...</p>}>        <ul>          <For each={news()}>{(item) => <li>{item.headline}</li>}</For>        </ul>      </Suspense>    </ErrorBoundary>  );}
```

[Report an issue with this page](https://github.com/solidjs/solid-docs-next/issues/new?assignees=ladybluenotes\&labels=improve+documentation%2Cpending+review\&projects=\&template=CONTENT.yml\&title=[Content]:\&subject=/solid-router/data-fetching/how-to/handle-error-and-loading-states.mdx\&page=https://docs.solidjs.com/solid-router/data-fetching/how-to/handle-error-and-loading-states)

On this page

1. [Overview](#_top)

Contribute

1. [Edit this page](https://github.com/solidjs/solid-docs/edit/main/src/routes/solid-router/data-fetching/how-to/handle-error-and-loading-states.mdx)
2. [Report an issue with this page](https://github.com/solidjs/solid-docs-next/issues/new?assignees=ladybluenotes\&labels=improve+documentation%2Cpending+review\&projects=\&template=CONTENT.yml\&title=[Content]:\&subject=/solid-router/data-fetching/how-to/handle-error-and-loading-states.mdx\&page=https://docs.solidjs.com/solid-router/data-fetching/how-to/handle-error-and-loading-states)
