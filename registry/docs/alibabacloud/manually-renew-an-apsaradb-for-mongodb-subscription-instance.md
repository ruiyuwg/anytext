To prevent data loss after a subscription instance expires, you can renew the instance within 30 days or enable the auto-renewal feature. This topic describes how to manually renew an instance.

## Prerequisites

The instance that you want to renew is a subscription instance.

## Background information

After a subscription instance expires, the instance remains available for 15 days. After 15 days, the instance is locked and the data is retained for another 15 days. You must renew the instance within 30 days after it expires. Otherwise, the instance will be released and its data will be permanently deleted. For more information about renewal rules and billing details, see [Expiration or overdue payments](/help/en/mongodb/product-overview/expiration-and-overdue-payments).

## Method 1: Renew the instance in the ApsaraDB for MongoDB console

1.  Log on to the [ApsaraDB for MongoDB console](https://mongodb.console.alibabacloud.com/).
    
2.  In the navigation pane on the left, click **Replica Set Instances** or **Sharded Cluster Instances** based on your instance type.
    
3.  In the upper-left corner of the page, select the resource group and region to which the instance belongs.
    
4.  In the Actions column of the target instance, choose **More** > **Renew**
    
5.  On the **Renew** page, select the **Duration**.
    
6.  Read the Terms of Service and click **Buy Now**.
    
7.  On the **Purchase** page, complete the payment process as prompted.
    

## Method 2: Renew the instance in the Renewal Management console

1.  Log on to the [ApsaraDB for MongoDB console](https://mongodb.console.alibabacloud.com/).
    
2.  In the upper-right corner of the page, choose **Expenses** > **Renewal**.
    
3.  On the **Renewal** page, click the **Manual** tab.
    
4.  Select the appropriate steps to renew the instance based on your renewal requirements.
    
    ## Renew a single instance
    
    1.  In the **Manual** list, click **Renew** in the **Actions** column of the target instance.
        
    2.  **Note**
        
        If the target instance is on the **Auto** or **Nonrenewal** tab, you can click **Enable Manual Renewal** in the **Actions** column of the target instance. In the **Enable Manual Renewal** dialog box, click **OK** to change the renewal method of the instance to manual renewal.
        
    3.  On the **Renew** page, select the subscription duration as needed.
        
    4.  Read the Terms of Service and click **Buy Now**.
        
    5.  On the **Purchase** page, complete the payment process as prompted.
        
    
    ## Batch renew multiple instances
    
    1.  In the **Manual** list, select the target instances.
        
    2.  Click **Batch Renew** in the lower-left corner of the **Manual** list.
        
    3.  On the **Batch Renew** page, select the renewal duration for each target instance as needed.
        
    4.  **Note**
        
        If you want to set the same renewal duration for all target instances, you can click **Batch Setting** to the right of the renewal duration. In the dialog box that appears, select the subscription duration and click **OK**.
        
    5.  Click **Pay**.
        
    6.  On the **Purchase** page, complete the payment process as prompted.
        
    

## Related tasks

Auto-renewal eliminates the need for regular manual renewals and prevents service interruptions caused by forgetting to renew. For more information, see [Enable auto-renewal](/help/en/mongodb/user-guide/enable-auto-renewal#task-mxj-kb2-j2b).
