Version: 4.x

On this page

The Server instance (often called `io` in the code examples) has a few attributes that may be of use in your application.

It also inherits all the methods of the [main namespace](/docs/v4/namespaces/#main-namespace), like [`namespace.use()`](/docs/v4/server-api/#namespaceusefn) (see [here](/docs/v4/middlewares/)) or [`namespace.allSockets()`](/docs/v4/server-api/#namespaceallsockets).

## Server#engine[​](#serverengine "Direct link to Server#engine")

A reference to the underlying Engine.IO server.

It can be used to fetch the number of currently connected clients:

```
const count = io.engine.clientsCount;// may or may not be similar to the count of Socket instances in the main namespace, depending on your usageconst count2 = io.of("/").sockets.size;
```

Or to generate a custom session ID (the `sid` query parameter):

```
const uuid = require("uuid");io.engine.generateId = (req) => {  return uuid.v4(); // must be unique across all Socket.IO servers}
```

As of `socket.io@4.1.0`, the Engine.IO server emits three special events:

-   `initial_headers`: will be emitted just before writing the response headers of the first HTTP request of the session (the handshake), allowing you to customize them.

```
io.engine.on("initial_headers", (headers, req) => {  headers["test"] = "123";  headers["set-cookie"] = "mycookie=456";});
```

-   `headers`: will be emitted just before writing the response headers of each HTTP request of the session (including the WebSocket upgrade), allowing you to customize them.

```
io.engine.on("headers", (headers, req) => {  headers["test"] = "789";});
```

-   `connection_error`: will be emitted when a connection is abnormally closed

```
io.engine.on("connection_error", (err) => {  console.log(err.req);      // the request object  console.log(err.code);     // the error code, for example 1  console.log(err.message);  // the error message, for example "Session ID unknown"  console.log(err.context);  // some additional error context});
```

Here is the list of possible error codes:

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

## Utility methods[​](#utility-methods "Direct link to Utility methods")

Some utility methods were added in Socket.IO v4.0.0 to manage the Socket instances and their rooms:

-   [`socketsJoin`](#socketsjoin): makes the matching socket instances join the specified rooms
-   [`socketsLeave`](#socketsleave): makes the matching socket instances leave the specified rooms
-   [`disconnectSockets`](#disconnectsockets): makes the matching socket instances disconnect
-   [`fetchSockets`](#fetchsockets): returns the matching socket instances

The [`serverSideEmit`](#serversideemit) method was added in Socket.IO v4.1.0.

Those methods share the same semantics as broadcasting, and the same filters apply:

```
io.of("/admin").in("room1").except("room2").local.disconnectSockets();
```

Which makes all Socket instances of the "admin" namespace

-   in the "room1" room (`in("room1")` or `to("room1")`)
-   except the ones in "room2" (`except("room2")`)
-   and only on the current Socket.IO server (`local`)

disconnect.

Please note that they are also compatible with the Redis adapter (starting with `socket.io-redis@6.1.0`), which means that they will work across Socket.IO servers.

### `socketsJoin`[​](#socketsjoin "Direct link to socketsjoin")

This method makes the matching Socket instances join the specified rooms:

```
// make all Socket instances join the "room1" roomio.socketsJoin("room1");// make all Socket instances in the "room1" room join the "room2" and "room3" roomsio.in("room1").socketsJoin(["room2", "room3"]);// make all Socket instances in the "room1" room of the "admin" namespace join the "room2" roomio.of("/admin").in("room1").socketsJoin("room2");// this also works with a single socket IDio.in(theSocketId).socketsJoin("room1");
```

### `socketsLeave`[​](#socketsleave "Direct link to socketsleave")

This method makes the matching Socket instances leave the specified rooms:

```
// make all Socket instances leave the "room1" roomio.socketsLeave("room1");// make all Socket instances in the "room1" room leave the "room2" and "room3" roomsio.in("room1").socketsLeave(["room2", "room3"]);// make all Socket instances in the "room1" room of the "admin" namespace leave the "room2" roomio.of("/admin").in("room1").socketsLeave("room2");// this also works with a single socket IDio.in(theSocketId).socketsLeave("room1");
```

### `disconnectSockets`[​](#disconnectsockets "Direct link to disconnectsockets")

This method makes the matching Socket instances disconnect:

```
// make all Socket instances disconnectio.disconnectSockets();// make all Socket instances in the "room1" room disconnect (and discard the low-level connection)io.in("room1").disconnectSockets(true);// make all Socket instances in the "room1" room of the "admin" namespace disconnectio.of("/admin").in("room1").disconnectSockets();// this also works with a single socket IDio.of("/admin").in(theSocketId).disconnectSockets();
```

### `fetchSockets`[​](#fetchsockets "Direct link to fetchsockets")

This method returns the matching Socket instances:

```
// return all Socket instances of the main namespaceconst sockets = await io.fetchSockets();// return all Socket instances in the "room1" room of the main namespaceconst sockets = await io.in("room1").fetchSockets();// return all Socket instances in the "room1" room of the "admin" namespaceconst sockets = await io.of("/admin").in("room1").fetchSockets();// this also works with a single socket IDconst sockets = await io.in(theSocketId).fetchSockets();
```

The `sockets` variable in the example above is an array of objects exposing a subset of the usual Socket class:

```
for (const socket of sockets) {  console.log(socket.id);  console.log(socket.handshake);  console.log(socket.rooms);  console.log(socket.data);  socket.emit(/* ... */);  socket.join(/* ... */);  socket.leave(/* ... */);  socket.disconnect(/* ... */);}
```

The `data` attribute is an arbitrary object that can be used to share information between Socket.IO servers:

```
// server Aio.on("connection", (socket) => {  socket.data.username = "alice";});// server Bconst sockets = await io.fetchSockets();console.log(sockets[0].data.username); // "alice"
```

### `serverSideEmit`[​](#serversideemit "Direct link to serversideemit")

This method allows to emit events to the other Socket.IO servers of the cluster, in a [multi-server setup](/docs/v4/using-multiple-nodes/).

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

## Events[​](#events "Direct link to Events")

The Server instance emits one single event (well, technically two, but `connect` is an alias for `connection`):

-   [`connection`](#connection)

### `connection`[​](#connection "Direct link to connection")

This event is fired upon a new connection. The first argument is a [Socket instance](/docs/v4/server-socket-instance/).

```
io.on("connection", (socket) => {  // ...});
```

## Complete API[​](#complete-api "Direct link to Complete API")

The complete API exposed by the Server instance can be found [here](/docs/v4/server-api/#server).

-   [Server#engine](#serverengine)
-   [Utility methods](#utility-methods)
    -   [`socketsJoin`](#socketsjoin)
    -   [`socketsLeave`](#socketsleave)
    -   [`disconnectSockets`](#disconnectsockets)
    -   [`fetchSockets`](#fetchsockets)
    -   [`serverSideEmit`](#serversideemit)
-   [Events](#events)
    -   [`connection`](#connection)
-   [Complete API](#complete-api)
