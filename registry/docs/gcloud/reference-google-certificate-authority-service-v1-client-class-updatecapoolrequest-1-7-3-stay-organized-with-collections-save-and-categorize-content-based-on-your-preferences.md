-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Developer tools](https://docs.cloud.google.com/docs/costs-usage)
-   [PHP](https://docs.cloud.google.com/php/docs)
-   [Client libraries](https://docs.cloud.google.com/php/docs/reference)

Send feedback

# Google Certificate Authority Service V1 Client - Class UpdateCaPoolRequest (1.7.3) Stay organized with collections Save and categorize content based on your preferences.

2.3.0 (latest) 2.2.2 2.1.1 2.0.3 1.7.3 1.5.0 1.4.2 1.3.1 1.2.2 1.1.0 1.0.3

Reference documentation and code samples for the Google Certificate Authority Service V1 Client class UpdateCaPoolRequest.

Request message for CertificateAuthorityService.UpdateCaPool.

Generated from protobuf message `google.cloud.security.privateca.v1.UpdateCaPoolRequest`

## Namespace

Google \\ Cloud \\ Security \\ PrivateCA \\ V1

## Methods

### \_\_construct

Constructor.

**Parameters**

**Name**

**Description**

`data`

`array`  

Optional. Data for populating the Message object.

`↳ ca_pool`

`[Google\Cloud\Security\PrivateCA\V1\CaPool](/php/docs/reference/cloud-security-private-ca/1.7.3/V1.CaPool)`  

Required. [CaPool](/php/docs/reference/cloud-security-private-ca/1.7.3/V1.CaPool) with updated values.

`↳ update_mask`

`[Google\Protobuf\FieldMask](https://protobuf.dev/reference/php/api-docs/Google/Protobuf/FieldMask)`  

Required. A list of fields to be updated in this request.

`↳ request_id`

`string`  

Optional. An ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes since the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000).

### getCaPool

Required. [CaPool](/php/docs/reference/cloud-security-private-ca/1.7.3/V1.CaPool) with updated values.

**Returns**

**Type**

**Description**

`[Google\Cloud\Security\PrivateCA\V1\CaPool](/php/docs/reference/cloud-security-private-ca/1.7.3/V1.CaPool)|null`

### hasCaPool

### clearCaPool

### setCaPool

Required. [CaPool](/php/docs/reference/cloud-security-private-ca/1.7.3/V1.CaPool) with updated values.

**Parameter**

**Name**

**Description**

`var`

`[Google\Cloud\Security\PrivateCA\V1\CaPool](/php/docs/reference/cloud-security-private-ca/1.7.3/V1.CaPool)`  

**Returns**

**Type**

**Description**

`$this`

### getUpdateMask

Required. A list of fields to be updated in this request.

**Returns**

**Type**

**Description**

`[Google\Protobuf\FieldMask](https://protobuf.dev/reference/php/api-docs/Google/Protobuf/FieldMask)|null`

### hasUpdateMask

### clearUpdateMask

### setUpdateMask

Required. A list of fields to be updated in this request.

**Parameter**

**Name**

**Description**

`var`

`[Google\Protobuf\FieldMask](https://protobuf.dev/reference/php/api-docs/Google/Protobuf/FieldMask)`  

**Returns**

**Type**

**Description**

`$this`

### getRequestId

Optional. An ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes since the first request.

For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000).

**Returns**

**Type**

**Description**

`string`

### setRequestId

Optional. An ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes since the first request.

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

`caPool`

`[Google\Cloud\Security\PrivateCA\V1\CaPool](/php/docs/reference/cloud-security-private-ca/1.7.3/V1.CaPool)`  

Required. [CaPool](/php/docs/reference/cloud-security-private-ca/1.7.3/V1.CaPool) with updated values.

`updateMask`

`[Google\Protobuf\FieldMask](https://protobuf.dev/reference/php/api-docs/Google/Protobuf/FieldMask)`  

Required. A list of fields to be updated in this request.

**Returns**

**Type**

**Description**

`[Google\Cloud\Security\PrivateCA\V1\UpdateCaPoolRequest](/php/docs/reference/cloud-security-private-ca/1.7.3/V1.UpdateCaPoolRequest)`

Send feedback

Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0). For details, see the [Google Developers Site Policies](https://developers.google.com/site-policies). Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2026-03-18 UTC.
