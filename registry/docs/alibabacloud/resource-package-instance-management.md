Resource plans reduce cloud costs by letting you prepay for a fixed amount of a resource at a discounted rate. During the validity period, each plan automatically offsets your pay-as-you-go usage—such as storage capacity, network traffic, or computing—through quota deductions. When the quota is depleted or the plan expires, billing automatically switches back to pay-as-you-go.

## Plan types

Resource plans fall into two categories based on how their quotas are consumed:

**Type**

**How it works**

**Quota period**

**Unused quota**

**Examples**

**Recurring**

A fixed quota is allocated each period. The quota resets at the start of the next period.

Hourly, daily, or monthly

Expires at the end of each period and does not roll over

Reserved instance, Storage Capacity Unit (SCU), OSS outbound data transfer plan

**Aggregate**

A total quota is allocated at purchase. Usage draws from this pool until it is depleted or the plan expires.

Entire validity period

Remains available until the plan expires

Function Compute compute units (CUs)

## Deduction rules

Review these rules before purchasing to avoid mismatched plans and unexpected charges:

-   **Region and product matching:** A resource plan offsets charges only when the region, product or instance type, and billable item all match the target resource. Plans cannot transfer across regions or products. For example, an OSS storage plan in the China (Hangzhou) region does not cover OSS usage in the Singapore region.
    
-   **Validity period:** Resource plans have a fixed validity period. After expiration, the plan stops offsetting charges and is not eligible for a refund.
    
-   **Post-activation only:** A plan takes effect after purchase. It offsets only charges incurred after activation—it does not apply retroactively to charges generated before the purchase.
    
-   **Stacking:** Multiple resource plans of the same type can be active simultaneously. The plan expiring soonest is used first.
    
-   **Overages:** Usage that exceeds the plan quota is billed on a pay-as-you-go basis. To avoid unexpected costs, [set remaining quota alerts](/help/en/user-center/configure-balance-alerts) to get notified when prepaid resources are running low.
    

## Select a resource plan

### Analyze historical costs and usage

Log on to the **Expenses and Costs** console. On the [Bill Details](https://billing-cost-intl.aliyun.com/finance/expense-report/expense-detail-by-instance) page, review your consumption data for the past 3 to 6 months. Identify which pay-as-you-go billable items drive most of your costs, and note the region and usage volume for each.

### Estimate future usage

Project your future resource consumption based on historical data and business growth plans. Leave a buffer for demand spikes.

For workloads with fluctuating usage, size the plan based on average usage plus a buffer for peak protection. This reduces the risk of frequent overages and unexpected charges.

### Determine the plan type

-   **Recurring:** Best for workloads with steady, periodic consumption. The quota refreshes each period (hourly, daily, or monthly), providing predictable deductions.
    
-   **Aggregate:** Best for workloads where total consumption over the validity period matters more than per-period consistency.
    

### Compare capacity and validity period options

Compare costs differently depending on the plan type:

-   **Recurring plans:** Compare the cost of a larger-specification plan against the combined cost of a smaller-specification plan plus the estimated pay-as-you-go charges for overages.
    
-   **Aggregate plans:** Compare the unit price across different capacity tiers. Larger capacity typically offers a lower unit price, but weigh this against capital commitment and the risk of unused quota.
    

## Purchase a resource plan

Go to the management console or the product purchase page for the relevant product. Select the appropriate specifications and validity period. Some products allow you to set a specific activation time, such as [SCU](/help/en/scu/purchase-an-scu), [Global Accelerator (GA) resource plans](/help/en/ga/product-overview/resource-package#1392a7a03ds3e), or [Application Load Balancer (ALB) resource plans](/help/en/slb/application-load-balancer/product-overview/introduction-to-alb-resource-plans).

## Set remaining quota alerts

After the quota is depleted, billing switches to pay-as-you-go, which may lead to unplanned expenses. Set remaining quota alerts to receive notifications before this happens, giving you time to renew, repurchase, or adjust usage. For details, see [Set remaining quota alerts for resource plans](/help/en/user-center/configure-balance-alerts).

## Check the expiration time

**Important**

Only active resource plans or plans that expired within the last year can be queried.

1.  Log in to the **Expenses and Costs** console. Go to the [Resource Plans](https://billing-cost-intl.aliyun.com/ri/summary) page. On the **Instances** tab, click the ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/4510763471/p935461.png) icon and select the **End Time** checkbox.
    
2.  The **End Time** column now appears in the instance list.
    
3.  To view detailed deduction records, go to the **Details** tab.
    

## Renew or repurchase a resource plan

-   **Renewal:** Before a resource plan expires, go to the [Resource Renewal](https://billing-cost-intl.aliyun.com/renew/manual) page to renew it. The new term starts automatically when the current one ends. For details, see [Renew an expiring resource](/help/en/user-center/renewal-guide-1).
    
-   **Repurchase:** If a plan has already expired, go to the product console to purchase a new plan.
    

## Unsubscribe from a resource plan

Some resource plans support unsubscription. On the **[Resource Unsubscription](https://usercenter2-intl.console.alibabacloud.com/refund/refund?commodityType=RESOURCE_PLANS&refundType=NOREASON_REFUND)** page, select the **Resource Plans** option to view eligible plans. If your plan is not listed, it typically does not meet the unsubscription conditions.

To unsubscribe, follow the instructions in [Initiate an unsubscription](/help/en/user-center/initiate-unsubscribe). For refund calculation details, see [Unsubscription rules](/help/en/user-center/cancel-subscription/).

## FAQ

-   [Why do my resource plan and subscription instance have different expiration dates even though I purchased them at the same time?](/help/en/user-center/support/resource-plan-faq#889a44c333i8t)
    
-   [Why do some of my resource plans activate on the hour while others activate at midnight?](/help/en/user-center/support/resource-plan-faq#707a00f90dv87)
    
-   [Why am I still receiving pay-as-you-go bills after purchasing a resource plan?](/help/en/user-center/support/resource-plan-faq#06ef5628d77f9)
    
-   [Why is my account overdue even though I have an active resource plan?](/help/en/user-center/support/resource-plan-faq#1d4058607ec32)
    
-   [How can I prevent pay-as-you-go charges after purchasing a resource plan?](/help/en/user-center/support/resource-plan-faq#d777e26886q7b)
    
-   [How do I verify that my resource plan is correctly applying deductions?](/help/en/user-center/support/resource-plan-faq#4511bc5ebd7jw)
    
-   [Can I use a new resource plan to pay off an existing overdue balance?](/help/en/user-center/support/resource-plan-faq#df42ac407ee1d)
