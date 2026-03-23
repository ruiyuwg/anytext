**Important**

Starting from 00:00:00 (UTC+8) on April 14, 2025, Cloud Monitor no longer provides the Kubernetes container monitoring feature for new users. For more information, see [Announcement on the discontinuation of the Kubernetes container monitoring feature of Cloud Monitor](/help/en/cms/cloudmonitor-1-0/product-overview/announcement-on-the-discontinuation-of-kubernetes-container-monitoring-feature-of-cloudmonitor). We recommend that you use the container monitoring capability provided by Managed Service for Prometheus. For more information, see [Monitor an ACK cluster](/help/en/prometheus/container-observable).

## **Prerequisites**

-   Container Service for Kubernetes (ACK) is activated and a cluster is created. For more information, see [Quick start for first-time users](/help/en/ack/ack-managed-and-ack-dedicated/getting-started/quick-start-for-first-time-users#task-2470091).
    
-   The **metrics-server** component of the ACK cluster is upgraded to V0.3.8.5 or later. For more information, see [Update the metrics-server component before you update the Kubernetes version to 1.12](/help/en/ack/install-the-metrics-server-component#task-1664343).
    

**Note**

The Kubernetes container monitoring feature of Cloud Monitor is disabled by default for ACK clusters created after 10:00:00 on April 25, 2024. Before you can use Cloud Monitor to monitor an ACK cluster, you must manually enable the Kubernetes container monitoring feature for the ACK cluster.

## **Procedure**

1.  Log on to the [ACK console](https://cs.console.alibabacloud.com).
    
2.  In the left-side navigation pane, click **Clusters**.
    
3.  On the **Clusters** page, find the cluster that you want to manage, click **More** in the **Actions** column, and then choose **Operations** > **Manage Components**.
    
4.  In the **Logs and Monitoring** section of the **Core Components** tab, click **Configuration** in the lower-right corner of the **metrics-server** component.
    
5.  In the **metrics-server Parameters** dialog box, select **Enables Kubernetes Monitoring of CloudMonitor**.
    
6.  Click **OK**.
    
7.  View the monitoring data of the ACK cluster. For more information, see [View the monitoring data of an ACK cluster](/help/en/cms/cloudmonitor-1-0/user-guide/view-monitoring-data-2).
    

## **Reference**

[What do I do if no data exists in an ACK cluster?](/help/en/cms/cloudmonitor-1-0/support/how-do-i-handle-the-problem-of-no-data-in-a-container-service-kubernetes-cluster-in-cloud-monitoring)
