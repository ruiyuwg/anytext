# Radio Card

```tsx
import { HStack, RadioCard } from "@chakra-ui/react"

export const RadioCardBasic = () => {
  return (
    <RadioCard.Root defaultValue="next">
      <RadioCard.Label>Select framework</RadioCard.Label>
      
        {items.map((item) => (
          <RadioCard.Item key={item.value} value={item.value}>
            
            <RadioCard.ItemControl>
              <RadioCard.ItemText>{item.title}</RadioCard.ItemText>
              
            </RadioCard.ItemControl>
          </RadioCard.Item>
        ))}
      
    </RadioCard.Root>
  )
}

const items = [
  { value: "next", title: "Next.js" },
  { value: "vite", title: "Vite" },
  { value: "astro", title: "Astro" },
]

```

## Usage

```tsx
import { RadioCard } from "@chakra-ui/react"
```

```tsx
<RadioCard.Root>
  
  <RadioCard.Item>
    
    <RadioCard.ItemControl>
      <RadioCard.ItemContent>
        
        
      </RadioCard.ItemContent>
      
    </RadioCard.ItemControl>
  </RadioCard.Item>
</RadioCard.Root>
```

:::info

If you prefer a closed component composition, check out the
[snippet below](#closed-component).

:::

## Examples

### Description

Here's an example of how to add some further description to the radio card.

```tsx
import { HStack, RadioCard } from "@chakra-ui/react"

export const RadioCardWithDescription = () => {
  return (
    <RadioCard.Root defaultValue="next">
      <RadioCard.Label>Select framework</RadioCard.Label>
      
        {items.map((item) => (
          <RadioCard.Item key={item.value} value={item.value}>
            
            <RadioCard.ItemControl>
              <RadioCard.ItemContent>
                <RadioCard.ItemText>{item.title}</RadioCard.ItemText>
                <RadioCard.ItemDescription>
                  {item.description}
                </RadioCard.ItemDescription>
              </RadioCard.ItemContent>
              
            </RadioCard.ItemControl>
          </RadioCard.Item>
        ))}
      
    </RadioCard.Root>
  )
}

const items = [
  { value: "next", title: "Next.js", description: "Best for apps" },
  { value: "vite", title: "Vite", description: "Best for SPAs" },
  { value: "astro", title: "Astro", description: "Best for static sites" },
]

```

### Sizes

Pass the `size` prop to the `RadioCard.Root` component to change the size of the
radio card.

```tsx
import { For, HStack, RadioCard, Stack } from "@chakra-ui/react"

export const RadioCardWithSizes = () => {
  return (
    
      
        {(size) => (
          <RadioCard.Root key={size} size={size} defaultValue="next">
            <RadioCard.Label>size = ({size})</RadioCard.Label>
            
              {items.map((item) => (
                <RadioCard.Item key={item.value} value={item.value}>
                  
                  <RadioCard.ItemControl>
                    <RadioCard.ItemText>{item.title}</RadioCard.ItemText>
                    
                  </RadioCard.ItemControl>
                </RadioCard.Item>
              ))}
            
          </RadioCard.Root>
        )}
      
    
  )
}

const items = [
  { value: "next", title: "Next.js" },
  { value: "vite", title: "Vite" },
]

```

### Colors

Pass the `colorPalette` prop to the `RadioCard.Root` component to change the
color of the radio card.

```tsx
import { For, HStack, RadioCard, Stack } from "@chakra-ui/react"

export const RadioCardWithColors = () => {
  return (
    
      
        {(colorPalette) => (
          <RadioCard.Root
            key={colorPalette}
            colorPalette={colorPalette}
            defaultValue="next"
          >
            <RadioCard.Label>Select Framework</RadioCard.Label>
            
              {items.map((item) => (
                <RadioCard.Item key={item.value} value={item.value}>
                  
                  <RadioCard.ItemControl>
                    <RadioCard.ItemText>{item.title}</RadioCard.ItemText>
                    
                  </RadioCard.ItemControl>
                </RadioCard.Item>
              ))}
            
          </RadioCard.Root>
        )}
      
    
  )
}

const items = [
  { value: "next", title: "Next.js" },
  { value: "vite", title: "Vite" },
]

```

### Variants

Pass the `variant` prop to the `RadioCard.Root` component to change the visual
style of the radio card.

```tsx
import { For, HStack, RadioCard, Stack } from "@chakra-ui/react"

export const RadioCardWithVariants = () => {
  return (
    
      
        {(variant) => (
          <RadioCard.Root
            colorPalette="teal"
            key={variant}
            variant={variant}
            defaultValue="next"
          >
            <RadioCard.Label>variant = ({variant})</RadioCard.Label>
            
              {items.map((item) => (
                <RadioCard.Item key={item.value} value={item.value}>
                  
                  <RadioCard.ItemControl>
                    <RadioCard.ItemText>{item.title}</RadioCard.ItemText>
                    
                  </RadioCard.ItemControl>
                </RadioCard.Item>
              ))}
            
          </RadioCard.Root>
        )}
      
    
  )
}

const items = [
  { value: "next", title: "Next.js" },
  { value: "vite", title: "Vite" },
]

```

### Icon

Render a custom icon inside the radio card by placing it within
`RadioCard.ItemContent`.

```tsx
import { HStack, Icon, RadioCard } from "@chakra-ui/react"
import { LuArrowRight, LuCircleOff, LuLock } from "react-icons/lu"

export const RadioCardWithIcon = () => {
  return (
    <RadioCard.Root defaultValue="next">
      <RadioCard.Label>Select permission</RadioCard.Label>
      
        {items.map((item) => (
          <RadioCard.Item key={item.value} value={item.value}>
            
            <RadioCard.ItemControl>
              <RadioCard.ItemContent>
                
                  {item.icon}
                
                <RadioCard.ItemText>{item.title}</RadioCard.ItemText>
                <RadioCard.ItemDescription>
                  {item.description}
                </RadioCard.ItemDescription>
              </RadioCard.ItemContent>
              
            </RadioCard.ItemControl>
          </RadioCard.Item>
        ))}
      
    </RadioCard.Root>
  )
}

const items = [
  {
    icon: ,
    value: "allow",
    title: "Allow",
    description: "This user can access the system",
  },
  {
    icon: ,
    value: "deny",
    title: "Deny",
    description: "This user will be denied access to the system",
  },
  {
    icon: ,
    value: "lock",
    title: "Lock",
    description: "This user will be locked out of the system",
  },
]

```

### Controlled

Pass the `value` and `onValueChange` props to the RadioCard.Root component to
control the selected radio card.

```tsx
"use client"

import { HStack, RadioCard } from "@chakra-ui/react"
import { useState } from "react"

export const RadioCardControlled = () => {
  const [value, setValue] = useState("next")

  return (
    <RadioCard.Root value={value} onValueChange={(e) => setValue(e.value)}>
      <RadioCard.Label>Select framework</RadioCard.Label>
      
        {items.map((item) => (
          <RadioCard.Item key={item.value} value={item.value}>
            
            <RadioCard.ItemControl>
              <RadioCard.ItemText>{item.title}</RadioCard.ItemText>
              
            </RadioCard.ItemControl>
          </RadioCard.Item>
        ))}
      
    </RadioCard.Root>
  )
}

const items = [
  { value: "next", title: "Next.js" },
  { value: "vite", title: "Vite" },
  { value: "astro", title: "Astro" },
]

```

### No Indicator

Here's an example of how to use the radio card without an indicator.

```tsx
import { HStack, Icon, RadioCard } from "@chakra-ui/react"
import { RiAppleFill, RiBankCardFill, RiPaypalFill } from "react-icons/ri"

export const RadioCardWithoutIndicator = () => {
  return (
    <RadioCard.Root
      orientation="horizontal"
      align="center"
      justify="center"
      maxW="lg"
      defaultValue="paypal"
    >
      <RadioCard.Label>Payment method</RadioCard.Label>
      
        {items.map((item) => (
          <RadioCard.Item key={item.value} value={item.value}>
            
            <RadioCard.ItemControl>
              
                {item.icon}
              
              <RadioCard.ItemText ms="-4">{item.title}</RadioCard.ItemText>
            </RadioCard.ItemControl>
          </RadioCard.Item>
        ))}
      
    </RadioCard.Root>
  )
}

const items = [
  { value: "paypal", title: "Paypal", icon:  },
  { value: "apple-pay", title: "Apple Pay", icon:  },
  { value: "card", title: "Card", icon:  },
]

```

### No Indicator (Vertical)

Here's an example of a radio card with no indicator and content aligned
vertically.

```tsx
import { HStack, Icon, RadioCard } from "@chakra-ui/react"
import { RiAppleFill, RiBankCardFill, RiPaypalFill } from "react-icons/ri"

export const RadioCardWithoutIndicatorVertical = () => {
  return (
    <RadioCard.Root
      orientation="vertical"
      align="center"
      maxW="400px"
      defaultValue="paypal"
    >
      <RadioCard.Label>Payment method</RadioCard.Label>
      
        {items.map((item) => (
          <RadioCard.Item key={item.value} value={item.value}>
            
            <RadioCard.ItemControl>
              
                {item.icon}
              
              <RadioCard.ItemText>{item.title}</RadioCard.ItemText>
            </RadioCard.ItemControl>
          </RadioCard.Item>
        ))}
      
    </RadioCard.Root>
  )
}

const items = [
  { value: "paypal", title: "Paypal", icon:  },
  { value: "apple-pay", title: "Apple Pay", icon:  },
  { value: "card", title: "Card", icon:  },
]

```

### Responsive Orientation

Use `useBreakpointValue` for responsive orientation — the `orientation` prop
doesn't support responsive object notation.

:::note

Alternatively, render two `RadioCard.Root` instances (one horizontal, one
vertical) and show/hide based on breakpoint using CSS `display`.

:::

```tsx
"use client"

import { HStack, Icon, RadioCard, useBreakpointValue } from "@chakra-ui/react"
import { RiAppleFill, RiBankCardFill, RiPaypalFill } from "react-icons/ri"

export const RadioCardWithResponsiveOrientation = () => {
  const orientation = useBreakpointValue<"horizontal" | "vertical">({
    base: "horizontal",
    md: "vertical",
  })

  return (
    <RadioCard.Root
      orientation={orientation}
      align="center"
      maxW="400px"
      defaultValue="paypal"
    >
      <RadioCard.Label>Payment method</RadioCard.Label>
      
        {items.map((item) => (
          <RadioCard.Item key={item.value} value={item.value}>
            
            <RadioCard.ItemControl>
              
                {item.icon}
              
              <RadioCard.ItemText>{item.title}</RadioCard.ItemText>
            </RadioCard.ItemControl>
          </RadioCard.Item>
        ))}
      
    </RadioCard.Root>
  )
}

const items = [
  { value: "paypal", title: "Paypal", icon:  },
  { value: "apple-pay", title: "Apple Pay", icon:  },
  { value: "card", title: "Card", icon:  },
]

```

### Centered

Here's an example of a radio card with centered text.

```tsx
import { HStack, Icon, RadioCard } from "@chakra-ui/react"
import { LuClock, LuDollarSign, LuTrendingUp } from "react-icons/lu"

export const RadioCardCentered = () => {
  return (
    <RadioCard.Root orientation="vertical" align="center" defaultValue="next">
      <RadioCard.Label>Select contract type</RadioCard.Label>
      
        {items.map((item) => (
          <RadioCard.Item key={item.value} value={item.value}>
            
            <RadioCard.ItemControl>
              
                {item.icon}
              
              <RadioCard.ItemText>{item.title}</RadioCard.ItemText>
              
            </RadioCard.ItemControl>
          </RadioCard.Item>
        ))}
      
    </RadioCard.Root>
  )
}

const items = [
  { icon: , value: "fixed", title: "Fixed Rate" },
  { icon: , value: "milestone", title: "Milestone" },
  { icon: , value: "hourly", title: "Hourly" },
]

```

### Composition

Here's an example of composing the RadioCard with the `Group` component.

```tsx
import { Group, RadioCard } from "@chakra-ui/react"

export const RadioCardComposition = () => {
  return (
    <RadioCard.Root defaultValue="next" gap="4" maxW="sm">
      <RadioCard.Label>How well do you know React?</RadioCard.Label>
      
        {items.map((item) => (
          <RadioCard.Item key={item.value} value={item.value} width="full">
            
            <RadioCard.ItemControl>
              
              <RadioCard.ItemContent>
                <RadioCard.ItemText>{item.title}</RadioCard.ItemText>
                <RadioCard.ItemDescription>
                  {item.description}
                </RadioCard.ItemDescription>
              </RadioCard.ItemContent>
            </RadioCard.ItemControl>
          </RadioCard.Item>
        ))}
      
    </RadioCard.Root>
  )
}

const items = [
  {
    value: "advanced",
    title: "Advanced",
    description: "I love complex things",
  },
  {
    value: "professional",
    title: "Professional",
    description: "I can hack simple things",
  },
  {
    value: "beginner",
    title: "Beginner",
    description: "I don't write code",
  },
]

```

### Addon

Use the `RadioCard.ItemAddon` component to add metadata to the radio card.

```tsx
import { HStack, RadioCard } from "@chakra-ui/react"

export const RadioCardWithAddon = () => {
  return (
    <RadioCard.Root defaultValue="next">
      <RadioCard.Label>Select framework</RadioCard.Label>
      
        {items.map((item) => (
          <RadioCard.Item key={item.value} value={item.value}>
            
            <RadioCard.ItemControl>
              <RadioCard.ItemContent>
                <RadioCard.ItemText>{item.title}</RadioCard.ItemText>
                <RadioCard.ItemDescription>
                  {item.description}
                </RadioCard.ItemDescription>
              </RadioCard.ItemContent>
              
            </RadioCard.ItemControl>
            <RadioCard.ItemAddon>Some addon text</RadioCard.ItemAddon>
          </RadioCard.Item>
        ))}
      
    </RadioCard.Root>
  )
}

const items = [
  { value: "next", title: "Next.js", description: "Best for apps" },
  { value: "vite", title: "Vite", description: "Best for SPAs" },
  { value: "astro", title: "Astro", description: "Best for static sites" },
]

```

### Closed Component

Here's how to setup the Radio card for a closed component composition.

<ExampleCode name="radio-card-closed-component" />

If you want to automatically add the closed component to your project, run the
command:

```bash
npx @chakra-ui/cli snippet add radio-card
```

Here's how to use the it

```tsx

  
  

```

## Props

### Root

| Prop | Default | Type | Description |
| --- | --- | --- | --- |
| orientation | horizontal | `'vertical' \| 'horizontal'` | The orientation of the component |
| colorPalette | gray | `'gray' \| 'red' \| 'orange' \| 'yellow' \| 'green' \| 'teal' \| 'blue' \| 'cyan' \| 'purple' \| 'pink'` | The color palette of the component |
| size | md | `'sm' \| 'md' \| 'lg'` | The size of the component |
| variant | outline | `'surface' \| 'subtle' \| 'outline' \| 'solid'` | The variant of the component |
| align | start | `'start' \| 'end' \| 'center'` | The align of the component |
| as | undefined | `React.ElementType` | The underlying element to render. |
| asChild | undefined | `boolean` | Use the provided child element as the default rendered element, combining their props and behavior. |
| unstyled | undefined | `boolean` | Whether to remove the component's style. |
| defaultValue | undefined | `string` | The initial value of the checked radio when rendered.
Use when you don't need to control the value of the radio group. |
| disabled | undefined | `boolean` | If `true`, the radio group will be disabled |
| form | undefined | `string` | The associate form of the underlying input. |
| id | undefined | `string` | The unique identifier of the machine. |
| ids | undefined | `Partial<{\n  root: string\n  label: string\n  indicator: string\n  item: (value: string) => string\n  itemLabel: (value: string) => string\n  itemControl: (value: string) => string\n  itemHiddenInput: (value: string) => string\n}>` | The ids of the elements in the radio. Useful for composition. |
| name | undefined | `string` | The name of the input fields in the radio
(Useful for form submission). |
| onValueChange | undefined | `(details: ValueChangeDetails) => void` | Function called once a radio is checked |
| readOnly | undefined | `boolean` | Whether the checkbox is read-only |
| value | undefined | `string` | The controlled value of the radio group |
| justify | undefined | `'start' \| 'end' \| 'center'` | The justify of the component |

## Explorer

Explore the `Radio Card` component parts interactively. Click on parts in the
sidebar to highlight them in the preview.

<Explorer name="radio-card-explorer-demo" />
