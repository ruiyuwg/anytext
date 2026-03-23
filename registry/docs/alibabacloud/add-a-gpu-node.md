Edge node pools in ACK Edge clusters allow you to manage on-premises GPU resources. This topic describes how to add GPU nodes to an edge node pool in an ACK Edge cluster.

## Prerequisites

-   An [ACK Edge cluster has been created](/help/en/ack/ack-edge/user-guide/create-an-ack-edge-cluster-1#task-skz-qwk-qfb).
    
-   You must install the GPU driver before you add a node. For more information about supported driver versions, see [Supported NVIDIA driver versions for ACK](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/ack-supported-nvidia-driver-version-list).
    

## Limits

-   Ensure that your cluster has a sufficient node quota. To add more nodes, [submit a request in the Quota Center](https://quotas.console.alibabacloud.com/products/csk/quotas) to increase the quota. For more information about the quota limits of ACK Edge clusters, see [Quotas and limits](/help/en/ack/product-overview/limits#concept-gsf-w2b-5db).
    
-   When you add GPU nodes, the nodes must access specific domain names. Ensure that the security group of the node allows access to these domain names. For more information, see [Domain names and IP CIDR blocks for node registration](/help/en/ack/ack-edge/user-guide/network-configuration-for-public-network-access).
    

## Procedure

## Clusters of version 1.26 or later

Starting from version 1.26, ACK Edge clusters automatically detect the GPU model and install the required components during NVIDIA GPU registration. You do not need to configure the `gpuVersion` parameter.

The process of adding GPU nodes is the same as that for adding other edge nodes. For more information, see [Add edge nodes](/help/en/ack/ack-edge/user-guide/add-an-edge-node).

**Note**

ACK Edge clusters of version 1.26 and later support the full range of NVIDIA production-grade GPUs, such as the Tesla series, Hopper (H-series), Ada Lovelace (A-series), and L-series.

## Clusters earlier than version 1.26

When you add GPU nodes to an ACK Edge cluster that is earlier than version 1.26, you must select a GPU model from the following list. If you need a different GPU model, [submit a ticket](https://smartservice.console.alibabacloud.com/console.htm).

**System architecture**

**GPU model**

**Edge Kubernetes cluster version**

AMD64/x86\_64

Nvidia\_Tesla\_T4

≥1.16.9-aliyunedge.1

AMD64/x86\_64

Nvidia\_Tesla\_P4

≥1.16.9-aliyunedge.1

AMD64/x86\_64

Nvidia\_Tesla\_P100

≥1.16.9-aliyunedge.1

AMD64/x86\_64

Nvidia\_Tesla\_V100

≥1.18.8-aliyunedge.1

AMD64/x86\_64

Nvidia\_Tesla\_A10

≥1.20.11-aliyunedge.1

AMD64/x86\_64

Nvidia\_L40

≥1.26.3-aliyun.1

1.  Log on to the [Container Service Management Console](https://cs.console.alibabacloud.com) . In the navigation pane on the left, click **Clusters**.
    
2.  On the **Clusters** page, click the name of your cluster. In the navigation pane on the left, click **Nodes** > **Node Pools**.
    
3.  On the **Node Pools** page, find the node pool that you want to manage, and in the **Actions** column, choose **![icon](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/5892161761/p537429.png) **\> Add Existing Node****.
    
4.  On the Add Node page, click **Manual** to add an existing instance.
    
5.  Click **Next**. On the Instance Information page, configure the parameters for node registration. For more information about the parameters, see [Parameter list](/help/en/ack/ack-edge/user-guide/add-an-edge-node#title-7bk-955-nc0).
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/8614641371/p863057.png)
    
    **Note**
    
    -   When you generate the node registration script, set the `gpuVersion` parameter. For more information about the supported GPU versions, see [Limits](#ftllR).
        
    -   After this parameter is configured, the registration tool automatically installs nvidia-containerd-runtime. For more information, see [nvidia-containerd-runtime](https://developer.nvidia.com/nvidia-container-runtime).
        
    
6.  After you complete the configuration, click **Next**. On the **Complete** page, click **Copy**, and then paste and execute the script on your edge node.
    
    The following figure shows that the node is added successfully.
    
    ![The node is added successfully.](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/5411971761/p433986.png)
    

## References

-   If you encounter issues while you add edge nodes, see [Troubleshoot edge node issues](/help/en/ack/ack-edge/user-guide/diagnose-edge-node-problems).
    
-   To remove unused edge nodes, see [Remove edge nodes](/help/en/ack/ack-edge/user-guide/remove-edge-nodes).
    
-   To enable autonomous operation for edge nodes so that workloads can continue to run stably during network disconnections between the cloud and the edge, see [Configure edge node autonomy](/help/en/ack/ack-edge/user-guide/configure-node-autonomy).
