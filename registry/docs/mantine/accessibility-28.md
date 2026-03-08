## Accessibility

`Switch` is a regular `input[type="checkbox"]`. Set `aria-label` if the `Switch` is used without `label` prop:

```tsx
import { Switch } from '@mantine/core';

// -> not ok, input is not labeled
function Bad() {
  return <Switch />;
}

// -> ok, input has aria-label
function Good() {
  return <Switch aria-label="I agree to everything" />;
}

// -> ok, input has associated label
function AlsoGood() {
  return <Switch label="I agree to everything" />;
}
```

#### Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| color | MantineColor | - | Key of theme.colors or any valid CSS color to set input color in checked state |
| description | React.ReactNode | - | Description displayed below the label |
| error | React.ReactNode | - | Error displayed below the label |
| id | string | - | Id used to bind input and label, if not passed, unique id will be generated instead |
| label | React.ReactNode | - | Content of the label associated with the radio |
| labelPosition | "left" | "right" | - | Position of the label relative to the input |
| offLabel | React.ReactNode | - | Inner label when the Switch is in unchecked state |
| onLabel | React.ReactNode | - | Inner label when the Switch is in checked state |
| radius | MantineRadius | number | - | Key of theme.radius or any valid CSS value to set border-radius, |
| rootRef | ForwardedRef | - | Assigns ref of the root element |
| size | MantineSize | (string & {}) | - | Controls size of all elements |
| thumbIcon | React.ReactNode | - | Icon inside the thumb of the switch |
| withThumbIndicator | boolean | - | If set, the indicator will be displayed inside thumb |
| wrapperProps | Omit\<DetailedHTMLProps\<HTMLAttributes, HTMLDivElement>, "ref"> & DataAttributes | - | Props passed down to the root element |

#### Styles API

Switch component supports Styles API. With Styles API, you can customize styles of any inner element. Follow the documentation to learn how to use CSS modules, CSS variables and inline styles to get full control over component styles.

**Switch selectors**

| Selector | Static selector | Description |
|----------|----------------|-------------|
| root | .mantine-Switch-root | Root element |
| track | .mantine-Switch-track | Switch track, contains `thumb` and `trackLabel` |
| trackLabel | .mantine-Switch-trackLabel | Label displayed inside `track` |
| thumb | .mantine-Switch-thumb | Thumb displayed inside `track` |
| input | .mantine-Switch-input | Input element (`input[type="checkbox"]`), hidden by default |
| body | .mantine-Switch-body | Input body, contains all other elements |
| labelWrapper | .mantine-Switch-labelWrapper | Contains `label`, `description` and `error` |
| label | .mantine-Switch-label | Label element |
| description | .mantine-Switch-description | Description displayed below the label |
| error | .mantine-Switch-error | Error message displayed below the label |

**Switch CSS variables**

| Selector | Variable | Description |
|----------|----------|-------------|
| root | --switch-radius | Controls `border-radius` of `track` and `thumb` |
| root | --switch-height | Controls height of `track` |
| root | --switch-width | Controls min-width of `track` |
| root | --switch-thumb-size | Controls width and height of `thumb` |
| root | --switch-label-font-size | Controls `font-size` of `trackLabel` |
| root | --switch-track-label-padding | Controls `trackLabel` offset |
| root | --switch-color | Controls track `background-color` when input is checked |

**Switch data attributes**

| Selector | Attribute | Condition | Value |
|----------|-----------|-----------|-------|
| track | data-error | - | - |

**Switch.Group selectors**

| Selector | Static selector | Description |
|----------|----------------|-------------|
| root | .mantine-SwitchGroup-root | Root element |
| label | .mantine-SwitchGroup-label | Label element |
| required | .mantine-SwitchGroup-required | Required asterisk element, rendered inside label |
| description | .mantine-SwitchGroup-description | Description element |
| error | .mantine-SwitchGroup-error | Error element |

### TableOfContents

Package: @mantine/core
Import: import { TableOfContents } from '@mantine/core';
Description: Renders a list of headings on the page and tracks current heading visible in the viewport

## Usage

Use `TableOfContents` component to display table of contents like
in the sidebar of mantine.dev documentation. The component tracks
scroll position and highlights current heading in the list.

#### Example: usage

```tsx
import { TableOfContents } from '@mantine/core';


function Demo() {
  return (
    <TableOfContents
      
      scrollSpyOptions={{
        selector: '#mdx :is(h1, h2, h3, h4, h5, h6)',
      }}
      getControlProps={({ data }) => ({
        onClick: () => data.getNode().scrollIntoView(),
        children: data.value,
      })}
    />
  );
}
```

## use-scroll-spy options

`TableOfContents` in based on [use-scroll-spy](https://mantine.dev/hooks/use-scroll-spy) hook.
You can pass options down to `use-scroll-spy` hook using `scrollSpyOptions` prop.

Example of customizing selector, depth and value retrieval:

```tsx
import { TableOfContents } from '@mantine/core';

function Demo() {
  return (
    <TableOfContents
      scrollSpyOptions={{
        selector: '#mdx [data-heading]',
        getDepth: (element) => Number(element.getAttribute('data-order')),
        getValue: (element) => element.getAttribute('data-heading') || '',
      }}
    />
  );
}
```

## Pass props to controls

You can pass props down to controls rendered by `TableOfContents` component
with `getControlProps` function. It accepts an object with `active` and `data`
properties and should return props object.

Example of changing controls to links:

```tsx
import { TableOfContents } from '@mantine/core';

function Demo() {
  return (
    <TableOfContents
      getControlProps={({ active, data }) => ({
        component: 'a',
        href: `#${data.id}`,
        style: { color: active ? 'blue' : 'gray' },
        children: data.value,
      })}
    />
  );
}
```

## Initial data

`TableOfContents` retrieves data on mount. If you want to render headings
before `TableOfContents` component is mounted (for example during server-side rendering),
you can pass `initialData` prop with array of headings data. `initialData` is replaced
with actual data on mount.

```tsx
import { TableOfContents } from '@mantine/core';

function Demo() {
  return (
    <TableOfContents
      initialData={[
        { id: '1', value: 'Heading 1', depth: 1 },
        { id: '2', value: 'Heading 2', depth: 2 },
        { id: '3', value: 'Heading 3', depth: 3 },
      ]}
    />
  );
}
```

## Depth offset

Use `minDepthToOffset` prop to set minimum depth at which offset should be applied.
By default, `minDepthToOffset` is `1`, which means that first and second level headings
will not be offset. Set it to `0` to apply offset to all headings.

To control offset value in px, set `depthOffset` prop:

#### Example: depthOffset

```tsx
import { TableOfContents } from '@mantine/core';

function Demo() {
  return (
    <TableOfContents
      minDepthToOffset={0}
      depthOffset={40}
      size="sm"
      scrollSpyOptions={{
        selector: 'h1, h2, h3, h4, h5, h6',
      }}
      getControlProps={({ data }) => ({
        onClick: () => data.getNode().scrollIntoView(),
        children: data.value,
      })}
    />
  );
}
```

## autoContrast

TableOfContents supports autoContrast prop and [theme.autoContrast](https://mantine.dev/theming/theme-object/#autocontrast). If autoContrast is set either on TableOfContents or on theme, content color will be adjusted to have sufficient contrast with the value specified in color prop.

Note that autoContrast feature works only if you use color prop to change background color. autoContrast works only with filled variant.

#### Example: autoContrast

```tsx
import { TableOfContents } from '@mantine/core';

function Demo() {
  return (
    <TableOfContents
      minDepthToOffset={0}
      depthOffset={40}
      size="sm"
      scrollSpyOptions={{
        selector: 'h1, h2, h3, h4, h5, h6',
      }}
      getControlProps={({ data }) => ({
        onClick: () => data.getNode().scrollIntoView(),
        children: data.value,
      })}
    />
  );
}
```

## Styles API

Example of customizing `TableOfContents` with [Styles API](https://mantine.dev/styles/styles-api) and [data-\* attributes](https://mantine.dev/styles/data-attributes):

#### Example: styles

```tsx
// Demo.tsx
import { TableOfContents } from '@mantine/core';
import classes from './Demo.module.css';

function Demo() {
  return (
    <TableOfContents
      size="sm"
      variant="none"
      classNames={classes}
      minDepthToOffset={0}
      depthOffset={40}
      scrollSpyOptions={{
        selector: 'h1, h2, h3, h4, h5, h6',
      }}
      getControlProps={({ data }) => ({
        onClick: () => data.getNode().scrollIntoView(),
        children: data.value,
      })}
    />
  );
}

// Demo.module.css
.control {
  transition: transform 100ms ease;

  &[data-active] {
    background-color: var(--mantine-color-lime-4);
    color: var(--mantine-color-black);
    transform: scale(1.1);
  }
}
```
