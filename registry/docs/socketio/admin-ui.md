Version: 4.x

On this page

The Socket.IO admin UI can be used to have an overview of the state of your Socket.IO deployment.

The source code can be found here: [https://github.com/socketio/socket.io-admin-ui/](https://github.com/socketio/socket.io-admin-ui/)

Link to the hosted version: [https://admin.socket.io/](https://admin.socket.io/)

## Current features[​](#current-features "Direct link to Current features")

-   overview of the servers and the clients that are currently connected

![Screenshot of the dashboard](/assets/images/admin-ui-dashboard-8df87956c18a60717867ef800c1bc9c2.png)

-   details of each socket instance (active transport, handshake, rooms, ...)

![Screenshot of the page displaying the details of a socket](/assets/images/admin-ui-socket-details-38d032b6617a39a0769b93f8f3518e9d.png)

-   details of each room

![Screenshot of the page displaying the details of a room](/assets/images/admin-ui-room-details-012287cf23321c935d3fee19cca401c9.png)

-   details of every event emitted or received by the server

![Screenshot of the page displaying the list of events](/assets/images/admin-ui-events-89ff24243c327109a8455375ccc78868.png)

-   administrative operations (join, leave, disconnect)

If you have any feedback / suggestions, do not hesitate!

## Installation[​](#installation "Direct link to Installation")

### Server-side[​](#server-side "Direct link to Server-side")

First, install the `@socket.io/admin-ui` package:

```
npm i @socket.io/admin-ui
```

And then invoke the `instrument` method on your Socket.IO server:

```
const { createServer } = require("http");const { Server } = require("socket.io");const { instrument } = require("@socket.io/admin-ui");const httpServer = createServer();const io = new Server(httpServer, {  cors: {    origin: ["https://admin.socket.io"],    credentials: true  }});instrument(io, {  auth: false,  mode: "development",});httpServer.listen(3000);
```

The module is compatible with:

-   Socket.IO v4 server
-   Socket.IO v3 server (>= 3.1.0), but without the operations on rooms (join, leave, disconnection)

Example with [NestJS](https://docs.nestjs.com/websockets/gateways):

```
import { instrument } from "@socket.io/admin-ui";@WebSocketGateway()export class MyGateway {    // ...    afterInit() {        instrument(this.server, {            auth: false,            mode: "development",        });    }}
```

### Client-side[​](#client-side "Direct link to Client-side")

You can then head up to [https://admin.socket.io](https://admin.socket.io), or host the files found in the `ui/dist` folder [here](https://github.com/socketio/socket.io-admin-ui/tree/main/ui/dist).

**Important note**: the website at [https://admin.socket.io](https://admin.socket.io) is totally static (hosted on [Vercel](https://vercel.com)), we do not (and will never) store any information about yourself or your browser (no tracking, no analytics, ...). That being said, hosting the files yourself is totally fine.

You should see the following modal:

![login modal screenshot](/assets/images/admin-ui-login-modal-a8a4dea1ffc70eb0783445ad8c7bbb8d.png)

Please enter the URL of your server (for example, `http://localhost:3000` or `https://example.com`) and the credentials, if applicable (see the `auth` option [below](#auth)).

### Available options[​](#available-options "Direct link to Available options")

#### `auth`[​](#auth "Direct link to auth")

Default value: `-`

This option is mandatory. You can either disable authentication (please use with caution):

```
instrument(io, {  auth: false});
```

Or use basic authentication:

```
instrument(io, {  auth: {    type: "basic",    username: "admin",    password: "$2b$10$heqvAkYMez.Va6Et2uXInOnkCT6/uQj1brkrbyG3LpopDklcq7ZOS" // "changeit" encrypted with bcrypt  },});
```

caution

Please note that the `bcrypt` package does not currently support hashes starting with the `$2y$` prefix, which is used by some BCrypt implementations (for example [https://bcrypt-generator.com/](https://bcrypt-generator.com/) or [https://www.bcrypt.fr/](https://www.bcrypt.fr/)). You can check the validity of the hash with:

```
$ node> require("bcryptjs").compareSync("<the password>", "<the hash>")true
```

You can generate a valid hash with:

```
$ node> require("bcryptjs").hashSync("changeit", 10)'$2b$10$LQUE...'
```

See also:

-   [https://github.com/kelektiv/node.bcrypt.js/issues/849](https://github.com/kelektiv/node.bcrypt.js/issues/849)
-   [https://stackoverflow.com/a/36225192/5138796](https://stackoverflow.com/a/36225192/5138796)

#### `namespaceName`[​](#namespacename "Direct link to namespacename")

Default value: `/admin`

The name of the namespace which will be created to handle the administrative tasks.

```
instrument(io, {  namespaceName: "/custom"});
```

This namespace is a classic Socket.IO namespace, you can access it with:

```
const adminNamespace = io.of("/admin");
```

More information [here](/docs/v4/namespaces/).

#### `readonly`[​](#readonly "Direct link to readonly")

Default value: `false`

Whether to put the admin UI in read-only mode (no join, leave or disconnect allowed).

```
instrument(io, {  readonly: true});
```

#### `serverId`[​](#serverid "Direct link to serverid")

Default value: `require("os").hostname()`

The ID of the given server. If you have several Socket.IO servers on the same machine, you'll need to give them a distinct ID:

```
instrument(io, {  serverId: `${require("os").hostname()}#${process.pid}`});
```

#### `store`[​](#store "Direct link to store")

Default value: `new InMemoryStore()`

The store is used to store the session IDs so the user do not have to retype the credentials upon reconnection.

If you use basic authentication in a multi-server setup, you should provide a custom store:

```
const { instrument, RedisStore } = require("@socket.io/admin-ui");instrument(io, {  store: new RedisStore(redisClient)});
```

#### `mode`[​](#mode "Direct link to mode")

Default value: `development`

In production mode, the server won't send all details about the socket instances and the rooms, thus reducing the memory footprint of the instrumentation.

```
instrument(io, {  mode: "production"});
```

The production mode can also be enabled with the NODE\_ENV environment variable:

```
NODE_ENV=production node index.js
```

## How it works[​](#how-it-works "Direct link to How it works")

The source code can be found here: [https://github.com/socketio/socket.io-admin-ui/](https://github.com/socketio/socket.io-admin-ui/)

The `instrument` method simply:

-   creates a [namespace](/docs/v4/namespaces/) and adds an authentication [middleware](/docs/v4/middlewares/) if applicable
-   register listeners for the `connection` and `disconnect` events for each existing namespaces to track the socket instances
-   register a timer which will periodically send stats from the server to the UI
-   register handlers for the `join`, `leave` and `_disconnect` commands sent from the UI

## Latest releases[​](#latest-releases "Direct link to Latest releases")

-   `0.5.1` (Oct 2022): [GitHub release](https://github.com/socketio/socket.io-admin-ui/releases/tag/0.5.1) / [diff](https://github.com/socketio/socket.io-admin-ui/compare/0.5.0...0.5.1)
-   `0.5.0` (Sep 2022): [GitHub release](https://github.com/socketio/socket.io-admin-ui/releases/tag/0.5.0) / [diff](https://github.com/socketio/socket.io-admin-ui/compare/0.4.0...0.5.0)
-   `0.4.0` (Jun 2022): [GitHub release](https://github.com/socketio/socket.io-admin-ui/releases/tag/0.4.0) / [diff](https://github.com/socketio/socket.io-admin-ui/compare/0.3.0...0.4.0)

-   [Current features](#current-features)
-   [Installation](#installation)
    -   [Server-side](#server-side)
    -   [Client-side](#client-side)
    -   [Available options](#available-options)
-   [How it works](#how-it-works)
-   [Latest releases](#latest-releases)
