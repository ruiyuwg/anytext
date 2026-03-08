# Highlight

```tsx
import { Highlight } from "@chakra-ui/react"

export const HighlightBasic = () => {
  return (
    <Highlight
      query="spotlight"
      styles={{ px: "0.5", bg: "orange.subtle", color: "orange.fg" }}
    >
      With the Highlight component, you can spotlight words.
    
  )
}

```

## Usage

```jsx
import { Highlight } from "@chakra-ui/react"
```

```jsx
Hello World
```

## Examples

### Multiple

Pass an array of strings to the `query` prop to highlight multiple substrings.

```tsx
import { Heading, Highlight } from "@chakra-ui/react"

export const HighlightMultiple = () => {
  return (
    
      <Highlight
        query={["spotlight", "emphasize", "accentuate"]}
        styles={{ px: "0.5", bg: "teal.muted" }}
      >
        With the Highlight component, you can spotlight, emphasize and
        accentuate words.
      
    
  )
}

```

### Custom Style

Use the `styles` prop to customize the style of the highlighted text.

```tsx
import { Highlight } from "@chakra-ui/react"

export const HighlightWithCustomStyle = () => {
  return (
    
      With the Highlight component, you can spotlight words.
    
  )
}

```

### Search Query

Use the highlight component to highlight search query results.

```tsx
import { Highlight, Stack, Text } from "@chakra-ui/react"

const query = "spot"
const results = ["Spotlight bulb", "Spot cleaner", "Spot ceiling"]

export const HighlightSearchQuery = () => {
  return (
    
      Search result for: spot
      
        {results.map((item) => (
          
            <Highlight
              ignoreCase
              query={query}
              styles={{ fontWeight: "semibold" }}
            >
              {item}
            
          
        ))}
      
    
  )
}

```

### With Squiggle

Here's an example of how to render a custom squiggle image around the
highlighted text. Useful for a more fancy effect.

```tsx
"use client"

import { Heading, Mark, useHighlight } from "@chakra-ui/react"
import { Fragment } from "react"

export const HighlightWithSquiggle = () => {
  const chunks = useHighlight({
    text: "Endless scale, powered by real humans.",
    query: ["endless", "real humans."],
  })

  return (
    
      {chunks.map((chunk, index) => {
        return chunk.match ? (
          <Mark
            key={index}
            css={{
              fontStyle: "italic",
              color: "red.500",
              position: "relative",
            }}
          >
            {chunk.text}
            <img
              style={{ position: "absolute", left: 0 }}
              src="https://uploads-ssl.webflow.com/5fac11c3554384e2baf6481c/61c4dc7572d22f05ba26fd34_hero-underline.svg"
              loading="lazy"
              alt=""
            />
          
        ) : (
          {chunk.text}
        )
      })}
    
  )
}

```

## Props

| Prop | Default | Type | Description |
| --- | --- | --- | --- |
| query | undefined | `string \| string[]` | The query to highlight in the text |
| text | undefined | `string` | The text to highlight |
| styles | undefined | `SystemStyleObject \| undefined` | undefined |
| ignoreCase | undefined | `boolean` | Whether to ignore case while matching |
| matchAll | undefined | `boolean` | Whether to match multiple instances of the query |
| as | undefined | `React.ElementType` | The underlying element to render. |
| asChild | undefined | `boolean` | Use the provided child element as the default rendered element, combining their props and behavior. |
| exactMatch | undefined | `boolean` | Whether to match whole words only |
