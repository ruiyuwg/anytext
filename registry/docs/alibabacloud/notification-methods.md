This topic describes the usage notes, prerequisites, and parameters for each notification method.

## Background information

When you create an action group, you can select the following methods to send alert notifications:

-   User: SMS Message, Voice Call, and Email
    
-   Webhook:
    
    -   DingTalk, Enterprise WeChat, Lark, Slack, and Universal Webhook
        
        You can select a webhook that you created for the action group. You can manage webhooks on the Webhook Integration tab. For more information, see [Create a webhook](/help/en/sls/create-a-webhook#task-2089420).
        
    -   DingTalk-Custom and Webhook-Custom
        
        You must enter information such as a webhook URL for the action group. The two methods are reserved to ensure compatibility with historical configurations. We recommend that you select a webhook available on the Webhook Integration tab when you create an action policy.
        
-   Others: Message Center, EventBridge, and Function Compute
    

## SMS Message

If you select SMS Message for Notification Method, Simple Log Service sends alert notifications to specified users, user groups, or on-duty groups by using text messages after alerts are triggered.

-   Usage notes
    
    If you select SMS Message, alert notifications are sent from random numbers. Fixed numbers cannot be provided.
    
-   Prerequisites
    
    Users, user groups, or on-duty groups are created. For more information, see [Create users and user groups](/help/en/sls/create-users-and-user-groups#task-2045211) and [Create an on-duty group](/help/en/sls/create-an-on-duty-group#task-2056543).
    
-   Parameters
    
    If you want Simple Log Service to send alert notifications by using text messages, you must configure the following parameters in the **Action Group** dialog box. For more information, see [Create an action policy](/help/en/sls/create-an-action-policy/#task-2045212).
    
    **Parameter**
    
    **Description**
    
    **Notification Method**
    
    Select **SMS Message**.
    
    **Recipient**
    
    Select users, user groups, or on-duty groups to which alert notifications are sent.
    
    **Alert Template**
    
    Select an alert template, which determines the content of an alert notification. Simple Log Service sends alert notifications based on the selected alert template.
    
    **Period**
    
    Select a period during which Simple Log Service can send alert notifications. For more information, see [Periods for sending alert notifications](/help/en/sls/periods-for-sending-alert-notifications#reference-2066129).
    

## Voice Call

If you select Voice Call for Notification Method, Simple Log Service sends alert notifications to specified users, user groups, or on-duty groups by using voice calls after alerts are triggered.

-   Usage notes
    
    -   If a call to a mobile phone number is not answered, Simple Log Service sends a text message to the number.
        
    -   Due to dynamic changes in the calling number pool, we recommend that you disable the blocking features of carriers and mobile assistants. Otherwise, the normal acceptance of alert calls and text messages may be affected.
        
-   Prerequisites
    
    Users, user groups, or on-duty groups are created. For more information, see [Create users and user groups](/help/en/sls/create-users-and-user-groups#task-2045211) and [Create an on-duty group](/help/en/sls/create-an-on-duty-group#task-2056543).
    
-   Parameters
    
    If you want Simple Log Service to send alert notifications by using voice calls, you must configure the following parameters in the **Action Group** dialog box. For more information, see [Create an action policy](/help/en/sls/create-an-action-policy/#task-2045212).
    
    **Parameter**
    
    **Description**
    
    **Notification Method**
    
    Select **Voice Call**.
    
    **Recipient**
    
    Select users, user groups, or on-duty groups to which alert notifications are sent.
    
    **Important**
    
    The voice call notification method supports only mobile phone numbers in the Chinese mainland, which are prefixed with 86. Make sure that you select users whose mobile phone numbers are prefixed with 86. You can specify a mobile phone number when you create a user.
    
    **Alert Template**
    
    Select an alert template, which determines the content of an alert notification. Simple Log Service sends alert notifications based on the selected alert template.
    
    **Period**
    
    Select a period during which Simple Log Service can send alert notifications. For more information, see [Periods for sending alert notifications](/help/en/sls/periods-for-sending-alert-notifications#reference-2066129).
    

## Email

If you select Email for Notification Method, Simple Log Service sends alert notifications to specified users, user groups, or on-duty groups by using emails after alerts are triggered.

-   Usage notes
    
    Simple Log Service sends alert notifications by using the monitor-sg@monitor.alibabacloud.com email address. To prevent the emails from this address from being blocked, we recommend that you add this address to the whitelist of your email address.
    
-   Prerequisites
    
    Users, user groups, or on-duty groups are created. For more information, see [Create users and user groups](/help/en/sls/create-users-and-user-groups#task-2045211) and [Create an on-duty group](/help/en/sls/create-an-on-duty-group#task-2056543).
    
-   Parameters
    
    If you want Simple Log Service to send alert notifications by using emails, you must configure the following parameters in the **Action Group** dialog box. For more information, see [Create an action policy](/help/en/sls/create-an-action-policy/#task-2045212).
    
    **Parameter**
    
    **Description**
    
    **Notification Method**
    
    Select **Email**.
    
    **Recipient**
    
    Select users, user groups, or on-duty groups to which alert notifications are sent.
    
    **Alert Template**
    
    Select an alert template, which determines the content of an alert notification. Simple Log Service sends alert notifications based on the selected alert template.
    
    **Period**
    
    Select a period during which Simple Log Service can send alert notifications. For more information, see [Periods for sending alert notifications](/help/en/sls/periods-for-sending-alert-notifications#reference-2066129).
    

## DingTalk-Custom

If you select DingTalk-Custom for Notification Method, Simple Log Service sends alert notifications to a specified DingTalk group by using a DingTalk chatbot after alerts are triggered. The chatbot can also remind specified members in the group of the alert notifications.

-   Usage notes
    
    Each DingTalk chatbot can send a maximum of 20 alert notifications every minute.
    
-   Prerequisites
    
    Before you can use DingTalk to receive alert notifications, complete the following configurations:
    
    -   Create a DingTalk chatbot and set the Consumption Mode parameter of the chatbot to HTTP.
        
    -   Open DingTalk. Go to a DingTalk group and click the ![群设置](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/2239872261/p264468.png) icon in the upper-right corner.
        
    -   Choose **Bot** > **Add Robot**. Add the chatbot that you created.
        
    -   In the robot management page, view the chatbot and copy its webhook URL.
        
-   Parameters
    
    If you want Simple Log Service to send alert notifications by using the DingTalk-Custom method, you must configure the following parameters in the **Action Group** dialog box. For more information, see [Create an action policy](/help/en/sls/create-an-action-policy/#task-2045212).
    
    **Parameter**
    
    **Description**
    
    **Notification Method**
    
    Select **DingTalk-Custom**.
    
    **Request URL**
    
    Enter the webhook URL that is generated in the DingTalk group.
    
    **Notified Contacts**
    
    Determine whether to remind specified members in the group of alert notifications. Valid values: No Reminder, All, and Specified Members.
    
    If you select **Specified Members**, you must specify users, user groups, or on-duty groups.
    
    **Alert Template**
    
    Select an alert template, which determines the content of an alert notification. Simple Log Service sends alert notifications based on the selected alert template.
    
    **Note**
    
    DingTalk supports the Markdown syntax. For more information, see [DingTalk](/help/en/sls/non-customized-notification-content#section-krr-9fg-7uf).
    
    **Period**
    
    Select a period during which Simple Log Service can send alert notifications. For more information, see [Periods for sending alert notifications](/help/en/sls/periods-for-sending-alert-notifications#reference-2066129).
    

## Webhook-Custom

If you select Webhook-Custom for Notification Method, Simple Log Service sends alert notifications to a custom webhook URL after alerts are triggered.

-   Usage notes
    
    The timeout period of a webhook is 5 seconds. If the HTTP status code 200 is not returned within 5 seconds after a request is sent to invoke a webhook, the request fails.
    
-   Prerequisites
    
    A webhook URL is obtained.
    
-   Parameters
    
    If you want Simple Log Service to send alert notifications by using the Webhook-Custom method, you must configure the following parameters in the **Action Group** dialog box. For more information, see [Create an action policy](/help/en/sls/create-an-action-policy/#task-2045212).
    
    **Note**
    
    If a webhook is successfully invoked, the HTTP status code 200 is returned. If the HTTP status code 200 is not returned, Simple Log Service considers that the request fails. In this case, the webhook is invoked again.
    
    **Parameter**
    
    **Description**
    
    **Notification Method**
    
    Select **Webhook-Custom**.
    
    **Request URL**
    
    Enter a custom webhook URL, which must be accessible over the Internet. For example, you can enter a public domain name or a URL that includes a string in the IP:Port format.
    
    **Alert Template**
    
    Select an alert template, which determines the content of an alert notification. Simple Log Service sends alert notifications based on the selected alert template.
    
    If you select Webhook-Custom, we recommend that you select an alert template whose content is in the JSON format.
    
    **RequestMode**
    
    Select a request method. Valid values: GET, POST, DELETE, PUT, and OPTIONS.
    
    If you have no special requirements, we recommend that you select the POST method because this method is best supported among web frameworks.
    
    **Request Header**
    
    Add a request header. You must click **Add Request Header** to add a request header. Example: Content-Type: application/json;charset=utf-8.
    
    **Period**
    
    Select a period during which Simple Log Service can send alert notifications. For more information, see [Periods for sending alert notifications](/help/en/sls/periods-for-sending-alert-notifications#reference-2066129).
    

## Message Center

If you select Message Center for Notification Method, Simple Log Service sends alert notifications to specified recipients by using internal messages after alerts are triggered.

-   Prerequisites
    
    Before Simple Log Service can send alert notifications by using Message Center, you must complete the following configurations in Alibaba Cloud Message Center:
    
    1.  Log on to the [Message Center console](https://notifications.console.alibabacloud.com/?spm=5176.202052012811.aliyun_topbar.162.zRRPhO#/subscribeMsg).
        
    2.  Choose **Message Settings** > **Common Settings**. On the page that appears, click **Modify** next to **Simple Log Service Alarm Notification**.
        
    3.  In the **Modify Contact** dialog box, select the contacts to which you want Simple Log Service to send alert notifications. Then, click **Save**.
        
        Only the owner of an Alibaba Cloud account can add contacts. After you add a contact, Alibaba Cloud sends verification information to the specified email address. The contact can receive alert notifications only after the email address is verified.
        
        **Note**
        
        -   You must select at least one contact.
            
        -   The default notification method is Email and cannot be changed.
            
        
-   Parameters
    
    If you want Simple Log Service to send alert notifications by using Message Center, you must configure the following parameters in the **Action Group** dialog box. For more information, see [Create an action policy](/help/en/sls/create-an-action-policy/#task-2045212).
    
    **Parameter**
    
    **Description**
    
    **Notification Method**
    
    Select **Message Center**.
    
    **Alert Template**
    
    Select an alert template, which determines the content of an alert notification. Simple Log Service sends alert notifications based on the selected alert template.
    
    **Period**
    
    Select a period during which Simple Log Service can send alert notifications. For more information, see [Periods for sending alert notifications](/help/en/sls/periods-for-sending-alert-notifications#reference-2066129).
    

## DingTalk

If you select DingTalk for Notification Method, Simple Log Service sends alert notifications to a specified DingTalk group by using a DingTalk chatbot after alerts are triggered. The chatbot can also remind specified members in the group of the alert notifications.

-   Usage notes
    
    Each DingTalk chatbot can send a maximum of 20 alert notifications every minute.
    
-   Prerequisites
    
    A webhook is created. For more information, see [Create a webhook](/help/en/sls/create-a-webhook#task-2089420).
    
-   Parameters
    
    If you want Simple Log Service to send alert notifications by using DingTalk, you must configure the following parameters in the **Action Group** dialog box. For more information, see [Create an action policy](/help/en/sls/create-an-action-policy/#task-2045212).
    
    **Parameter**
    
    **Description**
    
    **Notification Method**
    
    Select **DingTalk**.
    
    **Select Webhook**
    
    Select the webhook that you created.
    
    **Notified Contacts**
    
    Determine whether to remind specified members in the group of alert notifications. Valid values: No Reminder, All, and Specified Members.
    
    If you select **Specified Members**, you must specify users, user groups, or on-duty groups.
    
    **Alert Template**
    
    Select an alert template, which determines the content of an alert notification. Simple Log Service sends alert notifications based on the selected alert template.
    
    **Note**
    
    DingTalk supports the Markdown syntax. For more information, see [Content formatting](/help/en/sls/custom-notification-content#section-gar-lcm-fof).
    
    **Period**
    
    Select a period during which Simple Log Service can send alert notifications. For more information, see [Periods for sending alert notification](/help/en/sls/periods-for-sending-alert-notifications#reference-2066129).
    

## Enterprise WeChat

If you select Enterprise WeChat for Notification Method, Simple Log Service sends alert notifications to a specified Enterprise WeChat group by using an Enterprise WeChat robot after alerts are triggered.

-   Prerequisites
    
    A webhook is created. For more information, see [Create a webhook](/help/en/sls/create-a-webhook#task-2089420).
    
-   Parameters
    
    If you want Simple Log Service to send alert notifications by using Enterprise WeChat, you must configure the following parameters in the **Action Group** dialog box. For more information, see [Create an action policy](/help/en/sls/create-an-action-policy/#task-2045212).
    
    **Parameter**
    
    **Description**
    
    **Notification Method**
    
    Select **Enterprise WeChat**.
    
    **Select Webhook**
    
    Select the webhook that you created.
    
    **Notified Contacts**
    
    Determine whether to remind specified members in the group of alert notifications. Valid values: No Reminder, All, and Specified Members.
    
    If you select **Specified Members**, you must specify users, user groups, or on-duty groups.
    
    **Important**
    
    If you select **All** or **Specified Members**, Enterprise WeChat supports only plain text in alert notifications, instead of the Markdown syntax.
    
    **Alert Template**
    
    Select an alert template, which determines the content of an alert notification. Simple Log Service sends alert notifications based on the selected alert template.
    
    **Note**
    
    Enterprise WeChat supports the Markdown syntax. For more information, see [Content formatting](/help/en/sls/custom-notification-content#section-gar-lcm-fof).
    
    **Period**
    
    Select a period during which Simple Log Service can send alert notifications. For more information, see [Periods for sending alert notifications](/help/en/sls/periods-for-sending-alert-notifications#reference-2066129).
    

## Lark

If you select Lark for Notification Method, Simple Log Service sends alert notifications to a specified Lark group by using a Lark robot after alerts are triggered.

-   Prerequisites
    
    A webhook is created. For more information, see [Create a webhook](/help/en/sls/create-a-webhook#task-2089420).
    
-   Parameters
    
    If you want Simple Log Service to send alert notifications by using Lark, you must configure the following parameters in the **Action Group** dialog box. For more information, see [Create an action policy](/help/en/sls/create-an-action-policy/#task-2045212).
    
    **Parameter**
    
    **Description**
    
    **Notification Method**
    
    Select **Lark**.
    
    **Select Webhook**
    
    Select the webhook that you created.
    
    **Notified Contacts**
    
    Determine whether to remind specified members in the group of alert notifications. Valid values: No Reminder and All.
    
    **Alert Template**
    
    Select an alert template, which determines the content of an alert notification. Simple Log Service sends alert notifications based on the selected alert template.
    
    **Note**
    
    Lark supports the Markdown syntax. For more information, see [Content formatting](/help/en/sls/custom-notification-content#section-gar-lcm-fof).
    
    **Period**
    
    Select a period during which Simple Log Service can send alert notifications. For more information, see [Periods for sending alert notifications](/help/en/sls/periods-for-sending-alert-notifications#reference-2066129).
    

## Slack

If you select Slack for Notification Method, Simple Log Service sends alert notifications to specified Slack users after alerts are triggered.

-   Prerequisites
    
    A webhook is created. For more information, see [Create a webhook](/help/en/sls/create-a-webhook#task-2089420).
    
-   Parameters
    
    If you want Simple Log Service to send alert notifications by using Slack, you must configure the following parameters in the **Action Group** dialog box. For more information, see [Create an action policy](/help/en/sls/create-an-action-policy/#task-2045212).
    
    **Parameter**
    
    **Description**
    
    **Notification Method**
    
    Select **Slack**.
    
    **Select Webhook**
    
    Select the webhook that you created.
    
    **Alert Template**
    
    Select an alert template, which determines the content of an alert notification. Simple Log Service sends alert notifications based on the selected alert template.
    
    **Note**
    
    Slack supports the Markdown syntax. For more information, see [Content formatting](/help/en/sls/custom-notification-content#section-gar-lcm-fof).
    
    **Period**
    
    Select a period during which Simple Log Service can send alert notifications. For more information, see [Periods for sending alert notifications](/help/en/sls/periods-for-sending-alert-notifications#reference-2066129).
    

## Universal Webhook

If you select Universal Webhook for Notification Method, Simple Log Service sends alert notifications to a custom webhook URL after alerts are triggered.

-   Prerequisites
    
    A webhook is created. For more information, see [Create a webhook](/help/en/sls/create-a-webhook#task-2089420).
    
-   Parameters
    
    If you want Simple Log Service to send alert notifications by using universal webhooks, you must configure the following parameters in the **Action Group** dialog box. For more information, see [Create an action policy](/help/en/sls/create-an-action-policy/#task-2045212).
    
    **Parameter**
    
    **Description**
    
    **Notification Method**
    
    Select **Universal Webhook**.
    
    **Select Webhook**
    
    Select the webhook that you created.
    
    **Alert Template**
    
    Select an alert template, which determines the content of an alert notification. Simple Log Service sends alert notifications based on the selected alert template.
    
    **Period**
    
    Select a period during which Simple Log Service can send alert notifications. For more information, see [Periods for sending alert notifications](/help/en/sls/periods-for-sending-alert-notifications#reference-2066129).
    

## EventBridge

If you select EventBridge for Notification Method, Simple Log Service sends alert events to a custom event bus after alerts are triggered.

-   Prerequisites
    
    -   A custom event bus is created in Alibaba Cloud EventBridge. For more information, see [Create a custom event bus](/help/en/eventbridge/user-guide/manage-custom-event-buses#section-sfl-pcs-6rh).
        
        **Note**
        
        You can create a custom event bus without configuring the event source. If you want to configure the event source, you must create an event source named acs.sls.alert. The name is the same as the value of the source field in the alert events.
        
    -   If you use a RAM user, the RAM user is granted the permissions specified by the AliyunEventBridgeReadOnlyAccess policy.
        
-   Parameters
    
    If you want Simple Log Service to send alert notifications by using EventBridge, you must configure the following parameters in the **Action Group** dialog box. For more information, see [Create an action policy](/help/en/sls/create-an-action-policy/#task-2045212).
    
    **Parameter**
    
    **Description**
    
    **Notification Method**
    
    Select **EventBridge**.
    
    **Region**
    
    Select the region of the event bus that you created.
    
    **Event Bus**
    
    Select the event bus that you created. Simple Log Service sends alert events to the event bus.
    
    **Alert Template**
    
    Select an alert template, which determines the content of an alert notification. Simple Log Service sends alert notifications based on the selected alert template.
    
    **Period**
    
    Select a period during which Simple Log Service can send alert notifications. For more information, see [Periods for sending alert notifications](/help/en/sls/periods-for-sending-alert-notifications#reference-2066129).
    
-   Event fields
    
    After an alert is triggered, Simple Log Service generates an alert event and sends the alert event to a specified event bus. For more information, see [Overview](/help/en/eventbridge/user-guide/event-overview#concept-1938024). The following table describes the fields of an alert event that is generated by Simple Log Service.
    
    **Important**
    
    -   If multiple alerts are triggered, Simple Log Service generates an alert event for each alert. The alerts are not merged.
        
    -   If the content of the alert template that is used for EventBridge is not in the JSON format, the variables in the data field cannot be used for the event rule of the event bus after an alert event is sent.
        
    
    **Field**
    
    **Description**
    
    id
    
    The ID of the event. The ID is globally unique.
    
    source
    
    The event source. The value is fixed as acs.sls.alert.
    
    specversion
    
    The version of the CloudEvents specification. The current version is 1.0.
    
    type
    
    The event type.
    
    -   If the status of the alert is firing, the value of the type field is sls:AlertEvent:Firing.
        
    -   If the status of the alert is resolved, the value of the type field is sls:AlertEvent:Resolved.
        
    
    datacontenttype
    
    The content type of the data field. The value is fixed as application/json.
    
    subject
    
    The subject of the event. The subject field corresponds to the subject of the alert template that is used for EventBridge.
    
    time
    
    The time when the event occurred. The time field corresponds to the alert\_time field in the alert message.
    
    data
    
    The content of the event. The data field corresponds to the content of the alert template that is used for EventBridge. The value of the data field must be in the JSON format.
    

## Function Compute

If you select Function Compute for Notification Method, Simple Log Service invokes the function that you created after alerts are triggered.

-   Usage notes
    
    -   Only non-HTTP functions are supported. If you use HTTP functions, we recommend that you select Webhook-Custom for Notification Method.
        
    -   Only the functions whose names start with sls-ops- are supported.
        
-   Prerequisites
    
    -   A service and a non-HTTP function are created in Function Compute. For more information, see [Quickly create a function](/help/en/functioncompute/fc-2-0/create-a-function-in-the-function-compute-console#multiTask782).
        
    -   If you use a RAM user, the RAM user is granted the permissions specified by the AliyunFCReadOnlyAccess policy.
        
-   Parameters
    
    If you want Simple Log Service to send alert notifications by using Function Compute, you must configure the following parameters in the **Action Group** dialog box. For more information, see [Create an action policy](/help/en/sls/create-an-action-policy/#task-2045212).
    
    **Parameter**
    
    **Description**
    
    **Notification Method**
    
    Select **Function Compute**.
    
    **Region**
    
    Select the region of the function that you created.
    
    **Service**
    
    Select the service that you created.
    
    **Version/Alias**
    
    Select the version or alias of the service. Default value: LATEST.
    
    **Function**
    
    Select the function that you created. Only the functions whose names start with sls-ops- are supported.
    
    **Alert Template**
    
    Select an alert template, which determines the content of an alert notification. Simple Log Service sends alert notifications based on the selected alert template.
    
    **Period**
    
    Select a period during which Simple Log Service can send alert notifications. For more information, see [Periods for sending alert notifications](/help/en/sls/periods-for-sending-alert-notifications#reference-2066129).
