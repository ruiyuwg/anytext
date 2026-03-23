By default, Container Service for Kubernetes (ACK) filters nodes based on whether they meet the resource request of a pod when ACK schedules the pod. The scheduler in ACK Pro clusters supports the load-aware scheduling feature. We recommend that you use this feature to monitor the loads of nodes and schedule pods to nodes with lower loads to implement load balancing. This avoids overloading nodes.

## Prerequisites

-   ack-koordinator 1.1.1-ack.1 or later is installed. For more information, see [ack-koordinator (FKA ack-slo-manager)](/help/en/ack/product-overview/ack-koordinator-fka-ack-slo-manager#section-7sg-0ck-qmm).
    
-   The installed ACK scheduler kube-scheduler version matches the Kubernetes version of the cluster. The following version mappings are required for enabling load-aware scheduling.
    
    **Kubernetes version**
    
    **ACK scheduler version**
    
    ≥ 1.26
    
    All versions
    
    1.24
    
    ≥ 1.24.6-ack-4.0
    
    1.22
    
    ≥ 1.22.15-ack-4.0
    

## Billing

No fee is charged when you install or use the ack-koordinator component. However, fees may be charged in the following scenarios:

-   ack-koordinator is a non-managed component that occupies worker node resources after it is installed. You can specify the amount of resources requested by each module when you install the component.
    
-   By default, ack-koordinator exposes the monitoring metrics of features such as resource profiling and fine-grained scheduling as Prometheus metrics. If you **enable Prometheus metrics for ack-koordinator** and use Managed Service for Prometheus, these metrics are considered [custom metrics](/help/en/arms/prometheus-monitoring/basic-metrics/) and fees are charged for these metrics. The fee depends on factors such as the size of your cluster and the number of applications. Before you enable Prometheus metrics, we recommend that you read the [Billing](/help/en/arms/prometheus-monitoring/product-overview/billing-description/) topic of Managed Service for Prometheus to learn about the free quota and billing rules of custom metrics. For more information about how to monitor and manage resource usage, see [Query the amount of observable data and bills](/help/en/arms/prometheus-monitoring/product-overview/billing-and-usage-query).
    

## Limits

-   Only ACK Pro clusters support load-aware scheduling. For more information, see [Create an ACK Pro cluster](/help/en/doc-detail/176833.html#task-skz-qwk-qfb).
    

## Introduction to load-aware scheduling

The load-aware scheduling feature of the ACK scheduler kube-scheduler is designed based on the Kubernetes scheduling framework. The Kubernetes scheduler schedules pods to nodes based on resource allocation. The ACK scheduler schedules pods to nodes based on the loads of nodes. After load-aware scheduling is enabled, the system reviews the historical statistics of the loads of nodes. Then, the system schedules pods to nodes with lower loads to implement load balancing. This prevents application or node crashes caused by an overloaded node.

The following figure shows the differences between the Kubernetes scheduler and the ACK scheduler when scheduling a pod. Requested indicates the resources that are requested by pods on the node and Usage indicates the resources that are in use by pods on the node. Only resources in use are accounted for when the system calculates the loads of the node. In this case, the ACK scheduler schedules the pod to Node B because Node B has lower loads.

![1](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/4557039761/p574499.png)

As time, the cluster environment, traffic, or requests to workloads on nodes change, the load distribution among nodes may become imbalanced. To prevent this issue, ack-koordinator provides the load-aware hotspot descheduling feature. You can use load-aware scheduling in combination with hotspot descheduling to achieve optimal load balancing among nodes. For more information about the load-aware hotspot descheduling feature, see [Work with load-aware hotspot descheduling](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/work-with-load-aware-hotspot-descheduling#task-2298572).

### How it works

Load-aware scheduling is implemented by using the kube-scheduler in combination with ack-koordinator. ack-koordinator is responsible for collecting and reporting metrics on the resource utilization of nodes. The ACK scheduler is responsible for calculating node scores based on resource utilization and sorting nodes based on node scores. The ACK scheduler preferentially schedules new pods to nodes with lower loads. For more information about the architecture of ack-koordinator, see [ack-koordinator architecture](/help/en/ack/product-overview/ack-koordinator-fka-ack-slo-manager#section-795-5ih-wac).

### Scheduling policies

**Policy**

**Description**

Node filtering

After you enable node filtering, the scheduler filters nodes based on the loads of the nodes during pod scheduling. If the loads of a node exceed the threshold you configure, the scheduler filters out the node. By default, node filtering is disabled. You can customize the scheduler configurations and modify the `loadAwareThreshold` parameter as needed. For more information, see [Kube Scheduler parameters](#step-986-0ff-84v).

**Important**

If node auto scaling is already enabled for the cluster, unexpected scaling activities may be triggered after you specify the threshold for load-aware node filtering. This is because scale-out activities are triggered when a pod remains pending and scale-in activities are triggered when the resource utilization of a node drops below the scale-in threshold. If you want to enable node auto scaling and load-aware node filtering, we recommend that you configure relevant parameters based on the resource capacity and utilization of the cluster. For more information, see [Enable node auto scaling](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/auto-scaling-of-nodes).

Node sorting

The ACK scheduler calculates the node score based on CPU utilization and memory utilization. The ACK scheduler uses weighted scoring and select nodes with higher scores for pod scheduling. After you select **Specifies whether to enable load-aware node scoring during pod scheduling** when you customize the scheduler configurations in the ACK console, you can specify a custom CPU weight and a custom memory weight. For more information, see the `loadAwareResourceWeight` parameter in the [Kube Scheduler parameters](#step-986-0ff-84v) section.

The node score is calculated based on the following formula: Node score = **\[(1 - CPU utilization) × CPU weight + (1 - Memory utilization) × Memory weight\]/(CPU weight + Memory weight)**. CPU utilization and memory utilization are measured in percentages.

Resource utilization calculation

You can configure how the average resource utilization is calculated and the percentage of data that is calculated. By default, the average resource utilization within the last 5 minutes is calculated. For more information, see [Kube Scheduler parameters](#step-986-0ff-84v). The page cache is excluded from the memory usage because the page cache can be reclaimed by the node OS. Note that the memory utilization returned by the `kubectl top node` command takes the page cache into account. To obtain the actual memory usage data, we recommend that you enable [Managed Service for Prometheus](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/use-managed-service-for-prometheus-to-monitor-an-ack-cluster).

## Step 1: Enable load-aware scheduling

**Important**

Before you enable load-aware scheduling, make sure that ack-koordinator 1.1.1-ack.1 or later is installed in your cluster.

1.  Log on to the [ACK console](https://cs.console.alibabacloud.com). In the left-side navigation pane, click **Clusters**.
    
2.  On the **Clusters** page, find the cluster that you want to manage and click its name. In the left-side navigation pane, choose **Operations** > **Add-ons**.
    
3.  On the **Add-ons** page, find **Kube Scheduler** and click **Configuration** in the **Kube Scheduler** card.
    
4.  In the **Kube Scheduler Parameters** dialog box, configure the parameters as described in the following table, and click **OK**.
    
    The following table describes the key parameters. For more information about other parameters and the component versions required by the parameters, see [kube-scheduler](/help/en/ack/product-overview/kube-scheduler) and [Custom parameters of kube-scheduler](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/customize-the-scheduler-parameters#task-2291744).
    
    **Parameter**
    
    **Type**
    
    **Description**
    
    **Valid value**
    
    **Example**
    
    **loadAwareThreshold**
    
    The value consists of the **resourceName** and **resourceWeight** fields.
    
    This parameter specifies the threshold for node filtering.
    
    -   **resourceName**: Valid values are **cpu** and **memory**.
        
    -   **threshold**: Valid values range from 0 to 100.
        
    
    By default, this parameter is left empty, which disables node filtering.
    
    -   resourceName: cpu
        
    -   threshold: 80
        
    
    **loadAwareResourceWeight**
    
    The value consists of the **resourceName** and **resourceWeight** fields.
    
    This parameter specifies the resource weight used to calculate the node score for node sorting. This parameter is available after you select **Specifies whether to enable load-aware node scoring during pod scheduling**.
    
    -   **resourceName**: The schema of the resourceName parameter is verified. Values can only be `cpu` or `memory`.
        
    -   **resourceWeight**: Valid values are integers ranging from 1 to 100.
        
    
    Default value: cpu=1, memory=1.
    
    -   resourceName: cpu
        
    -   resourceWeight: 1
        
    
    **loadAwareAggregatedUsageAggragationType**
    
    enum
    
    This parameter specifies the type of data aggregation for the statistics. Valid values:
    
    -   **avg**: calculates the average value.
        
    -   **p50**: calculates 50% of the statistics.
        
    -   **p90**, **p95**, and **p99**: calculates 90% of the statistics, calculates 95% of the statistics, and calculates 99% of the statistics.
        
    
    -   **avg**
        
    -   **p50**
        
    -   **p90**
        
    -   **p95**
        
    -   **p99**
        
    
    Default value: **avg**.
    
    p90
    
    In the left-side navigation pane of the cluster details page, click **Cluster Information**. If the status of the cluster on the **Basic Information** tab changes to **Running**, load-aware scheduling is enabled.
    

## Step 2: Test load-aware scheduling

In the following example, a cluster that contains three nodes is used. Each node has 4 Cores and 16 GiB of memory.

1.  Create a file named stress-demo.yaml and copy the following code to the file:
    
    **Show YAML content:**
    
    ```
    apiVersion: apps/v1
    kind: Deployment
    metadata:
      name: stress-demo
      namespace: default
      labels:
        app: stress-demo
    spec:
      replicas: 1
      selector:
        matchLabels:
          app: stress-demo
      template:
        metadata:
          name: stress-demo
          labels:
            app: stress-demo
        spec:
          containers:
            - args:
                - '--vm'
                - '2'
                - '--vm-bytes'
                - '1600M'
                - '-c'
                - '2'
                - '--vm-hang'
                - '2'
              command:
                - stress
              image: polinux/stress
              imagePullPolicy: Always
              name: stress
              resources:
                limits:
                  cpu: '2'
                  memory: 4Gi
                requests:
                  cpu: '2'
                  memory: 4Gi
          restartPolicy: Always
    ```
    
2.  Run the following command to create a pod: After you create the pod, increase the loads of a node.
    
    ```
    kubectl create -f stress-demo.yaml
    # Expected output
    deployment.apps/stress-demo created
    ```
    
3.  Run the following command and monitor the status of the pod until it reaches the Running state:
    
    ```
    kubectl get pod -o wide
    ```
    
    Expected output:
    
    ```
    NAME                           READY   STATUS    RESTARTS   AGE   IP           NODE                    NOMINATED NODE   READINESS GATES
    stress-demo-7fdd89cc6b-g****   1/1     Running   0          82s   10.XX.XX.112   cn-beijing.10.XX.XX.112   <none>           <none>
    ```
    
    The `stress-demo-7fdd89cc6b-g****` pod is scheduled to the `cn-beijing.10.XX.XX.112` node.
    
    Wait 3 minutes. Make sure that the pod is initialized and the loads of the node are increased.
    
4.  Run the following command to query the loads of each node:
    
    ```
    kubectl top node
    ```
    
    Expected output:
    
    ```
    NAME                    CPU(cores)   CPU%   MEMORY(bytes)   MEMORY%
    cn-beijing.10.XX.XX.110   92m          2%     1158Mi          9%
    cn-beijing.10.XX.XX.111   77m          1%     1162Mi          9%
    cn-beijing.10.XX.XX.112   2105m        53%    3594Mi          28%
    ```
    
    The `cn-beijing.10.XX.XX.111` node has the lowest loads among all nodes. The `cn-beijing.10.XX.XX.112` node has the highest loads among all nodes. This indicates that the loads among nodes are imbalanced.
    
5.  Create a file named nginx-with-loadaware.yaml and copy the following code to the file:
    
    **Show YAML content:**
    
    ```
    apiVersion: apps/v1
    kind: Deployment
    metadata:
      name: nginx-with-loadaware
      namespace: default
      labels:
        app: nginx
    spec:
      replicas: 6
      selector:
        matchLabels:
          app: nginx
      template:
        metadata:
          name: nginx
          labels:
            app: nginx
        spec:
          containers:
          - name: nginx
            image: nginx
            resources:
              limits:
                cpu: 500m
              requests:
                cpu: 500m
    ```
    
6.  Run the following command to create the pods:
    
    ```
    kubectl create -f nginx-with-loadaware.yaml
    # Expected output
    deployment/nginx-with-loadawre created
    ```
    
7.  Run the following command to check whether the pods are scheduled:
    
    ```
    kubectl get pods | grep nginx
    ```
    
    Expected output:
    
    ```
    nginx-with-loadaware-5646666d56-2****   1/1     Running   0          18s   10.XX.XX.118   cn-beijing.10.XX.XX.110   <none>           <none>
    nginx-with-loadaware-5646666d56-7****   1/1     Running   0          18s   10.XX.XX.115   cn-beijing.10.XX.XX.110   <none>           <none>
    nginx-with-loadaware-5646666d56-k****   1/1     Running   0          18s   10.XX.XX.119   cn-beijing.10.XX.XX.110   <none>           <none>
    nginx-with-loadaware-5646666d56-q****   1/1     Running   0          18s   10.XX.XX.113   cn-beijing.10.XX.XX.111   <none>           <none>
    nginx-with-loadaware-5646666d56-s****   1/1     Running   0          18s   10.XX.XX.120   cn-beijing.10.XX.XX.111   <none>           <none>
    nginx-with-loadaware-5646666d56-z****   1/1     Running   0          18s   10.XX.XX.116   cn-beijing.10.XX.XX.111   <none>           <none>
    ```
    
    The preceding output indicates that after load-aware scheduling is enabled for the cluster, the cluster can monitor the loads of nodes and use a scheduling policy to schedule pods to nodes other than the `cn-beijing.10.XX.XX.112` node.
    

## What to do next

### Modify load-aware scheduling configurations

1.  Log on to the [ACK console](https://cs.console.alibabacloud.com). In the left-side navigation pane, click **Clusters**.
    
2.  On the **Clusters** page, find the cluster that you want to manage and click its name. In the left-side navigation pane, choose **Operations** > **Add-ons**.
    
3.  On the **Add-ons** page, find **Kube Scheduler** and click **Configuration** in the **Kube Scheduler** card.
    
4.  In the **Kube Scheduler Parameters** dialog box, modify the parameters related to load-aware scheduling and click **OK**.
    
    In the left-side navigation pane of the cluster details page, click **Cluster Information**. If the status of the cluster on the **Basic Information** tab changes to **Running**, the load-aware scheduling configurations are modified.
    

### Disable load-aware scheduling

1.  In the **Kube Scheduler Parameters** dialog box, clear **Specifies whether to enable load-aware node scoring during pod scheduling**, delete `loadAwareResourceWeight` and `loadAwareThreshold` parameters, and click **OK**
    
2.  In the left-side navigation pane of the cluster details page, click **Cluster Information**. If the status of the cluster on the **Basic Information** tab changes to **Running**, load-aware scheduling is disabled.
    

## FAQ

### After I create a batch of pods, why is no pod scheduled to the node with the lowest loads?

If the scheduler schedules all of the pods to the node with the lowest loads, the node becomes a hotspot node.

To prevent this issue, if a node has new pods whose resource utilization data is not reported, the load-aware scheduling plug-in makes an appropriate adjustment to the node score.

### In addition to the loads of nodes, what factors may affect the results of load-aware scheduling?

The Kubernetes scheduler consists of multiple plug-ins. Some of the plug-ins, such as the affinity plug-in and topology plug-in, are responsible for node scoring and sorting. Nodes are sorted collectively by the plug-ins. You can adjust the weights of the scores given by different plug-ins based on your business requirements.

### Is the load-aware scheduling feature enabled based on an earlier version of the scheduler protocol supported after I update the scheduler version?

To use the load-aware scheduling feature of an earlier version of the scheduler protocol, add the `alibabacloud.com/loadAwareScheduleEnabled: "true"` annotation to the pod configurations.

The ACK scheduler is compatible with earlier versions of the scheduler protocol. You can seamlessly update the ACK scheduler to later versions. After you update the ACK scheduler, we recommend that you perform [Step 1: Enable load-aware scheduling](#section-ti8-mqr-6sk) to enable load balancing for the cluster. This eliminates the need to modify pod configurations to balance the loads among the nodes in the cluster.

**Important**

In Kubernetes 1.22, the ACK scheduler is compatible with earlier versions of scheduler protocol. However, in Kubernetes 1.24, the ACK scheduler is compatible with earlier versions of the scheduler protocol until August 30, 2023. We recommend that you update the Kubernetes version of your cluster and use the latest configuration method of load-aware scheduling. For more information about how to update a cluster, see [Manually upgrade ACK clusters](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/update-the-kubernetes-version-of-an-ack-cluster#task-1664343).

The following table describes the compatibility between different protocol versions and component versions.

## **Kubernetes 1.26 and later**

**ACK scheduler version**

**ack-koordinator (FKA ack-slo-manager) version**

**Pod annotation protocol**

**Whether it can be enabled/disabled in the console**

All versions

≥ 1.1.1-ack.1

No

Yes

## **Kubernetes 1.24**

**ACK scheduler version**

**ack-koordinator (FKA ack-slo-manager) version**

**Pod annotation protocol**

**Whether it can be enabled/disabled in the console**

≥ 1.24.6-ack-4.0

≥ 1.1.1-ack.1

Yes

Yes

≥ 1.24.6-ack-3.1 and < 1.24.6-ack-4.0

≥ 0.8.0

Yes

No

## **Kubernetes 1.22 and earlier**

**ACK scheduler version**

**ack-koordinator (FKA ack-slo-manager) version**

**Pod annotation protocol**

**Whether it can be enabled/disabled in the console**

≥ 1.22.15-ack-4.0

≥ 1.1.1-ack.1

Yes

Yes

≥ 1.22.15-ack-2.0 and < 1.22.15-ack-4.0

≥ 0.8.0

Yes

No

-   ≥ 1.20.4-ack-4.0 ≤ 1.20.4-ack-8.0
    
-   v1.18-ack-4.0
    

≥ 0.3.0 and < 0.8.0

Yes

No
