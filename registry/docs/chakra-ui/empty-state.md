# Empty State

```tsx
import { EmptyState, VStack } from "@chakra-ui/react"
import { LuShoppingCart } from "react-icons/lu"

export const EmptyStateBasic = () => {
  return (
    <EmptyState.Root>
      <EmptyState.Content>
        <EmptyState.Indicator>
          
        </EmptyState.Indicator>
        
          <EmptyState.Title>Your cart is empty</EmptyState.Title>
          <EmptyState.Description>
            Explore our products and add items to your cart
          </EmptyState.Description>
        
      </EmptyState.Content>
    </EmptyState.Root>
  )
}

```

## Usage

```tsx
import { EmptyState } from "@chakra-ui/react"
```

```tsx
<EmptyState.Root>
  <EmptyState.Content>
    
    
    
  </EmptyState.Content>
</EmptyState.Root>
```

:::info

If you prefer a closed component composition, check out the
[snippet below](#closed-component).

:::

## Examples

### Sizes

Use the `size` prop to set the size of the Empty state.

```tsx
import { EmptyState, For, Stack, VStack } from "@chakra-ui/react"
import { LuShoppingCart } from "react-icons/lu"

export const EmptyStateSizes = () => {
  return (
    
      
        {(size) => (
          <EmptyState.Root size={size} key={size}>
            <EmptyState.Content>
              <EmptyState.Indicator>
                
              </EmptyState.Indicator>
              
                <EmptyState.Title>Your cart is empty</EmptyState.Title>
                <EmptyState.Description>
                  Explore our products and add items to your cart
                </EmptyState.Description>
              
            </EmptyState.Content>
          </EmptyState.Root>
        )}
      
    
  )
}

```

### Action

Here's an example of an empty state with an action button.

```tsx
import { Button, ButtonGroup, EmptyState, VStack } from "@chakra-ui/react"
import { HiColorSwatch } from "react-icons/hi"

export const EmptyStateWithAction = () => {
  return (
    <EmptyState.Root>
      <EmptyState.Content>
        <EmptyState.Indicator>
          
        </EmptyState.Indicator>
        
          <EmptyState.Title>Start adding tokens</EmptyState.Title>
          <EmptyState.Description>
            Add a new design token to get started
          </EmptyState.Description>
        
        
          Create token
          Import
        
      </EmptyState.Content>
    </EmptyState.Root>
  )
}

```

### List

Here's an example of an empty state with a list.

```tsx
import { EmptyState, List, VStack } from "@chakra-ui/react"
import { HiColorSwatch } from "react-icons/hi"

export const EmptyStateWithList = () => {
  return (
    <EmptyState.Root>
      <EmptyState.Content>
        <EmptyState.Indicator>
          
        </EmptyState.Indicator>
        
          <EmptyState.Title>No results found</EmptyState.Title>
          <EmptyState.Description>
            Try adjusting your search
          </EmptyState.Description>
        
        <List.Root variant="marker">
          <List.Item>Try removing filters</List.Item>
          <List.Item>Try different keywords</List.Item>
        </List.Root>
      </EmptyState.Content>
    </EmptyState.Root>
  )
}

```

### Closed Component

Here's how to setup the Empty State for a closed component composition.

<ExampleCode name="empty-state-closed-component" />

If you want to automatically add the closed component to your project, run the
command:

```bash
npx @chakra-ui/cli snippet add empty-state
```

## Props

### Root

| Prop | Default | Type | Description |
| --- | --- | --- | --- |
| colorPalette | gray | `'gray' \| 'red' \| 'orange' \| 'yellow' \| 'green' \| 'teal' \| 'blue' \| 'cyan' \| 'purple' \| 'pink'` | The color palette of the component |
| size | md | `'sm' \| 'md' \| 'lg'` | The size of the component |
| as | undefined | `React.ElementType` | The underlying element to render. |
| asChild | undefined | `boolean` | Use the provided child element as the default rendered element, combining their props and behavior. |
| unstyled | undefined | `boolean` | Whether to remove the component's style. |

## Explorer

Explore the `Empty State` component parts interactively. Click on parts in the
sidebar to highlight them in the preview.

<Explorer name="empty-state-basic" />

# Environment Provider

We use
[Zag.js](https://zagjs.com/overview/composition#custom-window-environment)
internally, which relies on DOM query methods like `document.querySelectorAll`
and `document.getElementById`. In custom environments like iframes, Shadow DOM,
or Electron, these methods might not work as expected.

To handle this, Ark UI includes the `EnvironmentProvider`, allowing you to set
the appropriate root node or document, ensuring correct DOM queries.

## Usage

```jsx
import { EnvironmentProvider } from "@chakra-ui/react"
```

```jsx
{/* Your App */}
```

## Examples

### iframe

Here's an example that uses `react-frame-component` to set the
`EnvironmentProvider`'s value with the iframe environment.

```jsx
import { EnvironmentProvider } from "@chakra-ui/react"
import Frame, { FrameContextConsumer } from "react-frame-component"

export const Demo = () => (
  
    
      {({ document }) => (
         document}>
          {/* Your App */}
        
      )}
    
  
)
```

### Shadow DOM

Here's an example that uses `react-shadow` to set the `EnvironmentProvider`'s
value with Shadow DOM environment.

```jsx
import { EnvironmentProvider } from "@chakra-ui/react"
import { useRef } from "react"
import root from "react-shadow"

export const Demo = () => {
  const portalRef = useRef()
  return (
    <root.div ref={portalRef}>
      <EnvironmentProvider
        value={() => portalRef?.current?.shadowRoot ?? document}
      >
        {/* Your App */}
      
    </root.div>
  )
}
```

### Accessing Context

Use the `useEnvironmentContext` hook to access the `RootNode`, `Document`, and
`Window` context.

```jsx
import { useEnvironmentContext } from "@chakra-ui/react"

export const Demo = () => {
  const { getRootNode } = useEnvironmentContext()

  return {JSON.stringify(getRootNode(), null, 2)}
}
```

## Props

| Prop | Default | Type | Description |
| --- | --- | --- | --- |
| value | undefined | `RootNode \| (() => RootNode)` | undefined |
