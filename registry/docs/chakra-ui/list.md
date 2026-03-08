# List

```tsx
import { List } from "@chakra-ui/react"

export const ListBasic = () => (
  <List.Root>
    <List.Item>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit
    </List.Item>
    <List.Item>
      Assumenda, quia temporibus eveniet a libero incidunt suscipit
    </List.Item>
    <List.Item>
      Quidem, ipsam illum quis sed voluptatum quae eum fugit earum
    </List.Item>
  </List.Root>
)

```

## Usage

```jsx
import { List } from "@chakra-ui/react"
```

```jsx
<List.Root>
  <List.Item>Item 1</List.Item>
  <List.Item>Item 2</List.Item>
</List.Root>
```

## Examples

### Ordered

Pass the `as="ol"` prop to create an ordered list

```tsx
import { List } from "@chakra-ui/react"

export const ListOrdered = () => {
  return (
    <List.Root as="ol">
      <List.Item>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit
      </List.Item>
      <List.Item>
        Assumenda, quia temporibus eveniet a libero incidunt suscipit
      </List.Item>
      <List.Item>
        Quidem, ipsam illum quis sed voluptatum quae eum fugit earum
      </List.Item>
    </List.Root>
  )
}

```

### Icon

Use the `List.Indicator` component to add an icon to the list

```tsx
import { List } from "@chakra-ui/react"
import { LuCircleCheck, LuCircleDashed } from "react-icons/lu"

export const ListWithIcon = () => {
  return (
    <List.Root gap="2" variant="plain" align="center">
      <List.Item>
        <List.Indicator asChild color="green.500">
          
        </List.Indicator>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit
      </List.Item>
      <List.Item>
        <List.Indicator asChild color="green.500">
          
        </List.Indicator>
        Assumenda, quia temporibus eveniet a libero incidunt suscipit
      </List.Item>
      <List.Item>
        <List.Indicator asChild color="green.500">
          
        </List.Indicator>
        Quidem, ipsam illum quis sed voluptatum quae eum fugit earum
      </List.Item>
    </List.Root>
  )
}

```

### Nested

Here's an example of a nested list

```tsx
import { List } from "@chakra-ui/react"

export const ListNested = () => {
  return (
    <List.Root>
      <List.Item>First order item</List.Item>
      <List.Item>First order item</List.Item>
      <List.Item>
        First order item with list
        <List.Root ps="5">
          <List.Item>Nested item</List.Item>
          <List.Item>Nested item</List.Item>
          <List.Item>Nested item</List.Item>
        </List.Root>
      </List.Item>
      <List.Item>First order item</List.Item>
    </List.Root>
  )
}

```

### Marker Style

Use the `_marker` prop to style the marker of the list

```tsx
import { List } from "@chakra-ui/react"

const items = [
  "Your failure to comply with any provision of these Terms of Service;",
  "Your use of the Services, including but not limited to economic, physical, emotional, psychological or privacy related considerations; and",
  "Your actions to knowingly affect the Services via any bloatware, malware, computer virus, worm, Trojan horse, spyware, adware, crimeware, scareware, rootkit or any other program installed in a way that executable code of any program is scheduled to utilize or utilizes processor cycles during periods of time when such program is not directly or indirectly being used.",
]

export const ListWithMarkerStyle = () => {
  return (
    <List.Root as="ol" listStyle="decimal">
      {items.map((item, index) => (
        <List.Item key={index} _marker={{ color: "inherit" }}>
          {item}
        </List.Item>
      ))}
    </List.Root>
  )
}

```

## Props

| Prop | Default | Type | Description |
| --- | --- | --- | --- |
| colorPalette | gray | `'gray' \| 'red' \| 'orange' \| 'yellow' \| 'green' \| 'teal' \| 'blue' \| 'cyan' \| 'purple' \| 'pink'` | The color palette of the component |
| variant | marker | `'marker' \| 'plain'` | The variant of the component |
| as | undefined | `React.ElementType` | The underlying element to render. |
| asChild | undefined | `boolean` | Use the provided child element as the default rendered element, combining their props and behavior. |
| unstyled | undefined | `boolean` | Whether to remove the component's style. |
| align | undefined | `'center' \| 'start' \| 'end'` | The align of the component |

## Explorer

Explore the `List` component parts interactively. Click on parts in the sidebar
to highlight them in the preview.

<Explorer name="list-basic" />

# Listbox

```tsx
"use client"

import { Listbox, createListCollection } from "@chakra-ui/react"

export const ListboxBasic = () => {
  return (
    <Listbox.Root collection={frameworks} width="320px">
      <Listbox.Label>Select framework</Listbox.Label>
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
  ],
})

```

## Usage

```jsx
import { Listbox } from "@chakra-ui/react"
```

```jsx
<Listbox.Root>
  
  <Listbox.Content>
    <Listbox.Item>
      
      
    </Listbox.Item>
  </Listbox.Content>
</Listbox.Root>
```

To setup the listbox, use `useListCollection` to manage the
[list collection](https://ark-ui.com/docs/collections/list-collection).

## Examples

### Controlled

Control the listbox value externally using the `value` and `onValueChange` props
for custom state management.

```tsx
"use client"

import { Code, Listbox, Stack, createListCollection } from "@chakra-ui/react"
import { useState } from "react"

export const ListboxControlled = () => {
  const [value, setValue] = useState<string[]>([])

  return (
    
      <Listbox.Root
        collection={frameworks}
        value={value}
        onValueChange={(details) => setValue(details.value)}
      >
        <Listbox.Label>Select framework</Listbox.Label>
        <Listbox.Content>
          {frameworks.items.map((framework) => (
            <Listbox.Item item={framework} key={framework.value}>
              <Listbox.ItemText>{framework.label}</Listbox.ItemText>
              
            </Listbox.Item>
          ))}
        </Listbox.Content>
      </Listbox.Root>

      
        Selected: {JSON.stringify(value, null, 2)}
      
    
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

### With Store

An alternative way to control the listbox is to use the `RootProvider` component
and the `useListbox` store hook.

This way you can access the listbox state and methods from outside the listbox.

> Use `RootProvider + useListbox` or `Root`, not both.

```tsx
"use client"

import {
  Code,
  Listbox,
  Stack,
  createListCollection,
  useListbox,
} from "@chakra-ui/react"

export const ListboxWithStore = () => {
  const listbox = useListbox({ collection: frameworks })

  return (
    
      <Listbox.RootProvider value={listbox}>
        <Listbox.Label>Select framework</Listbox.Label>
        <Listbox.Content>
          {frameworks.items.map((framework) => (
            <Listbox.Item item={framework} key={framework.value}>
              <Listbox.ItemText>{framework.label}</Listbox.ItemText>
              
            </Listbox.Item>
          ))}
        </Listbox.Content>
      </Listbox.RootProvider>

      
        Selected: {JSON.stringify(listbox.value, null, 2)}
      
    
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

### Disabled Item

Disable specific items in the listbox to indicate unavailable options while
keeping them visible for context.

```tsx
"use client"

import { Listbox, createListCollection } from "@chakra-ui/react"

export const ListboxDisabledItem = () => {
  return (
    <Listbox.Root collection={frameworks} width="320px">
      <Listbox.Label>Select framework</Listbox.Label>
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
    { label: "Vue.js", value: "vue", disabled: true },
    { label: "Angular", value: "angular" },
    { label: "Svelte", value: "svelte", disabled: true },
    { label: "Next.js", value: "nextjs" },
  ],
})

```

### Grouped

Use item groups to organize related options with clear section headers, making
it easier for users to find specific categories of items.

```tsx
"use client"

import { Listbox, createListCollection } from "@chakra-ui/react"

export const ListboxGrouped = () => {
  return (
    <Listbox.Root collection={collection} width="320px">
      <Listbox.Label>Select media</Listbox.Label>
      <Listbox.Content divideY="1px">
        {collection.group().map(([category, items]) => (
          <Listbox.ItemGroup key={category}>
            <Listbox.ItemGroupLabel>{category}</Listbox.ItemGroupLabel>
            {items.map((item) => (
              <Listbox.Item item={item} key={item.value}>
                <Listbox.ItemText>{item.label}</Listbox.ItemText>
                
              </Listbox.Item>
            ))}
          </Listbox.ItemGroup>
        ))}
      </Listbox.Content>
    </Listbox.Root>
  )
}

const collection = createListCollection({
  items: [
    { label: "Naruto", value: "naruto", category: "Anime" },
    { label: "One Piece", value: "one-piece", category: "Anime" },
    { label: "Dragon Ball", value: "dragon-ball", category: "Anime" },
    {
      label: "The Shawshank Redemption",
      value: "the-shawshank-redemption",
      category: "Movies",
    },
    { label: "The Godfather", value: "the-godfather", category: "Movies" },
    { label: "The Dark Knight", value: "the-dark-knight", category: "Movies" },
  ],
  groupBy: (item) => item.category,
})

```
