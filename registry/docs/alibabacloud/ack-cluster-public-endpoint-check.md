Checks whether public endpoints are configured for the API server in each Container Service for Kubernetes (ACK) cluster.

## Scenario

If you configure public endpoints for the API server in an ACK cluster, your resources, such as pods, Services, and ReplicaControllers, may face attacks from the Internet. Therefore, we recommend that you do not configure public endpoints for the API server.

## Risk level

Default risk level: high.

You can change the risk level as required when you apply this rule.

## Compliance evaluation logic

-   If no public endpoints are configured for the API server in each ACK cluster, the evaluation result is compliant.
-   If public endpoints are configured for the API server in an ACK cluster, the evaluation result is non-compliant. For more information about how to correct the non-compliant configuration, see [Non-compliance remediation](#section-6vg-uxg-igj).

## Rule details

**Item**

**Description**

Rule name

ack-cluster-public-endpoint-check

Rule ID

ack-cluster-public-endpoint-check

Tag

ACK

Automatic remediation

Not supported

Trigger type

Periodic execution

Time interval

24 hours

Supported resource type

ACK cluster

Input parameter

None

## Non-compliance remediation

Disassociate all elastic IP addresses (EIPs) with the API server in the ACK cluster. For more information, see [Expose the API server to the Internet](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/control-public-access-to-the-api-server-of-a-cluster#task-2494620).
