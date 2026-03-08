## Uploading Files from Remote URLs

The `pasteURL` option allows users to fetch files from remote URLs by pasting them into an Upload field. This option is **enabled by default** and can be configured to either **allow unrestricted client-side fetching** or **restrict server-side fetching** to specific trusted domains.

By default, Payload uses **client-side fetching**, where the browser downloads the file directly from the provided URL. However, **client-side fetching will fail if the URL’s server has CORS restrictions**, making it suitable only for internal URLs or public URLs without CORS blocks.

To fetch files from **restricted URLs** that would otherwise be blocked by CORS, use **server-side fetching** by configuring the `pasteURL` option with an `allowList` of trusted domains. This method ensures that Payload downloads the file on the server and streams it to the browser. However, for security reasons, only URLs that match the specified `allowList` will be allowed.

#### Configuration Example

Here’s how to configure the pasteURL option to control remote URL fetching:

```ts
import type { CollectionConfig } from 'payload'

export const Media: CollectionConfig = {
  slug: 'media',
  upload: {
    pasteURL: {
      allowList: [
        {
          hostname: 'payloadcms.com', // required
          pathname: '',
          port: '',
          protocol: 'https',
          search: '',
        },
        {
          hostname: 'example.com',
          pathname: '/images/*',
        },
      ],
    },
  },
}
```

You can also adjust server-side fetching at the upload level as well, this does not effect the `CORS` policy like the `pasteURL` option does, but it allows you to skip the safe fetch check for specific URLs.

```
import type { CollectionConfig } from 'payload'

export const Media: CollectionConfig = {
  slug: 'media',
  upload: {
    skipSafeFetch: [
      {
        hostname: 'example.com',
        pathname: '/images/*',
      },
    ],
  },
}
```

##### Accepted Values for `pasteURL`

| Option          | Description                                                                                                                                                    |
| --------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **`undefined`** | Default behavior. Enables client-side fetching for internal or public URLs.                                                                                    |
| **`false`**     | Disables the ability to paste URLs into Upload fields.                                                                                                         |
| **`allowList`** | Enables server-side fetching for specific trusted URLs. Requires an array of objects defining trusted domains. See the table below for details on `AllowItem`. |

##### `AllowItem` Properties

*An asterisk denotes that an option is required.*

| Option            | Description                                                                                          | Example       |
| ----------------- | ---------------------------------------------------------------------------------------------------- | ------------- |
| **`hostname`** \* | The hostname of the allowed URL. This is required to ensure the URL is coming from a trusted source. | `example.com` |
| **`pathname`**    | The path portion of the URL. Supports wildcards to match multiple paths.                             | `/images/*`   |
| **`port`**        | The port number of the URL. If not specified, the default port for the protocol will be used.        | `3000`        |
| **`protocol`**    | The protocol to match. Must be either `http` or `https`. Defaults to `https`.                        | `https`       |
| **`search`**      | The query string of the URL. If specified, the URL must match this exact query string.               | `?version=1`  |

## Access Control

All files that are uploaded to each Collection automatically support the `read` [Access Control](../access-control/overview) function from the Collection itself. You can use this to control who should be allowed to see your uploads, and who should not.

## Modifying response headers

You can modify the response headers for files by specifying the `modifyResponseHeaders` option in your upload config. This option accepts an object with existing headers and allows you to manipulate the response headers for media files.

### Modifying existing headers

With this method you can directly interface with the `Headers` object and modify the existing headers to append or remove headers.

```ts
import type { CollectionConfig } from 'payload'

export const Media: CollectionConfig = {
  slug: 'media',
  upload: {
    modifyResponseHeaders: ({ headers }) => {
      headers.set('X-Frame-Options', 'DENY') // You can directly set headers without returning
    },
  },
}
```

### Return new headers

You can also return a new `Headers` object with the modified headers. This is useful if you want to set new headers or remove existing ones.

```ts
import type { CollectionConfig } from 'payload'

export const Media: CollectionConfig = {
  slug: 'media',
  upload: {
    modifyResponseHeaders: ({ headers }) => {
      const newHeaders = new Headers(headers) // Copy existing headers
      newHeaders.set('X-Frame-Options', 'DENY') // Set new header

      return newHeaders
    },
  },
}
```
