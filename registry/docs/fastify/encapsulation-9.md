# Encapsulation

## Encapsulation[​](#encapsulation "Direct link to Encapsulation")

[]()

A fundamental feature of Fastify is the "encapsulation context." It governs which [decorators](/docs/v5.5.x/Reference/Decorators/.md), registered [hooks](/docs/v5.5.x/Reference/Hooks/.md), and [plugins](/docs/v5.5.x/Reference/Plugins/.md) are available to [routes](/docs/v5.5.x/Reference/Routes/.md). A visual representation of the encapsulation context is shown in the following figure:

![Figure 1](/assets/images/encapsulation_context-e6a156b803389fb785e6d0eab3b3b287.svg)

In the figure above, there are several entities:

1. The *root context*

2. Three *root plugins*

3. Two *child contexts*, each with:

   - Two *child plugins*
   - One *grandchild context*, each with:

     - Three *child plugins*

Every *child context* and *grandchild context* has access to the *root plugins*. Within each *child context*, the *grandchild contexts* have access to the *child plugins* registered within the containing *child context*, but the containing *child context* **does not** have access to the *child plugins* registered within its *grandchild context*.

Given that everything in Fastify is a [plugin](/docs/v5.5.x/Reference/Plugins/.md) except for the *root context*, every "context" and "plugin" in this example is a plugin that can consist of decorators, hooks, plugins, and routes. To put this example into concrete terms, consider a basic scenario of a REST API server with three routes: the first route (`/one`) requires authentication, the second route (`/two`) does not, and the third route (`/three`) has access to the same context as the second route. Using [@fastify/bearer-auth](https://github.com/fastify/fastify-bearer-auth) to provide authentication, the code for this example is as follows:

```
'use strict'

const fastify = require('fastify')()

fastify.decorateRequest('answer', 42)

fastify.register(async function authenticatedContext (childServer) {
  childServer.register(require('@fastify/bearer-auth'), { keys: ['abc123'] })

  childServer.route({
    path: '/one',
    method: 'GET',
    handler (request, response) {
      response.send({
        answer: request.answer,
        // request.foo will be undefined as it is only defined in publicContext
        foo: request.foo,
        // request.bar will be undefined as it is only defined in grandchildContext
        bar: request.bar
      })
    }
  })
})

fastify.register(async function publicContext (childServer) {
  childServer.decorateRequest('foo', 'foo')

  childServer.route({
    path: '/two',
    method: 'GET',
    handler (request, response) {
      response.send({
        answer: request.answer,
        foo: request.foo,
        // request.bar will be undefined as it is only defined in grandchildContext
        bar: request.bar
      })
    }
  })

  childServer.register(async function grandchildContext (grandchildServer) {
    grandchildServer.decorateRequest('bar', 'bar')

    grandchildServer.route({
      path: '/three',
      method: 'GET',
      handler (request, response) {
        response.send({
          answer: request.answer,
          foo: request.foo,
          bar: request.bar
        })
      }
    })
  })
})

fastify.listen({ port: 8000 })
```

The server example above demonstrates the encapsulation concepts from the original diagram:

1. Each *child context* (`authenticatedContext`, `publicContext`, and `grandchildContext`) has access to the `answer` request decorator defined in the *root context*.
2. Only the `authenticatedContext` has access to the `@fastify/bearer-auth` plugin.
3. Both the `publicContext` and `grandchildContext` have access to the `foo` request decorator.
4. Only the `grandchildContext` has access to the `bar` request decorator.

To see this, start the server and issue requests:

```
# curl -H 'authorization: Bearer abc123' http://127.0.0.1:8000/one
{"answer":42}
# curl http://127.0.0.1:8000/two
{"answer":42,"foo":"foo"}
# curl http://127.0.0.1:8000/three
{"answer":42,"foo":"foo","bar":"bar"}
```

## Sharing Between Contexts[​](#sharing-between-contexts "Direct link to Sharing Between Contexts")

[]()

Each context in the prior example inherits *only* from its parent contexts. Parent contexts cannot access entities within their descendant contexts. If needed, encapsulation can be broken using [fastify-plugin](https://github.com/fastify/fastify-plugin), making anything registered in a descendant context available to the parent context.

To allow `publicContext` access to the `bar` decorator in `grandchildContext`, rewrite the code as follows:

```
'use strict'

const fastify = require('fastify')()
const fastifyPlugin = require('fastify-plugin')

fastify.decorateRequest('answer', 42)

// `authenticatedContext` omitted for clarity

fastify.register(async function publicContext (childServer) {
  childServer.decorateRequest('foo', 'foo')

  childServer.route({
    path: '/two',
    method: 'GET',
    handler (request, response) {
      response.send({
        answer: request.answer,
        foo: request.foo,
        bar: request.bar
      })
    }
  })

  childServer.register(fastifyPlugin(grandchildContext))

  async function grandchildContext (grandchildServer) {
    grandchildServer.decorateRequest('bar', 'bar')

    grandchildServer.route({
      path: '/three',
      method: 'GET',
      handler (request, response) {
        response.send({
          answer: request.answer,
          foo: request.foo,
          bar: request.bar
        })
      }
    })
  }
})

fastify.listen({ port: 8000 })
```

Restarting the server and re-issuing the requests for `/two` and `/three`:

```
# curl http://127.0.0.1:8000/two
{"answer":42,"foo":"foo","bar":"bar"}
# curl http://127.0.0.1:8000/three
{"answer":42,"foo":"foo","bar":"bar"}
```

***

# Errors
