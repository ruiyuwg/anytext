# Query aspects

When you create and deploy an aspect, it's stored in the Media Library dataset alongside your asset documents. In this guide, you'll query your Media Library based on your aspects.

Prerequisites:

- API version v2025-02-19 or later

Some examples below use JavaScript's `fetch` to perform API calls, but the same principles apply regardless of the language or request library.

## Retrieve aspect data in a dataset query

> \[!WARNING]
> Visibility
> **Option 1: Public aspects - Recommended**
> To resolve the value of a media library aspect in your dataset without using an authenticated query, we support marking the aspect definition as public. This allows you to mark the individual aspect definitions as public, while keeping other data private.
> **Option 2: Authorized tokens**
> For environments where your token remains secure, such as server-side rendered apps and pages (SSR), you can make queries with an authenticated robot or user token that has access to both the project dataset and Media Library. This allows `documents::get` to resolve the global document reference to the library's document. Do not use this approach if your token is sent to a client bundle.

To retrieve aspect data in your dataset queries, is to supply the `media` reference along with the aspect name to the `media::aspect` GROQ function.

The `media` field is a [Global Document Reference](https://www.sanity.io/docs/studio/global-document-reference-type) that links to the corresponding asset in the Media Library. Its `_ref` value follows the format `media-library:{LIBRARY_ID}:{ASSET_DOCUMENT_ID}`, where `ASSET_DOCUMENT_ID` is the full `_id` of the asset document (for example, `image-abc123-800x600-png`).

**GROQ**

```groq
*[_type == "post"][0]{
  _id,
  mainImage{
    "url": asset->url,
    "copyright": media::aspect(media, "copyright")
  }
}
```

**Example result**

```json
{
  "_id": "09c3264a-7ed8-4f1d-8264-8dd172d92103",
  "mainImage": {
    "copyright": {
      "license": "...",
      "...": "...."
    },
    "url": "https://cdn.sanity.io/images/y856rro4/production/6005c6a1da9e27b033589ef439f8bb8f38420933-5152x7728.jpg"
  }
}
```

To resolve aspects in a non-authenticated query the aspect definition has to be [marked as public](https://www.sanity.io/docs/media-library/create-aspect).

### Using the media library reference

An alternative method to retrieve aspect data in your dataset queries, is to supply the `media` reference to the `documents::get` GROQ function. This function lets you dereference [Global Document References](https://www.sanity.io/docs/studio/global-document-reference-type).

The following example dereferences the linked `asset` to retrieve the asset's `url`, then dereferences the `media` reference to obtain the `aspects` object.

**GROQ**

```groq
*[_type == "post"][0]{
  _id,
  mainImage{
    "url": asset->url,
    "aspects": documents::get(media).aspects
  }
}
```

**Example result**

```json
{
  "_id": "09c3264a-7ed8-4f1d-8264-8dd172d92103",
  "mainImage": {
    "aspects": {
      "metadata": {
        "description": "Migrated description",
        "tags": [
          "photo"
        ],
        "title": "Migrated title"
      }
    },
    "url": "https://cdn.sanity.io/images/y856rro4/production/6005c6a1da9e27b033589ef439f8bb8f38420933-5152x7728.jpg"
  }
}
```

The shape of the aspect data is dependent on your [aspect schema](https://www.sanity.io/docs/media-library/create-aspect).

## List all aspects

Aspects are Sanity documents with a `_type` of `sanity.asset.aspect`. You can query them with GROQ using the Media Library's query endpoint.

**list-aspects.ts**

```
const mediaLibraryId = '<your-library-id>'
const token = '<your-auth-token>'
const query = `*[_type == 'sanity.asset.aspect'] { ... }`

await fetch(`https://api.sanity.io/v2025-02-19/media-libraries/${mediaLibraryId}/query?query=${query}`, {
  method: 'GET',
  headers: {
    'Authorization': `Bearer ${token}`
  }
})
```

Like other Sanity queries, you'll receive a response containing the original query, a result, sync tags, and the response time. Here's an example response for a single field, boolean aspect:

**response.json**

```json
{
  "query": "*[_type == 'sanity.asset.aspect'] { ... }",
  "result": [
    {
      "_type": "sanity.asset.aspect",
      "definition": {
        "type": "boolean",
        "initialValue": false,
        "name": "placeholder",
        "description": "Set to true for temporary placeholder assets.",
        "title": "Placeholder"
      },
      "_id": "placeholder",
      "_updatedAt": "2025-04-15T23:21:59Z",
      "_system": {
        "createdBy": "gvRshKueQ"
      },
      "_createdAt": "2025-04-15T23:16:59Z",
      "_rev": "liBwLfU12KkZimf6bVlggr"
    }
  ],
  "syncTags": [
    "s1:W7DfKQ"
  ],
  "ms": 3
}
```

## Query assets by aspect details

Any asset document in your library that has an assigned aspect will include those aspect details in an `aspects` property. You can query for specific aspect information using GROQ and the Media Library's query endpoint.

As an example, if you want to query all assets that have the `placeholder` aspect set to `true`, you can perform the following query.

**query-by-aspect.ts**

```
const mediaLibraryId = '<your-library-id>'
const token = '<your-auth-token>'

// You may need to encode your query to pass it as a query string.
const query = encodeURIComponent(`*[_type == 'sanity.asset' && (defined(aspects.placeholder) && true == aspects.placeholder)]`)

await fetch(`https://api.sanity.io/v2025-02-19/media-libraries/${mediaLibraryId}/query?query=${query}`, {
  method: 'GET',
  headers: {
    'Authorization': `Bearer ${token}`
  }
})
```

The above request returns any `sanity.asset` document with the `placeholder` aspect set to `true`.

### `POST` instead of `GET`

You can also query with a `POST` request. Instead of using the `?query=` parameter, set the body to your stringified query, the method to `POST`, and the `Content-type` to `application/json`. Here's the same example above, but as a `POST`.

**query-post.ts**

```
const mediaLibraryId = '<your-library-id>'
const token = '<your-auth-token>'
const query = `*[_type == 'sanity.asset' && (defined(aspects.placeholder) && true == aspects.placeholder)]`

await fetch(`https://api.sanity.io/v2025-02-19/media-libraries/${mediaLibraryId}/query`, {
  method: 'POST',
  body: JSON.stringify({query}),
  headers: {
    'Authorization': `Bearer ${token}`,
    'Content-Type': 'application/json'
  }
})
```
