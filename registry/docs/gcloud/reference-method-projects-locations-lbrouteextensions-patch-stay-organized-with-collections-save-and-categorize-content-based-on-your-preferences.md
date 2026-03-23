You are viewing archived v1.23 Service Mesh documentation.

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
-   [v1.23](https://docs.cloud.google.com/service-mesh/v1.23/docs)

Send feedback

# Method: projects.locations.lbRouteExtensions.patch Stay organized with collections Save and categorize content based on your preferences.

 

Updates the parameters of the specified `LbRouteExtension` resource.

### HTTP request

`PATCH https://networkservices.googleapis.com/v1/{lbRouteExtension.name=projects/*/locations/*/lbRouteExtensions/*}`

The URL uses [gRPC Transcoding](https://google.aip.dev/127) syntax.

### Path parameters

 

Parameters

`lbRouteExtension.name`

`string`

Required. Identifier. Name of the `LbRouteExtension` resource in the following format: `projects/{project}/locations/{location}/lbRouteExtensions/{lbRouteExtension}`.

### Query parameters

 

Parameters

`updateMask`

``string (`[FieldMask](https://developers.google.com/protocol-buffers/docs/reference/google.protobuf#google.protobuf.FieldMask)` format)``

Optional. Used to specify the fields to be overwritten in the `LbRouteExtension` resource by the update. The fields specified in the updateMask are relative to the resource, not the full request. A field is overwritten if it is in the mask. If the user does not specify a mask, then all fields are overwritten.

This is a comma-separated list of fully qualified names of fields. Example: `"user.displayName,photo"`.

`requestId`

`string`

Optional. An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server can ignore the request if it has already been completed. The server guarantees that for at least 60 minutes since the first request.

For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, ignores the second request. This prevents clients from accidentally creating duplicate commitments.

The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000).

### Request body

The request body contains an instance of `[LbRouteExtension](/service-mesh/v1.23/docs/reference/network-services/rest/v1/projects.locations.lbRouteExtensions#LbRouteExtension)`.

### Response body

If successful, the response body contains an instance of `[Operation](/service-mesh/v1.23/docs/reference/network-services/rest/Shared.Types/ListOperationsResponse#Operation)`.

### Authorization scopes

Requires the following OAuth scope:

-   `https://www.googleapis.com/auth/cloud-platform`

For more information, see the [Authentication Overview](https://cloud.google.com/docs/authentication/).

### IAM Permissions

Requires the following [IAM](https://cloud.google.com/iam/docs) permissions on the `service` resource:

-   `compute.backendServices.get`
-   `compute.backendServices.use`
-   `compute.regionBackendServices.get`
-   `compute.regionBackendServices.use`

Requires the following [IAM](https://cloud.google.com/iam/docs) permissions on the `forwardingRules` resource:

-   `compute.forwardingRules.get`
-   `compute.forwardingRules.update`
-   `compute.globalForwardingRules.get`
-   `compute.globalForwardingRules.update`

Requires the following [IAM](https://cloud.google.com/iam/docs) permission on the `name` resource:

-   `networkservices.lbRouteExtensions.update`

For more information, see the [IAM documentation](https://cloud.google.com/iam/docs).

Send feedback

Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0). For details, see the [Google Developers Site Policies](https://developers.google.com/site-policies). Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2025-06-18 UTC.
