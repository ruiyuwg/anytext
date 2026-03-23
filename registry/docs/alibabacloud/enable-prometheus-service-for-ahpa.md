You can connect the Application High Performance Autoscaler (AHPA) component to Managed Service for Prometheus. This provides a dedicated, out-of-the-box dashboard to view monitoring metrics for your workload, such as CPU utilization and the number of pods.

## Prerequisites

-   Managed Service for Prometheus is enabled for your cluster, and the Prometheus Agent is version 3.0.0 or later. For more information, see [Enable Prometheus monitoring](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/use-managed-service-for-prometheus-to-monitor-an-ack-cluster#section-o0u-mkk-58y).
    
-   AHPA is deployed and is version v2.0.0 or later. For more information, see [Deploy AHPA](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/deploy-ahpa#task-2254406).
    
-   The following parameters have been added to the Prometheus configuration.
    
    **Expand to view code details**
    
    ```
    apiVersion: v1
    kind: ConfigMap
    metadata:
      name: application-intelligence
      namespace: kube-system
    data:
      prometheus_writer_url: http://cn-hangzhou-intranet.arms.aliyuncs.com/prometheus/190601496873****/cd5ec926b715e41b282296d1415a1***/cn-hangzhou/api/v3/write
      prometheus_writer_ak: xxx
      prometheus_writer_sk: xx
      ...
    ```
    
    -   `prometheus_writer_url`: The internal endpoint for Remote Write.
        
    -   `prometheus_writer_ak`: The AccessKey ID of your Alibaba Cloud account.
        
    -   `prometheus_writer_sk`: The AccessKey secret of your Alibaba Cloud account.
        

## Step 1: Connect AHPA

Connect the AHPA component to Managed Service for Prometheus by performing the following steps.

1.  Log on to the [ARMS console](https://arms-ap-southeast-1.console.aliyun.com/#/home).
    
2.  In the navigation pane on the left, click **Integration Center** and search for **ACK AHPA**.
    
3.  Click the **ACK AHPA** resource card. Follow the on-screen instructions to select the Container Service for Kubernetes (ACK) cluster and specify the configuration to connect to AHPA.
    
    **Parameter**
    
    **Description**
    
    **Access Name**
    
    A unique name for the current AHPA monitoring instance.
    
    **metrics collection interval (seconds)**
    
    The interval at which monitoring data is collected.
    

## View AHPA dashboard data

1.  Log on to the [ARMS console](https://arms-ap-southeast-1.console.aliyun.com/#/home).
    
2.  In the navigation pane on the left, click **Integration Management**, and then click the **Integrated Addons** tab.
    
3.  Click the **ACK AHPA** resource card, navigate to the **Dashboards** tab, and then click a dashboard name to view its detailed data in Grafana.
    
    The dashboard displays the following information.
    
    -   **CPU Utilization & Actual POD**: The average CPU utilization and the number of pods for the current workload.
        
    -   **Actual and Predicted CPU Usage**: The total CPU usage of pods in the current workload and the predicted usage. If the predicted usage is greater than the actual usage, it indicates that the predicted CPU capacity is sufficient.
        
    -   **Pod Trends**: The number of actual pods, recommended pods, and proactively predicted pods.
        
        -   Actual Pods: The number of running pods.
            
        -   Recommended Pods: The number of pods that AHPA recommends for scaling. This is the final number of pods determined based on proactive prediction, reactive prediction, and the boundary range.
            
        -   Proactive Prediction: The number of pods predicted based on historical data and detected periodicity.
            
    

## Key AHPA metrics

**Metric**

**Description**

`ahpa_proactive_pods`

Number of proactively predicted pods

> The number of pods predicted for a future period based on historical metrics.

`ahpa_reactive_pods`

Number of reactively predicted pods

> The number of pods predicted in real time.

`ahpa_requested_pods`

Number of recommended pods

`ahpa_max_pods`

Maximum number of pods

`ahpa_min_pods`

Minimum number of pods

`ahpa_target_metric`

Target threshold

## **References**

To use AHPA to scale your application based on custom metrics, such as the queries per second (QPS) of HTTP requests or the length of a message queue, see [Use AHPA to configure custom metrics for application autoscaling](/help/en/ack/serverless-kubernetes/user-guide/configure-custom-metrics-through-ahpa-for-application-scaling).
