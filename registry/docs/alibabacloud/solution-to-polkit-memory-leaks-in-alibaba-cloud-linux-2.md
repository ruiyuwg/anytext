Some versions of the Alibaba Cloud Linux 2 operating system may have a memory leak in polkit. This topic provides a solution to this issue.

## Problem description

A memory leak may occur in polkit in the following versions of Alibaba Cloud Linux 2, and the memory usage may exceed 14 GiB:

-   Alibaba Cloud Linux 2 image versions earlier than aliyun\_2\_1903\_x64\_20G\_alibase\_20211216.vhd
    
-   Kernel versions prior to 4.19.91-25.1.al7.x86\_64.
    

## Cause

The polkit component has a memory leak. This issue is fixed in later open source versions. The bugfix was included in version polkit-0.112-26.2.al7. For more information, see [Fix a memory leak on agent authentication cancellation](https://gitlab.freedesktop.org/polkit/polkit/-/commit/1458aaa10fed2c782717cf187b3d6ad92172cb8b).

## Solution

To resolve this issue, upgrade the polkit component on the instance to version polkit-0.112-26.2.al7. The upgrade command is as follows:

```
yum update polkit
```
