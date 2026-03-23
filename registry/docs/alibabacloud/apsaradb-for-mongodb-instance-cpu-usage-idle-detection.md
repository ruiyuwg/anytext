A MongoDB instance is considered compliant if its maximum CPU utilization over a specified period is greater than or equal to a set value. This rule is considered not applicable if a MongoDB instance is not monitored by CloudMonitor, has no monitoring data, or is not a multi-node cluster deployment. The default check period is the last 7 days. This check uses the CloudMonitor API to retrieve monitoring data and consumes your basic CloudMonitor free quota. To ensure the quality of the check, you can enable Hybrid Cloud Monitoring. For more information about Hybrid Cloud Monitoring billing, see the CloudMonitor billing details.

## **Risk level**

Default risk level: Low.

You can change the risk level as needed.

## **Detection logic**

-   A MongoDB instance is considered compliant if its maximum CPU utilization over a specified period is greater than or equal to a set value.
    
-   This rule is considered not applicable if the instance is not monitored by CloudMonitor, has no monitoring data, or is not a multi-node cluster deployment.
    

The default check period is the last 7 days. This check uses the CloudMonitor API to retrieve monitoring data and consumes your basic CloudMonitor free quota. To ensure the quality of the check, you can enable Hybrid Cloud Monitoring. For more information about Hybrid Cloud Monitoring billing, see the CloudMonitor billing details.

## **Rule details**

**Parameter**

**Description**

Rule name

Idle check for MongoDB instance CPU utilization

Rule identifier

[mongodb-cpu-max-utilization-check](https://confignew.console.alibabacloud.com/rules/create?step=setBasicProperties&managedRuleIdentifier=mongodb-cpu-max-utilization-check)

Tag

\[MongoDB\]

Automatic remediation

Not supported

Rule trigger

24-hour period

Supported resource types

\[ACS::MongoDB::DBInstance\]

Input parameters

relativeTime(Default value: 168)  
utilization(Default value: 10)  

## **Remediation guide**

For remediation steps, see [Instance type](/help/en/mongodb/product-overview/instance-types/).
