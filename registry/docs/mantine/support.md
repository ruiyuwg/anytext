# Support

This guide will help you understand how to get help, report bugs and connect with the community.
Keep in mind that Mantine is maintained by a small team of developers, all Mantine projects
are open-source and free for everyone.

## Get help

If you have any questions, need help with Mantine, want to request a feature,
or just want to chat with other developers, you can:

- Join [Mantine Discord server](https://discord.gg/wbH82zuWMN)
- Ask questions using [GitHub discussion](https://github.com/orgs/mantinedev/discussions)
- Visit [Help Center](https://help.mantine.dev/) to browse FAQ and guides

## Report an issue

We use GitHub issues to track bugs. You can find a list of current open issues on
[this page](https://github.com/mantinedev/mantine/issues). Usually, it takes up to
3 weeks to review and fix the issue. Issues reported on GitHub are fixed only in patch
releases (8.0.x) – minor and major releases are reserved for new features and breaking changes.

If you found a bug and want to report it, please follow these steps:

1. Search for similar issues on GitHub, maybe someone has already reported it.
2. Make sure that you are using the latest version of Mantine, the issue might have been already fixed.
3. If you did not find similar issues, [create a new one](https://github.com/mantinedev/mantine/issues/new/choose),
   make sure to use one of the provided templates and provide as much information as possible, including
   a [minimal reproduction example](https://stackoverflow.com/help/minimal-reproducible-example).
4. Wait for the issue to be reviewed and fixed.

## Get help on GitHub Discussions

[GitHub discussion](https://github.com/orgs/mantinedev/discussions) are used for questions,
feature requests, feedback, showcase and discussions. If clearly stated, questions are usually
answered within 24 hours. To get help on GitHub Discussions:

1. Before creating a new discussion, search for similar topics on [GitHub](https://github.com/orgs/mantinedev/discussions)
   and [Help Center](https://help.mantine.dev/).
2. If you did not find similar topics, [create a new discussion](https://github.com/orgs/mantinedev/discussions).
3. Wait for the discussion to be reviewed and answered.
4. If the provided answer solves your issue, mark it as a solution.

## Support Mantine

All contributions to the projects are welcome and appreciated.
There are many ways to support the project:

- Share your feedback in [GitHub Discussions](https://github.com/mantinedev/mantine/discussions/categories/feedback) –
  we are always happy to hear your thoughts on how to improve Mantine. Most of the new features and components
  are based on the feedback received from the community.
- Help others on [Discord](https://discord.gg/wbH82zuWMN) and/or [GitHub Discussions](https://github.com/mantinedev/mantine/discussions). There are usually 10-20 new questions every day,
  you can help people with their issues and questions. While helping others, you will learn yourself and become
  more proficient with React and Mantine.
- Give us a code review. You are welcome to explore the [source code](https://github.com/mantinedev/mantine) of `@mantine/*` packages
  and provide your feedback on how it can be improved. We are always open to new ideas and suggestions.
- Send us some [kind words](https://github.com/mantinedev/mantine/discussions/categories/kind-words). We usually receive only
  bug reports and feature requests, it is always nice to hear that people enjoy working with Mantine.
- Star the project on [GitHub](https://github.com/mantinedev/mantine). It is a small thing that helps us grow and get more
  people interested in the project.
- [Contribute](https://mantine.dev/contribute) to the Mantine codebase. We welcome all kinds of contributions: if you do not have much
  experience with React/TypeScript, you can help us improve the documentation to make it more clear and understandable
  for new developers. If you are an experienced React developer, you can help us with open [issues](https://github.com/mantinedev/mantine/issues?q=is%3Aopen+is%3Aissue+label%3A%22help+wanted%22).
- If you are using Mantine at work and your company wants to support the project, you can allocate some time
  of your engineers to contribute to Mantine.

### formActions

Package: @mantine/form
Import: import { FormActions } from '@mantine/form';

## Usage

Form actions allow changing state of the form from anywhere in your application.
The mechanism of form actions is similar to [notifications system](https://mantine.dev/x/notifications/),
[modals manager](https://mantine.dev/x/modals/) and other similar packages.

To use form actions, set `name` property in [use-form](https://mantine.dev/form/use-form/) settings:

```tsx
import { useForm } from '@mantine/form';

export interface DemoFormValues {
  name: string;
  age: number;
}

function Demo() {
  const form = useForm<DemoFormValues>({
    mode: 'uncontrolled',
    name: 'demo-form',
    initialValues: {
      name: '',
      age: 0,
    },
  });
}
```

Then call `createFormActions` function with the same form name as specified in `useForm` settings:

```tsx
// Import type of form values from the file where you defined useForm
import { createFormActions } from '@mantine/form';
import type { DemoFormValues } from './DemoForm';

export const demoFormActions =
  createFormActions<DemoFormValues>('demo-form');
```

After that, you can use `demoFormActions` to change form state from anywhere in your application.
For example, after a fetch request or after a user interaction with a component that does not have access
to the form state:

```tsx
import { useEffect } from 'react';
import { Button } from '@mantine/core';
import { demoFormActions } from './demoFormActions';

function ExternalComponent() {
  useEffect(() => {
    fetch('/api/user')
      .then((res) => res.json())
      .then((res) =>
        demoFormActions.setValues({
          name: res.name,
          age: res.age,
        })
      );
  }, []);

  return (
    <Button onClick={() => demoFormActions.reset()}>
      Reset demo form
    </Button>
  );
}
```

## Form name

Form name must be a string that contains only letters, numbers and dashes:

```tsx
import { useForm } from '@mantine/form';

// ✅ Valid form name
const valid = useForm({
  name: 'valid-FORM-name-10',
  mode: 'uncontrolled',
});

// ❌ Invalid form name: must not contain spaces and special characters
const invalid = useForm({
  name: 'invalid_form name',
  mode: 'uncontrolled',
});
```

Note that form names must be unique, if you have multiple forms with the same name, form actions will
update the state of all forms with the same name.

## Form actions

`createFormActions` function returns an object with the following methods:

- `setFieldValue`
- `setValues`
- `setInitialValues`
- `setErrors`
- `setFieldError`
- `clearFieldError`
- `clearErrors`
- `reset`
- `validate`
- `validateField`
- `reorderListItem`
- `removeListItem`
- `insertListItem`
- `setDirty`
- `setTouched`
- `resetDirty`
- `resetTouched`

All methods work similar to [use-form](https://mantine.dev/form/use-form/) hooks methods –
functions accept the same arguments but do not return anything.

### Form context

Package: @mantine/form
Import: import { Form context } from '@mantine/form';
Description: Add context support to use-form with createFormContext

## Usage

`createFormContext` function creates context provider and hook to get form object from context:

```tsx
import { TextInput } from '@mantine/core';
import { createFormContext } from '@mantine/form';

// Definition of form values is required
interface FormValues {
  age: number;
  name: string;
}

// createFormContext returns a tuple with 3 items:
// FormProvider is a component that sets form context
// useFormContext hook return form object that was previously set in FormProvider
// useForm hook works the same way as useForm exported from the package but has predefined type
const [FormProvider, useFormContext, useForm] =
  createFormContext<FormValues>();

function ContextField() {
  const form = useFormContext();
  return (
    <TextInput
      label="Your name"
      key={form.key('name')}
      {...form.getInputProps('name')}
    />
  );
}

export function Context() {
  // Create form as described in use-form documentation
  const form = useForm({
    mode: 'uncontrolled',
    initialValues: {
      age: 0,
      name: '',
    },
  });

  // Wrap your form with FormProvider
  return (
    <FormProvider form={form}>
      <form onSubmit={form.onSubmit(() => {})}>
        <ContextField />
      </form>
    </FormProvider>
  );
}
```

## Store context in separate file

Usually it is a good idea to store form context in separate file to avoid dependencies cycle:

```tsx
// form-context.ts file
import { createFormContext } from '@mantine/form';

interface UserFormValues {
  age: number;
  name: string;
}

// You can give context variables any name
export const [UserFormProvider, useUserFormContext, useUserForm] =
  createFormContext<UserFormValues>();
```

Then you can import context variables from anywhere:

```tsx
// NameInput.tsx
import { TextInput } from '@mantine/core';
import { useUserFormContext } from './form-context';

export function NameInput() {
  const form = useUserFormContext();
  return (
    <TextInput
      label="Name"
      key={form.key('name')}
      {...form.getInputProps('name')}
    />
  );
}
```

```tsx
// UserForm.tsx
import { NumberInput } from '@mantine/core';
import { UserFormProvider, useUserForm } from './form-context';
import { NameInput } from './NameInput';

function UserForm() {
  const form = useUserForm({
    mode: 'uncontrolled',
    initialValues: {
      age: 0,
      name: '',
    },
  });

  return (
    <UserFormProvider form={form}>
      <form onSubmit={form.onSubmit(() => {})}>
        <NumberInput
          label="Age"
          key={form.key('age')}
          {...form.getInputProps('age')}
        />
        <NameInput />
      </form>
    </UserFormProvider>
  );
}
```

### formErrors

Package: @mantine/form
Import: import { FormErrors } from '@mantine/form';

## Errors object

`form.errors` is an object of React nodes that contains validation errors:

```tsx
import { useForm } from '@mantine/form';

const form = useForm({
  mode: 'uncontrolled',
  initialValues: { firstName: '', lastName: '' },
  validate: {
    firstName: (value) =>
      value.length < 2 ? 'First name is too short' : null,
    lastName: (value) =>
      value.length < 2 ? 'Last name is too short' : null,
  },
});

// Errors object is empty by default
form.errors; // -> {}

// Errors will be filled when you call form.validate manually
// or automatically with form.onSubmit handler
form.validate();

form.errors; // ->
// {
//   firstName: 'First name is too short',
//   lastName: 'Last name is too short'
// }
```

## Initial errors

Same as with [initial values](https://mantine.dev/form/values/) you can set initial form errors:

```tsx
import { useForm } from '@mantine/form';

const form = useForm({
  mode: 'uncontrolled',
  initialValues: { firstName: '', lastName: '' },
  initialErrors: {
    firstName: 'First name is too short',
    lastName: 'Last name is too short',
  },
});
```

## setErrors handler

```tsx
import { useForm } from '@mantine/form';

const form = useForm({ mode: 'uncontrolled' });
form.setErrors({ firstName: 'Too short', email: 'Invalid email' });

form.errors;
// -> { firstName: 'Too short', email: 'Invalid email' }
```

## setFieldError handler

`form.setFieldError` handler sets error of the given field:

```tsx
import { useForm } from '@mantine/form';

const form = useForm({
  mode: 'uncontrolled',
  initialValues: { name: '', email: '' },
});

form.setFieldError('email', 'Invalid email');

form.errors; // -> { email: 'Invalid email' }
```

## clearErrors handler

`form.clearErrors` handler clear all form errors:

```tsx
import { useForm } from '@mantine/form';

const form = useForm({
  mode: 'uncontrolled',
  initialErrors: { name: 'Too short', email: 'Invalid email' },
});

form.clearErrors();

form.errors; // -> {}
```

## clearFieldError handler

`form.clearFieldError` handler clears error of the given field:

```tsx
import { useForm } from '@mantine/form';

const form = useForm({
  mode: 'uncontrolled',
  initialErrors: { name: 'Too short', email: 'Invalid email' },
});
form.clearFieldError('name');

form.errors; // -> { email: 'Invalid email' }
```

## Errors as react node

You can use any React node as an error message:

```tsx
import { useForm } from '@mantine/form';

const form = useForm({
  mode: 'uncontrolled',
  initialValues: { name: '', email: '' },
  initialErrors: {
    name: <p>Paragraph error</p>, // -> error as a react element
    email: 42, // -> error as a number
  },
});
```

Note that errors that are `false`, `null` or `undefined` will be automatically removed:

```tsx
import { useForm } from '@mantine/form';

const form = useForm({
  mode: 'uncontrolled',
  initialErrors: { name: 'name-error', email: null },
});

form.errors; // -> { name: 'name-error' }, email error is not included in errors object
```

## FormErrors type

`form.errors` type is `Record<string, React.ReactNode>`, you can import a shorthand `FormErrors` type from `@mantine/form`:

```tsx
import type { FormErrors } from '@mantine/form';
```

You can also get type directly from the `form` instance:

```tsx
import { useForm } from '@mantine/form';

const form = useForm({ mode: 'uncontrolled' });

const handleErrors = (errors: typeof form.errors) => {};
```

### formGetInputProps

Package: @mantine/form
Import: import { FormGetInputProps } from '@mantine/form';

## getInputProps handler

`form.getInputProps` returns an object with `value` (`defaultValue` for "uncontrolled" mode), `onChange`, `onFocus`, `onBlur`, `error`
and all props specified in `enhanceGetInputProps` function. Return value should be spread to the input component.

You can pass the following options to `form.getInputProps` as second argument:

- `type`: default `input`. Must be set to `checkbox` if the input requires `checked` prop instead of `value`.
- `withError`: default `type === 'input'`. Determines whether the returned object should contain an `error` property with
  `form.errors[path]` value.
- `withFocus`: default `true`. Determines whether the returned object should contain an `onFocus` handler. If disabled, the touched
  state will only change if value of the field has been changed.
- Any additional props that can be accessed with `enhanceGetInputProps` function. These props are not passed to the input.

```tsx
import { Checkbox, TextInput } from '@mantine/core';
import { useForm } from '@mantine/form';

function Demo() {
  const form = useForm({
    mode: 'uncontrolled',
    initialValues: { name: '', accepted: false },
    validate: {
      name: (value) => value.trim().length > 2,
    },
  });

  return (
    <>
      <TextInput
        key={form.key('name')}
        {...form.getInputProps('name')}
      />
      <Checkbox
        key={form.key('accepted')}
        {...form.getInputProps('accepted', { type: 'checkbox' })}
      />
    </>
  );
}
```

## enhanceGetInputProps

`enhanceGetInputProps` is a function that can be used to add additional props to the object returned by `form.getInputProps`.
You can define it in `useForm` hook options. Its argument is an object with the following properties:

- `inputProps` – object returned by `form.getInputProps` by default
- `field` – field path, first argument of `form.getInputProps`, for example `name`, `user.email`, `users.0.name`
- `options` – second argument of `form.getInputProps`, for example `{ type: 'checkbox' }`, can be used to pass additional
  options to `enhanceGetInputProps` function
- `form` – form instance

Example of using `enhanceGetInputProps` to disable input based on field path:

#### Example: enhanceGetInputProps

```tsx
import { NumberInput, TextInput } from '@mantine/core';
import { useForm } from '@mantine/form';

interface FormValues {
  name: string;
  age: number | string;
}

function Demo() {
  const form = useForm<FormValues>({
    mode: 'uncontrolled',
    initialValues: { name: '', age: '' },
    enhanceGetInputProps: (payload) => ({
      disabled: payload.field === 'name',
    }),
  });

  return (
    <>
      <TextInput
        {...form.getInputProps('name')}
        key={form.key('name')}
        label="Name"
        placeholder="Name"
      />
      <NumberInput
        {...form.getInputProps('age')}
        key={form.key('age')}
        label="Age"
        placeholder="Age"
        mt="md"
      />
    </>
  );
}
```

Example of using `enhanceGetInputProps` to add additional props to the input based on option passed to `form.getInputProps`:

#### Example: enhanceGetInputPropsOptions

```tsx
import { NumberInput, TextInput } from '@mantine/core';
import { useForm } from '@mantine/form';

interface FormValues {
  name: string;
  age: number | string;
}

function Demo() {
  const form = useForm<FormValues>({
    mode: 'uncontrolled',
    initialValues: { name: '', age: '' },
    enhanceGetInputProps: (payload) => {
      if (payload.options.fieldType === 'name') {
        return {
          label: 'Your name',
          placeholder: 'Your name',
          withAsterisk: true,
          description: 'Your personal information is stored securely. (Just kidding!)',
        };
      }

      return {};
    },
  });

  return (
    <>
      <TextInput {...form.getInputProps('name', { fieldType: 'name' })} key={form.key('name')} />
      <NumberInput
        {...form.getInputProps('age')}
        key={form.key('age')}
        label="Age"
        placeholder="Age"
        mt="md"
      />
    </>
  );
}
```

Example of using `enhanceGetInputProps` to add `disabled` prop to all inputs if the form
has not been initialized yet:

#### Example: enhanceGetInputPropsForm

```tsx
import { NumberInput, TextInput, Button } from '@mantine/core';
import { useForm } from '@mantine/form';

interface FormValues {
  name: string;
  age: number | string;
}

function Demo() {
  const form = useForm<FormValues>({
    mode: 'uncontrolled',
    initialValues: { name: '', age: '' },
    enhanceGetInputProps: (payload) => {
      if (!payload.form.initialized) {
        return { disabled: true };
      }

      return {};
    },
  });

  return (
    <>
      <TextInput
        {...form.getInputProps('name')}
        key={form.key('name')}
        label="Your name"
        placeholder="Your name"
      />
      <NumberInput
        {...form.getInputProps('age')}
        key={form.key('age')}
        label="Age"
        placeholder="Age"
        mt="md"
      />
      <Button onClick={() => form.initialize({ name: 'John', age: 20 })} mt="md">
        Initialize form
      </Button>
    </>
  );
}
```

## Initialize form

When called `form.initialize` handler sets `initialValues` and `values` to the same value
and marks form as initialized. It can be used only once, next `form.initialize` calls
are ignored.

`form.initialize` is useful when you want to sync form values with backend API response:

#### Example: initialize

```tsx
import { Button, NumberInput, TextInput } from '@mantine/core';
import { isInRange, isNotEmpty, useForm } from '@mantine/form';

interface FormValues {
  name: string;
  age: number | string;
}

function apiRequest(): Promise<FormValues> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({ name: 'John Doe', age: 25 });
    }, 1000);
  });
}

function Demo() {
  const form = useForm<FormValues>({
    mode: 'uncontrolled',
    initialValues: { name: '', age: 0 },
    validate: {
      name: isNotEmpty('Name is required'),
      age: isInRange({ min: 18 }, 'You must be at least 18 to register'),
    },
  });

  return (
    <>
      <TextInput
        {...form.getInputProps('name')}
        key={form.key('name')}
        label="Name"
        placeholder="Name"
      />
      <NumberInput
        {...form.getInputProps('age')}
        key={form.key('age')}
        label="Age"
        placeholder="Age"
        mt="md"
      />
      <Button onClick={() => apiRequest().then((values) => form.initialize(values))} mt="md">
        Initialize form
      </Button>
    </>
  );
}
```

Example with [TanStack Query](https://tanstack.com/query/latest) (react-query):

```tsx
import { useEffect } from 'react';
import { useQuery } from '@tanstack/react-query';
import { useForm } from '@mantine/form';

function Demo() {
  const query = useQuery({
    queryKey: ['current-user'],
    queryFn: () => fetch('/api/users/me').then((res) => res.json()),
  });

  const form = useForm({
    mode: 'uncontrolled',
    initialValues: {
      name: '',
      email: '',
    },
  });

  useEffect(() => {
    if (query.data) {
      // Even if query.data changes, form will be initialized only once
      form.initialize(query.data);
    }
  }, [query.data]);
}
```

## Integrate getInputProps with custom inputs

`form.getInputProps` returns an object with the following properties:

- `value`
- `defaultValue`
- `onChange`
- `onFocus`
- `onBlur`
- `error`

To create a custom input that works with `form.getInputProps`, make sure that your component
accepts these props and passes them to the input component or uses them in any other way.

Example of creating a custom input component:

```tsx
interface CustomInputProps {
  value?: string;
  defaultValue?: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onFocus?: (event: React.FocusEvent<HTMLInputElement>) => void;
  onBlur?: (event: React.FocusEvent<HTMLInputElement>) => void;
  error?: string;
}

export function CustomInput({
  value,
  defaultValue,
  onChange,
  onFocus,
  onBlur,
  error,
}: CustomInputProps) {
  return (
    <div>
      <input
        value={value}
        defaultValue={defaultValue}
        onChange={onChange}
        onFocus={onFocus}
        onBlur={onBlur}
      />
      {error && <div>{error}</div>}
    </div>
  );
}
```

Then use it with `form.getInputProps`:

```tsx
import { useForm } from '@mantine/form';
import { CustomInput } from './CustomInput';

function Demo() {
  const form = useForm({
    mode: 'uncontrolled',
    initialValues: { name: '' },
  });

  return (
    <CustomInput
      {...form.getInputProps('name')}
      key={form.key('name')}
    />
  );
}
```

### formNested

Package: @mantine/form
Import: import { FormNested } from '@mantine/form';

## Properties paths

Most of `form` handlers accept property path as the first argument.
Property path includes keys/indices of objects/arrays at which target property is contained:

```tsx
import { useForm } from '@mantine/form';

const form = useForm({
  mode: 'uncontrolled',
  initialValues: {
    user: {
      firstName: 'John',
      lastName: 'Doe',
    },

    fruits: [
      { name: 'Banana', available: true },
      { name: 'Orange', available: false },
    ],

    deeply: {
      nested: {
        object: [{ item: 1 }, { item: 2 }],
      },
    },
  },
});

// Props for input that is controlled by user object firstName field
form.getInputProps('user.firstName');

// Set value of `name` field that is contained in object at second position of fruits array:
form.setFieldValue('fruits.1.name', 'Carrot');

// Validate deeply nested field
form.validateField('deeply.nested.object.0.item');
```

## Nested objects

#### Example: nested

```tsx
import { useForm } from '@mantine/form';
import { Box, Checkbox, TextInput } from '@mantine/core';

function Demo() {
  const form = useForm({
    mode: 'uncontrolled',
    initialValues: {
      terms: false,
      user: {
        firstName: '',
        lastName: '',
      },
    },
  });

  return (
    <Box maw={340} mx="auto">
      <TextInput
        label="First name"
        placeholder="First name"
        key={form.key('user.firstName')}
        {...form.getInputProps('user.firstName')}
      />
      <TextInput
        label="Last name"
        placeholder="Last name"
        mt="md"
        key={form.key('user.lastName')}
        {...form.getInputProps('user.lastName')}
      />
      <Checkbox
        label="I accept terms and conditions"
        mt="sm"
        key={form.key('terms')}
        {...form.getInputProps('terms', { type: 'checkbox' })}
      />
    </Box>
  );
}
```

## Set nested object value

```tsx
import { useForm } from '@mantine/form';

const form = useForm({
  mode: 'uncontrolled',
  initialValues: {
    user: {
      name: '',
      occupation: '',
    },
  },
});

// You can set values for each field individually
form.setFieldValue('user.name', 'John');
form.setFieldValue('user.occupation', 'Engineer');

// Or set the entire object
form.setFieldValue('user', { name: 'Jane', occupation: 'Architect' });
```

## Nested object values validation

```tsx
import { useForm } from '@mantine/form';

const form = useForm({
  mode: 'uncontrolled',
  initialValues: {
    user: {
      name: '',
      occupation: '',
    },
  },

  validate: {
    user: {
      name: (value) =>
        value.length < 2 ? 'Name is too short' : null,
      occupation: (value) =>
        value.length < 2 ? 'Occupation is too short' : null,
    },
  },
});

form.validate();
form.errors; // -> { 'user.name': 'Name is too short', 'user.occupation': 'Occupation is too short' }
```

## Nested arrays

#### Example: lists

```tsx
import { useForm } from '@mantine/form';
import { TextInput, Switch, Group, ActionIcon, Box, Text, Button } from '@mantine/core';
import { randomId } from '@mantine/hooks';
import { IconTrash } from '@tabler/icons-react';

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
        {...form.getInputProps(`employees.${index}.active`, { type: 'checkbox' })}
      />
      <ActionIcon color="red" onClick={() => form.removeListItem('employees', index)}>
        <IconTrash size={16} />
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
            form.insertListItem('employees', { name: '', active: false, key: randomId() })
          }
        >
          Add employee
        </Button>
      </Group>
    </Box>
  );
}
```

## List handlers

`useForm` hook provides the following handlers to manage list state:

- `removeListItem` – removes list item at given index
- `insertListItem` – inserts list item at given index (appends item to the end of the list if index is not specified)
- `reorderListItem` – reorders list item with given position at specified field
- `replaceListItem` – replaces list item at given index with new value

## List values validation

```tsx
import { useForm } from '@mantine/form';

const form = useForm({
  mode: 'uncontrolled',
  initialValues: {
    users: [
      { name: 'John', age: 12 },
      { name: '', age: 22 },
    ],
  },

  validate: {
    users: {
      name: (value) =>
        value.length < 2
          ? 'Name should have at least 2 letters'
          : null,
      age: (value) =>
        value < 18 ? 'User must be 18 or older' : null,
    },
  },
});

// Validate list item field
form.validateField('users.1.name');

// Or with all other fields
form.validate();
console.log(form.errors);
// {
//  'users.0.age': 'User must be 18 or older',
//  'users.1.name': 'Name should have at least 2 letters'
// }
```

### HooksPackage

Package: @mantine/form
Import: import { HooksPackage } from '@mantine/form';

# Mantine form

[![npm](https://img.shields.io/npm/dm/@mantine/form)](https://www.npmjs.com/package/@mantine/form)

[@mantine/form](https://www.npmjs.com/package/@mantine/form) package
contains `useForm` hook that manages form state, validation, and submission.
`useForm` hook is designed to be used with other Mantine libraries (`@mantine/core`, `@mantine/dates`, etc.)
– all Mantine inputs are compatible with `useForm` out of the box.

## Installation

```bash
yarn add @mantine/form
```

```bash
npm install @mantine/form
```

## Usage

`@mantine/form` package can be used in any web React application.
Although the package is designed to work with Mantine component, it can
be used with native inputs or any other form libraries – it is standalone
and does not have any dependencies except React.

Example of using `useForm` hook to create a simple form:

#### Example: usage

```tsx
import { Button, Checkbox, Group, TextInput } from '@mantine/core';
import { useForm } from '@mantine/form';

function Demo() {
  const form = useForm({
    mode: 'uncontrolled',
    initialValues: {
      email: '',
      termsOfService: false,
    },

    validate: {
      email: (value) => (/^\\S+@\\S+$/.test(value) ? null : 'Invalid email'),
    },
  });

  return (
    <form onSubmit={form.onSubmit((values) => console.log(values))}>
      <TextInput
        withAsterisk
        label="Email"
        placeholder="your@email.com"
        key={form.key('email')}
        {...form.getInputProps('email')}
      />

      <Checkbox
        mt="md"
        label="I agree to sell my privacy"
        key={form.key('termsOfService')}
        {...form.getInputProps('termsOfService', { type: 'checkbox' })}
      />

      <Group justify="flex-end" mt="md">
        <Button type="submit">Submit</Button>
      </Group>
    </form>
  );
}
```

## License

MIT

### formRecipes

Package: @mantine/form
Import: import { FormRecipes } from '@mantine/form';

## Set initial values with async request

#### Example: asyncSetValues

```tsx
import { useEffect } from 'react';
import { useForm } from '@mantine/form';
import { TextInput, Checkbox } from '@mantine/core';

interface FormValues {
  email: string;
  terms: boolean;
}

function loadInitialValues(): Promise<FormValues> {
  return new Promise((resolve) => {
    setTimeout(() => resolve({ email: 'test@email', terms: true }), 2000);
  });
}

function Demo() {
  const form = useForm<FormValues>({
    mode: 'uncontrolled',
    initialValues: { email: '', terms: false },
  });

  useEffect(() => {
    loadInitialValues().then((values) => {
      form.setValues(values);
      form.resetDirty(values);
    });
  }, []);

  return (
    <form onSubmit={form.onSubmit(console.log)}>
      <TextInput
        label="Email"
        placeholder="Email"
        key={form.key('email')}
        {...form.getInputProps('email')}
      />
      <Checkbox
        mt="sm"
        label="I accept terms and conditions"
        key={form.key('terms')}
        {...form.getInputProps('terms', { type: 'checkbox' })}
      />
    </form>
  );
}
```

## Save form values to local storage

#### Example: localStorage

```tsx
import { useEffect } from 'react';
import { useForm } from '@mantine/form';
import { TextInput, Box } from '@mantine/core';

function Demo() {
  const form = useForm({
    mode: 'uncontrolled',
    initialValues: { name: '', occupation: '' },
    onValuesChange: (values) => {
      window.localStorage.setItem('user-form', JSON.stringify(values));
    },
  });

  useEffect(() => {
    const storedValue = window.localStorage.getItem('user-form');
    if (storedValue) {
      try {
        form.setValues(JSON.parse(window.localStorage.getItem('user-form')!));
      } catch (e) {
        console.log('Failed to parse stored value');
      }
    }
  }, []);

  return (
    <Box maw={340} mx="auto">
      <TextInput
        label="Name"
        placeholder="Name"
        key={form.key('name')}
        {...form.getInputProps('name')}
      />
      <TextInput
        mt="md"
        label="Occupation"
        placeholder="Occupation"
        key={form.key('occupation')}
        {...form.getInputProps('occupation')}
      />
    </Box>
  );
}
```
