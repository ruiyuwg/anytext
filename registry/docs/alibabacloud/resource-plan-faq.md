**Category**

**Specific questions**

Before you buy

-   [What is a resource plan and when should I use one?](#e5bb4aa532pag)
    
-   [When does a purchased resource plan take effect?](#c7c132207eej7)
    
-   [Do resource plans support cross-account deductions?](#821467d07ea0v)
    
-   [How can I avoid pay-as-you-go bills after purchasing a resource plan?](#d777e26886q7b)
    

Consumption and troubleshooting

-   [How do I check if my purchased resource plan is being used for deductions?](#4511bc5ebd7jw)
    
-   [I bought a resource plan, so why did I still receive a pay-as-you-go bill?](#06ef5628d77f9)
    
-   [Why do I have overdue payments even after buying a resource plan?](#1d4058607ec32)
    
-   [How is usage charged if it exceeds the resource plan's quota?](#e92607007e5rr)
    
-   [Can I buy a resource plan to cover existing overdue payments?](#df42ac407ee1d)
    
-   [After I upgrade an OSS IA storage plan, why does the periodic capacity still show the pre-upgrade capacity?](#37630544dei78)
    
-   [How is the "pay-as-you-go equivalent cost" for a reserved instance calculated?](#eb57cfb8463g0)
    

Lifecycle management

-   [Why do my resource plan and subscription instance, purchased at the same time, have different expiration dates?](#889a44c333i8t)
    
-   [Why do some of my resource plans activate on the hour, while others activate at midnight?](#707a00f90dv87)
    
-   [What happens when a resource plan expires?](#43dc5cb0a3yng)
    
-   [What should I do if a resource plan is about to expire or has expired?](#890558607ehp3)
    
-   [Can I renew a resource plan?](#f04b0ea07edfz)
    
-   [Can I unsubscribe from a resource plan, and how is the refund calculated?](#24e62be296rpg)
    
-   [Will unsubscribing from a resource plan affect product usage and data?](#9013100689wwi)
    
-   [What if my resource plan expires with unused capacity?](#e92e9782aa1ri)
    

Handling special cases

-   [What should I do if I buy the wrong resource plan?](#e4f8cce453s4i)
    

## **Before you buy**

### **What is a resource plan and when should I use one?**

A resource plan is a pricing model that offers discounts on pay-as-you-go rates when you commit to a fixed amount of usage. It is ideal for services like storage and data transfer, allowing you to lower your costs by committing to a fixed amount of usage while maintaining resource flexibility.

### **When does a purchased resource plan take effect?**

Most resource plans take effect immediately after purchase. A few products allow you to specify an effective time for their resource plans, such as [Storage Capacity Units (SCUs)](/help/en/scu/purchase-an-scu), [Global Accelerator (GA) resource plans](/help/en/ga/product-overview/resource-package#1392a7a03ds3e), and [Application Load Balancer (ALB) resource plans](/help/en/slb/application-load-balancer/product-overview/introduction-to-alb-resource-plans).

**Note**

Resource plans can only be used to deduct charges incurred after the purchase. They cannot be applied to charges incurred before the purchase.

### **Do resource plans support cross-account deductions?**

Under the Enterprise Finance model, reserved instances and SCUs support cross-account sharing. This is not yet available for other resource plans.

**Note**

Enterprise Finance allows you to establish a financial relationship between Alibaba Cloud accounts. Once a relationship is established, you can share reserved instances and SCUs from the main account to cover the pay-as-you-go usage of member accounts.

### How can I avoid pay-as-you-go bills after purchasing a resource plan?

You will be charged at pay-as-you-go rates if your usage exceeds the resource plan's capacity or if the plan expires.

-   **For total capacity resource plans, avoid exceeding the capacity**: Set a balance alert to be notified when your plan's capacity is low. After you receive a balance alert notification, purchase a new resource plan as soon as possible to avoid incurring pay-as-you-go charges.
    
-   **Renew before expiration:** To continue using the resource plan after it expires, [renew](/help/en/user-center/renewal-guide-1) it. For resource plans that do not support renewal, purchase a new plan before the current one expires.
    
-   **Stack resource plans with configurable effective times:** If you purchase multiple resource plans that allow you to set an effective time (such as SCUs), ensure the specified effective time is not later than the expiration time of the currently active plan. This ensures the new resource plan activates immediately after the current one expires, preventing a gap that would lead to pay-as-you-go charges.
    
    **Example**
    
    Suppose you have a resource plan A with a 1-year validity period that expires on January 1, 2024. You plan to purchase a new resource plan B, also with a 1-year validity period. To ensure resource plan B takes effect immediately after A expires, set B's effective time to January 1, 2024. This prevents a billing gap where you would incur pay-as-you-go charges between January 1, 2024 and the time when resource plan B takes effect.
    

## **Consumption and troubleshooting**

### **How do I check if my purchased resource plan is being used for deductions?**

1.  Navigate to the [Resource Plans](https://billing-cost-intl.aliyun.com/ri/summary) page.
    
2.  In the **Resource Type** area, select **Resource Plans**, and then click the **Details** tab. Enter the **Resource Plan ID**, **Deducted Instance ID**, and other information, then click **Search** to view their deduction status.
    

### **I bought a resource plan, so why did I still receive a pay-as-you-go bill?**

If a resource plan failed to cover your pay-as-you-go bill, consider the following reasons:

1.  ###### **Mismatch between the resource plan and the use case**
    
    -   **Region or service limitations**: The resource plan must exactly match the cloud product's region and service type. For example, an OSS storage plan purchased for China (Hangzhou) cannot be used to cover OSS storage costs in other regions.
        
    -   **Billing item mismatch**: A resource plan only covers specific billing items (such as storage, data transfer, or requests). For example, an OSS resource plan only deducts storage fees. Data transfer or API requests are still billed on a pay-as-you-go basis.
        
    
2.  ###### **The resource plan is not yet active or has already expired**
    
    -   **Activation delay**: A newly purchased resource plan may not be active yet. Check if the resource usage occurred before the plan's effective time. You can check the consumption time on the [Bill Details](https://billing-cost-intl.aliyun.com/finance/expense-report/expense-detail-by-instance) page to confirm if the plan has started deducting charges.
        
    -   **Expired validity period**: Check if the resource plan has expired. After expiration, the system automatically switches to pay-as-you-go billing.
        
    
3.  ###### **Insufficient resource plan quota**
    
    -   **Usage exceeds limit**: When a resource plan's quota is exhausted (for example, a 50 GB data transfer plan is used up), any additional usage is billed on a pay-as-you-go basis.
        
    -   **Priority of multiple plans**: If you have multiple small resource plans that can cover the same service, the system may prioritize deducting from one plan, leaving others partially unused. The system's deduction logic is as follows:
        
        -   **Specificity priority**: The system first uses the resource plan with the most specific scope and strictest conditions.
            
        -   **Expiration priority**: For similar resource plans, the system first uses the one closest to its expiration date.
            
    
    Plan your resource plan purchases carefully to avoid partial deductions caused by fragmented plan quotas. Consolidate purchases or adjust validity periods to improve resource efficiency. You can also [set a balance alert for a resource plan](/help/en/user-center/configure-balance-alerts) and adjust your strategy based on the notifications you receive.
    
4.  ###### **The configuration does not meet the resource plan's requirements**
    
    -   **Mandatory configuration binding**: Some resource plans must be bound to a specific configuration to take effect. For example, an ApsaraVideo VOD data transfer plan requires you to bind an accelerated domain name and that the domain's billing method is set to pay-by-traffic. If these conditions are not met, the resource plan will not apply.
        
    -   **Service not actually used**: A resource plan only deducts charges when the corresponding service is triggered. If you do not call the relevant APIs or use the features, the plan's quota will not be consumed.
        
    

Review these possible reasons to diagnose why your resource plan is not being applied to your bills. For more information about your purchased resource plans, see [Query the usage of a resource plan](/help/en/user-center/offset-details-report).

### Why do I have overdue payments even after buying a resource plan?

Overdue payments can occur after you purchase a resource plan for several reasons:

-   Your resources incurred charges for multiple billable items, but your resource plan only covers some of them.
    
-   You purchased a resource plan for a specific region, but the usage occurred in a different region.
    
-   Your resource plan's capacity was insufficient, and your actual usage exceeded the plan's limit.
    
-   Billing system latency: A resource plan automatically deducts usage fees after it becomes effective, but there can be a delay in Alibaba Cloud's billing system. For example, if your plan becomes effective at 09:00, but you still receive a bill for an overdue payment at 10:00, these charges may have been incurred before 09:00.
    

### **How is usage charged if it exceeds the resource plan's quota?**

After purchasing a resource plan, your usage is first deducted from the plan's quota. Any usage that exceeds the quota is charged at pay-as-you-go rates. If your usage significantly exceeds the quota, upgrade your resource plan or purchase multiple plans to stack their capacity to avoid higher pay-as-you-go rates.

### **Can I buy a resource plan to cover existing overdue payments?**

No. Resource plans only cover usage generated after purchase. To settle existing overdue payments, you must add funds to your account.

### **After I upgrade an OSS IA storage plan, why does the periodic capacity still show the pre-upgrade capacity?**

The deduction cycle for OSS storage plans is hourly. An upgrade takes effect in the next hour. If you check the periodic capacity in the next hour, it will show the upgraded amount.

### **How is the "pay-as-you-go equivalent cost" for a reserved instance calculated?**

The "pay-as-you-go equivalent cost" helps you estimate the usage offset by a reserved instance and its corresponding pay-as-you-go cost.

#### **Pay-as-you-go equivalent cost**

You can view the "pay-as-you-go equivalent cost" data on the **Expenses And Costs** > [Usage Overview](https://usercenter2-intl.console.alibabacloud.com/ri/use-statistics?commodityCode=ecsRi_intl) page.

**Note**

The **Instance Type** field on the **Usage** page indicates the instance type of the reserved instance.

For information about deducted instances, see **Expenses And Costs** > [Usage Details](https://usercenter2-intl.console.alibabacloud.com/ri/detail?commodityCode=ecsRi_intl).

#### **Pay-as-you-go equivalent cost calculation example**

Pay-as-you-go equivalent cost = Actual raw usage within the statistical period × Discounted unit price of the deducted instance.

Actual raw usage = Amount deducted within the statistical period / Offset factor.

**Therefore: Pay-as-you-go equivalent cost = Amount deducted / Offset factor × Discounted unit price of the deducted instance.**

**Note**

The following example uses a reserved instance with these details:

-   Instance type: ecs.g5.xlarge
    
-   Type: Regional reserved instance
    
-   Deducted instance type: ecs.g5.4xlarge
    

For more information about reserved instances, see [What is a reserved instance?](/help/en/ecs/reserved-instances)

1.  In the **Expenses And Costs** console, choose **Resource Plan** > **Reserved Instance** >[Usage Details](https://usercenter2-intl.console.alibabacloud.com/ri/detail?commodityCode=ecsRi_intl). Then, search for the desired reserved instance by its name.
    
2.  In the **Raw Usage of Resource Instance** column, view the actual raw usage.
    
3.  Verify the pay-as-you-go equivalent cost.
    

**"Pay-as-you-go equivalent cost"** = **Actual raw usage in the statistical period** ([Usage Details](https://usercenter2-intl.console.alibabacloud.com/ri/detail?commodityCode=ecsRi_intl)) × **Discounted unit price of the deducted instance**.

**Note**

The discounted unit price of the deducted instance = Official pay-as-you-go hourly price × User discount. For pricing information, see [ECS Price Calculator](https://www.alibabacloud.com/zh/pricing-calculator?_p_lc=1&spm=a2c63.p38356.9556232360.609.7e4724d1imB99r#/commodity/vm_intl).

## **Lifecycle management**

### **Why do my resource plan and subscription instance, purchased at the same time, have different expiration dates?**

-   **Subscription instances**: These are like purchasing a physical device. To compensate for creation and setup time, the day of purchase is provided free of charge.
    
-   **Resource plans**: These are like purchasing a discount coupon. The validity period is calculated strictly based on the purchased duration, with no extra time added.
    

For example, assume you place an order at `15:30 on June 29` for a `1-month` term.

**Item**

**Subscription instance (first day is free)**

**Resource plan (first day is not free)**

Product type

Physical resource (such as a server)

Usage deduction quota

Billing starts

Next day, `00:00 on June 30`

Immediately (rounded by rule)

Final expiration

`00:00 on July 30`

`15:00 on July 29`

### **Why do some of my resource plans activate on the hour, while others activate at midnight?**

This is normal and depends on the billing cycle of the corresponding cloud service. The system determines this automatically to ensure the resource plan covers your first bill after purchase.

-   **When deducting for items billed hourly:**
    
    -   The resource plan will activate on the hour.
        
    -   For example, if you make a purchase at `15:30`, the plan will activate from `15:00` to cover the bill generated from `15:00` to `16:00`.
        
-   **When deducting for items billed daily:**
    
    -   The resource plan will activate at midnight on the day of purchase.
        
    -   For example, if you make a purchase at `15:30 on June 29`, the plan will activate from `00:00 on June 29` to cover the bill for the entire day.
        

### **What happens when a resource plan expires?**

If you have another applicable resource plan, the system automatically uses it. Otherwise, your usage is billed at pay-as-you-go rates.

### **What should I do if a resource plan is about to expire or has expired?**

**Before the resource plan expires:** To continue enjoying the discounted rates, [renew](/help/en/user-center/renewal-guide-1) the resource plan. If you only plan to use the remaining quota within the current validity period, no action is needed.

**After the resource plan expires:** An expired resource plan does not affect the use of your pay-as-you-go cloud resources. To continue receiving discounted rates, purchase a new one. If you do not want to use a resource plan, no action is needed. To avoid incurring pay-as-you-go fees for unneeded resources, release the instances.

### **Can I renew a resource plan?**

Resource plans with an hourly or daily commitment period support [renewal](/help/en/user-center/renewal-guide-1). For resource plans that do not support renewal, you can purchase a new one.

**Note**

You cannot renew, upgrade, or stack a resource plan after it has expired.

### **Can I unsubscribe from a resource plan, and how is the refund calculated?**

Some resource plans are eligible for unsubscription. To check if your resource plan supports this, go to the [Unsubscriptions](https://billing-cost-intl.aliyun.com/refund) page and switch to the **Resource Plans** tab. This page lists all instances eligible for unsubscription. If your instance is not listed, it is not eligible for unsubscription.

To unsubscribe, [initiate an unsubscription](/help/en/user-center/initiate-unsubscribe) for the resource plan.

**The refund amount is calculated as follows:**

-   [Unsubscription rules](/help/en/user-center/cancel-subscription/#65f0874aaciq9): Some types of resource plans can be fully refunded if they are unsubscribed from within five days of purchase and have zero usage.
    
-   [Unsubscription rules](/help/en/user-center/cancel-subscription/#af8d6a082bdye): This applies to resource plans that have been partially used but still have a remaining balance. The refund amount is calculated as: `Order Payment Amount - Consumed Amount`. The `Consumed Amount` is calculated based on a **linear conversion of usage for total capacity plans** or **the actual duration of use for periodic usage plans**. For detailed calculation rules, see [Unsubscription rules](/help/en/user-center/cancel-subscription/).
    

### **Will unsubscribing from a resource plan affect product usage and data?**

Unsubscribing from a resource plan does not affect product usage or data. Your resources will automatically switch to pay-as-you-go billing. Please ensure your account has a sufficient balance. An insufficient balance will cause your account to become overdue, leading to service suspension. If the overdue payment is not settled promptly, the resources will be released, resulting in data loss.

### **What if my resource plan expires with unused capacity?**

When you purchase a resource plan, you must select a validity period. The plan will be void after this period expires. An expired plan cannot be refunded or used. Monitor your [resource plan validity period (expiration time)](/help/en/user-center/resource-package-instance-management#2e95d3e691y1m) and [set a balance alert for a resource plan](/help/en/user-center/configure-balance-alerts) to ensure you use the plan's capacity before it expires.

### **What should I do if I buy the wrong resource plan?**

If you purchased the wrong resource plan, you must first [unsubscribe from the resource plan](/help/en/user-center/resource-package-instance-management#055036a256rp7). Then, go to the product's purchase page to [select a suitable resource plan](/help/en/user-center/resource-package-instance-management#394e172f0cyq1).
