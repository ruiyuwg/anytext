When you install an NVIDIA driver on a node, you must use a version that is supported by ACK. This topic lists the NVIDIA driver versions that ACK supports.

## **Introduction to CUDA**

CUDA is a parallel computing platform and programming model that was introduced by NVIDIA in 2007. CUDA leverages graphics processing units (GPUs) to significantly boost computational performance.

The following figure shows the CUDA architecture. The key differences between the Driver API and Runtime API layers in the CUDA software stack are as follows.

-   Driver API: Offers full functionality but is complex to use.
    
-   CUDA Runtime API: Wraps part of the Driver API and hides certain driver initialization operations, which makes it easier to use.
    

The CUDA Driver API is provided by the [NVIDIA Driver](https://www.nvidia.com/Download/index.aspx) package, while CUDA libraries and the CUDA Runtime are provided by the [CUDA Toolkit](https://developer.nvidia.com/cuda-toolkit) package.

![cuda.png](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/6410815961/p693306.png)

## **Driver and cluster version compatibility**

The following table lists the NVIDIA GPU driver versions that are supported by each ACK cluster version.

**Important**

-   LINGJUN Clusters and ACK managed clusters Pro Edition have GPU drivers pre-installed in their OS images and do not support installing a specific GPU driver version using node labels. ACK Edge clusters do not support installing a specific GPU driver version using node pool labels.
    

-   Currently, driver versions 510 and later may occasionally trigger XID 119 or XID 120 errors. If you encounter these issues, see [How to troubleshoot GPU disconnection caused by XID 119/XID 120 errors?](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/gpu-faq#55a6b327214cg) for troubleshooting steps.
    
-   Driver version 550 includes fixes for frequent XID 119, XID 120, or XID 31 errors and kernel panic issues in certain applications. You can upgrade your existing GPU nodes to driver version 550.
    
-   ACK periodically updates the default driver version for different cluster versions. This may cause newly created GPU nodes in your cluster to use a different driver version. To prevent this, you can specify a driver version for your node pool. For more information, see [Customize node GPU driver version by specifying a version number](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/customize-the-gpu-driver-version-of-the-node-by-specifying-the-version-number#title-w20-pkr-1sq).
    
-   When you create a node pool, if the driver version that you specify is not listed in [Driver and operating system kernel version compatibility](#0a08c72bc26n4), ACK automatically installs the default driver version. If you specify a driver version that is incompatible with the latest OS, the node may fail to be added. In this case, choose the latest supported driver version.
    
-   After you upgrade the OS kernel version, the GPU driver installed on the node may become unavailable. To resolve this issue, you can remove the node from its node pool and then add it back. You can also [manually upgrade the GPU node driver](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/manually-upgrade-the-nvidia-driver-of-a-node).
    
-   When you use monitoring components with driver series 570 or later, ensure that the component versions meet the following requirements: ack-arms-prometheus ≥ 1.1.33 and ack-gpu-exporter ≥ 2.3.0.
    
-   If you [customize the GPU driver version for nodes in a node pool by specifying a version number](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/customize-the-gpu-driver-version-of-the-node-by-specifying-the-version-number) or [using an OSS URL](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/customize-the-node-gpu-driver-through-oss-url), the operating system and the driver version may be incompatible after you upgrade the OS image. See [NVIDIA driver versions supported by ACK](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/ack-supported-nvidia-driver-version-list) and select the latest compatible driver.
    
-   When the instance family is `gn9t`, do not use driver versions earlier than 570.153.02, because this may frequently trigger GPU device disconnection. The symptoms are as follows:
    
    -   Running the `nvidia-smi` command shows fewer GPUs than are physically present or outputs `No devices were found`.
        
    -   Running the `lspci | grep -i nvidia` command still detects the device, but the device status shows `[rev b0]`.
        

**Cluster version**

**Default driver version**

**Supports custom driver version?**

**Supported NVIDIA driver versions**

1.28 and later

535.161.07

570.169 (for ecs.gn9t and ecs.ebmgn9t instances)

Yes

-   570.195.03
    
-   570.169
    
-   570.133.20
    
-   550.163.01
    
-   550.144.03
    
-   550.90.07
    
-   535.230.02
    
-   535.161.07
    

The following driver versions are incompatible with the latest operating systems.

-   535.129.03
    
-   525.147.05
    
-   515.105.01
    
-   510.108.03
    
-   535.54.03
    
-   525.105.17
    
-   515.86.01
    
-   510.47.03
    
-   470.161.03
    
-   470.103.01
    
-   470.82.01
    
-   470.57.02
    
-   460.91.03
    

1.26

Yes

1.24

Yes

1.22

Yes

1.20

Yes

-   450.119.04
    
-   450.102.04
    
-   450.82.02
    
-   450.51.06
    
-   418.181.07
    
-   418.87.01
    

1.18.8

418.181.07

Yes

1.16.9

418.181.07

Yes

1.16.6

418.87.01

No

1.14.8

418.181.07

Yes

## **Driver and GPU card type/instance type compatibility**

**Item**

**gn8v**

**gn8is**

**gn7e**

**gn7i**

**gn7**

**gn6e**

**gn6i**

**gn6v**

**gn5i**

**gn5**

**Product Type**

Data Center / Tesla

Data Center / Tesla

Data Center / Tesla

Data Center / Tesla

Data Center / Tesla

Data Center / Tesla

Data Center / Tesla

Data Center / Tesla

Data Center / Tesla

Data Center / Tesla

**Product Series**

H-Series

L-Series

A-Series

A-Series

A-Series

V-Series

T-Series

V-Series

P-Series

P-Series

Recommended Tesla driver version

570.133.20 or later

450.80.02 or later

460.73.01 or later

450.80.02 or later

410.79 or later

Recommended CUDA Toolkit version

[CUDA Toolkit 12.4 Update 1](https://developer.nvidia.com/cuda-12-4-1-download-archive?target_os=Linux&target_arch=x86_64)

[CUDA Toolkit 11.0 Update 1](https://developer.nvidia.com/cuda-11-0-1-download-archive?target_os=Linux&target_arch=x86_64)

[CUDA Toolkit 11.2](https://developer.nvidia.com/cuda-11.2.0-download-archive?target_os=Linux&target_arch=x86_64)

[CUDA Toolkit 11.0 Update 1](https://developer.nvidia.com/cuda-11-0-1-download-archive?target_os=Linux&target_arch=x86_64)

[CUDA Toolkit 10.1 Update 2](https://developer.nvidia.com/cuda-10.1-download-archive-update2?target_os=Linux&target_arch=x86_64)

**Note**

-   This table lists GPU information for only some common GPU-accelerated compute-optimized instance types. Instances with the same GPU card share the same GPU information, such as product type, product series, and product family. For example, ebmgn7i and gn7i instances both use NVIDIA A10 GPUs, so they have the same product type, series, and family.
    
-   When you manually install a Tesla driver and a CUDA package, you must ensure that the driver version is compatible with the CUDA package version. For more information, see [CUDA Compatibility](https://docs.nvidia.com/deploy/cuda-compatibility/index.html#binary-compatibility__table-toolkit-driver).
    

## **Driver and operating system kernel version compatibility**

> For information about the mapping between kernel versions and OS image IDs, see the [Kernel version and image ID mapping table](#9d49503616g9q).

**Driver version**

**Alibaba Cloud Linux 2**

**Alibaba Cloud Linux 3**

**CentOS**

**Ubuntu**

**570.195.03**

Supported range:

\[4.19.81-17.1.al7.x86\_64, ∞)

Supported range:

\[5.10.23-5.al8.x86\_64, ∞)

Unsupported range:

\[3.10.0-862.14.4.el7.x86\_64, ∞)

Supported range:

\[5.15.0-40-generic, ∞)

**570.169**

Supported range:

\[4.19.81-17.1.al7.x86\_64, ∞)

Supported range:

\[5.10.23-5.al8.x86\_64, ∞)

Unsupported range:

\[3.10.0-862.14.4.el7.x86\_64, ∞)

Supported range:

\[5.15.0-40-generic, ∞)

**570.133.20**

Supported range:

\[4.19.81-17.1.al7.x86\_64, ∞)

Supported range:

\[5.10.23-5.al8.x86\_64, ∞)

Unsupported range:

\[3.10.0-862.14.4.el7.x86\_64, ∞)

Supported range:

\[5.15.0-40-generic, ∞)

**550.163.01**

Supported range:

\[4.19.81-17.1.al7.x86\_64, ∞)

Supported range:

\[5.10.23-5.al8.x86\_64, ∞)

Supported range:

\[3.10.0-862.14.4.el7.x86\_64, ∞)

Supported range:

\[5.15.0-40-generic, ∞)

**550.144.03**

Supported range:

\[4.19.81-17.1.al7.x86\_64, ∞)

Supported range:

\[5.10.23-5.al8.x86\_64, ∞)

Supported range:

\[3.10.0-862.14.4.el7.x86\_64, ∞)

Supported range:

\[5.15.0-40-generic, ∞)

**550.90.07**

Supported range:

\[4.19.81-17.1.al7.x86\_64, ∞)

Supported range:

\[5.10.23-5.al8.x86\_64, ∞)

Supported range:

\[3.10.0-862.14.4.el7.x86\_64, ∞)

Supported range:

\[5.15.0-40-generic, ∞)

**550.54.15**

Supported range:

\[4.19.81-17.1.al7.x86\_64, ∞)

Supported range:

\[5.10.23-5.al8.x86\_64, ∞)

Supported range:

\[3.10.0-862.14.4.el7.x86\_64, ∞)

Supported range:

\[5.15.0-40-generic, ∞)

**550.54.14**

Supported range:

\[4.19.81-17.1.al7.x86\_64, ∞)

Supported range:

\[5.10.23-5.al8.x86\_64, ∞)

Supported range:

\[3.10.0-862.14.4.el7.x86\_64, ∞)

Supported range:

\[5.15.0-40-generic, ∞)

**535.247.01**

Supported range:

\[4.19.81-17.1.al7.x86\_64, ∞)

Supported range:

\[5.10.23-5.al8.x86\_64, ∞)

Supported range:

\[3.10.0-862.14.4.el7.x86\_64, ∞)

Supported range:

\[5.15.0-40-generic, ∞)

**535.230.02**

Supported range:

\[4.19.81-17.1.al7.x86\_64, ∞)

Supported range:

\[5.10.23-5.al8.x86\_64, ∞)

Supported range:

\[3.10.0-862.14.4.el7.x86\_64, ∞)

Supported range:

\[5.15.0-40-generic, ∞)

**535.161.07**

Supported range:

\[4.19.81-17.1.al7.x86\_64, ∞)

Supported range:

\[5.10.23-5.al8.x86\_64, ∞)

Supported range:

\[3.10.0-862.14.4.el7.x86\_64, ∞)

Supported range:

\[5.15.0-40-generic, ∞)

**535.129.03**

Supported range:

\[4.19.81-17.1.al7.x86\_64, ∞)

Supported range:

\[5.10.23-5.al8.x86\_64, 5.10.134-17.3.al8.x86\_64\]

Unsupported range:

\[5.10.134-18.al8.x86\_64, ∞)

Supported range:

\[3.10.0-862.14.4.el7.x86\_64, ∞)

Supported range:

\[5.15.0-40-generic, 5.15.0-101-generic\]

Unsupported range:

\[5.15.0-106-generic, ∞)

**535.98**

Supported range:

\[4.19.81-17.1.al7.x86\_64, ∞)

Supported range:

\[5.10.23-5.al8.x86\_64, 5.10.134-17.3.al8.x86\_64\]

Unsupported range:

\[5.10.134-18.al8.x86\_64, ∞)

Supported range:

\[3.10.0-862.14.4.el7.x86\_64, ∞)

Supported range:

\[5.15.0-40-generic, 5.15.0-101-generic\]

Unsupported range:

\[5.15.0-106-generic, ∞)

**535.54.03**

Supported range:

\[4.19.81-17.1.al7.x86\_64, ∞)

Supported range:

\[5.10.23-5.al8.x86\_64, 5.10.134-17.3.al8.x86\_64\]

Unsupported range:

\[5.10.134-18.al8.x86\_64, ∞)

Supported range:

\[3.10.0-862.14.4.el7.x86\_64, ∞)

Supported range:

\[5.15.0-40-generic, 5.15.0-101-generic\]

Unsupported range:

\[5.15.0-106-generic, ∞)

**525.147.05**

Supported range:

\[4.19.81-17.1.al7.x86\_64, ∞)

Supported range:

\[5.10.23-5.al8.x86\_64, 5.10.134-17.3.al8.x86\_64\]

Unsupported range:

\[5.10.134-18.al8.x86\_64, ∞)

Supported range:

\[3.10.0-862.14.4.el7.x86\_64, ∞)

Supported range:

\[5.15.0-40-generic, 5.15.0-101-generic\]

Unsupported range:

\[5.15.0-106-generic, ∞)

**525.105.17**

Supported range:

\[4.19.81-17.1.al7.x86\_64, ∞)

Supported range:

\[5.10.23-5.al8.x86\_64, 5.10.134-17.3.al8.x86\_64\]

Unsupported range:

\[5.10.134-18.al8.x86\_64, ∞)

Supported range:

\[3.10.0-862.14.4.el7.x86\_64, ∞)

Supported range:

\[5.15.0-40-generic, 5.15.0-101-generic\]

Unsupported range:

\[5.15.0-106-generic, ∞)

**515.105.01**

Supported range:

\[4.19.81-17.1.al7.x86\_64, ∞)

Supported range:

\[5.10.23-5.al8.x86\_64, 5.10.134-17.3.al8.x86\_64\]

Unsupported range:

\[5.10.134-18.al8.x86\_64, ∞)

Supported range:

\[3.10.0-862.14.4.el7.x86\_64, ∞)

Supported range:

\[5.15.0-40-generic, 5.15.0-101-generic\]

Unsupported range:

\[5.15.0-106-generic, ∞)

**515.86.01**

Supported range:

\[4.19.81-17.1.al7.x86\_64, ∞)

Supported range:

\[5.10.23-5.al8.x86\_64, 5.10.134-17.3.al8.x86\_64\]

Unsupported range:

\[5.10.134-18.al8.x86\_64, ∞)

Supported range:

\[3.10.0-862.14.4.el7.x86\_64, ∞)

Supported range:

\[5.15.0-40-generic, 5.15.0-101-generic\]

Unsupported range:

\[5.15.0-106-generic, ∞)

**510.108.03**

Supported range:

\[4.19.81-17.1.al7.x86\_64, ∞)

Supported range:

\[5.10.23-5.al8.x86\_64, 5.10.134-17.3.al8.x86\_64\]

Unsupported range:

\[5.10.134-18.al8.x86\_64, ∞)

Supported range:

\[3.10.0-862.14.4.el7.x86\_64, ∞)

Supported range:

\[5.15.0-40-generic, 5.15.0-101-generic\]

Unsupported range:

\[5.15.0-106-generic, ∞)

**510.54**

Supported range:

\[4.19.81-17.1.al7.x86\_64, ∞)

Supported range:

\[5.10.23-5.al8.x86\_64, 5.10.134-14.al8.x86\_64\]

Unsupported range:

\[5.10.134-15.al8.x86\_64, ∞)

Supported range:

\[3.10.0-862.14.4.el7.x86\_64, ∞)

Supported range:

\[5.15.0-40-generic, 5.15.0-101-generic\]

Unsupported range:

\[5.15.0-106-generic, ∞)

**510.47.03**

Supported range:

\[4.19.81-17.1.al7.x86\_64, ∞)

Supported range:

\[5.10.23-5.al8.x86\_64, 5.10.134-14.al8.x86\_64\]

Unsupported range:

\[5.10.134-15.al8.x86\_64, ∞)

Supported range:

\[3.10.0-862.14.4.el7.x86\_64, ∞)

Supported range:

\[5.15.0-40-generic, 5.15.0-101-generic\]

Unsupported range:

\[5.15.0-106-generic, ∞)

**470.256.02**

Supported range:

\[4.19.81-17.1.al7.x86\_64, ∞)

Supported range:

\[5.10.23-5.al8.x86\_64, ∞)

Supported range:

\[3.10.0-862.14.4.el7.x86\_64, ∞)

Supported range:

\[5.15.0-40-generic, ∞)

**470.161.03**

Supported range:

\[4.19.81-17.1.al7.x86\_64, ∞)

Supported range:

\[5.10.23-5.al8.x86\_64, 5.10.134-17.3.al8.x86\_64\]

Unsupported range:

\[5.10.134-18.al8.x86\_64, ∞)

Supported range:

\[3.10.0-862.14.4.el7.x86\_64, ∞)

Supported range:

\[5.15.0-40-generic, 5.15.0-101-generic\]

Unsupported range:

\[5.15.0-106-generic, ∞)

**470.103.01**

Supported range:

\[4.19.81-17.1.al7.x86\_64, ∞)

Supported range:

\[5.10.23-5.al8.x86\_64, 5.10.134-14.al8.x86\_64\]

Unsupported range:

\[5.10.134-15.al8.x86\_64, ∞)

Supported range:

\[3.10.0-862.14.4.el7.x86\_64, ∞)

Supported range:

\[5.15.0-40-generic, 5.15.0-101-generic\]

Unsupported range:

\[5.15.0-106-generic, ∞)

**470.82.01**

Supported range:

\[4.19.81-17.1.al7.x86\_64, ∞)

Supported range:

\[5.10.23-5.al8.x86\_64, 5.10.134-14.al8.x86\_64\]

Unsupported range:

\[5.10.134-15.al8.x86\_64, ∞)

Supported range:

\[3.10.0-862.14.4.el7.x86\_64, ∞)

Supported range:

\[5.15.0-40-generic, 5.15.0-101-generic\]

Unsupported range:

\[5.15.0-106-generic, ∞)

**470.57.02**

Supported range:

\[4.19.81-17.1.al7.x86\_64, ∞)

Supported range:

\[5.10.23-5.al8.x86\_64, 5.10.134-14.al8.x86\_64\]

Unsupported range:

\[5.10.134-15.al8.x86\_64, ∞)

Supported range:

\[3.10.0-862.14.4.el7.x86\_64, ∞)

Unsupported range:

\[5.15.0-40-generic, ∞)

**460.106.00**

Supported range:

\[4.19.81-17.1.al7.x86\_64, ∞)

Supported range:

\[5.10.23-5.al8.x86\_64, 5.10.134-14.al8.x86\_64\]

Unsupported range:

\[5.10.134-15.al8.x86\_64, ∞)

Supported range:

\[3.10.0-862.14.4.el7.x86\_64, ∞)

Supported range:

\[5.15.0-40-generic, 5.15.0-101-generic\]

Unsupported range:

\[5.15.0-106-generic, ∞)

**460.91.03**

Supported range:

\[4.19.81-17.1.al7.x86\_64, ∞)

Supported range:

\[5.10.23-5.al8.x86\_64, 5.10.134-14.al8.x86\_64\]

Unsupported range:

\[5.10.134-15.al8.x86\_64, ∞)

Supported range:

\[3.10.0-862.14.4.el7.x86\_64, ∞)

Unsupported range:

\[5.15.0-40-generic, ∞)

**460.73.01**

Supported range:

\[4.19.81-17.1.al7.x86\_64, ∞)

Supported range:

\[5.10.23-5.al8.x86\_64, 5.10.134-14.al8.x86\_64\]

Unsupported range:

\[5.10.134-15.al8.x86\_64, ∞)

Supported range:

\[3.10.0-862.14.4.el7.x86\_64, ∞)

Unsupported range:

\[5.15.0-40-generic, ∞)

**460.32.03**

Supported range:

\[4.19.81-17.1.al7.x86\_64, ∞)

Supported range:

\[5.10.23-5.al8.x86\_64, 5.10.134-14.al8.x86\_64\]

Unsupported range:

\[5.10.134-15.al8.x86\_64, ∞)

Supported range:

\[3.10.0-862.14.4.el7.x86\_64, ∞)

Unsupported range:

\[5.15.0-40-generic, ∞)

**450.119.04**

Supported range:

\[4.19.81-17.1.al7.x86\_64, ∞)

Supported range:

\[5.10.23-5.al8.x86\_64, 5.10.134-14.al8.x86\_64\]

Unsupported range:

\[5.10.134-15.al8.x86\_64, ∞)

Supported range:

\[3.10.0-862.14.4.el7.x86\_64, ∞)

Unsupported range:

\[5.15.0-40-generic, ∞)

**450.102.04**

Supported range:

\[4.19.81-17.1.al7.x86\_64, ∞)

Supported range:

\[5.10.23-5.al8.x86\_64, 5.10.134-14.al8.x86\_64\]

Unsupported range:

\[5.10.134-15.al8.x86\_64, ∞)

Supported range:

\[3.10.0-862.14.4.el7.x86\_64, ∞)

Unsupported range:

\[5.15.0-40-generic, ∞)

**450.80.02**

Supported range:

\[4.19.81-17.1.al7.x86\_64, ∞)

Unsupported range:

\[5.10.23-5.al8.x86\_64, ∞)

Supported range:

\[3.10.0-862.14.4.el7.x86\_64, ∞)

Unsupported range:

\[5.15.0-40-generic, ∞)

**440.33.01**

Supported range:

\[4.19.81-17.1.al7.x86\_64, ∞)

Unsupported range:

\[5.10.23-5.al8.x86\_64, ∞)

Supported range:

\[3.10.0-862.14.4.el7.x86\_64, ∞)

Unsupported range:

\[5.15.0-40-generic, ∞)

**418.181.07**

Supported range:

\[4.19.81-17.1.al7.x86\_64, ∞)

Unsupported range:

\[5.10.23-5.al8.x86\_64, ∞)

Supported range:

\[3.10.0-862.14.4.el7.x86\_64, ∞)

Unsupported range:

\[5.15.0-40-generic, ∞)

**418.113**

Supported range:

\[4.19.81-17.1.al7.x86\_64, ∞)

Unsupported range:

\[5.10.23-5.al8.x86\_64, ∞)

Supported range:

\[3.10.0-862.14.4.el7.x86\_64, ∞)

Unsupported range:

\[5.15.0-40-generic, ∞)

**418.87.01**

Supported range:

\[4.19.81-17.1.al7.x86\_64, ∞)

Unsupported range:

\[5.10.23-5.al8.x86\_64, ∞)

Supported range:

\[3.10.0-862.14.4.el7.x86\_64, ∞)

Unsupported range:

\[5.15.0-40-generic, ∞)

**410.93**

Supported range:

\[4.19.81-17.1.al7.x86\_64, 4.19.91-18.al7.x86\_64\]

Unsupported range:

\[4.19.91-19.1.al7.x86\_64, ∞)

Unsupported range:

\[5.10.23-5.al8.x86\_64, ∞)

Supported range:

\[3.10.0-862.14.4.el7.x86\_64, 3.10.0-957.21.3.el7.x86\_64\]

Unsupported range:

\[3.10.0-1062.9.1.el7.x86\_64, ∞)

Unsupported range:

\[5.15.0-40-generic, ∞)

**410.79**

Supported range:

\[4.19.81-17.1.al7.x86\_64, 4.19.91-18.al7.x86\_64\]

Unsupported range:

\[4.19.91-19.1.al7.x86\_64, ∞)

Unsupported range:

\[5.10.23-5.al8.x86\_64, ∞)

Supported range:

\[3.10.0-862.14.4.el7.x86\_64, 3.10.0-957.21.3.el7.x86\_64\]

Unsupported range:

\[3.10.0-1062.9.1.el7.x86\_64, ∞)

Unsupported range:

\[5.15.0-40-generic, ∞)

**Expand to view the kernel version and image ID mapping table.**

**Kernel Version**

**Image Id**

5.15.0-106-generic

ubuntu\_22\_04\_x64\_20G\_alibase\_20240508.vhd

5.15.0-101-generic

ubuntu\_22\_04\_x64\_20G\_alibase\_20240322.vhd

5.15.0-40-generic

ubuntu\_22\_04\_x64\_20G\_alibase\_20220628.vhd

5.10.134-18.al8.x86\_64

aliyun\_3\_x64\_20G\_container\_optimized\_20250117.vhd

5.10.134-17.3.al8.x86\_64

aliyun\_3\_x64\_20G\_alibase\_20241103.vhd

5.10.134-15.al8.x86\_64

aliyun\_3\_x64\_20G\_alibase\_20230727.vhd

5.10.134-14.al8.x86\_64

aliyun\_3\_x64\_20G\_alibase\_20230516.vhd

5.10.23-5.al8.x86\_64

aliyun\_3\_x64\_20G\_alibase\_20210425.vhd

4.19.91-19.1.al7.x86\_64

aliyun\_2\_1903\_x64\_20G\_alibase\_20200529.vhd

4.19.91-18.al7.x86\_64

aliyun\_2\_1903\_x64\_20G\_alibase\_20200324.vhd

4.19.81-17.1.al7.x86\_64

aliyun\_2\_1903\_x64\_20G\_alibase\_20200221.vhd

3.10.0-1062.9.1.el7.x86\_64

centos\_7\_7\_x64\_20G\_alibase\_20191225.vhd

3.10.0-957.21.3.el7.x86\_64

centos\_7\_6\_x64\_20G\_alibase\_20211130.vhd

3.10.0-862.14.4.el7.x86\_64

centos\_7\_5\_x64\_20G\_alibase\_20211130.vhd

## Driver and CUDA Toolkit compatibility

Refer to the compatibility list for the CUDA Toolkit and NVIDIA driver to select an NVIDIA driver version that is appropriate for the CUDA Toolkit version used by your application. For more information, see [cuda-toolkit-release-notes](https://docs.nvidia.com/cuda/cuda-toolkit-release-notes/index.html?spm=a2c4g.207292.0.0.62f2778erY9RgV).

## **Get Driver API version**

If an NVIDIA driver package is installed on a node, you can run the `nvidia-smi` command to view the driver version and the CUDA Driver API version. In the following example, the installed driver version is 550.144.03 and the Driver API version is 12.6. This indicates that this driver supports the CUDA Runtime API up to version 12.6.

```
Mon Mar 24 08:51:55 2025       
+-----------------------------------------------------------------------------------------+
| NVIDIA-SMI 550.144.03             Driver Version: 550.144.03     CUDA Version: 12.6     |
|-----------------------------------------+------------------------+----------------------+
| GPU  Name                 Persistence-M | Bus-Id          Disp.A | Volatile Uncorr. ECC |
| Fan  Temp   Perf          Pwr:Usage/Cap |           Memory-Usage | GPU-Util  Compute M. |
|                                         |                        |               MIG M. |
|=========================================+========================+======================|
|   0  Tesla P4                       On  |   00000000:00:07.0 Off |                    0 |
| N/A   33C    P8              7W /   75W |       0MiB /   7680MiB |      0%      Default |
|                                         |                        |                  N/A |
+-----------------------------------------+------------------------+----------------------+
                                                                                         
+-----------------------------------------------------------------------------------------+
| Processes:                                                                              |
|  GPU   GI   CI        PID   Type   Process name                              GPU Memory |
|        ID   ID                                                               Usage      |
|=========================================================================================|
|  No running processes found                                                             |
+-----------------------------------------------------------------------------------------+
```

## Get Runtime API version

When you install the CUDA Toolkit in a container image, use the official [CUDA base images](https://hub.docker.com/r/nvidia/cuda) from NVIDIA. These base images have the CUDA Toolkit pre-installed. You can build your application container image based on these base images. You can also choose a different CUDA base image based on your required CUDA Toolkit version.

In GPU-enabled container scenarios, the CUDA Runtime API version of your application is determined by the version of the CUDA base image that is used for the application's Docker image. For example, if your application's Docker image is built from the CUDA base image `nvidia/cuda:12.2.0-base-ubuntu20.04`, the application uses CUDA Runtime API version 12.2.0.

## **References**

-   [Customize node GPU driver version by specifying a version number](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/customize-the-gpu-driver-version-of-the-node-by-specifying-the-version-number)
    
-   [Customize node GPU driver using an OSS URL](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/customize-the-node-gpu-driver-through-oss-url)
    
-   [Manually upgrade GPU node driver](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/manually-upgrade-the-nvidia-driver-of-a-node)
