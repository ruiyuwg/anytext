ACK regularly releases new OS image versions that provide new features, optimizations, and bug fixes. Change the OS image of a node pool to upgrade to the latest version or switch to a different OS type -- for example, to replace an OS that has reached its end of life (EOL).

For supported OS types, latest image versions, and OS-specific limitations, see [Release notes for OS images](/help/en/ack/product-overview/release-notes-for-os-images).

## Precautions

Changing the OS image replaces the system disks of nodes in batches. Review the following risks and perform this operation during off-peak hours.

### Data loss

-   **System disk data is erased.** Do not store important data on system disks, or back up the data before you proceed. Data disks are not affected.
    
-   **hostPath volume data on system disks is lost.** If pods use hostPath volumes that point to a system disk, the data in those volumes is lost after the update.
    

### Node behavior during the update

-   **Nodes are drained before replacement.** ACK drains each node and evicts pods to other available nodes based on [PodDisruptionBudget (PDB)](https://kubernetes.io/docs/concepts/workloads/pods/disruptions/#pod-disruption-budgets). Use a multi-replica deployment strategy to distribute workloads across multiple nodes. Configure PDB for critical services to control the number of pods interrupted at the same time.
    
-   **Node draining times out after 30 minutes.** If pod migration does not complete within 30 minutes, ACK terminates the update to maintain service stability.
    

### Configuration overwrite

-   **Custom node configurations are overwritten.** ACK reinitializes each node based on the current node pool configurations, including node logon methods, labels, taints, OS images, and runtime versions. Node pool configurations are normally updated by [editing a node pool](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/create-a-node-pool). Changes made outside of node pool editing are overwritten during the update.
    
-   **Other custom configurations may fail or be overwritten.** If your cluster uses custom swap partitions, kubelet configurations modified through the CLI, or runtime configurations, the update may fail or overwrite those customizations.
    

### Standalone nodes

Standalone nodes (worker nodes not managed by a node pool) are not supported. Migrate them to a node pool before you proceed. For more information, see [Migrate standalone nodes to a node pool](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/add-free-nodes-to-a-node-pool).

### cgroup v2

Some ACK operating systems use cgroup v2 by default. For cgroup v2 precautions, see [OS images](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/overview-of-os-images/#a553866bb5t4t).

### GPU driver compatibility

If you [customize the GPU driver version by specifying a version number](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/customize-the-gpu-driver-version-of-the-node-by-specifying-the-version-number) or [use an OSS URL](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/customize-the-node-gpu-driver-through-oss-url), the OS and driver version may become incompatible after the upgrade. Check [NVIDIA driver versions supported by ACK](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/ack-supported-nvidia-driver-version-list) and select the latest compatible driver.

### Upgrade to ContainerOS 3.4 or later

In [ContainerOS 3.4.0](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/containeros-release-record#7796642afa7bd), the system disk is set to read-only mode. A data disk must be attached to the node for the system to start. When upgrading to ContainerOS 3.4 or later, choose the appropriate path based on the data disks attached to your current node pool. Other versions are not affected.

**View the detailed procedure**

**Current data disk configuration**

**Upgrade path**

**Single data disk attached**

Follow the standard [procedure](#804183c00c5vm) below.

**Multiple data disks attached**

Create a new node pool: select ContainerOS 3.4 or later, attach one data disk, and scale out the required number of nodes. Migrate applications to the new node pool by disabling scheduling for the old pool or updating workload scheduling (for example, using labels). Then take the old node pool offline.

**No data disks attached**

**Option A -- Keep the current node pool:** Update the node pool configuration to attach one data disk and scale out new nodes. After the new nodes are running, gradually drain and remove the old nodes. **Option B -- Create a new node pool:** Follow the same migration procedure as for multiple data disks.

> For more information about creating and managing node pools, see [Create and manage a node pool](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/create-a-node-pool). To set a node to unschedulable, see [Drain a node and manage its scheduling status](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/overview-of-node-management/#1a240c2ce787y). To remove a node, see [Remove a node](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/remove-a-node-11).

## Change the OS image of a node pool

Run a precheck before replacing the OS image to avoid compatibility risks.

1.  Log on to the [ACK console](https://cs.console.alibabacloud.com). In the left navigation pane, click **Clusters**.
    
2.  On the **Clusters** page, find the target cluster and click its name. In the left navigation pane, choose **Nodes** > **Node Pools**.
    
3.  In the **Node Pools** list, find the target node pool. In the **Actions** column, choose ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/9109413471/p931477.png) > **Change Operating System**.
    
4.  Click **Precheck** to scan for potential risks.
    
    -   **Normal:** The precheck is successful. Proceed to the next step.
        
    -   **Abnormal:** The current cluster status is not affected. Follow the recommended solutions to fix the issues before you continue.
        
5.  Configure the replacement parameters and click **Start Replacement**.
    
    **Important**
    
    To avoid incompatibility risks, review [Release notes for OS images](/help/en/ack/product-overview/release-notes-for-os-images) before you start.
    

### Replacement parameters

**Parameter**

**Description**

**Destination Version**

The target OS image and version.

**Current Version**

The current OS version of the node pool (read-only).

**Update Node**

The nodes whose OS to replace. Select all nodes or specific nodes.

**Ignore Warnings**

Whether to ignore warning-level precheck items at the node pool level and continue with the replacement. Example: a pod in the node pool uses a hostPath that points to the system disk.

**Batch Replace**

**Maximum Number of Nodes per Batch**

The maximum number of nodes updated in parallel per batch.

**Automatic Pause Policy**

The policy for pausing the OS replacement between batches.

**Interval Between Batches**

The interval between batches, from 5 to 120 minutes. Available only when **Automatic Pause Policy** is set to **Do Not Pause**.

**Auto Snapshot**

Creates [snapshots](/help/en/ecs/user-guide/snapshot-overview) of system disks before replacement. Use this option to back up and restore data if the system disks contain important business data. Snapshots incur [snapshot fees](/help/en/ecs/snapshots-1). [Delete snapshots](/help/en/ecs/user-guide/delete-a-snapshot-1) that are no longer needed after the upgrade.

## References

-   [Update a node pool](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/node-pool-updates) -- Upgrade the kubelet and container runtime versions of a node pool.
    
-   [In-place updates and updates by replacing system disks](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/node-pool-updates#6bb86c60557cq) -- Detailed procedure and logic behind upgrading nodes by replacing system disks.
