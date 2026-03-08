### Creatable

Here's an example of how to allow users to create new options by typing values
that don't exist in the list. It uses the `useCombobox` and
`Combobox.RootProvider` components for smoother integration and management.

> **Note:** This example is not fully tested. Feel free to use it as a starting
> point and improve it according to your needs.

```tsx
"use client"

import {
  Combobox,
  HStack,
  Portal,
  Span,
  createListCollection,
  useCombobox,
  useFilter,
} from "@chakra-ui/react"
import { useMemo, useRef, useState } from "react"
import { flushSync } from "react-dom"

export const ComboboxWithCreateable = () => {
  const combobox = useCreatableCombobox({
    initialItems: [
      { label: "React", value: "react" },
      { label: "Solid", value: "solid" },
      { label: "Vue", value: "vue" },
      { label: "Svelte", value: "svelte" },
    ],
    onCreateItem: (item) => {
      console.log("Created new item:", item)
    },
    createOptionMode: "prepend",
  })

  return (
    <Combobox.RootProvider value={combobox} maxW="320px">
      <Combobox.Label>Choose Framework</Combobox.Label>
      <Combobox.Control>
        
        <Combobox.IndicatorGroup>
          
          
        </Combobox.IndicatorGroup>
      </Combobox.Control>

      
        <Combobox.Positioner>
          <Combobox.Content>
            {combobox.collection.items.map((item) => (
              <Combobox.Item key={item.value} item={item}>
                {isNewItemValue(item.value) ? (
                  <Combobox.ItemText>
                    {`+ Create "${item.label}"`}
                  </Combobox.ItemText>
                ) : (
                  
                    <Combobox.ItemText flex="0">{item.label}</Combobox.ItemText>
                    {item.isNew && NEW}
                  
                )}
                
              </Combobox.Item>
            ))}
          </Combobox.Content>
        </Combobox.Positioner>
      
    </Combobox.RootProvider>
  )
}

interface Item {
  label: string
  value: string
  isNew?: boolean
}

type CreateOptionMode = "append" | "prepend"

const NEW_ITEM_VALUE = "[[new]]"

const createNewItem = (value: string): Item => ({
  label: value,
  value: NEW_ITEM_VALUE,
})

const isNewItemValue = (value: string) => value === NEW_ITEM_VALUE

const replaceNewItemValue = (values: string[], value: string) =>
  values.map((v) => (v === NEW_ITEM_VALUE ? value : v))

const getNewItemData = (inputValue: string): Item => ({
  label: inputValue,
  value: inputValue,
  isNew: true,
})

const updateItems = (v: Item[], i: Item, mode: CreateOptionMode) => {
  return mode === "prepend" ? [i, ...v] : [...v, i]
}

interface UseCreatableComboboxProps {
  initialItems: Item[]
  onCreateItem: (item: Item) => void
  createOptionMode: CreateOptionMode
}

function useCreatableCombobox(props: UseCreatableComboboxProps) {
  const { initialItems, onCreateItem, createOptionMode } = props

  const [items, setItems] = useState<Item[]>(initialItems)
  const itemsRef = useRef<Item[]>(initialItems)

  const { contains } = useFilter({ sensitivity: "base" })

  const filterFn = (item: Item, query: string) =>
    !isNewItemValue(item.value) && contains(item.label, query)

  const [selectedValue, setSelectedValue] = useState<string[]>([])

  const collection = useMemo(
    () =>
      createListCollection({
        items,
        itemToString: (item) => item.label,
        itemToValue: (item) => item.value,
      }),
    [items],
  )

  const isValidNewItem = (inputValue: string) => {
    const exactOptionMatch =
      items.filter(
        (item) => item.label.toLowerCase() === inputValue.toLowerCase(),
      ).length > 0
    return !exactOptionMatch && inputValue.trim().length > 0
  }

  const filter = (query: string) => {
    if (isValidNewItem(query)) {
      const newItem = createNewItem(query)
      const filtered = itemsRef.current.filter((item) => filterFn(item, query))
      setItems(updateItems(filtered, newItem, createOptionMode))
      return
    }

    if (query.trim().length === 0) {
      setItems(itemsRef.current)
    } else {
      const filtered = itemsRef.current.filter((item) => filterFn(item, query))
      setItems(filtered)
    }
  }

  const selectNewItem = (inputValue: string) => {
    const newItem = getNewItemData(inputValue)
    const filtered = itemsRef.current.filter(
      (item) => !isNewItemValue(item.value),
    )

    itemsRef.current = updateItems(filtered, newItem, createOptionMode)
    setItems(itemsRef.current)
    onCreateItem?.(newItem)
  }

  const combobox = useCombobox({
    collection,
    allowCustomValue: true,
    onInputValueChange: (details: Combobox.InputValueChangeDetails) => {
      const { inputValue, reason } = details
      if (reason === "input-change" || reason === "item-select") {
        flushSync(() => filter(inputValue))
      }
    },
    onOpenChange(details) {
      const { reason, open } = details
      if (reason === "trigger-click") {
        setItems(itemsRef.current)
      }

      if (!open && selectedValue.length > 0) {
        const inputValue = collection.stringify(selectedValue[0]) || ""
        combobox.setInputValue(inputValue)
      }
    },
    value: selectedValue,
    onValueChange(details) {
      const { value } = details
      const inputValue = combobox.inputValue
      setSelectedValue(replaceNewItemValue(value, inputValue))
      if (value.includes(NEW_ITEM_VALUE)) {
        selectNewItem(inputValue)
      }
    },
  })

  return combobox
}

```

## Guides

### Controlling the value

Use `value` and `onValueChange` for controlled mode. When changing the value
externally (e.g. form reset, sync) with filtering enabled, the input can show
empty if the selected item is filtered out. Call `reset()` before updating:

```tsx
const { collection, filter, reset } = useListCollection({
  initialItems: items,
  filter: contains,
})

// When changing value externally, reset the filter first
const setValueWithReset = (v: string[]) => {
  reset()
  setValue(v)
}
```
