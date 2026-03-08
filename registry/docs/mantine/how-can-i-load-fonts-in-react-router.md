# How can I load fonts in React Router?

A guide to load custom fonts in React Router

## Loading local fonts

Create the following folder structure (the example with Roboto custom font):

```plaintext
Roboto/
├─ Roboto-Bold.woff2
├─ Roboto-Heavy.woff2
├─ Roboto.css
```

In `Roboto.css` file, add the following code:

```css
@font-face {
  font-family: 'Roboto';
  src: url('./Roboto-Bold.woff2') format('woff2');
  font-weight: 700;
  font-style: normal;
}

@font-face {
  font-family: 'Roboto';
  src: url('./Roboto-Heavy.woff2') format('woff2');
  font-weight: 900;
  font-style: normal;
}
```

Then import `Roboto.css` file at the root of your application and
add the font to your [theme](https://mantine.dev/theming/theme-object/):

```tsx
import '@mantine/core/styles.css';
import './Roboto/styles.css';

import {
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from 'react-router';
import {
  ColorSchemeScript,
  createTheme,
  DEFAULT_THEME,
  MantineProvider,
  mantineHtmlProps,
} from '@mantine/core';

const theme = createTheme({
  fontFamily: 'Roboto, sans-serif',
  fontFamilyMonospace: 'Monaco, Courier, monospace',
  headings: {
    // Use default theme if you want to provide default Mantine fonts as a fallback
    fontFamily: `Roboto, ${DEFAULT_THEME.fontFamily}`,
  },
});

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" {...mantineHtmlProps}>
      <head>
        <meta charSet="utf-8" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1"
        />
        <Meta />
        <Links />
        <ColorSchemeScript />
      </head>
      <body>
        <MantineProvider theme={theme}>{children}</MantineProvider>
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}

export default function App() {
  return <Outlet />;
}
```

## Load fonts from Google Fonts

Selects fonts you want to use at [Google Fonts](https://fonts.google.com/) and copy
HTML code snippet. For example, to load [Roboto](https://fonts.google.com/specimen/Roboto)
font, the code you receive from Google Fonts will look something like this:

```html
<link rel="preconnect" href="https://fonts.googleapis.com" />
<link
  rel="preconnect"
  href="https://fonts.gstatic.com"
  crossorigin=""
/>
<link
  href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700&display=swap"
  rel="stylesheet"
/>
```

Add the code to the `<head />` of your application `root.tsx` file.
The code will look something like this:

```tsx
import '@mantine/core/styles.css';
import './Roboto/styles.css';

import {
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from 'react-router';
import {
  ColorSchemeScript,
  createTheme,
  DEFAULT_THEME,
  MantineProvider,
} from '@mantine/core';

const theme = createTheme({
  fontFamily: 'Roboto, sans-serif',
  fontFamilyMonospace: 'Monaco, Courier, monospace',
  headings: {
    // Use default theme if you want to provide default Mantine fonts as a fallback
    fontFamily: `Roboto, ${DEFAULT_THEME.fontFamily}`,
  },
});

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1"
        />
        <Meta />
        <Links />
        <ColorSchemeScript />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin=""
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <MantineProvider theme={theme}>{children}</MantineProvider>
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}

export default function App() {
  return <Outlet />;
}
```

# Where can I find the roadmap?

The roadmap is private and only available to the team.

## Roadmap. Where is it?

Mantine roadmap is private and only available to the team.
The roadmap is kept private to help you manage your expectations and to avoid any potential disappointment
when it is not possible to deliver features precisely as planned.
We are constantly working on improving Mantine and adding new features, but we do not want to make any promises that we cannot keep.

## How can I know what is coming next?

New features are usually announced in the [Discord server](https://discord.gg/wbH82zuWMN) and on [X](https://x.com/mantinedev)
when they are released. Upcoming features are usually discussed with the community on [Discord](https://discord.gg/wbH82zuWMN).

## When will the next version be released?

- Patches are usually released every 1-3 weeks
- Minor releases are usually released every 1-2 months
- Major releases are planned when it is required to introduce breaking changes or significant new features, there is no strict schedule for major releases

## Will Mantine be maintained in the future?

Yes, Mantine is actively maintained and developed. It is not planned to be abandoned in the future.

# How to scroll to the top of the form if the form is submitted with errors?

Learn how to call a function when the form is submitted with errors

## use-form submit handlers

`form.onSubmit` function accepts two functions: the first function is called with valid form values when validation passes,
the second function is called with form errors when validation fails.

## Scroll to the top of the form on submit

Using the second callback of `form.onSubmit` you can scroll to the top of the form.
If your application includes a fixed header (like Mantine Help Center website), use
[scroll-margin](https://developer.mozilla.org/en-US/docs/Web/CSS/scroll-margin) CSS property
to ensure that the form is not hidden behind the header. Note that `scroll-margin` does not
work if the form has `overflow: hidden;` styles or is inside other element that has
`overflow: hidden;` styles.

#### Example: ScrollToTopOfForm

```tsx
function Demo() {
  const form = useForm({
    mode: 'uncontrolled',
    initialValues: {
      name: '',
      email: '',
    },

    validate: {
      name: isNotEmpty('Name is required'),
      email: isEmail('Invalid email'),
    },
  });

  return (
    <form
      id="my-form"
      style={{ scrollMargin: '100px' }}
      onSubmit={form.onSubmit(
        () => {},
        () => {
          document
            .getElementById('my-form')
            ?.scrollIntoView({ block: 'start', behavior: 'smooth' });
        }
      )}
    >
      <TextInput
        withAsterisk
        label="Your name"
        placeholder="Your name"
        key={form.key('name')}
        {...form.getInputProps('name')}
      />

      <TextInput
        withAsterisk
        label="Your email"
        placeholder="your@email.com"
        mt="md"
        key={form.key('email')}
        {...form.getInputProps('email')}
      />

      <Group justify="flex-end" mt="md">
        <Button type="submit">Submit</Button>
      </Group>
    </form>
  );
}
```

# Can I use SegmentedControl with empty value?

SegmentedControl cannot be used without a value

## Can I use SegmentedControl with initial empty value?

[SegmentedControl](https://mantine.dev/core/segmented-control/) cannot be used without a value.
It is based on [FloatingIndicator](https://mantine.dev/core/floating-indicator/) and requires a value to work properly.
If neither `value` nor `defaultValue` is provided, `SegmentedControl` will automatically set first item as active.

## Can I deselect value in SegmentedControl?

No, `SegmentedControl` is designed to always have a value.
This constraint is required for the component animations and floating indicator to work properly.

## What should I use instead if I need deselect functionality?

If you need to have a control that can be deselected, consider using [Radio](https://mantine.dev/core/radio/) or [Checkbox](https://mantine.dev/core/checkbox/) components.
Both `Radio` and `Checkbox` can be deselected by setting `checked={false}` prop.

## I want a component that looks like SegmentedControl but can be deselected

You can build a custom component that works similar to `SegmentedControl`
with [FloatingIndicator](https://mantine.dev/core/floating-indicator/).
