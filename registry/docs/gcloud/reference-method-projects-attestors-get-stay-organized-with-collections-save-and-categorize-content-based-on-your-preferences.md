-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Security](https://docs.cloud.google.com/docs/security)
-   [Binary Authorization](https://docs.cloud.google.com/binary-authorization/docs)
-   [Reference](https://docs.cloud.google.com/binary-authorization/docs/api)

Send feedback

# Method: projects.attestors.get Stay organized with collections Save and categorize content based on your preferences.

 

Gets an `[attestor](/binary-authorization/docs/reference/rest/v1/projects.attestors#Attestor)`. Returns `NOT_FOUND` if the `[attestor](/binary-authorization/docs/reference/rest/v1/projects.attestors#Attestor)` does not exist.

### HTTP request

`GET https://binaryauthorization.googleapis.com/v1/{name=projects/*/attestors/*}`

The URL uses [gRPC Transcoding](https://google.aip.dev/127) syntax.

### Path parameters

 

Parameters

`name`

`string`

Required. The name of the `[attestor](/binary-authorization/docs/reference/rest/v1/projects.attestors#Attestor)` to retrieve, in the format `projects/*/attestors/*`.

Authorization requires the following [IAM](https://cloud.google.com/iam/docs/) permission on the specified resource `name`:

-   `binaryauthorization.attestors.get`

### Request body

The request body must be empty.

### Response body

If successful, the response body contains an instance of `[Attestor](/binary-authorization/docs/reference/rest/v1/projects.attestors#Attestor)`.

### Authorization scopes

Requires the following OAuth scope:

-   `https://www.googleapis.com/auth/cloud-platform`

For more information, see the [Authentication Overview](https://cloud.google.com/docs/authentication/).

Send feedback

Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0). For details, see the [Google Developers Site Policies](https://developers.google.com/site-policies). Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2025-05-30 UTC.
