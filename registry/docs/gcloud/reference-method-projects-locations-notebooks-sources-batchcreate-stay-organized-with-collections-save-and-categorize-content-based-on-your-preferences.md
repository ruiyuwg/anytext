-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [AI and ML](https://docs.cloud.google.com/docs/ai-ml)
-   [Vertex AI Search](https://docs.cloud.google.com/generative-ai-app-builder/docs)
-   [Reference](https://docs.cloud.google.com/generative-ai-app-builder/docs/apis)

Send feedback

# Method: projects.locations.notebooks.sources.batchCreate Stay organized with collections Save and categorize content based on your preferences.

 

Creates a list of `[Source](/generative-ai-app-builder/docs/reference/rest/v1alpha/projects.locations.notebooks.sources#Source)`s.

### HTTP request

`POST https://discoveryengine.googleapis.com/v1alpha/{parent=projects/*/locations/*/notebooks/*}/sources:batchCreate`

The URL uses [gRPC Transcoding](https://google.aip.dev/127) syntax.

### Path parameters

 

Parameters

`parent`

`string`

Required. The parent resource where the sources will be created. Format: projects/{project}/locations/{location}/notebooks/{notebook}

### Request body

The request body contains data with the following structure:

JSON representation

{
  "userContents": \[
    {
      object (`[UserContent](/generative-ai-app-builder/docs/reference/rest/v1alpha/projects.locations.notebooks.sources/batchCreate#UserContent)`)
    }
  \]
}

 

Fields

`userContents[]`

``object (`[UserContent](/generative-ai-app-builder/docs/reference/rest/v1alpha/projects.locations.notebooks.sources/batchCreate#UserContent)`)``

Required. The `[UserContent](/generative-ai-app-builder/docs/reference/rest/v1alpha/projects.locations.notebooks.sources/batchCreate#UserContent)`s to be uploaded.

### Response body

Response for `[SourceService.BatchCreateSources](/generative-ai-app-builder/docs/reference/rest/v1alpha/projects.locations.notebooks.sources/batchCreate#google.cloud.notebooklm.v1alpha.SourceService.BatchCreateSources)` method.

If successful, the response body contains data with the following structure:

JSON representation

{
  "sources": \[
    {
      object (`[Source](/generative-ai-app-builder/docs/reference/rest/v1alpha/projects.locations.notebooks.sources#Source)`)
    }
  \]
}

 

Fields

`sources[]`

``object (`[Source](/generative-ai-app-builder/docs/reference/rest/v1alpha/projects.locations.notebooks.sources#Source)`)``

The `[Source](/generative-ai-app-builder/docs/reference/rest/v1alpha/projects.locations.notebooks.sources#Source)`s.

### Authorization scopes

Requires one of the following OAuth scopes:

-   `https://www.googleapis.com/auth/cloud-platform`
-   `https://www.googleapis.com/auth/discoveryengine.readwrite`
-   `https://www.googleapis.com/auth/discoveryengine.assist.readwrite`

For more information, see the [Authentication Overview](/docs/authentication#authorization-gcp).

### IAM Permissions

Requires the following [IAM](https://cloud.google.com/iam/docs) permission on the `parent` resource:

-   `discoveryengine.sources.create`

For more information, see the [IAM documentation](https://cloud.google.com/iam/docs).

## UserContent

The "Content" messages refer to data the user wants to upload.

JSON representation

{

  // Union field `content` can be only one of the following:
  "googleDriveContent": {
    object (`[GoogleDriveContent](/generative-ai-app-builder/docs/reference/rest/v1alpha/projects.locations.notebooks.sources/batchCreate#GoogleDriveContent)`)
  },
  "textContent": {
    object (`[TextContent](/generative-ai-app-builder/docs/reference/rest/v1alpha/projects.locations.notebooks.sources/batchCreate#TextContent)`)
  },
  "webContent": {
    object (`[WebContent](/generative-ai-app-builder/docs/reference/rest/v1alpha/projects.locations.notebooks.sources/batchCreate#WebContent)`)
  },
  "videoContent": {
    object (`[VideoContent](/generative-ai-app-builder/docs/reference/rest/v1alpha/projects.locations.notebooks.sources/batchCreate#VideoContent)`)
  },
  "agentspaceContent": {
    object (`[AgentspaceContent](/generative-ai-app-builder/docs/reference/rest/v1alpha/projects.locations.notebooks.sources/batchCreate#AgentspaceContent)`)
  }
  // End of list of possible types for union field `content`.
}

 

Fields

Union field `content`. The user content. `content` can be only one of the following:

`googleDriveContent`

``object (`[GoogleDriveContent](/generative-ai-app-builder/docs/reference/rest/v1alpha/projects.locations.notebooks.sources/batchCreate#GoogleDriveContent)`)``

The content from Google Drive.

`textContent`

``object (`[TextContent](/generative-ai-app-builder/docs/reference/rest/v1alpha/projects.locations.notebooks.sources/batchCreate#TextContent)`)``

The text content uploaded as source.

`webContent`

``object (`[WebContent](/generative-ai-app-builder/docs/reference/rest/v1alpha/projects.locations.notebooks.sources/batchCreate#WebContent)`)``

The web content uploaded as source.

`videoContent`

``object (`[VideoContent](/generative-ai-app-builder/docs/reference/rest/v1alpha/projects.locations.notebooks.sources/batchCreate#VideoContent)`)``

The video content uploaded as source.

`agentspaceContent`

``object (`[AgentspaceContent](/generative-ai-app-builder/docs/reference/rest/v1alpha/projects.locations.notebooks.sources/batchCreate#AgentspaceContent)`)``

Agentspace content uploaded as source.

## GoogleDriveContent

The content from Google Drive.

JSON representation

{
  "documentId": string,
  "mimeType": string,
  "sourceName": string
}

 

Fields

`documentId`

`string`

The document ID of the selected document.

`mimeType`

`string`

The mime type of the selected document.

This can be used to differentiate type of content selected in the drive picker. Use application/vnd.google-apps.document for Google Docs or application/vnd.google-apps.presentation for Google Slides.

`sourceName`

`string`

The name to be displayed for the source.

## TextContent

The text content uploaded as source.

JSON representation

{
  "sourceName": string,
  "content": string
}

 

Fields

`sourceName`

`string`

The display name of the text source.

`content`

`string`

The name to be displayed for the source.

## WebContent

The web content uploaded as source.

JSON representation

{
  "url": string,
  "sourceName": string
}

 

Fields

`url`

`string`

If URL is supplied, will fetch the webpage in the backend.

`sourceName`

`string`

The name to be displayed for the source.

## VideoContent

Video content uploaded as source.

JSON representation

{

  // Union field `format` can be only one of the following:
  "youtubeUrl": string
  // End of list of possible types for union field `format`.
}

 

Fields

Union field `format`. Specifies the format of the video content `format` can be only one of the following:

`youtubeUrl`

`string`

The youtube url of the video content.

## AgentspaceContent

Agentspace content uploaded as source.

JSON representation

{
  "documentName": string,
  "engineName": string,
  "ideaforgeIdeaName": string
}

 

Fields

`documentName`

`string`

Optional. The full resource name of the Agentspace document. Format: `projects/{project}/locations/{location}/collections/{collection}/dataStores/{dataStore}/branches/{branch}/documents/{documentId}`.

`engineName`

`string`

Optional. Engine to verify the permission of the document. Format: `projects/{project}/locations/{location}/collections/{collection}/engines/{engine}`.

`ideaforgeIdeaName`

`string`

Optional. Resource name of the idea forge instance. Format: `projects/{project}/locations/{location}/collections/{collection}/engines/{engine}/sessions/{session}/ideaForgeInstances/{instance}`

Send feedback

Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0). For details, see the [Google Developers Site Policies](https://developers.google.com/site-policies). Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2026-03-20 UTC.
