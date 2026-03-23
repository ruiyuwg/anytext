Signs data using an asymmetric key.

## Operating instructions

For more information about key specifications and encryption modes, see [Key types and specifications](/help/en/kms/key-management-service/user-guide/key-types-and-specifications).

## **Usage notes**

After all request parameters are encoded by using Protocol Buffers, the request body cannot exceed 3 MB in length. If the request body exceeds 3 MB, the server rejects the request and returns an HTTP 413 status code. If the size of a message to sign is large, we recommend that you locally generate a digest of the message and then call the Sign or Verify operation for signing and verification.

## Request parameters

**Parameter**

**Type**

**Required**

**Example**

**Description**

KeyId

string

Yes

1234abcd-12ab-34cd-56ef-12345678\*\*\*\*

The globally unique ID of the key. You can also set this parameter to an alias that is bound to the key.

Algorithm

string

Yes

RSAES\_OAEP\_SHA\_256

The signature algorithm. Valid values:

-   RSA\_PSS\_SHA\_256
    
-   RSA\_PKCS1\_SHA\_256
    
-   ECDSA\_SHA\_256
    
-   SM2DSA
    

MessageType

string

Yes

RAW

The message type. Valid values:

-   RAW: the raw data. This is the default value.
    
-   DIGEST: the message digest of the raw data. Key Management Service (KMS) does not process the message digest of the raw data. KMS directly uses a private key to sign data.
    

Message

bytes

Yes

Binary data

The message to sign.

-   The MessageType parameter is set to RAW: The hash algorithm that is specified by the Algorithm parameter is used to generate a digest for the raw data, and the digest is signed.
    
-   The MessageType parameter is set to DIGEST: The digest can be up to 32 bytes in length.
    

## Response parameters

**Parameter**

**Type**

**Example**

**Description**

Signature

bytes

Binary data

The calculated signature value.

KeyId

string

1234abcd-12ab-34cd-56ef-12345678\*\*\*\*

The globally unique ID of the key. If the KeyId parameter is set to an alias of the key, the ID of the key to which the alias is bound is returned.

Algorithm

string

RSAES\_OAEP\_SHA\_256

The signing algorithm.

MessageType

string

RAW

The type of the message.

RequestId

string

475f1620-b9d3-4d35-b5c6-3fbdd941423d

The request ID.

## Error codes

For a list of error codes, see [Service error codes](/help/en/kms/key-management-service/developer-reference/common-error-codes-1).
