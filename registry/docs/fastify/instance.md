## Instance[​](#instance "Direct link to Instance")

### Server Methods[​](#server-methods "Direct link to Server Methods")

#### server[​](#server "Direct link to server")

[]()

`fastify.server`: The Node core [server](https://nodejs.org/api/http.html#http_class_http_server) object as returned by the [**`Fastify factory function`**](#factory).

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

Starts the server on the given port after all the plugins are loaded, internally waits for the `.ready()` event. The callback is the same as the Node core. By default, the server will listen on the address resolved by `localhost` when no specific address is provided (`127.0.0.1` or `::1` depending on the operating system). If listening on any available interface is desired, then specifying `0.0.0.0` for the address will listen on all IPv4 addresses. Using `::` for the address will listen on all IPv6 addresses and, depending on OS, may also listen on all IPv4 addresses. Be careful when deciding to listen on all interfaces; it comes with inherent [security risks](https://web.archive.org/web/20170831174611/https://snyk.io/blog/mongodb-hack-and-secure-defaults/).

```
fastify.listen(3000, (err, address) => {
  if (err) {
    fastify.log.error(err)
    process.exit(1)
  }
})
```

Specifying an address is also supported:

```
fastify.listen(3000, '127.0.0.1', (err, address) => {
  if (err) {
    fastify.log.error(err)
    process.exit(1)
  }
})
```

Specifying a backlog queue size is also supported:

```
fastify.listen(3000, '127.0.0.1', 511, (err, address) => {
  if (err) {
    fastify.log.error(err)
    process.exit(1)
  }
})
```

Specifying options is also supported; the object is same as [options](https://nodejs.org/api/net.html#net_server_listen_options_callback) in the Node.js server listen:

```
fastify.listen({ port: 3000, host: '127.0.0.1', backlog: 511 }, (err) => {
  if (err) {
    fastify.log.error(err)
    process.exit(1)
  }
})
```

If no callback is provided a Promise is returned:

```
fastify.listen(3000)
  .then((address) => console.log(`server listening on ${address}`))
  .catch(err => {
    console.log('Error starting server:', err)
    process.exit(1)
  })
```

Specifying an address without a callback is also supported:

```
fastify.listen(3000, '127.0.0.1')
  .then((address) => console.log(`server listening on ${address}`))
  .catch(err => {
    console.log('Error starting server:', err)
    process.exit(1)
  })
```

Specifying options without a callback is also supported:

```
fastify.listen({ port: 3000, host: '127.0.0.1', backlog: 511 })
  .then((address) => console.log(`server listening on ${address}`))
  .catch(err => {
    console.log('Error starting server:', err)
    process.exit(1)
  })
```

When deploying to a Docker, and potentially other, containers, it is advisable to listen on `0.0.0.0` because they do not default to exposing mapped ports to `localhost`:

```
fastify.listen(3000, '0.0.0.0', (err, address) => {
  if (err) {
    fastify.log.error(err)
    process.exit(1)
  }
})
```

If the `port` is omitted (or is set to zero), a random available port is automatically chosen (later available via `fastify.server.address().port`).

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

#### getDefaultRoute[​](#getdefaultroute "Direct link to getDefaultRoute")

[]()

Method to get the `defaultRoute` for the server:

```
const defaultRoute = fastify.getDefaultRoute()
```

#### setDefaultRoute[​](#setdefaultroute "Direct link to setDefaultRoute")

[]()

Method to set the `defaultRoute` for the server:

```
const defaultRoute = function (req, res) {
  res.end('hello world')
}

fastify.setDefaultRoute(defaultRoute)
```

#### routing[​](#routing "Direct link to routing")

[]()

Method to access the `lookup` method of the internal router and match the request to the appropriate handler:

```
fastify.routing(req, res)
```

#### route[​](#route "Direct link to route")

[]()

Method to add routes to the server, it also has shorthand functions, check [here](/docs/v3.29.x/Reference/Routes/.md).

#### close[​](#close "Direct link to close")

[]()

`fastify.close(callback)`: call this function to close the server instance and run the [`'onClose'`](/docs/v3.29.x/Reference/Hooks/.md#on-close) hook.

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

Function useful if you need to decorate the fastify instance, Reply or Request, check [here](/docs/v3.29.x/Reference/Decorators/.md).

#### register[​](#register "Direct link to register")

[]()

Fastify allows the user to extend its functionality with plugins. A plugin can be a set of routes, a server decorator, or whatever, check [here](/docs/v3.29.x/Reference/Plugins/.md).

#### addHook[​](#addhook "Direct link to addHook")

[]()

Function to add a specific hook in the lifecycle of Fastify, check [here](/docs/v3.29.x/Reference/Hooks/.md).

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

Name of the current plugin. There are three ways to define a name (in order).

1. If you use [fastify-plugin](https://github.com/fastify/fastify-plugin) the metadata `name` is used.
2. If you `module.exports` a plugin the filename is used.
3. If you use a regular [function declaration](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Functions#Defining_functions) the function name is used.

*Fallback*: The first two lines of your plugin will represent the plugin name. Newlines are replaced by `--`. This will help to identify the root cause when you deal with many plugins.

Important: If you have to deal with nested plugins, the name differs with the usage of the [fastify-plugin](https://github.com/fastify/fastify-plugin) because no new scope is created and therefore we have no place to attach contextual data. In that case, the plugin name will represent the boot order of all involved plugins in the format of `plugin-A -> plugin-B`.

#### log[​](#log "Direct link to log")

[]()

The logger instance, check [here](/docs/v3.29.x/Reference/Logging/.md).

#### version[​](#version "Direct link to version")

[]()

Fastify version of the instance. Used for plugin support. See [Plugins](/docs/v3.29.x/Reference/Plugins/.md#handle-the-scope) for information on how the version is used by plugins.

#### inject[​](#inject "Direct link to inject")

[]()

Fake HTTP injection (for testing purposes) [here](/docs/v3.29.x/Guides/Testing/.md#benefits-of-using-fastifyinject).

#### addSchema[​](#addschema "Direct link to addSchema")

[]()

`fastify.addSchema(schemaObj)`, adds a JSON schema to the Fastify instance. This allows you to reuse it everywhere in your application just by using the standard `$ref` keyword.

To learn more, read the [Validation and Serialization](/docs/v3.29.x/Reference/Validation-and-Serialization/.md) documentation.

#### getSchemas[​](#getschemas "Direct link to getSchemas")

[]()

`fastify.getSchemas()`, returns a hash of all schemas added via `.addSchema`. The keys of the hash are the `$id`s of the JSON Schema provided.

#### getSchema[​](#getschema "Direct link to getSchema")

[]()

`fastify.getSchema(id)`, return the JSON schema added with `.addSchema` and the matching `id`. It returns `undefined` if it is not found.

#### setReplySerializer[​](#setreplyserializer "Direct link to setReplySerializer")

[]()

Set the reply serializer for all the routes. This will be used as default if a [Reply.serializer(func)](/docs/v3.29.x/Reference/Reply/.md#serializerfunc) has not been set. The handler is fully encapsulated, so different plugins can set different error handlers. Note: the function parameter is called only for status `2xx`. Check out the [`setErrorHandler`](#seterrorhandler) for errors.

```
fastify.setReplySerializer(function (payload, statusCode){
  // serialize the payload with a sync function
  return `my serialized ${statusCode} content: ${payload}`
})
```

#### setValidatorCompiler[​](#setvalidatorcompiler "Direct link to setValidatorCompiler")

[]()

Set the schema validator compiler for all routes. See [#schema-validator](/docs/v3.29.x/Reference/Validation-and-Serialization/.md#schema-validator).

#### setSchemaErrorFormatter[​](#setschemaerrorformatter "Direct link to setSchemaErrorFormatter")

[]()

Set the schema error formatter for all routes. See [#error-handling](/docs/v3.29.x/Reference/Validation-and-Serialization/.md#schemaerrorformatter).

#### setSerializerCompiler[​](#setserializercompiler "Direct link to setSerializerCompiler")

[]()

Set the schema serializer compiler for all routes. See [#schema-serializer](/docs/v3.29.x/Reference/Validation-and-Serialization/.md#schema-serializer). **Note:** [`setReplySerializer`](#set-reply-serializer) has priority if set!

#### validatorCompiler[​](#validatorcompiler "Direct link to validatorCompiler")

[]()

This property can be used to get the schema validator. If not set, it will be `null` until the server starts, then it will be a function with the signature `function ({ schema, method, url, httpPart })` that returns the input `schema` compiled to a function for validating data. The input `schema` can access all the shared schemas added with [`.addSchema`](#add-schema) function.

#### serializerCompiler[​](#serializercompiler "Direct link to serializerCompiler")

[]()

This property can be used to get the schema serializer. If not set, it will be `null` until the server starts, then it will be a function with the signature `function ({ schema, method, url, httpPart })` that returns the input `schema` compiled to a function for validating data. The input `schema` can access all the shared schemas added with [`.addSchema`](#add-schema) function.

#### schemaErrorFormatter[​](#schemaerrorformatter "Direct link to schemaErrorFormatter")

[]()

This property can be used to set a function to format errors that happen while the `validationCompiler` fails to validate the schema. See [#error-handling](/docs/v3.29.x/Reference/Validation-and-Serialization/.md#schemaerrorformatter).

#### schemaController[​](#schemacontroller "Direct link to schemaController")

[]()

This property can be used to fully manage:

- `bucket`: where the schemas of your application will be stored
- `compilersFactory`: what module must compile the JSON schemas

It can be useful when your schemas are stored in another data structure that is unknown to Fastify. See [issue #2446](https://github.com/fastify/fastify/issues/2446) for an example of what this property helps to resolve.

Another use case is to tweak all the schemas processing. Doing so it is possible to use Ajv v8, instead of the default v6! We will see an example of this later.

```
const fastify = Fastify({
  schemaController: {
    /**
     * This factory is called whenever `fastify.register()` is called.
     * It may receive as input the schemas of the parent context if some schemas have been added.
     * @param {object} parentSchemas these schemas will be returned by the `getSchemas()` method function of the returned `bucket`.
     */
    bucket: function factory (parentSchemas) {
      return {
        addSchema (inputSchema) {
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
     * The compilers factory let you fully control the validator and serializer
     * in the Fastify's lifecycle, providing the encapsulation to your compilers.
     */
    compilersFactory: {
      /**
       * This factory is called whenever a new validator instance is needed.
       * It may be called whenever `fastify.register()` is called only if new schemas have been added to the
       * encapsulation context.
       * It may receive as input the schemas of the parent context if some schemas have been added.
       * @param {object} externalSchemas these schemas will be returned by the `bucket.getSchemas()`. Needed to resolve the external references $ref.
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
       * @param {object} externalSchemas these schemas will be returned by the `bucket.getSchemas()`. Needed to resolve the external references $ref.
       * @param {object} serializerOptsServerOption the server `serializerOpts` options to build your compilers accordingly
       */
      buildSerializer: function factory (externalSchemas, serializerOptsServerOption) {
        // This factory function must return a schema serializer compiler.
        // See [#schema-serializer](./Validation-and-Serialization.md#schema-serializer) for details.
        return function serializerCompiler ({ schema, method, url, httpStatus }) {
          return data => JSON.stringify(data)
        }
      }
    }
  }
});
```

##### Ajv 8 as default schema validator[​](#ajv-8-as-default-schema-validator "Direct link to Ajv 8 as default schema validator")

Ajv 8 is the evolution of Ajv 6, and it has a lot of improvements and new features. To use the new Ajv 8 features such as JTD or the Standalone mode, refer to the [`@fastify/ajv-compiler` documentation](https://github.com/fastify/ajv-compiler#usage).

To use Ajv 8 as default schema validator, you can use the following code:

```
const AjvCompiler = require('@fastify/ajv-compiler') // It must be the v2.x.x version

// Note that the `format` schema's keyword is no longer supported on Ajv 8 by default.
// So you need to add it manually.
const ajvFormats = require('ajv-formats')

const app = fastify({
  ajv: {
    customOptions: {
      validateFormats: true
    },
    plugins: [ajvFormats]
  },
  schemaController: {
    compilersFactory: {
      buildValidator: AjvCompiler()
    }
  }
})

// Done! You can now use Ajv 8 options and keywords in your schemas!
```

#### setNotFoundHandler[​](#setnotfoundhandler "Direct link to setNotFoundHandler")

[]()

`fastify.setNotFoundHandler(handler(request, reply))`: set the 404 handler. This call is encapsulated by prefix, so different plugins can set different not found handlers if a different [`prefix` option](/docs/v3.29.x/Reference/Plugins/.md#route-prefixing-option) is passed to `fastify.register()`. The handler is treated as a regular route handler so requests will go through the full [Fastify lifecycle](/docs/v3.29.x/Reference/Lifecycle/.md#lifecycle).

You can also register [`preValidation`](/docs/v3.29.x/Reference/Hooks/.md#route-hooks) and [`preHandler`](/docs/v3.29.x/Reference/Hooks/.md#route-hooks) hooks for the 404 handler.

*Note: The `preValidation` hook registered using this method will run for a route that Fastify does not recognize and **not** when a route handler manually calls [`reply.callNotFound`](/docs/v3.29.x/Reference/Reply/.md#call-not-found)*. In which case, only preHandler will be run.

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

#### setErrorHandler[​](#seterrorhandler "Direct link to setErrorHandler")

[]()

`fastify.setErrorHandler(handler(error, request, reply))`: Set a function that will be called whenever an error happens. The handler is bound to the Fastify instance and is fully encapsulated, so different plugins can set different error handlers. *async-await* is supported as well.

*Note: If the error `statusCode` is less than 400, Fastify will automatically set it at 500 before calling the error handler.*

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
var statusCode = error.statusCode
if (statusCode >= 500) {
  log.error(error)
} else if (statusCode >= 400) {
  log.info(error)
} else {
  log.error(error)
}
```

#### printRoutes[​](#printroutes "Direct link to printRoutes")

[]()

`fastify.printRoutes()`: Prints the representation of the internal radix tree used by the router, useful for debugging. Alternatively, `fastify.printRoutes({ commonPrefix: false })` can be used to print the flattened routes tree.

*Remember to call it inside or after a `ready` call.*

```
fastify.get('/test', () => {})
fastify.get('/test/hello', () => {})
fastify.get('/hello/world', () => {})
fastify.get('/helicopter', () => {})

fastify.ready(() => {
  console.log(fastify.printRoutes())
  // └── /
  //     ├── test (GET)
  //     │   └── /hello (GET)
  //     └── hel
  //         ├── lo/world (GET)
  //         └── licopter (GET)

  console.log(fastify.printRoutes({ commonPrefix: false }))
  // └── / (-)
  //     ├── test (GET)
  //     │   └── /hello (GET)
  //     ├── hello/world (GET)
  //     └── helicopter (GET)

})
```

`fastify.printRoutes({ includeMeta: (true | []) })` will display properties from the `route.store` object for each displayed route. This can be an `array` of keys (e.g. `['onRequest', Symbol('key')]`), or `true` to display all properties. A shorthand option, `fastify.printRoutes({ includeHooks: true })` will include all [hooks](/docs/v3.29.x/Reference/Hooks/.md).

```
  console.log(fastify.printRoutes({ includeHooks: true, includeMeta: ['metaProperty'] }))
  // └── /
  //     ├── test (GET)
  //     │   • (onRequest) ["anonymous()","namedFunction()"]
  //     │   • (metaProperty) "value"
  //     │   └── /hello (GET)
  //     └── hel
  //         ├── lo/world (GET)
  //         │   • (onTimeout) ["anonymous()"]
  //         └── licopter (GET)

  console.log(fastify.printRoutes({ includeHooks: true }))
  // └── /
  //     ├── test (GET)
  //     │   • (onRequest) ["anonymous()","namedFunction()"]
  //     │   └── /hello (GET)
  //     └── hel
  //         ├── lo/world (GET)
  //         │   • (onTimeout) ["anonymous()"]
  //         └── licopter (GET)
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

`fastify.addContentTypeParser(content-type, options, parser)` is used to pass custom parser for a given content type. Useful for adding parsers for custom content types, e.g. `text/json, application/vnd.oasis.opendocument.text`. `content-type` can be a string, string array or RegExp.

```
// The two arguments passed to getDefaultJsonParser are for ProtoType poisoning and Constructor Poisoning configuration respectively. The possible values are 'ignore', 'remove', 'error'. ignore  skips all validations and it is similar to calling JSON.parse() directly. See the [`secure-json-parse` documentation](https://github.com/fastify/secure-json-parse#api) for more information.

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

For more details about the usage of the different content type parser APIs see [here](/docs/v3.29.x/Reference/ContentTypeParser/.md#usage).

#### getDefaultJsonParser[​](#getdefaultjsonparser "Direct link to getDefaultJsonParser")

[]()

`fastify.getDefaultJsonParser(onProtoPoisoning, onConstructorPoisoning)` takes two arguments. First argument is ProtoType poisoning configuration and second argument is constructor poisoning configuration. See the [`secure-json-parse` documentation](https://github.com/fastify/secure-json-parse#api) for more information.

#### defaultTextParser[​](#defaulttextparser "Direct link to defaultTextParser")

[]()

`fastify.defaultTextParser()` can be used to parse content as plain text.

```
fastify.addContentTypeParser('text/json', { asString: true }, fastify.defaultTextParser())
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

#### initialConfig[​](#initialconfig "Direct link to initialConfig")

[]()

`fastify.initialConfig`: Exposes a frozen read-only object registering the initial options passed down by the user to the Fastify instance.

Currently the properties that can be exposed are:

- connectionTimeout
- keepAliveTimeout
- bodyLimit
- caseSensitive
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

```
const { readFileSync } = require('fs')
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
fastify.listen(3000, (err) => {
  if (err) {
    fastify.log.error(err)
    process.exit(1)
  }
})
```

***

# TypeScript

## TypeScript[​](#typescript "Direct link to TypeScript")

The Fastify framework is written in vanilla JavaScript, and as such type definitions are not as easy to maintain; however, since version 2 and beyond, maintainers and contributors have put in a great effort to improve the types.

The type system was changed in Fastify version 3. The new type system introduces generic constraining and defaulting, plus a new way to define schema types such as a request body, querystring, and more! As the team works on improving framework and type definition synergy, sometimes parts of the API will not be typed or may be typed incorrectly. We encourage you to **contribute** to help us fill in the gaps. Just make sure to read our [`CONTRIBUTING.md`](https://github.com/fastify/fastify/blob/main/CONTRIBUTING.md) file before getting started to make sure things go smoothly!

> The documentation in this section covers Fastify version 3.x typings

> Plugins may or may not include typings. See [Plugins](#plugins) for more information. We encourage users to send pull requests to improve typings support.

🚨 Don't forget to install `@types/node`
