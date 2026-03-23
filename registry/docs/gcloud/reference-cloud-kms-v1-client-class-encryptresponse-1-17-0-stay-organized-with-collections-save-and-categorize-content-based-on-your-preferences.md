-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Developer tools](https://docs.cloud.google.com/docs/costs-usage)
-   [PHP](https://docs.cloud.google.com/php/docs)
-   [Client libraries](https://docs.cloud.google.com/php/docs/reference)

Send feedback

# Cloud KMS V1 Client - Class EncryptResponse (1.17.0) Stay organized with collections Save and categorize content based on your preferences.

2.8.0 (latest) 2.7.0 2.6.0 2.5.2 2.4.0 2.3.1 2.2.0 2.1.6 2.0.0 1.23.0 1.22.1 1.21.4 1.20.3 1.19.0 1.18.1 1.17.0 1.16.4 1.15.3

Reference documentation and code samples for the Cloud KMS V1 Client class EncryptResponse.

Response message for [KeyManagementService.Encrypt](/php/docs/reference/cloud-kms/1.17.0/V1.KeyManagementServiceClient#_Google_Cloud_Kms_V1_KeyManagementServiceClient__encrypt__).

Generated from protobuf message `google.cloud.kms.v1.EncryptResponse`

## Methods

### \_\_construct

Constructor.

**Parameters**

**Name**

**Description**

`data`

`array`  

Optional. Data for populating the Message object.

`↳ name`

`string`  

The resource name of the [CryptoKeyVersion](/php/docs/reference/cloud-kms/1.17.0/V1.CryptoKeyVersion) used in encryption. Check this field to verify that the intended resource was used for encryption.

`↳ ciphertext`

`string`  

The encrypted data.

`↳ ciphertext_crc32c`

`[Google\Protobuf\Int64Value](https://protobuf.dev/reference/php/api-docs/Google/Protobuf/Int64Value)`  

Integrity verification field. A CRC32C checksum of the returned [EncryptResponse.ciphertext](/php/docs/reference/cloud-kms/1.17.0/V1.EncryptResponse#_Google_Cloud_Kms_V1_EncryptResponse__getCiphertext__). An integrity check of [EncryptResponse.ciphertext](/php/docs/reference/cloud-kms/1.17.0/V1.EncryptResponse#_Google_Cloud_Kms_V1_EncryptResponse__getCiphertext__) can be performed by computing the CRC32C checksum of [EncryptResponse.ciphertext](/php/docs/reference/cloud-kms/1.17.0/V1.EncryptResponse#_Google_Cloud_Kms_V1_EncryptResponse__getCiphertext__) and comparing your results to this field. Discard the response in case of non-matching checksum values, and perform a limited number of retries. A persistent mismatch may indicate an issue in your computation of the CRC32C checksum. Note: This field is defined as int64 for reasons of compatibility across different languages. However, it is a non-negative integer, which will never exceed 2^32-1, and can be safely downconverted to uint32 in languages that support this type.

`↳ verified_plaintext_crc32c`

`bool`  

Integrity verification field. A flag indicating whether EncryptRequest.plaintext\_crc32c was received by KeyManagementService and used for the integrity verification of the [plaintext](/php/docs/reference/cloud-kms/1.17.0/V1.EncryptRequest#_Google_Cloud_Kms_V1_EncryptRequest__getPlaintext__). A false value of this field indicates either that EncryptRequest.plaintext\_crc32c was left unset or that it was not delivered to KeyManagementService. If you've set EncryptRequest.plaintext\_crc32c but this field is still false, discard the response and perform a limited number of retries.

`↳ verified_additional_authenticated_data_crc32c`

`bool`  

Integrity verification field. A flag indicating whether EncryptRequest.additional\_authenticated\_data\_crc32c was received by KeyManagementService and used for the integrity verification of the [AAD](/php/docs/reference/cloud-kms/1.17.0/V1.EncryptRequest#_Google_Cloud_Kms_V1_EncryptRequest__getAdditionalAuthenticatedData__). A false value of this field indicates either that EncryptRequest.additional\_authenticated\_data\_crc32c was left unset or that it was not delivered to KeyManagementService. If you've set EncryptRequest.additional\_authenticated\_data\_crc32c but this field is still false, discard the response and perform a limited number of retries.

`↳ protection_level`

`int`  

The [ProtectionLevel](/php/docs/reference/cloud-kms/1.17.0/V1.ProtectionLevel) of the [CryptoKeyVersion](/php/docs/reference/cloud-kms/1.17.0/V1.CryptoKeyVersion) used in encryption.

### getName

The resource name of the [CryptoKeyVersion](/php/docs/reference/cloud-kms/1.17.0/V1.CryptoKeyVersion) used in encryption. Check this field to verify that the intended resource was used for encryption.

**Returns**

**Type**

**Description**

`string`

### setName

The resource name of the [CryptoKeyVersion](/php/docs/reference/cloud-kms/1.17.0/V1.CryptoKeyVersion) used in encryption. Check this field to verify that the intended resource was used for encryption.

**Parameter**

**Name**

**Description**

`var`

`string`  

**Returns**

**Type**

**Description**

`$this`

### getCiphertext

The encrypted data.

**Returns**

**Type**

**Description**

`string`

### setCiphertext

The encrypted data.

**Parameter**

**Name**

**Description**

`var`

`string`  

**Returns**

**Type**

**Description**

`$this`

### getCiphertextCrc32C

Integrity verification field. A CRC32C checksum of the returned [EncryptResponse.ciphertext](/php/docs/reference/cloud-kms/1.17.0/V1.EncryptResponse#_Google_Cloud_Kms_V1_EncryptResponse__getCiphertext__).

An integrity check of [EncryptResponse.ciphertext](/php/docs/reference/cloud-kms/1.17.0/V1.EncryptResponse#_Google_Cloud_Kms_V1_EncryptResponse__getCiphertext__) can be performed by computing the CRC32C checksum of [EncryptResponse.ciphertext](/php/docs/reference/cloud-kms/1.17.0/V1.EncryptResponse#_Google_Cloud_Kms_V1_EncryptResponse__getCiphertext__) and comparing your results to this field. Discard the response in case of non-matching checksum values, and perform a limited number of retries. A persistent mismatch may indicate an issue in your computation of the CRC32C checksum. Note: This field is defined as int64 for reasons of compatibility across different languages. However, it is a non-negative integer, which will never exceed 2^32-1, and can be safely downconverted to uint32 in languages that support this type.

**Returns**

**Type**

**Description**

`[Google\Protobuf\Int64Value](https://protobuf.dev/reference/php/api-docs/Google/Protobuf/Int64Value)|null`

### hasCiphertextCrc32C

### clearCiphertextCrc32C

### getCiphertextCrc32CValue

Returns the unboxed value from `getCiphertextCrc32C()`

Integrity verification field. A CRC32C checksum of the returned [EncryptResponse.ciphertext](/php/docs/reference/cloud-kms/1.17.0/V1.EncryptResponse#_Google_Cloud_Kms_V1_EncryptResponse__getCiphertext__). An integrity check of [EncryptResponse.ciphertext](/php/docs/reference/cloud-kms/1.17.0/V1.EncryptResponse#_Google_Cloud_Kms_V1_EncryptResponse__getCiphertext__) can be performed by computing the CRC32C checksum of [EncryptResponse.ciphertext](/php/docs/reference/cloud-kms/1.17.0/V1.EncryptResponse#_Google_Cloud_Kms_V1_EncryptResponse__getCiphertext__) and comparing your results to this field. Discard the response in case of non-matching checksum values, and perform a limited number of retries. A persistent mismatch may indicate an issue in your computation of the CRC32C checksum. Note: This field is defined as int64 for reasons of compatibility across different languages. However, it is a non-negative integer, which will never exceed 2^32-1, and can be safely downconverted to uint32 in languages that support this type.

**Returns**

**Type**

**Description**

`int|string|null`

### setCiphertextCrc32C

Integrity verification field. A CRC32C checksum of the returned [EncryptResponse.ciphertext](/php/docs/reference/cloud-kms/1.17.0/V1.EncryptResponse#_Google_Cloud_Kms_V1_EncryptResponse__getCiphertext__).

An integrity check of [EncryptResponse.ciphertext](/php/docs/reference/cloud-kms/1.17.0/V1.EncryptResponse#_Google_Cloud_Kms_V1_EncryptResponse__getCiphertext__) can be performed by computing the CRC32C checksum of [EncryptResponse.ciphertext](/php/docs/reference/cloud-kms/1.17.0/V1.EncryptResponse#_Google_Cloud_Kms_V1_EncryptResponse__getCiphertext__) and comparing your results to this field. Discard the response in case of non-matching checksum values, and perform a limited number of retries. A persistent mismatch may indicate an issue in your computation of the CRC32C checksum. Note: This field is defined as int64 for reasons of compatibility across different languages. However, it is a non-negative integer, which will never exceed 2^32-1, and can be safely downconverted to uint32 in languages that support this type.

**Parameter**

**Name**

**Description**

`var`

`[Google\Protobuf\Int64Value](https://protobuf.dev/reference/php/api-docs/Google/Protobuf/Int64Value)`  

**Returns**

**Type**

**Description**

`$this`

### setCiphertextCrc32CValue

Sets the field by wrapping a primitive type in a Google\\Protobuf\\Int64Value object.

Integrity verification field. A CRC32C checksum of the returned [EncryptResponse.ciphertext](/php/docs/reference/cloud-kms/1.17.0/V1.EncryptResponse#_Google_Cloud_Kms_V1_EncryptResponse__getCiphertext__). An integrity check of [EncryptResponse.ciphertext](/php/docs/reference/cloud-kms/1.17.0/V1.EncryptResponse#_Google_Cloud_Kms_V1_EncryptResponse__getCiphertext__) can be performed by computing the CRC32C checksum of [EncryptResponse.ciphertext](/php/docs/reference/cloud-kms/1.17.0/V1.EncryptResponse#_Google_Cloud_Kms_V1_EncryptResponse__getCiphertext__) and comparing your results to this field. Discard the response in case of non-matching checksum values, and perform a limited number of retries. A persistent mismatch may indicate an issue in your computation of the CRC32C checksum. Note: This field is defined as int64 for reasons of compatibility across different languages. However, it is a non-negative integer, which will never exceed 2^32-1, and can be safely downconverted to uint32 in languages that support this type.

**Parameter**

**Name**

**Description**

`var`

`int|string|null`  

**Returns**

**Type**

**Description**

`$this`

### getVerifiedPlaintextCrc32C

Integrity verification field. A flag indicating whether EncryptRequest.plaintext\_crc32c was received by KeyManagementService and used for the integrity verification of the [plaintext](/php/docs/reference/cloud-kms/1.17.0/V1.EncryptRequest#_Google_Cloud_Kms_V1_EncryptRequest__getPlaintext__). A false value of this field indicates either that EncryptRequest.plaintext\_crc32c was left unset or that it was not delivered to KeyManagementService. If you've set EncryptRequest.plaintext\_crc32c but this field is still false, discard the response and perform a limited number of retries.

**Returns**

**Type**

**Description**

`bool`

### setVerifiedPlaintextCrc32C

Integrity verification field. A flag indicating whether EncryptRequest.plaintext\_crc32c was received by KeyManagementService and used for the integrity verification of the [plaintext](/php/docs/reference/cloud-kms/1.17.0/V1.EncryptRequest#_Google_Cloud_Kms_V1_EncryptRequest__getPlaintext__). A false value of this field indicates either that EncryptRequest.plaintext\_crc32c was left unset or that it was not delivered to KeyManagementService. If you've set EncryptRequest.plaintext\_crc32c but this field is still false, discard the response and perform a limited number of retries.

**Parameter**

**Name**

**Description**

`var`

`bool`  

**Returns**

**Type**

**Description**

`$this`

### getVerifiedAdditionalAuthenticatedDataCrc32C

Integrity verification field. A flag indicating whether EncryptRequest.additional\_authenticated\_data\_crc32c was received by KeyManagementService and used for the integrity verification of the [AAD](/php/docs/reference/cloud-kms/1.17.0/V1.EncryptRequest#_Google_Cloud_Kms_V1_EncryptRequest__getAdditionalAuthenticatedData__). A false value of this field indicates either that EncryptRequest.additional\_authenticated\_data\_crc32c was left unset or that it was not delivered to KeyManagementService. If you've set EncryptRequest.additional\_authenticated\_data\_crc32c but this field is still false, discard the response and perform a limited number of retries.

**Returns**

**Type**

**Description**

`bool`

### setVerifiedAdditionalAuthenticatedDataCrc32C

Integrity verification field. A flag indicating whether EncryptRequest.additional\_authenticated\_data\_crc32c was received by KeyManagementService and used for the integrity verification of the [AAD](/php/docs/reference/cloud-kms/1.17.0/V1.EncryptRequest#_Google_Cloud_Kms_V1_EncryptRequest__getAdditionalAuthenticatedData__). A false value of this field indicates either that EncryptRequest.additional\_authenticated\_data\_crc32c was left unset or that it was not delivered to KeyManagementService. If you've set EncryptRequest.additional\_authenticated\_data\_crc32c but this field is still false, discard the response and perform a limited number of retries.

**Parameter**

**Name**

**Description**

`var`

`bool`  

**Returns**

**Type**

**Description**

`$this`

### getProtectionLevel

The [ProtectionLevel](/php/docs/reference/cloud-kms/1.17.0/V1.ProtectionLevel) of the [CryptoKeyVersion](/php/docs/reference/cloud-kms/1.17.0/V1.CryptoKeyVersion) used in encryption.

**Returns**

**Type**

**Description**

`int`

### setProtectionLevel

The [ProtectionLevel](/php/docs/reference/cloud-kms/1.17.0/V1.ProtectionLevel) of the [CryptoKeyVersion](/php/docs/reference/cloud-kms/1.17.0/V1.CryptoKeyVersion) used in encryption.

**Parameter**

**Name**

**Description**

`var`

`int`  

**Returns**

**Type**

**Description**

`$this`

Send feedback

Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0). For details, see the [Google Developers Site Policies](https://developers.google.com/site-policies). Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2026-03-18 UTC.
