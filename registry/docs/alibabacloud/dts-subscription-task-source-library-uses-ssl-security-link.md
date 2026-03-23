Checks whether SSL secure connections are used for the source database of each subscription task on a Data Transmission Service (DTS) instance. If so, the evaluation result is Compliant.

## **Scenarios**

Using SSL secure connections for the source database of each subscription task on a DTS instance can improve data security, integrity, and access control, and meet compliance and user trust requirements. It is a recommended security measure.

## **Risk level**

Default risk level: medium.

When you apply this rule, you can change the risk level based on your business requirements.

## **Compliance evaluation logic**

-   If SSL secure connections are used for the source database of each subscription task on a DTS instance, the evaluation result is Compliant.
    
-   If SSL secure connections are not used for the source database of a subscription task on a DTS instance, the evaluation result is Non-compliant.
    
-   If a task on a DTS instance is a non-subscription task, the evaluation result is Not Applicable.
    

## **Rule details**

**Item**

**Description**

Rule name

dts-instance-subscribe-job-ssl-enabled

Rule ID

[dts-instance-subscribe-job-ssl-enabled](https://confignew.console.alibabacloud.com/rules/create?step=setBasicProperties&managedRuleIdentifier=dts-instance-subscribe-job-ssl-enabled)

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
