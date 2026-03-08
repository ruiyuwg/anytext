# How can I test Modal/Drawer/Popover components?

Learn how to use react-testing-library to test components that use portals and transitions.

## Getting started

Before jumping into the testing part, make sure that you've configured
[Jest](https://mantine.dev/guides/jest) or [Vitest](https://mantine.dev/guides/vitest) in your project
as specified in the documentation. Assume that `render`, `screen` and `userEvent` variables
are imported from your project `test-utils` file.

This guide is applicable to:

- [Modal](https://mantine.dev/core/modal)
- [Drawer](https://mantine.dev/core/drawer)
- [Popover](https://mantine.dev/core/popover)
- [Menu](https://mantine.dev/core/menu)
- [Combobox](https://mantine.dev/core/combobox)
- Most other component that uses [portals](https://mantine.dev/core/portal) and [transitions](https://mantine.dev/core/transition)

## Testing example

In all following examples we will use `AuthModal` component, it contains
a button and a modal with a simple authentication form:

```tsx
import { Button, Modal, PasswordInput, TextInput } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';

export function AuthModal() {
  const [opened, { open, close }] = useDisclosure();

  return (
    <>
      <Modal title="Authenticate" opened={opened} onClose={close}>
        <form
          onSubmit={(event) => {
            event.preventDefault();
            close();
          }}
        >
          <TextInput data-autofocus label="Username" placeholder="Enter your username" />
          <PasswordInput label="Password" placeholder="Enter your password" />
          <Button type="submit">Log in</Button>
        </form>
      </Modal>

      <Button onClick={open}>Open authentication modal</Button>
    </>
  );
}
```

## Failing tests

If try to write tests for `AuthModal` without any additional configuration,
you will notice that they fail because, by default, modals use [Transition](https://mantine.dev/core/transition)
component to animate opening and closing. Transition component uses `setTimeout` to delay
animation start and `@testing-library/react` does not wait for `setTimeout` to finish.

Example of failing tests:

```tsx
import { render, screen, userEvent } from '@/test-utils';
import { AuthModal } from './AuthModal';

describe('AuthModal', () => {
  it('opens modal when button is clicked', async () => {
    render(<AuthModal />);
    await userEvent.click(screen.getByRole('button', { name: 'Open authentication modal' }));
    // ⛔ Test fails, modal heading is not in the document yet
    // Error message: TestingLibraryElementError: Unable to find an accessible element
    // with the role "heading" and name "Authenticate"
    expect(screen.getByRole('heading', { name: 'Authenticate' })).toBeInTheDocument();
  });
});
```

## Fixing failing tests

The easiest way to fix this issue is to disable transitions in your tests.
This can be done by creating a separate [theme](https://mantine.dev/theming/theme-object)
for tests. In this theme, you need to disable transitions for all
components that you plan to test.

To create a custom theme for tests, replace your `render` function
in `test-utils` folder with the following code:

```tsx
import { render as testingLibraryRender } from '@testing-library/react';
import { createTheme, MantineProvider, mergeThemeOverrides, Modal } from '@mantine/core';
// Your project theme
import { theme } from '../theme';

// Merge your project theme with tests specific overrides
const testTheme = mergeThemeOverrides(
  theme,
  createTheme({
    components: {
      Modal: Modal.extend({
        defaultProps: {
          transitionProps: { duration: 0 },
        },
      }),
    },
  })
);

export function render(ui: React.ReactNode) {
  return testingLibraryRender(<>{ui}</>, {
    wrapper: ({ children }: { children: React.ReactNode }) => (
      <MantineProvider theme={testTheme}>{children}</MantineProvider>
    ),
  });
}
```

✅ Now the test from the previous example should pass is passing!

## How to test that the modal is opened/closed?

To verify that the modal is opened, you can check that the modal heading is in the document
and an interactive element with `data-autofocus` attribute has focus:

```tsx
describe('AuthModal', () => {
  it('opens modal when button is clicked', async () => {
    render(<AuthModal />);
    await userEvent.click(screen.getByRole('button', { name: 'Open authentication modal' }));
    expect(screen.getByRole('heading', { name: 'Authenticate' })).toBeInTheDocument();
    expect(screen.getByRole('textbox', { name: 'Username' })).toHaveFocus();
  });
});
```

To verify that the modal has been closed, check that the modal heading is not in the document:

```tsx
describe('AuthModal', () => {
  it('closes modal after the form has been submitted', async () => {
    render(<AuthModal />);
    await userEvent.click(screen.getByRole('button', { name: 'Open authentication modal' }));
    await userEvent.type(screen.getByRole('textbox', { name: 'Username' }), 'john.doe');
    await userEvent.type(screen.getByLabelText('Password'), 'password');
    await userEvent.click(screen.getByRole('button', { name: 'Log in' }));
    expect(screen.queryByRole('heading', { name: 'Authenticate' })).not.toBeInTheDocument();
  });
});
```

# Can I use PostCSS function in inline styles?

Learn where PostCSS functions can be used in Mantine

## What are PostCSS functions?

[postcss-preset-mantine](https://mantine.dev/styles/postcss-preset/) provides functions,
mixins and other helpers to simplify working with Mantine styles. Example of using
`light-dark` function in styles:

```scss
// What you write
.demo {
  background: light-dark(white, black);
}

// What you get after PostCSS processing
[data-mantine-color-scheme='light'] .demo {
  background: white;
}

[data-mantine-color-scheme='dark'] .demo {
  background: black;
}
```

## Can I use PostCSS functions in inline styles?

No, PostCSS functions are not supported in inline styles. **You can use PostCSS functions only in `.css` files**.
The following example will not work:

```tsx
import { Button } from '@mantine/core';

function Demo() {
  return (
    <Button
      style={{
        // ❌ This does not get processed by PostCSS
        backgroundColor: 'light-dark(white, black)',
      }}
    >
      Button
    </Button>
  );
}
```

# Can I have different primary color for light and dark color schemes?

Learn how to use virtual color with primary color in theme object

## Virtual colors

To have different primary color for light and dark color schemes you can use [virtual color](https://mantine.dev/theming/colors/#virtual-colors).
Virtual color is a color that changes its value based on current color scheme.

```tsx
import {
  createTheme,
  MantineProvider,
  virtualColor,
} from '@mantine/core';

const theme = createTheme({
  primaryColor: 'primary',

  colors: {
    primary: virtualColor({
      name: 'primary',
      dark: 'pink',
      light: 'cyan',
    }),
  },
});

function App() {
  return (
    <MantineProvider theme={theme}>
      <Box bg="primary" c="white" p="md" fw={700}>
        This box has virtual background color, it is pink in dark mode
        and cyan in light mode
      </Box>
    </MantineProvider>
  );
}
```

# Can I use private CSS variables to style components?

No, it is not safe and will not work with future versions of Mantine.

## What are private CSS variables?

Private CSS variables start with `--_`, for example `--_input-bd-focus`.
These variables are a part of internal Mantine API and are not intended to
be used by end users. In most cases private CSS variables are used to
reduce specificity of styles and make them easier to override.

## Should I use private CSS variables to apply styles?

Absolutely not. Private CSS variables can be changed or removed in minor
and patch releases without any notice. In this case, if you use private
variables to style components, styles of your application will **silently**
(no errors will be reported by any tools) break after update. Private
CSS variables were implemented to reduce specificity of styles when
[:where](https://developer.mozilla.org/en-US/docs/Web/CSS/:where) selector
was not widely available. Now when `:where` is supported by all major browsers
private CSS variables will be removed over time in most components.

## But what should I do instead?

Use regular styles instead. For example, to change input border color on focus:

```scss
.input {
  // ❌ do not use private CSS variables
  --_input-bd-focus: red;
  --_input-placeholder-color: red;
}

.input {
  // ✅ use regular styles
  &:focus,
  &:focus-within {
    border-color: red;
  }

  &::placeholder {
    color: red;
  }
}
```
