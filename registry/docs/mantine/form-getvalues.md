## form.getValues

`form.getValues` function returns current form values. It can be
used anywhere in the component to get the current form values. It can
be used in both controlled and uncontrolled modes.

```tsx
import { useForm } from '@mantine/form';

const form = useForm({
  mode: 'uncontrolled',
  initialValues: { name: 'John Doe' },
});

form.getValues(); // { name: 'John Doe' }

form.setValues({ name: 'John Smith' });
form.getValues(); // { name: 'John Smith' }
```

Although `form.values` can be used to get the current form values in controlled mode, it is
recommended to use `form.getValues` instead as it always returns the latest
values while `form.values` is outdated in uncontrolled mode and before state
update in controlled mode.

```tsx
import { useForm } from '@mantine/form';

const form = useForm({
  mode: 'uncontrolled',
  initialValues: { name: 'John Doe' },
});

const handleNameChange = () => {
  form.setFieldValue('name', 'Test Name');

  // ❌ Do not use form.values to get the current form values
  // form.values has stale name value until next rerender in controlled mode
  // and is always outdated in uncontrolled mode
  console.log(form.values); // { name: 'John Doe' }

  // ✅ Use form.getValues to get the current form values
  // form.getValues always returns the latest form values
  console.log(form.getValues()); // { name: 'Test Name' }
};
```

`form.getValues()` returns a ref value of the current form values. This means that
you cannot pass it to `useEffect` dependencies array as it will always be the same
reference.

```tsx
import { useEffect } from 'react';
import { useForm } from '@mantine/form';

const form = useForm({ mode: 'uncontrolled' });

useEffect(() => {
  // ❌ This will not work as form.getValues() is a ref value
  // and will always be the same reference
}, [form.getValues()]);
```

Instead of observing form values with `useEffect`, use `onValuesChange` callback
to listen to form values changes:

```tsx
import { useForm } from '@mantine/form';

const form = useForm({
  mode: 'uncontrolled',
  initialValues: { name: 'John Doe' },
  onValuesChange: (values) => {
    // ✅ This will be called on every form values change
    console.log(values);
  },
});
```
