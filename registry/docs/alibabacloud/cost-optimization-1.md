The cost optimization feature of Container Service for Kubernetes (ACK) provides suggestions on how to optimize costs in common scenarios. This feature also provides suggestions on how to choose appropriate cost optimization strategies for different applications and service architectures. This topic describes the cost optimization procedures and common scenarios of cost optimization.

## Cost optimization procedures

Cost optimization in ACK is built around FinOps principles and can be implemented in cloud-native scenarios through the following practices:

1.  Set financial units and governance cycles based on the actual conditions of your business.
    
2.  Set cost baselines based on the actual conditions of your business.
    
3.  Refer to the following figure to design and implement cost optimization solutions.
    

![Cost optimization](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/9951183961/p554555.png)

## Common scenarios

This section describes the common scenarios of cost optimization in different cloud-native phases.

### Migration of core infrastructure to the cloud

Before you migrate your applications to the cloud, you need to migrate the architecture to the cloud or reconfigure the architecture to adapt to cloud-native technologies. In this phase, many changes are made to the infrastructure. Budgeting and cost governance are essential in this phase. Take note of the following items in this phase:

-   Use the cost insights feature of ACK to assess the capacity of your business system. For more information, see [Work with the cost insights feature](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/work-with-cost-analysis#task-2175173).
    
-   Select appropriate instance types for infrastructure resources. For information, see [Instance type selection](/help/en/ecs/user-guide/best-practices-for-instance-type-selection#concept-cnt-yn3-wdb).
    
-   Save on costs for essential infrastructure through savings plans. For information, see [What is a savings plan?](/help/en/ecs/savings-plans#concept-1950739).
    

### Migration of applications to the cloud

In the phase of cloud-native transformation, you can make use of Kubernetes features, such as auto scaling and hybrid deployment, to improve high availability and ensure the stability of the applications deployed on the cloud. Kubernetes can scale the deployment units of your applications in response to workload fluctuations. This achieves intelligent load shifting by automatically adjusting resource requests based on business requirements.

### Reliability on the cloud

After moving to a cloud-native architecture, you may need to adopt different cost governance strategies for different scenarios. The following list provides examples of common scenarios that you may encounter:

-   Periodic workload fluctuations
    
    The workloads have an obvious pattern of fluctuation. For example, traffic peaks at 09:00 and 17:00 every day. In this case, we recommend that you use the cost insights feature to monitor the trend of workload fluctuations and perform scaling activities during these periods to maintain the availability of your applications and optimize costs. For information, see [Work with the cost insights feature](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/work-with-cost-analysis#task-2175173).
    
-   Frequent application iterations
    
    Emerging businesses have short iteration cycles. This results in frequent application iterations throughout their lifecycles. At the early stage of an emerging business, it is hard to accurately size the resources for your applications. In this case, we recommend that you use the cost insights feature of ACK to monitor resource costs and use the resource profiling feature to help choose appropriate resource specifications for your applications. For more information, see [Work with the cost insights feature](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/work-with-cost-analysis#task-2175173) and [Resource profiling](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/resource-profiling#task-2192631).
