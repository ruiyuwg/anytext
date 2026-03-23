The ack-advanced-audit component is essential for auditing operations inside containers. This topic describes the component, explains how to use it, and provides its changelog.

## Component introduction

The ack-advanced-audit component is based on the open source project [Falco](https://falco.org/). It uses the extended Berkeley Packet Filter (eBPF) feature of the kernel to audit system calls for operations within containers. This feature lets you audit commands executed by members of your organization or applications within a container.

## Usage notes

For information about how to use the ack-advanced-audit component and its limitations, see [Use the in-container operation audit feature](/help/en/ack/ack-managed-and-ack-dedicated/security-and-compliance/use-container-auditing#task-2296882).

## Changelog

### January 2026

**Version number**

**Registry Address**

**Changes**

**Modification Time**

**Impact**

0.9.0

registry-cn-hangzhou-vpc.ack.aliyuncs.com/acs/ack-advanced-audit:0.9.0

-   Added support for the Alibaba Cloud Linux 4 operating system.
    
-   Upgraded the Golang version used by the component to 1.25.6 to improve component stability.
    

January 21, 2026

An abnormal component may cause the `kubectl exec` operation to fail.

0.8.2

registry-cn-hangzhou-vpc.ack.aliyuncs.com/acs/ack-advanced-audit:0.8.2

Upgraded the Golang version used by the component to 1.25.5 to improve component stability.

January 08, 2026

An abnormal component may cause the `kubectl exec` operation to fail.

### September 2025

**Version number**

**Registry Address**

**Changes**

**Modification Time**

**Impact**

0.8.1

registry-cn-hangzhou-vpc.ack.aliyuncs.com/acs/ack-advanced-audit:0.8.1

-   Added support for the ContainerOS 3.5 operating system.
    
-   Upgraded the Golang version used by the component to 1.24.6 to improve component stability.
    

September 09, 2025

An abnormal component may cause the `kubectl exec` operation to fail.

### May 2025

**Version number**

**Registry Address**

**Changes**

**Modification Time**

**Impact**

0.7.0

registry-cn-hangzhou-vpc.ack.aliyuncs.com/acs/ack-advanced-audit:v0.7.0.0-g2f5da32d-aliyun

-   Added support for containerd 2.0.
    
-   Upgraded the Golang version used by the component to 1.24.3 to improve component stability.
    

May 26, 2025

An abnormal component may cause the `kubectl exec` operation to fail.

### October 2024

**Version number**

**Registry Address**

**Changes**

**Modification Time**

**Impact**

0.6.0

registry-cn-hangzhou-vpc.ack.aliyuncs.com/acs/ack-advanced-audit:v0.6.0.0-g05b523f-aliyun

Optimized support for the ContainerOS operating system.

October 30, 2024

An abnormal component may cause the `kubectl exec` operation to fail.

0.5.1

registry-cn-hangzhou-vpc.ack.aliyuncs.com/acs/ack-advanced-audit:v0.5.1.0-ga51258d-aliyun

Optimized support for the Alibaba Cloud Linux 3.2104 U10 operating system.

October 17, 2024

An abnormal component may cause the `kubectl exec` operation to fail.

### August 2024

**Version number**

**Registry Address**

**Changes**

**Modification Time**

**Impact**

0.5.0

registry-cn-hangzhou-vpc.ack.aliyuncs.com/acs/ack-advanced-audit:v0.5.0.0-g18d101a-aliyun

-   Optimized the memory usage of the program.
    
-   Optimized support for the Alibaba Cloud Linux 3.2104 U9.1 operating system.
    

August 23, 2024

An abnormal component may cause the `kubectl exec` operation to fail.

### July 2024

**Version number**

**Registry Address**

**Changes**

**Modification Time**

**Impact**

0.4.0

registry-cn-hangzhou-vpc.ack.aliyuncs.com/acs/ack-advanced-audit:v0.4.0.0-g9a46887-aliyun

Optimized support for the Ubuntu operating system.

July 31, 2024

An abnormal component may cause the `kubectl exec` operation to fail.

### September 2023

**Version number**

**Registry Address**

**Changes**

**Last Modified**

**Impact**

0.3.0

registry-cn-hangzhou-vpc.ack.aliyuncs.com/acs/ack-advanced-audit:v0.3.0.21-ge1fbf04-aliyun

-   Optimized program performance.
    
-   Optimized support for the Alibaba Cloud Linux 3.8 operating system.
    

September 11, 2023

An abnormal component may cause the `kubectl exec` operation to fail.

### April 2023

**Version number**

**Registry Address**

**Changes**

**Modification Time**

**Impact**

0.2.0

registry-cn-hangzhou-vpc.ack.aliyuncs.com/acs/ack-advanced-audit:v0.2.0.0-g052ee2b-aliyun

Added support for Kubernetes 1.26.

April 13, 2023

An abnormal component may cause the `kubectl exec` operation to fail.

### February 2023

**Version number**

**Registry Address**

**Changes**

**Modification Time**

**Impact**

0.1.0

registry-cn-hangzhou-vpc.ack.aliyuncs.com/acs/ack-advanced-audit:v0.1.1.47-gcd1dd3d-aliyun

Implemented the in-container operation audit feature.

February 07, 2023

Initial release.
