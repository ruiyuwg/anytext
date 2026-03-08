# Span

A `span` is a text range within a `block`. It is a child of the `block` type’s children.

## Properties

#### Properties

| Property | Description |
| --- | --- |
| type \* | The value must be set to span. |

## Options

## Validation

The span type is created automatically by the rich text editor as part of the [block type](https://www.sanity.io/docs/block-type). It’s not something you will define yourself.

When you configure [decorators and annotations](https://www.sanity.io/docs/studio/customizing-the-portable-text-editor) for the rich editor, these will be stored as values in a span’s marks. Decorators as simple text strings, and annotations as keys that reference entries in the block’s mark definitions (`markDefs`). In the example below, there are marks in the third span with the values `strong` and `cbe9d12c6af9`. Most presentation layers will represent the `strong` as in a bold typeface. The other value is a key that corresponds to an object entry under `markDefs` that describes a link.

```json
{
  "_key": "9d2d1ed68d84",
  "_type": "block",
  "children": [
    {
      "_type": "span",
      "marks": [],
      "text": "I am "
    },
    {
      "_type": "span",
      "marks": [
        "strong"
      ],
      "text": "strong and "
    },
    {
      "_type": "span",
      "marks": [
        "strong",
        "cbe9d12c6af9"
      ],
      "text": "annotated"
    },
    {
      "_type": "span",
      "marks": [],
      "text": ""
    }
  ],
  "markDefs": [
    {
      "_key": "cbe9d12c6af9",
      "_type": "link",
      "href": "https://www.google.com/?q=annotation"
    }
  ],
  "style": "normal"
}
```

## Render Spans on the frontend

Spans and Blocks are defined in the Portable Text specification for data storage. They provide insight into how a frontend might use the data provided. If you want to see how to render custom annotations and decorators, see this guide on [Presenting Portable Text](https://www.sanity.io/docs/developer-guides/presenting-block-text).
