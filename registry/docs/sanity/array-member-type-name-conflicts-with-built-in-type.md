# Array member type name conflicts with built-in type

This error means you have an array type that has a member that is given the same name as one of the built-in types.

When defining an array type in your schema you have the option to quickly declare several "inline" object types and give each one of them their own name to be able to distinguish between them. For example, the following could be used to define an array that can hold different variations of contact info without having to declare `address` and `phone` as separate schema types.

This allows for "locally scoped", inline types that you don't want to re-use across other schema types.

```javascript
{
  name: 'contactInfo',
  type: 'array',
  of: [
    {
      type: 'object',
      name: 'address'
      title: 'Address',
      fields: [{name: 'street', type: 'string'}, /* … */]
    },
    {
      type: 'object',
      name: 'phone'
      title: 'Phone',
      fields: [{name: 'number', type: 'string', /* … */}]
    }
  ]
}
```

For inline object types we require their names to not conflict with the built-in types Sanity already ships with.

This means that naming your inline type things like "string", "reference" or "image" will cause an error. Consider this example:

```javascript
{
  name: 'contactInfo',
  type: 'array',
  of: [
    {
      type: 'object',
      name: 'address'
      fields: [{name: 'street', type: 'string'}, /* … */]
    },
    {
      type: 'object',
      name: 'reference' // <-- This will error because "reference" is a built-in type
      fields: [{name: 'caption', type: 'string', /* … */}]
    }
  ]
}
```

Here, using "reference" as the name for the second object will cause an error because "reference" is the name of a built-in type. The fix here would be to pick another name, e.g. `contactReference`

The list of built-in types can be found [here](https://github.com/sanity-io/sanity/blob/current/packages/%40sanity/schema/src/sanity/coreTypes.ts).

> \[!WARNING]
> Gotcha
> To avoid having multiple similar-typed values with different shapes it might be a good idea to consider "hoisting" inline types to your schema. This will help to make sure every object that share the same `_type` has the same shape throughout your application.

# Source vs. compiled paths

What just happened? The CLI command `sanity check` is running in production mode, and got this error.

The reason may be that you have defined a `compiled` path in the `sanity.json` file in your Studio. This tells Sanity to look for the files in a different location when running in production mode.

Another reason may be that `sanity check` has found a Studio plugin which is published on npm with files that are not compiled.

The `paths` property in a `sanity.json` file tells Sanity where to look for both compiled and uncompiled code files. Given the following `sanity.json` config:

```json
{
  "paths": {
    "source": "./src",
    "compiled": "./lib"
  },
  "parts": [
    {
      "implements": "part:@sanity/base/tool",
      "path": "my-tool/index.js"
    }
  ]
}
```

Sanity will look for source files in `./src` (relative to the location of the `sanity.json` file) and compiled files in `./lib`. In the particular case above, the tool source should be in `./src/my-tool/index.js` and the compiled version will end up in `./lib/my-tool/index.js`.

If a plugin doesn't require any Babel compilation, the `sanity.json` for that plugin doesn't need a declaration of the `paths` property.

You can read more about sanity.json and parts.

# Import: Asset has different target than source

This error usually occurs when you have exported a dataset using `sanity dataset export` using the `--raw` flag, and then importing to a different project ID or dataset name.

The reason why this is failing is because the imported documents would refer to assets outside of it's own dataset, which is usually not what you want. If you delete an asset from the source dataset, it would create a "loose" asset document in the target dataset, which points to a file that no longer exists.

The solution is to not use `--raw` when exporting, which will also export all the assets from the source dataset. This will make sure the assets are also present in the target dataset when importing.

In *very* rare cases, you may want to allow the assets to reference URLs from a different dataset, in which case you can use the `--allow-assets-in-different-dataset` flag when importing.

# Using global studio client without specifying API version

In a previous version of the Sanity content studio, you could import a global, preconfigured Sanity client from `part:@sanity/base/client`. From version 2.7.0 and onwards, you should now specify which API version you want to use:

```javascript
import sanityClient from 'part:@sanity/base/client'

const client = sanityClient.withConfig({
  apiVersion: 'v2021-03-25'
})

client.fetch('/* ... */')
```

To explain why this is necessary, consider the following scenario:

- Plugin A is released in 2020, and contains queries and API calls that are written for API version `v1`.
- Plugin B is released in 2021, and contains queries and API calls that are written for API version `v2020-03-25`.
- If both plugins had to use the same API version, you would either have to wait for the plugin authors to align on a single version, or have the risk of the plugins breaking.

By allowing each plugin to declare which API version they want to use, we can use multiple different API versions within the studio, without causing any issues.

## Backwards compatibility

Using the global client without specifying an API version will still work as before (using `v1` for API calls), but will give a warning message in the developer console telling you to specify an API version.

# Structure: Action and intent are mutually exclusive

A menu item cannot have both an intent *and* an action defined. Either use `action` (with a function) or `intent` (with an intent declaration).

# Upgrade React

The React version used in Sanity Studio can be upgraded from the command line.

#### Using yarn

`yarn add react@latest react-dom@latest prop-types@latest`

#### Using npm

`npm install react@latest react-dom@latest prop-types@latest`

# Plugin is missing a sanity.json file

You're probably here because you tried to run `sanity start`, but got:

```markdown
No "sanity.json" file found in plugin "my-plugin-name"
See https://docs.sanity.io/help/missing-plugin-sanity-json
```

This can be fixed by adding a `sanity.json` file to the root level of the plugin in question. Also, you might want to *define* and/or *implement* a `part`, e.g.:

```json
{
  "paths": {
    "source": "./src",
    "compiled": "./lib"
  },
  "parts": [
    {
      "name": "part:@sanity/base/components/unicorn-slider",
      "description": "React component which provides a slider input"
    },
    {
      "implements": "part:@sanity/base/components/unicorn-slider",
      "path": "components/Slider.js"
    }
  ]
}

```

# Structure: Document ID required

Certain nodes within the desk structure requires a document ID to operate on.

Setting a document ID can be done by calling the `documentId()` method:

```javascript
S.document()
  .id('car-editor')
  .schemaType('car')
  .documentId('am-db9')

```

# Incompatible combination of params and filter

The reference field allows you to define options for the input component, namely a GROQ filter and a set of parameters for this filter. You can *either* define the filter statically, **OR** you can use a function in order to *derive* the filter based on the surrounding document.

If you are encountering this error, it usually means that you've defined a function for deriving the filter, but has also defined a set of static parameters. The solution is to either use static values, or just use the filter function and return an object containing both the filter and the parameters:

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
      options: {
        filter: () => {
          return {
            filter: 'age > $age',
            params: {age: 30}
          }
        }
      }
    }
  ]
}
```

# Using listener with tokens is not supported in browsers

The browser implementation of EventSource does not allow for sending custom headers. Therefore, authenticating a listener request using a token will not work in browsers.

> \[!WARNING]
> Gotcha
> Configuring the sanity client using a token in the browser has security implications, and should only be done after a careful consideration.
> [Read more about how to keep your data safe](https://www.sanity.io/docs/content-lake/keeping-your-data-safe)

Instead consider setting the visibility of your dataset to public or make sure users are logged in using cookies when accessing your frontend.

# Schema type is missing a required property

Every schema type needs both a `type` and a `name` property. The type specifies which type your schema type is (e.g. if its a `document`, an `object` or a `string`). The type name is the name of which you will refer to this type later on. E.g. if you want to add a field that is a reference to a value of one of your own schema types, you will typically do something like this:

```javascript
[
  { // defines the schematype "author"
    name: 'author',
    type: 'document',
    fields: [/*...*/]
  },
  
  //...
  
  { // defines the schema type "book"
    name: 'book',
    type: 'document',
    fields: [
      {name: 'title', type: 'string'},
      {
      name: 'author',
      type: 'reference',
      to: [
        {
          type: 'author' // <-- refers to the schema type "author" by its name
        }
      ]
    }
  }
]
```
