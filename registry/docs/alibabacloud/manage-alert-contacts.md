Database Autonomy Service (DAS) provides the alerting feature. This topic describes how to configure and manage alert contacts and alert groups.

## Add an alert contact

1.  Log on to the [DAS console](https://hdm.console.alibabacloud.com/).
    
2.  In the left-side navigation pane, choose **Tools** > **Alert Service** > **Alert Contacts**.
    
3.  On the Alert Contacts page, click **Add Contact** in the upper-right corner.
    
    ![Contact](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/8230681661/p468822.png)
    
    **Note**
    
    You can also click Synchronize CloudMonitor Contacts to add alert contacts.
    
4.  In the Add Contact dialog box, configure the parameters that are described in the following table and click **OK**.
    
    **Parameter**
    
    **Description**
    
    Full Name
    
    The name of the alert contact.
    
    Phone Number
    
    The mobile number of the alert contact. After you enter a mobile number, click **Send Verification Code**.
    
    Verification Code
    
    The verification code received by the alert contact by text message.
    
    Email
    
    The email address of the alert contact. After you enter an email address, click **Send Verification Code**.
    
    Verification Code
    
    The verification code received by the alert contact by email.
    
    Webhook
    
    The webhook URL.
    
    **Note**
    
    -   Webhook supports DingTalk, WeCom, Lark, and Application Real-Time Monitoring Service (ARMS).
        
    -   When configuring the DingTalk chatbot, you need to configure the keyword **DAS Alarm** in the security settings.
        
    
    Add to Existing Contact Group
    
    The existing alert group to which you want to add the alert contact.
    

## Create an alert group

1.  Log on to the [DAS console](https://hdm.console.alibabacloud.com/).
    
2.  In the left-side navigation pane, choose **Tools** > **Alert Service** > **Alert Contacts**.
    
3.  Click the **Alert Contact Groups** tab. Then, click **Add Contact Group** in the upper-right corner.
    
    ![d](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/8230681661/p172321.png)
    
4.  In the Add Contact Group dialog box, configure the parameters that are described in the following table and click **OK**.
    
    **Parameter**
    
    **Description**
    
    Group Name
    
    The name of the alert group.
    
    Note
    
    The notes for the alert group.
    
    Select Contacts
    
    The alert contacts that you want to add to the alert group. You can select contacts from the Existing Contacts section or click Create Contact to add alert contacts.
