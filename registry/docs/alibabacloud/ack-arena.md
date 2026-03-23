The ack-arena component is a collection of lifecycle management tools for AI jobs provided by the cloud-native AI suite. The component abstracts and standardizes key components throughout AI production, which reduces the complexity of underlying resource and environment management and simplifies the procedure for submitting and running AI jobs. This topic describes the basic information, usage notes, and release notes of ack-arena.

## **Introduction**

The cloud-native AI suite provides an abstraction of data preparation and management, model development, model training, model evaluation, model inference services, and online O&M. Arena is a command-line tool that can help you manage these key components in AI DevOps. Arena simplifies the management of underlying resources and environments, job scheduling, and GPU allocation and monitoring. Arena is compatible with mainstream AI frameworks and tools, including TensorFlow, PyTorch, Horovod, Spark, JupyterLab, TF-Serving, and Triton. Arena also provides SDKs for Golang, Java, and Python.

ack-arena is optimized to simplify operations in open source Arena. You can install ack-arena in the Container Service for Kubernetes (ACK) console with a few clicks.

## **Usage notes**

The ack-arena component can be installed only in ACK Pro clusters, ACK Serverless Pro clusters, and ACK Edge Pro clusters. The Kubernetes versions of the clusters must be 1.18 or later. For more information about how to install and use the ack-arena component, see [Configure the Arena client](/help/en/ack/cloud-native-ai-suite/user-guide/install-arena).

## **Release notes**

### **March 2025**

**Version number**

**Image address**

**Description**

**Release date**

**Impact**

0.14.2

registry-cn-hangzhou.aliyuncs.com/acs/arena-deploy-manager:0.14.2-aliyun-d497232

-   The requests and limits for the init-container of the worker pod in PyTorchJob are set to the same value.
    

2025-03-10

No impact on workloads.

### **February 2025**

**Version number**

**Image address**

**Description**

**Release date**

**Impact**

0.14.1

registry-cn-hangzhou.aliyuncs.com/acs/arena-deploy-manager:0.14.1-aliyun-19abf19

-   The issue that the device does not support Kubernetes resource quantities is fixed.
    
-   The issue that PyTorchJob does not support backoff limit is fixed.
    
-   Environment variable NVIDIA\_VISIBLE\_DEVICES are not set when GPU sharing scheduling is enabled.
    

2025-02-24

No impact on workloads.

### **January 2025**

**Version number**

**Image address**

**Description**

**Release date**

**Impact**

0.13.1

registry-cn-hangzhou.aliyuncs.com/acs/arena-deploy-manager:0.13.1-aliyun-ce9c5f3

-   Linux/arm64 is supported by tf-operator.
    
-   Linux/arm64 is supported by pytorch-operator.
    
-   Linux/arm64 is supported by cron-operator.
    
-   Linux/arm64 is supported by et-operator.
    

2025-01-13

No impact on workloads.

### **December 2024**

**Version number**

**Image address**

**Description**

**Release date**

**Impact**

0.13.0

registry-cn-hangzhou.aliyuncs.com/acs/arena-deploy-manager:0.13.0-aliyun-f098f1a

-   torchrun is supported by PyTorchJob.
    
-   Do not perform list job and statefulset operations when you query PyTorchJob information.
    

2024-12-23

No impact on workloads.

### **November 2024**

**Version number**

**Image address**

**Description**

**Release date**

**Impact**

0.12.0

registry-cn-hangzhou.aliyuncs.com/acs/arena-deploy-manager:0.12.0-aliyun.0

-   RayJob can be submitted.
    
-   Distributed inference jobs can be submitted.
    

2024-11-11

No impact on workloads.

0.12.1

registry-cn-hangzhou.aliyuncs.com/acs/arena-deploy-manager:0.12.1-aliyun.0

-   Common type devices is supported by MPIJob training jobs.
    
-   The clean pod policy related issues of tf-operator are fixed.
    
-   The rendering issue that occurs when an elastic training job uses the on-premises logging directory is fixed.
    
-   The issue of cron-operator failing to clean up jobs is fixed.
    

2024-11-25

No impact on workloads.

### **October 2024**

**Version number**

**Image address**

**Description**

**Release date**

**Impact**

0.10.1

registry-cn-hangzhou.ack.aliyuncs.com/acs/arena-deploy-manager:0.10.1-aliyun.0

-   Multiple types of devices are supported.
    
-   successPolicy is supported by TFJob.
    
-   The issue of failing to submit the SparkApplication is fixed.
    

2024-10-14

No impact on workloads.

### April 2024

**Version number**

**Image address**

**Description**

**Release date**

**Impact**

0.9.14

registry.cn-hangzhou.aliyuncs.com/acs/arena-deploy-manager:0.9.14-adb43b8

The model management feature is supported.

2024-04-11

No impact on workloads.

### March 2024

**Version number**

**Image address**

**Description**

**Release date**

**Impact**

0.9.13

registry.cn-hangzhou.aliyuncs.com/acs/arena-deploy-manager:0.9.13-5ac396c

-   The backend parameter is added to the Triton inference service.
    
-   The directory mounted to a KServe inference service can be updated.
    

2024-03-18

No impact on workloads.

### February 2024

**Version number**

**Image address**

**Description**

**Release date**

**Impact**

0.9.12

registry.cn-hangzhou.aliyuncs.com/acs/arena-deploy-manager:0.9.12-a707f81

-   The base image of the Triton Inference Server is updated.
    
-   The training-operator custom resource definition (CRD) is compatible.
    

2024-02-04

No impact on workloads.

### **November 2023**

**Version number**

**Image address**

**Description**

**Release date**

**Impact**

0.9.11

registry.cn-hangzhou.aliyuncs.com/acs/arena-deploy-manager:0.9.11-ce87d10

-   KServe inference services can be deployed.
    
-   The livenessProbe and readinessProbe parameters can be configured for an inference service.
    

2023-11-17

No impact on workloads.

### **August 2023**

**Version number**

**Image address**

**Description**

**Release date**

**Impact**

0.9.10

registry.cn-hangzhou.aliyuncs.com/acs/arena-deploy-manager:0.9.10-4b5c18c

-   An SSH secret can be created when an elastic or DeepSpeed training job is submitted.
    
-   By default, permissions to the et-operator Secret are removed and can be manually granted.
    

2023-08-02

No impact on workloads.

### **June 2023**

**Version number**

**Image address**

**Description**

**Release date**

**Impact**

0.9.9

registry.cn-beijing.aliyuncs.com/acs/arena-deploy-manager:0.9.9-ce4a78d

-   DeepSpeed is added to support the submission of DeepSpeed distributed training jobs.
    
-   The imagePullPolicy parameter can be configured.
    

2023-06-29

No impact on workloads.

### **May 2023**

**Version number**

**Image address**

**Description**

**Release date**

**Impact**

0.9.8

registry.cn-hangzhou.aliyuncs.com/acs/arena-deploy-manager:0.9.7-d51fe2e

-   SDKs can be used to specify the cleanup time for jobs that are completed.
    
-   Role-Based Access Control (RBAC) permissions are limited.
    

2023-05-23

No impact on workloads.

### April 2023

**Version number**

**Image address**

**Description**

**Release date**

**Impact**

0.9.7

registry.cn-hangzhou.aliyuncs.com/acs/arena-deploy-manager:0.9.7-d51fe2e

The completion time of scheduled jobs can be specified.

2023-04-11

No impact on workloads.

0.9.6

registry.cn-hangzhou.aliyuncs.com/acs/arena-deploy-manager:0.9.6-b3c2c7f

-   The et-operator image is updated.
    
-   The ownerreference parameter can be configured when you submit a TensorFlow or PyTorch training job.
    

2023-04-04

No impact on workloads.

### **March 2023**

**Version number**

**Image address**

**Description**

**Release date**

**Impact**

0.9.5

registry.cn-hangzhou.aliyuncs.com/acs/arena-deploy-manager:0.9.5-c3948e2

-   The running-timeout, starting-timeout, and ttl-after-finished parameters can be configured when you submit a TensorFlow training job by using Arena.
    
-   The running-timeout and ttl-after-finished parameters can be configured when you submit a PyTorch training job by using Arena.
    
-   jobsupervisor charts are supported.
    
-   SDK for Java is updated to 1.0.4.
    
-   The issue that the gang pod label is not standardized is fixed.
    
-   The images of tf-operator, pytorch-operator, and et-operator are updated.
    

2023-03-16

No impact on workloads.
