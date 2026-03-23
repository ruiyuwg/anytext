You can configure event notifications to track and monitor the status of DLC jobs, flow tasks, and DSW instances, or to automatically trigger downstream operations when the status of a model version changes.

## **1\. Activate EventBridge and grant permissions (first-time configuration)**

Before you create a notification rule for the first time, you must activate EventBridge and grant the required permissions.

To go to the configuration page, go to the [Workspace Details](https://pai.console.alibabacloud.com/#/workspace/detail/base) page. After you enter the specified workspace, click **Workspace Settings** > **Event Notification Configuration** in the upper-right corner.

### **1.1 Activate EventBridge**

On the Event Notification Configuration tab, click Activate for Free to open the EventBridge activation page. For more information, see [Activate EventBridge](/help/en/eventbridge/getting-started/activate-eventbridge-and-grant-permissions-to-a-ram-user#section-0ki-hgr-via).

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/0777020671/p1013909.png)

After activation, PAI automatically creates a custom event bus for each workspace named `pai-system-${Workspace Name}`. You can go to the [EventBridge console](https://eventbridge.console.alibabacloud.com/cn-hangzhou/event-buses?spm=a2c4g.11186623.0.0.670359463ZKM19), switch to the destination region, and view and manage the list of custom event buses.

### **1.2 Grant PAI permissions to access cloud resources**

Click **Grant Permission**. The system automatically creates the service-linked role **AliyunServiceRoleForPAIWorkspace** to grant PAI permissions to access your cloud resources. For more information about this role, see [Appendix: PAI Workspace Service-linked Role](/help/en/pai/user-guide/service-linked-role-aliyunserviceroleforpaiworkspace#concept-2249021).

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/9727951471/p912690.png)

### **1.3 (Optional) Grant a RAM user permissions to configure event notifications**

If you use a Resource Access Management (RAM) user to perform the configuration, you must grant the user permissions to operate EventBridge.

You can create a [custom policy](/help/en/ram/create-a-custom-policy#section-kwn-gu8-48m) and [grant permissions to the RAM user](/help/en/ram/user-guide/grant-permissions-to-the-ram-user). The policy is as follows:

```
{
  "Statement": [{
    "Effect": "Allow",
    "Action": [
      "eventbridge:CreateEventBus",
      "eventbridge:GetEventBus",
      "eventbridge:DeleteEventBus",
      "eventbridge:ListEventBuses",
      "eventbridge:CreateRule",
      "eventbridge:GetRule",
      "eventbridge:UpdateRule",
      "eventbridge:EnableRule",
      "eventbridge:DisableRule",
      "eventbridge:DeleteRule",
      "eventbridge:ListRules",
      "eventbridge:PutEvents",
      "eventbridge:UpdateTargets",
      "eventbridge:DeleteTargets",
      "eventbridge:ListTargets"
    ],
    "Resource": "acs:eventbridge:*:*:eventbus/*"
  }],
  "Version": "1"
}
```

## **2\. Create an event rule**

After you complete the initial configuration, return to the [Workspace Details](https://pai.console.alibabacloud.com/#/workspace/detail/base) page. On the **Workspace Settings** > **Event Notification Configuration** page, click **Create Event Rule** to begin the configuration.

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/9727951471/p912723.png)

### **2.1 Configure event types**

Select the event source and the specific event types that you want to monitor.

-   **Flow task**: Monitors the status of Designer flow tasks. Event types include Task Failed and Task Finished (includes success and failure).
    
-   **DLC job**: Monitors the lifecycle events of DLC jobs. Event types include job progress (such as entering the queue, starting bidding, starting to run, and job failed), automatic fault tolerance, job timeout (requires you to configure a timeout rule in the [scheduling settings](/help/en/pai/user-guide/create-and-manage-workspaces#45fd027f51so5)), and other events (such as job preemption and manual job stop).
    
-   **Model**: Monitors status changes of model versions in AI Asset Management. Event types include Model Version Approved for Publishing (status changes from Pending to Approved) and Model Version Status Changed (includes approved and not approved for publishing).
    
-   **DSW instance**: Monitors status changes of DSW instances and saved images. Event types include regular instance status changes (such as Creating and Instance Failed), image saving (such as Saving Image, Image Saved Successfully, and Image Save Failed), and instance shutdown (such as Instance Stopped and Stopping).
    

### **2.2 Configure event targets**

You can configure the notification method and recipients for when an event occurs.

-   **DingTalk notification**: Configure a webhook and a signing key. For more information, see [Appendix: Obtain a webhook and a key](#a9a239b8548ho). After the configuration is complete, click **Test Connectivity** to verify the connection.
    
-   **WeCom notification:** Configure the webhook URL for WeCom message push.
    
-   **Lark notification:** Configure the webhook URL for a custom Lark bot.
    
-   **HTTP/HTTPS**: Automatically calls a specified URL when the status of a model version changes. This method applies only to the **Model** event type. The receiving API must parse the data according to the standard template.
    
-   **Voice call, text message, and email**: Sends notifications to specified contacts by phone call, text message, or email. This method does not apply to the **Model** event type. If no contacts are available, you must first configure the [message receiving settings](/help/en/account/support/message-received-management-settings).
    

**Important**

The default number of event targets for a single rule is 5. If this does not meet your needs, you can [request a quota increase](https://quotas.console.alibabacloud.com/products/eventbridge/quotas). Request a quota of no more than 100. Note: When you configure voice calls, text messages, or emails, each contact you add consumes one quota unit. Contacts are not deduplicated and are counted cumulatively. For example, if you add Alice and Tony as contacts for text messages and add Alice and Alan for emails, the total quota consumed is 4.

## **FAQ**

**Q: What should I do if I receive a** `**ServiceNotEnable**` **error when I go to the Event Notification Configuration page?**

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/0777020671/p1013905.png)

A: This error indicates that the EventBridge service has not been activated. You must first [activate EventBridge](#e04194896arnz).

## **Appendix: Obtain a webhook and a key**

1.  In the DingTalk group where you want to receive notifications, open the group bot dialog box as shown in the following figure.
    
    ![机器人](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/5754534271/p494742.png)
    
2.  Open the **Add Robot** dialog box as shown in the following figure.
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/5901834271/p839087.png)
    
3.  In the Add Robot dialog box, configure the required parameters, copy the key, and then click **Finished**.
    
    **Important**
    
    Save the copied key for later use.
    
    ![添加机器人](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/1867257661/p494754.png)
    
4.  In the **Add Robot** dialog box, click **Copy** to copy the webhook and then click **Finished**.
    
    **Important**
    
    Save the webhook for later use.
    
    ![添加机器人](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/1867257661/p494757.png)
    

The key and webhook that you obtained in Step 3 and Step 4 are the values required for the **Signing Key** and **Webhook** fields when you create an event rule in the [Event notification configuration](/help/en/pai/user-guide/create-and-manage-workspaces#646d33995c3s2) section.
