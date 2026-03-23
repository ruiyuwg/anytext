cGPU is an Alibaba Cloud module that provides GPU memory and computing power fencing. This feature allows multiple containers to share a single GPU without interfering with each other's resources. This topic describes known issues and important information about using cGPU.

## Before you begin

-   If a GPU node in your cluster has the label `ack.node.gpu.schedule=cgpu`, `ack.node.gpu.schedule=core_mem`, or `cgpu=true`, cGPU fencing is enabled on the node.
    
-   For information about the version mapping between the ack-ai-installer and cGPU components, see the release notes for the [ack-ai-installer](/help/en/ack/cloud-native-ai-suite/product-overview/ack-ai-installer) component.
    
-   For more information about cGPU, see the [NVIDIA official documentation](https://developer.nvidia.com/blog/unified-memory-cuda-beginners/).
    

## **cGPU version compatibility**

### **NVIDIA driver compatibility**

**cGPU version**

**Compatible NVIDIA drivers**

1.5.20

1.5.19

1.5.18

1.5.17

1.5.16

1.5.15

1.5.13

1.5.12

1.5.11

1.5.10

1.5.9

1.5.8

1.5.7

1.5.6

1.5.5

1.5.3

Supported:

-   460 series
    
-   470 series
    
-   510 series
    
-   515 series
    
-   525 series
    
-   535 series
    
-   550 series
    
-   560 series
    
-   565 series
    
-   570 series
    
-   575 series
    

1.5.2

1.0.10

1.0.9

1.0.8

1.0.7

1.0.6

1.0.5

Supported:

-   460 series
    
-   470 series <= 470.161.03
    
-   510 series <= 510.108.03
    
-   515 series <= 515.86.01
    
-   525 series <= 525.89.03
    

Not supported:

-   535 series
    
-   550 series
    
-   560 series
    
-   565 series
    
-   570 series
    
-   575 series
    

1.0.3

0.8.17

0.8.13

Supported:

-   460 series
    
-   470 series <= 470.161.03
    

Not supported:

-   510 series
    
-   515 series
    
-   525 series
    
-   535 series
    
-   550 series
    
-   560 series
    
-   565 series
    
-   570 series
    
-   575 series
    

### **Instance family compatibility**

**cGPU version**

**Compatible instance families**

1.5.20

1.5.19

Supported:

-   gn6i / gn6e / gn6v / gn6t / ebmgn6i / ebmgn6t / ebmgn6e
    
-   gn7i / gn7 / gn7e / ebmgn7i / ebmgn7e
    
-   gn8t / ebmgn8t
    
-   gn8is / gn8v / ebmgn8is / ebmgn8v
    
-   gn8ia / ebmgn8ia
    
-   ebmgn9t
    

1.5.18

1.5.17

1.5.16

1.5.15

1.5.13

1.5.12

1.5.11

1.5.10

1.5.9

Supported:

-   gn6i / gn6e / gn6v / gn6t / ebmgn6i / ebmgn6t / ebmgn6e
    
-   gn7i / gn7 / gn7e / ebmgn7i / ebmgn7e
    
-   gn8t / ebmgn8t
    
-   gn8is / gn8v / ebmgn8is / ebmgn8v
    
-   gn8ia / ebmgn8ia
    

Not supported:

-   ebmgn9t
    

1.5.8

1.5.7

Supported:

-   gn6i / gn6e / gn6v / gn6t / ebmgn6i / ebmgn6t / ebmgn6e
    
-   gn7i / gn7 / gn7e / ebmgn7i / ebmgn7e
    
-   gn8t / ebmgn8t
    
-   gn8is / gn8v / ebmgn8is / ebmgn8v
    

Not supported:

-   gn8ia / ebmgn8ia
    
-   ebmgn9t
    

1.5.6

1.5.5

Supported:

-   gn6i / gn6e / gn6v / gn6t / ebmgn6i / ebmgn6t / ebmgn6e
    
-   gn7i / gn7 / gn7e / ebmgn7i / ebmgn7e
    
-   gn8t / ebmgn8t
    

Not supported:

-   gn8is / gn8v / ebmgn8is / ebmgn8v
    
-   gn8ia / ebmgn8ia
    
-   ebmgn9t
    

1.5.3

1.5.2

1.0.10

1.0.9

1.0.8

1.0.7

1.0.6

1.0.5

1.0.3

Supported:

-   gn6i / gn6e / gn6v / gn6t / ebmgn6i / ebmgn6t / ebmgn6e
    
-   gn7i / gn7 / gn7e / ebmgn7i / ebmgn7e
    

Not supported:

-   gn8t / ebmgn8t
    
-   gn8is / gn8v / ebmgn8is / ebmgn8v
    
-   gn8ia / ebmgn8ia
    
-   ebmgn9t
    

0.8.17

0.8.13

Supported:

-   gn6i / gn6e / gn6v / gn6t / ebmgn6i / ebmgn6t / ebmgn6e
    

Not supported:

-   gn7i / gn7 / gn7e / ebmgn7i / ebmgn7e
    
-   gn8t / ebmgn8t
    
-   gn8is / gn8v / ebmgn8is / ebmgn8v
    
-   gn8ia / ebmgn8ia
    
-   ebmgn9t
    

### **nvidia-container-toolkit compatibility**

**cGPU version**

**Compatible nvidia-container-toolkit**

1.5.20

1.5.19

1.5.18

1.5.17

1.5.16

1.5.15

1.5.13

1.5.12

1.5.11

1.5.10

1.5.9

1.5.8

1.5.7

1.5.6

1.5.5

1.5.3

1.5.2

1.0.10

Supported:

-   nvidia-container-toolkit <= 1.10
    
-   nvidia-container-toolkit: 1.11 ~ 1.17
    

1.0.9

1.0.8

1.0.7

1.0.6

1.0.5

1.0.3

0.8.17

0.8.13

Supported:

-   nvidia-container-toolkit <= 1.10
    

Not supported:

-   nvidia-container-toolkit: 1.11 ~ 1.17
    

### **Kernel version compatibility**

**cGPU version**

**Compatible kernel versions**

1.5.20

1.5.19

1.5.18

1.5.17

1.5.16

1.5.15

1.5.13

1.5.12

1.5.11

1.5.10

1.5.9

Supported:

-   kernel 3.x
    
-   kernel 4.x
    
-   kernel 5.x <= 5.15
    

1.5.8

1.5.7

1.5.6

1.5.5

1.5.3

Supported:

-   kernel 3.x
    
-   kernel 4.x
    
-   kernel 5.x <= 5.10
    

1.5.2

1.0.10

1.0.9

1.0.8

1.0.7

1.0.6

1.0.5

1.0.3

Supported:

-   kernel 3.x
    
-   kernel 4.x
    
-   kernel 5.x <= 5.1
    

0.8.17

Supported:

-   kernel 3.x
    
-   kernel 4.x
    
-   kernel 5.x <= 5.0
    

0.8.13

0.8.12

0.8.10

Supported:

-   kernel 3.x
    
-   kernel 4.x
    

Not supported:

-   kernel 5.x
    

## **FAQ**

### **A Linux Kernel Panic occurs when using cGPU.**

-   **Background:** When using the cGPU component, a deadlock occurs in the cGPU kernel driver. This means concurrent processes block each other, which leads to a Linux Kernel Panic.
    
-   **Reason:** The component version is outdated because you installed a `cGPU` version of 1.5.7 or earlier.
    
-   **Solution:** We recommend that you install or upgrade to `cGPU≥1.5.10` to prevent kernel errors in new services. For instructions on how to upgrade, see [Upgrade the cGPU version of a node](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/upgrade-the-cgpu-version-on-a-node).
    

### **A cGPU pod fails to start in some scenarios.**

-   **Background:** When you use an Alibaba Cloud container-optimized OS image, the cGPU pod on a cGPU node may fail to start. The error message is as follows:
    
    ```
    "Error: failed to create containerd task: failed to create shim task: OCI runtime create failed: runc create failed: unable to start container process: error during container init: error running prestart hook #0: exit status 2, stdout: , stderr: Auto-detected mode as 'legacy': unknown"
    ```
    
-   **Reason:** This issue occurs with cGPU versions 1.5.18 and earlier (`cgpu≤1.5.18`), which can cause the first cGPU pod on a cGPU node to fail to start.
    
-   **Solution:** Upgrade to `ack-ai-installer≥1.12.6`. For more information, see [Upgrade the shared GPU scheduling component](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/install-and-use-ack-ai-installer-and-the-gpu-inspection-tool#54e7a94472orj).
    

### **The** `**modprobe: ERROR**` **error occurs when you create a cGPU pod.**

-   **Background:** The `modprobe: ERROR: could not insert 'cgpu_procfs': Operation not permitted` or `modprobe: ERROR: could not insert 'km': Operation not permitted` error occurs when you create a cGPU pod.
    
-   **Cause:** The following error messages are displayed:
    
    -   ```
        Error: failed to create containerd task: failed to create shim: OCI runtime create failed: runc create failed: unable to start container process: error during container init: error running hook #0: error running hook: exit status 2, stdout: , stderr: modprobe: ERROR: could not insert 'cgpu_procfs': Operation not permitted modprobe: ERROR: could not insert 'cgpu_procfs': Operation not permitted Auto-detected mode as 'legacy': unknown
        ```
        
    -   ```
        modprobe: ERROR: could not insert 'km': Operation not permitted
        ```
        
-   **Solution:** This error usually indicates that the operating system version is not compatible with cGPU. To resolve this issue, upgrade the component to the latest version. For more information, see [Upgrade the shared GPU scheduling component](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/install-and-use-ack-ai-installer-and-the-gpu-inspection-tool#54e7a94472orj).
    

### **The container for a cGPU pod fails to be created or exits due to a timeout.**

-   **Background:** The container for a cGPU pod cannot be created or exits because of a timeout.
    
-   **Cause:** This issue is caused by an incompatibility between cGPU component version 1.0.10 or earlier (`cGPU≤1.0.10`) and NVIDIA Toolkit version 1.11 or later (`NVIDIA Toolkit≥1.11`).
    
-   **Solution:** To resolve this issue, upgrade the component to the latest version. For more information, see [Upgrade the shared GPU scheduling component](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/install-and-use-ack-ai-installer-and-the-gpu-inspection-tool#54e7a94472orj).
    

### **The error** `**Error occurs when creating cGPU instance: unknown**` **occurs when you create a cGPU pod.**

-   **Background:** For performance reasons, you can create a maximum of 20 pods on a single GPU when using cGPU.
    
-   **Cause:** If the number of created pods exceeds this limit, subsequent pods scheduled to the GPU cannot run. The error message `Error occurs when creating cGPU instance: unknown` appears.
    
-   **Solution:** When you use cGPU, ensure that the number of pods created on a single GPU is 20 or less.
    

### **The** `**Failed to initialize NVML**` **error occurs when you run the** `**nvidia-smi**` **command in a cGPU pod.**

-   **Background:** When you run the `nvidia-smi` command in a running pod that uses shared GPU scheduling resources, you receive the following output.
    
    ```
    Failed to initialize NVML: GPU access blocked by operating system
    ```
    
-   **Reason:** This issue is caused by an incompatibility between `cGPU version 1.5.2 or earlier` and GPU driver versions released after July 2023. For more information about GPU driver release dates, see [GPU Driver Release Dates](https://www.nvidia.com/en-us/drivers/unix/linux-amd64-display-archive/). For a list of default GPU driver versions that are compatible with different ACK cluster versions, see [List of NVIDIA driver versions supported by ACK](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/ack-supported-nvidia-driver-version-list).
    
-   **Solution:** To resolve this issue, upgrade the component to the latest version. For more information, see [Upgrade the shared GPU scheduling component](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/install-and-use-ack-ai-installer-and-the-gpu-inspection-tool#54e7a94472orj).
