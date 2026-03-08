Version: 4.x

On this page

caution

The following event names are reserved and must not be used in your application:

-   `connect`
-   `connect_error`
-   `disconnect`
-   `disconnecting`
-   `newListener`
-   `removeListener`

```
// BAD, will throw an errorsocket.emit("disconnecting");
```

## Server[​](#server "Direct link to Server")

### Single client[​](#single-client "Direct link to Single client")

#### Basic emit[​](#basic-emit "Direct link to Basic emit")

```
io.on("connection", (socket) => {  socket.emit("hello", 1, "2", { 3: "4", 5: Buffer.from([6]) });});
```

#### Acknowledgement[​](#acknowledgement "Direct link to Acknowledgement")

-   Callback
-   Promise

```
io.on("connection", (socket) => {  socket.emit("hello", "world", (arg1, arg2, arg3) => {    // ...  });});
```

```
io.on("connection", async (socket) => {  const response = await socket.emitWithAck("hello", "world");});
```

#### Acknowledgement and timeout[​](#acknowledgement-and-timeout "Direct link to Acknowledgement and timeout")

-   Callback
-   Promise

```
io.on("connection", (socket) => {  socket.timeout(5000).emit("hello", "world", (err, arg1, arg2, arg3) => {    if (err) {      // the client did not acknowledge the event in the given delay    } else {      // ...    }  });});
```

```
io.on("connection", async (socket) => {  try {    const response = await socket.timeout(5000).emitWithAck("hello", "world");  } catch (e) {    // the client did not acknowledge the event in the given delay  }});
```

### Broadcasting[​](#broadcasting "Direct link to Broadcasting")

#### To all connected clients[​](#to-all-connected-clients "Direct link to To all connected clients")

```
io.emit("hello");
```

#### Except the sender[​](#except-the-sender "Direct link to Except the sender")

```
io.on("connection", (socket) => {  socket.broadcast.emit("hello");});
```

#### Acknowledgements[​](#acknowledgements "Direct link to Acknowledgements")

-   Callback
-   Promise

```
io.timeout(5000).emit("hello", "world", (err, responses) => {  if (err) {    // some clients did not acknowledge the event in the given delay  } else {    console.log(responses); // one response per client  }});
```

```
try {  const responses = await io.timeout(5000).emitWithAck("hello", "world");  console.log(responses); // one response per client} catch (e) {  // some clients did not acknowledge the event in the given delay}
```

#### In a room[​](#in-a-room "Direct link to In a room")

-   to all connected clients in the room named "my room"

```
io.to("my room").emit("hello");
```

-   to all connected clients except the ones in the room named "my room"

```
io.except("my room").emit("hello");
```

-   with multiple clauses

```
io.to("room1").to(["room2", "room3"]).except("room4").emit("hello");
```

#### In a namespace[​](#in-a-namespace "Direct link to In a namespace")

```
io.of("/my-namespace").emit("hello");
```

tip

The modifiers can absolutely be chained:

```
io.of("/my-namespace").on("connection", (socket) => {  socket    .timeout(5000)    .to("room1")    .to(["room2", "room3"])    .except("room4")    .emit("hello", (err, responses) => {      // ...    });});
```

This will emit a "hello" event to all connected clients:

-   in the namespace named `my-namespace`
-   in at least one of the rooms named `room1`, `room2` and `room3`, but not in `room4`
-   except the sender

And expect an acknowledgement in the next 5 seconds.

### Between servers[​](#between-servers "Direct link to Between servers")

#### Basic emit[​](#basic-emit-1 "Direct link to Basic emit")

```
io.serverSideEmit("hello", "world");
```

Receiving side:

```
io.on("hello", (value) => {  console.log(value); // "world"});
```

#### Acknowledgements[​](#acknowledgements-1 "Direct link to Acknowledgements")

-   Callback
-   Promise

```
io.serverSideEmit("hello", "world", (err, responses) => {  if (err) {    // some servers did not acknowledge the event in the given delay  } else {    console.log(responses); // one response per server (except the current one)  }});
```

```
try {  const responses = await io.serverSideEmitWithAck("hello", "world");  console.log(responses); // one response per server (except the current one)} catch (e) {  // some servers did not acknowledge the event in the given delay}
```

Receiving side:

```
io.on("hello", (value, callback) => {  console.log(value); // "world"  callback("hi");});
```

## Client[​](#client "Direct link to Client")

### Basic emit[​](#basic-emit-2 "Direct link to Basic emit")

```
socket.emit("hello", 1, "2", { 3: "4", 5: Uint8Array.from([6]) });
```

### Acknowledgement[​](#acknowledgement-1 "Direct link to Acknowledgement")

-   Callback
-   Promise

```
socket.emit("hello", "world", (arg1, arg2, arg3) => {  // ...});
```

```
const response = await socket.emitWithAck("hello", "world");
```

### Acknowledgement and timeout[​](#acknowledgement-and-timeout-1 "Direct link to Acknowledgement and timeout")

-   Callback
-   Promise

```
socket.timeout(5000).emit("hello", "world", (err, arg1, arg2, arg3) => {  if (err) {    // the server did not acknowledge the event in the given delay  } else {    // ...  }});
```

```
try {  const response = await socket.timeout(5000).emitWithAck("hello", "world");} catch (e) {  // the server did not acknowledge the event in the given delay}
```

-   [Server](#server)
    -   [Single client](#single-client)
        -   [Basic emit](#basic-emit)
        -   [Acknowledgement](#acknowledgement)
        -   [Acknowledgement and timeout](#acknowledgement-and-timeout)
    -   [Broadcasting](#broadcasting)
        -   [To all connected clients](#to-all-connected-clients)
        -   [Except the sender](#except-the-sender)
        -   [Acknowledgements](#acknowledgements)
        -   [In a room](#in-a-room)
        -   [In a namespace](#in-a-namespace)
    -   [Between servers](#between-servers)
        -   [Basic emit](#basic-emit-1)
        -   [Acknowledgements](#acknowledgements-1)
-   [Client](#client)
    -   [Basic emit](#basic-emit-2)
    -   [Acknowledgement](#acknowledgement-1)
    -   [Acknowledgement and timeout](#acknowledgement-and-timeout-1)
