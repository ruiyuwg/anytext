-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Developer tools](https://docs.cloud.google.com/docs/costs-usage)
-   [PHP](https://docs.cloud.google.com/php/docs)
-   [Client libraries](https://docs.cloud.google.com/php/docs/reference)

Send feedback

# Google Certificate Authority Service V1 Client - Class EnableCertificateAuthorityRequest (2.3.0) Stay organized with collections Save and categorize content based on your preferences.

2.3.0 (latest) 2.2.2 2.1.1 2.0.3 1.7.3 1.5.0 1.4.2 1.3.1 1.2.2 1.1.0 1.0.3

Reference documentation and code samples for the Google Certificate Authority Service V1 Client class EnableCertificateAuthorityRequest.

Request message for [CertificateAuthorityService.EnableCertificateAuthority](/php/docs/reference/cloud-security-private-ca/latest/V1.Client.CertificateAuthorityServiceClient#_Google_Cloud_Security_PrivateCA_V1_Client_CertificateAuthorityServiceClient__enableCertificateAuthority__).

Generated from protobuf message `google.cloud.security.privateca.v1.EnableCertificateAuthorityRequest`

## Namespace

Google \\ Cloud \\ Security \\ PrivateCA \\ V1

## Methods

### \_\_construct

Constructor.

**Parameter**

**Name**

**Description**

`data`

`mixed`  

### getName

Required. The resource name for this [CertificateAuthority](/php/docs/reference/cloud-security-private-ca/latest/V1.CertificateAuthority) in the format `projects/*/locations/*/caPools/*/certificateAuthorities/*`.

**Returns**

**Type**

**Description**

`string`

### setName

Required. The resource name for this [CertificateAuthority](/php/docs/reference/cloud-security-private-ca/latest/V1.CertificateAuthority) in the format `projects/*/locations/*/caPools/*/certificateAuthorities/*`.

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

**Parameter**

**Name**

**Description**

`name`

`string`  

Required. The resource name for this [CertificateAuthority](/php/docs/reference/cloud-security-private-ca/latest/V1.CertificateAuthority) in the format `projects/*/locations/*/caPools/*/certificateAuthorities/*`. Please see CertificateAuthorityServiceClient::certificateAuthorityName() for help formatting this field.

**Returns**

**Type**

**Description**

`[EnableCertificateAuthorityRequest](/php/docs/reference/cloud-security-private-ca/latest/V1.EnableCertificateAuthorityRequest)`

Send feedback

Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0). For details, see the [Google Developers Site Policies](https://developers.google.com/site-policies). Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2026-03-18 UTC.
