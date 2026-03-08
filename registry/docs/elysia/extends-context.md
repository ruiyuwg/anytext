# Extends Context

Elysia provides a context with small utilities to help you get started.

You can extend Elysia's context with:

1. Decorate
2. State
3. Resolve
4. Derive

## Decorate

**Singleton**, and **immutable** properties that are shared across all requests.

```typescript
import { Elysia } from 'elysia'

class Logger {
    log(value: string) {
        console.log(value)
    }
}

new Elysia()
    .decorate('logger', new Logger())
    .get('/', ({ logger }) => {
        logger.log('hi')

        return 'hi'
    })
```

Decorated value it will be available in the context as a read-only property, see Decorate.

## State

A **mutable** reference that is shared across all requests.

```typescript
import { Elysia } from 'elysia'

new Elysia()
	.state('count', 0)
	.get('/', ({ store }) => {
		store.count++

		return store.count
	})
```

State will be available in **context.store** that is shared across every request, see State.

## Resolve / Derive

Decorate value is registered as a singleton.

While Resolve, and Derive allows you to abstract a context value **per request**.

```typescript
import { Elysia } from 'elysia'

new Elysia()
	.derive(({ headers: { authorization } }) => ({
		authorization
	}))
	.get('/', ({ authorization }) => authorization)
```

Any **returned value will be available in context** except status, which will be send to client directly, and abort the subsequent handlers.

Syntax for both resolve, derive is similar but they have different use cases.

Under the hood, both is a syntax sugar (with type safety) of a lifecycle:

- derive is based on transform
- resolve is based on before handle

Since derive is based on transform, which means that data isn't validated, and coerce/transform yet. It's better to use resolve if you need validated data.

## Scope

State, and Decorate are shared across all requests, and instances.

Resolve, and Derive are per request, and have an encapsulation scope (as they're based on life-cycle event).

If you want to use a resolved/derived value from a plugin, you would have to declare a Scope.

```typescript
import { Elysia } from 'elysia'

const plugin = new Elysia()
	.derive(
		{ as: 'scoped' }, // [!code ++]
		({ headers: { authorization } }) => ({
			authorization
		})
	)

new Elysia()
	.use(plugin)
	.get('/', ({ authorization }) => authorization)
	.listen(3000)
```

## Assignment

Let's try to extend Elysia's context.

\\

We can use resolve to extract age from query.

```typescript
import { Elysia, t } from 'elysia'

class Logger {
	log(info: string) {
		console.log(info)
	}
}

new Elysia()
	.decorate('logger', new Logger())
	.onRequest(({ request, logger }) => {
		logger.log(`Request to ${request.url}`)
	})
	.guard({
		query: t.Optional(
			t.Object({
				age: t.Number({ min: 15 })
			})
		)
	})
	.resolve(({ query: { age }, status }) => {
		if(!age) return status(401)

		return { age }
	})
	.get('/profile', ({ age }) => age)
	.listen(3000)
```

***
