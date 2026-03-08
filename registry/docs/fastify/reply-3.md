# Reply

## Reply[​](#reply "Direct link to Reply")

- [Reply](#reply)

  - [Introduction](#introduction)

  - [.code(statusCode)](#codestatuscode)

  - [.statusCode](#statusCode)

  - [.header(key, value)](#headerkey-value)

  - [.headers(object)](#headersobject)

  - [.getHeader(key)](#getheaderkey)

  - [.removeHeader(key)](#removeheaderkey)

  - [.hasHeader(key)](#hasheaderkey)

  - [.redirect(dest)](#redirectdest)

  - [.callNotFound()](#callnotfound)

  - [.getResponseTime()](#getresponsetime)

  - [.type(contentType)](#typecontenttype)

  - [.serializer(func)](#serializerfunc)

  - [.sent](#sent)

  - [.send(data)](#senddata)

    - [Objects](#objects)
    - [Strings](#strings)
    - [Streams](#streams)
    - [Buffers](#buffers)
    - [Errors](#errors)
    - [Type of the final payload](#type-of-the-final-payload)
    - [Async-Await and Promises](#async-await-and-promises)

  - [.then](#then)

[]()

### Introduction[​](#introduction "Direct link to Introduction")

The second parameter of the handler function is `Reply`. Reply is a core Fastify object that exposes the following functions and properties:

- `.code(statusCode)` - Sets the status code.
- `.status(statusCode)` - An alias for `.code(statusCode)`.
- `.statusCode` - Read and set the HTTP status code.
- `.header(name, value)` - Sets a response header.
- `.headers(object)` - Sets all the keys of the object as a response headers.
- `.getHeader(name)` - Retrieve value of already set header.
- `.removeHeader(key)` - Remove the value of a previously set header.
- `.hasHeader(name)` - Determine if a header has been set.
- `.type(value)` - Sets the header `Content-Type`.
- `.redirect([code,] url)` - Redirect to the specified url, the status code is optional (default to `302`).
- `.callNotFound()` - Invokes the custom not found handler.
- `.serialize(payload)` - Serializes the specified payload using the default json serializer or using the custom serializer (if one is set) and returns the serialized payload.
- `.serializer(function)` - Sets a custom serializer for the payload.
- `.send(payload)` - Sends the payload to the user, could be a plain text, a buffer, JSON, stream, or an Error object.
- `.sent` - A boolean value that you can use if you need to know if `send` has already been called.
- `.res` - The [`http.ServerResponse`](https://nodejs.org/dist/latest/docs/api/http.html#http_class_http_serverresponse) from Node core.
- `.log` - The logger instance of the incoming request.
- `.request` - The incoming request.

```
fastify.get('/', options, function (request, reply) {
  // Your code
  reply
    .code(200)
    .header('Content-Type', 'application/json; charset=utf-8')
    .send({ hello: 'world' })
})
```

Additionally, `Reply` provides access to the context of the request:

```
fastify.get('/', {config: {foo: 'bar'}}, function (request, reply) {
  reply.send('handler config.foo = ' + reply.context.config.foo)
})
```

[]()

### .code(statusCode)[​](#codestatuscode "Direct link to .code(statusCode)")

If not set via `reply.code`, the resulting `statusCode` will be `200`.

[]()

### .statusCode[​](#statuscode "Direct link to .statusCode")

This property reads and sets the HTTP status code. It is an alias for `reply.code()` when used as a setter.

```
if (reply.statusCode >= 299) {
  reply.statusCode = 500
}
```

[]()

### .header(key, value)[​](#headerkey-value "Direct link to .header(key, value)")

Sets a response header. If the value is omitted or undefined it is coerced to `''`.

For more information, see [`http.ServerResponse#setHeader`](https://nodejs.org/dist/latest/docs/api/http.html#http_response_setheader_name_value).

[]()

### .headers(object)[​](#headersobject "Direct link to .headers(object)")

Sets all the keys of the object as response headers. [`.header`](#headerkey-value) will be called under the hood.

```
reply.headers({
  'x-foo': 'foo',
  'x-bar': 'bar'
})
```

[]()

### .getHeader(key)[​](#getheaderkey "Direct link to .getHeader(key)")

Retrieves the value of a previously set header.

```
reply.header('x-foo', 'foo') // setHeader: key, value
reply.getHeader('x-foo') // 'foo'
```

[]()

### .removeHeader(key)[​](#removeheaderkey "Direct link to .removeHeader(key)")

Remove the value of a previously set header.

```
reply.header('x-foo', 'foo')
reply.removeHeader('x-foo')
reply.getHeader('x-foo') // undefined
```

[]()

### .hasHeader(key)[​](#hasheaderkey "Direct link to .hasHeader(key)")

Returns a boolean indicating if the specified header has been set.

[]()

### .redirect(\[code ,] dest)[​](#redirectcode--dest "Direct link to .redirect([code ,] dest)")

Redirects a request to the specified url, the status code is optional, default to `302` (if status code is not already set by calling `code`).

Example (no `reply.code()` call) sets status code to `302` and redirects to `/home`

```
reply.redirect('/home')
```

Example (no `reply.code()` call) sets status code to `303` and redirects to `/home`

```
reply.redirect(303, '/home')
```

Example (`reply.code()` call) sets status code to `303` and redirects to `/home`

```
reply.code(303).redirect('/home')
```

Example (`reply.code()` call) sets status code to `302` and redirects to `/home`

```
reply.code(303).redirect(302, '/home')
```

[]()

### .callNotFound()[​](#callnotfound "Direct link to .callNotFound()")

Invokes the custom not found handler. Note that it will only call `preHandler` hook specified in [`setNotFoundHandler`](https://github.com/fastify/fastify/blob/master/docs/Server.md#set-not-found-handler).

```
reply.callNotFound()
```

[]()

### .getResponseTime()[​](#getresponsetime "Direct link to .getResponseTime()")

Invokes the custom response time getter to calculate the amount of time passed since the request was started.

```
const milliseconds = reply.getResponseTime()
```

[]()

### .type(contentType)[​](#typecontenttype "Direct link to .type(contentType)")

Sets the content type for the response. This is a shortcut for `reply.header('Content-Type', 'the/type')`.

```
reply.type('text/html')
```

[]()

### .serializer(func)[​](#serializerfunc "Direct link to .serializer(func)")

`.send()` will by default JSON-serialize any value that is not one of: `Buffer`, `stream`, `string`, `undefined`, `Error`. If you need to replace the default serializer with a custom serializer for a particular request, you can do so with the `.serializer()` utility. Be aware that if you are using a custom serializer, you must set a custom `'Content-Type'` header.

```
reply
  .header('Content-Type', 'application/x-protobuf')
  .serializer(protoBuf.serialize)
```

Note that you don't need to use this utility inside a `handler` because Buffers, streams, and strings (unless a serializer is set) are considered to already be serialized.

```
reply
  .header('Content-Type', 'application/x-protobuf')
  .send(protoBuf.serialize(data))
```

See [`.send()`](#send) for more information on sending different types of values.

[]()

### .sent[​](#sent "Direct link to .sent")

As the name suggests, `.sent` is a property to indicate if a response has been sent via `reply.send()`.

In case a route handler is defined as an async function or it returns a promise, it is possible to set `reply.sent = true` to indicate that the automatic invocation of `reply.send()` once the handler promise resolve should be skipped. By setting `reply.sent = true`, an application claims full responsibility of the low-level request and response. Moreover, hooks will not be invoked.

As an example:

```
app.get('/', (req, reply) => {
  reply.sent = true
  reply.res.end('hello world')

  return Promise.resolve('this will be skipped')
})
```

If the handler rejects, the error will be logged.

[]()

### .send(data)[​](#senddata "Direct link to .send(data)")

As the name suggests, `.send()` is the function that sends the payload to the end user.

[]()

#### Objects[​](#objects "Direct link to Objects")

As noted above, if you are sending JSON objects, `send` will serialize the object with [fast-json-stringify](https://www.npmjs.com/package/fast-json-stringify) if you set an output schema, otherwise `JSON.stringify()` will be used.

```
fastify.get('/json', options, function (request, reply) {
  reply.send({ hello: 'world' })
})
```

[]()

#### Strings[​](#strings "Direct link to Strings")

If you pass a string to `send` without a `Content-Type`, it will be sent as `text/plain; charset=utf-8`. If you set the `Content-Type` header and pass a string to `send`, it will be serialized with the custom serializer if one is set, otherwise it will be sent unmodified (unless the `Content-Type` header is set to `application/json; charset=utf-8`, in which case it will be JSON-serialized like an object — see the section above).

```
fastify.get('/json', options, function (request, reply) {
  reply.send('plain string')
})
```

[]()

#### Streams[​](#streams "Direct link to Streams")

*send* can also handle streams out of the box, internally uses [pump](https://www.npmjs.com/package/pump) to avoid leaks of file descriptors. If you are sending a stream and you have not set a `'Content-Type'` header, *send* will set it at `'application/octet-stream'`.

```
fastify.get('/streams', function (request, reply) {
  const fs = require('fs')
  const stream = fs.createReadStream('some-file', 'utf8')
  reply.send(stream)
})
```

[]()

#### Buffers[​](#buffers "Direct link to Buffers")

If you are sending a buffer and you have not set a `'Content-Type'` header, *send* will set it to `'application/octet-stream'`.

```
const fs = require('fs')
fastify.get('/streams', function (request, reply) {
  fs.readFile('some-file', (err, fileBuffer) => {
    reply.send(err || fileBuffer)
  })
})
```

[]()

#### Errors[​](#errors "Direct link to Errors")

If you pass to *send* an object that is an instance of *Error*, Fastify will automatically create an error structured as the following:

```
{
  error: String        // the http error message
  code: String         // the Fastify error code
  message: String      // the user error message
  statusCode: Number   // the http status code
}
```

You can add some custom property to the Error object, such as `headers`, that will be used to enhance the http response.*Note: If you are passing an error to `send` and the statusCode is less than 400, Fastify will automatically set it at 500.*

Tip: you can simplify errors by using the [`http-errors`](https://npm.im/http-errors) module or [`fastify-sensible`](https://github.com/fastify/fastify-sensible) plugin to generate errors:

```
fastify.get('/', function (request, reply) {
  reply.send(httpErrors.Gone())
})
```

If you want to completely customize the error handling, checkout [`setErrorHandler`](https://github.com/fastify/fastify/blob/master/docs/Server.md#seterrorhandler) API.*Note: you are responsibile for logging when customizing the error handler*

API:

```
fastify.setErrorHandler(function (error, request, reply) {
  request.log.warn(error)
  var statusCode = error.statusCode >= 400 ? error.statusCode : 500
  reply
    .code(statusCode)
    .type('text/plain')
    .send(statusCode >= 500 ? 'Internal server error' : error.message)
})
```

The not found errors generated by the router will use the [`setNotFoundHandler`](https://github.com/fastify/fastify/blob/master/docs/Server.md#setnotfoundhandler)

API:

```
fastify.setNotFoundHandler(function (request, reply) {
  reply
    .code(404)
    .type('text/plain')
    .send('a custom not found')
})
```

[]()

#### Type of the final payload[​](#type-of-the-final-payload "Direct link to Type of the final payload")

The type of the sent payload (after serialization and going through any [`onSend` hooks](https://github.com/fastify/fastify/blob/master/docs/Hooks.md#the-onsend-hook)) must be one of the following types, otherwise an error will be thrown:

- `string`
- `Buffer`
- `stream`
- `undefined`
- `null`

[]()

#### Async-Await and Promises[​](#async-await-and-promises "Direct link to Async-Await and Promises")

Fastify natively handles promises and supports async-await.*Note that in the following examples we are not using reply.send.*

```
const delay = promisify(setTimeout)

fastify.get('/promises', options, function (request, reply) {
 return delay(200).then(() => { return { hello: 'world' }})
})

fastify.get('/async-await', options, async function (request, reply) {
  await delay(200)
  return { hello: 'world' }
})
```

Rejected promises default to a `500` HTTP status code. Reject the promise, or `throw` in an `async function`, with an *Error* object that has `statusCode` (or `status`) and `message` properties to modify the reply. Throwing plain objects is not supported, it must be an instance of *Error*, see:

```
fastify.get('/teapot', async function (request, reply) => {
  const err = new Error()
  err.statusCode = 418
  err.message = 'short and stout'
  throw err
})
```

If you want to know more please review [Routes#async-await](https://github.com/fastify/fastify/blob/master/docs/Routes.md#async-await).

[]()

### .then(fullfilled, rejected)[​](#thenfullfilled-rejected "Direct link to .then(fullfilled, rejected)")

As the name suggests, a `Reply` object can be awaited upon, i.e. `await reply` will wait until the reply is sent. The `await` syntax calls the `reply.then()`.

`reply.then(fullfilled, rejected)` accepts two parameters:

- `fullfilled` will be called when a response has been fully sent,
- `rejected` will be called if the underlying stream had an error, e.g. the socket has been destroyed.

For more details, see:

- <https://github.com/fastify/fastify/issues/1864> for the discussion about this feature
- for the definition of thenables
- <https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/then> for the signature

***

# Request

## Request[​](#request "Direct link to Request")

The first parameter of the handler function is `Request`.Request is a core Fastify object containing the following fields:

- `query` - the parsed querystring
- `body` - the body
- `params` - the params matching the URL
- `headers` - the headers
- `raw` - the incoming HTTP request from Node core *(you can use the alias `req`)*
- `id` - the request id
- `log` - the logger instance of the incoming request
- `ip` - the IP address of the incoming request
- `ips` - an array of the IP addresses in the `X-Forwarded-For` header of the incoming request (only when the [`trustProxy`](https://github.com/fastify/fastify/blob/master/docs/Server.md#factory-trust-proxy) option is enabled)
- `hostname` - the hostname of the incoming request

```
fastify.post('/:params', options, function (request, reply) {
  console.log(request.body)
  console.log(request.query)
  console.log(request.params)
  console.log(request.headers)
  console.log(request.raw)
  console.log(request.id)
  console.log(request.ip)
  console.log(request.ips)
  console.log(request.hostname)
  request.log.info('some info')
})
```

***
