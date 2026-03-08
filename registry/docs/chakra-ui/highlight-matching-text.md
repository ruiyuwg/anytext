### Highlight Matching Text

Here's an example of composing the `Combobox.Item` and `Highlight` components to
highlight matching text in search results.

```tsx
"use client"

import {
  Combobox,
  Highlight,
  Portal,
  useComboboxContext,
  useFilter,
  useListCollection,
} from "@chakra-ui/react"

export const ComboboxWithHighlight = () => {
  const { contains } = useFilter({ sensitivity: "base" })

  const { collection, filter } = useListCollection({
    initialItems: frameworks,
    filter: contains,
  })

  return (
    <Combobox.Root
      collection={collection}
      onInputValueChange={(e) => filter(e.inputValue)}
      width="320px"
    >
      <Combobox.Label>Select framework</Combobox.Label>
      <Combobox.Control>
        
        <Combobox.IndicatorGroup>
          
          
        </Combobox.IndicatorGroup>
      </Combobox.Control>
      
        <Combobox.Positioner>
          <Combobox.Content>
            <Combobox.Empty>No items found</Combobox.Empty>
            {collection.items.map((item) => (
              
            ))}
          </Combobox.Content>
        </Combobox.Positioner>
      
    </Combobox.Root>
  )
}

function ComboboxItem(props: { item: { label: string; value: string } }) {
  const { item } = props
  const combobox = useComboboxContext()
  return (
    <Combobox.Item item={item} key={item.value}>
      <Combobox.ItemText>
        <Highlight
          ignoreCase
          query={combobox.inputValue}
          styles={{ bg: "yellow.emphasized", fontWeight: "medium" }}
        >
          {item.label}
        
      </Combobox.ItemText>
    </Combobox.Item>
  )
}

const frameworks = [
  { label: "React", value: "react" },
  { label: "Solid", value: "solid" },
  { label: "Vue", value: "vue" },
  { label: "Angular", value: "angular" },
  { label: "Svelte", value: "svelte" },
  { label: "Preact", value: "preact" },
  { label: "Qwik", value: "qwik" },
  { label: "Lit", value: "lit" },
  { label: "Alpine.js", value: "alpinejs" },
  { label: "Ember", value: "ember" },
  { label: "Next.js", value: "nextjs" },
]

```

### Open on Click

Use the `openOnClick` prop to open the combobox when the user clicks on the
input.

```tsx
"use client"

import {
  Combobox,
  Portal,
  useFilter,
  useListCollection,
} from "@chakra-ui/react"

export const ComboboxOpenOnClick = () => {
  const { contains } = useFilter({ sensitivity: "base" })

  const { collection, filter } = useListCollection({
    initialItems: frameworks,
    filter: contains,
  })

  return (
    <Combobox.Root
      collection={collection}
      onInputValueChange={(e) => filter(e.inputValue)}
      width="320px"
      openOnClick
    >
      <Combobox.Label>Select framework</Combobox.Label>
      <Combobox.Control>
        
        <Combobox.IndicatorGroup>
          
          
        </Combobox.IndicatorGroup>
      </Combobox.Control>
      
        <Combobox.Positioner>
          <Combobox.Content>
            <Combobox.Empty>No items found</Combobox.Empty>
            {collection.items.map((item) => (
              <Combobox.Item item={item} key={item.value}>
                {item.label}
                
              </Combobox.Item>
            ))}
          </Combobox.Content>
        </Combobox.Positioner>
      
    </Combobox.Root>
  )
}

const frameworks = [
  { label: "React", value: "react" },
  { label: "Solid", value: "solid" },
  { label: "Vue", value: "vue" },
  { label: "Angular", value: "angular" },
  { label: "Svelte", value: "svelte" },
  { label: "Preact", value: "preact" },
  { label: "Qwik", value: "qwik" },
  { label: "Lit", value: "lit" },
  { label: "Alpine.js", value: "alpinejs" },
  { label: "Ember", value: "ember" },
  { label: "Next.js", value: "nextjs" },
]

```
