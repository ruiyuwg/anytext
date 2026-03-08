# Cross Dataset Reference

Cross Dataset References allow you to connect documents across datasets. While similar to the [reference type](https://www.sanity.io/docs/reference-type), they have their own, distinct schema type of `crossDatasetReference` and the two can not be used interchangeably.

To learn about how to set up your datasets for cross-dataset referencing, please refer to [the introduction article Cross Dataset References](https://www.sanity.io/docs/studio/cross-dataset-references).

*This is a paid feature, available on the Enterprise plan.*

> \[!WARNING]
> Gotcha
> Cross dataset references can only be dereferenced using GROQ queries. Dereferencing through GraphQL endpoints is not currently supported.

## Properties

#### Properties

| Property | Description |
| --- | --- |
| type \* | Value must be set to crossDatasetReference. |

#### Properties

| Property | Description |
| --- | --- |
| name \* | The field name. This will be the key in the data record. |

#### Properties

| Property | Description |
| --- | --- |
| to \* | Must contain an array of objects that name all the types from the referenced dataset that should be available in the referencing studio. type and preview are required properties. icon and title are optional properties. For example, \[{type: 'someTypeFromAnotherDataset', preview: { select: { title: 'title' }}}]. See more examples below.

Note: While you may refer to several types in your referenced dataset in the to array, you are limited to types from a single dataset for each field. |

#### Properties

| Property | Description |
| --- | --- |
| dataset \* | The name of the referenced dataset. |

#### Properties

| Property | Description |
| --- | --- |
| studioUrl | A function that is invoked with the type and id of the referenced document, and returns a string that can be used to construct a URL directly to the item referenced in its studio environment.

Example:

studioUrl: ({ type, id }) => `https://<your-studio-url>/desk/intent/edit/id=${id};type=${type}/` |

#### Properties

| Property | Description |
| --- | --- |
| weak | Default false. If set to true the reference will be made weak. This allows references to point at documents that may or may not exist, such as a document that has not yet been published or a document that has been deleted (or indeed an entirely imagined document). |

#### Properties

| Property | Description |
| --- | --- |
| title | Human readable label for the field. |

#### Properties

| Property | Description |
| --- | --- |
| hidden | If set to true, this field will be hidden in the studio. You can also return a callback function to use it as a conditional field. |

#### Properties

| Property | Description |
| --- | --- |
| readOnly | If set to true, this field will not be editable in the content studio. You can also return a callback function to use it as a conditional field. |

#### Properties

| Property | Description |
| --- | --- |
| description | Short description to editors how the field is to be used. |

#### Properties

| Property | Description |
| --- | --- |
| initialValue | The initial value that will be used when creating new values from this type. Can be either the literal value or a resolver function that returns either the literal value or a promise that resolves to the initial value. |

#### Properties

| Property | Description |
| --- | --- |
| deprecated | Marks a field or document type as deprecated in the studio interface and displays a user-defined message defined by the single required reason property.

If you deploy a GraphQL API schema, this property will translated into the @deprecated directive. |

## Options

#### Properties

| Property | Description |
| --- | --- |
| filter | Additional GROQ-filter to use when searching for target documents. The filter will be added to the already existing type name clause.

If a function is provided, it is called with an object containing document, parent and parentPath properties, and should return an object containing filter and params. As of v2.4.0 this function can optionally be async and return a Promise that resolves to an object containing filter and params.

Note: The filter only constrains the list of documents returned at the time you search. It does not guarantee that the referenced document will always match the filter provided. |

#### Properties

| Property | Description |
| --- | --- |
| filterParams | Object of parameters for the GROQ-filter specified in filter. |

## Validation

#### Properties

| Property | Description |
| --- | --- |
| required() | Ensures that this field exists. |

#### Properties

| Property | Description |
| --- | --- |
| custom(fn) | Creates a custom validation rule. |

## Cross Dataset Reference

A minimal example of a `crossDatasetReference` field:

Input

```javascript
{
  title: `Person in another dataset"`,
  name: 'personReference',
  type: 'crossDatasetReference',
  dataset: 'production',
  to: [
    {
      type: 'person',
      preview: {
        select: {
          title: 'name',
          media: 'image',
        },
      },
    },
  ],
}
```

Response

```json
{
  "_type": "crossDatasetReference",
  "_ref": "person_andrew-stanton",
  "_dataset": "production"
}
```

## Weak reference

Defining the `crossDatasetReference` as `weak`, will unblock publishing of documents that has a (cross-dataset) reference to a non-existing document.

Input

```javascript
{
  title: `Person in another dataset"`,
  name: 'personReference',
  type: 'crossDatasetReference',
  dataset: 'production',
  weak: true,
  to: [
    {
      type: 'person',
      preview: {
        select: {
          title: 'name',
          media: 'image',
        },
      },
    },
  ],
}
```

Response

```json
{
  "_type": "crossDatasetReference",
  "_ref": "person_andrew-stanton",
  "_dataset": "production",
  "_weak": true,
}
```

## Reference  multiple types

The `directors` field is an array that can contain both `person` and `bovinae` (in the rare occasion a cow would direct a movie) references:

Input

```javascript
{
  title: `Person or cow in another dataset"`,
  name: 'personOrCowReference',
  type: 'crossDatasetReference',
  dataset: 'production',
  to: [
    {
      type: 'person',
      preview: {
        select: {
          title: 'name',
          media: 'image',
        },
      },
    },
    {
      type: 'bovinae',
      preview: {
        select: {
          title: 'name',
          media: 'avatar',
        },
      },
    },
  ],
}
```

Response

```json
[
  {
    "_type": "crossDatasetReference",
    "_ref": "person_andrew-stanton",
    "_dataset": "production"
  },
  {
    "_type": "crossDatasetReference",
    "_ref": "bovinae_ferdinand-bull",
    "_dataset": "production"
  }
]
```

## Additional static filter

If providing a target schema type is not enough to provide a meaningful set of search results, you may want to further constrain the search query:

Input

```javascript
{
  title: `Person in another dataset"`,
  name: 'personReference',
  type: 'crossDatasetReference',
  dataset: 'production',
  options: {
    filter: 'role == $role',
    filterParams: {role: 'director'}
  },
  to: [
    {
      type: 'person',
      preview: {
        select: {
          title: 'name',
          media: 'image',
        },
      },
    },
  ],
}
```

Response

```json
{
  "_type": "crossDatasetReference",
  "_ref": "person_steven-spielberg",
  "_dataset": "production",
}
```

## Additional dynamic filter

If you want to further constrain the search result, but need properties from the surrounding document or object/array, you can use the function form for `filter`:

Input

```javascript
{
  title: `Person in another dataset"`,
  name: 'personReference',
  type: 'crossDatasetReference',
  dataset: 'production',
  to: [
    {
      type: 'person',
      preview: {
        select: {
          title: 'name',
          media: 'image',
        },
      },
    },
  ],
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
```

Response

```json
{
  "_type": "crossDatasetReference",
  "_ref": "person_steven-spielberg",
  "_dataset": "production",
}
```

## Nonexistent reference

Sometimes the reference field may show an error message like `<nonexistent reference>`. This usually happens when creating documents with a client library and can mean one of two things:

- The document with the ID you are referencing does not exist
- The field does not allow references to the document type of the document ID you tried to reference
