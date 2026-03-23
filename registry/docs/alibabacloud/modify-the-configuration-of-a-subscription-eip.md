Subscription EIP uses the pay-by-bandwidth metering method. You pay only for bandwidth. This billing method is suitable for workloads with stable traffic peaks and long-term resource needs.

-   Resource Assurance: You can reserve resources in advance to ensure service continuity and stability.
    
-   Cost Advantage: Subscription offers lower long-term costs compared to pay-as-you-go (pay-by-bandwidth).
    
    > For example, a 5 Mbit/s EIP in Singapore costs USD 17 per month for subscription, but approximately USD 26 per month for pay-as-you-go (pay-by-bandwidth).
    

## Billing items and pricing

Subscription EIPs are charged based on the selected maximum bandwidth and subscription duration.

```
Bandwidth fee = Bandwidth unit price (USD/month) × Subscription duration (months)
```

EIPs support the following line types: BGP (Multi-ISP) and BGP (Multi-ISP) Pro. The bandwidth unit price varies for each line type.

> The prices and regions in the following table are for reference only. For the latest information, see the [Buy page](https://common-buy-intl.alibabacloud.com/?commodityCode=eip_pre_intl#/buy).

Table 1. Bandwidth Unit Price of BGP (Multi-ISP) EIP

**Area**

**Region**

**Bandwidth unit price (USD/month)**

**1 Mbit/s**

**2 Mbit/s**

**3 Mbit/s**

**4 Mbit/s**

**5 Mbit/s**

**6 Mbit/s and higher**

**n is the bandwidth value**

Asia Pacific – China

China (Qingdao)

3.11

6.21

9.32

12.42

15.53

15.53 + (n - 5) × 10.64

China (Beijing), China (Zhangjiakou), China (Hohhot), China (Ulanqab), China (Hangzhou), China (Shanghai), China (Shenzhen), China (Guangzhou), China (Chengdu), China (Hong Kong), China (Heyuan)

3.40

6.80

10.20

13.60

17.00

17.00 + (n - 5) × 11.83

Asia Pacific – Other

Japan (Tokyo)

3.70

7.39

11.09

14.78

18.48

18.48 + (n - 5) × 12.42

Singapore, Malaysia (Kuala Lumpur), Indonesia (Jakarta)

3.40

6.80

10.20

13.60

17.00

17.00 + (n - 5) × 11.83

Europe & Americas

US (Virginia), US (Silicon Valley), Germany (Frankfurt), UK (London), Mexico

3.40

6.80

10.20

13.60

17.00

17.00 + (n - 5) × 11.83

Middle East

UAE (Dubai)

11.83

23.66

35.49

47.32

59.15

11.83 × n

Table 2. BGP (Multi-ISP) Pro EIP Bandwidth Unit Price

**Region**

**Bandwidth unit price (USD/month per Mbit/s)**

China (Hong Kong)

34.4

## Billing cycle and bill generation time

-   Billing Cycle: The billing cycle is the subscription duration (UTC+8). A billing cycle starts from the exact time (to the second) when the subscription is purchased or renewed and ends at 24:00:00 on the expiration date.
    
    -   An EIP enters a suspended state 72 hours (3 days) after it expires. In this state, the EIP cannot serve traffic normally, and its bandwidth is limited to 1 Kbit/s.
        
    -   The system automatically releases the EIP 72 hours (3 days) after it enters the suspended state. After release, all configurations and data are permanently deleted and cannot be recovered.
        
-   Bill Generation Time: Bills are usually generated on the first day of the next calendar month. The exact time depends on the system.
    

## Billing example

Assume you purchase one BGP (Multi-ISP) EIP with 10 Mbit/s bandwidth on June 14 in Singapore. The subscription duration is one month. The EIP expires at 00:00:00 on July 15. You pay: \[17.00 + (10 - 5) × 11.83\] USD/month × 1 month = USD 76.15.

## View bills and usage

-   To view bills, log on to the [Expenses and Costs](https://usercenter2-intl.console.alibabacloud.com/) console and view your [expense bills](/help/en/user-center/product-overview/quickly-understand-alibaba-cloud-billing).
    
-   To view bills for this product, go to the [Billing details](https://usercenter2-intl.console.alibabacloud.com/finance/expense-report/expense-detail-by-instance) page. Select Elastic IP Address from the Product filter. Choose a time range to view EIP-related billing details.
    
-   To view usage, go to the [EIP](https://vpc.console.alibabacloud.com/eip/cn-hangzhou/eips) console. Click the target EIP and select the **Monitoring and O&M** tab to view real-time bandwidth and traffic. You can also use [CloudMonitor](https://cloudmonitor.console.alibabacloud.com/) for more detailed monitoring data.
    
-   Invoices and Tax Rates: You can request invoices after payment or bill settlement. For instructions, see [Get invoices](/help/en/user-center/get-invoice-international-station).
    

## Upgrade or downgrade

You can upgrade or downgrade the bandwidth of a subscription EIP to meet changing business needs.

-   **Upgrade**: You can increase bandwidth at any time.
    
    -   Procedure: In the **Bandwidth** column, click **Modify Configuration** for the target EIP. Then set the new bandwidth value.
        
    -   Billing Impact: You must pay the price difference for the remaining time in the current billing cycle.
        
    -   Effective time: This change takes effect immediately after you pay for the order.
        
-   **Downgrade**: Direct downgrades are not supported within the current billing cycle. You can use renewal with specification change to renew the EIP and reduce bandwidth simultaneously.
    
    -   To renew an EIP with a specification change, in the **Actions** column, click **![更多操作](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/1382169951/p143776.png)** > **Renewal & Billing** > **Renew/Update Configurations**. Then set the **Subscription duration** and **Bandwidth**.
        
    -   Billing impact: You are charged the fee calculated as `New bandwidth unit price (CNY/month) × Subscription duration (months)`.
        
    -   Effective time: The change takes effect at the start of the next billing cycle.
        

## Renewal

Before an EIP expires or is released, you can go to the [Elastic IP Address Management Console](https://vpc.console.alibabacloud.com/eip) to extend its expiration date.

-   Renew with the original bandwidth: In the **Actions** column for the target EIP, click **![更多操作](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/1382169951/p143776.png)** > **Renewal & Billing** > **Renew**. Set the **Subscription duration** and pay the renewal fee. The fee is the unit price of the current bandwidth (CNY/month) multiplied by the subscription duration in months.
    
-   Renew with a new bandwidth: In the **Actions** column, click **![更多操作](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/1382169951/p143776.png)** > **Renewal & Billing** > **Renew/Update Configurations** for the target EIP. Set the **Subscription duration** and **Bandwidth**. Pay the fee calculated as `New bandwidth unit price (CNY/month) × Subscription duration (months)`. The new bandwidth takes effect at the start of the next billing cycle.
    

Before the renewal takes effect, click **Actions** in the Actions column of the target EIP, and then select  **![More actions](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/1382169951/p143776.png)** > **Change Specifications** > **Cancel Pending Order**. After you cancel a pending order, you cannot revoke the cancellation. Proceed with caution.

## Switch between billing methods

You can switch a subscription EIP to pay-as-you-go.

-   Switch to Pay-as-you-go (Pay-by-bandwidth): This option is supported directly.
    
    -   Procedure: In the **Actions** column, click **![更多操作](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/1382169951/p143776.png)** > **Change configuration** > **Switch to pay-as-you-go** for the target EIP.
        
    -   Impact:
        
        -   This change takes effect immediately after confirmation.
            
        -   The instance is not released. Ensure that your account has a sufficient balance to prevent overdue payments and service suspension. If you no longer need the instance, you can back up your data and then release the instance in the console.
            
        -   Any remaining fees are refunded to the original payment method. For more information about refund calculations, see or [Refund for switching from subscription to pay-as-you-go](/help/en/user-center/refund-rules#X0JDx).
            
            -   A full refund is issued for pending renewal or upgrade orders. A partial refund is issued for orders that are already in effect.
                
            -   Refunds are not provided for compensation renewal orders that are issued for reasons such as ICP filing, data center failures, or data center migrations.
                
-   Switch to pay-as-you-go (pay-by-data-transfer): You cannot switch to this billing method directly. You must first switch to pay-as-you-go (pay-by-bandwidth) and then to pay-as-you-go (pay-by-data-transfer).
    
    -   Procedure: In the **Actions** column of the target EIP, click **![More actions](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/1382169951/p143776.png)** > **Modify Instance Configuration** > **Convert To Pay-as-you-go**. After the conversion, click **![More actions](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/1382169951/p143776.png)** > **Modify Instance Configuration** > **Modify Configuration** in the **Actions** column of the EIP, and set the **Traffic** billing method to **Pay-by-traffic**.
        
    -   Impact:
        
        -   The switch to the pay-by-data-transfer billing method takes effect at 00:00:00 (UTC+8) on the next day.
            
        -   You cannot change the bandwidth peak before the switch takes effect.
            

## Release and unsubscribe

You cannot release or unsubscribe from subscription EIPs.
