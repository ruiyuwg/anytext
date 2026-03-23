After you enable the managed node pool feature, you can turn on node auto repair. Container Service for Kubernetes (ACK) then continuously monitors node health and triggers self-healing tasks when it detects issues, reducing the operational burden of manual node maintenance. Because some failures are too complex or severe for automated recovery, certain issues may still require manual intervention.

## How it works

Node auto repair follows a four-stage workflow: fault detection, notification, optional GPU fault isolation, and automated repair.

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/3533255671/CAEQUBiBgMCSpMfF2BkiIDMxNDkyMzczYmU4YTQ0M2M4NDRkZDFhMzFhNDYxNzBk5242428_20250606112741.064.svg)

1.  **Fault diagnosis and detection** ACK uses the ack-node-problem-detector (NPD) add-on to check for node exceptions. If a node becomes unhealthy and remains in that state for a specified period, ACK considers the node to have failed.
    
2.  **Fault notification** When a fault is detected, ACK generates a node condition and a Kubernetes event. Configure alerts in the Event Center to receive notifications.
    
3.  **(For** [**exclusive GPUs**](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/gpu-scheduling/) **) Fault isolation** After a GPU exception is detected, ACK isolates the faulty GPU card. > For more information about GPU fault detection and automatic isolation, see [GPU exception detection and automatic isolation](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/anomaly-diagnosis-in-gpu-accelerated-nodes).
    
4.  **Node auto repair process** The repair process differs depending on the type of exception:
    
    -   **System and Kubernetes add-on exceptions**: ACK repairs the faulty system and Kubernetes add-ons -- for example, by restarting the kubelet or the container runtime. If **Reboot Node on System/Kubernetes Component Failure** is allowed and the initial repair fails, ACK marks the node as unschedulable, drains it, restarts it, and then makes it schedulable again when the node recovers. For the detailed process, see [System and Kubernetes add-on anomalies](#6ba9369e74b06).
        
    -   **Node instance exceptions**: ACK adds a taint to the faulty node, optionally waits for authorization (if **Repair Nodes Only After Acquiring Permissions** is enabled), drains the node, and performs a repair action such as restarting the node or initiating a hardware repair. When the node recovers, ACK removes the taint. For the detailed process, see [Node instance anomalies](#d489e7c734de3).
        

### Serial repair behavior

ACK repairs nodes serially as a safety mechanism to prevent cascading disruptions:

-   If a cluster contains multiple node pools, ACK repairs them one node pool at a time.
    
-   If a node pool contains multiple unhealthy nodes, ACK repairs them one by one. If a node fails to heal, ACK stops the auto repair process for all other faulty nodes in that node pool.
    

## Before you begin

### Prerequisites

-   This feature requires the [ack-node-problem-detector](/help/en/ack/product-overview/ack-node-problem-detector#concept-1935269) add-on to detect node exceptions and the Event Center to receive alerts for node pool events. For more information, see [Event monitoring](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/event-monitoring#section-lc9-i27-ecw).
    
-   This feature is available only for ACK managed clusters and is supported for managed node pools and Lingjun node pools.
    

### Phased-release features

The following features are being released in phases and may have different rollout schedules. To use them, [submit a ticket](https://smartservice.console.alibabacloud.com/console.htm) to request access.

-   **Auto repair for node instance exceptions**: This is on an allowlist basis.
    
-   **Node auto repair for Lingjun node pools**: This is on an allowlist basis.
    
-   **Alert rule sets**: After enabling node auto repair, we recommend enabling alert management and activating the **Cluster Node auto repair Alert Rule Set** and **Cluster GPU Monitoring Alert Rule Set**. This ensures you receive alerts when an exception occurs. The corresponding rule sets are in a phased release and may not be visible yet. > To learn how to enable the rule sets, see [Container Service Alert Management](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/alert-management).
    
-   [**NPD**](/help/en/ack/product-overview/ack-node-problem-detector#concept-1935269) **version**: Auto repair for node instance exceptions requires NPD version 1.2.26 or later. Version 1.2.26 is currently in a phased release.
    

## Configure node auto repair

Enable and configure node auto repair for a new or existing node pool through its managed configuration. Node pools and Lingjun node pools have similar steps. The following steps use a standard node pool as an example.

## New node pools

1.  Log on to the [ACK console](https://cs.console.alibabacloud.com). In the left navigation pane, click **Clusters**.
    
2.  On the **Clusters** page, find the cluster to manage and click its name. In the left navigation pane, choose **Nodes** > **Node Pools**.
    
3.  On the **Node Pools** page, click **Create Node Pool**. In the **Configure Managed Node Pool** section, select **Custom Node Management**. Enable **Auto Repair** and configure the repair option **Reboot Node on System/Kubernetes Component Failure**. Follow the on-screen instructions to complete the creation of the node pool. For a complete description of the configuration options, see [Create and manage a node pool](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/create-a-node-pool). For important considerations regarding node restarts and authorization, see the sections below.
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/3533255671/p910026.png)
    

## Existing node pools

1.  Log on to the [ACK console](https://cs.console.alibabacloud.com). In the left navigation pane, click **Clusters**.
    
2.  On the **Clusters** page, find the cluster to manage and click its name. In the left navigation pane, choose **Nodes** > **Node Pools**.
    
3.  In the node pool list, find the target node pool. In the **Actions** column, click ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/4708837471/p931494.png) > **Enable Managed Node Pool** (for a regular node pool) or **Configure Managed Node Pool** (for a managed node pool). In the **Configure Managed Node Pool** section, select **Custom Node Management**. Enable **Auto Repair** and configure the repair option **Reboot Node on System/Kubernetes Component Failure**. Follow the on-screen instructions to submit the configuration. For a complete description of the configuration options, see [Create and manage a node pool](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/create-a-node-pool). For important considerations regarding node restarts and authorization, see the sections below.
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/3533255671/p910026.png)
    

## System and Kubernetes add-on anomalies

### Detailed repair process

ACK initiates a repair task based on information such as the node's `condition`. Run the `kubectl describe node` command to view the node's status in the `condition` field.

When ACK detects a system or Kubernetes add-on exception that persists beyond a specified threshold, it automatically starts the repair process:

1.  ACK attempts to repair the faulty system and Kubernetes add-ons. For example, it may restart the kubelet or the container runtime.
    
2.  If **Reboot Node on System/Kubernetes Component Failure** is allowed and the initial repair actions fail, ACK takes the following steps:
    
    1.  ACK automatically marks the faulty node as unschedulable.
        
    2.  ACK drains the faulty node that requires a restart. The drain operation times out after 30 minutes. When draining a node, ACK evicts the pods while respecting any configured [Pod Disruption Budgets (PDBs)](https://kubernetes.io/docs/concepts/workloads/pods/disruptions/#pod-disruption-budgets). To ensure high service availability, we recommend deploying your workloads with multiple replicas across different nodes. Also, configure PDBs for critical services to control concurrent disruptions. If the drain fails, ACK still proceeds with the subsequent steps.
        
    3.  ACK restarts the node.
        
    4.  When the node's status returns to normal, ACK makes the node schedulable again. If a node was already unschedulable before the process began, ACK will not automatically make it schedulable after the repair.
        

### Conditions that trigger auto repair

****Node condition****

****Description****

****Risk level****

****Threshold****

****Repair action****

`KubeletNotReady(KubeletHung)`

The kubelet has stopped unexpectedly, causing the node to report a `NotReady` status.

High

180s

1\. Restart the kubelet.  
2\. If **Reboot Node on System/Kubernetes Component Failure** is allowed, restart the ECS instance.  

`KubeletNotReady(PLEG)`

The PLEG health check has failed, causing the node to report a `NotReady` status.

Medium

180s

1\. Restart containerd or Docker.  
2\. Restart the kubelet.  
3\. If **Reboot Node on System/Kubernetes Component Failure** is allowed, restart the ECS instance.  
  

`KubeletNotReady(SandboxError)`

PodSandbox not found, preventing the kubelet from starting correctly.

High

180s

1\. Delete the corresponding sandbox container.  
2\. Restart the kubelet.  

`RuntimeOffline`

containerd or Docker has stopped, making the node unavailable.

High

90s

1\. Restart containerd or Docker.  
2\. If **Reboot Node on System/Kubernetes Component Failure** is allowed, restart the ECS instance.  

`NTPProblem`

The time synchronization service (ntpd or chronyd) is abnormal.

High

10s

Restart ntpd or chronyd.

`SystemdOffline`

The Systemd state is abnormal, preventing containers from being started or stopped.

High

90s

If **Reboot Node on System/Kubernetes Component Failure** is allowed, restart the ECS instance.

`ReadonlyFilesystem`

The node's file system has become read-only.

High

90s

If **Reboot Node on System/Kubernetes Component Failure** is allowed, restart the ECS instance.

## Node instance anomalies

> Ensure that you have completed the preparations described in [Before you begin](#title-da7-qjq-0kv).

### Detailed repair process

**Important**

When a Lingjun node fails and requires hardware repair, the repair process redeploys the node and erases all data on its local disks. In this scenario, we recommend enabling **Repair Nodes Only After Acquiring Permissions** for the node pool so you can back up data before authorizing the repair.

ACK automatically triggers the following repair process 5 minutes after a node instance exception occurs.

1.  After detecting an exception, ACK adds the following taint to the faulty node:
    
    -   Key: `alibabacloud.com/node-needrepair`
        
    -   Value: `Unschedulable`
        
    -   Effect: `NoSchedule`
        
2.  If **Repair Nodes Only After Acquiring Permissions** is enabled, ACK waits for your authorization before proceeding. > If you need to handle the workloads on the unhealthy node first, we recommend enabling **Repair Nodes Only After Acquiring Permissions**. ACK will only begin the repair after you grant authorization.
    
    1.  ACK automatically adds the label `alibabacloud.com/node-needrepair=Inquiring` to the faulty node.
        
    2.  You can handle the pods running on the node or back up your data first. Once you have finished, authorize the repair by deleting the `alibabacloud.com/node-needrepair` label or setting its value to `Approved` (`alibabacloud.com/node-needrepair=Approved`).
        
    3.  After receiving your authorization, ACK proceeds with the next steps.
        
3.  If **Repair Nodes Only After Acquiring Permissions** is not enabled, ACK automatically proceeds with the next steps after detecting the exception.
    
4.  ACK drains the node. The drain operation times out after 30 minutes. When draining a node, ACK evicts the pods while respecting any configured [PDBs](https://kubernetes.io/docs/concepts/workloads/pods/disruptions/#pod-disruption-budgets). To ensure high service availability, we recommend deploying your workloads with multiple replicas across different nodes. Also, configure PDBs for critical services to control concurrent disruptions. If the drain fails, ACK still proceeds with the subsequent steps.
    
5.  ACK performs a repair action, such as restarting the node or initiating a hardware repair.
    
6.  ACK checks whether the node's status has returned to normal.
    
    -   If the fault is resolved, ACK removes the taint, and the node returns to a normal state.
        
    -   If the fault persists or the repair process fails, the taint is not removed. ACK periodically sends event notifications. You can view the events for troubleshooting or [submit a ticket](https://smartservice.console.alibabacloud.com/console.htm).
        
7.  (For [exclusive GPUs](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/gpu-scheduling/)) When the GPU card's status returns to normal, ACK removes its isolation.
    

### Conditions that trigger auto repair (GPU-related)

**Important**

If a hardware repair is performed on a Lingjun node, you must manually remove the node from the node pool after the repair is successful. Then, re-add the repaired device to the node pool by adding it as an existing node. For more information and important considerations, see [Remove a node](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/remove-a-node-11) and [Add an existing Lingjun node](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/create-and-manage-lingjun-node-pools#9161182e88g90).

The following tables list GPU-related node conditions that trigger auto repair, grouped by repair action.

#### Hardware repair conditions

The following conditions require offline intervention and result in a hardware repair.

****Node condition****

****Description****

`NvidiaXID74Error`

Indicates a fatal NVLink hardware error. This severe failure requires offline repair.

`NvidiaXID79Error`

Indicates the GPU has "fallen off the bus" -- meaning it is no longer detectable by the system. This severe hardware failure requires offline repair.

`NvidiaRemappingRowsFailed`

The GPU has failed to perform a row remapping.

`NvidiaDeviceLost`

The GPU has fallen off the bus or has otherwise become inaccessible.

`NvidiaInfoRomCorrupted`

The infoROM is corrupted.

`NvidiaPowerCableErr`

A device's external power cables are not properly attached.

#### Node restart conditions

The following conditions are resolved by restarting the node.

****Node condition****

****Description****

`NvidiaXID95Error`

Indicates an uncontained ECC error. All applications on the GPU are affected. The GPU must be reset before applications can be restarted.

`NvidiaXID48Error`

Indicates a Double Bit ECC Error (DBE). This uncorrectable error requires a GPU reset or node restart to clear.

`NvidiaXID119Error`

A timeout occurred while waiting for the GSP core to respond to an RPC message.

`NvidiaXID140Error`

Indicates an unrecovered ECC error. The driver detected uncorrectable errors in GPU memory, requiring a GPU reset.

`NvidiaXID120Error`

An error occurred in the code running on the GPU's GSP core.

`NvidiaPendingRetiredPages`

The GPU has pending retired pages that require a GPU reset to take effect.

`NvidiaRemappingRowsRequireReset`

The GPU has an uncorrectable, uncontained error that requires a GPU reset for recovery.

`NvidiaXID44Error`

Indicates a Graphics Engine fault during a context switch. This uncorrectable error requires a GPU reset or node restart.

`NvidiaXID61Error`

Indicates an internal micro-controller breakpoint or warning. This uncorrectable error requires a GPU reset or node restart.

`NvidiaXID62Error`

Indicates an internal micro-controller halt. This uncorrectable error requires a GPU reset or node restart.

`NvidiaXID69Error`

Indicates a Graphics Engine class error. This uncorrectable error requires a GPU reset or node restart.

> For more information about these items, such as the node conditions they generate and whether they produce an event, see [GPU exception detection and automatic isolation](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/anomaly-diagnosis-in-gpu-accelerated-nodes).

## Node status during the auto repair process

The node status in the ACK console reflects the current state of the repair:

****Status****

****Meaning****

**Repairing**

A repair task is in progress.

Normal state

The repair is complete and the fault is resolved.

**Recovery failed**

The repair is complete but the fault persists.

A node in the **Recovery failed** state will not trigger another auto repair operation until the underlying fault is resolved.

## View node auto repair events

When ACK triggers a node auto repair operation, it logs corresponding events in the **Event Center**. On your cluster's details page, choose **Operations** > **Event Center** to view records of automatic recoveries and the specific actions taken. You can subscribe to these events as described in [Event monitoring](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/event-monitoring).

****Event****

****Level****

****Description****

`NodeRepairStart`

Normal

Node auto repair has started.

`NodeRepairAction`

Normal

A node auto repair action was performed, such as restarting the kubelet.

`NodeRepairSucceed`

Normal

Node auto repair succeeded.

`NodeRepairFailed`

Warning

Node auto repair failed. For troubleshooting, see the [FAQ](#section-fvq-yc3-u5d) section below.

`NodeRepairIgnore`

Normal

Node auto repair was skipped because the ECS instance was not in a running state.

## FAQ

### What should I do if node auto repair fails?

Due to the complexity of some failures, auto repair cannot resolve all failures. When an auto repair task fails or the fault persists after the task is complete, ACK sets the node's status to **Recovery failed**. If a node fails to heal, ACK stops the auto repair process for other faulty nodes in that node pool until the initial fault is resolved. [Submit a ticket](https://smartservice.console.alibabacloud.com/console.htm) to contact technical support.

## Related documents

-   We recommend enabling NPD and monitoring cluster events through the Event Center. For more information, see [Event monitoring](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/event-monitoring).
    
-   For more information about GPU fault detection, see [GPU exception detection and automatic isolation](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/anomaly-diagnosis-in-gpu-accelerated-nodes) and [Diagnose GPU node issues](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/use-node-diagnosis-to-self-troubleshoot-gpu-node-problems).
    
-   To resolve a node issue by removing the faulty node and adding it back, follow the documented procedures in the [ACK console](https://cs.console.alibabacloud.com) to prevent unexpected behavior. For more information, see [Remove a node](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/remove-a-node-11) and [Add existing nodes](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/add-existing-ecs-instances-to-an-ack-cluster).
