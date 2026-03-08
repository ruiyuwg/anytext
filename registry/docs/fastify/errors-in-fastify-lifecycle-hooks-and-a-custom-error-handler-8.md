### Errors In Fastify Lifecycle Hooks And A Custom Error Handler[​](#errors-in-fastify-lifecycle-hooks-and-a-custom-error-handler "Direct link to Errors In Fastify Lifecycle Hooks And A Custom Error Handler")

From the [Hooks documentation](/docs/v5.6.x/Reference/Hooks/.md#manage-errors-from-a-hook):

> If you get an error during the execution of your hook, just pass it to `done()` and Fastify will automatically close the request and send the appropriate error code to the user.

When a custom error handler is defined through [`setErrorHandler`](/docs/v5.6.x/Reference/Server/.md#seterrorhandler), it will receive the error passed to the `done()` callback or through other supported automatic error handling mechanisms. If `setErrorHandler` is used multiple times, the error will be routed to the most precedent handler within the error [encapsulation context](/docs/v5.6.x/Reference/Encapsulation/.md). Error handlers are fully encapsulated, so a `setErrorHandler` call within a plugin will limit the error handler to that plugin's context.

The root error handler is Fastify's generic error handler. This error handler will use the headers and status code in the `Error` object, if they exist. The headers and status code will not be automatically set if a custom error handler is provided.

The following should be considered when using a custom error handler:

- `reply.send(data)` behaves as in [regular route handlers](/docs/v5.6.x/Reference/Reply/.md#senddata)

  - objects are serialized, triggering the `preSerialization` lifecycle hook if defined
  - strings, buffers, and streams are sent to the client with appropriate headers (no serialization)

- Throwing a new error in a custom error handler will call the parent `errorHandler`.

  - The `onError` hook will be triggered once for the first error thrown
  - An error will not be triggered twice from a lifecycle hook. Fastify internally monitors error invocation to avoid infinite loops for errors thrown in the reply phases of the lifecycle (those after the route handler)

When using Fastify's custom error handling through [`setErrorHandler`](/docs/v5.6.x/Reference/Server/.md#seterrorhandler), be aware of how errors are propagated between custom and default error handlers.

If a plugin's error handler re-throws an error that is not an instance of [Error](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Error), it will not propagate to the parent context error handler. Instead, it will be caught by the default error handler. This can be seen in the `/bad` route of the example below.

To ensure consistent error handling, throw instances of `Error`. For example, replace `throw 'foo'` with `throw new Error('foo')` in the `/bad` route to ensure errors propagate through the custom error handling chain as intended. This practice helps avoid potential pitfalls when working with custom error handling in Fastify.

For example:

```
const Fastify = require('fastify')

// Instantiate the framework
const fastify = Fastify({
  logger: true
})

// Register parent error handler
fastify.setErrorHandler((error, request, reply) => {
  reply.status(500).send({ ok: false })
})

fastify.register((app, options, next) => {
  // Register child error handler
  fastify.setErrorHandler((error, request, reply) => {
    throw error
  })

  fastify.get('/bad', async () => {
    // Throws a non-Error type, 'bar'
    throw 'foo'
  })

  fastify.get('/good', async () => {
    // Throws an Error instance, 'bar'
    throw new Error('bar')
  })

  next()
})

// Run the server
fastify.listen({ port: 3000 }, function (err, address) {
  if (err) {
    fastify.log.error(err)
    process.exit(1)
  }
  // Server is listening at ${address}
})
```
