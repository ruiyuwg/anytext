## Adding custom variants

Most of Mantine components support `variant` prop, it can be used in CSS variables resolver,
and it is also exposed as `data-variant="{value}"` attribute on the root element of the component.
The easiest way to add custom variants is to add styles that use `[data-variant="{value}"]`.

Example of adding a new variant to the [Input](https://mantine.dev/core/input) component:

- `underline` variant styles are added
- `filled` variant is a default variant – you do not need to define any additional styles for it

#### Example: customVariant

```tsx
// Demo.tsx
import { Input, MantineProvider, createTheme } from '@mantine/core';
import classes from './Demo.module.css';

// It is better to add new variants in theme.components
// This way you will be able to use them in anywhere in the app
const theme = createTheme({
  components: {
    Input: Input.extend({ classNames: classes }),
  }
});

function Demo() {
  return (
    <MantineProvider theme={theme}>
      <Input variant="underline" placeholder="Underline input" />
      <Input variant="filled" placeholder="Filled input" mt="md" />
    </MantineProvider>
  );
}

// Demo.module.css
.input {
  &[data-variant='underline'] {
    border-bottom: 2px solid;
    border-radius: 0;
    padding-left: 0;
    padding-right: 0;

    @mixin light {
      border-color: var(--mantine-color-gray-3);
    }

    @mixin dark {
      border-color: var(--mantine-color-dark-3);
    }

    &:focus {
      border-color: var(--mantine-color-blue-filled);
    }
  }
}
```

Note that you can add custom variants to every Mantine component that supports [Styles API](https://mantine.dev/styles/styles-api)
even if there are no variants defined on the library side.

> **Overriding existing variants styles**
>
> Apart from adding new variants, you can also override existing ones, for example, you can change the
> `filled` variant of the [Input](https://mantine.dev/core/input) component with `.input[data-variant="filled"]` selector.

## Custom variants types

You can define types for custom variants by creating `mantine.d.ts` file
in your project and extending `{x}Props` interface with the new variant type.

Example of adding custom variant type to [Button](https://mantine.dev/core/button) component:

```tsx
import { ButtonVariant, MantineSize } from '@mantine/core';

type ExtendedButtonVariant = ButtonVariant | 'contrast' | 'radial-gradient';

declare module '@mantine/core' {
  export interface ButtonProps {
    variant?: ExtendedButtonVariant;
  }
}
```
