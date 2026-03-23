**Important**

Starting from 00:00:00 (UTC+8) on April 14, 2025, Cloud Monitor no longer provides the Kubernetes container monitoring feature for new users. For more information, see [Announcement on the discontinuation of the Kubernetes container monitoring feature of Cloud Monitor](/help/en/cms/cloudmonitor-1-0/product-overview/announcement-on-the-discontinuation-of-kubernetes-container-monitoring-feature-of-cloudmonitor). We recommend that you use the container monitoring capability provided by Managed Service for Prometheus. For more information, see [Monitor an ACK cluster](/help/en/prometheus/container-observable).

Cloud Monitor provides the Container Service Monitoring feature. This feature provides an overview of Container Service for Kubernetes (ACK) clusters and monitoring data of nodes, namespaces, and workloads of ACK clusters. This feature allows you to track the status of ACK clusters.

## Prerequisites

-   Container Service for Kubernetes (ACK) is activated and a cluster is created. For more information, see [Quick start for first-time users](/help/en/ack/ack-managed-and-ack-dedicated/getting-started/quick-start-for-first-time-users#task-2470091).
    
-   The **metrics-server** component of the ACK cluster is upgraded to V0.3.8.5 or later. For more information, see [Update the metrics-server component before you update the Kubernetes version to 1.12](/help/en/ack/install-the-metrics-server-component#task-1664343).
    
-   The monitoring feature of Cloud Monitor is manually enabled for the **metrics-server** component for ACK clusters that are created after 10:00:00 on April 25, 2024. For more information, see [Enable the monitoring feature of Cloud Monitor for an ACK cluster](/help/en/cms/cloudmonitor-1-0/user-guide/enable-cloud-monitoring-for-container-service-kubernetes-clusters).
    

## Cluster overview

1.  Log on to the [Cloud Monitor console](https://cloudmonitor.console.alibabacloud.com/).
    
2.  In the left-side navigation pane, choose **Cloud Resource Monitoring** > **Container Service ACK**.
    
3.  On the **Container Service Monitoring** page, find the cluster that you want to view and click the cluster name or **View Details** in the Actions column.
    
4.  The **Cluster overview** page appears. View the basic information and monitoring data of the cluster.
    
    -   On the **Overview** tab, you can view the status of pods and nodes. You can also view the CPU utilization and memory usage of top pods and nodes.
        
    -   On the **Cluster Monitoring Chart** tab, you can view the monitoring charts for all metrics of the cluster in the specified time range.
        
    

## Node monitoring data

1.  Log on to the [Cloud Monitor console](https://cloudmonitor.console.alibabacloud.com/).
    
2.  In the left-side navigation pane, choose **Cloud Resource Monitoring** > **Container Service ACK**.
    
3.  On the **Container Service Monitoring** page, find the cluster that you want to view and click the cluster name or **View Details** in the Actions column.
    
4.  In the left-side navigation pane, click **Node**.
    
5.  On the **Node** page, find the node that you want to view and click the node ID or **View Details** in the Actions column.
    
6.  On the **Monitoring Charts** tab, view the monitoring charts for all metrics of the node in the specified time range.
    

## Namespace monitoring data

1.  Log on to the [Cloud Monitor console](https://cloudmonitor.console.alibabacloud.com/).
    
2.  In the left-side navigation pane, choose **Cloud Resource Monitoring** > **Container Service ACK**.
    
3.  On the **Container Service Monitoring** page, find the cluster that you want to view and click the cluster name or **View Details** in the Actions column.
    
4.  In the left-side navigation pane, click **Namespace**.
    
5.  On the **Namespace** page, find the namespace that you want to view and click the namespace name or **View Details** in the Actions column.
    
6.  On the **Monitoring Charts** tab, view the status of pods and the monitoring charts for CPU utilization and memory usage of top pods in the specified time range.
    

## Workload monitoring data

1.  Log on to the [Cloud Monitor console](https://cloudmonitor.console.alibabacloud.com/).
    
2.  In the left-side navigation pane, choose **Cloud Resource Monitoring** > **Container Service ACK**.
    
3.  On the **Container Service Monitoring** page, find the cluster that you want to view and click the cluster name or **View Details** in the Actions column.
    
4.  In the left-side navigation pane, click **Workload**.
    
5.  On the **Workload** page, view the monitoring charts for applications and pods, and the CPU utilization and memory usage of top pods.
    
    -   On the **Stateless**, **Stateful**, **Daemon set**, **Scheduled Tasks**, or **Task** tab, find the application that you want to view. Then, click the application name or click **View Details** in the **Actions** column. On the page that appears, you can view the monitoring chart, the list of pods, and the hot spots of pods of the application.
        
    -   On the **Container Group** tab, find the pod that you want to view. Then, click the pod name or click **View Details** in the **Actions** column. On the page that appears, you can view the monitoring charts for all pods in the workload.
        
    
6.  On the **Stateless** tab of the **Workload** page, find the workload that you want to view and click the workload name or **View Details** in the Actions column.
    
    You can view the CPU utilization and memory usage of workloads on the **Stateless**, **Stateful**, **Daemon set**, **Scheduled Tasks**, **Task**, and **Container Group** tabs.
    
7.  On the **Deployment Application**, **Container group list**, and **Container group hotspot** tabs, view the basic information and monitoring charts of the workload.
    

## **Reference**

[What do I do if no data exists in an ACK cluster?](/help/en/cms/cloudmonitor-1-0/support/how-do-i-handle-the-problem-of-no-data-in-a-container-service-kubernetes-cluster-in-cloud-monitoring)
