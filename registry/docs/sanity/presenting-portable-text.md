# Presenting Portable Text

When you query your Sanity project’s API your rich text content is returned as Portable Text. If you are accustomed to traditional or other [headless CMSes ](https://www.sanity.io/headless-cms)you are probably used to dealing with HTML or Markdown out of the box. Portable Text is designed to be used in pretty much any format or markup where you want to render rich text content.

You render Portable Text by serializing the arrays that contain your content into the format you need it. There is tooling for generic markup and programming languages and for popular frameworks, that makes it easier to serialize Portable Text and lets you decide how custom content types should be handled.

## Serialization tooling

We have helpers for different languages and platforms.

> \[!TIP]
> Protip
> You may notice some mentions of *block text*, including in the tool names. This was the nomenclature we used before open sourcing and publishing the specification for Portable Text. You can explore the specification on [www.portabletext.org](https://www.portabletext.org).

### Portable Text to HTML

<https://github.com/portabletext/to-html>

### Portable Text to React

<https://github.com/portabletext/react-portabletext>

### Portable Text to React Native

<https://github.com/portabletext/react-native-portabletext>

### Portable Text to React PDF

<https://github.com/portabletext/react-pdf-portabletext>

### Portable Text to Vue

<https://github.com/portabletext/vue-portabletext>

### Portable Text to Svelte

<https://github.com/portabletext/svelte-portabletext/>

### Portable Text to Astro

<https://github.com/theisel/astro-portabletext>

### Portable Text to Hyperscript

<https://github.com/sanity-io/block-content-to-hyperscript>

### Portable Text to Markdown

<https://github.com/sanity-io/block-content-to-markdown>

### Portable Text in .NET

<https://github.com/oslofjord/sanity-linq#9-rendering-block-content>

### Portable Text in Python

<https://github.com/otovo/python-portabletext-html>

### Portable Text in PHP

<https://github.com/sanity-io/sanity-php#rendering-block-content>

Need to serialize to something not listed here in a language we don't cover? Create an issue on the repo for [Portable Text](https://www.portabletext.org), or [join us on Slack](https://slack.sanity.io) and let us know.

## Plain text serialization

Serializing Portable Text to plain text can be useful when you need it previews or similar. It also helps demystify what goes into serializing Portable Text. Here's a function written in JavaScript that takes a Portable Text array as an argument, and returns it as paragraphs in plain text:

```javascript
function toPlainText(blocks = []) {
  return blocks
    // loop through each block
    .map(block => {
      // if it's not a text block with children, 
      // return nothing
      if (block._type !== 'block' || !block.children) {
        return ''
      }
      // loop through the children spans, and join the
      // text strings
      return block.children.map(child => child.text).join('')
    })
    // join the paragraphs leaving split by two linebreaks
    .join('\n\n')
}

```

## Rendering Portable Text in React

A common use case is to render rich text content from Sanity in the popular web framework [React](https://reactjs.org/). We have made tooling that deals with the defaults out of the box, and lets you add components for controlling how custom content type should be rendered in the front end. Let's look at an example of how to set it up:

```jsx
import React from 'react'
import * as ReactDOM from 'react-dom'
import {PortableText} from '@portabletext/react'
import {createClient} from '@sanity/client'

const client = sanityClient({
  projectId: '<your project id>',
  dataset: '<your dataset>',
  apiVersion: '2022-05-05',
  useCdn: true
})

const components = {
  types: {
    code: (props) => {
      const {language, code} = props.value
      return (
        <pre data-language={language}>
          <code>{code}</code>
        </pre>
      )
    }
  }
}

client.fetch('*[_type == "article"][0]')
  .then(article => {
    ReactDOM.render(
      <PortableText value={article.body} components={components} />,
      document.getElementById('root')
    )
  })

```

Additional details are available [in our documentation](https://www.sanity.io/docs/studio/block-content) or on the [@portabletext/react README](https://github.com/portabletext/react-portabletext).

> \[!NOTE]
> Portable Text to React
> In 2022, the [@sanity/block-content-to-react](https://github.com/sanity-io/block-content-to-react) package was deprecated in favour of [@portabletext/react](https://github.com/portabletext/react-portabletext). The example above uses components and values from the new package instead of serializers and blocks, but we offer a [migration guide](https://github.com/portabletext/react-portabletext/blob/main/MIGRATING.md) and will continue to answer questions about `@sanity/block-content-to-react` in the [Slack community](https://slack.sanity.io).

## Join references

If you have references to other documents such as internal links, files or images in your Portable Text, you typically want to join the data from those documents into your Portable Text. Here's how:

Say you have a Portable Text with internal links to other articles using [mark annotations](https://www.sanity.io/docs/studio/portable-text-editor-configuration) like so:

```json
// portableText.js
export default {
  name: 'portableText',
  type: 'array',
  title: 'Content',
  of: [
    {
      type: 'block',
      marks: {
        annotations: [
          {
            name: 'internalLink',
            type: 'object',
            title: 'Internal link',
            fields: [
              {
                name: 'reference',
                type: 'reference',
                title: 'Reference',
                to: [
                  { type: 'article' },
                  // other types you may want to link to
                ]
              }
            ]
          }
        ]
      }
    }
  ]
}
```

In order to get the slug of the linked article you need to use [GROQ](https://www.sanity.io/docs/groq-reference) to query your document and use the [join syntax](https://www.sanity.io/docs/content-lake/query-cheat-sheet) to fetch the referenced article like so:

```groq
*[_type == "post"]{
  ...,
  body[]{
    ...,
    markDefs[]{
      ...,
      _type == "internalLink" => {
        "slug": @.reference->slug
      }
    }
  }
}
```

[Read the full guide on including links in Portable Text](https://www.sanity.io/guides/portable-text-internal-and-external-links).

##

Deserialization

If you need to convert existing markup to Portable Text you can use the JavaScript library [Sanity Block Tools](https://github.com/portabletext/editor/tree/main/packages/block-tools). You can use it both in a browser and in a node.js environment. It also lets you make custom rules to deserialize parts of your HTML into custom content types etc.

Complete example of deserialization of HTML into Portable Text blocks in a browser environment:

```javascript
import Schema from '@sanity/schema'
import blockTools from '@portabletext/block-tools'


// Start with compiling a schema we can work against
const defaultSchema = Schema.compile({
  name: 'myBlog',
  types: [
    {
      type: 'object',
      name: 'blogPost',
      fields: [
        {
          title: 'Title',
          type: 'string',
          name: 'title'
        },
        {
          title: 'Body',
          name: 'body',
          type: 'array',
          of: [{type: 'block'}]
        }
      ]
    }
  ]
})

// The compiled schema type for the content type that holds the block array
const blockContentType = defaultSchema.get('blogPost')
  .fields.find(field => field.name === 'body').type


// Convert HTML to block array
const blocks = blockTools.htmlToBlocks(
  '<html><body><h1>Hello world!</h1><body></html>',
  blockContentType
)
// Outputs
//
//  {
//    _type: 'block',
//    style: 'h1'
//    children: [
//      {
//        _type: 'span'
//        text: 'Hello world!'
//      }
//    ]
//  }


// Get the feature-set of a blockContentType
const features = blockTools.getBlockContentFeatures(blockContentType)
```
