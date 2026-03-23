-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [AI and ML](https://docs.cloud.google.com/docs/ai-ml)
-   [Dialogflow](https://docs.cloud.google.com/dialogflow/docs)
-   [Dialogflow ES](https://docs.cloud.google.com/dialogflow/es/docs)
-   [Reference](https://docs.cloud.google.com/dialogflow/es/docs/reference)

Send feedback

# Method: projects.locations.agent.sessions.contexts.list Stay organized with collections Save and categorize content based on your preferences.

 

Returns the list of all contexts in the specified session.

### HTTP request

`GET https://{endpoint}/v2beta1/{parent=projects/*/locations/*/agent/sessions/*}/contexts`

Where `{endpoint}` is one of the [supported service endpoints](/dialogflow/es/docs/reference/rest#rest_endpoints).

The URLs use [gRPC Transcoding](https://google.aip.dev/127) syntax.

### Path parameters

 

Parameters

`parent`

`string`

Required. The session to list all contexts from. Supported formats: - `projects/<Project ID>/agent/sessions/<Session ID>, -`projects//locations//agent/sessions/`, -`projects//agent/environments//users//sessions/`, -`projects//locations//agent/environments//users//sessions/\`,

If `Location ID` is not specified we assume default 'us' location. If `Environment ID` is not specified, we assume default 'draft' environment. If `User ID` is not specified, we assume default '-' user.

Authorization requires the following [IAM](https://cloud.google.com/iam/docs/) permission on the specified resource `parent`:

-   `dialogflow.contexts.list`

### Query parameters

 

Parameters

`pageSize`

`integer`

Optional. The maximum number of items to return in a single page. By default 100 and at most 1000.

`pageToken`

`string`

Optional. The nextPageToken value returned from a previous list request.

### Request body

The request body must be empty.

### Response body

If successful, the response body contains an instance of `[ListContextsResponse](/dialogflow/es/docs/reference/rest/v2beta1/ListContextsResponse)`.

### Authorization scopes

Requires one of the following OAuth scopes:

-   `https://www.googleapis.com/auth/cloud-platform`
-   `https://www.googleapis.com/auth/dialogflow`

For more information, see the [Authentication Overview](/docs/authentication#authorization-gcp).

Send feedback

Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0). For details, see the [Google Developers Site Policies](https://developers.google.com/site-policies). Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2025-06-27 UTC.
