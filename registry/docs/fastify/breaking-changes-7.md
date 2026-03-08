## Breaking Changes[​](#breaking-changes "Direct link to Breaking Changes")

### Full JSON Schema is now required for `querystring`, `params` and `body` and response schemas[​](#full-json-schema-is-now-required-for-querystring-params-and-body-and-response-schemas "Direct link to full-json-schema-is-now-required-for-querystring-params-and-body-and-response-schemas")

Starting with v5, Fastify will require a full JSON schema for the `querystring`, `params` and `body` schema. Note that the `jsonShortHand` option has been removed as well.

If the default JSON Schema validator is used, you will need to provide a full JSON schema for the `querystring`, `params`, `body`, and `response` schemas, including the `type` property.

```
// v4
fastify.get('/route', {
  schema: {
    querystring: {
      name: { type: 'string' }
    }
  }
}, (req, reply) => {
  reply.send({ hello: req.query.name });
});
```

```
// v5
fastify.get('/route', {
  schema: {
    querystring: {
      type: 'object',
      properties: {
        name: { type: 'string' }
      },
      required: ['name']
    }
  }
}, (req, reply) => {
  reply.send({ hello: req.query.name });
});
```

See [#5586](https://github.com/fastify/fastify/pull/5586) for more details

Note that it's still possible to override the JSON Schema validator to use a different format, such as Zod. This change simplifies that as well.

This change helps with integration of other tools, such as [`@fastify/swagger`](https://github.com/fastify/fastify-swagger).

### New logger constructor signature[​](#new-logger-constructor-signature "Direct link to New logger constructor signature")

In Fastify v4, Fastify accepted the options to build a pino logger in the `logger` option, as well as a custom logger instance. This was the source of significant confusion.

As a result, the `logger` option will not accept a custom logger anymore in v5. To use a custom logger, you should use the `loggerInstance` option instead:

```
// v4
const logger = require('pino')();
const fastify = require('fastify')({
  logger
});
```

```
// v5
const loggerInstance = require('pino')();
const fastify = require('fastify')({
  loggerInstance
});
```

### `useSemicolonDelimiter` false by default[​](#usesemicolondelimiter-false-by-default "Direct link to usesemicolondelimiter-false-by-default")

Starting with v5, Fastify instances will no longer default to supporting the use of semicolon delimiters in the query string as they did in v4. This is due to it being non-standard behavior and not adhering to [RFC 3986](https://www.rfc-editor.org/rfc/rfc3986#section-3.4).

If you still wish to use semicolons as delimiters, you can do so by setting `useSemicolonDelimiter: true` in the server configuration.

```
const fastify = require('fastify')({
  useSemicolonDelimiter: true
});
```

### The parameters object no longer has a prototype[​](#the-parameters-object-no-longer-has-a-prototype "Direct link to The parameters object no longer has a prototype")

In v4, the `parameters` object had a prototype. This is no longer the case in v5. This means that you can no longer access properties inherited from `Object` on the `parameters` object, such as `toString` or `hasOwnProperty`.

```
// v4
fastify.get('/route/:name', (req, reply) => {
  console.log(req.params.hasOwnProperty('name')); // true
  return { hello: req.params.name };
});
```

```
// v5
fastify.get('/route/:name', (req, reply) => {
  console.log(Object.hasOwn(req.params, 'name')); // true
  return { hello: req.params.name };
});
```

This increases the security of the application by hardening against prototype pollution attacks.

### Type Providers now differentiate between validator and serializer schemas[​](#type-providers-now-differentiate-between-validator-and-serializer-schemas "Direct link to Type Providers now differentiate between validator and serializer schemas")

In v4, the type providers had the same types for both validation and serialization. In v5, the type providers have been split into two separate types: `ValidatorSchema` and `SerializerSchema`.

[`@fastify/type-provider-json-schema-to-ts`](https://github.com/fastify/fastify-type-provider-json-schema-to-ts) and [`@fastify/type-provider-typebox`](https://github.com/fastify/fastify-type-provider-typebox) have already been updated: upgrade to the latest version to get the new types. If you are using a custom type provider, you will need to modify it like the following:

```
--- a/index.ts
+++ b/index.ts
@@ -11,7 +11,8 @@ import {
 import { FromSchema, FromSchemaDefaultOptions, FromSchemaOptions, JSONSchema } from 'json-schema-to-ts'

 export interface JsonSchemaToTsProvider<
   Options extends FromSchemaOptions = FromSchemaDefaultOptions
 > extends FastifyTypeProvider {
-  output: this['input'] extends JSONSchema ? FromSchema<this['input'], Options> : unknown;
+  validator: this['schema'] extends JSONSchema ? FromSchema<this['schema'], Options> : unknown;
+  serializer: this['schema'] extends JSONSchema ? FromSchema<this['schema'], Options> : unknown;
 }
```

### Changes to the .listen() method[​](#changes-to-the-listen-method "Direct link to Changes to the .listen() method")

The variadic argument signature of the `.listen()` method has been removed. This means that you can no longer call `.listen()` with a variable number of arguments.

```
// v4
fastify.listen(8000)
```

Will become:

```
// v5
fastify.listen({ port: 8000 })
```

This was already deprecated in v4 as `FSTDEP011`, so you should have already updated your code to use the new signature.

### Direct return of trailers has been removed[​](#direct-return-of-trailers-has-been-removed "Direct link to Direct return of trailers has been removed")

In v4, you could directly return trailers from a handler. This is no longer possible in v5.

```
// v4
fastify.get('/route', (req, reply) => {
  reply.trailer('ETag', function (reply, payload) {
    return 'custom-etag'
  })
  reply.send('')
});
```

```
// v5
fastify.get('/route', (req, reply) => {
  reply.trailer('ETag', async function (reply, payload) {
    return 'custom-etag'
  })
  reply.send('')
});
```

A callback could also be used. This was already deprecated in v4 as `FSTDEP013`, so you should have already updated your code to use the new signature.

### Streamlined access to route definition[​](#streamlined-access-to-route-definition "Direct link to Streamlined access to route definition")

All deprecated properties relating to accessing the route definition have been removed and are now accessed via `request.routeOptions`.

| Code      | Description                                                         | How to solve                                                        | Discussion                                                                                                  |
| --------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------- |
| FSTDEP012 | You are trying to access the deprecated `request.context` property. | Use `request.routeOptions.config` or `request.routeOptions.schema`. | [#4216](https://github.com/fastify/fastify/pull/4216) [#5084](https://github.com/fastify/fastify/pull/5084) |
| FSTDEP015 | You are accessing the deprecated `request.routeSchema` property.    | Use `request.routeOptions.schema`.                                  | [#4470](https://github.com/fastify/fastify/pull/4470)                                                       |
| FSTDEP016 | You are accessing the deprecated `request.routeConfig` property.    | Use `request.routeOptions.config`.                                  | [#4470](https://github.com/fastify/fastify/pull/4470)                                                       |
| FSTDEP017 | You are accessing the deprecated `request.routerPath` property.     | Use `request.routeOptions.url`.                                     | [#4470](https://github.com/fastify/fastify/pull/4470)                                                       |
| FSTDEP018 | You are accessing the deprecated `request.routerMethod` property.   | Use `request.routeOptions.method`.                                  | [#4470](https://github.com/fastify/fastify/pull/4470)                                                       |
| FSTDEP019 | You are accessing the deprecated `reply.context` property.          | Use `reply.routeOptions.config` or `reply.routeOptions.schema`.     | [#5032](https://github.com/fastify/fastify/pull/5032) [#5084](https://github.com/fastify/fastify/pull/5084) |

See [#5616](https://github.com/fastify/fastify/pull/5616) for more information.

### `reply.redirect()` has a new signature[​](#replyredirect-has-a-new-signature "Direct link to replyredirect-has-a-new-signature")

The `reply.redirect()` method has a new signature: `reply.redirect(url: string, code?: number)`.

```
// v4
reply.redirect(301, '/new-route')
```

Change it to:

```
// v5
reply.redirect('/new-route', 301)
```

This was already deprecated in v4 as `FSTDEP021`, so you should have already updated your code to use the new signature.

### Modifying `reply.sent` is now forbidden[​](#modifying-replysent-is-now-forbidden "Direct link to modifying-replysent-is-now-forbidden")

In v4, you could modify the `reply.sent` property to prevent the response from being sent. This is no longer possible in v5, use `reply.hijack()` instead.

```
// v4
fastify.get('/route', (req, reply) => {
  reply.sent = true;
  reply.raw.end('hello');
});
```

Change it to:

```
// v5
fastify.get('/route', (req, reply) => {
  reply.hijack();
  reply.raw.end('hello');
});
```

This was already deprecated in v4 as `FSTDEP010`, so you should have already updated your code to use the new signature.

### Constraints for route versioning signature changes[​](#constraints-for-route-versioning-signature-changes "Direct link to Constraints for route versioning signature changes")

We changed the signature for route versioning constraints. The `version` and `versioning` options have been removed and you should use the `constraints` option instead.

| Code      | Description                                                                                   | How to solve                                  | Discussion                                            |
| --------- | --------------------------------------------------------------------------------------------- | --------------------------------------------- | ----------------------------------------------------- |
| FSTDEP008 | You are using route constraints via the route `{version: "..."}` option.                      | Use `{constraints: {version: "..."}}` option. | [#2682](https://github.com/fastify/fastify/pull/2682) |
| FSTDEP009 | You are using a custom route versioning strategy via the server `{versioning: "..."}` option. | Use `{constraints: {version: "..."}}` option. | [#2682](https://github.com/fastify/fastify/pull/2682) |

### `HEAD` routes requires to register before `GET` when `exposeHeadRoutes: true`[​](#head-routes-requires-to-register-before-get-when-exposeheadroutes-true "Direct link to head-routes-requires-to-register-before-get-when-exposeheadroutes-true")

We have a more strict requirement for custom `HEAD` route when `exposeHeadRoutes: true`.

When you provides a custom `HEAD` route, you must either explicitly set `exposeHeadRoutes` to `false`

```
// v4
fastify.get('/route', {

}, (req, reply) => {
  reply.send({ hello: 'world' });
});

fastify.head('/route', (req, reply) => {
  // ...
});
```

```
// v5
fastify.get('/route', {
  exposeHeadRoutes: false
}, (req, reply) => {
  reply.send({ hello: 'world' });
});

fastify.head('/route', (req, reply) => {
  // ...
});
```

or place the `HEAD` route before `GET`.

```
// v5
fastify.head('/route', (req, reply) => {
  // ...
});

fastify.get('/route', {

}, (req, reply) => {
  reply.send({ hello: 'world' });
});
```

This was changed in [#2700](https://github.com/fastify/fastify/pull/2700), and the old behavior was deprecated in v4 as `FSTDEP007`.

### Removed `request.connection`[​](#removed-requestconnection "Direct link to removed-requestconnection")

The `request.connection` property has been removed in v5. You should use `request.socket` instead.

```
// v4
fastify.get('/route', (req, reply) => {
  console.log(req.connection.remoteAddress);
  return { hello: 'world' };
});
```

```
// v5
fastify.get('/route', (req, reply) => {
  console.log(req.socket.remoteAddress);
  return { hello: 'world' };
});
```

This was already deprecated in v4 as `FSTDEP05`, so you should have already updated your code to use the new signature.

### `reply.getResponseTime()` has been removed, use `reply.elapsedTime` instead[​](#replygetresponsetime-has-been-removed-use-replyelapsedtime-instead "Direct link to replygetresponsetime-has-been-removed-use-replyelapsedtime-instead")

The `reply.getResponseTime()` method has been removed in v5. You should use `reply.elapsedTime` instead.

```
// v4
fastify.get('/route', (req, reply) => {
  console.log(reply.getResponseTime());
  return { hello: 'world' };
});
```

```
// v5
fastify.get('/route', (req, reply) => {
  console.log(reply.elapsedTime);
  return { hello: 'world' };
});
```

This was already deprecated in v4 as `FSTDEP20`, so you should have already updated your code to use the new signature.

### `fastify.hasRoute()` now matches the behavior of `find-my-way`[​](#fastifyhasroute-now-matches-the-behavior-of-find-my-way "Direct link to fastifyhasroute-now-matches-the-behavior-of-find-my-way")

The `fastify.hasRoute()` method now matches the behavior of `find-my-way` and requires the route definition to be passed as it is defined in the route.

```
// v4
fastify.get('/example/:file(^\\d+).png', function (request, reply) { })

console.log(fastify.hasRoute({
  method: 'GET',
  url: '/example/12345.png'
)); // true
```

```
// v5

fastify.get('/example/:file(^\\d+).png', function (request, reply) { })

console.log(fastify.hasRoute({
  method: 'GET',
  url: '/example/:file(^\\d+).png'
)); // true
```

### Removal of some non-standard HTTP methods[​](#removal-of-some-non-standard-http-methods "Direct link to Removal of some non-standard HTTP methods")

We have removed the following HTTP methods from Fastify:

- `PROPFIND`
- `PROPPATCH`
- `MKCOL`
- `COPY`
- `MOVE`
- `LOCK`
- `UNLOCK`
- `TRACE`
- `SEARCH`

It's now possible to add them back using the `addHttpMethod` method.

```
const fastify = Fastify()

// add a new http method on top of the default ones:
fastify.addHttpMethod('REBIND')

// add a new HTTP method that accepts a body:
fastify.addHttpMethod('REBIND', { hasBody: true })

// reads the HTTP methods list:
fastify.supportedMethods // returns a string array
```

See [#5567](https://github.com/fastify/fastify/pull/5567) for more information.

### Removed support from reference types in decorators[​](#removed-support-from-reference-types-in-decorators "Direct link to Removed support from reference types in decorators")

Decorating Request/Reply with a reference type (`Array`, `Object`) is now prohibited as this reference is shared amongst all requests.

```
// v4
fastify.decorateRequest('myObject', { hello: 'world' });
```

```
// v5
fastify.decorateRequest('myObject');
fastify.addHook('onRequest', async (req, reply) => {
  req.myObject = { hello: 'world' };
});
```

or turn it into a function

```
// v5
fastify.decorateRequest('myObject', () => ({ hello: 'world' }));
```

or as a getter

```
// v5
fastify.decorateRequest('myObject', {
  getter () {
    return { hello: 'world' }
  }
});
```

See [#5462](https://github.com/fastify/fastify/pull/5462) for more information.

### Remove support for DELETE with a `Content-Type: application/json` header and an empty body[​](#remove-support-for-delete-with-a-content-type-applicationjson-header-and-an-empty-body "Direct link to remove-support-for-delete-with-a-content-type-applicationjson-header-and-an-empty-body")

In v4, Fastify allowed `DELETE` requests with a `Content-Type: application/json` header and an empty body was accepted. This is no longer allowed in v5.

See [#5419](https://github.com/fastify/fastify/pull/5419) for more information.

### Plugins cannot mix callback/promise API anymore[​](#plugins-cannot-mix-callbackpromise-api-anymore "Direct link to Plugins cannot mix callback/promise API anymore")

In v4, plugins could mix the callback and promise API, leading to unexpected behavior. This is no longer allowed in v5.

```
// v4
fastify.register(async function (instance, opts, done) {
  done();
});
```

```
// v5
fastify.register(async function (instance, opts) {
  return;
});
```

or

```
// v5
fastify.register(function (instance, opts, done) {
  done();
});
```

### Requests now have `host`, `hostname`, and `port`, and `hostname` no longer includes the port number[​](#requests-now-have-host-hostname-and-port-and-hostname-no-longer-includes-the-port-number "Direct link to requests-now-have-host-hostname-and-port-and-hostname-no-longer-includes-the-port-number")

In Fastify v4, `req.hostname` would include both the hostname and the server’s port, so locally it might have the value `localhost:1234`. With v5, we aligned to the Node.js URL object and now include `host`, `hostname`, and `port` properties. `req.host` has the same value as `req.hostname` did in v4, while `req.hostname` includes the hostname *without* a port if a port is present, and `req.port` contains just the port number. See [#4766](https://github.com/fastify/fastify/pull/4766) and [#4682](https://github.com/fastify/fastify/issues/4682) for more information.

### Removes `getDefaultRoute` and `setDefaultRoute` methods[​](#removes-getdefaultroute-and-setdefaultroute-methods "Direct link to removes-getdefaultroute-and-setdefaultroute-methods")

The `getDefaultRoute` and `setDefaultRoute` methods have been removed in v5.

See [#4485](https://github.com/fastify/fastify/pull/4485) and [#4480](https://github.com/fastify/fastify/pull/4485) for more information. This was already deprecated in v4 as `FSTDEP014`, so you should have already updated your code.

### `time` and `date-time` formats enforce timezone[​](#time-and-date-time-formats-enforce-timezone "Direct link to time-and-date-time-formats-enforce-timezone")

The updated AJV compiler updates `ajv-formats` which now enforce the use of timezone in `time` and `date-time` format. A workaround is to use `iso-time` and `iso-date-time` formats which support an optional timezone for backwards compatibility.See the [full discussion](https://github.com/fastify/fluent-json-schema/issues/267).

## New Features[​](#new-features "Direct link to New Features")

### Diagnostic Channel support[​](#diagnostic-channel-support "Direct link to Diagnostic Channel support")

Fastify v5 now supports the [Diagnostics Channel](https://nodejs.org/api/diagnostics_channel.html) API natively and provides a way to trace the lifecycle of a request.

```
'use strict'

const diagnostics = require('node:diagnostics_channel')
const Fastify = require('fastify')

diagnostics.subscribe('tracing:fastify.request.handler:start', (msg) => {
  console.log(msg.route.url) // '/:id'
  console.log(msg.route.method) // 'GET'
})

diagnostics.subscribe('tracing:fastify.request.handler:end', (msg) => {
  // msg is the same as the one emitted by the 'tracing:fastify.request.handler:start' channel
  console.log(msg)
})

diagnostics.subscribe('tracing:fastify.request.handler:error', (msg) => {
  // in case of error
})

const fastify = Fastify()
fastify.route({
  method: 'GET',
  url: '/:id',
  handler: function (req, reply) {
    return { hello: 'world' }
  }
})

fastify.listen({ port: 0 }, async function () {
  const result = await fetch(fastify.listeningOrigin + '/7')

  t.assert.ok(result.ok)
  t.assert.strictEqual(response.status, 200)
  t.assert.deepStrictEqual(await result.json(), { hello: 'world' })
})
```

See the [documentation](https://github.com/fastify/fastify/blob/main/docs/Reference/Hooks.md#diagnostics-channel-hooks) and [#5252](https://github.com/fastify/fastify/pull/5252) for additional details.
