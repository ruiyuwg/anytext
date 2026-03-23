Checks whether transparent data encryption (TDE) is enabled for an ApsaraDB for OceanBase tenant.

## Scenarios

You can enable TDE for a tenant of an ApsaraDB for OceanBase cluster to meet relevant regulation and security requirements.

## Risk level

Default risk level: medium.

You can change the risk level as required when you apply this rule.

## Compliance evaluation logic

-   If TDE is enabled for the ApsaraDB for OceanBase tenant, the evaluation result is compliant.
-   If TDE is disabled for the ApsaraDB for OceanBase tenant, the evaluation result is non-compliant. For more information about how to correct the non-compliant configuration, see [Non-compliance remediation](#section-gty-xb7-yrx).

## Rule details

 

Item

Description

Rule name

oceanbase-tenant-enabled-encryption

Rule ID

oceanbase-tenant-enabled-encryption

Tag

OceanBase and Tenant

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

Enable TDE for the ApsaraDB for OceanBase tenant. For more information, see [TDE](/help/en/apsaradb-for-oceanbase/latest/tde#topic-2083410).
