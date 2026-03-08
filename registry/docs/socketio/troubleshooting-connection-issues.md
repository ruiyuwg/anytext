Version: 4.x

On this page

tip

The [Admin UI](/docs/v4/admin-ui/) can give you additional insights about the status of your Socket.IO deployment.

Common/known issues:

-   [the socket is not able to connect](#problem-the-socket-is-not-able-to-connect)
-   [the socket gets disconnected](#problem-the-socket-gets-disconnected)
-   [the socket is stuck in HTTP long-polling](#problem-the-socket-is-stuck-in-http-long-polling)

Other common gotchas:

-   [Duplicate event registration](#duplicate-event-registration)
-   [Delayed event handler registration](#delayed-event-handler-registration)
-   [Usage of the `socket.id` attribute](#usage-of-the-socketid-attribute)
-   [Deployment on a serverless platform](#deployment-on-a-serverless-platform)

## Problem: the socket is not able to connect[​](#problem-the-socket-is-not-able-to-connect "Direct link to Problem: the socket is not able to connect")

### Troubleshooting steps[​](#troubleshooting-steps "Direct link to Troubleshooting steps")

On the client side, the `connect_error` event provides additional information:

```
socket.on("connect_error", (err) => {  // the reason of the error, for example "xhr poll error"  console.log(err.message);  // some additional description, for example the status code of the initial HTTP response  console.log(err.description);  // some additional context, for example the XMLHttpRequest object  console.log(err.context);});
```

On the server side, the `connection_error` event may also provide some additional insights:

```
io.engine.on("connection_error", (err) => {  console.log(err.req);      // the request object  console.log(err.code);     // the error code, for example 1  console.log(err.message);  // the error message, for example "Session ID unknown"  console.log(err.context);  // some additional error context});
```

Here is the list of possible error codes:

Code

Message

Possible explanations

0

"Transport unknown"

This should not happen under normal circumstances.

1

"Session ID unknown"

Usually, this means that sticky sessions are not enabled (see [below](#you-didnt-enable-sticky-sessions-in-a-multi-server-setup)).

2

"Bad handshake method"

This should not happen under normal circumstances.

3

"Bad request"

Usually, this means that a proxy in front of your server is not properly forwarding the WebSocket headers (see [here](/docs/v4/reverse-proxy/)).

4

"Forbidden"

The connection was denied by the [`allowRequest()`](/docs/v4/server-options/#allowrequest) method.

5

"Unsupported protocol version"

The version of the client is not compatible with the server (see [here](#the-client-is-not-compatible-with-the-version-of-the-server)).

### Possible explanations[​](#possible-explanations "Direct link to Possible explanations")

#### You are trying to reach a plain WebSocket server[​](#you-are-trying-to-reach-a-plain-websocket-server "Direct link to You are trying to reach a plain WebSocket server")

As explained in the ["What Socket.IO is not"](/docs/v4/#what-socketio-is-not) section, the Socket.IO client is not a WebSocket implementation and thus will not be able to establish a connection with a WebSocket server, even with `transports: ["websocket"]`:

```
const socket = io("ws://echo.websocket.org", {  transports: ["websocket"]});
```

#### The server is not reachable[​](#the-server-is-not-reachable "Direct link to The server is not reachable")

Please make sure the Socket.IO server is actually reachable at the given URL. You can test it with:

```
curl "<the server URL>/socket.io/?EIO=4&transport=polling"
```

which should return something like this:

```
0{"sid":"Lbo5JLzTotvW3g2LAAAA","upgrades":["websocket"],"pingInterval":25000,"pingTimeout":20000,"maxPayload":1000000}
```

If that's not the case, please check that the Socket.IO server is running, and that there is nothing in between that prevents the connection.

note

v1/v2 servers (which implement the v3 of the protocol, hence the `EIO=3`) will return something like this:

```
96:0{"sid":"ptzi_578ycUci8WLB9G1","upgrades":["websocket"],"pingInterval":25000,"pingTimeout":5000}2:40
```

#### The client is not compatible with the version of the server[​](#the-client-is-not-compatible-with-the-version-of-the-server "Direct link to The client is not compatible with the version of the server")

Maintaining backward compatibility is a top priority for us, but in some particular cases we had to implement some breaking changes at the protocol level:

-   from v1.x to v2.0.0 (released in May 2017), to improve the compatibility with non-Javascript clients (see [here](https://github.com/socketio/engine.io/issues/315))
-   from v2.x to v3.0.0 (released in November 2020), to fix some long-standing issues in the protocol once for all (see [here](/docs/v4/migrating-from-2-x-to-3-0/))

info

`v4.0.0` contains some breaking changes in the API of the JavaScript server. The Socket.IO protocol itself was not updated, so a v3 client will be able to reach a v4 server and vice-versa (see [here](/docs/v4/migrating-from-3-x-to-4-0/)).

For example, reaching a v3/v4 server with a v1/v2 client will result in the following response:

```
< HTTP/1.1 400 Bad Request< Content-Type: application/json{"code":5,"message":"Unsupported protocol version"}
```

Here is the compatibility table for the [JS client](https://github.com/socketio/socket.io-client/):

JS Client version

Socket.IO server version

1.x

2.x

3.x

4.x

1.x

**YES**

NO

NO

NO

2.x

NO

**YES**

**YES**1

**YES**1

3.x

NO

NO

**YES**

**YES**

4.x

NO

NO

**YES**

**YES**

\[1\] Yes, with [allowEIO3: true](/docs/v4/server-options/#alloweio3)

Here is the compatibility table for the [Java client](https://github.com/socketio/socket.io-client-java/):

Java Client version

Socket.IO server version

2.x

3.x

4.x

1.x

**YES**

**YES**1

**YES**1

2.x

NO

**YES**

**YES**

\[1\] Yes, with [allowEIO3: true](/docs/v4/server-options/#alloweio3)

Here is the compatibility table for the [Swift client](https://github.com/socketio/socket.io-client-swift/):

Swift Client version

Socket.IO server version

2.x

3.x

4.x

v15.x

**YES**

**YES**1

**YES**2

v16.x

**YES**3

**YES**

**YES**

\[1\] Yes, with [allowEIO3: true](/docs/v4/server-options/#alloweio3) (server) and `.connectParams(["EIO": "3"])` (client):

```
SocketManager(socketURL: URL(string:"http://localhost:8087/")!, config: [.connectParams(["EIO": "3"])])
```

\[2\] Yes, [allowEIO3: true](/docs/v4/server-options/#alloweio3) (server)

\[3\] Yes, with `.version(.two)` (client):

```
SocketManager(socketURL: URL(string:"http://localhost:8087/")!, config: [.version(.two)])
```

#### The server does not send the necessary CORS headers[​](#the-server-does-not-send-the-necessary-cors-headers "Direct link to The server does not send the necessary CORS headers")

If you see the following error in your console:

```
Cross-Origin Request Blocked: The Same Origin Policy disallows reading the remote resource at ...
```

It probably means that:

-   either you are not actually reaching the Socket.IO server (see [above](#the-server-is-not-reachable))
-   or you didn't enable [Cross-Origin Resource Sharing](https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS) (CORS) on the server-side.

Please see the documentation [here](/docs/v4/handling-cors/).

#### You didn't enable sticky sessions (in a multi server setup)[​](#you-didnt-enable-sticky-sessions-in-a-multi-server-setup "Direct link to You didn't enable sticky sessions (in a multi server setup)")

When scaling to multiple Socket.IO servers, you need to make sure that all the requests of a given Socket.IO session reach the same Socket.IO server. The explanation can be found [here](/docs/v4/using-multiple-nodes/#why-is-sticky-session-required).

Failure to do so will result in HTTP 400 responses with the code: `{"code":1,"message":"Session ID unknown"}`

Please see the documentation [here](/docs/v4/using-multiple-nodes/).

#### The request path does not match on both sides[​](#the-request-path-does-not-match-on-both-sides "Direct link to The request path does not match on both sides")

By default, the client sends — and the server expects — HTTP requests with the "/socket.io/" request path.

This can be controlled with the `path` option:

_Server_

```
import { Server } from "socket.io";const io = new Server({  path: "/my-custom-path/"});io.listen(3000);
```

_Client_

```
import { io } from "socket.io-client";const socket = io(SERVER_URL, {  path: "/my-custom-path/"});
```

In that case, the HTTP requests will look like `<SERVER_URL>/my-custom-path/?EIO=4&transport=polling[&...]`.

caution

```
import { io } from "socket.io-client";const socket = io("/my-custom-path/");
```

means the client will try to reach the [namespace](/docs/v4/namespaces/) named "/my-custom-path/", but the request path will still be "/socket.io/".

## Problem: the socket gets disconnected[​](#problem-the-socket-gets-disconnected "Direct link to Problem: the socket gets disconnected")

### Troubleshooting steps[​](#troubleshooting-steps-1 "Direct link to Troubleshooting steps")

First and foremost, please note that disconnections are common and expected, even on a stable Internet connection:

-   anything between the user and the Socket.IO server may encounter a temporary failure or be restarted
-   the server itself may be killed as part of an autoscaling policy
-   the user may lose connection or switch from WiFi to 4G, in case of a mobile browser
-   the browser itself may freeze an inactive tab

That being said, the Socket.IO client will always try to reconnect, unless specifically told [otherwise](/docs/v4/client-options/#reconnection).

The `disconnect` event provides additional information:

```
socket.on("disconnect", (reason, details) => {  // the reason of the disconnection, for example "transport error"  console.log(reason);  // the low-level reason of the disconnection, for example "xhr post error"  console.log(details.message);  // some additional description, for example the status code of the HTTP response  console.log(details.description);  // some additional context, for example the XMLHttpRequest object  console.log(details.context);});
```

The possible reasons are listed [here](/docs/v4/client-socket-instance/#disconnect).

### Possible explanations[​](#possible-explanations-1 "Direct link to Possible explanations")

#### Something between the server and the client closes the connection[​](#something-between-the-server-and-the-client-closes-the-connection "Direct link to Something between the server and the client closes the connection")

If the disconnection happens at a regular interval, this might indicate that something between the server and the client is not properly configured and closes the connection:

-   nginx

The value of nginx's [`proxy_read_timeout`](https://nginx.org/en/docs/http/ngx_http_proxy_module.html#proxy_read_timeout) (60 seconds by default) must be bigger than Socket.IO's [`pingInterval + pingTimeout`](/docs/v4/server-options/#pinginterval) (45 seconds by default), else it will forcefully close the connection if no data is sent after the given delay and the client will get a "transport close" error.

-   Apache HTTP Server

The value of httpd's [`ProxyTimeout`](https://httpd.apache.org/docs/2.4/mod/mod_proxy.html#proxytimeout) (60 seconds by default) must be bigger than Socket.IO's [`pingInterval + pingTimeout`](/docs/v4/server-options/#pinginterval) (45 seconds by default), else it will forcefully close the connection if no data is sent after the given delay and the client will get a "transport close" error.

#### The browser tab was minimized and heartbeat has failed[​](#the-browser-tab-was-minimized-and-heartbeat-has-failed "Direct link to The browser tab was minimized and heartbeat has failed")

When a browser tab is not in focus, some browsers (like [Chrome](https://developer.chrome.com/blog/timer-throttling-in-chrome-88/#intensive-throttling)) throttle JavaScript timers, which could lead to a disconnection by ping timeout **in Socket.IO v2**, as the heartbeat mechanism relied on `setTimeout` function on the client side.

As a workaround, you can increase the `pingTimeout` value on the server side:

```
const io = new Server({  pingTimeout: 60000});
```

Please note that upgrading to Socket.IO v4 (at least `socket.io-client@4.1.3`, due to [this](https://github.com/socketio/engine.io-client/commit/f30a10b7f45517fcb3abd02511c58a89e0ef498f)) should prevent this kind of issues, as the heartbeat mechanism has been reversed (the server now sends PING packets).

#### The client is not compatible with the version of the server[​](#the-client-is-not-compatible-with-the-version-of-the-server-1 "Direct link to The client is not compatible with the version of the server")

Since the format of the packets sent over the WebSocket transport is similar in v2 and v3/v4, you might be able to connect with an incompatible client (see [above](#the-client-is-not-compatible-with-the-version-of-the-server)), but the connection will eventually be closed after a given delay.

So if you are experiencing a regular disconnection after 30 seconds (which was the sum of the values of [pingTimeout](/docs/v4/server-options/#pingtimeout) and [pingInterval](/docs/v4/server-options/#pinginterval) in Socket.IO v2), this is certainly due to a version incompatibility.

#### You are trying to send a huge payload[​](#you-are-trying-to-send-a-huge-payload "Direct link to You are trying to send a huge payload")

If you get disconnected while sending a huge payload, this may mean that you have reached the [`maxHttpBufferSize`](/docs/v4/server-options/#maxhttpbuffersize) value, which defaults to 1 MB. Please adjust it according to your needs:

```
const io = require("socket.io")(httpServer, {  maxHttpBufferSize: 1e8});
```

A huge payload taking more time to upload than the value of the [`pingTimeout`](/docs/v4/server-options/#pingtimeout) option can also trigger a disconnection (since the [heartbeat mechanism](/docs/v4/how-it-works/#disconnection-detection) fails during the upload). Please adjust it according to your needs:

```
const io = require("socket.io")(httpServer, {  pingTimeout: 60000});
```

## Problem: the socket is stuck in HTTP long-polling[​](#problem-the-socket-is-stuck-in-http-long-polling "Direct link to Problem: the socket is stuck in HTTP long-polling")

### Troubleshooting steps[​](#troubleshooting-steps-2 "Direct link to Troubleshooting steps")

In most cases, you should see something like this:

![Network monitor upon success](/assets/images/network-monitor-2e47dbe233100aa290595f8687a9fcba.png)

1.  the Engine.IO handshake (contains the session ID — here, `zBjrh...AAAK` — that is used in subsequent requests)
2.  the Socket.IO handshake request (contains the value of the `auth` option)
3.  the Socket.IO handshake response (contains the [Socket#id](/docs/v4/server-socket-instance/#socketid))
4.  the WebSocket connection
5.  the first HTTP long-polling request, which is closed once the WebSocket connection is established

If you don't see a [HTTP 101 Switching Protocols](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/101) response for the 4th request, that means that something between the server and your browser is preventing the WebSocket connection.

Please note that this is not necessarily blocking since the connection is still established with HTTP long-polling, but it is less efficient.

You can get the name of the current transport with:

**Client-side**

```
socket.on("connect", () => {  const transport = socket.io.engine.transport.name; // in most cases, "polling"  socket.io.engine.on("upgrade", () => {    const upgradedTransport = socket.io.engine.transport.name; // in most cases, "websocket"  });});
```

**Server-side**

```
io.on("connection", (socket) => {  const transport = socket.conn.transport.name; // in most cases, "polling"  socket.conn.on("upgrade", () => {    const upgradedTransport = socket.conn.transport.name; // in most cases, "websocket"  });});
```

### Possible explanations[​](#possible-explanations-2 "Direct link to Possible explanations")

#### A proxy in front of your servers does not accept the WebSocket connection[​](#a-proxy-in-front-of-your-servers-does-not-accept-the-websocket-connection "Direct link to A proxy in front of your servers does not accept the WebSocket connection")

If a proxy like nginx or Apache HTTPD is not properly configured to accept WebSocket connections, then you might get a `TRANSPORT_MISMATCH` error:

```
io.engine.on("connection_error", (err) => {  console.log(err.code);     // 3  console.log(err.message);  // "Bad request"  console.log(err.context);  // { name: 'TRANSPORT_MISMATCH', transport: 'websocket', previousTransport: 'polling' }});
```

Which means that the Socket.IO server does not receive the necessary `Connection: upgrade` header (you can check the `err.req.headers` object).

Please see the documentation [here](/docs/v4/reverse-proxy/).

#### [`express-status-monitor`](https://www.npmjs.com/package/express-status-monitor) runs its own socket.io instance[​](#express-status-monitor-runs-its-own-socketio-instance "Direct link to express-status-monitor-runs-its-own-socketio-instance")

Please see the solution [here](https://github.com/RafalWilinski/express-status-monitor).

## Other common gotchas[​](#other-common-gotchas "Direct link to Other common gotchas")

### Duplicate event registration[​](#duplicate-event-registration "Direct link to Duplicate event registration")

On the client side, the `connect` event will be emitted every time the socket reconnects, so the event listeners must be registered outside the `connect` event listener:

BAD ⚠️

```
socket.on("connect", () => {  socket.on("foo", () => {    // ...  });});
```

GOOD 👍

```
socket.on("connect", () => {  // ...});socket.on("foo", () => {  // ...});
```

If that's not the case, your event listener might be called multiple times.

### Delayed event handler registration[​](#delayed-event-handler-registration "Direct link to Delayed event handler registration")

BAD ⚠️

```
io.on("connection", async (socket) => {  await longRunningOperation();  // WARNING! Some packets might be received by the server but without handler  socket.on("hello", () => {    // ...  });});
```

GOOD 👍

```
io.on("connection", async (socket) => {  socket.on("hello", () => {    // ...  });  await longRunningOperation();});
```

### Usage of the `socket.id` attribute[​](#usage-of-the-socketid-attribute "Direct link to usage-of-the-socketid-attribute")

Please note that, unless [connection state recovery](/docs/v4/connection-state-recovery) is enabled, the `id` attribute is an **ephemeral** ID that is not meant to be used in your application (or only for debugging purposes) because:

-   this ID is regenerated after each reconnection (for example when the WebSocket connection is severed, or when the user refreshes the page)
-   two different browser tabs will have two different IDs
-   there is no message queue stored for a given ID on the server (i.e. if the client is disconnected, the messages sent from the server to this ID are lost)

Please use a regular session ID instead (either sent in a cookie, or stored in the localStorage and sent in the [`auth`](/docs/v4/client-options/#auth) payload).

See also:

-   [Part II of our private message guide](/get-started/private-messaging-part-2/)
-   [How to deal with cookies](/how-to/deal-with-cookies)

### Deployment on a serverless platform[​](#deployment-on-a-serverless-platform "Direct link to Deployment on a serverless platform")

Since most serverless platforms (such as Vercel) bill by the duration of the request handler, maintaining a long-running connection with Socket.IO (or even plain WebSocket) is not recommended.

References:

-   [https://vercel.com/guides/do-vercel-serverless-functions-support-websocket-connections](https://vercel.com/guides/do-vercel-serverless-functions-support-websocket-connections)
-   [https://docs.aws.amazon.com/apigateway/latest/developerguide/apigateway-websocket-api.html](https://docs.aws.amazon.com/apigateway/latest/developerguide/apigateway-websocket-api.html)

-   [Problem: the socket is not able to connect](#problem-the-socket-is-not-able-to-connect)
    -   [Troubleshooting steps](#troubleshooting-steps)
    -   [Possible explanations](#possible-explanations)
        -   [You are trying to reach a plain WebSocket server](#you-are-trying-to-reach-a-plain-websocket-server)
        -   [The server is not reachable](#the-server-is-not-reachable)
        -   [The client is not compatible with the version of the server](#the-client-is-not-compatible-with-the-version-of-the-server)
        -   [The server does not send the necessary CORS headers](#the-server-does-not-send-the-necessary-cors-headers)
        -   [You didn't enable sticky sessions (in a multi server setup)](#you-didnt-enable-sticky-sessions-in-a-multi-server-setup)
        -   [The request path does not match on both sides](#the-request-path-does-not-match-on-both-sides)
-   [Problem: the socket gets disconnected](#problem-the-socket-gets-disconnected)
    -   [Troubleshooting steps](#troubleshooting-steps-1)
    -   [Possible explanations](#possible-explanations-1)
        -   [Something between the server and the client closes the connection](#something-between-the-server-and-the-client-closes-the-connection)
        -   [The browser tab was minimized and heartbeat has failed](#the-browser-tab-was-minimized-and-heartbeat-has-failed)
        -   [The client is not compatible with the version of the server](#the-client-is-not-compatible-with-the-version-of-the-server-1)
        -   [You are trying to send a huge payload](#you-are-trying-to-send-a-huge-payload)
-   [Problem: the socket is stuck in HTTP long-polling](#problem-the-socket-is-stuck-in-http-long-polling)
    -   [Troubleshooting steps](#troubleshooting-steps-2)
    -   [Possible explanations](#possible-explanations-2)
        -   [A proxy in front of your servers does not accept the WebSocket connection](#a-proxy-in-front-of-your-servers-does-not-accept-the-websocket-connection)
        -   [`express-status-monitor` runs its own socket.io instance](#express-status-monitor-runs-its-own-socketio-instance)
-   [Other common gotchas](#other-common-gotchas)
    -   [Duplicate event registration](#duplicate-event-registration)
    -   [Delayed event handler registration](#delayed-event-handler-registration)
    -   [Usage of the `socket.id` attribute](#usage-of-the-socketid-attribute)
    -   [Deployment on a serverless platform](#deployment-on-a-serverless-platform)
