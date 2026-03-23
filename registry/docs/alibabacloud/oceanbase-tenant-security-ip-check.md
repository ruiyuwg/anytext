Checks whether 0.0.0.0 is excluded from all IP address allowlists of an ApsaraDB for OceanBase tenant.

## Scenarios

You can configure an IP address allowlist for a tenant of an ApsaraDB for OceanBase cluster based on the principle of least privilege to reduce network exposure and protect cloud network security.

## Risk level

Default risk level: high.

You can change the risk level as required when you apply this rule.

## Compliance evaluation logic

-   If 0.0.0.0 is excluded from all IP address allowlists of the ApsaraDB for OceanBase tenant, the evaluation result is compliant.
-   If 0.0.0.0 is included in an IP address allowlist of the ApsaraDB for OceanBase tenant, the evaluation result is non-compliant. For more information about how to correct the non-compliant configuration, see [Non-compliance remediation](#section-7qm-pry-cue).

## Rule details

Item

Description

Rule name

oceanbase-tenant-security-ip-check

Rule ID

oceanbase-tenant-security-ip-check

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

Configure an IP address allowlist for the ApsaraDB for OceanBase tenant. For more information, see [Whitelist group](/help/en/apsaradb-for-oceanbase/latest/whitelist-group#topic-2083408).
