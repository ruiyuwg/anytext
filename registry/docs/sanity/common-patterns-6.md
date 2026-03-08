# Common patterns

## Custom decorators

To render content the way you want it to be shown, you can create custom decorators.

```tsx
import {defineArrayMember} from 'sanity'

defineArrayMember({
  type: 'block',
  marks: {
    decorators: [
      {
        title: 'Highlight',
        value: 'highlight',
        component: (props) => (
          <span style={{backgroundColor: '#0f0'}}>
            {props.children}
          </span>
        ),
        icon: BulbOutlineIcon,
      },
    ],
  },
})
```

The code example defines a member of an array that enables creating a block with decorators. The decorator in the example has props, such as `value`, `component`, and `icon`; these props define how the block is rendered:

- `value`  applies a `highlight` decorator to the component.
- `component` is a React element. It has the same props as `BlockDecoratorProps`. It renders the child props wrapped in a `span` element with a green background color (`#0f0`).
- `icon` is an instance of `BulbOutlineIcon`.

## Custom styles

You can create custom decorators to render custom styles. Custom styles extend the standard set of styles available out of the box.

> \[!WARNING]
> Gotcha
>
> - A rendered preview isn't available for custom styles. It's possible to preview only the default built-in styles available in the editor toolbar menu.
> - Custom styles don't support the `icon` prop.

```tsx
import {defineArrayMember} from 'sanity'
import {Card, Text} from '@sanity/ui'

defineArrayMember({
  type: 'block',
  styles: [
    {
      title: 'Section Header',
      value: 'sectionHeader',
      component: (props) => (
        <Card paddingBottom={4}>
          <Text size={4} weight="bold">
            {props.children}
          </Text>
        </Card>
      ),
    },
  ],
})
```

The code example defines a [block](https://www.sanity.io/docs/block-type) array member and adds style options to it:

- The style is `sectionHeader`.
- The child props of the component in the block are rendered as a card with bold text.

## Spellchecking

You can enable and disable the web browser's built-in spell-checker for text blocks. To do so, set `options.spellCheck` to either `true` or `false` for the specified `block` type.

```tsx
defineArrayMember({
  type: 'block',
  options: {
    spellCheck: false,
  },
})
```

The code example defines a `block` array member, and it disables spellchecking text in the block.

## Customizing block content rendering

You can render block content in Sanity Studio using one of the following form components:

- `block`: renders any valid Portable Text block (text or object.)
- `inlineBlock`: renders a Portable Text block inline inside a running piece of text.
- `annotation`: renders text with annotated metadata (for example, a URL link to reference an external resource, or a cross-reference to another document.)

You can modify specific schema types to customize only the corresponding components. Alternatively, you can modify the studio config or create a plugin to apply the customization to all block content in Sanity Studio.

### Customizing specific block content

To customize a specific block content type, use the `components` property associated with that type.
Define a `block` to provide your custom render component for the associated content type.

The following example customizes the rendering of text and image blocks in the `body` field.

```tsx
import {Box} from '@sanity/ui'
import {defineField, defineArrayMember} from 'sanity'

defineField({
  name: 'body',
  title: 'Body',
  type: 'array',
  of: [
    defineArrayMember({
      type: 'image',
      // Replace the preview of all block images
      // with the edit form for that image, bypassing
      // the modal step.
      components: {
        block: (props) => {
          return props.renderDefault({
            ...props,
            renderPreview: () => props.children,
          })
        },
      },
    }),
    defineArrayMember({
      type: 'block',
      // Add extra padding to all text blocks
      // for this type.
      components: {
        block: (props) => {
          return (
            <Box padding={2}>
              {props.renderDefault(props)}
            </Box>
          )
        },
      },
    }),
  ],
})
```

The `defineField` function creates a field called `body`, which is an array of two types of content: `images` and `blocks`.

The `components` property enables customizing the behavior of the field.

The `block` function is a component that renders the preview of a text or an image block. It takes `props` as an argument, and it returns a rendered version of the content with additional styling:

- It bypasses the modal step when previewing images.
- It adds extra padding to the text blocks.

### Customizing block content with the studio config

To customize the default rendering of all block content in Sanity Studio, modify the studio config, instead of customizing schemas as shown in the previous section.

The following example reuses the customization described in the previous example, but it sets it in the studio config, instead of the schema type. The studio config applies the customization to any text block or image type rendered as block content.

```typescript
import {definePlugin, defineField, BlockProps} from 'sanity'

const BlockComponent = (props: BlockProps) => {
  // Add extra padding to all text blocks
  if (props.schemaType.name === 'block') {
    return (
      <Box padding={2}>
        {props.renderDefault(props)}
      </Box>
    )
  }
  // Inline editing of images
  if (props.schemaType.name === 'image') {
    return props.renderDefault({
      ...props,
      renderPreview: () => props.children,
    })
  }
  // Render default for all other types
  return props.renderDefault(props)
}

// The config in sanity.config.ts
definePlugin({
  ...,
  form: {
    components: {
      block: BlockComponent,
    },
  },
})

// This schema gets the customizations automatically
// added to the 'block' and 'image' types.
defineField({
  name: 'intro',
  title: 'Intro',
  type: 'array',
  of: [
    {type: 'block'},
    {type: 'image'},
  ]
})

```

In the code example:

- `BlockComponent` takes `props` and returns a component that does the following:- Adds extra padding for all text blocks

- Enables skipping the preview and directly editing images inline

- Applies the default rendering to all other types.

- The `defineField` function defines a schema field that automatically adds the customizations to the `block` and `image` types.

### Customizing block content with a plugin

Instead of modifying the studio config, you can use the code in the previous example to create a plugin to achieve the same outcome.

The advantage is that you can install and share the plugin across multiple studios and workspaces.

For more information about creating plugins, see [Developing plugins](https://www.sanity.io/docs/studio/developing-plugins).

## Customizing the input

Besides customizing block content, you can also customize `PortableTextInput` to change editing block content in Sanity Studio.

This option enables rendering additional information, such as a word counter or supporting custom hotkeys to control editing features.

The following example shows a simple implementation where you can modify the input by assigning custom values to the `props` of `PortableTextInput`.

```typescript
import {
  defineField,
  defineArrayMember,
  PortableTextInput,
  PortableTextInputProps,
} from 'sanity'

defineField({
  name: 'body',
  title: 'Body',
  type: 'array',
  of: [
    {
      type: 'block',
    },
  ],
  components: {
    input: (props: PortableTextInputProps) => {
      return props.renderDefault(props)
      // Alternatively:
      // return <PortableTextInput {...props} />
    },
  },
})

```

Replace the `input` form component with your custom component. To do so, use either a block content schema type definition, or `definePlugin` in the studio config.

### Custom hotkeys

You can also set custom hotkeys by passing your hotkey mapping as `hotkeys` props to `PortableTextInput`.

The following example implements two hotkeys:

- A hotkey for a custom highlight decorator.
- Another hotkey to enable adding a link annotation to the selected text:

```tsx
import {useMemo} from 'react'
import {
  defineField,
  defineArrayMember,
  PortableTextEditor,
  PortableTextInput,
  PortableTextInputProps,
} from 'sanity'

// The custom input with two custom hotkeys
const CustomInput =
  (props: PortableTextInputProps) => {
    const {path, onItemOpen, onPathFocus} = props
    // Define the hotkey mapping
    const hotkeys: PortableTextInputProps['hotkeys'] = useMemo(
      () => ({
        // Use the 'marks' prop to toggle
        // text decorators on the currently
        // selected text with a hotkey
        marks: {
          'Ctrl+h': 'highlight',
        },
        // Use the 'custom' prop to define custom
        // functions that can access the underlying 
        // editor instance.
        // In this case, the 'Ctrl+l' hotkey toggles
        // a link on the selected text using the
        // PortableTextEditor API with the editor instance.
        custom: {
          'Ctrl+l': (event, portableTextEditor) => {
            const linkType = portableTextEditor.
              schemaTypes.annotations.find((a) => a.name === 'link')
            if (linkType) {
              event.preventDefault()
              const activeAnnotations =
                PortableTextEditor.activeAnnotations(portableTextEditor)
              const isLinkActive =
                activeAnnotations.some((a) => a._type === 'link')
              if (isLinkActive) {
                PortableTextEditor.removeAnnotation(
                  portableTextEditor,
                  linkType
                )
              } else {
                const result = PortableTextEditor.addAnnotation(
                  portableTextEditor,
                  linkType
                )
                if (result?.markDefPath) {
                  // Open the form member
                  onItemOpen(path.concat(result.markDefPath))
                  // Move the focus to the 'href' field in the next tick
                  setTimeout(() => {
                    onPathFocus(result.markDefPath.concat('href'))
                  })
                }
              }
            }
          },
        },
      }),
      [onPathFocus, onItemOpen, path],
    )
    return <PortableTextInput {...props} hotkeys={hotkeys} />
  }

// The schema type to use for the custom input above
defineField({
  name: 'body',
  title: 'Body',
  type: 'array',
  of: [
    defineArrayMember({
      type: 'block',
      marks: {
        decorators: [
          {
            title: 'Highlight',
            value: 'highlight',
            component: (props) => (
              <span style={{backgroundColor: '#0f0'}}>
                {props.children}
              </span>
            ),
            icon: BulbOutlineIcon,
          },
        ],
      },
    }),
  ],
  components: {
    // Return the custom input defined above
    input: CustomInput,
  },
})

```

The example defines a custom input component for the Portable Text editor.

The hotkey mapping includes a `Ctrl+h` key combination to toggle highlighting on the current selected text, and a `Ctrl+l` key combination to toggle a link on the selected text.

The `marks` property defines hotkey mappings for text decorators, whereas the `custom` property defines custom functions that can access the underlying editor instance.

In the example, `custom` adds a link annotation to `PortableTextEditor`:

1. It checks if the link type is an existing schema type.
2. If the link type exists, it prevents the default action that `Ctrl+l` would trigger, and it adds an annotation for the link type.
3. It checks if an active link annotation exists, and it either adds or removes it accordingly.
4. If adding or removing the annotation returns a result, it opens the form member and moves the focus to the `href` field.

### Custom paste handler

The following example implements custom paste handling for any clipboard text that is a valid URL.
It pastes the content as a `resource` type inline block at the current cursor position.

```tsx
import {
  defineField,
  defineArrayMember,
  PortableTextInput,
  PortableTextInputProps,
} from 'sanity'

// The custom paste handler function to pass as props
// to PortableTextInput
const onPaste: PortableTextInputProps['onPaste'] = (data) => {
  let url: URL
  const text =
    data.event.clipboardData.getData('text/plain') || ''
  // Check if clipboard data is a URL
  try {
    url = new URL(text)
    // Insert an inline resource object in the text
    return Promise.resolve({
      insert: [
        {
          _type: 'block',
          children: [{_type: 'resource', url: url.href}],
        },
      ],
      // To set a specific location to insert
      // the pasted content, instead of the current 
      // cursor position, define a 'path' prop
    })
  } catch (_) {
    return undefined
  }
}

// The block content schema type to use
// for the custom paste handler above
defineField({
  name: 'body',
  title: 'Body',
  type: 'array',
  of: [
    defineArrayMember({
      type: 'block',
      of: [
        {
          type: 'object',
          name: 'resource',
          title: 'Resource',
          fields: [{type: 'url', name: 'url'}],
        },
      ],
    }),
  ],
  components: {
    input: (props) => {
      return <PortableTextInput {...props} onPaste={onPaste} />
    },
  },
})

```

### Custom block validation

The following example validates a text block: it checks for a set of disallowed content using regex matching on every `span` node of the text block.
To test the example, type "*foo*" inside a text block.

```tsx
import {
  Path,
  PortableTextSpan,
  defineArrayMember,
  defineType,
  isPortableTextSpan,
  isPortableTextTextBlock,
} from 'sanity'

interface DisallowListLocation {
  matchText: string
  message: string
  offset: number
  path: Path
  span: PortableTextSpan
  level: 'error' | 'info' | 'warning'
}

export default defineType({
  name: 'customValidationExample',
  title: 'Custom block validation example',
  type: 'document',
  fields: [
    {
      name: 'blockContent',
      title: 'Block content with custom validation',
      type: 'array',
      of: [
        defineArrayMember({
          type: 'block',
          validation: (Rule) => [
            Rule.error().custom((value, context) => {
              const disallowList: {regExp: RegExp; message: string}[] = [
                {
                  message: 'Use n-dash (–) instead',
                  regExp: new RegExp(/^- /g),
                },
                {
                  message: 'Use a bullet list instead',
                  regExp: new RegExp(/^\* /g),
                },
                {
                  message: 'Avoid using \'foo\'',
                  regExp: new RegExp(/\bfoo\b/g),
                },
              ]
              const {path} = context
              const locations: DisallowListLocation[] = []
              if (path && isPortableTextTextBlock(value)) {
                value.children.forEach((child) => {
                  if (isPortableTextSpan(child)) {
                    disallowList.forEach((entry) => {
                      const matches = isPortableTextSpan(child) && child.text.matchAll(entry.regExp)
                      if (matches) {
                        Array.from(matches).forEach((match) => {
                          locations.push({
                            span: child,
                            matchText: match[0],
                            path: path.concat(['children', {_key: child._key}]),
                            offset: match.index || 0,
                            message: entry.message,
                            level: 'error',
                          })
                        })
                      }
                    })
                  }
                })
              }
              if (locations.length) {
                return {
                  message: `${locations.map((item) => item.message).join('. ')}.`,
                }
              }
              return true
            }),
          ],
        }),
      ],
    },
  ],
})

```

In the code example, `onPaste` defines a custom paste handler for the `PortableTextInput` component.

- It checks if the clipboard data is a URL; if so, it inserts the URL as an inline resource object in the text block.
- The default insert location is the current cursor position. It's also possible to assign a different insert location by setting an optional `path` prop.
