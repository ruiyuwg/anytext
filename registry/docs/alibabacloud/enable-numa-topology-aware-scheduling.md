In a Non-Uniform Memory Access (NUMA) architecture, frequent communication between CPUs and GPUs can cause cross-node access, which increases latency, limits bandwidth, and degrades system performance. To address this issue, Alibaba Cloud Container Service for Kubernetes (ACK) provides NUMA topology-aware scheduling based on the Scheduler Framework. This feature schedules Pods to optimal NUMA nodes, reducing cross-NUMA node access and improving performance.

## How it works

A NUMA node is the basic unit of a Non-Uniform Memory Access system. A NUMA set combines multiple nodes on one worker node to efficiently allocate resources and reduce processor memory contention.

On machines with eight GPUs, multiple NUMA nodes typically exist. Without proper core binding or GPU-CPU colocation on the same NUMA node, performance degrades due to CPU contention and cross-NUMA communication.

Native Kubernetes uses kubelet's CPU and NUMA policies to bind resources on single machines, but faces cluster limitations:

-   **Scheduler unawareness:** Cannot assess remaining node resources for Pod QoS requirements, causing AdmissionError states and potential cluster instability.
    
-   **Uncontrollable placement:** Topology policies are node-process parameters only, preventing node affinity use for colocation workloads.
    
-   **Policy complexity:** Nodes support only one policy, requiring manual cluster partitioning and labeling that reduces resource utilization.
    

ACK solves these with topology-aware scheduling using gputopo-device-plugin and ack-koordlet of [ack-koordinator](/help/en/ack/product-overview/ack-koordinator-fka-ack-slo-manager) to report node CPU/GPU topology, supporting workload NUMA policy declarations. The following diagram illustrates the overall architecture.

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/1048213771/CAEQUxiBgMDQ7NP45BkiIGRkZTIwMGVkYjIyZjQzZWM5ODg4NDc4MWFmOTY2MTMz4414493_20240513140206.950.svg)

## Prerequisites

**Cluster requirements:**

-   An [ACK Pro cluster](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/create-an-ack-managed-cluster-2/) of version 1.24 or later. To upgrade a cluster, see [Upgrade a cluster](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/upgrade-clusters/).
    

**Node requirements:**

-   Only the sccgn7ex instance family for GPU-accelerated supercomputing clusters and Lingjun nodes is supported. For more information, see [Instance families](/help/en/ecs/user-guide/overview-of-instance-families#undefined). For information about Lingjun nodes, see [Manage LINGJUN Clusters and Lingjun nodes](/help/en/pai/user-guide/manage-lingjun-clusters-and-lingjun-nodes).
    

-   Manually add the label `ack.node.gpu.schedule=topology` to nodes where you want to enable topology-aware GPU scheduling. For more information, see [Enable scheduling features](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/enable-scheduling#LiJxn).
    

**Component requirements:**

-   The kube-scheduler component must be version 6.4.4 or later. For more information, see [kube-scheduler](/help/en/ack/product-overview/kube-scheduler). To upgrade kube-scheduler, go to the ACK console, click the name of your cluster, and choose **Operations Management** > **Add-ons**.
    
-   The [ack-koordinator add-on (formerly ack-slo-manager)](/help/en/ack/product-overview/ack-koordinator-fka-ack-slo-manager#task-2172306)must be installed.
    
    -   For ACK Lingjun clusters, you can install ack-koordinator directly.
        
    -   For ACK Pro clusters, you must set the `NodeTopologyReport` field in the `agentFeatures` Feature Gate to `true` when you configure the ack-koordinator parameters.
        
        ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/7413652271/p802345.png)
        
-   The **GPU topology reporting add-on** (gputopo-device-plugin) is installed. This add-on is required to collect and report GPU-to-CPU NUMA topology information to the cluster. For installation instructions, see [Install the GPU topology-aware scheduling add-on](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/install-ack-ai-installer).
    
    **Important**
    
    If the **GPU topology-aware scheduling** add-on is installed before **ack-koordinator**, you must restart the scheduling add-on once the **ack-koordinator** installation is complete.
    

## Limitations

-   This feature provides unified CPU and GPU NUMA affinity and is **mutually exclusive** with legacy standalone scheduling policies. Do not enable this feature for workloads already using [topology-aware CPU scheduling](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/topology-aware-cpu-scheduling) or the legacy standalone version of [topology-aware GPU scheduling](/help/en/ack/topology-aware-gpu-scheduling).
    
-   Only colocation of CPUs and GPUs is supported.
    
-   The CPU requests for all containers in the application Pod must be integers (unit: cores), and the requests must be equal to the limits.
    
-   GPU resources for containers in the application Pod must be requested using `aliyun.com/gpu` and must be for whole GPU cards.
    

## Billing

This feature requires the installation of the Cloud-Native AI Suite, which may incur additional fees. For more information, see [Billing of the cloud-native AI suite](/help/en/ack/cloud-native-ai-suite/product-overview/cloud-native-ai-suite-free-open-instructions).

**Worker node resources:** ack-koordinator runs as a self-managed component on worker nodes and consumes their CPU and memory. Configure resource requests for each module during installation.

**Prometheus monitoring metrics:** ack-koordinator exposes monitoring metrics in Prometheus format for features such as resource profiling and fine-grained scheduling. If you select **Enable Prometheus Metrics for ACK-Koordinator** during installation and use Alibaba Cloud Prometheus, these metrics count as [custom metrics](/help/en/arms/prometheus-monitoring/basic-metrics/) and incur fees based on cluster size and application count. Before enabling this option, review the [Prometheus billing documentation](/help/en/arms/prometheus-monitoring/product-overview/billing-description/) to understand the free quota and billing policies. Monitor usage through [billing and usage queries](/help/en/arms/prometheus-monitoring/product-overview/billing-and-usage-query).

## Use NUMA topology-aware scheduling

You can enable NUMA topology-aware scheduling by adding the following annotations to your Pod specification:

```
apiVersion: v1
kind: Pod
metadata:
  name: example
  annotations:
    cpuset-scheduler: required                           # Enable CPU binding
    scheduling.alibabacloud.com/numa-topology-spec: |    # Specifies the NUMA topology requirements for this pod
      {
        "numaTopologyPolicy": "SingleNUMANode",
        "singleNUMANodeExclusive": "Preferred"
      }
spec:
  containers:
  - name: example
    image: ghcr.io/huggingface/text-generation-inference:1.4
    resources:
      limits:
        aliyun.com/gpu: '4'
        cpu: '24'
      requests:
        aliyun.com/gpu: '4'
        cpu: '24'
```

The following table describes the parameters for NUMA topology-aware scheduling.

**Parameter**

**Description**

`cpuset-scheduler`

Specifies that the Pod requires colocation of CPUs and devices.

Currently, the only supported value is `required`.

`numaTopologyPolicy`

The NUMA placement policy to use when scheduling the Pod.

-   `SingleNUMANode`: The Pod's CPUs and devices must be placed on the same NUMA node. If no such node is available, the Pod will not be scheduled.
    
-   `Restricted`: The Pod's CPUs and devices must be placed within the same NUMA set. If no such node is available, the Pod will not be scheduled.
    
-   `BestEffort`: The scheduler attempts to place the Pod's CPUs and devices on the same NUMA node. If no such node is available, it selects the next best node.
    

`singleNUMANodeExclusive`

Defines the exclusivity policy for placing Pods on NUMA nodes.

**Note**

NUMA node types:

-   `single`: Only Pods that require binding to a single NUMA node run on this NUMA node.
    
-   `shared`: Pods that can be spread across multiple NUMA nodes run on this NUMA node.
    
-   `idle`: A NUMA node with no Pods running on it, available for new Pods.
    

-   (Default) `Required`: If the Pod requires binding to a single NUMA node, it can only be scheduled on `idle` or `single` NUMA nodes. If the Pod can be spread across multiple NUMA nodes, it can only be scheduled on `idle` or `shared` NUMA nodes.
    
-   `Preferred`: The scheduler does not restrict the types of NUMA nodes that can be used.
    

## Performance comparison

This section demonstrates the performance improvement from NUMA topology-aware scheduling by measuring model loading times. In this test, we use the `text-generation-inference` tool to load a model on four GPU cards. We then use NVIDIA Nsight Systems to measure the change in GPU loading speed before and after enabling core binding.

This experiment uses Lingjun nodes, text-generation-inference v1.4 (available from the [TGI download page](https://github.com/huggingface/text-generation-inference)), and NVIDIA Nsight Systems (available from the [NSight tool download page](https://docs.nvidia.com/nsight-systems/InstallationGuide/index.html)).

**Important**

Test results vary by tool and environment. The performance data in this example was collected using NVIDIA Nsight Systems; your actual results may differ.

### Without topology-aware scheduling

The following YAML shows the application configuration for the same scenario without topology-aware scheduling enabled.

**YAML**

```
apiVersion: apps/v1
kind: Deployment
metadata:
  labels:
    app: tgi
  name: tgi-deployment-basic
  namespace: test
spec:
  replicas: 1
  selector:
    matchLabels:
      app: tgi
  template:
    metadata:
      labels:
        app: tgi
    spec:
      containers:
        - command:
            - sleep
            - 3600d
          image: >-
            ghcr.io/huggingface/text-generation-inference:1.4
          imagePullPolicy: IfNotPresent
          name: tgi
          ports:
            - containerPort: 80
              protocol: TCP
          resources:
            limits:
              cpu: '24'
              nvidia.com/gpu: '4'
            requests:
              cpu: '24'
              nvidia.com/gpu: '4'
          terminationMessagePath: /dev/termination-log
          terminationMessagePolicy: File
          volumeMounts:
            - mountPath: /llm
              name: volume-1710932083254
      restartPolicy: Always
      schedulerName: default-scheduler
      volumes:
        - name: volume-1710932083254
          persistentVolumeClaim:
            claimName: model
```

The model took 15.9s to load.

![image.png](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/7413652271/p799606.png)

### With topology-aware scheduling

The following YAML shows the application configuration for the same scenario with topology-aware scheduling enabled.

**Note**

To enable this feature, you must change the GPU resource request from the standard `nvidia.com/gpu` to `aliyun.com/gpu`. This allows the specialized scheduler to identify and manage the GPU-CPU NUMA affinity.

**YAML**

```
apiVersion: apps/v1
kind: Deployment
metadata:
  labels:
    app: tgi-numa
  name: tgi-numa-deployment-basic
  namespace: yueming-test
spec:
  replicas: 1
  selector:
    matchLabels:
      app: tgi-numa
  template:
    metadata:
      annotations:
        cpuset-scheduler: required
        scheduling.alibabacloud.com/numa-topology-spec: |
          {
            "numaTopologyPolicy": "SingleNUMANode"
          }
      labels:
        app: tgi-numa
    spec:
      containers:
        - command:
            - sleep
            - 3600d
          image: >-
            ghcr.io/huggingface/text-generation-inference:1.4
          imagePullPolicy: IfNotPresent
          name: numa
          resources:
            limits:
              aliyun.com/gpu: '4'
              cpu: '24'
            requests:
              aliyun.com/gpu: '4'
              cpu: '24'
          volumeMounts:
            - mountPath: /llm
              name: volume-1710932083254
      restartPolicy: Always
      schedulerName: default-scheduler
      volumes:
        - name: volume-1710932083254
          persistentVolumeClaim:
            claimName: model
```

The model took 5.4s to load, a 66% improvement over the baseline.

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/7413652271/p800096.png)

## **Related documents**

[Enable nearest memory access acceleration for containers](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/use-the-nearby-memory-access-acceleration-feature-on-multi-numa-instances)
