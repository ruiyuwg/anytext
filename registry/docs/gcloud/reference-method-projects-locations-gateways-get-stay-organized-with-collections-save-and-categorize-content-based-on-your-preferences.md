Anthos Service Mesh and Traffic Director are now Cloud Service Mesh. For more information, see the [Cloud Service Mesh overview](/service-mesh/docs/overview).

-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Networking](https://docs.cloud.google.com/docs/networking)
-   [Cloud Service Mesh](https://docs.cloud.google.com/service-mesh/docs)
-   [Guides](https://docs.cloud.google.com/service-mesh/docs/overview)

Send feedback

# Method: projects.locations.gateways.get Stay organized with collections Save and categorize content based on your preferences.

 

Gets details of a single Gateway.

### HTTP request

`GET https://networkservices.googleapis.com/v1/{name=projects/*/locations/*/gateways/*}`

The URL uses [gRPC Transcoding](https://google.aip.dev/127) syntax.

### Path parameters

 

Parameters

`name`

`string`

Required. A name of the Gateway to get. Must be in the format `projects/*/locations/*/gateways/*`.

Authorization requires the following [IAM](https://cloud.google.com/iam/docs/) permission on the specified resource `name`:

-   `networkservices.gateways.get`

### Request body

The request body must be empty.

### Response body

If successful, the response body contains an instance of `[Gateway](/service-mesh/docs/reference/network-services/rest/v1/projects.locations.gateways#Gateway)`.

### Authorization scopes

Requires the following OAuth scope:

-   `https://www.googleapis.com/auth/cloud-platform`

For more information, see the [Authentication Overview](/docs/authentication#authorization-gcp).

Send feedback

Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0). For details, see the [Google Developers Site Policies](https://developers.google.com/site-policies). Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2025-06-18 UTC.
