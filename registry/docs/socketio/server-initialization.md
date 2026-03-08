Version: 4.x

On this page

Once you have [installed](/docs/v4/server-installation/) the Socket.IO server library, you can now init the server. The complete list of options can be found [here](/docs/v4/server-options/).

tip

For TypeScript users, it is possible to provide type hints for the events. Please check [this](/docs/v4/typescript/).

## Initialization[​](#initialization "Direct link to Initialization")

### Standalone[​](#standalone "Direct link to Standalone")

-   CommonJS
-   ES modules
-   TypeScript

```
const { Server } = require("socket.io");const io = new Server({ /* options */ });io.on("connection", (socket) => {  // ...});io.listen(3000);
```

```
import { Server } from "socket.io";const io = new Server({ /* options */ });io.on("connection", (socket) => {  // ...});io.listen(3000);
```

```
import { Server } from "socket.io";const io = new Server({ /* options */ });io.on("connection", (socket) => {  // ...});io.listen(3000);
```

You can also pass the port as the first argument:

-   CommonJS
-   ES modules
-   TypeScript

```
const { Server } = require("socket.io");const io = new Server(3000, { /* options */ });io.on("connection", (socket) => {  // ...});
```

```
import { Server } from "socket.io";const io = new Server(3000, { /* options */ });io.on("connection", (socket) => {  // ...});
```

```
import { Server } from "socket.io";const io = new Server(3000, { /* options */ });io.on("connection", (socket) => {  // ...});
```

This implicitly starts a Node.js [HTTP server](https://nodejs.org/docs/latest/api/http.html#http_class_http_server), which can be accessed through `io.httpServer`.

### With an HTTP server[​](#with-an-http-server "Direct link to With an HTTP server")

-   CommonJS
-   ES modules
-   TypeScript

```
const { createServer } = require("http");const { Server } = require("socket.io");const httpServer = createServer();const io = new Server(httpServer, { /* options */ });io.on("connection", (socket) => {  // ...});httpServer.listen(3000);
```

```
import { createServer } from "http";import { Server } from "socket.io";const httpServer = createServer();const io = new Server(httpServer, { /* options */ });io.on("connection", (socket) => {  // ...});httpServer.listen(3000);
```

```
import { createServer } from "http";import { Server } from "socket.io";const httpServer = createServer();const io = new Server(httpServer, { /* options */ });io.on("connection", (socket) => {  // ...});httpServer.listen(3000);
```

### With an HTTPS server[​](#with-an-https-server "Direct link to With an HTTPS server")

-   CommonJS
-   ES modules
-   TypeScript

```
const { readFileSync } = require("fs");const { createServer } = require("https");const { Server } = require("socket.io");const httpsServer = createServer({  key: readFileSync("/path/to/my/key.pem"),  cert: readFileSync("/path/to/my/cert.pem")});const io = new Server(httpsServer, { /* options */ });io.on("connection", (socket) => {  // ...});httpsServer.listen(3000);
```

```
import { readFileSync } from "fs";import { createServer } from "https";import { Server } from "socket.io";const httpsServer = createServer({  key: readFileSync("/path/to/my/key.pem"),  cert: readFileSync("/path/to/my/cert.pem")});const io = new Server(httpsServer, { /* options */ });io.on("connection", (socket) => {  // ...});httpsServer.listen(3000);
```

```
import { readFileSync } from "fs";import { createServer } from "https";import { Server } from "socket.io";const httpsServer = createServer({  key: readFileSync("/path/to/my/key.pem"),  cert: readFileSync("/path/to/my/cert.pem")});const io = new Server(httpsServer, { /* options */ });io.on("connection", (socket) => {  // ...});httpsServer.listen(3000);
```

See also: [Node.js documentation](https://nodejs.org/api/https.html#https_https_createserver_options_requestlistener)

With client-certificate authentication:

_Server_

```
import { readFileSync } from "fs";import { createServer } from "https";import { Server } from "socket.io";const httpsServer = createServer({  key: readFileSync("/path/to/server-key.pem"),  cert: readFileSync("/path/to/server-cert.pem"),  requestCert: true,  ca: [    readFileSync("/path/to/client-cert.pem")  ]});const io = new Server(httpsServer, { /* options */ });io.engine.on("connection", (rawSocket) => {  // if you need the certificate details (it is no longer available once the handshake is completed)  rawSocket.peerCertificate = rawSocket.request.client.getPeerCertificate();});io.on("connection", (socket) => {  console.log(socket.conn.peerCertificate);  // ...});httpsServer.listen(3000);
```

_Client_

```
import { readFileSync } from "fs";import { io } from "socket.io-client";const socket = io("https://example.com", {  key: readFileSync("/path/to/client-key.pem"),  cert: readFileSync("/path/to/client-cert.pem"),  ca: [    readFileSync("/path/to/server-cert.pem")  ]});
```

### With an HTTP/2 server[​](#with-an-http2-server "Direct link to With an HTTP/2 server")

-   CommonJS
-   ES modules
-   TypeScript

```
const { readFileSync } = require("fs");const { createSecureServer } = require("http2");const { Server } = require("socket.io");const httpServer = createSecureServer({  allowHTTP1: true,  key: readFileSync("/path/to/my/key.pem"),  cert: readFileSync("/path/to/my/cert.pem")});const io = new Server(httpServer, { /* options */ });io.on("connection", (socket) => {  // ...});httpServer.listen(3000);
```

```
import { readFileSync } from "fs";import { createSecureServer } from "http2";import { Server } from "socket.io";const httpServer = createSecureServer({  allowHTTP1: true,  key: readFileSync("/path/to/my/key.pem"),  cert: readFileSync("/path/to/my/cert.pem")});const io = new Server(httpServer, { /* options */ });io.on("connection", (socket) => {  // ...});httpServer.listen(3000);
```

```
import { readFileSync } from "fs";import { createSecureServer } from "http2";import { Server } from "socket.io";const httpServer = createSecureServer({  allowHTTP1: true,  key: readFileSync("/path/to/my/key.pem"),  cert: readFileSync("/path/to/my/cert.pem")});const io = new Server(httpServer, { /* options */ });io.on("connection", (socket) => {  // ...});httpServer.listen(3000);
```

See also: [Node.js documentation](https://nodejs.org/api/http2.html#http2_http2_createsecureserver_options_onrequesthandler)

### With Express[​](#with-express "Direct link to With Express")

-   CommonJS
-   ES modules
-   TypeScript

```
const express = require("express");const { createServer } = require("http");const { Server } = require("socket.io");const app = express();const httpServer = createServer(app);const io = new Server(httpServer, { /* options */ });io.on("connection", (socket) => {  // ...});httpServer.listen(3000);
```

```
import express from "express";import { createServer } from "http";import { Server } from "socket.io";const app = express();const httpServer = createServer(app);const io = new Server(httpServer, { /* options */ });io.on("connection", (socket) => {  // ...});httpServer.listen(3000);
```

```
import * as express from "express";import { createServer } from "http";import { Server } from "socket.io";const app = express();const httpServer = createServer(app);const io = new Server(httpServer, { /* options */ });io.on("connection", (socket) => {  // ...});httpServer.listen(3000);
```

caution

Using `app.listen(3000)` will not work here, as it creates a new HTTP server.

More information [here](http://expressjs.com/).

### With Koa[​](#with-koa "Direct link to With Koa")

-   CommonJS
-   ES modules
-   TypeScript

```
const Koa = require("koa");const { createServer } = require("http");const { Server } = require("socket.io");const app = new Koa();const httpServer = createServer(app.callback());const io = new Server(httpServer, { /* options */ });io.on("connection", (socket) => {  // ...});httpServer.listen(3000);
```

```
import Koa from "koa";import { createServer } from "http";import { Server } from "socket.io";const app = new Koa();const httpServer = createServer(app.callback());const io = new Server(httpServer, { /* options */ });io.on("connection", (socket) => {  // ...});httpServer.listen(3000);
```

```
import * as Koa from "koa";import { createServer } from "http";import { Server } from "socket.io";const app = new Koa();const httpServer = createServer(app.callback());const io = new Server(httpServer, { /* options */ });io.on("connection", (socket) => {  // ...});httpServer.listen(3000);
```

More information [here](https://koajs.com/).

### With Nest[​](#with-nest "Direct link to With Nest")

See the documentation [here](https://docs.nestjs.com/websockets/gateways).

caution

NestJS v7 and below relies on Socket.IO v2, while NestJS v8 relies on Socket.IO v4. Please use a [compatible client](/docs/v4/client-installation/#version-compatibility).

### With Fastify[​](#with-fastify "Direct link to With Fastify")

You need to register the [`fastify-socket.io`](https://github.com/alemagio/fastify-socket.io) plugin:

-   CommonJS
-   ES modules
-   TypeScript

```
const fastify = require("fastify");const fastifyIO = require("fastify-socket.io");const server = fastify();server.register(fastifyIO);server.get("/", (req, reply) => {  server.io.emit("hello");});server.ready().then(() => {  // we need to wait for the server to be ready, else `server.io` is undefined  server.io.on("connection", (socket) => {    // ...  });});server.listen({ port: 3000 });
```

```
import fastify from "fastify";import fastifyIO from "fastify-socket.io";const server = fastify();server.register(fastifyIO);server.get("/", (req, reply) => {  server.io.emit("hello");});server.ready().then(() => {  // we need to wait for the server to be ready, else `server.io` is undefined  server.io.on("connection", (socket) => {    // ...  });});server.listen({ port: 3000 });
```

```
import fastify from "fastify";import fastifyIO from "fastify-socket.io";const server = fastify();server.register(fastifyIO);server.get("/", (req, reply) => {  server.io.emit("hello");});server.ready().then(() => {  // we need to wait for the server to be ready, else `server.io` is undefined  server.io.on("connection", (socket) => {    // ...  });});server.listen({ port: 3000 });
```

### With µWebSockets.js[​](#with-uwebsocketsjs "Direct link to With µWebSockets.js")

```
import { App } from "uWebSockets.js";import { Server } from "socket.io";const app = App();const io = new Server();io.attachApp(app);io.on("connection", (socket) => {  // ...});app.listen(3000, (token) => {  if (!token) {    console.warn("port already in use");  }});
```

Reference: [https://github.com/uNetworking/uWebSockets.js](https://github.com/uNetworking/uWebSockets.js)

### With Hono (Node.js)[​](#with-hono-nodejs "Direct link to With Hono (Node.js)")

-   CommonJS
-   ES modules
-   TypeScript

```
const { Hono } = require("hono");const { serve } = require("@hono/node-server");const { Server } = require("socket.io");const app = new Hono();const httpServer = serve({    fetch: app.fetch,    port: 3000,});const io = new Server(httpServer, {    /* options */});io.on("connection", (socket) => {    // ...});
```

```
import { Hono } from "hono";import { serve } from "@hono/node-server";import { Server } from "socket.io";const app = new Hono();const httpServer = serve({    fetch: app.fetch,    port: 3000,});const io = new Server(httpServer, {    /* options */});io.on("connection", (socket) => {    // ...});
```

```
import { Hono } from "hono";import { serve } from "@hono/node-server";import { Server } from "socket.io";import type { Server as HTTPServer } from "node:http";const app = new Hono();const httpServer = serve({    fetch: app.fetch,    port: 3000,});const io = new Server(httpServer as HTTPServer, {    /* options */});io.on("connection", (socket) => {    // ...});
```

Reference: [https://hono.dev/docs/](https://hono.dev/docs/)

### With Hono & Bun[​](#with-hono--bun "Direct link to With Hono & Bun")

```
import { Server as Engine } from "@socket.io/bun-engine";import { Server } from "socket.io";import { Hono } from "hono";const io = new Server();const engine = new Engine();io.bind(engine);io.on("connection", (socket) => {  // ...});const app = new Hono();const { websocket } = engine.handler();export default {  port: 3000,  idleTimeout: 30, // must be greater than the "pingInterval" option of the engine, which defaults to 25 seconds  fetch(req, server) {    const url = new URL(req.url);    if (url.pathname === "/socket.io/") {      return engine.handleRequest(req, server);    } else {      return app.fetch(req, server);    }  },  websocket}
```

Reference: [https://hono.dev/docs/](https://hono.dev/docs/)

## Options[​](#options "Direct link to Options")

The complete list of available options can be found [here](/docs/v4/server-options/).

-   [Initialization](#initialization)
    -   [Standalone](#standalone)
    -   [With an HTTP server](#with-an-http-server)
    -   [With an HTTPS server](#with-an-https-server)
    -   [With an HTTP/2 server](#with-an-http2-server)
    -   [With Express](#with-express)
    -   [With Koa](#with-koa)
    -   [With Nest](#with-nest)
    -   [With Fastify](#with-fastify)
    -   [With µWebSockets.js](#with-uwebsocketsjs)
    -   [With Hono (Node.js)](#with-hono-nodejs)
    -   [With Hono & Bun](#with-hono--bun)
-   [Options](#options)
