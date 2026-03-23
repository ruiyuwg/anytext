`ack-cgpu` is a component that enables GPU sharing and scheduling in ACK dedicated clusters. It provides a GPU sharing framework that allows multiple containers to share the same physical GPU, which helps reduce operational costs. This topic describes the release history for ack-cgpu.

## **Usage notes**

-   You can install the ack-cgpu component only on ACK dedicated clusters from the Marketplace page in the console.
    
-   The cluster must be version 1.18.8 or later.
    

## **Changelog**

### **August 2025**

**Component version**

**Modification Time**

**Changes**

**Impact**

1.7.0

August 20, 2025

cGPU module V1.5.20:

-   Bug fix:
    
    Fixed a rare cGPU instance ID conflict that may occur during concurrent pod runs.
    

No impact on existing services.

### **July 2025**

**Component version**

**Modification Time**

**Changes**

**Impact**

1.6.0

July 24, 2025

cGPU module V1.5.12:

-   Bug fix:
    
    Fixed an issue where GPU memory isolation for some CUDA APIs failed with NVIDIA driver versions 535 and later.
    

No impact on existing services.

### November 2024

**Component version**

**Modification Time**

**Changes**

**Impact**

1.5.2

November 5, 2024

cGPU module V1.5.9:

-   Added support for ebmgn8ia instance types.
    
-   Added support for cgroup v2 and Ubuntu 22.04.
    

No impact on existing services.

### June 2024

**Component version**

**Modification Time**

**Changes**

**Impact**

1.5.1

June 7, 2024

cGPU module V1.5.7:

-   Added support for gn8X instance types.
    
-   Added support for NVIDIA driver versions 550 and later.
    
-   Fixed a kernel panic issue that occurred on VMs after a node was destroyed.
    

No impact on existing services.

### **November 2022**

**Component version**

**Release date**

**Changes**

**Impact**

1.4.2

November 18, 2022

cGPU module V1.0.9:

-   Improved support for UVM devices.
    
-   Adjusted the loading order of the wrapper and cGPU in the installation script to prevent the cGPU from blocking the startup of ACK management pods.
    

No impact on existing services.

1.4.1

November 17, 2022

-   cGPU module V1.0.7: No updates.
    
-   gpushare-device module: Added the gpushare=true label to enable sharing-only mode without memory isolation.
    

No impact on existing services.

1.4.0

November 7, 2022

-   cGPU module V1.0.7: No updates.
    
-   gpushare-device module: Fixed an issue where ack-cgpu could not be installed on clusters running Kubernetes 1.24.
    

No impact on existing services.

1.3.1

November 1, 2022

-   cGPU Version 1.0.7.
    
-   gpushare-device:
    
    -   Fixed an issue where application pods failed to start because the GPU UUID was lost after an ECS instance reboot during shared GPU scheduling.
        
    -   Added support for setting the cGPU policy via an environment variable.
        

No impact on existing services.

### May 2022

**Component version**

**Modification Time**

**Changes**

**Impact**

1.3.0

May 6, 2022

cGPU module V1.0.7:

-   Added support for regions, including Ulanqab, Guangzhou, and Chengdu.
    

No impact on existing services.

### **March 2022**

**Component version**

**Modification Time**

**Changes**

**Impact**

1.2.1

March 23, 2022

cGPU module V1.0.6:

-   Fixed an issue related to residual memory after isolation, which previously caused memory limits to default to 8 GB after a failure.
    
-   Resolved memory corruption issues that occurred after an out-of-memory (OOM) event in multi-process scenarios.
    

No impact on existing services.

1.2.0

March 11, 2022

cGPU module V1.0.3:

-   Added support for compilation and installation on kernel versions 5.1 and later and Alibaba Cloud Linux 3.2.
    
-   Fixed inaccurate memory display in multi-process scenarios.
    
-   Added support for the gn7 instance family. Adapted for CUDA 11 and NVIDIA driver versions 460 and later.
    
-   Fixed a GPU memory allocation issue with CUDA 11.4 and NVIDIA driver versions 470 and later.
    
-   Added policy3, which supports specifying computing power in percentages, such as 50% or 30%. The minimum granularity is 5% with an error margin of ±5%.
    

No impact on existing services.

### December 2021

**Component version**

**Modification Time**

**Changes**

**Impact**

1.1.2

December 27, 2021

cGPU module V0.8.13:

-   Adapted for NVIDIA driver versions 450 and later.
    
-   Expanded support to all available public cloud regions.
    

No impact on existing services.

### **January 2021**

**Component version**

**Modification Time**

**Changes**

**Impact**

1.0.0

January 18, 2021

cGPU module V0.8.8:

-   Initial release. Support for gn6i, gn6v, gn6e, gn5i, and gn5 instance types.
    
-   Supported regions: China (Hangzhou), China (Shanghai), and China (Beijing).
    

No impact on existing services.
