For cloud-based enterprises and organizations that experience short-term traffic spikes, Cloud Firewall offers a flexible pay-as-you-go feature. This feature complements your subscription bandwidth and is ideal for scenarios such as sales promotions, major event support, daily business transactions during fixed periods, or unexpected bandwidth surges. This ensures continuous and scalable security protection for your services.

## What is pay-as-you-go billing for elastic traffic with a subscription

**Pay-as-you-go billing for elastic traffic with a subscription** is a flexible pay-as-you-go mechanism. It is designed to handle sudden bandwidth usage that exceeds your Cloud Firewall **subscription** plan. The core principles are as follows:

-   **Scalability**: When your actual bandwidth usage exceeds your purchased Cloud Firewall bandwidth, the system automatically enables elastic traffic processing. This ensures uninterrupted security protection. The traffic generated during this period is billed on a pay-as-you-go basis.
    
-   **Cost optimization**: If your actual bandwidth usage does not exceed your purchased bandwidth, no elastic traffic fees are incurred. This model can also be used with pay-as-you-go savings plans to further reduce costs for excess usage.
    

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/9339070771/CAEQTxiBgICs0vKu0xkiIGZjYWY3M2U3NzYzNDQ0MjRiMzNkZDg4NmIyNTYzZDI04440562_20240611102426.728.svg)

### **Scenarios**

-   **Periodic short-term bandwidth spikes**: For example, peak business transactions that occur daily from 09:00 to 09:30.
    
-   **Occasional minor bandwidth spikes**: For example, unexpected brief increases caused by business or interface adjustments.
    
-   **Bandwidth spikes during sales promotions or major events**: For example, traffic surges during the Double 11 Shopping Festival or attack and defense drills.
    

## Billing description

Starting October 15, 2025, Cloud Firewall will introduce [Billing Method 2.0](/help/en/cloud-firewall/cloudfirewall/product-overview/subscription). New users will use Billing Method 2.0 by default. Existing users will continue to use [Billing Method 1.0](/help/en/cloud-firewall/cloudfirewall/product-overview/billing-method-1-0-and-upgrade-guide#4e7135524bxr4). The billing rules for the elastic traffic processing capacity differ between the two methods.

#### **Billing Method 2.0**

-   **Status**: Enabled by default and cannot be disabled.
    
-   **Price calculation**: The price is 0.06 USD per GB. The total price is calculated as (Excess traffic × Price per GB). A bill is sent the next day.
    
-   **Bandwidth limit**: The elastic traffic bandwidth limit is 10 Gbps. For custom limits, contact your business manager or architect.
    
-   **Configure alerts**: You can go to the **System Settings** > **Alert** page to configure an **Elastic Billing Alert**. This alert sends a notification when peak bandwidth reaches a specified percentage of your purchased bandwidth.
    

#### **Billing Method 1.0**

-   **Status**: Disabled by default and can be enabled as needed. If this feature is not enabled and your business bandwidth exceeds the purchased Cloud Firewall bandwidth, the product Service-Level Agreement (SLA) is not guaranteed. This may trigger downgrade rules for excess traffic, such as security feature failures, firewall shutdowns for top assets with excess traffic, rate limiting, or packet loss.
    
-   **Price calculation**: The price is 0.06 USD per GB. The total price is calculated as (Excess outbound traffic for Internet Border + Excess inbound traffic for Internet Border + Excess outbound traffic for NAT Border + Excess outbound traffic for VPC Border + Excess inbound traffic for VPC Border) × Price per GB. A bill is sent the next day.
    
-   **Bandwidth limit**: The elastic traffic bandwidth limit is 10 Gbps. For custom limits, contact your business manager or architect.
    
-   **Activation incentive**: After you enable this feature, you receive a shared daily quota of 10 GB of free elastic traffic processing across the Internet, NAT, and VPC borders.
    
-   **How to enable**: On the **Overview** page, click **Upgrade**. Then, set **Elastic Traffic Processing Capacity** to **Yes**. The upgrade takes effect immediately. You can perform this operation only once per day.
    
-   **Configure alerts**: You can go to the **System Settings** > **Alert** page to configure an **Elastic Billing Alert**. This alert sends a notification when peak bandwidth reaches a specified percentage of your purchased bandwidth.
    

To reduce costs, you can use this feature with pay-as-you-go savings plans. For more information, see [pay-as-you-go savings plans](/help/en/cloud-firewall/cloudfirewall/product-overview/pay-as-you-go-savings-plans).

## Billing example

A company enables Internet Border protection for Cloud Firewall. They have a purchased bandwidth of 30 Mbps. Their normal daily peak bandwidth is 10 to 20 Mbps, with occasional short bursts to 100 Mbps that last for about ten minutes. Over the past month, their excess bandwidth was 70 Mbps, and their total excess traffic was 200 GB.

#### **Monthly cost for bandwidth scale-out**

70 Mbps × 7 USD/Mbps/month = 490 USD/month

#### Monthly cost for excess elastic traffic

200 GB × 0.06 USD/GB = 12 USD.
