When you use an EMR cluster, if your account does not have sufficient funds (including vouchers or cash) to cover the fees generated in the previous hour, the cluster enters the Overdue state. Overdue payments may affect the normal operation of your EMR cluster. Please recharge your account promptly.

## Impact of overdue payments

The overdue payment of a cluster does not affect the performance of another cluster. For example, if you have a pay-as-you-go cluster with an overdue payment and a subscription cluster that has not expired, the subscription cluster will continue to work as expected.

**Billing method**

**Policy to handle overdue payments**

Subscription

You can continue to use your existing subscription clusters during the overdue payment period. However, you cannot perform operations that generate fees, such as purchasing new resources or renewing subscriptions.

**Note**

If a subscription cluster expires and is not renewed, the system suspends the cluster at the time when it expires. For information about how to renew a cluster, see [Renewal policy](/help/en/emr/emr-on-ecs/product-overview/renewal-description#concept-mwr-3sn-y2b).

Pay-as-you-go

-   If you have an overdue payment, the system sends you a notification.
    
    For pay-as-you-go resources, the system automatically deducts fees from your account. If your account balance is less than zero, the system sends you a notification by text message or email.
    
-   If you have an overdue payment, your EMR service will be suspended.
    
    After your account balance becomes a negative number, you can still use your clusters and the system still deducts fees from your account within 24 hours. After 24 hours, the system suspends the clusters and stops deducting fees from your account. For more information about the operation restrictions after EMR service suspension, see [Limitations for overdue payments](#88347f4d8d9bb).
    
-   For information about the impacts of overdue payments on ECS resources, see [Overdue payments](/help/en/ecs/overdue-payments#concept-2128819).
    

## **Limitations for overdue payments**

**Duration of overdue payment**

**EMR service restrictions**

Within 24 hours

-   Some O&M operations are available
    
    All O&M operations are available except for those that involve fees, such as scaling out and upgrading node configurations
    
-   Task submission has risks
    
    Task submission will be affected because ECS instances are released after overdue payments
    

Within 15 days

-   Some O&M operations are available
    
    -   You can export service configurations
        
    -   You can view cluster information
        
    -   You can view operation history
        
-   Task submission has risks
    
    Task submission will be affected because ECS instances are released after overdue payments
    

15-60 days

-   Some O&M operations are available
    
    -   You can export service configurations
        
    -   You can view cluster information
        
    -   You can view operation history
        
-   You cannot submit tasks
    

After 60 days

All O&M operations are unavailable, and data cannot be recovered after deletion

-   User business data is deleted
    
-   Visible logs and status data are deleted
    
-   Product configuration data is deleted
    

## View overdue amounts

1.  Log on to the [Expenses and Costs](https://usercenter2-intl.console.alibabacloud.com/) **Console**.
    
2.  On the **Account Overview** page, view the overdue amount.
    

## **FAQ**

**How do I make an EMR cluster stop providing services?**

You can release an EMR cluster to avoid unnecessary costs if you no longer need the cluster. If you release a cluster, the data of the cluster cannot be recovered. For information about how to release a cluster, see [Release a cluster](/help/en/emr/emr-on-ecs/user-guide/release-a-cluster).

If you want to create a cluster that has the same configurations as a released cluster, we recommend that you use the cluster cloning feature. For information about how to clone a cluster, see [Clone a cluster](/help/en/emr/emr-on-ecs/user-guide/clone-a-cluster).
