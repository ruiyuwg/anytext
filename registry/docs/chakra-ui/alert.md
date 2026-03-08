# Alert

```tsx
import { Alert } from "@chakra-ui/react"

export const AlertBasic = () => {
  return (
    <Alert.Root status="info" title="This is the alert title">
      <Alert.Indicator />
      <Alert.Title>This is the alert title</Alert.Title>
    </Alert.Root>
  )
}

```

## Usage

```jsx
import { Alert } from "@chakra-ui/react"
```

```jsx
<Alert.Root>
  <Alert.Indicator />
  <Alert.Content>
    <Alert.Title />
    <Alert.Description />
  </Alert.Content>
</Alert.Root>
```

If you prefer a closed component composition, check out the
[snippet below](#closed-component).

## Examples

### Description

Render the `Alert.Description` component to provide additional context to the
alert.

```tsx
import { Alert } from "@chakra-ui/react"

export const AlertWithDescription = () => {
  return (
    <Alert.Root status="error">
      <Alert.Indicator />
      <Alert.Content>
        <Alert.Title>Invalid Fields</Alert.Title>
        <Alert.Description>
          Your form has some errors. Please fix them and try again.
        </Alert.Description>
      </Alert.Content>
    </Alert.Root>
  )
}

```

### Status

Change the status of the alerts by passing the `status` prop. This affects the
color scheme and icon used. Alert supports `error`, `success`, `warning`, and
`info` statuses.

```tsx
import { Alert, Stack } from "@chakra-ui/react"

export const AlertWithStatus = () => {
  return (
    <Stack gap="4" width="full">
      <Alert.Root status="error">
        <Alert.Indicator />
        <Alert.Title>There was an error processing your request</Alert.Title>
      </Alert.Root>

      <Alert.Root status="info">
        <Alert.Indicator />
        <Alert.Title>
          Chakra is going live on August 30th. Get ready!
        </Alert.Title>
      </Alert.Root>

      <Alert.Root status="warning">
        <Alert.Indicator />
        <Alert.Title>
          Seems your account is about expire, upgrade now
        </Alert.Title>
      </Alert.Root>

      <Alert.Root status="success">
        <Alert.Indicator />
        <Alert.Title>Data uploaded to the server. Fire on!</Alert.Title>
      </Alert.Root>
    </Stack>
  )
}

```

### Variants

Use the `variant` prop to change the visual style of the alert. Values can be
either `subtle`, `solid`, `outline`, `surface`

```tsx
import { Alert, Stack } from "@chakra-ui/react"

export const AlertWithVariants = () => {
  return (
    <Stack gap="4">
      <Alert.Root status="success" variant="subtle">
        <Alert.Indicator />
        <Alert.Title>Data uploaded to the server. Fire on!</Alert.Title>
      </Alert.Root>

      <Alert.Root status="success" variant="solid">
        <Alert.Indicator />
        <Alert.Title>Data uploaded to the server. Fire on!</Alert.Title>
      </Alert.Root>

      <Alert.Root status="success" variant="outline">
        <Alert.Indicator />
        <Alert.Title>Data uploaded to the server. Fire on!</Alert.Title>
      </Alert.Root>

      <Alert.Root status="success" variant="surface">
        <Alert.Indicator />
        <Alert.Title>Data uploaded to the server. Fire on!</Alert.Title>
      </Alert.Root>
    </Stack>
  )
}

```

### With Close Button

Here's and example of how to compose the `Alert` with a close button.

```tsx
import { Alert, CloseButton } from "@chakra-ui/react"

export const AlertWithCloseButton = () => {
  return (
    <Alert.Root>
      <Alert.Indicator />
      <Alert.Content>
        <Alert.Title>Success!</Alert.Title>
        <Alert.Description>
          Your application has been received. We will review your application
          and respond within the next 48 hours.
        </Alert.Description>
      </Alert.Content>
      <CloseButton pos="relative" top="-2" insetEnd="-2" />
    </Alert.Root>
  )
}

```

### With Spinner

Here's and example of how to compose the `Alert` with a spinner.

```tsx
import { Alert, Spinner } from "@chakra-ui/react"

export const AlertWithSpinner = () => {
  return (
    <Alert.Root
      borderStartWidth="3px"
      borderStartColor="colorPalette.600"
      title="We are loading something"
    >
      <Alert.Indicator>
        <Spinner size="sm" />
      </Alert.Indicator>
      <Alert.Title>We are loading something</Alert.Title>
    </Alert.Root>
  )
}

```

### Custom Icon

Use the `icon` prop to pass a custom icon to the alert. This will override the
default icon for the alert status.

```tsx
import { Alert } from "@chakra-ui/react"
import { LuAlarmClockPlus } from "react-icons/lu"

export const AlertWithCustomIcon = () => {
  return (
    <Alert.Root status="warning">
      <Alert.Indicator>
        <LuAlarmClockPlus />
      </Alert.Indicator>
      <Alert.Title>Submitting this form will delete your account</Alert.Title>
    </Alert.Root>
  )
}

```

### Color Palette Override

The default colorPalette is inferred from the `status` prop. To override the
color palette, pass the `colorPalette` prop.

```tsx
import { Alert } from "@chakra-ui/react"

export const AlertWithColorPaletteOverride = () => {
  return (
    <Alert.Root status="info" colorPalette="teal">
      <Alert.Indicator />
      <Alert.Title>This is an info alert but shown as teal</Alert.Title>
    </Alert.Root>
  )
}

```

### Customization

You can style the `Alert` component using style props.

```tsx
import { Alert, Link, Stack } from "@chakra-ui/react"
import { LuPercent } from "react-icons/lu"

export const AlertWithCustomization = () => {
  return (
    <Stack gap="4">
      <Alert.Root title="Success" status="success">
        <Alert.Indicator>
          <LuPercent />
        </Alert.Indicator>
        <Alert.Content color="fg">
          <Alert.Title>Black Friday Sale (20% off)</Alert.Title>
          <Alert.Description>
            Upgrade your plan to get access to the sale.
          </Alert.Description>
        </Alert.Content>
        <Link alignSelf="center" fontWeight="medium">
          Upgrade
        </Link>
      </Alert.Root>

      <Alert.Root
        size="sm"
        borderStartWidth="3px"
        borderStartColor="colorPalette.solid"
        alignItems="center"
        title="Success"
        status="success"
      >
        <LuPercent />
        <Alert.Title textStyle="sm">
          Heads up: Black Friday Sale (20% off)
        </Alert.Title>
      </Alert.Root>
    </Stack>
  )
}

```

### Closed Component

Here's how to setup the `Alert` for a closed component composition.

If you want to automatically add the closed component to your project, run the
command:

```bash
npx @chakra-ui/cli snippet add alert
```

## Props

### Root

| Prop | Default | Type | Description |
| --- | --- | --- | --- |
| colorPalette | gray | `'gray' \| 'red' \| 'orange' \| 'yellow' \| 'green' \| 'teal' \| 'blue' \| 'cyan' \| 'purple' \| 'pink'` | The color palette of the component |
| status | info | `'info' \| 'warning' \| 'success' \| 'error' \| 'neutral'` | The status of the component |
| variant | subtle | `'subtle' \| 'surface' \| 'outline' \| 'solid'` | The variant of the component |
| size | md | `'sm' \| 'md' \| 'lg'` | The size of the component |
| as | undefined | `React.ElementType` | The underlying element to render. |
| asChild | undefined | `boolean` | Use the provided child element as the default rendered element, combining their props and behavior. |
| unstyled | undefined | `boolean` | Whether to remove the component's style. |
| inline | false | `'true' \| 'false'` | The inline of the component |

## Explorer

Explore the `Alert` component parts interactively. Click on parts in the sidebar
to highlight them in the preview.
