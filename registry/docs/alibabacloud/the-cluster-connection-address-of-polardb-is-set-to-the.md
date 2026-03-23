Checks whether the endpoint of each PolarDB cluster allows access from primary nodes. If so, the evaluation result is Compliant.

## Scenarios

If the endpoint of each PolarDB cluster allows access from primary nodes, latency in data synchronization can be prevented. This improves read and write performance, ensures data consistency and integrity, and prevents data loss or corruption.

## **Risk level**

Default risk level: medium.

When you apply this rule, you can change the risk level based on your business requirements.

## **Compliance evaluation logic**

-   If the endpoint of each PolarDB cluster allows access from primary nodes, the evaluation result is Compliant.
    
-   If the endpoint of a PolarDB cluster does not allow access from primary nodes, the evaluation result is Non-compliant.
    

## **Rule details**

**Item**

**Description**

Rule name

polardb-cluster-address-master-accept-reads

Rule ID

[polardb-cluster-address-master-accept-reads](https://confignew.console.alibabacloud.com/rules/create?step=setBasicProperties&managedRuleIdentifier=polardb-cluster-address-master-accept-reads)

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

Ensure that the endpoint of each PolarDB cluster allows access from primary nodes. For more information, see [Configure PolarProxy](/help/en/polardb/polardb-for-mysql/user-guide/configure-polarproxy).
