Use the OSS SDK for Android to retrieve the access control list (ACL) of an object, including its permission type and ownership information.

> The OSS SDK for Android supports reading object ACLs only. Setting object ACLs is not supported through this SDK.

## Prerequisites

Before you begin, ensure that you have:

-   An initialized `OSSClient` instance, created using methods such as a custom domain name or Security Token Service (STS). For setup instructions, see [Initialization](/help/en/oss/developer-reference/initialization-1#88938d5b6cvib)
    
-   An object stored in a bucket
    

## Object ACL types

OSS supports three ACL types for objects:

**ACL**

**Description**

Private

Only the object owner and authorized users have read and write permissions.

Public-read

The object owner and authorized users have read and write permissions. All other users have read-only access. Use with caution.

Public-read-write

All users have read and write permissions. Use with caution.

## Get the ACL of an object

Call `asyncGetObjectACL` to retrieve the ACL, owner name, and owner ID of an object. The method is asynchronous and delivers results through the `OSSCompletedCallback` interface.

```
// Specify the bucket name and the full object path.
// The full path must not include the bucket name.
// Example: examplebucket and exampledir/exampleobject.txt
GetObjectACLRequest request = new GetObjectACLRequest("examplebucket", "exampledir/exampleobject.txt");

oss.asyncGetObjectACL(request, new OSSCompletedCallback<GetObjectACLRequest, GetObjectACLResult>() {
    @Override
    public void onSuccess(GetObjectACLRequest request, GetObjectACLResult result) {
        Log.d("GetObjectACL", "Success!");
        Log.d("ObjectAcl", result.getObjectACL());
        Log.d("Owner", result.getObjectOwner());
        Log.d("ID", result.getObjectOwnerID());
    }

    @Override
    public void onFailure(GetObjectACLRequest request, ClientException clientException, ServiceException serviceException) {
        if (clientException != null) {
            // Client-side error, such as a network issue.
            clientException.printStackTrace();
        }
        if (serviceException != null) {
            // Server-side error.
            Log.e("ErrorCode", serviceException.getErrorCode());
            Log.e("RequestId", serviceException.getRequestId());
            Log.e("HostId", serviceException.getHostId());
            Log.e("RawMessage", serviceException.getRawMessage());
        }
    }
});
```

On success, `GetObjectACLResult` provides the following:

**Method**

**Description**

`getObjectACL()`

Returns the ACL type: `private`, `public-read`, or `public-read-write`

`getObjectOwner()`

Returns the display name of the object owner

`getObjectOwnerID()`

Returns the ID of the object owner

On failure, the callback receives one of two exception types:

-   `ClientException` — a client-side error, such as a network connectivity issue
    
-   `ServiceException` — a server-side error, including an error code, request ID, host ID, and raw error message
    

## Next steps

-   To learn about the underlying API, see [GetObjectACL](/help/en/oss/developer-reference/getobjectacl#reference-lzc-24w-wdb)
    
-   To review OSSClient setup options, see [Initialization](/help/en/oss/developer-reference/initialization-1#88938d5b6cvib)
