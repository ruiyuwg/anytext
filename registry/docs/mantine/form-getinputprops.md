## form.getInputProps

[form.getInputProps](https://mantine.dev/form/get-input-props/) returns different props for controlled
and uncontrolled modes. In controlled mode, the returned object has `value` prop,
while in uncontrolled mode it has `defaultValue` prop.

Uncontrolled mode relies on `key` returned from `form.key()` to update
components when `form.setFieldValue` or `form.setValues` are called. You should
set `key` supplied by `form.key()` to the input component to ensure that it has
updated value:

```tsx
import { useForm } from '@mantine/form';

function Demo() {
  const form = useForm({
    mode: 'uncontrolled',
    initialValues: { text: '' },
  });

  return (
    <input {...form.getInputProps('text')} key={form.key('text')} />
  );
}
```

In case you need to have a [list of fields](https://mantine.dev/form/nested/#nested-arrays),
do not pass `key` to the input component directly, instead add a wrapper
element and pass `key` to it:

```tsx
import { useForm } from '@mantine/form';
import { randomId } from '@mantine/hooks';

// ❌ Incorrect: Do not override key prop, even in lists
function Demo() {
  const form = useForm({
    mode: 'uncontrolled',
    initialValues: {
      jobs: [{ company: 'Google' }, { company: 'Facebook' }],
    },
  });

  const fields = form.getValues().jobs.map((_, index) => (
      <input
        {...form.getInputProps(`jobs.${index}.company`)}
        key={index}
      />
    ));

  return <form>{fields}</form>;
}

// ✅ Correct: Add wrapper element and pass key to it
function Demo() {
  const form = useForm({
    mode: 'uncontrolled',
    initialValues: {
      jobs: [
        { company: 'Google', key: randomId() },
        { company: 'Facebook', key: randomId() },
      ],
    },
  });

  const fields = form.getValues().jobs.map((item, index) => (
      <div key={item.key}>
        <input
          {...form.getInputProps(`jobs.${index}.company`)}
          key={form.key(`jobs.${index}.company`)}
        />
      </div>
    ));

  return <form>{fields}</form>;
}
```

## Uncontrolled mode in custom components

If you want to build a custom component that supports uncontrolled form mode,
you must add support for `defaultValue` prop. The best way to add support for
`defaultValue` is to use [use-uncontrolled](https://mantine.dev/hooks/use-uncontrolled/) hook:

```tsx
import { useUncontrolled } from '@mantine/hooks';

interface CustomInputProps {
  value?: string;
  defaultValue?: string;
  onChange?: (value: string) => void;
}

// ✅ CustomInput supports both controlled and uncontrolled modes
function CustomInput({
  value,
  defaultValue,
  onChange,
}: CustomInputProps) {
  const [_value, handleChange] = useUncontrolled({
    value,
    defaultValue,
    finalValue: 'Final',
    onChange,
  });

  return (
    <input
      type="text"
      value={_value}
      onChange={(event) => handleChange(event.currentTarget.value)}
    />
  );
}

function Demo() {
  const form = useForm({
    mode: 'uncontrolled',
    initialValues: { text: 'Initial' },
  });

  // ✅ CustomInput supports `defaultValue` prop,
  // it can be used in uncontrolled mode
  return (
    <CustomInput
      {...form.getInputProps('text')}
      key={form.key('text')}
    />
  );
}
```

### use-field

Package: @mantine/form
Import: import { use-field } from '@mantine/form';
Description: use-field hook – manage single field state

## Usage

`use-field` hook is a simpler alternative to [use-form](https://mantine.dev/form/use-form), it can be used to
manage state of a single input without the need to create a form:
