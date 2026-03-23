-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [AI and ML](https://docs.cloud.google.com/docs/ai-ml)
-   [Cloud Speech-to-Text](https://docs.cloud.google.com/speech-to-text/docs)
-   [Reference](https://docs.cloud.google.com/speech-to-text/docs/apis)

Send feedback

# Method: projects.locations.operations.list Stay organized with collections Save and categorize content based on your preferences.

 

Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`.

### HTTP request

`GET https://speech.googleapis.com/v2/{name=projects/*/locations/*}/operations`

The URL uses [gRPC Transcoding](https://google.aip.dev/127) syntax.

### Path parameters

 

Parameters

`name`

`string`

The name of the operation's parent resource.

### Query parameters

 

Parameters

`filter`

`string`

The standard list filter.

`pageSize`

`integer`

The standard list page size.

`pageToken`

`string`

The standard list page token.

`returnPartialSuccess`

`boolean`

When set to `true`, operations that are reachable are returned as normal, and those that are unreachable are returned in the \[ListOperationsResponse.unreachable\] field.

This can only be `true` when reading across collections e.g. when `parent` is set to `"projects/example/locations/-"`.

This field is not by default supported and will result in an `UNIMPLEMENTED` error if set unless explicitly documented otherwise in service or product specific documentation.

### Request body

The request body must be empty.

### Response body

If successful, the response body contains an instance of `[ListOperationsResponse](/speech-to-text/docs/reference/rest/Shared.Types/ListOperationsResponse)`.

### Authorization scopes

Requires the following OAuth scope:

-   `https://www.googleapis.com/auth/cloud-platform`

For more information, see the [Authentication Overview](/docs/authentication#authorization-gcp).

Send feedback

Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0). For details, see the [Google Developers Site Policies](https://developers.google.com/site-policies). Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2025-10-23 UTC.
