A Network Load Balancer (NLB) resource plan is a subscription package that automatically covers the instance fees and Load Balancer Capacity Unit (LCU) fees for all NLB instances under your account. After you purchase a resource plan, no additional configuration is required. Compared to pay-as-you-go billing, resource plans offer greater discounts.

## **Specifications and pricing**

Larger resource plans offer higher per-LCU discounts. The following table lists the available plan tiers, their list prices, and recommended use cases.

The prices in the following table are list prices. For actual pricing, see the [NLB resource plan buy page](https://common-buy-intl.alibabacloud.com/?commodityCode=slb_nlbcubag_dp_intl).

**Name**

**Specification**

**Price (****USD****)**

**Recommended use case**

Small resource plan I

5,000 LCU

24.5

Suitable for low-bandwidth or testing purposes. This plan can cover approximately one month of instance fees and 2,000 GB of data processing.

Small resource plan II

10,000 LCU

49

Suitable for low-bandwidth services. This plan can cover approximately one month of instance fees and 7,000 GB of data processing.

Medium resource plan

50,000 LCU

240

If your service has an average bidirectional bandwidth of 150 Mbps, this plan can cover approximately one month of instance fees and LCU fees.

Large resource plan

100,000 LCU

475

If your service has an average bidirectional bandwidth of 300 Mbps, this plan can cover approximately one month of instance fees and LCU fees.

You can use the [NLB LCU Calculator](https://www.alibabacloud.com/pricing-calculator?_p_lc=1&spm=ntm.workbench-pricetools-pricecalc.0.0.197f19afzG90KZ#/commodity/slb_nlb_public_intl) to estimate your LCU usage and choose the appropriate plan size.

## **Supported areas and regions**

When you purchase a resource plan, you must select an area (a geographic grouping of regions). After the plan takes effect, all NLB instances across all regions within the selected area share the resource plan quota.

Resource plans cannot be used across areas. To cover fees in both the Chinese mainland area and the Hong Kong (China) and outside China area, you must purchase separate resource plans for each area.

**Area**

**Regions**

Chinese mainland

China (Hangzhou), China (Shanghai), China (Qingdao), China (Beijing), China (Zhangjiakou), China (Ulanqab), China (Shenzhen), China (Heyuan), China (Guangzhou), China (Chengdu)

Hong Kong (China) and outside China

China (Hong Kong), Japan (Tokyo), South Korea (Seoul), Singapore, Malaysia (Kuala Lumpur), Indonesia (Jakarta), Philippines (Manila), Thailand (Bangkok), Germany (Frankfurt), UK (London), US (Silicon Valley), US (Virginia), Mexico

## **Coverage rules**

### **What resource plans cover**

Resource plans can only be used to cover NLB instance fees and LCU fees. They **cannot be used to cover Internet data transfer fees**.

-   Instance fees: Consumed at a rate of 4 LCU per hour.
    
-   LCU fees: Consumed at a 1:1 ratio based on actual usage.
    

### **Multiple resource plans**

If you have multiple resource plans, the plan with the earliest expiration date is used first.

### **Excess usage**

If your usage exceeds your resource plan quota, the excess amount is billed on a [pay-as-you-go](/help/en/slb/network-load-balancer/product-overview/nlb-billable-items) basis.

## **Purchase a resource plan**

1.  Go to the [NLB resource plan buy page](https://common-buy-intl.alibabacloud.com/?commodityCode=slb_nlbcubag_dp_intl).
    
2.  Configure the following parameters and complete the purchase.
    

**Setting**

**Description**

**Region**

Select the area where your NLB instances are deployed.

**Resource Plan Size**

Select a resource plan size based on your estimated LCU usage.

**Quantity**

You can purchase multiple resource plans.

**Effective At**

Set the plan to take effect immediately after purchase or at a specified time. In either case, the resource plan takes effect on the hour.

**Validity Period**

The term is one year.

## **Unsubscribe from a resource plan**

NLB resource plans support a **5-day unconditional refund for unused plans** and **partial refunds**. For more information, see [Introduction to resource plans](/help/en/user-center/resource-package-instance-management#80302cd25a8xl).

## **View resource plans and manage alerts**

In the NLB console, go to the [NLB resource plans](https://slb.console.alibabacloud.com/nlb/cu) page, then click **My resource plans** to open the resource plan management page in the Expenses and Costs console. On this page, you can perform the following actions:

-   On the **Instances** tab, view your existing resource plans.
    
-   On the **Details** tab, view the usage details of your resource plans.
    
-   Click **Set Remaining Quota Alert** in the upper-right corner to configure usage alerts for your NLB resource plans. When the remaining quota of a resource plan reaches the alert threshold, the system sends you a notification by email or in-console message. We recommend that you enable the corresponding notification channels in the [Message Center](https://notifications2.console.alibabacloud.com/subscribeMsg) console.
