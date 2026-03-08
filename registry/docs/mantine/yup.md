## yup

Installation:

```bash
yarn add yup mantine-form-yup-resolver
```

```bash
npm install yup mantine-form-yup-resolver
```

Basic fields validation:

```tsx
import { yupResolver } from 'mantine-form-yup-resolver';
import * as yup from 'yup';
import { useForm } from '@mantine/form';

const schema = yup.object().shape({
  name: yup.string().min(2, 'Name should have at least 2 letters'),
  email: yup
    .string()
    .required('Invalid email')
    .email('Invalid email'),
  age: yup
    .number()
    .min(18, 'You must be at least 18 to create an account'),
});

const form = useForm({
  mode: 'uncontrolled',
  initialValues: {
    name: '',
    email: '',
    age: 16,
  },
  validate: yupResolver(schema),
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
import { yupResolver } from 'mantine-form-yup-resolver';
import * as yup from 'yup';
import { useForm } from '@mantine/form';

const nestedSchema = yup.object().shape({
  nested: yup.object().shape({
    field: yup
      .string()
      .min(2, 'Field should have at least 2 letters'),
  }),
});

const form = useForm({
  mode: 'uncontrolled',
  initialValues: {
    nested: {
      field: '',
    },
  },
  validate: yupResolver(nestedSchema),
});

form.validate();
form.errors;
// -> {
//  'nested.field': 'Field should have at least 2 letters',
// }
```

List fields validation:

```tsx
import { yupResolver } from 'mantine-form-yup-resolver';
import * as yup from 'yup';
import { useForm } from '@mantine/form';

const listSchema = yup.object().shape({
  list: yup.array().of(
    yup.object().shape({
      name: yup
        .string()
        .min(2, 'Name should have at least 2 letters'),
    })
  ),
});

const form = useForm({
  mode: 'uncontrolled',
  initialValues: {
    list: [{ name: '' }],
  },
  validate: yupResolver(listSchema),
});

form.validate();
form.errors;
// -> {
//  'list.0.name': 'Name should have at least 2 letters',
// }
```
