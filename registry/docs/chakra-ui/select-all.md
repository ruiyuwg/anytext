### Select All

Provide convenient "Select All" and "Select None" controls for multiple
selection scenarios, with visual indicators showing selection state.

```tsx
"use client"

import type { CheckmarkProps, FlexProps } from "@chakra-ui/react"
import {
  Box,
  Checkmark,
  Flex,
  Listbox,
  createListCollection,
  useListboxContext,
  useListboxItemContext,
} from "@chakra-ui/react"

export const ListboxSelectAll = () => {
  return (
    
      <Listbox.Root collection={frameworks} selectionMode="multiple" gap="0">
        
        <Listbox.Content maxH="300px" roundedTop="0">
          {frameworks.items.map((framework) => (
            <Listbox.Item item={framework} key={framework.value}>
              
              <Listbox.ItemText>{framework.label}</Listbox.ItemText>
            </Listbox.Item>
          ))}
        </Listbox.Content>
      </Listbox.Root>
    
  )
}

const ListboxHeader = (props: FlexProps) => {
  const listbox = useListboxContext()
  const isAllSelected = listbox.value.length === frameworks.items.length
  const isSomeSelected =
    listbox.value.length > 0 && listbox.value.length < frameworks.items.length

  const handleSelectAll = () => {
    if (isAllSelected) {
      listbox.setValue([])
    } else {
      listbox.setValue(frameworks.items.map((item) => item.value))
    }
  }

  return (
    <Flex
      as="button"
      onClick={handleSelectAll}
      px="3"
      gap="2"
      align="center"
      cursor="pointer"
      borderWidth="1px"
      minH="10"
      roundedTop="l2"
      mb="-1px"
      {...props}
    >
      <Checkmark
        filled
        size="sm"
        checked={isAllSelected}
        indeterminate={isSomeSelected}
      />
      <Listbox.Label>Select Frameworks</Listbox.Label>
    
  )
}

const ListboxItemCheckmark = (props: CheckmarkProps) => {
  const itemState = useListboxItemContext()
  return (
    <Checkmark
      filled
      size="sm"
      checked={itemState.selected}
      disabled={itemState.disabled}
      {...props}
    />
  )
}

const frameworks = createListCollection({
  items: [
    { label: "React.js", value: "react" },
    { label: "Vue.js", value: "vue" },
    { label: "Angular", value: "angular" },
    { label: "Svelte", value: "svelte" },
    { label: "Next.js", value: "nextjs" },
    { label: "Nuxt.js", value: "nuxtjs" },
    { label: "Remix", value: "remix" },
    { label: "Gatsby", value: "gatsby" },
    { label: "Ember.js", value: "ember" },
    { label: "Preact", value: "preact" },
  ],
})

```

### Extended Select

Use extended selection mode to allow users to select multiple items using
keyboard shortcuts like Cmd/Ctrl for advanced selection patterns.

```tsx
"use client"

import { Kbd, Listbox, createListCollection } from "@chakra-ui/react"

export const ListboxExtendedSelect = () => {
  return (
    <Listbox.Root collection={frameworks} selectionMode="extended">
      <Listbox.Label>
        Select frameworks (hold ⌘ or ^ to select multiple)
      </Listbox.Label>
      <Listbox.Content maxW="320px">
        {frameworks.items.map((framework) => (
          <Listbox.Item item={framework} key={framework.value}>
            <Listbox.ItemText>{framework.label}</Listbox.ItemText>
            
          </Listbox.Item>
        ))}
      </Listbox.Content>
    </Listbox.Root>
  )
}

const frameworks = createListCollection({
  items: [
    { label: "React.js", value: "react" },
    { label: "Vue.js", value: "vue" },
    { label: "Angular", value: "angular" },
    { label: "Svelte", value: "svelte" },
  ],
})

```

### With Checkmark

Display custom checkmarks for multiple selection scenarios, providing clear
visual feedback for selected items.

```tsx
"use client"

import {
  Checkmark,
  Listbox,
  createListCollection,
  useListboxItemContext,
} from "@chakra-ui/react"

const ListboxItemCheckmark = () => {
  const itemState = useListboxItemContext()
  return (
    <Checkmark
      filled
      size="sm"
      checked={itemState.selected}
      disabled={itemState.disabled}
    />
  )
}

export const ListboxWithCheckmark = () => {
  return (
    <Listbox.Root collection={frameworks} selectionMode="multiple" maxW="320px">
      <Listbox.Label>Select frameworks (with checkmarks)</Listbox.Label>
      <Listbox.Content>
        {frameworks.items.map((framework) => (
          <Listbox.Item item={framework} key={framework.value}>
            
            <Listbox.ItemText>{framework.label}</Listbox.ItemText>
          </Listbox.Item>
        ))}
      </Listbox.Content>
    </Listbox.Root>
  )
}

const frameworks = createListCollection({
  items: [
    { label: "React.js", value: "react" },
    { label: "Vue.js", value: "vue" },
    { label: "Angular", value: "angular" },
    { label: "Svelte", value: "svelte" },
    { label: "Next.js", value: "nextjs" },
    { label: "Nuxt.js", value: "nuxtjs" },
  ],
})

```

### With Icon

Add icons to listbox items to provide visual context and improve recognition of
different options.

```tsx
"use client"

import { Box, Listbox, createListCollection } from "@chakra-ui/react"
import { LuAtom, LuGlobe, LuPalette, LuZap } from "react-icons/lu"

export const ListboxWithIcon = () => {
  return (
    <Listbox.Root collection={frameworks} maxW="320px">
      <Listbox.Label>Select framework</Listbox.Label>
      <Listbox.Content>
        {frameworks.items.map((framework) => (
          <Listbox.Item item={framework} key={framework.value}>
            
              
                {framework.icon}
              
              <Listbox.ItemText>{framework.label}</Listbox.ItemText>
            
            
          </Listbox.Item>
        ))}
      </Listbox.Content>
    </Listbox.Root>
  )
}

const frameworks = createListCollection({
  items: [
    { label: "React.js", value: "react", icon:  },
    { label: "Vue.js", value: "vue", icon:  },
    { label: "Angular", value: "angular", icon:  },
    { label: "Svelte", value: "svelte", icon:  },
  ],
})

```

### With Description

Include additional descriptive text for each item to provide more context and
help users make informed choices.

```tsx
"use client"

import { Box, Listbox, Text, createListCollection } from "@chakra-ui/react"

export const ListboxWithDescription = () => {
  return (
    <Listbox.Root collection={frameworks} maxW="400px">
      <Listbox.Label>Select framework</Listbox.Label>
      <Listbox.Content>
        {frameworks.items.map((framework) => (
          <Listbox.Item item={framework} key={framework.value}>
            
              <Listbox.ItemText>{framework.label}</Listbox.ItemText>
              
                {framework.description}
              
            
            
          </Listbox.Item>
        ))}
      </Listbox.Content>
    </Listbox.Root>
  )
}

const frameworks = createListCollection({
  items: [
    {
      label: "React.js",
      value: "react",
      description: "A JavaScript library for building user interfaces",
    },
    {
      label: "Vue.js",
      value: "vue",
      description: "The progressive JavaScript framework",
    },
    {
      label: "Angular",
      value: "angular",
      description: "Platform for building mobile and desktop web applications",
    },
    {
      label: "Svelte",
      value: "svelte",
      description: "Cybernetically enhanced web apps",
    },
    {
      label: "Next.js",
      value: "nextjs",
      description: "The React framework for production",
    },
  ],
})

```

### With Input

Combine a search input with the listbox to filter options dynamically, making it
easy to find specific items in long lists.

```tsx
"use client"

import { Input, Listbox, useFilter, useListCollection } from "@chakra-ui/react"

export const ListboxWithInput = () => {
  const { contains } = useFilter({ sensitivity: "base" })

  const { collection, filter } = useListCollection({
    initialItems: [
      { label: "React.js", value: "react" },
      { label: "Vue.js", value: "vue" },
      { label: "Angular", value: "angular" },
      { label: "Svelte", value: "svelte" },
      { label: "Next.js", value: "nextjs" },
      { label: "Nuxt.js", value: "nuxtjs" },
      { label: "Remix", value: "remix" },
      { label: "Gatsby", value: "gatsby" },
      { label: "Ember.js", value: "ember" },
      { label: "Preact", value: "preact" },
    ],
    filter: contains,
  })

  return (
    <Listbox.Root maxW="320px" collection={collection}>
      <Listbox.Label>Select Framework</Listbox.Label>
      <Listbox.Input
        as={Input}
        placeholder="Type to filter frameworks..."
        onChange={(e) => filter(e.target.value)}
      />
      <Listbox.Content maxH="200px">
        {collection.items.map((framework) => (
          <Listbox.Item item={framework} key={framework.value}>
            <Listbox.ItemText>{framework.label}</Listbox.ItemText>
            
          </Listbox.Item>
        ))}

        <Listbox.Empty>No frameworks found</Listbox.Empty>
      </Listbox.Content>
    </Listbox.Root>
  )
}

```
