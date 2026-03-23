Use Network Intelligence Service (NIS) to promptly receive notifications about network anomaly events. Then, troubleshoot instances, paths, and traffic to identify the root causes of anomalies and resolve them precisely.

## **Scenarios**

NIS identifies network anomalies and determines their root causes by troubleshooting instances, paths, and traffic, ensuring business continuity.

## **Monitor Event Center to Identify Anomalies**

Alibaba Cloud proactively detects network events based on custom event definitions, sends alerts, and displays the results in the console. Monitor the Event Center to receive alerts for network anomalies—such as packet loss caused by threshold breaches—and identify abnormal instances. For more information, see [Event Center Overview](/help/en/nis/user-guide/work-with-event-center/).

1.  Log on to the [NIS console](https://nis.console.alibabacloud.com/).
    
2.  In the left-side navigation pane, click **Event Center**.
    
3.  On the **Event Center** page, you can see that TransitRouter instances have failed and the bandwidth of an Elastic IP Address (EIP) has exceeded its limit.
    
    ![image.png](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/4993002071/p729186.png)
    

## **Initiate Real-time Diagnostics for Abnormal Instances**

You can initiate diagnostics for abnormal TR instances detected by the Event Center to obtain exception reports and handling suggestions. For more information, see [Work with instance diagnostics](/help/en/nis/user-guide/work-with-instance-diagnostics).

1.  Log on to the [NIS console](https://nis.console.alibabacloud.com/).
    
2.  In the left-side navigation pane, choose **Self-diagnostics** > **Instance Diagnostics**.
    
3.  On the **Instance Diagnostics** page, click **Diagnose Instance**.
    
4.  In the **Instance Health Diagnostics** dialog box, configure the instance information, then click **Start**.
    
5.  In the ****Diagnostic Details**** panel, view the diagnostic progress, result statistics, and specific diagnostic details for the instance.
    
    ![image.png](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/4993002071/p729187.png)
    
    ![image.png](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/4993002071/p729188.png)
    

## **Troubleshoot Bandwidth Saturation Issues**

When business bandwidth utilization remains consistently high, use NIS Traffic Analyzer to analyze traffic composition and quickly identify instances or IP addresses consuming excessive bandwidth.

1.  [Create an NIS Traffic Analyzer](/help/en/nis/user-guide/traffic-analyzer-management#39d1693bce6yp)
    
2.  [Create VPC or TR flow logs as data sources](/help/en/nis/user-guide/data-source-management#fdb16cbc67p7b)
    
3.  View the [VPC Traffic Chart](/help/en/nis/user-guide/view-vpc-traffic-analysis-details) or [TR Traffic Chart](/help/en/nis/user-guide/tr-flow-analysis), and use **TopN Traffic Trend** to identify instances or IP addresses consuming high bandwidth.
    

## **Troubleshoot Network Connectivity Issues**

If a network connection fails, use path analysis to identify breakpoints. For more information, see [Using Path Analysis](/help/en/nis/user-guide/work-with-reachability-analyzer).

1.  Log on to the [NIS console](https://nis.console.alibabacloud.com/).
    
2.  On the **Reachability Analyzer** page, click **Start Analyzing**.
    
3.  On the **Start Analysis** page, configure the parameter information.
    
    ![image.png](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/4993002071/p729060.png)
    
4.  Select whether to save the path. The default value is **No**.
    
5.  Click **Start Analysis** and view the Internet analysis results.
    
    ![image.png](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/4993002071/p729381.png)
