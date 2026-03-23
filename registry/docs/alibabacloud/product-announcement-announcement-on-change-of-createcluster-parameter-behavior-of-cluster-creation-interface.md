To standardize interface behavior, Container Service for Kubernetes (ACK) adjusts the behavior of the `charge_type` field in the CreateCluster operation on October 15, 2024.

## **Effective date**

October 15, 2024

## **Impact scope**

This change applies to ACK managed clusters, ACK dedicated clusters, ACK Edge clusters, and ACK Lingjun clusters.

## **Change** details

The `charge_type` field in the [CreateCluster](/help/en/ack/ack-managed-and-ack-dedicated/developer-reference/api-cs-2015-12-15-createcluster) operation specifies the billing method of the cluster. The following table describes the change of the `charge_type` field:

**Before change**

**After change**

Specifies the billing method for Classic Load Balancer (CLB) instances, Elastic Compute Service (ECS) instances in the node pool, and ECS instances in the control plane of the cluster (applicable only to ACK dedicated clusters) that are associated with the API server of the cluster.

Specifies the payment method only for CLB instances associated with the API server of the cluster.

## **Configuration method after change**

After the change, the following fields are recommended for specifying the payment method and related configurations when you create a cluster by calling the CreateCluster operation:

**Configuration item**

**Configuration field**

**CLB** **instance** **associated with the** **API server**

**ECS instance in the node pool**

**ECS** **instance** **in the control plane (only applicable to** **ACK dedicated clusters****)**

Billing method

charge\_type

nodepools\[\].scaling\_group.instance\_charge\_type

master\_instance\_charge\_type

Subscription duration

period

nodepools\[\].scaling\_group.period

master\_period

Billing cycle

period\_unit

nodepools\[\].scaling\_group.period\_unit

master\_period\_unit

Auto-renewal

auto\_renew

nodepools\[\].scaling\_group.auto\_renew

master\_auto\_renew

Automatic payment cycle

auto\_renew\_period

nodepools\[\].scaling\_group.auto\_renew\_period

master\_auto\_renew\_period
