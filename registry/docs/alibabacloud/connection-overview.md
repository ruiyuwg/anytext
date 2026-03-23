Elastic Container Instance provides a basic pod runtime environment to Kubernetes clusters. Other capabilities such as dependencies between services, load balancing, auto scaling, and regular scheduling must still be provided by Kubernetes. This topic describes how to connect Container Service for Kubernetes (ACK) to Elastic Container Instance and run pods on Elastic Container Instance.

## Connection methods

Elastic Container Instance provides a hierarchical solution to manage Kubernetes resources. Elastic Container Instance schedules and manages pods at the infrastructure layer, whereas Kubernetes manages workloads such as Deployments, Services, StatefulSets, and CronJobs on the platform layer.

Elastic Container Instance is connected to Kubernetes by using virtual nodes based on Virtual Kubelet provided by the Kubernetes community. This way, Kubernetes clusters are empowered with high elasticity and are no longer limited by the computing capacity of cluster nodes. After you connect Elastic Container Instance to Kubernetes, Elastic Container Instance takes over the management of pods, including the infrastructure of pods and the resources for pods. Kubernetes no longer needs to manage the lifecycle and resources of the underlying VMs.

Elastic Container Instance is seamlessly integrated into ACK. You can use ACK Serverless clusters or ACK clusters to experience the capabilities of Elastic Container Instance in terms of running containers.

### ACK Serverless clusters **(pods only run on Elastic Container Instance)**

In this connection method, all Kubernetes pods run on Elastic Container Instance. Elastic Container Instance manages the underlying infrastructure. Kubernetes only manages workloads to ensure the reliability of the business, without the need to focus on the O&M and capacity of the underlying VMs.

If you are selecting a type of Kubernetes clusters, we recommend that you select ACK Serverless clusters. ACK Serverless clusters are optimized to run pods only on Elastic Container Instance. ACK Serverless clusters are fully managed and cost-effective Kubernetes clusters. ACK Serverless clusters are suitable for online and offline business, simulation environments, and development and test environments.

-   **Cost-effectiveness**
    
    ACK Serverless clusters allow you to deploy containerized applications without the need to purchase and manage nodes and plan node capacity. You are charged only for the amount of CPU and memory resources that you allocate to your applications.
    
-   **Zero O&M**
    
    You can use API operations or command lines of Kubernetes to manage containerized applications. ACK Serverless clusters are integrated with other Alibaba Cloud services to help you simplify the development on Kubernetes and focus on your applications instead of the management of underlying resources.
    

In ACK Serverless clusters, you can create Elastic Container Instance-based pods without manually deploying virtual nodes. Pods in ACK Serverless clusters run in a secure and isolated container runtime environment based on Elastic Container Instance. Each pod is an elastic container instance. For more information, see [What is ACK Serverless?](/help/en/ack/serverless-kubernetes/product-overview/ask-overview#concept-pc2-xyz-xdb)

![ASK ](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/1042576961/p203175.png)

### **ACK clusters (Pods run on Elastic Container Instance and Elastic Compute Service (ECS))**

ACK is one of the first services to participate in the Certified Kubernetes Conformance Program in the world. ACK is integrated with the virtualization, storage, networking, and security capabilities provided by Alibaba Cloud, simplifies the creation and expansion of clusters, and allows you to focus on the development and management of containerized applications.

If you have created an ACK cluster, you can deploy virtual nodes in the cluster to use elastic container instances. After you deploy virtual nodes, you can create elastic container instances on demand in the virtual nodes to extend your ACK clusters, without the need to plan the computing capacities of the virtual nodes. The elastic container instances can communicate with the pods on real nodes of the clusters. You can schedule the excess traffic of long-lived workloads to run on Elastic Container Instance. This accelerates the progress of scaling out, and reduces idle resources and scaling costs. When business traffic decreases, you can release Elastic Container Instance-based pods to reduce costs.

In ACK clusters, you must use the Virtual Kubelet component to manually deploy virtual nodes before you create Elastic Container Instance-based pods. Pods on virtual nodes run in a secure and isolated container environment based on Elastic Container Instance. Each pod runs as an elastic container instance. For more information, see [ACK cluster overview](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/ack-cluster-overview/#concept-jlf-y4f-vdb).

![ACK+ECI](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/9647374161/p203269.png)

**Note**

If you deploy self-managed Kubernetes clusters in your data centers or ECS, you must deploy VNode-based virtual nodes to use elastic container instances. For more information, see [Overview](/help/en/eci/user-guide/overview-3#topic-2148389).

## Management tools

After you connect elastic container instances to Kubernetes by using the Virtual Kubelet technology and deploying virtual nodes, you can use one of the following tools to manage Kubernetes clusters and view the running status of elastic container instances:

-   **Elastic Container Instance console**
    
    You can view the running status of elastic container instances in the Elastic Container Instance console. Procedure:
    
    1.  Log on to the [Elastic Container Instance console](https://eci.console.alibabacloud.com).
        
    2.  In the top navigation bar, select a region.
        
    3.  On the **Container Group** page, you can view the existing elastic container instances in the region.
        
-   **ACK console**
    
    You can manage ACK Serverless clusters and ACK clusters and view the running status of elastic container instances in the ACK console. To view the running status of elastic container instances, perform the following operations:
    
    1.  Log on to the [ACK console](https://cs.console.alibabacloud.com/).
        
    2.  In the top navigation bar, select a region.
        
    3.  In the left-side navigation pane, click **Clusters**.
        
    4.  On the Clusters page, find the cluster that you want to view and click the cluster name to go to the details page.
        
    5.  In the left-side navigation pane, choose **Workloads > Pods**.
        
    6.  On the **Pods** page, select a namespace from the Namespace drop-down list. Then, you can view elastic container instances in the namespace.
        
-   **Cloud Shell**
    
    You can access Kubernetes clusters by using Cloud Shell provided by Alibaba Cloud and run kubectl commands on Cloud Shell to manage the clusters. For more information, see [Use kubectl to manage ACK clusters on Cloud Shell](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/use-kubectl-on-cloud-shell-to-manage-ack-clusters-1690962464408#task-y24-gbm-2gb).
    
-   **kubectl client**
    
    You can use the kubectl client on your computer to access remote Kubernetes clusters and run kubectl commands to manage the clusters. For more information, see [Obtain the kubeconfig file of a cluster and use kubectl to connect to the cluster](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/obtain-the-kubeconfig-file-of-a-cluster-and-use-kubectl-to-connect-to-the-cluster#task-ubf-lhg-vdb).
    

## Limits

Elastic Container Instance does not support some Kubernetes features such as hostPaths and DaemonSets due to security limits of Alibaba Cloud public cloud and limits imposed by virtual nodes. The following table describes the unsupported features.

Unsupported feature

Description

Recommended alternative

HostPath

Allows you to mount files from on-premises hosts to containers.

Use emptyDir volumes, disks, or File Storage NAS (NAS) file systems.

HostNetwork

Allows you to map a host port to a container.

Create a Service of the LoadBalancer type.

DaemonSet

Allows you to deploy a static pod on the host of a container.

Deploy multiple images in a pod by using sidecar containers.

Service of the NodePort type

Allows you to map a host port to a container.

Create a Service of the LoadBalancer type.

When you use elastic container instances based on ACK, take note of the following items:

-   To simplify image pulling, you can upload your container images to the image repository in advance. We recommend that you use Alibaba Cloud Container Registry and the image address (registry-vpc.xxx) in a virtual private cloud (VPC) to upload your container images.
    
-   Both connection methods described in this topic support common controllers such as Deployments, ReplicaSets, CronJobs, and StatefulSets.
    
-   Both connection methods described in this topic use PrivateZone to implement service discovery. We recommend that you enable PrivateZone when you create a cluster.
    
-   Both connection methods described in this topic support load balancing, which indicates that the type of Service is LoadBalancer.
    

## **Use elastic container instances**

### ACK Serverless clusters

1.  Create an ACK Serverless cluster. For more information, see [Create an ACK Serverless cluster](/help/en/ack/serverless-kubernetes/user-guide/create-an-ask-cluster-2).
    
2.  Prepare a container image.
    
3.  Create an Elastic Container Instance-based pod. For more information about Elastic Container Instance-based pods, see [Overview](/help/en/eci/user-guide/overview-4).
    

### **ACK clusters**

1.  Create an ACK cluster. For more information, see [Create an ACK managed cluster](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/create-an-ack-managed-cluster-2/).
    
2.  Deploy the ack-virtual-node component to generate a virtual node. For more information, see [Step 1: Deploy ack-virtual-node in ACK clusters](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/deploy-the-virtual-node-controller-and-use-it-to-create-elastic-container-instance-based-pods).
    
    **Note**
    
    To use Elastic Container Instance features, you must update ack-virtual-node.
    
    -   For information about the versions of ack-virtual-node, see [ack-virtual-node](/help/en/ack/product-overview/ack-virtual-node).
        
    -   For information about how to update ack-virtual-node, see [Manage components](/help/en/ack/manage-system-components).
        
    
3.  Prepare a container image.
    
4.  Create an Elastic Container Instance-based pod. For more information about Elastic Container Instance-based pods, see [Overview](/help/en/eci/user-guide/overview-4).
    

## **Scheduling methods**

For ACK Serverless clusters, pods only run on Elastic Container Instance. You do not need to schedule pods. For ACK clusters, pods run on Elastic Container Instance and ECS. You can schedule pods to run on Elastic Container Instance based on your requirements. The following list describes the scheduling methods:

-   **Manually schedule pods to run on Elastic Container Instance**
    
    You can manually schedule pods to specified virtual nodes and run on Elastic Container Instance by configuring pod labels and topologySpreadConstraints and adding nodeSelector. For more information, see the following topics:
    
    -   [Schedule pods to an x86-based virtual node](/help/en/eci/user-guide/schedule-pods-to-virtual-kubelet)
        
    -   [Schedule pods to an Arm-based virtual node](/help/en/eci/user-guide/scheduling-pods-to-virtual-nodes-in-the-arm-architecture)
        
    -   [(In invitational preview) Schedule pods to run on Windows virtual nodes](/help/en/eci/create-a-windows-based-pod)
        
    -   [Spread Elastic Container Instance-based pods across zones and configure affinities](/help/en/eci/user-guide/implement-eci-pod-zone-distribution-or-affinity-scheduling)
        
-   **Automatically schedule pods to run on Elastic Container Instance**
    
    eci-profiles provide the ECI Scheduler feature to implement a new scheduling mechanism based on mutating webhooks. You can specify the namespace or pod labels to be matched in an eci-profile. Pods that have the specified labels are automatically scheduled to run on Elastic Container Instance. For more information, see [Configure an eci-profile](/help/en/eci/user-guide/configure-an-eci-profile).
    

## **Implement the features of Elastic Container Instance**

When you schedule pods of a Kubernetes cluster to run on Elastic Container Instance, you can add annotations to the pods to make full use of the features of Elastic Container Instance. Make sure that the annotations that you want to add comply with the Kubernetes syntax. You must add annotations to the metadata in the configuration files of pods. For information about the annotations that you can add and configuration examples of the annotations, see [Pod annotations](/help/en/eci/user-guide/pod-annotations-1#topic-1860148).

**Note**

You can manually add annotations when you create pods. You can also edit the eci-profile configuration file. Then, Elastic Container Instance automatically adds annotations to pods that have the specified labels.
