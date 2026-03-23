This topic describes how to add a LINGJUN node pool to an ACK Managed Cluster Pro Edition.

## **Introduction to LINGJUN node pools**

-   A LINGJUN node pool in an ACK Managed Cluster Pro Edition has a one-to-one mapping with a [node group](/help/en/pai/user-guide/create-a-cluster#topic-2234451) of the [Intelligent Computing LINGJUN Service](/help/en/pai/user-guide/what-is-xxx) (LINGJUN bare metal cluster). This means that a node group of a LINGJUN Cluster corresponds to a single LINGJUN node pool of an ACK Managed Cluster Pro Edition, and a Node Lingjun instance can belong to only one LINGJUN node pool. By dividing nodes into LINGJUN node pools, you can apply different management policies to the Node Lingjun instances within an ACK Managed Cluster Pro Edition.
    
-   ACK Managed Cluster Pro Edition manages Node Lingjun instances using LINGJUN node pools. It supports node pool lifecycle management and the batch addition and removal of nodes. It provides management and operations and maintenance (O&M) capabilities that are almost identical to those of ECS node pools. These capabilities include node configuration, node O&M, application scheduling to specified node pools, monitoring and diagnostics, and automated O&M.
    
-   To provide enhanced cloud-native AI capabilities for Node Lingjun instances, you can [install the cloud-native AI suite](/help/en/ack/cloud-native-ai-suite/user-guide/deploy-the-cloud-native-ai-suite). LINGJUN node pools support topology-aware scheduling for multiple GPUs. They provide shared GPU scheduling and isolation using a GPU container virtualization solution. For tasks such as AI and High-Performance Computing (HPC), they support scheduling policies such as Gang, Capacity, and Binpack. They also support dataset orchestration and access acceleration.
    

**Note**

The LINGJUN node pool feature for ACK Managed Cluster Pro Edition is enabled through a whitelist. To use this feature, contact the Container Service team through your solution architect (SA).

## **Billing description**

When you use a LINGJUN node pool in an ACK Managed Cluster Pro Edition, the total cost consists of three parts: cluster management fees, LINGJUN node management fees, and cloud product resource fees.

## **Prerequisites**

Before you create a LINGJUN node pool for an ACK Managed Cluster Pro Edition, the following prerequisites must be met:

1.  Create a basic LINGJUN Cluster of the Lite type and scale out nodes in a LINGJUN node group. For more information, see [Create a cluster](/help/en/pai/user-guide/create-a-cluster).
    
2.  Create an ACK Managed Cluster Pro Edition that meets the following conditions:
    
    -   The ACK Managed Cluster Pro Edition and the LINGJUN bare metal cluster are in the same region and VPC.
        
    -   The ACK Managed Cluster Pro Edition is version 1.31 or later. Only IPv4 single-stack clusters are supported. IPv6 dual-stack clusters are not supported. To upgrade the cluster, see [Manually upgrade a cluster](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/update-the-kubernetes-version-of-an-ack-cluster).
        
    -   The network plugin is Terway. Different Node Lingjun instance types require different Terway versions. You must upgrade the terway-controlplane and terway-eniip components to the latest versions.
        
    -   The ack-rdma-device-plugin component is installed.
        
3.  When you use a LINGJUN node pool, you must retain ECS nodes to deploy some ACK control plane components. We recommend that you use three or more ECS nodes to ensure high availability (HA).
    
    **Important**
    
    To prevent system component pods from being scheduled to LINGJUN nodes and consuming resources, nodes in a LINGJUN node pool have the following labels and taints by default. If you want to run a pod on a LINGJUN node, you can add a toleration for this taint or delete the taint after you [upgrade components](#587e135bb4ycz). However, do not delete the default label.
    
    ```
    Label: alibabacloud.com/lingjun-worker:true
    Taint: Key:node-role.alibabacloud.com/lingjun
           Effect:NoSchedule
    ```
    
4.  LINGJUN node pools support only Node Lingjun instances with an operating system (OS) kernel version of 5.10 or later.
    

## **Entry points**

On the **Node Pools** page, you can create, edit, delete, and view the node pools in your cluster.

1.  Log on to the [ACK console](https://cs.console.alibabacloud.com). In the left navigation pane, click **Clusters**.
    
2.  On the **Clusters** page, find the cluster to manage and click its name. In the left navigation pane, choose **Nodes** > **Node Pools**.
    

## **Create a LINGJUN node pool**

You can configure the node pool in the console. The configuration includes basic, network, and storage settings. Note that some configuration items, especially those related to node pool availability and networking, cannot be changed after the node pool is created. Creating a node pool does not affect the nodes or services in other existing node pools.

On the **Node Pools** page, click **...** > **Create LINGJUN Node Pool**. In the Create LINGJUN Node Pool dialog box, complete the configurations and associate an existing LINGJUN Cluster and LINGJUN group.

After the node pool is created, you can modify its configuration items on the **Edit Node Pool** page. The following table indicates whether a configuration item can be modified after the node pool is created.

**Important**

LINGJUN node pools currently support storing container runtime data only on the system disk.

**Note**

For Node Lingjun instances that use **LINGJUN Connection**, you must submit a request to be added to the whitelist for the [ACK VPD CNI](/help/en/ack/product-overview/ack-vpd-cni) component. Before you create the LINGJUN node pool, install the ACK VPD CNI component on the Component Management page. When you create a LINGJUN node pool for a node group that uses **LINGJUN Connection**, ACK automatically adds the CIDR block of the LINGJUN group to the cluster security group and allows inbound access. ACK also automatically adds the `alibabacloud.com/lingjun-network-type: vpd` label to the node pool. Do not delete this label.

**Click to view the detailed configuration table.**

-   Basic Configuration
    
    **Configuration Item**
    
    **Description**
    
    **Modifiable**
    
    **Node Pool Name**
    
    Custom node pool name.
    
    Yes
    
    **Region**
    
    The region of the current cluster is selected by default and cannot be changed.
    
    No
    
    **Container Runtime**
    
    LINGJUN node pools support only ACK Managed Cluster Pro Edition that uses containerd as the container runtime.
    
    No
    
-   LINGJUN Resources
    
    **Configuration Item**
    
    **Description**
    
    **Modifiable**
    
    **LINGJUN Cluster**
    
    You can select a LINGJUN Cluster of the Lite type that is in the same VPC as the ACK cluster.
    
    No
    
    **LINGJUN Group**
    
    You can select a LINGJUN group that is in the same VPC as the LINGJUN node pool and is not associated with any LINGJUN node pool.
    
    No
    
-   Advanced Configuration
    
    Expand Advanced Options (Optional) to configure node labels, taints, and other information.
    
    **Configuration Item**
    
    **Description**
    
    **Modifiable**
    
    **Taints**
    
    Add taints to nodes. A **Taint** consists of a **Key**, a **Value**, and an **Effect**. A taint key can be prefixed. If you want to specify a prefixed taint key, add a forward slash (/) between the prefix and the remaining content of the key. For more information, see [Taints and tolerations](https://kubernetes.io/zh/docs/concepts/scheduling-eviction/taint-and-toleration?spm=a2c4g.11186623.0.0.76f068derYLXgN). The following limits apply to taints:
    
    -   **Key**: A key must be 1 to 63 characters in length, and can contain letters, digits, hyphens (-), underscores (\_), and periods (.). A key must start and end with a letter or digit.`[a-z0-9A-Z]`
        
        If you want to specify a prefixed key, the prefix must be a DNS subdomain name. A subdomain name consists of DNS labels that are separated by periods (.), and cannot exceed 253 characters in length. It must end with a forward slash (/). For more information about DNS subdomain names, see [DNS subdomain names](https://kubernetes.io/zh-cn/docs/concepts/overview/working-with-objects/names/#dns-subdomain-names).
        
    -   **Value**: A value cannot exceed 63 characters in length, and can contain letters, digits, hyphens (-), underscores (\_), and periods (.). A value must start and end with a letter or digit. You can also leave a value empty.`[a-z0-9A-Z]`
        
    -   You can specify the following **Effects** for a taint: **NoSchedule**, **NoExecute**, and **PreferNoSchedule**.
        
        -   **NoSchedule**: If a node has a taint whose **Effect** is **NoSchedule**, the system does not schedule pods to the node.
            
        -   **NoExecute**: Pods that do not tolerate this taint are evicted after this taint is added to a node. Pods that tolerate this taint are not evicted after this taint is added to a node.
            
        -   **PreferNoSchedule**: The system attempts to avoid scheduling pods to nodes with taints that are not tolerated by the pods.
            
    
    Yes
    
    **Node Labels**
    
    **Important**
    
    When you create a LINGJUN node pool, ACK automatically adds a label to the node pool to enable exclusive ENI mode. Do not delete this label after creation.
    
    Do not delete the default labels that are added to the LINGJUN node pool:
    
    -   `service.alibabacloud.com/exclude-node`
        
    -   `alibabacloud.com/lingjun-worker`
        
    -   `alibabacloud.com/lingjun-hpnzone`
        
    -   `alibabacloud.com/lingjun-zoneid`
        
    -   `alibabacloud.com/lingjun-network-type: vpd`
        
    -   `alibabacloud.com/lingjun-machine-type`
        
    -   `k8s.aliyun.com/exclusive-mode-eni-type: eniOnly`
        
    
    Add labels to nodes. A label is a key-value pair. A label key can be prefixed. If you want to specify a prefixed label key, add a forward slash (/) between the prefix and the remaining content of the key. The following limits apply to labels:
    
    -   Key: The name must be 1 to 63 characters in length, and can contain letters, digits, hyphens (-), underscores (\_), and periods (.). It must start and end with a letter or a digit.`[a-z0-9A-Z]`
        
        If you want to specify a prefixed label key, the prefix must be a [subdomain name](https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#dns-subdomain-names). A subdomain name consists of DNS labels that are separated by periods (.), and cannot exceed 253 characters in length. It must end with a forward slash (/).
        
        **The following prefixes are used by key Kubernetes components and cannot be used in node labels:**
        
        -   `kubernetes.io/`
            
        -   `k8s.io/`
            
        -   Prefixes that end with `kubernetes.io/` or `k8s.io/`. Example: `test.kubernetes.io/`.
            
            The following are the exceptions:
            
            -   `kubelet.kubernetes.io/`
                
            -   `node.kubernetes.io`
                
            -   Prefixes that end with `kubelet.kubernetes.io/`.
                
            -   Prefixes that end with `node.kubernetes.io`.
                
            
        
    -   Value: A value cannot exceed 63 characters in length, and can contain letters, digits, hyphens (-), underscores (\_), and periods (.). A value must start and end with a letter or digit. You can also leave a value empty.`[a-z0-9A-Z]`
        
    
    Yes
    

## **Add existing Node Lingjun instances**

To add Node Lingjun instances from a LINGJUN group to an ACK cluster as worker nodes, or to re-add removed worker nodes, you can add them in batches from the associated group to the LINGJUN node pool in the ACK console. After the nodes are added, you can manage them at the node pool level.

Adding existing Node Lingjun instances does not replace their operating systems, system disks, or data disks, and does not affect the data stored on them. The Node Lingjun instances that you want to add must belong to the LINGJUN group that is associated with the node pool and must not have been added to the node pool.

-   Log on to the [ACK console](https://cs.console.alibabacloud.com). In the navigation pane on the left, choose **Clusters**.
    
-   On the **Clusters** page, click the name of the target cluster. In the navigation pane on the left, choose **Node** > **Node Pools**.
    
-   On the **Node Pools** page, click ****⋮ > Add Existing Node****.
    
    **Note**
    
    After the Node Lingjun instances are successfully added, ACK Managed Cluster Pro Edition automatically adds the corresponding tags to them. You can view these tags in the [Intelligent Computing LINGJUN console](https://lingjun.console.alibabacloud.com).
    
    -   ack.aliyun.com: The ID of the ACK Managed Cluster Pro Edition that manages the Node Lingjun instances.
        
    -   ack.alibabacloud.com/nodepool-id: The ID of the LINGJUN node pool that manages the Node Lingjun instances.
        
    

## **Remove Node Lingjun instances**

-   Node Lingjun instances that are added to a node pool are not released when you delete the ACK cluster or the LINGJUN node pool. The instances are not automatically removed from the LINGJUN group by scaling in. You must monitor the billing status of your Node Lingjun instances to avoid extra charges.
    
-   Removing a Node Lingjun instance only removes it from the LINGJUN node pool. It does not remove the node from the LINGJUN group. For more management operations on Node Lingjun instances and groups, go to the [Intelligent Computing LINGJUN console](https://lingjun.console.alibabacloud.com).
    

## **Use the RDMA feature**

To enable Remote Direct Memory Access (RDMA) communication for Node Lingjun instances, navigate to the details page of the target cluster in the console. In the navigation pane on the left, choose **Operations** > **Add-ons** and manually install the `ack-rdma-device-plugin` component.

The network modes available for pods depend on the IP version of the computing network of the LINGJUN bare metal cluster that is associated with the LINGJUN node pool.

**Computing network IP version**

**Supported RDMA network modes**

**Configuration description**

IPv4

Only `hostNetwork` mode is supported.

Pods support RDMA communication only in `hostNetwork` mode.

IPv6

-   `hostNetwork` mode.
    
-   `non-hostNetwork` mode.
    

-   `hostNetwork` mode is used by default.
    
-   To use RDMA in `non-hostNetwork` mode, in the `ack-rdma-device-plugin` component configuration, **enable** Allow Pods to Use RDMA in `non-hostnetwork` Mode.
    

For more information, see [Use RDMA networks on Node Lingjun instances for pods](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/ack-managed-cluster-pro-version-lingjun-node-uses-rdma).

## **Use Terway exclusive ENI mode**

When you use Terway, LINGJUN node pools support only the exclusive elastic network interface (ENI) network mode and require Terway v1.14.4 or later. If your Terway component version is earlier than v1.14.4, upgrade the [terway-eniip](/help/en/ack/product-overview/terway) component as described in [Upgrade components](#587e135bb4ycz).

When you create a LINGJUN node pool, ACK automatically adds the `k8s.aliyun.com/exclusive-mode-eni-type: eniOnly` label to the node pool to enable exclusive ENI mode. Do not delete this label. For more information, see [Configure exclusive ENI network mode for a node pool](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/configure-a-node-pool-level-container-network).

> If your LINGJUN node pool does not have this label, it uses the shared ENI network mode.

**Important**

When a Node Lingjun instance uses the shared ENI mode for VPC network communication, pod network failures may occasionally occur. You can restart the pod to temporarily restore the service. To completely resolve this issue, upgrade the Terway component to the latest version during off-peak hours. Then, recreate the LINGJUN node pool in exclusive ENI mode and add the Node Lingjun instances to the new node pool.

## **Upgrade components**

When you create an ACK Managed Cluster Pro Edition, the latest component versions are used by default. When you create a LINGJUN node pool in an existing ACK Managed Cluster Pro Edition, you must upgrade the following components to the specified versions. To upgrade the components, navigate to the details page of the target cluster in the console and choose **Operations** > **Add-ons** in the navigation pane on the left.

**Component Name**

**Minimum Version Requirement**

[Kube Scheduler](/help/en/ack/product-overview/kube-scheduler)

v1.31

[terway-eniip](/help/en/ack/product-overview/terway)

v1.14.4

[CoreDNS](/help/en/ack/product-overview/coredns)

v1.11.3.5-5321daf49-aliyun

[NGINX Ingress controller](/help/en/ack/product-overview/nginx-ingress-controller#concept-2461414)

v1.11.4-aliyun.2

[ack-pod-identity-webhook](/help/en/ack/product-overview/ack-pod-identity-webhook)

v0.2.1

[security-inspector](/help/en/ack/product-overview/security-inspector#task-2552166)

v0.16.1.0-gea4d02f-aliyun

[alicloud-monitor-controller](/help/en/ack/product-overview/alicloud-monitor-controller#concept-1918110)

v1.8.4

[ack-arms-prometheus](/help/en/arms/prometheus-monitoring/prometheus-monitoring-change-records#concept-2473006)

v1.1.31

[logtail-ds](/help/en/sls/sls-release-notes#concept-w5w-q3q-zdb)

v2.1.6

[csi-provisioner](/help/en/ack/product-overview/csi-provisioner#concept-2043907)

v1.32.2

[csi-plugin](/help/en/ack/product-overview/csi-plugin#concept-2043905)

v1.32.2

[aliyun-acr-acceleration-suite](/help/en/ack/product-overview/aliyun-acr-acceleration-suite#concept-1955815)

v0.2.10

[ack-ai-installer](/help/en/ack/cloud-native-ai-suite/product-overview/ack-ai-installer) (Applications > Cloud-native AI Suite Installation)

v1.12.2

## **Related operations**

-   Use shared GPU scheduling.
    
    To use shared GPU scheduling on Node Lingjun instances in an ACK Managed Cluster Pro Edition and enable GPU sharing and isolation, you must first install the ack-ai-installer component of the cloud-native AI suite. For more information, see [Use shared GPU scheduling](/help/en/ack/ack-lingjun-managed-clusters/user-guide/use-shared-gpu-scheduling).
    
-   Enable the Binpack scheduling policy.
    
    When you run model training jobs in a LINGJUN node pool, you can enable the Binpack policy for pod scheduling. This policy prioritizes scheduling pods to the same machine to reduce cross-machine communication latency during training. For more information about how to enable binpack in the Kube Scheduler component, see [Custom parameters of kube-scheduler](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/customize-the-scheduler-parameters).
    
-   Use topology-aware scheduling in a LINGJUN node pool.
    
    To use topology-aware scheduling in a LINGJUN node pool, you must install Kube Scheduler and upgrade it to v1.31 or later. For more information, see [Use topology-aware scheduling](/help/en/ack/ack-lingjun-managed-clusters/user-guide/using-network-topology-aware-scheduling-in-lingjun-cluster).
    

## **FAQ**

### **Node remains in Not Ready state after repair**

-   **Background:** A Node Lingjun instance was taken offline for repair due to a hardware issue. After the repair is complete, the node's status is still Not Ready in the ACK cluster.
    
-   **Cause:** During offline repair, the Node Lingjun instance is replaced, and the data on its local disks is not retained. This clears the information of container runtimes such as kubelet and containerd, which causes the node to enter an abnormal state.
    
-   **Solution:** After the repair is complete, you must manually remove the node from the node pool and then re-add it using the Add Existing Nodes feature.
