Checks whether the cluster auditing feature is enabled for each Container Service for Kubernetes (ACK) cluster.

## Scenario

The audit log of the API server of an ACK cluster helps administrators track operations performed by different users. Cluster auditing plays an important role in cluster security and cluster O&M.

## Risk level

Default risk level: high.

When you apply this rule, you can change the risk level based on your business requirements.

## **Compliance evaluation logic**

If the cluster auditing feature is enabled for each ACK cluster, the evaluation result is compliant.

## **Rule details**

**Item**

**Description**

Rule name

ack-cluster-api-server-audit-log-enabled

Rule ID

[ack-cluster-api-server-audit-log-enabled](https://confignew.console.alibabacloud.com/rules/create?step=setBasicProperties&managedRuleIdentifier=ack-cluster-api-server-audit-log-enabled)

Tag

ACK and Cluster

Automatic remediation

Not supported

Trigger type

Periodic execution

Evaluation frequency

Every 24 hours

Supported resource type

ACS::ACK::Cluster

Input parameter

None

## **Non-compliance remediation**

Enable the cluster auditing feature for all ACK clusters. For more information, see [Work with the cluster auditing feature](/help/en/ack/ack-managed-and-ack-dedicated/security-and-compliance/work-with-cluster-auditing).
