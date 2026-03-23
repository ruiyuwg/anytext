-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Developer tools](https://docs.cloud.google.com/docs/costs-usage)
-   [PHP](https://docs.cloud.google.com/php/docs)
-   [Client libraries](https://docs.cloud.google.com/php/docs/reference)

Send feedback

# Google Certificate Authority Service V1beta1 Client - Class UpdateCertificateRevocationListRequest (1.4.2) Stay organized with collections Save and categorize content based on your preferences.

2.3.0 (latest) 2.2.2 2.1.1 2.0.3 1.7.3 1.5.0 1.4.2 1.3.1 1.2.2 1.1.0 1.0.3

**Beta**

This library is covered by the [Pre-GA Offerings Terms](/terms/service-terms#1) of the Terms of Service. Pre-GA libraries might have limited support, and changes to pre-GA libraries might not be compatible with other pre-GA versions. For more information, see the [launch stage descriptions](/products#product-launch-stages).

Reference documentation and code samples for the Google Certificate Authority Service V1beta1 Client class UpdateCertificateRevocationListRequest.

Request message for [CertificateAuthorityService.UpdateCertificateRevocationList](/php/docs/reference/cloud-security-private-ca/1.4.2/V1beta1.CertificateAuthorityServiceClient#_Google_Cloud_Security_PrivateCA_V1beta1_CertificateAuthorityServiceClient__updateCertificateRevocationList__).

Generated from protobuf message `google.cloud.security.privateca.v1beta1.UpdateCertificateRevocationListRequest`

## Namespace

Google \\ Cloud \\ Security \\ PrivateCA \\ V1beta1

## Methods

### \_\_construct

Constructor.

**Parameters**

**Name**

**Description**

`data`

`array`  

Optional. Data for populating the Message object.

`↳ certificate_revocation_list`

`[Google\Cloud\Security\PrivateCA\V1beta1\CertificateRevocationList](/php/docs/reference/cloud-security-private-ca/1.4.2/V1beta1.CertificateRevocationList)`  

Required. [CertificateRevocationList](/php/docs/reference/cloud-security-private-ca/1.4.2/V1beta1.CertificateRevocationList) with updated values.

`↳ update_mask`

`[Google\Protobuf\FieldMask](https://protobuf.dev/reference/php/api-docs/Google/Protobuf/FieldMask)`  

Required. A list of fields to be updated in this request.

`↳ request_id`

`string`  

Optional. An ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes since the first request. For example, consider a situation where you make an initial request and t he request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000).

### getCertificateRevocationList

Required. [CertificateRevocationList](/php/docs/reference/cloud-security-private-ca/1.4.2/V1beta1.CertificateRevocationList) with updated values.

**Returns**

**Type**

**Description**

`[Google\Cloud\Security\PrivateCA\V1beta1\CertificateRevocationList](/php/docs/reference/cloud-security-private-ca/1.4.2/V1beta1.CertificateRevocationList)|null`

### hasCertificateRevocationList

### clearCertificateRevocationList

### setCertificateRevocationList

Required. [CertificateRevocationList](/php/docs/reference/cloud-security-private-ca/1.4.2/V1beta1.CertificateRevocationList) with updated values.

**Parameter**

**Name**

**Description**

`var`

`[Google\Cloud\Security\PrivateCA\V1beta1\CertificateRevocationList](/php/docs/reference/cloud-security-private-ca/1.4.2/V1beta1.CertificateRevocationList)`  

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

For example, consider a situation where you make an initial request and t he request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000).

**Returns**

**Type**

**Description**

`string`

### setRequestId

Optional. An ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes since the first request.

For example, consider a situation where you make an initial request and t he request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000).

**Parameter**

**Name**

**Description**

`var`

`string`  

**Returns**

**Type**

**Description**

`$this`

Send feedback

Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0). For details, see the [Google Developers Site Policies](https://developers.google.com/site-policies). Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2026-03-18 UTC.
