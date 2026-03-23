Secondary primitives

# createReaction

[Edit this page](https://github.com/solidjs/solid-docs/edit/main/src/routes/reference/secondary-primitives/create-reaction.mdx)

```
import { createReaction } from "solid-js";
function createReaction(onInvalidate: () => void): (fn: () => void) => void;
```

Sometimes it is useful to separate tracking from re-execution. This primitive registers a side effect that is run the first time the expression wrapped by the returned tracking function is notified of a change.

```
const [s, set] = createSignal("start");
const track = createReaction(() => console.log("something"));
// run the reaction next time `s` changes.track(() => s());
set("end"); // "something"
set("final"); // no-op since the reaction only runs on the first update, need to call `track` again.
```

[Report an issue with this page](https://github.com/solidjs/solid-docs-next/issues/new?assignees=ladybluenotes\&labels=improve+documentation%2Cpending+review\&projects=\&template=CONTENT.yml\&title=[Content]:\&subject=/reference/secondary-primitives/create-reaction.mdx\&page=https://docs.solidjs.com/reference/secondary-primitives/create-reaction)

On this page

1. [Overview](#_top)

Contribute

1. [Edit this page](https://github.com/solidjs/solid-docs/edit/main/src/routes/reference/secondary-primitives/create-reaction.mdx)
2. [Report an issue with this page](https://github.com/solidjs/solid-docs-next/issues/new?assignees=ladybluenotes\&labels=improve+documentation%2Cpending+review\&projects=\&template=CONTENT.yml\&title=[Content]:\&subject=/reference/secondary-primitives/create-reaction.mdx\&page=https://docs.solidjs.com/reference/secondary-primitives/create-reaction)
