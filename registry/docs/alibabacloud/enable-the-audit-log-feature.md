ApsaraDB for MongoDB integrates with Log Service to provide the audit log feature. After you enable audit logging, you can query, analyze, and export audit logs for your instance. Audit logs give you real-time visibility into the security and performance of your instance.

## Before you begin

Before you enable the audit log feature, make sure that the following requirements are met:

-   Your instance is a **general-purpose instance with local disks** or a **dedicated instance with local disks**.
    
-   The RAM user that you use to enable the audit log feature has the **AliyunLogFullAccess** policy attached. For more information, see [Grant permissions to a RAM user](/help/en/ram/grant-permissions-to-a-ram-user#task-187800).
    

## Editions and limits

ApsaraDB for MongoDB offers two editions of the audit log feature: a free trial edition and a pay-as-you-go official edition.

### Free trial edition

-   Audit logs are retained for **one day**.
    
-   The maximum storage available for all instances in the same region is **100 GB**.
    
-   The free trial edition slightly lowers the performance of your ApsaraDB for MongoDB instance. After you enable the free trial edition, Log Service logs all types of operations performed on the instance. You can use these logs to troubleshoot issues.
    

Starting from January 6, 2022, new applications for the free trial edition have ended. For more information, see [\[Notice\] On official launch of the pay-as-you-go audit log feature and no more application for the free trial edition](/help/en/mongodb/product-overview/notice-official-launch-of-the-pay-as-you-go-audit-log-feature-and-end-of-application-for-the-free-trial-edition#concept-2001907).

### Pay-as-you-go official edition

Starting from January 6, 2022, the official edition of the audit log feature is available in all regions.

## Enable audit logging

1.  Go to the [Replica Set Instances](https://mongodb.console.alibabacloud.com/replicate/cn-hangzhou/instances) or [Sharded Cluster Instances](https://mongodb.console.alibabacloud.com/sharding/cn-hangzhou/instances) page.
    
2.  In the top navigation bar, select the region where your instance resides.
    
3.  Find the target instance and click its instance ID.
    
4.  In the left-side navigation pane, choose **Data Security** > **Audit Logs**.
    
5.  On the **Latest Audit Logs** page, click **Enable Audit Logs**.
    
6.  In the **Enable Audit Logs** message, read the prompt and click **OK**.
