# Schema: Lift anonymous object types

A common pattern is to have objects embedded within your document, which allows for a logical grouping of fields. For instance, a `person` might have an `address` which consists of many fields (street name, zip, country etc).

One way of doing this is to create an inline object for the field:

```javascript
export default {
  name: 'person',
  title: 'Person',
  type: 'object',
  fields: [
    {
      name: 'name',
      title: 'Name',
      type: 'string'
    },
    {
      name: 'address',
      title: 'Address',
      type: 'object',
      fields: [
        {name: 'street', type: 'string', title: 'Street name'},
        {name: 'zip', type: 'string', title: 'Zip code'}
      ]
    }
  ]
}

```

While this works for most cases, it can often be smart (and sometimes necessary) to "lift" this type up and define it as a global schema type.

Doing so can often lead to a more thought-out and future proof data model, since you will often rethink the fields in a global context - *"how can I define this type so it can be reused for both businesses and person records?"*

It can also help you reason about the same records when consuming the API from an application - perhaps you'll want to mirror the schema in TypeScript definitions or Go structs, or create a GraphQL API.

To lift a type, simply create a new type for it in the same way you would with a *person* type and import it into your schema:

```javascript
export default {
  name: 'address',
  title: 'Address',
  type: 'object',
  fields: [
    {name: 'street', type: 'string', title: 'Street name'},
    {name: 'zip', type: 'string', title: 'Zip code'}
  ]
}

```

Then, in your person model, set `address` as the *type* for the address field:

```javascript
export default {
  name: 'person',
  title: 'Person',
  type: 'object',
  fields: [
    {
      name: 'name',
      title: 'Name',
      type: 'string'
    },
    {
      name: 'address',
      title: 'Address',
      type: 'address'
    }
  ]
}

```

# Reference type has a invalid value for property "to"

All reference types must define what type of documents they may refer *to*. The "`to`" property must be an array of objects that describes the type of a valid reference. Each entry in `to`, must have a `type`-property which must be the name of a valid schema type.

```javascript
{
  type: 'reference',
  name: 'references',
  to: [ // The "to"-property must be set, and it must be an array of at least one type
    {
      type: 'author', // type is required
      title: 'Author'
    },
    {
      type: 'book',
      title: 'Book'
    }
  ]
}
```

### To-types must be unique, or named

In order to know which type description a reference value belongs to, you can not add multiple entries to of with the same type, unless you also give them a *name* to tell them apart. This is therefore not allowed:

```javascript
{
  type: 'reference',
  name: 'authorReference',
  to: [
    {
      type: 'author',
      title: 'Author'
    },
    {
      type: 'author', // 💥 ERROR will not be able to tell reference values apart
      title: 'Another author'
    }
  ]
}
```

Instead, you can *name* the reference type. This will work:

```javascript
{
  type: 'reference',
  name: 'authorReference',
  to: [
    {
      type: 'author',
      title: 'Author'
    },
    {
      type: 'author',
      name: 'anotherAuthorReference', // all good
      title: 'Another author'
    }
  ]
}
```

The value of this definition will have its `_type` set to either `author` or `anotherAuthor`, depending on which of the type were selected when the value was set  e.g.:

```json
{"_type": "reference", "_ref": "329e893ewi"}
```

Or:

```json
{"_type": "anotherAuthorReference", "_ref": "293e90iok3elwq213er"}
```

# Incorrect location for reference options

The reference field allows you to define options for the input component. These options should be defined under the `options` key.

If you are encountering this error, it usually means that you've placed options on the root of the reference type instead of in the `options` object:

```javascript
export default {
  name: 'blogPost',
  type: 'document',
  fields: [
    // ... your other schema fields ...
    {
      name: 'author',
      type: 'reference',
      to: [{type: 'person'}],
      
      // INCORRECT:
      filter: 'age > 30',
      
      // CORRECT:
      options: {
        filter: 'age > 30'
      }
    }
  ]
}
```

# Invalid part syntax

How parts are defined also defines how they behave.

An **implementable part** is defined by setting a `name` and a `description`. It should *not* have a path set. If you find yourself wanting to set a path, you probably want to do the following:

```json
[
  {
    "name": "part:foo/bar",
    "description": "Some really good description"
  },
  {
    "implements": "part:foo/bar",
    "path": "./some/part.js"
  }
]

```

A **non-overridable** part can be defined by setting a `name` and a `path` in the same declaration:

```json
{
  "name": "part:@sanity/base/schema",
  "path": "./some/schema.js"
}
```

# Asset metadata field

An asset field (*image* or *file*) may have a `metadata` option. This option defines which metadata the server should attempt to extract when receiving the uploaded file and populate into the assets metadata document. This field must be an array of strings:

```javascript
{
  name: 'coverPhoto',
  title: 'Cover photo',
  type: 'image',
  options: {
    metadata: ['location', 'palette']
  }
}
```

The above example will attempt to extract palette and location data for any image uploaded to this field, and populate the metadata on the *asset*. For instance, if this field is part of a document of type `article`, you could run a query such as the following:

```text
*[_type == "article"] {
  ...,
  "coverPhoto": coverPhoto.asset->{
    url,
    metadata {
      location,
      palette {
        dominant {
          background,
          foreground
        }
      }
    }
  }
}
```

Which might return something along the lines of:

```json
[
  {
    "_id": "some-blog-post",
    "_type": "article",
    "title": "Some blog post",
    "coverPhoto": {
      "url": "https://cdn.sanity.io/images/foobar/test/aa1N73Zv14r7pYsbUdXl-4288x2848.jpg",
      "metadata": {
        "location": {
          "lat": 59.924104,
          "lon": 10.758437
        },
        "palette": {
          "dominant": {
            "background": "#99b8cd",
            "foreground": "#000"
          }
        }
      }
    }
  }
]
```

# Warning: userStore.currentUser is deprecated

The `userStore.currentUser` method has been deprecated in favor of `userStore.me` which is an observable stream of the current logged in user or `null` if the user is logged out.

Where the `userStore.currentUser` observable stream emitted a "snapshot" event object with the user object at the `user` property every time user state changed, the `userStore.me` emits the user object (or null if logged out) as you would see it from the `/users/me` API endpoint.

Example of how to migrate existing code currently using `userStore.currentUser` to instead use `userStore.me`:

## Before

```javascript
userStore.currentUser.subscribe(event => {
  console.log('Current user is:', event.user)
})
```

## After

```javascript
userStore.me.subscribe(user => {
  console.log('Current user is:', user)
})

```
