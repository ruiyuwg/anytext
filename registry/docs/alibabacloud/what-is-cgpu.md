cGPU is a container sharing technology provided by Alibaba Cloud to isolate virtual GPUs (vGPUs) based on kernels. Multiple isolated containers share a single GPU. This ensures business security, improves utilization of GPU hardware resources, and reduces costs.

## Benefits

-   **High compatibility**
    
    cGPU is compatible with open source container technologies, such as Docker, Containerd, and Kubernetes.
    
-   **Ease of use**
    
    When you run cGPU, you do not need to re-compile AI applications or replace Compute Unified Device Architecture (CUDA) libraries.
    
-   **Flexible resource allocation**
    
    cGPU allows you to allocate physical GPU resources in a flexible manner based on your business requirements. For example, you can dynamically allocate GPU memory at the MB level, specify a GPU utilization rate, and set the minimum computing power ratio to 2%.
    
-   **Unlimited GPU-accelerated instance types**
    
    cGPU is applicable to various categories of GPU-accelerated instances, such as GPU-accelerated Elastic Compute Service (ECS) Bare Metal instances, virtualized instances, and vGPU-accelerated instances.
    
-   **Wide business scenarios**
    
    cGPU supports colocation of online and offline workloads, and can be used in CUDA-based AI and rendering scenarios.
    
-   **Powerful capabilities**
    
    cGPU supports preemption for high-priority tasks, and provides high O&M, hot upgrade, and multi-GPU allocation capabilities.
    

## cGPU architecture

The following figure shows the architecture of cGPU.

![cGPU架构图](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/3603285761/p238613.png)

To improve utilization of GPU hardware resources, you may want to run multiple containers on a single GPU and isolate the GPU-based applications among the containers.

cGPU uses the kernel driver developed by Alibaba Cloud to provide vGPU devices for containers. This isolates the GPU memory and the computing power of GPUs without compromising performance. This also maximizes utilization of GPU hardware resources in training and inference scenarios. You can run commands to configure vGPU devices in containers in a convenient manner.
