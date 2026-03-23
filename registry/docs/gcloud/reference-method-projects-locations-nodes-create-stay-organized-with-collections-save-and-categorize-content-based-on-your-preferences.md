-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [AI and ML](https://docs.cloud.google.com/docs/ai-ml)
-   [Cloud TPU](https://docs.cloud.google.com/tpu/docs)
-   [Reference](https://docs.cloud.google.com/tpu/docs/reference)

Send feedback

# Method: projects.locations.nodes.create Stay organized with collections Save and categorize content based on your preferences.

 

Creates a node.

### HTTP request

`POST https://tpu.googleapis.com/v1/{parent=projects/*/locations/*}/nodes`

The URL uses [gRPC Transcoding](https://google.aip.dev/127) syntax.

### Path parameters

 

Parameters

`parent`

`string`

Required. The parent resource name.

### Query parameters

 

Parameters

`nodeId`

`string`

The unqualified resource name.

### Request body

The request body contains an instance of `[Node](/tpu/docs/reference/rest/v1/projects.locations.nodes#Node)`.

### Response body

If successful, the response body contains a newly created instance of `[Operation](/tpu/docs/reference/rest/Shared.Types/ListOperationsResponse#Operation)`.

### Authorization scopes

Requires one of the following OAuth scopes:

-   `https://www.googleapis.com/auth/cloud.tpu`
-   `https://www.googleapis.com/auth/cloud-platform`

For more information, see the [Authentication Overview](https://cloud.google.com/docs/authentication/).

Send feedback

Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0). For details, see the [Google Developers Site Policies](https://developers.google.com/site-policies). Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2025-06-17 UTC.
