The kube-apiserver component provides RESTful APIs of Kubernetes to allow external clients and other components in a Container Service for Kubernetes (ACK) cluster to interact with the ACK cluster. This topic describes the monitoring metrics of the kube-apiserver component. This topic also describes how to use monitoring dashboards and how to handle metric anomalies.

## Usage notes

### **Access method**

For more information, see [View cluster control plane component monitoring dashboards](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/view-control-plane-component-dashboards-in-ack-pro-clusters).

### **Metrics**

Metrics can indicate the status and parameter settings of a component. The following table describes the metrics supported by kube-apiserver.

**Metric**

**Type**

**Description**

apiserver\_request\_duration\_seconds\_bucket

Histogram

The latency between a request sent to the API server and a response returned by the API server.

Requests are classified based on the following dimensions:

-   Verb: the type of the request, such as GET, POST, PUT, and DELETE.
    
-   Group: the API group, which contains related API operations used to extend the Kubernetes API.
    
-   Version: the API version, such as v1 and v1beta1.
    
-   Resource: the type of the resource that the request is sent to access, such as pod, Service, and lease.
    
-   Subresource: the subresources of the resource, such as pod details and pod logs.
    
-   Scope: the scope of the request, such as resources in a namespace or resources in a cluster.
    
-   Component: the name of the component that initiates the request, such as kube-controller-manager, kube-scheduler, or cloud-controller-manager.
    
-   Client: the client that sends the request, which may be an internal component or an external service.
    

The buckets in the histogram of the API server include `0.05, 0.1, 0.15, 0.2, 0.25, 0.3, 0.35, 0.4, 0.45, 0.5, 0.6, 0.7, 0.8, 0.9, 1.0, 1.25, 1.5, 1.75, 2.0, 2.5, 3.0, 3.5, 4.0, 4.5, 5, 6, 7, 8, 9, 10, 15, 20, 25, 30, 40, 50, and 60`. Unit: seconds.

apiserver\_request\_total

Counter

The number of different requests received by the API server. Requests are classified based on verbs, groups, versions, resource, scope, component, HTTP content types, HTTP status code, and clients.

apiserver\_request\_no\_resourceversion\_list\_total

Counter

The number of LIST requests that are sent to the API server and for which the `resourceVersion` parameter is not specified. This metric is used to check whether an excessive number of LIST requests of the quorum read type are sent to the API server and locate the client that sends such requests. This can help optimize client behavior and improve cluster performance. Requests are classified based on groups, versions, resources, scopes, and clients.

apiserver\_current\_inflight\_requests

Gauge

The number of requests that are being processed by the API server. Requests are classified into the following types:

-   ReadOnly: This type of requests does not change the status of clusters. In most cases, this type of requests is sent to read resources in clusters, such as querying pods and querying node status.
    
-   Mutating: This type of requests changes the status of clusters. In most cases, this type of requests is sent to create, update, or delete resources, such as creating a pod or updating the configurations of a Service.
    

apiserver\_dropped\_requests\_total

Counter

The number of requests that are dropped when throttling is performed on the API server. A request is dropped if the `429 'Try again later'` HTTP status code is returned.

etcd\_request\_duration\_seconds\_bucket

Histogram

The latency between a request sent from the API server and a response returned by etcd.

Requests are classified based on operations and operation types.

The buckets in the histogram include `0.005, 0.025, 0.05, 0.1, 0.2, 0.4, 0.6, 0.8, 1.0, 1.25, 1.5, 2, 3, 4, 5, 6, 8, 10, 15, 20, 30, 45, and 60`. Unit: seconds.

apiserver\_flowcontrol\_request\_concurrency\_limit

Gauge

The request concurrency limit of the API Priority and Fairness (APF) feature. The maximum concurrency limit for a priority queue, which is the theoretical maximum number of requests that the queue allows to be processed at the same time. This helps you understand how the API server allocates resources to different priority queues by using throttling policies. This ensures that high-priority requests can be processed in a timely manner.

> This metric is deprecated in Kubernetes 1.30 and will be removed from Kubernetes 1.31. For clusters that run Kubernetes 1.31 and later, we recommend that you use the apiserver\_flowcontrol\_nominal\_limit\_seats metric instead.

apiserver\_flowcontrol\_current\_executing\_requests

Gauge

The number of requests currently being executed in a priority queue, which is the actual concurrent load of the queue. This helps you understand the actual load of the API server and determine if it is approaching the maximum concurrency limit of the system to prevent overload.

apiserver\_flowcontrol\_current\_inqueue\_requests

Gauge

The number of requests currently waiting in a priority queue, which indicates the request backlog in that queue. This helps you understand the traffic pressure on the API server and whether the queue is overloaded.

apiserver\_flowcontrol\_nominal\_limit\_seats

Gauge

APF nominal concurrency limit seats, which is the nominal maximum concurrent processing capacity of the API server. Unit: Seats. This helps you understand how the API server allocates resources to different priority queues by using throttling policies.

apiserver\_flowcontrol\_current\_limit\_seats

Gauge

APF current concurrency limit seats. The current concurrency limit of a priority queue, which is the actual maximum number of concurrent seats allowed after dynamic adjustment. This reflects the actual concurrent capacity of the current queue, which may vary due to system load or other factors.

Unlike nominal\_limit\_seats, this value may be affected by global throttling policies.

apiserver\_flowcontrol\_current\_executing\_seats

Gauge

APF current executing seats. The number of seats corresponding to the requests currently being executed in a priority queue, which reflects the concurrent resources being consumed in the current queue. This helps you understand the actual load situation of the queue.

If current\_executing\_seats is close to current\_limit\_seats, it indicates that the concurrent resources of the queue may be about to be exhausted.

> You can optimize the configuration by increasing the maxMutatingRequestsInflight and maxRequestsInflight parameter values of the API server. For more information about access methods and parameter values, see [Customize the parameters of control plane components in ACK Pro clusters](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/customize-ack-pro-control-plane-component-parameters-1693464061811#section-pkr-afx-2z7).

apiserver\_flowcontrol\_current\_inqueue\_seats

Gauge

APF current queue seats. The number of seats corresponding to the requests currently waiting to be processed in a priority queue, which reflects the resources occupied by the requests waiting to be processed in the current queue. This helps you understand the backlog situation of the queue.

apiserver\_flowcontrol\_request\_execution\_seconds\_bucket

Histogram

The actual execution time of requests. This metric records the time taken for the request from the start of execution to final completion.

Time interval distribution is 0, 0.005, 0.02, 0.05, 0.1, 0.2, 0.5, 1, 2, 5, 10, 15, and 30. Unit: seconds.

apiserver\_flowcontrol\_request\_wait\_duration\_seconds\_bucket

Histogram

The distribution of time requests wait in the queue. This metric records the waiting time from when a request enters the queue to when it starts execution.

Time interval distribution is 0, 0.005, 0.02, 0.05, 0.1, 0.2, 0.5, 1, 2, 5, 10, 15, and 30. Unit: seconds.

apiserver\_flowcontrol\_dispatched\_requests\_total

Counter

The number of requests successfully scheduled and processed, which reflects the total number of requests successfully handled by the API server.

apiserver\_flowcontrol\_rejected\_requests\_total

Counter

The number of requests rejected due to exceeding concurrency limits or queue capacity.

apiserver\_admission\_controller\_admission\_duration\_seconds\_bucket

Histogram

The processing latency of the admission controller. The histogram is identified by the admission controller name, operation such as CREATE, UPDATE, or CONNECT, API resource, operation type such as validate or admit, and whether the request is denied.

The buckets of the histogram include `0.005, 0.025, 0.1, 0.5, and 2.5`. Unit: seconds.

apiserver\_admission\_webhook\_admission\_duration\_seconds\_bucket

Histogram

The processing latency of the admission webhook. The histogram is identified by the admission controller name, operation such as CREATE, UPDATE, or CONNECT, API resource, operation type such as validate or admit, and whether the request is denied.

The buckets of the histogram include `0.005, 0.025, 0.1, 0.5, and 2.5`. Unit: seconds.

apiserver\_admission\_webhook\_admission\_duration\_seconds\_count

Counter

The number of requests processed by the admission webhook. The histogram is identified by the admission controller name, operation such as CREATE, UPDATE, or CONNECT, API resource, operation type such as validate or admit, and whether the request is denied.

cpu\_utilization\_core

Gauge

The number of used CPU cores. Unit: cores.

memory\_utilization\_byte

Gauge

The amount of used memory. Unit: bytes.

up

Gauge

Indicates whether kube-apiserver is available.

-   1: kube-apiserver is available.
    
-   0: kube-apiserver is unavailable.
    

**Note**

The following resource utilization metrics are deprecated. Remove any alerts and monitoring data that depend on these metrics at the earliest opportunity:

-   cpu\_utilization\_ratio: CPU utilization.
    
-   memory\_utilization\_ratio: Memory utilization.
    

### **Usage notes for dashboards**

Dashboards are generated based on metrics and Prometheus Query Language (PromQL). The following sections describe the API server dashboards for key metrics, cluster-level overview, resource analysis, queries per second (QPS) and latency, admission controller and webhook, and client analysis.

The dashboard consists of the following modules. In most cases, these dashboards are used in the following sequence:

1.  [Key metrics](#4): Quickly view key cluster metrics.
    
2.  [Overview](#5): Analyze the response latency of the API server, the number of requests that are being processed, and whether request throttling is triggered.
    
3.  [Resource analysis](#6): View the resource usage of the managed components.
    
4.  [QPS and latency](#2): Analyze the QPS and response time based on multiple dimensions.
    
5.  [APF throttling](#d1874269bezll): Confirm the API server request traffic distribution, throttling status, and system performance bottlenecks based on [APF](https://kubernetes.io/docs/concepts/cluster-administration/flow-control/) metrics.
    
6.  [Admission controller and webhook](#7): Analyze the QPS and response time of the admission controller and webhook.
    
7.  [Client analysis](#3): Analyze the client QPS based on multiple dimensions.
    

## Filters

Multiple filters are displayed above the dashboards. You can use the following filters to filter requests sent to the API server based on verbs and resources, modify the quantile, and change the PromQL sampling interval.

**Note**

To change the quantile, use the quantile filter. For example, if you select 0.9, 90% of the sample values of a metric are used as sample values in the histogram. A value of 0.9 (P90) can help eliminate the impacts of long-tail samples, which are only a small portion of the total sample values. A value of 0.99 (P99) includes long-tail samples.

![筛选框](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/7156210171/p470546.png)

The following filters are used to specify the time range and update interval.![筛选框2](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/6156210171/p470548.png)

## Key metrics

#### **Observability**![100](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/6156210171/p474257.jpg)

#### **Feature**

**Name**

**PromQL**

**Description**

**API QPS**

sum(irate(apiserver\_request\_total\[$interval\]))

The QPS of the API server.

**Read Request Success Rate**

sum(irate(apiserver\_request\_total{code=~"20.\*",verb=~"GET|LIST"}\[$interval\]))/sum(irate(apiserver\_request\_total{verb=~"GET|LIST"}\[$interval\]))

The success rate of read requests sent to the API server.

**Write Request Success Rate**

sum(irate(apiserver\_request\_total{code=~"20.\*",verb!~"GET|LIST|WATCH|CONNECT"}\[$interval\]))/sum(irate(apiserver\_request\_total{verb!~"GET|LIST|WATCH|CONNECT"}\[$interval\]))

The success rate of write requests sent to the API server.

**Number of read requests processed**

sum(apiserver\_current\_inflight\_requests{requestKind="readOnly"})

The number of read requests that are being processed by the API server.

**Number of write requests processed**

sum(apiserver\_current\_inflight\_requests{requestKind="mutating"})

The number of write requests that are being processed by the API server.

**Request Limit Rate**

sum(irate(apiserver\_dropped\_requests\_total\[$interval\]))

The ratio of the number of dropped requests to the total number of requests sent to the API server when the request throttling is performed on the API server.

## Overview

#### **Observability**![50](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/7156210171/p474261.jpg)

#### **Feature**

**Metric**

**PromQL**

**Description**

**GET read request delay P\[0.9\]**

histogram\_quantile($quantile, sum(irate(apiserver\_request\_duration\_seconds\_bucket{verb="GET",resource!="",subresource!~"log|proxy"}\[$interval\])) by (pod, verb, resource, subresource, scope, le))

The response time of GET requests displayed based on the following dimensions: API server pods, GET verb, resources, and scope.

**LIST read request delay P\[0.9\]**

histogram\_quantile($quantile, sum(irate(apiserver\_request\_duration\_seconds\_bucket{verb="LIST"}\[$interval\])) by (pod\_name, verb, resource, scope, le))

The response time of LIST requests displayed based on the following dimensions: API server pods, LIST verb, resources, and scope.

**Write request delay P\[0.9\]**

histogram\_quantile($quantile, sum(irate(apiserver\_request\_duration\_seconds\_bucket{verb!~"GET|WATCH|LIST|CONNECT"}\[$interval\])) by (cluster, pod\_name, verb, resource, scope, le))

The response time of Mutating requests displayed based on the following dimensions: API server pods, verbs such as GET, WATCH, LIST, and CONNECT, resources, and scope.

**Number of read requests processed**

apiserver\_current\_inflight\_requests{request\_kind="readOnly"}

The number of read requests that are being processed by the API server.

**Number of write requests processed**

apiserver\_current\_inflight\_requests{request\_kind="mutating"}

The number of write requests that are being processed by the API server.

**Request Limit Rate**

sum(irate(apiserver\_dropped\_requests\_total{request\_kind="readOnly"}\[$interval\])) by (name)

sum(irate(apiserver\_dropped\_requests\_total{request\_kind="mutating"}\[$interval\])) by (name)

The throttling rate of the API server. `No data` or `0` indicates that request throttling is not triggered.

## Resource analysis

#### **Observability**![资源对象](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/2077181271/p538886.png)

#### **Feature**

**Metric**

**PromQL**

**Description**

**Memory Usage**

memory\_utilization\_byte{container="kube-apiserver"}

The memory usage of API server. Unit: bytes.

**CPU Usage**

cpu\_utilization\_core{container="kube-apiserver"}\*1000

The CPU usage of API server. Unit: millicores.

**Number of resource objects**

-   max by(resource)(apiserver\_storage\_objects)
    
-   max by(resource)(etcd\_object\_counts)
    

-   The metric name is apiserver\_storage\_objects if your ACK cluster runs Kubernetes 1.22 or later.
    
-   The metric name is etcd\_object\_counts if your ACK cluster runs Kubernetes 1.22 or earlier.
    

**Note**

Due to compatibility issues, both the apiserver\_storage\_objects and etcd\_object\_counts metrics exist in Kubernetes 1.22.

## QPS and latency

#### **Observability**![48](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/6156210171/p474266.jpg)

#### **Feature**

**Metric**

**PromQL**

**Description**

**Analyze QPS \[All\] P\[0.9\] by Verb dimension**

sum(irate(apiserver\_request\_total{verb=~"$verb"}\[$interval\]))by(verb)

The QPS calculated based on verbs.

**Analyze QPS \[All\] P\[0.9\] by Verb Resource dimension**

sum(irate(apiserver\_request\_total{verb=~"$verb",resource=~"$resource"}\[$interval\]))by(verb,resource)

The QPS calculated based on verbs and resources.

**Analyze request latency by Verb dimension \[All\] P\[0.9\]**

histogram\_quantile($quantile, sum(irate(apiserver\_request\_duration\_seconds\_bucket{verb=~"$verb", verb!~"WATCH|CONNECT",resource!=""}\[$interval\])) by (le,verb))

The response latency calculated based on verbs.

**Analyze request latency by Verb Resource dimension \[All\] P\[0.9\]**

histogram\_quantile($quantile, sum(irate(apiserver\_request\_duration\_seconds\_bucket{verb=~"$verb", verb!~"WATCH|CONNECT", resource=~"$resource",resource!=""}\[$interval\])) by (le,verb,resource))

The response latency calculated based on verbs and resources.

**Read request QPS \[5m\] for non-2xx return values**

sum(irate(apiserver\_request\_total{verb=~"GET|LIST",resource=~"$resource",code!~"2.\*"}\[$interval\])) by (verb,resource,code)

The QPS of read requests for which HTTP status codes other than 2xx, such as 4xx or 5xx, are returned.

**QPS \[5m\] for write requests with non-2xx return values**

sum(irate(apiserver\_request\_total{verb!~"GET|LIST|WATCH",verb=~"$verb",resource=~"$resource",code!~"2.\*"}\[$interval\])) by (verb,resource,code)

The QPS of write requests for which HTTP status codes other than 2xx, such as 4xx or 5xx, are returned.

**Apiserver to etcd request latency \[5m\]**

histogram\_quantile($quantile, sum(irate(etcd\_request\_duration\_seconds\_bucket\[$interval\])) by (le,operation,type,instance))

The latency of requests sent from API server to etcd.

## **APF throttling**

**Note**

APF throttling related metrics monitoring is in canary release.

-   Clusters that run Kubernetes 1.20 and later support APF-related metrics. For more information about how to upgrade clusters, see [Manually upgrade a cluster](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/update-the-kubernetes-version-of-an-ack-cluster).
    
-   APF-related metrics dashboards also depend on the upgrade of the following components. For more information, see [Upgrade monitoring components](/help/en/prometheus/user-guide/update-monitoring-components).
    
    -   Cluster monitoring component: 0.06 or later.
        
    -   [ack-arms-prometheus](/help/en/arms/prometheus-monitoring/prometheus-monitoring-change-records-2): 1.1.31 or later.
        
    -   Managed probe: 1.1.31 or later.
        

#### **Observability**

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/9323913471/p929306.png)

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/9323913471/p929305.png)

#### **Feature**

Some metrics in the following table are statistics by PL, Instance, and FS dimensions.

-   PL: Priority Level dimension, which is statistics based on different priority levels.
    
-   Instance: Statistics based on the API server instance dimension.
    
-   FS: Flow Schema dimension, which is statistics based on request classification.
    

> For more information about APF and the above dimensions, see [APF](https://kubernetes.io/docs/concepts/cluster-administration/flow-control/).

**Metric**

**PromQL**

**Description**

**APF Request Concurrent Limit (Dimension: PL)**

sum by(priority\_level) (apiserver\_flowcontrol\_request\_concurrency\_limit)

The APF request concurrency limit calculated based on PL or instance and PL, which is the maximum number of requests that a priority queue theoretically allows to be processed at the same time.

> apiserver\_flowcontrol\_request\_concurrency\_limit is deprecated in Kubernetes 1.30 and will be removed from version 1.31**.** For clusters that run Kubernetes 1.31 and later, we recommend that you use the apiserver\_flowcontrol\_nominal\_limit\_seats metric instead.

**APF Request Concurrent Limit** **(Dimension: Instance PL)**

sum by(instance,priority\_level) (apiserver\_flowcontrol\_request\_concurrency\_limit)

**Number of APF currently executing request (Dimension: FS PL)**

sum by(flow\_schema,priority\_level) (apiserver\_flowcontrol\_current\_executing\_requests)

The APF currently executing request calculated based on FS and PL, or instance, FS, and PL.

**Number of APF currently executing request (Dimension: Instance FS PL)**

sum by(instance,flow\_schema,priority\_level)(apiserver\_flowcontrol\_current\_executing\_requests)

**APF Number of pending requests currently in queue (Dimension: FS PL)**

sum by(flow\_schema,priority\_level) (apiserver\_flowcontrol\_current\_inqueue\_requests)

The number of pending requests currently in queue calculated based on FS and PL, or instance, FS, and PL.

**Number of pending requests in APF's current queue (Dimension: Instance FS PL)**

sum by(instance,flow\_schema,priority\_level) (apiserver\_flowcontrol\_current\_inqueue\_requests)

**APF Nominal Concurrency Limited Seats**

sum by(instance,priority\_level) (apiserver\_flowcontrol\_nominal\_limit\_seats)

The APF seat count-related metrics calculated based on instance and PL. The following metrics are Included:

-   Nominal concurrency limited seats: The nominal maximum concurrent seat limit for different priority queues.
    
-   Current concurrency limit seats: The actual maximum concurrent seat count allowed after dynamic adjustment in different priority queues.
    
-   Seats in execution: The seat count corresponding to the number of requests currently being executed in different priority queues.
    
-   Seats in queue: The seat count corresponding to the number of requests in queue in different priority queues.
    

**APF Current Concurrency Limit Seats**

sum by(instance,priority\_level) (apiserver\_flowcontrol\_current\_limit\_seats)

**Number of current APF seats in execution**

sum by(instance,priority\_level) (apiserver\_flowcontrol\_current\_executing\_seats)

**Number of seats in APF's current queue**

sum by(instance,priority\_level) (apiserver\_flowcontrol\_current\_inqueue\_seats)

**APF Request Execution Time**

histogram\_quantile($quantile, sum(irate(apiserver\_flowcontrol\_request\_execution\_seconds\_bucket\[$interval\])) by (le,instance, flow\_schema,priority\_level))

The time taken from when a request starts execution to when it is finally completed.

**APF Request Wait Time**

histogram\_quantile($quantile, sum(irate(apiserver\_flowcontrol\_request\_wait\_seconds\_bucket\[$interval\])) by (le,instance, flow\_schema,priority\_level))

The waiting time from when a request enters the queue to when it starts execution.

**Request QPS sucessfully scheduled and processed by APF**

sum(irate(apiserver\_flowcontrol\_dispatched\_requests\_total\[$interval\]))by(instance,flow\_schema,priority\_level)

QPS of successfully scheduled and processed requests.

**APD Deny Request QPS**

sum(irate(apiserver\_flowcontrol\_rejected\_requests\_total\[$interval\]))by(instance,flow\_schema,priority\_level)

QPS of requests rejected due to exceeding concurrency limits or queue capacity.

## Admission controller and webhook

#### **Observability**![47](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/7156210171/p474271.jpg)

#### **Feature**

**Metric**

**PromQL**

**Description**

**Admission controller delay \[admit\]**

histogram\_quantile($quantile, sum by(operation, name, le, type, rejected) (irate(apiserver\_admission\_controller\_admission\_duration\_seconds\_bucket{type="admit"}\[$interval\])) )

The statistics about the name of the admission controller of the admit type, the performed operations, whether the operations are denied, and the duration of the operations.

The buckets of the histogram include `0.005, 0.025, 0.1, 0.5, and 2.5`. Unit: seconds.

**Admission Controller Delay \[validate\]**

histogram\_quantile($quantile, sum by(operation, name, le, type, rejected) (irate(apiserver\_admission\_controller\_admission\_duration\_seconds\_bucket{type="validate"}\[$interval\])) )

The statistics about the name of the admission controller of the validate type, the performed operations, whether the operations are denied, and the duration of the operations.

The buckets of the histogram include `0.005, 0.025, 0.1, 0.5, and 2.5`. Unit: seconds.

**Admission Webhook delay \[admit\]**

histogram\_quantile($quantile, sum by(operation, name, le, type, rejected) (irate(apiserver\_admission\_webhook\_admission\_duration\_seconds\_bucket{type="admit"}\[$interval\])) )

The statistics about the name of the admission webhook of the admit type, the performed operations, whether the operations are denied, and the duration of the operations.

The buckets of the histogram include `0.005, 0.025, 0.1, 0.5, and 2.5`. Unit: seconds.

**Admission Webhook Delay \[validating\]**

histogram\_quantile($quantile, sum by(operation, name, le, type, rejected) (irate(apiserver\_admission\_webhook\_admission\_duration\_seconds\_bucket{type="validating"}\[$interval\])) )

The statistics about the name of the admission webhook of the validating type, the performed operations, whether the operations are denied, and the duration of the operations.

The buckets of the histogram include `0.005, 0.025, 0.1, 0.5, and 2.5`. Unit: seconds.

**Admission Webhook Request QPS**

sum(irate(apiserver\_admission\_webhook\_admission\_duration\_seconds\_count\[$interval\]))by(name,operation,type,rejected)

The QPS of the admission webhook.

## Client analysis

#### **Observability**![45](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/4573815671/p474272.jpg)

#### **Feature**

**Metric**

**PromQL**

**Description**

**Analyze QPS by Client dimension**

sum(irate(apiserver\_request\_total{client!=""}\[$interval\])) by (client)

The QPS statistics based on clients. This can help you analyze the clients that access the API server and the QPS.

**Analyze QPS by Verb Resource Client dimension \[All\]**

sum(irate(apiserver\_request\_total{client!="",verb=~"$verb", resource=~"$resource"}\[$interval\]))by(verb,resource,client)

The QPS statistics based on verbs, resources, and clients.

**Analyze LIST request QPS by Verb Resource Client dimension (no resourceVersion field)**

sum(irate(apiserver\_request\_no\_resourceversion\_list\_total\[$interval\]))by(resource,client)

-   The QPS of LIST requests based on verbs, resources, and clients. The `resourceVersion` parameter is not specified in such requests.
    
-   You can analyze and optimize the LIST operations performed by clients based on the LIST requests sent to the API server and the LIST requests that retrieve data from etcd.
    

## Common metric anomalies

If the metrics of kube-apiserver become abnormal, check whether the metric anomalies described in the following sections exist.

### Success rate of read/write requests

#### **Case description**

**Normal**

**Abnormal**

**Description**

The values of **Read Request Success Rate** and **Write Request Success Rate** are close to 100%.

The values of **Read Request Success Rate** and **Write Request Success Rate** are small. For example, the values are smaller than 90%.

A large number of requests for which HTTP status codes other than 200 are returned exist.

#### **Recommended solution**

Check **Read request QPS \[5m\] for non-2xx return values** and **QPS \[5m\] for write requests with non-2xx return values** for request types and resources that cause kube-apiserver to return HTTP status codes other than 2xx. Evaluate whether such requests meet your expectations and optimize the requests based on the evaluation results. For example, if **GET/deployment 404** exists, GET Deployment requests for which the HTTP status code 404 is returned exist. This decreases the value of **Read Request Success Rate**.

### Latency of GET/LIST requests and latency of write requests

#### Case description

**Normal**

**Abnormal**

**Description**

The values of **GET read request delay P\[0.9\]**, **LIST read request delay P\[0.9\]**, and **Write request delay P\[0.9\]** vary based on the amount of resources to be accessed in the cluster and the cluster size. Therefore, no specific threshold can be used to identify anomalies. All cases are acceptable if your workloads are not adversely affected. For example, if the number of requests that are sent to access a specific type of resource increases, the latency of LIST requests increases. In most cases, the values of **GET read request delay P\[0.9\]** and **Write request latency delay P\[0.9\]** are smaller than 1 second, and the value of **LIST read request delay P\[0.9\]** is greater than 5 seconds.

-   The values of **GET read request delay P\[0.9\]** and **Write request latency delay P\[0.9\]** are greater than 1 second.
    
-   The value of **LIST read request delay P\[0.9\]** is greater than 5 seconds.
    

Check whether the response latency increases due to the admission webhook that cannot promptly respond or the increase in requests sent from clients that access the resources.

#### **Recommended solution**

-   Check **GET read request delay P\[0.9\]**, **LIST read request delay P\[0.9\]**, and **Write request latency delay P\[0.9\]** for request types and resources that cause the API server to return HTTP status codes other than 2xx. Evaluate whether such requests meet your expectations and optimize the requests based on the evaluation results.
    
    The upper limit of the `apiserver_request_duration_seconds_bucket` metric is 60 seconds. Response latencies that are longer than 60 seconds are rounded down to 60 seconds. Pod access requests `POST pod/exec` and log retrieval requests create persistent connections. The response latency of these requests is longer than 60 seconds. Therefore, you can ignore these requests when you analyze requests.
    

-   Analyze whether the response latency of the API server increases due to the admission webhook that cannot promptly respond. For more information, see the [Admission webhook latency](#1) section of this topic.
    

### Number of read or write requests that are being processed and dropped requests

#### Case description

**Normal**

**Abnormal**

**Description**

In most cases, if the values of **Number of read requests processed** and **Number of write requests processed** are smaller than 100, and the value of **Request Limit Rate** is 0, no anomaly occurs.

-   The values of **Number of read requests processed** and **Number of write requests processed** are greater than 100.
    
-   The value of **Request Limit Rate** is greater than 0.
    

The request queue is full. Check whether the issue is caused by temporary request spikes or the admission webhook that cannot promptly respond. If the number of pending requests exceeds the length of the queue, the API server triggers request throttling and the value of **Request Limit Rate** exceeds 0. As a result, the stability of the cluster is affected.

#### Recommended solution

-   View the [QPS and latency](#2) and [client analysis](#3) dashboards. Check whether the top requests are necessary. If the requests are generated by workloads, check whether you can reduce the number of similar requests.
    
-   Analyze whether the response latency of the API server increases due to the admission webhook that cannot promptly respond. For more information, see the [Admission webhook latency](#1) section of this topic.
    

### Admission webhook latency

#### Case description

**Normal**

**Abnormal**

**Description**

The value of **Admission Webhook Delay** is smaller than 0.5 seconds.

The value of **Admission Webhook Delay** remains greater than 0.5 seconds.

If the admission webhook cannot promptly respond, the response latency of the API server increases.

#### Recommended solution

Analyze the admission webhook logs and check whether the webhooks work as expected. If you no longer need a webhook, uninstall it.

## **References**

-   For more information about the monitoring metrics and dashboards of other control plane components and how to handle metric anomalies, see the following topics:
    
    -   [Metrics of etcd](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/monitor-etcd)
        
    -   [Metrics of kube-scheduler](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/monitor-kube-scheduler)
        
    -   [Metrics of kube-controller-manager](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/monitor-kube-controller-manager)
        
    -   [Metrics of cloud-controller-manager](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/monitor-cloud-controller-manager)
        
-   For more information about how to obtain Prometheus monitoring data by using the console or calling API operations, see [Use PromQL to query Prometheus monitoring data](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/use-promql-to-query-prometheus-monitoring-data#task-2312424).
    
-   For more information about how to use a custom PromQL statement to create an alert rule in Managed Service for Prometheus, see [Create an alert rule for a Prometheus instance](/help/en/arms/prometheus-monitoring/create-alert-rules-for-prometheus-instances#task-2121615).
