# Your First Route

When we enter a website, it takes

1. **path** like `/`, `/about`, or `/contact`
2. **method** like `GET`, `POST`, or `DELETE`

To determine which resource to show, simply called **"route"**.

In Elysia, we can define a route by:

1. Call method named after HTTP method
2. Path being the first argument
3. Handler being the second argument

```typescript
import { Elysia } from 'elysia'

new Elysia()
	.get('/', 'Hello World!')
	.listen(3000)
```

## Routing

Path in Elysia can be grouped into 3 types:

1. static paths - static string to locate the resource
2. dynamic paths - segment can be any value
3. wildcards - path until a specific point can be anything

See Route.

## Static Path

Static path is a hardcoded string to locate the resource on the server.

```ts
import { Elysia } from 'elysia'

new Elysia()
	.get('/hello', 'hello')
	.get('/hi', 'hi')
	.listen(3000)
```

See Static Path.

## Dynamic path

Dynamic paths match some part and capture the value to extract extra information.

To define a dynamic path, we can use a colon `:` followed by a name.

```typescript twoslash
import { Elysia } from 'elysia'

new Elysia()
    .get('/id/:id', ({ params: { id } }) => id)
    .listen(3000)
```

Here, a dynamic path is created with `/id/:id`, which tells Elysia to capture the value `:id` segment with value like **/id/1**, **/id/123**, **/id/anything**.

See Dynamic Path.

### Optional path parameters

We can make a path parameter optional by adding a question mark `?` after the parameter name.

```typescript twoslash
import { Elysia } from 'elysia'

new Elysia()
    .get('/id/:id?', ({ params: { id } }) => `id ${id}`)
    .listen(3000)
```

See Optional Path Parameters.

## Wildcards

Dynamic paths allow capturing a single segment while wildcards allow capturing the rest of the path.

To define a wildcard, we can use an asterisk `*`.

```typescript twoslash
import { Elysia } from 'elysia'

new Elysia()
    .get('/id/*', ({ params }) => params['*'])
    .listen(3000)
```

See Wildcards.

## Assignment

Let's recap, and create 3 paths with different types:

\\

1. Static path `/elysia` that responds with `"Hello Elysia!"`
2. Dynamic path `/friends/:name?` that responds with `"Hello {name}!"`
3. Wildcard path `/flame-chasers/*` that responds with the rest of the path.

```typescript
import { Elysia } from 'elysia'

new Elysia()
	.get('/elysia', 'Hello Elysia!')
	.get('/friends/:name?', ({ params: { name } }) => `Hello ${name}!`)
	.get('/flame-chasers/*', ({ params }) => params['*'])
	.listen(3000)
```
