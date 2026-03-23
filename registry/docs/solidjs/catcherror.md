Reactive utilities

# catchError

[Edit this page](https://github.com/solidjs/solid-docs/edit/main/src/routes/reference/reactive-utilities/catch-error.mdx)

note

New in v1.7.0

```
import { catchError } from "solid-js";
function catchError<T>(tryFn: () => T, onError: (err: any) => void): T;
```

Wraps a `tryFn` with an error handler that fires if an error occurs below that point. Only the nearest scope error handlers execute. Rethrow to trigger up the line.

[Report an issue with this page](https://github.com/solidjs/solid-docs-next/issues/new?assignees=ladybluenotes\&labels=improve+documentation%2Cpending+review\&projects=\&template=CONTENT.yml\&title=[Content]:\&subject=/reference/reactive-utilities/catch-error.mdx\&page=https://docs.solidjs.com/reference/reactive-utilities/catch-error)

On this page

1. [Overview](#_top)

Contribute

1. [Edit this page](https://github.com/solidjs/solid-docs/edit/main/src/routes/reference/reactive-utilities/catch-error.mdx)
2. [Report an issue with this page](https://github.com/solidjs/solid-docs-next/issues/new?assignees=ladybluenotes\&labels=improve+documentation%2Cpending+review\&projects=\&template=CONTENT.yml\&title=[Content]:\&subject=/reference/reactive-utilities/catch-error.mdx\&page=https://docs.solidjs.com/reference/reactive-utilities/catch-error)
