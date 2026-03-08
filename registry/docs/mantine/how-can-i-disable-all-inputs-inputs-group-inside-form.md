# How can I disable all inputs/inputs group inside form?

Learn how to disable all inputs/inputs group inside form with unstyled Fieldset component

## Disable all inputs with fieldset

To disable all inputs/inputs group inside form, you can use the [Fieldset](https://mantine.dev/core/fieldset/) component.
If `disabled` prop is set, all inputs inside `Fieldset` are disabled. By default, `Fieldset` has border and padding styles.
If you want to use `Fieldset` only for `disabled` feature, set `variant="unstyled"`:

#### Example: FieldsetInputs

```tsx
import { Fieldset, TextInput, Button } from '@mantine/core';

function Demo() {
  return (
    <form>
      <Fieldset disabled variant="unstyled">
        <TextInput label="Your name" placeholder="Your name" />
        <TextInput label="Your email" placeholder="Your email" mt="md" />
        <Button type="submit" mt="md">
          Submit
        </Button>
      </Fieldset>
    </form>
  );
}
```

## Disable all inputs with enhanceGetInputProps

If you use [use-form](https://mantine.dev/form/get-input-props/#enhancegetinputprops) for
your form, you can disable all inputs with `enhanceGetInputProps`:

#### Example: EnhanceDisableInputs

```tsx
import { useState } from 'react';
import { Button, TextInput } from '@mantine/core';
import { useForm } from '@mantine/form';

function Demo() {
  const [disabled, setDisabled] = useState(false);

  const form = useForm({
    mode: 'uncontrolled',
    initialValues: { name: '', email: '' },
    enhanceGetInputProps: () => ({ disabled }),
  });

  return (
    <form>
      <TextInput
        label="Your name"
        placeholder="Your name"
        {...form.getInputProps('name')}
        key={form.key('name')}
      />
      <TextInput
        label="Your email"
        placeholder="Your email"
        mt="md"
        {...form.getInputProps('email')}
        key={form.key('email')}
      />
      <Button mt="md" onClick={() => setDisabled((d) => !d)}>
        Toggle disabled
      </Button>
    </form>
  );
}
```

# My styles are broken with disabled JavaScript. What should I do?

Learn how to use Mantine without JavaScript enabled

## data-mantine-color-scheme attribute

Most of Mantine styles rely on `data-mantine-color-scheme`
attribute to be present on the root element of the application.
If it is not there, your application will look broken and it may
seem that styles are not applied at all. It is not the case, styles
are applied, but there is no `data-mantine-color-scheme` attribute
to match selectors.

By default, `data-mantine-color-scheme` attribute is added automatically
by `ColorSchemeScript` and `MantineProvider` components. Both of them
are JavaScript components and require JavaScript to work.

## Adding support for disabled JavaScript

If you are planning to support users with disabled JavaScript, you
need to defined `data-mantine-color-scheme` attribute manually on
the root element of your application (usually it is `html`).

```html
<html data-mantine-color-scheme="light">
<!-- ... rest of your application -->
```

Note that you can only used `light` or `dark` values for `data-mantine-color-scheme`
in this case. `auto` value is not supported without JavaScript.

# How can I upload files from Dropzone component?

Learn how to process files dropped into Dropzone component

## Example

Example below demonstrates how to upload files from Dropzone component to S3 bucket
with `axios`:

```tsx
import axios from 'axios';
import { useState } from 'react';
import { Dropzone } from '@mantine/dropzone';
import { notifications } from '@mantine/notifications';

function Demo() {
  const [loading, setLoading] = useState(false);

  const handleUpload = (files: File) => {
    setLoading(true);

    axios
      .put('https://your-bucket.s3.amazonaws.com', file)
      .then(() => {
        notifications.showNotification({
          title: 'File uploaded',
          message: 'File uploaded successfully',
          color: 'teal',
        });
      })
      .catch((error) => {
        notifications.showNotification({
          title: 'File upload failed',
          message: error.message,
          color: 'red',
        });
      })
      .finally(() => setLoading(false));
  };

  return (
    <Dropzone onDrop={(files) => handleUpload(files[0])} loading={loading}>
      {loading ? 'Uploading file...' : 'Drop file here'}
    </Dropzone>
  );
}
```
