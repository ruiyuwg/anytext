# Documents

As you build out your schema, you'll create different document types that represent your various content types. In most cases, the shape of a document will come from how you configure your schema.

In reality, the document store doesn't know about your schema. It is only concerned with a few key requirements—such as `_id,_type`, and a few other system metadata properties. When you're working with APIs that aren't schema-aware, such as mutation or patch, you are able to create or edit documents regardless of the schema.

## Document types

Document types identify the kind of document. You create document types in your schema configuration, specifying fields that make up each type of content. Document types are the foundation of your content model and appear in the Studio's content list.

> \[!NOTE]
> Type vs \_type
> Your schema defines a `type` of `document`, but the schema's `name` defines the document's eventual `_type`.

**authorType.ts**

```
export default defineType({
  name: 'author', // this sets the document's _type
  title: 'Author',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Name',
      type: 'string',
    }),
    // ...
  ]
})
```

**Example output**

```json
{
  "_id": "200e44f2-14a9-4c7a-a621-a4ca4d9b559c",
  "_type": "author",
  "_createdAt": "2025-04-25T15:03:54Z",
  "_originalId": "200e44f2-14a9-4c7a-a621-a4ca4d9b559c",
  "_rev": "DOcXr0KgQH6faBzvMdKRNc",
  "_updatedAt": "2025-05-02T20:44:48Z",
  "name": "Mark",
}
```

[Learn more about the document schema type.](https://www.sanity.io/docs/studio/document-type)

## Document IDs

Every document has a unique ID stored in the `_id` property. By default, Sanity Studio generates random UUIDs for new documents. IDs cannot be modified once created and must follow specific formatting rules. Sanity uses a document's ID and special reserved prefixes to associate published documents with drafts and versions.

#### More on IDs

[IDs and Paths](https://www.sanity.io/docs/content-lake/ids)

[@sanity/id-utils](https://github.com/sanity-io/id-utils/tree/main)

## Document variants

### Published documents

When you think of a document you often think of the source, or published, variation. This document is public (in most cases) and generally has an non-prefixed document ID, like `post-123`, or a UUID.

### Drafts

When you create or edit a document in Sanity Studio, a draft document is created. Drafts capture in-progress changes while the original published document remains intact. Draft documents have IDs prefixed with `drafts.` , like `drafts.post-123`, and are only visible to authenticated users.

[Drafts](https://www.sanity.io/docs/content-lake/drafts)

### Versions

Versions are documents used by the [Content Releases](https://www.sanity.io/docs/user-guides/content-releases) feature. They have a unique ID prefixed with `versions.release-name.` , like `versions.r1234.post-123`, and are only visible to authenticated users.

Like drafts, they are self-contained documents that can be associated with a published document. They can also exist on their own.

Unlike drafts, you can have multiple versions associated with a published document. When a version is published as part running a content release, the version document is deleted after the updates are applied to the published document.

> \[!TIP]
> Isolating document states
> Use GROQ path filters to target specific document states: `_id in path('drafts.**')` for drafts only, or `_id in path('versions.**')` for versions only.

## Publishing

When you publish a draft or version document, the contents of the draft/version are applied to the published document if one exists. If it's a brand new document, the contents are copied into a new document. In both cases, the original draft or version document is deleted. Changes made to draft and release versions are still available as part of the [history experience](https://www.sanity.io/docs/user-guides/history-experience).

Once published, a document is available on public APIs and can be referenced by other documents. You can learn more about what's visible at a given time in the [perspectives documentation](https://www.sanity.io/docs/content-lake/perspectives).

## Document lifecycle

Documents don't have a defined *state* property, but they do exist in various implied states based on a variety of factors. When interacting with content lake, these are some of the events you'll encounter in a document's lifecycle:

- Created: When a document is first created.
- Updated: When an existing document changes.
- Deleted: When an existing document is deleted.

> \[!NOTE]
> What about published?
> While many parts of Sanity refer to *published* documents—including this very article—published really means any document not designated as a draft or version document. Therefor, published is a catch-all event for **creating** or **updating** a standard(published) document.
> There are [actions](https://www.sanity.io/docs/http-reference/actions) and other APIs that handle copying the contents of a draft/version document over to a non-prefixed, published document, thus *publishing* it.

These lifecycle actions help inform features throughout Sanity's ecosystem, such as acting as triggers for [Functions](https://www.sanity.io/docs/functions/functions-introduction) or [Webhooks](https://www.sanity.io/docs/content-lake/webhooks).

Some example lifecycle changes are:

- When you begin editing a document in Studio, a new draft is **created**.
- As you work on the draft document, it is **updated.**
- If you *publish* a draft, it replaces (and **updates**) the published document, and then the draft is **deleted.**

## References

Documents can reference other documents using reference fields. This creates relationships between your content, allowing you to build connected content structures. This is one of the core features of structured content and page-building.

#### More on references

[Connected Content](https://www.sanity.io/docs/studio/connected-content)

[Reference schema type](https://www.sanity.io/docs/studio/reference-type)

[GROQ joins](https://www.sanity.io/docs/specifications/groq-joins)

## Asset documents

Sanity even uses JSON documents for storing details about assets. These documents use the `sanity.imageAsset` and `sanity.fileAsset` types.

#### Learn more about assets

[Assets](https://www.sanity.io/docs/content-lake/assets)

## System documents

In addition to the documents you define when building a schema, Sanity also stores data in various system documents. If you write an authenticated query for all documents, such as `*[]`, you will see additional document types beyond those you've created.

Unless documented, these system documents should not be relied upon or modified.

#### Learn more about documents

[Common Sanity document types](https://www.sanity.io/docs/content-lake/document-reference)
