-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Security](https://docs.cloud.google.com/docs/security)
-   [IAM](https://docs.cloud.google.com/iam/docs)
-   [Reference](https://docs.cloud.google.com/iam/docs/apis)

Send feedback

# Method: projects.locations.workloadIdentityPools.create Stay organized with collections Save and categorize content based on your preferences.

 

Creates a new `[WorkloadIdentityPool](/iam/docs/reference/rest/v1/projects.locations.workloadIdentityPools#WorkloadIdentityPool)`.

You cannot reuse the name of a deleted pool until 30 days after deletion.

### HTTP request

`POST https://iam.googleapis.com/v1/{parent=projects/*/locations/*}/workloadIdentityPools`

The URL uses [gRPC Transcoding](https://google.aip.dev/127) syntax.

### Path parameters

 

Parameters

`parent`

`string`

Required. The parent resource to create the pool in. The only supported location is `global`.

### Query parameters

 

Parameters

`workloadIdentityPoolId`

`string`

Required. The ID to use for the pool, which becomes the final component of the resource name. This value should be 4-32 characters, and may contain the characters \[a-z0-9-\]. The prefix `gcp-` is reserved for use by Google, and may not be specified.

### Request body

The request body contains an instance of `[WorkloadIdentityPool](/iam/docs/reference/rest/v1/projects.locations.workloadIdentityPools#WorkloadIdentityPool)`.

### Response body

If successful, the response body contains a newly created instance of `[Operation](/iam/docs/reference/rest/Shared.Types/Operation)`.

### Authorization scopes

Requires one of the following OAuth scopes:

-   `https://www.googleapis.com/auth/cloud-platform`
-   `https://www.googleapis.com/auth/iam`

For more information, see the [Authentication Overview](/docs/authentication#authorization-gcp).

### IAM Permissions

Requires the following [IAM](https://cloud.google.com/iam/docs) permission on the `parent` resource:

-   `iam.workloadIdentityPools.create`

For more information, see the [IAM documentation](https://cloud.google.com/iam/docs).

Send feedback

Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0). For details, see the [Google Developers Site Policies](https://developers.google.com/site-policies). Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2025-05-21 UTC.
