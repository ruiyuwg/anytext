# Importing content

> \[!NOTE]
> Media Library available
> This guide outlines details for importing documents, including images and files, into a dataset. The Media Library allows images and files to be used in any dataset in your organization.
> For details on importing assets to a centralized library, review our guide on [importing assets](https://www.sanity.io/docs/media-library/importing-assets).

There are two ways to import data into your Sanity project.

The recommended way of importing data is to use the [Command Line Interface](https://www.sanity.io/docs/apis-and-sdks/cli). You can run  `sanity dataset import --help` for a quick summary of syntax and options. Your other option is to use one of our client libraries and handle it yourself.

> \[!WARNING]
> Gotcha
> Consider disabling any webhooks you might have that could cause high volumes of traffic to the receiving endpoint on importing data.

## Import using the CLI

The Sanity import tool operates on [newline-delimited JSON](https://github.com/ndjson/ndjson-spec) (NDJSON) files. Basically, each line in a file is a valid JSON-object containing a document you want to import.

Documents should follow the structure of your [data model](https://www.sanity.io/docs/studio/connected-content) – most importantly, the requirement of a `_type` attribute. The `_id` field is optional – but helpful – in case you want to make references or be able to re-import your data replacing data from an old import. `_id`s in Sanity are usually a [GUID](http://guid.one/guid), but any string containing only letters, numbers, hyphens, and underscores are valid.

During import, all references are automatically set to *weak*, then flipped to *strong* after all documents are in place. This ensures that you can import documents that reference other documents in any order you like.

Assets (images and files) are stored using references in Sanity. To make it easy to import these and refer to them within your documents, you can use a special `_sanityAsset` property where you would normally put a `_ref`. For instance, let's say you want your document to end up like this:

```javascript
{
  "_id": "movie_123",
  "_type": "movie",
  "title": "Rogue One",
  "poster": {
    "_type": "image",
    "asset": {
      "_ref": "image_234",
      "_type": "reference"
    }
  }
}
```

This is what your ready-to-import document should look like:

```javascript
{
  "_id": "movie_123",
  "_type": "movie",
  "title": "Rogue One",
  "poster": {
    "_type": "image",
    "_sanityAsset": "image@file:///local/path/to/rogue-one-poster.jpg",
  }
}
```

However, ndjson uses the newline character as delimiter (NDJSON == Newline Delimited JSON), therefore your ndjson file must be structured with one document on each line, like this:

```json
{"_id": "movie_123", "_type": "movie", "title": "Rogue One", "poster": {"_type": "image", "_sanityAsset": "image@file:///local/path/to/rogue-one-poster.jpg"}}
{"_id": "another_movie", "_type": "movie"}
{"_id": "yet_another_movie", "_type": "movie"}

```

Note that you need to prefix the asset URL with a type declaration – either `image@` or `file@`.

If your asset is on the Internet use `image@https://example.com/path/to/rogue-one-poster.jpg` instead of `image@file:///local/path/to/rogue-one-poster.jpg`.

> \[!WARNING]
> Gotcha
> File URIs are absolute so include the entire path.

Once you have prepared your ndjson file, you can run the import using the Sanity CLI.

> \[!NOTE]
> What should I import?
> In some cases you will want to import your ndjson file, such as when you've exported your dataset, made changes to the ndjson file, and are importing it back into the same dataset.
> In other cases you will want to compress your dataset back into a tarball / tar file (`.tar`, `.tar.gz`, or `.tgz`), which includes the ndjson file and your assets. You might take this approach when [migrating data](https://www.sanity.io/docs/content-lake/schema-and-content-migrations) to a new dataset, as you'll want to maintain references to assets.
> If you're getting an import error like `Error: Error while fetching asset from "file://./images/<image-name>.<ext>": File does not exist at the specified endpoint`, you can either (1) make the filenames absolute or (2) import a tarball (including assets) rather than an ndjson file.

```bash
sanity dataset import <file> <targetDataset>
```

E.g.:

```bash
sanity dataset import my-data-dump.ndjson production

// or

sanity dataset import staging.tar.gz production
```

> \[!WARNING]
> Why is \_updatedAt updated after import?
> When you import documents that reference assets or other documents, Sanity initially preserves the value of the `_updatedAt` field of these documents.
> However, references in documents are first imported as [weak references](https://www.sanity.io/docs/studio/reference-type), and strengthened later in the import process. To strengthen references, patch mutations are submitted for the containing documents.
> **These patches run in new transactions, which sets \_updatedAt to the time the patch executes successfully**. Documents without references will keep their original `_updatedAt`.

> \[!TIP]
> Protip
> The import will fail if an incoming document already exists in the dataset. A couple of options allow you to amend this:
> `--replace` Overwrite existing documents. If you specify `_id` in the imported data, this flag can be very useful. It will let you reimport stuff that you got wrong in an earlier pass.
> `--missing` Only create documents which don't exist, leave the rest alone.
> The import will also fail if an asset is unavailable. This typically happens if the file isn't at the given path on your local system or the asset URL returns 404. You can tell the import *not* to fail on a missing asset by passing the `--allow-failing-assets` option.

> \[!TIP]
> Protip
> Check out our [reference-type docs](https://www.sanity.io/docs/studio/reference-type) page for more ways on how to reference different documents.

## Import using a client library

If you prefer not to use our CLI import tool, you may of course do the import yourself with help from one of our client libraries.

There are some common pitfalls to keep in mind:

- *Concurrency*. While you may have thousands of documents to import, you shouldn't trigger thousands of requests in parallel. This is going to exceed API rate limits and might fail. We advise you to use a queue with a reasonably low concurrency.
  Use a library to keep your import below our [API rate limit](https://www.sanity.io/docs/content-lake/technical-limits):

```javascript
const {default: PQueue} = require('p-queue')
const queue = new PQueue({
  concurrency: 1,
  interval: 1000 / 25
})

queue.add(() => client.create(...))
queue.add(() => client.patch('id').inc('visits').commit())
```

- *API usage limits*. Importing large data sets can quickly cause a lot of requests, especially if you import a single document per request. It is usually a good idea to send [multiple mutations within a single transaction](https://www.sanity.io/docs/js-client#multiple-mutations-in-a-transaction).
- *Mutation size limits*. While it's a good idea to do multiple mutations per transaction, you need to make sure that the size of the request is [within our limits](https://www.sanity.io/docs/content-lake/technical-limits), in terms of byte size.
- *Mutation visibility*. A Sanity client will use the [visibility mode](https://www.sanity.io/docs/http-mutations#visibility-937bc4250c79) of `sync` by default, which means that it will wait for the documents to be searchable before returning. This should not be necessary when importing large datasets, so we recommend you use `deferred`. If you have a lot of documents, it can take a little while for them to be searchable, but the import job will move along much faster.
- *References*. If you are referring to one document from another, they either need to be imported in the right order, or the reference needs to be flagged as *weak* by setting the `_weak` property to `true`. After importing, you probably want to remove the weak property in order to prevent referenced documents from being deleted.

> \[!WARNING]
> Gotcha
> When a weak reference is desired, you should use the `weak` property when [defined in the schema](https://www.sanity.io/docs/studio/reference-type) but `_weak` when set up using a client. Using the `weak` property with the client will likely return the error: `key "weak" not allowed in ref`.
> `weak` in the schema, `_weak` in the JSON.

- *Assets*. Since assets (e.g., files and images) in Sanity are stored using references, you'll need to upload the assets first and put the returned document ID in your reference.

With this in mind, do check out our [client libraries](https://www.sanity.io/docs/client-libraries) documentation to see how to perform mutations.
