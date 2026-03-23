ACK Edge clusters are classified into ACK Edge Pro clusters and ACK Edge Basic clusters. ACK Edge Pro clusters and ACK Edge Basic clusters have different features, O&M requirements, and scenarios. In addition, the two cluster types support different compensation clauses. This topic compares the two types of clusters. You can select cluster types based on the comparison details and your business requirements.

## Cluster types

The following table compares ACK Edge Pro clusters with ACK Edge Basic clusters.

**Item**

**ACK Edge Pro**

**ACK Edge Basic**

Cluster size

-   Host network mode: up to 1,000 nodes.
    
-   Container network mode: up to 200 nodes.
    

For more information about the pod network mode, see [Pod Network Type](/help/en/ack/create-an-edge-node-pool-1#867953a5782we).

Up to 10 nodes.

SLA

Region-level clusters guarantee a Service-Level Agreement (SLA) for service availability of 99.95%, while zone-level clusters offer a 99.5% SLA. For more information, see [Container Service for Kubernetes Service Level Agreement](/help/en/legal/latest/container-service-for-kubernetes-service-level-agreement).

Not provided.

Scenarios

-   Production and testing environments.
    
-   Scenarios where cost-effectiveness is required.
    

The maximum number of nodes supported by this type of cluster is relatively small. The availability of the control plane of this type of cluster is not ensured. This type of cluster can meet the learning and testing needs of individual users.

Billing methods

You are charged for cluster management based on the number of clusters and node management based on the number of edge nodes that are connected to the cloud. In addition, you are charged for Alibaba Cloud resources used by your ACK Edge clusters. For more information, see [Billing of ACK Edge clusters](/help/en/ack/ack-edge/product-overview/billing-of-ack-edge-clusters).

You are not charged for cluster management. However, you are still charged for node management based on the number of edge nodes that are connected to the cloud. In addition, you are charged for Alibaba Cloud resources used by your ACK Edge clusters. For more information, see [Billing of ACK Edge clusters](/help/en/ack/ack-edge/product-overview/billing-of-ack-edge-clusters).

### ACK Edge cluster **feature comparison**

The following table compares ACK Edge Pro clusters and ACK Edge Basic clusters.

**Note**

The following table uses icons to indicate feature support: ![对](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/7432856561/p442272.png) indicates supported features, while ![错](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/1579979171/p442273.png) indicates features that are not supported.

**Feature**

**ACK Edge Pro**

**ACK Edge Basic**

[Customize the parameters of control plane components in ACK Pro clusters](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/customize-ack-pro-control-plane-component-parameters-1693464061811)

![对](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/7432856561/p442272.png)

![错](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/1579979171/p442273.png)

[Metrics of kube-apiserver](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/monitor-kube-apiserver)

![对](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/7432856561/p442272.png)

![错](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/1579979171/p442273.png)

High-frequency cold and hot backups, high-frequency hot backups, and geo-disaster recovery of etcd

![对](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/7432856561/p442272.png)

![错](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/1579979171/p442273.png)

[Metrics of etcd](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/monitor-etcd)

![对](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/7432856561/p442272.png)

![错](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/1579979171/p442273.png)

[Gang scheduling](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/work-with-gang-scheduling#task-1935082)

![对](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/7432856561/p442272.png)

![错](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/1579979171/p442273.png)

[Enable topology-aware CPU scheduling](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/topology-aware-cpu-scheduling#task-1935079)

![对](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/7432856561/p442272.png)

![错](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/1579979171/p442273.png)

[Topology-aware GPU scheduling](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/overview-of-topology-aware-gpu-scheduling/#concept-1998479)

![对](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/7432856561/p442272.png)

![错](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/1579979171/p442273.png)

[GPU Sharing Professional Edition](/help/en/doc-detail/212213.html)

![对](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/7432856561/p442272.png)

![错](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/1579979171/p442273.png)

Support for [Secret encryption by using KMS](/help/en/ack/ack-edge/security-and-compliance/use-kms-to-encrypt-kubernetes-secrets-1)

![对](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/7432856561/p442272.png)

![错](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/1579979171/p442273.png)

[Managed node pools](/help/en/ack/overview-of-managed-node-pools#task-1998740)

![对](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/7432856561/p442272.png)

![对](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/7432856561/p442272.png)

### Hot migration

Hot migration from ACK Edge Basic clusters to ACK Edge Pro clusters is supported. For more information, see [Hot migration from ACK Basic clusters to ACK Pro clusters](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/hot-migration-from-ack-standard-clusters-to-ack-pro-clusters#task-2010778).

## Features

ACK Edge clusters belong to Container Service for Kubernetes (ACK)s. The operations you can perform on ACK Edge clusters are similar to the operations you can perform on ACK Pro clusters. However, ACK Edge clusters include cloud infrastructure and on-premises infrastructure. Therefore, ACK Edge clusters differ from ACK Pro clusters in terms of specific operations. The following table describes the differences.

**Item**

**Differences** between ACK Edge clusters **and** ACK Pro clusters

**References**

Clusters

Create clusters

The network plug-ins and container CIDR blocks between the two types of clusters are different. For more information, see [How to choose a network plug-in](/help/en/ack/ack-edge/user-guide/how-to-choose-a-network-plug-in).

[Create a cluster](/help/en/ack/ack-edge/user-guide/create-an-ack-edge-cluster-1)

Update clusters

-   ACK Edge clusters do not support auto updates.
    
-   The update method for edge node pools is different from the update method for on-cloud node pools in ACK Edge clusters.
    

[Update a cluster](/help/en/ack/ack-edge/user-guide/upgrade-ack-edge-cluster)

Connect to clusters

The operations for connecting to ACK Edge clusters are the same as the operations for connecting to ACK Pro clusters.

-   The kubeconfig file of a cluster is obtained and kubectl is used to connect to the cluster. For more information, see [Obtain the kubeconfig file of a cluster and use kubectl to connect to the cluster](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/obtain-the-kubeconfig-file-of-a-cluster-and-use-kubectl-to-connect-to-the-cluster).
    
-   [Use kubectl on Cloud Shell to manage ACK clusters](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/use-kubectl-on-cloud-shell-to-manage-ack-clusters-1690962464408)
    
-   [Cluster access control](/help/en/ack/cluster-access-control)
    
-   [Delete kubeconfig files](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/clear-kubeconfig)
    

Manage clusters

The operations for managing ACK Edge clusters are the same as the operations for managing ACK Pro clusters.

-   [View cluster information](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/view-cluster-information)
    
-   [Cluster lifecycle](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/cluster-abnormal-states)
    
-   [Configure security groups for clusters](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/configure-security-group-rules-to-enforce-access-control-on-ack-clusters)
    
-   [Customize the parameters of control plane components in ACK Pro clusters](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/customize-ack-pro-control-plane-component-parameters-1693464061811)
    
-   [Hot migration from ACK Basic clusters to ACK Pro clusters](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/hot-migration-from-ack-standard-clusters-to-ack-pro-clusters)
    

Delete clusters

After you delete an edge node pool from an ACK Edge cluster, you need to manually uninstall the system components from the nodes in the cluster. For more information, see [Remove edge nodes](/help/en/ack/ack-edge/user-guide/remove-edge-nodes#section-4fi-jqa-mrt).

[Delete an ACK Edge cluster](/help/en/ack/ack-edge/user-guide/untitled-document)

Nodes and node pools

-   The capabilities of on-cloud node pools in ACK Edge clusters are the same as the capabilities of node pools in ACK Pro clusters.
    
-   An edge node pool in an ACK Edge cluster manages nodes that are spread across regions, such as Elastic Compute Service (ECS) nodes in different regions, nodes deployed in data centers, nodes from different cloud service providers, and server nodes in factories, stores, vehicles, and ships.
    
-   Edge node pools in ACK Edge clusters support node autonomy and offline O&M.
    

-   [Node pool overview](/help/en/ack/ack-edge/user-guide/overview-of-cell-based-management-at-the-edge/)
    
-   [Node management overview](/help/en/ack/ack-edge/user-guide/node-management-overview/)
    
-   [Configure edge node autonomy](/help/en/ack/ack-edge/user-guide/configure-node-autonomy)
    
-   [Offline O&M for edge nodes](/help/en/ack/ack-edge/user-guide/edge-node-offline-operation-and-maintenance-tool)
    

Storage

-   The csi-plugin and csi-provisioner components in ACK Edge clusters are the same as the Container Storage Interface (CSI) plug-in in ACK clusters. In addition, the operations for using the CSI plug-in on on-cloud nodes in ACK Edge clusters are the same as the operations for using the CSI plug-in in ACK clusters. For more information, see [CSI-based storage solutions](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/csi-overview-1/).
    
-   The types of storage supported by an edge node in an ACK Edge cluster vary based on the type and connection mode of the node.
    

[Storage overview](/help/en/ack/ack-edge/user-guide/storage-overview/)

Applications

ACK Edge clusters provide new workloads and extensions to improve application management capabilities.

-   Manage YurtAppSets: In edge computing scenarios, compute nodes may be deployed across regions, and an application may need to run on nodes in different regions. To simplify cross-region application distribution in edge computing scenarios, ACK Edge provides YurtAppSets to help you manage multiple workloads, such as Deployments, in a centralized manner.
    
-   DaemonSet update extensions: In edge computing scenarios, the Kubernetes DaemonSet update model has specific limitations. When the edge network disconnects from the cloud, DaemonSet updates may become stuck and issues may occur in over-the-air (OTA) updates. To address the preceding issues, ACK Edge provides the AdvancedRollingUpdate and OTA update model extensions.
    

-   [Manage YurtAppSets](/help/en/ack/ack-edge/user-guide/node-pool-yurtappset-management)
    
-   [DaemonSet update models](/help/en/ack/ack-edge/user-guide/daemonset-upgrade-model)
    

Networks

-   Edge nodes can be connected to ACK Edge clusters in public network or private network mode.
    
-   ACK Edge clusters support the Flannel and Terway Edge network plug-ins.
    
-   ACK Edge clusters provide the cloud-edge O&M communication component Raven to provide cross-network domain communication and support efficient cloud-edge operations in multi-region environments.
    
-   ACK Edge clusters allow you to configure a Service topology and port isolation for NodePort Services.
    
-   The deployment method of Ingress controllers in ACK Edge clusters is different from the deployment method of Ingress controllers in ACK Pro clusters.
    

-   [Network management overview](/help/en/ack/ack-edge/user-guide/network-management-overview/)
    
-   [How to choose a network plug-in](/help/en/ack/ack-edge/user-guide/how-to-choose-a-network-plug-in)
    
-   [Cross-region O&M communication component Raven](/help/en/ack/ack-edge/user-guide/cloud-edge-communication-component-raven-overview)
    
-   [Configure NodePort listening based on node pools](/help/en/ack/ack-edge/user-guide/nodeport-service-isolation)
    
-   [Configure a Service topology](/help/en/ack/ack-edge/user-guide/configure-a-service-topology)
    
-   [Ingress overview](/help/en/ack/ack-edge/user-guide/edge-cluster-ingress-overview)
    

Auto scaling

-   The workload and node scaling capabilities provided by ACK Edge clusters are the same as the workload and node scaling capabilities provided by ACK Pro clusters.
    
-   ACK Edge clusters do not support Elastic Container Instance-based auto scaling.
    

[Auto scaling overview](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/auto-scaling-overview/)

Scheduling

The scheduling capability provided by ACK Edge clusters is the same as the scheduling capability provided by ACK Pro clusters.

[Scheduling overview](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/scheduling-overview/)

O&M and security

-   The observability capability provided by ACK Edge clusters is the same as the observability capability provided by ACK Pro clusters.
    
-   ACK Edge clusters do not support the AIOps suite.
    
-   ACK Edge clusters do not support the cost insights feature provided by the cost management suite.
    
-   ACK Edge clusters do not support sandboxed containers, confidential computing, or automatic container image signature verification feature.
    

-   [Observability system overview](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/observability-overview/#task-2042182)
    
-   [Security system overview](/help/en/ack/ack-managed-and-ack-dedicated/security-and-compliance/security-system-overview)
    
-   [Cost management suite overview](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/cost-suite/)
    

Heterogeneous resources

-   The connection mode of GPU-accelerated edge nodes in ACK Edge clusters is different from the connection mode of GPU-accelerated edge nodes in ACK Pro clusters.
    
-   ACK Edge clusters support all the capabilities provided by the cloud-native AI suite except the GPU memory isolation capability.
    

-   [Add a GPU-accelerated node](/help/en/ack/ack-edge/user-guide/add-a-gpu-node)
    
-   [Overview of the cloud-native AI suite](/help/en/ack/ack-edge/user-guide/cloud-native-ai-suite-overview/)
    

Developer tools

The developer tools provided by ACK Edge clusters are the same as the developer tools provided by ACK Pro clusters.

-   [API](/help/en/ack/ack-managed-and-ack-dedicated/developer-reference/api-cs-2015-12-15-overview)
    
-   [CLI](/help/en/ack/ack-edge/developer-reference/cli-reference/)
    
-   [SDK](/help/en/ack/ack-edge/developer-reference/sdk-reference/)
    
-   [Terraform](/help/en/ack/ack-edge/developer-reference/terraform/)
