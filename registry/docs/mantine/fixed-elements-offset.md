## Fixed elements offset

`Spotlight` component uses [react-remove-scroll](https://github.com/theKashey/react-remove-scroll)
package to lock scroll. To properly size these `elements` add a `className` to them ([documentation](https://github.com/theKashey/react-remove-scroll#positionfixed-elements)):

```tsx
import { RemoveScroll } from '@mantine/core';

function Demo() {
  return (
    <>
      <div className={RemoveScroll.classNames.fullWidth}>
        width: 100%
      </div>
      <div className={RemoveScroll.classNames.zeroRight}>
        right: 0
      </div>
    </>
  );
}
```

#### Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| actions | SpotlightActions\[] | required | Actions data, passed down to Spotlight.Action component |
| centered | boolean | - | If set, the modal is centered vertically |
| children | React.ReactNode | - | Modal content |
| clearQueryOnClose | boolean | - | Determines whether the search query should be cleared when the spotlight is closed |
| closeOnActionTrigger | boolean | - | Determines whether spotlight should be closed when one of the actions is triggered |
| closeOnClickOutside | boolean | - | If set, the modal/drawer is closed when user clicks on the overlay |
| closeOnEscape | boolean | - | If set, onClose is called when user presses the escape key |
| disabled | boolean | - | If set, spotlight will not be rendered |
| filter | SpotlightFilterFunction | - | Function to filter actions data based on search query, by default actions are filtered by title, description and keywords |
| forceOpened | boolean | - | Forces opened state, useful for tests |
| fullScreen | boolean | - | If set, the modal takes the entire screen |
| highlightQuery | boolean | - | Determines whether search query should be highlighted in action label |
| id | string | - | Id used to connect modal/drawer with body and title |
| keepMounted | boolean | - | If set modal/drawer is not unmounted from the DOM when hidden. display: none styles are applied instead. |
| limit | number | - | Maximum number of actions displayed at a time |
| lockScroll | boolean | - | If set, scroll is locked when opened={true} |
| maxHeight | MaxHeight | - | Spotlight content max-height. Ignored unless scrollable prop is set. |
| nothingFound | React.ReactNode | - | Message displayed when none of the actions match given filter |
| onEnterTransitionEnd | () => void | - | Called when enter transition ends |
| onExitTransitionEnd | () => void | - | Called when exit transition ends |
| onQueryChange | (query: string) => void | - | Called when query changes |
| onSpotlightClose | () => void | - | Called when spotlight closes |
| onSpotlightOpen | () => void | - | Called when spotlight opens |
| overlayProps | ModalBaseOverlayProps | - | Props passed down to the Overlay component, use to configure opacity, background-color, styles and other properties |
| padding | MantineSpacing | - | Key of theme.spacing or any valid CSS value to set content, header and footer padding |
| portalProps | BasePortalProps | - | Props passed down to the Portal component when withinPortal is set |
| query | string | - | Controlled Spotlight search query |
| radius | MantineRadius | number | - | Key of theme.radius or any valid CSS value to set border-radius |
| removeScrollProps | RemoveScrollProps | - | Props passed down to react-remove-scroll, can be used to customize scroll lock behavior |
| returnFocus | boolean | - | If set, focus is returned to the last active element when onClose is called |
| scrollAreaComponent | ScrollAreaComponent | - | Scroll area component |
| scrollAreaProps | Partial | - | Props passed down to the ScrollArea component |
| scrollable | boolean | - | Determines whether the actions list should be scrollable. If not set, maxHeight is ignored |
| searchProps | SpotlightSearchProps | - | Props passed down to the Spotlight.Search |
| shadow | MantineShadow | - | Key of theme.shadows or any valid CSS box-shadow value |
| shortcut | string | string\[] | null | - | Keyboard shortcut or a list of shortcuts to trigger spotlight |
| size | number | MantineSize | (string & {}) | - | Controls width of the content area |
| stackId | string | - | Id of the modal in the Modal.Stack |
| store | SpotlightStore | - | Spotlight store, can be used to create multiple instances of spotlight |
| tagsToIgnore | string\[] | - | A list of tags which when focused will be ignored by shortcut |
| title | React.ReactNode | - | Modal title |
| transitionProps | TransitionProps | - | Props added to the Transition component that used to animate overlay and body, use to configure duration and animation type, { duration: 200, transition: 'fade-down' } by default |
| trapFocus | boolean | - | If set, focus is trapped within the modal/drawer |
| triggerOnContentEditable | boolean | - | Determines whether shortcut should trigger based in contentEditable |
| withOverlay | boolean | - | If set, the overlay is rendered |
| withinPortal | boolean | - | If set, the component is rendered inside Portal |
| xOffset | MarginLeft | - | Left/right modal offset |
| yOffset | MarginTop | - | Top/bottom modal offset |
| zIndex | string | number | - | z-index CSS property of the root element |

#### Styles API

Spotlight component supports Styles API. With Styles API, you can customize styles of any inner element. Follow the documentation to learn how to use CSS modules, CSS variables and inline styles to get full control over component styles.

**Spotlight selectors**

| Selector | Static selector | Description |
|----------|----------------|-------------|
| root | .mantine-Spotlight-root | Root element |
| inner | .mantine-Spotlight-inner | Element used to center modal, has fixed position, takes entire screen |
| content | .mantine-Spotlight-content | `Modal.Content` root element |
| header | .mantine-Spotlight-header | Contains title and close button |
| overlay | .mantine-Spotlight-overlay | Overlay displayed under the `Modal.Content` |
| title | .mantine-Spotlight-title | Modal title (h2 tag), displayed in the header |
| body | .mantine-Spotlight-body | Modal body, displayed after header |
| close | .mantine-Spotlight-close | Close button |
| search | .mantine-Spotlight-search | Search input (`Spotlight.Search`) |
| actionsList | .mantine-Spotlight-actionsList | Actions list (`Spotlight.ActionsList`) |
| empty | .mantine-Spotlight-empty | Empty state (`Spotlight.Empty`) |
| footer | .mantine-Spotlight-footer | Footer (`Spotlight.Footer`) |
| action | .mantine-Spotlight-action | Action (`Spotlight.Action`) |
| actionBody | .mantine-Spotlight-actionBody | Body of the action, contains label and description |
| actionLabel | .mantine-Spotlight-actionLabel | `Spotlight.Action` label |
| actionDescription | .mantine-Spotlight-actionDescription | `Spotlight.Action` description |
| actionSection | .mantine-Spotlight-actionSection | `Spotlight.Action` left and right sections |
| actionsGroup | .mantine-Spotlight-actionsGroup | `Spotlight.ActionsGroup` root element |

**Spotlight data attributes**

| Selector | Attribute | Condition | Value |
|----------|-----------|-----------|-------|
| action | data-selected | Action is selected with up/down keys | - |
| actionSection | data-position | - | Section position: left or right |
| actionSection | data-dimmed | - | - |

### Rich text editor

Package: @mantine/tiptap
Import: import { Rich text editor } from '@mantine/tiptap';
Description: Tiptap based rich text editor

## Installation

Install with yarn:

```bash
yarn add @mantine/tiptap @mantine/core @mantine/hooks @tiptap/react @tiptap/pm @tiptap/extension-link @tiptap/starter-kit
```

```bash
npm install @mantine/tiptap @mantine/core @mantine/hooks @tiptap/react @tiptap/pm @tiptap/extension-link @tiptap/starter-kit
```

After installation import package styles at the root of your application:

```tsx
import '@mantine/core/styles.css';
// ‼️ import tiptap styles after core package styles
import '@mantine/tiptap/styles.css';
```

## TipTap editor

`@mantine/tiptap` provides a UI for [Tiptap](https://tiptap.dev/). `RichTextEditor` component
works with [Editor](https://tiptap.dev/api/editor) instance of tiptap.
This means that you have full control over the editor [state and configuration](https://tiptap.dev/guide/configuration)
with [useEditor hook](https://tiptap.dev/installation/react).

In other words, `RichTextEditor` component does not manage state for you,
controls just execute operations on the `Editor` instance. If you want to
implement something that is related to state or component value (for example, controlled mode, value transforms to HTML/Markdown),
you should look for documentation on [tiptap.dev](https://tiptap.dev/) website.

## Usage

## Subtle variant

`variant="subtle"` removes borders from the controls groups, makes controls
larger and reduces spacing of the toolbar:

## Controlled

To control editor state, create a wrapper component and pass `onChange` handler
to `useEditor` hook:

```tsx
import { useEditor } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import { RichTextEditor as MantineRichTextEditor } from '@mantine/tiptap';

interface RichTextEditorProps {
  value: string;
  onChange: (value: string) => void;
}

export function RichTextEditor({
  value,
  onChange,
}: RichTextEditorProps) {
  const editor = useEditor({
    extensions: [StarterKit],
    content: value,
    onUpdate: ({ editor }) => {
      onChange(editor.getHTML());
    },
  });

  return (
    <MantineRichTextEditor editor={editor}>
      <MantineRichTextEditor.Toolbar>
        <MantineRichTextEditor.ControlsGroup>
          <MantineRichTextEditor.Bold />
          <MantineRichTextEditor.Italic />
        </MantineRichTextEditor.ControlsGroup>
      </MantineRichTextEditor.Toolbar>

      <MantineRichTextEditor.Content />
    </MantineRichTextEditor>
  );
}
```

## Controls and extensions

Some controls require installation of additional [Tiptap extensions](https://tiptap.dev/extensions).
For example, if you want to use `RichTextEditor.Superscript` control, you will need to install `@tiptap/extension-superscript` package:

```bash
yarn add @tiptap/extension-superscript
```

```bash
npm install @tiptap/extension-superscript
```

Included with `@tiptap/starter-kit` (should be installed by default):

- `RichTextEditor.H1`
- `RichTextEditor.H2`
- `RichTextEditor.H3`
- `RichTextEditor.H4`
- `RichTextEditor.H5`
- `RichTextEditor.H6`
- `RichTextEditor.BulletList`
- `RichTextEditor.OrderedList`
- `RichTextEditor.Bold`
- `RichTextEditor.Italic`
- `RichTextEditor.Strikethrough`
- `RichTextEditor.ClearFormatting`
- `RichTextEditor.Blockquote`
- `RichTextEditor.Code`
- `RichTextEditor.CodeBlock`
- `RichTextEditor.Hr`
- `RichTextEditor.Undo`
- `RichTextEditor.Redo`
- `RichTextEditor.Underline`
- `RichTextEditor.Unlink`

Controls that require [@tiptap/extension-text-align](https://www.npmjs.com/package/@tiptap/extension-text-align) extension:

- `RichTextEditor.AlignLeft`
- `RichTextEditor.AlignRight`
- `RichTextEditor.AlignCenter`
- `RichTextEditor.AlignJustify`

Controls that require [@tiptap/extension-color](https://www.npmjs.com/package/@tiptap/extension-color) and [@tiptap/extension-text-style](https://www.npmjs.com/package/@tiptap/extension-text-style) extensions:

- `RichTextEditor.ColorPicker`
- `RichTextEditor.Color`
- `RichTextEditor.UnsetColor`

Other controls with required extensions:

- `RichTextEditor.Superscript` requires [@tiptap/extension-superscript](https://www.npmjs.com/package/@tiptap/extension-superscript)
- `RichTextEditor.Subscript` requires [@tiptap/extension-subscript](https://www.npmjs.com/package/@tiptap/extension-subscript)
- `RichTextEditor.Highlight` requires [@tiptap/extension-highlight](https://www.npmjs.com/package/@tiptap/extension-highlight)

## Placeholder

To use placeholder you will need to install [@tiptap/extension-placeholder](https://www.npmjs.com/package/@tiptap/extension-placeholder) package:

```bash
yarn add @tiptap/extension-placeholder
```

```bash
npm install @tiptap/extension-placeholder
```

## Link extension

`@mantine/tiptap` provides custom `Link` extension that is required to be used instead of
`@tiptap/extension-link` in order for `Ctrl + K` keyboard shortcut to work:

```tsx
// Use Link extension exported from the @mantine/tiptap package
import { useEditor } from '@tiptap/react';
import { Link, RichTextEditor } from '@mantine/tiptap';

function Demo() {
  const editor = useEditor({
    extensions: [
      Link,
      // ... other extensions
    ],
  });

  return (
    <RichTextEditor editor={editor}>
      <RichTextEditor.Content />
    </RichTextEditor>
  );
}
```

## Text color

To use text color you will need to install additional packages:

```bash
yarn add @tiptap/extension-color @tiptap/extension-text-style
```

```bash
npm install @tiptap/extension-color @tiptap/extension-text-style
```

You can use the following controls to change text color:

- `RichTextEditor.ColorPicker` – allows to pick colors from given predefined color swatches and with [ColorPicker](https://mantine.dev/core/color-picker/) component
- `RichTextEditor.Color` – allows to apply given color with one click
- `RichTextEditor.UnsetColor` – clears color styles

## Code highlight

To use code highlight you will need to install additional packages:

```bash
yarn add lowlight @tiptap/extension-code-block-lowlight
```

```bash
npm install lowlight @tiptap/extension-code-block-lowlight
```

## Source code mode

You can use the following control to see and edit source code of editor content:

- `RichTextEditor.SourceCode` – allows switching on/off source code mode

## Tasks

To use tasks you will need to install additional packages:

```bash
yarn add @tiptap/extension-task-item @tiptap/extension-task-list
```

```bash
npm install @tiptap/extension-task-item @tiptap/extension-task-list
```

## Typography styles

By default, `RichTextEditor` renders content with [Typography](https://mantine.dev/core/typography/) and some additional styles.
You can disable these styles by setting `withTypographyStyles={false}`:

```tsx
import { useEditor } from '@tiptap/react';
import { RichTextEditor } from '@mantine/tiptap';

function Demo() {
  const editor = useEditor({
    extensions: [
      // ... your extensions
    ],
  });

  return (
    <RichTextEditor editor={editor} withTypographyStyles={false}>
      <RichTextEditor.Content />
    </RichTextEditor>
  );
}
```

Then you will be able to add your own styles either with [global styles](https://mantine.dev/styles/global-styles/)
or with [Styles API](https://mantine.dev/styles/styles-api/):

## Bubble menu

You can use [BubbleMenu](https://tiptap.dev/api/extensions/bubble-menu) component
with any `RichTextEditor` controls. Bubble menu will appear near a selection of text:

## Floating menu

You can use [FloatingMenu](https://tiptap.dev/api/extensions/floating-menu) component
with any `RichTextEditor` controls. Floating menu will appear in an empty line:

## Sticky toolbar

Set `sticky` prop on `RichTextEditor.Toolbar` component to make toolbar sticky,
control `top` property with `stickyOffset`. For example, on mantine.dev documentation
website there is a header with `var(--docs-header-height)` height, in this case we will need to
set `stickyOffset="var(--docs-header-height)"` to make sticky position correctly with fixed positioned element.

## Editor context

Use `useRichTextEditorContext` hook to get [Editor](https://tiptap.dev/api/editor) from
the context. This hook can be used to create custom control or run any operations supported
by the Tiptap [editor API](https://tiptap.dev/api/editor).

```tsx
import { Button } from '@mantine/core';
import { useRichTextEditorContext } from '@mantine/tiptap';

function Demo() {
  const { editor } = useRichTextEditorContext();
  return (
    <Button
      onClick={() => editor?.chain().focus().toggleBold().run()}
    >
      Make bold
    </Button>
  );
}
```

## Custom controls

Use `RichTextEditor.Control` component to create custom controls. It supports all
props supported by `button` element and has `active` prop to indicate active state.
Note that you will need to set `aria-label` attribute to make control visible for screen readers.

## Change icons

You can change icon of control by setting `icon` prop. It accepts a component
that must handle `size` prop:
