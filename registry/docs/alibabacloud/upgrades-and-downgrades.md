Elastic IP Address (EIP) supports two billing methods: pay-as-you-go and subscription.

## Billing methods

**Billing method**

[Pay-as-you-go](/help/en/eip/pay-as-you-go/#task-rcd-sgl-vdb)

[Subscription](/help/en/eip/subscription#task-2240237)

**Pay-as-you-go (pay-by-data-transfer)**

**Pay-as-you-go (pay-by-bandwidth)**

**Subscription (pay-by-bandwidth)**

**Billable items**

-   Internet data transfer fee (data transfer fee)
    
    > [Rules for default settlement and billing using CDT](/help/en/eip/pay-as-you-go/#fbccdf62fab69).
    
    > You are billed for an EIP's total outbound traffic, which flows from Alibaba Cloud data centers to the Internet. Inbound traffic is not billed.
    
-   EIP configuration fee (public IP retention fee)
    
    > [Scenarios where no EIP configuration fee (public IP retention fee) is charged](/help/en/eip/pay-as-you-go/).
    

-   Internet data transfer fee (bandwidth fee)
    
-   EIP configuration fee (public IP retention fee)
    
    > [Scenarios where the EIP configuration fee (public IP retention fee) does not apply](/help/en/eip/pay-as-you-go/#8e74e88819pbl).
    

Internet data transfer fee (bandwidth fee)

**Billing cycle and bill generation time**

-   The billing cycle is 1 **hour**. If usage in a billing cycle is less than 1 hour, you are charged for 1 hour.
    
-   A bill is generated within 1 hour after the current billing cycle ends. The exact bill generation time depends on the system.
    

-   The billing cycle is 1 **day**. Billing is daily.
    
-   A bill is generated in the early hours of the next day. The exact bill generation time depends on the system.
    

-   The billing cycle is the purchase period specified in your order (in UTC+8), starting from the resource activation or renewal time (accurate to the second) until 24:00:00 on the expiration date.
    
-   Bill generation time: A bill is usually generated on the first day of the following calendar **month**. The exact bill generation time depends on the system.
    

**Scenarios**

-   Scenarios with large traffic fluctuations, such as gaming and video applications.
    
-   Scenarios with temporary or bursty resource usage.
    

If you cannot estimate your traffic usage, choose pay-by-data-transfer.

-   Scenarios with stable traffic peaks.
    
-   Scenarios with temporary or bursty resource usage.
    

-   Scenarios where the resource usage period can be estimated.
    
-   Scenarios with stable traffic peaks.
    
-   Scenarios requiring long-term resource use. Subscription is more cost-effective than pay-as-you-go with pay-by-bandwidth.
    

**Cost optimization**

-   Upgrade to [CDT](/help/en/cdt/internet-data-transfers/): CDT offers free data transfer quotas and tiered pricing.
    
-   [Associate the EIP with Internet Shared Bandwidth](/help/en/internet-shared-bandwidth/user-guide/create-an-internet-shared-bandwidth-instance#4138a4dfa6pxx).
    
-   Purchase a [Universal Data Transfer Plan](/help/en/dtp/product-overview/what-is-a-data-transfer-plan) to offset data transfer costs.
    

[Associate the EIP with Internet Shared Bandwidth](/help/en/internet-shared-bandwidth/user-guide/create-an-internet-shared-bandwidth-instance#4138a4dfa6pxx).

\-

## Pricing

For pricing details of EIP billable items, see:

-   [Subscription — Billable items and pricing](/help/en/eip/subscription#section-kqw-fg3-vdb)
    
-   [Pay-as-you-go (pay-by-data-transfer) — Billable items and pricing](/help/en/eip/pay-as-you-go/#843744ec27wmw)
    
-   [Pay-as-you-go (pay-by-bandwidth) — Billable items and pricing](/help/en/eip/pay-as-you-go/#212ea3d317i42)
    

For actual prices, see the [buy page](https://common-buy-intl.alibabacloud.com/eip/postpay) in the console.

## View bills and usage

-   View bills: Log on to the [Expenses and Costs](https://usercenter2-intl.console.alibabacloud.com/) console and view your [consumption bills](/help/en/user-center/product-overview/quickly-understand-alibaba-cloud-billing).
    
-   View bills for this product: Go to the [billing details](https://usercenter2-intl.console.alibabacloud.com/finance/expense-report/expense-detail-by-instance) page. Select Elastic IP Address from the product filter. Choose a time range to view EIP-related billing details.
    
-   To view usage, go to the [EIP](https://vpc.console.alibabacloud.com/eip/cn-hangzhou/eips) console and click the ![Monitoring icon](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/8368588951/p69826.png) icon in the **Monitor** column for the target EIP to view real-time bandwidth and traffic. You can also use [Cloud Monitor](https://cloudmonitor.console.alibabacloud.com/) to view more detailed monitoring data.
    
-   Invoices and tax rates: You can request an invoice after payment or bill settlement. For instructions, see [Get an invoice](/help/en/user-center/get-invoice-international-station).
    

## Switch between billing methods

For steps and impact details, see [Subscription — Switch between billing methods](/help/en/eip/subscription#d81af3a1a0ib4) and [Pay-as-you-go — Switch between billing methods](/help/en/eip/pay-as-you-go/#d81af3a1a0ib4).

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/6297183771/CAEQVBiBgICuhZP_5xkiIDY5OTU0ZGMyZDA5ZjRhMWZhZDM1YjM4OTc3MDVjYjYz4104995_20231206113509.048.svg)
