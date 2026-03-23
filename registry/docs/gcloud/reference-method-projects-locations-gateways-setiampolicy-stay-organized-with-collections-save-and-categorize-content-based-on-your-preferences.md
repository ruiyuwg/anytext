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

# Method: projects.locations.gateways.setIamPolicy Stay organized with collections Save and categorize content based on your preferences.

 

Sets the access control policy on the specified resource. Replaces any existing policy.

Can return `NOT_FOUND`, `INVALID_ARGUMENT`, and `PERMISSION_DENIED` errors.

### HTTP request

`POST https://networkservices.googleapis.com/v1/{resource=projects/*/locations/*/gateways/*}:setIamPolicy`

The URL uses [gRPC Transcoding](https://google.aip.dev/127) syntax.

### Path parameters

 

Parameters

`resource`

`string`

REQUIRED: The resource for which the policy is being specified. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field.

### Request body

The request body contains data with the following structure:

JSON representation

{
  "policy": {
    object (`[Policy](/service-mesh/v1.23/docs/reference/network-services/rest/Shared.Types/Policy)`)
  },
  "updateMask": string
}

 

Fields

`policy`

``object (`[Policy](/service-mesh/v1.23/docs/reference/network-services/rest/Shared.Types/Policy)`)``

REQUIRED: The complete policy to be applied to the `resource`. The size of the policy is limited to a few 10s of KB. An empty policy is a valid policy but certain Google Cloud services (such as Projects) might reject them.

`updateMask`

``string (`[FieldMask](https://developers.google.com/protocol-buffers/docs/reference/google.protobuf#google.protobuf.FieldMask)` format)``

OPTIONAL: A FieldMask specifying which fields of the policy to modify. Only the fields in the mask will be modified. If no mask is provided, the following default mask is used:

`paths: "bindings, etag"`

This is a comma-separated list of fully qualified names of fields. Example: `"user.displayName,photo"`.

### Response body

If successful, the response body contains an instance of `[Policy](/service-mesh/v1.23/docs/reference/network-services/rest/Shared.Types/Policy)`.

### Authorization scopes

Requires the following OAuth scope:

-   `https://www.googleapis.com/auth/cloud-platform`

For more information, see the [Authentication Overview](https://cloud.google.com/docs/authentication/).

Send feedback

Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0). For details, see the [Google Developers Site Policies](https://developers.google.com/site-policies). Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2025-06-18 UTC.
