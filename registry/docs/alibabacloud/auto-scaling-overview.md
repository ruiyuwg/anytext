If the resource requests of your business are unpredictable or periodically change, we recommend that you enable auto scaling for your business. For example, you can enable auto scaling for web applications, gaming services, or online education applications. Workload scaling can automatically adjust the number of pod replicas or the amount of resources allocated to workloads to meet the requirements of workloads. Workload scaling helps you handle traffic spikes and save resource costs.

## Usage notes

-   This topic introduces workload scaling and node scaling to O&M engineers and developers. We recommend that you first familiarize yourself with the scaling solutions provided by the Kubernetes community, such as [Horizontal Pod Autoscaler (HPA)](https://kubernetes.io/docs/tasks/run-application/horizontal-pod-autoscale/) and [Vertical Pod Autoscaler (VPA)](https://github.com/kubernetes/autoscaler/tree/vpa-release-0.8/vertical-pod-autoscaler), and node scaling solutions, such as [Cluster Autoscaling](https://kubernetes.io/docs/concepts/cluster-administration/cluster-autoscaling/).
    
-   If your cluster has more than 500 nodes or 10,000 pods, refer to the usage notes described in [Plan the cluster resource scaling frequency](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/suggestions-on-how-to-work-with-large-ack-pro-clusters#04a151487eqwt) to ensure the stability of your cluster and the control plane of the cluster.
    

## Workload scaling and compute resource scaling

The auto scaling feature of Container Service for Kubernetes (ACK) provides elasticity from the following aspects:

-   Workload scaling: This scheduling layer solution operates at the pod level by dynamically adjusting the number of pods or the amount of resources allocated to pods based on workload changes. For example, HPA can automatically adjust the number of application pods based on traffic changes to further adjust the amount of resources occupied by the current workload.
    
-   Compute resource scaling: This resource layer solution consists of node scaling and virtual node scaling. You can use this solution to increase or decrease the amount of resources allocated to your applications based on pod scheduling results and resource usage.
    

We recommend that you use the preceding solutions in combination. This allows you to scale pod replicas to improve resource utilization and scale compute resources in the cluster to meet the resource requirements of pods.

### Workload scaling **solutions**

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/6227825671/CAEQTxiBgIC0tZeM2BkiIGUyMDY4N2UwMDZkYjQ3OGVhMTFjMzRjMjExZmUwMzgw4592458_20240814161451.715.svg)

You can run the `kubectl scale` command to manually adjust the number of pods. This method is suitable for temporary scaling requirements. The following table describes how to select among the workload scaling solutions provided by ACK based on your business scenarios. You can use these solutions to meet requirements such as cost control, stability improvement, and flexible resource management.

**Solution**

**Description**

**Scaling metric**

**Scenario**

**References**

HPA

HPA scales out pods during peak hours to handle traffic spikes and scales in pods during off-peak hours to reduce resource costs. HPA is suitable for most scenarios.

-   Resource metrics such as CPU and memory utilization
    
-   [Custom metrics](https://kubernetes.io/docs/tasks/run-application/horizontal-pod-autoscale/#scaling-on-custom-metrics)
    

HPA is ideal for online services that include a large number of pods and require frequent scaling to handle traffic fluctuations, such as e-commerce services, online education, and financial services.

[Implement Horizontal Pod Autoscaler (HPA)](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/horizontal-pod-autoscaling#task-1830087)

CronHPA

CronHPA uses a Crontab-like strategy to scale pods based on a predefined schedule. You can specify the time zone and date on which scaling is performed in the schedule. You can also exclude dates, such as holidays, from the schedule. CronHPA can be used together with HPA.

Scheduled scaling

CronHPA is ideal for applications that have predictable traffic patterns and scenarios where you need to run tasks at a scheduled time.

-   [Use CronHPA](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/cronhpa#task-2391975)
    
-   [Make CronHPA compatible with HPA](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/make-cronhpa-compatible-with-hpa)
    

VPA

VPA monitors the resource consumption mode of pods and provides recommendations on CPU and memory allocation. VPA adjusts resource allocation but does not change the number of pod replicas.

VPA provides recommendations on the CPU request, CPU limit, memory request, and memory limit for pods. In addition, VPA can automatically adjust the preceding resource requests and limits.

VPA is ideal for scenarios where stable resource allocation is required, such as scale-out of stateful applications and deployment of large monolithic applications. In most cases, VPA takes effect when pods are recovered from anomalies.

[Vertical Pod Autoscaler (VPA)](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/vertical-pod-autoscaling#task-2455855)

Kubernetes-based Event Driven Autoscaling (KEDA)

KEDA supports a rich variety of event sources and enables event-driven auto scaling for workloads.

Number of events, such as the queue length.

KEDA is ideal for scenarios where instant scaling is required, especially event-based offline jobs. For example, you can enable KEDA for offline video and audio transcoding jobs, event-driven jobs, and stream processing jobs.

[Event-driven autoscaling](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/ack-keda)

Advanced Horizontal Pod Autoscaler (AHPA)

AHPA can automatically learn the pattern of workload fluctuations and predict resource demand based on historical metric data to help you implement predictive scaling.

-   Resource metrics such as CPU, memory, and GPU utilization
    
-   Traffic metrics such as queries per second (QPS) and response time (RT)
    
-   Other custom metrics
    

AHPA is ideal for scenarios where traffic periodically fluctuates, such as live streaming, online education, and gaming services.

[Predictive scaling based on AHPA](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/ahpa-overview-1/)

In addition to the preceding solutions, you can use the UnitedDeployment controller to define workloads. You can use the UnitedDeployment controller to manage multiple workloads of the same type on multiple subsets in a flexible and convenient manner. This allows you to dynamically adjust the number of pod replicas on each subset. You can use the UnitedDeployment controller together with the preceding solutions to enable flexible workload scaling and scheduling for scenarios where multiple types of compute resources are used. For more information, see [Implement workload scaling based on the UnitedDeployment controller](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/use-the-uniteddeployment-controller-in-ack-clusters).

### **Compute resource scaling**

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/6227825671/CAEQTxiBgIDexpyM2BkiIDllMWI4NzUyYTY5YTRkNDU5ZDVhNWUyNmRkZTM1Njgy4592458_20240814160030.932.svg)

In scenarios where instant scaling is required to handle traffic fluctuations, you need to enable the cluster to automatically adjust compute resources based on workload changes. This improves the elasticity of your business and reduces your O&M work. The components for compute resource scaling listen for pending pods to decide whether new ECS nodes or elastic container instances are required for scheduling pods.

For more information about node scaling, see [Node scaling](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/overview-of-node-scaling/).

**Important**

The resource delivery statistics provided in the following table are only theoretical values. The actual values may vary based on your environment.

**Solution**

**Description**

**Scenario**

**Resource delivery efficiency**

**References**

Node auto scaling

You can use the node auto scaling feature to enable ACK to automatically scale nodes when resources in your cluster cannot fulfill pod scheduling.

The node auto scaling feature is suitable for all scenarios and is especially ideal for online services, deep learning tasks, small-scale scaling activities, and workloads that require only one scaling activity each time. For example, you can enable node auto scaling for a cluster that contains less than 20 node pools with auto scaling enabled or node pools that have auto scaling enabled, each containing less than 100 nodes.

The time required to add 100 nodes to a cluster:

-   Standard mode: 120 seconds.
    
-   Swift mode: 60 seconds.
    
-   Standard mode with [images that support quick boot (Qboot)](/help/en/alinux/product-overview/alibaba-cloud-linux-overview#section-to6-5lp-7d6): 90 seconds.
    
-   Standard mode with [images that support quick boot (Qboot)](/help/en/alinux/product-overview/alibaba-cloud-linux-overview#section-to6-5lp-7d6): 45 seconds.
    

[Enable node auto scaling](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/auto-scaling-of-nodes#task-1893824)

Node instant scaling

Compared with node auto scaling, node instant scaling provides higher scaling speeds, improved scaling efficiency, and a higher success rate of resource delivery. In addition, you can view the health status of node instant scaling based on the inventory of ECS instances. For more information about the comparison between node autoscaling and node instant scaling, see [Solution comparison](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/overview-of-node-scaling/#b4fb6d551dcou).

The node instant scaling feature is suitable for all scenarios and is especially ideal for large-scale clusters or clusters that require faster resource scaling, auto scaling across multiple instance types and zones, and advanced scheduling strategies such as topology spread constraints. A cluster is considered large if a node pool that has auto scaling enabled in the cluster contains more than 100 nodes or the cluster has more than 20 node pools that have auto scaling enabled.

The time required to add 100 nodes to a cluster:

-   [ContainerOS in swift mode](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/use-containeros-to-quickly-scale-out-nodes): 45 seconds.
    
-   Standard mode: 103 seconds.
    
-   Swift mode: N/A.
    

-   [Enable Node Instant Elasticity](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/instant-elasticity)
    
-   [View the health status of node instant scaling](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/view-the-status-of-node-instant-elastic)
    

Virtual nodes

Virtual nodes eliminate the need for node management or capacity planning. With virtual nodes, you can deploy up to 50,000 pods in a cluster. You can use virtual nodes to scale out application pods to handle traffic spikes. When you scale out applications, up to 10,000 pods can be created within 1 minute.

Virtual nodes are suitable for all scenarios and are especially ideal for tasks, scheduled tasks, data computing jobs, AI applications, and scenarios where workload spikes exist.

The time required to create 1,000 pods in a cluster:

-   When image caching is disabled: 30 seconds.
    
-   When [image caching](/help/en/eci/user-guide/overview-of-image-caches-1) is enabled: 15 seconds.
    

[Schedule pods to elastic container instances](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/deploy-the-virtual-node-controller-and-use-it-to-create-elastic-container-instance-based-pods#task-1443354)

## **Billing**

The auto scaling feature is free of charge. The auto scaling component is deployed in pods. Therefore, you must deploy at least one node in your cluster. You are charged for the nodes that are added by using the auto scaling feature. For more information, see [Billing overview](/help/en/ack/ack-managed-and-ack-dedicated/product-overview/ack-pro-cluster-billing).

## **FAQ**

For more information about the answers to some frequently asked questions about the auto scaling feature, see [Auto scaling FAQs](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/overview-faq-about-auto-scaling/).

**Click to view** the FAQ index of **node auto scaling**

**Category**

**Subcategory**

**Link**

Scale-out and scale-in behavior of node autoscaling

[Known limitations](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/faq-about-node-auto-scaling#0578d5906a4ve)

[Scale-out behavior](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/faq-about-node-auto-scaling#3d73c9bce2x1y)

-   [What scheduling policies does the cluster-autoscaler component use to determine whether an unschedulable pod can be scheduled to a node pool where autoscaling is enabled?](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/faq-about-node-auto-scaling#5e458ca0fdeyz)
    
-   [What resources can the cluster-autoscaler component simulate and check?](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/faq-about-node-auto-scaling#9081e1305c7f2)
    
-   [Why does the node autoscaling component fail to create nodes?](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/faq-about-node-auto-scaling#4bd69dc0fda87)
    
-   [If a scaling group is configured with multiple instance types, how are the resources of this scaling group calculated during autoscaling?](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/faq-about-node-auto-scaling#29a70230fdx9t)
    
-   [During autoscaling, how does the system choose among multiple node pools where autoscaling is enabled?](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/faq-about-node-auto-scaling#5679b320fde95)
    
-   [How do I configure custom resources for a node pool where autoscaling is enabled?](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/faq-about-node-auto-scaling#fff85a7068y34)
    
-   [Why does enabling auto scaling for a node pool fail?](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/faq-about-node-auto-scaling#b348c46bdcxb1)
    

[Scale-in behavior](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/faq-about-node-auto-scaling#d965c40777nu9)

-   [Why does the cluster-autoscaler component fail to scale in nodes?](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/faq-about-node-auto-scaling#51d75430fdnp3)
    
-   [How do I enable or disable eviction for a specific DaemonSet?](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/faq-about-node-auto-scaling#section-kg5-cli-y3i)
    
-   [What types of pods can prevent the cluster-autoscaler component from removing a node?](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/faq-about-node-auto-scaling#4000d01068gao)
    

[Extension support](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/faq-about-node-auto-scaling#4d35a60fc8vqv)

[Does the cluster-autoscaler component support CRDs?](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/faq-about-node-auto-scaling#b5fff6905c7fv)

Custom scaling behavior

[Control scaling behavior using pods](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/faq-about-node-auto-scaling#c3186b2465my5)

-   [How do I delay the scale-out response time of the cluster-autoscaler component for unschedulable pods?](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/faq-about-node-auto-scaling#c7d74de068d5w)
    

[Control scaling behavior using nodes](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/faq-about-node-auto-scaling#9008f67409m0b)

-   [How do I prevent a node from being scaled in by the cluster-autoscaler component?](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/faq-about-node-auto-scaling#9197847068xlh)
    
-   [How do I use pod annotations to affect node scale-ins by the cluster-autoscaler component?](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/faq-about-node-auto-scaling#section-mwn-b6z-apt)
    

cluster-autoscaler component

-   [How do I upgrade the cluster-autoscaler component to the latest version?](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/faq-about-node-auto-scaling#bb7882f068f94)
    
-   [What operations trigger automatic updates of the cluster-autoscaler component?](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/faq-about-node-auto-scaling#60a012b0effpp)
    
-   [Role authorization for an ACK managed cluster is complete, but node scaling activities still do not work. Why?](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/faq-about-node-auto-scaling#cfae8542e6jyf)
    

**Click to view** the FAQ index of **node instant scaling**

**Category**

**Subcategory**

**Jump link**

Scaling behavior of node instant scaling

[Known limitations](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/faq-about-node-instant-scaling#dbbc106bc8vq9)

[Scale-out behavior](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/faq-about-node-instant-scaling#8cdf6cea0camp)

-   [What resource types can node instant scaling simulate?](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/faq-about-node-instant-scaling#9c9ecbb2acns7)
    
-   [Does node instant scaling support scaling out nodes of a suitable instance type from a node pool based on pod resource requests?](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/faq-about-node-instant-scaling#4137b11f51wpg)
    
-   [If a node pool has multiple instance types, how does node instant scaling select one by default?](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/faq-about-node-instant-scaling#b075558334gwl)
    
-   [When using node instant scaling, how can I monitor real-time changes in the instance type inventory of a node pool?](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/faq-about-node-instant-scaling#4331ccfc84sau)
    
-   [How can I optimize the node pool configuration to prevent scale-out failures due to insufficient inventory?](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/faq-about-node-instant-scaling#137ca271cat5s)
    
-   [Why does node instant scaling fail to add nodes?](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/faq-about-node-instant-scaling#b273b386cdm60)
    
-   [How do I configure custom resources for a node pool that has node instant scaling enabled?](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/faq-about-node-instant-scaling#VvAtw)
    

[Scale-in behavior](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/faq-about-node-instant-scaling#3b166483bd2uz)

-   [Why does node instant scaling fail to remove nodes?](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/faq-about-node-instant-scaling#b30d4d1e9d3o6)
    
-   [What types of pods can prevent node instant scaling from removing nodes?](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/faq-about-node-instant-scaling#ed53341b2943s)
    

Custom scaling behavior

[Control scaling behavior using pods](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/faq-about-node-instant-scaling#cbf256126a6as)

[How do I control node scale-in using pods?](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/faq-about-node-instant-scaling#e47756a141fsu)

[Control scaling behavior using nodes](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/faq-about-node-instant-scaling#c963086718o0w)

-   [How do I specify which nodes to delete during a scale-in?](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/faq-about-node-instant-scaling#7f37a07acft6o)
    
-   [How do I prevent node instant scaling from removing specific nodes?](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/faq-about-node-instant-scaling#ed6ea25edd6ik)
    
-   [Can node instant scaling scale in only empty nodes?](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/faq-about-node-instant-scaling#c34be0edbad6p)
    

[About the node instant scaling component](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/faq-about-node-instant-scaling#af50f8b5d0lih)

-   [Are there any operations that trigger the automatic update of the node instant scaling component?](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/faq-about-node-instant-scaling#ea3469c40bxi6)
    
-   [Role authorization for an ACK managed cluster is complete, but node scaling activities still do not work. Why?](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/faq-about-node-instant-scaling#bd96493c2brkn)
    

**Click to view** the FAQ index of **workload scaling** **(including HPA and CronHPA)**

-   [What do I do if unknown is displayed in the current field in the HPA metrics?](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/faq-about-workload-auto-scaling#section-7l1-a7b-adu)
    
-   [What do I do if HPA cannot collect metrics and fails to perform scaling?](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/faq-about-workload-auto-scaling#45cdf68a9e6bg)
    
-   [What do I do if excess pods are added by HPA during a rolling update?](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/faq-about-workload-auto-scaling#section-oxl-0ov-og8)
    
-   [What do I do if HPA does not scale pods when the scaling threshold is reached?](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/faq-about-workload-auto-scaling#section-1tg-5jx-p4h)
    
-   [How do I configure the metric collection interval of HPA?](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/faq-about-workload-auto-scaling#section-i3r-lgt-w1n)
    
-   [Can CronHPA and HPA interact without conflicts? How do I enable CronHPA to interact with HPA?](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/faq-about-workload-auto-scaling#section-ilk-54c-4f6)
    
-   [How do I fix the issue that excess pods are added by HPA when CPU or memory usage rapidly increases?](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/faq-about-workload-auto-scaling#section-2cl-008-8x0)
    
-   [What do I do if HPA scales out an application while the metric value in the audit log is lower than the threshold?](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/faq-about-workload-auto-scaling#section-zx5-fzq-ah4)
    
-   [Can HPA determine the order in which pods are scaled in?](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/faq-about-workload-auto-scaling#42aaf3d9a6t6z)
    
-   [What does the unit of the utilization metric collected by HPA mean?](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/faq-about-workload-auto-scaling#23537b1cb2y2v)
    
-   [What do I do if unknown is displayed in the TARGETS column after I run the kubectl get hpa command?](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/faq-about-workload-auto-scaling#d377a7a0689xh)
    
-   [How do I find the metrics that are supported by HPA?](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/faq-about-workload-auto-scaling#0ffcaa9068yr7)
    
-   [How do I configure horizontal autoscaling after I customize the format of NGINX Ingress logs?](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/faq-about-workload-auto-scaling#72a7267068sa0)
    

## References

-   In scenarios that require preinstallation or high performance, you can use custom OS images to facilitate auto scaling. For more information, see [Create custom images](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/create-custom-images).
    
-   For more information about how to collect auto scaling logs, see [Collect log files of system components](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/collect-log-files-of-system-components#task-2136935).
    
-   When you configure your workloads, we recommend that you follow the suggestions provided by [Recommended workload configurations](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/recommended-configurations-for-high-reliability).
    
-   In scenarios where serverless containers are used, you can configure Knative to trigger scaling activities based on the number of requests and the number of requests that are concurrently processed. When no request is received, Knative automatically scales the number of pods to zero. For more information, see [Knative](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/knative-overview/) and [Enable auto scaling to withstand traffic fluctuations](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/enable-automatic-scaling-for-pods-based-on-the-number-of-requests).
