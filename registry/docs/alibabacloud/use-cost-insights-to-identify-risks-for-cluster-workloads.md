You can enable the cost insights feature to quickly identify risks related to stability, performance, and cost in ACK cluster workloads. This feature not only tracks the utilization of cluster resources, but also provides detailed data views for pods with Burstable or BestEffort quality of service (QoS) classes to facilitate resource configuration monitoring. This topic describes how to use cost insights for risk assessment of cluster resources.

## **Prerequisites**

-   The cost insights feature is enabled. For more information, see [Enable cost insights](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/enable-cost-insights#task-2078815).
    
-   Managed Service for Prometheus is enabled for your cluster. For more information, see [Managed Service for Prometheus](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/use-managed-service-for-prometheus-to-monitor-an-ack-cluster#section-o0u-mkk-58y).
    

## **What are the risks of improper resource configuration?**

Kubernetes defines three [QoS](https://kubernetes.io/docs/concepts/workloads/pods/pod-qos/) classes based on pod resource configurations to represent different levels of service quality and stability. When a node is under resource pressure, Kubernetes determines which pods to evict first based on the QoS class.

-   Guaranteed: Pods in this class specify an equal amount of resource request and resource limit for each container, offering the highest stability and performance with the lowest likelihood of eviction.
    
-   Burstable: Pods in this class have a resource request but no resource limit, allowing them to use the full resources of the node. Kubernetes evicts BestEffort pods first, followed by Burstable pods, to balance flexibility and stability.
    
-   BestEffort: Pods in this class are configured without resource request or limit. They run only when the node has idle resources and are prioritized for eviction when resources become insufficient. This ensures the resource stability of services with higher QoS classes.
    

Hence, appropriate resource configuration is essential for maintaining workload stability, performance, and cost-effectiveness. Inadequate or absent resource requests and limits may compromise workload stability or performance, while over-provisioning may lead to unnecessary expenses.

**Resource configuration status**

**Resource type**

**Risk**

Not configured

CPU

Stability and performance are compromised, potentially leading to unresponsive workloads due to lack of CPU resources.

Memory

Stability is compromised, with workloads at risk of termination due to insufficient memory.

Under-configured

CPU

Performance is compromised, with workloads running slowly or becoming unresponsive.

Memory

Stability is compromised, with workloads at risk of termination due to insufficient memory.

Over-configured

CPU

Low resource utilization and unnecessary cost.

Memory

Low resource utilization and unnecessary cost.

Enabling cost insights allows for swift identification of stability, performance, and cost risks related to cluster workloads. You can view the resource utilization levels of cluster workloads, check the configurations of Burstable pods, and identify BestEffort pods that may pose risks to the cluster, thereby implementing workload stability and performance analysis. The following sections describe the scenarios of this feature and how to use this feature.

## Identify cluster resource risks

**Stability & Efficiency Analysis** is a module within the cost insights feature. Below is a guide on using this module to evaluate potential risks in cluster resources.

### Procedure

1.  Log on to the [ACK console](https://cs.console.alibabacloud.com). In the left-side navigation pane, click **Clusters**.
    
2.  On the **Clusters** page, find the cluster that you want to manage and click its name. In the left-side pane, choose **Cost Suite** > **Cost Insights**.
    
3.  On the **Cluster Dimension** tab, analyze potential risks in cluster resources by using the data on the **Stability & Efficiency Analysis** page.
    
    As illustrated below, this page provides an overview of the number of pods in different QoS classes within the cluster and their total resource usage. Additionally, it offers the capability to perform a detailed analysis of resource usage. The following sections describe the resource usage analysis.
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/1140147271/p846810.png)
    

### **View** resource utilization of pods

**Cluster pod resource usage analysis** provides basic information and resource utilization (Usage/Request) for all pods in the cluster by default. You can filter or sort pods to batch view workloads in the cluster with the highest or lowest resource utilization level.

-   Low resource utilization indicates over-configuration and potential cost savings.
    
-   High resource utilization indicates under-configuration, which may pose performance or stability risks depending on the status of the CPU or memory allocation.
    
-   Resource utilization exceeding 100% indicates that usage surpasses requests, which may affect the workload stability.
    

#### **Example**

As shown in the following figure, pods are sorted by memory utilization in descending order. The memory utilization of each pod displayed in the figure exceeds 100%. Further analysis is required to determine if configuration adjustments are necessary to mitigate risks.

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/1140147271/p846595.png)

### **View resource configuration of Burstable pods in the cluster**

The **Burstable Pod-Resource Usage Analysis** list provides a view of the resource configuration for pods whose QoS class is Burstable. You can filter or sort pods to check the requests and limits for CPU, memory, and other resources of each Burstable Pod. This helps you to understand resources consumed by each Burstable pod in the cluster and identify potential resource bottlenecks.

-   Lack of the CPU limit: Cluster stability and performance may be affected, and workloads may be unable to obtain CPU resources, potentially leading to unresponsiveness.
    
-   Lack of a the memory limit: Cluster stability may be affected, with workloads at risk of termination due to insufficient memory.
    

#### **Example**

As shown in the following figure, pods without a CPU limit may degrade cluster performance or be evicted due to resource competition.

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/1140147271/p843695.png)

### **View resource usage of BestEffort pods in the cluster**

The **Best Effort Pod-Resource Usage Analysis** list provides a view of the resource configuration for pods whose QoS class is BestEffort. These pods typically carry higher stability risks. Filter and sort the list to identify unexpected BestEffort pods and address them promptly to mitigate risks.

#### **Example**

If critical business services are running on BestEffort pods, adjustments to their QoS class may be necessary to ensure stable operations.

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/1140147271/p846637.png)

## What to do next: Optimize resource configuration

-   If the cost insights feature reveals potential stability concerns, performance bottlenecks, or cost overruns in ACK cluster workloads, consider using the resource profiling feature. This feature provides container-level resource specification recommendations based on historical usage data, simplifying the process of setting requests and limits for containers. For more information, see [Resource profiling](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/resource-profiling).
    
-   With the data and analysis provided by cost insights, you can leverage dynamic resource overcommitment to optimize cost-effectiveness. For more information, see [Dynamic resource overcommitment](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/dynamic-resource-overcommitment).
