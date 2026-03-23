Alibaba Cloud manages the lifecycle of your purchased resources. For example, after a **Subscription** instance expires, it is stopped and eventually released. You can renew the instance to extend its service period and ensure business continuity. For more information about renewals, see [Renew expiring resources](/help/en/user-center/renewal-guide-1).

**Category**

**Questions**

Renewal rules

-   [When should I use the "Non-renewal upon expiration" setting?](#1dc6b255f2biw)
    
-   [Why is my instance not appearing on the Renewal page in the Alibaba Cloud console?](#a3e884c64ajyr)
    
-   [What is the correct way to renew a trial instance before it expires?](#3b14b51216kam)
    
-   [How can I get a refund for a renewal I made by mistake?](#10e0ea7467kfk)
    
-   [Is there a way to enable auto-renewal for free or trial products?](#721ff83e11521)
    
-   [Why was my instance released later than scheduled, and will I be charged for the delay?](#9623746b31tc5)
    

Renewal operations

-   [Why did my auto-renewal fail even though I had it enabled, and how do I fix it?](#aa3cc4707e7xm)
    
-   [What happens if I manually renew an instance that is also configured for auto-renewal?](#7966369439x79)
    
-   [Does exporting the renewal list from the console automatically renew my resources?](#fe0834d04dcy7)
    

Renewal duration and billing

-   [Why does renewing an instance for one month result in a variable number of days (such as 28, 30, or 31)?](#b55c5cd07eutg)
    
-   [Why did my instance's expiration date shift from the 31st to the 30th (or 28th/29th) after a one-month renewal?](#41d1687f43mfb)
    
-   [Why is my refund USD 0 after I canceled a pending renewal order from the Cancel Renewals tab?](#b3299cd6f364g)
    

## **Renewal rules**

### When should I use the "Non-renewal upon expiration" setting?

The **Non-renewal upon expiration** setting gives you precise control over an instance's end-of-life behavior. It is primarily used in two scenarios:

-   **To reduce notifications:** By default, Alibaba Cloud sends multiple renewal reminders before an instance expires. If you have already decided not to renew an instance and want to receive only a single final notification, set it to **Non-renewal upon expiration**.
    
-   **To enforce instance termination:** If your account has a special agreement with Alibaba Cloud that prevents instances from being stopped automatically upon expiration, you can use this setting to override that agreement for specific instances, ensuring they are stopped and released as normal.
    

### Why is my instance not appearing on the Renewal page in the Alibaba Cloud console?

Your instance may not be listed on the **Renewal** page if it is ineligible for renewal from that interface or if you are not logged into the correct account.

First, verify that you are logged in to the Alibaba Cloud account that was used to purchase the instance. If you are in the correct account, check for the following common reasons:

-   **The instance has been released:** Released instances cannot be renewed.
    
-   **The product does not support renewal:** Some items, like tickets for the Apsara Conference, cannot be renewed.
    
-   **The product must be renewed in its own console:** Some products require you to renew them from their specific product console. Click the **product name** in the upper-right corner of the **Renewal** page to navigate there.![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/2240846371/p894255.png)
    
-   **The instance is a Resource Plan:** These are renewed separately on the [Resource Plan](https://billing-cost-intl.aliyun.com/ri/summary) page.
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/2240846371/p893286.png)
    
-   **The product is a specialized cloud service:** Certain services, like IoT SIM cards, can only be renewed from their dedicated console.
    

If you have reviewed the conditions above and still cannot find your product, confirm that you are logged on with the account that was used to purchase the product. [Reset your password](/help/en/account/self-service-login-or-password-reset) to retrieve your logon name.

### What is the correct way to renew a trial instance before it expires?

You do not have to wait for a trial to expire to take action. The process differs based on the instance's billing method.

-   **Subscription (Pre-paid) Instances:** You can manually renew a trial Subscription instance at any time. The new service period will begin immediately after the trial period ends.
    
-   **Pay-As-You-Go (Post-paid) Instances:** These instances do not require renewal. After the trial period ends, the system automatically begins charging your account based on usage.
    
    -   To ensure uninterrupted service, maintain a sufficient account balance.
        
    -   If you no longer need the instance, manually release it to prevent further charges. Always back up your data before releasing an instance.
        

### How can I get a refund for a renewal I made by mistake?

1.  Log on to the [Resource Unsubscription](https://billing-cost-intl.aliyun.com/refund) page.
    
2.  Determine if the renewal has already taken effect:
    
    -   If the order is listed under the **Cancel Renewals** tab, it is a pending renewal. You can cancel it and receive a full refund of any cash paid. Coupons are non-refundable.
        
    -   If the order is listed under the **Unsubscribe From In-use Resources** tab, the renewal has already taken effect. You will receive a partial refund based on the remaining service duration, according to the non-full refund policy.
        
    
3.  For products that do not support self-service unsubscription, [submit a ticket](https://smartservice.console.alibabacloud.com/console.htm) to request a manual review for a refund.
    

For more details, see [Unsubscription rules](/help/en/user-center/cancel-subscription/).

### Is there a way to enable auto-renewal for free or trial products?

No, auto-renewal is not supported for free products or trial products on Alibaba Cloud, such as free web hosting or free enterprise email.

To prevent service interruption, you must renew these products manually before they expire.

### Why was my instance released later than scheduled, and will I be charged for the delay?

No, you will not be charged for any delay in the automatic release of an instance.

Billing stops at the exact time you scheduled for the release, regardless of when the system completes the background process. You will not incur extra fees for the delay.

## Renewal operations

### Why did my auto-renewal fail even though I had it enabled, and how do I fix it?

-   **Solution:**
    
    Manually renew the instance immediately to prevent service interruption.
    
-   **Reason for Failure:**
    
    The system attempts to deduct payment at several intervals (for example, 3 days before expiration, 1 day before, on the expiration day, and several days after). If all attempts fail due to an insufficient balance, the renewal fails.
    
-   Auto-renewal likely failed because your account had an insufficient balance at each of the system's payment attempt time points. Enabling auto-renewal sets a renewal cycle but does not process the payment immediately. The system attempts to deduct payment at several intervals (such as 3 days before expiration, 1 day before, on the expiration day, and several days after). If a deduction attempt fails, the system retries at the next scheduled time. If all attempts fail 14 days after the expiration date due to an insufficient balance, the renewal fails.
    

### What happens if I manually renew an instance that is also configured for auto-renewal?

The instance will not be auto-renewed twice. When you manually renew an instance, the system cancels the upcoming scheduled auto-renewal and recalculates the next one based on the new expiration date.

Example: An Elastic Compute Service (ECS) instance expires at 00:00 on March 30. You manually renew the instance for one month on February 14. The new expiration date is now April 30.

**Example:** An ECS instance is configured for auto-renewal and expires on March 30. Auto-renewal is scheduled to trigger on March 27 (3 days prior). However, you manually renew it for one month on February 14.

1.  The instance's new expiration date becomes April 30.
    
2.  The system starts deducting the fee for ECS auto-renewal three days before the expiration date. Therefore, the system will start deducting the auto-renewal payment at 08:00:00 on March 27.
    

### Does exporting the renewal list from the console automatically renew my resources?

No, exporting the renewal list does not renew your resources.

This action only generates a price quote and exports a file containing the selected resources, renewal duration, and estimated cost. To complete the renewal, you must explicitly click the **Renew** or **Batch Renew** button and complete the payment process.

## Renewal duration and billing

### Why does renewing an instance for one month result in a variable number of days (such as 28, 30, or 31)?

A "one-month" renewal extends the service period to the same calendar date in the following month, not for a fixed number of days. This is why the duration in days varies.

-   **Example 1 (30 days):** An instance expires at 00:00 on June 1 (end of May 31). A one-month renewal sets the new expiration date to 00:00 on July 1 (end of June 30), a period of 30 days.
    
-   **Example 2 (31 days):** An instance expires on May 21. A one-month renewal sets the new expiration date to June 21, a period of 31 days.
    
-   **Example 3 (28/29 days):** An instance expires on February 1. A one-month renewal sets the new expiration date to March 1, a period of 28 days (or 29 in a leap year).
    

### Why did my instance's expiration date shift from the 31st to the 30th (or 28th/29th) after a one-month renewal?

This occurs when you renew an instance for one month, and the next calendar month has fewer days. The new expiration date becomes the last day of that shorter month, and this new end-of-month date can persist for subsequent renewals. This behavior applies to both manual and auto-renewals.

-   **Scenario 1:** An instance expiring on January 31 is renewed for one month. The new expiration date becomes February 28 (or February 29 in a leap year). Future one-month renewals from this point will also expire on the 28th or 29th.
    
-   **Scenario 2:** An instance expiring on May 31 is renewed for one month. The new expiration date becomes June 30. Subsequent renewals will anchor to the 30th of the month, until a renewal period crosses a month like February, which could shift the date again as described in Scenario 1.
    

### Why is my refund **USD** 0 after I canceled a pending renewal order from the Cancel Renewals tab?

A USD 0 refund for a canceled pending renewal typically occurs when no cash was paid for the original transaction. There are two common reasons for this:

-   **Promotional offers:** The renewal was a free extension included with your initial purchase (for example, as part of a "Buy 1 Year, Get 3 Months Free" promotion). Canceling this type of promotional renewal does not generate a cash refund.
    
-   **Full payment with coupons**: You used a coupon that covered 100% of the renewal cost. Because your actual cash payment was USD 0, the refunded amount is also USD 0.
