# Card

```tsx
import { Avatar, Button, Card } from "@chakra-ui/react"

export const CardBasic = () => {
  return (
    <Card.Root width="320px">
      <Card.Body gap="2">
        <Avatar.Root size="lg" shape="rounded">
          <Avatar.Image src="https://picsum.photos/200/300" />
          <Avatar.Fallback name="Nue Camp" />
        </Avatar.Root>
        <Card.Title mt="2">Nue Camp</Card.Title>
        <Card.Description>
          This is the card body. Lorem ipsum dolor sit amet, consectetur
          adipiscing elit. Curabitur nec odio vel dui euismod fermentum.
          Curabitur nec odio vel dui euismod fermentum.
        </Card.Description>
      </Card.Body>
      <Card.Footer justifyContent="flex-end">
        <Button variant="outline">View</Button>
        <Button>Join</Button>
      </Card.Footer>
    </Card.Root>
  )
}

```

## Usage

```jsx
import { Card } from "@chakra-ui/react"
```

```jsx
<Card.Root>
  <Card.Header />
  <Card.Body />
  <Card.Footer />
</Card.Root>
```

## Examples

### Variants

Use the `variant` prop to change the visual style of the Card.

```tsx
import { Avatar, Button, Card, For, Stack } from "@chakra-ui/react"

export const CardWithVariants = () => {
  return (
    <Stack gap="4" direction="row" wrap="wrap">
      <For each={["subtle", "outline", "elevated"]}>
        {(variant) => (
          <Card.Root width="320px" variant={variant} key={variant}>
            <Card.Body gap="2">
              <Avatar.Root size="lg" shape="rounded">
                <Avatar.Image src="https://picsum.photos/200/300" />
                <Avatar.Fallback name="Nue Camp" />
              </Avatar.Root>
              <Card.Title mb="2">Nue Camp</Card.Title>
              <Card.Description>
                This is the card body. Lorem ipsum dolor sit amet, consectetur
                adipiscing elit.
              </Card.Description>
            </Card.Body>
            <Card.Footer justifyContent="flex-end">
              <Button variant="outline">View</Button>
              <Button>Join</Button>
            </Card.Footer>
          </Card.Root>
        )}
      </For>
    </Stack>
  )
}

```

### Within Form

Use the Card component within a form to group related fields together.

```tsx
import { Button, Card, Field, Input, Stack } from "@chakra-ui/react"

export const CardWithForm = () => (
  <Card.Root maxW="sm">
    <Card.Header>
      <Card.Title>Sign up</Card.Title>
      <Card.Description>
        Fill in the form below to create an account
      </Card.Description>
    </Card.Header>
    <Card.Body>
      <Stack gap="4" w="full">
        <Field.Root>
          <Field.Label>First Name</Field.Label>
          <Input />
        </Field.Root>
        <Field.Root>
          <Field.Label>Last Name</Field.Label>
          <Input />
        </Field.Root>
      </Stack>
    </Card.Body>
    <Card.Footer justifyContent="flex-end">
      <Button variant="outline">Cancel</Button>
      <Button variant="solid">Sign in</Button>
    </Card.Footer>
  </Card.Root>
)

```

### Sizes

Use the `size` prop to change the size of the Card.

```tsx
import { Card, Heading, Stack } from "@chakra-ui/react"

export const CardWithSizes = () => {
  return (
    <Stack>
      <Card.Root size="sm">
        <Card.Header>
          <Heading size="md"> Card - sm</Heading>
        </Card.Header>
        <Card.Body color="fg.muted">
          This is the card body. Lorem ipsum dolor sit amet, consectetur
          adipiscing elit.
        </Card.Body>
      </Card.Root>

      <Card.Root size="md">
        <Card.Header>
          <Heading size="md"> Card - md</Heading>
        </Card.Header>
        <Card.Body color="fg.muted">
          This is the card body. Lorem ipsum dolor sit amet, consectetur
          adipiscing elit.
        </Card.Body>
      </Card.Root>

      <Card.Root size="lg">
        <Card.Header>
          <Heading size="md"> Card - lg</Heading>
        </Card.Header>
        <Card.Body color="fg.muted">
          This is the card body. Lorem ipsum dolor sit amet, consectetur
          adipiscing elit.
        </Card.Body>
      </Card.Root>
    </Stack>
  )
}

```

### With Image

Use the Card component to display an image.

```tsx
import { Button, Card, Image, Text } from "@chakra-ui/react"

export const CardWithImage = () => {
  return (
    <Card.Root maxW="sm" overflow="hidden">
      <Image
        src="https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
        alt="Green double couch with wooden legs"
      />
      <Card.Body gap="2">
        <Card.Title>Living room Sofa</Card.Title>
        <Card.Description>
          This sofa is perfect for modern tropical spaces, baroque inspired
          spaces.
        </Card.Description>
        <Text textStyle="2xl" fontWeight="medium" letterSpacing="tight" mt="2">
          $450
        </Text>
      </Card.Body>
      <Card.Footer gap="2">
        <Button variant="solid">Buy now</Button>
        <Button variant="ghost">Add to cart</Button>
      </Card.Footer>
    </Card.Root>
  )
}

```

### Horizontal

Use the Card component to display content horizontally.

```tsx
import { Badge, Box, Button, Card, HStack, Image } from "@chakra-ui/react"

export const CardHorizontal = () => (
  <Card.Root flexDirection="row" overflow="hidden" maxW="xl">
    <Image
      objectFit="cover"
      maxW="200px"
      src="https://images.unsplash.com/photo-1667489022797-ab608913feeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw5fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=800&q=60"
      alt="Caffe Latte"
    />
    <Box>
      <Card.Body>
        <Card.Title mb="2">The perfect latte</Card.Title>
        <Card.Description>
          Caffè latte is a coffee beverage of Italian origin made with espresso
          and steamed milk.
        </Card.Description>
        <HStack mt="4">
          <Badge>Hot</Badge>
          <Badge>Caffeine</Badge>
        </HStack>
      </Card.Body>
      <Card.Footer>
        <Button>Buy Latte</Button>
      </Card.Footer>
    </Box>
  </Card.Root>
)

```

### With Avatar

Use the Card component to display an avatar.

```tsx
import {
  Avatar,
  Button,
  Card,
  HStack,
  Stack,
  Strong,
  Text,
} from "@chakra-ui/react"
import { LuCheck, LuX } from "react-icons/lu"

export const CardWithAvatar = () => {
  return (
    <Card.Root width="320px">
      <Card.Body>
        <HStack mb="6" gap="3">
          <Avatar.Root>
            <Avatar.Image src="https://images.unsplash.com/photo-1511806754518-53bada35f930" />
            <Avatar.Fallback name="Nate Foss" />
          </Avatar.Root>
          <Stack gap="0">
            <Text fontWeight="semibold" textStyle="sm">
              Nate Foss
            </Text>
            <Text color="fg.muted" textStyle="sm">
              @natefoss
            </Text>
          </Stack>
        </HStack>
        <Card.Description>
          <Strong color="fg">Nate Foss </Strong>
          has requested to join your team. You can approve or decline their
          request.
        </Card.Description>
      </Card.Body>
      <Card.Footer>
        <Button variant="subtle" colorPalette="red" flex="1">
          <LuX />
          Decline
        </Button>
        <Button variant="subtle" colorPalette="blue" flex="1">
          <LuCheck />
          Approve
        </Button>
      </Card.Footer>
    </Card.Root>
  )
}

```

## Customization

### Adding new variants

Create a custom Card recipe to add new style variants:

```tsx title="theme.ts"
import { defineSlotRecipe } from "@chakra-ui/react"
import { cardAnatomy } from "@chakra-ui/react/anatomy"

const customCardRecipe = defineSlotRecipe({
  className: "chakra-card",
  slots: cardAnatomy.keys(),
  variants: {
    // add new variant="ghost"
    variant: {
      gradient: {
        root: {
          bg: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
          color: "white",
        },
      },
    },
  },
})
```

### Adding new sizes

Add custom size variants to the Card recipe:

```tsx title="theme.ts"
const customCardRecipe = defineSlotRecipe({
  // ...
  variants: {
    size: {
      // ... existing sizes (sm, md, lg)
      xl: {
        root: { "--card-padding": "spacing.10" },
        title: { textStyle: "2xl" },
      },
    },
  },
})
```

### Changing defaults

Set new default values for size and variant:

```tsx title="theme.ts"
const customCardRecipe = defineSlotRecipe({
  // ...
  defaultVariants: {
    variant: "elevated", // Default to elevated instead of outline
    size: "lg", // Default to lg instead of md
  },
})
```

### Updating the theme

Add the custom recipe to your theme:

```tsx title="components/ui/provider.tsx"
const config = defineConfig({
  theme: {
    slotRecipes: {
      card: customCardRecipe,
    },
  },
})

const system = createSystem(defaultConfig, config)

export function Provider(props: { children: React.ReactNode }) {
  return <ChakraProvider value={system}>{/* ... */}</ChakraProvider>
}
```

View the
[default Card recipe](https://github.com/chakra-ui/chakra-ui/blob/main/packages/react/src/theme/recipes/card.ts)
for reference.

## Props

### Root

| Prop | Default | Type | Description |
| --- | --- | --- | --- |
| colorPalette | gray | `'gray' \| 'red' \| 'orange' \| 'yellow' \| 'green' \| 'teal' \| 'blue' \| 'cyan' \| 'purple' \| 'pink'` | The color palette of the component |
| size | md | `'sm' \| 'md' \| 'lg'` | The size of the component |
| variant | outline | `'elevated' \| 'outline' \| 'subtle'` | The variant of the component |
| as | undefined | `React.ElementType` | The underlying element to render. |
| asChild | undefined | `boolean` | Use the provided child element as the default rendered element, combining their props and behavior. |
| unstyled | undefined | `boolean` | Whether to remove the component's style. |

## Explorer

Explore the `Card` component parts interactively. Click on parts in the sidebar
to highlight them in the preview.

````

# Carousel

```tsx
import { Carousel, IconButton } from "@chakra-ui/react"
import { LuChevronLeft, LuChevronRight } from "react-icons/lu"

const items = Array.from({ length: 5 })

export const CarouselBasic = () => {
  return (
    <Carousel.Root slideCount={items.length} maxW="md" mx="auto">
      <Carousel.ItemGroup>
        {items.map((_, index) => (
          <Carousel.Item key={index} index={index}>
            
              {index + 1}
            
          </Carousel.Item>
        ))}
      </Carousel.ItemGroup>

      <Carousel.Control justifyContent="center" gap="4">
        <Carousel.PrevTrigger asChild>
          
            
          
        </Carousel.PrevTrigger>

        

        <Carousel.NextTrigger asChild>
          
            
          
        </Carousel.NextTrigger>
      </Carousel.Control>
    </Carousel.Root>
  )
}

````

## Usage

```jsx
import { Carousel } from "@chakra-ui/react"
```

```jsx
<Carousel.Root>
  <Carousel.ItemGroup>
    
  </Carousel.ItemGroup>
  <Carousel.Control>
    <Carousel.AutoplayTrigger>
      
    </Carousel.AutoplayTrigger>
    
    
    
    
  </Carousel.Control>
</Carousel.Root>
```

## Shortcuts

The `Carousel` component also provides convenient shortcuts for common patterns.

### Carousel.Indicators

The `Carousel.Indicators` shortcut renders a full set of indicators
automatically based on the number of slides.

```jsx
<Carousel.IndicatorGroup>
  {Array.from({ length: items.length }, (_, index) => (
    
  ))}
</Carousel.IndicatorGroup>
```

This might be more concise if you don't need to customize each indicator:

```jsx
```

## Examples

### Controlled

Use the `page` and `onPageChange` props to programatically control the active
carousel page.

```tsx
"use client"

import { Carousel, IconButton } from "@chakra-ui/react"
import { useState } from "react"
import { LuChevronLeft, LuChevronRight } from "react-icons/lu"

const items = Array.from({ length: 5 })

export const CarouselControlled = () => {
  const [page, setPage] = useState(0)

  return (
    <Carousel.Root
      slideCount={items.length}
      maxW="md"
      mx="auto"
      page={page}
      onPageChange={(e) => setPage(e.page)}
    >
      <Carousel.ItemGroup>
        {items.map((_, index) => (
          <Carousel.Item key={index} index={index}>
            
              {index + 1}
            
          </Carousel.Item>
        ))}
      </Carousel.ItemGroup>

      <Carousel.Control justifyContent="center" gap="4">
        <Carousel.PrevTrigger asChild>
          
            
          
        </Carousel.PrevTrigger>

        

        <Carousel.NextTrigger asChild>
          
            
          
        </Carousel.NextTrigger>
      </Carousel.Control>
    </Carousel.Root>
  )
}

```

### Store

Alternatively, use the `useCarousel` hook to create a carousel store and pass it
to the `Carousel.RootProvider` component for full programmatic control.

```tsx
"use client"

import { Button, Carousel, IconButton, useCarousel } from "@chakra-ui/react"
import { LuChevronLeft, LuChevronRight } from "react-icons/lu"

const items = Array.from({ length: 5 })

export const CarouselWithStore = () => {
  const carousel = useCarousel({ slideCount: items.length })

  return (
    <Carousel.RootProvider value={carousel} maxW="xl" mx="auto">
       carousel.scrollTo(2)}>
        Go to slide 3
      
      <Carousel.ItemGroup>
        {items.map((_, index) => (
          <Carousel.Item key={index} index={index}>
            
              {index + 1}
            
          </Carousel.Item>
        ))}
      </Carousel.ItemGroup>

      <Carousel.Control justifyContent="center" gap="4">
        <Carousel.PrevTrigger asChild>
          
            
          
        </Carousel.PrevTrigger>

        

        <Carousel.NextTrigger asChild>
          
            
          
        </Carousel.NextTrigger>
      </Carousel.Control>
    </Carousel.RootProvider>
  )
}

```

### Arrows

Use the `Carousel.PrevTrigger` and `Carousel.NextTrigger` components to create
arrows that navigate between slides.

```tsx
import { Carousel, IconButton } from "@chakra-ui/react"
import { LuArrowLeft, LuArrowRight } from "react-icons/lu"

const items = Array.from({ length: 5 })

export const CarouselWithFloatingArrow = () => {
  return (
    <Carousel.Root slideCount={items.length} maxW="xl" mx="auto" gap="4">
      <Carousel.Control justifyContent="center" gap="4" width="full">
        <Carousel.PrevTrigger asChild>
          
            
          
        </Carousel.PrevTrigger>

        <Carousel.ItemGroup width="full">
          {items.map((_src, index) => (
            <Carousel.Item key={index} index={index}>
              
                {index + 1}
              
            </Carousel.Item>
          ))}
        </Carousel.ItemGroup>

        <Carousel.NextTrigger asChild>
          
            
          
        </Carousel.NextTrigger>
      </Carousel.Control>

      
    </Carousel.Root>
  )
}

```

### Indicators

Use the `Carousel.Indicators` component to render visual indicators that help
users track the progress of the carousel and jump to specific slides.

```tsx
import { Carousel } from "@chakra-ui/react"

const items = Array.from({ length: 5 })

export const CarouselWithIndicators = () => {
  return (
    <Carousel.Root slideCount={items.length} maxW="md" mx="auto" gap="4">
      <Carousel.ItemGroup>
        {items.map((_, index) => (
          <Carousel.Item key={index} index={index}>
            
              {index + 1}
            
          </Carousel.Item>
        ))}
      </Carousel.ItemGroup>

      <Carousel.Control justifyContent="center" gap="4">
        
      </Carousel.Control>
    </Carousel.Root>
  )
}

```

### Thumbnail Indicators

Here's an example that uses an image thumbnail as a custom indicator.

```tsx
import { Carousel, IconButton, Image } from "@chakra-ui/react"
import { LuChevronLeft, LuChevronRight } from "react-icons/lu"

export const CarouselWithThumbnails = () => {
  return (
    <Carousel.Root slideCount={items.length} maxW="2xl" gap="4">
      <Carousel.Control justifyContent="center" gap="4" width="full">
        <Carousel.PrevTrigger asChild>
          
            
          
        </Carousel.PrevTrigger>

        <Carousel.ItemGroup width="full">
          {items.map((item, index) => (
            <Carousel.Item key={index} index={index}>
              <Image
                aspectRatio="16/9"
                src={item.url}
                alt={item.label}
                w="100%"
                h="100%"
                objectFit="cover"
              />
            </Carousel.Item>
          ))}
        </Carousel.ItemGroup>

        <Carousel.NextTrigger asChild>
          
            
          
        </Carousel.NextTrigger>
      </Carousel.Control>

      <Carousel.IndicatorGroup>
        {items.map((item, index) => (
          <Carousel.Indicator
            key={index}
            index={index}
            unstyled
            _current={{
              outline: "2px solid currentColor",
              outlineOffset: "2px",
            }}
          >
            <Image
              w="20"
              aspectRatio="16/9"
              src={item.url}
              alt={item.label}
              objectFit="cover"
            />
          </Carousel.Indicator>
        ))}
      </Carousel.IndicatorGroup>
    </Carousel.Root>
  )
}

const items = [
  {
    label: "Mountain Landscape",
    url: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=1200&h=900&q=80",
  },
  {
    label: "Forest Path",
    url: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&h=900&q=80",
  },
  {
    label: "Ocean Waves",
    url: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&h=900&q=80",
  },
  {
    label: "Desert Dunes",
    url: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=1200&h=900&q=80",
  },
  {
    label: "Sunset Lake",
    url: "https://images.unsplash.com/photo-1475924156734-496f6cac6ec1?auto=format&fit=crop&q=80&w=2070",
  },
]

```

### Spacing

Use the `spacing` prop to control the spacing between slides.

```tsx
import { Carousel, HStack, IconButton } from "@chakra-ui/react"
import { LuChevronLeft, LuChevronRight } from "react-icons/lu"

const items = Array.from({ length: 5 })

export const CarouselSpacing = () => {
  return (
    <Carousel.Root
      spacing="48px"
      slidesPerPage={1.5}
      slideCount={items.length}
      maxW="xl"
      mx="auto"
    >
      
        {"spacing='48px'"}
      
      <Carousel.ItemGroup>
        {items.map((_, index) => (
          <Carousel.Item key={index} index={index}>
            
              {index + 1}
            
          </Carousel.Item>
        ))}
      </Carousel.ItemGroup>

      <Carousel.Control justifyContent="center" gap="4">
        <Carousel.PrevTrigger asChild>
          
            
          
        </Carousel.PrevTrigger>

        

        <Carousel.NextTrigger asChild>
          
            
          
        </Carousel.NextTrigger>
      </Carousel.Control>
    </Carousel.Root>
  )
}

```

### Variable Size

Use the `autoSize` prop to allow variable width/height slide items.

```tsx
import { Carousel, Center, IconButton } from "@chakra-ui/react"
import { LuChevronLeft, LuChevronRight } from "react-icons/lu"

const items = [
  { id: "1", width: "120px", label: "Small" },
  { id: "2", width: "200px", label: "Medium Size" },
  { id: "3", width: "80px", label: "XS" },
  { id: "4", width: "250px", label: "Large Content Here" },
  { id: "5", width: "150px", label: "Regular" },
]

export const CarouselVariableSize = () => {
  return (
    <Carousel.Root
      slideCount={items.length}
      autoSize
      spacing="8px"
      maxW="xl"
      mx="auto"
    >
      <Carousel.Control gap="4">
        <Carousel.PrevTrigger asChild>
          
            
          
        </Carousel.PrevTrigger>

        <Carousel.NextTrigger asChild>
          
            
          
        </Carousel.NextTrigger>
      </Carousel.Control>

      <Carousel.ItemGroup>
        {items.map((item, index) => (
          <Carousel.Item
            key={item.id}
            index={index}
            snapAlign="center"
            width="auto"
          >
            <Center
              style={{ width: item.width }}
              height="100px"
              bg="bg.emphasized"
              rounded="l2"
            >
              {item.label}
            
          </Carousel.Item>
        ))}
      </Carousel.ItemGroup>
    </Carousel.Root>
  )
}

```

### Vertical

Use the `orientation` prop to `vertical` to transform your carousel into a
vertical slider.

```tsx
import { Carousel, IconButton } from "@chakra-ui/react"
import { LuChevronDown, LuChevronUp } from "react-icons/lu"

const items = Array.from({ length: 5 })

export const CarouselVertical = () => {
  return (
    <Carousel.Root
      orientation="vertical"
      slideCount={items.length}
      mx="auto"
      height="320px"
      maxW="xl"
    >
      <Carousel.ItemGroup flex="1">
        {items.map((_, index) => (
          <Carousel.Item key={index} index={index}>
            {index + 1}
          </Carousel.Item>
        ))}
      </Carousel.ItemGroup>
      <Carousel.Control h="100%" justifyContent="space-between" gap="4">
        <Carousel.PrevTrigger asChild>
          
            
          
        </Carousel.PrevTrigger>

        

        <Carousel.NextTrigger asChild>
          
            
          
        </Carousel.NextTrigger>
      </Carousel.Control>
    </Carousel.Root>
  )
}

```

### Mouse Drag

Use the `allowMouseDrag` prop to enable mouse dragging on the carousel.

```tsx
import { Carousel, HStack, IconButton } from "@chakra-ui/react"
import {
  LuChevronLeft,
  LuChevronRight,
  LuMouse,
  LuMoveHorizontal,
} from "react-icons/lu"

const items = Array.from({ length: 5 })

export const CarouselWithMouseDrag = () => {
  return (
    <Carousel.Root slideCount={items.length} maxW="xl" mx="auto" allowMouseDrag>
      
          Click and drag to change slides
      
      <Carousel.ItemGroup>
        {items.map((_, index) => (
          <Carousel.Item key={index} index={index}>
            
              {index + 1}
            
          </Carousel.Item>
        ))}
      </Carousel.ItemGroup>

      <Carousel.Control justifyContent="center" gap="4">
        <Carousel.PrevTrigger asChild>
          
            
          
        </Carousel.PrevTrigger>

        

        <Carousel.NextTrigger asChild>
          
            
          
        </Carousel.NextTrigger>
      </Carousel.Control>
    </Carousel.Root>
  )
}

```

### Autoplay

Pass the `autoplay` prop to the `Carousel.Root` component to make the carousel
automatically move between slides.

```tsx
import { Carousel, HStack, IconButton } from "@chakra-ui/react"
import {
  LuChevronLeft,
  LuChevronRight,
  LuClock,
  LuPause,
  LuPlay,
} from "react-icons/lu"

const items = Array.from({ length: 5 })

export const CarouselWithAutoplay = () => {
  return (
    <Carousel.Root
      autoplay={{ delay: 2000 }}
      slideCount={items.length}
      mx="auto"
      maxW="xl"
    >
      
         {"autoplay={{ delay: 2000 }}"} or {"autoplay={true}"}
      
      <Carousel.ItemGroup>
        {items.map((_, index) => (
          <Carousel.Item key={index} index={index}>
            
              {index + 1}
            
          </Carousel.Item>
        ))}
      </Carousel.ItemGroup>

      <Carousel.Control justifyContent="center" gap="4">
        <Carousel.PrevTrigger asChild>
          
            
          
        </Carousel.PrevTrigger>

        <Carousel.AutoplayTrigger asChild>
          
            <Carousel.AutoplayIndicator
              paused={}
              play={}
            />
          
        </Carousel.AutoplayTrigger>
        <Carousel.NextTrigger asChild>
          
            
          
        </Carousel.NextTrigger>
      </Carousel.Control>
    </Carousel.Root>
  )
}

```

### Lightbox

Compose the `Carousel` component with the `Dialog` component to create a
lightbox.

```tsx
"use client"

import {
  AspectRatio,
  Button,
  Carousel,
  CloseButton,
  Dialog,
  HStack,
  IconButton,
  Image,
  Portal,
} from "@chakra-ui/react"
import { useCarouselContext } from "@chakra-ui/react"
import { LuChevronLeft, LuChevronRight } from "react-icons/lu"

export const CarouselWithDialog = () => {
  return (
    <Dialog.Root size="full">
      <Dialog.Trigger asChild>
        
          View Product Images
        
      </Dialog.Trigger>

      
        
        <Dialog.Positioner>
          <Dialog.Content bg="transparent" shadow="none">
            <Dialog.CloseTrigger asChild>
              
            </Dialog.CloseTrigger>

            <Dialog.Body
              display="flex"
              alignItems="center"
              justifyContent="center"
              h="full"
              p={0}
            >
              <Carousel.Root slideCount={items.length} w="full" h="full">
                <Carousel.Control justifyContent="center" px="4" gap="4">
                  <Carousel.PrevTrigger asChild>
                    
                      
                    
                  </Carousel.PrevTrigger>

                  <Carousel.ItemGroup width="full">
                    {items.map((src, index) => (
                      <Carousel.Item key={index} index={index}>
                        
                          <Image
                            src={src}
                            alt={`Product ${index + 1}`}
                            objectFit="contain"
                          />
                        
                      </Carousel.Item>
                    ))}
                  </Carousel.ItemGroup>

                  <Carousel.NextTrigger asChild>
                    
                      
                    
                  </Carousel.NextTrigger>
                </Carousel.Control>

                
              </Carousel.Root>
            </Dialog.Body>
          </Dialog.Content>
        </Dialog.Positioner>
      
    </Dialog.Root>
  )
}

const items = [
  "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=800&q=80",
  "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=800&q=80",
  "https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=800&q=80",
  "https://images.unsplash.com/photo-1560343090-f0409e92791a?w=800&q=80",
  "https://images.unsplash.com/photo-1491553895911-0055eca6402d?w=800&q=80",
  "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=800&q=80",
]

const CarouselThumbnails = ({ items }: { items: string[] }) => {
  const carousel = useCarouselContext()

  return (
    
      
      {items.map((src, index) => (
        <AspectRatio
          key={index}
          ratio={1}
          w="16"
          cursor="button"
          onClick={() => carousel.scrollTo(index)}
        >
          <Image
            src={src}
            alt={`Product ${index + 1}`}
            w="100%"
            h="100%"
            objectFit="cover"
          />
        
      ))}
    
  )
}

```

### Image Carousel

Here's an example that shows how to create an image carousel for a product
showcase.

```tsx
import type { IconButtonProps } from "@chakra-ui/react"
import { AspectRatio, Box, Carousel, IconButton, Image } from "@chakra-ui/react"
import { forwardRef } from "react"
import { LuArrowLeft, LuArrowRight } from "react-icons/lu"

export const CarouselWithImages = () => {
  return (
    <Carousel.Root
      slideCount={items.length}
      maxW="2xl"
      mx="auto"
      gap="4"
      position="relative"
      colorPalette="white"
    >
      <Carousel.Control gap="4" width="full" position="relative">
        <Carousel.PrevTrigger asChild>
          
            
          
        </Carousel.PrevTrigger>

        <Carousel.ItemGroup width="full">
          {items.map((src, index) => (
            <Carousel.Item key={index} index={index}>
              
                <Image
                  src={src}
                  alt={`Product ${index + 1}`}
                  objectFit="contain"
                />
              
            </Carousel.Item>
          ))}
        </Carousel.ItemGroup>

        <Carousel.NextTrigger asChild>
          
            
          
        </Carousel.NextTrigger>

        
          <Carousel.Indicators
            transition="width 0.2s ease-in-out"
            transformOrigin="center"
            opacity="0.5"
            boxSize="2"
            _current={{ width: "10", bg: "colorPalette.subtle", opacity: 1 }}
          />
        
      </Carousel.Control>
    </Carousel.Root>
  )
}

const ActionButton = forwardRef<HTMLButtonElement, IconButtonProps>(
  function ActionButton(props, ref) {
    return (
      <IconButton
        {...props}
        ref={ref}
        size="xs"
        variant="outline"
        rounded="full"
        position="absolute"
        zIndex="1"
        bg="bg"
      />
    )
  },
)

const items = [
  "https://images.unsplash.com/photo-1656433031375-5042f5afe894?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=2371",
  "https://images.unsplash.com/photo-1587466412525-87497b34fc88?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=2673",
  "https://images.unsplash.com/photo-1629581688635-5d88654e5bdd?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=2831",
  "https://images.unsplash.com/photo-1661030420948-862787de0056?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=2370",
  "https://images.unsplash.com/photo-1703505841379-2f863b201212?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=2371",
  "https://images.unsplash.com/photo-1607776905497-b4f788205f6a?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=2370",
]

```

### Property Card

Here's an example that shows how to compose the `Carousel` component with other
components to create a property card carousel.

```tsx
import {
  Badge,
  Box,
  Carousel,
  HStack,
  Icon,
  IconButton,
  Image,
  Span,
  Stack,
} from "@chakra-ui/react"
import { FaStar } from "react-icons/fa"
import { LuChevronLeft, LuChevronRight } from "react-icons/lu"

export const CarouselComposition = () => {
  return (
    <Carousel.Root slideCount={properties.length} slidesPerPage={3} gap="3">
      
        Popular homes in Cape Town
        
          <Carousel.PrevTrigger asChild>
            
              
            
          </Carousel.PrevTrigger>
          <Carousel.NextTrigger asChild>
            
              
            
          </Carousel.NextTrigger>
        
      
      <Carousel.ItemGroup>
        {properties.map((property, index) => (
          <Carousel.Item key={property.id} index={index}>
            
          </Carousel.Item>
        ))}
      </Carousel.ItemGroup>
    </Carousel.Root>
  )
}

interface PropertyCardProps {
  data: Property
}

const PropertyCard = ({ data }: PropertyCardProps) => (
  
    
      <Image
        src={data.image}
        alt={data.title}
        rounded="l2"
        w="full"
        h="200px"
        objectFit="cover"
        draggable={false}
      />
      {data.favorite && (
        
          Guest favorite
        
      )}
    
    
      
        {data.title}
      
      
        
          ${data.price} for {data.nights} nights
        
        
          
            
          
          {data.rating}
        
      
    
  
)

interface Property {
  id: number
  title: string
  price: number
  nights: number
  rating: number
  image: string
  favorite?: boolean
}

const properties: Property[] = [
  {
    id: 1,
    title: "Loft Apartment in City Bowl",
    price: 152,
    nights: 2,
    rating: 4.92,
    image:
      "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=800&q=80",
    favorite: true,
  },
  {
    id: 2,
    title: "Modern Studio, Camps Bay Beachfront",
    price: 296,
    nights: 2,
    rating: 4.99,
    image:
      "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=800&q=80",
    favorite: true,
  },
  {
    id: 3,
    title: "Retreat in Hout Bay with Views",
    price: 257,
    nights: 2,
    rating: 4.94,
    image:
      "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?w=800&q=80",
  },
  {
    id: 4,
    title: "Sunny Flat in Sea Point",
    price: 132,
    nights: 2,
    rating: 4.87,
    image:
      "https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=800&q=80",
  },
  {
    id: 5,
    title: "V&A Waterfront City Studio",
    price: 200,
    nights: 2,
    rating: 4.83,
    image:
      "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=800&q=80",
    favorite: true,
  },
  {
    id: 6,
    title: "Luxury Pad, Bantry Bay",
    price: 247,
    nights: 2,
    rating: 4.96,
    image:
      "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=800&q=80",
  },
  {
    id: 7,
    title: "Cozy Nest in Green Point",
    price: 135,
    nights: 2,
    rating: 4.81,
    image:
      "https://images.unsplash.com/photo-1554995207-c18c203602cb?w=800&q=80",
    favorite: true,
  },
  {
    id: 8,
    title: "Elegant Villa in Constantia",
    price: 450,
    nights: 2,
    rating: 4.98,
    image:
      "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&q=80",
  },
]

```

## Props

### Root

| Prop | Default | Type | Description |
| --- | --- | --- | --- |
| slideCount | undefined | `number` | The total number of slides.
Useful for SSR to render the initial ating the snap points. |
| allowMouseDrag | false | `boolean` | Whether to allow scrolling via dragging with mouse |
| autoplay | false | `boolean \| { delay: number }` | Whether to scroll automatically. The default delay is 4000ms. |
| defaultPage | 0 | `number` | The initial page to scroll to when rendered.
Use when you don't need to control the page of the carousel. |
| inViewThreshold | 0.6 | `number \| number[]` | The threshold for determining if an item is in view. |
| loop | false | `boolean` | Whether the carousel should loop around. |
| orientation | "horizontal" | `'horizontal' \| 'vertical'` | The orientation of the element. |
| slidesPerMove | "auto" | `number \| 'auto'` | The number of slides to scroll at a time.

When set to `auto`, the number of slides to scroll is determined by the
`slidesPerPage` property. |
| slidesPerPage | 1 | `number` | The number of slides to show at a time. |
| snapType | "mandatory" | `'proximity' \| 'mandatory'` | The snap type of the item. |
| spacing | "0px" | `string` | The amount of space between items. |
| as | undefined | `React.ElementType` | The underlying element to render. |
| asChild | undefined | `boolean` | Use the provided child element as the default rendered element, combining their props and behavior. |
| unstyled | undefined | `boolean` | Whether to remove the component's style. |
| ids | undefined | `Partial<{\n  root: string\n  item: (index: number) => string\n  itemGroup: string\n  nextTrigger: string\n  prevTrigger: string\n  indicatorGroup: string\n  indicator: (index: number) => string\n}>` | The ids of the elements in the carousel. Useful for composition. |
| onAutoplayStatusChange | undefined | `(details: AutoplayStatusDetails) => void` | Function called when the autoplay status changes. |
| onDragStatusChange | undefined | `(details: DragStatusDetails) => void` | Function called when the drag status changes. |
| onPageChange | undefined | `(details: PageChangeDetails) => void` | Function called when the page changes. |
| padding | undefined | `string` | Defines the extra space added around the scrollable area,
enabling nearby items to remain partially in view. |
| page | undefined | `number` | The controlled page of the carousel. |
| translations | undefined | `IntlTranslations` | The localized messages to use. |

### ItemGroup

| Prop | Default | Type | Description |
| --- | --- | --- | --- |
| as | undefined | `React.ElementType` | The underlying element to render. |
| asChild | undefined | `boolean` | Use the provided child element as the default rendered element, combining their props and behavior. |

### Item

| Prop | Default | Type | Description |
| --- | --- | --- | --- |
| index | undefined | `number` | The index of the item. |
| snapAlign | "start" | `'center' \| 'start' \| 'end'` | The snap alignment of the item. |
| as | undefined | `React.ElementType` | The underlying element to render. |
| asChild | undefined | `boolean` | Use the provided child element as the default rendered element, combining their props and behavior. |

### Control

| Prop | Default | Type | Description |
| --- | --- | --- | --- |
| as | undefined | `React.ElementType` | The underlying element to render. |
| asChild | undefined | `boolean` | Use the provided child element as the default rendered element, combining their props and behavior. |

## Explorer

Explore the `Carousel` component parts interactively. Click on parts in the
sidebar to highlight them in the preview.

<Explorer name="carousel-explorer-demo" />
