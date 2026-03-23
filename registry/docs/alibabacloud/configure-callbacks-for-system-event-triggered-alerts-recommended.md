In addition to email, DingTalk, Lark, WeCom, and Slack, Cloud Monitor provides the alert callback feature to help you send alert notifications. This way, you can handle event-triggered alerts more flexibly. This topic describes how to use the callback feature of system event-triggered alerts to integrate alert notifications sent by Cloud Monitor into an existing O&M or notification system. In this topic, a system event is subscribed to and pushed to a webhook URL.

## Prerequisites

The public URL of your O&M system or notification system is available. The URL can be used to access your O&M system or notification system.

## **Background information**

Cloud Monitor sends alert notifications to the specified URL by using the HTTP or HTTPS POST method. You must add the following CIDR blocks to the whitelist of your firewall. After you receive alert notifications, you can resolve issues based on the content of the alert notifications.

## **Procedure**

1.  Create a push channel.
    
    In this topic, a webhook URL is used as a push channel.
    
    1.  Log on to the [Cloud Monitor console](https://cloudmonitor.console.alibabacloud.com/).
        
    2.  In the left-side navigation pane, choose **Event Center** > **Event Subscription**.
        
    3.  On the **Event Subscription** page, click the **Push Channel** tab.
        
    4.  On the **Push Channel** tab, click **Create Push Channel**.
        
    5.  In the **Create Push Channel** panel, enter a channel name, set **Target type** to **Webhook**, set **Request method** to **POST**, set **Data format** to **JSON**, and set the **Address** parameter to the callback URL. Leave other parameters empty.
        
    6.  Click **OK**.
        
2.  Create a subscription policy.
    
    In this topic, a system event that is related to Elastic Compute Service (ECS) instances and named **Instance:InstanceFailure.Reboot:Executing** is subscribed to and pushed to a webhook URL.
    
    1.  Click the **Subscription Policy** tab.
        
    2.  On the **Subscription Policy** tab, click **Create Subscription Policy**.
        
    3.  On the **Create Subscription Policy** page, configure the parameters.
        
        -   **Basic information**: Enter a name for the subscription policy.
            
            -   **Alert Subscription**: Set the **Subscription Type** parameter to **System Events**. In the **Subscription Scope** section, set the **Products** parameter to **Elastic Compute Service (ECS)** and the **Event name** parameter to **Instance:InstanceFailure.Reboot:Executing**. Leave other parameters empty. The **Instance:InstanceFailure.Reboot:Executing** event indicates that the system events of all ECS instances within the current Alibaba Cloud account are restarted due to instance failures.
                
                **Note**
                
                For more information about the system events supported by ECS instances, see [Elastic Compute Service (ECS)](https://cloudmonitor.console.alibabacloud.com/metric-meta//ecs/event).
                
        -   **Combined Noise Reduction**: Use the default settings.
            
        -   **Notification**: Leave the **Notification Configuration** parameter empty. Use the default settings of the **Custom Notification Method** parameter.
            
            **Note**
            
            As no alert contact group is set for the **Notification Configuration** parameter, no alert contacts receive alert notifications.
            
        -   **Push and Integration**: Select the push channel created in [Step 1](#fef9ec5cbcq6e).
            
    4.  Click **Submit**.
        
3.  Debug event subscription.
    
    1.  On the **Subscription Policy** tab, click **Debug Event Subscription**.
        
    2.  In the **Create Event Debugging** panel, set the **Products** parameter to **Elastic Compute Service (ECS)** and the **Name** parameter to **Instance:InstanceFailure.Reboot:Executing**.
        
        Cloud Monitor automatically generates the debugging content in the JSON format.
        
    3.  Click **OK**.
        
        The **Operation successful** message is returned. Cloud Monitor automatically sends a test alert notification to the specified webhook URL.
        

## **Result**

If a system event triggers an alert, Cloud Monitor sends the alert information to the specified webhook URL. The request methods supported by the webhook URL include POST and GET. Examples:

-   POST JSON
    
    Parameter name: `body`.
    
    Sample code:
    
    ```
    {
      "userInfo": {
        "aliyunId": "test",
        "userIdSec": "te***st",
        "aliyunIdSec": "test***test",
        "nickName": "test",
        "nickNameSec": "te***st",
        "userName": "test",
        "userId": "test",
        "userNameSec": "te***st"
      },
      "subscription": {
        "subscriptionUuid": "testid",
        "conditions": [
          {
            "field": "source",
            "op": "EQ",
            "value": "SYS_EVENT"
          },
          {
            "field": "product",
            "op": "IN",
            "value": "ECS,Redis,RDS,Config,tag"
          }
        ],
        "relation": "AND"
      },
      "batchId": "testbatchid",
      "alert": {
        "alertStatus": "TRIGGERED",
        "groupId": "",
        "source": "SYS_EVENT",
        "eventContentMap": {
          "extensions": {
            "agentVersion": "test-version",
            "region": "cn-hangzhou",
            "azone": "cn-hangzhou-i",
            "uptime": 23000
          },
          "vmName": "i-testhost",
          "impact": "Alert",
          "opsCode": "InstanceStatusChange",
          "bizEventId": "test-event-id"
        },
        "dedupId": "test-id",
        "eventName": "CloudAssistant:FirstHeartbeat",
        "arn": "acs:ecs:cn-hangzhou:testuser:instance/i-testhost",
        "timestamp": 1704780333000,
        "traceId": "testid",
        "severity": "INFO",
        "product": "ECS",
        "eventRawContent": "{}",
        "eventType": "Notification",
        "userId": "test",
        "meta": {
          "sysEventMeta": {
            "regionNameEn": "cn-hangzhou",
            "resourceId": "acs:ecs:cn-hangzhou:test:instance/i-testhost",
            "product": "ECS",
            "eventNameEn": "CloudAssistant:FirstHeartbeat",
            "instanceName": "i-testhost",
            "level": "INFO",
            "resource": "",
            "regionNameZh": "China (Hangzhou)",
            "groupId": "",
            "serviceTypeEn": "ECS",
            "eventType": "Notification",
            "serviceTypeZh": "Elastic Compute Service (ECS)",
            "regionId": "cn-hangzhou",
            "eventTime": "20240109T140533.642+0800",
            "name": "CloudAssistant:FirstHeartbeat",
            "id": "testid",
            "status": "Normal",
            "eventNameZh": "CloudAssistant:FirstHeartbeat"
          }
        }
      },
      "severity": "INFO",
      "strategyName": "eventwebhook",
      "userId": "test",
      "time": 1704780333000
    }
    ```
    
-   GET JSON
    
    Parameter name: `data`.
    
    Sample code:
    
    ```
    {
      "userInfo": {
        "aliyunId": "test",
        "userIdSec": "te***st",
        "aliyunIdSec": "test***test",
        "nickName": "test",
        "nickNameSec": "te***st",
        "userName": "test",
        "userId": "test",
        "userNameSec": "te***st"
      },
      "subscription": {
        "subscriptionUuid": "testid",
        "conditions": [
          {
            "field": "source",
            "op": "EQ",
            "value": "SYS_EVENT"
          },
          {
            "field": "product",
            "op": "IN",
            "value": "ECS,Redis,RDS,Config,tag"
          }
        ],
        "relation": "AND"
      },
      "batchId": "testbatchid",
      "alert": {
        "alertStatus": "TRIGGERED",
        "groupId": "",
        "source": "SYS_EVENT",
        "eventContentMap": {
          "extensions": {
            "agentVersion": "test-version",
            "region": "cn-hangzhou",
            "azone": "cn-hangzhou-i",
            "uptime": 23000
          },
          "vmName": "i-testhost",
          "impact": "Alert",
          "opsCode": "InstanceStatusChange",
          "bizEventId": "test-event-id"
        },
        "dedupId": "test-id",
        "eventName": "CloudAssistant:FirstHeartbeat",
        "arn": "acs:ecs:cn-hangzhou:testuser:instance/i-testhost",
        "timestamp": 1704780333000,
        "traceId": "testid",
        "severity": "INFO",
        "product": "ECS",
        "eventRawContent": "{}",
        "eventType": "Notification",
        "userId": "test",
        "meta": {
          "sysEventMeta": {
            "regionNameEn": "cn-hangzhou",
            "resourceId": "acs:ecs:cn-hangzhou:test:instance/i-testhost",
            "product": "ECS",
            "eventNameEn": "CloudAssistant:FirstHeartbeat",
            "instanceName": "i-testhost",
            "level": "INFO",
            "resource": "",
            "regionNameZh": "China (Hangzhou)",
            "groupId": "",
            "serviceTypeEn": "ECS",
            "eventType": "Notification",
            "serviceTypeZh": "Elastic Compute Service (ECS)",
            "regionId": "cn-hangzhou",
            "eventTime": "20240109T140533.642+0800",
            "name": "CloudAssistant:FirstHeartbeat",
            "id": "testid",
            "status": "Normal",
            "eventNameZh": "CloudAssistant:FirstHeartbeat"
          }
        }
      },
      "severity": "INFO",
      "strategyName": "eventwebhook",
      "userId": "test",
      "time": 1704780333000
    }
    ```
    
-   POST FORM and GET FORM
    
    **Parameter**
    
    **Description**
    
    userInfo
    
    ```
    {
        "aliyunId": "test",
        "userIdSec": "te***st",
        "aliyunIdSec": "test***test",
        "nickName": "test",
        "nickNameSec": "te***st",
        "userName": "test",
        "userId": "test",
        "userNameSec": "te***st"
     }
    ```
    
    subscription
    
    ```
    {
        "subscriptionUuid": "testid",
        "conditions": [
          {
            "field": "source",
            "op": "EQ",
            "value": "SYS_EVENT"
          },
          {
            "field": "product",
            "op": "IN",
            "value": "ECS,Redis,RDS,Config,tag"
          }
        ],
        "relation": "AND"
      }
    ```
    
    alert
    
    ```
     {
        "alertStatus": "TRIGGERED",
        "groupId": "",
        "source": "SYS_EVENT",
        "eventContentMap": {
          "extensions": {
            "agentVersion": "test-version",
            "region": "cn-hangzhou",
            "azone": "cn-hangzhou-i",
            "uptime": 23000
          },
          "vmName": "i-testhost",
          "impact": "Alert",
          "opsCode": "InstanceStatusChange",
          "bizEventId": "test-event-id"
        },
        "dedupId": "test-id",
        "eventName": "CloudAssistant:FirstHeartbeat",
        "arn": "acs:ecs:cn-hangzhou:testuser:instance/i-testhost",
        "timestamp": 1704780333000,
        "traceId": "testid",
        "severity": "INFO",
        "product": "ECS",
        "eventRawContent": "{}",
        "eventType": "Notification",
        "userId": "test",
        "meta": {
          "sysEventMeta": {
            "regionNameEn": "cn-hangzhou",
            "resourceId": "acs:ecs:cn-hangzhou:test:instance/i-testhost",
            "product": "ECS",
            "eventNameEn": "CloudAssistant:FirstHeartbeat",
            "instanceName": "i-testhost",
            "level": "INFO",
            "resource": "",
            "regionNameZh": "China (Hangzhou)",
            "groupId": "",
            "serviceTypeEn": "ECS",
            "eventType": "Notification",
            "serviceTypeZh": "Elastic Compute Service (ECS)",
            "regionId": "cn-hangzhou",
            "eventTime": "20240109T140533.642+0800",
            "name": "CloudAssistant:FirstHeartbeat",
            "id": "testid",
            "status": "Normal",
            "eventNameZh": "CloudAssistant:FirstHeartbeat"
          }
        }
      }
    ```
    
    severity
    
    INFO
    
    strategyName
    
    eventwebhook
    
    userId
    
    test
    
    time
    
    1704780333000
    

## **Return fields**

**Field**

**Description**

Outer fields

batchId

The batch ID of the current notification, representing each notification.

severity

The severity level.

strategyName

The subscription name.

userId

The user ID.

time

The event time.

Fields in the `userInfo` object

aliyunId

The ID of the Alibaba Cloud account.

userIdSec

The ID of the Resource Access Management (RAM) user.

aliyunIdSec

The masked account ID.

nickName

The alias of the Alibaba Cloud account.

nickNameSec

The masked alias of the Alibaba Cloud account.

userName

The ID of the logon account.

userId

The ID of the Alibaba Cloud account.

userNameSec

The masked ID of the logon account.

Fields in the `subscription` object

subscriptionUuid

The unique ID of the subscription policy.

conditions

The conditions of the event subscription policy. Valid values:

-   `field`: the subscription field
    
-   `op`: the comparison operator
    
-   `value`: the comparison value
    

relation

The subscription condition.

Valid values: AND and OR. Default value: AND.

Fields in the `alert` object

alertStatus

The alert status.

Valid values: TRIGGERED and RESOLVED.

groupId

The ID of the application group.

source

The type of the latest alert event.

dedupId

The deduplication ID of the event.

eventName

The event name.

arn

The Alibaba Cloud Resource Name (ARN) of the resource that triggers the event.

timestamp

The event timestamp.

traceId

The original ID of the event.

severity

The severity level.

product

The product name.

eventRawContent

The raw data content of the event in the JSON string format, which varies by cloud service.

eventType

The event type.

userId

The user ID.

Fields in the `meta.sysEventMeta` sub-object

regionNameEn

The English name of the region.

resourceId

The ID of the resource that triggers the event.

product

The product code.

eventNameEn

The English name of the event.

instanceName

The instance name.

level

The event level.

resource

The ARN of the system event.

regionNameZh

The Chinese name of the region.

groupId

The ID of the application group.

serviceTypeEn

The service type (English).

eventType

The event type.

serviceTypeZh

The service type (Chinese).

regionId

The region ID.

eventTime

The time when the event was generated.

name

The event name.

id

The event ID.

status

The event status.

eventNameZh

The Chinese name of the event.

Fields in the `eventContentMap` sub-object

The `eventContentMap` field contains information reported by various business parties. You need to check the event documentation of the specific cloud product.

## **References**

-   [Use the alert callback feature to send notifications about threshold-triggered alerts](/help/en/cms/cloudmonitor-1-0/user-guide/use-the-alert-callback-feature-to-send-notifications-about-threshold-triggered-alerts)
    
-   [Receive alert notifications in the PagerDuty console](/help/en/cms/cloudmonitor-1-0/use-cases/receive-alarm-notifications-via-pagerduty)
