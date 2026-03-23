This topic provides answers to some commonly asked questions about the billing of cloud computers provided by Elastic Desktop Service (EDS) Enterprise.

## **Index**

-   [What cloud computer types does EDS Enterprise support? How are they billed?](#faq-available-specs)
    
-   [What billing methods does EDS Enterprise support? Is switching billing methods supported?](#faq-which-billing-method)
    
-   [Am I still be able to access my cloud computer if my Alibaba Cloud account is overdue?](#faq-what-if-arrear)
    
-   [Will I receive notifications if my account balance is insufficient? When will I receive the notifications?](#faq-notice-about-low-balance)
    

## **What cloud computer types does EDS Enterprise support? How are they billed?**

A cloud computer type from EDS Enterprise includes computing resources such as the vCPUs, memory, and GPUs. EDS Enterprise provides a selection of cloud computer types including Enterprise Office, High Frequency, Graphics Workstation - Basic, Graphics Workstation - Standard, and Graphics Workstation - Enhanced designed for various use cases. Specifications, such as vCPU count, memory, and GPU memory, vary across cloud computer types. Pricing depends on region, configurations, and discounts. To view the list prices for various cloud computers across different regions, go to the [Pricing](https://www.alibabacloud.com/product/cloud-desktop#J_9379864510) page.

In addition to computing resources, cloud computer storage (system and data disks) incurs additional fees. EDS Enterprise also offers a range of optional value-added services. For more information, see [Billing overview](/help/en/wuying-workspace/product-overview/billing-overview).

## What billing methods does EDS Enterprise support? Is switching billing methods supported?

The following table describes the billing methods supported by EDS Enterprise and the allowed switches.

Billing method

Switch to

References

Monthly subscription (Unlimited)

None

None

Monthly subscription (120 Hours/Month or 250 Hours/Month)

-   Monthly subscription (120 Hours/Month or 250 Hours/Month)
    
-   Pay-as-you-go
    

-   [Switch Unlimited computing plans](/help/en/wuying-workspace/product-overview/subscription#sc-change-to-monthly-subscription)
    
-   [Switch monthly subscription (Unlimited computing plans) to pay-as-you-go](/help/en/wuying-workspace/product-overview/subscription#ebbd3bc9b59e6)
    

Pay-as-you-go

-   You can switch the billing method for cloud computers of any type to Monthly Subscription (Unlimited).
    
-   You can switch the billing method for cloud computers with the 4 vCPUs/8 GiB memory or 8 vCPUs/16 GiB memory specifications to Monthly Subscription (120 Hours/Month or 250 Hours/Month)
    

[Switch from pay-as-you-go to monthly subscription](/help/en/wuying-workspace/product-overview/pay-as-you-go#sc-change-to-subscription)

## **Am I still be able to access my cloud computer if my Alibaba Cloud account is overdue?**

If the total balance of your account, including coupons, is less than the amount due, the system will mark your account as having an overdue payment.

The overdue payment does not impact the use of monthly subscription-based cloud computers, but it prevents the purchase of pay-as-you-go cloud computers.

**Note**

You can go to the [User Center](https://account.alibabacloud.com/login/login.htm?oauth_callback=https%3A%2F%2Fusercenter2-intl.console.alibabacloud.com%2Ffinance%2Fexpense-report%2Foverview%3Fspm%3Da2c63.p38356.0.0.650c75dfANXZcr) to view overdue payments.

After a payment becomes overdue, the cloud computer enters the **Expired** state. Data on the cloud computer is retained, but you cannot perform any operations, such as starting, stopping, restarting, or connecting to it. To continue using the cloud computer, you must top up your account within 30 days of the expiration date. Starting from the 31st day, the cloud computer will be automatically released.

**Warning**

Once a cloud computer is released, its data and snapshots are deleted and cannot be recovered.

**Important**

If an AD connector cannot provide services due to an overdue payment, the cloud computers in the office network of the AD connector cannot provide services as expected.

## Will I receive notifications if my account balance is insufficient? When will I receive the notifications?

If the balance and coupons combined in your Alibaba Cloud account are insufficient to cover the bill, your account is considered in arrears.

Notifications:

-   **Insufficient balance notification**
    
    The fees for pay-as-you-go cloud computers are calculated and deducted from your Alibaba Cloud account on an hourly basis (UTC+8). A new billing cycle begins once the previous bill is settled. If your account balance falls below the alert threshold, you will be notified via email.
    
-   **Cloud computer release notification**
    
    If your cloud computer is released due to expiration or an overdue payment, Alibaba Cloud will send you a notification via email.
