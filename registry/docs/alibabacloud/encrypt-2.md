Encrypts plaintext into ciphertext.

## Operating instructions

You can call the Encrypt operation or the [AdvanceEncrypt](/help/en/kms/key-management-service/developer-reference/advanceencrypt) operation to encrypt plaintext into ciphertext. The following section describes the differences between the two operations:

-   Encrypt: The initial version of a key is used for encryption. After encryption, you can call the [Decrypt](/help/en/kms/key-management-service/developer-reference/decrypt-2) operation or the [AdvanceDecrypt](/help/en/kms/key-management-service/developer-reference/advancedecrypt) operation to decrypt the encrypted data.
    
-   AdvanceEncrypt: The primary version of a key is used for encryption. After encryption, you must call the [AdvanceDecrypt](/help/en/kms/key-management-service/developer-reference/advancedecrypt) operation to decrypt the encrypted data. Only symmetric keys in Key Management Service (KMS) instances of the software key management type support this operation.
    

**Important**

If you use a symmetric key in KMS instances of the software key management type and enable automatic rotation for the key, you must call the AdvanceEncrypt operation to encrypt data to prevent the key rotation feature from becoming invalid. For more information about key rotation, see [Configure key rotation](/help/en/kms/key-management-service/user-guide/configure-key-rotation).

For more information about key specifications, encryption modes, and key versions, see [Key types and specifications](/help/en/kms/key-management-service/user-guide/key-types-and-specifications).

## **Usage notes**

Make sure that the request body cannot exceed 3 MB in length after all request parameters are encoded by using Protocol Buffers. If the request body exceeds 3 MB, the server rejects the request and returns an HTTP 413 status code. We recommend that you limit the data size to 6 KB for encryption and decryption by using symmetric keys and 1 KB for encryption and decryption by using asymmetric keys in a single operation. If the data exceeds the limits, we recommend that you use envelope encryption. For more information, see [Use envelope encryption](/help/en/kms/key-management-service/use-cases/use-envelope-encryption).

**Note**

High amount of data in a single encryption or decryption raises the risk of network failures, prolongs the time required for network transmission, and extends the duration required for KMS to encrypt and decrypt data.

## Request parameters

**Parameter**

**Type**

**Required**

**Example**

**Description**

KeyId

string

Yes

key-hzz62f1cb66fa42qo\*\*\*\*

The globally unique ID of the key. You can set this parameter to an alias that is bound to the key.

Plaintext

bytes

Yes

Binary data

The plaintext that you want to encrypt.

Algorithm

string

No

AES\_GCM

The encryption algorithm.

If you do not set this parameter, KMS uses the default value. For more information, see [Key types and specifications](/help/en/kms/key-management-service/user-guide/key-types-and-specifications).

Iv

bytes

No

Binary data

The initial vector that is used to encrypt data.

This parameter takes effect only when Algorithm is set to AES\_GCM or AES\_CBC.

-   If Algorithm is set to AES\_CBC, the value of Iv must be 16 bytes in length.
    
-   If Algorithm is set to AES\_GCM, the value of Iv must be 12 bytes in length.
    

If you do not set this parameter, KMS generates a random number.

**Important**

We recommend that you do not set this parameter.

Aad

binary

No

Binary data

The GCM encryption mode that is used to authenticate the data.

If the key is a symmetric key and Algorithm is set to AES\_GCM or SM4\_GCM, you can specify this parameter.

**Important**

If you specify this parameter, you must specify the parameter when you call the [Decrypt](/help/en/kms/key-management-service/developer-reference/decrypt-2#doc-api-Kms-Decrypt) operation.

PaddingMode

string

No

PKCS7\_PADDING

The padding mode.

This parameter is required only when Algorithm is set to AES\_CBC or AES\_ECB.

Valid values:

-   PKCS7\_PADDING: PKCS#7 padding is used. This is the default value. The length of the data plaintext or ciphertext may not be an integer multiple of the cipher block size in bytes.
    
    If the input plaintext or ciphertext is L bytes in length, the system adds a padding string of K -(L mod K) bytes. Each padding string is K -(L mod K) bytes in length.
    
-   NO\_PADDING: Padding strings are not added to plaintext. The length of the plaintext must be an integer multiple of the cipher block size.
    

## Response parameters

**Parameter**

**Type**

**Example**

**Description**

Iv

bytes

Binary data

The initial vector that is used to encrypt data.

This parameter returns a valid value only when Algorithm is set to AES\_GCM or AES\_CBC. In other scenarios, an empty value is returned.

CiphertextBlob

bytes

Binary data

The ciphertext of the data that is encrypted by using a key.

**Note**

When the Elliptic Curve Integrated Encryption Scheme (ECIES) algorithm is used, the returned data ciphertext format follows the [SEC 1: Elliptic Curve Cryptography, Version 2.0](https://www.secg.org/) standards.

KeyId

string

key-hzz62f1cb66fa42qo\*\*\*\*

The globally unique ID of the key. If you set KeyId in the request to an alias of the key, the ID of the key to which the alias is bound is returned.

Algorithm

string

AES\_GCM

The encryption algorithm.

PaddingMode

string

PKCS7\_PADDING

The padding mode. This parameter returns a valid value only when Algorithm is set to AES\_CBC or AES\_ECB. In other cases, an empty value is returned.

RequestId

string

475f1620-b9d3-4d35-b5c6-3fbdd941423d

The ID of the request, which is used to locate and troubleshoot issues.

## Error codes

For a list of error codes, see [Service error codes](/help/en/kms/key-management-service/developer-reference/common-error-codes-1).
