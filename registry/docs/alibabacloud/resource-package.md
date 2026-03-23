GA resource plans are subscription packages that offset the Capacity Unit (CU) fees and instance fees of pay-as-you-go Global Accelerator (GA) instances. After you purchase a resource plan, it automatically applies to your pay-as-you-go GA instances each hour. Depending on the plan size, you can save up to 8% compared with pay-as-you-go pricing.

## **How resource plans work**

A GA resource plan contains a fixed number of CUs. Each hour, the plan offsets two types of charges from your pay-as-you-go GA instances:

-   **Instance fees** -- Offset at a rate of 0.350877 CU per hour. This rate is calculated as: Instance unit price / CU unit price. For unit prices, see [Billing of pay-as-you-go GA instances](/help/en/ga/product-overview/billing-of-pay-as-you-go-ga-instances).
    
-   **CU fees** -- Offset at a 1:1 ratio each hour. One CU in the plan offsets one CU of usage.
    

**Note**

Resource plans do not offset data transfer fees.

### Effective time

When you purchase a resource plan, select when it takes effect:

-   **Immediately after Payment** -- The plan takes effect as soon as payment is complete.
    
-   **Custom Effective Time** -- The plan takes effect at a time that you specify.
    

### Deduction priority

If you own multiple resource plans, they are consumed in the following order:

1.  The plan that expires first is used first.
    
2.  If multiple plans share the same expiration date, the plan purchased earlier is used first.
    
3.  If usage exceeds the remaining capacity of all plans, the excess is billed at pay-as-you-go rates.
    

### Expiration

All resource plans have a validity period of 1 year. When a plan expires, unused CUs are automatically cleared and cannot be transferred to another resource plan.

## **Specifications and pricing**

The following table lists the available resource plan sizes and their reference prices. For the most current prices, visit the [buy page](https://common-buy-intl.alibabacloud.com/?commodityCode=ga_cubag_dp_intl).

**Specifications**

**CU capacity**

**Use case**

**Price (USD)**

**Savings vs. pay-as-you-go**

Mini resource plan

1,000 CU

Testing. Offsets instance fees for 30 days and CU fees for 740 GB of data transfer.

$56

2%

Small resource plan

5,000 CU

Short-term deployment of small and medium applications. Offsets instance fees for 90 days and CU fees for 4,240 GB of data transfer.

$273

4%

Medium resource plan

10,000 CU

Small and medium applications. Offsets instance fees for 365 days and CU fees for 6,930 GB of data transfer.

$541

5%

Large resource plan

50,000 CU

Large-scale applications. Offsets instance fees for 365 days and CU fees for 46,900 GB of data transfer.

$2,622

8%

**Note**

The scenarios and offset estimates above are for reference only. Actual fees offset vary based on your resource consumption. For more accurate CU estimates, use the [GA (pay-as-you-go) CU calculator](https://www.alibabacloud.com/zh/pricing-calculator?_p_lc=1#/commodity/ga_afterpay_public_intl).

### Cost comparison example

The following example compares the cost of a Medium resource plan ($541 for 10,000 CU) with pay-as-you-go pricing over one year.

**Scenario:** A single GA instance runs for 365 days with moderate traffic (approximately 6,930 GB of data transfer).

**Fee type**

**Pay-as-you-go cost**

**Resource plan cost**

Instance fees (365 days at 0.350877 CU/hour)

0.350877 x 8,760 hours = 3,073.68 CU

Offset from the 10,000 CU plan

CU fees (6,930 GB data transfer)

6,926.32 CU

Offset from the remaining CU balance

Total CU consumed

10,000 CU

10,000 CU

Estimated cost

~$570 at pay-as-you-go rates

$541 (resource plan price)

**Savings**

\--

**~5% (~$29)**

**Note**

This example uses approximate values for illustration. Actual costs depend on CU unit prices and your resource consumption.

## **Purchase a GA resource plan**

1.  Log on to the [GA console](https://ga.console.alibabacloud.com/list).
    
2.  In the left-side navigation pane, click **GA Resource Plans**.
    
3.  On the **GA Resource Plans** page, click **Buy Now**.
    
4.  On the **GA Resource Plans (International Site)** page, configure the following parameters, click **Buy Now**, and complete the payment.
    
    **Parameter**
    
    **Description**
    
    **Resource Plan Type**
    
    The type of resource plan. Only **GA Resource Plans** is available.
    
    **Specifications**
    
    The capacity of the resource plan. For details, see [Specifications and pricing](#45a775c03dptk).
    
    **Effective At**
    
    When the plan takes effect. Select **Immediately after Payment** or **Custom Effective Time**.
    
    **Custom Effective Time**
    
    The date and time when the plan takes effect. Required only when **Effective At** is set to **Custom Effective Time**.
    
    **Purchase Quantity**
    
    The number of resource plans to purchase.
    
    **Validity Period**
    
    The duration of the resource plan. Only **1 Year** is available.
    

## **View usage details**

The **Expenses and Costs** console provides an overview and usage breakdown of your resource plans. You can query remaining capacity and usage details by parameters such as **Effective Time**. For more information, go to the [Resource Plans](https://usercenter2-intl.console.alibabacloud.com/ri/summary?spm=a2c63.p38356.0.0.22ee5fb9DWcrdj&commodityCode=) page.

## **Unsubscribe from a GA resource plan**

GA resource plans include a 5-day money-back guarantee. You can request a full refund within five days of purchase if the plan has not been used. If any CUs have been consumed within the five-day window, a full refund is not available.

For the complete refund policy, see [Rules for unsubscribing from resources](/help/en/user-center/refund-rules).

## **References**

-   [Billing of pay-as-you-go GA instances](/help/en/ga/product-overview/billing-of-pay-as-you-go-ga-instances)
    
-   [Billing overview](/help/en/ga/product-overview/billing-overview/)
