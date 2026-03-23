In dynamic resource overcommitment scenarios, you can overcommit the unused resources of high-priority Guaranteed or Burstable applications to low-priority BestEffort tasks. To ensure that the CPU usage of BestEffort (BE) pods remains within a reasonable range, Container Service for Kubernetes (ACK) provides the CPU Suppress feature, which allows you to prioritize the stable operation of latency-sensitive (LS) pods on the node.

**Note**

-   To help you better understand and use this feature, we recommend that you first read the following topics in the official Kubernetes documentation: [Pod QoS classes](https://kubernetes.io/docs/concepts/workloads/pods/pod-qos/) and [Assign memory resources to containers and pods](https://kubernetes.io/docs/tasks/configure-pod-container/assign-memory-resource/).
    
-   This feature must be used together with the dynamic resource overcommitment feature. For more information, see [Enable dynamic resource overcommitment](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/dynamic-resource-overcommitment).
    

## Why enable CPU Suppress

To enhance cluster resource usage, the [dynamic resource overcommitment](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/dynamic-resource-overcommitment#task-2190961) model allows for reserving a resource buffer for high-priority LS tasks to manage load fluctuations in upstream and downstream links, while allocating overcommitted resources to low-priority BE tasks. To ensure sufficient CPU resources for LS pods on a node, you can use ack-koordinator to limit the CPU usage of the BE pods on the node. The CPU Suppress feature can maintain the resource utilization of a node below the specified threshold and limit the amount of CPU resources that can be used by BE pods. This ensures the stability of the containers on the node. The CPU Suppress feature can limit the amount of CPU resources that are used by BE pods when the overall resource usage of the node is below the threshold. This ensures that the containers on the node have sufficient resources to run stably.

The following list describes the terms used in the figure:

-   CPU Threshold: the CPU usage threshold of a node.
    
-   Pod (LS).Usage: the CPU usage of LS pods.
    
-   CPU Restriction for BE: the CPU usage of BE pods.
    

The amount of CPU resources that can be used by BE pods is adjusted based on the fluctuation of the LS pods' CPU usage. We recommend that you use the same value for CPU Threshold and the reserved CPU watermark in the dynamic resource overcommitment model. This ensures a consistent level of CPU resource utilization.

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/0534741371/CAEQLxiBgIDGpNaAmRkiIDg0Y2FkZGQ4NDI2YzQ3ZDY4MmExMjIzZGQwYzZmNTkx3963382_20230830144006.372.svg)

## Prerequisites

-   An ACK Pro cluster is created. For more information, see [Create an ACK Pro cluster](/help/en/doc-detail/176833.html#task-skz-qwk-qfb).
    
-   ack-koordinator 0.4.0 or later is installed. For more information about how to install ack-koordinator, see [ack-koordinator (ack-slo-manager)](/help/en/ack/product-overview/ack-koordinator-fka-ack-slo-manager#task-2172306).
    

## Billing

No fee is charged when you install or use the ack-koordinator component. However, fees may be charged in the following scenarios:

-   ack-koordinator is a non-managed component that occupies worker node resources after it is installed. You can specify the amount of resources requested by each module when you install the component.
    
-   By default, ack-koordinator exposes the monitoring metrics of features such as resource profiling and fine-grained scheduling as Prometheus metrics. If you **enable Prometheus metrics for ack-koordinator** and use Managed Service for Prometheus, these metrics are considered [custom metrics](/help/en/arms/prometheus-monitoring/basic-metrics/) and fees are charged for these metrics. The fee depends on factors such as the size of your cluster and the number of applications. Before you enable Prometheus metrics, we recommend that you read the [Billing](/help/en/arms/prometheus-monitoring/product-overview/billing-description/) topic of Managed Service for Prometheus to learn about the free quota and billing rules of custom metrics. For more information about how to monitor and manage resource usage, see [Query the amount of observable data and bills](/help/en/arms/prometheus-monitoring/product-overview/billing-and-usage-query).
    

## Procedure

You can enable the CPU Suppress feature at the cluster level through a ConfigMap. Additionally, you can configure related parameters in the ConfigMap, such as the CPU utilization threshold of the node (`cpuSuppressThresholdPercent`) with CPU Suppress enabled, to achieve fine-grained resource management.

1.  Create a file named configmap.yaml based on the following ConfigMap content:
    
    ```
    apiVersion: v1
    kind: ConfigMap
    metadata:
      name: ack-slo-config
      namespace: kube-system
    data:
      # Enable CPU Suppress.
      resource-threshold-config: |
        {
          "clusterStrategy": {
            "enable": true
          }
        }
    ```
    
2.  Check whether the `ack-slo-config` ConfigMap exists in the `kube-system` namespace.
    
    -   If the `ack-slo-config` ConfigMap exists, we recommend that you use the PATCH method to update the ConfigMap. This method does not change other settings in the ConfigMap.
        
        ```
        kubectl patch cm -n kube-system ack-slo-config --patch "$(cat configmap.yaml)"
        ```
        
    -   If the `ack-slo-config` ConfigMap does not exist, run the following command to create a ConfigMap named ack-slo-config:
        
        ```
        kubectl apply -f configmap.yaml
        ```
        
3.  Run the following command to query the CPU cores that are allocated to the BE pods on the node:
    
    ```
    cat /sys/fs/cgroup/cpuset/kubepods.slice/kubepods-besteffort.slice/cpuset.cpus
    ```
    
    Expected output:
    
    ```
    10-25,35-51,62-77,87-103
    ```
    
    The expected output shows that the following CPU cores are allocated to the BE pods on the node: `10-25,35-51,62-77,87-103`. This indicates that the available CPU resources for BE pods are restricted after enabling CPU Suppress, based on current resource usage.
    
4.  **Optional:** Configure advanced parameters based on the following ConfigMap content.
    
    CPU Suppress allows you to further configure the CPU utilization threshold.
    
    ```
    apiVersion: v1
    kind: ConfigMap
    metadata:
      name: ack-slo-config
      namespace: kube-system
    data:
      resource-threshold-config: |
        {
          "clusterStrategy": {
            "enable": true,
            "cpuSuppressThresholdPercent": 65
          }
        }
    ```
    
    The following table describes the key parameters:
    
    **Parameter**
    
    **Type**
    
    **Value range**
    
    **Description**
    
    `enable`
    
    Boolean
    
    -   `true`
        
    -   `false`
        
    
    -   `true`: enables CPU Suppress.
        
    -   `false`: disables CPU Suppress.
        
    
    `cpuSuppressThresholdPercent`
    
    Integer
    
    \[0, 100\]
    
    The CPU utilization threshold of the node. Default value: `65`. Unit: %.
    

## References

ack-koordinator offers resource restriction and eviction capabilities for overcommitted resources on the node, including features like [enabling container CPU QoS](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/cpu-qos), [enabling container memory QoS](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/memory-qos-for-containers#task-2192401), and [enabling container L3 cache and memory bandwidth isolation](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/resource-isolation-based-on-the-l3-cache-and-mba#task-2093499). These capabilities effectively mitigate interference issues that may arise from low-priority BE pods.
