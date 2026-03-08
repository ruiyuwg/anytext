# Breadcrumb

```tsx
import { Breadcrumb } from "@chakra-ui/react"

export const BreadcrumbBasic = () => {
  return (
    <Breadcrumb.Root>
      <Breadcrumb.List>
        <Breadcrumb.Item>
          <Breadcrumb.Link href="#">Docs</Breadcrumb.Link>
        </Breadcrumb.Item>
        <Breadcrumb.Separator />
        <Breadcrumb.Item>
          <Breadcrumb.Link href="#">Components</Breadcrumb.Link>
        </Breadcrumb.Item>
        <Breadcrumb.Separator />
        <Breadcrumb.Item>
          <Breadcrumb.CurrentLink>Props</Breadcrumb.CurrentLink>
        </Breadcrumb.Item>
      </Breadcrumb.List>
    </Breadcrumb.Root>
  )
}

```

## Usage

```tsx
import { Breadcrumb } from "@chakra-ui/react"
```

```tsx
<Breadcrumb.Root>
  <Breadcrumb.List>
    <Breadcrumb.Item>
      <Breadcrumb.Link />
    </Breadcrumb.Item>
    <Breadcrumb.Separator />
  </Breadcrumb.List>
</Breadcrumb.Root>
```

If you prefer a closed component composition, check out the
[snippet below](#closed-component).

## Examples

### Sizes

Use the `size` prop to change the size of the breadcrumb component

```tsx
import { Breadcrumb, For, Stack } from "@chakra-ui/react"

export const BreadcrumbWithSizes = () => {
  return (
    <Stack>
      <For each={["sm", "md", "lg"]}>
        {(size) => (
          <Breadcrumb.Root key={size} size={size}>
            <Breadcrumb.List>
              <Breadcrumb.Item>
                <Breadcrumb.Link href="#">Docs</Breadcrumb.Link>
              </Breadcrumb.Item>
              <Breadcrumb.Separator />
              <Breadcrumb.Item>
                <Breadcrumb.Link href="#">Components</Breadcrumb.Link>
              </Breadcrumb.Item>
              <Breadcrumb.Separator />
              <Breadcrumb.Item>
                <Breadcrumb.CurrentLink>Props</Breadcrumb.CurrentLink>
              </Breadcrumb.Item>
            </Breadcrumb.List>
          </Breadcrumb.Root>
        )}
      </For>
    </Stack>
  )
}

```

### Variants

Use the `variant` prop to change the appearance of the breadcrumb component

```tsx
import { Breadcrumb, For, Stack } from "@chakra-ui/react"

export const BreadcrumbWithVariants = () => {
  return (
    <Stack>
      <For each={["plain", "underline"]}>
        {(variant) => (
          <Breadcrumb.Root key={variant} variant={variant}>
            <Breadcrumb.List>
              <Breadcrumb.Item>
                <Breadcrumb.Link href="#">Docs</Breadcrumb.Link>
              </Breadcrumb.Item>
              <Breadcrumb.Separator />
              <Breadcrumb.Item>
                <Breadcrumb.Link href="#">Components</Breadcrumb.Link>
              </Breadcrumb.Item>
              <Breadcrumb.Separator />
              <Breadcrumb.Item>
                <Breadcrumb.CurrentLink>Props</Breadcrumb.CurrentLink>
              </Breadcrumb.Item>
            </Breadcrumb.List>
          </Breadcrumb.Root>
        )}
      </For>
    </Stack>
  )
}

```

### With Separator

Use the `Breadcrumb.Separator` component to add a custom separator

```tsx
import { Breadcrumb } from "@chakra-ui/react"
import { LiaSlashSolid } from "react-icons/lia"

export const BreadcrumbWithSeparator = () => {
  return (
    <Breadcrumb.Root>
      <Breadcrumb.List>
        <Breadcrumb.Item>
          <Breadcrumb.Link href="#">Docs</Breadcrumb.Link>
        </Breadcrumb.Item>
        <Breadcrumb.Separator>
          <LiaSlashSolid />
        </Breadcrumb.Separator>
        <Breadcrumb.Item>
          <Breadcrumb.Link href="#">Components</Breadcrumb.Link>
        </Breadcrumb.Item>
        <Breadcrumb.Separator>
          <LiaSlashSolid />
        </Breadcrumb.Separator>
        <Breadcrumb.Item>
          <Breadcrumb.CurrentLink>Props</Breadcrumb.CurrentLink>
        </Breadcrumb.Item>
      </Breadcrumb.List>
    </Breadcrumb.Root>
  )
}

```

### Icon

Add a custom icon to the breadcrumb by rendering it within `Breadcrumb.Link`

```tsx
import { Breadcrumb } from "@chakra-ui/react"
import { LuHouse, LuShirt } from "react-icons/lu"

export const BreadcrumbWithIcon = () => {
  return (
    <Breadcrumb.Root>
      <Breadcrumb.List>
        <Breadcrumb.Item>
          <Breadcrumb.Link href="#">
            <LuHouse />
            Home
          </Breadcrumb.Link>
        </Breadcrumb.Item>
        <Breadcrumb.Separator />

        <Breadcrumb.Item>
          <Breadcrumb.Link href="#">
            <LuShirt />
            Men Wear
          </Breadcrumb.Link>
        </Breadcrumb.Item>
        <Breadcrumb.Separator />

        <Breadcrumb.Item>
          <Breadcrumb.CurrentLink>Trousers</Breadcrumb.CurrentLink>
        </Breadcrumb.Item>
      </Breadcrumb.List>
    </Breadcrumb.Root>
  )
}

```

### Menu

Wrap the `Breadcrumb.Link` inside the `MenuTrigger` to ensure it works correctly
within the menu component

```tsx
import { Breadcrumb, Menu, Portal } from "@chakra-ui/react"
import { LuChevronDown } from "react-icons/lu"

interface BreadcrumbMenuItemProps {
  children: React.ReactNode
  items: Array<{ label: string; value: string }>
}

const BreadcrumbMenuItem = (props: BreadcrumbMenuItemProps) => {
  const { children, items } = props
  return (
    <Breadcrumb.Item>
      <Menu.Root>
        <Menu.Trigger asChild>{children}</Menu.Trigger>
        <Portal>
          <Menu.Positioner>
            <Menu.Content>
              {items.map((item) => (
                <Menu.Item key={item.value} value={item.value}>
                  {item.label}
                </Menu.Item>
              ))}
            </Menu.Content>
          </Menu.Positioner>
        </Portal>
      </Menu.Root>
    </Breadcrumb.Item>
  )
}

export const BreadcrumbWithMenu = () => {
  return (
    <Breadcrumb.Root>
      <Breadcrumb.List gap="4">
        <Breadcrumb.Item>
          <Breadcrumb.Link href="#">Docs</Breadcrumb.Link>
        </Breadcrumb.Item>
        <Breadcrumb.Separator>/</Breadcrumb.Separator>

        <BreadcrumbMenuItem
          items={[
            { label: "Components", value: "components" },
            { label: "Props", value: "props" },
            { label: "Customization", value: "customization" },
          ]}
        >
          <Breadcrumb.Link as="button">
            Components
            <LuChevronDown />
          </Breadcrumb.Link>
        </BreadcrumbMenuItem>

        <Breadcrumb.Separator>/</Breadcrumb.Separator>
        <Breadcrumb.Item>
          <Breadcrumb.CurrentLink>Props</Breadcrumb.CurrentLink>
        </Breadcrumb.Item>
      </Breadcrumb.List>
    </Breadcrumb.Root>
  )
}

```

### Ellipsis

Render the `Breadcrumb.Ellipsis` component to show an ellipsis after a
breadcrumb item

```tsx
import { Breadcrumb } from "@chakra-ui/react"

export const BreadcrumbWithEllipsis = () => {
  return (
    <Breadcrumb.Root>
      <Breadcrumb.List>
        <Breadcrumb.Item>
          <Breadcrumb.Link href="#">Docs</Breadcrumb.Link>
        </Breadcrumb.Item>
        <Breadcrumb.Separator />
        <Breadcrumb.Item>
          <Breadcrumb.Link href="#">Components</Breadcrumb.Link>
        </Breadcrumb.Item>
        <Breadcrumb.Separator />
        <Breadcrumb.Ellipsis />
        <Breadcrumb.Separator />
        <Breadcrumb.Item>
          <Breadcrumb.CurrentLink>Props</Breadcrumb.CurrentLink>
        </Breadcrumb.Item>
      </Breadcrumb.List>
    </Breadcrumb.Root>
  )
}

```

### Routing Library

Use the `asChild` prop to change the underlying breadcrumb link

```tsx
import { Breadcrumb } from "@chakra-ui/react"
import { Link } from "next/link"

export const Example = () => {
  return (
    <Breadcrumb.Root>
      <Breadcrumb.List>
        <Breadcrumb.Item>
          <Breadcrumb.Link asChild>
            <Link href="/docs">Docs</Link>
          </Breadcrumb.Link>
        </Breadcrumb.Item>
        <Breadcrumb.Separator />
      </Breadcrumb.List>
    </Breadcrumb.Root>
  )
}
```

### Closed Component

Here's how to setup the Breadcrumb for a closed component composition.

If you want to automatically add the closed component to your project, run the
command:

```bash
npx @chakra-ui/cli snippet add breadcrumb
```

## Props

### Root

| Prop | Default | Type | Description |
| --- | --- | --- | --- |
| colorPalette | gray | `'gray' \| 'red' \| 'orange' \| 'yellow' \| 'green' \| 'teal' \| 'blue' \| 'cyan' \| 'purple' \| 'pink'` | The color palette of the component |
| variant | plain | `'underline' \| 'plain'` | The variant of the component |
| size | md | `'sm' \| 'md' \| 'lg'` | The size of the component |
| as | undefined | `React.ElementType` | The underlying element to render. |
| asChild | undefined | `boolean` | Use the provided child element as the default rendered element, combining their props and behavior. |
| unstyled | undefined | `boolean` | Whether to remove the component's style. |

## Explorer

Explore the `Breadcrumb` component parts interactively. Click on parts in the
sidebar to highlight them in the preview.
