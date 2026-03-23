You can modify the information of an alert contact. You can also add alert contacts to or remove alert contacts from an alert contact group at any time. This allows you to manage alert contacts and alert contact groups flexibly.

## Modify an alert contact

1.  Log on to the [CloudMonitor console](https://cloudmonitor.console.alibabacloud.com/).
2.  In the left-side navigation pane, choose **Alerts** > **Alert Contacts**.
    
3.  On the **Alert Contacts** tab, find the alert contact that you want to modify and click **Edit** in the **Actions** column.
    
4.  In the **Set Alert Contact** panel, modify the email address and webhook URL of the alert contact. Retain the default value **Automatic** for the **Language of Alert Notifications** parameter.
    
    **Note** **Automatic** indicates that CloudMonitor automatically selects the language of alert notifications based on the language that you use to create your Alibaba Cloud account.
    
5.  Optional. Test the connectivity of the webhook URL.
    
    If you want to test the connectivity of the webhook URL, perform the following steps:
    
    1.  Click **Test** next to the webhook URL.
        
        In the **WebHook test** panel, you can check and troubleshoot the connectivity of the webhook URL based on the returned status code and test result details.
        
        **Note**
        
        To obtain the details of the test result, configure the **Template Type** and **Language** parameters and click **Test**.
        
    2.  Click **Close**.
        
6.  Verify the parameters and click **OK**.
    
7.  Optional. Activate the email address of the alert contact.
    
    By default, the email address of the alert contact is in the **Pending Activation** state. After the alert contact receives an email that contains the activation link, the alert contact must activate the email address within 24 hours. Otherwise, the alert contact cannot receive alert notifications. After the email address is activated, you can view the email address in the alert contact list.
    

## Modify an alert contact group

1.  Log on to the [CloudMonitor console](https://cloudmonitor.console.alibabacloud.com/).
2.  In the left-side navigation pane, choose **Alerts** > **Alert Contacts**.
    
3.  Click the **Alert Contact Group** tab.
    
4.  On the **Alert Contact Group** tab, find the alert contact group that you want to modify and click the ![Edit](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/7237793161/p111890.png) icon.
    
5.  In the **Modify Alert Contact Group** panel, reselect the alert contacts.
    
6.  Click **Confirm**.
