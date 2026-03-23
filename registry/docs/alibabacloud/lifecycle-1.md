Not all data uploaded to Object Storage Service (OSS) requires frequent access. For compliance or archiving purposes, some data must be stored in a cold storage class. In other scenarios, you may want to batch delete data that is no longer needed from a bucket. To do this, you can configure a lifecycle rule based on the last modified time. If you want OSS to automatically monitor data access patterns, identify cold data, and then transition the cold data to a different storage class to implement tiered storage and reduce storage costs, you can configure a lifecycle rule based on the last access time.

## Precautions

-   Before you configure lifecycle rules based on the last modified time or last access time of objects, make sure that you familiarize yourself with this feature. For more information, see [Lifecycle rules based on the last modified time](/help/en/oss/user-guide/lifecycle-rules-based-on-the-last-modified-time) and [Lifecycle rules based on the last access time](/help/en/oss/user-guide/lifecycle-rules-based-on-the-last-access-time).
    

-   In this topic, the public endpoint of the China (Hangzhou) region is used. To access OSS from other Alibaba Cloud services in the same region, use an internal endpoint. For details about supported regions and endpoints, see [OSS regions and endpoints](/help/en/oss/user-guide/regions-and-endpoints#concept-zt4-cvy-5db).
    
-   In this topic, access credentials are obtained from environment variables. For more information about how to configure access credentials, see [Configure access credentials](/help/en/oss/developer-reference/oss-java-configure-access-credentials#main-2350752).
    
-   In this topic, an OSSClient instance is created by using an OSS endpoint. If you want to create an OSSClient instance by using custom domain names or Security Token Service (STS), see [Configuration examples for common scenarios](/help/en/oss/developer-reference/initialization-3#section-ngr-tjb-kfb).
    
-   To set a lifecycle rule, you must have the `oss:PutBucketLifecycle` permission. To view a lifecycle rule, you must have the `oss:GetBucketLifecycle` permission. To clear lifecycle rules, you must have the `oss:DeleteBucketLifecycle` permission. For more information, see [Grant custom permissions to a RAM user](/help/en/oss/user-guide/common-examples-of-ram-policies#section-ucu-jv0-zip).
    

## Set lifecycle rules

The following code provides examples of setting lifecycle rules based on the last modified time and the last access time. To modify one or more rules after they are set, see [How do I modify one or more lifecycle rule configurations?](/help/en/oss/user-guide/lifecycle-rules-based-on-the-last-modified-time#66e3fe0b87hr7).

### Use tags and prefixes for positive matching in a policy based on the last modified time

The following code shows how to set a lifecycle rule for the bucket named examplebucket. The rule is based on the last modified time and uses tags and prefixes to transition storage classes or delete objects.

```
import com.aliyun.oss.*;
import com.aliyun.oss.common.auth.*;
import com.aliyun.oss.common.comm.SignVersion;
import com.aliyun.oss.common.utils.DateUtil;
import com.aliyun.oss.model.LifecycleRule;
import com.aliyun.oss.model.SetBucketLifecycleRequest;
import com.aliyun.oss.model.StorageClass;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

public class Demo {

    public static void main(String[] args) throws Exception {
        // The China (Hangzhou) endpoint is used as an example. Replace it with the actual endpoint.
        String endpoint = "https://oss-cn-hangzhou.aliyuncs.com";
        // Obtain access credentials from environment variables. Before you run this sample code, make sure that the OSS_ACCESS_KEY_ID and OSS_ACCESS_KEY_SECRET environment variables are set.
        EnvironmentVariableCredentialsProvider credentialsProvider = CredentialsProviderFactory.newEnvironmentVariableCredentialsProvider();
        // Specify the bucket name, for example, examplebucket.
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
            // Create a SetBucketLifecycleRequest.
            SetBucketLifecycleRequest request = new SetBucketLifecycleRequest(bucketName);

            // Set the rule ID.
            String ruleId0 = "rule0";
            // Set the prefix to match files.
            String matchPrefix0 = "A0/";
            // Set the tags to match.
            Map<String, String> matchTags0 = new HashMap<String, String>();
            // Specify the key (for example, owner) and value (for example, John) of the tag to match.
            matchTags0.put("owner", "John");


            String ruleId1 = "rule1";
            String matchPrefix1 = "A1/";
            Map<String, String> matchTags1 = new HashMap<String, String>();
            matchTags1.put("type", "document");

            String ruleId2 = "rule2";
            String matchPrefix2 = "A2/";

            String ruleId3 = "rule3";
            String matchPrefix3 = "A3/";

            String ruleId4 = "rule4";
            String matchPrefix4 = "A4/";

            String ruleId5 = "rule5";
            String matchPrefix5 = "A5/";

            String ruleId6 = "rule6";
            String matchPrefix6 = "A6/";

            // Expire objects 3 days after their last modified time.
            LifecycleRule rule = new LifecycleRule(ruleId0, matchPrefix0, LifecycleRule.RuleStatus.Enabled, 3);
            rule.setTags(matchTags0);
            request.AddLifecycleRule(rule);

            // Expire objects created before the specified date.
            rule = new LifecycleRule(ruleId1, matchPrefix1, LifecycleRule.RuleStatus.Enabled);
            rule.setCreatedBeforeDate(DateUtil.parseIso8601Date("2022-10-12T00:00:00.000Z"));
            rule.setTags(matchTags1);
            request.AddLifecycleRule(rule);

            // Expire parts 3 days after they are created.
            rule = new LifecycleRule(ruleId2, matchPrefix2, LifecycleRule.RuleStatus.Enabled);
            LifecycleRule.AbortMultipartUpload abortMultipartUpload = new LifecycleRule.AbortMultipartUpload();
            abortMultipartUpload.setExpirationDays(3);
            rule.setAbortMultipartUpload(abortMultipartUpload);
            request.AddLifecycleRule(rule);

            // Expire parts created before the specified date.
            rule = new LifecycleRule(ruleId3, matchPrefix3, LifecycleRule.RuleStatus.Enabled);
            abortMultipartUpload = new LifecycleRule.AbortMultipartUpload();
            abortMultipartUpload.setCreatedBeforeDate(DateUtil.parseIso8601Date("2022-10-12T00:00:00.000Z"));
            rule.setAbortMultipartUpload(abortMultipartUpload);
            request.AddLifecycleRule(rule);

            // Transition objects to the Infrequent Access storage class 10 days after their last modified time, and to the Archive Storage storage class 30 days after their last modified time.
            rule = new LifecycleRule(ruleId4, matchPrefix4, LifecycleRule.RuleStatus.Enabled);
            List<LifecycleRule.StorageTransition> storageTransitions = new ArrayList<LifecycleRule.StorageTransition>();
            LifecycleRule.StorageTransition storageTransition = new LifecycleRule.StorageTransition();
            storageTransition.setStorageClass(StorageClass.IA);
            storageTransition.setExpirationDays(10);
            storageTransitions.add(storageTransition);
            storageTransition = new LifecycleRule.StorageTransition();
            storageTransition.setStorageClass(StorageClass.Archive);
            storageTransition.setExpirationDays(30);
            storageTransitions.add(storageTransition);
            rule.setStorageTransition(storageTransitions);
            request.AddLifecycleRule(rule);

            // Transition objects last modified before October 12, 2022 to Archive Storage.
            rule = new LifecycleRule(ruleId5, matchPrefix5, LifecycleRule.RuleStatus.Enabled);
            storageTransitions = new ArrayList<LifecycleRule.StorageTransition>();
            storageTransition = new LifecycleRule.StorageTransition();

            storageTransition.setCreatedBeforeDate(DateUtil.parseIso8601Date("2022-10-12T00:00:00.000Z"));

            storageTransition.setStorageClass(StorageClass.Archive);
            storageTransitions.add(storageTransition);
            rule.setStorageTransition(storageTransitions);
            request.AddLifecycleRule(rule);

            // rule6 applies to versioning-enabled buckets.
            rule = new LifecycleRule(ruleId6, matchPrefix6, LifecycleRule.RuleStatus.Enabled);
            // Automatically transition objects to archived objects 365 days after their last modified time.
            storageTransitions = new ArrayList<LifecycleRule.StorageTransition>();
            storageTransition = new LifecycleRule.StorageTransition();
            storageTransition.setStorageClass(StorageClass.Archive);
            storageTransition.setExpirationDays(365);
            storageTransitions.add(storageTransition);
            rule.setStorageTransition(storageTransitions);
            // Automatically remove expired delete markers.
            rule.setExpiredDeleteMarker(true);
            // Transition non-current versions of objects to the Infrequent Access storage class 10 days after their last modified time.
            LifecycleRule.NoncurrentVersionStorageTransition noncurrentVersionStorageTransition =
                    new LifecycleRule.NoncurrentVersionStorageTransition().withNoncurrentDays(10).withStrorageClass(StorageClass.IA);
            // Transition non-current versions of objects to the Archive Storage storage class 20 days after their last modified time.
            LifecycleRule.NoncurrentVersionStorageTransition noncurrentVersionStorageTransition2 =
                    new LifecycleRule.NoncurrentVersionStorageTransition().withNoncurrentDays(20).withStrorageClass(StorageClass.Archive);
            // Delete non-current versions of objects after 30 days.
            LifecycleRule.NoncurrentVersionExpiration noncurrentVersionExpiration = new LifecycleRule.NoncurrentVersionExpiration().withNoncurrentDays(30);
            List<LifecycleRule.NoncurrentVersionStorageTransition> noncurrentVersionStorageTransitions = new ArrayList<LifecycleRule.NoncurrentVersionStorageTransition>();
            noncurrentVersionStorageTransitions.add(noncurrentVersionStorageTransition2);
            rule.setStorageTransition(storageTransitions);
            rule.setNoncurrentVersionExpiration(noncurrentVersionExpiration);
            rule.setNoncurrentVersionStorageTransitions(noncurrentVersionStorageTransitions);
            request.AddLifecycleRule(rule);

            // Initiate a request to set the lifecycle rule.
            ossClient.setBucketLifecycle(request);

            // View the lifecycle rule.
            List<LifecycleRule> listRules = ossClient.getBucketLifecycle(bucketName);
            for(LifecycleRule rules : listRules){
                System.out.println("ruleId="+rules.getId()+", matchPrefix="+rules.getPrefix());
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

### Use tags and prefixes for negative matching in a policy based on the last modified time

The following code shows how to use the Not element in the filter node to transition objects in the bucket named examplebucket to the Infrequent Access storage class 30 days after their last modified time. The rule applies to objects except for those that have the prefix logs/not-prefix or the tag with the key key1 and value value1.

**Note**

Only Java SDK 3.16.0 and later versions support the Not element.

```
import com.aliyun.oss.*;
import com.aliyun.oss.common.auth.*;
import com.aliyun.oss.common.comm.SignVersion;
import com.aliyun.oss.model.*;
import java.util.ArrayList;
import java.util.List;

public class Demo {

    public static void main(String[] args) throws Exception {
        // The China (Hangzhou) endpoint is used as an example. Replace it with the actual endpoint.
        String endpoint = "https://oss-cn-hangzhou.aliyuncs.com";
        // Obtain access credentials from environment variables. Before you run this sample code, make sure that the OSS_ACCESS_KEY_ID and OSS_ACCESS_KEY_SECRET environment variables are set.
        EnvironmentVariableCredentialsProvider credentialsProvider = CredentialsProviderFactory.newEnvironmentVariableCredentialsProvider();
        // Specify the bucket name, for example, examplebucket.
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
            String ruleId = "mtime transition1";
            String matchPrefix = "logs";

            SetBucketLifecycleRequest request = new SetBucketLifecycleRequest(bucketName);

            LifecycleFilter filter = new LifecycleFilter();
            LifecycleNot not = new LifecycleNot();
            Tag tag = new Tag("key1","value1");
            not.setPrefix("logs/not-prefix");
            not.setTag(tag);
            List<LifecycleNot> notList = new ArrayList<LifecycleNot>();
            notList.add(not);
            filter.setNotList(notList);

            List<LifecycleRule.StorageTransition> storageTransitions = new ArrayList<LifecycleRule.StorageTransition>();
            LifecycleRule.StorageTransition storageTransition = new LifecycleRule.StorageTransition();
            storageTransition.setStorageClass(StorageClass.IA);
            storageTransition.setExpirationDays(30);
            storageTransitions.add(storageTransition);

            LifecycleRule rule = new LifecycleRule(ruleId, matchPrefix, LifecycleRule.RuleStatus.Enabled);
            rule.setFilter(filter);
            rule.setStorageTransition(storageTransitions);
            request.AddLifecycleRule(rule);

            VoidResult result = ossClient.setBucketLifecycle(request);

            System.out.println("Return status code: "+result.getResponse().getStatusCode()+" set lifecycle succeed");
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

### Transition storage classes based on a last access time policy

The following code shows how to set a lifecycle rule for the bucket named examplebucket to transition storage classes based on the last access time.

```
import com.aliyun.oss.*;
import com.aliyun.oss.common.auth.*;
import com.aliyun.oss.common.comm.SignVersion;
import com.aliyun.oss.model.*;
import java.util.ArrayList;
import java.util.List;

public class Demo {

    public static void main(String[] args) throws Exception {
        // The China (Hangzhou) endpoint is used as an example. Replace it with the actual endpoint.
        String endpoint = "https://oss-cn-hangzhou.aliyuncs.com";
        // Obtain access credentials from environment variables. Before you run this sample code, make sure that the OSS_ACCESS_KEY_ID and OSS_ACCESS_KEY_SECRET environment variables are set.
        EnvironmentVariableCredentialsProvider credentialsProvider = CredentialsProviderFactory.newEnvironmentVariableCredentialsProvider();
        // Specify the bucket name, for example, examplebucket.
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
            ossClient.putBucketAccessMonitor(bucketName, AccessMonitor.AccessMonitorStatus.Enabled.toString());
            // Specify lifecycle rule 1. The rule specifies that all objects that have the prefix logs, and are 64 KB or smaller in size, are transitioned to the Infrequent Access storage class 30 days after their last access time. When these objects are accessed again, they remain in the Infrequent Access storage class.
            LifecycleRule lifecycleRule = new LifecycleRule("rule1", "logs", LifecycleRule.RuleStatus.Enabled);
            List<LifecycleRule> lifecycleRuleList = new ArrayList<LifecycleRule>();
            SetBucketLifecycleRequest setBucketLifecycleRequest = new SetBucketLifecycleRequest(bucketName);

            LifecycleRule.StorageTransition storageTransition = new LifecycleRule.StorageTransition();
            storageTransition.setStorageClass(StorageClass.IA);
            storageTransition.setExpirationDays(30);
            storageTransition.setIsAccessTime(true);
            storageTransition.setReturnToStdWhenVisit(false);
            storageTransition.setAllowSmallFile(true);
            List<LifecycleRule.StorageTransition> storageTransitionList = new ArrayList<LifecycleRule.StorageTransition>();
            storageTransitionList.add(storageTransition);
            lifecycleRule.setStorageTransition(storageTransitionList);
            lifecycleRuleList.add(lifecycleRule);
            
            // Specify lifecycle rule 2. The rule specifies that all non-current versions of objects that have the prefix dir, and are larger than 64 KB, are transitioned to the Infrequent Access storage class 10 days after their last access time. When these objects are accessed again, they are transitioned to the Standard storage class.
            LifecycleRule lifecycleRule2 = new LifecycleRule("rule2", "dir", LifecycleRule.RuleStatus.Enabled);
            LifecycleRule.NoncurrentVersionStorageTransition noncurrentVersionStorageTransition = new LifecycleRule.NoncurrentVersionStorageTransition();
            noncurrentVersionStorageTransition.setStorageClass(StorageClass.IA);
            noncurrentVersionStorageTransition.setNoncurrentDays(10);
            noncurrentVersionStorageTransition.setIsAccessTime(true);
            noncurrentVersionStorageTransition.setReturnToStdWhenVisit(true);
            noncurrentVersionStorageTransition.setAllowSmallFile(false);

            List<LifecycleRule.NoncurrentVersionStorageTransition> noncurrentVersionStorageTransitionList = new ArrayList<LifecycleRule.NoncurrentVersionStorageTransition>();
            noncurrentVersionStorageTransitionList.add(noncurrentVersionStorageTransition);
            lifecycleRule2.setNoncurrentVersionStorageTransitions(noncurrentVersionStorageTransitionList);
            lifecycleRuleList.add(lifecycleRule2);

            setBucketLifecycleRequest.setLifecycleRules(lifecycleRuleList);

            // Set the lifecycle rule.
            ossClient.setBucketLifecycle(setBucketLifecycleRequest);
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

## View lifecycle rules

The following code shows how to view the lifecycle rules for the bucket named examplebucket.

```
import com.aliyun.oss.*;
import com.aliyun.oss.common.auth.*;
import com.aliyun.oss.common.comm.SignVersion;
import com.aliyun.oss.model.LifecycleRule;
import java.util.List;

public class Demo {

    public static void main(String[] args) throws Exception {
        // The China (Hangzhou) endpoint is used as an example. Replace it with the actual endpoint.
        String endpoint = "https://oss-cn-hangzhou.aliyuncs.com";
        // Obtain access credentials from environment variables. Before you run this sample code, make sure that the OSS_ACCESS_KEY_ID and OSS_ACCESS_KEY_SECRET environment variables are set.
        EnvironmentVariableCredentialsProvider credentialsProvider = CredentialsProviderFactory.newEnvironmentVariableCredentialsProvider();
        // Specify the bucket name, for example, examplebucket.
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
            // Get the lifecycle rules.
            List<LifecycleRule> rules = ossClient.getBucketLifecycle(bucketName);

            // View the lifecycle rules.
            for (LifecycleRule r : rules) {
                System.out.println("================");

                // View the rule ID.
                System.out.println("rule id: " + r.getId());

                // View the rule status.
                System.out.println("rule status: " + r.getStatus());

                // View the rule prefix.
                System.out.println("rule prefix: " + r.getPrefix());

                // View the rule tags.
                if (r.hasTags()) {
                    System.out.println("rule tagging: "+ r.getTags().toString());
                }

                // View the expiration days rule.
                if (r.hasExpirationDays()) {
                    System.out.println("rule expiration days: " + r.getExpirationDays());
                }

                // View the expiration date rule.
                if (r.hasCreatedBeforeDate()) {
                    System.out.println("rule expiration create before days: " + r.getCreatedBeforeDate());
                }

                // View the rule for expiring parts.
                if(r.hasAbortMultipartUpload()) {
                    if(r.getAbortMultipartUpload().hasExpirationDays()) {
                        System.out.println("rule abort uppart days: " + r.getAbortMultipartUpload().getExpirationDays());
                    }

                    if (r.getAbortMultipartUpload().hasCreatedBeforeDate()) {
                        System.out.println("rule abort uppart create before date: " + r.getAbortMultipartUpload().getCreatedBeforeDate());
                    }
                }

                // View the storage class transition rule.
                if (r.getStorageTransition().size() > 0) {
                    for (LifecycleRule.StorageTransition transition : r.getStorageTransition()) {
                        if (transition.hasExpirationDays()) {
                            System.out.println("rule storage trans days: " + transition.getExpirationDays() +
                                    " trans storage class: " + transition.getStorageClass());
                        }

                        if (transition.hasCreatedBeforeDate()) {
                            System.out.println("rule storage trans before create date: " + transition.getCreatedBeforeDate());
                        }
                        // Check whether the lifecycle rule is configured based on the last access time. You can view this only in Java SDK 3.16.0 and later versions.
                        System.out.println("StorageTransition IsAccessTime: "+transition.getIsAccessTime());
                        // Check whether an object is transitioned to the Standard storage class upon next access after it is transitioned to the Infrequent Access storage class. You can view this only in Java SDK 3.16.0 and later versions.
                        System.out.println("StorageTransition ReturnToStdWhenVisit: "+transition.getReturnToStdWhenVisit());
                    }
                }

                // Check whether expired delete markers are automatically removed.
                if (r.hasExpiredDeleteMarker()) {
                    System.out.println("rule expired delete marker: " + r.getExpiredDeleteMarker());
                }

                // View the storage class transition rule for non-current versions of objects.
                if (r.hasNoncurrentVersionStorageTransitions()) {
                    for (LifecycleRule.NoncurrentVersionStorageTransition transition : r.getNoncurrentVersionStorageTransitions()) {
                        System.out.println("rule noncurrent versions trans days:" + transition.getNoncurrentDays() +
                                " trans storage class: " + transition.getStorageClass());
                        // View atime. Supported only in Java SDK 3.16.0 and later versions.
                        System.out.println("NoncurrentVersionStorageTransition IsAccessTime: "+transition.getIsAccessTime());
                        // View ReturnToStdWhenVisit. Supported only in Java SDK 3.16.0 and later versions.
                        System.out.println("NoncurrentVersionStorageTransition ReturnToStdWhenVisit: "+transition.getReturnToStdWhenVisit());
                    }
                }

                // View the expiration rule for non-current versions of objects.
                if (r.hasNoncurrentVersionExpiration()) {
                    System.out.println("rule noncurrent versions expiration days:" + r.getNoncurrentVersionExpiration().getNoncurrentDays());
                }
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

## Clear lifecycle rules

The following code shows how to clear all lifecycle rules for the bucket named examplebucket. To delete one or more lifecycle rules, see [How do I delete one or more lifecycle rules?](/help/en/oss/user-guide/lifecycle-rules-based-on-the-last-modified-time#80811cc9cawfo).

```
import com.aliyun.oss.*;
import com.aliyun.oss.common.auth.*;
import com.aliyun.oss.common.comm.SignVersion;

public class Demo {

    public static void main(String[] args) throws Exception {
        // The China (Hangzhou) endpoint is used as an example. Replace it with the actual endpoint.
        String endpoint = "https://oss-cn-hangzhou.aliyuncs.com";
        // Obtain access credentials from environment variables. Before you run this sample code, make sure that the OSS_ACCESS_KEY_ID and OSS_ACCESS_KEY_SECRET environment variables are set.
        EnvironmentVariableCredentialsProvider credentialsProvider = CredentialsProviderFactory.newEnvironmentVariableCredentialsProvider();
        // Specify the bucket name, for example, examplebucket.
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
            ossClient.deleteBucketLifecycle(bucketName);
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

-   For the complete sample code for lifecycle rules, see [GitHub examples](https://github.com/aliyun/aliyun-oss-java-sdk/blob/master/src/samples/BucketOperationsSample.java).
    
-   For more information about the API operation for setting lifecycle rules, see [PutBucketLifecycle](/help/en/oss/developer-reference/putbucketlifecycle#reference-xlw-dbv-tdb).
    
-   For more information about the API operation for viewing lifecycle rules, see [GetBucketLifecycle](/help/en/oss/developer-reference/getbucketlifecycle#reference-zq5-grw-tdb).
    
-   For more information about the API operation for clearing lifecycle rules, see [DeleteBucketLifecycle](/help/en/oss/developer-reference/deletebucketlifecycle#reference-wl1-xsw-tdb).
