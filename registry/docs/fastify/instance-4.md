## Instance[​](#instance "Direct link to Instance")

### Server Methods[​](#server-methods "Direct link to Server Methods")

#### server[​](#server "Direct link to server")

[]()

`fastify.server`: The Node core [server](https://nodejs.org/api/http.html#http_class_http_server) object as returned by the [**`Fastify factory function`**](#factory).

> ⚠ Warning: If utilized improperly, certain Fastify features could be disrupted. It is recommended to only use it for attaching listeners.

#### after[​](#after "Direct link to after")

[]()

Invoked when the current plugin and all the plugins that have been registered within it have finished loading. It is always executed before the method `fastify.ready`.

```
fastify
  .register((instance, opts, done) => {
    console.log('Current plugin')
    done()
  })
  .after(err => {
    console.log('After current plugin')
  })
  .register((instance, opts, done) => {
    console.log('Next plugin')
    done()
  })
  .ready(err => {
    console.log('Everything has been loaded')
  })
```

In case `after()` is called without a function, it returns a `Promise`:

```
fastify.register(async (instance, opts) => {
  console.log('Current plugin')
})

await fastify.after()
console.log('After current plugin')

fastify.register(async (instance, opts) => {
  console.log('Next plugin')
})

await fastify.ready()

console.log('Everything has been loaded')
```

#### ready[​](#ready "Direct link to ready")

[]()

Function called when all the plugins have been loaded. It takes an error parameter if something went wrong.

```
fastify.ready(err => {
  if (err) throw err
})
```

If it is called without any arguments, it will return a `Promise`:

```
fastify.ready().then(() => {
  console.log('successfully booted!')
}, (err) => {
  console.log('an error happened', err)
})
```

#### listen[​](#listen "Direct link to listen")

[]()

Starts the server and internally waits for the `.ready()` event. The signature is `.listen([options][, callback])`. Both the `options` object and the `callback` parameters extend the [Node.js core](https://nodejs.org/api/net.html#serverlistenoptions-callback) options object. Thus, all core options are available with the following additional Fastify specific options:

### `listenTextResolver`[​](#listentextresolver "Direct link to listentextresolver")

[]()

Set an optional resolver for the text to log after server has been successfully started. It is possible to override the default `Server listening at [address]` log entry using this option.

```
server.listen({
  port: 9080,
  listenTextResolver: (address) => { return `Prometheus metrics server is listening at ${address}` }
})
```

By default, the server will listen on the address(es) resolved by `localhost` when no specific host is provided. If listening on any available interface is desired, then specifying `0.0.0.0` for the address will listen on all IPv4 addresses. The address argument provided above will then return the first such IPv4 address. The following table details the possible values for `host` when targeting `localhost`, and what the result of those values for `host` will be.

| Host                                                                              | IPv4 | IPv6 |
| --------------------------------------------------------------------------------- | ---- | ---- |
| `::`                                                                              | ✅\* | ✅   |
| `::` + [`ipv6Only`](https://nodejs.org/api/net.html#serverlistenoptions-callback) | 🚫   | ✅   |
| `0.0.0.0`                                                                         | ✅   | 🚫   |
| `localhost`                                                                       | ✅   | ✅   |
| `127.0.0.1`                                                                       | ✅   | 🚫   |
| `::1`                                                                             | 🚫   | ✅   |

\* Using `::` for the address will listen on all IPv6 addresses and, depending on OS, may also listen on [all IPv4 addresses](https://nodejs.org/api/net.html#serverlistenport-host-backlog-callback).

Be careful when deciding to listen on all interfaces; it comes with inherent [security risks](https://web.archive.org/web/20170831174611/https://snyk.io/blog/mongodb-hack-and-secure-defaults/).

The default is to listen on `port: 0` (which picks the first available open port) and `host: 'localhost'`:

```
fastify.listen((err, address) => {
  if (err) {
    fastify.log.error(err)
    process.exit(1)
  }
})
```

Specifying an address is also supported:

```
fastify.listen({ port: 3000, host: '127.0.0.1' }, (err, address) => {
  if (err) {
    fastify.log.error(err)
    process.exit(1)
  }
})
```

If no callback is provided a Promise is returned:

```
fastify.listen({ port: 3000 })
  .then((address) => console.log(`server listening on ${address}`))
  .catch(err => {
    console.log('Error starting server:', err)
    process.exit(1)
  })
```

When deploying to a Docker, and potentially other, containers, it is advisable to listen on `0.0.0.0` because they do not default to exposing mapped ports to `localhost`:

```
fastify.listen({ port: 3000, host: '0.0.0.0' }, (err, address) => {
  if (err) {
    fastify.log.error(err)
    process.exit(1)
  }
})
```

If the `port` is omitted (or is set to zero), a random available port is automatically chosen (available via `fastify.server.address().port`).

The default options of listen are:

```
fastify.listen({
  port: 0,
  host: 'localhost',
  exclusive: false,
  readableAll: false,
  writableAll: false,
  ipv6Only: false
}, (err) => {})
```

#### addresses[​](#addresses "Direct link to addresses")

[]()

This method returns an array of addresses that the server is listening on. If you call it before `listen()` is called or after the `close()` function, it will return an empty array.

```
await fastify.listen({ port: 8080 })
const addresses = fastify.addresses()
// [
//   { port: 8080, family: 'IPv6', address: '::1' },
//   { port: 8080, family: 'IPv4', address: '127.0.0.1' }
// ]
```

Note that the array contains the `fastify.server.address()` too.

#### routing[​](#routing "Direct link to routing")

[]()

Method to access the `lookup` method of the internal router and match the request to the appropriate handler:

```
fastify.routing(req, res)
```

#### route[​](#route "Direct link to route")

[]()

Method to add routes to the server, it also has shorthand functions, check [here](/docs/v5.2.x/Reference/Routes/.md).

#### hasRoute[​](#hasroute "Direct link to hasRoute")

[]()

Method to check if a route is already registered to the internal router. It expects an object as the payload. `url` and `method` are mandatory fields. It is possible to also specify `constraints`. The method returns `true` if the route is registered or `false` if not.

```
const routeExists = fastify.hasRoute({
  url: '/',
  method: 'GET',
  constraints: { version: '1.0.0' } // optional
})

if (routeExists === false) {
  // add route
}
```

#### findRoute[​](#findroute "Direct link to findRoute")

[]()

Method to retrieve a route already registered to the internal router. It expects an object as the payload. `url` and `method` are mandatory fields. It is possible to also specify `constraints`. The method returns a route object or `null` if the route cannot be found.

```
const route = fastify.findRoute({
  url: '/artists/:artistId',
  method: 'GET',
  constraints: { version: '1.0.0' } // optional
})

if (route !== null) {
  // perform some route checks
  console.log(route.params)   // `{artistId: ':artistId'}`
}
```

#### close[​](#close "Direct link to close")

[]()

`fastify.close(callback)`: call this function to close the server instance and run the [`'onClose'`](/docs/v5.2.x/Reference/Hooks/.md#on-close) hook.

Calling `close` will also cause the server to respond to every new incoming request with a `503` error and destroy that request. See [`return503OnClosing` flags](#factory-return-503-on-closing) for changing this behavior.

If it is called without any arguments, it will return a Promise:

```
fastify.close().then(() => {
  console.log('successfully closed!')
}, (err) => {
  console.log('an error happened', err)
})
```

#### decorate\*[​](#decorate "Direct link to decorate*")

[]()

Function useful if you need to decorate the fastify instance, Reply or Request, check [here](/docs/v5.2.x/Reference/Decorators/.md).

#### register[​](#register "Direct link to register")

[]()

Fastify allows the user to extend its functionality with plugins. A plugin can be a set of routes, a server decorator, or whatever, check [here](/docs/v5.2.x/Reference/Plugins/.md).

#### addHook[​](#addhook "Direct link to addHook")

[]()

Function to add a specific hook in the lifecycle of Fastify, check [here](/docs/v5.2.x/Reference/Hooks/.md).

#### prefix[​](#prefix "Direct link to prefix")

[]()

The full path that will be prefixed to a route.

Example:

```
fastify.register(function (instance, opts, done) {
  instance.get('/foo', function (request, reply) {
    // Will log "prefix: /v1"
    request.log.info('prefix: %s', instance.prefix)
    reply.send({ prefix: instance.prefix })
  })

  instance.register(function (instance, opts, done) {
    instance.get('/bar', function (request, reply) {
      // Will log "prefix: /v1/v2"
      request.log.info('prefix: %s', instance.prefix)
      reply.send({ prefix: instance.prefix })
    })

    done()
  }, { prefix: '/v2' })

  done()
}, { prefix: '/v1' })
```

#### pluginName[​](#pluginname "Direct link to pluginName")

[]()

Name of the current plugin. The root plugin is called `'fastify'`. There are different ways to define a name (in order).

1. If you use [fastify-plugin](https://github.com/fastify/fastify-plugin) the metadata `name` is used.
2. If the exported plugin has the `Symbol.for('fastify.display-name')` property, then the value of that property is used. Example: `pluginFn[Symbol.for('fastify.display-name')] = "Custom Name"`
3. If you `module.exports` a plugin the filename is used.
4. If you use a regular [function declaration](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Functions#Defining_functions) the function name is used.

*Fallback*: The first two lines of your plugin will represent the plugin name. Newlines are replaced by `--`. This will help to identify the root cause when you deal with many plugins.

> ⚠ Warning: If you have to deal with nested plugins, the name differs with the usage of the [fastify-plugin](https://github.com/fastify/fastify-plugin) because no new scope is created and therefore we have no place to attach contextual data. In that case, the plugin name will represent the boot order of all involved plugins in the format of `fastify -> plugin-A -> plugin-B`.

#### hasPlugin[​](#hasplugin "Direct link to hasPlugin")

[]()

Method to check if a specific plugin has been registered. Relies on the plugin metadata name. Returns `true` if the plugin is registered. Otherwise, returns `false`.

```
const fastify = require('fastify')()
fastify.register(require('@fastify/cookie'), {
  secret: 'my-secret',
  parseOptions: {}
})

fastify.ready(() => {
  fastify.hasPlugin('@fastify/cookie') // true
})
```

### listeningOrigin[​](#listeningorigin "Direct link to listeningOrigin")

[]()

The current origin the server is listening to. For example, a TCP socket based server returns a base address like `http://127.0.0.1:3000`, and a Unix socket server will return the socket path, e.g. `fastify.temp.sock`.

#### log[​](#log "Direct link to log")

[]()

The logger instance, check [here](/docs/v5.2.x/Reference/Logging/.md).

#### version[​](#version "Direct link to version")

[]()

Fastify version of the instance. Used for plugin support. See [Plugins](/docs/v5.2.x/Reference/Plugins/.md#handle-the-scope) for information on how the version is used by plugins.

#### inject[​](#inject "Direct link to inject")

[]()

Fake HTTP injection (for testing purposes) [here](/docs/v5.2.x/Guides/Testing/.md#benefits-of-using-fastifyinject).

#### addHttpMethod[​](#addhttpmethod "Direct link to addHttpMethod")

[]()

Fastify supports the `GET`, `HEAD`, `TRACE`, `DELETE`, `OPTIONS`, `PATCH`, `PUT` and `POST` HTTP methods by default. The `addHttpMethod` method allows to add any non standard HTTP methods to the server that are [supported by Node.js](https://nodejs.org/api/http.html#httpmethods).

```
// Add a new HTTP method called 'MKCOL' that supports a request body
fastify.addHttpMethod('MKCOL', { hasBody: true,  })

// Add a new HTTP method called 'COPY' that does not support a request body
fastify.addHttpMethod('COPY')
```

After calling `addHttpMethod`, it is possible to use the route shorthand methods to define routes for the new HTTP method:

```
fastify.addHttpMethod('MKCOL', { hasBody: true })
fastify.mkcol('/', (req, reply) => {
  // Handle the 'MKCOL' request
})
```

#### addSchema[​](#addschema "Direct link to addSchema")

[]()

`fastify.addSchema(schemaObj)`, adds a JSON schema to the Fastify instance. This allows you to reuse it everywhere in your application just by using the standard `$ref` keyword.

To learn more, read the [Validation and Serialization](/docs/v5.2.x/Reference/Validation-and-Serialization/.md) documentation.

#### getSchemas[​](#getschemas "Direct link to getSchemas")

[]()

`fastify.getSchemas()`, returns a hash of all schemas added via `.addSchema`. The keys of the hash are the `$id`s of the JSON Schema provided.

#### getSchema[​](#getschema "Direct link to getSchema")

[]()

`fastify.getSchema(id)`, return the JSON schema added with `.addSchema` and the matching `id`. It returns `undefined` if it is not found.

#### setReplySerializer[​](#setreplyserializer "Direct link to setReplySerializer")

[]()

Set the reply serializer for all the routes. This will be used as default if a [Reply.serializer(func)](/docs/v5.2.x/Reference/Reply/.md#serializerfunc) has not been set. The handler is fully encapsulated, so different plugins can set different error handlers. Note: the function parameter is called only for status `2xx`. Check out the [`setErrorHandler`](#seterrorhandler) for errors.

```
fastify.setReplySerializer(function (payload, statusCode){
  // serialize the payload with a sync function
  return `my serialized ${statusCode} content: ${payload}`
})
```

#### setValidatorCompiler[​](#setvalidatorcompiler "Direct link to setValidatorCompiler")

[]()

Set the schema validator compiler for all routes. See [#schema-validator](/docs/v5.2.x/Reference/Validation-and-Serialization/.md#schema-validator).

#### setSchemaErrorFormatter[​](#setschemaerrorformatter "Direct link to setSchemaErrorFormatter")

[]()

Set the schema error formatter for all routes. See [#error-handling](/docs/v5.2.x/Reference/Validation-and-Serialization/.md#schemaerrorformatter).

#### setSerializerCompiler[​](#setserializercompiler "Direct link to setSerializerCompiler")

[]()

Set the schema serializer compiler for all routes. See [#schema-serializer](/docs/v5.2.x/Reference/Validation-and-Serialization/.md#schema-serializer).

> 🛈 Note: [`setReplySerializer`](#set-reply-serializer) has priority if set!

#### validatorCompiler[​](#validatorcompiler "Direct link to validatorCompiler")

[]()

This property can be used to get the schema validator. If not set, it will be `null` until the server starts, then it will be a function with the signature `function ({ schema, method, url, httpPart })` that returns the input `schema` compiled to a function for validating data. The input `schema` can access all the shared schemas added with [`.addSchema`](#add-schema) function.

#### serializerCompiler[​](#serializercompiler "Direct link to serializerCompiler")

[]()

This property can be used to get the schema serializer. If not set, it will be `null` until the server starts, then it will be a function with the signature `function ({ schema, method, url, httpPart })` that returns the input `schema` compiled to a function for validating data. The input `schema` can access all the shared schemas added with [`.addSchema`](#add-schema) function.

#### schemaErrorFormatter[​](#schemaerrorformatter "Direct link to schemaErrorFormatter")

[]()

This property can be used to set a function to format errors that happen while the `validationCompiler` fails to validate the schema. See [#error-handling](/docs/v5.2.x/Reference/Validation-and-Serialization/.md#schemaerrorformatter).

#### schemaController[​](#schemacontroller "Direct link to schemaController")

[]()

This property can be used to fully manage:

- `bucket`: where the schemas of your application will be stored
- `compilersFactory`: what module must compile the JSON schemas

It can be useful when your schemas are stored in another data structure that is unknown to Fastify.

Another use case is to tweak all the schemas processing. Doing so it is possible to use Ajv v8 JTD or Standalone feature. To use such as JTD or the Standalone mode, refers to the [`@fastify/ajv-compiler` documentation](https://github.com/fastify/ajv-compiler#usage).

```
const fastify = Fastify({
  schemaController: {
    /**
     * This factory is called whenever `fastify.register()` is called.
     * It may receive as input the schemas of the parent context if some schemas have been added.
     * @param {object} parentSchemas these schemas will be returned by the
     * `getSchemas()` method function of the returned `bucket`.
     */
    bucket: function factory (parentSchemas) {
      return {
        add (inputSchema) {
          // This function must store the schema added by the user.
          // This function is invoked when `fastify.addSchema()` is called.
        },
        getSchema (schema$id) {
          // This function must return the raw schema requested by the `schema$id`.
          // This function is invoked when `fastify.getSchema(id)` is called.
          return aSchema
        },
        getSchemas () {
          // This function must return all the schemas referenced by the routes schemas' $ref
          // It must return a JSON where the property is the schema `$id` and the value is the raw JSON Schema.
          const allTheSchemaStored = {
            'schema$id1': schema1,
            'schema$id2': schema2
          }
          return allTheSchemaStored
        }
      }
    },

    /**
     * The compilers factory lets you fully control the validator and serializer
     * in the Fastify's lifecycle, providing the encapsulation to your compilers.
     */
    compilersFactory: {
      /**
       * This factory is called whenever a new validator instance is needed.
       * It may be called whenever `fastify.register()` is called only if new schemas have been added to the
       * encapsulation context.
       * It may receive as input the schemas of the parent context if some schemas have been added.
       * @param {object} externalSchemas these schemas will be returned by the
       * `bucket.getSchemas()`. Needed to resolve the external references $ref.
       * @param {object} ajvServerOption the server `ajv` options to build your compilers accordingly
       */
      buildValidator: function factory (externalSchemas, ajvServerOption) {
        // This factory function must return a schema validator compiler.
        // See [#schema-validator](./Validation-and-Serialization.md#schema-validator) for details.
        const yourAjvInstance = new Ajv(ajvServerOption.customOptions)
        return function validatorCompiler ({ schema, method, url, httpPart }) {
          return yourAjvInstance.compile(schema)
        }
      },

      /**
       * This factory is called whenever a new serializer instance is needed.
       * It may be called whenever `fastify.register()` is called only if new schemas have been added to the
       * encapsulation context.
       * It may receive as input the schemas of the parent context if some schemas have been added.
       * @param {object} externalSchemas these schemas will be returned by the
       * `bucket.getSchemas()`. Needed to resolve the external references $ref.
       * @param {object} serializerOptsServerOption the server `serializerOpts`
       * options to build your compilers accordingly
       */
      buildSerializer: function factory (externalSchemas, serializerOptsServerOption) {
        // This factory function must return a schema serializer compiler.
        // See [#schema-serializer](./Validation-and-Serialization.md#schema-serializer) for details.
        return function serializerCompiler ({ schema, method, url, httpStatus, contentType }) {
          return data => JSON.stringify(data)
        }
      }
    }
  }
});
```

#### setNotFoundHandler[​](#setnotfoundhandler "Direct link to setNotFoundHandler")

[]()

`fastify.setNotFoundHandler(handler(request, reply))`: set the 404 handler. This call is encapsulated by prefix, so different plugins can set different not found handlers if a different [`prefix` option](/docs/v5.2.x/Reference/Plugins/.md#route-prefixing-option) is passed to `fastify.register()`. The handler is treated as a regular route handler so requests will go through the full [Fastify lifecycle](/docs/v5.2.x/Reference/Lifecycle/.md#lifecycle). *async-await* is supported as well.

You can also register [`preValidation`](/docs/v5.2.x/Reference/Hooks/.md#route-hooks) and [`preHandler`](/docs/v5.2.x/Reference/Hooks/.md#route-hooks) hooks for the 404 handler.

> 🛈 Note: The `preValidation` hook registered using this method will run for a route that Fastify does not recognize and **not** when a route handler manually calls [`reply.callNotFound`](/docs/v5.2.x/Reference/Reply/.md#call-not-found). In which case, only preHandler will be run.

```
fastify.setNotFoundHandler({
  preValidation: (req, reply, done) => {
    // your code
    done()
  },
  preHandler: (req, reply, done) => {
    // your code
    done()
  }
}, function (request, reply) {
    // Default not found handler with preValidation and preHandler hooks
})

fastify.register(function (instance, options, done) {
  instance.setNotFoundHandler(function (request, reply) {
    // Handle not found request without preValidation and preHandler hooks
    // to URLs that begin with '/v1'
  })
  done()
}, { prefix: '/v1' })
```

Fastify calls setNotFoundHandler to add a default 404 handler at startup before plugins are registered. If you would like to augment the behavior of the default 404 handler, for example with plugins, you can call setNotFoundHandler with no arguments `fastify.setNotFoundHandler()` within the context of these registered plugins.

> 🛈 Note: Some config properties from the request object will be undefined inside the custom not found handler. E.g.: `request.routerPath`, `routerMethod` and `context.config`. This method design goal is to allow calling the common not found route. To return a per-route customized 404 response, you can do it in the response itself.

#### setErrorHandler[​](#seterrorhandler "Direct link to setErrorHandler")

[]()

`fastify.setErrorHandler(handler(error, request, reply))`: Set a function that will be called whenever an error happens. The handler is bound to the Fastify instance and is fully encapsulated, so different plugins can set different error handlers. *async-await* is supported as well.

If the error `statusCode` is less than 400, Fastify will automatically set it to 500 before calling the error handler.

`setErrorHandler` will ***not*** catch:

- errors thrown in an `onResponse` hook because the response has already been sent to the client. Use the `onSend` hook instead.
- not found (404) errors. Use [`setNotFoundHandler`](#set-not-found-handler) instead.

```
fastify.setErrorHandler(function (error, request, reply) {
  // Log error
  this.log.error(error)
  // Send error response
  reply.status(409).send({ ok: false })
})
```

Fastify is provided with a default function that is called if no error handler is set. It can be accessed using `fastify.errorHandler` and it logs the error with respect to its `statusCode`.

```
const statusCode = error.statusCode
if (statusCode >= 500) {
  log.error(error)
} else if (statusCode >= 400) {
  log.info(error)
} else {
  log.error(error)
}
```

#### setChildLoggerFactory[​](#setchildloggerfactory "Direct link to setChildLoggerFactory")

[]()

`fastify.setChildLoggerFactory(factory(logger, bindings, opts, rawReq))`: Set a function that will be called when creating a child logger instance for each request which allows for modifying or adding child logger bindings and logger options, or returning a custom child logger implementation.

Child logger bindings have a performance advantage over per-log bindings because they are pre-serialized by Pino when the child logger is created.

The first parameter is the parent logger instance, followed by the default bindings and logger options which should be passed to the child logger, and finally the raw request (not a Fastify request object). The function is bound with `this` being the Fastify instance.

For example:

```
const fastify = require('fastify')({
  childLoggerFactory: function (logger, bindings, opts, rawReq) {
    // Calculate additional bindings from the request if needed
    bindings.traceContext = rawReq.headers['x-cloud-trace-context']
    return logger.child(bindings, opts)
  }
})
```

The handler is bound to the Fastify instance and is fully encapsulated, so different plugins can set different logger factories.

#### setGenReqId[​](#setgenreqid "Direct link to setGenReqId")

[]()

`fastify.setGenReqId(function (rawReq))` Synchronous function for setting the request-id for additional Fastify instances. It will receive the *raw* incoming request as a parameter. The provided function should not throw an Error in any case.

Especially in distributed systems, you may want to override the default ID generation behavior to handle custom ways of generating different IDs in order to handle different use cases. Such as observability or webhooks plugins.

For example:

```
const fastify = require('fastify')({
  genReqId: (req) => {
    return 'base'
  }
})

fastify.register((instance, opts, done) => {
  instance.setGenReqId((req) => {
    // custom request ID for `/webhooks`
    return 'webhooks-id'
  })
  done()
}, { prefix: '/webhooks' })

fastify.register((instance, opts, done) => {
  instance.setGenReqId((req) => {
    // custom request ID for `/observability`
    return 'observability-id'
  })
  done()
}, { prefix: '/observability' })
```

The handler is bound to the Fastify instance and is fully encapsulated, so different plugins can set a different request ID.

#### addConstraintStrategy[​](#addconstraintstrategy "Direct link to addConstraintStrategy")

[]()

Function to add a custom constraint strategy. To register a new type of constraint, you must add a new constraint strategy that knows how to match values to handlers, and that knows how to get the constraint value from a request.

Add a custom constraint strategy using the `fastify.addConstraintStrategy` method:

```
const customResponseTypeStrategy = {
  // strategy name for referencing in the route handler `constraints` options
  name: 'accept',
  // storage factory for storing routes in the find-my-way route tree
  storage: function () {
    let handlers = {}
    return {
      get: (type) => { return handlers[type] || null },
      set: (type, store) => { handlers[type] = store }
    }
  },
  // function to get the value of the constraint from each incoming request
  deriveConstraint: (req, ctx) => {
    return req.headers['accept']
  },
  // optional flag marking if handlers without constraints can match requests that have a value for this constraint
  mustMatchWhenDerived: true
}

const router = Fastify();
router.addConstraintStrategy(customResponseTypeStrategy);
```

#### hasConstraintStrategy[​](#hasconstraintstrategy "Direct link to hasConstraintStrategy")

[]()

The `fastify.hasConstraintStrategy(strategyName)` checks if there already exists a custom constraint strategy with the same name.

#### printRoutes[​](#printroutes "Direct link to printRoutes")

[]()

`fastify.printRoutes()`: Fastify router builds a tree of routes for each HTTP method. If you call the prettyPrint without specifying an HTTP method, it will merge all the trees into one and print it. The merged tree doesn't represent the internal router structure. **Do not use it for debugging.**

*Remember to call it inside or after a `ready` call.*

```
fastify.get('/test', () => {})
fastify.get('/test/hello', () => {})
fastify.get('/testing', () => {})
fastify.get('/testing/:param', () => {})
fastify.put('/update', () => {})

fastify.ready(() => {
  console.log(fastify.printRoutes())
  // └── /
  //     ├── test (GET)
  //     │   ├── /hello (GET)
  //     │   └── ing (GET)
  //     │       └── /
  //     │           └── :param (GET)
  //     └── update (PUT)
})
```

If you want to print the internal router tree, you should specify the `method` param. Printed tree will represent the internal router structure. **You can use it for debugging.**

```
  console.log(fastify.printRoutes({ method: 'GET' }))
  // └── /
  //     └── test (GET)
  //         ├── /hello (GET)
  //         └── ing (GET)
  //             └── /
  //                 └── :param (GET)

  console.log(fastify.printRoutes({ method: 'PUT' }))
  // └── /
  //     └── update (PUT)
```

`fastify.printRoutes({ commonPrefix: false })` will print compressed trees. This may be useful when you have a large number of routes with common prefixes. It doesn't represent the internal router structure. **Do not use it for debugging.**

```
  console.log(fastify.printRoutes({ commonPrefix: false }))
  // ├── /test (GET)
  // │   ├── /hello (GET)
  // │   └── ing (GET)
  // │       └── /:param (GET)
  // └── /update (PUT)
```

`fastify.printRoutes({ includeMeta: (true | []) })` will display properties from the `route.store` object for each displayed route. This can be an `array` of keys (e.g. `['onRequest', Symbol('key')]`), or `true` to display all properties. A shorthand option, `fastify.printRoutes({ includeHooks: true })` will include all [hooks](/docs/v5.2.x/Reference/Hooks/.md).

```
  fastify.get('/test', () => {})
  fastify.get('/test/hello', () => {})

  const onTimeout = () => {}

  fastify.addHook('onRequest', () => {})
  fastify.addHook('onTimeout', onTimeout)

  console.log(fastify.printRoutes({ includeHooks: true, includeMeta: ['errorHandler'] }))
  // └── /
  //     └── test (GET)
  //         • (onTimeout) ["onTimeout()"]
  //         • (onRequest) ["anonymous()"]
  //         • (errorHandler) "defaultErrorHandler()"
  //         test (HEAD)
  //         • (onTimeout) ["onTimeout()"]
  //         • (onRequest) ["anonymous()"]
  //         • (onSend) ["headRouteOnSendHandler()"]
  //         • (errorHandler) "defaultErrorHandler()"
  //         └── /hello (GET)
  //             • (onTimeout) ["onTimeout()"]
  //             • (onRequest) ["anonymous()"]
  //             • (errorHandler) "defaultErrorHandler()"
  //             /hello (HEAD)
  //             • (onTimeout) ["onTimeout()"]
  //             • (onRequest) ["anonymous()"]
  //             • (onSend) ["headRouteOnSendHandler()"]
  //             • (errorHandler) "defaultErrorHandler()"

  console.log(fastify.printRoutes({ includeHooks: true }))
  // └── /
  //     └── test (GET)
  //         • (onTimeout) ["onTimeout()"]
  //         • (onRequest) ["anonymous()"]
  //         test (HEAD)
  //         • (onTimeout) ["onTimeout()"]
  //         • (onRequest) ["anonymous()"]
  //         • (onSend) ["headRouteOnSendHandler()"]
  //         └── /hello (GET)
  //             • (onTimeout) ["onTimeout()"]
  //             • (onRequest) ["anonymous()"]
  //             /hello (HEAD)
  //             • (onTimeout) ["onTimeout()"]
  //             • (onRequest) ["anonymous()"]
  //             • (onSend) ["headRouteOnSendHandler()"]
```

#### printPlugins[​](#printplugins "Direct link to printPlugins")

[]()

`fastify.printPlugins()`: Prints the representation of the internal plugin tree used by the avvio, useful for debugging require order issues.

*Remember to call it inside or after a `ready` call.*

```
fastify.register(async function foo (instance) {
  instance.register(async function bar () {})
})
fastify.register(async function baz () {})

fastify.ready(() => {
  console.error(fastify.printPlugins())
  // will output the following to stderr:
  // └── root
  //     ├── foo
  //     │   └── bar
  //     └── baz
})
```

#### addContentTypeParser[​](#addcontenttypeparser "Direct link to addContentTypeParser")

[]()

`fastify.addContentTypeParser(content-type, options, parser)` is used to pass a custom parser for a given content type. Useful for adding parsers for custom content types, e.g. `text/json, application/vnd.oasis.opendocument.text`. `content-type` can be a string, string array or RegExp.

```
// The two arguments passed to getDefaultJsonParser are for ProtoType poisoning
// and Constructor Poisoning configuration respectively. The possible values are
// 'ignore', 'remove', 'error'. ignore  skips all validations and it is similar
// to calling JSON.parse() directly. See the
// [`secure-json-parse` documentation](https://github.com/fastify/secure-json-parse#api) for more information.

fastify.addContentTypeParser('text/json', { asString: true }, fastify.getDefaultJsonParser('ignore', 'ignore'))
```

#### hasContentTypeParser[​](#hascontenttypeparser "Direct link to hasContentTypeParser")

[]()

`fastify.hasContentTypeParser(contentType)` is used to check whether there is a content type parser in the current context for the specified content type.

```
fastify.hasContentTypeParser('text/json')

fastify.hasContentTypeParser(/^.+\/json$/)
```

#### removeContentTypeParser[​](#removecontenttypeparser "Direct link to removeContentTypeParser")

[]()

`fastify.removeContentTypeParser(contentType)` is used to remove content type parsers in the current context. This method allows for example to remove the both built-in parsers for `application/json` and `text/plain`.

```
fastify.removeContentTypeParser('application/json')

fastify.removeContentTypeParser(['application/json', 'text/plain'])
```

#### removeAllContentTypeParsers[​](#removeallcontenttypeparsers "Direct link to removeAllContentTypeParsers")

[]()

The `fastify.removeAllContentTypeParsers()` method allows all content type parsers in the current context to be removed. A use case of this method is the implementation of catch-all content type parser. Before adding this parser with `fastify.addContentTypeParser()` one could call the `removeAllContentTypeParsers` method.

For more details about the usage of the different content type parser APIs see [here](/docs/v5.2.x/Reference/ContentTypeParser/.md#usage).

#### getDefaultJsonParser[​](#getdefaultjsonparser "Direct link to getDefaultJsonParser")

[]()

`fastify.getDefaultJsonParser(onProtoPoisoning, onConstructorPoisoning)` takes two arguments. First argument is ProtoType poisoning configuration and second argument is constructor poisoning configuration. See the [`secure-json-parse` documentation](https://github.com/fastify/secure-json-parse#api) for more information.

#### defaultTextParser[​](#defaulttextparser "Direct link to defaultTextParser")

[]()

`fastify.defaultTextParser()` can be used to parse content as plain text.

```
fastify.addContentTypeParser('text/json', { asString: true }, fastify.defaultTextParser)
```

#### errorHandler[​](#errorhandler "Direct link to errorHandler")

[]()

`fastify.errorHandler` can be used to handle errors using fastify's default error handler.

```
fastify.get('/', {
  errorHandler: (error, request, reply) => {
    if (error.code === 'SOMETHING_SPECIFIC') {
      reply.send({ custom: 'response' })
      return
    }

    fastify.errorHandler(error, request, response)
  }
}, handler)
```

#### childLoggerFactory[​](#childloggerfactory "Direct link to childLoggerFactory")

[]()

`fastify.childLoggerFactory` returns the custom logger factory function for the Fastify instance. See the [`childLoggerFactory` config option](#setchildloggerfactory) for more info.

#### Symbol.asyncDispose[​](#symbolasyncdispose "Direct link to Symbol.asyncDispose")

[]()

`fastify[Symbol.asyncDispose]` is a symbol that can be used to define an asynchronous function that will be called when the Fastify instance is closed.

It's commonly used alongside the `using` TypeScript keyword to ensure that resources are cleaned up when the Fastify instance is closed.

This combines perfectly inside short lived processes or unit tests, where you must close all Fastify resources after returning from inside the function.

```
test('Uses app and closes it afterwards', async () => {
  await using app = fastify();
  // do something with app.
})
```

In the above example, Fastify is closed automatically after the test finishes.

Read more about the [ECMAScript Explicit Resource Management](https://tc39.es/proposal-explicit-resource-management) and the [using keyword](https://devblogs.microsoft.com/typescript/announcing-typescript-5-2/) introduced in TypeScript 5.2.

#### initialConfig[​](#initialconfig "Direct link to initialConfig")

[]()

`fastify.initialConfig`: Exposes a frozen read-only object registering the initial options passed down by the user to the Fastify instance.

The properties that can currently be exposed are:

- connectionTimeout
- keepAliveTimeout
- bodyLimit
- caseSensitive
- allowUnsafeRegex
- http2
- https (it will return `false`/`true` or `{ allowHTTP1: true/false }` if explicitly passed)
- ignoreTrailingSlash
- disableRequestLogging
- maxParamLength
- onProtoPoisoning
- onConstructorPoisoning
- pluginTimeout
- requestIdHeader
- requestIdLogLabel
- http2SessionTimeout
- useSemicolonDelimiter

```
const { readFileSync } = require('node:fs')
const Fastify = require('fastify')

const fastify = Fastify({
  https: {
    allowHTTP1: true,
    key: readFileSync('./fastify.key'),
    cert: readFileSync('./fastify.cert')
  },
  logger: { level: 'trace'},
  ignoreTrailingSlash: true,
  maxParamLength: 200,
  caseSensitive: true,
  trustProxy: '127.0.0.1,192.168.1.1/24',
})

console.log(fastify.initialConfig)
/*
will log :
{
  caseSensitive: true,
  https: { allowHTTP1: true },
  ignoreTrailingSlash: true,
  maxParamLength: 200
}
*/

fastify.register(async (instance, opts) => {
  instance.get('/', async (request, reply) => {
    return instance.initialConfig
    /*
    will return :
    {
      caseSensitive: true,
      https: { allowHTTP1: true },
      ignoreTrailingSlash: true,
      maxParamLength: 200
    }
    */
  })

  instance.get('/error', async (request, reply) => {
    // will throw an error because initialConfig is read-only
    // and can not be modified
    instance.initialConfig.https.allowHTTP1 = false

    return instance.initialConfig
  })
})

// Start listening.
fastify.listen({ port: 3000 }, (err) => {
  if (err) {
    fastify.log.error(err)
    process.exit(1)
  }
})
```

***
