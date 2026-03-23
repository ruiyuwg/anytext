The cost insights feature of Container Service for Kubernetes (ACK) helps IT administrators of enterprises analyze the usage and cost allocation of resources in ACK clusters and provides suggestions on cost savings to improve the overall resource utilization. After you enable the cost insights feature, you can gain insights into the cost and resource usage of a specified cluster, department, or application within a specified financial governance cycle. This meets the requirements for cost estimation, allocation, and accounting in various scenarios.

## **Before you begin**

Before you use the cost insights feature and related documentation, we recommend that you read this topic and familiarize yourself with the following terms:

![对](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/7432856561/p442272.png)Cost estimation: You can estimate the cost of a department or application by calculating the costs of pods.

![对](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/7432856561/p442272.png)Cost allocation: You can allocate costs by department or application based on aggregated pod costs.

![对](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/7432856561/p442272.png)Cost accounting: You can perform enterprise cost accounting based on adjustable unit prices.

![对](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/7432856561/p442272.png)Cost dashboard: You can view cost insights data in dashboards in the ACK console.

![对](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/7432856561/p442272.png)Call the API to query cost data: You can call the Kubernetes API to query cost data, which can be used for secondary development.

![对](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/7432856561/p442272.png)Cost data model: a model based on which the cost insights feature is implemented.

## Purpose of cost insights

Large numbers of enterprises use cloud-native technologies for IT transformation in which cost optimization is an important objective. You can use the sharing, isolation, and scaling capabilities of cloud-native technologies to optimize the costs of resources. Compared with the traditional capacity planning method that is used to manage IT spending, cloud-native technologies pose greater challenges. The following section describes these challenges:

-   How to accurately calculate the cost of an ACK cluster?
    
-   How to accurately estimate the cost of a pod?
    
-   How to accurately estimate the cost of an online application or a CronJob?
    
-   How to use namespaces to allocate the cost of ACK cluster management by department?
    
-   How to identify and optimize cost waste in a cluster in a visualized manner?
    

Figure 1. Resource utilizations of different types of clusters

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/4778575471/CAEQJxiBgMC57PrIghkiIDQyNmFhOGMwNDk0YTQwMzFiNjI5MTc3MzZjZDhkNDZj3963382_20230830144006.372.svg)

To address the preceding challenges, ACK provides the cost insights feature. The cost insights feature is an important part of Finance+DevOps (FinOps) and plays an important role throughout the entire cost governance procedure. For example, you can use this feature to monitor the daily cost trend, analyze cost issues, and evaluate cost optimization measures.

## **Use scenarios: cost estimation, allocation, and accounting**

### **Pod cost estimation**

Estimating the cost of a pod in an ACK cluster is complex. This is because pods are the smallest deployable units in Kubernetes. In addition, the relationship between pods and cloud resources is not a one-to-one mapping and the lifecycle of a pod is usually shorter than the lifecycle of a cloud resource. ACK provides a method to accurately estimate the costs of resources used by a pod based on real-time cost data and resource monitoring data. The resources include CPUs, memory, and GPUs. For more information, see [Cost estimation policies](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/cost-allocation-model-overview).

### **Cost allocation by department or application**

Before an enterprise implements FinOps, a resource architecture must be set up. In most resource architectures, different departments of an enterprise belong to different namespaces, and labels are used to distinguish between different applications within the same department. In this case, the cost of a department or an application can be estimated by aggregating the costs of pods in different dimensions.

However, the department cost or application cost estimated based on aggregated pod costs does not take into account the [reserved instances](/help/en/ecs/reserved-instances), [savings plans](/help/en/ecs/savings-plans), and vouchers that are used. In addition, the costs of cloud services that are used, such as Managed Service for Prometheus and Simple Log Service (SLS), are not accounted for. Therefore, to obtain the accurate pod cost, you must first allocate the cluster cost to the pod based on the estimated cost ratio of the pod and then aggregate the allocated cost with the upper-layer cloud service cost.

### **Enterprise cost accounting**

In enterprise cost accounting scenarios or scenarios where the pods are deployed in data centers, the costs of resources are based on adjustable unit prices instead of the unit prices set by cloud service providers. For example, the enterprise O&M team resells resources to the business team of the enterprise at adjusted prices. This standardizes applications for requesting different resource specifications and facilitates cost accounting within the enterprise. For more information, see [Custom cost accounting policies](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/customize-cost-accounting-policies).

## **Dimensions of cost insights dashboards**

The cost insights feature uses a default cost allocation algorithm that is based on resource metering data and billing data. Dashboards of the following dimensions are provided: cluster, namespace, node pool, and application. After you [enable cost insights](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/enable-cost-insights) in the ACK console, you can view these dashboards in the ACK console. For more information about the dashboards, see [Work with the cost insights feature](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/work-with-cost-analysis).

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/6110071271/p777846.png)

**Dimension**

**Description**

Cluster

The cluster dashboard displays the cluster resources and their cost insights data. This dashboard helps you learn the overall health status of your cluster spending. The first and foremost thing that you need to pay attention to is whether the cost trend of the cluster spending meets your expectations. If the cost trend of the cluster does not meet your expectations, troubleshoot the issue based on the data provided by this dashboard.

Namespace

If different departments or applications of an enterprise belong to different namespaces, you can filter resource and cost data by namespace.

Node pool

The node pool dashboard displays the cost insights data of cluster resources. Most cluster costs are incurred by Elastic Compute Service (ECS) instances, which are managed by O&M engineers. Node pool cost insights help you analyze the costs of node pool resources and choose a proper billing method.

Application

Application cost insights focus on scenario-specific cost optimization. You can use label selectors to filter applications and view the cost and resources of the application that matches the label selectors. By using label selectors to filter applications, you can also monitor multiple applications that depend on each other at the same time.

For example, you can add the same label to all applications that are streamlined in a big data workflow so that you can analyze the costs of the entire workflow.

## Integration and extension

### **Cost data model**

The cost insights feature is implemented based on a model to enable accurate cluster cost estimation and cost allocation by business units of different dimensions. For more information, see [Integration and extension](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/cost-data-model/).

### **Call the API to query cost data**

If you want to obtain information about resource usage and cost distribution in your clusters from multiple dimensions, you can enable the cost insights feature of Container Service for Kubernetes (ACK). After you enable this feature, cost data is reported to and stored in Managed Service for Prometheus. You can call HTTP APIs to query the cost data. ACK can provide suggestions on cost optimization based on the data. The data can also be used in further development.

ACK provides the Cost API, Cost V2 API, and Allocation API that you can call to query real-time estimated costs or cost allocation data. For more information, see [Call the API to query cost data](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/overview-of-calling-an-api-to-query-cost-insights-data).
