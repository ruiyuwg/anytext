This topic describes the features and advantages of Alibaba Cloud Linux.

## **Features**

-   The Alibaba Cloud Native Kernel (ANCK) is installed and enabled by default.
    
    -   Alibaba Cloud Linux 4 is based on Linux kernel 6.6 LTS. Alibaba Cloud Linux 3 is based on Linux kernel 5.10 LTS. Alibaba Cloud Linux 2 is based on Linux kernel 4.19 LTS. The operating system is continuously updated with new features for cloud scenarios, improved kernel performance, and fixes for major bugs. For more information, see [Alibaba Cloud Linux 4 image release notes](/help/en/alinux/product-overview/alibaba-cloud-linux-4-image-release-notes), [Alibaba Cloud Linux 3 image release notes](/help/en/alinux/product-overview/release-notes-for-alibaba-cloud-linux#concept-2070819), and [Alibaba Cloud Linux 2 image release notes](/help/en/alinux/product-overview/release-notes-for-alibaba-cloud-linux2#concept-2416516).
        
    -   It includes kernel startup parameters and system configuration parameters that are customized and optimized for the Elastic Compute Service (ECS) instance environment.
        
    -   It provides the kernel dump (Kdump) feature to use when the operating system crashes. You can enable or disable this feature online as needed without restarting the operating system.
        
    -   It provides the Kernel Live Patching feature. For more information, see [Kernel Live Patching overview](/help/en/alinux/user-guide/overview-of-the-kernel-live-patching-feature#task-2089756).
        
-   Software packages and updates.
    
    -   Alibaba Cloud Linux strictly follows the POSIX standard and is highly compatible with CentOS. The core components of Alibaba Cloud Linux 2 are the same as those of CentOS 7. This lets you directly deploy user mode packages from CentOS 7. The core components of Alibaba Cloud Linux 3 are the same as those of CentOS 8. This lets you directly deploy user mode packages from CentOS 8. Alibaba Cloud Linux 4 follows an open source cooperation initiative and adopts an independent evolution policy with its own selection of core components. It does not currently support the direct deployment or installation of CentOS components. To use these components, you must compile them from source or use the corresponding version from the Anolis OS community.
        
    -   Cloud Assistant CLI is installed by default.
        
    -   Fixes for package security vulnerabilities (CVEs) are continuously updated throughout the support lifecycle of each Alibaba Cloud Linux version. For more information, see [Alibaba Cloud Server Operating System Security Center](https://alas.aliyuncs.com/errata). Alibaba Cloud Linux also provides an automated solution for applying fixes. For more information, see [Security updates based on YUM](/help/en/alinux/user-guide/use-yum-to-perform-security-updates-1).
        
-   It significantly optimizes boot speed, improves runtime system performance, and enhances system stability.
    
    -   The boot speed is significantly optimized for the ECS instance environment. In actual tests, the boot time is reduced by about 60% compared to other operating systems.
        
    -   Subsystems, such as scheduling, memory, and I/O, are optimized. In some open source benchmark tests, performance is improved by about 10% to 30% compared to other operating systems.
        
    -   System stability is continuously enhanced. Downtime statistics show that the downtime rate is reduced by about 50% compared to other operating systems.
        

## **Advantages**

Compared to other Linux systems, Alibaba Cloud Linux has the following advantages:

-   Alibaba Cloud provides free software maintenance and technical support for Alibaba Cloud Linux. For more information about the lifecycle of each version, see [Operating system lifecycle overview](/help/en/ecs/user-guide/eol-overview#section-788-zu5-czj).
    
-   It is deeply integrated with and optimized for the Alibaba Cloud infrastructure, which continuously improves system boot speed and runtime performance. It is also refined by extensive use in many Alibaba and Alibaba Cloud products, which provides excellent stability.
    
-   It provides the latest operating system enhancements from the Linux community for cloud application environments through updated Linux kernels, user mode software, and toolkits:
    
    -   Alibaba Cloud Linux 4 uses the Linux kernel 6.6 LTS version and comes with basic software such as GCC 12.3, binutils 2.41, and glibc 2.38 by default.
        
    -   Alibaba Cloud Linux 3 uses the Linux kernel 5.10 LTS version and comes with basic software such as GCC 10.2, binutils 2.35, and glibc 2.32 by default.
        
    -   Alibaba Cloud Linux 2 uses the Linux kernel 4.19 LTS version and provides devtoolset support for GCC 7.3.1, 8.2.1, and 9.1.1. For more information about how to use the devtoolset, see [Use experimentally supported packages](/help/en/alinux/getting-started/use-alibaba-cloud-linux-2#section-581-97u-40m).
        
-   It is compatible with the CentOS and Red Hat Enterprise Linux (RHEL) ecosystems. Most software from CentOS and RHEL can run on Alibaba Cloud Linux with few or no modifications.
    
    -   Alibaba Cloud Linux 3 is built on Anolis OS 8 and is compatible with the CentOS 8 and RHEL 8 ecosystems.
        
    -   Alibaba Cloud Linux 2 is built on Anolis OS 7 and is compatible with the CentOS 7 and RHEL 7 ecosystems.
        
-   It provides security vulnerability monitoring and patching policies to ensure system security. For more information, see [Security notices](/help/en/alinux/product-overview/security-bulletin).
