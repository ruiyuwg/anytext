An RDS instance is considered compliant if its maximum memory usage within a specified period is greater than or equal to a specified value. This rule does not apply to RDS instances of Cluster Edition or Serverless Edition, or to instances that are not connected to Cloud Monitor or have no monitoring data. The default detection period is the last 7 days. The check uses the monitoring data API of Cloud Monitor and consumes the free quota of the basic Cloud Monitor service. To ensure detection quality, you can enable Hybrid Cloud Monitoring. For more information about billing for Hybrid Cloud Monitoring, see Cloud Monitor billing.

## **Risk level**

Default risk level: Low.

You can change the risk level as needed.

## **Detection logic**

-   An RDS instance is considered compliant if its maximum memory usage within a specified period is greater than or equal to a specified value. This rule does not apply to RDS instances of Cluster Edition or Serverless Edition, or to instances that are not connected to Cloud Monitor or have no monitoring data. The default detection period is the last 7 days. The check uses the monitoring data API of Cloud Monitor and consumes the free quota of the basic Cloud Monitor service. To ensure detection quality, you can enable Hybrid Cloud Monitoring. For more information about billing for Hybrid Cloud Monitoring, see Cloud Monitor billing.
    

## **Rule details**

**Parameter**

**Description**

Rule name

Check for idle RDS instances based on memory usage

Rule identifier

[rds-memory-max-utilization-check](https://confignew.console.alibabacloud.com/rules/create?step=setBasicProperties&managedRuleIdentifier=rds-memory-max-utilization-check)

Tag

RDS

Automatic remediation

Not supported

Trigger mechanism

Periodic

Trigger frequency

24 hours

Supported resource types

ACS::RDS::DBInstance

Input parameters

relativeTime (Default value: 168)  
utilization (Default value: 30)

## **Remediation**

For instructions on how to remediate non-compliant resources detected by the "Check for idle RDS instances based on memory usage" rule, see [cloud service monitoring](/help/en/cms/cloudmonitor-1-0/user-guide/cloud-service-monitoring).
