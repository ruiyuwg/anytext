ACK clusters are compatible with both Alibaba Cloud Prometheus and open source Prometheus by default. If the pre-configured Prometheus metrics do not meet your business needs, you can use custom Prometheus Query Language (PromQL) to create alert rules. These rules help you monitor the health of resources such as cluster nodes, hosts, container replicas, and workloads. An alert rule can trigger an alert and send a notification when a specified data metric reaches a threshold or a condition is met.

## **Prerequisites**

Prometheus monitoring is enabled for your ACK cluster. For more information, see [Use Alibaba Cloud Prometheus Monitoring](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/use-managed-service-for-prometheus-to-monitor-an-ack-cluster#task-2461398) (recommended) or [Use open source Prometheus monitoring](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/use-open-source-prometheus-to-monitor-an-ack-cluster#task-1597149).

## Configure Prometheus alert rules using custom PromQL

ACK clusters are compatible with both Alibaba Cloud Prometheus and open source Prometheus by default. You can use custom PromQL to configure alert rules based on Prometheus monitoring data. When the conditions of an alert rule are met, the system generates a corresponding alert event and sends a notification.

### Alibaba Cloud Prometheus Monitoring

For more information about how to configure alert rules using custom PromQL in Alibaba Cloud Prometheus Monitoring, see [Create a Prometheus alert rule](/help/en/arms/prometheus-monitoring/create-alert-rules-for-prometheus-instances#task-2121615).

### Open source Prometheus monitoring

1.  Configure an alert notification policy.
    
    Open source Prometheus monitoring supports notification methods such as webhooks, DingTalk robots, and email. You can set the notification method for Prometheus alerts by configuring the `receiver` parameter in the ack-prometheus-operator application. For more information, see [Alerting configuration](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/use-open-source-prometheus-to-monitor-an-ack-cluster#section-6r6-hsk-wc0).
    
2.  Create an alert rule.
    
    Deploy the PrometheusRule Custom Resource Definition (CRD) in the cluster to define alert rules. For more information, see [Deploying Prometheus Rules](https://prometheus-operator.dev/).
    
    ```
    apiVersion: monitoring.coreos.com/v1
    kind: PrometheusRule
    metadata:
      labels:
        # The labels must be consistent with ruleSelector.matchLabels of the Prometheus CRD.
        prometheus: example
        role: alert-rules
      name: prometheus-example-rules
    spec:
      groups:
      - name: example.rules
        rules:
        - alert: ExampleAlert
          # expr specifies the PromQL query and trigger condition. For this parameter, you can refer to the PromQL configuration column in the alert rule descriptions in this topic.
          expr: 100 - (avg by(instance) (rate(node_cpu_seconds_total{mode="idle"}[2m])) * 100) > 90
    ```
    
3.  Check whether the alert rule is in effect.
    
    1.  Run the following command to map the Prometheus service in the cluster to port 9090 on your local machine.
        
        ```
        kubectl port-forward svc/ack-prometheus-operator-prometheus 9090:9090 -n monitoring
        ```
        
    2.  In your browser, enter localhost:9090 to view the Prometheus server console.
        
    3.  At the top of the open source Prometheus page, choose **Status** > **Rules**.
        
        On the **Rules** page, you can view the alert rules. If the target alert rule is displayed, the rule is in effect.
        

## Alert rule descriptions

Based on extensive operations and maintenance (O&M) experience with clusters and applications, ACK provides the following recommended Prometheus alert rule configurations. These rules cover various aspects such as cluster stability, node anomalies, node resource usage, application container replica anomalies, workload anomalies, storage exceptions, and network exceptions.

The alert rules, which cover issues such as container replica anomalies and workload anomalies, are categorized into the following severity levels.

-   Critical: The issue affects the cluster, application, or even your business. It requires immediate attention.
    
-   Warning: The issue affects the cluster, application, or even your business. It requires investigation as soon as possible.
    
-   Normal: The alert is related to an important feature change.
    

**Note**

The operation entry point mentioned in the **Rule Description** column is the **Alert Rules** tab on the **Alerts** page. To update the alert rules, log on to the [Container Service for Kubernetes (ACK) console](https://cs.console.alibabacloud.com). In the **Clusters** list, click the name of the target cluster. In the navigation pane on the left, choose **Operations** > **Alerts**. On the **Alerts** page, click the **Alert Rules** tab to update the corresponding alert rules.

### **Abnormal container replicas**

**Description**

**Severity**

**PromQL configuration**

**Rule description**

**Common troubleshooting procedure**

Abnormal pod status

Critical

min\_over\_time(sum by (namespace, pod, phase) (kube\_pod\_status\_phase{phase=~"Pending|Unknown|Failed"})\[5m:1m\]) > 0

Triggers an alert if a pod has an abnormal status within the last 5 minutes.

In the operation entry point, click **Alert Rule Set for Pod Exceptions** and configure the **Pod anomaly** alert rule. For more information, see [Manage alerts in ACK](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/alert-management#task-2056339).

For more information about how to troubleshoot abnormal pod statuses, see [Troubleshoot pod exceptions](/help/en/ack/ack-managed-and-ack-dedicated/support/pod-troubleshooting#task-2187029).

Pod startup failed

Critical

sum\_over\_time(increase(kube\_pod\_container\_status\_restarts\_total{}\[1m\])\[5m:1m\]) > 3

Triggers an alert if a pod fails to start more than 3 times within the last 5 minutes.

In the operation entry point, click **Alert Rule Set for Pod Exceptions** and configure the **Pod startup failures** alert rule. For more information, see [Manage alerts in ACK](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/alert-management#task-2056339).

For more information about how to troubleshoot pod startup failures, see [Troubleshoot pod exceptions](/help/en/ack/ack-managed-and-ack-dedicated/support/pod-troubleshooting#task-2187029).

More than 1,000 pods failed to be scheduled

Critical

sum(sum(max\_over\_time(kube\_pod\_status\_phase{ phase=~"Pending"}\[5m\])) by (pod)) > 1000

Triggers an alert if a total of 1,000 pods are in the Pending state due to scheduling failures within the last 5 minutes.

This issue may be caused by excessive task pressure in a large-scale cluster scheduling scenario. ACK managed cluster Pro Edition provides enhanced core features such as cluster scheduling and offers a Service-level agreement (SLA). We recommend that you use ACK managed cluster Pro Edition. For more information, see [Overview of ACK managed cluster Pro Edition](/help/en/ack/overview-of-ack-pro-clusters#concept-2558837).

Frequent container CPU throttling

Warning

rate(container\_cpu\_cfs\_throttled\_seconds\_total\[3m\]) \* 100 > 25

Triggers an alert if the container CPU is frequently throttled. This occurs when the throttled CPU time accounts for more than 25% of the total CPU time within the last 3 minutes.

CPU throttling reduces the CPU time slices allocated to processes in a container. This can increase the runtime of these processes and may slow down the business logic of the containerized application.

In this case, check whether the CPU resource limit for the pod is set too low. We recommend that you use the CPU Burst policy to optimize CPU throttling. For more information, see [Enable the CPU Burst policy](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/cpu-burst#task-2158239). If the cluster nodes are multi-core servers, we recommend that you use CPU topology-aware scheduling to maximize the use of fragmented CPU resources. For more information, see [Enable CPU topology-aware scheduling](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/topology-aware-cpu-scheduling#task-1935079).

CPU usage of a container replica pod is higher than 85%

Warning

(sum(irate(container\_cpu\_usage\_seconds\_total{pod=~"{{PodName}}.\*",namespace=~"{{Namespace}}.\*",container!="",container!="POD"}\[1m\])) by (namespace,pod) / sum(container\_spec\_cpu\_quota{pod=~"{{PodName}}.\*",namespace=~"{{Namespace}}.\*",container!="",container!="POD"}/100000) by (namespace,pod) \* 100 <= 100 or on() vector(0)) >= 85

Triggers an alert when the CPU usage of a container replica pod exceeds 85% of its pod limit in a specified namespace or for a specified pod.

If the pod does not have a limit configured, this alert rule does not take effect.

The default threshold of 85% is a recommended value. You can adjust it as needed.

To filter data for a specific pod or namespace, replace `pod=~"{{PodName}}.*",namespace=~"{{Namespace}}.*"` with the actual values. To query data for all pods in the cluster, delete this filter condition.

High CPU usage in a pod can lead to CPU throttling and insufficient CPU time slice allocation, which affect the execution of processes in the pod.

In this case, check whether the CPU `resource limit` for the pod is set too low. We recommend that you use the CPU Burst policy to optimize CPU throttling. For more information, see [Enable the CPU Burst policy](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/cpu-burst#task-2158239). If the cluster nodes are multi-core servers, we recommend that you use CPU topology-aware scheduling to maximize the use of fragmented CPU resources. For more information, see [Enable CPU topology-aware scheduling](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/topology-aware-cpu-scheduling#task-1935079).

Memory usage of a container replica pod is higher than 85%

Warning

((sum(container\_memory\_working\_set\_bytes{pod=~"{{PodName}}.\*",namespace=~"{{Namespace}}.\*",container !="",container!="POD"}) by (pod,namespace)/ sum(container\_spec\_memory\_limit\_bytes{pod=~"{{PodName}}.\*",namespace=~"{{Namespace}}.\*",container !="",container!="POD"}) by (pod, namespace) \* 100) <= 100 or on() vector(0)) >= 85

Triggers an alert when the memory usage of a container replica pod is higher than 85% of its pod limit.

If the pod does not have a limit configured, this alert rule does not take effect.

The default threshold of 85% is a recommended value. You can adjust it as needed.

To filter data for a specific pod or namespace, replace `pod=~"{{PodName}}.*",namespace=~"{{Namespace}}.*"` with the actual values. To query data for all pods in the cluster, delete this filter condition.

High memory usage in a pod can cause the pod to be terminated by an out-of-memory (OOM) killer, leading to a pod restart.

In this case, check whether the memory `resource limit` for the pod is set too low. We recommend that you use the resource profiling feature to configure the memory limit for the pod. For more information, see [Resource profiling](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/resource-profiling#task-2192631).

### **Abnormal workloads**

**Description**

**Severity**

**PromQL configuration**

**Rule description**

**Common troubleshooting procedure**

Abnormal status of available Deployment replicas

Critical

kube\_deployment\_spec\_replicas{} != kube\_deployment\_status\_replicas\_available{}

Triggers an alert when the number of available replicas for a Deployment does not match the desired number.

In the operation entry point, click **Alert Rule Set for Workload Exceptions** and set the **Deployment pod anomaly** alert rule. For more information, see [Manage alerts in ACK](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/alert-management#task-2056339).

If a pod fails to start or has an abnormal status, see [Troubleshoot pod exceptions](/help/en/ack/ack-managed-and-ack-dedicated/support/pod-troubleshooting#task-2187029).

Abnormal status of DaemonSet replicas

Critical

((100 - kube\_daemonset\_status\_number\_ready{} / kube\_daemonset\_status\_desired\_number\_scheduled{} \* 100) or (kube\_daemonset\_status\_desired\_number\_scheduled{} - kube\_daemonset\_status\_current\_number\_scheduled{})) > 0

Triggers an alert when the number of available replicas for a DaemonSet does not match the desired number.

In the operation entry point, click **Alert Rule Set for Workload Exceptions** and set the **DaemonSet pod anomaly** alert rule. For more information, see [Manage alerts in ACK](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/alert-management#task-2056339).

If a pod fails to start or has an abnormal status, see [Troubleshoot pod exceptions](/help/en/ack/ack-managed-and-ack-dedicated/support/pod-troubleshooting#task-2187029).

Abnormal scheduling of DaemonSet replicas

Critical

kube\_daemonset\_status\_number\_misscheduled{job} > 0

Triggers an alert when a DaemonSet replica is scheduled abnormally.

In the operation entry point, click **Alert Rule Set for Workload Exceptions** and set the **DaemonSet pod scheduling errors** alert rule. For more information, see [Manage alerts in ACK](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/alert-management#task-2056339).

If a pod fails to start or has an abnormal status, see [Troubleshoot pod exceptions](/help/en/ack/ack-managed-and-ack-dedicated/support/pod-troubleshooting#task-2187029).

Job failed

Critical

kube\_job\_status\_failed{} > 0

Triggers an alert when a Job fails to execute.

In the operation entry point, click **Alert Rule Set for Workload Exceptions** and set the **Job execution failures** alert rule. For more information, see [Manage alerts in ACK](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/alert-management#task-2056339).

-   Check the logs of the failed pod under the corresponding Job to get detailed error information.
    
-   If a pod fails to start or has an abnormal status, see [Troubleshoot pod exceptions](/help/en/ack/ack-managed-and-ack-dedicated/support/pod-troubleshooting#task-2187029).
    

### **Storage exceptions**

**Description**

**Severity**

**PromQL configuration**

**Rule description**

**Common troubleshooting procedure**

Abnormal PersistentVolume status

Critical

kube\_persistentvolume\_status\_phase{phase=~"Failed|Pending"} > 0

Triggers an alert when a persistent volume (PV) has an abnormal status.

In the operation entry point, click **Alert Rule Set for Storage Exceptions** and set the **PV anomaly** alert rule. For more information, see [Manage alerts in ACK](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/alert-management#task-2056339).

For more information about how to troubleshoot abnormal PV statuses, see the disk mounting section in [FAQ about disk PVs](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/faq-about-disk-volumes#task-2100599).

Host disk usage is higher than 85%

Critical

(100 - node\_filesystem\_avail\_bytes / node\_filesystem\_size\_bytes \* 100 ) >= 85

Triggers an alert when the free space on a disk block device of a node is less than 10%.

In the operation entry point, click **Alert Rule Set for Resource Exceptions** and set the **Node - Disk usage ≥** **85%** alert rule. For more information, see [Manage alerts in ACK](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/alert-management#task-2056339).

We recommend that you scale out the node or expand its disk. For more information, see the disk mounting section in [FAQ about disk PVs](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/faq-about-disk-volumes#task-2100599).

### **Abnormal node status**

**Description**

**Severity**

**PromQL configuration**

**Rule description**

**Common troubleshooting procedure**

Node remains in NotReady status for 3 minutes

Critical

(sum(max\_over\_time(kube\_node\_status\_condition{condition="Ready",status="true"}\[3m\]) <= 0) by (node)) or (absent(kube\_node\_status\_condition{condition="Ready",status="true"})) > 0

Triggers an alert when a cluster node remains in the NotReady status for 3 minutes.

In the operation entry point, click **Alert Rule Set for Node Exceptions** and set the **Node changes to the unschedulable state** alert rule. For more information, see [Manage alerts in ACK](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/alert-management#task-2056339).

-   Determine whether the NotReady status is expected. For example, you can ignore this alert if you are replacing the node, taking it offline, or manually setting it to an unavailable state.
    
    If the status is not expected, assess whether the application pods on the node are affected and evict the pods if necessary.
    
-   A node can become unavailable for various reasons. Check the node's conditions to identify common issues, such as excessive memory pressure or a full disk.
    

### **Abnormal host resource usage**

**Note**

The following section describes the difference between host resource metrics and node resource metrics:

-   Host resource metrics measure the resources of the physical machine or virtual machine on which the node runs.
    
-   In the usage formula, the numerator is the resource usage of all processes on the host, and the denominator is the maximum capacity of the host.
    

**Description**

**Severity**

**PromQL configuration**

**Rule description**

**Common troubleshooting procedure**

Host memory usage is higher than 85%

Warning

(100 - node\_memory\_MemAvailable\_bytes / node\_memory\_MemTotal\_bytes \* 100) >= 85

Triggers an alert when the host memory usage of the cluster is higher than 85%.

In the operation entry point, click **Alert Rule Set for Resource Exceptions** and configure the **Node - Memory usage ≥** **85%** alert rule. For more information, see [Manage alerts in ACK](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/alert-management#task-2056339).

**Note**

The rules in the ACK alert configuration are provided by [Cloud Monitor](/help/en/cms/cloudmonitor-1-0/product-overview/what-is-cloudmonitor), and their metrics are consistent with the metrics of the corresponding Prometheus rules.

The default threshold of 85% is a recommended value. You can adjust it as needed.

-   Release resources.
    
    We recommend that you use the cost analysis feature to check whether any pods are occupying schedulable resources and whether the memory requests of pods in the cluster are reasonable. For more information, see [Enable the cost analysis feature](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/enable-cost-insights#task-2078815). We recommend that you use the resource profiling feature to configure memory requests for pods. For more information, see [Resource profiling](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/resource-profiling#task-2192631).
    
-   Plan capacity and scale out nodes. For more information, see [Scale nodes in an ACK cluster](/help/en/ack/increase-the-number-of-nodes-in-an-ack-cluster#task-glw-vmg-vdb).
    

Host memory usage is higher than 90%

Critical

(100 - node\_memory\_MemAvailable\_bytes / node\_memory\_MemTotal\_bytes \* 100) >= 90

The memory usage of hosts in the cluster exceeds 90%.

-   Release resources.
    
    We recommend that you use the cost analysis feature to check whether any pods are occupying schedulable resources and whether the memory requests of pods in the cluster are reasonable. For more information, see [Enable the cost analysis feature](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/enable-cost-insights#task-2078815). We recommend that you use the resource profiling feature to configure memory requests for pods. For more information, see [Resource profiling](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/resource-profiling#task-2192631).
    
-   Plan capacity and scale out nodes. For more information, see [Scale nodes in an ACK cluster](/help/en/ack/increase-the-number-of-nodes-in-an-ack-cluster#task-glw-vmg-vdb).
    

Host CPU usage is higher than 85%

Warning

100 - (avg by(instance) (rate(node\_cpu\_seconds\_total{mode="idle"}\[2m\])) \* 100) >= 85

Triggers an alert when the host CPU usage of the cluster is higher than 85%.

In the operation entry point, click **Alert Rule Set for Resource Exceptions** and configure the **Node - CPU usage ≥** **85%** alert rule.

**Note**

The rule in the ACK alerting configuration is provided by CloudMonitor ECS monitoring. The metric in the rule is equivalent to the metric in this Prometheus rule.

The default threshold of 85% is a recommended value. You can adjust it as needed.

For more information, see [Manage alerts in ACK](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/alert-management#task-2056339).

-   Release resources.
    
    We recommend that you use the cost analysis feature to check whether any pods are occupying schedulable resources and whether the CPU requests of pods in the cluster are reasonable. For more information, see [Enable the cost analysis feature](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/enable-cost-insights#task-2078815). We recommend that you use the resource profiling feature to configure pod CPU requests. For more information, see [Resource profiling](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/resource-profiling#task-2192631).
    
-   Plan capacity and scale out nodes. For more information, see [Scale nodes in an ACK cluster](/help/en/ack/increase-the-number-of-nodes-in-an-ack-cluster#task-glw-vmg-vdb).
    

Host CPU usage is higher than 90%

Critical

100 - (avg by(instance) (rate(node\_cpu\_seconds\_total{mode="idle"}\[2m\])) \* 100) >= 90

Triggers an alert when the host CPU usage of the cluster is higher than 90%.

-   Release resources. We recommend that you use the cost analysis feature to check whether any pods are occupying schedulable resources and whether the CPU requests of pods in the cluster are reasonable. For more information, see [Enable the cost analysis feature](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/enable-cost-insights#task-2078815). We recommend that you use the resource profiling feature to configure the CPU requests for pods. For more information, see [Resource profiling](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/resource-profiling#task-2192631).
    
-   Plan capacity and scale out nodes. For more information, see [Scale nodes in an ACK cluster](/help/en/ack/increase-the-number-of-nodes-in-an-ack-cluster#task-glw-vmg-vdb).
    

### **Abnormal node resources**

**Note**

The following section describes the difference between node resource metrics and host resource metrics:

-   Node resource metrics measure the consumption of resources on a node relative to its allocatable capacity. The metric is the ratio of the resources consumed by containers on the node (numerator) to the allocatable resources on the node (denominator).
    
    Take memory as an example:
    
    -   Consumed resources: The total memory resources used by a node. This includes the working set memory of all running containers on the node. The working set memory includes the allocated and used memory of containers, the page cache allocated to containers, and more.
        
    -   Allocatable resources: The amount of resources that can be allocated to containers. This excludes the resources consumed by the container engine layer on the host, which are the resources reserved for nodes in ACK. For more information, see [Node resource reservation policy](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/resource-reservation-policy).
        
-   In the usage formula, the numerator is the resource usage of all containers on the node, and the denominator is the amount of resources that the node can allocate to containers (Allocatable).
    
    > Pod scheduling is based on resource requests, not actual usage.
    

**Description**

**Severity**

**PromQL configuration**

**Rule description**

**Common troubleshooting procedure**

Node CPU usage is higher than 85%

Warning

sum(irate(container\_cpu\_usage\_seconds\_total{pod!=""}\[1m\])) by (node) / sum(kube\_node\_status\_allocatable{resource="cpu"}) by (node) \* 100 >= 85

Triggers an alert when the CPU usage of a cluster node is higher than 85%.

The formula is

`Node resource usage / Total allocatable resources on the node`.

-   Release resources.
    
    We recommend that you use the cost analysis feature to check whether any pods are occupying schedulable resources and whether the CPU requests of pods in the cluster are reasonable. For more information, see [Enable the cost analysis feature](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/enable-cost-insights#task-2078815). We recommend that you use the resource profiling feature to configure the CPU requests for pods to distribute pods across different nodes and balance the resource usage among nodes. For more information, see [Resource profiling](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/resource-profiling#task-2192631).
    
-   Plan capacity and scale out nodes. For more information, see [Scale nodes in an ACK cluster](/help/en/ack/increase-the-number-of-nodes-in-an-ack-cluster#task-glw-vmg-vdb).
    

Node CPU resource allocation rate is higher than 85%

Normal

(sum(sum(kube\_pod\_container\_resource\_requests{resource="cpu"}) by (pod, node) \* on (pod) group\_left max(kube\_pod\_status\_ready{condition="true"}) by (pod, node)) by (node)) / sum(kube\_node\_status\_allocatable{resource="cpu"}) by (node) \* 100 >= 85

Triggers an alert when the CPU resource allocation rate of a cluster node is higher than 85%.

The formula is `Total resource requests of scheduled pods on the node / Total allocatable resources on the node`.

-   The node has insufficient resources for scheduling more pods. Pods that require more resources than what is available must be scheduled to other nodes.
    
-   Check for resource waste in the pods on this node, which can occur if the actual resource usage is much lower than the requested resources. We recommend that you use the cost analysis feature to check whether any pods are occupying schedulable resources and whether the memory requests of pods in the cluster are reasonable. For more information, see [Enable the cost analysis feature](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/enable-cost-insights#task-2078815). We recommend that you use the resource profiling feature to configure the CPU requests for pods. For more information, see [Resource profiling](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/resource-profiling#task-2192631).
    
-   Plan capacity and scale out nodes. For more information, see [Scale nodes in an ACK cluster](/help/en/ack/increase-the-number-of-nodes-in-an-ack-cluster#task-glw-vmg-vdb).
    

Node CPU oversold rate is higher than 300%

Warning

(sum(sum(kube\_pod\_container\_resource\_limits{resource="cpu"}) by (pod, node) \* on (pod) group\_left max(kube\_pod\_status\_ready{condition="true"}) by (pod, node)) by (node)) / sum(kube\_node\_status\_allocatable{resource="cpu"}) by (node) \* 100 >= 300

Triggers an alert when the CPU oversold rate of a cluster node is higher than 300%.

The formula is `Total resource limits of scheduled pods on the node / Total allocatable resources on the node`.

The default threshold of 300% is a recommended value. You can adjust it as needed.

-   The total resource limits of the pods scheduled on the node far exceed the total allocatable resources of the node. During business peaks, a surge in resource usage can lead to insufficient CPU time slice allocation. This causes resource contention and throttling, which can slow down process responses.
    
-   We recommend that you use the cost analysis feature to check whether any pods are occupying schedulable resources and whether the memory requests of pods in the cluster are reasonable. For more information, see [Enable the cost analysis feature](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/enable-cost-insights#task-2078815). We recommend that you use the resource profiling feature to configure the CPU requests and limits for pods. For more information, see [Resource profiling](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/resource-profiling#task-2192631).
    
-   Plan capacity and scale out nodes. For more information, see [Scale nodes in an ACK cluster](/help/en/ack/increase-the-number-of-nodes-in-an-ack-cluster#task-glw-vmg-vdb).
    

Node memory usage is higher than 85%

Warning

sum(container\_memory\_working\_set\_bytes{pod!=""}) by (node) / sum(kube\_node\_status\_allocatable{resource="memory"}) by (node) \* 100 >= 85

Triggers an alert when the memory usage of a cluster node is higher than 85%.

The formula is

`Node resource usage / Total allocatable resources on the node`.

-   Release resources.
    
    We recommend that you use the cost analysis feature to check whether any pods are occupying schedulable resources and whether the memory requests of pods in the cluster are reasonable. For more information, see [Enable the cost analysis feature](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/enable-cost-insights#task-2078815). We recommend that you use the resource profiling feature to configure the memory requests for pods to distribute pods across different nodes and balance the resource usage among nodes. For more information, see [Resource profiling](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/resource-profiling#task-2192631).
    
-   Plan capacity and scale out nodes. For more information, see [Scale nodes in an ACK cluster](/help/en/ack/increase-the-number-of-nodes-in-an-ack-cluster#task-glw-vmg-vdb).
    

Node memory resource allocation rate is higher than 85%

Normal

(sum(sum(kube\_pod\_container\_resource\_requests{resource="memory"}) by (pod, node) \* on (pod) group\_left max(kube\_pod\_status\_ready{condition="true"}) by (pod, node)) by (node)) / sum(kube\_node\_status\_allocatable{resource="memory"}) by (node) \* 100 >= 85

Triggers an alert when the memory resource allocation rate of a cluster node is higher than 85%.

The formula is `Total resource requests of scheduled pods on the node / Total allocatable resources on the node`.

-   The node has insufficient resources for scheduling more pods. Pods that require more resources than what is available must be scheduled to other nodes.
    
-   Check for resource waste in the pods on this node, which can occur if the actual resource usage is much lower than the requested resources. We recommend that you use the cost analysis feature to check whether any pods are occupying schedulable resources and whether the memory requests of pods in the cluster are reasonable. For more information, see [Enable the cost analysis feature](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/enable-cost-insights#task-2078815). We recommend that you use the resource profiling feature to configure the memory requests for pods. For more information, see [Resource profiling](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/resource-profiling#task-2192631).
    
-   Plan capacity and scale out nodes. For more information, see [Scale nodes in an ACK cluster](/help/en/ack/increase-the-number-of-nodes-in-an-ack-cluster#task-glw-vmg-vdb).
    

Node memory oversold rate is higher than 300%

Warning

(sum(sum(kube\_pod\_container\_resource\_limits{resource="memory"}) by (pod, node) \* on (pod) group\_left max(kube\_pod\_status\_ready{condition="true"}) by (pod, node)) by (node)) / sum(kube\_node\_status\_allocatable{resource="memory"}) by (node) \* 100 >= 300

Triggers an alert when the memory oversold rate of a cluster node is higher than 300%.

The formula is `Total resource limits of scheduled pods on the node / Total allocatable resources on the node`.

The default threshold of 300% is a recommended value. You can adjust it as needed.

-   The total resource limits of the pods scheduled on the node far exceed the total allocatable resources of the node. During business peaks, a surge in resource usage can cause memory to reach the node's limit. This can lead to a node OOM event, which may cause processes to be terminated by the OOM killer and affect business operations.
    
-   We recommend that you use the cost analysis feature to check whether any pods are occupying schedulable resources and whether the memory requests of pods in the cluster are reasonable. For more information, see [Enable the cost analysis feature](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/enable-cost-insights#task-2078815). We recommend that you use the resource profiling feature to configure the memory requests and limits for pods. For more information, see [Resource profiling](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/resource-profiling#task-2192631).
    
-   Plan capacity and scale out nodes. For more information, see [Scale nodes in an ACK cluster](/help/en/ack/increase-the-number-of-nodes-in-an-ack-cluster#task-glw-vmg-vdb).
    

### **Network exceptions**

**Description**

**Severity**

**PromQL configuration**

**Rule description**

**Common troubleshooting procedure**

Abnormal cluster CoreDNS availability - request count drops to zero

Critical

(sum(rate(coredns\_dns\_request\_count\_total{}\[1m\]))by(server,zone)<=0) or (sum(rate(coredns\_dns\_requests\_total{}\[1m\]))by(server,zone)<=0)

This exception can be detected only in ACK managed clusters (Pro and Basic editions).

Check whether the CoreDNS pods in the cluster are normal.

Abnormal cluster CoreDNS availability - panic exception

Critical

sum(rate(coredns\_panic\_count\_total{}\[3m\])) > 0

This exception can be detected only in ACK managed clusters (Pro and Basic editions).

Check whether the CoreDNS pods in the cluster are normal.

Cluster Ingress controller certificate is about to expire

Warning

((nginx\_ingress\_controller\_ssl\_expire\_time\_seconds - time()) / 24 / 3600) < 14

You must install and deploy the ACK Ingress controller component and enable the Ingress feature.

Reissue the Ingress controller certificate.

### **Auto Scaling exceptions**

**Description**

**Severity**

**PromQL configuration**

**Rule description**

**Common troubleshooting procedure**

HPA current replica count has reached the maximum

Warning

max(kube\_horizontalpodautoscaler\_spec\_max\_replicas) by (namespace, horizontalpodautoscaler) - max(kube\_horizontalpodautoscaler\_status\_current\_replicas) by (namespace, horizontalpodautoscaler) <= 0

You must enable the `horizontalpodautoscaler`\-related metrics in Alibaba Cloud Prometheus. These metrics are disabled by default and are free of charge.![弹性伸缩](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/3977021861/p607530.png)

Check whether the Horizontal Pod Autoscaler (HPA) policy meets your expectations. If the business workload remains high, you may need to increase the maxReplicas value of the HPA or optimize application performance

## References

-   For more information about how to query Prometheus monitoring data from the console or using an API, see [Query Prometheus monitoring data using PromQL](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/use-promql-to-query-prometheus-monitoring-data#task-2312424).
    
-   You can use ACK Net Exporter to quickly discover and locate container network issues. For more information, see [Use KubeSkoop to locate network issues](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/use-kubeskoop-to-troubleshoot-network-issues).
    
-   For more information about common issues and solutions when you use Alibaba Cloud Prometheus, see [Observability FAQ](/help/en/doc-detail/479341.html).
