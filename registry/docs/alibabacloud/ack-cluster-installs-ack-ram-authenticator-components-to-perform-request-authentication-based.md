Checks whether the ack-ram-authenticator component is installed in each Container Service for Kubernetes (ACK) cluster to implement Resource Access Management (RAM) authentication.

## Scenario

ack-ram-authenticator is a component that can help authenticate requests sent to the API server of an ACK managed cluster by using webhooks and RAM. In single sign-on (SSO) scenarios, ack-ram-authenticator can help the API server authenticate the requests sent to the API server by users that assume the same role.

## **Risk level**

Default risk level: medium.

When you apply this rule, you can change the risk level based on your business requirements.

## **Compliance evaluation logic**

If the ack-ram-authenticator component is installed in each ACK cluster, the evaluation result is compliant.

## **Rule details**

**Item**

**Description**

Rule name

ack-cluster-ram-authenticator-enabled

Rule ID

[ack-cluster-ram-authenticator-enabled](https://confignew.console.alibabacloud.com/rules/create?step=setBasicProperties&managedRuleIdentifier=ack-cluster-ram-authenticator-enabled)

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

Install the ack-ram-authenticator component in all ACK clusters. For more information, see [Use ack-ram-authenticator to help the API server in an ACK managed cluster complete webhook authentication](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/use-ack-ram-authenticator-to-help-the-api-server-in-ack-managed-clusters-complete-webhook-authentication).
