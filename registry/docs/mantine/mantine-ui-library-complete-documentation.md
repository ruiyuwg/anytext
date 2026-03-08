# Mantine UI Library - Complete Documentation

This file contains comprehensive documentation for the Mantine UI library including:

- Complete component documentation with all usage examples
- Full demo code for every example shown in the documentation
- Complete props tables with types and descriptions for all components
- Styles API documentation showing all available selectors
- FAQ and troubleshooting guides

All code examples use production npm package imports (e.g., @mantine/core, @mantine/hooks)

\================================================================================

## CORE COMPONENTS AND FEATURES

Primary Package: @mantine/core

### Accordion

Package: @mantine/core
Import: import { Accordion } from '@mantine/core';
Description: Divide content into collapsible sections

## Usage

Accordion allows users to expand and collapse sections of content.
It helps manage large amounts of information in a limited space
by showing only the section headers initially and revealing content on interaction.

Accordion is commonly used for:

- FAQ sections: displaying questions as headers with answers revealed on click
- Forms: organizing long forms into sections, for example, personal info, shipping, and payment
- Menus: nested navigation in sidebars or mobile views

#### Example: configurator

```tsx
// Demo.tsx
import { Accordion } from '@mantine/core';
import { data } from './data';

function Demo() {
  const items = data.map((item) => (
    <Accordion.Item key={item.value} value={item.value}>
      <Accordion.Control icon={item.emoji}>{item.value}</Accordion.Control>
      <Accordion.Panel>{item.description}</Accordion.Panel>
    </Accordion.Item>
  ));

  return (
    <Accordion defaultValue="Apples">
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

## Change chevron

Use the `chevron` prop to change the chevron icon. When `chevron` is set,
`chevronIconSize` prop is ignored. To remove the chevron icon, use `chevron={null}`.

To customize chevron styles, use [Styles API](https://mantine.dev/styles/styles-api/) with
[data-rotate](https://mantine.dev/styles/data-attributes/) attribute. It is set when the item
is opened if the `disableChevronRotation` prop is not set.

Example of a custom chevron icon with rotation styles:

#### Example: chevron

```tsx
// Demo.module.css
.chevron {
  &[data-rotate] {
    transform: rotate(45deg);
  }
}

.icon {
  width: 16px;
  height: 16px;
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
