# How to use Dropzone with @mantine/form?

Learn how to use Dropzone with @mantine/form to handle file selection state

[@mantine/dropzone](https://mantine.dev/others/dropzone/) package provides `Dropzone`
component which allows to drag and drop files from your computer or select them using
the file picker. Its purpose is to handle file selection, it does not store files state,
does not display selected files and does not upload them to the server.

[use-form](https://mantine.dev/form/use-form/) hook handles form state, validation,
error messages and form submission. You can integrate any input or React component
with `use-form` hook using the following form object properties:

- `form.getValues().x` – value of the input
- `form.errors.x` – error message for the input
- `form.setFieldValue('x', value)` – function to set input value
- `form.setFieldError('x', 'error-message')` – function to set input error message

Using these properties you can integrate `Dropzone` with `use-form` hook:

#### Example: DropzoneForm

```tsx
import { useForm } from '@mantine/form';
import { Dropzone, MIME_TYPES } from '@mantine/dropzone';
import { Center, Text, CloseButton } from '@mantine/core';

interface FormValues {
  files: File[];
}

function Demo() {
  const form = useForm<FormValues>({
    mode: 'uncontrolled',
    initialValues: { files: [] },
  });

  const selectedFiles = form.getValues().files.map((file, index) => (
    <Text key={file.name}>
      <b>{file.name}</b> ({(file.size / 1024).toFixed(2)} kb)
      <CloseButton
        size="xs"
        onClick={() =>
          form.setFieldValue(
            'files',
            form.values.files.filter((_, i) => i !== index)
          )
        }
      />
    </Text>
  ));

  return (
    <>
      <Dropzone
        h={120}
        p={0}
        multiple
        accept={[MIME_TYPES.png, MIME_TYPES.jpeg, MIME_TYPES.svg]}
        onDrop={(files) => form.setFieldValue('files', files)}
        onReject={() => form.setFieldError('files', 'Select images only')}
      >
        <Center h={120}>
          <Dropzone.Idle>Drop files here</Dropzone.Idle>
          <Dropzone.Accept>Drop files here</Dropzone.Accept>
          <Dropzone.Reject>Files are invalid</Dropzone.Reject>
        </Center>
      </Dropzone>

      {form.errors.files && (
        <Text c="red" mt={5}>
          {form.errors.files}
        </Text>
      )}

      {selectedFiles.length > 0 && (
        <>
          <Text mb={5} mt="md">
            Selected files:
          </Text>
          {selectedFiles}
        </>
      )}
    </>
  );
}
```

# How can I change inputs focus styles?

Learn how to use Styles API with Mantine inputs

## Change focus styles of a single input

To change focus styles of a single input, use [Styles API](https://mantine.dev/styles/styles-api).
Note that in order for this to work correctly with all inputs, you need to use
`:focus-within` pseudo-class instead of `:focus`:

#### Example: InputFocusStyles

```tsx
import { TextInput } from '@mantine/core';

function Demo() {
  return (
    <TextInput
      classNames={classes}
      label="TextInput with custom focus styles"
      placeholder="TextInput with custom focus styles"
    />
  );
}
```

## Change focus styles of all inputs

To change focus styles of all inputs, use [Styles API](https://mantine.dev/styles/styles-api) with `Input` component
in the [theme object](https://mantine.dev/theming/theme-object):

#### Example: InputThemeFocusStyles

```tsx
import { TextInput, NativeSelect, MantineProvider, createTheme, Input } from '@mantine/core';
import classes from './Demo.module.css';

const theme = createTheme({
  components: {
    Input: Input.extend({ classNames: classes }),
  },
});

function Demo() {
  return (
    <MantineProvider theme={theme}>
      <TextInput label="Text input" placeholder="Text input" />
      <NativeSelect mt="md" label="Native select" data={['React', 'Angular', 'Vue', 'Svelte']} />
    </MantineProvider>
  );
}
```

# Is there a way to add mask to Mantine input?

Learn how to integrate mask libraries with Mantine inputs

Mantine does not provide built-in mask functionality, but you can easily integrate any mask library with Mantine inputs.
The recommended library is [react-imask](https://www.npmjs.com/package/react-imask):

You can use it with [InputBase](https://mantine.dev/core/input/#inputbase-component) component
to create custom input with mask:

#### Example: InputMask

```tsx
import { IMaskInput } from 'react-imask';
import { InputBase } from '@mantine/core';

function Demo() {
  return (
    <InputBase
      label="Your phone"
      component={IMaskInput}
      mask="+7 (000) 000-0000"
      placeholder="Your phone"
    />
  );
}
```

# How to change inputs placeholder color?

Learn how to change placeholder color with Styles API

All Mantine inputs can be divided in two groups:

- Inputs that are based on `<input />` HTML element (for example, [TextInput](https://mantine.dev/core/text-input)). For these inputs use `&:placeholder` selector to change placeholder color.
- Inputs that are based on `<button />` HTML element (for example, [DatePickerInput](https://mantine.dev/dates/date-picker-input)). For these inputs use [Styles API](https://mantine.dev/styles/styles-api) to change placeholder color.
