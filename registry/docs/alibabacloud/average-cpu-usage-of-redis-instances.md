A Redis instance is considered non-compliant if its average CPU utilization is greater than or equal to a specified value for at least 8 hours within a specific period. The default detection period is the last 7 days. This rule does not apply if an instance is not connected to CloudMonitor, has no monitoring data, or is a cluster instance. The check uses the CloudMonitor monitoring data API and consumes the free quota of Basic CloudMonitor. To ensure the quality of the check, you can enable Hybrid Cloud Monitoring. For more information about the billing of Hybrid Cloud Monitoring, see CloudMonitor billing information.

## **Risk level**

Default risk level: Medium.

You can change the risk level as needed.

## **Detection logic**

-   A Redis instance is considered non-compliant if its average CPU utilization is greater than or equal to a specified value for at least 8 hours within a specific period. The default detection period is the last 7 days. This rule does not apply if an instance is not connected to CloudMonitor, has no monitoring data, or is a cluster instance. The check uses the CloudMonitor monitoring data API and consumes the free quota of Basic CloudMonitor. To ensure the quality of the check, you can enable Hybrid Cloud Monitoring. For more information about the billing of Hybrid Cloud Monitoring, see CloudMonitor billing information.
    

## **Rule details**

**Parameter**

**Description**

Rule name

Check for average CPU utilization of a Redis instance

Rule identifier

[redis-cpu-average-utilization-check](https://confignew.console.alibabacloud.com/rules/create?step=setBasicProperties&managedRuleIdentifier=redis-cpu-average-utilization-check)

Tag

Redis

Automatic remediation

Not supported

Rule trigger mechanism

Periodic execution

Trigger frequency

24 hours

Supported resource types

ACS::Redis::DBInstance

Input parameters

relativeTime (Default: 168)  
utilization (Default: 80)
