If a Tair (Redis OSS-compatible) instance expires or has overdue payments, the instance may not be able to run normally. If you want to continue using the instance, promptly renew the instance or enable auto-renewal for the instance.

## **Impacts of instance expiration and overdue payments**

**Warning**

If your instance expires or has overdue payments, the instance may become unavailable. In this case, Alibaba Cloud sends notifications to you. To prevent service interruptions, we recommend that you renew the instance or add funds to your Alibaba Cloud account at the earliest opportunity.

If an instance expires or has overdue payments, the instance is handled based on the time elapsed since the expiration date and the billing method of the instance. The following table describes how the instances are handled.

Table 1. Subscription instances

**Time elapsed since the expiration date**

**Description**

Day 1 to day 15

The instance runs normally.

Day 16 to day 30

The instance is in the **Disabled** state and cannot be accessed. If you want to continue using the instance, you must renew the instance at the earliest opportunity. For more information, see [Renewal](/help/en/redis/product-overview/renewal#section-p2y-lll-vdb).

**Note**

-   If the instance is in the **Disabled** state, the subscription duration starts from the time when you renew the instance. For example, if your instance expired on April 10, 2021 and you renewed the instance for one month on April 15, 2021, the new expiration date of the instance is May 15, 2021.
    
-   If you do not renew an expired instance within a specified time period, the data stored in the instance may be lost. To prevent data loss, you can enable [auto-renewal](https://usercenter2-intl.console.alibabacloud.com/renew/manual?expiresIn=&commodityCode=) after you purchase the instance.
    

Day 31 to day 37

The instance is in the **Released** state. You are notified by text message or email. Data is retained for the next eight days. If you want to continue using the instance, you can restore the instance from the recycle bin. When you restore the instance from the recycle bin, Tair (Redis OSS-compatible) creates an instance by replicating the data of the original instance. For more information, see [Manage instances in the recycle bin](/help/en/redis/user-guide/manage-instances-in-the-recycle-bin#concept-l4n-pl4-m2b).

Day 38

The instance is destroyed. The data that is stored in the instance cannot be restored.

**Warning**

To retain the data in the instance, you must renew the instance before it is deleted. Otherwise, the data cannot be restored.

Table 2. Pay-as-you-go instances

**Time elapsed since the expiration date**

**Description**

Day 1 to day 15

The instance runs normally.

Day 16 to day 30

The instance is in the **Disabled** state and cannot be accessed. While the instance is in this state, billing of the instance is suspended.

If you want to continue using the instance, make sure that you have sufficient balance within your account. Billing is resumed after you add funds to your account and settle the overdue payments.

Day 31 to day 37

The instance is in the **Released** state. You are notified by text message or email. Data is retained for the next eight days. If you want to continue using the instance, you can restore the instance from the recycle bin. When you restore the instance from the recycle bin, Tair (Redis OSS-compatible) creates an instance by replicating the data of the original instance. For more information, see [Manage instances in the recycle bin](/help/en/redis/user-guide/manage-instances-in-the-recycle-bin#concept-l4n-pl4-m2b).

Day 38

The instance is destroyed. The data that is stored in the instance cannot be restored.

**Warning**

To retain the data in the instance, you must renew the instance before it is deleted. Otherwise, the data cannot be restored.

## **FAQ**

After my subscription instance expires, will I still be charged?

The billable items for Tair (Redis OSS-compatible) instances include instance specifications, audit log storage, and bandwidth upgrade.

After your subscription instance expires, **billing for the instance specifications and bandwidth upgrade stops**. If the audit log feature is enabled for the instance, you are still charged for audit log storage on a pay-as-you-go basis until the audit logs expire. Bills are generated on an hourly basis.

Why is a subscription instance still displayed in the **instance list** after it expires?

After a subscription instance **expires**, the instance is still displayed on the **Instances** page. However, the instance is in the **Disabled** state and **stops being billed**. After **15 days, the instance is automatically released**. Then, the instance is no longer displayed in the instance list.

If you want to **destroy** the instance immediately after it expires, you can click **Destroy** in the Actions column corresponding to the instance on the **Recycle Bin** page.

**Warning**

After you destroy the instance, data in the instance is permanently deleted and can no longer be restored. Proceed with caution.
