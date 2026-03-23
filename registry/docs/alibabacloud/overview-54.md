The access frequency of data stored in OSS typically decreases over time. Storing cold data in the high-cost Standard storage class is not economical. Manually cleaning up large numbers of log files or backups is also inefficient. Lifecycle management lets you create automated rules. These rules can automatically transition objects to lower-cost storage classes, such as Infrequent Access or Archive, after a specified period, for example, 30 days. The rules can also delete objects. This helps you manage the entire lifecycle of your data intelligently and at a low cost.

## **How it works**

Lifecycle management uses user-defined rules to perform automated operations on objects in a bucket. OSS loads a lifecycle rule within 24 hours after it is created. After the rule is loaded, OSS scans for and executes matching rules at a fixed time each day, typically after 00:00 (UTC) the next day, which is 08:00 (UTC+8).

A lifecycle rule consists of three main parts:

1.  **Objects to manage:** Define which objects the rule applies to. You can filter target objects based on an **object prefix (Prefix)**, **object tag (Tag)**, or **object size (ObjectSize)**.
    
    > Lifecycle rules do not support wildcard characters, suffix matching, or regular expressions.
    
2.  **Actions to perform:** Define what to do with the filtered objects. The main actions include the following:
    
    -   **Storage class transition (Transition):** Transition objects to lower-cost storage classes such as Infrequent Access, Archive, or Cold Archive.
        
    -   **Expiration and deletion (Expiration):** Delete objects after they reach a specified lifecycle period.
        
    -   **Fragment cleanup (AbortMultipartUpload):** Automatically delete parts from incomplete multipart uploads after a specified time.
        
3.  **Trigger policies**: Define the conditions that trigger actions on the filtered objects:
    
    -   **Last modified time (Last-Modified-Time):** Transition or delete objects based on their last modified time. This is suitable for data with a clear lifecycle, such as logs and backups. You can automatically transition storage classes or delete objects to save costs.
        
    -   **Last access time (Last-Access-Time):** After you enable the **access tracking** feature_,_ you can intelligently switch storage classes based on the last access time of an object. This is useful for scenarios with unpredictable access patterns, such as a material library. The storage class can be downgraded when data becomes cold and automatically restored when the data is accessed.
        

For more information about how to configure lifecycle policies, see [Lifecycle configuration elements](/help/en/oss/user-guide/configuration-elements).

## **Configuration scenarios**

### **Automatically clean up expired log files**

Servers generate many logs every day and upload them to a specified directory. You can configure a lifecycle rule based on the last modified time to [delete all objects in a bucket after a specified number of days](/help/en/oss/user-guide/configuration-examples#p-cfv-ykr-y4c). This releases storage space and reduces storage costs.

### **Use automatic storage tiering for hot and cold data**

For data with uncertain access frequency, such as website images, online videos, and documents, you can enable the access tracking feature. Then, you can [use a lifecycle rule based on the last access time to implement intelligent data tiering](/help/en/oss/user-guide/intelligent-tiering-through-lifecycle-rules-based-on-last-access-time). The system automatically transitions cold data to the Infrequent Access, Archive, or Cold Archive storage class based on actual access patterns. This achieves intelligent tiering and cost optimization.

### **Automatically clean up previous versions**

After you enable versioning, overwrite and delete operations on data are saved as previous versions. When a bucket accumulates many previous versions or expired delete markers, you can [use a lifecycle rule based on the last modified time together with versioning to reduce storage costs](/help/en/oss/user-guide/configure-lifecycle-rules-to-manage-object-versions). Objects are automatically deleted after a specified time. This reduces storage costs and improves the performance of listing objects.

### **Automatically clean up fragments from multipart uploads**

If a multipart upload of a large file is interrupted, the system retains the unmerged parts, which continue to incur charges. You can configure a lifecycle rule to automatically [clean up incomplete parts after a specified time](/help/en/oss/user-guide/configuration-examples#title-cpt-s1r-qs0) to avoid unnecessary resource usage.

In addition to the preceding scenarios, you can implement more fine-grained data management policies. For more information, see [Lifecycle configuration examples](/help/en/oss/user-guide/configuration-examples). You can combine different rules to achieve fine-grained management of data in your bucket as needed.

## **Multiple lifecycle rules**

To ensure that multiple lifecycle rules take effect as expected, you need to understand two core mechanisms: **rule execution priority** and the **configuration overwrite mechanism**.

### **Rule execution priority**

You can configure multiple lifecycle rules for the same bucket. The rules are independent, so the same object might match multiple rules. The final action is determined based on the results of all matching rules.

When multiple rules match the same object at the same time, they are executed in the following order of priority: Delete Object > Transition to Deep Cold Archive > Transition to Cold Archive > Transition to Archive > Transition to Infrequent Access > Transition to Standard.

**Important**

The delete action always has a higher priority than storage class transitions. Set the time for delete rules to be longer than the time for transition rules. This prevents objects from being deleted before the transition is complete.

#### **Execution example**

Assume you specify the following two lifecycle rules, and both rules match the same object.

-   Rule 1: Specifies that objects last modified more than 365 days ago are transitioned to the Infrequent Access storage class.
    
-   Rule 2: Specifies that objects last modified more than 365 days ago are deleted.
    

Result: The object that matches the rules will be deleted more than 365 days after its last modification time.

### **Configuration overwrite mechanism**

When you use the console, you do not need to worry about configuration overwrites. Each time you add or modify a rule, the console automatically reads the current configuration, merges the changes, and submits the result. This prevents accidental loss of existing rules. However, be careful when you configure lifecycle rules using ossutil, an SDK, or by directly calling the API. Each PutBucketLifecycle call completely overwrites all existing lifecycle configurations for the bucket. If you submit a new rule without including the existing ones, the existing rules will be deleted and will no longer be effective.

#### Example

If you want to add a new rule to your existing rules, perform the following steps:

1.  **Retrieve** all currently effective lifecycle rules (for example, Rule 1).
    
2.  **Add** the new rule (for example, Rule 2).
    
3.  **Resubmit** the complete configuration that includes all rules (Rule 1 + Rule 2).
    

> Note: If you submit only the configuration containing the new rule (Rule 2) without including the existing rule (Rule 1), Rule 1 will be deleted and will no longer be effective.

## **Going live**

To use lifecycle management safely and efficiently in a production environment, we recommend the following:

-   **Test before you deploy:** Create rules in a test bucket first. Verify that their behavior is exactly as expected before applying them to a production bucket.
    
-   **Use delete rules with caution:** For rules configured with expiration and deletion, set the prefix precisely. This prevents the rule's scope from expanding and accidentally deleting important data.
    
-   **Enable versioning as a safeguard:** For critical business data, enable the versioning feature for the bucket. This way, even if the current version of an object is accidentally deleted by a lifecycle rule, you can still recover the data from a previous version.
    
-   **Use tiered transitions to avoid extra fees:** When designing a storage class transition policy, ensure that the trigger time for a later stage is after the sum of the trigger time of the previous stage and the minimum storage duration of that storage class. This avoids fees from premature transitions.
    
    -   **Incorrect example:** Standard `30 days` -> Infrequent Access `40 days` -> Archive Storage. This configuration causes the object to be stored in the IA storage class for only 10 days (`< 30 days`) before being transitioned again. This incurs a fee.
        
    -   **Correct example:** Standard `30 days` -> Infrequent Access `90 days` -> Archive Storage. (The object is transitioned to the IA storage class after 30 days. It remains in the IA storage class for 60 days before being transitioned to Archive Storage, for a total of 90 days).
        

## **Billing**

Configuring lifecycle rules is free of charge. Fees are incurred when a rule is executed and when the storage state changes as a result.

1.  **Request fees:** When a lifecycle rule performs a storage class transition, deletes an object, or deletes a part, the system initiates a `Put`\-type request. Request fees are charged based on the number of requests. For more information about billing rules, see [Lifecycle fee description](/help/en/oss/user-guide/fees-related-to-lifecycle-rules).
    
    > For buckets containing many small files, this fee can be significant. Evaluate this before you configure rules.
    
2.  **Storage fees:** After an object is transitioned to a new storage class, it is billed at the unit price of the new class.
    
    **Important**
    
    Storage classes such as Infrequent Access, Archive, and Cold Archive have **minimum storage duration** requirements (for example, 30 days for Infrequent Access and 60 days for Archive). If a lifecycle rule deletes or transitions an object before the minimum storage duration is met, you must pay for the remaining storage duration. To avoid [conditional capacity fees for storage shorter than the specified duration](/help/en/oss/user-guide/fees-related-to-lifecycle-rules#title-i1r-hem-x8n) due to transitions or deletions, see [How do I avoid capacity fees for storage shorter than the specified duration?](/help/en/oss/how-can-i-avoid-the-cost-of-insufficient-storage). Ensure that the minimum storage duration is met before transitioning or deleting.
    
3.  **Data retrieval fees:** Lifecycle rules themselves do not incur data retrieval fees. However, when you **access** objects that have been transitioned to storage classes such as Infrequent Access or Archive, corresponding data retrieval fees are incurred.
    
    -   Reading an Infrequent Access (IA) object directly incurs data retrieval fees.
        
    -   Reading an Archive object directly incurs data retrieval capacity fees for real-time access.
        
    -   Restoring an Archive object incurs Put-type request fees and data retrieval capacity fees.
        
    -   Restoring a Cold Archive or Deep Cold Archive object incurs retrieval request fees, retrieval capacity fees, and temporary restored capacity fees.
        
    
    **Important**
    
    For Cold Archive and Deep Cold Archive objects, the fee varies depending on the retrieval priority you choose. A higher priority results in a higher fee.
    

## **FAQ**

What is the difference between lifecycle rules based on last modified time and last access time?

The differences between policies based on last modified time and last access time are as follows:

Policy

Based on last modified time

Based on last access time

**Scenarios**

Suitable for data scenarios with fixed or predictable access patterns.

Suitable for data scenarios with unfixed or unpredictable access patterns.

**Supports Object Deletion**

This is supported.

No.

**Object Recovery After Deletion**

-   If versioning is not enabled, deleted objects cannot be recovered.
    
-   If [versioning](/help/en/oss/user-guide/overview-78/#concept-jdg-4rx-bgb) is enabled, when a lifecycle rule deletes a current version object, it becomes a previous version and can be recovered. However, when a lifecycle rule deletes a previous version object, it cannot be recovered.
    

A policy based on last access time does not involve object recovery after deletion.

**Reversibility Of Storage Class Transition**

Not reversible. For example, after an object is transitioned from the Standard storage class to the Infrequent Access storage class, it cannot be automatically transitioned back to the Standard storage class. For more information, see [Transition storage class](/help/en/oss/user-guide/convert-storage-classes#section-yuy-2b0-giv).

When an object is transitioned to the Infrequent Access, Archive, Cold Archive, or Deep Cold Archive storage class, issues such as minimum billable size, minimum storage duration, and data retrieval fees are involved. For more information, see [Transition storage class](/help/en/oss/user-guide/convert-storage-classes#section-ku2-807-o44).

Reversible. When an object is automatically transitioned from the Standard storage class to the Infrequent Access storage class, you can also choose to have it return to the Standard storage class when it is accessed.

**Important**

An object is considered "accessed" only when it is accessed through a GetObject API call. Other API calls are not included.

This scenario also involves issues such as minimum billable size, minimum storage duration, and data retrieval fees. For more information, see [Lifecycle rules based on last access time](/help/en/oss/user-guide/lifecycle-rules-based-on-the-last-access-time#section-89j-zv0-env).

Why is my lifecycle rule not working?

Check the following items:

1.  **Effective time:** Has the rule been created for more than 24 hours? New rules need time to load.
    
2.  **Prefix matching:** Is the prefix in the rule set correctly? For example, a folder should be `logs/` instead of `logs`.
    
3.  **Time condition:** Does the last modified or last access time of the object actually meet the specified number of days?
    
4.  **Prerequisite feature:** If you are using a rule based on last access time, have you enabled the access tracking feature for the bucket?
    

After enabling versioning, I deleted an object. Why did my storage usage not decrease?

Because versioning is enabled, a delete operation only creates a delete marker. The original object becomes a previous version and continues to occupy storage space. You must create an additional lifecycle rule to clean up previous versions.

Will converted objects be restored if I delete the lifecycle rule?

**No, they will not**. Deleting a rule does not affect the results of actions that have already been executed. You must manually restore converted objects to their original storage class.

Why does a deleted object still occupy space after versioning is enabled?

After versioning is enabled, a delete operation creates a **delete marker**. The original object becomes a previous version and continues to occupy space. You need to configure a rule to delete previous versions.

What should I do if I receive the error `Set bucket lifecycle error, InvalidArgument, Days in the Transition action for StorageClass Archive must be more than the Transition action for StorageClass IA`?

This error occurs because the transition times for different storage classes do not meet the requirements. The transition period configured for the bucket must satisfy: Infrequent Access < Archive < Cold Archive < Deep Cold Archive.

Can the OSS lifecycle feature perform data tiering or deletion actions by matching file suffixes?

The lifecycle feature does not directly support matching based on file suffixes, such as `.png`. However, you can achieve similar data tiering or deletion operations in the following two ways:

**Method 1: Store in a specific prefix directory**

On the application side, store files with a specific suffix, such as `.png` files, in a designated prefix directory, for example, `images/`. When you configure a lifecycle rule, you can set the matching prefix to `images/` and specify a corresponding transition or deletion policy. This lets you manage the lifecycle of these types of files.

**Method 2: Use the tagging feature**

You can apply a fixed tag, such as `image:png`, to files with a specific suffix, such as `.png` files. When you configure a lifecycle rule, you can enable the tag matching feature and apply the corresponding policy to objects that have this tag. For more information, see [Object tagging](/help/en/oss/user-guide/object-tagging-8).

Do lifecycle rules apply to existing objects in a bucket?

A lifecycle rule applies to all Objects, including those stored before the rule is configured and those uploaded after. For example, if a rule is configured on October 7 to delete Objects after 30 days, an Object uploaded on October 5 is deleted on November 6, and an Object uploaded on October 8 is deleted on November 9.

How do I modify one or more lifecycle rule configurations?

Assume your bucket is configured with two lifecycle rules, Rule1 and Rule2, and you want to modify a configuration item in Rule1. Perform the following operations.

1.  Call the GetBucketLifecycle API to retrieve all lifecycle rules currently configured for the bucket, which are Rule1 and Rule2.
    
2.  Modify the configuration item of the Rule1 lifecycle rule.
    
3.  Call the PutBucketLifecycle API to update the lifecycle rules to Rule1+Rule2.
    

Are there log records for type transitions and expiration deletions performed by lifecycle rules?

Yes. All successful type transitions and expiration deletions performed by lifecycle rules are logged. The log fields are as follows:

-   Operation
    
    -   CommitTransition: Transitions the storage class.
        
    -   ExpireObject: Deletes an expired object.
        
-   Sync Request
    
    lifecycle: The transition and deletion operations that were triggered.
    

For more information about OSS log fields, see [Log field details](/help/en/sls/log-fields-13). For information about billing for log queries, see [Billing](/help/en/oss/user-guide/real-time-log-query/#section-bya-zaq-mri).

Can I create a single lifecycle rule to clean up both object delete markers and current version objects at the same time?

No, you cannot. You must create one rule to clean up object delete markers and another rule to delete current version objects.

How to quickly clean up all files in a bucket using lifecycle rules

#### **Bucket with versioning disabled**

For a bucket with versioning disabled, you only need to configure one lifecycle rule to automatically and quickly clean up all files and parts from incomplete multipart uploads.

1.  Log on to the OSS console, go to the [Bucket List](https://oss.console.alibabacloud.com/bucket) page, and find the target bucket.
    
2.  In the navigation pane on the left, choose **Data Security** > **Versioning**, and confirm that versioning is disabled for the bucket.
    
    ![未开启版本控制](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/3345561571/p980583.png)
    
3.  In the navigation pane on the left, choose **Data Management** > **Lifecycle**. Set a lifecycle rule to automatically delete all files in the bucket **1** day after their last modification. Also, automatically clean up parts from incomplete multipart uploads that were created more than **1** day ago.
    
    ![screenshot_2025-07-01_17-59-32](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/3345561571/p980603.png)
    

#### **Bucket with versioning enabled**

After versioning is enabled for a bucket, it generates current version objects, previous version objects, parts from incomplete multipart uploads, and delete markers. You only need to configure one lifecycle rule to automatically and quickly clean up all of these.

1.  Log on to the OSS console, go to the [Bucket List](https://oss.console.alibabacloud.com/bucket) page, and find the target bucket.
    
2.  In the navigation pane on the left, choose **Data Security** > **Versioning**, and confirm that versioning is enabled for the bucket.
    
    ![screenshot_2025-07-02_10-58-23](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/3345561571/p980726.png)
    
3.  In the navigation pane on the left, choose **Data Management** > **Lifecycle**. Set a lifecycle rule to automatically delete all current and previous version objects in the bucket **1** day after their last modification. Also, automatically clean up parts from incomplete multipart uploads that were created more than **1** day ago. This rule also cleans up delete markers.
    
    ![screenshot_2025-07-02_10-58-23](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/3345561571/p980775.png)
    

If I create two lifecycle rules for objects with the same prefix, one based on the last modified time and the other based on the last access time, which rule is applied?

For example, you create two lifecycle rules for the target bucket \`examplebucket\`. Rule 1 specifies that all objects with the prefix \`doc\` in the bucket are deleted 30 days after their last modification time. Rule 2 specifies that all objects with the prefix \`doc\` in the bucket are transitioned to the Infrequent Access storage class 30 days after their last access time.

OSS executes lifecycle rules based on the principle of minimizing user costs. Therefore, only Rule 1 takes effect. This is because Rule 1 deletes the objects after 30 days, which stops all fees from being generated. In contrast, Rule 2, which transitions objects to the Infrequent Access storage class, would still incur related storage or data retrieval fees.

When does a change to a configured lifecycle rule take effect, and how is the data matched by the original rule handled?

For example, you configure a lifecycle rule for objects with the prefix `er`. This rule transitions the objects to the Infrequent Access storage class 30 days after their last access time, and then transitions them back to the Standard storage class if they are accessed again after an additional 30 days. However, 35 days after an object's last access time, you change the prefix in the lifecycle rule from `er` to `re`. As a result, the object is transitioned to the Infrequent Access storage class, but the action to transition it back to the Standard storage class does not take effect. For objects that match the updated rule, their last access time is calculated from the time when access tracking was enabled for the bucket.

In a bucket with versioning enabled, how does intelligent tiering affect the storage classes of different object versions?

In a bucket with versioning enabled, each object version has a unique version ID and is treated as an independent object. Therefore, a previous version of an object might be in the Infrequent Access storage class, while the current version of the same object is in the Standard storage class.
