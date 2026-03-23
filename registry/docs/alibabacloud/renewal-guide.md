Renew your subscription resources before they expire to prevent service disruptions. Pay-as-you-go resources do not require renewal.

## Impact of not renewing after resource expiration

If you do not renew a subscription resource after it expires, the service stops and the system eventually releases it automatically. Once released, all data is permanently deleted and cannot be recovered.

After expiration, most cloud products go through three phases: **Grace period**, **Suspension**, and **Release and deletion**.

-   **Grace period:** Typically lasts 1 to 15 days. During this time, the resource continues to provide service.
    
-   **Suspension:** The service stops, but the resource and its data are retained.
    
-   **Release and deletion:** The system automatically releases the resource and permanently deletes all data.
    

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/3718123771/p1058758.png)

A few cloud products are **released immediately** upon expiration. For example, fixed-quota OSS resource plans are released right after expiration. You can continue using Object Storage Service (OSS), and billing automatically switches to pay-as-you-go.

For specific expiration rules, refer to each product's documentation. The following table describes the post-expiration state changes for common cloud products:

**Common products**

**Grace period**

**Suspension phase**

**Release and deletion phase**

ECS/Simple Application Server

First 15 days after expiration

After 15 days, the instance enters suspension. Data is still retained.

15 days after suspension, the instance is automatically released. Data cannot be recovered.

ApsaraDB RDS

None

Days 1–7 after expiration: Instance is locked and inaccessible.

Days 8–15 after expiration: Compute resources are released; data backups are retained.

On day 16 after expiration, data is no longer retained.

Tair (Redis®-compatible)

First 15 days after expiration

Days 16–30 after expiration: Instance is **disabled** and inaccessible.

Days 31–37 after expiration: Instance is in the **released** state, but data is retained.

On day 38 after expiration, the instance is permanently destroyed. Data is no longer retained and cannot be recovered.

PolarDB

First 15 days after expiration

After 15 days, the cluster enters a suspended and locked state and becomes inaccessible.

15 days after suspension, the cluster is released. Basic backups are deleted, but remote data backups are retained.

Edge Security Acceleration (ESA) plan

None

15 days after expiration

The resource plan is released 15 days after expiration.

Web Application Firewall (WAF)

None

15 days after expiration: Protection stops, but instance configuration is retained.

On day 16 after expiration, the instance is automatically released.

## How to renew

**Note**

To renew resources for [Domain Names](https://dc.console.alibabacloud.com/next/index?spm=5176.28197619.0.0.3da23ae4cIYqBQ#/domain/list/renew-domain) or [Alibaba Mail](https://alimail.console.alibabacloud.com/?spm=5176.28197619.0.0.3da23ae4cIYqBQ&regionId=ap-southeast-1), go to their respective product consoles.

**You can renew a resource at any time before it is released**. The instance status and service period vary depending on whether you renew before or after the expiration date.

-   **Renew before expiration:** The new service period starts when the previous subscription ends.
    
-   **Renew after expiration:**
    
    -   If the resource has not been suspended, the new service period starts when the previous subscription ends.
        
    -   If the resource has been suspended, the new service period starts after the renewal is successful. You are not charged for the time the resource was suspended.
        

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/3718123771/p1057722.png)

You can renew resources using **manual renewal** or **auto-renewal**.

**Renewal method**

**Renewal window**

**How it works**

Manual renewal

Before the resource is released

You initiate renewal manually. The resource's validity is extended immediately after successful payment.

Auto-renewal

Auto-renewal must be enabled before expiration. If enabled, the system will attempt payment up to 14 days after expiration.

-   You preset a renewal period.
    
-   The system automatically attempts payment on key dates: 3 days and 1 day before expiration, on the expiration day, and on days 6 and 14 after expiration. If a payment fails, the system retries at the next scheduled time. If all attempts fail by day 14 after expiration, auto-renewal stops. You must then renew manually (if still within the product's allowed grace period).
    
-   You can cancel auto-renewal at any time.
    

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/5192830671/p1010782.png)

**Note**

Pay-as-you-go resources do not require renewal. Ensure your account has a sufficient balance for continued use.

For auto-renewal, ensure your payment method is valid to ensure a successful payment.

To renew third-party products from the Alibaba Cloud Marketplace, log on to the [Marketplace console](https://market.console.alibabacloud.com/bizlist) to view them, or contact Marketplace customer service.

The Alibaba Cloud account has renewal permissions by default. Before a Resource Access Management (RAM) user can perform renewal operations, the Alibaba Cloud account must grant the user the required permissions, such as `AliyunBSSFullAccess` or `AliyunBSSRenewFullAccess`.

### Manual renewal

You can renew resources manually in the console. Follow these steps.

## New console

1.  Log on to the **Expenses and Costs** console. In the navigation pane on the left, choose **Orders** > **Renewals**.
    
2.  On the **[Resource Renewal](https://usercenter2-intl.console.alibabacloud.com/renew/)** page, page, click the **Manual Renewal** tab, and click **Renew** in the **Actions** column of the product you want to renew. Use **Batch Renewal** to generate a single order for multiple instances of the same cloud product.
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/4437898671/p1047469.png)
    
3.  On the renewal details page, select a **Renewal Duration**. The new **Expiration Time** is displayed. Then, click **Confirm Order**.
    
4.  On the **Payment** page, confirm the order details and complete the payment.
    

**Note**

Before you renew, you can also select **Export Renewal Checklist** to download a list of costs for price inquiries or funding requests.

## Legacy console

1.  Log on to the **Expenses and Costs** console. In the navigation pane on the left, find **Renewal**.
    
2.  On the **[Renewal Management](https://usercenter2-intl.console.alibabacloud.com/renew/)** page, click the **Manual** tab, and click **Renew** in the **Actions** column of the product you want to renew. You can also select multiple instances of the same cloud product to **batch renew** and generate a single order.
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/4437898671/p1047476.png)
    
3.  On the renewal details page, select a **Renewal Duration**. The new **Expiration Time** is displayed. Then, click **Confirm Order**.
    
4.  On the **Payment** page, confirm the order details and complete the payment.
    

**Note**

Before you renew, you can also select **Export Renewal Checklist** to download a list of costs for price inquiries or funding requests.

You can also use the [RenewInstance](/help/en/user-center/developer-reference/api-bssopenapi-2017-12-14-renewinstance) API operation to renew instances.

**Note**

This API does not support the renewal of ECS, RDS, or Redis instances. Use the dedicated renewal APIs for those products.

### Auto-renewal

You can enable auto-renewal when you purchase a subscription resource.

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/3718123771/p1057735.png)

You can also set up auto-renewal rules in the Expenses and Costs console.

## New console

-   Log on to the [Resource Renewal](https://billing-cost.console.alibabacloud.com/renew/manual?commodityCode=&expiresIn=) page. On the **Manual Renewal** tab, select one or more products you want to renew, and then click **Enable Auto-renewal**.
    
-   On the **Enable Auto-renewal** page, configure the **Auto-renewal Period** and click **Enable Auto-renewal**. Once enabled, you can view the renewal details on the **Auto-renewal** tab of the **Resource Renewal** page.
    
-   Go to the **Auto-renewal** tab to perform operations such as **Renew** or **Modify Auto-renewal Settings** for instances with Auto-renewal enabled.
    
    -   **Renew**: Immediately perform a manual renewal for an instance that is set for auto-renewal. After a successful renewal, the system will perform the next auto-renewal based on the new expiration date.
        
    -   **Modify Auto-renewal Settings:** Change the auto-renewal period.
        
    -   **Nonrenewal:** Set the instance to not renew after its expiration date.
        

## Legacy console

-   Log on to the [Renewal Management](https://billing-cost.console.alibabacloud.com/renew/manual?commodityCode=&expiresIn=) page. On the **Manual Renewal** tab, select one or more products you want to renew, and then click **Enable Auto-renewal**.
    
-   On the **Enable Auto-renewal** page, configure the **Unified Auto Renewal Cycle** and click **Enable Auto-renewal**. After you enable auto-renewal, you can view the renewal details on the **Auto-renewal** tab.
    
-   Go to the **Auto-renewal** tab to perform operations such as Modify, **Cancel**, or **Restore Manual Renewal** for instances with auto-renewal enabled.
    
    -   **Renew**: Immediately perform a manual renewal for an instance that is set for auto-renewal.
        
    -   **Modify Auto-renewal**: Change the auto-renewal period.
        
    -   **Do Not Renew**: Set the instance to not renew after its expiration date.
        
    -   **Restore Manual Renewal**: Revert an instance to manual renewal.
        

**Note**

-   Enabling auto-renewal only sets the renewal period. It does not renew the resource immediately. The rule takes effect the next day.
    
-   If your resource expires the next day, auto-renewal is not performed. Renew it manually.
    

You can also call the [SetRenewal](/help/en/user-center/developer-reference/api-bssopenapi-2017-12-14-setrenewal) API operation to set up auto-renewal for an instance.

**Note**

-   Enabling auto-renewal only sets the renewal period. It does not renew the resource immediately. The rule takes effect the next day.
    
-   If your resource expires the next day, auto-renewal is not performed. Renew it manually.
    

After a successful renewal, you can log on to the [Resource Renewal](https://billing-cost.console.alibabacloud.com/renew/manual) page. Click the **Manual Renewal** tab to view all instances set for manual renewal, or click the **Auto-renewal** tab to view all instances set for auto-renewal.

**Note**

If you have enabled multi-account management for your enterprise, the management account administrator can view instances under member accounts on the Resource Renewal page but cannot perform operations on them.

## Renewal recommendations

### Monitor expiration and renewal notifications

The system sends notifications by internal message, email 7 days, 3 days, and 1 day before expiration, and on the expiration day and the day before release. You can manage your subscriptions by logging on to [Message Center - Basic Receiving Management](https://notifications-intl.console.alibabacloud.com/subscribeMsg).

### Periodically check for expiring resources

Log on to the [Resource Renewal](https://usercenter2-intl.console.alibabacloud.com/renew/manual) page and filter for expiring resources by **Start/End Time** or **Region**. You can also search by a specific **Instance ID** or **Status** to find and renew resources.

### Unify ECS instance expiration dates for centralized renewal

There is an ECS feature that lets you unify expiration dates to renew multiple ECS instances to the same day of the month. The new billing cycle starts on the renewal date, which makes it easier to manage renewals. For more information, see [Unify expiration dates for subscription ECS instances](/help/en/ecs/synchronize-the-expiration-dates-of-subscription-instances).

### Set resources to not renew to reduce notifications

If you no longer need a resource after it expires, you can set it to not renew to reduce the number of expiration notifications you receive. We recommend that you back up your data before the resource expires to avoid business impact.

1.  Log on to the Expenses and Costs console and go to the **Resource Renewal** page.
    
2.  On the **Manual Renewal** or **Auto-renewal** tab, find the resources you do not want to renew.
    
3.  In the **Actions** column on the right, click **Nonrenewal**, or select multiple instances of the same cloud product and click **Set as Nonrenewal**.
    
4.  Switch to the **Nonrenewal upon Expiration** tab to view the resources that are set not to renew.
    

## FAQ

### Why can't I find the resource I want to renew on the renewal page?

1.  If a resource instance does not support renewal, it does not appear on the renewal page. Common examples include:
    
    -   Pay-as-you-go instances, which do not require renewal.
        
    -   Instances that have already been released.
        
2.  Resource Plan instances are renewed on the [Resource Plan](https://billing-cost.console.alibabacloud.com/fortune/billing-account) page.
    
3.  To renew resources for [Domain Names](https://dc.console.alibabacloud.com/next/index?spm=5176.28197619.0.0.3da23ae4cIYqBQ#/domain/list/renew-domain) or [Alibaba Mail](https://alimail.console.alibabacloud.com/?spm=5176.28197619.0.0.3da23ae4cIYqBQ&regionId=ap-southeast-1), go to their respective consoles.
    

### I enabled auto-renewal. Why did my renewal fail?

Enabling auto-renewal sets the renewal period but does not renew the resource immediately. The system attempts to process the payment on the 3rd and 1st days before expiration, the day of expiration, and the 6th and the 14th days after expiration. If a payment attempt fails, the system tries again at the next scheduled time. Your renewal may have failed if payment attempts were unsuccessful due to an insufficient balance or an invalid payment method. Please resolve the payment issue and renew the resource manually.

### I renewed the wrong resource. Can I get a refund?

Refunds depend on whether the renewal order has taken effect. Log on to the [Unsubscribe](https://usercenter2-intl.console.alibabacloud.com/refund/) page to check the status.

-   If the order is under the **Unsubscribe Renewal That Does Not Take Effect** tab, the renewal has not yet taken effect, and you can apply for a full refund.
    
-   If the order is under the **Unsubscribe Resource** tab, the renewal has taken effect, and a partial refund will be issued according to the partial refund rules.
    

For detailed refund rules, see [Unsubscription rules](/help/en/user-center/cancel-subscription/).

#### Why can a one-month renewal be 28, 29, 30, or 31 days long?

A one-month renewal extends the service to 00:00 on the corresponding day of the next month. For example:

-   If a resource expires at 00:00 on January 31, a one-month renewal extends the expiration to February 29 (in a leap year) or February 28. Future renewals will expire on the 29th or 28th.
    
-   If a resource expires at 00:00 on February 1, a one-month renewal extends the expiration to 00:00 on March 1. This duration is 29 days (in a leap year) or 28 days.
    
-   If a resource expires at 00:00 on May 21, a one-month renewal extends the expiration to 00:00 on June 21. This duration is 31 days.
    
-   If a resource expires at 00:00 on June 1, a one-month renewal extends the expiration to 00:00 on July 1. This duration is 30 days.
    

### If I don't want to use an instance after it expires, why not just let it expire? What is the purpose of the Nonrenewal feature?

The Nonrenewal feature is typically used in two scenarios:

-   **Scenario 1:** Alibaba Cloud generally sends multiple notifications before an instance is suspended. If you do not plan to renew an instance and do not want to receive these notifications, you can set it to Nonrenewal. Alibaba Cloud will then reduce the number of reminders.
    
-   **Scenario 2:** Some enterprise customers may have agreements with Alibaba Cloud to prevent instances from being suspended upon expiration. If the customer wants specific instances to be suspended normally, they can use the Nonrenewal feature for those selected instances.
    

For other renewal questions, see: [Resource Renewal FAQ](/help/en/user-center/support/renewal-guide-q-a).
