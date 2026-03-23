You can convert a Subscription instance to the Pay-as-you-go billing model. After converting, you are billed for your actual usage, and the remaining subscription fee is refunded. This lets you optimize costs and manage resources with greater flexibility.

## **Refund rules**

You can convert a Subscription instance to Pay-as-you-go at any time after it is created. This lets you use resources more flexibly and receive a refund for the unused portion of your subscription fee.

## Refundable amount calculation

**Refundable amount = Paid amount - Fee for consumed resources**, where:

-   **Paid amount**: The amount paid for the order, excluding any value from coupons. This may also be referred to as the "Order payable cash amount."
    
-   **Fee for consumed resources**: Calculated based on the following rules:
    
    **Type**
    
    **Calculation rule**
    
    Elastic Compute Service (ECS)
    
    Usage duration < 30 days
    
    (Daily unit price × Usage duration × Discount for the usage duration) × 1.5
    
    Usage duration ≥ 30 days
    
    Daily unit price × Usage duration × Discount for the usage duration
    
    Other cloud services
    
    Daily unit price × Usage duration × Discount for the usage duration
    

**Parameter description**

**Parameter**

**Description**

`Usage duration`

The actual usage duration of the order, calculated in days. A partial day counts as a full day.

`Usage duration` = Conversion time - Order start time

Example:

-   If you purchase an ECS instance for one year at 12:00 on 2023-01-01 and convert it to Pay-as-you-go at 14:00 on 2023-01-10, the `Usage duration` is 10 days.
    
-   If you purchase an ECS instance for one year at 12:00 on 2023-01-01 and convert it the same day at 14:00, the `Usage duration` is 1 day.
    

`Discount for the usage duration`

When you convert, the system automatically recalculates the best applicable discount based on the resource configuration and `Usage duration`.

`Daily unit price`

-   If the original order was for a new purchase, renewal, or downgrade:  
    `Daily unit price` = Original order price / Actual purchase duration of the order
    
-   If the original order was for an upgrade:  
    `Daily unit price` = Daily unit price of the configuration difference = (Original order price / Actual purchase duration of the order) × Price difference ratio of the upgrade
    
    -   Price difference ratio of the upgrade = (Daily unit price of the upgraded configuration - Daily unit price of the pre-upgrade configuration) / Daily unit price of the upgraded configuration  
        Note: All daily unit prices in this formula are list prices, excluding any discounts.
        
    -   Actual purchase duration of the order = Order end time - Order start time  
        The duration is rounded down to the nearest whole day. For example, if you purchase an ECS instance for one month at 12:00 on 2023-01-01 and the order end time is 00:00 on 2023-02-02, the actual purchase duration of the order is 31 days.
