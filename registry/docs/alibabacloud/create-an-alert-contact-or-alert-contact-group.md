Cloud Monitor sends alert notifications to alert contacts and alert contact groups. To receive alert notifications, you must create alert contacts and alert contact groups and add the alert contacts to the alert contact groups. When you create an alert rule, you can specify the alert contact groups that receive alert notifications.

## Background information

-   By default, Cloud Monitor automatically creates an alert contact group and adds your Alibaba Cloud account as an alert contact to the alert contact group.
    
-   Alert contact information storage and notification services provided by Cloud Monitor are deployed in Singapore.
    

## Create an alert contact

An alert contact can be added to multiple alert contact groups.

1.  Log on to the [Cloud Monitor console](https://cloudmonitor.console.alibabacloud.com/).
    
2.  In the left-side navigation pane, choose **Alerts** > **Alert Contacts**.
    
3.  On the **Alert Contacts** tab, click **Create Alert Contact**.
    
4.  In the **Set Alert Contact** panel, configure the parameters for the alert contact. The following table describes the parameters.
    
    **Parameter**
    
    **Description**
    
    Name
    
    The name of the alert contact. The name must start with a letter and must be 2 to 40 characters in length. It can contain letters, digits, periods (.), and underscores (\_).
    
    Region for alarm Notification Service
    
    The region where you want to use the alert notification service. Data provided by the alert notification service, such as the contact name and email address, are stored and processed in the selected region.
    
    Phone
    
    Only mobile phone numbers prefixed with the country code 86 support alert notifications via text messages.
    
    Email ID
    
    The email address of the alert contact.
    
    Description
    
    The description of the alert contact.
    
    DingTalk | Lark | WeCom | Slack Webhook(http|https)
    
    The webhook URL of the alert contact. The URL must start with http:// or https://.
    
    **Note**
    
    -   To test the connectivity of the webhook URL, click **Test** next to the webhook URL.
        
    -   In the **Webhook Test** panel, you can check and troubleshoot the connectivity of the webhook URL based on the returned status code and test result details.
        
    -   To obtain the details of the test result, configure the **Test Template Type** and **Language** parameters and click **Test**.
        
    
    Language of Alert Notifications
    
    The default value is **Automatic**. This indicates that Cloud Monitor automatically selects the language of alert notifications based on the language that you use to create your Alibaba Cloud account.
    
5.  Confirm the parameter settings and click **OK**.
    
6.  Optional. Activate the email address of the alert contact.
    
    By default, the email address of the alert contact is in the **Pending Activation** state. After the alert contact receives an email that contains the activation link, the alert contact must activate the email address within 24 hours. Otherwise, the alert contact cannot receive alert notifications. After the email address is activated, you can view the email address in the alert contact list.
    

## Create an alert contact group

An alert contact group can contain one or more alert contacts.

1.  Log on to the [Cloud Monitor console](https://cloudmonitor.console.alibabacloud.com/).
    
2.  In the left-side navigation pane, choose **Alerts** > **Alert Contacts**.
    
3.  Click the **Alert Contact Group** tab.
    
4.  On the **Alert Contact Group** tab, click **Create Alert Contact Group**.
    
5.  In the **Create Alert Contact Group** panel, enter a name for the alert contact group and add alert contacts to the alert contact group.
    
6.  Click **Confirm**.
    

## Add multiple alert contacts to an alert contact group at a time

You can add multiple alert contacts to an alert contact group at a time.

1.  Log on to the [Cloud Monitor console](https://cloudmonitor.console.alibabacloud.com/).
    
2.  In the left-side navigation pane, choose **Alerts** > **Alert Contacts**.
    
3.  On the **Alert Contacts** tab, select the desired alert contacts.
    
4.  Click **Add to Contact Group**.
    
5.  In the **Add to Contact Group** dialog box, select the desired alert contact group.
    
6.  Click **OK**.
    

## **References**

-   [Enable an alert contact to receive alert notifications in a DingTalk group](/help/en/cms/cloudmonitor-1-0/use-cases/enable-an-alert-contact-to-receive-alert-notifications-in-a-dingtalk-group)
    
-   [Enable an alert contact to receive alert notifications in a Lark group](/help/en/cms/cloudmonitor-1-0/use-cases/enable-an-alert-contact-to-receive-alert-notifications-in-a-lark-group)
    
-   [Enable an alert contact to receive alert notifications in a WeCom group](/help/en/cms/cloudmonitor-1-0/use-cases/enable-an-alert-contact-to-receive-alert-notifications-in-a-wecom-group)
