This topic describes how to enable the audit log feature in the ApsaraDB for MongoDB console to query, analyze, and export logs. The audit log feature helps security auditors obtain information such as operator identities and time of data modifications, and identify internal risks such as abuse of permissions and execution of non-compliant commands.

## Prerequisites

-   Log Service is activated. For more information, see [Getting Started](/help/en/sls/getting-started#concept-gpw-x2w-ydb).
    
-   If you want to enable the audit log feature as a Resource Access Management (RAM) user, you need to grant the following permissions to the RAM user:
    
    -   **AliyunLogFullAccess**: This permission is a system policy. For more information about how to grant permissions to the RAM user, see [Grant permissions to a RAM user](/help/en/ram/grant-permissions-to-a-ram-user#task-187800).
        
    -   **dds:CheckServiceLinkedRole**: This permission is a custom policy. You need to create a custom policy in the RAM console before you attach the policy to the RAM user. For more information about how to create a custom policy on the JSON tab, see [Create custom policies](/help/en/ram/create-a-custom-policy#section-kwn-gu8-48m). For more information about how to grant permissions to the RAM user, see [Grant permissions to a RAM user](/help/en/ram/grant-permissions-to-a-ram-user#task-187800).
        
        The following example shows the script of the **dds:CheckServiceLinkedRole** policy:
        
        ```
        {
        	"Version": "1",
        	"Statement": [
        		{
        			"Effect": "Allow",
        			"Action": "dds:CheckServiceLinkedRole",
        			"Resource": "*"
        		}
        	]
        }
        ```
        
-   If you want to access audit logs as a RAM user, you need to grant the **AliyunLogFullAccess** or **AliyunLogReadOnlyAccess** permission to the RAM user. For more information about how to grant permissions to the RAM user, see [Grant permissions to a RAM user](/help/en/ram/grant-permissions-to-a-ram-user#task-187800).
    

## Usage notes

-   After you enable the audit log feature for an instance, ApsaraDB for MongoDB audits and logs the write operations that are performed on the instance. The instance may experience a performance decrease of 5% to 15% and specific amount of latency and jitter. The performance decrease, latency, and jitter vary with the amount of data that is written or audited.
    
    **Note**
    
    Your application may write a large amount of data to an instance. To prevent performance from decreasing in such scenarios, we recommend that you enable the audit log feature only for troubleshooting issues or auditing the security of the instance.
    
-   By default, after the audit log feature is enabled, the selected operation types are **admin** and **slow**. For more information about how to change operation types, see [Modify operation types for audit logs](/help/en/mongodb/user-guide/modify-the-operation-type-for-audit-logs#task-2538000).
    
-   The specified log retention period for an instance is applicable to the instance and all other instances that reside within the same region as the instance. Other operations are applicable only to the current instance.
    
-   If you want to retain audit logs for a longer period of time or use larger storage space for audit logs during the free trial of this feature, you can upgrade the free trial edition to the official edition. For more information, see [Upgrade to the official edition](/help/en/mongodb/user-guide/upgrade-to-the-official-edition#task-2159129).
    

## Billing rules

You are charged fees for the official edition of the audit log feature based on the storage capacity used by audit logs and the retention period of the audit logs. The following table lists the storage unit price of the audit log feature in different regions.

**Region**

**Unit price (USD per GB-hour)**

Regions in the Chinese mainland

0.002

China (Hong Kong)

0.006

Singapore

UAE (Dubai)

US (Silicon Valley)

US (Virginia)

UK (London)

Germany (Frankfurt)

Japan (Tokyo)

0.004

Malaysia (Kuala Lumpur)

Indonesia (Jakarta)

Philippines (Manila)

**Important**

The preceding unit price of backup is for reference only. The unit price may change when you purchase an instance. The unit price generated in purchase inquiries and bills prevails. For more information, see [the Pricing tab of ApsaraDB for MongoDB buy page](https://www.alibabacloud.com/zh/product/apsaradb-for-mongodb/pricing).

You can also use the methods described in the following table to reduce fees incurred for audit logs.

**Method**

**Risk**

**References**

Specify a shorter retention period

This shortens the traceable history time of audit logs.

[Modify the retention period for audit logs](/help/en/mongodb/user-guide/modify-the-retention-period-for-audit-logs#task-2168408)

Select less audit operation types

After a specified audit operation type is removed, the audit logs for this operation type are no longer uploaded.

**Note**

After a specified audit operation type is removed, only the existing audit log data of this operation type is reserved within the retention period.

For example, you specify a retention period of five days and select the following audit operation types: **admin**, **slow**, and **query**. If you remove the **query** operation at 00:00:00 on October 10, 2022, the audit logs for the **query** operation generated after that time are no longer saved. The audit logs for the **query** generated from 00:00:00 on October 05, 2022 to 00:00:00 on October 10, 2022 also gradually expire and are automatically deleted after they expire.

[Modify operation types for audit logs](/help/en/mongodb/user-guide/modify-the-operation-type-for-audit-logs#task-2538000)

Disable the audit log feature

After you disable the audit log feature, the audit logs of the instance are not uploaded. You cannot track and audit subsequent operations on the instance.

**Note**

Only the audit logs within the retention period that ends at the time when you disable the audit log feature are retained.

For example, you specify a retention period of five days and disable the audit log feature at 00:00:00 on October 10, 2022. The audit logs generated after that time are no longer saved. The audit logs generated from 00:00:00 on October 5, 2022 to 00:00:00 on October 10, 2022 also gradually expire and are automatically deleted.

[Disable the audit log feature](/help/en/mongodb/user-guide/disable-the-audit-log-feature-1#task-1937630)

## Procedure

1.  Log on to the [ApsaraDB for MongoDB console](https://mongodb.console.alibabacloud.com/).
    
2.  In the left-side navigation pane, click **Replica Set Instances** or **Sharded Cluster Instances**.
    
3.  In the upper-left corner of the page that appears, select the resource group and region to which the desired instance belongs.
    
4.  Click the ID of the instance that you want to manage or click **Manage** in the **Actions** column.
    
5.  In the left-side navigation pane of the instance details page, choose **Data Security** > **Audit Logs**.
    
6.  On the **Latest Audit Logs** page, configure the **Log Retention Period** parameter.
    
    -   The valid values of the parameter is 1 to 365. The default value is 30. The parameter is measured in days.
        
    -   The specified log retention period for an instance is applicable to the instance and all other instances that reside within the same region as the instance. We recommend that you evaluate the retention period of audit logs for all instances within the same region before you configure the parameter.
        
    
7.  Click **Enable Audit Logs**.
    
    **Note**
    
    When the audit log feature is enabled, ApsaraDB for MongoDB automatically obtains the **AliyunServiceRoleForMongoDB** role. This role allows ApsaraDB for MongoDB to use audit logs from Log Service.
    
8.  In the **Enable Audit Logs** message, read the prompt and click **OK**.
    

## What to do next

-   For information about how to query ApsaraDB for MongoDB audit logs, see [Query audit logs](/help/en/mongodb/user-guide/view-audit-logs-1).
    
-   For information about how to download audit logs to your on-premises device, see [Download audit logs](/help/en/mongodb/user-guide/download-audit-logs-1).
    
-   For information about how to modify operation types, see [Modify operation types for audit logs](/help/en/mongodb/user-guide/modify-the-operation-type-for-audit-logs).
    
-   For information about how to disable the audit log feature, see [Disable the audit log feature](/help/en/mongodb/user-guide/disable-the-audit-log-feature-1).
    
-   After the logs of your instance are collected to Simple Log Service, you can query, analyze, and download the logs. You can also configure alert rules for the logs. For more information, see [Common operations on logs of Alibaba Cloud services](/help/en/sls/common-operations-on-logs-of-alibaba-cloud-services#concept-2534704).
