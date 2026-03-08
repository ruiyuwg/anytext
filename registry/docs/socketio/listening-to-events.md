Version: 4.x

On this page

There are several ways to handle events that are transmitted between the server and the client.

## EventEmitter methods[​](#eventemitter-methods "Direct link to EventEmitter methods")

On the server-side, the Socket instance extends the Node.js [EventEmitter](https://nodejs.org/docs/latest/api/events.html#events_events) class.

On the client-side, the Socket instance uses the event emitter provided by the [component-emitter](https://github.com/component/emitter) library, which exposes a subset of the EventEmitter methods.

### socket.on(eventName, listener)[​](#socketoneventname-listener "Direct link to socket.on(eventName, listener)")

Adds the _listener_ function to the end of the listeners array for the event named _eventName_.

```
socket.on("details", (...args) => {  // ...});
```

### socket.once(eventName, listener)[​](#socketonceeventname-listener "Direct link to socket.once(eventName, listener)")

Adds a **one-time** _listener_ function for the event named _eventName_

```
socket.once("details", (...args) => {  // ...});
```

### socket.off(eventName, listener)[​](#socketoffeventname-listener "Direct link to socket.off(eventName, listener)")

Removes the specified _listener_ from the listener array for the event named _eventName_.

```
const listener = (...args) => {  console.log(args);}socket.on("details", listener);// and then later...socket.off("details", listener);
```

### socket.removeAllListeners(\[eventName\])[​](#socketremovealllistenerseventname "Direct link to socketremovealllistenerseventname")

Removes all listeners, or those of the specified _eventName_.

```
// for a specific eventsocket.removeAllListeners("details");// for all eventssocket.removeAllListeners();
```

## Catch-all listeners[​](#catch-all-listeners "Direct link to Catch-all listeners")

Since Socket.IO v3, a new API inspired from the [EventEmitter2](https://github.com/EventEmitter2/EventEmitter2) library allows to declare catch-all listeners.

This feature is available on both the client and the server.

### socket.onAny(listener)[​](#socketonanylistener "Direct link to socket.onAny(listener)")

Adds a listener that will be fired when any event is emitted.

```
socket.onAny((eventName, ...args) => {  // ...});
```

caution

[Acknowledgements](/docs/v4/emitting-events/#acknowledgements) are not caught in the catch-all listener.

```
socket.emit("foo", (value) => {  // ...});socket.onAnyOutgoing(() => {  // triggered when the event is sent});socket.onAny(() => {  // not triggered when the acknowledgement is received});
```

### socket.prependAny(listener)[​](#socketprependanylistener "Direct link to socket.prependAny(listener)")

Adds a listener that will be fired when any event is emitted. The listener is added to the beginning of the listeners array.

```
socket.prependAny((eventName, ...args) => {  // ...});
```

### socket.offAny(\[listener\])[​](#socketoffanylistener "Direct link to socketoffanylistener")

Removes all catch-all listeners, or the given listener.

```
const listener = (eventName, ...args) => {  console.log(eventName, args);}socket.onAny(listener);// and then later...socket.offAny(listener);// or all listenerssocket.offAny();
```

### socket.onAnyOutgoing(listener)[​](#socketonanyoutgoinglistener "Direct link to socket.onAnyOutgoing(listener)")

Register a new catch-all listener for outgoing packets.

```
socket.onAnyOutgoing((event, ...args) => {  // ...});
```

caution

[Acknowledgements](/docs/v4/emitting-events/#acknowledgements) are not caught in the catch-all listener.

```
socket.on("foo", (value, callback) => {  callback("OK");});socket.onAny(() => {  // triggered when the event is received});socket.onAnyOutgoing(() => {  // not triggered when the acknowledgement is sent});
```

### socket.prependAnyOutgoing(listener)[​](#socketprependanyoutgoinglistener "Direct link to socket.prependAnyOutgoing(listener)")

Register a new catch-all listener for outgoing packets. The listener is added to the beginning of the listeners array.

```
socket.prependAnyOutgoing((event, ...args) => {  // ...});
```

### socket.offAnyOutgoing(\[listener\])[​](#socketoffanyoutgoinglistener "Direct link to socketoffanyoutgoinglistener")

Removes the previously registered listener. If no listener is provided, all catch-all listeners are removed.

```
const listener = (eventName, ...args) => {  console.log(eventName, args);}socket.onAnyOutgoing(listener);// remove a single listenersocket.offAnyOutgoing(listener);// remove all listenerssocket.offAnyOutgoing();
```

## Validation[​](#validation "Direct link to Validation")

The validation of the event arguments is out of the scope of the Socket.IO library.

There are many packages in the JS ecosystem which cover this use case, among them:

-   [zod](https://zod.dev/)
-   [joi](https://www.npmjs.com/package/joi)
-   [ajv](https://www.npmjs.com/package/ajv)
-   [validatorjs](https://www.npmjs.com/package/validatorjs)

Example with [joi](https://joi.dev/api/) and [acknowledgements](/docs/v4/emitting-events/#acknowledgements):

```
const Joi = require("joi");const userSchema = Joi.object({  username: Joi.string().max(30).required(),  email: Joi.string().email().required()});io.on("connection", (socket) => {  socket.on("create user", (payload, callback) => {    if (typeof callback !== "function") {      // not an acknowledgement      return socket.disconnect();    }    const { error, value } = userSchema.validate(payload);    if (error) {      return callback({        status: "Bad Request",        error      });    }    // do something with the value, and then    callback({      status: "OK"    });  });});
```

## Error handling[​](#error-handling "Direct link to Error handling")

There is currently no built-in error handling in the Socket.IO library, which means you must catch any error that could be thrown in a listener.

```
io.on("connection", (socket) => {  socket.on("list items", async (callback) => {    try {      const items = await findItems();      callback({        status: "OK",        items      });    } catch (e) {      callback({        status: "NOK"      });    }  });});
```

This can be refactored into:

```
const errorHandler = (handler) => {  const handleError = (err) => {    console.error("please handle me", err);  };  return (...args) => {    try {      const ret = handler.apply(this, args);      if (ret && typeof ret.catch === "function") {        // async handler        ret.catch(handleError);      }    } catch (e) {      // sync handler      handleError(e);    }  };};// server or client sidesocket.on("hello", errorHandler(() => {  throw new Error("let's panic");}));
```

-   [EventEmitter methods](#eventemitter-methods)
    -   [socket.on(eventName, listener)](#socketoneventname-listener)
    -   [socket.once(eventName, listener)](#socketonceeventname-listener)
    -   [socket.off(eventName, listener)](#socketoffeventname-listener)
    -   [socket.removeAllListeners(eventName)](#socketremovealllistenerseventname)
-   [Catch-all listeners](#catch-all-listeners)
    -   [socket.onAny(listener)](#socketonanylistener)
    -   [socket.prependAny(listener)](#socketprependanylistener)
    -   [socket.offAny(listener)](#socketoffanylistener)
    -   [socket.onAnyOutgoing(listener)](#socketonanyoutgoinglistener)
    -   [socket.prependAnyOutgoing(listener)](#socketprependanyoutgoinglistener)
    -   [socket.offAnyOutgoing(listener)](#socketoffanyoutgoinglistener)
-   [Validation](#validation)
-   [Error handling](#error-handling)
