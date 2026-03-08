# Can I use an array of strings as a list in use-form?

Learn about use-form lists limitations

## What is use-form list?

[use-form](https://mantine.dev/form/use-form) supports nested values in array format.
There are handlers available to add, remove, and reorder items in the list:

- `form.removeListItem` – removes list item at given index
- `form.insertListItem` – inserts list item at given index (appends item to the end of the list if index is not specified)
- `form.reorderListItem` – reorders list item with given position at specified field

Example of using form lists:

```tsx
import { IconTrash } from '@tabler/icons-react';
import {
  ActionIcon,
  Box,
  Button,
  Group,
  Switch,
  Text,
  TextInput,
} from '@mantine/core';
import { useForm } from '@mantine/form';
import { randomId } from '@mantine/hooks';

function Demo() {
  const form = useForm({
    mode: 'uncontrolled',
    initialValues: {
      employees: [{ name: '', active: false, key: randomId() }],
    },
  });

  const fields = form.getValues().employees.map((item, index) => (
    <Group key={item.key} mt="xs">
      <TextInput
        placeholder="John Doe"
        withAsterisk
        style={{ flex: 1 }}
        key={form.key(`employees.${index}.name`)}
        {...form.getInputProps(`employees.${index}.name`)}
      />
      <Switch
        label="Active"
        key={form.key(`employees.${index}.active`)}
        {...form.getInputProps(`employees.${index}.active`, {
          type: 'checkbox',
        })}
      />
      <ActionIcon
        color="red"
        onClick={() => form.removeListItem('employees', index)}
      >
        <IconTrash size="1rem" />
      </ActionIcon>
    </Group>
  ));

  return (
    <Box maw={500} mx="auto">
      {fields.length > 0 ? (
        <Group mb="xs">
          <Text fw={500} size="sm" style={{ flex: 1 }}>
            Name
          </Text>
          <Text fw={500} size="sm" pr={90}>
            Status
          </Text>
        </Group>
      ) : (
        <Text c="dimmed" ta="center">
          No one here...
        </Text>
      )}

      {fields}

      <Group justify="center" mt="md">
        <Button
          onClick={() =>
            form.insertListItem('employees', {
              name: '',
              active: false,
              key: randomId(),
            })
          }
        >
          Add employee
        </Button>
      </Group>
    </Box>
  );
}
```

## Form lists limitation

`use-form` lists are designed to work with objects, any other values are not supported.
This limitation is implemented on purpose to avoid confusing form lists with arrays of
other types of values.

# use-local-storage hook returns real value only after mounting, is it a bug?

Learn how Mantine retrieves local storage value

## How use-local-storage hook works

By default, [use-local-storage](https://mantine.dev/hooks/use-local-storage) hook
retrieves value from local storage in `useEffect` only after component is mounted.
It is implemented this way to avoid hydration mismatches if the value is used in
output markup of the component.

Example:

- `value` during server-side rendering: `dark` (default value)
- `value` at initial render: `dark` (default value)
- `value` after mounting: `light` or `dark` depending on value in local storage (value from local storage)

```tsx
import { useLocalStorage } from '@mantine/hooks';

function Demo() {
  const [value, setValue] = useLocalStorage<'light' | 'dark'>({
    key: 'color-scheme',
    defaultValue: 'dark',
  });

  return <div>{value}</div>;
}
```

## Reading value in first render

If your application does not have server-side rendering or you do not use
`value` in output markup of the component, you can read value from local storage
in the first render. Do do that, set `getInitialValueInEffect: false` option:

Example:

- `value` during server-side rendering: `dark` (default value)
- `value` at initial render: `light` or `dark` depending on value in local storage (value from local storage)
- `value` at subsequent renders: `light` or `dark` depending on value in local storage (value from local storage)

```tsx
import { useLocalStorage } from '@mantine/hooks';

function Demo() {
  const [value, setValue] = useLocalStorage<'light' | 'dark'>({
    key: 'color-scheme',
    defaultValue: 'dark',
    getInitialValueInEffect: false,
  });

  return <div>{value}</div>;
}
```

# MantineProvider was not found in component tree. What should I do?

Learn how to resolve MantineProvider issues

The error above occurs in the following cases:

- You do not have `MantineProvider` in your app at all
- You are rendering Mantine components outside of `MantineProvider` context
- You have different versions of `@mantine/*` packages in your application.
  For example, you have `@mantine/core@7.0.0` and `@mantine/dates@7.1.0` installed.
- There was an issue during packages installation. Usually this happens with pnpm.
- Your app has multiple instances of `@mantine/core` package in the bundle. This may
  happen if your project is a monorepo and you have multiple node\_modules folders.

Steps to resolve the issue:

- Make sure that you have `MantineProvider` in your app and it wraps all Mantine components.
- Make sure that you have only one version of `@mantine/core` in your app. If you are using
  monorepo, make sure all packages depend on the same version of `@mantine/core`.
- Reinstall dependencies by removing `node_modules` folder and running `npm install` or
  `yarn install` again.
- If you still have issues, you can use [one of the official templates](https://mantine.dev/getting-started/#get-started-with-a-template) as reference.

# Can I remove MultiSelect placeholder when the component has selected values?

Learn why MultiSelect placeholder is not removed when values are selected and how to remove it with CSS

## Why MultiSelect placeholder is not removed when values are selected?

[MultiSelect](https://mantine.dev/core/multi-select) component uses placeholder to indicate that
there are values available for selection. It is different from [Select](https://mantine.dev/core/select)
component where placeholder is removed when value is selected – user can select only one value.

## How to remove MultiSelect placeholder when values are selected?

Apply the following styles to the MultiSelect component to remove placeholder when values are selected:

# Native browser validation does not work in some components, what should I do?

Learn why native browser validation does not work in some components

## Native browser validation

Native browser validation works with most of Mantine inputs,
for example, it can be used with [TextInput](https://mantine.dev/core/text-input),
[Textarea](https://mantine.dev/core/textarea), [NativeSelect](https://mantine.dev/core/native-select) and
other components.

However, some components like [Select](https://mantine.dev/core/select),
[MultiSelect](https://mantine.dev/core/multi-select), [Slider](https://mantine.dev/core/slider)
or [DatePicker](https://mantine.dev/dates/date-picker) do not support native
browser validation. These components provide custom UI
elements for data input and browsers do not treat them as
native inputs.

## Is there a workaround to use native browser validation?

No, there is no workaround to use native browser validation
for components with custom UI elements.

## What should I do instead?

If you are building a form that requires usage of Mantine inputs
with custom UI, you should validate form data after it has been
submitted. You can use [@mantine/form](https://mantine.dev/form/use-form) package
to perform form validation on submit.
