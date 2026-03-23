If you no longer need an ApsaraDB RDS for MariaDB instance, you can **release** a pay-as-you-go RDS instance or **unsubscribe** from a subscription RDS instance. This topic describes the methods, usage notes, and FAQ for releasing and unsubscribing from an RDS instance in the ApsaraDB RDS console or by calling API operations.

## Usage notes

-   You can release pay-as-you-go RDS instances or unsubscribe from subscription RDS instances. After you release or unsubscribe from your RDS instances, the RDS instances that meet recycling requirements are moved to the recycle bin. You can unlock and rebuild the RDS instances in the recycle bin. For more information, see [Use the recycle bin feature](/help/en/rds/apsaradb-rds-for-mariadb/instance-recycle-bin).
    
    **Warning**
    
    The RDS instances that do not meet the recycling requirements are immediately deleted, and the data of the deleted RDS instances is no longer retained and cannot be restored. Proceed with caution. We recommend that you back up your RDS instance before you release or unsubscribe from the RDS instance.
    
-   After an RDS instance is released or unsubscribed from, the RDS instance is no longer displayed in the ApsaraDB RDS console, and no fees are generated.
    

## Procedure

### Release a pay-as-you-go RDS instance

1.  Log on to the [ApsaraDB RDS console](https://rds.console.alibabacloud.com/). In the left-side navigation pane, click **Instances**. In the top navigation bar, select the region in which the RDS instance resides.
    
2.  Use one of the following methods to **release the RDS instance**:
    
    -   Find the RDS instance and choose **More** > **Release Instance** in the **Actions** column.
        
    -   Find the RDS instance and click its ID. In the **Status** section of the **Basic Information** page, click **Release Instance**.
        
3.  In the dialog box that appears, click **OK**.
    

### Unsubscribe from a subscription RDS instance

You can use one of the following methods to unsubscribe from a subscription RDS instance:

#### **Unsubscribe page**

If you want to unsubscribe from a subscription RDS instance, [submit a ticket](https://smartservice.console.alibabacloud.com/#/ticket/add/?productId=10).

#### **Basic Information page**

1.  Log on to the [ApsaraDB RDS console](https://rds.console.alibabacloud.com/). In the left-side navigation pane, click **Instances**. In the top navigation bar, select the region in which the RDS instance resides.
    
2.  Click the instance name. In the **Status** section of the **Basic Information** page, click **Cancellation of Instance Subscription** to go to the **Unsubscribe** page.
    

#### **Instances page**

1.  Log on to the [ApsaraDB RDS console](https://rds.console.alibabacloud.com/). In the left-side navigation pane, click **Instances**. In the top navigation bar, select the region in which the RDS instance resides.
    
2.  In the **Actions** column of the RDS instance, choose **More > Cancellation of Instance Subscription**. In the dialogue box that appears, click **OK** to go to the **Unsubscribe** page.
    

## FAQ

-   After I release or unsubscribe from my RDS instance, how do I retrieve the data of the RDS instance?
    
    After you release or unsubscribe from your RDS instance, if the RDS instance meets the recycling requirements, it is moved to the recycle bin. You can rebuild the RDS instance in the recycle bin. For more information, see [Use the recycle bin feature](/help/en/rds/apsaradb-rds-for-mariadb/instance-recycle-bin).
    
-   I cannot find Release Instance in the ApsaraDB RDS console. Why?
    
    You can only unsubscribe from subscription RDS instances.
    

## Related operations

**Operation**

**Description**

[DeleteDBInstance](/help/en/rds/apsaradb-rds-for-mariadb/api-rds-2014-08-15-deletedbinstance-mariadb)

Releases a pay-as-you-go instance. You cannot unsubscribe from a subscription instance by calling an API operation.
