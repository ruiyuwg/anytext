## zod

Installation:

```bash
yarn add zod mantine-form-zod-resolver
```

```bash
npm install zod mantine-form-zod-resolver
```

Basic fields validation with zod v3:

```tsx
import { zodResolver } from 'mantine-form-zod-resolver';
import { z } from 'zod';
import { useForm } from '@mantine/form';

const schema = z.object({
  name: z
    .string()
    .min(2, { message: 'Name should have at least 2 letters' }),
  email: z.string().email({ message: 'Invalid email' }),
  age: z.number().min(18, {
    message: 'You must be at least 18 to create an account',
  }),
});

const form = useForm({
  mode: 'uncontrolled',
  initialValues: {
    name: '',
    email: '',
    age: 16,
  },
  validate: zodResolver(schema),
});

form.validate();
form.errors;
// -> {
//  name: 'Name should have at least 2 letters',
//  email: 'Invalid email',
//  age: 'You must be at least 18 to create an account'
// }
```

Nested fields validation

```tsx
import { zodResolver } from 'mantine-form-zod-resolver';
import { z } from 'zod';
import { useForm } from '@mantine/form';

const nestedSchema = z.object({
  nested: z.object({
    field: z
      .string()
      .min(2, { message: 'Field should have at least 2 letters' }),
  }),
});

const form = useForm({
  mode: 'uncontrolled',
  initialValues: {
    nested: {
      field: '',
    },
  },
  validate: zodResolver(nestedSchema),
});

form.validate();
form.errors;
// -> {
//  'nested.field': 'Field should have at least 2 letters',
// }
```

List fields validation:

```tsx
import { zodResolver } from 'mantine-form-zod-resolver';
import { z } from 'zod';
import { useForm } from '@mantine/form';

const listSchema = z.object({
  list: z.array(
    z.object({
      name: z
        .string()
        .min(2, { message: 'Name should have at least 2 letters' }),
    })
  ),
});

const form = useForm({
  mode: 'uncontrolled',
  initialValues: {
    list: [{ name: '' }],
  },
  validate: zodResolver(listSchema),
});

form.validate();
form.errors;
// -> {
//  'list.0.name': 'Name should have at least 2 letters',
// }
```

## zod v4

To use zod 4:

- Update `mantine-form-zod-resolver` to `1.2.0` or later version
- Update zod to version `3.25.0` or later
- Replace `zod` imports with `zod/v4` (only if you have `zod@3` in your `package.json`)
- Replace `zodResolver` with `zod4Resolver` in your code
- All other code remains the same

Example with zod v4:

```tsx
import { z } from 'zod/v4';
import { zod4Resolver } from 'mantine-form-zod-resolver';

const schema = z.object({
  name: z.string().min(2, { error: 'Name should have at least 2 letters' }),
  email: z.email({ error: 'Invalid email' }),
  age: z.number().min(18, { error: 'You must be at least 18 to create an account' }),
});

const form = useForm({
  initialValues: {
    name: '',
    email: '',
    age: 16,
  },
  validate: zod4Resolver(schema),
})
```
