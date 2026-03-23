# Middlewares configuration

If you aren't sure where to place a middleware in the stack, add it to the end of the list.

## Naming conventions

Global middlewares can be classified into different types depending on their origin, which defines the following naming conventions:

| Middleware type   | Origin                                                                                                                                                                                                                                  | Naming convention                                                                                                    |
|-------------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------------------|
| Internal          | Built-in middlewares (i.e. included with Strapi), automatically loaded                                                                                                                                                                  | `strapi::middleware-name`                                                                                            |
| Application-level | Loaded from the `./src/middlewares` folder                                                                                                                                                                                              | `global::middleware-name`                                                                                            |
| API-level         | Loaded from the `./src/api/[api-name]/middlewares` folder                                                                                                                                                                               | `api::api-name.middleware-name`                                                                                      |
| Plugin            | Exported from `strapi-server.js` in the [`middlewares` property of the plugin interface](/cms/plugins-development/server-policies-middlewares)                                                                                               | `plugin::plugin-name.middleware-name`                                                                                |
| External          | Can be:either node modules installed with

### `compression`

The `compression` middleware is based on

### `cors`

This security middleware is about cross-origin resource sharing (CORS) and is based on

Example: Custom configuration for the cors middleware within a function as parameter

`origin` can take a Function as parameter following this signature

```ts title="./config/middlewares.ts"

  // ...
  {
    name: 'strapi::cors',
    config: {
      origin: (ctx): string | string[] => {
        const origin = ctx.request.header.origin;
        if (origin === 'http://localhost:3000') {
          return origin; // The returns will be part of the Access-Control-Allow-Origin header
        }
        
        return ''; // Fail cors check
      }
    },
  },
  // ...
]
```

### `errors`

The errors middleware handles [errors](/cms/error-handling.md) thrown by the code. Based on the type of error it sets the appropriate HTTP status to the response. By default, any error not supposed to be exposed to the end user will result in a 500 HTTP response.

The middleware doesn't have any configuration options.

### `favicon`

The `favicon` middleware serves the favicon and is based on

### `ip`

The `ip` middleware is an IP filter middleware based on

### `logger`

The `logger` middleware is used to log requests.

To define a custom configuration for the `logger` middleware, create a dedicated configuration file (`./config/logger.js`). It should export an object that must be a complete or partial

### `poweredBy`

The `poweredBy` middleware adds a `X-Powered-By` parameter to the response header. It accepts the following options:

| Option      | Description                        | Type     | Default value          |
|-------------|------------------------------------|----------|------------------------|
| `poweredBy` | Value of the `X-Powered-By` header | `String` | `'Strapi <strapi.io>'` |

details Example: Custom configuration for the poweredBy middleware

### `query`

The `query` middleware is a query parser based on

Example: Raise arrayLimit for long REST query lists

Use a value that fits your longest bracket-encoded lists (for example many `populate[n]` entries). Adjust the number based on your needs and acceptable parsing cost.

### `response-time`

The `response-time` middleware enables the `X-Response-Time` (in milliseconds) for the response header.

The middleware doesn't have any configuration options.

### `public`

The `public` middleware is a static file serving middleware, based on

### `security`

The security middleware is based on

### `session`

The `session` middleware allows the use of cookie-based sessions, based on

# Plugins configuration

Source: //cms/configurations/plugins
