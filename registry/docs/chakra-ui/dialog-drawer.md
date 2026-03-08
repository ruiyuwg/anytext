### Dialog, Drawer

Both `Modal` and `Drawer` now use compound components with an explicit
`Positioner` and `Portal` wrapper.

**Prop Changes (shared by Dialog and Drawer):**

- `isOpen` → `open`
- `onClose` → `onOpenChange` (receives `{ open }`)
- `blockScrollOnMount` → `preventScroll`
- `closeOnEsc` → `closeOnEscape`
- `closeOnOverlayClick` → `closeOnInteractOutside`
- `onOverlayClick` → `onInteractOutside`
- `onEsc` → `onEscapeKeyDown`
- `onCloseComplete` → `onExitComplete`
- `initialFocusRef` → `initialFocusEl={() => ref.current}`
- `finalFocusRef` → `finalFocusEl={() => ref.current}`
- `isCentered` → `placement="center"` (Dialog only)
- Sizes `2xl`–`6xl` → mapped to `xl`

**Drawer-specific Changes:**

- `placement="left"` → `placement="start"` (RTL-aware)
- `placement="right"` → `placement="end"` (RTL-aware)
- `isFullHeight` → add `height="100%"` to `Drawer.Content`
- `DrawerOverlay` → `Drawer.Backdrop`
- `DrawerContent` → `Drawer.Positioner` + `Drawer.Content`

**Removed Props:** `allowPinchZoom`, `lockFocusAcrossFrames`,
`preserveScrollBarGap`, `returnFocusOnClose`, `useInert`, `portalProps`

**Dialog Example:**

Before:

```tsx
import {
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
} from "@chakra-ui/react"

const Demo = () => (
  <Modal isOpen={isOpen} onClose={onClose} isCentered closeOnEsc={false}>
    <ModalOverlay />
    <ModalContent>
      <ModalCloseButton />
      <ModalHeader>Title</ModalHeader>
      <ModalBody>Content</ModalBody>
      <ModalFooter>
        <Button onClick={onClose}>Close</Button>
      </ModalFooter>
    </ModalContent>
  </Modal>
)
```

After:

```tsx
import { Dialog, Portal } from "@chakra-ui/react"

const Demo = () => (
  <Dialog.Root
    open={isOpen}
    onOpenChange={(e) => !e.open && onClose()}
    placement="center"
    closeOnEscape={false}
  >
    <Portal>
      <Dialog.Backdrop />
      <Dialog.Positioner>
        <Dialog.Content>
          <Dialog.CloseTrigger />
          <Dialog.Header>Title</Dialog.Header>
          <Dialog.Body>Content</Dialog.Body>
          <Dialog.Footer>
            <Button onClick={onClose}>Close</Button>
          </Dialog.Footer>
        </Dialog.Content>
      </Dialog.Positioner>
    </Portal>
  </Dialog.Root>
)
```

**Drawer Example:**

Before:

```tsx
import {
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
} from "@chakra-ui/react"

const Demo = () => (
  <Drawer isOpen={isOpen} placement="right" onClose={onClose} isFullHeight>
    <DrawerOverlay />
    <DrawerContent>
      <DrawerCloseButton />
      <DrawerHeader>Title</DrawerHeader>
      <DrawerBody>Content</DrawerBody>
      <DrawerFooter>
        <Button onClick={onClose}>Close</Button>
      </DrawerFooter>
    </DrawerContent>
  </Drawer>
)
```

After:

```tsx
import { Drawer, Portal } from "@chakra-ui/react"

const Demo = () => (
  <Drawer.Root
    open={isOpen}
    placement="end"
    onOpenChange={(e) => !e.open && onClose()}
  >
    <Portal>
      <Drawer.Backdrop />
      <Drawer.Positioner>
        <Drawer.Content height="100%">
          <Drawer.CloseTrigger />
          <Drawer.Header>Title</Drawer.Header>
          <Drawer.Body>Content</Drawer.Body>
          <Drawer.Footer>
            <Button onClick={onClose}>Close</Button>
          </Drawer.Footer>
        </Drawer.Content>
      </Drawer.Positioner>
    </Portal>
  </Drawer.Root>
)
```
