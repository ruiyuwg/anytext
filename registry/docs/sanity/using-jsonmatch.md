# Using JSONMatch

JSONMatch is widely used in the `patch` mutation type when updating documents. All mutations types support JSONMatch at the root key level when targeting the operations. This means that a single `set`, `unset`, `append` or `inc` operation can easily target one or more values of the document, or use the powerful recursive filtering of JSONMatch to find the desired value of the document automatically.

## General format

A JSONMatch path is an expression that, when evaluated, resolves to one or more locations in JSON document. A path can traverse object keys and arrays.

## Examples

In this reference we will use the following example JSON object to extract data from:

```javascript
{
  "name": "fred",
  "friends": [
    {
      "name": "mork",
      "age": 40,
      "favoriteColor": "red"
    },
    {
      "name": "mindy",
      "age": 32,
      "favoriteColor": "blue"
    },
    {
      "name": "franklin",
      "favoriteColor": "yellow"
    }
  ],
  "roles": ["admin", "owner"],
  "contactInfo": {
    "streetAddress": "42 Mountain Road",
    "state": {
    "shortName": "WY",
    "longName": "Wyoming"
    }
  }
}

```

Given the example document, these expressions can be evaluated:

```javascript
"name" → "fred" 
"friends[*].name" → ["mork", "mindy", "franklin"] 
"friends[age > 35].name" → ["mork"] 
"friends[age > 30, favoriteColor == "blue"].name" → ["mork", "mindy"] 
"friends[age?].age" → [40, 32] 
"friends[0].name" → "mork" 
"friends[0, 1].name" → ["mork", "mindy"] 
"friends[1:2].name" → ["mindy", "franklin"] 
"friends[0, 1:2].name" → ["mork", "mindy", "franklin"] 
"contactInfo.state.shortName" → "WY" 
"contactInfo.state[shortName, longName]" → ["WY", "Wyoming"] 
"friends.age[@ > 35]" → [35] 
"roles" → ["admin", "owner"] 
"roles[*]" → ["admin", "owner"] 
"roles[0]" → "admin" 
"roles[-1]" → "owner" 
"contactInfo..shortName" → "WY" 
"[contactInfo.state.shortName, roles]" → ["WY", ["admin", "owner"]] 

```

## Keys

A single key matches that key in an object. For example, `name` returns `"fred"`. If keys contain special characters the key name can be surrounded in single quotes, so `'name'` also returns `"fred"`.

> \[!WARNING]
> Gotcha
> Since single quotes are used to denote field names, regular strings *must* be enclosed in double quotes.

## Descent operator

The `.` operator descends into a key and selects a nested key. It has the format: `key1.key2`

For example:

```javascript
friend.name
```

This will match the `name` attribute in:

```javascript
{
  "friend": {
    "name": "mork"
  }
}

```

## Recursive descent

The `..` operator matches every value below the current selection descending through any objects, iterating over every array. Typical usage is to find a sub-object regardless of where it resides in an object. `content.blocks..[key == "abc123"]` will find the object having the `attribute` key equal to "abc123" wherever it resides inside the object or array at `content.blocks`.

## Arrays

Arrays can be subscripted with the `[]` operator. It has the formats:

```
"array[2]" → The second element of the array
"array[2, 3, 9]" → the second, third and ninth array element
"array[-1]" → the last array element
"array[1:9]" → array element 1 through 9 (non-inclusive)
"array[4:]" → array element 4 through to the end of the array
"array[:4]" → array elements from the start to element 4 of the array (non-inclusive)
"array[1, 4, 5:9, 12]" → union of array elements 1, 4, 5 to 9 and 12

```

## Constraints

Arrays can be filtered with constraints, e.g. `friends[age == 32]`. Constraints are separated by comma and are always a union ("or"), not an intersection.

## Boolean operations

In its current implementation, JSONMatch do not support boolean operators `&&` or `||`, BUT essentially a union is the same as boolean `or`, and chaining constraints work the same as boolean `and`:

`"numbers[@ < 50, @ > 60]"`: Select numbers that are < 50 OR > 60.

`"numbers[@ > 20][@ < 30]"`: Select number that are > 20 AND < 30.

`'employees[name == "John Smith", name == "Granny Smith"]'`: employees that have the name "John Smith" OR "Granny Smith".

# IP addresses used by Sanity

For environments where outgoing connectivity filtering restrictions apply (egress filtering), we recommend adding [the following IPs](https://www.sanity.io/files/all-customer-facing-ips.txt) to your network configuration to allow the Sanity Studio connectivity to work well for you.

The IP addresses will not change often, but we recommend that you use [the source file](https://www.sanity.io/files/all-customer-facing-ips.txt) to ensure you have the latest list.

# Setting up your studio

## Create a new Studio with Sanity CLI

![Video](https://stream.mux.com/wIMs3CS7T4pP7hRArpQZsBZ01Be02vCjbK)

Run the command in your Terminal to initialize your project on your local computer.

See the documentation if you are [having issues with the CLI](https://www.sanity.io/docs/help/cli-errors).

**Terminal**

```sh
npm create sanity@latest -- --dataset production --template clean --typescript --output-path studio-hello-world
cd studio-hello-world
```

## Run Sanity Studio locally

Inside the directory of the Studio, start the development server by running the following command.

**Terminal**

```sh
# in studio-hello-world 
npm run dev
```

## Log in to the Studio

**Open** the Studio running locally in your browser from <http://localhost:3333>.

You should now see a screen prompting you to log in to the Studio. Use the same service (Google, GitHub, or email) that you used when you logged in to the CLI.

# Defining a schema

## Create a new document type

![Video](https://stream.mux.com/IfVfAwxfwOKN2khdGCQ3cs5IuF1rYte1)

Create a new file in your Studio’s `schemaTypes` folder called `postType.ts` with the code below which contains a set of fields for a new `post` document type.

**/studio-hello-world/schemaTypes/postType.ts**

```
import {defineField, defineType} from 'sanity'

export const postType = defineType({
  name: 'post',
  title: 'Post',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'slug',
      type: 'slug',
      options: {source: 'title'},
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'publishedAt',
      type: 'datetime',
      initialValue: () => new Date().toISOString(),
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'image',
      type: 'image',
    }),
    defineField({
      name: 'body',
      type: 'array',
      of: [{type: 'block'}],
    }),
  ],
})
```

## Register the `post` schema type to the Studio schema

Now you can import this document type into the `schemaTypes` array in the `index.ts` file in the same folder.

**/studio-hello-world/schemaTypes/index.ts**

```
import {postType} from './postType'

export const schemaTypes = [postType]
```

## Publish your first document

When you save these two files, your Studio should automatically reload and show your first document type. Click the `+` symbol at the top left to create and publish a new `post` document.
