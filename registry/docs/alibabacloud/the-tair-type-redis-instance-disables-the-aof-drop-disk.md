Checks whether the append-only file (AOF) persistence feature is disabled for each ApsaraDB for Redis instance. If so, the evaluation result is Compliant.

## Scenarios

If you use an ApsaraDB for Redis instance for cache-only scenarios, we recommend that you disable the AOF persistence feature. This is to improve the performance of the instance, reduce the disk space used by the instance, and reduce the additional load on the instance.

## **Risk level**

Default risk level: medium.

When you apply this rule, you can change the risk level based on your business requirements.

## **Compliance evaluation logic**

-   If the AOF persistence feature is disabled for each ApsaraDB for Redis instance, the evaluation result is Compliant.
    
-   If the AOF persistence feature is enabled for an ApsaraDB for Redis instance, the evaluation result is Non-compliant.
    
-   If an ApsaraDB for Redis instance is not a Tair instance, the evaluation result is Not Applicable.
    

## **Rule details**

**Item**

**Description**

Rule name

redis-instance-tair-type-close-aof

Rule ID

[redis-instance-tair-type-close-aof](https://confignew.console.alibabacloud.com/rules/create?step=setBasicProperties&managedRuleIdentifier=redis-instance-tair-type-close-aof)

Tag

Redis and Instance

Automatic remediation

Not supported

Trigger type

Configuration change

Supported resource type

ApsaraDB for Redis instance

Input parameter

None

## **Non-compliance remediation**

Disable the AOF persistence feature for each ApsaraDB for Redis instance. For more information, see [Disable AOF persistence](/help/en/redis/user-guide/disable-aof-persistence).
