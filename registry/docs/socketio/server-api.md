Version: 4.x

On this page

## Server[​](#server "Direct link to Server")

![Server in the class diagram for the server](/images/server-class-diagram-server.png)![Server in the class diagram for the server](/images/server-class-diagram-server-dark.png)

Related documentation pages:

-   [installation](/docs/v4/server-installation/)
-   [initialization](/docs/v4/server-initialization/)
-   [details of the server instance](/docs/v4/server-instance/)

### Constructor[​](#constructor "Direct link to Constructor")

#### new Server(httpServer\[, options\])[​](#new-serverhttpserver-options "Direct link to new-serverhttpserver-options")

-   `httpServer` [`<http.Server>`](https://nodejs.org/api/http.html#class-httpserver) | [`<https.Server>`](https://nodejs.org/api/https.html#class-httpsserver)
-   `options` [`<Object>`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object)

```
import { createServer } from "http";import { Server } from "socket.io";const httpServer = createServer();const io = new Server(httpServer, {  // options});io.on("connection", (socket) => {  // ...});httpServer.listen(3000);
```

The complete list of available options can be found [here](/docs/v4/server-options/).

#### new Server(port\[, options\])[​](#new-serverport-options "Direct link to new-serverport-options")

-   `port` [`<number>`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#number_type)
-   `options` [`<Object>`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object)

```
import { Server } from "socket.io";const io = new Server(3000, {  // options});io.on("connection", (socket) => {  // ...});
```

The complete list of available options can be found [here](/docs/v4/server-options/).

#### new Server(options)[​](#new-serveroptions "Direct link to new Server(options)")

-   `options` [`<Object>`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object)

```
import { Server } from "socket.io";const io = new Server({  // options});io.on("connection", (socket) => {  // ...});io.listen(3000);
```

The complete list of available options can be found [here](/docs/v4/server-options/).

### Events[​](#events "Direct link to Events")

#### Event: 'connect'[​](#event-connect "Direct link to Event: 'connect'")

Synonym of [Event: "connection"](#event-connection).

#### Event: 'connection'[​](#event-connection "Direct link to Event: 'connection'")

-   `socket` _(Socket)_ socket connection with client

Fired upon a connection from client.

```
io.on("connection", (socket) => {  // ...});
```

#### Event: 'new\_namespace'[​](#event-new_namespace "Direct link to Event: 'new_namespace'")

-   `namespace` [`Namespace`](#namespace)

Fired when a new namespace is created:

```
io.on("new_namespace", (namespace) => {  // ...});
```

This can be useful for example:

-   to attach a shared middleware to each namespace

```
io.on("new_namespace", (namespace) => {  namespace.use(myMiddleware);});
```

-   to track the [dynamically created](/docs/v4/namespaces/#dynamic-namespaces) namespaces

```
io.of(/\/nsp-\w+/);io.on("new_namespace", (namespace) => {  console.log(namespace.name);});
```

### Attributes[​](#attributes "Direct link to Attributes")

#### server.engine[​](#serverengine "Direct link to server.engine")

A reference to the underlying Engine.IO server. See [here](#engine).

#### server.sockets[​](#serversockets "Direct link to server.sockets")

-   [`<Namespace>`](#namespace)

An alias for the main namespace (`/`).

```
io.sockets.emit("hi", "everyone");// is equivalent toio.of("/").emit("hi", "everyone");
```

### Methods[​](#methods "Direct link to Methods")

#### server.adapter(\[value\])[​](#serveradaptervalue "Direct link to serveradaptervalue")

-   `value` [`<Adapter>`](/docs/v4/adapter/)
-   **Returns** [`<Server>`](#server) | [`<Adapter>`](/docs/v4/adapter/)

Sets the adapter `value`. Defaults to an instance of the `Adapter` that ships with socket.io which is memory based. See [socket.io-adapter](https://github.com/socketio/socket.io-adapter). If no arguments are supplied this method returns the current value.

```
import { Server } from "socket.io"; import { createAdapter } from "@socket.io/redis-adapter";import { createClient } from "redis";const io = new Server();const pubClient = createClient({ host: "localhost", port: 6379 });const subClient = pubClient.duplicate();io.adapter(createAdapter(pubClient, subClient));// redis@3io.listen(3000);// redis@4Promise.all([pubClient.connect(), subClient.connect()]).then(() => {  io.listen(3000);});
```

#### server.attach(httpServer\[, options\])[​](#serverattachhttpserver-options "Direct link to serverattachhttpserver-options")

-   `httpServer` [`<http.Server>`](https://nodejs.org/api/http.html#class-httpserver) | [`<https.Server>`](https://nodejs.org/api/https.html#class-httpsserver)
-   `options` [`<Object>`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object)

Attaches the `Server` to an `httpServer` with the supplied `options`.

```
import { createServer } from "http";import { Server } from "socket.io";const httpServer = createServer();const io = new Server();io.attach(httpServer);io.on("connection", (socket) => {  // ...});httpServer.listen(3000);
```

#### server.attach(port\[, options\])[​](#serverattachport-options "Direct link to serverattachport-options")

-   `port` [`<number>`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#number_type)
-   `options` [`<Object>`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object)

Attaches the `Server` on the given `port` with the supplied `options`.

```
import { Server } from "socket.io";const io = new Server();io.attach(3000);io.on("connection", (socket) => {  // ...});
```

#### server.attachApp(app\[, options\])[​](#serverattachappapp-options "Direct link to serverattachappapp-options")

-   `app` [`<uws.App>`](https://unetworking.github.io/uWebSockets.js/generated/interfaces/TemplatedApp.html)
-   `options` [`<Object>`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object)

Attaches the Socket.IO server to an [µWebSockets.js](https://github.com/uNetworking/uWebSockets.js) app:

```
import { App } from "uWebSockets.js";import { Server } from "socket.io";const app = App();const io = new Server();io.attachApp(app);io.on("connection", (socket) => {  // ...});app.listen(3000, (token) => {  if (!token) {    console.warn("port already in use");  }});
```

#### server.bind(engine)[​](#serverbindengine "Direct link to server.bind(engine)")

-   `engine` `<engine.Server>`
-   **Returns** [`<Server>`](#server)

Advanced use only. Binds the server to a specific engine.io `Server` (or compatible API) instance.

```
import { createServer } from "node:http";import { Server as Engine } from "engine.io";import { Server } from "socket.io";const httpServer = createServer((req, res) => {  res.writeHead(404).end();});const engine = new Engine();engine.attach(httpServer, {  path: "/socket.io/"});const io = new Server();io.bind(engine);httpServer.listen(3000);
```

#### server.close(\[callback\])[​](#serverclosecallback "Direct link to serverclosecallback")

-   `callback` [`<Function>`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function)

Closes the Socket.IO server and disconnect all clients. The `callback` argument is optional and will be called when all connections are closed.

info

This also closes the underlying HTTP server.

```
import { createServer } from "http";import { Server } from "socket.io";const PORT = 3030;const io = new Server(PORT);io.close();const httpServer = createServer();httpServer.listen(PORT); // PORT is free to useio.attach(httpServer);
```

note

Only closing the underlying HTTP server is not sufficient, as it will only prevent the server from accepting new connections but clients connected with WebSocket will not be disconnected right away.

Reference: [https://nodejs.org/api/http.html#serverclosecallback](https://nodejs.org/api/http.html#serverclosecallback)

#### server.disconnectSockets(\[close\])[​](#serverdisconnectsocketsclose "Direct link to serverdisconnectsocketsclose")

_Added in v4.0.0_

Alias for [`io.of("/").disconnectSockets(close)`](#namespacedisconnectsocketsclose).

```
// make all Socket instances disconnectio.disconnectSockets();// make all Socket instances in the "room1" room disconnect (and close the low-level connection)io.in("room1").disconnectSockets(true);
```

tip

This method also works within a cluster of multiple Socket.IO servers, with a compatible adapter like the [Postgres adapter](/docs/v4/postgres-adapter/).

In that case, if you only want to affect the socket instances on the given node, you need to use the `local` flag:

```
// make all Socket instances that are currently connected on the given node disconnectio.local.disconnectSockets();
```

See [here](/docs/v4/server-instance/#utility-methods).

#### server.emit(eventName\[, ...args\])[​](#serveremiteventname-args "Direct link to serveremiteventname-args")

History

Version

Changes

v4.5.0

`io.emit()` now supports acknowledgements.

v1.0.0

Initial implementation.

-   `eventName` [`<string>`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#string_type) | [`<symbol>`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#symbol_type)
-   `args` `any[]`
-   **Returns** `true`

Emits an event to all connected clients in the main namespace.

```
io.emit("hello");
```

Any number of parameters can be included, and all serializable data structures are supported:

```
io.emit("hello", 1, "2", { "3": 4 }, Buffer.from([5]));
```

And on the receiving side:

```
socket.on("hello", (arg1, arg2, arg3, arg4) => {  console.log(arg1); // 1  console.log(arg2); // "2"  console.log(arg3); // { "3": 4 }  console.log(arg4); // ArrayBuffer or Buffer, depending on the platform});
```

info

The arguments will automatically be serialized, so calling `JSON.stringify()` is not needed.

You can use [`to()`](#servertoroom) and [`except()`](#serverexceptrooms) to send the packet to specific clients:

```
// the “hello” event will be broadcast to all connected clients that are either// in the "room1" room or in the "room2" room, excluding those in the "room3" roomio.to("room1").to("room2").except("room3").emit("hello");
```

Starting with version `4.5.0`, it is now possible to use acknowledgements when broadcasting:

```
io.timeout(10000).emit("some-event", (err, responses) => {  if (err) {    // some clients did not acknowledge the event in the given delay  } else {    console.log(responses); // one response per client  }});
```

caution

Calling [`timeout()`](#servertimeoutvalue) is mandatory in that case.

#### server.emitWithAck(eventName\[, ...args\])[​](#serveremitwithackeventname-args "Direct link to serveremitwithackeventname-args")

_Added in v4.6.0_

-   `eventName` [`<string>`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#string_type) | [`<symbol>`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#symbol_type)
-   `args` `any[]`
-   **Returns** [`Promise<any[]>`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise)

Promised-based version of broadcasting and expecting an acknowledgement from all targeted clients:

```
try {  const responses = await io.timeout(10000).emitWithAck("some-event");  console.log(responses); // one response per client} catch (e) {  // some clients did not acknowledge the event in the given delay}
```

The example above is equivalent to:

```
io.timeout(10000).emit("some-event", (err, responses) => {  if (err) {    // some clients did not acknowledge the event in the given delay  } else {    console.log(responses); // one response per client  }});
```

And on the receiving side:

```
socket.on("some-event", (callback) => {  callback("got it"); // only one argument is expected});
```

#### server.except(rooms)[​](#serverexceptrooms "Direct link to server.except(rooms)")

_Added in v4.0.0_

-   `rooms` [`<string>`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#string_type) | [`<string[]>`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#string_type)
-   **Returns** `BroadcastOperator`

Sets a modifier for a subsequent event emission that the event will only be _broadcast_ to clients that have not joined the given `rooms`.

```
// the "foo" event will be broadcast to all connected clients, except the ones that are in the "room-101" roomio.except("room-101").emit("foo", "bar");// with an array of roomsio.except(["room-101", "room-102"]).emit("foo", "bar");// with multiple chained callsio.except("room-101").except("room-102").emit("foo", "bar");
```

#### server.fetchSockets()[​](#serverfetchsockets "Direct link to server.fetchSockets()")

_Added in v4.0.0_

Alias for [`io.of("/").fetchSocket()`](#namespacefetchsockets).

```
// return all Socket instances of the main namespaceconst sockets = await io.fetchSockets();// return all Socket instances in the "room1" room of the main namespaceconst sockets = await io.in("room1").fetchSockets();
```

Sample usage:

```
io.on("connection", (socket) => {  const userId = computeUserId(socket);  socket.join(userId);  socket.on("disconnect", async () => {    const sockets = await io.in(userId).fetchSockets();    if (sockets.length === 0) {      // no more active connections for the given user    }  });});
```

tip

This method also works within a cluster of multiple Socket.IO servers, with a compatible adapter like the [Postgres adapter](/docs/v4/postgres-adapter/).

In that case, if you only want to return the socket instances on the given node, you need to use the `local` flag:

```
// return all Socket instances that are currently connected on the given nodeconst sockets = await io.local.fetchSockets();
```

See [here](/docs/v4/server-instance/#utility-methods).

#### server.in(room)[​](#serverinroom "Direct link to server.in(room)")

_Added in v1.0.0_

Synonym of [server.to(room)](#servertoroom), but might feel clearer in some cases:

```
// disconnect all clients in the "room-101" roomio.in("room-101").disconnectSockets();
```

#### server.listen(httpServer\[, options\])[​](#serverlistenhttpserver-options "Direct link to serverlistenhttpserver-options")

Synonym of [server.attach(httpServer\[, options\])](#serverattachhttpserver-options).

#### server.listen(port\[, options\])[​](#serverlistenport-options "Direct link to serverlistenport-options")

Synonym of [server.attach(port\[, options\])](#serverattachport-options).

#### server.of(nsp)[​](#serverofnsp "Direct link to server.of(nsp)")

-   `nsp` [`<string>`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#string_type) | [`<RegExp>`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp) | [`<Function>`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function)
-   **Returns** [`<Namespace>`](#namespace)

Initializes and retrieves the given `Namespace` by its pathname identifier `nsp`. If the namespace was already initialized it returns it immediately.

```
const adminNamespace = io.of("/admin");
```

A regex or a function can also be provided, in order to create namespace in a dynamic way:

```
const dynamicNsp = io.of(/^\/dynamic-\d+$/).on("connection", (socket) => {  const newNamespace = socket.nsp; // newNamespace.name === "/dynamic-101"  // broadcast to all clients in the given sub-namespace  newNamespace.emit("hello");});// client-sideconst socket = io("/dynamic-101");// broadcast to all clients in each sub-namespacedynamicNsp.emit("hello");// use a middleware for each sub-namespacedynamicNsp.use((socket, next) => { /* ... */ });
```

With a function:

```
io.of((name, query, next) => {  // the checkToken method must return a boolean, indicating whether the client is able to connect or not.  next(null, checkToken(query.token));}).on("connection", (socket) => { /* ... */ });
```

#### server.on(eventName, listener)[​](#serveroneventname-listener "Direct link to server.on(eventName, listener)")

_Inherited from the [EventEmitter class](https://nodejs.org/api/events.html#class-eventemitter)._

-   `eventName` [`<string>`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#string_type) | [`<symbol>`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#symbol_type)
-   `listener` [`<Function>`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function)
-   **Returns** [`<Server>`](#server)

Adds the `listener` function to the end of the listeners array for the event named `eventName`.

Available events:

-   [`connection`](#event-connection)
-   [`new_namespace`](#event-new_namespace)
-   any custom event from the [`serverSideEmit`](#namespaceserversideemiteventname-args) method

```
io.on("connection", (socket) => {  // ...});
```

#### server.onconnection(socket)[​](#serveronconnectionsocket "Direct link to server.onconnection(socket)")

-   `socket` `<engine.Socket>`
-   **Returns** [`<Server>`](#server)

Advanced use only. Creates a new `socket.io` client from the incoming engine.io (or compatible API) `Socket`.

```
import { Server } from "socket.io";import { Server as Engine } from "engine.io";const engine = new Engine();const io = new Server();engine.on("connection", (socket) => {  io.onconnection(socket);});engine.listen(3000);
```

#### server.path(\[value\])[​](#serverpathvalue "Direct link to serverpathvalue")

-   `value` [`<string>`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#string_type)
-   **Returns** [`<Server>`](#server) | [`<string>`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#string_type)

Sets the path `value` under which `engine.io` and the static files will be served. Defaults to `/socket.io/`. If no arguments are supplied this method returns the current value.

```
import { Server } from "socket.io";const io = new Server();io.path("/myownpath/");
```

danger

The `path` value must match the one on the client side:

```
import { io } from "socket.io-client";const socket = io({  path: "/myownpath/"});
```

#### server.serveClient(\[value\])[​](#serverserveclientvalue "Direct link to serverserveclientvalue")

-   `value` [`<boolean>`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#boolean_type)
-   **Returns** [`<Server>`](#server) | [`<boolean>`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#boolean_type)

If `value` is `true` the attached server will serve the client files. Defaults to `true`. This method has no effect after `listen` is called. If no arguments are supplied this method returns the current value.

```
import { Server } from "socket.io";const io = new Server();io.serveClient(false);io.listen(3000);
```

#### server.serverSideEmit(eventName\[, ...args\]\[, ack\])[​](#serverserversideemiteventname-args "Direct link to serverserversideemiteventname-args")

_Added in v4.1.0_

Alias for: [`io.of("/").serverSideEmit(/* ... */);`](#namespaceserversideemiteventname-args)

-   `eventName` [`<string>`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#string_type)
-   `args` `<any[]>`
-   `ack` [`<Function>`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function)
-   **Returns** `true`

Sends a message to the other Socket.IO servers of the [cluster](/docs/v4/using-multiple-nodes/).

Syntax:

```
io.serverSideEmit("hello", "world");
```

And on the receiving side:

```
io.on("hello", (arg1) => {  console.log(arg1); // prints "world"});
```

Acknowledgements are supported too:

```
// server Aio.serverSideEmit("ping", (err, responses) => {  console.log(responses[0]); // prints "pong"});// server Bio.on("ping", (cb) => {  cb("pong");});
```

Notes:

-   the `connection`, `connect` and `new_namespace` strings are reserved and cannot be used in your application.
    
-   you can send any number of arguments, but binary structures are currently not supported (the array of arguments will be `JSON.stringify`\-ed)
    

Example:

```
io.serverSideEmit("hello", "world", 1, "2", { 3: "4" });
```

-   the acknowledgement callback might be called with an error, if the other Socket.IO servers do not respond after a given delay

```
io.serverSideEmit("ping", (err, responses) => {  if (err) {    // at least one Socket.IO server has not responded    // the 'responses' array contains all the responses already received though  } else {    // success! the 'responses' array contains one object per other Socket.IO server in the cluster  }});
```

#### server.serverSideEmitWithAck(eventName\[, ...args\])[​](#serverserversideemitwithackeventname-args "Direct link to serverserversideemitwithackeventname-args")

_Added in v4.6.0_

Alias for: [`io.of("/").serverSideEmitWithAck(/* ... */);`](#namespaceserversideemitwithackeventname-args)

-   `eventName` [`<string>`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#string_type)
-   `args` `<any[]>`
-   `ack` [`<Function>`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function)
-   **Returns** [`Promise<any[]>`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise)

Promised-based version of broadcasting and expecting an acknowledgement from the other Socket.IO servers of the [cluster](/docs/v4/using-multiple-nodes/).

```
try {  const responses = await io.serverSideEmitWithAck("some-event");  console.log(responses); // one response per server (except itself)} catch (e) {  // some servers did not acknowledge the event in the given delay}
```

The example above is equivalent to:

```
io.serverSideEmit("some-event", (err, responses) => {  if (err) {    // some servers did not acknowledge the event in the given delay  } else {    console.log(responses); // one response per server (except itself)  }});
```

And on the receiving side:

```
io.on("some-event", (callback) => {  callback("got it"); // only one argument is expected});
```

#### server.socketsJoin(rooms)[​](#serversocketsjoinrooms "Direct link to server.socketsJoin(rooms)")

_Added in v4.0.0_

Alias for [`io.of("/").socketsJoin(rooms)`](#namespacesocketsjoinrooms).

```
// make all Socket instances join the "room1" roomio.socketsJoin("room1");// make all Socket instances in the "room1" room join the "room2" and "room3" roomsio.in("room1").socketsJoin(["room2", "room3"]);// this also works with a single socket IDio.in(theSocketId).socketsJoin("room1");
```

tip

This method also works within a cluster of multiple Socket.IO servers, with a compatible adapter like the [Postgres adapter](/docs/v4/postgres-adapter/).

In that case, if you only want to affect the socket instances on the given node, you need to use the `local` flag:

```
// make all Socket instances that are currently connected on the given node join the "room1" roomio.local.socketsJoin("room1");
```

See [here](/docs/v4/server-instance/#utility-methods).

#### server.socketsLeave(rooms)[​](#serversocketsleaverooms "Direct link to server.socketsLeave(rooms)")

_Added in v4.0.0_

Alias for [`io.of("/").socketsLeave(rooms)`](#namespacesocketsleaverooms).

```
// make all Socket instances leave the "room1" roomio.socketsLeave("room1");// make all Socket instances in the "room1" room leave the "room2" and "room3" roomsio.in("room1").socketsLeave(["room2", "room3"]);// this also works with a single socket IDio.in(theSocketId).socketsLeave("room1");
```

tip

This method also works within a cluster of multiple Socket.IO servers, with a compatible adapter like the [Postgres adapter](/docs/v4/postgres-adapter/).

In that case, if you only want to affect the socket instances on the given node, you need to use the `local` flag:

```
// make all Socket instances that are currently connected on the given node leave the "room1" roomio.local.socketsLeave("room1");
```

See [here](/docs/v4/server-instance/#utility-methods).

#### server.timeout(value)[​](#servertimeoutvalue "Direct link to server.timeout(value)")

_Added in v4.5.0_

-   `value` [`<number>`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#number_type)
-   **Returns** `BroadcastOperator`

Sets a modifier for a subsequent event emission that the callback will be called with an error when the given number of milliseconds have elapsed without an acknowledgement from all targeted clients:

```
io.timeout(10000).emit("some-event", (err, responses) => {  if (err) {    // some clients did not acknowledge the event in the given delay  } else {    console.log(responses); // one response per client  }});
```

#### server.to(room)[​](#servertoroom "Direct link to server.to(room)")

History

Version

Changes

v4.0.0

Allow to pass an array of rooms.

v1.0.0

Initial implementation.

-   `room` [`<string>`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#string_type) | [`<string[]>`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#string_type)
-   **Returns** `BroadcastOperator` for chaining

Sets a modifier for a subsequent event emission that the event will only be _broadcast_ to clients that have joined the given `room`.

To emit to multiple rooms, you can call `to` several times.

```
// the “foo” event will be broadcast to all connected clients in the “room-101” roomio.to("room-101").emit("foo", "bar");// with an array of rooms (a client will be notified at most once)io.to(["room-101", "room-102"]).emit("foo", "bar");// with multiple chained callsio.to("room-101").to("room-102").emit("foo", "bar");
```

#### server.use(fn)[​](#serverusefn "Direct link to server.use(fn)")

_Added in v1.0.0_

Alias for [`io.of("/").use(fn)`](#namespaceusefn).

-   `fn` [`<Function>`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function)

Registers a middleware for the main namespace, which is a function that gets executed for every incoming `Socket`, and receives as parameters the socket and a function to optionally defer execution to the next registered middleware.

Errors passed to middleware callbacks are sent as special `connect_error` packets to clients.

_Server_

```
io.use((socket, next) => {  const err = new Error("not authorized");  err.data = { content: "Please retry later" }; // additional details  next(err);});
```

_Client_

```
socket.on("connect_error", err => {  console.log(err instanceof Error); // true  console.log(err.message); // not authorized  console.log(err.data); // { content: "Please retry later" }});
```

More information can be found [here](/docs/v4/middlewares/).

info

If you are looking for Express middlewares, please check [this section](#engineusemiddleware).

## Namespace[​](#namespace "Direct link to Namespace")

![Namespace in the class diagram for the server](/images/server-class-diagram-namespace.png)![Namespace in the class diagram for the server](/images/server-class-diagram-namespace-dark.png)

Represents a pool of sockets connected under a given scope identified by a pathname (eg: `/chat`).

More information can be found [here](/docs/v4/namespaces/).

### Attributes[​](#attributes-1 "Direct link to Attributes")

#### namespace.adapter[​](#namespaceadapter "Direct link to namespace.adapter")

-   [`<Adapter>`](/docs/v4/adapter/)

The ["Adapter"](/docs/v4/glossary/#adapter) used for the namespace.

**Note:** the adapter of the main namespace can be accessed with `io.of("/").adapter`.

More information about it [here](/docs/v4/adapter/).

```
const adapter = io.of("/my-namespace").adapter;
```

#### namespace.name[​](#namespacename "Direct link to namespace.name")

-   [`<string>`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#string_type)

The namespace identifier property.

#### namespace.sockets[​](#namespacesockets "Direct link to namespace.sockets")

-   [`Map<SocketId, Socket>`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map)

A map of [Socket](#socket) instances that are connected to this namespace.

```
// number of sockets in this namespace (on this node)const socketCount = io.of("/admin").sockets.size;
```

### Events[​](#events-1 "Direct link to Events")

#### Event: 'connect'[​](#event-connect-1 "Direct link to Event: 'connect'")

Synonym of [Event: "connection"](#event-connection-1).

#### Event: 'connection'[​](#event-connection-1 "Direct link to Event: 'connection'")

-   `socket` [`<Socket>`](#socket)

Fired upon a connection from client.

```
// main namespaceio.on("connection", (socket) => {  // ...});// custom namespaceio.of("/admin").on("connection", (socket) => {  // ...});
```

### Methods[​](#methods-1 "Direct link to Methods")

#### namespace.allSockets()[​](#namespaceallsockets "Direct link to namespace.allSockets()")

-   **Returns** `Promise<Set<SocketId>>`

caution

This method will be removed in the next major release, please use [`serverSideEmit()`](#namespaceserversideemiteventname-args) or [`fetchSockets()`](#namespacefetchsockets) instead.

Gets a list of socket IDs connected to this namespace (across all nodes if applicable).

```
// all sockets in the main namespaceconst ids = await io.allSockets();// all sockets in the main namespace and in the "user:1234" roomconst ids = await io.in("user:1234").allSockets();// all sockets in the "chat" namespaceconst ids = await io.of("/chat").allSockets();// all sockets in the "chat" namespace and in the "general" roomconst ids = await io.of("/chat").in("general").allSockets();
```

#### namespace.disconnectSockets(\[close\])[​](#namespacedisconnectsocketsclose "Direct link to namespacedisconnectsocketsclose")

_Added in v4.0.0_

-   `close` [`<boolean>`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#boolean_type) whether to close the underlying connection
-   **Returns** `void`

Makes the matching Socket instances disconnect.

```
// make all Socket instances disconnectio.disconnectSockets();// make all Socket instances in the "room1" room disconnect (and discard the low-level connection)io.in("room1").disconnectSockets(true);// make all Socket instances in the "room1" room of the "admin" namespace disconnectio.of("/admin").in("room1").disconnectSockets();// this also works with a single socket IDio.of("/admin").in(theSocketId).disconnectSockets();
```

#### namespace.emit(eventName\[, ...args\])[​](#namespaceemiteventname-args "Direct link to namespaceemiteventname-args")

History

Version

Changes

v4.5.0

`io.emit()` now supports acknowledgements.

v1.0.0

Initial implementation.

-   `eventName` [`<string>`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#string_type) | [`<symbol>`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#symbol_type)
-   `args` `any[]`
-   **Returns** `true`

Emits an event to all connected clients in the given namespace.

```
io.of("/chat").emit("hello");
```

Any number of parameters can be included, and all serializable data structures are supported:

```
io.of("/chat").emit("hello", 1, "2", { "3": 4 }, Buffer.from([5]));
```

And on the receiving side:

```
socket.on("hello", (arg1, arg2, arg3, arg4) => {  console.log(arg1); // 1  console.log(arg2); // "2"  console.log(arg3); // { "3": 4 }  console.log(arg4); // ArrayBuffer or Buffer, depending on the platform});
```

info

The arguments will automatically be serialized, so calling `JSON.stringify()` is not needed.

You can use [`to()`](#namespacetoroom) and [`except()`](#namespaceexceptrooms) to send the packet to specific clients:

```
// the “hello” event will be broadcast to all connected clients that are either// in the "room1" room or in the "room2" room, excluding those in the "room3" roomio.of("/chat").to("room1").to("room2").except("room3").emit("hello");
```

Starting with version `4.5.0`, it is now possible to use acknowledgements when broadcasting:

```
io.of("/chat").timeout(10000).emit("some-event", (err, responses) => {  if (err) {    // some clients did not acknowledge the event in the given delay  } else {    console.log(responses); // one response per client  }});
```

caution

Calling [`timeout()`](#namespacetimeoutvalue) is mandatory in that case.

#### namespace.emitWithAck(eventName\[, ...args\])[​](#namespaceemitwithackeventname-args "Direct link to namespaceemitwithackeventname-args")

_Added in v4.6.0_

-   `eventName` [`<string>`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#string_type) | [`<symbol>`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#symbol_type)
-   `args` `any[]`
-   **Returns** [`Promise<any[]>`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise)

Promised-based version of broadcasting and expecting an acknowledgement from all targeted clients in the given namespace:

```
try {  const responses = await io.of("/chat").timeout(10000).emitWithAck("some-event");  console.log(responses); // one response per client} catch (e) {  // some clients did not acknowledge the event in the given delay}
```

The example above is equivalent to:

```
io.of("/chat").timeout(10000).emit("some-event", (err, responses) => {  if (err) {    // some clients did not acknowledge the event in the given delay  } else {    console.log(responses); // one response per client  }});
```

And on the receiving side:

```
socket.on("some-event", (callback) => {  callback("got it"); // only one argument is expected});
```

#### namespace.except(rooms)[​](#namespaceexceptrooms "Direct link to namespace.except(rooms)")

_Added in v4.0.0_

-   `rooms` [`<string>`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#string_type) | [`<string[]>`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#string_type)
-   **Returns** `BroadcastOperator`

Sets a modifier for a subsequent event emission that the event will only be _broadcast_ to clients that have not joined the given `rooms`.

```
const myNamespace = io.of("/my-namespace");// the "foo" event will be broadcast to all connected clients, except the ones that are in the "room-101" roommyNamespace.except("room-101").emit("foo", "bar");// with an array of roomsmyNamespace.except(["room-101", "room-102"]).emit("foo", "bar");// with multiple chained callsmyNamespace.except("room-101").except("room-102").emit("foo", "bar");
```

#### namespace.fetchSockets()[​](#namespacefetchsockets "Direct link to namespace.fetchSockets()")

_Added in v4.0.0_

-   **Returns** [`Socket[]`](#socket) | `RemoteSocket[]`

Returns the matching Socket instances:

```
// return all Socket instances in the main namespaceconst sockets = await io.fetchSockets();// return all Socket instances in the "room1" room of the main namespaceconst sockets = await io.in("room1").fetchSockets();// return all Socket instances in the "room1" room of the "admin" namespaceconst sockets = await io.of("/admin").in("room1").fetchSockets();// this also works with a single socket IDconst sockets = await io.in(theSocketId).fetchSockets();
```

The `sockets` variable in the example above is an array of objects exposing a subset of the usual Socket class:

```
for (const socket of sockets) {  console.log(socket.id);  console.log(socket.handshake);  console.log(socket.rooms);  console.log(socket.data);  socket.emit(/* ... */);  socket.join(/* ... */);  socket.leave(/* ... */);  socket.disconnect(/* ... */);}
```

The `data` attribute is an arbitrary object that can be used to share information between Socket.IO servers:

```
// server Aio.on("connection", (socket) => {  socket.data.username = "alice";});// server Bconst sockets = await io.fetchSockets();console.log(sockets[0].data.username); // "alice"
```

**Important note**: this method (and `socketsJoin`, `socketsLeave` and `disconnectSockets` too) is compatible with the Redis adapter (starting with `socket.io-redis@6.1.0`), which means that they will work across Socket.IO servers.

#### namespace.in(room)[​](#namespaceinroom "Direct link to namespace.in(room)")

_Added in v1.0.0_

Synonym of [namespace.to(room)](#namespacetoroom), but might feel clearer in some cases:

```
const myNamespace = io.of("/my-namespace");// disconnect all clients in the "room-101" roommyNamespace.in("room-101").disconnectSockets();
```

#### namespace.serverSideEmit(eventName\[, ...args\]\[, ack\])[​](#namespaceserversideemiteventname-args "Direct link to namespaceserversideemiteventname-args")

_Added in v4.1.0_

-   `eventName` [`<string>`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#string_type)
-   `args` `<any[]>`
-   `ack` [`<Function>`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function)
-   **Returns** `true`

Sends a message to the other Socket.IO servers of the [cluster](/docs/v4/using-multiple-nodes/).

Syntax:

```
io.of("/chat").serverSideEmit("hello", "world");
```

And on the receiving side:

```
io.of("/chat").on("hello", (arg1) => {  console.log(arg1); // prints "world"});
```

Acknowledgements are supported too:

```
// server Aio.of("/chat").serverSideEmit("ping", (err, responses) => {  console.log(responses[0]); // prints "pong"});// server Bio.of("/chat").on("ping", (cb) => {  cb("pong");});
```

Notes:

-   the `connection`, `connect` and `new_namespace` strings are reserved and cannot be used in your application.
    
-   you can send any number of arguments, but binary structures are currently not supported (the array of arguments will be `JSON.stringify`\-ed)
    

Example:

```
io.of("/chat").serverSideEmit("hello", "world", 1, "2", { 3: "4" });
```

-   the acknowledgement callback might be called with an error, if the other Socket.IO servers do not respond after a given delay

```
io.of("/chat").serverSideEmit("ping", (err, responses) => {  if (err) {    // at least one Socket.IO server has not responded    // the 'responses' array contains all the responses already received though  } else {    // success! the 'responses' array contains one object per other Socket.IO server in the cluster  }});
```

#### namespace.serverSideEmitWithAck(eventName\[, ...args\])[​](#namespaceserversideemitwithackeventname-args "Direct link to namespaceserversideemitwithackeventname-args")

_Added in v4.6.0_

-   `eventName` [`<string>`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#string_type)
-   `args` `<any[]>`
-   `ack` [`<Function>`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function)
-   **Returns** [`Promise<any[]>`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise)

Promised-based version of broadcasting and expecting an acknowledgement from the other Socket.IO servers of the [cluster](/docs/v4/using-multiple-nodes/).

```
try {  const responses = await io.of("/chat").serverSideEmitWithAck("some-event");  console.log(responses); // one response per server (except itself)} catch (e) {  // some servers did not acknowledge the event in the given delay}
```

The example above is equivalent to:

```
io.of("/chat").serverSideEmit("some-event", (err, responses) => {  if (err) {    // some servers did not acknowledge the event in the given delay  } else {    console.log(responses); // one response per server (except itself)  }});
```

And on the receiving side:

```
io.of("/chat").on("some-event", (callback) => {  callback("got it"); // only one argument is expected});
```

#### namespace.socketsJoin(rooms)[​](#namespacesocketsjoinrooms "Direct link to namespace.socketsJoin(rooms)")

_Added in v4.0.0_

-   `rooms` [`<string>`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#string_type) | [`<string[]>`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#string_type)
-   **Returns** `void`

Makes the matching Socket instances join the specified rooms:

```
// make all Socket instances join the "room1" roomio.socketsJoin("room1");// make all Socket instances in the "room1" room join the "room2" and "room3" roomsio.in("room1").socketsJoin(["room2", "room3"]);// make all Socket instances in the "room1" room of the "admin" namespace join the "room2" roomio.of("/admin").in("room1").socketsJoin("room2");// this also works with a single socket IDio.in(theSocketId).socketsJoin("room1");
```

More information can be found [here](/docs/v4/server-instance/#utility-methods).

#### namespace.socketsLeave(rooms)[​](#namespacesocketsleaverooms "Direct link to namespace.socketsLeave(rooms)")

_Added in v4.0.0_

-   `rooms` [`<string>`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#string_type) | [`<string[]>`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#string_type)
-   **Returns** `void`

Makes the matching Socket instances leave the specified rooms:

```
// make all Socket instances leave the "room1" roomio.socketsLeave("room1");// make all Socket instances in the "room1" room leave the "room2" and "room3" roomsio.in("room1").socketsLeave(["room2", "room3"]);// make all Socket instances in the "room1" room of the "admin" namespace leave the "room2" roomio.of("/admin").in("room1").socketsLeave("room2");// this also works with a single socket IDio.in(theSocketId).socketsLeave("room1");
```

#### namespace.timeout(value)[​](#namespacetimeoutvalue "Direct link to namespace.timeout(value)")

_Added in v4.5.0_

-   `value` [`<number>`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#number_type)
-   **Returns** `BroadcastOperator`

Sets a modifier for a subsequent event emission that the callback will be called with an error when the given number of milliseconds have elapsed without an acknowledgement from the client:

```
io.of("/chat").timeout(10000).emit("some-event", (err, responses) => {  if (err) {    // some clients did not acknowledge the event in the given delay  } else {    console.log(responses); // one response per client  }});
```

#### namespace.to(room)[​](#namespacetoroom "Direct link to namespace.to(room)")

History

Version

Changes

v4.0.0

Allow to pass an array of rooms.

v1.0.0

Initial implementation.

-   `room` [`<string>`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#string_type) | [`<string[]>`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#string_type)
-   **Returns** `BroadcastOperator` for chaining

Sets a modifier for a subsequent event emission that the event will only be _broadcast_ to clients that have joined the given `room`.

To emit to multiple rooms, you can call `to` several times.

```
const myNamespace = io.of("/my-namespace");// the “foo” event will be broadcast to all connected clients in the “room-101” roommyNamespace.to("room-101").emit("foo", "bar");// with an array of rooms (a client will be notified at most once)myNamespace.to(["room-101", "room-102"]).emit("foo", "bar");// with multiple chained callsmyNamespace.to("room-101").to("room-102").emit("foo", "bar");
```

#### namespace.use(fn)[​](#namespaceusefn "Direct link to namespace.use(fn)")

_Added in v1.0.0_

-   `fn` [`<Function>`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function)

Registers a middleware for the given namespace, which is a function that gets executed for every incoming `Socket`, and receives as parameters the socket and a function to optionally defer execution to the next registered middleware.

Errors passed to middleware callbacks are sent as special `connect_error` packets to clients.

_Server_

```
io.of("/chat").use((socket, next) => {  const err = new Error("not authorized");  err.data = { content: "Please retry later" }; // additional details  next(err);});
```

_Client_

```
socket.on("connect_error", err => {  console.log(err instanceof Error); // true  console.log(err.message); // not authorized  console.log(err.data); // { content: "Please retry later" }});
```

More information can be found [here](/docs/v4/middlewares/).

info

If you are looking for Express middlewares, please check [this section](#engineusemiddleware).

### Flags[​](#flags "Direct link to Flags")

#### Flag: 'local'[​](#flag-local "Direct link to Flag: 'local'")

Sets a modifier for a subsequent event emission that the event data will only be _broadcast_ to the current node (when [scaling to multiple nodes](/docs/v4/using-multiple-nodes/)).

```
io.local.emit("an event", { some: "data" });
```

#### Flag: 'volatile'[​](#flag-volatile "Direct link to Flag: 'volatile'")

Sets a modifier for a subsequent event emission that the event data may be lost if the clients are not ready to receive messages (because of network slowness or other issues, or because they’re connected through long polling and is in the middle of a request-response cycle).

```
io.volatile.emit("an event", { some: "data" }); // the clients may or may not receive it
```

## Socket[​](#socket "Direct link to Socket")

![Socket in the class diagram for the server](/images/server-class-diagram-socket.png)![Socket in the class diagram for the server](/images/server-class-diagram-socket-dark.png)

A `Socket` is the fundamental class for interacting with browser clients. A `Socket` belongs to a certain `Namespace` (by default `/`) and uses an underlying `Client` to communicate.

It should be noted the `Socket` doesn't relate directly to the actual underlying TCP/IP `socket` and it is only the name of the class.

Within each `Namespace`, you can also define arbitrary channels (called `room`) that the `Socket` can join and leave. That provides a convenient way to broadcast to a group of `Socket`s (see `Socket#to` below).

The `Socket` class inherits from [EventEmitter](https://nodejs.org/api/events.html#events_class_eventemitter). The `Socket` class overrides the `emit` method, and does not modify any other `EventEmitter` method. All methods documented here which also appear as `EventEmitter` methods (apart from `emit`) are implemented by `EventEmitter`, and documentation for `EventEmitter` applies.

More information can be found [here](/docs/v4/server-socket-instance/).

### Events[​](#events-2 "Direct link to Events")

#### Event: 'disconnect'[​](#event-disconnect "Direct link to Event: 'disconnect'")

-   `reason` [`<string>`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#string_type) the reason of the disconnection (either client or server-side)

Fired upon disconnection.

```
io.on("connection", (socket) => {  socket.on("disconnect", (reason) => {    // ...  });});
```

Possible reasons:

Reason

Description

`server namespace disconnect`

The socket was forcefully disconnected with [socket.disconnect()](/docs/v4/server-api/#socketdisconnectclose).

`client namespace disconnect`

The client has manually disconnected the socket using [socket.disconnect()](/docs/v4/client-api/#socketdisconnect).

`server shutting down`

The server is, well, shutting down.

`ping timeout`

The client did not send a PONG packet in the `pingTimeout` delay.

`transport close`

The connection was closed (example: the user has lost connection, or the network was changed from WiFi to 4G).

`transport error`

The connection has encountered an error.

`parse error`

The server has received an invalid packet from the client.

`forced close`

The server has received an invalid packet from the client.

`forced server close`

The client did not join a namespace in time (see the [`connectTimeout`](/docs/v4/server-options/#connecttimeout) option) and was forcefully closed.

#### Event: 'disconnecting'[​](#event-disconnecting "Direct link to Event: 'disconnecting'")

_Added in v1.5.0_

-   `reason` [`<string>`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#string_type) the reason of the disconnection (either client or server-side)

Fired when the client is going to be disconnected (but hasn't left its `rooms` yet).

```
io.on("connection", (socket) => {  socket.on("disconnecting", (reason) => {    console.log(socket.rooms); // Set { ... }  });});
```

With an asynchronous handler, you will need to create a copy of the `rooms` attribute:

```
io.on("connection", (socket) => {  socket.on("disconnecting", async (reason) => {    const rooms = new Set(socket.rooms);    await someLongRunningOperation();    // socket.rooms will be empty there    console.log(rooms);  });});
```

caution

Those events, along with `connect`, `connect_error`, `newListener` and `removeListener`, are special events that shouldn't be used in your application:

```
// BAD, will throw an errorsocket.emit("disconnect");
```

### Attributes[​](#attributes-2 "Direct link to Attributes")

#### socket.client[​](#socketclient "Direct link to socket.client")

-   [`<Client>`](#client)

A reference to the underlying `Client` object.

#### socket.conn[​](#socketconn "Direct link to socket.conn")

-   `<engine.Socket>`

A reference to the underlying `Client` transport connection (engine.io `Socket` object). This allows access to the IO transport layer, which still (mostly) abstracts the actual TCP/IP socket.

```
io.on("connection", (socket) => {  console.log("initial transport", socket.conn.transport.name); // prints "polling"  socket.conn.once("upgrade", () => {    // called when the transport is upgraded (i.e. from HTTP long-polling to WebSocket)    console.log("upgraded transport", socket.conn.transport.name); // prints "websocket"  });  socket.conn.on("packet", ({ type, data }) => {    // called for each packet received  });  socket.conn.on("packetCreate", ({ type, data }) => {    // called for each packet sent  });  socket.conn.on("drain", () => {    // called when the write buffer is drained  });  socket.conn.on("heartbeat", () => {    // called after each round trip of the heartbeat mechanism    console.log("heartbeat");  });  socket.conn.on("close", (reason) => {    // called when the underlying connection is closed  });});
```

#### socket.data[​](#socketdata "Direct link to socket.data")

_Added in v4.0.0_

An arbitrary object that can be used in conjunction with the [`fetchSockets()`](#namespacefetchsockets) utility method:

```
io.on("connection", (socket) => {  socket.data.username = "alice";});const sockets = await io.fetchSockets();console.log(sockets[0].data.username); // "alice"
```

tip

This also works within a Socket.IO cluster, with a compatible adapter like the [Postgres adapter](/docs/v4/postgres-adapter/).

#### socket.handshake[​](#sockethandshake "Direct link to socket.handshake")

-   [`<Object>`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object)

The handshake details:

Field

Type

Description

headers

`IncomingHttpHeaders`

The headers sent as part of the handshake.

time

[`<string>`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#string_type)

The date of creation (as string).

address

[`<string>`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#string_type)

The ip address of the client.

xdomain

[`<boolean>`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#boolean_type)

Whether the connection is cross-domain.

secure

[`<boolean>`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#boolean_type)

Whether the connection is made over SSL.

issued

[`<number>`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#number_type)

The date of creation (as unix timestamp).

url

[`<string>`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#string_type)

The request URL string.

query

`Record<string, string or string[]>`

The query parameters of the first request.

auth

`Record<string, any>`

The authentication payload. See also [here](/docs/v4/middlewares/).

Usage:

```
io.use((socket, next) => {  let handshake = socket.handshake;  // ...});io.on("connection", (socket) => {  let handshake = socket.handshake;  // ...});
```

Example:

```
const handshake = {  headers: {    "user-agent": "node-XMLHttpRequest",    accept: "*/*",    host: "localhost:3000",    connection: "close"  },  time: "Wed Jan 01 2020 01:00:00 GMT+0100 (Central European Standard Time)",  address: "::ffff:127.0.0.1",  xdomain: false,  secure: false,  issued: 1577836800000,  url: "/socket.io/?EIO=4&transport=polling&t=OPAfXv5&b64=1",  query: {    EIO: "4",    transport: "polling",    t: "OPAfXv5",    b64: "1"  },  auth: {}}
```

Note: the `headers` attribute refers to the headers of the first HTTP request of the session, and won't be updated by the subsequent HTTP requests.

```
io.on("connection", (socket) => {  console.log(socket.handshake.headers === socket.request.headers); // prints "true"});
```

#### socket.id[​](#socketid "Direct link to socket.id")

-   [`<string>`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#string_type)

A unique identifier for the session, that comes from the underlying `Client`.

caution

The `id` attribute is an **ephemeral** ID that is not meant to be used in your application (or only for debugging purposes) because:

-   this ID is regenerated after each reconnection (for example when the WebSocket connection is severed, or when the user refreshes the page)
-   two different browser tabs will have two different IDs
-   there is no message queue stored for a given ID on the server (i.e. if the client is disconnected, the messages sent from the server to this ID are lost)

Please use a regular session ID instead (either sent in a cookie, or stored in the localStorage and sent in the [`auth`](/docs/v4/client-options/#auth) payload).

See also:

-   [Part II of our private message guide](/get-started/private-messaging-part-2/)
-   [How to deal with cookies](/how-to/deal-with-cookies)

#### socket.recovered[​](#socketrecovered "Direct link to socket.recovered")

_Added in v4.6.0_

-   [`<boolean>`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#boolean_type)

Whether the connection state was successfully recovered during the last reconnection.

```
io.on("connection", (socket) => {  if (socket.recovered) {    // recovery was successful: socket.id, socket.rooms and socket.data were restored  } else {    // new or unrecoverable session  }});
```

More information about this feature [here](/docs/v4/connection-state-recovery).

#### socket.request[​](#socketrequest "Direct link to socket.request")

-   [`<http.IncomingMessage>`](https://nodejs.org/api/http.html#class-httpincomingmessage)

A getter proxy that returns the reference to the `request` that originated the underlying engine.io `Client`. Useful for accessing request headers such as `Cookie` or `User-Agent`.

```
import { parse } from "cookie";io.on("connection", (socket) => {  const cookies = parse(socket.request.headers.cookie || "");});
```

Note: `socket.request` refers to the first HTTP request of the session, and won't be updated by the subsequent HTTP requests.

```
io.on("connection", (socket) => {  console.log(socket.request.headers === socket.handshake.headers); // prints "true"});
```

If you don't need this reference, you can discard it in order to reduce the memory footprint:

```
io.on("connection", (socket) => {  delete socket.conn.request;});
```

#### socket.rooms[​](#socketrooms "Direct link to socket.rooms")

-   [`Set<string>`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set)

A Set of strings identifying the rooms this client is in.

```
io.on("connection", (socket) => {  console.log(socket.rooms); // Set { <socket.id> }  socket.join("room1");  console.log(socket.rooms); // Set { <socket.id>, "room1" }});
```

### Methods[​](#methods-2 "Direct link to Methods")

#### socket.compress(value)[​](#socketcompressvalue "Direct link to socket.compress(value)")

-   `value` [`<boolean>`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#boolean_type) whether to following packet will be compressed
-   **Returns** `Socket` for chaining

Sets a modifier for a subsequent event emission that the event data will only be _compressed_ if the value is `true`. Defaults to `true` when you don't call the method.

```
io.on("connection", (socket) => {  socket.compress(false).emit("uncompressed", "that's rough");});
```

#### socket.disconnect(\[close\])[​](#socketdisconnectclose "Direct link to socketdisconnectclose")

-   `close` [`<boolean>`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#boolean_type) whether to close the underlying connection
-   **Returns** [`Socket`](#socket)

Disconnects this socket. If value of close is `true`, closes the underlying connection. Otherwise, it just disconnects the namespace.

```
io.on("connection", (socket) => {  setTimeout(() => socket.disconnect(true), 5000);});
```

#### socket.emit(eventName\[, ...args\]\[, ack\])[​](#socketemiteventname-args "Direct link to socketemiteventname-args")

_(overrides `EventEmitter.emit`)_

-   `eventName` [`<string>`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#string_type) | [`<symbol>`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#symbol_type)
-   `args` `<any[]>`
-   `ack` [`<Function>`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function)
-   **Returns** `true`

Emits an event to the socket identified by the string name. Any other parameters can be included. All serializable data structures are supported, including `Buffer`.

```
io.on("connection", () => {  socket.emit("hello", "world");  socket.emit("with-binary", 1, "2", { 3: "4", 5: Buffer.from([6]) });});
```

The `ack` argument is optional and will be called with the client's answer.

_Server_

```
io.on("connection", (socket) => {  socket.emit("hello", "world", (response) => {    console.log(response); // "got it"  });});
```

_Client_

```
socket.on("hello", (arg, callback) => {  console.log(arg); // "world"  callback("got it");});
```

#### socket.emitWithAck(eventName\[, ...args\])[​](#socketemitwithackeventname-args "Direct link to socketemitwithackeventname-args")

_Added in v4.6.0_

-   `eventName` [`<string>`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#string_type) | [`<symbol>`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#symbol_type)
-   `args` `any[]`
-   **Returns** [`Promise<any>`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise)

Promised-based version of emitting and expecting an acknowledgement from the given client:

```
io.on("connection", async (socket) => {  // without timeout  const response = await socket.emitWithAck("hello", "world");  // with a specific timeout  try {    const response = await socket.timeout(10000).emitWithAck("hello", "world");  } catch (err) {    // the client did not acknowledge the event in the given delay  }});
```

The example above is equivalent to:

```
io.on("connection", (socket) => {  // without timeout  socket.emit("hello", "world", (val) => {    // ...  });  // with a specific timeout  socket.timeout(10000).emit("hello", "world", (err, val) => {    // ...  });});
```

And on the receiving side:

```
socket.on("hello", (arg1, callback) => {  callback("got it"); // only one argument is expected});
```

#### socket.eventNames()[​](#socketeventnames "Direct link to socket.eventNames()")

Inherited from `EventEmitter` (along with other methods not mentioned here). See the Node.js documentation for the [events](https://nodejs.org/docs/latest/api/events.html) module.

#### socket.except(rooms)[​](#socketexceptrooms "Direct link to socket.except(rooms)")

_Added in v4.0.0_

-   `rooms` [`<string>`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#string_type) | [`<string[]>`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#string_type)
-   **Returns** `BroadcastOperator`

Sets a modifier for a subsequent event emission that the event will only be _broadcast_ to clients that have not joined the given `rooms` (the socket itself being excluded).

```
// to all clients except the ones in "room1" and the sendersocket.broadcast.except("room1").emit(/* ... */);// same as abovesocket.except("room1").emit(/* ... */);// to all clients in "room4" except the ones in "room5" and the sendersocket.to("room4").except("room5").emit(/* ... */);
```

#### socket.in(room)[​](#socketinroom "Direct link to socket.in(room)")

_Added in v1.0.0_

Synonym of [socket.to(room)](#sockettoroom).

#### socket.join(room)[​](#socketjoinroom "Direct link to socket.join(room)")

-   `room` [`<string>`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#string_type) | [`<string[]>`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#string_type)
-   **Returns** `void` | `Promise`

Adds the socket to the given `room` or to the list of rooms.

```
io.on("connection", (socket) => {  socket.join("room 237");    console.log(socket.rooms); // Set { <socket.id>, "room 237" }  socket.join(["room 237", "room 238"]);  io.to("room 237").emit("a new user has joined the room"); // broadcast to everyone in the room});
```

The mechanics of joining rooms are handled by the `Adapter` that has been configured (see `Server#adapter` above), defaulting to [socket.io-adapter](https://github.com/socketio/socket.io-adapter).

For your convenience, each socket automatically joins a room identified by its id (see `Socket#id`). This makes it easy to broadcast messages to other sockets:

```
io.on("connection", (socket) => {  socket.on("say to someone", (id, msg) => {    // send a private message to the socket with the given id    socket.to(id).emit("my message", msg);  });});
```

#### socket.leave(room)[​](#socketleaveroom "Direct link to socket.leave(room)")

-   `room` [`<string>`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#string_type)
-   **Returns** `void` | `Promise`

Removes the socket from the given `room`.

```
io.on("connection", (socket) => {  socket.leave("room 237");  io.to("room 237").emit(`user ${socket.id} has left the room`);});
```

info

Rooms are left automatically upon disconnection.

#### socket.listenersAny()[​](#socketlistenersany "Direct link to socket.listenersAny()")

-   **Returns** [`<Function[]>`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function)

Returns the list of registered catch-all listeners.

```
const listeners = socket.listenersAny();
```

#### socket.listenersAnyOutgoing()[​](#socketlistenersanyoutgoing "Direct link to socket.listenersAnyOutgoing()")

_Added in v4.5.0_

-   **Returns** [`<Function[]>`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function)

Returns the list of registered catch-all listeners for outgoing packets.

```
const listeners = socket.listenersAnyOutgoing();
```

#### socket.offAny(\[listener\])[​](#socketoffanylistener "Direct link to socketoffanylistener")

-   `listener` [`<Function>`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function)

Removes the previously registered listener. If no listener is provided, all catch-all listeners are removed.

```
const myListener = () => { /* ... */ };socket.onAny(myListener);// then, latersocket.offAny(myListener);socket.offAny();
```

#### socket.offAnyOutgoing(\[listener\])[​](#socketoffanyoutgoinglistener "Direct link to socketoffanyoutgoinglistener")

_Added in v4.5.0_

-   `listener` [`<Function>`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function)

Removes the previously registered listener. If no listener is provided, all catch-all listeners are removed.

```
const myListener = () => { /* ... */ };socket.onAnyOutgoing(myListener);// remove a single listenersocket.offAnyOutgoing(myListener);// remove all listenerssocket.offAnyOutgoing();
```

#### socket.on(eventName, callback)[​](#socketoneventname-callback "Direct link to socket.on(eventName, callback)")

_Inherited from the [EventEmitter class](https://nodejs.org/api/events.html#class-eventemitter)._

-   `eventName` [`<string>`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#string_type) | [`<symbol>`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#symbol_type)
-   `callback` [`<Function>`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function)
-   **Returns** [`<Socket>`](#socket)

Register a new handler for the given event.

```
socket.on("news", (data) => {  console.log(data);});// with several argumentssocket.on("news", (arg1, arg2, arg3) => {  // ...});// or with acknowledgementsocket.on("news", (data, callback) => {  callback(0);});
```

#### socket.onAny(callback)[​](#socketonanycallback "Direct link to socket.onAny(callback)")

-   `callback` [`<Function>`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function)

Register a new catch-all listener.

```
socket.onAny((event, ...args) => {  console.log(`got ${event}`);});
```

caution

[Acknowledgements](/docs/v4/emitting-events/#acknowledgements) are not caught in the catch-all listener.

```
socket.emit("foo", (value) => {  // ...});socket.onAnyOutgoing(() => {  // triggered when the event is sent});socket.onAny(() => {  // not triggered when the acknowledgement is received});
```

#### socket.onAnyOutgoing(callback)[​](#socketonanyoutgoingcallback "Direct link to socket.onAnyOutgoing(callback)")

_Added in v4.5.0_

-   `callback` [`<Function>`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function)

Register a new catch-all listener for outgoing packets.

```
socket.onAnyOutgoing((event, ...args) => {  console.log(`got ${event}`);});
```

caution

[Acknowledgements](/docs/v4/emitting-events/#acknowledgements) are not caught in the catch-all listener.

```
socket.on("foo", (value, callback) => {  callback("OK");});socket.onAny(() => {  // triggered when the event is received});socket.onAnyOutgoing(() => {  // not triggered when the acknowledgement is sent});
```

#### socket.once(eventName, listener)[​](#socketonceeventname-listener "Direct link to socket.once(eventName, listener)")

Inherited from `EventEmitter` (along with other methods not mentioned here). See the Node.js documentation for the [events](https://nodejs.org/docs/latest/api/events.html) module.

#### socket.prependAny(callback)[​](#socketprependanycallback "Direct link to socket.prependAny(callback)")

-   `callback` [`<Function>`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function)

Register a new catch-all listener. The listener is added to the beginning of the listeners array.

```
socket.prependAny((event, ...args) => {  console.log(`got ${event}`);});
```

#### socket.prependAnyOutgoing(callback)[​](#socketprependanyoutgoingcallback "Direct link to socket.prependAnyOutgoing(callback)")

_Added in v4.5.0_

-   `callback` [`<Function>`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function)

Register a new catch-all listener for outgoing packets. The listener is added to the beginning of the listeners array.

```
socket.prependAnyOutgoing((event, ...args) => {  console.log(`got ${event}`);});
```

#### socket.removeAllListeners(\[eventName\])[​](#socketremovealllistenerseventname "Direct link to socketremovealllistenerseventname")

Inherited from `EventEmitter` (along with other methods not mentioned here). See the Node.js documentation for the [events](https://nodejs.org/docs/latest/api/events.html) module.

#### socket.removeListener(eventName, listener)[​](#socketremovelistenereventname-listener "Direct link to socket.removeListener(eventName, listener)")

Inherited from `EventEmitter` (along with other methods not mentioned here). See the Node.js documentation for the [events](https://nodejs.org/docs/latest/api/events.html) module.

#### socket.send(\[...args\]\[, ack\])[​](#socketsendargs "Direct link to socketsendargs")

-   `args` `<any[]>`
-   `ack` [`<Function>`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function)
-   **Returns** [`Socket`](#socket)

Sends a `message` event. See [socket.emit(eventName\[, ...args\]\[, ack\])](#socketemiteventname-args-ack).

#### socket.timeout(value)[​](#sockettimeoutvalue "Direct link to socket.timeout(value)")

_Added in v4.4.0_

-   `value` [`<number>`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#number_type)
-   **Returns** [`<Socket>`](#socket)

Sets a modifier for a subsequent event emission that the callback will be called with an error when the given number of milliseconds have elapsed without an acknowledgement from the client:

```
socket.timeout(5000).emit("my-event", (err) => {  if (err) {    // the client did not acknowledge the event in the given delay  }});
```

#### socket.to(room)[​](#sockettoroom "Direct link to socket.to(room)")

History

Version

Changes

v4.0.0

Allow to pass an array of rooms.

v1.0.0

Initial implementation.

-   `room` [`<string>`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#string_type) | [`<string[]>`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#string_type)
-   **Returns** `Socket` for chaining

Sets a modifier for a subsequent event emission that the event will only be _broadcast_ to clients that have joined the given `room` (the socket itself being excluded).

To emit to multiple rooms, you can call `to` several times.

```
io.on("connection", (socket) => {  // to one room  socket.to("others").emit("an event", { some: "data" });  // to multiple rooms  socket.to("room1").to("room2").emit("hello");  // or with an array  socket.to(["room1", "room2"]).emit("hello");  // a private message to another socket  socket.to(/* another socket id */).emit("hey");  // WARNING: `socket.to(socket.id).emit()` will NOT work  // Please use `io.to(socket.id).emit()` instead.});
```

#### socket.use(fn)[​](#socketusefn "Direct link to socket.use(fn)")

History

Version

Changes

v3.0.5

Restoration of the first implementation.

v3.0.0

Removal in favor of `socket.onAny()`.

v1.7.2

The `error` event is sent directly to the client.

v1.6.0

First implementation.

-   `fn` [`<Function>`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function)

Registers a middleware, which is a function that gets executed for every incoming `Packet` and receives as parameter the packet and a function to optionally defer execution to the next registered middleware.

Errors passed to the middleware callback are then emitted as `error` events on the server-side:

```
io.on("connection", (socket) => {  socket.use(([event, ...args], next) => {    if (isUnauthorized(event)) {      return next(new Error("unauthorized event"));    }    // do not forget to call next    next();  });  socket.on("error", (err) => {    if (err && err.message === "unauthorized event") {      socket.disconnect();    }  });});
```

### Flags[​](#flags-1 "Direct link to Flags")

#### Flag: 'broadcast'[​](#flag-broadcast "Direct link to Flag: 'broadcast'")

Sets a modifier for a subsequent event emission that the event data will only be _broadcast_ to every sockets but the sender.

```
io.on("connection", (socket) => {  socket.broadcast.emit("an event", { some: "data" }); // everyone gets it but the sender});
```

#### Flag: 'volatile'[​](#flag-volatile-1 "Direct link to Flag: 'volatile'")

Sets a modifier for a subsequent event emission that the event data may be lost if the client is not ready to receive messages (because of network slowness or other issues, or because they’re connected through long polling and is in the middle of a request-response cycle).

```
io.on("connection", (socket) => {  socket.volatile.emit("an event", { some: "data" }); // the client may or may not receive it});
```

## Client[​](#client "Direct link to Client")

![Client in the class diagram for the server](/images/server-class-diagram-client.png)![Client in the class diagram for the server](/images/server-class-diagram-client-dark.png)

The `Client` class represents an incoming transport (engine.io) connection. A `Client` can be associated with many multiplexed `Socket`s that belong to different `Namespace`s.

### Attributes[​](#attributes-3 "Direct link to Attributes")

#### client.conn[​](#clientconn "Direct link to client.conn")

-   `<engine.Socket>`

A reference to the underlying `engine.io` `Socket` connection.

#### client.request[​](#clientrequest "Direct link to client.request")

-   [`<http.IncomingMessage>`](https://nodejs.org/api/http.html#class-httpincomingmessage)

A getter proxy that returns the reference to the `request` that originated the engine.io connection. Useful for accessing request headers such as `Cookie` or `User-Agent`.

## Engine[​](#engine "Direct link to Engine")

The Engine.IO server, which manages the WebSocket / HTTP long-polling connections. More information [here](/docs/v4/how-it-works/).

Its source code can be found here: [https://github.com/socketio/engine.io](https://github.com/socketio/engine.io)

### Events[​](#events-3 "Direct link to Events")

#### Event: 'connection\_error'[​](#event-connection_error "Direct link to Event: 'connection_error'")

_Added in v4.1.0_

-   `error` [`<Error>`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Error)

```
io.engine.on("connection_error", (err) => {  console.log(err.req);      // the request object  console.log(err.code);     // the error code, for example 1  console.log(err.message);  // the error message, for example "Session ID unknown"  console.log(err.context);  // some additional error context});
```

This event will be emitted when a connection is abnormally closed. Here is the list of possible error codes:

Code

Message

0

"Transport unknown"

1

"Session ID unknown"

2

"Bad handshake method"

3

"Bad request"

4

"Forbidden"

5

"Unsupported protocol version"

#### Event: 'headers'[​](#event-headers "Direct link to Event: 'headers'")

_Added in v4.1.0_

-   `headers` [`<Object>`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object) a hash of headers, indexed by header name
-   `request` [`<http.IncomingMessage>`](https://nodejs.org/docs/latest/api/http.html#http_class_http_incomingmessage) the incoming request

This event will be emitted just before writing the response headers of **each** HTTP request of the session (including the WebSocket upgrade), allowing you to customize them.

```
import { serialize, parse } from "cookie";io.engine.on("headers", (headers, request) => {  if (!request.headers.cookie) return;  const cookies = parse(request.headers.cookie);  if (!cookies.randomId) {    headers["set-cookie"] = serialize("randomId", "abc", { maxAge: 86400 });  }});
```

#### Event: 'initial\_headers'[​](#event-initial_headers "Direct link to Event: 'initial_headers'")

_Added in v4.1.0_

-   `headers` [`<Object>`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object) a hash of headers, indexed by header name
-   `request` [`<http.IncomingMessage>`](https://nodejs.org/docs/latest/api/http.html#http_class_http_incomingmessage) the incoming request

This event will be emitted just before writing the response headers of **the first** HTTP request of the session (the handshake), allowing you to customize them.

```
import { serialize } from "cookie";io.engine.on("initial_headers", (headers, request) => {  headers["set-cookie"] = serialize("uid", "1234", { sameSite: "strict" });});
```

If you need to perform some asynchronous operations, you will need to use the [`allowRequest`](/docs/v4/server-options/#allowrequest) option:

```
import { serialize } from "cookie";const io = new Server(httpServer, {  allowRequest: async (req, callback) => {    const session = await fetchSession(req);    req.session = session;    callback(null, true);  }});io.engine.on("initial_headers", (headers, req) => {  if (req.session) {    headers["set-cookie"] = serialize("sid", req.session.id, { sameSite: "strict" });  }});
```

See also:

-   [how to use with `express-session`](/how-to/use-with-express-session)
-   [how to deal with cookies](/how-to/deal-with-cookies)

### Attributes[​](#attributes-4 "Direct link to Attributes")

#### engine.clientsCount[​](#engineclientscount "Direct link to engine.clientsCount")

_Added in v1.0.0_

-   [`<number>`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#number_type)

The number of currently connected clients.

```
const count = io.engine.clientsCount;// may or may not be similar to the count of Socket instances in the main namespace, depending on your usageconst count2 = io.of("/").sockets.size;
```

### Methods[​](#methods-3 "Direct link to Methods")

#### engine.generateId[​](#enginegenerateid "Direct link to engine.generateId")

-   [`<Function>`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function)

The function used to generate a new session ID. Defaults to [base64id](https://github.com/faeldt/base64id).

```
const uuid = require("uuid");io.engine.generateId = () => {  return uuid.v4(); // must be unique across all Socket.IO servers}
```

#### engine.handleUpgrade(request, socket, head)[​](#enginehandleupgraderequest-socket-head "Direct link to engine.handleUpgrade(request, socket, head)")

_Added in v1.0.0_

-   `request` [`<http.IncomingMessage>`](https://nodejs.org/docs/latest/api/http.html#http_class_http_incomingmessage) the incoming request
-   `socket` [`<stream.Duplex>`](https://nodejs.org/docs/latest/api/stream.html#stream_class_stream_duplex) the network socket between the server and client
-   `head` [`<Buffer>`](https://nodejs.org/docs/latest/api/buffer.html#buffer_class_buffer) the first packet of the upgraded stream (may be empty)

This method can be used to inject an HTTP upgrade:

Example with both a Socket.IO server and a plain WebSocket server:

```
import { createServer } from "http";import { Server as WsServer } from "ws";import { Server } from "socket.io";const httpServer = createServer();const wss = new WsServer({ noServer: true });const io = new Server(httpServer);httpServer.removeAllListeners("upgrade");httpServer.on("upgrade", (req, socket, head) => {  if (req.url === "/") {    wss.handleUpgrade(req, socket, head, (ws) => {      wss.emit("connection", ws, req);    });  } else if (req.url.startsWith("/socket.io/")) {    io.engine.handleUpgrade(req, socket, head);  } else {    socket.destroy();  }});httpServer.listen(3000);
```

#### engine.use(middleware)[​](#engineusemiddleware "Direct link to engine.use(middleware)")

_Added in v4.6.0_

-   [`<Function>`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function)

Adds a new [Express middleware](https://expressjs.com/en/guide/using-middleware.html).

```
io.engine.use((req, res, next) => {  // do something  next();});
```

The middlewares will be called for each incoming HTTP requests, including upgrade requests.

Example with [`express-session`](https://www.npmjs.com/package/express-session):

```
import session from "express-session";io.engine.use(session({  secret: "keyboard cat",  resave: false,  saveUninitialized: true,  cookie: { secure: true }}));
```

Example with [`helmet`](https://www.npmjs.com/package/helmet):

```
import helmet from "helmet";io.engine.use(helmet());
```

-   [Server](#server)
    -   [Constructor](#constructor)
        -   [new Server(httpServer, options)](#new-serverhttpserver-options)
        -   [new Server(port, options)](#new-serverport-options)
        -   [new Server(options)](#new-serveroptions)
    -   [Events](#events)
        -   [Event: 'connect'](#event-connect)
        -   [Event: 'connection'](#event-connection)
        -   [Event: 'new\_namespace'](#event-new_namespace)
    -   [Attributes](#attributes)
        -   [server.engine](#serverengine)
        -   [server.sockets](#serversockets)
    -   [Methods](#methods)
        -   [server.adapter(value)](#serveradaptervalue)
        -   [server.attach(httpServer, options)](#serverattachhttpserver-options)
        -   [server.attach(port, options)](#serverattachport-options)
        -   [server.attachApp(app, options)](#serverattachappapp-options)
        -   [server.bind(engine)](#serverbindengine)
        -   [server.close(callback)](#serverclosecallback)
        -   [server.disconnectSockets(close)](#serverdisconnectsocketsclose)
        -   [server.emit(eventName, ...args)](#serveremiteventname-args)
        -   [server.emitWithAck(eventName, ...args)](#serveremitwithackeventname-args)
        -   [server.except(rooms)](#serverexceptrooms)
        -   [server.fetchSockets()](#serverfetchsockets)
        -   [server.in(room)](#serverinroom)
        -   [server.listen(httpServer, options)](#serverlistenhttpserver-options)
        -   [server.listen(port, options)](#serverlistenport-options)
        -   [server.of(nsp)](#serverofnsp)
        -   [server.on(eventName, listener)](#serveroneventname-listener)
        -   [server.onconnection(socket)](#serveronconnectionsocket)
        -   [server.path(value)](#serverpathvalue)
        -   [server.serveClient(value)](#serverserveclientvalue)
        -   [server.serverSideEmit(eventName, ...args)](#serverserversideemiteventname-args)
        -   [server.serverSideEmitWithAck(eventName, ...args)](#serverserversideemitwithackeventname-args)
        -   [server.socketsJoin(rooms)](#serversocketsjoinrooms)
        -   [server.socketsLeave(rooms)](#serversocketsleaverooms)
        -   [server.timeout(value)](#servertimeoutvalue)
        -   [server.to(room)](#servertoroom)
        -   [server.use(fn)](#serverusefn)
-   [Namespace](#namespace)
    -   [Attributes](#attributes-1)
        -   [namespace.adapter](#namespaceadapter)
        -   [namespace.name](#namespacename)
        -   [namespace.sockets](#namespacesockets)
    -   [Events](#events-1)
        -   [Event: 'connect'](#event-connect-1)
        -   [Event: 'connection'](#event-connection-1)
    -   [Methods](#methods-1)
        -   [namespace.allSockets()](#namespaceallsockets)
        -   [namespace.disconnectSockets(close)](#namespacedisconnectsocketsclose)
        -   [namespace.emit(eventName, ...args)](#namespaceemiteventname-args)
        -   [namespace.emitWithAck(eventName, ...args)](#namespaceemitwithackeventname-args)
        -   [namespace.except(rooms)](#namespaceexceptrooms)
        -   [namespace.fetchSockets()](#namespacefetchsockets)
        -   [namespace.in(room)](#namespaceinroom)
        -   [namespace.serverSideEmit(eventName, ...args)](#namespaceserversideemiteventname-args)
        -   [namespace.serverSideEmitWithAck(eventName, ...args)](#namespaceserversideemitwithackeventname-args)
        -   [namespace.socketsJoin(rooms)](#namespacesocketsjoinrooms)
        -   [namespace.socketsLeave(rooms)](#namespacesocketsleaverooms)
        -   [namespace.timeout(value)](#namespacetimeoutvalue)
        -   [namespace.to(room)](#namespacetoroom)
        -   [namespace.use(fn)](#namespaceusefn)
    -   [Flags](#flags)
        -   [Flag: 'local'](#flag-local)
        -   [Flag: 'volatile'](#flag-volatile)
-   [Socket](#socket)
    -   [Events](#events-2)
        -   [Event: 'disconnect'](#event-disconnect)
        -   [Event: 'disconnecting'](#event-disconnecting)
    -   [Attributes](#attributes-2)
        -   [socket.client](#socketclient)
        -   [socket.conn](#socketconn)
        -   [socket.data](#socketdata)
        -   [socket.handshake](#sockethandshake)
        -   [socket.id](#socketid)
        -   [socket.recovered](#socketrecovered)
        -   [socket.request](#socketrequest)
        -   [socket.rooms](#socketrooms)
    -   [Methods](#methods-2)
        -   [socket.compress(value)](#socketcompressvalue)
        -   [socket.disconnect(close)](#socketdisconnectclose)
        -   [socket.emit(eventName, ...args)](#socketemiteventname-args)
        -   [socket.emitWithAck(eventName, ...args)](#socketemitwithackeventname-args)
        -   [socket.eventNames()](#socketeventnames)
        -   [socket.except(rooms)](#socketexceptrooms)
        -   [socket.in(room)](#socketinroom)
        -   [socket.join(room)](#socketjoinroom)
        -   [socket.leave(room)](#socketleaveroom)
        -   [socket.listenersAny()](#socketlistenersany)
        -   [socket.listenersAnyOutgoing()](#socketlistenersanyoutgoing)
        -   [socket.offAny(listener)](#socketoffanylistener)
        -   [socket.offAnyOutgoing(listener)](#socketoffanyoutgoinglistener)
        -   [socket.on(eventName, callback)](#socketoneventname-callback)
        -   [socket.onAny(callback)](#socketonanycallback)
        -   [socket.onAnyOutgoing(callback)](#socketonanyoutgoingcallback)
        -   [socket.once(eventName, listener)](#socketonceeventname-listener)
        -   [socket.prependAny(callback)](#socketprependanycallback)
        -   [socket.prependAnyOutgoing(callback)](#socketprependanyoutgoingcallback)
        -   [socket.removeAllListeners(eventName)](#socketremovealllistenerseventname)
        -   [socket.removeListener(eventName, listener)](#socketremovelistenereventname-listener)
        -   [socket.send(...args)](#socketsendargs)
        -   [socket.timeout(value)](#sockettimeoutvalue)
        -   [socket.to(room)](#sockettoroom)
        -   [socket.use(fn)](#socketusefn)
    -   [Flags](#flags-1)
        -   [Flag: 'broadcast'](#flag-broadcast)
        -   [Flag: 'volatile'](#flag-volatile-1)
-   [Client](#client)
    -   [Attributes](#attributes-3)
        -   [client.conn](#clientconn)
        -   [client.request](#clientrequest)
-   [Engine](#engine)
    -   [Events](#events-3)
        -   [Event: 'connection\_error'](#event-connection_error)
        -   [Event: 'headers'](#event-headers)
        -   [Event: 'initial\_headers'](#event-initial_headers)
    -   [Attributes](#attributes-4)
        -   [engine.clientsCount](#engineclientscount)
    -   [Methods](#methods-3)
        -   [engine.generateId](#enginegenerateid)
        -   [engine.handleUpgrade(request, socket, head)](#enginehandleupgraderequest-socket-head)
        -   [engine.use(middleware)](#engineusemiddleware)
