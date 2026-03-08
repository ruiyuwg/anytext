# Upload an asset

Users can upload assets to Media Library directly from the app or from a configured Studio. Developers can upload assets with the CLI and the Media Library HTTP API. In this guide, you'll learn to upload an asset to your library programatically.

Looking for details on uploading to Media Library from the app? See the [Media Library user guide](https://www.sanity.io/docs/media-library/interface).

> \[!NOTE]
> Looking to upload to a single project?
> This guide discusses uploading assets to Media Library. For information on uploading assets to your project see the [content lake guide on uploading assets](https://www.sanity.io/docs/content-lake/manage-assets).

## Upload an asset

### Option 1: use the CLI

The Sanity CLI includes the `media import` command that standardizes the process for uploading batches of assets and simultaneously assigning aspect information. More detail is available in our guide for [importing assets](https://www.sanity.io/docs/media-library/importing-assets).

To use the CLI with the `media` commands, you must run the command in a directory containing a `sanity.cli.ts` configuration file. Learn more about [configuring the CLI to recognize your library](https://www.sanity.io/docs/media-library/configure-library).

### Option 2: use the HTTP API

Prerequisites:

- Node.js v21.0 or later to run the built-in `fetch` API, or a compatible request library.
- A [personal authentication token](https://www.sanity.io/docs/content-lake/http-auth) with read/write access to your organization's Media Library.
- The `mediaLibraryId`.

Make a POST request to the `/media-libraries/<mediaLibraryId>/upload` endpoint. In the code below, replace `mediaLibraryId` with your library's ID, and `token` with your personal authentication token.

```
// Define your library ID.
const mediaLibraryId = '<your-library-id>'

// Define your personal auth token.
const token = '<personal-auth-token>'

// Read the contents of a file.
const asset = fs.readFileSync('assets/spring-launch-promo.jpg')

// POST a request to the HTTP API with the file as the body
await fetch(`https://api.sanity.io/v2025-02-19/media-libraries/${mediaLibraryId}/upload`, {
  method: 'POST',
  body: asset,
  headers: {
    'Authorization': `Bearer ${token}`,
  }
})
```

Uploading an asset without additional parameters will let Media Library generate the asset title and infer the filename.

See the Media Library HTTP API reference for all available upload options and parameters.

[Media Library API reference](https://www.sanity.io/docs/http-reference/media-library)
