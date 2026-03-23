Spot instances are on-demand instances available at a discounted price compared to pay-as-you-go instances. A spot instance node pool consists of a mix of spot instances and pay-as-you-go instances. Using spot instance node pools significantly reduces your costs. This topic describes the concept and use cases of spot instance node pools. Learn how to configure an instance mix, set the ratio of spot instances to pay-as-you-go instances, check the expiration status of spot instances, and handle interruptions.

## Introduction to spot instance node pools

[Spot instances](/help/en/ecs/spot-instance#concept-1936192) use a pay-as-you-go billing method, where you pay for what you use. The price is calculated based on the market price and the duration of use. A spot instance node pool consists of a mix of spot instances and pay-as-you-go instances at a specified ratio.

A spot instance is a special type of pay-as-you-go instance with a dynamic price that fluctuates based on factors like supply and demand. This model offers lower costs, with potential savings of up to 90% compared to a node pool that uses only pay-as-you-go instances. Because the market price of spot instances fluctuates, you must specify a bidding strategy when creating them. A spot instance is successfully created only when the real-time market price for the specified instance type is lower than your bid and sufficient inventory is available.

Once created, a spot instance operates just like a pay-as-you-go instance. You can use it in combination with other cloud products, such as Cloud Disks and Elastic IP Addresses (EIPs). By default, a spot instance has a one-hour protection period. After this period, the system checks the real-time market price and inventory of the instance type every five minutes. If the market price exceeds your bid or if inventory is insufficient, the system releases the spot instance.

## Use cases

-   **Spot instance node pools**
    
    Because spot instance node pools use spot instances, nodes can be reclaimed at any time. This makes them ideal for stateless and fault-tolerant applications. Suitable workloads include batch processing, machine learning training jobs, big data ETL (such as Apache Spark), queue processing applications, and stateless API applications.
    
    Workloads on spot instance node pools must tolerate periods when required node resources are unavailable. For applications that cannot tolerate such interruptions, we recommend using node pools with pay-as-you-go instances or subscription instances. Workloads that are generally unsuitable for spot instances include:
    
    -   Cluster management tools, such as monitoring and operations tools.
        
    -   Deployments or applications that require stateful workloads, such as a database.
        
    
-   **Spot instance node pools with auto scaling**
    
    If your workload is suitable for a spot instance node pool and also has distinct peak and off-peak periods, we recommend enabling auto scaling for the node pool.
    
    When auto scaling is enabled, the cluster's node auto-scaler component checks if the spot instance node pool needs to scale out to deploy pods in the cluster and automatically performs a scale-in when nodes meet the criteria for scaling down. An auto scaling spot instance node pool scales out faster and releases idle resources more promptly. This rapid scaling helps compensate for the passive reclamation of spot instances and enhances cost savings by efficiently managing resource usage.
    

## Select and configure a spot instance mix

There is no "one-size-fits-all" solution for selecting instance types. We recommend choosing a configuration that best fits your business needs and strikes an optimal balance among inventory, cost, and performance. To meet diverse business requirements, Alibaba Cloud ECS offers a wide range of instance types. To use a spot instance node pool effectively, you must first learn how to select the right instance mix, especially in a bidding scenario, to minimize potential impact on your business.

You can select and configure your spot instance mix in the following ways.

### **Based on console recommendations**

The [Alibaba Cloud Container Service for Kubernetes (ACK) console](https://cs.console.alibabacloud.com) provides recommendations for instance selection. When you create or edit a node pool, the console displays instance types that are currently in stock for the selected region. Further filter these instance types based on your resource requirements. After you select the instance types, the console calculates the elasticity strength and the price range for the instances. Use the elasticity strength recommendation to add more instance types and set a maximum price for your instances.

> For more information on how to create or edit a node pool, see [Create and manage node pools](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/create-a-node-pool).

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/8835489471/p967870.png)

### **Use the spot-instance-advisor CLI**

ACK provides an open-source command-line tool, `spot-instance-advisor`, which you can use to retrieve historical price fluctuations and current pricing information for spot instances. The `spot-instance-advisor` tool calls an API to retrieve the instance types and historical price curves for a region. It then uses statistical analysis to rank the instance types with the lowest core-hour cost and calculates a value based on price volatility, shown in the `ratio` column. A higher `ratio` value indicates more frequent price fluctuations. We recommend choosing instance types with low `ratio` values.

**Note**

To download `spot-instance-advisor`, visit the [spot-instance-advisor](https://github.com/AliyunContainerService/spot-instance-advisor) repository.

The `spot-instance-advisor` supports the following filter parameters.

```
Usage of ./spot-instance-advisor:
  -accessKeyId string
        Your accessKeyId of cloud account
  -accessKeySecret string
        Your accessKeySecret of cloud account
  -cutoff int
        Discount of the spot instance prices (default 2)
  -family string
        The spot instance family you want (e.g. ecs.n1,ecs.n2)
  -limit int
        Limit of the spot instances (default 20)
  -maxcpu int
        Max cores of spot instances  (default 32)
  -maxmem int
        Max memory of spot instances (default 64)
  -mincpu int
        Min cores of spot instances (default 1)
  -minmem int
        Min memory of spot instances (default 2)
  -region string
        The region of spot instances (default "cn-hangzhou")
  -resolution int
        The window of price history analysis (default 7)
```

Run the following command to get the most suitable instance type configuration for the current region.

> The `accessKeyId`, `accessKeySecret`, and `region` parameters are required. Replace the placeholder values with your actual information.

```
./spot-instance-advisor --accessKeyId=<id> --accessKeySecret=<secret> --region=<cn-zhangjiakou>
```

**Sample output**

```
Initialize cache ready with 619 kinds of instanceTypes
Filter 93 of 98 kinds of instanceTypes.
Fetch 93 kinds of instanceTypes prices successfully.
Successfully compare 199 kinds of instanceTypes
      instanceTypeId               ZoneId     Price(Core)        Discount           ratio
        ecs.c6.large     cn-zhangjiakou-c          0.0135             1.0             0.0
        ecs.c6.large     cn-zhangjiakou-a          0.0135             1.0             0.0
      ecs.c6.2xlarge     cn-zhangjiakou-a          0.0136             1.0             0.0
      ecs.c6.2xlarge     cn-zhangjiakou-c          0.0136             1.0             0.0
      ecs.c6.3xlarge     cn-zhangjiakou-a          0.0137             1.0             0.0
      ecs.c6.3xlarge     cn-zhangjiakou-c          0.0137             1.0             0.0
       ecs.c6.xlarge     cn-zhangjiakou-c          0.0138             1.0             0.0
       ecs.c6.xlarge     cn-zhangjiakou-a          0.0138             1.0             0.0
     ecs.hfc6.xlarge     cn-zhangjiakou-a          0.0158             1.0             0.0
      ecs.hfc6.large     cn-zhangjiakou-a          0.0160             1.0             0.0
      ecs.hfc6.large     cn-zhangjiakou-c          0.0160             1.0             0.0
      ecs.g6.3xlarge     cn-zhangjiakou-a          0.0175             1.0             0.0
      ecs.g6.3xlarge     cn-zhangjiakou-c          0.0175             1.0             0.0
        ecs.g6.large     cn-zhangjiakou-a          0.0175             1.0             0.0
       ecs.g6.xlarge     cn-zhangjiakou-a          0.0175             1.0             0.0
      ecs.g6.2xlarge     cn-zhangjiakou-a          0.0175             1.0             1.0
      ecs.g6.2xlarge     cn-zhangjiakou-c          0.0175             1.0             3.0
        ecs.g6.large     cn-zhangjiakou-c          0.0175             1.0             30.8
       ecs.g6.xlarge     cn-zhangjiakou-c          0.0175             1.0             9.7
      ecs.hfg6.large     cn-zhangjiakou-c          0.0195             1.0             0.2
```

The output shows that the top-ranked instance types have relatively stable prices and low volatility (the `ratio` column). While the instance types listed later also offer a 90% discount (a `Discount` value of 1.0 corresponds to a 90% discount), their `ratio` values are higher. Therefore, when configuring your instance types, prioritize the combinations with lower prices and lower `ratio` values.

## Configure the ratio of spot instances to pay-as-you-go instances

You can configure the ratio of spot instances to pay-as-you-go instances within a node pool. This lets you reduce costs by maximizing the use of spot instances while maintaining a stable base of pay-as-you-go instances.

**Important**

-   Your cluster version must be 1.9 or later. To upgrade your cluster, see [Manually upgrade a cluster](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/update-the-kubernetes-version-of-an-ack-cluster#task-1664343).
    
-   Ensure that you can add a sufficient number of nodes to your cluster. For information about node quotas and how to apply for a quota increase, see [Quotas and limits](/help/en/ack/product-overview/limits#concept-gsf-w2b-5db).
    
-   To ensure that nodes can access the public internet and prevent failures when you add existing nodes, make sure that the ECS instances in the Virtual Private Cloud (VPC) have an Elastic IP Address (EIP) bound to them or that the corresponding VPC is configured with a NAT Gateway.
    

1.  Log on to the [ACK console](https://cs.console.alibabacloud.com). In the left navigation pane, click **Clusters**.
    
2.  On the **Clusters** page, find the cluster to manage and click its name. In the left navigation pane, choose **Nodes** > **Node Pools**.
    
3.  On the **Node Pools** page, click **Create Node Pool** and configure the node pool.
    
    The following table describes only the core parameters. For detailed instructions, see [Create and manage a node pool](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/create-a-node-pool).
    
    **Configuration Item**
    
    **Description**
    
    **vSwitch**
    
    Select vSwitches in different zones to improve the high availability (HA) of your cluster.
    
    **Billing Method**
    
    Select **Spot instance**.
    
    Expand the **Advanced Options** below and configure the following parameters.
    
    ![扩缩容策略.png](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/9767579471/p413230.png)
    
    **Scaling Policy**
    
    -   **Priority**: The system scales the node pool based on the priorities of the vSwitches that you select for the node pool. The ones you select are displayed in descending order of priority. If Auto Scaling fails to create ECS instances in the zone of the vSwitch with the highest priority, Auto Scaling attempts to create ECS instances in the zone of the vSwitch with the next highest priority.
        
    -   **Cost Optimization**: The system creates instances based on the vCPU unit prices in ascending order.
        
        If the **Billing Method** of the node pool is set to **Spot Instance**, such instances are preferentially created. You can also set the **Percentage Of Pay-as-you-go Instances** parameter. If spot instances cannot be created due to reasons such as insufficient stocks, pay-as-you-go instances are automatically created as a supplement.
        
    -   **Distribution Balancing**: The even distribution policy takes effect only when you select multiple vSwitches. This policy ensures that ECS instances are evenly distributed among the zones (the vSwitches) of the scaling group. If they are unevenly distributed due to reasons such as insufficient stocks, you can perform a rebalancing operation.
        
    
    ****Use On-Demand Instances To Supplement Spot Capacity****
    
    > You must set the Billing Method parameter to Spot Instance.
    
    After this feature is enabled, if enough spot instances cannot be created due to price or inventory constraints, ACK automatically creates pay-as-you-go instances to meet the required number of ECS instances.
    
    **Enable Supplemental Spot Instances**
    
    After this feature is enabled, when a system receives a message that spot instances will be reclaimed (5 minutes before reclamation), ACK will attempt to scale out new instances as compensation.
    
    If compensation succeeds, ACK will drain and remove the old nodes from the cluster. If compensation fails, ACK will not drain the old nodes. Active release of spot instances may cause service interruptions. After compensation failure, when inventory becomes available or price conditions are met, ACK will automatically purchase instances to maintain the expected node count. For details, see [Best practices for spot instance node pools](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/best-practices-for-preemptible-instance-based-node-pools).
    
    To improve compensation success rates, we recommend enabling **Use Pay-as-you-go Instances When Spot Instances Are Insufficient** at the same time.
    

After completing the configuration, you can go to the node pool list, click **Details** in the **Actions** column, and then click the **Overview** tab. In the **Node Configurations** section, you can view the percentage of pay-as-you-go instances.

## Check the expiration status of spot instances

To prevent unexpected node termination when a spot instance expires, ACK uses the [ack-node-problem-detector (NPD)](/help/en/ack/product-overview/ack-node-problem-detector) component to retrieve information about an impending instance release and notify you.

> To install the NPD component, see [Step 1: Install the ack-node-problem-detector component](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/event-monitoring#245593f257htk).

In an ACK cluster, ECS instances serve as nodes that support the cluster and the services running on it. Based on their creation policy, some instances (such as spot and subscription instances) are automatically released upon expiration. If you do not perform pre-emptive actions like pod eviction, node drain, or node replacement before an instance is released, your cluster services may be affected. The unexpected termination of a control plane node could even lead to a cluster-level failure. To prevent issues caused by spot instance expiration, you can use the `InstanceExpired` status from the NPD component to get information about an impending instance release.

1.  Log on to the [ACK console](https://cs.console.alibabacloud.com). In the left navigation pane, click **Clusters**.
    
2.  On the **Clusters** page, click the name of the one you want to change. In the left navigation pane, choose **Nodes** > **Nodes**.
    
3.  On the **Nodes** page, click the name of the target node or select **More** > **Details** in the **Actions** column.
    
4.  On the node details page, check the `InstanceExpired` status.
    
    In the **Status** section, view the status of the `InstanceExpired` condition.![实例是否到期](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/4578840361/p302105.png)
    
    The `InstanceExpired` statuses are described below:
    
    `InstanceExpired` **status**
    
    **Description**
    
    True
    
    If the status is `True` and the **Content** is `InstanceToBeTerminated`, it indicates that the spot instance is about to expire and will be released.
    
    False
    
    If the status is `False` and the **Content** is `InstanceNotToBeTerminated`, it indicates that the spot instance has not yet expired and can continue to be used.
    
    Unknown
    
    Indicates a plugin error. Please [submit a ticket](https://smartservice.console.alibabacloud.com/console.htm) for assistance.
    
    If the `InstanceExpired` status is `True`, you can see the following event in the **Events** section.![实例过期event](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/4578840361/p302240.png)
    

If the `InstanceExpired` status is `True`, it means the spot instance is about to be released. If you need to continue running services on this node, you must schedule the application to other nodes. For detailed instructions, see [Schedule applications to a specific node](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/schedule-pods-to-specific-nodes#task-1779995).

## Handle spot instance interruptions gracefully

Gracefully handling spot instance interruptions involves three main strategies: monitoring and notifications, proactive node compensation, and custom handling logic.

### **Understand interruption notifications**

To ensure you are notified as early as possible about the release of a spot instance in a node pool, ACK uses the NPD component to monitor pre-release messages for spot instances.

-   When no pre-release message is detected for a spot instance, the `InstanceExpired` value in the node's status is `False`.![抢占式实例节点状态.png](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/9767579471/p408703.png)
    
-   When the `InstanceExpired` value for a spot instance is `True`, it indicates that the instance is about to expire and be released. ACK will notify you of the impending release through a cluster event (Kubernetes Event).![抢占式实例释放.png](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/8430389461/p408704.png)
    

### **Enable supplemental spot instances**

Spot instances can be reclaimed with short notice, which may disrupt workloads and temporarily reduce cluster capacity.

To minimize disruption, ACK offers supplemental spot instances—a proactive node replacement feature that automatically launches a new instance before an expiring spot instance is reclaimed.

This helps maintain stable cluster capacity and allows time for workloads to migrate smoothly, reducing the risk of service interruption.

**Best practice:**

> We recommend enabling this feature when running stateful or latency-sensitive workloads on spot instances.

#### **How to Enable**

In your node pool configuration, turn on **Enable Supplemental Spot Instance**.

Once enabled, ACK automatically triggers replacement scaling activities upon detecting an upcoming reclamation.

**Important**

-   If replacement fails (for example, due to inventory or pricing), the original spot instance will still be reclaimed as scheduled. However, ACK will attempt to restore the target node count once conditions allow.
    

![抢占式实例节点预补偿.png](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/1081389461/p408712.png)

### **Customize handling behavior**

In many real-world business scenarios, node decommissioning requires more steps than a standard graceful shutdown, such as removing the node's information from a registered DNS center. To address such needs, we recommend monitoring the `InstanceExpired` status of the node or listening for the `InstanceToBeTerminated` event. When you receive a notification that a node instance is expiring or will be released, you can treat it as a node pending decommissioning and run your custom handling logic. For detailed instructions on how to monitor the expiration status of spot instances, see [Check the expiration status of spot instances](#section-ehj-xrw-koj).

## References

-   [Spot instances](/help/en/ecs/spot-instance#concept-1936192)
    
-   [Create and manage a node pool](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/create-a-node-pool#task-2457443)
