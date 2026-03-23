The cloud-controller-manager component enables core Kubernetes components to interact with cloud service providers through the Kubernetes API. This topic describes the metrics for the cloud-controller-manager component, explains how to use its dashboard, and provides solutions to common metric anomalies.

## Before you begin

### **Entry point**

For more information, see [View the monitoring dashboards for control plane components](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/view-control-plane-component-dashboards-in-ack-pro-clusters).

### **Metric list**

Metrics expose the status and parameters of a component. The following table lists the metrics for the cloud-controller-manager component.

**Metric**

**Type**

**Description**

ccm\_slb\_latency\_ms

Histogram

The synchronization delay of a Classical Load Balancer (CLB). Unit: ms.

The bucket thresholds are `{100, 200, 300, 400, 500, 600, 700, 800, 900, 1000, 1500, 2000, 3000, 4000, 5000, 6000, 7000, 8000, 9000, 10000}`.

ccm\_node\_latency\_ms

Histogram

The node synchronization delay. Unit: ms.

The bucket thresholds are `{100, 200, 300, 400, 500, 600, 700, 800, 900, 1000, 1500, 2000, 3000, 4000, 5000, 6000, 7000, 8000, 9000, 10000}`.

ccm\_route\_latency\_ms

Histogram

The route synchronization delay. Unit: ms.

The bucket thresholds are `{100, 200, 300, 400, 500, 600, 700, 800, 900, 1000, 1500, 2000, 3000, 4000, 5000, 6000, 7000, 8000, 9000, 10000}`.

workqueue\_adds\_total

Counter

The number of Adds events processed by the workqueue.

workqueue\_depth

Gauge

The length of the workqueue. If the workqueue length remains at a high level for an extended period of time, the controller cannot process tasks in the workqueue in a timely manner, which results in task accumulation.

workqueue\_queue\_duration\_seconds\_bucket

Histogram

The duration for which a task remains in the workqueue. The bucket thresholds are defined as the set {10\-8, 10\-7, 10\-6, 10\-5, 10\-4, 10\-3, 10\-2, 10\-1, 1, 10}. Unit: seconds.

memory\_utilization\_byte

Gauge

The memory usage. Unit: bytes.

cpu\_utilization\_core

Gauge

The used CPU capacity. Unit: core.

rest\_client\_requests\_total

Counter

The number of HTTP requests calculated based on status codes, methods, and hosts.

rest\_client\_request\_duration\_seconds\_bucket

Histogram

The HTTP response delay calculated based on Verbs and URLs.

**Note**

The following resource utilization metrics are deprecated. Remove any alerts and monitoring that depend on these metrics.

-   cpu\_utilization\_ratio: The CPU utilization.
    
-   memory\_utilization\_ratio: The memory usage.
    

## Dashboard usage guide

The dashboards are created using component metrics and related Prometheus Query Language (PromQL) queries. The following sections describe the observability displays and features of the dashboards.

### **CCM**

#### **Observability display**![ccm1](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/2148181271/p474593.png)

#### **Feature description**

**Dashboard name**

**PromQL**

**Description**

**Route Synchronization Delay**

histogram\_quantile($quantile, sum(rate(ccm\_route\_latencies\_duration\_milliseconds\_bucket\[$interval\])) by (verb, le))

The route synchronization delay. Unit: ms.

**Node Synchronization Delay**

histogram\_quantile($quantile, sum(rate(ccm\_node\_latencies\_duration\_milliseconds\_bucket\[$interval\])) by (verb, le))

The node synchronization delay. Unit: ms.

**CLB (Classical Load Balancer) Synchronization Delay**

histogram\_quantile($quantile, sum(rate(ccm\_slb\_latencies\_duration\_milliseconds\_bucket\[$interval\])) by (verb, le))

The CLB synchronization delay. Unit: ms.

### ****Queue****

#### **Observability display**![ccm2](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/1038133661/p474601.png)

#### **Feature description**

**Dashboard name**

**PromQL**

**Description**

**Workqueue Enqueue Rate**

sum(rate(workqueue\_adds\_total{job="ack-cloud-controller-manager"}\[$interval\])) by (name)

The number of Adds events that are added to the workflow in the specified interval.

**Workqueue Depth**

workqueue\_depth{job="ack-cloud-controller-manager"}

The change of the workqueue length in the specified interval.

**Workqueue Processing Delay**

histogram\_quantile($quantile, sum(rate(workqueue\_queue\_duration\_seconds\_bucket{job="ack-cloud-controller-manager"}\[$interval\])) by (name, le))

The duration of the events in the workqueue.

### ****Resources****

#### **Observability display**![ccm3](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/2148181271/p474604.png)

#### **Feature description**

**Dashboard name**

**PromQL**

**Description**

**Memory Usage**

memory\_utilization\_byte{container="cloud-controller-manager"}

The memory usage. Unit: bytes.

**CPU Usage**

cpu\_utilization\_core{container="cloud-controller-manager"}\*1000

The used CPU capacity. Unit: millicore.

### ****Kube API****

#### **Observability display**![ccm4](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/2148181271/p474605.png)

#### **Feature description**

**Dashboard name**

**PromQL**

**Description**

**Kube API Request QPS**

-   sum(rate(rest\_client\_requests\_total{job="ack-cloud-controller-manager",code=~"2.."}\[$interval\])) by (method,code)
    
-   sum(rate(rest\_client\_requests\_total{job="ack-cloud-controller-manager",code=~"3.."}\[$interval\])) by (method,code)
    
-   sum(rate(rest\_client\_requests\_total{job="ack-cloud-controller-manager",code=~"4.."}\[$interval\])) by (method,code)
    
-   sum(rate(rest\_client\_requests\_total{job="ack-cloud-controller-manager",code=~"5.."}\[$interval\])) by (method,code)
    

The queries per second (QPS) of HTTP requests that the cloud-controller-manager sends to the kube-apiserver, analyzed by verb and request URL.

## Common metric anomalies

### **CLB (Classical Load Balancer) Synchronization Delay**

**Normal condition**

**Abnormal condition**

**Description**

**Suggestion**

The **CLB (Classical Load Balancer) Synchronization Delay** is within 10s.

The **CLB (Classical Load Balancer) Synchronization Delay** is greater than 10s.

The CLB synchronization takes too long.

Check for anomalous activity in the service.

### **Workqueue Depth**

**Normal condition**

**Abnormal condition**

**Description**

**Suggestion**

The **Workqueue Depth** is less than 10.

The **Workqueue Depth** is greater than 10.

The work queue contains many services to be synchronized.

An excessively long queue slows down service synchronization. Reduce the frequency of changes to nodes, pods, and services in the cluster as needed.

## **References**

For more information about the metrics, dashboard usage guides, and common metric anomalies for other control plane components, see [Metrics for the kube-apiserver component](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/monitor-kube-apiserver), [Metrics for the etcd component](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/monitor-etcd), [Metrics for the kube-scheduler component](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/monitor-kube-scheduler), and [Metrics for the kube-controller-manager component](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/monitor-kube-controller-manager).
