### Rehydrate Value

In some cases, where a combobox has a `defaultValue` but the collection is not
loaded yet, here's an example of how to rehydrate the value and populate the
input value.

```tsx
"use client"

import {
  Combobox,
  For,
  HStack,
  Portal,
  Span,
  Spinner,
  useCombobox,
  useListCollection,
} from "@chakra-ui/react"
import { useRef, useState } from "react"
import { useAsync } from "react-use"

export const ComboboxRehydrateValue = () => {
  const [inputValue, setInputValue] = useState("")

  const { collection, set } = useListCollection({
    initialItems: [],
    itemToString: (item) => item.name,
    itemToValue: (item) => item.name,
  })

  const combobox = useCombobox({
    collection,
    defaultValue: ["C-3PO"],
    placeholder: "Example: Dexter",
    inputValue,
    onInputValueChange: (e) => setInputValue(e.inputValue),
  })

  const state = useAsync(async () => {
    const response = await fetch(
      `https://swapi.py4e.com/api/people/?search=${inputValue}`,
    )
    const data = await response.json()
    set(data.results)
  }, [inputValue, set])

  // Rehydrate the value
  const hydrated = useRef(false)
  if (combobox.value.length && collection.size && !hydrated.current) {
    combobox.syncSelectedItems()
    hydrated.current = true
  }

  return (
    <Combobox.RootProvider value={combobox} width="320px">
      <Combobox.Label>Search Star Wars Characters</Combobox.Label>

      <Combobox.Control>
        
      </Combobox.Control>

      
        <Combobox.Positioner>
          <Combobox.Content>
            {state.loading ? (
              
                
                Loading...
              
            ) : state.error ? (
              
                {state.error.message}
              
            ) : (
              <For
                each={collection.items}
                fallback={<Combobox.Empty>No items</Combobox.Empty>}
              >
                {(item) => (
                  <Combobox.Item key={item.name} item={item}>
                    
                      {item.name}
                      
                        {item.height}cm / {item.mass}kg
                      
                    
                    
                  </Combobox.Item>
                )}
              
            )}
          </Combobox.Content>
        </Combobox.Positioner>
      
    </Combobox.RootProvider>
  )
}

interface Character {
  name: string
  height: string
  mass: string
  created: string
  edited: string
  url: string
}

```
