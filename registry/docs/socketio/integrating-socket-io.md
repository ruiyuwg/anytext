Version: 4.x

# Integrating Socket.IO

Socket.IO is composed of two parts:

-   A server that integrates with (or mounts on) the Node.JS HTTP Server (the [`socket.io`](https://www.npmjs.com/package/socket.io) package)
-   A client library that loads on the browser side (the [`socket.io-client`](https://www.npmjs.com/package/socket.io-client) package)

During development, `socket.io` serves the client automatically for us, as we’ll see, so for now we only have to install one module:

```
npm install socket.io
```

That will install the module and add the dependency to `package.json`. Now let’s edit `index.js` to add it:

-   CommonJS
-   ES modules

```
const express = require('express');const { createServer } = require('node:http');const { join } = require('node:path');const { Server } = require('socket.io');const app = express();const server = createServer(app);const io = new Server(server);app.get('/', (req, res) => {  res.sendFile(join(__dirname, 'index.html'));});io.on('connection', (socket) => {  console.log('a user connected');});server.listen(3000, () => {  console.log('server running at http://localhost:3000');});
```

```
import express from 'express';import { createServer } from 'node:http';import { fileURLToPath } from 'node:url';import { dirname, join } from 'node:path';import { Server } from 'socket.io';const app = express();const server = createServer(app);const io = new Server(server);const __dirname = dirname(fileURLToPath(import.meta.url));app.get('/', (req, res) => {  res.sendFile(join(__dirname, 'index.html'));});io.on('connection', (socket) => {  console.log('a user connected');});server.listen(3000, () => {  console.log('server running at http://localhost:3000');});
```

Notice that I initialize a new instance of `socket.io` by passing the `server` (the HTTP server) object. Then I listen on the `connection` event for incoming sockets and log it to the console.

Now in index.html add the following snippet before the `</body>` (end body tag):

-   ES6
-   ES5

```
<script src="/socket.io/socket.io.js"></script><script>  const socket = io();</script>
```

```
<script src="/socket.io/socket.io.js"></script><script>  var socket = io();</script>
```

That’s all it takes to load the `socket.io-client`, which exposes an `io` global (and the endpoint `GET /socket.io/socket.io.js`), and then connect.

If you would like to use the local version of the client-side JS file, you can find it at `node_modules/socket.io/client-dist/socket.io.js`.

tip

You can also use a CDN instead of the local files (e.g. `<script src="https://cdn.socket.io/4.8.3/socket.io.min.js"></script>`).

Notice that I’m not specifying any URL when I call `io()`, since it defaults to trying to connect to the host that serves the page.

note

If you're behind a reverse proxy such as apache or nginx please take a look at [the documentation for it](/docs/v4/reverse-proxy/).

If you're hosting your app in a folder that is _not_ the root of your website (e.g., `https://example.com/chatapp`) then you also need to specify the [path](/docs/v4/server-options/#path) in both the server and the client.

If you now restart the process (by hitting Control+C and running `node index.js` again) and then refresh the webpage you should see the console print “a user connected”.

Try opening several tabs, and you’ll see several messages.

![A console displaying several messages, indicating that some users have connected](/images/chat-4.png)

Each socket also fires a special `disconnect` event:

```
io.on('connection', (socket) => {  console.log('a user connected');  socket.on('disconnect', () => {    console.log('user disconnected');  });});
```

Then if you refresh a tab several times you can see it in action.

![A console displaying several messages, indicating that some users have connected and disconnected](/images/chat-5.png)

info

-   CommonJS
-   ES modules

You can run this example directly in your browser on:

-   [CodeSandbox](https://codesandbox.io/p/sandbox/github/socketio/chat-example/tree/cjs/step3?file=index.js)
-   [StackBlitz](https://stackblitz.com/github/socketio/chat-example/tree/cjs/step3?file=index.js)

You can run this example directly in your browser on:

-   [CodeSandbox](https://codesandbox.io/p/sandbox/github/socketio/chat-example/tree/esm/step3?file=index.js)
-   [StackBlitz](https://stackblitz.com/github/socketio/chat-example/tree/esm/step3?file=index.js)
