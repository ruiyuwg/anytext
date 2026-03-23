This topic describes how to create a storage capacity unit (SCU) in the Elastic Compute Service (ECS) console.

## Prerequisites

Your account has no unpaid bills.

## Procedure

1.  Log on to the [ECS console](https://ecs.console.alibabacloud.com).
    
2.  Go to the [Storage Capacity Units](https://ecs.console.alibabacloud.com/storageCapacityUnit/) page.
    
3.  Click **Create SCU**.
    
4.  Configure the following parameters on the SCU buy page.
    
    **Parameter**
    
    **Description**
    
    **Example**
    
    **Region**
    
    The region in which you want to create an SCU.
    
    **China (Hangzhou)**
    
    **SCU Capacity**
    
    The capacity of the SCU.
    
    **1 TB**
    
    **Deductible Product Type**
    
    The deductible products and the corresponding deduction factors.
    
    None
    
    **SCU Name**
    
    The name of the SCU.
    
    Example of SCU deduction
    
    **Quantity**
    
    The number of SCUs that you want to purchase.
    
    1
    
    **Validity Period**
    
    The validity period of the SCU.
    
    **1 Month**
    
    **Effective Time**
    
    The effective time of the SCU. Valid values:
    
    -   **Now**: The SCU takes effect on the next hour after the purchase.
        
    -   **Specify Effective Time**: The SCU takes effect at the specified time. You can specify a point in time that is within 180 days after the SCU is purchased.
        
    
    **Now**
    
    **Tag**
    
    Set tags to categorize snapshots for easier searching and batch operations.
    
    None
    
    **Terms of Service**
    
    Read and confirm the terms of service.
    
    N/A
    
5.  Click **Preview**.
    
6.  Click **Subscribe** and complete the payment.
    

## Result

When the status of the SCU changes to **Active**, the SCU takes effect to offset bills of eligible pay-as-you-go resources in the current region.

## More operations

Find the created SCU and click **View Bills** in the **Actions** column to go to the Expenses and Costs console to view the hourly deduction records of the SCU.
