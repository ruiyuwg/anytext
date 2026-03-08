# Array

![Screenshot of an array from Sanity Studio](https://cdn.sanity.io/images/3do82whm/next/befae1ca226723422da18e04b241f25c7b0a466a-3456x2100.png)

An ordered list of data. The `of` property specifies which value types the array may hold. See the [ArrayDefinition](https://reference.sanity.io/sanity/index/ArrayDefinition/) reference for the full type definition.

## Properties

#### Properties

| Property | Description |
| --- | --- |
| type \* | Value must be set to array. |
| name \* | Required. The field name. This will be the key in the data record. |
| of \* | Defines which types are allowed as members of the array. |
| title | Human readable label for the field. |
| hidden | If set to true, this field will be hidden in the studio. You can also return a callback function to use it as a conditional field. |
| readOnly | If set to true, this field will not be editable in the content studio. You can also return a callback function to use it as a conditional field. |
| description | Short description to editors how the field is to be used. |
| icon | Supply a custom icon for this field. See icons documentation for more information. |
| initialValue | The initial value that will be used when creating new arrays from this type. Can be either the literal array value or a resolver function that returns either the literal value or a promise resolving to the initial value. |
| components | Lets you provide custom components to override the studio defaults in various contexts. The components available are field, input, item, preview. |
| deprecated | Marks a field or document type as deprecated in the studio interface and displays a user-defined message defined by the single required reason property.

If you deploy a GraphQL API schema, this property will translated into the @deprecated directive. |

## Options ([ArrayOptions](https://reference.sanity.io/sanity/index/ArrayOptions/))

#### Properties

| Property | Description |
| --- | --- |
| sortable | Controls whether the user is allowed to reorder the items in the array. Defaults to true. |
| layout | If set to tags, renders the array as a single, tokenized input field. This option only works if the array contains strings.

If set to grid it will display in a grid.

If the array uses the list option, it will display the values as a vertical list of checkboxes. Use grid layout to place the checkboxes horizontally. |
| list | Renders checkboxes for a predefined list of values.

For arrays of primitives the following formats are supported:

\[ {value: , title: }, { … } ]

\[ , , … ]

For arrays of objects the format is

\[ {\_type: <mandatory-object-type>, \_key: , /\* optionally any fields that exist in <object-type>\*/}, { … } ]

Objects will be rendered using the object types preview config. |
| modal | Controls how the modal (dialog for array content editing) is rendered. Takes an object with type and width property.

type can be dialog or popover, width can be 'auto' or a number.

Default is {type: 'dialog', width: 'auto'}. |
| insertMenu | Allows configuring the insert menu for array items with the following properties:

filter: boolean | 'auto'
Enable or disable filtering of types. Defaults to 'auto' which will enable filtering automatically if more than 5 types are present.

groups: array of group definitions { name: string, title: string, of: string\[] }
Groups allowable types for easier access.

showIcons: boolean
Show or hide icons for types.

views: array of view options:{name: 'list'} | {name: 'grid', previewImageUrl: function }

See examples further on in this article. |
| disableActions | Accepts a list of actions that can be selectively disabled from the array inputs action menu. The available options are:

add – Removes the ability to add new items to the array

addBefore – Removes the "Add item before"-menu item from the array item menu

addAfter – Removes the "Add item after"-menu item from the array item menu

remove – Removes the ability to remove items from the array

duplicate – Removes the ability to duplicate array items

copy – Removes the ability to copy items from the array

options: { disableActions: \['add', 'addAfter'] } |

## Validation ([ArrayRule](https://reference.sanity.io/sanity/index/ArrayRule/))

#### Properties

| Property | Description |
| --- | --- |
| required() | Ensures that this field exists. |
| unique() | Requires all values within the array to be unique. Does a deep comparison, only excluding the \_key property when comparing objects. |
| min(minLength) | Minimum number of elements in array. |
| max(maxLength) | Maximum number of elements in array. |
| length(exactLength) | Exact number of array elements to allow. |
| custom(fn) | Creates a custom validation rule. |
| error(message) | Sets a custom error message for the preceding validation rule. |
| warning(message) | Sets a custom warning message for the preceding validation rule. Warnings do not prevent publishing. |
| info(message) | Sets a custom info message for the preceding validation rule. Info messages are purely informational and do not prevent publishing. |
| valueOfField(path) | Gets the value of a sibling field to use in validation. Useful for creating validation rules that depend on the value of another field. |

## Options Example

### Example: Customizing the insert menu

The `insertMenu` option allows you to configure several aspects of the array input's insert menu. It accepts the following properties:

#### `showIcons`

Set to `false` to hide the icons for schema types.

```javascript
{
  insertMenu: {
    showIcons: false,
  }
}
```

![Shows array insert menu with and without icons for schema types](https://cdn.sanity.io/images/3do82whm/next/d13f247073ff9d14645f9d85af86e42b6a2afd39-646x545.png)

#### `filter`

Enable or disable filtering of available schema types. Can be set to `true`, `false` or `'auto'` (default). When set to `'auto'` filtering will kick in once the list of allowable types has five or more options.

```javascript
{
  insertMenu: {
    filter: true,
  }
}
```

![Shows array insert menu with a search field to filter types](https://cdn.sanity.io/images/3do82whm/next/292e34dc0ef32251b725bd14e037cade22a6e996-701x599.png)

#### `groups`

Define groups of related schema types for improved findability.

```javascript
{
  insertMenu: {
    groups: [
      {
        name: 'intro',
        title: 'Intro',
        of: ['hero'],
      },
      {
        name: 'storytelling',
        title: 'Storytelling',
      },
      {
        name: 'upsell',
        title: 'Upsell',
        of: ['testimonials', 'hero'],
      },
    ],
  },
}
```

![Shows insert menu with groups of schema types](https://cdn.sanity.io/images/3do82whm/next/28d0139dbbcc9f7feacfc6872bd5e6dcd12bf375-686x613.png)

#### `views`

Allows for selecting between the classic select menu `{ name: 'list' }` or an expanded grid view `{ name: 'grid' }` with optional preview images for each type. If both are included, the first item in the array will be shown by default, and a button to toggle between views will be included.

```javascript
{
  insertMenu: {
    groups: [
      {
        name: 'intro',
        title: 'Intro',
        of: ['hero'],
      },
      {
        name: 'storytelling',
        title: 'Storytelling',
      },
      {
        name: 'upsell',
        title: 'Upsell',
        of: ['testimonials', 'hero'],
      },
    ],
    views: [
      {name: 'list'},
      {name: 'grid', previewImageUrl: (schemaTypeName) => `/static/preview-${schemaTypeName}.png`},
    ],
  },
}
```

If `previewImageUrl'` is not defined, the icon associated with the respective schema types will be shown instead.

#### `disableActions`

Allows for selectively disabling and removing actions from the actions menu.
The following actions can be disabled.

- `add` – Removes the ability to add new items to the array
- `addBefore` – Removes the "Add item before"-menu item from the array item menu
- `addAfter` – Removes the "Add item after"-menu item from the array item menu
- `remove` – Removes the ability to remove items from the array
- `duplicate` – Removes the ability to duplicate array items
- `copy` – Removes the ability to copy items from the array

```typescript
{
      name: 'someArrayField',
      options: {
        disableActions: ['add', 'duplicate'],
      },
      title: "Array you can't add elements to",
      type: 'array',
      of: [
        {
          type: 'object',
          name: 'something',
          title: 'Something',
          fields: [{name: 'first', type: 'string', title: 'First string'}],
        },
      ],
    }
```

A few things to note:

- These changes are only about UI affordances, and doesn't imply any form of write protection for the actual data. Items can still be added or removed to an array by sending mutations to the API.
- This affordance only applies to arrays of objects and arrays of primitive values. Not to portable text arrays.
- Disabling add will also implicitly disable addBefore and addAfter, thus disable inserting new items to the array entirely (although items can still be inserted via duplicate).

## Additional Examples

### Example: Array of strings

Vanilla, reorderable array of strings:

Input

```javascript
{
  title: 'Names',
  name: 'names',
  type: 'array',
  of: [{type: 'string'}]
}
```

API response

```json
{
  "names": ["Wilma", "Håvard"]
}
```

Tokenized field (tags) is data-wise an ordinary array

Input

```javascript
// Presented as a tokenizing tag-field
{
  title: 'Tags',
  name: 'tags',
  type: 'array',
  of: [{type: 'string'}],
  options: {
    layout: 'tags'
  }
}
```

API response

```json
{
  "tags": ["clever", "unexpected"]
}
```

### Example: Array containing both crew members and cast members

Both `crewMember` and `castMember` are custom types defined in our schema. In this example we want an array of `employees` to be able to contain both crew members or cast members. The resulting array will end up containing inline instances of the actual objects. Note that in a real world example, you may want this to be references to existing cast members or crew members.

Input

```javascript
{
  title: 'Employees',
  name: 'employees',
  type: 'array',
  of: [{type: 'crewMember'}, {type: 'castMember'}]
}
```

API response

```json
[
  {
      "_key": "5ead6b7c7dcc55ae66d504e2d9bfeff5",
      "_type": "castMember",
      "characterName": "Mark Watney",
      "externalCreditId": "53e7e85e0e0a266f9a0029aa",
      "person": {
        "_ref": "person_matt-damon",
        "_type": "reference"
      }
  },
  {
    "_key": "8c1dd384a3ab34befbe5fdd93478fc8e",
    "_type": "castMember",
    "characterName": "Melissa Lewis",
    "externalCreditId": "5466c78eeaeb8172820008e4",
    "person": {
      "_ref": "person_jessica-chastain",
      "_type": "reference"
    }
  },
  {
    "_key": "76a7e8c2547ce445294c581564bc7d75",
    "_type": "crewMember",
    "department": "Camera",
    "externalCreditId": "5607a946c3a3681218003eef",
    "externalId": 1404244,
    "job": "Helicopter Camera",
    "person": {
      "_ref": "person_john-marzano",
      "_type": "reference"
    }
  }
]
```

### Example: Array of references

In this example, we want `castMember` and `crewMember` to be stored as separate documents, and our array should contain references to these documents instead of the actual data.

Input

```javascript
{
  title: 'Employees',
  name: 'employees',
  type: 'array',
  of: [
    {
      type: 'reference',
      to: [
        {type: 'castMember'},
        {type: 'crewMember'}
      ]
    }
  ]
}
```

API response

```json
[
  {
    "_ref": "person_harrison-ford",
    "_type": "reference"
  },
  {
    "_ref": "person_ridley-scott",
    "_type": "reference"
  }
  //...
]
```

### Example: Array of both references and non-references

Arrays can contain mixed types – subject to the [second limitation](https://www.sanity.io/docs/studio/array-type) identified below.  This includes mixing references and non-references (e.g., objects).

Let's consider the previous example once more. This time, we want `castMember` to be stored as a separate document that our array should reference, while `crewMember` is a type where we want to store an inline instance of the actual object.

Input

```javascript
{
  title: 'Employees',
  name: 'employees',
  type: 'array',
  of: [
    {
      type: 'reference',
      to: [
        {type: 'castMember'},
      ]
    },
    {type: 'crewMember'}
  ]
}
```

API response

```json
[
  {
    "_ref": "person_harrison-ford",
    "_type": "reference"
  },
  {
    "_ref": "person_ridley-scott",
    "_type": "reference"
  },
  {
    "_key": "76a7e8c2547ce445294c581564bc7d75",
    "_type": "crewMember",
    "department": "Camera",
    "externalCreditId": "5607a946c3a3681218003eef",
    "externalId": 1404244,
    "job": "Helicopter Camera",
    "person": {
      "_ref": "person_john-marzano",
      "_type": "reference"
    }
  }
  //...
]
```

Notice that `{type: 'crewMember'}` is inside the `of` array but outside the reference.

> \[!TIP]
> Protip
> Looking to query an array of mixed references and non-references? You *could* specify what to return from each `_type` in the array (e.g., `crewMember`, `castMember`, etc.) using projections, but you can also distinguish between references and non-references and either return the inline instance of the object or return the referenced document.

```groq
*[] {
  'employees': employees[] {
    _type == 'reference' => @->,
    _type != 'reference' => @
  }
}
```

### Example: Predefined strings

Sometimes you need an array of strings presented as a set of predefined values. By using the list option, the field is presented as an array of check boxes where the editor can toggle which strings are in the array. This handles the array as a set and the ordering is not defined.

Input

```javascript
{
  title: 'Category Set',
  name: 'categorySet',
  type: 'array',
  of: [{type: 'string'}],
  options: {
    list: [
      {title: 'Building', value: 'building'},
      {title: 'Master plan', value: 'masterPlan'},
      {title: 'Infrastructure', value: 'infrastructure'},
      {title: 'Private Home', value: 'privateHome'}
    ]
  }
}
```

API response

```json
{
  "categorySet": ["building", "privateHome"]
}
```

### Example: Predefined objects

Input

```javascript
{
  title: "Example object list",
  type: "array",
  name: "example",
  of: [
    {
      type: "object",
      name: "inline",
      fields: [
        { type: "string", name: "title" },
        { type: "number", name: "amount" }
      ]
    }
  ],
  options: {
    list: [
      { _type: "inline", title: "Big amount", amount: 100 },
      { _type: "inline", title: "Small amount", amount: 1 }
    ]
  }
}
```

API response

```json
{
  "example": [
    {
      "_type": "inline",
      "title": "Big amount",
      "amount": 100,
      "_key": "auto-generated-0"
    },
    {
      "_type": "inline",
      "title": "Small amount",
      "amount": 1,
      "_key": "auto-generated-1"
    }
  ]
}
```

### Example: Unique values

A common use case is to only want unique items in an array. This can be enforced by adding a validation function and using the `unique()` method.

Input

```javascript
{
  title: 'Category Set',
  name: 'categorySet',
  type: 'array',
  of: [{type: 'string'}],
  validation: Rule => Rule.unique()
}
```

API response

```json
{
  "categorySet": ["building", "privateHome"]
}
```

### Example: Custom sort order with custom component

While use a custom component to sort arrays in ways that don't match the data structure. This will only change how the items are displayed in Studio.

**Field example**

```
defineField({
  name: 'someUserChoices',
  type: 'array',
  of: [
    defineArrayMember({
      type: 'aCustomObject' // or other types
    }),
  ],
  options: {
    sortable: false,
  },
  components: {
    input: CustomArrayInput,
  },
}),
```

**Component example**

```
import {ArrayOfObjectsInputProps, ArrayOfObjectsMember} from 'sanity'
import {useMemo} from 'react'

export function CustomArrayInput(props: ArrayOfObjectsInputProps) {
  const {renderDefault} = props
  const sortedObjects = useMemo(() => {
    const value = (props.value || []) as WhateverYourArrayTypeIs[] 
    return value
      .sort( // add a sort function for the arrays  )
      .map((entry) => entry._key)
  }, [props.value])

  const members = props.members || []
  const membersByKey = members.reduce(
    (acc, member) => {
      acc[member.key] = member
      return acc
    },
    {} as Record<string, ArrayOfObjectsMember>,
  )

  const sortedMembers = sortedObjects
    .filter((key) => key)
    .map((key) => membersByKey[key]) as ArrayOfObjectsMember[]
  // Note the replaced `members` with `sortedMembers`
  return <div>{renderDefault({...props, members: sortedMembers || []})}</div>
}
```

## Why is the `_key`?

When adding data with `type: 'object'` to an array, each item gets assigned a persistent and unique `_key` property. This is to ensure that each item can be addressed uniquely in a collaborative, real time setting. This allows one user to edit an array item while another user simultaneously reorders the array.

> \[!WARNING]
> Gotcha
> When using the `initialValue` property in Sanity Studio to initialize a field with a predefined array of objects, setting the `_key` property of those objects manually will not work.
> This: `{ type: 'array', initialValue: [{_key: 'monday', day: 'Monday'}] }`
> Will result in this: `[{_key: '<random string>', day: 'Monday'}]`

### Two Limitations

1. Due to a limitation in the data store, arrays may not currently contain arrays. Solve this by wrapping nested arrays in objects.
2. It is not possible to define arrays that contains **both** object types and primitive types. Arrays that hold values of *primitive* types (e.g. *strings* or *numbers*) cannot be addressed uniquely by a key in real time. As a consequence, when defining an array of primitive values, the content studio will switch to a simpler array input widget for editing. This simpler input widget will **not** be able to handle object types, which is why it is not possible to define arrays that contains **both** object types and primitive types. If you should ever need an array that contains both primitive types (e.g., *strings*) and *objects* (e.g., `movie`), you should instead create an object as an item in the array and give it properties that hold the primitive values.

This **will not** work:

```javascript
{
  type: 'array',
  of: [
    {
      type: 'actor', /* This is an object type */
      title: 'Actor'
    },
    {
      type: 'string', /* Will not work! */
      title: 'Actor name'
    }
  ]
}
```

This **will** work:

```javascript
{
  type: 'array',
  of: [
    {
      title: 'Actor',
      type: 'actor'
    },
    {
      title: 'Actor name',
      type: 'object',
      fields: [
        {
          title: 'Name',
          name: 'value',
          type: 'string'
        } 
      ]
    }
  ]
}
```
