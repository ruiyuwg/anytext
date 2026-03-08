## useSelection

The `useSelection` hook provides information on the selected rows in the List view as well as helper methods to simplify selection. The `useSelection` hook returns an object with the following properties:

| Property             | Description                                                                                                                                                               |
| -------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **`count`**          | The number of currently selected rows.                                                                                                                                    |
| **`getQueryParams`** | A function that generates a query string based on the current selection state and optional additional filtering parameters.                                               |
| **`selectAll`**      | An enum value representing the selection range: `'allAvailable'`, `'allInPage'`, `'none'`, and `'some'`. The enum, `SelectAllStatus`, is exported for easier comparisons. |
| **`selected`**       | A map of document id keys and boolean values representing their selection status.                                                                                         |
| **`setSelection`**   | A function that toggles the selection status of a document row.                                                                                                           |
| **`toggleAll`**      | A function that toggles selection for all documents on the current page or selects all available documents when passed `true`.                                            |
| **`totalDocs`**      | The number of total documents in the collection.                                                                                                                          |

**Example:**

```tsx
'use client'
import { useSelection } from '@payloadcms/ui'

const MyComponent: React.FC = () => {
  // highlight-start
  const { count, toggleAll, totalDocs } = useSelection()
  // highlight-end

  return (
    <>
      <span>
        Selected {count} out of {totalDocs} docs!
      </span>
      <button type="button" onClick={() => toggleAll(true)}>
        Toggle All Selections
      </button>
    </>
  )
}
```

## useLocale

In any Custom Component you can get the selected locale object with the `useLocale` hook. `useLocale` gives you the full locale object, consisting of a `label`, `rtl`(right-to-left) property, and then `code`. Here is a simple example:

```tsx
'use client'
import { useLocale } from '@payloadcms/ui'

const Greeting: React.FC = () => {
  // highlight-start
  const locale = useLocale()
  // highlight-end

  const trans = {
    en: 'Hello',
    es: 'Hola',
  }

  return <span> {trans[locale.code]} </span>
}
```

## useAuth

Useful to retrieve info about the currently logged in user as well as methods for interacting with it. It sends back an object with the following properties:

| Property                 | Description                                                                             |
| ------------------------ | --------------------------------------------------------------------------------------- |
| **`user`**               | The currently logged in user                                                            |
| **`logOut`**             | A method to log out the currently logged in user                                        |
| **`refreshCookie`**      | A method to trigger the silent refreshing of a user's auth token                        |
| **`setToken`**           | Set the token of the user, to be decoded and used to reset the user and token in memory |
| **`token`**              | The logged in user's token (useful for creating preview links, etc.)                    |
| **`refreshPermissions`** | Load new permissions (useful when content that affects permissions has been changed)    |
| **`permissions`**        | The permissions of the current user                                                     |

```tsx
'use client'
import { useAuth } from '@payloadcms/ui'
import type { User } from '../payload-types.ts'

const Greeting: React.FC = () => {
  // highlight-start
  const { user } = useAuth<User>()
  // highlight-end

  return <span>Hi, {user.email}!</span>
}
```

## useConfig

Used to retrieve the Payload [Client Config](../custom-components/overview#accessing-the-payload-config).

```tsx
'use client'
import { useConfig } from '@payloadcms/ui'

const MyComponent: React.FC = () => {
  // highlight-start
  const { config } = useConfig()
  // highlight-end

  return <span>{config.serverURL}</span>
}
```

If you need to retrieve a specific collection or global config by its slug, `getEntityConfig` is the most efficient way to do so:

```tsx
'use client'
import { useConfig } from '@payloadcms/ui'

const MyComponent: React.FC = () => {
  // highlight-start
  const { getEntityConfig } = useConfig()
  const mediaConfig = getEntityConfig({ collectionSlug: 'media' })
  // highlight-end

  return (
    <span>The media collection has {mediaConfig.fields.length} fields.</span>
  )
}
```

## useEditDepth

Sends back how many editing levels "deep" the current component is. Edit depth is relevant while adding new documents / editing documents in modal windows and other cases.

```tsx
'use client'
import { useEditDepth } from '@payloadcms/ui'

const MyComponent: React.FC = () => {
  // highlight-start
  const editDepth = useEditDepth()
  // highlight-end

  return <span>My component is {editDepth} levels deep</span>
}
```

## usePreferences

Returns methods to set and get user preferences. More info can be found [here](../admin/preferences).

## useTheme

Returns the currently selected theme (`light`, `dark` or `auto`), a set function to update it and a boolean `autoMode`, used to determine if the theme value should be set automatically based on the user's device preferences.

```tsx
'use client'
import { useTheme } from '@payloadcms/ui'

const MyComponent: React.FC = () => {
  // highlight-start
  const { autoMode, setTheme, theme } = useTheme()
  // highlight-end

  return (
    <>
      <span>
        The current theme is {theme} and autoMode is {autoMode}
      </span>
      <button
        type="button"
        onClick={() =>
          setTheme((prev) => (prev === 'light' ? 'dark' : 'light'))
        }
      >
        Toggle theme
      </button>
    </>
  )
}
```

## useTableColumns

Returns properties and methods to manipulate table columns:
| Property | Description |
| ------------------------ | ------------------------------------------------------------------------------------------ |
| **`columns`** | The current state of columns including their active status and configuration |
| **`LinkedCellOverride`** | A component override for linked cells in the table |
| **`moveColumn`** | A method to reorder columns. Accepts `{ fromIndex: number, toIndex: number }` as arguments |
| **`resetColumnsState`** | A method to reset columns back to their default configuration as defined in the collection config |
| **`setActiveColumns`** | A method to set specific columns to active state while preserving the existing column order. Accepts an array of column names to activate |
| **`toggleColumn`** | A method to toggle a single column's visibility. Accepts a column name as string |

```tsx
'use client'
import { useTableColumns } from '@payloadcms/ui'

const MyComponent: React.FC = () => {
  // highlight-start
  const { setActiveColumns, resetColumnsState } = useTableColumns()

  const activateSpecificColumns = () => {
    // Only activates the id and createdAt columns
    // Other columns retain their current active/inactive state
    // The original column order is preserved
    setActiveColumns(['id', 'createdAt'])
  }

  const resetToDefaults = () => {
    // Resets to the default columns defined in the collection config
    resetColumnsState()
  }
  // highlight-end

  return (
    <div>
      <button type="button" onClick={activateSpecificColumns}>
        Activate Specific Columns
      </button>
      <button type="button" onClick={resetToDefaults}>
        Reset To Defaults
      </button>
    </div>
  )
}
```

## useDocumentEvents

The `useDocumentEvents` hook provides a way of subscribing to cross-document events, such as updates made to nested documents within a drawer. This hook will report document events that are outside the scope of the document currently being edited. This hook provides the following:

| Property               | Description                                                                                                                             |
| ---------------------- | --------------------------------------------------------------------------------------------------------------------------------------- |
| **`mostRecentUpdate`** | An object containing the most recently updated document. It contains the `entitySlug`, `id` (if collection), and `updatedAt` properties |
| **`reportUpdate`**     | A method used to report updates to documents. It accepts the same arguments as the `mostRecentUpdate` property.                         |

**Example:**

```tsx
'use client'
import { useDocumentEvents } from '@payloadcms/ui'

const ListenForUpdates: React.FC = () => {
  const { mostRecentUpdate } = useDocumentEvents()

  return <span>{JSON.stringify(mostRecentUpdate)}</span>
}
```

Right now the `useDocumentEvents` hook only tracks recently updated documents,
but in the future it will track more document-related events as needed, such
as document creation, deletion, etc.

## useStepNav

The `useStepNav` hook provides a way to change the step-nav breadcrumb links in the app header.

| Property         | Description                                                                      |
| ---------------- | -------------------------------------------------------------------------------- |
| **`setStepNav`** | A state setter function which sets the `stepNav` array.                          |
| **`stepNav`**    | A `StepNavItem` array where each `StepNavItem` has a label and optionally a url. |

**Example:**

```tsx
'use client'
import { type StepNavItem, useStepNav } from '@payloadcms/ui'
import { useEffect } from 'react'

export const MySetStepNavComponent: React.FC<{
  nav: StepNavItem[]
}> = ({ nav }) => {
  const { setStepNav } = useStepNav()

  useEffect(() => {
    setStepNav(nav)
  }, [setStepNav, nav])

  return null
}
```
