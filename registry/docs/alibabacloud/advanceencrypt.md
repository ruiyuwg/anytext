This topic describes how to encrypt plaintext into ciphertext.

## Operating instructions

You can call this operation only for symmetric keys in Key Management Service (KMS) instances of the software key management type. For more information about key specifications, encryption modes, and key versions, see [Key types and specifications](/help/en/kms/key-management-service/user-guide/key-types-and-specifications).

You can call the AdvanceEncrypt operation or the [Encrypt](/help/en/kms/key-management-service/developer-reference/encrypt-2) operation to encrypt plaintext into ciphertext. Take note of the following differences between the two operations:

-   AdvanceEncrypt: The primary version of a key is used to encrypt plaintext into ciphertext. You must call the [AdvanceDecrypt](/help/en/kms/key-management-service/developer-reference/advancedecrypt) operation to decrypt the ciphertext.
    
-   [Encrypt](/help/en/kms/key-management-service/developer-reference/encrypt-2): The initial version of a key is used to encrypt plaintext into ciphertext. You can call the [Decrypt](/help/en/kms/key-management-service/developer-reference/decrypt-2) operation or the [AdvanceDecrypt](/help/en/kms/key-management-service/developer-reference/advancedecrypt) operation to decrypt the ciphertext.
    

**Important**

If you enable automatic key rotation, you must call the AdvanceEncrypt operation to prevent the key rotation feature from becoming invalid. For more information about automatic key rotation, see [Configure key rotation](/help/en/kms/key-management-service/user-guide/configure-key-rotation).

## **Usage notes**

Make sure that the request body cannot exceed 3 MB in length after all request parameters are encoded by using Protocol Buffers. If the request body exceeds 3 MB, the server rejects the request and returns an HTTP 413 status code. We recommend that you limit the data size to 6 KB for encryption and decryption in a single operation. If the data exceeds the limit, we recommend that you use envelope encryption. For more information, see [Use envelope encryption](/help/en/kms/key-management-service/use-cases/use-envelope-encryption).

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

**Important**

The key must be a symmetric key in KMS instances of the software key management type.

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

The authentication data when the GCM mode is used to encrypt a data key.

If Algorithm is set to AES\_GCM, you can use this parameter based on your business requirements.

**Important**

If Aad is set, you must set the same parameter when you call the [AdvanceDecrypt](/help/en/kms/key-management-service/developer-reference/advancedecrypt) operation.

PaddingMode

string

No

PKCS7\_PADDING

The padding mode.

This parameter is required only when Algorithm is set to AES\_CBC or AES\_ECB.

Valid values:

-   PKCS7\_PADDING: PKCS#7 padding is used. This is the default value. The length of the plaintext or ciphertext may not be an integer multiple of the cipher block size in bytes.
    
    If the input plaintext or ciphertext is L bytes in length, the system adds a padding string of K -(L mod K) bytes. Each padding string is K -(L mod K) bytes in length.
    
-   NO\_PADDING: Padding strings are not added to plaintext. The length of the plaintext must be an integer multiple of the cipher block size in bytes.
    

## Response parameters

**Parameter**

**Type**

**Example**

**Description**

CiphertextBlob

bytes

Binary data

The ciphertext of the plaintext that is encrypted by using a key.

**Note**

CiphertextBlob contains information about KeyId, Algorithm, PaddingMode, and Iv. You need to only set CiphertextBlob when you call the [AdvanceDecrypt](/help/en/kms/key-management-service/developer-reference/advancedecrypt) operation to decrypt data.

Algorithm

string

AES\_GCM

The encryption algorithm.

KeyId

string

key-hzz62f1cb66fa42qo\*\*\*\*

The globally unique ID of the key. If you set KeyId in the request to an alias of the key, the ID of the key to which the alias is bound is returned.

KeyVersionId

string

key-hzz62f1cb66fa42qopd9s-17kedv\*\*\*\*

The version of the key. The primary version is used.

Iv

bytes

Binary data

The initial vector that is used to encrypt data.

A valid value is returned only when Algorithm is set to AES\_GCM or AES\_CBC. In other scenarios, an empty value is returned.

PaddingMode

string

PKCS7\_PADDING

The padding mode. This parameter returns a valid value only when Algorithm is set to AES\_CBC or AES\_ECB. In other scenarios, an empty value is returned.

RequestId

string

c0037a6d-7784-4ef2-a692-288fdefc7b9d

The ID of the request, which is used to locate and troubleshoot issues.

## Error codes

**HTTP status code**

**Error code**

**Error message**

**Description**

404

Forbidden.OnlySymmetricKeySupported

The key %s is not a symmetric key. The API only supports symmetric keys.

Only symmetric keys are supported.

**Note**

Asymmetric encryption is used for data encryption or key exchange across security domains. In this case, KMS is not used on one side.

For a list of error codes, see [Service error codes](/help/en/kms/key-management-service/developer-reference/common-error-codes-1).
