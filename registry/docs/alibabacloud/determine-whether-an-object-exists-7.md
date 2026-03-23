The OSS SDK for Android provides a synchronous API to check whether a specific object exists in a bucket.

## Prerequisites

Before you begin, make sure that you have:

-   The `oss:GetObject` permission. For more information, see [Attach a custom policy to a RAM user](/help/en/oss/user-guide/common-examples-of-ram-policies#section-ucu-jv0-zip).
    
-   An initialized `OSSClient` instance. For more information, see [Initialization (Android SDK)](/help/en/oss/developer-reference/initialization-1#88938d5b6cvib).
    

## Check whether an object exists

**Method signature**

```
public boolean doesObjectExist(String bucketName, String key) throws ClientException, ServiceException;
```

**Parameters**

**Parameter**

**Type**

**Description**

`bucketName`

String

The name of the bucket.

`key`

String

The full path of the object, excluding the bucket name. Example: `exampledir/exampleobject.txt`.

**Sample code**

```
try {
    // Specify the bucket name and the full path of the object.
    // In this example, the bucket is examplebucket and the object path is exampledir/exampleobject.txt.
    if (oss.doesObjectExist("examplebucket", "exampledir/exampleobject.txt")) {
        Log.d("doesObjectExist", "object exist.");
    } else {
        Log.d("doesObjectExist", "object does not exist.");
    }
} catch (ClientException e) {
    // Handle client-side exceptions, such as network exceptions.
    e.printStackTrace();
} catch (ServiceException e) {
    // Handle server-side exceptions.
    Log.e("ErrorCode", e.getErrorCode());
    Log.e("RequestId", e.getRequestId());
    Log.e("HostId", e.getHostId());
    Log.e("RawMessage", e.getRawMessage());
}
```

**Return value**

**Outcome**

**Result**

Object exists

Returns `true`

Object does not exist

Returns `false`

Request fails

Throws `ClientException` (client-side errors, such as network exceptions) or `ServiceException` (server-side errors)

## What's next

-   To initialize an `OSSClient` instance, see [Initialization (Android SDK)](/help/en/oss/developer-reference/initialization-1#88938d5b6cvib).
    
-   To configure RAM policies for permission management, see [Attach a custom policy to a RAM user](/help/en/oss/user-guide/common-examples-of-ram-policies#section-ucu-jv0-zip).
