# Scheduled drafts

Sometimes you want to schedule a single draft to go live, but don't need the full power of content releases. Scheduled drafts allows content editors to schedule, and lock, a single document. It shows up as a special type of content release and is visible for other editors to see.

*This is a paid feature, available on the Growth plan.*

Prerequisites:

- Studio v4.14.0 or later is required to use this feature.
- When using the API to create scheduled drafts, API version `v2025-02-19` or later is required.
- [Drafts](https://www.sanity.io/docs/content-lake/drafts) and [Content Releases](https://www.sanity.io/docs/studio/content-releases-configuration) must be enabled in your Studio configuration. These are the default settings, so no changes are needed unless you've previously disabled either feature.

This guide covers common usage, how to disable the feature, and how to interact with scheduled drafts programatically.

## Basic usage

To learn more about scheduling drafts, viewing scheduled drafts, and the workflow within Studio's interface, visit the [scheduled drafts user guide](https://www.sanity.io/docs/studio/scheduled-drafts-user-guide).

## Configure document actions

Like other [document actions](https://www.sanity.io/docs/studio/document-actions), you can control the criteria for when an action is displayed. In the case of scheduled drafts, check against the action's name: `SchedulePublishAction`.

### Disable by schema type

In this example, documents of type 'movie' won't display the schedule draft action.

**sanity.config.ts**

```
import {defineConfig} from 'sanity'

export default defineConfig({
  // ...
  document: {
    actions: (prev, {schemaType}) => {
      if (schemaType === 'movie'){
        return prev.filter((action) => action.displayName !== 'SchedulePublishAction')
      }
      return prev
    }
  }
})
```

### Disable by user

In this example, only administrator users can schedule drafts.

**sanity.config.ts**

```
import {defineConfig} from 'sanity'

export default defineConfig({
  // ...
  document: {
    actions: (prev, {curentUser}) => {
       if (currentUser?.roles.find(({name}) => name !== 'administrator')) {
        return prev.filter((action) => action.displayName !== 'SchedulePublishAction')
      }
      return prev
    }
  }
})
```

## Disable scheduled drafts studio-wide

If you'd like to disable the ability for editors to create scheduled drafts, modify your `sanity.config.ts` file to include the following.

**sanity.config.ts**

```
import {defineConfig} from 'sanity'

export default defineConfig({
  // ...
  scheduledDrafts: {
    enabled: false
  }
  // ...
})
```

## Query all scheduled drafts

Scheduled drafts are essentially single-document content releases. You can query them in GROQ with the following query:

**GROQ**

```groq
releases::all()[metadata.cardinality == "one" && state == "scheduled"]{
  "scheduledDraftDocs": *[
    sanity::partOfRelease(string::split(^._id, ".")[2])
  ]
}.scheduledDraftDocs[]
```

## Schedule drafts programmatically

The scheduled drafts feature is a part of Content Releases. It uses the actions API to create releases and version documents, then schedule them for publishing.

> \[!NOTE]
> The code in this example requires `@sanity/client` version v7.9.0 or later.

You can mimic the way Studio creates scheduled drafts by:

1. Creating a release with the `metadata` of `releaseType: 'scheduled'`,  `cardinality: 'one'`, and a `publishedAt` time in the future.
2. Create a version document on the release associated with the draft document's ID.
3. Schedule the release.

Note that you must already have a draft, or should create one. Here's an example using the Sanity client.

You can then call the `createNewScheduleDraft` function with the documentId and publish time to schedule the draft.

```
import { createClient } from '@sanity/client'

const sanityClient = createClient({
    projectId: 'projectId',
    dataset: 'dataset',
    apiVersion: '2025-02-07',
    token: 'token',
})

const createNewScheduledDraft = async (documentId: string, publishAt: Date) => {
    const newScheduledDraftRelease = await sanityClient.releases.create({
        metadata: {
            title: 'New Scheduled Draft',
            releaseType: 'scheduled',
            cardinality: 'one', // this marks the release as a scheduled draft
            intendedPublishAt: publishAt.toISOString(),
        },
    })
  const scheduledDraftReleaseId = newScheduledDraftRelease.releaseId

    await sanityClient.createVersion({
       publishedId: documentId,
       // create a new scheduled draft of the current draft
       baseId: `drafts.${documentId}`,
       releaseId: scheduledDraftReleaseId,
    })

    await sanityClient.releases.schedule({
        releaseId: scheduledDraftReleaseId,
        publishAt: publishAt.toISOString(),
    })

    return scheduledDraftReleaseId
}
```

Updates to the Sanity client to streamline this process will come in the future. [Subscribe to the Changelog](https://www.sanity.io/docs/changelog) for updates.

## Scheduled drafts publishing flow

Scheduled drafts share the a similar state-change flow as Content Releases, where the release document moves through various states. For more details, see the [Content Releases release state documentation](https://www.sanity.io/docs/apis-and-sdks/content-releases-api).
