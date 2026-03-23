Resource plans and workspace subscription quotas are prepaid for a specific subscription duration. If you no longer need them, you can unsubscribe to release the resources. This topic describes the relevant rules and procedures.

## Unsubscription **rules**

### **Subscription quota**

Partial refunds are available for workspace subscription quotas. The refund amount is calculated using the following formula: `Refundable amount = Paid amount - Fees for consumed resources`.

**Important**

-   Paid amount: The cash amount paid for the order. This amount does not include discounts from vouchers or coupons.
    
-   Fees for consumed resources: This fee is calculated based on the duration of use and the amount paid for the order. The formula is: `Fees for consumed resources = (Used duration / Subscription duration) × Paid amount`.
    
-   After you unsubscribe from a subscription quota, the corresponding workspace is deleted.
    

### **Resource plan**

You can apply for a full refund for a resource plan if it is not used within five days of purchase. The refund is calculated using the following formula: `Refund amount = Actual amount paid`. The actual amount paid is the cash amount for the order and does not include discounts from vouchers or coupons.

For more information, see [Unsubscription rules](/help/en/user-center/cancel-subscription/#topic-2059664), [Refund destinations](/help/en/user-center/refund-flow#topic-2059665), and [Unsubscription FAQ](/help/en/user-center/support/faq-about-unsubscription#topic-2059662).

## **Procedure**

After you have reviewed the unsubscription rules, follow these steps to unsubscribe from a subscription quota or a resource plan.

### Subscription quota

1.  Go to the EMR Serverless Spark workspace page.
    
    1.  Log on to the [E-MapReduce console](https://emr.console.alibabacloud.com/#/region/cn-hangzhou/resource/all/overview).
        
    2.  In the navigation pane on the left, choose **EMR Serverless** > **Spark**.
        
2.  On the **Spark** page, find the target workspace and click **Delete** in the **Actions** column.
    
3.  On the [Unsubscribe](https://usercenter2-intl.console.alibabacloud.com/refund/renew-list) page, go to the **Unsubscribe Resource** > **Regular Cloud Resource** section. Find the product that you want to unsubscribe from and click **Unsubscribe Resource** in the Actions column.
    
    Alternatively, set **Commodity Name** to **EMR Serverless Spark Reserved Resources** and click **Search**.
    
4.  Review and confirm the resource information, and then click **Unsubscribe**.
    
    When you unsubscribe from a subscription quota, the workspace is deleted.
    
    **Important**
    
    After a workspace is deleted, its resources, including jobs and data, are released and cannot be restored. Therefore, you must back up the job scripts before you delete the workspace to prevent data loss.
    

### Resource plan

1.  On the [Unsubscribe](https://usercenter2-intl.console.alibabacloud.com/refund/renew-list) page, go to the **Unsubscribe Resources** > **Resource Plans** section. Find the product that you want to unsubscribe from and click **Unsubscribe Resource** in the Actions column.
    
    Alternatively, set **Commodity Name** to **Spark Computing Resource Plan** and click **Search**.
    
2.  Review and confirm the resource information, and then click **Unsubscribe**.
    
    After you unsubscribe from the resource plan, the workspace remains available.
