Generates a data key.

## Usage notes

### **Overview**

This operation generates a data key by using a random number generator, encrypts the data key by using the initial version of a Key Management Service (KMS) key, and then returns the plaintext data key and ciphertext data key. You can use the plaintext data key to encrypt data outside KMS. Plaintext specifies the plaintext data key. After encryption, you must store the ciphertext data key (CiphertextBlob), initial vector (Iv), encryption algorithm (Algorithm), and authentication data (Aad), which will be used to decrypt data.

For more information about key specifications and encryption modes, see [Key types and specifications](/help/en/kms/key-management-service/user-guide/key-types-and-specifications).

**Important**

-   Only the Galois/Counter Mode (GCM) mode is supported when you encrypt a data key.
    
-   KMS uses a high-quality random number generator to generate a data key, which is independent of the KMS key material used to encrypt the data key.
    

### **Difference between GenerateDataKey and** AdvanceGenerateDataKey

You can call the [AdvanceGenerateDataKey](/help/en/kms/key-management-service/developer-reference/advancegeneratedatakey) operation and the GenerateDataKey operation to generate a data key. The following section describes the differences between the two operations:

-   GenerateDataKey: The initial version of a key is used for encryption. After encryption, you must store the ciphertext data key (CiphertextBlob), initial vector (Iv), encryption algorithm (Algorithm), and authentication data (Aad). You can call the [Decrypt](/help/en/kms/key-management-service/developer-reference/decrypt-2) or [AdvanceDecrypt](/help/en/kms/key-management-service/developer-reference/advancedecrypt) operation to decrypt data.
    
-   AdvanceGenerateDataKey: You can call this operation only for a symmetric key in KMS instances of the software key management type. The primary version of a key is used for encryption. After encryption, you must store the ciphertext data key (CiphertextBlob) and authentication data (Aad). You must call the [AdvanceDecrypt](/help/en/kms/key-management-service/developer-reference/advancedecrypt) operation to decrypt data.
    
    **Important**
    
    If you use a symmetric key in KMS instances of the software key management type and enable automatic rotation for the key, you must call the AdvanceGenerateDataKey operation to generate a data key to prevent the key rotation feature from becoming invalid. For more information about automatic key rotation, see [Configure key rotation](/help/en/kms/key-management-service/user-guide/configure-key-rotation).
    

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

The globally unique ID of the key. You can also set the value to an alias that is bound to the key.

NumberOfBytes

int

Yes

32

The length of the data key to be generated.

Aad

binary

No

Binary data

The Galois/Counter Mode (GCM) mode that is used to authenticate the data when the data key is encrypted.

**Important**

Only the GCM mode is supported when you encrypt a data key. If this parameter is specified, you must specify the same parameter when you call the [Decrypt](/help/en/kms/key-management-service/developer-reference/decrypt-2#doc-api-Kms-Decrypt) operation.

## Response parameters

**Parameter**

**Type**

**Example**

**Description**

KeyId

string

key-hzz62f1cb66fa42qo\*\*\*\*

The globally unique ID of the key. If KeyId in the request is set to an alias, the globally unique ID of the key to which the alias is bound is returned in the response.

Iv

bytes

Binary data

The initial vector that is used when the data key is encrypted.

**Note**

When you call the [Decrypt](/help/en/kms/key-management-service/developer-reference/decrypt-2#doc-api-Kms-Decrypt) operation to decrypt the data key, you must specify a valid value for Iv to decrypt the data key.

Plaintext

bytes

Binary plaintext

The plaintext data key.

CiphertextBlob

bytes

Binary ciphertext

The ciphertext data key.

Algorithm

string

AES\_GCM

The encryption algorithm.

RequestId

string

475f1620-b9d3-4d35-b5c6-3fbdd941423d

The request ID.

## Error codes

For a list of error codes, see [Service error codes](/help/en/kms/key-management-service/developer-reference/common-error-codes-1).
