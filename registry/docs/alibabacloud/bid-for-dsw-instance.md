Select spot instances when creating a DSW instance to reduce costs by up to 90%.

## Usage notes

Pay-as-you-go instances in a DSW public resource group can be purchased as spot instances. Spot instances offer the same features and performance as regular instances with per-minute billing. They have the following characteristics:

-   **Dynamic pricing**: Price fluctuates in real time based on market supply and demand. Price does not exceed the pay-as-you-go price for the same instance type, saving up to 90% on costs.
    
-   **Interruption mechanism**: If market price exceeds your specified maximum price, the instance is interrupted and reclaimed. Save intermediate data regularly during task execution to avoid data loss.
    

## Billing

**Usage duration**

**Billing method**

**Formula**

Set usage to 1 hour (≤ 1 hour)

Market price at transaction time

Transaction price × Actual usage duration

Set usage to 1 hour (> 1 hour)

Market price for each period

Transaction price × 1 hour + Σ(Price for each period × Corresponding duration)

No usage duration set

Market price for each period

Σ(Price for each period × Corresponding duration)

## Notes

-   If the spot instance option is unavailable after selecting an instance type, no spot inventory is available for that type.
    
-   Spot instances are **not** eligible for savings plan deductions.
    
-   If you have a DSW resource plan (free or paid) and select an instance type eligible for the plan, the resource plan deduction uses the original price, regardless of the spot instance's transaction price. Therefore, **do not use spot instances if you have a resource plan**.
    
-   Market price for the same instance type can vary across different zones. **If you specify a vSwitch, do not bid lower than the minimum price in the zone where the vSwitch is located**. Otherwise, the purchase may fail.
    
    For example, if you purchase the following instance type as a spot instance and configure a vSwitch in Hangzhou Zone H, your purchase request is likely to fail if your bid is lower than USD 0.8603.
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/9321785371/p889956.png)
    

## Procedure

1.  Go to the DSW page.
    
    1.  Log on to the [PAI console](https://pai.data.aliyun.com/console).
        
    2.  On the **Overview** page, select the destination region.
        
    3.  In the navigation pane on the left, click **Workspaces**. On the Workspace List page, click the name of the workspace you want to manage.
        
    4.  In the navigation pane on the left of the workspace, choose **Model Development and Training** > **Data Science Workshop (DSW)**.
        
2.  Click **Create Instance** and configure the following key parameters. For more information about other parameter settings, see [Create a DSW instance](/help/en/pai/user-guide/create-and-manage-dsw-instances).
    
    **Parameter**
    
    **Description**
    
    **Resource Type**
    
    Select **Public Resources**.
    
    **Bidding Purchase**
    
    Enable the **Bidding Purchase** switch.
    
    **Instance Usage Duration**
    
    Select one of the following options:
    
    -   **1-Hour Usage**: After the instance starts, it runs for the set time without release. After the set time, inventory and bids are checked every 5 minutes to determine whether the instance can continue.
        
    -   **No Specified Usage Duration**: Do not set a resource usage duration. This option provides better cost savings compared to setting a specific duration.
        
    
    **Maximum Instance Price**
    
    Select one of the following options:
    
    -   **Use Automatic Bid**: Automatic bidding accepts the real-time market price as the billing price.
        
        -   When inventory is sufficient, the system automatically bids based on the current market price, with pay-as-you-go price as the upper limit.
            
        -   When inventory is insufficient, the instance is automatically released.
            
    -   **Set Maximum Price**: Specify an acceptable maximum price.
        
        -   If maximum price is greater than or equal to market price and inventory is sufficient, the spot instance is purchased and runs. You are billed at the current market price.
            
        -   If maximum price is less than market price or inventory is insufficient, the order fails and the instance is automatically released. Pay attention to historical price trends when placing a bid.
            
    
    **Note**
    
    Consider market price fluctuations and set a reasonable bidding policy to increase the success rate of instance creation and reduce the risk of resource reclamation.
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/9321785371/p889333.png)
    
3.  After confirming the configuration, click **OK**.
    

## Data and environment protection

Similar to regular pay-as-you-go instances, each spot instance includes a free 100 GiB system disk. If a spot instance is released due to a market price increase, environment configuration and data on the system disk are retained. Recover this data the next time you start the instance.

However, running processes cannot be recovered. Save intermediate data from your tasks regularly when using a spot instance to prevent data loss.
