ack-node-problem-detector monitors node health in Container Service for Kubernetes (ACK) clusters. Built on the open source [node-problem-detector](https://github.com/kubernetes/node-problem-detector) project with Alibaba Cloud enhancements, this component detects node anomalies, reports cluster events, and serves as the Event Center for ACK clusters. It supports third-party monitoring platforms and custom monitoring plugins to extend node inspection coverage.

## Component architecture

ack-node-problem-detector consists of four sub-components that handle initialization, detection, event routing, and GPU monitoring.

**kube-event-init**

Initializes cloud resources for the Simple Log Service (SLS) Event Center instance when you install ack-node-problem-detector. This prepares the storage and analysis infrastructure that ack-node-problem-detector-daemonset and kube-eventer use for event data.

**ack-node-problem-detector-daemonset**

Runs a pod replica on each eligible node to monitor node health. Reports cluster condition statuses and events. The ack-node-problem-detector image address in the change history section refers to this sub-component.

**Note**

For more information about the upstream open source project, see [node-problem-detector](https://github.com/kubernetes/node-problem-detector).

**kube-eventer**

Reports all cluster events to the SLS Event Center by default. Provides event storage and analysis for 90 days by default, along with monitoring dashboards, alerts, and event search and analysis. kube-eventer can also report cluster events to other systems, such as DingTalk or EventBridge, for further data integration. For more information, see [kube-eventer](https://github.com/AliyunContainerService/kube-eventer).

**accel-health-monitor**

Runs a pod replica on each eligible GPU node to monitor GPU device status. Reports Node Conditions and Kubernetes events. The image address for accel-health-monitor is provided in the change history section. For more information about permissions and notes for this sub-component, see [GPU anomaly detection](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/anomaly-diagnosis-in-gpu-accelerated-nodes).

## Usage

For installation instructions, use cases, and plugin features, see [Event monitoring](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/event-monitoring#task-1461430).

## Change history

### November 2025

**Version number**

**Image address**

**Change time**

**Change description**

1.2.29

-   accel-health-monitor: registry-\_\_ACK\_REGION\_ID\_\_-vpc.ack.aliyuncs.com/acs/accel-health-monitor:v0.5.3-bafb2ba5-aliyun
-   kube-eventer: registry-vpc.\_\_ACK\_REGION\_ID\_\_.aliyuncs.com/acs/kube-eventer:v1.2.14-315a7cb-aliyun

November 30, 2025

**Note**

This version is in phased release. To use it, [submit a ticket](https://smartservice.console.alibabacloud.com/console.htm).

-   The GPU detection plugin in ack-node-problem-detector-daemonset is deployed separately as a DaemonSet named ack-accel-health-monitor. For information about the permissions for ack-accel-health-monitor, see [GPU anomaly detection](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/anomaly-diagnosis-in-gpu-accelerated-nodes).
-   The GPU detection plugin adds detection capabilities for software and devices such as nvidia-persistenced, nvidia-fabricmanager, and NVLink.
-   The feature that allows the GPU plugin of the ack-node-problem-detector component to fence abnormal GPUs is disabled by default.
-   The fencing policies for some GPU check items are changed. For more information, see [GPU anomaly detection](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/anomaly-diagnosis-in-gpu-accelerated-nodes).
-   Fixed an issue where the GPU plugin would restart due to occasional failures in JSON object serialization.
-   kube-eventer supports reporting data to SLS over HTTPS.

### July 2025

**Version number**

**Image address**

**Change time**

**Change description**

1.2.27

-   kube-eventer: registry-vpc.\_\_ACK\_REGION\_ID\_\_.aliyuncs.com/acs/kube-eventer:v1.2.13-b4a3960-aliyun
-   kube-event-init: registry-vpc.\_\_ACK\_REGION\_ID\_\_.aliyuncs.com/acs/kube-eventer-init:v1.9-2b115d6-aliyun

July 24, 2025

**Note**

This version is in phased release. To use it, [submit a ticket](https://smartservice.console.alibabacloud.com/console.htm).

-   Security hardening for kube-eventer and kube-event-init.
-   ACK dedicated clusters support security hardening using the enhanced mode for accessing ECS instance metadata. During authentication, the system accesses ECS instance metadata in enhanced mode to improve cluster security. For more information, see [Enforce the enhanced mode to access ECS instance metadata](/help/en/cloud-config/latest/ecs-instance-meta-data-mode-check).

### June 2025

**Version number**

**Image address**

**Change time**

**Change description**

1.2.26

-   ack-node-problem-detector: registry-vpc.\_\_ACK\_REGION\_ID\_\_.aliyuncs.com/acs/node-problem-detector:v0.8.16-8d2193b-aliyun
-   npd-gpu: registry-\_\_ACK\_REGION\_ID\_\_-vpc.ack.aliyuncs.com/acs/npd-gpu-plugin:v0.4.1-7359b830-aliyun
-   kube-eventer: registry-vpc.\_\_ACK\_REGION\_ID\_\_.aliyuncs.com/acs/kube-eventer:v1.2.12-c7c1896-aliyun
-   kube-event-init: registry-vpc.\_\_ACK\_REGION\_ID\_\_.aliyuncs.com/acs/kube-eventer-init:v1.8-e43647f-aliyun

June 11, 2025

**Note**

This version is in phased release. To use it, [submit a ticket](https://smartservice.console.alibabacloud.com/console.htm).

-   Fixed an issue where the NvidiaDeviceRecovered event was not successfully exposed in some GPU self-healing scenarios.
-   Optimized the image size of ack-node-problem-detector.

1.2.25

-   ack-node-problem-detector: registry-vpc.\_\_ACK\_REGION\_ID\_\_.aliyuncs.com/acs/node-problem-detector:v0.8.16-8ed7053-aliyun
-   npd-gpu: registry-\_\_ACK\_REGION\_ID\_\_-vpc.ack.aliyuncs.com/acs/npd-gpu-plugin:v0.4.0-e434dc36-aliyun
-   kube-eventer: registry-vpc.\_\_ACK\_REGION\_ID\_\_.aliyuncs.com/acs/kube-eventer:v1.2.12-c7c1896-aliyun
-   kube-event-init: registry-vpc.\_\_ACK\_REGION\_ID\_\_.aliyuncs.com/acs/kube-eventer-init:v1.8-e43647f-aliyun

June 06, 2025

**Note**

This version is in phased release. To use it, [submit a ticket](https://smartservice.console.alibabacloud.com/console.htm).

-   Added the npd-gpu container for GPU fault detection.
-   Supports fencing specified GPU cards when a GPU fault is detected.
-   Added support for multiple check items, such as NvidiaXID44Error, NvidiaXID61Error, NvidiaXID62Error, and NvidiaXID69Error. For more information, see [GPU anomaly detection and automatic fencing](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/anomaly-diagnosis-in-gpu-accelerated-nodes).
-   Supports configuring which GPU check items to enable through ack-node-problem-detector-config.
-   Optimized the image size of the ack-node-problem-detector image.

### August 2024

**Version number**

**Image address**

**Change time**

**Change description**

1.2.20

-   ack-node-problem-detector: registry-vpc.\_\_ACK\_REGION\_ID\_\_.aliyuncs.com/acs/node-problem-detector:v0.8.14-3c6002c-aliyun
-   kube-eventer: registry-vpc.\_\_ACK\_REGION\_ID\_\_.aliyuncs.com/acs/kube-eventer:v1.2.11-0620284-aliyun
-   kube-event-init: registry-vpc.\_\_ACK\_REGION\_ID\_\_.aliyuncs.com/acs/kube-eventer-init:v1.8-e43647f-aliyun

August 20, 2024

-   Supports GPU fault inspection for ECS nodes.
-   Upgraded the kube-eventer component to optimize performance bottlenecks when reporting many events in a cluster.
-   Upgraded the kube-eventer component to support the V4 signature algorithm for Simple Log Service data transmission.
-   Added component parameter settings. You can now manually configure the local port of the ack-node-problem-detector DaemonSet pod to 20256 or 20257. The port is disabled by default.

### December 2023

**Version number**

**Image address**

**Change time**

**Change description**

v1.2.18

-   ack-node-problem-detector: registry-vpc.\_\_ACK\_REGION\_ID\_\_.aliyuncs.com/acs/node-problem-detector:v0.8.13-003ac31-aliyun
-   kube-eventer: registry-vpc.\_\_ACK\_REGION\_ID\_\_.aliyuncs.com/acs/kube-eventer:v1.2.8-27a468a-aliyun
-   kube-event-init: registry-vpc.\_\_ACK\_REGION\_ID\_\_.aliyuncs.com/acs/kube-eventer-init:v1.7-48a2acc-aliyun

December 18, 2023

-   Fixed a bug that caused false positive abnormal events for PodOOMKilling anomalies due to cached historical kernel logs.
-   When you upgrade an older version of the ack-node-problem-detector component, user-defined component parameters are now inherited.

### August 2023

**Version number**

**Image address**

**Change time**

**Change description**

v1.2.17

-   ack-node-problem-detector: registry-vpc.\_\_ACK\_REGION\_ID\_\_.aliyuncs.com/acs/node-problem-detector:v0.8.12-bf8aff8-aliyun
-   kube-eventer: registry-vpc.\_\_ACK\_REGION\_ID\_\_.aliyuncs.com/acs/kube-eventer:v1.2.8-27a468a-aliyun
-   kube-event-init: registry-vpc.\_\_ACK\_REGION\_ID\_\_.aliyuncs.com/acs/kube-eventer-init:v1.7-48a2acc-aliyun

August 24, 2023

-   You can modify the component parameter settings on the component management page in the ACK console to update the Project and Logstore instance configurations in the SLS service.
-   Supports adding extra tag information, such as the cluster name, when sending log data to SLS. This information is displayed by default in the SLS data of the ACK Event Center.

### June 2023

**Version number**

**Image address**

**Change time**

**Change description**

v1.2.16

-   ack-node-problem-detector: registry-vpc.\_\_ACK\_REGION\_ID\_\_.aliyuncs.com/acs/node-problem-detector:v0.8.12-bf8aff8-aliyun
-   kube-eventer: registry-vpc.\_\_ACK\_REGION\_ID\_\_.aliyuncs.com/acs/kube-eventer:v1.2.8-019546c-aliyun
-   kube-event-init: registry-vpc.\_\_ACK\_REGION\_ID\_\_.aliyuncs.com/acs/kube-eventer-init:v1.7-48a2acc-aliyun

June 27, 2023

Supports configuring the resource specification parameters for the component on the component management page in the ACK console.

v1.2.15

-   ack-node-problem-detector: registry-vpc.\_\_ACK\_REGION\_ID\_\_.aliyuncs.com/acs/node-problem-detector:v0.8.12-bf8aff8-aliyun
-   kube-eventer: registry-vpc.\_\_ACK\_REGION\_ID\_\_.aliyuncs.com/acs/kube-eventer:v1.2.8-019546c-aliyun
-   kube-event-init: registry-vpc.\_\_ACK\_REGION\_ID\_\_.aliyuncs.com/acs/kube-eventer-init:v1.7-48a2acc-aliyun

June 06, 2023

Optimized the performance load that ack-node-problem-detector places on the API server and etcd when PodOOMKilling frequently occurs in large-scale clusters.

### February 2023

**Version number**

**Image address**

**Change time**

**Change description**

v1.2.14

-   ack-node-problem-detector: registry.aliyuncs.com/acs/node-problem-detector:v0.8.11-edc7907-aliyun
-   kube-eventer: registry-vpc.\_\_ACK\_REGION\_ID\_\_.aliyuncs.com/acs/kube-eventer:v1.2.6-bbf76f7-aliyun
-   kube-event-init: registry.{ .Values.controller.regionId }.aliyuncs.com/acs/kube-eventer-init:v1.7-48a2acc-aliyun

February 03, 2023

-   Optimized the pull speed of component images.
-   Supports ACK Edge clusters.

### September 2022

**Version number**

**Image address**

**Change time**

**Change description**

v1.2.11

-   ack-node-problem-detector: registry.aliyuncs.com/acs/node-problem-detector:v0.8.11-edc7907-aliyun
-   kube-eventer: registry-vpc.\_\_ACK\_REGION\_ID\_\_.aliyuncs.com/acs/kube-eventer:v1.2.6-bbf76f7-aliyun
-   kube-event-init: registry.{ .Values.controller.regionId }.aliyuncs.com/acs/kube-eventer-init:v1.7-48a2acc-aliyun

September 30, 2022

-   Optimized the performance of the ack-node-problem-detector inspection logic to reduce the load on core cluster components.
-   Image security hardening.

### February 2022

**Version number**

**Image address**

**Change time**

**Change description**

v1.2.9

-   ack-node-problem-detector: registry.aliyuncs.com/acs/node-problem-detector:v0.8.10-e0ff7d2
-   kube-eventer: registry-vpc.\_\_ACK\_REGION\_ID\_\_.aliyuncs.com/acs/kube-eventer-amd64:v1.2.6-f0efecf-aliyun
-   kube-event-init: registry.{ .Values.controller.regionId }.aliyuncs.com/acs/kube-eventer-init:v1.6-a92aba6-aliyun

February 22, 2022

-   Supports kernel inspection.
-   Security hardening.

### January 2022

**Version number**

**Image address**

**Change time**

**Change description**

v1.2.8

-   ack-node-problem-detector: registry.aliyuncs.com/acs/node-problem-detector:v0.8.10-e0ff7d2
-   kube-eventer: registry-vpc.\_\_ACK\_REGION\_ID\_\_.aliyuncs.com/acs/kube-eventer-amd64:v1.2.5-cc7ec54-aliyun
-   kube-event-init: registry.{ .Values.controller.regionId }.aliyuncs.com/acs/kube-eventer-init:v1.6-a92aba6-aliyun

January 20, 2022

-   Compatible with different modes of containerd.
-   Optimized the Quality of Service (QoS) resource limits for the component to improve stability.

### November 2021

**Version number**

**Image address**

**Change time**

**Change description**

v1.2.7

-   ack-node-problem-detector: registry.aliyuncs.com/acs/node-problem-detector:v0.8.10-e0ff7d2
-   kube-eventer: registry-vpc.\_\_ACK\_REGION\_ID\_\_.aliyuncs.com/acs/kube-eventer-amd64:v1.2.5-cc7ec54-aliyun
-   kube-event-init: registry.{ .Values.controller.regionId }.aliyuncs.com/acs/kube-eventer-init:v1.6-a92aba6-aliyun

November 25, 2021

-   Compatible with system services of kernel versions such as Alibaba Cloud Linux 3 and CentOS 8.
-   Supports ARM architecture environments.

### April 2021

**Version number**

**Image address**

**Change time**

**Change description**

v1.2.5

-   ack-node-problem-detector: registry.aliyuncs.com/acs/node-problem-detector:v0.6.3-28-160499f
-   kube-eventer: registry-vpc.\_\_ACK\_REGION\_ID\_\_.aliyuncs.com/acs/kube-eventer-amd64:v1.2.4-0f5aaee-aliyun
-   kube-event-init: registry.{ .Values.controller.regionId }.aliyuncs.com/acs/kube-eventer-init:1.5-5e0e7c1-aliyun

April 25, 2021

-   Fixed an issue where kube-event-init in the kube-system namespace would cause a "414 Request-URI Too Large" error when the Event Center was enabled.
-   Optimized the eventer list-watch mechanism to prevent excessive request traffic to etcd. For more information, see [eventer list-watch](https://github.com/AliyunContainerService/kube-eventer/pull/188).
-   Fixed an issue where kube-eventer incorrectly parsed the timestamps of some system events. For more information, see [fix FailedScheduling event write to sls with wrong timestamp](https://github.com/AliyunContainerService/kube-eventer/pull/168).

### July 2020

**Version number**

**Image address**

**Change time**

**Change description**

v0.6.3-28-160499f

registry.aliyuncs.com/acs/node-problem-detector:v0.6.3-28-160499f

July 27, 2020

-   Optimized OOM Killing event messages to include information such as the pod name, namespace, and UID.
-   Optimized the execution efficiency of the check\_fd plugin.
-   Optimized event notifications for node PID watermarks.
-   Upgraded the network issue detection plugin.
-   Added a plugin to monitor and alert on the inode watermark of the node's system disk.
