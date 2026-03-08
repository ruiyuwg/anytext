## use-pagination hook

If you need more flexibility `@mantine/hooks` package exports [use-pagination](https://mantine.dev/hooks/use-pagination/) hook,
you can use it to create custom pagination components.

#### Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| autoContrast | boolean | - | If set, adjusts text color based on background color for filled variant |
| boundaries | number | - | Number of elements visible on the left/right edges |
| color | MantineColor | - | Key of theme.colors, active item color |
| defaultValue | number | - | Active page for uncontrolled component, must be an integer in \[0, total] interval |
| disabled | boolean | - | Disables all controls, applies disabled styles |
| dotsIcon | PaginationIcon | - | Dots icon component |
| firstIcon | PaginationIcon | - | First control icon component |
| gap | MantineSpacing | - | Key of theme.spacing, gap between controls |
| getControlProps | (control: "next" | "previous" | "first" | "last") => Record\<string, any> | - | Props passed down to next/previous/first/last controls |
| getItemProps | (page: number) => Record\<string, any> | - | Additional props passed down to controls |
| hideWithOnePage | boolean | - | If set, the pagination is hidden when only one page is available (total={1}) |
| lastIcon | PaginationIcon | - | Last control icon component |
| nextIcon | PaginationIcon | - | Next control icon component |
| onChange | (value: number) => void | - | Called when page changes |
| onFirstPage | () => void | - | Called when first page control is clicked |
| onLastPage | () => void | - | Called when last page control is clicked |
| onNextPage | () => void | - | Called when next page control is clicked |
| onPreviousPage | () => void | - | Called when previous page control is clicked |
| previousIcon | PaginationIcon | - | Previous control icon component |
| radius | MantineRadius | number | - | Key of theme.radius or any valid CSS value to set border-radius, numbers are converted to rem |
| siblings | number | - | Number of siblings displayed on the left/right side of the selected page |
| size | number | MantineSize | (string & {}) | - | height and min-width of controls |
| total | number | required | Total number of pages, must be an integer |
| value | number | - | Active page for controlled component, must be an integer in \[0, total] interval |
| withControls | boolean | - | If set, next/previous controls are displayed |
| withEdges | boolean | - | If set, first/last controls are displayed |
| withPages | boolean | - | If set to false, pages controls are hidden |

#### Styles API

Pagination component supports Styles API. With Styles API, you can customize styles of any inner element. Follow the documentation to learn how to use CSS modules, CSS variables and inline styles to get full control over component styles.

**Pagination selectors**

| Selector | Static selector | Description |
|----------|----------------|-------------|
| root | .mantine-Pagination-root | Root element |
| control | .mantine-Pagination-control | Control element: items, next/previous, first/last buttons |
| dots | .mantine-Pagination-dots | Dots icon wrapper |

**Pagination CSS variables**

| Selector | Variable | Description |
|----------|----------|-------------|
| root | --pagination-active-bg | Active control `background-color` |
| root | --pagination-active-color | Active control `color` |
| root | --pagination-control-fz | Controls control `font-size` |
| root | --pagination-control-radius | Controls control `border-radius` |
| root | --pagination-control-size | Controls control `min-width` and `height` |

**Pagination data attributes**

| Selector | Attribute | Condition | Value |
|----------|-----------|-----------|-------|
| control | data-active | Control is active | - |
| control | data-disabled | Control is disabled | - |

### Paper

Package: @mantine/core
Import: import { Paper } from '@mantine/core';
Description: Renders white or dark background depending on color scheme

## Usage

#### Example: usage

```tsx
import { Text, Paper } from '@mantine/core';

function Demo() {
  return (
    <Paper p="xl">
      <Text>Paper is the most basic ui component</Text>
      <Text>
        Use it to create cards, dropdowns, modals and other components that require background
        with shadow
      </Text>
    </Paper>
  );
}
```
