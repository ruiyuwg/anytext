List objects in a bucket by count, prefix, or alphabetical range, with support for paging through large result sets and URL-encoding object names that contain special characters.

## Prerequisites

Before you begin, ensure that you have:

-   An initialized `OSSClient` instance. For details, see [Initialization](/help/en/oss/developer-reference/initialization-1#88938d5b6cvib).
    

## List a specific number of objects

Set `MaxKeys` to control how many objects are returned in a single call. The following example returns up to 20 objects from `examplebucket`.

```
// Specify the bucket name.
ListObjectsRequest request = new ListObjectsRequest("examplebucket");
// Set the maximum number of objects to return. Default: 100. Maximum: 1,000.
request.setMaxKeys(20);

 oss.asyncListObjects(request, new OSSCompletedCallback<ListObjectsRequest, ListObjectsResult>() {
    @Override
    public void onSuccess(ListObjectsRequest request, ListObjectsResult result) {
        for (OSSObjectSummary objectSummary : result.getObjectSummaries()) {
            Log.i("ListObjects", objectSummary.getKey());
        }
    }

    @Override
    public void onFailure(ListObjectsRequest request, ClientException clientException, ServiceException serviceException) {
        if (clientException != null) {
            // Client-side error, such as a network failure.
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

## List objects by prefix

Set a prefix to filter objects whose names start with the specified string. The following example returns objects whose names start with `file` in `examplebucket`.

```
// Specify the bucket name.
ListObjectsRequest request = new ListObjectsRequest("examplebucket");
// Set the prefix. Returns all objects whose names start with "file",
// for example, file1.txt and file-archive.zip.
request.setPrefix("file");

oss.asyncListObjects(request, new OSSCompletedCallback<ListObjectsRequest, ListObjectsResult>() {
    @Override
    public void onSuccess(ListObjectsRequest request, ListObjectsResult result) {
        for (OSSObjectSummary objectSummary : result.getObjectSummaries()) {
            Log.i("ListObjects", objectSummary.getKey());
        }
    }

    @Override
    public void onFailure(ListObjectsRequest request, ClientException clientException, ServiceException serviceException) {
        if (clientException != null) {
            clientException.printStackTrace();
        }
        if (serviceException != null) {
            Log.e("ErrorCode", serviceException.getErrorCode());
            Log.e("RequestId", serviceException.getRequestId());
            Log.e("HostId", serviceException.getHostId());
            Log.e("RawMessage", serviceException.getRawMessage());
        }
    }
});
```

## List objects after a marker

Set a marker to start the listing from a specific position. The list operation returns objects whose names are alphabetically after the marker — the marker itself is not included. If the marker does not exist in the bucket, the listing starts from the next object in alphabetical order.

The following example lists objects that come after `exampleobject.txt` in `examplebucket`.

```
// Specify the bucket name.
ListObjectsRequest request = new ListObjectsRequest("examplebucket");
// Set the marker. The list starts from the first object alphabetically after "exampleobject.txt".
request.setMarker("exampleobject.txt");

oss.asyncListObjects(request, new OSSCompletedCallback<ListObjectsRequest, ListObjectsResult>() {
    @Override
    public void onSuccess(ListObjectsRequest request, ListObjectsResult result) {
        for (OSSObjectSummary objectSummary : result.getObjectSummaries()) {
            Log.i("ListObjects", objectSummary.getKey());
        }
    }

    @Override
    public void onFailure(ListObjectsRequest request, ClientException clientException, ServiceException serviceException) {
        if (clientException != null) {
            clientException.printStackTrace();
        }
        if (serviceException != null) {
            Log.e("ErrorCode", serviceException.getErrorCode());
            Log.e("RequestId", serviceException.getRequestId());
            Log.e("HostId", serviceException.getHostId());
            Log.e("RawMessage", serviceException.getRawMessage());
        }
    }
});
```

## List all objects by page

To page through a full bucket, use `isTruncated` and `NextMarker` together: if `isTruncated()` returns `true`, the result was cut off and `getNextMarker()` gives you the starting point for the next page. When `isTruncated()` returns `false`, you have reached the last page.

The following example lists all objects in `examplebucket` with up to 20 objects per page.

```
private String marker = null;
private boolean isCompleted = false;

// Page through all objects.
public void getAllObject() {
    do {
        OSSAsyncTask task = getObjectList();
        // Block the current thread until the page request completes,
        // so that NextMarker is available before the next iteration.
        // Adjust this blocking strategy to suit your app's threading model.
        task.waitUntilFinished();
    } while (!isCompleted);
}

// Fetch one page of objects.
public OSSAsyncTask getObjectList() {
    // Specify the bucket name.
    ListObjectsRequest request = new ListObjectsRequest("examplebucket");
    // Set the maximum objects per page. Default: 100. Maximum: 1,000.
    request.setMaxKeys(20);
    request.setMarker(marker);

    OSSAsyncTask task = oss.asyncListObjects(request, new OSSCompletedCallback<ListObjectsRequest, ListObjectsResult>() {
        @Override
        public void onSuccess(ListObjectsRequest request, ListObjectsResult result) {
            for (OSSObjectSummary objectSummary : result.getObjectSummaries()) {
                Log.i("ListObjects", objectSummary.getKey());
            }
            if (!result.isTruncated()) {
                // No more pages.
                isCompleted = true;
                return;
            }
            // Use NextMarker as the marker for the next page.
            marker = result.getNextMarker();
        }

        @Override
        public void onFailure(ListObjectsRequest request, ClientException clientException, ServiceException serviceException) {
            isCompleted = true;
            if (clientException != null) {
                clientException.printStackTrace();
            }
            if (serviceException != null) {
                Log.e("ErrorCode", serviceException.getErrorCode());
                Log.e("RequestId", serviceException.getRequestId());
                Log.e("HostId", serviceException.getHostId());
                Log.e("RawMessage", serviceException.getRawMessage());
            }
        }
    });
    return task;
}
```

## List objects by prefix, by page

Combine prefix filtering with paging to iterate through a large filtered result set. The following example lists objects whose names start with `file` in `examplebucket`, 20 per page.

```
private String marker = null;
private boolean isCompleted = false;

// Page through all objects with the "file" prefix.
public void getAllObject() {
    do {
        OSSAsyncTask task = getObjectList();
        task.waitUntilFinished();
    } while (!isCompleted);
}

// Fetch one page of objects.
public OSSAsyncTask getObjectList() {
    // Specify the bucket name.
    ListObjectsRequest request = new ListObjectsRequest("examplebucket");
    // Set the maximum objects per page. Default: 100. Maximum: 1,000.
    request.setMaxKeys(20);
    // Set the prefix to filter objects by name.
    request.setPrefix("file");
    request.setMarker(marker);

    OSSAsyncTask task = oss.asyncListObjects(request, new OSSCompletedCallback<ListObjectsRequest, ListObjectsResult>() {
        @Override
        public void onSuccess(ListObjectsRequest request, ListObjectsResult result) {
            for (OSSObjectSummary objectSummary : result.getObjectSummaries()) {
                Log.i("ListObjects", objectSummary.getKey());
            }
            if (!result.isTruncated()) {
                // No more pages.
                isCompleted = true;
                return;
            }
            // Use NextMarker as the marker for the next page.
            marker = result.getNextMarker();
        }

        @Override
        public void onFailure(ListObjectsRequest request, ClientException clientException, ServiceException serviceException) {
            isCompleted = true;
            if (clientException != null) {
                clientException.printStackTrace();
            }
            if (serviceException != null) {
                Log.e("ErrorCode", serviceException.getErrorCode());
                Log.e("RequestId", serviceException.getRequestId());
                Log.e("HostId", serviceException.getHostId());
                Log.e("RawMessage", serviceException.getRawMessage());
            }
        }
    });
    return task;
}
```

## List objects with special characters in their names

OSS supports URL encoding for object names that contain special characters. Set the encoding type to `"url"` before making the request, then decode each returned object name with `URLDecoder` before using it.

Object names that require URL encoding include those containing:

-   Single quotation marks (`'`)
    
-   Double quotation marks (`"`)
    
-   Ampersands (`&`)
    
-   Angle brackets (`<>`)
    
-   Chinese characters
    

The following example lists objects with special characters in `examplebucket`.

```
// Specify the bucket name.
ListObjectsRequest request = new ListObjectsRequest("examplebucket");
// Enable URL encoding for object names.
request.setEncodingType("url");

oss.asyncListObjects(request, new OSSCompletedCallback<ListObjectsRequest, ListObjectsResult>() {
    @Override
    public void onSuccess(ListObjectsRequest request, ListObjectsResult result) {
        for (OSSObjectSummary objectSummary : result.getObjectSummaries()) {
            Log.i("ListObjects", URLDecoder.decode(objectSummary.getKey(), "UTF-8"));
        }
    }

    @Override
    public void onFailure(ListObjectsRequest request, ClientException clientException, ServiceException serviceException) {
        if (clientException != null) {
            clientException.printStackTrace();
        }
        if (serviceException != null) {
            Log.e("ErrorCode", serviceException.getErrorCode());
            Log.e("RequestId", serviceException.getRequestId());
            Log.e("HostId", serviceException.getHostId());
            Log.e("RawMessage", serviceException.getRawMessage());
        }
    }
});
```

> Only URL encoding is supported in OSS for object names with special characters.

## Parameters

All examples use `oss.asyncListObjects()` with a `ListObjectsRequest`. The table below summarizes the available request parameters.

**Parameter**

**Method**

**Type**

**Description**

**Default**

**Maximum**

Bucket name

`new ListObjectsRequest(name)`

String

The name of the bucket to list.

—

—

MaxKeys

`setMaxKeys(int)`

int

Maximum number of objects to return per request.

100

1,000

Prefix

`setPrefix(String)`

String

Filters results to objects whose names start with this value.

—

—

Marker

`setMarker(String)`

String

Returns objects alphabetically after this value. Use `getNextMarker()` from the previous response to page forward.

—

—

Encoding type

`setEncodingType(String)`

String

Encoding applied to object names in the response. Set to `"url"` when object names contain special characters.

—

—

## What's next

-   For the underlying API reference, see [GetBucket (ListObjects)](/help/en/oss/developer-reference/listobjects#reference-iwr-xlv-tdb) and [ListObjectsV2 (GetBucketV2)](/help/en/oss/developer-reference/listobjects-v2#reference-2520881).
    
-   For OSSClient initialization options, see [Initialization](/help/en/oss/developer-reference/initialization-1#88938d5b6cvib).
