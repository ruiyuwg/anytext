OSS generates access logs that record requests made to resources in your buckets. When you enable logging for a bucket, OSS generates access logs every hour based on predefined naming rules and stores them in the destination bucket you specify.

## Prerequisites

Before you begin, ensure that you have:

-   An OSS bucket
    
-   The RAM permissions required for the operations you want to perform:
    
    **Operation**
    
    **Required permission**
    
    Enable logging
    
    `oss:PutBucketLogging`
    
    Query logging configuration
    
    `oss:GetBucketLogging`
    
    Disable logging
    
    `oss:DeleteBucketLogging`
    
    For instructions on attaching permissions to a RAM user, see [Attach a custom policy to a RAM user](/help/en/oss/user-guide/common-examples-of-ram-policies#section-ucu-jv0-zip).
    

## Usage notes

-   The examples in this topic use the public endpoint for the China (Hangzhou) region. To access OSS from other Alibaba Cloud services in the same region, use an internal endpoint instead. For a full list of regions and endpoints, see [Regions and endpoints](/help/en/oss/user-guide/regions-and-endpoints).
    
-   Access credentials in the examples are read from environment variables. For setup instructions, see [Configure access credentials](/help/en/oss/developer-reference/oss-java-configure-access-credentials).
    
-   The examples create an OSSClient instance using an OSS endpoint. For other client configurations—such as custom domains or Security Token Service (STS) authentication—see [Client configuration](/help/en/oss/developer-reference/oss-java-sdk/).
    

## Enable logging

Use `SetBucketLoggingRequest` to specify the destination bucket and prefix for log objects, then call `setBucketLogging()`.

**Parameters**

**Parameter**

**Required**

**Description**

`bucketName`

Yes

The source bucket to enable logging for.

`targetBucketName`

Yes

The bucket where log objects are stored. Can be the same as the source bucket or a different bucket.

`targetPrefix`

No

The prefix for log object keys. If not set, log objects are stored in the root of the destination bucket.

```
import com.aliyun.oss.*;
import com.aliyun.oss.common.auth.*;
import com.aliyun.oss.common.comm.SignVersion;
import com.aliyun.oss.model.SetBucketLoggingRequest;

public class Demo {

    public static void main(String[] args) throws Exception {
        // Specify your endpoint. This example uses China (Hangzhou).
        String endpoint = "https://oss-cn-hangzhou.aliyuncs.com";
        // Load credentials from environment variables OSS_ACCESS_KEY_ID and OSS_ACCESS_KEY_SECRET.
        EnvironmentVariableCredentialsProvider credentialsProvider = CredentialsProviderFactory.newEnvironmentVariableCredentialsProvider();
        // The source bucket to enable logging for.
        String bucketName = "examplebucket";
        // The destination bucket for log objects. Can be the same as or different from the source bucket.
        String targetBucketName = "yourTargetBucketName";
        // The prefix applied to log object keys. Log objects are stored under log/ in the destination bucket.
        String targetPrefix = "log/";
        // The region where the bucket is located.
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
            SetBucketLoggingRequest request = new SetBucketLoggingRequest(bucketName);
            request.setTargetBucket(targetBucketName);
            request.setTargetPrefix(targetPrefix);
            ossClient.setBucketLogging(request);
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

## Query the logging configuration

Call `getBucketLogging()` to retrieve the current logging configuration for a bucket.

**Return values**

**Field**

**Description**

`getTargetBucket()`

The name of the destination bucket where log objects are stored.

`getTargetPrefix()`

The prefix applied to log object keys.

```
import com.aliyun.oss.*;
import com.aliyun.oss.common.auth.*;
import com.aliyun.oss.common.comm.SignVersion;
import com.aliyun.oss.model.BucketLoggingResult;

public class Demo {

    public static void main(String[] args) throws Exception {
        // Specify your endpoint. This example uses China (Hangzhou).
        String endpoint = "https://oss-cn-hangzhou.aliyuncs.com";
        // Load credentials from environment variables OSS_ACCESS_KEY_ID and OSS_ACCESS_KEY_SECRET.
        EnvironmentVariableCredentialsProvider credentialsProvider = CredentialsProviderFactory.newEnvironmentVariableCredentialsProvider();
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
            BucketLoggingResult result = ossClient.getBucketLogging(bucketName);
            System.out.println(result.getTargetBucket());
            System.out.println(result.getTargetPrefix());
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

## Disable logging

To disable logging, you can use either of the following methods:

-   Call `setBucketLogging()` with the target bucket and prefix set to `null`.
    
-   Call `deleteBucketLogging()` directly.
    

The following example uses `setBucketLogging()` with null values:

```
import com.aliyun.oss.*;
import com.aliyun.oss.common.auth.*;
import com.aliyun.oss.common.comm.SignVersion;
import com.aliyun.oss.model.SetBucketLoggingRequest;

public class Demo {

    public static void main(String[] args) throws Exception {
        // Specify your endpoint. This example uses China (Hangzhou).
        String endpoint = "https://oss-cn-hangzhou.aliyuncs.com";
        // Load credentials from environment variables OSS_ACCESS_KEY_ID and OSS_ACCESS_KEY_SECRET.
        EnvironmentVariableCredentialsProvider credentialsProvider = CredentialsProviderFactory.newEnvironmentVariableCredentialsProvider();
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
            SetBucketLoggingRequest request = new SetBucketLoggingRequest(bucketName);
            // Set both fields to null to clear the logging configuration.
            request.setTargetBucket(null);
            request.setTargetPrefix(null);
            ossClient.setBucketLogging(request);
            // Alternatively: ossClient.deleteBucketLogging(request);
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

-   [Complete sample code for bucket operations](https://github.com/aliyun/aliyun-oss-java-sdk/blob/master/src/samples/BucketOperationsSample.java)
    
-   [PutBucketLogging](/help/en/oss/developer-reference/putbucketlogging) — API reference for enabling logging
    
-   [GetBucketLogging](/help/en/oss/developer-reference/getbucketlogging) — API reference for querying logging configuration
    
-   [DeleteBucketLogging](/help/en/oss/developer-reference/deletebucketlogging) — API reference for disabling logging
