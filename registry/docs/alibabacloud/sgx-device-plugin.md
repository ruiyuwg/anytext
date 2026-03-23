This topic describes the features of sgx-device-plugin and lists the latest changes to the component.

## Introduction

sgx-device-plugin is a Kubernetes device plug-in developed by Container Service for Kubernetes (ACK) and Ant Financial. sgx-device-plugin facilitates the use of Intel (R) Software Guard Extensions (SGX) in containers. Intel (R) SGX is a set of CPU instructions provided by Intel. Intel (R) SGX increases the security of application code and data. This protects your code and data against disclosure and malicious tampering. For more information, see [software-guard-extensions](https://software.intel.com/content/www/us/en/develop/topics/software-guard-extensions.html).

**Features**

sgx-device-plugin provides the following features:

-   Intel (R) SGX can be used without the need to enable the privilege mode.
    
-   The Enclave Page Cache (EPC) size can be automatically retrieved.
    
-   Declarative EPC resource allocation is supported.
    

**Dependent components**

sgx-device-plugin is dependent on the following components and tools:

-   TEE-SDK, which is compatible with Intel SGX and Intel SGX Platform Software (PSW).
    
-   The Kubernetes version must be V1.10 or later.
    
-   The Go version must be V1.10 or later.
    

**FAQ**

-   Is it possible to deploy the sgx-device-plugin component to a private Kubernetes cluster?
    
    Yes, sgx-device-plugin can be deployed in all types of Kubernetes clusters. However, you can run sgx-device-plugin only on SGX-enabled nodes.
    
-   Can I use sgx-device-plugin to control the EPC size for SGX-enabled containers?
    
    No, you cannot use sgx-device-plugin to control the EPC size for SGX-enabled containers. The EPC size limit specified by the alibabacloud.com/sgx\_epc\_MiB parameter applies only to kube-scheduler. Intel (R) SGX Driver does not support this parameter.
    
-   Is sgx-device-plugin open source?
    
    The sgx-device-plugin is an open source component. For more information, see [sgx-device-plugin](https://github.com/AliyunContainerService/sgx-device-plugin).
    

## Usage notes

By default, sgx-device-plugin is installed in ACK clusters. You can use sgx-device-plugin without extra configurations.

## Release notes

**September 2023**

**Version**

**Image address**

**Modification Time**

**Changes**

**Impact**

v1.1.0-bb1f5f9-aliyun

registry.cn-hangzhou.aliyuncs.com/acs/sgx-device-plugin:v1.1.0-bb1f5f9-aliyun

September 13, 2023

-   SGX 2 is supported.
    

This upgrade does not affect your business.

**April 2021**

**Version**

**Image address**

**Change Time**

**Changes**

**Impact**

v1.1.0-bb1f5f9-aliyun

registry.cn-hangzhou.aliyuncs.com/acs/sgx-device-plugin:v1.1.0-bb1f5f9-aliyu

2021-04-30

-   Intel (R) SGX can be used without the need to enable the privilege mode.
    
-   The EPC size can be automatically retrieved.
    
-   Declarative EPC resource allocation is supported.
    

No impact on workloads
