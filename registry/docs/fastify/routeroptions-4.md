## RouterOptions[​](#routeroptions "Direct link to RouterOptions")

[]()

Fastify uses [`find-my-way`](https://github.com/delvedor/find-my-way) for its HTTP router. The `routerOptions` parameter allows passing [`find-my-way` options](https://github.com/delvedor/find-my-way?tab=readme-ov-file#findmywayoptions) to customize the HTTP router within Fastify.

### `allowUnsafeRegex`[​](#allowunsaferegex "Direct link to allowunsaferegex")

[]()

- Default `false`

Fastify uses [find-my-way](https://github.com/delvedor/find-my-way) which is, disabled by default, so routes only allow safe regular expressions. To use unsafe expressions, set `allowUnsafeRegex` to `true`.

```
fastify.get('/user/:id(^([0-9]+){4}$)', (request, reply) => {
  // Throws an error without allowUnsafeRegex = true
})
```

### `buildPrettyMeta`[​](#buildprettymeta "Direct link to buildprettymeta")

[]()

Fastify uses [find-my-way](https://github.com/delvedor/find-my-way) which supports, `buildPrettyMeta` where you can assign a `buildPrettyMeta` function to sanitize a route's store object to use with the `prettyPrint` functions. This function should accept a single object and return an object.

```
fastify.get('/user/:username', (request, reply) => {
  routerOptions: {
    buildPrettyMeta: route => {
      const cleanMeta = Object.assign({}, route.store)

      // remove private properties
      Object.keys(cleanMeta).forEach(k => {
        if (typeof k === 'symbol') delete cleanMeta[k]
      })

      return cleanMeta // this will show up in the pretty print output!
    })
  }
})
```

### `caseSensitive`[​](#casesensitive "Direct link to casesensitive")

[]()

- Default: `true`

When `true` routes are registered as case-sensitive. That is, `/foo` is not equal to `/Foo`. When `false` then routes are case-insensitive.

Please note that setting this option to `false` goes against [RFC3986](https://datatracker.ietf.org/doc/html/rfc3986#section-6.2.2.1).

By setting `caseSensitive` to `false`, all paths will be matched as lowercase, but the route parameters or wildcards will maintain their original letter casing. This option does not affect query strings, please refer to [`querystringParser`](#querystringparser) to change their handling.

```
fastify.get('/user/:username', (request, reply) => {
  // Given the URL: /USER/NodeJS
  console.log(request.params.username) // -> 'NodeJS'
})
```

### `constraints`[​](#constraints "Direct link to constraints")

[]()

Fastify's built-in route constraints are provided by `find-my-way`, which allows constraining routes by `version` or `host`. You can add new constraint strategies, or override the built-in strategies, by providing a `constraints` object with strategies for `find-my-way`. You can find more information on constraint strategies in the [find-my-way](https://github.com/delvedor/find-my-way) documentation.

```
const customVersionStrategy = {
  storage: function () {
    const versions = {}
    return {
      get: (version) => { return versions[version] || null },
      set: (version, store) => { versions[version] = store }
    }
  },
  deriveVersion: (req, ctx) => {
    return req.headers['accept']
  }
}

const fastify = require('fastify')({
  routerOptions: {
    constraints: {
      version: customVersionStrategy
    }
  }
})
```

### `defaultRoute`[​](#defaultroute "Direct link to defaultroute")

[]()

Fastify uses [find-my-way](https://github.com/delvedor/find-my-way) which supports, can pass a default route with the option defaultRoute.

```
const fastify = require('fastify')({
  routerOptions: {
    defaultRoute: (req, res) => {
      res.statusCode = 404
      res.end()
    }
  }
})
```

> ℹ️ Note: The `req` and `res` objects passed to `defaultRoute` are the raw Node.js `IncomingMessage` and `ServerResponse` instances. They do **not** expose the Fastify-specific methods available on `FastifyRequest`/`FastifyReply` (for example, `res.send`).

### `ignoreDuplicateSlashes`[​](#ignoreduplicateslashes "Direct link to ignoreduplicateslashes")

[]()

- Default: `false`

Fastify uses [find-my-way](https://github.com/delvedor/find-my-way) to handle routing. You can use `ignoreDuplicateSlashes` option to remove duplicate slashes from the path. It removes duplicate slashes in the route path and the request URL. This option applies to *all* route registrations for the resulting server instance.

When `ignoreTrailingSlash` and `ignoreDuplicateSlashes` are both set to `true` Fastify will remove duplicate slashes, and then trailing slashes, meaning `//a//b//c//` will be converted to `/a/b/c`.

```
const fastify = require('fastify')({
  routerOptions: {
    ignoreDuplicateSlashes: true
  }
})

// registers "/foo/bar/"
fastify.get('///foo//bar//', function (req, reply) {
  reply.send('foo')
})
```

### `ignoreTrailingSlash`[​](#ignoretrailingslash "Direct link to ignoretrailingslash")

[]()

- Default: `false`

Fastify uses [find-my-way](https://github.com/delvedor/find-my-way) to handle routing. By default, Fastify will take into account the trailing slashes. Paths like `/foo` and `/foo/` are treated as different paths. If you want to change this, set this flag to `true`. That way, both `/foo` and `/foo/` will point to the same route. This option applies to *all* route registrations for the resulting server instance.

```
const fastify = require('fastify')({
  routerOptions: {
    ignoreTrailingSlash: true
  }
})

// registers both "/foo" and "/foo/"
fastify.get('/foo/', function (req, reply) {
  reply.send('foo')
})

// registers both "/bar" and "/bar/"
fastify.get('/bar', function (req, reply) {
  reply.send('bar')
})
```

### `maxParamLength`[​](#maxparamlength "Direct link to maxparamlength")

[]()

- Default: `100`

You can set a custom length for parameters in parametric (standard, regex, and multi) routes by using `maxParamLength` option; the default value is 100 characters. If the maximum length limit is reached, the not found route will be invoked.

This can be useful especially if you have a regex-based route, protecting you against [ReDoS attacks](https://www.owasp.org/index.php/Regular_expression_Denial_of_Service_-_ReDoS).

### `onBadUrl`[​](#onbadurl "Direct link to onbadurl")

[]()

Fastify uses [find-my-way](https://github.com/delvedor/find-my-way) which supports, the use case of a badly formatted url (eg: /hello/%world), by default find-my-way will invoke the defaultRoute, unless you specify the onBadUrl option.

```
const fastify = require('fastify')({
  routerOptions: {
    onBadUrl: (path, req, res) => {
      res.statusCode = 400
      res.end(`Bad path: ${path}`)
    }
  }
})
```

As with `defaultRoute`, `req` and `res` are the raw Node.js request/response objects and do not provide Fastify's decorated helpers.

### `querystringParser`[​](#querystringparser-1 "Direct link to querystringparser-1")

[]()

The default query string parser that Fastify uses is the Node.js's core `querystring` module.

You can use this option to use a custom parser, such as [`qs`](https://www.npmjs.com/package/qs).

If you only want the keys (and not the values) to be case insensitive we recommend using a custom parser to convert only the keys to lowercase.

```
const qs = require('qs')
const fastify = require('fastify')({
  routerOptions: {
    querystringParser: str => qs.parse(str)
  }
})
```

You can also use Fastify's default parser but change some handling behavior, like the example below for case insensitive keys and values:

```
const querystring = require('node:querystring')
const fastify = require('fastify')({
  routerOptions: {
    querystringParser: str => querystring.parse(str.toLowerCase())
  }
})
```

### `useSemicolonDelimiter`[​](#usesemicolondelimiter "Direct link to usesemicolondelimiter")

[]()

- Default `false`

Fastify uses [find-my-way](https://github.com/delvedor/find-my-way) which supports, separating the path and query string with a `;` character (code 59), e.g. `/dev;foo=bar`. This decision originated from \[delvedor/find-my-way#76] (<https://github.com/delvedor/find-my-way/issues/76>). Thus, this option will support backwards compatibility for the need to split on `;`. To enable support for splitting on `;` set `useSemicolonDelimiter` to `true`.

```
const fastify = require('fastify')({
  routerOptions: {
    useSemicolonDelimiter: true
  }
})

fastify.get('/dev', async (request, reply) => {
  // An example request such as `/dev;foo=bar`
  // Will produce the following query params result `{ foo = 'bar' }`
  return request.query
})
```

### `allowErrorHandlerOverride`[​](#allowerrorhandleroverride "Direct link to allowerrorhandleroverride")

[]()

- **Default:** `true`

> ⚠ Warning: This option will be set to `false` by default in the next major release.

When set to `false`, it prevents `setErrorHandler` from being called multiple times within the same scope, ensuring that the previous error handler is not unintentionally overridden.

#### Example of incorrect usage:[​](#example-of-incorrect-usage "Direct link to Example of incorrect usage:")

```
app.setErrorHandler(function freeSomeResources () {
  // Never executed, memory leaks
})

app.setErrorHandler(function anotherErrorHandler () {
  // Overrides the previous handler
})
```

## Instance[​](#instance "Direct link to Instance")
