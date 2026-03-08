### Errors In Fastify Lifecycle Hooks And A Custom Error Handler[​](#errors-in-fastify-lifecycle-hooks-and-a-custom-error-handler "Direct link to Errors In Fastify Lifecycle Hooks And A Custom Error Handler")

From the [Hooks documentation](/docs/v4.29.x/Reference/Hooks/.md#manage-errors-from-a-hook):

> If you get an error during the execution of your hook, just pass it to `done()` and Fastify will automatically close the request and send the appropriate error code to the user.

When a custom error handler has been defined through [`setErrorHandler`](/docs/v4.29.x/Reference/Server/.md#seterrorhandler), the custom error handler will receive the error passed to the `done()` callback (or through other supported automatic error handling mechanisms). If `setErrorHandler` has been used multiple times to define multiple handlers, the error will be routed to the most precedent handler defined within the error [encapsulation context](/docs/v4.29.x/Reference/Encapsulation/.md). Error handlers are fully encapsulated, so a `setErrorHandler` call within a plugin will limit the error handler to that plugin's context.

The root error handler is Fastify's generic error handler. This error handler will use the headers and status code in the `Error` object, if they exist. The headers and status code will not be automatically set if a custom error handler is provided.

Some things to consider in your custom error handler:

- you can `reply.send(data)`, which will behave as it would in [regular route handlers](/docs/v4.29.x/Reference/Reply/.md#senddata)

  - objects are serialized, triggering the `preSerialization` lifecycle hook if you have one defined
  - strings, buffers, and streams are sent to the client, with appropriate headers (no serialization)

- You can throw a new error in your custom error handler - errors (new error or the received error parameter re-thrown) - will call the parent `errorHandler`.

  - `onError` hook will be triggered once only for the first error being thrown.
  - an error will not be triggered twice from a lifecycle hook - Fastify internally monitors the error invocation to avoid infinite loops for errors thrown in the reply phases of the lifecycle. (those after the route handler)

When utilizing Fastify's custom error handling through [`setErrorHandler`](/docs/v4.29.x/Reference/Server/.md#seterrorhandler), you should be aware of how errors are propagated between custom and default error handlers.

If a plugin's error handler re-throws an error, and the error is not an instance of [Error](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Error) (as seen in the `/bad` route in the following example), it will not propagate to the parent context error handler. Instead, it will be caught by the default error handler.

To ensure consistent error handling, it is recommended to throw instances of `Error`. For instance, in the following example, replacing `throw 'foo'` with `throw new Error('foo')` in the `/bad` route ensures that errors propagate through the custom error handling chain as intended. This practice helps avoid potential pitfalls when working with custom error handling in Fastify.

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
