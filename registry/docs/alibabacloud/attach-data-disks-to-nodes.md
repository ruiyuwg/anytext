By default, all node data in a Container Service for Kubernetes (ACK) cluster is stored on the system disk, including downloaded container images, container runtime data, temporary container data, and stdout logs. As these accumulate, the system disk fills up and node stability degrades.

Attach data disks to nodes to isolate this storage from the system disk. After a data disk is attached, ACK automatically mounts the kubelet and container runtime directories to the data disk during node initialization.

## Prerequisites

Before you begin, make sure that you have:

-   An ACK managed or dedicated cluster
    
-   Permissions to create and manage node pools in the [ACK console](https://cs.console.alibabacloud.com)
    

## Attach data disks when creating a node pool

This is the recommended approach. Configure data disks during node pool creation so that new nodes launch with dedicated storage.

1.  Log on to the [ACK console](https://cs.console.alibabacloud.com).
    
2.  Go to the **Node Pools** page and click **Create Node Pool**.
    
3.  In the Create Node Pool dialog box, add disks in the **Data Disk** section. For the full list of node pool parameters, see [Create a node pool](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/create-a-node-pool#task-2457443).
    

## Attach data disks to existing nodes

Data disks cannot be added to existing nodes directly. Instead, create a new node pool with data disks, migrate workloads from the original nodes, and then remove the original node pool.

**Important**

This procedure drains and deletes existing nodes. Running pods are evicted and rescheduled to the new node pool. Plan for potential service disruption during the migration.

### Step 1: Create a replacement node pool with data disks

1.  Log on to the [ACK console](https://cs.console.alibabacloud.com) and create a new node pool. For parameter details, see [Create a node pool](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/create-a-node-pool#task-2457443).
    
2.  Configure the following parameters:
    
    **Parameter**
    
    **Description**
    
    **Data Disk**
    
    Add the data disks to mount on each node.
    
    **Expected Nodes**
    
    Set this to the same number of nodes as the original node pool.
    

### Step 2: Drain the original nodes

1.  Go to the **Nodes** page and select the nodes that belong to the original node pool.
    
2.  Click **Drain** in the lower part of the page.
    
3.  In the Drain dialog box, review the information and click **OK** to drain all selected nodes simultaneously. ACK marks the nodes as unschedulable and migrates applications from the original node pool to the new node pool.
    

### Step 3: Remove the original node pool

1.  Go to the **Node Pools** page and find the original node pool.
    
2.  In the **Actions** column, click **Scale** and set **Expected Nodes** to **0**.
    
3.  In the **Actions** column, choose ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/3688776471/p953225.png) > **Delete** to delete the node pool. For deletion details and considerations, see [Delete a node pool](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/create-a-node-pool#e7778137b4t4f).
    

## References

-   [Create a node pool](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/create-a-node-pool#task-2457443) -- Full parameter reference for node pool configuration.
    
-   [Resize the system disk of a node](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/expand-the-system-disk-or-data-disk-of-a-node) -- Expand system or data disk capacity on existing nodes.
