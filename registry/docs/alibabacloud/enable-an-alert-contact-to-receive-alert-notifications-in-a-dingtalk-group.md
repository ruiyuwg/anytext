To enable an alert contact to receive alert notifications in a DingTalk group, you must add the webhook URL of a DingTalk chatbot to the alert contact and configure an alert rule. Then, if the alert rule is triggered, the alert contact can receive alert notifications in the DingTalk group.

## Prerequisites

An alert contact is created. For more information, see [Create an alert contact or alert contact group](/help/en/cms/cloudmonitor-1-0/user-guide/create-an-alert-contact-or-alert-contact-group#task-2514452).

**Note**

This topic describes how to enable an alert contact to receive alert notifications in a DingTalk group. You can directly [run the sample code in Terraform Explorer](https://api.alibabacloud.com/terraform?resource=alicloud_cms_monitor_group&exampleId=&activeTab=example&provider=1.242.0&product=Cloud_Monitor_Service&example=201-use-case-receive-alert-notifications-in-dingtalk-group).

## Step 1: Create a DingTalk chatbot

1.  For more information about how to create a DingTalk chatbot, see Steps 1, 3, 4, 5, and 6 in [Create a DingTalk chatbot](https://open.dingtalk.com/document/isvapp/enterprise-internal-robots-use-webhook-to-send-group-chat-messages).
    
    **Note**
    
    -   Starting from 00:00:00 on September 1, 2023, non-enterprise DingTalk groups no longer support custom chatbots. Existing custom chatbots are not affected.
        
    -   When you create a chatbot, add keywords one by one, including **Monitor**, **ECS**, and **Alert**.
        
    -   The DingTalk chatbot webhook feature had been gradually commercialized from January 1, 2024, and was fully commercialized on February 1. DingTalk provides 5,000 calls free of charge per calendar month. For more information, see [Announcement of commercialization of Webhook and Stream](https://open.dingtalk.com/document/orgapp/webhook-stream-free-to-commercialization-announcement).
        
    -   In the DingTalk application center, you can activate Alibaba Cloud Mini Program to obtain alert notifications free of charge by using DingTalk. Click [Activate Now](https://oa.dingtalk.com/register_new.htm?source=aliyun_app#/).
        
    

## Step 2: Add the webhook URL of the DingTalk chatbot to the alert contact

Add the webhook URL of the DingTalk chatbot to the alert contact.

1.  Log on to the [CloudMonitor console](https://cloudmonitor.console.alibabacloud.com/).
    
2.  In the left-side navigation pane, choose **Alerts** > **Alert Contacts**.
    
3.  On the **Alert Contacts** tab, find the alert contact that you want to modify and click **Edit** in the **Actions** column.
    
4.  In the **Set Alert Contact** panel, enter the webhook URL of the DingTalk chatbot.
    
    To test the connectivity of an alert callback URL, perform the following steps:
    
    1.  Click **Test** next to the callback URL.
        
        In the **Webhook Test** panel, you can check and troubleshoot the connectivity of the alert callback URL based on the returned status code and test result details.
        
        **Note**
        
        To obtain the details of the test result, configure the **Test Template Type** and **Language** parameters and click **Test**.
        
    2.  Click **Close**.
        
    
5.  Confirm the parameter settings and click **OK**.
    

## Step 3: Create an alert contact group

Add the alert contact to an alert contact group.

1.  Log on to the [CloudMonitor console](https://cloudmonitor.console.alibabacloud.com/).
    
2.  In the left-side navigation pane, choose **Alerts** > **Alert Contacts**.
    
3.  Click the **Alert Contact Group** tab.
    
4.  On the **Alert Contact Group** tab, click **Create Alert Contact Group**.
    
5.  In the **Create Alert Contact Group** panel, enter a name for the alert contact group and add the alert contact to the group.
    
6.  Click **Confirm**.
    

## Step 4: Create an alert rule

Set an alert condition for the metrics of the resource and select an alert contact group.

For more information about how to create an alert rule, see [Create an alert rule](/help/en/cms/cloudmonitor-1-0/user-guide/create-an-alert-rule#task-2181123).

## Step 5: View alert notifications

If a metric meets the specified condition in the alert rule, the DingTalk group receives an alert notification.![钉钉报警通知](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/9694732661/p474194.png)
