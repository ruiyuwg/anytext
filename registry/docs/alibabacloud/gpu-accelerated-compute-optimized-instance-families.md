GPU-accelerated compute-optimized instances provide high performance and high parallel computing capabilities. They are suitable for large-scale parallel computing scenarios and help improve computing performance and efficiency for your business. This topic describes the features of GPU-accelerated compute-optimized instance families of Elastic Compute Service (ECS) and lists the instance types in each family.

**Note**

-   [**View instance availability by region**](https://ecs-buy.alibabacloud.com/instanceTypes/#/instanceTypeByRegion)**:** Instance types may vary by region. We recommend that you check the purchase availability in each region.
    
-   [**View instance type selection guide**](/help/en/ecs/user-guide/best-practices-for-instance-type-selection)**:** First, determine which instance families are suitable for your business scenario. Then, use this topic to select a specific instance type.
    
-   [**View instance metric descriptions**](/help/en/ecs/user-guide/instance-specification-naming-and-classification#ad60bb6239ts8)**:** Read this topic to understand the metrics for instance types.
    
-   [**Use the ECS Price Calculator**](https://www.alibabacloud.com/zh/pricing-calculator?_p_lc=1#/commodity/vm_intl)**:** You can use the price calculator to estimate instance fees.
    

**Category**

**References**

**GPU-accelerated compute-optimized instance families (gn series)**

-   [gn8v and gn8v-tee, GPU-accelerated compute-optimized instance families](#a1164d8a190gx)
    
-   [gn8is, GPU-accelerated compute-optimized instance family](#gn8is)
    
-   [gn7e, GPU-accelerated compute-optimized instance family](#aa0e2de67bbmb)
    
-   [gn7i, GPU-accelerated compute-optimized instance family](#f0fceb6eb6g8f)
    
-   [gn7, GPU-accelerated compute-optimized instance family](#e698265f930a2)
    
-   [gn6i, GPU-accelerated compute-optimized instance family](#09b66d8b1alce)
    
-   [gn6e, GPU-accelerated compute-optimized instance family](#8689b84bc6ut1)
    
-   [gn6v, GPU-accelerated compute-optimized instance family](#08db9fd1bfw0h)
    

**ECS Bare Metal Instance families**

-   [ebmgn9g, GPU-accelerated compute-optimized ECS Bare Metal Instance family](#ebmgn9g)
    
-   [ebmgn9ge, GPU-accelerated compute-optimized ECS Bare Metal Instance family](#ebmgn9ge)
    
-   [ebmgn9gc, GPU-accelerated compute-optimized ECS Bare Metal Instance family](#ebmgn9gc)
    
-   [ebmgn8v, GPU-accelerated compute-optimized ECS Bare Metal Instance family](#df9443c1ad1d8)
    
-   [ebmgn8ia, GPU-accelerated compute-optimized ECS Bare Metal Instance family](#ebmgn8ia)
    
-   [ebmgn8is, GPU-accelerated compute-optimized ECS Bare Metal Instance family](#bf0e84f367llt)
    
-   [ebmgn7e, GPU-accelerated compute-optimized ECS Bare Metal Instance family](#c845008dd8bsl)
    
-   [ebmgn7i, GPU-accelerated compute-optimized ECS Bare Metal Instance family](#section-c3o-993-wra)
    
-   [ebmgn7, GPU-accelerated compute-optimized ECS Bare Metal Instance family](#section-esc-xnn-7aa)
    
-   [ebmgn6e, GPU-accelerated compute-optimized ECS Bare Metal Instance family](#ebmgn6e)
    
-   [ebmgn6v, GPU-accelerated compute-optimized ECS Bare Metal Instance family](#ebmgn6v)
    
-   [ebmgn6i, GPU-accelerated compute-optimized ECS Bare Metal Instance family](#ebmgn6i)
    

**Not recommended (If these instance families are sold out, we recommend that you use the instance families listed above.)**

-   [gn7s, GPU-accelerated compute-optimized instance family](#gn7s)
    
-   [gn5i, GPU-accelerated compute-optimized instance family](#8ca66d3430riq)
    
-   [gn5, GPU-accelerated compute-optimized instance family](#4df07f2020cxi)
    

## gn8v and gn8v-tee, GPU-accelerated compute-optimized instance families

The gn8v and gn8v-tee instance families are available only in specific regions, including regions outside China. To use the instance families, contact Alibaba Cloud sales personnel.

-   **Introduction**:
    
    -   **gn8v**: This instance family is an 8th-generation GPU-accelerated compute-optimized instance family provided by Alibaba Cloud for AI model training and the inference tasks of ultra large language models (LLMs). This instance family consists of multiple instance types that provide one, two, four, or eight GPUs per instance.
        
    -   **gn8v-tee**: To meet security requirements for training and inferring large language models, Alibaba Cloud provides an eighth-generation instance family based on gn8v that includes the **confidential computing** feature. This instance type encrypts data during GPU computing to ensure user data security.
        
-   **Use cases**:
    
    -   Multi-GPU parallel inference computing for LLMs that have more than 70 billion parameters
        
    -   Traditional AI model training and autonomous driving training, for which each GPU delivers computing power of up to 39.5 TFLOPS in the single-precision floating-point format (FP32)
        
    -   Small and medium-sized model training scenarios that leverage the NVLink connections among the eight GPUs
        
-   **Benefits and positioning**:
    
    -   **High-speed and large-capacity GPU memory**: Each GPU is equipped with 96 GB of HBM3 memory and delivers up to 4 TB/s of memory bandwidth, which greatly accelerates model training and inference.
        
    -   **High bandwidth between GPUs**: Multiple GPUs are interconnected by using 900 GB/s NVLink connections. The efficiency of multi-GPU training and inference is much higher than that of previous generations of GPU-accelerated instances.
        
    -   **Quantization of LLMs**: This instance family supports computing power in the 8-bit floating point format (FP8) and optimizes computing power for large-scale parameter training and inference. This significantly improves the computing speed of training and inference and reduces memory usage.
        
    -   **(Only for the gn8v-tee instance family) High security**: The gn8v-tee instance family supports confidential computing capabilities that cover the full link of model inference tasks. The capabilities include CPU-based Intel Trust Domain Extensions (TDX) confidential computing and GPU-based NVIDIA Confidential Computing (CC). The confidential computing capabilities ensure the security of user inference data and enterprise models in model inference and training.
        
-   **Compute**:
    
    -   Uses the latest Cloud Infrastructure Processing Unit (CIPU) 1.0 processors.
        
        -   Decouples computing capabilities from storage capabilities, allowing you to flexibly select storage resources based on your business requirements.
            
        -   Provides bare metal capabilities to support peer-to-peer (P2P) communication between GPU-accelerated instances.
            
    -   Uses the 4th-generation Intel Xeon Scalable processors that deliver a base frequency of up to 2.8 GHz and an all-core turbo frequency of up to 3.1 GHz.
        
-   **Storage**:
    
    -   Is an instance family in which all instances are I/O optimized.
        
    -   These instances support the NVMe protocol. For more information, see [Overview of the NVMe protocol](/help/en/ecs/user-guide/nvme-protocol).
        
    -   Supports [elastic ephemeral disks](/help/en/ecs/user-guide/elastic-ephemeral-disks), [ESSDs](/help/en/ecs/user-guide/essds), [ESSD AutoPL disks](/help/en/ecs/user-guide/essd-autopl-disks), and [Regional ESSDs](/help/en/ecs/user-guide/regional-essd-disks). For information about disks, see [Overview of Block Storage](/help/en/ecs/user-guide/elastic-block-storage-devices).
        
-   **Network**:
    
    -   Supports IPv4 and IPv6. For more information about IPv6 communication, see [IPv6 communication](/help/en/ecs/user-guide/step-1-create-a-vpc-that-supports-ipv6-addressing-step-1-create-a-vpc-that-supports-ipv6-addressing).
        
    -   These instances support jumbo frames. For more information, see [Jumbo frames](/help/en/ecs/user-guide/jumbo-frame/#section-vtb-klu-z5y).
        
    -   Provides ultra-high network performance with a packet forwarding rate of up to 30,000,000 pps (for instances equipped with eight GPUs).
        
    -   Supports elastic RDMA interfaces (ERIs).
        
    -   **Note**
        
        For information about how to use ERIs, see [Enable eRDMA on an enterprise-level instance](/help/en/ecs/user-guide/configure-erdma-on-a-cpu-instance#task-2128004).
        
-   **Security**: Supports the Trusted Platform Module (vTPM) feature. This feature is supported by gn8v but not by gn8v-tee. For more information, see [Overview of trusted computing capabilities](/help/en/ecs/user-guide/overview-of-trusted-computing-capabilities).
    

gn8v includes the instance types and metric data listed in the following table.

**Instance type**

**vCPUs**

**Memory (GiB)**

**GPU memory**

**Network baseline bandwidth (Gbit/s)**

**ENIs**

**NIC queues per primary ENI**

**Private IPv4 addresses per ENI**

**IPv6 addresses per ENI**

**Maximum cloud disks**

**Disk baseline IOPS**

**Disk baseline bandwidth (GB/s)**

ecs.gn8v.4xlarge

16

96

96 GB × 1

12

8

16

30

30

17

100,000

0.75

ecs.gn8v.6xlarge

24

128

96 GB × 1

15

8

24

30

30

17

120,000

0.937

ecs.gn8v-2x.8xlarge

32

192

96 GB × 2

20

8

32

30

30

25

200,000

1.25

ecs.gn8v-4x.8xlarge

32

384

96 GB × 4

20

8

32

30

30

25

200,000

1.25

ecs.gn8v-2x.12xlarge

48

256

96 GB × 2

25

8

48

30

30

33

300,000

1.50

ecs.gn8v-8x.16xlarge

64

768

96 GB × 8

32

8

64

30

30

33

360,000

2.5

ecs.gn8v-4x.24xlarge

96

512

96 GB × 4

50

15

64

30

30

49

500,000

3

ecs.gn8v-8x.48xlarge

192

1024

96 GB × 8

100

15

64

50

50

65

1,000,000

6

gn8v-tee includes the instance types and metric data listed in the following table.

**Instance type**

**vCPUs**

**Memory (GiB)**

**GPU memory**

**Network baseline bandwidth (Gbit/s)**

**ENIs**

**NIC queues per primary ENI**

**Private IPv4 addresses per ENI**

**IPv6 addresses per ENI**

**Maximum cloud disks**

**Disk baseline IOPS**

**Disk baseline bandwidth (GB/s)**

ecs.gn8v-tee.4xlarge

16

96

96 GB × 1

12

8

16

30

30

17

100,000

0.75

ecs.gn8v-tee.6xlarge

24

128

96 GB × 1

15

8

24

30

30

17

120,000

0.937

ecs.gn8v-tee-8x.16xlarge

64

768

96 GB × 8

32

8

64

30

30

33

360,000

2.5

ecs.gn8v-tee-8x.48xlarge

192

1024

96 GB × 8

100

15

64

50

50

65

1,000,000

6

**Note**

The gn8v-tee instance family only supports Alibaba Cloud Linux 3 images. If you use a custom image built from Alibaba Cloud Linux 3 to create an instance, ensure that the kernel version is at least `5.10.134-18`.

## gn8is, GPU-accelerated compute-optimized instance family

This instance family is available only in specific regions, including regions outside China. To use the instance family, contact Alibaba Cloud sales personnel.

-   **Introduction**: gn8is is the eighth-generation GPU-accelerated compute-optimized instance family from Alibaba Cloud, developed in response to the growth of AI-generated content (AIGC) services. It uses the latest NVIDIA L20 GPUs and provides 1-GPU, 2-GPU, 4-GPU, and 8-GPU instance types, along with instance types with different CPU-to-GPU ratios, to meet various application requirements.
    
-   **Benefits and positioning**:
    
    -   **Graphics processing**: This instance family uses 4th-generation Intel Xeon Scalable high-frequency processors to provide sufficient CPU computing power for 3D modeling scenarios, which makes graphics rendering and design smoother.
        
    -   **Inference tasks**: It uses the new NVIDIA L20 GPU and provides 48 GB of video memory per GPU to accelerate inference tasks. It supports the FP8 floating-point number format and can be used with ACK containers to flexibly support the inference of various AIGC models. It is especially suitable for inference tasks on LLM models with fewer than 70 billion parameters.
        
-   **Use cases**:
    
    -   Animation, special effects for film and television, and rendering
        
    -   Generation of AIGC images and inference of LLMs
        
    -   Other general-purpose AI recognition, image recognition, and speech recognition scenarios
        
-   **Compute**:
    
    -   Uses the new NVIDIA L20 enterprise-grade GPUs.
        
        -   Support for acceleration features, such as TensorRT, and the FP8 floating-point format to improve LLM inference performance.
            
        -   Up to 48 GB of memory per GPU and support for the inference of 70B or larger LLMs on a single instance with multiple GPUs.
            
        -   Improved graphic processing capabilities. For example, after you install a GRID driver on a gn8is instance by using Cloud Assistant or an Alibaba Cloud Marketplace image, the instance can provide graphic processing performance twice that of a 7th-generation instance.
            
    -   Key parameters of NVIDIA L20:
        
        **GPU architecture**
        
        **GPU memory**
        
        **Compute performance**
        
        **Video encoding/decoding capabilities**
        
        **Inter-card connection**
        
        NVIDIA Ada Lovelace
        
        -   **Capacity:** 48 GB
            
        -   **Bandwidth:** 864 GB/s
            
        
        -   **FP64:** N/A
            
        -   **FP32:** 59.3 TFLOPS
            
        -   **FP16/BF16:** 119 TFLOPS
            
        -   **FP8/INT8:** 237 TFLOPS
            
        
        -   3 × Video Encoder (+AV1)
            
        -   3 × Video Decoder
            
        -   4 × JPEG Decoder
            
        
        -   PCIe interface: PCIe Gen4 x16
            
        -   Bandwidth: 64 GB/s
            
        
    -   Uses the latest high-frequency Intel® Xeon® processors that deliver an all-core turbo frequency of 3.9 GHz to meet complex 3D modeling requirements.
        
-   **Storage**:
    
    -   Is an instance family in which all instances are I/O optimized.
        
    -   These instances support the NVMe protocol. For more information, see [Overview of the NVMe protocol](/help/en/ecs/user-guide/nvme-protocol).
        
    -   Supports [elastic ephemeral disks](/help/en/ecs/user-guide/elastic-ephemeral-disks), [Enterprise SSDs (ESSDs)](/help/en/ecs/user-guide/essds), [ESSD AutoPL disks](/help/en/ecs/user-guide/essd-autopl-disks), and [Regional ESSDs](/help/en/ecs/user-guide/regional-essd-disks). For information about disks, see [Overview of Block Storage](/help/en/ecs/user-guide/elastic-block-storage-devices).
        
-   **Network**:
    
    -   Supports IPv4 and IPv6. For more information about IPv6 communication, see [IPv6 communication](/help/en/ecs/user-guide/step-1-create-a-vpc-that-supports-ipv6-addressing-step-1-create-a-vpc-that-supports-ipv6-addressing).
        
    -   Supports ERIs.
        
        **Note**
        
        For information about how to use ERIs, see [Enable eRDMA on an enterprise-level instance](/help/en/ecs/user-guide/configure-erdma-on-a-cpu-instance#task-2128004).
        
-   **Security**: These instances support the vTPM feature. For more information, see [Overview of trusted computing](/help/en/ecs/user-guide/overview-of-trusted-computing-capabilities).
    

gn8is includes the instance types and metric data listed in the following table.

**Instance type**

**vCPUs**

**Memory (GiB)**

**GPU**

**GPU memory**

**Network baseline bandwidth (Gbit/s)**

**ENIs**

**NIC queues per primary ENI**

**Private IPv4 addresses per ENI**

**IPv6 addresses per ENI**

**Maximum cloud disks**

**Disk baseline IOPS**

**Disk baseline bandwidth (GB/s)**

ecs.gn8is.2xlarge

8

64

L20 × 1

48 GB × 1

8

4

8

15

15

17

60,000

0.75

ecs.gn8is.4xlarge

16

128

L20 × 1

48 GB × 1

16

8

16

30

30

17

120,000

1.25

ecs.gn8is-2x.8xlarge

32

256

L20 × 2

48 GB × 2

32

8

32

30

30

33

250,000

2

ecs.gn8is-4x.16xlarge

64

512

L20 × 4

48 GB × 4

64

8

64

30

30

33

450,000

4

ecs.gn8is-8x.32xlarge

128

1024

L20 × 8

48 GB × 8

100

15

64

50

50

65

900,000

8

## gn7e, GPU-accelerated compute-optimized instance family

Features

-   **Introduction**:
    
    -   This instance family allows you to select instance types that provide different numbers of GPUs and CPUs to meet your business requirements in AI use cases.
        
    -   This instance family uses the third-generation SHENLONG architecture and doubles the average bandwidths of virtual private clouds (VPCs), networks, and disks compared with instance families of the previous generation.
        
-   **Use cases**:
    
    -   Small- and medium-scale AI training
        
    -   High-performance computing (HPC) business accelerated by using Compute Unified Device Architecture (CUDA)
        
    -   AI inference tasks that require high GPU processing capabilities or large amounts of GPU memory
        
    -   Deep learning applications, such as training applications of AI algorithms used in image classification, autonomous vehicles, and speech recognition
        
    -   Scientific computing applications that require robust GPU computing capabilities, such as computational fluid dynamics, computational finance, molecular dynamics, and environmental analytics
        
    
    **Important**
    
    When you use AI training services that feature a high communication load, such as transformer models, you must enable NVLink for GPU-to-GPU communication. Otherwise, data may be damaged due to unpredictable failures that are caused by large-scale data transmission over Peripheral Component Interconnect Express (PCIe) links. If you do not understand the topology of the communication links that are used for AI training services, [submit a ticket](https://smartservice.console.alibabacloud.com/console.htm) to obtain technical support.
    
-   **Storage**:
    
    -   Is an instance family in which all instances are I/O optimized.
        
    -   Supported disk types: [ESSDs](/help/en/ecs/user-guide/essds), [ESSD AutoPL disks](/help/en/ecs/user-guide/essd-autopl-disks), and [Regional ESSDs](/help/en/ecs/user-guide/regional-essd-disks). For more information, see [Elastic Block Storage Overview](/help/en/ecs/user-guide/elastic-block-storage-devices).
        
-   **Network**:
    
    -   Supports IPv4 and IPv6. For information about IPv6 communication, see [IPv6 communication](/help/en/ecs/user-guide/step-1-create-a-vpc-that-supports-ipv6-addressing-step-1-create-a-vpc-that-supports-ipv6-addressing).
        
    -   Provides high network performance based on large computing capacity.
        

gn7e includes the instance types and metric data listed in the following table.

**Instance type**

**vCPUs**

**Memory (GiB)**

**GPU memory**

**Network baseline bandwidth (Gbit/s)**

**Packet forwarding rate (pps)**

**NIC queues**

**ENIs**

**Private IPv4 addresses per ENI**

**IPv6 addresses per ENI**

ecs.gn7e-c16g1.4xlarge

16

125

80 GB × 1

8

3,000,000

8

8

10

1

ecs.gn7e-c16g1.8xlarge

32

250

80 GB × 2

16

6,000,000

16

8

10

1

ecs.gn7e-c16g1.16xlarge

64

500

80 GB × 4

32

12,000,000

32

8

10

1

ecs.gn7e-c16g1.32xlarge

128

1000

80 GB × 8

64

24,000,000

32

16

15

1

## gn7i, GPU-accelerated compute-optimized instance family

-   **Introduction**: This instance family uses the third-generation SHENLONG architecture to provide predictable and consistent ultra-high performance. This instance family utilizes fast path acceleration on chips to improve storage performance, network performance, and computing stability by an order of magnitude.
    
-   **Use cases**:
    
    -   Concurrent AI inference tasks that require high-performance CPUs, memory, and GPUs, such as image recognition, speech recognition, and behavior identification
        
    -   Compute-intensive graphics processing tasks that require high-performance 3D graphics virtualization capabilities, such as remote graphic design and cloud gaming
        
-   **Compute**:
    
    -   Uses NVIDIA A10 GPUs that have the following features:
        
        -   Innovative NVIDIA Ampere architecture
            
        -   Support for acceleration features, such as RTX and TensorRT
            
    -   Uses 2.9 GHz Intel® Xeon® Scalable (Ice Lake) processors that deliver an all-core turbo frequency of 3.5 GHz.
        
    -   Provides up to 752 GiB of memory, which is much larger than the memory sizes of the gn6i instance family.
        
-   **Storage**:
    
    -   Is an instance family in which all instances are I/O optimized.
        
    -   Supported disk types: [ESSDs](/help/en/ecs/user-guide/essds), [ESSD AutoPL disks](/help/en/ecs/user-guide/essd-autopl-disks), and [Regional ESSDs](/help/en/ecs/user-guide/regional-essd-disks). For more information, see [Elastic Block Storage Overview](/help/en/ecs/user-guide/elastic-block-storage-devices).
        
-   **Network**:
    
    -   Supports IPv4 and IPv6. For information about IPv6 communication, see [IPv6 communication](/help/en/ecs/user-guide/step-1-create-a-vpc-that-supports-ipv6-addressing-step-1-create-a-vpc-that-supports-ipv6-addressing).
        
    -   Provides high network performance based on large computing capacity.
        

gn7i includes the instance types and metric data listed in the following table.

**Instance type**

**vCPUs**

**Memory (GiB)**

**GPUs**

**GPU memory**

**Network baseline bandwidth (Gbit/s)**

**Packet forwarding rate (pps)**

**NIC queues**

**ENIs**

**Private IPv4 addresses per ENI**

**IPv6 addresses per ENI**

ecs.gn7i-c8g1.2xlarge

8

30

NVIDIA A10 × 1

24 GB × 1

16

1,600,000

8

4

15

15

ecs.gn7i-c16g1.4xlarge

16

60

NVIDIA A10 × 1

24 GB × 1

16

3,000,000

8

8

30

30

ecs.gn7i-c32g1.8xlarge

32

188

NVIDIA A10 × 1

24 GB × 1

16

6,000,000

12

8

30

30

ecs.gn7i-c32g1.16xlarge

64

376

NVIDIA A10 × 2

24 GB × 2

32

12,000,000

16

15

30

30

ecs.gn7i-c32g1.32xlarge

128

752

NVIDIA A10 × 4

24 GB × 4

64

24,000,000

32

15

30

30

ecs.gn7i-c48g1.12xlarge

48

310

NVIDIA A10 × 1

24 GB × 1

16

9,000,000

16

8

30

30

ecs.gn7i-c56g1.14xlarge

56

346

NVIDIA A10 × 1

24 GB × 1

16

10,000,000

16

8

30

30

ecs.gn7i-2x.8xlarge

32

128

NVIDIA A10 × 2

24 GB × 2

16

6,000,000

16

8

30

30

ecs.gn7i-4x.8xlarge

32

128

NVIDIA A10 × 4

24 GB × 4

32

6,000,000

16

8

30

30

ecs.gn7i-4x.16xlarge

64

256

NVIDIA A10 × 4

24 GB × 4

64

12,000,000

32

8

30

30

ecs.gn7i-8x.32xlarge

128

512

NVIDIA A10 × 8

24 GB × 8

64

24,000,000

32

16

30

30

ecs.gn7i-8x.16xlarge

64

256

NVIDIA A10 × 8

24 GB × 8

32

12,000,000

32

8

30

30

**Important**

You can change the following instance types only to ecs.gn7i-c8g1.2xlarge or ecs.gn7i-c16g1.4xlarge: ecs.gn7i-2x.8xlarge, ecs.gn7i-4x.8xlarge, ecs.gn7i-4x.16xlarge, ecs.gn7i-8x.32xlarge, and ecs.gn7i-8x.16xlarge.

## gn7s, GPU-accelerated compute-optimized instance family

To use the gn7s instance family, [submit a ticket](https://smartservice.console.alibabacloud.com/console.htm) to apply.

-   **Introduction**:
    
    -   This instance family uses the latest Intel Ice Lake processors and NVIDIA A30 GPUs that are based on NVIDIA Ampere architecture. You can select instance types that comprise appropriate mixes of GPUs and vCPUs to meet your business requirements in AI scenarios.
        
    -   This instance family uses the third-generation SHENLONG architecture and doubles the average bandwidths of VPCs, networks, and disks compared with instance families of the previous generation.
        
-   **Use cases**: concurrent AI inference tasks that require high-performance CPUs, memory, and GPUs, such as image recognition, speech recognition, and behavior identification.
    
-   **Compute**:
    
    -   Uses NVIDIA A30 GPUs that have the following features:
        
        -   Innovative NVIDIA Ampere architecture
            
        -   Support for the multi-instance GPU (MIG) feature and acceleration features (based on second-generation Tensor cores) to provide diversified business support
            
    -   Uses 2.9 GHz Intel® Xeon® Scalable (Ice Lake) processors that deliver an all-core turbo frequency of 3.5 GHz.
        
    -   Improves memory sizes significantly from instance families of the previous generation.
        
-   **Storage**:
    
    -   Is an instance family in which all instances are I/O optimized.
        
    -   Supported disk types: [ESSDs](/help/en/ecs/user-guide/essds), [ESSD AutoPL disks](/help/en/ecs/user-guide/essd-autopl-disks), and [Regional ESSDs](/help/en/ecs/user-guide/regional-essd-disks). For more information, see [Elastic Block Storage Overview](/help/en/ecs/user-guide/elastic-block-storage-devices).
        
-   **Network**:
    
    -   Supports IPv4 and IPv6. For information about IPv6 communication, see [IPv6 communication](/help/en/ecs/user-guide/step-1-create-a-vpc-that-supports-ipv6-addressing-step-1-create-a-vpc-that-supports-ipv6-addressing).
        
    -   Provides high network performance based on large computing capacity.
        

gn7s includes the instance types and metric data listed in the following table.

**Instance type**

**vCPUs**

**Memory (GiB)**

**GPUs**

**GPU memory**

**Network baseline bandwidth (Gbit/s)**

**Packet forwarding rate (pps)**

**Private IPv4 addresses per ENI**

**IPv6 addresses per ENI**

**NIC queues**

**ENIs**

ecs.gn7s-c8g1.2xlarge

8

60

NVIDIA A30 × 1

24 GB × 1

16

1,600,000

5

1

8

4

ecs.gn7s-c16g1.4xlarge

16

120

NVIDIA A30 × 1

24 GB × 1

16

3,000,000

5

1

8

8

ecs.gn7s-c32g1.8xlarge

32

250

NVIDIA A30 × 1

24 GB × 1

16

6,000,000

5

1

12

8

ecs.gn7s-c32g1.16xlarge

64

500

NVIDIA A30 × 2

24 GB × 2

32

12,000,000

5

1

16

15

ecs.gn7s-c32g1.32xlarge

128

1000

NVIDIA A30 × 4

24 GB × 4

64

24,000,000

10

1

32

15

ecs.gn7s-c48g1.12xlarge

48

380

NVIDIA A30 × 1

24 GB × 1

16

9,000,000

8

1

16

8

ecs.gn7s-c56g1.14xlarge

56

440

NVIDIA A30 × 1

24 GB × 1

16

10,000,000

8

1

16

8

## gn7, GPU-accelerated compute-optimized instance family

-   **Use cases**:
    
    -   Deep learning applications, such as training applications of AI algorithms used in image classification, autonomous vehicles, and speech recognition
        
    -   Scientific computing applications that require robust GPU computing capabilities, such as computational fluid dynamics, computational finance, molecular dynamics, and environmental analytics
        

-   **Storage**:
    
    -   Is an instance family in which all instances are I/O optimized.
        
    -   Supported disk types: [ESSDs](/help/en/ecs/user-guide/essds), [ESSD AutoPL disks](/help/en/ecs/user-guide/essd-autopl-disks), and [Regional ESSDs](/help/en/ecs/user-guide/regional-essd-disks). For more information, see [Elastic Block Storage Overview](/help/en/ecs/user-guide/elastic-block-storage-devices).
        
-   **Network**:
    
    -   Supports IPv4 and IPv6. For information about IPv6 communication, see [IPv6 communication](/help/en/ecs/user-guide/step-1-create-a-vpc-that-supports-ipv6-addressing-step-1-create-a-vpc-that-supports-ipv6-addressing).
        
    -   Provides high network performance based on large computing capacity.
        

gn7 includes the instance types and metric data listed in the following table.

**Instance type**

**vCPUs**

**Memory (GiB)**

**GPU memory**

**Network baseline bandwidth (Gbit/s)**

**Packet forwarding rate (pps)**

**NIC queues**

**ENIs**

**Private IPv4 addresses per ENI**

**IPv6 addresses per ENI**

ecs.gn7-c12g1.3xlarge

12

94

40 GB × 1

4

2,500,000

4

8

10

1

ecs.gn7-c13g1.13xlarge

52

378

40 GB × 4

16

9,000,000

16

8

30

30

ecs.gn7-c13g1.26xlarge

104

756

40 GB × 8

30

18,000,000

16

15

10

1

## gn6i, GPU-accelerated compute-optimized instance family

-   **Use cases**:
    
    -   AI (deep learning and machine learning) inference for computer vision, speech recognition, speech synthesis, natural language processing (NLP), machine translation, and recommendation systems
        
    -   Real-time rendering for cloud gaming
        
    -   Real-time rendering for AR and VR applications
        
    -   Graphics workstations or graphics-heavy computing
        
    -   GPU-accelerated databases
        
    -   High-performance computing
        
-   **Compute**:
    
    -   Uses NVIDIA T4 GPUs that have the following features:
        
        -   Innovative NVIDIA Turing architecture
            
        -   16 GB of memory (320 GB/s bandwidth) per GPU
            
        -   2,560 CUDA cores per GPU
            
        -   Up to 320 Turing Tensor cores per GPU
            
        -   Mixed-precision Tensor cores that support 65 FP16 TFLOPS, 130 INT8 TOPS, and 260 INT4 TOPS
            
    -   Offers a CPU-to-memory ratio of 1:4.
        
    -   Uses 2.5 GHz Intel® Xeon® Platinum 8163 (Skylake) processors.
        
-   **Storage**:
    
    -   Is an instance family in which all instances are I/O optimized.
        
    -   Supports [ESSDs](/help/en/ecs/user-guide/essds), [ESSD AutoPL disks](/help/en/ecs/user-guide/essd-autopl-disks), standard SSDs, and ultra disks. For information about disks, see [Overview of Block Storage](/help/en/ecs/user-guide/elastic-block-storage-devices).
        
-   **Network**:
    
    -   Supports IPv4 and IPv6. For information about IPv6 communication, see [IPv6 communication](/help/en/ecs/user-guide/step-1-create-a-vpc-that-supports-ipv6-addressing-step-1-create-a-vpc-that-supports-ipv6-addressing).
        
    -   Provides high network performance based on large computing capacity.
        

gn6i includes the instance types and metric data listed in the following table.

**Instance type**

**vCPUs**

**Memory (GiB)**

**GPUs**

**GPU memory**

**Network baseline bandwidth (Gbit/s)**

**Packet forwarding rate (pps)**

**Baseline disk IOPS**

**Multi-queue**

**ENIs**

**Number of private IPv4 addresses per ENI**

**Number of IPv6 addresses per ENI**

ecs.gn6i-c4g1.xlarge

4

15

NVIDIA T4 × 1

16 GB × 1

4

2,500,000

None

2

2

10

1

ecs.gn6i-c8g1.2xlarge

8

31

NVIDIA T4 × 1

16 GB × 1

5

2,500,000

None

2

2

10

1

ecs.gn6i-c16g1.4xlarge

16

62

NVIDIA T4 × 1

16 GB × 1

6

2,500,000

None

4

3

10

1

ecs.gn6i-c24g1.6xlarge

24

93

NVIDIA T4 × 1

16 GB × 1

7.5

2,500,000

None

6

4

10

1

ecs.gn6i-c40g1.10xlarge

40

155

NVIDIA T4 × 1

16 GB × 1

10

1,600,000

None

16

10

10

1

ecs.gn6i-c24g1.12xlarge

48

186

NVIDIA T4 × 2

16 GB × 2

15

4,500,000

None

12

6

10

1

ecs.gn6i-c24g1.24xlarge

96

372

NVIDIA T4 × 4

16 GB × 4

30

4,500,000

250,000

24

8

10

1

## gn6e, GPU-accelerated compute-optimized instance family

-   **Use cases**:
    
    -   Deep learning applications, such as training and inference applications of AI algorithms used in image classification, autonomous vehicles, and speech recognition
        
    -   Scientific computing applications, such as computational fluid dynamics, computational finance, molecular dynamics, and environmental analytics
        
-   **Compute**:
    
    -   Uses NVIDIA V100 GPUs that each have 32 GB of GPU memory and support NVLink.
        
    -   Uses NVIDIA V100 GPUs (SXM2-based) that have the following features:
        
        -   Innovative NVIDIA Volta architecture
            
        -   32 GB of HBM2 memory (900 GB/s bandwidth) per GPU
            
        -   5,120 CUDA cores per GPU
            
        -   640 Tensor cores per GPU
            
        -   Up to six NVLink bidirectional connections per GPU, each of which provides a bandwidth of 25 Gbit/s in each direction for a total bandwidth of 300 Gbit/s (6 × 25 × 2 = 300)
            
    -   Offers a CPU-to-memory ratio of 1:8.
        
    -   Uses 2.5 GHz Intel® Xeon® Platinum 8163 (Skylake) processors.
        
-   **Storage**:
    
    -   Is an instance family in which all instances are I/O optimized.
        
    -   Supported disk types: [ESSDs](/help/en/ecs/user-guide/essds), [ESSD AutoPL disks](/help/en/ecs/user-guide/essd-autopl-disks), [Regional ESSDs](/help/en/ecs/user-guide/regional-essd-disks), standard SSD, and ultra disk. For more information, see [Elastic Block Storage Overview](/help/en/ecs/user-guide/elastic-block-storage-devices).
        
-   **Network**:
    
    -   Supports IPv4 and IPv6. For information about IPv6 communication, see [IPv6 communication](/help/en/ecs/user-guide/step-1-create-a-vpc-that-supports-ipv6-addressing-step-1-create-a-vpc-that-supports-ipv6-addressing).
        
    -   Provides high network performance based on large computing capacity.
        

The following table lists the instance types and specifications of the gn6e instance family.

**Instance type**

**vCPUs**

**Memory (GiB)**

**GPUs**

**GPU memory**

**Network baseline bandwidth (Gbit/s)**

**Packet forwarding rate (pps)**

**NIC queues**

**ENIs**

**Private IPv4 addresses per ENI**

**IPv6 addresses per ENI**

ecs.gn6e-c12g1.3xlarge

12

92

1 × NVIDIA V100

1 × 32 GB

5

800,000

8

6

10

1

ecs.gn6e-c12g1.6xlarge

24

184

2 × NVIDIA V100

2 × 32 GB

8

1,200,000

8

8

20

1

ecs.gn6e-c12g1.12xlarge

48

368

4 × NVIDIA V100

4 × 32 GB

16

2,400,000

8

8

20

1

ecs.gn6e-c12g1.24xlarge

96

736

8 × NVIDIA V100

8 × 32 GB

32

4,500,000

16

8

20

1

## gn6v, GPU-accelerated compute-optimized instance family

-   **Use cases**:
    
    -   Deep learning applications, such as training and inference applications of AI algorithms used in image classification, autonomous vehicles, and speech recognition
        
    -   Scientific computing applications, such as computational fluid dynamics, computational finance, molecular dynamics, and environmental analytics
        
-   **Compute**:
    
    -   Uses NVIDIA V100 GPUs.
        
    -   Uses NVIDIA V100 GPUs (SXM2-based) that have the following features:
        
        -   Innovative NVIDIA Volta architecture
            
        -   16 GB of HBM2 memory (900 GB/s bandwidth) per GPU
            
        -   5,120 CUDA cores per GPU
            
        -   640 Tensor cores per GPU
            
        -   Up to six NVLink bidirectional connections per GPU, each of which provides a bandwidth of 25 Gbit/s in each direction for a total bandwidth of 300 Gbit/s (6 × 25 × 2 = 300)
            
    -   Offers a CPU-to-memory ratio of 1:4.
        
    -   Uses 2.5 GHz Intel® Xeon® Platinum 8163 (Skylake) processors.
        
-   **Storage**:
    
    -   Is an instance family in which all instances are I/O optimized.
        
    -   Supports [ESSDs](/help/en/ecs/user-guide/essds), [ESSD AutoPL disks](/help/en/ecs/user-guide/essd-autopl-disks), standard SSDs, and ultra disks. For information about disks, see [Overview of Block Storage](/help/en/ecs/user-guide/elastic-block-storage-devices).
        
-   **Network**:
    
    -   Supports IPv4 and IPv6. For information about IPv6 communication, see [IPv6 communication](/help/en/ecs/user-guide/step-1-create-a-vpc-that-supports-ipv6-addressing-step-1-create-a-vpc-that-supports-ipv6-addressing).
        
    -   Provides high network performance based on large computing capacity.
        

gn6v includes the instance types and metric data listed in the following table.

**Instance type**

**vCPUs**

**Memory (GiB)**

**GPUs**

**GPU memory**

**Network baseline bandwidth (Gbit/s)**

**Packet forwarding (pps)**

**Disk baseline IOPS**

**NIC queues**

**ENIs**

**Private IPv4 addresses per ENI**

**IPv6 addresses per ENI**

ecs.gn6v-c8g1.2xlarge

8

32

NVIDIA V100 × 1

16 GB × 1

2.5

800,000

N/A

4

4

10

1

ecs.gn6v-c8g1.4xlarge

16

64

NVIDIA V100 × 2

16 GB × 2

5

1,000,000

N/A

4

8

20

1

ecs.gn6v-c8g1.8xlarge

32

128

NVIDIA V100 × 4

16 GB × 4

10

2,000,000

N/A

8

8

20

1

ecs.gn6v-c8g1.16xlarge

64

256

NVIDIA V100 × 8

16 GB × 8

20

2,500,000

N/A

16

8

20

1

ecs.gn6v-c10g1.20xlarge

82

336

NVIDIA V100 × 8

16 GB × 8

35

4,500,000

250,000

16

8

20

1

## ebmgn9g, GPU-accelerated compute-optimized ECS Bare Metal Instance family

**Important**

The ebmgn9g instance family is in invitational preview. To use it, you can submit a ticket.

-   **Introduction:** The ebmgn9g is the ninth-generation, full-featured, and cost-effective GPU-accelerated ECS Bare Metal instance family from Alibaba Cloud. It uses the latest CIPU 2.0 to deliver cloud services. Equipped with a high-clock-speed CPU, large-capacity memory, and new Blackwell-architecture professional GPUs, this instance family provides cost-effective GPU cloud computing for autonomous driving and embodied AI training, large language model inference, film and animation rendering, metaverse and cloud gaming services, and other GPU-accelerated workloads.
    
-   **Scenarios and key features:**
    
    -   **Autonomous driving and embodied AI:**  
        It offers 256 vCPUs. All CPU cores run at up to 4.2 GHz or higher. Paired with 2.3 TB of memory, it supports the data processing needs for autonomous driving and embodied AI training.
        
    -   **Search and recommendation:**  
        The Blackwell GPU delivers 137 TFLOPS of high-performance TF32 computing power. Each GPU is paired with 32 vCPUs and 153 GB/s of memory bandwidth, delivering an optimal configuration for search and advertising workloads.
        
    -   **Large model inference:**  
        The new-generation GPU delivers higher computing power than the eighth-generation instance family. The GPU memory bandwidth is increased to 1344 GB/s. The new support for FP4 computing significantly improves inference performance and cost efficiency. Eight GPUs are connected via PCIe Gen5, which delivers 128 GB/s of inter-GPU bandwidth and greatly improves multi-GPU parallel inference efficiency.
        
    -   **Cloud gaming, rendering, and metaverse:**  
        The CPU reaches a clock speed of up to 5 GHz, which makes it a top choice for 3D modeling. The GPU natively supports graphics capabilities and includes workstation-class graphics drivers that are certified for professional design. It fully accelerates OpenGL, making it the best choice for high-end film and animation development and computer-aided design (CAD).
        
-   **Powered by the latest CIPU 2.0 cloud processor:**
    
    The second-generation CIPU delivers higher cloud processing power and enhanced eRDMA, VPC, and EBS component performance. ECS Bare Metal instances provide direct access to physical resources. They also support workloads that require hardware-bound licenses. Containers, such as Docker, Clear Container, and Pouch, are supported.
    
-   **Compute:**
    
    -   It features new Blackwell-architecture professional GPUs:
        
        -   It supports OpenGL for professional-grade graphics processing.
            
        -   It supports common acceleration features such as RTX and TensorRT. It is newly upgraded to support FP4 and PCIe Gen5 interconnect.
            
        -   It uses a PCIe Switch interconnect. Compared with a direct CPU connection, NCCL performance is improved by 36%. For multi-GPU sharded large model inference, peak performance is improved by up to 9%.
            
    -   GPU specifications:
        
        **GPU architecture**
        
        **GPU memory**
        
        **Computing performance**
        
        **Video encode/decode capability**
        
        **Inter-GPU interconnect**
        
        **Accelerated APIs**
        
        Blackwell
        
        -   Capacity: 48 GB
            
        -   Bandwidth: 1344 GB/s
            
        
        -   TF32: 126 TFLOPS
            
        -   FP32: 52 TFLOPS
            
        -   FP16/BF16: 266 TFLOPS
            
        -   FP8/INT8: 533 TFLOPS
            
        -   FP4: 970 TFLOPS
            
        -   RT core: 196 TFLOPS
            
        
        -   3 × Video Encoder
            
        -   3 × Video Decoder
            
        
        -   PCIe Gen5 x16: 128 GB/s
            
        -   P2P supported
            
        
        Supports DX12,
        
        OpenGL 4.6, Vulkan 1.3, CUDA 12.8, OpenCL 3.0, DirectCompute
        
    -   **Processor:** It uses an AMD Turin-C processor with a clock speed of 3.3 GHz to 5 GHz. The all-core frequency is up to 4.2 GHz.
        
-   Storage:
    
    -   This is an I/O optimized instance.
        
    -   It supports the NVMe protocol. For details, see [NVMe protocol](/help/en/ecs/user-guide/nvme-protocol).
        
    -   Supported disk types include [Elastic ephemeral disks](/help/en/ecs/user-guide/elastic-ephemeral-disks), [ESSDs](/help/en/ecs/user-guide/essds), [ESSD AutoPL disks](/help/en/ecs/user-guide/essd-autopl-disks), and [Regional ESSDs](/help/en/ecs/user-guide/regional-essd-disks). For more information about disks, see [Overview of Block Storage](/help/en/ecs/user-guide/elastic-block-storage-devices).
        
-   Network:
    
    -   It supports IPv4 and IPv6. For more information about IPv6 communication, see [IPv6 communication](/help/en/ecs/user-guide/step-1-create-a-vpc-that-supports-ipv6-addressing-step-1-create-a-vpc-that-supports-ipv6-addressing).
        
    -   It provides ultra-high network performance of up to 30 million PPS for packet forwarding.
        
    -   It supports the Elastic RDMA Interface (ERI). In a VPC network, ERI enables RDMA passthrough acceleration and boosts bandwidth to 360 Gbit/s. You can use it for autonomous driving, embodied AI, computer vision (CV), and traditional model training.
        
        **Note**
        
        For instructions on how to use ERI, see [Enable eRDMA on an enterprise-level instance](/help/en/ecs/user-guide/configure-erdma-on-a-cpu-instance#task-2128004) .
        

ebmgn9g instance types

**Instance type**

**vCPU**

**Memory (GiB)**

**GPU memory**

**Baseline network bandwidth (Gbit/s)**

**Packet forwarding rate (PPS)**

**Private IPv4 addresses per ENI**

**IPv6 addresses per ENI**

**Multi-queue (primary ENI / secondary ENI)**

**Elastic Network Interface (ENI)**

**Maximum number of data disks**

**Maximum disk bandwidth (GB/s)**

ecs.ebmgn9g.64xlarge

256

2304

48 GB × 8

360 (180 × 2)

30 million

30

30

64 / 16

38

33

8

**Note**

ebmgn9g instances must boot using UEFI mode. If you use a custom image, you must ensure that the image supports UEFI boot mode and that its boot mode property is set to UEFI. For more information, see [Instance boot mode](/help/en/ecs/user-guide/instance-startup-mode).

## ebmgn9ge, **GPU-accelerated compute-optimized ECS Bare Metal Instance family**

**Important**

The ebmgn9ge instance family is in invitational preview. To use this instance family, submit a ticket.

-   **Introduction:** The ebmgn9ge family is the ninth-generation, full-featured, and cost-effective GPU-accelerated ECS Bare Metal Instance family from Alibaba Cloud. It uses the latest CIPU 2.0 and features high clock speed CPUs, large memory capacity, and professional graphics cards based on the new Blackwell architecture. This combination delivers cost-effective GPU acceleration for scenarios such as autonomous driving and embodied intelligence training, large language model (LLM) inference, film and animation rendering, and metaverse or cloud gaming services.
    
-   **Scenarios and features:**
    
    -   **Autonomous driving and embodied intelligence:**  
        These instances provide 256 vCPUs with all cores running at over 4.2 GHz and 2.3 TB of memory, meeting the data processing requirements for autonomous driving and embodied intelligence training.
        
    -   **Search and recommendation:**  
        The Blackwell GPUs deliver 137 TFLOPS of high-performance TF32 computing power. Each GPU is paired with 32 vCPUs and 153 GB/s of memory bandwidth, offering an optimal configuration for search and advertising services.
        
    -   **Large model inference:**
        
        The ebmgn9ge instances are designed for large language models. They provide 72 GB of GPU memory per card and a memory bandwidth of 1344 GB/s, enabling high-performance inference for LLM scenarios. With the new FP4 computing architecture and 128 GB/s of fifth-generation PCIe bandwidth, these instances support 8-card parallel inference for models with over 671 billion parameters.
        
    -   **Cloud gaming, rendering, and metaverse:**  
        The CPU achieves a high clock speed of up to 5 GHz, making it ideal for 3D modeling. The GPU natively supports graphics and includes workstation-grade drivers certified for professional design. It also supports full-featured OpenGL acceleration, making it an optimal choice for high-end film and animation development and computer-aided design (CAD).
        
-   **Uses the latest CIPU 2.0 cloud processor:**
    
    The second-generation CIPU delivers higher cloud processing power and enhanced computing capabilities for elastic Remote Direct Memory Access (eRDMA), VPC, and EBS components. ECS Bare Metal instances allow direct access to physical resources and are ideal for workloads that require hardware-bound licenses. These instances support containers such as Docker, Clear Container, and Pouch.
    
-   **Compute:**
    
    -   Uses professional graphics cards based on the new Blackwell architecture:
        
        -   Supports professional-grade OpenGL graphics processing.
            
        -   Supports common acceleration features such as RTX and TensorRT and is newly upgraded to support FP4 and PCIe Gen5 interconnect.
            
        -   Uses a PCIe Switch for interconnection. Compared to a direct CPU connection, this improves NCCL performance by 36% and boosts performance by up to 9% for multi-card sharded large model inference.
            
    -   Key GPU parameters:
        
        **GPU architecture**
        
        **GPU memory**
        
        **Compute performance**
        
        **Video encoding/decoding capability**
        
        **Inter-card connection**
        
        **Acceleration APIs**
        
        Blackwell
        
        -   Capacity: 72 GB
            
        -   Bandwidth: 1344 GB/s
            
        
        -   TF32: 126 TFLOPS
            
        -   FP32: 52 TFLOPS
            
        -   FP16/BF16: 266 TFLOPS
            
        -   FP8/INT8: 533 TFLOPS
            
        -   FP4: 970 TFLOPS
            
        -   RT core: 196 TFLOPS
            
        
        -   3 × Video Encoder
            
        -   3 × Video Decoder
            
        
        -   PCIe Gen5 x16: 128 GB/s
            
        -   Supports P2P
            
        
        Supports DX12,
        
        OpenGL 4.6, Vulkan 1.3, CUDA 12.8, OpenCL 3.0, and DirectCompute
        
    -   **Processor:** AMD Turin-C processor with a clock speed ranging from 3.3 GHz to 5 GHz. All cores can reach up to 4.2 GHz.
        
-   Storage:
    
    -   I/O optimized instance.
        
    -   Supports the NVMe protocol. For more information, see [NVMe protocol](/help/en/ecs/user-guide/nvme-protocol).
        
    -   Supported disk types: [Elastic ephemeral disks](/help/en/ecs/user-guide/elastic-ephemeral-disks), [ESSDs](/help/en/ecs/user-guide/essds), [ESSD AutoPL disks](/help/en/ecs/user-guide/essd-autopl-disks), and [Regional ESSDs](/help/en/ecs/user-guide/regional-essd-disks). For more information about disks, see [Overview of Block Storage](/help/en/ecs/user-guide/elastic-block-storage-devices).
        
-   Network:
    
    -   Supports IPv4 and IPv6. For information about IPv6 communication, see [IPv6 communication](/help/en/ecs/user-guide/step-1-create-a-vpc-that-supports-ipv6-addressing-step-1-create-a-vpc-that-supports-ipv6-addressing).
        
    -   Ultra-high network performance with a packet forwarding capability of 30 million PPS.
        
    -   Supports Elastic RDMA Interface (ERI). ERI enables RDMA passthrough for accelerated interconnection within a VPC, increasing bandwidth to 360 Gbit/s. It can be used for training tasks in autonomous driving, embodied intelligence, computer vision (CV), and traditional models.
        
        **Note**
        
        For instructions on how to use ERI, see [Enable eRDMA on an enterprise-level instance](/help/en/ecs/user-guide/configure-erdma-on-a-cpu-instance#task-2128004).
        

The following table lists the instance types and specifications for the ebmgn9ge family.

**Note**

For a lower-cost instance with less memory, use the [ebmgn9gc](/help/en/ecs/user-guide/overview-of-instance-families#ebmgn9gc).

**Instance type**

**vCPU**

**Memory (GiB)**

**GPU memory**

**Base network bandwidth (Gbit/s)**

**Packet forwarding rate (PPS)**

**Private IPv4 addresses per NIC**

**IPv6 addresses per NIC**

**Queues (primary/secondary NIC)**

**ENIs**

**Maximum number of data disks**

**Maximum disk bandwidth (GB/s)**

ecs.ebmgn9ge.64xlarge

256

2304

72 GB × 8

360 (180 × 2)

30 million

30

30

64/16

38

33

8

**Note**

Images for ebmgn9ge instance types must use the UEFI boot mode. If you use a custom image, make sure that the image supports the UEFI boot mode and that its boot mode property is set to UEFI. For more information, see [Instance boot mode](/help/en/ecs/user-guide/instance-startup-mode).

## ebmgn9gc, **GPU-accelerated compute-optimized ECS Bare Metal Instance family**

**Important**

The ebmgn9gc instance family is in invitational preview. To use this instance family, you must submit a ticket.

-   **Introduction:** The ebmgn9gc is a ninth-generation, cost-effective, and full-featured GPU-accelerated ECS Bare Metal instance from Alibaba Cloud. It is equipped with the latest CIPU 2.0, a high-clock-speed CPU, large-capacity memory, and professional Blackwell-architecture GPUs. This instance family provides cost-effective GPU cloud computing for workloads such as autonomous driving and embodied AI training, LLM inference, film and animation rendering, and metaverse and cloud gaming services.
    
-   **Scenarios and features:**
    
    -   **Autonomous driving and embodied AI:**  
        This instance provides 256 vCPUs with all cores running at a clock speed of up to 4.2 GHz, and 2.3 TB of memory. This configuration meets the demanding data processing requirements for autonomous driving and embodied AI training.
        
    -   **Search and recommendation:**  
        The Blackwell GPU delivers 137 TFLOPS of high-performance TF32 computing power. Each GPU is paired with 32 vCPUs and 153 GB/s of memory bandwidth, which delivers an optimal configuration for search and advertising workloads.
        
    -   **Model inference:**
        
        The ebmgn9gc instance is specifically designed for large language models, offering 72 GB of GPU memory per GPU and GPU memory bandwidth of up to 1344 GB/s. It provides high-performance inference computing power for LLM scenarios, supports the new FP4 compute architecture, and features 5th-generation PCIe bandwidth of 128 GB/s. This enables parallel inference of large models with more than 671 billion parameters across eight GPUs.
        
    -   **Cloud gaming, rendering, and metaverse:**  
        The CPU has a clock speed of up to 5 GHz, which is ideal for 3D modeling. The GPU natively supports graphics capabilities and includes workstation-class graphics drivers that are certified for professional design applications. The instance fully accelerates OpenGL, which makes it an excellent choice for high-end film and animation development and CAD design.
        
-   **Powered by the latest CIPU 2.0 cloud processor:**
    
    The second-generation CIPU delivers enhanced cloud processing capability, including improved performance for eRDMA, VPC, and EBS components. ECS Bare Metal instances provide direct access to physical hardware or support workloads that require hardware-bound licenses. The second-generation CIPU supports containers such as Docker, Clear Containers, and Pouch.
    
-   **Compute:**
    
    -   This instance uses professional GPUs based on the Blackwell architecture:
        
        -   It supports OpenGL for professional-grade graphics processing.
            
        -   It supports common acceleration features, such as RTX and TensorRT, along with FP4 and PCIe Gen5 interconnects.
            
        -   The instance uses PCIe Switch interconnects. Compared to CPU-direct connections, this improves NCCL performance by 36%. For multi-GPU sharded LLM inference, peak performance is improved by up to 9%.
            
    -   GPU specifications:
        
        **GPU architecture**
        
        **GPU memory**
        
        **Compute performance**
        
        **Video encode/decode capability**
        
        **GPU-to-GPU interconnect**
        
        **Accelerated APIs**
        
        Blackwell
        
        -   Capacity: 72 GB
            
        -   Bandwidth: 1344 GB/s
            
        
        -   TF32: 126 TFLOPS
            
        -   FP32: 52 TFLOPS
            
        -   FP16/BF16: 266 TFLOPS
            
        -   FP8/INT8: 533 TFLOPS
            
        -   FP4: 970 TFLOPS
            
        -   RT core: 196 TFLOPS
            
        
        -   3 × Video Encoder
            
        -   3 × Video Decoder
            
        
        -   PCIe Gen5 x16: 128 GB/s
            
        -   Peer-to-peer (P2P) supported
            
        
        Supports DX12,
        
        OpenGL 4.6, Vulkan 1.3, CUDA 12.8, OpenCL 3.0, and DirectCompute
        
    -   **Processor:** This instance uses an AMD Turin-C processor with a clock speed of 3.3 GHz to 5 GHz. The all-core clock speed is up to 4.2 GHz.
        
-   Storage:
    
    -   I/O optimized instance.
        
    -   This instance supports the NVMe protocol. For more information, see [NVMe protocol](/help/en/ecs/user-guide/nvme-protocol).
        
    -   The supported disk types are [Elastic ephemeral disks](/help/en/ecs/user-guide/elastic-ephemeral-disks), [ESSDs](/help/en/ecs/user-guide/essds), [ESSD AutoPL disks](/help/en/ecs/user-guide/essd-autopl-disks), and [Regional ESSDs](/help/en/ecs/user-guide/regional-essd-disks). For more information about disks, see [Overview of Block Storage](/help/en/ecs/user-guide/elastic-block-storage-devices).
        
-   Network:
    
    -   This instance supports IPv4 and IPv6. For more information about IPv6 communication, see [IPv6 communication](/help/en/ecs/user-guide/step-1-create-a-vpc-that-supports-ipv6-addressing-step-1-create-a-vpc-that-supports-ipv6-addressing).
        
    -   The instance provides ultra-high network performance with up to 30 million PPS for packet forwarding.
        
    -   This instance supports Elastic RDMA Interface (ERI). In a VPC, ERI enables RDMA passthrough acceleration and increases bandwidth to 360 Gbit/s. This feature is ideal for autonomous driving, embodied AI, computer vision (CV), and traditional model training.
        
        **Note**
        
        For instructions on how to use ERI, see [Enable eRDMA on an enterprise-level instance](/help/en/ecs/user-guide/configure-erdma-on-a-cpu-instance#task-2128004).
        

The following table lists the instance types and specifications for the ebmgn9gc family.

**Note**

For a version with more memory, see [ebmgn9ge](/help/en/ecs/user-guide/overview-of-instance-families#ebmgn9ge).

**Instance type**

**vCPU**

**Memory (GiB)**

**GPU memory**

**Baseline network bandwidth (Gbit/s)**

**Packet forwarding rate (PPS)**

**Private IPv4 addresses per ENI**

**IPv6 addresses per ENI**

**Multi-queue (primary ENI / secondary ENI)**

**Elastic Network Interface (ENI)**

**Maximum number of data disks**

**Maximum disk bandwidth (GB/s)**

ecs.ebmgn9gc.64xlarge

256

1536

72 GB × 8

360 (180 × 2)

30 million

30

30

64 / 16

38

33

8

**Note**

ebmgn9gc instances must boot from images that are configured for UEFI mode. If you use a custom image, you must ensure that it supports UEFI boot mode and that its boot mode property is set to UEFI. For more information, see [Instance boot mode](/help/en/ecs/user-guide/instance-startup-mode).

## ebmgn8v, GPU-accelerated compute-optimized ECS Bare Metal Instance family

This instance family is available only in specific regions, including regions outside China. To use the instance family, contact Alibaba Cloud sales personnel.

-   **Introduction**: This instance family is an 8th-generation GPU-accelerated compute-optimized ECS Bare Metal Instance family provided by Alibaba Cloud for AI model training and ultra-large models. Each instance of this instance family is equipped with eight GPUs.
    
-   **Use cases**:
    
    -   Multi-GPU parallel inference computing for LLMs that have more than 70 billion parameters
        
    -   Traditional AI model training and autonomous driving training, for which each GPU delivers computing power of up to 39.5 TFLOPS in the single-precision floating-point format (FP32)
        
    -   Small and medium-sized model training scenarios that leverage the NVLink connections among the eight GPUs
        
-   **Benefits and positioning**:
    
    -   **High-speed and large-capacity GPU memory**: Each GPU is equipped with 96 GB of HBM3 memory and delivers up to 4 TB/s of memory bandwidth, which greatly accelerates model training and inference.
        
    -   **High bandwidth between GPUs**: Multiple GPUs are interconnected by using 900 GB/s NVLink connections. The efficiency of multi-GPU training and inference is much higher than that of previous generations of GPU-accelerated instances.
        
    -   **Quantization of large models**: This instance family supports computing power in the 8-bit floating point format (FP8) and optimizes computing power for large-scale parameter training and inference. This significantly improves the computing speed of training and inference and reduces memory usage.
        
-   **Compute**:
    
    -   Uses the latest CIPU 1.0 processors.
        
        -   Decouples computing capabilities from storage capabilities, allowing you to flexibly select storage resources based on your business requirements, and increases inter-instance bandwidth to 160 Gbit/s for faster data transmission and processing compared with 7th-generation instance families.
            
        -   Uses the bare metal capabilities provided by CIPU processors to support peer-to-peer (P2P) communication between GPU-accelerated instances.
            
    -   Uses the 4th-generation Intel Xeon Scalable processors that deliver an all-core turbo frequency of up to 3.1 GHz and provides 192 vCPUs.
        
-   **Storage**:
    
    -   These are I/O optimized instances.
        
    -   These instances support the NVMe protocol. For more information, see [Overview of the NVMe protocol](/help/en/ecs/user-guide/nvme-protocol).
        
    -   Supports [elastic ephemeral disks](/help/en/ecs/user-guide/elastic-ephemeral-disks), [ESSDs](/help/en/ecs/user-guide/essds), [ESSD AutoPL disks](/help/en/ecs/user-guide/essd-autopl-disks), and [Regional ESSDs](/help/en/ecs/user-guide/regional-essd-disks). For information about disks, see [Overview of Block Storage](/help/en/ecs/user-guide/elastic-block-storage-devices).
        
-   **Network**:
    
    -   These instances support IPv4 and IPv6. For information about IPv6 communication, see [IPv6 communication](/help/en/ecs/user-guide/step-1-create-a-vpc-that-supports-ipv6-addressing-step-1-create-a-vpc-that-supports-ipv6-addressing).
        
    -   Provides ultra-high network performance with a packet forwarding rate of 30,000,000 pps.
        
    -   Supports ERIs to allow inter-instance RDMA-based communication in VPCs and provides up to 160 Gbit/s of bandwidth per instance, which is suitable for training tasks based on CV models and traditional models.
        
        **Note**
        
        For information about how to use ERIs, see [Enable eRDMA on an enterprise-level instance](/help/en/ecs/user-guide/configure-erdma-on-a-cpu-instance#task-2128004).
        

ebmgn8v instance types

**Instance type**

**vCPU**

**Memory (GiB)**

**GPU memory**

**Network baseline bandwidth (Gbit/s)**

**Packet forwarding rate (pps)**

**Private IPv4 addresses per ENI**

**IPv6 addresses per ENI**

**NIC queues (Primary ENI/Secondary ENI)**

**ENIs**

**Maximum attached data disks**

**Maximum disk bandwidth (Gbit/s)**

ecs.ebmgn8v.48xlarge

192

1024

96GB\*8

170 (85 \* 2)

30,000,000

30

30

64

32

31

6

**Note**

The boot mode of the images that are used by instances of this instance family must be UEFI. If you want to use custom images on the instances, make sure that the images support the UEFI boot mode and the boot mode of the images is set to UEFI. For information about how to set the boot mode of a custom image, see [Instance boot mode](/help/en/ecs/user-guide/instance-startup-mode#589d06745c7w0).

## **ebmgn8ia, GPU-accelerated compute-optimized ECS Bare Metal Instance family**

This instance family is available only in specific regions, including regions outside China. To use the instance family, contact Alibaba Cloud sales personnel.

-   **Introduction:** The instance family is the 8th generation of accelerated computing ECS Bare Metal instances from Alibaba Cloud, designed for applications such as search, recommendation, and simulation that require a high number of vCPU resources per GPU. This family is powered by the latest NVIDIA L20 GPUs, and each instance is a single bare metal host equipped with two high-frequency CPUs and four GPUs.
    
-   **Benefits and Use cases:**
    
    -   **High clock speed**: This product is powered by two AMD EPYC™ Genoa 9T34 processors. Each processor has 64 physical cores, providing a total of 256 vCPUs with clock speeds ranging from 3.4 GHz to 3.75 GHz. This configuration significantly improves single-core CPU performance, making it ideal for CAD modeling and accelerating pre-processing for CAE simulations.
        
    -   **Sparse resource allocation**: Each GPU is paired with an average of 64 vCPUs and 384 GiB of memory, providing an average memory bandwidth of 230 GB/s. This configuration is ideal for GPU computing scenarios that require high I/O throughput, such as advertising, search, recommendations, and traditional CAE simulations. The configuration also supports certain film and television production tasks that rely on CPU rendering.
        
-   **Uses the latest CIPU 1.0 processors that provide the following benefits:**
    
    -   Decouples computing capabilities from storage capabilities, allowing you to flexibly select storage resources based on your business requirements, and Increases inter-instance bandwidth to 160 Gbit/s for faster data transmission and processing compared with previous-generation instance families.
        
    -   Uses the bare metal capabilities provided by CIPU processors to support Peripheral Component Interconnect Express (PCIe) P2P communication between GPU-accelerated instances.
        
-   **Compute:**
    
    -   With the new NVIDIA L20 Enterprise GPU:
        
        -   Support for acceleration features such as vGPU, RTX technology, and TensorRT inference engine.
            
        -   Support for 8-bit floating point precision improves computational efficiency.
            
    -   NVIDIA L20 main parameters:
        
        **GPU architecture**
        
        **GPU memory**
        
        **Computing performance**
        
        **Video codec capability**
        
        **Interconnection between cards**
        
        NVIDIA Ada Lovelace
        
        -   **Capacity:** 48 GB
            
        -   **Bandwidth:** 864 GB/s
            
        
        -   **FP64:** N/A
            
        -   **FP32:** 59.3 TFLOPS
            
        -   **FP16/BF16:** 119 TFLOPS
            
        -   **FP8/INT8:** 237 TFLOPS
            
        
        -   3 \* Video Encoder (+AV1)
            
        -   3 \* Video Decoder
            
        -   4 \* JPEG Decoder
            
        
        -   PCIe interface: PCIe Gen4 x16
            
        -   Bandwidth: 64 GB/s
            
        
    -   Processor: AMD EPYC™ Genoa 9T34, 3.4 GHz to 3.75 GHz.
        
-   **Storage:**
    
    -   These are I/O optimized instances.
        
    -   These instances support the NVMe protocol. For more information, see [Overview of the NVMe protocol](/help/en/ecs/user-guide/nvme-protocol).
        
    -   Supports [elastic ephemeral disks](/help/en/ecs/user-guide/elastic-ephemeral-disks), [ESSDs](/help/en/ecs/user-guide/essds), [ESSD AutoPL disks](/help/en/ecs/user-guide/essd-autopl-disks), and [Regional ESSDs](/help/en/ecs/user-guide/regional-essd-disks). For information about disks, see [Overview of Block Storage](/help/en/ecs/user-guide/elastic-block-storage-devices).
        
-   **Newtork:**
    
    -   These instances support IPv4 and IPv6. For information about IPv6 communication, see [IPv6 communication](/help/en/ecs/user-guide/step-1-create-a-vpc-that-supports-ipv6-addressing-step-1-create-a-vpc-that-supports-ipv6-addressing).
        
    -   Provides ultra-high network performance with a packet forwarding rate of 30,000,000 pps.
        
    -   Supports ERIs to allow inter-instance RDMA-based communication in VPCs and provides up to 160 Gbit/s of bandwidth per instance, which is suitable for training tasks based on CV models and traditional models.
        
        **Note**
        
        For information about how to use ERIs, see [Enable eRDMA on an enterprise-level instance](/help/en/ecs/user-guide/configure-erdma-on-a-cpu-instance#task-2128004).
        

ebmgn8ia instance type

**Instance type**

**vCPU**

**Memory (GiB)**

**GPU**

**GPUmemory**

**Network baseline bandwidth (Gbit/s)**

**Packet forwarding rate (pps)**

**Private IPv4 addresses per ENI**

**IPv6 addresses per ENI**

**NIC queues (Primary ENI/Secondary ENI)**

**ENIs**

**Maximum attached data disks**

**Maximum disk bandwidth (Gbit/s)**

ecs.ebmgn8ia.64xlarge

256

1536

L20 \* 4

48GB \* 4

160 (80 × 2)

30,000,000

30

30

64/16

32

31

6

**Note**

The boot mode of the images that are used by instances of this instance family must be UEFI. If you want to use custom images on the instances, make sure that the images support the UEFI boot mode and the boot mode of the images is set to UEFI. For information about how to set the boot mode of a custom image, see [Instance boot mode](/help/en/ecs/user-guide/instance-startup-mode#589d06745c7w0).

## **ebmgn8is, GPU-accelerated compute-optimized ECS Bare Metal Instance family**

This instance family is available only in specific regions, including regions outside China. To use the instance family, contact Alibaba Cloud sales personnel.

-   **Introduction:** ebmgn8is is the 8th generation of accelerated computing specification family (ECS Bare Metal instance family) launched by Alibaba Cloud to address the recent development of AI generation business. It uses the latest NVIDIA L20 GPU. Each instance is a bare metal host that uses eight GPU compute cards.
    
-   **Benefits and positioning:**
    
    -   **Graphic processing**: This instance family uses high-frequency 4th-generation Intel Xeon Scalable processors to deliver sufficient CPU computing power in 3D modeling scenarios and achieve smooth graphics rendering and design.
        
    -   **Inference tasks**: uses the new NVIDIA L20 GPU memory of 48 GB on a single GPU card to accelerate inference tasks. It supports the FP8 floating-point format and supports inference based on various AIGC models, especially for inference tasks that use LLM models of less than 70 MB.
        
    -   **Training tasks**: This instance family provides cost-effective computing capabilities and delivers the FP32 computing performance double that of the 7th-generation inference instances. Instances of this instance family are suitable for training FP32-based CV models and other small and medium-sized models.
        
-   **Use cases:**
    
    -   Production and rendering of special effects for animation, film, and television based on workstation-level graphics processing capabilities in scenarios in which Alibaba Cloud Marketplace GRID images are used, the GRID driver is installed, and OpenGL and Direct3D graphics capabilities are enabled
        
    -   Scenarios in which the management services provided by Container Service for Kubernetes (ACK) for containerized applications are used to support AI-generated graphic content and LLM inference tasks with up to 130 billion parameters
        
    -   Other general-purpose AI recognition, image recognition, and speech recognition scenarios
        
-   **Uses the latest CIPU 1.0 processors that provide the following benefits:**
    
    -   Decouples computing capabilities from storage capabilities, allowing you to flexibly select storage resources based on your business requirements, and Increases inter-instance bandwidth to 160 Gbit/s for faster data transmission and processing compared with previous-generation instance families.
        
    -   Uses the bare metal capabilities provided by CIPU processors to support PCIe P2P communication between GPU-accelerated instances.
        
-   **Compute:**
    
    -   With the new NVIDIA L20 Enterprise GPU:
        
        -   Support for acceleration features such as vGPU, RTX technology, and TensorRT inference engine
            
        -   Support for PCIe Switch interconnect, which achieves a 36% increase in NVIDIA Collective Communications Library (NCCL) performance compared with the CPU direct connection scheme and helps improve inference performance by up to 9% when you run LLM inference tasks on multiple GPUs in parallel
            
    -   NVIDIA L20 main parameters:
        
        **GPU architecture**
        
        **GPU memory**
        
        **Computing performance**
        
        **Video codec capability**
        
        **Interconnection between cards**
        
        NVIDIA Ada Lovelace
        
        -   **Capacity:** 48 GB
            
        -   **Bandwidth:** 864 GB/s
            
        
        -   **FP64:** N/A
            
        -   **FP32:** 59.3 TFLOPS
            
        -   **FP16/BF16:** 119 TFLOPS
            
        -   **FP8/INT8:** 237 TFLOPS
            
        
        -   3 \* Video Encoder(+AV1)
            
        -   3 \* Video Decoder
            
        -   4 \* JPEG Decoder
            
        
        -   PCIe interface: PCIe Gen4 x16
            
        -   Bandwidth: 64 GB/s
            
        
    -   Uses 3.4 GHz Intel® Xeon® Scalable processors (SPR) that deliver an all-core turbo frequency of up to 3.9 GHz.
        
-   **Storage:**
    
    -   These are I/O optimized instances.
        
    -   These instances support the NVMe protocol. For more information, see [Overview of the NVMe protocol](/help/en/ecs/user-guide/nvme-protocol).
        
    -   Supports [elastic ephemeral disks](/help/en/ecs/user-guide/elastic-ephemeral-disks), [ESSDs](/help/en/ecs/user-guide/essds), [ESSD AutoPL disks](/help/en/ecs/user-guide/essd-autopl-disks), and [Regional ESSDs](/help/en/ecs/user-guide/regional-essd-disks). For information about disks, see [Overview of Block Storage](/help/en/ecs/user-guide/elastic-block-storage-devices).
        
-   **Network:**
    
    -   These instances support IPv4 and IPv6. For information about IPv6 communication, see [IPv6 communication](/help/en/ecs/user-guide/step-1-create-a-vpc-that-supports-ipv6-addressing-step-1-create-a-vpc-that-supports-ipv6-addressing).
        
    -   Provides ultra-high network performance with a packet forwarding rate of 30,000,000 pps.
        
    -   Supports ERIs to allow inter-instance RDMA-based communication in VPCs and provides up to 160 Gbit/s of bandwidth per instance, which is suitable for training tasks based on CV models and traditional models.
        
        **Note**
        
        For information about how to use ERIs, see [Enable eRDMA on an enterprise-level instance](/help/en/ecs/user-guide/configure-erdma-on-a-cpu-instance#task-2128004).
        

ebmgn8is instance types

**Instance type**

**vCPU**

**Memory (GiB)**

**GPU**

**GPU memory**

**Network baseline bandwidth (Gbit/s)**

**Packet forwarding rate (pps)**

**Private IPv4 addresses per ENI**

**IPv6 addresses per ENI**

**NIC queues (Primary ENI/Secondary ENI)**

**ENIs**

**Maximum attached data disks**

**Maximum disk bandwidth (Gbit/s)**

ecs.ebmgn8is.32xlarge

128

1024

L20 \* 8

48GB\*8

160 (80 × 2)

30,000,000

30

30

64/16

32

31

6

**Note**

The boot mode of the images that are used by instances of this instance family must be UEFI. If you want to use custom images on the instances, make sure that the images support the UEFI boot mode and the boot mode of the images is set to UEFI. For information about how to set the boot mode of a custom image, see [Instance boot mode](/help/en/ecs/user-guide/instance-startup-mode#589d06745c7w0).

## ebmgn7e, GPU-accelerated compute-optimized ECS Bare Metal Instance family

-   **Introduction**: This instance family uses the SHENLONG architecture to provide flexible and powerful software-defined compute.
    
-   **Use cases:**
    
    -   Deep learning training and development
        
    -   High-performance computing (HPC) and simulations
        
    
    **Important**
    
    When you use AI training services that feature a high communication load, such as transformer models, you must enable NVLink for GPU-to-GPU communication. Otherwise, data may be damaged due to unpredictable failures that are caused by large-scale data transmission over Peripheral Component Interconnect Express (PCIe) links. If you do not understand the topology of the communication links that are used for AI training services, [submit a ticket](https://smartservice.console.alibabacloud.com/console.htm) to obtain technical support.
    
-   **Compute:**
    
    -   Uses 2.9 GHz Intel® Xeon® Scalable processors that deliver an all-core turbo frequency of 3.5 GHz and supports PCIe 4.0 interfaces.
        
    
-   **Storage:**
    
    -   These are I/O optimized instances.
        
    -   Supports [ESSDs](/help/en/ecs/user-guide/essds), [ESSD AutoPL disks](/help/en/ecs/user-guide/essd-autopl-disks), and [Regional ESSDs](/help/en/ecs/user-guide/regional-essd-disks). For information about disks, see [Overview of Block Storage](/help/en/ecs/user-guide/elastic-block-storage-devices).
        
-   **Network:**
    
    -   These instances support IPv4 and IPv6. For information about IPv6 communication, see [IPv6 communication](/help/en/ecs/user-guide/step-1-create-a-vpc-that-supports-ipv6-addressing-step-1-create-a-vpc-that-supports-ipv6-addressing).
        
    -   Provides ultra-high network performance with a packet forwarding rate of 24,000,000 pps.
        

ebmgn7e instance types

**Instance type**

**vCPU**

**Memory (GiB)**

**GPU memory**

**Network baseline bandwidth (Gbit/s)**

**Packet forwarding rate (pps)**

**NIC queues (Primary NIC/Secondary NIC)**

**ENIs**

**Private IPv4 addresses per ENI**

**IPv6 addresses per ENI**

ecs.ebmgn7e.32xlarge

128

1024

80GB \* 8

64

24,000,000

32/12

32

10

1

You must check the status of the multi-instance GPU (MIG) feature and enable or disable the MIG feature after you start an ebmgn7e instance. For information about the MIG feature, see [NVIDIA Multi-Instance GPU User Guide](https://docs.nvidia.com/datacenter/tesla/mig-user-guide/index.html#supported-gpus).

The following table describes whether the MIG feature is supported by the instance types in the ebmgn7e instance family.

**Instance type**

**Support for MIG**

**Description**

ecs.ebmgn7e.32xlarge

Yes

The MIG feature is supported by ebmgn7e instances.

## ebmgn7i, GPU-accelerated compute-optimized ECS Bare Metal Instance family

-   **Introduction**: This instance family uses the SHENLONG architecture to provide flexible and powerful software-defined compute.
    
-   **Use cases:**
    
    -   Concurrent AI inference tasks that require high-performance CPUs, memory, and GPUs, such as image recognition, speech recognition, and behavior identification
        
    -   Compute-intensive graphics processing tasks that require high-performance 3D graphics virtualization capabilities, such as remote graphic design and cloud gaming
        
    -   Scenarios that require high network bandwidth and disk bandwidth, such as the creation of high-performance render farms
        
    -   Small-scale deep learning and training applications that require high network bandwidth
        
-   **Compute:**
    
    -   Uses NVIDIA A10 GPUs that have the following features:
        
        -   Innovative NVIDIA Ampere architecture
            
        -   Support for acceleration features such as vGPU, RTX technology, and TensorRT inference engine
            
    -   Uses 2.9 GHz Intel® Xeon® Scalable (Ice Lake) processors that deliver an all-core turbo frequency of 3.5 GHz.
        
-   **Storage:**
    
    -   These are I/O optimized instances.
        
    -   Supports [ESSDs](/help/en/ecs/user-guide/essds), [ESSD AutoPL disks](/help/en/ecs/user-guide/essd-autopl-disks), and [Regional ESSDs](/help/en/ecs/user-guide/regional-essd-disks). For information about disks, see [Overview of Block Storage](/help/en/ecs/user-guide/elastic-block-storage-devices).
        
-   **Network:**
    
    -   These instances support IPv4 and IPv6. For information about IPv6 communication, see [IPv6 communication](/help/en/ecs/user-guide/step-1-create-a-vpc-that-supports-ipv6-addressing-step-1-create-a-vpc-that-supports-ipv6-addressing).
        
    -   Provides ultra-high network performance with a packet forwarding rate of 24,000,000 pps.
        

ebmgn7i instance types

**Instance type**

**vCPU**

**Memory (GiB)**

**GPU**

**GPU memory**

**Network baseline bandwidth (Gbit/s)**

**Packet forwarding rate (pps)**

**NIC queues**

**ENIs**

**Private IPv4 addresses per ENI**

**IPv6 addresses per ENI**

ecs.ebmgn7i.32xlarge

128

768

NVIDIA A10 \* 4

24GB \* 4

64

24,000,000

32

32

10

1

## GPU-accelerated compute-optimized ECS Bare Metal Instance family ebmgn7

-   **Introduction**: This instance family uses the SHENLONG architecture to provide flexible and powerful software-defined compute.
    
-   **Use cases:**
    
    -   Deep learning applications, such as training applications of AI algorithms used in image classification, autonomous vehicles, and speech recognition
        
    -   Scientific computing applications that require robust GPU computing capabilities, such as computational fluid dynamics, computational finance, molecular dynamics, and environmental analytics
        
-   **Compute:**
    
    -   Uses 2.5 GHz Intel® Xeon® Platinum 8269CY (Cascade Lake) processors.
        
-   **Storage:**
    
    -   These are I/O optimized instances.
        
    -   Supports [ESSDs](/help/en/ecs/user-guide/essds), [ESSD AutoPL disks](/help/en/ecs/user-guide/essd-autopl-disks), and [Regional ESSDs](/help/en/ecs/user-guide/regional-essd-disks). For information about disks, see [Overview of Block Storage](/help/en/ecs/user-guide/elastic-block-storage-devices).
        
-   **Network:**
    
    -   These instances support IPv4 and IPv6. For information about IPv6 communication, see [IPv6 communication](/help/en/ecs/user-guide/step-1-create-a-vpc-that-supports-ipv6-addressing-step-1-create-a-vpc-that-supports-ipv6-addressing).
        
    -   Provides high network performance based on large computing capacity.
        

ebmgn7 instance types

**Instance type**

**vCPU**

**Memory (GiB)**

**GPU memory**

**Network baseline bandwidth (Gbit/s)**

**Packet forwarding rate (pps)**

**NIC queues**

**ENIs**

**Private IPv4 addresses per ENI**

**IPv6 addresses per ENI**

ecs.ebmgn7.26xlarge

104

768

40GB\*8

30

18,000,000

16

15

10

1

Check the status of the MIG (Multi-Instance GPU) feature and enable or disable it after you start an ebmgn7 instance. The system does not guarantee whether the MIG (Multi-Instance GPU) feature is enabled or disabled. For more information about MIG (Multi-Instance GPU), see [NVIDIA Multi-Instance GPU User Guide](https://docs.nvidia.com/datacenter/tesla/mig-user-guide/index.html#supported-gpus).

The following table describes whether the MIG feature is supported by ebmgn7 instances:

**Instance type**

**Support for MIG**

**Description**

ecs.ebmgn7.26xlarge

Yes

ebmgn7 bare metal instances support the MIG feature.

## ebmgn6e, GPU-accelerated compute-optimized ECS Bare Metal Instance family

-   **Introduction:**
    
    -   This instance family uses the SHENLONG architecture to provide flexible and powerful software-defined compute.
        
    -   This instance family uses NVIDIA V100 GPUs that each have 32 GB of GPU memory and support NVLink.
        
    -   This instance family uses NVIDIA V100 GPUs (SXM2-based) that have the following features:
        
        -   Innovative NVIDIA Volta architecture
            
        -   32 GB of HBM2 memory (900 GB/s bandwidth) per GPU
            
        -   5,120 CUDA cores per GPU
            
        -   640 Tensor cores per GPU
            
        -   Up to six NVLink connections per GPU, each of which provides a bandwidth of 25 GB/s in each direction for a total bandwidth of 300 GB/s (6 × 25 × 2 = 300)
            
-   **Use cases:**
    
    -   Deep learning applications, such as training and inference applications of AI algorithms used in image classification, autonomous vehicles, and speech recognition
        
    -   Scientific computing applications, such as computational fluid dynamics, computational finance, molecular dynamics, and environmental analytics
        
-   **Compute:**
    
    -   Offers a CPU-to-memory ratio of 1:8.
        
    -   Uses 2.5 GHz Intel® Xeon® Platinum 8163 (Skylake) processors.
        
-   **Storage:**
    
    -   These are I/O optimized instances.
        
    -   Supports [ESSDs](/help/en/ecs/user-guide/essds), [ESSD AutoPL disks](/help/en/ecs/user-guide/essd-autopl-disks), [Regional ESSDs](/help/en/ecs/user-guide/regional-essd-disks), standard SSDs, and ultra disks. For information about disks, see [Overview of Block Storage](/help/en/ecs/user-guide/elastic-block-storage-devices).
        
-   **Network:**
    
    -   These instances support IPv4 and IPv6. For information about IPv6 communication, see [IPv6 communication](/help/en/ecs/user-guide/step-1-create-a-vpc-that-supports-ipv6-addressing-step-1-create-a-vpc-that-supports-ipv6-addressing).
        
    -   Provides high network performance based on large computing capacity.
        

ebmgn6e instance types

**Instance type**

**vCPU**

**Memory (GiB)**

**GPU**

**GPU memory**

**Network baseline bandwidth (Gbit/s)**

**Packet forwarding rate (pps)**

**NIC queues**

**ENIs**

**Private IPv4 addresses per ENI**

**IPv6 addresses per ENI**

ecs.ebmgn6e.24xlarge

96

768

NVIDIA V100 \* 8

32GB \* 8

32

4,800,000

16

15

10

1

## ebmgn6v, GPU-accelerated compute-optimized ECS Bare Metal Instance family

-   **Introduction:**
    
    -   This instance family uses the SHENLONG architecture to provide flexible and powerful software-defined compute.
        
    -   This instance family uses NVIDIA V100 GPUs.
        
    -   This instance family uses NVIDIA V100 GPUs (SXM2-based) that have the following features:
        
        -   Innovative NVIDIA Volta architecture
            
        -   16 GB of HBM2 memory (900 GB/s bandwidth) per GPU
            
        -   5,120 CUDA cores per GPU
            
        -   640 Tensor cores per GPU
            
        -   Up to six NVLink connections per GPU, each of which provides a bandwidth of 25 GB/s in each direction for a total bandwidth of 300 GB/s (6 × 25 × 2 = 300)
            
-   **Use cases:**
    
    -   Deep learning applications, such as training and inference applications of AI algorithms used in image classification, autonomous vehicles, and speech recognition
        
    -   Scientific computing applications, such as computational fluid dynamics, computational finance, molecular dynamics, and environmental analytics
        
-   **Compute:**
    
    -   Offers a CPU-to-memory ratio of 1:4.
        
    -   Uses 2.5 GHz Intel® Xeon® Platinum 8163 (Skylake) processors.
        
-   **Storage:**
    
    -   These are I/O optimized instances.
        
    -   Supports [ESSDs](/help/en/ecs/user-guide/essds), [ESSD AutoPL disks](/help/en/ecs/user-guide/essd-autopl-disks), [Regional ESSDs](/help/en/ecs/user-guide/regional-essd-disks), standard SSDs, and ultra disks. For information about disks, see [Overview of Block Storage](/help/en/ecs/user-guide/elastic-block-storage-devices).
        
-   **Network:**
    
    -   These instances support IPv4 and IPv6. For information about IPv6 communication, see [IPv6 communication](/help/en/ecs/user-guide/step-1-create-a-vpc-that-supports-ipv6-addressing-step-1-create-a-vpc-that-supports-ipv6-addressing).
        
    -   Provides high network performance based on large computing capacity.
        

ebmgn6v instance types

**Instance type**

**vCPU**

**Memory (GiB)**

**GPU**

**GPU memory**

**Network baseline bandwidth (Gbit/s)**

**Packet forwarding rate (pps)**

**NIC queues**

**ENIs**

**Private IPv4 addresses per ENI**

**IPv6 addresses per ENI**

ecs.ebmgn6v.24xlarge

96

384

NVIDIA V100 \* 8

16GB \* 8

30

4,500,000

8

32

10

1

## ebmgn6i, GPU-accelerated compute-optimized ECS Bare Metal Instance family

-   **Introduction:**
    
    -   This instance family uses the SHENLONG architecture to provide flexible and powerful software-defined compute.
        
    -   This instance family uses NVIDIA T4 GPUs that have the following features:
        
        -   Innovative NVIDIA Turing architecture
            
        -   16 GB of memory (320 GB/s bandwidth) per GPU
            
        -   2,560 CUDA cores per GPU
            
        -   Up to 320 Turing Tensor cores per GPU
            
        -   Mixed-precision Tensor cores that support 65 FP16 TFLOPS, 130 INT8 TOPS, and 260 INT4 TOPS
            
-   **Use cases:**
    
    -   AI (deep learning and machine learning) inference for computer vision, voice recognition, speech synthesis, natural language processing (NLP), machine translation, and reference systems
        
    -   Real-time rendering for cloud gaming
        
    -   Real-time rendering for Augmented Reality (AR) and Virtual Reality (VR) applications
        
    -   Graphics workstations or graphics-heavy computing
        
    -   GPU-accelerated databases
        
    -   High-performance computing
        
-   **Compute:**
    
    -   Offers a CPU-to-memory ratio of 1:4.
        
    -   Uses 2.5 GHz Intel® Xeon® Platinum 8163 (Skylake) processors.
        
-   **Storage:**
    
    -   These are I/O optimized instances.
        
    -   Supports [ESSDs](/help/en/ecs/user-guide/essds), [ESSD AutoPL disks](/help/en/ecs/user-guide/essd-autopl-disks), [Regional ESSDs](/help/en/ecs/user-guide/regional-essd-disks), standard SSDs, and ultra disks. For information about disks, see [Overview of Block Storage](/help/en/ecs/user-guide/elastic-block-storage-devices).
        
-   **Network:**
    
    -   These instances support IPv4 and IPv6. For information about IPv6 communication, see [IPv6 communication](/help/en/ecs/user-guide/step-1-create-a-vpc-that-supports-ipv6-addressing-step-1-create-a-vpc-that-supports-ipv6-addressing).
        
    -   Provides high network performance based on large computing capacity.
        

ebmgn6i instance types

**Instance type**

**vCPU**

**Memory (GiB)**

**GPU**

**GPU memory**

**Network baseline bandwidth (Gbit/s)**

**Packet forwarding rate (pps)**

**NIC queues**

**ENIs**

**Private IPv4 addresses per ENI**

**IPv6 addresses per ENI**

ecs.ebmgn6i.24xlarge

96

384

NVIDIA T4 \* 4

16GB \* 4

30

4,500,000

8

32

10

1

## gn5i, GPU-accelerated compute-optimized instance family

-   **Use cases**: Server-side GPU computing workloads, such as deep learning inference and multimedia encoding and decoding.
    
-   Compute:
    
    -   Uses NVIDIA P4 GPUs.
        
    -   Offers a CPU-to-memory ratio of 1:4.
        
    -   Uses 2.5 GHz Intel® Xeon® E5-2682 v4 (Broadwell) processors.
        
-   Storage:
    
    -   Is an instance family in which all instances are I/O optimized.
        
    -   Supports standard SSDs and ultra disks.
        
-   Network:
    
    -   Supports IPv4 and IPv6. For information about IPv6 communication, see [IPv6 communication](/help/en/ecs/user-guide/step-1-create-a-vpc-that-supports-ipv6-addressing-step-1-create-a-vpc-that-supports-ipv6-addressing).
        
    -   Provides high network performance based on large computing capacity.
        

gn5i includes the instance types and metric data listed in the following table.

**Instance type**

**vCPUs**

**Memory (GiB)**

**GPUs**

**GPU memory**

**Network baseline bandwidth (Gbit/s)**

**Packet forwarding rate (pps)**

**NIC queues**

**ENIs**

**Private IPv4 addresses per ENI**

**IPv6 addresses per ENI**

ecs.gn5i-c2g1.large

2

8

NVIDIA P4 × 1

8 GB × 1

1

100,000

2

2

6

1

ecs.gn5i-c4g1.xlarge

4

16

NVIDIA P4 × 1

8 GB × 1

1.5

200,000

2

3

10

1

ecs.gn5i-c8g1.2xlarge

8

32

NVIDIA P4 × 1

8 GB × 1

2

400,000

4

4

10

1

ecs.gn5i-c16g1.4xlarge

16

64

NVIDIA P4 × 1

8 GB × 1

3

800,000

4

8

20

1

ecs.gn5i-c16g1.8xlarge

32

128

NVIDIA P4 × 2

8 GB × 2

6

1,200,000

8

8

20

1

ecs.gn5i-c28g1.14xlarge

56

224

NVIDIA P4 × 2

8 GB × 2

10

2,000,000

14

8

20

1

## gn5, GPU-accelerated compute-optimized instance family

-   **Use cases**:
    
    -   Deep learning
        
    -   Scientific computing applications, such as computational fluid dynamics, computational finance, genomics, and environmental analytics
        
    -   Server-side GPU compute workloads, such as high-performance computing, rendering, and multi-media encoding and decoding
        
-   **Compute**:
    
    -   Uses NVIDIA P100 GPUs.
        
    -   Offers multiple CPU-to-memory ratios.
        
    -   Uses 2.5 GHz Intel® Xeon® E5-2682 v4 (Broadwell) processors.
        
-   **Storage**:
    
    -   Supports high-performance local Non-Volatile Memory Express (NVMe) SSDs.
        
    -   Is an instance family in which all instances are I/O optimized.
        
    -   Supports standard SSDs and ultra disks.
        
-   **Network**:
    
    -   Supports only IPv4.
        
    -   Provides high network performance based on large computing capacity.
        

gn5 includes the instance types and metric data listed in the following table.

**Instance type**

**vCPUs**

**Memory (GiB)**

**GPUs**

**GPU memory**

**Local storage (GiB)**

**Network baseline bandwidth (Gbit/s)**

**Packet forwarding rate (pps)**

**NIC queues**

**ENIs**

**Private IPv4 addresses per ENI**

ecs.gn5-c4g1.xlarge

4

30

1 × NVIDIA P100

1 × 16 GB

440

3

300,000

1

3

10

ecs.gn5-c8g1.2xlarge

8

60

1 × NVIDIA P100

1 × 16 GB

440

3

400,000

1

4

10

ecs.gn5-c4g1.2xlarge

8

60

2 × NVIDIA P100

2 × 16 GB

880

5

1,000,000

4

4

10

ecs.gn5-c8g1.4xlarge

16

120

2 × NVIDIA P100

2 × 16 GB

880

5

1,000,000

4

8

20

ecs.gn5-c28g1.7xlarge

28

112

1 × NVIDIA P100

1 × 16 GB

440

5

2,250,000

7

8

10

ecs.gn5-c8g1.8xlarge

32

240

4 × NVIDIA P100

4 × 16 GB

1760

10

2,000,000

8

8

20

ecs.gn5-c28g1.14xlarge

56

224

2 × NVIDIA P100

2 × 16 GB

880

10

4,500,000

14

8

20

ecs.gn5-c8g1.14xlarge

54

480

8 × NVIDIA P100

8 × 16 GB

3520

25

4,000,000

14

8

10
