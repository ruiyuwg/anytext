In some cases, you may need to deploy both latency-sensitive (LS) and best-effort (BE) workloads on the same node in a Kubernetes cluster. Although Kubernetes uses CPU requests and CPU limits to control the amount of CPU resources that pods can use, CPU contention still exists among applications with different priorities, which may downgrade the performance of applications, especially applications with high priorities. To ensure CPU supply for LS applications, we recommend that you enable the CPU QoS feature.

**Note**

To help you better understand and use the CPU QoS feature, we recommend that you first read the following topics in the Kubernetes official documentation to familiarize yourself with the relevant terms: [Pod Quality of Service Classes](https://kubernetes.io/docs/concepts/workloads/pods/pod-qos/) and [Assign Memory Resources to Containers and Pods](https://kubernetes.io/docs/tasks/configure-pod-container/assign-memory-resource/). We also recommend that you read the [Group identity feature](/help/en/alinux/user-guide/group-identity-feature) topic to learn about the group identity feature.

## Why CPU QoS?

To fully utilize the resources on a node in colocation scenarios, the system deploys LS applications and BE applications on the same node. LS applications have higher QoS classes than BE applications. Although Kubernetes uses CPU requests and CPU limits to control the amount of CPU resources that pods can use, CPU contention still exists among containers. For example, BE pods and LS pods can share CPU cores or vCores. When the loads of the BE pods increase, the performance of the LS pods is compromised. As a result, the response latency of the application that uses the LS pods increases.

To reserve CPU resources for LS pods and prevent BE pods from competing for resources, you can use the CPU QoS feature provided by the ack-koordinator component. The CPU QoS feature is based on Alibaba Cloud Linux. The ack-koordinator component allows you to use the [group identity](/help/en/alinux/user-guide/group-identity-feature#task-2129392) feature to configure Linux scheduling priorities for pods. To avoid resource contention in an environment where LS pods and BE pods are colocated, you can set the priority of LS pods to high and the priority of BE pods to low. This way, the LS pods are prioritized to use the limited CPU resources. This ensures the service quality of the LS workloads.

The CPU QoS feature provides the following benefits:

-   The wake-up latency of tasks for LS workloads is reduced, which improves the response speed and performance of the workloads.
    
-   The processes of LS workloads are not preempted when you wake up tasks for BE workloads.
    
-   In scenarios where simultaneous multithreading (SMT) is used, tasks for BE workloads and tasks for LS workloads are not processed in parallel on the same CPU core. This prevents BE workloads from competing for resources against LS workloads and ensures CPU supply for LS workloads.
    

## Prerequisites

-   A Container Service for Kubernetes (ACK) cluster that meets the following requirements is created:
    
    -   Kubernetes version: 1.18 or later. For more information about how to update an ACK cluster, see [Manually update ACK clusters](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/update-the-kubernetes-version-of-an-ack-cluster).
        
    -   Operating system: Alibaba Cloud Linux. The group identity feature relies on Alibaba Cloud Linux. For more information about the required kernel versions, see [Group identity feature](/help/en/alinux/user-guide/group-identity-feature).
        
        **Note**
        
        If you use other operating systems, you can use the CPU Suppress feature to limit the CPU usage of BE pods. For more information, see [Enable CPU Suppress](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/elastic-resource-limit#task-2088911).
        
-   ack-koordinator 0.8.0 is installed in the cluster. For more information, see [ack-koordinator (FKA ack-slo-manager)](/help/en/ack/product-overview/ack-koordinator-fka-ack-slo-manager#task-2172306).
    

## Billing

No fee is charged when you install or use the ack-koordinator component. However, fees may be charged in the following scenarios:

-   ack-koordinator is a non-managed component that occupies worker node resources after it is installed. You can specify the amount of resources requested by each module when you install the component.
    
-   By default, ack-koordinator exposes the monitoring metrics of features such as resource profiling and fine-grained scheduling as Prometheus metrics. If you **enable Prometheus metrics for ack-koordinator** and use Managed Service for Prometheus, these metrics are considered [custom metrics](/help/en/arms/prometheus-monitoring/basic-metrics/) and fees are charged for these metrics. The fee depends on factors such as the size of your cluster and the number of applications. Before you enable Prometheus metrics, we recommend that you read the [Billing](/help/en/arms/prometheus-monitoring/product-overview/billing-description/) topic of Managed Service for Prometheus to learn about the free quota and billing rules of custom metrics. For more information about how to monitor and manage resource usage, see [Query the amount of observable data and bills](/help/en/arms/prometheus-monitoring/product-overview/billing-and-usage-query).
    

## Procedure

You can use a ConfigMap to enable CPU QoS in a cluster and configure CPU [group identity](/help/en/alinux/user-guide/group-identity-feature#task-2129392) priorities for LS and BE pods. You can use the group identity feature to specify an identifier for each CPU cgroup. When the kernel schedules the tasks for which identities are configured, the kernel processes the tasks based on the priorities of the tasks.

After the configuration is complete, you can specify the CPU QoS class of a pod by adding the `koordinator.sh/qosClass` label to the YAML file of the pod. If you do not add the `koordinator.sh/qosClass` label to the pod, ack-koordinator selects a Kubernetes-native QoS class. `BE` indicates the BestEffort QoS class and `LS` indicates the Burstable or Guaranteed QoS class.

1.  Create a file named configmap.yaml and copy the following content to the file. The file is used to create a ConfigMap that allows you to enable the CPU QoS feature.
    
    ```
    apiVersion: v1
    kind: ConfigMap
    metadata:
      name: ack-slo-config
      namespace: kube-system
    data:
      # Enable the CPU QoS feature. 
      resource-qos-config: |
        {
          "clusterStrategy": {
            "lsClass": {
              "cpuQOS": {
                "enable": true,
                "groupIdentity": 2
              }
            },
            "beClass": {
              "cpuQOS": {
                "enable": true,
                "groupIdentity": -1
              }
            }
          }
        }
    ```
    
    Specify the `lsClass` and `beClass` parameters to assign the LS and BE classes to different pods. The `cpuQOS` field is used to configure the CPU QoS feature. The following table describes the key parameters.
    
    **Parameter**
    
    **Type**
    
    **Value range**
    
    **Description**
    
    `enable`
    
    Boolean
    
    -   true
        
    -   false
        
    
    -   `true`: enables the CPU QoS feature for all containers in the cluster.
        
    -   `false`: disables the CPU QoS feature for all containers in the cluster.
        
    
    `groupIdentity`
    
    Int
    
    \[-1, 2\]
    
    The priority of the CPU group identity. A greater `group identity` value indicates a higher priority in CPU scheduling. For more information, see [Group identity feature](/help/en/alinux/user-guide/group-identity-feature#task-2129392).
    
    The default value for an LS pod is `2` and the default value for a BE pod is `-1`. A value of `0` disables the group identity feature.
    
2.  Check whether the ConfigMap named `ack-slo-config` exists in the kube-system namespace.
    
    -   If the ack-slo-config ConfigMap exists, we recommend that you run the kubectl patch command to update the ConfigMap. This avoids changing other settings in the ConfigMap.
        
        ```
        kubectl patch cm -n kube-system ack-slo-config --patch "$(cat configmap.yaml)"
        ```
        
    -   If the ack-slo-config ConfigMap does not exist, run the following command to create a ConfigMap:
        
        ```
        kubectl apply -f configmap.yaml
        ```
        
3.  Create a file named ls-pod-demo.yaml and copy the following content to the file. The YAML file assigns the LS class to the pod. Then, deploy the YAML file in the cluster.
    
    **Note**
    
    To apply configurations to a workload, such as a deployment, set the appropriate annotations for the pod in the `template.metadata` field.
    
    ```
    apiVersion: v1
    kind: Pod
    metadata:
      name: ls-pod-demo
      labels:
        koordinator.sh/qosClass: 'LS' # Set the QoS class of the pod to LS. 
    spec:
      containers:
      - command:
        - httpd
        - -D
        - FOREGROUND
        image: registry.cn-zhangjiakou.aliyuncs.com/acs/apache-2-4-51-for-slo-test:v0.1
        imagePullPolicy: Always
        name: apache
        resources:
          limits:
            cpu: "4"
            memory: 10Gi
          requests:
            cpu: "4"
            memory: 10Gi
      restartPolicy: Never
      schedulerName: default-scheduler
    ```
    
    ```
    kubectl apply -f ls-pod-demo.yaml
    ```
    
4.  Run the following command to check whether the CPU group identity of the LS pod in the control group (cgroup) of the node takes effect:
    
    ```
    cat /sys/fs/cgroup/cpu/kubepods.slice/kubepods-pod1c20f2ad****.slice/cpu.bvt_warp_ns
    ```
    
    Expected output:
    
    ```
    # The group identity of the LS pod is 2 (high priority). 
    2
    ```
    
5.  Create a file named ls-pod-demo.yaml and copy the following content to the file. The YAML file assigns the BE class to the pod. Then, deploy the YAML file in the cluster.
    
    ```
    apiVersion: v1
    kind: Pod
    metadata:
      name: be-pod-demo
      labels:
        koordinator.sh/qosClass: 'BE' # Set the QoS class of the pod to BE. 
    spec:
      containers:
        - args:
            - '-c'
            - '1'
            - '--vm'
            - '1'
          command:
            - stress
          image: polinux/stress
          imagePullPolicy: Always
          name: stress
      restartPolicy: Always
      schedulerName: default-scheduler
    ```
    
    ```
    kubectl apply -f be-pod-demo.yaml
    ```
    
6.  Run the following command to check whether the CPU group identity of the BE pod in the cgroup of the node takes effect:
    
    ```
    cat /sys/fs/cgroup/cpu/kubepods.slice/kubepods-besteffort.slice/kubepods-besteffort-pod4b6e96c8****.slice/cpu.bvt_warp_ns
    ```
    
    Expected output:
    
    ```
    # The group identity of the BE pod is -1 (low priority). 
    -1
    ```
    
    The output shows that the group identity of the LS pod has a high priority and the group identity of the BE pod has a low priority. CPU resources are preferably scheduled to the LS pod to ensure service quality.
    

## FAQ

### Is the CPU QoS feature that is enabled based on the earlier version of the ack-slo-manager protocol still supported after I upgrade from ack-slo-manager to ack-koordinator?

In an earlier version (≤ 0.8.0) of the ack-slo-manager protocol, the `alibabacloud.com/qosClass` pod annotation is used to enable CPU QoS.

ack-koordinator is compatible with earlier versions of the ack-slo-manager protocol. You can seamlessly upgrade from ack-slo-manager to ack-koordinator and gradually change the protocol used by the pod to koordinator.sh. ack-koordinator is compatible with the earlier protocol versions no later than July 30, 2023. We recommend that you upgrade the resource parameters in an earlier protocol version to the latest version.

The following table describes the compatibility between different versions of ack-koordinator and the CPU QoS feature.

**ack-koordinator version**

**alibabacloud.com protocol**

**koordinator.sh protocol**

≥ 0.5.2 and < 0.8.0

✓

×

≥ 0.8.0

✓

✓

## References

-   After you enable the memory QoS feature, you can assign different QoS classes to different containers based on their priorities. This allows you to prioritize the memory requests of LS applications while ensuring fair memory allocation. For more information, see [Enable memory QoS](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/memory-qos-for-containers#task-2192401).
    
-   You can prioritize the memory requests of LS applications by isolating resources based on the L3 cache (last level cache) and the Memory Bandwidth Allocation (MBA) feature. For more information, [Enable resource isolation based on the L3 cache and MBA](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/resource-isolation-based-on-the-l3-cache-and-mba).
