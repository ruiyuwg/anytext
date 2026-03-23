Object Storage Service (OSS) provides multiple methods for you to upload objects. An upload of an object that is larger than 5 GB may be slow or fail. To improve the efficiency of uploading a large object, you can use methods such as multipart upload, resumable upload, ossbrowser, and ossutil.

## Upload methods

OSS allows you to upload an object that ranges from 0 bytes to 48.8 TB in size to a bucket. You can use different upload methods to improve upload efficiency when you upload large objects or multiple objects at a time. These methods are helpful in the following scenarios:

-   The object that you want to upload is larger than 5 GB in size and cannot be uploaded by using the OSS console, simple upload, form upload, and append upload.
    
-   The objects you want to upload are smaller than 5 GB in size, but intermittent connection timeouts or connections occur due to poor network performance.
    

**Method 1: Multipart upload or resumable upload**

Multipart upload and resumable upload are suitable for the following scenarios:

-   Large objects: The objects that you want to upload are larger than 5 GB in size.
    
-   Streaming download: You want to start uploading objects in scenarios where the sizes of the objects are still uncertain, for example, in cloud video recording applications for video surveillance.
    
-   Poor network connection: Resumable upload is recommended when you have poor network performance. Resumable upload allows you to upload only parts that have failed to be uploaded. This upload method is more efficient in scenarios where uploads are frequently interrupted because you do not need to re-upload parts that have been uploaded before the interruption.
    
-   Upload acceleration: When the object that you want to upload is large, you can upload parts of the object in parallel to speed up the upload process.
    

For more information, see [Multipart upload](/help/en/oss/user-guide/multipart-upload) and [Resumable upload](/help/en/oss/user-guide/resumable-upload).

**Method 1: ossbrowser**

Take note of the following items when you use ossbrowser to upload objects:

-   You can use a Security Token Service (STS) token to log on to ossbrowser.
    
-   To use the simple policy feature, you must log on to ossbrowser by using the AccessKey pair of a RAM user who has the RAM configuration permissions.
    
-   When you upload a large number of objects, you can increase the number of upload tasks to reduce the time required to upload the objects.
    
-   By default, ossbrowser uses multipart upload and resumable upload to upload objects. The size of the object that you want to upload cannot exceed 48.8 TB.
    

For more information, see [Use ossbrowser](/help/en/oss/developer-reference/use-ossbrowser).

**Method 3: ossutil**

Take note of the following items when you use ossutil to upload objects:

-   You can use the `cp` command in ossutil to upload large objects.
    
-   You can configure the `--bigfile-threshold` option to specify a size threshold over which resumable upload is used.
    
-   When you upload one or more large objects, you can configure the `-jobs` and `-parallel` options to control the number of concurrent tasks for optimal upload performance.
    
-   If you want to upload multiple objects at a time, you can use ossutil and ossimport.
    
-   If the number of objects that you want to upload at a time is small, we recommend that you use ossutil.
    

For more information, see [Upload objects](/help/en/oss/developer-reference/upload-objects-6).

## Troubleshooting

This section describes the common issues that you may encounter when you upload large objects and how to troubleshoot these issues:

-   A call to the PutObject operation fails to upload an object. This may be caused by the following factors:
    
    -   The object that you want to upload is larger than 5 GB. Use ossutil to upload the object in parts.
        
    -   No response is received for a request to upload an object that is larger than 5 GB by using PutObject and a timeout error occurs. This may be because that the maximum transmission unit (MTU) is set to a large value. You can run `netstat -i` on the Elastic Compute Service (ECS) instance to query the current MTU value. The following figure shows that the default MTU for the internal and external network interface cards is 1500. ![mtu](http:////img.alicdn.com/tfscom/TB1azVuLFXXXXclXpXXXXXXXXXX.jpg)
        
        -   Change the MTU to a smaller value. For example, you can run `ip link set dev eth0 mtu 1470` on Linux to change the MTU for eth0 in the preceding figure to 1470.
            
        -   Use the MultipartUpload operation or the ossutil tool.
            
-   A large object cannot be uploaded in parts concurrently.
    
    -   If you use ossutil to upload the large object, you can specify the `--bigfile-threshold`, `-jobs`, and `-parallel` options to upload the object concurrently.
        
    -   If you use the MultipartUpload operation of OSS APIs or OSS SDKs, write code to upload the object concurrently. Some OSS SDKs allow you to control the number of concurrent threads by using a parameter, such as [taskNum](/help/en/oss/developer-reference/resumable-upload-10) in OSS SDK for Java or [num\_threads](/help/en/oss/developer-reference/resumable-upload-1) in OSS SDK for Python.
