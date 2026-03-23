-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Access and resource management](https://docs.cloud.google.com/docs/access-resources)
-   [Cloud Identity](https://docs.cloud.google.com/identity/docs)
-   [Reference](https://docs.cloud.google.com/identity/docs/apis)

Send feedback

# Method: inboundSamlSsoProfiles.idpCredentials.delete Stay organized with collections Save and categorize content based on your preferences.

 

Deletes an `[IdpCredential](/identity/docs/reference/rest/v1/inboundSamlSsoProfiles.idpCredentials#IdpCredential)`.

### HTTP request

`DELETE https://cloudidentity.googleapis.com/v1/{name=inboundSamlSsoProfiles/*/idpCredentials/*}`

The URL uses [gRPC Transcoding](https://google.aip.dev/127) syntax.

### Path parameters

 

Parameters

`name`

`string`

Required. The [resource name](https://cloud.google.com/apis/design/resource_names) of the `[IdpCredential](/identity/docs/reference/rest/v1/inboundSamlSsoProfiles.idpCredentials#IdpCredential)` to delete. Format: `inboundSamlSsoProfiles/{sso_profile_id}/idpCredentials/{idp_credential_id}`

### Request body

The request body must be empty.

### Response body

If successful, the response body contains an instance of `[Operation](/identity/docs/reference/rest/Shared.Types/Operation)`.

### Authorization scopes

Requires one of the following OAuth scopes:

-   `https://www.googleapis.com/auth/cloud-identity.inboundsso`
-   `https://www.googleapis.com/auth/cloud-identity`
-   `https://www.googleapis.com/auth/cloud-platform`

For more information, see the [Authorization guide](https://developers.google.com/workspace/guides/configure-oauth-consent).

Send feedback

Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0). For details, see the [Google Developers Site Policies](https://developers.google.com/site-policies). Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2025-12-16 UTC.
