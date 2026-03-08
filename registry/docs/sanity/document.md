# Document

Everything in the Studio starts with the `document`. A document is what you create and edit in the studio—all the other types you may define live inside the `document`s. In the default studio configuration, the document-types are the ones that will be listed in the content-column. See the [DocumentDefinition](https://reference.sanity.io/sanity/index/DocumentDefinition/) reference for the full type definition.

## Properties

#### Properties

| Property | Description |
| --- | --- |
| name \* | The field name. This will be the key in the data record. |
| type \* | Value must be set to document. |
| fields \* | The fields of this object. At least one field is required. Documented here. |
| description | Show a description to editors with context about the document type. |
| fieldsets | A list of fieldsets that fields may belong to. Documented here. |
| groups | Groups fields into tabs.

On document: groups: \[{name: 'seo', title: 'SEO'}],

On field: group: 'seo',

For details, see this reference doc. |
| initialValue | The initial value that will be used for all new documents created from this document type. Can be either a literal document value or a function that returns either a literal value or a promise that resolves to a document value. |
| liveEdit | Turns off drafts when set to true. Changes to documents will publish immediately. |
| orderings | A declaration of possible ways to order documents of this type, documented here. |
| preview | Use this to implement an override for the default preview for this type. Documentation here. |
| title | Human readable label for the document. |
| readOnly | If set to true, documents of this type will not be editable in the Studio. You can also return a callback function to use it as a conditional field. |
| components | Lets you provide custom components to override the studio defaults in various contexts. The components available are field, input, item, preview. |
| deprecated | Marks a field or document type as deprecated in the studio interface and displays a user-defined message defined by the single required reason property.

If you deploy a GraphQL API schema, this property will translated into the @deprecated directive. |
| \_\_experimental\_formPreviewTitle | Hides the document title heading in the studio form pane. |
| icon | Supply a custom icon for this field. See icons documentation for more information. |
| hidden | If set to `true`, this field will be hidden in the studio. You can also return a callback function to use it as a conditional field. |
| renderMembers | Custom render function for the document's members (fields and fieldsets). |

At its core, a document is a JSON-object that has a unique `_id`, timestamps (`_createdAt`, `_updatedAt`) and revision-marker `_rev`.

> \[!TIP]
> Timestamp truthiness
> `_createdAt` and `_updatedAt` are automatically set by the system to the current time when the document is created or updated, respectively. It is possible to provide a custom value when the document is initially created via a `create`, `createIfNotExists`, or `createOrReplace` mutation. Since the timestamps can be set by a client, they should never be assumed to be accurate.

The `document` type is used to define the structure of a document that can be stored in our data store. You can think of a document as an object that, in addition to the fields you define, also has a unique id, (`_id`), a field for tracking created time and last updated time (`_createdAt` and `_updatedAt`) and a revision marker (`_rev`). Only *documents* can be referred to from other documents or retrieved by id and only *document* types will be listed and create-able in the studio.

Apart from the above, documents are defined just like regular objects, so see the documentation of the object type for more info about how to define documents.

Input

```javascript
{
  title: 'Movie',
  name: 'movie',
  type: 'document',
  fields: [
    {
      title: 'Title',
      name: 'title',
      type: 'string'
    },
    {
      title: 'Poster',
      name: 'poster',
      type: 'image'
    },
    {
      title: 'Directors',
      name: 'directors',
      type: 'array',
      of: [{type: 'string'}]
    }
  ]
}
```

Response

```json
{
  "_type": "movie",
  "_id": "2106a34f-315f-44bc-929b-bf8e9a3eba0d",
  // ... _createdAt, _updatedAt, _rev omitted
  "title": "Alien",
  "poster": {... <an image object> ...},
  "directors": ["Ridley Scott"]
}
```
