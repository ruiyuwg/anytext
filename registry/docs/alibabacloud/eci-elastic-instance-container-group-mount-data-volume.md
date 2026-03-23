Checks whether a data volume is mounted to the container group of an elastic container instance. If so, the evaluation result is Compliant.

## Scenarios

A data volume is required to be mounted to the container group of an elastic container instance to implement features such as data persistence, sharing, backup, and migration. It is a very important operation to ensure the security, reliability, and availability of data.

## **Risk level**

Default risk level: medium.

When you apply this rule, you can change the risk level based on your business requirements.

## **Compliance evaluation logic**

-   If a data volume is mounted to the container group of an elastic container instance, the evaluation result is Compliant.
    
-   If a data volume is not mounted to the container group of an elastic container instance, the evaluation result is Non-compliant.
    

## **Rule details**

**Item**

**Description**

Rule name

eci-container-group-volumn-mounts

Rule ID

[eci-container-group-volumn-mounts](https://confignew.console.alibabacloud.com/rules/create?step=setBasicProperties&managedRuleIdentifier=eci-container-group-volumn-mounts)

Tag

ECI

Automatic remediation

Not supported

Trigger type

Periodic execution

Evaluation frequency

Every 24 hours

Supported resource type

Container group

Input parameter

None

## **Non-compliance remediation**

Mount a data volume to the container group of an elastic container instance. For more information, see [Overview of volumes](/help/en/eci/user-guide/overview-of-volumes).
