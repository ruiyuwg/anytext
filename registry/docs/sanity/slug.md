# Slug

![Screenshot of a slug field from Sanity Studio](https://cdn.sanity.io/images/3do82whm/next/2097cb0ab8784b87b95e4e4f092ebe623af7538d-4608x2800.png)

A slug is a unique string (typically a normalized version of title or other representative string), often used as part of a URL. The input form will render an error message if the current slug field is not unique (see note on uniqueness below). See the [SlugDefinition](https://reference.sanity.io/sanity/index/SlugDefinition/) reference for the full type definition.

## Properties

#### Properties

| Property | Description |
| --- | --- |
| type \* | Value must be set to slug. |
| name \* | Required. The field name. This will be the key in the data record. |
| title | Human readable label for the field. |
| hidden | If set to true, this field will be hidden in the studio. You can also return a callback function to use it as a conditional field. |
| readOnly | If set to true, this field will not be editable in the content studio. You can also return a callback function to use it as a conditional field. |
| description | Short description to editors how the field is to be used. |
| initialValue | The initial value used when creating new values from this type. Can be either a literal value or a resolver function that returns either a literal value or a promise resolving to the initial value. |
| deprecated | Marks a field or document type as deprecated in the studio interface and displays a user-defined message defined by the single required reason property.

If you deploy a GraphQL API schema, this property will translated into the @deprecated directive. |
| icon | Supply a custom icon for this field. See icons documentation for more information. |
| components | Lets you provide custom components to override the studio defaults in various contexts. |

## Options ([SlugOptions](https://reference.sanity.io/sanity/index/SlugOptions/))

#### Properties

| Property | Description |
| --- | --- |
| source | The name of the field which the slug value is derived from. If a string is provided, it should match the name of the source field in your schema. If a function is provided, the source function is called with two parameters: doc (object - the current document) and options (object - with parent and parentPath keys for easy access to sibling fields). |
| maxLength | Maximum number of characters the slug may contain when generating it from a source (like a title field) with the default slugify function. Defaults to 200. If you include your own slugify function, or manually enter your slug this option will be ignored. |
| slugify | Supply a custom override function which handles string normalization. slugify is called with three parameters: input (string), type (object - schema type) and context (object). If slugify is set, the maxLength option is ignored. |
| isUnique | Supply a custom function which checks whether or not the slug is unique. Receives the proposed slug as the first argument and an options object. |
| disableArrayWarning | If set to `true`, disables the warning shown when a slug source field is inside an array. |

## Validation ([SlugRule](https://reference.sanity.io/sanity/index/SlugRule/))

#### Properties

| Property | Description |
| --- | --- |
| required() | Ensures that this field exists. |
| custom(fn) | Creates a custom validation rule. |
| error(message) | Sets a custom error message for the preceding validation rule. |
| warning(message) | Sets a custom warning message for the preceding validation rule. Warnings do not prevent publishing. |
| info(message) | Sets a custom info message for the preceding validation rule. Info messages are purely informational and do not prevent publishing. |
| valueOfField(path) | Gets the value of a sibling field to use in validation. Useful for creating validation rules that depend on the value of another field. |

By *default*, the slug input will check for uniqueness based on the document type and the path to the slug field. For instance, a document of type `article` and a document of type `product` can have the same slug. You can customize this behavior by defining an `isUnique` function in the field options.

The value of the slug field is stored on the `current` property.

Input

```javascript
{
  title: 'Slug',
  name: 'slug',
  type: 'slug',
  options: {
    source: 'title',
    maxLength: 200, // will be ignored if slugify is set
    slugify: input => input
                         .toLowerCase()
                         .replace(/\s+/g, '-')
                         .slice(0, 200)
  }
}
```

Response

```json
{
  "_type": "slug",
  "current": "this-is-the-title"
}
```

### Custom slugify function

```javascript
import slugify from 'some-off-the-shelf-slugifier'

async function myAsyncSlugifier(input, schemaType, context) {
  const slug = slugify(input)
  const {getClient} = context
  const client = getClient({apiVersion: '2022-12-07'})
  const query = 'count(*[_type=="movie" && slug.current == $slug]{_id})'
  const params = {slug: slug}
  return client.fetch(query, params).then((count) => {
    console.log('Movies with identical slug', count)
    return `${slug}-${count + 1}`
  })
  return slug
}

//…
// schema field
{
  title: 'Slug',
  name: 'slug',
  type: 'slug',
  options: {
    source: 'title',
    slugify: myAsyncSlugifier
  }
}
```

#### Custom isUnique function

By default the `isUnique` function checks for uniqueness across **all documents of the same type**. Here's an example of an [isUnique function](https://reference.sanity.io/sanity/index/SlugIsUniqueValidator/) that checks for uniqueness across **all documents in your dataset**:

**isUniqueAcrossAllDocuments.ts**

```typescript
import { getPublishedId } from 'sanity';

export async function isUniqueAcrossAllDocuments(
  slug,
  context
) {
  const { document, getClient } = context;
  const client = getClient({ apiVersion: '2025-02-19' });
  const id = document?._id;

  if (!id || !slug?.current) {
    return true;
  }

  const publishedId = getPublishedId(id);

  const params = {
    published: publishedId,
    slug: slug.current,
  };

  const query = groq`!defined(*[
    !sanity::versionOf($published) &&
    slug.current == $slug
  ][0]._id)`;

  const isUnique = await client.fetch(query, params);
  return isUnique || false;
}
```

**post.ts**

```typescript
import {isUniqueAcrossAllDocuments} from '../lib/isUniqueAcrossAllDocuments'

export default {
  name: 'post',
  type: 'document',
  title: 'Post',
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Title'
    },
    {
      name: 'slug',
      type: 'slug',
      title: 'Slug',
      options: {
        isUnique: isUniqueAcrossAllDocuments
      }
    }
  ]
}
```

> \[!NOTE]
> Keep in mind that unlike other validator functions that can pass a message, isUnique expects a boolean response.

#### Custom source function

It's also possible to provide the source as a function, that will be called with a first argument containing the whole document, and a second containing a context object.

```javascript
{
  title: 'Slug',
  name: 'slug',
  type: 'slug',
  options: {
    // include category if dataset is production
    source: (doc, context) => context.dataset === 'production' ? `${doc.category}-${doc.title}` : doc.title
  }
}
```

The source function also receives an `options` object containing the parent object/array, if any. It can be useful if you want to derive the slug from a sibling field instead of a property on the document root:

```javascript
{
  title: 'Slug',
  name: 'slug',
  type: 'slug',
  options: {
    source: (doc, context) => context.parent.title
  }
}
```

To query for a document with a given slug, make sure you put the constraint on the `current` key:

```groq
*[_type == "your-document-type" && slugFieldName.current == "your-slug"]
```
