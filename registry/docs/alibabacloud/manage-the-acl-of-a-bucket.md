Set or query the access control list (ACL) of an Object Storage Service (OSS) bucket using the OSS SDK for Java 1.0.

## Prerequisites

-   In this topic, the public endpoint of the China (Hangzhou) region is used. To access OSS from other Alibaba Cloud services in the same region, use an internal endpoint. For details about supported regions and endpoints, see [Regions and endpoints](/help/en/oss/user-guide/regions-and-endpoints#concept-zt4-cvy-5db).
    
-   In this topic, access credentials are obtained from environment variables. For more information, see [Configure access credentials](/help/en/oss/developer-reference/oss-java-configure-access-credentials#main-2350752).
    
-   This topic demonstrates creating an OSSClient instance with an OSS endpoint. For alternative configurations, such as using a custom domain or authenticating with credentials from Security Token Service (STS), see [Client configuration](/help/en/oss/developer-reference/oss-java-sdk/#fdfc11b71667l).
    
-   **Permissions**: Setting a bucket ACL requires the `oss:PutBucketAcl` permission. Querying a bucket ACL requires the `oss:GetBucketAcl` permission. For more information, see [Attach a custom policy to a RAM user](/help/en/oss/user-guide/common-examples-of-ram-policies#section-ucu-jv0-zip).
    

## Set bucket ACL

OSS supports three bucket ACL types:

**ACL**

**Description**

**Value**

Private

Only the bucket owner and authorized users can read and write objects. Other users cannot access objects.

`CannedAccessControlList.Private`

Public-read

The bucket owner and authorized users can read and write objects. Other users can only read objects. Exercise caution.

`CannedAccessControlList.PublicRead`

Public-read-write

All users can read and write objects. Exercise caution.

`CannedAccessControlList.PublicReadWrite`

The following code sets the ACL of a bucket to private:

```
import com.aliyun.oss.*;
import com.aliyun.oss.common.auth.*;
import com.aliyun.oss.common.comm.SignVersion;
import com.aliyun.oss.model.CannedAccessControlList;

public class Demo {
    public static void main(String[] args) throws Exception {
        // Specify the endpoint. Example: China (Hangzhou) region.
        String endpoint = "https://oss-cn-hangzhou.aliyuncs.com";
        // Read credentials from the OSS_ACCESS_KEY_ID and OSS_ACCESS_KEY_SECRET environment variables.
        EnvironmentVariableCredentialsProvider credentialsProvider = CredentialsProviderFactory.newEnvironmentVariableCredentialsProvider();
        // Specify the bucket name.
        String bucketName = "examplebucket";
        // Specify the region. Example: cn-hangzhou.
        String region = "cn-hangzhou";

        // Create an OSSClient instance.
        // Call shutdown() to release resources when the client is no longer needed.
        ClientBuilderConfiguration clientBuilderConfiguration = new ClientBuilderConfiguration();
        clientBuilderConfiguration.setSignatureVersion(SignVersion.V4);
        OSS ossClient = OSSClientBuilder.create()
        .endpoint(endpoint)
        .credentialsProvider(credentialsProvider)
        .clientConfiguration(clientBuilderConfiguration)
        .region(region)
        .build();

        try {
            // Set the bucket ACL to private.
            ossClient.setBucketAcl(bucketName, CannedAccessControlList.Private);
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

## Query bucket ACL

The following code queries the ACL of a bucket and prints the result:

```
import com.aliyun.oss.*;
import com.aliyun.oss.common.auth.*;
import com.aliyun.oss.common.comm.SignVersion;
import com.aliyun.oss.model.AccessControlList;

public class Demo {
    public static void main(String[] args) throws Exception {
        // Specify the endpoint. Example: China (Hangzhou) region.
        String endpoint = "https://oss-cn-hangzhou.aliyuncs.com";
        // Read credentials from the OSS_ACCESS_KEY_ID and OSS_ACCESS_KEY_SECRET environment variables.
        EnvironmentVariableCredentialsProvider credentialsProvider = CredentialsProviderFactory.newEnvironmentVariableCredentialsProvider();
        // Specify the bucket name.
        String bucketName = "examplebucket";
        // Specify the region. Example: cn-hangzhou.
        String region = "cn-hangzhou";

        // Create an OSSClient instance.
        // Call shutdown() to release resources when the client is no longer needed.
        ClientBuilderConfiguration clientBuilderConfiguration = new ClientBuilderConfiguration();
        clientBuilderConfiguration.setSignatureVersion(SignVersion.V4);
        OSS ossClient = OSSClientBuilder.create()
        .endpoint(endpoint)
        .credentialsProvider(credentialsProvider)
        .clientConfiguration(clientBuilderConfiguration)
        .region(region)
        .build();

        try {
            // Query the bucket ACL.
            AccessControlList acl = ossClient.getBucketAcl(bucketName);
            System.out.println(acl.toString());
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

-   [Complete sample code on GitHub](https://github.com/aliyun/aliyun-oss-java-sdk/blob/master/src/samples/BucketOperationsSample.java)
    
-   [PutBucketAcl API reference](/help/en/oss/developer-reference/putbucketacl#reference-zzr-hk5-tdb)
    
-   [GetBucketAcl API reference](/help/en/oss/developer-reference/getbucketacl#reference-hgp-psv-tdb)
