## Props

### Root

| Prop | Default | Type | Description |
| --- | --- | --- | --- |
| panels | undefined | `PanelData[]` | The size constraints of the panels. |
| orientation | "horizontal" | `'horizontal' \| 'vertical'` | The orientation of the splitter. Can be `horizontal` or `vertical` |
| as | undefined | `React.ElementType` | The underlying element to render. |
| asChild | undefined | `boolean` | Use the provided child element as the default rendered element, combining their props and behavior. |
| unstyled | undefined | `boolean` | Whether to remove the component's style. |
| defaultSize | undefined | `number[]` | The initial size of the panels when rendered.
Use when you don't need to control the size of the panels. |
| id | undefined | `string` | The unique identifier of the machine. |
| ids | undefined | `Partial<{\n  root: string\n  resizeTrigger: (id: string) => string\n  label: (id: string) => string\n  panel: (id: string \| number) => string\n}>` | The ids of the elements in the splitter. Useful for composition. |
| keyboardResizeBy | undefined | `number` | The number of pixels to resize the panel by when the keyboard is used. |
| nonce | undefined | `string` | The nonce for the injected splitter cursor stylesheet. |
| onCollapse | undefined | `(details: ExpandCollapseDetails) => void` | Function called when a panel is collapsed. |
| onExpand | undefined | `(details: ExpandCollapseDetails) => void` | Function called when a panel is expanded. |
| onResize | undefined | `(details: ResizeDetails) => void` | Function called when the splitter is resized. |
| onResizeEnd | undefined | `(details: ResizeEndDetails) => void` | Function called when the splitter resize ends. |
| onResizeStart | undefined | `() => void` | Function called when the splitter resize starts. |
| size | undefined | `number[]` | The controlled size data of the panels |

### Panel

| Prop | Default | Type | Description |
| --- | --- | --- | --- |
| id | undefined | `string` | undefined |
| as | undefined | `React.ElementType` | The underlying element to render. |
| asChild | undefined | `boolean` | Use the provided child element as the default rendered element, combining their props and behavior. |

### ResizeTrigger

| Prop | Default | Type | Description |
| --- | --- | --- | --- |
| id | undefined | `${string}:${string}` | undefined |
| as | undefined | `React.ElementType` | The underlying element to render. |
| asChild | undefined | `boolean` | Use the provided child element as the default rendered element, combining their props and behavior. |
| disabled | undefined | `boolean` | undefined |

## Explorer

Explore the `Splitter` component parts interactively. Click on parts in the
sidebar to highlight them in the preview.
