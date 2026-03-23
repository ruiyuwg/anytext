Use `asyncGetObject` to download an object from OSS to a local file on an Android device. The method is non-blocking: the OSS SDK calls your `OSSCompletedCallback` when the download succeeds or fails.

## Prerequisites

Before you begin, ensure that you have:

-   An initialized `OSSClient` instance. See [Initialization](/help/en/oss/developer-reference/initialization-1#88938d5b6cvib) for setup options including custom domain and Security Token Service (STS).
    
-   The required permissions granted to your RAM user or RAM role. See [Permissions](#section-1bb04322).
    

## Permissions

Alibaba Cloud accounts have full permissions by default. RAM users and RAM roles have no permissions by default — an Alibaba Cloud account or account administrator must grant them via [RAM Policy](/help/en/oss/ram-policy-overview/) or [bucket policy](/help/en/oss/user-guide/oss-bucket-policy/).

**Action**

**When required**

`oss:GetObject`

Always required to download an object

`oss:GetObjectVersion`

Required when downloading a specific object version using `versionId`

`kms:Decrypt`

Required when the object metadata contains `X-Oss-Server-Side-Encryption: KMS`

## Download an object to a local file

The following example constructs a `GetObjectRequest`, issues an async download, reads the response stream into a buffer, and writes the buffer to a local file.

```
// Specify the bucket name and the full path of the object in OSS.
// Do not include the bucket name in the object path.
GetObjectRequest get = new GetObjectRequest("examplebucket", "exampledir/exampleobject.txt");

oss.asyncGetObject(get, new OSSCompletedCallback<GetObjectRequest, GetObjectResult>() {
    @Override
    public void onSuccess(GetObjectRequest request, GetObjectResult result) {
        long length = result.getContentLength();
        if (length > 0) {
            byte[] buffer = new byte[(int) length];
            int readCount = 0;
            while (readCount < length) {
                try {
                    readCount += result.getObjectContent().read(buffer, readCount, (int) length - readCount);
                } catch (Exception e) {
                    OSSLog.logInfo(e.toString());
                }
            }
            // Specify the full path of the downloaded object. Example: D:\\localpath\\exampleobject.jpg.
            try {
                FileOutputStream fout = new FileOutputStream("download_filePath");
                fout.write(buffer);
                fout.close();
            } catch (Exception e) {
                OSSLog.logInfo(e.toString());
            }
        }
    }

    @Override
    public void onFailure(GetObjectRequest request, ClientException clientException,
                          ServiceException serviceException) {

    }
});
```

Replace the following placeholders with actual values:

**Placeholder**

**Description**

**Example**

`examplebucket`

The bucket name

`my-android-bucket`

`exampledir/exampleobject.txt`

The full path of the object in OSS

`images/photo.jpg`

## References

-   For the complete sample code, see [OSSGetObjectTest.java](https://github.com/aliyun/aliyun-oss-android-sdk/blob/master/oss-android-sdk/src/androidTest/java/com/alibaba/sdk/android/OSSGetObjectTest.java) on GitHub.
    
-   For the GetObject API reference, see [GetObject](/help/en/oss/developer-reference/getobject#reference-ccf-rgd-5db).
    
-   For OSSClient initialization options, see [Initialization](/help/en/oss/developer-reference/initialization-1#88938d5b6cvib).
