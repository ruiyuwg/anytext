The MaxCompute automatic scaling feature provides on-demand scaling and a pay-as-you-go billing method for compute units (CUs). The system detects changes in your business load in real time and automatically adjusts the number of CUs to match your job load. You pay only for the CUs that are automatically scaled. This approach ensures job performance while optimizing costs. This topic describes how to configure and use the MaxCompute automatic scaling feature.

## **Feature overview**

In addition to the subscription model, MaxCompute also supports an elastic reserved model that is billed by the hour. This model lets you create custom time plans and scale resources based on configured rules. To further optimize costs and flexibly match resources to business loads, MaxCompute also provides an **automatic scaling** model. The main differences between these three resource configuration models are as follows:

**Resource type**

**Usage**

**Billing method**

**Scenarios**

[Subscription Reservation](/help/en/maxcompute/product-overview/subscription)

You can specify a fixed number of compute CUs and purchase them on a monthly or yearly basis for long-term use.

You pay for the number of resources that you purchase.

-   Fixed compute resource requirements
    
-   No fluctuations in resource demand
    

[Elastic reserved](/help/en/maxcompute/product-overview/elastically-reserved-cus)

In addition to subscription resources, you can scale resources based on custom CU usage and time-based rules.

-   **Scaling actions** are triggered at scheduled times based on your rules.
    
-   The **number of CUs to scale** is determined by the elastic reserved CU value you set.
    

You set elastic reserved CUs for custom rules. Billing is based on the **purchased amount and duration**. Usage is accumulated and billed hourly.

-   Compute resource demand fluctuates periodically with predictable peaks and troughs.
    
-   You require fine-grained resource configuration and O&M capabilities.
    

Automatic scaling

In addition to subscription resources, the system automatically detects job load fluctuations and scales resources to provide the compute CUs required to match the job load.

You pay for the automatically scaled CUs that you use. Billing is based on the **usage amount and duration**. Usage is accumulated and billed hourly.

-   Compute resource demand fluctuates frequently, and peaks and troughs are difficult to predict.
    
-   You want to ensure job performance while optimizing costs.
    

## **Usage notes**

-   You must purchase [subscription compute resources](https://common-buy-intl.alibabacloud.com/?commodityCode=odpsplus) before you can configure and use the automatic scaling feature.
    
-   The automatic scaling feature is supported only for quotas of the **batch processing** type and is not supported for quotas of the interactive type.
    
-   When you enable automatic scaling, you must set a maximum CU value that meets your business needs to control costs. The system automatically scales resources within this limit and bills you for the actual number of automatically scaled CUs used.
    

**Important**

The automatic scaling capability of MaxCompute is subject to the availability of real-time resources.

The system makes a best effort to meet the maximum limit that you set for automatic scaling but cannot guarantee that the limit can always be reached. If your business requires guaranteed resources, configure elastic reserved CUs at the same time. These resources are reserved for you according to the time plan that you set. For burst demands that far exceed historical levels, such as during holiday sales promotions, contact us in advance to ensure a sufficient resource supply.

## **Billing method**

The automatic scaling feature uses a **pay-as-you-go** billing method. You pay only for the compute resources you use, with no upfront payment required.

**Note**

Bills may be delayed. The final bill reflects the actual charges.

-   **Billing unit**: The billing unit for compute resource usage is CU-hour.
    
-   **Metering method**: Billing is based on the number of automatically scaled CUs used while automatic scaling is active. The system monitors the actual usage of automatically scaled CUs at a second-level granularity. At the level-1 quota dimension, usage is aggregated and billed on an **hourly** basis.
    
    For example, if you use 10 CUs per second for the first 30 minutes (1,800 seconds) of an hour and 20 CUs per second for the next 30 minutes (1,800 seconds), the total usage for that hour is: `(10 CUs × 1,800 seconds + 20 CUs × 1,800 seconds) / 3,600 seconds/hour = 15 CU-hours`.
    
-   **Billing formula**: `Hourly fee = Automatically scaled CU usage in that hour (Unit: CU-hour) × Price per automatically scaled CU`.
    
-   **Price per automatically scaled CU**: USD 0.0558 /CU-hour.
    
-   **View usage**: If you enable automatic scaling, you can view the corresponding usage details in [Billing Details](https://usercenter2-intl.console.alibabacloud.com/finance/expense-report/expense-detail-by-instance?BillingCycle=2025-10&StatisticItem=DEFAULT_CHARGE_ITEM&StatisticCycle=MONTHLY).
    

## **Concepts**

### **Maximum automatically scaled CUs (AutoscaleLimitCU)**

The upper limit of elastic CU resources that you set for a quota. If this value is greater than 0, the automatic scaling feature is enabled. The system can automatically scale resources based on the actual load, up to this limit.

### **Used automatically scaled CUs (AutoscaleUsedCU)**

The number of automatically scaled CU resources actually consumed by a quota after automatic scaling is enabled. The system automatically adjusts CU usage based on the job load, and you are billed for this actual usage.

## **Procedure**

### **Configuration flow**

1.  Log on to the [MaxCompute console](https://maxcompute.console.alibabacloud.com/), and select a region in the upper-left corner.
    
2.  In the navigation pane on the left, choose **Manage Configurations** > **Quotas**.
    
3.  On the **Quotas** page, find the target quota and click **Quota Configuration** in the **Actions** column.
    
4.  On the **Quota Configuration** page, click the **Basic Configurations** tab, and then click **Edit Basic Configurations**.
    
5.  Click **Add Level-2 Quota** or configure **AutoScale CUs** for an existing level-2 quota.
    
    The configuration details are as follows:
    
    > The automatic scaling feature is currently available only in the Indonesia (Jakarta) region. Therefore, you can configure the maximum automatically scaled CU parameter for level-1 and level-2 quotas only in the console for this region. For regions where this feature is not yet available, the Maximum Automatically Scaled CUs parameter defaults to 0 and cannot be changed.
    
    1.  Level-1 quota:
        
        -   By default, automatic scaling is disabled. The default value for Maximum Automatically Scaled CUs (AutoscaleLimitCU) is 0.
            
        -   You can set the maximum number of automatically scaled CUs in increments of 10. The maximum value is the reserved CU value of the level-1 quota.
            
        -   After you enable automatic scaling, the quota always occupies the reserved `CU + Elastic Reserved CU` resources while the configuration is active. It also uses additional automatically scaled CU resources. The number of automatically scaled CUs used ranges from (0, AutoscaleLimitCU\] to meet job load demands.
            
    2.  Level-2 quota:
        
        -   If automatic scaling is enabled for a level-1 quota, it is enabled by default for all its level-2 quotas.
            
        -   You can set the maximum number of automatically scaled CUs for each level-2 quota individually. The value can range from 0 to the AutoscaleLimitCU of the level-1 quota.
            
        -   All level-2 quotas share the automatically scaled resources, which the system allocates based on the load of each level-2 quota. The total number of automatically scaled CUs used by all level-2 quotas under a level-1 quota is equal to the number of automatically scaled CUs used by the level-1 quota. This total does not exceed the maximum number of automatically scaled CUs set for the level-1 quota.
            
    
    For more information about other quota parameters, see [Quota management](/help/en/maxcompute/user-guide/manage-quotas-in-the-maxcompute-console#94abc1e903p6j).
    
6.  The automatic scaling feature can be used with time plans. On the **Quota Scaling Configuration** page, you can set multiple resource configuration plans and schedule them using **Time-based Management**.
    

### Resource monitoring

After you enable automatic scaling, you can use resource monitoring to view the usage of automatically scaled CUs for each quota.

1.  Log on to the [MaxCompute console](https://maxcompute.console.alibabacloud.com/), and select a region in the upper-left corner.
    
2.  In the navigation pane on the left, choose **Observation O&M** > **Resource Observation**.
    
3.  On the **Resource Observation** page, click the **Computing Resources** tab.
    
4.  From the **Select Quota** drop-down list, select the quota that you want to view.
    
    You can view the maximum and used automatically scaled CUs at a second-level granularity for each level-1 and level-2 quota.
