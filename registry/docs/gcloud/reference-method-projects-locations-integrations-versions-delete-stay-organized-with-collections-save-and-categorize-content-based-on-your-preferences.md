-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Application development](https://docs.cloud.google.com/docs/application-development)
-   [Application Integration](https://docs.cloud.google.com/application-integration/docs)
-   [Reference](https://docs.cloud.google.com/application-integration/docs/quotas)

Send feedback

# Method: projects.locations.integrations.versions.delete Stay organized with collections Save and categorize content based on your preferences.

 

Soft-deletes the integration. Changes the status of the integration to ARCHIVED. If the integration being ARCHIVED is tagged as "HEAD", the tag is removed from this snapshot and set to the previous non-ARCHIVED snapshot. The PUBLISH\_REQUESTED, DUE\_FOR\_DELETION tags are removed too. This RPC throws an exception if the version being deleted is DRAFT, and if the `lockedBy` user is not the same as the user performing the Delete. Audit fields updated include lastModifiedTimestamp, last\_modified\_by. Any existing lock is released when Deleting a integration. Currently, there is no undelete mechanism.

### HTTP request

`DELETE https://integrations.googleapis.com/v1/{name=projects/*/locations/*/integrations/*/versions/*}`

The URL uses [gRPC Transcoding](https://google.aip.dev/127) syntax.

### Path parameters

 

Parameters

`name`

`string`

Required. The version to delete. Format: projects/{project}/locations/{location}/integrations/{integration}/versions/{version}

### Request body

The request body must be empty.

### Response body

If successful, the response body is an empty JSON object.

### Authorization scopes

Requires the following OAuth scope:

-   `https://www.googleapis.com/auth/cloud-platform`

For more information, see the [Authentication Overview](/docs/authentication#authorization-gcp).

### IAM Permissions

Requires the following [IAM](https://cloud.google.com/iam/docs) permission on the `name` resource:

-   `integrations.integrationVersions.delete`

For more information, see the [IAM documentation](https://cloud.google.com/iam/docs).

Send feedback

Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0). For details, see the [Google Developers Site Policies](https://developers.google.com/site-policies). Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2025-08-22 UTC.
