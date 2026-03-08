## valibot

Installation:

```bash
yarn add valibot mantine-form-valibot-resolver
```

```bash
npm install valibot mantine-form-valibot-resolver
```

Basic fields validation:

```tsx
import { valibotResolver } from 'mantine-form-valibot-resolver';
import * as v from 'valibot';
import { useForm } from '@mantine/form';

const schema = v.object({
  name: v.pipe(
    v.string(),
    v.minLength(2, 'Name should have at least 2 letters')
  ),
  email: v.pipe(v.string(), v.email('Invalid email')),
  age: v.pipe(
    v.number(),
    v.minValue(18, 'You must be at least 18 to create an account')
  ),
});

const form = useForm({
  initialValues: {
    name: '',
    email: '',
    age: 16,
  },
  validate: valibotResolver(schema),
});

form.validate();
form.errors;
// -> {
//  name: 'Name should have at least 2 letters',
//  email: 'Invalid email',
//  age: 'You must be at least 18 to create an account'
// }
```

Nested fields validation:

```tsx
import { valibotResolver } from 'mantine-form-valibot-resolver';
import * as v from 'valibot';
import { useForm } from '@mantine/form';

const nestedSchema = v.object({
  nested: v.object({
    field: v.pipe(
      v.string(),
      v.minLength(2, 'Field should have at least 2 letters')
    ),
  }),
});

const form = useForm({
  initialValues: {
    nested: {
      field: '',
    },
  },
  validate: valibotResolver(nestedSchema),
});

form.validate();
form.errors;
// -> {
//  'nested.field': 'Field should have at least 2 letters',
// }
```

List fields validation:

```tsx
import { valibotResolver } from 'mantine-form-valibot-resolver';
import * as v from 'valibot';
import { useForm } from '@mantine/form';

const listSchema = v.object({
  list: v.array(
    v.object({
      name: v.pipe(
        v.string(),
        v.minLength(2, 'Name should have at least 2 letters')
      ),
    })
  ),
});

const form = useForm({
  initialValues: {
    list: [{ name: '' }],
  },
  validate: valibotResolver(listSchema),
});

form.validate();
form.errors;
// -> {
//  'list.0.name': 'Name should have at least 2 letters',
// }
```

With TypeScript:

You can use the `InferInput` type from the `valibot` library to get the type of the form data.

```tsx
import { valibotResolver } from 'mantine-form-valibot-resolver';
import * as v from 'valibot';
import { useForm } from '@mantine/form';

export const userSchema = v.object({
  email: v.pipe(v.string(), v.email()),
});

type FormData = v.InferInput<typeof userSchema>;

const form = useForm<FormData>({
  initialValues: {
    email: '',
  },
  validate: valibotResolver(userSchema),
});
```

### formStatus

Package: @mantine/form
Import: import { FormStatus } from '@mantine/form';

## Touched and dirty state

`form.isTouched` and `form.isDirty` fields provide information about current field status:

- Field is considered to be `touched` when user focused it or its value was changed programmatically with `form.setFieldValue` handler
- Field is considered to be `dirty` when its value was changed and new value is different from field value specified in `initialValues` (compared with [fast-deep-equal](https://www.npmjs.com/package/fast-deep-equal))

#### Example: status

```tsx
import { useForm } from '@mantine/form';
import { TextInput, Button } from '@mantine/core';

function Demo() {
  const form = useForm({
    mode: 'uncontrolled',
    initialValues: { text: 'initial value' },
  });

  return (
    <div>
      <TextInput
        {...form.getInputProps('text')}
        key={form.key('text')}
        label="Touched/dirty demo"
        placeholder="Touched/dirty demo"
      />

      <Button
        onClick={() =>
          console.log({ touched: form.isTouched('text'), dirty: form.isDirty('text') })
        }
      >
        Log status to console
      </Button>
    </div>
  );
}
```

## isTouched and isDirty functions

```tsx
import { useForm } from '@mantine/form';

const form = useForm({
  mode: 'uncontrolled',
  initialValues: { a: 1, nested: { field: '' } },
});

// Provide path as first argument to get state of single field
form.isTouched('a'); // -> was field 'a' focused or changed?
form.isDirty('a'); // -> was field 'a' modified?
form.isDirty('nested.field'); // -> nested fields are also supported

// If field path is not provided,
// then functions will return form state instead
form.isTouched(); // -> was any field in form focused or changed?
form.isDirty(); // -> was any field in form modified?
```

## touchTrigger option

`touchTrigger` option allows customizing events that change touched state.
It accepts two options:

- `change` (default) – field will be considered touched when its value changes or it has been focused
- `focus` – field will be considered touched only when it has been focused

Example of using `focus` trigger:

```tsx
import { useForm } from '@mantine/form';

const form = useForm({
  mode: 'uncontrolled',
  initialValues: { a: 1 },
  touchTrigger: 'focus',
});

form.isTouched('a'); // -> false
form.setFieldValue('a', 2);
form.isTouched('a'); // -> false

// onFocus is called automatically when the user focuses the field
form.getInputProps('a').onFocus();
form.isTouched('a'); // -> true
```

## Initial values

You can provide initial touched and dirty values with `initialTouched` and `initialDirty` properties.
Both properties support [the same fields path format as errors](https://mantine.dev/form/errors/):

```tsx
import { useForm } from '@mantine/form';

const form = useForm({
  mode: 'uncontrolled',
  initialValues: { a: 1, nested: { field: '' } },
  initialTouched: { a: true, 'nested.field': true },
  initialDirty: { a: true, 'nested.field': true },
});
```

## resetTouched and resetDirty

`form.resetTouched` and `form.resetDirty` functions will make all fields clean and untouched.
Note that `form.reset` will also reset `touched` and `dirty` state:

```tsx
import { useForm } from '@mantine/form';

const form = useForm({
  mode: 'uncontrolled',
  initialValues: { a: 1 },
  initialTouched: { a: true },
  initialDirty: { a: true },
});

form.isDirty('a'); // -> true
form.isTouched('a'); // -> true

form.resetTouched();
form.isTouched('a'); // -> false

form.resetDirty();
form.isDirty('a'); // -> false
```

To reset values that are used for dirty check call `form.resetDirty` with new values:

```tsx
import { useForm } from '@mantine/form';

const form = useForm({
  mode: 'uncontrolled',
  initialValues: { a: 1 },
});

form.setValues({ a: 2 });
form.isDirty(); // -> true

form.resetDirty({ a: 2 });
form.isDirty(); // -> false

form.setValues({ a: 3 });
form.isDirty(); // -> true
```

## Submitting state

`form.submitting` field will be set to `true` if function passed to
`form.onSubmit` returns a promise. After the promise is resolved or rejected,
`form.submitting` will be set to `false`:

#### Example: submitting

```tsx
import { useState } from 'react';
import { Button, Group, Stack, Text, TextInput } from '@mantine/core';
import { useForm } from '@mantine/form';

const asyncSubmit = (values: any) =>
  new Promise((resolve) => setTimeout(() => resolve(values), 3000));

function Demo() {
  const form = useForm({
    mode: 'uncontrolled',
    initialValues: { name: 'John' },
  });

  const [completed, setCompleted] = useState(false);

  const handleSubmit = async (values: typeof form.values) => {
    await asyncSubmit(values);
    setCompleted(true);
  };

  if (completed) {
    return (
      <Stack>
        <Text>Form submitted!</Text>
        <Button onClick={() => setCompleted(false)}>Reset to initial state</Button>
      </Stack>
    );
  }

  return (
    <form onSubmit={form.onSubmit(handleSubmit)}>
      <TextInput
        withAsterisk
        label="Name"
        placeholder="Your name"
        key={form.key('name')}
        disabled={form.submitting}
        {...form.getInputProps('name')}
      />

      <Group justify="flex-end" mt="md">
        <Button type="submit" loading={form.submitting}>
          Submit
        </Button>
      </Group>
    </form>
  );
}
```

You can also manually set `form.submitting` to `true` or `false`:

```tsx
import { useForm } from '@mantine/form';

const form = useForm({ mode: 'uncontrolled' });
form.submitting; // -> false

form.setSubmitting(true);
form.submitting; // -> true

form.setSubmitting(false);
form.submitting; // -> false
```

### formUncontrolled

Package: @mantine/form
Import: import { FormUncontrolled } from '@mantine/form';

## Controlled mode

Controlled mode is the default mode of the form. In this mode, the form data is
stored in React state and all components are rerendered when form data changes.
Controlled mode is not recommended for large forms.

Example of a form with controlled mode:

#### Example: controlled

```tsx
import { useState } from 'react';
import { Button, Code, Text, TextInput } from '@mantine/core';
import { hasLength, isEmail, useForm } from '@mantine/form';

function Demo() {
  const form = useForm({
    mode: 'controlled',
    initialValues: { name: '', email: '' },
    validate: {
      name: hasLength({ min: 3 }, 'Must be at least 3 characters'),
      email: isEmail('Invalid email'),
    },
  });

  const [submittedValues, setSubmittedValues] = useState<typeof form.values | null>(null);

  return (
    <form onSubmit={form.onSubmit(setSubmittedValues)}>
      <TextInput {...form.getInputProps('name')} label="Name" placeholder="Name" />
      <TextInput {...form.getInputProps('email')} mt="md" label="Email" placeholder="Email" />
      <Button type="submit" mt="md">
        Submit
      </Button>

      <Text mt="md">Form values:</Text>
      <Code block>{JSON.stringify(form.values, null, 2)}</Code>

      <Text mt="md">Submitted values:</Text>
      <Code block>{submittedValues ? JSON.stringify(submittedValues, null, 2) : '–'}</Code>
    </form>
  );
}
```

As you can see in the example above, `form.values` update on every change. This
means that every component that uses `form.values` will rerender on every change.

## Uncontrolled mode

Uncontrolled mode is an alternative mode of the form introduced in 7.8.0 release.
It is now the recommended mode for all forms.
Uncontrolled mode provides significant performance improvements for large forms.

With uncontrolled mode, the form data is stored in a ref instead of React state
and `form.values` are not updated on every change.

Example of a form with uncontrolled mode:

#### Example: uncontrolled

```tsx
import { useState } from 'react';
import { Button, Code, Text, TextInput } from '@mantine/core';
import { hasLength, isEmail, useForm } from '@mantine/form';

function Demo() {
  const form = useForm({
    mode: 'uncontrolled',
    initialValues: { name: '', email: '' },
    validate: {
      name: hasLength({ min: 3 }, 'Must be at least 3 characters'),
      email: isEmail('Invalid email'),
    },
  });

  const [submittedValues, setSubmittedValues] = useState<typeof form.values | null>(null);

  return (
    <form onSubmit={form.onSubmit(setSubmittedValues)}>
      <TextInput
        {...form.getInputProps('name')}
        key={form.key('name')}
        label="Name"
        placeholder="Name"
      />
      <TextInput
        {...form.getInputProps('email')}
        key={form.key('email')}
        mt="md"
        label="Email"
        placeholder="Email"
      />
      <Button type="submit" mt="md">
        Submit
      </Button>

      <Text mt="md">Form values:</Text>
      <Code block>{JSON.stringify(form.values, null, 2)}</Code>

      <Text mt="md">Submitted values:</Text>
      <Code block>{submittedValues ? JSON.stringify(submittedValues, null, 2) : '–'}</Code>
    </form>
  );
}
```

As you can see in the example above, `form.values` do not update at all.
