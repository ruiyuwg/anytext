A MongoDB instance is considered compliant if its maximum disk usage is greater than or equal to a set value during a specific period. This rule does not apply if a MongoDB instance is not monitored by CloudMonitor, has no monitoring data, or is not a multi-node cluster instance. The default check period is the last 7 days. This check uses the CloudMonitor API and consumes the free quota of Basic CloudMonitor. To ensure detection quality, enable Hybrid Cloud Monitoring. For billing information about Hybrid Cloud Monitoring, see CloudMonitor billing details.

## **Risk level**

Default risk level: Low.

You can change the risk level as needed.

## **Detection logic**

-   A MongoDB instance is considered compliant if its maximum disk usage is greater than or equal to a set value during a specific period.
    
-   This rule does not apply if a MongoDB instance is not monitored by CloudMonitor, has no monitoring data, or is not a multi-node cluster instance.
    

The default check period is the last 7 days. This check uses the CloudMonitor API and consumes the free quota of Basic CloudMonitor. To ensure detection quality, enable Hybrid Cloud Monitoring. For billing information about Hybrid Cloud Monitoring, see CloudMonitor billing details.

## **Rule details**

**Parameter**

**Description**

Rule name

Idle check for MongoDB instance disk usage

Rule identifier

[mongodb-disk-max-utilization-check](https://confignew.console.alibabacloud.com/rules/create?step=setBasicProperties&managedRuleIdentifier=mongodb-disk-max-utilization-check)

Tag

\[MongoDB\]

Automatic remediation

Not supported

Rule trigger

Period: 24 hours

Supported resource types

\[ACS::MongoDB::DBInstance\]

Input parameters

relativeTime(default value: 168)  
utilization(default value: 10)  

## **Remediation guide**

For remediation steps, see [Instance types](/help/en/mongodb/product-overview/instance-types/).
