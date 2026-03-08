Version: 4.x

# Scaling horizontally

Now that our application is resilient to temporary network interruptions, let's see how we can horizontally scale it in order to be able to support thousands of concurrent clients.

note

-   Horizontal scaling (also known as "scaling out") means adding new servers to your infrastructure to cope with new demands
-   Vertical scaling (also known as "scaling up") means adding more resources (processing power, memory, storage, ...) to your existing infrastructure

First step: let's use all the available cores of the host. By default, Node.js runs your Javascript code in a single thread, which means that even with a 32-core CPU, only one core will be used. Fortunately, the Node.js [`cluster` module](https://nodejs.org/api/cluster.html#cluster) provides a convenient way to create one worker thread per core.

We will also need a way to forward events between the Socket.IO servers. We call this component an "Adapter".

![The 'hello' event is forwarded to the other servers](/images/tutorial/adapter.png)![The 'hello' event is forwarded to the other servers](/images/tutorial/adapter-dark.png)

So let's install the cluster adapter:

-   NPM
-   Yarn
-   pnpm
-   Bun

```
npm install @socket.io/cluster-adapter
```

```
yarn add @socket.io/cluster-adapter
```

```
pnpm add @socket.io/cluster-adapter
```

```
bun add @socket.io/cluster-adapter
```

Now we plug it in:

-   CommonJS
-   ES modules

index.js

```
const express = require('express');const { createServer } = require('node:http');const { join } = require('node:path');const { Server } = require('socket.io');const sqlite3 = require('sqlite3');const { open } = require('sqlite');const { availableParallelism } = require('node:os');const cluster = require('node:cluster');const { createAdapter, setupPrimary } = require('@socket.io/cluster-adapter');if (cluster.isPrimary) {  const numCPUs = availableParallelism();  // create one worker per available core  for (let i = 0; i < numCPUs; i++) {    cluster.fork({      PORT: 3000 + i    });  }    // set up the adapter on the primary thread  return setupPrimary();}async function main() {  const app = express();  const server = createServer(app);  const io = new Server(server, {    connectionStateRecovery: {},    // set up the adapter on each worker thread    adapter: createAdapter()  });  // [...]  // each worker will listen on a distinct port  const port = process.env.PORT;  server.listen(port, () => {    console.log(`server running at http://localhost:${port}`);  });}main();
```

index.js

```
import express from 'express';import { createServer } from 'node:http';import { Server } from 'socket.io';import sqlite3 from 'sqlite3';import { open } from 'sqlite';import { availableParallelism } from 'node:os';import cluster from 'node:cluster';import { createAdapter, setupPrimary } from '@socket.io/cluster-adapter';if (cluster.isPrimary) {  const numCPUs = availableParallelism();  // create one worker per available core  for (let i = 0; i < numCPUs; i++) {    cluster.fork({      PORT: 3000 + i    });  }    // set up the adapter on the primary thread  setupPrimary();} else {  const app = express();  const server = createServer(app);  const io = new Server(server, {    connectionStateRecovery: {},    // set up the adapter on each worker thread    adapter: createAdapter()  });  // [...]  // each worker will listen on a distinct port  const port = process.env.PORT;  server.listen(port, () => {    console.log(`server running at http://localhost:${port}`);  });}
```

That's it! This will spawn one worker thread per CPU available on your machine. Let's see it in action:

As you can see in the address bar, each browser tab is connected to a different Socket.IO server, and the adapter is simply forwarding the `chat message` events between them.

tip

There are currently 5 official adapter implementations:

-   the [Redis adapter](/docs/v4/redis-adapter/)
-   the [Redis Streams adapter](/docs/v4/redis-streams-adapter/)
-   the [MongoDB adapter](/docs/v4/mongo-adapter/)
-   the [Postgres adapter](/docs/v4/postgres-adapter/)
-   the [Cluster adapter](/docs/v4/cluster-adapter/)

So you can choose the one that best suits your needs. However, please note that some implementations do not support the Connection state recovery feature, you can find the compatibility matrix [here](/docs/v4/connection-state-recovery#compatibility-with-existing-adapters).

note

In most cases, you would also need to ensure that all the HTTP requests of a Socket.IO session reach the same server (also known as "sticky session"). This is not needed here though, as each Socket.IO server has its own port.

More information [here](/docs/v4/using-multiple-nodes/).

And that finally completes our chat application! In this tutorial, we have seen how to:

-   send an event between the client and the server
-   broadcast an event to all or a subset of connected clients
-   handle temporary disconnections
-   scale out

You should now have a better overview of the features provided by Socket.IO. Now it's your time to build your own realtime application!

info

-   CommonJS
-   ES modules

You can run this example directly in your browser on:

-   [CodeSandbox](https://codesandbox.io/p/sandbox/github/socketio/chat-example/tree/cjs/step9?file=index.js)
-   [StackBlitz](https://stackblitz.com/github/socketio/chat-example/tree/cjs/step9?file=index.js)

You can run this example directly in your browser on:

-   [CodeSandbox](https://codesandbox.io/p/sandbox/github/socketio/chat-example/tree/esm/step9?file=index.js)
-   [StackBlitz](https://stackblitz.com/github/socketio/chat-example/tree/esm/step9?file=index.js)
-   [Repl.it](https://replit.com/github/socketio/chat-example)
