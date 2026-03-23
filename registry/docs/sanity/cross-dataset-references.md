# Cross Dataset References

*This is a paid feature, available on the Enterprise plan.*

A fundamental requirement for enabling a content-driven workflow is having access to the proper tools to help you compartmentalize and then [connect your content](https://www.sanity.io/docs/studio/connected-content). A way of composing sets of fields to create documents, and of connecting documents to create relationships. Boxes and arrows, if you will.

The premier tool for connecting content in Sanity is the [reference schema type](https://www.sanity.io/docs/studio/reference-type), for creating binding relationships between content types. The reference type only allows references within a single dataset. This covers most use cases, but sometimes more complex architectures and content needs present a legitimate case for a way of communicating across datasets.

Enterprise organizations often have different teams working with different content across channels, geographies, and markets. You might have one team managing product data. A handful of others teams each in charge of the digital experience for their specific brand, in their specific market. And a centralized legal team, who supports various brands and markets by providing copy for Terms of Service, Warranties, and other official information. Making sure these teams all refer to the same single source of truth for any specific bit of content is a challenge in most CMSes and often leads to duplication of effort and content debt.

For these scenarios, there is the [crossDatasetReference](https://reference.sanity.io/sanity/index/CrossDatasetReferenceDefinition/) schema type! With it comes the ability to make references between documents in different datasets. See the [CrossDatasetReferenceDefinition](https://reference.sanity.io/sanity/index/CrossDatasetReferenceDefinition/) reference for the full type definition.

While closely related to the `reference` type, the `crossDatasetReference` type has some unique capabilities and some different limitations that you should be aware of.

## The anatomy of a cross-dataset reference

A cross-dataset reference is, as its name suggests, a reference in one dataset to a document in another dataset. In order for this to be possible, there are some requirements that must be filled.

> \[!NOTE]
> For the remainder of this article, we’ll use the term **referencing dataset** when we discussing the dataset where the reference originates – i.e. the document that has a field pointing to a field in a different dataset – and **referenced dataset** when we talk about the dataset that is being referred to.

- Both datasets must belong to the same project which must be on an enterprise plan and have this feature enabled
- The source and target studios must both be updated to version `2.34.3` or later
- The dataset name of the **referenced dataset** must be known at the time of creating the reference field in the **referencing dataset**
- Similarly, the type of document you wish to refer to in the **referenced dataset**, and one or more of its fields must be known in order to set up previews in the **source dataset**

## Exploring the `crossDatasetReference` schema

> \[!NOTE]
> To read details about the crossDatasetReference schema type, visit the [schema type reference](https://www.sanity.io/docs/studio/cross-dataset-reference-type) documentation.

The `crossDatasetReference` type is, as mentioned, closely related to the `reference` type. It supports most of the same properties and options, in addition to some specific ones. Let’s have a look at a minimal example of a `crossDatasetReference` schema, and then go a bit further once we’ve established the basics.

```javascript
//Type definition on the schema of the "referencing" dataset,
//i.e. where the reference originates

{
  name: 'my-reference-field',
  title: 'Field reference to other field in another dataset',
  type: 'crossDatasetReference',
  dataset: 'name-of-the-other-dataset',
  to: [
    {
      type: 'article',
      preview: {
        select: {
          title: 'title'
        },
      },
    },
  ],
}
```

- All fields in the above example, except the title, are required
- The `type` must be set to `crossDatasetReference`
- The `dataset` must have the appropriate value
- The `to` field accepts an array of entries to different document types in the referenced dataset. You may define as many types here as you please, but each `crossDatasetReference` field is limited to connecting to a single referenced dataset.
- Because the entire schema of all document types in the **referenced dataset** is not known to the **referencing dataset**, the following is true for each entry in the `to` array:- In addition to `type`, each entry must specify one or more fields to use when searching for and previewing content in the **referenced dataset**. To learn more about previews and list views, please refer to [this article](https://www.sanity.io/docs/studio/previews-list-views).

Let’s add a few more fields and a little more complexity to our schema:

```javascript
{
  title: 'Reference to a document in a another dataset',
  name: 'myCoolReferenceAcrossDatasets',
  type: 'crossDatasetReference',
  dataset: 'name-of-other-dataset',
	studioUrl: ({ type, id }) => `https://target.studio/structure/${type};${id}`,
  to: [
    {
      type: 'article',
      preview: {
        select: {
          title: 'title',
          media: 'heroImage',
        },
      },
    },
    {
      type: 'person',
      preview: {
          select: {
            name: 'name',
            picture: 'portrait',
            honorific: 'jobTitle',
          },
          prepare({ name, picture, honorific }) {
            return {
              title: name,
              media: picture,
              subtitle: honorific,
            };
          },
        },
      },
    },
  ],
}
```

Let’s look at what we’ve added.

- The `studioUrl` field on line 6 accepts a function, which is invoked with the `type` and `id` of your referenced document, and which should return a string in the shape of a URL to the document editing pane address in the referenced dataset studio. This field is used to create a direct link from the reference preview to its editing environment (providing your editors have access to it, of course).
- Finally, we’ve added a second document type to our `to` array with an expanded preview configuration.

## The Cross-Dataset Reference field in your studio.

Having configured your schema, you should see the `crossDatasetReference` field show up in your studio. While similar to `reference` inputs they differ in some key aspects:

- The “Create New” button and option to open the referenced document in a new pane to the right are not available across datasets. Instead, you will find an intent link that will open the referenced document in the target studio (if you have access to it, and have set the `studioUrl` property).
- Linking to drafts is not available across datasets. Unless the document has been published at some point, it will not show up in search.
- Depending on network conditions, searching and previewing cross-dataset reference fields might be less performant than doing the same operations on internal references.

![Shows input for cross-dataset references](https://cdn.sanity.io/images/3do82whm/next/f4247b1c4574e78c9c9aa7821e8939cd47371343-1800x934.png)

## Editor support for cross-dataset references

> \[!TIP]
> Protip
> The visibility of Cross Dataset References depends on the permissions of the current user or token. For private datasets this means that:
>
> - A user or token can see that a reference exists if they have at least read permissions on the source document. If they don’t have read permissions on the target document, they’ll see that the reference exists but not the content of the target document.
> - A user or token can fetch the referenced document if they have at least read permissions on the target document.
> - A user who wants to create a reference to a document can search for and attach any documents they have read permissions on.

![Shows cross-dataset input with popover](https://cdn.sanity.io/images/3do82whm/next/5481da83a30701082d52a5237da2bc8ec98ee447-1800x720.png)

As with the `reference` schema type, `crossDatasetReference` fields are by default assumed to have bi-directional integrity which means that if you try to delete a document that is referred to by another document, the studio will alert you with a warning.

![Shows warning dialog](https://cdn.sanity.io/images/3do82whm/next/bad0cf6915c6b732624bd378802fdb9c74da7e5f-1800x1016.png)

However, unlike references within a single dataset, the studio will allow you to proceed with deleting or unpublishing documents that have cross-dataset references.

If you go ahead and delete the document despite the warnings, it will show up as unavailable in any studio referencing it and will block publishing until the problem is fixed if any changes are made to the referring document.

![Shows warning about missing content](https://cdn.sanity.io/images/3do82whm/next/5cd229a42e5761bd11f2c7b6913c7ecfcea3941a-1800x720.png)

These measures are in place so that you can feel confident about connecting your content across datasets, and that you will be notified if a referenced document disappears.

Sometimes you don't need this guarantee while you want to keep the convenience of references. This warning can be turned off by adding the `weak: true` property to a reference field configuration.

You will still be notified that the document you are referring to has gone missing, but you will no longer be blocked from publishing.

## Querying cross-dataset references

> \[!WARNING]
> Gotcha
> Cross-dataset references require you to use API version `v2022-03-07` or later. [Read more about the Sanity API versioning scheme here](https://www.sanity.io/docs/content-lake/api-versioning).

> \[!WARNING]
> Gotcha
> Cross dataset references can only be dereferenced using GROQ queries. Dereferencing through GraphQL endpoints is not currently supported.

To GROQ, a `crossDatasetReference` behaves similarly to an internal reference, except that dereferencing must always start from the “referencing” document. For example, for these two schemas, each in a different dataset:

```javascript
// Movie type (movies-dataset)

{ 
  name: 'Movie Name',
  ...
},
{
  name: 'Actors',
  title: 'Actors',
  type: 'array',
  of: {
    type: 'crossDatasetReference',
    dataset: 'people-dataset',
    to: [
      {
        type: 'person',
        preview: {
          select: {
            name: 'firstname'
          },
        },
      },
    ]
  }
}
```

```javascript
// Person type (people-dataset)

{ 
  name: 'firstname',
  ...
},
{ 
  name: 'lastname',
  ...
},
...
```

A GROQ query starting at the Movies type can dereference the “actors” field elements to retrieve the Person type field:

```groq
*[_type == "movie"] {
  ...,
  "actors": actors[]->{
    ...
    firstname,
    lastname,
  }
}
```

There are no limitations on the number of levels or nesting of references supported by the dereferencing operation, but dereferencing can only be done through the `->` operator, following the “unidirectionality” of cross-dataset references - for example, if the person type had an “awards” cross-dataset reference field, it could be further dereferenced as follows:

```groq
*[_type == "movie"] {
  ...,
  "actors": actors[]->{
    ...
    firstname,
    lastname,
    awards->name
  }
}
```

However, other ways of dereferencing, for example, using the `references()` function is **not supported**:

```groq
// This is a NOT SUPPORTED query
*[_type == "movie"] {
  ...,
  "actors": actors[]->{
    ...
    firstname,
    lastname,
    "awards": *[_type == "awards" && references(^._id)] // <== here the reference function will not work for a cross-dataset reference
  }
}
```

> \[!WARNING]
> Perspectives are limited to the initiating dataset (2025-02-19 and earlier)
> **Prior to API version 2025-06-19**, Perspectives only applied to the initiating dataset and would not apply to items in the referenced dataset. This can result in only seeing published documents, even when in preview environments.
> As of v2025-06-19, cross-dataset references now respect the perspective of the querying dataset.

## In conclusion

The cross-dataset reference schema type is a powerful tool for enabling Shared Content across datasets. It allows you to keep your content connected beyond its original context by extending the reference field with methods for authenticating and querying across datasets.

Further reading:

- [crossDatasetReference schema type](https://www.sanity.io/docs/cross-dataset-reference-type)
- [Connected Content article](https://www.sanity.io/docs/studio/connected-content)
