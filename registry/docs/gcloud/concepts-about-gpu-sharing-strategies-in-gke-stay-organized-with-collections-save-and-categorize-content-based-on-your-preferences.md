-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Application hosting](https://docs.cloud.google.com/docs/application-hosting)
-   [Google Kubernetes Engine (GKE)](https://docs.cloud.google.com/kubernetes-engine/docs)
-   [GKE AI/ML](https://docs.cloud.google.com/kubernetes-engine/docs/integrations/ai-infra)
-   [Guides](https://docs.cloud.google.com/kubernetes-engine/docs/concepts/machine-learning)

Send feedback

# About GPU sharing strategies in GKE Stay organized with collections Save and categorize content based on your preferences.

[Autopilot](/kubernetes-engine/docs/concepts/autopilot-overview) [Standard](/kubernetes-engine/docs/concepts/choose-cluster-mode)

This page explains the characteristics and best types of workloads for each GPU sharing strategy available in Google Kubernetes Engine (GKE), such as multi-instance GPUs, GPU time-sharing, and NVIDIA MPS. GPU sharing helps you to minimize underutilized capacity in your cluster and to provide workloads with just enough capacity to complete tasks.

This page is for Platform admins and operators and for Data and AI specialists who want to run GPU-based workloads that consume GPU capacity as efficiently as possible. To learn more about common roles that we reference in Google Cloud content, see [Common GKE user roles and tasks](/kubernetes-engine/enterprise/docs/concepts/roles-tasks).

Before reading this page, ensure that you're familiar with the following concepts:

-   Kubernetes concepts, such as Pods, nodes, deployments, and namespaces.
-   GKE concepts, such as [node pools](/kubernetes-engine/docs/concepts/node-pools), [autoscaling](/kubernetes-engine/docs/concepts/cluster-autoscaler), and [node auto-provisioning](/kubernetes-engine/docs/how-to/node-auto-provisioning).

## How GPU requests work in Kubernetes

Kubernetes enables workloads to request precisely the resource amounts they need to function. Although you can request fractional _CPU_ units for workloads, you can't request fractional _GPU_ units. Pod manifests must request GPU resources in integers, which means that an entire physical GPU is allocated to one container even if the container only needs a fraction of the resources to function correctly. This is inefficient and can be costly, especially when you're running multiple workloads with similar low GPU requirements.

**Best practice**:

Use GPU sharing strategies to improve GPU utilization when your workloads don't need all of the GPU resources.

## What are GPU sharing strategies?

GPU sharing strategies allow multiple containers to efficiently use your attached GPUs and save running costs. GKE provides the following GPU sharing strategies:

-   **Multi-instance GPU**: GKE divides a single supported GPU in up to seven slices. Each slice can be allocated to one container on the node independently, for a maximum of seven containers per GPU. Multi-instance GPU provides hardware isolation between the workloads, plus consistent and predictable Quality of Service (QoS) for all containers running on the GPU.
-   **GPU time-sharing**: GKE uses the built-in timesharing ability provided by the NVIDIA GPU and the software stack. Starting with the [Pascal architecture](https://www.nvidia.com/en-us/data-center/pascal-gpu-architecture/), NVIDIA GPUs support instruction level preemption. When doing context switching between processes running on a GPU, instruction-level preemption ensures every process gets a fair timeslice. GPU time-sharing provides software-level isolation between the workloads in terms of address space isolation, performance isolation, and error isolation.
-   **NVIDIA MPS**: GKE uses [NVIDIA's Multi-Process Service (MPS)](https://docs.nvidia.com/deploy/pdf/CUDA_Multi_Process_Service_Overview.pdf). NVIDIA MPS is an alternative, binary-compatible implementation of the CUDA API designed to transparently enable co-operative multi-process CUDA workloads to run concurrently on a single GPU device. GPU with NVIDIA MPS provides software-level isolation in terms of resource limits ([active thread percentage](https://docs.nvidia.com/deploy/mps/index.html#topic_5_2_5) and [pinned device memory](https://docs.nvidia.com/deploy/mps/index.html#topic_5_2_7)).

## Which GPU sharing strategy to use

The following table summarizes and compares the characteristics of the available GPU sharing strategies:

Multi-instance GPU

GPU time-sharing

NVIDIA MPS

General

Parallel GPU sharing among containers

Rapid context switching

Parallel GPU sharing among containers

Isolation

A single GPU is divided in up to seven slices and each container on the same physical GPU has dedicated compute, memory, and bandwidth. Therefore, a container in a partition has a predictable throughput and latency even when other containers saturate other partitions.

Each container accesses the full capacity of the underlying physical GPU by doing context switching between processes running on a GPU.

However, time-sharing provides no memory limit enforcement between shared Jobs and the rapid context switching for shared access may introduce overhead.

NVIDIA MPS has limited resource isolation, but gains more flexibility in other dimensions, for example GPU types and max shared units, which simplify resource allocation.

Suitable for these workloads

Recommended for workloads running in parallel and that need certain resiliency and QoS. For example, when running AI inference workloads, multi-instance GPU allows multiple inference queries to run simultaneously for quick responses, without slowing each other down.

Recommended for bursty and interactive workloads that have idle periods. These workloads are not cost-effective with a fully dedicated GPU. By using time-sharing, workloads get quick access to the GPU when they are in active phases.

GPU time-sharing is optimal for scenarios to avoid idling costly GPUs where full isolation and continuous GPU access might not be necessary, for example, when multiple users test or prototype workloads.

Workloads that use time-sharing need to tolerate certain performance and latency compromises.

Recommended for batch processing for small jobs because MPS maximizes the throughput and concurrent use of a GPU. MPS allows batch jobs to efficiently process in parallel for small to medium sized workloads.

NVIDIA MPS is optimal for cooperative processes acting as a single application. For example, MPI jobs with inter-MPI rank parallelism. With these jobs, each small CUDA process (typically MPI ranks) can run concurrently on the GPU to fully saturate the whole GPU.

Workloads that use CUDA MPS need to tolerate the [memory protection and error containment limitations](https://docs.nvidia.com/deploy/mps/#topic_3_3_3).

Monitoring

GPU utilization metrics are not available for multi-instance GPUs.

Use [Cloud Monitoring](/monitoring/docs) to monitor the performance of your GPU time-sharing. To learn more about the available metrics, see [Monitor GPU time-sharing or NVIDIA MPS nodes](#monitor).

Use [Cloud Monitoring](/monitoring/docs) to monitor the performance of your NVIDIA MPS. To learn more about the available metrics, see [Monitor GPU time-sharing or NVIDIA MPS nodes](#monitor).

Request shared GPUs in workloads

[Run multi-instance GPUs](/kubernetes-engine/docs/how-to/gpus-multi)

[Run GPUs with time-sharing](/kubernetes-engine/docs/how-to/timesharing-gpus)

[Run GPUs with NVIDIA MPS](/kubernetes-engine/docs/how-to/nvidia-mps-gpus)

**Best practice**:

To maximize your GPU utilization, combine GPU sharing strategies. For each, multi-instance GPU partition, use either time-sharing or NVIDIA MPS. You can then run multiple containers on each partition, with those containers sharing access to the resources on that partition. We recommend that you use any of the following combinations:

-   Multi-instance GPU and GPU time-sharing.
-   Multi-instance GPU and NVIDIA MPS.

### How the GPU sharing strategies work

You can specify the maximum number of containers allowed to share a physical GPU:

-   On Autopilot clusters, this is configured in your workload specification.
-   On Standard clusters, this is configured when you create a new node pool with GPUs attached. Every GPU in the node pool is shared based on the setting you specify at the node pool level.

The following sections explain the scheduling behavior and operation of each GPU sharing strategy.

#### Multi-instance GPU

You can request multi-instance GPU in workloads by specifying the `cloud.google.com/gke-gpu-partition-size` label in the Pod spec `nodeSelector` field, under `spec: nodeSelector`.

GKE schedules workloads to appropriate available nodes by matching these labels. If there are no appropriate available nodes, GKE uses autoscaling and node auto-provisioning to create new nodes or node pools that match this label.

#### GPU time-sharing or NVIDIA MPS

You can request GPU time-sharing or NVIDIA MPS in workloads by specifying the following labels in the Pod spec `nodeSelector` field, under `spec:nodeSelector`.

-   `cloud.google.com/gke-max-shared-clients-per-gpu`: Select nodes that allow a specific number of clients to share the underlying GPU.
-   `cloud.google.com/gke-gpu-sharing-strategy`: Select nodes that use the time-sharing or NVIDIA MPS strategy for GPUs.

The following table describes how scheduling behavior changes based on the combination of node labels that you specify in your manifests.

Node labels

`cloud.google.com/gke-max-shared-clients-per-gpu`  
  
_and_  
  
`cloud.google.com/gke-gpu-sharing-strategy`

GKE schedules workloads in available nodes that match both the labels.

If there are no available nodes, GKE uses autoscaling and node auto-provisioning to create new nodes or node pools that match both the labels.

_Only_ `cloud.google.com/gke-max-shared-clients-per-gpu`

**Autopilot:** GKE rejects the workload.

**Standard:** GKE schedules workloads in available nodes that match the label. If there are no available nodes, GKE uses autoscaling and node auto-provisioning to create new nodes or node pools that match the label. By default, auto-provisioned nodes are given the following label and value for each strategy:

-   **GPU time-sharing:** `cloud.google.com/gke-gpu-sharing-strategy=TIME_SHARING`
-   **NVIDIA MPS:** `cloud.google.com/gke-gpu-sharing-strategy=MPS`

_Only_ `cloud.google.com/gke-gpu-sharing-strategy`

**Autopilot:** GKE rejects the workload.

**Standard:** GKE schedules workloads in available nodes that use specific sharing strategies.

-   If there are multiple shared node pools with different values for `cloud.google.com/gke-max-shared-clients-per-gpu`, the workload can be scheduled on any available node.
-   If there are no available nodes in any node pools, the cluster autoscaler scales up the node pool with the lowest value for `cloud.google.com/gke-max-shared-clients-per-gpu`.
-   If all node pools are at capacity, node auto-provisioning creates a new node pool with a default value of `cloud.google.com/gke-max-shared-clients-per-gpu=2`

The GPU request process that you complete is the same for GPU time-sharing and NVIDIA MPS strategy.

If you're developing GPU applications that run on GPU time-sharing or NVIDIA MPS, you can only request one GPU for each container. GKE rejects a request for more than one GPU in a container to avoid unexpected behavior. In addition, the number of GPUs requested with time-sharing and NVIDIA MPS is not a measure of the compute power available to the container.

The following table shows you what to expect when you request specific quantities of GPUs.

GPU requests that apply to GPU time-sharing and NVIDIA MPS

_One_ GPU time-sharing or NVIDIA MPS per container

GKE allows the request, even if the node has one physical GPU or multiple physical GPUs.

_More than one_ GPU time-sharing per container

GKE rejects the request.

This behavior is the same when requesting more than one [multi-instance GPU](/kubernetes-engine/docs/how-to/gpus-multi) instance in a container, because each GPU instance is considered to be a discrete physical GPU.

_More than one_ NVIDIA MPS per container

Based on the number of physical GPUs in the node, GKE does the following:

-   GKE allows the request when the node only has one physical GPU.
-   GKE rejects the request when the node has multiple physical GPUs. This behavior is the same when requesting more than one [multi-instance GPU](/kubernetes-engine/docs/how-to/gpus-multi) instance in a container, because each GPU instance is considered to be a discrete physical GPU.

If GKE rejects the workload, you see an error message similar to the following:

```
status:
  message: 'Pod Allocate failed due to rpc error: code = Unknown desc = [invalid request
    for sharing GPU (time-sharing), at most 1 nvidia.com/gpu can be requested on GPU nodes], which is unexpected'
  phase: Failed
  reason: UnexpectedAdmissionError
```

## Monitor GPU time-sharing or NVIDIA MPS nodes

Use [Cloud Monitoring](/monitoring/docs) to monitor the performance of your GPU time-sharing or NVIDIA MPS nodes. GKE sends metrics for each GPU node to Cloud Monitoring. These GPU time-sharing or NVIDIA MPS node metrics apply at the node level (`node/accelerator/`).

You can check the following metrics for each GPU time-sharing or NVIDIA MPS node in Cloud Monitoring:

-   **Duty cycle (`node/accelerator/duty_cycle`)**: Percentage of time over the last sample period (10 seconds) during which the GPU node was actively processing. Ranges from 1% to 100%.
-   **Memory usage (`node/accelerator/memory_used`)**: Amount of accelerator memory allocated in bytes for each GPU node.
-   **Memory capacity (`node/accelerator/memory_total`)**: Total accelerator memory in bytes for each GPU node.

These metrics are _different_ from the [metrics for regular GPUs](/kubernetes-engine/docs/how-to/gpus#monitoring) that are not time-shared or NVIDA MPS nodes. The metrics for [regular physical GPUs](/kubernetes-engine/docs/concepts/gpus#monitoring) apply at the container level (`container/accelerator`) and are _not_ collected for containers scheduled on a GPU that uses GPU time-sharing or NVIDIA MPS.

## What's next

-   Learn how to [share GPUs with multiple workloads using GPU time-sharing](/kubernetes-engine/docs/how-to/timesharing-gpus).
-   Learn how to [share GPUs with multiple workloads using NVIDIA MPS](/kubernetes-engine/docs/how-to/nvidia-mps-gpus).
-   Learn how to [run multi-instance GPUs](/kubernetes-engine/docs/how-to/gpus-multi).
-   Learn more about [GPUs](/kubernetes-engine/docs/how-to/gpus).
-   For more information about compute preemption for the NVIDIA GPU, refer to the [NVIDIA Pascal Tuning Guide](https://docs.nvidia.com/cuda/pascal-tuning-guide/index.html#preemption).

Send feedback

Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0). For details, see the [Google Developers Site Policies](https://developers.google.com/site-policies). Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2026-03-16 UTC.
