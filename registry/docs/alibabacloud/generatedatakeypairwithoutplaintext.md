Generates an asymmetric data key pair.

## Usage notes

**Important**

This operation is supported only for Key Management Service (KMS) instances of the software key management type and is not supported for KMS instances of the hardware key management type.

This operation generates a data key pair by using a random number generator, encrypts the data key pair by using the **initial version** of a symmetric key, and returns the plaintext public key and plaintext private key of the data key pair. The plaintext private key is not returned. You can use data key pairs to perform signature verification outside KMS.

Store the ciphertext private key (PrivateKeyCiphertextBlob), initial vector (IV), encryption algorithm (Algorithm), and authentication data (Aad) in a secure location. The saved information is used when you call the [Decrypt](/help/en/kms/key-management-service/developer-reference/decrypt-2) operation to decrypt the ciphertext private key.

KMS provides the following operations to generate data key pairs. The following table describes the differences between the operations.

**API**

**Scenario**

**Response data**

**Key version for encryption**

**Operation for decryption**

GenerateDataKey

Automatic rotation is not configured for keys, and you need to immediately obtain the plaintext private key.

Plaintext public key, plaintext private key, and ciphertext private key

The initial version of the key

[Decrypt](/help/en/kms/key-management-service/developer-reference/decrypt-2)

GenerateDataKeyPairWithoutPlaintext

Automatic rotation is not configured for keys, and you do not use the plaintext private key or require higher security.

Plaintext public key and plaintext private key

The initial version of the key

[Decrypt](/help/en/kms/key-management-service/developer-reference/decrypt-2)

AdvanceGenerateDataKeyPair

Automatic rotation is configured for keys, and you need to immediately obtain the plaintext private key.

**Note**

For more information about key rotation, see [Configure key rotation](/help/en/kms/key-management-service/user-guide/configure-key-rotation).

Plaintext public key, plaintext private key, and ciphertext private key

The primary version of the key

[AdvanceDecrypt](/help/en/kms/key-management-service/developer-reference/advancedecrypt)

AdvanceGenerateDataKeyPairWithoutPlaintext

Automatic rotation is configured for keys, and you do not use the plaintext private key or require higher security.

Plaintext public key and plaintext private key

The primary version of the key

[AdvanceDecrypt](/help/en/kms/key-management-service/developer-reference/advancedecrypt)

## **Precautions**

Each KMS instance can process only one request at a time for the GenerateDataKeyPair, GenerateDataKeyPairWithoutPlaintext, AdvanceGenerateDataKeyPair, and AdvanceGenerateDataKeyPairWithoutPlaintext operations. We recommend that you control concurrent requests. If the number of concurrent requests exceeds the limit, KMS returns a 429 error (Concurrency Limit Exceeded).

## Request parameters

**Parameter**

**Type**

**Required**

**Example**

**Description**

**KeyId**

string

Yes

key-hzz62f1cb66fa42qo\*\*\*\*

The globally unique ID of the key. You can set this parameter to an alias that is bound to the key.

**Note**

Only symmetric keys in KMS instances of the software key management type are supported.

**KeyPairSpec**

string

Yes

RSA\_2048

The type of the data key pair. Valid values:

-   RSA\_2048
    
-   RSA\_3072
    
-   RSA\_4096
    
-   EC\_P256
    
-   EC\_P256K
    

**Aad**

bytes

No

Binary data

The authentication data when you encrypt the data key pair in Galois/Counter Mode (GCM) mode.

**Important**

If you specify this parameter, you must specify the same parameter when you call the [Decrypt](/help/en/kms/key-management-service/developer-reference/decrypt-2) operation.

**KeyFormat**

string

Yes

PEM

The format of the data key pair. Valid values:

-   PEM
    
-   DER
    

## Response parameters

**Parameter**

**Type**

**Example**

**Description**

**KeyId**

string

key-hzz62f1cb66fa42qo\*\*\*\*

The globally unique ID of the key. If KeyId in the request is set to an alias, the globally unique ID of the key to which the alias is bound is returned.

**Iv**

bytes

Binary data

The initial vector that is used to encrypt the data key pair.

**Note**

When you call the [Decrypt](/help/en/kms/key-management-service/developer-reference/decrypt-2) operation to decrypt the data key pair, you must specify a valid value for Iv.

**KeyPairSpec**

string

RSA\_2048

The type of the data key pair.

**PrivateKeyCiphertextBlob**

bytes

Binary data

The ciphertext private key of the data key pair.

**PublicKey**

bytes

Binary data

The plaintext public key of the data key pair.

-   If KeyFormat is set to DER in the request parameters, the X.509 plaintext public key in the DER format is returned.
    
-   If KeyFormat is set to PEM in the request parameters, the X.509 plaintext public key in the PEM format is returned.
    

**Algorithm**

string

AES\_GCM

The encryption algorithm. Only AES\_GCM is supported.

**RequestId**

string

475f1620-b9d3-4d35-b5c6-3fbdd941423d

The ID of the request, which is used to locate and troubleshoot issues.

## Error codes

**HTTP status code**

**Error code**

**Error message**

**Description**

429

Rejected.Throttling

Concurrency Limit Exceeded.

The number of concurrent requests exceeds the limit.

For a list of error codes, see [Service error codes](/help/en/kms/key-management-service/developer-reference/common-error-codes-1).
