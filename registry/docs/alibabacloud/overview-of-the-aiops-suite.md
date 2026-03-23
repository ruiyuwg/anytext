To simplify the management and O&M of Kubernetes clusters, Container Service for Kubernetes (ACK) provides the AIOps suite. The AIOps suite consists of cluster check, cluster inspection, and cluster diagnostics, which can help you troubleshoot issues and improve the O&M efficiency. This topic describes the benefits of the AIOps suite and its features, including cluster check, cluster inspection, and cluster diagnostics.

## Benefits

The AIOps suite provides a variety of features, including cluster check, cluster inspection, and cluster diagnostics. The following table describes the benefits of the AIOps suite.

**Feature**

**Benefit**

[Cluster check](/help/en/doc-detail/605585.html#concept-2300808)

Before the system performs O&M operations on a cluster, a cluster check is triggered to evaluate whether the cluster meets the requirements. This increases the success rate of operations.

[Cluster inspection](/help/en/doc-detail/605586.html#concept-2300809)

Cluster inspections are performed at a scheduled time to identify potential risks in clusters.

[Cluster diagnostics](/help/en/doc-detail/605587.html#concept-2300810)

Pods, nodes, Ingresses, memory, and Services diagnostics are provided. This simplifies troubleshooting.

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/3514895471/CAEQJhiBgMDv0I7H_xgiIDA3MDM5NzcxMGM4MzRiNTNiNTAzNTRlODYyYWRkYzYy3963382_20230830144006.372.svg)

**Note**

The AIOps suite is supported for ACK managed clusters, ACK dedicated clusters, and ACK Serverless Pro clusters.

## Cluster check

The cluster check feature covers key O&M operations, such as cluster upgrade, cluster migration, component installation, component upgrade, and node pool upgrade. Before you perform these O&M operations, a cluster check is automatically triggered. You can perform the operations only after the cluster passes the check. The system also displays the reasons of failed check items in a visualized manner and provides suggestions on how to fix them. For more information, see [Cluster Check](/help/en/doc-detail/605585.html#concept-2300808).

## Cluster inspection

You can use the cluster inspection feature to complete the following tasks:

-   Scan the status of a cluster to identify potential risks.
    
-   Periodically check the resource usage, resource quotas, cluster certificates, and component versions of a cluster and allow you to view the results in a visualized manner.
    
-   Display the severity levels of anomalies and provide solutions to help efficiently maintain your clusters.
    

Based on extensive cluster management practices, ACK has accumulated rich experience in cluster inspection from a wealth of use cases. For more information, see [Cluster Inspections](/help/en/doc-detail/605586.html#concept-2300809).

## Cluster diagnostics

The cluster diagnostics feature allows you to diagnose clusters with a few clicks. This feature can help diagnose pods, nodes, Ingresses, memory, and Services in your cluster.

**Item**

**Description**

[Pod diagnostics](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/pod-diagnostics#task-2303417)

Diagnoses common pod issues, such as startup failures, image pulling failures, and exceptions, displays the root cause of these issues, and provides suggestions on how to fix the issues.

[Node diagnostics](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/node-diagnostics#task-2303418)

Diagnoses common node issues, such as the NotReady issue, node network issues, and runtime issues, displays the root cause of these issues, and provides suggestions on how to fix the issues.

[Service diagnostics](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/service-diagnostics#task-2303419)

Diagnoses common issues with Services, such as those related to service exception events, Server Load Balancer (SLB) backend server quotas, and SLB instance count quotas, displays the root cause of these issues, and provides suggestions on how to fix the issues.

[Ingress diagnostics](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/ingress-diagnostics#task-2303420)

Collects information about Ingress component check, startup parameters, Ingress pod error logs, and the SLB instances used by the Ingress controller to help troubleshoot application access issues.

[Memory diagnostics](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/memory-diagnostics#task-2303421)

Diagnoses common memory issues in ACK clusters, such as memory leaks, memory fragmentation, and cgroup leaks, displays the root cause of these issues, and provides suggestions on how to fix the issues.
