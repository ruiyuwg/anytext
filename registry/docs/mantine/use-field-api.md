## use-field API

`use-field` hook accepts the following options object as a single argument:

```tsx
interface UseFieldInput<T> {
  /** Field mode, controlled by default */
  mode?: 'controlled' | 'uncontrolled';

  /** Initial field value */
  initialValue: T;

  /** Initial touched value */
  initialTouched?: boolean;

  /** Initial field error message */
  initialError?: React.ReactNode;

  /** Called with updated value when the field value changes */
  onValueChange?: (value: T) => void;

  /** Determines whether the field should be validated when value changes, false by default */
  validateOnChange?: boolean;

  /** Determines whether the field should be validated when it loses focus, false by default */
  validateOnBlur?: boolean;

  /** Determines whether the field should clear error message when value changes, true by default */
  clearErrorOnChange?: boolean;

  /** A function to validate field value, can be sync or async */
  validate?: (value: T) => React.ReactNode | Promise<React.ReactNode>;

  /** Field type, input by default */
  type?: 'input' | 'checkbox';

  /** A function to resolve validation error from the result returned from validate function, should return react node */
  resolveValidationError?: (error: unknown) => React.ReactNode;
}
```

And returns the following object:

```tsx
export interface UseFieldReturnType<ValueType> {
  /** Returns props to pass to the input element */
  getInputProps: () => {
    /* props for input component */
  };

  /** Returns current input value */
  getValue: () => ValueType;

  /** Sets input value to the given value */
  setValue: (value: ValueType) => void;

  /** Resets field value to initial state, sets touched state to false, sets error to null */
  reset: () => void;

  /** Validates current input value when called */
  validate: () => Promise<React.ReactNode | void>;

  /** Set to true when async validate function is called, stays true until the returned promise resolves */
  isValidating: boolean;

  /** Current error message */
  error: React.ReactNode;

  /** Sets error message to the given react node */
  setError: (error: React.ReactNode) => void;

  /** Returns true if the input has been focused at least once */
  isTouched: () => boolean;

  /** Returns true if input value is different from the initial value */
  isDirty: () => boolean;

  /** Resets touched state to false */
  resetTouched: () => void;

  /** key that should be added to the input when mode is uncontrolled */
  key: number;
}
```

## Validate on blur

To validate the field on blur, set `validateOnBlur` option to `true`:

## Validate on change

To validate the field on change, set `validateOnChange` option to `true`:

## Async validation

`validate` option accepts both async and sync functions, in both cases the function
must return an error message that will be displayed to the user or `null` if the value
is valid. To keep track of async validation state, use `isValidating` property:

Async validation can be used with `validateOnBlur` option, but not recommended with
`validateOnChange` because it will trigger validation on every key press which may
lead to race conditions:

## Touched and dirty

To get information about whether the field has been focused at least once, use `isTouched` method
and to check if the value has been changed from the initial value, use `isDirty` method:

## Clear error on change

By default, the error message is cleared when the value changes, to disable this behavior
set `clearErrorOnChange` option to `false`:

## Uncontrolled mode

Uncontrolled mode of `use-field` hook works similar to uncontrolled mode of [use-form](https://mantine.dev/form/uncontrolled).
In uncontrolled mode, rerenders are minimized and the input value is managed by the input itself.
It is useful if you experience performance issues with controlled mode, but in most cases controlled
mode is recommended as it always provides up to date field information as React state.

### use-form

Package: @mantine/form
Import: import { use-form } from '@mantine/form';
Description: Manage form state

## Installation

`@mantine/form` package does not depend on any other libraries, you can use it with or without `@mantine/core` inputs:

```bash
yarn add @mantine/form
```

```bash
npm install @mantine/form
```

## Usage

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
