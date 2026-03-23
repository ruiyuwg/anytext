Based on your business requirements, you may need to retain some infrequently accessed data in your Object Storage Service (OSS) bucket for a long period of time for compliance or archiving requirements, or delete data that is no longer needed in batches. You can configure lifecycle rules based on the last modified time to move cold data into an appropriate storage class or delete objects to reduce storage costs.

## Scenarios

-   A medical institution stores medical records in OSS. These objects are occasionally accessed within six months after they are uploaded, and almost never after that. In this case, the data manager can configure a lifecycle rule to convert the storage class of the objects to Archive 180 days after they are uploaded.
    

-   A company stores the call records of its customer service hotline in OSS. These objects are frequently accessed within the first two months, occasionally after two months, and almost never after six months. Two years later, the objects no longer need to be stored. In this case, the data manager can configure a lifecycle rule to convert the storage class of these objects to Infrequent Access (IA) 60 days after they are uploaded and to Archive 180 days after they are uploaded, and then delete these objects 730 days after they are uploaded.
    
-   You can configure a lifecycle rule to delete all objects in the bucket the next day.
    

For more information about storage classes, see [Storage classes](/help/en/oss/user-guide/overview-53/).

## Limitations

### Match conditions

Lifecycle rules support matching only based on prefixes and tags. Wildcard matching, suffix matching, and regular expression matching are not supported.

### Part lifecycle

You cannot configure two or more lifecycle rules that contain a part lifecycle policy for objects whose names have overlapping prefixes. Examples:

-   Example 1
    
    If you configure a lifecycle rule that contains a part policy for a bucket, you cannot configure another lifecycle rule that contains a part policy for any objects in the bucket.
    
-   Example 2
    
    If you configure a lifecycle rule that contains a part policy for objects whose names contain the dir1 prefix in a bucket, you cannot configure another lifecycle rule that contains a part policy for objects whose names contain overlapping prefixes, such as dir1/dir2.
    

### Storage class transition

-   Lifecycle rules cannot transition Appendable objects to the Cold Archive or Deep Cold Archive storage classes. To transition an Appendable object, you must first convert it to a Normal object by calling the [SealAppendObject](/help/en/oss/developer-reference/sealappendobject) operation, after which a lifecycle rule can be applied.
    
-   Lifecycle rules cannot be used to transition symbolic links to the Infrequent Access (IA), Archive, Cold Archive, or Deep Cold Archive storage classes.
    

## Usage notes

### **Number of lifecycle rules**

A bucket can have up to 1,000 lifecycle rules. A lifecycle rule can contain both policies based on the last modified time and policies based on the last access time.

### **Overwrite semantics**

The PutBucketLifecycle operation overwrites the existing configurations of a lifecycle rule of a bucket. For example, if a lifecycle rule named Rule1 is configured for a bucket and you want to configure another lifecycle rule named Rule2 for the bucket, perform the following operations:

-   Query Rule1.
    
-   Add both Rule1 and Rule2.
    
-   Update the lifecycle configuration with Rule1 and Rule2.
    

### **Effective time**

OSS loads a lifecycle rule within 24 hours after the rule is created. After the lifecycle rule is loaded, OSS runs the rule every day at 08:00:00 (UTC+8).

To qualify for a lifecycle rule based on the number of days, the interval between the last modified time of an object and the rule's evaluation time must exceed 24 hours. For example, if you configure a lifecycle rule for a bucket to delete objects one day after they are uploaded, objects uploaded on July 20, 2020 are deleted on a different date based on the specific time when the objects are uploaded.

-   Objects uploaded before 08:00:00 (UTC+8) on July 20, 2020 are deleted from 08:00:00 (UTC+8) on July 21, 2020 to 08:00:00 (UTC+8) on July 22, 2020.
    
-   Objects uploaded after 08:00:00 (UTC+8) on July 20, 2020 are deleted from 08:00:00 (UTC+8) on July 22, 2020 to 08:00:00 (UTC+8) on July 23, 2020.
    

When you update a lifecycle rule, tasks that are scheduled to be performed based on the rule on the current day may be suspended. We recommend that you do not frequently update lifecycle rules.

### **Completion time**

-   After a lifecycle rule takes effect, operations such as object deletions, storage class transitions, and part expiration are typically completed within 24 hours. However, the object count threshold varies by region. In the China (Hangzhou), China (Shanghai), China (Beijing), China (Zhangjiakou), China (Ulanqab), China (Shenzhen), and Singapore regions, this applies to workloads of up to 1 billion objects. In all other regions, it applies to workloads of up to 100 million objects.
    
-   Under certain conditions, task execution can be significantly delayed, extending beyond 24 hours to several days or weeks. This is typically caused by a heavy workload, including factors such as an excessive number of objects to scan or process, a high number of tags, numerous object versions, or a high volume of new writes during the task's execution.
    
    **Note**
    
    If versioning is enabled for a bucket, a lifecycle management action on each object version in the bucket is counted towards the applicable limit.
    

### **Billing rules**

If you use lifecycle rules to convert object storage classes or delete objects, you may be charged request fees and storage fees. For more information, see [Fees related to lifecycle rules](/help/en/oss/user-guide/fees-related-to-lifecycle-rules#concept-2207935).

### **Lifecycle rules for a bucket for which OSS-HDFS is enabled**

-   Lifecycle rules for OSS objects
    
    To configure or modify a lifecycle rule based on the last modified time to match all objects in a bucket for which OSS-HDFS is enabled, use the NOT element to exclude the objects that are stored in the `.dlsdata/` directory. This prevents lifecycle rule-triggered object deletion or storage class conversion actions from applying to OSS-HDFS data and consequently affecting read and write operations on OSS-HDFS data.
    
    ![p571593..jpeg](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/8629435861/p669326.jpeg)
    
-   Lifecycle rules for Hadoop Distributed File System (HDFS) files
    
    For example, you want to store frequently accessed objects in the Standard storage class and infrequently accessed objects in the IA, Archive, or Cold Archive storage class. In this case, you can configure a lifecycle rule to use the automatic storage tiering feature. For more information, see [Automatic storage tiering of OSS-HDFS](/help/en/oss/user-guide/enable-the-automatic-storage-tiering-feature-for-the-oss-hdfs-service).
    

## Lifecycle rule elements

### **Match conditions**

-   Match by prefix: Objects and parts are matched by prefix. You can create multiple lifecycle rules to specify different prefixes. Each prefix must be unique. The naming rules for prefixes are the same as those for objects. For more information, see [Object](/help/en/oss/terms-2#section-ihw-kmt-tdb).
    
-   Match by tag: Objects are matched by tag key and tag value. You can specify multiple tags in a single lifecycle rule. The lifecycle rule only applies to objects that have all the specified tags.
    
    **Tag filters specified for the lifecycle rule**
    
    **Tags of the object**
    
    **Whether the lifecycle rule applies to the object**
    
    a:1, b:2
    
    a:1
    
    No
    
    a:1,b:3
    
    No
    
    a:1, b:2
    
    Yes
    
    a:1, b:2, c:3
    
    Yes
    
    **Note**
    
    OSS lifecycle rules cannot match parts by tag.
    
-   Match by prefix and tag: Objects are matched by prefix and tag.
    
-   Match by bucket: All objects and parts that are stored in a bucket are matched.
    
-   NOT element: The NOT element specifies the name prefix and tag of objects for which you do not want a specific lifecycle rule to take effect. For more information about how to configure the NOT element, see [NOT](#section-l72-nys-r4j).
    
    **Important**
    
    -   You can configure multiple `NOT` elements for a lifecycle rule. However, this feature is in invitational preview. Contact [technical support](https://smartservice.console.alibabacloud.com/#/ticket/createIndex) to apply for use.
        
    -   The total number of `NOT` elements per bucket is limited to 1,000. The number of `NOT` elements per rule is limited to 100. The total number of `Prefix` elements across all rules in a bucket is limited to 2,000.
        
    -   After you configure a lifecycle rule with multiple `NOT` elements, use the console for all subsequent lifecycle rule management.
        
    

### **Validity period or expiration date of objects and actions on expired objects**

-   Validity period: Specify a validity period for objects in unversioned buckets and the current versions of objects in versioned buckets. Specify the action that you want OSS to perform on the objects after they expire. Objects that match a specific lifecycle rule are retained for the specified validity period after the objects are last modified. The specified action is performed on these objects after they expire.
    
-   Expiration date: Specify an expiration date for objects in unversioned buckets and the current versions of objects in versioned buckets. Specify the action that you want OSS to perform on these objects after they expire. All objects that are last modified before this date expire, and the specified action is performed on these objects after they expire.
    
-   Validity period of the previous versions of objects: Specify a validity period for previous versions of objects and the action that you want OSS to perform on the previous versions after they expire. Objects that match a specific lifecycle rule are retained for the specified validity period after the objects become previous versions. The specified action is performed on these objects after they expire.
    

You can configure lifecycle rules to convert the storage class of expired objects or delete expired objects. For more information, see [Configuration elements](/help/en/oss/user-guide/configuration-elements#concept-262491).

### **Validity period or expiration date of parts and actions on expired parts**

-   Validity period: Specify a validity period for parts. Parts that match a specific lifecycle rule are retained within the specified validity period and deleted after the parts expire.
    
-   Expiration date: Specify an expiration date for parts. Parts that are last modified before the expiration date are deleted.
    

## Matching logic

### **Different prefixes**

For example, the following objects are stored in a bucket:

```
logs/programl/log1.txt
logs/program2/log2.txt
logs/program3/log3.txt
doc/readme.txt
```

If the prefix specified in a lifecycle rule is logs/, the lifecycle rule takes effect for the first three objects whose names contain the logs/ prefix. If the prefix specified in a lifecycle rule is doc/readme.txt, the lifecycle rule takes effect only for doc/readme.txt.

**Note**

A prefix can start with Chinese characters.

When the GetObject or HeadObject operation is performed on an object that matches a lifecycle rule, the `x-oss-expiration` header is included in the response. The header contains two parameters: `expiry-date` that indicates the expiration date of the object, and `rule-id` that indicates the ID of the matched lifecycle rule.

### **Same prefixes and tags specified in multiple lifecycle rules**

When objects that have the same name prefixes and tags match multiple lifecycle rules at the same time, lifecycle rules that are configured to delete objects take precedence over lifecycle rules that are configured to convert the storage class of objects. For example, both rule1 and rule2 described in the following table take effect for objects whose names contain the abc prefix and that have the a=1 tag. rule1 is configured to delete matched objects 20 days after they are last modified. rule2 is configured to convert the storage class of matched objects to Archive 20 days after they are last modified. If rule1 and rule2 are configured for a bucket at the same time, rule2 does not take effect.

**rule**

**prefix**

**tag**

**action**

rule1

abc

a=1

Delete matched objects 20 days after they are last modified.

rule2

abc

a=1

Convert the storage class of matched objects to Archive 20 days after they are last modified.

### **Overlapping prefixes and the same tags specified in multiple lifecycle rules**

For example, rule1 described in the following table converts the storage class of objects that have the a=1 tag to IA 10 days after they are last modified. rule2 described in the following table deletes objects whose names contain the abc prefix and that have the a=1 tag 120 days after they are last modified.

**rule**

**prefix**

**tag**

**action**

rule1

\-

a=1

Convert the storage class of matched objects to IA 10 days after they are last modified.

rule2

abc

a=1

Delete matched objects 120 days after they are last modified.

rule3 described in the following table converts the storage class of objects that have the a=1 tag to Archive 20 days after they are last modified. rule4 described in the following table converts the storage class of objects whose names contain the abc prefix and that have the a=1 tag to IA 30 days after they are last modified. If rule3 and rule4 are configured for a bucket at the same time, the storage class of objects whose names contain the abc prefix and that have the a=1 tag is converted to Archive 20 days after they are last modified based on rule3. Archive objects cannot be converted to IA objects. Therefore, rule4 does not take effect.

**rule**

**prefix**

**tag**

**action**

rule3

\-

a=1

Convert the storage class of matched objects to Archive 20 days after they are last modified.

rule4

abc

a=1

Convert the storage class of matched objects to IA 30 days after they are last modified.

### **NOT**

If you configure multiple lifecycle rules for a bucket and one of the lifecycle rules contains the NOT element, the actions specified by the rule that contains the NOT element are performed only on objects that match the rule. Examples:

-   Example 1
    
    -   A lifecycle rule is configured to delete objects whose names contain the dir/ prefix in the examplebucket bucket 100 days after the objects are last modified.
        
    -   Another lifecycle rule that contains the NOT element is configured to delete all objects whose names do not contain the dir/ prefix in the examplebucket bucket 50 days after the objects are last modified.
        
    
    The following table describes the actions on the objects after the preceding lifecycle rules are applied.
    
    **Object**
    
    **Action**
    
    Objects whose names contain the dir/ prefix
    
    Delete matched objects 100 days after they are last modified.
    
    Objects whose names do not contain the dir/ prefix
    
    Delete matched objects 50 days after they are last modified.
    
-   Example 2
    
    -   A lifecycle rule that contains the NOT element is configured to delete all objects that do not have TagA (key1:value1) in the examplebucket bucket 30 days after the objects are last modified.
        
    -   Another lifecycle rule is configured to delete objects that have TagB (key2:value2) in the examplebucket bucket 50 days after the objects are last modified.
        
    
    The following table describes the actions on the objects after the preceding lifecycle rules are applied.
    
    **Object**
    
    **Action**
    
    All objects that do not have TagA or TagB
    
    Delete matched objects 30 days after they are last modified.
    
    Objects that have only TagA
    
    Do not delete matched objects.
    
    Objects that have only TagB
    
    Delete matched objects 30 days after they are last modified.
    
    Objects that have TagA and TagB
    
    Delete matched objects 50 days after they are last modified.
    

## **Methods**

### **Use the OSS console**

1.  Log on to the [OSS console](https://oss.console.alibabacloud.com/).
    
2.  In the left-side navigation pane, click **Buckets**. On the Buckets page, find and click the desired bucket.
    
3.  In the left-side navigation tree, choose **Data Management** > **Lifecycle**.
    
4.  On the **Lifecycle** page, click **Create Rule**.
    
    **Note**
    
    If you want to create a lifecycle rule based on the last modified time, you do not need to turn on **Enable Access Tracking** on the **Lifecycle** page. You are charged additional fees for access tracking. To create a lifecycle rule based on the last access time, you must enable access tracking. For more information, see [Lifecycle rules based on last access time](/help/en/oss/user-guide/lifecycle-rules-based-on-the-last-access-time#concept-2116588).
    
5.  In the **Create Rule** panel, configure parameters. The following table describes the parameters.
    
    -   Unversioned bucket
        
        **Section**
        
        **Parameter**
        
        **Description**
        
        **Basic Settings**
        
        **Status**
        
        Specify the status of the lifecycle rule. You can select **Enabled** or **Disabled**.
        
        -   After a lifecycle rule is enabled, the storage class of objects is converted or objects are deleted based on the lifecycle rule.
            
        -   After you disable a lifecycle rule, the lifecycle tasks of the lifecycle rule are interrupted.
            
        
        **Applied To**
        
        Specify the objects for which you want the lifecycle rule to take effect. You can select **Objects with Specified Prefix** or **Whole Bucket**.
        
        **Note**
        
        If you select Objects with Specified Prefix, you must specify a full prefix. For example, if you want to apply the lifecycle rule to objects whose names contain the src/dir1 prefix, enter src/dir1. If you enter only dir1, the lifecycle rule does not produce the effect that you want.
        
        **Allow Overlapped Prefixes**
        
        Specify whether to allow prefixes that overlap. By default, OSS checks whether the prefixes of each lifecycle rule overlap. For example, if the bucket has an existing lifecycle rule (Rule 1) and you want to configure another lifecycle rule (Rule 2) that contains an overlapping prefix:
        
        -   Rule 1
            
            Delete all objects whose names contain the dir1/ prefix in the bucket 180 days after the objects are last modified.
            
        -   Rule 2
            
            Convert the storage class of all objects whose names contain the dir1/dir2/ prefix in the bucket to IA 30 days after the objects are last modified and delete the objects 60 days after they are last modified.
            
        
        If you do not select this check box, OSS detects that objects in the dir1/dir2/ directory match two lifecycle rules, rejects the creation of Rule 2, and returns the Overlap for same action type Expiration. error message.
        
        If you select this check box, Rule 2 is created to convert the storage class of the objects in the dir1/dir2/ directory to IA 30 days after the objects are last modified and delete them 60 days after they are last modified. Other objects in the dir1/ directory are deleted 180 days after the objects are last modified.
        
        **Note**
        
        If a bucket has multiple lifecycle rules, one of which applies to the whole bucket, the lifecycle rules have overlapping prefixes.
        
        **Prefix**
        
        Specify the prefix in the names of objects for which you want the lifecycle rule to take effect.
        
        -   If you set the prefix to img, all objects whose names contain the img prefix, such as imgtest.png and img/example.jpg, match the lifecycle rule.
            
        -   If you set the prefix to img/, all objects whose names contain the img/ prefix, such as img/example.jpg and img/test.jpg, match the lifecycle rule.
            
        
        **Tag**
        
        Specify tags. The rule takes effect only for objects that have the specified tags.
        
        -   For example, if you specify a tag in a lifecycle rule and does not specify a prefix in the lifecycle rule, the lifecycle rule applies to all objects who have the tag in the bucket.
            
        -   If you specify the a=1 tag and the img prefix in a lifecycle rule, the lifecycle rule applies to all objects that have the img prefix in their object names and have the a=1 tag in the bucket.
            
        
        For more information, see [Tag objects](/help/en/oss/user-guide/object-tagging-8#concept-zxf-jpy-pgb).
        
        **NOT**
        
        Specify that the lifecycle rule does not take effect for the objects that have the specified name prefix and tag.
        
        **Important**
        
        -   If you turn on NOT, at least one of the Prefix and Tag parameters must be specified for the lifecycle rule.
            
        -   The key of the tag specified for the NOT parameter cannot be the same as the key specified for the **Tag** parameter.
            
        -   If you turn on NOT, you cannot include a part policy in the lifecycle rule.
            
        
        **Object Size**
        
        Specify the size of objects for which the lifecycle rule takes effect.
        
        -   **Minimum Size**: Specify that the lifecycle rule takes effect only for objects whose sizes are greater than the specified size. You can specify a minimum object size that is greater than 0 B and less than 5 TB.
            
        -   **Maximum Size**: Specify that the lifecycle rule takes effect only for objects whose sizes are smaller than the specified size. You can specify a maximum object size that is greater than 0 B and less than or equal to 5 TB.
            
        
        **Important**
        
        If you specify a minimum object size and a maximum object size in the same lifecycle rule, take note of the following items:
        
        -   The maximum object size must be greater than the minimum object size.
            
        -   You cannot include a part policy in the lifecycle rule.
            
        -   You cannot include a policy to remove delete markers.
            
        
        **Policy for Objects**
        
        **Object Lifecycle**
        
        Specify an object expiration policy. You can select **Validity Period (Days)**, **Expiration Date**, or **Disabled**. If you select **Disabled**, no object expiration policy is configured.
        
        **Lifecycle-based Rules**
        
        Configure the lifecycle rule to convert the storage class of objects or delete expired objects. You can select **IA**, **Archive**, **Cold Archive**, **Deep Cold Archive**, or **Delete Objects (Cannot Be Recovered)**.
        
        For example, you select **Expiration Date** for **Object Lifecycle**, specify September 24, 2023 as the expiration date, and specify Delete Objects (Cannot Be Recovered). In this case, objects that are last modified before September 24, 2023 are automatically deleted and cannot be recovered.
        
        **Policy for Parts**
        
        **Part Lifecycle**
        
        Specify a part policy. If you configure the **Tag** parameter, this parameter is unavailable. You can select **Validity Period (Days)**, **Expiration Date**, or **Disabled**. If you select **Disabled**, no part policy is configured.
        
        **Important**
        
        A lifecycle rule must contain at least one of the object expiration policies and part expiration policies.
        
        **Rules for Parts**
        
        Specify when parts expire. You can specify a validity period or expiration date. Expired parts are automatically deleted and cannot be recovered.
        
    -   Versioned bucket
        
        Configure the parameters in the **Basic Settings** and **Policy for Parts** sections in the same way you configure the parameters for an unversioned bucket. The following table describes only the parameters that are different from the parameters that you configure for an unversioned bucket.
        
        **Important**
        
        Before you configure a lifecycle rule, be aware of the following:
        
        If your bucket has versioning enabled and is the destination for Cross-Region Replication (CRR), delete markers replicated from the source bucket will cause objects with the same name in this bucket to become previous versions.
        
        Therefore, configure any lifecycle rules that clean up previous versions with extreme caution to avoid unintended data loss in the destination bucket.
        
        **Section**
        
        **Parameter**
        
        **Description**
        
        **Policy for Current Versions**
        
        **Removal of Delete Marker**
        
        If the bucket is versioned, the **Removal of Delete Marker** option is added to the Object Lifecycle parameter. Other parameters are the same as those you can configure for an unversioned bucket.
        
        If you select Removal of Delete Marker, and an object has only one version, which is a delete marker, OSS considers the delete marker expired and removes the delete marker. If an object has multiple versions and the current version of the object is a delete marker, OSS retains the delete marker. For more information about delete markers, see [Delete marker](/help/en/oss/user-guide/delete-marker#concept-azw-shj-dgb).
        
        **Important**
        
        If a matched object has previous versions, the lifecycle rule does not remove the delete marker of the object. We recommend that you remove previous object versions that you no longer need and delete markers to prevent a listing performance decline due to a large number of delete markers.
        
        **Policy for Previous Versions**
        
        **Object Lifecycle**
        
        Specify the time when previous versions expire. You can select **Validity Period (Days)** or **Disabled**. If you select **Disabled**, no object policy is configured.
        
        **Lifecycle-based Rules**
        
        Specify the number of days for which objects can be retained after they become previous versions. After they expire, the specified actions are performed on the previous versions the next day. For example, if you set the Validity Period (Days) parameter to 30, objects that become previous versions on September 1, 2023 are moved to the specified storage class or deleted on October 1, 2023.
        
        **Important**
        
        You can determine when an object becomes a previous version based on the time when the later version is generated.
        
    
6.  Click **OK**.
    
    After the lifecycle rule is created, you can view the rule in the lifecycle rule list.
    

### **Use OSS SDKs**

The following sample code provides examples on how to configure lifecycle rules by using OSS SDKs for common programming languages. For more information about the sample code for configuring lifecycle rules by using OSS SDKs for other programming languages, see [Overview](/help/en/oss/developer-reference/overview-21#concept-dcn-tp1-kfb).

## Java

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
        // In this example, the endpoint of the China (Hangzhou) region is used. Specify your actual endpoint. 
        String endpoint = "https://oss-cn-hangzhou.aliyuncs.com";
        // Obtain access credentials from environment variables. Before you run the sample code, make sure that the OSS_ACCESS_KEY_ID and OSS_ACCESS_KEY_SECRET environment variables are configured. 
        EnvironmentVariableCredentialsProvider credentialsProvider = CredentialsProviderFactory.newEnvironmentVariableCredentialsProvider();
        // Specify the name of the bucket. Example: examplebucket. 
        String bucketName = "examplebucket";
        // Specify the region in which the bucket is located. For example, if the bucket is located in the China (Hangzhou) region, set the region to cn-hangzhou.
        String region = "cn-hangzhou";

        // Create an OSSClient instance. 
        // Call the shutdown method to release resources when the OSSClient is no longer in use.
        ClientBuilderConfiguration clientBuilderConfiguration = new ClientBuilderConfiguration();
        clientBuilderConfiguration.setSignatureVersion(SignVersion.V4);        
        OSS ossClient = OSSClientBuilder.create()
        .endpoint(endpoint)
        .credentialsProvider(credentialsProvider)
        .clientConfiguration(clientBuilderConfiguration)
        .region(region)               
        .build();

        try {
            // Create a request by using SetBucketLifecycleRequest. 
            SetBucketLifecycleRequest request = new SetBucketLifecycleRequest(bucketName);

            // Specify the ID of the lifecycle rule. 
            String ruleId0 = "rule0";
            // Specify the prefix that you want the lifecycle rule to match. 
            String matchPrefix0 = "A0/";
            // Specify the tag that you want the lifecycle rule to match. 
            Map<String, String> matchTags0 = new HashMap<String, String>();
            // Specify the key and value of the tag. In the example, the key is set to owner and the value is set to John. 
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

            // Set the expiration time to three days after the last modified time. 
            LifecycleRule rule = new LifecycleRule(ruleId0, matchPrefix0, LifecycleRule.RuleStatus.Enabled, 3);
            rule.setTags(matchTags0);
            request.AddLifecycleRule(rule);

            // Specify that objects that are created before the specified date expire. 
            rule = new LifecycleRule(ruleId1, matchPrefix1, LifecycleRule.RuleStatus.Enabled);
            rule.setCreatedBeforeDate(DateUtil.parseIso8601Date("2022-10-12T00:00:00.000Z"));
            rule.setTags(matchTags1);
            request.AddLifecycleRule(rule);

            // Specify that parts expire three days after they are last modified. 
            rule = new LifecycleRule(ruleId2, matchPrefix2, LifecycleRule.RuleStatus.Enabled);
            LifecycleRule.AbortMultipartUpload abortMultipartUpload = new LifecycleRule.AbortMultipartUpload();
            abortMultipartUpload.setExpirationDays(3);
            rule.setAbortMultipartUpload(abortMultipartUpload);
            request.AddLifecycleRule(rule);

            // Specify that parts that are created before the specific date expire. 
            rule = new LifecycleRule(ruleId3, matchPrefix3, LifecycleRule.RuleStatus.Enabled);
            abortMultipartUpload = new LifecycleRule.AbortMultipartUpload();
            abortMultipartUpload.setCreatedBeforeDate(DateUtil.parseIso8601Date("2022-10-12T00:00:00.000Z"));
            rule.setAbortMultipartUpload(abortMultipartUpload);
            request.AddLifecycleRule(rule);

            // Specify that the storage classes of objects are changed to IA 10 days after they are last modified, and to Archive 30 days after they are last modified. 
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

            // Specify that the storage classes of objects that are last modified before October 12, 2022 are changed to Archive. 
            rule = new LifecycleRule(ruleId5, matchPrefix5, LifecycleRule.RuleStatus.Enabled);
            storageTransitions = new ArrayList<LifecycleRule.StorageTransition>();
            storageTransition = new LifecycleRule.StorageTransition();

            storageTransition.setCreatedBeforeDate(DateUtil.parseIso8601Date("2022-10-12T00:00:00.000Z"));

            storageTransition.setStorageClass(StorageClass.Archive);
            storageTransitions.add(storageTransition);
            rule.setStorageTransition(storageTransitions);
            request.AddLifecycleRule(rule);

            // Specify that rule6 is configured for versioning-enabled buckets. 
            rule = new LifecycleRule(ruleId6, matchPrefix6, LifecycleRule.RuleStatus.Enabled);
            // Specify that the storage classes of objects are changed to Archive 365 days after the objects are last modified. 
            storageTransitions = new ArrayList<LifecycleRule.StorageTransition>();
            storageTransition = new LifecycleRule.StorageTransition();
            storageTransition.setStorageClass(StorageClass.Archive);
            storageTransition.setExpirationDays(365);
            storageTransitions.add(storageTransition);
            rule.setStorageTransition(storageTransitions);
            // Configure the lifecycle rule to automatically delete expired delete markers. 
            rule.setExpiredDeleteMarker(true);
            // Specify that the storage classes of the previous versions of objects are changed to IA 10 days after the objects are last modified. 
            LifecycleRule.NoncurrentVersionStorageTransition noncurrentVersionStorageTransition =
                    new LifecycleRule.NoncurrentVersionStorageTransition().withNoncurrentDays(10).withStrorageClass(StorageClass.IA);
            // Specify that the storage classes of the previous versions of objects are changed to Archive 20 days after the objects are last modified. 
            LifecycleRule.NoncurrentVersionStorageTransition noncurrentVersionStorageTransition2 =
                    new LifecycleRule.NoncurrentVersionStorageTransition().withNoncurrentDays(20).withStrorageClass(StorageClass.Archive);
            // Specify that the previous versions of objects are deleted 30 days after the objects are last modified. 
            LifecycleRule.NoncurrentVersionExpiration noncurrentVersionExpiration = new LifecycleRule.NoncurrentVersionExpiration().withNoncurrentDays(30);
            List<LifecycleRule.NoncurrentVersionStorageTransition> noncurrentVersionStorageTransitions = new ArrayList<LifecycleRule.NoncurrentVersionStorageTransition>();
            noncurrentVersionStorageTransitions.add(noncurrentVersionStorageTransition2);
            rule.setStorageTransition(storageTransitions);
            rule.setNoncurrentVersionExpiration(noncurrentVersionExpiration);
            rule.setNoncurrentVersionStorageTransitions(noncurrentVersionStorageTransitions);
            request.AddLifecycleRule(rule);

            // Initiate a request to configure lifecycle rules. 
            ossClient.setBucketLifecycle(request);

            // Query the lifecycle rules that are configured for the bucket. 
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

## PHP

```
<?php

// Include the autoload file to load dependencies
require_once __DIR__ . '/../vendor/autoload.php';

use AlibabaCloud\Oss\V2 as Oss;
use AlibabaCloud\Oss\V2\Models\LifecycleConfiguration;

// Specify descriptions for command line parameters
$optsdesc = [
    "region" => ['help' => 'The region in which the bucket is located', 'required' => True], // (Required) Specify the region in which the bucket is located.
    "endpoint" => ['help' => 'The domain names that other services can use to access OSS', 'required' => False], // (Optional) Specify the endpoint that can be used by other services to access OSS.
    "bucket" => ['help' => 'The name of the bucket', 'required' => True], // (Required) Specify the name of the bucket.
];

// Generate a list of long options to parse the command-line parameters
$longopts = \array_map(function ($key) {
    return "$key:"; // Add a colon after each parameter to indicate that a value is required
}, array_keys($optsdesc));

// Parse the command-line parameters
$options = getopt("", $longopts); 

// Check whether the required parameters are missing
foreach ($optsdesc as $key => $value) {
    if ($value['required'] === True && empty($options[$key])) {
        $help = $value['help'];
        echo "Error: the following arguments are required: --$key, $help"; // Prompt the user for missing required parameters
        exit(1); 
    }
}

// Obtain the values of the command-line parameters
$region = $options["region"]; // The region in which the bucket is located
$bucket = $options["bucket"]; // The name of the bucket

// Use environment variables to load the AccessKey ID and AccessKey secret
$credentialsProvider = new Oss\Credentials\EnvironmentVariableCredentialsProvider();

// Use the default configuration of the SDK
$cfg = Oss\Config::loadDefault();

// Specify the credential provider
$cfg->setCredentialsProvider($credentialsProvider);

// Specify the region
$cfg->setRegion($region);

// Specify the endpoint if an endpoint is provided
if (isset($options["endpoint"])) {
    $cfg->setEndpoint($options["endpoint"]);
}

// Create an OSSClient instance
$client = new Oss\Client($cfg);

// Define a lifecycle rule to convert objects whose names contain the log/ prefix to the IA storage class after 30 days
$lifecycleRule = new Oss\Models\LifecycleRule(
    prefix: 'log/', // The prefix of the object
    transitions: array(
        new Oss\Models\LifecycleRuleTransition(
            days: 30, // The conversion time is 30 days
            storageClass: 'IA' // The target storage class is IA
        )
    ),
    id: 'rule', // The ID of the rule
    status: 'Enabled' // The status of the rule is enabled
);

// Create a lifecycle configuration object and add the lifecycle rule
$lifecycleConfiguration = new LifecycleConfiguration(
    rules: array($lifecycleRule)
);

// Create a request object to set the lifecycle of the bucket and pass in the lifecycle configuration
$request = new Oss\Models\PutBucketLifecycleRequest(
    bucket: $bucket,
    lifecycleConfiguration: $lifecycleConfiguration
);

// Call the putBucketLifecycle method to set the lifecycle rules for the bucket
$result = $client->putBucketLifecycle($request);

// Display the returned result
printf(
    'status code:' . $result->statusCode . PHP_EOL . // The HTTP response status code
    'request id:' . $result->requestId . PHP_EOL // The unique identifier of the request
);
```

## Node.js

```
const OSS = require('ali-oss')

const client = new OSS({
  // Specify the region in which the bucket is located. For example, if the bucket is located in the China (Hangzhou) region, set the region to oss-cn-hangzhou. 
  region: 'yourregion',
  // Obtain access credentials from environment variables. Before you run the sample code, make sure that the OSS_ACCESS_KEY_ID and OSS_ACCESS_KEY_SECRET environment variables are configured. 
  accessKeyId: process.env.OSS_ACCESS_KEY_ID,
  accessKeySecret: process.env.OSS_ACCESS_KEY_SECRET,
  authorizationV4: true,
  // Specify the name of the bucket. 
  bucket: 'yourbucketname'
});

async function putBucketLifecycle(lifecycle) {
  try {
    const result = await client.putBucketLifecycle('yourbucketname', [
    lifecycle
  ]);
    console.log(result);
  } catch (e) {
    console.log(e);
  }
}

const lifecycle1 = {
  id: 'rule1',
  status: 'Enabled',
  prefix: 'foo/',
  expiration: {
    // Specify that the current versions of objects expire three days after the objects are last modified. 
    days: 3 
  }
}
putBucketLifecycle(lifecycle1)

const lifecycle2 = {
  id: 'rule2',
  status: 'Enabled',
  prefix: 'foo/', 
  expiration: {
    // Specify that the objects that are created before the specified date expire. 
    createdBeforeDate: '2020-02-18T00:00:00.000Z' 
  },
}
putBucketLifecycle(lifecycle2)

const lifecycle3 = {
  id: 'rule3',
  status: 'Enabled',
  prefix: 'foo/', 
  abortMultipartUpload: {
    // Specify that parts expire in three days. 
    days: 3 
  },
}
putBucketLifecycle(lifecycle3)

const lifecycle4 = {
  id: 'rule4',
  status: 'Enabled',
  prefix: 'foo/', 
  abortMultipartUpload: {
    // Specify that parts created before the specified date expire. 
    createdBeforeDate: '2020-02-18T00:00:00.000Z' 
  },
}
putBucketLifecycle(lifecycle4)

const lifecycle5 = {
  id: 'rule5',
  status: 'Enabled',
  prefix: 'foo/', 
  transition: {
    // Specify that the storage classes of the current versions of objects are changed to Archive 20 days after the objects are last modified. 
    days: 20,
    storageClass: 'Archive'
  },
  expiration: {
    // Specify that the current versions of objects expire 21 days after the objects are last modified. 
    days: 21 
  },
}
putBucketLifecycle(lifecycle5)

const lifecycle6 = {
  id: 'rule6',
  status: 'Enabled',
  prefix: 'foo/', 
  transition: {
    //Specify that the storage classes of the objects that are created before the specified date are changed to Archive. 
    createdBeforeDate: '2023-02-19T00:00:00.000Z', 
    storageClass: 'Archive'
  },
  expiration: {
    // Specify that objects created before the specified date are deleted. 
    createdBeforeDate: '2023-01-18T00:00:00.000Z' 
  },
}
putBucketLifecycle(lifecycle6)

const lifecycle7 = {
  id: 'rule7',
  status: 'Enabled',
  prefix: 'foo/', 
  expiration: {
    // Specify that delete markers are automatically removed when they expire. 
    expiredObjectDeleteMarker: true 
  }
}
putBucketLifecycle(lifecycle7)

const lifecycle8 = {
  id: 'rule8',
  status: 'Enabled',
  prefix: 'foo/', 
  // Specify that the storage classes of the previous versions of objects are changed to IA 10 days after the objects are last modified. 
  noncurrentVersionTransition: {
    noncurrentDays: '10',
    storageClass: 'IA'
  }
}
putBucketLifecycle(lifecycle8)

const lifecycle9 = {
  id: 'rule9',
  status: 'Enabled',
  prefix: 'foo/', 
  // Specify that the storage classes of the previous versions of objects are changed to IA 10 days after the objects are last modified. 
  noncurrentVersionTransition: {
    noncurrentDays: '10',
    storageClass: 'IA'
  },
  // Specify the tags for objects that you want to match the rules. 
  tag: [{
    key: 'key1',
    value: 'value1'
  },
   {
     key: 'key2',
     value: 'value2'
   }]
}
putBucketLifecycle(lifecycle9)
```

## C#

```
using Aliyun.OSS;
using Aliyun.OSS.Common;
// Specify the endpoint of the region in which the bucket is located. For example, if the bucket is located in the China (Hangzhou) region, set the endpoint to https://oss-cn-hangzhou.aliyuncs.com. 
var endpoint = "https://oss-cn-hangzhou.aliyuncs.com";
// Obtain access credentials from environment variables. Before you run the sample code, make sure that the OSS_ACCESS_KEY_ID and OSS_ACCESS_KEY_SECRET environment variables are configured. 
var accessKeyId = Environment.GetEnvironmentVariable("OSS_ACCESS_KEY_ID");
var accessKeySecret = Environment.GetEnvironmentVariable("OSS_ACCESS_KEY_SECRET");
// Specify the bucket name. Example: examplebucket. 
var bucketName = "examplebucket";
// Specify the region in which the bucket is located. For example, if the bucket is located in the China (Hangzhou) region, set the region to cn-hangzhou.
const string region = "cn-hangzhou";

// Create a ClientConfiguration instance and modify the default parameters based on your requirements.
var conf = new ClientConfiguration();

// Use the signature algorithm V4.
conf.SignatureVersion = SignatureVersion.V4;

// Create an OSSClient instance.
var client = new OssClient(endpoint, accessKeyId, accessKeySecret, conf);
client.SetRegion(region);
try
{
    var setBucketLifecycleRequest = new SetBucketLifecycleRequest(bucketName);
    // Create the first lifecycle rule. 
    LifecycleRule lcr1 = new LifecycleRule()
    {
        ID = "delete obsoleted files",
        Prefix = "obsoleted/",
        Status = RuleStatus.Enabled,
        ExpriationDays = 3,
        Tags = new Tag[1]
    };
    // Specify a tag for the rule. 
    var tag1 = new Tag
    {
        Key = "project",
        Value = "projectone"
    };

    lcr1.Tags[0] = tag1;

    // Create the second lifecycle rule. 
    LifecycleRule lcr2 = new LifecycleRule()
    {
        ID = "delete temporary files",
        Prefix = "temporary/",
        Status = RuleStatus.Enabled,
        ExpriationDays = 20,
        Tags = new Tag[1]         
    };
    // Specify a tag for the rule. 
    var tag2 = new Tag
    {
        Key = "user",
        Value = "jsmith"
    };
    lcr2.Tags[0] = tag2;

    // Specify that parts expire 30 days after they are last modified. 
    lcr2.AbortMultipartUpload = new LifecycleRule.LifeCycleExpiration()
    {
        Days = 30
    };

    LifecycleRule lcr3 = new LifecycleRule();
    lcr3.ID = "only NoncurrentVersionTransition";
    lcr3.Prefix = "test1";
    lcr3.Status = RuleStatus.Enabled;
    lcr3.NoncurrentVersionTransitions = new LifecycleRule.LifeCycleNoncurrentVersionTransition[2]
    {
        // Specify that the storage classes of the previous versions of objects are converted to IA 90 days after they are last modified. 
        new LifecycleRule.LifeCycleNoncurrentVersionTransition(){
            StorageClass = StorageClass.IA,
            NoncurrentDays = 90
        },
        // Specify that the storage classes of the previous versions of objects are converted to Archive 180 days after they are last modified. 
        new LifecycleRule.LifeCycleNoncurrentVersionTransition(){
            StorageClass = StorageClass.Archive,
            NoncurrentDays = 180
        }
    };
    setBucketLifecycleRequest.AddLifecycleRule(lcr1);
    setBucketLifecycleRequest.AddLifecycleRule(lcr2);
    setBucketLifecycleRequest.AddLifecycleRule(lcr3);

    // Configure lifecycle rules. 
    client.SetBucketLifecycle(setBucketLifecycleRequest);
    Console.WriteLine("Set bucket:{0} Lifecycle succeeded ", bucketName);
}
catch (OssException ex)
{
    Console.WriteLine("Failed with error code: {0}; Error info: {1}. \nRequestID:{2}\tHostID:{3}",
        ex.ErrorCode, ex.Message, ex.RequestId, ex.HostId);
}
catch (Exception ex)
{
    Console.WriteLine("Failed with error info: {0}", ex.Message);
}
```

## Android-Java

```
PutBucketLifecycleRequest request = new PutBucketLifecycleRequest();
request.setBucketName("examplebucket");

BucketLifecycleRule rule1 = new BucketLifecycleRule();
// Specify the rule ID and the prefix contained in the names of the objects that match the rule. 
rule1.setIdentifier("1");
rule1.setPrefix("A");
// Specify whether to run the lifecycle rule. If this parameter is set to true, OSS periodically runs this rule. If this parameter is set to false, OSS ignores this rule. 
rule1.setStatus(true);
// Specify that objects expire 200 days after they are last modified. 
rule1.setDays("200");
// Specify that the storage classes of objects are converted to Archive 30 days after they are last modified.
rule1.setArchiveDays("30");
// Specify that parts expire three days after they fail to be uploaded. 
rule1.setMultipartDays("3");
// Specify that the storage classes of objects are converted to Infrequent Access (IA) 15 days after they are last modified. 
rule1.setIADays("15");

BucketLifecycleRule rule2 = new BucketLifecycleRule();
rule2.setIdentifier("2");
rule2.setPrefix("B");
rule2.setStatus(true);
rule2.setDays("300");
rule2.setArchiveDays("30");
rule2.setMultipartDays("3");
rule2.setIADays("15");

ArrayList<BucketLifecycleRule> lifecycleRules = new ArrayList<BucketLifecycleRule>();
lifecycleRules.add(rule1);
lifecycleRules.add(rule2);
request.setLifecycleRules(lifecycleRules);
OSSAsyncTask task = oss.asyncPutBucketLifecycle(request, new OSSCompletedCallback<PutBucketLifecycleRequest, PutBucketLifecycleResult>() {
    @Override
    public void onSuccess(PutBucketLifecycleRequest request, PutBucketLifecycleResult result) {
        OSSLog.logInfo("code::"+result.getStatusCode());

    }

    @Override
    public void onFailure(PutBucketLifecycleRequest request, ClientException clientException, ServiceException serviceException) {
        OSSLog.logError("error: "+serviceException.getRawMessage());

    }
});

task.waitUntilFinished();
```

## C++

```
#include <alibabacloud/oss/OssClient.h>
using namespace AlibabaCloud::OSS;

int main(void)
{
    /* Initialize information about the account used to access OSS. */
    
    /* Specify the endpoint of the region in which the bucket is located. For example, if the bucket is located in the China (Hangzhou) region, set the endpoint to https://oss-cn-hangzhou.aliyuncs.com. */
    std::string Endpoint = "yourEndpoint";
    /* Specify the region in which the bucket is located. For example, if the bucket is located in the China (Hangzhou) region, set the region to cn-hangzhou. */
    std::string Region = "yourRegion";
    /* Specify the name of the bucket. Example: examplebucket. */
    std::string BucketName = "examplebucket";

    /* Initialize resources such as network resources. */
    InitializeSdk();

    ClientConfiguration conf;
    conf.signatureVersion = SignatureVersionType::V4;
    /* Obtain access credentials from environment variables. Before you run the sample code, make sure that the OSS_ACCESS_KEY_ID and OSS_ACCESS_KEY_SECRET environment variables are configured. */
    auto credentialsProvider = std::make_shared<EnvironmentVariableCredentialsProvider>();
    OssClient client(Endpoint, credentialsProvider, conf);
    client.SetRegion(Region);

    SetBucketLifecycleRequest request(BucketName);
    std::string date("2022-10-12T00:00:00.000Z");

    /* Specify the tags of the objects that you want to match the rule. */
    Tagging tagging;
    tagging.addTag(Tag("key1", "value1"));
    tagging.addTag(Tag("key2", "value2"));

    /* Specify a lifecycle rule. */
    auto rule1 = LifecycleRule();
    rule1.setID("rule1");
    rule1.setPrefix("test1/");
    rule1.setStatus(RuleStatus::Enabled);
    rule1.setExpiration(3);
    rule1.setTags(tagging.Tags());

    /* Specify the expiration date. */
    auto rule2 = LifecycleRule();
    rule2.setID("rule2");
    rule2.setPrefix("test2/");
    rule2.setStatus(RuleStatus::Disabled);
    rule2.setExpiration(date);

    /* Specify that rule3 is enabled for the bucket if versioning is enabled for the bucket. */
    auto rule3 = LifecycleRule();
    rule3.setID("rule3");
    rule3.setPrefix("test3/");
    rule3.setStatus(RuleStatus::Disabled);

    /* Specify that the storage classes of objects are changed to Archive 365 days after the objects are last modified. */  
    auto transition = LifeCycleTransition();  
    transition.Expiration().setDays(365);
    transition.setStorageClass(StorageClass::Archive);
    rule3.addTransition(transition);

    /* Specify that expired delete markers are automatically deleted. */
    rule3.setExpiredObjectDeleteMarker(true);

    /* Specify that the storage classes of the previous versions of objects are changed to IA 10 days after the objects are last modified. */
    auto transition1 = LifeCycleTransition();  
    transition1.Expiration().setDays(10);
    transition1.setStorageClass(StorageClass::IA);

    /* Specify that the storage classes of the previous versions of objects are changed to Archive 20 days after the objects are last modified. */
    auto transition2 = LifeCycleTransition();  
    transition2.Expiration().setDays(20);
    transition2.setStorageClass(StorageClass::Archive);

    /* Specify that previous versions are deleted 30 days after the versions are updated. */
    auto expiration  = LifeCycleExpiration(30);
    rule3.setNoncurrentVersionExpiration(expiration);

    LifeCycleTransitionList noncurrentVersionStorageTransitions{transition1, transition2};
    rule3.setNoncurrentVersionTransitionList(noncurrentVersionStorageTransitions);

    /* Configure the lifecycle rules. */
    LifecycleRuleList list{rule1, rule2, rule3};
    request.setLifecycleRules(list);
    auto outcome = client.SetBucketLifecycle(request);

    if (!outcome.isSuccess()) {
        /* Handle exceptions. */
        std::cout << "SetBucketLifecycle fail" <<
        ",code:" << outcome.error().Code() <<
        ",message:" << outcome.error().Message() <<
        ",requestId:" << outcome.error().RequestId() << std::endl;
        return -1;
    }

    /* Release resources such as network resources. */
    ShutdownSdk();
    return 0;
}
```

## C

```
#include "oss_api.h"
#include "aos_http_io.h"
/* Specify the endpoint of the region in which the bucket is located. For example, if the bucket is located in the China (Hangzhou) region, set the endpoint to https://oss-cn-hangzhou.aliyuncs.com. */
const char *endpoint = "yourEndpoint";
/* Specify the name of the bucket. Example: examplebucket. */
const char *bucket_name = "examplebucket";
/* Specify the region in which the bucket is located. For example, if the bucket is located in the China (Hangzhou) region, set the region to cn-hangzhou. */
const char *region = "yourRegion";
void init_options(oss_request_options_t *options)
{
    options->config = oss_config_create(options->pool);
    /* Use a char* string to initialize aos_string_t. */
    aos_str_set(&options->config->endpoint, endpoint);
    /* Obtain access credentials from environment variables. Before you run the sample code, make sure that the OSS_ACCESS_KEY_ID and OSS_ACCESS_KEY_SECRET environment variables are configured. */
    aos_str_set(&options->config->access_key_id, getenv("OSS_ACCESS_KEY_ID"));
    aos_str_set(&options->config->access_key_secret, getenv("OSS_ACCESS_KEY_SECRET"));
    // Specify two additional parameters.
    aos_str_set(&options->config->region, region);
    options->config->signature_version = 4;
    /* Specify whether to use CNAME to access OSS. A value of 0 indicates that CNAME is not used. */
    options->config->is_cname = 0;
    /* Specify network parameters, such as the timeout period. */
    options->ctl = aos_http_controller_create(options->pool, 0);
}
int main(int argc, char *argv[])
{
    /* Call the aos_http_io_initialize method in main() to initialize global resources, such as network resources and memory resources. */
    if (aos_http_io_initialize(NULL, 0) != AOSE_OK) {
        exit(1);
    }
    /* Create a memory pool to manage memory. aos_pool_t is equivalent to apr_pool_t. The code used to create a memory pool is included in the APR library. */
    aos_pool_t *pool;
    /* Create a memory pool. The value of the second parameter is NULL. This value indicates that the pool does not inherit other memory pools. */
    aos_pool_create(&pool, NULL);
    /* Create and initialize options. This parameter includes global configuration information such as endpoint, access_key_id, access_key_secret, is_cname, and curl. */
    oss_request_options_t *oss_client_options;
    /* Allocate memory resources in the memory pool to the options. */
    oss_client_options = oss_request_options_create(pool);
    /* Initialize oss_client_options. */
    init_options(oss_client_options);
    /* Initialize parameters. */
    aos_string_t bucket;
    aos_table_t *resp_headers = NULL; 
    aos_status_t *resp_status = NULL; 
    aos_str_set(&bucket, bucket_name);
    aos_list_t lifecycle_rule_list;   
    aos_str_set(&bucket, bucket_name);
    aos_list_init(&lifecycle_rule_list);
    /* Specify the validity period. */
    oss_lifecycle_rule_content_t *rule_content_days = oss_create_lifecycle_rule_content(pool);
    aos_str_set(&rule_content_days->id, "rule-1");
    /* Specify the prefix that is contained in the names of the objects that you want to match the rule. */
    aos_str_set(&rule_content_days->prefix, "dir1");
    aos_str_set(&rule_content_days->status, "Enabled");
    rule_content_days->days = 3;
    aos_list_add_tail(&rule_content_days->node, &lifecycle_rule_list);
    /* Specify the expiration date. */
    oss_lifecycle_rule_content_t *rule_content_date = oss_create_lifecycle_rule_content(pool);
    aos_str_set(&rule_content_date->id, "rule-2");
    aos_str_set(&rule_content_date->prefix, "dir2");
    aos_str_set(&rule_content_date->status, "Enabled");
    /* The expiration date is displayed in UTC. 
    aos_str_set(&rule_content_date->date, "2023-10-11T00:00:00.000Z");
    aos_list_add_tail(&rule_content_date->node, &lifecycle_rule_list);
    /* Configure the lifecycle rule. */
    resp_status = oss_put_bucket_lifecycle(oss_client_options, &bucket, &lifecycle_rule_list, &resp_headers);
    if (aos_status_is_ok(resp_status)) {
        printf("put bucket lifecycle succeeded\n");
    } else {
        printf("put bucket lifecycle failed, code:%d, error_code:%s, error_msg:%s, request_id:%s\n",
            resp_status->code, resp_status->error_code, resp_status->error_msg, resp_status->req_id);
    }
    /* Release the memory pool to release the memory resources allocated for the request. */
    aos_pool_destroy(pool);
    /* Release the allocated global resources. */
    aos_http_io_deinitialize();
    return 0;
}
```

## Ruby

```
require 'aliyun/oss'

client = Aliyun::OSS::Client.new(
  # In this example, the endpoint of the China (Hangzhou) region is used. Specify your actual endpoint. 
  endpoint: 'https://oss-cn-hangzhou.aliyuncs.com',
  # Obtain access credentials from environment variables. Before you run the sample code, make sure that the OSS_ACCESS_KEY_ID and OSS_ACCESS_KEY_SECRET environment variables are configured. 
  access_key_id: ENV['OSS_ACCESS_KEY_ID'],
  access_key_secret: ENV['OSS_ACCESS_KEY_SECRET']
)
# Specify the bucket name. 
bucket = client.get_bucket('examplebucket')
# Configure lifecycle rules. 
bucket.lifecycle = [
  Aliyun::OSS::LifeCycleRule.new(
    :id => 'rule1', :enable => true, :prefix => 'foo/', :expiry => 3),
  Aliyun::OSS::LifeCycleRule.new(
    :id => 'rule2', :enable => false, :prefix => 'bar/', :expiry => Date.new(2016, 1, 1))
]
```

## Go

```
package main

import (
	"context"
	"flag"
	"log"

	"github.com/aliyun/alibabacloud-oss-go-sdk-v2/oss"
	"github.com/aliyun/alibabacloud-oss-go-sdk-v2/oss/credentials"
)

// Define global variables.
var (
	region     string // Region in which the bucket is located.
	bucketName string // Name of the bucket.
)

// Specify the init function used to initialize command line parameters.
func init() {
	flag.StringVar(&region, "region", "", "The region in which the bucket is located.")
	flag.StringVar(&bucketName, "bucket", "", "The name of the bucket.")
}

func main() {
	// Parse command line parameters.
	flag.Parse()

	// Check whether the name of the bucket is specified.
	if len(bucketName) == 0 {
		flag.PrintDefaults()
		log.Fatalf("invalid parameters, bucket name required")
	}

	// Check whether the region is specified.
	if len(region) == 0 {
		flag.PrintDefaults()
		log.Fatalf("invalid parameters, region required")
	}

	// Load the default configurations and specify the credential provider and region.
	cfg := oss.LoadDefaultConfig().
		WithCredentialsProvider(credentials.NewEnvironmentVariableCredentialsProvider()).
		WithRegion(region)

	// Create an OSS client.
	client := oss.NewClient(cfg)

	// Create a request to configure lifecycle rules for the bucket.
	request := &oss.PutBucketLifecycleRequest{
		Bucket: oss.Ptr(bucketName), // Name of the bucket.
		LifecycleConfiguration: &oss.LifecycleConfiguration{
			Rules: []oss.LifecycleRule{
				{
					// Set the lifecycle rule ID to rule1. Specify that the storage class of objects tagged with the key 'k1' and value 'v1' whose names contain the foo prefix in the bucket are converted to IA 30 days after the objects are last modified.
					Status: oss.Ptr("Enabled"),
					ID:     oss.Ptr("rule1"),
					Prefix: oss.Ptr("foo/"),
					Transitions: []oss.LifecycleRuleTransition{
						{
							Days:         oss.Ptr(int32(30)),
							StorageClass: oss.StorageClassIA,
							IsAccessTime: oss.Ptr(false), // Set this parameter to false to specify that the storage classes of objects are converted based on the last modified time.
						},
					},
					Tags: []oss.Tag{
						{
							Key:   oss.Ptr("k1"),
							Value: oss.Ptr("v1"),
						},
					},
				},
				{
					// Set the lifecycle rule ID to rule2. If objects whose names contain the dir prefix in a versioning-enabled bucket are delete markers and have no other versions, the delete markers are removed. The previous versions of objects are deleted 30 days after they are last modified. The storage classes of the previous versions of objects are converted to Infrequent Access (IA) 10 days after the objects are last modified.
					ID:     oss.Ptr("rule2"),
					Prefix: oss.Ptr("dir/"),
					Status: oss.Ptr("Enabled"),
					Expiration: &oss.LifecycleRuleExpiration{
						Days:                      oss.Ptr(int32(10)),
						ExpiredObjectDeleteMarker: oss.Ptr(true),
					},
					NoncurrentVersionExpiration: &oss.NoncurrentVersionExpiration{
						NoncurrentDays: oss.Ptr(int32(30)),
					},
					NoncurrentVersionTransitions: []oss.NoncurrentVersionTransition{{
						NoncurrentDays: oss.Ptr(int32(10)),
						StorageClass:   oss.StorageClassIA,
						IsAccessTime:   oss.Ptr(false), // Set this parameter to false.
					}},
				},
			},
		},
	}

	// Configure lifecycle rules for the bucket.
	result, err := client.PutBucketLifecycle(context.TODO(), request)
	if err != nil {
		log.Fatalf("failed to put bucket lifecycle %v", err)
	}

	// Display the result.
	log.Printf("put bucket lifecycle result:%#v\n", result)
}
```

### **Use ossutil**

You can use ossutil to configure lifecycle rules. For information about its installation, see [Install ossutil](/help/en/oss/install-ossutil2#DAS).

Below is the sample code for configuring lifecycle rules for `examplebucket`.

```
ossutil api put-bucket-lifecycle --bucket examplebucket --lifecycle-configuration "{\"Rule\":{\"ID\":\"rule1\",\"Prefix\":\"tmp/\",\"Status\":\"Enabled\",\"Expiration\":{\"Days\":\"10\"},\"Transition\":{\"Days\":\"5\",\"StorageClass\":\"IA\"},\"AbortMultipartUpload\":{\"Days\":\"10\"}}}"
```

For more information about this command, [put-bucket-lifecycle](/help/en/oss/developer-reference/put-bucket-lifecycle)。

## **Related API operation**

The methods described above are fundamentally implemented based on the RESTful API, which you can directly call if your business requires a high level of customization. To directly call an API, you must include the signature calculation in your code. For details, see [PutBucketLifecycle](/help/en/oss/developer-reference/putbucketlifecycle#reference-xlw-dbv-tdb).

## FAQ

### How to quickly delete all objects in a bucket using lifecycle policies

#### Non-versioned buckets

You can configure a lifecycle rule to automatically delete all objects and parts from incomplete multipart upload tasks in non-versioned buckets.

1.  Go to the [Buckets](https://oss.console.alibabacloud.com/bucket) page in the OSS console and click the bucket name.
    
2.  In the left-side navigation tree, choose **Content Security** > **Versioning** and check whether versioning is enabled.
    
    ![未开启版本控制](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/3345561571/p980583.png)
    
3.  In the left-side navigation tree, choose **Data Management** > **Lifecycle**. Configure a lifecycle rule to automatically delete all objects in the bucket one day after their last modification, and to delete parts generated more than one day ago.
    
    ![screenshot_2025-07-01_17-59-32](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/3345561571/p980603.png)
    

#### **Versioned buckets**

Enabling versioning for a bucket results in current versions, historical versions, fragmented multipart upload parts, and delete markers generated for objects stored within. You can configure a lifecycle rule to automatically delete all such data.

1.  Go to the [Buckets](https://oss.console.alibabacloud.com/bucket) page in the OSS console and click the bucket name.
    
2.  In the left-side navigation tree, choose **Content Security** > **Versioning** and check whether versioning is enabled.
    
    ![screenshot_2025-07-02_10-58-23](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/3345561571/p980726.png)
    
3.  In the left-side navigation tree, choose **Data Management** > **Lifecycle**. Configure a lifecycle rule to automatically delete all objects in the bucket one day after their last modification, and to delete parts generated more than one day ago. Delete markers will also be deleted.
    
    ![screenshot_2025-07-02_10-58-23](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/3345561571/p980775.png)
    

### **What do I do if the** `**Set bucket lifecycle error, InvalidArgument, Days in the Transition action for StorageClass Archive must be more than the Transition action for StorageClass IA**` **error message is reported?**

The error message is reported because the storage duration requirements for storage class conversion are not met. If you want to configure a lifecycle rule that converts the storage class of objects to IA, Archive, Cold Archive, and Deep Cold Archive, the storage duration in each storage class must meet the following requirement:

Storage duration for conversion to IA < Storage duration for conversion to Archive < Storage duration for conversion to Cold Archive < Storage duration for conversion to Deep Cold Archive

### **Does a lifecycle rule for a bucket apply to existing objects in the bucket?**

A lifecycle rule for a bucket applies to objects that exist before the rule is created and objects that are created after the rule is created. For example, you configured a lifecycle rule on October 7, 2023 that deletes objects 30 days after they are last modified. Objects uploaded on October 5, 2023 are deleted on November 6, 2023. Objects uploaded on October 8, 2023 are deleted on November 09, 2023.

### **How do I modify a configuration item in one or more lifecycle rules for a bucket?**

For example, a bucket has two lifecycle rules: Rule1 and Rule2. To modify a configuration item in Rule1, perform the following steps:

1.  Call the GetBucketLifecycle operation to query all lifecycle rules that are configured for the bucket. The operation returns lifecycle rules Rule1 and Rule2.
    
2.  Modify the desired configuration item in Rule1.
    
3.  Call the PutBucketLifecycle operation to configure Rule1 and Rule2 for the bucket.
    

### **How do I delete one or more lifecycle rules that are configured for a bucket?**

When you call the DeleteBucketLifecycle operation, all lifecycle rules configured for a bucket are deleted. For example, a bucket has two lifecycle rules: Rule1 and Rule2. To delete all lifecycle rules that are configured for the bucket, call the DeleteBucketLifecycle operation. To delete only Rule1, perform the following steps:

1.  Call the GetBucketLifecycle operation to query all lifecycle rules that are configured for the bucket. The operation returns lifecycle rules Rule1 and Rule2.
    
2.  Delete Rule1.
    
3.  Call the PutBucketLifecycle operation to configure Rule2 for the bucket.
    

### **Does OSS generate logs when the storage classes of objects are converted or when expired objects are deleted based on lifecycle rules?**

Yes, OSS generates logs when the storage classes of objects are converted or expired objects are deleted based on lifecycle rules. The logs include the following fields:

-   Operation
    
    -   CommitTransition: indicates the storage class that is converted to, for example, IA, Archive, or Cold Archive.
        
    -   ExpireObject: indicates the expired objects that are deleted based on lifecycle rules.
        
-   Sync Request
    
    lifecycle: indicates the storage class conversion or object deletion actions that are triggered by lifecycle rules.
    

For more information about OSS log fields, see [Log fields](/help/en/sls/log-fields-13). For more information about billing, see [Billing rules](/help/en/oss/user-guide/real-time-log-query/#section-bya-zaq-mri).

### **Can I create a lifecycle rule that removes object delete markers and deletes current object versions?**

No, you cannot create a lifecycle rule that removes object delete markers and deletes current object versions. You can create a lifecycle rule to remove delete markers. After you remove the delete markers, you can create a lifecycle rule to delete the current versions of objects.

### **Can I create a lifecycle rule that is based on the last modified time of objects to convert the storage class of an object from IA to Standard?**

No, you cannot create a lifecycle rule to convert the storage class of an object from IA to Standard. You can use one of the following methods to convert the storage class of an object from IA to Standard:

-   Call the CopyObject operation
    
    You can call the CopyObject operation to convert the storage class of an object from IA to Standard.
    
-   Use ossutil
    
    You can specify the X-Oss-Storage-Class option in the ossutil set-meta command to convert the storage class of one or more objects from IA to Standard. For more information, see [Configure or update object metadata](/help/en/oss/developer-reference/set-meta#section-fuy-543-v8n).
    

## **References**

-   By default, OSS uses the upload time of an object as the last modified time of the object. Specific operations update the last modified time of the object. However, storage class conversion based on a lifecycle rule does not update the last modified time. For a list of operations that affect the LastModified attribute of OSS objects, see [What are the operations that affect the LastModified attribute of OSS objects?](/help/en/oss/user-guide/what-are-the-operations-that-affect-the-lastmodified-attribute-of-oss-objects)
    
-   If you convert the storage class of an IA, Archive, Cold Archive, or Deep Cold Archive object and delete the object before the minimum storage duration ends, you are charged for the entire minimum storage duration. For more information, see [How am I charged for objects whose storage duration is less than the minimum storage duration?](/help/en/oss/billing-method-for-objects-whose-storage-duration-is-less-than-the-minimum-storage-duration#title-qdc-72q-fu2)
    
-   A lifecycle rule allows you to convert the storage classes of all objects or objects whose names contain a specific prefix in a bucket or delete such objects. To delete objects whose names contain a specific extension, you can run the rm command in ossutil. For more information, see [rm（删除）](/help/en/oss/developer-reference/rm).
    
-   If you want OSS to identify hot and cold data based on data access patterns and automatically move cold data into more cost-effective storage classes, you can configure lifecycle rules based on the last access time. For more information, see [Lifecycle rules based on the last access time](/help/en/oss/user-guide/lifecycle-rules-based-on-the-last-access-time).
    
-   For more information about how to query the storage classes of all objects in a bucket, see [List objects](/help/en/oss/user-guide/list-objects-18).
