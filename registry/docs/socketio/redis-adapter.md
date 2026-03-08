Version: 4.x

On this page

## How it works[​](#how-it-works "Direct link to How it works")

The Redis adapter relies on the Redis [Pub/Sub mechanism](https://redis.io/topics/pubsub).

Every packet that is sent to multiple clients (e.g. `io.to("room1").emit()` or `socket.broadcast.emit()`) is:

-   sent to all matching clients connected to the current server
-   published in a Redis channel, and received by the other Socket.IO servers of the cluster

![Diagram of how the Redis adapter works](/images/broadcasting-redis.png)![Diagram of how the Redis adapter works](/images/broadcasting-redis-dark.png)

The source code of this adapter can be found [here](https://github.com/socketio/socket.io-redis-adapter).

## Supported features[​](#supported-features "Direct link to Supported features")

Feature

`socket.io` version

Support

Socket management

`4.0.0`

✅ YES (since version `6.1.0`)

Inter-server communication

`4.1.0`

✅ YES (since version `7.0.0`)

Broadcast with acknowledgements

[`4.5.0`](/docs/v4/changelog/4.5.0)

✅ YES (since version `7.2.0`)

Connection state recovery

[`4.6.0`](/docs/v4/changelog/4.6.0)

❌ NO

## Installation[​](#installation "Direct link to Installation")

```
npm install @socket.io/redis-adapter
```

## Compatibility table[​](#compatibility-table "Direct link to Compatibility table")

Redis Adapter version

Socket.IO server version

4.x

1.x

5.x

2.x

6.0.x

3.x

6.1.x

4.x

7.x and above

4.3.1 and above

## Usage[​](#usage "Direct link to Usage")

tip

For new developments, we recommend using the [sharded adapter](#with-redis-sharded-pubsub), which takes advantage of the [sharded Pub/Sub feature](https://redis.io/docs/latest/develop/interact/pubsub/#sharded-pubsub) introduced in Redis 7.0.

### With the `redis` package[​](#with-the-redis-package "Direct link to with-the-redis-package")

caution

The `redis` package seems to have problems restoring the Redis subscriptions after reconnection:

-   [https://github.com/redis/node-redis/issues/2155](https://github.com/redis/node-redis/issues/2155)
-   [https://github.com/redis/node-redis/issues/1252](https://github.com/redis/node-redis/issues/1252)

You may want to use the [`ioredis`](#with-the-ioredis-package) package instead.

```
import { createClient } from "redis";import { Server } from "socket.io";import { createAdapter } from "@socket.io/redis-adapter";const pubClient = createClient({ url: "redis://localhost:6379" });const subClient = pubClient.duplicate();await Promise.all([  pubClient.connect(),  subClient.connect()]);const io = new Server({  adapter: createAdapter(pubClient, subClient)});io.listen(3000);
```

### With the `redis` package and a Redis cluster[​](#with-the-redis-package-and-a-redis-cluster "Direct link to with-the-redis-package-and-a-redis-cluster")

```
import { createCluster } from "redis";import { Server } from "socket.io";import { createAdapter } from "@socket.io/redis-adapter";const pubClient = createCluster({  rootNodes: [    {      url: "redis://localhost:7000",    },    {      url: "redis://localhost:7001",    },    {      url: "redis://localhost:7002",    },  ],});const subClient = pubClient.duplicate();await Promise.all([  pubClient.connect(),  subClient.connect()]);const io = new Server({  adapter: createAdapter(pubClient, subClient)});io.listen(3000);
```

### With the `ioredis` package[​](#with-the-ioredis-package "Direct link to with-the-ioredis-package")

```
import { Redis } from "ioredis";import { Server } from "socket.io";import { createAdapter } from "@socket.io/redis-adapter";const pubClient = new Redis();const subClient = pubClient.duplicate();const io = new Server({  adapter: createAdapter(pubClient, subClient)});io.listen(3000);
```

### With the `ioredis` package and a Redis cluster[​](#with-the-ioredis-package-and-a-redis-cluster "Direct link to with-the-ioredis-package-and-a-redis-cluster")

```
import { Cluster } from "ioredis";import { Server } from "socket.io";import { createAdapter } from "@socket.io/redis-adapter";const pubClient = new Cluster([  {    host: "localhost",    port: 7000,  },  {    host: "localhost",    port: 7001,  },  {    host: "localhost",    port: 7002,  },]);const subClient = pubClient.duplicate();const io = new Server({  adapter: createAdapter(pubClient, subClient)});io.listen(3000);
```

### With Redis sharded Pub/Sub[​](#with-redis-sharded-pubsub "Direct link to With Redis sharded Pub/Sub")

Sharded Pub/Sub was introduced in Redis 7.0 in order to help scaling the usage of Pub/Sub in cluster mode.

Reference: [https://redis.io/docs/interact/pubsub/#sharded-pubsub](https://redis.io/docs/interact/pubsub/#sharded-pubsub)

A dedicated adapter can be created with the `createShardedAdapter()` method:

#### With `redis`[​](#with-redis "Direct link to with-redis")

Minimum requirements:

-   Redis 7.0
-   [`redis@4.6.0`](https://github.com/redis/node-redis/commit/3b1bad229674b421b2bc6424155b20d4d3e45bd1)

```
import { Server } from "socket.io";import { createClient } from "redis";import { createShardedAdapter } from "@socket.io/redis-adapter";const pubClient = createClient({ host: "localhost", port: 6379 });const subClient = pubClient.duplicate();await Promise.all([  pubClient.connect(),  subClient.connect()]);const io = new Server({  adapter: createShardedAdapter(pubClient, subClient)});io.listen(3000);
```

#### With `ioredis`[​](#with-ioredis "Direct link to with-ioredis")

Minimum requirements:

-   Redis 7.0
-   [`ioredis@5.9.0`](https://github.com/redis/ioredis/pull/1956)

Please note that the `shardedSubscribers` option is required to enable sharded Pub/Sub.

```
import { Cluster } from "ioredis";import { Server } from "socket.io";import { createShardedAdapter } from "@socket.io/redis-adapter";const pubClient = new Cluster(  [    {      host: "localhost",      port: 7000,    },    {      host: "localhost",      port: 7001,    },    {      host: "localhost",      port: 7002,    },  ],  {    shardedSubscribers: true,  });const subClient = pubClient.duplicate();const io = new Server({  adapter: createShardedAdapter(pubClient, subClient)});io.listen(3000);
```

## Options[​](#options "Direct link to Options")

### Default adapter[​](#default-adapter "Direct link to Default adapter")

Name

Description

Default value

`key`

The prefix for the Redis Pub/Sub channels.

`socket.io`

`requestsTimeout`

After this timeout the adapter will stop waiting from responses to request.

`5_000`

`publishOnSpecificResponseChannel`

Whether to publish a response to the channel specific to the requesting node.

`false`

`parser`

The parser to use for encoding and decoding messages sent to Redis.

`-`

tip

Setting the `publishOnSpecificResponseChannel` option to `true` is more efficient since the responses (for example when calling `fetchSockets()` or `serverSideEmit()`) are only sent to the requesting server, and not to all the servers.

However, it currently defaults to `false` for backward-compatibility.

### Sharded adapter[​](#sharded-adapter "Direct link to Sharded adapter")

Name

Description

Default value

`channelPrefix`

The prefix for the Redis Pub/Sub channels.

`socket.io`

`subscriptionMode`

The subscription mode impacts the number of Redis Pub/Sub channels used by the adapter.

`dynamic`

Available values for the `subscriptionMode` option:

Value

\# of Pub/Sub channels

Description

`static`

2 per namespace

Useful when used with dynamic namespaces.

`dynamic` (default)

(2 + 1 per public room) per namespace

Useful when some rooms have a low number of clients (so only a few Socket.IO servers are notified).

`dynamic-private`

(2 + 1 per room) per namespace

Like `dynamic` but creates separate channels for private rooms as well. Useful when there is lots of 1:1 communication via `socket.emit()` calls.

## Common questions[​](#common-questions "Direct link to Common questions")

### Is there any data stored in Redis?[​](#is-there-any-data-stored-in-redis "Direct link to Is there any data stored in Redis?")

No, the Redis adapter uses the [Pub/Sub mechanism](https://redis.io/topics/pubsub) to forward the packets between the Socket.IO servers, so there are no keys stored in Redis.

### Do I still need to enable sticky sessions when using the Redis adapter?[​](#do-i-still-need-to-enable-sticky-sessions-when-using-the-redis-adapter "Direct link to Do I still need to enable sticky sessions when using the Redis adapter?")

Yes. Failing to do so will result in HTTP 400 responses (you are reaching a server that is not aware of the Socket.IO session).

More information can be found [here](/docs/v4/using-multiple-nodes/#why-is-sticky-session-required).

### What happens when the Redis server is down?[​](#what-happens-when-the-redis-server-is-down "Direct link to What happens when the Redis server is down?")

In case the connection to the Redis server is severed, the packets will only be sent to the clients that are connected to the current server.

## Migrating from `socket.io-redis`[​](#migrating-from-socketio-redis "Direct link to migrating-from-socketio-redis")

The package was renamed from `socket.io-redis` to `@socket.io/redis-adapter` in [v7](https://github.com/socketio/socket.io-redis-adapter/releases/tag/7.0.0), in order to match the name of the Redis emitter (`@socket.io/redis-emitter`).

To migrate to the new package, you'll need to make sure to provide your own Redis clients, as the package will no longer create Redis clients on behalf of the user.

Before:

```
const redisAdapter = require("socket.io-redis");io.adapter(redisAdapter({ host: "localhost", port: 6379 }));
```

After:

```
const { createClient } = require("redis");const { createAdapter } = require("@socket.io/redis-adapter");const pubClient = createClient({ url: "redis://localhost:6379" });const subClient = pubClient.duplicate();io.adapter(createAdapter(pubClient, subClient));
```

tip

The communication protocol between the Socket.IO servers has not been updated, so you can have some servers with `socket.io-redis` and some others with `@socket.io/redis-adapter` at the same time.

## Latest releases[​](#latest-releases "Direct link to Latest releases")

Version

Release date

Release notes

Diff

`8.3.0`

March 2024

[link](https://github.com/socketio/socket.io-redis-adapter/releases/tag/8.3.0)

[`8.2.1...8.3.0`](https://github.com/socketio/socket.io-redis-adapter/compare/8.2.1...8.3.0)

`8.2.1`

May 2023

[link](https://github.com/socketio/socket.io-redis-adapter/releases/tag/8.2.1)

[`8.2.0...8.2.1`](https://github.com/socketio/socket.io-redis-adapter/compare/8.2.0...8.2.1)

`8.2.0`

May 2023

[link](https://github.com/socketio/socket.io-redis-adapter/releases/tag/8.2.0)

[`8.1.0...8.2.0`](https://github.com/socketio/socket.io-redis-adapter/compare/8.1.0...8.2.0)

`8.1.0`

February 2023

[link](https://github.com/socketio/socket.io-redis-adapter/releases/tag/8.1.0)

[`8.0.0...8.1.0`](https://github.com/socketio/socket.io-redis-adapter/compare/8.0.0...8.1.0)

`8.0.0`

December 2022

[link](https://github.com/socketio/socket.io-redis-adapter/releases/tag/8.0.0)

[`7.2.0...8.0.0`](https://github.com/socketio/socket.io-redis-adapter/compare/7.2.0...8.0.0)

`7.2.0`

May 2022

[link](https://github.com/socketio/socket.io-redis-adapter/releases/tag/7.2.0)

[`7.1.0...7.2.0`](https://github.com/socketio/socket.io-redis-adapter/compare/7.1.0...7.2.0)

[Complete changelog](https://github.com/socketio/socket.io-redis-adapter/blob/main/CHANGELOG.md)

## Emitter[​](#emitter "Direct link to Emitter")

The Redis emitter allows sending packets to the connected clients from another Node.js process:

![Diagram of how the Redis emitter works](/images/redis-emitter.png)![Diagram of how the Redis emitter works](/images/redis-emitter-dark.png)

This emitter is also available in several languages:

-   Javascript: [https://github.com/socketio/socket.io-redis-emitter](https://github.com/socketio/socket.io-redis-emitter)
-   Java: [https://github.com/sunsus/socket.io-java-emitter](https://github.com/sunsus/socket.io-java-emitter)
-   Python: [https://pypi.org/project/socket.io-emitter/](https://pypi.org/project/socket.io-emitter/)
-   PHP: [https://github.com/rase-/socket.io-php-emitter](https://github.com/rase-/socket.io-php-emitter)
-   Golang: [https://github.com/yosuke-furukawa/socket.io-go-emitter](https://github.com/yosuke-furukawa/socket.io-go-emitter)
-   Perl: [https://metacpan.org/pod/SocketIO::Emitter](https://metacpan.org/pod/SocketIO::Emitter)
-   Rust: [https://github.com/epli2/socketio-rust-emitter](https://github.com/epli2/socketio-rust-emitter)

### Installation[​](#installation-1 "Direct link to Installation")

```
npm install @socket.io/redis-emitter redis
```

### Usage[​](#usage-1 "Direct link to Usage")

```
import { Emitter } from "@socket.io/redis-emitter";import { createClient } from "redis";const redisClient = createClient({ url: "redis://localhost:6379" });redisClient.connect().then(() => {  const emitter = new Emitter(redisClient);  setInterval(() => {    emitter.emit("time", new Date);  }, 5000);});
```

Note: with `redis@3`, calling `connect()` on the Redis client is not needed:

```
import { Emitter } from "@socket.io/redis-emitter";import { createClient } from "redis";const redisClient = createClient({ url: "redis://localhost:6379" });const emitter = new Emitter(redisClient);setInterval(() => {  emitter.emit("time", new Date);}, 5000);
```

Please refer to the cheatsheet [here](/docs/v4/adapter/#emitter-cheatsheet).

### Migrating from `socket.io-emitter`[​](#migrating-from-socketio-emitter "Direct link to migrating-from-socketio-emitter")

The package was renamed from `socket.io-emitter` to `@socket.io/redis-emitter` in [v4](https://github.com/socketio/socket.io-redis-emitter/releases/tag/4.0.0), in order to better reflect the relationship with Redis.

To migrate to the new package, you'll need to make sure to provide your own Redis clients, as the package will no longer create Redis clients on behalf of the user.

Before:

```
const io = require("socket.io-emitter")({ host: "127.0.0.1", port: 6379 });
```

After:

```
const { Emitter } = require("@socket.io/redis-emitter");const { createClient } = require("redis");const redisClient = createClient();const io = new Emitter(redisClient);
```

### Latest releases[​](#latest-releases-1 "Direct link to Latest releases")

Version

Release date

Release notes

Diff

`5.1.0`

January 2023

[link](https://github.com/socketio/socket.io-redis-emitter/releases/tag/5.1.0)

[`5.0.0...5.1.0`](https://github.com/socketio/socket.io-redis-emitter/compare/5.0.0...5.1.0)

`5.0.0`

September 2022

[link](https://github.com/socketio/socket.io-redis-emitter/releases/tag/5.0.1)

[`4.1.1...5.0.0`](https://github.com/socketio/socket.io-redis-emitter/compare/4.1.1...5.0.0)

`4.1.1`

January 2022

[link](https://github.com/socketio/socket.io-redis-emitter/releases/tag/4.1.1)

[`4.1.0...4.1.1`](https://github.com/socketio/socket.io-redis-emitter/compare/4.1.0...4.1.1)

`4.1.0`

May 2021

[link](https://github.com/socketio/socket.io-redis-emitter/releases/tag/4.1.0)

[`4.0.0...4.1.0`](https://github.com/socketio/socket.io-redis-emitter/compare/4.0.0...4.1.0)

`4.0.0`

March 2021

[link](https://github.com/socketio/socket.io-redis-emitter/releases/tag/4.0.0)

[`3.2.0...4.0.0`](https://github.com/socketio/socket.io-redis-emitter/compare/3.2.0...4.0.0)

[Complete changelog](https://github.com/socketio/socket.io-redis-emitter/blob/main/CHANGELOG.md)

-   [How it works](#how-it-works)
-   [Supported features](#supported-features)
-   [Installation](#installation)
-   [Compatibility table](#compatibility-table)
-   [Usage](#usage)
    -   [With the `redis` package](#with-the-redis-package)
    -   [With the `redis` package and a Redis cluster](#with-the-redis-package-and-a-redis-cluster)
    -   [With the `ioredis` package](#with-the-ioredis-package)
    -   [With the `ioredis` package and a Redis cluster](#with-the-ioredis-package-and-a-redis-cluster)
    -   [With Redis sharded Pub/Sub](#with-redis-sharded-pubsub)
-   [Options](#options)
    -   [Default adapter](#default-adapter)
    -   [Sharded adapter](#sharded-adapter)
-   [Common questions](#common-questions)
    -   [Is there any data stored in Redis?](#is-there-any-data-stored-in-redis)
    -   [Do I still need to enable sticky sessions when using the Redis adapter?](#do-i-still-need-to-enable-sticky-sessions-when-using-the-redis-adapter)
    -   [What happens when the Redis server is down?](#what-happens-when-the-redis-server-is-down)
-   [Migrating from `socket.io-redis`](#migrating-from-socketio-redis)
-   [Latest releases](#latest-releases)
-   [Emitter](#emitter)
    -   [Installation](#installation-1)
    -   [Usage](#usage-1)
    -   [Migrating from `socket.io-emitter`](#migrating-from-socketio-emitter)
    -   [Latest releases](#latest-releases-1)
