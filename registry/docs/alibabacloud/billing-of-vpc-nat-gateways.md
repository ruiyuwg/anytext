A NAT Gateway resource plan is a subscription package available in multiple sizes with flexible timeframes. Once active, the plan automatically offsets the instance fees and Capacity Unit (CU) fees for your Internet NAT gateways and VPC NAT gateways.

## Overview

### **Features**

-   **Flexible sizes and billing:** Resource plans are available in 1,000 CU, 10,000 CU, and 100,000 CU sizes. You can purchase and stack multiple plans to meet your usage offset requirements. You can use the [NAT CU Estimator](https://www.alibabacloud.com/zh/pricing-calculator?_p_lc=1#/commodity/nat_gw_intl) to estimate your CU consumption and select a suitable resource plan.
    
-   **Ready to use:** You can select the effective time when you purchase a plan. After the plan becomes effective, it automatically offsets the instance and CU fees for your NAT gateways.
    
-   **Discounted pricing**: Except for the 1,000 CU resource plan, all other sizes are more cost-effective than the pay-as-you-go billing method. The larger the plan, the more you save.
    
    For example, for a NAT gateway in the China (Hangzhou) region, 10,000 CUs would cost USD 340 with pay-as-you-go billing. A 10,000 CU resource plan costs USD 337, saving you USD 3.
    

### Offset rules

-   Activation time: Select **Immediately After Payment** or a **Specified Time**. The plan activates on the hour.
    
-   Validity period: 1 year.
    
-   Stacking plans: You can purchase multiple plans without limitation.
    
    -   Offset order: Plans offset fees in order of expiration, starting with the plan that expires soonest.
        
    -   Any usage that exceeds your total plan quota is billed at pay-as-you-go rates.
        
-   Offset ratio:
    
    -   To offset NAT Gateway instance fees: 1 CU offsets the instance fee for one hour.
        
    -   To offset NAT Gateway CU fees: CUs are deducted based on the actual hourly consumption.
        

### Available areas

NAT Gateway resource plans are area-specific. Each area contains the following regions.

**Resource plan area**

**Supported regions for offset**

Chinese Mainland

China (Qingdao), China (Beijing), China (Zhangjiakou), China (Hohhot), China (Ulanqab), China (Hangzhou), China (Shanghai), China (Shenzhen), China (Heyuan), China (Guangzhou), China (Chengdu)

Outside Chinese Mainland

China (Hong Kong), Japan (Tokyo), Singapore, Malaysia (Kuala Lumpur), Indonesia (Jakarta), US (Virginia), US (Silicon Valley), Germany (Frankfurt), UK (London), UAE (Dubai), Philippines (Manila), South Korea (Seoul), Thailand (Bangkok)

### Pricing

**Size**

**Price for the Chinese mainland (****USD****)**

**Price for outside the Chinese mainland (****USD****)**

1,000 CU

34

43

10,000 CU

337

426

100,000 CU

3,230

4,085

### **Limitations**

-   Unused resources in a plan are cleared when the plan expires, unable to be transferred to another resource plan.
    
-   You cannot use resource plans to offset fees for existing Internet NAT gateways that are billed using the legacy pay-by-specification model.
    

## Purchase a NAT Gateway resource plan

Go to the [NAT Gateway resource plan purchase page](https://common-buy-intl.alibabacloud.com/?commodityCode=nat_cubag_dp_intl).

-   **Type**: Select **Chinese Mainland** or **Outside Chinese Mainland**.
    
-   **Size**: Select the plan size. You can use the [NAT CU Estimator](https://www.alibabacloud.com/zh/pricing-calculator?_p_lc=1#/commodity/nat_gw_intl) to estimate your CU usage and select an appropriate size.
    
-   **Activation Time**: Select **Immediately after Payment** or set a **Custom** time. The plan activates on the hour. You cannot change this setting after purchase.
    
-   **Subscription Duration**: The default is 1 year.
    

## **Monitor your NAT Gateway resource plan usage**

-   Go to the [NAT Gateway Resource Plan](https://vpc.console.alibabacloud.com/nat/cu) page to view the **Remaining Amounts** and **Utilization** of your purchased plans.
    
-   To view offset details, click **Details** in the **Actions** column for a specific resource plan, or go to [Expenses and Costs - Resource Plans](https://usercenter2-intl.console.alibabacloud.com/ri/detail?commodityCode=fr) and search for the plan by its instance ID. To be notified when the remaining quota falls to a specified threshold, click **Set Remaining Quota Alert**.
    

## Unsubscribe from a NAT Gateway resource plan

NAT Gateway resource plans support a **5-day unused full refund** and **partial refunds**. For more information, see [Rules for unsubscribing from resources on the international site (alibabacloud.com)](/help/en/user-center/refund-rules).

## FAQ

### **Why is my resource plan not offsetting fees after purchase?**

This happens when the resource plan's area does not cover the region where your NAT gateway is deployed. Each resource plan is only valid for a specific area. For example, a plan for the **Chinese Mainland** area cannot offset fees for a NAT gateway in the **China (Hong Kong)** region because they are in different service areas.

To resolve this, ensure that the area of your purchased resource plan covers the region of your NAT gateway .
