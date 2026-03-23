An RDS instance is considered compliant if its maximum disk usage within a specified period is greater than or equal to a specified value. This rule does not apply to RDS instances that are not connected to CloudMonitor, have no monitoring data, or are of the Cluster Edition or Serverless Edition. The default detection period is the last 7 days. This check uses the CloudMonitor monitoring data API and consumes your free quota for the basic CloudMonitor service. To ensure detection quality, enable Hybrid Cloud Monitoring. For more information about billing for Hybrid Cloud Monitoring, see the CloudMonitor billing documentation.

## **Risk level**

Default risk level: Low.

You can change the risk level as needed.

## **Detection logic**

-   An RDS instance is considered compliant if its maximum disk usage within a specified period is greater than or equal to a specified value. This rule does not apply to RDS instances that are not connected to CloudMonitor, have no monitoring data, or are of the Cluster Edition or Serverless Edition. The default detection period is the last 7 days. This check uses the CloudMonitor monitoring data API and consumes your free quota for the basic CloudMonitor service. To ensure detection quality, enable Hybrid Cloud Monitoring. For more information about billing for Hybrid Cloud Monitoring, see the CloudMonitor billing documentation.
    

## **Rule details**

**Parameter**

**Description**

Rule name

Check for idle RDS instance disk usage

Rule identifier

[rds-disk-max-utilization-check](https://confignew.console.alibabacloud.com/rules/create?step=setBasicProperties&managedRuleIdentifier=rds-disk-max-utilization-check)

Tag

ECS

Automatic remediation

Not supported

Rule trigger

Periodic execution

Trigger frequency

24 hours

Supported resource types

ACS::RDS::DBInstance

Input parameters

relativeTime (Default value: 168)  
utilization (Default value: 30)

## **Remediation guide**

To fix non-compliant resources for the 'Check for idle RDS instance disk usage' rule, see [Cloud service monitoring](/help/en/cms/cloudmonitor-1-0/user-guide/cloud-service-monitoring).
