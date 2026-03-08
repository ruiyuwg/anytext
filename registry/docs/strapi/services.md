# Services

Services are a set of reusable functions. They are particularly useful to respect the "don’t repeat yourself" (DRY) programming concept and to simplify [controllers](/cms/backend-customization/controllers.md) logic.

The diagram represents a simplified version of how a request travels through the Strapi back end, with services highlighted. The backend customization introduction page includes a complete, interactive diagram.

## Implementation

Services can be [generated or added manually](#adding-a-new-service). Strapi provides a `createCoreService` factory function that automatically generates core services and allows building custom ones or [extend or replace the generated services](#extending-core-services).

### Adding a new service

A new service can be implemented:

- with the [interactive CLI command `strapi generate`](/cms/cli#strapi-generate)
- or manually by creating a JavaScript file in the appropriate folder (see [project structure](/cms/project-structure.md)):
  - `./src/api/[api-name]/services/` for API services
  - or `./src/plugins/[plugin-name]/services/` for [plugin services](/cms/plugins-development/server-api#services).

To manually create a service, export a factory function that returns the service implementation (i.e. an object with methods). This factory function receives the `strapi` instance:

To get started creating your own services, see Strapi's built-in functions in the [Document Service API](/cms/api/document-service) documentation.

Example of a custom email service (using Nodemailer)

The goal of a service is to store reusable functions. A `sendNewsletter` service could be useful to send emails from different functions in our codebase that have a specific purpose:

The service is now available through the `strapi.service('api::restaurant.restaurant').sendNewsletter(...args)` global variable. It can be used in another part of the codebase, like in the following controller:

When a new [content-type](/cms/backend-customization/models.md#content-types) is created, Strapi builds a generic service with placeholder code, ready to be customized.

### Extending core services

Core services are created for each content-type and could be used by [controllers](/cms/backend-customization/controllers.md) to execute reusable logic through a Strapi project. Core services can be customized to implement your own logic. The following code examples should help you get started.

A core service can be replaced entirely by [creating a custom service](#adding-a-new-service) and naming it the same as the core service (e.g. `find`, `findOne`, `create`, `update`, or `delete`).

Collection type examples

Single type examples

## Usage

Once a service is created, it's accessible from [controllers](/cms/backend-customization/controllers.md) or from other services:

```js
// access an API service
strapi.service('api::apiName.serviceName').FunctionName();
// access a plugin service
strapi.service('plugin::pluginName.serviceName').FunctionName();
```

In the syntax examples above, `serviceName` is the name of the service file for API services or the name used to export the service file to `services/index.js` for plugin services.

To list all the available services, run `yarn strapi services:list`.

### Core service methods

Services generated with `createCoreService` inherit methods that wrap the [Document Service API](/cms/api/document-service). The available methods depend on the content-type:

#### Collection types

| Method | Description |
| --- | --- |
| `find(params)` | Wrapper for [`findMany`](/cms/api/document-service#findmany); returns a paginated list of documents. |
| `findOne(documentId, params)` | Wrapper for [`findOne`](/cms/api/document-service#findone); returns a single document by its `documentId`. |
| `create(params)` | Wrapper for [`create`](/cms/api/document-service#create); creates a new document. |
| `update(documentId, params)` | Wrapper for [`update`](/cms/api/document-service#update); updates an existing document. |
| `delete(documentId, params)` | Wrapper for [`delete`](/cms/api/document-service#delete); removes a document. |
| `count(params)` | Wrapper for [`count`](/cms/api/document-service#count); returns the number of matching documents. |
| `publish(documentId, params)` | Wrapper for [`publish`](/cms/api/document-service#publish); publishes a draft document. |
| `unpublish(documentId, params)` | Wrapper for [`unpublish`](/cms/api/document-service#unpublish); unpublishes a document. |
| `discardDraft(documentId, params)` | Wrapper for [`discardDraft`](/cms/api/document-service#discarddraft); deletes the draft copy. |

#### Single types

| Method | Description |
| --- | --- |
| `find(params)` | Returns the single document (uses [`findFirst`](/cms/api/document-service#findfirst) internally). |
| `createOrUpdate({ data, ...params })` | Creates the document if it doesn't exist or updates it (uses [`update`](/cms/api/document-service#update)). |
| `delete(params)` | Deletes the document (uses [`delete`](/cms/api/document-service#delete)). |
| `count(params)` | Counts documents matching the filters (uses [`count`](/cms/api/document-service#count)). |
| `publish(params)` | Publishes a draft document (uses [`publish`](/cms/api/document-service#publish)). |
| `unpublish(params)` | Unpublishes the document (uses [`unpublish`](/cms/api/document-service#unpublish)). |
| `discardDraft(params)` | Deletes the draft copy (uses [`discardDraft`](/cms/api/document-service#discarddraft)). |

#### Parameters and default behavior

Core service methods accept the same parameters as their underlying [Document Service API](/cms/api/document-service) calls, such as `fields`, `filters`, `sort`, `pagination`, `populate`, `locale`, and `status`. When no `status` is provided, Strapi automatically sets `status: 'published'` so only published content is returned. To query draft documents, explicitly pass `status: 'draft'` or another value supported by the Document Service.

The `createCoreService` factory also exposes a `getFetchParams(params)` helper that converts a controller's query object into the parameter format expected by these methods. This helper can be reused when overriding core methods to forward sanitized parameters to `strapi.documents()`.

# Webhooks

Source: //cms/backend-customization/webhooks
