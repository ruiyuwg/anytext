An RDS instance is considered compliant if its maximum CPU utilization within a specified period is greater than or equal to a set value. This rule does not apply if an RDS instance is not connected to CloudMonitor, has no monitoring data, or is a Cluster Edition or Serverless Edition instance. The default detection period is the last 7 days. The check uses the CloudMonitor monitoring data API and consumes the free quota for basic CloudMonitor. To improve check quality, you can enable Hybrid Cloud Monitoring. For more information about billing for Hybrid Cloud Monitoring, see Billing of CloudMonitor.

## **Threat level**

Default threat level: Low.

You can change the risk level as needed.

## **Detection logic**

-   An RDS instance is considered compliant if its maximum CPU utilization within a specified period is greater than or equal to a set value. This rule does not apply if an RDS instance is not connected to CloudMonitor, has no monitoring data, or is a Cluster Edition or Serverless Edition instance. The default detection period is the last 7 days. The check uses the CloudMonitor monitoring data API and consumes the free quota for basic CloudMonitor. To improve check quality, you can enable Hybrid Cloud Monitoring. For more information about billing for Hybrid Cloud Monitoring, see Billing of CloudMonitor.
    

## **Rule details**

**Parameter**

**Description**

Rule name

Check for idle RDS instances based on CPU utilization

Rule identifier

[rds-cpu-max-utilization-check](https://confignew.console.alibabacloud.com/rules/create?step=setBasicProperties&managedRuleIdentifier=rds-cpu-max-utilization-check)

Tag

ECS

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
utilization (Default: 10)

## **Remediation**

For instructions on how to fix non-compliant resources, see [cloud service monitoring](/help/en/cms/cloudmonitor-1-0/user-guide/cloud-service-monitoring).
