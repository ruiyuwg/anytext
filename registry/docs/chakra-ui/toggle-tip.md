# Toggle Tip

```tsx
import { Button } from "@chakra-ui/react"
import { ToggleTip } from "@/components/ui/toggle-tip"
import { LuInfo } from "react-icons/lu"

export const ToggleTipBasic = () => {
  return (
    <ToggleTip content="This is some additional information.">
      <Button size="xs" variant="ghost">
        <LuInfo />
      </Button>
    </ToggleTip>
  )
}

```

## Setup

For ease of use, create a closed component composition for the `ToggleTip`
component.

Alternatively, you can add it to your project using the following command.

```sh
npx @chakra-ui/cli snippet add toggle-tip
```

The snippet includes a closed component composition for the `Popover` component.

## Usage

```jsx
import { InfoTip, ToggleTip } from "@/components/ui/toggle-tip"
```

```jsx
<ToggleTip content="...">
  <button />
</ToggleTip>
```

## Examples

### Info Tip

Use the `InfoTip` component to display an info tip. This component renders an
icon button with an info icon by default.

> Useful for landing pages to display additional information about a feature.

```tsx
import { FormatByte, HStack, Text } from "@chakra-ui/react"
import { InfoTip } from "@/components/ui/toggle-tip"

export const ToggleTipInfoTip = () => {
  return (
    <HStack justify="center">
      <Text textStyle="lg">
        File size: <FormatByte value={1450.45} />
      </Text>
      <InfoTip content="The file size for content.tsx is 1.45kb" />
    </HStack>
  )
}

```

## Props

### Root

| Prop | Default | Type | Description |
| --- | --- | --- | --- |
| autoFocus | true | `boolean` | Whether to automatically set focus on the first focusable
content within the popover when opened. |
| closeOnEscape | true | `boolean` | Whether to close the popover when the escape key is pressed. |
| closeOnInteractOutside | true | `boolean` | Whether to close the popover when the user clicks outside of the popover. |
| lazyMount | false | `boolean` | Whether to enable lazy mounting |
| modal | false | `boolean` | Whether the popover should be modal. When set to `true`:

- interaction with outside elements will be disabled
- only popover content will be visible to screen readers
- scrolling is blocked
- focus is trapped within the popover |
  | portalled | true | `boolean` | Whether the popover is portalled. This will proxy the tabbing behavior regardless of the DOM position
  of the popover content. |
  | skipAnimationOnMount | false | `boolean` | Whether to allow the initial presence animation. |
  | unmountOnExit | false | `boolean` | Whether to unmount on exit. |
  | size | md | `'xs' \| 'sm' \| 'md' \| 'lg'` | The size of the component |
  | as | undefined | `React.ElementType` | The underlying element to render. |
  | asChild | undefined | `boolean` | Use the provided child element as the default rendered element, combining their props and behavior. |
  | unstyled | undefined | `boolean` | Whether to remove the component's style. |
  | defaultOpen | undefined | `boolean` | The initial open state of the popover when rendered.
  Use when you don't need to control the open state of the popover. |
  | id | undefined | `string` | The unique identifier of the machine. |
  | ids | undefined | `Partial<{\n  anchor: string\n  trigger: string\n  content: string\n  title: string\n  description: string\n  closeTrigger: string\n  positioner: string\n  arrow: string\n}>` | The ids of the elements in the popover. Useful for composition. |
  | immediate | undefined | `boolean` | Whether to synchronize the present change immediately or defer it to the next frame |
  | initialFocusEl | undefined | `() => HTMLElement \| null` | The element to focus on when the popover is opened. |
  | onEscapeKeyDown | undefined | `(event: KeyboardEvent) => void` | Function called when the escape key is pressed |
  | onExitComplete | undefined | `VoidFunction` | Function called when the animation ends in the closed state |
  | onFocusOutside | undefined | `(event: FocusOutsideEvent) => void` | Function called when the focus is moved outside the component |
  | onInteractOutside | undefined | `(event: InteractOutsideEvent) => void` | Function called when an interaction happens outside the component |
  | onOpenChange | undefined | `(details: OpenChangeDetails) => void` | Function invoked when the popover opens or closes |
  | onPointerDownOutside | undefined | `(event: PointerDownOutsideEvent) => void` | Function called when the pointer is pressed down outside the component |
  | onRequestDismiss | undefined | `(event: LayerDismissEvent) => void` | Function called when this layer is closed due to a parent layer being closed |
  | open | undefined | `boolean` | The controlled open state of the popover |
  | persistentElements | undefined | `(() => Element \| null)[]` | Returns the persistent elements that:
- should not have pointer-events disabled
- should not trigger the dismiss event |
  | positioning | undefined | `PositioningOptions` | The user provided options used to position the popover content |
  | present | undefined | `boolean` | Whether the node is present (controlled by the user) |
