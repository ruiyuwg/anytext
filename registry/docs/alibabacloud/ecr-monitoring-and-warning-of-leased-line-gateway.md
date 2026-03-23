Cloud Monitor collects traffic monitoring data in real time and generates visualized time series curve charts. CloudMonitor allows you to view the monitoring data of traffic between virtual border routers (VBRs), transit routers (TRs), or virtual private clouds (VPCs) and Express Connect Routers (ECRs), and the monitoring data of cross-region access traffic over ECRs. You can use the ECR monitoring feature to gain insight into the data changes in the runtime traffic and packets. You can also create threshold-triggered alert rules to receive alert notifications about data exceptions at the earliest opportunity and take corresponding measures.

## **View monitoring metrics of an ECR**

**Note**

You can view the monitoring data of traffic between VBRs, TRs, or VPCs and ECRs in the Express Connect console and the CloudMonitor console. You can view the monitoring data of cross-region access traffic over ECRs only in the CloudMonitor console.

## View monitoring metrics in the Express Connect console

1.  Log on to the [Express Connect console](https://expressconnect.console.alibabacloud.com).
    
2.  In the left-side navigation pane, click **Express Connect Router (ECR)**.
    
3.  On the **ECR** page, find the ECR that you want to manage and click the name of the ECR.
    
4.  On the details page of the ECR, click the **VBR**, **TR**, or **VPC** tab.
    
5.  Find the resource that you want to manage and click the ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/0182878171/p799241.png) icon in the **Monitor** column to view monitoring metrics.
    

**Note**

-   For more information about the metrics of ECRs, see the [Metrics](#6992a27b48cp4) section of this topic.
    
-   By default, the system displays monitoring data collected within the last hour. You can select other time ranges from the Time drop-down list. Supported time ranges are 3 hours, 6 hours, and 12 hours. You can also select **Custom** to specify a custom time range.
    
-   After you enable **Auto Refresh**, the monitoring chart is updated every minute.
    

## View monitoring metrics in the CloudMonitor console

1.  Log on to the [CloudMonitor console](https://cloudmonitor.console.alibabacloud.com/).
    
2.  In the left-side navigation pane, choose **Cloud Service Monitoring** > **Cloud Service Monitoring**.
    
3.  In the **Network** section of the **Cloud Service Monitoring** page, click **Express Connect Router**.
    
4.  On the **Express Connect Router** tab of the Express Connect Router page, find the ECR that you want to manage and click **Monitoring Charts** in the **Actions** column to view monitoring metrics.
    

**Note**

-   For more information about the metrics of ECRs, see the [Metrics](#6992a27b48cp4) section of this topic.
    
-   By default, the system displays monitoring data collected within the last hour. You can select other time ranges from the Time drop-down list. Supported time ranges are 3 hours, 6 hours, and 12 hours. You can also select **Custom** to specify a custom time range.
    

## **Create a threshold-triggered alert rule**

1.  Log on to the [Express Connect console](https://expressconnect.console.alibabacloud.com).
    
2.  In the top navigation bar, select a region. Then, click **Express Connect Router (ECR)** in the left-side navigation pane.
    
3.  On the **ECR** page, find the ECR that you want to manage and click the name of the ECR.
    
4.  On the details page of the ECR, find the resource that you want to manage and click the ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/0182878171/p799241.png) icon in the **Monitor** column.
    
5.  On the monitoring page, click **Set Alert Threshold**.
    
6.  On the **Alert Rules** page, click **Create Alert Rule**.
    
7.  In the **Create Alert Rule** panel, configure the parameters that are described in the following table and click **Confirm**.
    
    The following table describes the parameters that are related to this topic. For more information about other parameters, see [Create an alert rule](/help/en/cms/cloudmonitor-1-0/user-guide/create-an-alert-rule).
    
    **Parameter**
    
    **Description**
    
    **Product**
    
    The name of the cloud service that you want to monitor. In this example, **Express Connect Router** is selected.
    
    **Resource Range**
    
    The resources to which the alert rule applies.
    
    -   **All Resources**: The alert rule applies to all resources of the specified cloud service within the current Alibaba Cloud account.
        
    -   **Application Groups**: The alert rule applies to all resources in the specified application group of the specified cloud service.
        
    -   **Instances**: The alert rule applies to the specified resources of the specified cloud service within the current Alibaba Cloud account.
        
    
    **Rule Description**
    
    Specify the condition of the alert rule. An alert is triggered when the condition of the alert rule is met. To specify a condition, perform the following operations:
    
    1.  Click **Add Rule** and select a metric type from the drop-down list.
        
    2.  In the **Configure Rule Description** panel, enter a rule name in the **Alert Rule** field and configure the Metric Type parameter. Valid values of the Metric Type parameter:
        
        -   **Simple Metric**: Select a metric and set the threshold and alert level for the metric.
            
        -   **Combined Metrics**: Select an alert level and specify alert conditions for two or more metrics in the Multi-metric Alert Condition section.
            
            **Note**
            
            If a multi-metric alert rule is configured, the desired resource must have data on each metric. An alert can be triggered only if the related conditions are met. For example, if a multi-metric alert rule includes Internet metrics but the ECS instance is not configured with an elastic IP address (EIP), alerts cannot be triggered.
            
        -   **Expression**: Select an alert level and then configure an alert expression.
            
        -   **Dynamic Threshold**: For more information about dynamic thresholds, see [Overview](/help/en/cms/cloudmonitor-1-0/user-guide/overview-alert) and [Create dynamic threshold-triggered alert rules](/help/en/cms/cloudmonitor-1-0/user-guide/create-a-dynamic-threshold-alarm-rule).
            
            **Note**
            
            The dynamic threshold feature is in invitational preview. To use the feature, you must [submit a ticket](https://smartservice.console.alibabacloud.com/?spm=5176.2020520001.aliyun_topbar.18.dbd44bd3e4f845#/ticket/createIndex).
            
    3.  Click **OK**.
        
    

## **Metrics**

### **Metrics for ECR-VBR connections**

**Metric**

**Description**

**MetricName**

**Statistics**

**PkgsOutFromECRToVBR**

The number of packets that are sent from an ECR to a VBR per second.

Unit: packet/s.

PkgsOutFromECRToVBR

Value

**PkgsInFromVBRToECR**

The number of packets that are sent from a VBR to an ECR per second.

Unit: packet/s.

PkgsInFromVBRToECR

Value

**RateOutFromECRToVBR**

The rate of data transfer from an ECR to a VBR.

Unit: bit/s.

RateOutFromECRToVBR

Value

**RateInFromVBRToECR**

The rate of data transfer from a VBR to an ECR.

Unit: bit/s.

RateInFromVBRToECR

Value

**BytesOutFromECRToVBR**

The total amount of data that is transmitted from an ECR to a VBR.

Unit: bytes.

BytesOutFromECRToVBR

Value

**BytesInFromVBRToECR**

The total amount of data that is transmitted from a VBR to an ECR.

Unit: bytes.

BytesInFromVBRToECR

Value

### **Metrics for ECR-TR connections**

**Metric**

**Description**

**MetricName**

**Statistics**

**PkgsOutFromECRToTR**

The number of packets that are sent from an ECR to a TR per second.

Unit: packet/s.

PkgsOutFromECRToTR

Value

**PkgsInFromTRToECR**

The number of packets that are sent from a TR to an ECR per second.

Unit: packet/s.

PkgsInFromTRToECR

Value

**RateOutFromECRToTR**

The rate of data transfer from an ECR to a TR.

Unit: bit/s.

RateOutFromECRToTR

Value

**RateInFromTRToECR**

The rate of data transfer from a TR to an ECR.

Unit: bit/s.

RateInFromTRToECR

Value

**BytesOutFromECRToTR**

The total amount of data that is transmitted from an ECR to a TR.

Unit: bytes.

BytesOutFromECRToTR

Value

**BytesInFromTRToECR**

The total amount of data that is transmitted from a TR to an ECR.

Unit: bytes.

BytesInFromTRToECR

Value

### **Metrics for ECR-VPC connections**

**Metric**

**Description**

**MetricName**

**Statistics**

**PkgsOutFromECRToVPC**

The number of packets that are sent from an ECR to a VPC per second.

Unit: packet/s.

PkgsOutFromECRToVPC

Value

**PkgsInFromVPCToECR**

The number of packets that are sent from a VPC to an ECR per second.

Unit: packet/s.

PkgsInFromVPCToECR

Value

**RateOutFromECRToVPC**

The rate of data transfer from an ECR to a VPC.

Unit: bit/s.

RateOutFromECRToVPC

Value

**RateInFromVPCToECR**

The rate of data transfer from a VPC to an ECR.

Unit: bit/s.

RateInFromVPCToECR

Value

**BytesOutFromECRToVPC**

The total amount of data that is transmitted from an ECR to a VPC.

Unit: bytes.

BytesOutFromECRToVPC

Value

**BytesInFromVPCToECR**

The total amount of data that is transmitted from a VPC to an ECR.

Unit: bytes.

BytesInFromVPCToECR

Value

### **Metrics for cross-region access over ECRs**

**Metric**

**Description**

**MetricName**

**Statistics**

**CrossRegionECRLimitDropPps**

The number of packets that are dropped per second due to throttling when packets are sent from the source region to the destination region.

Unit: packet/s.

CrossRegionECRLimitDropPps

Value

**CrossRegionECRLimitDropRate**

The rate at which packets are dropped due to throttling when packets are sent from the source region to the destination region.

CrossRegionECRLimitDropRate

Value

**CrossRegionECRPps**

The number of packets that are sent from the source region to the destination region per second.

Unit: packet/s.

CrossRegionECRPps

Value

**CrossRegionECRRate**

The rate at which packets are sent from the source region to the destination region.

Unit: bit/s.

CrossRegionECRRate

Value

## **References**

For more information about CloudMonitor, see [What is CloudMonitor?](/help/en/cms/cloudmonitor-1-0/product-overview/what-is-cloudmonitor)
