# Timeline

```tsx
import { Text, Timeline } from "@chakra-ui/react"
import { LuCheck, LuPackage, LuShip } from "react-icons/lu"

export const TimelineBasic = () => {
  return (
    <Timeline.Root maxW="400px">
      <Timeline.Item>
        <Timeline.Connector>
          <Timeline.Separator />
          <Timeline.Indicator>
            <LuShip />
          </Timeline.Indicator>
        </Timeline.Connector>
        <Timeline.Content>
          <Timeline.Title>Product Shipped</Timeline.Title>
          <Timeline.Description>13th May 2021</Timeline.Description>
          <Text textStyle="sm">
            We shipped your product via <strong>FedEx</strong> and it should
            arrive within 3-5 business days.
          </Text>
        </Timeline.Content>
      </Timeline.Item>

      <Timeline.Item>
        <Timeline.Connector>
          <Timeline.Separator />
          <Timeline.Indicator>
            <LuCheck />
          </Timeline.Indicator>
        </Timeline.Connector>
        <Timeline.Content>
          <Timeline.Title textStyle="sm">Order Confirmed</Timeline.Title>
          <Timeline.Description>18th May 2021</Timeline.Description>
        </Timeline.Content>
      </Timeline.Item>

      <Timeline.Item>
        <Timeline.Connector>
          <Timeline.Separator />
          <Timeline.Indicator>
            <LuPackage />
          </Timeline.Indicator>
        </Timeline.Connector>
        <Timeline.Content>
          <Timeline.Title textStyle="sm">Order Delivered</Timeline.Title>
          <Timeline.Description>20th May 2021, 10:30am</Timeline.Description>
        </Timeline.Content>
      </Timeline.Item>
    </Timeline.Root>
  )
}

```

## Usage

```tsx
import { Timeline } from "@chakra-ui/react"
```

```tsx
<Timeline.Root>
  <Timeline.Item>
    <Timeline.Connector>
      <Timeline.Separator />
      <Timeline.Indicator />
    </Timeline.Connector>
    <Timeline.Content>
      <Timeline.Title />
      <Timeline.Description />
    </Timeline.Content>
  </Timeline.Item>
</Timeline.Root>
```

## Examples

### Sizes

Use the `size` prop to change the size of the timeline.

```tsx
import { Avatar, Badge, For, Span, Stack, Timeline } from "@chakra-ui/react"
import { LuCheck } from "react-icons/lu"

export const TimelineWithSizes = () => {
  return (
    <Stack gap="8">
      <For each={["sm", "md", "lg", "xl"]}>
        {(size) => (
          <Timeline.Root key={size} size={size}>
            <Timeline.Item>
              <Timeline.Connector>
                <Timeline.Separator />
                <Timeline.Indicator>
                  <Avatar.Root size="full">
                    <Avatar.Image src="https://bit.ly/sage-adebayo" />
                    <Avatar.Fallback name="Sage" />
                  </Avatar.Root>
                </Timeline.Indicator>
              </Timeline.Connector>
              <Timeline.Content textStyle="xs">
                <Timeline.Title>
                  <Span fontWeight="medium">sage</Span>
                  created a new project
                </Timeline.Title>
              </Timeline.Content>
            </Timeline.Item>

            <Timeline.Item>
              <Timeline.Connector>
                <Timeline.Separator />
                <Timeline.Indicator>
                  <LuCheck />
                </Timeline.Indicator>
              </Timeline.Connector>
              <Timeline.Content textStyle="xs">
                <Timeline.Title mt={size === "sm" ? "-2px" : undefined}>
                  <Span fontWeight="medium">sage</Span>
                  changed status from <Badge size="sm">
                    In progress
                  </Badge> to{" "}
                  <Badge colorPalette="teal" size="sm">
                    Completed
                  </Badge>
                </Timeline.Title>
              </Timeline.Content>
            </Timeline.Item>
          </Timeline.Root>
        )}
      </For>
    </Stack>
  )
}

```

### Variants

Use the `variant` prop to change the variant of the timeline.

```tsx
import { Avatar, Badge, For, Span, Stack, Timeline } from "@chakra-ui/react"
import { LuCheck } from "react-icons/lu"

export const TimelineWithVariants = () => {
  return (
    <Stack gap="16">
      <For each={["subtle", "solid", "outline", "plain"]}>
        {(variant) => (
          <Timeline.Root variant={variant} key={variant}>
            <Timeline.Item>
              <Timeline.Connector>
                <Timeline.Separator />
                <Timeline.Indicator>
                  <Avatar.Root size="full">
                    <Avatar.Image src="https://bit.ly/sage-adebayo" />
                    <Avatar.Fallback name="Sage" />
                  </Avatar.Root>
                </Timeline.Indicator>
              </Timeline.Connector>
              <Timeline.Content>
                <Timeline.Title>
                  <Span fontWeight="medium">sage</Span>
                  created a new project
                </Timeline.Title>
              </Timeline.Content>
            </Timeline.Item>

            <Timeline.Item>
              <Timeline.Connector>
                <Timeline.Separator />
                <Timeline.Indicator>
                  <LuCheck />
                </Timeline.Indicator>
              </Timeline.Connector>
              <Timeline.Content>
                <Timeline.Title>
                  <Span fontWeight="medium">sage</Span>
                  changed status from <Badge>In progress</Badge> to{" "}
                  <Badge colorPalette="teal">Completed</Badge>
                </Timeline.Title>
              </Timeline.Content>
            </Timeline.Item>
          </Timeline.Root>
        )}
      </For>
    </Stack>
  )
}

```

### Content Before

Here's an example of a timeline with content before the timeline indicator.

```tsx
import { For, Stack, Timeline } from "@chakra-ui/react"

export const TimelineWithContentBefore = () => {
  return (
    <Stack gap="8">
      <For each={["sm", "md", "lg"]}>
        {(size) => (
          <Timeline.Root size={size} key={size}>
            <Timeline.Item>
              <Timeline.Content width="auto">
                <Timeline.Title whiteSpace="nowrap">Nov 1994</Timeline.Title>
              </Timeline.Content>
              <Timeline.Connector>
                <Timeline.Separator />
                <Timeline.Indicator>1</Timeline.Indicator>
              </Timeline.Connector>
              <Timeline.Content>
                <Timeline.Title>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </Timeline.Title>
              </Timeline.Content>
            </Timeline.Item>

            <Timeline.Item>
              <Timeline.Content width="auto">
                <Timeline.Title whiteSpace="nowrap">Nov 2010</Timeline.Title>
              </Timeline.Content>
              <Timeline.Connector>
                <Timeline.Separator />
                <Timeline.Indicator>2</Timeline.Indicator>
              </Timeline.Connector>
              <Timeline.Content>
                <Timeline.Title>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </Timeline.Title>
              </Timeline.Content>
            </Timeline.Item>
          </Timeline.Root>
        )}
      </For>
    </Stack>
  )
}

```

### Alternating Content

Here's an example of a timeline with alternating content.

```tsx
import { Timeline } from "@chakra-ui/react"

export const TimelineAlternating = () => {
  return (
    <Timeline.Root size="sm" variant="outline">
      <Timeline.Item>
        <Timeline.Content flex="1" />
        <Timeline.Connector>
          <Timeline.Separator />
          <Timeline.Indicator />
        </Timeline.Connector>
        <Timeline.Content flex="1">
          <Timeline.Title>Placed Order</Timeline.Title>
        </Timeline.Content>
      </Timeline.Item>

      <Timeline.Item>
        <Timeline.Content flex="1" alignItems="flex-end">
          <Timeline.Title>Prepared Order</Timeline.Title>
        </Timeline.Content>
        <Timeline.Connector>
          <Timeline.Separator />
          <Timeline.Indicator />
        </Timeline.Connector>
        <Timeline.Content flex="1" />
      </Timeline.Item>

      <Timeline.Item>
        <Timeline.Content flex="1" />
        <Timeline.Connector>
          <Timeline.Separator />
          <Timeline.Indicator />
        </Timeline.Connector>
        <Timeline.Content flex="1">
          <Timeline.Title>Order Delivered</Timeline.Title>
        </Timeline.Content>
      </Timeline.Item>
    </Timeline.Root>
  )
}

```

### Composition

Here's an example of how to compose the timeline with other components to create
a consistent-looking timeline.

```tsx
import {
  Avatar,
  Button,
  Card,
  Icon,
  Input,
  Span,
  Timeline,
} from "@chakra-ui/react"
import { LuPen, LuX } from "react-icons/lu"
import LoremIpsum from "react-lorem-ipsum"

export const TimelineComposition = () => {
  return (
    <Timeline.Root size="lg" variant="subtle" maxW="md">
      <Timeline.Item>
        <Timeline.Connector>
          <Timeline.Separator />
          <Timeline.Indicator>
            <Icon fontSize="xs">
              <LuPen />
            </Icon>
          </Timeline.Indicator>
        </Timeline.Connector>
        <Timeline.Content>
          <Timeline.Title>
            <Avatar.Root size="2xs">
              <Avatar.Image src="https://i.pravatar.cc/150?u=a" />
              <Avatar.Fallback />
            </Avatar.Root>
            Lucas Moras <Span color="fg.muted">has changed</Span>
            <Span fontWeight="medium">3 labels</Span> on
            <Span color="fg.muted">Jan 1, 2024</Span>
          </Timeline.Title>
        </Timeline.Content>
      </Timeline.Item>

      <Timeline.Item>
        <Timeline.Connector>
          <Timeline.Separator />
          <Timeline.Indicator>
            <Icon fontSize="xs">
              <LuX />
            </Icon>
          </Timeline.Indicator>
        </Timeline.Connector>
        <Timeline.Content>
          <Timeline.Title>
            <Avatar.Root size="2xs">
              <Avatar.Image src="https://i.pravatar.cc/150?u=x" />
              <Avatar.Fallback />
            </Avatar.Root>
            Jenna Smith <Span color="fg.muted">removed</Span>
            <Span fontWeight="medium">Enas</Span>
            <Span color="fg.muted">on Jan 12, 2024</Span>
          </Timeline.Title>
        </Timeline.Content>
      </Timeline.Item>

      <Timeline.Item>
        <Timeline.Connector>
          <Timeline.Separator />
          <Timeline.Indicator bg="teal.solid" color="teal.contrast">
            <Icon fontSize="xs">
              <LuX />
            </Icon>
          </Timeline.Indicator>
        </Timeline.Connector>
        <Timeline.Content gap="4">
          <Timeline.Title>
            <Avatar.Root size="2xs">
              <Avatar.Image src="https://i.pravatar.cc/150?u=y" />
              <Avatar.Fallback />
            </Avatar.Root>
            Erica <Span color="fg.muted">commented</Span>
            <Span color="fg.muted">on Jan 12, 2024</Span>
          </Timeline.Title>
          <Card.Root size="sm">
            <Card.Body textStyle="sm" lineHeight="tall">
              <LoremIpsum p={1} avgWordsPerSentence={2} />
            </Card.Body>
            <Card.Footer>
              <Button size="xs" variant="surface" rounded="md">
                👏 2
              </Button>
            </Card.Footer>
          </Card.Root>
        </Timeline.Content>
      </Timeline.Item>

      <Timeline.Item>
        <Timeline.Connector>
          <Timeline.Separator />
          <Timeline.Indicator>
            <Avatar.Root size="full">
              <Avatar.Image src="https://i.pravatar.cc/150?u=o" />
              <Avatar.Fallback />
            </Avatar.Root>
          </Timeline.Indicator>
        </Timeline.Connector>
        <Timeline.Content gap="4" mt="-1" w="full">
          <Input size="sm" placeholder="Add comment..." />
        </Timeline.Content>
      </Timeline.Item>
    </Timeline.Root>
  )
}

```

## Props

### Root

| Prop | Default | Type | Description |
| --- | --- | --- | --- |
| colorPalette | gray | `'gray' \| 'red' \| 'orange' \| 'yellow' \| 'green' \| 'teal' \| 'blue' \| 'cyan' \| 'purple' \| 'pink'` | The color palette of the component |
| variant | solid | `'subtle' \| 'solid' \| 'outline' \| 'plain'` | The variant of the component |
| size | md | `'sm' \| 'md' \| 'lg' \| 'xl'` | The size of the component |
| as | undefined | `React.ElementType` | The underlying element to render. |
| asChild | undefined | `boolean` | Use the provided child element as the default rendered element, combining their props and behavior. |
| unstyled | undefined | `boolean` | Whether to remove the component's style. |
| showLastSeparator | false | `'true' \| 'false'` | The showLastSeparator of the component |

## Explorer

Explore the `Timeline` component parts interactively. Click on parts in the
sidebar to highlight them in the preview.
