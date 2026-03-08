# Programmatic control

Content Releases allow teams to organize and schedule updates across multiple documents. Teams can plan, preview, and validate significant changes in advance, ensuring seamless and conflict-free content deployment.

This document explores interacting with Content Releases using Sanity's APIs. For details on using Content Releases in Sanity Studio, or customizing the experience follow these links:

[User guide](https://www.sanity.io/docs/user-guides/content-releases)

[Configure content releases](https://www.sanity.io/docs/studio/content-releases-configuration)

*This is a paid feature, available on the Enterprise plan.*

> \[!NOTE]
> Scheduled Drafts is also available
> For teams on Growth or above plans, or that don’t need to schedule groups of documents to go out at once, the [Scheduled Drafts](https://www.sanity.io/docs/studio/scheduled-drafts) feature is available.

APIs that interact with Content Releases require API version `2025-02-19` or later.

## Releases and document versions

Releases are Sanity documents with a type of `system.release`. They contain information about the release such as the title, release type, and state.

> \[!TIP]
> Protip
> Users of [content resources and custom roles](https://www.sanity.io/docs/user-guides/roles) can restrict access for:
>
> 1. Editing documents ​*in*​ releases by using a filter like `_id in path("versions.**")` for any release or `_id in path("versions.rA29bfjqa.**")` for documents in a specific release.
> 2. Performing release actions such as creating, publishing and archiving releases by using a filter like `_id in path("_.releases.**")` for any release or `_id == "_.releases.rA29bfjqa"` for a specific release.

Releases and documents are connected by a document ID system similar to the `drafts.` syntax. For releases, document IDs start with the `versions.` prefix. For example, if a document with an ID of `movie_70981` is published, has a draft, and exists in a future release, it could end up with the following versions:

- The published version: `movie_70981`
- A draft version: `drafts.movie_70981`
- A release version: `versions.<release-name>.movie_70981`

Releases have an automatically generated name, not to be confused with the user-supplied title. This name matches the end of the ID. For example, a release name of `rSC2jjcUJ` results in an `_id` of `_.releases.rSC2jjcUJ`.

## Release states

The current status of a release is known as the release `state`. Releases begin in the `active` state. This information is available on the `state` property in documents with a `_type` of `system.release`.

![Release state flowchart](https://cdn.sanity.io/images/3do82whm/next/a838b3784ead16282b719b7ff4d124e3e9eb3cb1-1523x2248.png)

A release may have the following states:

- `active`: The general state of a release that is not within one of the other states. *This is the default state of a new release*.
- `scheduled`: A state resulting from calling the `sanity.action.release.schedule` action on the release or scheduling the release in Studio.
- `published`: A state resulting from either calling the `sanity.action.release.publish` action, publishing the release in Studio, or when a scheduled release is published due to reaching its `publishAt` time.
- `archived`: A state resulting from calling the `sanity.action.release.archive` action or archiving the release in Studio.
- `deleted`: A state resulting from calling the `sanity.action.release.delete` action on an archived release or deleting the release in Studio.

> \[!WARNING]
> Gotcha
> When `scheduled`, any version documents that are part of the release will be locked. In order to mutate these documents, either in Studio or programmatically, the release must have a `state` of `active`.

Additional transient states exist to indicate the asynchronous points when releases move between states:

- `scheduling`/`unscheduling`: Intermediate states that will exist when moving to/from the `scheduled` state.
- `archiving`/`unarchiving`: Intermediate states that will exist when moving to/from the `archived` state.
- `publishing`: Intermediate state that will exist before reaching the `published` state. Note that a scheduled release will also transition through `publishing`.

Even releases set for immediate publishing will run through the scheduling and scheduled states. Instead of staying there, they immediately move through to publishing. Keep this in mind if you listen for state changes on release documents.

## Query releases and versions

Releases are Sanity documents and respect the existing query and mutation APIs. The guide below provides examples of querying and interacting with releases and their documents.

[Content Release patterns](https://www.sanity.io/docs/apis-and-sdks/content-releases-cheat-sheet)

## Additional resources

[Actions API reference](https://www.sanity.io/docs/http-reference/actions)

[GROQ functions](https://www.sanity.io/docs/specifications/groq-functions)

[@sanity/id-utils](https://github.com/sanity-io/id-utils)
