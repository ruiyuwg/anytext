# Why FileButton does not work in Menu?

Learn how to use FileButton in Menu component

## Example of the issue

In the following example, the `onChange` callback will never be called
even though the `FileButton` is rendered inside the `Menu` component and
the file dialog is opened when the second `Menu.Item` is clicked.

#### Example: FileButtonMenuBroken

```tsx
import { Button, FileButton, Menu } from '@mantine/core';

function Demo() {
  return (
    <Menu>
      <Menu.Target>
        <Button>Toggle menu</Button>
      </Menu.Target>
      <Menu.Dropdown>
        <Menu.Item>Fist item</Menu.Item>
        <FileButton onChange={(file) => console.log(file)} accept="image/png,image/jpeg">
          {(props) => <Menu.Item {...props}>Upload Image</Menu.Item>}
        </FileButton>
      </Menu.Dropdown>
    </Menu>
  );
}
```

## Source of the issue

The `onChange` callback is not triggered in the example above because, by default,
`Menu` component is closed automatically when an item is clicked. When the `Menu` is
closed, the `FileButton` is unmounted from the DOM with the underlying `input[type="file"]`
element. When the file is selected, the `input[type="file"]` element is not in the DOM
and the `onChange` callback is not triggered.

## How to fix the issue

There are two solutions to this issue. The first one is to set `keepMounted` prop
on the `Menu` component. This way, the `FileButton` will not be unmounted when the
`Menu` is closed:

#### Example: FileButtonMenuFix

```tsx
import { Button, FileButton, Menu } from '@mantine/core';

function Demo() {
  return (
    <Menu keepMounted>
      <Menu.Target>
        <Button>Toggle menu</Button>
      </Menu.Target>
      <Menu.Dropdown>
        <Menu.Item>Fist item</Menu.Item>
        <FileButton onChange={(file) => console.log(file)} accept="image/png,image/jpeg">
          {(props) => <Menu.Item {...props}>Upload Image</Menu.Item>}
        </FileButton>
      </Menu.Dropdown>
    </Menu>
  );
}
```

The other solution is to prevent `Menu` from closing when `Menu.Item` that contains
`FileButton` is clicked. This can be done by setting `closeOnItemClick={false}` prop
on the `Menu.Item` component:

#### Example: FileButtonMenuFix2

```tsx
import { Button, FileButton, Menu } from '@mantine/core';

function Demo() {
  return (
    <Menu>
      <Menu.Target>
        <Button>Toggle menu</Button>
      </Menu.Target>
      <Menu.Dropdown>
        <Menu.Item>Fist item</Menu.Item>
        <FileButton onChange={(file) => console.log(file)} accept="image/png,image/jpeg">
          {(props) => (
            <Menu.Item {...props} closeMenuOnClick={false}>
              Upload Image
            </Menu.Item>
          )}
        </FileButton>
      </Menu.Dropdown>
    </Menu>
  );
}
```

# How to change background color for FiveM?

Unset body background color and color-scheme styles for FiveM

If you use Mantine in a FiveM UI (NUI), default `body` background and `color-scheme`
styles can affect the background rendering.

Add the following global CSS to override them:

```css
body {
  background-color: unset !important;
}

:root {
  color-scheme: unset !important;
}
```

# Is there a floating action button component?

No, but you can build it with Affix and ActionIcon components

Mantine does not include floating action button component,
but you can build it with [Affix](https://mantine.dev/core/affix) and
[ActionIcon](https://mantine.dev/core/action-icon) components:

# How can I focus the first input with error with use-form?

Learn how to handle focus with use-form hook

## Get input DOM node with use-form

You can use `form.getInputNode` function to get input DOM node at the given path.
For example:

```tsx
import { useForm } from '@mantine/form';

const form = useForm({
  mode: 'uncontrolled',
  initialValues: {
    order_id: null,
    user: { email: '' },
  },
});

// Returns input DOM node for order_id input
form.getInputNode('order_id');

// Returns input DOM node for user.email input
form.getInputNode('user.email');
```

## Focus first input with error on form submit

`form.onSubmit` handler accepts two functions: the first function is called
with valid form values when validation passes, the second function is called
with form errors when validation fails. You can use the second function and
`form.getInputNode` to focus the first input with error:

#### Example: FocusFirstInputWithError

```tsx
function Demo() {
  const form = useForm({
    mode: 'uncontrolled',
    initialValues: {
      name: '',
      email: '',
    },

    validate: {
      name: isNotEmpty('Name is required'),
      email: isEmail('Invalid email'),
    },
  });

  return (
    <form
      onSubmit={form.onSubmit(
        () => {},
        (errors) => {
          const firstErrorPath = Object.keys(errors)[0];
          form.getInputNode(firstErrorPath)?.focus();
        }
      )}
    >
      <TextInput
        withAsterisk
        label="Your name"
        placeholder="Your name"
        key={form.key('name')}
        {...form.getInputProps('name')}
      />

      <TextInput
        withAsterisk
        label="Your email"
        placeholder="your@email.com"
        mt="md"
        key={form.key('email')}
        {...form.getInputProps('email')}
      />

      <Group justify="flex-end" mt="md">
        <Button type="submit">Submit</Button>
      </Group>
    </form>
  );
}
```
