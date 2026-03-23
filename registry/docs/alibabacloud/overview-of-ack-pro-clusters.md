Container Service for Kubernetes (ACK) offers multiple cluster types with distinct features, O&M requirements, and compensation standards to meet your business needs. This topic provides a comparison to help you choose the cluster type that best fits your business needs.

## Cluster types

Based on whether the cluster control plane is managed, ACK supports two types of clusters:

-   ACK managed clusters: Alibaba Cloud fully hosts and maintains the control plane of the managed clusters. The managed version is available in two editions: ACK managed Pro clusters and ACK managed Basic clusters, which differ in control plane availability assurance and advanced custom features.
    
-   ACK dedicated clusters: You are responsible for creating and maintaining the control plane of the dedicated clusters.
    
    **Important**
    
    The option of creating new ACK dedicated clusters is no longer available. For more information, see [\[Product announcement\] Creation of new ACK dedicated clusters discontinued](/help/en/ack/product-overview/product-announcement-announcement-on-stopping-new-ack-dedicated-cluster).
    

The following table describes the differences among the cluster types:

**Item**

ACK managed cluster

ACK dedicated cluster

ACK managed Pro cluster

ACK managed Basic cluster

Cluster size

Each account can manage up to 100 clusters.

By default, each cluster can support a maximum of 5,000 worker nodes. To increase this limit, you can request a quota increase in the [quota center](https://quotas.console.alibabacloud.com/products/csk/quotas).

Each account can manage up to two clusters.

By default, each cluster can support a maximum of 10 worker nodes. Quota increases are not available.

Each account can manage up to 100 clusters.

By default, each cluster can support a maximum of 5,000 worker nodes. To increase this limit, you can request a quota increase in the [quota center](https://quotas.console.alibabacloud.com/products/csk/quotas).

Management scope

The auto mode is supported.

-   Enable: You can perform simple planning and configuration to create the cluster. The cluster control plane and key components are fully managed, and a smart management node pool is created by default. For more information, see [Auto mode](#bc7f1a980dmdp).
    
-   Disable: The cluster control plane is fully managed, and you are responsible for maintaining worker nodes.
    

The cluster control plane is fully managed, and you are responsible for maintaining worker nodes.

You are responsible for maintaining both the master and worker nodes, because the control plane is not managed by Alibaba Cloud.

Scenarios

-   Production and testing environments
    
-   Cost reduction requirements
    
-   Focus on application development with reduced cluster maintenance effort
    

Limited cluster size, such as personal learning and testing

-   Scenarios where cost is not a primary concern and Kubernetes skills are available for independent planning, management, and maintenance of clusters
    
-   Appropriate for research and deep customization needs, including custom control plane (master node) requirements
    

Billing methods

You are charged for cluster management based on the number of clusters. You are also charged for Alibaba Cloud services used by worker nodes and some components, such as Simple Log Service (SLS).

Cluster management is free of charge. However, you are charged for Alibaba Cloud services used by worker nodes and some components, such as SLS.

Cluster management is free of charge. However, you are charged for Alibaba Cloud services used by control planes, worker nodes, and some components, such as SLS.

SLA

Region-level clusters guarantee a Service-Level Agreement (SLA) for service availability of 99.95%, while zone-level clusters offer a 99.5% SLA. For more information, see [Container Service for Kubernetes Service Level Agreement](/help/en/legal/latest/container-service-for-kubernetes-service-level-agreement).

No SLA is provided.

### Advantages of ACK managed Pro cluster**s**

The following table compares the capabilities of ACK managed Pro clusters and ACK managed Basic clusters.

**Note**

The following table uses icons to indicate feature support: ![对](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/7432856561/p442272.png) indicates supported features, while ![错](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/1579979171/p442273.png) indicates features that are not supported.

**Feature**

ACK managed Pro cluster

ACK managed Basic cluster

[Customize control plane component parameters](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/customize-ack-pro-control-plane-component-parameters-1693464061811)

![对](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/7432856561/p442272.png)

![错](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/1579979171/p442273.png)

[Metrics of kube-apiserver](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/monitor-kube-apiserver)

![对](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/7432856561/p442272.png)

![错](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/1579979171/p442273.png)

High-frequency cold and hot backups, and geo-disaster recovery of etcd

![对](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/7432856561/p442272.png)

![错](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/1579979171/p442273.png)

[Metrics of etcd](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/monitor-etcd)

![对](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/7432856561/p442272.png)

![错](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/1579979171/p442273.png)

[Gang scheduling policy](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/work-with-gang-scheduling#task-1935082)

![对](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/7432856561/p442272.png)

![错](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/1579979171/p442273.png)

[Enable topology-aware CPU scheduling](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/topology-aware-cpu-scheduling#task-1935079)

![对](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/7432856561/p442272.png)

![错](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/1579979171/p442273.png)

[Topology-aware GPU scheduling](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/overview-of-topology-aware-gpu-scheduling/#concept-1998479)

![对](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/7432856561/p442272.png)

![错](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/1579979171/p442273.png)

[Shared GPU Professional Edition](/help/en/ack/cgpu-professional-edition#concept-2000382)

![对](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/7432856561/p442272.png)

![错](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/1579979171/p442273.png)

Support of [encrypting Secrets with KMS](/help/en/ack/ack-managed-and-ack-dedicated/security-and-compliance/use-kms-to-encrypt-kubernetes-secrets-2#task-2568562)

![对](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/7432856561/p442272.png)

![错](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/1579979171/p442273.png)

[Managed node pools](/help/en/ack/overview-of-managed-node-pools#task-1998740)

![对](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/7432856561/p442272.png)

![对](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/7432856561/p442272.png)

### **Hot migration**

Both ACK managed Basic clusters and ACK dedicated clusters support hot migration to ACK managed Pro clusters. For more information, see the following topics:

-   [Hot migration from ACK managed Basic clusters to ACK managed Pro clusters](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/hot-migration-from-ack-standard-clusters-to-ack-pro-clusters#task-2010778)
    
-   [Hot migration from ACK dedicated clusters to ACK managed Pro clusters](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/hot-migration-from-ack-dedicated-clusters-to-ack-pro-clusters#task-2069568)
    

## **Auto mode**

When creating an ACK managed cluster, you can enable auto mode. This mode allows rapid deployment of Kubernetes clusters compliant with industry best practices through minimal network configuration. Key features include:

-   Fully managed O&M: The cluster control plane and critical components are fully managed by ACK. A [node pool with auto mode enabled](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/create-a-node-pool#a1c996ce1cjsg) is created by default. This node pool dynamically scales the resources based on workloads. ACK is responsible for O&M tasks such as operating system and software upgrades, and vulnerability patches.
    
-   Intelligent resource provisioning: This feature automatically recommends the optimal instance specifications, eliminating manual configuration.
    
-   Optimized software stack: This feature enhances security protection by using an immutable ContainerOS root filesystem. With minimalized system configuration and tuned kernel parameters, node startup process and hardware utilization are optimized.
    

We recommend enabling auto mode in the following scenarios:

-   Dynamic resource scheduling: In environments with fluctuating workload demands, the auto mode rapidly scales computing resources, reducing cluster resource costs.
    
-   DevOps and CI/CD pipelines: In continuous integration and continuous deployment (CI /CD) environments, the auto mode automatically adjusts resources based on build and testing requirements, cutting idle resource costs while improving development efficiency.
    

The auto mode adopts the design concepts of elastic capacity, immutable infrastructure, and maintenance-free operation. For business scenarios that depend on node environment customization and node-local persistent storage, we recommend that you conduct a comprehensive application assessment before migration to identify potential compatibility risk points.

**Important**

The auto mode aims to provide automated and intelligent management capabilities for Kubernetes clusters. In certain scenarios, you may still need to fulfill some responsibilities. For more information, see [Shared responsibility model](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/create-ack-managed-clusters-in-automode#ea96c639f184y).

## Features

**Feature**

**Description**

Cluster management

-   Cluster creation: You can create various types of clusters based on your business requirements. ACK allows you to configure custom cluster settings and select different types of Elastic Compute Service (ECS) instances as worker nodes. For more information, see [Create an ACK managed cluster](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/create-an-ack-managed-cluster-2/#task-skz-qwk-qfb) and [Create an ACK dedicated cluster (discontinued)](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/create-an-ack-dedicated-cluster/#task-skz-qwk-qfb).
    
-   Cluster upgrade: You can manually or automatically upgrade the Kubernetes version of your cluster. ACK allows you to update your system components in a centralized manner. For more information, see [Manually upgrade an ACK cluster](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/update-the-kubernetes-version-of-an-ack-cluster#task-1664343) and [Automatically upgrade a cluster](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/automatically-upgrade-an-ack-cluster).
    
-   [Auto scaling](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/auto-scaling-overview/#concept-1918532): You can vertically scale your clusters in the console to handle unexpected business fluctuations. You can also configure service-level affinity rules and horizontal scaling settings for your business.
    
-   [Scheduling](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/scheduling-overview/): ACK supports hybrid scheduling of different elastic resources, fine-grained scheduling of heterogeneous resources, and scheduling of batch computing tasks. This improves the performance of applications and the overall resource utilization of clusters.
    
-   [Multi-cluster management](/help/en/ack/distributed-cloud-container-platform-for-kubernetes/user-guide/overview-9#concept-2424510): You can register clusters that are deployed in data centers and clusters in multiple clouds or regions in a centralized manner.
    
-   Permission management: ACK integrates Resource Access Management (RAM) and role-based access control (RBAC) for permission management.
    

Nodes and node pools

You can manage the lifecycle of node pools. You can configure different specifications for node pools in a cluster, such as vSwitches, container runtimes, operating systems, and security groups. For more information, see [Node](/help/en/ack/node-18) and [Node pools](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/node-pool-overview/#task-2013378).

Application management

-   Application creation: You can create various types of applications from images or templates. ACK allows you to configure custom application settings, such as environment variables, health checks, disk mounting, and logging.
    
-   Lifecycle management: You can use ACK to manage the lifecycle of applications. For example, you can view, update, replace, and delete applications, roll back application versions, view application events, perform rolling updates, and use triggers to redeploy applications.
    
-   Pod scheduling: ACK supports pod scheduling based on pod affinity, node affinity, and pod anti-affinity.
    
-   Application pod scaling: You can scale the number of application pods manually or by using the Horizontal Pod Autoscaler (HPA).
    
-   Application release: ACK supports canary releases and blue-green deployments. You can use these features to manage the application release lifecycle in a more efficient manner.
    
-   Application catalog: ACK provides the application catalog feature to facilitate application deployment and cloud service integration.
    
-   [Application center](/help/en/ack/application-center-overview#concept-2510869): The application center provides a centralized management panel for deploying applications and monitoring the topology of your applications. You can use the application center to facilitate centralized version management and rollback in continuous deployment scenarios.
    
-   Application backup and recovery: You can back up applications and restore applications from backup data. For more information, see [Back up and restore applications](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/back-up-and-restore-applications-in-an-ack-cluster#task-1993430).
    

Storage

-   The Container Storage Interface (CSI) plug-in is supported. For more information, see [Storage](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/csi-overview-1/#concept-2005339).
    
-   Operations on volumes and persistent volume claims (PVCs):
    
    -   You can create the following types of volumes: Block Storage, Apsara File Storage NAS (NAS), Object Storage Service (OSS), and Cloud Paralleled File System (CPFS).
        
    -   You can mount a volume to a PVC.
        
    -   You can dynamically create and migrate volumes.
        
    -   You can run scripts to view and update volumes and PVCs.
        

Network

-   Flannel and Terway are supported. For more information, see [Network](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/network/#concept-tfy-3kq-wfb).
    
-   You can specify CIDR blocks for services and pods.
    
-   You can use the network policy feature. For more information, see [Use network policies in ACK clusters](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/use-network-policies#task-1797447).
    
-   You can use Ingresses. For more information, see [Ingress management](/help/en/ack/ingress-management).
    
-   You can perform DNS-based service discovery. For more information, see [DNS-based service discovery](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/service-discovery-dns-1/#task-2038513).
    

Auto scaling

Automatically scale computing resources to meet business requirements and reduce costs:

-   Workload scaling (scheduling layer elasticity): scale workloads to adjust resource scheduling.
    
-   Node scaling (resource layer elasticity): scale out nodes when the cluster capacity cannot fulfill the cluster scheduling requirements.
    

For more information, see [Auto Scaling Overview](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/auto-scaling-overview/).

Scheduling

ACK provides various scheduling policies that target different types of workloads, such as job scheduling, QoS-aware scheduling, and descheduling. These scheduling policies can improve application performance and resource utilization. For more information, see [Scheduling](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/scheduling-overview/).

O&M and security

-   [Observability](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/observability-overview/#task-2042182):
    
    -   Monitoring: ACK integrates Managed Service for Prometheus (Prometheus) to monitor clusters, nodes, applications, and pods.
        
    -   Logging: ACK integrates Simple Log Service(SLS) to collect and store logs of clusters and containers.
        
    -   Alerting: ACK supports alerting based on cluster events and container metrics. For more information, see [Alert management](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/alert-management#task-2056339).
        
-   Cluster inspections and diagnostics
    
    -   [Cluster check](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/work-with-cluster-check/): You can use this feature to check whether your ACK cluster meets the requirements before you perform an operation, such as upgrading or migrating a cluster.
        
    -   [Cluster inspection](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/work-with-the-cluster-inspection-feature/): You can use this feature to view the status of ACK clusters and identify potential risks in the clusters, such as insufficient quotas of cloud resources or high usage of key resources in ACK clusters. You can troubleshoot the risks and fix the issues based on the recommended solutions.
        
    -   [Cluster diagnostics](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/work-with-cluster-diagnostics/): You can use this feature to diagnose nodes, pods, Services, Ingresses, memory, and networks with a few clicks to identify issues in your ACK clusters.
        
-   [Cost suite](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/cost-suite/): ACK visualizes the resource usage and cost distribution of your clusters and improves resource utilization.
    
-   [Security center](/help/en/ack/ack-managed-and-ack-dedicated/security-and-compliance/use-security-monitoring-capabilities#task-1930740): ACK actively inspects your applications for security risks and provides security policies for runtime monitoring and alerting.
    
-   [Sandboxed containers](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/overview-10/#concept-2329190): Sandboxed-Container is a container runtime developed by ACK to enhance container security. You can use Sandboxed-Container to run an application in a sandboxed and lightweight VM, which has a dedicated kernel. Sandboxed-Container is suitable for isolating untrusted applications, unhealthy applications, low-performance applications, and workloads among users.
    
-   [TEE-based confidential computing](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/tee-based-confidential-computing/#task-2490003): ACK provides a cloud-native, all-in-one solution for confidential computing based on Intel Software Guard Extensions (Intel SGX). This solution ensures data security, integrity, and confidentiality when you develop, manage, and deliver trusted applications and confidential computing tasks. The confidential computing capabilities provided by ACK allow you to isolate sensitive data and code by using a trusted execution environment.
    

Heterogeneous resources

-   GPUs: GPU-accelerated instances can serve as worker nodes. In addition, GPU scheduling, GPU monitoring, GPU scaling, and GPU O&M are supported. For more information, see [Create a GPU Cluster](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/add-gpu-accelerated-nodes-to-a-cluster#task-2532165).
    
-   GPU sharing: You can use a GPU sharing framework to run multiple containers on the same GPU-accelerated node in a cluster deployed on the cloud or in a data center. For more information, see [Shared GPU Scheduling Overview](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/cgpu-overview/#concept-2484569).
    
-   Cloud-native AI: The cloud-native AI suite provides cloud-native AI computing capabilities and supports orchestration and management of data computing jobs. For more information, see [Overview of the cloud-native AI suite](/help/en/ack/cloud-native-ai-suite/product-overview/cloud-native-ai-suite-overview#concept-2038802).
    

Developer Tools

-   [API](/help/en/ack/ack-managed-and-ack-dedicated/developer-reference/api-cs-2015-12-15-overview)
    
-   [CLI](/help/en/ack/ack-managed-and-ack-dedicated/developer-reference/use-container-service-through-cli/)
    
-   [SDK](/help/en/ack/ack-managed-and-ack-dedicated/developer-reference/download-the-sdk)
    
-   [Terraform](/help/en/ack/ack-managed-and-ack-dedicated/developer-reference/terraform-overview)
