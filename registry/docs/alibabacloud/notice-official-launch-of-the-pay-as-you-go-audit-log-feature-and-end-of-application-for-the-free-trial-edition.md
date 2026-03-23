This topic describes how to enable the audit log feature for an ApsaraDB for MongoDB instance. The audit log feature is integrated with Log Service and allows you to query, analyze, and export the audit logs of the instance. The audit log feature also helps you gain insights into the security and performance of the instance.

## Coverage

ApsaraDB for MongoDB instances that use **general-purpose local disks** and **dedicated local disks**

## Changes

As of January 6, 2022, the following changes will be made to the audit log feature for ApsaraDB for MongoDB in all regions:

-   Official launch of the audit log feature
    
    The following table lists the differences between the free trial edition and official edition.
    
    **Comparison item**
    
    **Free trial edition**
    
    **Official edition**
    
    Retention period
    
    One day.
    
    You can set this parameter based on your actual needs. Valid values: 1 to 365 days. Default value: 30 days.
    
    **Important**
    
    The specified retention period is valid for all instances in the region for the current instance. We recommend that you evaluate the retention period of audit logs for all instances in the same region before you set the parameter.
    
    Maximum storage capacity
    
    A maximum of 100 GB is provided in the current region for all instances that have the free trial audit log feature enabled.
    
    No limit.
    
-   Pay-as-you-go for the official audit log feature based on the storage usage and retention period
    
    For more information, see the [Pricing](https://www.alibabacloud.com/product/apsaradb-for-mongodb/pricing) tab of the ApsaraDB for MongoDB product page.
    
-   No more application for the free trial audit log feature
    
    After the official launch of the audit log feature, you cannot apply for the free trial audit log feature.
    

## Suggestions

-   Enable or disable the official audit log feature.
    
    The official audit log feature is not enabled by default. You must manually enable it if necessary. For more information, see [Enable the audit log feature](/help/en/mongodb/user-guide/enable-the-audit-log-feature-1#task-2488775).
    
    If the feature is no longer needed, we recommend that you disable the feature to save costs. For more information, see [Disable the audit log feature](/help/en/mongodb/user-guide/disable-the-audit-log-feature-1#task-1937630).
    
-   If you have enabled the free trial audit log feature, you can perform the following operations based on your business requirements after the official launch of the audit log feature.
    
    **Business requirement**
    
    **Procedure**
    
    Use the official audit log feature
    
    You can manually upgrade the free trial edition to the official audit log feature.
    
    Perform the following steps:
    
    On the **Audit Logs** page, click **Upgrade to Official Edition** in the upper-right corner.
    
    Use the free trial audit log feature
    
    No further operations are required.
    
    Discard the audit log feature
    
    Perform the following steps to disable the free trial audit log feature:
    
    1.  Download existing audit logs to avoid loss.
        
        For more information, see [Download audit logs](/help/en/mongodb/user-guide/download-audit-logs#task-2491951).
        
    2.  Disable the free trial audit log feature.
        
        On the **Audit Logs** page, click **Disable Audit Logs** in the upper-right corner.
        
    
-   The official audit log feature is charged based on the storage space and retention period of audit logs. You can use the following methods to reduce costs.
    
    **Method**
    
    **Risk**
    
    **References**
    
    Use a shorter retention period
    
    This shortens the traceable history of audit logs.
    
    [Modify the retention period for audit logs](/help/en/mongodb/user-guide/modify-the-retention-period-for-audit-logs#task-2168408)
    
    Select less audit operation types
    
    After a specified audit operation type is removed, the audit logs for this operation type are no longer uploaded.
    
    **Note**
    
    After a specified audit operation type is removed, only the existing audit log data of this operation type will be reserved within the retention period.
    
    For example, you set the audit log retention period to five days and first select the audit operation types are **admin**, **slow**, and **query**. If you remove the **query** operation at 00:00:00 on October 10, 2022, the audit logs for the **query** operation will no longer be saved. The audit logs for the **query** generated from 00:00:00 on October 05, 2022 to 00:00:00 on October 10, 2022 will gradually expire and will be automatically deleted after they expire.
    
    [Modify operation types for audit logs](/help/en/mongodb/user-guide/modify-the-operation-type-for-audit-logs#task-2538000)
    
    Disable the audit log feature
    
    After you disable the audit log feature, audit logs of the instance will not be uploaded. You cannot track and audit subsequent operations on the instance.
    
    **Note**
    
    Only the audit logs within the retention period that ends at the time when you disable the audit log feature are retained.
    
    For example, you set a retention period of five days and disable the audit log feature at 00:00:00 on October 10, 2022. The audit logs generated after that time are not saved. The audit logs generated from 00:00:00 on October 5, 2022 to 00:00:00 on October 10, 2022 also gradually expire and are automatically deleted.
    
    [Disable the audit log feature](/help/en/mongodb/user-guide/disable-the-audit-log-feature-1#task-1937630)
    

## FAQ

-   Do I continue to use the free trial audit log feature after the official launch of the audit log feature?
    
    The free trial audit log feature that you applied for before still can be used, but you cannot apply for it after the official launch of the audit log feature.
    
-   Why is the new application for the free trial audit log feature terminated?
    
    For the free trial audit log feature, the log retention period is fixed to one day, and 100 GB storage is provided to store audit logs that are generated on all instances in the same region. In actual business scenarios, you may require a longer log retention period and a larger storage capacity.
    
-   How do I view the storage usage for the official audit log feature?
    
    You can view the storage usage of the instance in the upper-left corner of the **Audit Logs** page.
