# Pagination

```tsx
"use client"

import { ButtonGroup, IconButton, Pagination } from "@chakra-ui/react"
import { LuChevronLeft, LuChevronRight } from "react-icons/lu"

export const PaginationBasic = () => {
  return (
    <Pagination.Root count={20} pageSize={2} defaultPage={1}>
      
        <Pagination.PrevTrigger asChild>
          
            
          
        </Pagination.PrevTrigger>

        <Pagination.Items
          render={(page) => (
            
              {page.value}
            
          )}
        />

        <Pagination.NextTrigger asChild>
          
            
          
        </Pagination.NextTrigger>
      
    </Pagination.Root>
  )
}

```

## Usage

```tsx
import { Pagination } from "@chakra-ui/react"
```

```tsx
<Pagination.Root>
  
  
  
  
  
</Pagination.Root>
```

## Shortcuts

The `Pagination` component also provides a set of shortcuts for common use
cases.

### PaginationItems

This component renders the number of pages based on the `count` and `pageSize`
props.

Rendering this:

```tsx
```

is shorthand for this:

```tsx
<Pagination.Context>
  {({ pages }) =>
    pages.map((page, index) =>
      page.type === "page" ? (
        
      ) : (
        
      ),
    )
  }
</Pagination.Context>
```

## Examples

### Sizes

Use the `size` prop to change the size of the pagination.

:::info

The pagination sizes are mapped to the `Button` component sizes.

:::

```tsx
"use client"

import {
  ButtonGroup,
  For,
  IconButton,
  Pagination,
  Stack,
} from "@chakra-ui/react"
import { LuChevronLeft, LuChevronRight } from "react-icons/lu"

export const PaginationWithSizes = () => {
  return (
    
      
        {(size) => (
          <Pagination.Root count={20} pageSize={2} defaultPage={1} key={size}>
            
              <Pagination.PrevTrigger asChild>
                
                  
                
              </Pagination.PrevTrigger>

              <Pagination.Items
                render={(page) => (
                  
                    {page.value}
                  
                )}
              />

              <Pagination.NextTrigger asChild>
                
                  
                
              </Pagination.NextTrigger>
            
          </Pagination.Root>
        )}
      
    
  )
}

```

### Variants

Use the `variant` prop to control the variant of the pagination items and
ellipsis.

> The variant matches the `Button` component variant.

```tsx
"use client"

import { ButtonGroup, IconButton, Pagination } from "@chakra-ui/react"
import { LuChevronLeft, LuChevronRight } from "react-icons/lu"

export const PaginationWithVariants = () => {
  return (
    <Pagination.Root count={20} pageSize={2} defaultPage={1}>
      
        <Pagination.PrevTrigger asChild>
          
            
          
        </Pagination.PrevTrigger>

        <Pagination.Items
          render={(page) => (
            
              {page.value}
            
          )}
        />

        <Pagination.NextTrigger asChild>
          
            
          
        </Pagination.NextTrigger>
      
    </Pagination.Root>
  )
}

```

### Controlled

Use the `page` and `onPageChange` props to control the current page.

```tsx
"use client"

import { ButtonGroup, IconButton, Pagination } from "@chakra-ui/react"
import { useState } from "react"
import { HiChevronLeft, HiChevronRight } from "react-icons/hi"

export const PaginationControlled = () => {
  const [page, setPage] = useState(1)

  return (
    <Pagination.Root
      count={20}
      pageSize={2}
      page={page}
      onPageChange={(e) => setPage(e.page)}
    >
      
        <Pagination.PrevTrigger asChild>
          
            
          
        </Pagination.PrevTrigger>

        <Pagination.Items
          render={(page) => (
            
              {page.value}
            
          )}
        />

        <Pagination.NextTrigger asChild>
          
            
          
        </Pagination.NextTrigger>
      
    </Pagination.Root>
  )
}

```

### Sibling Count

Use `siblingCount` to control the number of sibling pages to show before and
after the current page.

```tsx
"use client"

import { ButtonGroup, IconButton, Pagination } from "@chakra-ui/react"
import { LuChevronLeft, LuChevronRight } from "react-icons/lu"

export const PaginationWithSiblingCount = () => {
  return (
    <Pagination.Root
      count={200}
      pageSize={10}
      defaultPage={10}
      siblingCount={2}
    >
      
        <Pagination.PrevTrigger asChild>
          
            
          
        </Pagination.PrevTrigger>

        <Pagination.Items
          render={(page) => (
            
              {page.value}
            
          )}
        />

        <Pagination.NextTrigger asChild>
          
            
          
        </Pagination.NextTrigger>
      
    </Pagination.Root>
  )
}

```

### Compact

Use the `Pagination.PageText` to create a compact pagination. This can be useful
for mobile views.

```tsx
import { ButtonGroup, IconButton, Pagination } from "@chakra-ui/react"
import { HiChevronLeft, HiChevronRight } from "react-icons/hi"

export const PaginationCompact = () => {
  return (
    <Pagination.Root count={20} pageSize={2} defaultPage={1}>
      
        <Pagination.PrevTrigger asChild>
          
            
          
        </Pagination.PrevTrigger>
        
        <Pagination.NextTrigger asChild>
          
            
          
        </Pagination.NextTrigger>
      
    </Pagination.Root>
  )
}

```

### As Link

Here's an example of rendering the pagination as links.

```tsx
"use client"

import {
  ButtonGroup,
  IconButton,
  type IconButtonProps,
  Pagination,
  usePaginationContext,
} from "@chakra-ui/react"
import { HiChevronLeft, HiChevronRight } from "react-icons/hi"

const PaginationLink = (
  props: IconButtonProps & { page?: "prev" | "next" | number },
) => {
  const { page, ...rest } = props
  const pagination = usePaginationContext()
  const pageValue = () => {
    if (page === "prev") return pagination.previousPage
    if (page === "next") return pagination.nextPage
    return page
  }
  return (
    
      {props.children}
    
  )
}

export const PaginationAsLink = () => {
  return (
    <Pagination.Root count={20} pageSize={2} defaultPage={1}>
      
        
          
        

        <Pagination.Items
          render={(page) => (
            <PaginationLink
              page={page.value}
              variant={{ base: "ghost", _selected: "outline" }}
            >
              {page.value}
            
          )}
        />

        
          
        
      
    </Pagination.Root>
  )
}

```

### Attached

Here's an example of composing the pagination with the `Group` component to
attach the pagination items and triggers.

```tsx
"use client"

import { ButtonGroup, IconButton, Pagination } from "@chakra-ui/react"
import { HiChevronLeft, HiChevronRight } from "react-icons/hi"

export const PaginationAttached = () => {
  return (
    <Pagination.Root count={20} pageSize={2} defaultPage={1}>
      
        <Pagination.PrevTrigger asChild>
          
            
          
        </Pagination.PrevTrigger>

        <Pagination.Items
          render={(page) => (
            <IconButton
              variant={{ base: "outline", _selected: "solid" }}
              zIndex={{ _selected: "1" }}
            >
              {page.value}
            
          )}
        />

        <Pagination.NextTrigger asChild>
          
            
          
        </Pagination.NextTrigger>
      
    </Pagination.Root>
  )
}

```

### Count Text

Pass `format="long"` to the `Pagination.PageText` component to show the count
text.

```tsx
import { ButtonGroup, IconButton, Pagination } from "@chakra-ui/react"
import { LuChevronLeft, LuChevronRight } from "react-icons/lu"

export const PaginationWithCountText = () => {
  return (
    <Pagination.Root count={50} pageSize={5} defaultPage={1} maxW="240px">
      
        
        <Pagination.PrevTrigger asChild>
          
            
          
        </Pagination.PrevTrigger>
        <Pagination.NextTrigger asChild>
          
            
          
        </Pagination.NextTrigger>
      
    </Pagination.Root>
  )
}

```

### Data Driven

Here's an example of controlling the pagination state and using the state to
chunk the data.

```tsx
"use client"

import {
  ButtonGroup,
  IconButton,
  Pagination,
  Stack,
  Text,
} from "@chakra-ui/react"
import { useState } from "react"
import { HiChevronLeft, HiChevronRight } from "react-icons/hi"

const pageSize = 5
const count = 50
const items = new Array(count)
  .fill(0)
  .map((_, index) => `Lorem ipsum dolor sit amet ${index + 1}`)

export const PaginationWithContent = () => {
  const [page, setPage] = useState(1)

  const startRange = (page - 1) * pageSize
  const endRange = startRange + pageSize

  const visibleItems = items.slice(startRange, endRange)

  return (
    
      
        {visibleItems.map((item) => (
          {item}
        ))}
      
      <Pagination.Root
        count={count}
        pageSize={pageSize}
        page={page}
        onPageChange={(e) => setPage(e.page)}
      >
        
          <Pagination.PrevTrigger asChild>
            
              
            
          </Pagination.PrevTrigger>

          <Pagination.Items
            render={(page) => (
              
                {page.value}
              
            )}
          />

          <Pagination.NextTrigger asChild>
            
              
            
          </Pagination.NextTrigger>
        
      </Pagination.Root>
    
  )
}

```

## Props

### Root

| Prop | Default | Type | Description |
| --- | --- | --- | --- |
| defaultPage | 1 | `number` | The initial active page when rendered.
Use when you don't need to control the active page of the pagination. |
| defaultPageSize | 10 | `number` | The initial number of data items per page when rendered.
Use when you don't need to control the page size of the pagination. |
| siblingCount | 1 | `number` | Number of pages to show beside active page |
| type | "button" | `'button' \| 'link'` | The type of the trigger element |
| asChild | undefined | `boolean` | Use the provided child element as the default rendered element, combining their props and behavior. |
| count | undefined | `number` | Total number of data items |
| getPageUrl | undefined | `(details: PageUrlDetails) => string` | Function to generate href attributes for pagination links.
Only used when `type` is set to "link". |
| ids | undefined | `Partial<{\n  root: string\n  ellipsis: (index: number) => string\n  prevTrigger: string\n  nextTrigger: string\n  item: (page: number) => string\n}>` | The ids of the elements in the accordion. Useful for composition. |
| onPageChange | undefined | `(details: PageChangeDetails) => void` | Called when the page number is changed |
| onPageSizeChange | undefined | `(details: PageSizeChangeDetails) => void` | Called when the page size is changed |
| page | undefined | `number` | The controlled active page |
| pageSize | undefined | `number` | The controlled number of data items per page |
| translations | undefined | `IntlTranslations` | Specifies the localized strings that identifies the accessibility elements and their states |
