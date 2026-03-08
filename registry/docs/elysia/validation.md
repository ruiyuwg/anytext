# Validation

Elysia offers data validation out of the box.

You can use `Elysia.t` to define a schema.

```typescript
import { Elysia, t } from 'elysia'

new Elysia()
	.post(
		'/user',
		({ body: { name } }) => `Hello ${name}!`,
		{
			body: t.Object({
				name: t.String(),
				age: t.Number()
			})
		}
	)
	.listen(3000)
```

When you define a schema, Elysia will ensure the data is in a correct shape.

If the data doesn't match the schema, Elysia will return a **422 Unprocessable Entity** error.

See Validation.

### Bring your own

Alternatively, Elysia support **Standard Schema**, allowing you to use a library of your choice like **zod**, **yup** or **valibot**.

```typescript
import { Elysia } from 'elysia'
import { z } from 'zod'

new Elysia()
	.post(
		'/user',
		({ body: { name } }) => `Hello ${name}!`,
		{
			body: z.object({
				name: z.string(),
				age: z.number()
			})
		}
	)
	.listen(3000)
```

See Standard Schema for all compatible schema.

## Validation Type

You can validate the following property:

- `body`
- `query`
- `params`
- `headers`
- `cookie`
- `response`

Once a schema is defined, Elysia will infer types for you so you don't have to define a separate schema in TypeScript.

See Schema Type for each type.

## Response Validation

When you define a validation schema for `response`, Elysia will validate the response before sending it to the client, and type check the response for you.

You can also specify which status code to validate:

```typescript
import { Elysia, t } from 'elysia'

new Elysia()
	.get(
		'/user',
		() => `Hello Elysia!`,
		{
			response: {
				200: t.Literal('Hello Elysia!'),
				418: t.Object({
					message: t.Literal("I'm a teapot")
				})
			}
		}
	)
	.listen(3000)
```

See Response Validation.

## Assignment

Let's exercise what we have learned.

\\

We can define a schema by using `t.Object` provided to the `body` property.

```typescript
import { Elysia, t } from 'elysia'

new Elysia()
	.post(
		'/user',
		({ body: { name } }) => `Hello ${name}!`,
		{
			body: t.Object({
				name: t.String()
			})
		}
	)
	.listen(3000)
```

***
