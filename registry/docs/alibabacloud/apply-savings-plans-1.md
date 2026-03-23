A savings plan is a discount privilege plan that provides savings over pay-as-you-go rates. You can apply savings plans to offset fees of pay-as-you-go elastic container instances, excluding preemptible elastic container instances. If you run online applications for an extended period of time, we recommend that you use savings plans to offset fees of elastic container instances. This topic describes how to use savings plans to offset fees of long-term elastic container instances.

## Purchase savings plans

A savings plan is a discount plan that provides savings on the usage of pay-as-you-go resources. You can use pay-as-you-go instances with discounts in exchange for a commitment to use a consistent amount of resources within a one-year or three-year period. The amount of resources is measured in USD/hour. After a savings plan takes effect, the savings plan applies to eligible pay-as-you-go instances to reduce the costs of using the instances. For more information, see [Savings plans](/help/en/ecs/savings-plans).

Savings plans come in two types: Before you purchase a savings plan, carefully read the effective rules of the savings plan and select a suitable savings plan based on your business requirements.

-   **General-purpose savings plans**
    
    This type of savings plans are suitable for all pay-as-you-go elastic container instances regardless of the Elastic Compute Service (ECS) instance types based on which the elastic container instances are created. This type of savings plans provide greater flexibility than ECS compute savings plans.
    
-   **ECS compute savings plans**
    
    The savings plans match ECS instance types to offset fees of only elastic container instances that are created by using the corresponding ECS instance types and billed based on the ECS instance types. This type of savings plans provide greater savings than general-purpose savings plans.
    

For more information, see [Savings Plans](https://ecs.console.alibabacloud.com/#/savingPlan) in the ECS console. When you purchase a savings plan, you can adopt a plan recommended by the system or select a plan based on your consumption trends.

-   If you want to optimize the costs of existing elastic container instances, you can go to the [Purchase recommendation page of savings plans](https://usercenter2-intl.console.alibabacloud.com/resource/spn/recommend) to obtain the purchase recommendation.
    
-   If you do not have existing elastic container instances, you can calculate the price of an elastic container instance and your hourly commitment based on the discount. Then, you can go to the [Savings Plan buy page](https://common-buy-intl.alibabacloud.com/?commodityCode=savingplan_common_public_intl#/buy) to purchase savings plans.
    

For more information, see [Purchase and apply savings plans](/help/en/ecs/user-guide/purchase-and-apply-savings-plans#task-1997695).

## View the offset information of a savings plan

After you purchase a savings plan, the system matches the savings plan with elastic container instances to offset fees. You do not need to manually match the resources. You can view the offset information of the savings plan in the [Expenses and Costs console](https://usercenter2-intl.console.alibabacloud.com/billing/#/account/overview).

-   View bills of elastic container instances
    
    In the Expenses and Costs console, choose **Bills** > **Bill Details** in the left-side navigation pane, click the **Billing Details** tab. On the Billing Details tab, you can view the billing details of each elastic container instance. No bills are generated for the fees of elastic container instances that are offset by savings plans.
    
-   View the effect of savings plans
    
    In the Expenses and Costs console, choose **Savings Plan** > **Overview** in the left-side navigation pane to go to the Savings Plan page. On the Savings Plan page, you can view the overview, details, usage, and coverage of savings plans.
