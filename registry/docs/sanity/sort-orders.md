# Sort Orders

When displaying a collection of documents it's useful to be able to sort the collection by different fields. You do this by specifying an `orderings` property in the schema:

```javascript
{
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
    },
    {
      title: 'Popularity',
      name: 'popularity',
      type: 'number'
    }
  ],
  orderings: [
    {
      title: 'Release Date, New',
      name: 'releaseDateDesc',
      by: [
        {field: 'releaseDate', direction: 'desc'}
      ]
    },
    {
      title: 'Release Date, Old',
      name: 'releaseDateAsc',
      by: [
        {field: 'releaseDate', direction: 'asc'}
      ]
    },
    {
      title: 'Popularity',
      name: 'popularityDesc',
      by: [
        {field: 'popularity', direction: 'desc'}
      ]
    }
  ]
}
```

The `orderings` above define a list of possible ways to order a collection of movies. To the user these appear as options in the Studio when the movies are listed, with each object in `orderings` being its own sort option (one can sort by `Release Date, New` OR `Release Date, Old` OR `Popularity`).

## Default sort orders

If no sort orders are defined, Sanity will do its best to guess what fields would make sense to sort by.

When no ordering is specified:

- If the document type has *string* fields named `title`, `name`, `label`, `heading`, `header`, `caption` or `description`, we enable options to order by all of these.
- If your type has no fields named any of the above, we will generate ordering configs for *all* fields of primitive types, that is fields of type `string`, `number`, or `boolean`.

If you specify your own ordering, we skip the default heuristics above.

## Null ordering

You can control when null/undefined values appear in results with the `nulls` option.

Defaults are unchanged and still:

- `desc` -> nulls `first`
- `asc` -> nulls `last`

```typescript
defineType({
  name: 'book',
  type: 'document',
  orderings: [
    {
      title: 'Publication year',
      name: 'publicationYear',
      by: [
        {
          field: 'publicationYear',
          direction: 'desc',
          nulls: 'last' // or 'first'
        }
      ],
    },
  ],
  // ...
})
```

Note that overriding the default may have performance implications and negatively impact loading times for document types with lots of documents.
