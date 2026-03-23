A Redis instance is considered compliant if its maximum memory utilization over a specified period is greater than or equal to a specified value. An instance is considered not applicable if it is not monitored by Cloud Monitor, has no monitoring data, or is not a memory-optimized instance type with a read/write splitting architecture. The default detection period is the last 7 days. This check relies on the Cloud Monitor data API and uses the free quota of basic Cloud Monitor. To ensure detection quality, you can enable Hybrid Cloud Monitoring. For more information about the billing of Hybrid Cloud Monitoring, see Cloud Monitor billing details.

## **Risk level**

Default risk level: Low.

You can change the risk level as needed.

## **Detection logic**

-   A Redis instance is considered compliant if its maximum memory utilization over a specified period is greater than or equal to a specified value.
    
-   An instance is considered not applicable if it is not monitored by Cloud Monitor, has no monitoring data, or is not a memory-optimized instance type with a read/write splitting architecture.
    

The default detection period is the last 7 days. This check relies on the Cloud Monitor data API and uses the free quota of basic Cloud Monitor. To ensure detection quality, you can enable Hybrid Cloud Monitoring. For more information about the billing of Hybrid Cloud Monitoring, see Cloud Monitor billing details.

## **Rule details**

**Parameter**

**Description**

Rule name

Idle check for Redis instance memory usage

Rule identifier

[redis-memory-max-utilization-check](https://confignew.console.alibabacloud.com/rules/create?step=setBasicProperties&managedRuleIdentifier=redis-memory-max-utilization-check)

Tag

\[redis\]

Automatic remediation

Not supported

Rule trigger

Every 24 hours

Supported resource types

\[ACS::Redis::DBInstance\]

Input parameters

relativeTime(Default: 168)  
utilization(Default: 10)  

## **Remediation guide**

For more information, see [Instance type navigation and FAQ](/help/en/redis/product-overview/overview-4/).
