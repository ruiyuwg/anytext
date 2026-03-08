Version: 4.x

On this page

## Buffered events[​](#buffered-events "Direct link to Buffered events")

By default, any event emitted while the Socket is not connected will be buffered until reconnection.

While useful in most cases (when the reconnection delay is short), it could result in a huge spike of events when the connection is restored.

There are several solutions to prevent this behavior, depending on your use case:

-   use the [connected](/docs/v4/client-socket-instance/#socketconnected) attribute of the Socket instance

```
if (socket.connected) {  socket.emit( /* ... */ );} else {  // ...}
```

-   use [volatile events](/docs/v4/emitting-events/#volatile-events)

```
socket.volatile.emit( /* ... */ );
```

-   [Buffered events](#buffered-events)
