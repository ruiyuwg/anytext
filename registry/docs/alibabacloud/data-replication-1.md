Data replication asynchronously replicates objects and operations on these objects, such as creation, updates, and deletions, from a source bucket to a destination bucket in near real time. Object Storage Service (OSS) supports cross-region replication (CRR) and same-region replication (SRR).

## Precautions

-   In this topic, the public endpoint of the China (Hangzhou) region is used. To access OSS from other Alibaba Cloud services in the same region, use an internal endpoint. For details about supported regions and endpoints, see [OSS regions and endpoints](/help/en/oss/user-guide/regions-and-endpoints#concept-zt4-cvy-5db).
    
-   In this topic, access credentials are obtained from environment variables. For more information about how to configure access credentials, see [Configure access credentials](/help/en/oss/developer-reference/oss-java-configure-access-credentials#main-2350752).
    
-   In this topic, an OSSClient instance is created by using an OSS endpoint. If you want to create an OSSClient instance by using custom domain names or Security Token Service (STS), see [Configuration examples for common scenarios](/help/en/oss/developer-reference/initialization-3#section-ngr-tjb-kfb).
    
-   To enable data replication, you must have the `oss:PutBucketReplication` permission. To view data replication rules, you must have the `oss:GetBucketReplication` permission. To view replicable destination regions, you must have the `oss:GetBucketReplicationLocation` permission. To view data replication progress, you must have the `oss:GetBucketReplicationProgress` permission. To disable data replication, you must have the `oss:DeleteBucketReplication` permission. For more information, see [Grant custom access policies to a RAM user](/help/en/oss/user-guide/common-examples-of-ram-policies#section-ucu-jv0-zip).
    

## Enable data replication

**Important**

Before you enable data replication, ensure that versioning is either enabled for both the source and destination buckets or disabled for both buckets.

The following code shows how to configure a data replication rule.

```
import com.aliyun.oss.*;
import com.aliyun.oss.common.auth.*;
import com.aliyun.oss.common.comm.SignVersion;
import com.aliyun.oss.model.AddBucketReplicationRequest;

public class Demo {

    public static void main(String[] args) throws Exception {
        // The endpoint of the China (Hangzhou) region is used in this example. Specify the actual endpoint.
        String endpoint = "https://oss-cn-hangzhou.aliyuncs.com";
        // Obtain access credentials from environment variables. Before you run this code, make sure that the OSS_ACCESS_KEY_ID and OSS_ACCESS_KEY_SECRET environment variables are configured.
        EnvironmentVariableCredentialsProvider credentialsProvider = CredentialsProviderFactory.newEnvironmentVariableCredentialsProvider();
        // Specify the bucket name. Example: examplebucket.
        String bucketName = "examplebucket";
        // Specify the destination bucket for data replication.
        String targetBucketName = "yourTargetBucketName";
        // Specify the region where the destination bucket is located.
        // To enable cross-region replication, the source and destination buckets must be in different regions. To enable same-region replication, the source and destination buckets must be in the same region.
        String targetBucketLocation = "yourTargetBucketLocation";
        // Specify the region where the bucket is located. For example, if the bucket is in the China (Hangzhou) region, set the region to cn-hangzhou.
        String region = "cn-hangzhou";

        // Create an OSSClient instance.
        // When the OSSClient instance is no longer used, call the shutdown method to release resources.
        ClientBuilderConfiguration clientBuilderConfiguration = new ClientBuilderConfiguration();
        clientBuilderConfiguration.setSignatureVersion(SignVersion.V4);        
        OSS ossClient = OSSClientBuilder.create()
        .endpoint(endpoint)
        .credentialsProvider(credentialsProvider)
        .clientConfiguration(clientBuilderConfiguration)
        .region(region)               
        .build();

        try {
            AddBucketReplicationRequest request = new AddBucketReplicationRequest(bucketName);

            request.setTargetBucketName(targetBucketName);
            request.setTargetBucketLocation(targetBucketLocation);
            // By default, historical data is replicated. This example sets the value to false to disable historical data replication.
            request.setEnableHistoricalObjectReplication(false);
            // Specify the name of the role that you authorize OSS to use for data replication. You must specify this element if you use server-side encryption (SSE) with Key Management Service (KMS) to encrypt destination objects.
            //request.setSyncRole("yourRole");
            // Specify whether OSS replicates objects that are created with SSE-KMS encryption.
            //request.setSseKmsEncryptedObjectsStatus("Enabled");
            // Specify the ID of the KMS key. You must specify this element if you set Status to Enabled.
            //request.setReplicaKmsKeyID("3542abdd-5821-4fb5-a425-90adca***");
            //List prefixes = new ArrayList();
            //prefixes.add("image/");
            //prefixes.add("video");
            //prefixes.add("a");
            //prefixes.add("A");
            // Specify the prefixes of the objects that you want to replicate. After you specify prefixes, only objects that match the prefixes are replicated to the destination bucket.
            //request.setObjectPrefixList(prefixes);
            //List actions = new ArrayList();
            //actions.add(AddBucketReplicationRequest.ReplicationAction.PUT);
            // Replicate object creation and update operations in the source bucket to the destination bucket.
            //request.setReplicationActionList(actions);
            ossClient.addBucketReplication(request);
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

## View data replication rules

The following code shows how to view the data replication rules for a specified bucket.

```
import com.aliyun.oss.*;
import com.aliyun.oss.common.auth.*;
import com.aliyun.oss.common.comm.SignVersion;
import com.aliyun.oss.model.ReplicationRule;
import java.util.List;

public class Demo {

    public static void main(String[] args) throws Exception {
        // The endpoint of the China (Hangzhou) region is used in this example. Specify the actual endpoint.
        String endpoint = "https://oss-cn-hangzhou.aliyuncs.com";
        // Obtain access credentials from environment variables. Before you run this code, make sure that the OSS_ACCESS_KEY_ID and OSS_ACCESS_KEY_SECRET environment variables are configured.
        EnvironmentVariableCredentialsProvider credentialsProvider = CredentialsProviderFactory.newEnvironmentVariableCredentialsProvider();
        // Specify the bucket name. Example: examplebucket.
        String bucketName = "examplebucket";
        // Specify the region where the bucket is located. For example, if the bucket is in the China (Hangzhou) region, set the region to cn-hangzhou.
        String region = "cn-hangzhou";

        // Create an OSSClient instance.
        // When the OSSClient instance is no longer used, call the shutdown method to release resources.
        ClientBuilderConfiguration clientBuilderConfiguration = new ClientBuilderConfiguration();
        clientBuilderConfiguration.setSignatureVersion(SignVersion.V4);        
        OSS ossClient = OSSClientBuilder.create()
        .endpoint(endpoint)
        .credentialsProvider(credentialsProvider)
        .clientConfiguration(clientBuilderConfiguration)
        .region(region)               
        .build();

        try {
            // View the data replication rules.
            List<ReplicationRule> rules = ossClient.getBucketReplication(bucketName);
            for (ReplicationRule rule : rules) {
                System.out.println(rule.getReplicationRuleID());
                System.out.println(rule.getTargetBucketLocation());
                System.out.println(rule.getTargetBucketName());
            }
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

## View replicable destination regions

The following code shows how to obtain the list of destination regions to which data can be replicated.

```
import com.aliyun.oss.*;
import com.aliyun.oss.common.auth.*;
import com.aliyun.oss.common.comm.SignVersion;
import java.util.List;

public class Demo {

    public static void main(String[] args) throws Exception {
        // The endpoint of the China (Hangzhou) region is used in this example. Specify the actual endpoint.
        String endpoint = "https://oss-cn-hangzhou.aliyuncs.com";
        // Obtain access credentials from environment variables. Before you run this code, make sure that the OSS_ACCESS_KEY_ID and OSS_ACCESS_KEY_SECRET environment variables are configured.
        EnvironmentVariableCredentialsProvider credentialsProvider = CredentialsProviderFactory.newEnvironmentVariableCredentialsProvider();
        // Specify the bucket name. Example: examplebucket.
        String bucketName = "examplebucket";
        // Specify the region where the bucket is located. For example, if the bucket is in the China (Hangzhou) region, set the region to cn-hangzhou.
        String region = "cn-hangzhou";

        // Create an OSSClient instance.
        // When the OSSClient instance is no longer used, call the shutdown method to release resources.
        ClientBuilderConfiguration clientBuilderConfiguration = new ClientBuilderConfiguration();
        clientBuilderConfiguration.setSignatureVersion(SignVersion.V4);        
        OSS ossClient = OSSClientBuilder.create()
        .endpoint(endpoint)
        .credentialsProvider(credentialsProvider)
        .clientConfiguration(clientBuilderConfiguration)
        .region(region)               
        .build();

        try {
            // View the destination regions to which data can be replicated.
            List<String> locations = ossClient.getBucketReplicationLocation(bucketName);
            for (String loc : locations) {
                System.out.println(loc);
            }
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

## View data replication progress

Data replication progress is divided into historical data replication progress and incremental data replication progress.

-   The progress of historical data replication is expressed as a percentage. This applies only to buckets for which historical data replication is enabled.
    
-   The progress of incremental data replication is indicated by a point in time. This means that data written before this point in time has been replicated.
    

The following code shows how to view the data replication progress.

```
import com.aliyun.oss.*;
import com.aliyun.oss.common.auth.*;
import com.aliyun.oss.common.comm.SignVersion;
import com.aliyun.oss.model.BucketReplicationProgress;

public class Demo {

    public static void main(String[] args) throws Exception {
        // The endpoint of the China (Hangzhou) region is used in this example. Specify the actual endpoint.
        String endpoint = "https://oss-cn-hangzhou.aliyuncs.com";
        // Obtain access credentials from environment variables. Before you run this code, make sure that the OSS_ACCESS_KEY_ID and OSS_ACCESS_KEY_SECRET environment variables are configured.
        EnvironmentVariableCredentialsProvider credentialsProvider = CredentialsProviderFactory.newEnvironmentVariableCredentialsProvider();
        // Specify the bucket name. Example: examplebucket.
        String bucketName = "examplebucket";
        // Specify the ID of the data replication rule.
        String ruleId = "yourRuleId";
        // Specify the region where the bucket is located. For example, if the bucket is in the China (Hangzhou) region, set the region to cn-hangzhou.
        String region = "cn-hangzhou";

        // Create an OSSClient instance.
        // When the OSSClient instance is no longer used, call the shutdown method to release resources.
        ClientBuilderConfiguration clientBuilderConfiguration = new ClientBuilderConfiguration();
        clientBuilderConfiguration.setSignatureVersion(SignVersion.V4);        
        OSS ossClient = OSSClientBuilder.create()
        .endpoint(endpoint)
        .credentialsProvider(credentialsProvider)
        .clientConfiguration(clientBuilderConfiguration)
        .region(region)               
        .build();

        try {
            BucketReplicationProgress process = ossClient.getBucketReplicationProgress(bucketName, ruleId);
            System.out.println(process.getReplicationRuleID());
            System.out.println(process.isEnableHistoricalObjectReplication());
            // View the progress of historical data replication.
            System.out.println(process.getHistoricalObjectProgress());
            // View the progress of incremental data replication.
            System.out.println(process.getNewObjectProgress());
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

## Disable data replication

The following code shows how to disable data replication.

```
import com.aliyun.oss.*;
import com.aliyun.oss.common.auth.*;
import com.aliyun.oss.common.comm.SignVersion;

public class Demo {

    public static void main(String[] args) throws Exception {
        // The endpoint of the China (Hangzhou) region is used in this example. Specify the actual endpoint.
        String endpoint = "https://oss-cn-hangzhou.aliyuncs.com";
        // Obtain access credentials from environment variables. Before you run this code, make sure that the OSS_ACCESS_KEY_ID and OSS_ACCESS_KEY_SECRET environment variables are configured.
        EnvironmentVariableCredentialsProvider credentialsProvider = CredentialsProviderFactory.newEnvironmentVariableCredentialsProvider();
        // Specify the bucket name. Example: examplebucket.
        String bucketName = "examplebucket";
        String ruleId = "yourRuleId";
        // Specify the region where the bucket is located. For example, if the bucket is in the China (Hangzhou) region, set the region to cn-hangzhou.
        String region = "cn-hangzhou";

        // Create an OSSClient instance.
        // When the OSSClient instance is no longer used, call the shutdown method to release resources.
        ClientBuilderConfiguration clientBuilderConfiguration = new ClientBuilderConfiguration();
        clientBuilderConfiguration.setSignatureVersion(SignVersion.V4);        
        OSS ossClient = OSSClientBuilder.create()
        .endpoint(endpoint)
        .credentialsProvider(credentialsProvider)
        .clientConfiguration(clientBuilderConfiguration)
        .region(region)               
        .build();

        try {
            // Disable data replication. After data replication is disabled, the objects that have been replicated to the destination bucket still exist. However, changes to the objects in the source bucket are no longer replicated to the destination bucket.
            ossClient.deleteBucketReplication(bucketName, ruleId);
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

## Related documents

-   For the complete sample code for data replication, see the [GitHub example](https://github.com/aliyun/aliyun-oss-java-sdk/blob/master/src/samples/BucketReplicationSample.java).
    
-   For more information about the API operation to enable data replication, see [PutBucketReplication](/help/en/oss/developer-reference/putbucketreplication#topic-1919274).
    
-   For more information about the API operation to view data replication configurations, see [GetBucketReplication](/help/en/oss/developer-reference/getbucketreplication#topic-1919419).
    
-   For more information about the API operation to view replicable destination regions, see [GetBucketReplicationLocation](/help/en/oss/developer-reference/getbucketreplicationlocation#topic-1919571).
    
-   For more information about the API operation to view data replication progress, see [GetBucketReplicationProgress](/help/en/oss/developer-reference/getbucketreplicationprogress#reference-1940162).
    
-   For more information about the API operation to disable data replication, see [DeleteBucketReplication](/help/en/oss/developer-reference/deletebucketreplication#topic-1919465).
