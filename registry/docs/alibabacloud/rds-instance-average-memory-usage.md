An RDS instance is considered non-compliant if its average memory utilization is greater than or equal to a specified value for at least 8 hours within the detection period. By default, the detection period is the last 7 days. This rule does not apply if an RDS instance is not connected to Cloud Monitor, has no monitoring data, is a Cluster Edition or Serverless instance, or uses a database type other than MySQL. This check uses the Cloud Monitor API and consumes the free quota of the basic Cloud Monitor service. To ensure the quality of the check, enable Hybrid Cloud Monitoring. For more information about billing for Hybrid Cloud Monitoring, see the Cloud Monitor billing overview.

## **Risk level**

Default risk level: Medium.

You can change the risk level as needed.

## **Detection logic**

-   An RDS instance is considered non-compliant if its average memory utilization is greater than or equal to a specified value for at least 8 hours within the detection period. By default, the detection period is the last 7 days. This rule does not apply if an RDS instance is not connected to Cloud Monitor, has no monitoring data, is a Cluster Edition or Serverless instance, or uses a database type other than MySQL. This check uses the Cloud Monitor API and consumes the free quota of the basic Cloud Monitor service. To ensure the quality of the check, enable Hybrid Cloud Monitoring. For more information about billing for Hybrid Cloud Monitoring, see the Cloud Monitor billing overview.
    

## **Rule details**

**Parameter**

**Description**

Rule name

RDS instance average memory utilization check

Rule identifier

[rds-memory-average-utilization-check](https://confignew.console.alibabacloud.com/rules/create?step=setBasicProperties&managedRuleIdentifier=rds-memory-average-utilization-check)

Tag

RDS

Automatic remediation

Not supported

Rule trigger

Periodic

Trigger frequency

24 hours

Supported resource types

ACS::RDS::DBInstance

Input parameters

relativeTime (Default: 168)  
utilization (Default: 80)
