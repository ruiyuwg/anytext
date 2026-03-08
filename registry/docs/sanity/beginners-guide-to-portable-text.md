# Beginners guide to Portable Text

> \[!NOTE]
> This developer guide was contributed by Saskia Bobinska (Senior Support Engineer).

Portable Text is a JSON-based rich text specification for modern content editing platforms. PT is an agnostic abstraction of rich text that can be serialized into pretty much any markup language.

This will allow you to reuse your content across any front-end you need.

What does that mean?

Instead of combining the presentation and content layers, PT allows you
to handle the content separate from the markup/how it’s rendered. Since the presentation is decoupled, you can also add custom (block) types and conditional rules directly into your data/content without needing to separate them out or create specific renderers for them in the editor.

Additionally, you can use the exact same text across all platforms and formats ( website | meta tags | native app | email newsletter | social media post | ... ).

## The difference between formatting and styles

In any text, there are informational layers which are relevant to the overall
structure of the content, giving information about the role of a specific
block, paragraph or span.
Those are also used in HTML to create [semantically relevant elements](https://www.boia.org/blog/accessibility-tips-using-the-div-and-span-elements),
instead of only working with divs and spans.
Other layers are more visual and carry little meaning by themselves but can be
configured based on the role of some entity in the content itself.

### Styles

Styles are generally some sort of role or type of block.
These often correspond to standardised elements in HTML, such as `h1`, `p`, `quote`, `code`, etc.
Those styles represent **what a block is** and can have rules on how they look (formatting).

### Formatting

Formatting will take the form of how the overall content is visually presented (presentational layer).
It determines **how something looks** while not having any or little information about what it **is**.

## What does PT consist of?

- Blocks- Styles

- Lists

- Marks- Annotations

- Decorators

- [Inline blocks](https://www.sanity.io/docs/developer-guides/add-inline-blocks-to-portable-text-editor)

- Custom blocks

### Blocks

Portable Text is broken into blocks of content; to be more exact, it is an array of objects.

The default `block` type can have different `marks` which define additional information-layers to the text in question.

Marks are extra information that can be applied to your text.

- **Decorator:** when that extra information can be expressed as a simple text string.
- **Annotation:** when the extra information is more complex and can be described as an object with keys and values. 

### Data Structure

![Screenshot with annotations on data structure. ](https://cdn.sanity.io/images/3do82whm/next/fb5f7524a363bf42c9a155da182c6f80124cfbc8-2098x1176.png)

What does everything mean

- **children** - the sections within our Portable Text block (array of spans)
- **\_type** - can be either block, span or your custom blocks
- **text** - This is the text. The content is broken up into spans that you can customize further.
- **marks** - There is where we add some metadata about a span of text. Decorators will appear here, while annotations will be references by key and have more information in the `markDefs` array
- **markDefs** - You can mark text with more complex data, expressed as an object with keys and values. It can be whatever you want.

### Custom blocks

All custom blocks will have the same data structure as your object.

The resulting data will consist of a `_type` and `_key`, as well as all key-value pairs you define in the schema (fields).

## Presenting Portable Text

You can find more information [in the docs](https://www.sanity.io/docs/developer-guides/presenting-block-text).

### What is a serialiser?

A serializer defines how the blocks of content from the JSON array are stacked together to make a readable format that is adjusted to the needs and presentational layer.

Default serializers can be found for multiple formats.

[These libraries](https://www.sanity.io/docs/developer-guides/presenting-block-text) come with default serializers that translate common data structures into elements (depending on the framework).

### React Example

```typescript
import {PortableText} from '@portabletext/react'

<PortableText
  value={[/* array of portable text blocks */]}
  components={ /* specific render instructions */ }
/>
```

> \[!TIP]
> Check out my extensive guide on customising Portable Text up to serialising everything to React
> https://www.sanity.io/guides/ultimate-guide-for-customising-portable-text-from-schema-to-react-component

## Validations in Portable Text

In Portble Text (PT), you have the option to add validations on the array level (the whole text), the block, and even the span level, which is brilliant for these use cases, where we need to disallow certain combinations of marks and styles, the order of heading styles, for example, or even certain strings or characters.

### Validating the order of blocks

One of the most interesting things to validate is the [order of headings](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/Heading_Elements). A break in the convention can lead to lower accessibility and SEO scores, a broken table of contents, and more.

Validations are the perfect tool to ensure your editors adhere to the nesting rules and where certain headings can appear.

**Example: H2 has to be the first heading**

Let's assume you have a document type which only allows `H2` as the first heading in your Portable Text (because the `H1` will be populated via a `title` field, for example).

```typescript
export const validateH2IsFirst = (
  Rule: ArrayRule<PortableTextBlock[] | unknown[]>,
) =>
  Rule.custom((value, context) => {
    const { path } = context
    if (path && value) {
      // get all headings
      const headings = value.filter(
        (block: PortableTextBlock) =>
          block._type == 'block' &&
          (block.style as PortableTextTextBlock['style'])?.startsWith('h'),
      ) as PortableTextTextBlock[]

      if (headings.length && headings[0].style !== 'h2')
        return {
          message: 'First heading should be h2.',
          path: [{ _key: headings[0]._key }],
        }
      return true
    }

    return true
  })
```

**Example: Sequence and nesting of headings**

You can even go so far as to check how headings are nested and which sequence they appear in.

Have a look at [this example](https://github.com/bobinska-dev/page-builder-example/blob/efc024c4fbaa028411111ef7baccb9b1660334dd/sanity/schemas/validations/portableTextValidations.ts#L101-L139).

### Validating block children

Portable Text validations can even go as far as the individual text spans within a block or their marks.

> \[!TIP]
> Child validations can also be used to define forbidden strings and characters, remove unwanted spaces, or enforce other rules from your style guide.

In [this example](https://github.com/bobinska-dev/page-builder-example/blob/efc024c4fbaa028411111ef7baccb9b1660334dd/sanity/schemas/validations/portableTextValidations.ts#L151-L202), we check whether the block is all bold and warn the editors when

1. Headings are bold -> Since we don't want any extra font weight to be applied to our headings.
2. A block (that is not a heading) is all bold -> if a whole block is bold, the editors should consider making it a heading.

## Conclusion

If you customise your Portable Text fields to our specific needs and even add `preview`, `block`, `annotation` and other components using the [Component API](https://www.sanity.io/docs/studio/intro-to-custom-studio-components), you and your editors will have a wonderful experience when writing (or working with) Portable Text.
