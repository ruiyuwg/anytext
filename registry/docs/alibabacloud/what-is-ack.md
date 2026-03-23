Container Service for Kubernetes (ACK) is one of the first services to participate in the Certified Kubernetes Conformance Program in the world. ACK provides high-performance containerized application management services to allow enterprises to manage the lifecycle of containerized applications and efficiently deploy containerized applications in the cloud.

## ACK cluster types

Container Service for Kubernetes provides ACK managed clusters and ACK dedicated clusters. ACK managed clusters include ACK Basic clusters and ACK Pro clusters.

**Item**

**ACK managed cluster**

**ACK dedicated cluster**

Cluster and node management

You need to only create worker nodes. ACK creates and manages master nodes.

You must create and manage master nodes and worker nodes.

This type of cluster is simple, cost-effective, and highly available. You do not need to manage the control plane.

You have full and fine-grained control over the cluster infrastructure, but you must plan and manage the clusters and update the nodes.

Billing method

-   ACK Basic cluster: You are not charged for cluster management. However, you are charged for the nodes and other basic resources.
    
-   [ACK Pro clusters](/help/en/ack/overview-of-ack-pro-clusters#concept-2558837): You are charged based on the number of ACK Pro clusters that you create.
    

You are not charged for cluster management. However, you are charged for the resources used to create the master nodes, worker nodes, and other basic resources.

User profile

-   Users who require cost reduction
    
-   Users who prioritize application development
    
-   Users who have a basic understanding of Kubernetes
    
-   Users who want to control O&M costs
    
-   Users who require automated O&M on master nodes
    

-   Users who do not overly concern about costs
    
-   Users who are familiar with Kubernetes
    
-   Users who have technical expertise on Kubernetes O&M
    
-   Users who have specific plans for resource allocation and deployment
    
-   Users who have custom requirements for the master nodes
    
-   Users who want to manually manage clusters
    

## Architecture of ACK managed clusters

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/8998704471/CAEQNBiBgMDV_NSZqRkiIGI2MGY1MGZmOTA0ZTRjOGVhNWZhYzRhODA2YzVjOGRk3963382_20230830144006.372.svg)

ACK manages the control planes of ACK managed clusters to provide stable, high-availability, high-performance, and secure Kubernetes services. The managed components include kube-apiserver, kube-controller-manager, kube-scheduler, and etcd. The control plane of each ACK managed cluster contains at least two kube-apiserver components and three etcd components, which are deployed in different zones to ensure high availability at the zone level. ACK actively monitors the status of the control planes, installs vulnerability patches, and provides service level agreements (SLAs) for the control planes.

## Core features

-   Cluster management
    
    -   Cluster creation: You can create various types of clusters based on your business requirements. ACK allows you to configure custom cluster settings and select different types of Elastic Compute Service (ECS) instances as worker nodes. For more information, see [Create an ACK managed cluster](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/create-an-ack-managed-cluster-2/#task-skz-qwk-qfb) and [Create an ACK dedicated cluster (discontinued)](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/create-an-ack-dedicated-cluster/#task-skz-qwk-qfb).
        
    -   Cluster upgrade: You can manually or automatically upgrade the Kubernetes version of your cluster. ACK allows you to update your system components in a centralized manner. For more information, see [Manually upgrade an ACK cluster](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/update-the-kubernetes-version-of-an-ack-cluster#task-1664343) and [Automatically upgrade a cluster](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/automatically-upgrade-an-ack-cluster).
        
    -   [Auto scaling](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/auto-scaling-overview/#concept-1918532): You can vertically scale your clusters in the console to handle unexpected business fluctuations. You can also configure service-level affinity rules and horizontal scaling settings for your business.
        
    -   [Scheduling](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/scheduling-overview/): ACK supports hybrid scheduling of different elastic resources, fine-grained scheduling of heterogeneous resources, and scheduling of batch computing tasks. This improves the performance of applications and the overall resource utilization of clusters.
        
    -   [Multi-cluster management](/help/en/ack/distributed-cloud-container-platform-for-kubernetes/user-guide/overview-9#concept-2424510): You can register clusters that are deployed in data centers and clusters in multiple clouds or regions in a centralized manner.
        
    -   Permission management: ACK integrates Resource Access Management (RAM) and role-based access control (RBAC) for permission management.
        
-   Node pools
    
    You can manage the lifecycle of node pools. You can configure different specifications for node pools in a cluster, such as vSwitches, runtimes, operating systems, and security groups. For more information, see [Node pools](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/node-pool-overview/#task-2013378).
    
-   Application management
    
    -   Application creation: You can create various types of applications from images or templates. ACK allows you to configure custom application settings, such as environment variables, health checks, disk mounting, and logging.
        
    -   Lifecycle management: You can use ACK to manage the lifecycle of applications. For example, you can view, update, replace, and delete applications, roll back application versions, view application events, perform rolling updates, and use triggers to redeploy applications.
        
    -   Pod scheduling: ACK supports pod scheduling based on pod affinity, node affinity, and pod anti-affinity.
        
    -   Application pod scaling: You can scale the number of application pods manually or by using the Horizontal Pod Autoscaler (HPA).
        
    -   Application release: ACK supports canary releases and blue-green deployments. You can use these features to manage the application release lifecycle in a more efficient manner.
        
    -   Application catalog: ACK provides the application catalog feature to facilitate application deployment and cloud service integration.
        
    -   [Application center](/help/en/ack/application-center-overview#concept-2510869): The application center provides a centralized management panel for deploying applications and monitoring the topology of your applications. You can use the application center to facilitate centralized version management and rollback in continuous deployment scenarios.
        
    -   Application backup and recovery: You can back up applications and restore applications from backup data. For more information, see [Back up and restore applications](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/back-up-and-restore-applications-in-an-ack-cluster#task-1993430).
        
-   Storage
    
    -   The Container Storage Interface (CSI) plug-in is supported. For more information, see [Storage](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/csi-overview-1/#concept-2005339).
        
    -   Operations on volumes and persistent volume claims (PVCs):
        
        -   You can create the following types of volumes: Block Storage, Apsara File Storage NAS (NAS), Object Storage Service (OSS), and Cloud Paralleled File System (CPFS).
            
        -   You can mount a volume to a PVC.
            
        -   You can dynamically create and migrate volumes.
            
        -   You can run scripts to view and update volumes and PVCs.
            
-   Network components
    
    -   Flannel and Terway are supported. For more information, see [Network](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/network/#concept-tfy-3kq-wfb).
        
    -   You can specify CIDR blocks for services and pods.
        
    -   You can use the network policy feature. For more information, see [Use network policies in ACK clusters](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/use-network-policies#task-1797447).
        
    -   You can use Ingresses. For more information, see [Ingress management](/help/en/ack/ingress-management).
        
    -   You can perform DNS-based service discovery. For more information, see [DNS-based service discovery](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/service-discovery-dns-1/#task-2038513).
        
-   [GPU](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/overview-5/) allows you to schedule, manage, and maintain various heterogeneous computing resources in a centralized manner. This significantly improves the utilization of GPU resources in ACK clusters for heterogeneous computing.
    
-   [Knative](/help/en/ack/knative-1): Knative is a Kubernetes-based serverless framework. After you deploy Knative components, you can use Knative to manage services and drive events.
    
-   O&M and security
    
    -   [Observability](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/observability-overview/#task-2042182):
        
        -   Monitoring: ACK integrates Managed Service for Prometheus (Prometheus) to monitor clusters, nodes, applications, and pods.
            
        -   Logging: ACK integrates Simple Log Service(SLS) to collect and store logs of clusters and containers.
            
        -   Alerting: ACK supports alerting based on cluster events and container metrics. For more information, see [Alert management](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/alert-management#task-2056339).
            
    -   Cluster inspections and diagnostics
        
        -   [Cluster check](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/work-with-cluster-check/): You can use this feature to check whether your ACK cluster meets the requirements before you perform an operation, such as upgrading or migrating a cluster.
            
        -   [Cluster inspection](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/work-with-the-cluster-inspection-feature/): You can use this feature to view the status of ACK clusters and identify potential risks in the clusters, such as insufficient quotas of cloud resources or high usage of key resources in ACK clusters. You can troubleshoot the risks and fix the issues based on the recommended solutions.
            
        -   [Cluster diagnostics](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/work-with-cluster-diagnostics/): You can use this feature to diagnose nodes, pods, Services, Ingresses, memory, and networks with a few clicks to identify issues in your ACK clusters.
            
    -   [Cost Suite](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/cost-suite/): ACK visualizes the resource usage and cost distribution of your clusters and improves resource utilization.
        
    -   [Security center](/help/en/ack/ack-managed-and-ack-dedicated/security-and-compliance/use-security-monitoring-capabilities#task-1930740): ACK actively inspects your applications for security risks and provides security policies for runtime monitoring and alerting.
        
    -   [Sandboxed containers](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/overview-10/#concept-2329190): Sandboxed-Container is a container runtime developed by ACK to enhance container security. You can use Sandboxed-Container to run an application in a sandboxed and lightweight VM, which has a dedicated kernel. Sandboxed-Container is suitable for isolating untrusted applications, unhealthy applications, low-performance applications, and workloads among users.
        
    -   [TEE-based confidential computing](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/tee-based-confidential-computing/#task-2490003): ACK provides a cloud-native, all-in-one solution for confidential computing based on Intel Software Guard Extensions (Intel SGX). This solution ensures data security, integrity, and confidentiality when you develop, manage, and deliver trusted applications and confidential computing tasks. The confidential computing capabilities provided by ACK allow you to isolate sensitive data and code by using a trusted execution environment.
        

## Service architecture

The following figure shows the architecture of Container Service for Kubernetes.

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/9998704471/CAEQNBiBgIC4pdyZqRkiIDJkM2Q0NGY1NTZmNTRjNjE5ZjFkOWRjNDQ5NmRiNTlh3963382_20230830144006.372.svg)

-   [Container Registry](/help/en/acr/product-overview/what-is-container-registry#concept-2058233) provides secure hosting and lifecycle management for cloud-native assets. Container Registry is seamlessly integrated with ACK to provide an all-in-one solution for image distribution in cloud-native scenarios.
    
-   [Service Mesh (ASM)](/help/en/asm/product-overview/what-is-asm#concept-2366983) is a managed service mesh platform for centralized traffic management of applications that use the microservices architecture. ASM is compatible with open source Istio and supports multi-cluster traffic management. ASM also allows you to manage communication among containerized applications and applications that run on VMs in a centralized manner.
    
-   [ACK Serverless](/help/en/ack/serverless-kubernetes/product-overview/ask-overview#concept-pc2-xyz-xdb) is a serverless Kubernetes service provided by Alibaba Cloud based on the elastic computing architecture. ACK Serverless allows you to create containerized Kubernetes applications without the need to manage or maintain clusters.
    
-   [ACK Edge](/help/en/ack/ack-edge/product-overview/ack-edge-overview#task-2478491) is a container service based on the standard Kubernetes runtime environment. It coordinates application delivery and O&M among the cloud, edge, and terminal. This service also enhances node autonomy at the edge.
    
-   [Distributed Cloud Container Platform for Kubernetes (ACK One)](/help/en/ack/distributed-cloud-container-platform-for-kubernetes/product-overview/ack-one-overview#concept-2148686) is an enterprise-class cloud-native container platform developed by Alibaba Cloud to meet container management requirements in hybrid cloud, multi-cluster, distributed computing, and disaster recovery scenarios. You can register external Kubernetes clusters that are deployed in all regions or on all types of infrastructure by using ACK One. ACK One is compatible with the APIs of open source Kubernetes. This allows you to manage and maintain computing resources, networks, storage, security, monitoring, logs, jobs, applications, and traffic in a centralized manner.
    
-   The [cloud-native AI suite](/help/en/ack/cloud-native-ai-suite/product-overview/cloud-native-ai-suite-overview#concept-2038802) is used to orchestrate and manage AI-related tasks and to schedule and maintain various heterogeneous resources in containerized environments. The component set can significantly accelerate the delivery of AI projects and improve the resource utilization for clusters that consist of heterogeneous computing resources. ACK provides multiple components, extensions, and customizable configurations to support cloud-native AI capabilities.
    
-   [ACK Lingjun managed clusters](/help/en/ack/ack-lingjun-managed-clusters/product-overview/overview-14) are developed based on Container Service for Kubernetes, which provide standard Kubernetes services with fully-managed and highly-available control planes. ACK Lingjun managed clusters allow you to use Intelligent Computing Lingjun nodes as the worker nodes of Kubernetes clusters.
    

## Alibaba Cloud services that work with ACK

You can use ACK clusters to create resources, such as ECS instances, networks, and storage resources, for your applications. As shown in the following figure, you can create a bundle that involves the least services to obtain technical support in cloud-native system development, security compliance, microservices, observability, storage, computing, and networks. The technical support can help you develop and maintain your ACK clusters in a more efficient manner.

We recommend that you use the observability services provided by Alibaba Cloud, including the logging and monitoring services. You can use these observability services to monitor your ACK clusters, including infrastructure resources, containers, application performance, and services.

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/9998704471/CAEQNBiBgID7iPiZqRkiIGNmMmFjMzAzMzM0OTQ4ZmFhZWJmY2Q0MTFlYTNjYjky4450891_20240613171529.187.svg)

The following table describes the cloud services in the preceding figure.

**Category**

**Description**

**Computing**

ECS, Elastic Bare Metal, and Elastic GPU Service: provide worker nodes for node pools.

Elastic Container Instance: provides elastic container instances for ACK Serverless clusters.

Auto Scaling: supports the configurations and auto scaling of node pools.

**Network**

VPC: provides private networks for clusters.

SLB: includes ALB, NLB, and CLB, exposes the Kubernetes API server and applications.

NAT Gateway: provides IP address translation services for the cluster. This way, node pools in the cluster can access the Internet.

Elastic IP Address (EIP): provides public IP addresses for individual nodes to access the Internet.

**Storage**

Elastic Block Storage (EBS): provides data disks that you can mount to worker nodes to expand storage.

NAS: provides file storage for your workloads.

OSS: provides shared storage for your workloads.

Cloud Parallel File Storage (CPFS): provides shared storage for your workloads.

**Security**

RAM: a permission management service that can work with RBAC.

Security Center: detects security risks in containers.

Key Management Service (KMS): provides Secret encryption in your ACK clusters.

**Observability**

Prometheus: provides Prometheus monitoring services and monitors the topology of your ACK clusters.

SLS: collects and stores ACK cluster logs.

**Cloud-native assets**

Container Registry: provides image repositories for container images.

**Others**

Resource Orchestration Service (ROS): uses templates to facilitate resource orchestration.

## **References**

**Item**

**Description**

Usage notes

-   Before you use ACK, you must get familiar with the usage notes and high-risk operations in order to identify and avoid potential operational risks. For more information, see [Usage notes and instructions on high-risk operations](/help/en/ack/product-overview/before-you-start).
    
-   For more information about the limits when you use ACK, such as capacity limits and quotas, see [Quotas and limits](/help/en/ack/product-overview/limits).
    

Dynamic announcements and release notes

-   For more information about the updates and announcements of ACK, such as product change announcements, product maintenance announcements, and CVE vulnerability fixes, see [Announcements and Updates](/help/en/ack/product-overview/announcements-and-updates/).
    
-   For more information about the release notes of ACK, including features, supported Kubernetes versions, operating system images, runtimes, and components, see [Release Notes](/help/en/ack/product-overview/release-notes-1/).
    

Region and time zone

For more information about the regions and time zones supported by ACK, see [Supported regions](/help/en/ack/product-overview/supported-regions) and [Time zones](/help/en/ack/product-overview/supported-time-zones).

Getting Started

You can get started with ACK to create and use an ACK cluster. For example, you can use ACK to deploy a magic cube game. For more information, see [Getting Started](/help/en/ack/ack-managed-and-ack-dedicated/getting-started/).

Kubernetes version

ACK updates the corresponding technical support for Kubernetes versions.based on the iterations of the open source Kubernetes version. For more information, see [Support for Kubernetes versions](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/support-for-kubernetes-versions/).

Best practices

You can refer to the best practices of ACK about how to use the resources and capabilities of ACK in different scenarios. The resource and capabilities include clusters, nodes, node pools, networks, applications, Knative, storage, observability, cost management suite, and auto scaling. For more information, see [Best practices](/help/en/ack/ack-managed-and-ack-dedicated/use-cases/best-practices).

Developer reference

In addition to the ACK console and kubectl, you can access Container Service for Kubernetes by using APIs, SDKs, CLI, and Terraform. For more information, see [Developer Reference](/help/en/ack/ack-managed-and-ack-dedicated/developer-reference/).

Billing

You are charged for cluster management and the related cloud resources when you use ACK clusters. For more information, see [Billing](/help/en/ack/product-overview/billing-overview).

Learning materials

[Kubernetes official website](https://kubernetes.io/)

Search for DingTalk group 53765001287 or click [ACK DingTalk Group](https://www.dingtalk.com/download?action=joingroup&code=v1,k1,9g5ONYIbiAxd9QSQ/eBni8CNqo9qHgF8mIZD+/n20W4=&_dt_no_comment=1&origin=11#/) on your mobile phone to join the DingTalk group, and then contact Container Service for Kubernetes experts for technical support.
