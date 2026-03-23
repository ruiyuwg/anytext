ACK Edge clusters support adding various types of resources to edge node pools, such as Elastic Compute Service (ECS) nodes from different regions, IDC nodes, nodes from other cloud providers, and server nodes distributed in factories, outlets, vehicles, and ships. This topic describes how to add an edge node to an edge node pool in an ACK Edge cluster.

## Prerequisites

[An ACK Edge cluster is created](/help/en/ack/ack-edge/user-guide/create-an-ack-edge-cluster-1#task-skz-qwk-qfb).

## Limits

-   Make sure that your cluster has a sufficient node quota. To add more nodes, [submit a request to increase the quota](https://quotas.console.alibabacloud.com/products/csk/quotas). For more information about the quota limits of ACK Edge clusters, see [Quotas and limits](/help/en/ack/product-overview/limits#concept-gsf-w2b-5db).
    
-   When you add an edge node, the node needs to access some domain names. You must configure the security group of the node to allow access to these domain names. For more information, see [Configuration of domain name and IP routing network segment for edge node access](/help/en/ack/ack-edge/user-guide/network-configuration-for-public-network-access).
    
-   When you add an edge node, you must select an operating system for the node. The following operating systems are supported.
    
    **System architecture**
    
    **System version**
    
    **System kernel version**
    
    **Edge Kubernetes cluster version**
    
    AMD64/x86\_64
    
    Anolis7.9, Anolis8.6
    
    4.19.X
    
    ≥ 1.16.9-aliyunedge.1
    
    AMD64/x86\_64
    
    Alibaba Cloud Linux 2.1903
    
    4.19.X
    
    ≥ 1.20.11-aliyunedge.1
    
    AMD64/x86\_64
    
    Alibaba Cloud Linux 3
    
    5.10.X
    
    ≥ 1.20.11-aliyunedge.1
    
    AMD64/x86\_64
    
    CentOS 7.4, CentOS 7.5, CentOS 7.6, CentOS 7.7, CentOS 7.8, and CentOS 7.9
    
    3.10.X
    
    1.12.6-aliyunedge.1 ≤ cluster version ≤ 1.30.7-aliyun.1
    
    AMD64/x86\_64
    
    CentOS 8.0, CentOS 8.2
    
    4.18.X
    
    1.18.8-aliyunedge.1 ≤ cluster version ≤ 1.30.7-aliyun.1
    
    AMD64/x86\_64
    
    Ubuntu 16.04
    
    4.4.X
    
    1.18.8-aliyunedge.1 ≤ cluster version ≤ 1.30.7-aliyun.1
    
    AMD64/x86\_64
    
    Ubuntu 18.04
    
    4.15.X
    
    1.12.6-aliyunedge.1 ≤ cluster version ≤ 1.30.7-aliyun.1
    
    AMD64/x86\_64
    
    Ubuntu 18.04
    
    5.4.X
    
    ≥ 1.16.9-aliyunedge.1
    
    AMD64/x86\_64
    
    Ubuntu 18.04
    
    5.11.X
    
    ≥ 1.18.8-aliyunedge.1
    
    AMD64/x86\_64
    
    Ubuntu 20.04
    
    5.4.X
    
    ≥ 1.18.8-aliyunedge.1
    
    AMD64/x86\_64
    
    Ubuntu 20.04 and Ubuntu 22.04
    
    5.15.X
    
    ≥ 1.26.3-aliyun.1
    
    AMD64/x86\_64
    
    Ubuntu 24.04
    
    6.8.X
    
    ≥ 1.30.7-aliyun.1
    
    AMD64/x86\_64
    
    Red Hat Enterprise Linux 8.8, Red Hat Enterprise Linux 8.10
    
    4.18.X
    
    1.26.3-aliyun.1 ≤ cluster version ≤ 1.30.7-aliyun.1
    
    AMD64/x86\_64
    
    Kylin V10
    
    4.19.X
    
    ≥ 1.26.3-aliyun.1
    
    AMD64/x86\_64
    
    UnionTech OS Server 20
    
    4.19.X
    
    ≥ 1.26.3-aliyun.1
    
    AMD64/x86\_64
    
    Red Hat Enterprise Linux 9.3
    
    5.14.X
    
    ≥ 1.30.7-aliyun.1
    
    Arm64
    
    CentOS 8.0
    
    4.19.X
    
    ≥ 1.14.8-aliyunedge.1
    
    Arm64
    
    Ubuntu 18.04
    
    4.9.X
    
    1.14.8-aliyunedge.1 ≤ cluster version ≤ 1.30.7-aliyun.1
    
    Arm64
    
    Ubuntu 18.04
    
    4.19.X
    
    ≥ 1.14.8-aliyunedge.1
    
    Arm64
    
    Ubuntu 20.04
    
    5.10.X
    
    ≥ 1.22.15-aliyunedge.1
    
-   If you want to add a GPU node to the cluster, see [Add a GPU node](/help/en/ack/ack-edge/user-guide/add-a-gpu-node).
    

## Add a node

## Clusters that run Kubernetes 1.26 or later

1.  Log on to the [ACK console](https://cs.console.alibabacloud.com). In the left-side navigation pane, click **Clusters**.
    
2.  On the **Clusters** page, find the cluster to manage and click its name. In the left-side navigation pane, choose **Nodes** > **Node Pools**.
    
3.  On the **Node Pools** page, find the node pool that you want to manage and choose **![图标](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/5892161761/p537429.png) > Add Existing Node** in the **Actions** column.
    
4.  On the Add Existing Node page, configure the cloud-edge communication parameters and advanced options.
    
    **Note**
    
    If the following parameters cannot meet your requirements, you can modify the edgeadm parameters in the generated script based on the [parameters](#section-640-7ra-xed) below.
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/2108813471/p934460.png)
    
    **Category**
    
    **Parameter**
    
    **Description**
    
    Cloud-Edge Communication Configuration
    
    Token Validity Period
    
    The validity period of the script. The default value is 1 hour. When this parameter is set to 0 hours, the script is valid.
    
    If you need to use the same script for batch addition for a long time, you can increase the validity period of the script.
    
    Enable Silent Mode
    
    Specifies whether to enable the silent mode.
    
    During the edge node access process, some steps may require your intervention to make a judgment, such as whether to reinstall the runtime that already exists on the node.
    
    The default value is `Yes`, which means that all questions are automatically answered with `yes` to automatically advance the process.
    
    Advanced
    
    Node Labels
    
    Add labels to the node to be added.
    
    Node pools support adding labels to all nodes in the node pool. If the `label` conflicts with the `label key` on the node pool, the `label` defined on the node pool has a higher priority.
    
    Taints
    
    Add taints to the node to be added.
    
    Annotations
    
    Add annotations to the node to be added.
    
    If the `annotations` conflicts with the `annotations` on the node pool, the `annotations` defined on the node pool has a higher priority.
    
    Automatic Synchronize Time
    
    When this feature is enabled, edgeadm automatically completes time synchronization.
    
    Node Network Port
    
    The host network interface card name used to obtain the node IP address and for container network communication. If you leave this parameter empty, the network card corresponding to the default route will be automatically selected.
    
    The component is downloaded from
    
    The source of system component images on the node. The default is public network.
    
    When using a private network for downloading, the node must be connected to a leased line node pool.
    
    Runtime Working Directory
    
    The working directory of the runtime. This configuration takes effect only when `manageRuntime` is set to `true`.
    
    The default path for the containerd runtime is /var/lib/containerd.
    
5.  After the configuration is complete, click **OK**. On the submission result page, click **Copy**, paste the script on your edge node, and execute it.
    
    If the following result is returned, the edge node is added to the cluster.
    
    ![接入成功](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/5411971761/p433986.png)
    

## Clusters that run Kubernetes earlier than 1.26

1.  Log on to the [ACK console](https://cs.console.alibabacloud.com). In the left-side navigation pane, click **Clusters**.
    
2.  On the **Clusters** page, find the cluster to manage and click its name. In the left-side navigation pane, choose **Nodes** > **Node Pools**.
    
3.  On the **Node Pools** page, find the target node pool and choose **More** ![图标](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/5892161761/p537429.png) **\>** **Add Existing Node** in the Actions column.
    
4.  On the Add Node page, the **Manual** mode is selected by default to add existing instances.
    
    **Note**
    
    In manual mode, you can add ECS instances, ENS instances, and edge nodes.
    
    1.  Click **Next Step** to go to the Instance Information page. You can fill in the node access configuration here. For specific configuration parameters, see [Parameters](#title-7bk-955-nc0).
        
        ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/2108813471/p859287.png)
        
        **Note**
        
        The default value of **Script Validity Period** is 1 hour. If you need to use the same script for batch addition for a long time, you can increase the validity period of the script. When **Script Validity Period** is set to 0 hours, the script is always valid.
        
    2.  After the configuration is complete, click **Next Step**. On the **Complete** page, click **Copy**, paste the script on your edge node, and execute it.
        
    
    If the following result is returned, the edge node is added to the cluster.
    
    ![接入成功](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/5411971761/p433986.png)
    

## Parameters

If the parameters on the console cannot meet your requirements, you can modify the edgeadm parameters in the generated script based on the following table.

**Parameter**

**Console-equivalent parameters**

**Description**

**Valid value**

`quiet`

**Enable Silent Mode**

Specifies whether to enable the silent mode. During the node access process, some steps may require your intervention to make a judgment, such as whether to reinstall the runtime that already exists on the node.

-   `true`: The default value. All questions are automatically answered with `yes` to automatically advance the process.
    
-   `false`: During the node access process, the process may be paused to obtain your confirmation, and the node access process may be interrupted.
    

`manageRuntime`

N/A

Specifies whether `edgeadm` detects and installs the runtime.

-   `true`: The default value. Detects and installs the runtime.
    
-   `false`: Does not install the runtime. You need to install the runtime on the node in advance.
    

`nodeNameOverride`

N/A

The name of the node.

-   `""`: The default value. Uses the hostname.
    
-   `"XXX"`: Specifies the node name as XXX.
    
-   `"*"`: Randomly generates a 6-character string.
    
-   `"*.XXX"`: Randomly generates a 6-character string with the XXX suffix.
    

`allowedClusterAddons`

N/A

The components to be installed. For a regular node, set this parameter to \["kube-proxy","flannel","coredns"\].

Default value: `["kube-proxy","flannel","coredns"]`

`gpuVersion`

N/A

Specifies whether the node to be added is a GPU-accelerated node. By default, this parameter is empty.

For the supported GPU versions, see [GPU models](/help/en/ack/ack-edge/user-guide/add-a-gpu-node#3fc96a390ehkl).

`""`: The default value. The node is not added as a GPU node.

Starting from ACK Edge cluster 1.26, when adding an NVIDIA GPU, you do not need to configure the `gpuVersion` parameter. The access tool automatically checks the GPU model and installs the relevant components.

`labels`

**Node Labels**

Specifies the labels to be added to the node. Node pools support adding labels to all nodes in the node pool. If the `label` conflicts with the `label key` on the node pool, the `label` defined on the node pool has a higher priority.

`{}`: Does not add any labels.

`annotations`

**Annotations**

Specifies the annotations to be added to the node configurations. If the `annotations` conflicts with the `annotations` on the node pool, the `annotations` defined on the node pool has a higher priority.

`{}`: Does not add any annotations.

`taints`

**Taints**

Specifies the taints to be added to the node.

`[]`

`nodeIface`

N/A

Specifies the host network interface card. This parameter has two functions:

-   kubelet obtains the node IP information from the specified network interface card.
    
-   Sets the network interface card used by the container network plug-in flannel.
    

`""`: If you leave this parameter empty, kubelet obtains the node IP in the following order.

-   Looks for a record with the same name as the hostname in /etc/hosts.
    
-   Retrieves the IP address of the network interface that is specified in the default route entry of the node.
    

Flannel will use the network interface card in the default route of the node.

`runtimeRootDir`

**Runtime Working Directory**

Specifies the working directory of the runtime. This configuration takes effect only when `manageRuntime` is set to `true`.

`""`: The default value.

-   When the runtime is Docker, the default path is /var/lib/docker.
    
-   When the runtime is containerd, the default path is /var/lib/containerd.
    

`imageRepoType`

**The component is downloaded from**

Specifies the source of system component images on the node.

-   `""`: The default value. Nodes in a leased line node pool download images from the internal network, and nodes in a regular node pool download images from the public network.
    
-   `public`: Downloads images from the public network.
    
-   `private`: Downloads images from the internal network. The node is connected to a leased line node pool.
    

`selfHostNtpServer`

**Auto Synchronize Time**

Specifies whether to manually synchronize the time.

-   `false`: The default value. edgeadm automatically synchronizes the time.
    
-   `true`: Automatic time synchronization is not required because time synchronization has been manually completed.
    

`flannelIface`

**Node Network Port**

The network interface card name used by flannel (not recommended, you can use the **nodeIface** parameter instead).

`""`: The default value. Flannel uses the network interface card used by the default route of the node.

`enableIptables`

N/A

Specifies whether edgehub enables iptables optimization (not recommended, deprecated after version 1.22).

`false`: Does not enable iptables.

## **References**

-   For more information about how to deal with the issues when you add an edge node, see [Diagnose edge node problems](/help/en/ack/ack-edge/user-guide/diagnose-edge-node-problems).
    
-   For more information about how to remove an unused edge node, see [Remove edge nodes](/help/en/ack/ack-edge/user-guide/remove-edge-nodes).
    
-   For more information about how to implement self-management of edge nodes, see [Configure edge node autonomy](/help/en/ack/ack-edge/user-guide/configure-node-autonomy). After configuration, when the cloud-edge network is disconnected, the workloads on the edge node can continue to run stably.
