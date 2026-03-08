### Form + Custom Object

When working with custom objects in forms, you often need to submit the
programmatic value rather than the display value. This example shows how to
combine custom object mapping with form submission using a hidden input.

The key is using `itemToValue` to define what gets submitted, while
`itemToString` controls what users see. A hidden input captures the programmatic
value for form submission.

> In this example, users see "🇺🇸 United States" but the form submits "US".

```tsx
"use client"

import {
  Button,
  Combobox,
  Field,
  Portal,
  Stack,
  useComboboxContext,
  useFilter,
  useListCollection,
} from "@chakra-ui/react"

// This is a hidden input that is used to store the value of the combobox
const ComboboxHiddenInput = (props: React.ComponentProps<"input">) => {
  const combobox = useComboboxContext()
  return 
}

export const ComboboxWithFormSubmit = () => {
  const { contains } = useFilter({ sensitivity: "base" })

  const { collection, filter } = useListCollection({
    initialItems: countries,
    itemToString: (item) => item.country,
    itemToValue: (item) => item.code,
    filter: contains,
  })

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault()
    const formData = new FormData(event.currentTarget)
    const country = formData.get("country")
    console.log("Form submitted with country code:", country)
    alert(`Selected country code: ${country}`)
  }

  const handleInputChange = (details: Combobox.InputValueChangeDetails) => {
    filter(details.inputValue)
  }

  return (
    
      
        <Field.Root width="320px">
          <Field.Label>Country</Field.Label>
          <Combobox.Root
            collection={collection}
            onInputValueChange={handleInputChange}
          >
            <Combobox.Control>
              
              <Combobox.IndicatorGroup>
                
                
              </Combobox.IndicatorGroup>
            </Combobox.Control>

            

            
              <Combobox.Positioner>
                <Combobox.Content>
                  <Combobox.Empty>No countries found</Combobox.Empty>
                  {collection.items.map((item) => (
                    <Combobox.Item key={item.code} item={item}>
                      {item.flag} {item.country}
                      
                    </Combobox.Item>
                  ))}
                </Combobox.Content>
              </Combobox.Positioner>
            
          </Combobox.Root>
          <Field.HelperText>
            The form will submit the country code (e.g. "US"), not the display
            name
          </Field.HelperText>
        </Field.Root>

        
          Submit
        
      
    
  )
}

const countries = [
  { country: "United States", code: "US", flag: "🇺🇸" },
  { country: "Canada", code: "CA", flag: "🇨🇦" },
  { country: "Australia", code: "AU", flag: "🇦🇺" },
  { country: "United Kingdom", code: "GB", flag: "🇬🇧" },
  { country: "New Zealand", code: "NZ", flag: "🇳🇿" },
  { country: "South Africa", code: "ZA", flag: "🇿🇦" },
  { country: "India", code: "IN", flag: "🇮🇳" },
  { country: "China", code: "CN", flag: "🇨🇳" },
  { country: "Japan", code: "JP", flag: "🇯🇵" },
  { country: "Korea", code: "KR", flag: "🇰🇷" },
  { country: "Vietnam", code: "VN", flag: "🇻🇳" },
  { country: "Thailand", code: "TH", flag: "🇹🇭" },
  { country: "Malaysia", code: "MY", flag: "🇲🇾" },
  { country: "Indonesia", code: "ID", flag: "🇮🇩" },
  { country: "Philippines", code: "PH", flag: "🇵🇭" },
  { country: "Singapore", code: "SG", flag: "🇸🇬" },
  { country: "Hong Kong", code: "HK", flag: "🇭🇰" },
  { country: "Macau", code: "MO", flag: "🇲🇴" },
  { country: "Taiwan", code: "TW", flag: "🇹🇼" },
]

```
