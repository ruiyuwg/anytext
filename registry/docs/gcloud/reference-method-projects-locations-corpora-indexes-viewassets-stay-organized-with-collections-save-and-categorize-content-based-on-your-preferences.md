-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [AI and ML](https://docs.cloud.google.com/docs/ai-ml)
-   [Vertex AI Vision](https://docs.cloud.google.com/vision-ai/docs)
-   [Referência](https://docs.cloud.google.com/vision-ai/docs/reference/rest)

Send feedback

# Method: projects.locations.corpora.indexes.viewAssets Stay organized with collections Save and categorize content based on your preferences.

 

Lists a list of assets inside an index.

### HTTP request

`GET https://visionai.googleapis.com/v1alpha1/{index=projects/*/locations/*/corpora/*/indexes/*}:viewAssets`

The URL uses [gRPC Transcoding](https://google.aip.dev/127) syntax.

### Path parameters

 

Parameters

`index`

`string`

Required. The index that owns this collection of assets. Format: `projects/{project_number}/locations/{location}/corpora/{corpus}/indexes/{index}`

### Query parameters

 

Parameters

`pageSize`

`integer`

The maximum number of assets to return. The service may return fewer than this value. If unspecified, at most 50 assets will be returned. The maximum value is 1000; values above 1000 will be coerced to 1000.

`pageToken`

`string`

A page token, received from a previous `indexes.viewAssets` call. Provide this to retrieve the subsequent page.

When paginating, all other parameters provided to `indexes.viewAssets` must match the call that provided the page token.

`filter`

`string`

The filter applied to the returned list. Only the following filterings are supported: "assetId = xxxx", which returns asset with specified id. "assetId = xxxx, yyyy, zzzz", which returns assets with specified ids.

### Request body

The request body must be empty.

### Response body

Response message for indexes.viewAssets.

If successful, the response body contains data with the following structure:

JSON representation

{
  "indexedAssets": \[
    {
      object (`[IndexedAsset](/vision-ai/docs/reference/rest/v1alpha1/projects.locations.corpora.indexes/viewAssets#IndexedAsset)`)
    }
  \],
  "nextPageToken": string
}

 

Fields

`indexedAssets[]`

``object (`[IndexedAsset](/vision-ai/docs/reference/rest/v1alpha1/projects.locations.corpora.indexes/viewAssets#IndexedAsset)`)``

The assets from the specified index.

`nextPageToken`

`string`

A token, which can be sent as `pageToken` to retrieve the next page. If this field is omitted, there are no subsequent pages.

### Authorization scopes

Requires the following OAuth scope:

-   `https://www.googleapis.com/auth/cloud-platform`

For more information, see the [Authentication Overview](https://cloud.google.com/docs/authentication/).

### IAM Permissions

Requires the following [IAM](https://cloud.google.com/iam/docs) permission on the `index` resource:

-   `visionai.indexes.viewAssets`

For more information, see the [IAM documentation](https://cloud.google.com/iam/docs).

## IndexedAsset

An IndexedAsset is an asset that the index is built upon.

JSON representation

{
  "index": string,
  "asset": string,
  "createTime": string,
  "updateTime": string
}

 

Fields

`index`

`string`

Required. The index that this indexed asset belongs to. Format: `projects/{project_number}/locations/{location}/corpora/{corpus}/indexes/{index}`

`asset`

`string`

Required. The resource name of the asset. Format: `projects/{project_number}/locations/{locationId}/corpora/{corpus_id}/assets/{assetId}`

`createTime`

``string (`[Timestamp](https://developers.google.com/protocol-buffers/docs/reference/google.protobuf#google.protobuf.Timestamp)` format)``

Output only. The create timestamp.

A timestamp in RFC3339 UTC "Zulu" format, with nanosecond resolution and up to nine fractional digits. Examples: `"2014-10-02T15:01:23Z"` and `"2014-10-02T15:01:23.045123456Z"`.

`updateTime`

``string (`[Timestamp](https://developers.google.com/protocol-buffers/docs/reference/google.protobuf#google.protobuf.Timestamp)` format)``

Output only. The update timestamp.

A timestamp in RFC3339 UTC "Zulu" format, with nanosecond resolution and up to nine fractional digits. Examples: `"2014-10-02T15:01:23Z"` and `"2014-10-02T15:01:23.045123456Z"`.

Send feedback

Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0). For details, see the [Google Developers Site Policies](https://developers.google.com/site-policies). Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2025-06-27 UTC.
