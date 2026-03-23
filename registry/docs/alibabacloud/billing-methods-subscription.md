Subscription is a prepaid billing method where you pay in advance for a specific period, such as one month or one year. This billing method offers a lower unit price and greater cost savings. The longer the subscription duration, the larger the discount. This topic describes the scenarios for subscription Elastic Compute Service (ECS) resources, the effects of expiration, and the refund policy.

## Use cases

You can purchase subscription resources if your business has the following characteristics:

-   Predictable resource usage period
    
-   Stable business scenarios
    
-   Long-term resource usage
    

Common scenarios include 24/7 official website services and database services.

## Billing rules

The subscription billing method is a prepaid model that covers fees for basic resources, such as instance types, system disks, data disks, images, and public bandwidth that is billed on a pay-by-bandwidth basis. If all resources for an instance use the subscription billing method, no extra fees are charged during the subscription period. The instance is automatically stopped when it expires. If you change the instance configuration, you must pay the price difference for an upgrade. For a downgrade, the price difference is refunded based on the refund rules.

**Note**

-   When you purchase a subscription instance, you may incur extra fees if you configure pay-as-you-go resources or features. If you use multiple billing methods, monitor your account balance to prevent overdue payments from affecting your resources. For more information about how pay-as-you-go fees are generated for subscription instances, see [Billing FAQ](/help/en/ecs/billing-faq#4b47f5a4c9ixw). To switch these pay-as-you-go resources to the subscription billing method, see [Switch between billing methods](/help/en/ecs/change-the-billing-method/).
    
-   The subscription and renewal durations for Alibaba Cloud services are based on calendar years and months. For example, if you purchase an ECS instance for one month on any day in February 2025, it expires on the corresponding day in March 2025, not 30 days later.
    

### **Basic billable items**

For example, if you want to create a subscription ECS instance that uses a paid image, attach a data disk to the instance, assign a public IPv4 address, and then select the pay-by-bandwidth billing method for network usage. In the lower-right corner of the ECS instance purchase page, you can click View Details to view the details of the required fees, as shown in the following figure.

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/5379043471/p929155.png)

The fee details for the instance purchased in this scenario include the following items:

-   **Instance**: The **instance type** fee. This includes the fees for compute resources (vCPUs, memory, and GPUs), [local disks](/help/en/ecs/user-guide/local-disks) (non-detachable storage devices on the instance), and feature enhancement components for [enterprise-level](/help/en/ecs/user-guide/enhanced-instance-families/) instances.
    
-   **System disk:** The disk capacity fee.
    
-   **Data disk:** The disk capacity fee.
    
-   **Bandwidth:** The **public bandwidth (pay-by-bandwidth)** fee, which is calculated based on the selected bandwidth.
    
-   **Image fee:** The **image** license fee, which is based on the market price of the paid image.
    

You can check the billing rules for each billable item that is displayed in the billing details at the time of purchase.

**Note**

The billable items and billing rules in this scenario are for reference only. The actual billable items are displayed at the time of purchase.

The purchase price of a subscription instance depends on the region, resource specifications, and subscription duration. The following table describes the billing rules.

**Billable item**

**Subscription price**

**Subscription duration**

[Instance type](/help/en/ecs/instance-types)

The price of an instance type may vary by region. For more information, see the [ECS Pricing page](https://www.alibabacloud.com/product/ecs).

1 month to 5 years. The specific subscription durations are displayed on the purchase page.

[Disk](/help/en/ecs/block-storage-devices)

The price of the same type of disk may vary by region. For more information, see the [ECS Pricing page](https://www.alibabacloud.com/product/ecs).

These resources can be purchased only together with a subscription instance. The subscription duration is the same as that of the instance.

[Public bandwidth (pay-by-bandwidth)](/help/en/ecs/public-bandwidth#5103cc3d2dkh7)

For the public bandwidth prices in different regions, see the Bandwidth Pricing tab on the [ECS Pricing page](https://www.alibabacloud.com/zh/product/ecs#pricing).

[Image](/help/en/ecs/images)

For the prices of Alibaba Cloud public images, see [Image billing](/help/en/ecs/images). The prices of Alibaba Cloud Marketplace images are subject to the information displayed when you create the instance.

### **Upgrade and downgrade**

After you create an instance, if its current configuration does not meet your business needs, you can change the instance type, public bandwidth, and data disk configurations. For more information, see [Configuration change overview](/help/en/ecs/user-guide/overview-of-instance-configuration-changes). The following fee changes may occur after you upgrade or downgrade the instance:

-   **Upgrade configuration**: When you upgrade the configuration, you must pay the difference between the cost of the new configuration and the remaining value of the original configuration. The actual fee is displayed on the page during the upgrade process.
    
-   **Downgrade configuration**: When you downgrade the instance, a refund is issued. For more information about how to calculate the refund amount, see [Refund rules](/help/en/user-center/cancel-subscription/#12a66a5a513qd).
    

## Switch between billing methods

### **Switch from subscription to pay-as-you-go**

After you create a subscription instance, you can switch its billing method to pay-as-you-go. This helps you recover some costs and use the instance more flexibly. After you switch the billing method from subscription to pay-as-you-go, make sure that your payment method has a sufficient balance to prevent overdue payments from affecting the instance. For more information about the procedure and effects of the change, see [Switch from subscription to pay-as-you-go](/help/en/ecs/change-the-billing-method-of-an-instance-from-subscription-to-pay-as-you-go-1).

### **Switch from pay-as-you-go to subscription**

Switching a pay-as-you-go instance to subscription lets you reserve resources in advance and obtain larger discounts. For more information about the procedure and effects of the change, see [Switch from pay-as-you-go to subscription](/help/en/ecs/change-the-billing-method-of-an-ecs-instance-from-pay-as-you-go-to-subscription-1#PAYGtoSubs-china).

## Expiration and renewal

Before your subscription ECS resources expire, [renew the instance](/help/en/ecs/manually-renew-an-instance-1) as soon as possible or create snapshots to back up data to prevent data loss and business disruptions. If you have other questions, see [Renewal FAQ](/help/en/user-center/support/renewal-guide-q-a).

**Important**

When an instance is about to expire, it is at risk of being stopped. The system sends you reminders and notifications. Renew the instance promptly to avoid service disruptions. If you have other questions, submit a ticket.

If a subscription instance does not have auto-renewal enabled or if auto-renewal fails, the instance automatically stops service between 00:00:00 on day 15 and 00:00:00 on day 16 after the expiration date.

The following table describes the retention status of the related ECS resources.

**Resource type**

**Within 15 days after expiration**

**15 days after expiration**

**30 days after expiration**

Compute resources (vCPUs and memory)

Compute resources (vCPUs and memory) are retained, and the instance works as expected.

**Note**

An instance that works as expected can be started and stopped. You can connect to it using the management terminal or other remote connection methods.

Compute resources (vCPUs and memory) are retained, but the instance stops providing services.

**Note**

Impacts of a stopped instance include the inability to remotely connect to it, inaccessible websites hosted on it, and disruptions to your business.

Compute resources (vCPUs and memory) are released.

Image

The image operating system license is available.

The image operating system license is unavailable.

The image operating system license is unavailable.

Block storage

-   Disks and their data are retained, and the disks work as expected.
    
-   Local disks and their data are retained, and the local disks work as expected.
    

-   Disks and their data are retained, but the disks stop providing services.
    
-   Local disks and their data are retained, but the local disks stop providing services.
    

-   Subscription disks are released. The data cannot be recovered.
    
    **Note**
    
    If you manually attached pay-as-you-go disks and configured them not to be released with the instance, these disks stop working.
    
-   Local disks are released. The data cannot be recovered.
    

Public IP

-   The static public IP address is retained.
    
-   Attached EIPs are not affected.
    

-   The static public IP address is retained.
    
-   Attached EIPs are not affected.
    

-   The static public IP address is released.
    
-   EIPs are detached.
    

After an instance expires, the **Data Storage** button appears in the **Actions** column on the **Instance** page. To save data before the instance is released, you can create a custom image from the instance or create snapshots for the instance disks.![Save data](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/5959480061/p141155.png)

### **Renewal guidelines**

Before the instance expires and is released, see [How to renew a subscription instance](/help/en/ecs/manually-renew-an-instance-1) to extend the usage time of the ECS instance.

## **View bills**

After a bill is generated for your resources, you can view detailed consumption information and resource bills on the [Bill Details](https://billing-cost-intl.aliyun.com/finance/expense-report/expense-detail-by-instance) page. You can use the fields on the page to check usage, prices, and discounts to understand how your fees are calculated. For more information about how to use the billing feature, see [Bill management overview](/help/en/user-center/instructions-for-using-the-bill).

## FAQ

#### **Why are pay-as-you-go fees generated for my subscription ECS instance? Why do I have overdue payments for my subscription ECS instance before it expires?**

Pay-as-you-go fees may be generated for a subscription instance if you enable pay-as-you-go features when you purchase the instance, or if you change configurations or attach pay-as-you-go resources while the instance is in use. Common scenarios are as follows:

**You configured the following settings when you purchased the subscription ECS instance, or you changed the instance configurations to the following while the instance is in use:**

-   You selected the pay-by-traffic billing method when you configured the public bandwidth.
    
-   The system disk or data disk is an ESSD AutoPL disk and you configured provisioned performance.
    
-   The system disk or data disk is an ESSD AutoPL disk and you configured performance burst. When a performance burst occurs, burst fees are charged on a pay-as-you-go basis.
    
-   You configured an automatic snapshot policy for the instance. When the policy is triggered and snapshots are created, snapshot storage fees are generated.
    
-   If the instance is a burstable instance with unlimited mode enabled, overusing its CPU credits incurs [extra credit charges](/help/en/ecs/user-guide/billing#section-lqi-vqf-dsc).
    

**You performed the following operations while using the subscription instance:**

-   Attached a pay-as-you-go data disk.
    
-   Attached pay-as-you-go Internet-facing products, such as elastic IP addresses (EIPs), Server Load Balancer (SLB) instances, or NAT gateways.
    
-   Created a custom image or a manual snapshot.
    

If you want to switch the billing method of these pay-as-you-go resources to subscription, see [Switch between billing methods](/help/en/ecs/change-the-billing-method/).

> For more information, see [Billing FAQ](/help/en/ecs/billing-method-faqs#4b47f5a4c9ixw).
