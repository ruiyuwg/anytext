## API Type System Documentation[​](#api-type-system-documentation "Direct link to API Type System Documentation")

This section is a detailed account of all the types available to you in Fastify version 3.x

All `http`, `https`, and `http2` types are inferred from `@types/node`

[Generics](#generics) are documented by their default value as well as their constraint value(s). Read these articles for more information on TypeScript generics.

- [Generic Parameter Default](https://www.typescriptlang.org/docs/handbook/release-notes/typescript-2-3.html#generic-parameter-defaults)
- [Generic Constraints](https://www.typescriptlang.org/docs/handbook/2/generics.html#generic-constraints)

#### How to import[​](#how-to-import "Direct link to How to import")

The Fastify API is powered by the `fastify()` method. In JavaScript you would import it using `const fastify = require('fastify')`. In TypeScript it is recommended to use the `import/from` syntax instead so types can be resolved. There are a couple supported import methods with the Fastify type system.

1. `import fastify from 'fastify'`

   - Types are resolved but not accessible using dot notation
   - Example:

     ```
     import fastify from 'fastify'

     const f = fastify()
     f.listen({ port: 8080 }, () => { console.log('running') })
     ```
   - Gain access to types with destructuring:

     ```
     import fastify, { FastifyInstance } from 'fastify'

     const f: FastifyInstance = fastify()
     f.listen({ port: 8080 }, () => { console.log('running') })
     ```
   - Destructuring also works for the main API method:

     ```
     import { fastify, FastifyInstance } from 'fastify'

     const f: FastifyInstance = fastify()
     f.listen({ port: 8080 }, () => { console.log('running') })
     ```

2. `import * as Fastify from 'fastify'`

   - Types are resolved and accessible using dot notation
   - Calling the main Fastify API method requires a slightly different syntax (see example)
   - Example:

     ```
     import * as Fastify from 'fastify'

     const f: Fastify.FastifyInstance = Fastify.fastify()
     f.listen({ port: 8080 }, () => { console.log('running') })
     ```

3. `const fastify = require('fastify')`

   - This syntax is valid and will import fastify as expected; however, types will **not** be resolved
   - Example:

     ```
     const fastify = require('fastify')

     const f = fastify()
     f.listen({ port: 8080 }, () => { console.log('running') })
     ```
   - Destructuring is supported and will resolve types properly

     ```
     const { fastify } = require('fastify')

     const f = fastify()
     f.listen({ port: 8080 }, () => { console.log('running') })
     ```

#### Generics[​](#generics "Direct link to Generics")

Many type definitions share the same generic parameters; they are all documented, in detail, within this section.

Most definitions depend on `@types/node` modules `http`, `https`, and `http2`

##### RawServer[​](#rawserver "Direct link to RawServer")

Underlying Node.js server type

Default: `http.Server`

Constraints: `http.Server`, `https.Server`, `http2.Http2Server`, `http2.Http2SecureServer`

Enforces generic parameters: [`RawRequest`](#rawrequest), [`RawReply`](#rawreply)

##### RawRequest[​](#rawrequest "Direct link to RawRequest")

Underlying Node.js request type

Default: [`RawRequestDefaultExpression`](#fastifyrawrequestdefaultexpressionrawserver)

Constraints: `http.IncomingMessage`, `http2.Http2ServerRequest`

Enforced by: [`RawServer`](#rawserver)

##### RawReply[​](#rawreply "Direct link to RawReply")

Underlying Node.js response type

Default: [`RawReplyDefaultExpression`](#fastifyrawreplydefaultexpression)

Constraints: `http.ServerResponse`, `http2.Http2ServerResponse`

Enforced by: [`RawServer`](#rawserver)

##### Logger[​](#logger "Direct link to Logger")

Fastify logging utility

Default: [`FastifyLoggerOptions`](#fastifyfastifyloggeroptions)

Enforced by: [`RawServer`](#rawserver)

##### RawBody[​](#rawbody "Direct link to RawBody")

A generic parameter for the content-type-parser methods.

Constraints: `string | Buffer`

***

#### Fastify[​](#fastify "Direct link to Fastify")

##### fastify< [RawRequest](#rawrequest), [RawReply](#rawreply), [Logger](#logger)>(opts?: [FastifyServerOptions](#fastifyfastifyserveroptions-rawserver-logger)): [FastifyInstance](#fastifyfastifyinstance)[​](#fastify-rawrequest-rawreply-loggeropts-fastifyserveroptions-fastifyinstance "Direct link to fastify-rawrequest-rawreply-loggeropts-fastifyserveroptions-fastifyinstance")

[src](https://github.com/fastify/fastify/blob/main/fastify.d.ts#L19)

The main Fastify API method. By default creates an HTTP server. Utilizing discriminant unions and overload methods, the type system will automatically infer which type of server (http, https, or http2) is being created purely based on the options based to the method (see the examples below for more information). It also supports an extensive generic type system to allow the user to extend the underlying Node.js Server, Request, and Reply objects. Additionally, the `Logger` generic exists for custom log types. See the examples and generic breakdown below for more information.

###### Example 1: Standard HTTP server[​](#example-1-standard-http-server "Direct link to Example 1: Standard HTTP server")

No need to specify the `Server` generic as the type system defaults to HTTP.

```
import fastify from 'fastify'

const server = fastify()
```

Check out the Learn By Example - [Getting Started](#getting-started) example for a more detailed http server walkthrough.

###### Example 2: HTTPS server[​](#example-2-https-server "Direct link to Example 2: HTTPS server")

1. Create the following imports from `@types/node` and `fastify`
   ```
   import fs from 'node:fs'
   import path from 'node:path'
   import fastify from 'fastify'
   ```
2. Perform the following steps before setting up a Fastify HTTPS server to create the `key.pem` and `cert.pem` files:

```
openssl genrsa -out key.pem
openssl req -new -key key.pem -out csr.pem
openssl x509 -req -days 9999 -in csr.pem -signkey key.pem -out cert.pem
rm csr.pem
```

3. Instantiate a Fastify https server and add a route:

   ```
   const server = fastify({
     https: {
       key: fs.readFileSync(path.join(__dirname, 'key.pem')),
       cert: fs.readFileSync(path.join(__dirname, 'cert.pem'))
     }
   })

   server.get('/', async function (request, reply) {
     return { hello: 'world' }
   })

   server.listen({ port: 8080 }, (err, address) => {
     if (err) {
       console.error(err)
       process.exit(0)
     }
     console.log(`Server listening at ${address}`)
   })
   ```
4. Build and run! Test your server out by querying with: `curl -k https://localhost:8080`

###### Example 3: HTTP2 server[​](#example-3-http2-server "Direct link to Example 3: HTTP2 server")

There are two types of HTTP2 server types, insecure and secure. Both require specifying the `http2` property as `true` in the `options` object. The `https` property is used for creating a secure http2 server; omitting the `https` property will create an insecure http2 server.

```
const insecureServer = fastify({ http2: true })
const secureServer = fastify({
  http2: true,
  https: {} // use the `key.pem` and `cert.pem` files from the https section
})
```

For more details on using HTTP2 check out the Fastify [HTTP2](/docs/v5.2.x/Reference/HTTP2/.md) documentation page.

###### Example 4: Extended HTTP server[​](#example-4-extended-http-server "Direct link to Example 4: Extended HTTP server")

Not only can you specify the server type, but also the request and reply types. Thus, allowing you to specify special properties, methods, and more! When specified at server instantiation, the custom type becomes available on all further instances of the custom type.

```
import fastify from 'fastify'
import http from 'node:http'

interface customRequest extends http.IncomingMessage {
  mySpecialProp: string
}

const server = fastify<http.Server, customRequest>()

server.get('/', async (request, reply) => {
  const someValue = request.raw.mySpecialProp // TS knows this is a string, because of the `customRequest` interface
  return someValue.toUpperCase()
})
```

###### Example 5: Specifying logger types[​](#example-5-specifying-logger-types "Direct link to Example 5: Specifying logger types")

Fastify uses [Pino](https://getpino.io/#/) logging library under the hood. Since `pino@7`, all of it's properties can be configured via `logger` field when constructing Fastify's instance. If properties you need aren't exposed, please open an Issue to [`Pino`](https://github.com/pinojs/pino/issues) or pass a preconfigured external instance of Pino (or any other compatible logger) as temporary fix to Fastify via the same field. This allows creating custom serializers as well, see the [Logging](/docs/v5.2.x/Reference/Logging/.md) documentation for more info.

```
import fastify from 'fastify'

const server = fastify({
  logger: {
    level: 'info',
    redact: ['x-userinfo'],
    messageKey: 'message'
  }
})

server.get('/', async (request, reply) => {
  server.log.info('log message')
  return 'another message'
})
```

***

##### fastify.HTTPMethods[​](#fastifyhttpmethods "Direct link to fastify.HTTPMethods")

[src](https://github.com/fastify/fastify/blob/main/types/utils.d.ts#L8)

Union type of: `'DELETE' | 'GET' | 'HEAD' | 'PATCH' | 'POST' | 'PUT' | 'OPTIONS'`

##### fastify.RawServerBase[​](#fastifyrawserverbase "Direct link to fastify.RawServerBase")

[src](https://github.com/fastify/fastify/blob/main/types/utils.d.ts#L13)

Dependent on `@types/node` modules `http`, `https`, `http2`

Union type of: `http.Server | https.Server | http2.Http2Server | http2.Http2SecureServer`

##### fastify.RawServerDefault[​](#fastifyrawserverdefault "Direct link to fastify.RawServerDefault")

[src](https://github.com/fastify/fastify/blob/main/types/utils.d.ts#L18)

Dependent on `@types/node` modules `http`

Type alias for `http.Server`

***

##### fastify.FastifyServerOptions< [RawServer](#rawserver), [Logger](#logger)>[​](#fastifyfastifyserveroptions-rawserver-logger "Direct link to fastifyfastifyserveroptions-rawserver-logger")

[src](https://github.com/fastify/fastify/blob/main/fastify.d.ts#L29)

An interface of properties used in the instantiation of the Fastify server. Is used in the main [`fastify()`](#fastifyrawserver-rawrequest-rawreply-loggeropts-fastifyserveroptions-fastifyinstance) method. The `RawServer` and `Logger` generic parameters are passed down through that method.

See the main [fastify](#fastifyrawserver-rawrequest-rawreply-loggeropts-fastifyserveroptions-fastifyinstance) method type definition section for examples on instantiating a Fastify server with TypeScript.

##### fastify.FastifyInstance< [RawServer](#rawserver), [RawRequest](#rawrequest), [RequestGeneric](#fastifyrequestgenericinterface), [Logger](#logger)>[​](#fastifyfastifyinstance-rawserver-rawrequest-requestgeneric-logger "Direct link to fastifyfastifyinstance-rawserver-rawrequest-requestgeneric-logger")

[src](https://github.com/fastify/fastify/blob/main/types/instance.d.ts#L16)

Interface that represents the Fastify server object. This is the returned server instance from the [`fastify()`](#fastifyrawserver-rawrequest-rawreply-loggeropts-fastifyserveroptions-fastifyinstance) method. This type is an interface so it can be extended via [declaration merging](https://www.typescriptlang.org/docs/handbook/declaration-merging.html) if your code makes use of the `decorate` method.

Through the use of generic cascading, all methods attached to the instance inherit the generic properties from instantiation. This means that by specifying the server, request, or reply types, all methods will know how to type those objects.

Check out the main [Learn by Example](#learn-by-example) section for detailed guides, or the more simplified [fastify](#fastifyrawserver-rawrequest-rawreply-loggeropts-fastifyserveroptions-fastifyinstance) method examples for additional details on this interface.

***

#### Request[​](#request "Direct link to Request")

##### fastify.FastifyRequest< [RequestGeneric](#fastifyrequestgenericinterface), [RawServer](#rawserver), [RawRequest](#rawrequest)>[​](#fastifyfastifyrequest-requestgeneric-rawserver-rawrequest "Direct link to fastifyfastifyrequest-requestgeneric-rawserver-rawrequest")

[src](https://github.com/fastify/fastify/blob/main/types/request.d.ts#L15)

This interface contains properties of Fastify request object. The properties added here disregard what kind of request object (http vs http2) and disregard what route level it is serving; thus calling `request.body` inside a GET request will not throw an error (but good luck sending a GET request with a body 😉).

If you need to add custom properties to the `FastifyRequest` object (such as when using the \[`decorateRequest`]\[DecorateRequest] method) you need to use declaration merging on this interface.

A basic example is provided in the [`FastifyRequest`](#fastifyfastifyrequestrawserver-rawrequest-requestgeneric) section. For a more detailed example check out the Learn By Example section: [Plugins](#plugins)

###### Example[​](#example "Direct link to Example")

```
import fastify from 'fastify'

const server = fastify()

server.decorateRequest('someProp', 'hello!')

server.get('/', async (request, reply) => {
  const { someProp } = request // need to use declaration merging to add this prop to the request interface
  return someProp
})

// this declaration must be in scope of the typescript interpreter to work
declare module 'fastify' {
  interface FastifyRequest { // you must reference the interface and not the type
    someProp: string
  }
}

// Or you can type your request using
type CustomRequest = FastifyRequest<{
  Body: { test: boolean };
}>

server.get('/typedRequest', async (request: CustomRequest, reply: FastifyReply) => {
  return request.body.test
})
```

##### fastify.RequestGenericInterface[​](#fastifyrequestgenericinterface "Direct link to fastify.RequestGenericInterface")

[src](https://github.com/fastify/fastify/blob/main/types/request.d.ts#L4)

Fastify request objects have four dynamic properties: `body`, `params`, `query`, and `headers`. Their respective types are assignable through this interface. It is a named property interface enabling the developer to ignore the properties they do not want to specify. All omitted properties are defaulted to `unknown`. The corresponding property names are: `Body`, `Querystring`, `Params`, `Headers`.

```
import fastify, { RequestGenericInterface } from 'fastify'

const server = fastify()

interface requestGeneric extends RequestGenericInterface {
  Querystring: {
    name: string
  }
}

server.get<requestGeneric>('/', async (request, reply) => {
  const { name } = request.query // the name prop now exists on the query prop
  return name.toUpperCase()
})
```

If you want to see a detailed example of using this interface check out the Learn by Example section: [JSON Schema](#json-schema).

##### fastify.RawRequestDefaultExpression< [RawServer](#rawserver)>[​](#fastifyrawrequestdefaultexpression-rawserver "Direct link to fastifyrawrequestdefaultexpression-rawserver")

[src](https://github.com/fastify/fastify/blob/main/types/utils.d.ts#L23)

Dependent on `@types/node` modules `http`, `https`, `http2`

Generic parameter `RawServer` defaults to [`RawServerDefault`](#fastifyrawserverdefault)

If `RawServer` is of type `http.Server` or `https.Server`, then this expression returns `http.IncomingMessage`, otherwise, it returns `http2.Http2ServerRequest`.

```
import http from 'node:http'
import http2 from 'node:http2'
import { RawRequestDefaultExpression } from 'fastify'

RawRequestDefaultExpression<http.Server> // -> http.IncomingMessage
RawRequestDefaultExpression<http2.Http2Server> // -> http2.Http2ServerRequest
```

***

#### Reply[​](#reply "Direct link to Reply")

##### fastify.FastifyReply< [RequestGeneric](#fastifyrequestgenericinterface), [RawServer](#rawserver), [RawRequest](#rawrequest), [RawReply](#rawreply), [ContextConfig](#ContextConfigGeneric)>[​](#fastifyfastifyreply-requestgeneric-rawserver-rawrequest-rawreply-contextconfig "Direct link to fastifyfastifyreply-requestgeneric-rawserver-rawrequest-rawreply-contextconfig")

[src](https://github.com/fastify/fastify/blob/main/types/reply.d.ts#L32)

This interface contains the custom properties that Fastify adds to the standard Node.js reply object. The properties added here disregard what kind of reply object (http vs http2).

If you need to add custom properties to the FastifyReply object (such as when using the `decorateReply` method) you need to use declaration merging on this interface.

A basic example is provided in the [`FastifyReply`](#fastifyfastifyreplyrawserver-rawreply-contextconfig) section. For a more detailed example check out the Learn By Example section: [Plugins](#plugins)

###### Example[​](#example-1 "Direct link to Example")

```
import fastify from 'fastify'

const server = fastify()

server.decorateReply('someProp', 'world')

server.get('/', async (request, reply) => {
  const { someProp } = reply // need to use declaration merging to add this prop to the reply interface
  return someProp
})

// this declaration must be in scope of the typescript interpreter to work
declare module 'fastify' {
  interface FastifyReply { // you must reference the interface and not the type
    someProp: string
  }
}
```

##### fastify.RawReplyDefaultExpression< [RawServer](#rawserver)>[​](#fastifyrawreplydefaultexpression-rawserver "Direct link to fastifyrawreplydefaultexpression-rawserver")

[src](https://github.com/fastify/fastify/blob/main/types/utils.d.ts#L27)

Dependent on `@types/node` modules `http`, `https`, `http2`

Generic parameter `RawServer` defaults to [`RawServerDefault`](#fastifyrawserverdefault)

If `RawServer` is of type `http.Server` or `https.Server`, then this expression returns `http.ServerResponse`, otherwise, it returns `http2.Http2ServerResponse`.

```
import http from 'node:http'
import http2 from 'node:http2'
import { RawReplyDefaultExpression } from 'fastify'

RawReplyDefaultExpression<http.Server> // -> http.ServerResponse
RawReplyDefaultExpression<http2.Http2Server> // -> http2.Http2ServerResponse
```

***

#### Plugin[​](#plugin "Direct link to Plugin")

Fastify allows the user to extend its functionalities with plugins. A plugin can be a set of routes, a server decorator or whatever. To activate plugins, use the [`fastify.register()`](#fastifyfastifyregisterrawserver-rawrequest-requestgenericplugin-fastifyplugin-opts-fastifyregisteroptions) method.

When creating plugins for Fastify, it is recommended to use the `fastify-plugin` module. Additionally, there is a guide to creating plugins with TypeScript and Fastify available in the Learn by Example, [Plugins](#plugins) section.

##### fastify.FastifyPluginCallback< [Options](#fastifyfastifypluginoptions)>[​](#fastifyfastifyplugincallback-options "Direct link to fastifyfastifyplugincallback-options")

[src](https://github.com/fastify/fastify/blob/main/types/plugin.d.ts#L9)

Interface method definition used within the [`fastify.register()`](#fastifyfastifyregisterrawserver-rawrequest-requestgenericplugin-fastifyplugin-opts-fastifyregisteroptions) method.

##### fastify.FastifyPluginAsync< [Options](#fastifyfastifypluginoptions)>[​](#fastifyfastifypluginasync-options "Direct link to fastifyfastifypluginasync-options")

[src](https://github.com/fastify/fastify/blob/main/types/plugin.d.ts#L20)

Interface method definition used within the [`fastify.register()`](#fastifyfastifyregisterrawserver-rawrequest-requestgenericplugin-fastifyplugin-opts-fastifyregisteroptions) method.

##### fastify.FastifyPlugin< [Options](#fastifyfastifypluginoptions)>[​](#fastifyfastifyplugin-options "Direct link to fastifyfastifyplugin-options")

[src](https://github.com/fastify/fastify/blob/main/types/plugin.d.ts#L29)

Interface method definition used within the [`fastify.register()`](#fastifyfastifyregisterrawserver-rawrequest-requestgenericplugin-fastifyplugin-opts-fastifyregisteroptions) method. Document deprecated in favor of `FastifyPluginCallback` and `FastifyPluginAsync` since general `FastifyPlugin` doesn't properly infer types for async functions.

##### fastify.FastifyPluginOptions[​](#fastifyfastifypluginoptions "Direct link to fastify.FastifyPluginOptions")

[src](https://github.com/fastify/fastify/blob/main/types/plugin.d.ts#L31)

A loosely typed object used to constrain the `options` parameter of [`fastify.register()`](#fastifyfastifyregisterrawserver-rawrequest-requestgenericplugin-fastifyplugin-opts-fastifyregisteroptions) to an object. When creating a plugin, define its options as an extension of this interface (`interface MyPluginOptions extends FastifyPluginOptions`) so they can be passed to the register method.

***

#### Register[​](#register "Direct link to Register")

##### fastify.FastifyRegister(plugin: [FastifyPluginCallback](#fastifyfastifyplugincallbackoptions), opts: [FastifyRegisterOptions](#fastifyfastifytregisteroptions))[​](#fastifyfastifyregisterplugin-fastifyplugincallback-opts-fastifyregisteroptions "Direct link to fastifyfastifyregisterplugin-fastifyplugincallback-opts-fastifyregisteroptions")

[src](https://github.com/fastify/fastify/blob/main/types/register.d.ts#L9)

##### fastify.FastifyRegister(plugin: [FastifyPluginAsync](#fastifyfastifypluginasyncoptions), opts: [FastifyRegisterOptions](#fastifyfastifytregisteroptions))[​](#fastifyfastifyregisterplugin-fastifypluginasync-opts-fastifyregisteroptions "Direct link to fastifyfastifyregisterplugin-fastifypluginasync-opts-fastifyregisteroptions")

[src](https://github.com/fastify/fastify/blob/main/types/register.d.ts#L9)

##### fastify.FastifyRegister(plugin: [FastifyPlugin](#fastifyfastifypluginoptions-rawserver-rawrequest-requestgeneric), opts: [FastifyRegisterOptions](#fastifyfastifytregisteroptions))[​](#fastifyfastifyregisterplugin-fastifyplugin-opts-fastifyregisteroptions "Direct link to fastifyfastifyregisterplugin-fastifyplugin-opts-fastifyregisteroptions")

[src](https://github.com/fastify/fastify/blob/main/types/register.d.ts#L9)

This type interface specifies the type for the [`fastify.register()`](/docs/v5.2.x/Reference/Server/.md#register) method. The type interface returns a function signature with an underlying generic `Options` which is defaulted to [FastifyPluginOptions](#fastifyfastifypluginoptions). It infers this generic from the FastifyPlugin parameter when calling this function so there is no need to specify the underlying generic. The options parameter is the intersection of the plugin's options and two additional optional properties: `prefix: string` and `logLevel`: [LogLevel](#fastifyloglevel). `FastifyPlugin` is deprecated use `FastifyPluginCallback` and `FastifyPluginAsync` instead.

Below is an example of the options inference in action:

```
const server = fastify()

const plugin: FastifyPluginCallback<{
  option1: string;
  option2: boolean;
}> = function (instance, opts, done) { }

server().register(plugin, {}) // Error - options object is missing required properties
server().register(plugin, { option1: '', option2: true }) // OK - options object contains required properties
```

See the Learn By Example, [Plugins](#plugins) section for more detailed examples of creating TypeScript plugins in Fastify.

##### fastify.FastifyRegisterOptions[​](#fastifyfastifyregisteroptions "Direct link to fastify.FastifyRegisterOptions")

[src](https://github.com/fastify/fastify/blob/main/types/register.d.ts#L16)

This type is the intersection of the `Options` generic and a non-exported interface `RegisterOptions` that specifies two optional properties: `prefix: string` and `logLevel`: [LogLevel](#fastifyloglevel). This type can also be specified as a function that returns the previously described intersection.

***

#### Logger[​](#logger-1 "Direct link to Logger")

Check out the [Specifying Logger Types](#example-5-specifying-logger-types) example for more details on specifying a custom logger.

##### fastify.FastifyLoggerOptions< [RawServer](#rawserver), [RawRequest](#rawrequest), [RawReply](#rawreply)>[​](#fastifyfastifyloggeroptions-rawserver-rawrequest-rawreply "Direct link to fastifyfastifyloggeroptions-rawserver-rawrequest-rawreply")

[src](https://github.com/fastify/fastify/blob/main/types/logger.d.ts#L17)

An interface definition for the internal Fastify logger. It is emulative of the [Pino.js](https://getpino.io/#/) logger. When enabled through server options, use it following the general [logger](/docs/v5.2.x/Reference/Logging/.md) documentation.

##### fastify.FastifyLogFn[​](#fastifyfastifylogfn "Direct link to fastify.FastifyLogFn")

[src](https://github.com/fastify/fastify/blob/main/types/logger.d.ts#L7)

An overload function interface that implements the two ways Fastify calls log methods. This interface is passed to all associated log level properties on the FastifyLoggerOptions object.

##### fastify.LogLevel[​](#fastifyloglevel "Direct link to fastify.LogLevel")

[src](https://github.com/fastify/fastify/blob/main/types/logger.d.ts#L12)

Union type of: `'info' | 'error' | 'debug' | 'fatal' | 'warn' | 'trace'`

***

#### Context[​](#context "Direct link to Context")

The context type definition is similar to the other highly dynamic pieces of the type system. Route context is available in the route handler method.

##### fastify.FastifyRequestContext[​](#fastifyfastifyrequestcontext "Direct link to fastify.FastifyRequestContext")

[src](https://github.com/fastify/fastify/blob/main/types/context.d.ts#L11)

An interface with a single required property `config` that is set by default to `unknown`. Can be specified either using a generic or an overload.

This type definition is potentially incomplete. If you are using it and can provide more details on how to improve the definition, we strongly encourage you to open an issue in the main [fastify/fastify](https://github.com/fastify/fastify) repository. Thank you in advanced!

##### fastify.FastifyReplyContext[​](#fastifyfastifyreplycontext "Direct link to fastify.FastifyReplyContext")

[src](https://github.com/fastify/fastify/blob/main/types/context.d.ts#L11)

An interface with a single required property `config` that is set by default to `unknown`. Can be specified either using a generic or an overload.

This type definition is potentially incomplete. If you are using it and can provide more details on how to improve the definition, we strongly encourage you to open an issue in the main [fastify/fastify](https://github.com/fastify/fastify) repository. Thank you in advanced!

***

#### Routing[​](#routing "Direct link to Routing")

One of the core principles in Fastify is its routing capabilities. Most of the types defined in this section are used under-the-hood by the Fastify instance `.route` and `.get/.post/.etc` methods.

##### fastify.RouteHandlerMethod< [RawServer](#rawserver), [RawRequest](#rawrequest), [RawReply](#rawreply), [RequestGeneric](#fastifyrequestgenericinterface), [ContextConfig](#ContextConfigGeneric)>[​](#fastifyroutehandlermethod-rawserver-rawrequest-rawreply-requestgeneric-contextconfig "Direct link to fastifyroutehandlermethod-rawserver-rawrequest-rawreply-requestgeneric-contextconfig")

[src](https://github.com/fastify/fastify/blob/main/types/route.d.ts#L105)

A type declaration for the route handler methods. Has two arguments, `request` and `reply` which are typed by `FastifyRequest` and `FastifyReply` respectively. The generics parameters are passed through to these arguments. The method returns either `void` or `Promise<any>` for synchronous and asynchronous handlers respectively.

##### fastify.RouteOptions< [RawServer](#rawserver), [RawRequest](#rawrequest), [RawReply](#rawreply), [RequestGeneric](#fastifyrequestgenericinterface), [ContextConfig](#ContextConfigGeneric)>[​](#fastifyrouteoptions-rawserver-rawrequest-rawreply-requestgeneric-contextconfig "Direct link to fastifyrouteoptions-rawserver-rawrequest-rawreply-requestgeneric-contextconfig")

[src](https://github.com/fastify/fastify/blob/main/types/route.d.ts#L78)

An interface that extends RouteShorthandOptions and adds the following three required properties:

1. `method` which corresponds to a singular [HTTPMethod](#fastifyhttpmethods) or a list of [HTTPMethods](#fastifyhttpmethods)
2. `url` a string for the route
3. `handler` the route handler method, see \[RouteHandlerMethod]\[] for more details

##### fastify.RouteShorthandMethod< [RawServer](#rawserver), [RawRequest](#rawrequest), [RawReply](#rawreply)>[​](#fastifyrouteshorthandmethod-rawserver-rawrequest-rawreply "Direct link to fastifyrouteshorthandmethod-rawserver-rawrequest-rawreply")

[src](https://github.com/fastify/fastify/blob/main/types/route.d.ts#12)

An overloaded function interface for three kinds of shorthand route methods to be used in conjunction with the `.get/.post/.etc` methods.

##### fastify.RouteShorthandOptions< [RawServer](#rawserver), [RawRequest](#rawrequest), [RawReply](#rawreply), [RequestGeneric](#fastifyrequestgenericinterface), [ContextConfig](#ContextConfigGeneric)>[​](#fastifyrouteshorthandoptions-rawserver-rawrequest-rawreply-requestgeneric-contextconfig "Direct link to fastifyrouteshorthandoptions-rawserver-rawrequest-rawreply-requestgeneric-contextconfig")

[src](https://github.com/fastify/fastify/blob/main/types/route.d.ts#55)

An interface that covers all of the base options for a route. Each property on this interface is optional, and it serves as the base for the RouteOptions and RouteShorthandOptionsWithHandler interfaces.

##### fastify.RouteShorthandOptionsWithHandler< [RawServer](#rawserver), [RawRequest](#rawrequest), [RawReply](#rawreply), [RequestGeneric](#fastifyrequestgenericinterface), [ContextConfig](#ContextConfigGeneric)>[​](#fastifyrouteshorthandoptionswithhandler-rawserver-rawrequest-rawreply-requestgeneric-contextconfig "Direct link to fastifyrouteshorthandoptionswithhandler-rawserver-rawrequest-rawreply-requestgeneric-contextconfig")

[src](https://github.com/fastify/fastify/blob/main/types/route.d.ts#93)

This interface adds a single, required property to the RouteShorthandOptions interface `handler` which is of type RouteHandlerMethod

***

#### Parsers[​](#parsers "Direct link to Parsers")

##### RawBody[​](#rawbody-1 "Direct link to RawBody")

A generic type that is either a `string` or `Buffer`

##### fastify.FastifyBodyParser< [RawBody](#rawbody), [RawServer](#rawserver), [RawRequest](#rawrequest)>[​](#fastifyfastifybodyparser-rawbody-rawserver-rawrequest "Direct link to fastifyfastifybodyparser-rawbody-rawserver-rawrequest")

[src](https://github.com/fastify/fastify/blob/main/types/content-type-parser.d.ts#L7)

A function type definition for specifying a body parser method. Use the `RawBody` generic to specify the type of the body being parsed.

##### fastify.FastifyContentTypeParser< [RawServer](#rawserver), [RawRequest](#rawrequest)>[​](#fastifyfastifycontenttypeparser-rawserver-rawrequest "Direct link to fastifyfastifycontenttypeparser-rawserver-rawrequest")

[src](https://github.com/fastify/fastify/blob/main/types/content-type-parser.d.ts#L17)

A function type definition for specifying a body parser method. Content is typed via the `RawRequest` generic.

##### fastify.AddContentTypeParser< [RawServer](#rawserver), [RawRequest](#rawrequest)>[​](#fastifyaddcontenttypeparser-rawserver-rawrequest "Direct link to fastifyaddcontenttypeparser-rawserver-rawrequest")

[src](https://github.com/fastify/fastify/blob/main/types/content-type-parser.d.ts#L46)

An overloaded interface function definition for the `addContentTypeParser` method. If `parseAs` is passed to the `opts` parameter, the definition uses \[FastifyBodyParser]\[] for the `parser` parameter; otherwise, it uses \[FastifyContentTypeParser]\[].

##### fastify.hasContentTypeParser[​](#fastifyhascontenttypeparser "Direct link to fastify.hasContentTypeParser")

[src](https://github.com/fastify/fastify/blob/main/types/content-type-parser.d.ts#L63)

A method for checking the existence of a type parser of a certain content type

***

#### Errors[​](#errors "Direct link to Errors")

##### fastify.FastifyError[​](#fastifyfastifyerror "Direct link to fastify.FastifyError")

[src](https://github.com/fastify/fastify/blob/main/fastify.d.ts#L179)

FastifyError is a custom error object that includes status code and validation results.

It extends the Node.js `Error` type, and adds two additional, optional properties: `statusCode: number` and `validation: ValidationResult[]`.

##### fastify.ValidationResult[​](#fastifyvalidationresult "Direct link to fastify.ValidationResult")

[src](https://github.com/fastify/fastify/blob/main/fastify.d.ts#L184)

The route validation internally relies upon Ajv, which is a high-performance JSON schema validator.

This interface is passed to instance of FastifyError.

***

#### Hooks[​](#hooks "Direct link to Hooks")

##### fastify.onRequestHookHandler< [RawServer](#rawserver), [RawRequest](#rawrequest), [RawReply](#rawreply), [RequestGeneric](#fastifyrequestgenericinterface), [ContextConfig](#ContextConfigGeneric)>(request: [FastifyRequest](#fastifyfastifyrequestrawserver-rawrequest-requestgeneric), reply: [FastifyReply](#fastifyfastifyreplyrawserver-rawreply-contextconfig), done: (err?: [FastifyError](#fastifyfastifyerror)) => void): Promise\ | void[​](#fastifyonrequesthookhandler-rawserver-rawrequest-rawreply-requestgeneric-contextconfigrequest-fastifyrequest-reply-fastifyreply-done-err-fastifyerror--void-promiseunknown--void "Direct link to fastifyonrequesthookhandler-rawserver-rawrequest-rawreply-requestgeneric-contextconfigrequest-fastifyrequest-reply-fastifyreply-done-err-fastifyerror--void-promiseunknown--void")

[src](https://github.com/fastify/fastify/blob/main/types/hooks.d.ts#L17)

`onRequest` is the first hook to be executed in the request lifecycle. There was no previous hook, the next hook will be `preParsing`.

Notice: in the `onRequest` hook, request.body will always be null, because the body parsing happens before the `preHandler` hook.

##### fastify.preParsingHookHandler< [RawServer](#rawserver), [RawRequest](#rawrequest), [RawReply](#rawreply), [RequestGeneric](#fastifyrequestgenericinterface), [ContextConfig](#ContextConfigGeneric)>(request: [FastifyRequest](#fastifyfastifyrequestrawserver-rawrequest-requestgeneric), reply: [FastifyReply](#fastifyfastifyreplyrawserver-rawreply-contextconfig), done: (err?: [FastifyError](#fastifyfastifyerror)) => void): Promise\ | void[​](#fastifypreparsinghookhandler-rawserver-rawrequest-rawreply-requestgeneric-contextconfigrequest-fastifyrequest-reply-fastifyreply-done-err-fastifyerror--void-promiseunknown--void "Direct link to fastifypreparsinghookhandler-rawserver-rawrequest-rawreply-requestgeneric-contextconfigrequest-fastifyrequest-reply-fastifyreply-done-err-fastifyerror--void-promiseunknown--void")

[src](https://github.com/fastify/fastify/blob/main/types/hooks.d.ts#L35)

`preParsing` is the second hook to be executed in the request lifecycle. The previous hook was `onRequest`, the next hook will be `preValidation`.

Notice: in the `preParsing` hook, request.body will always be null, because the body parsing happens before the `preValidation` hook.

Notice: you should also add `receivedEncodedLength` property to the returned stream. This property is used to correctly match the request payload with the `Content-Length` header value. Ideally, this property should be updated on each received chunk.

##### fastify.preValidationHookHandler< [RawServer](#rawserver), [RawRequest](#rawrequest), [RawReply](#rawreply), [RequestGeneric](#fastifyrequestgenericinterface), [ContextConfig](#ContextConfigGeneric)>(request: [FastifyRequest](#fastifyfastifyrequestrawserver-rawrequest-requestgeneric), reply: [FastifyReply](#fastifyfastifyreplyrawserver-rawreply-contextconfig), done: (err?: [FastifyError](#fastifyfastifyerror)) => void): Promise\ | void[​](#fastifyprevalidationhookhandler-rawserver-rawrequest-rawreply-requestgeneric-contextconfigrequest-fastifyrequest-reply-fastifyreply-done-err-fastifyerror--void-promiseunknown--void "Direct link to fastifyprevalidationhookhandler-rawserver-rawrequest-rawreply-requestgeneric-contextconfigrequest-fastifyrequest-reply-fastifyreply-done-err-fastifyerror--void-promiseunknown--void")

[src](https://github.com/fastify/fastify/blob/main/types/hooks.d.ts#L53)

`preValidation` is the third hook to be executed in the request lifecycle. The previous hook was `preParsing`, the next hook will be `preHandler`.

##### fastify.preHandlerHookHandler< [RawServer](#rawserver), [RawRequest](#rawrequest), [RawReply](#rawreply), [RequestGeneric](#fastifyrequestgenericinterface), [ContextConfig](#ContextConfigGeneric)>(request: [FastifyRequest](#fastifyfastifyrequestrawserver-rawrequest-requestgeneric), reply: [FastifyReply](#fastifyfastifyreplyrawserver-rawreply-contextconfig), done: (err?: [FastifyError](#fastifyfastifyerror)) => void): Promise\ | void[​](#fastifyprehandlerhookhandler-rawserver-rawrequest-rawreply-requestgeneric-contextconfigrequest-fastifyrequest-reply-fastifyreply-done-err-fastifyerror--void-promiseunknown--void "Direct link to fastifyprehandlerhookhandler-rawserver-rawrequest-rawreply-requestgeneric-contextconfigrequest-fastifyrequest-reply-fastifyreply-done-err-fastifyerror--void-promiseunknown--void")

[src](https://github.com/fastify/fastify/blob/main/types/hooks.d.ts#L70)

`preHandler` is the fourth hook to be executed in the request lifecycle. The previous hook was `preValidation`, the next hook will be `preSerialization`.

##### fastify.preSerializationHookHandler< PreSerializationPayload, [RawServer](#rawserver), [RawRequest](#rawrequest), [RawReply](#rawreply), [RequestGeneric](#fastifyrequestgenericinterface), [ContextConfig](#ContextConfigGeneric)>(request: [FastifyRequest](#fastifyfastifyrequestrawserver-rawrequest-requestgeneric), reply: [FastifyReply](#fastifyfastifyreplyrawserver-rawreply-contextconfig), payload: PreSerializationPayload, done: (err: [FastifyError](#fastifyfastifyerror) | null, res?: unknown) => void): Promise\ | void[​](#fastifypreserializationhookhandler-preserializationpayload-rawserver-rawrequest-rawreply-requestgeneric-contextconfigrequest-fastifyrequest-reply-fastifyreply-payload-preserializationpayload-done-err-fastifyerror--null-res-unknown--void-promiseunknown--void "Direct link to fastifypreserializationhookhandler-preserializationpayload-rawserver-rawrequest-rawreply-requestgeneric-contextconfigrequest-fastifyrequest-reply-fastifyreply-payload-preserializationpayload-done-err-fastifyerror--null-res-unknown--void-promiseunknown--void")

[src](https://github.com/fastify/fastify/blob/main/types/hooks.d.ts#L94)

`preSerialization` is the fifth hook to be executed in the request lifecycle. The previous hook was `preHandler`, the next hook will be `onSend`.

Note: the hook is NOT called if the payload is a string, a Buffer, a stream or null.

##### fastify.onSendHookHandler< OnSendPayload, [RawServer](#rawserver), [RawRequest](#rawrequest), [RawReply](#rawreply), [RequestGeneric](#fastifyrequestgenericinterface), [ContextConfig](#ContextConfigGeneric)>(request: [FastifyRequest](#fastifyfastifyrequestrawserver-rawrequest-requestgeneric), reply: [FastifyReply](#fastifyfastifyreplyrawserver-rawreply-contextconfig), payload: OnSendPayload, done: (err: [FastifyError](#fastifyfastifyerror) | null, res?: unknown) => void): Promise\ | void[​](#fastifyonsendhookhandler-onsendpayload-rawserver-rawrequest-rawreply-requestgeneric-contextconfigrequest-fastifyrequest-reply-fastifyreply-payload-onsendpayload-done-err-fastifyerror--null-res-unknown--void-promiseunknown--void "Direct link to fastifyonsendhookhandler-onsendpayload-rawserver-rawrequest-rawreply-requestgeneric-contextconfigrequest-fastifyrequest-reply-fastifyreply-payload-onsendpayload-done-err-fastifyerror--null-res-unknown--void-promiseunknown--void")

[src](https://github.com/fastify/fastify/blob/main/types/hooks.d.ts#L114)

You can change the payload with the `onSend` hook. It is the sixth hook to be executed in the request lifecycle. The previous hook was `preSerialization`, the next hook will be `onResponse`.

Note: If you change the payload, you may only change it to a string, a Buffer, a stream, or null.

##### fastify.onResponseHookHandler< [RawServer](#rawserver), [RawRequest](#rawrequest), [RawReply](#rawreply), [RequestGeneric](#fastifyrequestgenericinterface), [ContextConfig](#ContextConfigGeneric)>(request: [FastifyRequest](#fastifyfastifyrequestrawserver-rawrequest-requestgeneric), reply: [FastifyReply](#fastifyfastifyreplyrawserver-rawreply-contextconfig), done: (err?: [FastifyError](#fastifyfastifyerror)) => void): Promise\ | void[​](#fastifyonresponsehookhandler-rawserver-rawrequest-rawreply-requestgeneric-contextconfigrequest-fastifyrequest-reply-fastifyreply-done-err-fastifyerror--void-promiseunknown--void "Direct link to fastifyonresponsehookhandler-rawserver-rawrequest-rawreply-requestgeneric-contextconfigrequest-fastifyrequest-reply-fastifyreply-done-err-fastifyerror--void-promiseunknown--void")

[src](https://github.com/fastify/fastify/blob/main/types/hooks.d.ts#L134)

`onResponse` is the seventh and last hook in the request hook lifecycle. The previous hook was `onSend`, there is no next hook.

The onResponse hook is executed when a response has been sent, so you will not be able to send more data to the client. It can however be useful for sending data to external services, for example to gather statistics.

##### fastify.onErrorHookHandler< [RawServer](#rawserver), [RawRequest](#rawrequest), [RawReply](#rawreply), [RequestGeneric](#fastifyrequestgenericinterface), [ContextConfig](#ContextConfigGeneric)>(request: [FastifyRequest](#fastifyfastifyrequestrawserver-rawrequest-requestgeneric), reply: [FastifyReply](#fastifyfastifyreplyrawserver-rawreply-contextconfig), error: [FastifyError](#fastifyfastifyerror), done: () => void): Promise\ | void[​](#fastifyonerrorhookhandler-rawserver-rawrequest-rawreply-requestgeneric-contextconfigrequest-fastifyrequest-reply-fastifyreply-error-fastifyerror-done---void-promiseunknown--void "Direct link to fastifyonerrorhookhandler-rawserver-rawrequest-rawreply-requestgeneric-contextconfigrequest-fastifyrequest-reply-fastifyreply-error-fastifyerror-done---void-promiseunknown--void")

[src](https://github.com/fastify/fastify/blob/main/types/hooks.d.ts#L154)

This hook is useful if you need to do some custom error logging or add some specific header in case of error.

It is not intended for changing the error, and calling reply.send will throw an exception.

This hook will be executed only after the customErrorHandler has been executed, and only if the customErrorHandler sends an error back to the user (Note that the default customErrorHandler always sends the error back to the user).

Notice: unlike the other hooks, pass an error to the done function is not supported.

##### fastify.onRouteHookHandler< [RawServer](#rawserver), [RawRequest](#rawrequest), [RawReply](#rawreply), [RequestGeneric](#fastifyrequestgenericinterface), [ContextConfig](#ContextConfigGeneric)>(opts: [RouteOptions](#fastifyrouteoptionsrawserver-rawrequest-rawreply-requestgeneric-contextconfig) & { path: string; prefix: string }): Promise\ | void[​](#fastifyonroutehookhandler-rawserver-rawrequest-rawreply-requestgeneric-contextconfigopts-routeoptions---path-string-prefix-string--promiseunknown--void "Direct link to fastifyonroutehookhandler-rawserver-rawrequest-rawreply-requestgeneric-contextconfigopts-routeoptions---path-string-prefix-string--promiseunknown--void")

[src](https://github.com/fastify/fastify/blob/main/types/hooks.d.ts#L174)

Triggered when a new route is registered. Listeners are passed a routeOptions object as the sole parameter. The interface is synchronous, and, as such, the listener does not get passed a callback

##### fastify.onRegisterHookHandler< [RawServer](#rawserver), [RawRequest](#rawrequest), [RawReply](#rawreply), [Logger](#logger)>(instance: [FastifyInstance](#fastifyfastifyinstance), done: (err?: [FastifyError](#fastifyfastifyerror)) => void): Promise\ | void[​](#fastifyonregisterhookhandler-rawserver-rawrequest-rawreply-loggerinstance-fastifyinstance-done-err-fastifyerror--void-promiseunknown--void "Direct link to fastifyonregisterhookhandler-rawserver-rawrequest-rawreply-loggerinstance-fastifyinstance-done-err-fastifyerror--void-promiseunknown--void")

[src](https://github.com/fastify/fastify/blob/main/types/hooks.d.ts#L191)

Triggered when a new plugin is registered and a new encapsulation context is created. The hook will be executed before the registered code.

This hook can be useful if you are developing a plugin that needs to know when a plugin context is formed, and you want to operate in that specific context.

Note: This hook will not be called if a plugin is wrapped inside fastify-plugin.

##### fastify.onCloseHookHandler< [RawServer](#rawserver), [RawRequest](#rawrequest), [RawReply](#rawreply), [Logger](#logger)>(instance: [FastifyInstance](#fastifyfastifyinstance), done: (err?: [FastifyError](#fastifyfastifyerror)) => void): Promise\ | void[​](#fastifyonclosehookhandler-rawserver-rawrequest-rawreply-loggerinstance-fastifyinstance-done-err-fastifyerror--void-promiseunknown--void "Direct link to fastifyonclosehookhandler-rawserver-rawrequest-rawreply-loggerinstance-fastifyinstance-done-err-fastifyerror--void-promiseunknown--void")

[src](https://github.com/fastify/fastify/blob/main/types/hooks.d.ts#L206)

Triggered when fastify.close() is invoked to stop the server. It is useful when plugins need a "shutdown" event, for example to close an open connection to a database.

***
