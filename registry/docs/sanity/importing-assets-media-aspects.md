# Importing assets (media + aspects)

When importing assets to the library, there are two primary goals:

1. Upload the media so it can be used in a studio or another application.
2. Assign [aspect data](https://www.sanity.io/docs/media-library/aspect-patterns) so that the asset is categorized and tagged correctly.

There are multiple ways to import assets into your library to accomplish these goals together. The recommended way is to use the [Command Line Interface](https://www.sanity.io/docs/apis-and-sdks/cli). You can run  `npx sanity media import --help` for a quick summary of syntax and options.

## Import using the CLI

The `media import` command operates on a directory or archive that can have three components:

1. An `images` directory for files that should be uploaded as an image.
2. A `files` directory for non-image files.
3. A `data.ndjson` file that contains aspect data for any of the files contained in the `images` or `files` directories.

```text
.
├── data.ndjson
├── images
│   └── ...all image files
└── files
    └── ...all other files
```

The `import` command uploads every file contained within the `images` and `files` directories to the library. If an asset with a matching SHA-1 hash is identified within the library, then that file is skipped.

> \[!NOTE]
> Each of the three components is optional. `import` will use the pieces that are provided.

#### `data.ndjson` format

`data.ndjson` is a [newline-delimited JSON file](https://github.com/ndjson/ndjson-spec) (NDJSON) that can contain aspect information for any of the processed files. Each line must be a valid JSON object containing the information that should be associated with a single file.

Here's an are examples of sample JSON objects used to define a few aspects for files:

**Asset 1**

```json
{
  "filename": "images/my_example_photo_1.jpg",
  "aspects": {
    "description":"A dog chasing a stick"
  }
}
```

**Asset 2**

```json
{
  "filename": "images/my_example_photo_2.jpg",
  "aspects": {
    "licensedPhotograph": {
      "expiration": "2026-05-02T17:34:00.000Z",
      "photographer": {
        "_ref": "dataset:3do82whm.example:photographer-7926527",
        "_type": "globalDocumentReference",
        "_weak": true
      }
    }
  }
}
```

However, NDJSON uses the newline character as delimiter to combine multiple JSON objects into a single file. Here's the two example objects combined into a single NDJSON file.

**data.ndjson**

```json
{"filename": "images/my_example_photo_1.jpg","aspects":{"description":"A dog chasing a stick"}}
{"filename": "images/my_example_photo_2.jpg","aspects":{"licensedPhotograph":{"expiration": "2026-05-02T17:34:00.000Z","photographer": {"_ref":"dataset:3do82whm.example:photographer-7926527","_type":"globalDocumentReference","_weak": true}}}}
```

Each JSON object for an asset has two components:

1. `filename`: The relative path to the file you want to apply the aspect information to.
2. `aspects`: The aspect data that should be saved attached to the asset.

Once you've prepared your files, you can run the import using the Sanity CLI.

> \[!NOTE]
> What should I import?
> In some cases you will want to import your directory, such as when you've exported your library, made changes to the ndjson file, and are importing it back into the same library.
> In other cases you will want to compress your assets into a tarball / tar file (`.tar`, `.tar.gz`, or `.tgz`), which includes the ndjson file and your assets.

```sh
npx sanity media import my-assets

# or

npx sanity media import my-assets.tar.gz
```

> \[!TIP]
> Protip
> If a file matches an existing asset in the library, then that asset is not uploaded a second time. However any aspect data for that file in `data.ndjson` will still be processed.
> This can be used to add aspect data for a set of assets that have already been imported into the library. If there's no aspect information yet, then the value within `data.ndjson` will be used. If there's existing aspect information, then the values in `data.ndjson` will be skipped unless the `--replace-aspects` option is used.

## Import using a client library

If you prefer not to use our CLI import tool, you may run the import yourself by using the HTTP API.

1. [Upload an asset](https://www.sanity.io/docs/media-library/upload-assets)
2. [Add an aspect to an asset](https://www.sanity.io/docs/media-library/assign-aspects)

There are some common pitfalls to keep in mind:

- Concurrency: While you may have thousands of assets to import, you shouldn't trigger thousands of requests in parallel. This is going to exceed API rate limits and might fail. We advise you to use a queue with a reasonably low concurrency.
  Use a library to keep your import below our [API rate limit](https://www.sanity.io/docs/content-lake/technical-limits):
- API usage limits: Importing large libraries can quickly cause a lot of requests, especially if you import a single asset per request. It is usually a good idea to send [multiple mutations within a single transaction](https://www.sanity.io/docs/js-client#multiple-mutations-in-a-transaction).
- Mutation size limits: While it's a good idea to do multiple mutations per transaction, you need to make sure that the size of the request is [within our limits](https://www.sanity.io/docs/content-lake/technical-limits), in terms of byte size.
