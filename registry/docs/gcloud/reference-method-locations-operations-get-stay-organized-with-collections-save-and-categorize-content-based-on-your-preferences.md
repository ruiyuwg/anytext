-   [Home](https://docs.cloud.google.com/)
-   [Technology areas](https://docs.cloud.google.com/docs)
-   [Vision API Product Search](https://docs.cloud.google.com/vision/product-search)
-   [Reference](https://docs.cloud.google.com/vision/product-search/docs/apis)

# Method: locations.operations.get Stay organized with collections Save and categorize content based on your preferences.

 

Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service.

### HTTP request

`GET https://vision.googleapis.com/v1/{name=locations/*/operations/*}`

The URL uses [gRPC Transcoding](https://github.com/googleapis/googleapis/blob/master/google/api/http.proto) syntax.

### Path parameters

Parameters

`name`

`string`

The name of the operation resource.

### Request body

The request body must be empty.

### Response body

If successful, the response body contains an instance of `[Operation](/vision/product-search/docs/reference/rest/v1/locations.operations#Operation)`.

### Authorization Scopes

Requires one of the following OAuth scopes:

-   `https://www.googleapis.com/auth/cloud-platform`
-   `https://www.googleapis.com/auth/cloud-vision`

For more information, see the [Authentication Overview](https://cloud.google.com/docs/authentication/).

Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0). For details, see the [Google Developers Site Policies](https://developers.google.com/site-policies). Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2025-06-27 UTC.
