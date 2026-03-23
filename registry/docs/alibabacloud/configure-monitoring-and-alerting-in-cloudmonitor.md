DataHub supports alert notifications through CloudMonitor. You can create alert rules to monitor and receive alert notifications for DataHub metrics. The supported metrics include **readMetric**, **writeMetric**, and **Subscription and Consumption**.

## **Metrics**

DataHub supports monitoring for the following metrics:

**Name**

**Description**

**readMetric**

Data Consumption Requests per Second (Unit: count)

ReadThroughput (Unit: Byte/s)

ReadRawThroughput (Unit: Byte/s)

ReadFails (Unit: count)

ReadRps (Unit: count)

ReadLantency (Unit: microseconds)

**writeMetric**

WriteQps (Unit: count)

WriteThroughput (Unit: Byte/s)

WriteRawThroughput (Unit: Byte/s)

WriteFails (Unit: count)

WriteRps (Unit: count)

WriteLantency (Unit: microseconds)

**Subscription and Consumption**

consume record stacked (Unit: count)

**Note**

The total number of messages pending consumption for the current subscription across all shards.

consume delay time (Unit: seconds)

**Note**

The maximum consumption latency across all shards for the current subscription.

subscription delay time (Unit: seconds)

**Note**

The time difference between the subscription checkpoint and the current time.

**Important**

The subscription latency and consumption latency metrics are not available for monitoring when you read data from DataHub using the Kafka consumer protocol.

## View monitoring data

On the DataHub monitoring page, you can view the running status of resources and the usage of each metric.

1.  Log on to the [Cloud Monitor console](https://cloudmonitor.console.alibabacloud.com/).
    
2.  In the navigation pane on the left, choose **Cloud Resource Monitoring** > **Cloud Service Monitoring**.
    
3.  On the **Cloud Service Monitoring** page, choose **Analytics Computing** > **DataHub**.
    
4.  On the **DataHub** page, find the target resource and click **Monitoring Charts** in the **Actions** column.
    
    **Note**
    
    You can view monitoring data from the last 30 days.
    

## Set alert rules

On the DataHub monitoring page, you can set alert rules for resources. When a resource meets the conditions of an alert rule, Cloud Monitor automatically sends an alert notification.

1.  Log on to the [Cloud Monitor console](https://cloudmonitor.console.alibabacloud.com/).
    
2.  In the navigation pane on the left, choose **Cloud Resource Monitoring** > **Cloud Service Monitoring**.
    
3.  On the **Cloud Service Monitoring** page, choose **Analytics Computing** > **DataHub**.
    
4.  On the DataHub page, you can create an alert rule using one of the following methods.
    
    -   Click **Create Alert Rule**.
        
        1.  In the **Create Alert Rule** panel, select the **Resource Range** for the rule and set the alert rule parameters.
            
        2.  Click **Confirm**.
            
    -   In the **Actions** column of the target resource, click **Alert Rules**. On the **Alert Rules** page, click **Create Alert Rule**.
        
        1.  In the **Create Alert Rule** panel, set the alert rule parameters.
            
        2.  Click **Confirm**.
            
    
    For more information about the parameters, see [Create an alert rule](/help/en/cms/cloudmonitor-1-0/user-guide/create-an-alert-rule#task-1920117).
    

## View alert rules

On the DataHub monitoring page, you can view all alert rules in DataHub.

1.  Log on to the [Cloud Monitor console](https://cloudmonitor.console.alibabacloud.com/).
    
2.  In the navigation pane on the left, choose **Cloud Resource Monitoring** > **Cloud Service Monitoring**.
    
3.  On the **Cloud Service Monitoring** page, choose **Analytics Computing** > **DataHub**.
    
4.  On the DataHub monitoring page, click **View Alert Rules**.
