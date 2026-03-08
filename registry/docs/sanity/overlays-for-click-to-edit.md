# Overlays for click-to-edit

Overlays are a core part of Sanity's [Visual Editing](https://www.sanity.io/docs/visual-editing/introduction-to-visual-editing) that enables interactive editing experiences directly in your front end. They range from simple click-to-edit functionality to [advanced drag-and-drop page building capabilities](https://www.sanity.io/docs/visual-editing/enabling-drag-and-drop).

![Screenshot of a Sanity Studio interface displaying a blog post titled ‘Visual Editing.’ The post description reads, ‘Your one stop shop for everything about Visual Editing and the Presentation tool in Sanity Studio.’ The editor on the right includes fields for the title and description, along with a warning indicating that the document is used on all pages. The post preview includes an image of a desk with a plant and lamp, and a subheading for ‘The difficult second post’ dated November 18, 2024.](https://cdn.sanity.io/images/3do82whm/next/5b8a4d329a6f44cbff5f884f7c7113f121958019-1459x1110.png)

## Understanding Overlays

Overlays serve two main purposes in Visual Editing:

- **Click-to-edit**: Highlights content areas and takes you directly to the corresponding field in the Studio
- **Page building**: Enables drag-and-drop interactions for adding, moving, and removing sections when supported by your framework

[Custom overlay components](https://www.sanity.io/docs/visual-editing/custom-overlay-components)

[Drag-and-drop page building](https://www.sanity.io/docs/visual-editing/enabling-drag-and-drop)

### How Overlays Work

For overlays to function, they need to:

- Identify Content: Locate elements in your DOM that contain Sanity content
- Map to Studio: Create correct references to documents and fields in the Studio
- Enable Interactions: Support the appropriate level of interactivity based on your framework

## How to enable Overlays

### Automatically with Stega Encoding

The simplest approach uses [Stega encoding](https://www.sanity.io/docs/visual-editing/stega), which automatically adds invisible [Content Source Maps](https://www.sanity.io/docs/visual-editing/content-source-maps) to text content:

```typescript
// Stega is usually enabled at the client level
const client = createClient({
  // ...other config
  stega: {
    enabled: true
  }
})

```

> \[!WARNING]
> Stega can break string-compare functionality
> Stega inserts hidden characters into your content, and can cause problems when comparing strings. While this only displays when previewing content, it can cause unexpected behavior. You can prevent this by cleaning any values before comparison with the [stegaClean utility](https://reference.sanity.io/_sanity/client/stega/stegaClean/).

### Manually with Data Attributes

For non-text content or custom interactions, use data attributes:

```typescript
import { createDataAttribute } from "@sanity/visual-editing"

function Section({ documentId, documentType, sections }) {
  const attr = createDataAttribute({ 
    id: documentId, 
    type: documentType,
    path: 'sections'
  })

  return (
    <div data-sanity={attr().toString()}>
      {sections.map(section => (
        <div
          key={section._key}
          data-sanity={attr(`sections[_key=="${section._key}"]`).toString()}
        >
          {section.content}
        </div>
      ))}
    </div>
  )
}

```

### Framework-Specific Loading

When using framework-specific loaders, you get a pre-configured encoding helper. Here is how it can look with the React loader:

```typescript
export default function Page() {
  const { data, encodeDataAttribute } = useQuery(query)
  
  return (
    <div data-sanity={encodeDataAttribute(['sections'])}>
      {/* Your content */}
    </div>
  )
}

```

## Overlay Edit Groups

Use the `data-sanity-edit-group` attribute to group multiple overlays onto a single visual element:

```
import { createDataAttribute } from "@sanity/visual-editing"

function Section({ 
  documentId, 
  documentType, 
  backgroundColor, 
  borderColor 
}) {
  const attr = createDataAttribute({ 
    id: documentId, 
    type: documentType,
  })
  
  return (
    <div data-sanity-edit-group style={{backgroundColor, borderColor}}>
      <div data-sanity={attr('backgroundColor').toString()} />
      <div data-sanity={attr('borderColor').toString()} />
    </div>
  )
}
```

Edit groups will ignore text-based nodes to keep the click-to-edit functionality on text content.

## Progressive Enhancement

Overlays follow a progressive enhancement model based on your framework's capabilities:

1. **Basic (All frameworks)** - Click-to-edit functionality

- Content highlighting
- Direct Studio navigation

2. **Advanced (React/React-based frameworks)** - Full page building experience

- Drag-and-drop section management
- Real-time content updates

## Framework Support

- **Advanced support**: Next.js App Router and other React-based frameworks
- **Basic Support**: Any framework with server-side rendering
- **Coming soon**: Advanced support for Vue.js and Svelte frameworks

## Implementation Tips

- Start with Stega encoding for text-based content
- Use [createDataAttribute](https://reference.sanity.io/_sanity/visual-editing/index/createDataAttribute-1/) for non-text content and custom interactions
- Consider framework-specific loaders for enhanced capabilities
- Test overlay behavior both in the Presentation tool

## Note on Vercel Integration

When using Vercel's Visual Editing:

- Overlays appear automatically in preview builds if Stega is enabled
- No additional configuration needed if Stega is enabled because the overlays are powered by the Vercel toolbar
- Still supports manual overlay configuration for iframe contexts
