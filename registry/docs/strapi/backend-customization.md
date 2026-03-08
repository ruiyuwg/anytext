# Backend customization

As a headless CMS, the Strapi software as a whole can be considered as the "back end" of your website or application.
But the Strapi software itself includes 2 different parts:

- The **back-end** part of Strapi is an HTTP server that Strapi runs. Like any HTTP server, the Strapi back end receives requests and send responses. Your content is stored in a database, and the Strapi back end interacts with the database to create, retrieve, update, and delete content.
- The **front-end** part of Strapi is called the admin panel. The admin panel presents a graphical user interface to help you structure and manage the content.

Throughout this developer documentation, 'back end' refers *exclusively* to the back-end part of Strapi.

The [Getting Started > Admin panel page](/cms/features/admin-panel) gives an admin panel overview and the [admin panel customization section](/cms/admin-panel-customization) details the various customization options available for the admin panel.

The Strapi back end runs an HTTP server based on , a back-end JavaScript framework.

Like any HTTP server, the Strapi back end receives requests and send responses. You can send requests to the Strapi back end to create, retrieve, update, or delete data through the [REST](/cms/api/rest) or [GraphQL](/cms/api/graphql) APIs.

A request can travel through the Strapi back end as follows:

1. The Strapi server receives a [request](/cms/backend-customization/requests-responses).
2. The request hits [global middlewares](/cms/backend-customization/middlewares) that are run in a sequential order.
3. The request hits a [route](/cms/backend-customization/routes).By default, Strapi generates route files for all the content-types that you create (see [REST API documentation](/cms/api/rest)), and more routes can be added and configured.
4. [Route policies](/cms/backend-customization/policies) act as a read-only validation step that can block access to a route. [Route middlewares](/cms/backend-customization/routes#middlewares) can control the request flow and mutate the request itself before moving forward.
5. [Controllers](/cms/backend-customization/controllers) execute code once a route has been reached. [Services](/cms/backend-customization/services) are optional, additional code that can be used to build custom logic reusable by controllers.
6. The code executed by the controllers and services interacts with the [models](/cms/backend-customization/models) that are a representation of the content content structure stored in the database.Interacting with the data represented by the models is handled by the [Document Service](/cms/api/document-service) and [Query Engine](/cms/api/query-engine).
7. You can implement [Document Service middlewares](/cms/api/document-service/middlewares) to control the data before it's sent to the Query Engine. The Query Engine can also use lifecycle hooks though we recommend you use Document Service middlewares unless you absolutely need to directly interact with the database.
8. The server returns a [response](/cms/backend-customization/requests-responses). The response can travel back through route middlewares and global middlewares before being sent.

Both global and route middlewares include an asynchronous callback function, `await next()`. Depending on what is returned by the middleware, the request will either go through a shorter or longer path through the back end:

- If a middleware returns nothing, the request will continue travelling through the various core elements of the back end (i.e., controllers, services, and the other layers that interact with the database).
- If a middleware returns before calling `await next()`, a response will be immediately sent, skipping the rest of the core elements. Then it will go back down the same chain it came up.

Please note that all customizations described in the pages of this section are only for the REST API. [GraphQL customizations](/cms/plugins/graphql#customization) are described in the GraphQL plugin documentation.

<!-- :::tip Learn by example
If you prefer learning by reading examples and understanding how they can be used in real-world use cases, the [Examples cookbook](/cms/backend-customization/examples) section is another way at looking how the Strapi back end customization works.

## Interactive diagram

The following diagram represents how requests travel through the Strapi back end. You can click on any shape to jump to the relevant page in the documentation.





# Controllers
Source: //cms/backend-customization/controllers

# Controllers

Controllers are JavaScript files that contain a set of methods, called actions, reached by the client according to the requested [route](/cms/backend-customization/routes). Whenever a client requests the route, the action performs the business logic code and sends back the [response](/cms/backend-customization/requests-responses). Controllers represent the C in the model-view-controller (MVC) pattern.

In most cases, the controllers will contain the bulk of a project's business logic. But as a controller's logic becomes more and more complicated, it's a good practice to use [services](/cms/backend-customization/services) to organize the code into re-usable parts.


  
  The diagram represents a simplified version of how a request travels through the Strapi back end, with controllers highlighted. The backend customization introduction page includes a complete, interactive diagram.


When overriding core actions, always validate and sanitize queries and responses to avoid leaking private fields or bypassing access rules. Use `validateQuery` (optional), `sanitizeQuery` (recommended), and `sanitizeOutput` before returning data from custom actions. See the example below for a safe `find` override.

## Implementation

Controllers can be [generated or added manually](#adding-a-new-controller). Strapi provides a `createCoreController` factory function that automatically generates core controllers and allows building custom ones or [extend or replace the generated controllers](#extending-core-controllers).

### Adding a new controller

A new controller can be implemented:

- with the [interactive CLI command `strapi generate`](/cms/cli)
- or manually by creating a JavaScript file:
  - in `./src/api/[api-name]/controllers/` for API controllers (this location matters as controllers are auto-loaded by Strapi from there)
  - or in a folder like `./src/plugins/[plugin-name]/server/controllers/` for plugin controllers, though they can be created elsewhere as long as the plugin interface is properly exported in the `strapi-server.js` file (see [Server API for Plugins documentation](/cms/plugins-development/server-api))



Each controller action can be an `async` or `sync` function.
Every action receives a context object (`ctx`) as a parameter. `ctx` contains the [request context](/cms/backend-customization/requests-responses#ctxrequest) and the [response context](/cms/backend-customization/requests-responses#ctxresponse).


Example: GET /hello route calling a basic controller

A specific `GET /hello` [route](/cms/backend-customization/routes) is defined, the name of the router file (i.e. `index`) is used to call the controller handler (i.e. `index`). Every time a `GET /hello` request is sent to the server, Strapi calls the `index` action in the `hello.js` controller, which returns `Hello World!`:





When a new [content-type](/cms/backend-customization/models#content-types) is created, Strapi builds a generic controller with placeholder code, ready to be customized.

To see a possible advanced usage for custom controllers, read the [services and controllers](/cms/backend-customization/examples/services-and-controllers) page of the backend customization examples cookbook.

### Controllers & Routes: How routes reach controller actions

- Core mapping is automatic: when you generate a content-type, Strapi creates the matching controller and a router file that already targets the standard actions (`find`, `findOne`, `create`, `update`, and `delete`). Overriding any of these actions inside the generated controller does not require touching the router — the route keeps the same handler string and executes your updated logic.
- Adding a route should only be done for new actions or paths. If you introduce a brand-new method such as `exampleAction`, create or update a route entry whose `handler` points to the action so HTTP requests can reach it. Use the fully-qualified handler syntax `<scope>::<api-or-plugin-name>.<controllerName>.<actionName>` (e.g. `api::restaurant.restaurant.exampleAction` for an API controller or `plugin::menus.menu.exampleAction` for a plugin controller).
- Regarding controller and route filenames: the default controller name comes from the filename inside `./src/api/[api-name]/controllers/`. Core routers created with `createCoreRouter` adopt the same name, so the generated handler string matches automatically. Custom routers can follow any file naming scheme, as long as the `handler` string references an exported controller action.

The example below adds a new controller action and exposes it through a custom route without duplicating the existing CRUD route definitions:

```js title="./src/api/restaurant/controllers/restaurant.js"
const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::restaurant.restaurant', ({ strapi }) => ({
  async exampleAction(ctx) {
    const specials = await strapi.service('api::restaurant.restaurant').find({ filters: { isSpecial: true } });
    return this.transformResponse(specials.results);
  },
}));
```

```js title="./src/api/restaurant/routes/01-custom-restaurant.js"
module.exports = {
  routes: [
    {
      method: 'GET',
      path: '/restaurants/specials',
      handler: 'api::restaurant.restaurant.exampleAction',
    },
  ],
};
```

### Sanitization and Validation in controllers

It's strongly recommended you sanitize (v4.8.0+) and/or validate (v4.13.0+) your incoming request query utilizing the new `sanitizeQuery` and `validateQuery` functions to prevent the leaking of private data.

Sanitization means that the object is “cleaned” and returned.

Validation means an assertion is made that the data is already clean and throws an error if something is found that shouldn't be there.

In Strapi 5, both query parameters and input data (i.e., create and update body data) are validated. Any create and update data requests with the following invalid input will throw a `400 Bad Request` error:

- relations the user do not have permission to create
- unrecognized values that are not present on a schema
- non-writable fields and internal timestamps like `createdAt` and `createdBy` fields
- setting or updating an `id` field (except for connecting relations)

#### Sanitization when utilizing controller factories

Within the Strapi factories the following functions are exposed that can be used for sanitization and validation:

| Function Name    | Parameters                 | Description                                                                          |
|------------------|----------------------------|--------------------------------------------------------------------------------------|
| `sanitizeQuery`  | `ctx`                      | Sanitizes the request query                                                          |
| `sanitizeOutput` | `entity`/`entities`, `ctx` | Sanitizes the output data where entity/entities should be an object or array of data |
| `sanitizeInput`  | `data`, `ctx`              | Sanitizes the input data                                                             |
| `validateQuery`  | `ctx`                      | Validates the request query (throws an error on invalid params)                      |
| `validateInput`  | `data`, `ctx`              | (EXPERIMENTAL) Validates the input data (throws an error on invalid data)                           |

These functions automatically inherit the sanitization settings from the model and sanitize the data accordingly based on the content-type schema and any of the content API authentication strategies, such as the Users & Permissions plugin or API tokens.

Because these methods use the model associated with the current controller, if you query data that is from another model (i.e., doing a find for "menus" within a "restaurant" controller method), you must instead use the `strapi.contentAPI` methods, such as `strapi.contentAPI.sanitize.query` described in [Sanitizing Custom Controllers](#sanitize-validate-custom-controllers), or else the result of your query will be sanitized against the wrong model.



#### Sanitization and validation when building custom controllers

Within custom controllers, Strapi exposes the following functions via `strapi.contentAPI` for sanitization and validation. To add custom query or body parameters to Content API routes (e.g. in `register`), see [Custom Content API parameters](/cms/backend-customization/routes#custom-content-api-parameters).

| Function Name                | Parameters         | Description                                             |
|------------------------------|--------------------|---------------------------------------------------------|
| `strapi.contentAPI.sanitize.input`  | `data`, `schema`, `auth`      | Sanitizes the request input including non-writable fields, removing restricted relations, and other nested "visitors" added by plugins |
| `strapi.contentAPI.sanitize.output` | `data`, `schema`, `auth`      | Sanitizes the response output including restricted relations, private fields, passwords, and other nested "visitors" added by plugins  |
| `strapi.contentAPI.sanitize.query`  | `ctx.query`, `schema`, `auth` | Sanitizes the request query including filters, sort, fields, and populate  |
| `strapi.contentAPI.validate.query`  | `ctx.query`, `schema`, `auth` | Validates the request query including filters, sort, fields (currently not populate) |
| `strapi.contentAPI.validate.input`  | `data`, `schema`, `auth` | (EXPERIMENTAL) Validates the request input including non-writable fields, removing restricted relations, and other nested "visitors" added by plugins |

Depending on the complexity of your custom controllers, you may need additional sanitization that Strapi cannot currently account for, especially when combining the data from multiple sources.



### Extending core controllers

Default controllers and actions are created for each content-type. These default controllers are used to return responses to API requests (e.g. when `GET /api/articles/3` is accessed, the `findOne` action of the default controller for the "Article" content-type is called). Default controllers can be customized to implement your own logic. The following code examples should help you get started.

An action from a core controller can be replaced entirely by [creating a custom action](#adding-a-new-controller) and naming the action the same as the original action (e.g. `find`, `findOne`, `create`, `update`, or `delete`).

When extending a core controller, you do not need to re-implement any sanitization as it will already be handled by the core controller you are extending. Where possible it's strongly recommended to extend the core controller instead of creating a custom controller.


Collection type examples

The [backend customization examples cookbook](/cms/backend-customization/examples) shows how you can overwrite a default controller action, for instance for the [`create` action](/cms/backend-customization/examples/services-and-controllers#custom-controller).





Single type examples




## Usage 

Controllers are declared and attached to a route. Controllers are automatically called when the route is called, so controllers usually do not need to be called explicitly. However, [services](/cms/backend-customization/services) can call controllers, and in this case the following syntax should be used:

```js
// access an API controller
strapi.controller('api::api-name.controller-name');
// access a plugin controller
strapi.controller('plugin::plugin-name.controller-name');
```

To list all the available controllers, run `yarn strapi controllers:list`.



# Middlewares
Source: //cms/backend-customization/middlewares

# Middlewares customization



Globally scoped custom middlewares should be added to the [middlewares configuration file](/cms/configurations/middlewares#loading-order) or Strapi won't load them.

API level and plugin middlewares can be added into the specific router that they are relevant to like the following:

```js title="./src/api/[api-name]/routes/[collection-name].js or ./src/plugins/[plugin-name]/server/routes/index.js"
module.exports = {
  routes: [
    {
      method: "GET",
      path: "/[collection-name]",
      handler: "[controller].find",
      config: {
        middlewares: ["[middleware-name]"],
        // See the usage section below for middleware naming conventions
      },
    },
  ],
};
```


Example of a custom timer middleware





The GraphQL plugin also allows [implementing custom middlewares](/cms/plugins/graphql#middlewares), with a different syntax.

Run `yarn strapi middlewares:list` to list all registered middlewares and double‑check naming when wiring them in routers.

## Usage

Middlewares are called different ways depending on their scope:

- use `global::middleware-name` for application-level middlewares
- use `api::api-name.middleware-name` for API-level middlewares
- use `plugin::plugin-name.middleware-name` for plugin middlewares

To list all the registered middlewares, run `yarn strapi middlewares:list`.

### Restricting content access with an "is-owner policy"

It is often required that the author of an entry is the only user allowed to edit or delete the entry. In previous versions of Strapi, this was known as an "is-owner policy". With Strapi v4, the recommended way to achieve this behavior is to use a middleware.

Proper implementation largely depends on your project's needs and custom code, but the most basic implementation could be achieved with the following procedure: 

1. From your project's folder, create a middleware with the Strapi CLI generator, by running the `yarn strapi generate` (or `npm run strapi generate`) command in the terminal.
2. Select `middleware` from the list, using keyboard arrows, and press Enter.
3. Give the middleware a name, for instance `isOwner`.
4. Choose `Add middleware to an existing API` from the list.
5. Select which API you want the middleware to apply.
6. Replace the code in the `/src/api/[your-api-name]/middlewares/isOwner.js` file with the following, replacing `api::restaurant.restaurant` in line 22 with the identifier corresponding to the API you choose at step 5 (e.g., `api::blog-post.blog-post` if your API name is `blog-post`):

  ```js showLineNumbers title="src/api/blog-post/middlewares/isOwner.js"
    "use strict";

    /**
     * `isOwner` middleware
     */

    module.exports = (config, { strapi }) => {
      // Add your own logic here.
      return async (ctx, next) => {
        const user = ctx.state.user;
        const entryId = ctx.params.id ? ctx.params.id : undefined;
        let entry = {};

        /** 
         * Gets all information about a given entry,
         * populating every relations to ensure 
         * the response includes author-related information
         */
        if (entryId) {
          entry = await strapi.documents('api::restaurant.restaurant').findOne(
            entryId,
            { populate: "*" }
          );
        }

        /**
         * Compares user id and entry author id
         * to decide whether the request can be fulfilled
         * by going forward in the Strapi backend server
         */
        if (user.id !== entry.author.id) {
          return ctx.unauthorized("This action is unauthorized.");
        } else {
          return next();
        }
      };
    };
  ```

7. Ensure the middleware is configured to apply on some routes. In the `config` object found in the `src/api/[your-api–name]/routes/[your-content-type-name].js` file, define the action keys (`find`, `findOne`, `create`, `update`, `delete`, etc.) for which you would like the middleware to apply, and declare the `isOwner` middleware for these routes.For instance, if you wish to allow GET requests (mapping to the `find` and `findOne` actions) and POST requests (i.e., the `create` action) to any user for the `restaurant` content-type in the `restaurant` API, but would like to restrict PUT (i.e., `update` action) and DELETE requests only to the user who created the entry, you could use the following code in the `src/api/restaurant/routes/restaurant.js` file:

  ```js title="src/api/restaurant/routes/restaurant.js"

  /**
   * restaurant router
   */
      
  const { createCoreRouter } = require("@strapi/strapi").factories;

  module.exports = createCoreRouter("api::restaurant.restaurant", {
    config: {
      update: {
        middlewares: ["api::restaurant.is-owner"],
      },
      delete: {
        middlewares: ["api::restaurant.is-owner"],
      },
    },
  });
  ```

You can find more information about route middlewares in the [routes documentation](/cms/backend-customization/routes).



# Models
Source: //cms/backend-customization/models

# Models

As Strapi is a headless Content Management System (CMS), creating a content structure for the content is one of the most important aspects of using the software. Models define a representation of the content structure.

There are 2 different types of models in Strapi:

- content-types, which can be collection types or single types, depending on how many entries they manage,
- and components that are content structures re-usable in multiple content-types.

If you are just starting out, it is convenient to generate some models with the [Content-type Builder](/cms/features/content-type-builder) directly in the admin panel. The user interface takes over a lot of validation tasks and showcases all the options available to create the content's content structure. The generated model mappings can then be reviewed at the code level using this documentation.

## Model creation

Content-types and components models are created and stored differently.

### Content-types

Content-types in Strapi can be created:

- with the [Content-type Builder in the admin panel](/cms/features/content-type-builder),
- or with [Strapi's interactive CLI `strapi generate`](/cms/cli#strapi-generate) command.

The content-types use the following files:

- `schema.json` for the model's [schema](#model-schema) definition. (generated automatically, when creating content-type with either method)
- `lifecycles.js` for [lifecycle hooks](#lifecycle-hooks). This file must be created manually.

These models files are stored in `./src/api/[api-name]/content-types/[content-type-name]/`, and any JavaScript or JSON file found in these folders will be loaded as a content-type's model (see [project structure](/cms/project-structure)).

In [TypeScript](/cms/typescript.md)-enabled projects, schema typings can be generated using the `ts:generate-types` command.

### Components

Component models can't be created with CLI tools. Use the [Content-type Builder](/cms/features/content-type-builder) or create them manually.

Components models are stored in the `./src/components` folder. Every component has to be inside a subfolder, named after the category the component belongs to (see [project structure](/cms/project-structure)).

## Model schema

The `schema.json` file of a model consists of:

- [settings](#model-settings), such as the kind of content-type the model represents or the table name in which the data should be stored,
- [information](#model-information), mostly used to display the model in the admin panel and access it through the REST and GraphQL APIs,
- [attributes](#model-attributes), which describe the content structure of the model,
- and [options](#model-options) used to defined specific behaviors on the model.

### Model settings

General settings for the model can be configured with the following parameters:

| Parameter                                          | Type   | Description                                                                                                            |
| -------------------------------------------- | ------ | ---------------------------------------------------------------------------------------------------------------------- |
| `collectionName`                                  | String | Database table name in which the data should be stored                                                    |
| `kind`_Optional,only for content-types_ | String | Defines if the content-type is:a collection type (`collectionType`)or a single type (`singleType`) |

```json
// ./src/api/[api-name]/content-types/restaurant/schema.json

{
  "kind": "collectionType",
  "collectionName": "Restaurants_v1",
}
```

### Model information

The `info` key in the model's schema describes information used to display the model in the admin panel and access it through the Content API. It includes the following parameters:



| Parameter            | Type   | Description                                                                                                                                 |
| -------------- | ------ | ------------------------------------------------------------------------------------------------------------------------------------------- |
| `displayName`  | String | Default name to use in the admin panel                                                                                                      |
| `singularName` | String | Singular form of the content-type name.Used to generate the API routes and databases/tables collection.Should be kebab-case. |
| `pluralName`   | String | Plural form of the content-type name.Used to generate the API routes and databases/tables collection.Should be kebab-case.    |
| `description`  | String | Description of the model                                                                                                                   |

```json title="./src/api/[api-name]/content-types/restaurant/schema.json"

  "info": {
    "displayName": "Restaurant",
    "singularName": "restaurant",
    "pluralName": "restaurants",
    "description": ""
  },
```

### Model attributes

The content structure of a model consists of a list of attributes. Each attribute has a `type` parameter, which describes its nature and defines the attribute as a simple piece of data or a more complex structure used by Strapi.

Many types of attributes are available:

- scalar types (e.g. strings, dates, numbers, booleans, etc.),
- Strapi-specific types, such as:
  - `media` for files uploaded through the [Media library](/cms/features/content-type-builder#media)
  - `relation` to describe a [relation](#relations) between content-types
  - `customField` to describe [custom fields](#custom-fields) and their specific keys
  - `component` to define a [component](#components-json) (i.e. a content structure usable in multiple content-types)
  - `dynamiczone` to define a [dynamic zone](#dynamic-zones) (i.e. a flexible space based on a list of components)
  - and the `locale` and `localizations` types, only used by the [Internationalization (i18n) plugin](/cms/features/internationalization)

The `type` parameter of an attribute should be one of the following values:

| Type categories | Available types |
|------|-------|
| String types | `string` `text` `richtext``enumeration` `email``password`[`uid`](#uid-type) |
| Date types | `date` `time` `datetime` `timestamp` |
| Number types | `integer``biginteger``float` `decimal` |
| Other generic types |`boolean``json` |
| Special types unique to Strapi |`media`[`relation`](#relations)[`customField`](#custom-fields)[`component`](#components-json)[`dynamiczone`](#dynamic-zones) |
| Internationalization (i18n)-related types_Can only be used if the [i18n](/cms/features/internationalization) is enabled on the content-type_|`locale``localizations` |

#### Validations

Basic validations can be applied to attributes using the following parameters:

| Parameter | Type    | Description                                                                                               | Default |
| -------------- | ------- | --------------------------------------------------------------------------------------------------------- | ------- |
| `required`     | Boolean | If `true`, adds a required validator for this property                                                     | `false` |
| `max`          | Integer | Checks if the value is greater than or equal to the given maximum                                        | -       |
| `min`          | Integer | Checks if the value is less than or equal to the given minimum                                           | -       |
| `minLength`    | Integer | Minimum number of characters for a field input value                                                      | -       |
| `maxLength`    | Integer | Maximum number of characters for a field input value                                                      | -       |
| `private`      | Boolean | If `true`, the attribute will be removed from the server response.💡 This is useful to hide sensitive data. | `false` |
| `configurable` | Boolean | If `false`, the attribute isn't configurable from the Content-type Builder plugin.                         | `true`  |

```json title="./src/api/[api-name]/content-types/restaurant/schema.json"

{
  // ...
  "attributes": {
    "title": {
      "type": "string",
      "minLength": 3,
      "maxLength": 99,
      "unique": true
    },
    "description": {
      "default": "My description",
      "type": "text",
      "required": true
    },
    "slug": {
      "type": "uid",
      "targetField": "title"
    }
    // ...
  }
}
```

#### Database validations and settings

These settings should be reserved to an advanced usage, as they might break some features. There are no plans to make these settings stable.

Database validations and settings are custom options passed directly onto the `tableBuilder` Knex.js function during schema migrations. Database validations allow for an advanced degree of control for setting custom column settings. The following options are set in a `column: {}` object per attribute:

| Parameter     | Type    | Description                                                                                   | Default |
| ------------- | ------- | --------------------------------------------------------------------------------------------- | ------- |
| `name`        | string  | Changes the name of the column in the database                                                | -       |
| `defaultTo`   | string  | Sets the database `defaultTo`, typically used with `notNullable`                              | -       |
| `notNullable` | boolean | Sets the database `notNullable`, ensures that columns cannot be null                          | `false` |
| `unsigned`    | boolean | Only applies to number columns, removes the ability to go negative but doubles maximum length | `false` |
| `unique`      | boolean | Enforces database-level uniqueness on published entries. Draft saves skip the check when Draft & Publish is enabled, so duplicates fail only at publish time. | `false` |
| `type`        | string  | Changes the database type, if `type` has arguments, you should pass them in `args`            | -       |
| `args`        | array   | Arguments passed into the Knex.js function that changes things like `type`                    | `[]`    |

When [Draft & Publish](/cms/features/draft-and-publish) is enabled, Strapi intentionally skips `unique` validations while an entry is saved as a draft. Duplicates therefore remain undetected until publication, at which point the database constraint triggers an error even though the UI previously displayed “Saved document” for the drafts.

To avoid unexpected publication failures:

- disable Draft & Publish on content-types that must stay globally unique,
- or add custom validation (e.g. lifecycle hooks or middleware) that checks for draft duplicates before saving,
- or rely on automatically generated unique identifiers such as a `uid` field and document editorial conventions.

```json title="./src/api/[api-name]/content-types/restaurant/schema.json"

{
  // ...
  "attributes": {
    "title": {
      "type": "string",
      "minLength": 3,
      "maxLength": 99,
      "unique": true,
      "column": {
        "unique": true // enforce database unique also
      }
    },
    "description": {
      "default": "My description",
      "type": "text",
      "required": true,
      "column": {
        "defaultTo": "My description", // set database level default
        "notNullable": true // enforce required at database level, even for drafts
      }
    },
    "rating": {
      "type": "decimal",
      "default": 0,
      "column": {
        "defaultTo": 0,
        "type": "decimal", // using the native decimal type but allowing for custom precision
        "args": [
          6,1 // using custom precision and scale
        ]
      }
    }
    // ...
  }
}
```

#### `uid` type

The `uid` type is used to automatically prefill the field value in the admin panel with a unique identifier (UID) (e.g. slugs for articles) based on 2 optional parameters:

- `targetField` (string): If used, the value of the field defined as a target is used to auto-generate the UID.
- `options` (string): If used, the UID is generated based on a set of options passed to 



#### Custom fields

[Custom fields](/cms/features/custom-fields) extend Strapi’s capabilities by adding new types of fields to content-types. Custom fields are explicitly defined in the [attributes](#model-attributes) of a model with `type: customField`.

Custom fields' attributes also show the following specificities:

- a `customField` attribute whose value acts as a unique identifier to indicate which registered custom field should be used. Its value follows:
   - either the `plugin::plugin-name.field-name` format if a plugin created the custom field 
   - or the `global::field-name` format for a custom field specific to the current Strapi application
- and additional parameters depending on what has been defined when registering the custom field (see [custom fields documentation](/cms/features/custom-fields)).

```json title="./src/api/[apiName]/[content-type-name]/content-types/schema.json"

{
  // …
  "attributes": {
    "attributeName": { // attributeName would be replaced by the actual attribute name
      "type": "customField",
      "customField": "plugin::color-picker.color",
      "options": {
        "format": "hex"
      }
    }
  }
  // …
}
```

#### Components

Component fields create a relation between a content-type and a component structure. Components are explicitly defined in the [attributes](#model-attributes) of a model with `type: 'component'` and accept the following additional parameters:

| Parameter    | Type    | Description                                                                              |
| ------------ | ------- | ---------------------------------------------------------------------------------------- |
| `repeatable` | Boolean | Could be `true` or `false` depending on whether the component is repeatable or not       |
| `component`  | String  | Define the corresponding component, following this format:`<category>.<componentName>`  |

```json title="./src/api/[apiName]/restaurant/content-types/schema.json"

{
  "attributes": {
    "openinghours": {
      "type": "component",
      "repeatable": true,
      "component": "restaurant.openinghours"
    }
  }
}
```

#### Dynamic zones

Dynamic zones create a flexible space in which to compose content, based on a mixed list of [components](#components-json).

Dynamic zones are explicitly defined in the [attributes](#model-attributes)  of a model with `type: 'dynamiczone'`. They also accept a `components` array, where each component should be named following this format: `<category>.<componentName>`.

```json title="./src/api/[api-name]/content-types/article/schema.json"

{
  "attributes": {
    "body": {
      "type": "dynamiczone",
      "components": ["article.slider", "article.content"]
    }
  }
}
```

### Model options

The `options` key is used to define specific behaviors and accepts the following parameter:

| Parameter           | Type             | Description                                                                                                                                                                                                                                                                                                        |
|---------------------|------------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| `privateAttributes` | Array of strings | Allows treating a set of attributes as private, even if they're not actually defined as attributes in the model. It could be used to remove them from API responses timestamps.  The `privateAttributes` defined in the model are merged with the `privateAttributes` defined in the global Strapi configuration. |
| `draftAndPublish`   | Boolean          | Enables the draft and publish feature.  Default value: `true` (`false` if the content-type is created from the interactive CLI).                                                                                                                                                                                    |
| `populateCreatorFields` | Boolean | Populates `createdBy` and `updatedBy` fields in responses returned by the REST API (see [guide](/cms/api/rest/guides/populate-creator-fields) for more details).Default value: `false`. |

```json title="./src/api/[api-name]/content-types/restaurant/schema.json"

{
  "options": {
    "privateAttributes": ["id", "createdAt"],
    "draftAndPublish": true
  }
}
```

### Plugin options

`pluginOptions` is an optional object allowing plugins to store configuration for a model or a specific attribute.

| Key                       | Value                         | Description                                            |
|---------------------------|-------------------------------|--------------------------------------------------------|
| `i18n`                    | `localized: true`             | Enables localization.                                  |
| `content-manager`         | `visible: false`              | Hides from Content Manager in the admin panel.         |
| `content-type-builder`    | `visible: false`              | Hides from Content-type Builder in the admin panel.    |

```json title="./src/api/[api-name]/content-types/[content-type-name]/schema.json"

{
  "attributes": {
    "name": {
      "pluginOptions": {
        "i18n": {
          "localized": true
        }
      },
      "type": "string",
      "required": true
    },
    "slug": {
      "pluginOptions": {
        "i18n": {
          "localized": true
        }
      },
      "type": "uid",
      "targetField": "name",
      "required": true
    }
    // …additional attributes
  }
}

```

## Lifecycle hooks

Lifecycle hooks are functions that get triggered when Strapi queries are called. They are triggered automatically when managing content through the administration panel or when developing custom code using `queries`·

Lifecycle hooks can be customized declaratively or programmatically.

Lifecycles hooks are not triggered when using directly the 



Using the database layer API, it's also possible to register a subscriber and listen to events programmatically:

```js title="./src/index.js"
module.exports = {
  async bootstrap({ strapi }) {
// registering a subscriber
    strapi.db.lifecycles.subscribe({
      models: [], // optional;

      beforeCreate(event) {
        const { data, where, select, populate } = event.params;

        event.state = 'doStuffAfterWards';
      },

      afterCreate(event) {
        if (event.state === 'doStuffAfterWards') {
        }

        const { result, params } = event;

        // do something to the result
      },
    });

    // generic subscribe for generic handling
    strapi.db.lifecycles.subscribe((event) => {
      if (event.action === 'beforeCreate') {
        // do something
      }
    });
  }
}
```



# Policies
Source: //cms/backend-customization/policies

# Policies

Policies are functions that execute specific logic on each request before it reaches the [controller](/cms/backend-customization/controllers). They are mostly used for securing business logic.

Each [route](/cms/backend-customization/routes) of a Strapi project can be associated to an array of policies. For example, a policy named `is-admin` could check that the request is sent by an admin user, and restrict access to critical routes.

Policies can be global or scoped. [Global policies](#global-policies) can be associated to any route in the project. Scoped policies only apply to a specific [API](#api-policies) or [plugin](#plugin-policies) and should live under the corresponding `./src/api/<api-name>/policies/` or `./src/plugins/<plugin-name>/policies/` folder.


  
  The diagram represents a simplified version of how a request travels through the Strapi back end, with policies and routes highlighted. The backend customization introduction page includes a complete, interactive diagram.


## Implementation

A new policy can be implemented:

- with the [interactive CLI command `strapi generate`](/cms/cli#strapi-generate) 
- or manually by creating a JavaScript file in the appropriate folder (see [project structure](/cms/project-structure)):
  - `./src/policies/` for global policies
  - `./src/api/[api-name]/policies/` for API policies
  - `./src/plugins/[plugin-name]/policies/` for plugin policies



Global policy implementation example:



`policyContext` is a wrapper around the [controller](/cms/backend-customization/controllers) context. It adds some logic that can be useful to implement a policy for both REST and GraphQL.



Policies can be configured using a `config` object:



## Usage

To apply policies to a route, add them to its configuration object (see [routes documentation](/cms/backend-customization/routes#policies)).

Policies are called different ways depending on their scope:

- use `global::policy-name` for [global policies](#global-policies)
- use `api::api-name.policy-name` for [API policies](#api-policies)
- use `plugin::plugin-name.policy-name` for [plugin policies](#plugin-policies)

To list all the available policies, run `yarn strapi policies:list`.

### Global policies

Global policies can be associated to any route in a project.



### Plugin policies

Plugins can add and expose policies to an application. For example, the [Users & Permissions feature](/cms/features/users-permissions) comes with policies to ensure that the user is authenticated or has the rights to perform an action:



### API policies

API policies are associated to the routes defined in the API where they have been declared.



To use a policy in another API, reference it with the following syntax: `api::[apiName].[policyName]`:





# Requests and Responses
Source: //cms/backend-customization/requests-responses

# Requests and Responses

The Strapi back end server is based on . When you send requests through the [REST API](/cms/api/rest), a context object (`ctx`) is passed to every element of the Strapi back end (e.g., [policies](/cms/backend-customization/policies), [controllers](/cms/backend-customization/controllers), [services](/cms/backend-customization/services)).

`ctx` includes 3 main objects:

- [`ctx.request`](#ctxrequest) for information about the request sent by the client making an API request,
- [`ctx.state`](#ctxstate) for information about the state of the request within the Strapi back end,
- and [`ctx.response`](#ctxresponse) for information about the response that the server will return.

The request's context can also be accessed from anywhere in the code with the [`strapi.requestContext` function](#accessing-the-request-context-anywhere).

In addition to the concepts and parameters described in the following documentation, you might find additional information in the ,  and .


  
  The diagram represents a simplified version of how a request travels through the Strapi back end, with requests and responses highlighted. The backend customization introduction page includes a complete, interactive diagram.


## `ctx.request`

The `ctx.request` object contains the following parameters:

| Parameter             | Description                                                                                  | Type     |
| --------------------- | -------------------------------------------------------------------------------------------- | -------- |
| `ctx.request.body`    | Parsed version of the body. | `Object` |
| `ctx.request.files`   | Files sent with the request. | `Array` |
| `ctx.request.headers` | Headers sent with the request. | `Object` |
| `ctx.request.host`    | Host part of the URL, including the port. | `String` |
| `ctx.request.hostname`| Host part of the URL, excluding the port. | `String` |
| `ctx.request.href`    | Complete URL of the requested resource, including the protocol, domain, port (if specified), path, and query parameters. | `String` |
| `ctx.request.ip`      | IP of the person sending the request.| `String` |
| `ctx.request.ips`     | When `X-Forwarded-For` is present and `app.proxy` is enabled, an array of IPs is returned, ordered from upstream to downstream. For example if the value were "client, proxy1, proxy2", you would receive the `["client", "proxy1", "proxy2"]` array. | `Array` |
| `ctx.request.method`  | Request method (e.g., `GET`, `POST`). | `String` |
| `ctx.request.origin`  | URL part before the first `/`. | `String` |
| `ctx.request.params`  | Parameters sent in the URL.For example, if the internal URL is `/restaurants/:id`, whatever you replace `:id` in the real request becomes accessible through `ctx.request.params.id`. | `Object` |
| `ctx.request.path`    | Path of the requested resource, excluding the query parameters. | `String` |
| `ctx.request.protocol`| Protocol being used (e.g., `https` or `http`). | `String` |
| `ctx.request.query`   | Strapi-specific [query parameters](#ctxrequestquery). | `Object` |
| `ctx.request.subdomains`| Subdomains included in the URL.For example, if the domain is `tobi.ferrets.example.com`, the value is the following array: `["ferrets", "tobi"]`. | `Array` |
| `ctx.request.url`     | Path and query parameters of the requested resource, excluding the protocol, domain, and port. | `String` |


Differences between protocol, origin, url, href, path, host, and hostname :

Given an API request sent to the `https://example.com:1337/api/restaurants?id=123` URL, here is what different parameters of the `ctx.request` object return:

| Parameter  | Returned value                                    |
| ---------- | ------------------------------------------------- |
| `ctx.request.href`     | `https://example.com:1337/api/restaurants?id=123` |
| `ctx.request.protocol` | `https`                                           |
| `ctx.request.host`     | `localhost:1337`                                  |
| `ctx.request.hostname` | `localhost`                                       |
| `ctx.request.origin`   | `https://example.com:1337`                          |
| `ctx.request.url`      | `/api/restaurants?id=123`                         |
| `ctx.request.path`     | `/api/restaurants`                                |



### `ctx.request.query`

`ctx.request` provides a `query` object that gives access to Strapi query parameters. The following table lists available parameters with a short description and a link to the relevant REST API documentation section (see [REST API parameters](/cms/api/rest/parameters) for more information):

| Parameter | Description                                                                                                                                            | Type                 |
| -------------------------------------| --------------------------------------------------------------------------------------------------------------------------- | -------------------- |
| `ctx.request.query``ctx.query` | The whole query object.                                                                                                    | `Object`             |
| `ctx.request.query.sort`             | Parameters to [sort the response](/cms/api/rest/sort-pagination.md#sorting)                                            | `String` or `Array`  |
| `ctx.request.query.filters`          | Parameters to [filter the response](/cms/api/rest/filters)                                | `Object`             |
| `ctx.request.query.populate`         | Parameters to [populate relations, components, or dynamic zones](/cms/api/rest/populate-select#population)             | `String` or `Object` |
| `ctx.request.query.fields`           | Parameters to [select only specific fields to return with the response](/cms/api/rest/populate-select#field-selection) | `Array`              |
| `ctx.request.query.pagination`       | Parameter to [page through entries](/cms/api/rest/sort-pagination.md#pagination)                                       | `Object`             |
| `ctx.request.query.publicationState` | Parameter to [select the Draft & Publish state](/cms/api/rest/status)            | `String`             |
| `ctx.request.query.locale`           | Parameter to [select one or multiple locales](/cms/api/rest/locale)                         | `String` or `Array`  |

## `ctx.state`

The `ctx.state` object gives access to the state of the request within the Strapi back end, including specific values about the [user](#ctxstateuser), [authentication](#ctxstateauth), [route](#ctxstateroute):

| Parameter                  | Description                                                                 | Type     |
| ---------------------------|---------------------------------------------------------------------------- | -------- |
| `ctx.state.isAuthenticated`| Returns whether the current user is authenticated in any way.               | `Boolean` |

### `ctx.state.user`

The `ctx.state.user` object gives access to information about the user performing the request and includes the following parameters:

| Parameter | Description                                                                                  | Type     |
| ----------| -------------------------------------------------------------------------------------------- | -------- |
| `ctx.state.user`| User's information. Only one relation is populated.                   | `Object` |
| `ctx.state.user.role`| The user's role | `Object` |


### `ctx.state.auth`

The `ctx.state.auth` object gives access to information related to the authentication and includes the following parameters:

| Parameter                     | Description                                                                                  | Type     |
| ------------------------------| -------------------------------------------------------------------------------------------- | -------- |
| `ctx.state.auth.strategy`     | Information about the currently used authentication strategy ([Users & Permissions plugin](/cms/features/users-permissions) or [API tokens](/cms/features/api-tokens)) | `Object` |
| `ctx.state.auth.strategy.name`| Name of the currently used strategy                                                          | `String` |
| `ctx.state.auth.credentials`  | The user's credentials                                                                      | `String` |



### `ctx.state.route`

The `ctx.state.route` object gives access to information related to the current route and includes the following parameters:

| Parameter | Description                                                                                  | Type     |
| ----------| -------------------------------------------------------------------------------------------- | -------- |
| `ctx.state.route.method`| Method used to access the current route. | `String` |
| `ctx.state.route.path`| Path of the current route. | `String` |
| `ctx.state.route.config`| Configuration information about the current route. | `Object` |
| `ctx.state.route.handler`| Handler (controller) of the current route. | `Object` |
| `ctx.state.route.info`| Additional information about the current route, such as the apiName and the API request type. | `Object` |
| `ctx.state.route.info.apiName`| Name of the used API.  | `String` |
| `ctx.state.route.info.type`| Type of the used API. | `String` |

## `ctx.response`

The `ctx.response` object gives access to information related to the response that the server will return and includes the following parameters:

| Parameter | Description                                                                                  | Type     |
| ----------| -------------------------------------------------------------------------------------------- | -------- |
| `ctx.response.body`| Body of the response. | `Any` |
| `ctx.response.status` | Status code of the response. | `Integer` |
| `ctx.response.message`| Status message of the response.By default, `response.message` is associated with `response.status`. | `String` |
| `ctx.response.header``ctx.response.headers`| Header(s) sent with the response. | `Object` |
| `ctx.response.length`|  header value as a number when present, or deduces it from `ctx.body` when possible; otherwise, returns `undefined`. | `Integer` |
| `ctx.response.redirect``ctx.response.redirect(url, [alt])` | Performs a `302` redirect to the URL. The string "back" is special-cased to provide Referrer support; when Referrer is not present, alt or "/" is used.Example: `ctx.response.redirect('back', '/index.html');` | `Function` |
| `ctx.response.attachment``ctx.response.attachment([filename], [options])` | Sets  header to "attachment" to signal the client to prompt for download. Optionally specify the filename of the download and some . | `Function` |
| `ctx.response.type`|  header, void of parameters such as "charset". | `String` |
| `ctx.response.lastModified`|  header as a Date, if it exists. | `DateTime` |
| `ctx.response.etag`| Sets the  of a response including the wrapped "s.There is no corresponding `response.etag` getter. | `String` |


## Accessing the request context anywhere

Strapi exposes a way to access the current request context from anywhere in the code (e.g. lifecycle functions).

You can access the request as follows:

```js
const ctx = strapi.requestContext.get();
```

You should only use this inside of functions that will be called in the context of an HTTP request.

```js
// correct

const service = {
  myFunction() {
    const ctx = strapi.requestContext.get();
    console.log(ctx.state.user);
  },
};

// incorrect
const ctx = strapi.requestContext.get();

const service = {
  myFunction() {
    console.log(ctx.state.user);
  },
};
```

**Example:**

```js title="./api/test/content-types/article/lifecycles.js"

module.exports = {
  beforeUpdate() {
    const ctx = strapi.requestContext.get();

    console.log('User info in service: ', ctx.state.user);
  },
};
```

Strapi uses a Node.js feature called  to make the context available anywhere.



# Routes
Source: //cms/backend-customization/routes

# Routes

Requests sent to Strapi on any URL are handled by routes. By default, Strapi generates routes for all the content-types (see [REST API documentation](/cms/api/rest)). Routes can be [added](#implementation) and configured:

- with [policies](#policies), which are a way to block access to a route,
- and with [middlewares](#middlewares), which are a way to control and change the request flow and the request itself.

Once a route exists, reaching it executes some code handled by a controller (see [controllers documentation](/cms/backend-customization/controllers)). To view all existing routes and their hierarchal order, you can run `yarn strapi routes:list` (see [CLI reference](/cms/cli)).

If you only customize the default controller actions (`find`, `findOne`, `create`, `update`, or `delete`) that Strapi generates for a content-type, you can leave the router as-is. Those core routes already target the same handler names and will run your new controller logic. Add or edit a route only when you need a brand-new HTTP path/method or want to expose a custom controller action.


  
  The diagram represents a simplified version of how a request travels through the Strapi back end, with routes highlighted. The backend customization introduction page includes a complete, interactive diagram.


## Implementation

Implementing a new route consists in defining it in a router file within the `./src/api/[apiName]/routes` folder (see [project structure](/cms/project-structure)).

There are 2 different router file structures, depending on the use case:

- configuring [core routers](#configuring-core-routers)
- or creating [custom routers](#creating-custom-routers).

### Configuring core routers

Core routers (i.e. `find`, `findOne`, `create`, `update`, and `delete`) correspond to [default routes](/cms/api/rest#endpoints) automatically created by Strapi when a new [content-type](/cms/backend-customization/models#model-creation) is created.

Strapi provides a `createCoreRouter` factory function that automatically generates the core routers and allows:

- passing in configuration options to each router
- and disabling some core routers to [create custom ones](#creating-custom-routers).

A core router file is a JavaScript file exporting the result of a call to `createCoreRouter` with the following parameters:

| Parameter | Description                                                                                  | Type     |
| ----------| -------------------------------------------------------------------------------------------- | -------- |
| `prefix`  | Allows passing in a custom prefix to add to all routers for this model (e.g. `/test`)        | `String` |
| `only`    | Core routes that will only be loadedAnything not in this array is ignored.        | `Array` | -->

| `except`  | Core routes that should not be loadedThis is functionally the opposite of the `only` parameter. | `Array` |
| `config`  | Configuration to handle [policies](#policies), [middlewares](#middlewares) and [public availability](#public-routes) for the route | `Object` |

Generic implementation example:

This only allows a `GET` request on the `/restaurants` path from the core `find` [controller](/cms/backend-customization/controllers) without authentication. When you reference custom controller actions in custom routers, prefer the fully‑qualified `api::<api-name>.<controllerName>.<actionName>` form for clarity (e.g., `api::restaurant.restaurant.review`).

### Creating custom routers

Creating custom routers consists in creating a file that exports an array of objects, each object being a route with the following parameters:

| Parameter                  | Description                                                                      | Type     |
| -------------------------- | -------------------------------------------------------------------------------- | -------- |
| `method`                   | Method associated to the route (i.e. `GET`, `POST`, `PUT`, `DELETE` or `PATCH`)  | `String` |
| `path`                     | Path to reach, starting with a forward-leading slash (e.g. `/articles`)| `String` |
| `handler`                  | Function to execute when the route is reached.Use the fully-qualified syntax `api::api-name.controllerName.actionName` (or `plugin::plugin-name.controllerName.actionName`). The short `<controllerName>.<actionName>` form for legacy projects also works. | `String` |
| `config`*Optional* | Configuration to handle [policies](#policies), [middlewares](#middlewares) and [public availability](#public-routes) for the route           | `Object` |

Dynamic routes can be created using parameters and regular expressions. These parameters will be exposed in the `ctx.params` object. For more details, please refer to the

## Configuration

Both [core routers](#configuring-core-routers) and [custom routers](#creating-custom-routers) have the same configuration options. The routes configuration is defined in a `config` object that can be used to handle [policies](#policies) and [middlewares](#middlewares) or to [make the route public](#public-routes).

### Policies

[Policies](/cms/backend-customization/policies) can be added to a route configuration:

- by pointing to a policy registered in `./src/policies`, with or without passing a custom configuration
- or by declaring the policy implementation directly, as a function that takes `policyContext` to extend

### Middlewares

[Middlewares](/cms/backend-customization/middlewares) can be added to a route configuration:

- by pointing to a middleware registered in `./src/middlewares`, with or without passing a custom configuration
- or by declaring the middleware implementation directly, as a function that takes

### Public routes

By default, routes are protected by Strapi's authentication system, which is based on [API tokens](/cms/features/api-tokens) or on the use of the [Users & Permissions plugin](/cms/features/users-permissions).

In some scenarios, it can be useful to have a route publicly available and control the access outside of the normal Strapi authentication system. This can be achieved by setting the `auth` configuration parameter of a route to `false`:
