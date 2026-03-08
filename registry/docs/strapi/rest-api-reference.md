# REST API reference

The REST API allows accessing the [content-types](/cms/backend-customization/models) through API endpoints. Strapi automatically creates [API endpoints](#endpoints) when a content-type is created. [API parameters](/cms/api/rest/parameters) can be used when querying API endpoints to refine the results.

This section of the documentation is for the REST API reference for content-types. We also have [guides](/cms/api/rest/guides/intro) available for specific use cases.

All content types are private by default and need to be either made public or queries need to be authenticated with the proper permissions. See the [Quick Start Guide](/cms/quick-start#step-4-set-roles--permissions), the user guide for the [Users & Permissions feature](/cms/features/users-permissions#roles), and [API tokens configuration documentation](/cms/features/api-tokens) for more details.

By default, the REST API responses only include top-level fields and does not populate any relations, media fields, components, or dynamic zones. Use the [`populate` parameter](/cms/api/rest/populate-select) to populate specific fields. Ensure that the find permission is given to the field(s) for the relation(s) you populate.

The [Strapi Client](/cms/api/client) library simplifies interactions with your Strapi back end, providing a way to fetch, create, update, and delete content.

## Endpoints

For each Content-Type, the following endpoints are automatically generated:

Plural API ID vs. Singular API ID:

In the following tables:

- `:singularApiId` refers to the value of the "API ID (Singular)" field of the content-type,
- and `:pluralApiId` refers to the value of the "API ID (Plural)" field of the content-type.

These values are defined when creating a content-type in the Content-Type Builder, and can be found while editing a content-type in the admin panel (see [User Guide](/cms/features/content-type-builder#creating-content-types)). For instance, by default, for an "Article" content-type:

- `:singularApiId` will be `article`
- `:pluralApiId` will be `articles`

Real-world examples of endpoints:

The following endpoint examples are taken from the

The Upload package (which powers the [Media Library feature](/cms/features/media-library)) has a specific API accessible through its [`/api/upload` endpoints](/cms/api/rest/upload).

[Components](/cms/backend-customization/models#components-json) don't have API endpoints.

## Requests

Strapi 5's Content API includes 2 major differences with Strapi v4:

- The response format has been flattened, which means attributes are no longer nested in a `data.attributes` object and are directly accessible at the first level of the `data` object (e.g., a content-type's "title" attribute is accessed with `data.title`).
- Strapi 5 now uses **documents**

### Get a document

Returns a document by `documentId`.

In Strapi 5, a specific document is reached by its `documentId`.

### Create a document

Creates a document and returns its value.

If the [Internationalization (i18n) plugin](/cms/features/internationalization) is installed, it's possible to use POST requests to the REST API to [create localized documents](/cms/api/rest/locale#rest-delete).

While creating a document, you can define its relations and their order (see [Managing relations through the REST API](/cms/api/rest/relations.md) for more details).

### Update a document

Partially updates a document by `id` and returns its value.

Send a `null` value to clear fields.

- Even with the [Internationalization (i18n) plugin](/cms/features/internationalization) installed, it's currently not possible to [update the locale of a document](/cms/api/rest/locale#rest-update).
- While updating a document, you can define its relations and their order (see [Managing relations through the REST API](/cms/api/rest/relations) for more details).

### Delete a document

Deletes a document.

`DELETE` requests only send a 204 HTTP status code on success and do not return any data in the response body.

# Filters

Source: //cms/api/rest/filters

# REST API: Filters

The [REST API](/cms/api/rest) offers the ability to filter results found with its ["Get entries"](/cms/api/rest#get-all) method.
Using optional Strapi features can provide some more filters:

- If the [Internationalization (i18n) plugin](/cms/features/internationalization) is enabled on a content-type, it's possible to filter by locale.
- If the [Draft & Publish](/cms/features/draft-and-publish) is enabled, it's possible to filter based on a `published` (default) or `draft` status.

JavaScript query (built with the qs library):

## Example: Find multiple restaurants with ids 3, 6,8

You can use the `$in` filter operator with an array of values to find multiple exact values.

JavaScript query (built with the qs library):

## Complex filtering

Complex filtering is combining multiple filters using advanced methods such as combining `$and` & `$or`. This allows for more flexibility to request exactly the data needed.

JavaScript query (built with the qs library):

## Deep filtering

Deep filtering is filtering on a relation's fields.

- Relations, media fields, components, and dynamic zones are not populated by default. Use the `populate` parameter to populate these content structures (see [`populate` documentation](/cms/api/rest/populate-select#population))
- You can filter what you populate, you can also filter nested relations, but you can't use filters for polymorphic content structures (such as media fields and dynamic zones).

Querying your API with deep filters may cause performance issues.  If one of your deep filtering queries is too slow, we recommend building a custom route with an optimized version of the query.

JavaScript query (built with the qs library):

# REST API Guides

Source: //cms/api/rest/guides/intro

# REST API Guides

The [REST API reference](/cms/api/rest) documentation is meant to provide a quick reference for all the endpoints and parameters available.

## Guides

The following guides, officially maintained by the Strapi Documentation team, cover dedicated topics and provide detailed explanations (guides indicated with 🧠) or step-by-step instructions (guides indicated with 🛠️) for some use cases:

## Additional resources

Some of the additional resources listed in this section have been created for Strapi v4 and might not fully work with Strapi 5. If you want to update one of the following articles for Strapi 5, feel free to  for the Write for the Community program.

Additional tutorials and guides can be found in the following blog posts:

# Interactive Query Builder

Source: //cms/api/rest/interactive-query-builder

# Build your query URL with Strapi's interactive tool

A wide range of parameters can be used and combined to query your content with the [REST API](/cms/api/rest), which can result in long and complex query URLs.

Strapi's codebase uses  to parse and stringify nested JavaScript objects. It's recommended to use `qs` directly to generate complex query URLs instead of creating them manually.

You can use the following interactive query builder tool to generate query URLs automatically:

1. Replace the values in the *Endpoint* and *Endpoint Query Parameters* fields with content that fits your needs.
2. Click the **Copy to clipboard** button to copy the automatically generated *Query String URL* which is updated as you type.

Please refer to the [REST API parameters table](/cms/api/rest/parameters) and read the corresponding parameters documentation pages to better understand parameters usage.

The default endpoint path is prefixed with `/api/` and should be kept as-is unless you configured a different API prefix using [the `rest.prefix` API configuration option](/cms/configurations/api). For instance, to query the `books` collection type using the default API prefix, type `/api/books` in the *Endpoint* field.

The `qs` library and the interactive query builder provided on this page:

- might not detect all syntax errors,
- are not aware of the parameters and values available in a Strapi project,
- and do not provide autocomplete features.

Currently, these tools are only provided to transform the JavaScript object in an inline query string URL. Using the generated query URL does not guarantee that proper results will get returned with your API.

# Locale

Source: //cms/api/rest/locale
