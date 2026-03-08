# Decorators

## Decorators[​](#decorators "Direct link to Decorators")

The decorators API customizes core Fastify objects, such as the server instance and any request and reply objects used during the HTTP request lifecycle. It can attach any type of property to core objects, e.g., functions, plain objects, or native types.

This API is *synchronous*. Defining a decoration asynchronously could result in the Fastify instance booting before the decoration completes. To register an asynchronous decoration, use the `register` API with `fastify-plugin`. See the [Plugins](/docs/v5.7.x/Reference/Plugins/.md) documentation for more details.

Decorating core objects with this API allows the underlying JavaScript engine to optimize the handling of server, request, and reply objects. This is accomplished by defining the shape of all such object instances before they are instantiated and used. As an example, the following is not recommended because it will change the shape of objects during their lifecycle:

```
// Bad example! Continue reading.

// Attach a user property to the incoming request before the request
// handler is invoked.
fastify.addHook('preHandler', function (req, reply, done) {
  req.user = 'Bob Dylan'
  done()
})

// Use the attached user property in the request handler.
fastify.get('/', function (req, reply) {
  reply.send(`Hello, ${req.user}`)
})
```

The above example mutates the request object after instantiation, causing the JavaScript engine to deoptimize access. Using the decoration API avoids this deoptimization:

```
// Decorate request with a 'user' property
fastify.decorateRequest('user', '')

// Update our property
fastify.addHook('preHandler', (req, reply, done) => {
  req.user = 'Bob Dylan'
  done()
})
// And finally access it
fastify.get('/', (req, reply) => {
  reply.send(`Hello, ${req.user}!`)
})
```

Keep the initial shape of a decorated field close to its future dynamic value. Initialize a decorator as `''` for strings and `null` for objects or functions. This works only with value types; reference types will throw an error during Fastify startup. See [decorateRequest](#decorate-request) and [JavaScript engine fundamentals: Shapes and Inline Caches](https://mathiasbynens.be/notes/shapes-ics) for more information.

### Usage[​](#usage "Direct link to Usage")

[]()

#### `decorate(name, value, [dependencies])`[​](#decoratename-value-dependencies "Direct link to decoratename-value-dependencies")

[]()

This method customizes the Fastify [server](/docs/v5.7.x/Reference/Server/.md) instance.

For example, to attach a new method to the server instance:

```
fastify.decorate('utility', function () {
  // Something very useful
})
```

Non-function values can also be attached to the server instance:

```
fastify.decorate('conf', {
  db: 'some.db',
  port: 3000
})
```

To access decorated properties, use the name provided to the decoration API:

```
fastify.utility()

console.log(fastify.conf.db)
```

The decorated [Fastify server](/docs/v5.7.x/Reference/Server/.md) is bound to `this` in [route](/docs/v5.7.x/Reference/Routes/.md) handlers:

```
fastify.decorate('db', new DbConnection())

fastify.get('/', async function (request, reply) {
  // using return
  return { hello: await this.db.query('world') }

  // or
  // using reply.send()
  reply.send({ hello: await this.db.query('world') })
  await reply
})
```

The `dependencies` parameter is an optional list of decorators that the decorator being defined relies upon. This list contains the names of other decorators. In the following example, the "utility" decorator depends on the "greet" and "hi" decorators:

```
async function greetDecorator (fastify, opts) {
  fastify.decorate('greet', () => {
    return 'greet message'
  })
}

async function hiDecorator (fastify, opts) {
  fastify.decorate('hi', () => {
    return 'hi message'
  })
}

async function utilityDecorator (fastify, opts) {
  fastify.decorate('utility', () => {
    return `${fastify.greet()} | ${fastify.hi()}`
  })
}

fastify.register(fastifyPlugin(greetDecorator, { name: 'greet' }))
fastify.register(fastifyPlugin(hiDecorator, { name: 'hi' }))
fastify.register(fastifyPlugin(utilityDecorator, { dependencies: ['greet', 'hi'] }))

fastify.get('/', function (req, reply) {
  // Response: {"hello":"greet message | hi message"}
  reply.send({ hello: fastify.utility() })
})

fastify.listen({ port: 3000 }, (err, address) => {
  if (err) throw err
})
```

Using an arrow function breaks the binding of `this` to the `FastifyInstance`.

If a dependency is not satisfied, the `decorate` method throws an exception. The dependency check occurs before the server instance boots, not during runtime.

#### `decorateReply(name, value, [dependencies])`[​](#decoratereplyname-value-dependencies "Direct link to decoratereplyname-value-dependencies")

[]()

This API adds new methods/properties to the core `Reply` object:

```
fastify.decorateReply('utility', function () {
  // Something very useful
})
```

Using an arrow function will break the binding of `this` to the Fastify `Reply` instance.

Using `decorateReply` will throw and error if used with a reference type:

```
// Don't do this
fastify.decorateReply('foo', { bar: 'fizz'})
```

In this example, the object reference would be shared with all requests, and **any mutation will impact all requests, potentially creating security vulnerabilities or memory leaks**. Fastify blocks this.

To achieve proper encapsulation across requests configure a new value for each incoming request in the [`'onRequest'` hook](/docs/v5.7.x/Reference/Hooks/.md#onrequest).

```
const fp = require('fastify-plugin')

async function myPlugin (app) {
  app.decorateReply('foo')
  app.addHook('onRequest', async (req, reply) => {
    reply.foo = { bar: 42 }
  })
}

module.exports = fp(myPlugin)
```

See [`decorate`](#decorate) for information about the `dependencies` parameter.

#### `decorateRequest(name, value, [dependencies])`[​](#decoraterequestname-value-dependencies "Direct link to decoraterequestname-value-dependencies")

[]()

As with [`decorateReply`](#decorate-reply), this API adds new methods/properties to the core `Request` object:

```
fastify.decorateRequest('utility', function () {
  // something very useful
})
```

Using an arrow function will break the binding of `this` to the Fastify `Request` instance.

Using `decorateRequest` will emit an error if used with a reference type:

```
// Don't do this
fastify.decorateRequest('foo', { bar: 'fizz'})
```

In this example, the object reference would be shared with all requests, and **any mutation will impact all requests, potentially creating security vulnerabilities or memory leaks**. Fastify blocks this.

To achieve proper encapsulation across requests configure a new value for each incoming request in the [`'onRequest'` hook](/docs/v5.7.x/Reference/Hooks/.md#onrequest).

Example:

```
const fp = require('fastify-plugin')

async function myPlugin (app) {
  app.decorateRequest('foo')
  app.addHook('onRequest', async (req, reply) => {
    req.foo = { bar: 42 }
  })
}

module.exports = fp(myPlugin)
```

The hook solution is more flexible and allows for more complex initialization because more logic can be added to the `onRequest` hook.

Another approach is to use the getter/setter pattern, but it requires 2 decorators:

```
fastify.decorateRequest('my_decorator_holder') // define the holder
fastify.decorateRequest('user', {
  getter () {
    this.my_decorator_holder ??= {} // initialize the holder
    return this.my_decorator_holder
  }
})

fastify.get('/', async function (req, reply) {
  req.user.access = 'granted'
  // other code
})
```

This ensures that the `user` property is always unique for each request.

See [`decorate`](#decorate) for information about the `dependencies` parameter.

#### `hasDecorator(name)`[​](#hasdecoratorname "Direct link to hasdecoratorname")

[]()

Used to check for the existence of a server instance decoration:

```
fastify.hasDecorator('utility')
```

#### hasRequestDecorator[​](#hasrequestdecorator "Direct link to hasRequestDecorator")

[]()

Used to check for the existence of a Request decoration:

```
fastify.hasRequestDecorator('utility')
```

#### hasReplyDecorator[​](#hasreplydecorator "Direct link to hasReplyDecorator")

[]()

Used to check for the existence of a Reply decoration:

```
fastify.hasReplyDecorator('utility')
```

### Decorators and Encapsulation[​](#decorators-and-encapsulation "Direct link to Decorators and Encapsulation")

[]()

Defining a decorator (using `decorate`, `decorateRequest`, or `decorateReply`) with the same name more than once in the same **encapsulated** context will throw an exception. For example, the following will throw:

```
const server = require('fastify')()

server.decorateReply('view', function (template, args) {
  // Amazing view rendering engine
})

server.get('/', (req, reply) => {
  reply.view('/index.html', { hello: 'world' })
})

// Somewhere else in our codebase, we define another
// view decorator. This throws.
server.decorateReply('view', function (template, args) {
  // Another rendering engine
})

server.listen({ port: 3000 })
```

But this will not:

```
const server = require('fastify')()

server.decorateReply('view', function (template, args) {
  // Amazing view rendering engine.
})

server.register(async function (server, opts) {
  // We add a view decorator to the current encapsulated
  // plugin. This will not throw as outside of this encapsulated
  // plugin view is the old one, while inside it is the new one.
  server.decorateReply('view', function (template, args) {
    // Another rendering engine
  })

  server.get('/', (req, reply) => {
    reply.view('/index.page', { hello: 'world' })
  })
}, { prefix: '/bar' })

server.listen({ port: 3000 })
```

### Getters and Setters[​](#getters-and-setters "Direct link to Getters and Setters")

[]()

Decorators accept special "getter/setter" objects with `getter` and optional `setter` functions. This allows defining properties via decorators, for example:

```
fastify.decorate('foo', {
  getter () {
    return 'a getter'
  }
})
```

Will define the `foo` property on the Fastify instance:

```
console.log(fastify.foo) // 'a getter'
```

#### `getDecorator(name)`[​](#getdecoratorname "Direct link to getdecoratorname")

[]()

Used to retrieve an existing decorator from the Fastify instance, `Request`, or `Reply`. If the decorator is not defined, an `FST_ERR_DEC_UNDECLARED` error is thrown.

```
// Get a decorator from the Fastify instance
const utility = fastify.getDecorator('utility')

// Get a decorator from the request object
const user = request.getDecorator('user')

// Get a decorator from the reply object
const helper = reply.getDecorator('helper')
```

The `getDecorator` method is useful for dependency validation - it can be used to check for required decorators at registration time. If any are missing, it fails at boot, ensuring dependencies are available during the request lifecycle.

```
fastify.register(async function (fastify) {
  // Verify the decorator exists before using it
  const usersRepository = fastify.getDecorator('usersRepository')

  fastify.get('/users', async function (request, reply) {
    return usersRepository.findAll()
  })
})
```

> ℹ️ Note: For TypeScript users, `getDecorator` supports generic type parameters. See the [TypeScript documentation](/docs/Reference/TypeScript.md/) for advanced typing examples.

#### `setDecorator(name, value)`[​](#setdecoratorname-value "Direct link to setdecoratorname-value")

[]()

Used to safely update the value of a `Request` decorator. If the decorator does not exist, a `FST_ERR_DEC_UNDECLARED` error is thrown.

```
fastify.decorateRequest('user', null)

fastify.addHook('preHandler', async (req, reply) => {
  // Safely set the decorator value
  req.setDecorator('user', 'Bob Dylan')
})
```

The `setDecorator` method provides runtime safety by ensuring the decorator exists before setting its value, preventing errors from typos in decorator names.

```
fastify.decorateRequest('account', null)
fastify.addHook('preHandler', async (req, reply) => {
  // This will throw FST_ERR_DEC_UNDECLARED due to typo in decorator name
  req.setDecorator('acount', { id: 123 })
})
```

> ℹ️ Note: For TypeScript users, see the [TypeScript documentation](/docs/Reference/TypeScript.md/) for advanced typing examples using `setDecorator<T>`.

***
