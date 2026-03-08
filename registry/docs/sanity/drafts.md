# Drafts

In Sanity Studio, when you create a new document or edit one that has already been published, a *draft document* is created. Drafts capture in-flight updates while the original published document remains intact. This enables keeping changes separated from what is presented to users until those changes are ready to be explicitly rolled-out.

A draft document does not appear on the APIs to unauthenticated users. While you may refer to it as a reference, you can only publish a document that references a draft if that reference field is a weak reference.

When you publish a document it becomes available on the public APIs and you may (strongly) reference it from other documents.

When you start working on a published document a new draft gets created. This creates a new event in the [document history](https://www.sanity.io/docs/user-guides/history-experience). You can access the document history from the context menu:

![Screenshot from Sanity Studio](https://cdn.sanity.io/images/3do82whm/next/bd2bcff0a9e3b951ce43206a3965dfdd965a2bca-658x335.png)

## Behind the scenes

Drafts are saved in a document with an id beginning with the path `drafts.`. When you publish a document it is copied from the draft into a document without the `drafts.`-prefix (e.g. `drafts.ca307fc7-4413-42dc-8e38-2ee09ab6fb3d` vs `ca307fc7-4413-42dc-8e38-2ee09ab6fb3d`). When you keep working a new draft is created and kept read protected in the drafts document until you publish again.

#### Timestamps

The published and draft document both have `_createdAt` and `_updatedAt` fields.

- `_createdAt` is the same value for **both** and reflects the time when the document was first created.
- `_updatedAt` on the **draft** is the time of when it was last edited
- `_updatedAt` on the **published** is the time when it last  got published

### A matter of perspectives

When querying your content from a frontend it's common to face a situation where you are interested in *either* drafted changes *or* published content, and specifically *not* both at the same time. You can use Content Lake's [Perspectives](https://www.sanity.io/docs/content-lake/perspectives) feature to have your queries return with all in-flight changes applied – useful for previewing – or with all changes ignored entirely – useful for production deployments. Visit the article [Presenting and Previewing Content](https://www.sanity.io/docs/content-lake/presenting-and-previewing-content) to learn more about how Perspectives can be used in your presentation layers.

## Disable draft documents

Sometimes you might not need drafts at all, such as when using real-time 'live' documents, or when using a structured publishing flow like [Content Releases](https://www.sanity.io/docs/user-guides/content-releases).

### Disable all draft creation

To disable all draft creation and limit editing to "live edit" documents, API mutations, and content releases, set the `document.drafts.enabled` setting to `false` in your `sanity.config.ts` file.

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

### Disable for live editing

To disable drafts for a data type that you want to be "live only", include `liveEdit: true` in the schema definition:

```javascript
export default {
  name: 'author',
  title: 'Author',
  type: 'document',
  liveEdit: true,
  …
  

```

> \[!NOTE]
> Live Edit differs from the Live Content API
> Live Edit is the "published only" mode where drafts are disabled. It doesn't change how rendering works in your apps, but rather how Sanity Studio handles edits. Your applications and front ends need to render these changes as they happen. [The Live Content API](https://www.sanity.io/docs/content-lake/live-content-api) tooling will work out of the box with live mode, or you can rely on traditional rendering modes to serve changes on new visits or refreshes.
