-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [AI and ML](https://docs.cloud.google.com/docs/ai-ml)
-   [Vertex AI Search](https://docs.cloud.google.com/generative-ai-app-builder/docs)
-   [Reference](https://docs.cloud.google.com/generative-ai-app-builder/docs/apis)

Send feedback

# Method: projects.locations.collections.dataStores.schemas.get Stay organized with collections Save and categorize content based on your preferences.

 

Gets a `[Schema](/generative-ai-app-builder/docs/reference/rest/v1alpha/projects.locations.collections.dataStores.schemas#Schema)`.

### HTTP request

`GET https://discoveryengine.googleapis.com/v1alpha/{name=projects/*/locations/*/collections/*/dataStores/*/schemas/*}`

The URL uses [gRPC Transcoding](https://google.aip.dev/127) syntax.

### Path parameters

 

Parameters

`name`

`string`

Required. The full resource name of the schema, in the format of `projects/{project}/locations/{location}/collections/{collection}/dataStores/{dataStore}/schemas/{schema}`.

### Request body

The request body must be empty.

### Response body

If successful, the response body contains an instance of `[Schema](/generative-ai-app-builder/docs/reference/rest/v1alpha/projects.locations.collections.dataStores.schemas#Schema)`.

### Authorization scopes

Requires one of the following OAuth scopes:

-   `https://www.googleapis.com/auth/cloud-platform`
-   `https://www.googleapis.com/auth/discoveryengine.readwrite`

For more information, see the [Authentication Overview](/docs/authentication#authorization-gcp).

### IAM Permissions

Requires the following [IAM](https://cloud.google.com/iam/docs) permission on the `name` resource:

-   `discoveryengine.schemas.get`

For more information, see the [IAM documentation](https://cloud.google.com/iam/docs).

Send feedback

Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0). For details, see the [Google Developers Site Policies](https://developers.google.com/site-policies). Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2025-10-16 UTC.
