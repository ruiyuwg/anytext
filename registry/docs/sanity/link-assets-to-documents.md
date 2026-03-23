# Link assets to documents

When editors use Studio to add assets to documents, Studio and Media Library work together to link the project, document, and library together. To do this programatically, like when migrating a large number of assets to your library, you'll need to perform the steps manually.

> \[!TIP]
> Rendering assets
> This guide is specifically about programatically linking assets from Media Library to documents in your datasets. For details on rendering assets, check out the [Presenting Images guide](https://www.sanity.io/docs/apis-and-sdks/presenting-images).

In this guide, you'll learn how to link Media Library assets to documents in a project dataset. There are three key steps:

1. Upload the asset to Media Library, or query an existing asset in Media Library to obtain the necessary IDs.
2. Link the Media Library asset to your project dataset.
3. Patch any documents that use the asset with the correct references.

Prerequisites:

- An environment where you can make HTTP requests. The code examples use `fetch` in Node.js, which was made stable in v21.0. You can substitute any request library and any language.

- Project and library identifiers:- `mediaLibraryId` from your Media Library.

- `projectId` for the project you want to link the assets to.

- `dataset` for the project you want to link the assets to.

- A [personal authorization token](https://www.sanity.io/docs/content-lake/http-auth) with permission to read/write from both the Media Library and your project.

## Gather the asset IDs

Linking a Media Library asset requires two identifiers:

- Asset ID: The primary identifier (`_id`) for an asset document in your Media Library.
- Asset instance ID: The identifier for a versioned instance of the asset. Your assets likely have a single version, but in some future cases there may be multiple instances.

There are two ways to obtain these values.

### Get IDs during upload

After uploading an asset with the `media-libraries/upload` endpoint, the response contains `asset._id`\* and \*`assetInstance._id`. Refer to the guide below for details on using the API to upload assets.

[Upload assets programmatically](https://www.sanity.io/docs/media-library/upload-assets)

### Get IDs by querying assets

If your assets are already in Media Library, you can query the Media Library API for asset documents. If you already know the Asset ID, you can query it directly with the `_id == '<asset-id>'` GROQ filter. If you don't know the ID(s), you can query all assets with `_type == 'sanity.asset'`.

For example, this query returns all asset documents in the library.

**query-media.ts**

```
// Define your library ID.
const mediaLibraryId = '<your-library-id>'

// Define your personal auth token.
const token = '<personal-auth-token>'

// Define your query
const query = `*[_type == 'sanity.asset']`

// POST a request to the HTTP API with the file as the body
await fetch(`https://api.sanity.io/v2025-02-19/media-libraries/${mediaLibraryId}/query`, {
  method: 'POST',
  body: JSON.stringify({query}),
  headers: {
    'Authorization': `Bearer ${token}`,
    'Content-Type': 'application/json',
  }
})
```

**Response**

```json
{
  "query": "*[_type == 'sanity.asset']",
  "result": [
    {
      "versions": [],
      "_type": "sanity.asset",
      "_id": "2w91UKgsNKEhWD6au6OzeNaOe7f",
      "_updatedAt": "2025-04-23T20:09:54Z",
      "_createdAt": "2025-04-23T20:09:49Z",
      "_rev": "LR2OfQiXk5TMHKZpxdBNWd",
      "aspects": {},
      "title": "Silhouette of a Woman in a Doorway Overlooking the Ocean",
      "currentVersion": {
        "_type": "reference",
        "_key": "",
        "_weak": false,
        "_ref": "image-11736fa2881515ae4fb5ba3db2fc247778ce8fab-4948x7422-jpg"
      },
      "assetType": "sanity.imageAsset",
      "cdnAccessPolicy": "public",
      "_system": {
        "createdBy": "gvRshKueQ"
      }
    }
  ],
  "syncTags": [],
  "ms": 5
}
```

In the example response JSON, the highlighted lines show the IDs you need.

- Asset ID: The `id` of the document.
- Asset Instance ID: The `currentVersion._ref`.

## Link the asset to your project dataset

The next step is to link the asset to your project dataset with the [assets/media-library-link API](https://www.sanity.io/docs/http-reference/assets). This creates a local reference point that you can use throughout the dataset. Note the `id` and the `media._ref` in the response for the next step.

**media-link.ts**

```
// Define your library ID, project ID, and dataset
const mediaLibraryId = '<your-library-id>'
const projectId = '<your-project-id>'
const dataset = '<your-dataset>'

// Define your personal auth token.
const token = '<personal-auth-token>'

// Define the request body based on the Asset IDs from the previous step
// We've included the IDs from the earlier output as an example.
const requestBody = {
  mediaLibraryId: mediaLibraryId,
  assetInstanceId: "image-11736fa2881515ae4fb5ba3db2fc247778ce8fab-4948x7422-jpg",
  assetId: "2w91UKgsNKEhWD6au6OzeNaOe7f"
}

// POST a request to the assets API
fetch(`https://${projectId}.api.sanity.io/v2025-02-19/assets/media-library-link/${dataset}`, {
  method: 'POST',
  body: JSON.stringify(requestBody),
  headers: {
    'Authorization': `Bearer ${token}`,
    'Content-Type': 'application/json',
  }
})
```

**Response**

```json
{
  "document": {
    "_createdAt": "2025-04-23T22:01:54Z",
    "_id": "image-11736fa2881515ae4fb5ba3db2fc247778ce8fab-4948x7422-jpg",
    "_rev": "DkN0DBPn76SUp7SIvfkLE9",
    "_type": "sanity.imageAsset",
    "_updatedAt": "2025-04-23T22:01:54Z",
    "assetId": "11736fa2881515ae4fb5ba3db2fc247778ce8fab",
    "extension": "jpg",
    "media": {
      "_ref": "media-library:mlNBkjZ8wqSZ:2w91UKgsNKEhWD6au6OzeNaOe7f",
      "_type": "reference",
      "_weak": true
    },
    "metadata": {},
    "mimeType": "image/jpeg",
    "originalFilename": "11736fa2881515ae4fb5ba3db2fc247778ce8fab-4948x7422.jpg",
    "path": "images/y856rro4/production/11736fa2881515ae4fb5ba3db2fc247778ce8fab-4948x7422.jpg",
    "sha1hash": "11736fa2881515ae4fb5ba3db2fc247778ce8fab",
    "size": 4763977,
    "uploadId": "ml-link-Sg56SH3Sncz1on2HW9jvecXRdNC4mSWJ",
    "url": "https://cdn.sanity.io/images/y856rro4/production/11736fa2881515ae4fb5ba3db2fc247778ce8fab-4948x7422.jpg"
  }
}
```

## Patch the documents

Now that the asset is linked to your project and dataset, you can attach it to documents with a [document mutation](https://www.sanity.io/docs/http-reference/mutation).

Use the document ID and the media reference from the previous step to attach the asset to documents in your dataset. As with local assets, you can patch linked Media Library assets to a document. The key difference is that you need to update the `asset` and `media` objects.

In this example, we're adding the asset to a `poster` field on our target document. Replace the path to the asset and media to match the shape of your content.

```
// Define your project ID, and dataset
const projectId = '<your-project-id>'
const dataset = '<your-dataset>'

// Define your personal auth token.
const token = '<personal-auth-token>'

// Define the ID of the target document
const documentId = '<target-document-id>'

// Define the asset document ID and the media reference
// from the previous step
const assetDocumentId = 'image-11736fa2881515ae4fb5ba3db2fc247778ce8fab-4948x7422-jpg'
const mediaRef = 'media-library:mlNBkjZ8wqSZ:2w91UKgsNKEhWD6au6OzeNaOe7f'

// Define the mutation
const mutations = [{
  patch: {
    id: documentId,
    set: {
      poster: {
        asset: {
          _type: 'reference',
          _ref: assetDocumentId,
        },
        media: {
          _type: 'globalDocumentReference',
          _ref: mediaRef,
          _weak: true,
        }
      }
    }
  }
}]

// POST a request to the mutate API
fetch(`https://${projectId}.api.sanity.io/v2025-02-19/data/mutate/${dataset}`, {
  method: 'POST',
  body: JSON.stringify({mutations}),
  headers: {
    'Authorization': `Bearer ${token}`,
    'Content-Type': 'application/json',
  }
})
```

We captured the `media._ref` in the previous step, but you can also build it by combining the resource type (`media-library`) with your library ID and the asset ID.

These same steps apply for linking Media Library assets to any documents.

#### Additional resources

[Media Library API reference](https://www.sanity.io/docs/http-reference/media-library)

[Assets API reference](https://www.sanity.io/docs/http-reference/assets)
