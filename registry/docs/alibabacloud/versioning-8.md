Versioning applies to all objects in a bucket. With versioning enabled, you can restore any object to a previous version if it is accidentally overwritten or deleted.

## Prerequisites

Before you begin, ensure that you have:

-   An OSS bucket
    
-   The `oss:PutBucketVersioning` permission to set the versioning state
    
-   The `oss:GetBucketVersioning` permission to retrieve the versioning state
    

For more information about granting permissions, see [Grant custom permissions to a RAM user](/help/en/oss/user-guide/common-examples-of-ram-policies#section-ucu-jv0-zip).

## Usage notes

-   The examples in this topic use the public endpoint for the China (Hangzhou) region. To access OSS from other Alibaba Cloud services in the same region, use the corresponding internal endpoint. For a full list of regions and endpoints, see [OSS regions and endpoints](/help/en/oss/user-guide/regions-and-endpoints).
    
-   Access credentials in the examples are read from environment variables. For setup instructions, see [Configure access credentials](/help/en/oss/developer-reference/oss-java-configure-access-credentials).
    
-   The examples create an OSSClient instance using an OSS endpoint. To create an instance with a custom domain name or Security Token Service (STS), see [Configuration examples for common scenarios](/help/en/oss/developer-reference/initialization-3).
    

## Set the versioning state of a bucket

The following example sets the versioning state of a bucket to Enabled. To suspend versioning instead, replace `BucketVersioningConfiguration.ENABLED` with `BucketVersioningConfiguration.SUSPENDED`.

**Important**

Before changing the versioning state, make sure no data replication tasks are running and no retention policies are configured for the bucket.

```
import com.aliyun.oss.*;
import com.aliyun.oss.common.auth.*;
import com.aliyun.oss.common.comm.SignVersion;
import com.aliyun.oss.model.*;

public class Demo {
    public static void main(String[] args) throws Exception {
        String endpoint = "https://oss-cn-hangzhou.aliyuncs.com";
        EnvironmentVariableCredentialsProvider credentialsProvider =
                CredentialsProviderFactory.newEnvironmentVariableCredentialsProvider();
        String bucketName = "examplebucket";
        String region = "cn-hangzhou";

        ClientBuilderConfiguration clientBuilderConfiguration = new ClientBuilderConfiguration();
        clientBuilderConfiguration.setSignatureVersion(SignVersion.V4);
        OSS ossClient = OSSClientBuilder.create()
                .endpoint(endpoint)
                .credentialsProvider(credentialsProvider)
                .clientConfiguration(clientBuilderConfiguration)
                .region(region)
                .build();

        try {
            BucketVersioningConfiguration configuration = new BucketVersioningConfiguration();
            configuration.setStatus(BucketVersioningConfiguration.ENABLED);
            SetBucketVersioningRequest request = new SetBucketVersioningRequest(bucketName, configuration);
            ossClient.setBucketVersioning(request);
        } catch (OSSException oe) {
            System.out.println("OSS error — the request reached OSS but was rejected.");
            System.out.println("Error message: " + oe.getErrorMessage());
            System.out.println("Error code: " + oe.getErrorCode());
            System.out.println("Request ID: " + oe.getRequestId());
            System.out.println("Host ID: " + oe.getHostId());
        } catch (ClientException ce) {
            System.out.println("Client error — could not communicate with OSS (e.g., network issue).");
            System.out.println("Error message: " + ce.getMessage());
        } finally {
            if (ossClient != null) {
                ossClient.shutdown();
            }
        }
    }
}
```

## Obtain information about the versioning state of a bucket

The following example retrieves the versioning state of a bucket.

```
import com.aliyun.oss.*;
import com.aliyun.oss.common.auth.*;
import com.aliyun.oss.common.comm.SignVersion;
import com.aliyun.oss.model.*;

public class Demo {
    public static void main(String[] args) throws Exception {
        String endpoint = "https://oss-cn-hangzhou.aliyuncs.com";
        EnvironmentVariableCredentialsProvider credentialsProvider =
                CredentialsProviderFactory.newEnvironmentVariableCredentialsProvider();
        String bucketName = "examplebucket";
        String region = "cn-hangzhou";

        ClientBuilderConfiguration clientBuilderConfiguration = new ClientBuilderConfiguration();
        clientBuilderConfiguration.setSignatureVersion(SignVersion.V4);
        OSS ossClient = OSSClientBuilder.create()
                .endpoint(endpoint)
                .credentialsProvider(credentialsProvider)
                .clientConfiguration(clientBuilderConfiguration)
                .region(region)
                .build();

        try {
            BucketVersioningConfiguration versionConfiguration = ossClient.getBucketVersioning(bucketName);
            System.out.println("Bucket versioning status: " + versionConfiguration.getStatus());
        } catch (OSSException oe) {
            System.out.println("OSS error — the request reached OSS but was rejected.");
            System.out.println("Error message: " + oe.getErrorMessage());
            System.out.println("Error code: " + oe.getErrorCode());
            System.out.println("Request ID: " + oe.getRequestId());
            System.out.println("Host ID: " + oe.getHostId());
        } catch (ClientException ce) {
            System.out.println("Client error — could not communicate with OSS (e.g., network issue).");
            System.out.println("Error message: " + ce.getMessage());
        } finally {
            if (ossClient != null) {
                ossClient.shutdown();
            }
        }
    }
}
```

## What's next

-   [GitHub sample — BucketVersioningSample.java](https://github.com/aliyun/aliyun-oss-java-sdk/blob/master/src/samples/BucketVersioningSample.java)
    
-   [PutBucketVersioning API reference](/help/en/oss/developer-reference/putbucketversioning#reference-w2w-nm3-fhb)
    
-   [GetBucketVersioning API reference](/help/en/oss/developer-reference/getbucketversioning#reference-fhn-kt3-fhb)
