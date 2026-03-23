Checks whether the transparent data encryption (TDE) feature is enabled for each ApsaraDB for Redis instance. If so, the evaluation result is considered compliant.

## Scenarios

Tair (Redis OSS-compatible) supports TDE. This feature encrypts and decrypts Redis Database (RDB) data files to improve data security and meet compliance requirements. When TDE is enabled, this process is automatic.

## Risk level

Default risk level: medium.

You can change the risk level as needed.

## Compliance evaluation logic

If TDE is enabled for a Redis instance, the instance is considered compliant.

## Rule details

**Parameter**

**Description**

Rule name

Enable TDE for Redis instances

Rule identifier

[redis-instance-enabled-tde](https://confignew.console.alibabacloud.com/rules/create?step=setBasicProperties&managedRuleIdentifier=redis-instance-enabled-tde)

Automatic remediation

Not supported

Rule trigger

Periodic check every 24 hours

Supported resource types

ACS::Redis::DBInstance

Input parameters

None

## Incompliance remediation

For more information, see [Enable transparent data encryption (TDE)](/help/en/redis/user-guide/enable-tde#task-2090871).
