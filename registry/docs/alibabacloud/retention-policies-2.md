Use the OSS Java SDK V1 to create, lock, query, and manage time-based retention policies for OSS buckets. Retention periods range from 1 day to 70 years.

## How it works

OSS retention policies implement the Write Once Read Many (WORM) model. Once objects are protected by a locked retention policy, they cannot be deleted or overwritten until the retention period expires.

Key behaviors:

-   A newly created policy enters the `InProgress` (unlocked) state. **Lock it within 24 hours**, or it becomes invalid automatically.
    
-   After locking, you can still upload objects to or read objects from the bucket. However, you cannot delete objects or the policy itself during the retention period.
    
-   The retention period can be extended but never shortened.
    

**Warning**

Locking a retention policy is irreversible. Once locked, neither the policy nor the objects it protects can be deleted or overwritten until the retention period expires.

## Prerequisites

Before you begin, make sure that:

-   The `OSS_ACCESS_KEY_ID` and `OSS_ACCESS_KEY_SECRET` environment variables are set with valid access credentials
    
-   The bucket exists in your target region
    

## Set up the client

All examples use the following client initialization. Replace the endpoint and region with your actual values.

```
import com.aliyun.oss.*;
import com.aliyun.oss.common.auth.*;
import com.aliyun.oss.common.comm.SignVersion;

// Endpoint for the China (Hangzhou) region — replace with your actual endpoint.
// For access from other Alibaba Cloud services in the same region, use the internal endpoint.
// See: OSS regions and endpoints
String endpoint = "https://oss-cn-hangzhou.aliyuncs.com";
String region = "cn-hangzhou";
String bucketName = "examplebucket";

// Read credentials from environment variables to avoid hardcoding secrets.
EnvironmentVariableCredentialsProvider credentialsProvider =
    CredentialsProviderFactory.newEnvironmentVariableCredentialsProvider();

ClientBuilderConfiguration clientConfig = new ClientBuilderConfiguration();
clientConfig.setSignatureVersion(SignVersion.V4);

OSS ossClient = OSSClientBuilder.create()
    .endpoint(endpoint)
    .credentialsProvider(credentialsProvider)
    .clientConfiguration(clientConfig)
    .region(region)
    .build();
```

**Note**

Call `ossClient.shutdown()` in the `finally` block to release resources when the client is no longer needed. All examples below assume this pattern.

## Create a retention policy

`initiateBucketWorm` creates a retention policy in the `InProgress` state and returns the policy ID (`wormId`). Lock the policy within 24 hours to activate it.

```
import com.aliyun.oss.model.InitiateBucketWormRequest;
import com.aliyun.oss.model.InitiateBucketWormResult;

try {
    InitiateBucketWormRequest request = new InitiateBucketWormRequest(bucketName);
    // Set the retention period to 1 day. Valid range: 1 day to 70 years.
    request.setRetentionPeriodInDays(1);

    InitiateBucketWormResult result = ossClient.initiateBucketWorm(request);

    // Save the worm ID — you need it to lock or extend the policy.
    String wormId = result.getWormId();
    System.out.println("Retention policy created. Worm ID: " + wormId);
} catch (OSSException oe) {
    System.out.println("OSS error: " + oe.getErrorMessage()
        + " | Code: " + oe.getErrorCode()
        + " | Request ID: " + oe.getRequestId());
} catch (ClientException ce) {
    System.out.println("Client error: " + ce.getMessage());
} finally {
    if (ossClient != null) ossClient.shutdown();
}
```

## Delete an unlocked retention policy

`abortBucketWorm` deletes a policy in the `InProgress` state. Once locked, a policy cannot be deleted.

```
try {
    ossClient.abortBucketWorm(bucketName);
    System.out.println("Unlocked retention policy deleted.");
} catch (OSSException oe) {
    System.out.println("OSS error: " + oe.getErrorMessage()
        + " | Code: " + oe.getErrorCode()
        + " | Request ID: " + oe.getRequestId());
} catch (ClientException ce) {
    System.out.println("Client error: " + ce.getMessage());
} finally {
    if (ossClient != null) ossClient.shutdown();
}
```

## Lock a retention policy

`completeBucketWorm` locks the policy, making it permanent. After locking, objects in the bucket are protected for the full retention period.

**Warning**

This operation is irreversible. A locked policy cannot be unlocked, shortened, or deleted.

```
// Replace with the worm ID returned when the policy was created.
String wormId = "yourWormId";

try {
    ossClient.completeBucketWorm(bucketName, wormId);
    System.out.println("Retention policy locked successfully.");
} catch (OSSException oe) {
    System.out.println("OSS error: " + oe.getErrorMessage()
        + " | Code: " + oe.getErrorCode()
        + " | Request ID: " + oe.getRequestId());
} catch (ClientException ce) {
    System.out.println("Client error: " + ce.getMessage());
} finally {
    if (ossClient != null) ossClient.shutdown();
}
```

## Query a retention policy

`getBucketWorm` returns the current state and configuration of the bucket's retention policy.

```
import com.aliyun.oss.model.GetBucketWormResult;

try {
    GetBucketWormResult result = ossClient.getBucketWorm(bucketName);

    // InProgress = unlocked (must be locked within 24 hours)
    // Locked = locked (objects are under WORM protection)
    System.out.println("Worm ID:          " + result.getWormId());
    System.out.println("State:            " + result.getWormState());
    System.out.println("Retention period: " + result.getRetentionPeriodInDays() + " day(s)");
    System.out.println("Created at:       " + result.getCreationDate());
} catch (OSSException oe) {
    System.out.println("OSS error: " + oe.getErrorMessage()
        + " | Code: " + oe.getErrorCode()
        + " | Request ID: " + oe.getRequestId());
} catch (ClientException ce) {
    System.out.println("Client error: " + ce.getMessage());
} finally {
    if (ossClient != null) ossClient.shutdown();
}
```

## Extend the retention period

`extendBucketWorm` extends the retention period of a locked policy. The new period must be longer than the current one.

```
// Replace with your worm ID and the new retention period in days.
String wormId = "yourWormId";
int newRetentionPeriodInDays = 2;

try {
    ossClient.extendBucketWorm(bucketName, wormId, newRetentionPeriodInDays);
    System.out.println("Retention period extended to " + newRetentionPeriodInDays + " day(s).");
} catch (OSSException oe) {
    System.out.println("OSS error: " + oe.getErrorMessage()
        + " | Code: " + oe.getErrorCode()
        + " | Request ID: " + oe.getRequestId());
} catch (ClientException ce) {
    System.out.println("Client error: " + ce.getMessage());
} finally {
    if (ossClient != null) ossClient.shutdown();
}
```

## What's next

-   For the complete runnable sample, see [BucketWormSample.java on GitHub](https://github.com/aliyun/aliyun-oss-java-sdk/blob/master/src/samples/BucketWormSample.java).
    
-   For OSSClient initialization options including custom domains and Security Token Service (STS), see [Configuration examples for common scenarios](/help/en/oss/developer-reference/initialization-3).
    
-   For retention policy concepts and compliance considerations, see [Retention policies](/help/en/oss/user-guide/oss-retention-policies#concept-lnj-4rl-cfb).
    

## API reference

**Operation**

**API**

Create a retention policy

[InitiateBucketWorm](/help/en/oss/developer-reference/initiatebucketworm#reference-2536872)

Delete an unlocked policy

[AbortBucketWorm](/help/en/oss/developer-reference/abortbucketworm#reference-2536930)

Lock a retention policy

[CompleteBucketWorm](/help/en/oss/developer-reference/completebucketworm#reference-2536956)

Query a retention policy

[GetBucketWorm](/help/en/oss/developer-reference/getbucketworm#reference-2537016)

Extend the retention period

[ExtendBucketWorm](/help/en/oss/developer-reference/extendbucketworm#reference-2536974)
