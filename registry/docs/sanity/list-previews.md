# List Previews

Sanity Studio will often need to render a compact representation of a document or object for list views and similar situations, and we call this a *list preview*. You can decide which fields should be used and how by configuring the `preview` property ([PreviewConfig](https://reference.sanity.io/sanity/index/PreviewConfig/)) on schema types. By default, Sanity Studio tries to guess which fields should be used for preview by introspecting the type's defined fields. For example, if your type has a field of type `string` named `title`, it will infer that this should be used as the title when previewing values of this type.

Sanity Studio offers two ways of customizing how documents and objects are previewed:

1. Specify preview options for the type in the schema for lists and arrays to use automatically
2. Implement a custom preview component to display when used as block content in the Portable Text Editor

> \[!TIP]
> Protip
> Looking to create previews inside of the document pane? Read more on [creating custom content previews](https://www.sanity.io/blog/evolve-authoring-experiences-with-views-and-split-panes) inside split panes with the Structure Builder API.
> For previews of content presentation in front ends, go to [the documentation for Visual Editing and Presentation](https://www.sanity.io/docs/visual-editing/introduction-to-visual-editing).

## Configuring preview options

Normally, a list preview has three "slots": title, subtitle, and media. If you want to specify which fields should be used for what, you can control this by adding a `preview` key to the type defined in the schema. For example:

```javascript
export default {
  name: 'movie',
  type: 'document',
  fields: [
    {
      title: 'Title',
      name: 'title',
      type: 'string'
    },
    {
      title: 'Release Date',
      name: 'releaseDate',
      type: 'date'
    }
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'releaseDate'
    }
  }
}
```

Above, the `preview.select` object will inform the Sanity Studio preview logic that for this document, `movie.title` should be used as `title` and `movie.releaseDate` should be used as `subtitle`.

This might be sufficient in many cases, but sometimes, you want to reformat the selected values. With the `prepare` function, you can access the values that you have selected and customize them.

Say we only want the year for `releaseDate` (e.g., 2016-04-25):

```javascript
export default {
  name: 'movie',
  type: 'document',
  fields: [
    {
      title: 'Title',
      name: 'title',
      type: 'string'
    },
    {
      title: 'Release Date',
      name: 'releaseDate',
      type: 'datetime'
    }
  ],
  preview: {
    select: {
      title: 'title',
      date: 'releaseDate'
    },
    prepare(selection) {
      const {title, date} = selection
      return {
        title: title,
        subtitle: new Date(date).getFullYear() // YYYY-MM-DD --> YYYY
      }
    }
  }
}
```

Above, `title` and `releaseDate` are selected. The result of this selection is passed to the `prepare` function, where you can transform the selection however you like (only keeping the year, in this case).

> \[!TIP]
> Protip
> In these examples we have put the preview object after the `fields` array, however you can also place it before it. This might give you a better idea at first glance of how the document is previewed.

## Show custom previews for different sort orders

The `prepare` function receives, in addition to the chosen selection of fields, a `viewOptions` object which contains the sort order setting for the current document list pane. This can be used to display different previews for different sort orders.

```
export default {
  name: 'movie',
  type: 'document',
  fields: [
    {
      title: 'Title',
      name: 'title',
      type: 'string'
    },
    {
      name: 'genre',
      title: 'Genre',
      type: 'string',
      options: {
        list: [
          { title: 'Action', value: 'action' },
          { title: 'Adventure', value: 'adventure' },
          { title: 'Comedy', value: 'comedy' },
          { title: 'Drama', value: 'drama' },
          { title: 'Fantasy', value: 'fantasy' },
        ]
      }
    },
    {
      title: 'Release Date',
      name: 'releaseDate',
      type: 'datetime'
    }
  ],
  preview: {
    select: {
      title: 'title',
      genre: 'genre',
      releaseDate: 'releaseDate'
    },
    prepare({title, genre, releaseDate}, viewOptions) {
      const sortedByDate = viewOptions?.ordering?.some(o => o.field === 'releaseDate')
      return {
        title: title,
        subtitle: sortedByDate ? releaseDate?.toLocaleDateString() : genre
      }
    }
  }
}
```

## Preview using fields from referenced documents

You can follow references by using dot notation to the related document field you want to display in `preview.select`. Note that using GROQ joins *is not supported* here (it’s what the Studio will do under the hood).

Here's an example of a preview for a movie document where the `director` field is a reference, and the referenced document has a `name` field:

```javascript
export const movie = {
  name: 'movie',
  type: 'document',
  fields: [
    //...other fields
    {
      name: 'director',
      type: 'reference',
      to: [{ type: 'person' }]
    }
  ],
  preview: {
    select: {
      title: 'title',
      director: 'director.name' // if the movie has a director, follow the reference and get the name
    },
    prepare(selection) {
      const {title, director} = selection
      return {
        title: title,
        subtitle: `Directed by: ${director ? director : 'unknown'}`
      }
    }
  }
}
```

## Previewing from predefined string lists

When using a [predefined list of strings](https://www.sanity.io/docs/studio/string-type), you can use objects with `title` and `value` keys. This might be useful if you're using a list of U.S. states, for example: The `title` can be the spelled-out state, while the `value` can be a two-letter state code:

```javascript
{
  title: 'U.S. State',
  name: 'state',
  type: 'string',
  options: {
    list: [
      { "title": "Alabama", "value": "AL"},
      { "title": "Alaska", "value": "AK"},
      { "title": "Arizona", "value": "AZ"},
      // ...
    ],
    layout: 'dropdown'
  }
}
```

If you wish to use that value in your preview, Sanity will default to providing the `title`—*unless you use a *`prepare()`* function*. In that case, the `value` (and *only* the `value`) will be passed along to `prepare()`.

If you want to render the `title` in your document preview but need to manipulate it in some way (which is done using `prepare()`, as seen in the [second example above](https://www.sanity.io#770fd57a8f95)), you can specify your list outside of the schema, use it as your list in `options.list`, and then consult that list in your `prepare()` function. This is best explained via an example:

```javascript
const STATES = [
  { "title": "Alabama", "value": "AL"},
  { "title": "Alaska", "value": "AK"},
  { "title": "Arizona", "value": "AZ"},
  // ...
]

export default {
  // ...
  fields: [
    // ...
    {
      name: "state",
      title: "U.S. State",
      type: "string",
      options: {
        list: STATES,
        layout: "dropdown",
      },
    }
  ],
  preview: {
    select: {
      state: 'state',
    },
    prepare: ({ state }) => {
      const stateName = state && STATES.flatMap(option => option.value === state ? [option.title] : [])
      return {
        title: state ? `${state} is ${stateName}` : 'No state selected',
      }
    }
  }
}
```

## Previewing from array values

Fetching entire arrays of values can potentially result in large and complex responses, especially in the case of large arrays. We encourage you only to select a subset of the array values:

```javascript
export default {
  name: 'book',
  type: 'document',
  fields: [...],
  preview: {
    select: {
      title: 'title',
      author0: 'authors.0.name', // <- authors.0 is a reference to author, and the preview component will automatically resolve the reference and return the name
      author1: 'authors.1.name',
      author2: 'authors.2.name',
      author3: 'authors.3.name'
    },
    prepare: ({title, author0, author1, author2, author3}) => {
      const authors = [author0, author1, author2].filter(Boolean)
      const subtitle = authors.length > 0 ? `by ${authors.join(', ')}` : ''
      const hasMoreAuthors = Boolean(author3)
      return {
        title,
        subtitle: hasMoreAuthors ? `${subtitle}…` : subtitle
      }
    }
  }
}
```

> \[!WARNING]
> Gotcha
> Resolving references in arrays works the same as covered above, with dot notation.

## Selecting an image field to use for the thumbnail

The easiest way to show an image in the preview is to assign a field containing an image to the `media` property. The different views take care of a proper rendering of the image, including any `hotspot` and `crop` specifics.

```javascript
export default {
  name: 'person',
  type: 'document',
  fields: [...],
  preview: {
    select: {
      title: 'name',
      media: 'userPortrait' // Use the userPortait image field as thumbnail
    }
  }
}
```

## Rendering React components

You can also use JSX to render a thumbnail. Here's an example of how to show specific emojis based on the status of our document. This example is partly taken from our [Community Studio](https://www.sanity.io/blog/how-we-manage-community-support-with-sanity).

```jsx
// src/schemaTypes/ticket.jsx

export const ticket = {
  name: 'ticket',
  type: 'document',
  fields: [...],
  preview: {
    select: {
      title: 'title',
      summary: 'summary',
      status: 'status'
    },
    prepare({ title, summary, status }) {
      const EMOJIS = {
        open: '🎫',
        resolved: '✅',
        cancelled: '🚫'
      }
      return {
        title: title,
        subtitle: summary,
        media: <span style={{fontSize: '1.5rem'}}>{status ? EMOJIS[status] : '🎫'}</span>
      }
    }
  }
}
```

## Custom preview component

If you want complete control of how the document or object list preview is rendered, you can also provide a React component invoked when the document or object is previewed in that context.

> \[!WARNING]
> Gotcha
> Custom preview components will only display in lists that appear inside the document pane—not in the top-level Structure tool document list.

To learn more about this option, visit the [article on form components](https://www.sanity.io/docs/studio/form-components).

## Preview in the Studio

Depending on how your schema is set up, here is an example of how `Preview` could look in your Studio. This uses `title`, `subtitle`, and `media`.

![View of Preview in the Studio](https://cdn.sanity.io/images/3do82whm/next/9fc7748d46db973027e0cce787cadc8f5661f23c-1152x700.png)

## Form preview title

![The form title preview displaying "They Are Gutting a Body of Water — Lucky Styles (2022, Smoking Room)](https://cdn.sanity.io/images/3do82whm/next/3013ebad552fa130fb391387d396f47e22e7ea82-1362x560.png)

Since v3.24.1, Sanity Studio has also rendered a large title in the document form to make it easier to discern which document you are currently in. It shares the logic with list previews, looking for a `preview` configuration and returning to the inferred preview title. In cases you don't wish to have this title, you can turn it off:

```typescript
// src/schemaTypes/location.ts

export const location = {
  name: 'location',
  title: 'Location',
  type: 'document',
  __experimental_formPreviewTitle: false,
  fields: [
    //..fields
  ],
}
```
