Flannel is a simple and stable Container Network Interface (CNI) plugin from the community. A Flannel network uses the custom route feature of an Alibaba Cloud virtual private cloud (VPC) to enable direct communication between pods on different nodes and with the VPC. This topic describes how to use the Flannel network plugin in a Container Service for Kubernetes (ACK) cluster.

## Background information

In Flannel network mode, the pod CIDR block is independent of the VPC CIDR block. The pod CIDR block is evenly divided and allocated to each node in the cluster based on a subnet mask. Pods on a node are assigned IP addresses from the subnet allocated to that node.

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/2216282771/CAEQVBiBgIDGzNeS5hkiIGM1ZDI3YTkzOTBkMTQ4Nzk4NDU5Y2MzZDU3ZDE3NTE23963382_20230830144006.372.svg)

## Notes

-   Cloud Controller Manager manages the default route table of the VPC for a cluster that uses Flannel network mode. Do not modify this route table unless necessary. For more information about Cloud Controller Manager, see [Cloud Controller Manager](/help/en/ack/product-overview/cloud-controller-manager#concept-wk1-grd-qfb).
    
-   By default, clusters that use Flannel network mode do not support multiple route tables in a VPC. If multiple route tables exist in the cluster's VPC, configure them by following the instructions in [Use multiple route tables in a VPC](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/configure-multiple-route-tables-for-a-vpc#task-2057616). When you use the Alibaba Cloud [NAT firewalls](/help/en/cloud-firewall/cloudfirewall/user-guide/nat-firewalls) service, add the VPC system route table to the list of multiple route tables after the firewall is created. Otherwise, cluster scale-out may be affected.
    
-   If conflicting route entries exist in the same route table, Cloud Controller Manager automatically deletes the conflicting entries.
    

## Procedure

On the **Create Kubernetes Cluster** page, set **Forwarding Mode** to **Flannel**. The following table describes the related parameters. For more information, see [Create an ACK managed cluster](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/create-an-ack-managed-cluster-2/#task-skz-qwk-qfb) and [Create an ACK dedicated cluster (no longer available for creation)](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/create-an-ack-dedicated-cluster/#task-skz-qwk-qfb).

**Parameter Name**

**Description**

VPC

Select the VPC for the cluster.

vSwitch

Select the vSwitch for the cluster nodes.

Pods per Node

The maximum number of pods that can run on a single node.

Pod CIDR Block

The CIDR block for pods in the cluster. For more information, see [Plan CIDR blocks for ACK managed clusters](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/kubernetes-cluster-network-planning#section-oy4-yg4-vdb).

Service CIDR Block

The CIDR block for services in the cluster. For more information, see [Plan CIDR blocks for ACK managed clusters](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/kubernetes-cluster-network-planning#section-oy4-yg4-vdb).

## VPC quota limits

-   Each node in a cluster corresponds to one route entry. By default, a VPC supports only 200 route entries. If your cluster has more than 200 nodes, [log on to the Quota Center console and submit an application](https://quotas.console.alibabacloud.com/products/csk/quotas).
    
-   For more information about VPC limits and quotas, see [Limits and Quotas](/help/en/vpc/understanding-vpc-quotas-in-alibaba-cloud#concept-dyx-jkx-5db).
