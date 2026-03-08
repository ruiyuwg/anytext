# Create Studio edit intent links

Edit intent links are URLs that open specific documents and fields in Sanity Studio. They are useful for building custom editorial interfaces or adding edit buttons to your preview environments.

When combined with [Content Source Maps](https://www.sanity.io/docs/visual-editing/content-source-maps) or [steganography](https://www.sanity.io/docs/visual-editing/stega), you can automatically generate these URLs based on source map data for fully automated visual editing experiences. This article covers the manual approach for cases where you need direct control over the links.

## Edit intent URL format

The basic format for an edit intent URL is:

**URL format**

```text
https://your-studio.sanity.studio/intent/edit/id=DOCUMENT_ID;type=DOCUMENT_TYPE;path=FIELD_PATH
```

## Constructing edit URLs programmatically

You can construct edit intent URLs programmatically. The following helper function builds URLs for documents, specific fields, and nested field paths:

**edit-intent.js**

```javascript
// Helper function to create edit intent URLs
function createEditUrl({
  studioUrl,
  documentId,
  documentType,
  path = '',
}) {
  const params = new URLSearchParams({
    id: documentId,
    type: documentType,
  })
  
  if (path) {
    params.set('path', path)
  }
  
  return `${studioUrl}/intent/edit?${params}`
}

// Create link to edit a document
const editPostUrl = createEditUrl({
  studioUrl: 'https://your-studio.sanity.studio',
  documentId: 'post-123',
  documentType: 'post',
})
// https://your-studio.sanity.studio/intent/edit?id=post-123&type=post

// Create link to edit a specific field
const editTitleUrl = createEditUrl({
  studioUrl: 'https://your-studio.sanity.studio',
  documentId: 'post-123',
  documentType: 'post',
  path: 'title',
})
// https://your-studio.sanity.studio/intent/edit?id=post-123&type=post&path=title

// Create link to edit nested field
const editAuthorNameUrl = createEditUrl({
  studioUrl: 'https://your-studio.sanity.studio',
  documentId: 'post-123',
  documentType: 'post',
  path: 'author.name',
})
```

## Adding edit buttons to a preview interface

You can use edit intent URLs to add edit buttons to your preview interface. Here are examples for document-level and field-level edit links:

**PostPreview.jsx**

```jsx
// React component with edit button
function PostPreview({post}) {
  const editUrl = createEditUrl({
    studioUrl: process.env.NEXT_PUBLIC_STUDIO_URL,
    documentId: post._id,
    documentType: post._type,
  })
  
  return (
    <article>
      <header>
        <h1>{post.title}</h1>
        <a
          href={editUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="edit-button"
        >
          Edit in Studio
        </a>
      </header>
      <div>{post.body}</div>
    </article>
  )
}

// Field-level edit links
function EditableField({value, documentId, documentType, fieldPath}) {
  const editUrl = createEditUrl({
    studioUrl: process.env.NEXT_PUBLIC_STUDIO_URL,
    documentId,
    documentType,
    path: fieldPath,
  })
  
  return (
    <div className="editable-field">
      <span>{value}</span>
      <a href={editUrl} className="edit-icon" title="Edit this field">
        ✏️
      </a>
    </div>
  )
}
```

## Related resources

[Content Source Maps](https://www.sanity.io/docs/visual-editing/content-source-maps)

[Stega-encoding](https://www.sanity.io/docs/visual-editing/stega)

[Visual Editing with Sanity](https://www.sanity.io/docs/visual-editing/introduction-to-visual-editing)
