When you use a Container Service for Kubernetes (ACK) cluster, you may have to launch many pods within a short period of time. Virtual nodes enable rapid pod creation without the need to reserve or maintain node pools, offering elasticity and reducing resource costs. They allow direct scheduling of pods to elastic container instances, bypassing the slower scale-out speeds and potential resource waste associated with reserving additional Elastic Compute Service (ECS) nodes.

## **Why do you need virtual nodes?**

## **What is a virtual node?**

Nodes are the basic units that provide compute and storage resources to run workloads in ACK clusters. In most cases, an ACK cluster has at least one Elastic Compute Service (ECS) node pool. After a pod is created, the kubelet schedules the pod to an ECS node in the node pool. This scheduling mode is suitable for applications that receive a stable volume of traffic. However, this scheduling mode cannot efficiently handle traffic spikes, even though ACK can scale out ECS instances. This is because the creation and startup of ECS instances is time-consuming. With the help of virtual nodes, you can directly schedule pods to [elastic container instances](https://www.alibabacloud.com/zh/products/elastic-container-instance). This simplifies node O&M, eliminates idle nodes, and reduces the resource cost.

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/1656732471/CAEQLxiBgMDLjc.JmxkiIDVhYjM0MWRmMWFlMzRjNjBiNDI1NDA2YzMxMjA2NDU34075777_20231113142006.912.svg)

A virtual node encapsulates compute resources by using the ack-virtual-node component. This way, you can deploy workloads without the need to worry about the infrastructure. ack-virtual-node will automatically schedule pods to elastic container instances. Elastic Container Instance is a serverless container service, in which each elastic container instance is equivalent to a pod. To deploy applications on elastic container instances, you only need to provide a Docker image to deploy containers and pay for resources that the containers consume.

## **Benefits**

Virtual nodes provide the following benefits:

-   O&M-free: You do not need to manage or maintain infrastructure resources. In addition, virtual nodes are hosted resources, meaning there is no need to perform regular node O&M operations for them, such as system updates and patch installation.
    
-   Ultra-large capacity: Scale out to 50,000 pods in a cluster at any time.
    
    **Important**
    
    If your pods are associated with many Services, we recommend that you keep no more than 20,000 in the cluster.
    
-   Second-level scaling: Quickly create thousands of pods to handle traffic spikes.
    
-   Security isolation: Deploy pods on elastic container instances. Instances on which pods are deployed are isolated from each other by using lightweight virtual sandboxes.
    
-   Cost reduction: Pods are created on demand and billed on a pay-as-you-go basis. The serverless architecture helps prevent resource waste and reduce O&M costs.
    

## **Scenarios**

Virtual nodes are suitable for the following scenarios based on their characteristics and benefits:

-   Online businesses
    
    For online businesses that need to frequently handle traffic spikes, such as online education and e-commerce, using virtual nodes can prevent system overloading caused by failures to scale out resources during peak hours and avoid resource waste during off-peak hours.
    
-   Data processing
    
    If you use virtual nodes to handle many concurrent online tasks, such as Spark and Presto tasks, you no longer need to worry about the cost of underlying resources. You can deploy thousands of pods within a short period of time to handle big data businesses.
    
-   AI jobs
    
    If you use virtual nodes, you do not need to reserve resources for long-term AI jobs that expend large amounts of compute resources, such as model training and model inference jobs. Resources can be deployed on demand and billed on a per-second basis to reduce costs. In addition, resources can be scaled out within seconds to handle unexpected jobs.
    
-   CI/CD testing
    
    You can use virtual nodes to create and release container instances at any time to handle batch test tasks for CI/CD, such as CI packaging, stress tests, and simulation tests. Resources can be deployed on demand and billed on a per-second basis. This lets you provision many resources at a low cost.
    
-   Jobs and CronJobs
    
    Jobs and CronJobs are automatically terminated after they are completed, and the pods created by them are also deleted. If you use virtual nodes, after a Job or CronJob is completed, resource billing automatically stops and the compute resources are released to avoid incurring additional costs.
    

## **Limitations**

Virtual nodes are available in ACK Edge clusters that run Kubernetes V1.28 and later. We recommend that you familiarize yourself with their limitations before use.

-   DaemonSets are not supported. You can replace DaemonSets with sidecar containers.
    
-   You cannot specify `HostPath` or `HostNetwork` in pod `manifests`.
    
-   Privileged containers are not supported. You can use a security context to add capabilities to a pod.
    
    **Note**
    
    The privileged container feature is in internal preview. To use this feature, [submit a ticket](https://smartservice.console.alibabacloud.com/console.htm).
    
-   NodePort Services and the Session Affinity feature are not supported.
    
-   The China South Finance and Alibaba Gov Cloud regions are not supported.
    

## **Billing**

The virtual node feature is free of charge. An ACK cluster management fee is charged when you use virtual nodes. In addition, Alibaba Cloud services that are used by virtual nodes, such as Elastic Container Instance, Virtual Private Cloud (VPC), and Server Load Balancer (SLB), are also billed. For more information about the fees for running pods on elastic container instances, see [Billing overview](/help/en/eci/product-overview/billing-overview).

## **Quick start**

You can refer to [Schedule pods to elastic container instances through virtual nodes](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/deploy-the-virtual-node-controller-and-use-it-to-create-elastic-container-instance-based-pods) to quickly learn how to schedule pods to virtual nodes.

1.  Install the ack-virtual-node component to enable the virtual node feature.
    
2.  To schedule pods onto elastic container instances that serve as virtual nodes, add a label to either the pods or the namespace.
    

## Related operations

Ensure the Elastic Container Instance platform version is compatible with the target Kubernetes version. Prior to upgrading a cluster, the system checks for the compatibility between the Elastic Container Instance platform version and Kubernetes. If the Elastic Container Instance-based pods are incompatible with the target Kubernetes version, you must manually delete and recreate them before upgrading the cluster. For more information, see [Update Elastic Container Instance platform version](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/eci-platform-version-compatibility-matrix).

**Supported operation**

**Description**

**References**

Flexible configuration of pods

Create an ECI profile, a ConfigMap named eci-profile, to batch configure the Elastic Container Instance-based pods, including security groups and zones. Updated configurations apply immediately to new Elastic Container Instance-based pods without restarting. Existing Elastic Container Instance-based pods apply updates after a rolling update.

[Configure an eci-profile](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/configure-an-eci-profile)

You can add pod annotations to use some Elastic Container Instance features, such as specifying elastic container instance types, enabling image cache to accelerate pod creation, assigning IPv6 addresses to Elastic Container Instance-based pods, and expanding the temporary storage.

[ECI pod annotations](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/pod-annotations-1)

Schedule pods to virtual nodes

ACK offers multiple scheduling policies, allowing you to schedule application pods exclusively to virtual nodes. You can also schedule pods to pay-as-you-go or subscription ECS nodes, use virtual nodes when ECS resources are unavailable, and scale in pods in reverse order. For more information about selecting a scheduling method, see [Schedule a pod to a virtual node](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/comparison-and-introduction-of-virtual-node-scheduling-scheme-ack/).

-   [Enable the virtual node-based pod scheduling policy for an ACK cluster](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/enable-ack-serverless-cluster-virtual-node-scheduling-policy)
    
-   [Schedule pods to elastic container instances through virtual nodes](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/deploy-the-virtual-node-controller-and-use-it-to-create-elastic-container-instance-based-pods)
    
-   [Use ACS computing power through ACK managed cluster Pro edition](/help/en/cs/user-guide/access-acs-computing-power-in-an-ack-cluster)
    
-   [Configure resource allocation based on ECS instances and elastic container instances](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/configure-eci-scaling)
    
-   [Spread Elastic Container Instance-based pods across zones and configure affinities](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/spread-elastic-container-instance-based-pods-across-zones-and-configure-affinities)
    

Schedule pods to nodes with specific OS or architecture

By default, ACK clusters schedule workload pods to x86-based virtual nodes. Pods become pending when x86 nodes are insufficient. You can also schedule workload pods to ARM-based virtual nodes.

[Schedule workloads to ARM-based virtual nodes](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/schedule-workloads-to-arm-based-virtual-nodes)

To schedule pods to Windows nodes, add Windows virtual nodes to the cluster and schedule pods accordingly.

[(In invitational preview) Schedule pods to run on Windows virtual nodes](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/create-a-windows-based-pod)

Best practices for virtual nodes

Handle peak cluster computing resource demands by running jobs on virtual nodes. This method minimizes cluster O&M costs because you do not need to create new nodes.

[Use an elastic container instance to run a Job](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/use-an-elastic-container-instance-to-run-a-job)

Use elastic container instances to run Spark jobs in a Container Service for Kubernetes (ACK) cluster. You can configure scheduling policies to schedule pods to elastic container instances. This way, you can create Elastic Container Instance-based pods and pay only for the resources used by the pods. This reduces idle resources and prevents incurring unexpected costs. In addition, the cost-effectiveness and efficiency of Spark jobs are improved.

[Use elastic container instances to run Spark jobs](/help/en/ack/ack-managed-and-ack-dedicated/use-cases/use-eci-elastic-resources-to-run-spark-jobs-efficiently)

Use the ACK Virtual Node component to automatically inject sidecar containers into pods scheduled on virtual nodes, decoupling them from application containers.

[Inject sidecar containers into pods on virtual nodes](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/injecting-a-sidecar-container-into-a-virtual-node-pod)

Modify Prometheus monitoring configurations to collect the metrics from specific virtual nodes.

[Collect the metrics of the specified virtual node](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/collect-the-metrics-of-a-specified-virtual-node)

Virtual nodes support service discovery, including intranet, headless, and ClusterIP services.

[Use Alibaba Cloud DNS PrivateZone to implement service discovery on virtual nodes](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/use-alibaba-cloud-dns-privatezone-to-implement-service-discovery-on-virtual-nodes)

FAQs about virtual nodes

Frequently asked questions about using virtual nodes.

[FAQs about virtual nodes](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/virtual-node-faq)
