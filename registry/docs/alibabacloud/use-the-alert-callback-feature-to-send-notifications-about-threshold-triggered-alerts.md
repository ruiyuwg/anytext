Cloud Monitor can send alerts by using emails or webhooks. Cloud Monitor can also send alerts by using the alert callback feature. You can handle alerts flexibly. This topic describes how to use the alert callback feature to send notifications about threshold-triggered alerts to your O&M system or notification system.

## Prerequisites

The public URL of your O&M system or notification system is available. The URL can be used to access your O&M system or notification system.

## Background information

Cloud Monitor sends alert notifications to the specified URL by using the HTTP or HTTPS POST method. You must add the following CIDR blocks to the whitelist of your firewall: 47.74.206.0/26, 47.74.206.64/26, 47.74.206.128/26, 47.74.206.192/26, and 8.222.159.116. After you receive alert notifications, you can resolve issues based on the content of the alert notifications.

If an alert callback fails, Cloud Monitor retries up to three times. The timeout period of each callback request is 5 seconds.

You cannot configure multiple threshold-triggered alert callbacks at a time in the Cloud Monitor console. To configure multiple threshold-triggered alert callbacks, perform the following steps:

-   Call the CreateMetricRuleTemplate operation to create an alert template, specify a callback URL, and then call the ApplyMetricRuleTemplate operation to apply the alert template to a specified application group. For more information, see [CreateMetricRuleTemplate](/help/en/cms/cloudmonitor-1-0/api-createmetricruletemplate#doc-api-Cms-CreateMetricRuleTemplate) and [ApplyMetricRuleTemplate](/help/en/cms/cloudmonitor-1-0/api-applymetricruletemplate#doc-api-Cms-ApplyMetricRuleTemplate).
    
-   Call the PutGroupMetricRule operation to create an alert rule for or modify the alert rule of the application group, and specify a callback URL. For more information, see [PutGroupMetricRule](/help/en/cms/cloudmonitor-1-0/api-putgroupmetricrule#doc-api-Cms-PutGroupMetricRule).
    

## Procedure

1.  Log on to the [Cloud Monitor console](https://cloudmonitor.console.alibabacloud.com/).
    
2.  In the left-side navigation pane, choose **Alerts** > **Alert Rules**.
    
3.  On the **Alert Rules** page, find the alert rule that you want to modify and click **Modify** in the **Actions** column.
    
    **Note**
    
    You can also create an alert rule. For more information, see [Create an alert rule](/help/en/cms/cloudmonitor-1-0/user-guide/create-an-alert-rule#task-1920117).
    
4.  In the **Modify Alert Rule** panel, enter a callback URL in the Alert Callback field.
    
    To test the connectivity of an alert callback URL, perform the following steps:
    
    1.  Click **Test** next to the callback URL.
        
        In the **Webhook Test** panel, you can check and troubleshoot the connectivity of the alert callback URL based on the returned status code and test result details.
        
        **Note**
        
        To obtain the details of the test result, configure the **Test Template Type** and **Language** parameters and click **Test**.
        
    2.  Click **Close**.
        
    
5.  Click **Confirm**.
    

## Result

If the alert rule is triggered, Cloud Monitor sends an alert notification to the callback URL by using the HTTP or HTTPS POST method. The following table describes the parameters that are configured in the POST request.

**Note**

Parameters may be added to the POST request. Your webhook must be compatible with the new parameters.

**Parameter**

**Data type**

**Description**

alertName

String

The alert name.

alertState

String

The alert status. Valid values:

-   OK: normal.
    
-   ALERT: The alert is triggered.
    
-   INSUFFICIENT\_DATA: No data is found.
    

curValue

String

The value of the metric when the alert is triggered or cleared. The metric is specified in the alert rule based on which the alert is triggered.

dimensions

String

The object for which the alert is triggered. Example: `{userId=110803419679****, instanceId=i-8psdh7l6lphbn10l****}`.

expression

String

The alert conditions.

groupId

String

The ID of the application group.

instanceName

String

The instance name.

lastTime

String

The alert duration. Unit: minutes.

metricName

String

The metric name. For more information about metric names, see the **Metric Name** parameter in [Appendix 1: Metrics](/help/en/cms/cloudmonitor-1-0/support/appendix-1-metrics#concept-2486491).

metricProject

String

The name of the cloud service. `metricProject` is the same as `namespace`. For more information about the names of cloud services, see [Appendix 1: Metrics](/help/en/cms/cloudmonitor-1-0/support/appendix-1-metrics#concept-2486491).

namespace

String

The namespace of the cloud service.

The callback `namespace` is the same as `metricProject` for most cloud services. For more information about the namespaces of cloud services, see [Appendix 1: Metrics](/help/en/cms/cloudmonitor-1-0/support/appendix-1-metrics#concept-2486491).

The namespaces of a few cloud services are different from the callback `namespace`. For more information about the mappings, see [Table 1. Mappings between the namespaces of cloud services and callback namespaces](#ce2a47b0053k7).

preTriggerLevel

String

The severity level of the alert that is last triggered. Valid values:

-   CRITICAL
    
-   WARN
    
-   INFO
    

productGroupName

String

The name of the application group.

rawMetricName

String

The metric ID. For more information about metric IDs, see the **Metric Id** parameter in [Appendix 1: Metrics](/help/en/cms/cloudmonitor-1-0/support/appendix-1-metrics#concept-2486491).

regionId

String

The region ID.

regionName

String

The region name.

ruleId

String

The ID of the alert rule based on which the current alert is triggered.

timestamp

String

The time when the current alert is triggered. The value is a timestamp.

transId

String

The ID of the resource in the rule from the time when an alert is triggered to the time when the alert is cleared.

triggerLevel

String

The severity level of the current alert. Valid values:

-   CRITICAL
    
-   WARN
    
-   INFO
    

unit

String

The unit of the metric. For more information about the units of metrics, see the **Unit** parameter in [Appendix 1: Metrics](/help/en/cms/cloudmonitor-1-0/support/appendix-1-metrics#concept-2486491).

userId

String

The user ID.

Table 1. Mappings between the namespaces of cloud services and callback namespaces

**Namespace of a cloud service**

**Callback namespace**

acs\_ecs\_dashboard

acs\_ecs

acs\_slb\_dashboard

acs\_slb

acs\_rds\_dashboard

acs\_rds

acs\_oss\_dashboard

acs\_oss

acs\_sls\_dashboard

acs\_sls

acs\_ess\_dashboard

acs\_ess

acs\_containerservice\_dashboard

acs\_containerservice

acs\_apigateway\_dashboard

acs\_apigateway

acs\_redis\_dashboard

acs\_kvstore

acs\_ocs\_new

acs\_ocs

acs\_mns\_new

acs\_mns

Sample POST request

```
Content-Type: application/x-www-form-urlencoded; charset=UTF-8
expression=$Average>=95&metricName=Host.mem.usedutilization&instanceName=instance-name-****&signature=eEq1zHuCUp0XSmLD8p8VtTKF****&metricProject=acs_ecs&userId=110803419679****&curValue=97.39&alertName=Basic monitoring-ECS-Memory usage&namespace=acs_ecs_dashboard&triggerLevel=WARN&alertState=ALERT&preTriggerLevel=WARN&ruleId=applyTemplateee147e59-664f-4033-a1be-e9595746****&dimensions={userId=110803419679****, instanceId=i-8psdh7l6lphbn10l****}&timestamp=1508136760&productGroupName=test_Group&groupId=1666****&lastTime=2 minutes&rawMetricName=cpu_total&regionId=cn-hangzhou&regionName=China (Hangzhou)&transId=53767d2a-ae72-11ed-b2ca-00163e2c****&unit=%
```
