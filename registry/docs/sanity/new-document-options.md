# New Document Options

The `newDocumentOptions` API allows you to customize the new document choices users see when they interact with the **Create** buttons in Sanity Studio.

`document.newDocumentOptions` accepts a callback function that returns an array of new document option templates. The callback accepts an array of existing templates, commonly displayed as `prev`, and a context object as arguments. It should return an array of template items.

```typescript
// sanity.config.ts
import {defineConfig} from 'sanity'

export default defineConfig({
  /* ... */
  document: {
    newDocumentOptions: (prev, {currentUser, creationContext}) => {
      /* ... */
      return prev
    }
  }
})
```

> \[!TIP]
> Protip
> It's common to return a subset of existing types by filtering and returning the `prev` array, but you can also add new templates as part of the callback.

## Callback parameters

#### Properties

| Property | Description |
| --- | --- |
| prev | An array containing all available template items. |
| context | Contains details about the context of the new document creation. Useful for comparing details about the current user and where the document creation event was initiated. |

### Context properties

#### Properties

| Property | Description |
| --- | --- |
| creationContext | An object containing the type (global, document, or structure) and the schemaType, if one exists. Useful for determining where the document creation action originated. |
| currentUser | An object containing details about the current user such as id, roles, and email. |

## Usage examples

### Example: Limit document types by role

```typescript
// sanity.config.ts
import {defineConfig} from 'sanity'

// Create an array of templateId strings.
// These can match initial value templates, or document names.
const contributor_templates = [
  'guide',
  'blogPost',
  'caseStudy',
]

export default defineConfig({
  /* ... */
  document: {
    newDocumentOptions: (prev, {currentUser}) => {
    
      // Check if the current user is not an administrator
      if (currentUser?.roles.find((role) => role.name !== 'administrator')) {
        return prev.filter(({templateId}) => contributor_templates.includes(templateId))
      }
      
      // All other users (Administrators) see the full document list
      return prev
    }
  }
})
```

### Example: Hide a specific document type from the global create menu

```typescript
// sanity.config.ts
import {defineConfig} from 'sanity'

export default defineConfig({
  /* ... */
  document: {
    newDocumentOptions: (prev, {currentUser, creationContext}) => {
      if (creationContext.type === 'global') {
        // Hide the creation of "settings" documents if the context is global
        return prev.filter((templateItem) => templateItem.templateId != 'settings')
      }
      return prev
    }
  }
})
```
