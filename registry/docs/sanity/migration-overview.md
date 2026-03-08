## Migration overview

Migrating from dataset-stored assets to Media Library involves the following process.

1. Export your dataset and assets.
2. Upload assets to Media Library.
3. Link assets to your dataset.
4. Update (mutate) documents in the dataset with new reference to each new ML asset.
5. Optional: Migrate legacy metadata to a Media Library aspect.

### Export your dataset and gather assets

While you can use the APIs to download each asset, search for it across documents, and write changes, we find it is easiest to download your entire dataset and assets to work with the files locally.

From your Sanity project, export the dataset with the `sanity` CLI:

**CLI**

```sh
npx sanity dataset export dataset-name
```

Replace `dataset-name` with the name of your dataset. Follow the prompts to select a download location and filename.

Next, uncompress the file (`production.tar.tz`, if your dataset was production) and you're left with a directory containing your data (`data.ndjson`, asset document data (`assets.json`), and an `images` directory.

### Upload assets to Media Library

We'll use Media Library's HTTP API to upload each image. The process looks like this:

1. Iterate over each image in the `images` directory.
2. Upload the image to Media Library using the `/upload` endpoint.
3. Store the response, which contains the `assetId` and the `assetInstanceId`. You'll need these to link the asset to your dataset.

Learn more about the [upload process in this guide](https://www.sanity.io/docs/media-library/upload-assets).

### Link assets to your dataset

Media Library connects assets to your datasets with a Global Document Reference (GDR). The process is as follows:

1. Iterate over each asset, and use the `assetId`, `assetInstanceId`, and `mediaLibraryId` to make a request to the `/assets/media-library-link` endpoint.

### Update documents to the new reference

Next, you need to iterate over the documents in the `data.ndjson` file, identify the location of each asset reference, then patch all instances with the correct reference to the asset in Media Library. This process is:

1. Iterate over the lines of `data.ndjson`
2. Check if a the line (document) contains an image reference, and if so store the document's `_id` and the image path.
3. Iterate over the matching documents and **patch** them with a `media` object containing the GDR to the asset in Media Library.

Learn more about the [linking and patching assets](https://www.sanity.io/docs/media-library/link-media-assets) process.

### Optional: Migrate metadata to aspect

Media Library offers aspects for managing internal metadata. This differs from the Media Plugin's tags and additional fields (like title, alt text, description), but can be a useful place to store these during migration.

To migrate the metadata to an aspect, the process is:

1. Create a new aspect that matches the shape of the Media Plugin's metadata.
2. After uploading assets to Media Library, collect metadata from the old assets using the `assets.json` export.
3. Map the metadata onto the new Media Library assets, and patch it into the aspects field.

Learn more about [adding aspects to uploaded assets](https://www.sanity.io/docs/media-library/assign-aspects).
