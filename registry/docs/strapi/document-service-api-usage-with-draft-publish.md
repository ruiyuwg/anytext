# Document Service API: Usage with Draft & Publish

By default the [Document Service API](/cms/api/document-service) returns the draft version of a document when the [Draft & Publish](/cms/features/draft-and-publish) feature is enabled. This page describes how to use the `status` parameter to:

- return the published version of a document,
- count documents depending on their status,
- and directly publish a document while creating it or updating it.

Passing `{ status: 'draft' }` to a Document Service API query returns the same results as not passing any `status` parameter.

## Get the published version with `findOne()`

`findOne()` queries return the draft version of a document by default.

To return the published version while [finding a specific document](/cms/api/document-service#findone) with the Document Service API, pass `status: 'published'`:

## Get the published version with `findFirst()`

`findFirst()` queries return the draft version of a document by default.

To return the published version while [finding the first document](/cms/api/document-service#findfirst) with the Document Service API, pass `status: 'published'`:

## Get the published version with `findMany()`

`findMany()` queries return the draft version of documents by default.

To return the published version while [finding documents](/cms/api/document-service#findmany) with the Document Service API, pass `status: 'published'`:

## `count()` only draft or published versions

To take into account only draft or published versions of documents while [counting documents](/cms/api/document-service#count) with the Document Service API, pass the corresponding `status` parameter:

```js
// Count draft documents (also actually includes published documents)
const draftsCount = await strapi.documents("api::restaurant.restaurant").count({
  status: 'draft'
});
```

```js
// Count only published documents
const publishedCount = await strapi.documents("api::restaurant.restaurant").count({
  status: 'published'
});
```

Since published documents necessarily also have a draft counterpart, a published document is still counted as having a draft version.

This means that counting with the `status: 'draft'` parameter still returns the total number of documents matching other parameters, even if some documents have already been published and are not displayed as "draft" or "modified" in the Content Manager anymore. There currently is no way to prevent already published documents from being counted.

## Create a draft and publish it

To automatically publish a document while creating it, add `status: 'published'` to parameters passed to `create()`:

## Update a draft and publish it

To automatically publish a document while updating it, add `status: 'published'` to parameters passed to `update()`:

# GraphQL API

Source: //cms/api/graphql
