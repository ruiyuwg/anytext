Checks whether high-risk commands are enabled for each ApsaraDB for Redis instance. If not, the evaluation result is Compliant.

## Scenarios

To ensure that your workloads run with high stability and efficiency, you can disable specific commands to reduce security risks based on your actual business scenario.

## Risk level

Default risk level: high.

When you apply this rule, you can change the risk level based on your business requirements.

## Compliance evaluation logic

-   If high-risk commands are disabled for each ApsaraDB for Redis instance, the evaluation result is Compliant.
-   If high-risk commands are enabled for an ApsaraDB for Redis instance, the evaluation result is Incompliant. For more information about how to remediate an incompliant configuration, see [Incompliance remediation](#section-eaw-hx5-rrv).

## Rule details

 

Item

Description

Rule name

redis-instance-disable-risk-commands

Rule identifier

redis-instance-disable-risk-commands

Tag

Redis

Automatic remediation

Supported

Trigger type

Configuration change

Supported resource type

ApsaraDB for Redis instance

Input parameter

None.

## Incompliance remediation

Disable high-risk commands for an ApsaraDB for Redis instance. For more information, see [Disable high-risk commands](/help/en/redis/user-guide/disable-high-risk-commands#task-uzq-tgk-5gb "You can set the #no_loose_disabled-commands parameter in the ApsaraDB for Redis console to disable specific commands that may degrade service performance and cause data loss.").
