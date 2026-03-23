Container Service for Kubernetes (ACK) clusters are compatible with Managed Service for Prometheus and Managed Service for Grafana, eliminating the need to build your own monitoring systems and dashboards. After deploying applications in Knative, you can import monitoring data to Managed Service for Prometheus and view real-time metrics in Grafana.

## Prerequisites

Knative is deployed in your cluster. For more information, see [Deploy and manage Knative](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/deploy-knative).

## **Billing rules**

After ingesting the Knative monitoring data to Managed Service for Prometheus, the corresponding components can automatically send monitoring metrics to Managed Service for Prometheus. These metrics are treated as [custom metrics](/help/en/arms/prometheus-monitoring/basic-metrics/). Fees are charged for custom metrics.

Before you enable this feature, we recommend that you read [Billing overview](/help/en/arms/prometheus-monitoring/product-overview/billing-overview-2) to understand the billing rules of custom metrics. The fees may vary based on the cluster size and number of applications. You can follow the steps in [View resource usage](/help/en/arms/prometheus-monitoring/product-overview/view-resource-usage) to monitor and manage resource usage.

## Activate Managed Service for Prometheus

1.  Log on to the [ACK console](https://cs.console.alibabacloud.com). In the navigation pane on the left, click **Clusters**.
    
2.  On the **Clusters** page, find the cluster you want and click its name. In the left-side navigation pane, choose **Applications** > **Knative**.
    
3.  On the **Knative Components** page, select the **Monitoring Dashboards** tab, and follow the on-screen instructions to enable Prometheus dashboards.
    

## View the Knative dashboard

After activating Managed Service for Prometheus, you can view the monitoring data on the **Monitoring Dashboards** tab.

**Category**

**Description**

Request data

In the **Overview (average over the selected time range)** section, view the following data:

-   Total incoming requests (**Request Volume**)
    
-   Percentage of successful responses (**Success Rate**)
    
-   HTTP client-side errors (**4xx**)
    
-   HTTP server-side errors (**5xx**)
    
-   Traffic distribution across service versions (**Request Volume by Revision**)
    
-   Traffic segmented by HTTP status groups (**Request Volume by Response Code Class**)
    

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/0284440571/p974114.png)

Response latency data

In the **Response Time** section, you can view the response latency data of Knative, including the P50, P90, P95, and P99 response latency.![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/0284440571/p974116.png)

Request concurrency data

In the **Autoscaler** section, you can view detailed information about the request concurrency of Knative.

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/0284440571/p974124.png)

Activator

In the **Activator** section, view the following Knative activator metrics:

-   Total incoming requests (**Request Volume**)
    
-   Percentage of successful responses (**Success Rate**)
    
-   HTTP client-side errors (**4xx**)
    
-   HTTP server-side errors (**5xx**)
    
-   Traffic distribution across service versions (**Request Volume by Revision**)
    
-   Traffic segmented by HTTP status groups (**Request Volume by Response Code Class**)
    
-   Latency metrics per service version (**Response Time by Revision**)
    
-   Latency analysis by HTTP status groups (**Response Time by Response Code Class**)
    

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/0284440571/p974126.png)

Resource usage

In the **Resource Usages** section, you can view the usage information of Knative resources, including CPUs and memory.![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/0284440571/p974128.png)

## View key service discovery metrics of Knative

You can view and validate Knative service metrics by selecting predefined metrics or writing custom PromQL queries.

1.  Log on to the [ARMS console](https://cloudmonitor.console.alibabacloud.com/prom/instances/#/home). In the navigation pane on the left, click **Integration Management**.
    
2.  On the **Integration Management** page, select a region from the navigation pane on the top. Click the **Integrated Environments** > **Container Service** tab, then click **Knative** in the **Integrated Addons** conlumn.
    
3.  On the page that appears, click the **Metrics Explorer** tab to view the Knative Service discovery metrics.
    
    > For detailed steps, see [Metric exploration](/help/en/prometheus/user-guide/metrics-explorer).
    

**Note**

-   When the number of pods for a Knative application is scaled to zero, metrics such as the request concurrency and the number of requests sent to a pod per second cannot be collected by Managed Service for Prometheus. You can view these metrics in the console only after you access the pods of the Knative application.
    
-   When the number of pods for a Knative application is not zero, you can directly view the metrics in the console, such as the request concurrency and the number of requests sent to a pod per second. You do not need to access the pods of the Knative application.
    

**Metric**

**Description**

queue\_average\_concurrent\_requests

The number of concurrent requests sent to a pod.

queue\_requests\_per\_second

The number of requests sent to a pod per second.

revision\_request\_latencies

The response latency.

revision\_request\_count

The number of revision requests.

## **References**

To use Simple Log Service for log collection, monitoring and alerting. For more information, see [Enable SLS on Knative](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/collect-application-logs) and [Configure alerting for Knative Services](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/configure-alerting-on-knative).
