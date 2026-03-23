# Stega encoding

Stega (from “steganography) is an encoding method developed by Sanity in collaboration with Vercel that allows metadata mappings to be embedded into an application. It encodes [Content Source Maps](https://www.sanity.io/docs/visual-editing/content-source-maps), a standard for annotating fragments in a JSON document with metadata about their origin.

With Stega enabled, data rendered in your application looks the same but contains invisible metadata that Sanity's Visual Editing tooling can detect. This enables click-to-edit overlays directly in your application without requiring you to manually set up mapping for components.

> \[!WARNING]
> Gotcha
> Stega encoding adds additional data to your strings in preview mode. The trade-off is that if you use these strings in business logic, your application might act differently in preview mode. You can use [helper functions](https://reference.sanity.io/_sanity/client/stega/stegaClean/) to clean out Stega-encoding before passing them to non-component contexts.

[Introduction to Visual Editing](https://www.sanity.io/docs/visual-editing/introduction-to-visual-editing)

[Overlays](https://www.sanity.io/docs/visual-editing/visual-editing-overlays)

[Using Stega with Sanity Client](https://github.com/sanity-io/client?tab=readme-ov-file#using-visual-editing-with-steganography)

## How Stega works

Stega-encoding takes the [Content Source Maps](https://www.sanity.io/docs/visual-editing/content-source-maps) JSON and encodes it into invisible UTF-8 encoded characters that are appended to a string value. The Visual Editing tooling can pick this up, decode it, and use for the click-to-edit functionality:

```json
Oxford Shoes&ZeroWidthSpace;&ZeroWidthSpace;&ZeroWidthSpace;&ZeroWidthSpace;&zwnj;&#xFEFF;&zwj;&#xFEFF;&ZeroWidthSpace;&zwj;&ZeroWidthSpace;&zwj;&zwnj;&zwj;&#xFEFF;&#xFEFF;&zwnj;&#xFEFF;&ZeroWidthSpace;&zwj;&zwnj;&zwj;&zwj;&zwnj;&zwnj;&zwj;&zwnj;&#xFEFF;&zwnj;&zwj;&zwj;&zwnj;&zwnj;&zwj;&#xFEFF;&zwj;&ZeroWidthSpace;&zwj;&ZeroWidthSpace;&zwj;&ZeroWidthSpace;&#xFEFF;&zwj;&zwj;&ZeroWidthSpace;&zwj;&ZeroWidthSpace;&zwj;&zwnj;&#xFEFF;&ZeroWidthSpace;&#xFEFF;&zwnj;&zwj;&ZeroWidthSpace;&zwnj;&zwnj;&zwj;&#xFEFF;&zwj;&zwnj;&zwj;&zwj;&zwnj;&zwnj;&#xFEFF;&zwnj;&ZeroWidthSpace;&zwnj;&#xFEFF;&zwj;&zwnj;&ZeroWidthSpace;&zwj;&#xFEFF;&zwj;&zwnj;&zwj;&zwj;&zwnj;&zwnj;&zwj;&#xFEFF;&#xFEFF;&ZeroWidthSpace;&zwj;&ZeroWidthSpace;&zwj;&ZeroWidthSpace;&zwj;&#xFEFF;&ZeroWidthSpace;&ZeroWidthSpace;&zwj;&ZeroWidthSpace;&zwj;&zwnj;&zwj;&zwj;&ZeroWidthSpace;&zwnj;&#xFEFF;&ZeroWidthSpace;&zwj;&zwnj;&zwj;&zwnj;&zwnj;&zwnj;&zwj;&zwnj;&zwj;&ZeroWidthSpace;&zwj;&ZeroWidthSpace;&zwj;&ZeroWidthSpace;&#xFEFF;&zwj;&zwj;&ZeroWidthSpace;&zwj;&ZeroWidthSpace;&zwj;&zwnj;&zwj;&zwj;&ZeroWidthSpace;&zwnj;&#xFEFF;&zwnj;&ZeroWidthSpace;&zwnj;&#xFEFF;&zwnj;&ZeroWidthSpace;&zwnj;&#xFEFF;&ZeroWidthSpace;&ZeroWidthSpace;&zwnj;&#xFEFF;&ZeroWidthSpace;&#xFEFF;&ZeroWidthSpace;&#xFEFF;&zwj;&zwj;&ZeroWidthSpace;&zwj;&#xFEFF;&#xFEFF;&ZeroWidthSpace;&zwj;&#xFEFF;&#xFEFF;&zwnj;&#xFEFF;&zwnj;&zwj;&zwnj;&zwj;&zwj;&zwnj;&zwnj;&#xFEFF;&ZeroWidthSpace;&#xFEFF;&zwnj;&#xFEFF;&zwnj;&zwnj;&zwnj;&zwj;&ZeroWidthSpace;&zwnj;&zwnj;&zwj;&#xFEFF;&ZeroWidthSpace;&ZeroWidthSpace;&zwj;&#xFEFF;&zwnj;&zwnj;&zwj;&zwnj;&zwnj;&zwnj;&zwj;&zwnj;&ZeroWidthSpace;&zwnj;&zwj;&zwj;&zwnj;&zwnj;&#xFEFF;&zwnj;&ZeroWidthSpace;&zwnj;&zwj;&zwj;&zwnj;&zwnj;&zwj;&#xFEFF;&zwj;&zwnj;&zwj;&zwnj;&#xFEFF;&ZeroWidthSpace;&zwj;&#xFEFF;&zwnj;&zwnj;&#xFEFF;&ZeroWidthSpace;&#xFEFF;&zwnj;&#xFEFF;&zwnj;&ZeroWidthSpace;&zwnj;&#xFEFF;&zwnj;&zwnj;&zwnj;&zwj;&zwnj;&ZeroWidthSpace;&zwnj;&zwj;&zwj;&zwnj;&zwnj;&zwj;&#xFEFF;&#xFEFF;&ZeroWidthSpace;&zwj;&#xFEFF;&zwj;&zwnj;&#xFEFF;&ZeroWidthSpace;&#xFEFF;&zwnj;&zwj;&ZeroWidthSpace;&zwnj;&zwnj;&zwj;&#xFEFF;&zwj;&zwnj;&zwj;&zwj;&zwnj;&zwnj;&#xFEFF;&zwnj;&ZeroWidthSpace;&zwnj;&#xFEFF;&zwj;&zwnj;&ZeroWidthSpace;&zwj;&#xFEFF;&zwj;&zwnj;&zwj;&ZeroWidthSpace;&zwj;&zwnj;&#xFEFF;&zwnj;&zwnj;&zwnj;&zwj;&zwj;&zwnj;&zwnj;&zwj;&#xFEFF;&ZeroWidthSpace;&zwnj;&zwj;&zwnj;&ZeroWidthSpace;&ZeroWidthSpace;&zwj;&#xFEFF;&#xFEFF;&zwnj;&#xFEFF;&ZeroWidthSpace;&zwj;&zwnj;&zwj;&zwnj;&zwnj;&zwnj;&zwj;&#xFEFF;&zwnj;&zwnj;&zwj;&zwj;&zwnj;&zwnj;&#xFEFF;&zwj;&ZeroWidthSpace;&ZeroWidthSpace;&zwj;&#xFEFF;&#xFEFF;&zwnj;&zwj;&zwj;&zwnj;&zwnj;&zwj;&#xFEFF;&zwj;&zwnj;&#xFEFF;&zwnj;&ZeroWidthSpace;&zwnj;&zwj;&zwnj;&zwnj;&zwnj;&zwj;&#xFEFF;&zwj;&zwnj;&#xFEFF;&zwnj;&ZeroWidthSpace;&ZeroWidthSpace;&zwj;&#xFEFF;&#xFEFF;&zwnj;&zwj;&zwnj;&zwnj;&zwnj;&zwj;&zwnj;&ZeroWidthSpace;&zwnj;&zwj;&zwj;&zwnj;&zwnj;&#xFEFF;&zwnj;&ZeroWidthSpace;&ZeroWidthSpace;&zwj;&#xFEFF;&#xFEFF;&zwnj;&zwj;&#xFEFF;&zwnj;&zwnj;&zwj;&#xFEFF;&#xFEFF;&zwnj;&zwj;&zwnj;&ZeroWidthSpace;&zwnj;&zwj;&zwnj;&zwnj;&ZeroWidthSpace;&#xFEFF;&#xFEFF;&zwnj;&zwnj;&#xFEFF;&ZeroWidthSpace;&ZeroWidthSpace;&zwnj;&#xFEFF;&ZeroWidthSpace;&zwj;&zwnj;&zwj;&zwnj;&zwnj;&zwnj;&#xFEFF;&ZeroWidthSpace;&#xFEFF;&zwnj;&zwj;&zwnj;&zwnj;&zwnj;&zwj;&#xFEFF;&zwj;&zwnj;&#xFEFF;&zwnj;&ZeroWidthSpace;&zwnj;&zwj;&ZeroWidthSpace;&zwnj;&zwnj;&#xFEFF;&zwnj;&ZeroWidthSpace;&zwnj;&zwj;&zwj;&zwnj;&zwnj;&zwj;&#xFEFF;&#xFEFF;&zwnj;&zwj;&#xFEFF;&zwj;&ZeroWidthSpace;&#xFEFF;&zwj;&#xFEFF;&zwnj;&zwj;&zwj;&zwnj;&zwnj;&zwj;&zwnj;&ZeroWidthSpace;&ZeroWidthSpace;&#xFEFF;&#xFEFF;&zwnj;&zwnj;&zwj;&ZeroWidthSpace;&zwj;&ZeroWidthSpace;&#xFEFF;&zwj;&zwnj;&ZeroWidthSpace;&#xFEFF;&zwnj;&zwnj;&ZeroWidthSpace;&#xFEFF;&zwnj;&zwj;&zwnj;&zwj;&ZeroWidthSpace;&#xFEFF;&zwnj;&zwj;&zwnj;&zwj;&ZeroWidthSpace;&#xFEFF;&zwnj;&#xFEFF;&zwnj;&zwj;&ZeroWidthSpace;&zwj;&ZeroWidthSpace;&zwj;&#xFEFF;&zwnj;&zwnj;&zwj;&ZeroWidthSpace;&zwnj;&ZeroWidthSpace;&#xFEFF;&zwnj;&#xFEFF;&zwnj;&zwj;&ZeroWidthSpace;&zwj;&ZeroWidthSpace;&#xFEFF;&zwnj;&#xFEFF;&ZeroWidthSpace;&zwj;&#xFEFF;&zwnj;&ZeroWidthSpace;&#xFEFF;&zwnj;&ZeroWidthSpace;&zwnj;&zwj;&zwnj;&zwnj;&ZeroWidthSpace;&#xFEFF;&zwnj;&zwnj;&ZeroWidthSpace;&#xFEFF;&zwnj;&zwj;&ZeroWidthSpace;&zwj;&#xFEFF;&zwnj;&zwnj;&zwj;&ZeroWidthSpace;&zwnj;&ZeroWidthSpace;&#xFEFF;&ZeroWidthSpace;&zwnj;&ZeroWidthSpace;&#xFEFF;&zwnj;&zwj;&zwnj;&zwj;&zwnj;&zwj;&ZeroWidthSpace;&zwj;&#xFEFF;&zwnj;&zwnj;&zwj;&ZeroWidthSpace;&zwj;&zwnj;&zwj;&ZeroWidthSpace;&zwnj;&zwnj;&zwj;&zwnj;&ZeroWidthSpace;&ZeroWidthSpace;&#xFEFF;&zwj;&ZeroWidthSpace;&zwnj;&zwj;&zwnj;&zwnj;&zwnj;&zwj;&zwnj;&zwnj;&ZeroWidthSpace;&#xFEFF;&ZeroWidthSpace;&#xFEFF;&ZeroWidthSpace;&#xFEFF;&zwj;&zwnj;&ZeroWidthSpace;&#xFEFF;&ZeroWidthSpace;&zwj;&zwnj;&zwj;&zwnj;&zwnj;&ZeroWidthSpace;&#xFEFF;&ZeroWidthSpace;&#xFEFF;&ZeroWidthSpace;&#xFEFF;&zwnj;&ZeroWidthSpace;&ZeroWidthSpace;&#xFEFF;&zwj;&#xFEFF;&zwnj;&#xFEFF;&zwnj;&ZeroWidthSpace;&zwnj;&#xFEFF;&zwj;&zwnj;&zwnj;&#xFEFF;&ZeroWidthSpace;&ZeroWidthSpace;&zwnj;&zwj;&zwnj;&zwnj;&ZeroWidthSpace;&#xFEFF;&#xFEFF;&zwnj;&zwnj;&#xFEFF;&ZeroWidthSpace;&#xFEFF;&zwnj;&zwj;&zwj;&ZeroWidthSpace;&zwnj;&zwj;&#xFEFF;&#xFEFF;&zwnj;&zwj;&zwnj;&zwnj;&ZeroWidthSpace;&#xFEFF;&zwj;&#xFEFF;&zwnj;&#xFEFF;&ZeroWidthSpace;&ZeroWidthSpace;&zwnj;&zwj;&ZeroWidthSpace;&zwnj;&zwnj;&#xFEFF;&zwnj;&ZeroWidthSpace;&zwnj;&zwj;&zwj;&ZeroWidthSpace;&ZeroWidthSpace;&#xFEFF;&#xFEFF;&zwnj;&zwnj;&#xFEFF;&zwnj;&ZeroWidthSpace;&zwnj;&zwj;&zwj;&zwnj;&zwnj;&#xFEFF;&zwnj;&ZeroWidthSpace;&zwnj;&zwj;&#xFEFF;&ZeroWidthSpace;&zwnj;&zwj;&zwnj;&zwnj;&ZeroWidthSpace;&#xFEFF;&zwj;&#xFEFF;&zwnj;&#xFEFF;&zwnj;&ZeroWidthSpace;&zwnj;&zwj;&#xFEFF;&#xFEFF;&zwnj;&zwj;&#xFEFF;&#xFEFF;&zwnj;&zwj;&#xFEFF;&ZeroWidthSpace;&ZeroWidthSpace;&#xFEFF;&#xFEFF;&zwnj;&zwnj;&#xFEFF;&ZeroWidthSpace;&ZeroWidthSpace;&zwnj;&#xFEFF;&ZeroWidthSpace;&zwj;&zwnj;&zwj;&zwnj;&zwnj;&zwnj;&#xFEFF;&ZeroWidthSpace;&#xFEFF;&zwnj;&zwj;&zwnj;&zwnj;&zwnj;&zwj;&#xFEFF;&zwj;&zwnj;&#xFEFF;&zwnj;&ZeroWidthSpace;&zwnj;&zwj;&ZeroWidthSpace;&zwnj;&zwnj;&#xFEFF;&zwnj;&ZeroWidthSpace;&zwnj;&zwj;&zwj;&zwnj;&zwnj;&zwj;&#xFEFF;&#xFEFF;&zwnj;&zwj;&#xFEFF;&zwj;&ZeroWidthSpace;&#xFEFF;&#xFEFF;&#xFEFF;&zwnj;&zwj;&ZeroWidthSpace;&zwj;&zwnj;&zwj;&ZeroWidthSpace;&zwnj;&zwnj;&#xFEFF;&ZeroWidthSpace;&#xFEFF;&zwnj;&zwj;&zwnj;&zwnj;&zwnj;&zwnj;&zwnj;&zwnj;&zwnj;&#xFEFF;&ZeroWidthSpace;&zwj;&zwnj;&zwj;&#xFEFF;&ZeroWidthSpace;&ZeroWidthSpace;&#xFEFF;&#xFEFF;&zwnj;&zwnj;&zwj;&zwj;&ZeroWidthSpace;&zwnj;&#xFEFF;&zwnj;&ZeroWidthSpace;&zwnj;&#xFEFF;&zwnj;&ZeroWidthSpace;&zwnj;&#xFEFF;&ZeroWidthSpace;&ZeroWidthSpace;&zwnj;&#xFEFF;&ZeroWidthSpace;&#xFEFF;&ZeroWidthSpace;&zwj;&zwnj;&zwnj;&ZeroWidthSpace;&#xFEFF;&ZeroWidthSpace;&#xFEFF;&zwnj;&ZeroWidthSpace;&ZeroWidthSpace;&zwnj;&ZeroWidthSpace;&zwj;&zwnj;&zwnj;&ZeroWidthSpace;&#xFEFF;&ZeroWidthSpace;&zwj;&zwnj;&ZeroWidthSpace;&zwnj;&zwj;&ZeroWidthSpace;&zwj;&zwnj;&zwnj;&ZeroWidthSpace;&#xFEFF;&ZeroWidthSpace;&zwj;&zwnj;&ZeroWidthSpace;&zwnj;&zwj;&zwnj;&#xFEFF;&zwnj;&zwj;&zwnj;&zwj;&zwj;&zwnj;&zwnj;&#xFEFF;&ZeroWidthSpace;&#xFEFF;&zwnj;&#xFEFF;&zwnj;&zwnj;&zwnj;&zwj;&ZeroWidthSpace;&zwnj;&zwnj;&zwj;&#xFEFF;&ZeroWidthSpace;&ZeroWidthSpace;&zwj;&#xFEFF;&zwnj;&zwnj;&zwj;&zwnj;&zwnj;&zwnj;&zwj;&zwnj;&ZeroWidthSpace;&zwnj;&zwj;&zwj;&zwnj;&zwnj;&#xFEFF;&zwnj;&ZeroWidthSpace;&zwnj;&zwj;&zwj;&zwnj;&zwnj;&zwj;&#xFEFF;&zwj;&zwnj;&zwj;&zwnj;&#xFEFF;&ZeroWidthSpace;&zwj;&#xFEFF;&zwnj;&zwnj;&#xFEFF;&ZeroWidthSpace;&#xFEFF;&zwnj;&#xFEFF;&zwnj;&ZeroWidthSpace;&zwnj;&#xFEFF;&zwnj;&zwnj;&zwnj;&zwj;&zwnj;&ZeroWidthSpace;&zwnj;&zwj;&zwj;&zwnj;&zwnj;&zwj;&#xFEFF;&#xFEFF;&ZeroWidthSpace;&zwj;&#xFEFF;&zwj;&zwnj;&#xFEFF;&ZeroWidthSpace;&#xFEFF;&zwnj;&zwj;&ZeroWidthSpace;&zwnj;&zwnj;&zwj;&#xFEFF;&zwj;&zwnj;&zwj;&zwj;&zwnj;&zwnj;&#xFEFF;&zwnj;&ZeroWidthSpace;&zwnj;&#xFEFF;&zwj;&zwnj;&ZeroWidthSpace;&zwj;&#xFEFF;&zwj;&zwnj;&zwj;&ZeroWidthSpace;&zwj;&zwnj;&#xFEFF;&zwnj;&zwnj;&zwnj;&zwj;&zwj;&zwnj;&zwnj;&zwj;&#xFEFF;&ZeroWidthSpace;&zwnj;&zwj;&zwnj;&ZeroWidthSpace;&ZeroWidthSpace;&zwj;&zwnj;&zwj;&zwnj;&zwj;&zwj;&zwnj;&zwnj;&zwj;&zwnj;&ZeroWidthSpace;&ZeroWidthSpace;&#xFEFF;&#xFEFF;&zwnj;&zwnj;&zwj;&ZeroWidthSpace;&zwj;&ZeroWidthSpace;&#xFEFF;&zwj;&zwnj;&ZeroWidthSpace;&#xFEFF;&zwnj;&zwnj;&ZeroWidthSpace;&#xFEFF;&zwnj;&zwj;&zwnj;&zwj;&ZeroWidthSpace;&#xFEFF;&zwnj;&zwj;&zwnj;&zwj;&ZeroWidthSpace;&#xFEFF;&zwnj;&#xFEFF;&zwnj;&zwj;&ZeroWidthSpace;&zwj;&ZeroWidthSpace;&zwj;&#xFEFF;&zwnj;&zwnj;&zwj;&ZeroWidthSpace;&zwnj;&ZeroWidthSpace;&#xFEFF;&zwnj;&#xFEFF;&zwnj;&zwj;&ZeroWidthSpace;&zwj;&ZeroWidthSpace;&#xFEFF;&zwnj;&#xFEFF;&ZeroWidthSpace;&zwj;&#xFEFF;&zwnj;&ZeroWidthSpace;&#xFEFF;&zwnj;&ZeroWidthSpace;&zwnj;&zwj;&zwnj;&zwnj;&ZeroWidthSpace;&#xFEFF;&zwnj;&zwnj;&ZeroWidthSpace;&#xFEFF;&zwnj;&zwj;&ZeroWidthSpace;&zwj;&#xFEFF;&zwnj;&zwnj;&zwj;&ZeroWidthSpace;&zwnj;&ZeroWidthSpace;&#xFEFF;&ZeroWidthSpace;&zwnj;&ZeroWidthSpace;&#xFEFF;&zwnj;&zwj;&zwnj;&zwj;&zwnj;&zwj;&ZeroWidthSpace;&zwj;&#xFEFF;&zwnj;&zwnj;&zwj;&ZeroWidthSpace;&zwj;&zwnj;&zwj;&ZeroWidthSpace;&zwnj;&zwnj;&zwj;&zwnj;&ZeroWidthSpace;&ZeroWidthSpace;&#xFEFF;&zwj;&ZeroWidthSpace;&zwnj;&zwj;&zwnj;&zwnj;&zwnj;&zwj;&zwnj;&zwnj;&ZeroWidthSpace;&#xFEFF;&ZeroWidthSpace;&#xFEFF;&ZeroWidthSpace;&#xFEFF;&zwj;&zwnj;&ZeroWidthSpace;&#xFEFF;&ZeroWidthSpace;&zwj;&zwnj;&zwj;&zwnj;&zwnj;&ZeroWidthSpace;&#xFEFF;&ZeroWidthSpace;&#xFEFF;&ZeroWidthSpace;&#xFEFF;&zwnj;&ZeroWidthSpace;&ZeroWidthSpace;&zwj;&zwnj;&zwj;&zwnj;&#xFEFF;&zwnj;&ZeroWidthSpace;&zwnj;&#xFEFF;&zwj;&zwnj;&zwnj;&#xFEFF;&ZeroWidthSpace;&ZeroWidthSpace;&zwnj;&zwj;&zwnj;&zwnj;&ZeroWidthSpace;&#xFEFF;&#xFEFF;&zwnj;&zwnj;&#xFEFF;&ZeroWidthSpace;&#xFEFF;&zwnj;&zwj;&zwj;&ZeroWidthSpace;&zwnj;&zwj;&#xFEFF;&#xFEFF;&zwnj;&zwj;&zwnj;&zwnj;&ZeroWidthSpace;&zwj;&zwnj;&zwj;&zwnj;&#xFEFF;&ZeroWidthSpace;&ZeroWidthSpace;&zwnj;&zwj;&ZeroWidthSpace;&zwnj;&zwnj;&#xFEFF;&zwnj;&ZeroWidthSpace;&zwnj;&zwj;&zwj;&ZeroWidthSpace;&ZeroWidthSpace;&#xFEFF;&#xFEFF;&zwnj;&zwnj;&#xFEFF;&zwnj;&ZeroWidthSpace;&zwnj;&zwj;&zwj;&zwnj;&zwnj;&#xFEFF;&zwnj;&ZeroWidthSpace;&zwnj;&zwj;&#xFEFF;&ZeroWidthSpace;&zwnj;&zwj;&zwnj;&zwnj;&ZeroWidthSpace;&zwj;&zwnj;&zwj;&zwnj;&#xFEFF;&zwnj;&#xFEFF;&zwnj;&zwj;&#xFEFF;&#xFEFF;&zwnj;&#xFEFF;&ZeroWidthSpace;&zwj;&zwnj;&zwj;&zwj;&#xFEFF;&zwnj;&#xFEFF;&ZeroWidthSpace;&#xFEFF;&zwnj;&#xFEFF;&ZeroWidthSpace;&ZeroWidthSpace;&zwnj;&zwj;&ZeroWidthSpace;&zwnj;&zwnj;&zwj;&ZeroWidthSpace;&#xFEFF;&zwnj;&zwj;&zwnj;&zwnj;&ZeroWidthSpace;&#xFEFF;&#xFEFF;&zwnj;&zwnj;&#xFEFF;&ZeroWidthSpace;&zwj;&zwnj;&zwj;&zwnj;&zwnj;&zwnj;&zwj;&#xFEFF;&zwnj;&zwnj;&zwj;&zwj;&zwnj;&zwnj;&#xFEFF;&zwj;&ZeroWidthSpace;&ZeroWidthSpace;&zwj;&zwnj;&zwj;&zwnj;&#xFEFF;&zwnj;&ZeroWidthSpace;&zwnj;&zwj;&#xFEFF;&#xFEFF;&zwnj;&zwj;&#xFEFF;&#xFEFF;&zwnj;&zwj;&#xFEFF;&ZeroWidthSpace;&ZeroWidthSpace;&#xFEFF;&#xFEFF;&zwnj;&zwnj;&#xFEFF;&ZeroWidthSpace;&ZeroWidthSpace;&zwnj;&#xFEFF;&ZeroWidthSpace;&zwj;&zwnj;&zwj;&zwnj;&zwnj;&zwnj;&#xFEFF;&ZeroWidthSpace;&#xFEFF;&zwnj;&zwj;&zwnj;&zwnj;&zwnj;&zwj;&#xFEFF;&zwj;&zwnj;&#xFEFF;&zwnj;&ZeroWidthSpace;&zwnj;&zwj;&ZeroWidthSpace;&zwnj;&zwnj;&#xFEFF;&zwnj;&ZeroWidthSpace;&zwnj;&zwj;&zwj;&zwnj;&zwnj;&zwj;&#xFEFF;&#xFEFF;&zwnj;&zwj;&#xFEFF;&zwj;&ZeroWidthSpace;&zwj;&zwnj;&zwj;&zwnj;&zwj;&zwj;&zwnj;&zwnj;&#xFEFF;&ZeroWidthSpace;&#xFEFF;&zwnj;&ZeroWidthSpace;&zwnj;&ZeroWidthSpace;&zwnj;&#xFEFF;&ZeroWidthSpace;&zwj;&zwnj;&zwj;&ZeroWidthSpace;&zwnj;&zwnj;&zwj;&zwnj;&zwj;&zwnj;&#xFEFF;&zwnj;&ZeroWidthSpace;&ZeroWidthSpace;&#xFEFF;&#xFEFF;&zwnj;&ZeroWidthSpace;&zwj;&ZeroWidthSpace;&zwj;&zwnj;&#xFEFF;&#xFEFF;&zwnj;
```

## What is Content Source Maps?

[Content Source Maps](https://www.sanity.io/docs/visual-editing/content-source-maps) is a standard representation for annotating fragments in a JSON document with metadata about their origin: the field, document, and dataset they originated from. It provides a separate document alongside the content that adds the metadata without changing the original document's layout.

Content Source Maps enable annotating JSON documents with "source" metadata, allowing end users to navigate directly to the source to edit it. In the future, they will also enable the annotation of JSON documents with arbitrary metadata for other use cases.

The Content Source Map offers a standard method for representing the mapping between content values and their sources. Here is an example Content Source Map:

```json
{
  "documents": [
    {
      "_id": "author-1"
    },
    {
      "_id": "author-2"
    }
  ],
  "paths": ["$['name']"],
  "mappings": {
    "$[0]": {
      "type": "value",
      "source": {
        "type": "documentValue",
        "document": 0,
        "path": 0
      }
    },
    "$[1]": {
      "type": "value",
      "source": {
        "type": "documentValue",
        "document": 1,
        "path": 0
      }
    }
  }
}
```

## Additional client configuration options for handling Content Source Maps

### Log encoded paths to the console

The enhanced Sanity client accepts an optional `logger` parameter. Pass it the global `console`, to show debug information about which fields are being encoded and which (if any) are skipped.

```typescript
const client = createClient({
  projectId: '<projectId>',
  dataset: '<your-dataset>',
  apiVersion: '2022-05-03',
  useCdn: true,
  stega: {
    logger: console,
    studioUrl: '/studio',
  }
})
```

This should provide a nicely formatted report in your console, whether you are looking at your browser’s dev tools or your hosting's logs.

```
[@sanity/preview-kit]: Creating source map enabled client
[@sanity/preview-kit]: Stega encoding source map into result
  [@sanity/preview-kit]: Paths encoded: 3, skipped: 17
  [@sanity/preview-kit]: Table of encoded paths
  ┌─────────┬──────────────────────────────────┬───────────────────────────┬────────┐
  │ (index) │                     path         │           value           │ length │
  ├─────────┼──────────────────────────────────┼───────────────────────────┼────────┤
  │    0    │ ["footer",0,"children",0,"text"] │ '"The future is alrea...' │   67   │
  │    1    │ ["footer",1,"children",0,"text"] │     'Robin Williams'      │   14   │
  │    2    │             ["title"]            │     'Visual Editing'      │   14   │
  └─────────┴──────────────────────────────────┴───────────────────────────┴────────┘
  [@sanity/preview-kit]: List of skipped paths [
    [ 'footer', number, '_key' ],
    [ 'footer', number, 'children', number, '_key' ],
    [ 'footer', number, 'children', number, '_type' ],
    [ 'footer', number, '_type' ],
    [ 'footer', number, 'style' ],
    [ '_type' ],
    [ 'slug', 'current' ],
  ]
```

### Customizing which paths to encode

The [filter callback](https://reference.sanity.io/_sanity/client/index/StegaConfig/#filter) can be used to make a custom selection of which paths to encode and which to skip.

You may wish to skip encoding on a path if its value is used in your front end, but it is not useful for an author to be able to edit it.

```typescript
const client = createClient({
  // ...rest of config omitted for brevity
  stega: {
    filter: (props) => {
      // custom filter logic
      // return true to include stega
      // return false to omit from stega encoding
      switch (props.sourceDocument._type) {
       case 'icon':
         return false
       default:
         return props.filterDefault(props)
      }
    }
  }
})
```

By default, all returned values will include metadata encoding unless they:

- have keys starting with an underscore (e.g., `_id` and `_type`)
- can be evaluated as a URL or ISO Date
- are not returned as a string (such as numbers, see [Encoding metadata on number fields](https://www.sanity.io/docs/visual-editing/vercel-visual-editing) below)
- contain the path `["slug", "current"]` (as the metadata encoding will break URLs and static build processes).

If you want keys like these to be included, you can override the default behavior and force a true return instead of returning `props.filterDefault(props)`.

```typescript
const client = createClient({
  // ...rest of config omitted for brevity
  stega: {
    filter: () => true
  }
})
```

### Include the Content Source Map in your query result

To have the underlying Content Source Map returned as part of your query result, set the `filterResponse` option of the fetch call to `false`.

You may choose to include the Source Map for your own custom logic.

```typescript
const client = createClient({
  // ...rest of config omitted for brevity
  apiVersion: '2026-01-27',
  resultSourceMap: true // Tells Content Lake to include content source maps in the response
})

// const result = await client.fetch(query, params)
const {result, resultSourceMap} = await client.fetch(
  query,
  params,
  {filterResponse: false} // This option returns the entire API response instead of selecting just `result`
)

doSomethingAwesome(resultSourceMap)
```

[Troubleshooting Visual Editing](https://www.sanity.io/docs/visual-editing/troubleshooting-visual-editing)
