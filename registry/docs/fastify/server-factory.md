## Factory[​](#factory "Direct link to Factory")

[]()

The Fastify module exports a factory function that is used to create new `Fastify server` instances. This factory function accepts an options object which is used to customize the resulting instance. This document describes the properties available in that options object.

- [Factory](#factory)

  - [`http2`](#http2)
  - [`https`](#https)
  - [`connectionTimeout`](#connectiontimeout)
  - [`keepAliveTimeout`](#keepalivetimeout)
  - [`forceCloseConnections`](#forcecloseconnections)
  - [`maxRequestsPerSocket`](#maxrequestspersocket)
  - [`requestTimeout`](#requesttimeout)
  - [`ignoreTrailingSlash`](#ignoretrailingslash)
  - [`maxParamLength`](#maxparamlength)
  - [`bodyLimit`](#bodylimit)
  - [`onProtoPoisoning`](#onprotopoisoning)
  - [`onConstructorPoisoning`](#onconstructorpoisoning)
  - [`logger`](#logger)
  - [`disableRequestLogging`](#disablerequestlogging)
  - [`serverFactory`](#serverfactory)
  - [`jsonShorthand`](#jsonshorthand)
  - [`caseSensitive`](#casesensitive)
  - [`requestIdHeader`](#requestidheader)
  - [`requestIdLogLabel`](#requestidloglabel)
  - [`genReqId`](#genreqid)
  - [`trustProxy`](#trustproxy)
  - [`pluginTimeout`](#plugintimeout)
  - [`querystringParser`](#querystringparser)
  - [`exposeHeadRoutes`](#exposeheadroutes)
  - [`constraints`](#constraints)
  - [`return503OnClosing`](#return503onclosing)
  - [`ajv`](#ajv)
  - [`serializerOpts`](#serializeropts)
  - [`http2SessionTimeout`](#http2sessiontimeout)
  - [`frameworkErrors`](#frameworkerrors)
  - [`clientErrorHandler`](#clienterrorhandler)
  - [`rewriteUrl`](#rewriteurl)

- [Instance](#instance)

  - [Server Methods](#server-methods)

    - [server](#server)
    - [after](#after)
    - [ready](#ready)
    - [listen](#listen)
    - [getDefaultRoute](#getdefaultroute)
    - [setDefaultRoute](#setdefaultroute)
    - [routing](#routing)
    - [route](#route)
    - [close](#close)
    - [decorate\*](#decorate)
    - [register](#register)
    - [addHook](#addhook)
    - [prefix](#prefix)
    - [pluginName](#pluginname)
    - [log](#log)
    - [version](#version)
    - [inject](#inject)
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
      - [Ajv 8 as default schema validator](#ajv-8-as-default-schema-validator)
    - [setNotFoundHandler](#setnotfoundhandler)
    - [setErrorHandler](#seterrorhandler)
    - [printRoutes](#printroutes)
    - [printPlugins](#printplugins)
    - [addContentTypeParser](#addcontenttypeparser)
    - [hasContentTypeParser](#hasContentTypeParser)
    - [removeContentTypeParser](#removeContentTypeParser)
    - [removeAllContentTypeParsers](#removeAllContentTypeParsers)
    - [getDefaultJsonParser](#getdefaultjsonparser)
    - [defaultTextParser](#defaulttextparser)
    - [errorHandler](#errorhandler)
    - [initialConfig](#initialconfig)

### `http2`[​](#http2 "Direct link to http2")

[]()

If `true` Node.js core's [HTTP/2](https://nodejs.org/dist/latest-v14.x/docs/api/http2.html) module is used for binding the socket.

- Default: `false`

### `https`[​](#https "Direct link to https")

[]()

An object used to configure the server's listening socket for TLS. The options are the same as the Node.js core [`createServer` method](https://nodejs.org/dist/latest-v14.x/docs/api/https.html#https_https_createserver_options_requestlistener). When this property is `null`, the socket will not be configured for TLS.

This option also applies when the [`http2`](#factory-http2) option is set.

- Default: `null`

### `connectionTimeout`[​](#connectiontimeout "Direct link to connectiontimeout")

[]()

Defines the server timeout in milliseconds. See documentation for [`server.timeout` property](https://nodejs.org/api/http.html#http_server_timeout) to understand the effect of this option. When `serverFactory` option is specified, this option is ignored.

- Default: `0` (no timeout)

### `keepAliveTimeout`[​](#keepalivetimeout "Direct link to keepalivetimeout")

[]()

Defines the server keep-alive timeout in milliseconds. See documentation for [`server.keepAliveTimeout` property](https://nodejs.org/api/http.html#http_server_keepalivetimeout) to understand the effect of this option. This option only applies when HTTP/1 is in use. Also, when `serverFactory` option is specified, this option is ignored.

- Default: `5000` (5 seconds)

### `forceCloseConnections`[​](#forcecloseconnections "Direct link to forcecloseconnections")

[]()

When set to `true` requests with the header `connection: keep-alive` will be tracked by the server. Upon [`close`](#close), the server will iterate the current persistent connections and [destroy their sockets](https://nodejs.org/dist/latest-v16.x/docs/api/net.html#socketdestroyerror). This means the server will shutdown immediately instead of waiting for existing persistent connections to timeout first. Important: connections are not inspected to determine if requests have been completed.

- Default: `false`

### `maxRequestsPerSocket`[​](#maxrequestspersocket "Direct link to maxrequestspersocket")

[]()

Defines the maximum number of requests socket can handle before closing keep alive connection. See documentation for [`server.maxRequestsPerSocket` property](https://nodejs.org/dist/latest/docs/api/http.html#http_server_maxrequestspersocket) to understand the effect of this option. This option only applies when HTTP/1.1 is in use. Also, when `serverFactory` option is specified, this option is ignored.

> At the time of this writing, only node version greater or equal to 16.10.0 support this option. Check the Node.js documentation for availability in the version you are running.

- Default: `0` (no limit)

### `requestTimeout`[​](#requesttimeout "Direct link to requesttimeout")

[]()

Defines the maximum number of milliseconds for receiving the entire request from the client. [`server.requestTimeout` property](https://nodejs.org/dist/latest/docs/api/http.html#http_server_requesttimeout) to understand the effect of this option. Also, when `serverFactory` option is specified, this option is ignored. It must be set to a non-zero value (e.g. 120 seconds) to protect against potential Denial-of-Service attacks in case the server is deployed without a reverse proxy in front.

> At the time of this writing, only node version greater or equal to 14.11.0 support this option. Check the Node.js documentation for availability in the version you are running.

- Default: `0` (no limit)

### `ignoreTrailingSlash`[​](#ignoretrailingslash "Direct link to ignoretrailingslash")

[]()

Fastify uses [find-my-way](https://github.com/delvedor/find-my-way) to handle routing. This option may be set to `true` to ignore trailing slashes in routes. This option applies to *all* route registrations for the resulting server instance.

- Default: `false`

```
const fastify = require('fastify')({
  ignoreTrailingSlash: true
})

// registers both "/foo" and "/foo/"
fastify.get('/foo/', function (req, reply) {
  reply.send('foo')
})

// registers both "/bar" and "/bar/"
fastify.get('/bar', function (req, reply) {
  reply.send('bar')
})
```

### `maxParamLength`[​](#maxparamlength "Direct link to maxparamlength")

[]()

You can set a custom length for parameters in parametric (standard, regex, and multi) routes by using `maxParamLength` option; the default value is 100 characters.

This can be useful especially if you have some regex based route, protecting you against [DoS attacks](https://www.owasp.org/index.php/Regular_expression_Denial_of_Service_-_ReDoS).

*If the maximum length limit is reached, the not found route will be invoked.*

### `bodyLimit`[​](#bodylimit "Direct link to bodylimit")

[]()

Defines the maximum payload, in bytes, the server is allowed to accept.

- Default: `1048576` (1MiB)

### `onProtoPoisoning`[​](#onprotopoisoning "Direct link to onprotopoisoning")

[]()

Defines what action the framework must take when parsing a JSON object with `__proto__`. This functionality is provided by [secure-json-parse](https://github.com/fastify/secure-json-parse). See [Prototype Poisoning](/docs/v3.29.x/Guides/Prototype-Poisoning/.md) for more details about prototype poisoning attacks.

Possible values are `'error'`, `'remove'` and `'ignore'`.

- Default: `'error'`

### `onConstructorPoisoning`[​](#onconstructorpoisoning "Direct link to onconstructorpoisoning")

[]()

Defines what action the framework must take when parsing a JSON object with `constructor`. This functionality is provided by [secure-json-parse](https://github.com/fastify/secure-json-parse). See [Prototype Poisoning](/docs/v3.29.x/Guides/Prototype-Poisoning/.md) for more details about prototype poisoning attacks.

Possible values are `'error'`, `'remove'` and `'ignore'`.

- Default: `'error'`

### `logger`[​](#logger "Direct link to logger")

[]()

Fastify includes built-in logging via the [Pino](https://getpino.io/) logger. This property is used to configure the internal logger instance.

The possible values this property may have are:

- Default: `false`. The logger is disabled. All logging methods will point to a null logger [abstract-logging](https://npm.im/abstract-logging) instance.

- `pinoInstance`: a previously instantiated instance of Pino. The internal logger will point to this instance.

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

- `loggerInstance`: a custom logger instance. The logger must conform to the Pino interface by having the following methods: `info`, `error`, `debug`, `fatal`, `warn`, `trace`, `child`. For example:

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

  const fastify = require('fastify')({logger: customLogger});
  ```

### `disableRequestLogging`[​](#disablerequestlogging "Direct link to disablerequestlogging")

[]()

By default, when logging is enabled, Fastify will issue an `info` level log message when a request is received and when the response for that request has been sent. By setting this option to `true`, these log messages will be disabled. This allows for more flexible request start and end logging by attaching custom `onRequest` and `onResponse` hooks.

- Default: `false`

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

Please note that this setting will also disable an error log written by the default `onResponse` hook on reply callback errors.

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

fastify.listen(3000)
```

Internally Fastify uses the API of Node core HTTP server, so if you are using a custom server you must be sure to have the same API exposed. If not, you can enhance the server instance inside the `serverFactory` function before the `return` statement.

### `jsonShorthand`[​](#jsonshorthand "Direct link to jsonshorthand")

[]()

- Default: `true`

Internally, and by default, Fastify will automatically infer the root properties of JSON Schemas if it does not find valid root properties according to the JSON Schema spec. If you wish to implement your own schema validation compiler, for example: to parse schemas as JTD instead of JSON Schema, then you can explicitly set this option to `false` to make sure the schemas you receive are unmodified and are not being treated internally as JSON Schema.

```
const AjvJTD = require('ajv/dist/jtd'/* only valid for AJV v7+ */)
const ajv = new AjvJTD({
  // This would let you throw at start for invalid JTD schema objects
  allErrors: process.env.NODE_ENV === 'development'
})
const fastify = Fastify({ jsonShorthand: false })
fastify.setValidatorCompiler(({ schema }) => {
  return ajv.compile(schema)
})
fastify.post('/', {
  schema: {
    body: {
      properties: {
        foo: { type: 'uint8' }
      }
    }
  },
  handler (req, reply) { reply.send({ ok: 1 }) }
})
```

**Note: Fastify does not currently throw on invalid schemas, so if you turn this off in an existing project, you need to be careful that none of your existing schemas become invalid as a result, since they will be treated as a catch-all.**

### `caseSensitive`[​](#casesensitive "Direct link to casesensitive")

[]()

By default, value equal to `true`, routes are registered as case sensitive. That is, `/foo` is not equivalent to `/Foo`. When set to `false`, routes are registered in a fashion such that `/foo` is equivalent to `/Foo` which is equivalent to `/FOO`.

By setting `caseSensitive` to `false`, all paths will be matched as lowercase, but the route parameters or wildcards will maintain their original letter casing.

```
fastify.get('/user/:username', (request, reply) => {
  // Given the URL: /USER/NodeJS
  console.log(request.params.username) // -> 'NodeJS'
})
```

Please note that setting this option to `false` goes against [RFC3986](https://tools.ietf.org/html/rfc3986#section-6.2.2.1).

Also note, this setting will not affect query strings. If you want to change the way query strings are handled take a look at [`querystringParser`](#querystringparser).

### `requestIdHeader`[​](#requestidheader "Direct link to requestidheader")

[]()

The header name used to know the request-id. See [the request-id](/docs/v3.29.x/Reference/Logging/.md#logging-request-id) section.

- Default: `'request-id'`

### `requestIdLogLabel`[​](#requestidloglabel "Direct link to requestidloglabel")

[]()

Defines the label used for the request identifier when logging the request.

- Default: `'reqId'`

### `genReqId`[​](#genreqid "Direct link to genreqid")

[]()

Function for generating the request-id. It will receive the incoming request as a parameter.

- Default: `value of 'request-id' header if provided or monotonically increasing integers`

Especially in distributed systems, you may want to override the default ID generation behavior as shown below. For generating `UUID`s you may want to check out [hyperid](https://github.com/mcollina/hyperid)

```
let i = 0
const fastify = require('fastify')({
  genReqId: function (req) { return i++ }
})
```

**Note: genReqId will *not* be called if the header set in `requestIdHeader` is available (defaults to 'request-id').**

### `trustProxy`[​](#trustproxy "Direct link to trustproxy")

[]()

By enabling the `trustProxy` option, Fastify will know that it is sitting behind a proxy and that the `X-Forwarded-*` header fields may be trusted, which otherwise may be easily spoofed.

```
const fastify = Fastify({ trustProxy: true })
```

- Default: `false`
- `true/false`: Trust all proxies (`true`) or do not trust any proxies (`false`).
- `string`: Trust only given IP/CIDR (e.g. `'127.0.0.1'`). May be a list of comma separated values (e.g. `'127.0.0.1,192.168.1.1/24'`).
- `Array<string>`: Trust only given IP/CIDR list (e.g. `['127.0.0.1']`).
- `number`: Trust the nth hop from the front-facing proxy server as the client.
- `Function`: Custom trust function that takes `address` as first arg

  ```
  function myTrustFn(address, hop) {
    return address === '1.2.3.4' || hop === 1
  }
  ```

For more examples, refer to the [`proxy-addr`](https://www.npmjs.com/package/proxy-addr) package.

You may access the `ip`, `ips`, `hostname` and `protocol` values on the [`request`](/docs/v3.29.x/Reference/Request/.md) object.

```
fastify.get('/', (request, reply) => {
  console.log(request.ip)
  console.log(request.ips)
  console.log(request.hostname)
  console.log(request.protocol)
})
```

**Note: if a request contains multiple `x-forwarded-host` or `x-forwarded-proto` headers, it is only the last one that is used to derive `request.hostname` and `request.protocol`**

### `pluginTimeout`[​](#plugintimeout "Direct link to plugintimeout")

[]()

The maximum amount of time in *milliseconds* in which a plugin can load. If not, [`ready`](#ready) will complete with an `Error` with code `'ERR_AVVIO_PLUGIN_TIMEOUT'`.

- Default: `10000`

### `querystringParser`[​](#querystringparser "Direct link to querystringparser")

[]()

The default query string parser that Fastify uses is the Node.js's core `querystring` module.

You can change this default setting by passing the option `querystringParser` and use a custom one, such as [`qs`](https://www.npmjs.com/package/qs).

```
const qs = require('qs')
const fastify = require('fastify')({
  querystringParser: str => qs.parse(str)
})
```

You can also use Fastify's default parser but change some handling behaviour, like the example below for case insensitive keys and values:

```
const querystring = require('querystring')
const fastify = require('fastify')({
  querystringParser: str => querystring.parse(str.toLowerCase())
})
```

Note, if you only want the keys (and not the values) to be case insensitive we recommend using a custom parser to convert only the keys to lowercase.

### `exposeHeadRoutes`[​](#exposeheadroutes "Direct link to exposeheadroutes")

[]()

Automatically creates a sibling `HEAD` route for each `GET` route defined. If you want a custom `HEAD` handler without disabling this option, make sure to define it before the `GET` route.

- Default: `false`

### `constraints`[​](#constraints "Direct link to constraints")

[]()

Fastify's built in route constraints are provided by `find-my-way`, which allow constraining routes by `version` or `host`. You are able to add new constraint strategies, or override the built in strategies by providing a `constraints` object with strategies for `find-my-way`. You can find more information on constraint strategies in the [find-my-way](https://github.com/delvedor/find-my-way) documentation.

```
const customVersionStrategy = {
  storage: function () {
    let versions = {}
    return {
      get: (version) => { return versions[version] || null },
      set: (version, store) => { versions[version] = store },
      del: (version) => { delete versions[version] },
      empty: () => { versions = {} }
    }
  },
  deriveVersion: (req, ctx) => {
    return req.headers['accept']
  }
}

const fastify = require('fastify')({
  constraints: {
    version: customVersionStrategy
  }
})
```

### `return503OnClosing`[​](#return503onclosing "Direct link to return503onclosing")

[]()

Returns 503 after calling `close` server method. If `false`, the server routes the incoming request as usual.

- Default: `true`

### `ajv`[​](#ajv "Direct link to ajv")

[]()

Configure the Ajv v6 instance used by Fastify without providing a custom one.

- Default:

```
{
  customOptions: {
    removeAdditional: true,
    useDefaults: true,
    coerceTypes: true,
    allErrors: false,
    nullable: true
  },
  plugins: []
}
```

```
const fastify = require('fastify')({
  ajv: {
    customOptions: {
      nullable: false // Refer to [ajv options](https://github.com/ajv-validator/ajv/tree/v6#options)
    },
    plugins: [
      require('ajv-merge-patch'),
      [require('ajv-keywords'), 'instanceof']
      // Usage: [plugin, pluginOptions] - Plugin with options
      // Usage: plugin - Plugin without options
    ]
  }
})
```

### `serializerOpts`[​](#serializeropts "Direct link to serializeropts")

[]()

Customize the options of the default [`fast-json-stringify`](https://github.com/fastify/fast-json-stringify#options) instance that serialize the response's payload:

```
const fastify = require('fastify')({
  serializerOpts: {
    rounding: 'ceil'
  }
})
```

### `http2SessionTimeout`[​](#http2sessiontimeout "Direct link to http2sessiontimeout")

[]()

Set a default [timeout](https://nodejs.org/api/http2.html#http2_http2session_settimeout_msecs_callback) to every incoming HTTP/2 session. The session will be closed on the timeout. Default: `5000` ms.

Note that this is needed to offer the graceful "close" experience when using HTTP/2. The low default has been chosen to mitigate denial of service attacks. When the server is behind a load balancer or can scale automatically this value can be increased to fit the use case. Node core defaults this to `0`. \`

### `frameworkErrors`[​](#frameworkerrors "Direct link to frameworkerrors")

[]()

- Default: `null`

Fastify provides default error handlers for the most common use cases. It is possible to override one or more of those handlers with custom code using this option.

*Note: Only `FST_ERR_BAD_URL` is implemented at the moment.*

```
const fastify = require('fastify')({
  frameworkErrors: function (error, req, res) {
    if (error instanceof FST_ERR_BAD_URL) {
      res.code(400)
      return res.send("Provided url is not valid")
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
    socket.end(`HTTP/1.1 400 Bad Request\r\nContent-Length: ${body.length}\r\nContent-Type: application/json\r\n\r\n${body}`)
  }
}
```

*Note: `clientErrorHandler` operates with raw socket. The handler is expected to return a properly formed HTTP response that includes a status line, HTTP headers and a message body. Before attempting to write the socket, the handler should check if the socket is still writable as it may have already been destroyed.*

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
    socket.end(`HTTP/1.1 400 Bad Request\r\nContent-Length: ${body.length}\r\nContent-Type: application/json\r\n\r\n${body}`)
  }
})
```

### `rewriteUrl`[​](#rewriteurl "Direct link to rewriteurl")

[]()

Set a sync callback function that must return a string that allows rewriting URLs.

> Rewriting a URL will modify the `url` property of the `req` object

```
function rewriteUrl (req) { // req is the Node.js HTTP request
  return req.url === '/hi' ? '/hello' : req.url;
}
```

Note that `rewriteUrl` is called *before* routing, it is not encapsulated and it is an instance-wide configuration.
