# WebSocket

Nitro natively supports runtime agnostic [WebSocket](https://developer.mozilla.org/en-US/docs/Web/API/WebSocket){rel=""nofollow""} API using [CrossWS](https://crossws.unjs.io/){rel=""nofollow""} and [H3 WebSocket](https://v1.h3.dev/guide/websocket){rel=""nofollow""}.

:read-more{title="WebSocket in MDN" to="https://developer.mozilla.org/en-US/docs/Web/API/WebSocket"}

:read-more{title="CrossWS" to="https://crossws.unjs.io/"}

## Opt-in to the experimental feature

::important
WebSockets support is currently experimental. See [nitrojs/nitro#2171](https://github.com/nitrojs/nitro/issues/2171){rel=""nofollow""} for platform support status.
::

In order to enable websocket support you need to enable the experimental `websocket` feature flag.

::code-group

```ts [nitro.config.ts]
export default defineNitroConfig({
  experimental: {
    websocket: true
  }
})
```

```ts [nuxt.config.ts]
export default defineNuxtConfig({
  nitro: {
    experimental: {
      websocket: true
    }
  }
})
```

::

## Usage

Create a websocket handler in `server/routes/_ws.ts`.

::tip
You can use any route like `server/routes/chatroom.ts` to register upgrade handler on `/chatroom`.
::

```ts [server/routes/_ws.ts]
export default defineWebSocketHandler({
  open(peer) {
    console.log("[ws] open", peer);
  },

  message(peer, message) {
    console.log("[ws] message", peer, message);
    if (message.text().includes("ping")) {
      peer.send("pong");
    }
  },

  close(peer, event) {
    console.log("[ws] close", peer, event);
  },

  error(peer, error) {
    console.log("[ws] error", peer, error);
  },
});

```

::note
Nitro allows you defining multiple websocket handlers using same routing of event handlers.
::

Use a client to connect to server. Example: (`server/routes/websocket.ts`)

```ts [index.ts]
export default defineEventHandler(() => {
  return $fetch(
    "https://raw.githubusercontent.com/unjs/crossws/main/examples/h3/public/index.html"
  );
});

```

Now you can try it on `/websocket` route!

::tip
Check out our [chat demo](https://nuxt-chat.pi0.io/){rel=""nofollow""} using Nitro Websocket API.
::

## Server-Sent Events (SSE)

As an alternative to WebSockets, you can use [Server-sent events](https://developer.mozilla.org/en-US/docs/Web/API/Server-sent_events){rel=""nofollow""}

### Example

Create an SSE handler in `server/routes/sse.ts`.

```ts [server/routes/sse.ts]
export default defineEventHandler(async (event) => {
  const eventStream = createEventStream(event)

  const interval = setInterval(async () => {
    await eventStream.push(`Message @ ${new Date().toLocaleTimeString()}`)
  }, 1000)

  eventStream.onClosed(async () => {
    clearInterval(interval)
    await eventStream.close()
  })

  return eventStream.send()
})
```

Then connect to this SSE endpoint from the client

```ts
const eventSource = new EventSource('http://localhost:3000/sse')

eventSource.onmessage = (event) => {
  console.log(event.data)
}
```

:read-more{title="SSE guide in H3" to="https://v1.h3.dev/guide/websocket#server-sent-events-sse"}
