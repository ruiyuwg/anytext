# Sanity UI

When you're creating new tools and custom inputs, it's important for your editor experience to make sure your customizations match the overall design of the studio. To create this consistency, you can use [the Sanity UI component library](https://sanity.io/ui) to create custom experiences without creating custom designs or adding custom CSS.

## Usage of Sanity UI

The Sanity UI package comes bundled for most studio usage, but if you're creating a plugin or tool, you'll want to install the package via NPM.

```sh
npm install @sanity/ui
```

From there, you can import the various components into your custom inputs, tools, or widgets. For example, if you wish to apply a tooltip to a string input, you can create a custom input that uses the `Stack`, `Box`, and `TextInput` design primitives to create one with all the design elements of your studio built right in.

```javascript
// /components/MyCustomStringInput.jsx
import React, {useCallback} from 'react'
import {Stack, Text, TextInput} from '@sanity/ui'
import {set, unset} from 'sanity'

export const MyCustomStringInput = (props) => {
  const {elementProps, onChange, value = ''} = props

  const handleChange = useCallback((event) => {
    const nextValue = event.currentTarget.value
    onChange(nextValue ? set(nextValue) : unset())
	}, [onChange])

  return (
    <Stack space={2}>
      <TextInput
        {...elementProps}
        onChange={handleChange}
        value={value}
      />
      <Text>Characters: {value.length}</Text>
    </Stack>
  )
}
```

See this guide on [creating custom inputs and tools with Sanity UI](https://www.sanity.io/guides/your-first-input-component-for-sanity-studio-v3).

## Full documentation and playground

Sanity UI comes with a full set of UI primitives that can be mixed, matched, and composed into many different design patterns. The full list of components can be found in [the official Sanity UI documentation](https://sanity.io/ui/docs). To get a better feel for creating design patterns, you can also experiment with all the components in this [interactive component playground](https://www.sanity.io/ui/arcade).

# Studio Tools

A tool is a top-level view in Sanity Studio that you can access through its menu bar. The most common and built-in tool for the Studio is the Structure tool, which lets you browse, edit, and create documents. You can install tools with plugins or create your own. Tools are tied to the Studio’s routing and can be accessed through predictable URLs.

## Recommended tools

To get started, here are some recommended tools to enhance your Studio experience. You may even have a few installed already.

[Structure](https://www.sanity.io/docs/studio/structure-tool)

[Vision](https://www.sanity.io/docs/content-lake/the-vision-plugin)

[Dashboard](https://www.sanity.io/docs/studio/dashboard)

[Presentation](https://www.sanity.io/docs/visual-editing/configuring-the-presentation-tool)

For more from tools and plugins from Sanity and the community, browse the [Exchange](https://www.sanity.io/plugins).

## Manage tools and develop your own

[Tools cheat sheet](https://www.sanity.io/docs/studio/tools-cheat-sheet)

[Create a custom tool](https://www.sanity.io/docs/studio/custom-studio-tool)

[Tool API reference](https://www.sanity.io/docs/studio/tool-api-reference)
