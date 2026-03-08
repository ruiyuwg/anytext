## Polymorphic component

Overlay is a polymorphic component – its default root element is div, but it can be changed to any other element or component with component prop:

```tsx
import { Overlay } from '@mantine/core';

function Demo() {
  return <Overlay component="a" />;
}
```

You can also use components in component prop, for example, Next.js Link:

```tsx
import Link from 'next/link';
import { Overlay } from '@mantine/core';

function Demo() {
  return <Overlay component={Link} href="/" />;
}
```

**Polymorphic components with TypeScript**

Note that polymorphic components props types are different from regular components – they do not extend HTML element props of the default element. For example, OverlayProps does not extend React.ComponentPropsWithoutRef<'div'> although div is the default element.

If you want to create a wrapper for a polymorphic component that is not polymorphic (does not support component prop), then your component props interface should extend HTML element props.

#### Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| backgroundOpacity | number | - | Overlay background-color opacity 0–1, ignored when gradient prop is set |
| blur | string | number | - | Overlay background blur |
| center | boolean | - | Centers content inside the overlay |
| children | React.ReactNode | - | Content inside overlay |
| color | BackgroundColor | - | Overlay background-color |
| fixed | boolean | - | Changes position to fixed |
| gradient | string | - | Changes overlay to gradient. If set, color prop is ignored. |
| radius | MantineRadius | number | - | Key of theme.radius or any valid CSS value to set border-radius |
| zIndex | string | number | - | Overlay z-index |

#### Styles API

Overlay component supports Styles API. With Styles API, you can customize styles of any inner element. Follow the documentation to learn how to use CSS modules, CSS variables and inline styles to get full control over component styles.

**Overlay selectors**

| Selector | Static selector | Description |
|----------|----------------|-------------|
| root | .mantine-Overlay-root | Root element |

**Overlay CSS variables**

| Selector | Variable | Description |
|----------|----------|-------------|
| root | --overlay-bg | Controls `background-color` |
| root | --overlay-filter | Controls `backdrop-filter` |
| root | --overlay-radius | Controls `border-radius` |
| root | --overlay-z-index | Controls `z-index` |

**Overlay data attributes**

| Selector | Attribute | Condition | Value |
|----------|-----------|-----------|-------|
| root | data-center | - | - |
| root | data-fixed | - | - |

### CorePackage

Package: @mantine/core
Import: import { CorePackage } from '@mantine/core';

# Mantine Core components

[![npm](https://img.shields.io/npm/dm/@mantine/core)](https://www.npmjs.com/package/@mantine/core)

[@mantine/core](https://www.npmjs.com/package/@mantine/core) package
provides essential components: buttons, inputs, modals, typography and many others.
`@mantine/core` package is used internally in most of other `@mantine/*` packages –
it is required to be installed in your project to use Mantine components.

## Installation

```bash
yarn add @mantine/hooks @mantine/core
```

```bash
npm install @mantine/hooks @mantine/core
```

After installation import package styles at the root of your application:

```tsx
import '@mantine/core/styles.css';
```

## Usage

Follow the [getting started guide](https://mantine.dev/getting-started) to learn how to
complete Mantine setup in your project. Example of using [Stepper](https://mantine.dev/core/stepper) component:

#### Example: usage

```tsx
import { useState } from 'react';
import { Stepper, Button, Group } from '@mantine/core';

function Demo() {
  const [active, setActive] = useState(1);
  const nextStep = () => setActive((current) => (current < 3 ? current + 1 : current));
  const prevStep = () => setActive((current) => (current > 0 ? current - 1 : current));

  return (
    <>
      <Stepper active={active} onStepClick={setActive}>
        <Stepper.Step label="First step" description="Create an account">
          Step 1 content: Create an account
        </Stepper.Step>
        <Stepper.Step label="Second step" description="Verify email">
          Step 2 content: Verify email
        </Stepper.Step>
        <Stepper.Step label="Final step" description="Get full access">
          Step 3 content: Get full access
        </Stepper.Step>
        <Stepper.Completed>
          Completed, click back button to get to previous step
        </Stepper.Completed>
      </Stepper>

      <Group justify="center" mt="xl">
        <Button variant="default" onClick={prevStep}>Back</Button>
        <Button onClick={nextStep}>Next step</Button>
      </Group>
    </>
  );
}
```

## License

MIT

### Pagination

Package: @mantine/core
Import: import { Pagination } from '@mantine/core';
Description: Display active page and navigate between multiple pages

## Usage

#### Example: configurator

```tsx
import { Pagination } from '@mantine/core';

function Demo() {
  return <Pagination total={10} />;
}
```

## Example with chunked content

#### Example: withContent

```tsx
import { useState } from 'react';
import { randomId } from '@mantine/hooks';
import { Pagination, Text } from '@mantine/core';

function chunk<T>(array: T[], size: number): T[][] {
  if (!array.length) {
    return [];
  }
  const head = array.slice(0, size);
  const tail = array.slice(size);
  return [head, ...chunk(tail, size)];
}

const data = chunk(
  Array(30)
    .fill(0)
    .map((_, index) => ({ id: index, name: randomId() })),
  5
);

function Demo() {
  const [activePage, setPage] = useState(1);
  const items = data[activePage - 1].map((item) => (
    <Text key={item.id}>
      id: {item.id}, name: {item.name}
    </Text>
  ));

  return (
    <>
      {items}
      <Pagination total={data.length} value={activePage} onChange={setPage} mt="sm" />
    </>
  );
}
```

## Controlled

To control component state provide `value` and `onChange` props:

```tsx
import { useState } from 'react';
import { Pagination } from '@mantine/core';

function Demo() {
  const [activePage, setPage] = useState(1);
  return (
    <Pagination value={activePage} onChange={setPage} total={10} />
  );
}
```

## Siblings

Control number of active item siblings with `siblings` prop:

#### Example: siblings

```tsx
import { Text, Pagination } from '@mantine/core';

function Demo() {
  return (
    <>
      <Text mb="xs">1 sibling (default)</Text>
      <Pagination total={20} siblings={1} defaultValue={10} />

      <Text mb="xs" mt="xl">2 siblings</Text>
      <Pagination total={20} siblings={2} defaultValue={10} />

      <Text mb="xs" mt="xl">3 siblings</Text>
      <Pagination total={20} siblings={3} defaultValue={10} />
    </>
  );
}
```

## Boundaries

Control number of items displayed after previous and before next buttons with `boundaries` prop:

#### Example: boundaries

```tsx
import { Text, Pagination } from '@mantine/core';

function Demo() {
  return (
    <>
      <Text mb="xs">1 boundary (default)</Text>
      <Pagination total={20} boundaries={1} defaultValue={10} />

      <Text mt="xl" mb="xs">2 boundaries</Text>
      <Pagination total={20} boundaries={2} defaultValue={10} />

      <Text mt="xl" mb="xs">3 boundaries</Text>
      <Pagination total={20} boundaries={3} defaultValue={10} />
    </>
  );
}
```

## Hide pages controls

Set `withPages={false}` to hide pages controls:

#### Example: withPages

```tsx
import { useState } from 'react';
import { Group, Pagination, Text } from '@mantine/core';

const limit = 10;
const total = 145;
const totalPages = Math.ceil(total / limit);

function Demo() {
  const [page, setPage] = useState(1);
  const message = `Showing ${limit * (page - 1) + 1} – ${Math.min(total, limit * page)} of ${total}`;

  return (
    <Group justify="flex-end">
      <Text size="sm">{message}</Text>
      <Pagination total={totalPages} value={page} onChange={setPage} withPages={false} />
    </Group>
  );
}
```

#### Example: stylesApi

```tsx
import { Pagination } from '@mantine/core';

function Demo() {
  return <Pagination total={10} />;
}
```

## Compound components

You can use the following compound components to have full control over the `Pagination` rendering:

- `Pagination.Root` – context provider
- `Pagination.Items` – items list
- `Pagination.Next` – next control
- `Pagination.Previous` – previous control
- `Pagination.First` – first control
- `Pagination.Last` – last control

#### Example: composition

```tsx
import { Group, Pagination } from '@mantine/core';

function Demo() {
  return (
    <Pagination.Root total={10}>
      <Group gap={5} justify="center">
        <Pagination.First />
        <Pagination.Previous />
        <Pagination.Items />
        <Pagination.Next />
        <Pagination.Last />
      </Group>
    </Pagination.Root>
  );
}
```

## Controls as links

#### Example: links

```tsx
import { Group, Pagination } from '@mantine/core';

function Demo() {
  return (
    <>
      {/* Regular pagination */}
      <Pagination
        total={10}
        withEdges
        getItemProps={(page) => ({
          component: 'a',
          href: `#page-${page}`,
        })}
        getControlProps={(control) => {
          if (control === 'first') {
            return { component: 'a', href: '#page-0' };
          }

          if (control === 'last') {
            return { component: 'a', href: '#page-10' };
          }

          if (control === 'next') {
            return { component: 'a', href: '#page-2' };
          }

          if (control === 'previous') {
            return { component: 'a', href: '#page-1' };
          }

          return {};
        }}
      />

      {/* Compound pagination */}
      <Pagination.Root
        total={10}
        getItemProps={(page) => ({
          component: 'a',
          href: `#page-${page}`,
        })}
      >
        <Group gap={7} mt="xl">
          <Pagination.First component="a" href="#page-0" />
          <Pagination.Previous component="a" href="#page-1" />
          <Pagination.Items />
          <Pagination.Next component="a" href="#page-2" />
          <Pagination.Last component="a" href="#page-10" />
        </Group>
      </Pagination.Root>
    </>
  );
}
```

## Change icons

#### Example: icons

```tsx
import { Group, Pagination } from '@mantine/core';
import {
  IconArrowBarToRight,
  IconArrowBarToLeft,
  IconArrowLeft,
  IconArrowRight,
  IconGripHorizontal,
} from '@tabler/icons-react';

function Demo() {
  return (
    <>
      {/* Regular pagination */}
      <Pagination
        total={10}
        withEdges
        nextIcon={IconArrowRight}
        previousIcon={IconArrowLeft}
        firstIcon={IconArrowBarToLeft}
        lastIcon={IconArrowBarToRight}
        dotsIcon={IconGripHorizontal}
      />

      {/* Compound pagination */}
      <Pagination.Root total={10}>
        <Group gap={7} mt="xl">
          <Pagination.First icon={IconArrowBarToLeft} />
          <Pagination.Previous icon={IconArrowLeft} />
          <Pagination.Items dotsIcon={IconGripHorizontal} />
          <Pagination.Next icon={IconArrowRight} />
          <Pagination.Last icon={IconArrowBarToRight} />
        </Group>
      </Pagination.Root>
    </>
  );
}
```

## autoContrast

Pagination supports autoContrast prop and [theme.autoContrast](https://mantine.dev/theming/theme-object/#autocontrast). If autoContrast is set either on Pagination or on theme, content color will be adjusted to have sufficient contrast with the value specified in color prop.

Note that autoContrast feature works only if you use color prop to change background color. autoContrast works only with filled variant.

#### Example: autoContrast

```tsx
import { Pagination, Text } from '@mantine/core';

function Demo() {
  return (
    <>
      <Text>autoContrast: off</Text>
      <Pagination total={10} color="lime.4" />

      <Text mt="md">autoContrast: on</Text>
      <Pagination total={10} autoContrast color="lime.4" />
    </>
  );
}
```
