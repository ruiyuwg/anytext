This topic describes the compute specifications supported by Elastic Container Instances and details various methods for creating an instance. Select the most suitable method based on your business needs to create a pod that meets specification requirements, enhances creation success rates, and reduces resource usage costs.

## **Example of specifying specifications**

For general scenarios, if you do not need to specify advanced requirements such as compute categories, ECS instance families, instance family generations, or Arm specifications, you can use the `k8s.aliyun.com/eci-use-specs` annotation in the pod metadata to define the elastic container instance specifications.

**Note**

Add the annotation within the pod's metadata. For instance, when creating a deployment, insert the annotation under `spec.template.metadata`.

-   When you specify multiple specifications, you can specify vCPU and memory specifications or ECS instance types. You can also specify both of them.
    
    **Important**
    
    After the pod is created, you can check the specifications that are actually used by the pod in the `k8s.aliyun.com/eci-instance-spec` field in the YAML file of the pod. If the pod uses an ECS instance type, you are charged based on the ECS instance type. If the pod uses vCPU and memory specifications, you are charged based on the number of vCPUs and memory size.
    
-   You must specify specifications in a priority order. A maximum of five specifications can be specified.
    
-   If you want to create GPU-accelerated elastic container instances, elastic container instances that use local disks, or Arm-based elastic container instances, you can only specify corresponding specifications. The specifications that do not support the preceding features cannot be specified.
    

#### **Example 1: Specify GPU specifications**

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
        k8s.aliyun.com/eci-use-specs: "ecs.gn6i-c4g1.xlarge,ecs.gn6i-c8g1.2xlarge" # Specify a maximum of five GPU-accelerated ECS instance types at a time. 
    spec:
      containers:
      - name: nginx
        image: registry.cn-shanghai.aliyuncs.com/eci_open/nginx:1.14.2
        resources:
            limits:
              nvidia.com/gpu: "1" # The number of GPUs required by the Nginx container. The GPUs are shared. 
        ports:
        - containerPort: 80
      - name: busybox
        image: registry.cn-shanghai.aliyuncs.com/eci_open/busybox:1.30
        command: ["sleep"]
        args: ["999999"]
        resources:
            limits:
              nvidia.com/gpu: "1" # The number of GPUs required by the BusyBox container. The GPUs are shared.
```

#### **Example 2: Specify two types of specifications simultaneously**

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

## **Elastic Container Instance compute specifications**

#### **VCPU and memory specifications supported by elastic container instances**

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
    

#### **ECS instance families supported by elastic container instances**

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
    

## **More tutorials**

### **Overview of creation methods**

You can use different methods to create pods based on your business and usage scenarios. These methods correspond to different billing modes. For more information, see [Billing of elastic container instances](/help/en/eci/product-overview/elastic-container-instances#title-aw3-7hi-pol).

**Creation method**

**Billing basis**

**Description**

**References**

Specify the number of vCPUs and memory size

Based on the vCPU and memory specifications

You are charged for pods based on the vCPU and memory specifications that you specify when you create the pods. You can also specify a compute category based on your cost and performance requirements. For vCPU and memory specifications that are not supported, the system adjusts the instance specifications and charges you based on the new specifications.

-   [Specify the number of vCPUs and memory size to create a pod](/help/en/eci/user-guide/specify-the-number-of-vcpus-and-memory-size-to-create-a-pod-1#4b4c0a4021isz)
    
-   [Specify a compute category to create a pod](/help/en/eci/user-guide/specify-the-compute-category-to-create-a-pod)
    
-   [Ignore specific containers when the system adjusts resource specifications](/help/en/eci/user-guide/ignore-specific-containers-when-the-system-adjusts-resources-1#04377f8021wis)
    

Specify an ECS instance type

Based on the ECS instance type

You are charged for pods based on the ECS instance types that you specify when you create the pods. You can specify an ECS instance type as the underlying support of your Elastic Container Instance pod based on your business requirements. This way, the pod can obtain the specific capabilities of the ECS instance type. For example, if you specify the ecs.gn6i-c4g1.xlarge instance type, the pod can obtain the GPU-accelerated capabilities.

-   [ECS instance types of the x86 architecture](/help/en/eci/user-guide/specifying-the-x86-specification-to-create-a-pod)
    
-   [GPU-accelerated ECS instance types](/help/en/eci/user-guide/create-a-pod-by-specifying-the-gpu-specification)
    
-   [ECS instance types that use a local disk](/help/en/eci/user-guide/create-a-pod-by-specifying-the-specifications-of-a-local-disk)
    
-   [Arm-based ECS instance types](/help/en/eci/user-guide/create-a-pod-by-specifying-the-arm-specification)
    

Set ECS instance families or instance family generations for filtering while you specify specifications of vCPU and memory

Based on the ECS instance type

The system automatically selects a suitable ECS instance type based on the specifications of vCPU and memory and the filter conditions for ECS instance families or instance family generations that you specify when you create the pod. You are charged based on the actually used ECS instance type.

-   [Specify or exclude ECS instance families to create a pod](/help/en/eci/user-guide/specify-or-exclude-specific-ecs-instance-families-to-create-a-pod-1)
    
-   [Specify or exclude specific generations of ECS instance families to create a pod](/help/en/eci/user-guide/specify-or-exclude-specific-generations-of-ecs-instance-families-to-create-a-pod)
    

**Important**

Pods support the x86 architecture (default) and ARM architecture. For information about how to create pods of the ARM architecture, see [Schedule pods to an ARM-based virtual node](/help/en/eci/user-guide/scheduling-pods-to-virtual-nodes-in-the-arm-architecture).

### **Optimize usage costs**

You can use pay-as-you-go elastic container instances together with preemptible elastic container instances, reserved instances, and savings plans to reduce costs based on your business requirements.

-   Preemptible elastic container instances can be used for stateless and fault-tolerant workloads. For more information, see [Create a preemptible elastic container instance](/help/en/eci/user-guide/create-a-preemptible-elastic-container-instance-1#e2f99d20217x1).
    
-   For long-term stable workloads, we recommend that you use reserved instances or savings plans to offset the bills of pods. The following methods can be used to offset your bills based on the billing basis of pods:
    
    -   Pods for which you are charged based on the number of vCPUs and memory size: General-purpose savings plans can be used.
        
    -   Pods for which you are charged based on the ECS instance types: General-purpose savings plans, ECS compute savings plans, and reserved instances can be used.
        
    
    You can select an offset method based on your elastic container instances. For more information, see [Use reserved instances](/help/en/eci/user-guide/use-reserved-instances-1#title-quq-fv2-6j9) and [Use savings plans](/help/en/eci/user-guide/apply-savings-plans-1#title-npr-pu5-d45).
    

### **Solutions to insufficient resources**

Elastic Container Instance provides cloud resources for containers. When you create a large number of pods, some resources in the specified region and zone may be insufficient. To ensure that the pods can be created, we recommend that you specify multiple pod specifications and multiple vSwitches that are deployed in different zones. For more information, see the following topics:

-   [Configure multiple zones to create a pod](/help/en/eci/user-guide/create-pods-in-multiple-zones#df3445d022znq)
    
-   [Create pods by specifying multiple specifications](/help/en/eci/user-guide/create-pods-by-specifying-multiple-specifications-1#fb2cc3c0228p0)
