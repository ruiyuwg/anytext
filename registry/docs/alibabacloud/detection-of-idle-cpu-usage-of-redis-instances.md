A Redis instance is considered compliant if its maximum CPU utilization over a specified period is greater than or equal to a specified value. An instance is not applicable if it is not monitored by CloudMonitor, has no monitoring data, or is not a memory-optimized instance with a read/write splitting architecture. The default detection period is the last 7 days. This check uses the CloudMonitor data API and consumes your CloudMonitor free quota. Enable Hybrid Cloud Monitoring to ensure detection quality. For more information about Hybrid Cloud Monitoring billing, see CloudMonitor billing.

## **Risk level**

Default risk level: Low.

You can change the risk level as needed.

## **Detection logic**

-   A Redis instance is compliant if its maximum CPU utilization over a specified period is greater than or equal to a specified value.
    
-   An instance is not applicable if it is not monitored by CloudMonitor, has no monitoring data, or is not a memory-optimized instance with a read/write splitting architecture.
    

The default detection period is the last 7 days. This check uses the CloudMonitor data API and consumes your CloudMonitor free quota. Enable Hybrid Cloud Monitoring to ensure detection quality. For more information about Hybrid Cloud Monitoring billing, see CloudMonitor billing.

## **Rule details**

**Parameter**

**Description**

Rule name

Redis instance idle CPU utilization check

Rule identifier

[redis-cpu-max-utilization-check](https://confignew.console.alibabacloud.com/rules/create?step=setBasicProperties&managedRuleIdentifier=redis-cpu-max-utilization-check)

Tag

\[Redis\]

Automatic remediation

Not supported

Rule trigger

Every 24 hours

Supported resource types

\[ACS::Redis::DBInstance\]

Input parameters

relativeTime(Default value: 168)  
utilization(Default value: 10)  

## **Remediation**

For remediation steps, see [Instance Types and FAQ](/help/en/redis/product-overview/overview-4/).
