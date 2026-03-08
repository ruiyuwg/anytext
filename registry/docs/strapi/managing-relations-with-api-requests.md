# Managing relations with API requests

Defining relations between content-types (that are designated as entities in the database layers) is connecting entities with each other.

Relations between content-types can be managed through the [admin panel](/cms/features/content-manager#relational-fields) or through [REST API](/cms/api/rest) or [Document Service API](/cms/api/document-service) requests.

Relations can be connected, disconnected or set through the Content API by passing parameters in the body of the request. These payloads work for both single-entry relations and multi relations (one-to-many, many-to-one, many-to-many, and many-way). When a relational field allows multiple links, the API expects arrays of relation IDs and returns arrays in responses.

|  Parameter name         | Description | Type of update |
|-------------------------|-------------|----------------|
| [`connect`](#connect)   | Connects new entities.Can be used in combination with `disconnect`.Can be used with [positional arguments](#relations-reordering) to define an order for relations.    | Partial |
| [`disconnect`](#disconnect)    | Disconnects entities.Can be used in combination with `connect`. | Partial |
| [`set`](#set)           | Set entities to a specific set. Using `set` will overwrite all existing connections to other entities.Cannot be used in combination with `connect` or `disconnect`.  | Full |

Multi relations can be managed from the REST API and the [GraphQL API](/cms/api/graphql#fetch-relations): the  `connect`, `disconnect`, and `set` operations are available across both APIs. However, the [Document Service API](/cms/api/document-service) does not handle relations.

When [Internationalization (i18n)](/cms/features/internationalization) is enabled on the content-type, you can also pass a locale to set relations for a specific locale, as in this Document Service API example:

```js
await strapi.documents('api::restaurant.restaurant').update({ 
  documentId: 'a1b2c3d4e5f6g7h8i9j0klm',
  locale: 'fr',
  data: { 
    category: {
      connect: ['z0y2x4w6v8u1t3s5r7q9onm', 'j9k8l7m6n5o4p3q2r1s0tuv']
    }
  }
})
```

If no locale is passed, the default locale will be assumed.

## `connect`

Using `connect` in the body of a request performs a partial update, connecting the specified relations.

`connect` accepts either a shorthand or a longhand syntax:

| Syntax type | Syntax example |
| ------------|----------------|
| shorthand   | `connect: ['z0y2x4w6v8u1t3s5r7q9onm', 'j9k8l7m6n5o4p3q2r1s0tuv']` |
| longhand    | `connect: [{ documentId: 'z0y2x4w6v8u1t3s5r7q9onm' }, { documentId: 'j9k8l7m6n5o4p3q2r1s0tuv' }]` |

You can also use the longhand syntax to [reorder relations](#relations-reordering).

`connect` can be used in combination with [`disconnect`](#disconnect).

`connect` is not officially supported for media attributes. Advanced users can technically connect media entries by targeting upload file IDs, but this workaround isn't recommended or supported by Strapi and can easily break (e.g. when Draft & Publish uses mismatched IDs). Proceed with caution.

### Relations reordering

Omitting the `position` argument (as in `documentId: 'srkvrr77k96o44d9v6ef1vu9'`) defaults to `position: { end: true }`. All other relations are positioned relative to another existing `id` (using `after` or `before`) or relative to the list of relations (using `start` or `end`). Operations are treated sequentially in the order defined in the `connect` array, so the resulting database record will be the following:

```js
categories: [
  { id: 'nyk7047azdgbtjqhl7btuxw' },
  { id: 'j9k8l7m6n5o4p3q2r1s0tuv' },
  { id: '6u86wkc6x3parjd4emikhmx6' },
  { id: '3r1wkvyjwv0b9b36s7hzpxl7' },
  { id: 'a1b2c3d4e5f6g7h8i9j0klm' },
  { id: 'rkyqa499i84197l29sbmwzl' },
  { id: 'srkvrr77k96o44d9v6ef1vu9' }
]
```

### Edge cases: Draft & Publish or i18n disabled

When some built-in features of Strapi 5 are disabled for a content-type, such as [Draft & Publish](/cms/features/draft-and-publish) and [Internationalization (i18)](/cms/features/internationalization), the `connect` parameter might be used differently:

**Relation from a `Category` with i18n *off* to an `Article` with i18n *on*:**

In this situation you can select which locale you are connecting to:

```js
data: {
    categories: {
      connect: [
        { documentId: 'z0y2x4w6v8u1t3s5r7q9onm', locale: 'en' },
        // Connect to the same document id but with a different locale 👇
        { documentId: 'z0y2x4w6v8u1t3s5r7q9onm', locale: 'fr' },
      ]
   }
}
```

**Relation from a `Category` with Draft & Publish *off* to an `Article` with Draft & Publish *on*:**

```js
data: {
  categories: {
    connect: [
      { documentId: 'z0y2x4w6v8u1t3s5r7q9onm', status: 'draft' },
      // Connect to the same document id but with different publication states 👇
      { documentId: 'z0y2x4w6v8u1t3s5r7q9onm', status: 'published' },
    ]
  }
}
```

## `disconnect`

Using `disconnect` in the body of a request performs a partial update, disconnecting the specified relations.

`disconnect` accepts either a shorthand or a longhand syntax:

| Syntax type | Syntax example |
| ------------|----------------|
| shorthand   | `disconnect: ['z0y2x4w6v8u1t3s5r7q9onm', 'j9k8l7m6n5o4p3q2r1s0tuv']`
| longhand    | `disconnect: [{ documentId: 'z0y2x4w6v8u1t3s5r7q9onm' }, { documentId: 'j9k8l7m6n5o4p3q2r1s0tuv' }]` |

`disconnect` can be used in combination with [`connect`](#connect).

## `set`

Using `set` performs a full update, replacing all existing relations with the ones specified, in the order specified.

`set` accepts a shorthand or a longhand syntax:

| Syntax type | Syntax example                  |
| ----------- | ------------------------------- |
| shorthand   | `set: ['z0y2x4w6v8u1t3s5r7q9onm', 'j9k8l7m6n5o4p3q2r1s0tuv']`                   |
| longhand    | `set: [{ documentId: 'z0y2x4w6v8u1t3s5r7q9onm' }, { documentId: 'j9k8l7m6n5o4p3q2r1s0tuv' }]` |

As `set` replaces all existing relations, it should not be used in combination with other parameters. To perform a partial update, use [`connect`](#connect) and [`disconnect`](#disconnect).

Omitting any parameter is equivalent to using `set`.For instance, the following 3 syntaxes are all equivalent:

- `data: { categories: set: [{ documentId: 'z0y2x4w6v8u1t3s5r7q9onm' }, { documentId: 'j9k8l7m6n5o4p3q2r1s0tuv' }] }}`
- `data: { categories: set: ['z0y2x4w6v8u1t3s5r7q9onm2', 'j9k8l7m6n5o4p3q2r1s0tuv'] }}`
- `data: { categories: ['z0y2x4w6v8u1t3s5r7q9onm2', 'j9k8l7m6n5o4p3q2r1s0tuv'] }`

# Sort and Pagination

Source: //cms/api/rest/sort-pagination
