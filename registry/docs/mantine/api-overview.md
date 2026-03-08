## API overview

All examples below use the following example use-form hook.

```tsx
import { useForm } from '@mantine/form';

const form = useForm({
  mode: 'uncontrolled',
  initialValues: {
    path: '',
    path2: '',
    user: {
      firstName: 'John',
      lastName: 'Doe',
    },
    fruits: [
      { name: 'Banana', available: true },
      { name: 'Orange', available: false },
    ],
    accepted: false,
  },
});
```

### Values

[Form values guide](https://mantine.dev/form/values/)

```tsx
// get current form values
form.getValues();

// Set all form values
form.setValues(values);

// Set all form values using the previous state
form.setValues((prev) => ({ ...prev, ...values }));

// Set value of single field
form.setFieldValue('path', value);

// Set value of nested field
form.setFieldValue('user.firstName', 'Jane');

// Resets form values to `initialValues`,
// clears all validation errors,
// resets touched and dirty state
form.reset();

// Reset field at `path` to its initial value
form.resetField('path');

// Sets initial values, used when form is reset
form.setInitialValues({ values: 'object' });
```

### List items

[Nested fields guide](https://mantine.dev/form/nested/)

```tsx
// Inserts given list item at the specified path
form.insertListItem('fruits', { name: 'Apple', available: true });

// An optional index may be provided to specify the position in a nested field.
// If the index is provided, item will be inserted at the given position.
// If the index is larger than the current list, the element is inserted at the last position.
form.insertListItem('fruits', { name: 'Orange', available: true }, 1);

// Removes the list item at the specified path and index.
form.removeListItem('fruits', 1);

// Replaces the list item at the specified path and index with the given item.
form.replaceListItem('fruits', 1, { name: 'Apple', available: true });

// Swaps two items of the list at the specified path.
// You should make sure that there are elements at at the `from` and `to` index.
form.reorderListItem('fruits', { from: 1, to: 0 });
```

### Validation

[Form validation guide](https://mantine.dev/form/validation/)

```tsx
import { useForm } from '@mantine/form';

const form = useForm({
  mode: 'uncontrolled',
  initialValues: {
    email: '',
    user: {
      firstName: '',
      lastName: '',
    },
  },
  validate: {
    email: (value) => (value.length < 2 ? 'Invalid email' : null),
    user: {
      firstName: (value) =>
        value.length < 2
          ? 'First name must have at least 2 letters'
          : null,
    },
  },
});

// Validates all fields with specified `validate` function or schema, sets form.errors
form.validate();

// Validates single field at specified path, sets form.errors
form.validateField('user.firstName');

// Works the same way as form.validate but does not set form.errors
form.isValid();
form.isValid('user.firstName');
```

### Errors

[Form errors guide](https://mantine.dev/form/errors/)

Validation errors occur when defined validation rules were violated, `initialErrors` were specified in useForm properties
or validation errors were set manually.

```tsx
// get current errors state
form.errors;

// Set all errors
form.setErrors({ path: 'Error message', path2: 'Another error' });

// Set error message at specified path
form.setFieldError('user.lastName', 'No special characters allowed');

// Clears all errors
form.clearErrors();

// Clears error of field at specified path
form.clearFieldError('path');
```

### onReset and onSubmit

Wrapper function for form `onSubmit` and `onReset` event handler. `onSubmit` handler accepts as second argument a function
that will be called with errors object when validation fails.

```tsx
import { useForm } from '@mantine/form';

function Demo() {
  const form = useForm({ mode: 'uncontrolled' });

  const handleSubmit = (values: typeof form.values) => {
    console.log(values);
  };

  return (
    <>
      {/* Supply handle submit as a single argument to receive validated values */}
      <form onSubmit={form.onSubmit(handleSubmit)} />

      {/* Supply second argument to handle errors */}
      <form
        onSubmit={form.onSubmit(
          (values, event) => {
            console.log(
              values, // <- form.getValues() at the moment of submit
              event // <- form element submit event
            );
          },
          (validationErrors, values, event) => {
            console.log(
              validationErrors, // <- form.errors at the moment of submit
              values, // <- form.getValues() at the moment of submit
              event // <- form element submit event
            );
          }
        )}
      />

      {/* form.onReset calls form.reset */}
      <form onReset={form.onReset}></form>
    </>
  );
}
```

### onSubmitPreventDefault option

By default, `event.preventDefault()` is called on the form `onSubmit` handler.
If you want to change this behavior, you can pass `onSubmitPreventDefault` option
to `useForm` hook. It can have the following values:

- `always` (default) - always call `event.preventDefault()`
- `never` - never call `event.preventDefault()`
- `validation-failed` - call `event.preventDefault()` only if validation failed

```tsx
import { useForm } from '@mantine/form';

const form = useForm({
  mode: 'uncontrolled',
  onSubmitPreventDefault: 'never',
});
```

### Touched and dirty

[Touched & dirty guide](https://mantine.dev/form/status/)

```tsx
// Returns true if user interacted with any field inside form in any way
form.isTouched();

// Returns true if user interacted with field at specified path
form.isTouched('path');

// Set all touched values
form.setTouched({ 'user.firstName': true, 'user.lastName': false });

// Clears touched status of all fields
form.resetTouched();

// Returns true if form values are not deep equal to initialValues
form.isDirty();

// Returns true if field value is not deep equal to initialValues
form.isDirty('path');

// Sets dirty status of all fields
form.setDirty({ 'user.firstName': true, 'user.lastName': false });

// Clears dirty status of all fields, saves form.values snapshot
// After form.resetDirty is called, form.isDirty will compare
// form.getValues() to snapshot instead of initialValues
form.resetDirty();
```

## UseFormReturnType

`UseFormReturnType` can be used when you want to pass `form` as a prop to another component:

```tsx
import { TextInput } from '@mantine/core';
import { useForm, UseFormReturnType } from '@mantine/form';

interface FormValues {
  name: string;
  occupation: string;
}

function NameInput({
  form,
}: {
  form: UseFormReturnType<FormValues>;
}) {
  return (
    <TextInput
      key={form.key('name')}
      {...form.getInputProps('name')}
    />
  );
}

function OccupationInput({
  form,
}: {
  form: UseFormReturnType<FormValues>;
}) {
  return (
    <TextInput
      key={form.key('occupation')}
      {...form.getInputProps('occupation')}
    />
  );
}

function Demo() {
  const form = useForm<FormValues>({
    mode: 'uncontrolled',
    initialValues: { name: '', occupation: '' },
  });
  return (
    <>
      <NameInput form={form} />
      <OccupationInput form={form} />
    </>
  );
}
```

### formValidation

Package: @mantine/form
Import: import { FormValidation } from '@mantine/form';

## Validation with rules object

To validate form with rules object, provide an object of functions which take field value as an argument
and return error message (any React node) or null if field is valid:

#### Example: rulesValidation

```tsx
import { useForm } from '@mantine/form';
import { NumberInput, TextInput, Button } from '@mantine/core';

function Demo() {
  const form = useForm({
    mode: 'uncontrolled',
    initialValues: { name: '', email: '', age: 0 },

    // functions will be used to validate values at corresponding key
    validate: {
      name: (value) => (value.length < 2 ? 'Name must have at least 2 letters' : null),
      email: (value) => (/^\\S+@\\S+$/.test(value) ? null : 'Invalid email'),
      age: (value) => (value < 18 ? 'You must be at least 18 to register' : null),
    },
  });

  return (
    <form onSubmit={form.onSubmit(console.log)}>
      <TextInput
        label="Name"
        placeholder="Name"
        key={form.key('name')}
        {...form.getInputProps('name')}
      />
      <TextInput
        mt="sm"
        label="Email"
        placeholder="Email"
        key={form.key('email')}
        {...form.getInputProps('email')}
      />
      <NumberInput
        mt="sm"
        label="Age"
        placeholder="Age"
        min={0}
        max={99}
        key={form.key('age')}
        {...form.getInputProps('age')}
      />
      <Button type="submit" mt="sm">
        Submit
      </Button>
    </form>
  );
}
```

## Rule function arguments

Each form rule receives the following arguments:

- `value` – value of field
- `values` – all form values
- `path` – field path, for example `user.email` or `cart.0.price`

`path` argument can be used to get information about field location relative to other fields,
for example you can get index of array element:

```tsx
import { useForm } from '@mantine/form';

const form = useForm({
  mode: 'uncontrolled',
  initialValues: { a: [{ b: 1 }, { b: 2 }] },
  validate: {
    a: {
      b: (value, values, path) => (path === 'a.0.b' ? 'error' : null),
    },
  },
});
```
