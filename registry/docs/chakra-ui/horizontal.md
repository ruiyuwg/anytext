### Horizontal

Display listbox items in a horizontal layout with card-based presentation,
perfect for media galleries or visual selection interfaces.

```tsx
"use client"

import {
  Image,
  Listbox,
  Stack,
  Text,
  createListCollection,
} from "@chakra-ui/react"

export const ListboxHorizontal = () => {
  return (
    <Listbox.Root
      collection={musicAlbums}
      orientation="horizontal"
      maxW="640px"
    >
      <Listbox.Label>Select Album</Listbox.Label>
      <Listbox.Content>
        {musicAlbums.items.map((album) => (
          <Listbox.Item
            item={album}
            key={album.value}
            flexDirection="column"
            alignItems="flex-start"
            gap="2"
            position="relative"
          >
            <Image
              src={album.image}
              alt={album.title}
              bg="bg.subtle"
              objectFit="cover"
              aspectRatio="1"
              borderRadius="l2"
              flexShrink="0"
              height="150px"
              minWidth="150px"
            />
            
              
                {album.title}
              
              {album.artist}
            
            <Listbox.ItemIndicator
              position="absolute"
              top="4"
              right="4"
              layerStyle="fill.solid"
              borderWidth="2px"
              borderColor="fg.inverted"
            />
          </Listbox.Item>
        ))}
      </Listbox.Content>
    </Listbox.Root>
  )
}

const musicAlbums = createListCollection({
  items: [
    {
      value: "euphoric-echoes",
      title: "Euphoric Echoes",
      artist: "Luna Solstice",
      image:
        "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=160&h=160&fit=crop",
    },
    {
      value: "neon-dreamscape",
      title: "Neon Dreamscape",
      artist: "Electra Skyline",
      image:
        "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=160&h=160&fit=crop",
    },
    {
      value: "cosmic-serenade",
      title: "Cosmic Serenade",
      artist: "Orion's Symphony",
      image:
        "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=160&h=160&fit=crop",
    },
    {
      value: "melancholy-melodies",
      title: "Melancholy Melodies",
      artist: "Violet Mistral",
      image:
        "https://images.unsplash.com/photo-1571330735066-03aaa9429d89?w=160&h=160&fit=crop",
    },
    {
      value: "rhythmic-illusions",
      title: "Rhythmic Illusions",
      artist: "Mirage Beats",
      image:
        "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=160&h=160&fit=crop",
    },
  ],
})

```

### Multiple Selection

Enable users to select multiple items from the list, useful for scenarios like
choosing tags, categories, or preferences.

```tsx
"use client"

import { Listbox, createListCollection } from "@chakra-ui/react"

export const ListboxMultiselect = () => {
  return (
    <Listbox.Root collection={frameworks} selectionMode="multiple" maxW="320px">
      <Listbox.Label>Select frameworks (multiple)</Listbox.Label>
      <Listbox.Content>
        {frameworks.items.map((framework) => (
          <Listbox.Item item={framework} key={framework.value}>
            <Listbox.ItemText>{framework.label}</Listbox.ItemText>
            
          </Listbox.Item>
        ))}
      </Listbox.Content>
    </Listbox.Root>
  )
}

const frameworks = createListCollection({
  items: [
    { label: "React.js", value: "react" },
    { label: "Vue.js", value: "vue" },
    { label: "Angular", value: "angular" },
    { label: "Svelte", value: "svelte" },
    { label: "Next.js", value: "nextjs" },
    { label: "Nuxt.js", value: "nuxtjs" },
  ],
})

```
