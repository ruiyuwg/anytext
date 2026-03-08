# Response

Once the fetch method is called, Eden Treaty returns a `Promise` containing an object with the following properties:

- data - returned value of the response (2xx)
- error - returned value from the response (>= 3xx)
- response `Response` - Web Standard Response class
- status `number` - HTTP status code
- headers `FetchRequestInit['headers']` - response headers

Once returned, you must provide error handling to ensure that the response data value is unwrapped; otherwise, the value will be nullable. Elysia provides an `error()` helper function to handle the error, and Eden will provide type narrowing for the error value.

```typescript
import { Elysia, t } from 'elysia'
import { treaty } from '@elysiajs/eden'

const app = new Elysia()
    .post('/user', ({ body: { name }, status }) => {
        if(name === 'Otto') return status(400)

        return name
    }, {
        body: t.Object({
            name: t.String()
        })
    })
    .listen(3000)

const api = treaty<typeof app>('localhost:3000')

const submit = async (name: string) => {
    const { data, error } = await api.user.post({
        name
    })

    // type: string | null
    console.log(data)

    if (error)
        switch(error.status) {
            case 400:
                // Error type will be narrow down
                throw error.value

            default:
                throw error.value
        }

    // Once the error is handled, type will be unwrapped
    // type: string
    return data
}
```

By default, Elysia infers `error` and `response` types to TypeScript automatically, and Eden will be providing auto-completion and type narrowing for accurate behavior.

If the server responds with an HTTP status >= 300, then the value will always be `null`, and `error` will have a returned value instead.

Otherwise, response will be passed to `data`.

## Stream response

Eden will interpret a stream response or [Server-Sent Events](/essential/handler.html#server-sent-events-sse) as an `AsyncGenerator`, allowing us to use a `for await` loop to consume the stream.

```typescript twoslash [Stream]
import { Elysia } from 'elysia'
import { treaty } from '@elysiajs/eden'

const app = new Elysia()
	.get('/ok', function* () {
		yield 1
		yield 2
		yield 3
	})

const { data, error } = await treaty(app).ok.get()
if (error) throw error

for await (const chunk of data)
	console.log(chunk)
               // ^?
```

```typescript twoslash [Server-Sent Events]
import { Elysia, sse } from 'elysia'
import { treaty } from '@elysiajs/eden'

const app = new Elysia()
	.get('/ok', function* () {
		yield sse({
			event: 'message',
			data: 1
		})
		yield sse({
			event: 'message',
			data: 2
		})
		yield sse({
			event: 'end'
		})
	})

const { data, error } = await treaty(app).ok.get()
if (error) throw error

for await (const chunk of data)
	console.log(chunk)
               // ^?







//
```

## Utility types

Eden Treaty provides utility types `Treaty.Data<T>` and `Treaty.Error<T>` to extract the `data` and `error` types from the response.

```typescript twoslash
import { Elysia, t } from 'elysia'

import { treaty, Treaty } from '@elysiajs/eden'

const app = new Elysia()
	.post('/user', ({ body: { name }, status }) => {
		if(name === 'Otto') return status(400)

		return name
	}, {
		body: t.Object({
			name: t.String()
		})
	})
	.listen(3000)

const api =
	treaty<typeof app>('localhost:3000')

type UserData = Treaty.Data<typeof api.user.post>
//     ^?


// Alternatively, you can also pass a response
const response = await api.user.post({
	name: 'Saltyaom'
})

type UserDataFromResponse = Treaty.Data<typeof response>
//     ^?



type UserError = Treaty.Error<typeof api.user.post>
//     ^?












//
```

***

# Unit Test

According to [Eden Treaty config](/eden/treaty/config.html#urlorinstance) and [Unit Test](/patterns/unit-test), we may pass an Elysia instance to Eden Treaty directly to interact with the Elysia server directly without sending a network request.

We may use this pattern to create a unit test with end-to-end type safety and type-level tests all at once.

```typescript twoslash
// test/index.test.ts
import { describe, expect, it } from 'bun:test'
import { Elysia } from 'elysia'
import { treaty } from '@elysiajs/eden'

const app = new Elysia().get('/hello', 'hi')
const api = treaty(app)

describe('Elysia', () => {
    it('returns a response', async () => {
        const { data } = await api.hello.get()

        expect(data).toBe('hi')
              // ^?

    })
})
```

## Type safety test

To perform a type safety test, simply run **tsc** on test folders.

```bash
tsc --noEmit test/**/*.ts
```

This is useful to ensure type integrity for both client and server, especially during migrations.

***

# WebSocket

Eden Treaty supports WebSocket using the `subscribe` method.

```typescript twoslash
import { Elysia, t } from "elysia";
import { treaty } from "@elysiajs/eden";

const app = new Elysia()
  .ws("/chat", {
    body: t.String(),
    response: t.String(),
    message(ws, message) {
      ws.send(message);
    },
  })
  .listen(3000);

const api = treaty<typeof app>("localhost:3000");

const chat = api.chat.subscribe();

chat.subscribe((message) => {
  console.log("got", message);
});

chat.on("open", () => {
  chat.send("hello from client");
});
```

**.subscribe** accepts the same parameters as `get` and `head`.

## Response

**Eden.subscribe** returns **EdenWS** which extends the [WebSocket](https://developer.mozilla.org/en-US/docs/Web/API/WebSocket/WebSocket), resulting in identical syntax.

If more control is needed, **EdenWebSocket.raw** can be accessed to interact with the native WebSocket API.

***

***
