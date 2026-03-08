### Menu

- Now uses compound components everywhere

Before:

```tsx
<Menu>
  <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
    Actions
  </MenuButton>
  <MenuList>
    <MenuItem>Download</MenuItem>
    <MenuItem>Create a Copy</MenuItem>
  </MenuList>
</Menu>
```

After:

```tsx
<Menu.Root>
  <Menu.Trigger asChild>
    <Button>
      Actions
      <ChevronDownIcon />
    </Button>
  </Menu.Trigger>
  <Portal>
    <Menu.Positioner>
      <Menu.Content>
        <Menu.Item value="download">Download</Menu.Item>
        <Menu.Item value="copy">Create a Copy</Menu.Item>
      </Menu.Content>
    </Menu.Positioner>
  </Portal>
</Menu.Root>
```

- Accesing internal state is now done via `Menu.Context` no longer render prop.

Before:

```tsx
<Menu>
  {({ isOpen }) => (
    <>
      <MenuButton isActive={isOpen} as={Button} rightIcon={<ChevronDownIcon />}>
        {isOpen ? "Close" : "Open"}
      </MenuButton>
      <MenuList>
        <MenuItem>Download</MenuItem>
        <MenuItem onClick={() => alert("Kagebunshin")}>Create a Copy</MenuItem>
      </MenuList>
    </>
  )}
</Menu>
```

After:

```tsx
<Menu.Root>
  <Menu.Context>
    {(menu) => (
      <Menu.Trigger asChild>
        <Button>
          {menu.open ? "Close" : "Open"}
          <ChevronDownIcon />
        </Button>
      </Menu.Trigger>
    )}
  </Menu.Context>
  <Portal>
    <Menu.Positioner>
      <Menu.Content>
        <Menu.Item value="download">Download</Menu.Item>
        <Menu.Item value="copy" onSelect={() => alert("Kagebunshin")}>
          Create a Copy
        </Menu.Item>
      </Menu.Content>
    </Menu.Positioner>
  </Portal>
</Menu.Root>
```

- `isLazy` prop on `Menu` is split into `lazyMount` and `unmountOnExit` on
  `Menu.Root`

- `MenuOptionGroup` is now split into `Menu.RadioItemGroup` and
  `Menu.CheckboxItemGroup` to handle the states separately.

Before:

```tsx
<Menu>
  <MenuButton as={Button}>Trigger</MenuButton>
  <MenuList>
    <MenuOptionGroup defaultValue="asc" title="Order" type="radio">
      <MenuItemOption value="asc">Ascending</MenuItemOption>
      <MenuItemOption value="desc">Descending</MenuItemOption>
    </MenuOptionGroup>
    <MenuDivider />
    <MenuOptionGroup title="Country" type="checkbox">
      <MenuItemOption value="email">Email</MenuItemOption>
      <MenuItemOption value="phone">Phone</MenuItemOption>
      <MenuItemOption value="country">Country</MenuItemOption>
    </MenuOptionGroup>
  </MenuList>
</Menu>
```

After:

```tsx
<Menu.Root>
  <Menu.Trigger asChild>
    <Button>Trigger</Button>
  </Menu.Trigger>
  <Portal>
    <Menu.Positioner>
      <Menu.Content minW="10rem">
        <Menu.RadioItemGroup defaultValue="asc">
          <Menu.RadioItem value="asc">Ascending</Menu.RadioItem>
          <Menu.RadioItem value="desc">Descending</Menu.RadioItem>
        </Menu.RadioItemGroup>
        <Menu.CheckboxItemGroup defaultValue={["email"]}>
          <Menu.CheckboxItem value="email">Email</Menu.CheckboxItem>
          <Menu.CheckboxItem value="phone">Phone</Menu.CheckboxItem>
          <Menu.CheckboxItem value="country">Country</Menu.CheckboxItem>
        </Menu.CheckboxItemGroup>
      </Menu.Content>
    </Menu.Positioner>
  </Portal>
</Menu.Root>
```

### Tooltip

Now a **snippet** component imported from `@/components/ui/tooltip` instead of
`@chakra-ui/react`.

**Prop Changes:**

- `label` → `content`
- `hasArrow` → `showArrow`
- `closeOnEsc` → `closeOnEscape`
- `closeOnMouseDown` → `closeOnPointerDown`
- `onOpen` / `onClose` → `onOpenChange` (receives `{ open }`)
- `shouldWrapChildren` → wrap children in `<span>` manually
- `placement`, `gutter`, `offset`, `arrowPadding` → grouped into `positioning`
  object

**Removed Props:** `modifiers`, `motionProps`, `portalProps`, `arrowSize`,
`arrowShadowColor`

Before:

```tsx
import { Tooltip } from "@chakra-ui/react"

;<Tooltip label="Info" hasArrow placement="top" closeOnEsc={false}>
  <button>Hover</button>
</Tooltip>
```

After:

```tsx
import { Tooltip } from "@/components/ui/tooltip"

;<Tooltip
  content="Info"
  showArrow
  positioning={{ placement: "top" }}
  closeOnEscape={false}
>
  <button>Hover</button>
</Tooltip>
```
