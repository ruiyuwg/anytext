# Document Service API: Middlewares

The [Document Service API](/cms/api/document-service) offers the ability to extend its behavior thanks to middlewares.

Document Service middlewares allow you to perform actions before and/or after a method runs.

The diagram represents a simplified version of how a request travels through the Strapi back end, with the Document Service highlighted. The backend customization introduction page includes a complete, interactive diagram.

## Registering a middleware

Syntax: `strapi.documents.use(middleware)`

### Parameters

A middleware is a function that receives a context and a next function.

Syntax: `(context, next) => ReturnType<typeof next>`

| Parameter | Description                           | Type       |
|-----------|---------------------------------------|------------|
| `context` | Middleware context                    | `Context`  |
| `next`    | Call the next middleware in the stack | `function` |

#### `context`

| Parameter     | Description                                                                          | Type          |
|---------------|--------------------------------------------------------------------------------------|---------------|
| `action`      | The method that is running ([see available methods](/cms/api/document-service)) | `string`      |
| `params`      | The method params ([see available methods](/cms/api/document-service))          | `Object`      |
| `uid`         | Content type unique identifier                                                       | `string`      |
| `contentType` | Content type                                                                         | `ContentType` |

Examples:

The following examples show what `context` might include depending on the method called:

#### `next`

`next` is a function without parameters that calls the next middleware in the stack and return its response.

**Example**

```js
strapi.documents.use((context, next) => {
  return next();
});
```

### Where to register

Generaly speaking you should register your middlewares during the Strapi registration phase.

#### Users

The middleware must be registered in the general `register()` lifecycle method:

```js title="/src/index.js|ts"
module.exports = {
  register({ strapi }) {
    strapi.documents.use((context, next) => {
      // your logic
      return next();
    });
  },

  // bootstrap({ strapi }) {},
  // destroy({ strapi }) {},
};
```

#### Plugin developers

The middleware must be registered in the plugin's `register()` lifecycle method:

```js title="/(plugin-root-folder)/strapi-server.js|ts"
module.exports = {
  register({ strapi }) {
    strapi.documents.use((context, next) => {
      // your logic
      return next();
    });
  },

  // bootstrap({ strapi }) {},
  // destroy({ strapi }) {},
};
```

## Implementing a middleware

When implementing a middleware, always return the response from `next()`.
Failing to do this will break the Strapi application.

### Examples

```js
const applyTo = ['api::article.article'];

strapi.documents.use((context, next) => {
  // Only run for certain content types
  if (!applyTo.includes(context.uid)) {
    return next();
  }

  // Only run for certain actions
  if (['create', 'update'].includes(context.action)) {
    context.params.data.fullName = `${context.params.data.firstName} ${context.params.data.lastName}`;
  }

  const result = await next();

  // do something with the result before returning it
  return result
});
```

The Document Service API triggers various database lifecycle hooks based on which method is called. For a complete reference, see [Document Service API: Lifecycle hooks](/cms/migration/v4-to-v5/breaking-changes/lifecycle-hooks-document-service#table).

# Using Populate with the Document Service API

Source: //cms/api/document-service/populate

# Document Service API: Populating fields

By default the [Document Service API](/cms/api/document-service) does not populate any relations, media fields, components, or dynamic zones. This page describes how to use the `populate` parameter to populate specific fields.

You can also use the `select` parameter to return only specific fields with the query results (see the [`select` parameter](/cms/api/document-service/fields) documentation).

If the Users & Permissions plugin is installed, the `find` permission must be enabled for the content-types that are being populated. If a role doesn't have access to a content-type it will not be populated.

## Relations and media fields

Queries can accept a `populate` parameter to explicitly define which fields to populate, with the following syntax option examples.

### Populate 1 level for all relations

To populate one-level deep for all relations, use the `*` wildcard in combination with the `populate` parameter:

### Populate 1 level for specific relations

To populate specific relations one-level deep, pass the relation names in a `populate` array:

### Populate several levels deep for specific relations

To populate specific relations several levels deep, use the object format with `populate`:

## Components & Dynamic Zones

Components are populated the same way as relations:

Dynamic zones are highly dynamic content structures by essence. To populate a dynamic zone, you must define per-component populate queries using the `on` property.

## Populating with `create()`

To populate while creating documents:

## Populating with `update()`

To populate while updating documents:

## Populating with `publish()`

To populate while publishing documents (same behavior with `unpublish()` and `discardDraft()`):

# Using Sort & Pagination with the Document Service API

Source: //cms/api/document-service/sort-pagination

# Document Service API: Sorting and paginating results

The [Document Service API](/cms/api/document-service) offers the ability to sort and paginate query results.

## Sort

To sort results returned by the Document Service API, include the `sort` parameter with queries.

### Sort on a single field

To sort results based on a single field:

### Sort on multiple fields

To sort on multiple fields, pass them all in an array:

## Pagination

To paginate results, pass the `limit` and `start` parameters:

# Using Draft & Publish with the Document Service API

Source: //cms/api/document-service/status
