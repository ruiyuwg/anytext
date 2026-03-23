Configure hotlink protection for an OSS bucket using the Java SDK. Hotlink protection uses the HTTP `Referer` request header to control access — you define a Referer whitelist or blacklist, and specify whether to allow requests with an empty `Referer` header. This prevents unauthorized websites from hotlinking your objects and generating unexpected traffic costs.

> `Referer` headers can be spoofed by custom HTTP clients. Use hotlink protection to block casual hotlinking from third-party websites, not as a security boundary against determined attackers.

## Prerequisites

Before you begin, ensure that you have:

-   An OSS bucket
    
-   The `oss:PutBucketReferer` permission to configure or clear hotlink protection
    
-   The `oss:GetBucketReferer` permission to query hotlink protection configurations
    
-   Access credentials stored in environment variables (`OSS_ACCESS_KEY_ID` and `OSS_ACCESS_KEY_SECRET`)
    

For information about granting permissions, see [Attach a custom policy to a RAM user](/help/en/oss/user-guide/common-examples-of-ram-policies#section-ucu-jv0-zip).

## Usage notes

-   For an overview of this feature, see [Hotlink protection](/help/en/oss/user-guide/hotlink-protection).
    
-   The examples on this page use the public endpoint for the China (Hangzhou) region. To access OSS from other Alibaba Cloud services in the same region, use the internal endpoint. For the full list of regions and endpoints, see [OSS regions and endpoints](/help/en/oss/user-guide/regions-and-endpoints).
    
-   The examples create an `OSSClient` instance using an OSS endpoint. To create an instance with a custom domain name or Security Token Service (STS), see [Configuration examples for common scenarios](/help/en/oss/developer-reference/initialization-3).
    

## BucketReferer parameters

All three operations use the `BucketReferer` class. The following table describes its parameters.

**Parameter**

**Description**

**Required**

**Setter**

`allowEmptyReferer`

Whether to allow requests with an empty `Referer` header. Set to `true` to allow, `false` to deny.

No

`setAllowEmptyReferer(boolean)`

`refererList`

List of allowed or blocked `Referer` values. Supports `*` and `?` wildcard characters.

No

`setRefererList(List<String>)`

Use `BucketReferer(boolean allowEmptyReferer, List<String> refererList)` to configure rules, or `BucketReferer()` (no-arg constructor) to reset all rules to defaults.

## Set hotlink protection

Use `setBucketReferer` to apply a Referer whitelist to a bucket.

```
import com.aliyun.oss.*;
import com.aliyun.oss.common.auth.*;
import com.aliyun.oss.common.comm.SignVersion;
import com.aliyun.oss.model.BucketReferer;
import java.util.ArrayList;
import java.util.List;

public class Demo {

    public static void main(String[] args) throws Exception {
        // Replace with the endpoint for your bucket's region.
        String endpoint = "https://oss-cn-hangzhou.aliyuncs.com";
        // Credentials are read from environment variables OSS_ACCESS_KEY_ID and OSS_ACCESS_KEY_SECRET.
        EnvironmentVariableCredentialsProvider credentialsProvider = CredentialsProviderFactory.newEnvironmentVariableCredentialsProvider();
        String bucketName = "examplebucket";
        // Replace with the region where your bucket is located.
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
            List<String> refererList = new ArrayList<String>();
            // Add domains to the whitelist. Use * or ? as wildcards.
            refererList.add("http://www.aliyun.com");
            refererList.add("https://www.aliyun.com");

            // Set the value to true to allow requests with an empty Referer field.
            // Set the value to false to deny requests with an empty Referer field.
            BucketReferer br = new BucketReferer(true, refererList);
            ossClient.setBucketReferer(bucketName, br);
        } catch (OSSException oe) {
            System.out.println("OSS error — your request reached OSS but was rejected.");
            System.out.println("Error Message: " + oe.getErrorMessage());
            System.out.println("Error Code:    " + oe.getErrorCode());
            System.out.println("Request ID:    " + oe.getRequestId());
            System.out.println("Host ID:       " + oe.getHostId());
        } catch (ClientException ce) {
            System.out.println("Client error — the SDK could not reach OSS.");
            System.out.println("Error Message: " + ce.getMessage());
        } finally {
            if (ossClient != null) {
                ossClient.shutdown();
            }
        }
    }
}
```

## Get hotlink protection configurations

Use `getBucketReferer` to retrieve the current Referer configuration for a bucket.

```
import com.aliyun.oss.*;
import com.aliyun.oss.common.auth.*;
import com.aliyun.oss.common.comm.SignVersion;
import com.aliyun.oss.model.BucketReferer;
import java.util.List;

public class Demo {

    public static void main(String[] args) throws Exception {
        String endpoint = "https://oss-cn-hangzhou.aliyuncs.com";
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
            BucketReferer br = ossClient.getBucketReferer(bucketName);

            List<String> refererList = br.getRefererList();
            if (refererList == null || refererList.isEmpty()) {
                System.out.println("No Referer rules configured.");
            } else {
                System.out.println("Referer list:");
                for (String referer : refererList) {
                    System.out.println("  " + referer);
                }
            }
        } catch (OSSException oe) {
            System.out.println("OSS error — your request reached OSS but was rejected.");
            System.out.println("Error Message: " + oe.getErrorMessage());
            System.out.println("Error Code:    " + oe.getErrorCode());
            System.out.println("Request ID:    " + oe.getRequestId());
            System.out.println("Host ID:       " + oe.getHostId());
        } catch (ClientException ce) {
            System.out.println("Client error — the SDK could not reach OSS.");
            System.out.println("Error Message: " + ce.getMessage());
        } finally {
            if (ossClient != null) {
                ossClient.shutdown();
            }
        }
    }
}
```

## Clear hotlink protection configurations

Hotlink protection rules cannot be deleted directly. To clear them, create a new rule that allows empty Referer headers to overwrite the existing rules by passing an empty `BucketReferer` to `setBucketReferer`.

```
import com.aliyun.oss.ClientException;
import com.aliyun.oss.OSS;
import com.aliyun.oss.common.auth.*;
import com.aliyun.oss.OSSClientBuilder;
import com.aliyun.oss.OSSException;
import com.aliyun.oss.model.BucketReferer;

public class Demo {

    public static void main(String[] args) throws Exception {
        String endpoint = "https://oss-cn-hangzhou.aliyuncs.com";
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
            // Hotlink protection rules cannot be directly cleared. You must create a new rule
            // that allows empty Referer headers to overwrite the existing rules.
            BucketReferer br = new BucketReferer();
            ossClient.setBucketReferer(bucketName, br);
        } catch (OSSException oe) {
            System.out.println("OSS error — your request reached OSS but was rejected.");
            System.out.println("Error Message: " + oe.getErrorMessage());
            System.out.println("Error Code:    " + oe.getErrorCode());
            System.out.println("Request ID:    " + oe.getRequestId());
            System.out.println("Host ID:       " + oe.getHostId());
        } catch (ClientException ce) {
            System.out.println("Client error — the SDK could not reach OSS.");
            System.out.println("Error Message: " + ce.getMessage());
        } finally {
            if (ossClient != null) {
                ossClient.shutdown();
            }
        }
    }
}
```

## References

-   Complete sample code: [GitHub](https://github.com/aliyun/aliyun-oss-java-sdk/blob/master/src/samples/BucketOperationsSample.java)
    
-   API operation for configuring hotlink protection: [PutBucketReferer](/help/en/oss/developer-reference/putbucketreferer#reference-prc-ys5-tdb)
    
-   API operation for querying hotlink protection: [GetBucketReferer](/help/en/oss/developer-reference/getbucketreferer#reference-bs5-rpw-tdb)
