This topic provides a summary of common operations for managing worker nodes in the Container Service for Kubernetes (ACK) Console. You can read this topic for detailed operations and the relevant usage notes.

Most operations are accessible on the **Nodes** page.

1.  Log on to the [ACK console](https://cs.console.alibabacloud.com). In the left navigation pane, click **Clusters**.
    
2.  On the **Clusters** page, click the name of the one you want to change. In the left navigation pane, choose **Nodes** > **Nodes**.
    

## **Node logon**

For scenarios such as node troubleshooting, performance monitoring, or executing custom scripts, you can log on to the corresponding ECS instance of the node.

-   Workbench connection: In the **Actions** column of the node list, choose **More > Workbench Connection**.
    
-   VNC connection: In the **Actions** column of the node list, select **More > VNC Connection**.
    

For additional remote connection methods to ECS instances, see [Methods for connecting to an ECS instance](/help/en/ecs/user-guide/connect-to-instance).

**Note**

If your operating system is ContainerOS, to mitigate security risks, ContainerOS does not support direct logon for untraceable operations and lacks SSH functionality. For necessary maintenance operations, see [Maintain ContainerOS nodes](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/work-with-the-administrative-container-of-containeros).

## **Node draining and scheduling status**

#### **Node draining**

In the **Actions** column of the node list, select **More** \> **Node Draining**, and follow the on-screen prompts to drain the node. This process involves evacuating the existing pods from the node and marking it as unschedulable, ensuring that no new pods will be scheduled on it.

Please note the following precautions.

-   Ensure sufficient resources on other nodes in the cluster to prevent application pods from becoming unschedulable.
    
-   Verify the node affinity rules and scheduling policies for pods on the node to be removed, to ensure their continued schedulability on other nodes after the node's removal.
    
-   Pods managed by DaemonSet will not be evicted.
    

#### **Change node scheduling status**

From the node list, select the desired node, and then click **Set Scheduling Status** at the page's bottom. Please read the precautions in the dialog box carefully, and follow the on-page prompts to finalize the operation.

Please note the following precautions.

-   You should perform this operation during off-peak hours as it may impact business operations.
    
-   Once a node is set to unschedulable, it will be labeled as SchedulingDisabled. While existing pods on the node will continue to serve externally, new pods will not be scheduled to this node.
    
-   Pods managed by DaemonSet will not be removed.
    

## **Node removal**

If you no longer require a worker node, you can remove it from the node pool or cluster via the ACK Console during off-peak hours. In the **Actions** column of the node list, choose **More** > **Remove**, or select the node and click **Batch Remove** in the lower part of the page. Then, simply follow the on-screen prompts to complete the process.

For related precautions and feature details, see [Remove a node](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/remove-a-node-11).

## **Node monitoring**

Click **Monitor** in the **Actions** column to install the component and enable Managed Service for Prometheus for node resource dashboard viewing. For configuring monitoring alerts with Managed Service for Prometheus, see [Connect to and configure Managed Service for Prometheus](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/use-managed-service-for-prometheus-to-monitor-an-ack-cluster#5ebd6dd0308cy).

For creating custom PromQL alert rules for abnormal node status, see [Best practices for configuring alert rules using Prometheus](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/best-practices-for-configuring-alert-rules-in-prometheus).

## **Node fault diagnosis**

For diagnosing issues with an abnormal node, click **Exception Diagnosis** in the **Actions** column. This will initiate an inspection and provide a repair plan. For details of supported diagnostic scenarios, inspection items, and repair plans, see [Node diagnostics](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/node-diagnostics).

## **Manage node labels and taints**

To manage and schedule cluster resources via labels and taints, navigate to the **Nodes** page, click **Manage Labels and Taints**, and follow the guide to configure names and values for labels and taints. For more information, see [Manage node labels and taints](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/manage-taints-and-tolerations).

## View node information

In the **Actions** column of the node list, select **More** \> **View in YAML** to view the YAML template of the node.

In the **Actions** column of the node list, click **Details** to view the node information.

-   CPU and memory usage
    
    -   CPU request = sum(requested CPU resources by all pods on the node)/total CPU resources on the node
        
    -   CPU utilization = sum(used CPU resources by all pods on the node)/total CPU resources on the node
        
    -   Memory request = sum(requested memory resources by all pods on the node)/total memory resources on the node
        
    -   Memory utilization = sum(used memory resources by all pods on the node)/total memory resources on the node
        
    
    **Note**
    
    Allocatable resources = Resource capacity - Reserved resources - Eviction threshold. For more details, see [Resource reservation policy](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/resource-reservation-policy).
    
-   Basic node information
    
    Includes node name, IP address, instance ID, container runtime version, operating system, kernel, etc.
    
-   Other informations
    
    Details of node CPU and memory resource allocation (Request and Limit), node status, pod list, node events, and more.
    

## **Batch operations on nodes**

You can perform batch operations on worker nodes in your cluster to improve O&M efficiency. Common use cases include securely updating the OS kernel or installing custom software packages for monitoring, security, or auditing. Before using this feature, you must activate CloudOps Orchestration Service (OOS) in the [OOS console](https://oos.console.alibabacloud.com/). [OOS](/help/en/oos/product-overview/introduction-to-oos) enables task automation through the execution of predefined templates.

> This feature is not supported on clusters with Auto Mode enabled.

1.  On the **Nodes** page of your cluster, select the target worker nodes from the list.
    
2.  Below the node list, click **Batch Operations**.
    
3.  In the dialog box that appears, select the desired operation and click **OK**.
    
    Supported operations include:
    
    -   Install operating system kernel security updates
        
    -   Install custom packages
        
    -   Install or uninstall YUM or APT packages
        
    -   Run Shell scripts
        
4.  You will be automatically redirected to the OOS console. Refer to [Create an execution](/help/en/oos/getting-started/execute-a-template) and follow the on-screen prompts to configure the basic information and required parameters for the task, then click **Create** to submit the execution.
    
5.  After submission, you will be automatically redirected to the **Task Execution Management** page in the OOS console. Click the Execution ID of your task to monitor its status, review the individual steps, and see the results.
    
    For more information about managing executions in OOS, see [Overview](/help/en/oos/user-guide/execution-overview).
    

## **References**

-   You can use the resource profiling feature provided by ACK to get resource configuration suggestions for containers based on the historical data of resource usage. This simplifies the configuration of resource requests and limits for containers. For more information, see [Resource profiling](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/resource-profiling).
    
    For more information about how to configure resources for application pods, see [Create a stateless workload (Deployment)](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/create-a-stateless-application-by-using-a-deployment#title-mft-059-9qk).
    
-   To configure node labels and a node selector to schedule application pods to specific nodes, see [Schedule application pods to the specified node](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/schedule-pods-to-specific-nodes).
    
-   For guidance on scaling up or down worker node resources, see [Upgrade or downgrade the configurations of a worker node](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/upgrade-the-configurations-of-a-worker-node).
    
-   To add a data disk to a node for storing resources like the container runtime and kubelet, see [Attach data disks to nodes](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/attach-data-disks-to-nodes).
    
-   For more information about how to resize the data disk or system disk, see [Resize the system disk or data disk of a node](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/expand-the-system-disk-or-data-disk-of-a-node).
    
-   Node upgrades, including kubelet and runtime versions, are managed at the node pool level. For more information, see [Update a node pool](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/node-pool-updates).
