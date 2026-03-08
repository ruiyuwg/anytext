# Migrating plugins to support Content Releases

The introduction of [Content Releases](https://www.sanity.io/docs/studio/content-releases-configuration) into Sanity Studio introduces some new core concepts available through the Sanity SDK.

To interface with the studio global perspective, `usePerspective` is available. This hook must be used within Studio. For example:

```tsx
import { usePerspective } from 'sanity'

function MyComponent() {
  const { perspectiveStack } = usePerspective()
  // ...
}
```

`usePerspective` returns:

```tsx
  /* The selected perspective name, it could be a release or Published */
  selectedPerspectiveName: 'published' | ReleaseId | undefined
  /**
   * The releaseId as `r<string>``; it will be undefined 
   * if the selected perspective is `published` or `drafts`
   */
  selectedReleaseId: ReleaseId | undefined
  /* Return the current global release */
  selectedPerspective: SelectedPerspective
  /**
   * The stacked array of releases ids ordered chronologically 
   * to represent the state of documents at the given point in time.
   */
  perspectiveStack: PerspectiveStack
  /* The excluded perspectives */
  excludedPerspectives: string[]
```

Further, a `ReleaseId` may be used to query document versions within a release as noted [here](https://www.sanity.io/docs/apis-and-sdks/content-releases-api).

## Custom Input Component plugins

There are particular concerns relevant for plugins which make custom input components available via custom input types. Prior to Content Releases, a document form may have made its form inputs read only in instances where data was loading, being re-synced, or in a transient state. Now, Studio Perspectives allow users to view the document form of the published document version. This form is read only in all instances, besides liveEdit. In these cases it is imperative that plugins pass the `readOnly` prop available when rendering custom components:

```tsx
const PluginComponent = ({ readOnly }: InputProps) => {
	... spread `readOnly` if using Sanity UI, or use `readOnly` to control disabling input ...
}

export const plugin =  defineType({
	...,
	fields: [
		...,
		{
			...,
			components: {
			input: PluginComponent
		}
	]
})
```

# Getting started with Sanity

#### Quickstart guides

[Next.js](https://www.sanity.io/docs/next-js-quickstart)

[Nuxt.js](https://www.sanity.io/docs/nuxt-js-quickstart)

[Astro](https://www.sanity.io/docs/astro-quickstart)

[React Router (Remix)](https://www.sanity.io/docs/react-router-quickstart)

[Sanity Studio](https://www.sanity.io/docs/sanity-studio-quickstart)

#### Sanity Learn

[Day One Content Operations](https://www.sanity.io/learn/course/day-one-with-sanity-studio/prerequisites)

[Mastering Content Operations](https://www.sanity.io/learn/track/sanity-developer-essentials)

#### Other ways of getting started

[A very short introduction](https://www.sanity.io/docs/getting-started/the-sanity-content-operating-system-an-introduction)

[Templates](https://www.sanity.io/templates)

# Platform introduction

Sanity is a Content Operating System for the AI era. It provides the structured foundation, automation layer, and agentic context companies need to move faster, work smarter, and power every content experience—from websites to AI agents.

Build a content system that matches how your business operates with three interconnected layers:

- [Content Lake](https://www.sanity.io/docs/content-lake): The content database.
- [AI-first tools](https://www.sanity.io/docs/ai): MCP server, skills, and rules no matter where you build.
- [APIs and SDKs](https://www.sanity.io/docs/apis-and-sdks): Libraries and frameworks to build on top of Sanity.

[The Sanity Dashboard](https://www.sanity.io/docs/dashboard) for running your content operations apps, such as:

- [Studio](https://www.sanity.io/docs/studio): A customizable CMS.
- [Media Library](https://www.sanity.io/docs/media-library): Enterprise asset management.
- [Content Agent](https://www.sanity.io/docs/content-agent): Prompt your content.
- [Canvas](https://www.sanity.io/docs/canvas): AI-powered document editor.
- [Your custom-built apps](https://www.sanity.io/docs/app-sdk): SDK-driven apps for any use case.

Unlike traditional or headless CMSes, Sanity provides a foundation for your entire content lifecycle across all digital channels, with the flexibility to evolve as your needs change.

You can get started with Sanity in minutes. [Go here to explore the different ways](https://www.sanity.io/docs/getting-started).
