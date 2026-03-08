# Show

```tsx
"use client"

import { Button, Show, Stack } from "@chakra-ui/react"
import { useState } from "react"

export const ShowBasic = () => {
  const [count, setCount] = useState(0)
  return (
    <Stack align="flex-start">
      <Button variant="outline" onClick={() => setCount(count + 1)}>
        Value: {count}
      </Button>
      <Show when={count > 3}>
        <div>My Content</div>
      </Show>
    </Stack>
  )
}

```

## Usage

The `Show` component renders its children when the `when` value is truthy,
otherwise it renders the `fallback` prop.

```jsx
import { Show } from "@chakra-ui/react"
```

```jsx
<Show when={...} fallback={...}>
  <div>Content</div>
</Show>
```

## Examples

### Fallback

Use the `fallback` prop to render a fallback component when the array is empty
or undefined.

```tsx
"use client"

import { Button, Show, Stack, Text } from "@chakra-ui/react"
import { useState } from "react"

export const ShowWithFallback = () => {
  const [count, setCount] = useState(0)
  return (
    <Stack align="flex-start">
      <Button variant="outline" onClick={() => setCount(count + 1)}>
        Value: {count}
      </Button>
      <Show
        when={count > 3}
        fallback={<Text>Not there yet. Keep clicking...</Text>}
      >
        <div>Congrats! I am here</div>
      </Show>
    </Stack>
  )
}

```

### Render Prop

Use the `children` render prop to narrow the type of the `when` value and remove
`undefined` | `null`

```tsx
import { Show } from "@chakra-ui/react"

export const ShowWithRenderProp = () => {
  const value: number | undefined = 10
  return <Show when={value}>{(value) => <div>Value: {value}</div>}</Show>
}

```

## Props

| Prop | Default | Type | Description |
| --- | --- | --- | --- |
| when | undefined | `T \| null \| undefined` | If `true`, it'll render the `children` prop |
| fallback | undefined | `React.ReactNode \| undefined` | The fallback content to render if `when` is `false` |
| as | undefined | `React.ElementType` | The underlying element to render. |
| asChild | undefined | `boolean` | Use the provided child element as the default rendered element, combining their props and behavior. |
