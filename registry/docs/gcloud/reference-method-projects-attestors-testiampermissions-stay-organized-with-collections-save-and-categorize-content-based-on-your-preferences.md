-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Security](https://docs.cloud.google.com/docs/security)
-   [Binary Authorization](https://docs.cloud.google.com/binary-authorization/docs)
-   [Reference](https://docs.cloud.google.com/binary-authorization/docs/api)

Send feedback

# Method: projects.attestors.testIamPermissions Stay organized with collections Save and categorize content based on your preferences.

 

Returns permissions that a caller has on the specified resource. If the resource does not exist, this will return an empty set of permissions, not a `NOT_FOUND` error.

Note: This operation is designed to be used for building permission-aware UIs and command-line tools, not for authorization checking. This operation may "fail open" without warning.

### HTTP request

`POST https://binaryauthorization.googleapis.com/v1/{resource=projects/*/attestors/*}:testIamPermissions`

The URL uses [gRPC Transcoding](https://google.aip.dev/127) syntax.

### Path parameters

 

Parameters

`resource`

`string`

REQUIRED: The resource for which the policy detail is being requested. See [Resource names](https://cloud.google.com/apis/design/resourceNames) for the appropriate value for this field.

### Request body

The request body contains data with the following structure:

JSON representation

{
  "permissions": \[
    string
  \]
}

 

Fields

`permissions[]`

`string`

The set of permissions to check for the `resource`. Permissions with wildcards (such as `*` or `storage.*`) are not allowed. For more information see [IAM Overview](https://cloud.google.com/iam/docs/overview#permissions).

### Response body

If successful, the response body contains an instance of `[TestIamPermissionsResponse](/binary-authorization/docs/reference/rest/Shared.Types/TestIamPermissionsResponse)`.

### Authorization scopes

Requires the following OAuth scope:

-   `https://www.googleapis.com/auth/cloud-platform`

For more information, see the [Authentication Overview](https://cloud.google.com/docs/authentication/).

Send feedback

Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0). For details, see the [Google Developers Site Policies](https://developers.google.com/site-policies). Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2025-05-30 UTC.
