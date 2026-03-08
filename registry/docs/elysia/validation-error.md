# Validation Error

If you use `Elysia.t` for validation, you can provide a custom error message based on the field that fails the validation.

```typescript
import { Elysia, t } from 'elysia'

new Elysia()
	.post(
		'/',
		({ body }) => body,
		{
			body: t.Object({
				age: t.Number({
					error: 'Age must be a number' // [!code ++]
				})
			}, {
				error: 'Body must be an object' // [!code ++]
			})
		}
	)
	.listen(3000)
```

Elysia will override the default error message with the custom one you provide, see Custom Validation Message.

## Validation Detail

By default Elysia also provides a Validation Detail to explain what's wrong with the validation as follows:

```json
{
	"type": "validation",
	"on": "params",
	"value": { "id": "string" },
	"property": "/id",
	"message": "id must be a number", // [!code ++]
	"summary": "Property 'id' should be one of: 'numeric', 'number'",
	"found": { "id": "string" },
	"expected": { "id": 0 },
	"errors": [
		{
			"type": 62,
			"schema": {
				"anyOf": [
					{ "format": "numeric", "default": 0, "type": "string" },
					{ "type": "number" }
				]
			},
			"path": "/id",
			"value": "string",
			"message": "Expected union value",
			"errors": [{ "iterator": {} }, { "iterator": {} }],
			"summary": "Property 'id' should be one of: 'numeric', 'number'"
		}
	]
}
```

However, when you provide a custom error message, it will completely override Validation Detail

To bring back the validation detail, you can wrap your custom error message in a Validation Detail function.

```typescript
import { Elysia, t, validationDetail } from 'elysia' // [!code ++]

new Elysia()
	.post(
		'/',
		({ body }) => body,
		{
			body: t.Object({
				age: t.Number({
					error: validationDetail('Age must be a number') // [!code ++]
				})
			}, {
				error: validationDetail('Body must be an object') // [!code ++]
			})
		}
	)
	.listen(3000)
```

## Assignment

Let's try to extend Elysia's context.

\\

We can provide a custom error message by providing `error` property to the schema.

```typescript
import { Elysia, t } from 'elysia'

new Elysia()
	.post(
		'/',
		({ body }) => body,
		{
			body: t.Object({
				age: t.Number({
                    error: 'thing' // [!code ++]
                })
			})
		}
	)
	.listen(3000)
```

***
