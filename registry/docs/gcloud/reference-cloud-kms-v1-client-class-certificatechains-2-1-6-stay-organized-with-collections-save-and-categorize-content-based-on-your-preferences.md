-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Developer tools](https://docs.cloud.google.com/docs/costs-usage)
-   [PHP](https://docs.cloud.google.com/php/docs)
-   [Client libraries](https://docs.cloud.google.com/php/docs/reference)

Send feedback

# Cloud KMS V1 Client - Class CertificateChains (2.1.6) Stay organized with collections Save and categorize content based on your preferences.

2.8.0 (latest) 2.7.0 2.6.0 2.5.2 2.4.0 2.3.1 2.2.0 2.1.6 2.0.0 1.23.0 1.22.1 1.21.4 1.20.3 1.19.0 1.18.1 1.17.0 1.16.4 1.15.3

Reference documentation and code samples for the Cloud KMS V1 Client class CertificateChains.

Certificate chains needed to verify the attestation.

Certificates in chains are PEM-encoded and are ordered based on [https://tools.ietf.org/html/rfc5246#section-7.4.2](https://tools.ietf.org/html/rfc5246#section-7.4.2).

Generated from protobuf message `google.cloud.kms.v1.KeyOperationAttestation.CertificateChains`

## Namespace

Google \\ Cloud \\ Kms \\ V1 \\ KeyOperationAttestation

## Methods

### \_\_construct

Constructor.

**Parameters**

**Name**

**Description**

`data`

`array`  

Optional. Data for populating the Message object.

`↳ cavium_certs`

`array`  

Cavium certificate chain corresponding to the attestation.

`↳ google_card_certs`

`array`  

Google card certificate chain corresponding to the attestation.

`↳ google_partition_certs`

`array`  

Google partition certificate chain corresponding to the attestation.

### getCaviumCerts

Cavium certificate chain corresponding to the attestation.

**Returns**

**Type**

**Description**

`[Google\Protobuf\Internal\RepeatedField](https://protobuf.dev/reference/php/api-docs/Google/Protobuf/Internal/RepeatedField)`

### setCaviumCerts

Cavium certificate chain corresponding to the attestation.

**Parameter**

**Name**

**Description**

`var`

`string[]`  

**Returns**

**Type**

**Description**

`$this`

### getGoogleCardCerts

Google card certificate chain corresponding to the attestation.

**Returns**

**Type**

**Description**

`[Google\Protobuf\Internal\RepeatedField](https://protobuf.dev/reference/php/api-docs/Google/Protobuf/Internal/RepeatedField)`

### setGoogleCardCerts

Google card certificate chain corresponding to the attestation.

**Parameter**

**Name**

**Description**

`var`

`string[]`  

**Returns**

**Type**

**Description**

`$this`

### getGooglePartitionCerts

Google partition certificate chain corresponding to the attestation.

**Returns**

**Type**

**Description**

`[Google\Protobuf\Internal\RepeatedField](https://protobuf.dev/reference/php/api-docs/Google/Protobuf/Internal/RepeatedField)`

### setGooglePartitionCerts

Google partition certificate chain corresponding to the attestation.

**Parameter**

**Name**

**Description**

`var`

`string[]`  

**Returns**

**Type**

**Description**

`$this`

Send feedback

Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0). For details, see the [Google Developers Site Policies](https://developers.google.com/site-policies). Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2026-03-18 UTC.
