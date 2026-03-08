Version: 4.x

On this page

A `Socket` is the fundamental class for interacting with the server. It inherits most of the methods of the Node.js [EventEmitter](https://nodejs.org/api/events.html#class-eventemitter), like [emit](/docs/v4/client-api/#socketemiteventname-args), [on](/docs/v4/client-api/#socketoneventname-callback), [once](/docs/v4/client-api/#socketonceeventname-callback) or [off](/docs/v4/client-api/#socketoffeventname).

![Bidirectional communication between server and client](/images/bidirectional-communication-socket.png)![Bidirectional communication between server and client](/images/bidirectional-communication-socket-dark.png)  
  

Besides [emitting](/docs/v4/emitting-events/) and [listening to](/docs/v4/listening-to-events/) events, the Socket instance has a few attributes that may be of use in your application:

## Socket#id[​](#socketid "Direct link to Socket#id")

Each new connection is assigned a random 20-characters identifier.

This identifier is synced with the value on the server-side.

```
// server-sideio.on("connection", (socket) => {  console.log(socket.id); // x8WIv7-mJelg7on_ALbx});// client-sidesocket.on("connect", () => {  console.log(socket.id); // x8WIv7-mJelg7on_ALbx});socket.on("disconnect", () => {  console.log(socket.id); // undefined});
```

caution

Please note that, unless [connection state recovery](/docs/v4/connection-state-recovery) is enabled, the `id` attribute is an **ephemeral** ID that is not meant to be used in your application (or only for debugging purposes) because:

-   this ID is regenerated after each reconnection (for example when the WebSocket connection is severed, or when the user refreshes the page)
-   two different browser tabs will have two different IDs
-   there is no message queue stored for a given ID on the server (i.e. if the client is disconnected, the messages sent from the server to this ID are lost)

Please use a regular session ID instead (either sent in a cookie, or stored in the localStorage and sent in the [`auth`](/docs/v4/client-options/#auth) payload).

See also:

-   [Part II of our private message guide](/get-started/private-messaging-part-2/)
-   [How to deal with cookies](/how-to/deal-with-cookies)

## Socket#connected[​](#socketconnected "Direct link to Socket#connected")

This attribute describes whether the socket is currently connected to the server.

```
socket.on("connect", () => {  console.log(socket.connected); // true});socket.on("disconnect", () => {  console.log(socket.connected); // false});
```

## Socket#io[​](#socketio "Direct link to Socket#io")

A reference to the underlying [Manager](/docs/v4/client-api/#manager).

```
socket.on("connect", () => {  const engine = socket.io.engine;  console.log(engine.transport.name); // in most cases, prints "polling"  engine.once("upgrade", () => {    // called when the transport is upgraded (i.e. from HTTP long-polling to WebSocket)    console.log(engine.transport.name); // in most cases, prints "websocket"  });  engine.on("packet", ({ type, data }) => {    // called for each packet received  });  engine.on("packetCreate", ({ type, data }) => {    // called for each packet sent  });  engine.on("drain", () => {    // called when the write buffer is drained  });  engine.on("close", (reason) => {    // called when the underlying connection is closed  });});
```

## Lifecycle[​](#lifecycle "Direct link to Lifecycle")

![Lifecycle diagram](/images/client_socket_events.png)![Lifecycle diagram](/images/client_socket_events-dark.png)

## Events[​](#events "Direct link to Events")

The Socket instance emits three special events:

-   [`connect`](#connect)
-   [`connect_error`](#connect_error)
-   [`disconnect`](#disconnect)

tip

Since Socket.IO v3, the Socket instance does not emit any event related to the reconnection logic anymore. You can listen to the events on the Manager instance directly:

```
socket.io.on("reconnect_attempt", () => {  // ...});socket.io.on("reconnect", () => {  // ...});
```

More information can be found in the [migration guide](/docs/v4/migrating-from-2-x-to-3-0/#the-socket-instance-will-no-longer-forward-the-events-emitted-by-its-manager).

### `connect`[​](#connect "Direct link to connect")

This event is fired by the Socket instance upon connection **and** reconnection.

```
socket.on("connect", () => {  // ...});
```

caution

Event handlers shouldn't be registered in the `connect` handler itself, as a new handler will be registered every time the socket instance reconnects:

BAD ⚠️

```
socket.on("connect", () => {  socket.on("data", () => { /* ... */ });});
```

GOOD 👍

```
socket.on("connect", () => {  // ...});socket.on("data", () => { /* ... */ });
```

### `connect_error`[​](#connect_error "Direct link to connect_error")

-   `error` [`<Error>`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Error)

This event is fired upon connection failure.

Reason

Automatic reconnection?

The low-level connection cannot be established (temporary failure)

✅ YES

The connection was denied by the server in a [middleware function](/docs/v4/middlewares/)

❌ NO

The [`socket.active`](/docs/v4/client-api/#socketactive) attribute indicates whether the socket will automatically try to reconnect after a small [randomized delay](/docs/v4/client-options/#reconnectiondelay):

```
socket.on("connect_error", (error) => {  if (socket.active) {    // temporary failure, the socket will automatically try to reconnect  } else {    // the connection was denied by the server    // in that case, `socket.connect()` must be manually called in order to reconnect    console.log(error.message);  }});
```

### `disconnect`[​](#disconnect "Direct link to disconnect")

-   `reason` [`<string>`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#string_type)
-   `details` `<DisconnectDetails>`

This event is fired upon disconnection.

```
socket.on("disconnect", (reason, details) => {  // ...});
```

Here is the list of possible reasons:

Reason

Description

Automatic reconnection?

`io server disconnect`

The server has forcefully disconnected the socket with [socket.disconnect()](/docs/v4/server-api/#socketdisconnectclose)

❌ NO

`io client disconnect`

The socket was manually disconnected using [socket.disconnect()](/docs/v4/client-api/#socketdisconnect)

❌ NO

`ping timeout`

The server did not send a PING within the `pingInterval + pingTimeout` range

✅ YES

`transport close`

The connection was closed (example: the user has lost connection, or the network was changed from WiFi to 4G)

✅ YES

`transport error`

The connection has encountered an error (example: the server was killed during a HTTP long-polling cycle)

✅ YES

The [`socket.active`](/docs/v4/client-api/#socketactive) attribute indicates whether the socket will automatically try to reconnect after a small [randomized delay](/docs/v4/client-options/#reconnectiondelay):

```
socket.on("disconnect", (reason) => {  if (socket.active) {    // temporary disconnection, the socket will automatically try to reconnect  } else {    // the connection was forcefully closed by the server or the client itself    // in that case, `socket.connect()` must be manually called in order to reconnect    console.log(reason);  }});
```

caution

The following event names are reserved and must not be used in your application:

-   `connect`
-   `connect_error`
-   `disconnect`
-   `disconnecting`
-   `newListener`
-   `removeListener`

```
// BAD, will throw an errorsocket.emit("disconnect");
```

## Complete API[​](#complete-api "Direct link to Complete API")

The complete API exposed by the Socket instance can be found [here](/docs/v4/client-api/#socket).

-   [Socket#id](#socketid)
-   [Socket#connected](#socketconnected)
-   [Socket#io](#socketio)
-   [Lifecycle](#lifecycle)
-   [Events](#events)
    -   [`connect`](#connect)
    -   [`connect_error`](#connect_error)
    -   [`disconnect`](#disconnect)
-   [Complete API](#complete-api)
