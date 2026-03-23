This topic describes how to use the OSS C++ software development kit (SDK) to perform common operations, such as creating buckets, uploading files, and downloading objects.

**Note**

In the sample code, conf is an instance of ClientConfiguration, which is the configuration class for OssClient. You can use this class to configure parameters such as the proxy, connection timeout, and maximum connections. For more information, see [Initialization (C++ SDK)](/help/en/oss/developer-reference/initialization-12#concept-32133-zh).

## Create a bucket

A bucket is a global namespace in OSS that acts as a container for storing files.

**Note**

For more information about bucket naming conventions, see [Basic Concepts](/help/en/oss/terms-2#concept-izx-fmt-tdb). For more information about how to obtain an Endpoint, see [Regions and Endpoints](/help/en/oss/user-guide/regions-and-endpoints#concept-zt4-cvy-5db).

The following code shows how to create a bucket named examplebucket.

```
#include <alibabacloud/oss/OssClient.h>
using namespace AlibabaCloud::OSS;

int main(void)
{
    /* Initialize OSS account information. */
            
   /* Set yourEndpoint to the Endpoint of the region where the bucket is located. For example, if the bucket is in the China (Hangzhou) region, set the Endpoint to https://oss-cn-hangzhou.aliyuncs.com. */
    std::string Endpoint = "yourEndpoint";
    /* Set yourRegion to the ID of the region where the bucket is located. For example, if the bucket is in the China (Hangzhou) region, set the Region to cn-hangzhou. */
    std::string Region = "yourRegion";
    /* Specify the bucket name, for example, examplebucket. */
    std::string BucketName = "examplebucket";
    /* Initialize network resources. */
    InitializeSdk();

    ClientConfiguration conf;
    conf.signatureVersion = SignatureVersionType::V4;
    /* Obtain access credentials from environment variables. Before you run the sample code, make sure that the OSS_ACCESS_KEY_ID and OSS_ACCESS_KEY_SECRET environment variables are configured. */
    auto credentialsProvider = std::make_shared<EnvironmentVariableCredentialsProvider>();
    OssClient client(Endpoint, credentialsProvider, conf);
    client.SetRegion(Region);

    /* Specify the name, storage class, and access control list (ACL) for the new bucket. */
    CreateBucketRequest request(BucketName, StorageClass::IA, CannedAccessControlList::PublicReadWrite);

    /* Create the bucket. */
    auto outcome = client.CreateBucket(request);

    if (!outcome.isSuccess()) {
        /* Handle exceptions. */
        std::cout << "CreateBucket fail" <<
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

## Upload a file

The following code shows how to upload a file to OSS.

```
#include <alibabacloud/oss/OssClient.h>
using namespace AlibabaCloud::OSS;

int main(void)
{
    /* Initialize OSS account information. */
            
   /* Set yourEndpoint to the Endpoint of the region where the bucket is located. For example, if the bucket is in the China (Hangzhou) region, set the Endpoint to https://oss-cn-hangzhou.aliyuncs.com. */
    std::string Endpoint = "yourEndpoint";
    /* Set yourRegion to the ID of the region where the bucket is located. For example, if the bucket is in the China (Hangzhou) region, set the Region to cn-hangzhou. */
    std::string Region = "yourRegion";
    /* Specify the bucket name, for example, examplebucket. */
    std::string BucketName = "examplebucket";
    /* Specify the full path of the file, for example, exampledir/exampleobject.txt. The full path cannot contain the bucket name. */
    std::string ObjectName = "exampledir/exampleobject.txt";
    /* Initialize network resources. */
    InitializeSdk();

    ClientConfiguration conf;
    conf.signatureVersion = SignatureVersionType::V4;
    /* Obtain access credentials from environment variables. Before you run the sample code, make sure that the OSS_ACCESS_KEY_ID and OSS_ACCESS_KEY_SECRET environment variables are configured. */
    auto credentialsProvider = std::make_shared<EnvironmentVariableCredentialsProvider>();
    OssClient client(Endpoint, credentialsProvider, conf);
    client.SetRegion(Region);

    /* Upload the file. */
    /* Specify the full path of the local file, for example, D:\\localpath\\examplefile.txt. In this path, localpath is the local directory where the examplefile.txt file is stored. */
    auto outcome = client.PutObject(BucketName, ObjectName,"D:\\localpath\\examplefile.txt");

    if (!outcome.isSuccess()) {
        /* Handle exceptions. */
        std::cout << "PutObject fail" <<
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

## Download a file

The following code shows how to download an OSS object to a local file.

```
#include <alibabacloud/oss/OssClient.h>
#include <memory>
#include <fstream>
using namespace AlibabaCloud::OSS;

int main(void)
{
    /* Initialize information about the account that is used to access OSS. */
            
    /* Specify the endpoint of the region in which the bucket is located. For example, if the bucket is located in the China (Hangzhou) region, set the endpoint to https://oss-cn-hangzhou.aliyuncs.com. */
    std::string Endpoint = "yourEndpoint";
    /* Specify the region in which the bucket is located. For example, if the bucket is located in the China (Hangzhou) region, set the region to cn-hangzhou. */
    std::string Region = "yourRegion";
    /* Specify the name of the bucket. Example: examplebucket. */
    std::string BucketName = "examplebucket";
    /* Specify the full path of the object. Do not include the bucket name in the full path. Example: exampledir/exampleobject.txt. */
    std::string ObjectName = "exampledir/exampleobject.txt";
    /* Download the object as a local file named examplefile.txt and save the file to D:\\localpath. If a file that has the same name already exists in the specified path, the downloaded object overwrites the file. Otherwise, the downloaded object is saved in the path. */
    /* If you do not specify the path of the local file, the downloaded object is saved to the path of the project to which the sample program belongs. */
    std::string FileNametoSave = "D:\\localpath\\examplefile.txt";

    /* Initialize resources such as network resources. */
    InitializeSdk();

    ClientConfiguration conf;
    conf.signatureVersion = SignatureVersionType::V4;
    /* Obtain access credentials from environment variables. Before you run the sample code, make sure that the OSS_ACCESS_KEY_ID and OSS_ACCESS_KEY_SECRET environment variables are configured. */
    auto credentialsProvider = std::make_shared<EnvironmentVariableCredentialsProvider>();
    OssClient client(Endpoint, credentialsProvider, conf);
    client.SetRegion(Region);

    /* Download the object as a local file. */
    GetObjectRequest request(BucketName, ObjectName);
    request.setResponseStreamFactory([=]() {return std::make_shared<std::fstream>(FileNametoSave, std::ios_base::out | std::ios_base::in | std::ios_base::trunc| std::ios_base::binary); });

    auto outcome = client.GetObject(request);

    if (outcome.isSuccess()) {    
        std::cout << "GetObjectToFile success" << outcome.result().Metadata().ContentLength() << std::endl;
    }
    else {
        /* Handle exceptions. */
        std::cout << "GetObjectToFile fail" <<
        ",code:" << outcome.error().Code() <<
        ",message:" << outcome.error().Message() <<
        ",requestId:" << outcome.error().RequestId() << std::endl;
        return -1;
    }

    /* Release resources such as network resources. */
    ShutdownSdk();
    return 0;
}
```

## List files

The following code shows how to list the files in a bucket. By default, a maximum of 100 files are listed.

```
#include <alibabacloud/oss/OssClient.h>
using namespace AlibabaCloud::OSS;

int main(void)
{
    /* Initialize OSS account information. */
            
   /* Set yourEndpoint to the Endpoint of the region where the bucket is located. For example, if the bucket is in the China (Hangzhou) region, set the Endpoint to https://oss-cn-hangzhou.aliyuncs.com. */
    std::string Endpoint = "yourEndpoint";
    /* Set yourRegion to the ID of the region where the bucket is located. For example, if the bucket is in the China (Hangzhou) region, set the Region to cn-hangzhou. */
    std::string Region = "yourRegion";
    /* Specify the bucket name, for example, examplebucket. */
    std::string BucketName = "examplebucket";
    /* Initialize network resources. */
    InitializeSdk();

    ClientConfiguration conf;
    conf.signatureVersion = SignatureVersionType::V4;
    /* Obtain access credentials from environment variables. Before you run the sample code, make sure that the OSS_ACCESS_KEY_ID and OSS_ACCESS_KEY_SECRET environment variables are configured. */
    auto credentialsProvider = std::make_shared<EnvironmentVariableCredentialsProvider>();
    OssClient client(Endpoint, credentialsProvider, conf);
    client.SetRegion(Region);

    /* List the files. */
    ListObjectsRequest request(BucketName);
    auto outcome = client.ListObjects(request);

    if (!outcome.isSuccess()) {    
        /* Handle exceptions. */
        std::cout << "ListObjects fail" <<
        ",code:" << outcome.error().Code() <<
        ",message:" << outcome.error().Message() <<
        ",requestId:" << outcome.error().RequestId() << std::endl;
        return -1;  
    }
    else {
        for (const auto& object : outcome.result().ObjectSummarys()) {
            std::cout << "object"<<
            ",name:" << object.Key() <<
            ",size:" << object.Size() <<
            ",last modified time:" << object.LastModified() << std::endl;
        }      
    }

    /* Release network resources. */
    ShutdownSdk();
    return 0;
}
```

## Delete a file

The following code shows how to delete a specified file.

```
#include <alibabacloud/oss/OssClient.h>
using namespace AlibabaCloud::OSS;

int main(void)
{
    /* Initialize OSS account information. */
            
   /* Set yourEndpoint to the Endpoint of the region where the bucket is located. For example, if the bucket is in the China (Hangzhou) region, set the Endpoint to https://oss-cn-hangzhou.aliyuncs.com. */
    std::string Endpoint = "yourEndpoint";
    /* Set yourRegion to the ID of the region where the bucket is located. For example, if the bucket is in the China (Hangzhou) region, set the Region to cn-hangzhou. */
    std::string Region = "yourRegion";
    /* Specify the bucket name, for example, examplebucket. */
    std::string BucketName = "examplebucket";
    /* Specify the full path of the file, for example, exampledir/exampleobject.txt. The full path cannot contain the bucket name. */
    std::string ObjectName = "exampledir/exampleobject.txt";
    /* Initialize network resources. */
    InitializeSdk();

    ClientConfiguration conf;
    conf.signatureVersion = SignatureVersionType::V4;
    /* Obtain access credentials from environment variables. Before you run the sample code, make sure that the OSS_ACCESS_KEY_ID and OSS_ACCESS_KEY_SECRET environment variables are configured. */
    auto credentialsProvider = std::make_shared<EnvironmentVariableCredentialsProvider>();
    OssClient client(Endpoint, credentialsProvider, conf);
    client.SetRegion(Region);

    DeleteObjectRequest request(BucketName, ObjectName);

    /* Delete the file. */
    auto outcome = client.DeleteObject(request);

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

## References

-   For the complete sample code, see the [GitHub sample](https://github.com/aliyun/aliyun-oss-cpp-sdk/blob/16a995a66b14f236e7fed9787e2dc0bb463d6e47/sample/src/object/ObjectSample.cc).
    
-   For more information about the API operation for creating a bucket, see [PutBucket](/help/en/oss/developer-reference/putbucket#reference-wdh-fj5-tdb).
    
-   For more information about the API operation for uploading a file, see [PutObject](/help/en/oss/developer-reference/putobject#reference-l5p-ftw-tdb).
    
-   For more information about the API operation for downloading a file, see [GetObject](/help/en/oss/developer-reference/getobject#reference-ccf-rgd-5db).
    
-   For more information about the API operation for listing files, see [GetBucket (ListObjects)](/help/en/oss/developer-reference/listobjects#reference-iwr-xlv-tdb).
    
-   For more information about the API operation for deleting a file, see [DeleteObject](/help/en/oss/developer-reference/deleteobject#reference-iqc-mqv-wdb).
