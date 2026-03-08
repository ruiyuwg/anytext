## Solid-Meta

Solid is a modern JavaScript framework for today's web.

[Get started](/solid-meta/getting-started/installation-and-setup)[Join the community](https://discord.com/invite/solidjs)

Counter.jsx

01

02

03

04

05

06

07

08

09

10

11

12

13

14

```
import { createSignal } from "solid-js";

function Counter() {
	const [count, setCount] = createSignal(0);

	return (
		<button
		  onClick={() => setCount((n) => n + 1)}
		>
		  Count: {count()}
		</button>
	);
}
```

# [Overview](/solid-meta#overview)

Solid Meta offers asynchronous SSR-ready Document Head management for Solid Applications, based on [React Head](https://github.com/tizmagik/react-head)

With Solid Meta, you can define `document.head` tags at any level of your component hierarchy. This helps you to manage tags conveniently, especially when contextual information for specific tags are buried deep within your component hierarchy.

This library has no dependencies and is designed to seamlessly integrate with asynchronous rendering.

On this page

1. [Overview](#_top)

Contribute

1. [Edit this page](https://github.com/solidjs/solid-docs/edit/main/src/routes/solid-meta/index.mdx)
2. [Report an issue with this page](https://github.com/solidjs/solid-docs-next/issues/new?assignees=ladybluenotes\&labels=improve+documentation%2Cpending+review\&projects=\&template=CONTENT.yml\&title=[Content]:\&subject=/solid-meta/index.mdx\&page=https://docs.solidjs.com/solid-meta)
