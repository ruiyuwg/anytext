## Combobox store

Combobox store is an object with the following properties:

```tsx
interface ComboboxStore {
  /** Current dropdown opened state */
  dropdownOpened: boolean;

  /** Opens dropdown */
  openDropdown(eventSource?: 'keyboard' | 'mouse' | 'unknown'): void;

  /** Closes dropdown */
  closeDropdown(eventSource?: 'keyboard' | 'mouse' | 'unknown'): void;

  /** Toggles dropdown opened state */
  toggleDropdown(
    eventSource?: 'keyboard' | 'mouse' | 'unknown'
  ): void;

  /** Selected option index */
  selectedOptionIndex: number;

  /** Selects `Combobox.Option` by index */
  selectOption(index: number): void;

  /** Selects first `Combobox.Option` with `active` prop.
   *  If there are no such options, the function does nothing.
   */
  selectActiveOption(): string | null;

  /** Selects first `Combobox.Option` that is not disabled.
   *  If there are no such options, the function does nothing.
   * */
  selectFirstOption(): string | null;

  /** Selects next `Combobox.Option` that is not disabled.
   *  If the current option is the last one, the function selects first option, if `loop` is true.
   */
  selectNextOption(): string | null;

  /** Selects previous `Combobox.Option` that is not disabled.
   *  If the current option is the first one, the function selects last option, if `loop` is true.
   * */
  selectPreviousOption(): string | null;

  /** Resets selected option index to -1, removes `data-combobox-selected` from selected option */
  resetSelectedOption(): void;

  /** Triggers `onClick` event of selected option.
   *  If there is no selected option, the function does nothing.
   */
  clickSelectedOption(): void;

  /** Updates selected option index to currently selected or active option.
   *  The function is required to be used with searchable components to update selected option index
   *  when options list changes based on search query.
   */
  updateSelectedOptionIndex(target?: 'active' | 'selected'): void;

  /** List id, used for `aria-*` attributes */
  listId: string | null;

  /** Sets list id */
  setListId(id: string): void;

  /** Ref of `Combobox.Search` input */
  searchRef: React.RefObject<HTMLInputElement | null>;

  /** Moves focus to `Combobox.Search` input */
  focusSearchInput(): void;

  /** Ref of the target element */
  targetRef: React.RefObject<HTMLElement | null>;

  /** Moves focus to the target element */
  focusTarget(): void;
}
```

You can import `ComboboxStore` type from `@mantine/core` package:

```tsx
import type { ComboboxStore } from '@mantine/core';
```

## useCombobox handlers

Combobox store handlers can be used to control `Combobox` state.
For example, to open the dropdown, call `openDropdown` handler:

```tsx
import { Button, Combobox, useCombobox } from '@mantine/core';

function Demo() {
  const combobox = useCombobox();

  return (
    <Combobox>
      <Combobox.Target>
        <Button onClick={() => combobox.openDropdown()}>
          Open dropdown
        </Button>
      </Combobox.Target>

      {/* Your implementation */}
    </Combobox>
  );
}
```

You can use store handlers in `useCombobox` options. For example, you can
call `selectFirstOption` when the dropdown is opened and `resetSelectedOption`
when it is closed:

```tsx
import { Combobox, useCombobox } from '@mantine/core';

function Demo() {
  const combobox = useCombobox({
    onDropdownOpen: () => combobox.selectFirstOption(),
    onDropdownClose: () => combobox.resetSelectedOption(),
  });

  return (
    <Combobox store={combobox}>{/* Your implementation */}</Combobox>
  );
}
```
