# Steps

```tsx
import { Button, ButtonGroup, Steps } from "@chakra-ui/react"

export const StepsBasic = () => {
  return (
    <Steps.Root defaultStep={1} count={steps.length}>
      <Steps.List>
        {steps.map((step, index) => (
          <Steps.Item key={index} index={index} title={step.title}>
            <Steps.Indicator />
            <Steps.Title>{step.title}</Steps.Title>
            <Steps.Separator />
          </Steps.Item>
        ))}
      </Steps.List>

      {steps.map((step, index) => (
        <Steps.Content key={index} index={index}>
          {step.description}
        </Steps.Content>
      ))}
      <Steps.CompletedContent>All steps are complete!</Steps.CompletedContent>

      <ButtonGroup size="sm" variant="outline">
        <Steps.PrevTrigger asChild>
          <Button>Prev</Button>
        </Steps.PrevTrigger>
        <Steps.NextTrigger asChild>
          <Button>Next</Button>
        </Steps.NextTrigger>
      </ButtonGroup>
    </Steps.Root>
  )
}

const steps = [
  {
    title: "Step 1",
    description: "Step 1 description",
  },
  {
    title: "Step 2",
    description: "Step 2 description",
  },
  {
    title: "Step 3",
    description: "Step 3 description",
  },
]

```

## Usage

```tsx
import { Steps } from "@chakra-ui/react"
```

```tsx
<Steps.Root>
  <Steps.List>
    <Steps.Item>
      <Steps.Trigger>
        <Steps.Indicator />
        <Steps.Title />
        <Steps.Description />
      </Steps.Trigger>
      <Steps.Separator />
    </Steps.Item>
  </Steps.List>
  <Steps.Content />
  <Steps.CompletedContent />
  <Steps.PrevTrigger />
  <Steps.NextTrigger />
</Steps.Root>
```

## Examples

### Sizes

Use the `size` prop to change the size of the steps component.

```tsx
import { Button, ButtonGroup, For, Stack, Steps } from "@chakra-ui/react"

export const StepsWithSizes = () => {
  return (
    <Stack gap="16">
      <For each={["sm", "md", "lg"]}>
        {(size) => (
          <Steps.Root key={size} size={size} count={steps.length}>
            <Steps.List>
              {steps.map((step, index) => (
                <Steps.Item key={index} index={index} title={step.title}>
                  <Steps.Indicator />
                  <Steps.Title>{step.title}</Steps.Title>
                  <Steps.Separator />
                </Steps.Item>
              ))}
            </Steps.List>
            {steps.map((step, index) => (
              <Steps.Content key={index} index={index}>
                {step.description}
              </Steps.Content>
            ))}
            <Steps.CompletedContent>
              All steps are complete!
            </Steps.CompletedContent>

            <ButtonGroup size="sm" variant="outline">
              <Steps.PrevTrigger asChild>
                <Button>Prev</Button>
              </Steps.PrevTrigger>
              <Steps.NextTrigger asChild>
                <Button>Next</Button>
              </Steps.NextTrigger>
            </ButtonGroup>
          </Steps.Root>
        )}
      </For>
    </Stack>
  )
}

const steps = [
  {
    title: "Step 1",
    description: "Step 1 description",
  },
  {
    title: "Step 2",
    description: "Step 2 description",
  },
  {
    title: "Step 3",
    description: "Step 3 description",
  },
]

```

### Variants

Use the `variant` prop to change the appearance of the steps component.

```tsx
import { Button, ButtonGroup, For, Stack, Steps } from "@chakra-ui/react"

export const StepsWithVariants = () => {
  return (
    <Stack gap="16">
      <For each={["subtle", "solid"]}>
        {(variant) => (
          <Steps.Root key={variant} variant={variant} count={steps.length}>
            <Steps.List>
              {steps.map((step, index) => (
                <Steps.Item key={index} index={index} title={step.title}>
                  <Steps.Indicator />
                  <Steps.Title>{step.title}</Steps.Title>
                  <Steps.Separator />
                </Steps.Item>
              ))}
            </Steps.List>

            {steps.map((step, index) => (
              <Steps.Content key={index} index={index}>
                {step.description}
              </Steps.Content>
            ))}
            <Steps.CompletedContent>
              All steps are complete!
            </Steps.CompletedContent>

            <ButtonGroup size="sm" variant="outline">
              <Steps.PrevTrigger asChild>
                <Button>Prev</Button>
              </Steps.PrevTrigger>
              <Steps.NextTrigger asChild>
                <Button>Next</Button>
              </Steps.NextTrigger>
            </ButtonGroup>
          </Steps.Root>
        )}
      </For>
    </Stack>
  )
}

const steps = [
  {
    title: "Step 1",
    description: "Step 1 description",
  },
  {
    title: "Step 2",
    description: "Step 2 description",
  },
  {
    title: "Step 3",
    description: "Step 3 description",
  },
]

```

### Colors

Use the `colorPalette` prop to change the color scheme of the component.

```tsx
import { Button, ButtonGroup, For, Stack, Steps } from "@chakra-ui/react"

export const StepsWithColors = () => {
  return (
    <Stack gap="10" width="full">
      <For each={["gray","red","green","blue","teal","pink","purple","cyan","orange","yellow"]}>
        {(colorPalette) => (
          <Steps.Root
            key={colorPalette}
            defaultStep={1}
            count={steps.length}
            colorPalette={colorPalette}
          >
            <Steps.List>
              {steps.map((step, index) => (
                <Steps.Item key={index} index={index} title={step.title}>
                  <Steps.Indicator />
                  <Steps.Title>{step.title}</Steps.Title>
                  <Steps.Separator />
                </Steps.Item>
              ))}
            </Steps.List>

            {steps.map((step, index) => (
              <Steps.Content key={index} index={index}>
                {step.description}
              </Steps.Content>
            ))}
            <Steps.CompletedContent>
              All steps are complete!
            </Steps.CompletedContent>

            <ButtonGroup size="sm" variant="outline">
              <Steps.PrevTrigger asChild>
                <Button>Prev</Button>
              </Steps.PrevTrigger>
              <Steps.NextTrigger asChild>
                <Button>Next</Button>
              </Steps.NextTrigger>
            </ButtonGroup>
          </Steps.Root>
        )}
      </For>
    </Stack>
  )
}

const steps = [
  {
    title: "Step 1",
    description: "Step 1 description",
  },
  {
    title: "Step 2",
    description: "Step 2 description",
  },
  {
    title: "Step 3",
    description: "Step 3 description",
  },
]

```

### Trigger

Use the `Steps.Trigger` component to make the step clickable.

```tsx
import { Button, ButtonGroup, Steps } from "@chakra-ui/react"

export const StepsWithTrigger = () => {
  return (
    <Steps.Root defaultStep={1} count={steps.length}>
      <Steps.List>
        {steps.map((step, index) => (
          <Steps.Item key={index} index={index} title={step.title}>
            <Steps.Trigger>
              <Steps.Indicator />
              <Steps.Title>{step.title}</Steps.Title>
            </Steps.Trigger>
            <Steps.Separator />
          </Steps.Item>
        ))}
      </Steps.List>

      {steps.map((step, index) => (
        <Steps.Content key={index} index={index}>
          {step.description}
        </Steps.Content>
      ))}
      <Steps.CompletedContent>All steps are complete!</Steps.CompletedContent>

      <ButtonGroup size="sm" variant="outline">
        <Steps.PrevTrigger asChild>
          <Button>Prev</Button>
        </Steps.PrevTrigger>
        <Steps.NextTrigger asChild>
          <Button>Next</Button>
        </Steps.NextTrigger>
      </ButtonGroup>
    </Steps.Root>
  )
}

const steps = [
  {
    title: "Step 1",
    description: "Step 1 description",
  },
  {
    title: "Step 2",
    description: "Step 2 description",
  },
  {
    title: "Step 3",
    description: "Step 3 description",
  },
]

```

### Vertical

Use the `orientation` prop to change the orientation of the steps component.

```tsx
import { Button, ButtonGroup, Stack, Steps } from "@chakra-ui/react"

export const StepsVertical = () => {
  return (
    <Steps.Root
      orientation="vertical"
      height="400px"
      defaultStep={1}
      count={steps.length}
    >
      <Steps.List>
        {steps.map((step, index) => (
          <Steps.Item key={index} index={index} title={step.title}>
            <Steps.Indicator />
            <Steps.Title>{step.title}</Steps.Title>
            <Steps.Separator />
          </Steps.Item>
        ))}
      </Steps.List>

      <Stack>
        {steps.map((step, index) => (
          <Steps.Content key={index} index={index}>
            {step.description}
          </Steps.Content>
        ))}
        <Steps.CompletedContent>All steps are complete!</Steps.CompletedContent>

        <ButtonGroup size="sm" variant="outline">
          <Steps.PrevTrigger asChild>
            <Button>Prev</Button>
          </Steps.PrevTrigger>
          <Steps.NextTrigger asChild>
            <Button>Next</Button>
          </Steps.NextTrigger>
        </ButtonGroup>
      </Stack>
    </Steps.Root>
  )
}

const steps = [
  {
    title: "Step 1",
    description: "Step 1 description",
  },
  {
    title: "Step 2",
    description: "Step 2 description",
  },
  {
    title: "Step 3",
    description: "Step 3 description",
  },
]

```

### Controlled

Use the `step` and `onStepChange` props to control the current step of the steps
component.

```tsx
"use client"

import { Button, ButtonGroup, Steps } from "@chakra-ui/react"
import { useState } from "react"

export const StepsControlled = () => {
  const [step, setStep] = useState(1)

  return (
    <Steps.Root
      step={step}
      onStepChange={(e) => setStep(e.step)}
      count={steps.length}
    >
      <Steps.List>
        {steps.map((step, index) => (
          <Steps.Item key={index} index={index} title={step.title}>
            <Steps.Indicator />
            <Steps.Title>{step.title}</Steps.Title>
            <Steps.Separator />
          </Steps.Item>
        ))}
      </Steps.List>

      {steps.map((step, index) => (
        <Steps.Content key={index} index={index}>
          {step.description}
        </Steps.Content>
      ))}
      <Steps.CompletedContent>All steps are complete!</Steps.CompletedContent>

      <ButtonGroup size="sm" variant="outline">
        <Steps.PrevTrigger asChild>
          <Button>Prev</Button>
        </Steps.PrevTrigger>
        <Steps.NextTrigger asChild>
          <Button>Next</Button>
        </Steps.NextTrigger>
      </ButtonGroup>
    </Steps.Root>
  )
}

const steps = [
  {
    title: "Step 1",
    description: "Step 1 description",
  },
  {
    title: "Step 2",
    description: "Step 2 description",
  },
  {
    title: "Step 3",
    description: "Step 3 description",
  },
]

```

### Validation

Use the `isStepValid` prop to validate each step before allowing navigation. Use
the `onStepInvalid` prop to handle invalid step transitions.

```tsx
"use client"

import { Box, Button, ButtonGroup, Input, Steps, Text } from "@chakra-ui/react"
import { useState } from "react"

export const StepsWithValidation = () => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    password: "",
  })

  const [error, setError] = useState<string | null>(null)

  return (
    <Steps.Root
      count={stepsData.length}
      linear
      isStepValid={(index) => stepsData[index]?.validate(formData) ?? true}
      onStepInvalid={(details) => {
        setError(`Step ${details.step + 1} is invalid`)
      }}
    >
      <Steps.List>
        {stepsData.map((step, index) => (
          <Steps.Item key={index} index={index}>
            <Steps.Trigger>
              <Steps.Indicator />
              <Box>
                <Steps.Title>{step.title}</Steps.Title>
                <Steps.Description>{step.description}</Steps.Description>
              </Box>
            </Steps.Trigger>
            <Steps.Separator />
          </Steps.Item>
        ))}
      </Steps.List>

      {stepsData.map((step, index) => (
        <Steps.Content key={index} index={index} maxW="xl">
          {step.render({ formData, setFormData, setError })}
          {error && (
            <Box color="red.fg" textStyle="sm" mt="3">
              {error}
            </Box>
          )}
        </Steps.Content>
      ))}

      <Steps.CompletedContent>
        <Text>Registration complete!</Text>
      </Steps.CompletedContent>

      <ButtonGroup size="sm" variant="outline" mt="4">
        <Steps.PrevTrigger asChild>
          <Button>Back</Button>
        </Steps.PrevTrigger>
        <Steps.NextTrigger asChild>
          <Button>Next</Button>
        </Steps.NextTrigger>
      </ButtonGroup>
    </Steps.Root>
  )
}

interface FormData {
  name: string
  email: string
  password: string
}

interface StepRenderContext {
  formData: FormData
  setFormData: (data: FormData) => void
  setError: (error: string | null) => void
}

interface StepData {
  title: string
  description: string
  validate: (data: FormData) => boolean
  render(ctx: StepRenderContext): React.ReactNode
}

const stepsData: StepData[] = [
  {
    title: "Name",
    description: "Enter your name",
    validate(data) {
      return data.name.trim().length > 0
    },
    render(ctx) {
      return (
        <Input
          placeholder="Enter your name"
          value={ctx.formData.name}
          onChange={(e) => {
            ctx.setFormData({ ...ctx.formData, name: e.target.value })
            ctx.setError(null)
          }}
        />
      )
    },
  },
  {
    title: "Email",
    description: "Enter your email",
    validate(data) {
      return data.email.includes("@")
    },
    render(ctx) {
      return (
        <Input
          type="email"
          placeholder="email@example.com"
          value={ctx.formData.email}
          onChange={(e) => {
            ctx.setFormData({ ...ctx.formData, email: e.target.value })
            ctx.setError(null)
          }}
        />
      )
    },
  },
  {
    title: "Password",
    description: "Create a password",
    validate(data) {
      return data.password.length >= 8
    },
    render(ctx) {
      return (
        <Input
          type="password"
          placeholder="Enter password"
          value={ctx.formData.password}
          onChange={(e) => {
            ctx.setFormData({ ...ctx.formData, password: e.target.value })
            ctx.setError(null)
          }}
        />
      )
    },
  },
]

```

### Store

An alternative way to control the steps is to use the `RootProvider` component
and the `useSteps` store hook.

This way you can access the steps state and methods from outside the steps.

```tsx
"use client"

import {
  Button,
  ButtonGroup,
  Code,
  Stack,
  Steps,
  useSteps,
} from "@chakra-ui/react"

export const StepsWithStore = () => {
  const steps = useSteps({
    defaultStep: 1,
    count: items.length,
  })

  return (
    <Stack align="flex-start">
      <Code>current step: {steps.value}</Code>
      <Steps.RootProvider value={steps}>
        <Steps.List>
          {items.map((step, index) => (
            <Steps.Item key={index} index={index} title={step.title}>
              <Steps.Indicator />
              <Steps.Title>{step.title}</Steps.Title>
              <Steps.Separator />
            </Steps.Item>
          ))}
        </Steps.List>
        {items.map((step, index) => (
          <Steps.Content key={index} index={index}>
            {step.description}
          </Steps.Content>
        ))}
        <Steps.CompletedContent>All steps are complete!</Steps.CompletedContent>

        <ButtonGroup size="sm" variant="outline">
          <Steps.PrevTrigger asChild>
            <Button>Prev</Button>
          </Steps.PrevTrigger>
          <Steps.NextTrigger asChild>
            <Button>Next</Button>
          </Steps.NextTrigger>
        </ButtonGroup>
      </Steps.RootProvider>
    </Stack>
  )
}

const items = [
  {
    title: "Step 1",
    description: "Step 1 description",
  },
  {
    title: "Step 2",
    description: "Step 2 description",
  },
  {
    title: "Step 3",
    description: "Step 3 description",
  },
]

```

### Icon

Pass the `icon` prop to the `StepsItem` component to display an icon.

```tsx
import { Button, ButtonGroup, Steps } from "@chakra-ui/react"
import { LuCalendar, LuCheck, LuUser, LuWallet } from "react-icons/lu"

export const StepsWithIcon = () => {
  return (
    <Steps.Root defaultStep={1} count={steps.length} size="sm">
      <Steps.List>
        {steps.map((step, index) => (
          <Steps.Item key={index} index={index}>
            <Steps.Indicator>
              <Steps.Status incomplete={step.icon} complete={<LuCheck />} />
            </Steps.Indicator>
            <Steps.Separator />
          </Steps.Item>
        ))}
      </Steps.List>

      {steps.map((step, index) => (
        <Steps.Content key={index} index={index}>
          {step.description}
        </Steps.Content>
      ))}
      <Steps.CompletedContent>All steps are complete!</Steps.CompletedContent>

      <ButtonGroup size="sm" variant="outline">
        <Steps.PrevTrigger asChild>
          <Button>Prev</Button>
        </Steps.PrevTrigger>
        <Steps.NextTrigger asChild>
          <Button>Next</Button>
        </Steps.NextTrigger>
      </ButtonGroup>
    </Steps.Root>
  )
}

const steps = [
  {
    icon: <LuUser />,
    description: "Contact Details",
  },
  {
    icon: <LuWallet />,
    description: "Payment",
  },
  {
    icon: <LuCalendar />,
    description: "Book an Appointment",
  },
]

```

### Description

Pass the `description` prop to the `StepsItem` component to display a
description.

```tsx
import { Box, Button, ButtonGroup, Steps } from "@chakra-ui/react"

export const StepsWithDescription = () => {
  return (
    <Steps.Root defaultStep={1} count={steps.length}>
      <Steps.List>
        {steps.map((step, index) => (
          <Steps.Item key={index} index={index} title={step.title}>
            <Steps.Indicator />
            <Box>
              <Steps.Title>{step.title}</Steps.Title>
              <Steps.Description>{step.description}</Steps.Description>
            </Box>
            <Steps.Separator />
          </Steps.Item>
        ))}
      </Steps.List>

      {steps.map((step, index) => (
        <Steps.Content key={index} index={index}>
          {step.content}
        </Steps.Content>
      ))}
      <Steps.CompletedContent>All steps are complete!</Steps.CompletedContent>

      <ButtonGroup size="sm" variant="outline">
        <Steps.PrevTrigger asChild>
          <Button>Prev</Button>
        </Steps.PrevTrigger>
        <Steps.NextTrigger asChild>
          <Button>Next</Button>
        </Steps.NextTrigger>
      </ButtonGroup>
    </Steps.Root>
  )
}

const steps = [
  {
    title: "Step 1",
    content: "Step 1 content",
    description: "This step",
  },
  {
    title: "Step 2",
    content: "Step 2 content",
    description: "That step",
  },
  {
    title: "Step 3",
    content: "Step 3 content",
    description: "Final step",
  },
]

```

## Props

### Root

| Prop | Default | Type | Description |
| --- | --- | --- | --- |
| orientation | horizontal | `'vertical' \| 'horizontal'` | The orientation of the component |
| colorPalette | gray | `'gray' \| 'red' \| 'orange' \| 'yellow' \| 'green' \| 'teal' \| 'blue' \| 'cyan' \| 'purple' \| 'pink'` | The color palette of the component |
| variant | solid | `'solid' \| 'subtle'` | The variant of the component |
| size | md | `'xs' \| 'sm' \| 'md' \| 'lg'` | The size of the component |
| as | undefined | `React.ElementType` | The underlying element to render. |
| asChild | undefined | `boolean` | Use the provided child element as the default rendered element, combining their props and behavior. |
| unstyled | undefined | `boolean` | Whether to remove the component's style. |
| count | undefined | `number` | The total number of steps |
| defaultStep | undefined | `number` | The initial value of the stepper when rendered.
Use when you don't need to control the value of the stepper. |
| ids | undefined | `ElementIds` | The custom ids for the stepper elements |
| linear | undefined | `boolean` | If `true`, the stepper requires the user to complete the steps in order |
| onStepChange | undefined | `(details: StepChangeDetails) => void` | Callback to be called when the value changes |
| onStepComplete | undefined | `VoidFunction` | Callback to be called when a step is completed |
| step | undefined | `number` | The controlled value of the stepper |

## Explorer

Explore the `Steps` component parts interactively. Click on parts in the sidebar
to highlight them in the preview.
