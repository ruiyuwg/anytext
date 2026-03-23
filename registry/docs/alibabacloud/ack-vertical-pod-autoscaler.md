ack-vertical-pod-autoscaler is an autoscaler of Kubernetes. This topic introduces ack-vertical-pod-autoscaler and describes the usage notes and release notes for ack-vertical-pod-autoscaler.

## **Introduction**

ack-vertical-pod-autoscaler can monitor the resource consumption mode of pods and provide recommendations on CPU and memory allocation. In addition, it can adjust resource allocation without changing the number of replicated pods. ack-vertical-pod-autoscaler is suitable for stateful applications that require stable resource supply.

## **Usage notes**

Only ACK managed clusters, ACK dedicated clusters, and ACK Edge clusters whose Kubernetes versions are 1.26 and later support ack-vertical-pod-autoscaler.

For more information about how to use ack-vertical-pod-autoscaler in clusters, see [Vertical pod auto scaling](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/vertical-pod-autoscaling).

## **Release notes**

### February 2025

**Version number**

**Image address**

**Description**

**Release date**

**Impact**

1.1.1

-   registry-{{regionID}}.ack.aliyuncs.com/acs/vpa-admission-controller:1.1.0-be98853-aliyun
    
-   registry-{{regionID}}.ack.aliyuncs.com/acs/vpa-recommender:1.1.0-be98853-aliyun
    
-   registry-{{regionID}}.ack.aliyuncs.com/acs/vpa-updater:1.1.0-be98853-aliyun
    

Adapted for ACK Edge clusters.

2025-02-06

No impact on workloads.

### January 2025

**Version number**

**Image address**

**Description**

**Release date**

**Impact**

1.1.0

-   registry-{{regionID}}.ack.aliyuncs.com/acs/vpa-admission-controller:1.1.0-be98853-aliyun
    
-   registry-{{regionID}}.ack.aliyuncs.com/acs/vpa-recommender:1.1.0-be98853-aliyun
    
-   registry-{{regionID}}.ack.aliyuncs.com/acs/vpa-updater:1.1.0-be98853-aliyun
    

Vulnerabilities in security checks are fixed.

2025-01-08

No impact on workloads.

### April 2024

**Version number**

**Image address**

**Description**

**Release date**

**Impact**

1.0.0

-   registry-{{regionID}}.ack.aliyuncs.com/acs/vpa-admission-controller:1.0.0
    
-   registry-{{regionID}}.ack.aliyuncs.com/acs/vpa-recommender:1.0.0
    
-   registry-{{regionID}}.ack.aliyuncs.com/acs/vpa-updater:1.0.0
    

**Note**

This version is in canary release.

This is the initial release.

2024-04-30

No impact on workloads.
