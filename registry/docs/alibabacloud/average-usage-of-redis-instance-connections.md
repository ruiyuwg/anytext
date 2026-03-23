A Redis instance is considered non-compliant if its average connection usage is at or above a specified value for at least 8 hours within a time range. The default time range is the last 7 days. This rule does not apply if a Redis instance is not connected to Cloud Monitor, has no monitoring data, or is a cluster instance. The check uses the Cloud Monitor API to retrieve monitoring data. This consumes the free quota of basic Cloud Monitor. To ensure detection quality, enable Hybrid Cloud Monitoring. For more information about billing for Hybrid Cloud Monitoring, see the Cloud Monitor billing documentation.

## **Threat level**

Default threat level: Medium.

You can change the risk level as needed.

## **Detection logic**

-   A Redis instance is considered non-compliant if its average connection usage is at or above a specified value for at least 8 hours within a time range. The default time range is the last 7 days. This rule does not apply if a Redis instance is not connected to Cloud Monitor, has no monitoring data, or is a cluster instance. The check uses the Cloud Monitor API to retrieve monitoring data. This consumes the free quota of basic Cloud Monitor. To ensure detection quality, enable Hybrid Cloud Monitoring. For more information about billing for Hybrid Cloud Monitoring, see the Cloud Monitor billing documentation.
    

## **Rule details**

**Parameter**

**Description**

Rule name

Check for the average connection usage of a Redis instance

Rule identifier

[redis-connection-average-utilization-check](https://confignew.console.alibabacloud.com/rules/create?step=setBasicProperties&managedRuleIdentifier=redis-connection-average-utilization-check)

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
utilization (Default: 50)

## **Remediation**

To remediate non-compliant resources that are flagged by this rule, see [Instance type guide and FAQ](/help/en/redis/product-overview/overview-4/).
