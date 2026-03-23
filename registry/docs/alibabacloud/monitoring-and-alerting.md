If you encounter network connection issues, such as request timeout and traffic throttling, when you use Global Accelerator (GA) or you want to analyze the load and performance of a GA resource, you can use Cloud Monitor (CMS) to view the status and metrics of GA resources and identify issues in an efficient manner.

## View the monitoring information of a GA instance

Cloud Monitor collects monitoring metrics from GA in real time and generates visualized time series charts in the GA console. You can troubleshoot issues based on the collected metrics.

### **View the monitoring data of a standard GA instance**

1.  Log on to the [GA console](https://ga.console.alibabacloud.com/list).
    
2.  On the **Instances** page, find the GA instance that you want to manage and use one of the following methods to view the monitoring data:
    
    -   On the **Instances** page
        
        1.  In the **Monitor/Diagnostics** column, click the ![监控](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/2659838661/p487985.png) icon.
            
        2.  In the **Instance Monitoring** panel, view the monitoring information.
            
    -   On the instance details page
        
        1.  Click the ID of the GA instance.
            
        2.  On the instance details page, click the **Monitoring Chart** tab to view the monitoring information.
            
    
    You can perform the following operations to filter monitoring information based on the metric type, region, and time range, or create threshold-triggered alert rules. For more information about the monitoring metrics supported by standard GA instances, see [Metrics of standard GA instances](#511be98df7e6l).
    
    -   Select the type of the metric that you want to view.
        
        -   Choose **Instance** > **Acceleration Region** or **Instance** > **Endpoint Region** and select a region from the **Region** drop-down list.
            
        -   Choose **Instances** > **Used CUs** to view the number of CUs consumed by a **pay-as-you-go** standard GA instance.
            
        -   Click **Listener** to view the monitoring metrics of the listener added to the **pay-as-you-go** standard GA instance.
            
            **Note**
            
            If you cannot view the monitoring metrics of intelligent routing listeners of your pay-as-you-go standard GA instance, the instance may be using an earlier version. Contact your account manager to upgrade your GA instance.
            
    -   In the **Time** drop-down list, select a time range.
        
        By default, the system displays the monitoring data collected within the previous hour. You can select other time ranges from the Time drop-down list. The supported time ranges are 3 hours, 6 hours, and 12 hours. You can also specify a **custom** time range.
        
    -   Click **Threshold Alerting Settings**. On the **Alert Rules** page of the CloudMonitor console, click **Create Alert Rule** to create an alert rule for the GA instance. Threshold Alerting Settings is supported only by standard GA instances. To configure alert rules for basic GA instances, go to the CloudMonitor console. For more information, see [Create a threshold-triggered alert rule](#section-2a5-fwq-1qi).
        
    -   If you turn on **Auto Refresh**, the monitoring chart is automatically refreshed every minute.
        
    

### **View the monitoring data of a basic GA instance**

1.  Log on to the [GA console](https://ga.console.alibabacloud.com/list).
    
2.  In the left-side navigation pane, click **Basic Instance**.
    
3.  On the **Instances** page, find the Global Accelerator instance that you want to manage and use one of the following methods to view the monitoring data:
    
    -   On the **Instances** page
        
        1.  Click ![监控](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/2659838661/p487985.png) in the **Monitor** column
            
        2.  In the **Instance Monitoring** panel, view the monitoring information.
            
    -   On the instance details page
        
        1.  Click the ID of the GA instance.
            
        2.  On the instance details page, click the **Monitoring Chart** tab to view the monitoring information.
            
    
    You can perform the following operations to filter monitoring data by monitoring granularity and time range. For more information about the monitoring metrics supported by basic Global Accelerator instances, see [Metrics of basic GA instances](#30f232fcf9wsa).
    
    -   In the **Granularity** drop-down list, select **Acceleration Region** or **Accelerated IP**.
        
        If you select **Accelerated IP**, you can select the accelerated IP address whose metrics you want to view. You can select up to three accelerated IP addresses at a time.
        
    -   In the **Time** drop-down list, select a time range.
        
        By default, the system displays the monitoring data collected within the previous hour. You can select other time ranges from the Time drop-down list. The supported time ranges are 3 hours, 6 hours, and 12 hours. You can also specify a **custom** time range.
        
    -   If you turn on **Auto Refresh**, the monitoring chart is automatically refreshed every minute.
        
    

## Create a threshold-triggered alert rule

To monitor the usage and status of GA instances, you can create threshold-triggered alert rules. This way, you can make sure that GA instances run as expected.

**Note**

If a GA instance is deleted, the threshold-triggered alert rules that are configured in the CloudMonitor console for the GA instance are also deleted.

1.  Log on to the [Cloud Monitor console](https://cloudmonitor.console.alibabacloud.com/).
    
2.  In the left-side navigation pane, choose **Alerts** > **Alert Rules**.
    
3.  On the **Alert Rules** page, click **Create Alert Rule**.
    
4.  In the **Create Alert Rule** panel, specify the following parameters to create an alert rule and click **Confirm**.
    
    The following table describes the parameters that are related to this topic. For more information about other parameters, see [Create an alert rule](/help/en/cms/cloudmonitor-1-0/user-guide/create-an-alert-rule#task-2181123).
    
    **Parameter**
    
    **Description**
    
    **Product**
    
    Select **Global Accelerator - Basic GA Instance** or **Global Accelerator - Standard GA Instance** as needed.
    
    **Resource Range**
    
    Select the range of resources to which the alert rule applies.
    
    -   **All Resources**: The alert rule applies to all GA instances that belong to the current Alibaba Cloud account.
        
    -   **Application Groups**: The alert rule applies to all resources in the specified application group in the current Alibaba Cloud account. If an application group that contains the GA instance is already created, you can select this option.
        
    -   **Instances**: The alert rule applies to the specified GA instance.
        
    
    If you select **Application Groups** or **Instances**, you must select the application group that contains the GA or select the GA instance from the **Associated Resources** drop-down list.
    
    **Rule Description**
    
    The content of the alert rule. If a metric meets the specified conditions, an alert is triggered. To specify a condition, perform the following steps:
    
    1.  Click **Add Rule**.
        
    2.  In the **Configure Rule Description** panel, configure the **Alert Rule**, **Metric Type**, **Metric**, and **Threshold and Alert Level** parameters.
        
        For more information about the monitoring metrics supported by GA, see [Supported monitoring metrics](#section-qnd-gqm-xdp).
        
    3.  Click **OK**.
        
    

## Supported monitoring metrics

### Monitoring metrics of standard GA instances

### **Acceleration region metrics**

**Metric**

**Description**

**MetricName**

**Dimensions**

**Statistics**

**GaIpOutBps**

The bandwidth consumed by a standard GA instance for external access. Unit: bit/s.

GaIpOutBps

userId, instanceId, and regionId

Average

**GaIpInBps**

The bandwidth consumed by clients to access a standard GA instance. Unit: bit/s.

GaIpInBps

userId, instanceId, and regionId

Average

**GaIpOutPps**

The number of packets sent by a standard GA instance per second. Unit: pps.

GaIpOutPps

userId, instanceId, and regionId

Average

**GaIpInPps**

The number of packets received by a standard GA instance per second. Unit: pps.

GaIpInPps

userId, instanceId, and regionId

Average

**GaIpOutBpsPercentage**

The ratio of the bandwidth consumed by an acceleration region of GA for external access to the total bandwidth of the acceleration region.

GaIpOutBpsPercentage

userId, instanceId, and regionId

Average

**GaIpInBpsPercentage**

The ratio of the bandwidth consumed by clients to access an acceleration region of a standard GA instance to the total bandwidth of the acceleration region.

GaIpInBpsPercentage

userId, instanceId, and regionId

Average

**GaIpOutDropPps**

The number of outbound packets discarded by a standard GA instance per second. Unit: pps.

GaIpOutDropPps

userId, instanceId, and regionId

Average

**GaIpInDropPps**

The number of inbound packets discarded by a standard GA instance per second. Unit: pps.

GaIpInDropPps

userId, instanceId, and regionId

Average

**GaIpActiveConnectionCount**

The number of connections in the ESTABLISHED state of a standard GA instance.

GaIpActiveConnectionCount

userId, instanceId, and regionId

Average

**GaIpProcessedBytes**

The total number of bytes sent and received by a pay-as-you-go standard GA instance. Unit: bytes.

GaIpProcessedBytes

userId, instanceId, and regionId

Value

**GaIpCPS**

The number of new connections to a standard GA instance per second.

GaIpCPS

userId, instanceId, and regionId

Average

**GaIpQPS**

The number of requests to a standard GA instance per second. This metric is supported only by pay-as-you-go standard GA instances.

GaIpQPS

userId, instanceId, and regionId

Average

### **Endpoint region metrics**

**Metric**

**Description**

**MetricName**

**Dimensions**

**Statistics**

**GaEndPointGroupOutBps**

The bandwidth consumed by an endpoint group in a region to access a standard GA instance. Unit: bit/s.

GaEndPointGroupOutBps

userId, instanceId, and regionId

Average

**GaEndPointGroupInBps**

The bandwidth consumed by a standard GA instance to access an endpoint group in a region. Unit: bit/s.

GaEndPointGroupInBps

userId, instanceId, and regionId

Average

**GaEndPointGroupOutPps**

The number of packets sent by an endpoint group in a region per second. Unit: pps.

GaEndPointGroupOutPps

userId, instanceId, and regionId

Average

**GaEndPointGroupInPps**

The number of packets received by an endpoint group in a region per second. Unit: pps.

GaEndPointGroupInPps

userId, instanceId, and regionId

Average

**GaEndPointGroupOutBps**

The ratio of the bandwidth consumed by an endpoint group in a region to the total bandwidth when the endpoint group accesses a standard GA instance.

GaEndPointGroupOutBpsPercentage

userId, instanceId, and regionId

Average

**GaEndPointGroupInBps**

The ratio of the bandwidth consumed by a standard GA instance to the total bandwidth when the GA instance accesses an endpoint group in a region.

GaEndPointGroupInBpsPercentage

userId, instanceId, and regionId

Average

**GaEndPointGroupOutDropPps**

The number of outbound packets discarded by an endpoint group in a region per second. Unit: pps.

GaEndPointGroupOutDropPps

userId, instanceId, and regionId

Average

**GaEndPointGroupRegionInDropPps**

The number of inbound packets discarded by an endpoint group in a region per second. Unit: pps.

GaEndPointGroupInDropPps

userId, instanceId, and regionId

Average

### **CU usage metrics**

**Metric**

**Description**

**MetricName**

**Dimensions**

**Statistics**

**ConsumedCUs**

The number of CUs consumed by a pay-as-you-go standard GA instance. Unit: packets.

ConsumedCUs

userId and instanceId

Value

### **Listener metrics**

**Note**

You can view the monitoring metrics of listeners added to **pay-as-you-go** standard GA instances.

If you cannot view the monitoring metrics of intelligent routing listeners of your pay-as-you-go standard GA instance, the instance may be using an earlier version. Contact your account manager to upgrade your GA instance.

**Metric**

**Description**

**MetricName**

**Dimensions**

**Statistics**

**GaListenerActiveConnectionCount**

The number of TCP connections in the ESTABLISHED state on the listener.

GaListenerActiveConnectionCount

userId, instanceId, regionId, and listenerId

Value

**GaListenerInactiveConnectionCount**

The total number of UDP connections on the listener.

GaListenerInactiveConnectionCount

userId, instanceId, regionId, and listenerId

Value

**GaListenerMaxConnectionCount**

The maximum number of TCP or UDP connections processed by the listener per minute.

GaListenerMaxConnectionCount

userId, instanceId, regionId, and listenerId

Value

**GaListenerCPS**

The number of new TCP or UDP connections processed by the listener per second.

GaListenerCPS

userId, instanceId, regionId, and listenerId

Value

**GaListenerQPS**

The number of Layer 7 requests processed by the listener per second.

GaListenerQPS

userId, instanceId, regionId, and listenerId

Value

**GaListenerProcessedBytes**

The total number of bytes of inbound and inbound traffic forwarded by the listener per minute. Unit: bytes.

GaListenerProcessedBytes

userId, instanceId, regionId, and listenerId

Value

**GaListenerOutBps**

The outbound bandwidth of a TCP or UDP listener. Unit: bit/s.

GaListenerOutBps

userId, instanceId, regionId, and listenerId

Value

**GaListenerInBps**

The inbound bandwidth of a TCP or UDP listener. Unit: bit/s.

GaListenerInBps

userId, instanceId, regionId, and listenerId

Value

**GaListenerOutPps**

The number of TCP or UDP packets sent per second. Unit: pps.

GaListenerOutPps

userId, instanceId, regionId, and listenerId

Value

**GaListenerInPps**

The number of TCP or UDP packets that the listener receives per second. Unit: pps.

GaListenerInPps

userId, instanceId, regionId, and listenerId

Value

### **Origin probing metrics**

**Metric**

**Description**

**MetricName**

**Dimensions**

**Statistics**

**GaApplicationMonitorAvailability**

The percentage of time within a specified duration when the connection between a detection point and an origin server is of good quality.

GaApplicationMonitorAvailability

userId, instanceId, and taskId

Value

### **Tunnel latency metrics**

**Metric**

**Description**

**MetricName**

**Dimensions**

**Statistics**

**GaTunnelLatency**

The latency of the tunnel between an acceleration region of a standard GA instance and the region of an endpoint group. Unit: milliseconds.

GaTunnelLatency

userId, instanceId, regionId, and endpointGroupRegionId

Average

**Note**

You can query **GaApplicationMonitorAvailability** and **GaTunnelLatency** only by calling [CloudMonitor API](/help/en/cms/cloudmonitor-1-0/developer-reference/api-cms-2019-01-01-dir-cloud-products/) operations. When you call API operations, you must specify the following parameters: **Namespace**, **MetricName**, **Dimensions**, and **Period**. For more information, see [Appendix 1: Metrics](/help/en/cms/cloudmonitor-1-0/support/appendix-1-metrics).

### Monitoring metrics of basic GA instances

### **Acceleration region metrics**

**Metric**

**Description**

**MetricName**

**Dimensions**

**Statistics**

**GaBaseIpOutBps**

The bandwidth consumed by the current acceleration region when the basic GA instance accesses external resources. Unit: bit/s.

GaBaseIpSetOutBps

userId, instanceId, and regionId

Average

**GaBaseIpInBps**

The bandwidth consumed by clients to access the current acceleration region of a basic GA instance. Unit: bit/s.

GaBaseIpSetInBps

userId, instanceId, and regionId

Average

**GaBaseIpOutPps**

The number of packets sent by a basic GA instance per second in the current acceleration region. Unit: pps.

GaBaseIpSetOutPps

userId, instanceId, and regionId

Average

**GaBaseIpInPps**

The number of packets received by a basic GA instance per second in the current acceleration region. Unit: pps.

GaBaseIpSetInPps

userId, instanceId, and regionId

Average

**GaBaseIpSetOutBandwidthUtilization**

The ratio of the bandwidth consumed by a basic GA instance for external access from the current acceleration region to the total bandwidth of the acceleration region.

GaBaseIpSetOutBandwidthUtilization

userId, instanceId, and regionId

Average

**GaBaseIpSetInBandwidthUtilization**

The ratio of the bandwidth consumed by clients to access the current acceleration region of a basic GA instance to the total bandwidth of the acceleration region.

GaBaseIpSetInBandwidthUtilization

userId, instanceId, and regionId

Average

**GaBaseIpSetOutRateLimitDropPps**

The number of outbound packets dropped per second in the current acceleration region of a basic GA instance due to bandwidth throttling. Unit: pps.

GaBaseIpSetOutRateLimitDropPps

userId, instanceId, and regionId

Average

**GaBaseIpSetInRateLimitDropPps**

The number of inbound packets dropped per second in the current acceleration region of a basic GA instance due to bandwidth throttling. Unit: pps.

GaBaseIpSetInRateLimitDropPps

userId, instanceId, and regionId

Average

**GaBaseIpInBps**

The bandwidth consumed to access a basic GA instance. Unit: bit/s.

We recommend that you do not use this metric. You can use the **GaBaseIpSetInBps** metric.

GaBaseIpInBps

userId, instanceId, and regionId

Average

**GaBaseIpInPps**

The number of packets received by a basic GA instance per second. Unit: pps.

We recommend that you do not use this metric. You can use the **GaBaseIpSetInPps** metric.

GaBaseIpInPps

userId, instanceId, and regionId

Average

**GaBaseIpOutBps**

The bandwidth consumed by a basic GA instance to access external resources. Unit: bit/s.

We recommend that you do not use this metric. You can use the **GaBaseIpSetOutBps** metric.

GaBaseIpOutBps

userId, instanceId, and regionId

Average

**GaBaseIpOutPps**

The number of packets sent from a basic GA instance per second. Unit: pps.

We recommend that you do not use this metric. You can use the **GaBaseIpSetOutPps** metric.

GaBaseIpOutPps

userId, instanceId, and regionId

Average

### **Acceleration IP address metrics**

**Metric**

**Description**

**MetricName**

**Dimensions**

**Statistics**

**GaBaseGaIpOutBps**

The bandwidth consumed by the current accelerated IP address of a basic GA instance to access external resources. Unit: bit/s.

GaBaseGaIpOutBps

userId, instanceId, regionId, and gaIp

Average

**GaBaseGaIpInBps**

The bandwidth consumed by clients to access the current accelerated IP address of a basic GA instance. Unit: bit/s.

GaBaseGaIpInBps

userId, instanceId, regionId, and gaIp

Average

**GaBaseGaIpOutPps**

The number of packets sent from the current accelerated IP address of a basic GA instance per second. Unit: pps.

GaBaseGaIpOutPps

userId, instanceId, regionId, and gaIp

Average

**GaBaseGaIpInPps**

The number of packets received by the current accelerated IP address of a basic GA instance per second. Unit: pps.

GaBaseGaIpInPps

userId, instanceId, regionId, and gaIp

Average

**GaBaseGaIpOutBandwidthUtilization**

The ratio of the bandwidth consumed by the current accelerated IP address of a basic GA instance for external access to the total bandwidth of the acceleration region where the accelerated IP address is located.

GaBaseGaIpOutBandwidthUtilization

userId, instanceId, regionId, and gaIp

Average

**GaBaseGaIpInBandwidthUtilization**

The ratio of the bandwidth consumed to access the accelerated IP address of a basic GA instance to the total bandwidth of the acceleration region where the accelerated IP address is located.

GaBaseGaIpInBandwidthUtilization

userId, instanceId, regionId, and gaIp

Average

**GaBaseGaIpOutRateLimitDropPps**

The number of outbound packets that are dropped by the current accelerated IP address of a basic GA instance per second due to bandwidth throttling. Unit: pps.

GaBaseGaIpOutRateLimitDropPps

userId, instanceId, regionId, and gaIp

Average

**GaBaseGaIpInRateLimitDropPps**

The number of inbound packets that are dropped by the current accelerated IP address of a basic GA instance per second due to bandwidth throttling. Unit: pps.

GaBaseGaIpInRateLimitDropPps

userId, instanceId, regionId, and gaIp

Average

## **References**

-   After you create an alert rule, you can view and manage the alert rule in the CloudMonitor console. For more information, see [Alerting service](/help/en/cms/cloudmonitor-1-0/user-guide/alert-service/).
    
-   You can query the monitoring metrics of a Global Accelerator resource by calling CloudMonitor API operations.
    
    -   For more information, see [Cloud products](/help/en/cms/cloudmonitor-1-0/developer-reference/api-cms-2019-01-01-dir-cloud-products/).
        
    -   When you call API operations, you must specify the following parameters: **Namespace**, **MetricName**, **Dimensions**, and **Period**. For more information, see [Appendix 1: Metrics](/help/en/cms/cloudmonitor-1-0/support/appendix-1-metrics).
