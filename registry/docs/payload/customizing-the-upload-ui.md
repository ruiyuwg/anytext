## Customizing the Upload UI

You can completely customize the upload interface in the Admin Panel by swapping in your own React components. This allows you to modify how files are uploaded, add custom fields, integrate custom actions, or enhance the upload experience.

### Upload Component Configuration

To customize the upload UI for an upload-enabled collection, use the `admin.components.edit.Upload` property in your [Collection Config](../configuration/collections):

```ts
import type { CollectionConfig } from 'payload'

export const Media: CollectionConfig = {
  slug: 'media',
  upload: true,
  admin: {
    components: {
      edit: {
        Upload: '/components/CustomUpload#CustomUploadServer',
      },
    },
  },
  fields: [
    {
      name: 'alt',
      type: 'text',
    },
  ],
}
```

### Building Custom Upload Components

Custom upload components must integrate with Payload's form system to work correctly. The recommended approach is to use Payload's built-in `<Upload>` component from `@payloadcms/ui` and wrap it with additional functionality.

You should not use a simple `<input type="file" />` element
alone. It will not connect to Payload's upload API or form state, resulting
in errors like "400 Bad Request - no file uploaded." Always use Payload's
`<Upload>` component or properly integrate with form hooks.

#### Basic Example

Here's a minimal example showing how to create a custom upload component:

**Server Component** (`/components/CustomUpload.tsx`):

```tsx
import React from 'react'
import type {
  PayloadServerReactComponent,
  SanitizedCollectionConfig,
} from 'payload'
import { CustomUploadClient } from './CustomUpload.client'

export const CustomUploadServer: PayloadServerReactComponent<
  SanitizedCollectionConfig['admin']['components']['edit']['Upload']
> = (props) => {
  return (
    <div>
      <h2>Custom Upload Interface</h2>
      <CustomUploadClient {...props} />
    </div>
  )
}
```

**Client Component** (`/components/CustomUpload.client.tsx`):

```tsx
'use client'
import React from 'react'
import { Upload, useDocumentInfo } from '@payloadcms/ui'

export const CustomUploadClient = () => {
  const { collectionSlug, docConfig, initialState } = useDocumentInfo()

  return (
    <Upload
      collectionSlug={collectionSlug}
      initialState={initialState}
      uploadConfig={'upload' in docConfig ? docConfig.upload : undefined}
    />
  )
}
```

#### Advanced Example with Custom Actions

You can add custom actions, drawers, and fields to enhance the upload experience:

```tsx
'use client'
import React from 'react'
import {
  Drawer,
  DrawerToggler,
  TextField,
  Upload,
  useDocumentInfo,
} from '@payloadcms/ui'

const customDrawerSlug = 'custom-upload-drawer'

const CustomDrawer = () => {
  return (
    <Drawer slug={customDrawerSlug}>
      <h2>Custom Upload Options</h2>
      <TextField
        field={{
          name: 'customField',
          label: 'Custom Field',
          type: 'text',
        }}
        path="customField"
      />
    </Drawer>
  )
}

const CustomDrawerToggler = () => {
  return (
    <DrawerToggler slug={customDrawerSlug}>
      <button type="button">Open Custom Options</button>
    </DrawerToggler>
  )
}

export const CustomUploadClient = () => {
  const { collectionSlug, docConfig, initialState } = useDocumentInfo()

  return (
    <div>
      <CustomDrawer />
      <Upload
        collectionSlug={collectionSlug}
        customActions={[<CustomDrawerToggler key="custom-drawer" />]}
        initialState={initialState}
        uploadConfig={'upload' in docConfig ? docConfig.upload : undefined}
      />
    </div>
  )
}
```

### Available Hooks and Components

When building custom upload components, you have access to several useful hooks and components from `@payloadcms/ui`:

| Hook / Component    | Description                                                           |
| ------------------- | --------------------------------------------------------------------- |
| `useDocumentInfo()` | Get collection slug, document config, and initial state               |
| `useField()`        | Access and manipulate form field state                                |
| `useBulkUpload()`   | Access bulk upload context                                            |
| `<Upload>`          | Main upload component with file selection, drag-and-drop, and preview |
| `<Drawer>`          | Modal drawer for additional UI                                        |
| `<DrawerToggler>`   | Button to open/close drawers                                          |
| `<TextField>`, etc. | Form field components                                                 |

### Custom Upload Fields vs. Custom Upload Collections

It's important to understand the difference between these two customization approaches:

| Approach                            | Configuration                               | Use Case                                                                                                                |
| ----------------------------------- | ------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------- |
| **Upload Collection Customization** | `admin.components.edit.Upload`              | Customize the UI when editing documents in an upload-enabled collection (e.g., the Media collection edit view)          |
| **Upload Field Customization**      | `admin.components.Field` on an upload field | Customize the field that references uploads in other collections (e.g., a "Featured Image" field on a Posts collection) |

**Example of Upload Field Customization:**

```ts
import type { CollectionConfig } from 'payload'

export const Posts: CollectionConfig = {
  slug: 'posts',
  fields: [
    {
      name: 'featuredImage',
      type: 'upload',
      relationTo: 'media',
      admin: {
        components: {
          Field: '/components/CustomUploadField',
        },
      },
    },
  ],
}
```

For more details on customizing fields, see [Field Components](../fields/overview#custom-components).

### Component Export Syntax

Custom components are referenced using file paths. Both default exports and named exports are supported:

```ts
// Named export with hash syntax
Upload: '/components/CustomUpload#CustomUploadServer'

// Default export (no hash needed)
Upload: '/components/CustomUpload'

// Alternative: using exportName property
Upload: {
  path: '/components/CustomUpload',
  exportName: 'CustomUploadServer',
}
```

For more details on component paths, see [Custom Components](../custom-components/overview#component-paths).
