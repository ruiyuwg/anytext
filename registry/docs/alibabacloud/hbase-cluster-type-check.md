Checks whether each ApsaraDB for HBase instance uses the cluster architecture.

## Scenarios

We recommend that you use the cluster architecture for each ApsaraDB for HBase instance. This helps you provide a standard service level agreement (SLA), improve scalability and disaster recovery capabilities and ensure business continuity.

## Risk level

Default risk level: medium.

You can change the risk level as required when you apply this rule.

## Compliance evaluation logic

-   If each ApsaraDB for HBase instance uses the cluster architecture, the evaluation result is compliant.
-   If an ApsaraDB for HBase instance does not use the cluster architecture, the evaluation result is non-compliant. For more information about how to correct the non-compliant configuration, see [Non-compliance remediation](#section-l2y-4i6-xdf).

## Rule details

**Item**

**Description**

Rule name

hbase-cluster-type-check

Rule ID

hbase-cluster-type-check

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

Purchase an instance of ApsaraDB for HBase Performance-enhanced Edition. For more information, see [Purchase a cluster](/help/en/hbase/getting-started/purchase-a-performance-enhanced-edition-cluster#task-2046768).
