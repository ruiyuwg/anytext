Checks whether a public IP address is specified for each ApsaraDB for Redis instance. If not, the evaluation result is Compliant.

## Scenarios

Proceed with caution when you need to specify a public IP address for an ApsaraDB for Redis instance. This helps reduce network security risks.

## Risk level

Default risk level: high.

When you apply this rule, you can change the risk level based on your business requirements.

## Compliance evaluation logic

-   If no public IP address is specified for each ApsaraDB for Redis instance, the evaluation result is Compliant.
-   If a public IP address is specified for an ApsaraDB for Redis instance, the evaluation result is Incompliant. For more information about how to remediate an incompliant configuration, see [Incompliance remediation](#section-a2r-9au-byj).

## Rule details

 

Item

Description

Rule name

redis-instance-no-public-ip

Rule identifier

redis-instance-no-public-ip

Tag service

Redis

Automatic remediation

Supported

Trigger type

Periodic execution

Evaluation frequency

Interval of 24 hours

Supported resource type

ApsaraDB for Redis instance

Input parameter

None.

## Incompliance remediation

Connect to an ApsaraDB for Redis instance by using clients, Data Management (DMS), or redis-cli. For more information, see [Connect to an ApsaraDB for Redis instance](/help/en/redis/getting-started/step-3-connect-to-an-apsaradb-for-redis-instance#task-1715483 "You can use a Redis client, Data Management (DMS), or the redis-cli tool to connect to an ApsaraDB for Redis instance.").
