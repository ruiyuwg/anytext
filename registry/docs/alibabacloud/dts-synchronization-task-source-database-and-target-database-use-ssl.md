Checks whether SSL secure connections are used for both the source and destination databases of each synchronization task on a Data Transmission Service (DTS) instance. If so, the evaluation result is Compliant.

## Scenarios

Using SSL secure connections for both the source and destination databases of each synchronization task on a DTS instance can improve data security, integrity, and access control, and meet compliance and user trust requirements. It is a recommended security measure.

## **Risk level**

Default risk level: medium.

When you apply this rule, you can change the risk level based on your business requirements.

## **Compliance evaluation logic**

-   If SSL secure connections are used for both the source and destination databases of each synchronization task on a DTS instance, the evaluation result is Compliant.
    
-   If SSL secure connections are not used for the source or destination database of a synchronization task on a DTS instance, the evaluation result is Non-compliant.
    
-   If a task on a DTS instance is a non-synchronization task, the evaluation result is Not Applicable.
    

## **Rule details**

**Item**

**Description**

Rule name

dts-instance-sync-job-ssl-enabled

Rule ID

[dts-instance-sync-job-ssl-enabled](https://confignew.console.alibabacloud.com/rules/create?step=setBasicProperties&managedRuleIdentifier=dts-instance-sync-job-ssl-enabled)

Tag

DTS and Instance

Automatic remediation

Not supported

Trigger type

Periodic execution

Evaluation frequency

Every 24 hours

Supported resource type

DTS instance

Input parameter

None

## **Non-compliance remediation**

Use SSL secure connections for both the source and destination databases of each synchronization task on a DTS instance. For more information, see [Configure a data synchronization task by using the new DTS console](/help/en/dts/getting-started/configure-a-data-synchronization-task-using-the-new-dts-console).
