Enabling auto-renewal for subscription instances saves you the effort of manual renewal and helps prevent service disruptions caused by a missed renewal. If you no longer need auto-renewal for an instance, you can disable this feature.

## Precautions

-   Auto-renewal: The system attempts the first payment deduction at 08:00, nine days before the instance expires. If the payment fails, the system tries again once per day for the next two days, for a total of three attempts. Ensure that your Alibaba Cloud account has a sufficient balance to prevent renewal failure.
    
    **Note**
    
    If all three automatic payment attempts fail, you must renew the instance manually to prevent service interruptions and potential data loss.
    
-   If you manually renew an instance before its scheduled auto-renewal date, the system will perform the next automatic renewal before the new expiration date.
    
-   The auto-renewal feature takes effect the next day. If your instance expires the next day, you must renew it manually to avoid service disruptions. For more information, see [Manually renew a subscription instance](/help/en/mongodb/user-guide/manually-renew-an-apsaradb-for-mongodb-subscription-instance#task-yxb-fmy-32b).
    

## Method 1: Enable auto-renewal when you create an instance

**Note**

When you enable auto-renewal during purchase, the renewal period is based on the initial subscription duration. If you purchase by month, the auto-renewal period is one month. If you purchase by year, the auto-renewal period is one year. For example, if you purchase an instance for six months and enable auto-renewal, the instance is automatically renewed for one month when it is about to expire.

When you create a subscription ApsaraDB for MongoDB instance, select a subscription duration, and then select the **Auto-renewal** checkbox. The renewal fee is automatically deducted from your Alibaba Cloud account before the instance expires.

## Method 2: Enable auto-renewal for an instance that is in use

**Note**

After you enable auto-renewal, the system renews the instance based on the renewal period that you select. For example, if you select a renewal period of three months, the instance is renewed for three months at each renewal.

1.  Log on to the [ApsaraDB for MongoDB console](https://mongodb.console.alibabacloud.com/).
    
2.  In the upper-right corner of the page, click **Expenses** > **Renewal Management**.
    
3.  On the **Renewal Management** page, click the **Manual** or **Non-renewal** tab.
    
4.  To renew your instance, follow the steps that meet your renewal requirements.
    
    -   To enable auto-renewal for a single instance:
        
        1.  On the **Manual** or **Nonrenewal** tab, find the target instance and click **Enable Auto Renewal** in the **Actions** column.
            
        2.  On the **Enable Auto Renewal** page, select an auto-renewal period and click **Auto Renewal**.
            
    -   To enable auto-renewal for multiple instances:
        
        1.  On the **Manual** or **Nonrenewal** tab, select the target instances.
            
        2.  In the lower-left corner of the **Manual** or **Nonrenewal** list, click **Enable Auto Renewal**.
            
        3.  On the **Enable Auto Renewal** page, select an auto-renewal period and click **Auto Renewal**.
            
    

## Related tasks

On the **Renewal** page, you can also perform the following operations:

-   Click the **Auto**tab. In the auto-renewal list, find the target instance, and in the **Actions** column, click **Edit Auto Renewal** to change the auto-renewal period.
    
-   Click the **Manual**, **Auto**, or **Nonrenewal** tab. In the list of instances, find the target instance and click **Renew** in the **Actions** column to renew the instance.
    
-   Click the **Manual** or **Auto** tab. In the list of instances, find the target instance and click **Nonrenewal** in the **Actions** column. This prevents the instance from being renewed when it expires.
    
-   Click the **Auto** or **Nonrenewal** tab. In the list of instances, find the target instance and click **Enable Manual Renewal** in the **Actions** column. This changes the renewal method from automatic to manual and disables auto-renewal.
