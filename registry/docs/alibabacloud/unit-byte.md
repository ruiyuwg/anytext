In Container Service for Kubernetes (ACK) clusters, you can enable the dynamic resource overcommitment feature to schedule resources that are allocated to pods but are not in use to low-priority applications. The dynamic resource overcommitment feature monitors the loads of a node in real time, calculates the CPU and memory resources that are allocated but are not in use in the cluster, and schedules resources to BestEffort pods. This ensures that resources are fairly scheduled among BestEffort pods.

**Note**

To help you better understand and use this feature, we recommend that you first read the following topics in the Kubernetes official documentation: [Pod Quality of Service Classes](https://kubernetes.io/docs/concepts/workloads/pods/pod-qos/) and [Assign Memory Resources to Containers and Pods](https://kubernetes.io/docs/tasks/configure-pod-container/assign-memory-resource/).

## Why do I need to enable dynamic resource overcommitment

Kubernetes manages resources that are used by pods on a node based on the [quality of service (QoS) classes](https://kubernetes.io/docs/concepts/workloads/pods/pod-qos/) of the pods. For example, Kubernetes controls the out of memory (OOM) priorities. The QoS class of a pod can be Guaranteed, Burstable, or BestEffort.

To improve the stability of applications, application administrators reserve resources for pods when applications are deployed. The reserved resources are used to handle fluctuating workloads in upstream and downstream services. In most cases, the resource request of a pod is much higher than the actual resource usage. To improve the resource usage in a cluster, cluster administrators may provision BestEffort pods. BestEffort pods can share resources that are allocated to other pods but are not in use. This mechanism is known as resource overcommitment. However, resource overcommitment has the following disadvantages:

-   The system cannot determine whether to provide more resources for BestEffort pods based on the actual loads of a node. As a result, even if the node is overloaded, the system still schedules BestEffort pods to the node because BestEffort pods do not have resource limits.
    
-   The resources cannot be fairly scheduled among BestEffort pods. Each pod requires a different amount of resources. However, you cannot specify different resource amounts in the pod configuration file.
    

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/0174161571/CAEQLxiBgICigJPolxkiIGRhNDJmY2M3ODdlZTRkZDBhNzM3NmMyNjM2NDVkNzM54663493_20241021165030.661.svg)

To resolve the preceding issues, ACK provides the capability to calculate resources that can be dynamically overcommitted. The ack-koordinator component monitors the loads of a node and synchronizes resource statistics to the node metadata as extended resources in real time. To allow BestEffort pods to use reclaimed resources, you can configure the requests and limits of reclaimed resources for the BestEffort pods. The ACK scheduler can schedule BestEffort pods to nodes based on resource requests and configure the resource limits in the cgroup of the node to ensure that the pods can use resources properly.

To differentiate reclaimed resources from regular resources, ack-koordinator introduces the Batch concept to describe reclaimed resources. batch-cpu indicates CPU resources and batch-memory indicates memory resources. As shown in the following figure, Reclaimed refers to the amount of resources that can be dynamically overcommitted. Buffered refers to reserved resources. Usage refers to the actual resource usage.

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/0174161571/CAEQLxiBgMCvgJPolxkiIGFmNzUxM2IyZDIxOTQ2YWM5ZTZiNWY5OTE4NjQ2MzVk4663493_20240905173750.054.svg)

## Billing

No fee is charged when you install or use the ack-koordinator component. However, fees may be charged in the following scenarios:

-   ack-koordinator is a non-managed component that occupies worker node resources after it is installed. You can specify the amount of resources requested by each module when you install the component.
    
-   By default, ack-koordinator exposes the monitoring metrics of features such as resource profiling and fine-grained scheduling as Prometheus metrics. If you **enable Prometheus metrics for ack-koordinator** and use Managed Service for Prometheus, these metrics are considered [custom metrics](/help/en/arms/prometheus-monitoring/basic-metrics/) and fees are charged for these metrics. The fee depends on factors such as the size of your cluster and the number of applications. Before you enable Prometheus metrics, we recommend that you read the [Billing](/help/en/arms/prometheus-monitoring/product-overview/billing-description/) topic of Managed Service for Prometheus to learn about the free quota and billing rules of custom metrics. For more information about how to monitor and manage resource usage, see [Query the amount of observable data and bills](/help/en/arms/prometheus-monitoring/product-overview/billing-and-usage-query).
    

## Prerequisites

-   An ACK Pro cluster is created. For more information, see [Create an ACK Pro cluster](/help/en/doc-detail/176833.html#task-skz-qwk-qfb).
    
-   The ack-koordinator component is installed and the version of the component is 0.8.0 or later. For more information, see [ack-koordinator](/help/en/ack/product-overview/ack-koordinator-fka-ack-slo-manager#task-2172306).
    

## Procedure

You can use a ConfigMap to enable the dynamic resource overcommitment feature for a pod. Then, you can use the `koordinator.sh/qosClass` label to specify the QoS class of the pod in the YAML file of the pod, and configure the requests and limits of Batch resources for the pod. This way, the pod can use the dynamic resource overcommitment feature.

### **1\. Enable dynamic resource overcommitment**

You can use the ConfigMap to enable the dynamic resource overcommitment feature. You can also configure related parameters in the ConfigMap to flexibly manage reclaimed resources, such as the reclaim threshold of resources and the policy for calculating the resource capacity of the node.

1.  Create a file named configmap.yaml based on the following ConfigMap content:
    
    ```
    apiVersion: v1
    kind: ConfigMap
    metadata:
      name: ack-slo-config
      namespace: kube-system
    data:
      colocation-config: |
        {
          "enable": true,
          "metricAggregateDurationSeconds": 60,
          "cpuReclaimThresholdPercent": 60,
          "memoryReclaimThresholdPercent": 70,
          "memoryCalculatePolicy": "usage"
        }
    ```
    
    You can flexibly manage the batch-cpu and batch-memory resources by modifying the parameters in the ConfigMap.
    
    #### **Parameters**
    
    **Parameter**
    
    **Format**
    
    **Description**
    
    `enable`
    
    Boolean
    
    Specifies whether to dynamically update the statistics about Batch resources. If you disable this feature, the amount of reclaimed resources is reset to `0`. Default value: `false`.
    
    `metricAggregateDurationSeconds`
    
    Int
    
    The frequency at which the system aggregates metric data to determine whether to update or adjust Batch resources. Unit: seconds. We recommend that you use the default value, which is 60 seconds.
    
    `cpuReclaimThresholdPercent`
    
    Int
    
    The reclaim threshold of batch-cpu resources. Default value: `65`. Unit: percentage (%). For more information about how to calculate the CPU resources that can be dynamically overcommitted, see [Calculate the amount of Batch resources](#2116a59cdccbf).
    
    `memoryReclaimThresholdPercent`
    
    Int
    
    The reclaim threshold of `batch-memory` resources. Default value: `65`. Unit: percentage (%). For more information about how to calculate the memory resources that can be dynamically overcommitted, see [Calculate the amount of Batch resources](#2116a59cdccbf).
    
    `memoryCalculatePolicy`
    
    String
    
    The policy for calculating the amount of batch-memory resources. Valid values:
    
    -   `"usage"`: The amount of batch-memory resources is calculated based on the actual memory usage of pods whose QoS classes are Burstable or Guaranteed. The batch-memory resources include resources that are not allocated and resources that are allocated but are not in use. This is the default value.
        
    -   `"request"`: The amount of batch-memory resources is calculated based on the memory requests of pods whose QoS classes are Burstable or Guaranteed. The batch-memory resources include only resources that are not allocated.
        
    
    #### **Calculate the amount of Batch resources**
    
    **Calculate the amount of Batch resources based on the actual resource usage**
    
    The amount of Batch resources on a node is calculated based on the actual resource usage, which includes resources that are not allocated and resources that are allocated but are not in use. You can use the following formula to calculate the amount of batch-cpu resources and the amount of batch-memory resources:
    
    `nodeBatchAllocatable = nodeAllocatable * thresholdPercent - podUsage(non-BE) - systemUsage`
    
    -   nodeAllocatable: the amount of CPU or memory resources that can be allocated on the node.
        
    -   thresholdPercent: the threshold of resources in percentage. You can modify this parameter as described in the preceding table.
        
    -   podUsage(non-BE): the resource usage of pods whose QoS classes are Burstable or Guaranteed.
        
    -   systemUsage: the usage of system resources on the node.
        
    
    #### **Calculate the amount of Batch resources based on the resource requests of pods**
    
    The batch-memory resources can be calculated based on the resource requests of pods. The batch-memory resources include only resources that are not allocated. For more information, see the `memoryCalculatePolicy` parameter in [Parameters](#b1f4be65b5wou).
    
    You can calculate the amount of batch-memory resources based on the following formula:
    
    `nodeBatchAllocatable = nodeAllocatable * thresholdPercent - podRequest(non-BE) - systemUsage`
    
    podRequest(non-BE) refers to the sum of resource requests of pods whose QoS classes are Burstable and Guaranteed.
    
2.  Check whether the ConfigMap named `ack-slo-config` exists in the kube-system namespace.
    
    -   If the ack-slo-config ConfigMap exists, we recommend that you run the kubectl patch command to update the ConfigMap. This avoids changing other settings in the ConfigMap.
        
        ```
        kubectl patch cm -n kube-system ack-slo-config --patch "$(cat configmap.yaml)"
        ```
        
    -   If the ack-slo-config ConfigMap does not exist, run the following command to create a ConfigMap:
        
        ```
        kubectl apply -f configmap.yaml
        ```
        

### **2\. Apply for Batch resources for pods**

After the configuration is complete, you can specify the QoS class of the pod by using the `koordinator.sh/qosClass` label in the `metadata` field of the YAML file of the pod based on the total Batch resources of the node, and specify the Batch resource request and Batch resource limit.

1.  Run the following command to query the total amount of available Batch resources on the node:
    
    ```
    # Replace $nodeName with the name of the node that you want to query. 
    kubectl get node $nodeName -o yaml
    ```
    
    Expected output:
    
    ```
    # Pod information. 
    status:
      allocatable:
        # Unit: millicore (1 core = 1000 millicores). In the following example, 50 cores can be allocated. 
        kubernetes.io/batch-cpu: 50000
        # Unit: byte. In the following example, 50 GB of memory can be allocated. 
        kubernetes.io/batch-memory: 53687091200
    ```
    
2.  Create a pod and apply for Batch resources.
    
    **Important**
    
    -   If you provision a pod by using a Deployment or other types of workloads, configure the `template.metadata` field. A pod cannot apply for Batch resources and regular resources at the same time.
        
    -   ack-koordinator dynamically adjusts the Batch resources that can be allocated to pods based on the actual loads of the node. In rare cases, the kubelet may have a certain delay in synchronizing node status information. As a result, pods fail to be scheduled due to insufficient resources. In this case, delete and recreate the pods.
        
    -   You must set the amount of extended resources to an integer in Kubernetes clusters. The unit of batch-cpu resources is millicore.
        
    
    ```
    metadata:
      labels:
        # Required. Set the QoS class of the pod to BestEffort. 
        koordinator.sh/qosClass: "BE"
    spec:
      containers:
      - resources:
          requests:
            # Unit: millicore (1 core = 1000 millicores). In the following example, the CPU request is set to one core. 
            kubernetes.io/batch-cpu: "1k"
            # Unit: byte. In the following example, the memory request is set to 1 GB. 
            kubernetes.io/batch-memory: "1Gi"
          limits:
            kubernetes.io/batch-cpu: "1k"
            kubernetes.io/batch-memory: "1Gi"
    ```
    

## Example

This example shows how to deploy a BestEffort pod that applies for Batch resources after the [dynamic resource overcommitment](#78f2369d7091e) feature is enabled. After the deployment is complete, verify the result by checking whether the resource limits of the BestEffort pod take effect in the cgroup of the node.

1.  Run the following command to query the total amount of available Batch resources on the node:
    
    ```
    kubectl get node $nodeName -o yaml
    ```
    
    Expected output:
    
    ```
    # Pod information. 
    status:
      allocatable:
        # Unit: millicore (1 core = 1000 millicores). In the following example, 50 cores can be allocated. 
        kubernetes.io/batch-cpu: 50000
        # Unit: byte. In the following example, 50 GB of memory can be allocated. 
        kubernetes.io/batch-memory: 53687091200
    ```
    
2.  Create a file named be-pod-demo.yaml and copy the following content to the file:
    
    ```
    apiVersion: v1
    kind: Pod
    metadata:
      labels:
        koordinator.sh/qosClass: "BE"
      name: be-demo
    spec:
      containers:
      - command:
        - "sleep"
        - "100h"
        image: registry-cn-beijing.ack.aliyuncs.com/acs/stress:v1.0.4
        imagePullPolicy: Always
        name: be-demo
        resources:
          limits:
            kubernetes.io/batch-cpu: "50k"
            kubernetes.io/batch-memory: "10Gi"
          requests:
            kubernetes.io/batch-cpu: "50k"
            kubernetes.io/batch-memory: "10Gi"
      schedulerName: default-scheduler
    ```
    
3.  Run the following command to deploy be-pod-demo as the test application:
    
    ```
    kubectl apply -f be-pod-demo.yaml
    ```
    
4.  Check whether the resource limits of the BestEffort pod take effect in the cgroup of the node.
    
    1.  Run the following command to query the CPU limit:
        
        ```
        cat /sys/fs/cgroup/cpu,cpuacct/kubepods.slice/kubepods-besteffort.slice/kubepods-besteffort-pod4b6e96c8_042d_471c_b6ef_b7e0686a****.slice/cri-containerd-11111c202adfefdd63d7d002ccde8907d08291e706671438c4ccedfecba5****.scope/cpu.cfs_quota_us
        ```
        
        Expected output:
        
        ```
        # The CPU limit in the cgroup is set to 50 cores. 
        5000000
        ```
        
    2.  Run the following command to query the memory limit:
        
        ```
        cat /sys/fs/cgroup/memory/kubepods.slice/kubepods-besteffort.slice/kubepods-besteffort-pod4b6e96c8_042d_471c_b6ef_b7e0686a****.slice/cri-containerd-11111c202adfefdd63d7d002ccde8907d08291e706671438c4ccedfecba5****.scope/memory.limit_in_bytes
        ```
        
        Expected output:
        
        ```
        # The memory limit in the cgroup is set to 10 GB. 
        10737418240
        ```
        

## **What to do next**

### **View the usage of Batch resources in Managed Service for Prometheus**

ACK clusters are integrated with Managed Service for Prometheus, which provides Prometheus dashboards. You can view the usage of Batch resources in the ACK console.

1.  Log on to the [ACK console](https://cs.console.alibabacloud.com). In the navigation pane on the left, click **Clusters**.
    
2.  On the **Clusters** page, find the cluster you want and click its name. In the left-side pane, choose **Operations** > **Prometheus Monitoring**.
    
3.  Click the **Others** tab, then click the **k8s-reclaimed-resource** tab.
    
    On the **k8s-reclaimed-resource** tab, you can view details such as the mixed revenue of the cluster, and the resource capacity at the cluster, node, and pod levels. For more information, see [Enable the colocation monitoring feature](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/basic-monitoring).
    
    If you created a Prometheus dashboard, you can view the data of colocated resources based on the following metrics:
    
    ```
    # The amount of allocatable batch-cpu resources on the node. 
    koordlet_node_resource_allocatable{resource="kubernetes.io/batch-cpu",node="$node"}
    # The amount of batch-cpu resources that are allocated on the node. 
    koordlet_container_resource_requests{resource="kubernetes.io/batch-cpu",node="$node"}
    # The amount of allocatable batch-memory resources on the node. 
    kube_node_status_allocatable{resource="kubernetes.io/batch-memory",node="$node"}
    # The amount of batch-memory resources that are allocated on the node. 
    koordlet_container_resource_requests{resource="kubernetes.io/batch-memory",node="$node"}
    ```
    

## FAQ

### Is the resource overcommitment feature that is enabled based on the earlier version of the ack-slo-manager protocol supported after I upgrade from ack-slo-manager to ack-koordinator?

The earlier version of the ack-slo-manager protocol includes the following components:

-   The `alibabacloud.com/qosClass` pod annotation.
    
-   The `alibabacloud.com/reclaimed` field that is used to specify the resource requests and limits of pods.
    

ack-koordinator is compatible with the earlier version of the ack-slo-manager protocol. The scheduler of an ACK Pro cluster can calculate the amount of requested resources and the amount of available resources based on the earlier protocol version and the new protocol version. You can seamlessly upgrade from ack-slo-manager to ack-koordinator.

**Note**

ack-koordinator is compatible with protocol versions no later than July 30, 2023. We recommend that you replace the resource parameters used in an earlier protocol version with those used in the latest version.

The following table describes the compatibility between the scheduler of an ACK Pro cluster, ack-koordinator, and different protocols.

**Scheduler version**

ack-koordinator **(ack-slo-manager)**

**alibabacloud.com protocol**

**koordinator.sh protocol**

≥1.18 and < 1.22.15-ack-2.0

≥ 0.3.0

Supported

Not supported

≥ 1.22.15-ack-2.0

≥ 0.8.0

Supported

Supported

### **Why does the memory usage suddenly increase after an application uses Batch resources?**

For applications configured with `kubernetes.io/batch-memory` (Batch memory limit), ack-koordinator specifies the memory limit in the cgroup of the node based on the Batch memory limit after the container is created. Some applications automatically request memory based on the cgroup of the container when the applications are started. If an application is started before the memory limit of the cgroup is configured, the actual memory usage may exceed the Batch memory limit. However, the operating system does not immediately reduce the memory usage of the process. As a result, the memory limit in the cgroup of the container cannot be specified until the actual usage falls below the Batch memory limit.

In this case, we recommend that you modify the application configuration to ensure that the actual memory usage remains below the Batch memory limit. You can also check the memory limit parameters in the application boot script to ensure that the parameters are configured before the application starts. This ensures that the memory usage of the application is properly limited and avoids OOM errors.

Run the following command in the container to query the memory limit:

```
# Unit: byte. 
cat /sys/fs/cgroup/memory/memory.limit_in_bytes 
# The expected output. 
1048576000
```

## References

ack-koordinator provides features that are used to limit and evict reclaimed resources on the node. You can use the features to prevent the negative impact of BestEffort pods on your business. For more information, see [Enable CPU Suppress](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/elastic-resource-limit#task-2088911), [Enable CPU QoS for containers](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/cpu-qos), [Enable container CPU QoS](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/memory-qos-for-containers#task-2192401), and [Enable resource isolation based on the L3 cache and MBA](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/resource-isolation-based-on-the-l3-cache-and-mba#task-2093499).
