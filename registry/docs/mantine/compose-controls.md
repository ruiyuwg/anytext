## Compose controls

Putting a button or a link inside `Accordion.Control` is a common mistake when
using Accordion. `Accordion.Control` root element is `button`. Putting interactive
elements inside other interactive elements is forbidden – you will receive a DOM
validation error from React if you try to implement the following component:

```tsx
import { Accordion } from '@mantine/core';

// ❌ Incorrect usage: do not do this
function Demo() {
  return (
    <Accordion.Item value="item-1">
      <Accordion.Control>
        <Group>
          <span>Control 1</span>
          <button>My action</button>
        </Group>
      </Accordion.Control>
      <Accordion.Panel>Panel 1</Accordion.Panel>
    </Accordion.Item>
  );
}
```

Instead of putting interactive elements inside the `Accordion.Control`, render them
next to it. For example, you can add [ActionIcon](https://mantine.dev/core/action-icon/) or [Menu](https://mantine.dev/core/menu/)
on the right side of the original control. If you need to display an interactive element
over the `Accordion.Control`, use `position: absolute` instead.

#### Example: sideControls

```tsx
import { Accordion, ActionIcon, AccordionControlProps, Center } from '@mantine/core';
import { IconDots } from '@tabler/icons-react';

function AccordionControl(props: AccordionControlProps) {
  return (
    <Center>
      <Accordion.Control {...props} />
      <ActionIcon size="lg" variant="subtle" color="gray">
        <IconDots size={20} />
      </ActionIcon>
    </Center>
  );
}

function Demo() {
  return (
    <Accordion chevronPosition="left">
      <Accordion.Item value="item-1">
        <AccordionControl>Control 1</AccordionControl>
        <Accordion.Panel>Panel 1</Accordion.Panel>
      </Accordion.Item>

      <Accordion.Item value="item-2">
        <AccordionControl>Control 2</AccordionControl>
        <Accordion.Panel>Panel 2</Accordion.Panel>
      </Accordion.Item>

      <Accordion.Item value="item-3">
        <AccordionControl>Control 3</AccordionControl>
        <Accordion.Panel>Panel 3</Accordion.Panel>
      </Accordion.Item>
    </Accordion>
  );
}
```

## Disabled items

Set the `disabled` prop on the `Accordion.Control` component to disable it.
When you disable items, users cannot activate them with mouse or keyboard,
and arrow key navigation will skip them:

#### Example: disabled

```tsx
// Demo.tsx
import { Accordion } from '@mantine/core';
import { data } from './data';

function Demo() {
  const items = data.map((item) => (
    <Accordion.Item key={item.value} value={item.value}>
      <Accordion.Control icon={item.emoji} disabled={item.value === 'Bananas'}>
        {item.value}
      </Accordion.Control>
      <Accordion.Panel>{item.description}</Accordion.Panel>
    </Accordion.Item>
  ));

  return (
    <Accordion maw={400} defaultValue="Apples">
      {items}
    </Accordion>
  );
}

// data.ts
export const data = [
  {
    emoji: '🍎',
    value: 'Apples',
    description:
      'Crisp and refreshing fruit. Apples are known for their versatility and nutritional benefits. They come in a variety of flavors and are great for snacking, baking, or adding to salads.',
  },
  {
    emoji: '🍌',
    value: 'Bananas',
    description:
      'Naturally sweet and potassium-rich fruit. Bananas are a popular choice for their energy-boosting properties and can be enjoyed as a quick snack, added to smoothies, or used in baking.',
  },
  {
    emoji: '🥦',
    value: 'Broccoli',
    description:
      'Nutrient-packed green vegetable. Broccoli is packed with vitamins, minerals, and fiber. It has a distinct flavor and can be enjoyed steamed, roasted, or added to stir-fries.',
  },
];
```
