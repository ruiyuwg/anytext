-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [AI and ML](https://docs.cloud.google.com/docs/ai-ml)
-   [Vertex AI Search](https://docs.cloud.google.com/generative-ai-app-builder/docs)
-   [Reference](https://docs.cloud.google.com/generative-ai-app-builder/docs/apis)

Send feedback

# Method: projects.locations.collections.dataStores.conversations.delete Stay organized with collections Save and categorize content based on your preferences.

 

Deletes a Conversation.

If the `[Conversation](/generative-ai-app-builder/docs/reference/rest/v1beta/projects.locations.collections.dataStores.conversations#Conversation)` to delete does not exist, a NOT\_FOUND error is returned.

### HTTP request

`DELETE https://discoveryengine.googleapis.com/v1beta/{name=projects/*/locations/*/collections/*/dataStores/*/conversations/*}`

The URL uses [gRPC Transcoding](https://google.aip.dev/127) syntax.

### Path parameters

 

Parameters

`name`

`string`

Required. The resource name of the Conversation to delete. Format: `projects/{project}/locations/{location}/collections/{collection}/dataStores/{dataStoreId}/conversations/{conversationId}`

### Request body

The request body must be empty.

### Response body

If successful, the response body is an empty JSON object.

### Authorization scopes

Requires one of the following OAuth scopes:

-   `https://www.googleapis.com/auth/cloud-platform`
-   `https://www.googleapis.com/auth/discoveryengine.readwrite`

For more information, see the [Authentication Overview](/docs/authentication#authorization-gcp).

### IAM Permissions

Requires the following [IAM](https://cloud.google.com/iam/docs) permission on the `name` resource:

-   `discoveryengine.conversations.delete`

For more information, see the [IAM documentation](https://cloud.google.com/iam/docs).

Send feedback

Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0). For details, see the [Google Developers Site Policies](https://developers.google.com/site-policies). Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2025-10-16 UTC.
