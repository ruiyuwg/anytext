# Working with assets and images

The `@sanity/client` library provides methods for uploading, querying, and deleting [assets](https://www.sanity.io/docs/content-lake/assets) in your Sanity project. This guide covers working with assets in Content Lake and introduces Media Library for video workflows.

> \[!NOTE]
> Before you begin
> This guide assumes you have a configured Sanity client with a write token. See [Getting started with @sanity/client ](https://www.sanity.io/docs/apis-and-sdks/js-client-getting-started)for setup instructions. [Media Library](https://www.sanity.io/docs/media-library/introduction) sections require an active Media Library on your organization.

## Uploading assets to Content Lake

The `client.assets.upload()` method handles uploads to Content Lake. It accepts a type (`'image'` or `'file'`), a body (file stream, buffer, Blob, or File object), and an optional configuration object. The method returns a promise that resolves to the created asset document.

### Uploading from Node.js

In Node.js environments (build scripts, migrations, server-side processing), you can upload from file streams or buffers.

**upload-image-node.ts**

```typescript
import {createClient} from '@sanity/client'
import {createReadStream} from 'fs'
import {basename} from 'path'

const client = createClient({
  projectId: 'your-project-id',
  dataset: 'production',
  apiVersion: '2026-03-01',
  token: 'your-write-token',
  useCdn: false
})

const filePath = './images/hero.jpg'

try {
  const imageAsset = await client.assets.upload(
    'image',
    createReadStream(filePath),
    {filename: basename(filePath)}
  )

  console.log('Uploaded image:', imageAsset._id)
  console.log('URL:', imageAsset.url)
} catch (error) {
  console.error('Upload failed:', error.message)
}
```

After uploading, you typically reference the asset from a document. Use `patch()` to set the asset reference on an existing document. For Media Library assets, see [Link assets to documents](https://www.sanity.io/docs/media-library/link-media-assets).

**attach-asset-to-document.ts**

```typescript
// Upload and attach an image to a document in one step
const imageAsset = await client.assets.upload(
  'image',
  createReadStream('./images/hero.jpg'),
  {filename: 'hero.jpg'}
)

await client
  .patch('post-123')
  .set({
    mainImage: {
      _type: 'image',
      asset: {
        _type: 'reference',
        _ref: imageAsset._id
      }
    }
  })
  .commit()

console.log('Image attached to document')
```

### Uploading from the browser

In browser environments, pass a `File` or `Blob` object to the upload method.

**upload-from-file-input.ts**

```typescript
// Upload a file from an <input type="file"> element
const input = document.querySelector('input[type="file"]') as HTMLInputElement

input.addEventListener('change', async () => {
  const file = input.files?.[0]
  if (!file) return

  try {
    const asset = await client.assets.upload('image', file, {
      filename: file.name
    })
    console.log('Uploaded file:', asset._id)
  } catch (error) {
    console.error('Upload failed:', error.message)
  }
})
```

### Specifying image metadata to extract

When uploading images, use the `extract` option to control which [metadata](https://www.sanity.io/docs/apis-and-sdks/image-metadata) is processed during upload. Available values include:

- `palette`: Extracts dominant colors from the image.
- `location`: Extracts GPS coordinates from EXIF data, if available.
- `exif`: Extracts EXIF metadata like camera settings and timestamps.
- `blurhash`: Generates a compact placeholder representation.

**upload-with-metadata.ts**

```typescript
const imageAsset = await client.assets.upload(
  'image',
  createReadStream('./images/photo.jpg'),
  {
    filename: 'photo.jpg',
    extract: ['palette', 'exif', 'location', 'blurhash']
  }
)

console.log('Palette:', imageAsset.metadata.palette)
console.log('Dimensions:', imageAsset.metadata.dimensions)
```

## Querying assets

Assets in Content Lake are documents with the types `sanity.imageAsset` and `sanity.fileAsset`. You can query them with GROQ like any other document. For rendering images on your front end, see [Presenting images](https://www.sanity.io/docs/apis-and-sdks/presenting-images). You can also manage assets through the [Assets HTTP API](https://www.sanity.io/docs/archive/http-api-assets).

**query-assets.ts**

```typescript
// Fetch all image assets
const images = await client.fetch('*[_type == "sanity.imageAsset"]')

// Fetch all file assets
const files = await client.fetch('*[_type == "sanity.fileAsset"]')

// Follow a reference to get asset metadata from a document
const posts = await client.fetch(`
  *[_type == 'post'] {
    title,
    mainImage {
      asset-> {
        _id,
        url,
        metadata {
          dimensions,
          palette
        }
      }
    }
  }
`)
```

## Deleting assets from Content Lake

Delete an asset by passing its document ID to `client.delete()`. This permanently removes the asset and its associated data.

**delete-asset.ts**

```typescript
try {
  await client.delete('image-abc123-300x200-jpg')
  console.log('Asset deleted')
} catch (error) {
  if (error.statusCode === 409) {
    console.error('Asset is still referenced by other documents')
  } else {
    console.error('Delete failed:', error.message)
  }
}
```

> \[!WARNING]
> References are not removed automatically
> Deleting an asset does not remove references to it from your documents. Update or remove those references separately to avoid broken links.

## Working with Media Library

[Media Library](https://www.sanity.io/docs/media-library/introduction) is a specialized storage and delivery system for managing assets across your organization. It provides features like adaptive streaming, automatic transcoding, and thumbnail generation for video content. Unlike Content Lake assets, Media Library assets are stored separately and managed through a dedicated API.

*This is a paid feature, available as an addon on the Enterprise plan.*

### Configuring the client for Media Library

To query or interact with Media Library from `@sanity/client`, configure the client with a `resource` property pointing to your Media Library instance.

**media-library-client.ts**

```typescript
import {createClient} from '@sanity/client'

const client = createClient({
  apiVersion: '2026-03-01',
  useCdn: false,
  token: 'your-write-token',
  resource: {
    type: 'media-library',
    id: 'your-media-library-id'
  }
})
```

Or, if you have a configured client and want to use the same configuration, use `withConfig`.

**media-library-client.ts**

```typescript
import {client} from 'lib/client' // import your configured client

const mlClient = client.withConfig({
  token: 'your-write-token',
  resource: {
    type: 'media-library',
    id: 'your-media-library-id'
  }
})
```

You can find your Media Library ID in the Sanity management console under your organization settings. See [Configure your library](https://www.sanity.io/docs/media-library/configure-library) for setup details.

### Querying Media Library assets

With a Media Library-configured client, you can query assets using GROQ.

**query-media-library.ts**

```typescript
// Query all assets in your Media Library
const assets = await client.fetch('*[_type == "sanity.asset"]')

// Query only image assets
const images = await client.fetch(
  '*[assetType == "sanity.imageAsset"]'
)

// Query recent assets
const recentAssets = await client.fetch(
  '*[_type == "sanity.asset" && _createdAt > $date]',
  {date: '2026-01-01'}
)
```

### Uploading to Media Library

Upload assets to Media Library using the `client.assets.upload()` method on a Media Library-configured client.

**upload-to-media-library.ts**

```typescript
import fs from 'node:fs'

// Upload an image
const imageAsset = await client.assets.upload(
  'image',
  fs.createReadStream('photo.jpg'),
  {
    filename: 'photo.jpg',
    title: 'Product Photo'
  }
)

console.log('Uploaded:', imageAsset._id)

// Upload a video
const videoAsset = await client.assets.upload(
  'file',
  fs.createReadStream('promo.mp4'),
  {filename: 'promo.mp4'}
)

console.log('Uploaded video:', videoAsset._id)
```

### Deleting Media Library assets

Media Library uses the same mutation API as Content Lake for deletions. To ensure both the published and draft versions are removed, use a transaction.

**delete-media-library-asset.ts**

```typescript
const assetId = '36fOGtOJOadpl4F9xpksb9uKjYp'

// Delete both the asset and its draft
try {
  await client
    .transaction()
    .delete(assetId)
    .delete(`drafts.${assetId}`)
    .commit()

  console.log('Asset deleted from Media Library')
} catch (error) {
  console.error('Delete failed:', error.message)
}
```

### Getting video playback information

For video assets, use `client.mediaLibrary.video.getPlaybackInfo()` to retrieve playback URLs, thumbnails, and metadata like duration and aspect ratio. See [Working with video](https://www.sanity.io/docs/media-library/working-with-video) for a complete guide to video delivery.

**get-video-playback.ts**

```typescript
// Fetch a document with a video reference
const doc = await client.fetch(
  `*[_type == 'videoPage'][0]{ title, video }`
)

// Get playback info from the video asset reference
const playbackInfo = await client.mediaLibrary.video.getPlaybackInfo(
  doc.video.asset
)

console.log('Stream URL:', playbackInfo.stream.url)
console.log('Thumbnail:', playbackInfo.thumbnail.url)
console.log('Duration:', playbackInfo.duration)
console.log('Aspect ratio:', playbackInfo.aspectRatio)
```
