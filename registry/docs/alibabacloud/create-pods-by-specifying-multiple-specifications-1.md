When you create a large number of elastic container instances (pods), the resources that you can use may be insufficient. In this case, we recommend that you specify multiple specifications. The system tries to create the pods based on the sequence of the specified specifications. This improves the creation success rate.

## Background information

If you specify multiple specifications when you create an elastic container instance, the system tries to use the specifications in sequence. This improves the creation success rate.

**Note**

-   During the retry, the instance remains in the Pending state.
    
-   The multi-specification mode is effective at the instance level and only affects the creation policy of a single instance.
    
-   You can also specify multiple zones when you use the multi-specification mode. This further improves the creation success rate.
    

## **Supported specifications**

### **vCPU and memory specifications supported by Elastic Container Instance**

-   **Specifications supported in all regions where Elastic Container Instance is available**
    
    **vCPU**
    
    **Memory (GiB)**
    
    **Bandwidth (bidirectional, Gbit/s, theoretical upper limit)**
    
    0.25
    
    0.5 and 1
    
    0.08
    
    0.5
    
    1 and 2
    
    0.08
    
    1
    
    2, 4, and 8
    
    0.1
    
    2
    
    1, 2, 4, 8, and 16
    
    1
    
    4
    
    2, 4, 8, 16, and 32
    
    1.5
    
    8
    
    4, 8, 16, 32, and 64
    
    2
    
    12
    
    12, 24, 48, and 96
    
    2.5
    
    16
    
    16, 32, 64, and 128
    
    3
    
    24
    
    24, 48, 96, and 192
    
    4.5
    
    32
    
    32, 64, 128, and 256
    
    6
    
    52
    
    96, 192, and 384
    
    12.5
    
    64
    
    128, 256, and 512
    
    20
    
-   **Specifications supported only in some regions**
    
    **Important**
    
    -   The specifications contained in the following table are supported only in some regions. When you create an elastic container instance that has one of the following specifications, make sure that the corresponding specifications are supported in the specified region and zone. Otherwise, the instance cannot be created because no resources exist in the region and zone.
        
        The regions that support the specifications contained in the following table include: China (Hangzhou), China (Shanghai), China (Qingdao), China (Beijing), China (Zhangjiakou), China (Hohhot), China (Ulanqab), China (Shenzhen), China (Heyuan), China (Guangzhou), China (Chengdu), and Singapore.
        
    -   You cannot use the specifications in the following table to create preemptible instances.
        
    
    **vCPU**
    
    **Memory (GiB)**
    
    **Bandwidth (bidirectional, Gbit/s, theoretical upper limit)**
    
    2
    
    6, 10, 12, and 14
    
    1
    
    4
    
    6, 10, 12, 14, 18, 20, 22, 24, 26, 28, and 30
    
    1.5
    
    6
    
    6, 8, 10, 12, 14, 16, 18, 20, 22, 24, 26, 28, 30, 32, 34, 36, 38, 40, 42, 44, 46, and 48
    
    1.5
    
    8
    
    10, 12, 14, 18, 20, 22, 24, 26, 28, 30, 34, 36, 38, 40, 42, 44, 46, 48, 50, 52, 54, 56, 58, 60, and 62
    
    2.5
    

#### ECS instance families supported by Elastic Container Instance

-   **x86-based enterprise-level computing instance families**
    
    x86-based ECS instance types are based on the x86 architecture. Each vCPU corresponds to a hyper-thread of a processor core. They deliver stable performance and are suitable for scenarios such as enterprise-level applications, database systems, video encoding and decoding, and data analysis.
    
    **Category**
    
    **x86-based enterprise-level instance family**
    
    General-purpose instance families
    
    g8a, g8i, g7a, g7, g6e, g6a, g6, g5, sn2, and sn2ne
    
    Compute-optimized instance families
    
    c8a, c8i, c7a, c7, c6e, c6a, c6, c5, sn1, and sn1ne
    
    Memory optimized instance families
    
    r8a, r8i, r7a, r7, r6e, r6a, r6, r5, se1ne, and se1
    
    General compute category instance families
    
    u1
    
    Compute-intensive instance families
    
    ic5
    
    Instance families with high clock speeds
    
    -   hfg8i, hfg7, hfg6, and hfg5
        
    -   hfc8i, hfc7, hfc6, and hfc5
        
    -   hfr8i and hfr7
        
    
    Big data instance families
    
    d1 and d1ne
    
    Instance families with local SSDs
    
    i2 and i2g
    
-   **Enterprise-level heterogeneous computing instance families**
    
    GPU-accelerated ECS instance types contain GPUs and are suitable for scenarios such as deep learning and image processing. GPU-related Docker images can be directly run on a GPU-accelerated elastic container instance. A NVIDIA GPU driver is pre-installed in the instance. The supported driver and CUDA versions vary with GPU types.
    
    **Note**
    
    The gn8ia and gn8is instance families in the following table are available only in specific regions outside the Chinese mainland. To use the instance families, contact Alibaba Cloud sales personnel.
    
    **Category**
    
    **GPU-accelerated instance family**
    
    **Driver and CUDA versions**
    
    vGPU-accelerated instance families
    
    sgn7i-vws
    
    NVIDIA 470.161.03 and CUDA 11.4
    
    vgn7i-vws
    
    vgn6i-vws
    
    GPU-accelerated compute-optimized instance families
    
    gn7e
    
    -   NVIDIA 470.82.01 and CUDA 11.4 (default)
        
    -   NVIDIA 535.161.08 and CUDA 12.2
        
    
    gn7i
    
    gn7s
    
    gn7
    
    gn6v
    
    gn6e
    
    gn6i
    
    gn5i
    
    gn5
    
    gn8ia
    
    NVIDIA 535.161.08 and CUDA 12.2
    
    gn8is
    
-   **Arm-based enterprise-level computing instance families**
    
    Arm-based ECS instance types are based on the ARM architecture. Each vCPU corresponds to a physical core of a processor. They deliver stable performance and provide exclusive resources. They are suitable for scenarios such as containers, microservices, website and application servers, high-performance computing, and CPU-based machine learning.
    
    **Category**
    
    **Arm-based instance family**
    
    General-purpose instance families
    
    g8y
    
    Compute-optimized instance families
    
    c8y
    
    Memory optimized instance families
    
    r8y
    
-   **x86-based shared computing instance families**
    
    Shared ECS instance types are suitable for small and medium-sized websites and individuals. Compared with enterprise-level ECS instance types, shared ECS instance types emphasize the sharing of resource performance to maximize resource utilization. In this case, the stability of computing performance cannot be ensured, but the cost is reduced.
    
    **Category**
    
    **x86-based shared instance family**
    
    Economy instance families
    
    e
    

For more information about ECS instance families, see the following topics:

-   [Overview of instance families](/help/en/ecs/user-guide/overview-of-instance-families#concept-sx4-lxv-tdb)
    
-   [Pricing of ECS instance types](https://www.alibabacloud.com/product/ecs)
    
-   [ECS Instance Types Available for Each Region](https://ecs-buy.alibabacloud.com/instanceTypes/#/instanceTypeByRegion)
    

## **Configuration description**

You can add the `k8s.aliyun.com/eci-use-specs` annotation to the metadata of the configuration file of a pod to specify specifications for the instance.

-   When you specify multiple specifications, you can specify vCPU and memory specifications or ECS instance types. You can also specify both of them.
    
    **Important**
    
    After the pod is created, you can check the specifications that are actually used by the pod in the `k8s.aliyun.com/eci-instance-spec` field in the YAML file of the pod. If the pod uses an ECS instance type, you are charged based on the ECS instance type. If the pod uses vCPU and memory specifications, you are charged based on the number of vCPUs and memory size.
    
-   You must specify specifications in a priority order. A maximum of five specifications can be specified.
    
-   If you want to create GPU-accelerated elastic container instances, elastic container instances that use local disks, or Arm-based elastic container instances, you can only specify corresponding specifications. The specifications that do not support the preceding features cannot be specified.
    

The following code provides sample configurations:

```
apiVersion: apps/v1
kind: Deployment
metadata:
  name: test
  labels:
    app: test
spec:
  replicas: 2
  selector:
    matchLabels:
      app: nginx
  template:
    metadata:
      name: nginx-test
      labels:
        app: nginx
        alibabacloud.com/eci: "true" 
      annotations:
        k8s.aliyun.com/eci-use-specs: 2-4Gi,ecs.c5.large,ecs.c6.large  # Sets the specifications that you want to use to create the pod. Replace the value by using the actual specifications.
    spec:
      containers:
      - name: nginx
        image: registry.cn-shanghai.aliyuncs.com/eci_open/nginx:1.14.2
        ports:
        - containerPort: 80
```
