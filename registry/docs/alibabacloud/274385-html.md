Outbound data transfer is traffic that flows from Alibaba Cloud to the ports or virtual border routers (VBRs) associated with your data center. This topic describes the billing rules for outbound data transfer fees and describes how to monitor per-VBR traffic when multiple departments share a single Express Connect circuit.

## Overview

**Item**

**Rule**

Billing cycle and bill generation

Partial hours are rounded up as a full hour. Bills are typically generated within one hour after a cycle ends. Actual timing may vary.

Billable items and formulas

Total outbound data transfer fee = sum of fees across all regions in your account. Regional fee calculation:

-   **Dedicated Express Connect circuit**
    
    Outbound data transfer fee = Unit price × Total outbound traffic of all dedicated circuits in the region
    

-   **Shared Express Connect circuit**
    
    Outbound data transfer fee = Unit price × Total outbound traffic of all hosted connections in the region
    

Free quota application order

For accounts with circuits in multiple regions, the free quota applies to whichever region consumes outbound traffic first.

## Billing details

Launching outbound data transfer billing introduces these changes:

-   Port setup fee waived. No USD 1,500 one-time charge, reducing cloud migration costs.
    
-   VBR quota increased. Higher free tier supports complex network topologies.
    
-   Inbound traffic are unlimited and free. Charges apply only to outbound data transfer.
    
-   Get a promotional free quota of 50 TB outbound data transfer per month per account. Valid through December 31, 2026. Standard rates apply starting January 1, 2027.
    

## **Billing by region**

Outbound data transfer pricing varies by region. Prices listed below are for reference. The actual prices shall prevail.

**Source region**

**Rregions**

**Unit price (****USD/GB****)**

Chinese mainland

China (Hangzhou), China (Shanghai), China (Qingdao), China (Beijing), China (Zhangjiakou), China (Hohhot), China (Ulanqab), China (Shenzhen), China (Heyuan), China (Guangzhou), China (Chengdu), China (Nanjing - Local Region), China (Wuhan - Local Region), China (Xi'an - Local Region), China (Fuzhou - Local Region)

0.0130

Asia-Pacific

China (Hong Kong), Singapore, Malaysia (Kuala Lumpur), Japan (Tokyo), South Korea (Seoul), Philippines (Manila), Thailand (Bangkok)

0.0390

Indonesia (Jakarta)

0.0780

Europe and Americas

US (Silicon Valley), US (Virginia), Germany (Frankfurt), UK (London)

0.0190

Middle East

UAE (Dubai), SAU (Riyadh - Partner Region)

0.0860

## Enable billing for outbound data transfer

-   Before you begin, make sure that your account has completed identity verification. See [FAQ about identity verification](/help/en/account/support/which-users-are-required-to-undergo-account-authentication).
    
-   If you use a RAM user, make sure that the RAM user has the `AliyunExpressConnectFullAccess` or `vpc:OpenPhysicalConnectionService` permission.
    

1.  Log on to the [Express Connect console](https://expressconnect.console.alibabacloud.com).
    
2.  In the top menu bar, select the target region. Then, in the navigation pane on the left, click **Physical Connection**.
    
3.  In the **Enable Outbound Data Transfer Billing** section, click **Enable Now**.
    
4.  On the activation page, read and select the terms of service, and then click **Enable Now**.
    

## Example

Two data centers in China (Beijing) and US (Virginia) connect through two Express Connect circuits to ECS instances in corresponding regional VPCs. You use the same account and monthly traffic is 100 TB outbound in Beijing (consumed first) and 80 TB in Virginia (consumed later).

-   During the promotional period, your monthly outbound data transfer fees are:
    
    -   China (Beijing) region: USD 0.0130/GB × (100 - 50) × 1,024 GB = USD 665.6
        
    -   US (Virginia) region: USD 0.0190/GB × 80 × 1,024 GB = USD 1,556.48
        
    
    Total cost = USD 640 + USD 1,556.48 = USD 2,196.48
    
-   After the promotion expires, your monthly outbound data transfer fees are:
    
    -   China (Beijing) region: USD 0.0130/GB × 100 × 1,024 GB = USD 1,331.2
        
    -   US (Virginia) region: USD 0.0190/GB × 80 × 1,024 GB = USD 1,556.48
        
    
    Total cost = USD 1,280 + USD 1,556.48 = USD 2,836.48
    

## More operations

### Measure outbound traffic

#### **Metering description**

The measured outbound traffic is the total traffic before any discounts or resource plans are applied. For more information, see [Billing details](#section-oip-yxr-i9u) and [Outbound data transfer plans](/help/en/express-connect/product-overview/outbound-data-transfer-plans).

#### View outbound traffic by port

When multiple departments share a circuit via separate VBRs, you can view the traffic volume and percentage for each VBR associated with the port and know the traffic usage of each department.

**Note**

If a VBR is created for a shared port but is not displayed under the dedicated port, query the VBR in shared port.

1.  Log on to the [Express Connect console](https://expressconnect.console.alibabacloud.com).
    
2.  In the top menu bar, select the target region. Then, in the navigation pane on the left, click **Physical Connection**.
    
3.  On the **Physical Connection** page, find the target Express Connect circuit instance and click the ![Metering](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/1553941961/p547539.png) icon in the **Metering** column.
    
    Hover over the traffic usage. The system automatically calculates and displays the traffic and traffic percentage for each VBR on the current port.
    
    By default, the system displays monitoring data from the last day. You can set the time granularity for monitoring to **Daily** or **Hourly**. Select a default time range or specify a custom time range.
    
    -   Default time ranges:
        
        -   By day: Select 1 day, 7 days, 15 days, or 30 days.
            
        -   By hour: Select 1 hour, 6 hours, 12 hours, or 24 hours.
            
    -   Custom time range: When set to By Day, you can query data from the last 30 days. When set to By Hour, you can query data from the last 24 hours.
        
    

#### View outbound traffic by VBR

To view the traffic of a single VBR, use the following method.

1.  Log on to the [Express Connect console](https://expressconnect.console.alibabacloud.com).
    
2.  In the top menu bar, select the target region. Then, in the navigation pane on the left, click **Virtual Border Routers (VBRs)**.
    
3.  On the **Virtual Border Routers (VBRs)** page, find the VBR that you want to manage and click the ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/1888760271/p801437.png) icon in the **Metering** column.
    
    By default, the system displays monitoring data from the last day. You can set the time granularity for monitoring to **Daily** or **Hourly**. Select a default time range or specify a custom time range.
    
    -   Default time ranges:
        
        -   By day: Select 1 day, 7 days, 15 days, or 30 days.
            
        -   By hour: Select 1 hour, 6 hours, 12 hours, or 24 hours.
            
    -   Custom time range: When set to By Day, you can query data from the last 30 days. When set to By Hour, you can query data from the last 24 hours.
        
    

### Increase the VBR quota

You can create up to five VBR instances for each Express Connect circuit by default. To request an increase, see [Quotas](/help/en/express-connect/user-guide/quotas/) and [Manage Express Connect quotas](/help/en/express-connect/user-guide/manage-express-connect-quotas).

## References

-   [OpenPhysicalConnectionService](/help/en/express-connect/api-vpc-2016-04-28-openphysicalconnectionservice-efficiency-channels): Enables the outbound data transfer fee feature.
    
-   [GetPhysicalConnectionServiceStatus](/help/en/express-connect/api-vpc-2016-04-28-getphysicalconnectionservicestatus-efficiency-channels): Queries whether the outbound data transfer fee feature is enabled for the current account.
