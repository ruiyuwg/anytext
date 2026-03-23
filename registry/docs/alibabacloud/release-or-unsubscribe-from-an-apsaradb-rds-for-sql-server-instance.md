If you no longer need an RDS SQL Server instance, you can manually **release** a pay-as-you-go or Serverless instance, or **unsubscribe from** a subscription instance. This topic describes how to release an instance in the console or by calling an API operation.

## Notes

-   **Data retention policy after release**: Pay-as-you-go and Serverless instances can only be released. Subscription instances can only be unsubscribed from. After an instance is released or unsubscribed from, its data is retained for a period in the following cases:
    
    -   The following instances are moved to the [recycle bin](/help/en/rds/apsaradb-rds-for-sql-server/manage-apsaradb-rds-for-sql-server-instances-in-the-recycle-bin). In the recycle bin, you can restore the instances.
        
        **Recycle bin feature classification**
        
        **Specific scenarios**
        
        Scenarios where instances are moved to the recycle bin
        
        -   Pay-as-you-go primary instances that are manually released.
            
        -   Pay-as-you-go primary instances that are automatically released due to overdue payments in an Alibaba Cloud account.
            
        -   Subscription primary instances that are manually unsubscribed from.
            
        -   Subscription primary instances that are automatically released after expiration.
            
        
        Scenarios where instances are not moved to the recycle bin
        
        -   [Read-only instances](/help/en/rds/apsaradb-rds-for-sql-server/read-only-instances-and-read-write-splitting/) are not moved to the recycle bin.
            
        -   [Serverless ApsaraDB RDS for SQL Server instances](/help/en/rds/apsaradb-rds-for-sql-server/serverless/) are not moved to the recycle bin.
            
        -   SQL Server 2008 R2 instances that are manually released or unsubscribed from are not moved to the recycle bin.
            
        
    -   For an instance with [cross-region backup](/help/en/rds/apsaradb-rds-for-sql-server/enable-the-cross-region-backup-feature-for-an-apsaradb-rds-for-sql-server-instance) configured, the cross-region backup data is retained if it is still within the retention period.
        
    
    **Warning**
    
    In all other cases, the instance is immediately purged. The instance data is deleted and cannot be recovered. Proceed with caution. Before you proceed, [back up your data](/help/en/rds/apsaradb-rds-for-sql-server/back-up-an-apsaradb-rds-for-sql-server-instance#concept-l1m-xgn-ydb) and [download the backups](/help/en/rds/apsaradb-rds-for-sql-server/download-the-data-backup-files-and-log-backup-files-of-an-apsaradb-rds-for-sql-server-instance#concept-yjb-pn4-ydb).
    
-   **Prerequisite for releasing a read-only instance**: Before you release the last read-only instance of a primary instance, you must [disable read/write splitting (read-only endpoint)](/help/en/rds/apsaradb-rds-for-sql-server/disable-the-read-only-routing-endpoint-of-an-apsaradb-rds-for-sql-server-instance#concept-bwy-hpp-wdb).
    
-   **Impact of releasing a primary instance on read-only instances**: When you release a primary instance that has read-only instances, its subscription read-only instances are automatically refunded and released. Its pay-as-you-go read-only instances are directly released.
    
-   **Instance status and billing after release**: After an instance is released, it no longer appears on the **Instances** page in the console, and billing for the instance stops. You can recover a primary instance from the [instance recycle bin](/help/en/rds/apsaradb-rds-for-sql-server/manage-apsaradb-rds-for-sql-server-instances-in-the-recycle-bin#concept-uhz-kd5-52b) if it has been used for more than seven days.
    
-   **A privileged account created using Terraform may cause the release to fail**: If you used Terraform to create a [privileged account](/help/en/rds/apsaradb-rds-for-sql-server/create-a-standard-account-privileged-account-and-a-global-read-only-account), you may not be able to release the instance. This is because the account cannot be deleted using Terraform.
    

## Release or unsubscribe from a primary RDS instance

### Release a pay-as-you-go primary RDS instance and a serverless RDS instance

**Important**

You cannot release a pay-as-you-go RDS instance in the **Suspended** state. You must [restart the RDS instance](/help/en/rds/apsaradb-rds-for-mysql/restart-an-apsaradb-rds-for-mysql-instance) and then release the instance. You can also call the [DeleteDBInstance](/help/en/rds/apsaradb-rds-for-mysql/api-rds-2014-08-15-deletedbinstance-mysql) operation to release the RDS instance.

1.  Log on to the [ApsaraDB RDS console](https://rds.console.alibabacloud.com/). In the left-side navigation pane, click **Instances**. In the top navigation bar, select the region in which the RDS instance resides.
    
2.  Use one of the following methods to **Release Instance**:
    
    -   Method 1: Find the required RDS instance and choose **More** > **Release Instance** in the **Actions** column.![实例列表释放按量付费实例](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/5422968061/p11173.png)
        
    -   Method 2: Find the required RDS instance and click the instance ID. In the **Status** section of the **Basic Information** page, click **Release Instance**.
        
3.  In the message that appears, click **Yes**.
    

### Unsubscribe from a subscription primary RDS instance

You can use one of the following methods to unsubscribe from a subscription RDS instance:

#### **Unsubscriptions page**

Go to the [Resource Unsubscription](https://usercenter2-intl.console.alibabacloud.com/refund) page. Then, submit a [ticket](https://smartservice.console.alibabacloud.com/#/ticket/add/?productId=10) to apply for unsubscribing from a subscription RDS instance.

#### **Basic Information page**

1.  Log on to the [ApsaraDB RDS console](https://rds.console.alibabacloud.com/). In the left-side navigation pane, click **Instances**. In the top navigation bar, select the region in which the RDS instance resides.
    
2.  Find the required RDS instance and click the instance ID. In the **Status** section of the **Basic Information** page, click **Cancellation of Instance Subscription** to go to the **Resource Unsubscription** page. Then, submit a [ticket](https://smartservice.console.alibabacloud.com/#/ticket/add/?productId=10) to apply for unsubscribing from a subscription RDS instance.
    

#### **Instance details page**

1.  Log on to the [ApsaraDB RDS console](https://rds.console.alibabacloud.com/). In the left-side navigation pane, click **Instances**. In the top navigation bar, select the region in which the RDS instance resides.
    
2.  Find the required RDS instance. In the **Actions** column of the RDS instance, choose **More > Cancellation of Instance Subscription**. In the dialog box that appears, click **OK** to go to the **Resource Unsubscription** page. Then, submit a [ticket](https://smartservice.console.alibabacloud.com/#/ticket/add/?productId=10) to apply for unsubscribing from a subscription RDS instance.
    

## Release or unsubscribe from a read-only RDS instance

### Manually release a pay-as-you-go read-only RDS instance

1.  Log on to the [ApsaraDB RDS console](https://rds.console.alibabacloud.com/rdsList/basic). In the left-side navigation pane, click **Instances**. In the top navigation bar, select the region in which your RDS instance resides.
    
2.  Use one of the following methods to **Release Instance**:
    
    -   Method 1: Find the required read-only RDS instance and choose **More** > **Release Instance** in the **Actions** column.![实例列表释放按量付费实例](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/5422968061/p11173.png)
        
    -   Method 2: Find the required read-only RDS instance and click the instance ID. On the **Basic Information** page, click **Release Instance**.![实例基本信息释放按量付费实例](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/4380686761/p3024.png)
        
3.  In the message that appears, click **OK**.
    

### Unsubscribe from a subscription read-only RDS instance

You can use one of the following methods to unsubscribe from a subscription RDS instance:

#### **Unsubscriptions page**

Go to the [Resource Unsubscription](https://usercenter2-intl.console.alibabacloud.com/refund/) page. Then, submit a [ticket](https://smartservice.console.alibabacloud.com/#/ticket/add/?productId=10) to apply for unsubscribing from a subscription RDS instance.

#### **Basic Information page**

1.  Log on to the [ApsaraDB RDS console](https://rds.console.alibabacloud.com/). In the left-side navigation pane, click **Instances**. In the top navigation bar, select the region in which the RDS instance resides.
    
2.  Find the required RDS instance and click the instance ID. In the **Status** section of the **Basic Information** page, click **Cancellation of Instance Subscription** to go to the **Resource Unsubscription** page. Then, submit a [ticket](https://smartservice.console.alibabacloud.com/#/ticket/add/?productId=10) to apply for unsubscribing from a subscription RDS instance.
    

#### **Instance details page**

1.  Log on to the [ApsaraDB RDS console](https://rds.console.alibabacloud.com/). In the left-side navigation pane, click **Instances**. In the top navigation bar, select the region in which the RDS instance resides.
    
2.  Find the required RDS instance. In the **Actions** column of the RDS instance, choose **More > Cancellation of Instance Subscription**. In the dialog box that appears, click **OK** to go to the **Resource Unsubscription** page. Then, submit a [ticket](https://smartservice.console.alibabacloud.com/#/ticket/add/?productId=10) to apply for unsubscribing from a subscription RDS instance.
    

### Automatically release a read-only RDS instance

After you release or unsubscribe from a primary RDS instance, the subscription read-only RDS instances or pay-as-you-go read-only RDS instances of the primary RDS instance are automatically deleted. In addition, the payments for the subscription read-only RDS instances of the primary RDS instance are refunded.

## **References**

-   You can release pay-as-you-go and Serverless instances by calling the [DeleteDBInstance](/help/en/rds/apsaradb-rds-for-sql-server/api-rds-2014-08-15-deletedbinstance-sqlserver) API operation. You cannot unsubscribe from subscription instances by calling an API operation.
    
-   For more information about read-only instances, see [FAQ](/help/en/rds/apsaradb-rds-for-sql-server/create-a-read-only-apsaradb-rds-for-sql-server-instance#5cf6bea8d5u95).
