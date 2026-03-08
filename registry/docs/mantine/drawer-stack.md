## Drawer.Stack

Use `Drawer.Stack` component to render multiple drawers at the same time.
`Drawer.Stack` keeps track of opened drawers, manages z-index values, focus trapping
and `closeOnEscape` behavior. `Drawer.Stack` is designed to be used with `useDrawersStack` hook.

Differences from using multiple `Drawer` components:

- `Drawer.Stack` manages z-index values – drawers that are opened later will always have higher z-index value disregarding their order in the DOM
- `Drawer.Stack` disables focus trap and `Escape` key handling for all drawers except the one that is currently opened
- Drawers that are not currently opened are present in the DOM but are hidden with `opacity: 0` and `pointer-events: none`
- Only one overlay is rendered at a time

#### Example: stack

```tsx
import { Button, Group, Drawer, useDrawersStack } from '@mantine/core';

function Demo() {
  const stack = useDrawersStack(['delete-page', 'confirm-action', 'really-confirm-action']);

  return (
    <>
      <Drawer.Stack>
        <Drawer {...stack.register('delete-page')} title="Delete this page?">
          Are you sure you want to delete this page? This action cannot be undone.
          <Group mt="lg" justify="flex-end">
            <Button onClick={stack.closeAll} variant="default">
              Cancel
            </Button>
            <Button onClick={() => stack.open('confirm-action')} color="red">
              Delete
            </Button>
          </Group>
        </Drawer>

        <Drawer {...stack.register('confirm-action')} title="Confirm action">
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
        </Drawer>

        <Drawer {...stack.register('really-confirm-action')} title="Really confirm action">
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
        </Drawer>
      </Drawer.Stack>

      <Button variant="default" onClick={() => stack.open('delete-page')}>
        Open drawer
      </Button>
    </>
  );
}
```

Note that `Drawer.Stack` can only be used with `Drawer` component. Components built with `Drawer.Root`
and other compound components are not compatible with `Drawer.Stack`.

## useDrawersStack hook

`useDrawersStack` hook provides an easy way to control multiple drawers at the same time.
It accepts an array of unique drawers ids and returns an object with the following properties:

```tsx
interface UseDrawersStackReturnType<T extends string> {
  // Current opened state of each drawer
  state: Record<T, boolean>;

  // Opens drawer with the given id
  open: (id: T) => void;

  // Closes drawer with the given id
  close: (id: T) => void;

  // Toggles drawer with the given id
  toggle: (id: T) => void;

  // Closes all drawers within the stack
  closeAll: () => void;

  // Returns props for drawer with the given id
  register: (id: T) => {
    opened: boolean;
    onClose: () => void;
    stackId: T;
  };
}
```

Example of using `useDrawersStack` with `Drawer` component:

```tsx
import { Drawer, useDrawersStack } from '@mantine/core';

function Demo() {
  const stack = useDrawersStack(['first', 'second']);

  return (
    <>
      <Drawer {...stack.register('first')}>First</Drawer>
      <Drawer {...stack.register('second')}>Second</Drawer>
      <Button onClick={() => stack.open('first')}>Open first</Button>
    </>
  );
}
```

## Fixed elements offset

`Drawer` component uses [react-remove-scroll](https://github.com/theKashey/react-remove-scroll)
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
