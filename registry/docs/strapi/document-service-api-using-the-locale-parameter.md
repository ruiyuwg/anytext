# Document Service API: Using the `locale` parameter

By default the [Document Service API](/cms/api/document-service) returns the default locale version of documents (which is 'en', i.e. the English version, unless another default locale has been set for the application, see [Internationalization (i18n) feature](/cms/features/internationalization)). This page describes how to use the `locale` parameter to get or manipulate data only for specific locales.

## Get a locale version with `findOne()`

If a `locale` is passed, the [`findOne()` method](/cms/api/document-service#findone) of the Document Service API returns the version of the document for this locale:

If no `status` parameter is passed, the `draft` version is returned by default.

## Get a locale version with `findFirst()`

To return a specific locale while [finding the first document](/cms/api/document-service#findfirst) matching the parameters with the Document Service API:

If no `status` parameter is passed, the `draft` version is returned by default.

## Get locale versions with `findMany()`

When a `locale` is passed to the [`findMany()` method](/cms/api/document-service#findmany) of the Document Service API, the response will return all documents that have this locale available.

If no `status` parameter is passed, the `draft` versions are returned by default.

Explanation:

Given the following 4 documents that have various locales:

- Document A:
  - en
  - `fr`
  - it
- Document B:
  - en
  - it
- Document C:
  - `fr`
- Document D:
  - `fr`
  - it

`findMany({ locale: 'fr' })` would only return the draft version of the documents that have a `‘fr’` locale version, that is documents A, C, and D.

## `create()` a document for a locale

To create a document for specific locale, pass the `locale` as a parameter to the [`create` method](/cms/api/document-service#create) of the Document Service API:

## `update()` a locale version

To update only a specific locale version of a document, pass the `locale` parameter to the [`update()` method](/cms/api/document-service#update) of the Document Service API:

## `delete()` locale versions

Use the `locale` parameter with the [`delete()` method](/cms/api/document-service#delete) of the Document Service API to delete only some locales. Unless a specific `status` parameter is passed, this deletes both the draft and published versions.

### Delete a locale version

To delete a specific locale version of a document:

### Delete all locale versions

The `*` wildcard is supported by the `locale` parameter and can be used to delete all locale versions of a document:

## `publish()` locale versions

To publish only specific locale versions of a document with the [`publish()` method](/cms/api/document-service#publish) of the Document Service API, pass `locale` as a parameter:

### Publish a locale version

To publish a specific locale version of a document:

### Publish all locale versions

The `*` wildcard is supported by the `locale` parameter to publish all locale versions of a document:

## `unpublish()` locale versions

To publish only specific locale versions of a document with the [`unpublish()` method](/cms/api/document-service#unpublish) of the Document Service API, pass `locale` as a parameter:

### Unpublish a locale version

To unpublish a specific locale version of a document, pass the `locale` as a parameter to `unpublish()`:

### Unpublish all locale versions

The `*` wildcard is supported by the `locale` parameter, to unpublish all locale versions of a document:

## `discardDraft()` for locale versions

To discard draft data only for some locales versions of a document with the [`discardDraft()` method](/cms/api/document-service#discarddraft) of the Document Service API, pass `locale` as a parameter:

### Discard draft for a locale version

To discard draft data for a specific locale version of a document and override it with data from the published version for this locale, pass the `locale` as a parameter to `discardDraft()`:

### Discard drafts for all locale versions

The `*` wildcard is supported by the `locale` parameter, to discard draft data for all locale versions of a document and replace them with the data from the published versions:

## `count()` documents for a locale

To count documents for a specific locale, pass the `locale` along with other parameters to the [`count()` method](/cms/api/document-service#count) of the Document Service API.

If no `status` parameter is passed, draft documents are counted (which is the total of available documents for the locale since even published documents are counted as having a draft version):

```js
// Count number of published documents in French
strapi.documents('api::restaurant.restaurant').count({ locale: 'fr' });
```

# Extending the Document Service behavior

Source: //cms/api/document-service/middlewares
