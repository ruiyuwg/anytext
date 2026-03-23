A MongoDB instance is considered compliant if its maximum memory utilization is greater than or equal to a specified value within a specified time range. This rule does not apply to a MongoDB instance if it is not monitored by CloudMonitor, has no monitoring data, or is not a multi-node cluster instance. The default check period is the last 7 days. The check uses the CloudMonitor API to retrieve monitoring data and consumes the free quota of the basic CloudMonitor service. To ensure the quality of the check, enable Hybrid Cloud Monitoring. For more information about billing for Hybrid Cloud Monitoring, see the CloudMonitor billing documentation.

## **Risk level**

Default risk level: Low.

You can change the risk level as needed.

## **Detection logic**

-   A MongoDB instance is considered compliant if its maximum memory utilization is greater than or equal to a specified value within a specified time range.
    
-   This rule does not apply to a MongoDB instance if it is not monitored by CloudMonitor, has no monitoring data, or is not a multi-node cluster instance.
    

The default check period is the last 7 days. The check uses the CloudMonitor API to retrieve monitoring data and consumes the free quota of the basic CloudMonitor service. To ensure the quality of the check, enable Hybrid Cloud Monitoring. For more information about billing for Hybrid Cloud Monitoring, see the CloudMonitor billing documentation.

## **Rule details**

**Parameter**

**Description**

Rule name

MongoDB instance idle memory usage check

Rule identifier

[mongodb-memory-max-utilization-check](https://confignew.console.alibabacloud.com/rules/create?step=setBasicProperties&managedRuleIdentifier=mongodb-memory-max-utilization-check)

Tag

\[MongoDB\]

Automatic remediation

Not supported

Rule trigger

Every 24 hours

Supported resource types

\[ACS::MongoDB::DBInstance\]

Input parameters

relativeTime(Default: 168)  
utilization(Default: 10)  

## **Remediation guidance**

For more information, see [Instance types](/help/en/mongodb/product-overview/instance-types/).
