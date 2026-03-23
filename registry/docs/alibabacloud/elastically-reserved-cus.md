Elastically reserved compute units (CUs) let you dynamically reserve compute resources as needed. Evaluate your business needs and purchase elastically reserved CUs. Then, use new quota plans and time-based schedules to enable elastic scaling for your compute resources. This topic describes the billing rules and usage of elastically reserved CUs.

## Resource description

**Elastically reserved CUs**

-   **Description**
    
    Optional resource. The resource pool is of the Dedicated type. You must have subscription reserved compute resources before you can scale out resources as needed.
    
    The basic unit of a compute resource is a CU. 1 CU is equal to 4 GB of memory and 1 CPU core.
    
-   **Billing**
    
    On the **Quotas** page of the MaxCompute console, set the number of elastically reserved CUs for the target subscription quota. For more information about the billing rules, see [Compute fees (Pay-as-you-go)](/help/en/maxcompute/product-overview/computing-pricing-1#concept-2242142).
    

## Limits

-   Purchase [subscription reserved compute resources](https://common-buy-intl.alibabacloud.com/?commodityCode=odpsplus) before you configure elastically reserved CUs. For more information about the configuration, see [Manage compute resources using quotas](/help/en/maxcompute/user-guide/manage-quotas-in-the-maxcompute-console#task-2242047).
    
-   The maximum number of elastically reserved CUs that you can configure for a quota cannot exceed the number of subscription CUs purchased for the quota. The upper limit is 10,000 CUs.
    
-   Scaling is subject to inventory availability. The system verifies the inventory when you configure a scale-out. The number of CUs for a scale-out must be at least 50 and must be increased in increments of 50.
    

## Usage notes

-   For steps to activate subscription instances, see [Activate MaxCompute](/help/en/maxcompute/getting-started/activate-maxcompute-and-dataworks#task-dkr-hyw-5db).
    
-   After you activate the subscription instance, you can configure a quota on the **Quotas** page in the [MaxCompute console](https://maxcompute.console.alibabacloud.com/). For more information about configuring quotas, see [Computing Resources-Quota Management](/help/en/maxcompute/user-guide/manage-quotas-in-the-maxcompute-console#task-2242047).
    
    -   Configure the number of elastically reserved CUs in a quota plan as needed. Then, make the configuration immediately take effect to apply the quota plan.
        
    -   Configure multiple quota plans. The quota plans enable the system to automatically use different quota configurations based on the time plan. This way, elastically reserved CUs can be scaled out or scaled in during different periods of time.
        
-   After you configure elastically reserved CUs for a quota, you can use computing resources of the quota. For more information about how to use computing resources of a quota, see [Use of computing resources](/help/en/maxcompute/user-guide/use-of-computing-resources#task-2230539).
