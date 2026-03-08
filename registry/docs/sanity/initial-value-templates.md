# Initial Value Templates

By default, whenever you create a new document in the studio, the document will be initialized with empty values for every field (actually: `undefined`). Sometimes this is not what you want. In this article, we'll look at some of the ways you can set your documents with some prefilled initial values.

There are two ways of defining initial values, depending on what you want to achieve:

1. Define a single set of initial values to apply to all new documents of the same type
2. Define a set of different templates to choose from when creating a new document

## Define a single set of initial values

If you always want a particular document type to have a single set of initial values, the simplest way to do this is by specifying the `initialValue` property on a document type. In the following example, the `project` schema type is given the value `false` for the `isHighlighted` field.

```javascript
export default {
  name: 'project',
  type: 'document',
  title: 'Project',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string'
    },
    {
      name: 'isHighlighted',
      title: 'Highlighted',
      type: 'boolean'
    },
    {
      name: 'releaseDate',
      title: 'Release date',
      type: 'datetime'
    }
  ],
  initialValue: {
    isHighlighted: false
  }
}
```

Sometimes you may want to compute property values. For instance, in the example above, you may want to set the `releaseDate` property to be the current date. You can do this by specifying a function for the `initialValue` property:

```javascript
export default {
  // ...
  initialValue: () => ({
    isHighlighted: false,
    releaseDate: (new Date()).toISOString()
  })
}
```

> \[!WARNING]
> Gotcha
> The `datetime` example above will not work for a field of type `date`, since those should not include the time along with the date string. A similar strategy for `date` fields might look like this:
> `initialValue: new Date().toISOString().slice(0, 10)`

## Set an initial value for a specific field

In the creation of a field in a document, you can specify an `initialValue` for that specific instance of the field.

```javascript
export default {
  name: 'project',
  type: 'document',
  title: 'Project',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string'
    },
    {
      name: 'isHighlighted',
      title: 'Highlighted',
      type: 'boolean',
      initialValue: false
    },
    {
      name: 'releaseDate',
      title: 'Release date',
      type: 'datetime'
    }
  ]
}
```

### Single-field examples

Initial values can be used on any schema type.

```javascript
export default {
  name: 'project',
  type: 'document',
  title: 'Project',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      initialValue: 'This string'
    },
    {
      title: 'title',
      name: 'myArray',
      type: 'array',
      initialValue: ['red', 'green'],
      of: [
          {type: 'string'},
      ],
    },
    {
      title: 'Complex Array',
      name: 'myArray',
      type: 'array',
      initialValue: [
        {
          // Required _type to tell the schema what fields to map
          _type: 'mySecondObject', 
          stringField: 'Starting string'
        }
      ],
      of: [
        {type: 'myFirstObject'},
        {type: 'mySecondObject'}
      ],
    },
    {
      name: 'myObject',
      title: 'My custom input',
      type: 'object',
      initialValue: {
        name: "some name",
        someField: "Some other thing"
      },
      fields: [
        {
            name: 'name',
            title: 'Title',
            type: 'string'
        },
        {
            name: 'someField',
            title: 'Something',
            type: 'string'
        },
      ],
    },
    {
      title: 'Custom type',
      type: 'myCustomObjType',
      name: 'myCustomObjType',
      initialValue: {
        customName: "This is a custom name",
        customString: "This is a custom string"
      }
    },
    {
      name: 'isHighlighted',
      title: 'Highlighted',
      type: 'boolean',
      initialValue: false
    },
    {
      name: 'releaseDate',
      title: 'Release date',
      type: 'datetime',
      initialValue: (new Date()).toISOString()
    }
  ]
}
```

## Initial value precedence

Initial values for nested types will be deeply merged. The initial value for the above `project` type will be resolved to something similar to:

```javascript
{
  "releaseDate": "2021-04-28T10:39:17.622Z",
  "isHighlighted": false
}
```

In a case where an object type declares initial values for a field that also defines an initial value, the object type's initial value will "win" and override the field's initial value.

In the following example, the resolved initial value for the project type will be `{"isHighlighted": true}`:

```javascript
export default {
  name: 'project',
  type: 'document',
  title: 'Project',
  fields: [
    {
      name: 'isHighlighted',
      title: 'Highlighted',
      type: 'boolean',
      initialValue: false
    },
    //...
  ],
  initialValue: {
    // this overrides the initial value defined on the field
    isHighlighted: true
  }
}
```

> \[!TIP]
> Protip
> If you want to clear the initial value defined for a nested type, you can do this by setting the initial value to `undefined`.

## Define multiple templates

So far, we’ve only looked at customizing the initial value for all documents of a document type. Quite often, you'll want to provide a set of different templates that an editor can choose from.

> \[!WARNING]
> Gotcha
> Initial value *templates* only applies to `document` types.

In this example, we'll be working directly in the `defineConfig` configuration of our imaginary studio, but you can of course choose to export your templates/template functions elsewhere as they grow unwieldy.

```javascript
// sanity.config.js|ts

import {defineConfig} from 'sanity'

export default defineConfig({
  //...rest of config
  schema: {
    templates: (prev, context) => {
        console.log(prev)
        // logs array of templates for existing types
        console.log(context);
        // logs: schema, currentUser, getClient, dataset, projectId
        return prev;
      }
    } 
  }
})
```

We’ve now recreated the exact same functionality that you get out of the box, but we also get a look at the templates that exist for our current types. For a document of type `movie` (such as you might find in the default "Movie project" example) the template looks like this:

```javascript
{
    id: "movie",
    schemaType: "movie",
    title: "Movie",
    value: {
        "_type": "movie"
    }
}
```

> \[!NOTE]
> Behind the scenes
> This gives you an idea of what happens behind the scenes: each document type will generate a template for its type, which will produce either an empty object as its initial value or whichever value is set in the schema type definitions *initialValue* property.

Let's take what we've learned and make it useful by defining a custom initial values template.

In the following example, we include all the default templates, and then we add a template for documents of type `person` which will set up each new document with a prefilled value for the `role` field.

```javascript
// sanity.config.js|ts
import {defineConfig} from 'sanity'

export default defineConfig({
  // ...rest of config
  schema: {
    templates: (prev) => [
      ...prev,
      {
      id: 'person-developer',
      title: 'Developer',
      schemaType: 'person',
      value: {
        role: 'developer'
      },
    },
	],
})
```

When creating new documents, an editor will now get the option to create either a Person (the default template for the person type) or a Developer, which is the specific template we defined above with a pre-populated `role` property. The `value` property can also be defined as a function.

![Shows the "new document" option as a dropdown with two options: "Person" and "Developer"](https://cdn.sanity.io/images/3do82whm/next/a745d7910129fa7566bd6668fdd90a320d520981-384x158.png)

To polish this editor experience, it's a best practice to assign custom icons for templates to make them easier to differentiate. You can do this by setting the `icon` property:

```javascript
// sanity.config.js|ts
import {defineConfig} from 'sanity'
import {CogIcon} from '@sanity/icons'

export default defineConfig({
  // ...rest of config
  schema: {
    templates: (prev) => [
      ...prev,
      {
      icon: CogIcon,
      id: 'person-developer',
      title: 'Developer',
      schemaType: 'person',
      value: {
        role: 'developer'
      },
    },
	],
})
```

## Inserting objects or references as default values

Fields that are object types (or is a reference to another document) have a few rules that you need to keep in mind:

- In instances of nested objects, it's necessary to include a `_type` property to define what schema type to reference. For instance, if inserting a `geopoint`, you will set the field value to:
  `{_type: 'geopoint', lat: 59.92409, lng: 10.7584}`
- To create a Reference initial value, the `_ref` property must be defined. This means that if you want to reference a specific document, you need to provide that document's ID as the value for `_ref`. `{_ref: 'document-id-to-reference'}`
- [Images](https://www.sanity.io/docs/image-type) and [files](https://www.sanity.io/docs/file-type) are represented as objects with a nested `asset` field (which is a reference to the actual asset document). Combining the two points above, the default value for an image field would look something like this:
  `{_type: 'image', asset: {_type: 'reference', _ref: 'image-someId-200x300-jpg'}}`
- While objects in arrays should generally have a `_key` property, the initial value system will generate the `_key` property if it is not included in the provided value (using a randomly generated string).

## Resolving initial values asynchronously

The initial value can also be specified as an asynchronous function (a function returning a promise). This allows exciting things like running a request to an API to get data needed for the initial value. For instance:

```javascript
import axios from 'axios'

export default {
  // ...
  initialValue: async () => {
    const response = await axios.get('https://api.sanity.io/pets')
    return {favoritePetName: response.data[0].name}
  }
}
```

## Parameterized templates

A common use case is to populate fields based on a set of parameters. You can do this by defining a `parameters` array for your template. By defining the `value` property as a function, you'll get the parameters passed to the template as the argument to the function. Each item in the `parameters` array follows the same declaration as fields within a schema object type:

```javascript
// sanity.config.js|ts
import {defineConfig} from 'sanity'

export default defineConfig({
  //...rest of config
  schema: {
    templates: [
      {
        id: 'person-role',
        title: 'Person with role',
        schemaType: 'person',
        parameters: [
          {
            name: 'roleName',
            title: 'Role name',
            type: 'string',
          },
        ],
        value: (parameters) => ({
          role: parameters.roleName,
        }),
      },
    ],
  },
})

```

> \[!WARNING]
> Parameterized templates are only supported in Structure
> You can only use parameterized templates in Structure. They will not work as expected in other parts of the Studio UI.

## Using templates in a structure

When defining your structure for the Structure tool (using the [Structure Builder](https://www.sanity.io/docs/overview-structure-builder)), a common use case is creating filtered document lists. In these cases, you probably want the **new document** action to not start with a totally empty document but have pre-populated values that match the user is current structure.

In a dataset containing many books and their related authors, you may want to segment the books by author. To do this, you might create a structure that looks like this:

```javascript
// structure.js

export const structure = (S) =>
  S.list()
  .id('root')
  .title('Content')
  .items([
    S.listItem({
      id: 'books-by-author',
      title: 'Books by author',
      schemaType: 'book',
      child: () =>
        S.documentTypeList('author').child(authorId =>
          S.documentTypeList('book')
            .title('Books by author')
            .filter('_type == $type && author._ref == $authorId')
            .params({type: 'book', authorId})
        )
    }),
    ...S.documentTypeListItems()
  ])
```

This satisfies the navigation part, but it doesn’t select the author we want when creating a new document. For this to work, we need to first create a parameterized initial value template, then tell the structure to use it. Let’s first define the initial value template. In your `sanity.config.js`:

```javascript
// sanity.config.js|ts
import {defineConfig} from 'sanity'
import {structure} from './structure'

export default defineConfig({
 //...rest of config
  plugins: [
    structureTool({ structure }),
   ],
  schema: {
    templates: [
  		  {
      id: 'book-by-author',
      title: 'Book by author',
      description: 'Book by a specific author',
      schemaType: 'book',
      parameters: [{name: 'authorId', type: 'string'}],
      value: params => ({
        author: {_type: 'reference', _ref: params.authorId}
      })
    }
	],
 },
})
```

Now let’s use it in our structure:

```javascript
// structure.js

export const structure = (S) =>
  S.list()
  .id('root')
  .title('Content')
  .items([
    S.listItem({
      id: 'books-by-author',
      title: 'Books by author',
      schemaType: 'book',
      child: () =>
        S.documentTypeList('author').child(authorId =>
          S.documentTypeList('book')
            .title('Books by author')
            .filter('_type == $type && author._ref == $authorId')
            .params({type: 'book', authorId})
            .initialValueTemplates([
              S.initialValueTemplateItem('book-by-author', {authorId})
            ])
        )
    }),
    ...S.documentTypeListItems()
  ])
```

Note how we’re defining which initial value templates should be valid in this context: by specifying just a single template, that is the only template valid in this context and will be used. If you specify multiple templates, you will get a choice of which template to use. The second argument to `S.initialValueTemplateItem()` is a set of parameters – in this case, we're passing the `authorId` from the parent pane as a parameter.

> \[!TIP]
> Removing + document buttons
> When using the `.initialValueTemplates` method, you can set it's value to an empty array to remove the "+" button from appearing in structure builder. This is useful for sections where you only want to display documents, but not create them. For example: `.initialValueTemplates([])`.
