You are viewing archived v1.22 Service Mesh documentation.

Available versions

[Cloud Service Mesh latest](/service-mesh/docs)  
[Cloud Service Mesh 1.26 archive](/service-mesh/v1.26/docs)  
[Cloud Service Mesh 1.24 archive](/service-mesh/v1.25/docs)  
[Cloud Service Mesh 1.24 archive](/service-mesh/v1.24/docs)  
[Cloud Service Mesh 1.23 archive](/service-mesh/v1.23/docs)  
[Cloud Service Mesh 1.22 archive](/service-mesh/v1.22/docs)  
[Cloud Service Mesh 1.21 archive](/service-mesh/v1.21/docs)  
[Cloud Service Mesh 1.20 archive](/service-mesh/v1.20/docs)  
[Anthos Service Mesh 1.19 archive](/service-mesh/v1.19/docs)  

-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Networking](https://docs.cloud.google.com/docs/networking)
-   [Cloud Service Mesh](https://docs.cloud.google.com/service-mesh/docs)
-   [v1.22](https://docs.cloud.google.com/service-mesh/v1.22/docs)

Send feedback

# Method: organizations.locations.securityProfiles.list Stay organized with collections Save and categorize content based on your preferences.

 

Lists SecurityProfiles in a given organization and location.

### HTTP request

`GET https://networksecurity.googleapis.com/v1beta1/{parent=organizations/*/locations/*}/securityProfiles`

The URL uses [gRPC Transcoding](https://google.aip.dev/127) syntax.

### Path parameters

 

Parameters

`parent`

`string`

Required. The project or organization and location from which the SecurityProfiles should be listed, specified in the format `projects|organizations/*/locations/{location}`.

### Query parameters

 

Parameters

`pageSize`

`integer`

Maximum number of SecurityProfiles to return per call.

`pageToken`

`string`

The value returned by the last `ListSecurityProfilesResponse` Indicates that this is a continuation of a prior `securityProfiles.list` call, and that the system should return the next page of data.

### Request body

The request body must be empty.

### Response body

Response returned by the securityProfiles.list method.

If successful, the response body contains data with the following structure:

JSON representation

{
  "securityProfiles": \[
    {
      object (`[SecurityProfile](/service-mesh/v1.22/docs/reference/network-security/rest/v1beta1/organizations.locations.securityProfiles#SecurityProfile)`)
    }
  \],
  "nextPageToken": string
}

 

Fields

`securityProfiles[]`

``object (`[SecurityProfile](/service-mesh/v1.22/docs/reference/network-security/rest/v1beta1/organizations.locations.securityProfiles#SecurityProfile)`)``

List of SecurityProfile resources.

`nextPageToken`

`string`

If there might be more results than those appearing in this response, then `nextPageToken` is included. To get the next set of results, call this method again using the value of `nextPageToken` as `pageToken`.

### Authorization scopes

Requires the following OAuth scope:

-   `https://www.googleapis.com/auth/cloud-platform`

For more information, see the [Authentication Overview](https://cloud.google.com/docs/authentication/).

Send feedback

Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0). For details, see the [Google Developers Site Policies](https://developers.google.com/site-policies). Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2025-06-18 UTC.
