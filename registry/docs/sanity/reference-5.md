# Reference

![A GIF of a showing the behaviour of a reference field in Sanity Studio](https://cdn.sanity.io/images/3do82whm/next/61ee34b6a0512c9d187a318eaddea2ffd53af7d6-664x329.gif)

Relations between documents are modeled using the `reference` type. To model a one-to-many relation, store the references in an array.

References can be either *strong* (default) or *weak*. A strong reference will enforce that the document it points to actually exists, and will not allow deletion of a document that any other document refers to. A weak reference allows pointing to documents that may not exist (yet) or may have been deleted.

> \[!WARNING]
> Gotcha
> Whether a reference should be strong or weak is configured by setting the `weak` property on the reference field. Note that merely changing this property won't automatically update reference fields in the data store.

When working in Sanity Studio, the reference input allows you to search for already existing documents, or create and publish new documents of the appropriate type inline from the place of referral. In order to secure referential integrity, the referring document will be blocked from publishing until the new, referenced, document has been published. The exception is if the reference has the property `weak: true`.

> \[!TIP]
> Protip
> For a more in-depth discussion on how to think about references in Sanity, we recommend reading the supplementary article [Connected Content](https://www.sanity.io/docs/studio/connected-content).

## Properties

#### Properties

| Property | Description |
| --- | --- |
| type \* | Value must be set to reference. |
| name \* | The field name. This will be the key in the data record. |
| to \* | An array of objects containing a type property that points to the document type that can be referenced. For example: \[{type: 'person'}] |
| title | A human-readable label for the field. |
| description | A short description visible to editors that describes how to use the field. |
| weak | If set to true, the reference will be made weak. This allows references to point to documents that may or may not exist, such as a document that has not yet been published or one that has been deleted. Defaults to false. |
| hidden | If set to true, this field will be hidden in the studio. You can return a callback function to use this as a conditional field. Defaults to false. |
| readOnly | If set to true, this field will be readOnly in the studio. You can return a callback function to use this as a conditional field. Defaults to false. |
| initialValue | The initial value that will be used when creating new values from this type. Can be a literal value or a resolver function that returns the initial value or a promise that resolves to the initial value. |
| deprecated | Marks a field as deprecated. Requires a single reason property that displays a user-facing message to explain the deprecation. When used with GraphQL, this is translated to a @deprecated directive. Example: {reason: 'no longer used'} |

## Options

#### Properties

| Property | Description |
| --- | --- |
| disableNew | Disables inline creation of new documents from the references field. Defaults to false. |
| creationTypeFilter | A callback function that dynamically filters which document types can be created inline from the reference field. The function receives an object containing the current document and an array of the types defined in the to property, and should return a filtered array of types.

The callback is invoked with ({document, parent, parentPath}, toTypes) where document is the current document being edited, and toTypes is an array of type objects from the to property. Return a filtered array to restrict creation options, or return an empty array to hide the create button entirely (equivalent to disableNew: true).

Note: This only affects which types appear in the create menu. It does not restrict which existing documents can be referenced. Use the filter option to constrain referenceable documents. |
| filter | Additional GROQ-filter to use when searching target documents. The filter will apply to the already existing type defined in to.

If a function is provided, it is called with an object containing document, parent, and parentPath properties as well as a getClient() method. It should return an object containing filter and params. This can optionally be async and return a promise that resolves this object.

Note: The filter only constrains the list of documents returned at the time you search. It does not guarantee that the referenced document will always match the filter provided. |
| filterParams | Object parameters for the GROQ-filter specified in filter. |
| sort | An array of objects to aid in sorting the available reference results, each with a direction and field property. For example: \[{ direction: "asc", field: "title" }]. |

## Validation

#### Properties

| Property | Description |
| --- | --- |
| required() | Ensures that this field exists |
| custom(fn) | Creates a custom validation rule. |

## Default reference

Define the movie's `director` as a reference to a person:

Input

```javascript
{
  name: 'movie',
  type: 'object',
  fields: [
    {
      title: 'Director',
      name: 'director',
      type: 'reference',
      to: [{type: 'person'}]
    }
  ]
}
```

Response

```json
{
  "_type": "reference",
  "_ref": "ffda9bed-b959-4100-abeb-9f1e241e9445" /* This could be the id of Jessica Chastain */
}
```

## Weak reference

Define the screening's `movie` as a weak reference to a movie, thereby allowing the movie to be deleted without deleting the screening first:

Input

```javascript
{
  name: 'screening',
  type: 'document',
  fields: [
    {
      name: 'movie',
      title: 'Movie',
      type: 'reference',
      weak: true,
      to: [{type: 'movie'}],
      description: 'Which movie are we screening'
    },
  ]
}
```

Response

```json
{
  "_type": "reference",
  "_ref": "93f3af18-337a-4df7-a8de-fbaa6609fd0a" /* Movie id */
  "_weak": true
}
```

## Reference  multiple types

The `directors` field is an array which can contain both `person` and `bovinae` (in the rare occasion a cow would direct a movie) references:

Input

```javascript
{
  title: 'Directors',
  name: 'directors',
  type: 'array',
  of: [
    {
      type: 'reference',
      to: [
        {type: 'person'},
        {type: 'bovinae'}
      ]
    }
  ]
}
```

Response

```json
[
  {
    "_type": "reference",
    /* this could be the id of Yvonne, the escaped cow */
    "_ref": "9b711031-3744-47ab-9bb7-1bceb177d0d0"
  },
  {
    "_type": "reference",
    /* this could be the id of Matt Damon */
    "_ref": "ffda9bed-b959-4100-abeb-9f1e241e9445"
  }
]
```

## Additional static filter

If providing a target schema type is not enough to provide a meaningful set of search results, you may want to further constrain the search query:

Input

```javascript
{
  title: 'Director',
  name: 'director',
  type: 'reference',
  to: [{type: 'person'}],
  options: {
    filter: 'role == $role',
    filterParams: {role: 'director'}
  }
}
```

Response

```json
{
  "_type": "reference",
   /* this could be the id of some director */
  "_ref": "9b711031-3744-47ab-9bb7-1bceb177d0d0"
},

```

## Additional dynamic filter

If you want to further constrain the search result, but need properties from the surrounding document or object/array, you can use the function form for `filter`:

Input

```javascript
{
  title: 'Director',
  name: 'director',
  type: 'reference',
  to: [{type: 'person'}],
  options: {
    filter: ({document}) => {
      // Always make sure to check for document properties
      // before attempting to use them
      if (!document.releaseYear) {
        return {
          filter: 'role == $role',
          params: {role: 'director'}
        }
      }
      
      return {
        filter: 'role == $role && birthYear >= $minYear',
        params: {
          role: 'director',
          minYear: document.releaseYear
        }
      }
    }
  }
}
```

Response

```json
{
  "_type": "reference",
   /* this could be the id of some director,
    * born after the movie was released */
  "_ref": "9b711031-3744-47ab-9bb7-1bceb177d0d0"
}
```

## Additional async filter

If you want to constrain your filter based on factors available elsewhere in your content lake, you can specify your filter as an asynchronous function.

Input

```javascript
{ 
  // Somewhat contrived example that will make the reference field accept any document of a valid type except the most recently published
  name: 'personRef',
  type: 'reference',
  to: [{type: 'director'}, {type: 'actor'}, {type: 'producer'}],
  options: {
    filter: async ({getClient}) => {
      const client = getClient({apiVersion: '2023-01-01'})
      const latestPersonId = await client.fetch(
        '*[title in ["director", "actor", "producer"] && _id in path("*")] | order(_createdAt desc) [0]._id'
      )
      return {
        filter: '_id != $latestPersonId',
        params: {latestPersonId: latestPersonId},
      }
    },
  },
}
```

Response

```json
{
  "_type": "reference",
   /* this could be the id of some director, actor, or producer */
  "_ref": "9b711031-3744-47ab-9bb7-1bceb177d0d0"
}
```

## Disable new document creation

If you wish to disable the inline creation of new document from the reference field. This is done by setting the `disableNew` option to `true`.

```javascript
{
  title: 'Director',
  name: 'director',
  type: 'reference',
  to: [{type: 'person'}],
  options: {
    disableNew: true,
  }
}
```

## Filter creation types dynamically

When a reference field can point to multiple document types, you may want to control which types can be created inline based on the current document's data. The `creationTypeFilter` option accepts a callback function that receives the current `document` and returns a filtered list of types.

```javascript
defineField({
  name: 'participant',
  title: 'Individual or team participant',
  type: 'reference',
  to: [{type: 'individual'}, {type: 'team'}],
  options: {
    creationTypeFilter: ({document}, toTypes) => {
      if (document.participantType === 'individual') {
        return toTypes.filter((t) => t.type === 'individual')
      }
      if (document.participantType === 'team') {
        return toTypes.filter((t) => t.type === 'team')
      }
      return toTypes
    },
  },
})
```

If `creationTypeFilter` returns an empty array, the create button will be hidden from the reference field. This produces the same behavior as setting `disableNew: true`.

## Nonexistent reference

Sometimes the reference field may show an error message like `<nonexistent reference>`. This usually happens when creating documents with a client library and can mean one of two things:

- The document with the ID you are referencing does not exist
- The field does not allow references to the document type of the document ID you tried to reference

## Create reference programmatically

If you want to create a reference to another document when using our APIs, you need to know the ID of the document you want to create a reference to. Then you need to add that to an object with the following form:

```json
{
  _type: 'reference',
  _ref: 'id-of-reference-document'
}
```

Here's an example using the [Javascript client](https://www.sanity.io/docs/js-client):

```javascript
import {createClient} from '@sanity/client'

export const client = createClient({
  projectId: 'your-project-id',
  dataset: 'your-dataset-name',
  useCdn: true,
  apiVersion: '2023-05-03',
  token: process.env.SANITY_SECRET_TOKEN // Must have write access
})

client.create({
  _type: 'book',
  title: 'Some book title',
  author: {
    _type: 'reference',
    _ref: 'id-of-author-document'
  }
})
.then(result => {
  console.log(`Created book with id: ${result._id}`)
})


```

> \[!TIP]
> Always reference the published document \_id
> Whenever referencing another document, you should always used the published—or what will become the published—identifier (\_id).

## Reference unpublished version documents programmatically

> \[!NOTE]
> If you're working with drafts or Content Releases, you shouldn't need to handle this. This technique is only for scenarios where you're creating versions of documents not associated with a release.

When you're programmatically creating version documents that need to reference each other, you may run into the problem where you're trying to reference a document that hasn't been published. Weak references should work as expected, but **strong references require more work**. You incorporate the following into any custom logic that creates and publishes version references.

1. Create the reference with the `_strengthenOnPublish` attribute and `_weak` set to `true`. The contents of the `_strengthenOnPublish` object are primarily used to inform previews in Studio. You can leverage this content further if needed.
2. On publish, find all `_strengthenOnPublish` references and remove it along with the `_weak` property.

**Pre-publish reference**

```json
{
  "_id": "123456",
  "_type": "book",
  "author": {
    "_type": "reference",
    "_ref": "ref-id-of-author",
    "_weak": true,
    "_strengthenOnPublish": {
      "type": "author",
      "template": {
        "id": "author"
      }
    }
  }
}
```

**Post-publish reference**

```json
{
  "_id": "123456",
  "_type": "book",
  "author": {
    "_type": "reference",
    "_ref": "ref-id-of-author",
  }
}
```

## Writing GROQ queries for references

References by default are **bi-directional** and can be queried from either side of their relationship. For a movie that has an actors array referencing multiple `person` documents, we can join the person data to the `movie` by dereferencing its data, but we can also query all movies associated with a `person`.

### Join the actor data onto movie data

```groq
*[_type == "movie"] {
  ...,
  "actors": actors[]{
    ...
    person->
  }
}
```

### Get all movies for a person

```groq
*[_type=="person"]{
  name,
  "relatedMovies": *[_type=='movie' && references(^._id)]{ 
  	title,
  	slug,
  	releaseDate
	}
}
```
