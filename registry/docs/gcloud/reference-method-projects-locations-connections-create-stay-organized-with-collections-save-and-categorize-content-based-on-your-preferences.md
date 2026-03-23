-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Data analytics](https://docs.cloud.google.com/docs/data)
-   [BigQuery](https://docs.cloud.google.com/bigquery/docs)
-   [Reference](https://docs.cloud.google.com/bigquery/quotas)

Send feedback

# Method: projects.locations.connections.create Stay organized with collections Save and categorize content based on your preferences.

 

Creates a new connection.

### HTTP request

`POST https://bigqueryconnection.googleapis.com/v1/{parent=projects/*/locations/*}/connections`

The URL uses [gRPC Transcoding](https://google.aip.dev/127) syntax.

### Path parameters

 

Parameters

`parent`

`string`

Required. Parent resource name. Must be in the format `projects/{projectId}/locations/{locationId}`

Authorization requires the following [IAM](https://cloud.google.com/iam/docs/) permission on the specified resource `parent`:

-   `bigquery.connections.create`

### Query parameters

 

Parameters

`connectionId`

`string`

Optional. Connection id that should be assigned to the created connection.

### Request body

The request body contains an instance of `[Connection](/bigquery/docs/reference/bigqueryconnection/rest/v1/projects.locations.connections#Connection)`.

### Response body

If successful, the response body contains a newly created instance of `[Connection](/bigquery/docs/reference/bigqueryconnection/rest/v1/projects.locations.connections#Connection)`.

### Authorization scopes

Requires one of the following OAuth scopes:

-   `https://www.googleapis.com/auth/bigquery`
-   `https://www.googleapis.com/auth/cloud-platform`

For more information, see the [Authentication Overview](/docs/authentication#authorization-gcp).

Send feedback

Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0). For details, see the [Google Developers Site Policies](https://developers.google.com/site-policies). Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2025-07-02 UTC.
