You can retrieve Elastic Compute Service (ECS) metadata, such as instance IDs, VPC information, and network interface card (NIC) information, from within an ECS instance using the Metadata Service. By default, nodes in an ACK cluster can access instance metadata in both normal and enhanced modes. You can switch to enhanced mode only (IMDSv2) to improve the security of the instance metadata service.

After you switch to enhanced mode only, applications on the node cannot access the ECS instance metadata service in normal mode. For more information about ECS instance metadata access modes, see [Instance metadata](/help/en/ecs/user-guide/view-instance-metadata/).

## Prerequisites

-   An [ACK managed cluster](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/create-an-ack-managed-cluster-2/) or an [ACK dedicated cluster](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/create-an-ack-dedicated-cluster/) that runs version 1.28 or later. To upgrade a cluster, see [Manually upgrade a cluster](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/update-the-kubernetes-version-of-an-ack-cluster).
    
-   If the components in the following table are installed in your cluster, make sure that their versions and the cluster version meet the minimum requirements for enhanced mode only.
    
    **Expand**
    
    ## ACK managed cluster
    
    **Component name**
    
    **Minimum component version**
    
    **Minimum cluster version**
    
    cloud-controller-manager
    
    v2.11.3
    
    1.28
    
    terway
    
    v1.9.16
    
    1.30
    
    terway-eni
    
    v1.9.16
    
    1.30
    
    terway-eniip
    
    v1.9.16
    
    1.30
    
    terway-eniip
    
    v1.14.0
    
    1.31
    
    terway-controlplane
    
    v1.9.16
    
    1.30
    
    terway-controlplane
    
    v1.14.0
    
    1.31
    
    ack-erdma-controller
    
    0.2.6
    
    1.28
    
    mse-ingress-controller
    
    1.1.18
    
    1.28
    
    alb-ingress-controller
    
    v2.18.0-aliyun.1
    
    1.28
    
    csi-provisioner
    
    v1.33.3-884df97-aliyun
    
    1.28
    
    csi-plugin
    
    v1.33.3-884df97-aliyun
    
    1.28
    
    storage-operator
    
    v1.32.10
    
    1.28
    
    flexvolume
    
    No supported version. Migrate to csi-plugin. For more information, see [Migrate from FlexVolume to CSI](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/upgrade-from-flexvolume-to-csi/).
    
    kritis-validation-hook
    
    v0.12.0.0-g1535b25b-aliyun
    
    1.28
    
    aliyun-acr-credential-helper
    
    v25.07.21.1-67f1f51-aliyun
    
    1.28
    
    logtail-ds
    
    v2.1.14.0-aliyun
    
    1.28
    
    loongcollector
    
    3.1.1
    
    1.28
    
    metrics-server
    
    v0.3.9.7-85b3699-aliyun
    
    1.28
    
    alicloud-monitor-controller
    
    v1.8.4
    
    1.28
    
    ack-node-problem-detector
    
    1.2.26
    
    1.28
    
    arms-prometheus
    
    1.1.32
    
    1.28
    
    ack-cost-exporter
    
    1.0.18
    
    1.28
    
    ack-sysom-monitor
    
    1.1.2
    
    1.28
    
    arms-cmonitor
    
    4.1.2
    
    1.28
    
    ack-onepilot
    
    5.0.0
    
    1.28
    
    cluster-autoscaler
    
    v1.3.18-48f43128-aliyun
    
    1.28
    
    ack-goatscaler
    
    v0.4.5-17c5a32-aliyun
    
    1.28
    
    migrate-controller
    
    v1.8.6-17482bb-aliyun
    
    1.28
    
    ack-acr-acceleration-p2p
    
    0.3.10
    
    1.28
    
    csi-secrets-store-provider-alibabacloud
    
    0.5.0
    
    1.28
    
    ack-secret-manager
    
    0.5.12
    
    1.28
    
    ack-extend-network-controller
    
    v0.12.0
    
    1.28
    
    ## ACK dedicated cluster
    
    **Component name**
    
    **Minimum component version**
    
    **Minimum cluster version**
    
    cloud-controller-manager
    
    v2.11.3
    
    1.28
    
    terway
    
    v1.9.16
    
    1.30
    
    terway-eni
    
    v1.9.16
    
    1.30
    
    terway-eniip
    
    v1.9.16
    
    1.30
    
    terway-eniip
    
    v1.14.0
    
    1.31
    
    terway-controlplane
    
    v1.9.16
    
    1.30
    
    terway-controlplane
    
    v1.14.0
    
    1.31
    
    ack-erdma-controller
    
    0.2.6
    
    1.28
    
    mse-ingress-controller
    
    1.1.18
    
    1.28
    
    alb-ingress-controller
    
    v2.18.0-aliyun.1
    
    1.28
    
    csi-provisioner
    
    v1.33.3-884df97-aliyun
    
    1.28
    
    csi-plugin
    
    v1.33.3-884df97-aliyun
    
    1.28
    
    storage-operator
    
    v1.32.10
    
    1.28
    
    flexvolume
    
    No supported version. Migrate to csi-plugin. For more information, see [Migrate from FlexVolume to CSI](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/upgrade-from-flexvolume-to-csi/).
    
    kritis-validation-hook
    
    v0.12.0.0-g1535b25b-aliyun
    
    1.28
    
    aliyun-acr-credential-helper
    
    v25.07.21.1-67f1f51-aliyun
    
    1.28
    
    logtail-ds
    
    v2.1.14.0-aliyun
    
    1.28
    
    loongcollector
    
    3.1.1
    
    1.28
    
    metrics-server
    
    v0.3.9.7-85b3699-aliyun
    
    1.28
    
    alicloud-monitor-controller
    
    v1.8.8
    
    1.28
    
    ack-node-problem-detector
    
    1.2.27
    
    1.28
    
    arms-prometheus
    
    1.1.33
    
    1.28
    
    ack-cost-exporter
    
    1.0.21
    
    1.28
    
    ack-sysom-monitor
    
    1.1.2
    
    1.28
    
    arms-cmonitor
    
    4.1.2
    
    1.28
    
    ack-onepilot
    
    5.0.0
    
    1.28
    
    cluster-autoscaler
    
    v1.3.18-48f43128-aliyun
    
    1.28
    
    ack-goatscaler
    
    v0.4.5-17c5a32-aliyun
    
    1.28
    
    migrate-controller
    
    v1.8.6-17482bb-aliyun
    
    1.28
    
    ack-acr-acceleration-p2p
    
    0.3.10
    
    1.28
    
    csi-secrets-store-provider-alibabacloud
    
    0.5.0
    
    1.28
    
    ack-secret-manager
    
    0.5.12
    
    1.28
    
    ack-extend-network-controller
    
    v0.12.0
    
    1.28
    
-   If you have applications deployed in the cluster that depend on the instance metadata service, you must modify the application code before you switch to enhanced mode only. After the switch, requests that use the normal mode are denied. For more information, see [Instance metadata](/help/en/ecs/user-guide/view-instance-metadata/#92345ab5cfp6u).
    

## **Procedure**

You can configure this feature only when you create a node pool or configure a node pool during cluster creation. After the node pool is created, you cannot change the instance metadata access mode.

> The following procedure uses the creation of a new node pool as an example. The core configuration items are the same as those required when you create a cluster.

1.  Log on to the [ACK console](https://cs.console.alibabacloud.com). In the left navigation pane, click **Clusters**.
    
2.  On the **Clusters** page, find the cluster to manage and click its name. In the left navigation pane, choose **Nodes** > **Node Pools**.
    
3.  Click **Create Node Pool** and follow the on-screen instructions to create the node pool.
    
    This section describes only the core configuration items for this feature. For more information about all configuration items, see [Create and manage a node pool](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/create-a-node-pool).
    
    -   Operating System: Make sure that the operating system image supports enhanced mode only and that the image version meets the requirements.
        
        -   Public Image
            
            **Operating system image**
            
            **Minimum version**
            
            Container-optimized Alibaba Cloud Linux 3.2104 LTS 64-bit
            
            20241226
            
            Alibaba Cloud Linux 3.2104 LTS 64-bit
            
            20241218
            
            Ubuntu 22.04
            
            20250722
            
            ContainerOS 3.6
            
            20250916
            
        -   Custom Image: Make sure that the cloud-init version installed in the image is 23.2.2 or later. For more information about how to check and upgrade the cloud-init version, see [Install cloud-init](/help/en/ecs/user-guide/install-cloud-init).
            
    -   **Instance Metadata Access Mode**: Select **Security Hardening Mode**.
