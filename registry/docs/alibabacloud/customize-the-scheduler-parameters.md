You can modify the custom parameters of kube-scheduler to define how the scheduler works based on your business requirements, which makes pod scheduling more aligned with your expectations. For example, you can choose to use the binpack algorithm or enable load-aware scheduling.

## Prerequisite

An ACK Pro cluster, ACK Edge Pro cluster, ACK Lingjun cluster, or ACK Serverless Pro cluster that runs Kubernetes 1.20 or later is created. For more information about how to update a cluster, see [Manually upgrade a cluster](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/update-the-kubernetes-version-of-an-ack-cluster).

## Limits

The following table describes the kube-scheduler versions that support custom parameters in ACK Pro clusters and ACK Edge Pro clusters that run different Kubernetes versions.

**Note**

ACK Serverless Pro clusters and ACK Lingjun clusters with kube-scheduler installed support custom parameters.

**Kubernetes version**

**kube-scheduler version**

≥ 1.28

All versions

1.26

≥ v1.26.3-aliyun-6.8.7.5a563072

1.24

≥ 1.24.6-ack-3.1

1.22

≥ 1.22.15-ack-2.0

1.20

≥ v1.20.11-9.0-bcaa6001-aliyun

## Procedure

1.  Log on to the [ACK console](https://cs.console.alibabacloud.com). In the left navigation pane, click **Clusters**.
    
2.  On the **Clusters** page, find the one you want to manage and click its name. In the left navigation pane, click **Add-ons**.
    
3.  On the **Core Components** tab, find **Kube Scheduler**, click **Configuration** in the lower-right corner of the card, and configure the parameters in the **Kube Scheduler Parameters** dialog box as prompted.
    
    The features and custom parameters vary based on the kube-scheduler version. For more information about the features supported by different kube-scheduler versions, see [kube-scheduler](/help/en/ack/product-overview/kube-scheduler#task-2280286). The following table describes the custom parameters.
    
    **Parameter**
    
    **Description**
    
    **Type**
    
    **Valid value**
    
    **Default value**
    
    **Enable Virtual Node-based Pod Scheduling**
    
    Specifies whether to schedule pods on virtual nodes based on node affinity and pod spread constraints.
    
    bool
    
    -   true
        
    -   false
        
    
    true
    
    **podMaxBackoffSeconds**
    
    The maximum backoff delay for rescheduling pods in seconds. After a pod fails to be scheduled, the pod cannot be rescheduled until the delay ends.
    
    int
    
    \[1,100000\]
    
    10
    
    **Preferably Use Bin Packing During Pod Scheduling**
    
    Specifies whether to enable the binpack algorithm.
    
    For more information, see sample configurations in [Custom binpack parameters](#section-5l9-khz-7i1).
    
    bool
    
    -   false
        
    -   true
        
    
    false
    
    **binpackPluginWeight**
    
    The weight of the node score calculated by the binpack plug-in. You must also select **Preferably Use Bin Packing During Pod Scheduling**.
    
    int
    
    \[1,100000\]
    
    100
    
    **binpackResourceWeight**
    
    The weight of each resource when the binpack plug-in calculates the node score. You must also select **Preferably Use Bin Packing During Pod Scheduling**.
    
    -   resourceName: string
        
    -   resourceWeight: int
        
    
    -   Schema validation is performed on the resourceName parameter. The value of the resourceName parameter can contain only letters, digits, periods (.), forward slashes (/), and hyphens (-).
        
    -   The value of the resourceWeight parameter must be an integer from 1 to 10000.
        
    
    -   cpu:1
        
    -   memory:1
        
    
    **scorePluginWeights**
    
    The weight of each plug-in that is used to calculate the node score.
    
    **Note**
    
    The weight of the NodeResourceFit plug-in conflicts with that of the binpack plug-in. Therefore, if you select **Preferably Use Bin Packing During Pod Scheduling (Pods Are Evenly Distributed among Nodes When Unselected)**, do not add the weight of the NodeResourceFit plug-in for this parameter.
    
    -   plugin: string
        
    -   weight: int
        
    
    -   You can select only plug-ins that are displayed in the plugin drop-down list.
        
    -   The value of the weight parameter must be an integer from 1 to 10000.
        
    
    -   plugin: NodeAffinity
        
    -   weight: 100
        
    
    **percentageOfNodesToScore**
    
    The percentage of nodes suitable for pod scheduling.
    
    Default value: 0. When the default value is used, a proportion of nodes in the cluster are scored. The proportion ranges from 5% to 50% based on the cluster size.
    
    int
    
    \[0,100\]
    
    0
    
    **Node scoring for GPU sharing**
    
    Specifies whether to schedule GPU-accelerated pods to GPUs that request more memory and computing power when you use GPU sharing. To use GPU sharing, you must install the cloud-native AI suite.
    
    bool
    
    -   false
        
    -   true
        
    
    true
    
    **Load-aware scoring during pod scheduling (loadAwareResourceWeight)**
    
    Specifies whether to enable load-aware scheduling. To enable load-aware scheduling, you must install the ack-koordinator component.
    
    bool
    
    -   false
        
    -   true
        
    
    false
    
    **loadAwareThreshold**
    
    This parameter specifies the threshold for node filtering.
    
    The value consists of the **resourceName** and **resourceWeight** fields.
    
    -   **resourceName**: Valid values are **cpu** and **memory**.
        
    -   **threshold**: Valid values range from 0 to 100.
        
    
    By default, this parameter is left empty, which disables node filtering.
    
    -   resourceName: cpu
        
    -   threshold: 80
        
    
    **loadAwareResourceWeight**
    
    This parameter specifies the resource weight used to calculate the node score for node sorting. This parameter is available after you select **Specifies whether to enable load-aware node scoring during pod scheduling**.
    
    The value consists of the **resourceName** and **resourceWeight** fields.
    
    -   **resourceName**: The schema of the resourceName parameter is verified. Values can only be `cpu` or `memory`.
        
    -   **resourceWeight**: Valid values are integers ranging from 1 to 100.
        
    
    cpu=1
    
    memory=1
    
    **loadAwareAggregatedUsageAggregationType**
    
    This parameter specifies the type of data aggregation for the statistics. Valid values:
    
    -   **avg**: calculates the average value.
        
    -   **p50**: calculates 50% of the statistics.
        
    -   **p90**, **p95**, and **p99**: calculates 90% of the statistics, calculates 95% of the statistics, and calculates 99% of the statistics.
        
    
    enum
    
    -   **avg**
        
    -   **p50**
        
    -   **p90**
        
    -   **p95**
        
    -   **p99**
        
    
    avg
    
    **preemptionAlgorithm**
    
    ACK Scheduler determines whether to evict lower-priority pods through resource simulation, prioritizing the rapid startup of high-priority workloads. Supported strategies:
    
    -   Default: Kubernetes community-standard preemption
        
    -   ElasticQuota: Resource preemption based on ElasticQuotaTree
        
    -   Auto: Adaptive preemption policy based on cluster specifications
        
    -   None: Disables preemption
        
    
    For details, see [Enable preemption](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/enable-preemptive-scheduling).
    
    enum
    
    -   Default
        
    -   ElasticQuota
        
    -   Auto
        
    -   None
        
    
    Auto
    
    **enableReservation**
    
    Specifies whether to enable the resource reservation feature.
    
    boolean
    
    -   true
        
    -   false
        
    
    false
    
    **featureGates**
    
    The feature gates that are enabled by the scheduler. For more information about feature gates supported by different versions of scheduler, see [the kube-scheduler documentation](https://kubernetes.io/docs/reference/command-line-tools-reference/kube-scheduler/).
    
    string
    
    N/A
    
    ACK uses the same feature gates as open source Kubernetes.
    

The following section provides an example on how to configure custom parameters.

## Custom binpack parameters

### Comparison between the binpack algorithm and spread algorithm

**Dimension**

**binpack**

**spread**

Scheduling policy

-   When this algorithm is used, the system preferentially schedules pods to nodes whose resource utilization is high.
    
-   When this algorithm is used, the system preferentially shares one node with multiple pods.
    

-   When this algorithm is used, the system preferentially schedules pods to nodes whose resource utilization is the lowest.
    
-   When this algorithm is used, the system attempts to allocate one node to each pod.
    

Feature

This algorithm reduces resource fragments on nodes.

-   This algorithm is the default resource scheduling policy of Kubernetes.
    
-   This algorithm ensures relatively even pod distribution among the nodes in a cluster.
    
-   This algorithm leads to resource fragments on nodes.
    

Scenarios

This algorithm is applicable to scenarios to improve resource utilization on nodes.

This algorithm is applicable to scenarios to guarantee the high availability of nodes.

### Configure custom binpack parameters

You can select **Preferably Use Bin Packing During Pod Scheduling** and specify the weight of the node score calculated by the binpack plug-in. A larger weight indicates a higher probability that pods are scheduled to the same node. You can also specify the resource names based on which the binpack plug-in calculates the node score and the weight of each resource in the node score calculation. A greater value indicates a greater influence on the node score.

On the **Core Components** tab of the **Add-ons** page, find **Kube Scheduler**, click **Configuration**, and then configure the binpack parameters in the dialog box as prompted.

**Parameter**

**Description**

****Preferably Use Bin Packing During Pod Scheduling****

This parameter enables the binpack algorithm.

**binpackPluginWeight**

This parameter specifies the weight of the node score calculated by the binpack plug-in. In most cases, you can use the default settings. If pods are not scheduled as expected after you enable binpack, you can set the weight to a greater value, such as **200**. For more information, see [binpack weight](https://kubernetes.io/zh-cn/docs/reference/config-api/kube-scheduler-config.v1/#kubescheduler-config-k8s-io-v1-Plugin).

Specify the resource names based on which the binpack plug-in calculates the node score and the weight of each resource.

For more information, see [Enabling bin packing using MostAllocated strategy](https://kubernetes.io/docs/concepts/scheduling-eviction/resource-bin-packing/#enabling-bin-packing-using-mostallocated-strategy).

-   The `name` and `weight` parameters in the `scoringStrategy:resources` section specify the weight of each resource in the node score calculation section.
    
-   The `name` and `weight` parameters in the `scoringStrategy:resources` section correspond to the **resourceName** and **resourceWeight** parameters in the ACK console.
    

If you select **Preferably Use Bin Packing During Pod Scheduling** without configuring the **resourceName** and **resourceWeight** parameters, the default CPU and memory settings in the following figure are used in node score calculation.

![cpu](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/3017874471/p556098.jpg)

## **References**

We recommend that you enable the load-aware scheduling, which schedules nodes based on actual resource usage rather than the amount of resources requested. For more information, see [Use load-aware scheduling](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/use-load-aware-pod-scheduling).
