This topic describes the features of the sandboxed-container-controller component and its release history.

## Introduction

The sandboxed-container-controller is a dedicated controller component provided by the sandboxed container runtime. It extends the core capabilities of sandboxed containers and supports the following features:

-   Custom kernel parameters for pods in sandboxed containers.
    
-   Automatically calculates and configures sandboxed container VM specifications.
    
-   Direct pass-through of cloud disks and NAS to the sandbox.
    

## Usage notes

The sandboxed-container-controller component is installed by default. You can use it without additional configuration.

## Release notes

### May 2022

**Version number**

**Registry Address**

**Modification Time**

**Changes**

**Impact**

v1.2.0-0c6b9ba-aliyun

registry.cn-hangzhou.aliyuncs.com/acs/sandboxed-container-controller:v1.2.0-0c6b9ba-aliyun

May 12, 2022

-   Compatible with Kubernetes 1.22.
    
-   Adds a feature for automatic management of admission webhook certificates and configurations.
    

This upgrade does not affect your services.

### December 2020

**Version number**

**Registry Address**

**Change Time**

**Content Changes**

**Impact**

v1.1.1-55d545f-aliyun

registry.cn-hangzhou.aliyuncs.com/acs/sandboxed-container-controller:v1.1.1-55d545f-aliyun

December 22, 2020

Forcibly overwrites two annotations if they are manually set in a pod: securecontainer.alibabacloud.com/cpus and securecontainer.alibabacloud.com/memory.

This upgrade does not affect your services.

### November 2020

**Version number**

**Registry Address**

**Change Time**

**Changes**

**Impact**

v1.1.0-3b3d499-aliyun

registry.cn-hangzhou.aliyuncs.com/acs/sandboxed-container-controller:v1.1.0-3b3d499-aliyun

November 26, 2020

Adds support for custom kernel parameters for runV pod sandboxes.

This upgrade does not affect your services.

v1.0.3-e993d8f-aliyun

registry.cn-hangzhou.aliyuncs.com/acs/sandboxed-container-controller:v1.0.2-8ac82bf-aliyun

November 12, 2020

Adds the PodEraseRuntimeclassRunc admission controller. Because Docker does not support the RuntimeClass feature, this controller resets the `pod.spec.runtimeClassName` configuration item to an empty value if it is set to `runc`.

This upgrade does not affect your services.

### August 2020

**Version number**

**Registry Address**

**Change Time**

**Changes**

**Impact**

v1.0.1-8484958-aliyun

registry.cn-hangzhou.aliyuncs.com/acs/sandboxed-container-controller:v1.0.1-8484958-aliyun

August 26, 2020

Supports ACK Sandboxed-Container 2.0. Adds the PodQuota admission controller, which is dedicated to sandboxed containers. This controller sets the pod sandbox specifications based on the total CPU and memory resources of all containers in the pod.

This upgrade does not affect your services.

### June 2020

**Version number**

**Registry Address**

**Change Time**

**Content Changes**

**Impact**

v1.0.0-e408663-aliyun

registry.cn-beijing.aliyuncs.com/acs/sandboxed-container-controller:v1.0.0-e408663-aliyun

June 10, 2020

Changes the public registry address of the NAS InitContainer to a private registry address.

This upgrade does not affect your services.

### March 2020

**Version number**

**Registry Address**

**Modification Time**

**Changes**

**Impact**

v1.0.0-a8b276f-aliyun

registry.cn-hangzhou.aliyuncs.com/acs/sandboxed-container-controller:v1.0.0-a8b276f-aliyun

March 26, 2020

Supports direct pass-through for NAS and cloud disks to the sandbox. The storage performance after pass-through is the same as the performance of the host mount mode. This avoids the critical performance loss caused by 9PFS.

This upgrade does not affect your services.
