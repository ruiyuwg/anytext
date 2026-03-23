This topic describes the common error codes that are returned for the API requests of Key Management Service (KMS).

If an error occurs when you send an API request to Key Management Service (KMS), KMS returns error information. The error information includes an HTTP status code and error details in the response body. The error details are encoded in the Protocol Buffers format. The following example shows the error information definition:

```
message Error {
     int32 StatusCode = 1;
     string ErrorCode = 2;
     string ErrorMessage = 3;
     string RequestId = 4;
}
```

The error information that is returned by KMS is applicable to most operations. However, some error information is specific to some operations. The following table describes the common error codes that are returned when operations fail to be called. The error codes that are specific to some operations are described in the corresponding API topics.

**HTTP status code**

**Error code**

**Error message**

**Description**

400

InvalidApiName

The ApiName "<apiname>" is invalid.

The API name is invalid.

400

InvalidApiVersion

The ApiVersion "<apiversion value>" is invalid.

The x-kms-apiversion header field does not exist in the request header. Check the request header and make sure that the x-kms-apiversion header field exists.

400

InvalidParam

The Param Date is invalid.

The value of the Date header field in the request header does not comply with [RFC 1123](https://www.ietf.org/rfc/rfc1123.txt). Check the request header and make sure that the value of the Date header field complies with [RFC 1123](https://www.ietf.org/rfc/rfc1123.txt).

400

InvalidParam

The Param x-kms-signaturemethod is invalid.

The x-kms-signaturemethod header field does not exist in the HTTP request header. Check the request header and make sure that the x-kms-signaturemethod header field exists.

400

InvalidParam

The Param x-kms-signaturemethod is invalid. message:"<signaturemethod value>".

The signature method specified by the x-kms-signaturemethod header field is not supported. Check the request header and make sure that the specified signature method is supported.

400

MissingParameter

Parameter x-kms-acccesskeyid does not exist in http header or body.

No AccessKey IDs exist in the Authorization header field. Check the request header and make sure that an AccessKey ID exists in the Authorization header field.

If you use Alibaba Cloud SDKs, make sure that you use **KMS Instance SDK**.

400

RequestTimeTooSkewed

Request time exceeds server time more than 15 minutes.

The request is initiated 15 minutes earlier or later than the current server time. Check your server time.

400

InvalidParameter

The specified parameter is not valid.

The specified parameter is invalid.

400

UnsupportedOperation

Rejected.UnsupportedOperation

For more information, see [Application access FAQ](/help/en/kms/key-management-service/developer-reference/application-access-faq#3a05f43058h2j).

401

SignatureNotMatch

Signature is not matched.

The signature calculated by the client does not match the signature calculated by the server. Use a valid client key and try again.

403

Forbidden.NoPermission

This operation for "<parameter name>" is forbidden by permission system.

You are not authorized to perform the operation. Check the permission policies of the application access point (AAP). For more information, see [Create an AAP](/help/en/kms/key-management-service/user-guide/create-an-aap).

404

Forbidden.KeyNotFound

The key Key ID or Alias does not exist in the system.

The key does not exist.

404

Forbidden.KeyNotFound

The key Key ID or Alias does not exist in the key store "<parameter name>".

The key does not exist.

404

Forbidden.KeyNotFound

The specified key does not exist.

The key does not exist.

404

Unauthorized

The AccessKey ID "<accessKeyId>" does not exist in our records.

The AccessKey ID does not exist. The AccessKey ID is the value of KeyId in the AAP. Check your client key. For more information, see [Create an AAP](/help/en/kms/key-management-service/user-guide/create-an-aap).

409

Rejected.PendingDeletion

The request was rejected because the key state is PendingDeletion.

The key is in the Pending Deletion state.

409

Rejected.Disabled

The request was rejected because the key state is Disabled.

The key is disabled.

409

Rejected.PendingImport

The request was rejected because the key state is PendingImport.

The key is in the Pending Import state.

413

None.

None.

After all request parameters are encoded by using Protocol Buffers, the request body exceeds 3 MB in length.

-   Encryption and decryption: We recommend that you limit the data size to 6 KB for encryption and decryption by using symmetric keys and 1 KB for encryption and decryption by using asymmetric keys in a single operation. If the data exceeds the limits, we recommend that you use envelope encryption.
    
-   Signing and verification: If the size of a message to sign is large, we recommend that you locally generate a digest of the message and then call the Sign or Verify operation for signing and verification.
    

415

InvalidContentType

Content-Type "<type>" is unsupported.

The value of the Content-Type header field is invalid.

500

InternalFailure

Internal Failure.

An internal error occurred. Contact Alibaba Cloud technical support. For more information, see [Contact us](/help/en/kms/key-management-service/support/contact-us-1).

503

ServiceUnavailableTemporary

Service Unavailable Temporary.

The service is unavailable. Try again later.
