# REST API: `locale`

The [Internationalization (i18n) feature](/cms/features/internationalization) adds new abilities to the [REST API](/cms/api/rest).

To work with API content for a locale, please ensure the locale has been already [added to Strapi in the admin panel](/cms/features/internationalization#settings).

The `locale` [API parameter](/cms/api/rest/parameters) can be used to work with documents only for a specified locale. `locale` takes a locale code as a value (see

### `GET` Get all documents in a specific locale

### `GET` Get a document in a specific locale

To get a specific document in a given locale, add the `locale` parameter to the query:

| Use case             | Syntax format and link for more information                                                    |
| -------------------- | ---------------------------------------------------------------------------------------------- |
| In a collection type | [`GET /api/content-type-plural-name/document-id?locale=locale-code`](#get-one-collection-type) |
| In a single type     | [`GET /api/content-type-singular-name?locale=locale-code`](#get-one-single-type)               |

#### Collection types

To get a specific document in a collection type in a given locale, add the `locale` parameter to the query, after the `documentId`:

#### Single types

To get a specific single type document in a given locale, add the `locale` parameter to the query, after the single type name:

### `POST` Create a new localized document for a collection type

To create a localized document from scratch, send a POST request to the Content API. Depending on whether you want to create it for the default locale or for another locale, you might need to pass the `locale` parameter in the query.

| Use case                      | Syntax format and link for more information                                               |
| ----------------------------- | --------------------------------------------------------------------------------------- |
| Create for the default locale | [`POST /api/content-type-plural-name`](#rest-create-default-locale) |
| Create for a specific locale  | [`POST /api/content-type-plural-name?locale=fr`](#rest-create-specific-locale)

#### For the default locale

If no locale has been passed in the request body, the document is created using the default locale for the application:

#### For a specific locale

To create a localized entry for a locale different from the default one, add the `locale` parameter to the query URL of the POST request:

### `PUT` Create a new, or update an existing, locale version for an existing document

With `PUT` requests sent to an existing document, you can:

- create another locale version of the document,
- or update an existing locale version of the document.

Send the `PUT` request to the appropriate URL, adding the `locale=your-locale-code` parameter to the query URL and passing attributes in a `data` object in the request's body:

| Use case             | Syntax format and link for more information                                               |
| -------------------- | --------------------------------------------------------------------------------------- |
| In a collection type | [`PUT /api/content-type-plural-name/document-id?locale=locale-code`](#rest-put-collection-type) |
| In a single type     | [`PUT /api/content-type-singular-name?locale=locale-code`](#rest-put-single-type)               |

When creating a localization for existing localized entries, the body of the request can only accept localized fields.

The Content-Type should have the [`createLocalization` permission](/cms/features/rbac#collection-and-single-types) enabled, otherwise the request will return a `403: Forbidden` status.

It is not possible to change the locale of an existing localized entry. When updating a localized entry, if you set a `locale` attribute in the request body it will be ignored.

#### In a collection type

To create a new locale for an existing document in a collection type, add the `locale` parameter to the query, after the `documentId`, and pass data to the request's body:

#### In a single type

To create a new locale for an existing single type document, add the `locale` parameter to the query, after the single type name, and pass data to the request's body:

### `DELETE` Delete a locale version of a document

To delete a locale version of a document, send a `DELETE` request with the appropriate `locale` parameter.

`DELETE` requests only send a 204 HTTP status code on success and do not return any data in the response body.

#### In a collection type

To delete only a specific locale version of a document in a collection type, add the `locale` parameter to the query after the `documentId`:

#### In a single type

To delete only a specific locale version of a single type document, add the `locale` parameter to the query after the single type name:

# Parameters

Source: //cms/api/rest/parameters

# REST API parameters

API parameters can be used with the [REST API](/cms/api/rest) to filter, sort, and paginate results and to select fields and relations to populate. Additionally, specific parameters related to optional Strapi features can be used, like the publication state and locale of a content-type.

The following API parameters are available:

| Operator           | Type          | Description                                           |
| ------------------ | ------------- | ----------------------------------------------------- |
| `filters`          | Object        | [Filter the response](/cms/api/rest/filters) |
| `locale`           | String        | [Select a locale](/cms/api/rest/locale) |
| `status`           | String        | [Select the Draft & Publish status](/cms/api/rest/status) |
| `populate`         | String or Object | [Populate relations, components, or dynamic zones](/cms/api/rest/populate-select#population) |
| `fields`           | Array         | [Select only specific fields to display](/cms/api/rest/populate-select#field-selection) |
| `sort`             | String or Array  | [Sort the response](/cms/api/rest/sort-pagination.md#sorting) |
| `pagination`       | Object        | [Page through entries](/cms/api/rest/sort-pagination.md#pagination) |

Query parameters use the  (i.e. they are encoded using square brackets `[]`).

A wide range of REST API parameters can be used and combined to query your content, which can result in long and complex query URLs.👉 You can use Strapi's [interactive query builder](/cms/api/rest/interactive-query-builder) tool to build query URLs more conveniently. 🤗

# Populate and Select

Source: //cms/api/rest/populate-select
