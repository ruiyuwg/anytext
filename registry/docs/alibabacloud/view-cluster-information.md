You can view information about Container Service for Kubernetes (ACK) clusters on the cluster information page, including basic cluster information, cluster inspection information, relevant cloud resources, and cluster resource monitoring data.

## Procedure

1.  Log on to the [ACK console](https://cs.console.alibabacloud.com). In the left navigation pane, click **Clusters**.
    
2.  On the **Clusters** page, find the target cluster and click its name. In the navigation pane on the left, click **Cluster Information**.
    
3.  Click a tab to view the corresponding information.
    
    For more information, see [Cluster information](#ad60d1f0470g2).
    

## **Cluster information**

**Tab**

**Description**

**Overview**

You can view the cluster resource overview and health status.

-   **Cluster Health Status**: This section displays the health status of the control plane, components, node pools, and workloads. You can click a card that indicates an abnormal resource to go to the corresponding page.
    
    > This feature can be used with the [Managed Service for Prometheus](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/use-managed-service-for-prometheus-to-monitor-an-ack-cluster) feature to configure alerts.
    
-   **Cluster Risks**: After you enable the cluster inspection feature, the system automatically scans the cluster and displays potential risks and corresponding solutions to prevent service disruptions.
    
    > This feature can be used with the [inspection feature](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/work-with-the-cluster-inspection-feature/) to configure the inspection interval and cycle.
    
-   **Monitoring**: This section displays the usage and total amount of [CPU](https://kubernetes.io/docs/concepts/configuration/manage-compute-resources-container/#meaning-of-cpu) and [memory](https://kubernetes.io/docs/concepts/configuration/manage-compute-resources-container/#meaning-of-memory) in the cluster.
    
-   **Events and Alerts**: This section displays cluster alerts, error events, and other events.
    
    > This feature can be used with the [Event monitoring](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/event-monitoring) and [Container Service alert management](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/alert-management) features.
    

**Security Overview**

> Only ACK managed Pro clusters support this feature. To use this feature, [submit a ticket](https://smartservice.console.alibabacloud.com/console.htm) to apply to be added to the whitelist.

After a security inspection is performed on the cluster, the inspection results are displayed, including node vulnerabilities, container image risks, and container runtime risks. This helps you learn the potential risks in application configurations.

An inspection report is generated after a security inspection is performed. The report includes the description of each inspection item and suggestions on how to fix the related security issues. You can also configure periodic inspections. The results of each periodic inspection are logged to the specified Simple Log Service(SLS) project. For more information, see [Use the inspection feature to detect security risks in the workloads of an ACK cluster](/help/en/ack/ack-managed-and-ack-dedicated/security-and-compliance/use-the-inspection-feature-to-detect-security-risks-in-the-workloads-of-an-ack-cluster).

**Basic Information**

-   **Basic Information**: This section displays basic information about the cluster, such as cluster ID, region, time zone of the cluster, Kubernetes version, and the status of deletion protection.
    
-   **Network**: This section displays network information, such as container network plugin, virtual switch, endpoints of the API server, and Service CIDR block.
    
-   **Security and Auditing**: This section displays security and auditing information, such as the status of cluster audit logs.
    
-   **Cluster Resources**: This section displays resources used by the cluster, such as Resource Orchestration Service (ROS) stack and SLS projects. To check a resource in the corresponding console, click the resource ID.
    
    **Important**
    
    The resources are managed by ACK. Do not delete or modify the resources in case your cluster and the applications in the cluster cannot function as normal.
    
-   **Tag Group**: This section displays the resource group and labels of the cluster.
    

**Connection Information**

Obtain the kubeconfig file for public and private network access to configure your kubectl client. For more information, see [Connect to a cluster](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/access-clusters/).

**Cluster Monitoring**

ACK is integrated with Managed Service for Prometheus to allow you to monitor resources in your cluster. You can view the utilization of CPU, memory, and network resources and create alert rules. For more information, see [Enable Managed Service for Prometheus](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/use-managed-service-for-prometheus-to-monitor-an-ack-cluster).

**Costs Insights**

Enabling the cost insights feature to gain insights into the cost and resource usage of a specified cluster, department, or application within a specified financial governance cycle. This meets the requirements for cost estimation, allocation, and accounting in various scenarios. For more information, see [Cost insights](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/cost-insights-1/).

**Cluster Logs**

Cluster Operational Logs.

**Cluster Tasks**

View the history of cluster operations, including their status, affected resources, and timestamps. For failed operations, error details are provided to assist with troubleshooting and diagnosis.

**O&M Plan**

> Applicable to managed node pools only. Refer to [Create and manage node pools](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/create-a-node-pool) to enable and use the automated O&M capability.

Review the execution plans for automated operations, such as automatic responses to ECS system events, kubelet upgrades for node pools, and automatic Common Vulnerabilities and Exposures (CVE) patching. Click a plan ID to view the details and event history for a specific task. To learn more about the auto O&M capabilities in ACK, see [Automated O&M capabilities](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/node-pool-overview/#807e154b6au5m).
