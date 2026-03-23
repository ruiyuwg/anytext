Kubernetes allows you to specify the resource requests and limits of containers. The memory available for an application depends on various factors, such as page cache reclamation and excessive memory consumption by other applications. In extreme cases, out of memory (OOM) errors occur due to insufficient memory on the node, downgrading the performance of applications on the node. The ack-koordinator component provides the memory quality of service (QoS) feature for containers. You can use the component to assign different QoS classes to different containers based on your business requirements. This allows you to prioritize the memory requests of applications with high QoS classes while ensuring fair memory allocation.

**Note**

To help you better understand and use the memory QoS feature, we recommend that you first read the following topics in the Kubernetes official documentation: [Pod Quality of Service Classes](https://kubernetes.io/docs/concepts/workloads/pods/pod-qos/) and [Assign Memory Resources to Containers and Pods](https://kubernetes.io/docs/tasks/configure-pod-container/assign-memory-resource/).

## Feature introduction

### Why memory QoS?

To ensure that pods can efficiently and securely run in Kubernetes clusters, Kubernetes allows you to specify the resource requests and limits of pods. The following figure shows the memory request and limit of a pod.

-   Memory request (requests.memory): The memory request of a pod takes effect during the scheduling process of the pod. The system schedules the pod to a node that meets the memory request of the pod.
    
-   Memory limit (requests.memory): The memory limit of a pod limits the amount of memory that the pod can use on the node. The memory.limit\_in\_bytes parameter in the cgroup file specifies the upper limit of memory that can be used by the pod.
    

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/3133761471/CAEQLxiBgMD3jNy7mRkiIDY1ZTk0OWI2ZjE0NjQzY2VhZWMyMmE4NGEwM2NlY2Jm4612392_20240823105141.839.svg)

The memory usage of a container depends on the memory limit of the container and the memory capacity of the node:

-   Container memory limit: If the amount of memory that a container uses, including the page cache, is about to reach the memory limit of the container, memory control group (memcg)-level direct memory reclamation is triggered for the pod. As a result, the processes in the pod are blocked. In this case, if the pod applies for memory at a faster rate than the memory is reclaimed, an OOM error occurs and the pod is terminated.
    
-   Node memory capacity: The memory limit of a container can be greater than the memory request of the container. When multiple containers are deployed on a node, the sum of the memory limits of the containers may exceed the memory capacity of the node. If the overall memory usage on a node is excessively high, the OS kernel may reclaim memory from containers. As a result, the performance of your application is downgraded. In extreme cases, OOM errors occur due to insufficient memory on the node, and your application is terminated.
    

### **Feature description**

To improve application performance and node stability, ack-koordinator provides the memory QoS feature for containers that run on different Alibaba Cloud Linux kernel versions. ack-koordinator automatically configures the memcg based on the configuration of the container to enable other features such as [Memcg QoS](/help/en/alinux/user-guide/memcg-qos-function-ensures-system-stability-and-response-speed#concept-2482889), [Memcg backend asynchronous reclamation](/help/en/alinux/user-guide/memcg-backend-asynchronous-reclaim#task-2487938), and [Memcg global minimum watermark rating](/help/en/alinux/user-guide/memcg-global-minimum-watermark-rating#task-2492619). This optimizes the performance of memory-sensitive applications while ensuring fair memory scheduling among containers.

#### **Memory reclamation and memory lock policies**

The memory QoS feature requires you to configure multiple cgroup parameters.

-   memory.limit\_in\_bytes: the upper limit of memory that can be used by a pod.
    
-   memory.high: the memory throttling threshold. The OS kernel reclaims memory to prevent the memory usage from exceeding this value.
    
-   memory.wmark\_high: the memory reclamation threshold (`wmarkRatio`). Asynchronous reclamation is performed on reclaimable memory to ensure that memory usage remains below the threshold.
    
-   memory.min: the memory lock threshold. You can configure the absolute lock threshold (`minLimitPercent`) and the relative lock threshold (`lowLimitPercent`).
    

For more information about the preceding parameters, see [Advanced parameters](#e4c6054835jcw).

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/3133761471/CAEQLxiBgIC_jdy7mRkiIDgyMGUxZTViNDcyMDQxZGViMWY2MWU4MTdkZTIwM2Mz4612392_20240823111451.208.svg)

The memory QoS feature provides the following benefits:

-   When the memory used by a pod is about to reach the memory limit of the pod, the memcg performs asynchronous reclamation for a specific amount of memory. This prevents the reclamation of all the memory used by the pod and therefore minimizes the adverse impact on the application performance caused by direct memory reclamation.
    
-   Memory reclamation is performed more fairly among pods. When the available memory on a node becomes insufficient, memory reclamation is first performed on pods that use more memory than their memory requests. This ensures sufficient memory on the node when a pod applies for a large amount of memory.
    
-   When the system reclaims memory, the system prioritizes the memory requests of latency-sensitive (LS) pods, including Guaranteed pods and Burstable pods.
    

#### **Flexible configuration and multi-environmental compatibility**

The [memory QoS](https://kubernetes.io/docs/concepts/workloads/pods/pod-qos/#memory-qos-with-cgroup-v2) feature is supported in Kubernetes 1.22 and supports only cgroup v2. To enable memory QoS, you must manually configure the kubelet. Memory QoS takes effect on all pods and nodes in the cluster and therefore does not support fine-grained configurations. Compared with the memory QoS feature provided by open source Kubernetes, the memory QoS feature provided by ack-koordinator is optimized in the following perspectives:

-   Provides advanced features such as memcg backend asynchronous reclamation and minimum watermark rating based on Alibaba Cloud Linux and is compatible with the cgroup v1 and cgroup v2 interfaces. For more information about the OS kernel features required by the memory QoS feature of Container Service for Kubernetes (ACK), see [Overview of kernel features and interfaces](/help/en/alinux/user-guide/overview-of-kernel-features-and-interfaces#task-1919295).
    
-   Allows you to use annotations or ConfigMaps to easily and flexibly configure fine-grained memory QoS for containers in a specific pod, namespace, or cluster.
    

## Prerequisites

-   An ACK cluster that meets the following requirements is created:
    
    -   Kubernetes version: 1.18 or later. For more information about how to update an ACK cluster, see [Manually update ACK clusters](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/update-the-kubernetes-version-of-an-ack-cluster).
        
    -   OS: Alibaba Cloud Linux. Some parameters required by the memory QoS feature rely on Alibaba Cloud Linux. For more information, see [Advanced parameters](#e4c6054835jcw).
        
-   ack-koordinator 0.8.0 or later is installed. For more information, see [ack-koordinator (FAK ack-slo-manager)](/help/en/ack/product-overview/ack-koordinator-fka-ack-slo-manager#task-2172306).
    

## Billing

No fee is charged when you install or use the ack-koordinator component. However, fees may be charged in the following scenarios:

-   ack-koordinator is a non-managed component that occupies worker node resources after it is installed. You can specify the amount of resources requested by each module when you install the component.
    
-   By default, ack-koordinator exposes the monitoring metrics of features such as resource profiling and fine-grained scheduling as Prometheus metrics. If you **enable Prometheus metrics for ack-koordinator** and use Managed Service for Prometheus, these metrics are considered [custom metrics](/help/en/arms/prometheus-monitoring/basic-metrics/) and fees are charged for these metrics. The fee depends on factors such as the size of your cluster and the number of applications. Before you enable Prometheus metrics, we recommend that you read the [Billing](/help/en/arms/prometheus-monitoring/product-overview/billing-description/) topic of Managed Service for Prometheus to learn about the free quota and billing rules of custom metrics. For more information about how to monitor and manage resource usage, see [Query the amount of observable data and bills](/help/en/arms/prometheus-monitoring/product-overview/billing-and-usage-query).
    

## Usage notes

When you enable the memory QoS feature for pods, the cgroup parameters are automatically configured based on the specified ratios and pod parameters. This section describes how to enable memory QoS for containers in a specific pod, namespace, or cluster.

## Use annotations to enable memory QoS for containers in a specific pod

You can use the following pod annotation to enable memory QoS for containers in a specific pod.

```
annotations:
  # To enable memory QoS for the containers in a pod, set the value to auto. 
  koordinator.sh/memoryQOS: '{"policy": "auto"}'
  # To disable memory QoS for the containers in a pod, set the value to none. 
  koordinator.sh/memoryQOS: '{"policy": "none"}'
```

## Use ConfigMaps to enable memory QoS for containers in a specific cluster

You can configure a ConfigMap to enable memory QoS for all containers in a specific cluster. You can use the `koordinator.sh/qosClass` pod label to centrally manage memory QoS parameters based on application characteristics. If you set the value of the `koordinator.sh/qosClass` label to `LS` or `BE`, no annotation is required for enabling memory QoS.

1.  The following sample ConfigMap provides an example on how to enable memory QoS for containers in a specific cluster:
    
    ```
    apiVersion: v1
    data:
      resource-qos-config: |-
        {
          "clusterStrategy": {
            "lsClass": {
               "memoryQOS": {
                 "enable": true
               }
             },
            "beClass": {
               "memoryQOS": {
                 "enable": true
               }
             }
          }
        }
    kind: ConfigMap
    metadata:
      name: ack-slo-config
      namespace: kube-system
    ```
    
2.  Use the pod YAML template to set the QoS class to `LS` or `BE`.
    
    **Note**
    
    If the pod does not have the `koordinator.sh/qosClass` label, ack-koordinator configures the memory QoS parameters based on the original QoS class of the pod. A `Guaranteed` pod is assigned the default memory QoS settings. A Burstable pod is assigned the default memory QoS settings for the `LS` QoS class. A BestEffort pod is assigned the default memory QoS settings for the `BE` QoS class.
    
    ```
    apiVersion: v1
    kind: Pod
    metadata:
      name: pod-demo
      labels:
        koordinator.sh/qosClass: 'LS' # Set the QoS class of the pod to LS.
    ```
    
3.  Check whether the `ack-slo-config` ConfigMap exists in the `kube-system` namespace.
    
    -   If the ack-slo-config ConfigMap exists, we recommend that you run the kubectl patch command to update the ConfigMap. This avoids changing other settings in the ConfigMap.
        
        ```
        kubectl patch cm -n kube-system ack-slo-config --patch "$(cat configmap.yaml)"
        ```
        
    -   If the ack-slo-config ConfigMap does not exist, run the following command to create a ConfigMap:
        
        ```
        kubectl apply -f configmap.yaml
        ```
        
4.  Optional. Configure [advanced parameters](#e4c6054835jcw).
    

## Use ConfigMaps to enable memory QoS for containers in a specific namespace

If you want to enable or disable memory QoS for pods of the `LS` and `BE` QoS classes in a specific namespace, specify the namespaces in the ConfigMap.

1.  The following sample ConfigMap provides an example on how to enable memory QoS for containers in a specific cluster:
    
    ```
    apiVersion: v1
    data:
      resource-qos-config: |-
        {
          "clusterStrategy": {
            "lsClass": {
               "memoryQOS": {
                 "enable": true
               }
             },
            "beClass": {
               "memoryQOS": {
                 "enable": true
               }
             }
          }
        }
    kind: ConfigMap
    metadata:
      name: ack-slo-config
      namespace: kube-system
    ```
    
2.  Create a file named ack-slo-pod-config.yaml and copy the following content to the file.
    
    The following code block is used to enable or disable memory QoS for containers in the kube-system namespace:
    
    ```
    apiVersion: v1
    kind: ConfigMap
    metadata:
      name: ack-slo-pod-config
      namespace: kube-system # You need to manually create the namespace during the first time. 
    data:
      # Enable or disable memory QoS for containers in a specific namespace. 
      memory-qos: |
        {
          "enabledNamespaces": ["allow-ns"],
          "disabledNamespaces": ["block-ns"]
        }
    ```
    
3.  Run the following command to update the ConfigMap:
    
    ```
    kubectl patch cm -n kube-system ack-slo-pod-config --patch "$(cat ack-slo-pod-config.yaml)"
    ```
    
4.  Optional. Configure [advanced parameters](#e4c6054835jcw).
    

## Example

In this section, a Redis pod is used as an example. The following conditions are used to compare the latency and throughput of the pod before memory QoS is enabled and after memory QoS is enabled in memory overcommitment scenarios:

-   An ACK Pro cluster is used.
    
-   The cluster contains 2 nodes, each of which has 8 vCPUs and 32 GB of memory. One node is used to perform stress tests. The other node runs the workload and serves as the tested machine.
    

### **Procedure**

1.  Create a file named redis-demo.yaml and copy the following content to the file:
    
    ```
    apiVersion: v1
    kind: ConfigMap
    metadata:
      name: redis-demo-config
    data:
      redis-config: |
        appendonly yes
        appendfsync no
    ---
    apiVersion: v1
    kind: Pod
    metadata:
      name: redis-demo
      labels:
        koordinator.sh/qosClass: 'LS' # Set the QoS class of the Redis pod to LS. 
      annotations:
        koordinator.sh/memoryQOS: '{"policy": "auto"}' # Add this annotation to enable memory QoS. 
    spec:
      containers:
      - name: redis
        image: redis:5.0.4
        command:
          - redis-server
          - "/redis-master/redis.conf"
        env:
        - name: MASTER
          value: "true"
        ports:
        - containerPort: 6379
        resources:
          limits:
            cpu: "2"
            memory: "6Gi"
          requests:
            cpu: "2"
            memory: "2Gi"
        volumeMounts:
        - mountPath: /redis-master-data
          name: data
        - mountPath: /redis-master
          name: config
      volumes:
        - name: data
          emptyDir: {}
        - name: config
          configMap:
            name: redis-demo-config
            items:
            - key: redis-config
              path: redis.conf
      nodeName: # Set nodeName to the name of the tested node. 
    ---
    apiVersion: v1
    kind: Service
    metadata:
      name: redis-demo
    spec:
      ports:
      - name: redis-port
        port: 6379
        protocol: TCP
        targetPort: 6379
      selector:
        name: redis-demo
      type: ClusterIP
    ```
    
2.  Run the following command to deploy Redis Server as the test application.
    
    You can access the redis-demo Service from within the cluster.
    
    ```
    kubectl apply -f redis-demo.yaml
    ```
    
3.  Simulate memory overcommitment.
    
    Use the Stress tool to increase the load on memory and trigger memory reclamation. The sum of the memory limits of all pods on the node exceeds the physical memory of the node.
    
    1.  Create a file named stress-demo.yaml and copy the following content to the file:
        
        ```
        apiVersion: v1
        kind: Pod
        metadata:
          name: stress-demo
          labels:
            koordinator.sh/qosClass: 'BE' # Set the QoS class of the Stress pod to BE. 
          annotations:
            koordinator.sh/memoryQOS: '{"policy": "auto"}' # Add this annotation to enable memory QoS. 
        spec:
          containers:
            - args:
                - '--vm'
                - '2'
                - '--vm-bytes'
                - 11G
                - '-c'
                - '2'
                - '--vm-hang'
                - '2'
              command:
                - stress
              image: polinux/stress
              imagePullPolicy: Always
              name: stress
          restartPolicy: Always
          nodeName: # Set nodeName to the name of the tested node, which is the node on which the Redis pod is deployed.
        ```
        
    2.  Run the following command to deploy stress-demo:
        
        ```
        kubectl apply -f stress-demo.yaml
        ```
        
4.  Run the following command to query the global minimum watermark of the node:
    
    **Note**
    
    In memory overcommitment scenarios, if the global minimum watermark of the node is set to a low value, OOM killers may be triggered for all pods on the node even before memory reclamation is performed. Therefore, we recommend that you set the global minimum watermark to a high value. In this example, the global minimum watermark is set to 4,000,000 KB for the tested node that has 32 GiB of memory.
    
    ```
    cat /proc/sys/vm/min_free_kbytes
    ```
    
    Expected output:
    
    ```
    4000000
    ```
    
5.  Use the following YAML template to deploy the memtier-benchmark tool to send requests to the tested node:
    
    ```
    apiVersion: v1
    kind: Pod
    metadata:
      labels:
        name: memtier-demo
      name: memtier-demo
    spec:
      containers:
        - command:
            - memtier_benchmark
            - '-s'
            - 'redis-demo'
            - '--data-size'
            - '200000'
            - "--ratio"
            - "1:4"
          image: 'redislabs/memtier_benchmark:1.3.0'
          name: memtier
      restartPolicy: Never
      nodeName: # Set nodeName to the name of the node that is used to send requests.
    ```
    
6.  Run the following command to query the test results from memtier-benchmark:
    
    ```
    kubectl logs -f memtier-demo
    ```
    
7.  Use the following YAML template to disable memory QoS for the Redis pod and Stress pod. Then, perform stress tests again and compare the results.
    
    ```
    apiVersion: v1
    kind: Pod
    metadata:
      name: redis-demo
      labels:
        koordinator.sh/qosClass: 'LS'
      annotations:
        koordinator.sh/memoryQOS: '{"policy": "none"}' # Disable memory QoS. 
    spec:
      ...
    
    ---
    apiVersion: v1
    kind: Pod
    metadata:
      name: stress-demo
      labels:
        koordinator.sh/qosClass: 'BE'
      annotations:
        koordinator.sh/memoryQOS: '{"policy": "none"}' # Disable memory QoS. 
                            
    ```
    

### **Analyze the result**

The following table describes the stress test results when memory QoS is enabled and disabled.

-   Disabled: The memory QoS policy of the pod is set to `none`.
    
-   Enabled: The memory QoS policy of the pod is set to `auto` and the recommended memory QoS settings are used.
    

**Important**

The data in the following table is for reference only. The actual data generated in your test environment shall prevail.

**Metrics**

**Disabled**

**Enabled**

`Latency-avg`

51.32 ms

47.25 ms

`Throughput-avg`

149.0 MB/s

161.9 MB/s

The table shows that in memory overcommitment scenarios, enabling the memory QoS feature reduces Redis application latency by 7.9% and increases throughput by 8.7%, with all metrics showing significant improvements.

## **Advanced parameters**

You can enable memory QoS for containers in a specific pod or cluster. If both pod annotations and ConfigMaps are used to configure memory QoS parameters, the pod annotations take precedence. If no pod annotation is added to configure memory QoS, ack-koordinator retrieves memory QoS parameters from ConfigMaps in a specific namespace. If no configuration exists in the ConfigMaps in the namespace, ack-koordinator retrieves memory QoS parameters from ConfigMaps in a specified cluster.

**Note**

The **Annotation** and **ConfigMap** columns indicate whether you can configure the parameter by using annotations and the ConfigMap. ![对](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/7432856561/p442272.png) indicates supported and ![错](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/1579979171/p442273.png) indicates not supported.

**Parameter**

**Type**

**Value range**

**Description**

**Pod Annotation**

**ConfigMap**

`enable`

Boolean

-   `true`
    
-   `false`
    

-   `true`: enables memory QoS for all containers in a cluster. The recommended memcg settings for the QoS class of the containers are used.
    
-   `false`: disables memory QoS for all containers in a cluster. The memcg settings are restored to the original settings for the QoS class of the containers.
    

![错](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/1579979171/p442273.png)

![对](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/7432856561/p442272.png)

`policy`

String

-   `auto`
    
-   `default`
    
-   `none`
    

-   `auto`: enables memory QoS for the containers in the pod and uses the recommended settings. The recommended settings take precedence over the settings that are specified in the ack-slo-pod-config ConfigMap.
    
-   `default`: specifies that the pod inherits the settings that are specified in the ack-slo-pod-config ConfigMap.
    
-   `none`: disables memory QoS for the pod. The relevant memcg settings are restored to the original settings. The original settings take precedence over the settings that are specified in the ack-slo-pod-config ConfigMap.
    

![对](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/7432856561/p442272.png)

![错](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/1579979171/p442273.png)

`minLimitPercent`

Int

0~100

Unit: %. Default value: `0`. The default value indicates that this parameter is disabled.

This parameter specifies the unreclaimable proportion of the memory request of a pod. This parameter is suitable for scenarios where applications are sensitive to the page cache. You can use this parameter to cache files to optimize read and write performance. For more information, see the Alibaba Cloud Linux topic [Memcg QoS feature of the cgroup v1 interface](/help/en/alinux/user-guide/memcg-qos-function-ensures-system-stability-and-response-speed#concept-2482889).

The amount of unreclaimable memory is calculated based on the following formula: `Value of memory.min = Memory request × Value of minLimitPercent/100`. For example, if you specify `Memory Request=100MiB` and `minLimitPercent=100` for a container, `the value of memory.min is 104857600`.

![对](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/7432856561/p442272.png)

![对](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/7432856561/p442272.png)

`lowLimitPercent`

Int

0~100

Unit: %. Default value: `0`. The default value indicates that this parameter is disabled.

This parameter specifies the relatively unreclaimable proportion of the memory request of a pod. For more information, see the Alibaba Cloud Linux topic [Memcg QoS feature of the cgroup v1 interface](/help/en/alinux/user-guide/memcg-qos-function-ensures-system-stability-and-response-speed#concept-2482889).

The amount of relatively unreclaimable memory is calculated based on the following formula: `Value of memory.low = Memory request × Value of lowLimitPercent/100`. For example, if you specify `Memory Request=100MiB` and `lowLimitPercent=100` for a container, `the value of memory.low is 104857600`.

![对](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/7432856561/p442272.png)

![对](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/7432856561/p442272.png)

`throttlingPercent`

Int

0~100

Unit: %. Default value: `0`. The default value indicates that this parameter is disabled.

This parameter specifies the memory throttling threshold for the ratio of the memory usage of a container to the memory limit of the container. If the memory usage of a container exceeds the memory throttling threshold, the memory used by the container will be reclaimed. This parameter is suitable for container memory overcommitment scenarios. You can use this parameter to prevent cgroups from triggering OOM. For more information, see the Alibaba Cloud Linux topic [Memcg QoS feature of the cgroup v1 interface](/help/en/alinux/user-guide/memcg-qos-function-ensures-system-stability-and-response-speed#concept-2482889).

The memory throttling threshold for memory usage is calculated based on the following formula: `Value of memory.high = Memory limit × Value of throttlingPercent/100`. For example, if you specify `Memory Limit=100MiB` and `throttlingPercent=80` for a container, `the value of memory.high is 83886080(80 MiB)`.

![对](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/7432856561/p442272.png)

![对](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/7432856561/p442272.png)

`wmarkRatio`

Int

0~100

Unit: %. Default value: `95`. A value of `0` indicates that this parameter is disabled. If the memory usage exceeds the reclamation threshold, the memcg backend asynchronous reclamation feature is triggered.

This parameter specifies the asynchronous memory reclamation threshold of memory usage to memory limit or memory usage to the value of `memory.high`. For more information, see the Alibaba Cloud Linux topic [Memcg backend asynchronous reclaim](/help/en/alinux/user-guide/memcg-backend-asynchronous-reclaim#task-2487938).

If throttlingPercent is disabled, the memory reclaim threshold for memory usage is calculated based on the following formula: Value of memory.wmark\_high = Memory limit × wmarkRatio/100. If throttlingPercent is enabled, the memory reclaim threshold for memory usage is calculated based on the following formula: `Value of memory.wmark_high = Value of memory.high × wmarkRatio/100`. For example, if you specify `Memory Limit=100MiB` and `wmarkRatio=95,throttlingPercent=80` for a container, the memory throttling threshold specified by `memory.high is 83886080 (80 MiB)`, the memory reclamation ratio `memory.wmark_ratio is 95`, and the memory reclamation threshold specified by `memory.wmark_high is 79691776 (76 MiB)`.

![对](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/7432856561/p442272.png)

![对](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/7432856561/p442272.png)

`wmarkMinAdj`

Int

\-25~50

Unit: %. The default value is `-25` for the `LS` QoS class and `50` for the `BE` QoS class. A value of `0` indicates that this parameter is disabled.

This parameter specifies the adjustment to the global minimum watermark for a container. A negative value decreases the global minimum watermark and therefore postpones memory reclamation for the container. A positive value increases the global minimum watermark and therefore antedates memory reclamation for the container. For more information, see the Alibaba Cloud Linux topic [Memcg global minimum watermark rating](/help/en/alinux/user-guide/memcg-global-minimum-watermark-rating#task-2492619).

For example, if you create a pod whose QoS class is LS, the default setting of this parameter is `memory.wmark_min_adj=-25`, which indicates that the minimum watermark is decreased by 25% for the containers in the pod.

![对](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/7432856561/p442272.png)

![对](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/7432856561/p442272.png)

## FAQ

### Is the memory QoS feature that is enabled based on the legacy version of the ack-slo-manager protocol still supported after I upgrade from ack-slo-manager to ack-koordinator?

In ack-slo-manager versions 0.8.0 and earlier, the following pod configurations are used:

-   Define QoS class through the pod annotation `alibabacloud.com/qosClass`
    
-   Configure memory QoS through the pod annatation `alibabacloud.com/memoryQOS`
    

ack-koordinator maintains backward compatibility with these annotation-based protocols used in ack-slo-manager. You can seamlessly upgrade from ack-slo-manager to ack-koordinator. However, compatibility support ends on July 30, 2023. We recommend that you migrate the resource parameters to the new ones.

The following table describes the compatibility between different component versions and the memory QoS feature.

**Component** **version**

**alibabacloud.com protocol**

**koordinator.sh protocol**

≥ 0.3.0 and < 0.8.0

✓

×

≥ 0.8.0

✓

✓

## References

-   [KEP-2570: Support Memory QoS with cgroups v2](https://github.com/kubernetes/enhancements/tree/master/keps/sig-node/2570-memory-qos)
    
-   Alibaba Cloud Linux uses the `cgroup v1` interface to implement memcg QoS. For more information, see [Memcg QoS feature of the cgroup v1 interface](/help/en/alinux/user-guide/memcg-qos-function-ensures-system-stability-and-response-speed#concept-2482889).
    
-   Alibaba Cloud Linux uses the memcg backend asynchronous reclamation feature to dynamically and efficiently manage memory usage based on cgroups, in order to avoid memory exhaustion. For more information, see [Memcg backend asynchronous reclamation](/help/en/alinux/user-guide/memcg-backend-asynchronous-reclaim#task-2487938).
    
-   Alibaba Cloud Linux allows you to specify different levels of memory usage thresholds (watermarks) to meet the memory requests of latency-sensitive and resource-consuming tasks. For more information, see [Memcg global minimum watermark rating](/help/en/alinux/user-guide/memcg-global-minimum-watermark-rating#task-2492619).
    
-   ack-koordinator provides features that are used to limit and evict reclaimed resources on the node. You can use the features to prevent the negative impact of BestEffort pods on your business. For more information, see [Enable CPU QoS for containers](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/cpu-qos) and [Enable resource isolation based on the L3 cache and MBA](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/resource-isolation-based-on-the-l3-cache-and-mba#task-2093499).
