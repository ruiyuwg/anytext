# Add Inline blocks for the Portable Text Editor

> \[!NOTE]
> This developer guide was contributed by Saskia Bobinska (Senior Support Engineer).

There are many cases where we want to define specific inline content depending on a user’s country, device, or journey stage. There are ways to do this with variables in PHP and other frameworks. **But inline blocks in Portable Text make more possible than the usual variables**!

Did you know that you can, for example, dynamically load product prices depending on a user’s location, add any special offers that may apply to them, and add an icon that links to local vendors?

Here is how you can do it!

> \[!WARNING]
> This uses V3 but can easily be implemented in V2 by using the fields etc. in the old way to define [schemas](https://www.sanity.io/v2-docs/content-modelling).

## Adding custom blocks to Portable Text

You might be familiar with how to add custom blocks for [the Portable Text Editor](https://www.sanity.io/docs/studio/block-content) by combining the `type: 'block'` with other object types like `image`.

```javascript
import { defineType } from 'sanity'

export default defineType({
  name: 'content',
  type: 'array',
  title: 'Content',
  of: [
    {
      type: 'block'
    },
    {
      type: 'image'
    }
  ]
})
```

## Inline custom blocks - embed content directly into text

But did you know you can also implement [inline blocks](https://www.sanity.io/docs/studio/block-type) by **adding the of property** and an array of object types to the block object field definition?

Let’s say you wanted to embed a reference to an author in running text. Then, the schema definition would look something like this:

```typescript
import { defineType } from 'sanity'

export default defineType({ 
  name: 'blockContent', 
  type: 'array', 
  of: [ 
    { type: 'block', 
      of: [ 
        {name: 'authorReference', 
        type: 'reference', 
        to: [{type: 'author'}]
        } 
      ] 
    } 
  ] 
})
```

### How will this look in the Portable Text Editor?

![Screenshot of a Portable Text Editor in dark mode with a "Reference to author" button in the toolbar](https://cdn.sanity.io/images/3do82whm/next/78efe1bbdc988d357a8ffba940f652c6b5dabf40-1162x600.png)

![Screenshot showing, that adding an inline block, usually will open a modal, very similar to the way annotations work](https://cdn.sanity.io/images/3do82whm/next/c2c3ab81281157198956af4861b4854be5e4d71d-1240x528.png)

![Screenshot of Inline reference to author Saskia Bobinska inside the Portable Text Editor](https://cdn.sanity.io/images/3do82whm/next/8cf5ce1a58f29fa2e82cbdf72ab2a71aa7ae4b94-1186x610.png)

### How does the Portable Text output look like?

As you can see in the JSON below, `authorReference` is on the same as the rest of the text. This is very different from [annotations](https://www.sanity.io/docs/studio/customizing-the-portable-text-editor) and their output.

```json
"content": [
    {
      "_key": "f6c1d654f9f4",
      "_type": "block",
      "children": [
        {
          "_key": "887fd31a6817",
          "_type": "span",
          "marks": [],
          "text": "This is how an inline reference to an author, "
        },
        {
          "_key": "39d95d603c1a",
          "_type": "authorReference",
          "_ref": "9b8382ae-69f7-4161-a0e2-e8a86b15d616"
        },
        {
          "_key": "0db93e64f0ed",
          "_type": "span",
          "marks": [],
          "text": ", would look like."
        }
      ],
      "markDefs": [],
      "style": "normal"
    }
  ]
```

### Resolving author reference in GROQ queries

Now that we have the author reference embedded inline with the text we need to be able to resolve the reference so we can [serialise the Portable Text](https://www.sanity.io/docs/developer-guides/presenting-block-text) output in our front-end.

In order to do so, we have to make sure, we resolve `authorReference` in our query:

```groq
*[_type == 'post']{
  ..., 
  // get the content array 
  content[]{
    // if the type is block...
    _type == 'block' => {
    ..., 
    // get the childrens array, and... 
    children[]{
      ...,
      // if a childrens type is our author reference,...
      _type == 'authorReference' => {
      ...,
      // create a new key value pair named "authorName" with the value name value of the referenced author document
      "authorName": @->.name
      }
      }
    }
  }
}
```

Output:

```json
...,
{
  "_key": "9d95d603c1a",
  "_ref": "9b8382ae-69f7-4161-a0e2-e8a86b15d616",
  "_type": "authorReference",
  "authorName": "Saskia Bobinska"
},
...
```
