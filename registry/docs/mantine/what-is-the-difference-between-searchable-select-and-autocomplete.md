# What is the difference between searchable Select and Autocomplete?

Searchable Select and Autocomplete are similar components, but they serve different purposes.

## Searchable select

Use [Select](https://mantine.dev/core/select/) component in the following cases:

- You want to restrict user to a list of predefined options
- You want to display all available options to the user and allow searching through them
- You want to discard user input on blur if option was not selected from the dropdown
- `value` and `label` of the option are not the same, for example, `{ value: 'US', label: 'United States' }`

For example, you can use [Select](https://mantine.dev/core/select/) to select country from the list of all countries:

#### Example: SelectCountry

```tsx
import { Select } from '@mantine/core';

function Demo() {
  return (
    <Select
      label="Your country"
      placeholder="Select country"
      searchable
      data={[
        { value: 'ca', label: 'Canada' },
        { value: 'br', label: 'Brazil' },
        { value: 'in', label: 'India' },
        { value: 'mx', label: 'Mexico' },
        { value: 'au', label: 'Australia' },
        { value: 'kr', label: 'South Korea' },
        { value: 'id', label: 'Indonesia' },
        { value: 'tr', label: 'Turkey' },
        { value: 'nl', label: 'Netherlands' },
        { value: 'ch', label: 'Switzerland' },
        { value: 'sa', label: 'Saudi Arabia' },
        { value: 'se', label: 'Sweden' },
        { value: 'pl', label: 'Poland' },
        { value: 'ar', label: 'Argentina' },
        { value: 'be', label: 'Belgium' },
        { value: 'th', label: 'Thailand' },
        { value: 'at', label: 'Austria' },
        { value: 'ae', label: 'United Arab Emirates' },
        { value: 'hk', label: 'Hong Kong' },
        { value: 'dk', label: 'Denmark' },
        { value: 'sg', label: 'Singapore' },
        { value: 'my', label: 'Malaysia' },
        { value: 'no', label: 'Norway' },
        { value: 'ng', label: 'Nigeria' },
        { value: 'cz', label: 'Czech Republic' },
        { value: 'za', label: 'South Africa' },
        { value: 'ro', label: 'Romania' },
      ]}
    />
  );
}
```

In the example above, the user can select country from the list of all countries, but cannot enter any other value.

## Autocomplete

Use [Autocomplete](https://mantine.dev/core/autocomplete/) component in the following cases:

- You want to allow user to enter any value
- You want to display suggestions to the user based on the input value
- You want to preserve user input on blur if option was not selected from the dropdown
- `value` and `label` of the option are the same, for example, `'United States'`

For example, you can use [Autocomplete](https://mantine.dev/core/autocomplete/) to ask user to enter city:

#### Example: AutocompleteCity

```tsx
import { Autocomplete } from '@mantine/core';

function Demo() {
  return (
    <Autocomplete
      label="Your city"
      placeholder="Your city"
      data={[
        'New York',
        'Los Angeles',
        'Chicago',
        'Houston',
        'Phoenix',
        'Philadelphia',
        'San Antonio',
        'San Diego',
        'Dallas',
        'San Jose',
      ]}
    />
  );
}
```

In the example above, suggestions are based on the input value,
but the user can enter any value and it will be preserved on blur.

# How can I add fuzzy search to Select component?

Learn how to integrate third-party fuzzy search libraries with Mantine Select component

## Options filtering

[Select](https://mantine.dev/core/select) and other components based on
[Combobox](https://mantine.dev/core/combobox) component support custom
options filtering with `filter` prop. You can use it to integrate
third-party fuzzy search libraries like [fuse.js](https://fusejs.io/)
or customize filtering logic to better suit your needs.

Example of a custom filter function that matches options by words instead of letters sequence:

```tsx
import { Select, ComboboxItem, OptionsFilter } from '@mantine/core';

const optionsFilter: OptionsFilter = ({ options, search }) => {
  const splittedSearch = search.toLowerCase().trim().split(' ');
  return (options as ComboboxItem[]).filter((option) => {
    const words = option.label.toLowerCase().trim().split(' ');
    return splittedSearch.every((searchWord) => words.some((word) => word.includes(searchWord)));
  });
};

function Demo() {
  return (
    <Select
      label="Your country"
      placeholder="Pick value"
      data={['Great Britain', 'Russian Federation', 'United States']}
      filter={optionsFilter}
      searchable
    />
  );
}
```

## Example with fuse.js

Example of adding fuzzy search with [fuse.js](https://fusejs.io/) to Select component:

#### Example: SelectFuzzy

```tsx
import Fuse from 'fuse.js';
import { Select } from '@mantine/core';
import { data } from './data.json';

function Demo() {
  return (
    <Select
      label="Your country"
      placeholder="Select country"
      searchable
      data={data}
      filter={({ options, search }) => {
        const fuse = new Fuse(options, { keys: ['label', 'value'] });
        return search ? fuse.search(search).map((item) => item.item) : options;
      }}
    />
  );
}
```
