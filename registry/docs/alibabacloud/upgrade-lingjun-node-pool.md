Updating the Lingjun node pool involves a precheck and the update**.** The precheck notifies you of the risks that may impact the update. After the cluster passes the precheck, you can update the kubelet and container runtime.

## Limitations

-   The Lingjun node pool can only be updated if it contains one or more nodes.
    
-   Updating the operating system is not supported.
    
-   Updating by replacing the system disk is not supported, nor is creating snapshots of nodes before updating.
    

## Description

The following components can be updated during a node pool update:

**Component**

**Description**

**Operations**

**Precautions**

kubelet

When the control plane uses a new kubelet version, you can update the kubelet on all nodes in a node pool to the new version. The new kubelet version that a node pool can use depends on the kubelet version used by the control plane.

Update the kubelet in-place.

For precautions on upgrading the kubelet version, refer to [Update ACK Lingjun clusters](/help/en/ack/ack-lingjun-managed-clusters/user-guide/upgrade-ack-lingjun-cluster).

Container runtime

If a new version of the container runtime is available, you can update the nodes in a node pool to the new version of the container runtime.

-   Update from Docker to a new version of containerd: Drain the node, uninstall Docker, and install containerd without replacing the system disk.
    
-   Update the containerd version: An in-place update is performed without draining the node.
    

**Note**

Updating the Docker version is not supported.

During the runtime upgrade process, pod probes and lifecycle hooks may fail, and pods may restart in place.

## Procedure

1.  Log on to the [ACK console](https://cs.console.alibabacloud.com). In the left-side navigation pane, click **Clusters**.
    
2.  On the **Clusters** page, find the cluster that you want to manage and click its name. In the left-side navigation pane, choose **Nodes** > **Node Pools**.
    
3.  On the **Node Pools** page, find the Lingjun node pool that you want to update, and choose **More** > **Kubelet Update**.
    
4.  Select the nodes to update and click **Precheck**.
    
    **Note**
    
    If the precheck fails or issues warnings, refer to [Suggestions on how to fix cluster issues](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/cluster-check-items-and-suggestions-on-how-to-fix-cluster-issues#section-f4g-7bd-f51) or click **View Details** to access the **Pre-check Details** section for troubleshooting.
    
5.  Click **Start Update**. Set the maximum number of nodes to update concurrently in each batch by adjusting the **Batch Update Policy** parameters.
    

## Related steps

During the update, you can perform the following actions on the page:

-   To pause or resume the update, click **Pause** or **Continue**.
    
    -   The paused status is an intermediate stage of node pool update. We recommend that you avoid performing any operations on the cluster during this time and complete the update promptly. If the update is paused for over seven days, the system will automatically terminate the process, and any related events and log data will be deleted.
        
    -   Once you click **Pause**, the kubelet and container runtime on nodes that have completed the update do not support version rollback.
        
    
-   To stop the update process, click **Cancel**.
    
    Once you click **Cancel**, the kubelet and container runtime on nodes that have completed the update do not support version rollback.
    

![节点池升级暂停](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/9913315761/p551015.png)

## **Reference information: In-place update**

### In-place update procedure

The node pool update process sequentially updates nodes based on the set maximum concurrency, which does not exceed 10% of the total number of nodes. The number of nodes updated per batch follows the sequence: 1, 2, 4, 8… until the maximum concurrency is reached. Subsequent batches will update nodes equal to the maximum concurrency. For example, if the maximum concurrency is set to 4, the first batch will update 1 node, the second batch will update 2 nodes, and the third and subsequent batches will update 4 nodes concurrently.

![图片1.png](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/3475246371/p712281.png)

## FAQs

### **How long does each batch update take?**

Each in-place update batch takes approximately 5 minutes.

### **Will** **my** **business be affected during the update?**

No, pods will not restart during the in-place update, ensuring no business impact.

### Can I roll back a node pool after I update it?

No, the kubelet and container runtime do not support version rollback after an update.

### **How do I** update **cluster nodes that do not belong to any node pool?**

For clusters created before the node pool feature was introduced, free nodes can be updated by first adding them to a node pool. For more information, see [Add free nodes to a node pool](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/add-free-nodes-to-a-node-pool).
