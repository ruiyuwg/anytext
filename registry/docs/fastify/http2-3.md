# HTTP2

## HTTP2[​](#http2 "Direct link to HTTP2")

*Fastify* offers **experimental support** for HTTP2 starting from Node 8.8.0, which includes HTTP2 without a flag. *Fastify* supports HTTP2 both over HTTPS or over plaintext. Note that HTTP2 is available only for node versions >= `8.8.1`.

Currently none of the HTTP2-specific APIs are available through *Fastify*, but Node's `req` and `res` can be access through our `Request` and `Reply` interface. PRs are welcome.

### Secure (HTTPS)[​](#secure-https "Direct link to Secure (HTTPS)")

HTTP2 is supported in all modern browsers **only over a secure connection**:

```
'use strict'

const fs = require('fs')
const path = require('path')
const fastify = require('fastify')({
  http2: true,
  https: {
    key: fs.readFileSync(path.join(__dirname, '..', 'https', 'fastify.key')),
    cert: fs.readFileSync(path.join(__dirname, '..', 'https', 'fastify.cert'))
  }
})

fastify.get('/', function (request, reply) {
  reply.code(200).send({ hello: 'world' })
})

fastify.listen(3000)
```

ALPN negotiation allows support for both HTTPS and HTTP/2 over the same socket. Node core `req` and `res` objects can be either [HTTP/1](https://nodejs.org/api/http.html) or [HTTP/2](https://nodejs.org/api/http2.html). *Fastify* supports this out of the box:

```
'use strict'

const fs = require('fs')
const path = require('path')
const fastify = require('fastify')({
  http2: true,
  https: {
    allowHTTP1: true, // fallback support for HTTP1
    key: fs.readFileSync(path.join(__dirname, '..', 'https', 'fastify.key')),
    cert: fs.readFileSync(path.join(__dirname, '..', 'https', 'fastify.cert'))
  }
})

// this route can be accessed through both protocols
fastify.get('/', function (request, reply) {
  reply.code(200).send({ hello: 'world' })
})

fastify.listen(3000)
```

You can test your new server with:

```
$ npx h2url https://localhost:3000
```

### Plain or insecure[​](#plain-or-insecure "Direct link to Plain or insecure")

If you are building microservices, you can connect to HTTP2 in plain text, however this is not supported by browsers.

```
'use strict'

const fastify = require('fastify')({
  http2: true
})

fastify.get('/', function (request, reply) {
  reply.code(200).send({ hello: 'world' })
})

fastify.listen(3000)
```

You can test your new server with:

```
$ npx h2url http://localhost:3000
```

***

# Lifecycle

## Lifecycle[​](#lifecycle "Direct link to Lifecycle")

Following the schema of the internal lifecycle of Fastify.On the right branch of every section there is the next phase of the lifecycle, on the left branch there is the corresponding error code that will be generated if the parent throws an error *(note that all the errors are automatically handled by Fastify)*.

```
Incoming Request
  │
  └─▶ Routing
        │
        └─▶ Instance Logger
             │
       404 ◀─┴─▶ onRequest Hook
                  │
        4**/5** ◀─┴─▶ run Middlewares
                        │
              4**/5** ◀─┴─▶ preParsing Hook
                              │
                    4**/5** ◀─┴─▶ Parsing
                                   │
                         4**/5** ◀─┴─▶ preValidation Hook
                                        │
                                  415 ◀─┴─▶ Validation
                                              │
                                        400 ◀─┴─▶ preHandler Hook
                                                    │
                                          4**/5** ◀─┴─▶ User Handler
                                                          │
                                                          └─▶ Reply
                                                                │
                                                      4**/5** ◀─┴─▶ preSerialization Hook
                                                                      │
                                                                      └─▶ onSend Hook
                                                                            │
                                                                  4**/5** ◀─┴─▶ Outgoing Response
                                                                                  │
                                                                                  └─▶ onResponse Hook
```

***
