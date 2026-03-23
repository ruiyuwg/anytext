E-MapReduce (EMR) supports the subscription and pay-as-you-go billing methods. This topic describes the pay-as-you-go billing method.

**Item**

**Description**

Billing rule

Pay-as-you-go is a billing method that allows you to use resources before you pay for the resources. You can purchase and release resources based on your business requirements. You do not need to purchase a large number of resources in advance.

Scenarios

The pay-as-you-go billing method is suitable for the following business scenarios:

-   Program development or functional testing
    
-   Temporary use of resources
    

Pricing

You can view the pricing of a pay-as-you-go EMR cluster in the order that is generated when you purchase the cluster in the EMR console.

Billing cycle

Bills are generated on an hourly basis at the top of every hour (UTC+8). The new billing cycle starts after the bills are settled. In each hourly cycle, you are charged for resources by second (UTC+8).

Examples:

-   You created a pay-as-you-go EMR cluster at 01:30:30 and released the cluster at 01:55:30.
    
    The settlement period is from 01:00:00 to 02:00:00. You are charged in the period of 01:30:30 to 01:55:30 and the billing duration is 1,500 seconds.
    
-   You created a pay-as-you-go task node group in your subscription EMR cluster, added one ECS instance to the node group at 10:59:30, and removed the ECS instance from the node group at 11:50:30.
    
    -   The first settlement period is from 10:00:00 to 11:00:00. You are charged in the period of 10:59:30 to 11:00:00 and the billing duration is 30 seconds.
        
    -   The second settlement period is from 11:00:00 to 12:00:00. You are charged in the period of 11:00:00 to 11:50:30 and the billing duration is 3,030 seconds.
        

**Important**

-   When you purchase a pay-as-you-go EMR cluster, make sure that the available balance, including cash, vouchers, and coupons, in your Alibaba Cloud account is not less than CNY 100. Otherwise, the creation of the EMR cluster fails.
    
-   If the sum of the balance and vouchers in your Alibaba Cloud account is less than the amount that you must pay, Alibaba Cloud notifies you by text message or email.
    

Switching to subscription

You can switch the billing method of a pay-as-you-go EMR cluster to subscription. For more information, see [Switch from pay-as-you-go to subscription](/help/en/emr/emr-on-ecs/product-overview/switch-from-pay-as-you-go-to-subscription#concept-of2-l1p-y2b).

Overdue payments

For more information, see [Overdue payments](/help/en/emr/emr-on-ecs/product-overview/description-of-arrears#concept-kr4-5sn-y2b).
