## Modal.Stack

Use `Modal.Stack` component to render multiple modals at the same time.
`Modal.Stack` keeps track of opened modals, manages z-index values, focus trapping
and `closeOnEscape` behavior. `Modal.Stack` is designed to be used with `useModalsStack` hook.

Differences from using multiple `Modal` components:

- `Modal.Stack` manages z-index values – modals that are opened later will always have higher z-index value disregarding their order in the DOM
- `Modal.Stack` disables focus trap and `Escape` key handling for all modals except the one that is currently opened
- Modals that are not currently opened are present in the DOM but are hidden with `opacity: 0` and `pointer-events: none`
- Only one overlay is rendered at a time

#### Example: stack

```tsx
import { Button, Group, Modal, useModalsStack } from '@mantine/core';

function Demo() {
  const stack = useModalsStack(['delete-page', 'confirm-action', 'really-confirm-action']);

  return (
    <>
      <Modal.Stack>
        <Modal {...stack.register('delete-page')} title="Delete this page?">
          Are you sure you want to delete this page? This action cannot be undone.
          <Group mt="lg" justify="flex-end">
            <Button onClick={stack.closeAll} variant="default">
              Cancel
            </Button>
            <Button onClick={() => stack.open('confirm-action')} color="red">
              Delete
            </Button>
          </Group>
        </Modal>

        <Modal {...stack.register('confirm-action')} title="Confirm action">
          Are you sure you want to perform this action? This action cannot be undone. If you are
          sure, press confirm button below.
          <Group mt="lg" justify="flex-end">
            <Button onClick={stack.closeAll} variant="default">
              Cancel
            </Button>
            <Button onClick={() => stack.open('really-confirm-action')} color="red">
              Confirm
            </Button>
          </Group>
        </Modal>

        <Modal {...stack.register('really-confirm-action')} title="Really confirm action">
          Jokes aside. You have confirmed this action. This is your last chance to cancel it. After
          you press confirm button below, action will be performed and cannot be undone. For real
          this time. Are you sure you want to proceed?
          <Group mt="lg" justify="flex-end">
            <Button onClick={stack.closeAll} variant="default">
              Cancel
            </Button>
            <Button onClick={stack.closeAll} color="red">
              Confirm
            </Button>
          </Group>
        </Modal>
      </Modal.Stack>

      <Button variant="default" onClick={() => stack.open('delete-page')}>
        Open modal
      </Button>
    </>
  );
}
```

Note that `Modal.Stack` can only be used with `Modal` component. Components built with `Modal.Root`
and other compound components are not compatible with `Modal.Stack`.

## useModalsStack hook

`useModalsStack` hook provides an easy way to control multiple modals at the same time.
It accepts an array of unique modals ids and returns an object with the following properties:

```tsx
interface UseModalsStackReturnType<T extends string> {
  // Current opened state of each modal
  state: Record<T, boolean>;

  // Opens modal with the given id
  open: (id: T) => void;

  // Closes modal with the given id
  close: (id: T) => void;

  // Toggles modal with the given id
  toggle: (id: T) => void;

  // Closes all modals within the stack
  closeAll: () => void;

  // Returns props for modal with the given id
  register: (id: T) => {
    opened: boolean;
    onClose: () => void;
    stackId: T;
  };
}
```

Example of using `useModalsStack` with `Modal` component:

```tsx
import { Modal, useModalsStack } from '@mantine/core';

function Demo() {
  const stack = useModalsStack(['first', 'second']);

  return (
    <>
      <Modal {...stack.register('first')}>First</Modal>
      <Modal {...stack.register('second')}>Second</Modal>
      <Button onClick={() => stack.open('first')}>Open first</Button>
    </>
  );
}
```

## Fixed elements offset

`Modal` component uses [react-remove-scroll](https://github.com/theKashey/react-remove-scroll)
package to lock scroll. To properly size these `elements` add a `className` to them ([documentation](https://github.com/theKashey/react-remove-scroll#positionfixed-elements)):

```tsx
import { RemoveScroll } from '@mantine/core';

function Demo() {
  return (
    <>
      <div className={RemoveScroll.classNames.fullWidth}>
        width: 100%
      </div>
      <div className={RemoveScroll.classNames.zeroRight}>
        right: 0
      </div>
    </>
  );
}
```
