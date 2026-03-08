# How to migrate from blocks spans to block children

We are resolving a few issues with the way block content is structured. Unfortunately, this is a breaking change and will thus require a migration. There are a couple of steps involved:

### Update your frontend modules to support both the new and the old format

There are a couple of official ways of rendering block content - if you have a Javascript app and are using [block-content-to-react](https://github.com/sanity-io/block-content-to-react) or[ block-content-to-html](https://github.com/sanity-io/block-content-to-html-js), please upgrade those to the latest versions. If you are using the [PHP client](https://github.com/sanity-io/sanity-php), update that to the latest version.

### Update schema

Unless you have customized the [block](https://www.sanity.io/docs/block-type) type within your schema, you shouldn't have to do anything. However if you have customized it with allowed marks, or special rules for the span, you must ensure that the block type schema definition has the following new structure:

See the updated [block](https://www.sanity.io/docs/block-type) and [span](https://www.sanity.io/docs/span-type) documentation for more information.

### Migrate your data

All documents containing one or more `block` fields must be migrated to the new structure. We have written a [script](https://github.com/sanity-io/migrations/blob/master/block-spans-to-children.js) that does this automatically for you. This can be executed with the command line tool `npx` , which has been shipping with `npm` from version `5.2.0`:

```markdown
cd <your sanity studio project folder>
npx -p sanity-io/migrations block-spans-to-children
```

### Update your studio

Run sanity upgrade in your studio to get the latest modules which includes a new version of the block editor. Running this new version without first migrating your data will yield a warning telling you that data needs migration.

### Technical details

Note: This isn't mandatory reading unless you want to understand the changes to the data structure.

Previously, blocks had a key named `spans` which we're renaming to `children`. This is more in line with how most people think of nodes within  their data model. We're also changing the way rich marks are represented. Instead of simply being attributes on each child, they are now pointers to a mark definition on a per-block basis. This helps to prevent duplication of data and also makes it easier to nest nodes in trees.

Old structure:

```json
{
  "_key": "d3bf4f7519f3",
  "_type": "block",
  "style": "normal",
  "spans": [
    {"_type": "span", "marks": ["em"], "text": "Headless CMS?"},
    {"_type": "span", "marks": [], "text": " Check out "},
    {"_type": "span", "marks": [], "text": "Sanity", "link": {"href": "https://sanity.io"}},
    {"_type": "span", "marks": [], "text": ", it's pretty neat"}
  ]
}

```

New structure:

```json
{
  "_key": "d3bf4f7519f3",
  "_type": "block",
  "style": "normal",
  "markDefs": [{
    "_type": "link",
    "_key": "someKey",
    "href": "https://sanity.io"
  }],
  "children": [
    {"_type": "span", "marks": ["em"], "text": "Headless CMS?"},
    {"_type": "span", "marks": [], "text": " Check out "},
    {"_type": "span", "marks": ["someKey"], "text": "Sanity"},
    {"_type": "span", "marks": [], "text": ", it's pretty neat"}
  ]
}

```

# Array type cannot contain array member

All array types must define what kind of items they may contain. The "`of`" property must be an array of objects that describes the type of a valid item. Each entry in `of`, must have a `type`-property which must be the name of a valid schema type that is *not* an array - Sanity currently does not support arrays inside of arrays, also known as multidimensional arrays.

A common use case for multidimensional arrays is when you want to represent rows and columns. One possible solution in this example is to wrap each row in an object type:

```javascript
export default createSchema({
  name: 'default',
  types: schemaTypes.concat([
    {
      name: 'row',
      title: 'Row',
      type: 'object',
      fields: [
        {
          name: 'columns',
          title: 'Columns',
          type: 'array',
          of: [{type: 'string'}]
        }
      ]
    },
    {
      name: 'someDocumentType',
      title: 'Some document type',
      type: 'document',
      fields: [
        {
          name: 'rows',
          title: 'Rows',
          type: 'array',
          of: [{type: 'row'}]
        }
      ]
    }
  ])
})
      
```

# Using tokens in the browser

Using a Sanity token in JavaScript that is consumed by a browser is usually a really bad idea unless you take extra precautions to protect it from unauthorized users.

Please make sure to read about [how to keep your data safe](https://www.sanity.io/docs/content-lake/keeping-your-data-safe).

If you are **absolutely** sure you know what you are doing and have taken steps to protect the access token from leaking, you can disable the warning in the sanity client by setting the option `ignoreBrowserTokenWarning` to `true`, for example:

```javascript
const sanityClient = require('@sanity/client');

const client = sanityClient({
  dataset: '<dataset name>',
  token: '<secret token>',
  ignoreBrowserTokenWarning: true
});
```

# GraphQL

GraphQL is now out of beta. [Go to documentation](https://www.sanity.io/docs/content-lake/graphql).
