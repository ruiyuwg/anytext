id: websockets
title: WebSockets
sidebar\_label: WebSockets
slug: /server/websockets
------------------------

You can use WebSockets for all or some of the communication with your server, see [wsLink](../client/links/wsLink.md) for how to set it up on the client.

:::tip
The document here outlines the specific details of using WebSockets. For general usage of subscriptions, see [our subscriptions guide](../server/subscriptions.md).
:::

### Creating a WebSocket-server

```bash
yarn add ws
```

```ts title='server/wsServer.ts'
import { applyWSSHandler } from '@trpc/server/adapters/ws';
import ws from 'ws';
import { appRouter } from './routers/app';
import { createContext } from './trpc';

const wss = new ws.Server({
  port: 3001,
});
const handler = applyWSSHandler({
  wss,
  router: appRouter,
  createContext,
  // Enable heartbeat messages to keep connection open (disabled by default)
  keepAlive: {
    enabled: true,
    // server ping message interval in milliseconds
    pingMs: 30000,
    // connection is terminated if pong message is not received in this many milliseconds
    pongWaitMs: 5000,
  },
});

wss.on('connection', (ws) => {
  console.log(`➕➕ Connection (${wss.clients.size})`);
  ws.once('close', () => {
    console.log(`➖➖ Connection (${wss.clients.size})`);
  });
});
console.log('✅ WebSocket Server listening on ws://localhost:3001');

process.on('SIGTERM', () => {
  console.log('SIGTERM');
  handler.broadcastReconnectNotification();
  wss.close();
});
```

### Setting `TRPCClient` to use WebSockets

:::tip
You can use [Links](../client/links/overview.md) to route queries and/or mutations to HTTP transport and subscriptions over WebSockets.
:::

```tsx title='client.ts'
import { createTRPCClient, createWSClient, wsLink } from '@trpc/client';
import type { AppRouter } from '../path/to/server/trpc';

// create persistent WebSocket connection
const wsClient = createWSClient({
  url: `ws://localhost:3001`,
});

// configure TRPCClient to use WebSockets transport
const client = createTRPCClient<AppRouter>({
  links: [
    wsLink({
      client: wsClient,
    }),
  ],
});
```
