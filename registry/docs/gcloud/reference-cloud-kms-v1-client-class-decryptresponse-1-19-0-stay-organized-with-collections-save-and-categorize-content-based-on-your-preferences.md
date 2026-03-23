-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Developer tools](https://docs.cloud.google.com/docs/costs-usage)
-   [PHP](https://docs.cloud.google.com/php/docs)
-   [Client libraries](https://docs.cloud.google.com/php/docs/reference)

Send feedback

# Cloud KMS V1 Client - Class DecryptResponse (1.19.0) Stay organized with collections Save and categorize content based on your preferences.

2.8.0 (latest) 2.7.0 2.6.0 2.5.2 2.4.0 2.3.1 2.2.0 2.1.6 2.0.0 1.23.0 1.22.1 1.21.4 1.20.3 1.19.0 1.18.1 1.17.0 1.16.4 1.15.3

Reference documentation and code samples for the Cloud KMS V1 Client class DecryptResponse.

Response message for [KeyManagementService.Decrypt](/php/docs/reference/cloud-kms/1.19.0/V1.KeyManagementServiceClient#_Google_Cloud_Kms_V1_KeyManagementServiceClient__decrypt__).

Generated from protobuf message `google.cloud.kms.v1.DecryptResponse`

## Namespace

Google \\ Cloud \\ Kms \\ V1

## Methods

### \_\_construct

Constructor.

**Parameters**

**Name**

**Description**

`data`

`array`  

Optional. Data for populating the Message object.

`↳ plaintext`

`string`  

The decrypted data originally supplied in [EncryptRequest.plaintext](/php/docs/reference/cloud-kms/1.19.0/V1.EncryptRequest#_Google_Cloud_Kms_V1_EncryptRequest__getPlaintext__).

`↳ plaintext_crc32c`

`[Google\Protobuf\Int64Value](https://protobuf.dev/reference/php/api-docs/Google/Protobuf/Int64Value)`  

Integrity verification field. A CRC32C checksum of the returned [DecryptResponse.plaintext](/php/docs/reference/cloud-kms/1.19.0/V1.DecryptResponse#_Google_Cloud_Kms_V1_DecryptResponse__getPlaintext__). An integrity check of [DecryptResponse.plaintext](/php/docs/reference/cloud-kms/1.19.0/V1.DecryptResponse#_Google_Cloud_Kms_V1_DecryptResponse__getPlaintext__) can be performed by computing the CRC32C checksum of [DecryptResponse.plaintext](/php/docs/reference/cloud-kms/1.19.0/V1.DecryptResponse#_Google_Cloud_Kms_V1_DecryptResponse__getPlaintext__) and comparing your results to this field. Discard the response in case of non-matching checksum values, and perform a limited number of retries. A persistent mismatch may indicate an issue in your computation of the CRC32C checksum. Note: receiving this response message indicates that KeyManagementService is able to successfully decrypt the [ciphertext](/php/docs/reference/cloud-kms/1.19.0/V1.DecryptRequest#_Google_Cloud_Kms_V1_DecryptRequest__getCiphertext__). Note: This field is defined as int64 for reasons of compatibility across different languages. However, it is a non-negative integer, which will never exceed 2^32-1, and can be safely downconverted to uint32 in languages that support this type.

`↳ used_primary`

`bool`  

Whether the Decryption was performed using the primary key version.

`↳ protection_level`

`int`  

The [ProtectionLevel](/php/docs/reference/cloud-kms/1.19.0/V1.ProtectionLevel) of the [CryptoKeyVersion](/php/docs/reference/cloud-kms/1.19.0/V1.CryptoKeyVersion) used in decryption.

### getPlaintext

The decrypted data originally supplied in [EncryptRequest.plaintext](/php/docs/reference/cloud-kms/1.19.0/V1.EncryptRequest#_Google_Cloud_Kms_V1_EncryptRequest__getPlaintext__).

**Returns**

**Type**

**Description**

`string`

### setPlaintext

The decrypted data originally supplied in [EncryptRequest.plaintext](/php/docs/reference/cloud-kms/1.19.0/V1.EncryptRequest#_Google_Cloud_Kms_V1_EncryptRequest__getPlaintext__).

**Parameter**

**Name**

**Description**

`var`

`string`  

**Returns**

**Type**

**Description**

`$this`

### getPlaintextCrc32C

Integrity verification field. A CRC32C checksum of the returned [DecryptResponse.plaintext](/php/docs/reference/cloud-kms/1.19.0/V1.DecryptResponse#_Google_Cloud_Kms_V1_DecryptResponse__getPlaintext__).

An integrity check of [DecryptResponse.plaintext](/php/docs/reference/cloud-kms/1.19.0/V1.DecryptResponse#_Google_Cloud_Kms_V1_DecryptResponse__getPlaintext__) can be performed by computing the CRC32C checksum of [DecryptResponse.plaintext](/php/docs/reference/cloud-kms/1.19.0/V1.DecryptResponse#_Google_Cloud_Kms_V1_DecryptResponse__getPlaintext__) and comparing your results to this field. Discard the response in case of non-matching checksum values, and perform a limited number of retries. A persistent mismatch may indicate an issue in your computation of the CRC32C checksum. Note: receiving this response message indicates that KeyManagementService is able to successfully decrypt the [ciphertext](/php/docs/reference/cloud-kms/1.19.0/V1.DecryptRequest#_Google_Cloud_Kms_V1_DecryptRequest__getCiphertext__). Note: This field is defined as int64 for reasons of compatibility across different languages. However, it is a non-negative integer, which will never exceed 2^32-1, and can be safely downconverted to uint32 in languages that support this type.

**Returns**

**Type**

**Description**

`[Google\Protobuf\Int64Value](https://protobuf.dev/reference/php/api-docs/Google/Protobuf/Int64Value)|null`

### hasPlaintextCrc32C

### clearPlaintextCrc32C

### getPlaintextCrc32CValue

Returns the unboxed value from `getPlaintextCrc32C()`

Integrity verification field. A CRC32C checksum of the returned [DecryptResponse.plaintext](/php/docs/reference/cloud-kms/1.19.0/V1.DecryptResponse#_Google_Cloud_Kms_V1_DecryptResponse__getPlaintext__). An integrity check of [DecryptResponse.plaintext](/php/docs/reference/cloud-kms/1.19.0/V1.DecryptResponse#_Google_Cloud_Kms_V1_DecryptResponse__getPlaintext__) can be performed by computing the CRC32C checksum of [DecryptResponse.plaintext](/php/docs/reference/cloud-kms/1.19.0/V1.DecryptResponse#_Google_Cloud_Kms_V1_DecryptResponse__getPlaintext__) and comparing your results to this field. Discard the response in case of non-matching checksum values, and perform a limited number of retries. A persistent mismatch may indicate an issue in your computation of the CRC32C checksum. Note: receiving this response message indicates that KeyManagementService is able to successfully decrypt the [ciphertext](/php/docs/reference/cloud-kms/1.19.0/V1.DecryptRequest#_Google_Cloud_Kms_V1_DecryptRequest__getCiphertext__). Note: This field is defined as int64 for reasons of compatibility across different languages. However, it is a non-negative integer, which will never exceed 2^32-1, and can be safely downconverted to uint32 in languages that support this type.

**Returns**

**Type**

**Description**

`int|string|null`

### setPlaintextCrc32C

Integrity verification field. A CRC32C checksum of the returned [DecryptResponse.plaintext](/php/docs/reference/cloud-kms/1.19.0/V1.DecryptResponse#_Google_Cloud_Kms_V1_DecryptResponse__getPlaintext__).

An integrity check of [DecryptResponse.plaintext](/php/docs/reference/cloud-kms/1.19.0/V1.DecryptResponse#_Google_Cloud_Kms_V1_DecryptResponse__getPlaintext__) can be performed by computing the CRC32C checksum of [DecryptResponse.plaintext](/php/docs/reference/cloud-kms/1.19.0/V1.DecryptResponse#_Google_Cloud_Kms_V1_DecryptResponse__getPlaintext__) and comparing your results to this field. Discard the response in case of non-matching checksum values, and perform a limited number of retries. A persistent mismatch may indicate an issue in your computation of the CRC32C checksum. Note: receiving this response message indicates that KeyManagementService is able to successfully decrypt the [ciphertext](/php/docs/reference/cloud-kms/1.19.0/V1.DecryptRequest#_Google_Cloud_Kms_V1_DecryptRequest__getCiphertext__). Note: This field is defined as int64 for reasons of compatibility across different languages. However, it is a non-negative integer, which will never exceed 2^32-1, and can be safely downconverted to uint32 in languages that support this type.

**Parameter**

**Name**

**Description**

`var`

`[Google\Protobuf\Int64Value](https://protobuf.dev/reference/php/api-docs/Google/Protobuf/Int64Value)`  

**Returns**

**Type**

**Description**

`$this`

### setPlaintextCrc32CValue

Sets the field by wrapping a primitive type in a Google\\Protobuf\\Int64Value object.

Integrity verification field. A CRC32C checksum of the returned [DecryptResponse.plaintext](/php/docs/reference/cloud-kms/1.19.0/V1.DecryptResponse#_Google_Cloud_Kms_V1_DecryptResponse__getPlaintext__). An integrity check of [DecryptResponse.plaintext](/php/docs/reference/cloud-kms/1.19.0/V1.DecryptResponse#_Google_Cloud_Kms_V1_DecryptResponse__getPlaintext__) can be performed by computing the CRC32C checksum of [DecryptResponse.plaintext](/php/docs/reference/cloud-kms/1.19.0/V1.DecryptResponse#_Google_Cloud_Kms_V1_DecryptResponse__getPlaintext__) and comparing your results to this field. Discard the response in case of non-matching checksum values, and perform a limited number of retries. A persistent mismatch may indicate an issue in your computation of the CRC32C checksum. Note: receiving this response message indicates that KeyManagementService is able to successfully decrypt the [ciphertext](/php/docs/reference/cloud-kms/1.19.0/V1.DecryptRequest#_Google_Cloud_Kms_V1_DecryptRequest__getCiphertext__). Note: This field is defined as int64 for reasons of compatibility across different languages. However, it is a non-negative integer, which will never exceed 2^32-1, and can be safely downconverted to uint32 in languages that support this type.

**Parameter**

**Name**

**Description**

`var`

`int|string|null`  

**Returns**

**Type**

**Description**

`$this`

### getUsedPrimary

Whether the Decryption was performed using the primary key version.

**Returns**

**Type**

**Description**

`bool`

### setUsedPrimary

Whether the Decryption was performed using the primary key version.

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

The [ProtectionLevel](/php/docs/reference/cloud-kms/1.19.0/V1.ProtectionLevel) of the [CryptoKeyVersion](/php/docs/reference/cloud-kms/1.19.0/V1.CryptoKeyVersion) used in decryption.

**Returns**

**Type**

**Description**

`int`

### setProtectionLevel

The [ProtectionLevel](/php/docs/reference/cloud-kms/1.19.0/V1.ProtectionLevel) of the [CryptoKeyVersion](/php/docs/reference/cloud-kms/1.19.0/V1.CryptoKeyVersion) used in decryption.

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
