Tair (Redis OSS-compatible) provides a recycle bin that retains instances after they expire, have overdue payments, or are manually released. From the recycle bin, you can unlock, rebuild, or permanently destroy an instance.

## Precautions

-   When a Tair instance expires or has overdue payments, the instance is handled based on the amount of time that has elapsed since the expiration date and the billing method of the instance. For more information, see [Expiration and overdue payments](/help/en/redis/product-overview/expiration-and-overdue-payments#concept-pvp-5b5-tdb).
    
-   Pay-as-you-go instances that are manually released are also moved to the recycle bin. These instances are deleted after they are retained in the recycle bin for seven days.
    

**Warning**

When the grace period of the instance is over, the system permanently deletes the instance.

## Procedure

1.  Log on to the console and go to the [Instances](https://kvstore.console.alibabacloud.com/Redis/instance/cn-hangzhou) page. In the top navigation bar, select the region in which the instance that you want to manage resides.
    
2.  In the left-side navigation pane, click **Recycle Bin**.
    
3.  On the Recycle Bin page, perform an operation in the **Actions** column corresponding to the desired instance based on your business requirements.
    
    **Operation**
    
    **Description**
    
    **Unlock**
    
    Renews the instance. After the instance is renewed, it enters the **Running** state and continues to provide services.
    
    **Rebuild**
    
    Restores all data and some configurations (such as port numbers) from the original instance to a newly created instance. However, you must reconfigure **IP address whitelists**, **account passwords**, and **parameters**.
    
    **Destroy**
    
    Deletes the instance and its data backups permanently.
    
    **Warning**
    
    After you delete the instance, data in the instance is permanently deleted and can no longer be restored. Proceed with caution.
