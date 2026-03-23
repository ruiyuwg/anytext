-   [Home](https://docs.cloud.google.com/)
-   [Technology areas](https://docs.cloud.google.com/docs)
-   [Gemini for Google Cloud](https://docs.cloud.google.com/gemini)
-   [Data Agents](https://docs.cloud.google.com/gemini/data-agents/conversational-analytics-api/overview)
-   [Reference](https://docs.cloud.google.com/gemini/data-agents/reference/rest)

Send feedback

# Method: projects.locations.conversations.list Stay organized with collections Save and categorize content based on your preferences.

 

Lists all conversations for a given parent.

### HTTP request

Choose a location:

global

  
`GET https://geminidataanalytics.googleapis.com/v1beta/{parent=projects/*/locations/*}/conversations`

The URLs use [gRPC Transcoding](https://google.aip.dev/127) syntax.

### Path parameters

 

Parameters

`parent`

`string`

Required. Parent value for ListConversationsRequest. Format: `projects/{project}/locations/{location}`

### Query parameters

 

Parameters

`pageSize`

`integer`

Optional. Requested page size. Server may return fewer items than requested. The max page size is 100. All larger page sizes will be coerced to 100. If unspecified, server will pick 50 as an approperiate default.

`pageToken`

`string`

Optional. A token identifying a page of results the server should return.

`filter`

`string`

Optional. Returned conversations will match criteria specified within the filter. conversations.list allows filtering by: \* agents \* labels

### Request body

The request body must be empty.

### Response body

Message for response to listing conversations.

If successful, the response body contains data with the following structure:

JSON representation

{
  "conversations": \[
    {
      object (`[Conversation](/gemini/data-agents/reference/rest/v1beta/projects.locations.conversations#Conversation)`)
    }
  \],
  "nextPageToken": string
}

 

Fields

`conversations[]`

``object (`[Conversation](/gemini/data-agents/reference/rest/v1beta/projects.locations.conversations#Conversation)`)``

The list of conversations. The results are ordered by `lastUsedTime` in descending order (most recent first).

`nextPageToken`

`string`

A token identifying a page of results the server should return.

### Authorization scopes

Requires the following OAuth scope:

-   `https://www.googleapis.com/auth/cloud-platform`

For more information, see the [Authentication Overview](/docs/authentication#authorization-gcp).

Send feedback

Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0). For details, see the [Google Developers Site Policies](https://developers.google.com/site-policies). Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2026-03-16 UTC.
