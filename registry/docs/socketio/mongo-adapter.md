Version: 4.x

On this page

## How it works[​](#how-it-works "Direct link to How it works")

The MongoDB adapter relies on MongoDB's [Change Streams](https://docs.mongodb.com/manual/changeStreams/) (and thus requires a replica set or a sharded cluster).

Every packet that is sent to multiple clients (e.g. `io.to("room1").emit()` or `socket.broadcast.emit()`) is:

-   sent to all matching clients connected to the current server
-   inserted in a MongoDB capped collection, and received by the other Socket.IO servers of the cluster

![Diagram of how the MongoDB adapter works](/images/mongo-adapter.png)![Diagram of how the MongoDB adapter works](/images/mongo-adapter-dark.png)

The source code of this adapter can be found [here](https://github.com/socketio/socket.io-mongo-adapter).

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

✅ YES (since version `0.2.0`)

Connection state recovery

[`4.6.0`](/docs/v4/changelog/4.6.0)

✅ YES (since version `0.3.0`)

## Installation[​](#installation "Direct link to Installation")

```
npm install @socket.io/mongo-adapter mongodb
```

For TypeScript users, you might also need `@types/mongodb`.

## Usage[​](#usage "Direct link to Usage")

Broadcasting packets within a Socket.IO cluster is achieved by creating MongoDB documents and using a [change stream](https://docs.mongodb.com/manual/changeStreams/) on each Socket.IO server.

There are two ways to clean up the documents in MongoDB:

-   a [capped collection](https://www.mongodb.com/docs/manual/core/capped-collections/)
-   a [TTL index](https://www.mongodb.com/docs/manual/core/index-ttl/)

### Usage with a capped collection[​](#usage-with-a-capped-collection "Direct link to Usage with a capped collection")

```
import { Server } from "socket.io";import { createAdapter } from "@socket.io/mongo-adapter";import { MongoClient } from "mongodb";const DB = "mydb";const COLLECTION = "socket.io-adapter-events";const io = new Server();const mongoClient = new MongoClient("mongodb://localhost:27017/?replicaSet=rs0");await mongoClient.connect();try {  await mongoClient.db(DB).createCollection(COLLECTION, {    capped: true,    size: 1e6  });} catch (e) {  // collection already exists}const mongoCollection = mongoClient.db(DB).collection(COLLECTION);io.adapter(createAdapter(mongoCollection));io.listen(3000);
```

### Usage with a TTL index[​](#usage-with-a-ttl-index "Direct link to Usage with a TTL index")

```
import { Server } from "socket.io";import { createAdapter } from "@socket.io/mongo-adapter";import { MongoClient } from "mongodb";const DB = "mydb";const COLLECTION = "socket.io-adapter-events";const io = new Server();const mongoClient = new MongoClient("mongodb://localhost:27017/?replicaSet=rs0");await mongoClient.connect();const mongoCollection = mongoClient.db(DB).collection(COLLECTION);await mongoCollection.createIndex(  { createdAt: 1 },  { expireAfterSeconds: 3600, background: true });io.adapter(createAdapter(mongoCollection, {  addCreatedAtField: true}));io.listen(3000);
```

## Options[​](#options "Direct link to Options")

Name

Description

Default value

Added in

`uid`

the ID of this node

a random id

`v0.1.0`

`requestsTimeout`

the timeout for inter-server requests such as `fetchSockets()` or `serverSideEmit()` with ack

`5000`

`v0.1.0`

`heartbeatInterval`

the number of ms between two heartbeats

`5000`

`v0.1.0`

`heartbeatTimeout`

the number of ms without heartbeat before we consider a node down

`10000`

`v0.1.0`

`addCreatedAtField`

whether to add a `createdAt` field to each MongoDB document

`false`

`v0.2.0`

`changeStreamOptions`

options to pass to the MongoDB change stream

`{}`

`v0.4.0`

## Common questions[​](#common-questions "Direct link to Common questions")

### Do I still need to enable sticky sessions when using the MongoDB adapter?[​](#do-i-still-need-to-enable-sticky-sessions-when-using-the-mongodb-adapter "Direct link to Do I still need to enable sticky sessions when using the MongoDB adapter?")

Yes. Failing to do so will result in HTTP 400 responses (you are reaching a server that is not aware of the Socket.IO session).

More information can be found [here](/docs/v4/using-multiple-nodes/#why-is-sticky-session-required).

### What happens when the MongoDB cluster is down?[​](#what-happens-when-the-mongodb-cluster-is-down "Direct link to What happens when the MongoDB cluster is down?")

In case the connection to the MongoDB cluster is severed, the behavior will depend on the value of the `bufferMaxEntries` option of the MongoDB client:

-   if its value is `-1` (default), the packets will be buffered until reconnection.
-   if its value is `0`, the packets will only be sent to the clients that are connected to the current server.

Documentation: [http://mongodb.github.io/node-mongodb-native/3.6/api/global.html#MongoClientOptions](http://mongodb.github.io/node-mongodb-native/3.6/api/global.html#MongoClientOptions)

## Latest releases[​](#latest-releases "Direct link to Latest releases")

Version

Release date

Release notes

Diff

`0.4.0`

August 2025

[link](https://github.com/socketio/socket.io-mongo-adapter/releases/tag/0.4.0)

[`0.3.2...0.4.0`](https://github.com/socketio/socket.io-mongo-adapter/compare/0.3.2...0.4.0)

`0.3.2`

January 2024

[link](https://github.com/socketio/socket.io-mongo-adapter/releases/tag/0.3.2)

[`0.3.1...0.3.2`](https://github.com/socketio/socket.io-mongo-adapter/compare/0.3.1...0.3.2)

`0.3.1`

January 2024

[link](https://github.com/socketio/socket.io-mongo-adapter/releases/tag/0.3.1)

[`0.3.0...0.3.1`](https://github.com/socketio/socket.io-mongo-adapter/compare/0.3.0...0.3.1)

`0.3.0`

February 2023

[link](https://github.com/socketio/socket.io-mongo-adapter/releases/tag/0.3.0)

[`0.2.1...0.3.0`](https://github.com/socketio/socket.io-mongo-adapter/compare/0.2.1...0.3.0)

[Complete changelog](https://github.com/socketio/socket.io-mongo-adapter/blob/main/CHANGELOG.md)

## Emitter[​](#emitter "Direct link to Emitter")

The MongoDB emitter allows sending packets to the connected clients from another Node.js process:

![Diagram of how the MongoDB adapter works](/images/mongo-emitter.png)![Diagram of how the MongoDB adapter works](/images/mongo-emitter-dark.png)

### Installation[​](#installation-1 "Direct link to Installation")

```
npm install @socket.io/mongo-emitter mongodb
```

### Usage[​](#usage-1 "Direct link to Usage")

```
const { Emitter } = require("@socket.io/mongo-emitter");const { MongoClient } = require("mongodb");const mongoClient = new MongoClient("mongodb://localhost:27017/?replicaSet=rs0");const main = async () => {  await mongoClient.connect();  const mongoCollection = mongoClient.db("mydb").collection("socket.io-adapter-events");  const emitter = new Emitter(mongoCollection);  setInterval(() => {    emitter.emit("ping", new Date());  }, 1000);}main();
```

Please refer to the cheatsheet [here](/docs/v4/adapter/#emitter-cheatsheet).

-   [How it works](#how-it-works)
-   [Supported features](#supported-features)
-   [Installation](#installation)
-   [Usage](#usage)
    -   [Usage with a capped collection](#usage-with-a-capped-collection)
    -   [Usage with a TTL index](#usage-with-a-ttl-index)
-   [Options](#options)
-   [Common questions](#common-questions)
    -   [Do I still need to enable sticky sessions when using the MongoDB adapter?](#do-i-still-need-to-enable-sticky-sessions-when-using-the-mongodb-adapter)
    -   [What happens when the MongoDB cluster is down?](#what-happens-when-the-mongodb-cluster-is-down)
-   [Latest releases](#latest-releases)
-   [Emitter](#emitter)
    -   [Installation](#installation-1)
    -   [Usage](#usage-1)
