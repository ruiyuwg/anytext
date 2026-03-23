Checks whether the transaction splitting feature is disabled for the endpoint of each PolarDB cluster. If so, the evaluation result is Compliant.

## Scenarios

Disabling the transaction splitting feature can improve stability, simplify management, and reduce latency and deadlocks. However, some cross-shard transactions may fail to be executed. Therefore, trade-offs and decisions must be made based on actual scenarios.

## **Risk level**

Default risk level: medium.

When you apply this rule, you can change the risk level based on your business requirements.

## **Compliance evaluation logic**

-   If the transaction splitting feature is disabled for the endpoint of each PolarDB cluster, the evaluation result is Compliant.
    
-   If the transaction splitting feature is enabled for the endpoint of a PolarDB cluster, the evaluation result is Non-compliant.
    

## **Rule details**

**Item**

**Description**

Rule name

polardb-cluster-address-distributed-transaction-disabled

Rule ID

[polardb-cluster-address-distributed-transaction-disabled](https://confignew.console.alibabacloud.com/rules/create?step=setBasicProperties&managedRuleIdentifier=polardb-cluster-address-distributed-transaction-disabled)

Tag

PolarDB

Automatic remediation

Not supported

Trigger type

Periodic execution

Evaluation frequency

Every 24 hours

Supported resource type

PolarDB cluster

Input parameter

None

## **Non-compliance remediation**

Disable the transaction splitting feature for the endpoint of each PolarDB cluster. For more information, see [Configure PolarProxy](/help/en/polardb/polardb-for-mysql/user-guide/configure-polarproxy).
