# Configure the Portable Text Editor

Portable Text is extendible. Each block can have a style and a set of mark definitions that describe data structures distributed in the child spans. Portable Text also enables inserting arbitrary data objects in the array, only requiring a `_type`-key. It also allows custom content objects in the root array, enabling editing and rendering environments to mix rich text with custom content types.

You can create as many versions of the editor for Portable Text as you want. A frequent pattern is a base configuration with selected decorators and annotations, and a more comprehensive configuration with custom block types.
This is helpful if editors only use emphasis and annotate text as internal links in some settings (for example, a caption) and have a full toolbox available in another (for example, an article body).

## Minimal configuration

The following example shows a minimal configuration to implement Portable Text and the editor in Sanity Studio:

```javascript
export default {
  name: 'content',
  type: 'array',
  title: 'Content',
  of: [
    {
      type: 'block'
    }
  ]
}
```

The code, an array of blocks, renders the Portable Text Editor with a default configuration for styles, decorators, and annotations.

![The default editor configuration](https://cdn.sanity.io/images/3do82whm/next/eb1f7fdd0885f9fc65cd51779ee2490e41655052-516x307.png)

Portable Text is markup-agnostic; however, the default configuration maps easily to HTML conventions. **Bold** and *italics* set the decorators `strong` and `em` (emphasis), and produce a data structure like this:

```javascript
[
  {
    "_type": "span",
    "_key": "eab9266102e81",
    "text": "strong",
    "marks": [
      "strong"
    ]
  },
  {
    "_type": "span",
    "_key": "eab9266102e82",
    "text": " and ",
    "marks": []
  },
  {
    "_type": "span",
    "_key": "eab9266102e83",
    "text": "emphasis.",
    "marks": [
      "em"
    ]
  }
]
```

Portable Text isn't designed for direct human authoring or reading, but instead should be parsed by software. The `_type`-key also makes it queryable in Sanity’s APIs, and by other JSON tools, such as [jq](https://stedolan.github.io/jq/) or [groq-js](https://github.com/sanity-io/groq-js).

## Default behaviors

### Markdown behaviors

The Portable Text Editor in Studio includes many default Markdown behaviors that may be familiar from other text editors. They map to the standard decorators and annotations. These include:

- `# Title`: One or more `#` symbols followed by a space and text renders heading levels.
- `> block quote content`: The `>` character followed by a space and text converts to a block quote.
- Backspace at the beginning of a block removes the styling.
- `-`, `*`, `_`, or `1.`: At the beginning of a line, these values will start a list.
- `<example>`: Wrapping text in backticks, \` will create inline code.
- `*italic*`: Wrapping text in single `*` characters will create italic text.
- `**bold**`: Wrapping text in double `**` characters will create bold text.

You can undo this behavior as it happens by backspacing after the change occurs.

#### Disable default markdown behavior

You can disable these markdown behaviors by modifying the configuration, either in your `sanity.config.ts` file globally, or on individual schema types.

**sanity.config.ts (globally)**

```
export default defineConfig({
  // ... rest of config,
  form: {
    components: {
      portableText: {
        plugins: (props) => {
          return props.renderDefault({
            ...props,
            plugins: {
              ...props.plugins,
              markdown: {
                enabled: false
              }
            }
          })
        }
      },
    },
  }
})
```

**noMarkdownSchema.ts (individual)**

```
export default defineType({
  type: 'array',
  name: 'noMarkdown',
  title: 'No markdown',
  description: 'Markdown disabled in this PTE',
  of: [
    {
      type: 'block',
    },
  ],
  components: {
    portableText: {
      plugins: (props) => {
        return props.renderDefault({
          ...props,
          plugins: {
            ...props.plugins,
            markdown: {
              enabled: false
            }
          }
        })
      }
    }
  }
})
```

If you're already using [custom PTE behavior plugins](https://www.sanity.io/docs/studio/add-portable-text-plugins), you can add the contents of `props.renderDefault` above into the `renderDefault` call in the behavior plugin.

### Typographic behaviors

Starting in Studio v4.22.0, the editor also includes a set of common typographic helpers. These transform the input inline, saving the transformed version to the document.

The following lists include the name of the behavior, used to enable/disable individual behaviors in the configuration, the input text, and the output text. Default behaviors are enabled for all Portable Text Editor fields unless disabled.

**Default behaviors**:

- `emDash`: `--` → —
- `ellipsis`: `...` → …
- `openingDoubleQuote`: `"` → “
- `closingDoubleQuote`: `"` → ”
- `openingSingleQuote`: `'` → ‘
- `closingSingleQuote`: `'` → ’
- `leftArrow`: `<-` → ←
- `rightArrow`: `->` → →
- `copyright`: `(c)` → ©
- `trademark`: `(tm)` → ™
- `servicemark`: `(sm)` → ℠
- `registeredTrademark`: `(r)` → ®

**Optional behaviors**:

- `oneHalf`: `1/2` → ½
- `plusMinus`: `+/-` → ±
- `notEqual`: `!=` → ≠
- `laquo`: `<<` → «
- `raquo`: `>>` → »
- `multiplication`: `*` or `x` between numbers → ×
- `superscriptTwo`: `^2` → ²
- `superscriptThree`: `^3` → ³
- `oneQuarter`: `1/4` → ¼
- `threeQuarters`: `3/4` → ¾

#### Enable / disable typography behaviors

You can enable / disable typography behaviors at the global level, or directly in the schema definition for the block.

Explicitly disable all typography behaviors:

**sanity.config.ts (globally)**

```
export default defineConfig({
  // ... rest of config,
  form: {
    components: {
      portableText: {
        plugins: (props) => {
          return props.renderDefault({
            ...props,
            plugins: {
              ...props.plugins,
              typography: {
                enabled: false
              }
            }
          })
        }
      },
    },
  }
})
```

**noMarkdownSchema.ts (individual)**

```
export default defineType({
  type: 'array',
  name: 'noMarkdown',
  title: 'No markdown',
  description: 'Markdown disabled in this PTE',
  of: [
    {
      type: 'block',
    },
  ],
  components: {
    portableText: {
      plugins: (props) => {
        return props.renderDefault({
          ...props,
          plugins: {
            ...props.plugins,
            typography: {
              enabled: false
            }
          }
        })
      }
    }
  }
})
```

Enable all presets (default and optional), set the `preset` key to:

- `default`: enables the default behaviors. (this is the default setting if unset)
- `all`: enables both default and optional behaviors
- `none`: disables both default and optional behaviors. Use this if you plan to enable only specific behaviors (see below).

**sanity.config.ts (globally)**

```
export default defineConfig({
  // ... rest of config,
  form: {
    components: {
      portableText: {
        plugins: (props) => {
          return props.renderDefault({
            ...props,
            plugins: {
              ...props.plugins,
              typography: {
                preset: 'all'
              }
            }
          })
        }
      },
    },
  }
})
```

**noMarkdownSchema.ts (individual)**

```
export default defineType({
  type: 'array',
  name: 'noMarkdown',
  title: 'No markdown',
  description: 'Markdown disabled in this PTE',
  of: [
    {
      type: 'block',
    },
  ],
  components: {
    portableText: {
      plugins: (props) => {
        return props.renderDefault({
          ...props,
          plugins: {
            ...props.plugins,
            typography: {
              preset: 'all'
            }
          }
        })
      }
    }
  }
})
```

Enable or disable individual behaviors with the `enable` or `disable` key. Each accepts an array of behavior names.

**sanity.config.ts (globally)**

```
export default defineConfig({
  // ... rest of config,
  form: {
    components: {
      portableText: {
        plugins: (props) => {
          return props.renderDefault({
            ...props,
            plugins: {
              ...props.plugins,
              typography: {
                enable: ['oneQuarter', 'threeQuarters'],
                disable: ['openingDoubleQuote', 'openingSingleQuote', 'closingDoubleQuote', 'closingSingleQuote']
              }
            }
          })
        }
      },
    },
  }
})
```

**noMarkdownSchema.ts (individual)**

```
export default defineType({
  type: 'array',
  name: 'noMarkdown',
  title: 'No markdown',
  description: 'Markdown disabled in this PTE',
  of: [
    {
      type: 'block',
    },
  ],
  components: {
    portableText: {
      plugins: (props) => {
        return props.renderDefault({
          ...props,
          plugins: {
            ...props.plugins,
            typography: {
              enable: ['oneQuarter', 'threeQuarters'],
              disable: ['openingDoubleQuote', 'openingSingleQuote', 'closingDoubleQuote', 'closingSingleQuote']
            }
          }
        })
      }
    }
  }
})
```

### Map markdown behavior to custom marks and decorators

If you're using non-standard names for your marks and decorators, you can map the default behaviors to the different names.

In this example, the unordered list is remapped to a list named "dot".

**customBlock.ts**

```
export default defineType({
  name: 'customBlock',
  // ... rest of config
  type: 'array',
  of: [
    {
      type: 'block',
      marks: {
        decorators: [/* ... */],
      },
      lists: [{ value: 'dot', title: 'Dot',},],
    },
  ],
  components: {
    portableText: {
      plugins: (props) => {
        return props.renderDefault({
          ...props,
          plugins: {
            ...props.plugins,
            markdown: {
              ...props.plugins?.markdown?.config,
              unorderedList: ({schema}) =>
                schema.lists.find((list) => list.name === 'dot')?.name,
            }
          }
        })
      }
    }
  }
})
```

### Paste link behavior

If your studio uses the default link annotation, you can select text and paste a URL to annotate the text as a link. To disable this behavior, set the `pasteLink.enabled` value to false.

**sanity.config.ts (globally)**

```
export default defineConfig({
  // ... rest of config,
  form: {
    components: {
      portableText: {
        plugins: (props) => {
          return props.renderDefault({
            ...props,
            plugins: {
              ...props.plugins,
              pasteLink: {
                enabled: false
              }
            }
          })
        }
      },
    },
  }
})
```

**noMarkdownSchema.ts (individual)**

```
export default defineType({
  type: 'array',
  name: 'noPasteLink',
  title: 'No Pasteable links',
  description: 'pasteLink disabled in this PTE',
  of: [
    {
      type: 'block',
    },
  ],
  components: {
    portableText: {
      plugins: (props) => {
        return props.renderDefault({
          ...props,
          plugins: {
            ...props.plugins,
            pasteLink: {
              enabled: false
            }
          }
        })
      }
    }
  }
})
```

By default, the plugin looks for an annotation of name `'link'` with an `'href'` string field, and if that is present, it uses that to create the link. This behavior can be configured by providing a custom link matcher function (a function that has access to the current editor schema and returns either a typed object or undefined):

**sanity.config.ts**

```
// ...rest of config above
pasteLink: {
  link: ({context, value}) => {
    const customLink = context.schema.annotations.find((a) => a.name
=== 'customLink')
    if (!customLink) return undefined
    return {_type: 'customLink', url: value.href}
  },
}
// ...
```

## Add custom blocks

Since Portable Text defines block content as an array, adding custom content blocks for images, videos, or code-embeds, means inserting these items between paragraph blocks.

> \[!WARNING]
> Gotcha
> Content blocks for the Portable Text Editor must be object-like types, and not primitive types like `string`, `number`, or `boolean`.
> You can also use types that are installed with [plugins](https://www.sanity.io/docs/studio/installing-and-configuring-plugins).
> Some plugins, such as those for tables, may export [an array type](https://www.sanity.io/docs/studio/array-type). Since it's not possible to store arrays directly within other arrays, you first need to wrap them in an object.

### Example: images

To add images to Portable Text, append a new type object to the array as such:

```javascript
export default {
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
}
```

This configuration will add an insert\*\* \*\*menu with **Image** as the only option:

![The image option is added to the tool bar](https://cdn.sanity.io/images/3do82whm/next/42fe954183c37bb88fe216b729fb308cfc255a4f-520x309.png)

Selecting an image inserts the block with a preview in the Portable Text Editor. You can drag the image and drop it in its designated position; you can also edit it by double-clicking the preview box or by selecting the edit option from the kebab menu:

![Edit or delete a custom block](https://cdn.sanity.io/images/3do82whm/next/e26f1b6be0cc28d7272d325f7b67c7f8c2f58d68-634x589.png)

The Portable Text data structure for this example looks like the following:

```javascript
[
  {
    "style": "normal",
    "_type": "block",
    "markDefs": [],
    "_key": "09cc5f099d3b",
    "children": [
      {
        "_type": "span",
        "_key": "09cc5f099d3b0",
        "text": "Kokos is a miniature schnauzer.",
        "marks": []
      }
    ]
  },
  {
    "_type": "image",
    "_key": "a5e9155ee3f5",
    "asset": {
      "_type": "reference",
      "_ref": "image-61991cfbe9182124c18ee1829c07910faadd100e-2048x1366-png"
    }
  },
  {
    "style": "normal",
    "_type": "block",
    "markDefs": [],
    "_key": "54145e9cb006",
    "children": [
      {
        "_type": "span",
        "_key": "54145e9cb0060",
        "text": "Kokos is a good dog!",
        "marks": []
      }
    ]
  }
]
```

The image has its object structure, where `asset` references the asset’s document. You can derive the image URL from its `_id` (which matches the `_ref` value above). You can also join the asset document using [select in GROQ](https://www.sanity.io/docs/specifications/groq-functions):

```json
*[_type == "post"]{
  ...,
  content[]{
    ...,
    _type == "image" => {
      ...,
      asset->
    }
  }
}
```

### Example: code input

Our documentation features many code blocks. They are custom blocks that we added to our editor. You can install the code input as a plugin using the [Sanity CLI](https://www.sanity.io/docs/cli-reference/install):

```sh
npm i @sanity/code-input
# OR
yarn add @sanity/code-input
```

Once installed and [configured](https://www.sanity.io/docs/studio/installing-and-configuring-plugins), you can add the code block to the editor for Portable Text configuration:

```javascript
export default {
  name: 'content',
  type: 'array',
  title: 'Content',
  of: [
    {
      type: 'block'
    },
    {
      type: 'image'
    },
    {
      type: 'code'
    }
  ]
}
```

*Code* (to change the default title to a different one, add `title: "<my-custom-title>"` to the same object) is now available as a selection in the insert menu. Inserting a code block produces a preview and a code editor:

![The code editor with some schema code in JavaScript](https://cdn.sanity.io/images/3do82whm/next/a30a849860f32f198563e0b0c343a31ec4b1fd8d-942x790.png)

You can set [more options](https://www.npmjs.com/package/@sanity/code-input#options) for the code input.

[How to add a custom YouTube block](https://www.sanity.io/guides/portable-text-how-to-add-a-custom-youtube-embed-block)

## Configuring styles for text blocks

Out of the box, the Portable Text Editor includes the following styles: `normal`, `h1–h6`, and `blockquote`. By default, they map to HTML; but a style can be an arbitrary value.

```javascript
// The default set of styles
export default {
  name: 'content',
  title: 'Content',
  type: 'array',
  of: [
    {
      type: 'block',
      styles: [
        {title: 'Normal', value: 'normal'},
        {title: 'H1', value: 'h1'},
        {title: 'H2', value: 'h2'},
        {title: 'H3', value: 'h3'},
        {title: 'H4', value: 'h4'},
        {title: 'H5', value: 'h5'},
        {title: 'H6', value: 'h6'},
        {title: 'Quote', value: 'blockquote'}
      ]
    }
  ]
}
```

![The default style configuration in the editor](https://cdn.sanity.io/images/3do82whm/next/d194c6084605d055ec365557a77c358543db1fc1-648x523.png)

We recommend keeping the configuration to a reasonably abstract level and following known, established conventions. If you plan to use our Portable Text tooling for rendering web pages, you should probably stay closer to naming conventions in HTML.

To override the default configuration for styles, add the `style` key and set an array of `title`/`value` objects:

```javascript
export default {
  name: 'content',
  title: 'Content',
  type: 'array',
  of: [
    {
      type: 'block',
      styles: [
        { title: 'Normal', value: 'normal' },
        { title: 'Heading 2', value: 'h2' },
        { title: 'Quote', value: 'blockquote' },
        { title: 'Hidden', value: 'blockComment' }
      ]
    }
  ]
}
```

Here we have set 4 possible styles. The 3 first are from the default settings and are parsed in HTML to `<p>`, `<h2>`, and `<blockquote>`.

`blockComment` is an arbitrary style that we set because we plan to make it possible for editors to hide selected blocks of text from rendering, while keeping them available in the source code as block comments.

[Want to style the blocks in the editor? Read more →](https://www.sanity.io/docs/studio/customizing-the-portable-text-editor)

![Editor with style configuration](https://cdn.sanity.io/images/3do82whm/next/f91121e5420d896b44d5f6b92b8e575bb4cd5e8e-611x404.png)

## Configuring lists for text blocks

The editor supports two types of lists: bullet (unordered) and number (ordered). If your `block` type doesn't contain a `lists` definition, your editor features both a bullet list and a numbered list option:

![The portable text editor UI with the list selectors highlighted](https://cdn.sanity.io/images/3do82whm/next/0a0bc15e8cb00a34be4402fe639d113ee82c8739-451x49.png)

The default is the equivalent of explicitly naming both:

You can override the default by naming the lists you want. If you leave the array empty, you disable lists altogether:

```javascript
// The default set of styles
export default {
  name: 'content',
  title: 'Content',
  type: 'array',
  of: [
    {
      type: 'block',
      lists: [
        {title: 'Bullet', value: 'bullet'},
        {title: 'Numbered', value: 'number'}
      ] // yes please, both bullet and numbered
    }
  ]
}
```

```javascript
// The default set of styles
export default {
  name: 'content',
  title: 'Content',
  type: 'array',
  of: [
    {
      type: 'block',
      lists: [] // no lists, thanks
    }
  ]
}
```

Also, you decide what goes into the title: `{title: 'Prioritized', value: 'number'}` works equally well!

## Configuring marks for inline text

Portable Text enables marks to label inline text with additional data. There are two types of marks: *decorators* and \*annotations.
\*Decorators are marks as simple string values, while annotations are keys to a data structure. Annotations are a powerful feature of Portable Text in combination with Sanity’s backend, because they allow embedding complex data structures and references in running text.

### Decorators

Decorators work similarly to styles, but they are applied to spans, that is, inline text. The default configurations are `strong`, `em`, `code`, `underline`, and `strike-through`. If you want to disable some of these and set your own, you do that by adding an array to the `decorators` key, under `marks`:

```javascript
export default {
  name: 'content',
  title: 'Content',
  type: 'array',
  of: [
    {
      type: 'block',
      marks: {
        decorators: [
          {title: 'Strong', value: 'strong'},
          {title: 'Emphasis', value: 'em'},
          {title: 'Code', value: 'code'}
        ]
      }
    }
  ]
}
```

Decorators are displayed as icons in the toolbar. This configuration looks like this:

![Toolbar with custom decorator configuration](https://cdn.sanity.io/images/3do82whm/next/bbeb64ad8cef7d839770996e3196d17116b2d029-608x224.png)

### Annotations

Annotations enable embedding rich content data in inline text. An example can be a reference to another document, typically used for internal linking.

To add an internal link annotation, configure the Portable Text schema like this:

```javascript
export default {
  name: 'content',
  title: 'Content',
  type: 'array',
  of: [
    {
      type: 'block',
      marks: {
        decorators: [
          // ...
        ],
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
                  { type: 'post' },
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

> \[!WARNING]
> Gotcha
> If you plan to use Sanity’s GraphQL API, you should hoist `internalLink` as a schema type, and use `type: 'internalLink'` as the annotation, instead of the anonymous example above.
> [Learn more about using GraphQL with Sanity here](https://www.sanity.io/docs/content-lake/graphql).

The annotations are displayed in the toolbar as question mark icons if none is set.
For more information on editing toolbar icons, see [Customizing the Portable Text Editor](https://www.sanity.io/docs/studio/customizing-the-portable-text-editor).

![Reference modal for internal link annotation](https://cdn.sanity.io/images/3do82whm/next/49ec3c9475f4ddd23c5dd5c32d81132e865e7b10-614x409.png)

The corresponding Portable Text data structure looks like this:

```javascript
[
  {
    "_key": "da9dc50335a0",
    "_type": "block",
    "children": [
      {
        "_key": "da9dc50335a00",
        "_type": "span",
        "marks": [
          "5b86c1132a66"
        ],
        "text": "This is an internal link"
      },
      {
        "_key": "da9dc50335a01",
        "_type": "span",
        "marks": [],
        "text": "."
      }
    ],
    "markDefs": [
      {
        "_key": "5b86c1132a66",
        "_type": "internalLink",
        "reference": {
          "_ref": "1dfa4e95-9f92-4e13-901b-1a769724e23c",
          "_type": "reference"
        }
      }
    ],
    "style": "normal"
  }
]
```
