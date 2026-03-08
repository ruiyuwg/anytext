## superstruct

Installation:

```bash
yarn add superstruct mantine-form-superstruct-resolver
```

```bash
npm install superstruct mantine-form-superstruct-resolver
```

Basic fields validation:

```tsx
import isEmail from 'is-email';
import { superstructResolver } from 'mantine-form-superstruct-resolver';
import * as s from 'superstruct';

const emailString = s.define('email', isEmail);

const schema = s.object({
  name: s.size(s.string(), 2, 30),
  email: emailString,
  age: s.min(s.number(), 18),
});

const form = useForm({
  mode: 'uncontrolled',
  initialValues: {
    name: '',
    email: '',
    age: 16,
  },
  validate: superstructResolver(schema),
});

form.validate();
form.errors;
// -> {
//   name: 'name: Expected a string with a length between `2` and `30` but received one with a length of `0`',
//   email: 'email: Expected a value of type `email`, but received: `""`',
//   age: 'age: Expected a number greater than or equal to 18 but received `16`',
// }
```

Nested fields validation:

```tsx
import { superstructResolver } from 'mantine-form-superstruct-resolver';
import * as s from 'superstruct';
import { useForm } from '@mantine/form';

const nestedSchema = s.object({
  nested: s.object({
    field: s.size(s.string(), 2, 30),
  }),
});

const form = useForm({
  mode: 'uncontrolled',
  initialValues: {
    nested: {
      field: '',
    },
  },
  validate: superstructResolver(nestedSchema),
});

form.validate();
form.errors;
// -> {
//  'nested.field': 'nested field: Expected a string with a length between `2` and `30` but received one with a length of `0`',
// }
```

List fields validation:

```tsx
import { superstructResolver } from 'mantine-form-superstruct-resolver';
import * as s from 'superstruct';
import { useForm } from '@mantine/form';

const listSchema = s.object({
  list: s.array(
    s.object({
      name: s.size(s.string(), 2, 30),
    })
  ),
});

const form = useForm({
  mode: 'uncontrolled',
  initialValues: {
    list: [{ name: '' }],
  },
  validate: superstructResolver(listSchema),
});

form.validate();
form.errors;
// -> {
//  'list 0 name: Expected a string with a length between `2` and `30` but received one with a length of `0`',
// }
```
