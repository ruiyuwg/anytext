## useDocumentInfo

The `useDocumentInfo` hook provides information about the current document being edited, including the following:

| Property                           | Description                                                                                                                                      |
| ---------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------ |
| **`action`**                       | The URL attached to the action attribute on the underlying form element, which specifies where to send the form data when the form is submitted. |
| **`apiURL`**                       | The API URL for the current document.                                                                                                            |
| **`collectionSlug`**               | The slug of the collection if editing a collection document.                                                                                     |
| **`currentEditor`**                | The user currently editing the document.                                                                                                         |
| **`docConfig`**                    | Either the Collection or Global config of the document, depending on what is being edited.                                                       |
| **`docPermissions`**               | The current document's permissions. Fallback to collection permissions when no id is present.                                                    |
| **`documentIsLocked`**             | Whether the document is currently locked by another user. [More details](./locked-documents).                                                    |
| **`getDocPermissions`**            | Method to retrieve document-level permissions.                                                                                                   |
| **`getDocPreferences`**            | Method to retrieve document-level user preferences. [More details](./preferences).                                                               |
| **`globalSlug`**                   | The slug of the global if editing a global document.                                                                                             |
| **`hasPublishedDoc`**              | Whether the document has a published version.                                                                                                    |
| **`hasPublishPermission`**         | Whether the current user has permission to publish the document.                                                                                 |
| **`hasSavePermission`**            | Whether the current user has permission to save the document.                                                                                    |
| **`id`**                           | If the doc is a collection, its ID will be returned.                                                                                             |
| **`incrementVersionCount`**        | Method to increment the version count of the document.                                                                                           |
| **`initialData`**                  | The initial data of the document.                                                                                                                |
| **`isEditing`**                    | Whether the document is being edited (as opposed to created).                                                                                    |
| **`isInitializing`**               | Whether the document info is still initializing.                                                                                                 |
| **`isLocked`**                     | Whether the document is locked. [More details](./locked-documents).                                                                              |
| **`lastUpdateTime`**               | Timestamp of the last update to the document.                                                                                                    |
| **`mostRecentVersionIsAutosaved`** | Whether the most recent version is an autosaved version.                                                                                         |
| **`preferencesKey`**               | The `preferences` key to use when interacting with document-level user preferences. [More details](./preferences).                               |
| **`data`**                         | The saved data of the document.                                                                                                                  |
| **`setDocFieldPreferences`**       | Method to set preferences for a specific field. [More details](./preferences).                                                                   |
| **`setDocumentTitle`**             | Method to set the document title.                                                                                                                |
| **`setHasPublishedDoc`**           | Method to update whether the document has been published.                                                                                        |
| **`title`**                        | The title of the document.                                                                                                                       |
| **`unlockDocument`**               | Method to unlock a document. [More details](./locked-documents).                                                                                 |
| **`unpublishedVersionCount`**      | The number of unpublished versions of the document.                                                                                              |
| **`updateDocumentEditor`**         | Method to update who is currently editing the document. [More details](./locked-documents).                                                      |
| **`updateSavedDocumentData`**      | Method to update the saved document data.                                                                                                        |
| **`uploadStatus`**                 | Status of any uploads in progress ('idle', 'uploading', or 'failed').                                                                            |
| **`versionCount`**                 | The current version count of the document.                                                                                                       |

**Example:**

```tsx
'use client'
import { useDocumentInfo } from '@payloadcms/ui'

const LinkFromCategoryToPosts: React.FC = () => {
  // highlight-start
  const { id } = useDocumentInfo()
  // highlight-end

  // id will be undefined on the create form
  if (!id) {
    return null
  }

  return (
    <a
      href={`/admin/collections/posts?where[or][0][and][0][category][in][0]=[${id}]`}
    >
      View posts
    </a>
  )
}
```

## useListQuery

The `useListQuery` hook is used to subscribe to the data, current query, and other properties used within the List View. You can use this hook within any Custom Component rendered within the List View.

```tsx
'use client'
import { useListQuery } from '@payloadcms/ui'

const MyComponent: React.FC = () => {
  // highlight-start
  const { data, query } = useListQuery()
  // highlight-end

  // ...
}
```

The `useListQuery` hook returns an object with the following properties:

| Property                  | Description                                                                            |
| ------------------------- | -------------------------------------------------------------------------------------- |
| **`data`**                | The data that is being displayed in the List View.                                     |
| **`defaultLimit`**        | The default limit of items to display in the List View.                                |
| **`defaultSort`**         | The default sort order of items in the List View.                                      |
| **`handlePageChange`**    | A method to handle page changes in the List View.                                      |
| **`handlePerPageChange`** | A method to handle per page changes in the List View.                                  |
| **`handleSearchChange`**  | A method to handle search changes in the List View.                                    |
| **`handleSortChange`**    | A method to handle sort changes in the List View.                                      |
| **`handleWhereChange`**   | A method to handle where changes in the List View.                                     |
| **`modified`**            | Whether the query has been changed from its [Query Preset](../query-presets/overview). |
| **`query`**               | The current query that is being used to fetch the data in the List View.               |
