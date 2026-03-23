This topic describes the billing methods for Alibaba Cloud products and services. Understanding these options helps you choose the most suitable way to purchase and pay for resources.

## What are billing methods?

A billing method defines how you purchase and pay for Alibaba Cloud resources. Alibaba Cloud offers two primary billing methods: **Pay-as-you-go** and **Subscription**. These options offer the flexibility for various business needs, allowing you to balance cost-effectiveness and resource elasticity.

-   **Pay-as-you-go**: A post-paid billing method where you pay only for the resources you consume, with no upfront costs or long-term commitments. This model is ideal for applications with short-term, spiky, or unpredictable workloads because it offers maximum flexibility.
    
-   **Subscription**: A prepaid billing method that offers significantly lower prices than Pay-as-you-go rates in exchange for a commitment to use resources for a specific term. This billing method includes several options:
    
    -   **Subscription**: Commit to specific resources, such as an Elastic Compute Service (ECS) Instance Type, for a fixed period (such as one year) to receive a substantial discount. The longer your subscription term, the more you save.
        
    -   **Savings Plan**: A flexible pricing model that offers lower prices in exchange for a commitment to a consistent amount of usage, measured in USD/hour, for a one- or three-year term. These savings automatically apply to eligible pay-as-you-go usage across different services and regions.
        
    -   **Resource Plan**: Pre-purchase a package of a specific resource, such as 100 GB of data transfer, at a discounted rate. This plan automatically uses its resources to offset your pay-as-you-go usage and offers better prices for predictable resource consumption.
        

## **Billing method comparison**

###### **Billing method**

###### **Advantages**

###### **Disadvantages**

**Pay-as-you-go**

-   High flexibility and adaptability to rapid business changes.
    
-   No large upfront investment required.
    

-   Higher costs for long-term use. Difficult to control costs.
    

**Subscription**

Subscription

-   Lower price than pay-as-you-go. Controllable costs.
    
-   Lock in resources and prices in advance to avoid price fluctuations.
    

-   Low flexibility. Changing configurations or releasing resources early may incur extra fees.
    

[Savings plan](/help/en/user-center/savings-plan-overview/)

-   Lower price than pay-as-you-go. Controllable costs.
    
-   High flexibility. Can offset bills for different resources.
    

-   You are charged for the committed amount. Bills are generated even if resources are not used.
    

[Resource plan](/help/en/user-center/resource-package-instance-management)

-   Lower price than pay-as-you-go. Controllable costs.
    
-   Helps plan for long-term resources with fluctuating usage patterns. Avoids waste from idle, fixed resources.
    

-   Many types of resource plans. Easy to purchase the wrong one.
    
-   You must estimate resource usage. You may run out of the plan's quota or not use it fully.
    

## How to choose a billing method

Understanding your business status and cloud needs helps you choose a suitable billing method and reduce your cloud costs. The following are the recommended scenarios for each billing method:

-   Pay-as-you-go: Suitable for short-term projects or businesses with low or fluctuating workloads. Examples include temporary scaling, testing, and e-commerce sales promotions. The pay-as-you-go standards vary by product. For more information, see the specific product documentation.
    
-   Subscription (Monthly/Yearly): Suitable for stable, mature businesses that require long-term resource usage. Examples include 24/7 web services and database services.
    
-   Subscription (Savings Plans): Suitable for scenarios where the total business volume is stable over a long period, such as one, three, or five years, but you need the flexibility to adjust resources. Examples include development environments for large websites and mixed deployment scenarios for online environments.
    
-   Subscription (Resource plans): Suitable for scenarios where you can estimate resource usage for a future period. An example is resource migration across environments.
    

## FAQ

## Savings Plan

What is a savings plan and what are its use cases?

A savings plan is a discount plan that can offset bills for pay-as-you-go instances. You commit to a certain amount of spending per unit of time in exchange for a lower price. It is suitable for scenarios where you have a clear budget and want to reduce costs by committing to a certain spend, while maintaining resource elasticity. The discounted cost of your usage per unit of time is directly offset up to your committed amount. Any usage beyond that amount is billed at the standard pay-as-you-go rate.

**Important**

You are charged the full committed amount for each unit of time, even if your usage is less than your commitment.

Typical application scenarios:

1.  Variable resource usage: When you need to use ECS resources flexibly, such as upgrading instance types and system disks before a major promotion and then downgrading them afterward, each operation incurs hidden costs. These costs can accumulate and increase the overall monthly subscription cost. A savings plan combined with pay-as-you-go eliminates these hidden costs when you switch resources.
    
2.  Different resource needs at different times: For example, department A uses ECS during the day, and department B uses ECI at night. With a monthly or yearly subscription, resources would be wasted for nearly half the time. With a savings plan and pay-as-you-go, the benefits are shared. The savings plan can offset pay-as-you-go fees for both ECS and ECI, which significantly reduces the total cost after switching.
    

What are the advantages of savings plans compared to subscriptions and resource plans?

Savings plans offer significant discounts while providing greater resource elasticity.

-   Compared to subscriptions, savings plans used with pay-as-you-go offer high flexibility. You can adjust resources at any time based on your actual needs, without the inconvenience of being locked into specific resources.
    
-   Compared to resource plans, savings plans have broader applicability for offsets. This improves resource flexibility and cost efficiency.
    

Which products support savings plans?

For more information, see [Alibaba Cloud services that support savings plans](/help/en/user-center/what-is-the-saving-plan#4af32e903084m).

Can I continue my free trial after purchasing a savings plan? I want to start using my purchased plan in 3 months.

Yes, you can continue your free trial after purchasing a savings plan. The free trial is applied first to offset charges. The savings plan will offset any usage that exceeds the trial quota.

Note: Once a savings plan becomes effective, you are charged the committed amount even if there is no usage to offset. To start using the savings plan in 3 months, you can specify the effective time when you purchase it.

How do I know how much a savings plan has saved me?

Go to the [Savings Plan Overview page](https://billing-cost.console.alibabacloud.com/resource/spn/overview) to view your purchased savings plans and their performance. This includes the savings amount, usage details, utilization summary, and coverage summary. You can upgrade or downgrade the committed spend of your savings plan based on your current utilization and coverage.

Can I set a stop time after a savings plan becomes effective?

No, you cannot set a stop time after a savings plan becomes effective. A savings plan is a commitment to spend a certain amount per unit of time in exchange for a lower price.

Do savings plans support unsubscription?

No, currently savings plans do not support unsubscription.

I purchased a savings plan, so why do I still have pay-as-you-go bills?

If you still receive pay-as-you-go bills after you purchase a savings plan, the reasons might include the following: the pay-as-you-go instances you are using are not covered by the savings plan, there are limitations in the plan's offset rules, or the plan has not yet taken effect. Check your situation to resolve the issue.

1.  Savings plan scope limitations: Ensure the savings plan you purchased applies to the cloud service and specific billable items you are using.
    
2.  Offset rule limitations: Understand the savings plan's offset logic, such as the offset order and scope. For example, a compute-optimized ECS savings plan is limited to specific regions and instance families.
    
3.  Effective time limitation: Check the effective time of your savings plan to ensure it has started offsetting charges.
    

Investigate based on the possible reasons above. If you have questions, you can review the detailed description of your specific savings plan or contact Alibaba Cloud support.

## Resource Plan

What is a resource plan and what are its use cases?

A resource plan is a sales model where you purchase a fixed amount of usage to obtain a discount on pay-as-you-go prices. It is suitable for storage- and traffic-based products. It is ideal for scenarios where you have a clear budget and want to reduce costs by committing to a certain usage amount, while maintaining resource elasticity.

I purchased a resource plan, so why do I still have pay-as-you-go bills?

If a resource plan does not offset your pay-as-you-go bills, the reasons might include the following:

1.  Resource plan scope limitations: The resource plan may not be able to offset charges from pay-as-you-go services. Confirm that the purchased resource plan applies to the cloud service and specific billable items you are using.
    
2.  Resource plan effective time: A newly purchased resource plan may not have taken effect yet due to billing delays. Check the plan's effective time and the current bill's billing period to confirm if the plan has started offsetting charges.
    
3.  Non-offsettable items: There may be billable usage that the resource plan cannot offset. For example, different resource plans cannot offset each other, or a specific plan only offsets a specific service. For example, a transcoding plan cannot offset storage usage.
    
4.  Configuration requirements not met: Some resource plans, such as an ApsaraVideo VOD data transfer plan, require specific conditions to be met to take effect. For example, you must have an accelerated domain name configured and the billing method for the acceleration service must be pay-by-data-transfer. If the conditions are not met, the resource plan cannot provide an offset.
    

Investigate based on the possible reasons above. If you have questions, you can review the detailed description of your specific resource plan or contact Alibaba Cloud support.

Do resource plans support unsubscription? How is the refund calculated?

Whether a resource plan supports unsubscription depends on the rules set for the specific product.

For resource plans that support unsubscription, there are two scenarios: "full refund if unused within five days" and "partial refund".

For a partial refund, the refund amount = Order payment - Consumed amount. The consumed amount is calculated as follows:

-   For usage-based (total) resource plans, the consumed amount is calculated linearly based on usage.
    
-   For usage-based (periodic) resource plans, the consumed amount is calculated based on the actual duration of use.
    

For more information, see [Unsubscription rules](/help/en/user-center/cancel-subscription/).

## Subscription

What are the use cases for a monthly/yearly subscription?

A monthly or yearly subscription is a commitment to use a specific type of cloud resource or service for a certain period. In return, you receive a better price than pay-as-you-go. The resource is automatically stopped after the subscription expires. This method is suitable for scenarios with a clear budget and relatively stable business needs, such as a 24/7 web service.
