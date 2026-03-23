-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Developer tools](https://docs.cloud.google.com/docs/costs-usage)
-   [PHP](https://docs.cloud.google.com/php/docs)
-   [Client libraries](https://docs.cloud.google.com/php/docs/reference)

Send feedback

# Google Cloud Vmware Engine V1 Client - Class CreateHcxActivationKeyRequest (0.4.0) Stay organized with collections Save and categorize content based on your preferences.

1.3.0 (latest) 1.2.2 1.1.4 1.0.0 0.5.6 0.4.0 0.3.3 0.2.1 0.1.4

Reference documentation and code samples for the Google Cloud Vmware Engine V1 Client class CreateHcxActivationKeyRequest.

Request message for VmwareEngine.CreateHcxActivationKey

Generated from protobuf message `google.cloud.vmwareengine.v1.CreateHcxActivationKeyRequest`

## Namespace

Google \\ Cloud \\ VmwareEngine \\ V1

## Methods

### \_\_construct

Constructor.

**Parameters**

**Name**

**Description**

`data`

`array`  

Optional. Data for populating the Message object.

`↳ parent`

`string`  

Required. The resource name of the private cloud to create the key for. Resource names are schemeless URIs that follow the conventions in [https://cloud.google.com/apis/design/resource\_names](https://cloud.google.com/apis/design/resource_names). For example: `projects/my-project/locations/us-central1/privateClouds/my-cloud`

`↳ hcx_activation_key`

`[Google\Cloud\VmwareEngine\V1\HcxActivationKey](/php/docs/reference/cloud-vmware-engine/0.4.0/V1.HcxActivationKey)`  

Required. The initial description of a new HCX activation key. When creating a new key, this field must be an empty object.

`↳ hcx_activation_key_id`

`string`  

Required. The user-provided identifier of the `HcxActivationKey` to be created. This identifier must be unique among `HcxActivationKey` resources within the parent and becomes the final token in the name URI. The identifier must meet the following requirements: \* Only contains 1-63 alphanumeric characters and hyphens \* Begins with an alphabetical character \* Ends with a non-hyphen character \* Not formatted as a UUID \* Complies with [RFC 1034](https://datatracker.ietf.org/doc/html/rfc1034) (section 3.5)

`↳ request_id`

`string`  

A request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server guarantees that a request doesn't result in creation of duplicate commitments for at least 60 minutes. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000).

### getParent

Required. The resource name of the private cloud to create the key for.

Resource names are schemeless URIs that follow the conventions in [https://cloud.google.com/apis/design/resource\_names](https://cloud.google.com/apis/design/resource_names). For example: `projects/my-project/locations/us-central1/privateClouds/my-cloud`

**Returns**

**Type**

**Description**

`string`

### setParent

Required. The resource name of the private cloud to create the key for.

Resource names are schemeless URIs that follow the conventions in [https://cloud.google.com/apis/design/resource\_names](https://cloud.google.com/apis/design/resource_names). For example: `projects/my-project/locations/us-central1/privateClouds/my-cloud`

**Parameter**

**Name**

**Description**

`var`

`string`  

**Returns**

**Type**

**Description**

`$this`

### getHcxActivationKey

Required. The initial description of a new HCX activation key. When creating a new key, this field must be an empty object.

**Returns**

**Type**

**Description**

`[Google\Cloud\VmwareEngine\V1\HcxActivationKey](/php/docs/reference/cloud-vmware-engine/0.4.0/V1.HcxActivationKey)|null`

### hasHcxActivationKey

### clearHcxActivationKey

### setHcxActivationKey

Required. The initial description of a new HCX activation key. When creating a new key, this field must be an empty object.

**Parameter**

**Name**

**Description**

`var`

`[Google\Cloud\VmwareEngine\V1\HcxActivationKey](/php/docs/reference/cloud-vmware-engine/0.4.0/V1.HcxActivationKey)`  

**Returns**

**Type**

**Description**

`$this`

### getHcxActivationKeyId

Required. The user-provided identifier of the `HcxActivationKey` to be created. This identifier must be unique among `HcxActivationKey` resources within the parent and becomes the final token in the name URI.

The identifier must meet the following requirements:

-   Only contains 1-63 alphanumeric characters and hyphens
-   Begins with an alphabetical character
-   Ends with a non-hyphen character
-   Not formatted as a UUID
-   Complies with [RFC 1034](https://datatracker.ietf.org/doc/html/rfc1034) (section 3.5)

**Returns**

**Type**

**Description**

`string`

### setHcxActivationKeyId

Required. The user-provided identifier of the `HcxActivationKey` to be created. This identifier must be unique among `HcxActivationKey` resources within the parent and becomes the final token in the name URI.

The identifier must meet the following requirements:

-   Only contains 1-63 alphanumeric characters and hyphens
-   Begins with an alphabetical character
-   Ends with a non-hyphen character
-   Not formatted as a UUID
-   Complies with [RFC 1034](https://datatracker.ietf.org/doc/html/rfc1034) (section 3.5)

**Parameter**

**Name**

**Description**

`var`

`string`  

**Returns**

**Type**

**Description**

`$this`

### getRequestId

A request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server guarantees that a request doesn't result in creation of duplicate commitments for at least 60 minutes.

For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000).

**Returns**

**Type**

**Description**

`string`

### setRequestId

A request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server guarantees that a request doesn't result in creation of duplicate commitments for at least 60 minutes.

For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000).

**Parameter**

**Name**

**Description**

`var`

`string`  

**Returns**

**Type**

**Description**

`$this`

### static::build

**Parameters**

**Name**

**Description**

`parent`

`string`  

Required. The resource name of the private cloud to create the key for. Resource names are schemeless URIs that follow the conventions in [https://cloud.google.com/apis/design/resource\_names](https://cloud.google.com/apis/design/resource_names). For example: `projects/my-project/locations/us-central1/privateClouds/my-cloud` Please see Google\\Cloud\\VmwareEngine\\V1\\VmwareEngineClient::privateCloudName() for help formatting this field.

`hcxActivationKey`

`[Google\Cloud\VmwareEngine\V1\HcxActivationKey](/php/docs/reference/cloud-vmware-engine/0.4.0/V1.HcxActivationKey)`  

Required. The initial description of a new HCX activation key. When creating a new key, this field must be an empty object.

`hcxActivationKeyId`

`string`  

Required. The user-provided identifier of the `HcxActivationKey` to be created. This identifier must be unique among `HcxActivationKey` resources within the parent and becomes the final token in the name URI. The identifier must meet the following requirements:

-   Only contains 1-63 alphanumeric characters and hyphens
-   Begins with an alphabetical character
-   Ends with a non-hyphen character
-   Not formatted as a UUID
-   Complies with [RFC 1034](https://datatracker.ietf.org/doc/html/rfc1034) (section 3.5)

**Returns**

**Type**

**Description**

`[Google\Cloud\VmwareEngine\V1\CreateHcxActivationKeyRequest](/php/docs/reference/cloud-vmware-engine/0.4.0/V1.CreateHcxActivationKeyRequest)`

Send feedback

Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0). For details, see the [Google Developers Site Policies](https://developers.google.com/site-policies). Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2026-03-18 UTC.
