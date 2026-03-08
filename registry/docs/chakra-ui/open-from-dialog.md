### Open From Dialog

To use the combobox within a dialog or popover component, avoid wrapping the
`Combobox.Positioner` within the `Portal`.

```diff
-
  <Combobox.Positioner>
    <Combobox.Content>
      {/* ... */}
    </Combobox.Content>
  </Combobox.Positioner>
-
```

If you use a `Dialog` and have set `scrollBehavior="inside"`, you need to:

- Set the combobox positioning to `fixed` to avoid the combobox from being
  clipped by the dialog.
- Set `hideWhenDetached` to `true` to hide the combobox when the trigger is
  scrolled out of view.

```tsx
<Combobox.Root positioning={{ strategy: "fixed", hideWhenDetached: true }}>
  {/* ... */}
</Combobox.Root>
```

```tsx
"use client"

import {
  Button,
  Combobox,
  Popover,
  Portal,
  useFilter,
  useListCollection,
} from "@chakra-ui/react"

export const ComboboxOpenFromPopover = () => {
  return (
    <Popover.Root size="xs">
      <Popover.Trigger asChild>
        
          Toggle popover
        
      </Popover.Trigger>
      
        <Popover.Positioner>
          <Popover.Content>
            <Popover.Header>Select framework</Popover.Header>
            <Popover.Body>
              
            </Popover.Body>
          </Popover.Content>
        </Popover.Positioner>
      
    </Popover.Root>
  )
}

const ComboboxDemo = () => {
  const { contains } = useFilter({ sensitivity: "base" })

  const { collection, filter } = useListCollection({
    initialItems: frameworks,
    filter: contains,
  })

  return (
    <Combobox.Root
      collection={collection}
      onInputValueChange={(e) => filter(e.inputValue)}
    >
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
