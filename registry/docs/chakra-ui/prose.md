# Prose

```tsx
import { Prose } from "@/components/ui/prose"

// Used for syntax highlighting
const html = String.raw

const content = html`
  Title Heading 1
  Title Heading 2
  Title Heading 3
  Title Heading 4

  Title Heading 4 testing

  
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi at dolor nec
    ex rutrum semper. Praesent ultricies purus eget lectus tristique egestas ac
    in lacus. Nulla eleifend lorem risus, sit amet dictum nisi gravida eget.
    Suspendisse odio sem, scelerisque congue luctus nec, scelerisque ultrices
    orci. Praesent tincidunt, risus ut commodo cursus, ligula orci tristique
    justo, vitae sollicitudin lacus risus dictum orci. Press Ctrl +
    C to copy
  

  
    Vivamus vel enim at lorem ultricies faucibus. Cras vitae ipsum ut quam
    varius dignissim a ac tellus. Aliquam maximus mauris eget tincidunt
    interdum. Fusce vitae massa non risus congue tincidunt. Pellentesque maximus
    elit quis eros lobortis dictum.
  

  

  
    Fusce placerat ipsum vel sollicitudin imperdiet. Morbi vulputate non diam at
    consequat. Donec vitae sem eu arcu auctor scelerisque vel in turpis.
    Pellentesque dapibus justo dui, quis egestas sapien porttitor in.
  
`

export const ProseBasic = () => {
  return 
}

```

## Setup

If you don't already have the snippet, run the following command to add the
`prose` snippet

```sh
npx @chakra-ui/cli snippet add prose
```

## Usage

```jsx
import { Prose } from "@/components/ui/prose"
```

```jsx

  

```

## Examples

### Sizes

Use the `size` prop to change the size of the `Prose` component

```tsx
import { For, Stack, Text } from "@chakra-ui/react"
import { Prose } from "@/components/ui/prose"

export const ProseWithSizes = () => {
  return (
    
      
        {(size) => (
          
            size: {size}
            
              Title Heading 1
              Title Heading 2
              Title Heading 3
              Title Heading 4

              
                Title Heading 4 testing
              

              
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi
                at dolor nec ex rutrum semper. Praesent ultricies purus eget
                lectus tristique egestas ac in lacus. Nulla eleifend lorem
                risus, sit amet dictum nisi gravida eget. Suspendisse odio sem,
                scelerisque congue luctus nec, scelerisque ultrices orci.
                Praesent tincidunt, risus ut commodo cursus, ligula orci
                tristique justo, vitae sollicitudin lacus risus dictum orci.
                Press Ctrl +C to copy
              
            
          
        )}
      
    
  )
}

```

### Blockquote

Blockquote elements are styled to match the design language of the `Blockquote`
component.

```tsx
import { Prose } from "@/components/ui/prose"

// Used for syntax highlighting
const html = String.raw

const content = html`
  Blockquotes
  This is a good looking blockquote!
  And it can span into multiple lines:
  
    Fusce placerat ipsum vel sollicitudin imperdiet. Morbi vulputate non diam at
    consequat. Donec vitae sem eu arcu auctor scelerisque vel in turpis.
    Pellentesque dapibus justo dui, quis egestas sapien porttitor in.
  
  
    There&apos;s also strong, b, em support as
    well! But, let&apos;s display some code!
  
`

export const ProseWithBlockquote = () => {
  return 
}

```

### List

List elements are styled to match the design language of the `List` component.

```tsx
import { Prose } from "@/components/ui/prose"

// Used for syntax highlighting
const html = String.raw

const content = html`
  Lists
  Let's look at some unordered lists. Things to buy:
  
    Milk
    Eggs
    Bread
    Chakra UI Pro license
  
  And some ordered lists. Things to do:
  
    Pay the bills
    Walk the dog
    Take out trash
  
`

export const ProseWithList = () => {
  return 
}

```

### React Markdown

Here's an example of using the `react-markdown` library to render markdown
content.

```tsx
import { Prose } from "@/components/ui/prose"
import Markdown from "react-markdown"

export const ProseWithReactMarkdown = () => {
  return (
    
      
        {`
  ## Heading
  
  Based on your Chakra package. So [click here](http://chakra-ui.com) to confirm your plan.
  
  - first item
  - second item
  - second item
  - second item
  
  [title](http://chakra-ui.com)
    `}
      
    
  )
}

```

### Table

The table elements are styled to match the design language of the `Table`
component.

```tsx
import { Prose } from "@/components/ui/prose"

// Used for syntax highlighting
const html = String.raw

const content = html`
  Tables
  
    
      
        Name
        Role
        GitHub Profile
      
    
    
      
        Segun
        Creator
        segunadebayo
      
      
        Chris
        Ark Wizard
        grizzlycodes
      
      
        Abraham
        Trouble maker
        anubra266
      
      
        Esther
        Developer Advocate
        estheragbaje
      
    
  
`

export const ProseWithTable = () => {
  return 
}

```
