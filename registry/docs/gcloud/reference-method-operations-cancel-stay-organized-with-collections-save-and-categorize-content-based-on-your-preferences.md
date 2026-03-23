-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [AI and ML](https://docs.cloud.google.com/docs/ai-ml)
-   [Video Intelligence API](https://docs.cloud.google.com/video-intelligence/docs)

Send feedback

# Method: operations.cancel Stay organized with collections Save and categorize content based on your preferences.

 

Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Clients can use `[Operations.GetOperation](/video-intelligence/docs/reference/rest/v1/projects.locations.operations/get#google.longrunning.Operations.GetOperation)` or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an `[Operation.error](/video-intelligence/docs/reference/rest/v1/operations#Operation.FIELDS.error)` value with a `[google.rpc.Status.code](/video-intelligence/docs/reference/rest/v1/operations#Operation.Status.FIELDS.code)` of 1, corresponding to `Code.CANCELLED`.

### HTTP request

`POST https://videointelligence.googleapis.com/v1/operations/{name}:cancel`

The URL uses [gRPC Transcoding](https://github.com/googleapis/googleapis/blob/master/google/api/http.proto) syntax.

### Path parameters

Parameters

`name`

`string`

The name of the operation resource to be cancelled.

### Request body

The request body must be empty.

### Response body

If successful, the response body will be empty.

### Authorization Scopes

Requires the following OAuth scope:

-   `https://www.googleapis.com/auth/cloud-platform`

For more information, see the [Authentication Overview](https://cloud.google.com/docs/authentication/).

Send feedback

Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0). For details, see the [Google Developers Site Policies](https://developers.google.com/site-policies). Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2025-07-09 UTC.
