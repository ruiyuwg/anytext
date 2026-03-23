If Internet access is disabled for all the endpoints of the PolarDB cluster, the evaluation result is Compliant.

## Scenarios

Internet access to PolarDB clusters reduces network security. We recommend that you enable only virtual private cloud (VPC) access.

## Risk level

Default risk level: high.

When you apply this rule, you can change the risk level based on your business requirements.

## Compliance evaluation logic

-   If Internet access is disabled for all the endpoints of the PolarDB cluster, the evaluation result is Compliant.
-   If Internet access is enabled for any endpoint of the PolarDB cluster, the evaluation result is Incompliant. For more information about how to remediate an incompliant configuration, see the "[Incompliance remediation](#section-ll5-3n0-idv)" section of this topic.

## Rule details

**Parameter**

**Description**

Rule name

polardb-cluster-address-no-public

Rule identifier

polardb-cluster-address-no-public

Tag

PolarDB

Automatic remediation

Not supported

Trigger type

Periodic execution

Evaluation frequency

Interval of 24 hours

Supported resource type

PolarDB cluster

Input parameter

None

## Incompliance remediation

Disable Internet access for all endpoints of the PolarDB cluster. For more information, see [Connecting to a PolarDB Cluster](/help/en/polardb/polardb-for-mysql/user-guide/connection-connection-endpoints#task-1580301).
