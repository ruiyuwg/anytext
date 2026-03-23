kube-controller-manager is a control plane component that is used to manage a variety of Kubernetes controllers, such as the node controller that manages nodes, the StatefulSet controller that manages StatefulSets, and the Deployment controller that processes Deployments. This topic describes the metrics of kube-controller-manager. This topic also describes how to use the dashboards of kube-controller-manager.

## **Terms**

#### **workqueue**

**Workqueue description**

In most cases, the controllers managed by kube-controller-manager use workqueues to concurrently update resource objects in a secure manner. The controllers include the node controller, StatefulSet controller, and Deployment controller. Whenever a new event occurs, such as the creation, update, or deletion of a pod, the corresponding controller receives an event notification and adds the associated resource identifiers, such as the pod name and namespace in which the pod is deployed, to a workqueue. The controller continuously extracts the resource identifiers from the workqueue during its work cycle and processes the resources based on the related logic.

## Usage notes

### **Dashboard access**

For more information, see [View control plane component dashboards in ACK Pro clusters](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/view-control-plane-component-dashboards-in-ack-pro-clusters).

### **Metrics**

Metrics can indicate the status and parameter settings of a component. The following table describes the metrics supported by kube-controller-manager.

**Metric**

**Type**

**Description**

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

The following resource utilization metrics are deprecated. Remove any alerts and monitoring data that depend on these metrics at the earliest opportunity:

-   cpu\_utilization\_ratio: CPU utilization.
    
-   memory\_utilization\_ratio: Memory utilization.
    

## Usage notes for dashboards

You can modify the **quantile** and **interval** parameters for the dashboards. The quantile parameter indicates the request quantile, and the interval parameter indicates the Prometheus Query Language (PromQL) sampling interval. Dashboards are generated based on metrics and PromQL. The following sections describe the observability and features of the dashboards of kube-controller-manager.

### **Workqueue**

#### **Observability**![kcm1](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/7207829071/p474611.png)

#### **Features**

**Dashboard**

**PromQL**

**Description**

**Workqueue entry rate**

sum(rate(workqueue\_adds\_total{job="ack-kube-controller-manager"}\[$interval\])) by (name)

The number of Adds events that are added to the workflow in the specified interval.

**Workqueue depth**

sum(rate(workqueue\_depth{job="ack-kube-controller-manager"}\[$interval\])) by (name)

The change of the workqueue length in the specified interval.

**Workqueue processing delay**

histogram\_quantile($quantile, sum(rate(workqueue\_queue\_duration\_seconds\_bucket{job="ack-kube-controller-manager"}\[5m\])) by (name, le))

The duration of the events in the workqueue.

### **Resources**

#### **Observability**![kcm2](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/0778181271/p474627.png)

#### **Features**

**Dashboard**

**PromQL**

**Description**

**Memory Usage**

memory\_utilization\_byte{container="kube-controller-manager"}

The memory usage. Unit: bytes.

**CPU Usage**

cpu\_utilization\_core{container="kube-controller-manager"}\*1000

The used CPU capacity. Unit: millicore.

### **Kube API**

#### **Observability**![kcm3](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/2579133661/p474628.png)

#### **Features**

**Dashboard**

**PromQL**

**Description**

**Kube API request QPS**

-   sum(rate(rest\_client\_requests\_total{job="ack-kube-controller-manager",code=~"2.."}\[$interval\])) by (method,code)
    
-   sum(rate(rest\_client\_requests\_total{job="ack-cloud-controller-manager",code=~"3.."}\[$interval\])) by (method,code)
    
-   sum(rate(rest\_client\_requests\_total{job="ack-cloud-controller-manager",code=~"4.."}\[$interval\])) by (method,code)
    
-   sum(rate(rest\_client\_requests\_total{job="ack-cloud-controller-manager",code=~"5.."}\[$interval\])) by (method,code)
    

The number of HTTP requests sent by kube-controller-manager to kube-apiserver per second. The queries per second (QPS) value is calculated based on methods and status codes.

**Kube API request delay**

histogram\_quantile($quantile, sum(rate(rest\_client\_request\_duration\_seconds\_bucket{job="ack-kube-controller-manager"}\[$interval\])) by (verb,url,le))

The interval of time between a request sent by kube-controller-manager and a response returned by kube-apiserver. The delay is calculated based on Verbs and URLs.

## **References**

For more information about the metrics, usage notes for using the dashboards, and suggestions on how to troubleshoot common metric anomalies for other control plane components, see the following topics: [Metrics of kube-apiserver](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/monitor-kube-apiserver), [Metrics of etcd](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/monitor-etcd), [Metrics of kube-scheduler](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/monitor-kube-scheduler), and [Metrics of cloud-controller-manager](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/monitor-cloud-controller-manager).
