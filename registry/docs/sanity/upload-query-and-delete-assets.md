# Upload, query, and delete assets

In cases where the UI doesn't offer enough control or automation, you can use Sanity's APIs to interact with assets.

The techniques in this guide apply to assets stored in a project's dataset. Reference the *Managing assets* portion of the [Media Library documentation](https://www.sanity.io/docs/media-library) for details on working with Media Library assets.

For details on rendering and transforming assets for your front end applications, see the [Presenting Images](https://www.sanity.io/docs/apis-and-sdks/presenting-images) documentation.

## Upload an asset

> \[!WARNING]
> Gotcha
> The path of an asset is in part determined by the result of hashing the content of the asset. If the same asset is uploaded multiple times, but with different filenames, only one asset will be created. For example, if `image.jpg` and `image-copy.jpg` are the same image, uploading both will only create one asset.

In cases where uploading assets in the UI is impractical, like batch uploads or migrations, you can use the API directly.

**JS Client (Node.js)**

```typescript
import {createClient} from '@sanity/client'
import {basename} from 'path'
import {createReadStream} from 'fs'

const client = createClient({
  projectId: 'myProjectId',
  dataset: 'myDatasetName',
  apiVersion: '2021-08-29',
  token: 'myToken'
})

const filePath = '/Users/mike/images/bicycle.jpg'

client.assets
  .upload('image', createReadStream(filePath), {
    filename: basename(filePath)
  })
  .then(imageAsset => {
    // Here you can decide what to do with the returned asset document. 
    // If you want to set a specific asset field you can with the following:
    return client
      .patch('some-document-id')
      .set({
        theImageField: {
          _type: 'image',
          asset: {
            _type: "reference",
            _ref: imageAsset._id
          }
        }
      })
      .commit()
  })
  .then(() => {
    console.log("Done!");
  })
```

**From within Studio (Browser)**

```typescript
import {useClient} from 'sanity'
import {basename} from 'path'
import {createReadStream} from 'fs'

// ... omitted for brevity
// inside a React component
const client = useClient({apiVersion: '2025-02-19'})

const file = new File(['foo'], 'foo.txt', {type: 'text/plain'})
// Upload it
client.assets
  .upload('file', file)
  .then((document) => {
    console.log('The file was uploaded!', document)
  })
  .catch((error) => {
    console.error('Upload failed:', error.message)
  })
```

**curl**

```sh
curl \
  -X POST \
  -H 'Content-Type: image/jpeg' \
  --data-binary "@/Users/mike/images/bicycle.jpg" \
  'https://myProjectId.api.sanity.io/v2021-06-07/assets/images/myDataset'

```

**Asset response shape**

```json
{
  "_id": "image-abc123_0G0Pkg3JLakKCLrF1podAdE9-538x538-jpg",
  "_type": "sanity.imageAsset", // type is prefixed by sanity schema
  "assetId": "0G0Pkg3JLakKCLrF1podAdE9",
  "path": "images/myproject/mydataset/abc123_0G0Pkg3JLakKCLrF1podAdE9-538x538.jpg",
  "url": "https://cdn.sanity.io/images/myproject/mydataset/abc123_0G0Pkg3JLakKCLrF1podAdE9-538x538.jpg",
  "originalFilename": "bicycle.jpg",
  "size": 2097152, // File size, in bytes
  "metadata": {
    "dimensions": {
      "height": 538,
      "width": 538,
      "aspectRatio": 1.0
    },
    "location":{ // only present if the original image contained location metadata
      "lat": 59.9241370,
      "lon": 10.7583846,
      "alt": 21.0
    }
  }
}
```

#### Resources

[Assets API reference](https://www.sanity.io/docs/http-reference/assets)

[@sanity/client](https://reference.sanity.io/_sanity/client/)

## Query and browse assets

To browse project assets from the Studio interface, install the [Sanity Media plugin](https://www.sanity.io/plugins/sanity-plugin-media). This adds a new tool to the toolbar and enables Studio users to browse and manage assets.

You can also query all images with GROQ using the following query:

**Images**

```groq
*[_type == "sanity.imageAsset"]
```

**Files**

```groq
*[_type == "sanity.fileAsset"]
```

Run GROQ queries through [Vision](https://www.sanity.io/docs/content-lake/the-vision-plugin), the [client](https://reference.sanity.io/_sanity/client/), or with the [Query API](https://www.sanity.io/docs/http-reference/query).

You can also use this method to query [Media Library](https://www.sanity.io/docs/media-library) assets that have been linked to your dataset.

If viewing asset data within another document type, you'll need to follow the asset's reference to view the metadata or URL. For example:

```groq
*[_type == 'post'] {
  mainImage {
    asset->
  }
}
```

## Deleting assets

Deleting an asset can be performed by deleting the associated asset document.

```javascript
import {createClient} from '@sanity/client'
const config = {
  projectId: 'myProjectID',
  dataset: 'mydataset',
  apiVersion: '2021-08-29',
  token: 'myToken'
}
const client = createClient(config)
// Note: this is the _id of the asset document.
client.delete('image-abc123_0G0Pkg3JLakKCLrF1podAdE9-538x538-jpg')
  .then(result => {
    console.log('deleted image asset', result)
  })

```

It's important to note that while the file is deleted, the CDN might have your asset cached so it may not disappear immediately.

## Download assets

In order to download an asset you need to append `?dl=<asset-of-your-choice.jpg>` to the asset URL. If you leave the filename blank, the original filename will be used if present. If the original filename is not available, the id of the file will be used instead.

```javascript
// GROQ query

*[_type == "post"] {
  title,
  mainImage{
    asset->url
  }
}
// Then you can use the URL in HTML for example like this:
// <a href={`${mainImage}?dl=`}>Hero Image</a>
```
