This topic describes how to view your Resource Plan usage and identify potential waste.

## View resource plan overview

Use the Instance Summary page to view key details of your Resource Plan instances, including total amount, remaining amount, and status. This helps you manage your purchased Resource Plans more effectively.

1.  Log on to the [Resource Plan](https://billing-cost-intl.aliyun.com/ri/summary) page, select **Resource Packages**, then click the **Instances** tab.
    
2.  Select an **Effective At** time and **Status**, enter a **Resource Plan ID**, and click **Search** to find the information you need.
    
    For example, to check if a Resource Plan has been used, compare the **Total Amount** and **Remaining Amount** fields. If the **Remaining Amount** is less than the **Total Amount**, the plan has been partially used. Click **Statistics** in the **Actions** column to view the deduction details for the Resource Plan.
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/4690846371/p894159.png)
    

By default, data for the current account is displayed. If you are logged on with a management account, you can also filter by account to view data for member accounts.

The following table describes the parameters.

**Parameter**

**Description**

Resource Purchase Account

The account that purchased the Resource Plan.

Product Name

The name of the Alibaba Cloud product to which the Resource Plan belongs.

Commodity Name

The name of the Resource Plan, such as Reserved Instance or Storage Capacity Unit.

Resource Plan Type

The category of the Resource Plan, such as Compute Plan or Reserved Capacity.

Resource Plan ID

The ID of the Resource Plan instance.

Instance Type

The type of instance the Resource Plan can offset, such as `ecs.g6.large`.

Eligible Region

The product region that the Resource Plan can offset.

Status

The status of the Resource Plan. Valid values:

**Active**: The plan is in effect and can be used for deductions.

**Exhausted**: The plan has not expired but has no remaining amount for deduction.

**Expired**: The plan has expired.

Commitment Cycle

The capacity refresh cycle of the Resource Plan (formerly "Capacity Category"). There are six types: No Period, Hourly, Daily, and Monthly (which includes Free Trial, By Calendar Month, and By Dynamic Month).

-   **No Period**: Deductions are made based on actual consumption until the balance is zero or the plan expires.
    
-   **Hourly**: A fixed quota is provided every hour. Unused quota does not carry over to the next hour.
    
-   **Daily**: A fixed quota is provided every day. Unused quota does not carry over to the next day.
    
-   **Monthly**
    
    -   **Free Trial**: If activated mid-month, the first and last months share a single quota. In other months, unused quota does not carry over.
        
    -   **By Calendar Month**: A fixed monthly quota is restored on the first day of each month. Unused quota does not carry over.
        
    -   **By Dynamic Month**: A fixed monthly quota is restored on the day after the monthly purchase date. Unused quota does not carry over.
        

Total Capacity

The total limit of resource capacity or usage you selected when purchasing the Resource Plan.

Remaining Capacity

The remaining amount of a "No Period" type Resource Plan, which decreases with usage.

If the Remaining Capacity is less than the Total Amount, the Resource Plan has been partially used. If the Remaining Capacity is 0, the Resource Plan is exhausted.

Period Capacity

The remaining capacity for the current period of the Resource Plan.

If the Resource Plan Type is not "No Period" and the Status is Active, the Period Capacity decreases with usage. If the Status is Expired, the Period Capacity equals the Total Capacity.

For "No Period" type Resource Plans, this parameter is displayed as "-".

Capacity Unit

The unit of the Resource Plan's capacity specification, such as GB or CU\*H.

For "No Period" type Resource Plans, this parameter is displayed as "-".

Purchase Time

The time when the Resource Plan instance was purchased.

Effective/Expiration Time

The start and end times of the Resource Plan's effective period. Only usage within this time range can be offset by the Resource Plan.

Actions

You can perform the following operations on Resource Plans purchased under the current account:

-   **Statistics**: View usage details and instance consumption distribution (deduction distribution) for the Resource Plan.
    
-   **Renew**: If your Resource Plan is about to expire, you can renew it. This operation is available for certain types of Resource Plans, such as OSS storage plans.
    
-   **Upgrade**: Upgrade the specifications of your Resource Plan when the current one no longer meets your business needs. This operation is available for certain types of Resource Plans that support dynamic adjustments, such as storage plans.
    
-   **Replace**: Replace your current Resource Plan with one of a different specification or type. This feature is available for certain types of Resource Plans that support flexible adjustments, such as OSS storage plans.
    

## View resource plan usage details

Reviewing usage details is essential for managing your Resource Plans. These details provide information about deductions, including which pay-as-you-go instances and billable items were offset, the time of deduction, the deduction amount, and the offset factor. You can use these details to cross-reference and verify deductions against the usage of your pay-as-you-go instances in your bills.

1.  Log on to the [Expenses and Costs](https://billing-cost-intl.aliyun.com/home) console.
    
2.  In the left navigation pane, choose **Billing Account** > **Resource Packages**.
    
3.  On the **Resource Plan** page, click the **Details** tab under **Resource Packages**.
    
4.  Select the **Start Time of Deducted Instance**, enter information such as the **Resource Plan ID** and **Deducted Instance ID**, and click **Search** to find the information you need.
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/4690846371/p894162.png)The following table describes the parameters.
    

**Parameter**

**Description**

Resource Purchase Account

The account that purchased the Resource Plan.

Product Name

The name of the Alibaba Cloud product to which the Resource Plan belongs.

Commodity Name

The name of the Resource Plan, such as Reserved Instance or Storage Capacity Unit.

Resource Plan Type

The category of the Resource Plan, such as Compute Plan or or Reserved Capacity.

Resource Plan ID

The ID of the Resource Plan instance.

Commitment Cycle

The capacity refresh cycle of the Resource Plan. Types include: No Period, Hourly, Daily, and Monthly (Free Trial, By Calendar Month, By Dynamic Month).

-   **No Period**: Deductions are made based on actual consumption until the balance is zero or the plan expires.
    
-   **Hourly**: A fixed quota is provided every hour. Unused quota does not carry over to the next hour.
    
-   **Daily**: A fixed quota is provided every day. Unused quota does not carry over to the next day.
    
-   **Monthly**
    
    -   **Free Trial**
        
    -   **By Calendar Month**
        
    -   **By Dynamic Month**: A fixed quota is provided every month. The specifics of how the quota refreshes depend on the monthly subtype. Unused quota does not carry over.
        

Deduct Time

The time when the Resource Plan offset the usage of a pay-as-you-go cloud resource.

Before Deduct Capacity

The balance of the Resource Plan immediately before this deduction.

Deducted Capacity

The amount of pay-as-you-go usage deducted by the plan.

Post Deduct Capacity

The remaining balance of the Resource Plan after this deduction.

Deducted Resource Owner Account

The account that owns the cloud resource whose usage was deducted by the Resource Plan.

Deducted Commodity

The pay-as-you-go commodity whose usage was offset by the Resource Plan.

Deducted Instance ID

The instance ID of the cloud resource whose usage was deducted.

Deducted Billable Item

The billable item whose usage was deducted, such as an instance or a system disk.

Original Usage of Instance

The actual usage of the deducted cloud resource. Because of the offset factor, this value may not equal the Deducted Capacity.

Deduct Coefficient

The coefficient used when a Resource Plan deducts the usage of a cloud resource. For example, if 0.13 GiB of SCU capacity can offset 1 GiB of PDS storage, the coefficient is 0.13.

Start Time of Deducted Instance

The start time of the billing cycle for the deducted cloud resource instance.

End Time of Deducted Instance

The end time of the billing cycle for the deducted cloud resource instance.

Resource Plan Owner Account

The account that owns the Resource Plan instance.

## View resource plan utilization

### **What is resource plan utilization?**

Utilization is the percentage of a Resource Plan that has been consumed. It helps you assess if a Resource Plan is being wasted. A higher utilization rate indicates more effective use of the Resource Plan. Utilization = Used Amount / Total Amount.

**Note**

Currently, the utilization overview is supported only for Reserved Instances and Storage Capacity Units.

Summary values and formulas:

1.  **Total on-demand instance cost**: The sum of the Equivalent On-demand Cost within the statistical period.
    
2.  **Total resource purchase cost**: The sum of the costs for purchasing Resource Plans within the statistical period.
    
3.  **Total savings**: The sum of the savings within the statistical period.
    
4.  **Total potential savings**: The sum of the potential savings within the statistical period.
    

### **Procedure**

1.  Log on to the [Expenses and Costs](https://billing-cost-intl.aliyun.com/home) console.
    
2.  In the left navigation pane, choose **Account > Resource Packages**.
    
3.  Under **Resource Type**, select **RI** or **SCU**, then click the **Usage** tab.
    
4.  In the filter list on the right, select a **Budget Name** to query by budget, select a **Time Granularity** and **Range** for the time dimension, and apply filters such as **Service**, **RI Type**, and **Operating System** to search. You can then view the utilization overview and details.
    

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/4690846371/p894166.png)

The following table describes the parameters.

**Parameter**

**Description**

Account

The account that owns the Resource Plan instance, also known as the resource purchase account.

Resource ID

The ID of the Resource Plan instance.

Start/End Time

The start and end time of the deduction.

Status

The status of the Resource Plan. Valid values: Active, Exhausted, or Expired.

Region

The product region that the Resource Plan can offset.

Zone

The product zone that the Resource Plan can offset.

Instance Type

The type of instance that the Resource Plan can offset, such as `ecs.g6.large`.

Pay-as-you-go Instances Reserved

The number of resources in the current Resource Plan.

Operating System

The product operating system that the Resource Plan can offset. Currently, only Reserved Instances have an operating system.

Usage

The ratio of the Deduction Amount to the Total Resource Amount within the statistical period.

Deducted Quantity

The amount of pay-as-you-go cloud resource usage deducted by the Resource Plan during the statistical period.

Total Quantity

The total capacity that the Resource Plan provides during the statistical period. For example, an RI might provide 640 compute units per hour.

Resource Price

The total cost of purchasing the Resource Plan during the statistical period.

Equivalent Pay-as-you-go Price

The pay-as-you-go cost that would have been incurred for the usage that was offset by the Resource Plan.

Net Savings

The total savings achieved during the statistical period. Net Savings = Equivalent On-demand Cost - Resource Purchase Cost.

Potential Net Savings

The amount of savings that would be achieved at 100% utilization.

## View resource plan coverage

Coverage shows how much of your pay-as-you-go instance usage your Resource Plans cover. It helps you evaluate whether you have purchased enough Resource Plans. A higher coverage rate indicates that your Resource Plans are effectively reducing your costs.

**Note**

Currently, the coverage overview is supported only for Reserved Instances and Storage Capacity Units.

1.  Log on to the [Expenses and Costs](https://billing-cost-intl.aliyun.com/home) console.
    
2.  In the left navigation pane, choose **Account > Resource Packages**.
    
3.  Under **Resource Type**, select **RI** or **SCU** and click the **Coverage** tab.
    
4.  In the criteria list on the right, select a **Time Granularity** and **Range** for the time dimension, and apply filters such as **Product Detail**, **Owner Account Name**, and **Operating System** to search. You can then view the coverage overview and details.![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/4690846371/p894170.png)
    

The following table describes the parameters.

**Parameter**

**Description**

Account Name

The account to which the pay-as-you-go cloud resource instance belongs.

Owner Account Name

The account that owns the pay-as-you-go instance.

Product Name

The product name of the pay-as-you-go instance.

Article Name

The commodity to which the pay-as-you-go cloud resource instance belongs.

Pay-as-you-go Instance ID

The ID of the pay-as-you-go cloud resource instance.

Start/End Time

The time range for which the coverage is calculated.

Region

The region of the pay-as-you-go cloud resource instance.

Instance Type

The type of the pay-as-you-go cloud resource instance.

Coverage

The ratio of the Deduction Amount to the Total Usage.

Deducted Quantity

The total usage of the pay-as-you-go cloud resource instance deducted during the statistical period; for example, 100 GB.

Total Quantity

The total usage of the pay-as-you-go cloud resource instance during the statistical period; for example, 120 GB.

Require Amount

The billable amount for the pay-as-you-go instance after deductions are applied.
