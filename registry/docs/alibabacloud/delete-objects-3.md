This topic describes how to delete a single file (object), multiple files, and files with a specified prefix in a versioning-enabled bucket.

## Usage notes

-   In this topic, the public endpoint of the China (Hangzhou) region is used. If you want to access OSS from other Alibaba Cloud services in the same region as OSS, use an internal endpoint. For more information about OSS regions and endpoints, see [Regions and endpoints](/help/en/oss/user-guide/regions-and-endpoints#concept-zt4-cvy-5db).
    
-   This topic demonstrates creating an OSSClient instance with an OSS endpoint. For alternative configurations, such as using a custom domain or authenticating with credentials from Security Token Service (STS), see [Create an OSSClient instance](/help/en/oss/developer-reference/initialization-12#section-nqa-yww-gxo).
    
-   To delete an object, you must have the `oss:DeleteObjectVersion` permission. For more information, see [Attach a custom policy to a RAM user](/help/en/oss/user-guide/common-examples-of-ram-policies#section-ucu-jv0-zip).
    

## Delete operations on a versioning-enabled bucket

When you delete an object from a versioning-enabled bucket, you must determine whether to specify a version ID in the request.

-   Delete an object without specifying a version ID (temporary deletion)
    
    By default, if you do not specify the version ID of the object that you want to delete in the request, OSS does not delete the current version of the object but adds a delete marker to the object as the latest version. If you perform the GetObject operation on the object, OSS identifies the current version of the object as a delete marker and returns `404 Not Found`. In addition, `header:x-oss-delete-marker = true` and `x-oss-version-id` that indicates the version ID of the delete marker are included in the response.
    
    If the value of `x-oss-delete-marker` is true, the value of `x-oss-version-id` is the version ID of a delete marker.
    
-   Delete an object by specifying a version ID (permanent deletion)
    
    If you specify the version ID of the object that you want to delete in the request, OSS permanently deletes the specified version of the object based on the `versionId` parameter specified in `params`. To delete the version whose ID is null, add `params['versionId'] = "null"` to `params`. OSS identifies the string "null" as the ID of the version to delete and deletes the version whose ID is null.
    

## Delete a single file by name

### **Permanently delete a file**

The following code shows how to permanently delete a specific version of an object by specifying its versionId. Permanently deleted object versions cannot be recovered.

```
#include <alibabacloud/oss/OssClient.h>
using namespace AlibabaCloud::OSS;

int main(void)
{
    /* Initialize the OSS account information. */
            
    /* Set yourEndpoint to the endpoint of the region where the bucket is located. For example, if the bucket is in the China (Hangzhou) region, set the endpoint to https://oss-cn-hangzhou.aliyuncs.com. */
    std::string Endpoint = "yourEndpoint";
    /* Set yourRegion to the region where the bucket is located. For example, if the bucket is in the China (Hangzhou) region, set the region to cn-hangzhou. */
    std::string Region = "yourRegion";
    /* Specify the bucket name, for example, examplebucket. */
    std::string BucketName = "examplebucket";
    /* Specify the full path of the object. The full path cannot contain the bucket name. For example, exampledir/exampleobject.txt. */
    std::string ObjectName = "exampledir/exampleobject.txt";

    /* Initialize network resources. */
    InitializeSdk();

    ClientConfiguration conf;
    conf.signatureVersion = SignatureVersionType::V4;
    /* Obtain access credentials from environment variables. Before you run the sample code, make sure that the OSS_ACCESS_KEY_ID and OSS_ACCESS_KEY_SECRET environment variables are set. */
    auto credentialsProvider = std::make_shared<EnvironmentVariableCredentialsProvider>();
    OssClient client(Endpoint, credentialsProvider, conf);
    client.SetRegion(Region);

    /* Delete the object with the specified versionId or the object associated with the delete marker that has the specified versionId. */
    auto outcome = client.DeleteObject(DeleteObjectRequest(BucketName, ObjectName, "yourObjectVersionIdOrDeleteMarkerVersionId"));
    /* If the versionId of an object is specified, the returned delete_marker is None and the returned versionId is the versionId of the specified object. */
    /* If the versionId of a delete marker is specified, the returned delete_marker is True and the returned versionId is the versionId of the specified delete marker. */
    if (!outcome.isSuccess()) {
        /* Handle exceptions. */
        std::cout << "DeleteObject fail" <<
        ",code:" << outcome.error().Code() <<
        ",message:" << outcome.error().Message() <<
        ",requestId:" << outcome.error().RequestId() << std::endl;
        return -1;
    }

    /* Release network resources. */
    ShutdownSdk();
    return 0;
}
```

### **Temporarily delete a file**

The following code shows how to temporarily delete an object without specifying a versionId. A temporarily deleted object version can be recovered.

```
#include <alibabacloud/oss/OssClient.h>
using namespace AlibabaCloud::OSS;

int main(void)
{
    /* Initialize the OSS account information. */
            
    /* Set yourEndpoint to the endpoint of the region where the bucket is located. For example, if the bucket is in the China (Hangzhou) region, set the endpoint to https://oss-cn-hangzhou.aliyuncs.com. */
    std::string Endpoint = "yourEndpoint";
    /* Set yourRegion to the region where the bucket is located. For example, if the bucket is in the China (Hangzhou) region, set the region to cn-hangzhou. */
    std::string Region = "yourRegion";
    /* Specify the bucket name, for example, examplebucket. */
    std::string BucketName = "examplebucket";
    /* Specify the full path of the object. The full path cannot contain the bucket name. For example, exampledir/exampleobject.txt. */
    std::string ObjectName = "exampledir/exampleobject.txt";

    /* Initialize network resources. */
    InitializeSdk();

    ClientConfiguration conf;
    conf.signatureVersion = SignatureVersionType::V4;
    /* Obtain access credentials from environment variables. Before you run the sample code, make sure that the OSS_ACCESS_KEY_ID and OSS_ACCESS_KEY_SECRET environment variables are set. */
    auto credentialsProvider = std::make_shared<EnvironmentVariableCredentialsProvider>();
    OssClient client(Endpoint, credentialsProvider, conf);
    client.SetRegion(Region);

    DeleteObjectRequest request(BucketName, ObjectName);

    /* Temporarily delete the object without specifying a versionId. This operation adds a delete marker to the object. */
    auto outcome = client.DeleteObject(request);
    /* View the versionId of the returned delete marker. */
    if (outcome.isSuccess()) {
        std::cout << "versionid:" << outcome.result().VersionId() << ",DeleteMarker:" << outcome.result().DeleteMarker() << std::endl;
    }
    else {
        /* Handle exceptions. */
        std::cout << "DeleteObject fail" <<
        ",code:" << outcome.error().Code() <<
        ",message:" << outcome.error().Message() <<
        ",requestId:" << outcome.error().RequestId() << std::endl;
        return -1;
    }

    /* Release network resources. */
    ShutdownSdk();
    return 0;
}
```

## Delete multiple files by name

### **Permanently delete files**

The following code shows how to permanently delete multiple object versions by specifying their versionIds, or delete delete markers by specifying their versionIds. Permanently deleted object versions cannot be recovered.

```
#include <alibabacloud/oss/OssClient.h>
using namespace AlibabaCloud::OSS;

int main(void)
{
    /* Initialize the OSS account information. */
            
    /* Set yourEndpoint to the endpoint of the region where the bucket is located. For example, if the bucket is in the China (Hangzhou) region, set the endpoint to https://oss-cn-hangzhou.aliyuncs.com. */
    std::string Endpoint = "yourEndpoint";
    /* Set yourRegion to the region where the bucket is located. For example, if the bucket is in the China (Hangzhou) region, set the region to cn-hangzhou. */
    std::string Region = "yourRegion";
    /* Specify the bucket name, for example, examplebucket. */
    std::string BucketName = "examplebucket";

    /* Initialize network resources. */
    InitializeSdk();

    ClientConfiguration conf;
    conf.signatureVersion = SignatureVersionType::V4;
    /* Obtain access credentials from environment variables. Before you run the sample code, make sure that the OSS_ACCESS_KEY_ID and OSS_ACCESS_KEY_SECRET environment variables are set. */
    auto credentialsProvider = std::make_shared<EnvironmentVariableCredentialsProvider>();
    OssClient client(Endpoint, credentialsProvider, conf);
    client.SetRegion(Region);

    DeleteObjectVersionsRequest  request(BucketName);

    /* Add the versionIds of the objects or delete markers to delete. */
    ObjectIdentifier obj1("yourObject1Name");
    obj1.setVersionId("yourVersionId");

    ObjectIdentifier obj2("yourObject2Name");
    obj2.setVersionId("obj2_del_marker_versionid");

    request.addObject(obj1);
    request.addObject(obj2);

    /* Batch delete the objects with the specified versionIds or the objects associated with the specified delete marker versionIds. */
    auto outcome = client.DeleteObjectVersions(request);

    if (!outcome.isSuccess()) {
        /* Handle exceptions. */
        std::cout << "DeleteObjectVersions fail" <<
        ",code:" << outcome.error().Code() <<
        ",message:" << outcome.error().Message() <<
        ",requestId:" << outcome.error().RequestId() << std::endl;
        return -1;
    }

    /* Release network resources. */
    ShutdownSdk();
    return 0;
}
```

### **Temporarily delete files**

The following code shows how to temporarily delete multiple objects without specifying their versionIds. Temporarily deleted object versions can be recovered.

```
#include <alibabacloud/oss/OssClient.h>
using namespace AlibabaCloud::OSS;

int main(void)
{
    /* Initialize the OSS account information. */
            
    /* Set yourEndpoint to the endpoint of the region where the bucket is located. For example, if the bucket is in the China (Hangzhou) region, set the endpoint to https://oss-cn-hangzhou.aliyuncs.com. */
    std::string Endpoint = "yourEndpoint";
    /* Set yourRegion to the region where the bucket is located. For example, if the bucket is in the China (Hangzhou) region, set the region to cn-hangzhou. */
    std::string Region = "yourRegion";
    /* Specify the bucket name, for example, examplebucket. */
    std::string BucketName = "examplebucket";

    /* Initialize network resources. */
    InitializeSdk();

    ClientConfiguration conf;
    conf.signatureVersion = SignatureVersionType::V4;
    /* Obtain access credentials from environment variables. Before you run the sample code, make sure that the OSS_ACCESS_KEY_ID and OSS_ACCESS_KEY_SECRET environment variables are set. */
    auto credentialsProvider = std::make_shared<EnvironmentVariableCredentialsProvider>();
    OssClient client(Endpoint, credentialsProvider, conf);
    client.SetRegion(Region);

    DeleteObjectVersionsRequest request(BucketName);
    /* Specify the names of the objects to delete. */
    ObjectIdentifier obj1("ObjectName1");
    ObjectIdentifier obj2("ObjectName2");
    ObjectIdentifier obj3("ObjectName3");

    request.addObject(obj1);
    request.addObject(obj2);
    request.addObject(obj3);

    /* Delete the objects. */
    auto outcome = client.DeleteObjectVersions(request);

    if (outcome.isSuccess()) {
        for (auto const &obj : outcome.result().DeletedObjects()) {
            std::cout << "versionid:" << obj.VersionId() << ",DeleteMarker:" << obj.DeleteMarker() << std::endl;
        }
    }
    else {
        /* Handle exceptions. */
        std::cout << "DeleteObjectVersions fail" <<
        ",code:" << outcome.error().Code() <<
        ",message:" << outcome.error().Message() <<
        ",requestId:" << outcome.error().RequestId() << std::endl;
        return -1;
    }


    /* Release network resources. */
    ShutdownSdk();
    return 0;
}
```

## Delete files with a specified prefix

The following code shows how to delete files with a specified prefix.

```
#include <alibabacloud/oss/OssClient.h>

using namespace AlibabaCloud::OSS;

int main(void)
{
    /* Initialize the OSS account information. */
            
    /* Set yourEndpoint to the endpoint of the region where the bucket is located. For example, if the bucket is in the China (Hangzhou) region, set the endpoint to https://oss-cn-hangzhou.aliyuncs.com. */
    std::string Endpoint = "yourEndpoint";
    /* Set yourRegion to the region where the bucket is located. For example, if the bucket is in the China (Hangzhou) region, set the region to cn-hangzhou. */
    std::string Region = "yourRegion";
    /* Specify the bucket name, for example, examplebucket. */
    std::string BucketName = "examplebucket";

    /* Initialize network resources. */
    InitializeSdk();

    ClientConfiguration conf;
    conf.signatureVersion = SignatureVersionType::V4;
    /* Obtain access credentials from environment variables. Before you run the sample code, make sure that the OSS_ACCESS_KEY_ID and OSS_ACCESS_KEY_SECRET environment variables are set. */
    auto credentialsProvider = std::make_shared<EnvironmentVariableCredentialsProvider>();
    OssClient client(Endpoint, credentialsProvider, conf);
    client.SetRegion(Region);

    ListObjectVersionsRequest request(BucketName);
    bool IsTruncated = false;

    do {
            request.setPrefix("yourkeyPrefix");
            auto outcome = client.ListObjectVersions(request);

            if (outcome.isSuccess()) {
                /* View the version information of the listed objects and delete markers. */
                for (auto const &marker : outcome.result().DeleteMarkerSummarys()) {
                   client.DeleteObject(DeleteObjectRequest(BucketName, marker.Key(), marker.VersionId()));
                }

                /* List the version information of all objects with the specified prefix and delete these files. */
                for (auto const &obj : outcome.result().ObjectVersionSummarys()) {
                     client.DeleteObject(DeleteObjectRequest(BucketName, obj.Key(), obj.VersionId()));
                }
            }
            else {
                std::cout << "ListObjectVersions fail" <<
                ",code:" << outcome.error().Code() <<
                ",message:" << outcome.error().Message() <<
                ",requestId:" << outcome.error().RequestId() << std::endl;
                break;
            }
            request.setKeyMarker(outcome.result().NextKeyMarker());
            request.setVersionIdMarker(outcome.result().NextVersionIdMarker());
            IsTruncated = outcome.result().IsTruncated();
    } while (IsTruncated);

    /* Release network resources. */
    ShutdownSdk();
    return 0;
}
```

## References

-   For more information about the API operation to delete a single file, see [DeleteObject](/help/en/oss/developer-reference/deleteobject#reference-iqc-mqv-wdb).
    
-   For more information about the API operation to delete multiple files, see [DeleteMultipleObjects](/help/en/oss/developer-reference/deletemultipleobjects#reference-ydg-25v-wdb).
