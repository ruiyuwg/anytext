# Add an aspect to an asset

This guide explores options for programmatically assigning aspects to Media Library assets.

Prerequisites:

- `mediaLibraryId`: The ID for your organization's Media Library.
- Read/write access to documents in Media Library.
- A [personal authentication token](https://www.sanity.io/docs/content-lake/http-auth). At this time, robot tokens are not supported for Media Library.

## Mutate the asset

To add an aspect to an asset, you need to mutate the asset in Media Library. Rather than capture and rewrite the whole asset, [use a patch](https://www.sanity.io/docs/content-lake/http-patches) to apply just the change in aspect to the asset document.

### Option 1: use the CLI

The `media import` CLI command can be used to set aspects on a single asset or set of assets. More details are available in our guide on [importing assets](https://www.sanity.io/docs/media-library/importing-assets).

> \[!TIP]
> Protip
> This option requires that you have a local copy of the file you're adding aspect information for. You can use `media export` as a way to generate a directory of the assets in your library alongside their existing aspect data.

### Option 2: use the HTTP API

Use the `media-libraries/<media-library-id>/mutate` endpoint to apply the mutation.

In this example, we patch the value of a single field aspect with a name of `comment`.

**mutate.ts**

```typescript
const mediaLibraryId = "<your-media-library-id>"
const url = `https://api.sanity.io/v2025-03-24/media-libraries/${mediaLibraryId}/mutate`

const mutation = JSON.stringify({
  mutations: [
    {
      patch: {
        id: assetId,
        setIfMissing: { aspects: {} }, // confirm the asset has an aspects property.
        set: {
          "aspects.comment": "Updated aspect details"
        }
      }
    }
  ]
})

await fetch(url, {
  method: 'POST',
  headers: {
    "Content-type": "application/json",
    "Authorization": "Bearer <your-token>"
  },
  body: mutation
})
```

This modifies the asset document to look something like this:

**output.json**

```json
{
  "title": "myImage.jpg"
  "assetType": "sanity.imageAsset",
  "_rev": "8397ffea-abf2-4eed-b6b7-d5e383171061",
  "_type": "sanity.asset",
  "aspects": {
    "comment": "updated aspect details"
  },
  "_createdAt": "2025-04-02T15:46:26Z",
}
```

For nested fields or more complex aspects, start with the outer-most name and work down to the individual field level.

### Option 3: use `@sanity/client`

We're actively working to make interacting with Media Library form the Sanity JavaScript client happen. This section will be updated once client support is available.

#### Additional resources

[Media Library API reference](https://www.sanity.io/docs/http-reference/media-library)
