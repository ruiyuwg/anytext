## Examples

### Sizes

Use the `size` prop to change the size of the select component.

```tsx
"use client"

import {
  For,
  Portal,
  Select,
  Stack,
  createListCollection,
} from "@chakra-ui/react"

export const SelectWithSizes = () => {
  return (
    <Stack gap="5" width="320px">
      <For each={["xs", "sm", "md", "lg"]}>
        {(size) => (
          <Select.Root key={size} size={size} collection={frameworks}>
            <Select.HiddenSelect />
            <Select.Label>size = {size}</Select.Label>
            <Select.Control>
              <Select.Trigger>
                <Select.ValueText placeholder="Select framework" />
              </Select.Trigger>
              <Select.IndicatorGroup>
                <Select.Indicator />
              </Select.IndicatorGroup>
            </Select.Control>
            <Portal>
              <Select.Positioner>
                <Select.Content>
                  {frameworks.items.map((framework) => (
                    <Select.Item item={framework} key={framework.value}>
                      {framework.label}
                      <Select.ItemIndicator />
                    </Select.Item>
                  ))}
                </Select.Content>
              </Select.Positioner>
            </Portal>
          </Select.Root>
        )}
      </For>
    </Stack>
  )
}

const frameworks = createListCollection({
  items: [
    { label: "React.js", value: "react" },
    { label: "Vue.js", value: "vue" },
    { label: "Angular", value: "angular" },
    { label: "Svelte", value: "svelte" },
  ],
})

```

### Variants

Use the `variant` prop to change the appearance of the select component.

```tsx
"use client"

import {
  For,
  Portal,
  Select,
  Stack,
  createListCollection,
} from "@chakra-ui/react"

export const SelectWithVariants = () => {
  return (
    <Stack gap="5" width="320px">
      <For each={["outline", "subtle"]}>
        {(variant) => (
          <Select.Root key={variant} variant={variant} collection={frameworks}>
            <Select.HiddenSelect />
            <Select.Label>Select framework - {variant}</Select.Label>
            <Select.Control>
              <Select.Trigger>
                <Select.ValueText placeholder="Select framework" />
              </Select.Trigger>
              <Select.IndicatorGroup>
                <Select.Indicator />
              </Select.IndicatorGroup>
            </Select.Control>
            <Portal>
              <Select.Positioner>
                <Select.Content>
                  {frameworks.items.map((framework) => (
                    <Select.Item item={framework} key={framework.value}>
                      {framework.label}
                      <Select.ItemIndicator />
                    </Select.Item>
                  ))}
                </Select.Content>
              </Select.Positioner>
            </Portal>
          </Select.Root>
        )}
      </For>
    </Stack>
  )
}

const frameworks = createListCollection({
  items: [
    { label: "React.js", value: "react" },
    { label: "Vue.js", value: "vue" },
    { label: "Angular", value: "angular" },
    { label: "Svelte", value: "svelte" },
  ],
})

```

### Color Palette

The Select component is designed to be neutral-colored by default for
consistency across form elements. To apply a color palette, style the trigger
and indicator components directly using the `colorPalette` token.

```tsx
"use client"

import { Portal, Select, createListCollection } from "@chakra-ui/react"

export const SelectWithColorPalette = () => {
  return (
    <Select.Root
      colorPalette="red"
      collection={frameworks}
      size="sm"
      width="320px"
    >
      <Select.HiddenSelect />
      <Select.Label>Select framework</Select.Label>
      <Select.Control>
        <Select.Trigger
          borderColor="colorPalette.muted"
          bg="colorPalette.subtle"
          color="colorPalette.fg"
        >
          <Select.ValueText placeholder="Select framework" />
        </Select.Trigger>
        <Select.IndicatorGroup>
          <Select.Indicator color="colorPalette.fg" />
        </Select.IndicatorGroup>
      </Select.Control>
      <Portal>
        <Select.Positioner>
          <Select.Content>
            {frameworks.items.map((framework) => (
              <Select.Item item={framework} key={framework.value}>
                {framework.label}
                <Select.ItemIndicator />
              </Select.Item>
            ))}
          </Select.Content>
        </Select.Positioner>
      </Portal>
    </Select.Root>
  )
}

const frameworks = createListCollection({
  items: [
    { label: "React.js", value: "react" },
    { label: "Vue.js", value: "vue" },
    { label: "Angular", value: "angular" },
    { label: "Svelte", value: "svelte" },
  ],
})

```

### Option Group

Use the `Select.ItemGroup` component to group select options.

```tsx
"use client"

import { Portal, Select, createListCollection } from "@chakra-ui/react"
import { groupBy } from "es-toolkit"

export const SelectWithOptionGroup = () => {
  return (
    <Select.Root collection={collection} size="sm" width="320px">
      <Select.HiddenSelect />
      <Select.Label>Select framework</Select.Label>
      <Select.Control>
        <Select.Trigger>
          <Select.ValueText placeholder="Select framework" />
        </Select.Trigger>
        <Select.IndicatorGroup>
          <Select.Indicator />
        </Select.IndicatorGroup>
      </Select.Control>
      <Portal>
        <Select.Positioner>
          <Select.Content>
            {categories.map(([category, items]) => (
              <Select.ItemGroup key={category}>
                <Select.ItemGroupLabel>{category}</Select.ItemGroupLabel>
                {items.map((item) => (
                  <Select.Item item={item} key={item.value}>
                    {item.label}
                    <Select.ItemIndicator />
                  </Select.Item>
                ))}
              </Select.ItemGroup>
            ))}
          </Select.Content>
        </Select.Positioner>
      </Portal>
    </Select.Root>
  )
}

const collection = createListCollection({
  items: [
    { label: "Naruto", value: "naruto", category: "Anime" },
    { label: "One Piece", value: "one-piece", category: "Anime" },
    { label: "Dragon Ball", value: "dragon-ball", category: "Anime" },
    {
      label: "The Shawshank Redemption",
      value: "the-shawshank-redemption",
      category: "Movies",
    },
    { label: "The Godfather", value: "the-godfather", category: "Movies" },
    { label: "The Dark Knight", value: "the-dark-knight", category: "Movies" },
  ],
})

const categories = Object.entries(
  groupBy(collection.items, (item) => item.category),
)

```

### Controlled

Use the `value` and `onValueChange` props to control the select component.

```tsx
"use client"

import { Portal, Select, createListCollection } from "@chakra-ui/react"
import { useState } from "react"

export const SelectControlled = () => {
  const [value, setValue] = useState<string[]>([])
  return (
    <Select.Root
      collection={frameworks}
      width="320px"
      value={value}
      onValueChange={(e) => setValue(e.value)}
    >
      <Select.HiddenSelect />
      <Select.Label>Select framework</Select.Label>
      <Select.Control>
        <Select.Trigger>
          <Select.ValueText placeholder="Select framework" />
        </Select.Trigger>
        <Select.IndicatorGroup>
          <Select.Indicator />
        </Select.IndicatorGroup>
      </Select.Control>
      <Portal>
        <Select.Positioner>
          <Select.Content>
            {frameworks.items.map((framework) => (
              <Select.Item item={framework} key={framework.value}>
                {framework.label}
                <Select.ItemIndicator />
              </Select.Item>
            ))}
          </Select.Content>
        </Select.Positioner>
      </Portal>
    </Select.Root>
  )
}

const frameworks = createListCollection({
  items: [
    { label: "React.js", value: "react" },
    { label: "Vue.js", value: "vue" },
    { label: "Angular", value: "angular" },
    { label: "Svelte", value: "svelte" },
  ],
})

```

### Async Loading

Here's an example of how to populate the select `collection` from a remote
source.

```tsx
"use client"

import { Portal, Select, Spinner, createListCollection } from "@chakra-ui/react"
import { useMemo } from "react"
import { useAsync } from "react-use"

interface Pokemon {
  name: string
  url: string
}

export const SelectAsyncLoading = () => {
  const state = useAsync(async (): Promise<Pokemon[]> => {
    const response = await fetch("https://pokeapi.co/api/v2/pokemon")
    const data = await response.json()
    return data.results
  }, [])

  const collection = useMemo(() => {
    return createListCollection({
      items: state.value ?? [],
      itemToString: (pokemon) => pokemon.name,
      itemToValue: (pokemon) => pokemon.name,
    })
  }, [state.value])

  return (
    <Select.Root collection={collection} size="sm" width="320px">
      <Select.HiddenSelect />
      <Select.Label>Select pokemon</Select.Label>
      <Select.Control>
        <Select.Trigger>
          <Select.ValueText placeholder="Select pokemon" />
        </Select.Trigger>
        <Select.IndicatorGroup>
          {state.loading && (
            <Spinner size="xs" borderWidth="1.5px" color="fg.muted" />
          )}
          <Select.Indicator />
        </Select.IndicatorGroup>
      </Select.Control>
      <Portal>
        <Select.Positioner>
          <Select.Content>
            {collection.items.map((pokemon) => (
              <Select.Item item={pokemon} key={pokemon.name}>
                {pokemon.name}
                <Select.ItemIndicator />
              </Select.Item>
            ))}
          </Select.Content>
        </Select.Positioner>
      </Portal>
    </Select.Root>
  )
}

```

### Hook Form

Here's an example of how to use the `Select` component with `react-hook-form`.

```tsx
"use client"

import {
  Button,
  Field,
  Portal,
  Select,
  Stack,
  createListCollection,
} from "@chakra-ui/react"
import { standardSchemaResolver } from "@hookform/resolvers/standard-schema"
import { Controller, useForm } from "react-hook-form"
import { z } from "zod"

const formSchema = z.object({
  framework: z.string({ message: "Framework is required" }).array(),
})

type FormValues = z.infer<typeof formSchema>

export const SelectWithHookForm = () => {
  const {
    handleSubmit,
    formState: { errors },
    control,
  } = useForm<FormValues>({
    resolver: standardSchemaResolver(formSchema),
  })

  const onSubmit = handleSubmit((data) => console.log(data))

  return (
    <form onSubmit={onSubmit}>
      <Stack gap="4" align="flex-start">
        <Field.Root invalid={!!errors.framework} width="320px">
          <Field.Label>Framework</Field.Label>
          <Controller
            control={control}
            name="framework"
            render={({ field }) => (
              <Select.Root
                name={field.name}
                value={field.value}
                onValueChange={({ value }) => field.onChange(value)}
                onInteractOutside={() => field.onBlur()}
                collection={frameworks}
              >
                <Select.HiddenSelect />
                <Select.Control>
                  <Select.Trigger>
                    <Select.ValueText placeholder="Select framework" />
                  </Select.Trigger>
                  <Select.IndicatorGroup>
                    <Select.Indicator />
                  </Select.IndicatorGroup>
                </Select.Control>
                <Portal>
                  <Select.Positioner>
                    <Select.Content>
                      {frameworks.items.map((framework) => (
                        <Select.Item item={framework} key={framework.value}>
                          {framework.label}
                          <Select.ItemIndicator />
                        </Select.Item>
                      ))}
                    </Select.Content>
                  </Select.Positioner>
                </Portal>
              </Select.Root>
            )}
          />
          <Field.ErrorText>{errors.framework?.message}</Field.ErrorText>
        </Field.Root>

        <Button size="sm" type="submit">
          Submit
        </Button>
      </Stack>
    </form>
  )
}

const frameworks = createListCollection({
  items: [
    { label: "React.js", value: "react" },
    { label: "Vue.js", value: "vue" },
    { label: "Angular", value: "angular" },
    { label: "Svelte", value: "svelte" },
  ],
})

```

### Disabled

Use the `disabled` prop to disable the select component.

```tsx
"use client"

import { Portal, Select, createListCollection } from "@chakra-ui/react"

export const SelectWithDisabled = () => {
  return (
    <Select.Root disabled collection={frameworks} size="sm" width="320px">
      <Select.HiddenSelect />
      <Select.Label>Select framework</Select.Label>
      <Select.Control>
        <Select.Trigger>
          <Select.ValueText placeholder="Select framework" />
        </Select.Trigger>
        <Select.IndicatorGroup>
          <Select.Indicator />
        </Select.IndicatorGroup>
      </Select.Control>
      <Portal>
        <Select.Positioner>
          <Select.Content>
            {frameworks.items.map((framework) => (
              <Select.Item item={framework} key={framework.value}>
                {framework.label}
                <Select.ItemIndicator />
              </Select.Item>
            ))}
          </Select.Content>
        </Select.Positioner>
      </Portal>
    </Select.Root>
  )
}

const frameworks = createListCollection({
  items: [
    { label: "React.js", value: "react" },
    { label: "Vue.js", value: "vue" },
    { label: "Angular", value: "angular" },
    { label: "Svelte", value: "svelte" },
  ],
})

```

### Invalid

Here's an example of how to compose the `Select` component with the `Field`
component to display an error state.

```tsx
"use client"

import { Field, Portal, Select, createListCollection } from "@chakra-ui/react"

export const SelectWithInvalid = () => {
  return (
    <Field.Root invalid>
      <Select.Root collection={frameworks} size="sm" width="320px">
        <Select.HiddenSelect />
        <Select.Label>Select framework</Select.Label>
        <Select.Control>
          <Select.Trigger>
            <Select.ValueText placeholder="Select framework" />
          </Select.Trigger>
          <Select.IndicatorGroup>
            <Select.Indicator />
          </Select.IndicatorGroup>
        </Select.Control>
        <Portal>
          <Select.Positioner>
            <Select.Content>
              {frameworks.items.map((framework) => (
                <Select.Item item={framework} key={framework.value}>
                  {framework.label}
                  <Select.ItemIndicator />
                </Select.Item>
              ))}
            </Select.Content>
          </Select.Positioner>
        </Portal>
      </Select.Root>
      <Field.ErrorText>This is an error</Field.ErrorText>
    </Field.Root>
  )
}

const frameworks = createListCollection({
  items: [
    { label: "React.js", value: "react" },
    { label: "Vue.js", value: "vue" },
    { label: "Angular", value: "angular" },
    { label: "Svelte", value: "svelte" },
  ],
})

```

### Multiple

Use the `multiple` prop to allow multiple selections.

```tsx
"use client"

import { Portal, Select, createListCollection } from "@chakra-ui/react"

export const SelectWithMultiple = () => {
  return (
    <Select.Root multiple collection={frameworks} size="sm" width="320px">
      <Select.HiddenSelect />
      <Select.Label>Select framework</Select.Label>
      <Select.Control>
        <Select.Trigger>
          <Select.ValueText placeholder="Select framework" />
        </Select.Trigger>
        <Select.IndicatorGroup>
          <Select.Indicator />
        </Select.IndicatorGroup>
      </Select.Control>
      <Portal>
        <Select.Positioner>
          <Select.Content>
            {frameworks.items.map((framework) => (
              <Select.Item item={framework} key={framework.value}>
                {framework.label}
                <Select.ItemIndicator />
              </Select.Item>
            ))}
          </Select.Content>
        </Select.Positioner>
      </Portal>
    </Select.Root>
  )
}

const frameworks = createListCollection({
  items: [
    { label: "React.js", value: "react" },
    { label: "Vue.js", value: "vue" },
    { label: "Angular", value: "angular" },
    { label: "Svelte", value: "svelte" },
  ],
})

```

### Positioning

Use the `positioning` prop to control the underlying `floating-ui` options of
the select component.

```tsx
"use client"

import { Portal, Select, createListCollection } from "@chakra-ui/react"

export const SelectWithPositioning = () => {
  return (
    <Select.Root
      collection={frameworks}
      size="sm"
      width="320px"
      positioning={{ placement: "top", flip: false }}
    >
      <Select.HiddenSelect />
      <Select.Label>Select framework</Select.Label>
      <Select.Control>
        <Select.Trigger>
          <Select.ValueText placeholder="Select framework" />
        </Select.Trigger>
        <Select.IndicatorGroup>
          <Select.Indicator />
        </Select.IndicatorGroup>
      </Select.Control>
      <Portal>
        <Select.Positioner>
          <Select.Content>
            {frameworks.items.map((framework) => (
              <Select.Item item={framework} key={framework.value}>
                {framework.label}
                <Select.ItemIndicator />
              </Select.Item>
            ))}
          </Select.Content>
        </Select.Positioner>
      </Portal>
    </Select.Root>
  )
}

const frameworks = createListCollection({
  items: [
    { label: "React.js", value: "react" },
    { label: "Vue.js", value: "vue" },
    { label: "Angular", value: "angular" },
    { label: "Svelte", value: "svelte" },
  ],
})

```

### Clear Trigger

Render the `Select.ClearTrigger` component to show a clear button. Clicking the
clear button will clear the selected value.

```tsx
"use client"

import { Portal, Select, createListCollection } from "@chakra-ui/react"

export const SelectWithClear = () => {
  return (
    <Select.Root
      collection={animeMovies}
      defaultValue={["spirited_away"]}
      size="sm"
      width="320px"
    >
      <Select.HiddenSelect />
      <Select.Label>Select fav. anime</Select.Label>
      <Select.Control>
        <Select.Trigger>
          <Select.ValueText placeholder="Select anime" />
        </Select.Trigger>
        <Select.IndicatorGroup>
          <Select.ClearTrigger />
          <Select.Indicator />
        </Select.IndicatorGroup>
      </Select.Control>
      <Portal>
        <Select.Positioner>
          <Select.Content>
            {animeMovies.items.map((anime) => (
              <Select.Item item={anime} key={anime.value}>
                {anime.label}
                <Select.ItemIndicator />
              </Select.Item>
            ))}
          </Select.Content>
        </Select.Positioner>
      </Portal>
    </Select.Root>
  )
}

const animeMovies = createListCollection({
  items: [
    { label: "Spirited Away", value: "spirited_away" },
    { label: "My Neighbor Totoro", value: "my_neighbor_totoro" },
    { label: "Akira", value: "akira" },
    { label: "Princess Mononoke", value: "princess_mononoke" },
    { label: "Grave of the Fireflies", value: "grave_of_the_fireflies" },
    { label: "Howl's Moving Castle", value: "howls_moving_castle" },
    { label: "Ghost in the Shell", value: "ghost_in_the_shell" },
    { label: "Naruto", value: "naruto" },
    { label: "Hunter x Hunter", value: "hunter_x_hunter" },
    { label: "The Wind Rises", value: "the_wind_rises" },
    { label: "Kiki's Delivery Service", value: "kikis_delivery_service" },
    { label: "Perfect Blue", value: "perfect_blue" },
    {
      label: "The Girl Who Leapt Through Time",
      value: "the_girl_who_leapt_through_time",
    },
    { label: "Weathering with You", value: "weathering_with_you" },
    { label: "Ponyo", value: "ponyo" },
    { label: "5 Centimeters per Second", value: "5_centimeters_per_second" },
    { label: "A Silent Voice", value: "a_silent_voice" },
    { label: "Paprika", value: "paprika" },
    { label: "Wolf Children", value: "wolf_children" },
    { label: "Redline", value: "redline" },
    {
      label: "The Tale of the Princess Kaguya",
      value: "the_tale_of_the_princess_kaguya",
    },
  ],
})

```

### Overflow

When the options are too many, the options will overflow the container due to
the `maxHeight` set.

```tsx
"use client"

import { Portal, Select, createListCollection } from "@chakra-ui/react"

export const SelectWithOverflow = () => {
  return (
    <Select.Root collection={animeMovies} size="sm" width="240px">
      <Select.HiddenSelect />
      <Select.Label>Select anime</Select.Label>
      <Select.Control>
        <Select.Trigger>
          <Select.ValueText placeholder="Select movie" />
        </Select.Trigger>
        <Select.IndicatorGroup>
          <Select.Indicator />
        </Select.IndicatorGroup>
      </Select.Control>
      <Portal>
        <Select.Positioner>
          <Select.Content>
            {animeMovies.items.map((movie) => (
              <Select.Item item={movie} key={movie.value}>
                {movie.label}
                <Select.ItemIndicator />
              </Select.Item>
            ))}
          </Select.Content>
        </Select.Positioner>
      </Portal>
    </Select.Root>
  )
}

const animeMovies = createListCollection({
  items: [
    { label: "Spirited Away", value: "spirited_away" },
    { label: "My Neighbor Totoro", value: "my_neighbor_totoro" },
    { label: "Akira", value: "akira" },
    { label: "Princess Mononoke", value: "princess_mononoke" },
    { label: "Grave of the Fireflies", value: "grave_of_the_fireflies" },
    { label: "Howl's Moving Castle", value: "howls_moving_castle" },
    { label: "Ghost in the Shell", value: "ghost_in_the_shell" },
    { label: "Naruto", value: "naruto" },
    { label: "Hunter x Hunter", value: "hunter_x_hunter" },
    { label: "The Wind Rises", value: "the_wind_rises" },
    { label: "Kiki's Delivery Service", value: "kikis_delivery_service" },
    { label: "Perfect Blue", value: "perfect_blue" },
    {
      label: "The Girl Who Leapt Through Time",
      value: "the_girl_who_leapt_through_time",
    },
    { label: "Weathering with You", value: "weathering_with_you" },
    { label: "Ponyo", value: "ponyo" },
    { label: "5 Centimeters per Second", value: "5_centimeters_per_second" },
    { label: "A Silent Voice", value: "a_silent_voice" },
    { label: "Paprika", value: "paprika" },
    { label: "Wolf Children", value: "wolf_children" },
    { label: "Redline", value: "redline" },
    {
      label: "The Tale of the Princess Kaguya",
      value: "the_tale_of_the_princess_kaguya",
    },
  ],
})

```

### Item Description

Here's an example of how to render a description for each item.

```tsx
"use client"

import {
  Portal,
  Select,
  Span,
  Stack,
  createListCollection,
} from "@chakra-ui/react"

export const SelectWithItemDescription = () => {
  return (
    <Select.Root
      collection={frameworks}
      size="sm"
      width="320px"
      defaultValue={["pro"]}
    >
      <Select.HiddenSelect />
      <Select.Label>Select plan</Select.Label>
      <Select.Control>
        <Select.Trigger>
          <Select.ValueText placeholder="Select plan" />
        </Select.Trigger>
        <Select.IndicatorGroup>
          <Select.Indicator />
        </Select.IndicatorGroup>
      </Select.Control>
      <Portal>
        <Select.Positioner>
          <Select.Content>
            {frameworks.items.map((framework) => (
              <Select.Item item={framework} key={framework.value}>
                <Stack gap="0">
                  <Select.ItemText>{framework.label}</Select.ItemText>
                  <Span color="fg.muted" textStyle="xs">
                    {framework.description}
                  </Span>
                </Stack>
                <Select.ItemIndicator />
              </Select.Item>
            ))}
          </Select.Content>
        </Select.Positioner>
      </Portal>
    </Select.Root>
  )
}

const frameworks = createListCollection({
  items: [
    {
      label: "Basic Plan",
      value: "basic",
      description: "$9/month - Perfect for small projects",
    },
    {
      label: "Pro Plan",
      value: "pro",
      description: "$29/month - Advanced features",
    },
    {
      label: "Business Plan",
      value: "business",
      description: "$99/month - Enterprise-grade solutions",
    },
    {
      label: "Enterprise Plan",
      value: "enterprise",
      description: "Custom pricing - Tailored solutions",
    },
  ],
})

```

### Open From Popover

Here's an example of how to use the `Select` within a `Popover` component.

```tsx
"use client"

import {
  Button,
  Popover,
  Portal,
  Select,
  createListCollection,
} from "@chakra-ui/react"

export const SelectOpenFromPopover = () => {
  return (
    <Popover.Root size="xs">
      <Popover.Trigger asChild>
        <Button variant="outline" size="sm">
          Select in Popover
        </Button>
      </Popover.Trigger>

      <Portal>
        <Popover.Positioner>
          <Popover.Content>
            <Popover.Header>Select in Popover</Popover.Header>
            <Popover.Body>
              <Select.Root
                collection={frameworks}
                size="sm"
                positioning={{ sameWidth: true, placement: "bottom" }}
              >
                <Select.HiddenSelect />
                <Select.Control>
                  <Select.Trigger>
                    <Select.ValueText placeholder="Select framework" />
                  </Select.Trigger>
                  <Select.IndicatorGroup>
                    <Select.Indicator />
                  </Select.IndicatorGroup>
                </Select.Control>
                <Select.Positioner>
                  <Select.Content width="full">
                    {frameworks.items.map((item) => (
                      <Select.Item item={item} key={item.value}>
                        {item.label}
                        <Select.ItemIndicator />
                      </Select.Item>
                    ))}
                  </Select.Content>
                </Select.Positioner>
              </Select.Root>
            </Popover.Body>
          </Popover.Content>
        </Popover.Positioner>
      </Portal>
    </Popover.Root>
  )
}

const frameworks = createListCollection({
  items: [
    { label: "React.js", value: "react" },
    { label: "Vue.js", value: "vue" },
    { label: "Angular", value: "angular" },
    { label: "Svelte", value: "svelte" },
  ],
})

```

### Open From Dialog

To use the `Select` within a `Dialog`, you need to avoid portalling the
`Select.Positioner` to the document's body.

```diff
-<Portal>
  <Select.Positioner>
    <Select.Content>
      {/* ... */}
    </Select.Content>
  </Select.Positioner>
-</Portal>
```

If you have set `scrollBehavior="inside"` on the `Dialog`, you need to:

- Set the select positioning to `fixed` to avoid the select from being clipped
  by the dialog.
- Set `hideWhenDetached` to `true` to hide the select when the trigger is
  scrolled out of view.

```tsx
<Select.Root positioning={{ strategy: "fixed", hideWhenDetached: true }}>
  {/* ... */}
</Select.Root>
```

```tsx
"use client"

import {
  Button,
  CloseButton,
  Dialog,
  Portal,
  Select,
  createListCollection,
} from "@chakra-ui/react"

export const SelectOpenFromDialog = () => {
  return (
    <Dialog.Root>
      <Dialog.Trigger asChild>
        <Button variant="outline">Open Dialog</Button>
      </Dialog.Trigger>
      <Portal>
        <Dialog.Backdrop />
        <Dialog.Positioner>
          <Dialog.Content>
            <Dialog.CloseTrigger asChild>
              <CloseButton />
            </Dialog.CloseTrigger>
            <Dialog.Header>
              <Dialog.Title>Select in Dialog</Dialog.Title>
            </Dialog.Header>
            <Dialog.Body>
              <DialogSelect />
            </Dialog.Body>
            <Dialog.Footer />
          </Dialog.Content>
        </Dialog.Positioner>
      </Portal>
    </Dialog.Root>
  )
}

const frameworks = createListCollection({
  items: [
    { label: "React.js", value: "react" },
    { label: "Vue.js", value: "vue" },
    { label: "Angular", value: "angular" },
    { label: "Svelte", value: "svelte" },
  ],
})

function DialogSelect() {
  return (
    <Select.Root collection={frameworks} size="sm">
      <Select.HiddenSelect />
      <Select.Label>Select framework</Select.Label>
      <Select.Control>
        <Select.Trigger>
          <Select.ValueText placeholder="Select framework" />
        </Select.Trigger>
        <Select.IndicatorGroup>
          <Select.Indicator />
        </Select.IndicatorGroup>
      </Select.Control>
      <Select.Positioner>
        <Select.Content>
          {frameworks.items.map((item) => (
            <Select.Item item={item} key={item.value}>
              {item.label}
            </Select.Item>
          ))}
        </Select.Content>
      </Select.Positioner>
    </Select.Root>
  )
}

```

### Avatar Select

Here's an example of how to compose the `Select` and the `Avatar`.

```tsx
"use client"

import {
  Avatar,
  HStack,
  Select,
  createListCollection,
  useSelectContext,
} from "@chakra-ui/react"

const SelectValue = () => {
  const select = useSelectContext()
  const items = select.selectedItems as Array<{ name: string; avatar: string }>
  const { name, avatar } = items[0]
  return (
    <Select.ValueText placeholder="Select member">
      <HStack>
        <Avatar.Root shape="rounded" size="2xs">
          <Avatar.Image src={avatar} alt={name} />
          <Avatar.Fallback name={name} />
        </Avatar.Root>
        {name}
      </HStack>
    </Select.ValueText>
  )
}

export const SelectWithAvatar = () => {
  return (
    <Select.Root
      collection={members}
      size="sm"
      width="240px"
      defaultValue={["jessica_jones"]}
      positioning={{ sameWidth: true }}
    >
      <Select.HiddenSelect />
      <Select.Label>Select member</Select.Label>
      <Select.Control>
        <Select.Trigger>
          <SelectValue />
        </Select.Trigger>
        <Select.IndicatorGroup>
          <Select.Indicator />
        </Select.IndicatorGroup>
      </Select.Control>
      <Select.Positioner>
        <Select.Content>
          {members.items.map((item) => (
            <Select.Item item={item} key={item.id} justifyContent="flex-start">
              <Avatar.Root shape="rounded" size="2xs">
                <Avatar.Image src={item.avatar} alt={item.name} />
                <Avatar.Fallback name={item.name} />
              </Avatar.Root>
              {item.name}
              <Select.ItemIndicator />
            </Select.Item>
          ))}
        </Select.Content>
      </Select.Positioner>
    </Select.Root>
  )
}

const members = createListCollection({
  items: [
    {
      name: "Jessica Jones",
      id: "jessica_jones",
      avatar:
        "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=100",
    },
    {
      name: "Kenneth Johnson",
      id: "kenneth_johnson",
      avatar:
        "https://images.unsplash.com/photo-1523477800337-966dbabe060b?w=100",
    },
    {
      name: "Kate Wilson",
      id: "kate_wilson",
      avatar:
        "https://images.unsplash.com/photo-1609712409631-dbbb050746d1?w=100",
    },
  ],
  itemToString: (item) => item.name,
  itemToValue: (item) => item.id,
})

```

### Country Select

Here's an example of how to use the `Select` component to select a country.

```tsx
"use client"

import { Portal, Select, createListCollection } from "@chakra-ui/react"
import { groupBy } from "es-toolkit"

export const SelectWithCountry = () => {
  return (
    <Select.Root
      collection={countries}
      size="sm"
      width="320px"
      defaultValue={["NG"]}
    >
      <Select.HiddenSelect />
      <Select.Label>Select country</Select.Label>
      <Select.Control>
        <Select.Trigger>
          <Select.ValueText placeholder="-" />
        </Select.Trigger>
        <Select.IndicatorGroup>
          <Select.Indicator />
        </Select.IndicatorGroup>
      </Select.Control>
      <Portal>
        <Select.Positioner>
          <Select.Content>
            {continents.map(([continent, items]) => (
              <Select.ItemGroup key={continent}>
                <Select.ItemGroupLabel>{continent}</Select.ItemGroupLabel>
                {items.map((item) => (
                  <Select.Item item={item} key={item.value}>
                    {countries.stringifyItem(item)}
                    <Select.ItemIndicator />
                  </Select.Item>
                ))}
              </Select.ItemGroup>
            ))}
          </Select.Content>
        </Select.Positioner>
      </Portal>
    </Select.Root>
  )
}

const countries = createListCollection({
  items: [
    { value: "US", label: "United States", flag: "🇺🇸", continent: "America" },
    { value: "CA", label: "Canada", flag: "🇨🇦", continent: "America" },
    { value: "MX", label: "Mexico", flag: "🇲🇽", continent: "America" },
    { value: "BR", label: "Brazil", flag: "🇧🇷", continent: "America" },
    { value: "ZA", label: "South Africa", flag: "🇿🇦", continent: "Africa" },
    { value: "NG", label: "Nigeria", flag: "🇳🇬", continent: "Africa" },
    { value: "MA", label: "Morocco", flag: "🇲🇦", continent: "Africa" },
    { value: "EG", label: "Egypt", flag: "🇪🇬", continent: "Africa" },
    { value: "CN", label: "China", flag: "🇨🇳", continent: "Asia" },
    { value: "JP", label: "Japan", flag: "🇯🇵", continent: "Asia" },
    { value: "IN", label: "India", flag: "🇮🇳", continent: "Asia" },
    { value: "KR", label: "South Korea", flag: "🇰🇷", continent: "Asia" },
    { value: "GB", label: "United Kingdom", flag: "🇬🇧", continent: "Europe" },
    { value: "FR", label: "France", flag: "🇫🇷", continent: "Europe" },
    { value: "DE", label: "Germany", flag: "🇩🇪", continent: "Europe" },
    { value: "IT", label: "Italy", flag: "🇮🇹", continent: "Europe" },
    { value: "ES", label: "Spain", flag: "🇪🇸", continent: "Europe" },
    { value: "AU", label: "Australia", flag: "🇦🇺", continent: "Oceania" },
    { value: "NZ", label: "New Zealand", flag: "🇳🇿", continent: "Oceania" },
    { value: "FJ", label: "Fiji", flag: "🇫🇯", continent: "Oceania" },
  ],
  itemToString: (item) => `${item.flag} ${item.label}`,
  itemToValue: (item) => item.value,
})

const continents = Object.entries(
  groupBy(countries.items, (item) => item.continent),
)

```

### Icon Button

Here's an example of how to trigger the select component with an `IconButton`.

```tsx
"use client"

import {
  HStack,
  IconButton,
  Portal,
  Select,
  createListCollection,
  useSelectContext,
} from "@chakra-ui/react"
import {
  RiAngularjsLine,
  RiForbidLine,
  RiReactjsLine,
  RiSvelteLine,
  RiVuejsLine,
} from "react-icons/ri"

const SelectTrigger = () => {
  const select = useSelectContext()
  const items = select.selectedItems as Framework[]
  return (
    <IconButton
      px="2"
      variant="outline"
      size="sm"
      {...select.getTriggerProps()}
    >
      {select.hasSelectedItems ? items[0].icon : <RiForbidLine />}
    </IconButton>
  )
}

export const SelectWithIconButton = () => {
  return (
    <Select.Root
      positioning={{ sameWidth: false }}
      collection={frameworks}
      size="sm"
      width="320px"
      defaultValue={["react"]}
    >
      <Select.HiddenSelect />
      <Select.Control>
        <SelectTrigger />
      </Select.Control>
      <Portal>
        <Select.Positioner>
          <Select.Content minW="32">
            {frameworks.items.map((framework) => (
              <Select.Item item={framework} key={framework.value}>
                <HStack>
                  {framework.icon}
                  {framework.label}
                </HStack>
                <Select.ItemIndicator />
              </Select.Item>
            ))}
          </Select.Content>
        </Select.Positioner>
      </Portal>
    </Select.Root>
  )
}

const frameworks = createListCollection({
  items: [
    { label: "React.js", value: "react", icon: <RiReactjsLine /> },
    { label: "Vue.js", value: "vue", icon: <RiVuejsLine /> },
    { label: "Angular", value: "angular", icon: <RiAngularjsLine /> },
    { label: "Svelte", value: "svelte", icon: <RiSvelteLine /> },
  ],
})

interface Framework {
  label: string
  value: string
  icon: React.ReactNode
}

```
