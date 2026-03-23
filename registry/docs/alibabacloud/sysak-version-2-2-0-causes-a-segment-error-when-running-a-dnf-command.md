System Analyse Kit (SysAK) is a system O&M toolkit provided for Alibaba Cloud operating systems to meet the requirements of common O&M scenarios such as routine system monitoring, online issue diagnostics, and system failure recovery. This topic describes how to fix the segmentation fault that is caused by SysAK 2.2.0 when a Dandified YUM (DNF) command is run in the Alibaba Cloud Linux 2 or Alibaba Cloud Linux 3 operating system.

**Note**

A segmentation fault may occur if a program attempts to access memory in violation of memory access rules.

## Problem description

When a `dnf` command is run on an Alibaba Cloud Linux instance on which sysak-2.2.0-1.al7.x86\_64.rpm is installed, the following error is returned:

```
Segmentation fault
```

## Cause

SysAK is initialized based on a specific YAML Ain't Markup Language (YAML) configuration file. To support YAML configurations, a .so dynamic link library of LibYAML is integrated in the SysAK running environment, but not in the system running environment. The system incorrectly regards the LibYAML dynamic link library as a global library that can be called by all applications. When you use the DNF package manager to perform the related software operations, the system fails to detect the global LibYAML library. As a result, a segmentation fault occurs during the DNF running process due to the lack of LibYAML support.

## Solution

1.  Run the following command to upgrade SysAK:
    
    ```
    sudo yum update -y sysak
    ```
    
2.  (Optional) Run the following command to check whether SysAK runs a version later than 2.2.0:
    
    ```
    sudo rpm -qa sysak
    ```
