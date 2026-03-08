# Content Releases Configuration

Content Releases allow teams to organize and schedule updates across multiple documents. Teams can plan, preview, and validate significant changes in advance, ensuring seamless and conflict-free content deployment.

This document explores configuring Content Releases in Sanity Studio. For details on using Releases, or interacting with the API, follow these links:

[User Guide](https://www.sanity.io/docs/user-guides/content-releases)

[Release Actions](https://www.sanity.io/docs/studio/release-actions)

[Content Releases API](https://www.sanity.io/docs/apis-and-sdks/content-releases-api)

*This is a paid feature, available on the Enterprise plan.*

## Setup and configuration

Content Releases is enabled by default for studios running version 3.75.0 or later. You should update any official plugins and dependencies, such as AI assist, Vision, and any presentation-related plugins to ensure compatibility.

### Limit release count per workspace

Release quotas are organization-wide. To limit the amount of releases an individual workspace or studio can use, set the `releases.limit` value in your Sanity config.

**sanity.config.ts / sanity.config.js**

```typescript
export default defineConfig({
  // ...
  releases: {
    limit: 2
  }
})
```

This limits creation of new releases beyond the limit in Studio. It does not prevent creation from the API or other inputs.

### Disable releases

If you'd like to disable content releases for your studio, you can do so in the configuration file.

**sanity.config.ts / sanity.config.js**

```typescript
export default defineConfig({
  // ...
  releases: {
    enabled: false
  }
})
```

### Limit releases to certain users

Users of [content resources and custom roles](https://www.sanity.io/learn/course/introduction-to-users-and-roles/custom-roles-and-resources) can restrict access for:

1. Editing documents ​*in*​ releases by using a filter like `_id in path("versions.**")` for any release or `_id in path("versions.rA29bfjqa.**")` for documents in a specific release.
2. Performing release actions such as creating, publishing and archiving releases by using a filter like `_id in path("_.releases.**")` for any release or `_id == "_.releases.rA29bfjqa"` for a specific release.

### Disabling drafts

Some organizations prefer to only allow edits in content releases, and disable draft documents completely. To disable drafts, set the `document.drafts.enabled` setting to `false` in your studio's `sanity.config.ts`.

**sanity.config.ts**

```
export default defineConfig({
  // ...
  document: {
    drafts: {
      enabled: false
    }
  }
})
```

## Limitations

- In Sanity versions prior to 3.79.0, dataset imports did not work with datasets that contain versions. Please update to 3.79.0 or later before attempting a dataset export/import.
- When you schedule a release, we perform checks in the background to ensure reference integrity between documents. These checks do not take into account [cross-dataset references](https://www.sanity.io/docs/studio/cross-dataset-references).
- GROQ-powered webhooks don't support the latest API version necessary to interact with version documents. You can, however, use the release document type to react to release state. See the [Content Releases API patterns page](https://www.sanity.io/docs/apis-and-sdks/content-releases-cheat-sheet) for an example.
- The JS client does not include methods for managing releases, but you can still send actions and queries to modify releases manually. See the [Content Releases API documentation](https://www.sanity.io/docs/apis-and-sdks/content-releases-api) for details on using the API.
- API changes supporting Content Releases introduced changes to perspectives. [See the changelog](https://www.sanity.io/changelog/676aaa9d-2da6-44fb-abe5-580f28047c10) for details on breaking changes.

### Presentation and Visual Editing

Content Release previews in Presentation work with front ends that use Loaders. This includes `@sanity/core-loader`, `@sanity/react-loader`, `@sanity/svelte-loader`, and packages that rely on them such as `next-sanity` (with a loader or `defineLive`) and `@nuxtjs/sanity`.

Configure your clients to use the `2025-02-19` version of the API to enable previewing.

For applications configured with official loaders and the presentation tool, presentation will preview Content Releases as expected. We're working to provide guidance for custom implementations in the future, however the preferred path is [Presentation tool and Loaders.](https://www.sanity.io/docs/visual-editing-reference-overview)

Follow our guides for [Visual Editing](https://www.sanity.io/docs/visual-editing/introduction-to-visual-editing) to configure presentation in your application.

## Supported plugins

Official plugins have been updated to support Releases. We recommend updating to the latest versions of any official plugins to ensure full compatibility.

[Migrate plugins to support Releases](https://www.sanity.io/docs/developer-guides/migrating-plugins-to-support-content-releases)
