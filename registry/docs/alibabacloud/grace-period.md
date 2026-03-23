This topic describes the concept of suspension protection and related precautions.

## What is service suspension protection?

To ensure service continuity and stability, Alibaba Cloud provides service suspension protection. This protection lets you continue using cloud services within a certain credit limit or time frame after your pay-as-you-go account becomes overdue. Services are billed normally during the protection period. The system automatically calculates and updates your protection limit or duration each month based on factors such as your historical spending on Alibaba Cloud.

If you do not settle your bills, your account becomes overdue. The following scenarios apply:

-   If the overdue payment (meaning your Available Balance is less than 0) is within your protection limit, your pay-as-you-go services continue to run normally.
    
-   If the overdue payment (meaning your Available Balance is less than 0) exceeds your protection limit, your pay-as-you-go services are suspended.
    
    -   If you settle all overdue payments before the resources are released, bringing your Available Balance above 0, any stopped resources automatically resume service.
        
    -   If you settle the overdue payments after the resources have been released, the resources cannot be recovered.
        

## How service suspension protection works for pay-as-you-go accounts

-   All direct-sales customers of Alibaba Cloud receive a 15-day grace period. During this period, you can continue to use your existing pay-as-you-go services, purchased resource plans, and subscription resources. However, you cannot create new subscription or pay-as-you-go resources.
    
-   If you use pay-as-you-go cloud communications products, your account has an additional protection limit during the grace period. If your overdue payment exceeds this protection limit, your pay-as-you-go cloud communications products are immediately suspended. Your other cloud products still have the 15-day grace period. See the service suspension grace period updates for affected pay-as-you-go cloud communication products. The system automatically calculates this protection limit based on a combination of factors, including your historical spending on Alibaba Cloud.
    

Consider the following examples for Customer A:

-   **Example 1:** On January 1, 2025, Customer A's account becomes overdue from pay-as-you-go usage and enters the grace period. The customer uses pay-as-you-go cloud communications products, and the system calculates a protection limit of USD 100 for this period.
    
    1.  During the grace period, if the customer's overdue payment (for example, an overdue amount of USD 101, resulting in an Available Balance of USD -101) exceeds the protection limit, the pay-as-you-go cloud communications products are immediately suspended. The customer's other cloud products still have the 15-day grace period, meaning services continue until January 15, 2025, if the payment remains unsettled. If the customer settles the overdue payment during the grace period, their cloud communications services are restored.
        
    2.  If Customer A uses cloud communications products during the grace period, and the overdue amount (for example, USD 90, resulting in an Available Balance of USD -90) is less than the protection limit (USD 100), then both the cloud communications products and other cloud products keep the 15-day grace period. This means services continue until January 15, 2025, without settling the payment.
        
-   **Example 2:** Customer A's account has an overdue payment from pay-as-you-go usage, but the customer does not use any pay-as-you-go cloud communications products.
    
    -   The customer receives a 15-day grace period. If the customer has not settled the overdue payment by the end of the grace period, all running resources are stopped.
        

## Risk assessment: The protection limit is not a cap on overdue payments

The amount on your bill for pay-as-you-go products depends on factors like the billing cycle (such as hourly or daily) and product specifications. A single bill can cause your overdue amount to exceed your protection limit.

-   Case Study: Customer A uses a pay-as-you-go cloud communications product. Their protection limit is USD 100, and their Available Balance is USD 200. On February 1, the customer's SMS message volume surges. The bill generated on February 2 is USD 1,000. After the bill is processed, the Available Balance drops to USD -800. Because the overdue amount (USD 800) exceeds the USD 100 protection limit, the pay-as-you-go cloud communications product is immediately suspended.
    
    **Important**
    
    -   Bills generated during the protection period are regular service fees, and you are responsible for paying them.
        
    -   For Alibaba Cloud pay-as-you-go products, bill generation is typically delayed by about three hours after resource usage, and this delay can sometimes be longer. As a result, you might receive a bill after a service has been stopped.
        
    -   Pay-as-you-go products have a defined billing cycle. A sudden increase in usage can cause the charges for a single billing cycle to exceed your protection limit.
