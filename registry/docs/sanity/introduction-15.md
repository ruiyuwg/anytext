# Introduction

Block content in Sanity uses Portable Text, a structured format for rich text that stores content as blocks. It allows you to create content with formatting, custom blocks, and annotations while keeping the content separate from its presentation.

In Sanity Studio, block content lets you build flexible editing experiences where you can include custom content types, add structured data to text, and control how your content appears across different platforms.

Here's what you can do with block content:

- **Create rich text content** with customizable styles, decorators, and annotations.
- **Embed custom content blocks** like images, videos, or code snippets directly within your text.
- **Add structured data to text** through annotations, enabling features like internal linking to references.
- **Customize the editing experience** with your own toolbar icons, block styles, and plugins.
- **Serialize Portable Text** for a common targets like HTML, React, Vue, Markdown, or even write your own custom serializer.

#### Get started

[Configure the Portable Text Editor](https://www.sanity.io/docs/studio/portable-text-editor-configuration)

[Customize the Portable Text Editor](https://www.sanity.io/docs/studio/customizing-the-portable-text-editor)

## Core concepts

### Portable Text

When you define your schema, you define rich text as an array of blocks. This is the fundamental shape of Portable Text.

Portable Text is built on the idea of rich text as an array of blocks, where each block is an array of child spans.

#### Blocks

Blocks are units representing paragraphs, headings, or other block-level elements. Each block can have a style (like normal, h1, h2, etc.) and contains an array of spans or inline objects.

#### Spans

Spans are the text content within blocks. They can have marks applied to them, which are either simple decorators (like bold or italic) or more complex annotations (like links with structured data).

#### Marks

Marks let you label sections of inline text, either for stylistic reasons for to add additional information to the text. There are two types of marks.

Decorators are simple marks applied to spans, like bold, italic, or inline code formatting. They're stored as string values in the marks array of a span.

Annotations are more complex marks that can contain structured data. For example, a link annotation might include a URL or a reference to another document.

#### Custom blocks

Beyond text blocks, Portable Text allows you to insert custom content blocks like images, videos, or any other content type you define. These appear as separate items in the Portable Text array.

[Common Portable Text Editor patterns](https://www.sanity.io/docs/studio/customizing-block-content)

### The Portable Text Editor

When you use an array of blocks in your schema, Studio inserts a pre-configured version of the Portable Text Editor(PTE). The editor itself is open source and allows you to build on top of the same foundation that Studio uses for its rich text experience. Learn more about the [standalone editor](https://portabletext.org).

### Extending the editor in Studio

You can customize the built-in editor experience by customizing blocks individually, and by creating behavior plugins. You can even replace the entire editor with your own implementation of the standalone PTE.

[Create a Portable Text behavior plugin](https://www.sanity.io/docs/studio/pte-plugins)

[Add Portable Text Editor plugins to Studio](https://www.sanity.io/docs/studio/add-portable-text-plugins)

### Rendering Portable Text in your apps

Because block content uses the Portable Text specification, you can use any portable text serializer to render the content in your front end code.

#### Portable Text Serializers

[Presenting Portable Text](https://www.sanity.io/docs/developer-guides/presenting-block-text)

[Libraries and tools](https://www.sanity.io/docs/libraries)

## Limitations

### Attribute limits

Block content is powerful, but can sometimes lead to complex documents made up of many attributes. Refer to the [advice in this guide on attribute limits](https://www.sanity.io/docs/content-lake/attribute-limit) to use block content responsibly.
