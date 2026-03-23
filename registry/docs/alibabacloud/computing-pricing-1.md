This topic describes the billing rules for the pay-as-you-go compute resources of MaxCompute.

## Background information

MaxCompute pay-as-you-go plans allow you to scale compute resources on top of your existing subscription. Billing is based on the number of compute units (CUs) and the usage duration. The system calculates the total usage in CU-hours for each level-1 quota on an hourly basis. Note that bill generation may be delayed. Your final bill reflects the actual charges.

MaxCompute provides two types of pay-as-you-go compute resources: elastically reserved CUs and auto-scaling CUs. The following table describes the differences between them.

**Specifications**

**Scaling method**

**Billing method**

[Elastically reserved CUs](/help/en/maxcompute/product-overview/elastically-reserved-cus)

-   Scheduled scaling
    
-   Elastically reserved CUs are scaled on a schedule based on quota rules and time plans. The system automatically scales out a specified number of CUs during a set period to meet peak demand. It automatically scales them in when the period ends. For more information about quota configuration, see [Manage compute resources - Quotas](/help/en/maxcompute/user-guide/manage-quotas-in-the-maxcompute-console#task-2242047).
    
-   Note: Scale in resources promptly when they are no longer needed. You are charged for elastically reserved CUs as long as they are scaled out, regardless of whether they are used.
    

-   Pay-as-you-go
    
-   No upfront payment is required for elastic reserved CU resources. Fees are calculated based on the formula: `User-specified amount of elastic reserved CUs × Actual usage duration`. Billing starts when a scale-out operation is successfully completed at a specified time, and the CUs are allocated to your subscription quota as dedicated resources. Billing stops when a scale-in operation is successfully completed.
    
-   The system pushes metering data on the hour and whenever the number of CUs changes. It aggregates the total usage of elastically reserved CUs in CU-hours for each level-1 quota every hour to generate bills.
    

[Auto-scaling CUs](/help/en/maxcompute/product-overview/automatic-elastic-cu)

-   Automatic scaling
    
-   After you enable automatic scaling in a quota rule, the system automatically detects changes in workload and scales resources within the upper limit you specify. You only need to set the maximum number of auto-scaling CUs to control costs. You do not need to manually scale out or release resources. For more information about quota configuration, see [Manage compute resources - Quotas](/help/en/maxcompute/user-guide/manage-quotas-in-the-maxcompute-console#task-2242047).
    
-   You are charged only for the resources you actually use.
    

-   Pay-as-you-go
    
-   No prepayment is required for auto-scaling CU resources. The system monitors actual auto-scaling CU usage at a per-second granularity, and charges are calculated based on `auto-scaling CU usage × actual usage duration` during the auto-scaling period.
    
-   The system aggregates the total usage in CU-hours for each level-1 quota on an hourly basis to generate bills.
    

**Note**

If you need more than 10,000 CUs, contact technical support for an assessment. For more information, see [Get online support](/help/en/hologres/support/obtain-online-support-for-hologres#concept-2379947).

## Compute resource pricing

The following table lists the pay-as-you-go prices for elastically reserved CUs and auto-scaling CUs.

**Type**

**Public Cloud Price**

**Finance Cloud pricing**

**Notes**

Elastically reserved computing resources

0.0488USD/CU/hour

CNY 0.5985 per CU per hour

If you use the resources for more than 16 hours a day, consider purchasing subscription CUs for better cost-efficiency.

Automatic elastic computing resources

0.0558 USD/CU/hour

CNY 0.684 per CU per hour

[Best practices for auto-scaling](/help/en/maxcompute/use-cases/auto-elastic-usage-best-practices)
