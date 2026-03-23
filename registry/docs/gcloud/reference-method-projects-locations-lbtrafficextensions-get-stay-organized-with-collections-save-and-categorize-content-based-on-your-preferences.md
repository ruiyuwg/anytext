You are viewing archived v1.21 Service Mesh documentation.

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
-   [v1.21](https://docs.cloud.google.com/service-mesh/v1.21/docs)

Send feedback

# Method: projects.locations.lbTrafficExtensions.get Stay organized with collections Save and categorize content based on your preferences.

 

Gets details of the specified `LbTrafficExtension` resource.

### HTTP request

`GET https://networkservices.googleapis.com/v1/{name=projects/*/locations/*/lbTrafficExtensions/*}`

The URL uses [gRPC Transcoding](https://google.aip.dev/127) syntax.

### Path parameters

 

Parameters

`name`

`string`

Required. A name of the `LbTrafficExtension` resource to get. Must be in the format `projects/{project}/locations/{location}/lbTrafficExtensions/{lbTrafficExtension}`.

### Request body

The request body must be empty.

### Response body

If successful, the response body contains an instance of `[LbTrafficExtension](/service-mesh/v1.21/docs/reference/network-services/rest/v1/projects.locations.lbTrafficExtensions#LbTrafficExtension)`.

### Authorization scopes

Requires the following OAuth scope:

-   `https://www.googleapis.com/auth/cloud-platform`

For more information, see the [Authentication Overview](https://cloud.google.com/docs/authentication/).

### IAM Permissions

Requires the following [IAM](https://cloud.google.com/iam/docs) permission on the `name` resource:

-   `networkservices.lbTrafficExtensions.get`

For more information, see the [IAM documentation](https://cloud.google.com/iam/docs).

Send feedback

Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0). For details, see the [Google Developers Site Policies](https://developers.google.com/site-policies). Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2025-06-18 UTC.
