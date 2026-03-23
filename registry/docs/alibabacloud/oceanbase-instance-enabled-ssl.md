Checks whether SSL link encryption is enabled for an ApsaraDB for OceanBase cluster.

## Scenarios

You can enable SSL link encryption for an ApsaraDB for OceanBase cluster to secure data transmission between the client and the server.

## Risk level

Default risk level: high.

You can change the risk level as required when you apply this rule.

## Compliance evaluation logic

-   If SSL link encryption is enabled for the ApsaraDB for OceanBase cluster, the evaluation result is compliant.
-   If SSL link encryption is disabled for the ApsaraDB for OceanBase cluster, the evaluation result is non-compliant. For more information about how to correct the non-compliant configuration, see [Non-compliance remediation](#section-qx7-8ht-d8z).

## Rule details

 

Item

Description

Rule name

oceanbase-instance-enabled-ssl

Rule ID

oceanbase-instance-enabled-ssl

Tag

OceanBase and SSL

Automatic remediation

Not supported

Trigger type

Configuration change

Supported resource type

ApsaraDB for OceanBase cluster

Input parameter

None

## Non-compliance remediation

Enable SSL link encryption for the ApsaraDB for OceanBase cluster. For more information, see [SSL link encryption](/help/en/apsaradb-for-oceanbase/latest/ssl-link-encryption#topic-2083409).
