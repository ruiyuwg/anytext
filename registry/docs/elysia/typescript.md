# TypeScript

Elysia has first-class support for TypeScript out of the box.

Most of the time, you wouldn't need to add any TypeScript annotations manually.

## Inference

Elysia infers the type of request and response based on the schema you provide.

```ts twoslash
import { Elysia, t } from 'elysia'
import { z } from 'zod'

const app = new Elysia()
  	.post('/user/:id', ({ body }) => body, {
  	//                     ^?
	  	body: t.Object({
			id: t.String()
		}),
		query: z.object({
			name: z.string()
		})
   	})
```

Elysia can automatically infer types from schema like TypeBox and [your favorite validation library](/essential/validation#standard-schema) like:

- Zod
- Valibot
- ArkType
- Effect Schema
- Yup
- Joi

### Schema to Type

All of schema library supported by Elysia can be converted to TypeScript type.

\<Tab
id="quickstart"
:names="\['TypeBox', 'Zod', 'Valibot', 'ArkType']"
:tabs="\['typebox', 'zod', 'valibot', 'arktype']"
noTitle

>

```ts twoslash
import { Elysia, t } from 'elysia'

const User = t.Object({
  	id: t.String(),
  	name: t.String()
})

type User = typeof User['static']
//    ^?
```

```ts twoslash
import { z } from 'zod'

const User = z.object({
  	id: z.string(),
  	name: z.string()
})

type User = z.infer<typeof User>
//    ^?
```

```ts twoslash
import * as v from 'valibot'

const User = v.object({
  	id: v.string(),
  	name: v.string()
})

type User = v.InferOutput<typeof User>
//    ^?
```

```ts twoslash
import { type } from 'arktype'

const User = type({
  	id: 'string',
  	name: 'string'
})

type User = typeof User.infer
//    ^?
```

## Type Performance

Elysia is built with type inference performance in mind.

Before every release, we have a local benchmark to ensure that type inference is always snappy, fast, and doesn't blow up your IDE with "Type instantiation is excessively deep and possibly infinite" error.

Most of the time writing Elysia, you wouldn't encounter any type performance issue.

However, if you do, here is how to break down what's slowing down your type inference:

1. Navigate to the root of your project and run

```
tsc --generateTrace trace --noEmit --incremental false
```

This should generate a `trace` folder in your project root.

2. Open [Perfetto UI](https://ui.perfetto.dev) and drag the `trace/trace.json` file

![Perfetto](/assets/perfetto.webp)

> It should show you a flame graph like this

Then you can find a chunk that takes a long time to be evaluated, click on it and it should show you how long the inference take, and which file, and line number it is coming from.

This should help you to identify the bottleneck of your type inference.

### Eden

If you are having a slow type inference issue when using [Eden](/eden/overview), you can try using a sub app of Elysia to isolate the type inference.

```ts [backend/src/index.ts]
import { Elysia } from 'elysia'
import { plugin1, plugin2, plugin3 } from './plugin'

const app = new Elysia()
	.use([plugin1, plugin2, plugin3])
  	.listen(3000)

export type app = typeof app

// Export sub app
export type subApp = typeof plugin1 // [!code ++]
```

And on your frontend, you can import the sub app instead of the whole app.

```ts [frontend/src/index.ts]
import { treaty } from '@elysiajs/eden'
import type { subApp } from 'backend/src'

const api = treaty<subApp>('localhost:3000') // [!code ++]
```

This should make your type inference faster as it doesn't need to evaluate the whole app.

See [Eden Treaty](/eden/overview) to learn more about Eden.

***

# Unit Test

Elysia provides a **Elysia.fetch** function to easily test your application.

**Elysia.fetch** takes a Web Standard Request, and returns a Response similar to the browser's fetch API.

```typescript
import { Elysia } from 'elysia'

const app = new Elysia()
	.get('/', 'Hello World')

app.fetch(new Request('http://localhost/'))
	.then((res) => res.text())
	.then(console.log)
```

This will run a request like an **actual request** (not simulated).

### Test

This allows us to easily test our application without running a server.

```typescript [Bun Test]
import { describe, it, expect } from 'bun:test'

import { Elysia } from 'elysia'

describe('Elysia', () => {
	it('should return Hello World', async () => {
		const app = new Elysia().get('/', 'Hello World')

		const text = await app.fetch(new Request('http://localhost/'))
			.then(res => res.text())

		expect(text).toBe('Hello World')
	})
})
```

```typescript [Vitest]
import { describe, it, expect } from 'vitest'

import { Elysia } from 'elysia'

describe('Elysia', () => {
	it('should return Hello World', async () => {
		const app = new Elysia().get('/', 'Hello World')

		const text = await app.fetch(new Request('http://localhost/'))
			.then(res => res.text())

		expect(text).toBe('Hello World')
	})
})
```

```typescript [Jest]
import { describe, it, test } from '@jest/globals'

import { Elysia } from 'elysia'

describe('Elysia', () => {
	test('should return Hello World', async () => {
		const app = new Elysia().get('/', 'Hello World')

		const text = await app.fetch(new Request('http://localhost/'))
			.then(res => res.text())

		expect(text).toBe('Hello World')
	})
})
```

See Unit Test.

## Assignment

Let's click the  icon in the preview to see how's the request is logged.

***
