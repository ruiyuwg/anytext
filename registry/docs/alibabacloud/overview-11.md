You can purchase resource plans to offset the fees of billable items that are included in your bill. This topic describes the basic information about a resource plan.

## Resource plan

Simple Log Service provides the following resource plan.

**Resource plan**

**Description**

Resource plan

You can use a resource plan to offset the fees of all billable items.

**Note**

A resource plan provides the same quota for resource usage each month during the validity period. The quota in a resource plan is cleared at the end of each month and is reset at the start of the next month.

## Resource plan

You can use a resource plan to offset the fees of all billable items. Resource plans that have a higher quota and a longer validity period can be more cost-effective. Simple Log Service measures your resource usage on a daily basis. If your resource usage does not exceed the monthly quota of your resource plan, Simple Log Service offsets the fees from your resource plan. A resource plan provides the same quota for resource usage each month during the validity period. If your resource usage exceeds the monthly quota of your resource plan, you are charged for the excess resource usage based on the pay-as-you-go billing method.

**Important**

-   You can use a resource plan to offset the fees of billable items regardless of whether your logstore uses the pay-by-feature or pay-by-ingested data billing mode.
    
-   Simple Log Service provides yearly subscription options for resource plans. Resource plans for one year or longer provide savings based on the resource quota and duration. For more information about the prices of different resource plans, visit the buy page of Simple Log Service. The prices of billable items that use the pay-as-you-go billing method remain unchanged. The savings are realized only when you purchase resource plans for one year or longer.
    
-   You must pay the fees of your resource plan when you purchase the resource plan. For example, if you purchase a 1-year and 100-CU/month resource plan, you must pay the fees on the day you purchase the resource plan.
    

Resource plans are measured in cost units (CUs).

-   Resource plans support the **pay-by-feature** and **pay-by-ingested-data** billing modes.
    
-   The fee of each billable item is offset from a resource plan by using CUs. The number of CUs that are used to offset the fee of a billable item is consistent with the unit price of the billable item in the pay-as-you-go billing method. For example, the unit price of read and write traffic on Simple Log Service is USD 0.045 per GB based on the pay-as-you-go billing method. In a resource plan, 0.045 CUs are used to offset the fee of 1 GB of read and write traffic. The following tables describe the billing details of a resource plan.
    

## Pay-by-feature

**Billable item**

**Resource plan**

Read and write traffic (per GB)

0.045 CU

Storage usage of the hot storage tier (per GB-day)

0.002875 CU

Storage usage of time series data (per GB-day)

0.00048 CU

Index traffic of log data (per GB)

0.0875 CU

Index traffic of time series data (per GB)

0.02721 CU

Data transformation (per GB)

0.0204 CU

Data shipping to Object Storage Service (OSS) in the JSON or CSV format (per GB)

0.0068 CU

Data shipping to OSS in the Parquet or ORC format (per GB)

0.0272 CU

Data shipping to MaxCompute (per GB)

0.0272 CU

Data shipping to AnalyticDB for MySQL (per GB)

0.0272 CU

Data shipping to Lindorm (per GB)

0.0272 CU

Alert notification calls (per call)

0.02041 CU

Alert notification messages (per text message)

0.0068 CU

Dedicated SQL (per core hour)

0.05174 CU

Storage usage of the Infrequent Access (IA) storage tier (per GB-day)

0.000762 CU

Storage usage of the Archive storage tier (per GB-day)

0.000259 CU

Index traffic of log data stored in Query logstores (per GB)

0.0146 CU

Scan traffic (per GB)

0.00762 CU

Number of read and write requests (per million requests)

0.03 CU

Active shards (per shard day)

0.01 CU

Read traffic over the Internet (per GB)

0.2 CU

## **Pay-by-ingested-data**

**Billable item**

**Resource plan**

Ingested raw data volume (per GB)

0.061 CU

Storage usage of the hot storage tier (per GB-day)

0.002875 CU

Storage usage of the IA storage tier (per GB-day)

0.000762 CU

Storage usage of the Archive storage tier (per GB-day)

0.00026 CU

Read traffic over the Internet (per GB)

0.2 CU

## FAQ

### Purchase resource plans

-   [How do I select a quota for a resource plan?](/help/en/sls/how-do-i-select-a-quota-for-a-resource-plan#concept-2066150)
    
-   [Why do my fees for Simple Log Service significantly increase in the month when I purchase a resource plan?](/help/en/sls/why-do-fees-significantly-increase-in-the-month-when-i-purchase-a-resource-plan#concept-2286934)
    
-   [When does a resource plan take effect after I purchase it?](/help/en/sls/when-does-a-resource-plan-take-effect-after-i-purchase-it#concept-2286945)
    
-   [Why do I have overdue payments even if I purchase a resource plan?](/help/en/sls/why-do-i-have-overdue-payments-even-if-i-purchase-a-resource-plan#concept-2035815)
    
-   [What do I do if the quota of a resource plan is insufficient?](/help/en/sls/what-do-i-do-if-the-quota-of-a-resource-plan-is-insufficient#concept-2286991)
    
-   [What do I do if the system does not provide the specifications that I require for a resource plan on the Simple Log Service Subscription page?](/help/en/sls/what-do-i-do-if-i-cannot-find-a-resource-plan-that-i-require#concept-2286981)
    

### Use resource plans

-   [How am I charged if the quota of a resource plan is exceeded?](/help/en/sls/how-am-i-charged-if-the-quota-of-a-resource-plan-is-exceeded#concept-2287081)
    
-   [Why is the quota of a one-year resource plan exhausted in one month?](/help/en/sls/why-the-quota-of-a-one-year-resource-plan-is-used-up-in-one-month#concept-2287101)
    

### View the details of resource plans

[How do I view the usage details of my resource plans?](/help/en/sls/how-do-i-view-the-usage-details-of-my-resource-plans#concept-2286948)
