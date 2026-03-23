-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Compute](https://docs.cloud.google.com/docs/compute-area)
-   [Compute Engine](https://docs.cloud.google.com/compute/docs)
-   [API e riferimenti](https://docs.cloud.google.com/compute/docs/apis)

Send feedback

# Method: backendBuckets.testIamPermissions Stay organized with collections Save and categorize content based on your preferences.

 

Returns permissions that a caller has on the specified resource.

### HTTP request

`POST https://compute.googleapis.com/compute/beta/projects/{project}/global/backendBuckets/{resource}/testIamPermissions`

The URL uses [gRPC Transcoding](https://google.aip.dev/127) syntax. To know more about valid error responses that can be thrown by this HTTP request, please refer to the [service error catalog](/compute/docs/reference/rest/beta/errors)

### Path parameters

 

Parameters

`project`

`string`

Project ID for this request.

`resource`

`string`

Name or id of the resource for this request.

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

The set of permissions to check for the 'resource'. Permissions with wildcards (such as '\*' or 'storage.\*') are not allowed.

### Response body

If successful, the response body contains data with the following structure:

JSON representation

{
  "permissions": \[
    string
  \]
}

 

Fields

`permissions[]`

`string`

A subset of `TestPermissionsRequest.permissions` that the caller is allowed.

### Authorization scopes

Requires one of the following OAuth scopes:

-   `https://www.googleapis.com/auth/compute.readonly`
-   `https://www.googleapis.com/auth/compute`
-   `https://www.googleapis.com/auth/cloud-platform`

For more information, see the [Authentication Overview](/docs/authentication#authorization-gcp).

### IAM Permissions

In addition to any permissions specified on the fields above, authorization requires one or more of the following [IAM](https://cloud.google.com/iam/docs/) permissions:

-   `compute.backendBuckets.list`

To find predefined roles that contain those permissions, see [Compute Engine IAM Roles](/compute/docs/access/iam).

Send feedback

Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0). For details, see the [Google Developers Site Policies](https://developers.google.com/site-policies). Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2025-09-18 UTC.
