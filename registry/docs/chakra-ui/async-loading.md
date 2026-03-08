### Async Loading

Here's an example of loading the `collection` asynchronously as users type,
perfect for API-driven search interfaces.

```tsx
"use client"

import {
  Combobox,
  HStack,
  Portal,
  Span,
  Spinner,
  useListCollection,
} from "@chakra-ui/react"
import { useState } from "react"
import { useAsync } from "react-use"

export const ComboboxWithAsyncContent = () => {
  const [inputValue, setInputValue] = useState("")

  const { collection, set } = useListCollection({
    initialItems: [],
    itemToString: (item) => item.name,
    itemToValue: (item) => item.name,
  })

  const state = useAsync(async () => {
    const response = await fetch(
      `https://swapi.py4e.com/api/people/?search=${inputValue}`,
    )
    const data = await response.json()
    set(data.results)
  }, [inputValue, set])

  return (
    <Combobox.Root
      width="320px"
      collection={collection}
      placeholder="Example: C-3PO"
      onInputValueChange={(e) => setInputValue(e.inputValue)}
      positioning={{ sameWidth: false, placement: "bottom-start" }}
    >
      <Combobox.Label>Search Star Wars Characters</Combobox.Label>

      <Combobox.Control>
        
        <Combobox.IndicatorGroup>
          
          
        </Combobox.IndicatorGroup>
      </Combobox.Control>

      
        <Combobox.Positioner>
          <Combobox.Content minW="sm">
            {state.loading ? (
              
                
                Loading...
              
            ) : state.error ? (
              
                Error fetching
              
            ) : (
              collection.items?.map((character) => (
                <Combobox.Item key={character.name} item={character}>
                  
                    
                      {character.name}
                    
                    
                      {character.height}cm / {character.mass}kg
                    
                  
                  
                </Combobox.Item>
              ))
            )}
          </Combobox.Content>
        </Combobox.Positioner>
      
    </Combobox.Root>
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
