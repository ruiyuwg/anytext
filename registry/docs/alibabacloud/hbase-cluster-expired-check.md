Checks whether the remaining validity period of each subscription ApsaraDB for HBase cluster is longer than that specified by the days parameter.

## Scenarios

We recommend that you check the remaining validity period of each subscription ApsaraDB for HBase cluster and renew the subscription to the cluster at the earliest opportunity. This helps you prevent your business from being interrupted.

## Risk level

Default risk level: high.

You can change the risk level as required when you apply this rule.

## Compliance evaluation logic

-   If the remaining validity period of each subscription ApsaraDB for HBase cluster is longer than that specified by the days parameter, the evaluation result is compliant.
-   If the remaining validity period of a subscription ApsaraDB for HBase cluster is shorter than or equal to that specified by the days parameter, the evaluation result is non-compliant. For more information about how to correct the non-compliant configuration, see [Non-compliance remediation](#section-pdh-t0z-sg9).

## Rule details

**Item**

**Description**

Rule name

hbase-cluster-expired-check

Rule ID

hbase-cluster-expired-check

Tag

HBase and ResourceExpired

Automatic remediation

Not supported

Trigger type

Configuration change and periodic execution

Evaluation frequency

All day

Supported resource type

ApsaraDB for HBase cluster

Input parameter

`days`. Default value: 30.

## Non-compliance remediation

Renew the subscription to each ApsaraDB for HBase cluster. For more information, see [Manually renew a subscription instance](/help/en/hbase/product-overview/manually-renew-a-subscription-instance#task-2066966).
