-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Networking](https://docs.cloud.google.com/docs/networking)
-   [Service Extensions](https://docs.cloud.google.com/service-extensions/docs)
-   [Reference](https://docs.cloud.google.com/service-extensions/docs/apis)

Send feedback

# REST Resource: projects.locations.authzExtensions Stay organized with collections Save and categorize content based on your preferences.

 

## Resource: AuthzExtension

`AuthzExtension` is a resource that allows traffic forwarding to a callout backend service to make an authorization decision.

JSON representation

{
  "name": string,
  "createTime": string,
  "updateTime": string,
  "description": string,
  "labels": {
    string: string,
    ...
  },
  "loadBalancingScheme": enum (`[LoadBalancingScheme](/service-extensions/docs/reference/rest/v1beta1/LoadBalancingScheme)`),
  "authority": string,
  "service": string,
  "timeout": string,
  "failOpen": boolean,
  "metadata": {
    object
  },
  "forwardHeaders": \[
    string
  \],
  "wireFormat": enum (`[WireFormat](/service-extensions/docs/reference/rest/v1beta1/projects.locations.authzExtensions#WireFormat)`)
}

 

Fields

`name`

`string`

Required. Identifier. Name of the `AuthzExtension` resource in the following format: `projects/{project}/locations/{location}/authzExtensions/{authzExtension}`.

`createTime`

``string (`[Timestamp](https://protobuf.dev/reference/protobuf/google.protobuf/#timestamp)` format)``

Output only. The timestamp when the resource was created.

Uses RFC 3339, where generated output will always be Z-normalized and use 0, 3, 6 or 9 fractional digits. Offsets other than "Z" are also accepted. Examples: `"2014-10-02T15:01:23Z"`, `"2014-10-02T15:01:23.045123456Z"` or `"2014-10-02T15:01:23+05:30"`.

`updateTime`

``string (`[Timestamp](https://protobuf.dev/reference/protobuf/google.protobuf/#timestamp)` format)``

Output only. The timestamp when the resource was updated.

Uses RFC 3339, where generated output will always be Z-normalized and use 0, 3, 6 or 9 fractional digits. Offsets other than "Z" are also accepted. Examples: `"2014-10-02T15:01:23Z"`, `"2014-10-02T15:01:23.045123456Z"` or `"2014-10-02T15:01:23+05:30"`.

`description`

`string`

Optional. A human-readable description of the resource.

`labels`

`map (key: string, value: string)`

Optional. Set of labels associated with the `AuthzExtension` resource.

The format must comply with [the requirements for labels](/compute/docs/labeling-resources#requirements) for Google Cloud resources.

An object containing a list of `"key": value` pairs. Example: `{ "name": "wrench", "mass": "1.3kg", "count": "3" }`.

`loadBalancingScheme`

``enum (`[LoadBalancingScheme](/service-extensions/docs/reference/rest/v1beta1/LoadBalancingScheme)`)``

Required. All backend services and forwarding rules referenced by this extension must share the same load balancing scheme. Supported values: `INTERNAL_MANAGED`, `EXTERNAL_MANAGED`. For more information, refer to [Backend services overview](https://cloud.google.com/load-balancing/docs/backend-service).

`authority`

`string`

Required. The `:authority` header in the gRPC request sent from Envoy to the extension service.

`service`

`string`

Required. The reference to the service that runs the extension.

To configure a callout extension, `service` must be a fully-qualified reference to a [backend service](https://cloud.google.com/compute/docs/reference/rest/v1/backendServices) in the format: `https://www.googleapis.com/compute/v1/projects/{project}/regions/{region}/backendServices/{backendService}` or `https://www.googleapis.com/compute/v1/projects/{project}/global/backendServices/{backendService}`.

`timeout`

``string (`[Duration](https://protobuf.dev/reference/protobuf/google.protobuf/#duration)` format)``

Required. Specifies the timeout for each individual message on the stream. The timeout must be between 10-10000 milliseconds.

`failOpen`

`boolean`

Optional. Determines how the proxy behaves if the call to the extension fails or times out.

When set to `TRUE`, request or response processing continues without error. Any subsequent extensions in the extension chain are also executed. When set to `FALSE` or the default setting of `FALSE` is used, one of the following happens:

-   If response headers have not been delivered to the downstream client, a generic 500 error is returned to the client. The error response can be tailored by configuring a custom error response in the load balancer.
    
-   If response headers have been delivered, then the HTTP stream to the downstream client is reset.
    

`metadata`

``object (`[Struct](https://protobuf.dev/reference/protobuf/google.protobuf/#struct)` format)``

Optional. The metadata provided here is included as part of the `metadata_context` (of type `google.protobuf.Struct`) in the `ProcessingRequest` message sent to the extension server. The metadata is available under the namespace `com.google.authz_extension.<resourceName>`. The following variables are supported in the metadata Struct:

`{forwarding_rule_id}` - substituted with the forwarding rule's fully qualified resource name.

`forwardHeaders[]`

`string`

Optional. List of the HTTP headers to forward to the extension (from the client). If omitted, all headers are sent. Each element is a string indicating the header name.

`wireFormat`

``enum (`[WireFormat](/service-extensions/docs/reference/rest/v1beta1/projects.locations.authzExtensions#WireFormat)`)``

Optional. The format of communication supported by the callout extension. This field is supported only for regional `AuthzExtension` resources. If not specified, the default value `EXT_PROC_GRPC` is used. Global `AuthzExtension` resources use the `EXT_PROC_GRPC` wire format.

## WireFormat

The format of communication supported by the extension.

 

Enums

`WIRE_FORMAT_UNSPECIFIED`

Not specified.

`EXT_PROC_GRPC`

The extension service uses ext\_proc gRPC API over a gRPC stream. This is the default value if the wire format is not specified. The backend service for the extension must use HTTP2 or H2C as the protocol. All `supportedEvents` for a client request are sent as part of the same gRPC stream.

`EXT_AUTHZ_GRPC`

The extension service uses Envoy's `ext_authz` gRPC API. The backend service for the extension must use HTTP2 or H2C as the protocol. `EXT_AUTHZ_GRPC` is only supported for regional `AuthzExtension` resources.

 

## Methods

### `[create](/service-extensions/docs/reference/rest/v1beta1/projects.locations.authzExtensions/create)`

Creates a new `AuthzExtension` resource in a given project and location.

### `[delete](/service-extensions/docs/reference/rest/v1beta1/projects.locations.authzExtensions/delete)`

Deletes the specified `AuthzExtension` resource.

### `[get](/service-extensions/docs/reference/rest/v1beta1/projects.locations.authzExtensions/get)`

Gets details of the specified `AuthzExtension` resource.

### `[list](/service-extensions/docs/reference/rest/v1beta1/projects.locations.authzExtensions/list)`

Lists `AuthzExtension` resources in a given project and location.

### `[patch](/service-extensions/docs/reference/rest/v1beta1/projects.locations.authzExtensions/patch)`

Updates the parameters of the specified `AuthzExtension` resource.

Send feedback

Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0). For details, see the [Google Developers Site Policies](https://developers.google.com/site-policies). Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2025-11-18 UTC.
