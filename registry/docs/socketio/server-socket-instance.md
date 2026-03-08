Version: 4.x

On this page

A `Socket` is the fundamental class for interacting with the client. It inherits all the methods of the Node.js [EventEmitter](https://nodejs.org/api/events.html#class-eventemitter), like [emit](/docs/v4/server-api/#socketemiteventname-args), [on](/docs/v4/server-api/#socketoneventname-callback), [once](/docs/v4/server-api/#socketonceeventname-listener) or [removeListener](/docs/v4/server-api/#socketremovelistenereventname-listener).

![Bidirectional communication between server and client](/images/bidirectional-communication-socket.png)![Bidirectional communication between server and client](/images/bidirectional-communication-socket-dark.png)  
  

Besides:

-   [emitting](/docs/v4/emitting-events/#basic-emit) and [listening to](/docs/v4/listening-to-events/) events
-   [broadcasting events](/docs/v4/broadcasting-events/#to-all-connected-clients-except-the-sender)
-   [joining and leaving rooms](/docs/v4/rooms/#joining-and-leaving)

The Socket instance has a few attributes that may be of use in your application:

## Socket#id[​](#socketid "Direct link to Socket#id")

Each new connection is assigned a random 20-characters identifier.

This identifier is synced with the value on the client-side.

```
// server-sideio.on("connection", (socket) => {  console.log(socket.id); // ojIckSD2jqNzOqIrAGzL});// client-sidesocket.on("connect", () => {  console.log(socket.id); // ojIckSD2jqNzOqIrAGzL});
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

Note: you can't overwrite this identifier, as it is used in several parts of the Socket.IO codebase.

## Socket#handshake[​](#sockethandshake "Direct link to Socket#handshake")

This object contains some details about the handshake that happens at the beginning of the Socket.IO session.

```
{  headers: /* the headers of the initial request */  query: /* the query params of the initial request */  auth: /* the authentication payload */  time: /* the date of creation (as string) */  issued: /* the date of creation (unix timestamp) */  url: /* the request URL string */  address: /* the ip of the client */  xdomain: /* whether the connection is cross-domain */  secure: /* whether the connection is secure */}
```

Example:

```
{  "headers": {    "user-agent": "xxxx",    "accept": "*/*",    "host": "example.com",    "connection": "close"  },  "query": {    "EIO": "4",    "transport": "polling",    "t": "NNjNltH"  },  "auth": {    "token": "123"  },  "time": "Sun Nov 22 2020 01:33:46 GMT+0100 (Central European Standard Time)",  "issued": 1606005226969,  "url": "/socket.io/?EIO=4&transport=polling&t=NNjNltH",  "address": "::ffff:1.2.3.4",  "xdomain": false,  "secure": true}
```

## Socket#rooms[​](#socketrooms "Direct link to Socket#rooms")

This is a reference to the [rooms](/docs/v4/rooms/) the Socket is currently in.

```
io.on("connection", (socket) => {  console.log(socket.rooms); // Set { <socket.id> }  socket.join("room1");  console.log(socket.rooms); // Set { <socket.id>, "room1" }});
```

## Socket#data[​](#socketdata "Direct link to Socket#data")

An arbitrary object that can be used in conjunction with the `fetchSockets()` utility method:

```
// server Aio.on("connection", (socket) => {  socket.data.username = "alice";});// server Bconst sockets = await io.fetchSockets();console.log(sockets[0].data.username); // "alice"
```

More information [here](/docs/v4/server-instance/#utility-methods).

## Socket#conn[​](#socketconn "Direct link to Socket#conn")

A reference to the underlying Engine.IO socket (see [here](/docs/v4/how-it-works/)).

```
io.on("connection", (socket) => {  console.log("initial transport", socket.conn.transport.name); // prints "polling"  socket.conn.once("upgrade", () => {    // called when the transport is upgraded (i.e. from HTTP long-polling to WebSocket)    console.log("upgraded transport", socket.conn.transport.name); // prints "websocket"  });  socket.conn.on("packet", ({ type, data }) => {    // called for each packet received  });  socket.conn.on("packetCreate", ({ type, data }) => {    // called for each packet sent  });  socket.conn.on("drain", () => {    // called when the write buffer is drained  });  socket.conn.on("close", (reason) => {    // called when the underlying connection is closed  });});
```

## Additional attributes[​](#additional-attributes "Direct link to Additional attributes")

As long as you do not overwrite any existing attribute, you can attach any attribute to the Socket instance and use it later:

```
// in a middlewareio.use(async (socket, next) => {  try {    const user = await fetchUser(socket);    socket.user = user;  } catch (e) {    next(new Error("unknown user"));  }});io.on("connection", (socket) => {  console.log(socket.user);  // in a listener  socket.on("set username", (username) => {    socket.username = username;  });});
```

## Socket middlewares[​](#socket-middlewares "Direct link to Socket middlewares")

Those middlewares look a lot like the usual [middlewares](/docs/v4/middlewares/), except that they are called for each incoming packet:

```
socket.use(([event, ...args], next) => {  // do something with the packet (logging, authorization, rate limiting...)  // do not forget to call next() at the end  next();});
```

The `next` method can also be called with an error object. In that case, the event will not reach the registered event handlers and an `error` event will be emitted instead:

```
io.on("connection", (socket) => {  socket.use(([event, ...args], next) => {    if (isUnauthorized(event)) {      return next(new Error("unauthorized event"));    }    next();  });  socket.on("error", (err) => {    if (err && err.message === "unauthorized event") {      socket.disconnect();    }  });});
```

Note: this feature only exists on the server-side. For the client-side, you might be interested in [catch-all listeners](/docs/v4/listening-to-events/#catch-all-listeners).

## Events[​](#events "Direct link to Events")

On the server-side, the Socket instance emits two special events:

-   [`disconnect`](#disconnect)
-   [`disconnecting`](#disconnecting)

### `disconnect`[​](#disconnect "Direct link to disconnect")

This event is fired by the Socket instance upon disconnection.

```
io.on("connection", (socket) => {  socket.on("disconnect", (reason) => {    // ...  });});
```

Here is the list of possible reasons:

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

### `disconnecting`[​](#disconnecting "Direct link to disconnecting")

This event is similar to `disconnect` but is fired a bit earlier, when the [Socket#rooms](/docs/v4/server-socket-instance/#socketrooms) set is not empty yet

```
io.on("connection", (socket) => {  socket.on("disconnecting", (reason) => {    for (const room of socket.rooms) {      if (room !== socket.id) {        socket.to(room).emit("user has left", socket.id);      }    }  });});
```

Note: those events, along with `connect`, `connect_error`, `newListener` and `removeListener`, are special events that shouldn't be used in your application:

```
// BAD, will throw an errorsocket.emit("disconnect");
```

## Complete API[​](#complete-api "Direct link to Complete API")

The complete API exposed by the Socket instance can be found [here](/docs/v4/server-api/#socket).

-   [Socket#id](#socketid)
-   [Socket#handshake](#sockethandshake)
-   [Socket#rooms](#socketrooms)
-   [Socket#data](#socketdata)
-   [Socket#conn](#socketconn)
-   [Additional attributes](#additional-attributes)
-   [Socket middlewares](#socket-middlewares)
-   [Events](#events)
    -   [`disconnect`](#disconnect)
    -   [`disconnecting`](#disconnecting)
-   [Complete API](#complete-api)
