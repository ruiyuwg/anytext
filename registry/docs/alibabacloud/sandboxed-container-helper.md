This topic describes the features of sandboxed-container-helper and lists the latest changes to sandboxed-container-helper.

## Introduction

sandboxed-container-helper performs health checks and O&M operations on sandboxed containers. sandboxed-container-helper provides the following features:

-   Provides the Prometheus exporter to collect information about the disk space allocated by Device Mapper. You can deploy ack-arms-prometheus in Container Service for Kubernetes (ACK) clusters to monitor the disk space allocated by Device Mapper and configure alerts. For more information, see [Enable ARMS Prometheus](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/use-managed-service-for-prometheus-to-monitor-an-ack-cluster#task-2461398 "You can view dashboards and performance metrics preset for Container Service for Kubernetes (ACK) by using Application Real-Time Monitoring Service (ARMS) Prometheus. This topic describes how to enable ARMS Prometheus in ACK, how to configure alerts in ARMS Prometheus, and how to customize monitoring metrics and use Grafana to display monitoring metrics.").
-   Checks and reports unusual events to kube-apiserver, such as storage leaks, container data leaks, and orphaned pods. You can deploy ack-node-problem-detector in ACK clusters to collect and monitor these events. For more information, see [Event monitoring](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/event-monitoring#task-1461430 "Event monitoring is a monitoring method provided by Kubernetes. It provides improvements over the resource monitoring in terms of timeliness, accuracy, and scenarios. You can use node-problem-detector with the Kubernetes event center of Log Service to sink cluster events, and configure node-problem-detector to diagnose clusters and send events of anomalies to sinks. You can sink cluster events to DingTalk, Log Service, and EventBridge. This allows you to monitor exceptions and issues in clusters in real time.").

## Usage notes

By default, sandboxed-container-helper is installed in ACK clusters. You can use the component without extra configurations.

## Release notes

    

Version

Image address

Release date

Description

Impact

v1.0.0-7a70086-aliyun

registry.cn-hangzhou.aliyuncs.com/acs/sandboxed-container-helper:v1.0.0-7a70086-aliyun

2020-05-12

New features:

-   Unusual events, such as container data leaks and orphaned pods, are reported to kube-apiserver.
-   The monitoring of the disk space allocated by Device Mapper is provided.
-   Scripts are provided to fix system issues.

No impact on workloads
