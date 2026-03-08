Version: 4.x

On this page

# Overview of the API

Before we go any further, let's take a quick tour of the API provided by Socket.IO:

## Common API[​](#common-api "Direct link to Common API")

The following methods are available for both the client and the server.

### Basic emit[​](#basic-emit "Direct link to Basic emit")

As we have seen in [step #4](/docs/v4/tutorial/step-4), you can send any data to the other side with `socket.emit()`:

-   From client to server
-   From server to client

_Client_

```
socket.emit('hello', 'world');
```

_Server_

```
io.on('connection', (socket) => {  socket.on('hello', (arg) => {    console.log(arg); // 'world'  });});
```

_Server_

```
io.on('connection', (socket) => {  socket.emit('hello', 'world');});
```

_Client_

```
socket.on('hello', (arg) => {  console.log(arg); // 'world'});
```

You can send any number of arguments, and all serializable data structures are supported, including binary objects like [ArrayBuffer](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/ArrayBuffer), [TypedArray](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/TypedArray) or [Buffer](https://nodejs.org/docs/latest/api/buffer.html#buffer_buffer) (Node.js only):

-   From client to server
-   From server to client

_Client_

```
socket.emit('hello', 1, '2', { 3: '4', 5: Uint8Array.from([6]) });
```

_Server_

```
io.on('connection', (socket) => {  socket.on('hello', (arg1, arg2, arg3) => {    console.log(arg1); // 1    console.log(arg2); // '2'    console.log(arg3); // { 3: '4', 5: <Buffer 06> }  });});
```

_Server_

```
io.on('connection', (socket) => {  socket.emit('hello', 1, '2', { 3: '4', 5: Buffer.from([6]) });});
```

_Client_

```
socket.on('hello', (arg1, arg2, arg3) => {  console.log(arg1); // 1  console.log(arg2); // '2'  console.log(arg3); // { 3: '4', 5: ArrayBuffer (1) [ 6 ] }});
```

tip

Calling `JSON.stringify()` on objects is not needed:

```
// BADsocket.emit('hello', JSON.stringify({ name: 'John' }));// GOODsocket.emit('hello', { name: 'John' });
```

### Acknowledgements[​](#acknowledgements "Direct link to Acknowledgements")

Events are great, but in some cases you may want a more classic request-response API. In Socket.IO, this feature is named "acknowledgements".

It comes in two flavors:

#### With a callback function[​](#with-a-callback-function "Direct link to With a callback function")

You can add a callback as the last argument of the `emit()`, and this callback will be called once the other side has acknowledged the event:

-   From client to server
-   From server to client

_Client_

```
socket.timeout(5000).emit('request', { foo: 'bar' }, 'baz', (err, response) => {  if (err) {    // the server did not acknowledge the event in the given delay  } else {    console.log(response.status); // 'ok'  }});
```

_Server_

```
io.on('connection', (socket) => {  socket.on('request', (arg1, arg2, callback) => {    console.log(arg1); // { foo: 'bar' }    console.log(arg2); // 'baz'    callback({      status: 'ok'    });  });});
```

_Server_

```
io.on('connection', (socket) => {  socket.timeout(5000).emit('request', { foo: 'bar' }, 'baz', (err, response) => {    if (err) {      // the client did not acknowledge the event in the given delay    } else {      console.log(response.status); // 'ok'    }  });});
```

_Client_

```
socket.on('request', (arg1, arg2, callback) => {  console.log(arg1); // { foo: 'bar' }  console.log(arg2); // 'baz'  callback({    status: 'ok'  });});
```

#### With a Promise[​](#with-a-promise "Direct link to With a Promise")

The `emitWithAck()` method provides the same functionality, but returns a Promise which will resolve once the other side acknowledges the event:

-   From client to server
-   From server to client

_Client_

```
try {  const response = await socket.timeout(5000).emitWithAck('request', { foo: 'bar' }, 'baz');  console.log(response.status); // 'ok'} catch (e) {  // the server did not acknowledge the event in the given delay}
```

_Server_

```
io.on('connection', (socket) => {  socket.on('request', (arg1, arg2, callback) => {    console.log(arg1); // { foo: 'bar' }    console.log(arg2); // 'baz'    callback({      status: 'ok'    });  });});
```

_Server_

```
io.on('connection', async (socket) => {  try {    const response = await socket.timeout(5000).emitWithAck('request', { foo: 'bar' }, 'baz');    console.log(response.status); // 'ok'  } catch (e) {    // the client did not acknowledge the event in the given delay  }});
```

_Client_

```
socket.on('request', (arg1, arg2, callback) => {  console.log(arg1); // { foo: 'bar' }  console.log(arg2); // 'baz'  callback({    status: 'ok'  });});
```

caution

Environments that [do not support Promises](https://caniuse.com/promises) (such as Internet Explorer) will need to add a polyfill or use a compiler like [babel](https://babeljs.io/) in order to use this feature (but this is out of the scope of this tutorial).

### Catch-all listeners[​](#catch-all-listeners "Direct link to Catch-all listeners")

A catch-all listeners is a listener that will be called for any incoming event. This is useful for debugging your application:

_Sender_

```
socket.emit('hello', 1, '2', { 3: '4', 5: Uint8Array.from([6]) });
```

_Receiver_

```
socket.onAny((eventName, ...args) => {  console.log(eventName); // 'hello'  console.log(args); // [ 1, '2', { 3: '4', 5: ArrayBuffer (1) [ 6 ] } ]});
```

Similarly, for outgoing packets:

```
socket.onAnyOutgoing((eventName, ...args) => {  console.log(eventName); // 'hello'  console.log(args); // [ 1, '2', { 3: '4', 5: ArrayBuffer (1) [ 6 ] } ]});
```

## Server API[​](#server-api "Direct link to Server API")

### Broadcasting[​](#broadcasting "Direct link to Broadcasting")

As we have seen in [step #5](/docs/v4/tutorial/step-5), you can broadcast an event to all connected clients with `io.emit()`:

```
io.emit('hello', 'world');
```

![The 'hello' event is sent to all connected clients](/images/tutorial/broadcasting.png)![The 'hello' event is sent to all connected clients](/images/tutorial/broadcasting-dark.png)

### Rooms[​](#rooms "Direct link to Rooms")

In Socket.IO jargon, a _room_ is an arbitrary channel that sockets can join and leave. It can be used to broadcast events to a subset of connected clients:

```
io.on('connection', (socket) => {  // join the room named 'some room'  socket.join('some room');    // broadcast to all connected clients in the room  io.to('some room').emit('hello', 'world');  // broadcast to all connected clients except those in the room  io.except('some room').emit('hello', 'world');  // leave the room  socket.leave('some room');});
```

![The 'hello' event is sent to all connected clients in the targeted room](/images/tutorial/room.png)![The 'hello' event is sent to all connected clients in the targeted room](/images/tutorial/room-dark.png)

That's basically it! For future reference, the whole API can be found [here](/docs/v4/server-api/) (server) and [here](/docs/v4/client-api/) (client).

-   [Common API](#common-api)
    -   [Basic emit](#basic-emit)
    -   [Acknowledgements](#acknowledgements)
        -   [With a callback function](#with-a-callback-function)
        -   [With a Promise](#with-a-promise)
    -   [Catch-all listeners](#catch-all-listeners)
-   [Server API](#server-api)
    -   [Broadcasting](#broadcasting)
    -   [Rooms](#rooms)
