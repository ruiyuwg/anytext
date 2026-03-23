An RDS instance is considered non-compliant if its average connection usage is at or above a specified value for at least 8 hours within a time range. By default, the detection period is the last 7 days. This rule does not apply to an RDS instance that is not connected to Cloud Monitor or has no monitoring data. The rule also excludes RDS instances of the Cluster Edition, Serverless Edition, or types other than MySQL. The check uses the Cloud Monitor API for monitoring data and consumes the free quota of the basic Cloud Monitor service. To ensure detection quality, you can enable Hybrid Cloud Monitoring. For more information about billing for Hybrid Cloud Monitoring, see Cloud Monitor billing.

## **Risk level**

Default risk level: Medium.

You can change the risk level as needed.

## **Detection logic**

-   An RDS instance is considered non-compliant if its average connection usage is at or above a specified value for at least 8 hours within a time range. By default, the detection period is the last 7 days. This rule does not apply to an RDS instance that is not connected to Cloud Monitor or has no monitoring data. The rule also excludes RDS instances of the Cluster Edition, Serverless Edition, or types other than MySQL. The check uses the Cloud Monitor API for monitoring data and consumes the free quota of the basic Cloud Monitor service. To ensure detection quality, you can enable Hybrid Cloud Monitoring. For more information about billing for Hybrid Cloud Monitoring, see Cloud Monitor billing.
    

## **Rule details**

**Parameter**

**Description**

Rule name

Average connection usage check for RDS instances

Rule identifier

[rds-connection-average-utilization-check](https://confignew.console.alibabacloud.com/rules/create?step=setBasicProperties&managedRuleIdentifier=rds-connection-average-utilization-check)

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
