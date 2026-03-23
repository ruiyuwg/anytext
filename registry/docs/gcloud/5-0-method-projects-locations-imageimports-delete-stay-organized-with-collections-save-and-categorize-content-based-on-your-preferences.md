-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Migration](https://docs.cloud.google.com/docs/migration)
-   [Migrate to Virtual Machines](https://docs.cloud.google.com/migrate/virtual-machines/docs/5.0)
-   [Reference](https://docs.cloud.google.com/migrate/virtual-machines/docs/5.0/reference)

Send feedback

# Method: projects.locations.imageImports.delete Stay organized with collections Save and categorize content based on your preferences.

 

Deletes a single ImageImport.

### HTTP request

`DELETE https://vmmigration.googleapis.com/v1alpha1/{name=projects/*/locations/*/imageImports/*}`

The URL uses [gRPC Transcoding](https://google.aip.dev/127) syntax.

### Path parameters

 

Parameters

`name`

`string`

Required. The ImageImport name.

### Query parameters

 

Parameters

`requestId`

`string`

Optional. A request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes after the first request.

For example, consider a situation where you make an initial request and t he request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments.

The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000).

### Request body

The request body must be empty.

### Response body

If successful, the response body contains an instance of `[Operation](/migrate/virtual-machines/docs/5.0/reference/rest/v1alpha1/projects.locations.operations#Operation)`.

### Authorization scopes

Requires the following OAuth scope:

-   `https://www.googleapis.com/auth/cloud-platform`

For more information, see the [Authentication Overview](https://cloud.google.com/docs/authentication/).

Send feedback

Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0). For details, see the [Google Developers Site Policies](https://developers.google.com/site-policies). Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2025-07-28 UTC.
