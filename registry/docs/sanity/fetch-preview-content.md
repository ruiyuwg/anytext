# Fetch preview content

To get started with Visual Editing in a specific framework, we recommend following the step-by-step guides in the left navigation. Return to this article if you want to understand the underlying concepts more deeply.

## Understanding Visual Editing Features

Visual Editing enables content editors to use [the Presentation tool](https://www.sanity.io/docs/visual-editing/configuring-the-presentation-tool) to see and interact with their draft content directly in the context of your front-end application. With Sanity, Visual Editing follows a progressive enhancement model, offering three main layers of functionality:

- **Live Preview**: See draft content updates in real-time within the Studio
- **Click-to-Edit**: Interactive overlays that help editors find and edit the right fields
- **Page Building**: Advanced capabilities for adding, moving, and removing content sections

The features available to you depend on your framework choice and how you implement content fetching.

> \[!TIP]
> Protip
> You can start with a basic implementation that provides core preview functionality, then enhance it with more interactive features as needed.

[Visual Editing – Introduction](https://www.sanity.io/docs/visual-editing/introduction-to-visual-editing)

[The Presentation tool](https://www.sanity.io/docs/visual-editing/configuring-the-presentation-tool)

[Overlays](https://www.sanity.io/docs/visual-editing/visual-editing-overlays)

[Custom overlay components](https://www.sanity.io/docs/visual-editing/custom-overlay-components)

## Server-side fetching (basic implementation)

Server-side fetching provides the foundation for Visual Editing with minimal setup:

- Supports live preview and click-to-edit features
- Works with any framework that supports server-side rendering
- Refreshes content within seconds of changes
- Requires minimal configuration

### How it works

1. When an content creator opens the Presentation tool, it creates a preview URL that included a secret that determine whether or not to activate draft mode.

2. When your application receives a request with draft mode enabled:

- It validates the preview session
- Fetches the latest draft content from Content Lake with [Stega-encoded Content Source Maps](https://www.sanity.io/docs/visual-editing/visual-editing-overlays)
- Renders the page with this draft content on the server

3. When content changes occur in the Studio:

- It signals to the [](https://reference.sanity.io/_sanity/visual-editing/react/VisualEditing/) component (or a custom client-side script) in your frontend that new content is available
- It refreshes the page, thus triggering a rerender on the server
- The page refreshes to show the updated content

4. Click-to-edit overlays work by:

- Draft content is appended with [Stega-encoded Content Source Maps](https://www.sanity.io/docs/visual-editing/visual-editing-overlays)
- Content not supported by automatic Stega-encoding can be manually mapped with helper functions that generates the correct data attributes
- The `<VisualEditing />` component has code that maps through the DOM and injects an overlay interface into your preview
- When clicked, the Studio opens with the corresponding field focused for editing

### Requirements

- Server-side rendering support
- Server-side authentication token with read permissions
- Method to toggle preview mode on the server

### Best for

- Getting started with Visual Editing
- Projects that need a simple implementation
- Frameworks with built-in revalidation APIs

## Loaders (enhanced implementation)

Building on the server-side foundation, Loaders are framework-specific and leverage both server-side and client-side rendering to:

- Enable near-instant refresh rates for previews
- Support all Visual Editing features including drag and drop page building

> \[!TIP]
> Protip
> In frameworks like Next.js, you can implement this without too much overhead with the [next-sanity toolkit](https://www.sanity.io/plugins/next-sanity).

### How it works

1. Initial page load:

- Server performs the initial content fetch (like in server-side fetching described above)
- Application hydrates with this initial content and initializes a client-side loader
- Leverages the users authenticated browser session
- A real-time connection is established with Presentation tool using the `postMessage` protocol

2. Content updates in the Studio:

- The Presentation tool immediately signals the new changes to the front end
- The UI updates instantly without a full page refresh

3. Page building interactions:

- The Studio provides an enhanced overlay interface
- Content creators can add, remove, and reorder content sections
- Changes are immediately reflected through optimistic updates
- The application syncs with the actual content state in the background

4. Framework-specific implementations:

- Next.js App Router: Uses `defineLive` for seamless integration
- Other React frameworks: Use framework-specific loaders or data fetching patterns

5. Optimistic updates for drag and drop with [useOptimistic](https://reference.sanity.io/_sanity/visual-editing/react/useOptimistic/):

- Provides immediate feedback for editing interactions
- Works independently of the data fetching method
- Essential for interactions like drag-and-drop reordering
- Bridges the gap when server responses would feel too slow
- Only requires `<VisualEditing />` component for supported frameworks
- Can be used alongside any data fetching approach

### Requirements

- Framework with client-side hydration (React, Vue, Svelte)
- Framework-specific preview mode support (can also be self-implemented)

### Best for

- Projects needing the full Visual Editing experience
- Applications requiring real-time content updates
- Frameworks like Next.js (App Router) that support advanced features

## Framework Support

### Full Support (Server + Client)

- Next.js (App Router): Full page building experience via `defineLive`
- Next.js (Pages Router): Support via loaders patterns
- React-based frameworks: Full page building capabilities
- Remix: Support via loaders pattern
- Nuxt: Support via loaders pattern
- SvelteKit: Support via loaders pattern

### Basic Support (Server-Side Only)

- Any framework with server-side rendering
- Static site generators with SSR mode (e.g., Astro in SRR/hybrid mode)

### Coming Soon

- Enhanced support for Vue.js and Svelte frameworks
- Expanded page building capabilities beyond React

## Implementation Considerations

- Start with server-side fetching for basic preview functionality
- Add client-side fetching when you need real-time updates or page building
- Consider your hosting platform's capabilities for server-side revalidation
- Static site generators require a separate preview deployment with SSR enabled

## Note on static site generators (SSGs)

While static site generators can make it simple to build websites, they are not well-suited for providing a Visual Editing experience for content teams. Static site generators pre-render pages at build time, meaning any content changes require a full or partial site rebuild. This usually doesn't scale well as the site grows and by the nature of being static can't provide the real-time editing experience that Visual Editing offer.

However, some frameworks, like [Astro](https://www.sanity.io/plugins/sanity-astro), also support server-side rendering. In scenarios where you want to use static site generation for your production builds, you can set up a secondary deployment for previews that uses the server-side rendering approach.
