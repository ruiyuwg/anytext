When you use LoongCollector to collect logs, you might encounter issues such as failed regular expression parsing, incorrect file paths, or traffic that exceeds the processing capacity of shards. Simple Log Service (SLS) provides a diagnostic feature to help you identify LoongCollector collection errors. For real-time monitoring, use built-in alert rules to receive notifications through channels such as DingTalk.

## Prerequisites

-   You have collected logs using LoongCollector. For more information, see [Collect logs from a host](/help/en/sls/host-text-log-collection-auto-install).
    
-   **Enable important logs for the destination project**
    
    This section describes how to enable this feature. For more information about service logs, see [Enable service logs](/help/en/sls/manage-service-logs#section-smj-zhr-m2b).
    
    1.  Log on to the [Simple Log Service console](https://sls.console.alibabacloud.com). In the project list, click the destination project. On the project details page, click the **Service Log** tab and then click **Enable Detailed Logs**.
        
    2.  In the Modify Service Log Settings panel, select **Important Logs** and **Job Operational Logs**, and then click **OK**.
        
        -   This operation automatically creates a project named log-service-{user-id}-{region} in the destination region.
            
        -   The ingestion, storage, query, and analysis of important logs and task run logs are free of charge. You are charged on a pay-as-you-go basis for operations such as data transformation and data shipping.
            
    

## **Diagnose runtime issues**

LoongCollector diagnostics are available in Advanced and Basic editions:

-   Advanced diagnostics (recommended): Provides an exception diagnosis dashboard. The dashboard clearly displays LoongCollector exceptions and supports queries over a longer time range.
    
-   Basic diagnostics: Provides collection exception information from the last hour.
    

**Use cases**

-   Abnormal LoongCollector status: Heartbeat failures, inactive processes, or SSL Certificate exceptions.
    
-   Log collection exceptions: Logs are not collected, latency is too high, or parsing fails, such as from regular expression matching errors.
    
-   Configuration errors: Incorrect file paths, mismatched machine group IP addresses, or cross-account permission issues.
    
-   Performance bottlenecks: The collection rate is close to or exceeds the default limit, such as 20 MB/s, which causes logs to be dropped.
    
-   Container log collection issues: Frequent pod restarts or rapid log rotation that leads to incomplete collection.
    
-   Plugin and custom collection issues: Failures in custom plugins, such as Grok parsing, or issues with HTTP data source collection.
    
-   Data reliability issues: Log loss, which can occur if LoongCollector is not running or log rotation is too fast.
    

**Procedure**

1.  Log on to the [Simple Log Service console](https://sls.console.alibabacloud.com). In the project list, click the destination project.
    
2.  Click ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/6698915571/p995244.png) Log Storage. In the Logstores list, move the mouse pointer over the destination logstore, and then click the ![Logtail配置管理](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/5123359951/p52766.png) icon.
    
3.  Click **Advanced Diagnostics** or **Basic Diagnostics** to view diagnostic information.
    
4.  View the diagnostic information.
    
    ## Basic Diagnostics
    
    The **Log Collection Errors** panel displays a list of all LoongCollector collection errors for the logstore. Click an error code to view its details. For more information, see [Common errors for data collection in SLS](/help/en/sls/log-collection-error-type#undefined).
    
    ## Advanced Diagnostics
    
    On the **LoongCollector/Logtail Exception Monitoring** page, view information such as **Active Collection Agent Count** and **Complete Error Information**. For more information about the **Collection Exception Monitoring** dashboard, see [View data reports](/help/en/sls/view-data-reports-2#section-7br-4e0-ctu). For more information about error codes, see [Common errors for data collection in Simple Log Service](/help/en/sls/log-collection-error-type#undefined).
    
5.  After you resolve the issues, check for new errors. Ignore historical errors, which are displayed until they expire. LoongCollector reports error messages at 10-minute intervals.
    
    > To view complete logs that were dropped due to parsing failures, check the LoongCollector runtime logs. The paths are as follows:
    
    > Host scenario: The `/usr/local/ilogtail/loongcollector.LOG` file on the server.
    
    > Container scenario: The `/usr/local/ilogtail/loongcollector.LOG` file in the container.
    

## **Monitor runtime status**

SLS provides built-in alert policies for real-time monitoring of LoongCollector. Configure these policies if you have the following monitoring needs:

-   Monitor for abnormal LoongCollector heartbeats
    
    Query the `__topic__:logtail_status` logs in `internal-diagnostic_log` to count the number of machines with normal LoongCollector heartbeats. Then configure an alert rule to trigger an alert if the heartbeat count falls below the expected value. This helps you troubleshoot machines that are down or have network issues.
    
-   Create alerts for LoongCollector collection errors
    
    Run the `__topic__: logtail_alarm` search statement to analyze the number of different types of errors that occurred in the last 15 minutes, such as unreadable files, insufficient permissions, and parsing failures. This helps you promptly identify and resolve configuration issues to prevent log loss.
    
-   Monitor for performance bottlenecks
    
    Use the Logtail Exception Monitoring dashboard to monitor the runtime status and resource usage of LoongCollector, such as CPU and memory. The dashboard displays the number of active LoongCollectors, a list of restarts, and all error messages. This helps you identify performance bottlenecks or abnormal restarts.
    
-   Monitor centralized log collection
    
    Use the LoongCollector File Collection Monitoring dashboard to monitor the log collection status in multi-account or multi-region scenarios. The dashboard displays the number of collected files, the average latency, and the parsing failure rate. This helps ensure the continuity of log collection.
    

**Procedure**

1.  Configure an action policy. An action policy defines how to send notifications when the status of a monitoring alert changes.
    
    1.  Log on to the [Simple Log Service console](https://sls.console.alibabacloud.com).
        
    2.  In the project list, find the project for which you enabled important logs and click the project name.
        
    3.  In the navigation pane on the left, click **![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/7684658571/p997657.png)Alerts**. On the **Alert Center** page, select **Notification Management** > **Action Policy**.
        
    4.  In the action policy list, find the `sls.app.logtail.builtin` action policy and click **Edit** in the **Actions** column.
        
    5.  In the **Edit Action Policy** dialog box, select and configure a [notification method](/help/en/sls/notification-methods#reference-2066133). Then click **Confirm**.
        
2.  Create an alert rule. An alert rule specifies monitoring conditions. An alert is triggered when the runtime status of LoongCollector meets the specified threshold.
    
    1.  On the **Alert Center** page, click **Alert Rules**, and then click the ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/3990694171/p773265.png) icon to the right of **Create Alert**.
        
    2.  Click **Create from Template**. In the **Create from Template** panel, click **Logtail Fault Monitor** one the left. In the panel on the right, click the target card.
        
    3.  In the **Create Alert** panel, review the preset parameters for the built-in alert monitoring rule and click **OK**. For more information, see [Create an alert rule](/help/en/sls/create-an-alert-monitoring-rule-for-logs).
