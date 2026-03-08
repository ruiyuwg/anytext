Version: 4.x

On this page

An Adapter is a server-side component which is responsible for broadcasting events to all or a subset of clients.

When scaling to multiple Socket.IO servers, you will need to replace the default in-memory adapter by another implementation, so the events are properly routed to all clients.

Here is the list of adapters that are maintained by our team:

-   the [Redis adapter](/docs/v4/redis-adapter/)
-   the [Redis Streams adapter](/docs/v4/redis-streams-adapter/)
-   the [MongoDB adapter](/docs/v4/mongo-adapter/)
-   the [Postgres adapter](/docs/v4/postgres-adapter/)
-   the [Cluster adapter](/docs/v4/cluster-adapter/)
-   the [Google Cloud Pub/Sub adapter](/docs/v4/gcp-pubsub-adapter/)
-   the [AWS SQS adapter](/docs/v4/aws-sqs-adapter/)
-   the [Azure Service Bus adapter](/docs/v4/azure-service-bus-adapter/)

There are also several other options which are maintained by the (awesome!) community:

-   [AMQP](https://github.com/sensibill/socket.io-amqp) (e.g. RabbitMQ)
-   [NATS](https://github.com/MickL/socket.io-nats-adapter)
-   [NATS](https://github.com/distrue/socket.io-nats-adapter)

Please note that enabling sticky sessions is still needed when using multiple Socket.IO servers and HTTP long-polling. More information [here](/docs/v4/using-multiple-nodes/#why-is-sticky-session-required).

## API[​](#api "Direct link to API")

You can have access to the adapter instance with:

```
// main namespaceconst mainAdapter = io.of("/").adapter; // WARNING! io.adapter() will not work// custom namespaceconst adminAdapter = io.of("/admin").adapter;
```

Starting with `socket.io@3.1.0`, each Adapter instance emits the following events:

-   `create-room` (argument: room)
-   `delete-room` (argument: room)
-   `join-room` (argument: room, id)
-   `leave-room` (argument: room, id)

Example:

```
io.of("/").adapter.on("create-room", (room) => {  console.log(`room ${room} was created`);});io.of("/").adapter.on("join-room", (room, id) => {  console.log(`socket ${id} has joined room ${room}`);});
```

## Emitter[​](#emitter "Direct link to Emitter")

Most adapter implementations come with their associated emitter package, which allows communicating to the group of Socket.IO servers from another Node.js process.

![Emitter diagram](/images/emitter.png)![Emitter diagram](/images/emitter-dark.png)

This may be useful for example in a microservice setup, where all clients connect to the microservice M1, while the microservice M2 uses the emitter to broadcast packets (uni-directional communication).

## Emitter cheatsheet[​](#emitter-cheatsheet "Direct link to Emitter cheatsheet")

```
// to all clientsemitter.emit(/* ... */);// to all clients in "room1"emitter.to("room1").emit(/* ... */);// to all clients in "room1" except those in "room2"emitter.to("room1").except("room2").emit(/* ... */);const adminEmitter = emitter.of("/admin");// to all clients in the "admin" namespaceadminEmitter.emit(/* ... */);// to all clients in the "admin" namespace and in the "room1" roomadminEmitter.to("room1").emit(/* ... */);
```

The emitter also supports the utility methods that were added in `socket.io@4.0.0`:

-   `socketsJoin()`

```
// make all Socket instances join the "room1" roomemitter.socketsJoin("room1");// make all Socket instances of the "admin" namespace in the "room1" room join the "room2" roomemitter.of("/admin").in("room1").socketsJoin("room2");
```

-   `socketsLeave()`

```
// make all Socket instances leave the "room1" roomemitter.socketsLeave("room1");// make all Socket instances in the "room1" room leave the "room2" and "room3" roomsemitter.in("room1").socketsLeave(["room2", "room3"]);// make all Socket instances in the "room1" room of the "admin" namespace leave the "room2" roomemitter.of("/admin").in("room1").socketsLeave("room2");
```

-   `disconnectSockets()`

```
// make all Socket instances disconnectemitter.disconnectSockets();// make all Socket instances in the "room1" room disconnect (and discard the low-level connection)emitter.in("room1").disconnectSockets(true);// make all Socket instances in the "room1" room of the "admin" namespace disconnectemitter.of("/admin").in("room1").disconnectSockets();// this also works with a single socket IDemitter.of("/admin").in(theSocketId).disconnectSockets();
```

-   `serverSideEmit()`

```
// emit an event to all the Socket.IO servers of the clusteremitter.serverSideEmit("hello", "world");// Socket.IO server (server-side)io.on("hello", (arg) => {  console.log(arg); // prints "world"});
```

-   [API](#api)
-   [Emitter](#emitter)
-   [Emitter cheatsheet](#emitter-cheatsheet)
