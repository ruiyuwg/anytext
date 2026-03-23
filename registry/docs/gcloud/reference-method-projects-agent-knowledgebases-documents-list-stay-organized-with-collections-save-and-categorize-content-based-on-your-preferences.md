-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [AI and ML](https://docs.cloud.google.com/docs/ai-ml)
-   [Dialogflow](https://docs.cloud.google.com/dialogflow/docs)
-   [Dialogflow ES](https://docs.cloud.google.com/dialogflow/es/docs)
-   [Reference](https://docs.cloud.google.com/dialogflow/es/docs/reference)

Send feedback

# Method: projects.agent.knowledgeBases.documents.list Stay organized with collections Save and categorize content based on your preferences.

 

Returns the list of all documents of the knowledge base.

### HTTP request

`GET https://{endpoint}/v2/{parent=projects/*/agent/knowledgeBases/*}/documents`

Where `{endpoint}` is one of the [supported service endpoints](/dialogflow/es/docs/reference/rest#rest_endpoints).

The URLs use [gRPC Transcoding](https://google.aip.dev/127) syntax.

### Path parameters

 

Parameters

`parent`

`string`

Required. The knowledge base to list all documents for. Format: `projects/<Project ID>/locations/<Location ID>/knowledgeBases/<Knowledge Base ID>`.

Authorization requires the following [IAM](https://cloud.google.com/iam/docs/) permission on the specified resource `parent`:

-   `dialogflow.documents.list`

### Query parameters

 

Parameters

`pageSize`

`integer`

The maximum number of items to return in a single page. By default 10 and at most 100.

`pageToken`

`string`

The nextPageToken value returned from a previous list request.

`filter`

`string`

The filter expression used to filter documents returned by the list method. The expression has the following syntax:

\[AND \] ...

The following fields and operators are supported:

-   knowledgeTypes with has(:) operator
-   displayName with has(:) operator
-   state with equals(=) operator

Examples:

-   "knowledgeTypes:FAQ" matches documents with FAQ knowledge type.
-   "displayName:customer" matches documents whose display name contains "customer".
-   "state=ACTIVE" matches documents with ACTIVE state.
-   "knowledgeTypes:FAQ AND state=ACTIVE" matches all active FAQ documents.

For more information about filtering, see [API Filtering](https://aip.dev/160).

### Request body

The request body must be empty.

### Response body

If successful, the response body contains an instance of `[ListDocumentsResponse](/dialogflow/es/docs/reference/rest/v2/ListDocumentsResponse)`.

### Authorization scopes

Requires one of the following OAuth scopes:

-   `https://www.googleapis.com/auth/cloud-platform`
-   `https://www.googleapis.com/auth/dialogflow`

For more information, see the [Authentication Overview](/docs/authentication#authorization-gcp).

Send feedback

Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0). For details, see the [Google Developers Site Policies](https://developers.google.com/site-policies). Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2025-06-27 UTC.
