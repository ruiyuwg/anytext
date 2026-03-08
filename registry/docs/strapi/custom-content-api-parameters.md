## Custom Content API parameters

You can extend the `query` and body parameters allowed on Content API routes by registering them in the [register](/cms/configurations/functions#register) lifecycle. Registered parameters are then validated and sanitized like core parameters. Clients can send extra query keys (e.g. `?search=...`) or root-level body keys (e.g. `clientMutationId`) without requiring custom routes or controllers.

| What | Where |
|------|--------|
| Enable strict parameters (reject unknown query/body keys) | [API configuration](/cms/configurations/api): set `rest.strictParams: true` in `./config/api.js` (or `./config/api.ts`). |
| Add allowed parameters (app) | Call `addQueryParams` / `addInputParams` in [register](/cms/configurations/functions#register) in `./src/index.js` or `./src/index.ts`. |
| Add allowed parameters (plugin) | Call `addQueryParams` / `addInputParams` in the plugin's [register](/cms/plugins-development/server-api#register) lifecycle. |

When `rest.strictParams` is enabled, only core parameters and parameters on each route's request schema are accepted; the parameters you register are merged into that schema. Use the `z` instance from `@strapi/utils` (or `zod/v4`) for schemas.

### `addQueryParams`

`strapi.contentAPI.addQueryParams(options)` registers extra `query` parameters. Schemas must be scalar or array-of-scalars (string, number, boolean, enum). For nested structures, use `addInputParams` instead. Each entry can have an optional `matchRoute: (route) => boolean` callback to add the parameter only to routes for which the callback returns true. You cannot register core query param names (e.g. `filters`, `sort`, `fields`) as extra params; they are reserved.

### `addInputParams`

`strapi.contentAPI.addInputParams(options)` registers extra input parameters: root-level keys in the request body (e.g. alongside `data`), with any Zod type. The optional `matchRoute` callback works the same way as for `addQueryParams`. You cannot register reserved names such as `id` or `documentId` as input params.

### `matchRoute`

The `matchRoute` callback receives a `route` object with the following properties:

- `route.method`: the HTTP method (`'GET'`, `'POST'`, etc.)
- `route.path`: the route path
- `route.handler`: the controller action string
- `route.info`: metadata about the route

For example, to target only GET routes, use `matchRoute: (route) => route.method === 'GET'`. To target only routes whose path includes `articles`, use `matchRoute: (route) => route.path.includes('articles')`.

# Services

Source: //cms/backend-customization/services
