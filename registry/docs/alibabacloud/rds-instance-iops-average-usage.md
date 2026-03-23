An RDS instance is considered non-compliant if its average input/output operations per second (IOPS) utilization meets or exceeds a specified value for at least 8 hours within a specified time range. This rule does not apply if an RDS instance is not connected to Cloud Monitor, has no monitoring data, is a Cluster Edition or Serverless instance, or uses a database type other than MySQL. The default detection time range is the last 7 days. The check uses the Cloud Monitor API to retrieve monitoring data and consumes the free quota of the basic Cloud Monitor service. To ensure the quality of the check, enable Hybrid Cloud Monitoring. For more information about Hybrid Cloud Monitoring billing, see the Cloud Monitor billing documentation.

## **Risk level**

Default risk level: Medium.

You can change the risk level as needed.

## **Detection logic**

-   An RDS instance is considered non-compliant if its average input/output operations per second (IOPS) utilization meets or exceeds a specified value for at least 8 hours within a specified time range. This rule does not apply if an RDS instance is not connected to Cloud Monitor, has no monitoring data, is a Cluster Edition or Serverless instance, or uses a database type other than MySQL. The default detection time range is the last 7 days. The check uses the Cloud Monitor API to retrieve monitoring data and consumes the free quota of the basic Cloud Monitor service. To ensure the quality of the check, enable Hybrid Cloud Monitoring. For more information about Hybrid Cloud Monitoring billing, see the Cloud Monitor billing documentation.
    

## **Rule details**

**Parameter**

**Description**

Rule name

RDS instance average IOPS utilization check

Rule identifier

[rds-iops-average-utilization-check](https://confignew.console.alibabacloud.com/rules/create?step=setBasicProperties&managedRuleIdentifier=rds-iops-average-utilization-check)

Tag

RDS

Automatic remediation

Not supported

Rule trigger

Periodic execution

Trigger frequency

24 hours

Supported resource types

ACS::RDS::DBInstance

Input parameters

relativeTime (Default: 168)  
utilization (Default: 50)
