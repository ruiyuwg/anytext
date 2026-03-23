Outdated cluster versions may have security and stability issues. To ensure business continuity, Container Service for Kubernetes (ACK) uses in-place updates to update ACK Lingjun clusters. You can update the Kubernetes version of a cluster in the ACK console, or update the control plane and node pools of the cluster separately. This topic describes the usage notes before and after an update and the procedure for updating an ACK Lingjun cluster.

## **Why ACK Lingjun clusters need updates**

You can update the Kubernetes versions of ACK Lingjun clusters from 1.20 to 1.22.

Proactive updates provide the following benefits:

-   Reduced security and stability risks: New Kubernetes versions are usually released to add optimizations and patch security and stability vulnerabilities. Using outdated Kubernetes clusters may pose security and stability risks to your businesses.
    
-   New features: The iteration of open source Kubernetes usually comes with new features and improvements. ACK will also support these features to optimize your development and maintenance experience.
    

We recommend that you perform the following steps to proactively update your clusters.

**Important**

When you update a cluster, ACK performs a precheck on the cluster, but ACK does not guarantee that all incompatible features, configurations, and APIs can be identified. According to the [shared responsibility model](/help/en/ack/ack-managed-and-ack-dedicated/security-and-compliance/shared-responsibility-model#section-6bh-fr1-i0y), we recommend that you pay attention to the release of Kubernetes versions by checking the documentation, information in the console, and internal messages, and learn the update notes of the corresponding version before you update the cluster.

For more information about how ACK Lingjun clusters support Kubernetes versions, see [Support for Kubernetes versions](/help/en/ack/ack-lingjun-managed-clusters/user-guide/support-for-kubernetes-versions).

## **Usage notes (important)**

### **Kubernetes versions**

To view the Kubernetes version of an ACK Lingjun cluster, log on to the [ACK console](https://cs.console.alibabacloud.com) and check the **Version** column of the cluster on the **Clusters** page. Before you update to a Kubernetes version, read the following release notes for the corresponding Kubernetes version to learn the version details, deprecated APIs, and usage notes for updates. This helps you avoid compatibility issues caused by feature updates in new Kubernetes versions.

-   [Release notes for Kubernetes 1.22 supported by ACK Lingjun](/help/en/ack/ack-lingjun-managed-clusters/user-guide/kubernetes-lingjun-1-22-release-notes)
    
-   [Release notes for Kubernetes 1.20 supported by ACK Lingjun](/help/en/ack/ack-lingjun-managed-clusters/user-guide/kubernetes-lingjun-1-20-release-notes)
    

**Note**

If the YAML file of your Helm chart uses deprecated resources, modify the file at the earliest opportunity. For more information, see the preceding release notes and [Deprecated APIs](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/cluster-check-items-and-suggestions-on-how-to-fix-cluster-issues#section-bff-eip-5xe).

### **Features and custom configurations**

If your ACK Lingjun cluster uses the features listed in the following table, read the considerations and suggested solutions.

**Feature**

**Consideration**

**Suggested solution**

FlexVolume

Object Storage Service (OSS) volumes that are mounted by using FlexVolume 1.11.2.5 or earlier are remounted during a cluster update.

After the update is complete, you need to recreate the pods that use OSS volumes.

FlexVolume is deprecated. We recommend that you upgrade from FlexVolume to CSI. For more information, see [Upgrade from FlexVolume to CSI](https://www.alibabacloud.com/help/en/container-service-for-kubernetes/latest/upgrade-from-flexvolume-to-csi).

Auto scaling

If auto scaling is enabled, the cluster automatically updates Cluster Autoscaler to the latest version after the cluster is updated. This ensures that the auto scaling feature can work as expected.

Make sure that Cluster Autoscaler is updated to the latest version. For more information, see [Auto scaling of nodes](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/auto-scaling-of-nodes).

Resource reservation

After you update the Kubernetes version of an ACK Lingjun cluster to 1.18, ACK automatically configures resource reservation. If resource reservation is not configured for the cluster and the resource usage of nodes is high, ACK may fail to schedule evicted pods to the nodes after the cluster is updated.

Reserve sufficient resources on the nodes. We recommend that you reserve at least 50% of CPU resources and at least 70% of memory resources. For more information, see [Resource reservation policy](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/resource-reservation-policy#task-2127748).

LoadBalancer configurations

ACK Lingjun clusters require Server Load Balancer (SLB) instances to handle external access. However, if `externalTrafficPolicy: Local` is specified for an SLB instance, traffic is forwarded only to node-local pods. If your application pods are deployed on other nodes, traffic cannot reach these pods.

Check whether externalTrafficPolicy: Local is specified for the SLB instance in case the SLB instance cannot forward traffic to the application pods. For more information, see [What Can I Do if the Cluster Cannot Access the IP Address of the SLB Instance Exposed by the LoadBalancer Service](https://www.alibabacloud.com/help/en/kb-articles/latest/what-can-i-do-if-the-cluster-cannot-access-the-ip-address-of-the-slb-instance-exposed-by-the-loadbalancer-service).

API Server

When ACK updates a cluster, ACK attempts to update the control plane without interrupting communication with the applications in the cluster. However, communication with the API server may be temporarily interrupted. The interruption affects applications that strongly rely on the API server. For example, if your application needs to list and watch resources, the watch operation is interrupted when the API server restarts. To resolve this problem, you need to configure the application to automatically retry the watch operation when an interruption occurs.

If your application does not need to access the API server, the application is not affected by the update. Otherwise, ensure that the application can retry upon failure.

kubectl

After a cluster is updated, we recommend that you update kubectl on your on-premises machine.

If you do not update kubectl, the kubectl version may be incompatible with the API server version. As a result, the error message `invalid object doesn't have additional properties` may appear.

Install or update kubectl. For more information, see [Install kubectl](https://kubernetes.io/docs/tasks/tools/?spm=5176.2020520152.0.0.5b4716ddnhs8P5).

If your cluster uses custom configurations, read the descriptions in the following table.

**Item**

**Description**

Network

To update a cluster, you need to use Yum to download the required software packages. If your cluster uses custom network configurations or a custom OS image, you need to ensure that Yum can run as normal. You can run the `yum makecache` command to check the status of Yum.

OS image

Custom OS images are not strictly validated by ACK. ACK does not guarantee the success of cluster updates if your cluster uses a custom OS image.

Others

If your cluster uses other custom configurations, such as swap partitions or kubelet configurations modified by using the CLI, the cluster may fail to be updated or the custom configurations may be lost during the update.

## Description

When you update an ACK cluster, you need to update the control plane and node pools of the cluster. The following figure shows the update procedure.

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/5106347371/CAEQMhiBgMDg8bmeoBkiIDM0NWFhOWJjMDkzZjQxNDlhODA3MDk4YjMzZmZmYWIx4755465_20241112195546.823.svg)

## **Preparations**

Read the [release notes](/help/en/doc-detail/2361875.html) for the Kubernetes version to which you want to update your cluster to learn about the update notes. This helps you avoid compatibility issues caused by feature updates. We recommend that you perform the update during off-peak hours.

## **Update the cluster**

Your cluster must pass the precheck before you can update the control plane and node pools of the cluster. If issues are reported in the precheck results, you must fix the issues and run the precheck again.

-   Update the control plane
    
    ### ACK managed clusters and ACK Serverless clusters
    
    Rolling updates are used. Update control plane components, including kube-apiserver, kube-controller-manager, and kube-scheduler.
    
    ### ACK dedicated clusters
    
    In-place updates are performed to ensure business continuity and reduce potential risks posed by data migration and configuration modifications. Procedure:
    
    1.  When ACK identifies that the etcd and container runtime in your cluster need to be updated, ACK updates the etcd and container runtime on each master node in sequence.
        
    2.  ACK updates only one master node at a time and displays the ID of the master node.
        
    3.  Update components on master nodes, such as kube-apiserver, kube-controller-manager, kube-scheduler.
        
    4.  Update the kubelet on master nodes.
        
    
-   Update node pools
    
    When you update a node pool, you need to update the kubelet and container runtime. To change the container runtime from Docker to containerd, ACK replaces the system disks of the nodes during the update. This way, the operating system and applications are also updated. We recommend that you back up the data on the system disks of the nodes before you update the cluster. In other scenarios, ACK uses in-place updates to update node pools. For more information, see [Update a node pool](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/node-pool-updates).
    
    ACK updates the nodes in your cluster in batches.
    
    -   Multiple node pools are updated one after one.
        
    -   Nodes in a node pool are updated in batches. The first batch includes one node. The number of nodes increases by the power of two in subsequent batches. The batch update policy still applies after you resume a paused update. You can specify the maximum batch size on the Node Pool Upgrade page. We recommend that you set the maximum batch size to 10. For more information, see [Update a node pool](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/node-pool-updates).
        

## **Verify the update**

Check whether the Kubernetes version of the cluster is updated, whether the node pools run as expected, and whether the business in the cluster runs as expected.

## **Procedure**

### **Update the control plane**

1.  Log on to the [ACK console](https://cs.console.alibabacloud.com). In the left-side navigation pane, click **Clusters**.
    
2.  On the **Clusters** page, find the cluster that you want to manage and click its name. In the left-side pane, choose **Operations** > **Upgrade Cluster**.
    
3.  On the **Upgrade Cluster** page, set **Destination Version** and click **Precheck** to detect potential risks in the update.
    
    After the precheck is completed, you can view the precheck results in the **Pre-check Results** section.
    
    -   If no issue is displayed, it indicates that the cluster passes the precheck. You can start the update.
        
    -   If issues are displayed, the cluster can still run as expected and the cluster status does not change. You can fix the issues based on the suggestions that are provided by the console. For more information, see [Cluster check items and suggestions on how to fix cluster issues](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/cluster-check-items-and-suggestions-on-how-to-fix-cluster-issues).
        
        **Note**
        
        If your cluster runs Kubernetes 1.20 or later, the precheck checks whether deprecated APIs are used in your cluster. The precheck result is for reference only and does not determine whether the cluster is updatable. For more information, see [Deprecated APIs](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/cluster-check-items-and-suggestions-on-how-to-fix-cluster-issues#section-bff-eip-5xe).
        
4.  After your cluster passes the precheck, click **Start Update** and follow the on-screen instructions to update the control plane.
    
    You can view the update history in the upper-right corner of the Upgrade Cluster page.
    
    After the update is complete, you can go to the Clusters page and check the Kubernetes version of your cluster to check whether the control plane is updated. When you add new nodes after the control plane is updated, the new nodes use the new Kubernetes version.
    

#### **Next step: Update node pools**

After the control plane is updated, new nodes are added to the cluster based on the updated Kubernetes version. We recommend that you update existing nodes during off-peak hours at the earliest opportunity and confirm the kubelet version after the update is complete. For more information, see [Update a node pool](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/node-pool-updates) and [Update a Lingjun node pool](/help/en/ack/ack-lingjun-managed-clusters/user-guide/upgrade-lingjun-node-pool).

## FAQ about cluster updates

### **What do I do if a cluster update fails and the following error is returned: the aliyun service is not running on the instance?**

The Cloud Assistant agent becomes unavailable. As a result, the update command fails to be sent to the cluster. Start or stop the Cloud Assistant client. Then, update the cluster again. For more information, see [Start, restart, stop, or uninstall the Cloud Assistant agent](/help/en/ecs/user-guide/stop-and-uninstall-the-cloud-assistant-agent#task-1958116).

### **How do I handle the PLEG not healthy error?**

The containers or container runtime does not respond. You need to restart the nodes and initiate the update again.

## **Procedures for updating the control plane and node pools**

#### **Update the control plane**

ACK updates the control plane of your ACK Lingjun cluster based on the following procedure. The update policy specifies the following rules:

1.  Update the control plane and managed components, such as kube-apiserver, kube-controller-manager, and kube-scheduler.
    
2.  Update Kubernetes components, such as kube-proxy.
    

#### **Update node pools**

ACK updates the nodes in your cluster in batches. The batch update policy specifies the following rules:

-   ACK updates node pools one after one.
    
-   The nodes in a node pool are updated in batches. The first batch includes one node. The number of nodes increases based on the powers of two in subsequent batches. The batch update policy still applies after you resume a paused update. You can specify the maximum batch size on the Node Pool Upgrade page. We recommend that you set the maximum batch size to 10. For more information, see [Update a node pool](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/node-pool-updates) and [Update a Lingjun node pool](/help/en/ack/ack-lingjun-managed-clusters/user-guide/upgrade-lingjun-node-pool).
    

## **References**

If errors occur when you update ACK Lingjun clusters, refer to [Cluster check items and suggestions on how to fix cluster issues](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/cluster-check-items-and-suggestions-on-how-to-fix-cluster-issues#task-2301208) to troubleshoot the errors.
