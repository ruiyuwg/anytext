You can call this operation to generate a data key and encrypt data by using envelope encryption of Key Management Service (KMS).

## Usage notes

### **Overview**

This operation generates a data key by using a random number generator, encrypts the data key by using the primary version of a KMS key, and then returns the plaintext data key and ciphertext data key. You can use the plaintext data key to encrypt data outside KMS. Plaintext specifies the plaintext data key. You must save the ciphertext data key and the authentication data (Aad) which are used to decrypt data.

**Important**

-   Only the Galois/Counter Mode (GCM) mode is supported when you encrypt a data key.
    
-   KMS uses a high-quality random number generator to generate a data key, which is independent of the KMS key material used to encrypt the data key.
    

### Differences between AdvanceGenerateDataKey and **GenerateDataKey**

You can call the AdvanceGenerateDataKey operation and the [GenerateDataKey](/help/en/kms/key-management-service/developer-reference/generatedatakey-2) operation to generate a data key. The following section describes the differences between the two operations:

-   AdvanceGenerateDataKey: The primary version of a key is used for encryption. After encryption, you must store the ciphertext data key (CiphertextBlob) and authentication data (Aad). You must call the [AdvanceDecrypt](/help/en/kms/key-management-service/developer-reference/advancedecrypt) operation to decrypt data.
    
-   [GenerateDataKey](/help/en/kms/key-management-service/developer-reference/generatedatakey-2): The initial version of a key is used for encryption. After encryption, you must store the ciphertext data key (CiphertextBlob), initial vector (Iv), encryption algorithm (Algorithm), and authentication data (Aad). You can call the [Decrypt](/help/en/kms/key-management-service/developer-reference/decrypt-2) or [AdvanceDecrypt](/help/en/kms/key-management-service/developer-reference/advancedecrypt) operation to decrypt data.
    

**Important**

If you enable automatic key rotation, you must call the AdvanceGenerateDataKey operation to generate a data key to prevent the key rotation feature from becoming invalid. For more information about key rotation, see [Configure key rotation](/help/en/kms/key-management-service/user-guide/configure-key-rotation).

### **Limits**

You can call this operation only for symmetric keys in KMS instances of the software key management type. For more information about key specifications and encryption modes, see [Key types and specifications](/help/en/kms/key-management-service/user-guide/key-types-and-specifications).

## Request parameters

**Parameter**

**Type**

**Required**

**Example**

**Description**

KeyId

string

Yes.

key-hzz62f1cb66fa42qo\*\*\*\*

The globally unique ID of the key. You can set the value to an alias that is bound to the key.

**Important**

The key must be a symmetric key in KMS instances of the software key management type.

NumberOfBytes

int

Yes

32

The length of the data key to be generated.

Aad

binary

No

Binary data

The authentication data when you encrypt a data key in GCM mode.

**Important**

If you specify this parameter, you must specify Aad when you call the [AdvanceDecrypt](/help/en/kms/key-management-service/developer-reference/advancedecrypt) operation.

## Response parameters

**Parameter**

**Type**

**Example**

**Description**

CiphertextBlob

bytes

Binary ciphertext

The ciphertext data key.

**Note**

CiphertextBlob contains information such as the key ID (KeyId), encryption algorithm (Algorithm), and initial vector (Iv) that is used to encrypt data. When you call the [AdvanceDecrypt](/help/en/kms/key-management-service/developer-reference/advancedecrypt) operation to decrypt data, you need to only configure CiphertextBlob and Aad.

Plaintext

bytes

Binary plaintext

The plaintext data key.

KeyId

string

key-hzz62f1cb66fa42qo\*\*\*\*

The globally unique ID of the key. If KeyId in the request is set to an alias, the globally unique ID of the key to which the alias is bound is returned in the response.

KeyVersionId

string

key-hzz62f1cb66fa42qo\*\*\*\*-17kedv\*\*\*\*

The ID of the key version that is used to encrypt the data key.

Algorithm

string

AES\_GCM

The encryption algorithm.

Iv

bytes

Binary data

The initial vector that is used to encrypt the data key.

RequestId

string

c0065a6d-7784-4ef2-a692-288fdcbc7b9d

The request ID.

## **Error codes**

**HTTP status code**

**Error code**

**Error message**

**Description**

404

Forbidden.OnlySymmetricKeySupported

The key %s is not a symmetric key. The API only supports symmetric keys.

Only symmetric keys are supported.

For a list of error codes, see [Service error codes](/help/en/kms/key-management-service/developer-reference/common-error-codes-1).
