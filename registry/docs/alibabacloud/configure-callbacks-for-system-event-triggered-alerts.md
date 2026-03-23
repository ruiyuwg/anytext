In addition to emails, Cloud Monitor provides the alert callback feature to send alert notifications. You can flexibly handle alert events by using callback URLs. This topic describes how to use the alert callback feature to send the notifications for system event-triggered alerts to your O&M system or notification system.

## Prerequisites

The public URL of your O&M system or notification system is available. The URL can be used to access your O&M system or notification system.

## Background information

**Note**

The system event-triggered alert rule feature of the old version is no longer upgraded and will be phased out. We recommend that you use the alert callback feature in event subscription. For more information, see [Configure callbacks for system event-triggered alerts (recommended)](/help/en/cms/cloudmonitor-1-0/user-guide/configure-callbacks-for-system-event-triggered-alerts-recommended).

Cloud Monitor sends alert notifications to the specified URL by using the HTTP or HTTPS POST method. You must add the following CIDR blocks to the whitelist of your firewall. After you receive alert notifications, you can resolve issues based on the content of the alert notifications.

If an alert callback fails, Cloud Monitor retries up to three times. The timeout period of each callback request is 5 seconds.

## Procedure

1.  Log on to the [Cloud Monitor console](https://cloudmonitor.console.alibabacloud.com/).
    
2.  In the left-side navigation pane, choose **Event Center** > **System Event**.
    
3.  On the **Event Monitoring** tab, click **Old Event Alarm Rules** in the upper-right corner.
    
4.  Find the alert rule that you want to modify and click **Modify** in the **Actions** column.
    
    **Note**
    
    You can also create alert rules for system events. For more information, see [Create a system event-triggered alert rule](/help/en/cms/cloudmonitor-1-0/user-guide/create-a-system-event-triggered-alert-rule-1#steps-h8j-zc2-m3j).
    
5.  At the bottom of the **Create/Modify Event-triggered Alert Rule** panel, select **URL Callback**.
    
6.  Set **Request Method** to **POST** and enter a callback URL.
    
    To test the connectivity of an alert callback URL, perform the following steps:
    
    1.  Click **Test** next to the callback URL.
        
    2.  In the **Webhook Test** panel, set **Language** to **Simplified Chinese** or **English**, and check and troubleshoot the connectivity of the callback URL based on the returned status code and test result details.
        
    3.  Click **Close**.
        
7.  Click **OK**.
    
8.  Test the event-triggered alert rule.
    
    1.  Find the alert rule that you want to test, click the ![更多](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/4727099761/p595454.png) icon in the **Actions** column, and then click **Test**.
        
    2.  In the **Create Event Test** panel, select the event to be tested.
        
    3.  Click **OK**.
        
        Cloud Monitor automatically sends a test alert notification to the alert contact.
        

## Result

If the alert rule is triggered, Cloud Monitor sends an alert notification to the callback URL by using the HTTP or HTTPS POST method. The following table describes the parameters that are configured in the POST request.

**Parameter**

**Data type**

**Description**

traceId

String

The ID of the event that the cloud service reports to Cloud Monitor for troubleshooting.

resourceId

String

The resource ID.

product

String

The name of the cloud service. For more information about the cloud services that support system event-triggered alerts, see [Appendix 2: System events](/help/en/cms/cloudmonitor-1-0/user-guide/appendix-2-system-events#concept-2500373).

ver

String

The event version.

instanceName

String

The instance name of the specified cloud service.

level

String

The severity level of the event. Valid values:

-   CRITICAL
    
-   WARN
    
-   INFO
    

groupId

String

The ID of the application group.

eventTime

String

The timestamp that indicates the time when the event occurs, in the date format. Specify the time in the ISO 8601 standard in the `yyyyMMddTHHmmss.SSSZ` format. The time must be in UTC.

userId

String

The ID of the current account.

content

String

The event content.

regionId

String

The region ID.

name

String

The event name. For more information about the names of the events that are supported by each Alibaba Cloud service, see [Appendix 2: System events](/help/en/cms/cloudmonitor-1-0/user-guide/appendix-2-system-events#concept-2500373).

ruleName

String

The name of the alert rule.

id

String

The event ID.

status

String

The status of the event. For more information about the event status of each Alibaba Cloud service, see [Appendix 2: System events](/help/en/cms/cloudmonitor-1-0/user-guide/appendix-2-system-events#concept-2500373).

Sample POST request

```
{
    "resourceId":"acs:ecs:cn-hangzhou:130013558060****:instance/i-j6c9pagb27uzlikj****",
    "product":"ECS",
    "ver":"1.0",
    "instanceName":"zabank-prd-infra-ZAGateway-service-0****",
    "level":"INFO",
    "groupId":"",
    "eventType":"StatusNotification",
    "userId":"130013558060****",
    "content":{
        "resourceId":"i-j6c9pagb27uzlikj****",
        "instanceName":"zabank-prd-infra-ZAGateway-service-0****",
        "instanceType":"ecs.c6e.large",
        "state":"Deleted",
        "privateIpAddress":"10.48.XX.XX",
        "resourceType":"ALIYUN::ECS::Instance"
    },
    "regionId":"cn-hangzhou",
    "eventTime":"20230217T103516.475+0800",
    "name":"Instance:StateChange",
    "ruleName":"ECS Event-triggered Alert Rule (New)",
    "id":"bd5f9913-ec1d-412b-ace3-7a3618d7****",
    "status":"Normal"
}
```

## **References**

-   [Use the alert callback feature to send notifications about threshold-triggered alerts](/help/en/cms/cloudmonitor-1-0/user-guide/use-the-alert-callback-feature-to-send-notifications-about-threshold-triggered-alerts)
    
-   [Receive alert notifications in the PagerDuty console](/help/en/cms/cloudmonitor-1-0/use-cases/receive-alarm-notifications-via-pagerduty)
