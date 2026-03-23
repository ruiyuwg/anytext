The policy-template-controller is a key component for policy management. This topic describes the component's features, provides usage instructions, and includes its change log.

## Component introduction

The policy-template-controller is a Kubernetes controller developed for the new container security policy management feature. It helps you manage policy instances that are deployed from templates and the overall administration status of your cluster. For more information, see [Configure container security policies (New)](/help/en/ack/ack-managed-and-ack-dedicated/security-and-compliance/configure-and-enforce-ack-pod-security-policies#task-2148676).

## Usage instructions

For instructions on using the policy-template-controller component, see [Configure container security policies (New)](/help/en/ack/ack-managed-and-ack-dedicated/security-and-compliance/configure-and-enforce-ack-pod-security-policies#task-2148676).

## Change log

### **September 2025**

**Version number**

**Image address**

**Change time**

**Changes**

**Impact**

0.4.1

registry-cn-hangzhou.ack.aliyuncs.com/acs/policy-template-controller:0.4.1

September 8, 2025

-   Upgraded the Golang version used by the component to 1.23.12 and upgraded related package dependencies.
    
-   Upgraded the dependent OS image to improve component stability.
    

This upgrade does not affect your services.

### **August 2025**

**Version number**

**Image address**

**Change time**

**Changes**

**Impact**

v0.4.0.8-g220be83-aliyun

registry.cn-hangzhou.aliyuncs.com/acs/policy-template-controller:v0.4.0.8-g220be83-aliyun

August 13, 2025

Added support for the managed policy-template-controller component for [Auto Mode clusters](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/auto-mode-overview/).

This upgrade does not affect your services.

### **April 2023**

**Version number**

**Image address**

**Change time**

**Changes**

**Impact**

v0.4.0.0-gddee19d-aliyun

registry.cn-hangzhou.aliyuncs.com/acs/policy-template-controller:v0.4.0.0-gddee19d-aliyun

April 18, 2023

Added support for Kubernetes 1.26.

This upgrade does not affect your services.

### **December 2022**

**Version number**

**Image address**

**Change time**

**Changes**

**Impact**

v0.3.0.0-g0943d7d-aliyun

registry.cn-hangzhou.aliyuncs.com/acs/policy-template-controller:v0.3.0.0-g0943d7d-aliyun

December 22, 2022

-   Added support for ACK Serverless clusters of version 1.18 and later.
    
-   Added support for automatically restoring an accidentally deleted Simple Log Service (SLS) Logstore by restarting the component container.
    

This upgrade does not affect your services.

### **April 2022**

**Version number**

**Image address**

**Change time**

**Changes**

**Impact**

v0.2.1.13-g38303f0-aliyun

registry.cn-hangzhou.aliyuncs.com/acs/policy-template-controller:v0.2.1.13-g38303f0-aliyun

April 7, 2022

This version is in phased release.

-   Fixed an issue where nodes that host pods could not be automatically drained due to improper component configurations.
    
-   Fixed an issue where log collection for policy enforcement records was abnormal when multiple clusters used the same log project.
    

This upgrade does not affect your services.

### **February 2022**

**Version number**

**Image address**

**Change time**

**Changes**

**Impact**

v0.2.0.0-g91ade1a-aliyun

registry.cn-hangzhou.aliyuncs.com/acs/policy-template-controller:v0.2.0.0-g91ade1a-aliyun

February 15, 2022

-   Fixed a repeated synchronization issue to reduce the number of requests to the API server.
    
-   Added support for the ARM64 architecture.
    

This upgrade does not affect your services.

### **November 2021**

**Version number**

**Image address**

**Change time**

**Changes**

**Impact**

v0.1.1.22-gc87e2aa-aliyun

registry.cn-hangzhou.aliyuncs.com/acs/policy-template-controller:v0.1.1.22-gc87e2aa-aliyun

November 16, 2021

Implemented the features required by [Configure container security policies (New)](/help/en/ack/ack-managed-and-ack-dedicated/security-and-compliance/configure-and-enforce-ack-pod-security-policies#task-2148676).

This upgrade does not affect your services.
