Archive, Cold Archive, and Deep Cold Archive objects must be restored before you can access them. This topic describes how to restore objects in each storage class by using OSS SDK for Java 1.0.

> Archive objects support real-time access as an alternative to restoration. Real-time access is not available for Cold Archive or Deep Cold Archive objects.

## Restoration time by storage class

**Storage class**

**Restoration tier**

**SDK constant**

**Estimated time**

Archive

(default)

N/A

Several minutes

Cold Archive

Expedited

`RestoreTier.RESTORE_TIER_EXPEDITED`

Within 1 hour

Cold Archive

Standard

`RestoreTier.RESTORE_TIER_STANDARD`

2 to 5 hours

Cold Archive

Bulk

`RestoreTier.RESTORE_TIER_BULK`

5 to 12 hours

Deep Cold Archive

Expedited

`RestoreTier.RESTORE_TIER_EXPEDITED`

Within 12 hours

Deep Cold Archive

Standard

`RestoreTier.RESTORE_TIER_STANDARD`

Within 48 hours

Actual restoration times may vary.

## Prerequisites

Before you begin, make sure that you have:

-   An Alibaba Cloud account with the `oss:RestoreObject` permission. For details, see [Attach a custom policy to a RAM user](/help/en/oss/user-guide/common-examples-of-ram-policies#section-ucu-jv0-zip)
    
-   The `OSS_ACCESS_KEY_ID` and `OSS_ACCESS_KEY_SECRET` environment variables configured. For details, see [Configure access credentials](/help/en/oss/developer-reference/oss-java-configure-access-credentials)
    
-   An OSS bucket containing Archive, Cold Archive, or Deep Cold Archive objects
    

> The RestoreObject operation applies only to Archive, Cold Archive, and Deep Cold Archive objects. This operation does not apply to Standard or Infrequent Access (IA) objects.

> The examples in this topic use the public endpoint of the China (Hangzhou) region. To access OSS from other Alibaba Cloud services in the same region, use an internal endpoint. For supported regions and endpoints, see [Regions and endpoints](/help/en/oss/user-guide/regions-and-endpoints).

> The examples create an OSSClient instance by using an OSS endpoint. To use a custom domain or authenticate with Security Token Service (STS) credentials, see [Client configuration](/help/en/oss/developer-reference/oss-java-sdk/).

## Restore an Archive object

Call `restoreObject` with the bucket name and object key. Then poll `getObjectMetadata` until the restoration completes before you access the object.

```
import com.aliyun.oss.*;
import com.aliyun.oss.common.auth.*;
import com.aliyun.oss.common.comm.SignVersion;
import com.aliyun.oss.model.*;

public class Demo {
    public static void main(String[] args) throws Exception {
        // Endpoint for the China (Hangzhou) region. Replace with your actual endpoint.
        String endpoint = "https://oss-cn-hangzhou.aliyuncs.com";
        // Load AccessKey credentials from environment variables.
        EnvironmentVariableCredentialsProvider credentialsProvider = CredentialsProviderFactory.newEnvironmentVariableCredentialsProvider();
        // Bucket name
        String bucketName = "examplebucket";
        // Full path of the object (excluding the bucket name)
        String objectName = "exampledir/object";
        // Region ID
        String region = "cn-hangzhou";

        // Create an OSSClient instance with V4 signature.
        // Call shutdown() to release resources when finished.
        ClientBuilderConfiguration clientBuilderConfiguration = new ClientBuilderConfiguration();
        clientBuilderConfiguration.setSignatureVersion(SignVersion.V4);
        OSS ossClient = OSSClientBuilder.create()
        .endpoint(endpoint)
        .credentialsProvider(credentialsProvider)
        .clientConfiguration(clientBuilderConfiguration)
        .region(region)
        .build();

        try {
            ObjectMetadata objectMetadata = ossClient.getObjectMetadata(bucketName, objectName);

            // Verify the object is stored in the Archive storage class.
            StorageClass storageClass = objectMetadata.getObjectStorageClass();
            if (storageClass == StorageClass.Archive) {
                // Initiate the restore request.
                ossClient.restoreObject(bucketName, objectName);

                // Poll until the restore completes.
                do {
                    Thread.sleep(1000);
                    objectMetadata = ossClient.getObjectMetadata(bucketName, objectName);
                } while (!objectMetadata.isRestoreCompleted());
            }

            // Access the restored object.
            OSSObject ossObject = ossClient.getObject(bucketName, objectName);
            ossObject.getObjectContent().close();
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

## Restore a Cold Archive object

Cold Archive objects require a `RestoreConfiguration` that specifies the restoration tier and the number of days the object remains in the restored state.

**Parameter**

**Description**

**Default**

`days`

Number of days the object stays in the restored state

1

`jobParameters`

Restoration tier: `RESTORE_TIER_EXPEDITED`, `RESTORE_TIER_STANDARD`, or `RESTORE_TIER_BULK`

N/A

```
import com.aliyun.oss.*;
import com.aliyun.oss.common.auth.*;
import com.aliyun.oss.common.comm.SignVersion;
import com.aliyun.oss.model.*;

public class Demo {
    public static void main(String[] args) throws Exception {
        // Endpoint for the China (Hangzhou) region. Replace with your actual endpoint.
        String endpoint = "https://oss-cn-hangzhou.aliyuncs.com";
        // Load AccessKey credentials from environment variables.
        EnvironmentVariableCredentialsProvider credentialsProvider = CredentialsProviderFactory.newEnvironmentVariableCredentialsProvider();
        // Bucket name
        String bucketName = "examplebucket";
        // Full path of the object (excluding the bucket name)
        String objectName = "exampledir/object";
        // Region ID
        String region = "cn-hangzhou";

        // Create an OSSClient instance with V4 signature.
        // Call shutdown() to release resources when finished.
        ClientBuilderConfiguration clientBuilderConfiguration = new ClientBuilderConfiguration();
        clientBuilderConfiguration.setSignatureVersion(SignVersion.V4);
        OSS ossClient = OSSClientBuilder.create()
        .endpoint(endpoint)
        .credentialsProvider(credentialsProvider)
        .clientConfiguration(clientBuilderConfiguration)
        .region(region)
        .build();

        try {
            // Set the restoration tier for a Cold Archive object:
            //   RESTORE_TIER_EXPEDITED  - within 1 hour
            //   RESTORE_TIER_STANDARD   - within 2 to 5 hours
            //   RESTORE_TIER_BULK       - within 5 to 12 hours
            RestoreJobParameters jobParameters = new RestoreJobParameters(RestoreTier.RESTORE_TIER_BULK);

            // Keep the object in restored state for 2 days (default: 1 day).
            RestoreConfiguration configuration = new RestoreConfiguration(2, jobParameters);

            // Initiate the restore request.
            ossClient.restoreObject(bucketName, objectName, configuration);
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

## **Restore a Deep Cold Archive object**

Deep Cold Archive objects use the same `RestoreConfiguration` pattern but support only two restoration tiers: Expedited (within 12 hours) and Standard (within 48 hours).

```
import com.aliyun.oss.*;
import com.aliyun.oss.common.auth.*;
import com.aliyun.oss.common.comm.SignVersion;
import com.aliyun.oss.model.*;

public class Demo {
    public static void main(String[] args) throws Exception {
        // Endpoint for the China (Hangzhou) region. Replace with your actual endpoint.
        String endpoint = "https://oss-cn-hangzhou.aliyuncs.com";
        // Load AccessKey credentials from environment variables.
        EnvironmentVariableCredentialsProvider credentialsProvider = CredentialsProviderFactory.newEnvironmentVariableCredentialsProvider();
        // Bucket name
        String bucketName = "examplebucket";
        // Full path of the object (excluding the bucket name)
        String objectName = "exampledir/object";
        // Region ID
        String region = "cn-hangzhou";

        // Create an OSSClient instance with V4 signature.
        // Call shutdown() to release resources when finished.
        ClientBuilderConfiguration clientBuilderConfiguration = new ClientBuilderConfiguration();
        clientBuilderConfiguration.setSignatureVersion(SignVersion.V4);
        OSS ossClient = OSSClientBuilder.create()
        .endpoint(endpoint)
        .credentialsProvider(credentialsProvider)
        .clientConfiguration(clientBuilderConfiguration)
        .region(region)
        .build();

        try {
            // Set the restoration tier for a Deep Cold Archive object:
            //   RESTORE_TIER_EXPEDITED  - within 12 hours
            //   RESTORE_TIER_STANDARD   - within 48 hours
            RestoreJobParameters jobParameters = new RestoreJobParameters(RestoreTier.RESTORE_TIER_STANDARD);

            // Keep the object in restored state for 2 days (default: 1 day).
            RestoreConfiguration configuration = new RestoreConfiguration(2, jobParameters);

            // Initiate the restore request.
            ossClient.restoreObject(bucketName, objectName, configuration);
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

-   [Complete sample code on GitHub](https://github.com/aliyun/aliyun-oss-java-sdk/blob/master/src/test/java/com/aliyun/oss/integrationtests/ArchiveTest.java)
    
-   [RestoreObject API reference](/help/en/oss/developer-reference/restoreobject#reference-mfr-5bx-wdb)
