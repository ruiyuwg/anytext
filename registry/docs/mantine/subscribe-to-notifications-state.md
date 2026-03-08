## Subscribe to notifications state

You can subscribe to notifications state changes with `useNotifications` hook.
The hook returns an object with `notifications` and `queue` arrays. `notifications`
array contains all notifications that are currently displayed, `queue` contains
notifications that are waiting to be displayed.

#### Example: store

```tsx
function Demo() {
  const [counter, { increment }] = useCounter();
  const notificationsStore = useNotifications();

  const showNotification = () => {
    notifications.show({
      title: `Notification ${counter}`,
      message: 'Most notifications are added to queue',
    });

    increment();
  };

  return (
    <>
      <Button onClick={showNotification} mb="md">
        Show notification
      </Button>

      <Text>Notifications state</Text>
      <Code block>{JSON.stringify(notificationsStore.notifications, null, 2)}</Code>

      <Text mt="md">Notifications queue</Text>
      <Code block>{JSON.stringify(notificationsStore.queue, null, 2)}</Code>
    </>
  );
}
```

#### Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| autoClose | number | false | - | Auto close timeout for all notifications in ms, false to disable auto close, can be overwritten for individual notifications in notifications.show function |
| containerWidth | string | number | - | Notification width, cannot exceed 100% |
| limit | number | - | Maximum number of notifications displayed at a time, other new notifications will be added to queue |
| notificationMaxHeight | string | number | - | Notification max-height, used for transitions |
| portalProps | BasePortalProps | - | Props passed down to the Portal component |
| position | NotificationPosition | - | Notifications default position |
| store | NotificationsStore | - | Store for notifications state, can be used to create multiple instances of notifications system in your application |
| transitionDuration | number | - | Notification transition duration in ms |
| withinPortal | boolean | - | Determines whether notifications container should be rendered inside Portal |
| zIndex | string | number | - | Notifications container z-index |

#### Styles API

Notifications component supports Styles API. With Styles API, you can customize styles of any inner element. Follow the documentation to learn how to use CSS modules, CSS variables and inline styles to get full control over component styles.

**Notifications selectors**

| Selector | Static selector | Description |
|----------|----------------|-------------|
| root | .mantine-Notifications-root | Notifications container, contains all notifications |
| notification | .mantine-Notifications-notification | Single notification |

**Notifications CSS variables**

| Selector | Variable | Description |
|----------|----------|-------------|
| root | --notifications-container-width | Controls notifications container `max-width` |
| root | --notifications-z-index | Controls notifications container `z-index` |

### NavigationProgress

Package: @mantine/nprogress
Import: import { NavigationProgress } from '@mantine/nprogress';
Description: Navigation progress bar

## Installation

```bash
yarn add @mantine/nprogress
```

```bash
npm install @mantine/nprogress
```

After installation import package styles at the root of your application:

```tsx
import '@mantine/core/styles.css';
// ‼️ import nprogress styles after core package styles
import '@mantine/nprogress/styles.css';
```

## Setup NavigationProgress

Render `NavigationProgress` anywhere in your app within [MantineProvider](https://mantine.dev/theming/mantine-provider/):

```tsx
import { MantineProvider } from '@mantine/core';
import { NavigationProgress } from '@mantine/nprogress';

function Demo() {
  return (
    <MantineProvider>
      <NavigationProgress />
      {/* Your app here */}
    </MantineProvider>
  );
}
```

## Usage

### Spotlight

Package: @mantine/spotlight
Import: import { Spotlight } from '@mantine/spotlight';
Description: Command center for your application

## Installation

```bash
yarn add @mantine/spotlight
```

```bash
npm install @mantine/spotlight
```

After installation import package styles at the root of your application:

```tsx
import '@mantine/core/styles.css';
// ‼️ import spotlight styles after core package styles
import '@mantine/spotlight/styles.css';
```

## Usage

`Spotlight` component can be used as a search or as a command center of your application.
It is used as a search on mantine.dev website, you can trigger it with `Ctrl + K` shortcut.
`Spotlight` is based on [Modal](https://mantine.dev/core/modal) component and supports most of its props.

#### Example: usage

```tsx
import { Button } from '@mantine/core';
import { Spotlight, SpotlightActionData, spotlight } from '@mantine/spotlight';
import { IconHome, IconDashboard, IconFileText, IconSearch } from '@tabler/icons-react';

const actions: SpotlightActionData[] = [
  {
    id: 'home',
    label: 'Home',
    description: 'Get to home page',
    onClick: () => console.log('Home'),
    leftSection: <IconHome size={24} stroke={1.5} />,
  },
  {
    id: 'dashboard',
    label: 'Dashboard',
    description: 'Get full information about current system status',
    onClick: () => console.log('Dashboard'),
    leftSection: <IconDashboard size={24} stroke={1.5} />,
  },
  {
    id: 'documentation',
    label: 'Documentation',
    description: 'Visit documentation to lean more about all features',
    onClick: () => console.log('Documentation'),
    leftSection: <IconFileText size={24} stroke={1.5} />,
  },
];

function Demo() {
  return (
    <>
      <Button onClick={spotlight.open}>Open spotlight</Button>
      <Spotlight
        actions={actions}
        nothingFound="Nothing found..."
        highlightQuery
        searchProps={{
          leftSection: <IconSearch size={20} stroke={1.5} />,
          placeholder: 'Search...',
        }}
      />
    </>
  );
}
```

## Actions

`@mantine/spotlight` package exports an object with actions that can be used to control the spotlight:

```tsx
import { spotlight } from '@mantine/spotlight';

spotlight.open(); // -> opens spotlight
spotlight.close(); // -> closes spotlight
spotlight.toggle(); // -> toggles spotlight opened state
```

These actions can be passed to event listeners or used anywhere in your application
(not limited to React components):

```tsx
import { Button } from '@mantine/core';
import { spotlight } from '@mantine/spotlight';

function Demo() {
  return <Button onClick={spotlight.open}>Open spotlight</Button>;
}
```

You can also import actions directly from the `@mantine/spotlight` package, if you prefer this syntax:

```tsx
import {
  closeSpotlight,
  openSpotlight,
  toggleSpotlight,
} from '@mantine/spotlight';

openSpotlight(); // same as spotlight.open()
closeSpotlight(); // same as spotlight.close()
toggleSpotlight(); // same as spotlight.toggle()
```

## Spotlight store

`spotlight` object documented above uses the default store, it works fine if you have only one spotlight
in your application. In case you need multiple spotlights, you need to create your own store for each of them:

```tsx
import { Button } from '@mantine/core';
import { createSpotlight, Spotlight } from '@mantine/spotlight';

// You can import `firstSpotlight` and `secondSpotlight` anywhere
// in your application and use `open`, `close` and `toggle` actions
// to control spotlight the same way as with default `spotlight` object
export const [firstStore, firstSpotlight] = createSpotlight();
export const [secondStore, secondSpotlight] = createSpotlight();

function Demo() {
  return (
    <>
      <Button onClick={firstSpotlight.open}>
        Open first spotlight
      </Button>
      <Button onClick={secondSpotlight.open}>
        Open second spotlight
      </Button>

      <Spotlight store={firstStore} actions={[]} />
      <Spotlight store={secondStore} actions={[]} />
    </>
  );
}
```

## Keyboard shortcuts

`Spotlight` uses [use-hotkeys](https://mantine.dev/hooks/use-hotkeys) hook to handle keyboard shortcuts.
By default, `Ctrl + K` and `Cmd + K` shortcuts are used to open spotlight, you can change them
with `shortcut` prop:

```tsx
import { Spotlight } from '@mantine/spotlight';

function SingleShortcut() {
  return <Spotlight shortcut="mod + J" actions={[]} />;
}

// Same as on mantine.dev
function MultipleShortcuts() {
  return (
    <Spotlight shortcut={['mod + K', 'mod + P', '/']} actions={[]} />
  );
}

// Disable shortcut
function NoShortcut() {
  return <Spotlight shortcut={null} actions={[]} />;
}
```

## Limit prop

Use `limit` prop to limit the maximum number of actions that can be displayed at a time.
Usually, 5–7 actions is a good number. `limit` prop is crucial for performance in case
you have a lot of actions, it will prevent the spotlight from rendering all of them at once.

The example below renders 3000 actions, but only 7 of them are displayed at a time:

#### Example: limit

```tsx
import { Button } from '@mantine/core';
import { Spotlight, SpotlightActionData, spotlight } from '@mantine/spotlight';
import { IconSearch } from '@tabler/icons-react';

const actions: SpotlightActionData[] = Array(3000)
  .fill(0)
  .map((_, index) => ({
    id: `action-${index}`,
    label: `Action ${index}`,
    description: `Action ${index} description`,
  }));

function Demo() {
  return (
    <>
      <Button onClick={spotlight.open}>Open spotlight</Button>
      <Spotlight
        actions={actions}
        nothingFound="Nothing found..."
        highlightQuery
        limit={7}
        searchProps={{
          leftSection: <IconSearch size={20} stroke={1.5} />,
          placeholder: 'Search...',
        }}
      />
    </>
  );
}
```

## Scrollable actions list

By default, `Spotlight` actions list is not scrollable. If you have a lot of actions that
you need to display at a time, set `scrollable` and `maxHeight` props. Note that there are
caveats with both approaches:

- When the `scrollable` prop is not set, actions list height is not limited and the spotlight
  body will grow to fit all actions. This can result in a very long spotlight body that will
  overflow the viewport. To prevent this, use `limit` prop to define the maximum number of actions
  that can be displayed at a time. Usually, 5–7 actions is a good number.
- When the `scrollable` prop is set, actions list height will always equal to the value of `maxHeight` prop
  (it will not shrink if there are not enough actions to fill the space). When there are more
  actions than can fit into the list, it will become scrollable. Scrolling logic is handled
  by [ScrollArea](https://mantine.dev/core/scroll-area) component.

In other words, if you want the actions list to shrink, do not set `scrollable` prop and use `limit`
prop. If you want the actions list to always have a fixed height, set `scrollable` and `maxHeight` props.

#### Example: scrollable

```tsx
import { Button } from '@mantine/core';
import { Spotlight, SpotlightActionData, spotlight } from '@mantine/spotlight';
import { IconSearch } from '@tabler/icons-react';

const actions: SpotlightActionData[] = Array(100)
  .fill(0)
  .map((_, index) => ({
    id: `action-${index}`,
    label: `Action ${index}`,
    description: `Action ${index} description`,
  }));

function Demo() {
  return (
    <>
      <Button onClick={spotlight.open}>Open spotlight</Button>
      <Spotlight
        actions={actions}
        nothingFound="Nothing found..."
        highlightQuery
        scrollable
        maxHeight={350}
        searchProps={{
          leftSection: <IconSearch size={20} stroke={1.5} />,
          placeholder: 'Search...',
        }}
      />
    </>
  );
}
```

## Actions groups

`Spotlight` supports actions groups, you can use them to group actions by category:

#### Example: groups

```tsx
import { Button } from '@mantine/core';
import { Spotlight, SpotlightActionData, SpotlightActionGroupData, spotlight } from '@mantine/spotlight';
import { IconSearch } from '@tabler/icons-react';

const actions: (SpotlightActionGroupData | SpotlightActionData)[] = [
  {
    group: 'Pages',
    actions: [
      { id: 'home', label: 'Home page', description: 'Where we present the product' },
      { id: 'careers', label: 'Careers page', description: 'Where we list open positions' },
      { id: 'about-us', label: 'About us page', description: 'Where we tell what we do' },
    ],
  },

  {
    group: 'Apps',
    actions: [
      { id: 'svg-compressor', label: 'SVG compressor', description: 'Compress SVG images' },
      { id: 'base64', label: 'Base 64 converter', description: 'Convert data to base 64 format' },
      { id: 'fake-data', label: 'Fake data generator', description: 'Lorem ipsum generator' },
    ],
  },
];

function Demo() {
  return (
    <>
      <Button onClick={spotlight.open}>Open spotlight</Button>
      <Spotlight
        actions={actions}
        nothingFound="Nothing found..."
        highlightQuery
        searchProps={{
          leftSection: <IconSearch size={20} stroke={1.5} />,
          placeholder: 'Search...',
        }}
      />
    </>
  );
}
```
