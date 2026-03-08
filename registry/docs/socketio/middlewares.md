Version: 4.x

On this page

A middleware function is a function that gets executed for every incoming connection.

Middleware functions can be useful for:

-   logging
-   authentication / authorization
-   rate limiting

Note: this function will be executed only once per connection (even if the connection consists in multiple HTTP requests).

info

If you are looking for Express middlewares, please check [this section](#compatibility-with-express-middleware).

## Registering a middleware[​](#registering-a-middleware "Direct link to Registering a middleware")

A middleware function has access to the [Socket instance](/docs/v4/server-socket-instance/) and to the next registered middleware function.

```
io.use((socket, next) => {  if (isValid(socket.request)) {    next();  } else {    next(new Error("invalid"));  }});
```

You can register several middleware functions, and they will be executed sequentially:

```
io.use((socket, next) => {  next();});io.use((socket, next) => {  next(new Error("thou shall not pass"));});io.use((socket, next) => {  // not executed, since the previous middleware has returned an error  next();});
```

Please make sure to call `next()` in any case. Otherwise, the connection will be left hanging until it is closed after a given timeout.

**Important note**: the Socket instance is not actually connected when the middleware gets executed, which means that no `disconnect` event will be emitted if the connection eventually fails.

For example, if the client manually closes the connection:

```
// server-sideio.use((socket, next) => {  setTimeout(() => {    // next is called after the client disconnection    next();  }, 1000);  socket.on("disconnect", () => {    // not triggered  });});io.on("connection", (socket) => {  // not triggered});// client-sideconst socket = io();setTimeout(() => {  socket.disconnect();}, 500);
```

## Sending credentials[​](#sending-credentials "Direct link to Sending credentials")

The client can send credentials with the `auth` option:

```
// plain objectconst socket = io({  auth: {    token: "abc"  }});// or with a functionconst socket = io({  auth: (cb) => {    cb({      token: "abc"    });  }});
```

Those credentials can be accessed in the [handshake](/docs/v4/server-socket-instance/#sockethandshake) object on the server-side:

```
io.use((socket, next) => {  const token = socket.handshake.auth.token;  // ...});
```

## Handling middleware error[​](#handling-middleware-error "Direct link to Handling middleware error")

If the `next` method is called with an Error object, the connection will be refused and the client will receive an `connect_error` event.

```
// client-sidesocket.on("connect_error", (err) => {  console.log(err.message); // prints the message associated with the error});
```

You can attach additional details to the Error object:

```
// server-sideio.use((socket, next) => {  const err = new Error("not authorized");  err.data = { content: "Please retry later" }; // additional details  next(err);});// client-sidesocket.on("connect_error", (err) => {  console.log(err instanceof Error); // true  console.log(err.message); // not authorized  console.log(err.data); // { content: "Please retry later" }});
```

## Compatibility with Express middleware[​](#compatibility-with-express-middleware "Direct link to Compatibility with Express middleware")

Since they are not bound to a usual HTTP request/response cycle, Socket.IO middlewares are not really compatible with [Express middlewares](https://expressjs.com/en/guide/using-middleware.html).

That being said, starting with version `4.6.0`, Express middlewares are now supported by the underlying engine:

```
io.engine.use((req, res, next) => {  // do something  next();});
```

The middlewares will be called for each incoming HTTP requests, including upgrade requests.

Example with [`express-session`](https://www.npmjs.com/package/express-session):

```
import session from "express-session";io.engine.use(session({  secret: "keyboard cat",  resave: false,  saveUninitialized: true,  cookie: { secure: true }}));
```

Example with [`helmet`](https://www.npmjs.com/package/helmet):

```
import helmet from "helmet";io.engine.use(helmet());
```

If the middleware must be only applied to the handshake request (and not for each HTTP request), you can check for the existence of the `sid` query parameter.

Example with [`passport-jwt`](https://www.npmjs.com/package/passport-jwt):

```
io.engine.use((req, res, next) => {  const isHandshake = req._query.sid === undefined;  if (isHandshake) {    passport.authenticate("jwt", { session: false })(req, res, next);  } else {    next();  }});
```

-   [Registering a middleware](#registering-a-middleware)
-   [Sending credentials](#sending-credentials)
-   [Handling middleware error](#handling-middleware-error)
-   [Compatibility with Express middleware](#compatibility-with-express-middleware)
