Call [`getBucketLocation`](/help/en/oss/developer-reference/getbucketlocation#reference-e11-qtv-tdb) to retrieve the region identifier for a bucket. The method returns a string such as `cn-hangzhou`, which you can use to construct the correct endpoint or verify that the bucket is in the expected region.

## Prerequisites

Before you begin, ensure that you have:

-   An OSS bucket
    
-   The `oss:GetBucketLocation` permission. For details, see [Attach a custom policy to a RAM user](/help/en/oss/user-guide/common-examples-of-ram-policies#section-ucu-jv0-zip)
    
-   The `OSS_ACCESS_KEY_ID` and `OSS_ACCESS_KEY_SECRET` environment variables set. For details, see [Configure access credentials](/help/en/oss/developer-reference/oss-java-configure-access-credentials)
    

## Query the bucket region

Use `getBucketLocation` to get the region of a bucket. The method returns a region identifier string (for example, `cn-hangzhou`).

```
import com.aliyun.oss.*;
import com.aliyun.oss.common.auth.*;
import com.aliyun.oss.common.comm.SignVersion;

public class Demo {

    public static void main(String[] args) throws Exception {
        // Endpoint of the bucket's region. Example: https://oss-cn-hangzhou.aliyuncs.com
        // To access OSS from other Alibaba Cloud services in the same region, use the internal endpoint instead.
        // For supported regions and endpoints, see https://www.alibabacloud.com/help/en/oss/user-guide/regions-and-endpoints
        String endpoint = "https://oss-cn-hangzhou.aliyuncs.com";

        // Load access credentials from environment variables.
        EnvironmentVariableCredentialsProvider credentialsProvider =
                CredentialsProviderFactory.newEnvironmentVariableCredentialsProvider();

        // Replace with your bucket name and its region.
        String bucketName = "examplebucket";
        String region = "cn-hangzhou";

        // Build the OSSClient with V4 signature.
        // For initialization with a custom domain or Security Token Service (STS),
        // see https://www.alibabacloud.com/help/en/oss/developer-reference/initialization-3#section-ngr-tjb-kfb
        ClientBuilderConfiguration clientBuilderConfiguration = new ClientBuilderConfiguration();
        clientBuilderConfiguration.setSignatureVersion(SignVersion.V4);
        OSS ossClient = OSSClientBuilder.create()
                .endpoint(endpoint)
                .credentialsProvider(credentialsProvider)
                .clientConfiguration(clientBuilderConfiguration)
                .region(region)
                .build();

        try {
            // Returns a region identifier string, for example: cn-hangzhou
            String location = ossClient.getBucketLocation(bucketName);
            System.out.println(location);
        } catch (OSSException oe) {
            // OSS rejected the request. Check the error details to diagnose the cause.
            System.out.println("Error message: " + oe.getErrorMessage());
            System.out.println("Error code: " + oe.getErrorCode());
            System.out.println("Request ID: " + oe.getRequestId());
            System.out.println("Host ID: " + oe.getHostId());
        } catch (ClientException ce) {
            // The client could not reach OSS, for example due to a network issue.
            System.out.println("Error message: " + ce.getMessage());
        } finally {
            if (ossClient != null) {
                ossClient.shutdown();
            }
        }
    }
}
```

Replace the placeholders in the code with your own values:

**Placeholder**

**Description**

**Example**

`examplebucket`

Name of the bucket to query

`my-bucket`

`cn-hangzhou` (region)

Region where the bucket is located

`cn-shanghai`

`https://oss-cn-hangzhou.aliyuncs.com`

Public endpoint for the bucket's region

`https://oss-cn-shanghai.aliyuncs.com`

Expected output:

```
cn-hangzhou
```

> **Note:** To find the endpoint for a given region identifier, see [OSS regions and endpoints](/help/en/oss/user-guide/regions-and-endpoints).

## API reference

-   [GetBucketLocation](/help/en/oss/developer-reference/getbucketlocation#reference-e11-qtv-tdb)
    
-   [Complete sample code on GitHub](https://github.com/aliyun/aliyun-oss-java-sdk/blob/master/src/samples/BucketOperationsSample.java)
