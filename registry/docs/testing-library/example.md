tip

See the [svelte-testing-library repository](https://github.com/testing-library/svelte-testing-library/tree/main/examples) for detailed examples, including examples for testing older Svelte 3 and 4 components.

This basic example demonstrates how to:

-   Pass props to your Svelte component using [`render()`](/docs/svelte-testing-library/api#render)
-   [Query](/docs/queries/about) the structure of your component's DOM elements using [`screen`](/docs/queries/about#screen)
-   Interact with your component using [`@testing-library/user-event`](/docs/user-event/intro)
-   Make assertions using `expect`, using matchers from [`@testing-library/jest-dom`](https://github.com/testing-library/jest-dom)

For additional resources, patterns, and best practices about testing Svelte components and other Svelte features, take a look at the [Svelte Society testing recipes](https://sveltesociety.dev/recipes/testing-and-debugging/unit-testing-svelte-component).

basic.svelte

```
<script>  let {name} = $props()  let showGreeting = $state(false)  const onclick = () => (showGreeting = true)</script><button {onclick}>Greet</button>{#if showGreeting}<p>Hello {name}</p>{/if}
```

basic.test.js

```
import {render, screen} from '@testing-library/svelte'import {userEvent} from '@testing-library/user-event'import {expect, test} from 'vitest'import Subject from './basic.svelte'test('no initial greeting', () => {  render(Subject, {name: 'World'})  const button = screen.getByRole('button', {name: 'Greet'})  const greeting = screen.queryByText(/hello/iu)  expect(button).toBeInTheDocument()  expect(greeting).not.toBeInTheDocument()})test('greeting appears on click', async () => {  const user = userEvent.setup()  render(Subject, {name: 'World'})  const button = screen.getByRole('button')  await user.click(button)  const greeting = screen.getByText(/hello world/iu)  expect(greeting).toBeInTheDocument()})
```
