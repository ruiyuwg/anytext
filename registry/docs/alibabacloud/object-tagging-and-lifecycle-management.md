A lifecycle rule can apply to objects based on a prefix, object tags, or both.

## Precautions

-   In this topic, the public endpoint of the China (Hangzhou) region is used. To access OSS from other Alibaba Cloud services in the same region, use an internal endpoint. For details about supported regions and endpoints, see [OSS regions and endpoints](/help/en/oss/user-guide/regions-and-endpoints#concept-zt4-cvy-5db).
    
-   In this topic, access credentials are obtained from environment variables. For more information about how to configure access credentials, see [Configure access credentials](/help/en/oss/developer-reference/oss-java-configure-access-credentials#main-2350752).
    
-   In this topic, an OSSClient instance is created by using an OSS endpoint. If you want to create an OSSClient instance by using custom domain names or Security Token Service (STS), see [Configuration examples for common scenarios](/help/en/oss/developer-reference/initialization-3#section-ngr-tjb-kfb).
    
-   For a tag condition, both the tag key and value must match. If a rule includes a prefix and multiple object tags, the rule applies only to objects that match the prefix and all specified object tags.
    

## Add a tag-based matching rule to a lifecycle rule

The following code shows how to add a tag-based matching rule to a lifecycle rule:

```
import com.aliyun.oss.ClientException;
import com.aliyun.oss.OSS;
import com.aliyun.oss.common.auth.*;
import com.aliyun.oss.OSSClientBuilder;
import com.aliyun.oss.OSSException;
import com.aliyun.oss.common.utils.DateUtil;
import com.aliyun.oss.model.LifecycleRule;
import com.aliyun.oss.model.SetBucketLifecycleRequest;
import java.util.HashMap;
import java.util.Map;

public class Demo {
    public static void main(String[] args) throws Throwable {
        // The China (Hangzhou) endpoint is used as an example. Specify the actual endpoint.
        String endpoint = "https://oss-cn-hangzhou.aliyuncs.com";
        // Obtain access credentials from environment variables. Before you run this sample code, make sure that the OSS_ACCESS_KEY_ID and OSS_ACCESS_KEY_SECRET environment variables are set.
        EnvironmentVariableCredentialsProvider credentialsProvider = CredentialsProviderFactory.newEnvironmentVariableCredentialsProvider();
        // Specify the bucket name. For example, examplebucket.
        String bucketName = "examplebucket";
        // Specify the region where the bucket is located. For example, if the bucket is in the China (Hangzhou) region, set Region to cn-hangzhou.
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

            // Set the rule ID, file prefix, and tags.
            String ruleId0 = "rule0";
            String matchPrefix0 = "A0/";
            Map<String, String> matchTags0 = new HashMap<String, String>();
            matchTags0.put("key0", "value0");


            String ruleId1 = "rule1";
            String matchPrefix1 = "A1/";
            Map<String, String> matchTags1 = new HashMap<String, String>();
            matchTags1.put("key1", "value1");


            String ruleId2 = "rule2";
            String matchPrefix2 = "A2/";

            String ruleId3 = "rule3";
            String matchPrefix3 = "A3/";

            // Expire objects 3 days after they are last modified.
            LifecycleRule rule = new LifecycleRule(ruleId0, matchPrefix0, LifecycleRule.RuleStatus.Enabled, 3);
            rule.setTags(matchTags0);
            request.AddLifecycleRule(rule);

            // Expire objects created before the specified date.
            rule = new LifecycleRule(ruleId1, matchPrefix1, LifecycleRule.RuleStatus.Enabled);
            rule.setCreatedBeforeDate(DateUtil.parseIso8601Date("2022-10-12T00:00:00.000Z"));
            rule.setTags(matchTags1);
            request.AddLifecycleRule(rule);

            // Expire multipart upload parts after 3 days.
            rule = new LifecycleRule(ruleId2, matchPrefix2, LifecycleRule.RuleStatus.Enabled);
            LifecycleRule.AbortMultipartUpload abortMultipartUpload = new LifecycleRule.AbortMultipartUpload();
            abortMultipartUpload.setExpirationDays(3);
            rule.setAbortMultipartUpload(abortMultipartUpload);
            request.AddLifecycleRule(rule);

            // Expire multipart upload parts created before the specified date.
            rule = new LifecycleRule(ruleId3, matchPrefix3, LifecycleRule.RuleStatus.Enabled);
            abortMultipartUpload = new LifecycleRule.AbortMultipartUpload();
            abortMultipartUpload.setCreatedBeforeDate(DateUtil.parseIso8601Date("2022-10-12T00:00:00.000Z"));
            rule.setAbortMultipartUpload(abortMultipartUpload);
            request.AddLifecycleRule(rule);

            ossClient.setBucketLifecycle(request);
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

## View tag information in a lifecycle rule

The following code shows how to view the tag information in a lifecycle rule:

```
import com.aliyun.oss.ClientException;
import com.aliyun.oss.OSS;
import com.aliyun.oss.common.auth.*;
import com.aliyun.oss.OSSClientBuilder;
import com.aliyun.oss.OSSException;
import com.aliyun.oss.model.LifecycleRule;
import java.util.List;

public class Demo {
    public static void main(String[] args) throws Throwable {
        // The China (Hangzhou) endpoint is used as an example. Specify the actual endpoint.
        String endpoint = "https://oss-cn-hangzhou.aliyuncs.com";
        // Obtain access credentials from environment variables. Before you run this sample code, make sure that the OSS_ACCESS_KEY_ID and OSS_ACCESS_KEY_SECRET environment variables are set.
        EnvironmentVariableCredentialsProvider credentialsProvider = CredentialsProviderFactory.newEnvironmentVariableCredentialsProvider();
        // Specify the bucket name. For example, examplebucket.
        String bucketName = "examplebucket";
        // Specify the region where the bucket is located. For example, if the bucket is in the China (Hangzhou) region, set Region to cn-hangzhou.
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
            for (LifecycleRule rule1 : rules) {
                // View the rule ID.
                System.out.println("Rule ID: " + rule1.getId());

                // View the rule prefix.
                System.out.println("Rule prefix: " + rule1.getPrefix());

                // View the rule tags.
                if (rule1.hasTags()) {
                    System.out.println("Rule tagging: "+ rule1.getTags().toString());
                }

                //View the expiration days rule.
                if (rule1.hasExpirationDays()) {
                    System.out.println("Rule expiration days: " + rule1.getExpirationDays());
                }

                //View the expiration date rule.
                if (rule1.hasCreatedBeforeDate()) {
                    System.out.println("Rule expiration created before date: " + rule1.getCreatedBeforeDate());
                }

                //View the rule for expiring multipart upload parts.
                if(rule1.hasAbortMultipartUpload()) {
                    if(rule1.getAbortMultipartUpload().hasExpirationDays()) {
                        System.out.println("Rule abort multipart upload days: " + rule1.getAbortMultipartUpload().getExpirationDays());
                    }

                    if (rule1.getAbortMultipartUpload().hasCreatedBeforeDate()) {
                        System.out.println("Rule abort multipart upload created before date: " + rule1.getAbortMultipartUpload().getCreatedBeforeDate());
                    }
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
