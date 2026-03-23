In modern cloud computing and containerization environments, a pod is the smallest deployable unit in Kubernetes and typically contains one or more containers. The compute class and computing power assigned to a pod directly affect application performance and resource utilization. Container Compute Service (ACS) provides multiple compute classes and corresponding computing power to meet diverse business requirements. This topic describes the prerequisites, limits, and key features of ACS pods. Key features include security isolation, CPU, memory, and GPU resource configurations, image pulling, storage, networking, and log collection.

## **Compute Type Definitions**

ACS offers cost-effective CPU and GPU container compute types. Each compute type provides different resource configurations to suit specific business scenarios.

**Compute Type**

**Label**

**Features**

General-purpose (default)

general-purpose

Suitable for most stateless microservice applications, Java web applications, and compute-intensive tasks.

Compute-optimized instance

performance

Suitable for performance-intensive business scenarios, such as CPU-based AI/ML training and inference, and High Performance Computing (HPC) batch processing.

GPU Type

gpu

Suitable for heterogeneous computing scenarios like AI/HPC, such as single-GPU and multi-GPU inference, and GPU parallel computing.

High-performance network GPU (gpu-hpn)

gpu-hpn

Suitable for heterogeneous computing scenarios like AI/HPC, such as GPU distributed training, distributed inference, and GPU high-performance computing.

Specify the compute type for a pod using the `alibabacloud.com/compute-class` label. The following example orchestration for an Nginx application specifies the compute types as general-purpose `general-purpose`, GPU `gpu`, and high-performance network GPU `gpu-hpn`.

## General-purpose

```
apiVersion: apps/v1 
kind: Deployment
metadata:
  name: nginx-deployment
  labels:
    app: nginx
spec:
  replicas: 2
  selector:
    matchLabels:
      app: nginx
  template:
    metadata:
      labels:
        app: nginx
        alibabacloud.com/compute-class: general-purpose 
    spec:
      containers:
      - name: nginx
        image: registry.cn-hangzhou.aliyuncs.com/acs-sample/nginx:latest
```

## GPU instance type

```
apiVersion: apps/v1 
kind: Deployment
metadata:
  name: nginx-deployment
  labels:
    app: nginx
spec:
  replicas: 2
  selector:
    matchLabels:
      app: nginx
  template:
    metadata:
      labels:
        app: nginx
        # Specify the compute-class as gpu type
        alibabacloud.com/compute-class: "gpu"
        # Specify the GPU model as example-model. Fill in as needed, such as T4.
        alibabacloud.com/gpu-model-series: "example-model"
    spec:
      containers:
      - name: nginx
        image: registry.cn-hangzhou.aliyuncs.com/acs-sample/nginx:latest
        resources:
          limits:
            cpu: 4
            memory: "8Gi"
            nvidia.com/gpu: "1" # Specify the GPU quantity. Fill in the resource label and quantity as needed. 
          requests:
            cpu: 4
            memory: "8Gi"
            nvidia.com/gpu: "1" # Specify the GPU quantity. Fill in the resource label and quantity as needed.
```

**Note**

For supported GPU models and specifications, see the [Accelerated Computing Instance Types Specifications Table](#3f930f49a6cb7).

## High-performance network GPU

```
apiVersion: apps/v1 
kind: Deployment
metadata:
  name: nginx-deployment
  labels:
    app: nginx
spec:
  replicas: 2
  selector:
    matchLabels:
      app: nginx
  template:
    metadata:
      labels:
        app: nginx
        # Specify the compute-class as gpu-hpn type 
        alibabacloud.com/compute-class: "gpu-hpn"
    spec:
      containers:
      - name: nginx
        image: registry.cn-hangzhou.aliyuncs.com/acs-sample/nginx:latest
        resources:
          limits:
            cpu: 4
            memory: "8Gi"
            nvidia.com/gpu: "1" # Specify the GPU quantity. Fill in the resource label and quantity as needed. 
          requests:
            cpu: 4
            memory: "8Gi"
            nvidia.com/gpu: "1" # Specify the GPU quantity. Fill in the resource label and quantity as needed.
```

**Note**

To use high-performance network GPUs in ACS, you must first create a [GPU-HPN capacity reservation](/help/en/cs/user-guide/gpu-hpn-capacity-reservation).

## Computing Power Quality Definition

ACS currently supports two computing power Quality of Service (QoS) types. Each QoS type provides different resource guarantees to match specific business scenarios.

**Computing Power QoS**

**Label**

**Features**

**Typical Scenarios**

Default

default

-   Experiences some computing power fluctuations.
    
-   No forced instance eviction occurs. Instance failures are resolved through hot migration or user-triggered eviction notifications.
    

-   Microservice applications
    
-   Web applications
    
-   Compute-intensive tasks
    

BestEffort

best-effort

-   Experiences some computing power fluctuations.
    
-   Forced instance preemption and eviction may occur. You receive an event notification 5 minutes before eviction.
    

-   Big data computing
    
-   Audio and video transcoding
    
-   Batch processing tasks
    

Specify the computing power QoS for a pod using the `alibabacloud.com/compute-qos` label. The following example orchestration for an Nginx application specifies the computing power QoS as default `default`.

```
apiVersion: apps/v1 
kind: Deployment
metadata:
  name: nginx-deployment
  labels:
    app: nginx
spec:
  replicas: 2
  selector:
    matchLabels:
      app: nginx
  template:
    metadata:
      labels:
        app: nginx
        alibabacloud.com/compute-qos: default
    spec:
      containers:
      - name: nginx
        image: registry.cn-hangzhou.aliyuncs.com/acs-sample/nginx:latest 
```

**Note**

-   ACS computing power QoS definitions differ from [Kubernetes native QoS types](https://kubernetes.io/docs/concepts/workloads/pods/pod-qos). Currently, the Default computing power QoS class maps to Kubernetes’ Guaranteed QoS class.
    
-   BestEffort instances use dynamic stock. In production environments, prioritize BestEffort instances when stock is available and automatically fall back to the default QoS class when BestEffort instances are out of stock. For more information, see [Custom Resource Scheduling Policies](/help/en/cs/user-guide/custom-resource-priority-scheduling#095649ebeaybl).
    

## **Mapping Between Compute Types and Computing Power QoS**

**Compute Type (Label)**

**Supported Computing Power QoS (Label)**

General-purpose (general-purpose)

Default (default), BestEffort (best-effort)

Compute-optimized instance

Default (default), BestEffort (best-effort)

GPU (gpu)

Default (default), BestEffort (best-effort)

High-performance network GPU (gpu-hpn)

Default (default)

## Specify CPU Brand

The general-purpose and compute-optimized instance compute types support CPUs from Intel and AMD.

You can specify the CPU vendor by adding the `alibabacloud.com/cpu-vendors` annotation to a Pod or by defining the `alibabacloud.com/cpu-vendors` annotation in the Pod template of a workload. Currently, to specify AMD CPUs, you must [submit a ticket](https://smartservice.console.alibabacloud.com/service/create-ticket-intl?activeTabKey=1) to enable whitelist support. If you specify this annotation for computing power types other than General-purpose and Performance-enhanced, an error is returned indicating that specifying a CPU vendor is not supported. The supported values for this annotation include the following:

**Key**

**Value**

**Description**

`alibabacloud.com/cpu-vendors`

intel (default)

Specifies Intel as the CPU brand. If not specified, the default value is "intel".

amd

Specifies AMD as the CPU brand.

intel,amd

Specifies Intel or AMD as the CPU brand. The system creates an instance with a suitable CPU brand based on inventory availability. When multiple values are provided, custom ordering is not supported.

After instance creation, view the actual CPU brand used by checking the value of the `alibabacloud.com/cpu-vendor` label in the pod YAML.

The following example orchestration for an Nginx application specifies the CPU brand as `amd`.

```
apiVersion: apps/v1 
kind: Deployment
metadata:
  name: nginx-deployment
  labels:
    app: nginx
spec:
  replicas: 2
  selector:
    matchLabels:
      app: nginx
  template:
    metadata:
      labels:
        app: nginx
        alibabacloud.com/compute-class: general-purpose
        alibabacloud.com/compute-qos: default
      annotations:
        alibabacloud.com/cpu-vendors: amd
    spec:
      containers:
      - name: nginx
        image: registry.cn-hangzhou.aliyuncs.com/acs-sample/nginx:latest 
```

**Warning**

Do not use ACS system tags—such as `alibabacloud.com/compute-class`, `alibabacloud.com/compute-qos`, and `alibabacloud.com/cpu-vendor`—as filter labels in workload `matchLabels`. The system may modify these labels, causing controllers to frequently recreate pods and affecting application stability.

## **Core Features**

**Feature**

**Description**

Security isolation

As a secure and reliable Serverless container runtime environment, each ACS Pod instance is strongly isolated at the underlying layer through lightweight sandboxed container technology. Instances do not affect each other. Instances are also distributed across different physical machines as much as possible during scheduling, further ensuring high availability.

CPU/Memory/GPU/EphemeralStorage Resource Specification Configuration

-   Specify resource requests for CPU, Memory, EphemeralStorage, and GPU for containers: Configure resource requests (`resources.requests`) for CPU, Memory, EphemeralStorage, and GPU for individual containers using standard Kubernetes methods. ACS Pod resources are the sum of resources required by all containers within the Pod. ACS automatically normalizes Pod specifications.
    
-   Specify resource limits for CPU, Memory, EphemeralStorage, and GPU for containers: Limit resource usage (`resources.limits`) for CPU, Memory, EphemeralStorage, and GPU for individual containers using standard Kubernetes methods. If not specified, the default resource limit for a single container is the sum of resources for all containers in the normalized Pod.
    

Image

By default, each time an ACS pod is restarted, it pulls container images from a remote registry through the VPC associated with the pod. If the image is a public image, you must configure a NAT gateway for the VPC. We recommend that you store your container images in Alibaba Cloud Container Registry (ACR) to reduce image pull time through the VPC network. Additionally, for private images on ACR, ACS provides a [passwordless image pull feature for ACR images](/help/en/cs/user-guide/exempting-the-miracular-acr-image) for your convenience.

Storage

ACS supports four types of persistent storage: cloud disk, NAS, OSS, and CPFS.

-   Cloud disk
    
    -   Disks support Enterprise SSDs (ESSDs), ESSD AutoPL disks, standard SSDs, and ultra disks. You can select the corresponding disk type as needed. For more information, see [Disk Volumes Overview](/help/en/doc-detail/2584595.html#section-fm9-xv2-0ny).
        
    -   ACS lets you dynamically provision disks as persistent volumes (PVs). For more information, see [Using Dynamically Provisioned Volumes for Cloud Disks](/help/en/cs/user-guide/use-cloud-disk-dynamic-storage-volumes).
        
-   NAS
    
    -   You can use statically provisioned NAS volumes to mount Capacity and Extreme NAS file systems as volumes. If you use dynamically provisioned NAS volumes, Capacity NAS file systems are mounted by default. For more information, see [Detailed description](/help/en/nas/product-overview/general-purpose-nas-file-systems).
        
    -   Supports creating PVs both dynamically and statically. For more information, see [Overview of NAS volumes](/help/en/doc-detail/2584600.html).
        
-   OSS
    
    -   ACS lets you statically provision disks as PVs. For more information, see [Using OSS Static Persistent Volumes](/help/en/cs/user-guide/oss-child-node-1).
        
-   CPFS
    
    -   ACS lets you statically provision disks as PVs. For more information, see [Using CPFS Static Persistent Volumes](/help/en/cs/user-guide/use-cpfs-smart-edition-static-storage-volume).
        

Network

An ACS Pod uses an independent Pod IP by default, occupying one Elastic Network Interface (ENI) on the vSwitch.

In an ACS cluster environment, connect Pods as follows:

-   Access directly using the Pod IP.
    
-   An ACS pod can use a LoadBalancer Service. For more information, see [Expose applications using an existing Server Load Balancer](/help/en/cs/user-guide/expose-an-application-by-using-an-existing-slb-service).
    
-   An ACS pod can use the cluster IP address of a ClusterIP Service to access the backend pods of the Service. For more information, see [Create a ClusterIP type service](/help/en/cs/user-guide/create-a-virtual-cluster-ip-service).
    
-   Attach an EIP: You can either automatically create an EIP or attach it to an existing EIP instance for an ACS pod. For more information, see [Attach an EIP to a pod by configuring an annotation](/help/en/cs/user-guide/mount-an-independent-public-network-eip-for-a-pod/).
    

Log Collection

Configure environment variables directly on the Pod to collect `stdout` or file logs and send them to Alibaba Cloud Simple Log Service (SLS).

## Resource Specifications

**Warning**

In an ACS cluster, GPU and GPU-HPN compute pod specifications are automatically normalized upon submission—for example, GPU compute pods are uniformly normalized to Guaranteed QoS, where Request equals Limit. When using ACS GPU computing power elastically through other channels, such as ACK clusters or ACK One clusters, resource specification normalization is not reflected in pod metadata. Ensure that the pod’s QoS remains unchanged before and after submission—for example, GPU compute types must maintain Guaranteed QoS upon submission—to prevent pod status update failures.

### **General Computing Types**

## General-purpose Compute Type

**vCPU**

**Memory (GiB)**

**Memory Step Size (GiB)**

**Network Bandwidth (Egress + Ingress) (Gbits/s)**

**Storage**

0.25

0.5, 1, 2

N/A

0.08

Up to 30 GiB of storage is free. For storage exceeding 30 GiB, you are billed for the excess. The maximum supported configuration is 512 GiB.

If you need additional storage space, extend it by mounting persistent volumes such as NAS.

0.5

1~4

1

0.08

1

1~8

0.1

1.5

2~12

1

2

2~16

2.5

3~20

1.5

3

3~24

3.5

4~28

4

4~32

4.5

5~36

5

5~40

5.5

6~44

6

6~48

6.5

7~52

2.5

7

7~56

7.5

8~60

8

8~64

8.5

9~68

9

9~72

9.5

10~76

10

10~80

10.5

11~84

11

11~88

11.5

12~92

12

12~96

12.5

13~100

3

13

13~104

13.5

14~108

14

14~112

14.5

15~116

15

15~120

15.5

16~124

16

16~128

24

24, 48, 96, 192

N/A

4.5

32

32, 64, 128, 256

N/A

6

48

48, 96, 192, 384

N/A

12.5

64

64, 128, 256, 512

N/A

20

## **Performance Calculation Type**

**vCPU**

**Memory (GiB)**

**Memory Step Size (GiB)**

**Network Bandwidth (Egress + Ingress) (Gbits/s)**

**Storage**

0.25

0.5, 1, 2

N/A

0.1

Up to 30 GiB of storage is free. For storage exceeding 30 GiB, you are billed for the excess. The maximum supported configuration is 512 GiB.

If you need additional storage space, extend it by mounting persistent volumes such as NAS.

0.5

1~4

1

0.5

1

1~8

1.5

2~12

2

2~16

1.5

2.5

3~20

3

3~24

3.5

4~28

4

4~32

2

4.5

5~36

5

5~40

5.5

6~44

6

6~48

2.5

6.5

7~52

7

7~56

7.5

8~60

8

8~64

3

8.5

9~68

9

9~72

9.5

10~76

10

10~80

3.5

10.5

11~84

11

11~88

11.5

12~92

12

12~96

4

12.5

13~100

13

13~104

13.5

14~108

14

14~112

4.5

14.5

15~116

15

15~120

15.5

16~124

16

16~128

6

24

24, 48, 96, 192

N/A

8

32

32, 64, 128, 256

N/A

10

48

48, 96, 192, 384

N/A

16

64

64, 128, 256, 512

N/A

25

**Important**

To use an ACS pod with more than 16 vCPUs or more than 128 GiB of memory, [submit a ticket](https://smartservice.console.alibabacloud.com/service/create-ticket-intl?activeTabKey=1) to request approval.

If you do not specify resource requests or limits—that is, neither `.resources.requests` nor `.resources.limits` is set—the default resources for a single pod are 2 vCPUs and 4 GiB of memory.

ACS automatically normalizes pod specifications. It calculates the maximum cumulative value of `.resources.requests` or `.resources.limits` across all containers and normalizes it to the closest supported specification. The normalized specification appears in the `alibabacloud.com/pod-use-spec` annotation. If upward normalization occurs, ACS adjusts the container’s `.resources.requests` or `.resources.limits` to ensure full utilization of paid resources.

#### **ACS Pod Specification Normalization Logic**

For example, if the cumulative value of `.resources.requests` or `.resources.limits` is 2 vCPUs and 3.5 GiB of memory, ACS automatically normalizes the pod’s specifications to 2 vCPUs and 4 GiB of memory at startup. The additional resources apply to the first container, and the pod receives the annotation `alibabacloud.com/pod-use-spec=2-4Gi`. Resource declaration examples follow:

```
apiVersion: v1 
kind: Pod
metadata:
  labels:
    app: nginx
    alibabacloud.com/compute-class: general-purpose
    alibabacloud.com/compute-qos: default
  name: nginx
spec:
  containers:
  - name: nginx
    image: anolis-registry.cn-zhangjiakou.cr.aliyuncs.com/openanolis/nginx:1.14.1-8.6
    ports:
    - containerPort: 80
    resources:
      requests:
        cpu: 2 # Declare CPU as 2 vCPUs
        memory: "3.5Gi" # Declare memory as 3.5 GiB
        ephemeral-storage: "30Gi" # Declare storage space as 30 GiB
```

Resource declaration after normalization:

```
apiVersion: v1 
kind: Pod
metadata:
  annotations:
    alibabacloud.com/pod-use-spec: "2-4Gi"
  labels:
    app: nginx
    alibabacloud.com/compute-class: general-purpose
    alibabacloud.com/compute-qos: default
  name: nginx
spec:
  containers:
  - name: nginx
    image: anolis-registry.cn-zhangjiakou.cr.aliyuncs.com/openanolis/nginx:1.14.1-8.6
    ports:
    - containerPort: 80
    resources:
      requests:
        cpu: 2 # Declare CPU as 2 vCPUs
        memory: "4Gi" # Declare memory as 4 GiB
        ephemeral-storage: "30Gi" # Declare storage space as 30 GiB
```

#### **Specify Pod Specifications Using Annotations**

**Scope**

-   Supports only general-purpose and compute-optimized instance CPU pods.
    
-   The maximum specification supported by annotations is 64 vCPU/512 GiB, consistent with the [general computing type specifications](#070ec7ba83qg2).
    

**Usage**

For workloads with [Quality of Service (QoS)](https://kubernetes.io/docs/concepts/workloads/pods/pod-qos/) set to `Burstable` (`.resources.limits` > `.resources.requests`), declare the target pod resource specifications using the annotation `alibabacloud.com/pod-required-spec: "X-YGi"`. The format must be `<CPU>-<Memory>`, where CPU is specified in cores (for example, "2" means 2 vCPUs) and memory in GiB (for example, "4Gi" means 4 GiB). Detailed snapping and usage rules follow:

1.  If the resource specification format is invalid—for example, if units are missing, Mi is used, or the order is reversed—the pod creation fails.
    
2.  If the annotation is set but no container `.resources` are defined, the system strictly normalizes according to the annotation and does not revert to default specifications (for example, 2 vCPUs/4 GiB).
    
3.  If the annotation’s declared value is less than the sum of all container `.resources.requests`, pod creation fails.
    
4.  If the annotation’s declared value exceeds the sum of all container `.resources.limits`, the system uses the annotation’s declared value as the target normalized specification for the pod.
    
    > In multi-container pods, the first container is designated as the primary container. The difference between the annotation’s declared value and the sum of `limits` (declared value minus current sum of limits) is allocated first to the primary container’s `.resources.limits` (adjusting `.resources.requests` if necessary) to align overall pod resources with the target specification.
    

**Usage Example**

For example, if you configure `alibabacloud.com/pod-required-spec: "2-4Gi"`, and the cumulative value of the container’s `.resources.requests` or `.resources.limits` is 1 vCPU and 2 GiB of memory, ACS automatically normalizes the pod’s specifications to 2 vCPUs and 4 GiB of memory at startup. The additional resources apply to the first container, and the pod receives the annotation `alibabacloud.com/pod-use-spec=2-4Gi`.

Resource declaration examples follow:

> Here, `.resources.limits.memory` is 3.5 GiB.

```
apiVersion: v1 
kind: Pod
metadata:
  labels:
    app: nginx
    alibabacloud.com/compute-class: general-purpose
    alibabacloud.com/compute-qos: default
  annotations:
    alibabacloud.com/pod-required-spec: "2-4Gi"
  name: nginx
spec:
  containers:
  - name: nginx
    image: anolis-registry.cn-zhangjiakou.cr.aliyuncs.com/openanolis/nginx:1.14.1-8.6
    ports:
    - containerPort: 80
    resources:
      requests:
        cpu: 1 # Declare CPU as 1 vCPU
        memory: "2Gi" # Declare memory as 2 GiB
        ephemeral-storage: "30Gi" # Declare storage space as 30 GiB
      limits:
        cpu: 2 # Declare CPU as 2 vCPUs
        memory: "3.5Gi" # Declare memory as 3.5 GiB
        ephemeral-storage: "30Gi" # Declare storage space as 30 GiB
```

Resource declaration after normalization:

> Here, `.resources.limits.memory` is normalized from 3.5 GiB to 4 GiB.

```
apiVersion: v1 
kind: Pod
metadata:
  annotations:
    alibabacloud.com/pod-required-spec: "2-4Gi"
    alibabacloud.com/pod-use-spec: "2-4Gi"
  labels:
    app: nginx
    alibabacloud.com/compute-class: general-purpose
    alibabacloud.com/compute-qos: default
  name: nginx
spec:
  containers:
  - name: nginx
    image: anolis-registry.cn-zhangjiakou.cr.aliyuncs.com/openanolis/nginx:1.14.1-8.6
    ports:
    - containerPort: 80
    resources:
      requests:
        cpu: 1 # Declare CPU as 1 vCPU
        memory: "2Gi" # Declare memory as 2 GiB
        ephemeral-storage: "30Gi" # Declare storage space as 30 GiB
      limits:
        cpu: 2 # Declare CPU as 2 vCPUs
        memory: "4Gi" # Declare memory as 4 GiB
        ephemeral-storage: "30Gi" # Declare storage space as 30 GiB
```

### **Accelerated Compute Types**

The following GPU card types are supported by ACS. Specifications vary by card type. To obtain the exact specifications mapping, [submit a ticket](https://smartservice.console.alibabacloud.com/service/create-ticket-intl?activeTabKey=1).

## GU8TF

**GPU (Cards)**

**vCPU**

**Memory (GiB)**

**Memory Step Size (GiB)**

**Storage (GiB)**

1 (96 GiB GPU memory)

2

2 ~ 16

1

30 ~ 256

4

4 ~ 32

1

6

6 ~ 48

1

8

8 ~ 64

1

10

10 ~ 80

1

12

12 ~ 96

1

14

14 ~ 112

1

16

16 ~ 128

1

22

22, 32, 64, 128

N/A

2 (96 GiB × 2 GPU memory)

16

16 ~ 128

1

30 ~ 512

32

32, 64, 128, 230

N/A

46

64, 128, 230

N/A

4 (96 GiB × 4 GPU memory)

32

32, 64, 128, 256

N/A

30 ~ 1024

64

64, 128, 256, 460

N/A

92

128, 256, 460

N/A

8 (96 GiB × 8 GPU memory)

64

64, 128, 256, 512

N/A

30 ~ 2048

128

128, 256, 512, 920

N/A

184

256, 512, 920

N/A

## GU8TEF

**GPU (Cards)**

**vCPU**

**Memory (GiB)**

**Memory Step Size (GiB)**

**Storage (GiB)**

1 (141 GiB GPU memory)

2

2 ~ 16

1

30 ~ 768

4

4 ~ 32

1

6

6 ~ 48

1

8

8 ~ 64

1

10

10 ~ 80

1

12

12 ~ 96

1

14

14 ~ 112

1

16

16 ~ 128

1

22

22, 32, 64, 128, 225

N/A

2 (141 GiB × 2 GPU memory)

16

16 ~ 128

1

30 ~ 1536

32

32, 64, 128, 256

N/A

46

64, 128, 256, 450

N/A

4 (141 GiB × 4 GPU memory)

32

32, 64, 128, 256

N/A

30 ~ 3072

64

64, 128, 256, 512

N/A

92

128, 256, 512, 900

N/A

8 (141 GiB × 8 GPU memory)

64

64, 128, 256, 512

N/A

30 ~ 6144

128

128, 256, 512, 1024

N/A

184

256, 512, 1024, 1800

N/A

## L20(GN8IS)

**GPU (Cards)**

**vCPU**

**Memory (GiB)**

**Memory Step Size (GiB**

**Storage (GiB)**

1 (48 GiB GPU memory)

2

2 ~ 16

1

30 ~ 256

4

4 ~ 32

1

6

6 ~ 48

1

8

8 ~ 64

1

10

10 ~ 80

1

12

12 ~ 96

1

14

14 ~ 112

1

16

16 ~ 120

1

2 (48 GiB × 2 GPU memory)

16

16 ~ 128

1

30 ~ 512

32

32, 64, 128, 230

N/A

4 (48 GiB × 4 GPU memory)

32

32, 64, 128, 256

N/A

30 ~ 1024

64

64, 128, 256, 460

N/A

8 (48 GiB × 8 GPU memory)

64

64, 128, 256, 512

N/A

30 ~ 2048

128

128, 256, 512, 920

N/A

### L20X (GX8SF)

**GPU (Cards)**

**vCPU**

**Memory (GiB)**

**Memory Step Size (GiB)**

**Storage (GiB)**

8 (141 GiB × 8 GPU memory)

184

1800

N/A

30 ~ 6144

## P16EN

**GPU (Cards)**

**vCPU**

**Memory (GiB)**

**Memory Step Size (GiB)**

**Storage (GiB)**

1 (96 GiB GPU memory)

2

2~16

1

30 ~ 384

4

4~32

1

6

6~48

1

8

8~64

1

10

10~80

1

2 (96 GiB × 2 GPU memory)

4

4~32

1

30 ~ 768

6

6~48

1

8

8~64

1

16

16~128

1

22

32, 64, 128, 225

N/A

4 (96 GiB × 4 GPU memory)

8

8~64

1

30 ~ 1536

16

16~128

1

32

32, 64, 128, 256

N/A

46

64, 128, 256, 450

N/A

8 (96 GiB × 8 GPU memory)

16

16~128

1

30 ~ 3072

32

32, 64, 128, 256

N/A

64

64, 128, 256, 512

N/A

92

128, 256, 512, 900

N/A

16 (96 GiB × 16 GPU memory)

32

32, 64, 128, 256

N/A

30 ~ 6144

64

64, 128, 256, 512

N/A

128

128, 256, 512, 1024

N/A

184

256, 512, 1024, 1800

N/A

## G49E

**GPU (Cards)**

**vCPU**

**Memory (GiB)**

**Memory Step Size (GiB)**

**Storage (GiB)**

1 (48 GiB GPU memory)

2

2~16

1

30 ~ 256

4

4~32

1

6

6~48

1

8

8~64

1

10

10~80

1

12

12~96

1

14

14~112

1

16

16~120

1

2 (48 GiB × 2 GPU memory)

16

16~128

1

30 ~ 512

32

32, 64, 128, 230

N/A

4 (48 GiB × 4 GPU memory)

32

32, 64, 128, 256

N/A

30 ~ 1024

64

64, 128, 256, 460

N/A

8 (48 GiB × 8 GPU memory)

64

64, 128, 256, 512

N/A

30 ~ 2048

128

128, 256, 512, 920

N/A

## T4

**GPU (Cards)**

**vCPU**

**Memory (GiB)**

**Memory Step Size (GiB)**

**Storage (GiB)**

1 (16 GiB GPU memory)

2

2~8

1

30 ~ 1536

4

4~16

1

6

6~24

1

8

8~32

1

10

10~40

1

12

12~48

1

14

14~56

1

16

16~64

1

24

24, 48, 90

N/A

30 ~ 1536

2 (16 GiB × 2 GPU memory)

16

16~64

1

24

24, 48, 96

N/A

32

32, 64, 128

N/A

48

48, 96, 180

N/A

## A10

**GPU (Cards)**

**vCPU**

**Memory (GiB)**

**Memory Step Size (GiB)**

**Storage (GiB)**

1 (24 GiB GPU memory)

2

2~8

1

30 ~ 256

4

4~16

1

6

6~24

1

8

8~32

1

10

10~40

1

12

12~48

1

14

14~56

1

16

16~60

1

2 (24 GiB × 2 GPU memory)

16

16~64

1

30 ~ 512

32

32, 64, 120

N/A

4 (24 GiB × 4 GPU memory)

32

32, 64, 128

N/A

30 ~ 1024

64

64, 128, 240

N/A

8 (24 GiB × 8 GPU memory)

64

64, 128, 256

N/A

30 ~ 2048

128

128, 256, 480

N/A

## G59

**GPU (Cards)**

**vCPU**

**Memory (GiB)**

**Memory Step Size (GiB)**

**Storage (GiB)**

**Networking**

1 (32 GiB GPU memory)

2

2 ~ 16

1

30 ~ 256

1 Gbps per vCPU

4

4 ~ 32

1

6

6 ~ 48

1

8

8 ~ 64

1

10

10 ~ 80

1

12

12 ~ 96

1

14

14 ~ 112

1

16

16 ~ 128

1

22

22, 32, 64, 128

N/A

2 (32 GiB × 2 GPU memory)

16

16 ~ 128

1

30 ~ 512

32

32, 64, 128, 256

N/A

46

64, 128, 256, 360

N/A

4 (32 GiB × 4 GPU memory)

32

32, 64, 128, 256

N/A

30 ~ 1024

64

64, 128, 256, 512

N/A

92

128, 256, 512, 720

N/A

8 (32 GiB × 8 GPU memory)

64

64, 128, 256, 512

N/A

30 ~ 2048

128

128, 256, 512, 1024

N/A

100 Gbps

184

256, 512, 1024, 1440

N/A

**Important**

All listed card types share identical specifications for pay-as-you-go, capacity reservation, and BestEffort scenarios. Specifically:

-   For specifications with 16 GiB or less of memory, memory overhead is covered by ACS. For specifications exceeding 16 GiB, memory overhead is distributed to the corresponding pods. Reserve sufficient resources for your applications to ensure stable operation.
    
-   System disks with 30 GiB or less capacity—including image size—do not incur additional charges. You are billed only for capacity exceeding 30 GiB.
    

##### **Automatic Specification Normalization**

If you do not specify resource requests or limits, a GPU container pod selects the smallest supported specification based on the GPU type—for example, 2 vCPUs, 2 GiB memory, and 1 GPU card.

ACS automatically normalizes unsupported specifications. After normalization, the container’s `.resources.requests` remain unchanged, but the pod’s normalized specification appears in the `alibabacloud.com/pod-use-spec` annotation. If a container’s specified resource limit (`resources.limits`) exceeds the pod’s normalized specification, ACS sets the container’s resource limit to match the pod’s specification.

**Note**

-   CPU and memory normalization logic: If the sum of resources across all containers is 2 vCPUs and 3.5 GiB of memory, ACS normalizes the pod to 2 vCPUs and 4 GiB of memory. The additional resources apply to the first container, and the pod exposes the annotation `alibabacloud.com/pod-use-spec=2-4Gi`. If a single container specifies a resource limit of 3 vCPUs and 5 GiB of memory, that container’s limit becomes 2 vCPUs and 5 GiB.
    
-   GPU normalization logic: If the number of GPUs requested is not supported, pod submission fails.
    

#### **GPU-HPN compute class**

For high-performance network GPU instances, ACS enforces resource alignment by setting the limit equal to the request. Additionally, pod resource specifications are constrained by node capacity. If a pod’s specifications exceed the node’s capacity, the pod enters a pending state due to insufficient resources. For details about node specifications, see the purchasing specifications.

## Kubernetes Application Limitations

ACS integrates seamlessly with Kubernetes using virtual nodes. Therefore, ACS pod instances do not run on centralized real nodes. Instead, they are distributed across Alibaba Cloud’s global resource pool. Due to public cloud security constraints and inherent limitations of virtual nodes, ACS does not support certain Kubernetes features, such as HostPath and DaemonSet. The following table details these limitations.

**Limitation**

**Description**

**Policy for Validation Failure**

**Recommended Alternative**

DaemonSet

Restricts the use of DaemonSet-type workloads.

Pod starts but does not function normally.

Deploy multiple containers in a pod using a Sidecar pattern.

Service of type NodePort

Maps host ports to containers.

Submission is rejected.

Use a Server Load Balancer of type `type=LoadBalancer`.

HostNetwork

Restricts mapping host ports to containers.

Automatically rewritten to `HostNetwork=false`.

Not required.

HostIPC

Restricts inter-process communication between container processes and host processes.

Automatically rewritten to `HostIPC=false`.

Not required

HostPID

Restricts containers from accessing the host’s PID namespace.

Automatically rewritten to `HostPID=false`.

Not required

HostUsers

Restricts the use of user namespaces.

Automatically rewritten to an empty value.

Not required

DNSPolicy

Restricts the use of specific DNSPolicy values.

**Note**

-   None
    
-   Default
    
-   ClusterFirst
    

-   If configured as ClusterFirstWithHostNet, it is rewritten to ClusterFirst.
    
-   All other policies are rejected upon submission.
    

Use only allowed values.

Container Environment Variable Format

Beyond standard Kubernetes API server constraints, for GPU and GPU-HPN compute classes, ACS requires environment variable names to contain only letters, numbers, underscores, dots, or hyphens. The first character cannot be a number.

Pod startup fails.

Use environment variable names that comply with these requirements.

Number of Container Environment Variables

Due to Linux system constraints on the parameter list length for system calls, the number of environment variables per container must be limited—approximately 2000 or fewer.

In addition, if a pod enables enableServiceLinks (default is true), service information for all services in the current namespace is injected into the container as environment variables, which may cause the total count to exceed system limits.

Pod startup fails.

Reduce the number of container environment variables. For deployments with many services, disable the enableServiceLinks configuration for the pod.

## Reserved ports

The following table lists the ports reserved by ACS. Avoid using these ports when deploying services.

**Port**

**Description**

111, 10250, 10255

Used by the ACS cluster for interfaces such as exec, logs, and metrics.
