Checks whether high-availability ApsaraDB for HBase clusters are used.

## Scenarios

We recommend that you use high-availability ApsaraDB for HBase clusters. This helps you improve system stability and prevent your business from being interrupted.

## Risk level

Default risk level: medium.

You can change the risk level as required when you apply this rule.

## Compliance evaluation logic

-   If high-availability ApsaraDB for HBase clusters are used, the evaluation result is compliant.
-   If high-availability ApsaraDB for HBase clusters are not used, the evaluation result is non-compliant. For more information about how to correct the non-compliant configuration, see [Non-compliance remediation](#section-1du-w22-wk6).

## Rule details

**Item**

**Description**

Rule name

hbase-cluster-ha-check

Rule ID

hbase-cluster-ha-check

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
