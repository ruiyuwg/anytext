## Restricted File Types

Possibly problematic file types are automatically restricted from being uploaded to your application.
If your Collection has defined [mimeTypes](#mimetypes) or has set `allowRestrictedFileTypes` to `true`, restricted file verification will be skipped.

Restricted file types and extensions:

| File Extensions                      | MIME Type                                       |
| ------------------------------------ | ----------------------------------------------- |
| `exe`, `dll`                         | `application/x-msdownload`                      |
| `exe`, `com`, `app`, `action`        | `application/x-executable`                      |
| `bat`, `cmd`                         | `application/x-msdos-program`                   |
| `exe`, `com`                         | `application/x-ms-dos-executable`               |
| `dmg`                                | `application/x-apple-diskimage`                 |
| `deb`                                | `application/x-debian-package`                  |
| `rpm`                                | `application/x-redhat-package-manager`          |
| `exe`, `dll`                         | `application/vnd.microsoft.portable-executable` |
| `msi`                                | `application/x-msi`                             |
| `jar`, `ear`, `war`                  | `application/java-archive`                      |
| `desktop`                            | `application/x-desktop`                         |
| `cpl`                                | `application/x-cpl`                             |
| `lnk`                                | `application/x-ms-shortcut`                     |
| `pkg`                                | `application/x-apple-installer`                 |
| `htm`, `html`, `shtml`, `xhtml`      | `text/html`                                     |
| `php`, `phtml`                       | `application/x-httpd-php`                       |
| `js`, `jse`                          | `text/javascript`                               |
| `jsp`                                | `application/x-jsp`                             |
| `py`                                 | `text/x-python`                                 |
| `rb`                                 | `text/x-ruby`                                   |
| `pl`                                 | `text/x-perl`                                   |
| `ps1`, `psc1`, `psd1`, `psh`, `psm1` | `application/x-powershell`                      |
| `vbe`, `vbs`                         | `application/x-vbscript`                        |
| `ws`, `wsc`, `wsf`, `wsh`            | `application/x-ms-wsh`                          |
| `scr`                                | `application/x-msdownload`                      |
| `asp`, `aspx`                        | `application/x-asp`                             |
| `hta`                                | `application/x-hta`                             |
| `reg`                                | `application/x-registry`                        |
| `url`                                | `application/x-url`                             |
| `workflow`                           | `application/x-workflow`                        |
| `command`                            | `application/x-command`                         |

## MimeTypes

Specifying the `mimeTypes` property can restrict what files are allowed from the user's file picker. This accepts an array of strings, which can be any valid mimetype or mimetype wildcards

Some example values are: `image/*`, `audio/*`, `video/*`, `image/png`, `application/pdf`

**Example mimeTypes usage:**

```ts
import type { CollectionConfig } from 'payload'

export const Media: CollectionConfig = {
  slug: 'media',
  upload: {
    mimeTypes: ['image/*', 'application/pdf'], // highlight-line
  },
}
```

## Uploading Files

**Important:**

Uploading files is currently only possible through the REST and Local APIs due to how GraphQL
works. It's difficult and fairly nonsensical to support uploading files through GraphQL.

To upload a file, use your collection's [`create`](../rest-api/overview#collections) endpoint. Send it all the data that your Collection requires, as well as a `file` key containing the file that you'd like to upload.

Send your request as a `multipart/form-data` request, using [`FormData`](https://developer.mozilla.org/en-US/docs/Web/API/FormData) if possible.

**Note:** To include any additional fields (like `title`, `alt`, etc.), append
a `_payload` field containing a JSON-stringified object of the required
values. These values must match the schema of your upload-enabled collection.

```ts
const fileInput = document.querySelector('#your-file-input')
const formData = new FormData()

formData.append('file', fileInput.files[0])

// Replace with the fields defined in your upload-enabled collection.
// The example below includes an optional field like 'title'.
formData.append(
  '_payload',
  JSON.stringify({
    title: 'Example Title',
    description: 'An optional description for the file',
  }),
)

fetch('api/:upload-slug', {
  method: 'POST',
  body: formData,
  /**
   * Do not manually add the Content-Type Header
   * the browser will handle this.
   *
   * headers: {
   *  'Content-Type': 'multipart/form-data'
   * }
   */
})
```

## Uploading Files stored locally

If you want to upload a file stored on your machine directly using the `payload.create` method, for example, during a seed script,
you can use the `filePath` property to specify the local path of the file.

```ts
const localFilePath = path.resolve(__dirname, filename)

await payload.create({
  collection: 'media',
  data: {
    alt,
  },
  filePath: localFilePath,
})
```

The `data` property should still include all the required fields of your `media` collection.

**Important:**

Remember that all custom hooks attached to the `media` collection will still trigger.
Ensure that files match the specified mimeTypes or sizes defined in the collection's `formatOptions` or custom `hooks`.
