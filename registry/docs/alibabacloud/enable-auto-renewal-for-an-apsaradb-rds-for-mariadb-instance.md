This topic describes how to use the auto-renewal feature for an ApsaraDB RDS for MariaDB instance. If you enable the auto-renewal feature for your RDS instance, you do not need to manually renew your subscription or be concerned about service interruptions caused by subscription expiration.

If you do not renew your subscription RDS instance before the expiration date, your workloads are interrupted, and your data may be lost. For more information, see [Overdue payments](/help/en/rds/product-overview/overdue-payments#concept-drz-ml2-vdb).

**Note**

-   RDS instances that use the pay-as-you-go billing method do not expire and therefore do not require renewal.
    
-   ApsaraDB RDS for MariaDB does not support the serverless billing method.
    

## Usage notes

-   If you enable the auto-renewal feature for your RDS instance, the system deducts the renewal fee at 08:00 on three days before the RDS instance expires. If the deduction fails, the system attempts to deduct the renewal fee once every day for the remaining subscription duration until the deduction succeeds.
    
    **Important**
    
    Make sure that the balance of your Alibaba Cloud account is sufficient to prevent renewal failures. If all of the automatic fee deduction attempts fail, you must manually renew the subscription before your RDS instance expires. This prevents instance downtime that may cause data loss.
    
-   If you have manually renewed your RDS instance before the renewal fee is automatically deducted, no renewal fees are automatically deducted until next time the expiration date approaches.
    
-   After you enable the auto-renewal feature, the configuration takes effect the next day. If your RDS instance is about to expire the next day, manually renew it to avoid service interruptions. For more information, see the [Manually renew an ApsaraDB RDS for MariaDB instance](/help/en/rds/apsaradb-rds-for-mariadb/manually-renew-an-apsaradb-rds-for-mariadb-instance#concept-fwh-phj-wdb).
    

## Enable the auto-renewal feature when you purchase an RDS instance

**Note**

If you select Auto-renewal when you purchase an RDS instance, the system automatically renews the instance based on the specified renewal cycle. The renewal cycle is one month or one year. For example, if you select Auto-renewal when you purchase an RDS instance with a six-month subscription, the system automatically renews the instance with a one-month subscription each time the instance is due to expire.

When you purchase a subscription RDS instance, select **Auto-Renew Enabled**.![](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/3150359951/p11146.png)

## Enable the auto-renewal feature after you purchase an RDS instance

1.  Log on to the [ApsaraDB RDS console](https://rds.console.alibabacloud.com/).
    
2.  In the top navigation bar, choose **Expenses** > **Renewal Management**.![续费控制台](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/3868906061/p48528.png)
    
3.  On the **Manual** or **Nonrenewal** tab of the page that appears, specify filter conditions to find the RDS instance for which you want to enable the auto-renewal feature. You can enable the auto-renewal feature for one or more RDS instances at a time.
    
    -   Enable the auto-renewal feature for an RDS instance
        
        1.  Click **Enable Auto Renewal** in the Actions column of the RDS instance.![单个开通](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/6940359951/p48534.png)
            
        2.  In the Enable Auto Renewal dialog box, select an **auto-renewal cycle** and click **Auto Renew**.
            
            **Note**
            
            If the auto-renewal feature is enabled for an RDS instance, the system renews the instance based on the specified auto-renewal cycle. For example, if the auto-renewal cycle is set to three months, a fee for three-month subscription is collected each time the instance is automatically renewed.
            
    
    -   Enable the auto-renewal feature for multiple RDS instances at a time
        
        Select the RDS instances and click **Enable Auto Renewal** below the instance list.![批量开通](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/6940359951/p48536.png)
        
    -   In the **Enable Auto Renewal** dialog box, select an auto-renewal cycle and click **Enable Auto Renew**.
        

## Change the auto-renewal cycle

1.  Log on to the [ApsaraDB RDS console](https://rds.console.alibabacloud.com/).
    
2.  In the top navigation bar, choose **Expenses** > **Renewal Management**.![续费控制台](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/3868906061/p48528.png)
    
3.  On the **Auto** tab, specify filter conditions to find the RDS instance for which you want to enable the auto-renewal feature. Then, select the RDS instance and click **Edit Auto Renewal** in the Actions column.![修改自动续费](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/7940359951/p48538.png)
    
4.  In the dialog box that appears, change the auto-renewal cycle and then click **OK**.
    

## Disable the auto-renewal feature

1.  Log on to the [ApsaraDB RDS console](https://rds.console.alibabacloud.com/).
    
2.  In the top navigation bar, choose **Expenses** > **Renewal Management**.![续费控制台](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/3868906061/p48528.png)
    
3.  On the **Auto** tab, specify filter conditions to find the RDS instance for which you want to disable the auto-renewal feature. Then, select the RDS instance and click **Enable Manual Renewal** in the Actions column.![关闭自动续费](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/7940359951/p48539.png)
    
4.  In the message that appears, click **OK**.
    

## Related operations

**Operation**

**Description**

[CreateDBInstance](/help/en/rds/api-create-an-instance#doc-api-Rds-CreateDBInstance)

Creates an instance.

**Note**

You can call this operation to enable the auto-renewal feature for an instance when you create the instance.

[RenewInstance](/help/en/rds/api-manually-renew-an-apsaradb-for-rds-instance#doc-api-Rds-RenewInstance)

Renews a subscription instance.

**Note**

You can call this operation to enable the auto-renewal feature for an instance after you create the instance.
