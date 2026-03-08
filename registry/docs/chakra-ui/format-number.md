# Format Number

```tsx
import { FormatNumber, Text } from "@chakra-ui/react"

export const FormatNumberBasic = () => {
  return (
    
      
    
  )
}

```

## Usage

The number formatting logic is handled by the native `Intl.NumberFormat` API and
smartly cached to avoid performance issues when using the same locale and
options.

```jsx
import { FormatNumber } from "@chakra-ui/react"
```

```jsx
```

## Examples

### Percentage

Use the `style=percentage` prop to change the number format to percentage.

```tsx
import { FormatNumber, Text } from "@chakra-ui/react"

export const FormatNumberWithPercentage = () => {
  return (
    
      <FormatNumber
        value={0.145}
        style="percent"
        maximumFractionDigits={2}
        minimumFractionDigits={2}
      />
    
  )
}

```

### Currency

Use the `style=currency` prop to change the number format to currency.

```tsx
import { FormatNumber, Text } from "@chakra-ui/react"

export const FormatNumberWithCurrency = () => {
  return (
    
      
    
  )
}

```

### Locale

Wrap the `FormatNumber` component within the `LocaleProvider` to change the
locale.

```tsx
import { FormatNumber, HStack, LocaleProvider, Text } from "@chakra-ui/react"

export const FormatNumberWithLocale = () => {
  return (
    
      
        de-DE
        
          
        
      

      
        zh-CN
        
          
        
      
    
  )
}

```

### Unit

Use the `style=unit` prop to change the number format to unit.

```tsx
import { FormatNumber, Text } from "@chakra-ui/react"

export const FormatNumberWithUnit = () => {
  return (
    
      
    
  )
}

```

### Compact Notation

Use the `notation=compact` prop to change the number format to compact notation.

```tsx
import { FormatNumber, Text } from "@chakra-ui/react"

export const FormatNumberWithCompact = () => {
  return (
    
      
    
  )
}

```

## Props

The `FormatNumber` component supports all `Intl.NumberFormat` options in
addition to the following props:

| Prop | Default | Type | Description |
| --- | --- | --- | --- |
| value | undefined | `number` | The number to format |
