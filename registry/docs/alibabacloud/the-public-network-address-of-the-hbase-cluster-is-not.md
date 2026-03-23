Checks whether Internet access is disabled for each ApsaraDB for HBase cluster. If so, the evaluation result is Compliant.

## Scenarios

Enabling Internet access for an ApsaraDB for HBase cluster is prone to various security risks. We recommend that you disable Internet access for each ApsaraDB for HBase cluster to ensure the security and performance of the clusters and data.

## **Risk level**

Default risk level: high.

When you apply this rule, you can change the risk level based on your business requirements.

## **Compliance evaluation logic**

-   If Internet access is disabled for each ApsaraDB for HBase cluster, the evaluation result is Compliant.
    
-   If Internet access is enabled for an ApsaraDB for HBase cluster, the evaluation result is Non-compliant.
    

## **Rule details**

**Item**

**Description**

Rule name

hbase-public-access-check

Rule ID

[hbase-public-access-check](https://confignew.console.alibabacloud.com/rules/create?step=setBasicProperties&managedRuleIdentifier=hbase-public-access-check)

Tag

HBase and public

Automatic remediation

Not supported

Trigger type

Periodic execution

Evaluation frequency

Every 24 hours

Supported resource type

ApsaraDB for HBase cluster

Input parameter

None

## **Non-compliance remediation**

Disable Internet access for each ApsaraDB for HBase cluster. For more information, see [DescribeEndpoints](/help/en/hbase/developer-reference/api-describeendpoints).
