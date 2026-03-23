Alibaba Cloud Linux provides the Kernel Live Patching (KLP) feature for fixing the common vulnerabilities and exposures (CVEs) and critical bugs of a kernel. You can update hotfixes for the operating system kernel without restarting the server. This ensures the stability and security of the kernel. This topic describes the KLP feature and its benefits and limits.

## Introduction

You can use Kernel Live Patching (KLP) to apply patches to a running Alibaba Cloud Linux (Alinux) kernel. KLP consists of the following components:

-   Patch RPM package: An RPM package that contains the kernel module (.ko file) and a patch description file. The kernel loads this module to apply the fixes.
    
-   kpatch tool: A command-line tool that manages the kernel modules in each patch.
    
-   kpatch service: The system daemon (systemd) for KLP. This service loads kernel modules from patches during system startup to re-apply the fixes.
    

## Benefits

KLP can update hotfixes for CVEs or critical bugs of a kernel in a smooth and quick manner without compromising server security and stability. You do not need to restart servers or other business-related task processes, wait until time-consuming tasks are completed, log off, or migrate business.

## Limits

KLP has the following limitations:

-   KLP is available only on Alibaba Cloud Linux (Alinux) with one of the following kernel versions:
    
    -   For Alibaba Cloud Linux (Alinux) 2.1903, the kernel version must be **kernel-4.19.24-9.al7.x86\_64** or later.
        
    -   For Alibaba Cloud Linux (Alinux) 3.2104, the kernel version must be **5.10.23-4.al8.x86\_64** or later.
        
    -   For Alibaba Cloud Linux (Alinux) 4, the kernel version must be **6.6.88-4.2.alnx4.x86\_64** or later.
        
-   For each Alibaba Cloud Linux (Alinux) kernel version, Alibaba Cloud provides one year of KLP support. After the support period ends, you must upgrade the kernel to the latest version.
    
-   KLP cannot fix all high-severity Security Vulnerabilities or important Bug Fixes. This feature is designed to reduce, but not eliminate, server reboots for patching. KLP primarily addresses Critical and High-severity CVEs and critical Bug Fixes.
    
-   KLP is not a general-purpose kernel upgrade solution. Use it only to apply patches for high-severity Security Vulnerabilities or important Bug Fixes when a server cannot be rebooted immediately.
    
-   During and after applying a patch, do not use tools such as SystemTap or `kprobe` to test or trace the affected functions. Doing so will cause the patch to fail.
    

## Related operations

To obtain, enable, or disable KLP for Alibaba Cloud Linux (Alinux), see [Operations related to kernel hotfixes](/help/en/alinux/user-guide/operations-related-to-kernel-hotfixes#task-2091614).
