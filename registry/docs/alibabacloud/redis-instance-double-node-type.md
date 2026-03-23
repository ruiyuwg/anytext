Checks whether the node type of each ApsaraDB for Redis instance is master-replica. If so, the evaluation result is Compliant.

## Scenarios

Tair (Redis OSS-compatible) provides dual-replica cluster instances. These instances overcome the single-threaded bottleneck of Redis, provide large capacity and high performance, and ensure data reliability.

## Risk level

Default risk level: high.

You can change the risk level as needed.

## Compliance evaluation logic

A Redis instance is considered compliant if its node type is dual-replica.

## Rule details

**Parameter**

**Description**

Rule name

Redis instances use the dual-replica node type

Rule identifier

[redis-instance-double-node-type](https://confignew.console.alibabacloud.com/rules/create?step=setBasicProperties&managedRuleIdentifier=redis-instance-double-node-type)

Automatic remediation

Not supported

Rule trigger

Configuration change

Supported resource types

ACS::Redis::DBInstance

Input parameters

None

## **Remediation**

For more information, see [Change instance configurations](/help/en/redis/user-guide/change-the-configurations-of-an-instance/).
