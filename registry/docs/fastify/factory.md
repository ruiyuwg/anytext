## Factory[​](#factory "Direct link to Factory")

[]()

The Fastify module exports a factory function that is used to create new `Fastify server` instances. This factory function accepts an options object which is used to customize the resulting instance. This document describes the properties available in that options object.

- [Factory](#factory)

  - [`http`](#http)

  - [`http2`](#http2)

  - [`https`](#https)

  - [`connectionTimeout`](#connectiontimeout)

  - [`keepAliveTimeout`](#keepalivetimeout)

  - [`forceCloseConnections`](#forcecloseconnections)

  - [`maxRequestsPerSocket`](#maxrequestspersocket)

  - [`requestTimeout`](#requesttimeout)

  - [`bodyLimit`](#bodylimit)

  - [`onProtoPoisoning`](#onprotopoisoning)

  - [`onConstructorPoisoning`](#onconstructorpoisoning)

  - [`logger`](#logger)

  - [`loggerInstance`](#loggerInstance)

  - [`disableRequestLogging`](#disablerequestlogging)

  - [`serverFactory`](#serverfactory)

  - [`requestIdHeader`](#requestidheader)

  - [`requestIdLogLabel`](#requestidloglabel)

  - [`genReqId`](#genreqid)

  - [`trustProxy`](#trustproxy)

  - [`pluginTimeout`](#plugintimeout)

  - [`exposeHeadRoutes`](#exposeheadroutes)

  - [`return503OnClosing`](#return503onclosing)

  - [`ajv`](#ajv)

  - [`serializerOpts`](#serializeropts)

  - [`http2SessionTimeout`](#http2sessiontimeout)

  - [`frameworkErrors`](#frameworkerrors)

  - [`clientErrorHandler`](#clienterrorhandler)

  - [`rewriteUrl`](#rewriteurl)

  - [`allowErrorHandlerOverride`](#allowerrorhandleroverride)

  - [RouterOptions](#routeroptions)

    - [`allowUnsafeRegex`](#allowunsaferegex)
    - [`buildPrettyMeta`](#buildprettymeta)
    - [`caseSensitive`](#casesensitive)
    - [`constraints`](#constraints)
    - [`defaultRoute`](#defaultroute)
    - [`ignoreDuplicateSlashes`](#ignoreduplicateslashes)
    - [`ignoreTrailingSlash`](#ignoretrailingslash)
    - [`maxParamLength`](#maxparamlength)
    - [`onBadUrl`](#onbadurl)
    - [`querystringParser`](#querystringparser)
    - [`useSemicolonDelimiter`](#usesemicolondelimiter)

- [Instance](#instance)

  - [Server Methods](#server-methods)

    - [server](#server)
    - [after](#after)
    - [ready](#ready)
    - [listen](#listen)
    - [addresses](#addresses)
    - [routing](#routing)
    - [route](#route)
    - [hasRoute](#hasroute)
    - [findRoute](#findroute)
    - [close](#close)
    - [decorate\*](#decorate)
    - [register](#register)
    - [addHook](#addhook)
    - [prefix](#prefix)
    - [pluginName](#pluginname)
    - [hasPlugin](#hasplugin)
    - [listeningOrigin](#listeningorigin)
    - [log](#log)
    - [version](#version)
    - [inject](#inject)
    - [addHttpMethod](#addHttpMethod)
    - [addSchema](#addschema)
    - [getSchemas](#getschemas)
    - [getSchema](#getschema)
    - [setReplySerializer](#setreplyserializer)
    - [setValidatorCompiler](#setvalidatorcompiler)
    - [setSchemaErrorFormatter](#setschemaerrorformatter)
    - [setSerializerCompiler](#setserializercompiler)
    - [validatorCompiler](#validatorcompiler)
    - [serializerCompiler](#serializercompiler)
    - [schemaErrorFormatter](#schemaerrorformatter)
    - [schemaController](#schemacontroller)
    - [setNotFoundHandler](#setnotfoundhandler)
    - [setErrorHandler](#seterrorhandler)
    - [setChildLoggerFactory](#setchildloggerfactory)
    - [setGenReqId](#setGenReqId)
    - [addConstraintStrategy](#addconstraintstrategy)
    - [hasConstraintStrategy](#hasconstraintstrategy)
    - [printRoutes](#printroutes)
    - [printPlugins](#printplugins)
    - [addContentTypeParser](#addcontenttypeparser)
    - [hasContentTypeParser](#hascontenttypeparser)
    - [removeContentTypeParser](#removecontenttypeparser)
    - [removeAllContentTypeParsers](#removeallcontenttypeparsers)
    - [getDefaultJsonParser](#getdefaultjsonparser)
    - [defaultTextParser](#defaulttextparser)
    - [errorHandler](#errorhandler)
    - [childLoggerFactory](#childloggerfactory)
    - [Symbol.asyncDispose](#symbolasyncdispose)
    - [initialConfig](#initialconfig)

### `http`[​](#http "Direct link to http")

[]()

- Default: `null`

An object used to configure the server's listening socket. The options are the same as the Node.js core [`createServer` method](https://nodejs.org/docs/latest-v20.x/api/http.html#httpcreateserveroptions-requestlistener).

This option is ignored if options [`http2`](#factory-http2) or [`https`](#factory-https) are set.

### `http2`[​](#http2 "Direct link to http2")

[]()

- Default: `false`

If `true` Node.js core's [HTTP/2](https://nodejs.org/dist/latest-v20.x/docs/api/http2.html) module is used for binding the socket.

### `https`[​](#https "Direct link to https")

[]()

- Default: `null`

An object used to configure the server's listening socket for TLS. The options are the same as the Node.js core [`createServer` method](https://nodejs.org/dist/latest-v20.x/docs/api/https.html#https_https_createserver_options_requestlistener). When this property is `null`, the socket will not be configured for TLS.

This option also applies when the [`http2`](#factory-http2) option is set.

### `connectionTimeout`[​](#connectiontimeout "Direct link to connectiontimeout")

[]()

- Default: `0` (no timeout)

Defines the server timeout in milliseconds. See documentation for [`server.timeout` property](https://nodejs.org/api/http.html#http_server_timeout) to understand the effect of this option.

When `serverFactory` option is specified this option is ignored.

### `keepAliveTimeout`[​](#keepalivetimeout "Direct link to keepalivetimeout")

[]()

- Default: `72000` (72 seconds)

Defines the server keep-alive timeout in milliseconds. See documentation for [`server.keepAliveTimeout` property](https://nodejs.org/api/http.html#http_server_keepalivetimeout) to understand the effect of this option. This option only applies when HTTP/1 is in use.

When `serverFactory` option is specified this option is ignored.

### `forceCloseConnections`[​](#forcecloseconnections "Direct link to forcecloseconnections")

[]()

- Default: `"idle"` if the HTTP server allows it, `false` otherwise

When set to `true`, upon [`close`](#close) the server will iterate the current persistent connections and [destroy their sockets](https://nodejs.org/dist/latest-v16.x/docs/api/net.html#socketdestroyerror).

When used with HTTP/2 server, it will also close all active HTTP/2 sessions.

> ℹ️ Note: Since Node.js v24 active sessions are closed by default

> ⚠ Warning: Connections are not inspected to determine if requests have been completed.

Fastify will prefer the HTTP server's [`closeAllConnections`](https://nodejs.org/dist/latest-v18.x/docs/api/http.html#servercloseallconnections) method if supported, otherwise, it will use internal connection tracking.

When set to `"idle"`, upon [`close`](#close) the server will iterate the current persistent connections which are not sending a request or waiting for a response and destroy their sockets. The value is only supported if the HTTP server supports the [`closeIdleConnections`](https://nodejs.org/dist/latest-v18.x/docs/api/http.html#servercloseidleconnections) method, otherwise attempting to set it will throw an exception.

### `maxRequestsPerSocket`[​](#maxrequestspersocket "Direct link to maxrequestspersocket")

[]()

- Default: `0` (no limit)

Defines the maximum number of requests a socket can handle before closing keep alive connection. See [`server.maxRequestsPerSocket` property](https://nodejs.org/dist/latest/docs/api/http.html#http_server_maxrequestspersocket) to understand the effect of this option. This option only applies when HTTP/1.1 is in use. Also, when `serverFactory` option is specified, this option is ignored.

> ℹ️ Note: At the time of writing, only node >= v16.10.0 supports this option.

### `requestTimeout`[​](#requesttimeout "Direct link to requesttimeout")

[]()

- Default: `0` (no limit)

Defines the maximum number of milliseconds for receiving the entire request from the client. See [`server.requestTimeout` property](https://nodejs.org/dist/latest/docs/api/http.html#http_server_requesttimeout) to understand the effect of this option.

When `serverFactory` option is specified, this option is ignored. It must be set to a non-zero value (e.g. 120 seconds) to protect against potential Denial-of-Service attacks in case the server is deployed without a reverse proxy in front.

> ℹ️ Note: At the time of writing, only node >= v14.11.0 supports this option

### `handlerTimeout`[​](#handlertimeout "Direct link to handlertimeout")

[]()

- Default: `0` (no timeout)

Defines the maximum number of milliseconds allowed for processing a request through the entire route lifecycle (from routing through onRequest, parsing, validation, handler execution, and serialization). If the response is not sent within this time, a `503 Service Unavailable` error is returned and `request.signal` is aborted.

Unlike `connectionTimeout` and `requestTimeout` (which operate at the socket level), `handlerTimeout` is an application-level timeout that works correctly with HTTP keep-alive connections. It can be overridden per-route via [route options](/docs/latest/Reference/Routes/.md#routes-options). When set at both levels, the route-level value takes precedence. Routes without an explicit `handlerTimeout` inherit the server default. Once a server-level timeout is set, individual routes cannot opt out of it — they can only override it with a different positive integer.

The timeout is **cooperative**: when it fires, Fastify sends the 503 error response, but the handler's async work continues to run. Use [`request.signal`](/docs/latest/Reference/Request/.md) to detect cancellation and stop ongoing work (database queries, HTTP requests, etc.). APIs that accept a `signal` option (`fetch()`, database drivers, `stream.pipeline()`) will cancel automatically.

The timeout error (`FST_ERR_HANDLER_TIMEOUT`) is sent through the route's [error handler](/docs/latest/Reference/Routes/.md#routes-options), which can be customized per-route to change the status code or response body.

When `reply.hijack()` is called, the timeout timer is cleared — the handler takes full responsibility for the response lifecycle.

> ℹ️ Note: `handlerTimeout` does not apply to 404 handlers or custom not-found handlers set via `setNotFoundHandler()`, as they bypass the route handler lifecycle.

```
const fastify = require('fastify')({
  handlerTimeout: 10000 // 10s default for all routes
})

// Override per-route
fastify.get('/slow-report', { handlerTimeout: 120000 }, async (request) => {
  // Use request.signal for cooperative cancellation
  const data = await db.query(longQuery, { signal: request.signal })
  return data
})

// Customize the timeout response
fastify.get('/custom-timeout', {
  handlerTimeout: 5000,
  errorHandler: (error, request, reply) => {
    if (error.code === 'FST_ERR_HANDLER_TIMEOUT') {
      reply.code(504).send({ error: 'Gateway Timeout' })
    } else {
      reply.send(error)
    }
  }
}, async (request) => {
  const result = await externalService.call({ signal: request.signal })
  return result
})
```

### `bodyLimit`[​](#bodylimit "Direct link to bodylimit")

[]()

- Default: `1048576` (1MiB)

Defines the maximum payload, in bytes, the server is allowed to accept. The default body reader sends [`FST_ERR_CTP_BODY_TOO_LARGE`](/docs/latest/Reference/Errors/.md#fst_err_ctp_body_too_large) reply, if the size of the body exceeds this limit. If [`preParsing` hook](/docs/latest/Reference/Hooks/.md#preparsing) is provided, this limit is applied to the size of the stream the hook returns (i.e. the size of "decoded" body).

### `onProtoPoisoning`[​](#onprotopoisoning "Direct link to onprotopoisoning")

[]()

- Default: `'error'`

Defines what action the framework must take when parsing a JSON object with `__proto__`. This functionality is provided by [secure-json-parse](https://github.com/fastify/secure-json-parse). See [Prototype Poisoning](/docs/latest/Guides/Prototype-Poisoning/.md) for more details about prototype poisoning attacks.

Possible values are `'error'`, `'remove'`, or `'ignore'`.

### `onConstructorPoisoning`[​](#onconstructorpoisoning "Direct link to onconstructorpoisoning")

[]()

- Default: `'error'`

Defines what action the framework must take when parsing a JSON object with `constructor`. This functionality is provided by [secure-json-parse](https://github.com/fastify/secure-json-parse). See [Prototype Poisoning](/docs/latest/Guides/Prototype-Poisoning/.md) for more details about prototype poisoning attacks.

Possible values are `'error'`, `'remove'`, or `'ignore'`.

### `logger`[​](#logger "Direct link to logger")

[]()

Fastify includes built-in logging via the [Pino](https://getpino.io/) logger. This property is used to configure the internal logger instance.

The possible values this property may have are:

- Default: `false`. The logger is disabled. All logging methods will point to a null logger [abstract-logging](https://npm.im/abstract-logging) instance.

- `object`: a standard Pino [options object](https://github.com/pinojs/pino/blob/c77d8ec5ce/docs/API.md#constructor). This will be passed directly to the Pino constructor. If the following properties are not present on the object, they will be added accordingly:

  - `level`: the minimum logging level. If not set, it will be set to `'info'`.
  - `serializers`: a hash of serialization functions. By default, serializers are added for `req` (incoming request objects), `res` (outgoing response objects), and `err` (standard `Error` objects). When a log method receives an object with any of these properties then the respective serializer will be used for that property. For example:

    ```
    fastify.get('/foo', function (req, res) {
      req.log.info({req}) // log the serialized request object
      res.send('foo')
    })
    ```

    Any user-supplied serializer will override the default serializer of the corresponding property.

### `loggerInstance`[​](#loggerinstance "Direct link to loggerinstance")

[]()

- Default: `null`

A custom logger instance. The logger must be a Pino instance or conform to the Pino interface by having the following methods: `info`, `error`, `debug`, `fatal`, `warn`, `trace`, `child`. For example:

```
const pino = require('pino')();

const customLogger = {
  info: function (o, ...n) {},
  warn: function (o, ...n) {},
  error: function (o, ...n) {},
  fatal: function (o, ...n) {},
  trace: function (o, ...n) {},
  debug: function (o, ...n) {},
  child: function() {
    const child = Object.create(this);
    child.pino = pino.child(...arguments);
    return child;
  },
};

const fastify = require('fastify')({ loggerInstance: customLogger });
```

### `disableRequestLogging`[​](#disablerequestlogging "Direct link to disablerequestlogging")

[]()

- Default: `false`

When logging is enabled, Fastify will issue an `info` level log message when a request is received and when the response for that request has been sent. By setting this option to `true`, these log messages will be disabled. This allows for more flexible request start and end logging by attaching custom `onRequest` and `onResponse` hooks.

This option can also be a function that receives the Fastify request object and returns a boolean. This allows for conditional request logging based on the request properties (e.g., URL, headers, decorations).

```
const fastify = require('fastify')({
  logger: true,
  disableRequestLogging: (request) => {
    // Disable logging for health check endpoints
    return request.url === '/health' || request.url === '/ready'
  }
})
```

The other log entries that will be disabled are:

- an error log written by the default `onResponse` hook on reply callback errors
- the error and info logs written by the `defaultErrorHandler` on error management
- the info log written by the `fourOhFour` handler when a non existent route is requested

Other log messages emitted by Fastify will stay enabled, like deprecation warnings and messages emitted when requests are received while the server is closing.

```
// Examples of hooks to replicate the disabled functionality.
fastify.addHook('onRequest', (req, reply, done) => {
  req.log.info({ url: req.raw.url, id: req.id }, 'received request')
  done()
})

fastify.addHook('onResponse', (req, reply, done) => {
  req.log.info({ url: req.raw.originalUrl, statusCode: reply.raw.statusCode }, 'request completed')
  done()
})
```

### `serverFactory`[​](#serverfactory "Direct link to serverfactory")

[]()

You can pass a custom HTTP server to Fastify by using the `serverFactory` option.

`serverFactory` is a function that takes a `handler` parameter, which takes the `request` and `response` objects as parameters, and an options object, which is the same you have passed to Fastify.

```
const serverFactory = (handler, opts) => {
  const server = http.createServer((req, res) => {
    handler(req, res)
  })

  return server
}

const fastify = Fastify({ serverFactory })

fastify.get('/', (req, reply) => {
  reply.send({ hello: 'world' })
})

fastify.listen({ port: 3000 })
```

Internally Fastify uses the API of Node core HTTP server, so if you are using a custom server you must be sure to have the same API exposed. If not, you can enhance the server instance inside the `serverFactory` function before the `return` statement.

### `requestIdHeader`[​](#requestidheader "Direct link to requestidheader")

[]()

- Default: `'request-id'`

The header name used to set the request-id. See [the request-id](/docs/latest/Reference/Logging/.md#logging-request-id) section. Setting `requestIdHeader` to `true` will set the `requestIdHeader` to `"request-id"`. Setting `requestIdHeader` to a non-empty string will use the specified string as the `requestIdHeader`. By default `requestIdHeader` is set to `false` and will immediately use [genReqId](#genreqid). Setting `requestIdHeader` to an empty String (`""`) will set the requestIdHeader to `false`.

- Default: `false`

```
const fastify = require('fastify')({
  requestIdHeader: 'x-custom-id', // -> use 'X-Custom-Id' header if available
  //requestIdHeader: false, // -> always use genReqId
})
```

> ⚠ Warning: Enabling this allows any callers to set `reqId` to a value of their choosing. No validation is performed on `requestIdHeader`.

### `requestIdLogLabel`[​](#requestidloglabel "Direct link to requestidloglabel")

[]()

- Default: `'reqId'`

Defines the label used for the request identifier when logging the request.

### `genReqId`[​](#genreqid "Direct link to genreqid")

[]()

- Default: `value of 'request-id' header if provided or monotonically increasing integers`

Function for generating the request-id. It will receive the *raw* incoming request as a parameter. This function is expected to be error-free.

Especially in distributed systems, you may want to override the default ID generation behavior as shown below. For generating `UUID`s you may want to check out [hyperid](https://github.com/mcollina/hyperid).

> ℹ️ Note: `genReqId` will be not called if the header set in `requestIdHeader` is available (defaults to 'request-id').

```
let i = 0
const fastify = require('fastify')({
  genReqId: function (req) { return i++ }
})
```

### `trustProxy`[​](#trustproxy "Direct link to trustproxy")

[]()

- Default: `false`
- `true/false`: Trust all proxies (`true`) or do not trust any proxies (`false`).
- `string`: Trust only given IP/CIDR (e.g. `'127.0.0.1'`). May be a list of comma separated values (e.g. `'127.0.0.1,192.168.1.1/24'`).
- `Array<string>`: Trust only given IP/CIDR list (e.g. `['127.0.0.1']`).
- `number`: Trust the nth hop from the front-facing proxy server as the client.
- `Function`: Custom trust function that takes `address` as first argument

  ```
  function myTrustFn(address, hop) {
    return address === '1.2.3.4' || hop === 1
  }
  ```

By enabling the `trustProxy` option, Fastify will know that it is sitting behind a proxy and that the `X-Forwarded-*` header fields may be trusted, which otherwise may be easily spoofed.

```
const fastify = Fastify({ trustProxy: true })
```

For more examples, refer to the [`@fastify/proxy-addr`](https://www.npmjs.com/package/@fastify/proxy-addr) package.

You may access the `ip`, `ips`, `host` and `protocol` values on the [`request`](/docs/latest/Reference/Request/.md) object.

```
fastify.get('/', (request, reply) => {
  console.log(request.ip)
  console.log(request.ips)
  console.log(request.host)
  console.log(request.protocol)
})
```

> ℹ️ Note: If a request contains multiple `x-forwarded-host` or `x-forwarded-proto` headers, it is only the last one that is used to derive `request.hostname` and `request.protocol`.

### `pluginTimeout`[​](#plugintimeout "Direct link to plugintimeout")

[]()

- Default: `10000`

The maximum amount of time in *milliseconds* in which a plugin can load. If not, [`ready`](#ready) will complete with an `Error` with code `'ERR_AVVIO_PLUGIN_TIMEOUT'`. When set to `0`, disables this check. This controls [avvio](https://www.npmjs.com/package/avvio) 's `timeout` parameter.

### `querystringParser`[​](#querystringparser "Direct link to querystringparser")

[]()

The default query string parser that Fastify uses is a more performant fork of Node.js's core `querystring` module called [`fast-querystring`](https://github.com/anonrig/fast-querystring).

You can use this option to use a custom parser, such as [`qs`](https://www.npmjs.com/package/qs).

If you only want the keys (and not the values) to be case insensitive we recommend using a custom parser to convert only the keys to lowercase.

```
const qs = require('qs')
const fastify = require('fastify')({
  routerOptions: {
    querystringParser: str => qs.parse(str)
  }
})
```

You can also use Fastify's default parser but change some handling behavior, like the example below for case insensitive keys and values:

```
const querystring = require('fast-querystring')
const fastify = require('fastify')({
  routerOptions: {
    querystringParser: str => querystring.parse(str.toLowerCase())
  }
})
```

### `exposeHeadRoutes`[​](#exposeheadroutes "Direct link to exposeheadroutes")

[]()

- Default: `true`

Automatically creates a sibling `HEAD` route for each `GET` route defined. If you want a custom `HEAD` handler without disabling this option, make sure to define it before the `GET` route.

### `return503OnClosing`[​](#return503onclosing "Direct link to return503onclosing")

[]()

- Default: `true`

When `true`, any request arriving after [`close`](#close) has been called will receive a `503 Service Unavailable` response with `Connection: close` header (HTTP/1.1). This lets load balancers detect that the server is shutting down and stop routing traffic to it.

When `false`, requests arriving during the closing phase are routed and processed normally. They will still receive a `Connection: close` header so that clients do not attempt to reuse the connection.

### `ajv`[​](#ajv "Direct link to ajv")

[]()

Configure the Ajv v8 instance used by Fastify without providing a custom one. The default configuration is explained in the [#schema-validator](/docs/latest/Reference/Validation-and-Serialization/.md#schema-validator) section.

```
const fastify = require('fastify')({
  ajv: {
    customOptions: {
      removeAdditional: 'all' // Refer to [ajv options](https://ajv.js.org/options.html#removeadditional)
    },
    plugins: [
      require('ajv-merge-patch'),
      [require('ajv-keywords'), 'instanceof']
      // Usage: [plugin, pluginOptions] - Plugin with options
      // Usage: plugin - Plugin without options
    ],
    onCreate: (ajv) => {
      // Modify the ajv instance as you need.
      ajv.addFormat('myFormat', (data) => typeof data === 'string')
    }
  }
})
```

### `serializerOpts`[​](#serializeropts "Direct link to serializeropts")

[]()

Customize the options of the default [`fast-json-stringify`](https://github.com/fastify/fast-json-stringify#options) instance that serializes the response's payload:

```
const fastify = require('fastify')({
  serializerOpts: {
    rounding: 'ceil'
  }
})
```

### `http2SessionTimeout`[​](#http2sessiontimeout "Direct link to http2sessiontimeout")

[]()

- Default: `72000`

Set a default [timeout](https://nodejs.org/api/http2.html#http2sessionsettimeoutmsecs-callback) to every incoming HTTP/2 session in milliseconds. The session will be closed on the timeout.

This option is needed to offer a graceful "close" experience when using HTTP/2. The low default has been chosen to mitigate denial of service attacks. When the server is behind a load balancer or can scale automatically this value can be increased to fit the use case. Node core defaults this to `0`.

### `frameworkErrors`[​](#frameworkerrors "Direct link to frameworkerrors")

[]()

- Default: `null`

Fastify provides default error handlers for the most common use cases. It is possible to override one or more of those handlers with custom code using this option.

> ℹ️ Note: Only `FST_ERR_BAD_URL` and `FST_ERR_ASYNC_CONSTRAINT` are implemented at present.

```
const fastify = require('fastify')({
  frameworkErrors: function (error, req, res) {
    if (error instanceof FST_ERR_BAD_URL) {
      res.code(400)
      return res.send("Provided url is not valid")
    } else if(error instanceof FST_ERR_ASYNC_CONSTRAINT) {
      res.code(400)
      return res.send("Provided header is not valid")
    } else {
      res.send(err)
    }
  }
})
```

### `clientErrorHandler`[​](#clienterrorhandler "Direct link to clienterrorhandler")

[]()

Set a [clientErrorHandler](https://nodejs.org/api/http.html#http_event_clienterror) that listens to `error` events emitted by client connections and responds with a `400`.

It is possible to override the default `clientErrorHandler` using this option.

- Default:

```
function defaultClientErrorHandler (err, socket) {
  if (err.code === 'ECONNRESET') {
    return
  }

  const body = JSON.stringify({
    error: http.STATUS_CODES['400'],
    message: 'Client Error',
    statusCode: 400
  })
  this.log.trace({ err }, 'client error')

  if (socket.writable) {
    socket.end([
      'HTTP/1.1 400 Bad Request',
      `Content-Length: ${body.length}`,
      `Content-Type: application/json\r\n\r\n${body}`
    ].join('\r\n'))
  }
}
```

> ℹ️ Note: `clientErrorHandler` operates with raw sockets. The handler is expected to return a properly formed HTTP response that includes a status line, HTTP headers and a message body. Before attempting to write the socket, the handler should check if the socket is still writable as it may have already been destroyed.

```
const fastify = require('fastify')({
  clientErrorHandler: function (err, socket) {
    const body = JSON.stringify({
      error: {
        message: 'Client error',
        code: '400'
      }
    })

    // `this` is bound to fastify instance
    this.log.trace({ err }, 'client error')

    // the handler is responsible for generating a valid HTTP response
    socket.end([
      'HTTP/1.1 400 Bad Request',
      `Content-Length: ${body.length}`,
      `Content-Type: application/json\r\n\r\n${body}`
    ].join('\r\n'))
  }
})
```

### `rewriteUrl`[​](#rewriteurl "Direct link to rewriteurl")

[]()

Set a sync callback function that must return a string that allows rewriting URLs. This is useful when you are behind a proxy that changes the URL. Rewriting a URL will modify the `url` property of the `req` object.

Note that `rewriteUrl` is called *before* routing, it is not encapsulated and it is an instance-wide configuration.

```
// @param {object} req The raw Node.js HTTP request, not the `FastifyRequest` object.
// @this Fastify The root Fastify instance (not an encapsulated instance).
// @returns {string} The path that the request should be mapped to.
function rewriteUrl (req) {
  if (req.url === '/hi') {
    this.log.debug({ originalUrl: req.url, url: '/hello' }, 'rewrite url');
    return '/hello'
  } else {
    return req.url;
  }
}
```
