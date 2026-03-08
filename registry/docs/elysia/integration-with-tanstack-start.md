# Integration with TanStack Start

Elysia can run inside TanStack Start server routes.

1. Create **src/routes/api.$.ts**
2. Define an Elysia server
3. Export Elysia handler in **server.handlers**

```typescript [src/routes/api.$.ts]
import { Elysia } from 'elysia'

import { createFileRoute } from '@tanstack/react-router'
import { createIsomorphicFn } from '@tanstack/react-start'

const app = new Elysia({
	prefix: '/api' // [!code ++]
}).get('/', 'Hello Elysia!')

const handle = ({ request }: { request: Request }) => app.fetch(request) // [!code ++]

export const Route = createFileRoute('/api/$')({
	server: {
		handlers: {
			GET: handle, // [!code ++]
			POST: handle // [!code ++]
		}
	}
})
```

Elysia should now be running on **/api**.

We may add additional methods to **server.handlers** to support other HTTP methods as needed.

### pnpm

If you use pnpm, [pnpm doesn't auto install peer dependencies by default](https://github.com/orgs/pnpm/discussions/3995#discussioncomment-1893230) forcing you to install additional dependencies manually.

```bash
pnpm add @sinclair/typebox openapi-types
```

## Eden

We can add [Eden](/eden/overview.html) for **end-to-end type safety** similar to tRPC.

```typescript [src/routes/api.$.ts]
import { Elysia } from 'elysia'
import { treaty } from '@elysiajs/eden' // [!code ++]

import { createFileRoute } from '@tanstack/react-router'
import { createIsomorphicFn } from '@tanstack/react-start'

const app = new Elysia({
	prefix: '/api'
}).get('/', 'Hello Elysia!')

const handle = ({ request }: { request: Request }) => app.fetch(request)

export const Route = createFileRoute('/api/$')({
	server: {
		handlers: {
			GET: handle,
			POST: handle
		}
	}
})

export const getTreaty = createIsomorphicFn() // [!code ++]
	.server(() => treaty(app).api) // [!code ++]
	.client(() => treaty<typeof app>('localhost:3000').api) // [!code ++]
```

Notice that we use **createIsomorphicFn** to create a separate Eden Treaty instance for both the server and client:

1. On the server, Elysia is called directly without HTTP overhead.
2. On the client, we call the Elysia server through HTTP.

In a React component, we can use `getTreaty` to call the Elysia server with type safety.

## Loader Data

Tanstack Start supports **Loader** to fetch data before rendering the component.

```tsx [src/routes/index.tsx]
import { createFileRoute } from '@tanstack/react-router'

import { getTreaty } from './api.$' // [!code ++]

export const Route = createFileRoute('/a')({
	component: App,
	loader: () => getTreaty().get().then((res) => res.data) // [!code ++]
})

function App() {
	const data = Route.useLoaderData() // [!code ++]

	return data
}
```

Calling Elysia in a loader executes it on the server during SSR and doesn’t incur HTTP overhead.
When navigating from one page to another, the loader will run on the client-side, making an HTTP request to the endpoint.

Eden Treaty will ensure type safety on both server and client.

## React Query

We can also use React Query to interact with Elysia server on client.

```tsx [src/routes/index.tsx]
import { createFileRoute } from '@tanstack/react-router'
import { useQuery } from '@tanstack/react-query'

import { getTreaty } from './api.$' // [!code ++]

export const Route = createFileRoute('/a')({
	component: App
})

function App() {
	const { data: response } = useQuery({ // [!code ++]
		queryKey: ['get'], // [!code ++]
		queryFn: () => getTreaty().get() // [!code ++]
	}) // [!code ++]

	return response?.data
}
```

This can work with any React Query features like caching, pagination, infinite queries, etc.

***

Please visit [TanStack Start Documentation](https://tanstack.com/start) for more information about TanStack Start.

***

# Welcome to Elysia

It's great to have you here! This playground will help you get started with Elysia interactively.

Unlike traditional backend frameworks, **Elysia can run in a browser**! Although it doesn't support all features, it's a perfect environment for learning and experimentation.

You can check out the API docs by clicking  on the left sidebar.

## What is Elysia

Elysia is an ergonomic framework for humans.

Ok, seriously, Elysia is a backend TypeScript framework that focuses on developer experience and performance.

What makes Elysia different from other frameworks is:

1. Spectacular performance comparable to Golang.
2. Extraordinary TypeScript support with **type soundness**.
3. Built around OpenAPI from the ground up.
4. Offers End-to-end Type Safety like tRPC.
5. Uses Web Standards, allowing you to run your code anywhere like Cloudflare Workers, Deno, Bun, Node.js and more.
6. It is, of course, **designed for humans** first.

Although Elysia has some framework-specific concepts to learn, once users get the hang of it, many find it very enjoyable and intuitive to work with.

## How to use this playground

Playground is divided into 3 sections:

1. Documentation and task on the left side (what you're currently reading).
2. Code editor in the top right
3. Preview, output, and console in the bottom right

## Assignment

For the first assignment, let's modify the code to make the server respond with `"Hello Elysia!"` instead of `"Hello World!"`.

Feel free to look around the code editor and preview section to get familiar with the environment.

\\

You can change the response by changing the content inside the `.get` method from `'Hello World!'` to `'Hello Elysia!'`.

```typescript
import { Elysia } from 'elysia'

new Elysia()
	.get('/', 'Hello World!') // [!code --]
	.get('/', 'Hello Elysia!') // [!code ++]
	.listen(3000)
```

Now Elysia will respond with `"Hello Elysia!"` when you access `/`.

***
