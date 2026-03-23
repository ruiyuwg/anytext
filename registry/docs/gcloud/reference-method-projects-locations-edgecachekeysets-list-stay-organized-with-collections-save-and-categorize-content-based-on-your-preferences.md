-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Networking](https://docs.cloud.google.com/docs/networking)
-   [Media CDN](https://docs.cloud.google.com/media-cdn/docs)
-   [Reference](https://docs.cloud.google.com/media-cdn/docs/apis)

Send feedback

# Method: projects.locations.edgeCacheKeysets.list Stay organized with collections Save and categorize content based on your preferences.

 

Lists EdgeCacheKeysets in a given project and location.

### HTTP request

`GET https://networkservices.googleapis.com/v1/{parent=projects/*/locations/*}/edgeCacheKeysets`

The URL uses [gRPC Transcoding](https://google.aip.dev/127) syntax.

### Path parameters

 

Parameters

`parent`

`string`

Required. The project and location to list `[EdgeCacheKeyset](/media-cdn/docs/reference/rest/v1/projects.locations.edgeCacheKeysets#EdgeCacheKeyset)` resources from, specified in the format `projects/*/locations/global`.

Authorization requires the following [IAM](https://cloud.google.com/iam/docs/) permission on the specified resource `parent`:

-   `networkservices.edgeCacheKeysets.list`

### Query parameters

 

Parameters

`pageSize`

`integer`

The maximum number of `[EdgeCacheKeyset](/media-cdn/docs/reference/rest/v1/projects.locations.edgeCacheKeysets#EdgeCacheKeyset)` resources to return per call.

`pageToken`

`string`

The value returned by the last `[ListEdgeCacheKeysetsResponse](/media-cdn/docs/reference/rest/v1/projects.locations.edgeCacheKeysets/list#body.ListEdgeCacheKeysetsResponse)` resource. Indicates that this is a continuation of a previous `edgeCacheKeysets.list` call, and that the system can return the next page of data.

### Request body

The request body must be empty.

### Response body

The response returned by the `edgeCacheKeysets.list` method.

If successful, the response body contains data with the following structure:

JSON representation

{
  "edgeCacheKeysets": \[
    {
      object (`[EdgeCacheKeyset](/media-cdn/docs/reference/rest/v1/projects.locations.edgeCacheKeysets#EdgeCacheKeyset)`)
    }
  \],
  "nextPageToken": string
}

 

Fields

`edgeCacheKeysets[]`

``object (`[EdgeCacheKeyset](/media-cdn/docs/reference/rest/v1/projects.locations.edgeCacheKeysets#EdgeCacheKeyset)`)``

A list of `EdgeCacheKeyset` resources.

`nextPageToken`

`string`

If there might be more results than those appearing in this response, then `nextPageToken` is included. To get the next set of results, call this method again using the value of `nextPageToken` as `[pageToken](/media-cdn/docs/reference/rest/v1/projects.locations.edgeCacheKeysets/list#body.QUERY_PARAMETERS.page_token)`.

### Authorization scopes

Requires the following OAuth scope:

-   `https://www.googleapis.com/auth/cloud-platform`

For more information, see the [Authentication Overview](https://cloud.google.com/docs/authentication/).

Send feedback

Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0). For details, see the [Google Developers Site Policies](https://developers.google.com/site-policies). Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2025-06-30 UTC.
