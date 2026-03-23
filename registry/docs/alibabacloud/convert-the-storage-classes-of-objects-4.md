Object Storage Service (OSS) provides the following storage classes to cover various data storage scenarios from hot data to cold data: Standard, Infrequent Access (IA), Archive, Cold Archive, and Deep Cold Archive. In OSS, once an object is created, its content cannot be modified. If you want to convert the storage class of an object, you must use the Bucket.CopyObject method to copy the object to create a new object and convert the storage class of the new object.

## Usage notes

-   In this topic, the public endpoint of the China (Hangzhou) region is used. To access OSS from other Alibaba Cloud services in the same region, use an internal endpoint. For details about supported regions and endpoints, see [OSS regions and endpoints](/help/en/oss/user-guide/regions-and-endpoints#concept-zt4-cvy-5db).
    
-   In this topic, access credentials are obtained from environment variables. For more information about how to configure access credentials, see [Configure access credentials](/help/en/oss/developer-reference/oss-java-configure-access-credentials#main-2350752).
    
-   In this topic, an OSSClient instance is created by using an OSS endpoint. If you want to create an OSSClient instance by using custom domain names or Security Token Service (STS), see [Configuration examples for common scenarios](/help/en/oss/developer-reference/initialization-3#section-ngr-tjb-kfb).
    
-   To convert the storage class of an object, you must have the `oss:GetObject`, `oss:PutObject`, and `oss:RestoreObject` permissions. For more information, see [Attach a custom policy to a RAM user](/help/en/oss/user-guide/common-examples-of-ram-policies#section-ucu-jv0-zip).
    

## Examples

**Important**

If you convert the storage class of an Infrequent Access (IA), Archive, Cold Archive, or Deep Cold Archive object, or delete the object before its minimum storage duration ends, you are charged a fee for storage that is shorter than the minimum duration. For more information, see [How am I charged for objects whose storage duration is less than the minimum storage duration?](/help/en/oss/billing-method-for-objects-whose-storage-duration-is-less-than-the-minimum-storage-duration).

### Convert the storage class from Standard or Infrequent Access to Archive, Cold Archive, or Deep Cold Archive

The following code shows how to convert the storage class of an object from Standard or Infrequent Access to Archive, Cold Archive, or Deep Cold Archive.

```
import com.aliyun.oss.*;
import com.aliyun.oss.common.auth.*;
import com.aliyun.oss.common.comm.SignVersion;
import com.aliyun.oss.model.CopyObjectRequest;
import com.aliyun.oss.model.CopyObjectResult;
import com.aliyun.oss.model.ObjectMetadata;
import com.aliyun.oss.model.StorageClass;

public class Demo {
    public static void main(String[] args) throws Exception {
        // The following example uses the endpoint of the China (Hangzhou) region. Replace the endpoint with the actual endpoint.
        String endpoint = "https://oss-cn-hangzhou.aliyuncs.com";
        // Obtain access credentials from environment variables. Before you run this example, make sure the OSS_ACCESS_KEY_ID and OSS_ACCESS_KEY_SECRET environment variables are configured.
        EnvironmentVariableCredentialsProvider credentialsProvider = CredentialsProviderFactory.newEnvironmentVariableCredentialsProvider();
        // Before you run this example, create a bucket and an object. The object must be in the Standard or Infrequent Access storage class.
        // Specify the bucket name. Example: examplebucket.
        String bucketName = "examplebucket";
        // Specify the full path of the object. Do not include the bucket name. Example: exampleobject.txt.
        String objectName = "exampleobject.txt";
        // Specify the region where the bucket is located. For example, if the bucket is in the China (Hangzhou) region, set the region to cn-hangzhou.
        String region = "cn-hangzhou";

        // Create an OSSClient instance.
        // When the OSSClient instance is no longer needed, call the shutdown method to release resources.
        ClientBuilderConfiguration clientBuilderConfiguration = new ClientBuilderConfiguration();
        clientBuilderConfiguration.setSignatureVersion(SignVersion.V4);        
        OSS ossClient = OSSClientBuilder.create()
        .endpoint(endpoint)
        .credentialsProvider(credentialsProvider)
        .clientConfiguration(clientBuilderConfiguration)
        .region(region)               
        .build();

        try {
            // Create a CopyObjectRequest object.
            CopyObjectRequest request = new CopyObjectRequest(bucketName, objectName, bucketName, objectName) ;

            // Create an ObjectMetadata object.
            ObjectMetadata objectMetadata = new ObjectMetadata();

            // Convert the object storage class to Archive.
            objectMetadata.setHeader("x-oss-storage-class", StorageClass.Archive);
            // Convert the object storage class to Cold Archive.
            // objectMetadata.setHeader("x-oss-storage-class", StorageClass.ColdArchive);
            // Convert the object storage class to Deep Cold Archive.
            // objectMetadata.setHeader("x-oss-storage-class", StorageClass.DeepColdArchive);
            request.setNewObjectMetadata(objectMetadata);

            // Change the object storage class.
            CopyObjectResult result = ossClient.copyObject(request);
        } catch (OSSException oe) {
            System.out.println("Caught an OSSException, which means your request made it to OSS, "
                    + "but was rejected with an error response for some reason.");
            System.out.println("Error Message:" + oe.getErrorMessage());
            System.out.println("Error Code:" + oe.getErrorCode());
            System.out.println("Request ID:" + oe.getRequestId());
            System.out.println("Host ID:" + oe.getHostId());
        } catch (ClientException ce) {
            System.out.println("Caught an ClientException, which means the client encountered "
                    + "a serious internal problem while trying to communicate with OSS, "
                    + "such as not being able to access the network.");
            System.out.println("Error Message:" + ce.getMessage());
        } finally {
            if (ossClient != null) {
                ossClient.shutdown();
            }
        }
    }
}
```

### Convert the storage class from Archive to Standard or Infrequent Access

The following code shows how to convert the storage class of an object from Archive to Standard or Infrequent Access.

```
import com.aliyun.oss.*;
import com.aliyun.oss.common.auth.*;
import com.aliyun.oss.common.comm.SignVersion;
import com.aliyun.oss.model.CopyObjectRequest;
import com.aliyun.oss.model.CopyObjectResult;
import com.aliyun.oss.model.ObjectMetadata;
import com.aliyun.oss.model.StorageClass;

public class Demo {
    public static void main(String[] args) throws Exception {
        // The following example uses the endpoint of the China (Hangzhou) region. Replace the endpoint with the actual endpoint.
        String endpoint = "https://oss-cn-hangzhou.aliyuncs.com";
        // Obtain access credentials from environment variables. Before you run this example, make sure the OSS_ACCESS_KEY_ID and OSS_ACCESS_KEY_SECRET environment variables are configured.
        EnvironmentVariableCredentialsProvider credentialsProvider = CredentialsProviderFactory.newEnvironmentVariableCredentialsProvider();
        // Before you run this example, create a bucket and an object. The object must be in the Archive storage class.
        // Specify the bucket name. Example: examplebucket.
        String bucketName = "examplebucket";
        // Specify the full path of the object. Do not include the bucket name. Example: exampleobject.txt.
        String objectName = "exampleobject.txt";
        // Specify the region where the bucket is located. For example, if the bucket is in the China (Hangzhou) region, set the region to cn-hangzhou.
        String region = "cn-hangzhou";

        // Create an OSSClient instance.
        // When the OSSClient instance is no longer needed, call the shutdown method to release resources.
        ClientBuilderConfiguration clientBuilderConfiguration = new ClientBuilderConfiguration();
        clientBuilderConfiguration.setSignatureVersion(SignVersion.V4);        
        OSS ossClient = OSSClientBuilder.create()
        .endpoint(endpoint)
        .credentialsProvider(credentialsProvider)
        .clientConfiguration(clientBuilderConfiguration)
        .region(region)               
        .build();

        try {
            // Get the object metadata.
            ObjectMetadata objectMetadata = ossClient.getObjectMetadata(bucketName, objectName);

            // Check if the object is an Archive object. If it is, you must restore it before you can change its storage class.
            StorageClass storageClass = objectMetadata.getObjectStorageClass();
            System.out.println("storage type:" + storageClass);
            if (storageClass == StorageClass.Archive) {
                // Restore the object.
                ossClient.restoreObject(bucketName, objectName);

                // Wait for the object to be restored.
                do {
                    Thread.sleep(1000);
                    objectMetadata = ossClient.getObjectMetadata(bucketName, objectName);
                } while (!objectMetadata.isRestoreCompleted());
            }

            // Create a CopyObjectRequest object.
            CopyObjectRequest request = new CopyObjectRequest(bucketName, objectName, bucketName, objectName) ;

            // Create an ObjectMetadata object.
            objectMetadata = new ObjectMetadata();

            // Convert the object storage class to Infrequent Access.
            objectMetadata.setHeader("x-oss-storage-class", StorageClass.IA);
            // Convert the object storage class to Standard.
            // objectMetadata.setHeader("x-oss-storage-class", StorageClass.Standard);
            request.setNewObjectMetadata(objectMetadata);

            // Change the object storage class.
            CopyObjectResult result = ossClient.copyObject(request);

        } catch (OSSException oe) {
            System.out.println("Caught an OSSException, which means your request made it to OSS, "
                    + "but was rejected with an error response for some reason.");
            System.out.println("Error Message:" + oe.getErrorMessage());
            System.out.println("Error Code:" + oe.getErrorCode());
            System.out.println("Request ID:" + oe.getRequestId());
            System.out.println("Host ID:" + oe.getHostId());
        } catch (ClientException ce) {
            System.out.println("Caught an ClientException, which means the client encountered "
                    + "a serious internal problem while trying to communicate with OSS, "
                    + "such as not being able to access the network.");
            System.out.println("Error Message:" + ce.getMessage());
        } finally {
            if (ossClient != null) {
                ossClient.shutdown();
            }
        }
    }
}
```

## References

-   For the complete sample code for converting object storage classes, see the [GitHub example](https://github.com/aliyun/aliyun-oss-java-sdk/blob/master/src/samples/StorageTypeSample.java).
    
-   For more information about the API operation for converting object storage classes, see [CopyObject](/help/en/oss/developer-reference/copyobject#reference-mvx-xxc-5db).
