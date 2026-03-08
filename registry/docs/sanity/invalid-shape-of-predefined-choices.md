# Invalid shape of predefined choices

As a general rule, the list of possible choices for array types must only contain values of valid item types for the array.

```javascript
{
  type: 'array',
  name: 'colors'
  of: [
    {
      type: 'object',
      name: 'webColor',
      fields: [
        {name: 'name', type: 'string'},
        {name: 'hex', type: 'string'}
      ]
    },
    {
      type: 'object',
      name: 'rgbaColor',
      fields: [
        {name: 'name', type: 'string'},
        {name: 'r', type: 'number'},
        {name: 'g', type: 'number'},
        {name: 'b', type: 'number'},
        {name: 'a', type: 'number'},
      ]
    },
  ],

  options: {
    list: [
      // valid
      {_type: 'webColor', hex: '438D80', name: 'Sea Turtle Green'},

      // valid
      {_type: 'rgbaColor', r: 161, g: 201, b: 53, name: 'Salad Green'},


      // invalid (as of v3), object values can not be given a title
      {title: 'Sea Turtle Green', value: {_type: 'webColor', hex: 'C88141', name: 'Tiger Orange'}},

      // invalid, missing _type
      {hex: '438D80', name: 'Sea Turtle Green'},

      // invalid: hslaColor objects not valid for array
      {_type: 'hslaColor' h: 0.02, s: 0.93, l: 0.71, name: 'Salmon'},
      
    ]
  }
}
```

A notable exception here is choices for primitive values, which can be given a display title by providing an object with `title` and `value`, where value is of a valid item type:

```javascript
{
  type: 'array',
  name: 'numbersAndAnimals'
  of: [{type: 'string'}, {type: 'number'}],

  options: {
    list: [
      // valid: this array can contain strings
      'sheep',

      // valid: this array can contain numbers
      44,

      // valid: array can contain strings and primitive values can be given a display-title
      {title: 'Cat', value: 'cat'},

      // valid: array can contain numbers and primitive values can be given a display-title
      {title: 'Hundred', value: 100}
      
      // invalid: array can't contain booleans
      true,

    ]
  }
}
```

# JS Client: Promise Polyfill

The Sanity JavaScript client uses `Promises` to handle asyncronous requests. Some browsers (such as Internet Explorer) does not support this interface by default, and thus requires a so called *polyfill* for it to work.

There are many polyfills to choose from - we recommend something that comforms to the [Promises/A+ specification](https://promisesaplus.com/), such as the [es6-promise](https://www.npmjs.com/package/es6-promise) module. The readme for that module includes various ways to use it - the most important thing to note is that you should make sure the polyfill is applied before the Sanity client is instantiated.

Here's an example if you are using a bundler such as webpack, browserify or parcel:

```javascript
require('es6-promise/auto')
const sanityClient = require('@sanity/client')

module.exports = sanityClient({
  projectId: '...',
  dataset: '...',
  useCdn: true
})

```

(Make sure es6-promise is added as a dependency for your project.)

# Introducing the document type

In version [0.118.0](https://github.com/sanity-io/sanity/releases/tag/v0.118.0) we introduced a new type `document`. This is the type for any object that you would like to store as documents in the datastore. Previously, any object type defined in your schema could be turned into a document, but now you must define these as documents instead. Only document types will appear in the desk tool sidebar.

NOTE: You should still use `type: 'object'` for the schema types that is reused on fields in your schema types (e.g. things like `localeString` and other types that you would never create standalone documents of)

## What should I do?

This is not a breaking change, so everything will continue to work as before. That is, **until** the moment you decide to use the `document` type. If you add a document type to your schema, you should also have to change the type of all the top-level object types in your schema. E.g. if your schema was:

```javascript
export createSchema({
  name: 'mySchema',
  types: [
    {
      name: 'book',
      type: 'object',
      fields: [
        {name: 'title', type: 'string'}
      ]
    }
    //...
  ]
})
```

You should change this to:

```javascript
export createSchema({
  name: 'mySchema',
  types: [
    {
      name: 'book',
      type: 'document',
      fields: [
        {name: 'title', type: 'string'}
      ]
    }
    //...
  ]
})
```

And do this for all types in your schema that you would like to be stored as documents. Note: you may still want re-usable object types at top-level in your schema, but these should should stay with type objects. In that case they will not be listed in the sidebar.

Note: The introduction of the document type makes the `hiddenTypes` config in the  `config/@sanity/data-aspects.json` config file obsolete, and you should remove it entirely.

# Unable to get a ref to an input component

This happens when the editor is unable to create a [ref](https://reactjs.org/docs/glossary.html#refs) to an input component. This is likely because of one of the following reasons:

- The input component is wrapped in a \*higher order component \*(HOC), which does not delegate a `focus()` method to the component it wraps. [See this guide on how to forward a ref inside a higher order component](https://reactjs.org/docs/forwarding-refs.html#forwarding-refs-in-higher-order-components).
- The input component is a [function component](https://reactjs.org/docs/components-and-props.html#function-and-class-components). Since function components cannot be given refs, the input component must be wrapped using [React.forwardRef](https://reactjs.org/docs/react-api.html#reactforwardref) in order to specify which element should receive focus. Note: keep in mind that the forwarded ref must be attached to an element that actually exposes a `.focus()` method.

# Outdated modules

Some of the modules in your Sanity studio is on a version that we no longer support.

Usually, this is related to APIs that have changed and will no longer function when paired with the modules in question. In these cases, things might actually stop working. In other cases, the modules are simply so old that they might stop working when paired with other plugins and functionality in Sanity.

Either way, the upgrade process should be fairly simple:

1. Open up your terminal and find your Sanity studio folder
2. Run `sanity upgrade`. This will check for the latest versions of the modules you have installed, download them and set up any configuration files that might have been added.
3. Run your studio locally with `sanity start` and ensure that things seem to be working as it should.

If you are having trouble upgrading, you can try to ask for help [on Gitter](https://gitter.im/sanity-io/sanity).

# Upgrade studio packages

From time to time, versions of packages Sanity Studio depends on needs to be upgraded. This can be done either by manually entering a new version of the dependency in your studio folder's `package.json`, or by running a command from your command line.

#### Upgrading React

**CLI**

```sh
npm install "react@latest" "react-dom@latest"
```

Note: if you have customizations in your Sanity Studio and are upgrading between major versions of React (e.g. going from version 18 to 19) you may need to  do some adjustments to your React components as well. Please consult the release announcements on the [React blog](https://react.dev/blog) for details on how to migrate to the latest version.

#### Known Sanity Studio version compatibilities

This is a non-exhaustive list of dependencies Sanity Studio is known to work with. Anything outside of these ranges might still work, but we recommend keeping up to date with current versions to get the latest stability and performance improvements.

#### v5.x (upcoming)

- `react@^19.2.2 or higher `
- `react@19.2.2 or higher`
- `styled-components@^6.x`
- `@sanity/ui@^3.x`

#### v4.x

- `react@^18.2.x - react@19.x`
- `react-dom@^18.2.x - react@19.x`
- `styled-components@^6.x`
- `@sanity/ui@^3.x`

#### v3.69.0 -> v3.99.0

- `react@^18.2.x - react@19.x`
- `react-dom@^18.2.x - react@19.x`
- `styled-components@^6.x`
- `@sanity/ui@^2.x`

#### < v3.69.0

- `react@^18.2.x`
- `react-dom@^18.2.x`
- `styled-components@^6.x`
- `@sanity/ui@^2.x`

# Block Content rendering: Image materializing

The image type holds a set of user-defined fields as well as an `asset` field which is a reference to the actual [asset document](https://www.sanity.io/docs/asset-pipeline). Quite often you will need to get ahold of the asset document in order to make decisions based on the size, name, type, or metadata of the image, or to get the full URL to the image.

## Joining the asset document using GROQ

You can join these references when you fetch the document(s) containing a Portable Text field. Let's say you have a document type named `article` which has a `body` field containing an array of blocks. The following query would expand all the `asset` fields within the array:

```json
*[_type == "article"]{
  body[]{
    ..., 
    asset->{
      ...,
      "_key": _id
    }
  }}[0...5]
```

Let's break it down:

- Fetch all documents of type `article`: `*[_type == "article"]`
- For each item in the `body` array: `body[]`
- Return all the properties: `...`
- Make a property called `asset` and let the value be the materialized value of the `asset` property: `"asset" asset->`
- Only return the 5 first documents matched: `[0...5]`

## More information on querying data

Looking to get started working with data from your Sanity data store? Find out [how GROQ queries work](https://www.sanity.io/docs/content-lake/how-queries-work) or dive in with [Sanity's GraphQL interface](https://www.sanity.io/docs/content-lake/graphql).

# Structure: Document schema type required

Certain nodes within the desk structure requires a document schema type to be defined in order to operate.

Setting a schema type can be done by calling the `schemaType()` method:

```javascript
S.document()
  .id('car-editor')
  .schemaType('car')
  .documentId('am-db9')

```

# Parts: Declare vs implement

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

# Incorrect options declaration in reference

The reference field allows you to define options for the input component. These options should be defined under the `options` key and be an object.

If you are encountering this error, it usually means that you've defined an options key which is not an object:

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
      
      // INCORRECT
      options: [{some: 'option'}],
      
      // CORRECT
      options: {
        some: 'option'
      }
    }
  ]
}
```

# Block type cannot be used outside of array

Sanity Studio *currently* only supports using the block type in an array, not as a standalone field.

This will **not** work:

```javascript
{
  name: 'myField',
  title: 'My field',
  type: 'block'
}
```

But **this** will:

```javascript
{
  name: 'myField',
  title: 'My field',
  type: 'array',
  of: [{type: 'block'}]
}
```

# Structure: Node ID required

All nodes within the desk structure has an ID assigned to it. Normally, the ID is assigned automatically based on the title of the item, but some items require a manually assigned ID.

One example of this is the document list item - its ID refers to a specific document ID, and as such it needs to be manually assigned.

Setting an ID can be done by calling the `id()` method:

```javascript
S.documentListItem()
  .id('website-featured-articles')
  .schemaType('article-set')
  .title('Site config')
```

# Structure: List items must be an array

The desk structure list takes an *array* of items. A common mistake is to passing a list of items as arguments instead of an array:

```javascript
// Incorrect:
S.list()
  .title('Content')
  .items(
    S.listItem().title('Foo'),
    S.listItem().title('Bar')
  )

// Correct:
S.list()
  .title('Content')
  .items([
    S.listItem().title('Foo'),
    S.listItem().title('Bar')
  ])

```

# Installing Node.js

Node.js can be described as a tool to develop and run web-servers written in JavaScript ([read more](https://nodejs.org/en/about/)). In order to develop Sanity studios, you must have Node installed on your computer.

The Node people maintain a [comprehensive guide](https://nodejs.org/en/download/package-manager/#macos) to installing Node on whatever OS you may be running.

**Notes on installing Node on macOS**: The guide above mentions several different ways to install Node on macOS. It is our opinion that you should install Node via Homebrew. Follow [this guide](https://brew.sh/) to get Homebrew, then just `brew install node`.

All set? Let's [get started](https://www.sanity.io/docs/getting-started)!

# Structure: Action or intent required

Menu items needs to know what to do when they are selected. This can done by specifying one of to parameters:

- `action` - which is a function called with the parameters set for this menu item
- `intent` - an object containing a `name` and an optional bag of `params`

Certain nodes within the desk structure requires a document ID to operate on.

Setting an action or intent can be done by calling the `action()` or `intent()` methods, respectively:

```javascript
new MenuItemBuilder()
  .title('Open in website')
  .icon(OpenIcon)
  .params({breed: 'schnauzer'})
  .action(params => {
    window.open(`https://mywebsite/breeds/${params.breed}`)
  })

```

# Object type has a invalid value for fields

Documents or object types must define which fields they have. The fields property must be an array of field definitions, where both `name` and `type` are required, and each field having a unique `name`.

Additionally, field names must start with a letter from A-Z, and can can only include A-Z, numbers and underscore. [We recommend using camel case convention for field names](https://www.sanity.io/docs/apis-and-sdks/naming-things).

```javascript
{
  type: 'object',
  name: 'myObject',
  fields: [ // fields must be defined, and it must be an array
    {
      name: 'myField', // field name is required and must be unique
      type: 'string' // field type is required
    },
    // ... 
    {
      name: 'myField', // 💥 ERROR a field named "myField" is already defined on this object
      type: 'string'
    }
  ]
}
```

# `studioHost` and `externalStudioHost` properties deprecated

Your projects are no longer tied to a single Sanity Studio application - you can deploy multiple different studios which could all talk to one or more datasets and projects.

In the past, there were two properties attached to project information APIs that recorded information about the studio for that project, `studioHost` and `metadata.externalStudioHost`. These are no longer guaranteed to be present and does not reflect the full truth of deployed studios/applications for those that deploy multiple studios.

If you have a need to programmatically access a list of your studio deployments, let us know!

# Schema type is ES Module but imported through require

This happens when you have a schema type definition in a file like the following:

```javascript
export default {
  // ... type definition here...
}
```

...but import it using CommonJS `require`:

```javascript
import createSchema from 'part:@sanity/base/schema-creator'

export default createSchema({
  name: 'test-examples',
  types: schemaTypes.concat([
    // ... your types ...
    require('./someTypeDef.js')
  ])
})

```

The best solution is to use an import statement instead of require:

```javascript
import createSchema from 'part:@sanity/base/schema-creator'
import someTypeDef from './someTypeDef'

export default createSchema({
  name: 'test-examples',
  types: schemaTypes.concat([
    // ... your types ...
    someTypeDef
  ])
})

```

# Structure: Invalid list item

A desk structure list takes an array of list items to display. If you encounter an error saying a list item is invalid, common causes can be:

- Passing a promise or an observable instead of an actual list item. If you actually need to resolve a list item asynchronously, resolve the items before you resolve the list definition.
- You passed an array of items within the list. For instance, you might have called the `documentTypeListItems()` method, but did not use the spread operator to flatten the returned items into the array: `...documentTypeListItems()`

# Structure: Query provided where filter is expected

Certain nodes within the desk structure requires a filter. A filter is the part of a [GROQ-query](https://www.sanity.io/docs/content-lake/how-queries-work) which specifies which documents should be matched - the constraints of a query, if you will.

While a full GROQ-query could look like this:

```text
*[_type == "movie" && releaseDate > $afterDate] {
  _id, titlex, releaseDate
} [0...20]
```

The *filter* of the query is simply:

```text
_type == "movie" && releaseDate > $afterDate
```

# Structure: List item IDs must be unique

Within a single list, there can be no duplicate IDs. The IDs are used to resolve which child to render as the next item.

If you are not manually assigning IDs, it probably means that the title of two or more of your list items are the same, since the ID is inferred from that if not specified.

When this is the case, you can solve it by calling `id('someOtherId')` on the list items that conflict.

# Given type name is a reserved type

If you get this error, it means you most likely have tried to add a type to your schema that clashes with one of the builtin types. Currently the reserved types are:

`any`, `array`, `block`, `boolean`, `date`, `datetime`, `document`, `email`, `file`, `geopoint`, `image`, `number`, `object`, `reference`, `slug`, `string`, `telephone`, `text`, `time`, `type` and `url`.

If you got a type with one of these names in your schema, you'll have to give it another name or remove it.

# Structure: Schema type not found

This error occurs when the desk structure tries to find a schema type but did not find a match. Usually this is caused by a typo in the type name, or forgetting to import and include the document type in the studio schema definition.

First, check for any typos (obviously).

Secondly, check your schema definition (usually `<your-studio>/schemas/schema.js`) and ensure that you have both imported and included the document type in the call to `createSchema()`:

```javascript
import createSchema from 'part:@sanity/base/schema-creator'
import schemaTypes from 'all:part:@sanity/base/schema-type'

// Make sure you import the document type
import someDocumentType from './someDocumentType'

export default createSchema({
  name: 'default',
  types: schemaTypes.concat([
    // Make sure you include the type in this array:
    someDocumentType
  ])
})

```

# API versioning

Looking for information on API Versioning? View [the official documentation](https://www.sanity.io/docs/content-lake/api-versioning) or visit [the changelog](https://sanity.io/changelog) to see what has changed in various versions.

# Migrating the legacy webhook behavior to GROQ-powered Webhooks

If you need to recreate the previous webhook behavior – triggering on all changes, and on a dataset level rather than document-level – you can do so by following these steps:

1. Create a webhook set to trigger on **create**, **update** and **delete**
2. Leave the **Filter** field empty
3. Add the following to the **Projection** field

```groq
// webhook projection
{
  "transactionId": "Not supported",
  "projectId": sanity::projectId(),
  "dataset": sanity::dataset(),
  "ids": {
    "created": [
    	select(before() == null && after() != null => _id)
    ],
    "deleted": [
      select(before() != null && after() == null => _id)
    ],
    "updated": [
      select(before() != null && after() != null => _id)
    ],
    "all": [
      _id
    ]
  }
}
```

You can also [click this link to get a template with the settings described above](https://www.sanity.io/manage/webhooks/share?name=Legacy+webhook\&description=Recreation+of+legacy+webhooks\&url=\&on=create\&on=delete\&on=update\&filter=\&projection=%7B%0A++%22transactionId%22%3A+_rev%2C%0A++%22projectId%22%3A+sanity%3A%3AprojectId%28%29%2C%0A++%22dataset%22%3A+sanity%3A%3Adataset%28%29%2C%0A++%22ids%22%3A+%7B%0A++++%22created%22%3A+%5B%0A++++%09select%28before%28%29+%3D%3D+null+%26%26+after%28%29+%21%3D+null+%3D%3E+_id%29%0A++++%5D%2C%0A++++%22deleted%22%3A+%5B%0A++++++select%28before%28%29+%21%3D+null+%26%26+after%28%29+%3D%3D+null+%3D%3E+_id%29%0A++++%5D%2C%0A++++%22updated%22%3A+%5B%0A++++++select%28before%28%29+%21%3D+null+%26%26+after%28%29+%21%3D+null+%3D%3E+_id%29%0A++++%5D%2C%0A++++%22all%22%3A+%5B%0A++++++_id%0A++++%5D%0A++%7D%0A%7D\&httpMethod=POST\&apiVersion=v2021-03-25\&includeDrafts=).

# Schema type is invalid

The type defined in your schema is not a valid schema type. Common culprits:

- The type declaration is imported through `import`/`require` from a different file, but the import declaration either references an incorrect name or the imported file does not have any export declaration
- Something is returning `undefined`, `null` or `false` instead of the schema type declaration

Double check the `types` array of your schema declaration at the specified index to figure out where the error stems from.

# Input component is missing a required prop

All input components should be passed a `onFocus` and `onBlur` prop.

Read more about [Custom input widgets](https://www.sanity.io/docs/studio/intro-to-custom-studio-components)

# Structure: Title is required

Certain nodes within the desk structure requires a title. The title is used mainly for presentation concerns, but will also be used to generate a node ID if one is not given.

Setting a title can be done by calling the `title()` method:

```javascript
S.documentList()
  .id('cars')
  .title('Cars')
  .filter('_type == $type')
  .params({type: 'car'})
```

# Structure: Filter is required

Certain nodes within the desk structure requires a filter. A filter is the part of a [GROQ-query](https://www.sanity.io/docs/content-lake/how-queries-work) which specifies which documents should be matched - the constraints of a query, if you will.

Let's imagine you want to run a query to find all documents that do not currently have a slug set (in a field called `slug`). While the full GROQ-query would look like this:

```text
*[!defined(slug.current)]
```

The *filter* of the query is simply:

```text
!defined(slug.current)
```

Setting a filter can be done by calling the `filter()` method:

```javascript
S.documentList()
  .title('Missing slug')
  .filter('!defined(slug.current)')

```

# Import: Asset file does not exist

This error usually occurs when you are importing documents using `sanity dataset import ...` and images or files (also known as assets) aren't found.

This typically happens if a file isn't at the given path on your local system or the asset URL returns 404.

The solution is to ensure that each path and URL actually points to a file. Note that local file paths must be absolute, not relative:

**Correct**: `image@file:///local/path/to/rogue-one-poster.jpg`

**Wrong**: `image@file://../../local/path/to/rogue-one-poster.jpg`

Sometimes it's ok if not all assets are imported successfully. E.g. you're fetching tons of cat gifs off the Internet and some of them are bound to not exist. If you can live with that, use the `--allow-failing-assets` flag when running your import command.

You can read more about [importing data here](https://www.sanity.io/docs/content-lake/importing-data).

# Input component is missing a required method

All input components should implement a .focus() method.

Read more about [Custom input widgets](https://www.sanity.io/docs/studio/from-input-components-to-real-time-safe-patches)

# Implementing non-overridable part

Some parts are defined as non-overridable. Simply put, they should only be defined once. An example of this is the schema part - `part:@sanity/base/schema`, usually defined as the first thing in your studios `sanity.json`.

It doesn't make sense for other plugins to override this part, but by definining it as a part allows us to access the schema from anywhere without knowing the specific path to where it is located on disk. Another use case would be to provide the actual schema through a plugin instead of through the studio.

If you are encountering this error, it usually means that you have tried to implement a part that should not be overriden. If you think that the part in question is something you should be allowed to override, [reach out to us](https://www.sanity.io/contact).

# Structure: Item returned no child

In most cases, you will want to return a child when a list item is clicked. If you are receiving this warning, your list has probably not defined a child/child resolver, or the child resolver is returning `undefined`.

You usually want to specify a child for an item:

```javascript
S.listItem()
  .title('George R. R. Martin')
  .child(
    S.documentList()
      .title('GRRM books')
      .filter('_type == "book" && author._ref == "grrm"')
  )
```

If you intentionally don't want to return any child, define the child or child resolver to be `null` instead of `undefined`:

```javascript
S.documentListItem()
  .id('grrm')
  .title('George R. R. Martin')
  .schemaType('author')
  .child(null)
```

# How to migrate your block text schema for the new definition of inline objects

Previously inline objects in your text blocks were defined like this via the `options.inline` property:

```
{
  name: 'body',
  type: 'array',
  title: 'Content',
  of: [
    {type: 'block'},
    {
      name: 'author',
      title: 'Author',
      type: 'reference',
      to: {type: 'author'},
      options: {inline: true}
    }
}

```

We didn’t get the syntax totally right here, as inline nodes are children of the block type and therefore shouldn’t be defined on the same level as the other blocks in your block array.

So we needed to change it to make it work with validations – the new way to do this is via the block type’s of property:

```
{
  name: 'body',
  type: 'array',
  title: 'Content',
  of: [
    {
      type: 'block',
      of: [
        {
          name: 'author',
          title: 'Author',
          type: 'reference',
          to: {type: 'author'}
        }
      ]
    }
}

```

If you would like to support embedding an author object both inline *and* as a block, you would do it like this:

```
{
  name: 'body',
  type: 'array',
  title: 'Content',
  of: [
    {
      type: 'block',
      of: [
        {
          name: 'author',
          title: 'Author',
          type: 'reference',
          to: {type: 'author'}
        }
      ]
    },
    {
      name: 'author',
      title: 'Author',
      type: 'reference',
      to: {type: 'author'}
    }
}

```

# Structure: Schema type is required

Certain nodes within the desk structure requires knowledge of which schema type a document or a list of documents operates on.

Setting a schema typecan be done by calling the `schemaType()` method:

```javascript
S.editor()
  .id('car-editor')
  .schemaType('car')
  .documentId('am-db9')

```
