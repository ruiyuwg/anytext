Checks whether the deletion protection feature is enabled for each ApsaraDB for HBase cluster.

## Scenarios

We recommend that you enable the deletion protection feature for each ApsaraDB for HBase cluster to prevent the cluster from being deleted by mistake. This helps you prevent your business from being interrupted.

## Risk level

Default risk level: medium.

You can change the risk level as required when you apply this rule.

## Compliance evaluation logic

-   If the deletion protection feature is enabled for each ApsaraDB for HBase cluster, the evaluation result is compliant.
-   If the deletion protection feature is disabled for an ApsaraDB for HBase cluster, the evaluation result is non-compliant. For more information about how to correct the non-compliant configuration, see [Non-compliance remediation](#section-5vy-8wm-tpz).

## Rule details

 

Item

Description

Rule name

hbase-cluster-deletion-protection

Rule ID

hbase-cluster-deletion-protection

Tag

HBase

Automatic remediation

Not supported

Trigger type

Configuration change

Supported resource type

ApsaraDB for HBase cluster

Input parameter

None

## Non-compliance remediation

Enable the deletion protection feature for each ApsaraDB for HBase cluster. For more information, see [Enable deletion protection for a cluster](/help/en/hbase/user-guide/enable-deletion-protection-for-a-cluster#concept-2659421 "Deletion protection prevents clusters from being deleted by mistake. You can enable this feature in the ApsaraDB for HBase console.").
