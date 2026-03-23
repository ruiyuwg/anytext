The ack-kubernetes-cronhpa-controller component is used to schedule resource scaling. This topic introduces ack-kubernetes-cronhpa-controller and describes the usage notes and release notes of the component.

## Introduction

The ack-kubernetes-cronhpa-controller component is a Kubernetes Horizontal Pod Autoscaler (HPA) controller that you can use to schedule pod scaling. Cron Horizontal Pod Autoscaler (CronHPA) automatically scales the number of pods at a scheduled time.

You can use CronHPA to scale subresources in Kubernetes objects, including Deployments and StatefulSets. The subresources must belong to open source projects on GitHub.

## Usage notes

For more information about the usage notes for ack-kubernetes-cronhpa-controller, see [CronHPA](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/cronhpa#task-2391975).

## Release notes

**December 2023**

**Version**

**Image address**

**Release date**

**Description**

**Impact**

v1.4.4-d9f7d25-aliyun

registry-cn-beijing-vpc.ack.aliyuncs.com/acs/kubernetes-cronhpa-controller:v1.4.4-d9f7d25-aliyun

2023-12-15

Enhance CronHPA Job validation to avoid delays in cleaning up CronHPA Job.

No impact on workloads.

**March 2023**

**Version**

**Image address**

**Release date**

**Description**

**Impact**

v1.4.3-8b73ecb-aliyun

registry-cn-beijing-vpc.ack.aliyuncs.com/acs/kubernetes-cronhpa-controller:v1.4.3-8b73ecb-aliyun

2023-03-24

Update dependencies and optimize memory consumption.

No impact on workloads.

**February 2023**

**Version**

**Image address**

**Release date**

**Description**

**Impact**

v1.4.2-b08beb8-aliyun

registry-cn-beijing-vpc.ack.aliyuncs.com/acs/kubernetes-cronhpa-controller:v1.4.3-8b73ecb-aliyunv1.4.2-b08beb8-aliyun

2023-02-27

The concurrency conflict issue when scheduled tasks are executed is fixed.

No impact on workloads.

**July 2022**

**Version**

**Image address**

**Release date**

**Description**

**Impact**

v1.4.1-277c7d5-aliyun

registry.cn-hangzhou.aliyuncs.com/acs/kubernetes-cronhpa-controller:v1.4.1-277c7d5-aliyun

2022-07-23

Tasks that are not executed due to timeouts are retried.

No impact on workloads.

**May 2021**

**Version**

**Image address**

**Release date**

**Description**

**Impact**

v1.4.0-a2f4954d-aliyun

registry.cn-hangzhou.aliyuncs.com/acs/kubernetes-cronhpa-controller:v1.4.0-a2f4954d-aliyun

2021-05-27

The authorization issue related to elastic workloads is fixed.

No impact on workloads.

**December 2020**

**Version**

**Image address**

**Release date**

**Description**

**Impact**

v1.4.0-fc4f6060-aliyun

registry.cn-hangzhou.aliyuncs.com/acs/kubernetes-cronhpa-controller:v1.4.0-fc4f6060-aliyun

2020-12-18

-   Basic features of CronHPA are supported.
    
-   Compatibility with HPA is supported.
    

No impact on workloads.
