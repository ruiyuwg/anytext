-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Security](https://docs.cloud.google.com/docs/security)
-   [Security Command Center](https://docs.cloud.google.com/security-command-center/docs)
-   [Referencia](https://docs.cloud.google.com/security-command-center/docs/reference/authentication)

Send feedback

# Method: folders.sources.findings.setMute Stay organized with collections Save and categorize content based on your preferences.

 

Updates the mute state of a finding.

### HTTP request

Choose a location:

global me-central2 us eu

  
`POST https://securitycenter.googleapis.com/v1/{name=folders/*/sources/*/findings/*}:setMute`

The URLs use [gRPC Transcoding](https://google.aip.dev/127) syntax.

### Path parameters

 

Parameters

`name`

`string`

Required. The [relative resource name](https://cloud.google.com/apis/design/resource_names#relative_resource_name) of the finding. Example: `organizations/{organizationId}/sources/{source_id}/findings/{findingId}`, `folders/{folder_id}/sources/{source_id}/findings/{findingId}`, `projects/{projectId}/sources/{source_id}/findings/{findingId}`.

### Request body

The request body contains data with the following structure:

JSON representation

{
  "mute": enum (`[Mute](/security-command-center/docs/reference/rest/v1/organizations.sources.findings#Mute)`)
}

 

Fields

`mute`

``enum (`[Mute](/security-command-center/docs/reference/rest/v1/organizations.sources.findings#Mute)`)``

Required. The desired state of the Mute.

### Response body

If successful, the response body contains an instance of `[Finding](/security-command-center/docs/reference/rest/v1/organizations.sources.findings#Finding)`.

### Authorization scopes

Requires the following OAuth scope:

-   `https://www.googleapis.com/auth/cloud-platform`

For more information, see the [Authentication Overview](/docs/authentication#authorization-gcp).

Send feedback

Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0). For details, see the [Google Developers Site Policies](https://developers.google.com/site-policies). Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2025-12-02 UTC.
