Version: 4.x

On this page

## How it works[​](#how-it-works "Direct link to How it works")

The adapter will use a [Redis stream](https://redis.io/docs/latest/develop/data-types/streams/) to forward packets between the Socket.IO servers.

The main difference with the existing Redis adapter (which use the [Redis Pub/Sub mechanism](https://redis.io/docs/latest/develop/pubsub/)) is that this adapter will properly handle any temporary disconnection to the Redis server and resume the stream without losing any packets.

info

-   by default, a single stream is used for all namespaces (see the `streamCount` option)
-   the `maxLen` option allows limiting the size of the stream
-   unlike the adapter based on the Redis PUB/SUB mechanism, this adapter will properly handle any temporary disconnection to the Redis server and resume the stream
-   if [connection state recovery](/docs/v4/connection-state-recovery) is enabled, the sessions will be stored in Redis as a classic key/value pair

tip

This adapter is also compatible with [Valkey](https://valkey.io/).

Source code: [https://github.com/socketio/socket.io-redis-streams-adapter](https://github.com/socketio/socket.io-redis-streams-adapter)

## Supported features[​](#supported-features "Direct link to Supported features")

Feature

`socket.io` version

Support

Socket management

`4.0.0`

✅ YES (since version `0.1.0`)

Inter-server communication

`4.1.0`

✅ YES (since version `0.1.0`)

Broadcast with acknowledgements

[`4.5.0`](/docs/v4/changelog/4.5.0)

✅ YES (since version `0.1.0`)

Connection state recovery

[`4.6.0`](/docs/v4/changelog/4.6.0)

✅ YES (since version `0.1.0`)

## Installation[​](#installation "Direct link to Installation")

```
npm install @socket.io/redis-streams-adapter redis
```

## Usage[​](#usage "Direct link to Usage")

### With the `redis` package[​](#with-the-redis-package "Direct link to with-the-redis-package")

```
import { createClient } from "redis";import { Server } from "socket.io";import { createAdapter } from "@socket.io/redis-streams-adapter";const redisClient = createClient({ url: "redis://localhost:6379" });await redisClient.connect();const io = new Server({  adapter: createAdapter(redisClient)});io.listen(3000);
```

### With the `redis` package and a Redis cluster[​](#with-the-redis-package-and-a-redis-cluster "Direct link to with-the-redis-package-and-a-redis-cluster")

```
import { createCluster } from "redis";import { Server } from "socket.io";import { createAdapter } from "@socket.io/redis-streams-adapter";const redisClient = createCluster({  rootNodes: [    {      url: "redis://localhost:7000",    },    {      url: "redis://localhost:7001",    },    {      url: "redis://localhost:7002",    },  ],});await redisClient.connect();const io = new Server({  adapter: createAdapter(redisClient)});io.listen(3000);
```

### With the `ioredis` package[​](#with-the-ioredis-package "Direct link to with-the-ioredis-package")

```
import { Redis } from "ioredis";import { Server } from "socket.io";import { createAdapter } from "@socket.io/redis-streams-adapter";const redisClient = new Redis();const io = new Server({  adapter: createAdapter(redisClient)});io.listen(3000);
```

### With the `ioredis` package and a Redis cluster[​](#with-the-ioredis-package-and-a-redis-cluster "Direct link to with-the-ioredis-package-and-a-redis-cluster")

```
import { Cluster } from "ioredis";import { Server } from "socket.io";import { createAdapter } from "@socket.io/redis-streams-adapter";const redisClient = new Cluster([  {    host: "localhost",    port: 7000,  },  {    host: "localhost",    port: 7001,  },  {    host: "localhost",    port: 7002,  },]);const io = new Server({  adapter: createAdapter(redisClient)});io.listen(3000);
```

## Options[​](#options "Direct link to Options")

Name

Description

Default value

`streamName`

The name of the Redis stream.

`socket.io`

`streamCount`

The number of streams to use to scale horizontally.

`1`

`channelPrefix`

The prefix of the Redis PUB/SUB channels used to communicate between the nodes.

`socket.io`

`useShardedPubSub`

Whether to use sharded PUB/SUB (added in Redis 7.0) to communicate between the nodes.

`false`

`maxLen`

The maximum size of the stream. Almost exact trimming (~) is used.

`10_000`

`readCount`

The number of elements to fetch per XREAD call.

`100`

`blockTimeInMs`

The number of ms before the XREAD call times out.

`5_000`

`sessionKeyPrefix`

The prefix of the key used to store the Socket.IO session, when the connection state recovery feature is enabled.

`sio:session:`

`onlyPlaintext`

Whether the transmitted data contains only JSON-serializable objects without binary data (Buffer, ArrayBuffer, etc.).

`false`

## Common questions[​](#common-questions "Direct link to Common questions")

### Do I still need to enable sticky sessions when using the Redis Streams adapter?[​](#do-i-still-need-to-enable-sticky-sessions-when-using-the-redis-streams-adapter "Direct link to Do I still need to enable sticky sessions when using the Redis Streams adapter?")

Yes. Failing to do so will result in HTTP 400 responses (you are reaching a server that is not aware of the Socket.IO session).

More information can be found [here](/docs/v4/using-multiple-nodes/#why-is-sticky-session-required).

### What happens when the Redis server is down?[​](#what-happens-when-the-redis-server-is-down "Direct link to What happens when the Redis server is down?")

Unlike the classic [Redis adapter](/docs/v4/redis-adapter/), this adapter will properly handle any temporary disconnection to the Redis server and resume the stream without losing any packets.

## Latest releases[​](#latest-releases "Direct link to Latest releases")

Version

Release date

Release notes

Diff

`0.3.0`

February 2026

[link](https://github.com/socketio/socket.io-redis-streams-adapter/releases/tag/0.3.0)

[`0.2.3...0.3.0`](https://github.com/socketio/socket.io-redis-streams-adapter/compare/0.2.3...0.3.0)

`0.2.3`

November 2025

[link](https://github.com/socketio/socket.io-redis-streams-adapter/releases/tag/0.2.3)

[`0.2.2...0.2.3`](https://github.com/socketio/socket.io-redis-streams-adapter/compare/0.2.2...0.2.3)

`0.2.1`

March 2024

[link](https://github.com/socketio/socket.io-redis-streams-adapter/releases/tag/0.2.1)

[`0.2.0...0.2.1`](https://github.com/socketio/socket.io-redis-streams-adapter/compare/0.2.0...0.2.1)

`0.2.0`

February 2024

[link](https://github.com/socketio/socket.io-redis-streams-adapter/releases/tag/0.2.0)

[`0.1.0...0.2.0`](https://github.com/socketio/socket.io-redis-streams-adapter/compare/0.1.0...0.2.0)

`0.1.0`

April 2023

[link](https://github.com/socketio/socket.io-redis-streams-adapter/releases/tag/0.1.0)

[Complete changelog](https://github.com/socketio/socket.io-redis-streams-adapter/blob/main/CHANGELOG.md)

-   [How it works](#how-it-works)
-   [Supported features](#supported-features)
-   [Installation](#installation)
-   [Usage](#usage)
    -   [With the `redis` package](#with-the-redis-package)
    -   [With the `redis` package and a Redis cluster](#with-the-redis-package-and-a-redis-cluster)
    -   [With the `ioredis` package](#with-the-ioredis-package)
    -   [With the `ioredis` package and a Redis cluster](#with-the-ioredis-package-and-a-redis-cluster)
-   [Options](#options)
-   [Common questions](#common-questions)
    -   [Do I still need to enable sticky sessions when using the Redis Streams adapter?](#do-i-still-need-to-enable-sticky-sessions-when-using-the-redis-streams-adapter)
    -   [What happens when the Redis server is down?](#what-happens-when-the-redis-server-is-down)
-   [Latest releases](#latest-releases)
