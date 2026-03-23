The cost insights feature of Container Service for Kubernetes (ACK) provides dashboards that display visualized information about the costs of your clusters, namespaces, node pools, and applications.

## Prerequisites

The cost insights feature is enabled. For more information, see [Enable cost insights](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/enable-cost-insights#task-2078815).

## Usage notes

After the cost insights feature is enabled, billing data is displayed at 08:00:00 (UTC+8) on the next day. You can click the drop-down list in the upper-right corner of a dashboard to change the time range of cost insights.

## **Platform**

1.  Log on to the [ACK console](https://cs.console.alibabacloud.com). In the left navigation pane, click **Clusters**.
    
2.  On the **Clusters** page, click the name of the cluster. In the left-side navigation pane, choose **Cost Suite** > **Cost Insights**.
    
3.  On the **Cost Insights** page, click different tabs to view dashboards.
    
    -   [Cluster dimension](#section-rci-nb7-xft)
        
    -   [Namespace dimension](#section-np6-f16-bwu)
        
    -   [Node pool dimension](#section-h80-w9r-ehv)
        
    -   [Application dimension](#section-mr9-cqw-pi2)
        

## Cluster **dimension**

### **Filter criteria**

![image.png](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/0070830171/p715585.png)

**Feature**

**Number**

**Description**

Cluster cost analysis options

(1)

The following cluster cost analysis options are available:

-   **Actual Billing cost with discount** (default): This option is selected by default. To view the payment amount of the cloud resources in the cluster, select this option.
    
-   **Original Billing cost without discount**: To view the bill amount of the cloud resources calculated based on the list prices of these resources on the Alibaba Cloud International site, select this option.
    
    > For more information, see [Bill Details](/help/en/user-center/billing-details-1).
    

**Note**

The costs of applications in the cluster can be analyzed by namespace or pod. The application cost is calculated based on the bill amount of the resources.

Cost allocation models

(2)

Cost allocation models include the single resource cost allocation model and weighted hybrid resource cost allocation model. For more information, see [Cost estimation policies](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/cost-allocation-model-overview).

-   **CPU model**: Estimate the cost of a pod based on the amount of CPU resources requested by the pod. Estimate the cost of a pod based on the amount of CPU resources requested by the pod.
    
-   **Memory Model**: Estimate the cost of a pod based on the amount of memory resources requested by the pod.
    
-   **CPU-Memory Hybrid Model (recommended weights)**: Estimate the cost of a pod based on the recommended CPU weight and memory weight of the pod.
    
-   **CPU-Memory Hybrid Model (Custom Weights)**: Estimate the cost of a pod based on the custom CPU weight and memory weight of the pod. Once selected, you must specify the **CPU Weight Setting (%)**.
    

Time range

(3)

The time range of the data displayed in the dashboard. The default time range is the last 7 days. You can specify a time range to view the changes in costs and resources within the specified time period.

### **Cluster cost overview**

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/4639258271/p849561.png)

**Feature**

**Number**

**Description**

View the cost allocation model

(1)

The displayed data depends on the **cost allocation model** that you selected. The **CPU model** is selected by default to estimate the cost of a pod based on the amount of CPU resources requested by the pod.

The cost of the previous day, the cumulative cost of the week, and the cumulative cost of the month.

(2)

The cost of the previous day, the day-on-day ratio, the cumulative cost of the week, and the cumulative cost of the month are all calculated based on the bill amount of the cloud resources in the cluster.

The weekly cumulative cost is calculated based on the bill amount of every calendar week and the monthly cumulative cost is calculated based on the bill amount of every calendar month. Bills are generated one day after the transaction date. Therefore, the cumulative cost of the week is zero on Monday of each week and the cumulative cost of the month is zero on the first day of each month.

The day-on-day ratio is the ratio of the cost of the previous day to the cost of the day before the previous day. If the day-on-day growth rate is in green, it indicates that the cost of the previous day is reduced compared with the cost of the day before the previous day. If the day-on-day growth rate is in red, it indicates that the cost of the previous day is increased compared with the cost of the day before the previous day.

Brief information about the cluster cost and resource waste.

(3)

The charts display changes in the cluster cost and cluster capacity. The yellow curve indicates the cluster cost and the blue curve indicates the actual cluster capacity. In most cases, the two curves are correlated with each other.

If the two curves represent different trends, it indicates changes in the average cost of individual CPU cores. In this case, you can check whether resources of higher prices are consumed.

Display the real-time estimated costs of namespaces and allocated cost of each namespace

(4) and (5)

Section (4) displays the real-time estimated cost of each namespace in the cluster. The cost of a namespace is the sum of costs of all pods in the namespace. Section (5) displays the allocated cost of each namespace, which is the cluster cost allocated to each namespace based on the specified cost ratio.

**Note**

-   The costs of namespaces are calculated based on the bill amount.
    
-   If no resource (CPU) request is configured for the pods in a namespace, the namespace is not taken into account during namespace cost calculation.
    

A cluster may contain nodes of different specifications and billing methods. When you allocate the cost based on namespaces, you must consider the price differences of nodes that host pods in different namespaces, not only the resource consumption of different namespaces.

The cost insights feature converts the real-time cost of each node. The cost insights feature provides the following formula to calculate the cost of a namespace:

**Σ (Pod resource request/Node capacity) × Node unit price**

The formula can help you precisely calculate the cost of a namespace. However, due to the deferred billing policy applied when discounts, vouchers, or the subscription billing method is used, the cost calculated based on this formula may differ from the bill amount. To calculate the allocated cost of a namespace, you can multiply the total cluster cost by the cost ratio of the namespace.

### Stability and efficiency analysis

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/4639258271/p849619.png)

**Feature**

**Number**

**Description**

Display the total resource usage of the cluster

(1)

Display the number of pods of each quality of service (QoS) class and the total resource usage in the cluster.

Display the pod resource usage in the cluster

(2)

Display the basic information and resource usage (Usage/Request) of all pods in the cluster. Filtering and sorting are supported. You can use this feature to view the workloads with the highest or lowest resource usage in a cluster.

Display the resource configurations of burstable pods in a cluster

(3)

Display the resource configurations of the pods whose QoS class is Burstable. Filtering and sorting are supported. This feature allows you to view the requests and limits of resources such as CPU and memory resources for each Burstable pod. This allows you to learn about the cluster resources consumed by pods and identify resource bottlenecks.

Display the resource usage of BestEffort pods in a cluster

(4)

Display the resource configurations of the pods whose QoS class is BestEffort. This type of pod has a higher stability risk. You can filter and sort the list to check for any unexpected BestEffort pods. This allows you to address the risks at the earliest opportunity.

For more information about **Stability & Efficiency Analysis**, see [Use cost insights to identify risks for cluster workloads](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/use-cost-insights-to-identify-risks-for-cluster-workloads).

### **Cluster cost analysis**

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/4639258271/p849600.png)

**Feature**

**Number**

**Description**

Display changes in the cloud resource cost and the cost ratios of different cloud resources

(1) and (2)

Section (3) displays the cost ratios of different cloud resources in the cluster. Section (4) displays changes in the cloud resource cost.

A cluster may use multiple cloud resources. The costs of cloud resources vary based on billing rules and how the cloud resources are used by the cluster. The cost insights feature displays the changes in the cloud resource cost and the cost ratios of different cloud resources to help you reduce the cost of the cluster.

Display changes in the total cluster cost

(3)

Display daily changes in the total cluster cost.

Display the costs of node pools

(4)

Display the cost of each node pool in the cluster or the cost of each virtual node.

Display the trends in real-time estimated costs of namespaces

(5)

A cluster may contain nodes of different specifications and billing methods. When you allocate the cost based on namespaces, you must consider the price differences of nodes that host pods in different namespaces, not only the resource consumption of different namespaces.

The cost insights feature converts the real-time cost of each node. The cost insights feature provides the following formula to calculate the cost of a namespace:

**Σ (Pod resource request/Node capacity) × Node unit price**

The formula can help you precisely calculate the cost of a namespace. However, due to the deferred billing policy applied when discounts, vouchers, or the subscription billing method is used, the cost calculated based on this formula may differ from the bill amount. To calculate the allocated cost of a namespace, you can multiply the total cluster cost by the cost ratio of the namespace.

Display changes in the resource request and resource utilization of the cluster

(6)

Scenarios:

-   Help you analyze the resource watermarks and resource capacity of the cluster to identify resource waste.
    
-   When scaling activities are triggered, the resource watermarks of the cluster periodically fluctuate. You can determine the resource capacity of the cluster based on the changes in the histogram chart.
    

Histogram chart:

-   Y-axis: the total resource capacity of the cluster, which is the total amount of resources that can be allocated to applications in the cluster.
    
-   Green column: indicates the requested resources within the current hour.
    
-   Yellow column: indicates the actual resource usage of the processes in the pods within the current hour.
    

**Resources that are allocated to applications but are not in use = Green column - Yellow column**

**Allocatable cluster resources = Y-axis - Green column**

Analysis procedure:

-   Avoid wasting unallocated resources: You can check and make use of unallocated resources in the cluster. You can modify the resource requests of pods or downgrade the instances that host the pods. We recommend that you keep about 20% of the cluster resources unallocated.
    
-   Avoid wasting allocated but unused resources: You can identify applications that are allocated an excessive amount of resources based on the statistics about allocated but unused resources and the applications or pods that waste the most resources in the namespace dashboard. Then, you can modify the resource request accordingly.
    
-   Scale resources: When your businesses periodically fluctuate, you can reference the changes of resource watermarks in the histogram chart to resize resources in the cluster and configure an appropriate scaling policy.
    

Cluster billing details

(7) and (8)

A list of daily bills displayed by cloud resource or instance.

## Namespace dimension

The namespace dashboard allows you to filter namespaces and view resources and cost information by namespace. Namespaces are used to manage resources that belong to different departments or teams.

### **Filter criteria**

![image.png](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/9960830171/p715623.png)

**Feature**

**Number**

**Description**

Namespaces

(1)

Select a namespace to analyze. The default value is ALL, which indicates that all namespaces in the cluster are selected.

Cost allocation models

(2)

Cost allocation models include the single resource cost allocation model and weighted hybrid resource cost allocation model. For more information, see [Cost estimation policies](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/cost-allocation-model-overview).

-   **CPU model**: This model is selected by default. Estimate the cost of a pod based on the amount of CPU resources requested by the pod.
    
-   **Memory Model**: Estimate the cost of a pod based on the amount of memory resources requested by the pod.
    
-   **CPU-Memory Hybrid Model (recommended weights)**: Estimate the cost of a pod based on the recommended CPU weight and memory weight of the pod.
    
-   **CPU-Memory Hybrid Model (Custom Weights)**: Estimate the cost of a pod based on the custom CPU weight and memory weight of the pod. Once selected, you must specify the **CPU Weight Setting (%)**.
    

Namespace cost analysis options

(3)

The following cluster cost analysis options are available:

-   **Actual Billing cost with discount**: This option is selected by default. To view the payment amount of the cloud resources in the cluster, select this option.
    
-   **Original Billing cost without discount**: To view the bill amount of the cloud resources calculated based on the list prices of these resources on the Alibaba Cloud International site, select this option.
    
    > For more information, see [Bill Details](/help/en/user-center/billing-details-1).
    

Time range

(4)

The time range of the data displayed in the dashboard. The default time range is the last 7 days. You can specify a time range to view the changes in costs and resources within the specified time period.

### **Billing overview**

![image.png](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/0070830171/p715629.png)

**Feature**

**Number**

**Description**

Statistics, estimated costs, and allocated costs of resources in namespaces

(1)

You can identify resource waste in the namespace based on the CPU and memory metrics. Metrics:

-   CPU resources:
    
    -   **CPU resource usage**: the number of vCores used by the current namespace.
        
    -   **CPU resource requests (Request)**: the number of vCores allocated to the current namespace.
        
    -   **Total CPU resources (Capacity)**: the total number of vCores provided by the cluster.
        
    -   **CPU resource usage (Usage / Request)**: the ratio of the vCores used by the current namespace to the requested vCores.
        
-   Memory resources:
    
    -   **Memory resource usage**: the amount of memory used by the current namespace.
        
    -   **Memory resource requests (Request)**: the amount of memory allocated to the current namespace.
        
    -   **Total memory resource capacity (Capacity)**: the total amount of memory provided by the cluster.
        
    -   **Memory resource utilization (Usage / Request)**: the ratio of the memory used by the current namespace to the requested memory.
        
-   GPU resources:
    
    -   **GPU memory resource usage (Usage)**: the amount of GPU memory used by the current namespace.
        
    -   **GPU memory resource allocation (Usage)**: the amount of GPU memory allocated to the current namespace.
        
    -   **Total GPU memory resource capacity (Capacity)**: the total amount of GPU memory provided by the cluster.
        
    -   **GPU memory resource utilization (Pod Used / Pod Allocated)**: the ratio of the GPU memory used by the current namespace to the allocated GPU memory.
        

(2)

Section (2) displays the cost statistics of the applications in the namespace.

-   **Namespace real-time cost estimation**: the real-time estimated cost of the namespace, which is the sum of the costs of all pods in the namespace.
    
-   **Namespace Charges- Actual Billing cost with discount**: the allocated cost of the namespace, which is the cluster cost allocated to the namespace based on the cost ratio of the namespace.
    

### **Cost details and trends**

![image.png](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/0070830171/p715632.png)

**Feature**

**Number**

**Description**

Unit price of core hours

(1)

Display changes in the unit price of core hours of the nodes that host the pods of the application.

Changes in CPU and memory utilization

(2)

Display changes in the CPU and memory utilization of the namespace.

Changes in the resource request and usage

(3)

Display changes in resource allocation and resource usage. The blue curve indicates changes in allocated resources and the red curve indicates changes in resources in use.

A node reserves resources for pods during pod scheduling. The amount of resources occupied by container processes usually differs from the amount of allocated resources. The two curves can help you optimize resource allocation and avoid resource waste.

Changes in costs of applications in the namespace

(4)

Display changes in the costs of applications in the namespace.

The total cost is the bill amount of the namespace within the specified time range.

The ratio of the namespace cost to the cluster cost.

![image.png](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/0070830171/p715635.png)

**Feature**

**Number**

**Description**

Pod ranking by resource requests

(1)

Sort pods based on resource requests to help you identify the application that requests the most resources and optimize resource allocation.

Pod ranking by resource utilization

(2)

Sort pods based on resource utilization to help you identify the application with the lowest resource utilization and avoid resource waste.

Pod ranking by idle resources

(3)

The idle resource ratio of a pod is the ratio of resources that are not used by the pod to the total resources allocated to the pod. The value helps you identify resource waste in the pod.

By locating the pod that wastes the most resources in the namespace, you can identify the application that causes resource waste in the namespace, troubleshoot the issue, and then optimize resource allocation accordingly.

## Node pool **dimension**

The node pool dashboard displays the costs of cluster resources to help you analyze the use of node pools and choose a proper billing method.

You can analyze the costs of different node pools and then conduct cost control and governance. For example, GPU-accelerated node pools may belong to multiple departments. Therefore, it is difficult to analyze the cost by namespace. In this scenario, you can allocate cost by node pool and set cost optimization policies for different node pools.

### **Filter criteria**

![image.png](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/0070830171/p715636.png)

**Feature**

**Number**

**Description**

Node pool cost analysis options

(1)

The following cluster cost analysis options are available:

-   **Actual Billing cost with discount**: This option is selected by default. To view the payment amount of the cloud resources in the cluster, select this option.
    
-   **Original Billing cost without discount**: To view the bill amount of the cloud resources calculated based on the list prices of these resources on the Alibaba Cloud International site, select this option.
    
    > For more information, see [Bill Details](/help/en/user-center/billing-details-1).
    

Node pools

(2)

Select a node pool to analyze its cost. The default setting is All, which means that all node pools in the cluster are selected.

Time range

(3)

The time range of the data displayed in the dashboard. The default time range is the last 7 days. You can specify a time range to view the changes in costs and resources within the specified time period.

### **Billing overview**

![image.png](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/9960830171/p715637.png)

**Feature**

**Number**

**Description**

Node pool cost

(1)

If the day-on-day growth rate is in green, it indicates that the cost of the previous day is reduced compared with the cost of the day before the previous day. If the day-on-day growth rate is in red, it indicates that the cost of the previous day is increased compared with the cost of the day before the previous day.

Unit price of core hours of nodes

(2)

Display changes in the unit price of core hours of the nodes in the node pool within a period of time.

Changes in node costs and changes in the node pool cost ratio

(3) and (4)

Display changes in the costs of the nodes in the node pool, and changes in the ratio of the node pool cost to the total cluster cost.

### **Billing methods and cost estimation**

![image.png](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/0070830171/p715638.png)

**Feature**

**Number**

**Description**

Estimate cost savings based on the billing methods of nodes to help you optimize resource allocation and select a proper billing method.

(1), (2), and (4)

Display the ratios of nodes that use different billing methods and the ratio changes within a period of time, and the cost ratios of nodes that use different billing methods and the ratio changes within a period of time. The following billing methods are supported:

-   **PayAsYouGo**: pay-as-you-go.
    
-   **PayByPeriod**: subscription.
    
-   **Spot**: pay-by-preemptible-instance.
    

(3) and (6)

Estimate cost savings (or additional costs incurred) after you change the billing method of all nodes in the node pool. This helps you optimize resource allocation and select a proper billing method.

(5)

Cost and billing method statistics about the nodes in the node pool.

## Application **dimension**

The application dashboard allows you to use label wildcards to filter applications and view the cost and resource usage of the desired applications. Application cost analysis focuses on scenario-specific cost optimization. Application cost analysis applies to scenarios such as big data computing, AI computing, and elastic scaling.

By using label wildcards to filter applications, you can also monitor multiple applications that depend on each other at the same time. For example, you can add the same label to all applications that are streamlined in a pipeline so that you can analyze the costs of the entire pipeline.

### **Filter criteria**

![image.png](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/9960830171/p715639.png)

**Feature**

**Number**

**Description**

Node pool cost analysis options

(1)

The following cluster cost analysis options are available:

-   **Actual Billing cost with discount**: This option is selected by default. To view the payment amount of the cloud resources in the cluster, select this option.
    
-   **Original Billing cost without discount**: To view the bill amount of the cloud resources calculated based on the list prices of these resources on the Alibaba Cloud International site, select this option.
    
    > For more information, see [Bill Details](/help/en/user-center/billing-details-1).
    

Namespaces

(1)

Select a namespace to analyze its cost. The default setting is All, which means that all namespaces in the cluster are selected.

Filter applications by label

(2)

Enter a pod label. You can specify a label key and a label value separated by a equal sign (`=`) or colon (`:`), such as `app=ack-cost-exporter` or `app:ack-cost-exporter`.

If the label key contains forward slashes (`/`), periods (`.`), and hyphens (`-`), you must replace them with underscores (`_`) and delete all double quotation marks (`"`). For example, `"sparkoperator.k8s.io/submission-id":"db08a66a-c0b7-4d32-8013-02ac4f8eff4c"` must be converted to the following: `sparkoperator_k8s_io_submission_id:db08a66a-c0b7-4d32-8013-02ac4f8eff4c`

Cost allocation models

(3)

Cost allocation models include the single resource cost allocation model and weighted hybrid resource cost allocation model. For more information, see [Cost estimation policies](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/cost-allocation-model-overview).

-   **CPU model**: This model is selected by default. Estimate the cost of a pod based on the amount of CPU resources requested by the pod.
    
-   **Memory Model**: Estimate the cost of a pod based on the amount of memory resources requested by the pod.
    
-   **CPU-Memory Hybrid Model (recommended weights)**: Estimate the cost of a pod based on the recommended CPU weight and memory weight of the pod.
    
-   **CPU-Memory Hybrid Model (Custom Weights)**: Estimate the cost of a pod based on the custom CPU weight and memory weight of the pod. Once selected, you must specify the **CPU Weight Setting (%)**.
    

Time range

(4)

The time range of the data displayed in the dashboard. The default time range is the last 7 days. You can specify a time range to view the changes in costs and resources within the specified time period.

### Billing overview

![image.png](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/9960830171/p715640.png)

![image.png](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/0070830171/p715641.png)

**Feature**

**Number**

**Description**

Application costs and computing resource utilization

(1)

Display the cost of an application in real time and analyze the resource utilization of the application.

-   **Application Cost**: the cost of the application within the queried time range. The cost is calculated based on the bill amount.
    
-   **Apply current number of copies**: the peak number and valley number of application pods.
    
-   **Computing Resource Utilization**: the CPU and memory utilization (usage/request).
    
-   **Hourly cost of the node**: the unit price of core hours of the nodes that host the application pods.
    
-   **Application running time**: the runtime statistics of the application.
    
-   **Total number of core-time resource consumption**: the total number of core hours consumed by the application.
    
-   **Application accounts for the entire cluster/namespace resource utilization**: the ratio of the resources consumed by the application to the total resources in the cluster, and the ratio of the resources consumed by the application to the total resources in the namespace.
    

Pod cost analysis

(2)

Display the resource statistics and real-time estimated cost of each pod of the application.

Changes in estimated application costs and number of pods

(3)

-   **Apply estimated spending trends**: displays changes in the hourly cost and unit price of core hours of the application within a time period.
    
-   **Application Pod Scale Trend**: displays changes in the number of replicated pods created for the application.
    

Changes in CPU, memory, and GPU requests and usage

(4)

CPU, memory, and GPU requests and charts:

-   Y-axis: the total resource capacity of the cluster, which is the total amount of resources that can be allocated to applications in the cluster.
    
-   Blue column: indicates the requested resources within the current hour.
    
-   Yellow column: indicates the actual resource usage of the processes in the pods within the current hour.
    

**Resources that are allocated to applications but are not in use = Blue column - Yellow column**

**Allocatable cluster resources = Y-axis - Blue column**

Analysis procedure:

-   Avoid wasting unallocated resources: You can check and make use of unallocated resources in the cluster. You can modify the resource requests of pods or downgrade the instances that host the pods. We recommend that you keep about 20% of the cluster resources unallocated.
    
-   Avoid wasting allocated but unused resources: You can identify applications that are allocated an excessive amount of resources based on the statistics about allocated but unused resources and the applications or pods that waste the most resources in the namespace dashboard. Then, you can modify the resource request accordingly.
    
-   Scale resources: When your businesses periodically fluctuate, you can reference the changes of resource watermarks in the histogram chart to resize resources in the cluster and configure an appropriate scaling policy.
    

### **Billing methods and pod usage**

![image.png](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/9960830171/p715642.png)

**Feature**

**Number**

**Description**

Estimate cost savings after you change the billing method of nodes

(1)

Estimate cost savings (or additional costs incurred) after you change the billing method of all nodes in the node pool. This helps you optimize resource allocation and select a proper billing method

Application cost statistics

(2) and (3)

Display the billing method statistics of the nodes that host the application pods and the hourly cost of the nodes to help you select a proper billing method for the nodes.

Pod ranking by resource requests, resource utilization, and idle resources

(4)

The following rankings can help you identify the application with the most idle resources to avoid resource waste:

-   **Pod resource request volume ranking**: sorts pods based on resource requests to help you identify the application that requests the most resources and optimize resource allocation.
    
-   **Pod Resource Usage Ranking**: sorts pods based on resource utilization to help you identify the application that wastes the most resources.
    
-   **Pod resource idle ranking**: displays the ratio of idle resources of a pod to resources allocated to the pod to help you identify resource waste.
    
    By locating the pod that wastes the most resources in the namespace, you can identify the application that causes resource waste in the namespace, troubleshoot the issue, and then optimize resource allocation accordingly.
    

## Use the cost insights feature to analyze the costs of on-premises nodes in a registered cluster and the costs of applications deployed on these nodes

You can use cost insights to analyze the costs of on-premises nodes in a registered cluster and the costs of applications deployed on these nodes. By default, the cost insights feature calculates the costs of on-premises nodes in a registered cluster and the costs of applications deployed on these nodes at the unit price of CNY 0.3/core hour. The following section describes how to set a custom unit price.

-   Configure a unified price for all IDC nodes
    
    In the kube-system namespace, you can configure a unified price for all IDC nodes by setting the `DefaultIDCPricePerCPUCoreHour` environment variable in the ack-cost-exporter deployment.
    
    **Note**
    
    This price is the price per CPU core per hour (CNY/Core×Hour).
    
    ```
    env:
    # Set the price for each IDC node to CNY 0.3 per CPU core per hour.
    - name: DefaultIDCPricePerCPUCoreHour
      value: "0.3"
    ```
    
-   Configure a separate price for a specific node
    
    Add the label `"node.kubernetes.io/price-per-day”` to the corresponding node to configure a separate price for that node.
    
    **Note**
    
    This price is the total price for this node for one day.
    
    Run the following command to set the total price for a specific node to CNY 100 per day.
    
    ```
    kubectl label nodes <node-name> node.kubernetes.io/price-per-day="100"
    ```
    

## FAQ

### **Why is no data displayed after I enable cost analysis?**

-   Check whether you have completed RAM role authorization. For more information, see [Step](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/enable-cost-insights#step-rme-jed-yrb) [3](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/enable-cost-insights#step-rme-jed-yrb) in the Enable cost insights topic. Cost analysis is based on monitoring data and cost data. The collection of monitoring data starts within 3 minutes after you enable the cost insights feature. Cost data is displayed at 08:00:00 (UTC+8) on the next day.
    
-   Check whether a NAT gateway is configured for the cluster. You cannot use the internal endpoint to query bills in certain regions. Make sure that your cluster has Internet access.
    
-   The data of the **Day-on-day Ratio** and **Estimated Cost of Next Day** metrics is displayed after the cost insights feature collects statistics for two consecutive days.
    

### **Why does the cost of a namespace differ from the actual bill amount?**

The cost of a namespace is calculated based on cost estimation and is not directly related to the actual bill amount. Therefore, the cost estimation is based on the list prices. However, the actual cost of a cluster can be reduced by vouchers, discounts, and cost savings plans. As a result, the estimated cost of a namespace may not equal the bill amount. To obtain the actual cost of a namespace, you can multiply the actual cost of the cluster by the cost ratio of the namespace.

### **Why do I fail to obtain the cost data of pods on some nodes?**

Check whether the RAM role is granted the required permissions. Make sure that the ecs:DescribeDisks permission is included in the permission policy. For more information, see [Step 3](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/enable-cost-insights#step-rme-jed-yrb) in the Enable cost insights topic.

### **Why does the bill not display all cloud services used by my cluster?**

Cost analysis only collects information about cloud services that are exclusive to your cluster. Information about cloud services that are shared by multiple clusters is not collected.

The cost insights feature is based on the cost allocation tags feature in the [Expenses and Costs](https://account.alibabacloud.com/login/login.htm?oauth_callback=https%3A%2F%2Fusercenter2-intl.console.alibabacloud.com%2F) console. This feature uses a specific identifier in the cloud service tags (key: value = `ack.aliyun.com:{{ClusterId}}`) to track and collect cluster cost statistics. If you disable this tag on the [Cost allocation tags](https://usercenter2-intl.console.alibabacloud.com/finance/tags) page of the Expenses and Costs console, the cluster cost information cannot be collected. In this case, you must follow the instructions on the Cost allocation tags page of the Expenses and Costs console to enable the tag whose key is `ack.aliyun.com` and the tag whose key is `ack.alibabacloud.com/nodepool-id`.

### **Why is the monthly or weekly spending lower than the actual amount?**

The cost data of a cluster before you enable the cost insights feature is not analyzed when the cost insights feature calculates the cluster cost.
