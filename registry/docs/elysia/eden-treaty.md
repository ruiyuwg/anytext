# Eden Treaty

Eden Treaty is an object representation used to interact with a server and features type safety, auto-completion, and error handling.

To use Eden Treaty, first export your existing Elysia server's type:

```typescript
// server.ts
import { Elysia, t } from 'elysia'

const app = new Elysia()
    .get('/hi', () => 'Hi Elysia')
    .get('/id/:id', ({ params: { id } }) => id)
    .post('/mirror', ({ body }) => body, {
        body: t.Object({
            id: t.Number(),
            name: t.String()
        })
    })
    .listen(3000)

export type App = typeof app // [!code ++]
```

Then import the server type and consume the Elysia API on the client:

```typescript twoslash
// @filename: server.ts
import { Elysia, t } from 'elysia'

const app = new Elysia()
    .get('/hi', () => 'Hi Elysia')
    .get('/id/:id', ({ params: { id } }) => id)
    .post('/mirror', ({ body }) => body, {
        body: t.Object({
            id: t.Number(),
            name: t.String()
        })
    })
    .listen(3000)

export type App = typeof app // [!code ++]

// @filename: client.ts
// ---cut---
// client.ts
import { treaty } from '@elysiajs/eden'
import type { App } from './server' // [!code ++]

const app = treaty<App>('localhost:3000')

// response type: 'Hi Elysia'
const { data, error } = await app.hi.get()
      // ^?
```

## Tree-like syntax

HTTP Path is a resource indicator for a file system tree.

A file system consists of multiple levels of folders, for example:

- /documents/elysia
- /documents/kalpas
- /documents/kelvin

Each level is separated by **/** (slash) and a name.

However, in JavaScript, instead of using **"/"** (slash), we use **"."** (dot) to access deeper resources.

Eden Treaty turns an Elysia server into a tree-like file system that can be accessed from the JavaScript frontend instead.

| Path         | Treaty       |
| ------------ | ------------ |
| /            |              |
| /hi          | .hi          |
| /deep/nested | .deep.nested |

Combined with the HTTP method, we can interact with the Elysia server.

| Path         | Method | Treaty              |
| ------------ | ------ | ------------------- |
| /            | GET    | .get()              |
| /hi          | GET    | .hi.get()           |
| /deep/nested | GET    | .deep.nested.get()  |
| /deep/nested | POST   | .deep.nested.post() |

## Dynamic path

However, dynamic path parameters cannot be expressed using notation alone. If they are fully replaced, we don't know what the parameter name is supposed to be.

```typescript
// ❌ Unclear what the value is supposed to represent?
treaty.item['skadi'].get()
```

To handle this, we can specify a dynamic path using a function to provide a key value instead.

```typescript
// ✅ Clear that the value is dynamic and the path is 'name'
treaty.item({ name: 'Skadi' }).get()
```

| Path            | Treaty                           |
| --------------- | -------------------------------- |
| /item           | .item                            |
| /item/:name     | .item({ name: 'Skadi' })         |
| /item/:name/id  | .item({ name: 'Skadi' }).id      |

***

# Welcome to ElysiaJS

It's great to have you here! This playground is designed to help you get started with ElysiaJS quickly and easily.

Unlike traditional backend framework, Elysia can also run in a browser! Allowing you to write, and try out Elysia directly in your browser! making it a perfect environment for learning and experimentation.

Elysia is an ergonomic web framework for humans.

***

# Plugin

Every Elysia instance can be plug-and-play with other instances using the `use` method.

```typescript
import { Elysia } from 'elysia'

const user = new Elysia()
	.get('/profile', 'User Profile')
	.get('/settings', 'User Settings')

new Elysia()
	.use(user) // [!code ++]
	.get('/', 'Home')
	.listen(3000)
```

Once applied, all routes from `user` instance will be available in `app` instance.

### Plugin Config

You can also create a plugin that takes an argument and returns an Elysia instance to make a more dynamic plugin.

```typescript
import { Elysia } from 'elysia'

const user = ({ log = false }) => new Elysia() // [!code ++]
	.onBeforeHandle(({ request }) => {
		if (log) console.log(request)
	})
	.get('/profile', 'User Profile')
	.get('/settings', 'User Settings')

new Elysia()
	.use(user({ log: true })) // [!code ++]
	.get('/', 'Home')
	.listen(3000)
```

It's also recommended that you read about [Key Concept: Dependency](/key-concept#dependency) to understand how Elysia handles dependencies between plugins.

## Assignment

Let's apply the `user` instance to the `app` instance.

\\

Similar to the above example, we can use the `use` method to plug the `user` instance into the `app` instance.

```typescript
import { Elysia } from 'elysia'

const user = new Elysia()
	.get('/profile', 'User Profile')
	.get('/settings', 'User Settings')

const app = new Elysia()
	.use(user) // [!code ++]
	.get('/', 'Home')
	.listen(3000)
```

***
