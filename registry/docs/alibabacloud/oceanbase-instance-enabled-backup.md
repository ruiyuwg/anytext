Checks whether database backup is enabled for an ApsaraDB for OceanBase cluster.

## Scenarios

You can enable log backup for an ApsaraDB for OceanBase cluster to improve the disaster recovery performance of the system and meet relevant regulation and security requirements.

## Risk level

Default risk level: high.

You can change the risk level as required when you apply this rule.

## Compliance evaluation logic

-   If database backup is enabled for the ApsaraDB for OceanBase cluster, the evaluation result is compliant.
-   If database backup is disabled for the ApsaraDB for OceanBase cluster, the evaluation result is non-compliant. For more information about how to correct the non-compliant configuration, see [Non-compliance remediation](#section-zxg-9ox-3y7).

## Rule details

**Item**

**Description**

Rule name

oceanbase-instance-enabled-backup

Rule ID

oceanbase-instance-enabled-backup

Tag

OceanBase and Instance

Automatic remediation

Not supported

Trigger type

Periodic execution

Time interval

24 hours

Supported resource type

ApsaraDB for OceanBase cluster

Input parameter

None

## Non-compliance remediation

Enable database backup for the ApsaraDB for OceanBase cluster. For more information, see [Data backup](/help/en/apsaradb-for-oceanbase/latest/data-backup#topic-1918892).
