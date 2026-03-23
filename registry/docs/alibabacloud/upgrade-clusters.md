To avoid security and stability risks associated with outdated cluster versions and to access the latest Kubernetes capabilities and technical support, upgrade your cluster version in a timely manner. ACK provides pre-upgrade checks, supports configurable upgrade policies and pacing, and offers upgrade progress monitoring to ensure a smooth cluster upgrade.

## Why you should upgrade

ACK lets you create clusters using the three latest [minor versions](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/support-for-kubernetes-versions/#p-qx0-n4f-vuu) of Kubernetes. For example, if ACK supports Kubernetes 1.31, 1.32, and 1.33, you can no longer create clusters that use version 1.30. You also cannot create clusters that use expired patch versions. For more information, see the [version guide](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/support-for-kubernetes-versions/#concept-186482).

Security and stability risks exist in outdated Kubernetes versions. If your cluster runs an outdated Kubernetes version, you can no longer use the latest features, benefit from the latest bug fixes, enjoy improved technical support, or fix security vulnerabilities.

**Important**

When you upgrade a cluster, ACK runs pre-checks. However, these checks cannot detect all incompatible feature configurations or APIs. Under the [shared responsibility model](/help/en/ack/ack-managed-and-ack-dedicated/security-and-compliance/shared-responsibility-model#section-6bh-fr1-i0y), you are responsible for staying informed about version releases by reading help documents and monitoring console and internal messages. Before you upgrade a cluster, review the release notes for the new version.

## **Upgrade impact**

ACK provides phased and batched upgrade policies to ensure the continuity and stability of your application pods during a cluster upgrade.

-   Pre-check: Before you upgrade a control plane or a node pool, ACK runs a pre-check to identify potential compatibility risks. These risks include deprecated APIs, incompatible component versions, and issues with node or disk statuses. ACK also provides suggestions on how to resolve these issues. The pre-check does not affect your cluster's services.
    
-   Control plane:
    
    -   ACK managed clusters: The API Server is managed by ACK and is restarted in a rolling manner during an upgrade. This process typically does not affect running applications. If an application is highly dependent on the API Server, it may need to retry connections because of brief disconnections.
        
    -   ACK dedicated clusters: During an upgrade, ACK performs an in-place upgrade on each master node sequentially. This process typically does not affect running applications. If an application is highly dependent on the API Server, it may need to retry connections because of brief disconnections.
        
-   Node pool: Nodes are upgraded in batches to ensure service continuity. Customize the batch upgrade policy, such as specifying the maximum number of nodes per batch and the interval between batches, to control the impact on your services.
    
    -   During an in-place upgrade, disks are not replaced and nodes are not re-initialized. Application pods continue to run, and services are not interrupted.
        
    -   A system disk replacement upgrade involves draining the node, replacing the system disk, and re-initializing the node. Note the following impacts:
        
        -   During a system disk replacement upgrade, ACK drains the node. Pods on the node are evicted to other available nodes in accordance with the [Pod Disruption Budget (PDB)](https://kubernetes.io/docs/concepts/workloads/pods/disruptions/#pod-disruption-budgets). To ensure high availability, use a multi-replica deployment strategy, distribute workloads across multiple nodes, and configure a PDB for critical services to control the number of pods that can be disrupted simultaneously. This helps maintain service continuity during node maintenance operations.
            
        -   During a system disk replacement upgrade, ACK re-initializes the node based on the current configuration of the node pool. This configuration includes settings such as the node logon method, OS image, and container runtime version. Update the node pool configuration by [editing the node pool](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/create-a-node-pool#9cff721669kc3). Changes made to the node by any other means are overwritten during the upgrade.
            
        -   If a pod on the node references a HostPath that points to the system disk, the data in the HostPath directory is lost after a system disk replacement upgrade.
            

## Upgrade process

An ACK cluster upgrade involves upgrading the control plane and node pools. Run a pre-check before starting and schedule the upgrade during off-peak hours to minimize impact. After the control plane upgrade is complete, carefully check the cluster's operational status. Then, upgrade the node pools to match the control plane version.

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/4163928671/CAEQUxiBgIDm78PV3RkiIDJjY2ZlNjEzYjNiNDQyZDhhYTcxNjkwNTU4YzlhNjZm4755465_20241112195546.823.svg)

#### **1\. Preparation**

-   Determine the target version for the upgrade based on the [ACK release notes](/help/en/doc-detail/2361875.html). ACK supports upgrading only one minor version at a time. You cannot skip versions or roll back to a previous one.
    
-   Carefully read the [version guide](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/support-for-kubernetes-versions/#concept-186482) for the target version. Make sure that you understand the upgrade considerations, major changes, and deprecated features to avoid compatibility issues after the upgrade.
    
-   Plan a maintenance window for the cluster. Run pre-checks in advance to identify potential risks and perform the upgrade during off-peak hours.
    

#### **2\. Control Plane Upgrade**

1.  Run a pre-check: Before you upgrade, run a pre-check. Proceed with the upgrade only after all check items pass or all identified issues are fixed.
    
    The pre-check inspects items such as deprecated APIs (for version 1.20 and later), component compatibility, feature configuration compatibility, cluster status, and control plane component status.
    
2.  Perform the upgrade: After the pre-check passes, perform the upgrade.
    
    -   ACK managed clusters and ACK Serverless clusters: ACK manages the upgrade. It upgrades control plane components, including kube-apiserver, kube-controller-manager, kube-scheduler, and kube-proxy.
        
    -   ACK dedicated clusters: An in-place upgrade is used to maximize service continuity and reduce the risks of data migration and configuration adjustments.
        
        **Click to view the process**
        
        1.  When ACK detects that your cluster's etcd and container runtime need to be upgraded, it upgrades them on the master nodes one by one.
            
        2.  Master nodes are selected and upgraded one at a time. The ID of the master node currently being upgraded is displayed.
            
        3.  Upgrade master components, including kube-apiserver, kube-controller-manager, kube-scheduler, and kube-proxy.
            
        4.  Upgrade the kubelet on the master nodes.
            
        
3.  Post-upgrade check: Verify that the cluster version is updated and that core components, applications, pod creation, and node addition are all functioning as expected.
    

#### **3\. Node pool upgrade**

A node pool upgrade involves upgrading the kubelet and the container runtime.

1.  Run a pre-check: Before you upgrade, run a pre-check. Proceed with the upgrade only after all check items pass or all identified issues are fixed.
    
    The pre-check inspects items such as node status, system resources, disk status, and the network environment.
    
2.  Configure the upgrade policy and perform the upgrade: Choose an upgrade method (in-place or disk replacement) and configure the batch upgrade policy. This includes specifying the maximum number of nodes per batch and whether to automatically create snapshots.
    
3.  Post-upgrade check: Verify that the kubelet and container runtime versions are updated and that pod scheduling and applications are functioning as expected.
    

#### **4\. Other procedures**

-   Change the OS image: To upgrade the OS image of a node pool or switch the OS type (for example, from Alibaba Cloud Linux 2 to Alibaba Cloud Linux 3), see [Change the operating system](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/replace-the-operating-system).
    
-   Cluster components: ACK upgrades only the control plane and core components like kube-proxy. Manually upgrade other cluster [components](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/component-overview) via the **Add-ons** page during off-peak hours. Refer to the [Component overview and release notes](/help/en/ack/product-overview/release-notes-for-components/) for version compatibility requirements.
    

## **Upgrade considerations**

### **Control planes**

-   You must upgrade the Kubernetes version of an ACK cluster sequentially through the supported versions. Rollbacks are not supported. To perform multiple upgrades, monitor your cluster's services for stability after each upgrade before you start the next one.
    
-   Before you upgrade, see [Upgrade clusters](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/upgrade-clusters/) for an overview. Review the [version guide](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/support-for-kubernetes-versions/) and the release notes for each version. Make sure that you understand the version details, [deprecated APIs](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/cluster-check-items-and-suggestions-on-how-to-fix-cluster-issues#section-bff-eip-5xe), and upgrade considerations to avoid incompatibility issues that may be caused by feature changes in later versions.
    
-   A control plane upgrade does not affect running applications. The API Server is restarted in a rolling manner during the upgrade. If your application is highly dependent on the API Server, it must be able to retry connections.
    
-   Kubernetes 1.24 and later do not support Docker as the built-in container runtime. When you upgrade a cluster from 1.22 to 1.24 or later, you must [Migrate the node container runtime from Docker to containerd](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/change-the-container-runtime-from-docker-to-containerd).
    
-   Avoid performing operations and maintenance (O&M) on the cluster during a control plane upgrade.
    

### **Node pools**

-   Node scaling
    
    -   If node scaling is enabled for the cluster, the cluster automatically updates the cluster-autoscaler component to the latest version after the cluster is updated. This ensures that the auto scaling feature can function as expected. After the cluster is updated, check whether the version of cluster-autoscaler is updated to the latest version. For more information, see [Enable node autoscaling](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/auto-scaling-of-nodes).
        
    -   During a cluster update, nodes whose **scaling mode** is set to **swift mode** may fail to be updated because the nodes are shut down. If nodes in **swift mode** fail to be updated after the cluster is updated, we recommend that you manually remove the nodes.
        
-   After you update the Kubernetes version of the cluster to 1.18, ACK automatically configures resource reservation. If resource reservation is not configured for the cluster and the resource usage of nodes is high, ACK may fail to schedule evicted pods to the nodes after the cluster is updated. Reserve sufficient resources on the nodes. We recommend that the CPU utilization does not exceed 50% and the memory utilization does not exceed 70%. For more information, see [Resource reservation policy](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/resource-reservation-policy#task-2127748).
    
-   If the pods in a cluster that run Kubernetes 1.24 or earlier are configured only with a startup probe, the pods may temporarily remain in the NotReady state after kubelet is restarted. We recommend that you use a multi-replica deployment strategy to distribute workloads across multiple nodes to ensure that pods are sufficient during a node restart.
    
-   If a pod accesses another pod on the same node by using the IP address of the Server Load Balancer (SLB) instance exposed by the `LoadBalancer` Service and the `externalTrafficPolicy` of the Service is set to `Local`, the two pods may no longer reside on the same node after the node is renewed. This results in a network failure.
    
-   Custom OS images are not strictly validated by ACK. ACK does not guarantee the success of cluster updates for clusters that use a custom OS image.
    
-   To update a cluster, you must use Yum to download the required software packages. If your cluster uses custom network configurations or a custom OS image, you need to ensure that Yum can run as expected. You can run the `yum makecache` command to check the status of Yum.
    
-   If your cluster uses other custom configurations, such as swap partitions, kubelet configurations modified by using the CLI, or runtime configurations, the cluster may fail to be updated or the custom configurations may be overwritten during the update.
    
-   When you update a node by replacing system disks, ACK drains the node and evicts the pods from the node to other available nodes based on [PodDisruptionBudget (PDB)](https://kubernetes.io/docs/concepts/workloads/pods/disruptions/#pod-disruption-budgets). To ensure high service availability, we recommend using a multi-replica deployment strategy to distribute workloads across multiple nodes. You can also configure PDB for key services to control the number of pods that are interrupted at the same time.
    
    The default timeout period for node draining is 30 minutes. If the pod migration fails to be completed within the timeout period, ACK terminates the update to ensure service stability.
    
-   When you update a node by replacing the system disk, ACK reinitializes the node according to the current node pool configurations, including node logon methods, labels, taints, operating system images, and runtime versions. Normally, node pool configurations are updated by [editing a node pool](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/create-a-node-pool#9cff721669kc3). If you made changes to the node in other ways, these changes will be overwritten during the update.
    
-   If pods on a node use hostPath volumes and the hostPath volumes points to a system disk, data in the hostPath volumes is lost after the node is updated by replacing system disks.
    
-   During a node pool update, you can only scale out the node pool. Scale-in is not allowed.
    
-   If your node is a free node, which is a worker node not managed by a node pool, you must migrate the node. For more information, see [Add free nodes to a node pool](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/add-free-nodes-to-a-node-pool).
    

## **Upgrade methods**

### **In-place upgrade and system disk replacement**

For control plane upgrades, ACK manages the process for ACK managed clusters and ACK Serverless clusters. ACK dedicated clusters are upgraded using an in-place upgrade.

For a node pool upgrade, ACK offers two methods: in-place upgrade and system disk replacement upgrade.

-   In-place upgrade: Upgrades are performed directly on existing nodes without replacing the system disk or re-initializing the node. The original node data is not affected. ECS instance-related configurations, such as IP addresses and disk mounts, remain unchanged. However, configurations of ACK-managed components, such as containerd and kubelet, may be adjusted based on differences between component versions.
    
    > To customize containerd or kubelet configurations, see [Customize kubelet configurations for a node pool](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/customize-the-kubelet-configurations-of-a-node-pool) and [Customize containerd configurations for a node pool](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/customize-the-containerd-configurations-of-a-node-pool).
    
-   System disk replacement upgrade: This method replaces the system disk and re-initializes the node. While IP addresses and data disk mounts remain unchanged, all data on the system disk is deleted. Enable disk snapshots and back up the system disk before proceeding.
    
    > Data disks that are attached to the node are not affected.
    

### **Special** **cases**

A system disk replacement upgrade is required in the following scenarios:

-   **Container runtime migration**: Starting with version 1.24, Kubernetes no longer supports Docker as the built-in runtime. You must migrate to containerd using the disk replacement method.
    
    > For more information, see [Migrate the node container runtime from Docker to containerd](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/change-the-container-runtime-from-docker-to-containerd).
    
-   **Operating system changes**: As of version 1.30, CentOS and Alibaba Cloud Linux 2 are unsupported. Use disk replacement to switch to a supported [operating system](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/overview-of-os-images/).
    
    > For more information, see [Change the operating system](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/replace-the-operating-system).
    
-   **Windows node pools**: [Upgrading Windows node pools](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/create-a-windows-node-pool#6c673ee245s7u) requires the disk replacement method.
    

**Alternative: Rolling upgrade via new node pool**

Instead of upgrading existing nodes, you can perform a rolling upgrade by creating a new node pool with the target configuration. Gradually migrate applications by setting the old node pool to unschedulable or updating workload scheduling. Once the migration is verified, delete the old node pool.

You are billed for both node pools while they coexist; remove the old pool promptly after migration to manage costs.

## **FAQ**

-   ### **How do I manually upgrade my cluster?**
    
    For more information, see [Manually upgrade a cluster](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/update-the-kubernetes-version-of-an-ack-cluster). First, complete the pre-check. Then, perform the upgrade and verify that the result meets your expectations.
    
-   ### **What are the best practices for upgrading a cluster?**
    
    -   Maintain a regular upgrade frequency: Maintain a regular upgrade frequency by monitoring the [version guide](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/support-for-kubernetes-versions/), help documents, and official notifications. Upgrade promptly to ensure continued support and security.
        
    -   Create an upgrade plan: Because upgrades involve major changes like API deprecations, create a detailed upgrade plan based on cluster size and business needs. Reserve a maintenance window during off-peak hours and validate the upgrade in a test environment before applying it to production.
        
    -   Use automatic upgrades: You can use the [automatic cluster upgrade](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/automatically-upgrade-an-ack-cluster) feature. ACK generates an upgrade plan in advance, triggers a pre-check, and upgrades the cluster within the specified maintenance window. This reduces the O&M workload of version management.
        
        You can also [create an ACK managed cluster in Intelligent Hosting Mode](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/create-ack-managed-clusters-in-automode). The cluster version is automatically upgraded by ACK.
        
    
-   ### **How long does a cluster upgrade take?**
    
    -   Control plane: For ACK managed clusters and ACK Serverless clusters, the upgrade is managed by ACK and takes about 5 minutes. For an ACK dedicated cluster, the master nodes are upgraded sequentially, which takes about 8 minutes per node.
        
    -   Node pool: The duration depends on the node batching configuration. An in-place upgrade takes about 5 to 10 minutes per batch. A system disk replacement upgrade without snapshots takes about 8 minutes per batch, but the actual duration is affected by the node draining process. If you choose to create snapshots, the upgrade process waits for the snapshots to be created. The time required to create a snapshot depends on the amount of data.
        
    
-   ### **Can I stay on one version forever and not upgrade my cluster?**
    
    No, you cannot. Potential security risks in outdated versions can affect not only your clusters but also the overall security of Alibaba Cloud. ACK does not allow clusters to remain in an outdated state for an extended period and performs forced upgrades to bring them to a secure and stable version.
    
    We recommend that you upgrade your cluster version promptly. For more information, see [Manually upgrade a cluster](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/update-the-kubernetes-version-of-an-ack-cluster). This lets you benefit from the latest features and receive better technical support from ACK. Before you upgrade, see the [release notes](/help/en/doc-detail/2361875.html) for the target version to understand its feature changes and important notes. Enable the [automatic cluster upgrade](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/automatically-upgrade-an-ack-cluster) feature to ensure your cluster is upgraded automatically and periodically.
    
-   ### **Does ACK support skipping minor versions during an upgrade?**
    
    No, it does not. You must upgrade your cluster one minor version at a time. In addition, before you upgrade the cluster control plane, make sure that the version of the cluster nodes is the same as the control plane version.
    
-   ### **My cluster version is very old. How can I upgrade it quickly?**
    
    You can use one of the following solutions.
    
    -   Solution 1: Upgrade the cluster one minor version at a time. After each upgrade, check whether your business applications in the cluster run as expected before you proceed with the next upgrade. For more information, see [Manually upgrade a cluster](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/update-the-kubernetes-version-of-an-ack-cluster).
        
    -   Solution 2: Create a cluster that runs the latest version, gradually migrate your applications to the new cluster, then unpublish the old cluster. For information about how to create and configure a cluster, see [Create an ACK managed cluster](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/create-an-ack-managed-cluster-2/).
        
    
-   ### **How do I switch from Docker to containerd when upgrading a cluster from version 1.22 to 1.24?**
    
    ACK no longer supports Docker as the built-in container runtime in version 1.24 and later. You must migrate the container runtime of your nodes from Docker to containerd.
    
    You can switch the runtime in the original node pool using the node pool upgrade feature, or you can create a new containerd node pool and migrate your workloads. For more information, see [Migrate the container runtime of nodes from Docker to containerd](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/change-the-container-runtime-from-docker-to-containerd).
    
-   ### **How does ACK ensure stability during a cluster upgrade?**
    
    An ACK cluster consists of a control plane and node pools.
    
    -   Control plane upgrade: ACK provides a pre-upgrade check feature that inspects deprecated APIs, component compatibility, feature configuration compatibility, and control plane components. The check results do not affect the normal operation of applications in the cluster. If the check fails, repair suggestions are provided in the console. For more information, see [Manually upgrade a cluster](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/update-the-kubernetes-version-of-an-ack-cluster).
        
    -   Node pool upgrade: A node pool upgrade includes upgrading kubelet and containerd. ACK provides a pre-upgrade check feature that inspects the node status, system resources, disk status, and network environment. The check results do not affect the normal operation of applications in the cluster. If the check fails, repair suggestions are provided in the console.
        
        You can also configure an upgrade policy to control the upgrade pace. For example, you can specify the nodes to upgrade, set the maximum number of nodes that can be upgraded in each batch, and configure an upgrade pause policy. If the system disks of your nodes contain important business data, you can also create [snapshots](/help/en/ecs/user-guide/snapshot-overview) for the nodes before you upgrade the node pool. For more information, see [Update a node pool](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/node-pool-updates).
        
    
-   ### **What should I know before upgrading a cluster?**
    
    You cannot roll back a cluster upgrade. After verification, first upgrade a test environment, then upgrade the production environment. You can also [upgrade specific nodes first](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/node-pool-updates#289a37543e2ke) for verification during the upgrade process.
    
    The supported component versions, features, and deprecated features vary with the Kubernetes version. For more information, see the [release notes](/help/en/doc-detail/2361875.html) for different versions.
    
    Review the [notes on control plane upgrades](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/update-the-kubernetes-version-of-an-ack-cluster#bedb60902bxau).
    
    Review the [notes on node pool upgrades](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/node-pool-updates#7ac2e16ab0yx1).
    
-   ### **Can clusters with expired versions still be used normally?**
    
    Yes. However, outdated clusters pose security and stability risks. Upgrade to a maintained version as soon as possible.
    
    Because ACK clusters use a managed architecture, these security risks not only affect your cluster but may also impact the overall security of Alibaba Cloud. Therefore, ACK does not allow clusters to remain in an outdated state for an extended period and performs a mandatory upgrade to a secure and stable version. For more information, see [Mandatory upgrade of outdated versions](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/support-for-kubernetes-versions/#ce44592e9e586).
    
-   ### **Is version rollback supported after a cluster upgrade?**
    
    No. Rollbacks are not supported for the control plane, kubelet, or container runtime versions after an upgrade.
    
    During a node pool upgrade, if important service data is stored on a node's system disk, create a [snapshot](/help/en/ecs/user-guide/snapshot-overview) for the node before the upgrade to back up and restore node data.
    
-   ### **Which operation should I perform first if I need to upgrade a cluster and migrate it to** an ACK Pro managed cluster**?**
    
    Complete cluster migration before starting the upgrade. Once services are verified as stable, proceed with the version update.
    
-   ### **What do I do if the pre-check reports deprecated APIs?**
    
    For Kubernetes 1.20 or later, ACK provides notifications for [deprecated APIs](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/cluster-check-items-and-suggestions-on-how-to-fix-cluster-issues#section-bff-eip-5xe). While these do not block the upgrade, fix these issues beforehand to ensure application compatibility with the new version.
    
-   ### How do I resolve a "component version too low" warning in pre-checks?
    
    ACK upgrades only the control plane and select core components like kube-proxy. Identify other [components](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/component-overview) requiring updates via the **Add-ons** page in the console. you can view the [components](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/component-overview) that need to be upgraded. Before proceeding, review the [Component overview and release notes](/help/en/ack/product-overview/release-notes-for-components/) to ensure version compatibility. Schedule these component upgrades during off-peak hours to minimize service impact.
    
-   ### **How do I resolve an upgrade failure with the error "the aliyun service is not running on the instance"?**
    
    This error occurs because Cloud Assistant is unavailable, which causes the upgrade command to fail. Start or restart Cloud Assistant, and then try the cluster upgrade again. For more information, see [Start, stop, or uninstall Cloud Assistant Agent](/help/en/ecs/user-guide/stop-and-uninstall-the-cloud-assistant-agent#task-1958116).
    
-   ### **How do I resolve a "PLEG not healthy" error on a node?**
    
    This error indicates that the container or container runtime is not responding. Restart the node and then try the upgrade again.
    
-   ### **What should I do if I get an** `**invalid object doesn't have additional properties**` **error when upgrading a cluster?**
    
    After you upgrade a cluster, you must also upgrade your local kubectl version. If you do not upgrade it promptly, you may encounter errors such as `invalid object doesn't have additional properties` when you use the local kubectl because its version differs from the cluster's API Server version. For more information about how to install or upgrade kubectl, see [Install and Set Up kubectl](https://kubernetes.io/docs/tasks/tools/?spm=5176.2020520152.0.0.5b4716ddnhs8P5). It's critical to synchronize your kubectl version with the cluster API server version to prevent compatibility issues.
