-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Databases](https://docs.cloud.google.com/docs/databases)
-   [Oracle Database at Google Cloud](https://docs.cloud.google.com/oracle/database/docs)
-   [Reference](https://docs.cloud.google.com/oracle/database/docs/apis)

Send feedback

# Method: projects.locations.cloudVmClusters.list Stay organized with collections Save and categorize content based on your preferences.

 

Lists the VM Clusters in a given project and location.

### HTTP request

`GET https://oracledatabase.googleapis.com/v1/{parent=projects/*/locations/*}/cloudVmClusters`

The URL uses [gRPC Transcoding](https://google.aip.dev/127) syntax.

### Path parameters

 

Parameters

`parent`

`string`

Required. The name of the parent in the following format: projects/{project}/locations/{location}.

### Query parameters

 

Parameters

`pageSize`

`integer`

Optional. The number of VM clusters to return. If unspecified, at most 50 VM clusters will be returned. The maximum value is 1,000.

`pageToken`

`string`

Optional. A token identifying the page of results the server returns.

`filter`

`string`

Optional. An expression for filtering the results of the request.

### Request body

The request body must be empty.

### Response body

The response for `CloudVmCluster.List`.

If successful, the response body contains data with the following structure:

JSON representation

{
  "cloudVmClusters": \[
    {
      object (`[CloudVmCluster](/oracle/database/docs/reference/rest/v1/projects.locations.cloudVmClusters#CloudVmCluster)`)
    }
  \],
  "nextPageToken": string
}

 

Fields

`cloudVmClusters[]`

``object (`[CloudVmCluster](/oracle/database/docs/reference/rest/v1/projects.locations.cloudVmClusters#CloudVmCluster)`)``

The list of VM Clusters.

`nextPageToken`

`string`

A token to fetch the next page of results.

### Authorization scopes

Requires the following OAuth scope:

-   `https://www.googleapis.com/auth/cloud-platform`

For more information, see the [Authentication Overview](/docs/authentication#authorization-gcp).

### IAM Permissions

Requires the following [IAM](https://cloud.google.com/iam/docs) permission on the `parent` resource:

-   `oracledatabase.cloudVmClusters.list`

For more information, see the [IAM documentation](https://cloud.google.com/iam/docs).

Send feedback

Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0). For details, see the [Google Developers Site Policies](https://developers.google.com/site-policies). Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2025-05-30 UTC.
