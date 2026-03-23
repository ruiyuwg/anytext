Global Accelerator (GA) provides the origin probing feature that lets you create origin probing tasks for the listeners of GA to monitor the end-to-end network between detection points and origin servers. This helps you troubleshoot network issues and improve network quality.

## Origin probing overview

Origin probing checks the availability of an origin server. Origin probing simulates user requests by sending probe packets from detection points that are deployed around the world to your origin server. You can create origin probing tasks for the listeners of Global Accelerator (GA) instances.

By default, an origin probing task sends probe packets every 5 minutes. You can use the following features to monitor the availability of an origin server in real time:

-   Network diagnostics
    
    -   Real-time diagnostics: When the availability of an origin server decreases, you can use the real-time diagnostics feature to immediately troubleshoot network issues.
        
    -   Automatic diagnostics: When the availability of an origin server drops below a specific threshold, the system automatically checks network conditions. Data of anomalies is retained to facilitate subsequent troubleshooting.
        
-   Alert rules
    
    You can create alert rules for origin probing tasks. If the availability of an origin server drops below a specific threshold, an alert is triggered. This helps you implement real-time monitoring of end-to-end network quality.
    

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/1356666671/CAEQTxiBgMCdmImW2BkiIDNmZDA5OTkxYjAyODQyYTY4NTc1OGEyOGVkZjQwZDI53963382_20230830144006.372.svg)

### Billing

The origin probing feature is provided free of charge. If you create alert rules for origin probing tasks, your Internet service provider may charge you for text messages and voice messages. For more information, see [Overview](/help/en/cms/product-overview/overview-17#concept-2168158).

### Limits

-   You can create origin probing tasks only for standard GA instances whose specifications are Large Ⅰ or higher.
    
-   You cannot create origin probing tasks for UDP listeners.
    
-   The service port of the domain name that is monitored must fall within the port range of the listener.
    
-   Detection points support only the HTTP or HTTPS request method and the IPv4 protocol.
    
-   You can create up to five origin probing tasks and monitor up to five domain names for each GA instance.
    

## Prerequisites

-   Your GA instance is in the **Available** state.
    
-   If your GA instance uses the subscription billing method, you must purchase and attach a basic bandwidth plan.
    
-   An acceleration area, a listener, and an endpoint group are configured for the GA instance. For more information, see the following topics:
    
    -   [Add and manage acceleration areas](/help/en/ga/user-guide/add-and-manage-acceleration-areas#task-2382321)
        
    -   [Add and manage intelligent routing listeners](/help/en/ga/user-guide/add-and-manage-intelligent-routing-listeners#task-2382120)
        

## Procedure

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/1356666671/CAEQTxiBgMD8wYuW2BkiIDJkYTQ5NWU1OTU3MzRmODFhYTk5YTc1MzA2MzQyMDY53963382_20230830144006.372.svg)

## Create an origin probing task

1.  Log on to the [GA console](https://ga.console.alibabacloud.com/list).
    
2.  In the navigation pane on the left, click **Origin Probing**.
    
3.  On the **Origin Probing** page, click **Create Origin Probing Task**. In the **Create Origin Probing Task** dialog box, configure the parameters and click **OK**. Configure the following parameters.
    
    **Parameter**
    
    **Description**
    
    **Task Name**
    
    Enter a name for the origin probing task.
    
    **IP Protocol**
    
    Enter the IP version that is used by the origin probing task.
    
    Only **IPv4** is supported.
    
    **GA Instance**
    
    Select a GA instance that you want to use to run the origin probing task.
    
    You can select only standard GA instances.
    
    **Listener**
    
    Select a listener that you want to use to run the origin probing task.
    
    You cannot select UDP listeners.
    
    **Domain Name**
    
    Enter the domain name or accelerated IP address that you want to monitor.
    
    You can also enter a custom monitoring port. If you do not enter a monitoring port, the default monitoring port (port 80 or 443) is used. The monitoring port must fall within the port range of the listener.
    
    -   Domain name
        
        -   If you enter a domain name in the `<Domain name>:<Port (optional)>` or `http://<Domain name>:<Port (optional)>` format, you can enter a custom monitoring port. The default monitoring port is port 80.
            
            Examples: `example.com`, `http://example.com`, `http://example.com:8080`
            
        -   If you enter a domain name in the `https://<Domain name>:<Port (optional)>` format, you can enter a custom monitoring port. The default monitoring port is port 443.
            
            Examples: `https://example.com`, `https://example.com:8443`
            
    -   Accelerated IP address
        
        -   If you enter an accelerated IP address in the `<Accelerated IP address>:<Port (optional)>` or `http://<Accelerated IP address>:<Port (optional)>` format, you can enter a custom monitoring port. The default monitoring port is port 80.
            
            Examples: `47.254.XX.XX`, `http://47.254.XX.XX`, `http://47.0.XX.XX:22`
            
        -   If you enter an accelerated IP address in the `https://<Accelerated IP address>:<Port (optional)>` format, you can enter a custom monitoring port. The default monitoring port is port 443.
            
            Examples: `https://47.254.XX.XX`, `https://47.254.XX.XX:8443`
            
    
    You can enter multiple domain names or accelerated IP addresses at a time. Separate multiple domain names or accelerated IP addresses with line feeds. GA automatically creates an origin probing task for each domain name.
    
    **Frequency**
    
    Specify the probing frequency.
    
    The default value is **5 Minutes**, which specifies that a detection point in a region sends a probe packet to the domain name that you want to monitor every 5 minutes.
    
    **Automatic Diagnostics**
    
    Specify whether to enable the automatic diagnostics feature.
    
    After you enable the automatic diagnostics feature, the system automatically checks network connections when specific trigger conditions are met.
    
    **Trigger condition**
    
    Specify an availability rate as the trigger condition for the automatic diagnostics feature.
    
    You can configure **Trigger Condition** only if you enable the **Automatic Diagnostics** feature.
    
    For example, if you set the trigger condition to **Availability <** 90% **Triggers Network Link Diagnostics**, the system automatically checks the network connections between detection points and the origin server when the availability rate of the origin server drops below 90%.
    
    **Advanced Settings**
    
    **HTTP Method**
    
    Configure a request method for the origin probing task.
    
    1.  Valid values: **GET**, **POST**, and **HEAD**.
        
    2.  Configure the following parameters based on the selected request method:
        
        -   **Request Content**: Specify the content of the request sent by the origin probing task. The request content can contain multiple key-value pairs in the `key1=value1;key2=value2` format or a JSON string in the `{"test":"testValue"}` format.
            
            This parameter is required if you set the **HTTP Method** parameter to **POST**.
            
        -   **HTTP Request Header**: An HTTP header is a key-value pair in which the key and the value are separated by a colon (`key1:value1`). Each HTTP header occupies a line.
            
        -   **HTTP Status Codes That Indicate Healthy Status (≥ 400):** An HTTP status code that is greater than or equal to 400. HTTP status codes that are greater than or equal to 400 indicate that the status is abnormal. You can specify HTTP status codes that indicate that the status is normal in the text editor. Separate multiple status codes with commas (,).
            
    
    **Enable SNI**
    
    Enable or disable certificate validation. This feature is disabled by default.
    
    After you enable the SNI feature, you can associate the IP address of the server with multiple SSL certificates.
    
4.  In the **Create Origin Probing Task** message, click **OK**.
    
    To detect anomalies in real time, wait for 3 to 5 minutes and click **View How to Create Alert** to go to the CloudMonitor console and configure alert rules. For more information, see the [Create an alert rule](#section-p2d-l4o-cr7) section of this topic.
    

## Network diagnostics

1.  Log on to the [GA console](https://ga.console.alibabacloud.com/list).
    
2.  In the navigation pane on the left, click **Origin Probing**.
    
3.  On the **Origin Probing** page, find the origin probing task that you want to manage and click the ID of the task.
    
4.  On the details page of the origin probing task, click the **Network Diagnostics** tab, and then select a diagnostic method based on the following information:
    
    -   **Diagnose:** Click **Diagnose**.
        
    -   **Set Automatic Diagnostics:** Click **Set Automatic Diagnostics**. In the **Set Automatic Diagnostics** dialog box, configure **Status** and **Trigger Condition**, and then click **OK**.
        
    
    **Note**
    
    After you select a diagnostic method, the system immediately checks the network connections. The check takes approximately 1 minute.
    
5.  On the **Network Diagnostics** tab, view the diagnostic result.
    
    By default, the system displays the diagnostic results for the previous hour. You can specify a time period to filter and view the diagnostic results in the specified time period. The system can display the diagnostic results for the previous 30 days.![诊断结果](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/0486318661/p490618.png)
    
    **Item**
    
    **Description**
    
    **Diagnostic Status**
    
    -   **Successful**: No issues are detected.
        
    -   **Failed:** An issue is detected. You can troubleshoot the issue based on the **HTTP Diagnostic Code**, **HTTP Diagnostic Content**, and the **Diagnostic Result** parameters.
        
    
    **HTTP Diagnostic Code**
    
    The HTTP status code that is returned by the origin server.
    
    -   2xx: The request is processed as expected.
        
    -   3xx: The request is redirected and further operations are required to process the request.
        
    -   4xx: A client error occurred and the server cannot process the request.
        
    -   5xx: An error occurred when the server processed the request.
        
    -   600: An internal error occurred. For example, you did not configure a listener. You can view the Diagnostic Result parameter for more information.
        
    
    For more information about status codes from 2xx to 5xx, see the "Common HTTP status codes" section of the [Error codes and status codes](/help/en/cms/cloudmonitor-1-0/user-guide/error-codes-and-status-codes#section-czb-bfb-h2b) topic.
    
    **HTTP Diagnostic Content**
    
    The returned message obtained by the diagnosis.
    
    The returned message varies based on the issue. A message such as `404 Not Found` may be returned by the origin server when the requested page is not found. A message such as `Get http://www.aliyun.com/: dial tcp 106.11.XX.XX:80: connect: connection refused` may be returned when the Origin Server Port is not enabled.
    
    **Diagnostic Result**
    
    The description of the diagnostic result. Valid values:
    
    -   **All forward nodes work well**: No abnormalities found.
        
    -   **Endpoint network error.:** The origin server is abnormal. You must check whether the origin server is running as expected.
        
    -   **Public network error.:** An Internet error occurred, which is a network error that occurred when the client connected to the acceleration region.
        
    -   **Ga internal error.:** An internal error occurred. For example, an exception occurred when GA processed a request.
        
    -   **Ga has been deleted.:** The current GA instance is deleted.
        
    -   **Ga state is not stable.:** The current GA instance is in an unstable state, such as the Configuring state.
        
    -   **Ga has no listener configuration.:** No listener is configured for the current GA instance.
        
    -   **Missing endpoint configuration.:** No endpoint is configured.
        
    -   **Missing acceleration region configuration.:** No acceleration region is configured.
        
    -   **Missing endpointgroup configuration.:** No endpoint group is configured.
        
    

## Create an alert rule

1.  Log on to the [GA console](https://ga.console.alibabacloud.com/list).
    
2.  In the navigation pane on the left, click **Origin Probing**.
    
3.  On the **Origin Probing** page, click **Create Alert Rule**.
    
4.  On the **Alert Rule** page of the CloudMonitor console, click **Create Alert Rule**.
    
5.  In the **Create Alert Rule** panel, set the following parameters to create an alert rule and click **OK**.
    
    The following table describes the parameters that are related to this topic. For information about other parameters, see [Create an alert rule](/help/en/cms/cloudmonitor-1-0/user-guide/create-an-alert-rule#task-2181123).
    
    **Parameter**
    
    **Description**
    
    **Product**
    
    In this example, **Global Accelerator - Standard GA Instance** is selected.
    
    **Resource Scope**
    
    Select the range of resources to which the alert rule applies.
    
    -   **All Resources:** The alert rule applies to all standard GA instances in the current Alibaba Cloud account.
        
    -   **Application Groups:** The alert rule applies to all resources in the specified application group.
        
    -   **Instances:** The alert rule applies to a specific standard GA instance.
        
    
    If you select **Application Groups** or **Instances**, you must set **Associated Resources** to the standard GA instance for which you want to create the alert rule, or to the application group that contains the GA instance.
    
    **Rule Description**
    
    The description of the alert rule. If a metric meets a specific condition, an alert is triggered. To specify a condition, perform the following steps:
    
    1.  Click **Add Rule**.
        
    2.  In the **Add Rule Description** panel, set **Alert Rule**, **Metric Type**, **Metric**, and **Threshold and Alert Level**.
        
        In this example, an alert rule is created to monitor the availability of the origin server. Take note of the following parameters:
        
        -   **Metric:** Choose **standard\_task** > **GaApplicationMonitorAvailability**.
            
        -   **Dimension**: Select the ID of the target origin probing task.
            
        
    3.  Click **OK**.
        
    

## View the result

1.  Log on to the [GA console](https://ga.console.alibabacloud.com/list).
    
2.  In the navigation pane on the left, click **Origin Probing**.
    
3.  On the **Origin Probing** page, find the origin probing task that you want to manage and click the ID of the task.
    
4.  On the **Monitor** tab of the details page, view the origin probing result.
    
    ![探测结果](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/7419925661/p419958.png)
    
    -   You can view the availability of the origin server and alerting information in the **Overview** section.
        
        If you want to view alert rules and history alerts, you must create a threshold-triggered alert rule for the origin probing task. For more information, see the "[Create an alert rule](#section-p2d-l4o-cr7)" section of this topic.
        
    -   You can specify a time range in the **Availability Analysis** section to view the statistics about the availability of the origin server.
        
    -   You can select the detection points of different Internet service providers or select different probing results in the **Probing Result (Last 6 Hours)** section to view the details of the origin probing task. You can call the [DescribeApplicationMonitor](/help/en/ga/api-408463#doc-api-Ga-DescribeApplicationMonitor) operation to query the detection points of an origin probing task.
        
    

## Related operations

**Operation**

**Description**

Modify an origin probing task

1.  On the **Origin Probing** page, find the origin probing task that you want to modify and click **Modify** in the **Actions** column.
    
2.  In the **Modify Origin Probing Task** dialog box, you can change the name, listener, domain name, and modify the advanced settings of the origin probing task.
    
    For more information, see the "[Create an origin probing task](#section-a7l-8nf-5mu)" section of this topic.
    

Enable or disable an origin probing task

On the **Origin Probing** page, find the origin probing task that you want to manage and enable or disable the origin probing task in the **Status** column.

**Note**

After you delete the listener that is associated with an origin probing task, the origin probing task is disabled.

Delete an origin probing task

1.  On the **Origin Probing** page, find the origin probing task that you want to delete and click **Delete** in the **Actions** column.
    
2.  In the Delete message, click **OK**.
    

## Examples

Suppose that you use Global Accelerator to improve the user experience for your website, `example.com`. You can use the instance monitoring feature of Global Accelerator to view the bandwidth between the access regions and the endpoint regions.

To monitor the network quality of end-to-end connections from clients to origin servers in a more comprehensive and timely manner, you can configure origin probing for the website.

### Default probing

By default, an origin probing task sends probe packets every 5 minutes to monitor the availability of origin servers. The following figure shows the configuration of the origin probing task in this example.![源站探测](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/0486318661/p491803.png)

### Real-time monitoring

You can enable the automatic diagnostics feature and create alert rules to monitor the website in real time.

-   The following figure shows the configuration of the automatic diagnostics feature in this example. If the availability rate of the origin server drops below 95%, the system automatically checks network connections and retains data of anomalies.![自动诊断](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/1900418661/p491832.png)
    
-   The following figure shows the configuration of the alert rule in this example. If the availability rate of the origin server drops below a specific threshold, an alert notification is sent using the method that corresponds to the alert level. For example, if the availability of the origin server drops below 80% for three consecutive periods, an emergency alert notification is sent.![报警规则](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/0486318661/p491894.png)
    

## References

-   [CreateApplicationMonitor](/help/en/ga/api-createapplicationmonitor#doc-api-Ga-CreateApplicationMonitor): creates an origin probing task.
    
-   [UpdateApplicationMonitor](/help/en/ga/api-408458#doc-api-Ga-UpdateApplicationMonitor): modifies the configuration of an origin probing task.
    
-   [DisableApplicationMonitor](/help/en/ga/api-disableapplicationmonitor#doc-api-Ga-DisableApplicationMonitor): disables an origin probing task.
    
-   [EnableApplicationMonitor](/help/en/ga/api-enableapplicationmonitor#doc-api-Ga-EnableApplicationMonitor): enables an origin probing task.
    
-   [DeleteApplicationMonitor](/help/en/ga/api-deleteapplicationmonitor#doc-api-Ga-DeleteApplicationMonitor): deletes an origin probing task.
    
-   [ListApplicationMonitor](/help/en/ga/api-listapplicationmonitor#doc-api-Ga-ListApplicationMonitor): queries origin probing tasks.
    
-   [DescribeApplicationMonitor](/help/en/ga/api-408463#doc-api-Ga-DescribeApplicationMonitor): queries the details about an origin probing task.
    
-   [DetectApplicationMonitor](/help/en/ga/api-408464#doc-api-Ga-DetectApplicationMonitor): enables network diagnostics.
    
-   [ListApplicationMonitorDetectResult](/help/en/ga/api-listapplicationmonitordetectresult#doc-api-Ga-ListApplicationMonitorDetectResult): queries the diagnostic results of an origin probing task.
