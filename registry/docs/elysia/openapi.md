# OpenAPI

Elysia is built around OpenAPI, and supports OpenAPI documentation out of the box.

We can use OpenAPI plugin to show an API documentation.

```typescript
import { Elysia, t } from 'elysia'
import { openapi } from '@elysiajs/openapi' // [!code ++]

new Elysia()
	.use(openapi()) // [!code ++]
	.post(
		'/',
		({ body }) => body,
		{
			body: t.Object({
				age: t.Number()
			})
		}
	)
	.listen(3000)
```

Once added, we can access our API documentation at **/openapi**.

## Detail

We can provide API documentation with a `detail` field which follows OpenAPI 3.0 specification (with auto-completion):

```typescript
import { Elysia, t } from 'elysia'
import { openapi } from '@elysiajs/openapi'

new Elysia()
	.use(openapi())
	.post(
		'/',
		({ body }) => body,
		{
			body: t.Object({
				age: t.Number()
			}),
			detail: { // [!code ++]
				summary: 'Create a user', // [!code ++]
				description: 'Create a user with age', // [!code ++]
				tags: ['User'], // [!code ++]
			} // [!code ++]
		}
	)
	.listen(3000)
```

## Reference Model

We can also define reusable schema with Reference Model:

```typescript
import { Elysia, t } from 'elysia'
import { openapi } from '@elysiajs/openapi'

new Elysia()
	.use(openapi())
	.model({
		age: t.Object({ // [!code ++]
			age: t.Number() // [!code ++]
		}) // [!code ++]
	})
	.post(
		'/',
		({ body }) => body,
		{
			age: t.Object({ // [!code --]
				age: t.Number() // [!code --]
			}), // [!code --]
			body: 'age',  // [!code ++]
			detail: {
				summary: 'Create a user',
				description: 'Create a user with age',
				tags: ['User'],
			}
		}
	)
	.listen(3000)
```

When we defined a reference model, it will be shown in the **Components** section of the OpenAPI documentation.

## Type Gen

OpenAPI Type Gen can document your API **without manual annotation** infers directly from TypeScript type. No Zod, TypeBox, manual interface declaraiont, etc.

**This feature is unique to Elysia**, and is not available in other JavaScript frameworks.

For example, if you use Drizzle ORM or Prisma, Elysia can infer the schema directly from the query.

![Drizzle](/blog/openapi-type-gen/drizzle-typegen.webp)

> Returning Drizzle query from Elysia route handler will be automatically inferred into OpenAPI schema.

To use OpenAPI Type Gen, simply apply the `fromTypes` plugin before `openapi` plugin.

```typescript
import { Elysia } from 'elysia'

import { openapi, fromTypes } from '@elysiajs/openapi' // [!code ++]

new Elysia()
	.use(openapi({
		references: fromTypes() // [!code ++]
	}))
	.get('/', { hello: 'world' })
	.listen(3000)
```

### Browser Environment

Unfortunately, this feature requires the **fs** module to read your source code, and is not available in this web playground. As Elysia is running directly in your browser (not a separated server).

You can try this feature locally with Type Gen Example repository:

```bash
git clone https://github.com/SaltyAom/elysia-typegen-example && \
cd elysia-typegen-example && \
bun install && \
bun run dev
```

## Assignment

Let's use the preview to **GET '/openapi'** and see how our API documentation looks.

This API documentation is reflected from your code.

Try to modify the code and see how the documentation changes!

***
