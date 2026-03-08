# Encapsulation

Elysia hooks are **encapsulated** to its own instance only.

If you create a new instance, it will not share hooks with other instances.

```ts
import { Elysia } from 'elysia'

const profile = new Elysia()
	.onBeforeHandle(
		({ query: { name }, status }) => {
			if(!name)
				return status(401)
		}
	)
	.get('/profile', () => 'Hi!')

new Elysia()
	.use(profile)
	.patch('/rename', () => 'Ok! XD')
	.listen(3000)
```

> Try changing the path in the URL bar to **/rename** and see the result

**Elysia isolates lifecycle** unless explicitly stated.

This is similar to **export** in JavaScript, where you need to export the function to make it available outside the module.

To **"export"** the lifecycle to other instances, you must specify the scope.

### Scope

There are 3 scopes available:

1. **local** (default) - apply to only current instance and descendant only
2. **scoped** - apply to parent, current instance and descendants
3. **global** - apply to all instance that apply the plugin (all parents, current, and descendants)

In our case, we want to apply the sign-in check to the `app` which is a direct parent, so we can use either **scoped** or **global**.

```ts
import { Elysia } from 'elysia'

const profile = new Elysia()
	.onBeforeHandle(
		{ as: 'scoped' }, // [!code ++]
		({ cookie }) => {
			throwIfNotSignIn(cookie)
		}
	)
	.get('/profile', () => 'Hi there!')

const app = new Elysia()
	.use(profile)
	// This has sign in check
	.patch('/rename', ({ body }) => updateProfile(body))
```

Casting lifecycle to **"scoped"** will export lifecycle to **parent instance**.
While **"global"** will export lifecycle to **all instances** that has a plugin.

Learn more about this in scope.

## Guard

Similar to lifecycle, **schema** is also encapsulated to its own instance.

We can specify guard scope similar to lifecycle.

```typescript
import { Elysia } from 'elysia'

const user = new Elysia()
	.guard({
		as: 'scoped', // [!code ++]
		query: t.Object({
			age: t.Number(),
			name: t.Optional(t.String())
		}),
		beforeHandle({ query: { age }, status }) {
			if(age < 18) return status(403)
		}
	})
	.get('/profile', () => 'Hi!')
	.get('/settings', () => 'Settings')
```

It's very important to note that every hook will affect all routes **after** its declaration.

See Scope for more information.

## Assignment

Let's define a scope for `nameCheck`, and `ageCheck` to make our app works.

\\

We can modify scope as follows:

1. modify `nameCheck` scope to **scoped**
2. modify `ageCheck` scope to **global**

```typescript
import { Elysia, t } from 'elysia'

const nameCheck = new Elysia()
	.onBeforeHandle(
		{ as: 'scoped' }, // [!code ++]
		({ query: { name }, status }) => {
			if(!name) return status(401)
		}
	)

const ageCheck = new Elysia()
	.guard({
		as: 'global', // [!code ++]
		query: t.Object({
			age: t.Number(),
			name: t.Optional(t.String())
		}),
		beforeHandle({ query: { age }, status }) {
			if(age < 18) return status(403)
		}
	})

const name = new Elysia()
	.use(nameCheck)
	.patch('/rename', () => 'Ok! XD')

const profile = new Elysia()
	.use(ageCheck)
	.use(name)
	.get('/profile', () => 'Hi!')

new Elysia()
	.use(profile)
	.listen(3000)
```

***

# End-to-End Type Safety

Elysia provides an end-to-end type safety between backend and frontend **without code generation** similar to tRPC, using Eden.

```typescript
import { Elysia } from 'elysia'
import { treaty } from '@elysiajs/eden'

// Backend
export const app = new Elysia()
	.get('/', 'Hello Elysia!')
	.listen(3000)

// Frontend
const client = treaty<typeof app>('localhost:3000')

const { data, error } = await client.get()

console.log(data) // Hello World
```

This works by inferring the types from the Elysia instance, and uses type hints to provide type safety for the client.

See Eden Treaty.

## Assignment

Let's click the  icon in the preview to see how's the request is logged.

***
