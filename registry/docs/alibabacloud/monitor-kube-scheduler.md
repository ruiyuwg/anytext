The kube-scheduler component is the default scheduler in a Kubernetes cluster. It assigns pods to suitable cluster nodes. This topic describes the metrics, dashboards, and common metric anomalies for the kube-scheduler component.

## Prerequisites

### **Access the dashboard**

For more information, see [View the dashboards for control plane components](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/view-control-plane-component-dashboards-in-ack-pro-clusters).

### **Metric checklist**

Metrics provide information about the status and parameters of a component. The following table lists the metrics for the kube-scheduler component.

**Metric**

**Type**

**Description**

scheduler\_scheduler\_cache\_size

Gauge

The number of nodes, pods, and AssumedPods (pods assumed to be scheduled) in the scheduler cache.

scheduler\_pending\_pods

Gauge

The number of pending pods. The queue types are as follows:

-   **unschedulable**: The number of unschedulable pods.
    
-   **backoff**: The number of pods in the backoffQ. These are pods that cannot be scheduled temporarily for some reason.
    
-   **active**: The number of pods in the activeQ. These are pods that are ready and waiting to be scheduled.
    

scheduler\_pod\_scheduling\_attempts\_bucket

Histogram

The number of attempts the scheduler makes to successfully schedule a pod. The bucket thresholds are `{1, 2, 4, 8, 16}`.

memory\_utilization\_byte

Gauge

Memory usage in bytes.

cpu\_utilization\_core

Gauge

CPU usage in cores.

rest\_client\_requests\_total

Counter

The number of HTTP requests, analyzed by status code, method, and host.

rest\_client\_request\_duration\_seconds\_bucket

Histogram

HTTP request latency, analyzed by verb and URL.

**Note**

The following resource utilization metrics are deprecated. Promptly remove any alerts and monitoring that depend on these metrics.

-   cpu\_utilization\_ratio: CPU utilization.
    
-   memory\_utilization\_ratio: Memory usage.
    

## Dashboard guide

The dashboard is built from component metrics and related Prometheus Query Language (PromQL) queries. The following sections describe the dashboard's observability features.

### **Overview**

#### **Observability display**

#### ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/3338181271/p794564.png)

#### **Feature details**

**Metric**

**PromQL**

**Description**

**Scheduler Pending Pods**

scheduler\_pending\_pods{job="ack-scheduler"}

The number of pending pods. The queue types are as follows:

-   **unschedulable**: The number of unschedulable pods.
    
-   **backoff**: The number of pods in the backoffQ. These are pods that cannot be scheduled temporarily for some reason.
    
-   **active**: The number of pods in the activeQ. These are pods that are ready and waiting to be scheduled.
    

**Scheduler Pod Scheduling Attempts**

histogram\_quantile($quantile, sum(rate(scheduler\_pod\_scheduling\_attempts\_bucket{job="ack-scheduler"}\[$interval\])) by (pod, le))

The number of attempts the scheduler makes to schedule a pod. The bucket thresholds are `{1, 2, 4, 8, 16}`.

**Scheduler Cache Statistics**

-   scheduler\_scheduler\_cache\_size{job="ack-scheduler",type="nodes"}
    
-   scheduler\_scheduler\_cache\_size{job="ack-scheduler",type="pods"}
    
-   scheduler\_scheduler\_cache\_size{job="ack-scheduler",type="assumed\_pods"}
    

The number of nodes, pods, and AssumedPods in the scheduler cache.

### **Resource**

#### **Observability display**![schedule2](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/3338181271/p474574.png)

#### **Feature details**

**Metric**

**PromQL**

**Description**

**Memory Usage**

memory\_utilization\_byte{container="kube-scheduler"}

Memory usage in bytes.

**CPU Usage**

cpu\_utilization\_core{container="kube-scheduler"}\*1000

CPU usage in millicores.

### **Kube API**

#### **Observability display**![schedule3](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/1986829071/p474576.png)

#### **Feature details**

**Metric**

**PromQL**

**Description**

**Kube API Request QPS**

-   sum(rate(rest\_client\_requests\_total{job="ack-scheduler",code=~"2.."}\[$interval\])) by (method,code)
    
-   sum(rate(rest\_client\_requests\_total{job="ack-scheduler",code=~"3.."}\[$interval\])) by (method,code)
    
-   sum(rate(rest\_client\_requests\_total{job="ack-scheduler",code=~"4.."}\[$interval\])) by (method,code)
    
-   sum(rate(rest\_client\_requests\_total{job="ack-scheduler",code=~"5.."}\[$interval\])) by (method,code)
    

HTTP requests initiated by kube-scheduler to the kube-apiserver component, analyzed by method and return value (code).

**Kube API Request Latency**

histogram\_quantile($quantile, sum(rate(rest\_client\_request\_duration\_seconds\_bucket{job="ack-scheduler"}\[$interval\])) by (verb,url,le))

Latency of HTTP requests initiated by kube-scheduler to the kube-apiserver component, analyzed by verb and request URL.

## Common metric anomalies

If a component's metrics are abnormal, refer to the following descriptions to determine whether the behavior is expected.

### **Number Of Active Scheduler Pods**

**Normal condition**

**Abnormal condition**

**Description**

**Recommendation**

The number of active scheduler pods is 1 or more.

The number of active scheduler pods is 0.

No active scheduler is available in the cluster.

-   Check if the related deployment or StatefulSet for the scheduler exists.
    
-   Determine if the scheduler pod went offline due to an expected manual operation.
    

### **Number Of Pending Pods**

**Normal condition**

**Abnormal condition**

**Description**

**Recommendation**

The pod scheduling speed is stable and remains at a low value.

-   The number of pods in the unschedulable queue continuously increases.
    
-   The number of pods in the unschedulable queue does not decrease even after other pods are scheduled.
    

The resource requests for pods in the cluster are unreasonable, or the node resource configuration is insufficient.

-   Check if the node resources meet the pod's requirements.
    
-   Check if the pod has node affinity properties that cannot be satisfied.
    

### **Number Of Attempts To Successfully Schedule A Pod**

**Normal condition**

**Abnormal condition**

**Description**

**Recommendation**

A pod can be scheduled to a node after a few attempts.

A pod cannot be scheduled even after multiple attempts.

The resource requests for pods in the cluster are unreasonable, or the node resource configuration is insufficient.

-   Check if the node resources meet the pod's requirements.
    
-   Check if the pod has node affinity properties that cannot be satisfied.
    

## **References**

For more information about the metrics, dashboard guides, and common metric anomalies for other control plane components, see [Metrics for the kube-apiserver component](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/monitor-kube-apiserver), [Metrics for the etcd component](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/monitor-etcd), [Metrics for the kube-controller-manager component](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/monitor-kube-controller-manager), and [Metrics for the cloud-controller-manager component](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/monitor-cloud-controller-manager).
