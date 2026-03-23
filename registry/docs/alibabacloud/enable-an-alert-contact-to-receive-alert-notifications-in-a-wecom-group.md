To enable an alert contact to receive alert notifications in a WeCom group, you must add the webhook URL of a WeCom chatbot to the alert contact and configure an alert rule. Then, if the alert rule is triggered, the alert contact can receive alert notifications in the WeCom group.

## Prerequisites

An alert contact is created. For more information, see [Create an alert contact or alert contact group](/help/en/cms/cloudmonitor-1-0/user-guide/create-an-alert-contact-or-alert-contact-group#task-2514452).

## Step 1: Create a WeCom chatbot

The following procedure describes how to create a chatbot in the WeCom app.

1.  Start the WeCom app and go to the WeCom group to which the alert contact belongs.
    
2.  Click the ![Group Settings](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/2130720661/p466774.png) icon in the upper-right corner.
    
3.  Click the ![Add](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/2130720661/p466777.png) icon next to **Group Bots**.
    
4.  Click **Add a Bot**.
    
5.  Click **Create**.
    
6.  Enter a chatbot name, for example, Cloud Monitor alert notifications.
    
7.  Click **Add**.
    
8.  Click **Copy** to copy the webhook URL.
    

## Step 2: Add the webhook URL of the WeCom chatbot to the alert contact

Add the webhook URL of the WeCom chatbot to the alert contact.

1.  Log on to the [Cloud Monitor console](https://cloudmonitor.console.alibabacloud.com/).
    
2.  In the left-side navigation pane, choose **Alerts** > **Alert Contacts**.
    
3.  On the **Alert Contacts** tab, find the alert contact that you want to modify and click **Edit** in the **Actions** column.
    
4.  In the **Set Alert Contact** panel, enter the webhook URL of the WeCom chatbot.
    
    To test the connectivity of an alert callback URL, perform the following steps:
    
    1.  Click **Test** next to the callback URL.
        
        In the **Webhook Test** panel, you can check and troubleshoot the connectivity of the alert callback URL based on the returned status code and test result details.
        
        **Note**
        
        To obtain the details of the test result, configure the **Test Template Type** and **Language** parameters and click **Test**.
        
    2.  Click **Close**.
        
    
5.  Confirm the parameter values and click **OK**.
    

## Step 3: Create an alert contact group

Add the alert contact to an alert contact group.

1.  Log on to the [Cloud Monitor console](https://cloudmonitor.console.alibabacloud.com/).
    
2.  In the left-side navigation pane, choose **Alerts** > **Alert Contacts**.
    
3.  Click the **Alert Contact Group** tab.
    
4.  On the **Alert Contact Group** tab, click **Create Alert Contact Group**.
    
5.  In the **Create Alert Contact Group** panel, enter a name for the alert contact group and add the alert contact to the group.
    
6.  Click **Confirm**.
    

## Step 4: Create an alert rule

Set an alert condition for the metrics of the resource and select an alert contact group.

For more information about how to create an alert rule, see [Create an alert rule](/help/en/cms/cloudmonitor-1-0/user-guide/create-an-alert-rule#task-2181123).

## Step 5: View alert notifications

If a metric meets the specified condition in the alert rule, the WeCom group receives an alert notification.
