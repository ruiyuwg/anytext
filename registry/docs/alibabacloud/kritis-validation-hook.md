The kritis-validation-hook component is a key component used to verify container image signatures. This topic describes the features, usage notes, and release notes for the kritis-validation-hook component.

## Introduction

The kritis-validation-hook component is a key component used to verify container image signatures. Before you deploy a container image, verify its signature to ensure that only images signed by trusted authorities are deployed. This reduces the risk of running unexpected or malicious code in your environment. For more information about the kritis-validation-hook component, see [Introduction to the kritis-validation-hook component](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/introduction-to-kritis-validation-hook#task-2445013).

## Usage notes

For more information about how to use the kritis-validation-hook component, see [Use the kritis-validation-hook component to automatically verify container image signatures](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/use-kritis-validation-hook-to-automatically-verify-the-signatures-of-container-images#task-2479083).

## Release notes

### **September 2025**

**Version number**

**Image address**

**Modification Time**

**Changes**

**Impact**

0.13.0

registry-cn-hangzhou.ack.aliyuncs.com/acs/kritis-server:0.13.0

2025-09-11

-   The naming convention for component versions is changed.
    
-   The Golang version is upgraded to 1.24.6 to improve component stability.
    

An abnormal component upgrade may cause cluster resource changes to fail. Upgrade the component during off-peak hours.

### **May 2025**

**Version number**

**Image address**

**Last Modified**

**Changes**

**Impact**

v0.12.0.0-g1535b25b-aliyun

registry-cn-hangzhou.ack.aliyuncs.com/acs/kritis-server:v0.12.0.0-g1535b25b-aliyun

2025-05-07

-   Starting from this version, the component obtains **Instance Metadata** in **Security Hardening Mode**. For more information about the **Security Hardening Mode**, see [Instance metadata](/help/en/ecs/user-guide/view-instance-metadata/).
    
-   The Golang version is upgraded to 1.24.3 to improve component stability.
    

An abnormal component upgrade may cause cluster resource changes to fail. Upgrade the component during off-peak hours.

### **August 2024**

**Version number**

**Image address**

**Modification Time**

**Changes**

**Impact**

v0.11.0.0-gf0617391-aliyun

registry-cn-hangzhou.ack.aliyuncs.com/acs/kritis-server:v0.11.0.0-gf0617391-aliyun

2024-08-29

-   Adds support for configuring RAM Roles for Service Accounts (RRSA) authentication during component installation and upgrade.
    
-   Verifies image signatures when you create and update StatefulSet, Job, CronJob, and ReplicationController resources.
    

An abnormal component upgrade may cause cluster resource changes to fail. Upgrade the component during off-peak hours.

### **July 2024**

**Version number**

**Image address**

**Modification Time**

**Description**

**Impact**

v0.10.0.0-gde6f9437-aliyun

registry-cn-hangzhou.ack.aliyuncs.com/acs/kritis-server:v0.10.0.0-gde6f9437-aliyun

2024-07-04

-   Verifies signatures of images used by ephemeral containers.
    
-   Verifies image signatures when you create and update Deployment, DaemonSet, and ReplicaSet resources.
    

An abnormal component upgrade may cause cluster resource changes to fail. Upgrade the component during off-peak hours.

### **April 2023**

**Version number**

**Image address**

**Last Modified**

**Changes**

**Impact**

v0.9.0.0-gb7aa45c7-aliyun

registry.cn-hangzhou.aliyuncs.com/acs/kritis-server:v0.9.0.0-gb7aa45c7-aliyun

2023-04-17

Supports Kubernetes 1.26.

An abnormal component upgrade may cause cluster resource changes to fail. Upgrade the component during off-peak hours.

### **August 2022**

**Version number**

**Image address**

**Modified Time**

**Modifications**

**Impact**

v0.8.0.4-g61d3531e-aliyun

registry.cn-hangzhou.aliyuncs.com/acs/kritis-server:v0.8.0.4-g61d3531e-aliyun

2022-08-05

-   Optimizes the speed of image signature verification in large-scale clusters.
    
-   Supports ACK Serverless clusters that run Kubernetes 1.22.
    
-   Adds support for using RRSA to grant RAM permissions to the component. This method is used by default for ACK Serverless clusters.
    

An abnormal component upgrade may cause cluster resource changes to fail. Upgrade the component during off-peak hours.

### **December 2021**

**Version number**

**Image address**

**Modification Time**

**Changes**

**Impact**

v0.6.0.5-gce1cc2d-aliyun

registry.cn-hangzhou.aliyuncs.com/acs/kritis-server:v0.6.0.5-gce1cc2d-aliyun

2021-12-17

Supports Kubernetes 1.22. Starting from this version, only clusters that run Kubernetes 1.16 or later are supported.

An abnormal component upgrade may cause cluster resource changes to fail. Upgrade the component during off-peak hours.

### **November 2021**

**Version number**

**Image address**

**Last Modified**

**Description**

**Impact**

v0.5.0.6-g525daee-aliyun

registry.cn-hangzhou.aliyuncs.com/acs/kritis-server:v0.5.0.6-g525daee-aliyun

2021-11-15

-   Supports the new image signature data format of ACR.
    
-   Supports the ARM64 architecture.
    

An abnormal component upgrade may cause cluster resource changes to fail. Upgrade the component during off-peak hours.

### **June 2021**

**Version number**

**Image address**

**Modification Time**

**Changes**

**Impact**

v0.4.0.1-gb2862c4-aliyun

registry.cn-hangzhou.aliyuncs.com/acs/kritis-server:v0.4.0.1-gb2862c4-aliyun

2021-06-10

New feature: Supports installing the kritis-validation-hook component in registered clusters.

An abnormal component upgrade may cause cluster resource changes to fail. Upgrade the component during off-peak hours.

### **March 2021**

**Version number**

**Image address**

**Modification Time**

**Description**

**Impact**

v0.3.1.4-ga89b624-aliyun

registry.cn-hangzhou.aliyuncs.com/acs/kritis-server:v0.3.1.4-ga89b624-aliyun

2021-03-24

New feature: Supports signature verification for images in repositories whose names contain forward slashes (/).

An abnormal component upgrade may cause cluster resource changes to fail. Upgrade the component during off-peak hours.

### **November 2020**

**Version number**

**Image address**

**Modification Time**

**Changes**

**Impact**

v0.2.7.2-g5fa671a-aliyun

registry.cn-hangzhou.aliyuncs.com/acs/kritis-server:v0.2.7.2-g5fa671a-aliyun

2020-11-24

Supports the image signature verification whitelist feature. Images in the whitelist are not verified.

An abnormal component upgrade may cause cluster resource changes to fail. Upgrade the component during off-peak hours.

v0.2.6.4-g94b0940-aliyun

registry.cn-hangzhou.aliyuncs.com/acs/kritis-server:v0.2.6.4-g94b0940-aliyun

2020-11-16

Supports signature verification for images for which the ACK image version immutability feature is enabled. For more information, see [Enable image version immutability](/help/en/acr/user-guide/turn-on-immutable-image-version#task-1961931).

An abnormal component upgrade may cause cluster resource changes to fail. Upgrade the component during off-peak hours.

### **August 2020**

**Version number**

**Image address**

**Last Modified**

**Description**

**Impact**

v0.2.5.26-g75d5297-aliyun

registry.cn-hangzhou.aliyuncs.com/acs/kritis-server:v0.2.5.26-g75d5297-aliyun

2020-08-12

-   By default, if signature verification fails, an event with the reason **FailedKritisAdmission** is generated in the kube-system namespace.
    
-   Adds the dry-run mode, which is disabled by default.
    
    If you enable this mode, requests that fail signature verification are allowed. An event with the reason **DryRunKritisAdmission** is generated in the kube-system namespace.
    

An abnormal component upgrade may cause cluster resource changes to fail. Upgrade the component during off-peak hours.

### **June 2020**

**Version number**

**Image address**

**Modification Time**

**Changes**

**Impact**

v0.2.4.1-ge5c1265-aliyun

registry.cn-hangzhou.aliyuncs.com/acs/kritis-server:v0.2.4.1-ge5c1265-aliyun

2020-06-22

Supports cross-region verification of signed ACR images.

An abnormal component upgrade may cause cluster resource changes to fail. Upgrade the component during off-peak hours.

### **April 2020**

**Version number**

**Image address**

**Modification Time**

**Description of changes**

**Impact**

v0.2.3.1-00e70883-aliyun

registry.cn-hangzhou.aliyuncs.com/acs/kritis-server:v0.2.3.1-00e70883-aliyun

2020-04-07

Optimizes program performance and improves log content.

An abnormal component upgrade may cause cluster resource changes to fail. Upgrade the component during off-peak hours.

### **March 2020**

**Version number**

**Image address**

**Last Modified**

**Changes**

**Impact**

v0.2.2.3-fe8a6319-aliyun

registry.cn-hangzhou.aliyuncs.com/acs/kritis-server:v0.2.2.3-fe8a6319-aliyun

2020-03-18

kritis-validation-hook is integrated with Container Registry. You can verify the signatures of images that are signed by KMS. This ensures that only trusted container images are deployed in ACK clusters.

An abnormal component upgrade may cause cluster resource changes to fail. Upgrade the component during off-peak hours.
