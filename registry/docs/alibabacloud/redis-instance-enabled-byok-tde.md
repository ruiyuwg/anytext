Checks whether the transparent data encryption (TDE) feature is enabled for each ApsaraDB for Redis instance by using a custom key. If so, the evaluation result is Compliant.

## Scenarios

This rule applies when you need to use a custom key to encrypt data. This helps you meet regulatory requirements and improve data security.

## Risk level

Default risk level: medium.

When you apply this rule, you can change the risk level based on your business requirements.

## Compliance evaluation logic

-   If the TDE feature is enabled for each ApsaraDB for Redis instance, the evaluation result is Compliant.
-   If the TDE feature is disabled for an ApsaraDB for Redis instance, the evaluation result is Incompliant. If the TDE feature is enabled for each ApsaraDB for Redis instance by using an automatically generated key, the evaluation result is also Incompliant. For more information about how to remediate an incompliant configuration, see [Non-compliance remediation](#section-ouy-2gx-4fs).

## Rule details

 

Item

Description

Rule name

redis-instance-enabled-byok-tde

Rule identifier

redis-instance-enabled-byok-tde

Tag

Redis

Automatic remediation

Not supported

Trigger type

Periodic execution

Evaluation frequency

Interval of 24 hours

Supported resource type

ApsaraDB for Redis instance

Input parameter

None.

## Non-compliance remediation

Enable the TDE feature for each ApsaraDB for Redis instance by using a custom key. For more information, see [Enable TDE](/help/en/redis/user-guide/enable-tde#task-2090871 "ApsaraDB for Redis provides Transparent Data Encryption (TDE), which can be used to encrypt and decrypt Redis Database (RDB) files. You can enable TDE in the ApsaraDB for Redis console to allow the system to encrypt and decrypt RDB files. This improves data security and compliance.").
