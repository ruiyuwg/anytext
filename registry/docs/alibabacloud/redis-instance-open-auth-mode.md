Checks whether the password-based authentication feature is enabled for each ApsaraDB for Redis instance in your virtual private clouds (VPCs). If so, the evaluation result is Compliant.

## Scenarios

This rule applies when you need to enable the password-based authentication feature for an ApsaraDB for Redis instance in your VPC. This helps you improve the security of the resources on the instances.

## Risk level

Default risk level: high.

When you apply this rule, you can change the risk level based on your business requirements.

## Compliance evaluation logic

-   If the password-based authentication feature is enabled for each ApsaraDB for Redis instance in your VPCs, the evaluation result is Compliant.
-   If the password-based authentication feature is enabled for an ApsaraDB for Redis instance in the classic network, the evaluation result is Incompliant. If the password-based authentication feature is disabled for an ApsaraDB for Redis instances in your VPC, the evaluation result is also Incompliant. For more information about how to remediate an incompliant configuration, see [Incompliance remediation](#section-3gv-bqi-n0f).

## Rule details

 

Item

Description

Rule name

redis-instance-open-auth-mode

Rule identifier

redis-instance-open-auth-mode

Tag

Redis

Automatic remediation

Not supported

Trigger type

Configuration change

Supported resource type

ApsaraDB for Redis instance

Input parameter

None.

## Incompliance remediation

Disable password-free access for an ApsaraDB for Redis instance in your VPC. For more information, see [Enable password-free access](/help/en/redis/user-guide/enable-password-free-access#concept-ttq-dst-j2b "ApsaraDB for Redis allows you to enable password-free access for instances that are deployed in a virtual private cloud (VPC). This feature provides a secure and convenient method to connect to an instance. After password-free access is enabled for an instance located in a VPC, clients within the same VPC can access the instance without using a password. Meanwhile, you can still use a username and a password to connect to the instance.").
