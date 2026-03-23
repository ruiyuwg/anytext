A Redis instance is considered non-compliant if its average memory utilization is greater than or equal to a specified value for at least 8 hours within a time range. The default detection time range is the last 7 days. This rule does not apply to Redis instances that are not connected to Cloud Monitor, have no monitoring data, or are cluster instances. The check uses the monitoring data API of Cloud Monitor and consumes the free quota of the basic Cloud Monitor service. To ensure detection quality, enable Hybrid Cloud Monitoring. For information about the billing of Hybrid Cloud Monitoring, see Cloud Monitor billing.

## **Threat level**

Default threat level: Medium.

You can change the risk level as needed.

## **Detection logic**

-   A Redis instance is considered non-compliant if its average memory utilization is greater than or equal to a specified value for at least 8 hours within a time range. The default detection time range is the last 7 days. This rule does not apply to Redis instances that are not connected to Cloud Monitor, have no monitoring data, or are cluster instances. The check uses the monitoring data API of Cloud Monitor and consumes the free quota of the basic Cloud Monitor service. To ensure detection quality, enable Hybrid Cloud Monitoring. For information about the billing of Hybrid Cloud Monitoring, see Cloud Monitor billing.
    

## **Rule details**

**Parameter**

**Description**

Rule name

Check the average memory utilization of a Redis instance

Rule identifier

[redis-memory-average-utilization-check](https://confignew.console.alibabacloud.com/rules/create?step=setBasicProperties&managedRuleIdentifier=redis-memory-average-utilization-check)

Tag

Redis

Automatic remediation

Not supported

Rule trigger

Periodic

Trigger frequency

24 hours

Supported resource types

ACS::Redis::DBInstance

Input parameters

relativeTime (Default: 168)  
utilization (Default: 80)
