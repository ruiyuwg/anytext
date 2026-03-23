An RDS instance is considered non-compliant if its average CPU utilization meets or exceeds a specified value for at least 8 hours within a specific time period. By default, this period is the last 7 days. This rule does not apply to RDS instances of the Cluster Edition or Serverless Edition. The rule also does not apply if an instance is not connected to Cloud Monitor, lacks monitoring data, or uses a database other than MySQL. This check uses the Cloud Monitor API and consumes your free quota. To ensure high-quality detection, you can enable Hybrid Cloud Monitoring. For more information about the billing of Hybrid Cloud Monitoring, see the Cloud Monitor billing overview.

## **Risk level**

Default risk level: Medium.

You can change the risk level as needed.

## **Detection logic**

-   An RDS instance is considered non-compliant if its average CPU utilization meets or exceeds a specified value for at least 8 hours within a specific time period. By default, this period is the last 7 days. This rule does not apply to RDS instances of the Cluster Edition or Serverless Edition. The rule also does not apply if an instance is not connected to Cloud Monitor, lacks monitoring data, or uses a database other than MySQL. This check uses the Cloud Monitor API and consumes your free quota. To ensure high-quality detection, you can enable Hybrid Cloud Monitoring. For more information about the billing of Hybrid Cloud Monitoring, see the Cloud Monitor billing overview.
    

## **Rule details**

**Parameter**

**Description**

Rule name

Check for average CPU utilization of RDS instances

Rule identifier

[rds-cpu-average-utilization-check](https://confignew.console.alibabacloud.com/rules/create?step=setBasicProperties&managedRuleIdentifier=rds-cpu-average-utilization-check)

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
