Decrypts ciphertext into plaintext.

## Operating instructions

After you call the [Encrypt](/help/en/kms/key-management-service/developer-reference/encrypt-2#doc-api-Kms-Encrypt) or [GenerateDataKey](/help/en/kms/key-management-service/developer-reference/generatedatakey-2#doc-api-Kms-GenerateDataKey) operation to generate ciphertext, you can call the Decrypt operation to decrypt the ciphertext.

For more information about key specifications and encryption modes, see [Key types and specifications](/help/en/kms/key-management-service/user-guide/key-types-and-specifications).

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

The globally unique ID of the key. You can set the value to an alias that is bound to the key.

Algorithm

string

No

AES\_GCM

The decryption algorithm.

**Important**

The algorithm must be the same as the algorithm that is used for encryption.

Iv

bytes

No

Binary data

The initial vector.

This parameter is required only when Algorithm is set to AES\_GCM or AES\_CBC.

-   If Algorithm is set to AES\_CBC, the value of Iv must be 16 bytes in length.
    
-   If Algorithm is set to AES\_GCM, the value of Iv must be 12 bytes in length.
    

**Important**

The initial vector must be the same as the initial vector that is used for data encryption.

CiphertextBlob

bytes

Yes

Binary data

The ciphertext that you want to decrypt.

**Note**

When the Elliptic Curve Integrated Encryption Scheme (ECIES) algorithm is used, the ciphertext format follows the [SEC 1: Elliptic Curve Cryptography, Version 2.0](https://www.secg.org/) standards.

Aad

bytes

No

Binary data

The authentication data. The value can be up to 8,192 bytes in length.

This parameter is required only when Algorithm is set to AES\_GCM or SM4\_GCM and Aad is specified during data encryption.

**Important**

The value must be the same as that for data encryption.

PaddingMode

string

No

PKCS7\_PADDING

The padding mode.

This parameter is required only when Algorithm is set to AES\_CBC or AES\_ECB.

**Important**

The value must be the same as that for data encryption.

Valid values:

-   PKCS7\_PADDING: PKCS#7 padding is used. This is the default value. The length of the plaintext may not be an integer multiple of the cipher block size in bytes.
    
    If the input plaintext is L bytes in length, the system adds a padding string of K -(L mod K) bytes. Each padding string is K -(L mod K) bytes in length.
    
-   NO\_PADDING: Padding strings are not added to plaintext. The length of the plaintext must be an integer multiple of the cipher block size.
    

## Response parameters

**Parameter**

**Type**

**Example**

**Description**

Plaintext

bytes

Binary data

The plaintext.

KeyId

string

key-hzz62f1cb66fa42qo\*\*\*\*

The globally unique ID of the key. If you set KeyId to an alias of the key, the ID of the key to which the alias is bound is returned.

Algorithm

string

AES\_GCM

The decryption algorithm.

PaddingMode

string

PKCS7\_PADDING

The padding mode.

RequestId

string

475f1620-b9d3-4d35-b5c6-3fbdd941423d

The ID of the request, which is used to locate and troubleshoot issues.

## **Error codes**

**HTTP status code**

**Error code**

**Error message**

**Description**

500

InternalFailure

Internal Failure.

Possible causes:

-   The ciphertext does not meet the requirements.
    
    For example, during RSA decryption (RSAES\_OAEP\_SHA\_256), the digest algorithm SHA-1 is used when a public key is used to encrypt plaintext, or during AES\_ECB decryption, the length of ciphertext is not a multiple of the AES cipher block size in bytes (16 bytes).
    
-   The key specified by the request parameters is not the key that is used for encryption.
    

If the preceding issues are excluded, submit a [ticket](https://smartservice.console.alibabacloud.com/?/ticket/createIndex#/ticket/createIndex) to contact technical support.

For a list of error codes, see [Service error codes](/help/en/kms/key-management-service/developer-reference/common-error-codes-1).
